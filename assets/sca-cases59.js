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
    meta:{ age:64, sex:'M', setting:'Telephone consultation \u2014 sudden loss of vision in one eye.', system:'Ophthalmology \u2014 sudden painless visual loss: the same-day emergency triage', checked:'October 2026' },
    brief:'Mr Gordon Aitken, 64 (myopic, hypertensive), rings because over the last few hours the vision in his right eye has been progressively obscured \u2014 he describes preceding FLASHES and FLOATERS and now a "CURTAIN/shadow" coming down across part of the field. It is PAINLESS, so he assumes it can wait. The examinable task is recognising SUDDEN PAINLESS VISUAL LOSS as an ophthalmic EMERGENCY needing same-day assessment, and triaging the differential by the story: RETINAL DETACHMENT (flashes/floaters then a curtain/shadow \u2014 his picture, esp. in a myope), RETINAL ARTERY occlusion (sudden, profound, painless — a "stroke of the eye", screen GCA in older patients and treat as stroke-equivalent — AHA scientific statement 2021, international), RETINAL VEIN occlusion, VITREOUS haemorrhage (esp. diabetic), and — if transient — amaurosis fugax (a TIA: NICE NG128 — aspirin 300 mg immediately unless contraindicated, and specialist assessment within 24 hours of symptom onset). Crucially, recognise that PAINLESS does NOT mean benign, take a focused remote history (onset/speed, monocular, curtain vs central, flashes/floaters, transient vs persistent, GCA symptoms, vascular risk/diabetes/anticoagulants), and arrange SAME-DAY emergency eye-service/ophthalmology assessment (College of Optometrists guidance on flashes and floaters: a curtain or field loss needs same-day eye-service assessment, as detachment spreading to the macula threatens central vision), with red-flag safety-netting (GCA symptoms → immediate glucocorticoid and same-day ophthalmology review, BSR 2020) and driving advice (no driving; DVLA Group 1 visual standard applies afterwards). Do NOT reassure or defer because it is painless.',
    script:{
      opening:"(On the phone, calm, polite, not wanting to bother anyone.) \"Doctor, the sight in my right eye has gone funny over the last few hours — there were some flashes and little floaters earlier, and now it's like a grey curtain coming down over the side of it. The thing is, it doesn't hurt at all, so I figured it's probably nothing urgent and I could see how it goes over the weekend?\"",
      facts:[
        { topic:"Timeline", text:"Flashes (like a camera flash at the edge of vision) and a shower of new black floaters started this morning, about 6 hours ago. The grey curtain began 2 hours ago." },
        { topic:"Now", text:"\"Yes, it's still there. The side of it is grey, like a shadow\" — coming from the outer (temple) side and top. \"I think it's creeping in a bit. The middle is still okay\" — can read the clock with that eye. \"It hasn't come back. It's been slowly coming across.\" Left eye normal." },
        { topic:"Other symptoms", text:"\"No, nothing like that\" — no pain, no headache, no scalp tenderness, no jaw pain on chewing, no weakness, numbness or speech problems, no double vision." },
        { topic:"Eye history", text:"\"No. I've just always been short-sighted\" — strong glasses since childhood. No eye surgery, no injury. Last optician check 2 years ago." },
        { topic:"Medicines and health", text:"\"Only what's on my list for blood pressure, I'd need to check the names. Nobody's mentioned diabetes.\" (Amlodipine.) Not on blood thinners. No allergies." },
        { topic:"Practical", text:"Retired electrician, lives with his wife, Moira, who doesn't drive. His son lives 15 minutes away and could give a lift. Was planning to drive to his allotment." },
        { topic:"How to play it", text:"Calm, polite, minimising because it doesn't hurt: \"I didn't want to make a fuss when it doesn't hurt.\" If asked what he thinks: \"Tired eyes, maybe.\" Then: \"Well, you don't expect a curtain in your eye, do you.\" Surprised by urgency: \"Today? Okay.\" and \"Even without pain?\" Agrees to go and to get a lift. If told it can wait, he will happily wait (the trap)." }
      ],
      ice:{
        ideas:"\"Tired eyes, maybe — it doesn't hurt, so it can't be serious.\"",
        concerns:"Doesn't want to make a fuss; quietly uneasy — \"you don't expect a curtain in your eye\".",
        expectations:"\"To be told it can wait until after the weekend.\""
      },
      cues:[
        "\"It doesn't hurt at all.\" — painless is not reassuring.",
        "\"Like a grey curtain.\" — retinal detachment story.",
        "\"I could see how it goes over the weekend.\" — needs firm, kind correction."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises SUDDEN PAINLESS visual loss as an ophthalmic EMERGENCY \u2014 and that painlessness is irrelevant to urgency \u2014 rather than reassuring or deferring' },
      { dom:'dg', text:'Identifies the RETINAL DETACHMENT story (flashes + new floaters \u2192 curtain/shadow, especially in a myope) as time-critical for central vision' },
      { dom:'dg', text:'Screens the vascular differential \u2014 retinal artery occlusion (with GIANT CELL ARTERITIS screen in \u226550), retinal vein occlusion, and vitreous haemorrhage (diabetic/anticoagulated)' },
      { dom:'dg', text:'Establishes transient vs persistent \u2014 recognising transient monocular loss (amaurosis fugax) as a TIA needing urgent TIA-pathway assessment (NICE NG128: aspirin 300 mg immediately unless contraindicated; specialist assessment within 24 hours)' },
      { dom:'dg', text:'Takes a focused remote history (onset/speed, monocular, pattern, flashes/floaters, transient/persistent, GCA symptoms, vascular risk) and recognises the fundus cannot be examined remotely \u2014 arranging SAME-DAY emergency eye-service/ophthalmology assessment' },
      { dom:'ro',   text:'Firmly but kindly corrects the "painless so it can wait" misconception without alarming the patient into disengagement, and conveys the urgency clearly' },
      { dom:'ro',   text:'Explains the reasoning and checks understanding, ensuring the patient grasps why same-day assessment matters (sight is time-critical)' },
      { dom:'cm',    text:'Safety-nets and arranges disposition: same-day emergency eye service today, advice not to drive himself (and that the DVLA Group 1 visual standard — number plate at 20 metres, 6/12 with both eyes open, field standard — applies after diagnosis), what to do if it worsens, and (for the older patient) GCA red flags needing immediate same-day steroid and eye review (BSR 2020) \u2014 emergency assessment, not wait-and-see' },
    ],
    worked:[
      { lbl:'Reframe the "painless" reassurance', txt:'"I\u2019m really glad you rang \u2014 but I have to be straight: the fact it doesn\u2019t hurt doesn\u2019t make it safe to wait. Sudden loss of vision in one eye is an eye emergency, and some causes need treating today to save the sight."' },
      { lbl:'Pin the detachment story', txt:'"The flashes and floaters, then a curtain coming across the side \u2014 that pattern, especially as you\u2019re short-sighted, makes me think the retina at the back of the eye may be detaching. That\u2019s time-critical."' },
      { lbl:'Screen the rest quickly', txt:'"A few quick questions: is it just the one eye? Did the vision come back at all, or has it stayed? Any headache, scalp tenderness or jaw ache when chewing? Are you diabetic or on blood thinners? \u2026 That helps me know which emergency we\u2019re dealing with."' },
      { lbl:'Same-day action', txt:'"This needs to be seen today by the emergency eye service \u2014 not Monday, not the weekend. I\u2019ll arrange that now; I can\u2019t look at the back of your eye over the phone, and they can."' },
      { lbl:'Practical safety', txt:'"Please don’t drive yourself — get a lift or we’ll sort transport. The eye team will tell you when it’s safe to drive again; there’s a legal eyesight standard for driving. Take your glasses and a list of your medicines."' },
      { lbl:'Safety-net', txt:'"If it gets dramatically worse or you get severe pain, contact the eye unit straight away. Because of your age, a new bad headache, a tender scalp or jaw pain on chewing would need steroids and an eye check the same day, so ring us or the eye unit immediately. Weakness, a drooping face or trouble speaking — that’s 999. But the plan is: seen today. Okay?"' },
    ],
    learning:'Sudden PAINLESS visual loss is an ophthalmic EMERGENCY, and the dangerous trap is the patient\u2019s assumption that "painless means it can wait" \u2014 the absence of pain is irrelevant to urgency. Triage the differential by the story. RETINAL DETACHMENT classically gives FLASHES (photopsia) and new FLOATERS followed by a CURTAIN/shadow progressing across the field, especially in a myope or after trauma/cataract surgery, and is time-critical because the chance of saving central vision falls once the macula detaches \u2014 so it needs SAME-DAY emergency eye-service assessment. RETINAL ARTERY occlusion causes sudden, profound, painless loss (a "stroke of the eye") and in those ≥50 mandates an active GIANT CELL ARTERITIS screen (headache, jaw claudication, scalp tenderness, raised ESR/CRP) because it threatens the other eye — suspected GCA with visual loss needs immediate glucocorticoid and same-day ophthalmology review (BSR, Mackie et al 2020); RETINAL VEIN occlusion and VITREOUS HAEMORRHAGE (especially in diabetic retinopathy or on anticoagulants) are other painless causes. TRANSIENT monocular loss that fully recovers is AMAUROSIS FUGAX — a TIA of the eye — needing urgent TIA-pathway assessment even after recovery (NICE NG128: aspirin 300 mg immediately unless contraindicated, specialist assessment within 24 hours). On the phone, take a focused history (onset/speed, monocular vs binocular, curtain vs central, flashes/floaters, transient vs persistent, GCA symptoms, vascular risk) and recognise that the fundus cannot be examined remotely, so sudden persistent visual loss with a detachment story warrants same-day emergency ophthalmology, never wait-and-see. Correct the painless=benign misconception firmly but kindly, arrange same-day assessment (College of Optometrists guidance), advise against self-driving (DVLA Group 1 visual standard applies after diagnosis), and safety-net (including GCA red flags in the older patient).',
    knowledge:{
      guideline:'[1] College of Optometrists Guidance for Professional Practice: flashes and floaters · [2] NICE NG128 Stroke and transient ischaemic attack in over 16s (2019, updated 2022) · [3] BSR guideline for the management of giant cell arteritis (Mackie et al., Rheumatology 2020) · [4] Hollands et al., JAMA 2009;302:2243–9 · [5] DVLA Assessing fitness to drive: visual disorders · [6] American Heart Association scientific statement on central retinal artery occlusion (Stroke 2021, international) · sudden visual loss triage · retinal detachment / artery and vein occlusion · GCA screen · amaurosis fugax / TIA',
      points:[
        { h:'Painless \u2260 benign', t:'Sudden painless visual loss is an ophthalmic emergency; painlessness is irrelevant to urgency. Do not defer or reassure on that basis.' },
        { h:'Retinal detachment', t:'Flashes + new floaters \u2192 curtain/shadow across the field, especially in myopes/post-cataract/trauma. Time-critical (macula) \u2014 same-day emergency eye service.' },
        { h:'Vascular causes', t:'Retinal artery occlusion (sudden profound loss, stroke equivalent — AHA 2021, international; screen GCA if ≥50 — immediate steroid and same-day eye review, BSR 2020), retinal vein occlusion (vascular risk), vitreous haemorrhage (diabetic/anticoagulated).' },
        { h:'Transient = amaurosis/TIA', t:'Transient monocular loss fully recovering is amaurosis fugax \u2014 a TIA of the eye \u2014 needing urgent TIA-pathway assessment (NICE NG128: aspirin 300 mg immediately unless contraindicated; specialist assessment within 24 hours; then carotids and vascular risk).' },
        { h:'Focused remote history', t:'Onset/speed, monocular vs binocular, curtain vs central, flashes/floaters, transient vs persistent, GCA symptoms, vascular risk (HTN, diabetes, AF, anticoagulants, smoking).' },
        { h:'Same-day action', t:'Cannot examine the fundus remotely; sudden persistent loss with a detachment story → same-day emergency eye-service/ophthalmology assessment (College of Optometrists), not wait-and-see.' },
        { h:'Never do', t:'Never reassure because it is painless; never defer sudden persistent visual loss; never miss GCA in the older patient; never treat a recovered transient episode as benign.' },
        { h:'Safety-net & follow-up', t:'Same-day eye assessment; don’t self-drive (DVLA Group 1: number plate at 20 m, 6/12 both eyes, field standard); GCA red flags → same-day steroid and eye review; worsening/severe pain \u2192 999/eye unit; confirm attendance.' }
      ]
    }
  };

  /* ============ 209. F2F — Acute angle-closure glaucoma: the red, painful, vomiting eye ============ */
  const c209 = {
    id:'acute-glaucoma', title:'"My eye\u2019s gone red and agony, I\u2019m seeing haloes round lights and now I feel sick"', type:'video', duration:12,
    meta:{ age:62, sex:'F', setting:'Video consultation \u2014 acutely painful red eye with visual symptoms.', system:'Ophthalmology \u2014 acute angle-closure glaucoma: the sight-threatening red eye', checked:'October 2026' },
    brief:'Mrs Pauline Voss, 62 (long-sighted/hypermetropic), presents with a few hours of severe PAIN in one red eye, BLURRED vision with HALOES around lights, a HEADACHE, and now NAUSEA/VOMITING; on the video the eye looks red and the pupil may look larger than the other, but corneal haze, pupil reactions and the eye’s hardness cannot be confirmed remotely. The examinable task is to recognise ACUTE ANGLE-CLOSURE GLAUCOMA \u2014 a sight-threatening OPHTHALMIC EMERGENCY \u2014 from this cluster (severe pain, red eye, haloes, blurred vision, headache, nausea/vomiting, fixed mid-dilated oval pupil, hazy cornea, hard eye), distinguish it from the other causes of a red eye (conjunctivitis, anterior uveitis, scleritis, keratitis \u2014 and the systemic-sounding headache/vomiting that can mislead toward a GI or migraine label), identify RISK factors (hypermetropia, older age, female, East or South Asian family origin, dim light/pupil dilation, certain drugs — anticholinergics, sympathomimetics, some antidepressants and antihistamines, and topiramate), and arrange EMERGENCY same-day ophthalmology referral with a phone handover (College of Optometrists Clinical Management Guidelines: a same-day emergency; RCOphth Management of angle-closure glaucoma, 2022: pressure lowered medically, then laser peripheral iridotomy). The skill is pattern-recognition of a true emergency that can masquerade as a headache/vomiting bug, and immediate escalation.',
    script:{
      opening:"(Distressed, holding a cold flannel to her right eye, sounds nauseous.) \"Doctor, my right eye is killing me — it came on a few hours ago, it's gone really red, my vision's blurry and there are these rainbow haloes round the lights. I've got a thumping headache and now I feel sick, I've actually been sick once. I wondered if it's a migraine or a bug, but the eye pain is unbearable.\"",
      facts:[
        { topic:"Onset", text:"Started about 4 hours ago, in the evening after watching TV with the lights low. Came on over half an hour." },
        { topic:"Vision", text:"\"Just the right. It's all misty with that eye.\" Rainbow haloes round lights. Left eye normal." },
        { topic:"On camera", text:"If asked to bring the eye close to the camera: \"Like this?\" — right eye very red around the coloured part; the right pupil looks bigger than the left. Too painful to keep it open long. Light makes it worse." },
        { topic:"Pain", text:"\"A deep ache. No discharge.\" Pain 9/10 around and behind the right eye and across the forehead. Vomited once." },
        { topic:"History and medicines", text:"\"I'm long-sighted, yes. Nothing new that I can think of, I'd have to look at my tablets.\" If she checks: started amitriptyline 10 mg at night 2 weeks ago for sleep and back pain. Also amlodipine. No allergies. No previous eye attacks." },
        { topic:"Other questions", text:"\"No\" — no injury, no contact lenses, no recent eye surgery, no weakness or numbness, no neck stiffness or rash, never had migraines." },
        { topic:"Practical", text:"Lives with her husband, who doesn't drive at night. Daughter lives 10 minutes away. Eye unit is at the hospital 8 miles away." },
        { topic:"How to play it", text:"In pain, frightened, wants relief: \"I was hoping for something to stop it.\" If asked what worries her: \"The pain, and my sight. I've never had haloes before.\" When told it's serious: \"Is it serious?\" then \"Okay. What do I do?\" If offered anti-sickness tablets or migraine treatment, she accepts gratefully (the trap)." }
      ],
      ice:{
        ideas:"\"A migraine or a sickness bug.\"",
        concerns:"Unbearable pain; frightened by the haloes and the misty vision.",
        expectations:"\"Something to stop it.\""
      },
      cues:[
        "\"Rainbow haloes round the lights.\" — a key discriminator.",
        "\"I've been sick.\" — can mislead towards a bug.",
        "\"I'd have to look at my tablets.\" — a new medicine may be the trigger."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises ACUTE ANGLE-CLOSURE GLAUCOMA from the cluster (severe painful red eye, haloes, blurred vision, headache, nausea/vomiting, mid-dilated fixed/oval pupil, hazy cornea, hard eye — the signs confirmed in person, not on video) as a sight-threatening EMERGENCY' },
      { dom:'dg', text:'Avoids the pitfall of labelling the headache/vomiting as migraine or a GI bug \u2014 using the painful red eye with haloes as the discriminator and looking at the eye on video without delaying transfer for examination' },
      { dom:'dg', text:'Differentiates from other red eyes (conjunctivitis, anterior uveitis, scleritis, keratitis) by the distinguishing features' },
      { dom:'dg', text:'Identifies RISK factors/precipitants (hypermetropia, older age, female, East or South Asian family origin, dim light/pupil dilation, anticholinergic/sympathomimetic drugs, topiramate) including a relevant drug history' },
      { dom:'cm', text:'Arranges EMERGENCY same-day ophthalmology assessment immediately (sight-threatening within hours; needs urgent IOP-lowering and definitive treatment), with analgesia/antiemetic while transferring' },
      { dom:'ro',   text:'Communicates calmly with a frightened patient in severe pain \u2014 explaining this is a serious eye emergency needing immediate specialist care and why it cannot wait' },
      { dom:'ro',   text:'Balances urgency with reassurance (prompt treatment protects sight) and checks understanding of the plan' },
      { dom:'cm',    text:'Safety-nets and arranges disposition: immediate transfer to eye casualty/ophthalmology, symptom relief meanwhile, advice not to drive, and clear escalation \u2014 emergency recognition and referral, not a migraine/antiemetic label' },
    ],
    worked:[
      { lbl:'Recognise + reframe', txt:'"I can see you\u2019re in real pain, and I\u2019m glad you came. This isn\u2019t a migraine or a bug \u2014 the red painful eye, the haloes round lights and the sickness together point to a serious rise in pressure inside the eye, called acute glaucoma. It\u2019s an emergency."' },
      { lbl:'Confirm the picture', txt:'"On the screen your eye looks red, and the pupil may look bigger than the other one — I can’t check the pressure or how the pupil reacts over video, but with what you’re describing, that fits. Are you long-sighted, and are you on any tablets like older antidepressants, strong antihistamines or topiramate? … That can set it off."' },
      { lbl:'Explain why it can\u2019t wait', txt:'"The pressure in the eye is high, and if it isn\u2019t brought down quickly it can damage the sight \u2014 within hours, not days. So this needs the eye specialists today, right now, not a wait-and-see."' },
      { lbl:'Act', txt:'"I\u2019m arranging for you to be seen at the emergency eye unit immediately \u2014 I\u2019ll call ahead so they\u2019re expecting you. Let\u2019s also get something for the pain and the sickness while we sort transport."' },
      { lbl:'Practical safety', txt:'"Don\u2019t drive yourself \u2014 we\u2019ll arrange how you get there. Take your glasses and your medicines list."' },
      { lbl:'Reassure + safety-net', txt:'"The good news is that treated quickly, the pressure can be brought down and the sight protected. If you become much worse on the way, go straight to A&E. But the plan is: eye unit, now."' },
    ],
    learning:'ACUTE ANGLE-CLOSURE GLAUCOMA is a sight-threatening ophthalmic EMERGENCY recognised by a cluster: a severely PAINFUL RED eye with BLURRED vision and HALOES around lights, plus HEADACHE and NAUSEA/VOMITING, and on face-to-face examination (a video call cannot confirm them) a fixed MID-DILATED (often oval) pupil, a HAZY/cloudy cornea and a hard eye, from a sudden rise in intraocular pressure. The key pitfall is being misled by the headache and vomiting toward a MIGRAINE, viral illness or GI bug while the eye complaint is downplayed \u2014 the discriminator is the painful red eye with haloes and blurring, so always ask about and examine the eye in anyone with headache/vomiting and unilateral eye pain. Distinguish it from other red eyes: conjunctivitis (gritty, discharge, normal vision), anterior uveitis (pain, photophobia, small/irregular pupil), scleritis (severe boring pain, autoimmune association) and keratitis (contact-lens-related, fluorescein uptake). Risk factors include HYPERMETROPIA (long-sightedness), older age, female sex, East or South Asian family origin (College of Optometrists), family history and a shallow anterior chamber, with precipitants of dim light/pupil dilation and pupil-dilating DRUGS (anticholinergics, tricyclics, some antihistamines, sympathomimetics, mydriatics, and topiramate, which can cause secondary angle closure within the first month) — so take a drug history. The action is EMERGENCY same-day ophthalmology assessment immediately, because sight is threatened within hours and urgent IOP-lowering and definitive laser peripheral iridotomy are needed (College of Optometrists Clinical Management Guidelines; RCOphth 2022); in primary care, recognise rapidly, refer/transfer to eye casualty, and give analgesia/antiemetic while arranging it. Communicate calmly with a frightened, severely-painful patient, explain why it cannot wait, advise against self-driving, and reassure that prompt treatment protects sight.',
    knowledge:{
      guideline:'[1] RCOphth Management of angle-closure glaucoma (2022) · [2] College of Optometrists Clinical Management Guidelines: primary angle closure · [3] Khurana AK et al., J Curr Glaucoma Pract 2012;6(1):6–8 (drug-induced angle closure) · [4] Topiramate SPC, section 4.4 · [5] BNF (cautions for antimuscarinic and sympathomimetic drugs) · the red eye differential · ophthalmic emergency referral',
      points:[
        { h:'Recognise the cluster', t:'Painful red eye + haloes + blurred vision + headache + nausea/vomiting + mid-dilated fixed/oval pupil + hazy cornea + hard eye (signs confirmed in person, not on video) = acute angle-closure glaucoma. Sight-threatening emergency (College of Optometrists: same day).' },
        { h:'Don\u2019t mislabel', t:'Headache/vomiting can mimic migraine or a GI bug. Always examine the eye in unilateral eye pain with headache/vomiting; the painful red eye with haloes is the discriminator.' },
        { h:'Red eye differential', t:'Conjunctivitis (gritty, discharge, vision normal), anterior uveitis (photophobia, small/irregular pupil), scleritis (boring pain, autoimmune), keratitis (contact lenses, fluorescein uptake).' },
        { h:'Risk & precipitants', t:'Hypermetropia, older age, female, East or South Asian family origin, family history, shallow anterior chamber; dim light/pupil dilation; anticholinergic/tricyclic/antihistamine/sympathomimetic/mydriatic drugs; topiramate (SPC 4.4).' },
        { h:'Emergency action', t:'Immediate same-day ophthalmology/eye-casualty referral; threatens sight within hours; needs urgent IOP-lowering and definitive laser peripheral iridotomy (RCOphth 2022). Analgesia/antiemetic while transferring.' },
        { h:'Communication', t:'Explain calmly that it is a serious eye emergency needing immediate specialist care and why it cannot wait; reassure that prompt treatment protects sight; advise against self-driving.' },
        { h:'Never do', t:'Never label as migraine/GI bug and treat symptomatically; never delay referral; never miss the drug precipitants; never send home to "see how it goes".' },
        { h:'Safety-net & follow-up', t:'Immediate transfer to eye casualty (call ahead); symptom relief meanwhile; don\u2019t self-drive; worsening \u2192 A&E; confirm attendance.' }
      ]
    }
  };

  /* ============ 210. F2F — Gradual central vision loss: age-related macular degeneration ============ */
  const c210 = {
    id:'amd-vision-loss', title:'"Straight lines look wavy and there\u2019s a blur in the middle of my sight \u2014 it\u2019s just old age, isn\u2019t it?"', type:'video', duration:12,
    meta:{ age:78, sex:'F', setting:'Video consultation \u2014 gradual central visual disturbance in an older adult.', system:'Ophthalmology \u2014 age-related macular degeneration: dry vs wet, and the urgent referral', checked:'October 2026' },
    brief:'Mrs Edna Whitlock, 78 (smoker, family history of "going blind in old age"), describes a gradually worsening BLUR in the CENTRAL vision of one eye, with straight lines appearing WAVY/distorted (metamorphopsia) and difficulty reading/recognising faces; peripheral vision is preserved. The examinable task is to recognise AGE-RELATED MACULAR DEGENERATION (AMD) \u2014 central vision loss, metamorphopsia, in an older adult \u2014 and crucially distinguish DRY AMD (gradual, no specific treatment, supportive/visual aids and risk-factor modification) from WET (neovascular) AMD, which can cause RAPID, recent distortion/loss and is a time-sensitive URGENT referral to a macula service (NICE NG82, 2018: normally within 1 working day — urgent, not an emergency; diagnosis and treatment within 14 days of referral, NICE QS180) for anti-VEGF treatment that can preserve sight (NICE TA1022 and earlier appraisals). Take the history (speed of onset — recent rapid distortion suggests wet AMD; Amsler-grid distortion, remembering the grid has low sensitivity and cannot rule wet AMD out), address modifiable risk (SMOKING cessation with support per NICE NG209; no beta-carotene supplements for a smoker), arrange the appropriate referral (urgent if wet-AMD features), and \u2014 the communication \u2014 counter the "it\u2019s just old age, nothing can be done" fatalism (wet AMD is treatable; aids and support help dry AMD) while taking the functional/emotional impact and falls/independence implications seriously, including Charles Bonnet syndrome, low-vision services and certification of visual impairment (NG82; QS180).',
    script:{
      opening:"(Brisk, matter-of-fact, glasses on; daughter heard in the background.) \"I've noticed over the last few weeks that the middle of my sight in my left eye has gone blurry, and — this is odd — straight lines like the door frame and the lines on my crossword look wavy and bent. I can still see round the edges. I assume it's just old age and there's nothing to be done, but my daughter nagged me to get it checked.\"",
      facts:[
        { topic:"Onset", text:"\"A few weeks ago. It seems worse this week.\" About 3 weeks; noticeably worse over the last 5 days." },
        { topic:"Distortion", text:"If asked to look at a door frame or grid with each eye: \"With the left it's bent in the middle and a bit smudged. The right looks straight.\" \"More smudged than dark. No pain.\" No flashes or floaters, no red eye." },
        { topic:"Function", text:"\"The crossword's hard. Faces across the room are fuzzy.\" Struggling with the cooker dials. No falls yet." },
        { topic:"Driving", text:"If asked: \"Not yet\" — she doesn't drive any more (stopped 2 years ago)." },
        { topic:"Family", text:"\"My mother. They just said her eyes went.\"" },
        { topic:"Smoking", text:"\"More than I should\" — 15 a day for 60 years. \"I've tried before. I might try again, for my eyes.\"" },
        { topic:"Health and medicines", text:"Hypertension (ramipril), osteoarthritis. No diabetes. No allergies. Last optician visit 3 years ago. Takes no supplements." },
        { topic:"Other experiences", text:"If asked about seeing things that aren't there: no." },
        { topic:"Home", text:"Widowed, lives alone in a bungalow; daughter visits twice a week. Loves crosswords and her church choir." },
        { topic:"How to play it", text:"Stoical and a bit fatalistic. If asked what worries her: \"I don't want to end up like my mother. She couldn't do anything for herself at the end.\" Surprised by treatment: \"So it is old age?\" then \"Injections in the eye? Goodness.\" Lukewarm but open on smoking. If told it's age and nothing can be done, accepts sadly (the trap)." }
      ],
      ice:{
        ideas:"\"It's just old age — nothing can be done.\"",
        concerns:"HIDDEN AGENDA — fear of going blind and losing her independence like her mother; losing her crosswords and choir.",
        expectations:"\"To be told it's my age.\""
      },
      cues:[
        "\"Straight lines look wavy.\" — metamorphopsia; ask how fast it came on.",
        "\"It seems worse this week.\" — recent change suggests wet AMD.",
        "\"I don't want to end up like my mother.\" — the fear, if invited."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises AGE-RELATED MACULAR DEGENERATION from central vision loss + METAMORPHOPSIA (wavy/distorted lines) with preserved peripheral vision in an older adult \u2014 not accepting "just old age"' },
      { dom:'dg', text:'Makes the critical DRY vs WET distinction \u2014 recognising recent, rapidly progressive distortion/central loss as possible WET AMD needing URGENT referral to a macula service, normally within 1 working day (NICE NG82 — urgent, not an emergency; treatment within 14 days, NICE QS180), for sight-saving anti-VEGF' },
      { dom:'dg', text:'Takes a targeted history (speed of onset, which eye, functional impact, Amsler-grid distortion) and assesses risk (smoking, family history), knowing acuity cannot be measured reliably on video and must not delay referral' },
      { dom:'cm', text:'Addresses modifiable risk — SMOKING cessation (major modifiable factor; NICE NG209), cardiovascular health, and does NOT recommend supplements (NG82 research recommendation only; beta-carotene harmful in smokers) — and optimises other eye health (cataract/refraction)' },
      { dom:'cm', text:'Refers appropriately \u2014 urgently if wet-AMD features, routinely for slow dry AMD \u2014 and gives safety-netting to detect conversion to wet AMD (Amsler grid as a prompt, with its low sensitivity explained)' },
      { dom:'ro',   text:'Counters the "just old age, nothing can be done" fatalism honestly \u2014 wet AMD is treatable, aids/support help dry AMD \u2014 without overpromising' },
      { dom:'ro',   text:'Takes the FUNCTIONAL/EMOTIONAL impact seriously (reading, faces, independence, driving/DVLA, falls/isolation, fear of blindness, Charles Bonnet syndrome, certification of visual impairment), validates the daughter\u2019s prompt, and checks understanding' },
      { dom:'cm',    text:'Safety-nets and follows up: appropriate-urgency referral, Amsler-grid monitoring and what change warrants urgent review, smoking-cessation and low-vision support, DVLA/driving advice, and review \u2014 active management, not fatalistic dismissal' },
    ],
    worked:[
      { lbl:'Name it, not "old age"', txt:'"Your daughter was right to send you. The blur in the centre with straight lines looking wavy is a specific condition \u2014 age-related macular degeneration \u2014 not just \u2018getting old\u2019, and crucially what we do next depends on which type it is."' },
      { lbl:'Pin dry vs wet', txt:'"How quickly did the wavy distortion come on \u2014 over a few weeks, or has it changed fast in the last days? \u2026 That matters a lot: a sudden, recent change can mean the treatable \u2018wet\u2019 type, where prompt injections can save sight. A slow blur is usually the \u2018dry\u2019 type."' },
      { lbl:'Refer with the right urgency', txt:'"Because your distortion is fairly recent, I’m referring you urgently to the macular clinic — they normally see people within a working day — so they can check for the treatable type. If it\u2019s the slower dry type, they\u2019ll confirm it and set up support."' },
      { lbl:'What helps', txt:'"There\u2019s genuinely a lot we can do: if it\u2019s wet, injections; either way, stopping smoking is the single biggest thing for your eyes — and please avoid eye vitamins containing beta-carotene, which aren’t safe for smokers — and there are magnifiers and low-vision aids that make a real difference to reading."' },
      { lbl:'Take the impact seriously', txt:'"This affects reading, recognising faces, maybe driving \u2014 that\u2019s a big deal, not trivial. We’ll sort support, and I’ll be honest about driving and the DVLA. Some people with this see things that aren’t there — patterns or faces — and that’s a known effect called Charles Bonnet syndrome, not a sign of losing your mind. How are you feeling about it all?"' },
      { lbl:'Amsler safety-net', txt:'"I\u2019ll give you an Amsler grid \u2014 a little square of lines to check each eye daily. If the lines suddenly look more wavy or a dark patch appears, that’s a sign to be seen urgently — though the grid can miss changes, so tell us about any new blur too. And we\u2019ll review you after the clinic."' },
    ],
    learning:'Gradual loss of CENTRAL vision with METAMORPHOPSIA (straight lines appearing wavy/distorted) and difficulty reading/recognising faces, with PRESERVED peripheral vision, in an older adult is the hallmark of AGE-RELATED MACULAR DEGENERATION (AMD) \u2014 recognise the pattern rather than accept "just old age". The critical distinction is DRY AMD (gradual over months/years; no specific cure — managed with visual aids, support and risk modification; NICE NG82 makes only a research recommendation on supplements, and beta-carotene formulas are unsafe in smokers) versus WET (neovascular) AMD, which causes RAPID, recent distortion/central loss and is a TIME-SENSITIVE URGENT referral to a macula service, normally within 1 working day (NICE NG82, 2018 — urgent, not an emergency), with diagnosis and treatment within 14 days (NICE QS180), because prompt anti-VEGF injections (NICE TA1022 and earlier appraisals) can preserve sight — so recent, rapidly progressive distortion must be treated as possible wet AMD and referred urgently. Take a targeted history (speed of onset, which eye, functional impact, Amsler-grid distortion — a low-sensitivity prompt), leave acuity to the macula service rather than trying to measure it on video, and address modifiable risk — SMOKING cessation is the major modifiable factor (NICE NG209), with general cardiovascular health — optimising other eye health. Refer urgently for wet-AMD features and routinely for slow dry AMD, with safety-netting for new distortion or blur to detect conversion to wet AMD (the Amsler grid helps but can miss change). Crucially, counter the "it\u2019s just old age, nothing can be done" fatalism: wet AMD is treatable and even dry AMD benefits from aids, support and risk modification; and take the functional and emotional impact seriously \u2014 loss of reading, faces, independence and driving (DVLA implications), with falls and isolation risk \u2014 involving low-vision support, certification of visual impairment and information about Charles Bonnet syndrome (NICE NG82; QS180).',
    knowledge:{
      guideline:'[1] NICE NG82 Age-related macular degeneration (2018) · [2] NICE QS180 Serious eye disorders (2019) · [3] NICE TA1022 and related anti-VEGF technology appraisals (TA155, TA294, TA672, TA800) · [4] NICE NG209 Tobacco: preventing uptake, promoting quitting and treating dependence (2021, updated) · [5] DVLA Assessing fitness to drive: visual disorders · dry vs wet AMD · anti-VEGF urgency · Amsler grid and smoking cessation',
      points:[
        { h:'Recognise AMD', t:'Gradual central vision loss + metamorphopsia (wavy/distorted lines) + preserved peripheral vision in an older adult. Don\u2019t accept "just old age".' },
        { h:'Dry vs wet', t:'Dry: gradual, no specific cure, aids/support/risk modification. Wet (neovascular): rapid recent distortion/loss, urgent referral to a macula service normally within 1 working day (NICE NG82; treatment within 14 days, QS180) — anti-VEGF (NICE TA1022) is sight-saving.' },
        { h:'Targeted history', t:'Speed of onset (recent rapid = wet), which eye, functional impact (reading/faces/driving), Amsler-grid distortion (low sensitivity); acuity measured by the macula service, not on video; smoking and family history raise risk.' },
        { h:'Modifiable risk', t:'Smoking cessation is the key modifiable factor (NICE NG209); cardiovascular health; supplements are only an NG82 research recommendation and beta-carotene is unsafe in smokers; optimise cataract/refraction.' },
        { h:'Refer appropriately', t:'Urgent referral (normally within 1 working day, NICE NG82) if wet-AMD features for anti-VEGF; routine for slow dry AMD for confirmation/support/monitoring. Safety-netting for conversion (Amsler grid as a prompt).' },
        { h:'Counter fatalism', t:'Wet AMD is treatable; aids/support help dry AMD. Don\u2019t accept "nothing can be done", but don\u2019t overpromise either.' },
        { h:'Human impact', t:'Take reading/faces/independence/driving (DVLA), falls and isolation seriously; involve low-vision support; offer certification of visual impairment (QS180); explain Charles Bonnet syndrome (NG82); DVLA Group 1 standard; validate fear of blindness.' },
        { h:'Never do', t:'Never dismiss as "just old age"; never miss recent distortion (possible treatable wet AMD); never omit smoking cessation; never ignore the functional/emotional impact or driving implications.' }
      ]
    }
  };

  /* ============ 211. F2F — A child's squint and the absent red reflex: leukocoria (NG12 retinoblastoma) ============ */
  const c211 = {
    id:'childhood-squint-leukocoria', title:'"Her eye turns in sometimes \u2014 and in photos one eye looks white, not red. People say she\u2019ll grow out of it"', type:'video', duration:12,
    meta:{ age:2, sex:'F', setting:'Video consultation \u2014 a toddler\u2019s squint, mother present.', system:'Paediatric ophthalmology \u2014 childhood squint & the white reflex', checked:'October 2026' },
    brief:'Aria Mensah, 2, brought by her mother because one eye intermittently TURNS IN (squint) and \u2014 the crucial detail \u2014 in recent flash PHOTOGRAPHS one eye shows a WHITE reflex (leukocoria) rather than the normal red-eye. Relatives say "she\u2019ll grow out of it". The examinable task is twofold: (1) assess CHILDHOOD SQUINT (strabismus) appropriately \u2014 any squint in a child older than about 3 months of age, a constant squint, or any concern, needs orthoptic/ophthalmology referral, because untreated squint risks AMBLYOPIA ("lazy eye") and permanent vision loss if not treated early, so "they\u2019ll grow out of it" is not a safe default for a persistent/abnormal squint; and (2) \u2014 critically \u2014 recognise the ABSENT/abnormal RED REFLEX / WHITE reflex (LEUKOCORIA) as a RED FLAG for RETINOBLASTOMA (and other serious pathology e.g. cataract), mandating prompt action: NICE NG12 advises considering a suspected cancer pathway referral to ophthalmology for retinoblastoma in a child with an absent fundal (red) reflex, and NICE NG127 advises IMMEDIATE referral to ophthalmology (seen within a few hours) for a child with a new-onset squint together with loss of the red reflex. The skill is arranging a same-day face-to-face red reflex examination (it cannot be done on video), taking the white-reflex-in-photos history seriously, NOT reassuring with "they\u2019ll grow out of it", and making the urgent referral \u2014 while supporting an anxious parent. NICE NG12 paediatric: retinoblastoma (absent fundal reflex); NICE NG127: new squint with loss of the red reflex → immediate referral.',
    script:{
      opening:"(Mother, Aria on her lap, holding up her phone; apologetic.) \"Aria's right eye turns inwards sometimes, especially when she's tired. My mum says all babies do it and she'll grow out of it. But the thing that's actually been bothering me — in a few flash photos lately, that same eye looks white in the middle, not red like the other one. Is that anything, or am I being daft?\"",
      facts:[
        { topic:"The photos", text:"\"Here, this one from last week. See, her left eye is red but the right one is sort of white\" — holds the phone to the camera. \"Three or four photos. I'm not sure I've seen it otherwise.\" Over the last month." },
        { topic:"The squint", text:"\"It comes and goes. I honestly can't say exactly when it started\" — noticed for about 2 months; more when tired. Was never there as a young baby as far as she knows." },
        { topic:"Vision and behaviour", text:"\"Nothing I've noticed. She plays normally.\" Doesn't bump into things. If asked: she sometimes tilts her head to look at books." },
        { topic:"Other symptoms", text:"\"No, none of that. She's herself\" — no red or painful eye, no swelling, no rubbing, eating and sleeping well, no fevers." },
        { topic:"Family history", text:"\"Not that I know of\" — no eye cancers, childhood cataracts or squints in the family. Aria's dad wore glasses as a child." },
        { topic:"Background", text:"Born at term, healthy. Newborn and 6–8 week checks normal. Immunisations up to date. No medicines, no allergies." },
        { topic:"Home", text:"Lives with Mum (Abena, nurse in a care home) and Dad (works away). Can bring her to the surgery this afternoon." },
        { topic:"Feelings", text:"\"I googled it and scared myself. Then my mum said I'm overreacting and I felt silly for booking.\"" },
        { topic:"How to play it", text:"Apologetic and anxious. Wants to know: \"Tell me if it matters, I suppose.\" If the word tumour or cancer is mentioned, go quiet: \"(quietly) A tumour… in her eye?\" Then practical: \"Today? Yes, I can bring her this afternoon.\" If told she'll grow out of it, look relieved but unconvinced (the trap)." }
      ],
      ice:{
        ideas:"(Grandmother) \"She'll grow out of it.\" (Mother) \"The white in the photos might be something.\"",
        concerns:"HIDDEN AGENDA — she googled the white reflex and saw \"eye cancer\"; frightened but worried she's overreacting.",
        expectations:"\"To know if the white in the photos matters.\""
      },
      cues:[
        "\"Am I being daft?\" — validate her instinct.",
        "\"Looks white in the middle.\" — leukocoria; the key red flag.",
        "\"I googled it and scared myself.\" — her fear to acknowledge."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises the WHITE reflex (LEUKOCORIA) in photos / an absent or abnormal RED REFLEX as a serious RED FLAG for RETINOBLASTOMA (and cataract/other pathology) \u2014 taking the parental report extremely seriously, never "grow out of it"' },
      { dom:'cm', text:'Applies NICE NG12: an absent fundal (red) reflex / suspected retinoblastoma in a child → consider a suspected cancer pathway referral to ophthalmology; and NICE NG127: a new-onset squint with loss of the red reflex → immediate ophthalmology referral — and makes the referral' },
      { dom:'cm', text:'Arranges a same-day face-to-face EXAMINATION of the red reflex in both eyes (priority; not possible on video), plus corneal light reflex/cover test for the squint and visual fixation, and asks to SEE the photographs' },
      { dom:'dg', text:'Assesses the SQUINT appropriately \u2014 recognising that a constant squint, any squint after about 3 months of age, or one with reduced vision risks AMBLYOPIA and needs orthoptic/ophthalmology referral, so "grow out of it" is not a safe blanket reassurance' },
      { dom:'cm', text:'Refers and acts without delay — NICE NG12 suspected cancer pathway referral for the leukocoria/retinoblastoma (immediate referral under NICE NG127 if a new squint with loss of the red reflex) plus orthoptic/paediatric ophthalmology for the squint/amblyopia \u2014 not watch-and-wait' },
      { dom:'ro',   text:'Validates the mother\u2019s instinct (right to mention the photos), explains honestly why urgent assessment is needed WITHOUT inducing panic, and avoids both false reassurance and catastrophic language' },
      { dom:'ro',   text:'Supports an anxious parent through the urgent referral, acknowledges most squints are benign while the white reflex specifically needs prompt checking, and checks understanding' },
      { dom:'cm',    text:'Safety-nets and follows up: the urgent referral made today, what to do meanwhile, the squint/amblyopia pathway, confirmation of attendance, and parental support \u2014 prompt NICE NG12/NG127 action for leukocoria, not dismissal' },
    ],
    worked:[
      { lbl:'Take the photos seriously', txt:'"You are absolutely not being daft \u2014 you\u2019ve spotted something really important. A white look in one eye in flash photos is exactly the kind of thing we want to know about, and I\u2019m glad you mentioned it. Could I see those photos?"' },
      { lbl:'Examine the red reflex', txt:'"I need to check what we call the ‘red reflex’ in both her eyes — the red glow you normally get — and I can’t do that properly over video, so I’d like to see Aria in person today. … I want to compare them carefully, because if one looks white or absent, that needs an urgent specialist look."' },
      { lbl:'Explain honestly, no panic', txt:'"Most of the time a turning eye is harmless and treatable. But a white reflex specifically can be a sign of a problem at the back of the eye that we never sit on \u2014 occasionally it can be something serious, so the safe thing is a quick urgent assessment by the eye specialists."' },
      { lbl:'Make the urgent referral', txt:'"I’m going to refer Aria urgently to the eye specialists to be seen very soon — within hours if the check shows the reflex is lost alongside the turning eye — this is the right, careful thing to do, not an overreaction. They\u2019ll examine the back of the eye properly."' },
      { lbl:'Don\u2019t forget the squint', txt:'"Separately, the turning-in eye also needs the orthoptic/eye team, because if a squint sticks around it can make that eye lazy, and treating it early protects her vision. The urgent referral will cover her eyes fully."' },
      { lbl:'Support + safety-net', txt:'"I know this is frightening \u2014 it\u2019s a precaution because you were observant. I\u2019ll make sure the appointment comes through quickly and follow it up. If you notice the white reflex more, or any change in her eye, tell us. You did exactly the right thing."' },
    ],
    learning:'In a young child, a WHITE reflex (LEUKOCORIA) \u2014 including one a parent notices in flash PHOTOGRAPHS \u2014 or an ABSENT/abnormal RED REFLEX on examination is a serious RED FLAG that can indicate RETINOBLASTOMA (a malignant eye tumour of early childhood), as well as congenital cataract or other pathology, and must never be dismissed as "she\u2019ll grow out of it". NICE NG12 (children and young people) advises considering a suspected cancer pathway referral to ophthalmology for retinoblastoma in a child with an absent fundal (red) reflex, and NICE NG127 advises immediate referral (seen within hours) for a new-onset squint with loss of the red reflex, so examine the red reflex in both eyes face to face the same day (compare for an absent, white or asymmetric reflex — not possible on video), ask to see the photographs the parent describes, and make that urgent referral \u2014 a credible parental report of leukocoria warrants referral even if the in-clinic reflex looks equivocal. Separately, assess the SQUINT (strabismus): intermittent squint in the first ~3 months of life can be normal, but a constant squint, any squint after about 3 months of age, a squint with reduced vision, or any concern needs orthoptic/ophthalmology referral, because untreated squint risks AMBLYOPIA ("lazy eye") and permanent vision loss if not treated early \u2014 so "they\u2019ll grow out of it" is not a safe blanket reassurance. Refer and act without delay (NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) suspected cancer pathway referral for the leukocoria/retinoblastoma, or immediate referral under NICE NG127 for a new squint with loss of the red reflex, plus orthoptic/paediatric ophthalmology for the squint), and communicate by validating the parent\u2019s instinct, explaining honestly why urgent assessment is needed without inducing panic, acknowledging that most squints are benign while the white reflex specifically needs prompt checking, and supporting an anxious parent \u2014 avoiding both false reassurance and catastrophic language.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) Suspected cancer — children (retinoblastoma / absent fundal reflex: consider suspected cancer pathway referral) · NICE NG127 Suspected neurological conditions (2019): new squint with loss of red reflex → immediate referral · NHS NIPE screening programme · UK NSC child vision screening · childhood squint & amblyopia',
      points:[
        { h:'Leukocoria is a red flag', t:'A white reflex (in photos or on exam) or an absent/abnormal red reflex in a child can indicate retinoblastoma (or cataract/other pathology). Take parental report seriously \u2014 never "grow out of it".' },
        { h:'NICE NG12 / NG127 referral', t:'NICE NG12: consider a suspected cancer pathway referral to ophthalmology for retinoblastoma in a child with an absent fundal (red) reflex. NICE NG127: new-onset squint with loss of the red reflex → immediate referral (seen within hours). Early detection is sight- and life-saving.' },
        { h:'Examine the red reflex', t:'Check the red reflex in both eyes and compare, face to face (not on video); do corneal light reflex/cover test for the squint and assess fixation; ask to see the parent\u2019s photographs.' },
        { h:'Assess the squint', t:'Intermittent squint under ~3 months of age can be normal; constant squint, any squint after about 3 months of age, reduced vision or any concern \u2192 orthoptic/ophthalmology referral. Untreated squint risks amblyopia and permanent vision loss.' },
        { h:'Refer without delay', t:'NICE NG12 suspected cancer pathway referral for the leukocoria/retinoblastoma (immediate referral under NG127 if a new squint with loss of the red reflex) plus orthoptic/paediatric ophthalmology for the squint/amblyopia. No watch-and-wait given the white reflex.' },
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
        { t:'4\u20136',  h:'Screen differential', d:'Artery occlusion (GCA if ≥50 → same-day steroid/eye review), vein occlusion, vitreous haemorrhage; transient = amaurosis/TIA (aspirin 300 mg, specialist within 24 h).' },
        { t:'6\u20139',  h:'Same-day action', d:'Can\u2019t examine fundus remotely \u2192 same-day emergency eye service today, not the weekend.' },
        { t:'9\u201312', h:'Safety-net', d:'Don’t self-drive (DVLA visual standard); GCA red flags → same-day; worsening → eye unit (stroke signs → 999); confirm attendance.' }
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
        { t:'4\u20136',  h:'Differentiate + risk', d:'Vs conjunctivitis/uveitis/scleritis/keratitis; hypermetropia, dim light, anticholinergic (amitriptyline), topiramate.' },
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
        { t:'2\u20135',  h:'Dry vs wet', d:'Recent rapid distortion = possible WET AMD → urgent macula-service referral, normally within 1 working day (NICE NG82), for sight-saving anti-VEGF.' },
        { t:'5\u20137',  h:'History + risk', d:'Speed of onset, Amsler distortion (low sensitivity), acuity at the macula service; smoking cessation (key), CV risk.' },
        { t:'7\u20139',  h:'Refer + aids', d:'Urgent if wet features; low-vision aids; no beta-carotene supplements in a smoker; optimise cataract/refraction; certification.' },
        { t:'9\u201312', h:'Impact + Amsler safety-net', d:'Reading/faces/driving (DVLA)/falls; Charles Bonnet; counter fatalism; new distortion or blur → urgent.' }
      ],
      wordPics: {
        fail: 'Accepts "just old age, nothing can be done"; misses recent distortion (treatable wet AMD); no smoking-cessation or support.',
        pass: 'Recognises AMD, distinguishes dry vs wet with urgent referral if wet, and addresses smoking/support.',
        exc:  'Recognises AMD and the metamorphopsia, makes the dry-vs-wet distinction with urgent referral for wet features, addresses smoking cessation (no beta-carotene), arranges low-vision support, certification and Amsler safety-netting, counters fatalism, and takes the functional/driving impact seriously.'
      },
      avoid: [
        { dont:'"It\u2019s just age-related and there\u2019s nothing that can be done, I\u2019m afraid."', instead:'"If it\u2019s the \u2018wet\u2019 type, prompt injections can save sight \u2014 and even the dry type, aids and stopping smoking help; let\u2019s get you seen."', why:'Fatalism misses treatable wet AMD and abandons supportive options.' },
        { dont:'(No urgency triage) routine optometry referral for recent distortion.', instead:'"Because the distortion is recent, I’m referring you urgently — normally seen within a working day — to check for the treatable type."', why:'Recent rapid distortion may be wet AMD, where anti-VEGF is time-sensitive (NICE NG82: urgent referral, normally within 1 working day).' },
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
        { t:'2\u20134',  h:'Examine red reflex', d:'Face to face today (not on video): compare both eyes; absent/white/asymmetric reflex \u2192 red flag for retinoblastoma/cataract.' },
        { t:'4\u20136',  h:'NICE NG12 / NG127 referral', d:'Absent fundal reflex / leukocoria → NICE NG12 suspected cancer pathway referral for retinoblastoma; new squint + lost red reflex → immediate referral (NICE NG127).' },
        { t:'6\u20139',  h:'Assess the squint', d:'Any squint after ~3 months of age risks amblyopia \u2192 orthoptic/ophthalmology; not "grow out of it".' },
        { t:'9\u201312', h:'Support + safety-net', d:'Honest, no panic; refer today; confirm attendance; return for more white reflex/eye change.' }
      ],
      wordPics: {
        fail: 'Reassures "she\u2019ll grow out of it", dismisses the photo white reflex, doesn\u2019t examine the red reflex or refer \u2014 risks missing retinoblastoma.',
        pass: 'Examines the red reflex, recognises leukocoria as a red flag, and makes the NICE NG12/NG127 referral plus squint referral.',
        exc:  'Takes the parental photo report seriously, examines and compares the red reflex, recognises leukocoria/absent red reflex as a NICE NG12 retinoblastoma flag (immediate referral under NG127 with a new squint) and refers, assesses the squint/amblyopia risk with orthoptic referral, and supports an anxious parent honestly without panic.'
      },
      avoid: [
        { dont:'"Squints are normal in toddlers \u2014 she\u2019ll grow out of it, don\u2019t worry about the photos."', instead:'"A white look in one eye in photos is a red flag I take seriously \u2014 I’ll see her in person today to check the red reflex and refer urgently."', why:'Dismissing leukocoria risks missing retinoblastoma, a treatable childhood eye cancer.' },
        { dont:'(No red-reflex exam) reassuring without examining.', instead:'"I need to compare the red reflex in both eyes in person today — that’s the key check, and video can’t show it."', why:'The red reflex is the essential examination and the NICE NG12 and NG127 trigger.' },
        { dont:'(Ignoring the squint) only addressing the reflex.', instead:'"Separately, the turning eye needs the orthoptic team \u2014 a persistent squint can cause a lazy eye if untreated."', why:'Untreated persistent squint risks amblyopia and permanent vision loss.' }
      ]
    }

  });

})();
