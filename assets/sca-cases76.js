/* ============================================================
   Reasoning GP — Case Library batch 76 (SCA revision notes):
   Dengue fever; needlestick injury; post-COVID syndrome (long COVID);
   tinea pedis (athlete's foot). No NG12 cancer pathway. After 75.
   ============================================================ */
(function(){

  /* ===== 273. Dengue fever ===== */
  const c273 = {
    id:'dengue-fever', title:'"I came back from Thailand a few days ago with a high fever, splitting headache behind my eyes, and aching all over"', type:'video', duration:12,
    meta:{ age:24, sex:'M', setting:'Face-to-face \u2014 fever in a returning traveller.', system:'Infectious disease / Travel \u2014 dengue & the returning-traveller fever' },
    brief:'Mr Aaron Bell, 24, returned from SE Asia ~4 days ago with high FEVER, severe HEADACHE/RETRO-ORBITAL pain, MYALGIA/arthralgia ("breakbone"), and a rash; malaria film negative. Recognise that FEVER IN A RETURNING TRAVELLER demands a structured approach \u2014 always EXCLUDE MALARIA first (the must-not-miss; a single negative film does not exclude it \u2014 repeat/refer) \u2014 then consider DENGUE (mosquito-borne flavivirus; incubation typically <2 weeks; fever, retro-orbital headache, severe myalgia, rash, often leucopenia/THROMBOCYTOPENIA), plus typhoid, hepatitis, rickettsia, viral haemorrhagic fever (depending on area), COVID/respiratory. Take a TRAVEL/exposure history (where, when, activities, bites, prophylaxis, sexual/food/water exposure), examine and investigate (FBC \u2014 thrombocytopenia/leucopenia, LFTs, blood films \u00d73 for malaria, dengue serology/NS1, cultures), and \u2014 critically \u2014 recognise WARNING SIGNS of severe/haemorrhagic dengue (abdominal pain, persistent vomiting, bleeding/petechiae, lethargy, plasma leakage) needing admission; manage supportively (hydration, paracetamol \u2014 AVOID NSAIDs/aspirin given bleeding/platelet risk), notify per requirements, and safety-net. The skill is the returning-traveller approach, excluding malaria, recognising dengue and its warning signs, and avoiding NSAIDs. No NG12 cancer link.',
    script:{
      opening:'"I got back from Thailand four days ago and I feel awful \u2014 high fever, a pounding headache right behind my eyes, and aching all over, like my bones hurt. I\u2019ve come out in a rash too. The walk-in did a malaria test and it was negative. What is it?"',
      facts:[
        { topic:'Fever in a returning traveller \u2014 exclude malaria first', text:'CORE \u2014 fever in a returning traveller is malaria until proven otherwise: ALWAYS exclude MALARIA first. A SINGLE negative film does NOT exclude it \u2014 repeat thick/thin films (\u00d73) and/or rapid antigen, and have a low threshold to refer. Malaria is the must-not-miss because it can kill rapidly. Only then weigh other causes.' },
        { topic:'Recognise dengue', text:'DENGUE (mosquito-borne flavivirus, common in SE Asia/tropics, incubation usually <2 weeks): high FEVER, severe RETRO-ORBITAL headache, marked MYALGIA/arthralgia ("breakbone fever"), rash, and often LEUCOPENIA and THROMBOCYTOPENIA. His timeline and symptoms fit dengue \u2014 confirm with NS1 antigen/serology.' },
        { topic:'Structured travel history & differential', text:'Take a structured TRAVEL/exposure history: where, when (incubation), rural/urban, activities, insect bites, malaria prophylaxis/vaccinations, food/water, freshwater swimming, sexual exposure, animal/needle contact. Differential by area/timeline: malaria, dengue, typhoid, hepatitis A, rickettsia, leptospirosis, viral haemorrhagic fever (specific regions \u2014 isolate/notify), COVID/respiratory, and common UK infections.' },
        { topic:'Investigate', text:'Investigate: FBC (thrombocytopenia/leucopenia support dengue), LFTs, U&E, blood FILMS \u00d73 for malaria, dengue NS1/serology, blood cultures (typhoid), CRP, and others per exposure. Monitor platelets/haematocrit in suspected dengue.' },
        { topic:'Warning signs & supportive management', text:'CRITICAL \u2014 recognise dengue WARNING SIGNS of severe/haemorrhagic disease needing ADMISSION: severe abdominal pain, persistent vomiting, mucosal bleeding/petechiae/bruising, lethargy/restlessness, rapid platelet fall/plasma leakage. Manage supportively (HYDRATION, rest, PARACETAMOL) and AVOID NSAIDs/ASPIRIN (bleeding/platelet risk). Notify per local requirements; safety-net for warning signs.' },
        { topic:'The agenda', text:'He wants to know what it is. Approach as a returning-traveller fever: exclude malaria (repeat films), recognise dengue and confirm, take a full exposure history, investigate, recognise warning signs needing admission, manage supportively avoiding NSAIDs, and safety-net. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'A travel bug; reassured by the negative malaria test.', concerns:'The high fever and feeling awful; what it is; whether it\u2019s serious.', expectations:'A diagnosis. What he needs: malaria properly excluded (repeat films), dengue recognised/confirmed, full exposure history, warning-sign awareness/admission if severe, supportive care avoiding NSAIDs.' },
      cues:['Fever in a returning traveller \u2014 exclude MALARIA first; a single negative film does NOT exclude it (repeat \u00d73/refer).','Retro-orbital headache + severe myalgia ("breakbone") + rash + thrombocytopenia/leucopenia from SE Asia \u2014 dengue (NS1/serology).','Warning signs (abdominal pain, vomiting, bleeding/petechiae, lethargy, platelet fall) \u2192 admit; supportive care + paracetamol, AVOID NSAIDs/aspirin.']
    },
    checkpoints:[
      { dom:'tasks', text:'Approaches FEVER IN A RETURNING TRAVELLER structurally and EXCLUDES MALARIA first \u2014 recognising a single negative film does not exclude it (repeat \u00d73/rapid antigen, low threshold to refer)' },
      { dom:'tasks', text:'Recognises DENGUE (retro-orbital headache, severe myalgia, rash, leucopenia/thrombocytopenia, SE Asia, <2-week incubation) and confirms with NS1/serology' },
      { dom:'tasks', text:'Takes a structured TRAVEL/exposure history and constructs the differential (malaria, dengue, typhoid, hepatitis, rickettsia, leptospirosis, VHF by region, COVID)' },
      { dom:'tasks', text:'Investigates appropriately (FBC, LFTs, U&E, blood films \u00d73, dengue NS1/serology, cultures) and monitors platelets/haematocrit' },
      { dom:'tasks', text:'Recognises dengue WARNING SIGNS needing ADMISSION and manages supportively (hydration, paracetamol), AVOIDING NSAIDs/aspirin, with notification as required' },
      { dom:'rto',   text:'Explains the returning-traveller reasoning clearly, addresses his concern, and checks understanding' },
      { dom:'rto', text:'Elicits and addresses his specific worries (how serious it is, time off work, infecting others), and gives clear advice on avoiding NSAIDs and aspirin and what to expect day to day' },
      { dom:'gs',    text:'Safety-nets robustly: warning signs warranting urgent reassessment/admission, repeat malaria testing, and review \u2014 excluding malaria and recognising severe dengue, not reassured by one negative film' },
    ],
    worked:[
      { lbl:'Reframe', txt:'"With a fever after travelling, my first job is always to be sure it isn\u2019t malaria \u2014 and importantly, one negative test doesn\u2019t fully rule it out, so I\u2019ll repeat the blood films. We don\u2019t take chances with that."' },
      { lbl:'Name dengue', txt:'"That said, the headache behind your eyes, the deep \u2018breakbone\u2019 aching and the rash, just back from Thailand, fit dengue \u2014 a mosquito-borne infection. I\u2019ll send a specific test and check your blood count, as it can drop the platelets."' },
      { lbl:'Exposure history', txt:'"Tell me more \u2014 rural or city, any prophylaxis, bites, freshwater swimming, food and water, any unwell contacts? That helps me cover the other possibilities like typhoid."' },
      { lbl:'Warning signs', txt:'"Most dengue is self-limiting, but watch for warning signs \u2014 bad tummy pain, persistent vomiting, any bleeding, bruising or spots, or becoming very drowsy. Those mean hospital, urgently."' },
      { lbl:'Supportive care', txt:'"Treatment is fluids, rest and paracetamol. Crucially, AVOID ibuprofen and aspirin \u2014 they can worsen bleeding when platelets are low."' },
      { lbl:'Safety-net', txt:'"I\u2019ll repeat the malaria films and chase the dengue test. Come back urgently or go to A&E if any of those warning signs appear, or you can\u2019t keep fluids down."' },
    ],
    learning:'Fever in a RETURNING TRAVELLER demands a structured approach, and MALARIA must be excluded first as the must-not-miss \u2014 a single negative film does not exclude it, so repeat thick/thin films (\u00d73) and/or rapid antigen and keep a low threshold to refer. DENGUE (a mosquito-borne flavivirus common in SE Asia and the tropics, incubation usually <2 weeks) presents with high fever, severe RETRO-ORBITAL headache, marked MYALGIA/arthralgia ("breakbone fever"), rash, and often leucopenia and THROMBOCYTOPENIA, confirmed by NS1 antigen/serology. Take a structured travel/exposure history (where, when, rural/urban, activities, bites, prophylaxis/vaccinations, food/water, freshwater swimming, sexual/animal exposure) and build the differential (malaria, dengue, typhoid, hepatitis A, rickettsia, leptospirosis, viral haemorrhagic fever in specific regions \u2014 isolate/notify, COVID), investigating with FBC, LFTs, U&E, blood films \u00d73, dengue NS1/serology and cultures while monitoring platelets/haematocrit. Critically, recognise dengue WARNING SIGNS of severe/haemorrhagic disease needing admission \u2014 severe abdominal pain, persistent vomiting, mucosal bleeding/petechiae/bruising, lethargy/restlessness, rapid platelet fall/plasma leakage \u2014 and manage supportively with hydration, rest and PARACETAMOL while AVOIDING NSAIDs/aspirin (bleeding/platelet risk), notifying per requirements and safety-netting. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Returning-traveller fever \u00b7 exclude malaria (repeat films) \u00b7 dengue recognition + NS1/serology \u00b7 warning signs/admission \u00b7 avoid NSAIDs/aspirin',
      points:[
        { h:'Exclude malaria first', t:'Fever in a returning traveller = malaria until proven otherwise; a single negative film does not exclude it \u2014 repeat \u00d73/rapid antigen, low threshold to refer.' },
        { h:'Recognise dengue', t:'Retro-orbital headache, severe myalgia ("breakbone"), rash, leucopenia/thrombocytopenia, SE Asia, <2-week incubation. Confirm NS1/serology.' },
        { h:'Travel history & differential', t:'Where/when/activities/bites/prophylaxis/food-water/exposure. Differential: malaria, dengue, typhoid, hepatitis, rickettsia, leptospirosis, VHF (region), COVID.' },
        { h:'Investigations', t:'FBC, LFTs, U&E, blood films \u00d73, dengue NS1/serology, cultures; monitor platelets/haematocrit.' },
        { h:'Warning signs/admit', t:'Severe abdominal pain, persistent vomiting, bleeding/petechiae, lethargy, rapid platelet fall/plasma leakage \u2192 admit.' },
        { h:'Supportive care', t:'Hydration, rest, paracetamol. Avoid NSAIDs/aspirin (bleeding/platelet risk). Notify as required.' },
        { h:'Never do', t:'Never be reassured by one negative malaria film; never give NSAIDs/aspirin in suspected dengue; never miss warning signs; never skip the travel history.' },
        { h:'Safety-net & follow-up', t:'Repeat malaria testing; warning-sign advice (urgent reassessment/admission); chase dengue results; review.' }
      ]
    }
  };

  /* ===== 274. Needlestick injury ===== */
  const c274 = {
    id:'needlestick-injury', title:'"I jabbed myself with a used needle at work an hour ago \u2014 I\u2019m panicking about HIV and hepatitis. What do I do?"', type:'video', duration:12,
    meta:{ age:29, sex:'F', setting:'Face-to-face \u2014 occupational sharps/blood exposure.', system:'Occupational health / Urgent care \u2014 needlestick injury: first aid, risk assessment & PEP' },
    brief:'A 29-year-old healthcare worker (or in a relevant occupation), Erin, sustained a NEEDLESTICK from a used needle ~1 hour ago and is anxious about blood-borne viruses. The task is the structured needlestick/sharps-exposure response: IMMEDIATE FIRST AID (encourage bleeding, wash with soap and water, don\u2019t scrub/suck; irrigate mucosa/eyes); RISK ASSESSMENT (type of injury \u2014 percutaneous vs mucosal, hollow vs solid needle, depth, visible blood, source-patient status/risk for HIV/HBV/HCV); urgent referral to OCCUPATIONAL HEALTH/A&E for assessment and bloods (baseline serology for the recipient, and source testing with consent); consider HIV POST-EXPOSURE PROPHYLAXIS (PEP) urgently \u2014 most effective started ASAP (ideally within hours, up to ~72h) \u2014 if significant HIV risk; HEPATITIS B (check/boost vaccination status, HBV immunoglobulin if non-immune and high-risk source); HEPATITIS C (no PEP \u2014 baseline and follow-up testing/monitoring for seroconversion, early treatment if it occurs); ensure INCIDENT REPORTING and follow-up testing; and provide reassurance and psychological support (the anxiety is significant). The skill is first aid + structured risk assessment + urgent occ-health/PEP pathway + reassurance, not delay. No NG12 cancer link.',
    script:{
      opening:'"I stuck myself with a used needle at work about an hour ago \u2014 it bled a bit. I\u2019m really panicking \u2014 what if the patient had HIV or hepatitis? Have I caught something? What do I need to do right now?"',
      facts:[
        { topic:'Immediate first aid', text:'FIRST AID immediately: encourage the wound to BLEED freely, WASH with soap and running water (do NOT scrub or suck), and cover; for mucosal/eye splashes, irrigate copiously with water/saline. This is the first step regardless of source status.' },
        { topic:'Structured risk assessment', text:'RISK-ASSESS the exposure: type (PERCUTANEOUS vs mucosal/non-intact skin), needle type (HOLLOW-bore higher risk than solid), depth, VISIBLE BLOOD, and the SOURCE patient\u2019s blood-borne-virus status/risk (HIV, HBV, HCV). A deep percutaneous injury from a hollow needle with visible blood from a high-risk/positive source is higher risk.' },
        { topic:'Urgent occupational health / A&E', text:'Refer URGENTLY to OCCUPATIONAL HEALTH (or A&E out of hours) for formal assessment and BLOODS \u2014 baseline serology for the recipient and SOURCE testing (with the source\u2019s consent). Time matters, so don\u2019t delay. Document and REPORT the incident.' },
        { topic:'HIV PEP \u2014 urgent', text:'Consider HIV POST-EXPOSURE PROPHYLAXIS (PEP) if significant HIV risk \u2014 most effective started ASAP, ideally within HOURS and up to ~72 hours after exposure (then not worthwhile) \u2014 so the assessment is time-critical. PEP decisions are made via occ-health/specialist guidance based on risk.' },
        { topic:'Hepatitis B & C', text:'HEPATITIS B: check/ensure HBV VACCINATION status \u2014 booster or accelerated course if needed, and HBV immunoglobulin if non-immune with a high-risk/positive source. HEPATITIS C: no vaccine/PEP \u2014 do baseline and follow-up testing to detect SEROCONVERSION, with early antiviral treatment if it occurs.' },
        { topic:'Reporting, follow-up & support', text:'Ensure INCIDENT REPORTING, baseline and FOLLOW-UP TESTING (per protocol \u2014 e.g. weeks/months), and provide REASSURANCE and psychological support \u2014 acknowledge the significant anxiety, explain that transmission risk from a single exposure is generally low and that the pathway exists to protect her. Safety-net.' },
      ],
      ice:{ ideas:'Fears she\u2019s caught HIV/hepatitis; wants to know what to do now.', concerns:'Acquiring a blood-borne virus; significant anxiety/panic.', expectations:'Immediate action/reassurance. What she needs: first aid, structured risk assessment, urgent occ-health/A&E referral, HIV PEP consideration (time-critical), HBV/HCV management, reporting, follow-up testing, and reassurance.' },
      cues:['Needlestick from a used needle \u2014 immediate first aid (bleed, wash with soap/water, don\u2019t scrub/suck); irrigate mucosa.','Risk-assess (percutaneous vs mucosal, hollow needle, visible blood, source status); urgent occ-health/A&E for bloods + source testing.','HIV PEP is time-critical (ASAP, up to ~72h); HBV vaccine/immunoglobulin; HCV baseline + follow-up testing; report + reassure.']
    },
    checkpoints:[
      { dom:'tasks', text:'Gives immediate FIRST AID \u2014 encourage bleeding, wash with soap and running water (no scrubbing/sucking), irrigate mucosa/eyes' },
      { dom:'tasks', text:'Performs a structured RISK ASSESSMENT (percutaneous vs mucosal, hollow vs solid needle, depth, visible blood, source-patient HIV/HBV/HCV status/risk)' },
      { dom:'tasks', text:'Refers URGENTLY to OCCUPATIONAL HEALTH/A&E for assessment and bloods (recipient baseline + source testing with consent) and reports the incident \u2014 without delay' },
      { dom:'tasks', text:'Considers HIV PEP as TIME-CRITICAL (ASAP, ideally within hours, up to ~72h) based on risk, via occ-health/specialist guidance' },
      { dom:'tasks', text:'Manages HEPATITIS B (vaccination status/booster, immunoglobulin if non-immune + high-risk source) and HEPATITIS C (no PEP; baseline + follow-up testing for seroconversion)' },
      { dom:'rto',   text:'Provides REASSURANCE and psychological support, acknowledges the anxiety, explains that single-exposure transmission risk is generally low, and checks understanding' },
      { dom:'rto', text:'Calmly contains her panic and gives a clear step-by-step of what happens next and the timeline (first aid, bloods, occupational health, possible PEP), confirming she knows where to go now' },
      { dom:'gs',    text:'Safety-nets and follows up: incident reporting, baseline and follow-up testing per protocol, urgent occ-health/PEP pathway, and review \u2014 structured, time-critical management, not delay' },
    ],
    worked:[
      { lbl:'First aid first', txt:'"Let\u2019s act now. Make the wound bleed gently and wash it under running water with soap \u2014 don\u2019t scrub or suck it. You\u2019ve done the right thing coming straight away; time matters here."' },
      { lbl:'Risk assess', txt:'"A few quick questions: was it a deep jab with a hollow needle, was there visible blood, and do we know anything about the patient \u2014 any HIV or hepatitis risk? That tells us how urgently we act."' },
      { lbl:'Urgent pathway', txt:'"I\u2019m sending you straight to occupational health (or A&E) for proper assessment and baseline blood tests, and to test the source patient with their consent. We\u2019ll also report it as an incident."' },
      { lbl:'PEP', txt:'"If there\u2019s a real HIV risk, there\u2019s preventive medication \u2014 PEP \u2014 that works best started as soon as possible, within hours and up to three days. That\u2019s why this is time-critical."' },
      { lbl:'Hep B/C', txt:'"We\u2019ll check your hepatitis B vaccination is up to date and boost it if needed, and possibly give protective antibody if the source is high-risk. Hepatitis C has no jab, so we test now and again over the next weeks to catch it early if it happened."' },
      { lbl:'Reassure + safety-net', txt:'"I know this is frightening, but the chance of catching something from a single jab is generally low, and the whole system is set up to protect you. We\u2019ll arrange your follow-up tests and support you throughout."' },
    ],
    learning:'A NEEDLESTICK/sharps exposure needs a structured, time-critical response. Start with immediate FIRST AID: encourage the wound to bleed, wash with soap and running water (do not scrub or suck), and irrigate mucosa/eyes for splashes. RISK-ASSESS the exposure \u2014 percutaneous versus mucosal/non-intact skin, hollow-bore (higher risk) versus solid needle, depth, visible blood, and the SOURCE patient\u2019s HIV/HBV/HCV status/risk. Refer urgently to OCCUPATIONAL HEALTH (or A&E out of hours) for assessment and bloods \u2014 recipient baseline serology and source testing with consent \u2014 and report the incident. Consider HIV POST-EXPOSURE PROPHYLAXIS (PEP), which is most effective started as soon as possible (ideally within hours, up to ~72h, after which it is not worthwhile), so assessment is time-critical and made via occ-health/specialist guidance. For HEPATITIS B, check/ensure vaccination status (booster/accelerated course if needed) and give HBV immunoglobulin if the recipient is non-immune with a high-risk/positive source; for HEPATITIS C there is no vaccine or PEP, so perform baseline and follow-up testing to detect seroconversion with early antiviral treatment if it occurs. Ensure incident reporting, baseline and follow-up testing per protocol, and provide reassurance and psychological support \u2014 acknowledging the significant anxiety while explaining that single-exposure transmission risk is generally low \u2014 and safety-net. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Needlestick/sharps exposure \u00b7 first aid \u00b7 risk assessment \u00b7 occupational health/A&E \u00b7 HIV PEP (\u226472h) \u00b7 HBV vaccine/immunoglobulin \u00b7 HCV follow-up testing',
      points:[
        { h:'First aid', t:'Encourage bleeding, wash with soap and running water (no scrubbing/sucking), irrigate mucosa/eyes.' },
        { h:'Risk assessment', t:'Percutaneous vs mucosal, hollow vs solid needle, depth, visible blood, source HIV/HBV/HCV status/risk.' },
        { h:'Urgent occ-health/A&E', t:'Refer urgently for assessment + bloods (recipient baseline + source testing with consent); report the incident. Don\u2019t delay.' },
        { h:'HIV PEP', t:'Time-critical \u2014 most effective ASAP, within hours, up to ~72h. Decided via occ-health/specialist by risk.' },
        { h:'Hepatitis B', t:'Check/ensure HBV vaccination (booster/accelerated course); HBV immunoglobulin if non-immune + high-risk/positive source.' },
        { h:'Hepatitis C', t:'No vaccine/PEP; baseline + follow-up testing for seroconversion; early antiviral treatment if it occurs.' },
        { h:'Never do', t:'Never delay (PEP is time-critical); never scrub/suck the wound; never skip risk assessment/source testing/reporting; never omit follow-up testing.' },
        { h:'Safety-net & follow-up', t:'Incident reporting; baseline + protocol follow-up testing; PEP/occ-health pathway; reassurance and psychological support; review.' }
      ]
    }
  };

  /* ===== 275. Post-COVID syndrome (long COVID) ===== */
  const c275 = {
    id:'post-covid-syndrome', title:'"It\u2019s months since I had COVID but I\u2019m still exhausted, breathless and foggy \u2014 and crashing whenever I push myself"', type:'video', duration:12,
    meta:{ age:42, sex:'F', setting:'Face-to-face \u2014 persistent symptoms after COVID-19.', system:'General \u2014 post-COVID syndrome (long COVID): assessment, red flags & rehabilitation' },
    brief:'Ms Dana Whitfield, 42, has persistent symptoms >12 weeks after COVID-19 \u2014 profound FATIGUE, breathlessness, "brain FOG"/poor concentration, palpitations, and POST-EXERTIONAL malaise ("crashing" after activity) \u2014 not explained by another diagnosis, with significant functional impact. Recognise POST-COVID SYNDROME (long COVID: symptoms continuing >12 weeks after acute COVID-19, not explained by an alternative diagnosis), validate it as a real condition, and \u2014 critically \u2014 EXCLUDE alternative/serious causes and red flags rather than attributing everything to long COVID (e.g. new/worsening breathlessness or chest pain \u2192 exclude PE, cardiac disease, pneumonia; do basics: bloods \u2014 FBC, thyroid, ferritin, etc., ECG, sats, chest exam, and consider further tests by symptom). Use a holistic, multi-domain assessment (physical, cognitive, psychological, functional), screen mood, and manage with supportive REHABILITATION \u2014 PACING/energy conservation (avoid boom-and-bust given post-exertional malaise), graded return to activity guided by symptoms, symptom-specific management, occupational/return-to-work support, and referral to a long-COVID/post-COVID rehabilitation service where available. Validate, avoid dismissiveness, and safety-net. No NG12 cancer link.',
    script:{
      opening:'"I had COVID about four months ago and I\u2019m just not right. I\u2019m exhausted all the time, breathless going upstairs, my brain\u2019s foggy and I can\u2019t concentrate at work, and whenever I try to do more I crash badly for days. People think I should be over it. Is this in my head?"',
      facts:[
        { topic:'Recognise post-COVID syndrome', text:'POST-COVID SYNDROME (long COVID) = symptoms continuing or developing >12 weeks after acute COVID-19, not explained by an alternative diagnosis. Common features: profound FATIGUE, breathlessness, "brain FOG"/cognitive impairment, palpitations, chest tightness, sleep disturbance, and POST-EXERTIONAL malaise (crashing after activity). Recognise and VALIDATE it as a real, recognised condition \u2014 not "in your head".' },
        { topic:'Exclude alternatives/red flags \u2014 critical', text:'CRITICAL \u2014 do NOT attribute everything to long COVID without EXCLUDING alternative/serious causes: new/worsening breathlessness or chest pain (PE, cardiac disease, pneumonia), and other causes of fatigue (anaemia, thyroid, diabetes, etc.). Examine (sats, chest, heart), do basics (FBC, TFTs, ferritin, U&E, LFTs, glucose, ECG) and symptom-directed tests. Red flags warrant urgent assessment.' },
        { topic:'Holistic multi-domain assessment', text:'Assess HOLISTICALLY across domains \u2014 PHYSICAL (fatigue, breathlessness, exertional symptoms), COGNITIVE (memory/concentration), PSYCHOLOGICAL (mood, anxiety \u2014 screen), and FUNCTIONAL (work, daily life). Understand the impact and the post-exertional pattern, which shapes management.' },
        { topic:'Pacing & rehabilitation', text:'Manage with supportive REHABILITATION: PACING/energy conservation (avoid boom-and-bust, especially with post-exertional malaise \u2014 graded, symptom-guided activity rather than pushing through), symptom-specific management, sleep, breathing techniques, and psychological support; refer to a LONG-COVID/post-COVID rehabilitation service where available (multidisciplinary).' },
        { topic:'Function, work & validation', text:'Support FUNCTION and return to work (phased/adjustments, fit note as needed), validate the experience and the toll, and avoid dismissiveness \u2014 patients are often disbelieved. Set realistic expectations (recovery can be slow and fluctuating).' },
        { topic:'The agenda', text:'She fears it\u2019s "in her head" and feels disbelieved. Validate long COVID, exclude red flags/alternatives, assess multi-domain, manage with pacing/rehabilitation and work support, refer to a long-COVID service, and safety-net \u2014 not dismiss. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'Fears it\u2019s "in her head"/that she should be over it; feels disbelieved.', concerns:'The persistent fatigue/breathlessness/fog and crashing; impact on work; not being believed.', expectations:'Validation and help. What she needs: recognition of long COVID, exclusion of red flags/alternatives, multi-domain assessment, pacing/rehabilitation, work support, and referral \u2014 not dismissal.' },
      cues:['Fatigue + breathlessness + brain fog + post-exertional crashing >12 weeks after COVID, not otherwise explained \u2014 post-COVID syndrome; validate it.','EXCLUDE alternatives/red flags (breathlessness/chest pain \u2192 PE/cardiac/pneumonia; fatigue \u2192 anaemia/thyroid/diabetes) \u2014 don\u2019t attribute all to long COVID.','Manage with PACING/energy conservation (avoid boom-and-bust), rehabilitation, mood/work support, and long-COVID service referral.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises and VALIDATES POST-COVID SYNDROME (symptoms >12 weeks after COVID-19, not otherwise explained; fatigue, breathlessness, brain fog, post-exertional malaise) as a real condition' },
      { dom:'tasks', text:'EXCLUDES alternative/serious causes and red flags \u2014 breathlessness/chest pain (PE, cardiac, pneumonia), fatigue causes (anaemia, thyroid, diabetes) \u2014 with examination (sats/chest/heart), basic bloods and ECG, rather than attributing all to long COVID' },
      { dom:'tasks', text:'Assesses HOLISTICALLY across physical, cognitive, psychological and functional domains, screening mood and understanding the post-exertional pattern' },
      { dom:'tasks', text:'Manages with PACING/energy conservation (avoiding boom-and-bust), symptom-guided graded activity, symptom-specific management, and refers to a long-COVID/rehabilitation service where available' },
      { dom:'tasks', text:'Supports FUNCTION and return to work (phased/adjustments, fit note) and sets realistic, fluctuating-recovery expectations' },
      { dom:'rto',   text:'VALIDATES the experience (not "in your head"), counters the sense of being disbelieved, and checks understanding without dismissiveness' },
      { dom:'rto', text:'Explores the impact on her work, home and sense of self and what recovery would mean to her, and builds the rehabilitation plan around her own goals and priorities' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags warranting urgent assessment, results of basic investigations, pacing/rehabilitation plan, work support, referral, and review \u2014 validation + exclusion + rehabilitation, not dismissal' },
    ],
    worked:[
      { lbl:'Validate', txt:'"First \u2014 this is not in your head. What you\u2019re describing is post-COVID syndrome, or long COVID: real, recognised symptoms that can persist for months. I\u2019m glad you came, and I believe you."' },
      { lbl:'Exclude red flags', txt:'"That said, I won\u2019t just blame everything on COVID \u2014 your breathlessness deserves checking, so let me examine your chest and heart, check your oxygen, do a heart tracing and some bloods (count, thyroid, iron) to rule out other causes."' },
      { lbl:'Assess the whole picture', txt:'"Let\u2019s look at all of it \u2014 the energy, the breathing, the brain fog, your mood, and how it\u2019s affecting work and daily life. The crashing after activity is an important pattern that changes how we approach this."' },
      { lbl:'Pacing', txt:'"Because you crash when you push, the key is pacing \u2014 working within your energy envelope and building up gradually and gently, rather than boom-and-bust. I\u2019ll show you how, and there\u2019s a long-COVID rehab service I\u2019ll refer you to."' },
      { lbl:'Work support', txt:'"Let\u2019s sort work too \u2014 a phased return or adjustments, and a fit note if you need one. Recovery can be slow and up-and-down, and that\u2019s normal."' },
      { lbl:'Safety-net', txt:'"Come back urgently if your breathlessness suddenly worsens, you get chest pain or palpitations with feeling faint \u2014 those need checking promptly. Otherwise we\u2019ll review your results and your progress together."' },
    ],
    learning:'POST-COVID SYNDROME (long COVID) is symptoms continuing or developing more than 12 weeks after acute COVID-19 and not explained by an alternative diagnosis \u2014 commonly profound fatigue, breathlessness, "brain fog"/cognitive impairment, palpitations, chest tightness, sleep disturbance, and POST-EXERTIONAL malaise (crashing after activity) \u2014 and the first step is to recognise and VALIDATE it as a real, recognised condition, countering the patient\u2019s fear that it is "in their head". Critically, do NOT attribute everything to long COVID without EXCLUDING alternative/serious causes and red flags: new or worsening breathlessness or chest pain should prompt exclusion of PE, cardiac disease and pneumonia, and fatigue should prompt basics (FBC, thyroid, ferritin, U&E, LFTs, glucose), with examination (sats, chest, heart), an ECG, and symptom-directed tests. Assess holistically across physical, cognitive, psychological and functional domains, screen mood, and understand the post-exertional pattern, which shapes management. Manage with supportive REHABILITATION centred on PACING/energy conservation (avoiding boom-and-bust, especially with post-exertional malaise \u2014 graded, symptom-guided activity rather than pushing through), symptom-specific management, sleep and breathing techniques, and psychological support, referring to a long-COVID/post-COVID rehabilitation service where available. Support function and return to work (phased return/adjustments, fit note), validate the experience and avoid dismissiveness, set realistic expectations of slow and fluctuating recovery, and safety-net for red flags. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG188 post-COVID-19 syndrome \u00b7 >12 weeks, not otherwise explained \u00b7 exclude alternatives/red flags \u00b7 holistic assessment \u00b7 pacing/rehabilitation \u00b7 validation',
      points:[
        { h:'Recognise & validate', t:'Symptoms >12 weeks after COVID-19, not otherwise explained: fatigue, breathlessness, brain fog, palpitations, post-exertional malaise. Real, recognised \u2014 not "in your head".' },
        { h:'Exclude alternatives', t:'Don\u2019t attribute all to long COVID \u2014 breathlessness/chest pain (PE/cardiac/pneumonia), fatigue (anaemia/thyroid/diabetes). Examine (sats/chest/heart), bloods, ECG, symptom-directed tests.' },
        { h:'Holistic assessment', t:'Physical, cognitive, psychological, functional domains; screen mood; understand the post-exertional pattern.' },
        { h:'Pacing & rehabilitation', t:'Pacing/energy conservation (avoid boom-and-bust), graded symptom-guided activity, symptom-specific management, breathing/sleep, psychological support; long-COVID rehab service referral.' },
        { h:'Function & work', t:'Phased return/adjustments, fit note; realistic, fluctuating-recovery expectations.' },
        { h:'Validate', t:'Counter the sense of being disbelieved; avoid dismissiveness \u2014 patients are often not believed.' },
        { h:'Never do', t:'Never dismiss as "in your head"; never attribute all symptoms to long COVID without excluding red flags; never advise pushing through (post-exertional malaise); never skip basic investigations.' },
        { h:'Safety-net & follow-up', t:'Red flags (sudden breathlessness/chest pain/palpitations with syncope) \u2192 urgent; results review; pacing/rehab plan; work support; referral; review.' }
      ]
    }
  };

  /* ===== 276. Tinea pedis ===== */
  const c276 = {
    id:'tinea-pedis', title:'"The skin between my toes is itchy, flaky and cracked, and my feet smell \u2014 I\u2019ve tried everything"', type:'video', duration:12,
    meta:{ age:34, sex:'M', setting:'Face-to-face \u2014 itchy, scaly feet.', system:'Dermatology \u2014 tinea pedis (athlete\u2019s foot): diagnosis, treatment & the diabetic caveat' },
    brief:'Mr Leon Park, 34 (gym-goer, occlusive footwear), has itchy, flaky, MACERATED skin between the TOES (especially 4th web space) with scaling on the soles and odour \u2014 TINEA PEDIS (athlete\u2019s foot, a dermatophyte fungal infection). Recognise it clinically (interdigital maceration/scaling, itch; moccasin-type scaling of soles; provoked by sweating/occlusive footwear/communal showers); distinguish from contact dermatitis, eczema, erythrasma and pitted keratolysis; check for associated TINEA UNGUIUM (nail infection \u2014 reservoir for recurrence) and tinea elsewhere; MANAGE with topical ANTIFUNGALS (e.g. terbinafine/imidazole cream) for an adequate course, foot HYGIENE (keep feet dry, change socks, avoid occlusive footwear, dry between toes, antifungal powder, don\u2019t share towels, footwear in communal areas), treat nail involvement (often needs ORAL antifungal \u2014 confirm by sampling first), and consider oral antifungals for extensive/refractory disease; and \u2014 importantly \u2014 recognise the DIABETIC/immunocompromised caveat (tinea/maceration is a portal for bacterial infection/cellulitis, so foot care and prompt treatment matter more). Reassure and safety-net. No NG12 cancer link.',
    script:{
      opening:'"The skin between my toes has gone really itchy, flaky and a bit cracked and soggy, and honestly my feet smell. I\u2019m at the gym a lot. I\u2019ve tried various creams and it keeps coming back. What is it and how do I get rid of it?"',
      facts:[
        { topic:'Recognise tinea pedis', text:'TINEA PEDIS (athlete\u2019s foot) is a dermatophyte fungal infection: itchy, flaky, MACERATED/cracked skin between the TOES (especially the 4th web space), scaling/"moccasin" distribution on the soles, odour, provoked by sweating, occlusive footwear and communal showers/gyms. His interdigital maceration and gym exposure fit.' },
        { topic:'Differential', text:'Distinguish from contact dermatitis/eczema (itch, but different distribution/history), ERYTHRASMA (corynebacterial, coral-red under Wood\u2019s lamp), pitted keratolysis (pitting, odour), and bacterial infection. Skin scrapings for mycology help if uncertain or before oral treatment.' },
        { topic:'Check nails & other sites', text:'Check for TINEA UNGUIUM (onychomycosis \u2014 thickened/discoloured/crumbly nails), which is a RESERVOIR for recurrent foot infection, and tinea elsewhere (groin/cruris, hands). Untreated nail infection drives recurrence; confirm by nail sampling before oral therapy.' },
        { topic:'Manage', text:'MANAGE with a topical ANTIFUNGAL (terbinafine or an imidazole cream) for an adequate course (continue beyond clearance), plus FOOT HYGIENE \u2014 keep feet dry, dry thoroughly between toes, change socks/avoid occlusive footwear, antifungal powder in shoes, don\u2019t share towels, wear footwear in communal showers. For extensive/refractory tinea pedis or nail involvement, consider ORAL antifungal (e.g. terbinafine) \u2014 sample first to confirm.' },
        { topic:'Diabetic/immunocompromised caveat', text:'IMPORTANT \u2014 in people with DIABETES or immunocompromise, tinea pedis/interdigital maceration is a PORTAL for bacterial entry and CELLULITIS \u2014 so foot care, prompt treatment and vigilance for secondary infection matter more, and threshold for review is lower.' },
        { topic:'The agenda', text:'He wants it gone and stopped from recurring. Recognise tinea pedis, treat with topical antifungal + hygiene, check/treat nail reservoir (oral if needed), advise on prevention, note the diabetic caveat, and safety-net for secondary infection. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'A recurring foot/skin problem; frustrated creams haven\u2019t worked.', concerns:'The itch, cracking, odour; recurrence; how to clear it.', expectations:'A cure/something that works. What he needs: recognition of tinea pedis, topical antifungal + hygiene, treatment of any nail reservoir, prevention advice, and the diabetic caveat.' },
      cues:['Itchy, flaky, macerated skin between the toes + sole scaling + odour, gym/occlusive footwear \u2014 tinea pedis (athlete\u2019s foot).','Check nails (onychomycosis = reservoir for recurrence) and other sites; sample before oral antifungal.','Topical antifungal + foot hygiene; oral antifungal for extensive/nail disease; diabetic/immunocompromised \u2192 cellulitis-portal caveat.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises TINEA PEDIS (interdigital maceration/scaling, sole "moccasin" scaling, itch, odour; sweating/occlusive footwear/gym) as a dermatophyte infection' },
      { dom:'tasks', text:'Distinguishes it from contact dermatitis/eczema, erythrasma and pitted keratolysis, using skin scrapings if uncertain or before oral therapy' },
      { dom:'tasks', text:'Checks for TINEA UNGUIUM (nail reservoir for recurrence) and tinea elsewhere, sampling nails before oral treatment' },
      { dom:'tasks', text:'Manages with a topical ANTIFUNGAL (adequate course) plus FOOT HYGIENE (dry feet/between toes, change socks/footwear, antifungal powder, communal-shower footwear, no towel sharing), and considers ORAL antifungal for extensive/refractory/nail disease' },
      { dom:'tasks', text:'Recognises the DIABETIC/immunocompromised caveat \u2014 tinea/maceration as a portal for bacterial cellulitis \u2014 warranting foot care and a lower review threshold' },
      { dom:'rto',   text:'Explains the diagnosis and why recurrence happens (nail reservoir/hygiene), and engages him in prevention, checking understanding' },
      { dom:'rto', text:'Negotiates a realistic foot-hygiene and treatment routine that fits his lifestyle, and checks he is willing and able to keep it up to prevent recurrence' },
      { dom:'gs',    text:'Safety-nets and follows up: review if not improving/refractory (oral antifungal/sampling), signs of secondary infection/cellulitis (especially in diabetics), and prevention to reduce recurrence' },
    ],
    worked:[
      { lbl:'Name it', txt:'"This is athlete\u2019s foot \u2014 a fungal infection of the skin, very common with gym use and sweaty, enclosed shoes. The soggy, itchy skin between the toes is classic."' },
      { lbl:'Why it recurs', txt:'"It keeps coming back for two main reasons \u2014 the warm damp environment, and sometimes the nails get infected and act as a reservoir. Let me check your nails."' },
      { lbl:'Treat + hygiene', txt:'"An antifungal cream like terbinafine, used properly and continued a bit beyond clearing, should sort the skin. Just as important: dry carefully between the toes, change socks, let shoes air, use antifungal powder, and wear flip-flops in communal showers."' },
      { lbl:'Nails/oral', txt:'"If the nails are involved, creams won\u2019t reach them \u2014 we\u2019d take a clipping to confirm and then often use a course of antifungal tablets, which also helps stop the skin reinfecting."' },
      { lbl:'Diabetic caveat', txt:'"One thing \u2014 if you ever develop diabetes or your immune system\u2019s low, this matters more, because cracked skin can let bacteria in and cause a skin infection. So keep on top of foot care."' },
      { lbl:'Safety-net', txt:'"Come back if it doesn\u2019t clear with the cream and hygiene, or if the foot becomes red, hot, swollen or painful \u2014 that could be a spreading infection needing antibiotics."' },
    ],
    learning:'TINEA PEDIS (athlete\u2019s foot) is a dermatophyte fungal infection recognised by itchy, flaky, MACERATED/cracked skin between the toes (especially the 4th web space), scaling in a "moccasin" distribution on the soles, and odour, provoked by sweating, occlusive footwear and communal showers/gyms. Distinguish it from contact dermatitis/eczema, erythrasma (coral-red under Wood\u2019s lamp) and pitted keratolysis, using skin scrapings for mycology if uncertain or before oral therapy. Check for TINEA UNGUIUM (onychomycosis \u2014 thickened/discoloured/crumbly nails), which is a reservoir for recurrent infection, and for tinea elsewhere, sampling nails before oral treatment. Manage with a topical ANTIFUNGAL (terbinafine or an imidazole cream) for an adequate course continued beyond clearance, plus foot HYGIENE \u2014 keep feet dry, dry thoroughly between the toes, change socks and avoid occlusive footwear, use antifungal powder, avoid sharing towels and wear footwear in communal showers \u2014 and consider an ORAL antifungal for extensive/refractory disease or nail involvement (after sampling). Importantly, in people with DIABETES or immunocompromise, tinea pedis/interdigital maceration is a portal for bacterial entry and CELLULITIS, so foot care, prompt treatment and vigilance for secondary infection matter more and the threshold for review is lower. Reassure, address recurrence (nail reservoir/hygiene), and safety-net for secondary infection. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Tinea pedis (athlete\u2019s foot) \u00b7 topical antifungal + hygiene \u00b7 nail reservoir (onychomycosis) \u00b7 oral antifungal for extensive/nail disease \u00b7 diabetic cellulitis caveat',
      points:[
        { h:'Recognise', t:'Itchy, flaky, macerated interdigital skin (4th web space), sole "moccasin" scaling, odour; sweating/occlusive footwear/gym. Dermatophyte infection.' },
        { h:'Differential', t:'Contact dermatitis/eczema, erythrasma (coral-red, Wood\u2019s lamp), pitted keratolysis. Skin scrapings if uncertain/before oral therapy.' },
        { h:'Check nails/sites', t:'Onychomycosis = reservoir for recurrence; check other sites (groin/hands). Sample nails before oral treatment.' },
        { h:'Manage', t:'Topical antifungal (adequate course, continue beyond clearance) + foot hygiene (dry feet/between toes, change socks/footwear, antifungal powder, communal-shower footwear, no towel sharing).' },
        { h:'Oral antifungal', t:'For extensive/refractory disease or nail involvement (e.g. terbinafine) \u2014 confirm by sampling first.' },
        { h:'Diabetic caveat', t:'In diabetes/immunocompromise, maceration is a portal for cellulitis \u2014 foot care, prompt treatment, lower review threshold.' },
        { h:'Never do', t:'Never ignore an untreated nail reservoir driving recurrence; never start oral antifungal without sampling; never overlook the diabetic cellulitis risk.' },
        { h:'Safety-net & follow-up', t:'Review if not improving/refractory (oral/sampling); signs of cellulitis (red/hot/swollen/painful) \u2192 antibiotics; prevention to reduce recurrence.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c273, c274, c275, c276);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'dengue-fever': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: { name:'Aaron Bell', age:'24 years \u00b7 male', pmh:['Fever ~4 days after returning from Thailand; retro-orbital headache, severe myalgia ("breakbone"), rash','One negative malaria film at walk-in','Check FBC (thrombocytopenia/leucopenia)'], meds:['None'], allergy:'NKDA', recent:'"Back from Thailand with high fever, headache behind my eyes, aching all over."', reason:'Face-to-face \u2014 fever in a returning traveller.' },
      timeMap:[
        { t:'0\u20102', h:'Exclude malaria first', d:'Returning-traveller fever = malaria until excluded; one negative film insufficient \u2014 repeat \u00d73/refer.' },
        { t:'2\u20104', h:'Recognise dengue', d:'Retro-orbital headache + breakbone myalgia + rash + thrombocytopenia, SE Asia \u2014 NS1/serology.' },
        { t:'4\u20107', h:'Travel hx + investigate', d:'Exposure history; FBC/LFTs/films \u00d73/cultures; monitor platelets/haematocrit.' },
        { t:'7\u20109', h:'Warning signs', d:'Abdominal pain, vomiting, bleeding/petechiae, lethargy, platelet fall \u2192 admit.' },
        { t:'9\u201012', h:'Supportive + safety-net', d:'Hydration/paracetamol; AVOID NSAIDs/aspirin; notify; warning-sign advice.' }
      ],
      wordPics:{ fail:'Reassured by one negative malaria film; misses dengue/warning signs; gives NSAIDs.', pass:'Excludes malaria (repeat films), recognises dengue, and manages supportively avoiding NSAIDs.', exc:'Approaches as returning-traveller fever, excludes malaria (repeat films), recognises/confirms dengue, takes exposure history, recognises warning signs/admission, and manages supportively avoiding NSAIDs/aspirin.' },
      avoid:[
        { dont:'"Your malaria test was negative, so it\u2019s just a viral bug."', instead:'"One negative film doesn\u2019t exclude malaria \u2014 I\u2019ll repeat it \u2014 and this looks like dengue."', why:'A single negative film does not exclude malaria.' },
        { dont:'"Take ibuprofen for the aches and fever."', instead:'"Use paracetamol, not ibuprofen or aspirin \u2014 they can worsen bleeding in dengue."', why:'NSAIDs/aspirin raise bleeding risk with low platelets in dengue.' },
        { dont:'(No warning-sign advice) sending home without safety-netting.', instead:'"Bad tummy pain, vomiting, bleeding/bruising or drowsiness mean hospital urgently."', why:'Severe/haemorrhagic dengue needs urgent admission.' }
      ]
    },

    'needlestick-injury': {
      ceg: ['Urgent & unscheduled care', 'Professionalism & ethics'],
      stem: { name:'Erin', age:'29 years \u00b7 female (healthcare worker)', pmh:['Needlestick from a used needle ~1 hour ago; bled','Anxious re HIV/hepatitis','HBV vaccination status to confirm'], meds:['None'], allergy:'NKDA', recent:'"I jabbed myself with a used needle an hour ago \u2014 panicking about HIV and hepatitis."', reason:'Face-to-face \u2014 occupational sharps exposure.' },
      timeMap:[
        { t:'0\u20102', h:'First aid', d:'Encourage bleeding, wash with soap/water (no scrub/suck); irrigate mucosa.' },
        { t:'2\u20104', h:'Risk assess', d:'Percutaneous vs mucosal, hollow needle, visible blood, source HIV/HBV/HCV status.' },
        { t:'4\u20106', h:'Urgent occ-health/A&E', d:'Assessment + bloods (recipient baseline + source testing w/ consent); report.' },
        { t:'6\u20109', h:'HIV PEP', d:'Time-critical (ASAP, \u226472h) if HIV risk \u2014 via occ-health/specialist.' },
        { t:'9\u201012', h:'HBV/HCV + support', d:'HBV vaccine/immunoglobulin; HCV baseline+follow-up; reporting; reassurance.' }
      ],
      wordPics:{ fail:'Delays; no first aid/risk assessment; misses time-critical HIV PEP; no follow-up testing.', pass:'Gives first aid, risk-assesses, and refers urgently for occ-health/PEP with HBV/HCV management.', exc:'Gives first aid, risk-assesses, refers urgently to occ-health/A&E (bloods + source testing), considers time-critical HIV PEP, manages HBV/HCV, reports, and reassures with follow-up testing.' },
      avoid:[
        { dont:'"Just wash it and keep an eye on it; book in if you feel unwell."', instead:'"This needs urgent occupational-health assessment now \u2014 HIV PEP is time-critical."', why:'Delay risks missing the PEP window (best ASAP, \u226472h).' },
        { dont:'(Scrubbing/sucking) advising aggressive wound care.', instead:'"Encourage bleeding and wash with soap and water \u2014 don\u2019t scrub or suck it."', why:'Scrubbing/sucking is not recommended.' },
        { dont:'(No source testing) ignoring source-patient status.', instead:'"We\u2019ll test the source patient with their consent to guide PEP and follow-up."', why:'Source status drives risk assessment and PEP decisions.' }
      ]
    },

    'post-covid-syndrome': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: { name:'Dana Whitfield', age:'42 years \u00b7 female', pmh:['Fatigue, breathlessness, brain fog, palpitations >12 weeks after COVID-19','\u26a0 Post-exertional malaise ("crashing"); significant work/functional impact','Feels disbelieved'], meds:['None'], allergy:'NKDA', recent:'"Months since COVID and I\u2019m still exhausted, breathless and foggy \u2014 crashing when I push myself."', reason:'Face-to-face \u2014 persistent post-COVID symptoms.' },
      timeMap:[
        { t:'0\u20102', h:'Validate', d:'Post-COVID syndrome is real, recognised; not "in your head".' },
        { t:'2\u20105', h:'Exclude red flags', d:'Breathlessness/chest pain \u2192 PE/cardiac/pneumonia; fatigue bloods; exam/sats/ECG.' },
        { t:'5\u20107', h:'Holistic assessment', d:'Physical/cognitive/psychological/functional; screen mood; post-exertional pattern.' },
        { t:'7\u201010', h:'Pacing/rehab', d:'Energy conservation (avoid boom-and-bust), graded symptom-guided activity; long-COVID service referral.' },
        { t:'10\u201012', h:'Work + safety-net', d:'Phased return/fit note; red-flag advice; review.' }
      ],
      wordPics:{ fail:'Dismisses as "in your head"; or attributes all to long COVID without excluding red flags; advises pushing through.', pass:'Validates, excludes red flags, and manages with pacing/rehab and work support.', exc:'Validates post-COVID syndrome, excludes alternatives/red flags, assesses multi-domain, manages with pacing/rehabilitation (avoiding boom-and-bust) and work support, refers to a long-COVID service, and safety-nets.' },
      avoid:[
        { dont:'"Your tests will be fine \u2014 it\u2019s probably just stress, push through it."', instead:'"This is long COVID \u2014 real \u2014 and pushing through worsens the crashing; pacing is key, and I\u2019ll still check for other causes."', why:'Dismissing it and advising pushing through harms a post-exertional-malaise patient.' },
        { dont:'(No exclusion) blaming all symptoms on long COVID.', instead:'"Your breathlessness deserves examining and a heart tracing/bloods to exclude other causes."', why:'Red flags (PE/cardiac) must be excluded.' },
        { dont:'(No work support) ignoring the functional impact.', instead:'"Let\u2019s arrange a phased return and adjustments, with a fit note if needed."', why:'Function/return-to-work support is central.' }
      ]
    },

    'tinea-pedis': {
      ceg: ['New & undifferentiated presentations', 'Long-term conditions & cancer'],
      stem: { name:'Leon Park', age:'34 years \u00b7 male', pmh:['Itchy, flaky, macerated skin between toes (4th web space) + sole scaling + odour','Gym-goer; occlusive footwear; recurrent','Check nails (onychomycosis reservoir)'], meds:['None'], allergy:'NKDA', recent:'"Skin between my toes is itchy, flaky and cracked, and my feet smell \u2014 it keeps coming back."', reason:'Face-to-face \u2014 itchy, scaly feet.' },
      timeMap:[
        { t:'0\u20102', h:'Recognise', d:'Interdigital maceration/scaling + odour + gym/occlusive footwear = tinea pedis.' },
        { t:'2\u20104', h:'Differential + nails', d:'Vs dermatitis/erythrasma/pitted keratolysis; check nails (reservoir); sample if uncertain/before oral.' },
        { t:'4\u20107', h:'Treat + hygiene', d:'Topical antifungal (adequate course) + foot hygiene (dry, socks, powder, communal footwear).' },
        { t:'7\u20109', h:'Oral if needed', d:'Extensive/refractory/nail disease \u2192 oral antifungal after sampling.' },
        { t:'9\u201012', h:'Diabetic caveat + safety-net', d:'Cellulitis portal in diabetes/immunocompromise; review if not improving/secondary infection.' }
      ],
      wordPics:{ fail:'Treats skin only, ignores nail reservoir/hygiene; misses the diabetic cellulitis caveat; starts oral antifungal without sampling.', pass:'Recognises tinea pedis, treats with topical antifungal + hygiene, and checks nails.', exc:'Recognises tinea pedis, distinguishes mimics, treats with topical antifungal + hygiene, checks/treats the nail reservoir (oral after sampling), notes the diabetic cellulitis caveat, and safety-nets.' },
      avoid:[
        { dont:'"Here\u2019s a cream \u2014 that should clear it." (ignoring recurrence drivers)', instead:'"We\u2019ll treat the skin and sort the cause of recurrence \u2014 hygiene and any infected nails."', why:'A nail reservoir and poor hygiene drive recurrence.' },
        { dont:'(Oral without sampling) starting tablets for presumed nail infection.', instead:'"I\u2019ll take a nail clipping to confirm before any antifungal tablets."', why:'Confirm onychomycosis before oral antifungals.' },
        { dont:'(Ignoring diabetes) treating as trivial in an at-risk patient.', instead:'"In diabetes, cracked skin can let infection in \u2014 foot care matters more, and watch for cellulitis."', why:'Tinea is a portal for cellulitis in diabetics/immunocompromised.' }
      ]
    }

  });

})();
