/* ============================================================
   Reasoning GP — Case Library batch 51: "Paediatric symptom clinic"
   Four ORIGINAL cases: ear discharge (otitis media, antibiotic
   stewardship), constipation in a 5-year-old (disimpaction done
   properly), reflux in a baby (feeding, red flags, parental
   exhaustion), and bedwetting in a 7-year-old (enuresis without
   shame). None map to an NG12 cancer pathway; none is invented,
   but the NG12 children's red flags (e.g. unexplained petechiae/
   hepatosplenomegaly/persistent bone pain) are held as safety-net
   awareness where relevant.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases50.js.
   ============================================================ */

(function(){

  /* ====== 197. F2F — Ear discharge in a child: otitis media & antibiotic stewardship ====== */
  const c197 = {
    id:'child-ear-discharge', title:'"His ear\u2019s been running all night \u2014 he needs antibiotics, doesn\u2019t he?"', type:'video', duration:12,
    meta:{ age:4, sex:'M', setting:'Video consultation \u2014 a child with a discharging ear (mother present).', system:'Paediatrics / Acute otitis media \u2014 when antibiotics earn their keep', checked:'October 2026' },
    brief:'Theo Marsh, 4, brought by his mother with EAR DISCHARGE overnight after a few days of ear pain and a cold; he is now more comfortable and systemically well. The examined skills: assess the unwell-vs-well child properly (this is acute otitis media, likely with a perforation \u2014 the discharge often relieves the pain); apply ANTIBIOTIC STEWARDSHIP per NICE NG91 — most AOM is self-limiting and many children do not need antibiotics; an IMMEDIATE antibiotic is for the systemically very unwell, signs of a more serious illness or complication, or high risk of complications, while for AOM with otorrhoea (discharge) or under-2s with bilateral AOM NG91 advises considering no antibiotic, a back-up prescription or an immediate antibiotic as a shared decision, because these groups benefit more; safety-net for complications (mastoiditis, meningitis); advise analgesia and natural course (no phenazone/lidocaine anaesthetic drops with a perforation or discharge); and manage parental EXPECTATION of antibiotics with explanation rather than confrontation. Hold NICE NG143 serious-illness awareness for the unwell child, and, as this is a video consultation, arrange face-to-face otoscopy and examination.',
    script:{
      opening:"(Mother, tired but brisk; Theo playing in the background.) \"He's been pulling at his ear for a few days, then this morning there was yellowy gunk all over the pillow — his ear's been running. He's actually a bit brighter now the gunk's come out. But surely that means infection, so he needs antibiotics, right? I don't want it spreading.\"",
      facts:[
        { topic:"The illness", text:"Runny nose and cough for 5 days, pulling at his right ear and grizzly for 3 days, poor sleep. Discharge from the right ear overnight — yellow, a bit smelly. \"The pain seemed to go when the gunk came.\"" },
        { topic:"How he is now", text:"\"He's had some breakfast and he's been playing with his cars.\" Alert, chatty, running around. Can bring him to the camera: pink, breathing normally, no rash." },
        { topic:"Fever and fluids", text:"\"I haven't measured it today.\" Felt hot last night, 38.4°C at 2 am, Calpol given. \"He's weeing normally.\" Drinking well. No vomiting or diarrhoea." },
        { topic:"Red-flag questions", text:"Behind the ear: \"No, it looks the same as the other side\" — no swelling, redness, or ear sticking out. \"No, nothing like that\" — no stiff neck, no rash, no headache, no drowsiness, no facial droop, no dizziness. Hearing a bit muffled on that side." },
        { topic:"Background", text:"\"No, nothing\" — healthy, no previous ear infections or grommets, immunisations up to date, no allergies. Weight about 17 kg. Goes to nursery." },
        { topic:"Medicines", text:"Calpol last night only. Hasn't given ibuprofen — \"I didn't know I could give both.\"" },
        { topic:"Home", text:"Lives with Mum (Gemma, nursery nurse) and baby sister. Mum can bring him to the surgery today." },
        { topic:"How to play it", text:"Worried, short of sleep, expecting antibiotics. If asked what she's worried about: \"That the infection's got so bad it's bursting out. That it could go to his brain or something. I didn't sleep much either.\" Relieved by a clear explanation: \"Oh. So it's not getting worse?\" Given a choice, she would \"prefer to start it\" (antibiotic) — accepts a shared plan with a look in his ear first. If refused flatly without explanation, becomes cross: \"So we just leave it?\"" }
      ],
      ice:{
        ideas:"\"Gunk means infection, and infection needs antibiotics.\"",
        concerns:"HIDDEN AGENDA — fear the infection is \"bursting out\" and could spread to his brain; exhausted after a bad night.",
        expectations:"\"Antibiotics, so it doesn't spread.\" Underneath: \"I just want to do something.\""
      },
      cues:[
        "\"He's actually a bit brighter.\" — the discharge relieved the pain.",
        "\"I don't want it spreading.\" — the fear to explore.",
        "\"I just want to do something.\" — invites a practical plan (pain relief)."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Assesses the child as well vs unwell FIRST (temperature, systemic state, feeding/fluids, NICE NG143 traffic-light) and arranges a face-to-face examination of ears/throat/chest, as otoscopy cannot be done by video \u2014 not assuming severity from the discharge' },
      { dom:'ro', text:'Explains the discharge correctly \u2014 otorrhoea in AOM usually means a perforation that relieves pain and generally heals \u2014 defusing the "running ear = serious" fear' },
      { dom:'cm', text:'Applies NICE NG91 antibiotic STEWARDSHIP: knows most AOM is self-limiting, that an immediate antibiotic is for the systemically very unwell, complications or high risk, and that for <2 with bilateral AOM or AOM with otorrhoea no, back-up or immediate antibiotic are all options — so a shared decision here, made on assessment not reflex' },
      { dom:'cm', text:'Emphasises ANALGESIA as the mainstay (regular paracetamol/ibuprofen at the dose for age or weight, often under-used; no anaesthetic drops with a perforation) and explains the natural course (keep ear dry, perforation heals)' },
      { dom:'cm', text:'SAFETY-NETS for complications \u2014 mastoiditis, meningitis, worsening/high fever, facial weakness, persistent discharge/hearing loss \u2014 with plain-language red flags' },
      { dom:'ro',   text:'Manages the parental antibiotic EXPECTATION with explanation and partnership rather than confrontation or a reflexive prescription' },
      { dom:'ro',   text:'Reassures the worried mother (bad night, fear of spreading) and checks her understanding of the plan' },
      { dom:'cm',    text:'Safety-nets and follows up: clear red flags and when to seek urgent help, analgesia plan, expected recovery, and review if not settling/persistent discharge \u2014 evidence-based, stewardship-minded care' },
    ],
    worked:[
      { lbl:'Assess + reassure', txt:'"Let me check him over first — how he’s feeding and playing, and bring him close to the camera for me. … He’s actually pretty well in himself, which is reassuring. I can’t look inside his ears on video, so I’d like to see him this afternoon to check his ears, throat and temperature."' },
      { lbl:'Explain the discharge', txt:'"That \u2018gunk\u2019 is usually a sign the eardrum has let go a little to release the pressure \u2014 which is exactly why his pain eased. It looks dramatic but it\u2019s common and the drum heals itself."' },
      { lbl:'The antibiotic decision', txt:'"On antibiotics \u2014 most ear infections actually get better on their own, so we don\u2019t always use them. But because his ear is discharging, this is one of the situations where antibiotics help more often, so no antibiotic, one to keep in reserve, or one to start now are all reasonable — let’s decide together once I’ve looked. The key, though, is regular pain relief."' },
      { lbl:'Analgesia first', txt:'"Give paracetamol or ibuprofen regularly at the right dose for his age or weight — that’s what makes him comfortable. Keep the ear dry, don’t poke anything in it, and no numbing ear drops while it’s discharging."' },
      { lbl:'Safety-net', txt:'"Come back urgently if he becomes very unwell, gets swelling or redness behind the ear or it sticks out, a high fever, a stiff neck, a rash that doesn\u2019t fade, or he\u2019s drowsy \u2014 those are the things we never want to miss."' },
      { lbl:'Follow-up', txt:'"The discharge should settle over a few days and the drum heal over a few weeks. If it keeps running, his hearing seems off, or he\u2019s not improving, bring him back so we can check it."' },
    ],
    learning:'A discharging ear in a child is usually acute otitis media with a perforated eardrum: the otorrhoea releases pus and characteristically relieves the pain (hence the child being "brighter"), it looks alarming but is common and usually self-limiting, and the perforation typically heals \u2014 so assess the child as well versus unwell first (temperature, systemic state, feeding/fluids, NICE NG143 traffic-light, with a face-to-face ear/throat/chest examination because otoscopy cannot be done by video) rather than assuming severity from the discharge. Apply NICE NG91 antibiotic stewardship: most acute otitis media resolves without antibiotics and many children need only analgesia or a back-up (delayed) prescription; an immediate antibiotic is for the systemically very unwell, features of a serious illness/complication, or high risk of complications, while for children under 2 with bilateral AOM and AOM with otorrhoea (discharge) NG91 advises considering no antibiotic, a back-up or an immediate antibiotic — so this child, with a discharging ear, falls into a group where all three are reasonable, with the decision shared with the parent, made on assessment and with stewardship, not reflexively (if used, amoxicillin for 5–7 days, dose per BNFC). Emphasise analgesia as the mainstay (regular weight-based paracetamol/ibuprofen, frequently under-used), explain the natural course (keep the ear dry, the drum heals), and avoid decongestants/antihistamines and anaesthetic ear drops (phenazone with lidocaine) when the drum is perforated or the ear is discharging. Safety-net explicitly for the rare serious complications \u2014 mastoiditis (swelling/redness behind the ear, the pinna pushed forward), meningitis (very unwell, neck stiffness, photophobia, non-blanching rash, drowsiness), worsening or high fever, facial weakness, and persistent discharge/hearing loss \u2014 with plain-language red flags. The hidden agenda is parental worry and a belief that discharge means a serious spreading infection needing antibiotics; manage that expectation with explanation and partnership, using this as a teachable shared decision rather than a flat refusal or a reflexive prescription.',
    knowledge:{
      guideline:'NICE NG91 Otitis media (acute): antimicrobial prescribing (2018, updated 2022) · NICE NG143 Fever in under 5s (2019) · NICE NG240 Meningitis (bacterial) and meningococcal disease (2024) · BNFC · antibiotic stewardship · NG143 traffic-light · complications safety-netting',
      points:[
        { h:'Assess well vs unwell', t:'Temperature, systemic state, feeding/fluids, NICE NG143 traffic-light; examine ears/throat/chest face to face (otoscopy is not possible by video). Don\u2019t infer severity from discharge alone.' },
        { h:'Understand otorrhoea', t:'Discharge in AOM usually means a perforation releasing pus, which relieves pain and generally heals. Defuse the "running ear = serious" fear.' },
        { h:'Stewardship', t:'Most AOM is self-limiting; no antibiotic or back-up prescription for many (NICE NG91). Immediate antibiotic: systemically very unwell, serious illness/complications, high risk. <2 with bilateral AOM or AOM with otorrhoea: consider no, back-up or immediate antibiotic (shared decision). Decide on assessment, not reflex.' },
        { h:'Analgesia is the mainstay', t:'Regular paracetamol/ibuprofen at the dose for age or weight (often under-used). Keep ear dry; perforation heals. Avoid decongestants/antihistamines, and no phenazone/lidocaine drops with a perforation or discharge.' },
        { h:'Complications', t:'Mastoiditis (post-auricular swelling/redness, pinna pushed forward), meningitis (unwell, neck stiffness, photophobia, non-blanching rash, drowsiness), facial weakness, persistent discharge/hearing loss (NG91: refer to hospital for complications; meningitis per NICE NG240).' },
        { h:'Manage expectations', t:'Explain rather than confront or reflexively prescribe; use shared decision-making. Here no, back-up or immediate antibiotic are all reasonable given otorrhoea (NG91), but analgesia and safety-netting lead.' },
        { h:'Never do', t:'Never assume severity from discharge; never prescribe reflexively without assessment; never omit analgesia advice or complication safety-netting.' },
        { h:'Safety-net & follow-up', t:'Plain-language red flags, recovery expectations, review if not settling/persistent discharge/hearing concern.' }
      ]
    }
  };

  /* ====== 198. F2F — Constipation in a 5-year-old: disimpaction done properly ====== */
  const c198 = {
    id:'child-constipation', title:'"She\u2019s soiling her pants at school \u2014 I think she\u2019s just being lazy or naughty"', type:'video', duration:12,
    meta:{ age:5, sex:'F', setting:'Video consultation \u2014 a child with soiling (mother present).', system:'Paediatrics / Childhood constipation \u2014 overflow soiling & disimpaction done properly', checked:'October 2026' },
    brief:'Maisie Cobb, 5, brought because she is SOILING her pants at school; her mother is frustrated and thinks she is "lazy/naughty" or doing it deliberately. The examined skills: recognise that the soiling is almost certainly OVERFLOW INCONTINENCE from chronic CONSTIPATION with faecal impaction (NOT naughtiness) \u2014 a crucial reframe that removes blame and shame; take a focused history (stool pattern/Bristol, withholding, painful/hard stools, hard masses, diet/fluids, toileting, onset/triggers, red flags) and arrange a face-to-face examination, since this is a video consultation (abdominal mass, perianal inspection, spine and lower limbs, growth plotted); EXCLUDE NICE CG99 red flags for organic disease (delayed meconium/from-birth onset, ribbon stools, gross abdominal distension with vomiting, neurological or spinal signs — which would prompt referral), treating faltering growth as an AMBER flag that prompts tests for coeliac disease and hypothyroidism; then manage per NICE CG99 — DISIMPACTION FIRST with an escalating osmotic laxative regimen (macrogol/Movicol Paediatric, titrated up over ~2 weeks, dose per BNFC, adding a stimulant if not disimpacted after 2 weeks), warning that soiling may TEMPORARILY WORSEN during disimpaction, followed by MAINTENANCE laxatives (not stopped too soon), plus behavioural toileting, diet/fluids, and de-shaming education for the family.',
    script:{
      opening:"(Mother, exasperated, close to tears; Maisie not in view.) \"I'm at the end of my tether, doctor. Maisie keeps dirtying her pants — proper soiling — at school and at home. She's 5, she's toilet-trained, so I think she's either being lazy or doing it on purpose for attention. The school have mentioned it. I've tried telling her off but it makes no difference. What do I do with her?\"",
      facts:[
        { topic:"Poos", text:"\"Not every day. When she goes it's hard, sometimes huge. She cries sometimes\" — every 4–5 days, \"like pellets or a big log\", once blocked the toilet. Some blood on the paper once when it was very hard." },
        { topic:"Holding on", text:"\"Now you say it, yes. She seems to hold on, then says she doesn't need to go\" — crosses her legs, hides behind the sofa, goes red in the face." },
        { topic:"The soiling", text:"\"Soft, smeary. She says she didn't know. I thought she was lying.\" Most days for about 3 months. Smells." },
        { topic:"Onset and triggers", text:"Fully toilet-trained at 3. Hard poos started around starting school (about 9 months ago) — doesn't like the school toilets. \"I'm not sure about school — she doesn't like to talk about it.\"" },
        { topic:"Red-flag questions", text:"\"No, nothing like that. She's always been healthy and she's growing fine.\" Passed meconium on day 1. No vomiting, no swollen tummy, no leg weakness or walking problems, no back problems, wees normally, no wetting. Red book weights on track." },
        { topic:"Diet and drinks", text:"Fussy eater: pasta, chicken nuggets, yoghurts; little fruit or veg. Drinks mostly milk (3 cups a day) and squash." },
        { topic:"Background", text:"No medicines tried apart from prune juice once. No allergies. Lives with Mum (works in a supermarket) and older brother (9). Dad sees her at weekends. No social worker." },
        { topic:"Feelings", text:"If asked how she's coping: \"Honestly, I feel like a bad mum. The school look at me like I'm not coping. And I keep telling her off, which I feel awful about.\"" },
        { topic:"How to play it", text:"Frustrated and blaming at first. Softens when the doctor explains overflow: \"So she really didn't know? … That's a relief, the internal bit.\" Dismayed at the warning: \"Worse? Right before I'm back at the school gate?\" Accepts a school letter gratefully. If the doctor just tells her to be firmer, agrees and asks for a reward chart (the trap)." }
      ],
      ice:{
        ideas:"\"She's lazy or doing it for attention.\"",
        concerns:"HIDDEN AGENDA — feeling judged by the school as a bad mum; guilt about telling Maisie off; exhausted.",
        expectations:"\"Tell me how to make her stop.\""
      },
      cues:[
        "\"She says she didn't know.\" — the overflow clue.",
        "\"She cries sometimes.\" — painful hard stools.",
        "\"I feel like a bad mum.\" — guilt to relieve."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'REFRAMES the soiling as OVERFLOW INCONTINENCE from chronic constipation/impaction (involuntary, the child usually cannot feel it) \u2014 NOT laziness or naughtiness \u2014 and removes blame as a therapeutic first step' },
      { dom:'dg', text:'Takes a focused history (Bristol stool form, withholding behaviour, painful/hard or very large stools, palpable mass, diet/fluids, toileting, onset/triggers) and arranges a face-to-face examination (abdomen, perianal inspection, spine/lower limbs, growth), as it cannot be done by video' },
      { dom:'dg', text:'EXCLUDES red flags for organic disease (NICE CG99: from-birth onset, delayed meconium >48h, gross distension with vomiting, neurological/spinal signs, ribbon stools) and would refer if present, treating faltering growth as amber (test for coeliac disease and hypothyroidism)' },
      { dom:'cm', text:'Manages per NICE CG99 with DISIMPACTION FIRST — escalating osmotic macrogol (dose per BNFC; add a stimulant if not disimpacted after 2 weeks) titrated over ~1–2 weeks \u2014 and WARNS that soiling/abdominal pain may temporarily worsen during disimpaction (not a reason to stop)' },
      { dom:'cm', text:'Plans MAINTENANCE laxatives continued for months (not stopped too soon) plus behavioural measures (post-meal toilet sitting, footstool, reward for sitting, fluids/fibre, school-toilet access)' },
      { dom:'ro',   text:'Reframes compassionately for both child and mother, relieves blame/guilt, and addresses the punitive dynamic \u2014 protecting the child from shame' },
      { dom:'ro',   text:'Sets realistic expectations (this takes months) and checks the mother\u2019s understanding so she adheres rather than stopping early' },
      { dom:'cm',    text:'Safety-nets and follows up: review of disimpaction/maintenance, what to expect, when to return (red flags, no improvement), and ongoing support \u2014 evidence-based, de-shaming care with any emotional/safeguarding impact considered' },
    ],
    worked:[
      { lbl:'Reframe + de-blame', txt:'"I can hear how exhausting this is \u2014 but here\u2019s the key thing: Maisie almost certainly isn\u2019t being naughty or lazy. This is what happens when a child gets very constipated: hard poo backs up, and softer poo leaks around it without her feeling it or being able to stop it. She genuinely can\u2019t control it."' },
      { lbl:'History', txt:'"Let me ask \u2014 when she does poo, is it hard or painful, or really big? Does she hold on, cross her legs, or avoid the toilet? Does her tummy feel hard? \u2026 That fits a backed-up bowel causing the soiling."' },
      { lbl:'Exclude red flags', txt:'"A few checks: was she constipated from birth, slow to pass her first stool as a newborn, growing well? Any tummy swelling or back/leg problems? … All reassuring so far — this sounds like the common, treatable type, and I’ll check her tummy, bottom, back and growth when I see her in person this week."' },
      { lbl:'Disimpaction, with the warning', txt:'"We clear the backlog first with a laxative powder, building the dose up over a couple of weeks. Important: her soiling and tummy ache might get WORSE for a few days as it clears \u2014 that\u2019s expected, it means it\u2019s working, so don\u2019t stop."' },
      { lbl:'Maintenance + toilet routine', txt:'"Once cleared, she stays on a daily dose for months to keep poos soft \u2014 we don\u2019t stop early or it comes straight back. Plus sitting on the toilet after meals with a footstool, a star chart just for sitting, and plenty of fluids and fibre."' },
      { lbl:'Support + safety-net', txt:'"Please go easy on her \u2014 telling off makes it worse and she can\u2019t help it. This takes patience, often months. Come back if she\u2019s not improving, develops tummy swelling, blood, or weight loss, and let\u2019s review how she\u2019s getting on."' },
    ],
    learning:'Involuntary soiling in a previously toilet-trained child is almost always OVERFLOW INCONTINENCE from chronic constipation with faecal impaction \u2014 hard stool builds up, the rectum stretches, and softer stool leaks around it without the child feeling it or being able to control it \u2014 so the crucial, therapeutic first step is to REFRAME it as a medical problem, not laziness, naughtiness or deliberate behaviour, removing the blame and shame that worsen it. Take a focused history (Bristol stool form, withholding behaviour, painful/hard or very large stools, palpable abdominal mass, diet/fluids, toileting routine, school-toilet avoidance, onset/triggers) and arrange a face-to-face examination of the abdomen, perianal area, spine and lower limbs with growth plotted (it cannot be done by video, and no digital rectal examination in primary care), while EXCLUDING NICE CG99 red flags for organic disease (symptoms from birth, delayed passage of meconium beyond 48 hours suggesting Hirschsprung’s, gross abdominal distension with vomiting, abnormal lower-limb neurology/spinal signs, ribbon stools) which would prompt referral; faltering growth is an amber flag prompting tests for coeliac disease and hypothyroidism. Manage per NICE CG99 with DISIMPACTION FIRST using an escalating osmotic macrogol (e.g. Movicol Paediatric Plain), titrated up over about 1\u20132 weeks (dose per BNFC, adding a stimulant if not disimpacted after 2 weeks), and warn the family that soiling and abdominal pain may temporarily worsen as the backlog clears \u2014 this is expected and not a reason to stop, since under-dosing or stopping early is the commonest cause of apparent failure. Follow with MAINTENANCE laxatives continued for several months (not stopped abruptly once improved, as relapse is common) plus behavioural measures \u2014 regular post-meal toilet sitting using the gastrocolic reflex, a footstool for positioning, a reward chart for sitting rather than results, adequate fluids and fibre, and addressing school-toilet avoidance \u2014 with de-shaming throughout. The hidden agenda is parental frustration, exhaustion and a misunderstanding of the mechanism, often with guilt under the anger; reframe compassionately for both child and mother, set realistic month-long expectations, protect the child from shame, and watch for emotional/safeguarding impact.',
    knowledge:{
      guideline:'NICE CG99 Constipation in children and young people (2010, updated 2017) · NICE CG89 Child maltreatment: when to suspect (2009, updated 2017) · BNFC · overflow soiling · disimpaction then maintenance · red flags for organic disease (faltering growth = amber)',
      points:[
        { h:'Reframe overflow, de-shame', t:'Involuntary soiling in a toilet-trained child = overflow from constipation/impaction, not naughtiness. The child usually cannot feel it. Removing blame is therapeutic and comes first.' },
        { h:'Focused history', t:'Bristol stool form, withholding, painful/hard/large stools, palpable mass, diet/fluids, toileting, school-toilet avoidance, onset/triggers (fissure, potty-training).' },
        { h:'Red flags for organic disease', t:'NICE CG99 red flags: from-birth onset, delayed meconium >48h (Hirschsprung’s), gross distension with vomiting, neurological/spinal signs, ribbon stools → examine face to face and refer. Faltering growth is amber → test for coeliac disease and hypothyroidism. Absence supports functional constipation.' },
        { h:'Disimpaction first', t:'Escalating osmotic macrogol titrated over ~1–2 weeks (dose per BNFC; add a stimulant if not disimpacted after 2 weeks, CG99). Warn that soiling/pain may temporarily worsen as the backlog clears \u2014 expected, not a reason to stop.' },
        { h:'Maintenance, not stopped early', t:'Continue maintenance laxatives for months, titrated to soft regular stools; do not stop abruptly (relapse common; CG99: continue for several weeks after a regular habit is established, then reduce gradually). The main cause of "failure" is stopping early/under-dosing.' },
        { h:'Behavioural measures', t:'Post-meal toilet sitting (gastrocolic reflex), footstool positioning, reward for sitting (not results), fluids/fibre (adjuncts, not first-line alone), school-toilet access. Involve the child positively.' },
        { h:'Never do', t:'Never label it naughtiness; never skip the red-flag screen; never start maintenance without disimpaction if impacted; never stop laxatives too soon; never shame the child.' },
        { h:'Safety-net & follow-up', t:'Review disimpaction/maintenance, set realistic timescales, return for red flags/no improvement, ongoing support; consider emotional/safeguarding impact.' }
      ]
    }
  };

  /* ====== 199. F2F — Reflux in a baby: feeding, red flags, parental exhaustion ====== */
  const c199 = {
    id:'infant-reflux', title:'"He brings up his milk and screams \u2014 I\u2019m exhausted, please give him something"', type:'video', duration:12,
    meta:{ age:0.25, sex:'M', setting:'Video consultation \u2014 a 3-month-old who is posseting/regurgitating (mother present).', system:'Paediatrics / Infant reflux (GOR/GORD) \u2014 feeding, red flags & supporting an exhausted parent', checked:'October 2026' },
    brief:'Alfie, a 3-month-old baby, is brought by his exhausted mother because he regurgitates milk after feeds and cries; she is sleep-deprived and wants "something to fix it". The examined skills: recognise that uncomplicated gastro-oesophageal REFLUX (posseting) is NORMAL and very common in thriving babies and usually improves with age/weaning; assess FEEDING (volume/frequency/technique, over-feeding, winding, breast/bottle) and growth (plot the red-book weights; as this is a video consultation, any examination, weighing or observed feed is arranged face to face with the health visitor or at the surgery); EXCLUDE red flags that change the picture \u2014 GORD with complications (faltering growth, feeding refusal, distressed back-arching, haematemesis), pyloric stenosis (projectile vomiting, hungry, weight loss, ~2\u20138 weeks), cow\u2019s-milk protein allergy (eczema, blood/mucus in stool, other atopy), bile-stained vomiting (urgent surgical), or signs of serious illness/dehydration; give CONSERVATIVE first-line advice per NICE NG1 (review feed volume, smaller more frequent feeds with the same daily total, then a thickened formula if bottle-fed, then — only if that fails — stop the thickener and try an alginate for 1–2 weeks; for a breastfed baby, a breastfeeding assessment first; never a thickener and alginate together; no positional management for a sleeping infant — back to sleep); avoid premature/unnecessary acid-suppression (NG1: no PPI or H2 antagonist for overt regurgitation alone); and crucially SUPPORT THE EXHAUSTED PARENT (validate, screen maternal mood with the NICE CG192 questions, signpost support).',
    script:{
      opening:"(Holding Alfie, visibly exhausted, voice cracking.) \"He brings his milk back up after nearly every feed, sometimes loads of it, and then he cries and arches his back. I'm shattered — I'm up all night. My friend's baby was put on a medicine for reflux. Please, can you just give Alfie something to stop it? I can't keep doing this.\"",
      facts:[
        { topic:"Feeding", text:"Bottle-fed formula. \"Every few hours, day and night\" — about 150 ml every 2–3 hours, often finishes the bottle and wants more (about 1.1 litres a day). \"I wind him but it doesn't seem to make much difference.\"" },
        { topic:"The sick", text:"\"It just comes up — never shooting, never green. No blood.\" Mouthfuls, sometimes \"a big splash\", mostly within half an hour of a feed. Started at about 3 weeks." },
        { topic:"Feeding, nappies, poo", text:"\"He feeds fine, he's hungry. Loads of wet nappies. Nothing odd in his poo\" — yellow, soft, no blood or mucus. Not refusing feeds." },
        { topic:"Other questions", text:"\"No, his skin's fine. He's never been ill.\" No eczema, no wheeze, no fevers, no cough with feeds. Crying in the evenings for an hour or two; settles when held upright." },
        { topic:"Growth", text:"\"Here — the health visitor's been weighing him\" (holds the red book to the camera): birth 3.4 kg on the 50th centile; last week 6.2 kg, still on the 50th." },
        { topic:"Birth and background", text:"Term, normal delivery, no special care. Immunisations up to date. No medicines. No family allergies except Dad's hay fever." },
        { topic:"Mum's mood", text:"If asked about low mood or loss of interest: \"Mostly I'm just so tired. I don't know if it's more than that.\" Enjoys moments with Alfie. Cries most days. No thoughts of harming herself or the baby." },
        { topic:"Support", text:"\"Not as much as I need.\" Partner, Liam, back at work; her mum lives 2 hours away. First baby. Mum is 24." },
        { topic:"How to play it", text:"Tearful and desperate. If asked what worries her: \"That he's in pain and I'm not helping him. That I'm doing something wrong. Everyone else seems to cope.\" Pushes for medicine: \"But what about the medicine my friend's baby had?\" and \"So there's nothing?\" Feels better with practical feeding changes and support: \"That sounds more doable than I thought.\"" }
      ],
      ice:{
        ideas:"\"He's got reflux and needs a medicine like my friend's baby.\"",
        concerns:"HIDDEN AGENDA — that Alfie is in pain and she's failing him; exhaustion and low mood she hasn't told anyone about; feeling everyone else copes better.",
        expectations:"\"Something to stop it.\""
      },
      cues:[
        "\"I can't keep doing this.\" — invites asking how she is.",
        "\"He finishes the bottle and wants more.\" — possible over-feeding, if feeds are explored.",
        "\"Everyone else seems to cope.\" — comparison and guilt."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises uncomplicated gastro-oesophageal reflux as NORMAL and common in a thriving baby (improving with age/weaning) \u2014 but only reassures AFTER assessing feeding, growth and red flags' },
      { dom:'dg', text:'Assesses FEEDING (volume/frequency \u2014 over-feeding, technique, winding, breast/bottle) and PLOTS WEIGHT on a growth chart (red-book or health-visitor weights), arranging for a feed to be observed face to face since this is a video consultation' },
      { dom:'dg', text:'EXCLUDES red flags: pyloric stenosis (projectile vomiting, hungry, weight loss, 2\u20138 weeks), bile-stained vomiting (surgical), GORD complications (faltering growth, feeding aversion, back-arching, haematemesis), cow\u2019s-milk protein allergy (eczema, blood/mucus in stool, atopy), serious illness/dehydration' },
      { dom:'cm', text:'Gives CONSERVATIVE first-line management (NICE NG1 stepwise: review/avoid over-feeding, smaller more frequent feeds, winding, thickened formula if bottle-fed, then an alginate alone if that fails — never with a thickener; back to sleep, no positional management when sleeping) and AVOIDS reflexive PPI/H2 for uncomplicated reflux or visible regurgitation alone' },
      { dom:'cm', text:'Considers a CMPA trial (maternal dairy exclusion if breastfeeding / hydrolysed formula) or an alginate trial only after the feeding steps (never with a thickener) and where the history fits \u2014 escalating appropriately, not reflexively' },
      { dom:'ro',   text:'VALIDATES and SUPPORTS the exhausted parent \u2014 acknowledges sleep deprivation, screens MATERNAL MOOD, checks support, signposts help \u2014 rather than dismissing her with "it\u2019s just reflux"' },
      { dom:'ro',   text:'Reads the plea as exhaustion/helplessness, reassures she is not failing, and addresses comparison pressure without unnecessary medicalisation' },
      { dom:'cm',    text:'Safety-nets and follows up: red flags warranting urgent review (projectile/bile vomiting, poor feeding, dehydration, faltering growth), conservative plan with review, maternal support and health-visitor involvement \u2014 baby and mother both cared for' },
    ],
    worked:[
      { lbl:'Validate first', txt:'"Before anything \u2014 this sounds exhausting, and being up all night with a crying, sicky baby is genuinely hard. You\u2019re not failing; you\u2019ve done the right thing bringing him. Let me check him over and we\u2019ll make a plan together."' },
      { lbl:'Assess feeding + growth', txt:'"Can you tell me how much and how often he feeds, and how you wind him? … Have you got his red book? Let me plot his recent weights. … He’s growing beautifully, which is really reassuring \u2014 it tells me he\u2019s thriving despite the mess."' },
      { lbl:'Exclude red flags', txt:'"A few important checks: is the vomit ever forceful and shooting across the room, or green? Is there blood, any eczema or blood in his nappies? \u2026 None of that \u2014 good, that rules out the things I\u2019d worry about."' },
      { lbl:'Explain + conservative plan', txt:'"So this is normal baby reflux \u2014 his food-pipe valve is just immature, and it almost always settles by his first birthday. Let’s try smaller, more frequent feeds, keeping the total the same, and good winding; I’ll ask the health visitor to watch a feed and weigh him this week. Often that’s enough. Keep putting him down to sleep flat on his back."' },
      { lbl:'Why not a medicine yet', txt:'"I know your friend\u2019s baby had a medicine, but the acid-suppressing ones don\u2019t actually help simple bringing-up of milk and aren\u2019t recommended for it. If he were distressed feeding or not growing, we\u2019d think again \u2014 but he\u2019s thriving."' },
      { lbl:'Support her + safety-net', txt:'"How are YOU doing in yourself, with the sleep and everything? \u2026 Let\u2019s get the health visitor involved and look at some support. Come back if he vomits forcefully or green, refuses feeds, isn\u2019t weeing, or stops gaining weight. And come back for you, too \u2014 not just him."' },
    ],
    learning:'Uncomplicated gastro-oesophageal reflux (posseting/regurgitation) is normal and very common in babies because the lower oesophageal sphincter is immature, affecting about 40% of infants, usually starting before 8 weeks and resolving in about 90% before 1 year (NICE NG1) \u2014 in a thriving, otherwise well baby it is a laundry problem, not a disease \u2014 but reassurance must follow proper assessment. Assess feeding (volume and frequency, since over-feeding is common and worsens reflux, plus technique, winding and breast vs bottle) and plot the weight on a growth chart (red-book or health-visitor weights), arranging an observed feed face to face because a video call cannot replace it, because much "reflux" improves with feeding adjustments alone. Exclude the red flags that mimic or complicate reflux: pyloric stenosis (forceful projectile vomiting, hunger after vomiting, weight loss/dehydration, typically 2\u20138 weeks and commoner in firstborn males \u2014 a surgical emergency); bile-stained green vomiting (urgent surgical obstruction); GORD with complications (faltering growth, marked feeding aversion, distressed back-arching/Sandifer\u2019s, haematemesis, apnoea); cow\u2019s-milk protein allergy (eczema, blood/mucus in stools, other atopy \u2014 consider maternal dairy exclusion if breastfeeding or a hydrolysed formula); and serious illness/dehydration. For uncomplicated reflux, first-line management is conservative and stepwise (NICE NG1): avoid over-feeding, offer smaller more frequent feeds with the same daily total and ensure good winding, then for formula-fed infants a thickened formula, and only if that fails stop the thickener and try an alginate for 1–2 weeks (breastfed infants: a breastfeeding assessment first, then an alginate trial) — never a thickener and an alginate together, and no positional management for sleeping infants (back to sleep) — while AVOIDING reflexive acid suppression, as PPIs/H2 blockers are not recommended for overt regurgitation alone (NG1 allows a 4-week trial only for unexplained feeding difficulty, distressed behaviour or faltering growth). Crucially, support the exhausted parent: validate how hard it is, acknowledge sleep deprivation, screen maternal mood for postnatal depression/anxiety (NICE CG192 questions), check support and signpost help \u2014 caring for the frazzled parent is caring for the baby. The hidden agenda is a plea born of exhaustion and helplessness as much as a request for medication; assess and reassure properly, give practical help, support her, and avoid both dismissal and unnecessary medicalisation.',
    knowledge:{
      guideline:'NICE NG1 Gastro-oesophageal reflux disease in children and young people (2015, updated 2019) · NICE CG116 Food allergy in under 19s (2011) · NICE CG192 Antenatal and postnatal mental health (2014, updated 2020) · BNFC · infant feeding assessment · pyloric stenosis / CMPA red flags · maternal mood/support',
      points:[
        { h:'Reflux is usually normal', t:'Common (about 40% of infants), due to sphincter immaturity; usually starts before 8 weeks and resolves in about 90% before 1 year (NICE NG1). In a thriving well baby it is benign \u2014 but reassure only after assessing feeding, growth and red flags.' },
        { h:'Assess feeding & growth', t:'Volume/frequency (over-feeding), technique, winding, breast/bottle; plot weight (red-book or health-visitor weights); observed feed arranged face to face, not by video. Feeding adjustments resolve much of it.' },
        { h:'Exclude red flags', t:'Pyloric stenosis (projectile vomiting, hungry, weight loss, 2\u20138 weeks), bile-stained vomiting (surgical), GORD complications (faltering growth, feeding aversion, back-arching, haematemesis, apnoea), CMPA (eczema, blood/mucus stool, atopy), serious illness/dehydration.' },
        { h:'Conservative first-line', t:'NICE NG1 stepwise: avoid over-feeding, smaller frequent feeds (same daily total), winding, then thickened formula if bottle-fed; if that fails, stop the thickener and try an alginate for 1–2 weeks (breastfed: feeding assessment first). Never thickener plus alginate; no positional management when sleeping — back to sleep.' },
        { h:'Avoid reflexive acid suppression', t:'PPIs/H2 blockers not recommended for uncomplicated reflux or visible regurgitation alone; NG1: consider a 4-week trial only for unexplained feeding difficulty, distressed behaviour or faltering growth, and stop it if there is no response.' },
        { h:'CMPA consideration', t:'If history fits (eczema, blood/mucus stools, atopy), trial maternal dairy exclusion (breastfeeding) or hydrolysed formula (NICE CG116).' },
        { h:'Support the parent', t:'Validate exhaustion, screen maternal mood (CG192 questions), check support, signpost (health visitor, groups). Caring for the parent is caring for the baby. Don\u2019t dismiss with "it\u2019s just reflux".' },
        { h:'Safety-net', t:'Urgent review for projectile/bile vomiting, poor feeding, dehydration, faltering growth. Conservative plan with review; maternal support.' }
      ]
    }
  };

  /* ====== 200. F2F — Bedwetting in a 7-year-old: enuresis without shame ====== */
  const c200 = {
    id:'child-enuresis', title:'"He\u2019s still wetting the bed at 7 \u2014 his dad says he\u2019s too old for this"', type:'video', duration:12,
    meta:{ age:7, sex:'M', setting:'Video consultation \u2014 nocturnal enuresis (mother and child present).', system:'Paediatrics / Nocturnal enuresis \u2014 managing bedwetting without shame', checked:'October 2026' },
    brief:'Rory Vaughan, 7, brought because he still wets the bed; his father thinks he is "too old" and the family is frustrated, with the boy clearly embarrassed. The examined skills: treat NOCTURNAL ENURESIS without SHAME \u2014 it is common, NOT the child\u2019s fault, and very treatable; engage the CHILD as well as the parent; take a focused history (primary vs secondary enuresis, daytime symptoms, frequency, fluids/caffeine, constipation, sleep/snoring, family history, psychosocial stressors, recent onset/triggers); EXCLUDE/treat contributors and red flags (UTI, constipation \u2014 a very common reversible cause, diabetes \u2014 polyuria/polydipsia/weight loss, daytime wetting suggesting bladder dysfunction, neurological signs, safeguarding/emotional triggers for SECONDARY enuresis — urinalysis only when indicated, not routinely); manage per NICE CG111 — demystify and de-shame, address the basics first (adequate drinks spread through the day, avoid caffeine, regular toileting, treat constipation), then an ENURESIS ALARM as first-line for motivated families, with DESMOPRESSIN as an option (e.g. for short-term/sleepovers or where an alarm is unsuitable; dose per BNFC, with fluid restricted from 1 hour before to 8 hours after the dose because of the risk of hyponatraemia); positive reward systems (for behaviours, not dry nights); and protect the child from blame.',
    script:{
      opening:"(Mother speaks; Rory sits next to her, head down, fiddling with his sleeve.) \"Rory's 7 and still wetting the bed most nights. His dad's getting frustrated — says he's far too old for this and should know better. We've tried lifting him, telling him off, taking away drinks … nothing works. Is there something wrong with him? It's causing rows at home.\"",
      facts:[
        { topic:"The wetting", text:"Five or six nights a week, large wet patches, doesn't wake. \"He's never really been dry at night\" — never dry for more than a few nights in a row." },
        { topic:"Daytime", text:"(Rory, if asked directly) \"No\" — no wetting or rushing in the day. No pain passing urine. Not thirsty all the time; no weight loss." },
        { topic:"Poos", text:"(Rory shrugs.) Mum: \"I don't really know — he goes on his own now.\" If asked further: Rory says it \"sometimes hurts\" and he goes every few days." },
        { topic:"Other questions", text:"\"No, nothing like that\" — no snoring or stopping breathing, no back problems, walks and runs normally, no fevers or infections." },
        { topic:"Drinks", text:"\"We cut his drinks after tea.\" Drinks very little at school (doesn't like the toilets), two cans of cola a week. \"Nothing's changed — apart from the arguing about this.\"" },
        { topic:"Family and home", text:"Dad wet the bed until he was 9 (Mum knows; Dad doesn't talk about it). Lives with Mum, Dad and sister (4). No recent upsets, no bullying, no social worker. Rory has stopped going to sleepovers." },
        { topic:"Rory's feelings", text:"(Rory, quietly, if asked kindly) \"Embarrassed. I don't want anyone to know.\" Wants to go on a Cubs camp in 3 months." },
        { topic:"Background", text:"No medicines, no allergies, healthy, growing well." },
        { topic:"How to play it", text:"Mum is worried and tired; Rory is shy and only answers if the doctor talks to him directly and kindly. If the doctor talks only to Mum, Rory stays silent. If asked what she fears: \"That something's wrong with him. And the rows — his dad gets so cross. I just want it to stop.\" Relieved: \"So it really isn't him being lazy?\" Rory chooses: \"The alarm. But not if it wakes everyone up.\" Mum asks for a leaflet for Dad: \"He might listen to a doctor.\"" }
      ],
      ice:{
        ideas:"(Mother) \"Maybe something's wrong with him — or he's too old and should know better.\" (Rory) \"It's my fault.\"",
        concerns:"HIDDEN AGENDA — rows at home and Dad's anger; Rory's shame and missing sleepovers; Mum wants to hear he is normal.",
        expectations:"\"Something to make it stop.\" (Rory) To go on the Cubs camp."
      },
      cues:[
        "\"His dad's getting frustrated.\" — family conflict to defuse.",
        "(Rory) \"Embarrassed.\" — needs reassurance it isn't his fault.",
        "\"We cut his drinks after tea.\" — invites advice on fluids."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'DE-SHAMES first \u2014 states clearly to parent AND child that bedwetting at 7 is common, NOT the child\u2019s fault and treatable \u2014 and stops punitive measures (telling off, restricting drinks, lifting), protecting the child from blame' },
      { dom:'dg', text:'Takes a focused history distinguishing PRIMARY vs SECONDARY enuresis, and covering daytime symptoms, fluids/caffeine, constipation, sleep, family history and psychosocial stressors' },
      { dom:'dg', text:'Excludes/treats contributors and red flags: CONSTIPATION (reversible, treat it), UTI (urinalysis only when indicated, not routinely — CG111), DIABETES (polyuria/polydipsia/weight loss — same-day glucose if suggestive), daytime bladder dysfunction, neurological/spinal signs, safeguarding/emotional triggers' },
      { dom:'cm', text:'Manages per NICE CG111: demystify, address the BASICS (adequate drinks spread through the day, avoid caffeine, toileting, constipation, stop punishment/lifting), then ENURESIS ALARM as first-line for motivated families, with DESMOPRESSIN as an option (short-term/sleepovers/alarm unsuitable) and its safety rule explained (no fluids from 1 hour before to 8 hours after the dose — hyponatraemia; omit if vomiting or diarrhoea)' },
      { dom:'cm', text:'Uses positive REWARD systems for agreed behaviours (good drinking/toileting/helping) NOT for dry nights, and sets realistic expectations (alarms take weeks, gradual success)' },
      { dom:'ro',   text:'Engages RORY directly and kindly, lifts the blame, and helps the mother defuse the absent father’s frustration and the family conflict (an explanation or note she can share, without criticising him in front of Rory) \u2014 protecting the child\u2019s self-esteem' },
      { dom:'ro',   text:'Reassures the mother he is normal, educates the family compassionately, and watches for emotional impact/secondary causes' },
      { dom:'cm',    text:'Safety-nets and follows up: treat constipation/exclude diabetes, alarm/desmopressin plan with review, realistic timescales, and support \u2014 effective, de-shaming care that protects the child (exclude diabetes)' },
    ],
    worked:[
      { lbl:'De-shame, include the child', txt:'"Rory, this is really common \u2014 lots of children your age still wet the bed, and it is absolutely not your fault. You\u2019re not lazy and you\u2019re not naughty. And the good news is we can usually fix it together. (To mum) Telling off and taking away drinks actually make it harder, so let\u2019s stop those."' },
      { lbl:'History', txt:'"Has he ever been dry at night, or did it come back after being dry? Any wetting or rushing in the daytime? How are his poos \u2014 is he constipated? Any extra thirst or weeing a lot in the day? \u2026 That helps me find what\u2019s driving it."' },
      { lbl:'Exclude the important things', txt:'"Constipation is a really common, fixable cause \u2014 so we\u2019ll sort that. As there are no daytime problems, no signs of infection and no extra thirst, he doesn’t need a urine test today — we’d test if any of those appear. A two-week bladder and bowel diary will help us see the pattern."' },
      { lbl:'The plan \u2014 basics + alarm', txt:'"First, the basics: good drinks spread through the day rather than cutting them, avoid fizzy or caffeine drinks, a wee before bed, and no lifting him at night. Then the best long-term fix is a bedwetting alarm \u2014 it teaches his body to wake. It takes a few weeks of teamwork, but it works well."' },
      { lbl:'Desmopressin + rewards', txt:'"There\u2019s also a medicine that can keep him dry quickly \u2014 handy for sleepovers \u2014 which we can use too; with it, he mustn’t drink from an hour before the tablet until the morning, because too much fluid with it can be dangerous, and he skips it if he’s being sick or has diarrhoea. And a reward chart \u2014 but for doing his part, like drinking well and helping change the sheets, not for dry nights, because he can\u2019t control those yet."' },
      { lbl:'Protect + safety-net', txt:'"Rory, you\u2019re going to be the captain of this plan. (To mum) Would a short note for his dad help, explaining it isn’t Rory’s fault? No blame, lots of encouragement; that matters as much as the alarm. Come back if it\u2019s not improving, or if you notice lots of thirst or weight loss, and let\u2019s review in a few weeks."' },
    ],
    learning:'Nocturnal enuresis at 7 must be managed without shame: it is common (affecting a significant minority of children), not the child\u2019s fault, not laziness or naughtiness, and very treatable \u2014 so the first and central task is to say so clearly to both parent and child, stop the counterproductive and harmful responses (telling off, restricting drinks, lifting), protect the child from blame, and engage the embarrassed child kindly and directly. Take a focused history distinguishing primary (never dry) from secondary (dry then wetting again, more likely to have an emotional or medical trigger), and covering daytime symptoms (urgency/frequency/daytime wetting suggesting bladder dysfunction), fluid and caffeine intake/timing, constipation, sleep/snoring, family history (often positive) and psychosocial stressors. Exclude and treat contributors and red flags \u2014 constipation (a very common, reversible cause that often resolves the enuresis when treated), UTI (urinalysis only when indicated, not routinely — NICE CG111), diabetes (polyuria, polydipsia, weight loss — same-day glucose if suggestive, never miss new-onset type 1, NICE NG18), daytime bladder dysfunction, neurological/spinal signs, and safeguarding/emotional triggers for secondary enuresis. Manage per NICE CG111: demystify and reassure, address the basics first (adequate drinks spread through the day rather than restricted, avoid caffeine, regular toileting, treat constipation, stop punishment and lifting), then offer an enuresis alarm as first-line for a motivated child/family (best long-term cure rates, needs weeks of commitment), with desmopressin as an option for rapid/short-term results, sleepovers, or where an alarm is unsuitable or has failed (dose per BNFC, with fluid restricted from 1 hour before to 8 hours after the dose because of hyponatraemia risk, and omitted during vomiting or diarrhoea); use reward systems for agreed behaviours (good drinking, toileting, helping with sheets) not for dry nights, which the child cannot control. Engage the child as owner of the plan, set realistic expectations, and \u2014 given the loaded dynamic of the father\u2019s frustration, family rows and the child\u2019s shame \u2014 lift the blame, educate the family (offering the mother an explanation she can share with the absent father), and protect the child\u2019s wellbeing as much as treating the symptom, watching for emotional impact or secondary causes. Exclude diabetes.',
    knowledge:{
      guideline:'NICE CG111 Bedwetting in under 19s (2010) · NICE CG89 Child maltreatment: when to suspect (2009, updated 2017) · NICE NG18 Diabetes (type 1 and type 2) in children and young people (2015) · BNFC (desmopressin) · de-shaming · constipation/UTI/diabetes screen (urinalysis only when indicated) · alarm first-line · desmopressin',
      points:[
        { h:'De-shame first', t:'Common at 7, not the child\u2019s fault, treatable. Tell parent and child clearly; stop punishment/restricting drinks/lifting; protect the child; engage him directly.' },
        { h:'Primary vs secondary', t:'Primary (never dry) vs secondary (dry then relapsing \u2014 look for emotional/medical trigger). History: daytime symptoms, fluids/caffeine, constipation, sleep, family history, stressors.' },
        { h:'Exclude/treat contributors', t:'Constipation (common, reversible \u2014 treat it), UTI (urinalysis only when indicated — not routine, CG111), diabetes (polyuria/polydipsia/weight loss — same-day glucose, NG18), daytime bladder dysfunction, neurological signs, safeguarding/emotional triggers.' },
        { h:'Basics first', t:'Adequate drinks spread through the day (no restriction), avoid caffeine, regular toileting and pre-bed wee, treat constipation, stop lifting/punishment (NICE CG111).' },
        { h:'Alarm first-line', t:'Enuresis alarm is first-line for motivated families (best long-term cure), needs weeks of commitment; review at 4 weeks and continue until 2 weeks of uninterrupted dry nights. Owner = the child.' },
        { h:'Desmopressin & rewards', t:'Desmopressin for rapid/short-term needs (sleepovers) or when alarm unsuitable/failed (dose per BNFC); no fluids from 1 hour before to 8 hours after the dose (hyponatraemia), omit if vomiting/diarrhoea. Reward agreed behaviours (drinking/toileting/helping), not dry nights.' },
        { h:'Never do', t:'Never blame/punish the child; never restrict fluids or rely on lifting; never give desmopressin without the fluid rule; never miss constipation or diabetes; never exclude the child from the conversation.' },
        { h:'Safety-net & follow-up', t:'Treat constipation/exclude diabetes; alarm/desmopressin plan with review; realistic timescales; watch emotional impact/secondary causes.' },
        { h:"Engage the child + realistic expectations", t:"Involve RORY: ask him how it affects him (sleepovers, embarrassment), enlist him as part of the team, and make him the owner of the plan (alarm/reward chart). Set realistic expectations — alarms take several weeks, relapses can happen, and success is gradual. Many children become dry with support; reassure both that progress is very likely with the right approach and patience." }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c197, c198, c199, c200);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'child-ear-discharge': {
      ceg: ['Children & young people', 'Prescribing & pharmacology'],
      stem: {
        name: 'Theo Marsh (mother present)', age: '4 years \u00b7 male',
        pmh: ['Few days ear pain + cold, then ear discharge overnight', 'Brighter since the discharge; systemically well', 'Feeding/active, no high fever'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"His ear\u2019s been running all night \u2014 he needs antibiotics, doesn\u2019t he?"',
        reason: 'Video consultation \u2014 a child with a discharging ear.'
      },
      timeMap: [
        { t:'0\u20133',  h:'Assess well/unwell', d:'Function and appearance on camera, NG143 traffic-light; arrange face-to-face otoscopy/throat/chest; confirm he’s well.' },
        { t:'3\u20135',  h:'Explain discharge', d:'Perforation releasing pus relieves pain; common and heals.' },
        { t:'5\u20138',  h:'Antibiotic decision', d:'NG91 stewardship; AOM with otorrhoea → no, back-up or immediate antibiotic (shared); analgesia leads.' },
        { t:'8\u201310', h:'Analgesia + course', d:'Regular paracetamol/ibuprofen; keep ear dry; no anaesthetic drops; natural course.' },
        { t:'10\u201312',h:'Safety-net', d:'Mastoiditis/meningitis red flags; review if not settling/persistent discharge.' }
      ],
      wordPics: {
        fail: 'Prescribes reflexively without assessment, or refuses dogmatically despite otorrhoea; no analgesia advice; no complication safety-net.',
        pass: 'Assesses the child, explains the perforation, makes a reasonable antibiotic decision with analgesia and safety-nets.',
        exc:  'Assesses well/unwell properly, explains otorrhoea, applies NG91 stewardship (no, back-up or immediate antibiotic all reasonable given discharge) while leading with analgesia, manages the parent\u2019s expectation by explanation, and safety-nets mastoiditis/meningitis.'
      },
      avoid: [
        { dont:'(Reflex) "Discharge means infection \u2014 here\u2019s antibiotics." (no exam)', instead:'"Let me check him over first, then decide \u2014 and the discharge actually tells us the eardrum released the pressure."', why:'Prescribing without assessment misses sicker children and undermines stewardship.' },
        { dont:'(Dogmatic) "Ear infections never need antibiotics."', instead:'"Most don’t — but because his ear is discharging, antibiotics help more often, so let’s decide together once I’ve examined him, alongside regular pain relief."', why:'AOM with otorrhoea is a group where NICE NG91 advises considering an antibiotic; rigid refusal is wrong.' },
        { dont:'(No safety-net) "It\u2019ll be fine."', instead:'"Come back urgently for swelling behind the ear, a stiff neck, a non-fading rash or drowsiness."', why:'Mastoiditis/meningitis must be safety-netted.' }
      ]
    },

    'child-constipation': {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Maisie Cobb (mother present)', age: '5 years \u00b7 female',
        pmh: ['Soiling pants at school/home \u2014 toilet-trained', '? withholding, hard/painful stools (overflow picture)', 'Mother thinks she\u2019s "lazy/naughty"'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"She\u2019s soiling her pants \u2014 I think she\u2019s just being lazy or naughty."',
        reason: 'Video consultation \u2014 a child with soiling.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe + de-blame', d:'Overflow from constipation, involuntary, not naughtiness \u2014 therapeutic first step.' },
        { t:'2\u20135',  h:'History + exam', d:'Bristol, withholding, hard/large stools, mass, diet; abdomen/perianal/spine examined face to face (not by video).' },
        { t:'5\u20137',  h:'Exclude red flags', d:'From-birth/meconium delay, ribbon stools, distension, neuro/spine → refer; faltering growth amber → coeliac/thyroid tests.' },
        { t:'7\u20139',  h:'Disimpaction first', d:'Escalating macrogol \u00b1 stimulant; WARN soiling may worsen \u2014 don\u2019t stop.' },
        { t:'9\u201312', h:'Maintenance + behaviour', d:'Months of maintenance; post-meal sitting/footstool/reward for sitting; de-shame.' }
      ],
      wordPics: {
        fail: 'Accepts "naughty"; starts maintenance without disimpaction; no red-flag screen; doesn\u2019t warn soiling may worsen; stops laxatives early.',
        pass: 'Reframes overflow, screens red flags, disimpacts then maintains with behavioural advice.',
        exc:  'Reframes and de-shames, takes a focused history and excludes organic red flags, disimpacts first (escalating macrogol) with the worsening warning, continues maintenance for months, adds behavioural toileting, and protects the child.'
      },
      avoid: [
        { dont:'"She needs to be told off and made to use the toilet."', instead:'"This is overflow from constipation \u2014 she genuinely can\u2019t feel or control it. Telling off makes it worse."', why:'Blaming a child for involuntary overflow is wrong and harmful.' },
        { dont:'(Maintenance only) "Here\u2019s a daily laxative."', instead:'"First we clear the backlog with a higher, escalating dose, then keep her on a maintenance dose for months."', why:'Skipping disimpaction in an impacted child leads to ongoing soiling and "failure".' },
        { dont:'(No warning) not mentioning temporary worsening.', instead:'"Her soiling may briefly worsen as it clears \u2014 that\u2019s expected, keep going."', why:'Without the warning, families stop early when soiling worsens.' }
      ]
    },

    'infant-reflux': {
      ceg: ['Children & young people', 'Mental health & addiction'],
      stem: {
        name: 'Alfie, aged 3 months (mother present)', age: '3 months \u00b7 male',
        pmh: ['Regurgitation after feeds + crying/back-arching', 'Thriving (plot weight); systemically well', 'Mother exhausted, sleep-deprived'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"He brings up his milk and screams \u2014 I\u2019m exhausted, please give him something."',
        reason: 'Video consultation \u2014 a 3-month-old regurgitating.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate the parent', d:'Acknowledge exhaustion; she\u2019s not failing; assess and plan together.' },
        { t:'2\u20135',  h:'Feeding + growth', d:'Volume/frequency (over-feeding), winding, technique; plot red-book weights; observed feed face to face (health visitor).' },
        { t:'5\u20137',  h:'Exclude red flags', d:'Projectile (pyloric), bile (surgical), faltering growth, blood, eczema/blood stool (CMPA).' },
        { t:'7\u20139',  h:'Conservative first-line', d:'Smaller frequent feeds, winding, thickener (formula), then alginate alone; back to sleep; avoid reflexive PPI; CMPA trial if fits.' },
        { t:'9\u201312', h:'Support her + safety-net', d:'Screen maternal mood; health visitor/support; red flags for urgent review.' }
      ],
      wordPics: {
        fail: 'Prescribes a PPI for posseting; dismisses with "it\u2019s just reflux"; no feeding/growth assessment; ignores the mother\u2019s exhaustion/mood.',
        pass: 'Assesses feeding/growth, excludes red flags, gives conservative advice and supports the parent.',
        exc:  'Validates the exhausted mother, assesses feeding and growth, excludes pyloric/CMPA/surgical red flags, gives conservative first-line advice avoiding unnecessary acid suppression, screens maternal mood and signposts support, and safety-nets.'
      },
      avoid: [
        { dont:'"I\u2019ll prescribe a reflux medicine like your friend\u2019s baby had."', instead:'"Acid medicines don\u2019t help simple bringing-up of milk and aren\u2019t recommended \u2014 let’s adjust his feeds step by step first."', why:'PPIs/H2 blockers are not indicated for uncomplicated reflux/visible regurgitation.' },
        { dont:'"It\u2019s just reflux, he\u2019ll grow out of it." (and ends)', instead:'"It is normal reflux \u2014 and I also want to check how YOU are doing, because this is exhausting."', why:'Dismissing the parent misses maternal mood and the real need for support.' },
        { dont:'(No red-flag screen) reassuring without checking.', instead:'"Is the vomit ever projectile or green? Any blood, eczema, or poor weight gain?"', why:'Pyloric stenosis, CMPA and surgical causes must be excluded before reassurance.' }
      ]
    },

    'child-enuresis': {
      ceg: ['Children & young people', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Rory Vaughan (mother + child present)', age: '7 years \u00b7 male',
        pmh: ['Bedwetting most nights at 7 \u2014 embarrassed child', 'Family frustration; father says "too old"; tried punishment/restricting drinks', '? constipation / primary vs secondary'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"He\u2019s still wetting the bed at 7 \u2014 his dad says he\u2019s too old for this."',
        reason: 'Video consultation \u2014 nocturnal enuresis.'
      },
      timeMap: [
        { t:'0\u20132',  h:'De-shame + include child', d:'Common, not his fault, treatable; stop punishment/lifting; engage Rory.' },
        { t:'2\u20135',  h:'History', d:'Primary vs secondary, daytime symptoms, fluids/caffeine, constipation, family history, stressors.' },
        { t:'5\u20137',  h:'Exclude contributors', d:'Constipation (treat), UTI, DIABETES (polyuria/polydipsia/weight loss); urine/glucose only if indicated, not routine.' },
        { t:'7\u201310', h:'NICE CG111 plan', d:'Basics (drinks through the day) + treat constipation; enuresis ALARM first-line; desmopressin option with fluid rule; rewards for behaviours.' },
        { t:'10\u201312',h:'Protect + safety-net', d:'Explanation mum can share with dad, no blame; realistic timescales; review; watch emotional impact.' }
      ],
      wordPics: {
        fail: 'Accepts "too old/should know better"; blames the child; no constipation/diabetes screen; jumps to desmopressin without basics or alarm; child excluded.',
        pass: 'De-shames, screens contributors, and offers basics + alarm \u00b1 desmopressin engaging the child.',
        exc:  'Lifts the blame for parent and child, takes a primary/secondary history, treats constipation and excludes UTI/diabetes, follows NICE CG111 (basics, alarm first-line, desmopressin option, rewards for behaviours), engages Rory as plan owner, and defuses the family conflict.'
      },
      avoid: [
        { dont:'"He really is a bit old for this \u2014 he needs to try harder."', instead:'"Bedwetting at 7 is common and not his fault \u2014 trying harder isn\u2019t the issue, and we can treat it."', why:'Blaming the child is harmful and untrue; de-shaming is the therapeutic core.' },
        { dont:'(Skipping) not checking constipation/diabetes.', instead:'"Let’s treat any constipation, ask about thirst, weight loss and daytime symptoms, and test the urine or glucose if any are present — important, quick steps."', why:'Constipation is a common reversible cause and diabetes must not be missed.' },
        { dont:'"Just stop his drinks in the evening and lift him at night."', instead:'"Don’t restrict fluids or rely on lifting him — instead, drinks spread through the day, no caffeine, treat constipation, and an alarm."', why:'Fluid restriction and lifting are counterproductive; the alarm is first-line.' }
      ]
    }

  });

})();
