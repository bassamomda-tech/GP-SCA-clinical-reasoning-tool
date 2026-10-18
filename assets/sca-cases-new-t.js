/* ============================================================
   Reasoning GP — SCA new cases, batch t (upload 135)
   Eight new remote (video / telephone) stations, each self-contained:
   stem, patient-voice role-player script, RCGP-domain checkpoints
   (dg = Data gathering & diagnosis, cm = Clinical management &
   medical complexity, ro = Relating to others), model consultation,
   knowledge, knowledge-by-theme, playbook, links, pitfalls, time
   map, word pictures (Clear fail / Fail / Pass / Clear pass),
   avoid-phrases and the 11 standard scorecard Tasks — all inline.
   Loaded after sca-cases-new-r.js and before the overlay files.
   Educational; original content. Last checked: October 2026.
   ============================================================ */
(function(){
  var C = [];

  /* ===== t1. Blistering lip in a child with eczema, newborn sibling at home — telephone ===== */
  C.push({
    id:'cold-sore-child',
    title:"“I sent you a photo of his lip — is it catching?”",
    type:'telephone', duration:12,
    meta:{ age:8, sex:'M',
      setting:'Telephone — mother calling about her son after uploading a photograph through the online consultation form.',
      system:'Dermatology / Paediatrics — a lip rash in a child reported by a parent with a photograph',
      checked:'October 2026',
      blueprint:{ difficulty:1, lifeStage:'child', groups:['Children & young people','New & undifferentiated presentations'], type:'telephone', thirdParty:true }
    },
    ceg:['Children & young people','New & undifferentiated presentations'],
    brief:'Mrs Shirin Rahman rings about her son Idris, 8, who has mild atopic eczema. Two days ago a small cluster of painful blisters appeared on the right side of his lower lip, preceded by a day of tingling; he had a cold with fever about a week ago. The uploaded photograph shows grouped vesicles on a red base at the vermilion border with early crusting and no other lesions. He is well: eating and drinking, no mouth ulcers, no eye symptoms, no fever now, eczema quiet. This is a first episode of herpes labialis (cold sore, HSV-1) triggered by the recent cold. The hidden agenda: there is a 3-week-old breastfed baby sister, Amira, at home and Idris loves kissing her — the mother has not connected this risk; she has also been dabbing his hydrocortisone eczema cream on the sore. When the word “herpes” is used she is shocked and asks how a child could catch “something sexual” — she fears relatives or school will judge the family. The candidate should take a focused history (prodrome, spread, mouth and eyes, systemic features, eczema areas), make the diagnosis, explain HSV-1 in non-stigmatising terms (most people catch it in childhood from a kiss or shared cup), advise stopping the steroid on the sore, simple analgesia, optional over-the-counter aciclovir cream (modest benefit, best at the tingling stage), hygiene, and above all no kissing or face-to-face contact with the baby and hand washing before handling her until fully crusted and healed. Safety-net for the baby (any blisters, fever, poor feeding, floppiness = urgent same-day or 999), for Idris (eczema herpeticum: rapidly spreading painful punched-out sores in eczema areas with fever; eye pain or redness; not drinking). No need to keep him off school.',
    stem:{
      name:'Idris Rahman', age:'8-year-old boy (mother, Shirin Rahman, is calling)',
      pmh:['Atopic eczema — mild, managed with emollients and hydrocortisone 1% cream for flares','Immunisations up to date'],
      meds:['Emollient (repeat)','Hydrocortisone 1% cream — thinly once or twice daily to eczema flares (last issued 2 months ago)'],
      allergy:'No known drug allergies',
      recent:'Online consultation form, today 08:12 (mother): “Sore blisters on Idris’s lip since Monday, please can a doctor ring.” Photograph uploaded with consent: a cluster of five or six small fluid-filled blisters on a red base on the right side of the lower lip at the lip border, two beginning to crust; skin around the mouth otherwise clear apart from mild dry patches on the chin; no lesions visible on the nose or around the eyes. Registered at the same address: Shirin Rahman, Faisal Rahman, Amira Rahman (date of birth 3 weeks ago).',
      reason:'Telephone call booked to discuss the photograph.'
    },
    script:{
      opening:"“Hello doctor, it’s Idris’s mum. I sent a photo of his lip this morning — have you had a chance to look at it? I don’t know what it is.”",
      facts:[
        { topic:'The sore', text:"“It came up on Monday — so two days. Little blisters on the bottom lip, on one side. They really hurt him and they itch.”" },
        { topic:'Before it appeared (only if asked)', text:"“Now you say it — the day before, he kept saying his lip was tingly and burning.”" },
        { topic:'Recent illness (if asked)', text:"“He had a horrible cold last week — runny nose, sore throat, temperature for a couple of days. He’s over that now.”" },
        { topic:'Inside the mouth, eating and drinking (if asked)', text:"“No ulcers in his mouth or on his gums that I can see. He’s eating his dinner fine and drinking normally. Weeing normally.”" },
        { topic:'Eyes (if asked)', text:"“No, his eyes are fine — not red, not sore, no problems with the light.”" },
        { topic:'Elsewhere and his eczema (if asked)', text:"“Nothing anywhere else. His eczema is behind his knees and on his hands but it’s calm at the moment — no new spots or blisters there.”" },
        { topic:'Generally (if asked)', text:"“He’s fine in himself — running about, no temperature now. I’ve given him Calpol twice and it helped.”" },
        { topic:'What you have put on it (only if asked about treatment)', text:"“I’ve been dabbing some of his eczema cream on it — the hydrocortisone. I thought it might calm it down.”" },
        { topic:'Previous episodes and contacts', text:"“Never had anything like this. I don’t know anyone with blisters.” If asked about relatives: “My dad gets those sore lips sometimes — he was round last week for the baby.”" },
        { topic:'Who is at home (if asked)', text:"“Me, my husband Faisal, Idris and the baby, Amira — she’s three weeks old. I’m breastfeeding.” If asked about contact: “Idris is obsessed with her — he kisses her head all the time.”" },
        { topic:'Your breasts (only if asked)', text:"No sores on your breasts or nipples; feeding is going well." },
        { topic:'School', text:"“I kept him off yesterday and today. Can he go back?”" },
        { topic:'Role-player direction', text:'Be friendly but tired (new baby). You are mainly worried it is “something infectious”. Mention the baby only when asked who is at home or who he has contact with. If the doctor says “herpes”, sound shocked: “Herpes? Isn’t that something people catch from sex? How has my son got that?” — and quietly add “I don’t want people thinking things about our family.” Settle if this is explained kindly and simply. If the baby risk is explained, become anxious: “Has he already given it to her?” Accept the advice offered.' }
      ],
      ice:{
        ideas:'“Maybe an allergy, or impetigo — the school had a letter about impetigo.”',
        concerns:'HIDDEN AGENDA — the new baby: she has not thought about the risk to a 3-week-old, and Idris kisses her constantly. Once the word “herpes” is used she worries it is sexually transmitted and that relatives or the school will judge the family.',
        expectations:'To be told what it is, whether it is catching, what to put on it, and when he can go back to school.'
      },
      cues:[
        '“I don’t know what it is.” — wants a clear name and explanation.',
        '“He’s obsessed with the baby.” — the contact risk to a 3-week-old.',
        '“I don’t want people thinking things.” — stigma attached to the word “herpes”.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Clarifies the history and the photograph: onset, prodromal tingling, pain, blisters and crusting, recent cold, first episode, and treatment used (finds the hydrocortisone on the sore)' },
      { dom:'dg', text:'Screens for complications: mouth and gum ulcers or drooling (gingivostomatitis), eye pain, redness or photophobia, spread into eczema areas with fever (eczema herpeticum), fever, fluid intake and urine output' },
      { dom:'dg', text:'Asks who lives at home and finds the 3-week-old breastfed sister and the close contact; reaches a diagnosis of herpes labialis (cold sore)' },
      { dom:'cm', text:'Explains a self-limiting cold sore (about 7–10 days); stops the steroid on the sore; paracetamol or ibuprofen; optional over-the-counter aciclovir 5% cream with honest benefit; no need for antibiotics or oral antivirals; no school exclusion' },
      { dom:'cm', text:'Gives specific newborn protection: no kissing or face-to-face contact with the baby, hand washing before handling her, no shared towels or cups, until the sore has fully healed; breastfeeding can continue' },
      { dom:'cm', text:'Safety-nets clearly for both children: baby with any blisters, fever, poor feeding, unusual sleepiness or floppiness — urgent same-day assessment or 999; Idris with spreading painful sores in eczema areas, fever, eye symptoms or not drinking — same-day review' },
      { dom:'ro', text:'Explains HSV-1 without stigma (usually caught in childhood from a kiss or shared cup, not sexual), responds to the worry about being judged, and avoids blaming the grandfather or the mother' },
      { dom:'ro', text:'Responds calmly to “Has he already given it to her?”, checks understanding with teach-back and agrees what to do next' }
    ],
    worked:[
      { lbl:'Use the photo, then the history', txt:'“Thank you for the photo — it’s really helpful. Before I tell you what I think, can I ask a few questions? Did he feel anything on his lip before the blisters came up?”' },
      { lbl:'Find the household', txt:'“Who else is at home with Idris? … And how close is he with the baby — does he cuddle or kiss her?”' },
      { lbl:'Name it without stigma', txt:'“This is a cold sore. It’s caused by a very common virus — the same family as herpes, which I know sounds alarming — but this type is usually caught in childhood from a kiss from a relative or a shared cup. It’s nothing to do with sex, and around half of adults carry it.”' },
      { lbl:'Protect the baby', txt:'“The one thing I want to be really careful about is Amira. Very young babies can get seriously unwell from this virus. So, until the sore has completely healed, no kisses for her from Idris, and everyone washes hands before picking her up. You can carry on breastfeeding.”' },
      { lbl:'Treatment', txt:'“Please stop the eczema cream on the sore — steroid creams can make a virus spread. Calpol or ibuprofen for the pain. A pharmacy cream called aciclovir can shorten it slightly, but it works best at the tingly stage, so it’s one to keep for next time.”' },
      { lbl:'Safety-net and school', txt:'“He can go back to school tomorrow — just no sharing drinks. If Amira has any spots or blisters, a temperature, isn’t feeding or is floppy or very sleepy, ring 999 or go to A&E straight away. If Idris’s sores spread to his eczema, he gets a fever or a sore red eye, call us the same day.”' }
    ],
    learning:'Herpes labialis is common and self-limiting, but the GP task is to look around the lesion — at the child’s eczema, eyes and hydration, and at who else is in the house. Recurrent HSV-1 typically follows a prodrome of tingling and may be triggered by a cold, fever, sunlight or stress; lesions crust and heal in about 7–10 days. Topical aciclovir offers only a modest benefit if started early, so it is optional; oral antivirals are reserved for primary gingivostomatitis needing treatment, severe or frequent recurrences or immunocompromise. Steroid creams should not be applied to the lesion. The safety issues are eczema herpeticum (a dermatological emergency — rapidly spreading, painful punched-out erosions in eczematous skin, often with fever) and herpes in a newborn, which can be disseminated or affect the brain; the infant may look only mildly unwell at first, so any vesicles, fever, poor feeding or lethargy in a baby under 3 months needs emergency assessment. Children with cold sores do not need to be kept off school. Language matters: explaining that HSV-1 is usually acquired in childhood by non-sexual contact removes stigma and makes the infection-control advice more likely to be followed.',
    knowledge:{
      guideline:'NICE CKS — Herpes simplex, oral (accessed October 2026) · UKHSA — Health protection in children and young people settings, including education (2022) · NICE NG143 Fever in under 5s: assessment and initial management (2019)',
      summary:'Cold sore in a well child: reassure, stop the steroid on the lesion, analgesia, optional OTC aciclovir — and protect the 3-week-old baby, with clear red flags for neonatal herpes and eczema herpeticum.',
      points:[
        { h:'Recognition', t:'Prodromal tingling or burning for hours to a day, then grouped vesicles on a red base at the lip border, crusting over several days, healing in about 7–10 days without scarring. Common triggers: intercurrent illness or fever, sunlight, stress, local trauma.' },
        { h:'Treatment', t:'Self-care: paracetamol or ibuprofen, avoid picking, petroleum jelly for cracking. Topical aciclovir 5% cream (pharmacy) five times daily for 5 days may shorten an episode slightly if started in the prodrome; benefit is small once blisters are established. Usual dose for a child of this age: as the adult cream regimen (NICE CKS/SPC; check the SPC, BNF and local formulary; SPC: aciclovir 5% cream). Do not apply corticosteroids to the lesion.' },
        { h:'When to consider oral antivirals', t:'Primary herpetic gingivostomatitis with significant pain or poor intake (within the first few days), immunocompromise, frequent or severe recurrences — on clinical judgement; seek specialist advice for neonates and the immunocompromised.' },
        { h:'Eczema herpeticum', t:'Clusters of painful vesicles or monomorphic punched-out erosions spreading rapidly in eczematous skin, often with fever and malaise. Needs same-day treatment with oral or intravenous aciclovir; refer immediately if around the eyes or the child is unwell.' },
        { h:'Newborn exposure', t:'Neonatal HSV can be disseminated or cause encephalitis with high mortality, and early signs may be subtle. Anyone with an active cold sore should not kiss a baby, should wash hands before contact, and should not share towels or cups. Breastfeeding continues unless there are lesions on the breast. A baby under 3 months with fever of 38 °C or above is high risk (NICE NG143).' },
        { h:'School and nursery', t:'UKHSA guidance: no exclusion is needed for cold sores; avoid kissing and sharing cups, and encourage hand hygiene.' },
        { h:'Marking edge', t:'The Clear pass candidate finds the newborn in the house, gives practical protection without frightening the mother, removes the stigma from “herpes”, and safety-nets for both children in specific terms.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, is that Mrs Rahman? I’m Dr Okafor, one of the GPs. Can I just check I’m speaking to Idris’s mum, and is he with you?', dom:'ro', why:'Confirms identity and relationship on a third-party call' },
      { who:'pt', text:'Yes, I’m his mum. He’s in the garden. Did you see the photo? I don’t know what it is.' },
      { who:'dr', text:'I did — thank you, it really helps. Tell me how it started.', dom:'dg', why:'Open question after acknowledging the photo' },
      { phase:'Data gathering', clock:'1–5 min', who:'pt', text:'Two days ago, little blisters on his bottom lip. They hurt and itch.' },
      { who:'dr', text:'Did he feel anything on the lip before they came up? And has he been unwell recently?', dom:'dg', why:'Prodrome and trigger' },
      { who:'pt', text:'He said it was tingly the day before. And he had a bad cold last week with a temperature.' },
      { who:'dr', text:'Any ulcers inside his mouth or on his gums, any trouble eating or drinking? Is he weeing normally? Any sore, red eyes?', dom:'dg', why:'Gingivostomatitis, hydration and eye involvement' },
      { who:'pt', text:'No, he’s eating and drinking fine. Eyes are fine.' },
      { who:'dr', text:'And his eczema — any new spots, blisters or sore patches there? Any fever now? Have you put anything on the lip?', dom:'dg', why:'Eczema herpeticum screen and treatment history' },
      { who:'pt', text:'Eczema’s calm. No fever. I’ve been putting his hydrocortisone on it.' },
      { who:'dr', text:'Thanks. Who else lives with you — and is there anyone very young or unwell at home?', dom:'dg', why:'Household contacts — finds the newborn' },
      { who:'pt', text:'My husband, and the baby — Amira, she’s three weeks. Idris kisses her all the time.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'That’s really important, thank you. From the photo and what you’ve told me, this is a cold sore. It’s caused by a virus called herpes simplex type 1.', dom:'ro', why:'Names the diagnosis plainly' },
      { who:'pt', text:'Herpes? Isn’t that from sex? How has my son got that? I don’t want people thinking things.' },
      { who:'dr', text:'I can see why the word is worrying. This type is mainly caught in childhood — a kiss from a relative or sharing a cup — and about half of adults carry it. It’s nothing to do with sex, and nobody has done anything wrong. The cold last week probably woke it up.', dom:'ro', why:'Removes stigma; no blame' },
      { phase:'Plan', clock:'8–11 min', who:'dr', text:'It should crust and heal in about a week. Please stop the eczema cream on the sore — steroids can help a virus spread. Calpol or ibuprofen for pain. The pharmacy sells aciclovir cream; it helps only a little now, but is worth having ready for the tingle next time.', dom:'cm', why:'Treatment with honest benefit; stops the steroid' },
      { who:'dr', text:'The main thing is Amira. Tiny babies can get very ill from this virus. Until the sore has completely healed: no kissing her, wash hands before anyone holds her, no sharing towels. You can carry on breastfeeding.', dom:'cm', why:'Specific newborn protection' },
      { who:'pt', text:'Has he already given it to her?' },
      { who:'dr', text:'Most babies who are near a cold sore don’t catch it, so let’s not assume that. But watch her closely. If she has any blisters or spots, a temperature of 38 or more, isn’t feeding, or is floppy or unusually sleepy, call 999 or go straight to A&E — don’t wait.', dom:'cm', why:'Proportionate reassurance with an explicit emergency safety-net' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'For Idris: if sores spread over his eczema, he gets a fever or a red, sore eye, call us that day. He can go back to school tomorrow. Can you tell me the main things you’ll do?', dom:'ro', why:'Safety-net for the child and teach-back' },
      { who:'pt', text:'No kissing Amira, wash hands, stop the steroid cream, and 999 if she’s got spots or a temperature or won’t feed.' }
    ],
    kb:{
      social:[
        { h:'A household with a newborn', t:'A tired parent in the first weeks after birth may not think about infection risks; practical, specific instructions (hands, no kisses, separate towels) work better than general advice.' },
        { h:'Stigma', t:'The word “herpes” carries sexual stigma. Explaining childhood, non-sexual transmission protects family relationships (the grandfather) and the child at school.' }
      ],
      legal:[
        { h:'Consent for photographs', t:'Images of children sent through online consultation are part of the record: store them in the notes, share only for care, and record the parent’s consent.' }
      ],
      professional:[
        { h:'Remote assessment of skin', t:'A good-quality photograph plus a targeted history is usually enough for a typical cold sore. Arrange a face-to-face review if the image is unclear, the child is unwell, or lesions are near the eye.' },
        { h:'Health visitor link', t:'With consent, letting the health visitor know about the exposure is reasonable, as she is reviewing the baby.' }
      ],
      community:[
        { h:'Pharmacy', t:'Community pharmacists can advise on cold-sore creams and pain relief for children and know when to send a child back to the GP.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Mouth and gum ulcers, drooling, not drinking (primary gingivostomatitis, dehydration)','Eye pain, redness, photophobia or lesions near the eye','Rapid spread in eczema areas with fever (eczema herpeticum)','Newborn or immunocompromised contact at home'],
        psychosocial:['Who lives at home — 3-week-old breastfed sister','School absence','Fear of judgement from family and school'],
        ice:['Idea: allergy or impetigo','Concern: infectious; then stigma; then the baby','Expectation: name, treatment, school'],
        core:['Prodrome, onset and evolution','Recent cold with fever','First episode','Treatment used (steroid cream)']
      },
      diagnosis:'Herpes labialis (recurrent HSV-1 cold sore), first recognised episode, in a well child with quiescent eczema; newborn sibling at risk of exposure.',
      diagnosisLay:'“It’s a cold sore — a very common virus most people catch as children. It will heal on its own in about a week. The important thing is keeping it away from the baby.”',
      management:{
        reflectIce:'“You were worried it was something catching, and then the word herpes worried you more. It is catching through close contact, but it’s a childhood virus — and with a few precautions we can protect Amira.”',
        psychosocial:'Practical steps that fit a busy home with a newborn; reassurance that no one is to blame.',
        sharedPlan:['Stop hydrocortisone on the lip','Paracetamol or ibuprofen as needed','Optional pharmacy aciclovir 5% cream; keep for the tingling stage next time','No kissing or face-to-face contact with the baby; hand washing; no shared towels or cups until fully healed','Back to school tomorrow'],
        safetyNet:['Baby: blisters, fever 38 °C or more, poor feeding, floppiness or unusual sleepiness — 999 or A&E','Idris: spreading sores on eczema, fever, eye pain or redness, not drinking — same-day GP or NHS 111','Not healed in 2 weeks — call back']
      }
    },
    links:[
      { ic:'📋', t:'Eczema', s:'Case walkthrough', href:'../cases/eczema.html' },
      { ic:'💠', t:'Eczema', s:'Management protocol', href:'management/eczema.html' }
    ],
    pitfalls:{
      intro:'The diagnosis is easy. The station is failed by candidates who stop at the lip.',
      items:[
        { dom:'dg', fail:'Diagnoses a cold sore from the photo and never asks who lives at home.', why:'The 3-week-old sister is the person at real risk; neonatal herpes can be fatal.', fix:'Always ask about household contacts — especially babies, pregnancy and immunocompromise — for any infectious rash.' },
        { dom:'cm', fail:'Says the hydrocortisone “won’t hurt” or prescribes oral aciclovir or antibiotics routinely.', why:'Steroids on a viral lesion can worsen it; oral antivirals and antibiotics are not needed for an uncomplicated cold sore in a well child.', fix:'Stop the steroid, simple analgesia, optional OTC aciclovir with honest benefit.' },
        { dom:'ro', fail:'Answers “Isn’t herpes sexual?” with a technical lecture on HSV-1 and HSV-2, or ignores the comment about people judging the family.', why:'The stigma is what the mother will carry away; leaving it unaddressed damages trust and family relationships.', fix:'Simple words: caught in childhood from a kiss or a cup, very common, nobody’s fault.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Confirm identity and relationship; acknowledge the photo; open question.' },
      { t:'1–5', h:'Focused history', d:'Prodrome, trigger, mouth, eyes, eczema, hydration, treatment used — then the household and the baby.' },
      { t:'5–8', h:'Explain', d:'Name the cold sore; remove the stigma; respond to the worry about judgement.' },
      { t:'8–11', h:'Plan', d:'Stop steroid, analgesia, optional aciclovir cream, newborn protection, school.' },
      { t:'11–12', h:'Close', d:'Red flags for the baby and for Idris; teach-back.' }
    ],
    wordPics:{
      clearFail:'Misses the newborn entirely, endorses the steroid cream or prescribes antibiotics, keeps the child off school unnecessarily, and gives no safety-net.',
      fail:'Correct diagnosis and treatment advice but never asks about the household, or mentions “avoid babies” in passing without specific actions or red flags; stigma question brushed off.',
      pass:'Focused history including eyes, mouth and eczema; diagnoses a cold sore; stops the steroid; finds the baby and gives clear hygiene advice with red flags; school advice correct.',
      clearPass:'All of the Pass, delivered warmly and efficiently: removes the stigma in one or two sentences, answers “Has he given it to her?” honestly and calmly, separate specific safety-nets for each child, and teach-back.'
    },
    avoid:[
      { dont:'“It’s just a cold sore, nothing to worry about.”', instead:'“It’s a cold sore, which usually heals in a week — the main thing is keeping it away from the baby.”', why:'Reassurance that ignores the newborn is unsafe.' },
      { dont:'“Herpes is a sexually transmitted virus but this is type 1…”', instead:'“This type is usually caught as a child, from a kiss or a shared cup — it’s nothing to do with sex.”', why:'Plain language; removes rather than adds stigma.' },
      { dont:'“Keep him off school until it’s gone.”', instead:'“He can go back — just no sharing drinks, and wash hands.”', why:'UKHSA advises no exclusion for cold sores.' }
    ]
  });

  /* ===== t2. Toddler with diarrhoea and vomiting, father with no transport — telephone ===== */
  C.push({
    id:'toddler-gastro-phone',
    title:"“Her mum told me to ring — she’s had the runs and been sick, and she’s just sleeping a lot.”",
    type:'telephone', duration:12,
    meta:{ age:2, sex:'F',
      setting:'Telephone — urgent same-day call booked by the father, who has just finished a night shift.',
      system:'Paediatrics / Urgent care — a toddler with diarrhoea and vomiting, assessed by telephone',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'child', groups:['Children & young people','Urgent & unscheduled care','Health disadvantage & vulnerabilities'], type:'telephone', thirdParty:true }
    },
    ceg:['Children & young people','Urgent & unscheduled care','Health disadvantage & vulnerabilities'],
    brief:'Mr Kwabena (Kobby) Mensah rings at 11:30 about his daughter Esi, 2 years 8 months (13 kg at her check last month). She has had 2 days of vomiting and diarrhoea after an outbreak at nursery. The vomiting has settled (last at 4 am), but she has had six or seven loose, watery stools today, is only taking sips, has had two wet nappies since yesterday evening (usually five or six a day) and is “sleeping loads” — when awake she is flat and whiny, lying on the sofa rather than playing. No blood, no green vomit, no rash, no fever now (38.1 °C yesterday), no abdominal swelling; hands warm. This is acute gastroenteritis with symptoms of clinical dehydration (reduced urine output) and a red-flag feature (altered responsiveness — lethargy) under NICE CG84, so she needs a face-to-face clinical assessment TODAY, within hours — not tomorrow. The practical challenge: the father is exhausted after a night shift, the car is with his wife (a care assistant on a long day until 19:30), he must collect 5-year-old twins from school at 15:15, and he cannot afford a taxi. The source of the challenge is that he will readily accept a next-day appointment. A good candidate explains why today matters, explores solutions (if asked, his brother-in-law Kojo works from home nearby and has a car; the practice can offer a slot this afternoon, or a duty clinician can consider a home visit), gives oral rehydration solution little and often with clear amounts, hygiene and nursery exclusion advice, and an explicit 999 safety-net while waiting. Offering “bring her tomorrow” or advice only is a Fail.',
    stem:{
      name:'Esi Mensah', age:'2-year-old girl (2 years 8 months) — father, Kwabena Mensah, is calling',
      pmh:['Born at 39 weeks, no neonatal problems','Immunisations up to date (including rotavirus)','2-year review by health visitor 2 months ago: development normal'],
      meds:['No regular medicines'],
      allergy:'No known drug allergies',
      recent:'Weight 13.0 kg (health visitor clinic, 5 weeks ago). No consultations in the last 6 months. Household: parents and twin brothers aged 5. Same-day request, 11:12 today (father): “Daughter D&V 2 days, wife asked me to call.”',
      reason:'Urgent telephone call.'
    },
    script:{
      opening:"“Hi, doctor. Esi’s had diarrhoea and sickness — her mum told me to ring you. I’ve just come in from nights, so sorry if I’m a bit slow.”",
      facts:[
        { topic:'The illness', text:"“Started Monday — so two days. Sick and the runs. The sick has stopped — last time was about four this morning. But the runs keep coming.”" },
        { topic:'Diarrhoea (if asked)', text:"“Six or seven nappies today already. Watery, yellowy. No blood, no slime.”" },
        { topic:'Vomit (if asked)', text:"“Just milk and food. Not green, no blood. Three times yesterday.”" },
        { topic:'Drinking (if asked)', text:"“She’ll only take little sips. Normally she guzzles her milk. She won’t eat.”" },
        { topic:'Wet nappies (only if asked directly)', text:"“Hmm… only two since last night. Normally she soaks five or six a day. The last one was about eight this morning.”" },
        { topic:'Sleepy (if asked what you mean)', text:"“She’s sleeping loads. When she’s awake she just lies on the sofa, whingey. Not playing with her toys. She did watch a bit of telly.” If asked to go and check her now: “She opened her eyes and looked at me, then cried a bit and went back to sleep.”" },
        { topic:'Other red flags (answer no if asked)', text:"No rash, no temperature today (38.1 yesterday), no fast or noisy breathing, no swollen tummy, no screaming with pain. Hands and feet feel warm. Lips “a bit dry”. If asked about tears: “I don’t know — she hasn’t really cried properly.”" },
        { topic:'Contacts', text:"“There’s a sickness bug going round her nursery. The twins are fine.”" },
        { topic:'Background', text:"Born on time, healthy, all jabs done, growing well. No medicines given except a bit of Calpol yesterday." },
        { topic:'Practical situation (only if asked to bring her in or about getting to the surgery)', text:"“Why — is it serious?” Then: “I can’t today. My wife’s got the car at work till half seven, I’ve got the twins to pick up at quarter past three, and I can’t afford a taxi this week. Could I bring her tomorrow?”" },
        { topic:'Help available (only if the doctor asks whether anyone could help)', text:"“My brother-in-law, Kojo — he works from home, ten minutes away. He’s got a car. I could ask him.”" },
        { topic:'Video', text:"If offered a video call: “My phone screen’s smashed — the camera doesn’t work.”" },
        { topic:'Role-player direction', text:'You are tired, polite and keen not to make a fuss — you think it is “just a bug”. If the doctor offers tomorrow, accept with relief. If the doctor explains clearly why she needs to be seen today, you become worried and cooperative: “I didn’t realise. What should I do?” Mention Kojo only if asked about help. You also worry, if asked how you are, that you might nod off while watching her.' }
      ],
      ice:{
        ideas:'“It’s just the bug from nursery.”',
        concerns:'HIDDEN AGENDA — practical: no car, no money for a taxi, twins to collect, and he is exhausted after a night shift and frightened he will fall asleep while watching her. He does not want to look like he is not coping, and his wife is more worried than he is.',
        expectations:'Advice on what to give her — “something to stop the runs”.'
      },
      cues:[
        '“She’s just sleeping a lot.” — altered responsiveness, not ordinary tiredness.',
        '“I’ve just come in from nights.” — an exhausted carer; practical barriers to come.',
        '“Her mum told me to ring.” — another worried parent whose concern should be respected.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes a focused history: onset, frequency of diarrhoea and vomiting, blood, bilious vomit, fever, abdominal pain or swelling, rash, contacts' },
      { dom:'dg', text:'Assesses dehydration remotely and specifically: fluid intake, number of wet nappies, how responsive she is (asks father to check her now), dry lips, tears, colour, hands and feet' },
      { dom:'dg', text:'Recognises clinical dehydration with a red-flag feature (lethargy, reduced urine output) and that this needs face-to-face assessment today; considers alternative diagnoses (sepsis, intussusception, HUS) through red-flag questions' },
      { dom:'cm', text:'Arranges a face-to-face assessment within hours today and solves the transport barrier with the father (asks about family or friends, an afternoon slot, a duty-clinician home visit if no other option) — does not accept tomorrow' },
      { dom:'cm', text:'Gives interim oral rehydration advice: ORS in small frequent amounts (for example 5 mL every 1–2 minutes by spoon or syringe), stop juice and fizzy drinks, no anti-diarrhoeal medicines, keep a nappy count' },
      { dom:'cm', text:'Explicit 999 safety-net while waiting (hard to wake, mottled or cold hands and feet, very pale, fast breathing, no wet nappy, green vomit, blood in stool, non-blanching rash); hygiene and nursery exclusion until 48 hours after the last episode' },
      { dom:'ro', text:'Explains the reason for urgency without blame or alarm, respects the mother’s concern, and acknowledges his tiredness and constraints' },
      { dom:'ro', text:'Agrees a concrete, shared plan (who, how, when), checks understanding with teach-back, and confirms a call-back or appointment time' }
    ],
    worked:[
      { lbl:'Turn “sleeping a lot” into data', txt:'“When you say she’s sleeping a lot — could you go and look at her now while I hold on? Does she wake when you talk to her? Does she look at you?”' },
      { lbl:'Count the nappies', txt:'“How many wet nappies has she had since yesterday evening, compared with normal?”' },
      { lbl:'Explain why today', txt:'“Most tummy bugs settle at home. But two things worry me: she’s weeing much less, and she’s more sleepy and floppy than normal. Those can be signs she’s getting dry. I need a doctor to see her today — not tomorrow.”' },
      { lbl:'Solve, don’t lecture', txt:'“I know you’ve no car and the twins to collect. Is there anyone — family, a neighbour — who could drive you this afternoon? I can hold a slot for you at two o’clock.”' },
      { lbl:'Rehydration in numbers', txt:'“Get a rehydration drink like Dioralyte from the pharmacy. Give a teaspoon — 5 mL — every minute or two with a spoon or syringe. Little and often stays down better. No juice or fizzy drinks.”' },
      { lbl:'Safety-net while waiting', txt:'“If she becomes hard to wake, goes very pale or blotchy, her hands go cold, she breathes fast, she has green sick or blood in her nappy, or a rash that doesn’t fade — call 999. Don’t wait for the appointment.”' }
    ],
    learning:'In children under 5 with gastroenteritis, the decision is not about the diagnosis but about dehydration and safety. NICE CG84 lists reduced urine output and altered responsiveness among symptoms of clinical dehydration, and altered responsiveness (lethargy or irritability) is a red-flag feature, so a child described as unusually sleepy with few wet nappies needs a face-to-face assessment the same day. Telephone assessment depends on converting vague words into data: count wet nappies, ask the parent to check the child while on the phone, and ask about colour, breathing, hands and feet and a rash. Red flags for other diagnoses include bilious vomiting, blood in the stool (HUS, intussusception), abdominal distension, high fever and a non-blanching rash. Interim management is oral rehydration solution little and often; avoid fruit juice and carbonated drinks; antidiarrhoeal drugs are not used in young children. The communication challenge is the parent who accepts a next-day appointment because of real barriers — the safe GP explains why, then helps solve the barrier (family, timing, a duty-clinician visit) rather than lowering the standard of care. Children should stay off nursery until 48 hours after the last episode (UKHSA).',
    knowledge:{
      guideline:'NICE CG84 Diarrhoea and vomiting caused by gastroenteritis in under 5s: diagnosis and management (2009) · NICE NG143 Fever in under 5s: assessment and initial management (2019) · UKHSA — Health protection in children and young people settings, including education (2022)',
      summary:'Gastroenteritis with fewer wet nappies and new lethargy = clinical dehydration with a red flag: see today, solve the transport problem, ORS little and often, explicit 999 advice.',
      points:[
        { h:'Who is at higher risk of dehydration', t:'Under 1 year (especially under 6 months), low birth weight, six or more diarrhoeal stools or three or more vomits in 24 hours, not tolerating fluids, stopped breastfeeding, malnutrition.' },
        { h:'Clinical dehydration — features', t:'Appears unwell or deteriorating; altered responsiveness (irritable, lethargic); decreased urine output; sunken eyes; dry mucous membranes; tachycardia; tachypnoea; reduced skin turgor. Red flags among these (unwell appearance, altered responsiveness, sunken eyes, tachycardia, tachypnoea, reduced turgor) need particular attention.' },
        { h:'Shock — call 999', t:'Decreased level of consciousness, pale or mottled skin, cold extremities, very fast heart rate or breathing, weak pulses, prolonged capillary refill.' },
        { h:'Other diagnoses not to miss', t:'Bilious (green) vomiting or abdominal distension — obstruction; blood and mucus with colicky pain — intussusception; bloody diarrhoea with pallor or reduced urine — HUS; high fever, rash or neck stiffness — sepsis or meningitis; diabetic ketoacidosis in a child who is thirsty and drowsy.' },
        { h:'Rehydration', t:'No dehydration: continue usual fluids and food; supplement with ORS if at increased risk. Clinical dehydration: ORS 50 mL/kg over 4 hours plus maintenance, given frequently in small amounts, with clinical monitoring — this is why the child must be assessed. For a 13 kg child that is about 650 mL over 4 hours. Avoid fruit juice and carbonated drinks.' },
        { h:'Medicines', t:'Do not give antidiarrhoeal drugs (such as loperamide) to young children. Antibiotics are not routinely needed. Paracetamol or ibuprofen for distress or fever, with care if not drinking.' },
        { h:'Infection control', t:'Hand washing with soap and water, no towel sharing, clean toilet and changing areas daily; exclude from nursery until 48 hours after the last episode of diarrhoea or vomiting.' },
        { h:'Marking edge', t:'The Clear pass candidate quantifies the nappies and responsiveness, explains the urgency in plain language, and works with the father to get Esi seen this afternoon.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Mr Mensah, it’s Dr Hughes. Thanks for calling. Is Esi with you at the moment?', dom:'ro', why:'Confirms the caller and that the child is present' },
      { who:'pt', text:'Yes, she’s on the sofa. She’s had diarrhoea and sickness for two days. I’ve just come in from nights.' },
      { who:'dr', text:'Thank you — and well done for ringing after a night shift. Tell me what’s been happening.', dom:'ro', why:'Acknowledges tiredness; open question' },
      { phase:'Data gathering', clock:'1–5 min', who:'pt', text:'The sick’s stopped, last at four. But the runs keep coming — six or seven today. And she’s just sleeping a lot.' },
      { who:'dr', text:'Any blood in the poo, or green sick? Temperature, rash, or a swollen or very painful tummy?', dom:'dg', why:'Red flags for other diagnoses' },
      { who:'pt', text:'No blood, not green. Temperature yesterday, not today. No rash.' },
      { who:'dr', text:'How much is she drinking, and how many wet nappies since last night?', dom:'dg', why:'Quantifies intake and urine output' },
      { who:'pt', text:'Just sips. Only two wet nappies — normally five or six.' },
      { who:'dr', text:'Could you go and look at her now? Does she wake and look at you when you talk to her? What colour is she, and are her hands warm?', dom:'dg', why:'Real-time remote assessment of responsiveness and perfusion' },
      { who:'pt', text:'She opened her eyes, cried a bit and went back to sleep. Hands are warm. Lips look a bit dry.' },
      { phase:'Explanation', clock:'5–7 min', who:'dr', text:'Thank you, that’s really helpful. I think this is a tummy bug from nursery. But she’s weeing much less and she’s more sleepy than normal, and in a little one those are signs she may be getting dry. I’d like a doctor to see her this afternoon.', dom:'ro', why:'Plain explanation of why face-to-face is needed today' },
      { who:'pt', text:'Today? I can’t — my wife’s got the car till half seven, I’ve got the twins at quarter past three, and I can’t afford a taxi. Could I bring her tomorrow?' },
      { phase:'Shared plan', clock:'7–10 min', who:'dr', text:'I understand — that’s a lot to juggle. I’m worried that waiting until tomorrow isn’t safe. Is there anyone — family, a friend, a neighbour — who could drive you here early this afternoon?', dom:'cm', why:'Holds the standard; explores solutions' },
      { who:'pt', text:'My brother-in-law, Kojo — he works from home and has a car.' },
      { who:'dr', text:'Brilliant. I’ll book her in at half one, which gets you back for the twins. If Kojo can’t help, call me back straight away and we’ll arrange for a clinician to come to you.', dom:'cm', why:'Concrete time; back-up plan' },
      { who:'dr', text:'Until then, pharmacy rehydration drink — Dioralyte — a teaspoon every minute or two. No juice or fizzy drinks, and no anti-diarrhoea medicine. Keep a note of wet nappies.', dom:'cm', why:'Interim ORS with amounts' },
      { phase:'Close', clock:'10–12 min', who:'dr', text:'If she becomes hard to wake, goes very pale or blotchy, gets cold hands, breathes fast, has green sick, blood in her nappy or a rash that doesn’t fade — ring 999. And you’re very tired: is there someone who can sit with her if you need to sleep? Can you tell me the plan?', dom:'ro', why:'999 safety-net; carer fatigue; teach-back' },
      { who:'pt', text:'Ring Kojo, half one appointment, Dioralyte a spoon at a time, 999 if she’s floppy or pale or there’s blood. I’ll ask Kojo to stay.' }
    ],
    kb:{
      social:[
        { h:'Shift work and childcare', t:'Night-shift parents are sleep-deprived when daytime illness strikes. Ask who else can help, both for transport and supervision.' },
        { h:'Financial barriers', t:'Transport costs are a real reason for missed or delayed care. Practices can hold a timed slot, a duty clinician can visit, and families often have help they will mention only if asked.' }
      ],
      legal:[
        { h:'Parental responsibility', t:'A parent with parental responsibility can consent and give history; record who called and that the mother is aware.' }
      ],
      professional:[
        { h:'Limits of telephone triage', t:'When remote assessment finds red-flag features, the duty is to arrange timely face-to-face assessment; document the features, the advice and the agreed time.' },
        { h:'Continuity across the day', t:'Make sure the afternoon clinician knows the concern; add a call-back task if the family do not attend.' }
      ],
      community:[
        { h:'Community pharmacy', t:'ORS sachets are available without prescription; pharmacists can advise on preparation (one sachet in 200 mL of water).' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Lethargy or altered responsiveness','Reduced wet nappies','Bilious vomit, blood in stool, abdominal distension','Non-blanching rash, high fever, fast breathing, cold or mottled peripheries'],
        psychosocial:['Father after night shift, no car, cost','Twins to collect at 15:15','Mother at work, worried'],
        ice:['Idea: nursery bug','Concern (hidden): cannot get there; exhaustion','Expectation: medicine to stop the diarrhoea'],
        core:['Weight 13 kg','Immunised, previously well','Nursery outbreak']
      },
      diagnosis:'Acute viral gastroenteritis with symptoms of clinical dehydration and a red-flag feature (lethargy, reduced urine output) — needs face-to-face assessment today.',
      diagnosisLay:'“It’s most likely a tummy bug, but she’s weeing less and is more sleepy than usual, which can mean she’s getting dry. A doctor needs to see her today.”',
      management:{
        reflectIce:'“You were hoping for something to stop the runs, and getting here today is really hard. Medicines to stop diarrhoea aren’t safe for toddlers — the treatment is fluids — and she needs checking today, so let’s work out how.”',
        psychosocial:'Use Kojo for transport and supervision; time the slot around the school run; offer a home visit as the back-up.',
        sharedPlan:['Face-to-face assessment at 13:30 today (brother-in-law driving)','If transport fails: call back — duty clinician home visit','ORS 5 mL every 1–2 minutes; no juice, fizzy drinks or antidiarrhoeals','Nappy count; hygiene; nursery exclusion until 48 hours symptom-free'],
        safetyNet:['999: hard to wake, pale or mottled, cold hands and feet, fast breathing, green vomit, blood in stool, non-blanching rash, no wet nappy','Call-back if not attending by 14:00']
      }
    },
    links:[
      { ic:'💠', t:'Gastroenteritis', s:'Management protocol', href:'management/gastroenteritis.html' }
    ],
    pitfalls:{
      intro:'This feels like a routine “tummy bug” call. It is failed by candidates who accept vague words and the father’s offer of tomorrow.',
      items:[
        { dom:'dg', fail:'Accepts “she’s sleeping a lot” as normal tiredness and never counts wet nappies.', why:'Lethargy and reduced urine output are the features that change management; without them the risk is invisible.', fix:'Quantify: nappies since last night, and ask the parent to check her responsiveness while you wait.' },
        { dom:'cm', fail:'Agrees “bring her tomorrow” because the father cannot come today, with fluids advice.', why:'A lethargic toddler with reduced urine output needs assessment within hours; deterioration can be quick.', fix:'Hold the standard and solve the barrier: family transport, a timed slot, or a home visit; explicit 999 advice.' },
        { dom:'ro', fail:'Implies the father should have rung earlier or that he is not coping.', why:'Blame makes parents less likely to call next time and does not get the child seen.', fix:'Thank him, acknowledge the night shift, and plan together.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Confirm caller and that the child is with him; acknowledge tiredness.' },
      { t:'1–5', h:'Focused history and remote check', d:'Frequency, blood, bile, fever, rash; intake; wet nappies; father checks responsiveness now.' },
      { t:'5–7', h:'Explain', d:'Tummy bug, but signs of drying out — needs seeing today.' },
      { t:'7–10', h:'Solve the barrier', d:'Who can drive? Timed slot; home visit as back-up; ORS amounts.' },
      { t:'10–12', h:'Close', d:'999 triggers, carer fatigue, nursery exclusion, teach-back.' }
    ],
    wordPics:{
      clearFail:'Diagnoses a tummy bug, advises fluids and Calpol, and asks the father to call if worse — no nappy count, no responsiveness check, no face-to-face assessment.',
      fail:'Asks some dehydration questions and recognises concern but accepts tomorrow’s appointment, or tells the father to go to A&E without exploring how, and gives vague safety-netting.',
      pass:'Quantifies intake, nappies and responsiveness; recognises clinical dehydration; arranges a face-to-face assessment today with a workable transport plan; ORS advice; clear 999 triggers.',
      clearPass:'All of the Pass, done warmly: has the father check Esi in real time, explains urgency without blame, finds the brother-in-law, books a timed slot with a home-visit back-up, gives ORS in teaspoons, addresses his exhaustion, and closes with teach-back.'
    },
    avoid:[
      { dont:'“Kids get sleepy when they’re ill — just keep pushing fluids.”', instead:'“When you say sleepy — can you check whether she wakes and looks at you?”', why:'Lethargy is a red flag, not a reassurance.' },
      { dont:'“OK, bring her in tomorrow morning then.”', instead:'“I’m worried waiting until tomorrow isn’t safe — who could help get you here this afternoon?”', why:'The barrier is real but solvable; the risk is today.' },
      { dont:'“Give her plenty of juice to keep her fluids up.”', instead:'“Use a rehydration drink, a teaspoon every minute or two — not juice or fizzy drinks.”', why:'Sugary drinks can worsen diarrhoea; ORS replaces salts.' }
    ]
  });

  /* ===== t3. Recurrent UTI after normal urology tests, on letrozole — video ===== */
  C.push({
    id:'recurrent-uti-letrozole',
    title:"“It’s another water infection — and there was blood again. The hospital says I’m fine, but I’m not.”",
    type:'video', duration:12,
    meta:{ age:63, sex:'F',
      setting:'Video — urgent appointment booked by the patient three weeks after urology discharged her.',
      system:'Urology / Women’s health — urinary symptoms recurring after specialist investigation',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Gender, reproductive & sexual health','Long-term conditions & cancer','Prescribing'], type:'video', thirdParty:false }
    },
    ceg:['Gender, reproductive & sexual health','Long-term conditions & cancer','Prescribing'],
    brief:'Mrs Yvonne Baptiste, 63, retired school administrator, has had six lower UTIs in ten months (four culture-confirmed E. coli: nitrofurantoin-sensitive, trimethoprim-resistant). Urology arranged a CT urogram and flexible cystoscopy, both normal, and discharged her three weeks ago. She had oestrogen-receptor-positive left breast cancer in 2021 (wide local excision and radiotherapy) and takes letrozole, an aromatase inhibitor. Today: 2 days of dysuria, frequency and pink urine; no fever, loin pain, rigors or vomiting. Hidden agenda: she was widowed three years ago and has a new partner, Clive, of a year; the infections come one or two days after sex, and sex has become painful because of vaginal dryness since starting letrozole. She is embarrassed to say so and has been washing internally with a scented wash “to be clean”. She also fears the blood means the cancer has come back or that the hospital missed bladder cancer. Tasks: treat the acute UTI (nitrofurantoin 100 mg modified-release twice daily for 3 days after sending a midstream urine for culture — dipstick is unhelpful in recurrent UTI), reassure accurately about the normal recent investigations while planning a repeat urinalysis after treatment to check the blood has cleared; find the post-coital pattern and genitourinary syndrome of menopause; advise behavioural measures (stop douching and scented products, pass urine after sex, hydration); offer non-hormonal vaginal moisturiser and lubricant now; explain that vaginal oestrogen is an option but, as she is on an aromatase inhibitor, the decision needs her breast cancer team (NICE NG23); offer single-dose post-coital antibiotic prophylaxis (nitrofurantoin 100 mg within 2 hours of sex) with risks explained; mention methenamine hippurate as a later non-antibiotic option (NICE NG112, 2024); offer a face-to-face pelvic examination for atrophy and prolapse.',
    stem:{
      name:'Yvonne Baptiste', age:'63-year-old woman',
      pmh:['Breast cancer (left), oestrogen-receptor positive — wide local excision and radiotherapy 2021; annual breast clinic follow-up','Recurrent urinary tract infections','Osteopenia (DEXA 2023)'],
      meds:['Letrozole 2.5 mg once daily (since 2021; breast team plan to review at 5 years)','Colecalciferol 800 units daily'],
      allergy:'No known drug allergies',
      recent:'Urology clinic letter, 3 weeks ago: “Six episodes of lower UTI in ten months, four culture-confirmed (E. coli — nitrofurantoin sensitive, trimethoprim resistant). CT urogram: normal kidneys, ureters and bladder; no stones. Flexible cystoscopy: normal bladder mucosa, no tumour. Post-void residual 30 mL. No urological cause found. Discharged to GP; we suggest management as per NICE recurrent UTI guidance.” Bloods 2 months ago: eGFR 78 mL/min/1.73 m², creatinine 71 µmol/L.',
      reason:'Urgent video consultation — “another urine infection”.'
    },
    script:{
      opening:"“Hello doctor. I’ve got another water infection, I know the feeling. And there was blood again yesterday. They told me at the hospital I’m fine — but I’m clearly not fine, am I?”",
      facts:[
        { topic:'Current symptoms', text:"“Two days. Burning when I pass water, going every half hour, and yesterday it was pink. Same as all the others.”" },
        { topic:'Upper tract and systemic (if asked)', text:"No fever, no shivers, no back or side pain, no sickness. You feel fine apart from the burning." },
        { topic:'Previous treatment (if asked)', text:"“Nitrofurantoin always works. Trimethoprim didn’t, once.”" },
        { topic:'Pattern (only if asked whether anything sets them off)', text:"Pause. “I’ve… noticed they tend to come a day or two after… I have a partner now. Clive. We’ve been together a year.” Look embarrassed." },
        { topic:'Vaginal symptoms (only if asked)', text:"“It’s very dry down there since the breast cancer tablets. Sex is sore, to be honest.” No bleeding from the vagina, no unusual discharge, no lump or dragging feeling." },
        { topic:'Washing (only if asked about hygiene or what you do after sex)', text:"“I wash inside with a feminine wash afterwards, to keep clean. A scented one.” You do not pass urine straight after sex." },
        { topic:'Fluids', text:"“About three cups of tea a day. I don’t drink much water — I don’t want to be running to the loo when I’m out.”" },
        { topic:'Continence (if asked)', text:"Occasional small leak when you sneeze. No problems emptying." },
        { topic:'Sexual health (if asked)', text:"One partner, Clive, for a year; before that only your late husband. No previous STIs. Happy to have a test if the doctor thinks it’s sensible." },
        { topic:'Breast cancer (if asked)', text:"“All clear at my last check in March. I take the letrozole every day. They said maybe five years, maybe longer.” No new lumps, bone pain, weight loss or cough." },
        { topic:'Weight, appetite, bowels (answer no if asked)', text:"No weight loss, no night sweats, normal bowels." },
        { topic:'Social', text:"Widowed three years ago. Retired school administrator, sings in a church choir. Never smoked. Alcohol: a glass of wine on Sundays." },
        { topic:'Role-player direction', text:'Start frustrated and anxious about the blood and cancer. You only mention Clive and the dryness if asked about triggers or vaginal symptoms, and you find it embarrassing. If the doctor is matter-of-fact and kind, relax and talk openly. If oestrogen cream is mentioned, say: “I thought I wasn’t allowed hormones because of the breast cancer?” If told to stop having sex, become upset: “I’ve only just got a bit of life back.”' }
      ],
      ice:{
        ideas:'“Something must be wrong inside — maybe they missed something.”',
        concerns:'HIDDEN AGENDA — the infections follow sex with her new partner, and sex has become painful since letrozole; she is embarrassed and worried she will have to give up the relationship. Underneath is fear that the blood means cancer — her breast cancer back, or bladder cancer the hospital missed.',
        expectations:'Antibiotics today and “a proper answer” — perhaps referral back to the hospital.'
      },
      cues:[
        '“I’m clearly not fine, am I?” — frustration and fear after normal tests.',
        '“There was blood again.” — cancer worry.',
        '“I have a partner now.” — the post-coital pattern and her embarrassment.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Confirms an acute lower UTI and excludes upper-tract or systemic features (fever, rigors, loin pain, vomiting); checks previous culture sensitivities and response' },
      { dom:'dg', text:'Explores triggers sensitively and finds the post-coital pattern, vaginal dryness and dyspareunia on letrozole, douching with scented products, low fluid intake' },
      { dom:'dg', text:'Asks about red flags and other causes: postmenopausal bleeding, discharge, prolapse, incontinence or incomplete emptying, weight loss, breast cancer recurrence symptoms; considers STI testing' },
      { dom:'cm', text:'Treats the acute episode: midstream urine for culture before starting nitrofurantoin 100 mg modified-release twice daily for 3 days (renal function adequate); no dipstick reliance; repeat urinalysis after treatment to confirm the haematuria has resolved, with re-referral if it persists' },
      { dom:'cm', text:'Explains prevention: stop douching and scented products, pass urine after sex, hydration; non-hormonal vaginal moisturiser and lubricant now; vaginal oestrogen discussed with her breast team because she takes an aromatase inhibitor' },
      { dom:'cm', text:'Offers single-dose post-coital antibiotic prophylaxis (nitrofurantoin 100 mg within 2 hours of sex) with risks (resistance, side effects), mentions methenamine hippurate as a later non-antibiotic option, and offers a face-to-face pelvic examination; safety-nets for pyelonephritis or sepsis' },
      { dom:'ro', text:'Acknowledges her frustration and fear about cancer and explains what the normal CT and cystoscopy do and do not mean, without dismissing her' },
      { dom:'ro', text:'Discusses sex and the new relationship in a matter-of-fact, non-judgemental way, supports her wish to continue it, and shares decisions about prophylaxis' }
    ],
    worked:[
      { lbl:'Acknowledge the frustration', txt:'“It must be exhausting to keep getting these after being told everything looks normal. Let’s sort out today’s infection, then work out why they keep coming back.”' },
      { lbl:'Ask about triggers kindly', txt:'“Some women notice the infections come after sex — is that something you’ve noticed? I ask everyone, because there’s a lot we can do about it.”' },
      { lbl:'The scans and the blood', txt:'“Blood in the urine with an infection is very common — the infection inflames the bladder lining. Your camera test three weeks ago looked directly at the bladder and was normal, and the scan showed healthy kidneys. That makes cancer very unlikely. To be thorough, I’ll recheck your urine once the infection has cleared — if blood is still there, I’ll speak to the urologists.”' },
      { lbl:'Hormones and breast cancer', txt:'“Vaginal oestrogen helps prevent infections, but because you take letrozole it may reduce how well the letrozole works, so it’s a decision to make with your breast team. In the meantime, a non-hormonal moisturiser and a lubricant can make a real difference.”' },
      { lbl:'Post-coital option', txt:'“Another option is a single nitrofurantoin tablet within two hours after sex. It works well, but any regular antibiotic carries a risk of resistance and side effects, so we’d review it after six months.”' },
      { lbl:'Safety-net', txt:'“If you get a temperature, shivers, pain in your back or side, or you’re being sick, call us the same day or 111 — that could mean it’s gone to the kidney.”' }
    ],
    learning:'Recurrent UTI (two or more in six months, or three or more in twelve) needs a search for modifiable causes once structural disease has been excluded — and the commonest are found in the history, not the scan: post-coital timing, genitourinary syndrome of menopause, douching or spermicides, low fluid intake, incontinence and incomplete emptying. In women with recurrent UTI, send urine for culture rather than relying on dipstick. Visible haematuria during a proven infection, with a normal cystoscopy and CT urogram three weeks earlier, is very likely inflammatory, but repeat urinalysis after treatment closes the loop. NICE NG112 (updated 2024) sets out the prevention ladder: behavioural and personal-hygiene advice; vaginal oestrogen for postmenopausal women; single-dose antibiotic prophylaxis after exposure to a trigger, or daily prophylaxis; and methenamine hippurate as an alternative to daily antibiotics. Here the complication is an aromatase inhibitor: NICE NG23 advises non-hormonal treatments first and, for women on aromatase inhibitors, agreeing options for persistent genitourinary symptoms with the breast cancer specialist. Talking about sex plainly and positively — especially with an older woman in a new relationship — is part of good clinical care.',
    knowledge:{
      guideline:'NICE NG112 Urinary tract infection (recurrent): antimicrobial prescribing (2018, updated 2024) · NICE NG109 Urinary tract infection (lower): antimicrobial prescribing (2018) · NICE NG23 Menopause: identification and management (2015, updated 2024) · UKHSA — Diagnosis of urinary tract infections: quick reference tool for primary care (2020)',
      summary:'Treat today’s UTI after sending a culture; recheck the urine for blood once treated; then prevention — behaviour, non-hormonal vaginal products, oestrogen only via the breast team, post-coital prophylaxis, methenamine later.',
      points:[
        { h:'Definition and work-up', t:'Recurrent UTI: two or more episodes in 6 months or three or more in 12 months. Culture each episode; refer men, and women with recurrent upper UTI, uncertain diagnosis or red flags such as persistent visible haematuria after treatment. Do not use dipstick to diagnose UTI in women with recurrent infection — send a midstream urine.' },
        { h:'Acute treatment', t:'Nitrofurantoin modified-release 100 mg twice daily for 3 days if eGFR is 45 or above (NICE NG109; check the SPC, BNF and local formulary; SPC: nitrofurantoin). Choose by previous sensitivities — trimethoprim resistance documented here.' },
        { h:'Behaviour and self-care', t:'Avoid douching and scented products; do not delay voiding; pass urine after sex; adequate hydration; wipe front to back. Evidence for cranberry products and D-mannose is limited and uncertain — NICE allows self-care discussion, not prescribing.' },
        { h:'Genitourinary syndrome of menopause and aromatase inhibitors', t:'Non-hormonal vaginal moisturisers and lubricants first. Vaginal oestrogen reduces recurrent UTI in postmenopausal women, but for women taking aromatase inhibitors NICE NG23 advises working with the breast cancer specialist on options for persistent symptoms, as vaginal oestrogen may reduce aromatase-inhibitor efficacy.' },
        { h:'Antibiotic prophylaxis', t:'Single dose within 2 hours of a trigger such as sex: nitrofurantoin 100 mg (if eGFR 45 or above) or trimethoprim 200 mg if sensitive. Usual adult dose as stated (NICE NG112; check the SPC, BNF and local formulary; SPC: nitrofurantoin). Discuss resistance, side effects, and long-term nitrofurantoin risks (pulmonary and hepatic reactions, peripheral neuropathy); review at 6 months.' },
        { h:'Methenamine hippurate (2024)', t:'An alternative to daily antibiotic prophylaxis when behavioural measures, vaginal oestrogen or single-dose prophylaxis have not been effective or are unsuitable. Usual adult dose: 1 g twice daily (NICE NG112; check the SPC, BNF and local formulary; SPC: methenamine hippurate). Avoid urine alkalinisers; review within 6 months.' },
        { h:'Examination', t:'Offer a pelvic examination (atrophy, prolapse, masses) and consider STI testing if risk; check post-void residual if voiding symptoms (done here: 30 mL).' },
        { h:'Marking edge', t:'The Clear pass candidate asks about sex comfortably, explains the haematuria honestly with a plan to recheck, and knows that the oestrogen decision sits with the breast team without dismissing it.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Mrs Baptiste, it’s Dr Rowe. Can you see and hear me? Are you somewhere private to talk?', dom:'ro', why:'Video set-up and privacy before an intimate history' },
      { who:'pt', text:'Yes. It’s another water infection — and blood again. The hospital said I’m fine, but I’m clearly not.' },
      { who:'dr', text:'That sounds really frustrating. Let’s sort today out, and then try to understand why they keep coming back. Tell me about the last couple of days.', dom:'ro', why:'Acknowledges frustration; sets an agenda' },
      { phase:'Data gathering', clock:'1–5 min', who:'pt', text:'Burning, going every half hour, and it was pink yesterday.' },
      { who:'dr', text:'Any temperature, shivers, pain in your back or sides, or sickness?', dom:'dg', why:'Upper-tract screen' },
      { who:'pt', text:'No, none of that.' },
      { who:'dr', text:'Have you noticed anything that sets them off? Some women find they come after sex — I ask everyone.', dom:'dg', why:'Normalised question about triggers' },
      { who:'pt', text:'Well… yes. I’ve a new partner. They come a day or two after. And it’s very dry since the breast tablets — it’s sore.' },
      { who:'dr', text:'Thank you for telling me — that’s really useful. What do you do afterwards — wash, pass water? Any bleeding from the vagina, discharge, or a dragging feeling?', dom:'dg', why:'Hygiene practices; postmenopausal bleeding and prolapse screen' },
      { who:'pt', text:'I wash inside with a scented wash. No bleeding or discharge.' },
      { who:'dr', text:'And how have you been otherwise — weight, appetite, any lumps or bone pain? I know the blood worries you.', dom:'dg', why:'Cancer-recurrence screen; invites her concern' },
      { who:'pt', text:'All fine. But I keep thinking it’s cancer — that the hospital missed it, or the breast cancer’s back.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'That’s a very understandable fear. Infection inflames the bladder lining and often causes blood. Three weeks ago the camera looked directly inside your bladder and it was normal, and the scan of your kidneys was normal too — so cancer is very unlikely. I’ll recheck your urine after this infection; if blood is still there, I’ll go back to the urologists.', dom:'ro', why:'Honest reassurance plus a plan that closes the loop' },
      { who:'dr', text:'For today: a urine sample to the lab first, then nitrofurantoin twice a day for three days — it’s worked for you before.', dom:'cm', why:'Culture then treat according to sensitivities' },
      { phase:'Prevention', clock:'8–11 min', who:'dr', text:'I think the dryness and the timing after sex are the key. Stop the internal washing — it removes the protective bacteria. Pass water soon after sex and drink a bit more water. A vaginal moisturiser and a lubricant should make sex more comfortable.', dom:'cm', why:'Behavioural and non-hormonal measures' },
      { who:'pt', text:'What about oestrogen cream? I thought I couldn’t have hormones.' },
      { who:'dr', text:'It does help prevent infections, but with letrozole it may make the letrozole work less well, so I’ll write to your breast team so you can decide together. Another option is one nitrofurantoin tablet within two hours after sex — effective, but antibiotics carry a risk of resistance, so we’d review it in six months. And there’s a non-antibiotic tablet, methenamine, if these don’t work.', dom:'cm', why:'Accurate, shared options' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'I’d also like to examine you in person next week to check for dryness or a prolapse. If you get a temperature, shivers, back pain or vomiting, call us the same day or 111. What will you do from today?', dom:'ro', why:'Face-to-face exam, safety-net, teach-back' },
      { who:'pt', text:'Urine sample, start the tablets, no more scented wash, get a moisturiser, and you’ll write to the breast team. And I don’t have to give up Clive.' }
    ],
    kb:{
      social:[
        { h:'Sexuality in later life', t:'New relationships after bereavement are common; older women are often not asked about sex and may not volunteer it. Asking normalises it and unlocks the diagnosis.' },
        { h:'Hidden hygiene practices', t:'Douching and scented washes are often done “to be clean” and to reduce infections, but they disrupt protective vaginal flora.' }
      ],
      legal:[
        { h:'Information sharing', t:'Writing to the breast team is direct care; explain it and record her agreement.' }
      ],
      professional:[
        { h:'Interface with specialists', t:'Discharge from urology is not the end of the problem — the GP owns the prevention plan and coordinates with oncology about hormones.' },
        { h:'Antimicrobial stewardship', t:'Prophylaxis is a shared decision with a review date; record the indication and stop date.' }
      ],
      community:[
        { h:'Support', t:'Breast cancer nurse specialists can advise on vaginal dryness during endocrine therapy; Breast Cancer Now has information on sex and intimacy after treatment.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Fever, rigors, loin pain, vomiting (pyelonephritis)','Persistent visible haematuria after treatment','Postmenopausal bleeding, discharge, pelvic mass','Breast cancer recurrence symptoms'],
        psychosocial:['New partner; embarrassment','Widowed three years','Choir and social life — fluid restriction when out'],
        ice:['Idea: something missed inside','Concern: cancer; losing the relationship','Expectation: antibiotics and an answer'],
        core:['Culture history and sensitivities','Letrozole for ER-positive breast cancer','Normal CT urogram and cystoscopy 3 weeks ago']
      },
      diagnosis:'Acute lower UTI on a background of recurrent post-coital UTI, contributed to by genitourinary syndrome of menopause (aromatase-inhibitor related), douching and low fluid intake; structural causes excluded.',
      diagnosisLay:'“This is another bladder infection. The tests show your bladder and kidneys are healthy. The infections seem to be set off by sex, made more likely by dryness from your breast tablets — and that’s something we can work on.”',
      management:{
        reflectIce:'“You were worried something had been missed and that the blood meant cancer — the tests make that very unlikely and I’ll recheck the urine. And you don’t need to give up your relationship to get on top of this.”',
        psychosocial:'Practical fluid advice for choir days; sensitive discussion of sex and lubrication; breast-nurse support.',
        sharedPlan:['MSU then nitrofurantoin MR 100 mg twice daily for 3 days','Repeat urinalysis 1–2 weeks after treatment; re-refer if haematuria persists','Stop douching and scented products; void after sex; more water','Non-hormonal moisturiser and lubricant; letter to breast team about vaginal oestrogen','Post-coital nitrofurantoin 100 mg single dose — review at 6 months; methenamine later if needed','Face-to-face pelvic examination next week'],
        safetyNet:['Fever, rigors, loin pain, vomiting — same day or NHS 111','Symptoms not improving in 48 hours — call back','Visible blood without infection symptoms — tell us']
      }
    },
    links:[
      { ic:'📋', t:'UTI in women', s:'Case walkthrough', href:'../cases/uti-women.html' },
      { ic:'💠', t:'Recurrent UTI', s:'Management protocol', href:'management/recurrent-uti.html' },
      { ic:'💠', t:'Menopause and HRT', s:'Management protocol', href:'management/menopause.html' }
    ],
    pitfalls:{
      intro:'Candidates either treat the infection and stop, or re-refer to urology because of the blood without finding the obvious modifiable causes.',
      items:[
        { dom:'dg', fail:'Never asks about sex, vaginal symptoms or washing habits.', why:'The post-coital pattern and genitourinary syndrome of menopause are the main treatable drivers here.', fix:'Ask every woman with recurrent UTI about triggers, in a normalising way.' },
        { dom:'cm', fail:'Prescribes vaginal oestrogen straight away without considering the aromatase inhibitor — or flatly refuses it as “banned after breast cancer”.', why:'Both are wrong: it is an option, but on an aromatase inhibitor the decision belongs with the breast team (NICE NG23).', fix:'Start non-hormonal products and write to oncology.' },
        { dom:'ro', fail:'Tells her the hospital tests were normal so there is “nothing to worry about” and moves on.', why:'It dismisses her fear and her lived experience; she leaves without a plan for the blood.', fix:'Explain what the tests show, recheck the urine after treatment, and say what would trigger re-referral.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Privacy check; acknowledge frustration.' },
      { t:'1–5', h:'History', d:'Acute symptoms and upper-tract screen; triggers; vaginal symptoms; washing; red flags.' },
      { t:'5–8', h:'Explain and treat', d:'Haematuria and the normal tests; MSU then nitrofurantoin.' },
      { t:'8–11', h:'Prevention', d:'Behaviour, moisturiser and lubricant, breast team re oestrogen, post-coital prophylaxis, methenamine later.' },
      { t:'11–12', h:'Close', d:'Examination, recheck urine, safety-net, teach-back.' }
    ],
    wordPics:{
      clearFail:'Gives another antibiotic course by dipstick logic and re-refers to urology; never asks about sex or vaginal symptoms; prescribes oestrogen without thought to letrozole; no safety-net.',
      fail:'Treats appropriately and gives generic hygiene advice, but misses the post-coital pattern or the aromatase-inhibitor issue, and leaves the cancer worry unaddressed.',
      pass:'Culture and nitrofurantoin; finds the post-coital pattern and dryness; non-hormonal measures; oncology input for vaginal oestrogen; offers post-coital prophylaxis; addresses haematuria with a recheck plan; safety-nets.',
      clearPass:'All of the Pass with sensitivity and pace: normalises talk about sex, stops the douching, explains the tests and residual uncertainty honestly, shares the prophylaxis decision with numbers on risks, offers examination, and closes with teach-back.'
    },
    avoid:[
      { dont:'“The tests were normal, so there’s nothing serious going on.”', instead:'“The tests make cancer very unlikely; I’ll recheck your urine once this has cleared to be sure.”', why:'Honest reassurance with a plan.' },
      { dont:'“Maybe have less sex?”', instead:'“Let’s make sex more comfortable and less likely to trigger infections.”', why:'Respects her relationship; targets the cause.' },
      { dont:'“You can’t have hormones after breast cancer.”', instead:'“Vaginal oestrogen is possible for some women, but with letrozole we need your breast team’s view.”', why:'Accurate and keeps the option open.' }
    ]
  });

  /* ===== t4. Hand X-ray and blood results — inflammatory arthritis, trying to conceive — video ===== */
  C.push({
    id:'results-ra-fertility',
    title:"“I’m here for my hand X-ray and blood results — the one test was negative, so that’s good, isn’t it?”",
    type:'video', duration:12,
    meta:{ age:29, sex:'F',
      setting:'Video — results follow-up booked after a locum GP examined her hands and requested tests.',
      system:'Rheumatology / Results — explaining X-ray and blood results for painful, swollen hands',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Long-term conditions & cancer','Investigations & results','Gender, reproductive & sexual health'], type:'video', thirdParty:false }
    },
    ceg:['Long-term conditions & cancer','Investigations & results','Gender, reproductive & sexual health'],
    brief:'Ms Sofia Marchetti, 29, self-employed hairdresser, has 10 weeks of symmetrical pain, swelling and morning stiffness (about 75 minutes) in the small joints of both hands and the balls of her feet. A locum GP 12 days ago found tender, swollen 2nd and 3rd MCP joints bilaterally with a positive squeeze test. Results: rheumatoid factor weakly positive (26 IU/mL), anti-CCP negative, ESR 48, CRP 21, mild normocytic anaemia (Hb 114) and platelets 428; renal and liver function normal. X-rays show periarticular osteopenia and small marginal erosions at the right 2nd MCP and left 5th MTP. She has latched onto the negative anti-CCP as good news. This is probable early rheumatoid arthritis (erosive, inflammatory) — a negative anti-CCP does not exclude it, and erosions at 10 weeks make urgent referral more pressing. NICE NG100: refer urgently (small joints of hands and feet, more than one joint) — the quality standard is to be seen within 3 weeks. Hidden agenda: she and her partner stopped contraception 3 months ago to try for a baby; her period is 5 days late and she has been taking over-the-counter ibuprofen 400 mg three times a day for 3 weeks. She fears that “the strong drugs” will mean giving up on a baby. Her grandmother had severely deformed hands from RA. Tasks: explain the results honestly in plain language; refer urgently, flagging the pregnancy plan in the letter; advise a pregnancy test today and to stop ibuprofen while trying to conceive or until a negative test (NSAIDs may reduce fertility and are avoided in pregnancy), paracetamol meanwhile; start folic acid 400 micrograms daily; explain that several disease-modifying treatments are compatible with conception and pregnancy and that methotrexate is not — so the rheumatology team will plan treatment around her wish for a baby; address work (grip, self-employed income) with hand therapy and occupational therapy; safety-net for a hot single joint with fever.',
    stem:{
      name:'Sofia Marchetti', age:'29-year-old woman',
      pmh:['No significant past history','Combined pill — last prescription 6 months ago, not re-issued'],
      meds:['No regular medicines recorded'],
      allergy:'No known drug allergies',
      recent:'Locum GP (face-to-face), 12 days ago: “10 weeks of pain, swelling and stiffness of both hands, worse in the morning (over an hour), also balls of both feet. O/E: soft-tissue swelling and tenderness 2nd and 3rd MCPs both hands; MCP squeeze test positive bilaterally; MTP squeeze positive left. Wrists, elbows, knees normal. No rash, no nail changes. Temp 36.8 °C. Plan: bloods, X-ray hands and feet, results with GP.” RESULTS (see packet): Rheumatoid factor 26 IU/mL (reference less than 20); anti-CCP antibody 4 U/mL (reference less than 10 — negative); ESR 48 mm/hour (reference 1–20); CRP 21 mg/L (reference less than 5); Hb 114 g/L (115–165), MCV 86 fL (80–100); platelets 428 × 10⁹/L (150–400); WCC 8.1 × 10⁹/L (4.0–11.0); U&E, LFT, bone profile and TSH normal. X-ray both hands and feet (reporting radiographer): “Periarticular osteopenia at the MCP joints. Small marginal erosion at the radial aspect of the right 2nd metacarpal head and at the left 5th metatarsal head. Joint spaces preserved. Appearances suggest an early inflammatory erosive arthropathy.”',
      reason:'Video appointment to discuss blood test and X-ray results.'
    },
    script:{
      data:{ kind:'Results packet — blood tests and X-ray (12 days ago)', values:[
        ['Rheumatoid factor','26 IU/mL','less than 20 IU/mL'],
        ['Anti-CCP antibody','4 U/mL (negative)','less than 10 U/mL'],
        ['ESR','48 mm/hour','1–20 mm/hour'],
        ['CRP','21 mg/L','less than 5 mg/L'],
        ['Haemoglobin','114 g/L (MCV 86 fL)','115–165 g/L'],
        ['Platelets','428 × 10⁹/L','150–400 × 10⁹/L'],
        ['White cell count','8.1 × 10⁹/L','4.0–11.0 × 10⁹/L'],
        ['U&E, LFT, bone profile, TSH','Normal','—'],
        ['X-ray hands and feet','Periarticular osteopenia at MCPs; small marginal erosions right 2nd MCP and left 5th MTP; joint spaces preserved','—'] ] },
      opening:"“Hi! I’m calling about my results. I looked on the app — the CCP one was negative, and I read that’s the main rheumatoid test, so that’s good, isn’t it?”",
      facts:[
        { topic:'Symptoms', text:"“About ten weeks. Both hands, the knuckles — and the balls of my feet, like walking on pebbles. They’re puffy.”" },
        { topic:'Stiffness (if asked)', text:"“Every morning it takes over an hour before I can make a proper fist. Better once I get going.”" },
        { topic:'Work and daily life (if asked)', text:"“I’m a hairdresser — I rent a chair, so if I don’t work I don’t get paid. I’ve dropped my scissors twice. Blow-drying kills my wrists. I’ve cut back to four days.”" },
        { topic:'Other features (if asked)', text:"“I’m tired all the time.” No fever, no weight loss, no rash, no mouth ulcers, no dry or red eyes, no psoriasis, no back pain, no recent diarrhoea or urine infection, no tick bite, no recent travel." },
        { topic:'Painkillers (only if asked what you are taking)', text:"“Ibuprofen from the supermarket — two tablets, so 400, three times a day for about three weeks. It helps.”" },
        { topic:'Periods and pregnancy (only if asked about periods, contraception or pregnancy)', text:"Hesitate. “We stopped the pill three months ago — we’re trying for a baby. My period’s actually five days late. I haven’t done a test — I didn’t want to jinx it.”" },
        { topic:'Folic acid (if asked)', text:"“No — should I be?”" },
        { topic:'Family history', text:"“My nonna — my grandmother — had rheumatoid arthritis. Her hands were like claws. She couldn’t hold a cup by the end.” No psoriasis or lupus in the family." },
        { topic:'Social', text:"Lives with partner Dan, a plumber. Non-smoker, never smoked. Alcohol: none since trying for a baby. Runs at weekends but stopped because of her feet." },
        { topic:'Role-player direction', text:'Start upbeat — you think the negative test means you do not have RA. If the doctor explains it may still be RA, go quiet, then ask: “Will I end up like my nonna?” Only mention trying for a baby when periods, contraception or pregnancy come up — then become anxious: “Does this mean I can’t have a baby? I read the drugs for this cause birth defects.” If the doctor is clear and hopeful, settle and engage with the plan.' }
      ],
      ice:{
        ideas:'“The anti-CCP was negative, so it’s probably not rheumatoid — maybe just overdoing it at work.”',
        concerns:'HIDDEN AGENDA — she is trying to conceive and her period is late; she has been taking ibuprofen and fears that treatment for RA will mean giving up on a baby. Underneath is the image of her grandmother’s deformed hands and losing her livelihood.',
        expectations:'To be told the results are fine and get stronger painkillers so she can work.'
      },
      cues:[
        '“The CCP one was negative, so that’s good, isn’t it?” — false reassurance to correct gently.',
        '“If I don’t work I don’t get paid.” — financial pressure as a self-employed hairdresser.',
        '“My nonna’s hands were like claws.” — the fear driving her denial.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Interprets the results correctly: weakly positive RF, negative anti-CCP, raised ESR and CRP, mild anaemia of inflammation, reactive thrombocytosis, early erosions on X-ray — probable early erosive rheumatoid arthritis; a negative anti-CCP does not exclude it' },
      { dom:'dg', text:'Updates the history: duration, distribution including feet, morning stiffness, function at work, systemic and extra-articular features, features of other inflammatory arthritides (psoriasis, IBD, recent infection, back pain)' },
      { dom:'dg', text:'Asks about medicines and about contraception, periods and pregnancy plans — finds she is trying to conceive, her period is late and she is taking regular ibuprofen' },
      { dom:'cm', text:'Refers urgently to rheumatology (to be seen within 3 weeks) and states the erosions, results and pregnancy plans in the referral; does not start steroids or DMARDs in primary care' },
      { dom:'cm', text:'Advises a pregnancy test today, stopping ibuprofen while trying to conceive and in pregnancy (paracetamol instead), and starting folic acid 400 micrograms daily; explains that rheumatology can choose pregnancy-compatible treatments and that methotrexate is avoided' },
      { dom:'cm', text:'Supports function and work: hand therapy and occupational therapy, joint protection, fit note or self-employed support options; safety-net for a hot swollen single joint with fever, new eye pain, or rapid worsening' },
      { dom:'ro', text:'Corrects the false reassurance about anti-CCP gently and honestly, and responds to the fear of her grandmother’s outcome with realistic hope about early treatment' },
      { dom:'ro', text:'Responds sensitively to the late period and pregnancy wish, involves her in decisions, and checks understanding' }
    ],
    worked:[
      { lbl:'Find out what she has read', txt:'“You’ve seen the results on the app — what did you make of them?”' },
      { lbl:'Correct gently', txt:'“The CCP test is helpful when it’s positive, but about a third of people with rheumatoid arthritis have a negative one. The other tests — the inflammation markers and the X-ray — show your joints are inflamed and starting to be affected. So I think this is most likely early rheumatoid arthritis.”' },
      { lbl:'Hope, not threat', txt:'“Your nonna would have been diagnosed at a time when treatment was very different. Now, starting the right medicines early — and you’re early — means most people keep their hands working well.”' },
      { lbl:'Ask the question that changes the plan', txt:'“Can I ask about your periods and contraception? Some of the treatments, and even the ibuprofen, matter if there’s any chance of pregnancy.”' },
      { lbl:'Pregnancy-aware plan', txt:'“Please do a pregnancy test today. Stop the ibuprofen for now — it can make it harder to conceive and isn’t advised in pregnancy — and use paracetamol. Start folic acid. I’ll tell the rheumatologists you’re trying for a baby; there are treatments that are safe in pregnancy.”' },
      { lbl:'Urgent, with a safety-net', txt:'“I’m referring you urgently — you should be seen within about three weeks. If one joint becomes hot, very swollen and you feel feverish, contact us the same day.”' }
    ],
    learning:'In suspected inflammatory arthritis, serology is supportive, not decisive: around a third of people with rheumatoid arthritis are seronegative, and early erosions with raised inflammatory markers and clinical synovitis of the small joints make the diagnosis probable whatever the anti-CCP shows. NICE NG100 recommends urgent referral for persistent synovitis of unknown cause, especially if the small joints of the hands or feet or more than one joint are affected, and the quality standard is assessment within 3 weeks of referral — erosions at ten weeks make this even more pressing. The GP role is not to start disease-modifying treatment but to refer quickly, give honest information, manage symptoms safely and spot what will change specialist decisions. Here the key question is about pregnancy: NSAIDs may reduce fertility and are generally avoided in pregnancy, methotrexate and leflunomide are teratogenic, while hydroxychloroquine, sulfasalazine and some biologics are compatible with conception and pregnancy. Telling her that a pregnancy plan is part of rheumatology care — not an obstacle to it — turns fear into a plan.',
    knowledge:{
      guideline:'NICE NG100 Rheumatoid arthritis in adults: management (2018, updated 2020) · NICE QS33 Rheumatoid arthritis in over 16s (2013, updated 2020) · British Society for Rheumatology guideline on prescribing drugs in pregnancy and breastfeeding (2022) · NICE NG201 Antenatal care (2021)',
      summary:'Erosions plus raised ESR and CRP with small-joint synovitis = probable early RA despite a negative anti-CCP: urgent rheumatology referral, pregnancy test, stop ibuprofen, folic acid, and a treatment plan built around her wish for a baby.',
      points:[
        { h:'Interpreting the tests', t:'Rheumatoid factor: sensitivity about 70%, also positive in other conditions and some healthy people. Anti-CCP: highly specific, predicts erosive disease, but negative in roughly a third. ESR and CRP reflect activity. Normocytic anaemia and raised platelets are typical of active inflammation. Early X-ray signs: periarticular osteopenia and marginal erosions at MCP and MTP joints.' },
        { h:'Referral', t:'NICE NG100: refer urgently for persistent synovitis of unknown cause; urgency increases if the small joints of the hands or feet are affected, more than one joint is affected, or there has been a delay of 3 months or more since symptom onset. Do not withhold referral because RF or anti-CCP is negative. QS33: seen within 3 weeks of referral.' },
        { h:'While waiting', t:'Analgesia and short-term NSAIDs can be used if appropriate; glucocorticoids are usually started by the specialist. In someone trying to conceive, avoid NSAIDs (possible reversible effect on ovulation; avoid in pregnancy, particularly from 20 weeks) and use paracetamol.' },
        { h:'Pregnancy and DMARDs', t:'BSR 2022: hydroxychloroquine and sulfasalazine (with folic acid 5 mg daily, specialist advice) are compatible with pregnancy; TNF inhibitors can be continued in pregnancy in many cases; methotrexate must be stopped before conception (1–3 months) and leflunomide needs a washout. Pre-conception counselling is part of rheumatology care.' },
        { h:'Folic acid', t:'All women trying to conceive: folic acid 400 micrograms daily until 12 weeks of pregnancy (NICE NG201). Usual adult dose as stated (check the SPC, BNF and local formulary; SPC: folic acid 400 microgram tablets). Higher doses may be advised by the specialist with sulfasalazine.' },
        { h:'Function and work', t:'Hand therapy and occupational therapy for joint protection, splints and adapted tools; self-employed people can receive a fit note to support claims; Access to Work can fund equipment.' },
        { h:'Marking edge', t:'The Clear pass candidate corrects the negative-test misunderstanding without crushing hope, asks the pregnancy question, and writes the pregnancy plan into the referral.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hi Sofia, it’s Dr Begum. Can you see and hear me OK? You’ve had a look at your results — what did you make of them?', dom:'ro', why:'Starts from her understanding' },
      { who:'pt', text:'The CCP one was negative — I read that’s the main rheumatoid test, so that’s good, isn’t it?' },
      { who:'dr', text:'I can see why you’d think that. Before I go through them, can I check how your hands and feet are now?', dom:'dg', why:'Holds the explanation until the history is updated' },
      { phase:'Data gathering', clock:'1–5 min', who:'pt', text:'Same. Puffy knuckles, over an hour to loosen up in the morning, and my feet feel like pebbles.' },
      { who:'dr', text:'How is it affecting work and home? Any tiredness, fever, rashes, dry or red eyes, psoriasis, bowel problems or back pain?', dom:'dg', why:'Function plus systemic and other inflammatory arthritis features' },
      { who:'pt', text:'I’ve dropped my scissors and cut down to four days — I’m self-employed. Tired. None of the others.' },
      { who:'dr', text:'What are you taking for the pain? And can I ask about periods and contraception — it affects which treatments are safe.', dom:'dg', why:'Medicines and the pregnancy question, with a reason' },
      { who:'pt', text:'Ibuprofen, 400 three times a day. We stopped the pill three months ago — we’re trying. My period’s five days late.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'Thank you for telling me — that’s really important. About the results: the CCP test is useful when it’s positive, but about a third of people with rheumatoid arthritis have a negative one. Your inflammation markers are high, and the X-ray shows early changes in two joints. Putting it together, I think this is most likely early rheumatoid arthritis.', dom:'ro', why:'Honest correction in plain language' },
      { who:'pt', text:'Will I end up like my nonna? Her hands were like claws.' },
      { who:'dr', text:'That must have been hard to watch. Treatment now is very different — starting early, which is where you are, means most people keep their hands working well. That’s why I want you seen quickly.', dom:'ro', why:'Responds to the fear with realistic hope' },
      { phase:'Plan', clock:'8–11 min', who:'dr', text:'I’m referring you urgently to rheumatology — usually seen within three weeks. Today, please do a pregnancy test, stop the ibuprofen and use paracetamol, and start folic acid 400 micrograms a day.', dom:'cm', why:'Urgent referral and pregnancy-safe interim plan' },
      { who:'pt', text:'Does this mean I can’t have a baby? I read the drugs cause birth defects.' },
      { who:'dr', text:'No. Some medicines, like methotrexate, aren’t used when trying for a baby, but others are safe in pregnancy. I’ll put in the letter that you’re trying to conceive so they plan around it. I’ll also refer you to hand therapy and an occupational therapist for work.', dom:'cm', why:'Accurate reassurance; pregnancy plan in the referral; function' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'If one joint becomes hot and very swollen with a fever, or the pain suddenly gets much worse, contact us the same day. Let me know the pregnancy test result. What will you do when we finish?', dom:'ro', why:'Safety-net and teach-back' },
      { who:'pt', text:'Pregnancy test, stop ibuprofen, paracetamol, folic acid — and wait for the rheumatology letter. And you’ll tell them about the baby.' }
    ],
    kb:{
      social:[
        { h:'Self-employment', t:'A chair-renting hairdresser has no sick pay; reduced grip directly reduces income. Ask, and offer fit notes, OT and benefits signposting.' },
        { h:'Family stories', t:'A relative’s severe disability often shapes how people hear a diagnosis. Naming it and contrasting modern care helps engagement.' }
      ],
      legal:[
        { h:'Accessing results online', t:'Patients increasingly see results before the clinician explains them; ask what they have read before explaining.' }
      ],
      professional:[
        { h:'Referral quality', t:'A good referral includes the results, erosions, duration, and the pregnancy plan, so the rheumatologist can choose treatment at the first visit.' },
        { h:'Prescribing safely in women of child-bearing potential', t:'Ask about contraception and pregnancy plans before advising NSAIDs or teratogenic drugs.' }
      ],
      community:[
        { h:'Support', t:'National Rheumatoid Arthritis Society (NRAS) information on RA and pregnancy; Versus Arthritis; Access to Work for workplace adaptations.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Hot, swollen single joint with fever (septic arthritis)','Systemic features — fever, weight loss, rash (consider connective tissue disease)','Red painful eye'],
        psychosocial:['Self-employed hairdresser — income','Trying to conceive; late period','Grandmother’s disability'],
        ice:['Idea: negative test means no RA','Concern: baby; hands like her nonna’s','Expectation: stronger painkillers'],
        core:['Duration 10 weeks; MCPs and MTPs','Morning stiffness 75 minutes','Ibuprofen 400 mg three times a day']
      },
      diagnosis:'Probable early rheumatoid arthritis (inflammatory, erosive, RF weakly positive, anti-CCP negative), in a woman trying to conceive with a late period on regular NSAIDs.',
      diagnosisLay:'“Your joints are inflamed and starting to be affected — most likely early rheumatoid arthritis. The negative test doesn’t rule it out. The good news is we’ve caught it early.”',
      management:{
        reflectIce:'“You hoped the negative test meant this wasn’t rheumatoid, and you’re worried about having a baby and about your nonna’s hands. Early treatment protects your hands, and the specialists can plan treatment that works with a pregnancy.”',
        psychosocial:'OT and hand therapy for work; fit note if needed; Dan involved if she wishes.',
        sharedPlan:['Urgent rheumatology referral (within 3 weeks), including pregnancy plans','Pregnancy test today','Stop ibuprofen; paracetamol','Folic acid 400 micrograms daily','Hand therapy and occupational therapy'],
        safetyNet:['Hot swollen single joint with fever — same day','New red painful eye or rapid worsening — call','Positive pregnancy test — tell us and book antenatal care']
      }
    },
    links:[
      { ic:'💠', t:'Rheumatoid arthritis', s:'Management protocol', href:'management/rheumatoid-arthritis.html' },
      { ic:'💠', t:'Infertility', s:'Management protocol', href:'management/infertility.html' }
    ],
    pitfalls:{
      intro:'A results station with a trap in the patient’s first sentence and a second trap she does not volunteer.',
      items:[
        { dom:'dg', fail:'Agrees that a negative anti-CCP is reassuring, or reads the X-ray as “mild wear and tear”.', why:'Seronegative RA is common; early erosions mean active, damaging disease.', fix:'Interpret the whole packet with the clinical picture: synovitis, morning stiffness, inflammatory markers, erosions.' },
        { dom:'cm', fail:'Recommends a stronger NSAID (or naproxen with a PPI) without asking about pregnancy.', why:'She may be pregnant and is trying to conceive; NSAIDs may reduce fertility and are avoided in pregnancy.', fix:'Ask about contraception and periods before prescribing; pregnancy test; paracetamol meanwhile.' },
        { dom:'ro', fail:'Says “You’ll need methotrexate, so you’ll have to put the baby on hold.”', why:'Inaccurate and devastating; treatment choices are made by the specialist around her plans.', fix:'Explain that pregnancy-compatible options exist and that you will tell rheumatology.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Ask what she made of the results.' },
      { t:'1–5', h:'Update history', d:'Joints, stiffness, function, systemic features; medicines; periods and pregnancy.' },
      { t:'5–8', h:'Explain results', d:'Negative anti-CCP does not exclude RA; erosions and inflammation; respond to nonna fear.' },
      { t:'8–11', h:'Plan', d:'Urgent referral with pregnancy plan; pregnancy test; stop NSAID; folic acid; hand therapy and OT.' },
      { t:'11–12', h:'Close', d:'Safety-net; teach-back.' }
    ],
    wordPics:{
      clearFail:'Reassures that the negative anti-CCP rules out RA, advises more ibuprofen or naproxen, no urgent referral, never asks about pregnancy.',
      fail:'Refers to rheumatology but routinely, or gives NSAID advice without a pregnancy question, or leaves her believing treatment means no baby.',
      pass:'Interprets the results correctly; urgent referral; finds the pregnancy plan; pregnancy test, stop NSAID, folic acid; mentions pregnancy-compatible treatment; safety-net.',
      clearPass:'All of the Pass with real warmth: starts from what she read online, corrects it gently, contrasts her nonna’s era with early treatment today, writes the pregnancy plan into the referral, addresses her income, and closes with teach-back.'
    },
    avoid:[
      { dont:'“The main test was negative, so it’s probably not rheumatoid.”', instead:'“A negative CCP doesn’t rule it out — the other results and the X-ray point towards early rheumatoid arthritis.”', why:'Seronegative disease is common.' },
      { dont:'“Take naproxen twice a day with omeprazole.”', instead:'“Before I suggest anything stronger — is there any chance you could be pregnant?”', why:'NSAIDs and pregnancy.' },
      { dont:'“These drugs aren’t safe in pregnancy, so you’ll have to wait.”', instead:'“Some treatments are safe in pregnancy — the rheumatologists will plan around you.”', why:'Accurate and keeps hope.' }
    ]
  });

  /* ===== t5. PSA request after a brother’s diagnosis — and a genetics letter — video ===== */
  C.push({
    id:'psa-brca2-brother',
    title:"“I’d like a PSA test, please — my brother’s just been diagnosed.”",
    type:'video', duration:12,
    meta:{ age:49, sex:'M',
      setting:'Video — routine appointment requested by the patient.',
      system:'Urology / Health promotion — a request for a PSA blood test',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Long-term conditions & cancer','Investigations & results','Professional & ethical'], type:'video', thirdParty:false }
    },
    ceg:['Long-term conditions & cancer','Investigations & results','Professional & ethical'],
    brief:'Mr Rhys Llewellyn, 49, electrician, asks for a PSA test. His brother Gareth, 53, was diagnosed four months ago with aggressive prostate cancer. He has no urinary or other symptoms. Hidden agenda: Gareth’s genetic test found a pathogenic BRCA2 variant, and the regional genetics service sent Gareth a “family letter” to share; Rhys has it in a drawer, unread past the first paragraph, because he is frightened — mainly for his daughters, Cerys (22) and Megan (19), and because their mother (his and Gareth’s) died of breast cancer at 58. The candidate should explore why he wants the test, take a family history that uncovers the BRCA2 result and maternal breast cancer, check for symptoms, and give balanced PSA information (Prostate Cancer Risk Management Programme): he can choose to be tested — and with a brother affected he is at higher risk, which strengthens the case — explaining false positives and negatives, overdiagnosis, the MRI-first pathway and biopsy risks; advice to avoid ejaculation and vigorous exercise for 48 hours beforehand. Answer the screening question accurately: there is no population screening programme, and PSA for BRCA2 carriers is not a UK National Screening Committee recommendation; specialist high-risk guidance (for example ESMO 2022 and risk-stratified high-risk pathways) offers male BRCA2 carriers annual PSA from age 40. The key action is a referral to clinical genetics for predictive BRCA2 testing using the family letter (with Gareth’s consent to share his result, which the letter implies). If he carries the variant, it also affects his own risk of male breast and pancreatic cancer and gives each daughter a 50% chance of carrying it — whether they test is their own decision, from 18, with genetic counselling. Respect his pace; offer the PSA test now if he wishes, and follow-up.',
    stem:{
      name:'Rhys Llewellyn', age:'49-year-old man',
      pmh:['No significant past history','Mild hypertension on the problem list (lifestyle-managed; BP 132/84 six months ago)'],
      meds:['No regular medicines'],
      allergy:'No known drug allergies',
      recent:'No consultations in the last 18 months. Family history recorded in 2015: “Mother — breast cancer, died aged 58.” No PSA on record.',
      reason:'Routine video appointment — “PSA test request”.'
    },
    script:{
      opening:"“Hiya, doctor. I’d like a PSA test, please. My brother’s just been diagnosed with prostate cancer.”",
      facts:[
        { topic:'Your brother', text:"“Gareth — he’s 53. Found four months ago. They said it’s an aggressive type. He’s having hormone injections and radiotherapy.”" },
        { topic:'Symptoms (if asked)', text:"No problems passing water — no getting up at night, good flow, no dribbling, no blood in urine or semen, no erection problems, no back or bone pain, no weight loss, no tiredness." },
        { topic:'Family history (if asked about other cancers)', text:"“Mam had breast cancer — she died at 58. Her sister had something in the ovaries, I think.” No one else known with prostate or pancreatic cancer. Dad died of a heart attack at 70." },
        { topic:'Genetic testing (only if asked whether Gareth has had any genetic tests, or whether there is anything else about the family)', text:"Pause. “They tested Gareth’s genes. He’s got the BRCA thing — BRCA2. The hospital sent him a letter for the family. He gave me a copy. It’s… in a drawer. I read the first bit and put it away.”" },
        { topic:'Your daughters (only when BRCA or genes come up)', text:"“That’s what’s killing me. I’ve got two girls — Cerys is 22, Megan’s 19. If I’ve got it, have they got it? I lost my mam to breast cancer. I can’t…” Become emotional." },
        { topic:'What you know about PSA (if asked)', text:"“It’s a blood test that finds prostate cancer. Gareth says if he’d had it earlier they’d have caught it sooner.”" },
        { topic:'Exercise and recent activity (if asked)', text:"You cycle to work most days — about 10 miles." },
        { topic:'Social', text:"Married to Siân. Self-employed electrician. Never smoked, drinks about 10 units a week. Plays rugby touch at weekends." },
        { topic:'Question to ask', text:"“Why isn’t there screening for this, like there is for breast cancer? It’s the most common cancer in men.”" },
        { topic:'Role-player direction', text:'Be matter-of-fact and practical at first — you want “just the test”. Only mention the genetics letter if asked about genetic tests or “anything else in the family”. When the daughters come up, become tearful and go quiet. If the doctor pushes you hard to contact the daughters now, say: “I’m not ready to tell them yet.” If the doctor respects that and offers to help you take it step by step, agree to a genetics referral. You do want the PSA test after hearing the pros and cons.' }
      ],
      ice:{
        ideas:'“A PSA test will tell me if I’ve got it — catch it early.”',
        concerns:'HIDDEN AGENDA — his brother carries a BRCA2 variant and the genetics family letter is unread in a drawer; he is terrified of passing it to his daughters, having lost his mother to breast cancer.',
        expectations:'A PSA blood form today.'
      },
      cues:[
        '“Aggressive type.” — Gareth’s cancer may be inherited.',
        '“Mam had breast cancer.” — family pattern suggesting BRCA.',
        '“It’s in a drawer.” — avoidance driven by fear for his daughters.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Explores why he wants the test now and what he understands about PSA; screens for lower urinary tract and other symptoms (haematuria, haematospermia, erectile dysfunction, bone pain, weight loss)' },
      { dom:'dg', text:'Takes a three-generation family history: brother’s age and type of cancer, mother’s breast cancer at 58, aunt’s ovarian cancer — and asks about genetic testing, uncovering the BRCA2 result and the unread family letter' },
      { dom:'cm', text:'Gives balanced PSA information: possible benefit of earlier detection; false positives and negatives; overdiagnosis and overtreatment; MRI before biopsy; biopsy risks — and his higher risk because of an affected brother and possible BRCA2' },
      { dom:'cm', text:'If he chooses testing: arranges PSA with advice to avoid ejaculation and vigorous exercise including long cycling for 48 hours and to defer if he has a urine infection; offers examination; explains follow-up and urgent referral if raised' },
      { dom:'cm', text:'Refers to clinical genetics for predictive BRCA2 testing using the family letter; explains the implications if positive (annual PSA from 40 under specialist high-risk guidance, male breast and pancreatic cancer risk) and that relatives, including his daughters, can be referred for counselling and testing when they choose' },
      { dom:'cm', text:'Answers the screening question accurately (no population programme and no UK NSC recommendation; specialist high-risk guidance offers male BRCA2 carriers annual PSA from 40) and safety-nets for urinary symptoms, haematuria, bone pain or weight loss' },
      { dom:'ro', text:'Responds with empathy to his grief and fear for his daughters; does not pressure him to tell them now; respects confidentiality of the brother’s information' },
      { dom:'ro', text:'Shares the PSA decision rather than simply ordering or refusing it, and agrees follow-up' }
    ],
    worked:[
      { lbl:'Ask what prompted it', txt:'“What’s made you think about the PSA test now?” … “I’m so sorry about Gareth. How is he doing?”' },
      { lbl:'Family history that matters', txt:'“Has anyone else in the family had cancer — on either side — including breast, ovary or pancreas? And has Gareth been offered any genetic tests?”' },
      { lbl:'The letter', txt:'“That letter is really important — it means the genetics team can test you for the same gene change quite quickly. It must have been hard to read. What worries you most about it?”' },
      { lbl:'Balanced PSA explanation', txt:'“A PSA test can find some cancers earlier. But about three in four men with a raised PSA don’t have cancer, and about one in seven with cancer have a normal result. If it’s raised, the next step is usually an MRI scan, and sometimes a biopsy. Some cancers found are slow-growing and would never have caused harm, but finding them can lead to treatment with side effects.”' },
      { lbl:'The daughters, at his pace', txt:'“If you do carry it, each of your daughters would have a one-in-two chance of carrying it too. That’s their decision to make, as adults, with support — and the genetics team will help you work out when and how to talk to them. You don’t have to do that today.”' },
      { lbl:'Screening question', txt:'“There’s no national programme because PSA isn’t accurate enough for everyone. But for men who carry a BRCA2 change, specialist guidance advises a PSA test every year from 40 — exactly why the genetic test matters for you.”' }
    ],
    learning:'An asymptomatic man asking for a PSA test is entitled to one after informed discussion (Prostate Cancer Risk Management Programme), and his risk changes the balance: a first-degree relative with prostate cancer, Black ethnicity and BRCA2 variants all increase risk, and BRCA2 is linked to earlier, more aggressive disease. The most valuable question in this consultation is about genetic testing in the family. A pathogenic BRCA2 variant in a brother, with maternal breast cancer and possible ovarian cancer, means Rhys has a 50% chance of carrying it; predictive testing through clinical genetics is straightforward when the familial variant is known. A positive result would mean annual PSA from age 40 under specialist high-risk guidance (for example ESMO 2022 and risk-stratified high-risk pathways; this is not a UK NSC population screening recommendation), and has implications for male breast and pancreatic cancer and for his children, who can choose testing from 18 with counselling. The GP role is to recognise the pattern, refer, support decisions at the patient’s pace, and avoid either refusing the PSA or ordering it without discussion.',
    knowledge:{
      guideline:'GOV.UK — Prostate cancer risk management programme: PSA testing, advice for men without symptoms (updated 2024) · ESMO prostate cancer clinical practice guideline (2022, international: annual PSA from 40 for BRCA2 carriers) · UK NSC (no population prostate screening programme) · NICE NG12 Suspected cancer: recognition and referral (2015) · NICE CG164 Familial breast cancer (2013, updated 2023) · NICE NG131 Prostate cancer: diagnosis and management (2019, updated 2021)',
      summary:'Informed choice about PSA for a higher-risk man, and — the bigger win — genetics referral for predictive BRCA2 testing, with implications for PSA surveillance and for his daughters, handled at his pace.',
      points:[
        { h:'Who is at higher risk', t:'Age over 50; Black ethnicity (about 1 in 4 lifetime risk); first-degree relative with prostate cancer, especially diagnosed young; BRCA2 (and to a lesser degree BRCA1) variants; Lynch syndrome. Under PCRMP, men at higher risk may reasonably be tested from 45.' },
        { h:'PSA information to give', t:'About 3 in 4 men with a raised PSA do not have cancer; about 1 in 7 men with prostate cancer have a normal PSA. Overdiagnosis of slow-growing cancers can lead to treatment harms (incontinence, erectile dysfunction). Positive results lead to multiparametric MRI, then biopsy if indicated (infection, bleeding, pain).' },
        { h:'Doing the test', t:'Avoid ejaculation and vigorous exercise (including long cycle rides) for 48 hours; defer for at least 6 weeks after a urinary infection or prostatitis. Interpret with age-specific thresholds; a raised PSA in this context leads to suspected cancer pathway referral (NICE NG12).' },
        { h:'Screening', t:'No UK population screening programme, and PSA for BRCA2 carriers is not a UK NSC screening recommendation. Male BRCA2 carriers: specialist high-risk guidance (for example ESMO 2022 and risk-stratified high-risk pathways) offers annual PSA from age 40, arranged through genetics or specialist services.' },
        { h:'BRCA2 cascade testing', t:'When a familial variant is known, at-risk relatives are referred (often directly with the family letter) to clinical genetics for counselling and predictive testing. Each first-degree relative has a 50% chance. Men with BRCA2: higher risk of aggressive prostate cancer, male breast cancer and pancreatic cancer. Testing of children is deferred until 18 and is their choice.' },
        { h:'Confidentiality', t:'The brother’s result belongs to him; here he has shared the family letter intentionally. Use it, but do not contact other relatives without consent.' },
        { h:'Marking edge', t:'The Clear pass candidate asks about genetic testing, finds the letter, gives balanced PSA information with numbers, and manages the daughters’ question with compassion and without pressure.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Mr Llewellyn, I’m Dr Patel. Can you see and hear me? How can I help today?', dom:'ro', why:'Open start' },
      { who:'pt', text:'I’d like a PSA test, please. My brother’s just been diagnosed with prostate cancer.' },
      { who:'dr', text:'I’m really sorry to hear that. How is he — and how are you doing with it?', dom:'ro', why:'Acknowledges the news before the request' },
      { phase:'Data gathering', clock:'1–5 min', who:'pt', text:'He’s having treatment. They said it’s aggressive. I just want to know where I stand.' },
      { who:'dr', text:'That makes sense. Any problems passing water — getting up at night, weak flow, blood in urine or semen? Any back or bone pain, or weight loss?', dom:'dg', why:'Symptoms that would change the pathway' },
      { who:'pt', text:'None. I feel fine.' },
      { who:'dr', text:'Has anyone else in the family had cancer — breast, ovary, pancreas, either side? And has Gareth been offered genetic tests?', dom:'dg', why:'Targeted family history and genetics' },
      { who:'pt', text:'Mam had breast cancer — died at 58. Her sister had something in the ovaries. And… they found Gareth’s got BRCA2. There’s a letter for the family. It’s in a drawer.' },
      { who:'dr', text:'Thank you for telling me. That letter is important. It sounds like it was hard to read — what worries you most?', dom:'ro', why:'Explores the emotion behind the avoidance' },
      { who:'pt', text:'My girls. If I’ve got it, have they? I lost my mam to this.' },
      { phase:'Explanation', clock:'5–9 min', who:'dr', text:'That’s a huge thing to carry. You each have a one-in-two chance of having the same gene change, and the genetics team can test you using Gareth’s result. If you have it, your daughters could choose to be tested as adults, with support — but that’s their decision and there’s no rush today.', dom:'cm', why:'Accurate risk, autonomy for the daughters, no pressure' },
      { who:'dr', text:'About the PSA: it can find some cancers early, but most men with a raised PSA don’t have cancer, and some cancers are missed. If it’s raised you’d have an MRI and possibly a biopsy. With Gareth’s diagnosis your risk is higher, so testing is reasonable if you want it.', dom:'cm', why:'Balanced PSA information' },
      { who:'pt', text:'Why isn’t there screening for this, like breast cancer?' },
      { who:'dr', text:'Because PSA isn’t accurate enough for every man. But men who carry a BRCA2 change are advised to have a PSA test every year from 40 — which is why your genetic test matters.', dom:'cm', why:'Accurate, current answer' },
      { phase:'Plan', clock:'9–11 min', who:'dr', text:'So: I’ll refer you to genetics — could you send me a photo of that letter? I’ll arrange the PSA; avoid ejaculation and your cycle to work for 48 hours before. Would you like me to examine your prostate too when you come for the blood test?', dom:'cm', why:'Genetics referral, PSA with preparation advice, examination offered' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'I’ll call you with the result and we’ll talk again. If you notice problems passing water, blood in your urine, or bone pain, contact us sooner. What will you take away from today?', dom:'ro', why:'Follow-up, safety-net, teach-back' },
      { who:'pt', text:'Send you the letter, genetics referral, PSA next week — no cycling or sex for two days before. And I don’t have to talk to the girls yet.' }
    ],
    kb:{
      social:[
        { h:'Grief and family memory', t:'His mother’s death and his brother’s diagnosis are linked in his mind; acknowledging both helps him act rather than avoid.' },
        { h:'Telling children', t:'Parents often feel guilt about possible inheritance. Genetic counsellors support the timing and wording of family conversations.' }
      ],
      legal:[
        { h:'Genetic information', t:'A relative’s genetic result is confidential, but family letters are designed to be shared. Insurance: under the Code on Genetic Testing and Insurance, predictive test results need not be disclosed for most policies below the financial limits.' }
      ],
      professional:[
        { h:'Shared decision-making', t:'GMC guidance on decision-making and consent (2020) supports discussing benefits, risks and uncertainty, and respecting the patient’s choice.' }
      ],
      community:[
        { h:'Support', t:'Prostate Cancer UK specialist nurses; regional clinical genetics service; BRCA support charities.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Lower urinary tract symptoms, haematuria, haematospermia','Bone or back pain, weight loss','Erectile dysfunction of new onset'],
        psychosocial:['Grief — mother’s death','Fear for daughters','Self-employed'],
        ice:['Idea: PSA catches it early','Concern: daughters and BRCA2','Expectation: PSA form'],
        core:['Brother 53, aggressive cancer, BRCA2','Mother breast cancer at 58; aunt ovarian','Cycles to work']
      },
      diagnosis:'Asymptomatic man at increased risk of prostate cancer (affected brother) with a probable familial BRCA2 variant — informed PSA decision and genetics referral for predictive testing.',
      diagnosisLay:'“You don’t have any signs of prostate problems, but your risk is higher than average because of Gareth — and the gene change found in him may run in the family.”',
      management:{
        reflectIce:'“You came for a PSA test and you can have one, but the gene letter in your drawer may be even more important — for you, and later, if they choose, for your girls.”',
        psychosocial:'Go at his pace; genetic counselling for family communication; Siân involved if he wishes.',
        sharedPlan:['Clinical genetics referral with the family letter','PSA test (48 hours without ejaculation or vigorous cycling); offer examination','Results call; urgent referral if raised','If BRCA2 positive — annual PSA from 40 (specialist high-risk pathway) and advice on other cancer risks'],
        safetyNet:['Urinary symptoms, haematuria, bone pain or weight loss — contact us','Follow-up call with results']
      }
    },
    links:[
      { ic:'💠', t:'Benign prostatic enlargement', s:'Management protocol', href:'management/benign-prostate-enlargement.html' },
      { ic:'💠', t:'Breast cancer', s:'Management protocol', href:'management/breast-cancer.html' }
    ],
    pitfalls:{
      intro:'Candidates focus on PSA pros and cons and never ask the question that opens up the real agenda.',
      items:[
        { dom:'dg', fail:'Asks only “any family history of prostate cancer?” and stops at the brother.', why:'Misses the maternal breast and ovarian cancer and the BRCA2 result — the most actionable information in the consultation.', fix:'Ask about breast, ovarian and pancreatic cancer on both sides and about genetic testing in relatives.' },
        { dom:'cm', fail:'Refuses PSA (“there’s no screening programme”) or orders it without discussion.', why:'He is entitled to an informed choice, and his risk is higher.', fix:'Balanced information, then his decision.' },
        { dom:'ro', fail:'Insists he contacts his daughters today or offers to ring them.', why:'It overrides his pace and their autonomy and risks breaking trust.', fix:'Explain the implications, offer genetic counselling support, and leave the timing with him.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Acknowledge the brother’s diagnosis.' },
      { t:'1–5', h:'History', d:'Symptoms; three-generation family history; genetic testing — the letter.' },
      { t:'5–9', h:'Explain', d:'BRCA2 implications at his pace; balanced PSA information; screening question.' },
      { t:'9–11', h:'Plan', d:'Genetics referral, PSA with preparation, examination offer.' },
      { t:'11–12', h:'Close', d:'Results follow-up, safety-net, teach-back.' }
    ],
    wordPics:{
      clearFail:'Orders a PSA with no discussion or refuses it; no family history beyond the brother; BRCA2 never found; no follow-up.',
      fail:'Gives reasonable PSA counselling but misses the genetics letter, or finds it but gives inaccurate information about the daughters’ risk or the screening position.',
      pass:'Symptoms and full family history; finds the BRCA2 letter; balanced PSA information and test arranged with preparation; genetics referral; accurate screening answer; safety-net.',
      clearPass:'All of the Pass with sensitivity: names his grief, explains the 50% risk and the daughters’ autonomy without pressure, uses numbers for PSA accuracy, and agrees a clear next-step plan with teach-back.'
    },
    avoid:[
      { dont:'“There’s no screening programme, so we don’t really recommend it.”', instead:'“You can have the test — let me explain what it can and can’t tell you, especially with your brother’s history.”', why:'Informed choice is his right.' },
      { dont:'“You need to tell your daughters straight away.”', instead:'“The genetics team can help you decide when and how to talk to them.”', why:'Respects his pace and their autonomy.' },
      { dont:'“A normal PSA means you’re in the clear.”', instead:'“A normal result is reassuring but doesn’t rule cancer out completely.”', why:'PSA has false negatives.' }
    ]
  });

  /* ===== t6. High blood pressure in A&E, alcohol dependence, insecure housing — video ===== */
  C.push({
    id:'ae-bp-alcohol',
    title:"“The A&E doctor said my blood pressure’s sky high — I just need the tablets.”",
    type:'video', duration:12,
    meta:{ age:52, sex:'M',
      setting:'Video — routine appointment booked after an A&E attendance; the patient is calling from a hostel.',
      system:'Cardiovascular / Inclusion health — follow-up of a raised blood pressure found in A&E',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Health disadvantage & vulnerabilities','Mental health & addiction','Long-term conditions & cancer'], type:'video', thirdParty:false }
    },
    ceg:['Health disadvantage & vulnerabilities','Mental health & addiction','Long-term conditions & cancer'],
    brief:'Mr Gary Whitfield, 52, attended A&E three days ago after falling while drunk; a 6 cm right forearm laceration was sutured (removal at 10 days). His BP was 172/104, 166/102 and 164/100 while in pain and intoxicated; A&E advised GP review and alcohol support. A community alcohol service letter four months ago discharged him after three missed appointments. He wants BP tablets today because his mother had a disabling stroke at 60. He drinks eight 500 mL cans of 5.5% lager a day (about 22 units a day, over 150 a week), with morning shakes relieved by drinking (dependence; no previous seizures or delirium tremens); smokes 25 roll-ups a day; eats poorly. He has lived in a council-placed hostel for 6 weeks, 9 miles from the practice, after a relationship breakdown; he has a pay-as-you-go phone and no money for travel. Hidden agenda: he never received the alcohol service letters — they went to his ex-partner’s address, which is still on the GP record — and he is ashamed to say he wants to cut down because his daughter is expecting her first baby and has said he cannot be around the baby drunk. Tasks: explain that hypertension cannot be diagnosed from readings taken when in pain and intoxicated and needs confirmation by ambulatory or home monitoring (NICE NG136), check for symptoms or signs needing same-day action (none), and find workable access: the NHS community pharmacy blood pressure check service near his hostel (clinic and ambulatory readings), or a practice-loaned home monitor; bloods at the hospital phlebotomy near the hostel; urine ACR and ECG at the suture-removal visit. Take an alcohol history (AUDIT, dependence), advise against stopping suddenly, offer referral or self-referral back to the alcohol service with his correct address and phone, oral thiamine, and very brief smoking advice; update his address; offer social prescriber or housing support; safety-net for hypertensive emergency symptoms and withdrawal.',
    stem:{
      name:'Gary Whitfield', age:'52-year-old man',
      pmh:['Alcohol-use disorder (recorded 2024)','Fractured left wrist after a fall (2023)'],
      meds:['No regular medicines'],
      allergy:'No known drug allergies',
      recent:'A&E discharge summary, 3 days ago: “Fall while intoxicated (breath alcohol not measured; clinically intoxicated). 6 cm laceration right forearm, cleaned and sutured — removal by practice nurse at 10 days. No head injury. BP 172/104, 166/102, 164/100 during attendance; pulse 96. Please review BP in primary care. Advised to access alcohol support.” Community Alcohol Service letter, 4 months ago: “Discharged after three non-attended appointments; letters sent to registered address. Welcome to self-refer.” Registered address: 14 Larch Close (unchanged since 2019). Last BP in practice: 142/88 (2022). No bloods in the last 3 years.',
      reason:'Video appointment — “blood pressure tablets”.'
    },
    script:{
      opening:"“Alright, doc. The A&E doctor said my blood pressure was sky high and I need to get tablets off you. So can you sort that today? I don’t want a stroke like my mam.”",
      facts:[
        { topic:'The fall', text:"“I’d had a skinful, tripped on the kerb outside the hostel. Cut my arm. They stitched it.” No head injury, no blackout before falling, no chest pain or palpitations." },
        { topic:'The wound (if asked)', text:"“It’s fine — bit sore. No pus, not red.” No fever." },
        { topic:'BP symptoms (answer no if asked)', text:"No headaches, no blurred vision, no chest pain, no breathlessness, no weakness or numbness, no slurred speech, no blood in your urine." },
        { topic:'Drinking (if asked how much)', text:"“Eight cans a day. The big ones, Stella-type.” If asked about mornings: “I get the shakes when I wake up. A can sorts it. First one’s about eight.” If asked about stopping before: “I ran out once — sweating, heart racing, couldn’t sleep. Never had a fit.” No hallucinations." },
        { topic:'The alcohol service (only if asked why you missed appointments)', text:"Look away. “I never got any letters. They must’ve gone to Larch Close — that’s my ex’s. I left in the summer.”" },
        { topic:'Why now (only if asked whether you want to cut down, or what matters to you)', text:"“My daughter, Jade — she’s having a baby in March. She said I can’t be round the baby if I’m drinking. I want to be a grandad. Properly.” Voice cracks." },
        { topic:'Home and money', text:"“I’m in a hostel on the Eastfield estate — the council put me there six weeks ago. Shared kitchen. I’m on Universal Credit. I can’t get to you — it’s nine miles and the bus is a fiver return. I’ve no money for that.” If asked about the hospital: “The General’s just round the back of the hostel.” If asked about a pharmacy: “There’s a chemist on the parade, two minutes away.”" },
        { topic:'Home BP monitor (if suggested)', text:"“I can’t afford one of them. How am I meant to do that?”" },
        { topic:'Smoking, diet, drugs', text:"Roll-ups, about 25 a day for 35 years. Eats “crisps, pies, whatever”. No drugs." },
        { topic:'Family history', text:"Mam had a stroke at 60 — “couldn’t talk or walk after, died in a home.” Dad had a heart attack at 64." },
        { topic:'Mood (if asked)', text:"“Bit low since the split. Not suicidal — I’ve got the baby to look forward to.”" },
        { topic:'Role-player direction', text:'Be friendly but insistent about tablets. If the doctor does not prescribe today, repeat once: “Doc, I just need a blood pressure tablet.” Accept a clear explanation. You only reveal the letters and Jade’s baby if the doctor asks about the missed appointments or about what matters to you, and you are embarrassed. If the doctor lectures you about drinking, become defensive and short.' }
      ],
      ice:{
        ideas:'“My blood pressure’s high and tablets will fix it.”',
        concerns:'HIDDEN AGENDA — he never received the alcohol service letters because the practice still has his ex-partner’s address; he is ashamed. He wants to cut down because his daughter has said he cannot be around her baby if he is drinking. Underneath is a real fear of a stroke like his mother’s.',
        expectations:'A prescription for BP tablets today.'
      },
      cues:[
        '“I don’t want a stroke like my mam.” — fear to acknowledge and use.',
        '“I can’t get to you.” — access barriers that will sink any standard plan.',
        '“I never got any letters.” — an out-of-date address, not disinterest.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Reviews the A&E readings in context (pain, intoxication or withdrawal), checks for symptoms of hypertensive emergency or target-organ damage, and checks the wound' },
      { dom:'dg', text:'Takes a full alcohol history: quantity in units, pattern, morning drinking and shakes, previous withdrawal, seizures or delirium tremens, and screens for dependence (AUDIT or similar)' },
      { dom:'dg', text:'Explores social circumstances: housing, address, money, travel, phone access, mood; discovers the letters went to the wrong address and what motivates him to change' },
      { dom:'cm', text:'Explains that BP tablets are not started on these readings and that diagnosis needs confirmation (ambulatory or home monitoring); arranges accessible confirmation — community pharmacy BP check service near the hostel or a loaned home monitor' },
      { dom:'cm', text:'Plans cardiovascular assessment without extra travel: bloods (U&E, HbA1c, lipids, LFTs including GGT, FBC) at the nearby hospital phlebotomy, urine ACR and ECG combined with the suture-removal visit, QRISK3 when results are in' },
      { dom:'cm', text:'Advises not to stop drinking suddenly, offers referral or self-referral to the alcohol service with his correct contact details, oral thiamine, smoking cessation offer, and updates his address; offers social prescriber or housing support' },
      { dom:'ro', text:'Acknowledges his fear of stroke and his wish to be a grandad; avoids lecturing or judgement about drinking or housing' },
      { dom:'ro', text:'Builds a realistic plan with him around his constraints, safety-nets (stroke, chest pain, severe headache, withdrawal fits or confusion) and agrees follow-up by phone or video' }
    ],
    worked:[
      { lbl:'Respect the request, then explain', txt:'“Your mum’s stroke is a really good reason to take this seriously, and so am I. The problem is that blood pressure taken when you’re in pain and had a drink can be much higher than your usual. If I start tablets on that, you might end up on medicine you don’t need — or the wrong dose.”' },
      { lbl:'Make confirmation possible', txt:'“You don’t need to buy a machine. The chemist on your parade does free blood pressure checks for the NHS, and can fit a 24-hour monitor. Or we can lend you one.”' },
      { lbl:'Ask about the missed appointments without blame', txt:'“The alcohol service said you missed some appointments — what happened?”' },
      { lbl:'Find the motivation', txt:'“What would be different for you if you cut down?”' },
      { lbl:'Safety about stopping', txt:'“Please don’t stop suddenly — with morning shakes, stopping overnight can cause fits. The alcohol team can help you cut down safely, and I’ll start a vitamin called thiamine to protect your brain and nerves.”' },
      { lbl:'Bundle the visits', txt:'“When you come in to have your stitches out, the nurse can do your blood pressure, a heart tracing and a urine test at the same time — one trip. And the blood test can be done at the General, right behind the hostel.”' }
    ],
    learning:'A single set of raised readings in A&E, taken when someone is in pain and intoxicated or withdrawing, does not diagnose hypertension. NICE NG136 requires confirmation with ambulatory or home monitoring for clinic readings of 140/90 or above, with same-day referral for readings of 180/120 or above with signs of retinal haemorrhage, papilloedema or life-threatening symptoms. The barrier in this case is access, and the solution is local: the NHS community pharmacy blood pressure check service offers clinic and ambulatory readings for adults over 40, many practices loan home monitors, and tests can be bundled into visits he is already making. Heavy drinking raises BP and is itself a major stroke risk; at over 150 units a week with morning withdrawal symptoms he is likely dependent, so he must not stop abruptly and needs assessment for medically assisted withdrawal, with oral thiamine for a harmful drinker with poor nutrition (NICE CG100 and CG115). Missed appointments in people with insecure housing are often a systems failure — letters to an old address — and checking contact details is a concrete act of inclusion. His wish to be a grandad is the lever for change; the GP’s job is to find it and use it, not to lecture.',
    knowledge:{
      guideline:'NICE NG136 Hypertension in adults: diagnosis and management (2019, updated 2023) · NICE CG115 Alcohol-use disorders: diagnosis, assessment and management of harmful drinking and alcohol dependence (2011) · NICE CG100 Alcohol-use disorders: diagnosis and management of physical complications (2010, updated 2017) · NICE NG209 Tobacco: preventing uptake, promoting quitting and treating dependence (2021) · NHS England — Community Pharmacy Blood Pressure Check Service (2021)',
      summary:'Do not diagnose hypertension from A&E readings; confirm it with accessible monitoring, assess cardiovascular risk with bundled tests, and address alcohol dependence safely — with his real address and his real motivation.',
      points:[
        { h:'Confirming hypertension', t:'Clinic BP 140/90 to 179/119: confirm with ABPM (daytime average) or HBPM (twice daily, two readings each, for at least 4 and ideally 7 days). Stage 1: 135/85 or above; stage 2: 150/95 or above. Investigate for target-organ damage: urine ACR and dipstick for haematuria, HbA1c, U&E and eGFR, lipids, fundi, 12-lead ECG; estimate QRISK3.' },
        { h:'Same-day action', t:'BP 180/120 or above with retinal haemorrhage or papilloedema, or life-threatening symptoms (new confusion, chest pain, heart failure, acute kidney injury) — same-day specialist assessment. Without these, repeat and investigate promptly.' },
        { h:'Access options', t:'NHS Community Pharmacy Blood Pressure Check Service: clinic and ambulatory BP for adults aged 40 and over, results sent to the GP. Practice-loaned validated home monitors. Bloods at a convenient phlebotomy site. Combine tests with existing appointments (suture removal).' },
        { h:'Alcohol dependence', t:'AUDIT 20 or above, or morning drinking to relieve withdrawal, suggests dependence. Do not advise abrupt cessation; refer for assessment and medically assisted withdrawal (community or inpatient if previous seizures or delirium tremens). Prophylactic oral thiamine for harmful or dependent drinkers who are malnourished or at risk. Usual adult dose: thiamine 100 mg three times daily (NICE CG100/SPC; check the SPC, BNF and local formulary; SPC: thiamine).' },
        { h:'Alcohol and BP', t:'Heavy drinking raises BP and stroke risk; reducing intake lowers BP within weeks. Readings during intoxication or withdrawal are unreliable.' },
        { h:'Inclusion health', t:'Check and update address and phone at every contact; flag communication needs; consider letters by text or to a hostel key worker with consent; social prescribers can support housing and benefits.' },
        { h:'Marking edge', t:'The Clear pass candidate holds the line on not prescribing today while making confirmation genuinely achievable, discovers the address error and the grandchild, and plans a safe alcohol pathway without lecturing.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Mr Whitfield, I’m Dr Nwosu. Can you see and hear me? Are you somewhere you can talk?', dom:'ro', why:'Video and privacy check — he is in a hostel' },
      { who:'pt', text:'Yeah, in my room. A&E said my blood pressure’s sky high. I need the tablets — I don’t want a stroke like my mam.' },
      { who:'dr', text:'I’m sorry about your mum — that must have been hard. Let’s work out what’s going on. Can you tell me what happened on the night?', dom:'ro', why:'Acknowledges the fear; open question' },
      { phase:'Data gathering', clock:'1–6 min', who:'pt', text:'Had a skinful, fell on the kerb, cut my arm.' },
      { who:'dr', text:'How’s the arm? And any headaches, blurred vision, chest pain, breathlessness, weakness or numbness?', dom:'dg', why:'Wound and hypertensive emergency screen' },
      { who:'pt', text:'Arm’s fine. None of that.' },
      { who:'dr', text:'Can I ask about drinking — no judgement, it helps me get your blood pressure right. How much in a typical day? Any shakes in the morning?', dom:'dg', why:'Alcohol quantity and dependence, with a reason' },
      { who:'pt', text:'Eight big cans. Shakes when I wake up — a can sorts it. Never had a fit.' },
      { who:'dr', text:'Thanks for being straight with me. The alcohol team said you missed some appointments — what happened there?', dom:'dg', why:'Non-judgemental exploration of non-attendance' },
      { who:'pt', text:'Never got the letters. They’ll have gone to my ex’s — I’m in a hostel now, nine miles from you.' },
      { who:'dr', text:'Then that’s our problem to fix, not yours. Would you want to cut down, if we got the support right?', dom:'ro', why:'Takes responsibility; explores motivation' },
      { who:'pt', text:'My daughter’s having a baby in March. She says I can’t be round it if I’m drinking. I want to be a proper grandad.' },
      { phase:'Explanation', clock:'6–9 min', who:'dr', text:'That’s a brilliant reason. On blood pressure: readings when you’re in pain and had a drink can be much higher than usual, so I won’t start tablets on those alone. We need readings over a day or a week.', dom:'cm', why:'Clear reason for not prescribing today' },
      { who:'pt', text:'Doc, I just need a blood pressure tablet. And I can’t afford a machine.' },
      { who:'dr', text:'You won’t need to buy one. The chemist on your parade can check it free and fit a 24-hour monitor — or we’ll lend you one. Your bloods can be done at the General behind the hostel, and when you come for your stitches the nurse will do a heart tracing and urine test. If it is high, we start tablets straight away.', dom:'cm', why:'Accessible confirmation and bundled investigations' },
      { phase:'Plan', clock:'9–11 min', who:'dr', text:'For drinking — please don’t stop suddenly, that can cause fits. I’ll refer you back to the alcohol team with your new address and mobile, and start thiamine, a vitamin that protects your brain. Cutting down will help your blood pressure too. Would you like help with smoking or with housing — we have a link worker?', dom:'cm', why:'Safe alcohol plan, thiamine, smoking and social support' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'If you get a sudden severe headache, chest pain, weakness, a droopy face or slurred speech — 999. Same if you have a fit or get confused after cutting down. I’ll call you in a week. What’s the plan in your words?', dom:'ro', why:'Safety-net and teach-back' },
      { who:'pt', text:'Chemist for my blood pressure, bloods at the General, stitches and heart test at yours, don’t stop drinking all at once, and you’re sorting the alcohol people with my new address.' }
    ],
    kb:{
      social:[
        { h:'Insecure housing', t:'People in temporary accommodation move often and lose letters, phones and appointments. Text reminders, hostel key workers (with consent) and an up-to-date address reduce missed care.' },
        { h:'Poverty and travel', t:'A £5 bus fare is a barrier on Universal Credit. Bring services to the person — pharmacy, local phlebotomy, combined appointments.' }
      ],
      legal:[
        { h:'Registration and address', t:'People do not need proof of address to register or stay registered with a GP; record a correspondence address that works.' },
        { h:'Driving', t:'If he drives, alcohol dependence must be declared to the DVLA — ask and advise.' }
      ],
      professional:[
        { h:'Non-attendance is information', t:'Labelling people as “did not attend” without checking contact details reinforces exclusion; GMC Good Medical Practice (2024) expects fair, accessible care.' }
      ],
      community:[
        { h:'Support', t:'Community alcohol service (self-referral), local stop smoking service, social prescriber or link worker, hostel support worker, Alcoholics Anonymous and SMART Recovery.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Severe headache, visual disturbance, chest pain, neurological symptoms','Previous withdrawal seizures or delirium tremens','Head injury at the fall'],
        psychosocial:['Hostel 9 miles away; no travel money','Wrong address on record','Daughter’s pregnancy — motivation','Low mood after separation'],
        ice:['Idea: tablets fix it','Concern: stroke like mother','Expectation: prescription today'],
        core:['A&E BP 164–172/100–104 while intoxicated and in pain','About 22 units a day; morning shakes','25 roll-ups a day; poor diet']
      },
      diagnosis:'Raised BP in A&E, unconfirmed (possible hypertension) in a man with alcohol dependence, heavy smoking and high cardiovascular risk; missed care due to an outdated address.',
      diagnosisLay:'“Your blood pressure was high in A&E, but that was when you were hurt and had been drinking. We need to check it properly — and the drinking is the biggest thing pushing your stroke risk up.”',
      management:{
        reflectIce:'“You want tablets because you don’t want a stroke like your mum — and I want to protect you from that too. The quickest safe way is to get proper readings this week, and to get you support with the drinking for you and for the baby.”',
        psychosocial:'Update address and mobile; text reminders; link worker for housing; use the grandchild as motivation.',
        sharedPlan:['Pharmacy BP check service (clinic plus ambulatory) on his parade, or loaned home monitor','Bloods at the hospital phlebotomy: U&E, HbA1c, lipids, LFT and GGT, FBC','Suture removal at the practice day 10: BP, ECG, urine ACR','Re-referral to the alcohol service with correct details; do not stop suddenly; thiamine','Stop smoking offer; social prescriber','Video or phone review in 1 week; QRISK3 and treatment decision when results back'],
        safetyNet:['999: stroke symptoms, chest pain, sudden severe headache','999 or A&E: withdrawal fit, confusion or hallucinations','Wound redness, discharge or fever — call the practice']
      }
    },
    links:[
      { ic:'📋', t:'Hypertension', s:'Case walkthrough', href:'../cases/hypertension.html' },
      { ic:'💠', t:'Hypertension', s:'Management protocol', href:'management/hypertension.html' },
      { ic:'💠', t:'Alcohol — problem drinking', s:'Management protocol', href:'management/alcohol-problem-drinking.html' },
      { ic:'💠', t:'Smoking cessation', s:'Management protocol', href:'management/smoking-cessation.html' }
    ],
    pitfalls:{
      intro:'Two opposite failures: starting amlodipine to satisfy the request, or giving a textbook ABPM plan he cannot possibly follow.',
      items:[
        { dom:'cm', fail:'Prescribes antihypertensives today based on the A&E readings.', why:'Readings during pain and intoxication are unreliable; NICE requires out-of-office confirmation; treatment without baseline bloods and ECG is unsafe.', fix:'Explain why, and make confirmation achievable this week.' },
        { dom:'dg', fail:'Labels him as a non-attender and never asks why he missed the alcohol appointments.', why:'The cause was the practice’s outdated address; the same will happen to every future letter.', fix:'Ask without blame and update contact details during the consultation.' },
        { dom:'cm', fail:'Tells him to stop drinking completely from today.', why:'With morning withdrawal symptoms, abrupt cessation risks seizures and delirium tremens.', fix:'Advise not to stop suddenly; refer for supported withdrawal; thiamine.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Privacy check; acknowledge his mother’s stroke.' },
      { t:'1–6', h:'History', d:'Fall and wound; BP emergency screen; alcohol and dependence; missed appointments; housing; motivation.' },
      { t:'6–9', h:'Explain', d:'Why not tablets today; accessible confirmation.' },
      { t:'9–11', h:'Plan', d:'Bundled tests; alcohol referral with correct details; thiamine; smoking; link worker.' },
      { t:'11–12', h:'Close', d:'Safety-net for stroke and withdrawal; teach-back; review in a week.' }
    ],
    wordPics:{
      clearFail:'Starts amlodipine on the A&E readings, or refuses and simply says “come in for a 24-hour monitor”; no alcohol history; moralises; no safety-net.',
      fail:'Correctly declines to prescribe and explains ABPM, but the plan is impractical (attend the surgery several times, buy a monitor), the address problem is missed, or he is told to stop drinking immediately.',
      pass:'Explains why not today; arranges pharmacy or loaned monitoring; bloods locally; alcohol history with dependence recognised; do not stop suddenly; referral and thiamine; address updated; safety-net.',
      clearPass:'All of the Pass delivered without judgement: finds and uses the grandchild motivation, takes ownership of the address error, bundles tests into existing visits, offers smoking and housing support, and closes with teach-back and a dated review.'
    },
    avoid:[
      { dont:'“I can’t give you tablets, you need a 24-hour monitor from the surgery.”', instead:'“Your local chemist can do the monitor for free — two minutes from you.”', why:'Solves the barrier rather than restating the guideline.' },
      { dont:'“You need to stop drinking.”', instead:'“Please don’t stop suddenly — let’s get you help to cut down safely.”', why:'Abrupt withdrawal is dangerous in dependence.' },
      { dont:'“You missed three appointments with the alcohol team.”', instead:'“What happened with the alcohol team appointments?”', why:'Curious, not accusing — uncovers the address problem.' }
    ]
  });

  /* ===== t7. After a hospital stay for left-sided abdominal pain — video ===== */
  C.push({
    id:'diverticulitis-discharge',
    title:"“They sent me home with antibiotics, but I’ve still got pain and nobody explained anything.”",
    type:'video', duration:12,
    meta:{ age:57, sex:'F',
      setting:'Video — urgent appointment three days after discharge from the surgical assessment unit.',
      system:'Gastroenterology — ongoing symptoms after a hospital admission',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Long-term conditions & cancer','Prescribing','Urgent & unscheduled care'], type:'video', thirdParty:false }
    },
    ceg:['Long-term conditions & cancer','Prescribing','Urgent & unscheduled care'],
    brief:'Mrs Anjali Mehta, 57, school business manager, was admitted for three days with left iliac fossa pain, fever and loose stools; CT confirmed acute uncomplicated sigmoid diverticulitis (no abscess or perforation), CRP 186 falling to 64. She was discharged three days ago on co-amoxiclav 625 mg three times daily (2 days left), with an outpatient colonoscopy planned in about 6–8 weeks. Now: dull left-sided ache 3/10, much improved; three or four soft loose stools a day, not watery, no blood; no fever; eating and drinking. She is recovering as expected. Hidden agenda (safety): for the pain she is taking ibuprofen 400 mg three times a day from her cupboard plus two of her husband’s co-codamol 30/500 tablets at night, on top of paracetamol 1 g four times a day — a paracetamol overdose risk (up to 5 g a day) and NSAID plus opioid use, both associated with diverticular perforation. Hidden concern: her father died of bowel cancer at 61; she believes the colonoscopy means the doctors suspect cancer and are not telling her, and she is thinking of cancelling it. Tasks: assess for complications (worsening pain, fever, rigors, vomiting, distension, rectal bleeding, urinary symptoms such as pneumaturia suggesting fistula) and for antibiotic-associated or C. difficile diarrhoea; find the medicines and stop the ibuprofen and the co-codamol (paracetamol alone, maximum 4 g a day); answer her questions (what diverticulitis is, why pain persists, foods — no need to avoid nuts or seeds; gradually increase fibre once settled); explain the colonoscopy honestly (CT cannot fully exclude cancer; it is routine after a first episode), and encourage attendance; ensure she is in the bowel screening programme; safety-net.',
    stem:{
      name:'Anjali Mehta', age:'57-year-old woman',
      pmh:['Acute uncomplicated sigmoid diverticulitis — admitted 6 days ago','Hypothyroidism'],
      meds:['Co-amoxiclav 625 mg three times daily — 2 days remaining (from hospital)','Levothyroxine 75 micrograms once daily'],
      allergy:'No known drug allergies',
      recent:'Surgical assessment unit discharge summary, 3 days ago: “3-day history of left iliac fossa pain, fever 38.4 °C, loose stools. CRP 186 mg/L on admission, 64 mg/L at discharge. CT abdomen and pelvis: acute uncomplicated sigmoid diverticulitis; no collection, no free gas. IV co-amoxiclav, switched to oral to complete 7 days. Analgesia: paracetamol. Plan: outpatient colonoscopy in 6–8 weeks, colorectal clinic after. GP: nil specific.” Family history recorded: father — colorectal cancer, died aged 61. NHS bowel cancer screening: invitation 2 years ago — not returned.',
      reason:'Urgent video appointment — “still in pain after hospital”.'
    },
    script:{
      opening:"“Hello doctor. I came out of hospital on Saturday with diverticulitis. I’m still getting pain on my left side and still running to the loo. Nobody really explained anything — I don’t know what’s normal.”",
      facts:[
        { topic:'The pain', text:"“A dull ache, low down on the left. About a three out of ten now — it was a nine when I went in. Sometimes a bit crampy.” Not spreading, not getting worse." },
        { topic:'Bowels (if asked)', text:"“Three or four times a day, soft and loose — not water. No blood, no slime.” If asked whether it is worse since the antibiotics: “About the same.”" },
        { topic:'Complications screen (answer no if asked)', text:"No fever or shivers, no vomiting, no swollen tummy, no bleeding from the back passage, no bubbles or poo in the urine, no burning when passing urine, no vaginal discharge." },
        { topic:'Eating and drinking', text:"“I’m eating light things — soup, toast. Drinking fine.”" },
        { topic:'Painkillers (only if asked what you are taking for the pain)', text:"“Paracetamol, two tablets four times a day. And ibuprofen — 400, three times a day — I had some in the cupboard. And at night two of my husband’s co-codamol, the strong ones, so I can sleep.” If asked whether anyone told you about these: “No — the hospital just said paracetamol.”" },
        { topic:'Your questions', text:"Ask as the consultation allows: “What actually is diverticulitis?”; “Why is it still hurting if I’m on antibiotics?”; “Are there foods I should cut out — nuts, seeds?”; “How did I get it?”" },
        { topic:'The colonoscopy (only if the doctor asks how you feel about it, or mentions it)', text:"Go quiet. “My dad died of bowel cancer. He was 61. If they want a camera, they must think it’s cancer. Honestly, I was going to cancel it — I don’t want to know.”" },
        { topic:'Bowel screening (if asked)', text:"“I got a kit a couple of years ago. I didn’t do it — after Dad, I just couldn’t.”" },
        { topic:'Social', text:"Married to Vikram; two sons at university. School business manager — off sick until next week. Non-smoker, no alcohol. Diet: “mostly white rice, white bread — not much veg.”" },
        { topic:'Role-player direction', text:'Be articulate and a bit frustrated about the lack of explanation. Volunteer the painkillers only when asked what you take. Reveal the fear about cancer only if the colonoscopy is discussed in a way that invites your feelings. If the doctor explains honestly and kindly, agree to keep the appointment. Accept stopping the ibuprofen and co-codamol if the reasons are given.' }
      ],
      ice:{
        ideas:'“The antibiotics should have fixed it by now — maybe they haven’t worked.”',
        concerns:'HIDDEN AGENDA — she believes the planned colonoscopy means the doctors suspect cancer (her father died of bowel cancer at 61) and she is thinking of cancelling it. She is also taking ibuprofen and her husband’s co-codamol on top of regular paracetamol.',
        expectations:'An explanation of the condition, what is normal, what to eat, and stronger pain relief.'
      },
      cues:[
        '“Nobody explained anything.” — an information gap to fill.',
        '“I don’t know what’s normal.” — a request for expected recovery and red flags.',
        '“They’ve booked a camera test.” — leads to her father’s bowel cancer.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Characterises the pain and bowel symptoms and their trajectory; screens for complications (fever, rigors, vomiting, distension, peritonism, rectal bleeding, pneumaturia or faecaluria, vaginal discharge) and dehydration' },
      { dom:'dg', text:'Considers antibiotic-associated diarrhoea and C. difficile (watery stools, frequency, fever, abdominal pain) and judges the current picture as expected recovery' },
      { dom:'dg', text:'Takes a full medication history and identifies ibuprofen, borrowed co-codamol and paracetamol duplication (up to 5 g of paracetamol a day)' },
      { dom:'cm', text:'Stops the ibuprofen and the co-codamol with reasons (perforation risk; paracetamol overdose; constipation and sedation), advises paracetamol alone up to 4 g a day, completing co-amoxiclav, and checks for paracetamol toxicity symptoms' },
      { dom:'cm', text:'Explains diverticulitis, expected recovery, diet (no need to avoid nuts or seeds; gradually increase fibre and fluids once settled), and the colonoscopy purpose honestly; encourages attendance and bowel screening' },
      { dom:'cm', text:'Safety-nets clearly for worsening pain, fever, vomiting, distension, rectal bleeding, watery diarrhoea or urinary symptoms (same-day or A&E), and arranges review' },
      { dom:'ro', text:'Answers her questions in plain language, acknowledges the poor discharge explanation without criticising colleagues' },
      { dom:'ro', text:'Uncovers and responds to the fear about her father’s cancer with honesty and compassion, and supports her decision to keep the colonoscopy' }
    ],
    worked:[
      { lbl:'What to expect', txt:'“It’s common to have a dull ache and loose motions for a week or two after diverticulitis. The fact that the pain has gone from nine to three and the fever has gone tells me you’re getting better.”' },
      { lbl:'Ask every medicine', txt:'“What are you taking for the pain — including anything you’ve bought or borrowed?”' },
      { lbl:'Stop safely', txt:'“The co-codamol already contains paracetamol, so with your paracetamol tablets you could be taking more than is safe for your liver. And ibuprofen and codeine can make a weak spot in the bowel more likely to tear. So, paracetamol only — two tablets up to four times a day, no more.”' },
      { lbl:'Foods', txt:'“You don’t need to avoid nuts, seeds or skins — that’s an old myth. Once you’re settled, slowly add more fibre — wholemeal bread, brown rice, fruit and veg — with plenty of water.”' },
      { lbl:'Colonoscopy honestly', txt:'“The camera test is routine after a first episode. The scan can’t always tell inflammation from other things, so they look directly once it’s settled. I’m not hiding anything — the scan didn’t show cancer. But with your dad’s history, it’s the best way to be sure.”' },
      { lbl:'Safety-net', txt:'“If the pain gets worse again, you get a temperature, you’re vomiting, your tummy swells, you see blood, or the diarrhoea turns watery — call us the same day, or 111 or A&E if it’s severe.”' }
    ],
    learning:'After acute uncomplicated diverticulitis, mild pain and loose stools often persist for a week or two; the GP role is to confirm improvement, screen for complications (abscess, perforation, fistula, obstruction, bleeding) and for antibiotic-associated or C. difficile diarrhoea, and fill the information gap. NICE NG147 advises paracetamol and recommends against NSAIDs and opioids, which are associated with diverticular perforation — and a medicines history that includes bought and borrowed medicines finds both here, plus a dangerous paracetamol duplication from a combination product. Diet: there is no need to avoid nuts, seeds or skins; a high-fibre diet with adequate fluids is advised once the acute episode settles. Follow-up colonoscopy (or CT colonography) after a first episode helps exclude colorectal cancer, which can mimic diverticulitis on CT; patients may read it as a sign that cancer is suspected. A family history of bowel cancer in a parent makes honest explanation and encouragement to attend especially important, alongside participation in the bowel screening programme.',
    knowledge:{
      guideline:'NICE NG147 Diverticular disease: diagnosis and management (2019) · NICE CKS — Diverticular disease (accessed October 2026) · NHS England — Bowel cancer screening programme: FIT every 2 years, ages 50–74 (age extension completed 2025)',
      summary:'Expected slow recovery after uncomplicated diverticulitis; stop NSAID and borrowed co-codamol; paracetamol only within limits; no foods to avoid; fibre later; colonoscopy explained honestly and attended.',
      points:[
        { h:'Terms', t:'Diverticulosis: pouches without symptoms. Diverticular disease: symptoms (pain, bloating, altered bowel habit) without inflammation. Diverticulitis: inflammation or infection of diverticula with constant pain, fever and raised markers; complicated if abscess, perforation, fistula, obstruction or bleeding.' },
        { h:'Red flags after discharge', t:'Worsening or severe pain, peritonism, fever or rigors, persistent vomiting, distension, rectal bleeding, pneumaturia or faecaluria (colovesical fistula), passage of faeces per vagina (colovaginal fistula), inability to tolerate fluids — same-day surgical review.' },
        { h:'Antibiotic-associated diarrhoea', t:'Common with co-amoxiclav; consider C. difficile if watery diarrhoea three or more times in 24 hours, abdominal pain, fever, or raised white cells — send stool and seek advice.' },
        { h:'Analgesia', t:'Paracetamol (usual adult dose: 1 g up to four times daily, maximum 4 g in 24 hours; reduce if under 50 kg or hepatic risk factors — NICE CKS/SPC; check the SPC, BNF and local formulary; SPC: paracetamol). Avoid NSAIDs and opioids because of perforation risk (NICE NG147). Combination products such as co-codamol contain paracetamol — count the total.' },
        { h:'Diet', t:'No need to avoid nuts, seeds or fruit skins. After the acute episode settles, a healthy diet with wholegrains, fruit and vegetables and adequate fluid; increase fibre gradually; bulk-forming laxative if constipated.' },
        { h:'Follow-up', t:'If not recently done, colonoscopy or CT colonography after an episode of acute diverticulitis, usually about 6 weeks later, to exclude colorectal cancer and assess extent. Bowel screening (FIT) every 2 years for ages 50–74 in England.' },
        { h:'Marking edge', t:'The Clear pass candidate asks about bought and borrowed medicines, catches the paracetamol duplication, and explains the colonoscopy honestly to someone whose father died of bowel cancer.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Mrs Mehta, it’s Dr Clarke. Can you see and hear me? I’ve read your discharge letter — tell me how things are now.', dom:'ro', why:'Uses the notes; open question' },
      { who:'pt', text:'Still a pain on the left and running to the loo. Nobody explained anything — I don’t know what’s normal.' },
      { who:'dr', text:'That sounds unsettling. Let me ask a few questions, then I’ll explain what’s happened and what to expect.', dom:'ro', why:'Agenda-setting; acknowledges the gap' },
      { phase:'Data gathering', clock:'1–5 min', who:'pt', text:'It’s a dull ache — three out of ten. It was nine when I went in.' },
      { who:'dr', text:'And your bowels — how often, how loose, any blood? Any fever, shivers, vomiting, swollen tummy, or bubbles in your urine?', dom:'dg', why:'Trajectory, C. difficile and complication screen' },
      { who:'pt', text:'Three or four soft ones a day. No blood. None of the others.' },
      { who:'dr', text:'What are you taking for the pain — including anything bought or borrowed?', dom:'dg', why:'Full medicines history' },
      { who:'pt', text:'Paracetamol, two four times a day. Ibuprofen three times a day. And two of my husband’s co-codamol at night.' },
      { phase:'Medicines', clock:'5–7 min', who:'dr', text:'Thank you — that’s important. Co-codamol has paracetamol in it too, so altogether you’re taking more than is safe for your liver. Any nausea or tummy pain on the right? … And ibuprofen and codeine can make the bowel more likely to tear in diverticulitis. So please stop both and keep to paracetamol, no more than eight tablets a day.', dom:'cm', why:'Identifies overdose and perforation risks; clear instruction' },
      { phase:'Explanation', clock:'7–10 min', who:'dr', text:'Diverticula are small pouches in the bowel wall — very common with age. Diverticulitis is when one gets inflamed. The antibiotics treat the infection, but the inflammation takes a week or two to settle, so a dull ache is expected. Finish the antibiotics. No foods to cut out — nuts and seeds are fine — and once you’re settled, more fibre and water.', dom:'cm', why:'Answers her questions in plain language' },
      { who:'dr', text:'They’ve also booked a camera test in a few weeks. How do you feel about that?', dom:'ro', why:'Invites her feelings about the colonoscopy' },
      { who:'pt', text:'My dad died of bowel cancer at 61. They must think it’s cancer. I was going to cancel it.' },
      { who:'dr', text:'I’m so sorry about your dad — no wonder this feels frightening. The camera test is routine after a first episode, because a scan can’t always tell inflammation from other things. Your scan didn’t show cancer. With your dad’s history, the camera is the best way to put your mind at rest — would you be willing to keep it?', dom:'ro', why:'Honest, compassionate explanation; supports attendance' },
      { phase:'Close', clock:'10–12 min', who:'pt', text:'Put like that, yes.' },
      { who:'dr', text:'If the pain gets worse, you get a fever, vomit, your tummy swells, you see blood, or the diarrhoea turns watery, call us the same day — or 111 or A&E if severe. I’ll call you on Friday. Can you tell me what you’re changing today?', dom:'ro', why:'Safety-net, review, teach-back' },
      { who:'pt', text:'Stop the ibuprofen and Vikram’s co-codamol, paracetamol only — eight a day max — finish the antibiotics, and keep the camera appointment.' }
    ],
    kb:{
      social:[
        { h:'Borrowed medicines', t:'Sharing prescription medicines within families is common and rarely volunteered. Ask explicitly about bought and borrowed medicines.' },
        { h:'Family experience of cancer', t:'A parent’s death from bowel cancer can drive avoidance of screening and investigation; name it and offer support.' }
      ],
      legal:[
        { h:'Prescription-only medicines', t:'Co-codamol 30/500 is prescription-only and prescribed for her husband; advise returning unused medicines to a pharmacy.' }
      ],
      professional:[
        { h:'Discharge communication', t:'Patients often leave hospital without understanding their diagnosis. Fill the gap without criticising colleagues; feedback through local interface processes if repeated.' }
      ],
      community:[
        { h:'Support', t:'Bowel Cancer UK and Guts UK information on diverticular disease and screening; NHS bowel screening helpline for a replacement kit.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Worsening pain, fever, rigors, vomiting, distension','Rectal bleeding','Pneumaturia, faecaluria, vaginal faecal discharge (fistula)','Watery diarrhoea on antibiotics (C. difficile)'],
        psychosocial:['Father died of bowel cancer at 61','Off work; returns next week','Low-fibre diet'],
        ice:['Idea: antibiotics have failed','Concern: colonoscopy means cancer','Expectation: explanation and stronger pain relief'],
        core:['CRP 186 → 64; CT uncomplicated','2 days of co-amoxiclav left','Ibuprofen, borrowed co-codamol, paracetamol 4 g']
      },
      diagnosis:'Resolving acute uncomplicated sigmoid diverticulitis; unsafe analgesia (NSAID, opioid, paracetamol duplication); anxiety about colonoscopy driven by family history.',
      diagnosisLay:'“You’re getting better from an inflamed pouch in the bowel. The ache can take a week or two to go. Some of the painkillers you’re taking aren’t safe for this, and the camera test is routine — not a sign we think it’s cancer.”',
      management:{
        reflectIce:'“You hoped the antibiotics would have fixed it and you’re frightened the camera means cancer. You are improving as expected, and the camera is the best way to be sure, given your dad.”',
        psychosocial:'Phased return to work if needed; involve Vikram (and return his co-codamol); replacement bowel screening kit.',
        sharedPlan:['Stop ibuprofen and co-codamol; paracetamol only, maximum 4 g a day','Finish co-amoxiclav','No foods to avoid; gradually increase fibre and fluids when settled','Keep the colonoscopy; order a bowel screening kit','Phone review on Friday'],
        safetyNet:['Same day / 111 / A&E: worsening pain, fever, vomiting, distension, rectal bleeding','Watery diarrhoea three or more times a day — call (C. difficile)','Urinary bubbles or faeces in urine — call']
      }
    },
    links:[
      { ic:'📋', t:'Diverticulosis', s:'Case walkthrough', href:'../cases/diverticulosis.html' },
      { ic:'💠', t:'Diverticular disease', s:'Management protocol', href:'management/diverticular-disease.html' }
    ],
    pitfalls:{
      intro:'A reassurance station with two hidden traps: the medicines and the colonoscopy fear.',
      items:[
        { dom:'dg', fail:'Asks only “are you taking the paracetamol?” and never asks about other painkillers.', why:'Misses NSAID and opioid use (perforation risk) and a paracetamol overdose from combination tablets.', fix:'“What are you taking for the pain — bought, prescribed or borrowed?” then add up the paracetamol.' },
        { dom:'cm', fail:'Prescribes codeine or naproxen for the ongoing ache.', why:'NICE NG147 advises against NSAIDs and opioids in diverticulitis.', fix:'Paracetamol, explanation of expected recovery, and a safety-net.' },
        { dom:'ro', fail:'Says “It’s just routine” about the colonoscopy and moves on.', why:'She is planning to cancel because of her father’s death; a missed colonoscopy could miss a cancer.', fix:'Ask how she feels about it, acknowledge her father, explain honestly why it matters.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Use the discharge letter; open question.' },
      { t:'1–5', h:'History', d:'Pain and bowel trajectory; complications and C. difficile; all painkillers.' },
      { t:'5–7', h:'Medicines', d:'Stop ibuprofen and co-codamol; paracetamol limit; toxicity check.' },
      { t:'7–10', h:'Explain', d:'Diverticulitis, recovery, diet, colonoscopy and her father.' },
      { t:'10–12', h:'Close', d:'Safety-net, review, teach-back.' }
    ],
    wordPics:{
      clearFail:'Reassures in general terms and adds codeine for pain; no medicines history; colonoscopy not discussed; no red flags.',
      fail:'Explains diverticulitis and diet reasonably but misses the ibuprofen and paracetamol duplication, or finds them but leaves the colonoscopy fear unexplored.',
      pass:'Complication and C. difficile screen; finds and stops the unsafe analgesia with reasons; paracetamol limits; answers her questions; explains the colonoscopy; safety-nets.',
      clearPass:'All of the Pass, warmly and efficiently: adds up the paracetamol out loud, asks about toxicity symptoms, dispels the nuts-and-seeds myth, explores and responds to her father’s death, secures her agreement to attend colonoscopy and screening, and closes with teach-back.'
    },
    avoid:[
      { dont:'“Take some ibuprofen as well if the paracetamol isn’t enough.”', instead:'“Stick to paracetamol — anti-inflammatories and codeine can make the bowel more likely to tear.”', why:'NSAIDs and opioids increase perforation risk.' },
      { dont:'“Avoid nuts, seeds and sweetcorn from now on.”', instead:'“There’s no need to avoid any particular foods — more fibre once you’re settled.”', why:'The seeds myth is not supported by evidence.' },
      { dont:'“The colonoscopy is just routine, don’t worry.”', instead:'“How do you feel about the camera test?”', why:'Opens the door to her real fear.' }
    ]
  });

  /* ===== t8. Persistent dry cough after a heart attack — bus driver — video ===== */
  C.push({
    id:'ace-cough-post-mi',
    title:"“I’ve had this cough for three months — the heart doctor said to see you about it.”",
    type:'video', duration:12,
    meta:{ age:58, sex:'M',
      setting:'Video — routine appointment after the cardiology clinic discharged him.',
      system:'Respiratory / Cardiovascular — a persistent cough after a heart attack',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Prescribing','Long-term conditions & cancer'], type:'video', thirdParty:false }
    },
    ceg:['Prescribing','Long-term conditions & cancer'],
    brief:'Mr Hamid Karimi, 58, bus driver, had an anterior STEMI treated with primary PCI nine months ago. Cardiology discharged him three days ago: well, BP 124/72, LVEF 50%, completed cardiac rehabilitation; they noted a dry cough of three months, “possibly smoking-related — GP to review”. The record shows ramipril was increased from 5 mg to 10 mg four months ago; the cough started a few weeks later. Medicines: ramipril 10 mg, bisoprolol 5 mg, aspirin 75 mg, ticagrelor 90 mg twice daily (12-month course ends in 3 months), atorvastatin 80 mg. He has cut down from 20 to 4 cigarettes a day. The cough is dry, tickly, constant, with no sputum, haemoptysis, breathlessness, wheeze, chest pain, orthopnoea, ankle swelling, weight loss, reflux or nasal symptoms. Hidden agenda: coughing fits at the wheel embarrass him in front of passengers and he worries about safety, so for the past month he has been leaving out his ramipril on work days — he has not told anyone; he is frightened to admit it in case it affects his bus licence (he was relicensed by the DVLA after cardiology tests four months ago). The candidate should take a cough history including medicine timing, red flags and cough syncope (none), recognise probable ACE-inhibitor cough, and still arrange a chest X-ray within 2 weeks because he is over 40 with a cough and has smoked (NICE NG12). Management: stop ramipril and start an angiotensin-II receptor blocker licensed after MI (for example valsartan, starting low and titrating), with renal function, potassium and BP checked 1–2 weeks after starting and after each dose increase; explain the cough usually settles within 1–4 weeks but can take up to 3 months; explore and address the missed doses without judgement; confirm DVLA status and that there has been no cough syncope; support stopping smoking completely; safety-net for chest pain, breathlessness, haemoptysis or blackouts.',
    stem:{
      name:'Hamid Karimi', age:'58-year-old man',
      pmh:['Anterior ST-elevation myocardial infarction — primary PCI with drug-eluting stent to LAD, 9 months ago','Smoker (cutting down)'],
      meds:['Ramipril 10 mg once daily (increased from 5 mg 4 months ago)','Bisoprolol 5 mg once daily','Aspirin 75 mg once daily','Ticagrelor 90 mg twice daily (12 months from MI — 3 months remaining)','Atorvastatin 80 mg once daily'],
      allergy:'No known drug allergies',
      recent:'Cardiology clinic letter, 3 days ago: “Excellent recovery. Completed cardiac rehabilitation. Asymptomatic from a cardiac point of view. BP 124/72, HR 62. Echo LVEF 50%. Chest clear on auscultation. He reports a dry cough for about 3 months — may be smoking-related; we have asked him to see his GP. Smoking down to 4 a day — strongly advised to stop. Discharged from cardiology follow-up.” DVLA: Group 2 (PCV) licence — relicensed after exercise test (letter 4 months ago). U&E 4 months ago (after ramipril increase): creatinine 88 µmol/L, eGFR 82, K+ 4.6. No chest X-ray in the last 2 years.',
      reason:'Video appointment — “cough, as advised by cardiology”.'
    },
    script:{
      opening:"“Hello doctor. I’ve had this cough for about three months now. The heart doctor said I should talk to you about it.”",
      facts:[
        { topic:'The cough', text:"“Dry, tickly. All day, every day. Nothing comes up. It’s the same as when it started.”" },
        { topic:'When it started (if asked about timing or medicines)', text:"“Maybe a month after they put up my ramipril? I didn’t connect it.”" },
        { topic:'Red flags (answer no if asked)', text:"No coughing blood, no breathlessness, no wheeze, no chest pain, no fever, no weight loss, no night sweats, no hoarse voice, no swollen ankles, no trouble lying flat." },
        { topic:'Other causes (answer no if asked)', text:"No heartburn or sour taste, no blocked or runny nose, no drip at the back of the throat, no asthma." },
        { topic:'Fainting with cough (only if asked)', text:"“No, never blacked out or felt faint when coughing.”" },
        { topic:'Driving and work (if asked about work or how the cough affects you)', text:"“I drive the number 42. When I get a coughing fit at the wheel, passengers stare. It’s embarrassing — and I worry about it.”" },
        { topic:'Missed doses (only if asked how you take your tablets or whether you ever miss any)', text:"Hesitate. “To be honest… on work days I’ve been leaving out the ramipril. About a month. I thought the cough was worse on days I took it. Please — will this get back to the DVLA?”" },
        { topic:'DVLA (if asked)', text:"“I told them after the heart attack. They stopped me driving the bus, then I did a treadmill test and they gave it back four months ago.”" },
        { topic:'Smoking (if asked)', text:"“Down from twenty to four a day — after work. It’s hard to stop the last few.” Interested in help if offered. Wife Laila wants you to stop." },
        { topic:'Worry', text:"If asked what you think: “My wife says it might be my lungs — her uncle had lung cancer and it started with a cough.”" },
        { topic:'Social', text:"Married to Laila; three adult children. Bus driver for 22 years. No alcohol. Walks 30 minutes most days since rehab." },
        { topic:'Role-player direction', text:'Be calm and pleasant. Reveal the missed doses only if asked directly about how you take your tablets or about missing doses, and look embarrassed. If told to stop ramipril, ask: “Is that safe? The heart doctor said it protects my heart — I don’t want another heart attack.” Accept the switch if the reason is explained. If the doctor says the DVLA must be told about the missed doses, become anxious.' }
      ],
      ice:{
        ideas:'“The cardiologist thought it was the cigarettes.”',
        concerns:'HIDDEN AGENDA — he has been missing ramipril on work days for a month because coughing fits at the wheel embarrass him and he worries about safety; he fears that admitting it will affect his bus licence. His wife fears lung cancer.',
        expectations:'To find out what is causing the cough and stop it — without endangering his heart or his job.'
      },
      cues:[
        '“The heart doctor said to see you.” — the cardiologist attributed it to smoking without checking the medicines.',
        '“Passengers stare.” — work impact, leading to the missed doses.',
        '“My wife says it might be my lungs.” — a cancer worry to address.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes a cough history (onset, character, sputum, duration) and links timing to the ramipril dose increase; asks about other medicines and adherence' },
      { dom:'dg', text:'Screens for red flags and alternative causes: haemoptysis, weight loss, hoarseness, breathlessness, chest pain, heart failure symptoms, reflux, upper-airway symptoms, asthma; asks about cough syncope as a vocational driver' },
      { dom:'dg', text:'Discovers he has been omitting ramipril on work days and explores why; confirms DVLA notification and relicensing' },
      { dom:'cm', text:'Stops ramipril and switches to an ARB licensed after MI (for example valsartan, low dose titrated), with U&E, potassium and BP 1–2 weeks after starting and after dose increases; explains continuing secondary prevention' },
      { dom:'cm', text:'Arranges a chest X-ray within 2 weeks (NICE NG12: aged 40 or over, cough, ever smoked) and a review; explains expected resolution of ACE-inhibitor cough (usually 1–4 weeks, up to 3 months)' },
      { dom:'cm', text:'Supports stopping smoking completely (very brief advice, referral, NRT, varenicline or vaping) and safety-nets for chest pain, breathlessness, haemoptysis, blackouts or faintness at the wheel' },
      { dom:'ro', text:'Responds to the missed doses without judgement, explains that adherence problems are common and solvable, and clarifies honestly what the DVLA does and does not need to know' },
      { dom:'ro', text:'Addresses his fear of another heart attack and his wife’s fear of lung cancer, shares the plan and checks understanding' }
    ],
    worked:[
      { lbl:'Timeline', txt:'“When did the cough start, compared with any changes to your tablets?”' },
      { lbl:'Normalise adherence', txt:'“Lots of people find it hard to take tablets that give them side effects. Are there any you’ve been leaving out, even sometimes?”' },
      { lbl:'Explain the cause', txt:'“Ramipril is well known for causing a dry, tickly cough in about one in ten people, often starting weeks or months after it’s begun or increased. That fits your story very well.”' },
      { lbl:'Safe switch', txt:'“We won’t leave your heart unprotected. I’ll swap the ramipril for a close relative called valsartan, which protects the heart in a similar way but rarely causes a cough. We start low, check a blood test and your blood pressure in one to two weeks, and build it up.”' },
      { lbl:'Still do the X-ray', txt:'“Because you’ve smoked and the cough has lasted over three weeks, I’d like a chest X-ray in the next two weeks to be thorough — that’s also the answer to Laila’s worry.”' },
      { lbl:'DVLA honestly', txt:'“The DVLA doesn’t need to know about the missed tablets — the key things are that your heart is stable and you haven’t blacked out. If you ever feel faint or black out with coughing, stop driving and tell us straight away.”' }
    ],
    learning:'A persistent dry cough in someone on an ACE inhibitor should prompt a medicines timeline: ACE-inhibitor cough affects around 1 in 10 people, can begin weeks or months after starting or increasing the dose, and usually settles within 1–4 weeks of stopping (occasionally up to 3 months). After myocardial infarction, NICE NG185 recommends an ACE inhibitor and, for people who are intolerant, an angiotensin-II receptor blocker instead — a switch that can be made safely in primary care with monitoring of renal function, potassium and BP. Do not let a probable drug cause close the differential: a man over 40 with a cough who has smoked meets NICE NG12 criteria for a chest X-ray within 2 weeks. Side effects often cause silent non-adherence, here driven by work; asking about missed doses in a normalising way protects secondary prevention. Vocational drivers raise specific DVLA questions — after acute coronary syndrome Group 2 relicensing depends on functional testing, and cough syncope is a separate driving issue — so ask about faintness with coughing and give honest information about what must be reported.',
    knowledge:{
      guideline:'NICE NG185 Acute coronary syndromes (2020) · NICE NG12 Suspected cancer: recognition and referral (2015) · DVLA — Assessing fitness to drive: a guide for medical professionals (current edition, accessed October 2026) · NICE NG209 Tobacco: preventing uptake, promoting quitting and treating dependence (2021)',
      summary:'Probable ACE-inhibitor cough: switch to an ARB licensed post-MI with monitoring, still request a 2-week chest X-ray, find and fix the missed doses, check cough syncope and DVLA status, and support complete smoking cessation.',
      points:[
        { h:'ACE-inhibitor cough', t:'Dry, tickly, non-productive; up to around 10% of users; onset hours to months after starting or a dose increase; not dose-dependent in a simple way; resolves usually within 1–4 weeks of stopping, sometimes up to 3 months. Re-challenge is not needed.' },
        { h:'Switching after MI', t:'NICE NG185: offer an ARB instead if ACE-inhibitor intolerant. Valsartan is licensed after MI: usual adult dose — start 20 mg twice daily and titrate over several weeks towards 160 mg twice daily as tolerated (NICE NG185/SPC; check the SPC, BNF and local formulary; SPC: valsartan). Stop ramipril the day before starting. Check U&E, potassium and BP 1–2 weeks after starting and after each increase.' },
        { h:'Chest X-ray', t:'NICE NG12: offer an urgent chest X-ray (within 2 weeks) to people aged 40 and over with unexplained cough (or other listed symptoms) who have ever smoked. A normal X-ray with resolution after stopping the ACE inhibitor completes the picture; persistent cough needs further assessment.' },
        { h:'Other causes of chronic cough', t:'Smoking, asthma or COPD, gastro-oesophageal reflux, upper-airway cough syndrome, heart failure (orthopnoea, oedema), lung cancer, interstitial lung disease, infection including TB.' },
        { h:'Driving', t:'Group 2 drivers after ACS must not drive until relicensed by the DVLA, which requires functional testing. Cough syncope: Group 2 drivers should not drive and must notify the DVLA — ask directly about faintness or blackouts with cough. Missed doses themselves are not notifiable.' },
        { h:'Secondary prevention', t:'ACE inhibitor or ARB, beta-blocker, aspirin lifelong plus a second antiplatelet for up to 12 months, high-intensity statin, cardiac rehabilitation, complete smoking cessation (NICE NG209: behavioural support plus varenicline, NRT or nicotine vaping).' },
        { h:'Marking edge', t:'The Clear pass candidate links the cough to the dose increase, still does the X-ray, finds the missed doses with a non-judgemental question, and gives accurate, reassuring DVLA information.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Mr Karimi, I’m Dr Evans. Can you see and hear me? I’ve read the heart clinic letter — tell me about the cough.', dom:'ro', why:'Uses the letter; open question' },
      { who:'pt', text:'Dry and tickly, three months, all day. Nothing comes up.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'Any blood, weight loss, hoarse voice, breathlessness, wheeze, chest pain, swollen ankles, or trouble lying flat?', dom:'dg', why:'Red flags and heart failure' },
      { who:'pt', text:'No, none of that.' },
      { who:'dr', text:'Heartburn, a blocked nose or a drip at the back of your throat? And have you ever felt faint or blacked out when coughing?', dom:'dg', why:'Reflux, upper-airway cough, cough syncope' },
      { who:'pt', text:'No. Never fainted.' },
      { who:'dr', text:'When did it start compared with any tablet changes? And lots of people find tablets hard to take — are there any you sometimes leave out?', dom:'dg', why:'Medicines timeline and normalised adherence question' },
      { who:'pt', text:'About a month after they upped the ramipril. And… I’ve been leaving the ramipril out on work days. The coughing at the wheel — passengers stare. Will this get back to the DVLA?' },
      { who:'dr', text:'Thank you for telling me — that took courage, and it really helps. Missed tablets aren’t something the DVLA needs to know. Have you told them about the heart attack?', dom:'ro', why:'Non-judgemental; honest DVLA information; checks status' },
      { who:'pt', text:'Yes — I did the treadmill test and got my licence back four months ago.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'I think the ramipril is causing the cough. It does this in about one in ten people, often after a dose increase. The good news is we can switch it.', dom:'ro', why:'Plain-language explanation' },
      { who:'pt', text:'Is that safe? The heart doctor said it protects my heart.' },
      { who:'dr', text:'It does — so we won’t stop protection. I’ll swap it for valsartan, which protects the heart in a similar way but rarely causes a cough. Stop the ramipril today and start valsartan tomorrow — every day, work days too. We’ll check a blood test and your blood pressure in one to two weeks and build up the dose.', dom:'cm', why:'Safe switch with monitoring and adherence plan' },
      { phase:'Plan', clock:'8–11 min', who:'dr', text:'Because you’ve smoked and the cough has lasted a while, I’d also like a chest X-ray in the next two weeks — to be thorough. Is there anything you or Laila are worried it might be?', dom:'cm', why:'NG12 X-ray; invites concerns' },
      { who:'pt', text:'Laila thinks it’s my lungs — her uncle had cancer.' },
      { who:'dr', text:'That’s an understandable worry, and the X-ray will help answer it. The cough should start easing within a few weeks of stopping ramipril, though it can take up to three months. You’ve done brilliantly cutting to four a day — would you like help to stop the last few? That’s the biggest thing for your heart and lungs now.', dom:'cm', why:'Addresses the wife’s fear; smoking support' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'If you get chest pain, breathlessness, cough up blood, or feel faint or black out — especially driving — stop and get help: 999 for chest pain. What’s the plan in your words?', dom:'ro', why:'Safety-net including driving; teach-back' },
      { who:'pt', text:'Stop ramipril, start valsartan tomorrow every day, blood test in two weeks, X-ray, and see the stop smoking people.' }
    ],
    kb:{
      social:[
        { h:'Work and side effects', t:'Visible side effects at work (coughing at the wheel) drive silent non-adherence; ask about work impact.' },
        { h:'Family worries', t:'Partners’ fears (lung cancer) shape what patients accept; addressing them helps adherence to the plan.' }
      ],
      legal:[
        { h:'DVLA duties', t:'The licence holder must notify relevant conditions; doctors advise and, if a patient continues to drive unsafely despite advice, may disclose to the DVLA (GMC confidentiality guidance, 2017). Missed doses are not notifiable; cough syncope is.' }
      ],
      professional:[
        { h:'Interface with secondary care', t:'Specialist letters can attribute symptoms without a medicines review; the GP holds the full timeline. Switching ACE inhibitor to ARB does not need cardiology approval.' }
      ],
      community:[
        { h:'Support', t:'NHS Stop Smoking Service; community pharmacy (New Medicine Service for the valsartan start); British Heart Foundation information.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Haemoptysis, weight loss, hoarseness','Breathlessness, chest pain, orthopnoea, oedema','Faintness or syncope with coughing (vocational driver)'],
        psychosocial:['Bus driver — DVLA Group 2','Coughing at work; missed doses','Wife’s fear of lung cancer'],
        ice:['Idea: smoking','Concern: missed doses and licence; wife fears cancer','Expectation: stop the cough safely'],
        core:['Ramipril increased 4 months ago; cough 1 month later','Ticagrelor 3 months left','Smoking 4 a day']
      },
      diagnosis:'Probable ACE-inhibitor (ramipril) induced cough, with intermittent non-adherence; chest X-ray needed to exclude lung pathology in a smoker over 40.',
      diagnosisLay:'“The ramipril is the most likely cause of your cough. We can swap it for a similar heart-protecting tablet that rarely causes a cough — and do an X-ray to be thorough.”',
      management:{
        reflectIce:'“You were worried that leaving out the ramipril might cost you your licence, and Laila worries about your lungs. The DVLA doesn’t need to know about missed tablets, the switch keeps your heart protected, and the X-ray will answer Laila’s question.”',
        psychosocial:'Daily dosing that suits shift patterns; involve Laila; praise smoking progress.',
        sharedPlan:['Stop ramipril; start valsartan next day (start low, titrate)','U&E, potassium and BP at 1–2 weeks and after each dose increase','Chest X-ray within 2 weeks','Stop smoking referral and pharmacotherapy','Review with X-ray and bloods in 2 weeks'],
        safetyNet:['999: chest pain','Same day: breathlessness, haemoptysis','Faintness or blackout with cough — stop driving and contact us','Cough not improving by 3 months or new symptoms — review']
      }
    },
    links:[
      { ic:'💠', t:'MI — secondary prevention', s:'Management protocol', href:'management/mi-secondary-prevention.html' },
      { ic:'💠', t:'Smoking cessation', s:'Management protocol', href:'management/smoking-cessation.html' },
      { ic:'📋', t:'Chest pain', s:'Case walkthrough', href:'../cases/chest-pain.html' }
    ],
    pitfalls:{
      intro:'The cardiology letter points to smoking; candidates who follow it, or who stop at the ACE inhibitor, both fail.',
      items:[
        { dom:'dg', fail:'Accepts “smoking-related” and never builds a medicines timeline.', why:'The ramipril increase a month before the cough is the clue in the record.', fix:'Ask when the cough started relative to any medicine changes.' },
        { dom:'cm', fail:'Diagnoses ACE-inhibitor cough and does not request a chest X-ray.', why:'NICE NG12 recommends a chest X-ray within 2 weeks for a smoker over 40 with cough — drug cough and cancer can coexist.', fix:'Switch the drug and request the X-ray.' },
        { dom:'ro', fail:'Reacts to the missed doses with a warning about another heart attack, or says the DVLA must be told.', why:'Judgement shuts down disclosure; the DVLA information is wrong and frightens him.', fix:'Thank him, explain the switch removes the reason to miss doses, and give accurate DVLA advice including cough syncope.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Use the cardiology letter; open question.' },
      { t:'1–5', h:'History', d:'Cough, red flags, alternatives, cough syncope; medicines timeline; adherence; DVLA.' },
      { t:'5–8', h:'Explain and switch', d:'ACE-inhibitor cough; valsartan with monitoring; daily on work days.' },
      { t:'8–11', h:'X-ray and smoking', d:'NG12 chest X-ray; wife’s worry; complete cessation support.' },
      { t:'11–12', h:'Close', d:'Safety-net including driving; teach-back.' }
    ],
    wordPics:{
      clearFail:'Attributes the cough to smoking, offers a linctus, or stops ramipril without a replacement; no X-ray; missed doses never found.',
      fail:'Switches to an ARB appropriately but omits monitoring or the chest X-ray, or misses the adherence problem, or gives wrong DVLA information.',
      pass:'Medicines timeline; red flags and cough syncope; switches to a post-MI ARB with U&E and BP checks; chest X-ray within 2 weeks; finds missed doses; smoking support; safety-net.',
      clearPass:'All of the Pass, with a normalising adherence question, accurate DVLA reassurance, explicit plan for work-day dosing, both the patient’s and his wife’s worries addressed, and teach-back.'
    },
    avoid:[
      { dont:'“It’s probably the smoking — try to stop.”', instead:'“When did the cough start compared with any tablet changes?”', why:'The timeline finds the cause.' },
      { dont:'“You must take your tablets or you’ll have another heart attack.”', instead:'“Lots of people miss tablets that cause side effects — let’s switch to one that suits you.”', why:'Non-judgement keeps disclosure going.' },
      { dont:'“It’s definitely the ramipril — no need for tests.”', instead:'“The ramipril is the likely cause, and I’d still like a chest X-ray to be thorough.”', why:'NG12 criteria are met regardless.' }
    ]
  });

  /* ---- Case-specific scorecard Tasks: the 11 standard RCGP SCA Tasks (15 points) ----
     Merged into window.SCA_SC_TASKS by sca-enrich.js. Each list is also kept on the
     case as c.scTasks, so the same items are slotted in even if another file later
     replaces the window.SCA_SC_TASKS_EXTRA object. */
  function T(o, p, cu, ic, ex, hy, rs, dx, pl, co, fu){
    return [
      { t:'Opens and explores the problem', d:o, pts:1, dom:'dg' },
      { t:'Explores psychosocial context', d:p, pts:1, dom:'dg' },
      { t:'Identifies and follows cues', d:cu, pts:1, dom:'ro' },
      { t:'Discovers ICE', d:ic, pts:2, dom:'ro' },
      { t:'Plans appropriate examination & tests', d:ex, pts:1, dom:'dg' },
      { t:'Generates & tests hypotheses', d:hy, pts:1, dom:'dg' },
      { t:'Rules in/out serious disease', d:rs, pts:2, dom:'dg' },
      { t:'Reaches a working diagnosis', d:dx, pts:2, dom:'dg' },
      { t:'Offers a safe, patient-centred plan', d:pl, pts:2, dom:'cm' },
      { t:'Manages comorbidity & contributors', d:co, pts:1, dom:'cm' },
      { t:'Provides follow-up and safety net', d:fu, pts:1, dom:'cm' }
    ];
  }
  window.SCA_SC_TASKS_EXTRA = window.SCA_SC_TASKS_EXTRA || {};

  window.SCA_SC_TASKS_EXTRA['cold-sore-child'] = T(
    'Confirms he is speaking to Idris’s mother; acknowledges the photograph and lets her describe two days of painful lip blisters before narrowing down.',
    'Finds who is at home — a 3-week-old breastfed sister — school absence, and the family’s worry about being judged.',
    'Follows “I don’t know what it is”, “he kisses the baby all the time” and “I don’t want people thinking things”.',
    'Idea (allergy or impetigo); concern (infectious, then stigma of “herpes”, then the baby); expectation (name, treatment, school).',
    'Uses the photograph with a targeted history; recognises when face-to-face review would be needed (unclear image, eye involvement, unwell child).',
    'Cold sore versus impetigo, primary gingivostomatitis and eczema herpeticum; tests with prodrome, distribution and eczema status.',
    'Screens for eye involvement, mouth ulcers and dehydration, spread in eczema with fever; recognises the newborn as the person at serious risk.',
    'Herpes labialis (recurrent HSV-1) triggered by a recent cold, in a well child — explained without stigma.',
    'Stops hydrocortisone on the lesion; analgesia; optional OTC aciclovir with honest benefit; no school exclusion; no kissing the baby, hand washing, separate towels; breastfeeding continues.',
    'Considers his eczema (avoid steroids on the sore, watch for eczema herpeticum) and the household with a newborn.',
    'Baby: blisters, fever, poor feeding or floppiness — 999 or A&E; Idris: spreading sores, fever, eye symptoms, not drinking — same day; call back if not healed in 2 weeks.'
  );
  window.SCA_SC_TASKS_EXTRA['toddler-gastro-phone'] = T(
    'Confirms the caller and that Esi is with him; acknowledges his night shift; lets him describe 2 days of vomiting and diarrhoea.',
    'Explores no car, no money for a taxi, twins to collect at 15:15, mother at work, his exhaustion — and asks who could help.',
    'Follows “she’s just sleeping a lot”, “I’ve just come in from nights” and “her mum told me to ring”.',
    'Idea (nursery bug); concern (cannot get there, exhausted); expectation (medicine to stop the diarrhoea).',
    'Remote assessment: counts wet nappies, asks father to check responsiveness now, colour, hands and feet, lips, tears; uses the recorded weight.',
    'Gastroenteritis versus sepsis, intussusception, HUS, obstruction or DKA; tests with stool, vomit, fever, rash and pain questions.',
    'Recognises clinical dehydration with a red-flag feature (lethargy, reduced urine output) needing face-to-face assessment today.',
    'Acute viral gastroenteritis with clinical dehydration and altered responsiveness — not safe to wait until tomorrow.',
    'Arranges a timed face-to-face assessment this afternoon with a transport solution (brother-in-law) and a home-visit back-up; ORS little and often; no juice or antidiarrhoeals.',
    'Addresses carer fatigue and supervision, the twins’ school run, hygiene and nursery exclusion.',
    'Explicit 999 triggers while waiting; call-back if not attended; nappy count; nursery exclusion until 48 hours symptom-free.'
  );
  window.SCA_SC_TASKS_EXTRA['recurrent-uti-letrozole'] = T(
    'Checks privacy; acknowledges her frustration after normal tests; lets her describe the current episode and the pattern.',
    'Explores the new relationship after widowhood, embarrassment, choir and fluid restriction, hygiene practices.',
    'Follows “I’m clearly not fine”, “there was blood again” and “I have a partner now”.',
    'Idea (something missed); concern (cancer — breast recurrence or bladder; losing the relationship); expectation (antibiotics and a real answer).',
    'Midstream urine culture rather than dipstick; repeat urinalysis after treatment for haematuria; offers face-to-face pelvic examination; considers STI testing.',
    'Post-coital UTI with genitourinary syndrome of menopause versus urological pathology, STI or gynaecological cause; uses the normal CT and cystoscopy.',
    'Screens for pyelonephritis and sepsis, persistent haematuria, postmenopausal bleeding and breast cancer recurrence symptoms.',
    'Acute lower UTI on recurrent post-coital UTI contributed to by aromatase-inhibitor vaginal dryness, douching and low fluid intake.',
    'Nitrofurantoin MR 100 mg twice daily for 3 days after culture; behavioural measures; non-hormonal moisturiser and lubricant; post-coital single-dose prophylaxis with risks; methenamine as a later option.',
    'Letrozole: vaginal oestrogen only after discussion with the breast team (NICE NG23); renal function checked for nitrofurantoin.',
    'Same-day or 111 for fever, rigors, loin pain or vomiting; call if not better in 48 hours; recheck urine; prophylaxis review at 6 months; letter to breast team.'
  );
  window.SCA_SC_TASKS_EXTRA['results-ra-fertility'] = T(
    'Asks what she made of the results she saw online before explaining; updates the joint history.',
    'Explores self-employed income as a hairdresser, function at work, partner, and her grandmother’s disability.',
    'Follows “the CCP was negative, so that’s good”, “if I don’t work I don’t get paid” and “my nonna’s hands were like claws”.',
    'Idea (negative test means not RA); concern (a baby; ending up like her nonna); expectation (stronger painkillers).',
    'Interprets the packet: weak RF, negative anti-CCP, raised ESR and CRP, anaemia of inflammation, raised platelets, early erosions; pregnancy test needed.',
    'Early RA versus psoriatic, reactive or enteropathic arthritis and connective tissue disease; tests with extra-articular and family history questions.',
    'Recognises erosive inflammatory arthritis needing urgent referral; screens for septic arthritis and systemic features; finds possible pregnancy on NSAIDs.',
    'Probable early seronegative-for-anti-CCP rheumatoid arthritis, explained as a likely diagnosis to be confirmed by rheumatology.',
    'Urgent rheumatology referral (seen within 3 weeks) including the pregnancy plan; pregnancy test; stop ibuprofen, paracetamol meanwhile; folic acid 400 micrograms daily.',
    'Plans around conception (pregnancy-compatible DMARDs, avoid methotrexate), hand therapy and occupational therapy for work.',
    'Same day for a hot swollen joint with fever or red painful eye; tell us the pregnancy test result; review after rheumatology.'
  );
  window.SCA_SC_TASKS_EXTRA['psa-brca2-brother'] = T(
    'Acknowledges his brother’s diagnosis; explores why he wants a PSA now and what he understands about it.',
    'Explores his grief for his mother, his daughters, work and family support.',
    'Follows “aggressive type”, “Mam had breast cancer” and “it’s in a drawer”.',
    'Idea (PSA catches it early); concern (BRCA2 and his daughters); expectation (a PSA form today).',
    'PSA with preparation advice (no ejaculation or vigorous cycling for 48 hours; defer after UTI); offers examination; genetics referral for predictive BRCA2 testing.',
    'Weighs sporadic versus inherited risk: affected brother, maternal breast and possible ovarian cancer, BRCA2 in his brother.',
    'Screens for urinary symptoms, haematuria, haematospermia, bone pain and weight loss; explains urgent referral if PSA is raised.',
    'Asymptomatic man at increased risk of prostate cancer with a probable familial BRCA2 variant (50% chance of carrying it).',
    'Balanced PSA information with numbers and a shared decision; genetics referral with the family letter; accurate answer on screening (no UK NSC programme; annual PSA from 40 for BRCA2 carriers).',
    'Considers other BRCA2 risks (male breast, pancreatic) and implications for his daughters, whose testing is their own choice from 18.',
    'Results follow-up; contact sooner for urinary symptoms, haematuria, bone pain or weight loss; genetics appointment tracked.'
  );
  window.SCA_SC_TASKS_EXTRA['ae-bp-alcohol'] = T(
    'Checks privacy in the hostel; acknowledges his mother’s stroke; lets him describe the fall and the A&E visit.',
    'Explores hostel, address, money, travel, phone, mood after separation — and his daughter’s pregnancy as motivation.',
    'Follows “I don’t want a stroke like my mam”, “I can’t get to you” and “I never got any letters”.',
    'Idea (tablets fix it); concern (stroke; shame about drinking and missed appointments); expectation (a prescription today).',
    'Accessible BP confirmation (pharmacy ABPM or loaned monitor); bloods at nearby hospital phlebotomy; ECG and urine ACR at suture removal; QRISK3.',
    'Essential hypertension versus readings raised by pain, intoxication or withdrawal; considers alcohol as a cause.',
    'Screens for hypertensive emergency and target-organ symptoms; withdrawal seizures or delirium tremens; wound infection.',
    'Raised BP in A&E, unconfirmed; probable alcohol dependence; high cardiovascular risk; missed care due to outdated address.',
    'No antihypertensive today, with reasons; realistic monitoring plan; do not stop drinking suddenly; alcohol service referral with correct details; thiamine.',
    'Smoking cessation offer; diet; social prescriber or housing support; updates address and mobile on the record.',
    '999 for stroke symptoms, chest pain, severe headache or withdrawal fit or confusion; wound advice; review in 1 week.'
  );
  window.SCA_SC_TASKS_EXTRA['diverticulitis-discharge'] = T(
    'Uses the discharge summary; lets her describe ongoing pain and loose stools and the lack of explanation.',
    'Explores work, diet, family (husband’s medicines) and her father’s death from bowel cancer.',
    'Follows “nobody explained anything”, “I don’t know what’s normal” and the camera test.',
    'Idea (antibiotics failed); concern (colonoscopy means cancer; plans to cancel); expectation (explanation, diet advice, stronger pain relief).',
    'Full medicines history including bought and borrowed; adds up paracetamol; considers stool sample if watery; colonoscopy and bowel screening.',
    'Expected recovery versus complication (abscess, perforation, fistula), C. difficile or antibiotic-associated diarrhoea, and cancer mimicking diverticulitis.',
    'Screens for fever, worsening pain, distension, vomiting, rectal bleeding, pneumaturia; recognises paracetamol overdose and perforation risk.',
    'Resolving acute uncomplicated diverticulitis with unsafe analgesia and anxiety about colonoscopy.',
    'Stops ibuprofen and co-codamol; paracetamol only within 4 g a day; completes co-amoxiclav; no foods to avoid; fibre later; keeps colonoscopy.',
    'Advises returning the borrowed co-codamol to the pharmacy, takes account of her family history, and encourages bowel screening participation.',
    'Same day, 111 or A&E for worsening pain, fever, vomiting, distension, bleeding; watery diarrhoea or urinary symptoms — call; review on Friday.'
  );
  window.SCA_SC_TASKS_EXTRA['ace-cough-post-mi'] = T(
    'Uses the cardiology letter; lets him describe the cough before asking targeted questions.',
    'Explores bus driving, embarrassment at work, wife’s worry, smoking and daily routine.',
    'Follows “the heart doctor said to see you”, “passengers stare” and “my wife says it might be my lungs”.',
    'Idea (smoking); concern (missed doses and his licence; lung cancer); expectation (stop the cough safely).',
    'Chest X-ray within 2 weeks (NICE NG12); U&E, potassium and BP after starting the ARB; medicines timeline from the record.',
    'ACE-inhibitor cough versus smoking-related disease, asthma or COPD, reflux, upper-airway cough, heart failure, lung cancer.',
    'Screens for haemoptysis, weight loss, hoarseness, breathlessness, chest pain, heart failure and cough syncope in a vocational driver.',
    'Probable ramipril-induced cough with intermittent non-adherence; lung pathology still to be excluded.',
    'Stops ramipril, starts valsartan at a low dose with titration and monitoring; daily dosing including work days; complete smoking cessation support.',
    'Keeps secondary prevention intact (antiplatelets, statin, beta-blocker); confirms DVLA status; accurate advice on what is notifiable.',
    '999 for chest pain; same day for breathlessness or haemoptysis; stop driving and report faintness with cough; review with X-ray and bloods in 2 weeks.'
  );

  C.forEach(function(c){ var t = window.SCA_SC_TASKS_EXTRA[c.id]; if (t) c.scTasks = t; });

  if (window.SCA_CASES) window.SCA_CASES.push.apply(window.SCA_CASES, C);
})();
