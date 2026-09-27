/* ============================================================
   Reasoning GP — Case Library batch 67:
   "Emergencies & must-not-miss" (NEW themes, verified absent)
   SJS/TEN; Kawasaki disease; carbon monoxide poisoning; otitis
   externa (+ malignant-OE flag). No NG12 cancer pathway applies.
   Load AFTER sca-cases66.js.
   ============================================================ */
(function(){

  /* ===== 240. SJS/TEN ===== */
  const c240 = {
    id:'sjs-ten', title:'"I started a new tablet, now I\u2019ve got a spreading rash, blisters and my mouth and eyes are raw"', type:'video', duration:12,
    meta:{ age:34, sex:'F', setting:'Video/urgent — severe rash after a new drug (observations cannot be taken on video).', system:'Dermatology / Urgent care \u2014 Stevens-Johnson syndrome / TEN' },
    brief:'Mrs Nadia Karim, 34, started a new drug 1\u20132 weeks ago (the specific drug is to be named by the role-player from the record or packet — for example lamotrigine, allopurinol, a sulfonamide antibiotic or an oxicam NSAID) and has a rapidly spreading painful rash with dusky/target macules, blisters and skin sloughing, plus painful erosions of mouth, eyes and genitals, fever and malaise. Recognise STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS \u2014 a life-threatening severe cutaneous adverse drug reaction \u2014 from a culprit drug + painful (not itchy) skin + mucosal involvement (\u22652 sites) + skin detachment (Nikolsky+) + systemic illness; STOP the culprit drug immediately; arrange IMMEDIATE admission (dermatology-led care, often burns/ITU, with EARLY ophthalmology review — BAD UK guidelines 2016) and assess sepsis risk (NICE NG253), accepting observations cannot be taken on video; if the culprit is an antiepileptic, stopping it still comes first and the hospital arranges safe seizure cover; know the extent bands (SJS <10%, SJS/TEN overlap 10–30%, TEN >30%) and the differential (erythema multiforme, SSSS, DRESS); document a severe drug reaction and report on a Yellow Card (MHRA). Not a minor drug rash. No NICE NG12 (updated April 2026) cancer link.',
    script:{
      opening:'"I started a new tablet about ten days ago and now I\u2019ve got this rash spreading everywhere, some bits blistering and the skin coming away. My mouth is full of painful sores, my eyes are red and sore, and it hurts to wee. I feel awful and feverish. Is this the tablet?"',
      facts:[
        { topic:'Recognise SJS/TEN', text:'A recent new DRUG plus a PAINFUL rash with DUSKY/target macules, BLISTERS and skin PEELING/detachment (Nikolsky+), and crucially MUCOSAL erosions of \u22652 of mouth/eyes/genitals, with fever/systemic illness, is SJS/TEN \u2014 a life-threatening severe cutaneous adverse drug reaction (SJS <10% detachment, SJS/TEN overlap 10–30%, TEN >30% — BAD 2016); onset typically 4–28 days after starting the drug, and skin tenderness out of proportion to the rash is an early clue. Mucosa + detachment + culprit drug is the alarm.' },
        { topic:'Stop the culprit drug', text:'Identify and STOP the culprit immediately — high-risk drugs (BAD 2016; BNF): antiepileptics (lamotrigine, carbamazepine, phenytoin, phenobarbital), ALLOPURINOL, SULFONAMIDE antibiotics such as co-trimoxazole, oxicam NSAIDs, nevirapine — typically started days-weeks before; check every drug started in the past two months, including over-the-counter and herbal products. Prompt withdrawal improves outcome; record a serious reaction. If the culprit is an ANTIEPILEPTIC, stopping it still comes first — abrupt withdrawal carries a seizure risk, so the hospital team arranges safe seizure cover; never restart it without specialist advice.' },
        { topic:'Emergency admission', text:'SJS/TEN is an EMERGENCY with significant mortality (skin failure \u2192 fluid/electrolyte loss, thermoregulation failure, infection/sepsis, eye/mucosal complications). Arrange IMMEDIATE admission — dermatology-led care, often in a burns or intensive care unit, with EARLY ophthalmology review because eye damage can be permanent (BAD 2016). Assess sepsis risk (NICE NG253); on video observations cannot be taken, which lowers the threshold further. Never manage in the community.' },
        { topic:'Differential', text:'Erythema multiforme (target lesions, often post-HSV, less mucosal/systemic, milder), staph scalded skin (mostly young children, no mucosa, superficial), DRESS (rash, fever, eosinophilia, organ involvement). Mucosal involvement + detachment + systemic illness marks SJS/TEN.' },
        { topic:'Document the allergy', text:'Ensure the suspected drug is stopped and clearly documented as a SEVERE reaction (not a simple intolerance), with the date and reaction and a clear alert (re-exposure can be fatal); related drugs are discussed with the specialist. Report on a Yellow Card (MHRA). Bring the packet to hospital.' },
        { topic:'Hidden agenda', text:'She is frightened and may underestimate the danger. The skill is rapid recognition (mucosa + detachment + culprit drug), stopping the drug, EMERGENCY admission and allergy documentation with a Yellow Card report — not a community antihistamine. No NICE NG12 (updated April 2026) cancer pathway applies.' },
      ],
      ice:{ ideas:'A reaction to the new tablet; unsure how serious.', concerns:'The spreading blistering rash, raw mouth/eyes, feeling very unwell.', expectations:'To be treated. What she needs: recognition of SJS/TEN, culprit drug stopped, IMMEDIATE admission with early ophthalmology, allergy documented and Yellow Card reported.' },
      cues:['Recent new drug + painful rash + dusky/target lesions + blistering/skin detachment + MUCOSAL erosions (mouth/eyes/genitals) + systemic illness \u2014 SJS/TEN.','Culprits: antiepileptics (lamotrigine/carbamazepine — hospital arranges seizure cover), allopurinol, sulfonamides/antibiotics, oxicam NSAIDs — STOP the drug now.','Life-threatening EMERGENCY — immediate admission (dermatology/burns/ITU + early ophthalmology, BAD 2016); sepsis risk (NICE NG253); document severe allergy; Yellow Card.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises SJS/TEN from the red flags \u2014 recent culprit drug, painful rash, dusky/target lesions, blistering/skin detachment (Nikolsky), and MUCOSAL involvement (mouth/eyes/genitals) with systemic illness' },
      { dom:'tasks', text:'Identifies the likely CULPRIT DRUG (antiepileptics, allopurinol, sulfonamides/antibiotics, oxicam NSAIDs, nevirapine) and STOPS it immediately — knowing that for an antiepileptic the hospital arranges seizure cover' },
      { dom:'tasks', text:'Recognises a life-threatening EMERGENCY and arranges IMMEDIATE admission (dermatology/burns/ITU + early ophthalmology) with a sepsis risk assessment (NICE NG253) — not community management' },
      { dom:'tasks', text:'Knows the extent bands (SJS <10%, overlap 10–30%, TEN >30%), the differential (erythema multiforme, staph scalded skin, DRESS) and the seriousness (skin failure, fluid loss, infection, mortality)' },
      { dom:'tasks', text:'Documents the suspected drug as a SEVERE reaction to prevent fatal re-exposure, flags related drugs for specialist discussion, and reports on a Yellow Card (MHRA)' },
      { dom:'rto',   text:'Communicates urgency clearly but calmly to a frightened patient and arranges emergency transfer' },
      { dom:'rto',   text:'Checks understanding of the need for hospital specialist care, avoiding both panic and false reassurance' },
      { dom:'gs',    text:'Arranges disposition: emergency admission today (999/acute), drug stopped + allergy documented + Yellow Card, early ophthalmology/skin care flagged, clear handover' },
    ],
    worked:[
      { lbl:'Recognise + reframe', txt:'"I\u2019m glad you contacted us \u2014 yes, this is very likely a serious reaction to the new tablet. The spreading blistering rash, skin coming away, and raw mouth, eyes and genitals make me think of Stevens-Johnson syndrome. That\u2019s an emergency, not a minor rash."' },
      { lbl:'Stop the drug', txt:'"Stop that tablet now and take no more. I’ll record it as a serious allergy so you’re never given it again — re-taking it could be dangerous — and I’ll report it to the medicines safety scheme. What was the tablet for? If it’s for seizures, the hospital will give you safe cover straight away."' },
      { lbl:'Admit', txt:'"You need hospital straight away — I can’t check your pulse, blood pressure or temperature over video — skin specialists, often burns-level care, and eye specialists early on, because your skin and the surfaces of your eyes and mouth need protecting. I\u2019m arranging that now."' },
      { lbl:'Why urgent', txt:'"When skin is affected this badly it can\u2019t do its job \u2014 fluid loss and infection become a real risk \u2014 so this can\u2019t wait or be managed at home."' },
      { lbl:'Practical', txt:'"Don\u2019t put creams on it, sip fluids if you can, and bring the tablet packet so they know exactly what caused it."' },
      { lbl:'Safety-net', txt:'"If your breathing becomes difficult, you can\u2019t swallow, or you feel very faint, call 999. The plan is hospital, now \u2014 I\u2019ll make sure they\u2019re expecting you."' },
    ],
    learning:'STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS (SJS/TEN) is a life-threatening severe cutaneous adverse drug reaction: a recent culprit DRUG plus a PAINFUL (not merely itchy) rash with dusky/target macules, BLISTERS and skin detachment (Nikolsky+), and crucially MUCOSAL erosions of \u22652 of mouth/eyes/genitals, with fever and systemic illness (SJS <10% body-surface detachment, SJS/TEN overlap 10–30%, TEN >30% — BAD UK guidelines 2016). The combination of mucosal involvement, skin detachment and a culprit drug is the alarm. Identify the culprit (antiepileptics — lamotrigine/carbamazepine/phenytoin; allopurinol; sulfonamide/other antibiotics; oxicam NSAIDs; nevirapine), typically started days-weeks before, and STOP it immediately (for an antiepileptic the hospital arranges safe seizure cover), documenting a severe drug allergy and reporting on a Yellow Card (MHRA), since re-exposure can be fatal and prompt withdrawal improves outcome. Recognise an EMERGENCY with significant mortality (skin failure causes fluid/electrolyte loss, thermoregulation failure, infection/sepsis, eye/mucosal complications) and arrange IMMEDIATE admission — dermatology with burns/ITU-level supportive care and EARLY ophthalmology, with a sepsis risk assessment (NICE NG253; observations cannot be taken on video) — not community management. Know the differential: erythema multiforme (milder, target lesions, often post-HSV, less mucosal/systemic), staphylococcal scalded skin (mostly young children, no mucosa), and DRESS (rash, fever, eosinophilia, organ involvement). Communicate the urgency clearly but calmly, arrange emergency transfer, and ensure the drug is stopped and documented. The skill is rapid pattern recognition, stopping the drug, and emergency admission — not a community antihistamine. No NICE NG12 (updated April 2026) cancer pathway applies.',
    knowledge:{
      guideline:'[1] UK guidelines for the management of Stevens–Johnson syndrome/toxic epidermal necrolysis in adults (British Association of Dermatologists, 2016) · [2] NICE NG253 (suspected sepsis in people aged 16 and over) · [3] MHRA Yellow Card scheme · [4] BNF monographs of the suspected drug (for example lamotrigine, carbamazepine, allopurinol, co-trimoxazole) · stop culprit + emergency admission · differential (EM/SSSS/DRESS)',
      points:[
        { h:'Recognise SJS/TEN', t:'Recent culprit drug + painful rash, dusky/target lesions, blistering/skin detachment (Nikolsky), mucosal involvement (\u22652 of mouth/eyes/genitals), systemic illness. SJS <10%, SJS/TEN overlap 10–30%, TEN >30% detachment [1].' },
        { h:'Stop the culprit', t:'Antiepileptics (lamotrigine/carbamazepine/phenytoin/phenobarbital), allopurinol, sulfonamides such as co-trimoxazole, oxicam NSAIDs, nevirapine [1][4]. Stop immediately; prompt withdrawal improves outcome. Antiepileptic culprit: hospital arranges seizure cover; never restart without specialist advice.' },
        { h:'Emergency admission', t:'Life-threatening (skin failure, fluid loss, infection, eye/mucosal complications, mortality). Immediate admission — dermatology/burns/ITU + early ophthalmology [1]; sepsis risk (NICE NG253 [2]). Not community management.' },
        { h:'Differential', t:'Erythema multiforme (milder, target, post-HSV, less mucosal/systemic), staph scalded skin (mostly young children, no mucosa), DRESS (rash/fever/eosinophilia/organ).' },
        { h:'Document the allergy', t:'Record the drug as a severe reaction with date and reaction, and discuss related drugs with the specialist — re-exposure can be fatal. Yellow Card report [3]. Bring the packet.' },
        { h:'Communicate', t:'Convey urgency calmly; arrange emergency transfer; avoid panic and false reassurance; explain hospital specialist care is needed.' },
        { h:'Never do', t:'Never treat as a minor/community rash; never continue the culprit; never delay admission; never re-challenge; never miss the mucosal involvement.' },
        { h:'Safety-net & disposition', t:'Emergency admission today (999/acute), drug stopped + allergy documented, ophthalmology/skin care flagged; 999 for breathing/swallowing difficulty or collapse en route.' }
      ]
    }
  };

  /* ===== 241. Kawasaki disease ===== */
  const c241 = {
    id:'kawasaki-disease', title:'"My little girl\u2019s had a high fever for six days, a rash, red eyes and cracked lips \u2014 the calpol isn\u2019t touching it"', type:'video', duration:12,
    meta:{ age:3, sex:'F', setting:'Video — a child with prolonged fever, mother present (heart rate, capillary refill and hydration cannot be assessed on video).', system:'Paediatrics \u2014 Kawasaki disease (coronary risk)' },
    brief:'Ivy Calderwood, 3, has fever \u22656 days despite antipyretics, plus polymorphous rash, bilateral non-purulent conjunctivitis, red/cracked lips and strawberry tongue, red/swollen hands, and a cervical node; irritable and miserable. Recognise KAWASAKI DISEASE — NICE NG143 (2019): be aware of Kawasaki disease in a child with fever lasting 5 days or longer, without needing 4 of the principal features (conjunctival injection without exudate, mucosal changes, cervical lymphadenopathy, polymorphous rash, extremity changes); the "≥4 of 5" rule is the AHA research definition (international) — a clinical diagnosis (beware incomplete/atypical, esp. infants); do the NG143 traffic-light and NICE NG254 sepsis risk assessment, knowing heart rate, capillary refill and hydration cannot be judged on video; know the major complication is CORONARY ARTERY ANEURYSM, reduced by prompt IVIG + aspirin within ~10 days; make an URGENT same-day paediatric referral (emergency transfer if any red feature or high-risk sepsis criterion); exclude mimics (measles, scarlet fever); antipyretics are for distress only, not given together (NG143); parents must not give aspirin at home (BNFC). Not "just a virus".',
    script:{
      opening:'"I\u2019m really worried about Ivy \u2014 raging temperature for six days now, Calpol and Nurofen barely touch it. She\u2019s got a blotchy rash, really red eyes but not gunky, cracked red lips, a tongue like a strawberry, and puffy red hands. So miserable. Everyone says it\u2019s just a virus, but six days?"',
      facts:[
        { topic:'Recognise the criteria', text:'KAWASAKI: NICE NG143 (2019): be aware of Kawasaki disease in any child with FEVER lasting 5 DAYS or longer (also an amber traffic-light feature); since 2019 NG143 no longer requires 4 of the 5 features before you consider it. The features to look for: (1) bilateral conjunctival injection without exudate, (2) MUCOSAL changes (red/cracked lips, strawberry tongue, red oral/pharyngeal mucosa), (3) cervical LYMPHADENOPATHY, (4) polymorphous RASH, (5) EXTREMITY changes (hand/foot oedema and erythema, later peeling). The "fever ≥5 days plus ≥4 features" rule is the classic AHA research definition (2017, international). Ivy has 6 days of fever plus several features — prolonged fever + mucocutaneous changes is the key.' },
        { topic:'Clinical & incomplete', text:'Clinical diagnosis (no single confirmatory test; raised inflammatory markers, later thrombocytosis support it). Be alert to INCOMPLETE/ATYPICAL Kawasaki, especially in INFANTS, who are at higher coronary risk and present atypically \u2014 keep a low referral threshold (NG143: children under 1 may present with fewer features but may be at higher coronary risk).' },
        { topic:'Why it matters', text:'The major complication is CORONARY ARTERY ANEURYSM (Kawasaki is a leading cause of acquired heart disease in children), substantially reduced by prompt treatment \u2014 so don\u2019t dismiss prolonged fever with these features as "just a virus".' },
        { topic:'Urgent treatment & referral', text:'URGENT same-day PAEDIATRIC referral/admission. Treatment is IV IMMUNOGLOBULIN + ASPIRIN, ideally within ~10 days, with echocardiography (Eleftheriou et al., Arch Dis Child 2014). Aspirin is a specialist exception to the under-16 contraindication (BNFC): parents must not start aspirin at home. Primary care role = recognise and refer — don’t wait "a few more days". On video, do the NG143 traffic-light and NICE NG254 sepsis assessment as far as possible (heart rate, capillary refill and hydration can’t be judged remotely): any red feature or high-risk sepsis criterion means emergency transfer; otherwise phone the on-call paediatrician for same-day assessment. NG143: antipyretics are for distress, not to bring the temperature down, and paracetamol and ibuprofen are not given at the same time.' },
        { topic:'Differential', text:'Measles (Koplik spots, coryza), scarlet fever (strep, sandpaper rash \u2014 antibiotic-responsive), other viral exanthems, toxin-mediated illness, drug reaction. Persistent fever ≥5 days + the cluster warrants paediatric assessment regardless (check MMR status for measles).' },
        { topic:'Hidden agenda', text:'The mother is worried and repeatedly told "just a virus"; she senses something is wrong. Take the prolonged fever seriously, recognise the pattern, and refer URGENTLY the same day — not more antipyretics. No NICE NG12 (updated April 2026) cancer pathway applies.' },
      ],
      ice:{ ideas:'(Mother) told "just a virus" but worried by 6 days of fever and the rash/eyes/lips.', concerns:'(Mother) persistence/severity; something serious being missed; her child\u2019s distress.', expectations:'Effective help. What is needed: recognition of Kawasaki, validation, URGENT same-day paediatric referral.' },
      cues:['Fever ≥5 days (NICE NG143: think of Kawasaki at 5 days; 4 features not required) + bilateral non-purulent conjunctivitis + cracked lips/strawberry tongue + rash + red/swollen hands + cervical node — Kawasaki.','Clinical diagnosis; beware incomplete/atypical (esp. infants); major complication is coronary artery aneurysm.','Urgent same-day paediatric referral (emergency if red traffic-light or high-risk sepsis features, NICE NG143/NG254) — IVIG + aspirin within ~10 days reduces coronary risk (no aspirin at home, BNFC); not "just a virus".']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises possible KAWASAKI — fever lasting 5 days or more (NICE NG143: be aware without needing 4 features) with bilateral non-purulent conjunctivitis, mucosal changes, cervical lymphadenopathy, polymorphous rash, extremity changes' },
      { dom:'tasks', text:'Knows it is CLINICAL and is alert to INCOMPLETE/ATYPICAL Kawasaki (esp. infants, higher coronary risk) \u2014 low referral threshold' },
      { dom:'tasks', text:'Understands the CORONARY ARTERY ANEURYSM complication and that early recognition/treatment reduces risk' },
      { dom:'tasks', text:'Makes an URGENT same-day paediatric referral/admission after an NG143 traffic-light and NG254 sepsis assessment (recognising the limits of video), knowing treatment is IVIG + aspirin within ~10 days, with echocardiography, and that aspirin is not given at home (BNFC)' },
      { dom:'tasks', text:'Considers/excludes mimics (measles, scarlet fever, viral exanthems, toxin-mediated illness) without delaying referral' },
      { dom:'rto',   text:'Takes the prolonged fever and the mother\u2019s concern seriously, validating that 6 days of fever warrants action not more reassurance' },
      { dom:'rto',   text:'Explains the need for urgent paediatric assessment clearly and calmly, checking understanding' },
      { dom:'gs',    text:'Arranges disposition: urgent same-day paediatric referral, deterioration advice en route, clear communication \u2014 recognising Kawasaki, not dismissing as "just a virus"' },
    ],
    worked:[
      { lbl:'Validate + take seriously', txt:'"You\u2019re right to push \u2014 six days of high fever that won\u2019t come down, with red eyes, cracked lips and that rash, is NOT something to keep calling a virus. There\u2019s a condition I\u2019m concerned about called Kawasaki disease."' },
      { lbl:'Examine', txt:'"Can you show me Ivy on the camera — her eyes, lips and tongue, the rash, her hands and feet, and her neck? … She has several features plus the long fever, which is exactly why I want her seen in person today — I can’t check her heart rate, circulation or how dry she is over video. Is she drinking and passing urine? Any breathing difficulty or very sleepy spells?"' },
      { lbl:'Why it matters', txt:'"We act fast because, untreated, this can affect the blood vessels around the heart \u2014 and treatment within the first ten days or so greatly reduces that risk. That\u2019s why it\u2019s urgent, not wait-and-see."' },
      { lbl:'Refer', txt:'"I’m referring Ivy to the children’s team to be seen today — they’ll confirm it, do a heart scan, and treat with immunoglobulin and aspirin if it’s Kawasaki. Please don’t give her aspirin yourself — it’s only used by the specialists."' },
      { lbl:'Address mother', txt:'"You did exactly the right thing trusting your instinct and bringing her \u2014 this isn\u2019t you overreacting."' },
      { lbl:'Safety-net', txt:'"Keep her comfortable and give plenty of fluids. Use Calpol or Nurofen only if she’s distressed, not both at the same time. If she becomes very drowsy, breathless or much worse, call 999. I\u2019ll make sure the team are expecting her."' },
    ],
    learning:'KAWASAKI DISEASE is a medium-vessel vasculitis of young children. NICE NG143 (2019): be aware of it in any child with FEVER lasting 5 DAYS or longer — 4 features are not required (the "≥4 of 5" rule is the AHA 2017 research definition, international); the features are bilateral NON-purulent conjunctivitis; mucosal changes (red/cracked lips, strawberry tongue); cervical lymphadenopathy; polymorphous rash; and extremity changes (palm/sole erythema-oedema, later peeling). It is a CLINICAL diagnosis with no single confirmatory test (inflammatory markers and later thrombocytosis support it), and clinicians must be alert to INCOMPLETE/ATYPICAL Kawasaki \u2014 especially in INFANTS, who present atypically and are at higher coronary risk \u2014 keeping a low referral threshold. The critical reason for early recognition is the risk of CORONARY ARTERY ANEURYSMS (a leading cause of acquired paediatric heart disease), substantially reduced by prompt treatment, so a prolonged-fever child with these features must not be dismissed as "just a virus". The action is an URGENT same-day paediatric referral/admission after an NG143 traffic-light and NICE NG254 sepsis assessment (on video, heart rate, capillary refill and hydration cannot be judged; any red or high-risk feature means emergency transfer): treatment is IV immunoglobulin plus aspirin, ideally within the first ~10 days, with echocardiography — primary care’s role is recognition and urgent referral. Aspirin is a specialist exception to the under-16 rule (BNFC): parents must not give it at home; antipyretics are for distress only and not given together (NG143). Consider and exclude mimics (measles, scarlet fever, other viral exanthems, toxin-mediated illness, drug reactions), but persistent high fever \u22655 days with the mucocutaneous cluster warrants paediatric assessment regardless. Validate the worried parent repeatedly told "it\u2019s just a virus", recognise the pattern, and refer urgently the same day. No NICE NG12 (updated April 2026) cancer pathway applies.',
    knowledge:{
      guideline:'[1] NICE NG143 (Fever in under 5s: assessment and initial management, 2019) · [2] NICE NG254 (Suspected sepsis in under 16s, 2025) · [3] BNFC, aspirin (under-16 contraindication; Kawasaki disease exception) · [4] Eleftheriou et al., Management of Kawasaki disease, Arch Dis Child 2014;99:74–83 (UK) · [5] American Heart Association scientific statement on Kawasaki disease (McCrindle et al., Circulation 2017, international) · think of it at 5 days of fever · coronary aneurysm risk · urgent paediatric referral, IVIG + aspirin',
      points:[
        { h:'Recognise Kawasaki', t:'NICE NG143 [1]: be aware at fever ≥5 days, without needing 4 features (the ≥4-of-5 rule is the AHA research definition [5], international). Features: bilateral non-purulent conjunctivitis; mucosal changes (cracked lips/strawberry tongue); cervical lymphadenopathy; polymorphous rash; extremity changes (palm/sole erythema-oedema, later peeling).' },
        { h:'Clinical & incomplete', t:'Clinical diagnosis (no single test; markers/thrombocytosis support). Beware incomplete/atypical Kawasaki, esp. infants (higher coronary risk, atypical presentation).' },
        { h:'Why it matters', t:'Major complication = coronary artery aneurysm (leading cause of acquired paediatric heart disease). Early recognition/treatment reduces risk \u2014 don\u2019t dismiss prolonged fever.' },
        { h:'Urgent treatment', t:'Urgent same-day paediatric referral/admission; NG143 traffic-light and NG254 [2] sepsis assessment (emergency transfer if red/high-risk). IVIG + aspirin, ideally within ~10 days, with echocardiography [4]. BNFC [3]: no aspirin at home. Primary care = recognise and refer.' },
        { h:'Differential', t:'Measles (Koplik spots/coryza), scarlet fever (strep, sandpaper rash, antibiotic-responsive), other viral exanthems, toxin-mediated illness, drug reaction.' },
        { h:'Validate the parent', t:'Take prolonged fever and parental concern seriously; 6 days of fever warrants action, not more reassurance/antipyretics (NG143: antipyretics for distress only; paracetamol and ibuprofen not given together).' },
        { h:'Never do', t:'Never dismiss \u22655-day fever with mucocutaneous features as "just a virus"; never delay referral; never wait for a confirmatory test; never miss incomplete Kawasaki in infants.' },
        { h:'Safety-net & disposition', t:'Urgent same-day paediatric referral; deterioration advice en route (drowsy/breathless/much worse \u2192 999); ensure the team expects the child.' }
      ]
    }
  };

  /* ===== 242. Carbon monoxide poisoning ===== */
  const c242 = {
    id:'carbon-monoxide', title:'"The whole family\u2019s had headaches, feel sick and dizzy at home \u2014 even the dog seems off \u2014 but we\u2019re fine when we\u2019re out"', type:'telephone', duration:12,
    meta:{ age:41, sex:'F', setting:'Telephone \u2014 non-specific symptoms affecting the household.', system:'Toxicology / Urgent care \u2014 carbon monoxide poisoning' },
    brief:'Mrs Gemma Toller, 41, rings about recurring headaches, nausea, dizziness and lethargy affecting herself, partner, children (and the pet) for two weeks \u2014 worse at HOME (mornings/heating on), better when OUT. Older property with a gas boiler/fire. Recognise the CARBON MONOXIDE pattern (flu-like symptoms in MULTIPLE household members and pets, home-related, improving away, with a combustion source) \u2014 commonly missed as a virus/migraine; advise IMMEDIATE action (everyone OUT into fresh air, turn off appliance, ventilate, call the National Gas Emergency Service on 0800 111 999 from outside, and 999 if anyone is drowsy, confused, has chest pain or collapses — UKHSA); arrange urgent same-day assessment (high-flow O2, carboxyhaemoglobin level — a normal level taken late or after oxygen does not exclude exposure, and smokers have higher baseline levels; pulse oximetry reads FALSELY normal; hyperbaric decisions follow NPIS/TOXBASE advice); and advise prevention (CO alarms, Gas Safe servicing; in rented homes landlords must arrange an annual gas safety check and fit CO alarms) and review for delayed neurological effects (memory, concentration, mood).',
    script:{
      opening:'"This sounds odd, doctor. For two weeks me, my partner and the two kids have all had headaches, felt sick and dizzy and tired \u2014 even the dog seems off and sleepy. We feel rough at home, especially mornings, but when we\u2019re out for the day we\u2019re fine. Is there a bug going round?"',
      facts:[
        { topic:'Recognise the CO pattern', text:'Non-specific FLU-LIKE symptoms (headache, nausea, dizziness, fatigue, sometimes confusion) affecting MULTIPLE PEOPLE and PETS in the SAME HOME, WORSE at home (mornings/heating on) and IMPROVING when AWAY, point to CARBON MONOXIDE POISONING \u2014 the "great mimic", commonly misdiagnosed as a virus/migraine/food poisoning. Household + pet + home-related + improves-away is the clue.' },
        { topic:'Ask about the source', text:'Ask about a CO source: gas BOILER/fire/cooker, solid-fuel stove, blocked/faulty FLUE, poor ventilation, unserviced/faulty appliance, and whether there is a CO ALARM. Older property + gas boiler/fire + morning/heating-related symptoms supports it.' },
        { topic:'Immediate emergency action', text:'Advise IMMEDIATE action: everyone (and pets) OUT into FRESH AIR now; turn OFF the appliance if safe; open windows to VENTILATE; don\u2019t stay inside; call the National GAS EMERGENCY Service on 0800 111 999 from outside and 999/urgent assessment (999 if anyone is drowsy, confused, has chest pain or collapses — UKHSA Carbon monoxide: general information). CO can be rapidly fatal, especially overnight.' },
        { topic:'Assessment & treatment', text:'Arrange urgent same-day assessment where carboxyhaemoglobin can be measured (usually the emergency department): treatment is high-flow 100% OXYGEN (speeds CO elimination); a raised CARBOXYHAEMOGLOBIN level supports exposure, but levels fall once away from the source and faster on oxygen, so a normal level taken late does not exclude it, and smokers have higher baseline levels (UKHSA toxicological overview); specialist and HYPERBARIC oxygen decisions follow National Poisons Information Service (TOXBASE) advice, particularly with loss of consciousness, neurological signs, cardiac features or pregnancy. Pulse OXIMETRY reads FALSELY NORMAL (can\u2019t detect carboxyhaemoglobin) \u2014 don\u2019t be falsely reassured.' },
        { topic:'Prevention', text:'Advise CO ALARMS, servicing of fuel-burning appliances/flues by a registered (Gas Safe) engineer, adequate ventilation, and no unsuitable appliances (BBQs/generators) indoors. If the home is rented, the landlord must arrange an annual gas safety check (Gas Safety (Installation and Use) Regulations 1998) and fit CO alarms in rooms with fixed combustion appliances other than gas cookers (Smoke and Carbon Monoxide Alarm (England) Regulations 2015, amended 2022). No one returns or uses the appliance until the gas engineer has made it safe. Delayed neurological effects (memory, concentration, mood) can follow significant exposure — arrange review if they appear.' },
        { topic:'Hidden agenda', text:'She thinks it\u2019s "a bug" and hasn\u2019t connected the home/pattern. Recognise the pattern as possible CO poisoning, give immediate emergency advice, arrange assessment (not reassured by normal oximetry), and advise prevention \u2014 not a viral label.' },
      ],
      ice:{ ideas:'A bug/virus going round the family.', concerns:'The whole family (and pet) unwell; not understanding why it\u2019s home-related.', expectations:'Reassurance for a "bug". What is needed: recognition of CO poisoning, IMMEDIATE emergency advice (out + gas emergency/999), urgent assessment, prevention.' },
      cues:['Headache/nausea/dizziness/fatigue in MULTIPLE household members (and the PET), worse at home/mornings, better away \u2014 carbon monoxide poisoning.','Ask about gas boiler/fire/cooker, blocked flue, CO alarm \u2014 the great mimic, commonly missed as a virus.','EMERGENCY: everyone OUT, turn off appliance, ventilate, call gas emergency (0800 111 999)/999; high-flow O2; pulse oximetry reads FALSELY normal; a normal COHb taken late does not exclude exposure.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the CARBON MONOXIDE pattern \u2014 flu-like symptoms in MULTIPLE household members (and pets), worse at home (mornings/heating), improving away \u2014 not labelling it a virus' },
      { dom:'tasks', text:'Asks about the COMBUSTION SOURCE (gas boiler/fire/cooker, solid-fuel stove, blocked/faulty flue, ventilation) and whether a CO alarm is present' },
      { dom:'tasks', text:'Gives IMMEDIATE emergency advice — everyone (and pets) OUT into fresh air, turn off the appliance, ventilate, call the National Gas Emergency Service (0800 111 999)/999 — without delay' },
      { dom:'tasks', text:'Arranges urgent MEDICAL assessment, knowing treatment is high-flow O2, carboxyhaemoglobin supports exposure (but a normal level taken late or after oxygen does not exclude it; smokers’ baseline is higher), and hyperbaric decisions follow NPIS/TOXBASE advice' },
      { dom:'tasks', text:'Knows pulse OXIMETRY reads FALSELY NORMAL in CO poisoning and is not falsely reassured by normal sats' },
      { dom:'tasks', text:'Advises PREVENTION — CO alarms, appliance/flue servicing by a registered engineer, ventilation, no unsuitable appliances indoors, landlord duties if rented — and review for delayed neurological effects' },
      { dom:'rto',   text:'Connects the pattern for the patient and conveys urgency clearly without panic, ensuring she acts immediately' },
      { dom:'gs',    text:'Arranges disposition: immediate evacuation + gas emergency/999, urgent assessment for those affected, prevention advice, escalation if anyone drowsy/unconscious' },
    ],
    worked:[
      { lbl:'Recognise the pattern', txt:'"This doesn\u2019t sound like a bug. All of you \u2014 and the dog \u2014 feeling ill at home, worse mornings with the heating on, and fine when out, is the classic pattern of carbon monoxide poisoning from a faulty appliance. This is urgent."' },
      { lbl:'Immediate action', txt:'"Act now: get everyone and the dog OUT into fresh air. If safe, turn off the boiler/fire and open windows on your way out. Don\u2019t stay inside."' },
      { lbl:'Call the right people', txt:'"From outside, call the gas emergency line on 0800 111 999 — they’ll check the property urgently — and if anyone is drowsy, confused or very unwell, call 999. CO can be dangerous quickly, especially overnight."' },
      { lbl:'Get checked', txt:'"You all need assessment today — the treatment is high-flow oxygen, and a blood test can show it, although the level falls once you’re out in fresh air, so a normal result later doesn’t rule it out. Importantly, the finger oxygen monitors read normal even when CO is high, so don\u2019t be falsely reassured by that."' },
      { lbl:'Prevention', txt:'"Once safe, get a CO alarm fitted and have the boiler, gas appliances and flue checked by a registered Gas Safe engineer before using them again. If you rent, your landlord has to arrange the gas safety check and alarms. And let me know if anyone has memory, concentration or mood problems in the coming weeks."' },
      { lbl:'Safety-net', txt:'"So: out into fresh air now, gas emergency line, 999 if anyone\u2019s drowsy or faints. Don\u2019t go back until it\u2019s declared safe. Ring me once you\u2019re all out and I\u2019ll help arrange check-ups."' },
    ],
    learning:'CARBON MONOXIDE (CO) POISONING is recognised by non-specific FLU-LIKE symptoms \u2014 headache, nausea, dizziness, fatigue, sometimes confusion \u2014 affecting MULTIPLE PEOPLE and PETS in the SAME HOME, WORSE at home (mornings/heating on) and IMPROVING when AWAY; CO is the "great mimic", commonly misdiagnosed as a viral illness, migraine or food poisoning, so the household + pet + home-related + improves-away pattern is the crucial clue. Ask about the combustion source (gas boiler/fire/cooker, solid-fuel stove, blocked/faulty flue, poor ventilation, unserviced appliance) and a CO alarm. The immediate action is an EMERGENCY: get everyone (and pets) OUT into fresh air, turn off the appliance if safe, ventilate, don\u2019t stay inside, and call the National Gas Emergency Service (0800 111 999) and 999/urgent assessment \u2014 CO can rapidly cause loss of consciousness and death, particularly overnight. Arrange urgent assessment: treatment is high-flow 100% OXYGEN (speeds CO elimination), a raised carboxyhaemoglobin level supports exposure (but it falls once away from the source and faster on oxygen, so a normal level taken late does not exclude it, and smokers have higher baseline levels), and hyperbaric oxygen decisions for severe cases (neuro signs, LOC, pregnancy, cardiac involvement) follow NPIS/TOXBASE advice. Critically, pulse OXIMETRY reads FALSELY NORMAL because it cannot distinguish carboxyhaemoglobin \u2014 a normal sats reading is misleadingly reassuring. Advise prevention: CO alarms, servicing by a registered (Gas Safe) engineer, ventilation, and no unsuitable appliances (BBQs/generators) indoors; landlords must arrange annual gas safety checks and CO alarms; and review for delayed neurological effects. The skill is recognising the pattern, immediate emergency advice, assessment without false reassurance from oximetry, and prevention — not labelling it viral. No NICE NG12 (updated April 2026) cancer pathway applies.',
    knowledge:{
      guideline:'[1] UKHSA Carbon monoxide: general information (GOV.UK) · [2] UKHSA Carbon monoxide: toxicological overview (GOV.UK) · [3] National Gas Emergency Service (0800 111 999) and Gas Safe Register · [4] National Poisons Information Service (TOXBASE) · [5] Smoke and Carbon Monoxide Alarm (England) Regulations 2015, amended 2022; Gas Safety (Installation and Use) Regulations 1998 · pattern (household/pet, home-related, improves away) · emergency action + high-flow O2 · falsely-normal oximetry · prevention',
      points:[
        { h:'Recognise the pattern', t:'Flu-like symptoms (headache, nausea, dizziness, fatigue, confusion) in multiple household members and pets, worse at home (mornings/heating), better away = CO poisoning. The "great mimic".' },
        { h:'Ask about the source', t:'Gas boiler/fire/cooker, solid-fuel stove, blocked/faulty flue, poor ventilation, unserviced appliance; presence of a CO alarm.' },
        { h:'Emergency action', t:'Everyone (and pets) OUT into fresh air now; turn off the appliance if safe; ventilate; call the gas emergency service (0800 111 999 [3]) from outside and 999/urgent assessment [1]. CO can be rapidly fatal, esp. overnight.' },
        { h:'Treatment', t:'High-flow 100% oxygen speeds CO elimination [2]; carboxyhaemoglobin supports exposure, but a normal level taken late or after oxygen does not exclude it and smokers’ baseline is higher [2]; hyperbaric decisions (neuro signs, LOC, pregnancy, cardiac) follow NPIS/TOXBASE [4].' },
        { h:'Falsely-normal oximetry', t:'Pulse oximetry reads falsely normal in CO poisoning (can\u2019t detect carboxyhaemoglobin). Don\u2019t be falsely reassured by normal sats.' },
        { h:'Prevention', t:'CO alarms, appliance/flue servicing by a registered (Gas Safe) engineer, ventilation, no unsuitable appliances (BBQs/generators) indoors; landlord duties — annual gas safety check and CO alarms [5]; review for delayed neurological effects.' },
        { h:'Never do', t:'Never label household/home-related flu-like symptoms as "just a virus" without considering CO; never be reassured by normal oximetry; never delay evacuation.' },
        { h:'Safety-net & disposition', t:'Immediate evacuation + gas emergency/999; urgent assessment for all affected; 999 if drowsy/unconscious; don\u2019t re-enter until declared safe; prevention advice.' }
      ]
    }
  };

  /* ===== 243. Otitis externa ===== */
  const c243 = {
    id:'otitis-externa', title:'"My ear\u2019s really painful and itchy with some discharge \u2014 worse when I touch it. I\u2019ve been using cotton buds"', type:'video', duration:12,
    meta:{ age:45, sex:'M', setting:'Video consultation, with otoscopy arranged face to face — a painful, discharging, itchy ear.', system:'ENT \u2014 otitis externa & the malignant-OE red flag' },
    brief:'Mr Owen Pryce, 45, has a few days of a painful, itchy, discharging ear with pain on moving the tragus/pinna and muffled hearing; he uses cotton buds and swims; on face-to-face otoscopy the canal is red, swollen and debris-filled. Recognise OTITIS EXTERNA (canal inflammation \u2014 tragal/pinna pain, erythema/oedema/debris, discharge, itch; provoked by water/swimming, cotton-bud trauma, eczema), distinguish from otitis media, manage per the UKHSA antimicrobial summary (2025): analgesia and local heat, then topical acetic acid (over 12s) or a topical antibiotic ± steroid (similar cure rates at 7 days; choice per BNF), with aural toilet (not systemic antibiotics) + keep dry + stop cotton buds; avoid aminoglycoside drops if the drum is perforated or cannot be seen unless the ENT UK criteria are met; oral flucloxacillin and referral only if cellulitis spreads beyond the canal or there are systemic signs; advise prevention, and recognise MALIGNANT (NECROTISING) OE in elderly diabetic/immunocompromised (severe night pain out of proportion, granulation, facial palsy — same-day ENT, UK consensus 2023). Not routine oral antibiotics. No NICE NG12 (updated April 2026) cancer link.',
    script:{
      opening:'"My right ear\u2019s been sore and itchy for a few days, with some discharge. It hurts if I touch it or pull on it, and feels blocked, muffled. I\u2019ve been poking it with cotton buds to clean it, and I was swimming last week. Can you sort it?"',
      facts:[
        { topic:'Recognise otitis externa', text:'OTITIS EXTERNA (external canal inflammation): ear PAIN, ITCH, DISCHARGE, PAIN ON MOVING the tragus/pinna, and a blocked/muffled sensation; canal red, swollen, debris-filled. Provoked by WATER/SWIMMING ("swimmer\u2019s ear"), TRAUMA (cotton buds), and skin conditions (eczema/seborrhoeic dermatitis/psoriasis). His swimming + cotton-bud use are classic.' },
        { topic:'Distinguish & differential', text:'Distinguish from otitis MEDIA (deeper pain, systemic/febrile in children, bulging/red drum, no tragal tenderness; discharge if perforated). Consider foreign body, furuncle (canal boil), and FUNGAL OE/otomycosis (itch-predominant, fungal debris \u2014 antifungal drops).' },
        { topic:'Manage uncomplicated OE', text:'UKHSA Summary of antimicrobial prescribing guidance (2025): adequate ANALGESIA and local heat first; then topical ACETIC ACID (over 12s) or a TOPICAL antibiotic +/- corticosteroid DROPS/spray, which have similar cure rates at 7 days (Cochrane 2010: acetic acid comparable at 1 week but less effective when treatment is longer); choice and dose per BNF, usually for 7 days — not systemic antibiotics in uncomplicated OE. AURAL TOILET (dry mopping, or microsuction if blocked) improves drop delivery; keep the ear DRY (no swimming during treatment); ear WICK (ENT or trained clinician) if canal very swollen. If the DRUM is perforated or cannot be seen, avoid AMINOGLYCOSIDE drops unless the ENT UK criteria are met (obvious infection, no more than 2 weeks, risks explained, ideally baseline audiometry). If cellulitis spreads beyond the canal or there are systemic signs, give oral FLUCLOXACILLIN (dose per BNF) and refer to exclude necrotising OE (UKHSA).' },
        { topic:'Advice & technique', text:'STOP cotton buds (trauma, push debris in), keep ears dry, treat underlying skin conditions, use drops correctly (ear up, stay still a few minutes). Address recurrent causes (swimming/dermatitis).' },
        { topic:'Red flag \u2014 malignant (necrotising) OE', text:'In a high-risk patient (elderly DIABETIC or immunocompromised), consider MALIGNANT (NECROTISING) OE: SEVERE persistent pain (out of proportion, worse at night), copious discharge, GRANULATION tissue in the canal, and/or cranial-nerve (FACIAL) palsy \u2014 a skull-base OSTEOMYELITIS needing same-day ENT/hospital referral (UK consensus definitions, Hodgson et al. 2023), imaging and IV antibiotics. Not routine OE.' },
        { topic:'Hidden agenda', text:'He wants it "sorted" and may not realise the cotton-bud habit perpetuates it. The skill is correct topical management, advice/technique, and screening the malignant-OE red flags in high-risk patients. Otoscopy needs a face-to-face appointment. No NICE NG12 (updated April 2026) cancer pathway applies.' },
      ],
      ice:{ ideas:'A simple infected ear (possibly expecting oral antibiotics).', concerns:'Pain, discharge, blocked hearing; wanting quick relief.', expectations:'A quick fix/antibiotics. What he needs: recognition of OE, topical (not systemic) treatment + aural toilet, keep-dry/stop-cotton-buds advice, malignant-OE awareness.' },
      cues:['Ear pain + itch + discharge + pain moving the tragus/pinna + red swollen debris-filled canal, with swimming/cotton-bud use \u2014 otitis externa.','Manage per UKHSA 2025: analgesia and heat, then acetic acid or antibiotic ± steroid drops (7 days; no aminoglycoside if drum perforated/unseen unless ENT UK criteria met) + aural toilet + keep dry + STOP cotton buds — not systemic antibiotics in uncomplicated OE (flucloxacillin + referral only for spreading cellulitis).','RED FLAG \u2014 malignant (necrotising) OE in elderly diabetic/immunocompromised: severe night pain out of proportion, granulation, facial palsy \u2192 urgent ENT.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises OTITIS EXTERNA \u2014 ear pain/itch/discharge, PAIN ON MOVING the tragus/pinna, a red/swollen/debris-filled canal, provoked by water/swimming and cotton-bud trauma' },
      { dom:'tasks', text:'Distinguishes it from otitis MEDIA and considers foreign body, furuncle and fungal OE (otomycosis)' },
      { dom:'tasks', text:'Manages uncomplicated OE correctly (UKHSA 2025) — analgesia and heat, aural toilet, topical acetic acid or antibiotic +/- steroid drops/spray (not systemic; aminoglycoside caution if the drum is perforated or unseen), keep DRY, ear wick if very swollen — reserving oral flucloxacillin with referral for spreading cellulitis/systemic involvement' },
      { dom:'tasks', text:'Advises PREVENTION/technique \u2014 STOP cotton buds, keep ears dry, treat skin conditions, correct drop technique \u2014 and addresses recurrent causes' },
      { dom:'tasks', text:'Screens MALIGNANT (NECROTISING) OE red flags in high-risk patients (elderly diabetic/immunocompromised): severe pain out of proportion/worse at night, granulation, facial palsy \u2014 and would refer URGENTLY to ENT' },
      { dom:'rto',   text:'Explains the diagnosis and why topical (not oral) treatment is appropriate, engaging him in keep-dry/stop-cotton-buds advice without dismissiveness' },
      { dom:'rto',   text:'Checks understanding of drop technique and prevention, and responds to his wish for quick relief realistically' },
      { dom:'gs',    text:'Safety-nets and follows up: review if not improving/spreading, malignant-OE red flags warranting urgent ENT (esp. diabetics), prevention to avoid recurrence' },
    ],
    worked:[
      { lbl:'Diagnose + explain', txt:'(After a face-to-face look in the ear.) "You’ve got otitis externa — inflammation of the ear canal. The swimming and, honestly, the cotton buds set it off: the buds scratch the canal and push stuff in, which keeps it going. It usually settles well with the right drops."' },
      { lbl:'Treat correctly', txt:'"First, painkillers and a warm compress for the pain. Then ear DROPS — either an acidic drop or an antibiotic with a steroid, which work about as well as each other at a week — rather than antibiotic tablets, which aren’t needed. Use them for about seven days. I’ll check whether your eardrum is intact, as that decides which drops are safe. I’ll clean the ear so the drops get in. If the canal\u2019s too swollen, we sometimes place a little wick."' },
      { lbl:'Technique + keep dry', txt:'"Use the drops lying with the bad ear up and stay still a few minutes. Crucially: stop the cotton buds completely, and keep the ear dry \u2014 no swimming while it settles, keep water out in the shower."' },
      { lbl:'Prevention', txt:'"Once better, keeping ears dry and leaving them alone prevents most recurrences. If you\u2019re a keen swimmer we can talk about keeping water out."' },
      { lbl:'Red-flag awareness', txt:'(If high-risk/severe:) "Because severe ear infections can occasionally become serious \u2014 especially with diabetes \u2014 severe pain worse at night and out of proportion, or any facial weakness, would need urgent ENT. That doesn\u2019t fit you now, but worth knowing."' },
      { lbl:'Safety-net', txt:'"Come back if it\u2019s not improving in a week, the pain gets much worse, it spreads to the skin around the ear, or you feel feverish. Otherwise the drops and keeping it dry should sort it."' },
    ],
    learning:'OTITIS EXTERNA (inflammation of the external ear CANAL) presents with ear PAIN, ITCH and DISCHARGE, PAIN ON MOVING the tragus/pinna, and a blocked/muffled-hearing sensation, with a red, swollen, debris-filled canal; it is provoked by WATER/SWIMMING ("swimmer\u2019s ear"), local TRAUMA (cotton buds), and skin conditions (eczema/seborrhoeic dermatitis/psoriasis). Distinguish it from otitis MEDIA (deeper pain, systemic/febrile especially in children, a bulging/red drum, no tragal tenderness; discharge if the drum perforates), and consider a foreign body, a furuncle, and FUNGAL OE/otomycosis (itch-predominant, fungal debris, may need antifungal drops). Manage uncomplicated OE: adequate ANALGESIA, AURAL TOILET (cleaning/microsuction improves drop delivery), analgesia and local heat first, then topical ACETIC ACID (over 12s) or a TOPICAL antibiotic +/- corticosteroid (similar cure rates at 7 days — UKHSA Summary of antimicrobial prescribing guidance 2025; choice per BNF) rather than systemic antibiotics, avoiding aminoglycoside drops if the drum is perforated or cannot be seen unless the ENT UK criteria are met, keeping the ear DRY (avoid water/swimming during treatment) and using an ear WICK (ENT) if the canal is very swollen; reserve oral flucloxacillin, with referral to exclude necrotising OE, for cellulitis spreading beyond the canal or systemic signs. Advise prevention and technique \u2014 STOP cotton buds (they cause trauma and push debris in), keep ears dry, treat underlying skin conditions, and use drops correctly. The critical RED FLAG is MALIGNANT (NECROTISING) OTITIS EXTERNA in a high-risk patient (elderly DIABETIC or immunocompromised): SEVERE, persistent pain (out of proportion, worse at night), copious discharge, GRANULATION tissue in the canal, and/or cranial-nerve involvement (e.g. facial palsy) \u2014 a skull-base osteomyelitis that is serious/potentially life-threatening and needs same-day ENT/hospital referral (UK consensus 2023), imaging and IV antibiotics, not routine OE treatment. The skill is correct topical management, advice/technique, and screening the malignant-OE red flags; otoscopy needs a face-to-face appointment. No NICE NG12 (updated April 2026) cancer pathway applies.',
    knowledge:{
      guideline:'[1] UKHSA Summary of antimicrobial prescribing guidance: managing common infections (2025), otitis externa · [2] BNF, ear preparations (choice and doses) · [3] ENT UK consensus on topical aminoglycosides with a perforated drum (Phillips et al., Clin Otolaryngol 2007;32:330–336) · [4] UK consensus definitions of necrotising otitis externa (Hodgson et al., BMJ Open 2023;13:e061349) · [5] Kaushik et al., Cochrane 2010 CD004740 (interventions for acute otitis externa) · [6] AAO-HNSF clinical practice guideline, acute otitis externa (Rosenfeld et al., 2014, international) · topical drops + aural toilet · keep dry / stop cotton buds · malignant (necrotising) OE red flag',
      points:[
        { h:'Recognise OE', t:'Ear pain, itch, discharge, pain on moving the tragus/pinna, red/swollen debris-filled canal. Provoked by water/swimming, cotton-bud trauma, eczema/dermatitis.' },
        { h:'Distinguish & differential', t:'Otitis media (deeper pain, systemic/febrile in children, bulging drum, no tragal tenderness). Consider foreign body, furuncle, fungal OE/otomycosis (itch-predominant, fungal debris).' },
        { h:'Manage uncomplicated OE', t:'UKHSA [1]: analgesia and local heat; then topical acetic acid (over 12s) or antibiotic +/- steroid drops/spray (similar cure at 7 days [5]; choice per BNF [2]); not systemic in uncomplicated [1][6]. Aural toilet, keep dry, ear wick if very swollen. Drum perforated or unseen: avoid aminoglycosides unless ENT UK criteria met [3].' },
        { h:'Advice & technique', t:'Stop cotton buds, keep ears dry, treat underlying skin conditions, correct drop technique (ear up, stay still); address recurrent causes.' },
        { h:'Malignant (necrotising) OE', t:'Elderly diabetic/immunocompromised + severe persistent pain (out of proportion, worse at night), granulation tissue, facial palsy = skull-base osteomyelitis → same-day ENT/hospital [4], imaging, IV antibiotics.' },
        { h:'When to escalate', t:'Spreading cellulitis beyond the canal or systemic signs → oral flucloxacillin (dose per BNF) and referral to exclude necrotising OE [1]; not improving or malignant-OE features → ENT referral as appropriate.' },
        { h:'Never do', t:'Never give routine oral antibiotics for uncomplicated OE; never miss the cotton-bud/keep-dry advice; never overlook malignant OE in diabetics/immunocompromised.' },
        { h:'Safety-net & follow-up', t:'Review if not improving in ~1 week, worsening pain, spreading, or fever; urgent ENT for malignant-OE features; prevention to avoid recurrence.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c240, c241, c242, c243);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'sjs-ten': {
      ceg: ['Urgent & unscheduled care', 'Prescribing & pharmacology'],
      stem: {
        name: 'Nadia Karim', age: '34 years \u00b7 female',
        pmh: ['\u26a0 New drug 1\u20132 weeks ago (e.g. lamotrigine/allopurinol/sulfonamide/NSAID)', '\u26a0 Spreading painful rash + dusky/target lesions + blisters + skin detachment', '\u26a0 Mucosal erosions (mouth/eyes/genitals); fever, unwell'],
        meds: ['New medication (suspected culprit)'],
        allergy: 'NKDA (until now)',
        recent: '"New tablet, now a spreading rash, blisters, and my mouth and eyes are raw."',
        reason: 'Video/urgent — severe rash after a new drug (emergency admission for face-to-face assessment).'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise SJS/TEN', d:'Culprit drug + painful rash + dusky/target + blisters/detachment + mucosal erosions + systemic illness.' },
        { t:'2\u20134',  h:'Stop the culprit', d:'Antiepileptics (seizure cover in hospital)/allopurinol/sulfonamides/NSAIDs — stop now; document severe allergy; Yellow Card.' },
        { t:'4\u20137',  h:'Emergency admission', d:'Dermatology/burns/ITU + early ophthalmology; sepsis risk (NICE NG253); never community-managed.' },
        { t:'7\u20139',  h:'Differential', d:'Erythema multiforme, staph scalded skin, DRESS \u2014 but mucosa+detachment+systemic = SJS/TEN.' },
        { t:'9\u201312', h:'Communicate + safety-net', d:'Convey urgency calmly; bring packet; 999 for breathing/swallowing difficulty en route.' }
      ],
      wordPics: {
        fail: 'Treats as a minor drug rash with an antihistamine; continues the culprit; no admission; misses the mucosal involvement.',
        pass: 'Recognises SJS/TEN, stops the drug and arranges emergency admission with allergy documentation and a Yellow Card report.',
        exc:  'Rapidly recognises SJS/TEN (mucosa + detachment + culprit drug), stops the drug, arranges immediate admission (dermatology/burns/ITU + ophthalmology), documents a severe allergy, and communicates the urgency calmly.'
      },
      avoid: [
        { dont:'"Looks like a drug rash \u2014 stop the tablet, take an antihistamine and see how it goes."', instead:'"With blistering, skin coming away and your mouth/eyes raw, this is Stevens-Johnson syndrome \u2014 an emergency needing hospital now."', why:'Treating SJS/TEN as a minor rash misses a life-threatening emergency.' },
        { dont:'(Not documenting) failing to record the allergy.', instead:'"I\u2019ll record this drug as a serious allergy so you\u2019re never given it again."', why:'Re-exposure can be fatal; documentation is essential.' },
        { dont:'(Delaying) "Let\u2019s review in a couple of days."', instead:'"This needs immediate admission \u2014 I\u2019m arranging transfer now."', why:'SJS/TEN has significant mortality; delay is dangerous.' }
      ]
    },

    'kawasaki-disease': {
      ceg: ['Children & young people', 'Urgent & unscheduled care'],
      stem: {
        name: 'Ivy Calderwood (mother present)', age: '3 years \u00b7 female',
        pmh: ['\u26a0 Fever \u22656 days despite antipyretics', 'Polymorphous rash, bilateral non-purulent conjunctivitis, cracked lips/strawberry tongue, red/swollen hands, cervical node', 'Irritable, miserable'],
        meds: ['Paracetamol/ibuprofen (minimal effect)'],
        allergy: 'NKDA',
        recent: '"High fever for six days, a rash, red eyes and cracked lips \u2014 calpol isn\u2019t touching it."',
        reason: 'Video — a child with prolonged fever (same-day face-to-face paediatric assessment needed).'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate + recognise', d:'Fever \u22655 days + conjunctivitis + lips/tongue + rash + hands + node = Kawasaki; not "just a virus".' },
        { t:'2\u20134',  h:'Clinical + incomplete', d:'Clinical diagnosis; beware incomplete/atypical (esp. infants); low referral threshold.' },
        { t:'4\u20136',  h:'Why it matters', d:'Coronary artery aneurysm risk, reduced by prompt treatment.' },
        { t:'6\u20139',  h:'Urgent referral', d:'Same-day paediatrics (emergency if red/high-risk sepsis features, NG143/NG254); IVIG + aspirin within ~10 days; echocardiography; no aspirin at home.' },
        { t:'9\u201312', h:'Differential + safety-net', d:'Measles/scarlet fever/exanthems; deterioration advice en route; team expecting child.' }
      ],
      wordPics: {
        fail: 'Dismisses prolonged fever as "just a virus", offers more antipyretics, no recognition or referral \u2014 risks missed coronary disease.',
        pass: 'Recognises Kawasaki and refers urgently the same day with validation of the parent.',
        exc:  'Recognises Kawasaki (fever ≥5 days with features — NICE NG143 does not require 4), is alert to incomplete/atypical disease, explains the coronary-aneurysm rationale, refers urgently the same day for IVIG + aspirin/echo, excludes mimics, and validates the worried parent.'
      },
      avoid: [
        { dont:'"Six days of fever \u2014 it\u2019s a stubborn virus, keep up the Calpol."', instead:'"Fever this long with red eyes, cracked lips and a rash makes me think of Kawasaki disease \u2014 she needs to be seen by paediatrics today."', why:'Dismissing prolonged fever with the cluster risks missing Kawasaki and coronary complications.' },
        { dont:'(Waiting) "Let\u2019s give it another couple of days."', instead:'"Treatment works best within about ten days \u2014 this is urgent, today."', why:'Delay reduces the window for IVIG to protect the coronaries.' },
        { dont:'(Dismissing the parent) "Try not to worry, fevers are common."', instead:'"You were right to trust your instinct \u2014 this isn\u2019t overreacting."', why:'Validating parental concern is part of safe, patient-centred care.' }
      ]
    },

    'carbon-monoxide': {
      ceg: ['Urgent & unscheduled care', 'Population & planetary health'],
      stem: {
        name: 'Gemma Toller', age: '41 years \u00b7 female',
        pmh: ['\u26a0 Headache/nausea/dizziness/fatigue in whole family (and the pet) ~2 weeks', '\u26a0 Worse at home (mornings/heating on), better when out', 'Older property; gas boiler/fire; ?CO alarm'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Whole family\u2019s had headaches, feel sick and dizzy at home \u2014 even the dog \u2014 but we\u2019re fine when out."',
        reason: 'Telephone \u2014 non-specific symptoms affecting the household.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise the pattern', d:'Flu-like symptoms in whole household + pet, worse at home/mornings, better away = CO poisoning.' },
        { t:'2\u20134',  h:'Ask the source', d:'Gas boiler/fire/cooker, blocked flue, ventilation, CO alarm.' },
        { t:'4\u20137',  h:'Emergency action', d:'Everyone (+ pets) OUT into fresh air, turn off appliance, ventilate, gas emergency (0800 111 999)/999.' },
        { t:'7\u20139',  h:'Assessment', d:'High-flow O2; carboxyhaemoglobin level (normal late level doesn’t exclude); pulse oximetry FALSELY normal — don’t be reassured.' },
        { t:'9\u201312', h:'Prevention + safety-net', d:'CO alarms, Gas Safe servicing, ventilation; 999 if anyone drowsy/unconscious; don\u2019t re-enter until safe.' }
      ],
      wordPics: {
        fail: 'Labels it a viral bug; misses the household/pet/home-related pattern; no emergency advice; reassured by normal oximetry.',
        pass: 'Recognises the CO pattern, gives immediate evacuation/gas-emergency advice and arranges assessment.',
        exc:  'Recognises CO poisoning from the pattern, gives immediate emergency advice (out + gas emergency/999), arranges urgent assessment (high-flow O2, not reassured by normal oximetry), and advises prevention (alarms/servicing).'
      },
      avoid: [
        { dont:'"Sounds like a bug going round the family \u2014 rest and fluids."', instead:'"Whole household and the pet, worse at home, better away \u2014 that\u2019s carbon monoxide poisoning; everyone out into fresh air now and call the gas emergency line."', why:'Labelling it viral misses a rapidly dangerous, potentially fatal exposure.' },
        { dont:'(Reassured by sats) "Your oxygen reading is normal, so you\u2019re fine."', instead:'"Finger oxygen monitors read normal even with high CO \u2014 don\u2019t rely on that; you still need assessment."', why:'Pulse oximetry is falsely normal in CO poisoning.' },
        { dont:'(No evacuation) advising a routine appointment.', instead:'"Get everyone out now and call the gas emergency service \u2014 this can\u2019t wait."', why:'CO can cause loss of consciousness/death, especially overnight \u2014 evacuation is immediate.' }
      ]
    },

    'otitis-externa': {
      ceg: ['New & undifferentiated presentations', 'Prescribing & pharmacology'],
      stem: {
        name: 'Owen Pryce', age: '45 years \u00b7 male',
        pmh: ['Painful, itchy, discharging R ear; pain on moving tragus/pinna; muffled hearing', 'Uses cotton buds; swims; canal red/swollen/debris-filled', 'Not diabetic/immunocompromised'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Painful itchy ear with discharge \u2014 worse when I touch it. I\u2019ve been using cotton buds."',
        reason: 'Video consultation (otoscopy arranged face to face) — a painful, discharging ear.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise OE', d:'Pain on moving tragus/pinna + red swollen debris-filled canal + swimming/cotton buds = otitis externa.' },
        { t:'2\u20134',  h:'Distinguish', d:'Vs otitis media; consider foreign body, furuncle, fungal OE.' },
        { t:'4\u20137',  h:'Manage', d:'Analgesia + heat, then acetic acid or antibiotic/steroid drops for 7 days (not systemic; aminoglycoside caution) + aural toilet + keep dry; ear wick if swollen.' },
        { t:'7\u20139',  h:'Advice/technique', d:'Stop cotton buds, keep dry, treat skin conditions, correct drop technique.' },
        { t:'9\u201312', h:'Red flag + safety-net', d:'Malignant OE (elderly diabetic/immunocompromised: severe night pain, granulation, facial palsy) \u2192 urgent ENT; review if not improving.' }
      ],
      wordPics: {
        fail: 'Prescribes oral antibiotics for uncomplicated OE; no aural toilet or keep-dry/cotton-bud advice; never considers malignant OE in high-risk patients.',
        pass: 'Recognises OE, treats with topical drops + aural toilet + keep-dry advice, and knows the malignant-OE red flag.',
        exc:  'Recognises OE and distinguishes it from otitis media/fungal OE, manages with topical drops + aural toilet + keep-dry/stop-cotton-buds advice (not systemic antibiotics), and screens malignant-OE red flags in high-risk patients with safety-netting.'
      },
      avoid: [
        { dont:'"I\u2019ll give you a course of antibiotic tablets for the ear infection."', instead:'"This is otitis externa \u2014 ear drops with aural cleaning work better than tablets, which aren\u2019t needed here."', why:'Systemic antibiotics are inappropriate first-line for uncomplicated otitis externa.' },
        { dont:'(No technique advice) treating without addressing cotton buds.', instead:'"Stop the cotton buds and keep the ear dry \u2014 they\u2019re a big part of why it keeps flaring."', why:'Cotton-bud trauma and moisture perpetuate OE; advice prevents recurrence.' },
        { dont:'(Ignoring malignant OE) treating a severe-pain diabetic as routine.', instead:'"Severe night pain out of proportion or facial weakness in someone with diabetes needs urgent ENT \u2014 it can be a deeper bone infection."', why:'Malignant (necrotising) OE is a serious skull-base osteomyelitis in high-risk patients.' }
      ]
    }

  });

})();
