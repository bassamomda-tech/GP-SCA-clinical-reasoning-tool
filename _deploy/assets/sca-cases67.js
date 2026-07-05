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
    meta:{ age:34, sex:'F', setting:'Video/urgent \u2014 severe rash after a new drug.', system:'Dermatology / Urgent care \u2014 Stevens-Johnson syndrome / TEN' },
    brief:'Mrs Nadia Karim, 34, started a new drug 1\u20132 weeks ago (lamotrigine/allopurinol/sulfonamide/NSAID) and has a rapidly spreading painful rash with dusky/target macules, blisters and skin sloughing, plus painful erosions of mouth, eyes and genitals, fever and malaise. Recognise STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS \u2014 a life-threatening severe cutaneous adverse drug reaction \u2014 from a culprit drug + painful (not itchy) skin + mucosal involvement (\u22652 sites) + skin detachment (Nikolsky+) + systemic illness; STOP the culprit drug immediately; arrange IMMEDIATE admission (dermatology/burns/ITU + ophthalmology); know the differential (erythema multiforme, SSSS, DRESS); and document a severe drug allergy. Not a minor drug rash.',
    script:{
      opening:'"I started a new tablet about ten days ago and now I\u2019ve got this rash spreading everywhere, some bits blistering and the skin coming away. My mouth is full of painful sores, my eyes are red and sore, and it hurts to wee. I feel awful and feverish. Is this the tablet?"',
      facts:[
        { topic:'Recognise SJS/TEN', text:'A recent new DRUG plus a PAINFUL rash with DUSKY/target macules, BLISTERS and skin PEELING/detachment (Nikolsky+), and crucially MUCOSAL erosions of \u22652 of mouth/eyes/genitals, with fever/systemic illness, is SJS/TEN \u2014 a life-threatening severe cutaneous adverse drug reaction (SJS <10% detachment, TEN >30%). Mucosa + detachment + culprit drug is the alarm.' },
        { topic:'Stop the culprit drug', text:'Identify and STOP the culprit immediately \u2014 common triggers: antiepileptics (lamotrigine, carbamazepine, phenytoin), ALLOPURINOL, SULFONAMIDE/other antibiotics, NSAIDs, nevirapine \u2014 typically started days-weeks before. Prompt withdrawal improves outcome; record a serious allergy.' },
        { topic:'Emergency admission', text:'SJS/TEN is an EMERGENCY with significant mortality (skin failure \u2192 fluid/electrolyte loss, thermoregulation failure, infection/sepsis, eye/mucosal complications). Arrange IMMEDIATE admission \u2014 dermatology with burns/ITU-level care and ophthalmology input. Never manage in the community.' },
        { topic:'Differential', text:'Erythema multiforme (target lesions, often post-HSV, less mucosal/systemic, milder), staph scalded skin (children, no mucosa, superficial), DRESS (rash, fever, eosinophilia, organ involvement). Mucosal involvement + detachment + systemic illness marks SJS/TEN.' },
        { topic:'Document the allergy', text:'Ensure the suspected drug is stopped and clearly documented as a SEVERE allergy (re-exposure can be fatal) and flag the class. Bring the packet to hospital.' },
        { topic:'Hidden agenda', text:'She is frightened and may underestimate the danger. The skill is rapid recognition (mucosa + detachment + culprit drug), stopping the drug, EMERGENCY admission and allergy documentation \u2014 not a community antihistamine.' },
      ],
      ice:{ ideas:'A reaction to the new tablet; unsure how serious.', concerns:'The spreading blistering rash, raw mouth/eyes, feeling very unwell.', expectations:'To be treated. What she needs: recognition of SJS/TEN, culprit drug stopped, IMMEDIATE admission, allergy documented.' },
      cues:['Recent new drug + painful rash + dusky/target lesions + blistering/skin detachment + MUCOSAL erosions (mouth/eyes/genitals) + systemic illness \u2014 SJS/TEN.','Culprits: antiepileptics (lamotrigine/carbamazepine), allopurinol, sulfonamides/antibiotics, NSAIDs \u2014 STOP the drug now.','Life-threatening EMERGENCY \u2014 immediate admission (dermatology/burns/ITU + ophthalmology); document severe allergy.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises SJS/TEN from the red flags \u2014 recent culprit drug, painful rash, dusky/target lesions, blistering/skin detachment (Nikolsky), and MUCOSAL involvement (mouth/eyes/genitals) with systemic illness' },
      { dom:'tasks', text:'Identifies the likely CULPRIT DRUG (antiepileptics, allopurinol, sulfonamides/antibiotics, NSAIDs) and STOPS it immediately' },
      { dom:'tasks', text:'Recognises a life-threatening EMERGENCY and arranges IMMEDIATE admission (dermatology/burns/ITU + ophthalmology) \u2014 not community management' },
      { dom:'tasks', text:'Knows the differential (erythema multiforme, staph scalded skin, DRESS) and the seriousness (skin failure, fluid loss, infection, mortality)' },
      { dom:'tasks', text:'Documents the suspected drug as a SEVERE allergy to prevent fatal re-exposure and flags the class' },
      { dom:'rto',   text:'Communicates urgency clearly but calmly to a frightened patient and arranges emergency transfer' },
      { dom:'rto',   text:'Checks understanding of the need for hospital specialist care, avoiding both panic and false reassurance' },
      { dom:'gs',    text:'Arranges disposition: emergency admission today (999/acute), drug stopped + allergy documented, ophthalmology/skin care flagged, clear handover' },
    ],
    worked:[
      { lbl:'Recognise + reframe', txt:'"I\u2019m glad you contacted us \u2014 yes, this is very likely a serious reaction to the new tablet. The spreading blistering rash, skin coming away, and raw mouth, eyes and genitals make me think of Stevens-Johnson syndrome. That\u2019s an emergency, not a minor rash."' },
      { lbl:'Stop the drug', txt:'"Stop that tablet now and take no more. I\u2019ll record it as a serious allergy so you\u2019re never given it again \u2014 re-taking it could be dangerous."' },
      { lbl:'Admit', txt:'"You need hospital straight away \u2014 skin specialists, often burns-level care, and eye specialists, because your skin and the surfaces of your eyes and mouth need protecting. I\u2019m arranging that now."' },
      { lbl:'Why urgent', txt:'"When skin is affected this badly it can\u2019t do its job \u2014 fluid loss and infection become a real risk \u2014 so this can\u2019t wait or be managed at home."' },
      { lbl:'Practical', txt:'"Don\u2019t put creams on it, sip fluids if you can, and bring the tablet packet so they know exactly what caused it."' },
      { lbl:'Safety-net', txt:'"If your breathing becomes difficult, you can\u2019t swallow, or you feel very faint, call 999. The plan is hospital, now \u2014 I\u2019ll make sure they\u2019re expecting you."' },
    ],
    learning:'STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS (SJS/TEN) is a life-threatening severe cutaneous adverse drug reaction: a recent culprit DRUG plus a PAINFUL (not merely itchy) rash with dusky/target macules, BLISTERS and skin detachment (Nikolsky+), and crucially MUCOSAL erosions of \u22652 of mouth/eyes/genitals, with fever and systemic illness (SJS <10% body-surface detachment, TEN >30%). The combination of mucosal involvement, skin detachment and a culprit drug is the alarm. Identify the culprit (antiepileptics \u2014 lamotrigine/carbamazepine/phenytoin; allopurinol; sulfonamide/other antibiotics; NSAIDs; nevirapine), typically started days-weeks before, and STOP it immediately, documenting a severe drug allergy since re-exposure can be fatal and prompt withdrawal improves outcome. Recognise an EMERGENCY with significant mortality (skin failure causes fluid/electrolyte loss, thermoregulation failure, infection/sepsis, eye/mucosal complications) and arrange IMMEDIATE admission \u2014 dermatology with burns/ITU-level supportive care and ophthalmology \u2014 not community management. Know the differential: erythema multiforme (milder, target lesions, often post-HSV, less mucosal/systemic), staphylococcal scalded skin (children, no mucosa), and DRESS (rash, fever, eosinophilia, organ involvement). Communicate the urgency clearly but calmly, arrange emergency transfer, and ensure the drug is stopped and documented. The skill is rapid pattern recognition, stopping the drug, and emergency admission \u2014 not a community antihistamine. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Stevens-Johnson syndrome / TEN \u00b7 severe cutaneous adverse drug reaction \u00b7 stop culprit + emergency admission \u00b7 differential (EM/SSSS/DRESS)',
      points:[
        { h:'Recognise SJS/TEN', t:'Recent culprit drug + painful rash, dusky/target lesions, blistering/skin detachment (Nikolsky), mucosal involvement (\u22652 of mouth/eyes/genitals), systemic illness. SJS <10%, TEN >30% detachment.' },
        { h:'Stop the culprit', t:'Antiepileptics (lamotrigine/carbamazepine/phenytoin), allopurinol, sulfonamides/antibiotics, NSAIDs, nevirapine. Stop immediately; prompt withdrawal improves outcome.' },
        { h:'Emergency admission', t:'Life-threatening (skin failure, fluid loss, infection, eye/mucosal complications, mortality). Immediate admission \u2014 dermatology/burns/ITU + ophthalmology. Not community management.' },
        { h:'Differential', t:'Erythema multiforme (milder, target, post-HSV, less mucosal/systemic), staph scalded skin (children, no mucosa), DRESS (rash/fever/eosinophilia/organ).' },
        { h:'Document the allergy', t:'Record the drug as a severe allergy and flag the class \u2014 re-exposure can be fatal. Bring the packet.' },
        { h:'Communicate', t:'Convey urgency calmly; arrange emergency transfer; avoid panic and false reassurance; explain hospital specialist care is needed.' },
        { h:'Never do', t:'Never treat as a minor/community rash; never continue the culprit; never delay admission; never re-challenge; never miss the mucosal involvement.' },
        { h:'Safety-net & disposition', t:'Emergency admission today (999/acute), drug stopped + allergy documented, ophthalmology/skin care flagged; 999 for breathing/swallowing difficulty or collapse en route.' }
      ]
    }
  };

  /* ===== 241. Kawasaki disease ===== */
  const c241 = {
    id:'kawasaki-disease', title:'"My little girl\u2019s had a high fever for six days, a rash, red eyes and cracked lips \u2014 the calpol isn\u2019t touching it"', type:'video', duration:12,
    meta:{ age:3, sex:'F', setting:'Video \u2014 a child with prolonged fever, mother present.', system:'Paediatrics \u2014 Kawasaki disease (coronary risk)' },
    brief:'Ivy Calderwood, 3, has fever \u22656 days despite antipyretics, plus polymorphous rash, bilateral non-purulent conjunctivitis, red/cracked lips and strawberry tongue, red/swollen hands, and a cervical node; irritable and miserable. Recognise KAWASAKI DISEASE \u2014 fever \u22655 days PLUS \u22654 of (conjunctivitis, mucosal changes, cervical lymphadenopathy, polymorphous rash, extremity changes) \u2014 a clinical diagnosis (beware incomplete/atypical, esp. infants); know the major complication is CORONARY ARTERY ANEURYSM, reduced by prompt IVIG + aspirin within ~10 days; make an URGENT same-day paediatric referral; exclude mimics (measles, scarlet fever). Not "just a virus".',
    script:{
      opening:'"I\u2019m really worried about Ivy \u2014 raging temperature for six days now, Calpol and Nurofen barely touch it. She\u2019s got a blotchy rash, really red eyes but not gunky, cracked red lips, a tongue like a strawberry, and puffy red hands. So miserable. Everyone says it\u2019s just a virus, but six days?"',
      facts:[
        { topic:'Recognise the criteria', text:'KAWASAKI: FEVER \u22655 DAYS PLUS \u22654 of: (1) bilateral NON-purulent conjunctivitis, (2) MUCOSAL changes (red/cracked lips, strawberry tongue), (3) cervical LYMPHADENOPATHY, (4) polymorphous RASH, (5) EXTREMITY changes (palm/sole erythema-oedema, later peeling). Ivy meets fever \u22655 days plus several features \u2014 prolonged fever + mucocutaneous changes is the key.' },
        { topic:'Clinical & incomplete', text:'Clinical diagnosis (no single confirmatory test; raised inflammatory markers, later thrombocytosis support it). Be alert to INCOMPLETE/ATYPICAL Kawasaki, especially in INFANTS, who are at higher coronary risk and present atypically \u2014 keep a low referral threshold.' },
        { topic:'Why it matters', text:'The major complication is CORONARY ARTERY ANEURYSM (Kawasaki is a leading cause of acquired heart disease in children), substantially reduced by prompt treatment \u2014 so don\u2019t dismiss prolonged fever with these features as "just a virus".' },
        { topic:'Urgent treatment & referral', text:'URGENT same-day PAEDIATRIC referral/admission. Treatment is IV IMMUNOGLOBULIN + ASPIRIN, ideally within ~10 days, with echocardiography. Primary care role = recognise and refer \u2014 don\u2019t wait "a few more days".' },
        { topic:'Differential', text:'Measles (Koplik spots, coryza), scarlet fever (strep, sandpaper rash \u2014 antibiotic-responsive), other viral exanthems, toxin-mediated illness, drug reaction. Persistent fever \u22655 days + the cluster warrants paediatric assessment regardless.' },
        { topic:'Hidden agenda', text:'The mother is worried and repeatedly told "just a virus"; she senses something is wrong. Take the prolonged fever seriously, recognise the pattern, and refer URGENTLY the same day \u2014 not more antipyretics.' },
      ],
      ice:{ ideas:'(Mother) told "just a virus" but worried by 6 days of fever and the rash/eyes/lips.', concerns:'(Mother) persistence/severity; something serious being missed; her child\u2019s distress.', expectations:'Effective help. What is needed: recognition of Kawasaki, validation, URGENT same-day paediatric referral.' },
      cues:['Fever \u22655 days + bilateral non-purulent conjunctivitis + cracked lips/strawberry tongue + rash + red/swollen hands + cervical node \u2014 Kawasaki.','Clinical diagnosis; beware incomplete/atypical (esp. infants); major complication is coronary artery aneurysm.','Urgent same-day paediatric referral \u2014 IVIG + aspirin within ~10 days reduces coronary risk; not "just a virus".']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises KAWASAKI \u2014 fever \u22655 days PLUS \u22654 of bilateral non-purulent conjunctivitis, mucosal changes, cervical lymphadenopathy, polymorphous rash, extremity changes' },
      { dom:'tasks', text:'Knows it is CLINICAL and is alert to INCOMPLETE/ATYPICAL Kawasaki (esp. infants, higher coronary risk) \u2014 low referral threshold' },
      { dom:'tasks', text:'Understands the CORONARY ARTERY ANEURYSM complication and that early recognition/treatment reduces risk' },
      { dom:'tasks', text:'Makes an URGENT same-day paediatric referral/admission, knowing treatment is IVIG + aspirin within ~10 days, with echocardiography' },
      { dom:'tasks', text:'Considers/excludes mimics (measles, scarlet fever, viral exanthems, toxin-mediated illness) without delaying referral' },
      { dom:'rto',   text:'Takes the prolonged fever and the mother\u2019s concern seriously, validating that 6 days of fever warrants action not more reassurance' },
      { dom:'rto',   text:'Explains the need for urgent paediatric assessment clearly and calmly, checking understanding' },
      { dom:'gs',    text:'Arranges disposition: urgent same-day paediatric referral, deterioration advice en route, clear communication \u2014 recognising Kawasaki, not dismissing as "just a virus"' },
    ],
    worked:[
      { lbl:'Validate + take seriously', txt:'"You\u2019re right to push \u2014 six days of high fever that won\u2019t come down, with red eyes, cracked lips and that rash, is NOT something to keep calling a virus. There\u2019s a condition I\u2019m concerned about called Kawasaki disease."' },
      { lbl:'Examine', txt:'"Let me check Ivy \u2014 her eyes, lips and tongue, the rash, her hands and feet, and her neck glands. \u2026 She has several features plus the long fever, which is exactly why I want her seen today."' },
      { lbl:'Why it matters', txt:'"We act fast because, untreated, this can affect the blood vessels around the heart \u2014 and treatment within the first ten days or so greatly reduces that risk. That\u2019s why it\u2019s urgent, not wait-and-see."' },
      { lbl:'Refer', txt:'"I\u2019m referring Ivy to the children\u2019s team to be seen today \u2014 they\u2019ll confirm it, do a heart scan, and treat with immunoglobulin and aspirin if it\u2019s Kawasaki."' },
      { lbl:'Address mother', txt:'"You did exactly the right thing trusting your instinct and bringing her \u2014 this isn\u2019t you overreacting."' },
      { lbl:'Safety-net', txt:'"Keep her comfortable and hydrated. If she becomes very drowsy, breathless or much worse, call 999. I\u2019ll make sure the team are expecting her."' },
    ],
    learning:'KAWASAKI DISEASE is a medium-vessel vasculitis of young children: FEVER \u22655 DAYS PLUS \u22654 of bilateral NON-purulent conjunctivitis; mucosal changes (red/cracked lips, strawberry tongue); cervical lymphadenopathy; polymorphous rash; and extremity changes (palm/sole erythema-oedema, later peeling). It is a CLINICAL diagnosis with no single confirmatory test (inflammatory markers and later thrombocytosis support it), and clinicians must be alert to INCOMPLETE/ATYPICAL Kawasaki \u2014 especially in INFANTS, who present atypically and are at higher coronary risk \u2014 keeping a low referral threshold. The critical reason for early recognition is the risk of CORONARY ARTERY ANEURYSMS (a leading cause of acquired paediatric heart disease), substantially reduced by prompt treatment, so a prolonged-fever child with these features must not be dismissed as "just a virus". The action is an URGENT same-day paediatric referral/admission: treatment is IV immunoglobulin plus aspirin, ideally within the first ~10 days, with echocardiography \u2014 primary care\u2019s role is recognition and urgent referral. Consider and exclude mimics (measles, scarlet fever, other viral exanthems, toxin-mediated illness, drug reactions), but persistent high fever \u22655 days with the mucocutaneous cluster warrants paediatric assessment regardless. Validate the worried parent repeatedly told "it\u2019s just a virus", recognise the pattern, and refer urgently the same day. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Kawasaki disease \u00b7 clinical criteria (fever \u22655 days + \u22654) \u00b7 coronary aneurysm risk \u00b7 urgent paediatric referral, IVIG + aspirin',
      points:[
        { h:'Recognise Kawasaki', t:'Fever \u22655 days + \u22654 of: bilateral non-purulent conjunctivitis; mucosal changes (cracked lips/strawberry tongue); cervical lymphadenopathy; polymorphous rash; extremity changes (palm/sole erythema-oedema, later peeling).' },
        { h:'Clinical & incomplete', t:'Clinical diagnosis (no single test; markers/thrombocytosis support). Beware incomplete/atypical Kawasaki, esp. infants (higher coronary risk, atypical presentation).' },
        { h:'Why it matters', t:'Major complication = coronary artery aneurysm (leading cause of acquired paediatric heart disease). Early recognition/treatment reduces risk \u2014 don\u2019t dismiss prolonged fever.' },
        { h:'Urgent treatment', t:'Urgent same-day paediatric referral/admission. IVIG + aspirin, ideally within ~10 days, with echocardiography. Primary care = recognise and refer.' },
        { h:'Differential', t:'Measles (Koplik spots/coryza), scarlet fever (strep, sandpaper rash, antibiotic-responsive), other viral exanthems, toxin-mediated illness, drug reaction.' },
        { h:'Validate the parent', t:'Take prolonged fever and parental concern seriously; 6 days of fever warrants action, not more reassurance/antipyretics.' },
        { h:'Never do', t:'Never dismiss \u22655-day fever with mucocutaneous features as "just a virus"; never delay referral; never wait for a confirmatory test; never miss incomplete Kawasaki in infants.' },
        { h:'Safety-net & disposition', t:'Urgent same-day paediatric referral; deterioration advice en route (drowsy/breathless/much worse \u2192 999); ensure the team expects the child.' }
      ]
    }
  };

  /* ===== 242. Carbon monoxide poisoning ===== */
  const c242 = {
    id:'carbon-monoxide', title:'"The whole family\u2019s had headaches, feel sick and dizzy at home \u2014 even the dog seems off \u2014 but we\u2019re fine when we\u2019re out"', type:'telephone', duration:12,
    meta:{ age:41, sex:'F', setting:'Telephone \u2014 non-specific symptoms affecting the household.', system:'Toxicology / Urgent care \u2014 carbon monoxide poisoning' },
    brief:'Mrs Gemma Toller, 41, rings about recurring headaches, nausea, dizziness and lethargy affecting herself, partner, children (and the pet) for two weeks \u2014 worse at HOME (mornings/heating on), better when OUT. Older property with a gas boiler/fire. Recognise the CARBON MONOXIDE pattern (flu-like symptoms in MULTIPLE household members and pets, home-related, improving away, with a combustion source) \u2014 commonly missed as a virus/migraine; advise IMMEDIATE action (everyone OUT into fresh air, turn off appliance, ventilate, call gas emergency/999); arrange urgent assessment (high-flow O2, carboxyhaemoglobin level; pulse oximetry reads FALSELY normal); and advise prevention (CO alarms, servicing).',
    script:{
      opening:'"This sounds odd, doctor. For two weeks me, my partner and the two kids have all had headaches, felt sick and dizzy and tired \u2014 even the dog seems off and sleepy. We feel rough at home, especially mornings, but when we\u2019re out for the day we\u2019re fine. Is there a bug going round?"',
      facts:[
        { topic:'Recognise the CO pattern', text:'Non-specific FLU-LIKE symptoms (headache, nausea, dizziness, fatigue, sometimes confusion) affecting MULTIPLE PEOPLE and PETS in the SAME HOME, WORSE at home (mornings/heating on) and IMPROVING when AWAY, point to CARBON MONOXIDE POISONING \u2014 the "great mimic", commonly misdiagnosed as a virus/migraine/food poisoning. Household + pet + home-related + improves-away is the clue.' },
        { topic:'Ask about the source', text:'Ask about a CO source: gas BOILER/fire/cooker, solid-fuel stove, blocked/faulty FLUE, poor ventilation, unserviced/faulty appliance, and whether there is a CO ALARM. Older property + gas boiler/fire + morning/heating-related symptoms supports it.' },
        { topic:'Immediate emergency action', text:'Advise IMMEDIATE action: everyone (and pets) OUT into FRESH AIR now; turn OFF the appliance if safe; open windows to VENTILATE; don\u2019t stay inside; call the GAS EMERGENCY service and 999/urgent assessment (especially if anyone is drowsy/confused). CO can be rapidly fatal, especially overnight.' },
        { topic:'Assessment & treatment', text:'Arrange urgent assessment: treatment is high-flow 100% OXYGEN (speeds CO elimination); a CARBOXYHAEMOGLOBIN level confirms exposure; severe cases (neuro signs, LOC, pregnancy, cardiac, very high levels) may need HYPERBARIC oxygen. Pulse OXIMETRY reads FALSELY NORMAL (can\u2019t detect carboxyhaemoglobin) \u2014 don\u2019t be falsely reassured.' },
        { topic:'Prevention', text:'Advise CO ALARMS, servicing of fuel-burning appliances/flues by a registered (Gas Safe) engineer, adequate ventilation, and no unsuitable appliances (BBQs/generators) indoors.' },
        { topic:'Hidden agenda', text:'She thinks it\u2019s "a bug" and hasn\u2019t connected the home/pattern. Recognise the pattern as possible CO poisoning, give immediate emergency advice, arrange assessment (not reassured by normal oximetry), and advise prevention \u2014 not a viral label.' },
      ],
      ice:{ ideas:'A bug/virus going round the family.', concerns:'The whole family (and pet) unwell; not understanding why it\u2019s home-related.', expectations:'Reassurance for a "bug". What is needed: recognition of CO poisoning, IMMEDIATE emergency advice (out + gas emergency/999), urgent assessment, prevention.' },
      cues:['Headache/nausea/dizziness/fatigue in MULTIPLE household members (and the PET), worse at home/mornings, better away \u2014 carbon monoxide poisoning.','Ask about gas boiler/fire/cooker, blocked flue, CO alarm \u2014 the great mimic, commonly missed as a virus.','EMERGENCY: everyone OUT, turn off appliance, ventilate, call gas emergency/999; high-flow O2; pulse oximetry reads FALSELY normal.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the CARBON MONOXIDE pattern \u2014 flu-like symptoms in MULTIPLE household members (and pets), worse at home (mornings/heating), improving away \u2014 not labelling it a virus' },
      { dom:'tasks', text:'Asks about the COMBUSTION SOURCE (gas boiler/fire/cooker, solid-fuel stove, blocked/faulty flue, ventilation) and whether a CO alarm is present' },
      { dom:'tasks', text:'Gives IMMEDIATE emergency advice \u2014 everyone (and pets) OUT into fresh air, turn off the appliance, ventilate, call gas emergency/999 \u2014 without delay' },
      { dom:'tasks', text:'Arranges urgent MEDICAL assessment, knowing treatment is high-flow O2, carboxyhaemoglobin confirms exposure, and severe cases may need hyperbaric oxygen' },
      { dom:'tasks', text:'Knows pulse OXIMETRY reads FALSELY NORMAL in CO poisoning and is not falsely reassured by normal sats' },
      { dom:'tasks', text:'Advises PREVENTION \u2014 CO alarms, appliance/flue servicing by a registered engineer, ventilation, no unsuitable appliances indoors' },
      { dom:'rto',   text:'Connects the pattern for the patient and conveys urgency clearly without panic, ensuring she acts immediately' },
      { dom:'gs',    text:'Arranges disposition: immediate evacuation + gas emergency/999, urgent assessment for those affected, prevention advice, escalation if anyone drowsy/unconscious' },
    ],
    worked:[
      { lbl:'Recognise the pattern', txt:'"This doesn\u2019t sound like a bug. All of you \u2014 and the dog \u2014 feeling ill at home, worse mornings with the heating on, and fine when out, is the classic pattern of carbon monoxide poisoning from a faulty appliance. This is urgent."' },
      { lbl:'Immediate action', txt:'"Act now: get everyone and the dog OUT into fresh air. If safe, turn off the boiler/fire and open windows on your way out. Don\u2019t stay inside."' },
      { lbl:'Call the right people', txt:'"From outside, call the gas emergency line \u2014 they\u2019ll check the property urgently \u2014 and if anyone is drowsy, confused or very unwell, call 999. CO can be dangerous quickly, especially overnight."' },
      { lbl:'Get checked', txt:'"You all need assessment \u2014 the treatment is high-flow oxygen, and a blood test confirms it. Importantly, the finger oxygen monitors read normal even when CO is high, so don\u2019t be falsely reassured by that."' },
      { lbl:'Prevention', txt:'"Once safe, get a CO alarm fitted and have the boiler, gas appliances and flue checked by a registered Gas Safe engineer before using them again."' },
      { lbl:'Safety-net', txt:'"So: out into fresh air now, gas emergency line, 999 if anyone\u2019s drowsy or faints. Don\u2019t go back until it\u2019s declared safe. Ring me once you\u2019re all out and I\u2019ll help arrange check-ups."' },
    ],
    learning:'CARBON MONOXIDE (CO) POISONING is recognised by non-specific FLU-LIKE symptoms \u2014 headache, nausea, dizziness, fatigue, sometimes confusion \u2014 affecting MULTIPLE PEOPLE and PETS in the SAME HOME, WORSE at home (mornings/heating on) and IMPROVING when AWAY; CO is the "great mimic", commonly misdiagnosed as a viral illness, migraine or food poisoning, so the household + pet + home-related + improves-away pattern is the crucial clue. Ask about the combustion source (gas boiler/fire/cooker, solid-fuel stove, blocked/faulty flue, poor ventilation, unserviced appliance) and a CO alarm. The immediate action is an EMERGENCY: get everyone (and pets) OUT into fresh air, turn off the appliance if safe, ventilate, don\u2019t stay inside, and call the gas emergency service and 999/urgent assessment \u2014 CO can rapidly cause loss of consciousness and death, particularly overnight. Arrange urgent assessment: treatment is high-flow 100% OXYGEN (speeds CO elimination), a carboxyhaemoglobin level confirms exposure, and severe cases (neuro signs, LOC, pregnancy, cardiac involvement, very high levels) may need hyperbaric oxygen. Critically, pulse OXIMETRY reads FALSELY NORMAL because it cannot distinguish carboxyhaemoglobin \u2014 a normal sats reading is misleadingly reassuring. Advise prevention: CO alarms, servicing by a registered (Gas Safe) engineer, ventilation, and no unsuitable appliances (BBQs/generators) indoors. The skill is recognising the pattern, immediate emergency advice, assessment without false reassurance from oximetry, and prevention \u2014 not labelling it viral. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Carbon monoxide poisoning \u00b7 pattern (household/pet, home-related, improves away) \u00b7 emergency action + high-flow O2 \u00b7 falsely-normal oximetry \u00b7 prevention',
      points:[
        { h:'Recognise the pattern', t:'Flu-like symptoms (headache, nausea, dizziness, fatigue, confusion) in multiple household members and pets, worse at home (mornings/heating), better away = CO poisoning. The "great mimic".' },
        { h:'Ask about the source', t:'Gas boiler/fire/cooker, solid-fuel stove, blocked/faulty flue, poor ventilation, unserviced appliance; presence of a CO alarm.' },
        { h:'Emergency action', t:'Everyone (and pets) OUT into fresh air now; turn off the appliance if safe; ventilate; call gas emergency and 999/urgent assessment. CO can be rapidly fatal, esp. overnight.' },
        { h:'Treatment', t:'High-flow 100% oxygen speeds CO elimination; carboxyhaemoglobin confirms exposure; severe cases (neuro signs, LOC, pregnancy, cardiac, very high) may need hyperbaric.' },
        { h:'Falsely-normal oximetry', t:'Pulse oximetry reads falsely normal in CO poisoning (can\u2019t detect carboxyhaemoglobin). Don\u2019t be falsely reassured by normal sats.' },
        { h:'Prevention', t:'CO alarms, appliance/flue servicing by a registered (Gas Safe) engineer, ventilation, no unsuitable appliances (BBQs/generators) indoors.' },
        { h:'Never do', t:'Never label household/home-related flu-like symptoms as "just a virus" without considering CO; never be reassured by normal oximetry; never delay evacuation.' },
        { h:'Safety-net & disposition', t:'Immediate evacuation + gas emergency/999; urgent assessment for all affected; 999 if drowsy/unconscious; don\u2019t re-enter until declared safe; prevention advice.' }
      ]
    }
  };

  /* ===== 243. Otitis externa ===== */
  const c243 = {
    id:'otitis-externa', title:'"My ear\u2019s really painful and itchy with some discharge \u2014 worse when I touch it. I\u2019ve been using cotton buds"', type:'video', duration:12,
    meta:{ age:45, sex:'M', setting:'Face-to-face \u2014 a painful, discharging, itchy ear.', system:'ENT \u2014 otitis externa & the malignant-OE red flag' },
    brief:'Mr Owen Pryce, 45, has a few days of a painful, itchy, discharging ear with pain on moving the tragus/pinna and muffled hearing; he uses cotton buds and swims; the canal is red, swollen and debris-filled. Recognise OTITIS EXTERNA (canal inflammation \u2014 tragal/pinna pain, erythema/oedema/debris, discharge, itch; provoked by water/swimming, cotton-bud trauma, eczema), distinguish from otitis media, manage with analgesia + aural toilet + TOPICAL antibiotic/steroid drops (not systemic) + keep dry + stop cotton buds, advise prevention, and recognise MALIGNANT (NECROTISING) OE in elderly diabetic/immunocompromised (severe night pain out of proportion, granulation, facial palsy \u2014 urgent ENT). Not routine oral antibiotics.',
    script:{
      opening:'"My right ear\u2019s been sore and itchy for a few days, with some discharge. It hurts if I touch it or pull on it, and feels blocked, muffled. I\u2019ve been poking it with cotton buds to clean it, and I was swimming last week. Can you sort it?"',
      facts:[
        { topic:'Recognise otitis externa', text:'OTITIS EXTERNA (external canal inflammation): ear PAIN, ITCH, DISCHARGE, PAIN ON MOVING the tragus/pinna, and a blocked/muffled sensation; canal red, swollen, debris-filled. Provoked by WATER/SWIMMING ("swimmer\u2019s ear"), TRAUMA (cotton buds), and skin conditions (eczema/seborrhoeic dermatitis/psoriasis). His swimming + cotton-bud use are classic.' },
        { topic:'Distinguish & differential', text:'Distinguish from otitis MEDIA (deeper pain, systemic/febrile in children, bulging/red drum, no tragal tenderness; discharge if perforated). Consider foreign body, furuncle (canal boil), and FUNGAL OE/otomycosis (itch-predominant, fungal debris \u2014 antifungal drops).' },
        { topic:'Manage uncomplicated OE', text:'Adequate ANALGESIA; AURAL TOILET (cleaning/microsuction improves drop delivery); TOPICAL antibiotic +/- corticosteroid DROPS/spray (or acetic acid for mild) as first-line \u2014 not systemic antibiotics in uncomplicated OE; keep the ear DRY (no swimming during treatment); ear WICK (ENT) if canal very swollen. Oral antibiotics only for spreading cellulitis/systemic involvement.' },
        { topic:'Advice & technique', text:'STOP cotton buds (trauma, push debris in), keep ears dry, treat underlying skin conditions, use drops correctly (ear up, stay still a few minutes). Address recurrent causes (swimming/dermatitis).' },
        { topic:'Red flag \u2014 malignant (necrotising) OE', text:'In a high-risk patient (elderly DIABETIC or immunocompromised), consider MALIGNANT (NECROTISING) OE: SEVERE persistent pain (out of proportion, worse at night), copious discharge, GRANULATION tissue in the canal, and/or cranial-nerve (FACIAL) palsy \u2014 a skull-base OSTEOMYELITIS needing URGENT ENT/hospital referral, imaging and IV antibiotics. Not routine OE.' },
        { topic:'Hidden agenda', text:'He wants it "sorted" and may not realise the cotton-bud habit perpetuates it. The skill is correct topical management, advice/technique, and screening the malignant-OE red flags in high-risk patients.' },
      ],
      ice:{ ideas:'A simple infected ear (possibly expecting oral antibiotics).', concerns:'Pain, discharge, blocked hearing; wanting quick relief.', expectations:'A quick fix/antibiotics. What he needs: recognition of OE, topical (not systemic) treatment + aural toilet, keep-dry/stop-cotton-buds advice, malignant-OE awareness.' },
      cues:['Ear pain + itch + discharge + pain moving the tragus/pinna + red swollen debris-filled canal, with swimming/cotton-bud use \u2014 otitis externa.','Manage with topical antibiotic/steroid drops + aural toilet + keep dry + STOP cotton buds \u2014 not systemic antibiotics in uncomplicated OE.','RED FLAG \u2014 malignant (necrotising) OE in elderly diabetic/immunocompromised: severe night pain out of proportion, granulation, facial palsy \u2192 urgent ENT.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises OTITIS EXTERNA \u2014 ear pain/itch/discharge, PAIN ON MOVING the tragus/pinna, a red/swollen/debris-filled canal, provoked by water/swimming and cotton-bud trauma' },
      { dom:'tasks', text:'Distinguishes it from otitis MEDIA and considers foreign body, furuncle and fungal OE (otomycosis)' },
      { dom:'tasks', text:'Manages uncomplicated OE correctly \u2014 analgesia, aural toilet, TOPICAL antibiotic +/- steroid drops/spray (not systemic), keep DRY, ear wick if very swollen \u2014 reserving oral antibiotics for spreading/systemic involvement' },
      { dom:'tasks', text:'Advises PREVENTION/technique \u2014 STOP cotton buds, keep ears dry, treat skin conditions, correct drop technique \u2014 and addresses recurrent causes' },
      { dom:'tasks', text:'Screens MALIGNANT (NECROTISING) OE red flags in high-risk patients (elderly diabetic/immunocompromised): severe pain out of proportion/worse at night, granulation, facial palsy \u2014 and would refer URGENTLY to ENT' },
      { dom:'rto',   text:'Explains the diagnosis and why topical (not oral) treatment is appropriate, engaging him in keep-dry/stop-cotton-buds advice without dismissiveness' },
      { dom:'rto',   text:'Checks understanding of drop technique and prevention, and responds to his wish for quick relief realistically' },
      { dom:'gs',    text:'Safety-nets and follows up: review if not improving/spreading, malignant-OE red flags warranting urgent ENT (esp. diabetics), prevention to avoid recurrence' },
    ],
    worked:[
      { lbl:'Diagnose + explain', txt:'"You\u2019ve got otitis externa \u2014 inflammation of the ear canal. The swimming and, honestly, the cotton buds set it off: the buds scratch the canal and push stuff in, which keeps it going. It usually settles well with the right drops."' },
      { lbl:'Treat correctly', txt:'"The treatment is ear DROPS \u2014 an antibiotic with a steroid \u2014 rather than antibiotic tablets, which aren\u2019t needed. I\u2019ll clean the ear so the drops get in, and give you painkillers. If the canal\u2019s too swollen, we sometimes place a little wick."' },
      { lbl:'Technique + keep dry', txt:'"Use the drops lying with the bad ear up and stay still a few minutes. Crucially: stop the cotton buds completely, and keep the ear dry \u2014 no swimming while it settles, keep water out in the shower."' },
      { lbl:'Prevention', txt:'"Once better, keeping ears dry and leaving them alone prevents most recurrences. If you\u2019re a keen swimmer we can talk about keeping water out."' },
      { lbl:'Red-flag awareness', txt:'(If high-risk/severe:) "Because severe ear infections can occasionally become serious \u2014 especially with diabetes \u2014 severe pain worse at night and out of proportion, or any facial weakness, would need urgent ENT. That doesn\u2019t fit you now, but worth knowing."' },
      { lbl:'Safety-net', txt:'"Come back if it\u2019s not improving in a week, the pain gets much worse, it spreads to the skin around the ear, or you feel feverish. Otherwise the drops and keeping it dry should sort it."' },
    ],
    learning:'OTITIS EXTERNA (inflammation of the external ear CANAL) presents with ear PAIN, ITCH and DISCHARGE, PAIN ON MOVING the tragus/pinna, and a blocked/muffled-hearing sensation, with a red, swollen, debris-filled canal; it is provoked by WATER/SWIMMING ("swimmer\u2019s ear"), local TRAUMA (cotton buds), and skin conditions (eczema/seborrhoeic dermatitis/psoriasis). Distinguish it from otitis MEDIA (deeper pain, systemic/febrile especially in children, a bulging/red drum, no tragal tenderness; discharge if the drum perforates), and consider a foreign body, a furuncle, and FUNGAL OE/otomycosis (itch-predominant, fungal debris, may need antifungal drops). Manage uncomplicated OE: adequate ANALGESIA, AURAL TOILET (cleaning/microsuction improves drop delivery), and TOPICAL antibiotic +/- corticosteroid DROPS/spray (or acetic acid for mild) as first-line rather than systemic antibiotics, keeping the ear DRY (avoid water/swimming during treatment) and using an ear WICK (ENT) if the canal is very swollen; reserve oral antibiotics for spreading cellulitis/systemic involvement. Advise prevention and technique \u2014 STOP cotton buds (they cause trauma and push debris in), keep ears dry, treat underlying skin conditions, and use drops correctly. The critical RED FLAG is MALIGNANT (NECROTISING) OTITIS EXTERNA in a high-risk patient (elderly DIABETIC or immunocompromised): SEVERE, persistent pain (out of proportion, worse at night), copious discharge, GRANULATION tissue in the canal, and/or cranial-nerve involvement (e.g. facial palsy) \u2014 a skull-base osteomyelitis that is serious/potentially life-threatening and needs URGENT ENT/hospital referral, imaging and IV antibiotics, not routine OE treatment. The skill is correct topical management, advice/technique, and screening the malignant-OE red flags. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE CKS otitis externa \u00b7 topical antibiotic/steroid drops + aural toilet \u00b7 keep dry / stop cotton buds \u00b7 malignant (necrotising) OE red flag',
      points:[
        { h:'Recognise OE', t:'Ear pain, itch, discharge, pain on moving the tragus/pinna, red/swollen debris-filled canal. Provoked by water/swimming, cotton-bud trauma, eczema/dermatitis.' },
        { h:'Distinguish & differential', t:'Otitis media (deeper pain, systemic/febrile in children, bulging drum, no tragal tenderness). Consider foreign body, furuncle, fungal OE/otomycosis (itch-predominant, fungal debris).' },
        { h:'Manage uncomplicated OE', t:'Analgesia, aural toilet, topical antibiotic +/- steroid drops/spray (not systemic in uncomplicated), keep dry, ear wick if very swollen. Oral antibiotics only for spreading/systemic involvement.' },
        { h:'Advice & technique', t:'Stop cotton buds, keep ears dry, treat underlying skin conditions, correct drop technique (ear up, stay still); address recurrent causes.' },
        { h:'Malignant (necrotising) OE', t:'Elderly diabetic/immunocompromised + severe persistent pain (out of proportion, worse at night), granulation tissue, facial palsy = skull-base osteomyelitis \u2192 urgent ENT/hospital, imaging, IV antibiotics.' },
        { h:'When to escalate', t:'Spreading cellulitis, systemic illness, not improving, or malignant-OE features \u2192 oral antibiotics/ENT referral as appropriate.' },
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
        reason: 'Video/urgent \u2014 severe rash after a new drug.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise SJS/TEN', d:'Culprit drug + painful rash + dusky/target + blisters/detachment + mucosal erosions + systemic illness.' },
        { t:'2\u20134',  h:'Stop the culprit', d:'Antiepileptics/allopurinol/sulfonamides/NSAIDs \u2014 stop now; document severe allergy.' },
        { t:'4\u20137',  h:'Emergency admission', d:'Dermatology/burns/ITU + ophthalmology; never community-managed.' },
        { t:'7\u20139',  h:'Differential', d:'Erythema multiforme, staph scalded skin, DRESS \u2014 but mucosa+detachment+systemic = SJS/TEN.' },
        { t:'9\u201312', h:'Communicate + safety-net', d:'Convey urgency calmly; bring packet; 999 for breathing/swallowing difficulty en route.' }
      ],
      wordPics: {
        fail: 'Treats as a minor drug rash with an antihistamine; continues the culprit; no admission; misses the mucosal involvement.',
        pass: 'Recognises SJS/TEN, stops the drug and arranges emergency admission with allergy documentation.',
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
        reason: 'Video \u2014 a child with prolonged fever.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate + recognise', d:'Fever \u22655 days + conjunctivitis + lips/tongue + rash + hands + node = Kawasaki; not "just a virus".' },
        { t:'2\u20134',  h:'Clinical + incomplete', d:'Clinical diagnosis; beware incomplete/atypical (esp. infants); low referral threshold.' },
        { t:'4\u20136',  h:'Why it matters', d:'Coronary artery aneurysm risk, reduced by prompt treatment.' },
        { t:'6\u20139',  h:'Urgent referral', d:'Same-day paediatrics; IVIG + aspirin within ~10 days; echocardiography.' },
        { t:'9\u201312', h:'Differential + safety-net', d:'Measles/scarlet fever/exanthems; deterioration advice en route; team expecting child.' }
      ],
      wordPics: {
        fail: 'Dismisses prolonged fever as "just a virus", offers more antipyretics, no recognition or referral \u2014 risks missed coronary disease.',
        pass: 'Recognises Kawasaki and refers urgently the same day with validation of the parent.',
        exc:  'Recognises Kawasaki (fever \u22655 days + features), is alert to incomplete/atypical disease, explains the coronary-aneurysm rationale, refers urgently the same day for IVIG + aspirin/echo, excludes mimics, and validates the worried parent.'
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
        { t:'4\u20137',  h:'Emergency action', d:'Everyone (+ pets) OUT into fresh air, turn off appliance, ventilate, gas emergency/999.' },
        { t:'7\u20139',  h:'Assessment', d:'High-flow O2; carboxyhaemoglobin level; pulse oximetry FALSELY normal \u2014 don\u2019t be reassured.' },
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
        reason: 'Face-to-face \u2014 a painful, discharging ear.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise OE', d:'Pain on moving tragus/pinna + red swollen debris-filled canal + swimming/cotton buds = otitis externa.' },
        { t:'2\u20134',  h:'Distinguish', d:'Vs otitis media; consider foreign body, furuncle, fungal OE.' },
        { t:'4\u20137',  h:'Manage', d:'Analgesia + aural toilet + topical antibiotic/steroid drops (not systemic) + keep dry; ear wick if swollen.' },
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
