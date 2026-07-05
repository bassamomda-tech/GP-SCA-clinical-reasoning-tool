/* ============================================================
   Reasoning GP — SCA micro-drills data
   Three isolated skills:
   1. CUES — patient utterance + 3 candidate responses (one best)
   2. NETS — scenario; build a safety-net; model + 3-part standard
   3. OPENERS — patient opening statement; 60s golden-minute reply
   All original content.
   ============================================================ */

window.SCA_DRILLS = {

  cues: [
    { u:'"I\u2019ve been a bit off since Margaret passed… anyway, it\u2019s this knee that\u2019s the problem."', ctx:'68M booked for knee pain',
      opts:[
        'OK — tell me about the knee. When did the pain start?',
        'Before the knee — you mentioned Margaret. How have things really been since she died?',
        'I\u2019m sorry for your loss. Now, does the knee hurt going up stairs or down?'
      ], best:1,
      why:'The cue is the throwaway "a bit off" — under-stated British distress. Option A ignores it; option C performs condolence then bulldozes past it in the same breath (the formulaic-empathy pattern). The cue is answered by stopping for it. The knee will still be there in two minutes.' },
    { u:'"My wife made me come. I wouldn\u2019t have bothered, honestly — it\u2019s probably nothing."', ctx:'54M, chest tightness when walking the dog',
      opts:[
        'Well, let\u2019s see if she was right to send you. Tell me about this tightness.',
        'Wives are usually right! Now — where exactly is the pain?',
        'Something made her worry enough to insist. What has she noticed that you might be playing down?'
      ], best:2,
      why:'"Probably nothing" + a third-party push is a classic minimising presentation — men with anginal symptoms routinely arrive like this. The skill is using the wife\u2019s worry as a window into what\u2019s being minimised, not as small talk.' },
    { u:'"Is it serious, doctor? Only my sister had something similar and she was gone within the year."', ctx:'47F, abdominal bloating, awaiting your explanation',
      opts:[
        'Let\u2019s not jump ahead — we need the test results before we can say anything.',
        'Tell me about your sister — what happened to her? Then I\u2019ll tell you honestly how your situation compares.',
        'Bloating is very common and usually benign, so I really wouldn\u2019t worry at this stage.'
      ], best:1,
      why:'The sister IS the consultation — every symptom is being filtered through that death. Hear the story first; only then will any reassurance or plan be heard. A and C both leave the fear running the show unexamined.' },
    { u:'(Pause) "…The tablets. Yes. I take them most days, when I remember."', ctx:'62M, BP still uncontrolled on paper, asked about his ramipril',
      opts:[
        'You need to take them every day — they only work with consistent levels.',
        'Most days — so some days slip. What gets in the way, and what do you actually think of these tablets?',
        'Shall I set you up with a dosette box to help you remember?'
      ], best:1,
      why:'"When I remember" is rarely about memory — it\u2019s usually belief (side effects, "don\u2019t like being on chemicals", felt fine without). The hesitation is the cue. Solutions (A, C) before understanding guarantee the same conversation in three months.' },
    { u:'"Work\u2019s been… well, you know how it is. Everyone\u2019s under pressure. Anyway — can I get something for the headaches?"', ctx:'38F, tension-type headaches, third attendance this year',
      opts:[
        'Headaches and pressure often travel together. Before the prescription — what\u2019s "you know how it is" actually like at the moment?',
        'Yes, everywhere\u2019s the same these days. Let\u2019s talk about headache triggers — caffeine, sleep, screens?',
        'I can give you something, but painkillers more than twice a week can actually cause headaches.'
      ], best:0,
      why:'"Anyway" is the sound of a door being closed on something half-offered. Third attendance + deflected stress = the real agenda is behind that door. C\u2019s medication-overuse point matters — later, after the door is opened.' },
    { u:'"He\u2019s always been a good baby, it\u2019s just… I don\u2019t feel like myself. Probably just tired. All mums are tired, aren\u2019t they?"', ctx:'New mother at 8-week baby check',
      opts:[
        'Absolutely, the first months are exhausting — it does get better, I promise.',
        'Tiredness is very common. Are you managing to sleep when the baby sleeps?',
        '"Not feeling like yourself" — tell me more about that bit. Forget the tiredness for a second.'
      ], best:2,
      why:'She has wrapped the disclosure ("I don\u2019t feel like myself") in two layers of normalisation. A and B accept the wrapping and seal it shut. Separating the phrase from the tiredness opens the postnatal-depression conversation she is testing whether it\u2019s safe to have.' },
    { u:'"I\u2019ll be honest, I looked it up online and now I\u2019m convinced it\u2019s cancer. Stupid, I know."', ctx:'33M, testicular lump, visibly embarrassed',
      opts:[
        'Dr Google has a lot to answer for! Let\u2019s examine you and see what we\u2019re actually dealing with.',
        'Not stupid at all — you found something worrying, you looked, and you came in. That\u2019s exactly right. Tell me what you found and what you read.',
        'Most testicular lumps are benign — cysts, varicoceles. Cancer is actually the least likely option statistically.'
      ], best:1,
      why:'"Stupid, I know" begs not to be ridiculed. A mocks the searching; C answers the fear with statistics before earning the right. B legitimises help-seeking — which is what brings the next young man with a lump in earlier, and is what the examiner is watching for.' },
    { u:'"Mum doesn\u2019t need to know about this, right? She\u2019d kill me."', ctx:'15F requesting contraception',
      opts:[
        'You\u2019re under 16, so ideally we should involve a parent — could you talk to your mum if I helped you plan it?',
        'That depends on what you tell me. Let\u2019s talk first about the relationship and make sure you\u2019re safe.',
        'What we discuss is confidential — including from your mum — unless I\u2019m seriously worried about your safety, and I\u2019d always tell you first. Now, tell me what\u2019s going on.'
      ], best:2,
      why:'The competent answer states the confidentiality rule AND its safeguarding limit up front, honestly, then proceeds. A makes parental involvement sound like a condition (it isn\u2019t, post-Gillick); B sounds conditional and evasive — she\u2019ll edit what she tells you.' },
    { u:'"The pain\u2019s about the same. (Sighs) Sorry — I know you\u2019re busy. There\u2019s probably people much worse off than me."', ctx:'71F, chronic back pain review',
      opts:[
        'Don\u2019t apologise — you\u2019re exactly who this appointment is for. And that sigh sounded heavy. What\u2019s underneath it?',
        'Not at all, take your time. So the pain is unchanged — is it still mainly in the lower back?',
        'Everyone\u2019s pain matters equally. Let\u2019s review your medication and see if we can improve things.'
      ], best:0,
      why:'Apologising for existing + comparing herself down the queue is demoralisation talking — common in chronic pain and in older patients, and a depression flag. The sigh is the cue; naming it gives permission. B and C are competent and deaf.' },
    { u:'"We\u2019re managing. The kids help when they can. (Pause) It\u2019s the nights, mostly."', ctx:'Husband of a woman with advancing dementia, her medication review',
      opts:[
        'What happens at night? And when did YOU last get a full night\u2019s sleep?',
        'It\u2019s good the kids are involved — shared load makes such a difference.',
        'There are medications that can sometimes help with night-time agitation — shall we consider one?'
      ], best:0,
      why:'"It\u2019s the nights, mostly" after a pause is the carer\u2019s flag of drowning. The question that matters is about HIM — carer collapse is how placements fail. C reaches for a prescription before the problem is even described; B accepts "managing" at face value.' },
    { u:'"Just a repeat of the usual, doctor. Quick one for you! (Laughs) Unless you\u2019ve got a cure for stress, haha."', ctx:'49M, omeprazole repeat, books rarely',
      opts:[
        'Ha — if I had that, I\u2019d retire! Omeprazole — any change in the heartburn symptoms?',
        'I might not have a cure, but I do have ten minutes. What\u2019s the stress, joking aside?',
        'Stress can definitely worsen reflux. Try to keep an eye on caffeine and alcohol.'
      ], best:1,
      why:'A joke at the door is the most deniable cue format there is — it can be laughed off if the doctor doesn\u2019t bite. A rare-attending middle-aged man "joking" about stress deserves one serious, gentle bite. A joins the deflection; C medicalises it without hearing it.' },
    { u:'"She said the lump\u2019s been there a few weeks but she\u2019s been too busy with the wedding to come in. Tell the doctor, love."', ctx:'Mother speaking for her 26F daughter, breast lump',
      opts:[
        '(To the mother) A few weeks, you say — has it changed in size at all?',
        '(To the daughter) Congratulations on the wedding! Now — you\u2019ve found a lump. Tell me about it in your own words.',
        '(To both) It\u2019s good you\u2019ve come in. Breast lumps in your twenties are usually benign, so try not to worry while we sort an examination.'
      ], best:1,
      why:'The cue is structural: a 26-year-old being narrated by her mother. Redirect to the patient — warmly, by name, with eye contact — or the whole consultation happens about her instead of with her. A entrenches the proxy; C reassures before any assessment.' },
    { u:'"How long do these things usually take to heal? It\u2019s just — I\u2019ve got my licence assessment next month."', ctx:'58M HGV driver, blackout last week, awaiting your explanation',
      opts:[
        'Let\u2019s focus on finding the cause first — the timeline depends entirely on what we find.',
        'You\u2019ve just told me what\u2019s really at stake: the licence. Let\u2019s put that on the table properly, because blackouts and HGV driving have rules we need to be straight about.',
        'These things often settle quickly. I wouldn\u2019t cancel the assessment yet.'
      ], best:1,
      why:'The "casual" licence mention is the loaded cue: his livelihood. Honesty about DVLA notification rules, delivered as an ally ("let\u2019s deal with this together") rather than a policeman, is the relating AND probity test in one. C is collusion; A dodges the thing he actually asked.' },
    { u:'"Dad would never hurt anyone. Whoever told the school that is lying. Can we just talk about my eczema?"', ctx:'14M, unprompted, at an eczema review',
      opts:[
        'Of course — show me your skin and we\u2019ll go through the creams.',
        'We can absolutely talk about your eczema. And I noticed what you said about your dad and school — I\u2019d like to understand that too, because my job is making sure you\u2019re OK everywhere, not just your skin.',
        'What did the school say about your dad?'
      ], best:1,
      why:'An unprompted denial nobody asked for is a textbook safeguarding cue. C interrogates and shuts him down; A ignores a child potentially signalling. B holds both: respects his agenda, gently opens the door, frames it as care. (And the conversation continues regardless of his answer — with documentation and the safeguarding lead.)' },
    { u:'"I don\u2019t want to waste your time with it. The main thing is the prescription. (Looks down) The bruise is from the door."', ctx:'31F, repeat inhaler request, bruising on upper arm, partner waiting outside',
      opts:[
        'Doors can be vicious! Right — one salbutamol inhaler coming up.',
        'I\u2019d like to examine your chest anyway with the prescription due — come through to the couch. (Privately:) That bruise doesn\u2019t look like a door to me. How are things at home — really? You\u2019re safe to tell me here.',
        'That looks sore — make sure you put some arnica on it. Now, how many puffs are you using a day?'
      ], best:1,
      why:'An unsolicited explanation for an injury ("from the door", eyes down, partner outside) is a disclosure being tested, not a fact. The skill: engineer privacy with a routine pretext, then ask directly and warmly. A and C accept the cover story and close the only window she may get for months.' },
    { u:'"Everyone keeps saying how well I\u2019m coping. (Flat voice) Yes. Coping. That\u2019s me."', ctx:'44F, husband died 4 months ago, here about "sleep"',
      opts:[
        'You ARE doing incredibly well, all things considered.',
        'It does take time — grief has no schedule. Shall we look at something short-term for the sleep?',
        'The way you just said "coping"… it didn\u2019t sound like coping. How bad are things, really — and has it ever felt like not wanting to be here?'
      ], best:2,
      why:'The flat echo of other people\u2019s words is the cue — she is quoting a script she can\u2019t live up to. C names the dissonance and, given grief + "sleep" presentations, asks the risk question directly. A repeats the exact phrase that\u2019s suffocating her; B prescribes past the disclosure.' },
  ],

  nets: [
    { s:'Viral URTI in a 4-year-old, settling, no antibiotics. Mum anxious, second visit this week.', 
      m:'"Most children shake this off in a week or so. But I want you to come straight back — or call 111 at night — if she\u2019s working hard to breathe, sucking in under the ribs, can\u2019t keep fluids down or has far fewer wet nappies, becomes floppy or unusually drowsy, or develops a rash that doesn\u2019t fade when you press a glass on it. If she\u2019s simply not improving in another four or five days, book back in with me. You know her best — if your gut says something\u2019s wrong, trust it and bring her."',
      note:'Paediatric nets need: named physical signs in parent language (not "respiratory distress"), the fluid/nappy marker, the glass test, a timeframe for expected recovery, AND validation of parental instinct — the strongest predictor of serious illness.' },
    { s:'Chest pain assessed as musculoskeletal in a 45M, normal ECG, going home.',
      m:'"Everything today points to the chest wall, not the heart — the pain you can press on, the normal tracing. But I never bet against a heart without telling you the escape route: if you get pain that\u2019s crushing or band-like, spreads to your arm or jaw, comes with sweating or breathlessness, or arrives on exertion and eases with rest — that\u2019s not a wait-and-see, that\u2019s 999, even at 3am, even if you feel silly. MSK pain should fade over one to two weeks; if it\u2019s not settling, I want to see you again."',
      note:'The diagnosis can be right AND the net must assume it might be wrong. Name the cardiac pattern explicitly, authorise the 999 call against embarrassment ("even if you feel silly"), and give the expected trajectory of the benign diagnosis.' },
    { s:'Starting an SSRI in a 24M with moderate depression, some passive thoughts, no plan.',
      m:'"Two honest warnings with these tablets. First, the benefit takes two to four weeks — don\u2019t read the silence as failure. Second, in the first couple of weeks, especially under 25, they can briefly make agitation or dark thoughts WORSE before better. So: if the thoughts get louder, more detailed, or start feeling like plans — you call us the same day, or 111 selecting the mental-health option, or text SHOUT to 85258 at 3am. I\u2019m booking you in to see me in one week, not a month — and I\u2019m writing those numbers down now."',
      note:'SSRI initiation under 25 has a specific, examinable net: the early-activation warning, same-day contact routes including out-of-hours, a SHORT review interval (1 week), and crisis numbers physically given — not recited.' },
    { s:'UTI treated empirically with 3 days nitrofurantoin in a 67F, urine sent.',
      m:'"You should feel real improvement within forty-eight hours. Three things change the plan: fever or shaking chills, new pain up here in your back over the kidneys, or feeling suddenly much more unwell — any of those is a same-day call to us, or 111 out of hours, because it can mean the infection is climbing. If you\u2019re just not improving by day three, call us — the lab will have grown the bug by then and we may need a different antibiotic. And if you ever see blood in the urine once the infection has cleared, I need to know — that one we never ignore at your age."',
      note:'Three tiers in one net: deterioration (same-day — pyelonephritis), non-response (day 3 — culture-guided switch), and the NG12-aware tail: visible haematuria 60+ persisting after UTI treatment warrants urgent referral, so flag it now.' },
    { s:'Tension headache in a 36F, examination normal, stress-related pattern.',
      m:'"Your examination is completely reassuring, and this pattern — the tight band, building through stressful weeks — behaves like tension-type headache, which is unpleasant but safe. What it should NOT do: wake you from sleep, arrive like a thunderclap in seconds, come with fever and a stiff neck, change with coughing or lying down, or bring weakness, vision loss or new confusion. Any of those is urgent — same day, or 999 for the thunderclap. And keep an eye on painkiller days: more than two or three a week, the treatment becomes the cause, and I\u2019d want to rethink with you rather than have you push through."',
      note:'Benign headache nets are about naming the patterns that are NOT this diagnosis. Thunderclap, raised-pressure features, infection signs — specific, vivid, actionable. The medication-overuse warning belongs in the same breath.' },
    { s:'2WW lower-GI referral done for a 64M with rectal bleeding. He asks "so I just wait for the letter?"',
      m:'"Not quite — you chase, and so do I. The hospital should contact you within two weeks; if you\u2019ve heard nothing within one week, ring this number, and if you get nowhere, ring us — don\u2019t let it drift, this referral matters. Meanwhile the bleeding itself: if it becomes heavy — soaking pads, clots — or you feel faint, that\u2019s A&E the same day, don\u2019t wait for the clinic. And whatever the tests show, I want to hear the outcome; if I\u2019ve not seen a result in a month, I\u2019m calling you."',
      note:'Referral safety-netting is its own species: the patient must know the expected timeline, what to do if the system fails (numbers, escalation), interim emergency triggers, and that the GP stays in the loop — abandonment between referral and appointment is where 2WW pathways break.' },
    { s:'Gastroenteritis in a 78F living alone, daughter visits daily. Oral fluids advised.',
      m:'"Most of these settle in two or three days. At your age my worry isn\u2019t the bug, it\u2019s the drying out — so I want you sipping something with salt and sugar in it through the day, and I\u2019d like your daughter to know the warning signs too: if you become dizzy standing, confused or much drowsier, stop passing water, or can\u2019t keep anything down for twelve hours — she calls us the same day, or 111 overnight. Blood in the stool or severe constant pain changes everything: that\u2019s urgent. And pause the blood-pressure tablet and the water tablet while you\u2019re poorly — they don\u2019t mix with dehydration; restart when you\u2019re eating and drinking normally."',
      note:'Older-adult nets recruit the carer as co-listener, name dehydration signs concretely, and include sick-day medication rules (ACEi/diuretics/metformin) — a frequently examined, frequently missed component.' },
    { s:'Croup, mild, in a 2-year-old at 6pm. Dexamethasone given. Parents driving home.',
      m:'"The steroid takes a few hours to work and tonight may still be noisy — the barking cough sounds frightening but isn\u2019t the danger sign. What IS: if the noisy breathing happens when she\u2019s calm and resting (not just crying), if the skin sucks in between her ribs or at the base of her throat, if she\u2019s too breathless to drink, drools or can\u2019t swallow, or goes pale, grey or blue around the lips — that\u2019s 999, not a drive to A&E with a struggling airway in the back seat. Steam doesn\u2019t help, keep her calm and upright, and croup is usually worst on night two and three — so expect tomorrow night before it gets better."',
      note:'Croup nets must separate the scary-but-benign (barking cough at night) from the dangerous (stridor at rest, recession, drooling), say 999-not-car-journey explicitly, and predict the natural history so night two doesn\u2019t cause panic — anticipation IS safety-netting.' },
    { s:'Medication declined: 52M with QRISK 18% refuses a statin after full discussion.',
      m:'"That\u2019s your call to make and I respect it — my advice stays on the table, it doesn\u2019t expire. Three things so this stays safe: nothing about today stops you changing your mind — one phone call, no questions, no told-you-so. Second, the risk we discussed is silent; you won\u2019t feel it rising, so I\u2019d like to re-measure things in a year rather than let it vanish. Third, the deal-breakers: any chest pain on exertion, sudden weakness, slurred speech or vision loss — that\u2019s emergency care immediately, statin or no statin. I\u2019m noting that we discussed it honestly, not to cover myself — so the next doctor knows where we got to."',
      note:'The refused-treatment net is examinable gold: respect without abandonment, an open door explicitly de-shamed, scheduled re-engagement (the silent-risk problem), emergency triggers regardless, and transparent documentation framed as continuity, not defensiveness.' },
    { s:'Telephone triage: 8-month-old with fever 38.6°, drinking ok, no rash, sounds well. Staying home tonight.',
      m:'"From everything you\u2019ve described, she\u2019s telling us this is a manageable virus right now. Because I can\u2019t see her, you\u2019re my eyes tonight, so be specific with me: the glass test on any new rash — if spots don\u2019t fade under pressure, that\u2019s 999. Same if she becomes hard to wake, unusually floppy, her cry changes to something weak or high-pitched, breathing becomes hard work, or her hands and feet go cold and mottled while her body burns. Fewer than half the usual wet nappies means she\u2019s drying out — that\u2019s a same-day call. Fever on its own, even 39\u00b0, matters less than HOW SHE IS. If anything in your gut says wrong — ring back. The night team can always see her; you\u2019re never wasting anyone\u2019s time."',
      note:'The remote paediatric net is the hardest in general practice: the parent becomes the examiner. Concrete observable signs, the nappy count, fever-phobia defused ("how she is, not the number"), gut instinct explicitly licensed, and the route back genuinely opened.' },
  ],

  openers: [
    { u:'"I want a full body scan. I\u2019ll pay privately if I have to. I just need to know nothing\u2019s wrong with me."', ctx:'41M, no symptoms volunteered yet',
      m:'"Okay — that\u2019s a big request, and people don\u2019t ask for it out of nowhere. Something has put this in your mind: a symptom, a death, something you read at 2am. Before we talk about scans at all, tell me what\u2019s actually frightening you — because if we aim a scan at nothing in particular, it usually finds shadows that mean nothing and miss the things that matter. Let\u2019s find out what we\u2019re really looking for first."',
      beats:['Takes the request seriously without granting it','Hunts the driver (health anxiety? a death? a symptom?)','Honest about whole-body screening\u2019s harms in one plain sentence','Contracts a real assessment first'] },
    { u:'"Before you say anything — I know my own body, and something is wrong. The last two doctors didn\u2019t listen."', ctx:'29F, fatigue, multiple normal panels on file',
      m:'"Then let\u2019s not make it three. I\u2019ve read through the notes and the tests before you came in — so you don\u2019t have to fight me with the whole story again, though I want to hear it in your words. You\u2019re tired in a way that\u2019s changed your life, the tests so far haven\u2019t explained it, and being told \u2018everything\u2019s normal\u2019 has started to sound like \u2018we don\u2019t believe you\u2019. Both things can be true: real suffering and normal tests. Start from the day you last felt well."',
      beats:['Disarms the fight she came braced for','Evidence of preparation (read the notes) stated out loud','Validates symptoms AND normal results as compatible','Opens with her timeline, not a system review'] },
    { u:'"It\u2019s my husband really. He won\u2019t come in himself. He\u2019d be furious if he knew I was here."', ctx:'60F, booked in her own name',
      m:'"You\u2019ve done something quite hard — coming here against his wishes because you\u2019re worried. I can listen to everything, and what you tell me stays here; he has no access to it. I can\u2019t treat him from this chair, but I can do two useful things: help you work out how worrying this actually is, and find the way in that doesn\u2019t feel like a betrayal — there usually is one. And while you\u2019re here: carrying this is work. How are YOU doing under it?"',
      beats:['Names her courage and the risk she took','Confidentiality from the husband made explicit','Honest limit (can\u2019t treat in absentia) with a generous "can"','Turns to the carer\u2019s own state before the end of minute one'] },
    { u:'"I need signing off. Six weeks minimum. Work is destroying me and I\u2019m not going back."', ctx:'35M, first attendance in 3 years, jaw set',
      m:'"Something serious has happened to bring you in talking in ultimatums after three years away — I want to hear about it properly before any paperwork. Walk me through the last few months at work: what\u2019s changed, what\u2019s it doing to your sleep, your mood, your family. The note at the end has to be honest to be worth anything to you — but I\u2019m not against you here. Let\u2019s work out together what \u2018better\u2019 looks like, because six weeks at home with no plan often makes the dread worse, not better."',
      beats:['Reads the demand as a distress signal, not a transaction','Proper occupational + mental-state history before any decision','Honesty about the certificate framed as alliance','Plants "a note alone is not a plan" without refusing yet'] },
    { u:'"(Phone) Sorry to bother you, doctor. It\u2019s probably nothing. Mum\u2019s just not eating much since Friday. She\u2019s 88."', ctx:'Daughter calling about her mother',
      m:'"You\u2019re not bothering me at all — at 88, \u2018not eating since Friday\u2019 is exactly the kind of quiet change that matters most, so I\u2019m glad you rang. Paint me the picture: what\u2019s she eating and drinking in a day right now, how is she in herself — more muddled, sleepier, off her legs? Any cough, any waterworks trouble, any falls? And what was she like two weeks ago, so I know the size of the change? Depending on what you tell me, I may want to see her today — and if so, would home or the surgery be easier?"',
      beats:['Legitimises the call and flags why the symptom matters in the old','Functional comparison: now vs her baseline','Screens the delirium/sepsis drivers in plain words','Signals same-day assessment willingness early'] },
    { u:'"My last GP just kept throwing tablets at me. I\u2019ve stopped them all, by the way. All of them."', ctx:'58M — metformin, ramipril, atorvastatin on the repeat list',
      m:'"Thank you for telling me straight — plenty of people stop and don\u2019t say, and then nobody\u2019s flying the plane. Before anything else I need to know two things: which of them you stopped and when, because a couple of those need watching as they leave the system — and then the more important thing: what the tablets came to MEAN to you, because \u2018throwing tablets at me\u2019 tells me you never felt part of the decisions. Let\u2019s rebuild this from zero: your health, what you\u2019re willing to do, and the shortest honest list we can agree on."',
      beats:['Reinforces the honesty rather than punishing it','Immediate safety triage of what was stopped, calmly','Hears the meaning under the rebellion (no shared decisions)','Offers a rebuilt contract: minimum agreed medication'] },
    { u:'"We\u2019ve been trying for a baby for two years. Everyone around us is pregnant. I can\u2019t do another month of this."', ctx:'31F, voice breaking on the last sentence',
      m:'"Two years of hoping every month and grieving every month — and doing it surrounded by other people\u2019s good news. That last sentence sounded like you\u2019re right at the edge, so before any tests or plans: how bad are the lows, and is anyone holding you through this, or are you holding everyone else? … Then here\u2019s what today can actually offer, because there IS a path: we start the proper work-up for both of you — bloods timed to your cycle, his semen analysis — and two years means you meet referral criteria, so we\u2019re not starting from nowhere. This month, for once, something different happens."',
      beats:['Reflects the cyclical grief precisely','Mood and support checked BEFORE the protocol','Both partners in the work-up from sentence one','Hope made concrete: criteria met, referral pathway real'] },
    { u:'"Right. Bullet points, doc, I\u2019ve got a site visit at two: chest\u2019s tight when I run, started maybe a month ago, I\u2019m fine otherwise, presumably just unfit. Inhaler job?"', ctx:'47M builder, delivered standing up',
      m:'"I\u2019ll match your pace — but sit down, because the one question that decides everything is this: tight chest on exertion in a 47-year-old gets treated as a heart question before a lung question, every time, even when it\u2019s probably nothing. Thirty seconds of answers: does it ease when you stop? Spread to the arm or jaw? Smoke? Dad or brothers with heart trouble young? … Depending on those, today is an ECG and bloods, not just an inhaler — and the site visit may need to hear you\u2019re late. I\u2019d rather cost you an afternoon than miss the thing that costs everything."',
      beats:['Matches his register (speed, directness) without surrendering control','Names the reframe out loud: exertional chest tightness = cardiac until cleared','Four discriminators fired in his bullet-point style','Holds the line on same-day work-up against the time pressure'] },
  ]
};
