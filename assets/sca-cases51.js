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
    meta:{ age:4, sex:'M', setting:'Video consultation \u2014 a child with a discharging ear (mother present).', system:'Paediatrics / Acute otitis media \u2014 when antibiotics earn their keep' },
    brief:'Theo Marsh, 4, brought by his mother with EAR DISCHARGE overnight after a few days of ear pain and a cold; he is now more comfortable and systemically well. The examined skills: assess the unwell-vs-well child properly (this is acute otitis media, likely with a perforation \u2014 the discharge often relieves the pain); apply ANTIBIOTIC STEWARDSHIP per NICE \u2014 most AOM is self-limiting and many children do not need antibiotics, but recognise the situations that DO (systemically unwell, <2 years with bilateral AOM, otorrhoea/discharge in AOM, high risk/comorbidity), and use back-up/delayed prescribing appropriately; safety-net for complications (mastoiditis, meningitis); advise analgesia and natural course; and manage parental EXPECTATION of antibiotics with explanation rather than confrontation. Hold NG12/serious-illness awareness for the unwell child. No NG12 cancer link.',
    script:{
      opening:'"He\u2019s been pulling at his ear for a few days, then this morning there was yellowy gunk all over the pillow \u2014 his ear\u2019s been running. He\u2019s actually a bit brighter now the gunk\u2019s come out. But surely that means infection, so he needs antibiotics, right? I don\u2019t want it spreading."',
      facts:[
        { topic:'Assess well vs unwell first', text:'Before treatment, assess the child: temperature, how systemically well/unwell, feeding/fluids, activity, and the NICE traffic-light features. Examine ears (the affected drum may show AOM \u00b1 a perforation with discharge), throat, chest, and check for any red flags. A child who is brighter after the discharge, feeding and active is reassuring \u2014 confirm that picture rather than assuming severity from the discharge.' },
        { topic:'Understand the discharge', text:'Otorrhoea in acute otitis media usually means the eardrum has PERFORATED, releasing pus \u2014 which characteristically RELIEVES the pain (hence "he\u2019s brighter"). It looks alarming to parents but is a common, usually self-limiting event; the perforation typically heals. Explaining this defuses the "running ear = serious spreading infection" fear.' },
        { topic:'Antibiotic stewardship \u2014 NICE', text:'CORE \u2014 most acute otitis media is self-limiting and resolves without antibiotics; NICE recommends NO antibiotic or a BACK-UP (delayed) prescription for many children, with analgesia. BUT antibiotics ARE indicated/considered when: the child is systemically unwell, there are symptoms/signs of a more serious illness or complication, in children under 2 with BILATERAL AOM, and \u2014 relevant here \u2014 in AOM with OTORRHOEA (discharge). So this child (AOM with discharge) is in a group where an antibiotic is reasonable \u2014 but the decision is made on assessment, with stewardship and safety-netting, not reflexively.' },
        { topic:'Analgesia and natural course', text:'Emphasise PAIN RELIEF as the mainstay: regular paracetamol/ibuprofen (weight-based dosing), which parents often under-use. Explain the natural course (AOM usually settles within a few days; a perforation usually heals within weeks \u2014 keep the ear dry, avoid poking). Decongestants/antihistamines are not recommended. Set expectations for recovery.' },
        { topic:'Safety-net for complications', text:'Safety-net explicitly for the rare but serious complications: MASTOIDITIS (pain/swelling/redness behind the ear, the ear pushed forward), MENINGITIS (very unwell, neck stiffness, photophobia, non-blanching rash, drowsiness), worsening despite treatment, high fever, facial weakness, or persistent discharge/hearing loss needing follow-up. Give clear, plain-language red flags and when to seek urgent help.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the mother\u2019s "he needs antibiotics, right?" is a mix of worry, a belief that discharge = serious infection needing antibiotics, and possibly pressure (a bad night, wanting to "do something", or past experience). Manage the expectation with explanation and partnership rather than a flat refusal or a reflexive prescription \u2014 in this case an antibiotic is reasonable, so use it as a teachable, shared decision while emphasising analgesia and safety-netting.' },
      ],
      ice:{
        ideas:'A running/discharging ear means infection that needs antibiotics to stop it spreading.',
        concerns:'HIDDEN AGENDA \u2014 worry after a bad night, belief that discharge = serious, wanting to "do something"; possibly expects antibiotics as default.',
        expectations:'An antibiotic prescription. What she needs: a proper well/unwell assessment, explanation of the perforation/discharge, an evidence-based antibiotic decision (reasonable here given otorrhoea) with analgesia emphasised, and clear safety-netting.'
      },
      cues:['Ear discharge after AOM, child brighter afterwards, systemically well \u2014 likely perforation relieving pain; assess well/unwell first.','NICE stewardship: most AOM self-limiting; antibiotics for unwell, <2 bilateral, or AOM with OTORRHOEA \u2014 the last applies here, so an antibiotic is reasonable.','"He needs antibiotics, doesn\u2019t he?" \u2014 manage expectation with explanation; emphasise analgesia; safety-net mastoiditis/meningitis.']
    },
    checkpoints:[
      { dom:'tasks', text:'Assesses the child as well vs unwell FIRST (temperature, systemic state, feeding/fluids, NICE traffic-light) and examines ears/throat/chest \u2014 not assuming severity from the discharge' },
      { dom:'tasks', text:'Explains the discharge correctly \u2014 otorrhoea in AOM usually means a perforation that relieves pain and generally heals \u2014 defusing the "running ear = serious" fear' },
      { dom:'tasks', text:'Applies NICE antibiotic STEWARDSHIP: knows most AOM is self-limiting and recognises the indications for antibiotics (systemically unwell, <2 with bilateral AOM, AOM with otorrhoea, complications) \u2014 so a prescription is reasonable here, made on assessment not reflex' },
      { dom:'tasks', text:'Emphasises ANALGESIA as the mainstay (regular weight-based paracetamol/ibuprofen, often under-used) and explains the natural course (keep ear dry, perforation heals)' },
      { dom:'tasks', text:'SAFETY-NETS for complications \u2014 mastoiditis, meningitis, worsening/high fever, facial weakness, persistent discharge/hearing loss \u2014 with plain-language red flags' },
      { dom:'rto',   text:'Manages the parental antibiotic EXPECTATION with explanation and partnership rather than confrontation or a reflexive prescription' },
      { dom:'rto',   text:'Reassures the worried mother (bad night, fear of spreading) and checks her understanding of the plan' },
      { dom:'gs',    text:'Safety-nets and follows up: clear red flags and when to seek urgent help, analgesia plan, expected recovery, and review if not settling/persistent discharge \u2014 evidence-based, stewardship-minded care (no NG12 cancer link)' },
    ],
    worked:[
      { lbl:'Assess + reassure', txt:'"Let me check him over first \u2014 his temperature, how he\u2019s feeding and playing, and look in both ears and his throat. \u2026 He\u2019s actually pretty well in himself, which is reassuring."' },
      { lbl:'Explain the discharge', txt:'"That \u2018gunk\u2019 is usually a sign the eardrum has let go a little to release the pressure \u2014 which is exactly why his pain eased. It looks dramatic but it\u2019s common and the drum heals itself."' },
      { lbl:'The antibiotic decision', txt:'"On antibiotics \u2014 most ear infections actually get better on their own, so we don\u2019t always use them. But because his ear is discharging, this is one of the situations where an antibiotic is reasonable, so I\u2019ll prescribe one. The key, though, is regular pain relief."' },
      { lbl:'Analgesia first', txt:'"Give paracetamol and ibuprofen regularly at the right dose for his weight \u2014 that\u2019s what makes him comfortable. Keep the ear dry, don\u2019t poke anything in it."' },
      { lbl:'Safety-net', txt:'"Come back urgently if he becomes very unwell, gets swelling or redness behind the ear or it sticks out, a high fever, a stiff neck, a rash that doesn\u2019t fade, or he\u2019s drowsy \u2014 those are the things we never want to miss."' },
      { lbl:'Follow-up', txt:'"The discharge should settle over a few days and the drum heal over a few weeks. If it keeps running, his hearing seems off, or he\u2019s not improving, bring him back so we can check it."' },
    ],
    learning:'A discharging ear in a child is usually acute otitis media with a perforated eardrum: the otorrhoea releases pus and characteristically relieves the pain (hence the child being "brighter"), it looks alarming but is common and usually self-limiting, and the perforation typically heals \u2014 so assess the child as well versus unwell first (temperature, systemic state, feeding/fluids, NICE traffic-light, ear/throat/chest examination) rather than assuming severity from the discharge. Apply NICE antibiotic stewardship: most acute otitis media resolves without antibiotics and many children need only analgesia or a back-up (delayed) prescription, but antibiotics are indicated or reasonable when the child is systemically unwell, in children under 2 with bilateral AOM, in AOM with otorrhoea (discharge), or where there are features of a serious illness/complication \u2014 so this child, with a discharging ear, falls into a group where an antibiotic is reasonable, with the decision made on assessment and with stewardship, not reflexively. Emphasise analgesia as the mainstay (regular weight-based paracetamol/ibuprofen, frequently under-used), explain the natural course (keep the ear dry, the drum heals), and avoid decongestants/antihistamines. Safety-net explicitly for the rare serious complications \u2014 mastoiditis (swelling/redness behind the ear, the pinna pushed forward), meningitis (very unwell, neck stiffness, photophobia, non-blanching rash, drowsiness), worsening or high fever, facial weakness, and persistent discharge/hearing loss \u2014 with plain-language red flags. The hidden agenda is parental worry and a belief that discharge means a serious spreading infection needing antibiotics; manage that expectation with explanation and partnership, using this as a teachable shared decision rather than a flat refusal or a reflexive prescription. No NG12 cancer pathway applies, though serious-illness vigilance is maintained.',
    knowledge:{
      guideline:'NICE NG91 otitis media (acute) \u00b7 antibiotic stewardship \u00b7 NICE traffic-light \u00b7 complications safety-netting',
      points:[
        { h:'Assess well vs unwell', t:'Temperature, systemic state, feeding/fluids, NICE traffic-light; examine ears/throat/chest. Don\u2019t infer severity from discharge alone.' },
        { h:'Understand otorrhoea', t:'Discharge in AOM usually means a perforation releasing pus, which relieves pain and generally heals. Defuse the "running ear = serious" fear.' },
        { h:'Stewardship', t:'Most AOM is self-limiting; no antibiotic or back-up prescription for many. Antibiotics for: systemically unwell, <2 with bilateral AOM, AOM with otorrhoea, complications. Decide on assessment, not reflex.' },
        { h:'Analgesia is the mainstay', t:'Regular weight-based paracetamol/ibuprofen (often under-used). Keep ear dry; perforation heals. Avoid decongestants/antihistamines.' },
        { h:'Complications', t:'Mastoiditis (post-auricular swelling/redness, pinna pushed forward), meningitis (unwell, neck stiffness, photophobia, non-blanching rash, drowsiness), facial weakness, persistent discharge/hearing loss.' },
        { h:'Manage expectations', t:'Explain rather than confront or reflexively prescribe; use shared decision-making. Here an antibiotic is reasonable given otorrhoea, but analgesia and safety-netting lead.' },
        { h:'Never do', t:'Never assume severity from discharge; never prescribe reflexively without assessment; never omit analgesia advice or complication safety-netting.' },
        { h:'Safety-net & follow-up', t:'Plain-language red flags, recovery expectations, review if not settling/persistent discharge/hearing concern. (No NG12 cancer link.)' }
      ]
    }
  };

  /* ====== 198. F2F — Constipation in a 5-year-old: disimpaction done properly ====== */
  const c198 = {
    id:'child-constipation', title:'"She\u2019s soiling her pants at school \u2014 I think she\u2019s just being lazy or naughty"', type:'video', duration:12,
    meta:{ age:5, sex:'F', setting:'Video consultation \u2014 a child with soiling (mother present).', system:'Paediatrics / Childhood constipation \u2014 overflow soiling & disimpaction done properly' },
    brief:'Maisie Cobb, 5, brought because she is SOILING her pants at school; her mother is frustrated and thinks she is "lazy/naughty" or doing it deliberately. The examined skills: recognise that the soiling is almost certainly OVERFLOW INCONTINENCE from chronic CONSTIPATION with faecal impaction (NOT naughtiness) \u2014 a crucial reframe that removes blame and shame; take a focused history (stool pattern/Bristol, withholding, painful/hard stools, hard masses, diet/fluids, toileting, onset/triggers, red flags) and examine (abdominal mass, perianal); EXCLUDE red flags for organic disease (delayed meconium/from-birth onset, failure to thrive, abdominal distension, neurological signs \u2014 which would prompt referral); then manage per NICE \u2014 DISIMPACTION FIRST with an escalating osmotic laxative regimen (macrogol/Movicol Paediatric, titrated up over ~2 weeks), warning that soiling may TEMPORARILY WORSEN during disimpaction, followed by MAINTENANCE laxatives (not stopped too soon), plus behavioural toileting, diet/fluids, and de-shaming education for the family. No NG12 cancer link.',
    script:{
      opening:'"I\u2019m at the end of my tether, doctor. Maisie keeps dirtying her pants \u2014 proper soiling \u2014 at school and at home. She\u2019s 5, she\u2019s toilet-trained, so I think she\u2019s either being lazy or doing it on purpose for attention. The school have mentioned it. I\u2019ve tried telling her off but it makes no difference. What do I do with her?"',
      facts:[
        { topic:'Reframe: this is overflow, not naughtiness', text:'THE CRUCIAL REFRAME \u2014 involuntary soiling in a previously toilet-trained child is almost always OVERFLOW INCONTINENCE from chronic constipation with faecal impaction: hard stool builds up, the rectum stretches, and softer stool leaks around it WITHOUT the child feeling it or being able to control it. She is NOT being lazy or naughty \u2014 she usually cannot feel it coming. Removing the blame is therapeutic and essential before anything else; the mother\u2019s frustration is understandable but the framing is wrong.' },
        { topic:'Focused history', text:'Take the history: stool frequency and form (Bristol), pain on passing stool, WITHHOLDING behaviour (crossing legs, hiding, refusing the toilet \u2014 often after a painful poo), hard pellet stools or very large stools that block the toilet, palpable hard tummy, blood, diet (fibre/fluids), toileting routine, school toilet avoidance, and onset/triggers (a fissure, a change, potty-training). This builds the picture of constipation with impaction and overflow.' },
        { topic:'Exclude red flags / organic disease', text:'Screen for features that suggest an organic cause needing referral (per NICE): symptoms from BIRTH/first few weeks, delayed passage of MECONIUM (>48h \u2014 Hirschsprung\u2019s), FAILURE TO THRIVE/growth faltering, gross abdominal distension, abnormal lower-limb neurology or spine (e.g. spina bifida occulta signs), ribbon stools, or severe unexplained features. Their ABSENCE supports idiopathic functional constipation; their presence prompts examination and specialist referral. Examine the abdomen (faecal mass) and perianal area (fissure); a routine PR exam is generally avoided in primary care.' },
        { topic:'Disimpaction FIRST \u2014 done properly', text:'Per NICE: if impacted, treat with DISIMPACTION before maintenance. First-line is an osmotic macrogol (e.g. Movicol Paediatric Plain) in an ESCALATING regimen, titrated UP over about 1\u20132 weeks to clear the impaction (add a stimulant laxative if macrogol alone insufficient). WARN the family that soiling and tummy ache may TEMPORARILY WORSEN during disimpaction as the backlog clears \u2014 this is expected and not a reason to stop, and the commonest cause of "treatment failure" is stopping early or under-dosing.' },
        { topic:'Maintenance, behaviour & not stopping early', text:'After disimpaction, continue MAINTENANCE laxatives (titrated to soft, regular stools) for SEVERAL MONTHS \u2014 often longer \u2014 and do NOT stop abruptly once things improve (relapse is common if stopped too soon). Add behavioural measures: regular post-meal toilet SITTING (using the gastrocolic reflex), a footstool for positioning, a reward/star-chart for sitting (not for results), adequate fluids and fibre, and addressing school-toilet avoidance. De-shame throughout; involve the child positively.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the mother\u2019s "lazy/naughty/on purpose" reflects frustration, exhaustion, possibly embarrassment and conflict with the school, and a lack of understanding of the mechanism. There may be guilt under the anger. The skill is to reframe compassionately (for both child and mother), relieve the blame, give a clear effective plan, and set realistic expectations (this takes months) \u2014 turning a punitive dynamic into a supportive one. Watch for any safeguarding/emotional impact on the child.' },
      ],
      ice:{
        ideas:'The child is soiling because she is lazy, naughty, or seeking attention/doing it deliberately.',
        concerns:'HIDDEN AGENDA \u2014 frustration, exhaustion, embarrassment, school conflict; lack of understanding of the mechanism; possible guilt under the anger.',
        expectations:'Advice on how to make the child stop/behave. What she needs: the reframe (overflow from constipation, not naughtiness), red-flag exclusion, proper disimpaction-then-maintenance, behavioural measures, and de-shaming with realistic timescales.'
      },
      cues:['Involuntary soiling in a toilet-trained 5-year-old \u2014 overflow incontinence from constipation/impaction, NOT naughtiness; reframe and de-shame.','Screen red flags (from-birth onset, delayed meconium, failure to thrive, distension, neuro/spine) \u2014 absence supports functional constipation.','Manage per NICE: disimpaction FIRST (escalating macrogol; warn soiling may worsen), then maintenance not stopped too soon + behavioural toileting.']
    },
    checkpoints:[
      { dom:'tasks', text:'REFRAMES the soiling as OVERFLOW INCONTINENCE from chronic constipation/impaction (involuntary, the child usually cannot feel it) \u2014 NOT laziness or naughtiness \u2014 and removes blame as a therapeutic first step' },
      { dom:'tasks', text:'Takes a focused history (Bristol stool form, withholding behaviour, painful/hard or very large stools, palpable mass, diet/fluids, toileting, onset/triggers) and examines the abdomen/perianal area' },
      { dom:'tasks', text:'EXCLUDES red flags for organic disease (from-birth onset, delayed meconium >48h, failure to thrive, gross distension, neurological/spinal signs, ribbon stools) and would refer if present' },
      { dom:'tasks', text:'Manages per NICE with DISIMPACTION FIRST \u2014 escalating osmotic macrogol (\u00b1 stimulant) titrated over ~1\u20132 weeks \u2014 and WARNS that soiling/abdominal pain may temporarily worsen during disimpaction (not a reason to stop)' },
      { dom:'tasks', text:'Plans MAINTENANCE laxatives continued for months (not stopped too soon) plus behavioural measures (post-meal toilet sitting, footstool, reward for sitting, fluids/fibre, school-toilet access)' },
      { dom:'rto',   text:'Reframes compassionately for both child and mother, relieves blame/guilt, and addresses the punitive dynamic \u2014 protecting the child from shame' },
      { dom:'rto',   text:'Sets realistic expectations (this takes months) and checks the mother\u2019s understanding so she adheres rather than stopping early' },
      { dom:'gs',    text:'Safety-nets and follows up: review of disimpaction/maintenance, what to expect, when to return (red flags, no improvement), and ongoing support \u2014 evidence-based, de-shaming care with any emotional/safeguarding impact considered (no NG12 cancer link)' },
    ],
    worked:[
      { lbl:'Reframe + de-blame', txt:'"I can hear how exhausting this is \u2014 but here\u2019s the key thing: Maisie almost certainly isn\u2019t being naughty or lazy. This is what happens when a child gets very constipated: hard poo backs up, and softer poo leaks around it without her feeling it or being able to stop it. She genuinely can\u2019t control it."' },
      { lbl:'History', txt:'"Let me ask \u2014 when she does poo, is it hard or painful, or really big? Does she hold on, cross her legs, or avoid the toilet? Does her tummy feel hard? \u2026 That fits a backed-up bowel causing the soiling."' },
      { lbl:'Exclude red flags', txt:'"A few checks: was she constipated from birth, slow to pass her first stool as a newborn, growing well? Any tummy swelling or back/leg problems? \u2026 All reassuring \u2014 this is the common, treatable type."' },
      { lbl:'Disimpaction, with the warning', txt:'"We clear the backlog first with a laxative powder, building the dose up over a couple of weeks. Important: her soiling and tummy ache might get WORSE for a few days as it clears \u2014 that\u2019s expected, it means it\u2019s working, so don\u2019t stop."' },
      { lbl:'Maintenance + toilet routine', txt:'"Once cleared, she stays on a daily dose for months to keep poos soft \u2014 we don\u2019t stop early or it comes straight back. Plus sitting on the toilet after meals with a footstool, a star chart just for sitting, and plenty of fluids and fibre."' },
      { lbl:'Support + safety-net', txt:'"Please go easy on her \u2014 telling off makes it worse and she can\u2019t help it. This takes patience, often months. Come back if she\u2019s not improving, develops tummy swelling, blood, or weight loss, and let\u2019s review how she\u2019s getting on."' },
    ],
    learning:'Involuntary soiling in a previously toilet-trained child is almost always OVERFLOW INCONTINENCE from chronic constipation with faecal impaction \u2014 hard stool builds up, the rectum stretches, and softer stool leaks around it without the child feeling it or being able to control it \u2014 so the crucial, therapeutic first step is to REFRAME it as a medical problem, not laziness, naughtiness or deliberate behaviour, removing the blame and shame that worsen it. Take a focused history (Bristol stool form, withholding behaviour, painful/hard or very large stools, palpable abdominal mass, diet/fluids, toileting routine, school-toilet avoidance, onset/triggers) and examine the abdomen and perianal area, while EXCLUDING red flags for organic disease (symptoms from birth, delayed passage of meconium beyond 48 hours suggesting Hirschsprung\u2019s, failure to thrive, gross abdominal distension, abnormal lower-limb neurology/spinal signs, ribbon stools) which would prompt referral. Manage per NICE with DISIMPACTION FIRST using an escalating osmotic macrogol (e.g. Movicol Paediatric Plain), titrated up over about 1\u20132 weeks (adding a stimulant if needed), and warn the family that soiling and abdominal pain may temporarily worsen as the backlog clears \u2014 this is expected and not a reason to stop, since under-dosing or stopping early is the commonest cause of apparent failure. Follow with MAINTENANCE laxatives continued for several months (not stopped abruptly once improved, as relapse is common) plus behavioural measures \u2014 regular post-meal toilet sitting using the gastrocolic reflex, a footstool for positioning, a reward chart for sitting rather than results, adequate fluids and fibre, and addressing school-toilet avoidance \u2014 with de-shaming throughout. The hidden agenda is parental frustration, exhaustion and a misunderstanding of the mechanism, often with guilt under the anger; reframe compassionately for both child and mother, set realistic month-long expectations, protect the child from shame, and watch for emotional/safeguarding impact. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE CG99 constipation in children \u00b7 overflow soiling \u00b7 disimpaction then maintenance \u00b7 red flags for organic disease',
      points:[
        { h:'Reframe overflow, de-shame', t:'Involuntary soiling in a toilet-trained child = overflow from constipation/impaction, not naughtiness. The child usually cannot feel it. Removing blame is therapeutic and comes first.' },
        { h:'Focused history', t:'Bristol stool form, withholding, painful/hard/large stools, palpable mass, diet/fluids, toileting, school-toilet avoidance, onset/triggers (fissure, potty-training).' },
        { h:'Red flags for organic disease', t:'From-birth onset, delayed meconium >48h (Hirschsprung\u2019s), failure to thrive, gross distension, neurological/spinal signs, ribbon stools \u2192 examine and refer. Absence supports functional constipation.' },
        { h:'Disimpaction first', t:'Escalating osmotic macrogol (\u00b1 stimulant) titrated over ~1\u20132 weeks. Warn that soiling/pain may temporarily worsen as the backlog clears \u2014 expected, not a reason to stop.' },
        { h:'Maintenance, not stopped early', t:'Continue maintenance laxatives for months, titrated to soft regular stools; do not stop abruptly (relapse common). The main cause of "failure" is stopping early/under-dosing.' },
        { h:'Behavioural measures', t:'Post-meal toilet sitting (gastrocolic reflex), footstool positioning, reward for sitting (not results), fluids/fibre, school-toilet access. Involve the child positively.' },
        { h:'Never do', t:'Never label it naughtiness; never skip the red-flag screen; never start maintenance without disimpaction if impacted; never stop laxatives too soon; never shame the child.' },
        { h:'Safety-net & follow-up', t:'Review disimpaction/maintenance, set realistic timescales, return for red flags/no improvement, ongoing support; consider emotional/safeguarding impact. (No NG12 cancer link.)' }
      ]
    }
  };

  /* ====== 199. F2F — Reflux in a baby: feeding, red flags, parental exhaustion ====== */
  const c199 = {
    id:'infant-reflux', title:'"He brings up his milk and screams \u2014 I\u2019m exhausted, please give him something"', type:'video', duration:12,
    meta:{ age:0.25, sex:'M', setting:'Video consultation \u2014 a 3-month-old who posseting/regurgitating (mother present).', system:'Paediatrics / Infant reflux (GOR/GORD) \u2014 feeding, red flags & supporting an exhausted parent' },
    brief:'Baby Alfie, 3 months, brought by his exhausted mother because he regurgitates milk after feeds and cries; she is sleep-deprived and wants "something to fix it". The examined skills: recognise that uncomplicated gastro-oesophageal REFLUX (posseting) is NORMAL and very common in thriving babies and usually improves with age/weaning; assess FEEDING (volume/frequency/technique, over-feeding, winding, breast/bottle) and growth (plot weight); EXCLUDE red flags that change the picture \u2014 GORD with complications (faltering growth, feeding refusal, distressed back-arching, haematemesis), pyloric stenosis (projectile vomiting, hungry, weight loss, ~2\u20138 weeks), cow\u2019s-milk protein allergy (eczema, blood/mucus in stool, other atopy), bile-stained vomiting (urgent surgical), or signs of serious illness/dehydration; give CONSERVATIVE first-line advice (positioning, smaller more frequent feeds, review feed volume, thickened feeds/trial); avoid premature/unnecessary acid-suppression (PPIs not for uncomplicated reflux); and crucially SUPPORT THE EXHAUSTED PARENT (validate, screen maternal mood, signpost support). No NG12 cancer link.',
    script:{
      opening:'(Holding the baby, visibly tired.) "He brings his milk back up after nearly every feed, sometimes loads of it, and then he cries and arches his back. I\u2019m shattered \u2014 I\u2019m up all night. My friend\u2019s baby was put on a medicine for reflux. Please, can you just give Alfie something to stop it? I can\u2019t keep doing this."',
      facts:[
        { topic:'Uncomplicated reflux is normal', text:'Reassure with assessment: gastro-oesophageal reflux (posseting/regurgitation) is very common and NORMAL in babies \u2014 the lower oesophageal sphincter is immature \u2014 affecting many infants, peaking around 4 months and usually resolving by ~12 months/with weaning and upright posture. In a THRIVING, otherwise well baby, it is a laundry problem, not a disease. But this reassurance must follow proper assessment of feeding, growth and red flags.' },
        { topic:'Assess feeding and growth', text:'Assess FEEDING: volume and frequency (over-feeding is common and worsens reflux), feeding technique, winding, breast vs bottle, and whether feeds are too large/too fast. PLOT the WEIGHT on a growth chart and check the trajectory \u2014 a thriving baby is reassuring; faltering growth changes everything. Observe a feed if possible. Much "reflux" improves with feeding adjustments alone.' },
        { topic:'Exclude the red flags', text:'EXCLUDE the conditions that mimic or complicate reflux: PYLORIC STENOSIS (forceful PROJECTILE vomiting, hungry after vomiting, weight loss/dehydration, typically 2\u20138 weeks, commoner in firstborn males \u2014 a surgical emergency); BILE-STAINED (green) vomiting (urgent surgical \u2014 obstruction); GORD with complications (faltering growth, marked feeding aversion/refusal, distressed back-arching/Sandifer\u2019s, haematemesis, apnoea); COW\u2019S-MILK PROTEIN ALLERGY (eczema, blood/mucus in stools, chronic diarrhoea, other atopy \u2014 consider a trial of maternal dairy exclusion if breastfeeding or a hydrolysed formula); and signs of serious illness/dehydration. These shift management from reassurance to action/referral.' },
        { topic:'Conservative first-line', text:'For uncomplicated reflux, FIRST-LINE is conservative (NICE NG1): review and not over-feed; offer smaller, more frequent feeds; ensure good winding; keep the baby upright after feeds; for formula-fed infants consider a trial of thickened feed or a stepwise approach. Avoid reflexive medication. If distressed feeding/possible oesophagitis is suspected, a trial of alginate (e.g. Gaviscon) then, only if needed, acid suppression \u2014 but PPIs/H2 blockers are NOT recommended for uncomplicated reflux or to treat visible regurgitation alone.' },
        { topic:'Support the exhausted parent', text:'CENTRAL \u2014 the mother is exhausted and distressed; her wellbeing is part of the consultation. VALIDATE how hard this is, acknowledge the sleep deprivation, screen MATERNAL MOOD (postnatal depression/anxiety), check support at home, and signpost help (health visitor, support groups, practical strategies). A frazzled, unsupported parent of a "refluxy" baby is at real risk \u2014 caring for her is caring for the baby. Do not dismiss her with "it\u2019s just reflux".' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 "please give him something / I can\u2019t keep doing this" is a plea born of EXHAUSTION and helplessness as much as a request for medication; she wants to be heard, validated, and helped, and reassured she is not failing. There may be maternal low mood, pressure from comparisons ("my friend\u2019s baby got a medicine"), or anxiety the baby is suffering. The skill is to assess and reassure properly, give practical help, support HER, and avoid both dismissal and unnecessary medicalisation.' },
      ],
      ice:{
        ideas:'The baby has "reflux" needing a medicine to stop it, like her friend\u2019s baby had.',
        concerns:'HIDDEN AGENDA \u2014 exhaustion, helplessness, fear the baby is suffering, feeling she\u2019s failing; possible maternal low mood; comparison pressure.',
        expectations:'A medicine to fix it. What she needs: proper feeding/growth assessment, red-flag exclusion, reassurance about normal reflux, conservative first-line help, avoidance of unnecessary acid suppression, and genuine support for HER exhaustion/mood.'
      },
      cues:['Regurgitation + crying in a 3-month-old \u2014 likely normal reflux IF thriving; assess feeding/growth and exclude red flags before reassuring.','Red flags: projectile vomiting (pyloric stenosis), bile-stained vomit (surgical), faltering growth, blood, eczema/blood in stool (CMPA) \u2014 exclude.','"Please give him something, I can\u2019t keep doing this" \u2014 exhaustion/helplessness; validate, screen maternal mood, support her; avoid reflexive PPI.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises uncomplicated gastro-oesophageal reflux as NORMAL and common in a thriving baby (improving with age/weaning) \u2014 but only reassures AFTER assessing feeding, growth and red flags' },
      { dom:'tasks', text:'Assesses FEEDING (volume/frequency \u2014 over-feeding, technique, winding, breast/bottle) and PLOTS WEIGHT on a growth chart, observing a feed where possible' },
      { dom:'tasks', text:'EXCLUDES red flags: pyloric stenosis (projectile vomiting, hungry, weight loss, 2\u20138 weeks), bile-stained vomiting (surgical), GORD complications (faltering growth, feeding aversion, back-arching, haematemesis), cow\u2019s-milk protein allergy (eczema, blood/mucus in stool, atopy), serious illness/dehydration' },
      { dom:'tasks', text:'Gives CONSERVATIVE first-line management (review/avoid over-feeding, smaller more frequent feeds, winding, upright posture, consider thickened feed/stepwise approach) and AVOIDS reflexive PPI/H2 for uncomplicated reflux or visible regurgitation alone' },
      { dom:'tasks', text:'Considers a CMPA trial (maternal dairy exclusion if breastfeeding / hydrolysed formula) or alginate trial only where the history fits \u2014 escalating appropriately, not reflexively' },
      { dom:'rto',   text:'VALIDATES and SUPPORTS the exhausted parent \u2014 acknowledges sleep deprivation, screens MATERNAL MOOD, checks support, signposts help \u2014 rather than dismissing her with "it\u2019s just reflux"' },
      { dom:'rto',   text:'Reads the plea as exhaustion/helplessness, reassures she is not failing, and addresses comparison pressure without unnecessary medicalisation' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags warranting urgent review (projectile/bile vomiting, poor feeding, dehydration, faltering growth), conservative plan with review, maternal support and health-visitor involvement \u2014 baby and mother both cared for (no NG12 cancer link)' },
    ],
    worked:[
      { lbl:'Validate first', txt:'"Before anything \u2014 this sounds exhausting, and being up all night with a crying, sicky baby is genuinely hard. You\u2019re not failing; you\u2019ve done the right thing bringing him. Let me check him over and we\u2019ll make a plan together."' },
      { lbl:'Assess feeding + growth', txt:'"Can you tell me how much and how often he feeds, and how you wind him? \u2026 Let me plot his weight. \u2026 He\u2019s growing beautifully, which is really reassuring \u2014 it tells me he\u2019s thriving despite the mess."' },
      { lbl:'Exclude red flags', txt:'"A few important checks: is the vomit ever forceful and shooting across the room, or green? Is there blood, any eczema or blood in his nappies? \u2026 None of that \u2014 good, that rules out the things I\u2019d worry about."' },
      { lbl:'Explain + conservative plan', txt:'"So this is normal baby reflux \u2014 his food-pipe valve is just immature, and it almost always settles by his first birthday. Let\u2019s try smaller, more frequent feeds, good winding, and holding him upright after feeds. Often that\u2019s enough."' },
      { lbl:'Why not a medicine yet', txt:'"I know your friend\u2019s baby had a medicine, but the acid-suppressing ones don\u2019t actually help simple bringing-up of milk and aren\u2019t recommended for it. If he were distressed feeding or not growing, we\u2019d think again \u2014 but he\u2019s thriving."' },
      { lbl:'Support her + safety-net', txt:'"How are YOU doing in yourself, with the sleep and everything? \u2026 Let\u2019s get the health visitor involved and look at some support. Come back if he vomits forcefully or green, refuses feeds, isn\u2019t weeing, or stops gaining weight. And come back for you, too \u2014 not just him."' },
    ],
    learning:'Uncomplicated gastro-oesophageal reflux (posseting/regurgitation) is normal and very common in babies because the lower oesophageal sphincter is immature, peaking around 4 months and usually resolving by about 12 months with age, weaning and upright posture \u2014 in a thriving, otherwise well baby it is a laundry problem, not a disease \u2014 but reassurance must follow proper assessment. Assess feeding (volume and frequency, since over-feeding is common and worsens reflux, plus technique, winding and breast vs bottle) and plot the weight on a growth chart, observing a feed where possible, because much "reflux" improves with feeding adjustments alone. Exclude the red flags that mimic or complicate reflux: pyloric stenosis (forceful projectile vomiting, hunger after vomiting, weight loss/dehydration, typically 2\u20138 weeks and commoner in firstborn males \u2014 a surgical emergency); bile-stained green vomiting (urgent surgical obstruction); GORD with complications (faltering growth, marked feeding aversion, distressed back-arching/Sandifer\u2019s, haematemesis, apnoea); cow\u2019s-milk protein allergy (eczema, blood/mucus in stools, other atopy \u2014 consider maternal dairy exclusion if breastfeeding or a hydrolysed formula); and serious illness/dehydration. For uncomplicated reflux, first-line management is conservative (NICE NG1): avoid over-feeding, offer smaller more frequent feeds, ensure good winding and upright posture, and for formula-fed infants consider thickened feeds \u2014 while AVOIDING reflexive acid suppression, as PPIs/H2 blockers are not recommended for uncomplicated reflux or visible regurgitation alone (reserve an alginate then, only if needed, acid suppression for suspected oesophagitis/distressed feeding). Crucially, support the exhausted parent: validate how hard it is, acknowledge sleep deprivation, screen maternal mood for postnatal depression/anxiety, check support and signpost help \u2014 caring for the frazzled parent is caring for the baby. The hidden agenda is a plea born of exhaustion and helplessness as much as a request for medication; assess and reassure properly, give practical help, support her, and avoid both dismissal and unnecessary medicalisation. No NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG1 GOR/GORD in children \u00b7 infant feeding assessment \u00b7 pyloric stenosis / CMPA red flags \u00b7 maternal mood/support',
      points:[
        { h:'Reflux is usually normal', t:'Common, due to sphincter immaturity, peaks ~4 months, resolves by ~12 months. In a thriving well baby it is benign \u2014 but reassure only after assessing feeding, growth and red flags.' },
        { h:'Assess feeding & growth', t:'Volume/frequency (over-feeding), technique, winding, breast/bottle; plot weight; observe a feed. Feeding adjustments resolve much of it.' },
        { h:'Exclude red flags', t:'Pyloric stenosis (projectile vomiting, hungry, weight loss, 2\u20138 weeks), bile-stained vomiting (surgical), GORD complications (faltering growth, feeding aversion, back-arching, haematemesis, apnoea), CMPA (eczema, blood/mucus stool, atopy), serious illness/dehydration.' },
        { h:'Conservative first-line', t:'Avoid over-feeding, smaller frequent feeds, winding, upright posture, consider thickened feed (formula). Alginate trial if distressed/oesophagitis suspected.' },
        { h:'Avoid reflexive acid suppression', t:'PPIs/H2 blockers not recommended for uncomplicated reflux or visible regurgitation alone; reserve for proven/likely oesophagitis with feeding distress or faltering growth.' },
        { h:'CMPA consideration', t:'If history fits (eczema, blood/mucus stools, atopy), trial maternal dairy exclusion (breastfeeding) or hydrolysed formula.' },
        { h:'Support the parent', t:'Validate exhaustion, screen maternal mood, check support, signpost (health visitor, groups). Caring for the parent is caring for the baby. Don\u2019t dismiss with "it\u2019s just reflux".' },
        { h:'Safety-net', t:'Urgent review for projectile/bile vomiting, poor feeding, dehydration, faltering growth. Conservative plan with review; maternal support. (No NG12 cancer link.)' }
      ]
    }
  };

  /* ====== 200. F2F — Bedwetting in a 7-year-old: enuresis without shame ====== */
  const c200 = {
    id:'child-enuresis', title:'"He\u2019s still wetting the bed at 7 \u2014 his dad says he\u2019s too old for this"', type:'video', duration:12,
    meta:{ age:7, sex:'M', setting:'Video consultation \u2014 nocturnal enuresis (mother and child present).', system:'Paediatrics / Nocturnal enuresis \u2014 managing bedwetting without shame' },
    brief:'Rory Vaughan, 7, brought because he still wets the bed; his father thinks he is "too old" and the family is frustrated, with the boy clearly embarrassed. The examined skills: treat NOCTURNAL ENURESIS without SHAME \u2014 it is common, NOT the child\u2019s fault, and very treatable; engage the CHILD as well as the parent; take a focused history (primary vs secondary enuresis, daytime symptoms, frequency, fluids/caffeine, constipation, sleep/snoring, family history, psychosocial stressors, recent onset/triggers); EXCLUDE/treat contributors and red flags (UTI, constipation \u2014 a very common reversible cause, diabetes \u2014 polyuria/polydipsia/weight loss, daytime wetting suggesting bladder dysfunction, neurological signs, safeguarding/emotional triggers for SECONDARY enuresis); manage per NICE \u2014 demystify and de-shame, address fluids/toileting/constipation first, then an ENURESIS ALARM as first-line for motivated families, with DESMOPRESSIN as an option (e.g. for short-term/sleepovers or where an alarm is unsuitable); positive reward systems (for behaviours, not dry nights); and protect the child from blame. No NG12 link (but exclude diabetes).',
    script:{
      opening:'(Mother, with an embarrassed boy beside her.) "Rory\u2019s 7 and still wetting the bed most nights. His dad\u2019s getting frustrated \u2014 says he\u2019s far too old for this and should know better. We\u2019ve tried lifting him, telling him off, taking away drinks \u2026 nothing works. Is there something wrong with him? It\u2019s causing rows at home."',
      facts:[
        { topic:'De-shame first \u2014 and protect the child', text:'THE FIRST TASK \u2014 bedwetting is COMMON at 7 (a significant minority of children), is NOT the child\u2019s fault, not laziness or naughtiness, and is very treatable. Say so clearly, to BOTH the parent and the child. Punishment, telling off and taking away drinks are counterproductive and harmful. Protect Rory from blame, engage him kindly and directly (he is embarrassed), and reframe the family\u2019s frustration \u2014 this reframing is therapeutic and central to the mark.' },
        { topic:'Focused history', text:'Take the history: PRIMARY (never been dry) vs SECONDARY (dry then wetting again \u2014 more likely to have an emotional/medical trigger); DAYTIME symptoms (urgency, frequency, daytime wetting \u2014 suggests bladder overactivity/dysfunction); fluid and CAFFEINE intake and timing; CONSTIPATION (very common, reversible contributor); sleep/snoring; family history (often positive); and psychosocial stressors (bullying, family change, abuse) especially for secondary enuresis.' },
        { topic:'Exclude/treat contributors and red flags', text:'Screen and address: CONSTIPATION (treat it \u2014 often resolves the enuresis); UTI (dysuria, frequency \u2014 dipstick if suspected); DIABETES (polyuria, polydipsia, weight loss, fatigue \u2014 check glucose if suggestive, do not miss new-onset type 1); daytime symptoms suggesting bladder dysfunction (may need different management); neurological/spinal signs; and SAFEGUARDING/emotional triggers for secondary enuresis. These shape management and occasionally reveal a serious cause.' },
        { topic:'Manage per NICE \u2014 demystify, basics, then alarm', text:'Per NICE: demystify and reassure; address the BASICS first \u2014 adequate daytime fluids, reduce evening fluids/caffeine, regular daytime toileting and before bed, treat constipation, and stop punitive measures and lifting. Then, for a motivated child/family, an ENURESIS ALARM is FIRST-LINE (best long-term cure rates, needs commitment over weeks). DESMOPRESSIN is an option \u2014 e.g. for rapid/short-term results, sleepovers/school trips, or where an alarm is unsuitable or has failed. Use positive REWARD systems for agreed behaviours (drinking well, toileting, helping with sheets) NOT for dry nights (which the child cannot control).' },
        { topic:'Engage the child + realistic expectations', text:'Involve RORY: ask him how it affects him (sleepovers, embarrassment), enlist him as part of the team, and make him the owner of the plan (alarm/reward chart). Set realistic expectations \u2014 alarms take several weeks, relapses can happen, and success is gradual. Many children become dry with support; reassure both that progress is very likely with the right approach and patience.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 the presentation is loaded with the FATHER\u2019S frustration/expectation, family conflict, and the CHILD\u2019S shame and possible low self-esteem. The mother may want reassurance her son is normal and an end to the rows. The skill is to lift the blame off the child, educate the family that this is common and treatable, give an effective plan, and defuse the punitive dynamic \u2014 protecting Rory\u2019s wellbeing as much as treating the symptom. Watch for emotional impact/secondary causes.' },
      ],
      ice:{
        ideas:'The boy is "too old" to be wetting and should "know better"; maybe something is wrong with him; punishment/restricting drinks should work.',
        concerns:'HIDDEN AGENDA \u2014 father\u2019s frustration and family rows; the child\u2019s shame/low self-esteem; mother wanting reassurance he\u2019s normal.',
        expectations:'A way to make him stop. What he needs: de-shaming and reframing (common, not his fault, treatable), red-flag/constipation/diabetes screen, NICE management (basics, then alarm \u00b1 desmopressin), and protection from blame.'
      },
      cues:['Bedwetting at 7 with family frustration and an embarrassed child \u2014 de-shame FIRST; it\u2019s common, not his fault, treatable; engage the child.','Screen contributors/red flags: constipation (very common, reversible), UTI, DIABETES (polyuria/polydipsia/weight loss), daytime symptoms, secondary triggers.','Manage per NICE: basics + treat constipation, then enuresis ALARM first-line (\u00b1 desmopressin); reward behaviours not dry nights; stop punishment/lifting.']
    },
    checkpoints:[
      { dom:'tasks', text:'DE-SHAMES first \u2014 states clearly to parent AND child that bedwetting at 7 is common, NOT the child\u2019s fault and treatable \u2014 and stops punitive measures (telling off, restricting drinks, lifting), protecting the child from blame' },
      { dom:'tasks', text:'Takes a focused history distinguishing PRIMARY vs SECONDARY enuresis, and covering daytime symptoms, fluids/caffeine, constipation, sleep, family history and psychosocial stressors' },
      { dom:'tasks', text:'Excludes/treats contributors and red flags: CONSTIPATION (reversible, treat it), UTI, DIABETES (polyuria/polydipsia/weight loss \u2014 check glucose if suggestive), daytime bladder dysfunction, neurological/spinal signs, safeguarding/emotional triggers' },
      { dom:'tasks', text:'Manages per NICE: demystify, address the BASICS (fluids/toileting/constipation, stop punishment/lifting), then ENURESIS ALARM as first-line for motivated families, with DESMOPRESSIN as an option (short-term/sleepovers/alarm unsuitable)' },
      { dom:'tasks', text:'Uses positive REWARD systems for agreed behaviours (good drinking/toileting/helping) NOT for dry nights, and sets realistic expectations (alarms take weeks, gradual success)' },
      { dom:'rto',   text:'Engages RORY directly and kindly, lifts the blame, and defuses the father\u2019s frustration/family conflict \u2014 protecting the child\u2019s self-esteem' },
      { dom:'rto',   text:'Reassures the mother he is normal, educates the family compassionately, and watches for emotional impact/secondary causes' },
      { dom:'gs',    text:'Safety-nets and follows up: treat constipation/exclude diabetes, alarm/desmopressin plan with review, realistic timescales, and support \u2014 effective, de-shaming care that protects the child (exclude diabetes; no NG12 cancer link)' },
    ],
    worked:[
      { lbl:'De-shame, include the child', txt:'"Rory, this is really common \u2014 lots of children your age still wet the bed, and it is absolutely not your fault. You\u2019re not lazy and you\u2019re not naughty. And the good news is we can usually fix it together. (To mum) Telling off and taking away drinks actually make it harder, so let\u2019s stop those."' },
      { lbl:'History', txt:'"Has he ever been dry at night, or did it come back after being dry? Any wetting or rushing in the daytime? How are his poos \u2014 is he constipated? Any extra thirst or weeing a lot in the day? \u2026 That helps me find what\u2019s driving it."' },
      { lbl:'Exclude the important things', txt:'"Constipation is a really common, fixable cause \u2014 so we\u2019ll sort that. And I\u2019ll just check a urine sample to be sure there\u2019s no infection or sugar problem. Those are quick but important."' },
      { lbl:'The plan \u2014 basics + alarm', txt:'"First, the basics: good drinks through the day, less in the evening, a wee before bed, and no lifting him at night. Then the best long-term fix is a bedwetting alarm \u2014 it teaches his body to wake. It takes a few weeks of teamwork, but it works well."' },
      { lbl:'Desmopressin + rewards', txt:'"There\u2019s also a medicine that can keep him dry quickly \u2014 handy for sleepovers \u2014 which we can use too. And a reward chart \u2014 but for doing his part, like drinking well and helping change the sheets, not for dry nights, because he can\u2019t control those yet."' },
      { lbl:'Protect + safety-net', txt:'"Rory, you\u2019re going to be the captain of this plan. (To mum) Please keep dad on side \u2014 no blame, lots of encouragement; that matters as much as the alarm. Come back if it\u2019s not improving, or if you notice lots of thirst or weight loss, and let\u2019s review in a few weeks."' },
    ],
    learning:'Nocturnal enuresis at 7 must be managed without shame: it is common (affecting a significant minority of children), not the child\u2019s fault, not laziness or naughtiness, and very treatable \u2014 so the first and central task is to say so clearly to both parent and child, stop the counterproductive and harmful responses (telling off, restricting drinks, lifting), protect the child from blame, and engage the embarrassed child kindly and directly. Take a focused history distinguishing primary (never dry) from secondary (dry then wetting again, more likely to have an emotional or medical trigger), and covering daytime symptoms (urgency/frequency/daytime wetting suggesting bladder dysfunction), fluid and caffeine intake/timing, constipation, sleep/snoring, family history (often positive) and psychosocial stressors. Exclude and treat contributors and red flags \u2014 constipation (a very common, reversible cause that often resolves the enuresis when treated), UTI, diabetes (polyuria, polydipsia, weight loss \u2014 check glucose if suggestive, never miss new-onset type 1), daytime bladder dysfunction, neurological/spinal signs, and safeguarding/emotional triggers for secondary enuresis. Manage per NICE: demystify and reassure, address the basics first (adequate daytime fluids, reduced evening fluids/caffeine, regular toileting, treat constipation, stop punishment and lifting), then offer an enuresis alarm as first-line for a motivated child/family (best long-term cure rates, needs weeks of commitment), with desmopressin as an option for rapid/short-term results, sleepovers, or where an alarm is unsuitable or has failed; use reward systems for agreed behaviours (good drinking, toileting, helping with sheets) not for dry nights, which the child cannot control. Engage the child as owner of the plan, set realistic expectations, and \u2014 given the loaded dynamic of the father\u2019s frustration, family rows and the child\u2019s shame \u2014 lift the blame, educate the family, and protect the child\u2019s wellbeing as much as treating the symptom, watching for emotional impact or secondary causes. Exclude diabetes; no NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE CG111 nocturnal enuresis \u00b7 de-shaming \u00b7 constipation/UTI/diabetes screen \u00b7 alarm first-line \u00b7 desmopressin',
      points:[
        { h:'De-shame first', t:'Common at 7, not the child\u2019s fault, treatable. Tell parent and child clearly; stop punishment/restricting drinks/lifting; protect the child; engage him directly.' },
        { h:'Primary vs secondary', t:'Primary (never dry) vs secondary (dry then relapsing \u2014 look for emotional/medical trigger). History: daytime symptoms, fluids/caffeine, constipation, sleep, family history, stressors.' },
        { h:'Exclude/treat contributors', t:'Constipation (common, reversible \u2014 treat it), UTI, diabetes (polyuria/polydipsia/weight loss \u2014 check glucose), daytime bladder dysfunction, neurological signs, safeguarding/emotional triggers.' },
        { h:'Basics first', t:'Adequate daytime fluids, reduce evening fluids/caffeine, regular toileting and pre-bed wee, treat constipation, stop lifting/punishment.' },
        { h:'Alarm first-line', t:'Enuresis alarm is first-line for motivated families (best long-term cure), needs weeks of commitment. Owner = the child.' },
        { h:'Desmopressin & rewards', t:'Desmopressin for rapid/short-term needs (sleepovers) or when alarm unsuitable/failed. Reward agreed behaviours (drinking/toileting/helping), not dry nights.' },
        { h:'Never do', t:'Never blame/punish the child; never restrict fluids excessively or lift; never miss constipation or diabetes; never exclude the child from the conversation.' },
        { h:'Safety-net & follow-up', t:'Treat constipation/exclude diabetes; alarm/desmopressin plan with review; realistic timescales; watch emotional impact/secondary causes. (No NG12 cancer link.)' }
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
        { t:'0\u20133',  h:'Assess well/unwell', d:'Obs, systemic state, ears/throat/chest, traffic-light; confirm he\u2019s well.' },
        { t:'3\u20135',  h:'Explain discharge', d:'Perforation releasing pus relieves pain; common and heals.' },
        { t:'5\u20138',  h:'Antibiotic decision', d:'Stewardship; AOM with otorrhoea \u2192 antibiotic reasonable; analgesia leads.' },
        { t:'8\u201310', h:'Analgesia + course', d:'Regular paracetamol/ibuprofen; keep ear dry; natural course.' },
        { t:'10\u201312',h:'Safety-net', d:'Mastoiditis/meningitis red flags; review if not settling/persistent discharge.' }
      ],
      wordPics: {
        fail: 'Prescribes reflexively without assessment, or refuses dogmatically despite otorrhoea; no analgesia advice; no complication safety-net.',
        pass: 'Assesses the child, explains the perforation, makes a reasonable antibiotic decision with analgesia and safety-nets.',
        exc:  'Assesses well/unwell properly, explains otorrhoea, applies stewardship (antibiotic reasonable given discharge) while leading with analgesia, manages the parent\u2019s expectation by explanation, and safety-nets mastoiditis/meningitis.'
      },
      avoid: [
        { dont:'(Reflex) "Discharge means infection \u2014 here\u2019s antibiotics." (no exam)', instead:'"Let me check him over first, then decide \u2014 and the discharge actually tells us the eardrum released the pressure."', why:'Prescribing without assessment misses sicker children and undermines stewardship.' },
        { dont:'(Dogmatic) "Ear infections never need antibiotics."', instead:'"Most don\u2019t \u2014 but because his ear is discharging, an antibiotic is reasonable here, alongside regular pain relief."', why:'AOM with otorrhoea is a recognised indication; rigid refusal is wrong.' },
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
        { t:'2\u20135',  h:'History + exam', d:'Bristol, withholding, hard/large stools, mass, diet; abdomen/perianal.' },
        { t:'5\u20137',  h:'Exclude red flags', d:'From-birth/meconium delay, failure to thrive, distension, neuro/spine \u2192 refer.' },
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
        name: 'Baby Alfie (mother present)', age: '3 months \u00b7 male',
        pmh: ['Regurgitation after feeds + crying/back-arching', 'Thriving (plot weight); systemically well', 'Mother exhausted, sleep-deprived'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"He brings up his milk and screams \u2014 I\u2019m exhausted, please give him something."',
        reason: 'Video consultation \u2014 a 3-month-old regurgitating.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate the parent', d:'Acknowledge exhaustion; she\u2019s not failing; assess and plan together.' },
        { t:'2\u20135',  h:'Feeding + growth', d:'Volume/frequency (over-feeding), winding, technique; plot weight; observe a feed.' },
        { t:'5\u20137',  h:'Exclude red flags', d:'Projectile (pyloric), bile (surgical), faltering growth, blood, eczema/blood stool (CMPA).' },
        { t:'7\u20139',  h:'Conservative first-line', d:'Smaller frequent feeds, winding, upright; avoid reflexive PPI; alginate/CMPA trial if fits.' },
        { t:'9\u201312', h:'Support her + safety-net', d:'Screen maternal mood; health visitor/support; red flags for urgent review.' }
      ],
      wordPics: {
        fail: 'Prescribes a PPI for posseting; dismisses with "it\u2019s just reflux"; no feeding/growth assessment; ignores the mother\u2019s exhaustion/mood.',
        pass: 'Assesses feeding/growth, excludes red flags, gives conservative advice and supports the parent.',
        exc:  'Validates the exhausted mother, assesses feeding and growth, excludes pyloric/CMPA/surgical red flags, gives conservative first-line advice avoiding unnecessary acid suppression, screens maternal mood and signposts support, and safety-nets.'
      },
      avoid: [
        { dont:'"I\u2019ll prescribe a reflux medicine like your friend\u2019s baby had."', instead:'"Acid medicines don\u2019t help simple bringing-up of milk and aren\u2019t recommended \u2014 let\u2019s adjust feeds and posture first."', why:'PPIs/H2 blockers are not indicated for uncomplicated reflux/visible regurgitation.' },
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
        { t:'5\u20137',  h:'Exclude contributors', d:'Constipation (treat), UTI, DIABETES (polyuria/polydipsia/weight loss); urine dip/glucose.' },
        { t:'7\u201310', h:'NICE plan', d:'Basics + treat constipation; enuresis ALARM first-line; desmopressin option; rewards for behaviours.' },
        { t:'10\u201312',h:'Protect + safety-net', d:'Keep dad on side, no blame; realistic timescales; review; watch emotional impact.' }
      ],
      wordPics: {
        fail: 'Accepts "too old/should know better"; blames the child; no constipation/diabetes screen; jumps to desmopressin without basics or alarm; child excluded.',
        pass: 'De-shames, screens contributors, and offers basics + alarm \u00b1 desmopressin engaging the child.',
        exc:  'Lifts the blame for parent and child, takes a primary/secondary history, treats constipation and excludes UTI/diabetes, follows NICE (basics, alarm first-line, desmopressin option, rewards for behaviours), engages Rory as plan owner, and defuses the family conflict.'
      },
      avoid: [
        { dont:'"He really is a bit old for this \u2014 he needs to try harder."', instead:'"Bedwetting at 7 is common and not his fault \u2014 trying harder isn\u2019t the issue, and we can treat it."', why:'Blaming the child is harmful and untrue; de-shaming is the therapeutic core.' },
        { dont:'(Skipping) not checking constipation/diabetes.', instead:'"Let\u2019s treat any constipation and check a urine sample for infection or sugar \u2014 important, quick steps."', why:'Constipation is a common reversible cause and diabetes must not be missed.' },
        { dont:'"Just stop his drinks in the evening and lift him at night."', instead:'"Don\u2019t restrict fluids harshly or lift him \u2014 instead, good daytime drinking, treat constipation, and an alarm."', why:'Fluid restriction and lifting are counterproductive; the alarm is first-line.' }
      ]
    }

  });

})();
