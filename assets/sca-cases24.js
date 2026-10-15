/* ============================================================
   Reasoning GP — Case Library batch 24: "Skin, ENT & eyes"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 2WW pathways stated explicitly where they map
   (suspected melanoma — weighted 7-point checklist >=3;
   unexplained oral ulceration >3 weeks -> oral cancer 2WW).
   Emergencies: acute red eye (angle-closure/keratitis); sudden SNHL.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases23.js.
   ============================================================ */

(function(){

  /* ============ 89. VIDEO — Changing mole (melanoma 2WW) ============ */
  const c89 = {
    id:'melanoma-2ww', title:'"My wife nagged me to get this mole looked at"', type:'video', duration:12,
    meta:{ age:54, sex:'M', setting:'Video consultation — a changing pigmented lesion on the back.', system:'Dermatology / Suspected melanoma', checked:'October 2026' },
    brief:'Mr Keith Donnelly, 54, roofer. Books because his wife noticed a mole on his upper back has changed. On the call (and a photo he can show): a pigmented lesion that has grown over ~4 months, now irregular in outline and uneven in colour (browns/black), ~8 mm, occasionally itchy and once bled slightly. Lifelong outdoor worker, fair skin, history of bad sunburns, never uses sunscreen. Minimises — "it\u2019s just a mole, they all change". PMH: nil. Meds: none.',
    script:{
      opening:'"Afternoon. So my wife\u2019s been on at me about a mole on my back \u2014 says it\u2019s got bigger and looks a bit different. Honestly I think she\u2019s fussing; I\u2019ve got loads of moles, I\u2019m outside all day, they all change a bit don\u2019t they. I\u2019ve taken a photo if that helps. I really just want you to tell me it\u2019s nothing so she\u2019ll stop worrying, then I can get back to the job."',
      facts:[
        { topic:'The lesion',          text:'If characterised (history + photo): CHANGE over ~4 months \u2014 grown in size, now asymmetric with an irregular border, two or three colours (light/dark brown, black), ~8 mm diameter, intermittent itch, and one episode of minor bleeding. This change-plus-irregularity is the suspicious picture; several 7-point-checklist features are present.' },
        { topic:'The risk factors',     text:'On questioning: lifelong outdoor occupation (roofer) with chronic and intermittent intense UV exposure, fair skin that burns, multiple childhood/adult sunburns, never uses sun protection, multiple moles. High melanoma risk profile.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "it\u2019s nothing, she\u2019s fussing" is bravado over fear: a workmate died of melanoma that "spread everywhere" a couple of years ago, and Keith is privately frightened it could be the same, but as the family\u2019s sole earner he can\u2019t face the idea of being ill or off work, so he minimises. Booking a video and pushing for reassurance is avoidance. The wife\u2019s concern is the reliable signal.' },
        { topic:'The breadwinner fear',  text:'If reached: self-employed, no sick pay, mortgage, kids; the thought of cancer is also the thought of not providing. He jokes to cover real dread, and there\u2019s guilt about years of ignoring sun safety.' },
        { topic:'What he wants',        text:"Officially: quick reassurance to placate his wife. What he needs: in-person examination of the lesion (and the rest of his skin), recognition that a changing, irregular pigmented lesion warrants a melanoma suspected cancer pathway referral (NICE NG12: weighted 7-point checklist score of 3 or more — his is about 9), sun-safety advice without shaming, and his fear addressed." },
      ],
      ice:{
        ideas:'It\u2019s just one of his many moles; they all change a bit; his wife is fussing.',
        concerns:'HIDDEN AGENDA \u2014 a workmate died of melanoma that spread; he\u2019s privately frightened it\u2019s the same but, as sole earner, can\u2019t face being ill, so he minimises; guilt about years of no sun protection.',
        expectations:'Quick reassurance it\u2019s nothing. What he actually needs: examination and a melanoma suspected cancer pathway referral for a changing irregular lesion, with sun-safety advice and his fear addressed.'
      },
      cues:['Changing + irregular + multi-coloured + itch/bleed pigmented lesion \u2014 suspicious; don\u2019t reassure from a glance/photo.','"They all change, she\u2019s fussing" \u2014 minimising; the wife\u2019s concern is the reliable signal and the fear is underneath.','Outdoor worker, fair skin, repeated sunburns \u2014 a high-risk melanoma profile.']
    },
    checkpoints:[
      { dom:'dg', text:'Recognises a CHANGING, irregular, multi-coloured pigmented lesion (with itch/bleeding) as suspicious for melanoma, and does NOT reassure it away from a photo/glance or accept "they all change"' },
      { dom:'dg', text:"Applies structured assessment — the weighted 7-POINT CHECKLIST (major: change in size, irregular shape, irregular colour = 2 points each; minor: largest diameter ≥7 mm, inflammation, oozing/crusting, change in sensation = 1 each) and/or ABCDE — and recognises that a score of 3 or more, or dermoscopy suggesting melanoma, triggers a suspected cancer pathway referral (NICE NG12) — Keith scores about 9 (size 2 + shape 2 + colour 2 + diameter ~8 mm 1 + bleeding/oozing 1 + itch 1); clinical concern below that threshold is a matter for judgement and advice, not an NG12 criterion" },
      { dom:'dg', text:'Examines the lesion IN PERSON (with dermoscopy if able) and performs a wider skin/lymph-node check rather than relying on the patient’s photo; does not skip examination because it’s a video booking — but does not let arranging that look delay a referral the history already justifies' },
      { dom:'cm', text:"Acts on the NICE NG12 pathway: refers on a suspected cancer pathway for SUSPECTED MELANOMA (7-point checklist ≥3 or dermoscopy suspicion); restates the threshold, tagged NICE NG12 — and does NOT shave/excise it himself or \"watch and wait\"" },
      { dom:'cm', text:'Gives sun-safety and secondary-prevention advice WITHOUT shaming (NICE NG34: shade, clothing, hat and sunscreen, tailored to his higher risk), weights the high-risk occupational profile, and advises monitoring other lesions / when to re-present' },
      { dom:'ro',   text:'Hears the bravado as fear, surfaces the workmate\u2019s death and the breadwinner worry gently, and treats the wife\u2019s concern as the reliable signal rather than colluding with "she\u2019s fussing"' },
      { dom:'ro',   text:'Balances honesty with reassurance (many changing moles are benign, but this needs urgent checking), and addresses the guilt about sun exposure supportively' },
      { dom:'cm',    text:'Safety-nets and follows up: explains the suspected cancer pathway timeframe (NHS England Faster Diagnosis Standard: cancer diagnosed or ruled out within 28 days of referral), when to expect contact and what to do if he hears nothing, and what to expect (specialist assessment, likely excision biopsy), what change would warrant sooner review, ensures he attends, documents the lesion description/score, and tracks the result' },
    ],
    worked:[
      { lbl:'Refuse the glance-off',  txt:'"I\u2019m really glad your wife pushed you to come, and I\u2019m not going to just tell you it\u2019s nothing from a photo, because that wouldn\u2019t be fair to you. A mole that\u2019s genuinely CHANGED \u2014 grown, gone irregular in shape and colour, itched, bled \u2014 is exactly the kind we check properly. Not all moles that change are dangerous, but this one has earned a proper look."' },
      { lbl:'Examine, don\u2019t guess', txt:'"I need to see it in person, not just on a photo \u2014 I\u2019ll look at it closely, ideally with a special magnifier, and check your other moles and the glands nearby too. That\u2019s a few minutes and it\u2019s the only way to do this properly. The video\u2019s a good start, but it can\u2019t replace examining you."' },
      { lbl:'Name the pathway',     txt:"\"Based on what you’re describing, this meets the criteria for an urgent skin-cancer referral — you’d be seen quickly by a skin specialist, who’ll likely remove it and check it under the microscope, with the aim of an answer within 28 days of the referral. That’s what the NICE suspected cancer guideline, NICE NG12, says for a changing mole like this. It is NOT me saying it’s cancer; it’s making sure, quickly, and I won’t be cutting it out myself.\"" },
      { lbl:'Surface the real fear',txt:'"Can I gently ask \u2014 has anything made this scary for you? \u2026 Your mate, the melanoma that spread. I\u2019m so sorry. That makes complete sense of why \u2018it\u2019s nothing\u2019 felt easier to say. And I\u2019d guess part of it is being the one who keeps the roof over everyone\u2019s heads \u2014 being ill isn\u2019t something you can picture. That\u2019s exactly why we check now, early, when things are most treatable."' },
      { lbl:'Sun safety, no blame', txt:'"On the sun \u2014 I\u2019m not here to give you a hard time about years on the roof without cream. But going forward, a bit of protection really matters, and I\u2019ll show you what to watch for on your skin. Caught early, skin cancers are very treatable \u2014 which is the whole point of moving fast."' },
      { lbl:'Safety-net',           txt:'"So: I\u2019ll examine it today and get the urgent referral in. If it changes more, bleeds a lot, or you spot another mole doing the same, come back sooner. I\u2019ll write down exactly how it looks now and follow up the result with you. You came in wanting me to say it\u2019s nothing \u2014 what I\u2019m doing instead is making sure you find out properly and fast, because that\u2019s what protects you and the family."' },
    ],
    learning:"A CHANGING, irregular, multi-coloured pigmented lesion (especially with itch or bleeding) in a high-risk patient (fair skin, chronic UV exposure, sunburns, many moles) is suspicious for melanoma and must not be reassured away from a photo or a glance. Apply structured assessment — the weighted 7-point checklist (major features: change in size, irregular shape, irregular colour, 2 points each; minor: diameter ≥7 mm, inflammation, oozing, change in sensation, 1 each; a score ≥3 triggers referral) and/or ABCDE — examine in person with dermoscopy and a wider skin/node check, and refer on the melanoma suspected cancer pathway (NICE NG12; the Faster Diagnosis Standard aims for a diagnosis or all-clear within 28 days); do not excise or \"watch and wait\" in primary care. The examinable hidden agenda is bravado over fear: a workmate died of melanoma, and as sole earner he can’t face being ill, so he minimises — the wife’s concern is the reliable signal. Surface the fear, treat sun-safety guilt without shaming, balance honesty with reassurance, and complete the suspected cancer pathway referral with documentation and follow-up.",
    knowledge:{
      guideline:"NICE NG14 (melanoma: assessment and management, 2015, updated 2022) · NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) · NICE NG34 (sunlight exposure: risks and benefits, 2016) · NHS England Faster Diagnosis Standard (October 2023)",
      points:[
        { h:"NICE NG12 — suspected melanoma", t:"NICE NG12: refer using a suspected cancer pathway referral for melanoma if a suspicious pigmented skin lesion has a weighted 7-point checklist score of 3 or more, or if dermoscopy suggests melanoma. Consider a suspected cancer pathway referral for a pigmented or non-pigmented lesion that suggests nodular melanoma. Where concern remains below the threshold, use clinical judgement and seek advice rather than simply reassuring." },
        { h:'The weighted 7-point checklist', t:"MAJOR features (2 points each): change in size, irregular shape/border, irregular colour. MINOR features (1 point each): largest diameter ≥7 mm, inflammation, oozing/crusting, change in sensation (incl. itch). Score ≥3 = refer (NICE NG12). Keith: size 2 + shape 2 + colour 2 + diameter about 8 mm 1 + bleeding 1 + itch 1 = 9. ABCDE (Asymmetry, Border irregularity, Colour variation, Diameter >6 mm, Evolution) is a complementary aid." },
        { h:'Examine, don\u2019t rely on a photo', t:'Assess the lesion in person, ideally with dermoscopy, and examine the rest of the skin and regional lymph nodes. A patient’s photo or a video impression is insufficient to exclude melanoma, though it can support the referral — and arranging the in-person look must not delay a referral the history already justifies. Document size, morphology and the checklist score.' },
        { h:'Do not excise or watch-and-wait', t:'Suspicious pigmented lesions should be referred for specialist assessment and complete excision biopsy \u2014 do not shave, curette, partially sample, cryotherapy, or "monitor" a lesion that meets referral criteria in primary care (clinical practice: the specialist team plans complete excision with margins for accurate staging; NICE NG14 covers staging and treatment).' },
        { h:'Risk factors & prevention', t:'Fair skin, multiple/atypical naevi, chronic and intermittent intense UV exposure, sunburns (especially childhood), outdoor occupation, family/personal history, immunosuppression. Give sun-safety advice (NICE NG34: shade, clothing, hat, sunscreen, avoiding burning; plus self-examination) without shaming, and advise on warning signs of other lesions.' },
        { h:'Address the hidden agenda', t:'Minimisation ("they all change, she\u2019s fussing") often masks fear (a known case) and practical dread (sole earner, time off). Treat the concerned relative\u2019s observation as reliable, surface the fear, and frame urgent referral as catching it early when most treatable.' },
        { h:'Never do', t:'Never reassure a changing pigmented lesion from a photo/glance; never skip in-person examination; never excise/cryo/"monitor" a lesion meeting referral criteria; never collude with minimisation; never deliver a shaming sun-exposure lecture.' },
        { h:'Safety-net & follow-up', t:"Melanoma suspected cancer pathway referral (NICE NG12; NHS England Faster Diagnosis Standard: diagnosis or all-clear within 28 days — tell him when to expect contact and what to do if he hears nothing); document the lesion and checklist score; advise re bleeding/further change and new lesions; sun-safety and self-examination advice; confirm attendance; track and discuss the result." }
      ]
    }
  };

  /* ============ 90. TELEPHONE — The acute red eye triage ============ */
  const c90 = {
    id:'red-eye-triage', title:'"My eye\u2019s red and sore — is it just conjunctivitis?"', type:'telephone', duration:12,
    meta:{ age:31, sex:'F', setting:'Telephone — acute painful red eye in a contact-lens wearer.', system:'Ophthalmology / Acute red eye', checked:'October 2026' },
    brief:'Miss Rosa Iqbal, 31, graphic designer and daily soft-contact-lens wearer. Rings about a red, painful left eye since yesterday, now with marked light sensitivity, watering, blurred vision and a feeling of "something in it". Slept in her lenses twice this week. Wants "drops for conjunctivitis". On the call she\u2019s clearly uncomfortable, squinting at light. No trauma with a foreign body she recalls. PMH: nil. Meds: none. No headache/nausea/halos volunteered.',
    script:{
      "opening": "\"Hi, sorry — I've got conjunctivitis I think, my left eye's gone really red and sore since yesterday. It's watering loads, the light's killing me, and it's a bit blurry. Could you just send some antibiotic drops to the chemist? I've got a big deadline and can't really get to anyone.\"",
      "facts": [
        {
          "topic": "The eye",
          "text": "If asked: left eye only. Started yesterday morning as gritty, now properly painful — \"a deep ache, like something's scratching under the lid\" — 7/10. You are squinting and have the curtains half-closed. Watering a lot; a little yellowish stuff in the corner this morning but not stuck shut."
        },
        {
          "topic": "Vision",
          "text": "If asked: \"It's blurry, like looking through a smeared window.\" If asked to cover your right eye and read something on your screen: you cannot read normal-size text with the left eye that you could read yesterday."
        },
        {
          "topic": "Contact lenses — downplay at first",
          "text": "You wear daily soft lenses, but you often stretch them to two or three days. If asked directly and without judgement: \"I fell asleep in them twice this week. And I sometimes rinse them under the tap if I've run out of solution.\" You took the lens out yesterday afternoon when it got sore."
        },
        {
          "topic": "Relevant negatives (if asked)",
          "text": "No injury, nothing flew into it that you know of. No headache, no feeling sick or vomiting, no rainbow halos around lights. The right eye is fine. No cold sores recently. No previous eye problems."
        },
        {
          "topic": "Medical background",
          "text": "Fit and well, no regular medicines, no allergies. Not pregnant."
        },
        {
          "topic": "Social",
          "text": "Graphic designer, 31, working from home, screen all day. Big client deadline on Friday. You live with your partner, who could drive you if needed. Non-smoker."
        },
        {
          "topic": "Hidden agenda — hold back",
          "text": "You are embarrassed about sleeping in your lenses — your optician has told you off before — and you are panicking about losing a day's work. That is why you are pushing for drops over the phone."
        },
        {
          "topic": "How to play it",
          "text": "Polite but in a hurry. Minimise at first (\"it's probably nothing\"). If the doctor asks about the lenses in a judgemental way, get defensive and vague. If they ask kindly and explain that your sight could be at risk, tell the truth and agree to go to eye casualty today: \"Okay. My partner can take me.\""
        }
      ],
      "ice": {
        "ideas": "\"It's conjunctivitis — some antibiotic drops will sort it.\"",
        "concerns": "\"I can't lose a day, I've got a deadline.\" Underneath: a nagging worry because the blurriness is scaring you, and embarrassment about the lenses.",
        "expectations": "\"Can you just send drops to the chemist?\" You will go to be seen today if the reason is explained clearly and without a telling-off."
      },
      "cues": [
        "\"The light's killing me, and it's a bit blurry.\" — say in the opening.",
        "\"I might have slept in them a couple of times — that's normal, right?\" — say when lenses come up.",
        "\"I've got a big deadline, I can't really get to anyone.\" — repeat when an appointment is suggested."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Distinguishes a SIGHT-THREATENING red eye from simple conjunctivitis: recognises that PAIN, PHOTOPHOBIA and REDUCED/BLURRED VISION are red flags \u2014 and does NOT diagnose conjunctivitis or prescribe antibiotic drops over the phone for this picture' },
      { dom:'dg', text:'Weights the CONTACT-LENS history as critical: sleeping in/over-wearing lenses with a painful red eye is microbial/contact-lens-associated KERATITIS (corneal ulcer) until proven otherwise — a sight-threatening emergency (College of Optometrists Clinical Management Guidelines: microbial keratitis; suspected Acanthamoeba keratitis needs emergency same-day referral) — and actively asks about the lens history she glosses' },
      { dom:'cm', text:'Arranges SAME-DAY ophthalmology assessment (eye casualty / urgent eye service) rather than a routine GP review or phone drops; advises REMOVING the lenses immediately and not re-wearing, and bringing lenses/case for culture' },
      { dom:'dg', text:'Screens the wider acute-red-eye differential and its emergencies: acute angle-closure glaucoma (severe pain, headache, nausea/vomiting, halos, hard red eye — RCOphth 2022; an emergency), anterior uveitis, scleritis, foreign body/abrasion — and recognises each needs same-day ophthalmology' },
      { dom:'cm', text:'Gives appropriate interim advice and avoids harmful actions: no antibiotic-steroid drops blind (steroids can be catastrophic in undiagnosed herpetic/microbial keratitis), analgesia, and prompt assessment; does not delay for a GP examination it can\u2019t safely complete by phone' },
      { dom:'ro',   text:'Hears the work-driven avoidance and the embarrassment about lens misuse, and handles the lens history WITHOUT shaming so she discloses it and accepts assessment, rather than taking the "just drops" request at face value' },
      { dom:'ro',   text:'Conveys the seriousness (possible threat to sight) clearly but calmly, so she prioritises the eye over the deadline' },
      { dom:'cm',    text:'Safety-nets emphatically: lenses out now, same-day eye assessment, and red flags that mean even more urgent care (worsening pain, marked visual loss, headache/vomiting → urgent/999); documents and confirms she will attend' },
    ],
    worked:[
      { lbl:'Refuse the drops',     txt:'"I\u2019m really glad you rang \u2014 but I\u2019m not going to send antibiotic drops for this, and I want to be honest about why. Conjunctivitis is usually sticky and uncomfortable but not truly painful, and it doesn\u2019t blur your vision or make light unbearable. Pain, light sensitivity and blurred vision in one eye are warning signs of something more serious that needs looking at properly, not drops down the phone."' },
      { lbl:'The lens clue',        txt:'"And the contact lenses are really important here \u2014 you mentioned sleeping in them. Honestly, no judgement at all, but that\u2019s a key piece: a painful red eye in someone who\u2019s slept in their lenses can be an infection or ulcer on the surface of the eye itself, which can threaten your sight if it\u2019s not treated quickly. So this is exactly the situation we take seriously."' },
      { lbl:'Same-day eye care',    txt:'"What you need today \u2014 not a GP, but the eye specialists \u2014 is to be seen at an eye casualty or urgent eye clinic, today. They can look at the surface of your eye with a special light and dye and treat it properly. I\u2019ll tell you exactly where to go. Take your lenses OUT now and don\u2019t put them back in, and bring your lenses and case with you \u2014 they may test them."' },
      { lbl:'The deadline, kindly', txt:'"I know the timing is awful with your deadline \u2014 but this is your eyesight, and an afternoon getting it checked is nothing against the risk of leaving it. Deadlines move; sight doesn\u2019t come back. Please put the eye first today."' },
      { lbl:'No blame',             txt:'"And please don\u2019t feel told off \u2014 loads of people overwear lenses, you\u2019re not in trouble. The reason I\u2019m asking is purely to get you the right care fast. Once this is sorted we can talk about lens habits, gently, another time."' },
      { lbl:'Safety-net',           txt:'"So: lenses out now, and I\u2019ll arrange/ direct you to be seen today. If the pain becomes severe, your vision drops a lot, or you get a bad headache with feeling sick \u2014 that\u2019s even more urgent, treat it as an emergency. Don\u2019t use any old steroid or antibiotic drops you\u2019ve got lying around. I\u2019ll note this down and check you were seen. Your sight is worth far more than the drops you rang for."' },
    ],
    learning:"An acute red eye with PAIN, PHOTOPHOBIA and REDUCED/BLURRED VISION is NOT simple conjunctivitis — and in a CONTACT-LENS wearer (especially with sleeping-in/over-wear) it is microbial/contact-lens-associated keratitis (corneal ulcer) until proven otherwise: a sight-threatening emergency needing SAME-DAY ophthalmology (College of Optometrists Clinical Management Guidelines on microbial and contact lens-associated keratitis), lenses out immediately, lenses/case for culture, and absolutely NOT phone antibiotic drops (and never blind steroid drops, which can be catastrophic in herpetic/microbial keratitis). Keep the wider can’t-miss differential in mind — acute angle-closure glaucoma (severe pain, headache, nausea/vomiting, halos, hard red eye), anterior uveitis, scleritis, foreign body/abrasion — each needing same-day eye assessment. The examinable hidden agenda is work-driven avoidance plus embarrassment about lens misuse, leading her to minimise the pain and gloss the lens history; elicit it without shaming so she discloses and accepts assessment, convey the threat to sight calmly, and safety-net the escalation red flags. Simple infective conjunctivitis is usually bilateral or spreads, with discharge/stickiness, mild discomfort, NO true pain, NO photophobia, NO visual loss. Pain + photophobia + reduced vision + contact lenses = keratitis until proven otherwise. Antibiotic drops over the phone would be the classic dangerous error.",
    knowledge:{
      guideline:'College of Optometrists Clinical Management Guidelines: microbial keratitis (bacterial, fungal), Acanthamoeba keratitis, contact lens-associated infiltrative keratitis · RCOphth angle-closure glaucoma guideline (2022) · BNF',
      points:[
        { h:'Triage by red flags, not the word "red eye"', t:'Sight-threatening features: true PAIN (not grittiness), PHOTOPHOBIA, reduced/blurred VISION, a fixed/abnormal pupil, marked unilateral redness, corneal haze, or trauma/chemical exposure. Their presence mandates same-day ophthalmology. Simple conjunctivitis has discharge/stickiness, mild discomfort, normal vision, no true pain or photophobia.' },
        { h:'Contact lenses change everything', t:'A painful red eye in a contact-lens wearer is microbial keratitis / corneal ulcer until proven otherwise — a sight-threatening emergency (College of Optometrists CMG: more serious cases need same-day ophthalmology; suspected Acanthamoeba keratitis needs emergency same-day referral). Advise immediate lens removal, no re-wear, same-day specialist assessment, and bringing lenses/case for culture. Risk rises with sleeping in lenses, over-wear, poor hygiene, and water exposure.' },
        { h:'Know the acute-red-eye emergencies', t:'Acute angle-closure glaucoma (severe pain, headache, nausea/vomiting, haloes, hazy cornea, fixed mid-dilated pupil, hard eye — older/hypermetropic; RCOphth 2022): emergency. Anterior uveitis (pain, photophobia, small/irregular pupil): same-day. Scleritis (severe boring pain): same-day. Keratitis/corneal ulcer, penetrating injury, chemical burn (irrigate immediately): emergency.' },
        { h:'Don\u2019t phone-prescribe \u2014 and never blind steroids', t:'Do not diagnose conjunctivitis or prescribe antibiotic drops remotely for a painful photophobic red eye with reduced vision. Never give topical steroids without slit-lamp assessment \u2014 they can dramatically worsen herpetic or microbial keratitis and threaten sight.' },
        { h:'Assess properly', t:'Sight-threatening red eyes need slit-lamp examination with fluorescein, visual acuity and (for angle closure) intraocular pressure \u2014 hence same-day ophthalmology/optometry referral rather than primary-care phone management.' },
        { h:'Address the hidden agenda', t:'Work pressure and embarrassment about lens misuse drive minimisation and remote-care requests. Elicit the lens history without shaming so it\u2019s disclosed, frame assessment around protecting sight, and defer lens-habit advice to a non-judgemental follow-up.' },
        { h:'Never do', t:'Never treat a painful photophobic red eye with reduced vision as conjunctivitis; never phone-prescribe antibiotic drops for it; never give blind steroid drops; never miss the contact-lens keratitis or angle-closure picture; never let a deadline defer same-day eye assessment.' },
        { h:'Safety-net & action', t:'Lenses out now; same-day eye casualty/urgent eye service; bring lenses/case; escalation red flags (severe pain, marked visual loss, headache + vomiting) → emergency; document and confirm attendance.' }
      ]
    }
  };

  /* ============ 91. TELEPHONE — Sudden sensorineural hearing loss ============ */
  const c91 = {
    id:'sudden-hearing-loss', title:'"My ear\u2019s blocked — I think it\u2019s just wax"', type:'telephone', duration:12,
    meta:{ age:48, sex:'M', setting:'Telephone — sudden one-sided hearing loss over 2 days.', system:'ENT / Sudden sensorineural hearing loss', checked:'October 2026' },
    brief:'Mr Damien Ofori, 48, teacher. Rings because his RIGHT ear went "blocked / muffled" suddenly 2 days ago \u2014 he can barely hear from it, with ringing (tinnitus) and a sense of fullness, plus mild unsteadiness. No pain, no discharge, no recent cold/wax problems. He assumes it\u2019s wax and wants "ear drops or syringing booked". On the call: no ear pain, no fever. The loss is unilateral and came on over hours. PMH: nil. Meds: none.',
    script:{
      "opening": "\"Hi there. My right ear's gone all blocked and muffled — came on over a day or so and now I can barely hear out of it, and there's a ringing noise. I reckon it's just wax built up. Could you book me in for syringing, or tell me which drops to get? It's a bit annoying with teaching, the kids sound far away on that side. No pain or anything, so I'm not too worried.\"",
      "facts": [
        {
          "topic": "The ear",
          "text": "If asked: right ear only. Noticed on Monday morning (2 days ago) — it went muffled over a few hours that day and has stayed the same since. \"Like having cotton wool in it.\" Constant high-pitched ringing in that ear, and a feeling of pressure."
        },
        {
          "topic": "Hearing check you can do",
          "text": "If asked to try: with a finger in your left ear, you can hardly hear the TV on the right side. If asked to hum, the hum sounds louder in your LEFT (good) ear."
        },
        {
          "topic": "Balance (if asked)",
          "text": "\"I've felt a bit off-balance, a bit floaty, when I turn quickly.\" No room-spinning, no falls, you can walk in a straight line, you have not been sick."
        },
        {
          "topic": "Relevant negatives (if asked)",
          "text": "No ear pain, no discharge, no fever, no recent cold, no flying or diving, no loud noise exposure, no head injury. Never had wax problems or syringing before. No headache, no weakness or numbness of face, arms or legs, no double vision, no slurred speech, no trouble swallowing."
        },
        {
          "topic": "Medical background",
          "text": "Fit and well. No regular medicines, no allergies. BP was \"fine\" at a works health check last year."
        },
        {
          "topic": "Social",
          "text": "Secondary-school teacher, 48. Married, two teenagers. Non-smoker, drinks a few beers at weekends. Drives to work."
        },
        {
          "topic": "Family history — hold back",
          "text": "Your dad had a stroke at 70. Mention it only if the doctor asks about family history or about what is worrying you."
        },
        {
          "topic": "Hidden worry — hold back",
          "text": "The suddenness and the floaty feeling have unnerved you: \"Part of me wondered if it was something in the brain, like Dad.\" You have talked yourself into \"wax\" because it is the easy answer. Say this only if asked what you are worried it might be."
        },
        {
          "topic": "How to play it",
          "text": "Relaxed and a bit jokey; you want this sorted quickly without fuss because it is mid-term. If the doctor explains clearly that this is not wax and needs to be seen today because early treatment may save the hearing, you are surprised but agree. If they just book syringing, accept happily."
        }
      ],
      "ice": {
        "ideas": "\"It's wax. Syringing or some drops will clear it.\"",
        "concerns": "Mainly the hassle in a busy term. Underneath (only if asked): \"Dad had a stroke — I did wonder if it was something in my head.\"",
        "expectations": "\"Book me in for syringing or tell me which drops to get.\" You will go to ENT or A&E today if the reason is made clear."
      },
      "cues": [
        "\"It came on over a day or so.\" — say in the opening.",
        "\"No pain or anything, so I'm not too worried.\" — say in the opening, lightly.",
        "\"I've felt a bit floaty, to be honest.\" — mention if asked about other symptoms; then mention Dad if the doctor follows it up."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises SUDDEN UNILATERAL hearing loss (over hours\u2013days) with tinnitus/fullness and NO pain/discharge/wax history as possible SUDDEN SENSORINEURAL HEARING LOSS \u2014 an ENT EMERGENCY \u2014 and does NOT attribute it to wax or book routine syringing/drops' },
      { dom:'cm', text:'Knows SSNHL is TIME-CRITICAL: urgent corticosteroid treatment works best when started early (ideally within days; ENT UK 2018: benefit limited beyond about 2 weeks), so arranges immediate referral to be seen within 24 hours by ENT or the emergency department (NICE NG98: hearing loss developing over 3 days or less within the past 30 days) for audiometry and treatment' },
      { dom:'dg', text:'Attempts/uses simple discriminators where possible (tuning-fork Weber/Rinne logic \u2014 Weber lateralises to the GOOD ear in sensorineural loss) and asks about features distinguishing conductive (wax/effusion) from sensorineural loss' },
      { dom:'dg', text:'Screens CENTRAL red flags: focal neurology, severe vertigo/ataxia, sudden severe headache, other cranial-nerve signs \u2014 which raise concern for a central cause (e.g. posterior-circulation stroke/cerebellopontine pathology) needing EMERGENCY assessment' },
      { dom:'cm', text:'Avoids the trap of wax management as a default: does not delay with drops/olive oil/syringing or a routine audiology wait; recognises that "no pain" does not make it benign' },
      { dom:'ro',   text:'Hears the minimisation and the buried stroke fear, screens central features sensitively, and addresses the worry rather than colluding with "just wax"' },
      { dom:'ro',   text:'Conveys urgency clearly without alarmism so he prioritises assessment over the school term, and explains why early treatment matters (preserving hearing)' },
      { dom:'cm',    text:'Safety-nets and acts: ENT or emergency department within 24 hours (NICE NG98); central red flags (new weakness, severe vertigo, slurred speech, facial droop) → 999/emergency; explains the steroid treatment rationale and the time window; documents and confirms the referral' },
    ],
    worked:[
      { lbl:'Refuse the wax label', txt:'"I\u2019m glad you rang \u2014 and I need to be honest, because the timing matters: I don\u2019t think this is wax. Wax usually builds up slowly, often with a history of it, and tends to come with no ringing and no unsteadiness. A SUDDEN loss in one ear, over a day or two, with ringing and that blocked feeling, can be a problem with the hearing nerve itself \u2014 and that\u2019s something we treat as an emergency, not with syringing."' },
      { lbl:'Why it\u2019s urgent',     txt:'"Here\u2019s the key thing: if it is the nerve, there\u2019s a treatment \u2014 a course of steroids \u2014 that works much better the sooner it\u2019s started, ideally within days. Leave it thinking it\u2019s wax for a few weeks and the chance to save that hearing can be lost. That\u2019s why I don\u2019t want to book routine syringing; I want you assessed urgently by the ear specialists."' },
      { lbl:'Screen the brain',     txt:'"You mentioned feeling a bit unsteady \u2014 let me check a few things. Any weakness or numbness in your face, arm or leg? Any slurred speech, double vision, or a sudden bad headache? Severe spinning? \u2026 Good. I ask because, rarely, sudden hearing change can come from something affecting the brain\u2019s circulation, and those signs would make it even more urgent."' },
      { lbl:'Surface the fear',     txt:'"Can I gently ask \u2014 has the suddenness frightened you at all? \u2026 Your dad\u2019s stroke. That makes complete sense, and I\u2019m glad you said it. The good news is I\u2019m not finding the warning signs of that today \u2014 but it\u2019s exactly why getting you properly checked, rather than assuming wax, is the right move."' },
      { lbl:'The plan',             txt:'"So: I’m arranging for you to be seen by the ear, nose and throat team — or the emergency department if that’s quicker — within 24 hours, for a proper hearing test and treatment. Don\u2019t put any drops in or try to clear it yourself meanwhile. I know it\u2019s a pain mid-term, but this is the kind of thing where a day or two makes the difference to your hearing."' },
      { lbl:'Safety-net',           txt:'"If before you\u2019re seen you develop any weakness, slurred speech, a facial droop, severe dizziness or a sudden severe headache \u2014 that\u2019s 999 immediately. Otherwise, I\u2019ll get the urgent ear referral sorted now and confirm where you\u2019re going. You rang expecting syringing \u2014 what I\u2019m doing instead is trying to save the hearing in that ear, while there\u2019s still time."' },
    ],
    learning:"Sudden, unilateral hearing loss over hours to days — with tinnitus and aural fullness, and WITHOUT pain, discharge or a wax history — is possible sudden sensorineural hearing loss (SSNHL), an ENT EMERGENCY, not wax. It is time-critical: urgent corticosteroid treatment works best started early (ideally within days; ENT UK 2018: benefit is limited beyond about 2 weeks), so the action is immediate referral to be seen within 24 hours by ENT or the emergency department (NICE NG98) for audiometry and steroids — NOT routine syringing, drops, or an olive-oil-and-wait plan, and \"no pain\" does not make it benign. Use simple discriminators where possible (Weber lateralises to the GOOD ear in sensorineural loss), and screen central red flags (focal neurology, severe vertigo/ataxia, sudden severe headache) that raise concern for a posterior-circulation stroke or cerebellopontine lesion needing emergency assessment. The examinable hidden agenda is minimisation (\"just wax, not worried\") masking a buried fear of \"something in the brain\" (a father’s stroke); screen the central features, address the fear, convey urgency without alarmism, and safety-net stroke red flags. SSNHL is treated with urgent (high-dose) corticosteroids, started by the specialist after audiometry, and benefits from EARLY treatment — ideally within days (ENT UK 2018: benefit is greatest when started early and is limited beyond about 2 weeks). Misattributing it to wax and booking routine syringing wastes the treatment window and can mean permanent deafness in that ear.",
    knowledge:{
      guideline:'NICE NG98 Hearing loss in adults: assessment and management (2018) · ENT UK sudden sensorineural hearing loss guideline (2018) · NICE NG155 Tinnitus (2020)',
      points:[
        { h:'Recognise SSNHL', t:'Sudden sensorineural hearing loss = rapid-onset (over ≤72 hours; NICE NG98 uses "3 days or less") sensorineural loss, usually unilateral, often with tinnitus and aural fullness, frequently without pain or discharge. It is an otological EMERGENCY \u2014 not wax \u2014 and a substantial proportion are idiopathic, with some secondary to vascular, viral, autoimmune or (rarely) vestibular schwannoma/central causes.' },
        { h:'Time-critical treatment', t:'Urgent high-dose corticosteroids (oral ± intratympanic) improve outcomes when started EARLY — ideally within days; ENT UK (2018): benefit declines and is limited beyond about 2 weeks. The specialist starts treatment after audiometry (ENT UK suggests prednisolone 1 mg/kg/day, maximum 60 mg, for 7 days then tapered over 5 days; intratympanic steroid as an option or salvage). Hence NICE NG98: sudden loss (over 3 days or less) within the past 30 days → refer immediately, to be seen within 24 hours by ENT or the emergency department; sudden loss more than 30 days ago, or loss worsening over 4–90 days → urgent referral, seen within 2 weeks. Do NOT manage as wax or wait for a routine appointment.' },
        { h:'Distinguish conductive from sensorineural', t:'Tuning-fork tests help: in sensorineural loss, Weber lateralises to the GOOD ear and Rinne is positive (air > bone) in the affected ear; in conductive loss (wax/effusion), Weber lateralises to the AFFECTED ear and Rinne may be negative. Wax/conductive loss is usually gradual with relevant history. A normal-looking ear canal with sudden loss points away from wax.' },
        { h:'Screen central red flags', t:'Focal neurology, severe vertigo/ataxia, other cranial-nerve signs, sudden severe headache, or vascular risk raise concern for posterior-circulation stroke or cerebellopontine-angle pathology \u2014 escalate to emergency assessment. Unilateral SNHL also warrants later MRI to exclude vestibular schwannoma (NICE NG98: consider MRI of the internal auditory meatus for asymmetric sensorineural loss of 15 dB or more at 2 adjacent frequencies; the specialist arranges it).' },
        { h:'Don\u2019t default to wax', t:'Misattributing sudden SNHL to wax and arranging routine syringing/drops wastes the treatment window. "No pain" does not make it benign. Examine/triage to exclude simple conductive causes, but treat sudden sensorineural patterns as urgent.' },
        { h:'Address the hidden agenda', t:'Minimisation ("just wax, not worried") and reassurance-seeking can mask a real fear (here, a father\u2019s stroke). Screen central features sensitively, name and address the fear, and frame urgent referral as preserving hearing.' },
        { h:'Never do', t:'Never call sudden unilateral hearing loss "wax" without excluding SSNHL; never book routine syringing/olive oil for it; never assume "no pain = benign"; never miss central red flags; never lose the early steroid window to a routine wait.' },
        { h:'Safety-net & action', t:'Immediate referral to be seen within 24 hours by ENT or the emergency department (NICE NG98) for audiometry and steroids; no self-treatment meanwhile; central red flags (weakness, slurred speech, facial droop, severe vertigo, thunderclap headache) → 999; document and confirm the referral; arrange MRI follow-up for persistent unilateral SNHL.' }
      ]
    }
  };

  /* ============ 92. VIDEO — Persistent mouth ulcer (oral cancer 2WW) ============ */
  const c92 = {
    id:'mouth-ulcer-2ww', title:'"It\u2019s just an ulcer from my denture rubbing"', type:'video', duration:12,
    meta:{ age:63, sex:'M', setting:'Video consultation — a mouth ulcer that won\u2019t heal.', system:'ENT / Oral cancer (suspected cancer pathway)', checked:'October 2026' },
    brief:'Mr Frank Mensah, 63, retired bus driver. Books because of a sore patch in his mouth. On the call (and a photo): an ulcer on the side of the tongue/floor of mouth present ~6 weeks, not healing, now slightly raised and firm at the edges, occasionally bleeds; he\u2019s also noticed a lump in his neck. Smoker 40 years, drinks daily, chews betel/paan occasionally (cultural). Blames a "rubbing denture". Wants a mouth gel. PMH: nil. Meds: none.',
    script:{
      opening:'"Hello doctor. I\u2019ve got this ulcer in my mouth, on the side of my tongue, been there about six weeks. I\u2019m sure it\u2019s just my denture rubbing \u2014 it catches there. The wife wanted me to ring because it\u2019s not gone. Could you just prescribe one of those mouth gels or a mouthwash for ulcers? I\u2019ve got a photo. Oh, and there\u2019s a bit of a lump come up in my neck but that\u2019s probably a gland from the ulcer, isn\u2019t it."',
      facts:[
        { topic:'The red flags',        text:"If characterised (history + photo): an ulcer present >3 WEEKS (≈6 weeks), NOT healing, with RAISED/FIRM (indurated) edges, occasional bleeding, on a high-risk site (lateral tongue/floor of mouth) — plus a NECK LUMP (possible lymphadenopathy). NICE NG12: consider a suspected cancer pathway referral (appointment within 2 weeks) for oral cancer with unexplained ulceration in the oral cavity lasting more than 3 weeks, or a persistent and unexplained neck lump; the indurated, persistent, bleeding ulcer with a neck node is high concern, so referral is clearly warranted." },
        { topic:'The risk factors',     text:'On questioning: 40-year smoker, daily alcohol, and BETEL/PAAN (areca nut) chewing \u2014 all major risk factors for oral squamous cell carcinoma (and tobacco+alcohol synergise; betel is independently carcinogenic). High-risk profile.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "just the denture rubbing" is fear-driven denial: his brother had mouth/throat cancer and a hard time with treatment, and Frank is frightened of the same \u2014 the disfigurement, the treatment, dying like his brother \u2014 so he\u2019s reframed it as a benign denture sore and is pushing for a gel to avoid facing it. There may also be cultural reluctance/shame around the betel chewing he\u2019s downplaying.' },
        { topic:'The denture distractor',  text:'A rubbing denture CAN cause ulcers \u2014 but a denture ulcer should heal within ~2\u20133 weeks once the cause is removed/adjusted; a non-healing, indurated ulcer with a neck node cannot be explained away by the denture, and assuming so is the trap.' },
        { topic:'What he wants',        text:"Officially: a mouth gel/mouthwash to soothe the ulcer. What he needs: recognition that an unexplained, non-healing oral ulcer >3 weeks (with induration and a neck node, in a high-risk patient) warrants an oral cancer suspected cancer pathway referral (NICE NG12) and examination — with his fear and the betel/alcohol/smoking addressed sensitively." },
      ],
      ice:{
        ideas:'It\u2019s just an ulcer from his denture rubbing; a gel or mouthwash will sort it; the neck lump is just a gland.',
        concerns:'HIDDEN AGENDA \u2014 his brother had mouth/throat cancer and suffered; Frank is frightened of the same and has reframed it as a denture sore to avoid facing it; possible cultural shame about betel chewing.',
        expectations:'A mouth gel/mouthwash. What he actually needs: examination and an urgent oral cancer suspected cancer pathway referral for a non-healing indurated ulcer + neck node, with his fear and risk factors addressed.'
      },
      cues:['Non-healing ulcer >3 weeks + firm/raised edges + bleeding + neck lump on a high-risk site \u2014 oral cancer suspected cancer pathway, not a denture sore.','Smoker + daily alcohol + betel/paan \u2014 stacked oral-cancer risk factors.','"Just the denture, the lump\u2019s probably a gland" \u2014 denial; brother\u2019s cancer is the fear underneath.']
    },
    checkpoints:[
      { dom:'dg', text:'Recognises an UNEXPLAINED oral ulcer persisting >3 WEEKS (non-healing, indurated/firm edges, bleeding, high-risk site) as suspicious for oral cancer, and does NOT accept the "denture rubbing" explanation or prescribe a gel and wait' },
      { dom:'cm', text:"Acts on the NICE NG12 pathway: makes the suspected cancer pathway referral that NG12 says to consider for oral cancer with unexplained oral ulceration lasting more than 3 weeks or a persistent unexplained neck lump — and notes that at 63 the neck lump also meets the NG12 laryngeal criterion (age 45 and over with an unexplained neck lump or persistent hoarseness); restates the threshold, tagged NICE NG12 — and knows the NG12 urgent dentist route is for a lump on the lip or in the mouth, or red or red-and-white patches" },
      { dom:'dg', text:"Takes the NECK LUMP seriously: a persistent unexplained neck lump is itself a NICE NG12 criterion (oral cancer; and laryngeal cancer at 45 and over) and, with the ulcer, raises concern for nodal spread — not simply \"a reactive gland\"" },
      { dom:'dg', text:'Examines properly (in person, not just the photo): inspects and PALPATES the lesion (induration) and the neck nodes, checks the whole oral cavity, rather than relying on a video impression' },
      { dom:'dg', text:'Elicits and weights the risk factors (smoking, alcohol, betel/areca-nut/paan) and addresses them \u2014 recognising betel as an independent carcinogen \u2014 and recognises the denture as a distractor (a denture ulcer should heal in ~2\u20133 weeks once adjusted)' },
      { dom:'ro',   text:'Hears the denial as fear, surfaces the brother\u2019s cancer gently, and treats the wife\u2019s prompting as the reliable signal rather than colluding with "just the denture"; handles betel-chewing without cultural judgement' },
      { dom:'ro',   text:'Balances honesty with reassurance (many mouth ulcers are benign, but a non-healing one needs urgent checking), and addresses the fear of treatment/disfigurement with compassion' },
      { dom:'cm',    text:'Safety-nets and follows up: explains the suspected cancer pathway timeframe (appointment within 2 weeks; NHS England Faster Diagnosis Standard: cancer diagnosed or ruled out within 28 days of referral) and what to expect (specialist examination, likely biopsy), what would warrant sooner review, smoking/alcohol/betel cessation support, ensures he attends, documents, and tracks the result' },
    ],
    worked:[
      { lbl:'Refuse the denture story', txt:'"I\u2019m really glad your wife got you to ring. I\u2019m not going to just send a gel, though, and I\u2019ll tell you why honestly. A denture rub does cause ulcers \u2014 but those heal within a couple of weeks once we ease the denture. An ulcer that\u2019s been there six weeks, isn\u2019t healing, has firm raised edges and bleeds, especially with a lump in the neck \u2014 that\u2019s a different situation and we have to check it properly."' },
      { lbl:'Examine, don\u2019t guess', txt:'"I need to see and feel it in person, not just on a photo \u2014 I\u2019ll look at the whole mouth, feel the ulcer itself, and feel that lump in your neck. A photo\u2019s a start, but feeling whether something\u2019s firm is exactly the bit that matters here. The neck lump isn\u2019t something I want to write off as \u2018just a gland\u2019 either."' },
      { lbl:'Name the pathway',      txt:"\"Based on this, you meet the criteria for an urgent referral to the mouth/throat specialists — an appointment within two weeks, aiming for an answer within 28 days — who’ll examine you and almost certainly take a small sample. That’s what the NICE suspected cancer guideline, NICE NG12, says to consider for a mouth ulcer that hasn’t healed in three weeks, and even more so with the neck lump. It is NOT me saying it’s cancer; it’s making sure, quickly.\"" },
      { lbl:'Surface the real fear', txt:'"Can I gently ask \u2014 is there a reason this has worried you more than you\u2019re letting on? \u2026 Your brother, and what he went through. I\u2019m so sorry. That makes total sense of wanting it to be just the denture. But that fear is exactly why we look now, early \u2014 because if anything IS there, catching it early changes everything about how treatable and how manageable it is."' },
      { lbl:'Risk factors, no shame',txt:'"You mentioned smoking, a daily drink, and the paan. No judgement \u2014 but those together are the main things that irritate the mouth lining, and the betel especially. Stopping or cutting down really matters now, and I\u2019ll help you with all of it, gently, whenever you\u2019re ready. Today\u2019s priority is getting you seen."' },
      { lbl:'Safety-net',            txt:'"So: I\u2019ll examine you and get the urgent referral in today. If it bleeds a lot, you struggle to swallow or speak, or the lump grows, come back sooner. I\u2019ll note exactly how things look and follow up the result with you. You came in for a gel; what I\u2019m doing is making sure that if there\u2019s something to find, we find it early \u2014 that\u2019s what gives you the best outcome."' },
    ],
    learning:"An unexplained oral ulcer persisting >3 weeks — non-healing, with indurated (firm/raised) edges and bleeding, on a high-risk site — is suspicious for oral cancer and must not be reassured away as a \"denture rub\" (a denture ulcer should heal within ~2–3 weeks once the cause is adjusted). The NICE NG12 action is to consider an oral cancer suspected cancer pathway referral for ulceration lasting more than 3 weeks — and with these features, to make it — and a persistent unexplained neck lump is itself an NG12 criterion (oral cancer, and laryngeal cancer at 45 and over) — with the ulcer it raises concern for nodal spread, not \"just a gland\". Examine and PALPATE in person (induration, neck nodes) rather than relying on a photo, and weight the risk factors — smoking, alcohol (which synergise) and betel/areca-nut/paan (an independent carcinogen). The examinable hidden agenda is fear-driven denial: a brother who had head-and-neck cancer, with dread of treatment/disfigurement, reframed as a benign denture sore, plus possible cultural reluctance around betel. Surface the fear, treat the wife’s prompting as the reliable signal, address risk factors without cultural judgement, balance honesty with reassurance, and complete the suspected cancer pathway referral with documentation and follow-up.",
    knowledge:{
      guideline:"NICE NG209 Tobacco: preventing uptake, promoting quitting and treating dependence (2021) · NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) · NICE PH24 Alcohol-use disorders: prevention (2010) · IARC Monographs vol. 85 (betel quid and areca nut; international) · NHS England Faster Diagnosis Standard (October 2023)",
      points:[
        { h:"NICE NG12 — oral cancer", t:"NICE NG12: consider a suspected cancer pathway referral (appointment within 2 weeks) for oral cancer in people with unexplained ulceration in the oral cavity lasting more than 3 weeks, or a persistent and unexplained lump in the neck. Consider urgent referral for assessment by a dentist for a lump on the lip or in the oral cavity, or a red or red-and-white patch consistent with erythroplakia or erythroleukoplakia. Laryngeal cancer: consider a suspected cancer pathway referral at age 45 and over with persistent unexplained hoarseness or an unexplained lump in the neck — Frank, at 63 with a neck lump, meets this too. Other persistent throat symptoms (sore throat, pain on swallowing) are assessed on clinical judgement." },
        { h:'Don\u2019t accept "denture rubbing"', t:'Trauma (a sharp tooth/denture) can ulcerate the mucosa, but such ulcers heal within ~2\u20133 weeks once the cause is removed/adjusted. A non-healing, indurated, bleeding ulcer \u2014 especially on the lateral tongue or floor of mouth \u2014 cannot be safely attributed to the denture; assuming so is the classic trap.' },
        { h:'Take the neck lump seriously', t:"A persistent unexplained neck lump is an independent NICE NG12 criterion (oral cancer; laryngeal cancer at 45 and over) and, alongside an oral ulcer, suggests possible nodal metastasis. Do not dismiss it as a reactive gland. Palpate the neck and the lesion." },
        { h:'Examine and palpate \u2014 not just a photo', t:'Assess the whole oral cavity in person, palpating the lesion (induration is a key sign) and the cervical lymph nodes. A photo or video impression is insufficient. Document site, size, induration and the neck findings.' },
        { h:'Risk factors', t:'Tobacco (smoked and smokeless) and alcohol are the major risks and act synergistically; betel quid/areca nut/paan is an independent carcinogen (IARC, international; high relevance in South Asian and some other communities); HPV (oropharyngeal), sun (lip), poor oral hygiene and immunosuppression also contribute. Address these without cultural judgement: offer stop-smoking support (NICE NG209) and alcohol brief advice (NICE PH24).' },
        { h:'Address the hidden agenda', t:'Denial ("just the denture") often masks fear (a relative\u2019s head-and-neck cancer, dread of disfiguring treatment) and sometimes cultural shame about betel/alcohol. Surface the fear, treat the concerned relative\u2019s prompting as reliable, and frame urgent referral as catching it early when most treatable.' },
        { h:'Never do', t:'Never attribute a non-healing >3-week oral ulcer to a denture; never prescribe a gel and wait; never dismiss a persistent neck lump as a gland; never rely on a photo instead of palpating; never deliver a shaming/culturally-judgemental lifestyle lecture instead of referring.' },
        { h:'Safety-net & follow-up', t:"Oral cancer suspected cancer pathway referral (NICE NG12; NHS England Faster Diagnosis Standard: diagnosis or all-clear within 28 days — tell him when to expect contact and what to do if he hears nothing) (and neck-lump pathway); examine/palpate and document; advise re bleeding/swallowing/lump growth; smoking/alcohol/betel cessation support; confirm attendance; track and discuss the result." }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c89, c90, c91, c92);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'melanoma-2ww': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Keith Donnelly', age: '54 years · male',
        pmh: ['Changing pigmented lesion, upper back, ~4 months', 'Now irregular outline + uneven colour, ~8 mm, itched, bled once', 'Roofer; fair skin; repeated sunburns; never uses sunscreen'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Wife noticed the change and pushed him to come; he minimises ("just a mole").',
        reason: 'Video consultation — a mole his wife says has changed.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse the glance-off', d:'A genuinely changed, irregular, multi-coloured mole isn\u2019t reassured away from a photo. The wife\u2019s concern is the reliable signal.' },
        { t:'2–4',  h:'Structured assessment', d:'Weighted 7-point checklist (size/shape/colour = 2 each; \u22657mm, inflammation, ooze, sensation = 1 each); \u22653 → refer. ABCDE.' },
        { t:'4–6',  h:'Examine in person',     d:'Dermoscopy + wider skin/node check; don\u2019t rely on the photo or skip exam because it\u2019s video.' },
        { t:'6–9',  h:"NICE NG12 suspected cancer pathway + the fear",   d:'Melanoma suspected cancer pathway referral (checklist score about 9; answer within 28 days); don’t excise/watch-wait. Surface the workmate\u2019s death and the breadwinner fear.' },
        { t:'9–12', h:'Sun safety + safety-net', d:'Prevention advice without shaming; document the lesion/score; re-present if more change; track the result.' }
      ],
      wordPics: {
        fail: 'Reassures from the photo/glance, accepts "they all change", prescribes nothing useful and waits or offers to "keep an eye"; skips examination because it\u2019s a video; never surfaces the workmate\u2019s death or the breadwinner fear — a curable melanoma reassured into delay.',
        pass: 'Recognises the suspicious lesion, applies the checklist, examines in person, and refers on the melanoma suspected cancer pathway with sun-safety advice.',
        exc:  'Refuses the glance-off and treats the wife\u2019s concern as reliable; applies the weighted 7-point checklist and examines with dermoscopy and a node check; refers on the suspected cancer pathway without excising/watching; surfaces the workmate-death and breadwinner fear; gives sun-safety advice without shaming; and documents and follows up.'
      },
      avoid: [
        { dont:'"From the photo it looks like a normal mole — they do all change a bit, try not to worry."', instead:'"A mole that\u2019s genuinely changed — bigger, irregular, more than one colour, itched and bled — needs a proper look and likely an urgent referral. I can\u2019t judge that from a photo."', why:'Reassuring a changing pigmented lesion from a photo risks missing a curable melanoma.' },
        { dont:'"I can freeze it off / cut it out for you here today."', instead:'"I won\u2019t remove it myself — a suspicious mole needs the specialists to take it out whole and check it under the microscope, on the urgent pathway."', why:'Cryotherapy/partial removal of a suspicious lesion in primary care compromises diagnosis and staging.' },
        { dont:'"Let\u2019s keep an eye on it and review in a couple of months."', instead:'"This meets the criteria for an urgent two-week skin-cancer referral now — watching and waiting isn\u2019t safe for a lesion that\u2019s changed like this."', why:'"Watch and wait" for a checklist-positive lesion delays diagnosis of a potentially aggressive cancer.' }
      ]
    },

    'red-eye-triage': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Rosa Iqbal', age: '31 years · female',
        pmh: ['Daily soft contact-lens wearer; slept in lenses twice this week', 'Left eye: red, painful, photophobic, watering, blurred, FB sensation — since yesterday', 'No headache/nausea/halos volunteered'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Wants phone antibiotic drops for "conjunctivitis"; big work deadline.',
        reason: 'Telephone — acute painful red eye.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse phone drops',  d:'Pain + photophobia + blurred vision ≠ conjunctivitis. Don\u2019t diagnose conjunctivitis or prescribe drops remotely.' },
        { t:'2–4',  h:'The lens clue',        d:'Slept-in/over-worn lenses + painful red eye = microbial keratitis until proven otherwise — sight-threatening. Ask the lens history she glosses.' },
        { t:'4–6',  h:'Same-day eye care',    d:'Eye casualty/urgent eye service TODAY; lenses out now, no re-wear; bring lenses/case for culture.' },
        { t:'6–8',  h:'Wider differential',   d:'Angle-closure (pain+headache+vomiting+halos+hard eye), uveitis, scleritis, FB/abrasion — each same-day. Never blind steroids.' },
        { t:'8–12', h:'Deadline + no blame + net', d:'Sight over deadline; handle lens embarrassment kindly; escalation red flags (severe pain, visual loss, headache+vomiting) → emergency.' }
      ],
      wordPics: {
        fail: 'Diagnoses conjunctivitis over the phone and sends antibiotic (or worse, steroid) drops; ignores the contact-lens history and the pain/photophobia/blurring; a sight-threatening keratitis is mismanaged remotely.',
        pass: 'Recognises the red-flag red eye, refuses phone drops, weights the lens history, and arranges same-day ophthalmology with lenses out.',
        exc:  'Distinguishes the sight-threatening red eye from conjunctivitis and refuses remote drops; treats the slept-in-lens history as the key clue for microbial keratitis; arranges same-day eye assessment with lenses out and brought for culture; keeps the angle-closure/uveitis differential and avoids blind steroids; and handles the deadline and lens embarrassment without judgement, with clear escalation red flags.'
      },
      avoid: [
        { dont:'"Sounds like conjunctivitis — I\u2019ll send antibiotic drops to the chemist."', instead:'"Pain, light sensitivity and blurred vision in one eye aren\u2019t conjunctivitis — and with contact lenses that\u2019s a possible eye-surface infection. You need same-day eye specialist assessment, not drops down the phone."', why:'Phone-prescribing for a painful photophobic red eye risks a sight-threatening keratitis.' },
        { dont:'"Sleeping in your lenses a couple of times is fine, don\u2019t worry about that."', instead:'"Sleeping in lenses is actually the key piece here — it\u2019s exactly what can lead to an infection on the surface of the eye. No judgement, but it makes me want you seen today."', why:'Dismissing the lens-abuse history misses the central risk factor for contact-lens keratitis.' },
        { dont:'"Pop in a steroid drop if you\u2019ve got one, it\u2019ll calm it down."', instead:'"Don\u2019t use any steroid or old drops — in an undiagnosed eye infection steroids can make it dramatically worse and threaten your sight. Let the specialists assess it first."', why:'Blind topical steroids can be catastrophic in herpetic/microbial keratitis.' }
      ]
    },

    'sudden-hearing-loss': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Damien Ofori', age: '48 years · male',
        pmh: ['Sudden RIGHT-sided hearing loss over ~2 days; tinnitus + fullness; mild unsteadiness', 'No pain, no discharge, no wax/cold history', 'Father had a stroke'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Assumes wax; wants syringing/drops booked. Minimises ("no pain, not worried").',
        reason: 'Telephone — sudden one-sided hearing loss.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse the wax label', d:'Sudden, unilateral loss over hours–days + tinnitus/fullness, no pain/discharge/wax history = possible SSNHL, an emergency — not wax.' },
        { t:'2–4',  h:'Why it\u2019s urgent',    d:'SSNHL needs early steroids; benefit best within days and limited beyond about 2 weeks (ENT UK 2018). Routine syringing wastes the window and risks permanent deafness.' },
        { t:'4–6',  h:'Discriminate + screen', d:'Tuning-fork logic (Weber to the GOOD ear in sensorineural). Screen central red flags: weakness, slurred speech, diplopia, severe vertigo, thunderclap headache.' },
        { t:'6–9',  h:'Surface the fear',     d:'Unsteadiness + father\u2019s stroke = buried "something in the brain" fear. Address it; reassure on the screen while keeping urgency.' },
        { t:'9–12', h:'Urgent ENT + net',     d:'Seen within 24 hours by ENT or the emergency department (NICE NG98); no self-treatment; central red flags → 999; confirm the referral.' }
      ],
      wordPics: {
        fail: 'Books routine syringing or recommends olive oil for "wax", reassured by "no pain"; misses sudden sensorineural hearing loss and its narrow steroid window; never screens central red flags or the stroke fear.',
        pass: 'Recognises possible SSNHL, refers to ENT or the emergency department to be seen within 24 hours (NICE NG98), uses tuning-fork logic, screens central red flags, and safety-nets.',
        exc:  'Refuses the wax label and names SSNHL as a time-critical emergency; explains the early-steroid window; uses discriminators and screens central red flags; surfaces and addresses the buried stroke fear; and arranges assessment by ENT or the emergency department within 24 hours (NICE NG98) with a clear stroke safety-net.'
      },
      avoid: [
        { dont:'"Sounds like wax — I\u2019ll book you in for syringing." ', instead:'"A sudden one-sided loss with ringing, no pain and no wax history isn\u2019t typical wax — it can be the hearing nerve, which is an emergency. Routine syringing would waste precious time."', why:'Misattributing sudden SNHL to wax loses the early steroid window and risks permanent deafness.' },
        { dont:'"No pain, so it\u2019s nothing serious — try some olive oil drops."', instead:'"\u2018No pain\u2019 doesn\u2019t make it safe here — sudden nerve-type hearing loss is painless. You need to be seen by ENT or the emergency department within 24 hours, not drops."', why:'Treating "no pain" as reassuring misses a painless but hearing-threatening emergency.' },
        { dont:'"Let\u2019s see if it clears over the next couple of weeks first."', instead:'"This is the kind of thing where a day or two changes the outcome — steroids work best started within days, so I’m arranging for you to be seen by ENT or the emergency department within 24 hours."', why:'A watch-and-wait delays the time-critical treatment that preserves hearing.' }
      ]
    },

    'mouth-ulcer-2ww': {
      ceg: ['Long-term conditions & cancer', 'Ethnicity, culture & diversity'],
      stem: {
        name: 'Frank Mensah', age: '63 years · male',
        pmh: ['Non-healing tongue/floor-of-mouth ulcer ~6 weeks; firm raised edges; bleeds', 'New neck lump', 'Smoker 40 years; daily alcohol; chews betel/paan'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Blames a "rubbing denture"; wife pushed him to ring. Wants a mouth gel.',
        reason: 'Video consultation — a mouth ulcer that won\u2019t heal.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse the denture story', d:'Denture ulcers heal in ~2–3 weeks. A 6-week non-healing, indurated, bleeding ulcer + neck lump isn\u2019t the denture.' },
        { t:'2–4',  h:'Examine + palpate',     d:'In person, not the photo: feel the ulcer (induration) and the neck nodes; check the whole mouth.' },
        { t:'4–6',  h:"NICE NG12 suspected cancer pathway",              d:"Unexplained oral ulceration >3 weeks → oral cancer suspected cancer pathway referral; persistent neck lump = NICE NG12 criterion too (oral; laryngeal at 45+). NG12 says \"consider\"; with these features, refer. Restate, tag NICE NG12." },
        { t:'6–9',  h:'Surface the fear',      d:'Brother\u2019s head-and-neck cancer driving the denial. Balance honesty with reassurance; early = more treatable.' },
        { t:'9–12', h:'Risk factors + net',    d:'Smoking/alcohol/betel without cultural judgement; cessation support; bleeding/swallowing red flags; track the result.' }
      ],
      wordPics: {
        fail: 'Accepts "denture rubbing", prescribes a mouth gel and waits, dismisses the neck lump as "a gland", relies on the photo without palpating; never surfaces the brother\u2019s cancer or addresses betel — a curable oral cancer reassured into delay.',
        pass: 'Recognises the >3-week non-healing ulcer and neck lump, examines/palpates, refers on the oral cancer suspected cancer pathway, and addresses risk factors.',
        exc:  "Refuses the denture explanation and treats the wife’s prompting as reliable; examines and palpates the ulcer and neck in person; refers on the NICE NG12 oral cancer (and neck-lump) suspected cancer pathway; surfaces the brother-driven fear; addresses smoking/alcohol/betel without cultural judgement; and documents and follows up."
      },
      avoid: [
        { dont:'"It\u2019s probably your denture rubbing — here\u2019s a gel, see if it settles."', instead:'"A denture ulcer heals within a couple of weeks once we adjust it. This has been six weeks, it\u2019s firm and bleeding, with a neck lump — that needs an urgent referral, not a gel."', why:'Attributing a non-healing indurated ulcer to a denture misses oral cancer.' },
        { dont:'"The neck lump\u2019s just a gland reacting to the ulcer, don\u2019t worry about it."', instead:'"A persistent neck lump is itself a reason for an urgent referral, and with the ulcer I won\u2019t write it off as a gland — I need to feel it and get you seen."', why:'Dismissing a persistent neck lump misses possible nodal spread and an independent suspected cancer pathway criterion.' },
        { dont:'"You really need to stop the paan and the smoking — that\u2019s what\u2019s done this." (judgemental)', instead:'"Smoking, alcohol and betel all irritate the mouth lining — no judgement, and I\u2019ll help you cut down gently. But today the priority is getting you seen urgently."', why:'A culturally-judgemental lecture causes disengagement and sidelines the urgent referral.' }
      ]
    }
  });

})();
