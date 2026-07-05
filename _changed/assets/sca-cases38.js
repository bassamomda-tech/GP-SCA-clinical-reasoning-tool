/* ============================================================
   Reasoning GP — Case Library batch 38: "ENT: the one-sided rule & the can't-miss throat"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 2WW stated explicitly where it maps (persistent hoarseness ->
   laryngeal; unilateral nasal/aural signs; unexplained neck lump).
   The recurring lesson: UNILATERAL/persistent ENT symptoms are the flag.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases37.js.
   ============================================================ */

(function(){

  /* ============ 145. VIDEO — Persistent hoarseness: the laryngeal-cancer 2WW ============ */
  const c145 = {
    id:'persistent-hoarseness', title:'"My voice has gone husky \u2014 it\u2019s just a smoker\u2019s throat"', type:'video', duration:12,
    meta:{ age:63, sex:'M', setting:'Video consultation \u2014 hoarseness for weeks.', system:'ENT / Laryngeal cancer' },
    brief:'Mr Roy Calladine, 63, publican. ~6 weeks of progressive HOARSENESS that hasn\u2019t settled \u2014 he blames "a smoker\u2019s throat / a cold that lingered". Smoker 40/day, heavy alcohol. On directed history: a sensation of something in the throat, mild throat/ear ache on one side, and \u2014 if asked \u2014 he\u2019s noticed a small neck lump. No clear infection. Persistent hoarseness >3 weeks in a smoker over 45 is a NICE NG12 suspected laryngeal-cancer 2WW. He minimises and wants "a spray or some antibiotics".',
    script:{
      opening:'"Afternoon doc. My voice has gone all husky and gravelly \u2014 been weeks now. I\u2019m a publican and I smoke, so it\u2019s probably just a smoker\u2019s throat, or a cold that never quite went. Could you give me a throat spray or some antibiotics to clear it? I can\u2019t be doing without my voice behind the bar. It\u2019s nothing to worry about, surely \u2014 just need it to settle."',
      facts:[
        { topic:'Persistent hoarseness is a flag', text:'HOARSENESS persisting beyond ~3 weeks, especially PROGRESSIVE and in a SMOKER over 45, is a red flag for LARYNGEAL (or other head-and-neck) cancer \u2014 NOT just "a smoker\u2019s throat" or a lingering cold. NICE NG12: consider a suspected-cancer (2-week-wait) referral for laryngeal cancer in people aged 45+ with persistent unexplained hoarseness. Antibiotics/sprays for persistent hoarseness without examination is the dangerous miss.' },
        { topic:'The associated red flags', text:'On directed history: throat-clearing/globus, unilateral throat or referred EAR pain (otalgia with a normal ear), and \u2014 importantly \u2014 a NECK LUMP. Other head-and-neck red flags: persistent sore throat, dysphagia/odynophagia, unexplained persistent neck lump, oral/throat ulceration. His smoking AND heavy alcohol are major combined risk factors.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 his breezy "just a smoker\u2019s throat, give me a spray" masks avoidance: he\u2019s noticed the neck lump and the persistence and is privately frightened it\u2019s cancer (perhaps after a regular at his pub had throat cancer), but is terrified of the diagnosis, of losing his voice/livelihood, and of being told to stop smoking and drinking. The skill is to gently challenge the minimisation, examine/elicit the red flags, name the concern honestly, and refer \u2014 while reassuring that early laryngeal cancer is very treatable.' },
        { topic:'Reassurance + lifestyle', text:'Genuinely reassuring: early laryngeal cancer (and many head-and-neck cancers) caught early are very treatable, often with voice-preserving treatment \u2014 so urgent referral is precautionary and improves outcomes. Address smoking and alcohol supportively (the major modifiable risks) without making the consultation a lecture that drives him away.' },
        { topic:'What he needs',        text:'Officially: a spray/antibiotics for a smoker\u2019s throat. What he needs: recognition that persistent hoarseness >3 weeks in a smoker over 45 is an NG12 laryngeal-cancer 2WW, examination/elicitation of red flags (neck lump, otalgia), an urgent (2WW) head-and-neck referral, the fear addressed and the lump taken seriously, reassurance that early cancer is treatable, and smoking/alcohol support \u2014 not symptomatic treatment alone.' },
      ],
      ice:{
        ideas:'It\u2019s just a smoker\u2019s throat or a lingering cold; a spray or antibiotics will clear it.',
        concerns:'HIDDEN AGENDA \u2014 he\u2019s noticed the neck lump and the persistence and quietly fears throat cancer (maybe after a regular had it), but dreads the diagnosis, losing his voice/livelihood, and being told to stop smoking/drinking.',
        expectations:'A throat spray/antibiotics and to carry on. What he actually needs: recognition of the NG12 laryngeal-cancer 2WW, examination/red-flag elicitation, an urgent referral, the fear and the lump addressed, reassurance early cancer is treatable, and smoking/alcohol support.'
      },
      cues:['Hoarseness persisting >3 weeks, progressive, in a smoker over 45 \u2014 laryngeal-cancer 2WW, not "a smoker\u2019s throat".','Unilateral throat/ear ache + a NECK LUMP \u2014 head-and-neck red flags; ask for them and refer urgently.','"Just give me a spray, it\u2019s nothing" \u2014 avoidance masking the noticed lump and cancer fear; gently challenge and refer.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that PERSISTENT (>3 weeks) progressive HOARSENESS in a SMOKER over 45 is a red flag for LARYNGEAL/head-and-neck cancer \u2014 NOT "a smoker\u2019s throat" or a lingering cold \u2014 and does NOT just give a throat spray/antibiotics without assessment' },
      { dom:'tasks', text:'Acts on the NG12 pathway: refers on a suspected-cancer (2-week-wait) pathway for laryngeal cancer (persistent unexplained hoarseness, 45+), and considers head-and-neck/ENT 2WW for the associated features; tag NICE NG12' },
      { dom:'tasks', text:'Elicits and weights the ASSOCIATED red flags by directed history/examination: a NECK LUMP, unilateral referred otalgia (with a normal ear), globus/throat discomfort, dysphagia/odynophagia, sore throat \u2014 and the combined smoking + heavy-alcohol risk' },
      { dom:'tasks', text:'Examines appropriately (throat/oral cavity, neck/lymph nodes, ears) and recognises an unexplained persistent NECK LUMP as itself warranting urgent referral' },
      { dom:'tasks', text:'Reassures accurately (early laryngeal/head-and-neck cancer is very treatable, often voice-preserving \u2014 urgent referral is precautionary) and addresses SMOKING and ALCOHOL supportively as the major modifiable risks' },
      { dom:'rto',   text:'Gently challenges the "just a smoker\u2019s throat" minimisation and surfaces the noticed lump and underlying cancer fear, rather than colluding with the spray/antibiotic request' },
      { dom:'rto',   text:'Balances honesty (this needs urgent checking) with genuine reassurance and concern for his livelihood/voice, so he accepts the referral; addresses smoking/alcohol without a lecture that alienates' },
      { dom:'gs',    text:'Safety-nets and follows up: the urgent 2WW referral and what to expect (nasendoscopy/ENT assessment), reassurance, smoking/alcohol support, what to report (worsening, the lump enlarging, swallowing/breathing trouble), and a follow-up \u2014 referring the likely cancer, not spraying it' },
    ],
    worked:[
      { lbl:'Reframe \"smoker\u2019s throat\"', txt:'"I\u2019m glad you came. Here\u2019s the important rule though: a voice that stays husky for more than about three weeks \u2014 especially in someone who smokes, over a certain age \u2014 we never just put down to a smoker\u2019s throat or an old cold. It needs looking at properly, because occasionally a persistent hoarse voice is the first sign of something in the voice box we\u2019d want to catch early. So a spray isn\u2019t the answer here."' },
      { lbl:'Elicit the red flags', txt:'"Can I ask a few things? Any ache in your throat or one ear? Any trouble swallowing? And \u2014 have you noticed any lumps in your neck? \u2026 You have, on one side. Thank you for telling me \u2014 that\u2019s important, and it\u2019s exactly why I want this checked rather than treated blind."' },
      { lbl:'Name it honestly + reassure', txt:'"I want to be straight with you: a husky voice this long, with that neck lump, in a smoker, is something I need to refer urgently to rule out a cancer of the voice box or throat. Before that frightens you \u2014 the genuinely reassuring part is that caught early, these are very treatable, often keeping your voice. Getting seen now is how we keep it simple."' },
      { lbl:'The 2WW referral',     txt:'"So I\u2019m referring you urgently to the ear-nose-throat specialists \u2014 seen within two weeks. They\u2019ll look at your voice box with a tiny camera and check your neck. That\u2019s the right, safe step, and it\u2019s why antibiotics wouldn\u2019t have done anything."' },
      { lbl:'Smoking + alcohol, supportively', txt:'"I\u2019m not going to lecture you behind your own bar \u2014 but the smoking and the drink are the two biggest things behind throat problems, and cutting them is the best thing you could do for your voice AND your recovery. When you\u2019re ready, I\u2019ll help you with both, properly. No judgement."' },
      { lbl:'Safety-net',           txt:'"If your swallowing gets worse, the lump grows, or you get any trouble breathing, tell us sooner. I\u2019ll get the urgent referral done and follow it up with you. You came in for a spray for your voice; what you actually needed was to get this looked at properly \u2014 and most likely sorted while it\u2019s early."' },
    ],
    learning:'Hoarseness persisting beyond ~3 weeks \u2014 especially progressive and in a smoker over 45 \u2014 is a red flag for laryngeal/head-and-neck cancer, NOT "a smoker\u2019s throat" or a lingering cold, so NICE NG12 mandates a suspected-cancer (2-week-wait) referral for persistent unexplained hoarseness in those 45+, and treating it with a spray/antibiotics without examination is the dangerous miss. Elicit and weight the associated red flags (a neck lump, unilateral referred otalgia with a normal ear, globus, dysphagia/odynophagia, sore throat) and the combined smoking + heavy-alcohol risk, examine the throat/oral cavity/neck/ears, and recognise an unexplained persistent neck lump as itself warranting urgent referral. Reassure genuinely (early laryngeal cancer is very treatable, often voice-preserving \u2014 urgent referral is precautionary) and address smoking and alcohol supportively without a lecture that alienates. The hidden agenda is avoidance masking a noticed neck lump and an unvoiced cancer fear (and worry about voice/livelihood and being told to stop smoking/drinking); gently challenge the minimisation, name the concern honestly while reassuring, and refer.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (laryngeal / head and neck) · CKS hoarseness · head-and-neck cancer pathways',
      points:[
        { h:'Persistent hoarseness = red flag', t:'Hoarseness lasting >3 weeks (especially progressive) requires explanation, not symptomatic treatment. NICE NG12: consider a suspected-cancer (2-week-wait) referral for laryngeal cancer in people aged 45 and over with persistent unexplained hoarseness. Smoking and alcohol are the major risk factors.' },
        { h:'Head-and-neck red flags', t:'Persistent: hoarseness, sore throat, neck lump, referred otalgia (ear pain with a normal ear), dysphagia/odynophagia, oral ulceration/red or white patches, and unexplained weight loss. Any unexplained persistent neck lump warrants urgent referral. Combined smoking + heavy alcohol greatly raises risk.' },
        { h:'Examine and refer, don\u2019t treat blind', t:'Examine the oral cavity, throat, neck/lymph nodes and ears. Do not prescribe antibiotics/sprays for persistent hoarseness without assessment. ENT assessment includes nasendoscopy/laryngoscopy to visualise the larynx \u2014 refer rather than treating empirically.' },
        { h:'Reassure proportionately', t:'Early laryngeal and many head-and-neck cancers are very treatable, frequently with voice-preserving options when caught early. Frame urgent referral as precautionary and outcome-improving \u2014 this helps an avoidant patient accept it.' },
        { h:'Address smoking and alcohol', t:'These are the principal modifiable risks. Offer cessation/reduction support supportively (not as a lecture), as part of care \u2014 important both for prevention and for treatment outcomes.' },
        { h:'Surface the fear', t:'Minimisation ("just a smoker\u2019s throat, give me a spray") may mask a noticed neck lump and an unvoiced cancer fear plus worry about voice/livelihood. Surface it, name the concern proportionately, and use it to motivate the referral.' },
        { h:'Never do', t:'Never treat persistent hoarseness in a smoker over 45 with sprays/antibiotics without examination/referral; never miss the NG12 laryngeal 2WW or the neck lump; never skip the head-and-neck red-flag screen; never collude with minimisation; never lecture so as to alienate, nor frighten without the genuine reassurance.' },
        { h:'Safety-net & follow-up', t:'Urgent (2WW) head-and-neck/laryngeal referral; examine and act on a neck lump; smoking/alcohol support; report worsening/enlarging lump/swallowing or breathing difficulty; follow up the referral and outcome.' }
      ]
    }
  };

  /* ============ 146. VIDEO — Unilateral blood-stained nasal discharge: the one-sided rule ============ */
  const c146 = {
    id:'unilateral-nasal', title:'"One nostril keeps blocking and bleeding \u2014 just hay fever, surely?"', type:'video', duration:12,
    meta:{ age:52, sex:'M', setting:'Video consultation \u2014 unilateral nasal symptoms.', system:'ENT / Sinonasal red flags' },
    brief:'Mr Wei Chen, 52. Several weeks of persistent blockage of ONE nostril (the right) with blood-stained discharge and recurrent unilateral epistaxis, no clear infective trigger. He blames "hay fever / a sinus thing" and wants a nasal spray/antihistamine. On directed history: he\u2019s of Southern Chinese family origin (a nasopharyngeal-carcinoma risk group) and \u2014 if asked \u2014 has some right-sided hearing dullness/blocked ear and a small neck lump. UNILATERAL persistent nasal obstruction/bleeding is the red flag (sinonasal / nasopharyngeal carcinoma), not bilateral allergic rhinitis.',
    script:{
      opening:'"Hi doctor. My right nostril keeps blocking up and there\u2019s been a bit of blood in the discharge, on and off for weeks. I get hay fever, so I figured it\u2019s that, or a sinus infection. Could you sort me a steroid spray or some antihistamines? My left side\u2019s completely fine, it\u2019s just the right. I\u2019m sure it\u2019s nothing \u2014 just need to clear it up."',
      facts:[
        { topic:'The one-sided rule', text:'UNILATERAL persistent nasal symptoms \u2014 one-sided blockage, blood-stained discharge, recurrent unilateral epistaxis \u2014 are the RED FLAG that distinguishes a possible sinonasal or NASOPHARYNGEAL tumour from benign BILATERAL allergic rhinitis (which is typically two-sided, seasonal, with sneezing/itch and clear discharge). "Just hay fever" for persistent ONE-SIDED bleeding/blockage is the dangerous misconception; unilateral = investigate.' },
        { topic:'Nasopharyngeal red flags & risk', text:'Nasopharyngeal carcinoma (NPC) classically presents with a NECK LUMP (often the first sign), UNILATERAL serous otitis media/blocked ear (Eustachian tube obstruction), nasal obstruction/blood-stained discharge, and cranial-nerve signs. Risk is higher in people of Southern Chinese/Southeast Asian and certain other ethnic origins (and EBV-related). His ethnicity, the unilateral nasal signs, the unilateral ear and the neck lump fit \u2014 warranting urgent ENT referral.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 he attributes it to hay fever and wants a quick spray partly out of genuine belief, but also because he\u2019s noticed the neck lump and the blocked ear and is quietly worried, while reluctant to make a fuss/take time off work. There may be a specific fear (a relative with NPC). The skill is to not accept the "hay fever" framing for unilateral symptoms, elicit the red flags and ethnicity-related risk, examine, and refer \u2014 reassuring proportionately.' },
        { topic:'Why it matters',      text:'Unilateral persistent nasal obstruction/epistaxis can also be benign (e.g. a polyp, foreign body, deviated septum), but the one-sided pattern mandates examination and ENT referral to exclude tumour \u2014 you cannot reassure it away as allergy. NPC caught earlier has better outcomes.' },
        { topic:'What he needs',        text:'Officially: a spray/antihistamine for "hay fever". What he needs: recognition that UNILATERAL persistent nasal blockage/blood-stained discharge is a red flag (sinonasal/nasopharyngeal tumour), elicitation of the neck lump, unilateral ear symptoms and ethnicity-related risk, examination, an urgent ENT referral (nasendoscopy), and the fear addressed \u2014 not allergy treatment for a one-sided problem.' },
      ],
      ice:{
        ideas:'It\u2019s hay fever or a sinus infection; a spray/antihistamine will clear it.',
        concerns:'HIDDEN AGENDA \u2014 he\u2019s noticed the neck lump and the blocked ear and is quietly worried, while reluctant to make a fuss/take time off; possible specific fear (a relative with nasopharyngeal cancer).',
        expectations:'A nasal spray/antihistamine. What he actually needs: recognition that unilateral persistent nasal blockage/bleeding is a red flag, elicitation of the neck lump/ear symptoms/ethnicity risk, examination, an urgent ENT referral, and the fear addressed.'
      },
      cues:['UNILATERAL persistent nasal blockage + blood-stained discharge/epistaxis \u2014 the one-sided rule; not "hay fever" (which is bilateral).','Neck lump + unilateral blocked ear + Southern Chinese family origin \u2014 nasopharyngeal-carcinoma red flags/risk; refer urgently.','"Just hay fever, give me a spray" \u2014 the misconception + avoidance masking the noticed lump; examine and refer.']
    },
    checkpoints:[
      { dom:'tasks', text:'Applies the ONE-SIDED RULE: recognises UNILATERAL persistent nasal obstruction with blood-stained discharge / recurrent unilateral epistaxis as a RED FLAG (possible sinonasal or nasopharyngeal tumour) \u2014 distinct from benign BILATERAL allergic rhinitis \u2014 and does NOT treat it as "hay fever" with a spray/antihistamine' },
      { dom:'tasks', text:'Elicits the NASOPHARYNGEAL/head-and-neck red flags by directed history: a NECK LUMP, UNILATERAL serous otitis media/blocked ear, blood-stained nasal discharge, and any cranial-nerve symptoms \u2014 and the ETHNICITY-related risk (Southern Chinese/Southeast Asian)' },
      { dom:'tasks', text:'Examines the nose (anterior rhinoscopy), ears and neck/lymph nodes, recognising a unilateral middle-ear effusion in an adult and an unexplained neck lump as themselves warranting urgent referral' },
      { dom:'tasks', text:'Refers URGENTLY to ENT for nasendoscopy/assessment to exclude tumour (sinonasal/nasopharyngeal carcinoma), rather than trialling allergy treatment for a unilateral problem; recognises the suspected-cancer pathway where thresholds are met (NG12)' },
      { dom:'tasks', text:'Keeps the benign differential in mind (polyp, foreign body, deviated septum) but does NOT let it justify allergy treatment without examination/referral for persistent unilateral symptoms' },
      { dom:'rto',   text:'Does not accept the "hay fever" framing for unilateral symptoms; surfaces the noticed neck lump and the underlying fear, naming the concern proportionately' },
      { dom:'rto',   text:'Reassures proportionately (many causes are benign; we examine and refer to be sure) so he accepts assessment, and addresses the reluctance to make a fuss/take time off' },
      { dom:'gs',    text:'Safety-nets and follows up: the urgent ENT referral and what to expect (nasendoscopy), what to report (worsening, the lump enlarging, new neurological/visual symptoms), and a follow-up \u2014 investigating the one-sided red flag, not treating allergy' },
    ],
    worked:[
      { lbl:'Apply the one-sided rule', txt:'"I can see why you\u2019d think hay fever \u2014 but there\u2019s an important difference that changes my plan: hay fever affects BOTH sides, with sneezing and clear runny nose. Yours is just the ONE nostril, persistently blocked, with blood in it. Persistent one-sided nose symptoms like that we always check properly, because occasionally there\u2019s something on that side we need to find. So a spray isn\u2019t the right answer here."' },
      { lbl:'Elicit the red flags', txt:'"A few questions: has your hearing or your ear on that same right side felt blocked? \u2026 And have you noticed any lump in your neck? \u2026 You have. And can I ask about family background \u2014 anyone of Southern Chinese heritage? \u2026 Those things together are exactly why I want this looked at, not treated as allergy."' },
      { lbl:'Name it honestly + reassure', txt:'"Let me be straight: persistent one-sided blockage with bleeding, a blocked ear on the same side, and a neck lump, I need to refer urgently to make sure there\u2019s nothing growing at the back of the nose. It might well be something harmless like a polyp \u2014 but the only safe way to know is for a specialist to look. And if it were something more, catching it early really matters."' },
      { lbl:'The urgent referral',  txt:'"So I\u2019m referring you urgently to the ear-nose-throat specialists \u2014 they\u2019ll pass a tiny camera through the nose to look at the back of it and check your neck. That\u2019s the right step, and it\u2019s why antihistamines wouldn\u2019t have sorted it."' },
      { lbl:'Address the avoidance', txt:'"I know you didn\u2019t want to make a fuss or take time off \u2014 but you\u2019ve done exactly the right thing, and this is worth a couple of hours. The lump you\u2019d noticed is a real reason to get checked, not to worry alone about."' },
      { lbl:'Safety-net',           txt:'"If the bleeding gets heavier, the lump grows, or you get double vision, numbness in the face or worsening hearing, tell us sooner. I\u2019ll get the urgent referral done and follow it up. You came for a hay-fever spray; what you actually needed was to have this one-sided problem looked at properly."' },
    ],
    learning:'The one-sided rule: UNILATERAL persistent nasal obstruction with blood-stained discharge or recurrent unilateral epistaxis is a RED FLAG (possible sinonasal or nasopharyngeal tumour) and must NOT be treated as "hay fever" \u2014 benign allergic rhinitis is typically BILATERAL, seasonal, with sneezing/itch and clear discharge. Nasopharyngeal carcinoma classically presents with a NECK LUMP (often first), UNILATERAL serous otitis media/blocked ear (Eustachian obstruction), blood-stained nasal discharge and cranial-nerve signs, with higher risk in people of Southern Chinese/Southeast Asian origin \u2014 so elicit these red flags and the ethnicity-related risk, examine the nose/ears/neck (a unilateral middle-ear effusion in an adult and an unexplained neck lump each warrant urgent referral), and refer urgently to ENT for nasendoscopy rather than trialling allergy treatment for a one-sided problem. Keep the benign differential (polyp, foreign body, deviated septum) in mind but do not let it justify allergy treatment without examination/referral. The hidden agenda is the "hay fever" misconception plus avoidance masking a noticed neck lump and quiet fear; don\u2019t accept the framing, surface the fear, reassure proportionately, and refer.',
    knowledge:{
      guideline:'NICE CKS nasal obstruction / epistaxis · NICE NG12 (head and neck) · nasopharyngeal carcinoma red flags',
      points:[
        { h:'Unilateral = red flag', t:'Persistent UNILATERAL nasal obstruction, blood-stained discharge, or recurrent unilateral epistaxis should be investigated \u2014 it distinguishes a possible sinonasal/nasopharyngeal tumour, polyp or foreign body from benign BILATERAL allergic rhinitis. Do not treat persistent one-sided symptoms as allergy without examination/referral.' },
        { h:'Nasopharyngeal carcinoma', t:'NPC red flags: neck lump (often the presenting sign), unilateral serous otitis media/conductive hearing loss in an adult (Eustachian tube obstruction \u2014 a key, easily-missed clue), nasal obstruction/blood-stained discharge/epistaxis, and cranial-nerve palsies (diplopia, facial numbness). Higher risk in Southern Chinese/Southeast Asian and some other populations; EBV-associated.' },
        { h:'A unilateral middle-ear effusion in an adult', t:'New unilateral glue ear/serous otitis media in an adult must prompt examination of the postnasal space (nasendoscopy) to exclude a nasopharyngeal tumour \u2014 it is a classic, frequently-overlooked presentation. Refer for assessment.' },
        { h:'Examine and refer', t:'Examine the nose (anterior rhinoscopy), ears (effusion) and neck (lymph nodes). Persistent unilateral signs and any unexplained neck lump warrant urgent ENT referral for nasendoscopy. Apply NG12 suspected-cancer pathways where thresholds are met. Do not trial allergy treatment for a unilateral problem.' },
        { h:'Benign causes exist \u2014 but exclude tumour', t:'Unilateral symptoms can be benign (polyp, deviated septum, foreign body \u2014 especially in children), but the one-sided pattern mandates examination/referral to exclude malignancy rather than reassurance as allergy.' },
        { h:'Surface the fear & risk', t:'Patients may attribute it to hay fever while quietly worried about a noticed lump. Surface the concern, ask about ethnicity-related risk and a family history, and use the red flags to motivate referral, reassuring proportionately.' },
        { h:'Never do', t:'Never treat persistent unilateral nasal blockage/bleeding as hay fever with a spray/antihistamine; never miss a unilateral adult middle-ear effusion or a neck lump; never skip examination/ENT referral; never ignore ethnicity-related NPC risk; never collude with avoidance.' },
        { h:'Safety-net & follow-up', t:'Urgent ENT referral for nasendoscopy; examine nose/ears/neck; report heavier bleeding, enlarging lump, or new neurological/visual symptoms; follow up the referral and outcome.' }
      ]
    }
  };

  /* ============ 147. TELEPHONE — Asymmetric sensorineural hearing loss: the acoustic-neuroma rule ============ */
  const c147 = {
    id:'asymmetric-hearing-loss', title:'"My right ear\u2019s gone muffled \u2014 it\u2019s just wax, isn\u2019t it?"', type:'telephone', duration:12,
    meta:{ age:49, sex:'F', setting:'Telephone \u2014 gradual one-sided hearing loss.', system:'ENT / Asymmetric sensorineural hearing loss' },
    brief:'Mrs Hayley Brooks, 49. Several months of GRADUAL, progressive, ONE-SIDED (right) hearing loss, with unilateral TINNITUS and occasional unsteadiness; she blames wax and wants "drops/syringing". CRUCIAL: ASYMMETRIC/unilateral sensorineural hearing loss with unilateral tinnitus is the red-flag pattern for a retrocochlear lesion \u2014 notably an ACOUSTIC NEUROMA (vestibular schwannoma) \u2014 needing audiology + ENT referral (and MRI), NOT just wax removal. She minimises; her hearing affects her work (teacher) and she\u2019s frightened of "going deaf".',
    script:{
      opening:'"Hi, I\u2019m ringing because my right ear\u2019s gone all muffled over the last few months \u2014 and there\u2019s a ringing in just that ear. I\u2019m a teacher so I really need my hearing. It\u2019s just wax, isn\u2019t it? Could you sort me some drops or book me in for syringing to clear it out? My left ear\u2019s totally fine, it\u2019s just the right one playing up."',
      facts:[
        { topic:'Asymmetric SNHL is the red flag', text:'GRADUAL, progressive, ONE-SIDED (asymmetric) hearing loss with UNILATERAL tinnitus \u00b1 imbalance is the red-flag pattern for a RETROCOCHLEAR lesion \u2014 classically an ACOUSTIC NEUROMA (vestibular schwannoma) \u2014 and needs audiometry + ENT referral (with MRI of the internal auditory meati), NOT wax removal. Wax/eustachian causes are usually conductive, often bilateral or fluctuating; persistent ASYMMETRIC SENSORINEURAL loss with one-sided tinnitus is the flag. (Note: SUDDEN sensorineural loss is a separate same-day emergency.)' },
        { topic:'What to assess',       text:'Establish the pattern: gradual vs sudden (sudden = emergency), unilateral vs bilateral, associated tinnitus/vertigo/imbalance, and any facial numbness/weakness (larger tumours affect CN V/VII). Examine the ears (exclude simple wax/effusion) and do tuning-fork tests if able; but the persistent ASYMMETRIC pattern mandates audiology/ENT referral regardless of finding some wax.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 she wants it to be "just wax" because she\u2019s frightened: deep down she\u2019s worried about going deaf and the impact on her teaching career and identity, and possibly about a brain tumour (she may have googled the unilateral tinnitus). She minimises to make it a simple fix. The skill is to not just treat the wax, explain why one-sided persistent loss with tinnitus needs proper testing, and address the fear with reassurance (acoustic neuromas are benign and managed well) while arranging the referral.' },
        { topic:'Reassurance available', text:'Genuinely reassuring: acoustic neuromas are BENIGN, slow-growing, and managed effectively (monitoring, surgery or radiotherapy depending on size) \u2014 and many cases of asymmetric loss turn out to have other, treatable explanations. So the referral/MRI is precautionary and good practice, not a sign of disaster.' },
        { topic:'What she needs',        text:'Officially: drops/syringing for wax. What she needs: recognition that gradual ASYMMETRIC sensorineural hearing loss with unilateral tinnitus is a red flag for a retrocochlear lesion (acoustic neuroma), ear examination (excluding simple wax) AND audiology/ENT referral (MRI) regardless, the "going deaf"/tumour fear addressed with proportionate reassurance, and her work impact acknowledged \u2014 not wax removal alone.' },
      ],
      ice:{
        ideas:'It\u2019s just wax in the right ear; drops or syringing will clear it.',
        concerns:'HIDDEN AGENDA \u2014 frightened of going deaf and the impact on her teaching career/identity, and possibly of a brain tumour (googled the one-sided tinnitus); minimises to make it a simple fix.',
        expectations:'Drops/syringing for wax. What she actually needs: recognition that asymmetric sensorineural loss with unilateral tinnitus is a red flag for an acoustic neuroma, ear exam AND audiology/ENT referral (MRI) regardless, and the fear addressed with proportionate reassurance.'
      },
      cues:['Gradual ASYMMETRIC (one-sided) hearing loss + UNILATERAL tinnitus \u2014 the red-flag pattern for an acoustic neuroma; not just wax.','"It\u2019s just wax, sort me some drops" \u2014 minimisation; persistent one-sided sensorineural loss needs audiology/ENT + MRI even if some wax is present.','Fear of going deaf / a brain tumour behind it \u2014 address with proportionate reassurance (acoustic neuromas are benign, managed well).']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that GRADUAL, persistent, ASYMMETRIC (unilateral) hearing loss with UNILATERAL tinnitus \u00b1 imbalance is a RED-FLAG pattern for a retrocochlear lesion (acoustic neuroma) \u2014 and does NOT just treat it as wax with drops/syringing' },
      { dom:'tasks', text:'Establishes the pattern and screens associated features: gradual vs SUDDEN (sudden sensorineural loss = same-day emergency), unilateral vs bilateral, tinnitus/vertigo/imbalance, and any facial numbness/weakness \u2014 and examines the ears to exclude simple wax/effusion' },
      { dom:'tasks', text:'Refers for AUDIOLOGY/ENT assessment and (per pathway) MRI of the internal auditory meati to exclude an acoustic neuroma \u2014 recognising that finding some wax does NOT explain or excuse a persistent asymmetric sensorineural pattern' },
      { dom:'tasks', text:'Distinguishes the emergency: knows that SUDDEN sensorineural hearing loss is a separate, same-day ENT emergency (urgent steroids) \u2014 and clarifies the time-course here (gradual)' },
      { dom:'tasks', text:'Gives accurate, reassuring information: acoustic neuromas are benign, slow-growing and managed effectively, and many asymmetric losses have other treatable causes \u2014 so the referral/MRI is precautionary' },
      { dom:'rto',   text:'Hears the "just wax" minimisation and the fear beneath it (going deaf, career, tumour), surfaces and addresses it, rather than colluding with a wax-only fix' },
      { dom:'rto',   text:'Acknowledges the impact on her teaching/identity and engages her in the referral, balancing honesty with proportionate reassurance' },
      { dom:'gs',    text:'Safety-nets and follows up: audiology/ENT referral (and MRI), what would be an emergency (SUDDEN loss \u2192 same-day), report new facial numbness/weakness/worsening, hearing support meanwhile, and a follow-up \u2014 investigating the asymmetric red flag, not just removing wax' },
    ],
    worked:[
      { lbl:'Not just wax',         txt:'"I can check for wax \u2014 but I want to be honest about why I won\u2019t just leave it there. Hearing loss that\u2019s in ONE ear, coming on gradually, with ringing in that same ear, is a pattern we always look into properly, because it can point to something other than wax \u2014 sometimes a small, benign growth on the hearing nerve. So even if there\u2019s a bit of wax, this one-sided pattern needs proper testing."' },
      { lbl:'Establish the pattern', txt:'"Let me check a few things: did it come on suddenly, over a day or two, or gradually over months? \u2026 Gradual. Good \u2014 a sudden one-sided loss would be a same-day emergency, so I\u2019m glad it\u2019s not that. Any dizziness or unsteadiness, or numbness or weakness in your face? \u2026 A bit of unsteadiness. That all helps me know we\u2019re doing the right thing referring you."' },
      { lbl:'Name it honestly + reassure', txt:'"The thing we need to rule out is called an acoustic neuroma \u2014 and I want to reassure you straightaway, because the name sounds scary: it\u2019s a BENIGN, slow-growing growth, not a cancer, and it\u2019s very manageable \u2014 often just watched, sometimes treated. And honestly, plenty of one-sided hearing losses turn out to be something else entirely. So this is being thorough, not me expecting the worst."' },
      { lbl:'The referral',         txt:'"So rather than syringing and hoping, I\u2019m going to refer you for a proper hearing test and to the ear specialists, and they\u2019ll usually arrange a scan (an MRI) to look at the hearing nerve. That\u2019s the right way to sort a one-sided problem like yours."' },
      { lbl:'Address the real fear', txt:'"I can hear how much your hearing matters \u2014 you\u2019re a teacher, it\u2019s your livelihood, and I suspect the thought of going deaf, or worse, has frightened you. That\u2019s exactly why getting it properly checked is the kind thing to do, so you\u2019re not lying awake guessing. And we\u2019ll sort hearing support if you need it meanwhile."' },
      { lbl:'Safety-net',           txt:'"If your hearing suddenly drops further over a day or two, treat that as urgent \u2014 same-day \u2014 and tell us about any facial numbness or weakness. Otherwise I\u2019ll arrange the hearing test, the specialist referral and the scan, and follow it up with you. You rang expecting drops; what you actually needed was to have this one-sided change looked at properly."' },
    ],
    learning:'Gradual, persistent, ASYMMETRIC (unilateral) hearing loss with UNILATERAL tinnitus \u00b1 imbalance is the red-flag pattern for a retrocochlear lesion \u2014 classically an ACOUSTIC NEUROMA (vestibular schwannoma) \u2014 and needs audiology/ENT referral with MRI of the internal auditory meati, NOT just wax removal; finding some wax does not explain a persistent asymmetric sensorineural pattern. Establish the time-course (crucially, SUDDEN sensorineural hearing loss is a SEPARATE same-day ENT emergency needing urgent steroids), unilateral vs bilateral, and associated tinnitus/vertigo/facial numbness or weakness; examine the ears to exclude simple wax/effusion but refer regardless for the asymmetric pattern. Reassure accurately \u2014 acoustic neuromas are benign, slow-growing and managed effectively, and many asymmetric losses have other treatable causes \u2014 so the referral/MRI is precautionary. The hidden agenda is "just wax" minimisation masking a fear of going deaf (career/identity) and possibly of a brain tumour; surface and address it with proportionate reassurance, acknowledge the work impact, arrange the referral, and safety-net the sudden-loss emergency.',
    knowledge:{
      guideline:'NICE NG98 hearing loss in adults · acoustic neuroma / asymmetric SNHL referral · sudden SNHL emergency',
      points:[
        { h:'Asymmetric SNHL = refer', t:'Persistent ASYMMETRIC (unilateral or markedly one-sided) sensorineural hearing loss, especially with unilateral tinnitus and/or imbalance, requires audiology assessment and ENT referral with MRI of the internal auditory meati to exclude a retrocochlear lesion (acoustic neuroma/vestibular schwannoma). Do not attribute persistent one-sided loss to wax.' },
        { h:'Distinguish the emergency', t:'SUDDEN sensorineural hearing loss (over hours\u2013days, often unilateral) is a SAME-DAY ENT emergency \u2014 urgent assessment and corticosteroids improve outcomes. Always clarify whether the loss is sudden (emergency) or gradual (red-flag asymmetric pattern \u2192 referral/MRI).' },
        { h:'Acoustic neuroma features', t:'Vestibular schwannoma: a benign, slow-growing tumour of CN VIII. Unilateral progressive SNHL, unilateral tinnitus, imbalance; larger tumours can cause facial numbness (CN V) or weakness (CN VII). Managed by monitoring, surgery or radiotherapy by size \u2014 generally good outcomes.' },
        { h:'Examine but refer regardless', t:'Examine the ears (exclude wax/effusion), do tuning-fork tests (Weber/Rinne) if able to distinguish conductive vs sensorineural. But a persistent asymmetric sensorineural pattern warrants referral even if some wax is present \u2014 treating the wax alone is insufficient.' },
        { h:'Reassure proportionately', t:'Acoustic neuromas are benign and managed well, and many asymmetric losses have other (often treatable) causes. Frame the referral/MRI as precautionary and good practice, addressing fears of "going deaf" or a brain tumour with honest, proportionate reassurance.' },
        { h:'Address impact & fear', t:'Hearing loss threatens livelihood and identity (e.g. a teacher). Acknowledge the impact, surface the minimisation-driving fear, and arrange hearing support alongside investigation.' },
        { h:'Never do', t:'Never treat persistent asymmetric SNHL as "just wax" with drops/syringing alone; never miss SUDDEN sensorineural loss as a same-day emergency; never skip audiology/ENT referral + MRI for the asymmetric pattern; never overlook facial numbness/weakness; never collude with the wax-only fix or leave the fear unaddressed.' },
        { h:'Safety-net & follow-up', t:'Audiology + ENT referral and MRI for asymmetric SNHL; SUDDEN loss \u2192 same-day ENT; report new facial numbness/weakness or worsening; hearing support meanwhile; follow up the referral and results.' }
      ]
    }
  };

  /* ============ 148. TELEPHONE — Globus: reassurance with an exit (and the red flags) ============ */
  const c148 = {
    id:'globus-sensation', title:'"There\u2019s a lump in my throat \u2014 I\u2019m sure it\u2019s cancer"', type:'telephone', duration:12,
    meta:{ age:45, sex:'F', setting:'Telephone \u2014 a persistent throat-lump sensation.', system:'ENT / Globus pharyngeus & health anxiety' },
    brief:'Mrs Asha Devi, 45. Several weeks of a sensation of "a lump in the throat" / something stuck, MIDLINE, present BETWEEN meals, eased when EATING/swallowing food, with throat-clearing. NO true dysphagia (food doesn\u2019t actually stick), no weight loss, no pain, no voice change, no neck lump. This is GLOBUS PHARYNGEUS (functional), often linked to reflux/anxiety/throat-clearing. She is convinced it\u2019s throat cancer (a colleague was recently diagnosed) and is highly anxious. The task: reasoned reassurance with safety-netting \u2014 while excluding the red flags.',
    script:{
      opening:'"Hi, I\u2019m really frightened. I\u2019ve had this feeling of a lump in my throat for weeks, like something\u2019s stuck. A woman at my work was just diagnosed with throat cancer and I\u2019m now convinced that\u2019s what this is. It\u2019s there all the time, I keep clearing my throat. Please \u2014 I need to know if it\u2019s cancer. Can you refer me for all the tests, a camera, a scan, everything?"',
      facts:[
        { topic:'The globus pattern', text:'GLOBUS PHARYNGEUS: a persistent sensation of a lump/tightness in the MIDLINE of the throat, present BETWEEN meals, characteristically EASED by eating/swallowing food (the opposite of an obstructing tumour), often with throat-clearing, WITHOUT true dysphagia, weight loss, pain, voice change or a neck lump. It is functional, commonly associated with reflux (laryngopharyngeal reflux), post-nasal drip, anxiety and the throat-clearing habit. A reassuring positive pattern \u2014 not a tumour.' },
        { topic:'The red flags to exclude', text:'CRITICAL \u2014 reassurance is only safe after excluding the red flags that would mandate urgent referral: TRUE dysphagia (food/liquids actually sticking) or odynophagia, persistent/progressive symptoms, a NECK LUMP, hoarseness/voice change, unexplained WEIGHT LOSS, LATERALISED (one-sided) symptoms, otalgia, or a smoking/alcohol/older-age risk profile. Their ABSENCE supports globus; their presence flips it to a head-and-neck 2WW.' },
        { topic:'The hidden agenda \u2014 health anxiety', text:'HIDDEN AGENDA \u2014 the REAL presentation is HEALTH ANXIETY, triggered by a colleague\u2019s throat-cancer diagnosis mapped onto herself; the throat-clearing is both a symptom and a feeding behaviour, and she is seeking "all the tests" for certainty. The skill is reasoned, confident reassurance (a POSITIVE globus diagnosis, explained \u2014 including why eased-by-eating is the opposite of cancer) that addresses the specific fear, NOT either a dismissive "it\u2019s nothing" or capitulating to a battery of tests that would feed the anxiety \u2014 with a clear safety-net and treatment of any reflux/anxiety.' },
        { topic:'Management',           text:'Treat contributing factors (reflux measures/PPI trial if indicated, reduce throat-clearing, address anxiety), explain the mechanism, give reasoned reassurance, and safety-net the red flags. Persistent globus despite this, or any red flag, warrants ENT referral/examination.' },
        { topic:'What she needs',       text:'Officially: referral for "all the tests" to rule out cancer. What she needs: a confident POSITIVE globus diagnosis with reasoned reassurance (why the pattern, especially eased-by-eating, points away from cancer), the red flags screened (and their absence explained), the specific cancer fear/health anxiety addressed and supported, treatment of reflux/throat-clearing, and a precise safety-net \u2014 not a dismissive brush-off NOR an anxiety-feeding battery of tests.' },
      ],
      ice:{
        ideas:'The throat-lump feeling is throat cancer (like her colleague\u2019s); she needs every test \u2014 a camera and a scan \u2014 to be sure.',
        concerns:'HIDDEN AGENDA \u2014 health anxiety triggered by a colleague\u2019s throat-cancer diagnosis mapped onto herself; seeking certainty through "all the tests"; the throat-clearing both a symptom and a feeding behaviour.',
        expectations:'Referral for every test to rule out cancer. What she actually needs: a confident positive globus diagnosis with reasoned reassurance, the red flags screened and explained, the health anxiety addressed, reflux/throat-clearing treated, and a precise safety-net.'
      },
      cues:['Midline throat-lump sensation, between meals, EASED by eating, no true dysphagia \u2014 globus (functional), not a tumour.','Screen red flags: true dysphagia, neck lump, hoarseness, weight loss, one-sided symptoms, otalgia \u2014 absent here supports globus.','"A colleague got throat cancer, refer me for everything" \u2014 health anxiety; reasoned reassurance with an exit, not a battery of tests.']
    },
    checkpoints:[
      { dom:'tasks', text:'Makes a confident POSITIVE diagnosis of GLOBUS PHARYNGEUS from the pattern \u2014 midline lump sensation present between meals, EASED by eating/swallowing, with throat-clearing, WITHOUT true dysphagia/weight loss/pain/voice change/neck lump \u2014 rather than an open-ended "could be cancer, let\u2019s test everything"' },
      { dom:'tasks', text:'EXCLUDES the red flags explicitly: true dysphagia/odynophagia (food actually sticking), persistent/progressive symptoms, neck lump, hoarseness, unexplained weight loss, lateralised symptoms, otalgia, and a smoking/alcohol/older-age risk profile \u2014 so reassurance is safe, and knows their presence would flip it to a head-and-neck 2WW (NG12)' },
      { dom:'tasks', text:'Gives REASONED reassurance that addresses the cancer fear: explains WHY the pattern (especially being EASED by eating \u2014 the opposite of an obstructing tumour) points away from cancer, rather than a dismissive "it\u2019s nothing"' },
      { dom:'tasks', text:'Identifies and treats the CONTRIBUTING factors: reflux/laryngopharyngeal reflux (lifestyle measures \u00b1 PPI trial), the throat-clearing habit, post-nasal drip, and the anxiety \u2014 explaining the mechanism' },
      { dom:'tasks', text:'Addresses the HEALTH ANXIETY (the colleague-triggered fear) as the real issue \u2014 offering support \u2014 and resists capitulating to an anxiety-feeding battery of tests, while not refusing appropriate examination/referral if red flags or persistence emerge' },
      { dom:'rto',   text:'Identifies the specific fear (the colleague\u2019s diagnosis) and addresses it directly and warmly, treating reassurance as a skilled, specific task rather than a brush-off' },
      { dom:'rto',   text:'Validates her fear and the genuine symptom, engages her in the explanation and plan, and supports the anxiety so she feels heard and reassured' },
      { dom:'gs',    text:'Safety-nets PRECISELY so reassurance is safe: which specific symptoms would warrant urgent review/ENT referral (true dysphagia, neck lump, hoarseness, weight loss, one-sided symptoms, persistent/worsening), a reflux/anxiety plan, and a follow-up \u2014 confident diagnosis, red flags excluded, fear addressed, exit clearly marked' },
    ],
    worked:[
      { lbl:'Reasoned positive diagnosis', txt:'"Let me start with the answer, because I can hear how frightened you are: what you\u2019re describing is something called globus \u2014 a very common, harmless feeling of a lump in the throat. And here\u2019s the bit that\u2019s genuinely reassuring: yours eases when you actually eat and swallow food. A cancer blocking the throat does the OPPOSITE \u2014 food sticks and it gets worse with eating. So the pattern itself points firmly AWAY from cancer."' },
      { lbl:'Exclude the red flags', txt:'"Let me check the things I\u2019d want to be sure about: does food or drink actually GET STUCK when you swallow? \u2026 No. Any weight loss, voice changes, lumps in your neck, ear pain, or is it just on one side? \u2026 None of those. That\u2019s really reassuring \u2014 those are the features that would make me worry, and you don\u2019t have them."' },
      { lbl:'Address the specific fear', txt:'"Can I ask \u2014 did this worry start when your colleague was diagnosed? \u2026 I thought so, and it makes complete sense your mind went there. But her situation and yours are genuinely different things, and I can tell you why with confidence rather than just \u2018don\u2019t worry\u2019."' },
      { lbl:'Why not every test',   txt:'"I know you want every scan and camera to be 100% sure \u2014 and I understand that. But here\u2019s the honest thing: when the pattern is this clearly globus and all the warning signs are absent, piling on tests tends to feed the worry rather than fix it, and can throw up red herrings. The reassurance you need comes from understanding it, not from endless scans."' },
      { lbl:'Treat the cause',      txt:'"There are real things driving this we CAN treat: often a bit of acid reflux irritating the throat, and the throat-clearing itself, which keeps the feeling going. So let\u2019s try some reflux measures, and consciously easing off the throat-clearing. And because the anxiety is part of it, I\u2019d like to help with that too \u2014 it\u2019s not \u2018all in your head\u2019, but the fear is feeding the feeling."' },
      { lbl:'Safety-net (the exit)', txt:'"And I\u2019m not abandoning you \u2014 here\u2019s exactly when to come back: if food or drink starts actually sticking, you lose weight, your voice changes, you feel a lump in your neck, or it\u2019s persistently getting worse \u2014 those I\u2019d see you and refer urgently. But what you have now is the ordinary, harmless kind. Let\u2019s treat the reflux and the worry, and review. You rang sure it was cancer; the pattern says it isn\u2019t \u2014 and I\u2019ve told you exactly what to watch for."' },
    ],
    learning:'Globus pharyngeus is a POSITIVE clinical diagnosis: a persistent MIDLINE lump/tightness sensation present BETWEEN meals, characteristically EASED by eating/swallowing food (the opposite of an obstructing tumour), with throat-clearing, WITHOUT true dysphagia, weight loss, pain, voice change or neck lump \u2014 functional, commonly linked to reflux, post-nasal drip, anxiety and the throat-clearing habit. The skill is reasoned, confident reassurance that explains WHY the pattern (especially eased-by-eating) points away from cancer \u2014 NOT a dismissive "it\u2019s nothing" \u2014 but ONLY after explicitly excluding the red flags (true dysphagia/odynophagia, persistent/progressive symptoms, neck lump, hoarseness, weight loss, lateralised symptoms, otalgia, smoking/alcohol/older-age), whose presence would flip it to a head-and-neck 2WW. The examinable hidden agenda is health anxiety triggered by a colleague\u2019s throat-cancer diagnosis and a demand for "all the tests" for certainty; address the specific fear directly, treat the contributing reflux/throat-clearing and the anxiety, resist an anxiety-feeding battery of tests (without refusing appropriate referral if red flags emerge), and safety-net PRECISELY so reassurance is safe \u2014 a clearly marked exit.',
    knowledge:{
      guideline:'NICE CKS globus pharyngeus · NICE NG12 (head and neck red flags) · laryngopharyngeal reflux',
      points:[
        { h:'Recognise globus (positive diagnosis)', t:'Globus pharyngeus: persistent sensation of a lump/tightness in the MIDLINE throat, present between meals, typically EASED by eating/swallowing, often with throat-clearing, and WITHOUT true dysphagia, odynophagia, weight loss, pain, voice change or neck mass. Commonly associated with reflux (LPR), post-nasal drip, anxiety and the throat-clearing habit. It is a positive, reassuring diagnosis.' },
        { h:'Eased-by-eating vs obstruction', t:'A key discriminator: globus is often relieved by swallowing food, whereas a mechanically obstructing lesion (tumour, stricture) causes TRUE dysphagia \u2014 food/liquids actually sticking, worse with solids, progressive. Use this to reassure and to flag concern.' },
        { h:'Exclude the red flags', t:'Reassurance is safe only after excluding: true/progressive dysphagia or odynophagia, unexplained weight loss, neck lump, hoarseness/voice change, lateralised (one-sided) symptoms, referred otalgia, and high-risk profile (smoking/alcohol/older age). Any of these flips management to urgent head-and-neck (2WW) referral (NG12).' },
        { h:'Treat contributing factors', t:'Manage reflux/laryngopharyngeal reflux (lifestyle measures \u00b1 a PPI trial), reduce throat-clearing (which perpetuates the sensation), treat post-nasal drip, and address anxiety. Explain the mechanism \u2014 it is a real sensation with treatable drivers, not imaginary.' },
        { h:'Reassurance is a skill, not a brush-off', t:'Identify and address the SPECIFIC fear (often a relative/colleague\u2019s diagnosis); give reasoned, confident reassurance explaining why the pattern is benign. Avoid both dismissiveness ("it\u2019s nothing") and capitulating to an anxiety-feeding battery of tests \u2014 over-investigation reinforces health anxiety and risks incidental findings.' },
        { h:'Manage health anxiety', t:'Where health anxiety is the real driver, name and support it (psychoeducation, address reassurance-seeking, consider CBT/Talking Therapies). The symptom and the anxiety are both addressed.' },
        { h:'Never do', t:'Never give open-ended "could be cancer, let\u2019s test everything" for a clear globus picture; never give dismissive "it\u2019s nothing" without reasoned explanation; never skip the red-flag exclusion; never feed health anxiety with an undirected battery of tests; never miss true dysphagia/neck lump/hoarseness that warrant the 2WW.' },
        { h:'Safety-net & follow-up', t:'Treat reflux/throat-clearing and anxiety; specify exactly which symptoms warrant urgent review/ENT referral (true dysphagia, neck lump, hoarseness, weight loss, one-sided/persistent-worsening); review; persistent globus despite treatment or any red flag \u2192 ENT examination.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c145, c146, c147, c148);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'persistent-hoarseness': {
      ceg: ['Long-term conditions & cancer', 'Urgent & unscheduled care'],
      stem: {
        name: 'Roy Calladine', age: '63 years · male',
        pmh: ['~6 weeks progressive hoarseness, unsettled', 'Smoker 40/day; heavy alcohol', '⚠ Throat/one-sided ear ache; a small neck lump'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Blames "a smoker\u2019s throat / a lingering cold"; wants a spray/antibiotics; "can\u2019t be without my voice".',
        reason: 'Video consultation — hoarseness for weeks.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe "smoker\u2019s throat"', d:'Hoarseness >3 weeks, progressive, smoker over 45 — never "just a smoker\u2019s throat". Needs proper looking at, not a spray.' },
        { t:'2–4',  h:'Elicit red flags',     d:'Throat/ear ache, swallowing, NECK LUMP? He has one. Smoking + heavy alcohol = major combined risk.' },
        { t:'4–6',  h:'Name it + reassure',   d:'Laryngeal/throat cancer must be excluded; early disease is very treatable, often voice-preserving. Urgent referral is precautionary.' },
        { t:'6–8',  h:'NG12 2WW referral',    d:'Urgent ENT/head-and-neck 2WW; nasendoscopy. Tag NICE NG12 (persistent hoarseness 45+).' },
        { t:'8–12', h:'Smoking/alcohol + net', d:'Support cessation/reduction, no lecture. Worsening swallowing/lump growth/breathing trouble → sooner. Follow up.' }
      ],
      wordPics: {
        fail: 'Prescribes a spray/antibiotics for "a smoker\u2019s throat"; never elicits the neck lump or the red flags; misses the NG12 laryngeal 2WW; colludes with the minimisation.',
        pass: 'Recognises persistent hoarseness as a 2WW flag, elicits red flags, refers urgently, reassures, and supports smoking/alcohol.',
        exc:  'Reframes "a smoker\u2019s throat" and applies the NG12 laryngeal 2WW; elicits the neck lump and head-and-neck red flags and the combined smoking/alcohol risk; reassures that early disease is very treatable; refers urgently; and supports smoking/alcohol without a lecture, with a clear safety-net.'
      },
      avoid: [
        { dont:'"It\u2019s just a smoker\u2019s throat — here\u2019s a spray and some antibiotics."', instead:'"A husky voice for over three weeks in a smoker over 45 we never put down to a smoker\u2019s throat — it needs an urgent specialist look to rule out a cancer of the voice box."', why:'Treating persistent hoarseness with sprays/antibiotics without examination misses the NG12 laryngeal-cancer 2WW.' },
        { dont:'"As long as you\u2019ve no pain, it\u2019s probably nothing serious."', instead:'"Have you noticed any lumps in your neck, or ache in one ear? \u2026 You have — that\u2019s exactly why I want this checked urgently, not treated blind."', why:'Skipping the neck-lump/otalgia red-flag screen misses head-and-neck cancer.' },
        { dont:'"You really need to stop smoking and drinking — this is what it leads to." (lecture)', instead:'"The smoking and drink are the biggest factors, and I\u2019ll help you with both properly when you\u2019re ready — no judgement. First, let\u2019s get this looked at."', why:'A judgemental lecture alienates the patient and risks him disengaging from the urgent referral.' }
      ]
    },

    'unilateral-nasal': {
      ceg: ['Long-term conditions & cancer', 'Ethnicity, culture & diversity'],
      stem: {
        name: 'Wei Chen', age: '52 years · male',
        pmh: ['Weeks of persistent RIGHT-sided nasal blockage + blood-stained discharge / unilateral epistaxis', 'Southern Chinese family origin (NPC risk group)', '⚠ Right-sided blocked ear/hearing dullness; a small neck lump'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Blames "hay fever / a sinus thing"; wants a spray/antihistamine; "left side\u2019s fine".',
        reason: 'Video consultation — unilateral nasal symptoms.'
      },
      timeMap: [
        { t:'0–2',  h:'The one-sided rule',  d:'Hay fever is BOTH sides. Persistent ONE-sided blockage + blood = red flag; check properly, not a spray.' },
        { t:'2–4',  h:'Elicit NPC red flags', d:'Neck lump? blocked ear on the same side? Southern Chinese heritage? — nasopharyngeal-carcinoma risk/red flags.' },
        { t:'4–6',  h:'Name it + reassure',  d:'Need to exclude something at the back of the nose; might be a harmless polyp, but a specialist must look. Early matters.' },
        { t:'6–8',  h:'Urgent ENT referral', d:'Nasendoscopy + neck exam; a unilateral adult middle-ear effusion alone warrants this. NG12 where thresholds met.' },
        { t:'8–12', h:'Address avoidance + net', d:'The noticed lump is a reason to get checked, not worry alone. Heavier bleeding/lump growth/face numbness/double vision → sooner.' }
      ],
      wordPics: {
        fail: 'Treats persistent unilateral blockage/bleeding as hay fever with a spray/antihistamine; misses the one-sided rule, the unilateral ear effusion, the neck lump and the ethnicity-related NPC risk; never refers.',
        pass: 'Applies the one-sided rule, elicits the red flags/risk, examines, and refers urgently to ENT.',
        exc:  'Refuses the "hay fever" framing for unilateral symptoms and elicits the NPC red flags (neck lump, unilateral ear effusion) and ethnicity-related risk; examines nose/ears/neck; refers urgently for nasendoscopy; keeps the benign differential in mind without using it to justify allergy treatment; and surfaces the noticed lump and fear.'
      },
      avoid: [
        { dont:'"Sounds like hay fever or a sinus infection — try a steroid spray and antihistamines."', instead:'"Hay fever affects both sides; yours is persistently one-sided with bleeding, which we always check properly — a spray isn\u2019t the answer."', why:'Treating persistent unilateral nasal blockage/bleeding as allergy misses a possible sinonasal/nasopharyngeal tumour.' },
        { dont:'"Your blocked ear is probably just related to the cold."', instead:'"A blocked ear on the same side as the nose symptoms, in an adult, is an important clue that needs a specialist to look at the back of the nose."', why:'Dismissing a unilateral adult middle-ear effusion misses a classic nasopharyngeal-carcinoma presentation.' },
        { dont:'"Let\u2019s try the spray for a few weeks and see if it settles."', instead:'"We don\u2019t trial allergy treatment for one-sided symptoms — I\u2019m referring you urgently to ENT to look properly."', why:'A wait-and-see allergy trial delays the urgent assessment a unilateral red-flag pattern requires.' }
      ]
    },

    'asymmetric-hearing-loss': {
      ceg: ['New & undifferentiated presentations', 'Investigations & results'],
      stem: {
        name: 'Hayley Brooks', age: '49 years · female',
        pmh: ['Several months gradual ONE-sided (right) hearing loss + unilateral tinnitus + occasional unsteadiness', 'Teacher — hearing central to work', 'No facial weakness/numbness'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Blames wax; wants drops/syringing; "left ear\u2019s fine".',
        reason: 'Telephone — gradual one-sided hearing loss.'
      },
      timeMap: [
        { t:'0–2',  h:'Not just wax',        d:'One-sided gradual loss + same-side tinnitus = a pattern we investigate (?acoustic neuroma), not wax alone.' },
        { t:'2–4',  h:'Establish the pattern', d:'Sudden vs gradual (sudden = same-day emergency)? dizziness, facial numbness/weakness? Examine ears (exclude simple wax).' },
        { t:'4–6',  h:'Name it + reassure',  d:'Acoustic neuroma is BENIGN, slow-growing, managed well; many asymmetric losses are something else. Referral/MRI is precautionary.' },
        { t:'6–8',  h:'Refer (audiology/ENT + MRI)', d:'Proper hearing test + ENT + MRI of the internal auditory meati — even if some wax is present.' },
        { t:'8–12', h:'Address fear + net',   d:'Acknowledge career/identity; hearing support meanwhile. SUDDEN drop → same-day; facial numbness/weakness → sooner. Follow up.' }
      ],
      wordPics: {
        fail: 'Treats persistent one-sided sensorineural loss as wax with drops/syringing; misses the asymmetric red-flag pattern and the acoustic-neuroma possibility; doesn\u2019t refer for audiology/MRI; misses that sudden loss is an emergency.',
        pass: 'Recognises asymmetric SNHL as a red flag, examines, refers for audiology/ENT + MRI, and reassures proportionately.',
        exc:  'Refuses the wax-only fix and recognises asymmetric SNHL + unilateral tinnitus as the acoustic-neuroma red-flag pattern; establishes the time-course (knows sudden loss is a same-day emergency) and screens facial signs; refers for audiology/ENT + MRI regardless of wax; reassures proportionately (benign, manageable); and addresses the career/identity fear with a clear safety-net.'
      },
      avoid: [
        { dont:'"It\u2019s probably just wax — I\u2019ll sort you some drops or syringing."', instead:'"One-sided gradual hearing loss with ringing in that ear is a pattern we always test properly — even if there\u2019s some wax, it needs a hearing test and a specialist look."', why:'Treating persistent asymmetric sensorineural loss as wax misses a possible acoustic neuroma.' },
        { dont:'"Hearing loss is common at your age, try not to worry about it."', instead:'"Age-related loss is usually in BOTH ears — yours being one-sided with tinnitus is different and worth checking, including a scan of the hearing nerve."', why:'Attributing asymmetric loss to age dismisses the red-flag pattern.' },
        { dont:'"If it ever gets worse we can refer you then."', instead:'"This one-sided pattern needs audiology, ENT and usually an MRI now — and if it ever drops suddenly, that\u2019s a same-day emergency."', why:'Deferring referral misses both the asymmetric red flag and the separate sudden-SNHL emergency.' }
      ]
    },

    'globus-sensation': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Asha Devi', age: '45 years · female',
        pmh: ['Weeks of midline throat-lump sensation, between meals, EASED by eating; throat-clearing', 'NO true dysphagia, weight loss, pain, voice change or neck lump', 'Colleague recently diagnosed with throat cancer'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Convinced it\u2019s throat cancer; wants "all the tests — camera and scan".',
        reason: 'Telephone — persistent throat-lump sensation.'
      },
      timeMap: [
        { t:'0–2',  h:'Reasoned positive diagnosis', d:'Globus: midline, between meals, EASED by eating — the OPPOSITE of an obstructing cancer. Say it confidently and explain why.' },
        { t:'2–4',  h:'Exclude red flags',    d:'Food actually sticking? weight loss, voice change, neck lump, ear pain, one-sided? — absent here supports globus.' },
        { t:'4–6',  h:'Address the fear',     d:'Triggered by the colleague\u2019s diagnosis. Different situation; explain why, warmly.' },
        { t:'6–8',  h:'Treat the cause',      d:'Reflux measures \u00b1 PPI; ease the throat-clearing; support the anxiety. Real, treatable drivers — not "all in your head".' },
        { t:'8–12', h:'Safety-net (the exit)', d:'Why not a battery of tests (feeds anxiety/red herrings). Exact red flags → urgent review/ENT. Review.' }
      ],
      wordPics: {
        fail: 'Either capitulates to "refer me for everything" (feeding the anxiety, risking red herrings) or dismisses it as "nothing" without reasoned explanation; never excludes the red flags or addresses the health anxiety.',
        pass: 'Diagnoses globus, excludes red flags, reassures with reasoning, treats reflux/throat-clearing, and safety-nets.',
        exc:  'Gives a confident reasoned positive globus diagnosis (explaining why eased-by-eating points away from cancer); explicitly excludes the red flags; addresses the specific colleague-triggered fear and the health anxiety; treats reflux/throat-clearing; resists an anxiety-feeding battery of tests; and safety-nets precisely with a clearly marked exit.'
      },
      avoid: [
        { dont:'"To be safe, I\u2019ll refer you for a camera and a scan and we\u2019ll rule everything out."', instead:'"When the pattern is this clearly globus and the warning signs are all absent, more tests tend to feed the worry and throw up red herrings — the reassurance comes from understanding it. Here\u2019s exactly when I WOULD refer."', why:'Capitulating to a battery of tests reinforces health anxiety and risks incidental findings.' },
        { dont:'"There\u2019s nothing wrong with your throat — try not to worry."', instead:'"It\u2019s a real sensation called globus — and it eases when you eat, which is the opposite of a cancer. Let me explain why that\u2019s genuinely reassuring."', why:'Dismissive reassurance without reasoning fails to resolve the specific cancer fear.' },
        { dont:'"Let\u2019s not dwell on your colleague — focus on your own throat."', instead:'"This worry started with her diagnosis, didn\u2019t it? That makes sense — and her situation and yours are genuinely different, which I can explain."', why:'Skipping the specific trigger misses the root of the health anxiety driving the consultation.' }
      ]
    }
  });

})();
