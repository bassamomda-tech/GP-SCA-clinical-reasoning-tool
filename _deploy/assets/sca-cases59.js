/* ============================================================
   Reasoning GP — Case Library batch 59:
   "Eyes & vision" (NEW themes from the Emily Kirby-Blount casebook;
   an under-served area in the bank)
   Sudden painless visual loss (retinal detachment / vascular —
   same-day ophthalmology); acute angle-closure glaucoma (the red,
   painful, vomiting eye — emergency); gradual central vision loss
   (AMD — wet needs urgent referral); and a child's squint + the
   ABSENT RED REFLEX (leukocoria) — NG12 very-urgent retinoblastoma
   pathway. NG12 stated only where genuine (the child); the others
   are ophthalmic emergencies/urgencies, not cancer pathways.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases58.js.
   ============================================================ */

(function(){

  /* ============ 208. PHONE — Sudden painless visual loss: retinal detachment / vascular (same-day) ============ */
  const c208 = {
    id:'sudden-visual-loss', title:'"A curtain came down over half the vision in one eye \u2014 but it doesn\u2019t hurt, so it can probably wait?"', type:'telephone', duration:12,
    meta:{ age:64, sex:'M', setting:'Telephone consultation \u2014 sudden loss of vision in one eye.', system:'Ophthalmology \u2014 sudden painless visual loss: the same-day emergency triage' },
    brief:'Mr Gordon Aitken, 64 (myopic, hypertensive), rings because over the last few hours the vision in his right eye has been progressively obscured \u2014 he describes preceding FLASHES and FLOATERS and now a "CURTAIN/shadow" coming down across part of the field. It is PAINLESS, so he assumes it can wait. The examinable task is recognising SUDDEN PAINLESS VISUAL LOSS as an ophthalmic EMERGENCY needing same-day assessment, and triaging the differential by the story: RETINAL DETACHMENT (flashes/floaters then a curtain/shadow \u2014 his picture, esp. in a myope), RETINAL ARTERY occlusion (sudden, profound, painless \u2014 a "stroke of the eye", screen GCA in older patients and treat as stroke-equivalent), RETINAL VEIN occlusion, VITREOUS haemorrhage (esp. diabetic), and \u2014 if transient \u2014 amaurosis fugax (TIA, urgent). Crucially, recognise that PAINLESS does NOT mean benign, take a focused remote history (onset/speed, monocular, curtain vs central, flashes/floaters, transient vs persistent, GCA symptoms, vascular risk/diabetes/anticoagulants), and arrange SAME-DAY emergency eye-service/ophthalmology assessment (retinal detachment is time-critical for sight), with red-flag safety-netting. Do NOT reassure or defer because it is painless. No NG12 cancer link.',
    script:{
      opening:'"Doctor, the sight in my right eye has gone funny over the last few hours \u2014 there were some flashes and little floaters earlier, and now it\u2019s like a grey curtain coming down over the side of it. The thing is, it doesn\u2019t hurt at all, so I figured it\u2019s probably nothing urgent and I could see how it goes over the weekend?"',
      facts:[
        { topic:'Painless visual loss is an emergency \u2014 the core reframe', text:'CORE \u2014 the dangerous assumption is "it doesn\u2019t hurt so it can wait". SUDDEN PAINLESS visual loss is an ophthalmic EMERGENCY and several causes are sight-threatening and TIME-CRITICAL. The absence of pain is reassuring to the patient but irrelevant to urgency \u2014 do not defer or reassure on that basis.' },
        { topic:'Retinal detachment \u2014 his picture', text:'FLASHES (photopsia) and new FLOATERS followed by a CURTAIN/SHADOW progressing across the visual field is the classic story of RETINAL DETACHMENT, especially in a MYOPE (short-sighted) or after trauma/cataract surgery. It is time-critical \u2014 the chance of saving central vision falls once the macula detaches \u2014 so it needs SAME-DAY assessment by the emergency eye service.' },
        { topic:'Vascular causes \u2014 the "stroke of the eye"', text:'Other sudden painless causes: RETINAL ARTERY occlusion (sudden, profound, painless loss \u2014 a stroke-equivalent; in those \u226550, actively screen GIANT CELL ARTERITIS \u2014 headache, jaw claudication, scalp tenderness, raised ESR/CRP \u2014 as it threatens the other eye and needs urgent steroids); RETINAL VEIN occlusion (variable painless loss, vascular risk factors); and VITREOUS HAEMORRHAGE (sudden floaters/haze, especially in diabetic retinopathy or on anticoagulants).' },
        { topic:'Transient loss = amaurosis / TIA', text:'If the loss was TRANSIENT (a curtain coming down then fully recovering within minutes), that is AMAUROSIS FUGAX \u2014 a transient ischaemic attack of the eye \u2014 needing urgent TIA-pathway assessment (carotids, antiplatelet, vascular risk) even though vision has returned. Establish persistent vs transient.' },
        { topic:'Focused remote history & same-day action', text:'On the phone, take a focused history: speed of onset, monocular vs binocular, the pattern (curtain/shadow vs central blur vs total), flashes/floaters, transient vs persistent, GCA symptoms in the older patient, and vascular risk (hypertension, diabetes, AF, anticoagulants, smoking). You cannot examine the fundus remotely \u2014 so the safe action for sudden persistent visual loss with a detachment story is SAME-DAY referral to the emergency eye service / ophthalmology, not a wait-and-see.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his "it doesn\u2019t hurt so it can wait / see how it goes over the weekend" is reassurance-seeking and minimisation of a sight-threatening emergency. The skill is to recognise the detachment story, firmly but kindly correct the painless=benign misconception, arrange same-day eye assessment, and safety-net \u2014 not to be reassured by the absence of pain.' },
      ],
      ice:{
        ideas:'Painless = not urgent; it can wait over the weekend / "see how it goes".',
        concerns:'(Surface) not wanting to make a fuss; (real, perhaps unspoken) something is wrong with his eye but pain absence is falsely reassuring.',
        expectations:'Reassurance that it can wait. What he needs: recognition of a sight-threatening emergency (retinal-detachment story), correction of the painless=benign belief, and SAME-DAY emergency eye assessment.'
      },
      cues:['Flashes + floaters then a CURTAIN/shadow across one eye, painless, in a myope \u2014 classic retinal detachment; time-critical, same-day eye service.','"It doesn\u2019t hurt so it can wait" \u2014 dangerous: sudden painless visual loss is an emergency; painlessness is irrelevant to urgency.','Screen the differential: retinal artery occlusion (GCA in \u226550), vein occlusion, vitreous haemorrhage (diabetic/anticoagulated), transient = amaurosis/TIA.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises SUDDEN PAINLESS visual loss as an ophthalmic EMERGENCY \u2014 and that painlessness is irrelevant to urgency \u2014 rather than reassuring or deferring' },
      { dom:'tasks', text:'Identifies the RETINAL DETACHMENT story (flashes + new floaters \u2192 curtain/shadow, especially in a myope) as time-critical for central vision' },
      { dom:'tasks', text:'Screens the vascular differential \u2014 retinal artery occlusion (with GIANT CELL ARTERITIS screen in \u226550), retinal vein occlusion, and vitreous haemorrhage (diabetic/anticoagulated)' },
      { dom:'tasks', text:'Establishes transient vs persistent \u2014 recognising transient monocular loss (amaurosis fugax) as a TIA needing urgent TIA-pathway assessment' },
      { dom:'tasks', text:'Takes a focused remote history (onset/speed, monocular, pattern, flashes/floaters, transient/persistent, GCA symptoms, vascular risk) and recognises the fundus cannot be examined remotely \u2014 arranging SAME-DAY emergency eye-service/ophthalmology assessment' },
      { dom:'rto',   text:'Firmly but kindly corrects the "painless so it can wait" misconception without alarming the patient into disengagement, and conveys the urgency clearly' },
      { dom:'rto',   text:'Explains the reasoning and checks understanding, ensuring the patient grasps why same-day assessment matters (sight is time-critical)' },
      { dom:'gs',    text:'Safety-nets and arranges disposition: same-day emergency eye service today, advice not to drive himself if vision impaired, what to do if it worsens, and (for the older patient) GCA red-flag awareness \u2014 emergency assessment, not wait-and-see' },
    ],
    worked:[
      { lbl:'Reframe the "painless" reassurance', txt:'"I\u2019m really glad you rang \u2014 but I have to be straight: the fact it doesn\u2019t hurt doesn\u2019t make it safe to wait. Sudden loss of vision in one eye is an eye emergency, and some causes need treating today to save the sight."' },
      { lbl:'Pin the detachment story', txt:'"The flashes and floaters, then a curtain coming across the side \u2014 that pattern, especially as you\u2019re short-sighted, makes me think the retina at the back of the eye may be detaching. That\u2019s time-critical."' },
      { lbl:'Screen the rest quickly', txt:'"A few quick questions: is it just the one eye? Did the vision come back at all, or has it stayed? Any headache, scalp tenderness or jaw ache when chewing? Are you diabetic or on blood thinners? \u2026 That helps me know which emergency we\u2019re dealing with."' },
      { lbl:'Same-day action', txt:'"This needs to be seen today by the emergency eye service \u2014 not Monday, not the weekend. I\u2019ll arrange that now; I can\u2019t look at the back of your eye over the phone, and they can."' },
      { lbl:'Practical safety', txt:'"Please don\u2019t drive yourself \u2014 get a lift or we\u2019ll sort transport. Take your glasses and a list of your medicines."' },
      { lbl:'Safety-net', txt:'"If it gets dramatically worse, you get severe pain, or \u2014 because of your age \u2014 a new bad headache or jaw pain on chewing, that\u2019s even more urgent, ring 999 or the eye unit. But the plan is: seen today. Okay?"' },
    ],
    learning:'Sudden PAINLESS visual loss is an ophthalmic EMERGENCY, and the dangerous trap is the patient\u2019s assumption that "painless means it can wait" \u2014 the absence of pain is irrelevant to urgency. Triage the differential by the story. RETINAL DETACHMENT classically gives FLASHES (photopsia) and new FLOATERS followed by a CURTAIN/shadow progressing across the field, especially in a myope or after trauma/cataract surgery, and is time-critical because the chance of saving central vision falls once the macula detaches \u2014 so it needs SAME-DAY emergency eye-service assessment. RETINAL ARTERY occlusion causes sudden, profound, painless loss (a "stroke of the eye") and in those \u226550 mandates an active GIANT CELL ARTERITIS screen (headache, jaw claudication, scalp tenderness, raised ESR/CRP) because it threatens the other eye and needs urgent steroids; RETINAL VEIN occlusion and VITREOUS HAEMORRHAGE (especially in diabetic retinopathy or on anticoagulants) are other painless causes. TRANSIENT monocular loss that fully recovers is AMAUROSIS FUGAX \u2014 a TIA of the eye \u2014 needing urgent TIA-pathway assessment even after recovery. On the phone, take a focused history (onset/speed, monocular vs binocular, curtain vs central, flashes/floaters, transient vs persistent, GCA symptoms, vascular risk) and recognise that the fundus cannot be examined remotely, so sudden persistent visual loss with a detachment story warrants same-day emergency ophthalmology, never wait-and-see. Correct the painless=benign misconception firmly but kindly, arrange same-day assessment, advise against self-driving, and safety-net (including GCA red flags in the older patient). No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Sudden visual loss triage \u00b7 retinal detachment / artery & vein occlusion \u00b7 GCA screen \u00b7 amaurosis fugax / TIA (no NG12 link)',
      points:[
        { h:'Painless \u2260 benign', t:'Sudden painless visual loss is an ophthalmic emergency; painlessness is irrelevant to urgency. Do not defer or reassure on that basis.' },
        { h:'Retinal detachment', t:'Flashes + new floaters \u2192 curtain/shadow across the field, especially in myopes/post-cataract/trauma. Time-critical (macula) \u2014 same-day emergency eye service.' },
        { h:'Vascular causes', t:'Retinal artery occlusion (sudden profound loss, screen GCA if \u226550 \u2014 urgent steroids), retinal vein occlusion (vascular risk), vitreous haemorrhage (diabetic/anticoagulated).' },
        { h:'Transient = amaurosis/TIA', t:'Transient monocular loss fully recovering is amaurosis fugax \u2014 a TIA of the eye \u2014 needing urgent TIA-pathway assessment (carotids, antiplatelet, vascular risk).' },
        { h:'Focused remote history', t:'Onset/speed, monocular vs binocular, curtain vs central, flashes/floaters, transient vs persistent, GCA symptoms, vascular risk (HTN, diabetes, AF, anticoagulants, smoking).' },
        { h:'Same-day action', t:'Cannot examine the fundus remotely; sudden persistent loss with a detachment story \u2192 same-day emergency eye-service/ophthalmology assessment, not wait-and-see.' },
        { h:'Never do', t:'Never reassure because it is painless; never defer sudden persistent visual loss; never miss GCA in the older patient; never treat a recovered transient episode as benign.' },
        { h:'Safety-net & follow-up', t:'Same-day eye assessment; don\u2019t self-drive if vision impaired; GCA red flags; worsening/severe pain \u2192 999/eye unit; confirm attendance.' }
      ]
    }
  };

  /* ============ 209. F2F — Acute angle-closure glaucoma: the red, painful, vomiting eye ============ */
  const c209 = {
    id:'acute-glaucoma', title:'"My eye\u2019s gone red and agony, I\u2019m seeing haloes round lights and now I feel sick"', type:'video', duration:12,
    meta:{ age:62, sex:'F', setting:'Video consultation \u2014 acutely painful red eye with visual symptoms.', system:'Ophthalmology \u2014 acute angle-closure glaucoma: the sight-threatening red eye' },
    brief:'Mrs Pauline Voss, 62 (long-sighted/hypermetropic), presents with a few hours of severe PAIN in one red eye, BLURRED vision with HALOES around lights, a HEADACHE, and now NAUSEA/VOMITING; the eye is red with a hazy cornea and a mid-dilated, poorly reactive pupil. The examinable task is to recognise ACUTE ANGLE-CLOSURE GLAUCOMA \u2014 a sight-threatening OPHTHALMIC EMERGENCY \u2014 from this cluster (severe pain, red eye, haloes, blurred vision, headache, nausea/vomiting, fixed mid-dilated oval pupil, hazy cornea, hard eye), distinguish it from the other causes of a red eye (conjunctivitis, anterior uveitis, scleritis, keratitis \u2014 and the systemic-sounding headache/vomiting that can mislead toward a GI or migraine label), identify RISK factors (hypermetropia, older age, female, dim light/pupil dilation, certain drugs \u2014 anticholinergics, sympathomimetics), and arrange EMERGENCY same-day ophthalmology referral (it threatens sight within hours; treatment lowers intraocular pressure). The skill is pattern-recognition of a true emergency that can masquerade as a headache/vomiting bug, and immediate escalation. No NG12 cancer link.',
    script:{
      opening:'"Doctor, my right eye is killing me \u2014 it came on a few hours ago, it\u2019s gone really red, my vision\u2019s blurry and there are these rainbow haloes round the lights. I\u2019ve got a thumping headache and now I feel sick, I\u2019ve actually been sick once. I wondered if it\u2019s a migraine or a bug, but the eye pain is unbearable."',
      facts:[
        { topic:'Recognise the emergency cluster', text:'CORE \u2014 the combination of a severely PAINFUL RED eye + BLURRED vision + HALOES around lights + HEADACHE + NAUSEA/VOMITING, with a fixed MID-DILATED (often oval) pupil, a HAZY/cloudy cornea and a hard eye, is ACUTE ANGLE-CLOSURE GLAUCOMA \u2014 a sight-threatening ophthalmic EMERGENCY caused by a sudden rise in intraocular pressure. It must be recognised on sight as an emergency, not worked up at leisure.' },
        { topic:'Don\u2019t be misled by the headache/vomiting', text:'KEY PITFALL \u2014 the headache and vomiting can misdirect toward a MIGRAINE, a viral illness or a GI bug, and the eye complaint may be downplayed. The discriminator is the painful red eye with haloes and visual blurring \u2014 always ask about and examine the eye in someone with headache/vomiting and unilateral eye pain. Missing this loses the eye.' },
        { topic:'Differentiate the red eye', text:'Distinguish from other red eyes: CONJUNCTIVITIS (gritty, discharge, vision normal, no severe pain), ANTERIOR UVEITIS (pain, photophobia, small/irregular pupil, often associated systemic disease), SCLERITIS (severe boring pain, associated autoimmune disease), KERATITIS/corneal ulcer (pain, photophobia, contact lenses, fluorescein uptake). Acute glaucoma is distinguished by the mid-dilated fixed pupil, hazy cornea, haloes, hard eye and systemic nausea/headache.' },
        { topic:'Risk factors & precipitants', text:'Risk factors: HYPERMETROPIA (long-sighted), older age, female sex, Asian/Inuit ethnicity, family history, shallow anterior chamber. Precipitants: dim light / pupil DILATION (e.g. cinema, stress), and DRUGS that dilate the pupil \u2014 anticholinergics, tricyclics, some antihistamines, sympathomimetics, and mydriatic drops. A relevant drug history matters.' },
        { topic:'Emergency action', text:'Arrange EMERGENCY same-day ophthalmology assessment immediately \u2014 acute angle-closure glaucoma threatens sight within hours and needs urgent IOP-lowering treatment (the specialist will use agents such as topical/systemic pressure-lowering drugs and definitive laser iridotomy). In primary care the action is rapid recognition and immediate referral/transfer to eye casualty, with analgesia/antiemetic as needed while arranging it.' },
        { topic:'The communication', text:'COMMUNICATION \u2014 the patient is in severe pain and frightened, and may have self-labelled it a migraine/bug. Explain clearly and calmly that this is a serious eye emergency needing immediate specialist care, why it cannot wait, and arrange transfer \u2014 balancing urgency with reassurance that prompt treatment protects the sight.' },
      ],
      ice:{
        ideas:'It might be a migraine or a sickness bug (because of the headache and vomiting).',
        concerns:'Severe unbearable eye pain and feeling unwell; frightened by the visual change/haloes.',
        expectations:'Pain relief / something for the migraine or bug. What she needs: recognition of acute angle-closure glaucoma and EMERGENCY same-day ophthalmology referral, not a migraine/antiemetic label.'
      },
      cues:['Painful red eye + haloes + blurred vision + headache + nausea/vomiting + mid-dilated fixed pupil + hazy cornea \u2014 acute angle-closure glaucoma (emergency).','Headache/vomiting can mislead to migraine/GI bug \u2014 the painful red eye with haloes is the discriminator; always examine the eye.','Hypermetropic older woman, dim-light/drug precipitants \u2014 risk factors; arrange EMERGENCY same-day ophthalmology, sight-threatening within hours.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises ACUTE ANGLE-CLOSURE GLAUCOMA from the cluster (severe painful red eye, haloes, blurred vision, headache, nausea/vomiting, mid-dilated fixed/oval pupil, hazy cornea, hard eye) as a sight-threatening EMERGENCY' },
      { dom:'tasks', text:'Avoids the pitfall of labelling the headache/vomiting as migraine or a GI bug \u2014 using the painful red eye with haloes as the discriminator and examining the eye' },
      { dom:'tasks', text:'Differentiates from other red eyes (conjunctivitis, anterior uveitis, scleritis, keratitis) by the distinguishing features' },
      { dom:'tasks', text:'Identifies RISK factors/precipitants (hypermetropia, older age, female, dim light/pupil dilation, anticholinergic/sympathomimetic drugs) including a relevant drug history' },
      { dom:'tasks', text:'Arranges EMERGENCY same-day ophthalmology assessment immediately (sight-threatening within hours; needs urgent IOP-lowering and definitive treatment), with analgesia/antiemetic while transferring' },
      { dom:'rto',   text:'Communicates calmly with a frightened patient in severe pain \u2014 explaining this is a serious eye emergency needing immediate specialist care and why it cannot wait' },
      { dom:'rto',   text:'Balances urgency with reassurance (prompt treatment protects sight) and checks understanding of the plan' },
      { dom:'gs',    text:'Safety-nets and arranges disposition: immediate transfer to eye casualty/ophthalmology, symptom relief meanwhile, advice not to drive, and clear escalation \u2014 emergency recognition and referral, not a migraine/antiemetic label' },
    ],
    worked:[
      { lbl:'Recognise + reframe', txt:'"I can see you\u2019re in real pain, and I\u2019m glad you came. This isn\u2019t a migraine or a bug \u2014 the red painful eye, the haloes round lights and the sickness together point to a serious rise in pressure inside the eye, called acute glaucoma. It\u2019s an emergency."' },
      { lbl:'Confirm the picture', txt:'"Your eye looks red, the cornea\u2019s a bit hazy and the pupil\u2019s mid-sized and not reacting normally \u2014 that fits. Are you long-sighted, and are you on any tablets like older antidepressants or strong antihistamines? \u2026 That can set it off."' },
      { lbl:'Explain why it can\u2019t wait', txt:'"The pressure in the eye is high, and if it isn\u2019t brought down quickly it can damage the sight \u2014 within hours, not days. So this needs the eye specialists today, right now, not a wait-and-see."' },
      { lbl:'Act', txt:'"I\u2019m arranging for you to be seen at the emergency eye unit immediately \u2014 I\u2019ll call ahead so they\u2019re expecting you. Let\u2019s also get something for the pain and the sickness while we sort transport."' },
      { lbl:'Practical safety', txt:'"Don\u2019t drive yourself \u2014 we\u2019ll arrange how you get there. Take your glasses and your medicines list."' },
      { lbl:'Reassure + safety-net', txt:'"The good news is that treated quickly, the pressure can be brought down and the sight protected. If you become much worse on the way, go straight to A&E. But the plan is: eye unit, now."' },
    ],
    learning:'ACUTE ANGLE-CLOSURE GLAUCOMA is a sight-threatening ophthalmic EMERGENCY recognised by a cluster: a severely PAINFUL RED eye with BLURRED vision and HALOES around lights, plus HEADACHE and NAUSEA/VOMITING, and on examination a fixed MID-DILATED (often oval) pupil, a HAZY/cloudy cornea and a hard eye, from a sudden rise in intraocular pressure. The key pitfall is being misled by the headache and vomiting toward a MIGRAINE, viral illness or GI bug while the eye complaint is downplayed \u2014 the discriminator is the painful red eye with haloes and blurring, so always ask about and examine the eye in anyone with headache/vomiting and unilateral eye pain. Distinguish it from other red eyes: conjunctivitis (gritty, discharge, normal vision), anterior uveitis (pain, photophobia, small/irregular pupil), scleritis (severe boring pain, autoimmune association) and keratitis (contact-lens-related, fluorescein uptake). Risk factors include HYPERMETROPIA (long-sightedness), older age, female sex, certain ethnicities, family history and a shallow anterior chamber, with precipitants of dim light/pupil dilation and pupil-dilating DRUGS (anticholinergics, tricyclics, some antihistamines, sympathomimetics, mydriatics) \u2014 so take a drug history. The action is EMERGENCY same-day ophthalmology assessment immediately, because sight is threatened within hours and urgent IOP-lowering and definitive laser iridotomy are needed; in primary care, recognise rapidly, refer/transfer to eye casualty, and give analgesia/antiemetic while arranging it. Communicate calmly with a frightened, severely-painful patient, explain why it cannot wait, advise against self-driving, and reassure that prompt treatment protects sight. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Acute angle-closure glaucoma \u00b7 the red eye differential \u00b7 ophthalmic emergency referral (no NG12 link)',
      points:[
        { h:'Recognise the cluster', t:'Painful red eye + haloes + blurred vision + headache + nausea/vomiting + mid-dilated fixed/oval pupil + hazy cornea + hard eye = acute angle-closure glaucoma. Sight-threatening emergency.' },
        { h:'Don\u2019t mislabel', t:'Headache/vomiting can mimic migraine or a GI bug. Always examine the eye in unilateral eye pain with headache/vomiting; the painful red eye with haloes is the discriminator.' },
        { h:'Red eye differential', t:'Conjunctivitis (gritty, discharge, vision normal), anterior uveitis (photophobia, small/irregular pupil), scleritis (boring pain, autoimmune), keratitis (contact lenses, fluorescein uptake).' },
        { h:'Risk & precipitants', t:'Hypermetropia, older age, female, certain ethnicities, family history, shallow anterior chamber; dim light/pupil dilation; anticholinergic/tricyclic/antihistamine/sympathomimetic/mydriatic drugs.' },
        { h:'Emergency action', t:'Immediate same-day ophthalmology/eye-casualty referral; threatens sight within hours; needs urgent IOP-lowering and definitive laser iridotomy. Analgesia/antiemetic while transferring.' },
        { h:'Communication', t:'Explain calmly that it is a serious eye emergency needing immediate specialist care and why it cannot wait; reassure that prompt treatment protects sight; advise against self-driving.' },
        { h:'Never do', t:'Never label as migraine/GI bug and treat symptomatically; never delay referral; never miss the drug precipitants; never send home to "see how it goes".' },
        { h:'Safety-net & follow-up', t:'Immediate transfer to eye casualty (call ahead); symptom relief meanwhile; don\u2019t self-drive; worsening \u2192 A&E; confirm attendance.' }
      ]
    }
  };

  /* ============ 210. F2F — Gradual central vision loss: age-related macular degeneration ============ */
  const c210 = {
    id:'amd-vision-loss', title:'"Straight lines look wavy and there\u2019s a blur in the middle of my sight \u2014 it\u2019s just old age, isn\u2019t it?"', type:'video', duration:12,
    meta:{ age:78, sex:'F', setting:'Video consultation \u2014 gradual central visual disturbance in an older adult.', system:'Ophthalmology \u2014 age-related macular degeneration: dry vs wet, and the urgent referral' },
    brief:'Mrs Edna Whitlock, 78 (smoker, family history of "going blind in old age"), describes a gradually worsening BLUR in the CENTRAL vision of one eye, with straight lines appearing WAVY/distorted (metamorphopsia) and difficulty reading/recognising faces; peripheral vision is preserved. The examinable task is to recognise AGE-RELATED MACULAR DEGENERATION (AMD) \u2014 central vision loss, metamorphopsia, in an older adult \u2014 and crucially distinguish DRY AMD (gradual, no specific treatment, supportive/visual aids and risk-factor modification) from WET (neovascular) AMD, which can cause RAPID, recent distortion/loss and is a time-sensitive URGENT referral (within days) to macular/ophthalmology services for anti-VEGF treatment that can preserve sight. Take the history (speed of onset \u2014 recent rapid distortion suggests wet AMD; Amsler-grid distortion), address modifiable risk (SMOKING cessation, diet, cardiovascular risk), arrange the appropriate referral (urgent if wet-AMD features), and \u2014 the communication \u2014 counter the "it\u2019s just old age, nothing can be done" fatalism (wet AMD is treatable; aids and support help dry AMD) while taking the functional/emotional impact and falls/independence implications seriously. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ve noticed over the last few weeks that the middle of my sight in my left eye has gone blurry, and \u2014 this is odd \u2014 straight lines like the door frame and the lines on my crossword look wavy and bent. I can still see round the edges. I assume it\u2019s just old age and there\u2019s nothing to be done, but my daughter nagged me to get it checked."',
      facts:[
        { topic:'Recognise AMD \u2014 central loss + distortion', text:'CORE \u2014 gradual loss of CENTRAL vision with METAMORPHOPSIA (straight lines appearing wavy/distorted) and difficulty reading/recognising faces, with PRESERVED peripheral vision, in an older adult is the hallmark of AGE-RELATED MACULAR DEGENERATION (AMD). Recognise the pattern rather than accept "just old age".' },
        { topic:'Dry vs wet \u2014 the critical distinction', text:'KEY \u2014 distinguish DRY AMD (gradual, slowly progressive over months/years; no specific medical cure \u2014 managed with visual aids, support, and risk-factor modification) from WET (neovascular) AMD, which causes RAPID, recent onset of distortion/central loss and is a TIME-SENSITIVE emergency-ish referral \u2014 anti-VEGF injections can preserve/restore sight if treated promptly. RECENT, rapidly progressive distortion = treat as possible wet AMD and refer URGENTLY (within days).' },
        { topic:'Targeted history & Amsler grid', text:'Establish the SPEED of onset (days/weeks of new distortion points to wet AMD; slow blur over months suggests dry), which eye(s), the functional impact (reading, faces, driving), and use/ask about the AMSLER GRID (central distortion/scotoma). Examine acuity. Smoking and family history raise risk.' },
        { topic:'Modifiable risk & general care', text:'Address modifiable factors: SMOKING cessation (the major modifiable risk for AMD), a healthy diet (leafy greens/antioxidants), cardiovascular risk, and \u2014 in established intermediate dry AMD \u2014 specific AREDS-type supplements may be advised by specialists. Optimise other eye health (cataract, refraction) and arrange low-vision support/aids for irreversible loss.' },
        { topic:'Refer appropriately', text:'Refer to ophthalmology/macular services: URGENTLY (within days) if features suggest WET AMD (recent rapid distortion/central loss), as prompt anti-VEGF is sight-saving; routinely for slowly progressive dry AMD for confirmation, support and monitoring. Give clear Amsler-grid safety-netting to detect conversion to wet AMD.' },
        { topic:'Counter fatalism + the human impact', text:'COMMUNICATION \u2014 counter the "it\u2019s just old age, nothing can be done" belief: WET AMD is treatable and prompt referral matters, and even for dry AMD, visual aids, support and risk modification genuinely help. Take the FUNCTIONAL and EMOTIONAL impact seriously \u2014 loss of reading, independence, driving (DVLA implications) and falls/social isolation risk \u2014 and involve support services. The daughter\u2019s prompt was right.' },
      ],
      ice:{
        ideas:'It\u2019s "just old age" and nothing can be done.',
        concerns:'(Often unspoken) fear of going blind / losing independence; family history of blindness; impact on reading and daily life.',
        expectations:'To be told it\u2019s age and untreatable. What she needs: recognition of AMD, the dry-vs-wet distinction with URGENT referral if wet, risk modification, support, and the fatalism countered.'
      },
      cues:['Gradual CENTRAL blur + wavy/distorted straight lines (metamorphopsia) + preserved peripheral vision in an older adult \u2014 AMD.','Recent RAPID distortion = possible WET AMD \u2014 urgent (days) referral for anti-VEGF, which is sight-saving; slow = dry AMD.','"Just old age, nothing to be done" \u2014 counter the fatalism: wet AMD is treatable, aids help dry AMD; smoking cessation is the key modifiable risk.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises AGE-RELATED MACULAR DEGENERATION from central vision loss + METAMORPHOPSIA (wavy/distorted lines) with preserved peripheral vision in an older adult \u2014 not accepting "just old age"' },
      { dom:'tasks', text:'Makes the critical DRY vs WET distinction \u2014 recognising recent, rapidly progressive distortion/central loss as possible WET AMD needing URGENT (within days) referral for sight-saving anti-VEGF' },
      { dom:'tasks', text:'Takes a targeted history (speed of onset, which eye, functional impact, Amsler-grid distortion) and assesses acuity/risk (smoking, family history)' },
      { dom:'tasks', text:'Addresses modifiable risk \u2014 SMOKING cessation (major modifiable factor), diet/cardiovascular risk, AREDS-type supplements where specialist-advised \u2014 and optimises other eye health (cataract/refraction)' },
      { dom:'tasks', text:'Refers appropriately \u2014 urgently if wet-AMD features, routinely for slow dry AMD \u2014 and gives Amsler-grid safety-netting to detect conversion to wet AMD' },
      { dom:'rto',   text:'Counters the "just old age, nothing can be done" fatalism honestly \u2014 wet AMD is treatable, aids/support help dry AMD \u2014 without overpromising' },
      { dom:'rto',   text:'Takes the FUNCTIONAL/EMOTIONAL impact seriously (reading, faces, independence, driving/DVLA, falls/isolation, fear of blindness), validates the daughter\u2019s prompt, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: appropriate-urgency referral, Amsler-grid monitoring and what change warrants urgent review, smoking-cessation and low-vision support, DVLA/driving advice, and review \u2014 active management, not fatalistic dismissal' },
    ],
    worked:[
      { lbl:'Name it, not "old age"', txt:'"Your daughter was right to send you. The blur in the centre with straight lines looking wavy is a specific condition \u2014 age-related macular degeneration \u2014 not just \u2018getting old\u2019, and crucially what we do next depends on which type it is."' },
      { lbl:'Pin dry vs wet', txt:'"How quickly did the wavy distortion come on \u2014 over a few weeks, or has it changed fast in the last days? \u2026 That matters a lot: a sudden, recent change can mean the treatable \u2018wet\u2019 type, where prompt injections can save sight. A slow blur is usually the \u2018dry\u2019 type."' },
      { lbl:'Refer with the right urgency', txt:'"Because your distortion is fairly recent, I\u2019m referring you urgently to the eye/macular clinic \u2014 within days \u2014 so they can check for the treatable type. If it\u2019s the slower dry type, they\u2019ll confirm it and set up support."' },
      { lbl:'What helps', txt:'"There\u2019s genuinely a lot we can do: if it\u2019s wet, injections; either way, stopping smoking is the single biggest thing for your eyes, a good diet helps, and there are magnifiers and low-vision aids that make a real difference to reading."' },
      { lbl:'Take the impact seriously', txt:'"This affects reading, recognising faces, maybe driving \u2014 that\u2019s a big deal, not trivial. We\u2019ll sort support, and I\u2019ll be honest about driving and the DVLA. How are you feeling about it all?"' },
      { lbl:'Amsler safety-net', txt:'"I\u2019ll give you an Amsler grid \u2014 a little square of lines to check each eye daily. If the lines suddenly look more wavy or a dark patch appears, that\u2019s a sign to be seen urgently. And we\u2019ll review you after the clinic."' },
    ],
    learning:'Gradual loss of CENTRAL vision with METAMORPHOPSIA (straight lines appearing wavy/distorted) and difficulty reading/recognising faces, with PRESERVED peripheral vision, in an older adult is the hallmark of AGE-RELATED MACULAR DEGENERATION (AMD) \u2014 recognise the pattern rather than accept "just old age". The critical distinction is DRY AMD (gradual over months/years; no specific cure \u2014 managed with visual aids, support, AREDS-type supplements where specialist-advised, and risk modification) versus WET (neovascular) AMD, which causes RAPID, recent distortion/central loss and is a TIME-SENSITIVE URGENT referral (within days) because prompt anti-VEGF injections can preserve or restore sight \u2014 so recent, rapidly progressive distortion must be treated as possible wet AMD and referred urgently. Take a targeted history (speed of onset, which eye, functional impact, Amsler-grid distortion), assess acuity, and address modifiable risk \u2014 SMOKING cessation is the major modifiable factor, alongside diet and cardiovascular risk \u2014 optimising other eye health. Refer urgently for wet-AMD features and routinely for slow dry AMD, with Amsler-grid safety-netting to detect conversion to wet AMD. Crucially, counter the "it\u2019s just old age, nothing can be done" fatalism: wet AMD is treatable and even dry AMD benefits from aids, support and risk modification; and take the functional and emotional impact seriously \u2014 loss of reading, faces, independence and driving (DVLA implications), with falls and isolation risk \u2014 involving low-vision support. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Age-related macular degeneration (NICE NG82) \u00b7 dry vs wet AMD \u00b7 anti-VEGF urgency \u00b7 Amsler grid & smoking cessation (no NG12 link)',
      points:[
        { h:'Recognise AMD', t:'Gradual central vision loss + metamorphopsia (wavy/distorted lines) + preserved peripheral vision in an older adult. Don\u2019t accept "just old age".' },
        { h:'Dry vs wet', t:'Dry: gradual, no specific cure, aids/support/risk modification. Wet (neovascular): rapid recent distortion/loss, urgent (days) referral \u2014 anti-VEGF is sight-saving.' },
        { h:'Targeted history', t:'Speed of onset (recent rapid = wet), which eye, functional impact (reading/faces/driving), Amsler-grid distortion; assess acuity; smoking and family history raise risk.' },
        { h:'Modifiable risk', t:'Smoking cessation is the key modifiable factor; healthy diet/antioxidants, cardiovascular risk; AREDS-type supplements in intermediate dry AMD per specialist; optimise cataract/refraction.' },
        { h:'Refer appropriately', t:'Urgent (days) referral if wet-AMD features for anti-VEGF; routine for slow dry AMD for confirmation/support/monitoring. Amsler-grid safety-netting for conversion.' },
        { h:'Counter fatalism', t:'Wet AMD is treatable; aids/support help dry AMD. Don\u2019t accept "nothing can be done", but don\u2019t overpromise either.' },
        { h:'Human impact', t:'Take reading/faces/independence/driving (DVLA), falls and isolation seriously; involve low-vision support; validate fear of blindness.' },
        { h:'Never do', t:'Never dismiss as "just old age"; never miss recent distortion (possible treatable wet AMD); never omit smoking cessation; never ignore the functional/emotional impact or driving implications.' }
      ]
    }
  };

  /* ============ 211. F2F — A child's squint and the absent red reflex: leukocoria (NG12 retinoblastoma) ============ */
  const c211 = {
    id:'childhood-squint-leukocoria', title:'"Her eye turns in sometimes \u2014 and in photos one eye looks white, not red. People say she\u2019ll grow out of it"', type:'video', duration:12,
    meta:{ age:2, sex:'F', setting:'Video consultation \u2014 a toddler\u2019s squint, mother present.', system:'Paediatric ophthalmology \u2014 childhood squint & the white reflex (NG12 retinoblastoma)' },
    brief:'Aria Mensah, 2, brought by her mother because one eye intermittently TURNS IN (squint) and \u2014 the crucial detail \u2014 in recent flash PHOTOGRAPHS one eye shows a WHITE reflex (leukocoria) rather than the normal red-eye. Relatives say "she\u2019ll grow out of it". The examinable task is twofold: (1) assess CHILDHOOD SQUINT (strabismus) appropriately \u2014 a constant or persistent squint beyond ~3 months, or any concern, needs orthoptic/ophthalmology referral, because untreated squint risks AMBLYOPIA ("lazy eye") and permanent vision loss if not treated early, so "they\u2019ll grow out of it" is not a safe default for a persistent/abnormal squint; and (2) \u2014 critically \u2014 recognise the ABSENT/abnormal RED REFLEX / WHITE reflex (LEUKOCORIA) as a RED FLAG for RETINOBLASTOMA (and other serious pathology e.g. cataract), mandating the NICE NG12 pathway: an absent red reflex in a child is a VERY URGENT referral (NG12: refer children with an absent red reflex urgently/very urgently for assessment for retinoblastoma). The skill is examining the red reflex, taking the white-reflex-in-photos history seriously, NOT reassuring with "they\u2019ll grow out of it", and making the urgent referral \u2014 while supporting an anxious parent. NG12 paediatric: retinoblastoma.',
    script:{
      opening:'(Mother) "Aria\u2019s right eye turns inwards sometimes, especially when she\u2019s tired. My mum says all babies do it and she\u2019ll grow out of it. But the thing that\u2019s actually been bothering me \u2014 in a few flash photos lately, that same eye looks white in the middle, not red like the other one. Is that anything, or am I being daft?"',
      facts:[
        { topic:'The white reflex is the red flag \u2014 do not dismiss', text:'CRITICAL \u2014 a WHITE reflex (LEUKOCORIA) in a child\u2019s eye, including one seen in flash PHOTOGRAPHS, or an ABSENT/abnormal RED REFLEX on examination, is a serious RED FLAG \u2014 it can indicate RETINOBLASTOMA (a malignant eye tumour of early childhood), as well as congenital cataract or other pathology. A parent reporting "one eye looks white in photos" must be taken extremely seriously, never dismissed as "grow out of it".' },
        { topic:'NG12: absent red reflex \u2192 very urgent referral', text:'NICE NG12 (children & young people): a child with an ABSENT RED REFLEX should be referred URGENTLY (very urgently) for assessment for RETINOBLASTOMA. Examine the red reflex (ophthalmoscope, both eyes, compare) \u2014 an absent, white or asymmetric reflex, or a parental report of leukocoria, mandates this urgent referral. Early detection is sight- and life-saving.' },
        { topic:'Assess the squint properly', text:'For the SQUINT (strabismus): intermittent squint in the first ~3 months can be normal, but a CONSTANT squint, any squint persisting beyond ~3 months, a squint with reduced vision, or any parental/clinical concern needs ORTHOPTIC/ophthalmology referral. Untreated squint risks AMBLYOPIA ("lazy eye") \u2014 the brain suppresses the squinting eye \u2014 causing permanent vision loss if not treated early (patching/glasses/surgery). So "they\u2019ll grow out of it" is not a safe blanket reassurance.' },
        { topic:'Examine and corroborate', text:'Examine: the red reflex in both eyes (the priority here), the corneal light reflex and cover test for the squint, visual behaviour/fixation, and ask to SEE the photographs the mother describes (they often demonstrate the leukocoria). Document findings. Even if the in-clinic reflex looks equivocal, a credible parental report of a white reflex warrants referral.' },
        { topic:'Refer and act', text:'Make the urgent referral: a very urgent (NG12) referral for suspected retinoblastoma given the white-reflex history/absent red reflex, AND an orthoptic/paediatric ophthalmology referral for the squint/amblyopia risk (the urgent pathway will encompass the eye assessment). Do not delay or "watch and wait" given the leukocoria.' },
        { topic:'Support the parent', text:'COMMUNICATION \u2014 validate the mother\u2019s instinct (she was right to mention the photos), explain honestly why an urgent eye assessment is needed without inducing panic, acknowledge that most squints are benign but the white reflex specifically needs prompt checking, and support her through an anxious referral. Avoid both false reassurance ("she\u2019ll grow out of it") and catastrophic language.' },
      ],
      ice:{
        ideas:'(Family) babies\u2019 eyes turn in and she\u2019ll grow out of it; the mother fears the white-in-photos is "something" but worries she\u2019s being daft.',
        concerns:'(Mother) the white reflex in photos; fear of being dismissed or overreacting.',
        expectations:'Reassurance, or to know if the white reflex matters. What is needed: the leukocoria recognised as a red flag, the red reflex examined, NG12 very-urgent referral for retinoblastoma, squint/amblyopia referral, and the parent supported \u2014 not "grow out of it".'
      },
      cues:['WHITE reflex (leukocoria) in flash photos / absent red reflex in a child \u2014 red flag for retinoblastoma; NG12 very-urgent referral.','Persistent/constant squint beyond ~3 months risks AMBLYOPIA \u2014 needs orthoptic/ophthalmology referral; "grow out of it" is not a safe default.','Take the mother\u2019s photo observation seriously, examine the red reflex, ask to see the photos \u2014 don\u2019t dismiss or watch-and-wait.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the WHITE reflex (LEUKOCORIA) in photos / an absent or abnormal RED REFLEX as a serious RED FLAG for RETINOBLASTOMA (and cataract/other pathology) \u2014 taking the parental report extremely seriously, never "grow out of it"' },
      { dom:'tasks', text:'Applies NICE NG12: an absent red reflex / suspected retinoblastoma in a child warrants a VERY URGENT referral for assessment \u2014 and makes that referral' },
      { dom:'tasks', text:'EXAMINES the red reflex in both eyes (priority), plus corneal light reflex/cover test for the squint and visual fixation, and asks to SEE the photographs' },
      { dom:'tasks', text:'Assesses the SQUINT appropriately \u2014 recognising that a constant squint, one persisting beyond ~3 months, or one with reduced vision risks AMBLYOPIA and needs orthoptic/ophthalmology referral, so "grow out of it" is not a safe blanket reassurance' },
      { dom:'tasks', text:'Refers and acts without delay \u2014 very urgent NG12 referral for the leukocoria/retinoblastoma plus orthoptic/paediatric ophthalmology for the squint/amblyopia \u2014 not watch-and-wait' },
      { dom:'rto',   text:'Validates the mother\u2019s instinct (right to mention the photos), explains honestly why urgent assessment is needed WITHOUT inducing panic, and avoids both false reassurance and catastrophic language' },
      { dom:'rto',   text:'Supports an anxious parent through the urgent referral, acknowledges most squints are benign while the white reflex specifically needs prompt checking, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: the urgent referral made today, what to do meanwhile, the squint/amblyopia pathway, confirmation of attendance, and parental support \u2014 NG12 very-urgent action for leukocoria, not dismissal' },
    ],
    worked:[
      { lbl:'Take the photos seriously', txt:'"You are absolutely not being daft \u2014 you\u2019ve spotted something really important. A white look in one eye in flash photos is exactly the kind of thing we want to know about, and I\u2019m glad you mentioned it. Could I see those photos?"' },
      { lbl:'Examine the red reflex', txt:'"Let me check what we call the \u2018red reflex\u2019 in both her eyes \u2014 the red glow you normally get. \u2026 I want to compare them carefully, because if one looks white or absent, that needs an urgent specialist look."' },
      { lbl:'Explain honestly, no panic', txt:'"Most of the time a turning eye is harmless and treatable. But a white reflex specifically can be a sign of a problem at the back of the eye that we never sit on \u2014 occasionally it can be something serious, so the safe thing is a quick urgent assessment by the eye specialists."' },
      { lbl:'Make the urgent referral', txt:'"I\u2019m going to refer Aria urgently to be seen very soon \u2014 this is the right, careful thing to do, not an overreaction. They\u2019ll examine the back of the eye properly."' },
      { lbl:'Don\u2019t forget the squint', txt:'"Separately, the turning-in eye also needs the orthoptic/eye team, because if a squint sticks around it can make that eye lazy, and treating it early protects her vision. The urgent referral will cover her eyes fully."' },
      { lbl:'Support + safety-net', txt:'"I know this is frightening \u2014 it\u2019s a precaution because you were observant. I\u2019ll make sure the appointment comes through quickly and follow it up. If you notice the white reflex more, or any change in her eye, tell us. You did exactly the right thing."' },
    ],
    learning:'In a young child, a WHITE reflex (LEUKOCORIA) \u2014 including one a parent notices in flash PHOTOGRAPHS \u2014 or an ABSENT/abnormal RED REFLEX on examination is a serious RED FLAG that can indicate RETINOBLASTOMA (a malignant eye tumour of early childhood), as well as congenital cataract or other pathology, and must never be dismissed as "she\u2019ll grow out of it". NICE NG12 (children & young people) directs that a child with an absent red reflex be referred VERY URGENTLY for assessment for retinoblastoma, so examine the red reflex in both eyes (compare for an absent, white or asymmetric reflex), ask to see the photographs the parent describes, and make that urgent referral \u2014 a credible parental report of leukocoria warrants referral even if the in-clinic reflex looks equivocal. Separately, assess the SQUINT (strabismus): intermittent squint in the first ~3 months can be normal, but a constant squint, one persisting beyond ~3 months, a squint with reduced vision, or any concern needs orthoptic/ophthalmology referral, because untreated squint risks AMBLYOPIA ("lazy eye") and permanent vision loss if not treated early \u2014 so "they\u2019ll grow out of it" is not a safe blanket reassurance. Refer and act without delay (very urgent NG12 referral for the leukocoria/retinoblastoma plus orthoptic/paediatric ophthalmology for the squint), and communicate by validating the parent\u2019s instinct, explaining honestly why urgent assessment is needed without inducing panic, acknowledging that most squints are benign while the white reflex specifically needs prompt checking, and supporting an anxious parent \u2014 avoiding both false reassurance and catastrophic language.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer \u2014 children (retinoblastoma / absent red reflex) \u00b7 childhood squint & amblyopia',
      points:[
        { h:'Leukocoria is a red flag', t:'A white reflex (in photos or on exam) or an absent/abnormal red reflex in a child can indicate retinoblastoma (or cataract/other pathology). Take parental report seriously \u2014 never "grow out of it".' },
        { h:'NG12 very-urgent referral', t:'NICE NG12: a child with an absent red reflex should be referred urgently/very urgently for assessment for retinoblastoma. Early detection is sight- and life-saving.' },
        { h:'Examine the red reflex', t:'Check the red reflex in both eyes and compare; do corneal light reflex/cover test for the squint and assess fixation; ask to see the parent\u2019s photographs.' },
        { h:'Assess the squint', t:'Intermittent squint <3 months can be normal; constant squint, persistence beyond ~3 months, reduced vision or any concern \u2192 orthoptic/ophthalmology referral. Untreated squint risks amblyopia and permanent vision loss.' },
        { h:'Refer without delay', t:'Very urgent NG12 referral for the leukocoria/retinoblastoma plus orthoptic/paediatric ophthalmology for the squint/amblyopia. No watch-and-wait given the white reflex.' },
        { h:'Support the parent', t:'Validate the instinct, explain honestly without panic, acknowledge most squints are benign while the white reflex specifically needs prompt checking, and support through the urgent referral.' },
        { h:'Never do', t:'Never dismiss leukocoria/absent red reflex as "grow out of it"; never watch-and-wait; never fail to examine the red reflex; never ignore amblyopia risk in a persistent squint; never catastrophise unnecessarily.' },
        { h:'Safety-net & follow-up', t:'Urgent referral made today; confirm attendance; squint/amblyopia pathway; advise return for more white reflex/eye change; parental support throughout.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c208, c209, c210, c211);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'sudden-visual-loss': {
      ceg: ['Urgent & unscheduled care', 'Older adults'],
      stem: {
        name: 'Gordon Aitken', age: '64 years \u00b7 male',
        pmh: ['\u26a0 Few hours: flashes + floaters \u2192 "curtain/shadow" across R eye vision; PAINLESS', 'Myopic; hypertensive', 'Assumes painless = can wait'],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '"A curtain came down over half my vision \u2014 but it doesn\u2019t hurt, so it can wait?"',
        reason: 'Telephone \u2014 sudden loss of vision in one eye.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe painless', d:'Sudden painless visual loss is an emergency; painlessness is irrelevant to urgency.' },
        { t:'2\u20134',  h:'Detachment story', d:'Flashes + floaters \u2192 curtain in a myope = retinal detachment; time-critical for the macula.' },
        { t:'4\u20136',  h:'Screen differential', d:'Artery occlusion (GCA if \u226550), vein occlusion, vitreous haemorrhage; transient = amaurosis/TIA.' },
        { t:'6\u20139',  h:'Same-day action', d:'Can\u2019t examine fundus remotely \u2192 same-day emergency eye service today, not the weekend.' },
        { t:'9\u201312', h:'Safety-net', d:'Don\u2019t self-drive; GCA red flags; worsening \u2192 999/eye unit; confirm attendance.' }
      ],
      wordPics: {
        fail: 'Reassures because it is painless / advises waiting over the weekend; misses the detachment emergency; no GCA screen.',
        pass: 'Recognises sudden visual loss as an emergency, identifies the detachment story, and arranges same-day eye assessment.',
        exc:  'Firmly reframes painless\u2260benign, recognises the retinal-detachment story, screens the vascular/GCA/amaurosis differential, arranges same-day emergency eye-service assessment, and safety-nets (no self-driving, GCA flags).'
      },
      avoid: [
        { dont:'"If it\u2019s not painful, keep an eye on it and see how it is on Monday."', instead:'"Painless or not, sudden loss of vision is an eye emergency \u2014 you need the emergency eye service today."', why:'Deferring sudden painless visual loss risks irreversible sight loss (e.g. macula-off detachment).' },
        { dont:'(No differential) treating it as one diagnosis.', instead:'"Did the vision come back or stay gone? Any headache or jaw ache on chewing?"', why:'Missing amaurosis/TIA or GCA omits limb/life- and other-eye-threatening pathology.' },
        { dont:'(No transport advice) telling him to drive in.', instead:'"Don\u2019t drive yourself \u2014 get a lift or we\u2019ll arrange transport."', why:'Driving with sudden monocular visual loss is unsafe.' }
      ]
    },

    'acute-glaucoma': {
      ceg: ['Urgent & unscheduled care', 'Older adults'],
      stem: {
        name: 'Pauline Voss', age: '62 years \u00b7 female',
        pmh: ['\u26a0 Hours: severe painful red R eye + haloes + blurred vision + headache + nausea/vomiting', 'Mid-dilated poorly reactive pupil, hazy cornea, hard eye', 'Hypermetropic; self-labels "migraine/bug"'],
        meds: ['Amitriptyline (for sleep)'],
        allergy: 'NKDA',
        recent: '"Red eye, agony, haloes round lights and now I feel sick \u2014 is it a migraine or a bug?"',
        reason: 'Video \u2014 acutely painful red eye with visual symptoms.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise emergency', d:'Painful red eye + haloes + headache + vomiting + mid-dilated pupil = acute angle-closure glaucoma.' },
        { t:'2\u20134',  h:'Don\u2019t mislabel', d:'Headache/vomiting mimics migraine/GI bug \u2014 the painful red eye with haloes is the discriminator.' },
        { t:'4\u20136',  h:'Differentiate + risk', d:'Vs conjunctivitis/uveitis/scleritis/keratitis; hypermetropia, dim light, anticholinergic (amitriptyline).' },
        { t:'6\u20139',  h:'Emergency referral', d:'Immediate same-day ophthalmology/eye casualty; sight-threatening within hours; analgesia/antiemetic.' },
        { t:'9\u201312', h:'Communicate + safety-net', d:'Calm explanation; don\u2019t self-drive; call ahead; worsening \u2192 A&E.' }
      ],
      wordPics: {
        fail: 'Treats it as migraine/GI bug and gives an antiemetic/analgesia to go home; misses the sight-threatening emergency.',
        pass: 'Recognises acute angle-closure glaucoma and arranges emergency same-day ophthalmology.',
        exc:  'Recognises the glaucoma cluster, avoids the migraine/bug mislabel, differentiates the red eye, notes risk/drug precipitants, and arranges immediate emergency ophthalmology with symptom relief and clear, calm communication.'
      },
      avoid: [
        { dont:'"Sounds like a migraine with an upset stomach \u2014 here\u2019s an antiemetic, rest in a dark room."', instead:'"The painful red eye with haloes and sickness is acute glaucoma \u2014 a sight emergency; you need the eye unit now."', why:'Mislabelling as migraine/GI bug delays sight-saving treatment.' },
        { dont:'(Routine referral) "I\u2019ll refer you to eye clinic in a few days."', instead:'"This is same-day \u2014 I\u2019m sending you to emergency eye casualty right now and calling ahead."', why:'Acute angle-closure threatens sight within hours; routine referral is unsafe.' },
        { dont:'(Ignoring drugs) not asking about medication.', instead:'"Are you on anything like amitriptyline or strong antihistamines? They can trigger this."', why:'Anticholinergic/pupil-dilating drugs are precipitants and relevant to management.' }
      ]
    },

    'amd-vision-loss': {
      ceg: ['Older adults', 'Long-term conditions & cancer'],
      stem: {
        name: 'Edna Whitlock', age: '78 years \u00b7 female',
        pmh: ['Weeks: central blur L eye + straight lines look WAVY (metamorphopsia); peripheral vision preserved', 'Smoker; family history of "going blind in old age"', 'Believes "just old age, nothing to be done"'],
        meds: ['Amlodipine', 'Atorvastatin'],
        allergy: 'NKDA',
        recent: '"Straight lines look wavy and there\u2019s a blur in the middle \u2014 it\u2019s just old age, isn\u2019t it?"',
        reason: 'Video \u2014 gradual central visual disturbance.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Name AMD, not "old age"', d:'Central blur + wavy lines + preserved periphery = AMD; what we do depends on type.' },
        { t:'2\u20135',  h:'Dry vs wet', d:'Recent rapid distortion = possible WET AMD \u2192 urgent (days) referral for sight-saving anti-VEGF.' },
        { t:'5\u20137',  h:'History + risk', d:'Speed of onset, Amsler distortion, acuity; smoking cessation (key), diet, CV risk.' },
        { t:'7\u20139',  h:'Refer + aids', d:'Urgent if wet features; low-vision aids; AREDS per specialist; optimise cataract/refraction.' },
        { t:'9\u201312', h:'Impact + Amsler safety-net', d:'Reading/faces/driving (DVLA)/falls; counter fatalism; Amsler grid \u2192 urgent if worse.' }
      ],
      wordPics: {
        fail: 'Accepts "just old age, nothing can be done"; misses recent distortion (treatable wet AMD); no smoking-cessation or support.',
        pass: 'Recognises AMD, distinguishes dry vs wet with urgent referral if wet, and addresses smoking/support.',
        exc:  'Recognises AMD and the metamorphopsia, makes the dry-vs-wet distinction with urgent referral for wet features, addresses smoking cessation/diet, arranges low-vision support and Amsler safety-netting, counters fatalism, and takes the functional/driving impact seriously.'
      },
      avoid: [
        { dont:'"It\u2019s just age-related and there\u2019s nothing that can be done, I\u2019m afraid."', instead:'"If it\u2019s the \u2018wet\u2019 type, prompt injections can save sight \u2014 and even the dry type, aids and stopping smoking help; let\u2019s get you seen."', why:'Fatalism misses treatable wet AMD and abandons supportive options.' },
        { dont:'(No urgency triage) routine optometry referral for recent distortion.', instead:'"Because the distortion is recent, I\u2019m referring you urgently \u2014 within days \u2014 to check for the treatable type."', why:'Recent rapid distortion may be wet AMD, where anti-VEGF is time-sensitive.' },
        { dont:'(Ignoring smoking) not mentioning it.', instead:'"Stopping smoking is the single biggest thing you can do for your eyes \u2014 let\u2019s support that."', why:'Smoking is the major modifiable AMD risk factor.' }
      ]
    },

    'childhood-squint-leukocoria': {
      ceg: ['Children & young people', 'Long-term conditions & cancer'],
      stem: {
        name: 'Aria Mensah (mother present)', age: '2 years \u00b7 female',
        pmh: ['Intermittent R esotropia (eye turns in), worse when tired', '\u26a0 WHITE reflex (leukocoria) in recent flash photos of the same eye', 'Relatives say "she\u2019ll grow out of it"'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Her eye turns in sometimes \u2014 and one eye looks white in photos. Am I being daft?"',
        reason: 'Video \u2014 toddler\u2019s squint + white reflex in photos.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take the photos seriously', d:'White reflex in photos = important; validate the mother; ask to see the photos.' },
        { t:'2\u20134',  h:'Examine red reflex', d:'Compare both eyes; absent/white/asymmetric reflex \u2192 red flag for retinoblastoma/cataract.' },
        { t:'4\u20136',  h:'NG12 very-urgent', d:'Absent red reflex / leukocoria \u2192 NICE NG12 very-urgent referral for retinoblastoma.' },
        { t:'6\u20139',  h:'Assess the squint', d:'Constant/persistent >3 months risks amblyopia \u2192 orthoptic/ophthalmology; not "grow out of it".' },
        { t:'9\u201312', h:'Support + safety-net', d:'Honest, no panic; refer today; confirm attendance; return for more white reflex/eye change.' }
      ],
      wordPics: {
        fail: 'Reassures "she\u2019ll grow out of it", dismisses the photo white reflex, doesn\u2019t examine the red reflex or refer \u2014 risks missing retinoblastoma.',
        pass: 'Examines the red reflex, recognises leukocoria as a red flag, and makes the NG12 urgent referral plus squint referral.',
        exc:  'Takes the parental photo report seriously, examines and compares the red reflex, recognises leukocoria/absent red reflex as an NG12 very-urgent retinoblastoma flag and refers, assesses the squint/amblyopia risk with orthoptic referral, and supports an anxious parent honestly without panic.'
      },
      avoid: [
        { dont:'"Squints are normal in toddlers \u2014 she\u2019ll grow out of it, don\u2019t worry about the photos."', instead:'"A white look in one eye in photos is a red flag I take seriously \u2014 let me check the red reflex and refer urgently."', why:'Dismissing leukocoria risks missing retinoblastoma, a treatable childhood eye cancer.' },
        { dont:'(No red-reflex exam) reassuring without examining.', instead:'"Let me compare the red reflex in both eyes now \u2014 that\u2019s the key check."', why:'The red reflex is the essential examination and the NG12 trigger.' },
        { dont:'(Ignoring the squint) only addressing the reflex.', instead:'"Separately, the turning eye needs the orthoptic team \u2014 a persistent squint can cause a lazy eye if untreated."', why:'Untreated persistent squint risks amblyopia and permanent vision loss.' }
      ]
    }

  });

})();
