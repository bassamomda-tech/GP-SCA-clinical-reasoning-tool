/* ============================================================
   Reasoning GP — Case Library batch 76 (SCA revision notes):
   Dengue fever; needlestick injury; post-COVID syndrome (long COVID);
   tinea pedis (athlete's foot). No NG12 cancer pathway. After 75.
   ============================================================ */
(function(){

  /* ===== 273. Dengue fever ===== */
  const c273 = {
    id: 'dengue-fever',
    title: '"I came back from Thailand a few days ago with a high fever, splitting headache behind my eyes, and aching all over"',
    type: 'video',
    duration: 12,
    meta: {
      age: 24,
      sex: 'M',
      setting: 'Video consultation \u2014 fever in a returning traveller',
      system: 'Infectious disease / Travel \u2014 dengue & the returning-traveller fever',
      checked: 'October 2026'
    },
    brief: 'Mr Aaron Bell, 24, returned from SE Asia ~4 days ago with high FEVER, severe HEADACHE/RETRO-ORBITAL pain, MYALGIA/arthralgia ("breakbone"), and a rash; malaria film negative. Recognise that FEVER IN A RETURNING TRAVELLER demands a structured approach \u2014 always EXCLUDE MALARIA first (the must-not-miss; a single negative film does not exclude it \u2014 three negative samples over 24\u201348 hours are needed, UK malaria treatment guidelines 2016, so arrange same-day hospital assessment for repeat films) \u2014 then consider DENGUE (mosquito-borne flavivirus; incubation typically <2 weeks; fever, retro-orbital headache, severe myalgia, rash, often leucopenia/THROMBOCYTOPENIA), plus typhoid, hepatitis, rickettsia, viral haemorrhagic fever (depending on area), COVID/respiratory. Take a TRAVEL/exposure history (where, when, activities, bites, prophylaxis, sexual/food/water exposure), use the walk-in centre\u2019s observations, look at the rash on video, and arrange same-day hospital assessment to examine and investigate (FBC \u2014 thrombocytopenia/leucopenia, LFTs, blood films \u00d73 for malaria, dengue serology/NS1, cultures), screen for sepsis (NICE NG253), and \u2014 critically \u2014 recognise dengue WARNING SIGNS and severe dengue (WHO 2009 classification, international: abdominal pain, persistent vomiting, fluid accumulation, mucosal bleeding, lethargy/restlessness, liver enlargement, rising haematocrit with rapid platelet fall), most likely in the critical phase around the time the fever settles (often days 3\u20137), needing admission; manage supportively (hydration, paracetamol \u2014 AVOID NSAIDs/aspirin given bleeding/platelet risk); laboratories report confirmed dengue to UKHSA, while clinicians notify suspected malaria or enteric fever; mention that a second dengue infection carries a higher risk of severe disease (Qdenga can be considered for people aged 4 and over who have had dengue, Green Book chapter 15a); and safety-net. The skill is the returning-traveller approach, excluding malaria, recognising dengue and its warning signs, and avoiding NSAIDs. Recorded findings available to the candidate (no in-person examination in this remote consultation): Walk-in centre, yesterday: temperature 39.2 \u00b0C, pulse 104, BP 118/72, respiratory rate 18, SpO2 98%, capillary refill under 2 seconds; blanching maculopapular rash on the trunk; one malaria rapid test and thick/thin film negative; no other bloods.',
    script: {
      opening: '"I got back from Thailand four days ago and I feel awful \u2014 high fever, a pounding headache right behind my eyes, and aching all over, like my bones hurt. I\u2019ve come out in a rash too. The walk-in did a malaria test and it was negative. What is it?"',
      facts: [
        {
          topic: 'The illness',
          text: 'Fever started 2 days after getting back (so 2 days ago), up to 39.5 on his thermometer. Severe headache behind the eyes, worse moving his eyes. Aching muscles and joints \u2014 "like my bones hurt". Rash on his chest and arms since this morning, red and blotchy; it fades when he presses it (will show the camera).'
        },
        {
          topic: 'Walk-in centre yesterday',
          text: 'If asked: "They did one malaria finger-prick test and a blood film, both negative, and said to see my GP." They wrote down his temperature 39.2, pulse 104, BP 118/72, oxygen 98%. No other bloods were done.'
        },
        {
          topic: 'Warning-sign questions (all negative now)',
          text: 'No tummy pain, not vomiting, no bleeding gums or nosebleeds, no blood in urine or stools, no black stools, no new bruising or tiny red spots. Not drowsy or confused. Drinking about 2 litres a day; passing urine normally. No breathlessness, no neck stiffness.'
        },
        {
          topic: 'The trip',
          text: 'Three weeks backpacking: Bangkok, then rural north (Chiang Mai, jungle trekking), then the islands. Lots of mosquito bites, used repellent "sometimes". No malaria tablets \u2014 "they said Thailand was low risk". No fresh-water swimming, no animal bites. Had unprotected sex once with a fellow traveller (only if asked sensitively). No tattoos or injections abroad. Travel companion, Josh, is well.'
        },
        {
          topic: 'Health and medicines',
          text: 'Fit and well. Only paracetamol so far; was about to buy ibuprofen. No allergies. Had typhoid and hepatitis A jabs before travelling.'
        },
        {
          topic: 'Social',
          text: 'Lives with parents. Trainee accountant; due back at work tomorrow. Mum can drive him to hospital.'
        },
        {
          topic: 'How to play it',
          text: 'Flushed, tired, aching, lying on the sofa. Reassured by the negative malaria test: "So it could still be malaria?" Ask how long it will last and about work. Agree to hospital tests today once the reason is explained.'
        }
      ],
      ice: {
        ideas: '"Some travel bug. The malaria test was negative, so I guessed not that."',
        concerns: '"Whether it\u2019s serious. A girl in our hostel ended up in hospital with something." Worried about missing work in his first year of training.',
        expectations: '"To know what it is and get something to feel better \u2014 ibuprofen, probably."'
      },
      cues: [
        '"The malaria test was negative" \u2014 false reassurance; one negative test does not exclude malaria.',
        '"I was going to get ibuprofen" \u2014 NSAIDs to avoid in possible dengue.',
        '"Behind my eyes, like my bones hurt" \u2014 classic dengue features to pick up.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Approaches FEVER IN A RETURNING TRAVELLER structurally and EXCLUDES MALARIA first \u2014 recognising a single negative film does not exclude it (three samples over 24\u201348 hours, UK malaria guidelines 2016 \u2014 same-day hospital assessment)'
      },
      {
        dom: 'dg',
        text: 'Recognises DENGUE (retro-orbital headache, severe myalgia, rash, leucopenia/thrombocytopenia, SE Asia, <2-week incubation) and confirms with RT-PCR/NS1/serology'
      },
      {
        dom: 'dg',
        text: 'Takes a structured TRAVEL/exposure history and constructs the differential (malaria, dengue, typhoid, hepatitis, rickettsia, leptospirosis, VHF by region, COVID)'
      },
      {
        dom: 'dg',
        text: 'Investigates appropriately via same-day hospital assessment (FBC, LFTs, U&E, blood films \u00d73, dengue NS1/serology, cultures), uses the recorded observations for a sepsis screen (NICE NG253) and ensures they are repeated at the same-day assessment, and monitors platelets/haematocrit'
      },
      {
        dom: 'dg',
        text: 'Recognises dengue WARNING SIGNS needing ADMISSION (critical phase as the fever settles) and manages supportively (hydration, paracetamol), AVOIDING NSAIDs/aspirin, knowing the laboratory reports confirmed dengue (clinicians notify suspected malaria/enteric fever)'
      },
      {
        dom: 'ro',
        text: 'Explains the returning-traveller reasoning clearly, addresses his concern, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Elicits and addresses his specific worries (how serious it is, time off work, infecting others), and gives clear advice on avoiding NSAIDs and aspirin and what to expect day to day'
      },
      {
        dom: 'cm',
        text: 'Safety-nets robustly: warning signs warranting urgent reassessment/admission (A&E or 999), same-day repeat malaria testing, and review, with advice before future travel (second infection risk) \u2014 excluding malaria and recognising severe dengue, not reassured by one negative film'
      }
    ],
    worked: [
      {
        lbl: 'Reframe',
        txt: '"With a fever after travelling, my first job is always to be sure it isn\u2019t malaria \u2014 and importantly, one negative test doesn\u2019t fully rule it out \u2014 it needs three over a day or two \u2014 so I\u2019m sending you to the hospital\u2019s acute team today for repeat blood films. We don\u2019t take chances with that."'
      },
      {
        lbl: 'Name dengue',
        txt: '"That said, the headache behind your eyes, the deep \u2018breakbone\u2019 aching and the rash, just back from Thailand, fit dengue \u2014 a mosquito-borne infection. They\u2019ll send a specific test and check your blood count, as it can drop the platelets."'
      },
      {
        lbl: 'Exposure history',
        txt: '"Tell me more \u2014 rural or city, any prophylaxis, bites, freshwater swimming, food and water, any unwell contacts? That helps me cover the other possibilities like typhoid."'
      },
      {
        lbl: 'Warning signs',
        txt: '"Most dengue is self-limiting, but the trickiest time is often when the fever comes down, so watch for warning signs \u2014 bad tummy pain, persistent vomiting, any bleeding, bruising or spots, or becoming very drowsy. Those mean hospital, urgently."'
      },
      {
        lbl: 'Supportive care',
        txt: '"Treatment is fluids, rest and paracetamol. Crucially, AVOID ibuprofen and aspirin \u2014 they can worsen bleeding when platelets are low."'
      },
      {
        lbl: 'Safety-net',
        txt: '"The hospital team will repeat the malaria films today and I\u2019ll chase the dengue test. Go straight to A&E or call 999 if any of those warning signs appear, you can\u2019t keep fluids down, or you pass much less urine. Later on, if it is dengue, talk to a travel clinic before any trip to a dengue area, as a second infection can be more severe."'
      }
    ],
    learning: 'Fever in a RETURNING TRAVELLER demands a structured approach, and MALARIA must be excluded first as the must-not-miss \u2014 a single negative film does not exclude it, so three samples over 24\u201348 hours are needed (UK malaria treatment guidelines 2016), which means same-day hospital assessment. DENGUE (a mosquito-borne flavivirus common in SE Asia and the tropics, incubation usually <2 weeks) presents with high fever, severe RETRO-ORBITAL headache, marked MYALGIA/arthralgia ("breakbone fever"), rash, and often leucopenia and THROMBOCYTOPENIA, confirmed by RT-PCR/NS1 antigen early or serology later (UKHSA RIPL). Take a structured travel/exposure history (where, when, rural/urban, activities, bites, prophylaxis/vaccinations, food/water, freshwater swimming, sexual/animal exposure) and build the differential (malaria, dengue, typhoid, hepatitis A, rickettsia, leptospirosis, viral haemorrhagic fever in specific regions \u2014 isolate/notify, COVID), investigating with FBC, LFTs, U&E, blood films \u00d73, dengue NS1/serology and cultures while monitoring platelets/haematocrit. Critically, recognise dengue WARNING SIGNS of severe dengue needing admission (WHO 2009, international) \u2014 abdominal pain, persistent vomiting, fluid accumulation, mucosal bleeding/petechiae/bruising, lethargy/restlessness, liver enlargement, rising haematocrit with rapid platelet fall \u2014 most likely in the critical phase as the fever settles (often days 3\u20137); screen for sepsis (NICE NG253); and manage supportively with hydration, rest and PARACETAMOL while AVOIDING NSAIDs/aspirin (bleeding/platelet risk). Laboratories report confirmed dengue to UKHSA; clinicians notify suspected malaria or enteric fever. A second infection carries a higher risk of severe dengue (Qdenga for people aged 4 and over who have had dengue, Green Book chapter 15a). Safety-net robustly.',
    knowledge: {
      guideline: 'UK malaria treatment guidelines 2016 (Lalloo, J Infect 2016) \u00b7 UKHSA dengue guidance and RIPL user manual \u00b7 UKHSA notifiable diseases: how to report \u00b7 Green Book chapter 15a Dengue (UKHSA, October 2024) \u00b7 NICE NG253 Suspected sepsis in people aged 16 or over \u00b7 WHO Dengue guidelines 2009 (international) \u00b7 returning-traveller fever: exclude malaria (repeat films) \u00b7 dengue recognition \u00b7 warning signs/admission \u00b7 avoid NSAIDs/aspirin',
      points: [
        {
          h: 'Exclude malaria first',
          t: 'Fever in a returning traveller = malaria until proven otherwise; a single negative film does not exclude it \u2014 three negative samples over 24\u201348 hours needed (UK malaria guidelines 2016); same-day hospital assessment.'
        },
        {
          h: 'Recognise dengue',
          t: 'Retro-orbital headache, severe myalgia ("breakbone"), rash, leucopenia/thrombocytopenia, SE Asia, <2-week incubation. Confirm RT-PCR/NS1 early, serology later.'
        },
        {
          h: 'Travel history & differential',
          t: 'Where/when/activities/bites/prophylaxis/food-water/exposure. Differential: malaria, dengue, typhoid, hepatitis, rickettsia, leptospirosis, VHF (region), COVID.'
        },
        {
          h: 'Investigations',
          t: 'FBC, LFTs, U&E, blood films \u00d73, dengue NS1/serology, cultures; observations and sepsis screen (NICE NG253); monitor platelets/haematocrit.'
        },
        {
          h: 'Warning signs/admit',
          t: 'Abdominal pain, persistent vomiting, fluid accumulation, bleeding/petechiae, lethargy, liver enlargement, rising haematocrit with rapid platelet fall \u2192 admit. Critical phase as the fever settles (days 3\u20137; WHO 2009).'
        },
        {
          h: 'Supportive care',
          t: 'Hydration, rest, paracetamol. Avoid NSAIDs/aspirin (bleeding/platelet risk). Laboratory reports confirmed dengue; clinicians notify suspected malaria/enteric fever.'
        },
        {
          h: 'Never do',
          t: 'Never be reassured by one negative malaria film; never give NSAIDs/aspirin in suspected dengue; never miss warning signs; never skip the travel history.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Same-day repeat malaria testing; warning-sign advice (A&E/999); chase dengue results; review; second infection riskier \u2014 travel clinic advice (Qdenga, Green Book 15a).'
        }
      ]
    }
  };

  /* ===== 274. Needlestick injury ===== */
  const c274 = {
    id: 'needlestick-injury',
    title: '"I jabbed myself with a used needle at work an hour ago \u2014 I\u2019m panicking about HIV and hepatitis. What do I do?"',
    type: 'telephone',
    duration: 12,
    meta: {
      age: 29,
      sex: 'F',
      setting: 'Telephone consultation \u2014 occupational sharps/blood exposure, about an hour ago',
      system: 'Occupational health / Urgent care \u2014 needlestick injury: first aid, risk assessment & PEP',
      checked: 'October 2026'
    },
    brief: 'A 29-year-old healthcare worker, Erin (surname not recorded in the case), sustained a NEEDLESTICK from a used needle ~1 hour ago and is anxious about blood-borne viruses. The task is the structured needlestick/sharps-exposure response: IMMEDIATE FIRST AID (encourage bleeding, wash with soap and water, don\u2019t scrub/suck; irrigate mucosa/eyes); RISK ASSESSMENT (type of injury \u2014 percutaneous vs mucosal, hollow vs solid needle, depth, visible blood, source-patient status/risk for HIV/HBV/HCV); same-day (ideally immediate) referral to OCCUPATIONAL HEALTH/the emergency department for assessment and bloods (baseline serology for the recipient, and source testing with the source\u2019s consent, sought by someone other than the exposed worker); consider HIV POST-EXPOSURE PROPHYLAXIS (PEP) urgently \u2014 started as soon as possible, ideally within 24 hours and not beyond 72 hours, a 28-day course; not indicated if the source has been on treatment for at least 6 months with an undetectable viral load and good adherence; check pregnancy and interacting medicines (BHIVA/BASHH 2021) \u2014 if significant HIV risk; HEPATITIS B (booster for known responders; accelerated course plus HBV immunoglobulin if unvaccinated and a known or high-risk source; immunoglobulin for known non-responders; Green Book chapter 18); HEPATITIS C (no PEP \u2014 after a known or likely infected source, HCV RNA at 6 and 12 weeks and anti-HCV at 12 and 24 weeks, with early treatment if it occurs); ensure INCIDENT REPORTING (employer duties under the Sharps Regulations 2013; RIDDOR if the source is known to carry a blood-borne virus), condoms and no blood or tissue donation until follow-up is complete, and follow-up testing; and provide reassurance and psychological support (the anxiety is significant). The skill is first aid + structured risk assessment + urgent occ-health/PEP pathway + reassurance, not delay.',
    script: {
      opening: '"I stuck myself with a used needle at work about an hour ago \u2014 it bled a bit. I\u2019m really panicking \u2014 what if the patient had HIV or hepatitis? Have I caught something? What do I need to do right now?"',
      facts: [
        {
          topic: 'What happened',
          text: 'Healthcare assistant on a medical ward. About an hour ago, while clearing a tray, a used hollow needle that had been used to take blood ("there was blood in it") went through her glove into her left index finger. It bled a little.'
        },
        {
          topic: 'What she did',
          text: '"I rinsed it under the tap." Didn\u2019t squeeze it or wash with soap. Hasn\u2019t reported it yet; came off the ward to ring the surgery because "I didn\u2019t know who to tell".'
        },
        {
          topic: 'The source patient',
          text: '"It was a used needle from a patient. I don\u2019t know much more than that." The tray came from a bay of four patients; the nurse in charge would know which one. Doesn\u2019t know their HIV or hepatitis status.'
        },
        {
          topic: 'Her vaccination and health',
          text: '"I\u2019d have to check my records" \u2014 had hepatitis B jabs when she started 3 years ago, not sure if she had a blood test afterwards. Well, no medicines, on the combined pill. Not pregnant (last period 2 weeks ago). Not breastfeeding. No allergies.'
        },
        {
          topic: 'Work',
          text: 'Hospital has an occupational health department (open 8\u20134 weekdays; it is 11am Tuesday). Mid-shift; worried about leaving the ward short-staffed.'
        },
        { topic: 'Social', text: 'Lives with her partner, Tom. They don\u2019t use condoms.' },
        {
          topic: 'How to play it',
          text: 'Panicky, talking fast, close to tears. Calm down if the doctor gives clear, step-by-step instructions. Ask: "Today? I\u2019m on shift," "And hepatitis?" and "What are the actual chances?" Agree to go straight to occupational health.'
        }
      ],
      ice: {
        ideas: '"I\u2019ve got HIV. It\u2019s already too late."',
        concerns: 'HIDDEN AGENDA \u2014 fear of passing something to Tom, and of getting in trouble for not disposing of the needle properly.',
        expectations: '"Tell me exactly what to do, right now."'
      },
      cues: [
        '"I rinsed it" \u2014 first aid to complete and check.',
        '"I\u2019m on shift" \u2014 the time-critical need to go now despite work pressure.',
        '"We don\u2019t use condoms" (if asked about partners) \u2014 advice on precautions until follow-up tests.'
      ]
    },
    checkpoints: [
      {
        dom: 'cm',
        text: 'Gives immediate FIRST AID \u2014 encourage bleeding, wash with soap and running water (no scrubbing/sucking), irrigate mucosa/eyes'
      },
      {
        dom: 'dg',
        text: 'Performs a structured RISK ASSESSMENT (percutaneous vs mucosal, hollow vs solid needle, depth, visible blood, source-patient HIV/HBV/HCV status/risk)'
      },
      {
        dom: 'cm',
        text: 'Refers URGENTLY to OCCUPATIONAL HEALTH/A&E for assessment and bloods (recipient baseline + source testing with consent sought by someone else) and reports the incident \u2014 the same day, without delay'
      },
      {
        dom: 'cm',
        text: 'Considers HIV PEP as TIME-CRITICAL (ASAP, ideally within 24 hours, not beyond 72 hours; not indicated if the source is undetectable on treatment for 6 months or more) based on risk, asking about pregnancy and medicines, via occ-health/specialist guidance (BHIVA/BASHH 2021)'
      },
      {
        dom: 'cm',
        text: 'Manages HEPATITIS B (vaccination status/booster, immunoglobulin if non-immune + high-risk source) and HEPATITIS C (no PEP; baseline + follow-up testing for seroconversion \u2014 HCV RNA at 6 and 12 weeks, anti-HCV at 12 and 24 weeks)'
      },
      {
        dom: 'ro',
        text: 'Provides REASSURANCE and psychological support, acknowledges the anxiety, explains that single-exposure transmission risk is generally low, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Calmly contains her panic and gives a clear step-by-step of what happens next and the timeline (first aid, bloods, occupational health, possible PEP), confirming she knows where to go now'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: incident reporting, condoms and no blood donation until follow-up is complete, baseline and follow-up testing per protocol, urgent occ-health/PEP pathway, and review \u2014 structured, time-critical management, not delay'
      }
    ],
    worked: [
      {
        lbl: 'First aid first',
        txt: '"Let\u2019s act now. Make the wound bleed gently and wash it under running water with soap \u2014 don\u2019t scrub or suck it. You\u2019ve done the right thing coming straight away; time matters here."'
      },
      {
        lbl: 'Risk assess',
        txt: '"A few quick questions: was it a deep jab with a hollow needle, was there visible blood, and do we know anything about the patient \u2014 any HIV or hepatitis risk? That tells us how urgently we act."'
      },
      {
        lbl: 'Urgent pathway',
        txt: '"I\u2019m sending you straight to occupational health (or the emergency department) for proper assessment and baseline blood tests, and they\u2019ll arrange for the source patient to be asked for consent to be tested \u2014 that\u2019s done by someone else, not you. Please also report it through your workplace incident system today."'
      },
      {
        lbl: 'PEP',
        txt: '"If there\u2019s a real HIV risk, there\u2019s preventive medication \u2014 PEP \u2014 that works best started as soon as possible, ideally within 24 hours, and it isn\u2019t given after three days. Is there any chance you could be pregnant, and do you take any medicines? That\u2019s why this is time-critical."'
      },
      {
        lbl: 'Hep B/C',
        txt: '"We\u2019ll check your hepatitis B vaccination is up to date and boost it if needed, and possibly give protective antibody if the source is high-risk. Hepatitis C has no jab, so we test now and again over the next weeks to catch it early if it happened."'
      },
      {
        lbl: 'Reassure + safety-net',
        txt: '"I know this is frightening, but the chance of catching something from a single jab is generally low \u2014 for HIV, even from a known positive untreated source, about 3 in 1,000 \u2014 and the whole system is set up to protect you. Until your follow-up tests are done, use condoms and don\u2019t give blood. We\u2019ll arrange your follow-up tests and support you throughout."'
      }
    ],
    learning: 'A NEEDLESTICK/sharps exposure needs a structured, time-critical response. Start with immediate FIRST AID: encourage the wound to bleed, wash with soap and running water (do not scrub or suck), and irrigate mucosa/eyes for splashes. RISK-ASSESS the exposure \u2014 percutaneous versus mucosal/non-intact skin, hollow-bore (higher risk) versus solid needle, depth, visible blood, and the SOURCE patient\u2019s HIV/HBV/HCV status/risk. Refer urgently, the same day, to OCCUPATIONAL HEALTH (or the emergency department) for assessment and bloods \u2014 recipient baseline serology and source testing with the source\u2019s consent, sought by someone other than the exposed worker \u2014 and report the incident (Sharps Regulations 2013; RIDDOR if the source is known to carry a blood-borne virus). Consider HIV POST-EXPOSURE PROPHYLAXIS (PEP), started as soon as possible (ideally within 24 hours, not beyond 72 hours; 28 days; not indicated if the source is undetectable on treatment for at least 6 months with good adherence; check pregnancy and interactions \u2014 BHIVA/BASHH 2021), so assessment is time-critical and made via occ-health/specialist guidance. For HEPATITIS B, check/ensure vaccination status (booster/accelerated course if needed) and give HBV immunoglobulin if the recipient is non-immune with a high-risk/positive source; for HEPATITIS C there is no vaccine or PEP, so perform baseline and follow-up testing (HCV RNA at 6 and 12 weeks, anti-HCV at 12 and 24 weeks) to detect seroconversion with early antiviral treatment if it occurs. Advise condoms and no blood or tissue donation until follow-up is complete. Ensure incident reporting, baseline and follow-up testing per protocol, and provide reassurance and psychological support \u2014 acknowledging the significant anxiety while explaining that single-exposure transmission risk is generally low \u2014 and safety-net.',
    knowledge: {
      guideline: 'UK Guideline for the use of HIV Post-Exposure Prophylaxis (BHIVA/BASHH 2021) \u00b7 Green Book chapter 18 Hepatitis B (UKHSA, updated February 2026) \u00b7 Occupational exposure to hepatitis C guidance (PHLS Advisory Committee on Blood Borne Viruses, now UKHSA) \u00b7 Health and Safety (Sharp Instruments in Healthcare) Regulations 2013 and RIDDOR 2013 (HSE) \u00b7 GMC Confidentiality \u00b7 needlestick: first aid \u00b7 risk assessment \u00b7 occupational health/ED \u00b7 HIV PEP (ideally within 24 h, not beyond 72 h) \u00b7 HBV \u00b7 HCV follow-up testing',
      points: [
        {
          h: 'First aid',
          t: 'Encourage bleeding, wash with soap and running water (no scrubbing/sucking), irrigate mucosa/eyes.'
        },
        {
          h: 'Risk assessment',
          t: 'Percutaneous vs mucosal, hollow vs solid needle, depth, visible blood, device in a vein or artery, source HIV/HBV/HCV status/risk. HIV risk from a positive source needlestick about 0.3%.'
        },
        {
          h: 'Urgent occ-health/A&E',
          t: 'Refer urgently (same day) for assessment + bloods (recipient baseline + source testing with consent sought by someone else); report the incident (Sharps Regulations 2013, RIDDOR). Don\u2019t delay.'
        },
        {
          h: 'HIV PEP',
          t: 'Time-critical \u2014 ASAP, ideally within 24 h, not beyond 72 h; 28 days. Not indicated if source undetectable on treatment for 6+ months. Check pregnancy/interactions. Decided via occ-health/specialist by risk.'
        },
        {
          h: 'Hepatitis B',
          t: 'Responders: booster; unvaccinated: accelerated course + HBIG if known/high-risk source; non-responders: HBIG (Green Book ch 18).'
        },
        {
          h: 'Hepatitis C',
          t: 'No vaccine/PEP; baseline + follow-up testing (HCV RNA 6 and 12 weeks, anti-HCV 12 and 24 weeks); early antiviral treatment if it occurs.'
        },
        {
          h: 'Never do',
          t: 'Never delay (PEP is time-critical); never scrub/suck the wound; never skip risk assessment/source testing/reporting; never omit follow-up testing.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Incident reporting; baseline + protocol follow-up testing; condoms and no blood donation until complete; PEP/occ-health pathway; reassurance and psychological support; review.'
        }
      ]
    }
  };

  /* ===== 275. Post-COVID syndrome (long COVID) ===== */
  const c275 = {
    id: 'post-covid-syndrome',
    title: '"It\u2019s months since I had COVID but I\u2019m still exhausted, breathless and foggy \u2014 and crashing whenever I push myself"',
    type: 'video',
    duration: 12,
    meta: {
      age: 42,
      sex: 'F',
      setting: 'Video consultation \u2014 persistent symptoms after COVID-19',
      system: 'General \u2014 post-COVID syndrome (long COVID): assessment, red flags & rehabilitation',
      checked: 'October 2026'
    },
    brief: 'Ms Dana Whitfield, 42, has persistent symptoms >12 weeks after COVID-19 \u2014 profound FATIGUE, breathlessness, "brain FOG"/poor concentration, palpitations, and POST-EXERTIONAL malaise ("crashing" after activity) \u2014 not explained by another diagnosis, with significant functional impact. Recognise POST-COVID SYNDROME (long COVID: symptoms continuing >12 weeks after acute COVID-19, not explained by an alternative diagnosis), validate it as a real condition, and \u2014 critically \u2014 EXCLUDE alternative/serious causes and red flags rather than attributing everything to long COVID (e.g. new/worsening breathlessness or chest pain \u2192 exclude PE, cardiac disease, pneumonia; do basics per NICE NG188: use the nurse\u2019s recorded oxygen saturation, pulse, lying/standing BP and sit-to-stand, arrange a face-to-face chest and heart examination, an exercise-tolerance test suited to her (e.g. 1-minute sit-to-stand with pulse and saturation), lying and standing pulse and BP for postural symptoms, bloods guided by symptoms \u2014 FBC, renal and liver function, CRP, ferritin, BNP, HbA1c, thyroid \u2014 ECG with palpitations or chest pain, and a chest X-ray by 12 weeks if respiratory symptoms continue; refer urgently for severe hypoxaemia or desaturation on exercise, signs of severe lung disease or cardiac chest pain, and consider PE (NICE NG158)). Use a holistic, multi-domain assessment (physical, cognitive, psychological, functional), screen mood, and manage with supportive REHABILITATION \u2014 PACING/energy conservation (avoid boom-and-bust given post-exertional malaise; do not advise pushing through and do not offer fixed incremental graded exercise \u2014 NICE NG206 principles), increasing activity only slowly when stable, symptom-specific management, occupational/return-to-work support (fit note with adjustments; long-lasting symptoms may meet the Equality Act 2010 definition of disability), and referral to a long-COVID/post-COVID integrated multidisciplinary service. Validate, avoid dismissiveness, and safety-net. Recorded findings available to the candidate (no in-person examination in this remote consultation): Practice nurse, last week: SpO2 98% at rest, 97% after a 1-minute sit-to-stand (18 repetitions); pulse 74 lying, 99 standing at 3 minutes; BP 116/74 lying, 114/76 standing; temperature 36.5 \u00b0C; BMI 24. No bloods, ECG or chest X-ray yet.',
    script: {
      opening: '"I had COVID about four months ago and I\u2019m just not right. I\u2019m exhausted all the time, breathless going upstairs, my brain\u2019s foggy and I can\u2019t concentrate at work, and whenever I try to do more I crash badly for days. People think I should be over it. Is this in my head?"',
      facts: [
        {
          topic: 'The symptoms',
          text: 'Since COVID in June (positive home test, a week in bed, not admitted). Exhausted all the time. Breathless on stairs \u2014 not getting worse. Can\u2019t find words, loses her thread in meetings. Heart sometimes races when she stands up.'
        },
        {
          topic: 'Crashing',
          text: 'If she does more \u2014 a long day at work, a walk with friends \u2014 she is "wiped out" the next day for 2\u20133 days, with aches and flu-like feeling. Has been trying to "push through" and exercise more, as a friend advised.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No chest pain, no coughing blood, no calf swelling, no fainting. Breathless only on exertion, not at rest or lying flat. No weight loss, no night sweats, no fevers. Periods normal, not heavy. No thirst or passing urine more.'
        },
        {
          topic: 'Recorded checks',
          text: 'If asked: "The practice nurse saw me last week \u2014 she said my oxygen was 98%, blood pressure fine, and when she did a standing-up test my pulse went up by about 25 but my blood pressure didn\u2019t drop." No blood tests yet.'
        },
        {
          topic: 'Mood (if asked)',
          text: '"Fed up and worried. Not depressed, I don\u2019t think." Sleep broken. No thoughts of self-harm.'
        },
        {
          topic: 'Work and social',
          text: 'Primary school deputy head. Back at work full time for 6 weeks, "barely surviving"; spends weekends in bed. Single mum to a 12-year-old son. Health: no medicines, no allergies, non-smoker.'
        },
        {
          topic: 'How to play it',
          text: 'Articulate, tired, slightly defensive \u2014 expect not to be believed. Relief if the doctor validates it. Surprised to be told to pace rather than push: "That\u2019s the opposite of what I\u2019ve been doing." Dreads telling work she needs adjustments.'
        }
      ],
      ice: {
        ideas: '"People at work think I should be over it. I\u2019m starting to wonder if it\u2019s in my head."',
        concerns: 'HIDDEN AGENDA \u2014 fear of losing her job and of letting her son down; worried something serious like heart damage is being missed.',
        expectations: '"To manage a full day at work without paying for it. And someone to take it seriously."'
      },
      cues: [
        '"Is this in my head?" \u2014 needs validation.',
        '"Whenever I try to do more I crash for days" \u2014 post-exertional symptoms; pacing, not pushing.',
        '"I\u2019ve been dreading telling work" \u2014 fit note and phased return.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises and VALIDATES POST-COVID SYNDROME (symptoms >12 weeks after COVID-19, not otherwise explained; fatigue, breathlessness, brain fog, post-exertional malaise) as a real condition'
      },
      {
        dom: 'dg',
        text: 'EXCLUDES alternative/serious causes and red flags \u2014 breathlessness/chest pain (PE, cardiac, pneumonia), fatigue causes (anaemia, thyroid, diabetes) \u2014 using the recorded sats, lying and standing pulse/BP and sit-to-stand, arranging a face-to-face chest/heart examination, NICE NG188 bloods (including CRP, BNP, HbA1c), ECG and chest X-ray by 12 weeks, rather than attributing all to long COVID'
      },
      {
        dom: 'dg',
        text: 'Assesses HOLISTICALLY across physical, cognitive, psychological and functional domains, screening mood and understanding the post-exertional pattern'
      },
      {
        dom: 'cm',
        text: 'Manages with PACING/energy conservation (avoiding boom-and-bust and not advising pushing through or fixed incremental graded exercise, NICE NG206 principles), symptom-specific management, and refers to a long-COVID/rehabilitation service'
      },
      {
        dom: 'cm',
        text: 'Supports FUNCTION and return to work (phased/adjustments, fit note, Equality Act 2010) and sets realistic, fluctuating-recovery expectations'
      },
      {
        dom: 'ro',
        text: 'VALIDATES the experience (not "in your head"), counters the sense of being disbelieved, and checks understanding without dismissiveness'
      },
      {
        dom: 'ro',
        text: 'Explores the impact on her work, home and sense of self and what recovery would mean to her, and builds the rehabilitation plan around her own goals and priorities'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: red flags warranting urgent assessment, results of basic investigations, pacing/rehabilitation plan, work support, referral, and review \u2014 validation + exclusion + rehabilitation, not dismissal'
      }
    ],
    worked: [
      {
        lbl: 'Validate',
        txt: '"First \u2014 this is not in your head. What you\u2019re describing is post-COVID syndrome, or long COVID: real, recognised symptoms that can persist for months. I\u2019m glad you came, and I believe you."'
      },
      {
        lbl: 'Exclude red flags',
        txt: '"That said, I won\u2019t just blame everything on COVID \u2014 your breathlessness deserves checking, the nurse\u2019s checks last week were reassuring \u2014 your oxygen stayed normal after the sit-to-stand, though your pulse rose when you stood up \u2014 and I\u2019d like you in to listen to your chest and heart, with a heart tracing, a chest X-ray and some bloods (count, iron, kidneys, liver, thyroid, sugar, inflammation and a heart marker) to rule out other causes."'
      },
      {
        lbl: 'Assess the whole picture',
        txt: '"Let\u2019s look at all of it \u2014 the energy, the breathing, the brain fog, your mood, and how it\u2019s affecting work and daily life. The crashing after activity is an important pattern that changes how we approach this."'
      },
      {
        lbl: 'Pacing',
        txt: '"Because you crash when you push, the key is pacing \u2014 working within your energy envelope, doing a bit less than you can, spreading activity with rests, and only increasing slowly when you\u2019re stable, rather than boom-and-bust or a fixed exercise programme. I\u2019ll show you how, and there\u2019s a long-COVID rehab service I\u2019ll refer you to."'
      },
      {
        lbl: 'Work support',
        txt: '"Let\u2019s sort work too \u2014 a phased return or adjustments, and a fit note if you need one. If it goes on, your employer may have to make reasonable adjustments under the Equality Act. Recovery can be slow and up-and-down, and that\u2019s normal."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back urgently or call 999 if your breathlessness suddenly worsens, you get chest pain, cough up blood, faint, or have palpitations with feeling faint \u2014 those need checking promptly. Otherwise we\u2019ll review your results and your progress together."'
      }
    ],
    learning: 'POST-COVID SYNDROME (long COVID) is symptoms continuing or developing more than 12 weeks after acute COVID-19 and not explained by an alternative diagnosis \u2014 commonly profound fatigue, breathlessness, "brain fog"/cognitive impairment, palpitations, chest tightness, sleep disturbance, and POST-EXERTIONAL malaise (crashing after activity) \u2014 and the first step is to recognise and VALIDATE it as a real, recognised condition, countering the patient\u2019s fear that it is "in their head". Critically, do NOT attribute everything to long COVID without EXCLUDING alternative/serious causes and red flags: new or worsening breathlessness or chest pain should prompt exclusion of PE, cardiac disease and pneumonia, and fatigue should prompt basics per NICE NG188 (FBC, renal and liver function, CRP, ferritin, BNP, HbA1c, thyroid), with sats, an exercise-tolerance test such as a 1-minute sit-to-stand and lying and standing pulse and BP (which a practice nurse can record), a face-to-face chest and heart examination, an ECG, and a chest X-ray by 12 weeks if respiratory symptoms continue; refer urgently for hypoxaemia, desaturation on exercise, severe lung disease or cardiac chest pain, and consider PE (NICE NG158). Assess holistically across physical, cognitive, psychological and functional domains, screen mood, and understand the post-exertional pattern, which shapes management. Manage with supportive REHABILITATION centred on PACING/energy conservation (avoiding boom-and-bust, especially with post-exertional malaise \u2014 no pushing through and no fixed incremental graded exercise, NICE NG206 principles), symptom-specific management, sleep and breathing techniques, and psychological support, referring to a long-COVID/post-COVID rehabilitation service where available. Support function and return to work (phased return/adjustments, fit note, Equality Act 2010 reasonable adjustments), validate the experience and avoid dismissiveness, set realistic expectations of slow and fluctuating recovery, and safety-net for red flags.',
    knowledge: {
      guideline: 'NICE NG188 COVID-19 rapid guideline: managing the long-term effects of COVID-19 \u00b7 NICE NG206 ME/CFS (2021) \u00b7 NICE NG158 Venous thromboembolic diseases \u00b7 DWP fit note guidance \u00b7 Equality Act 2010 \u00b7 post-COVID-19 syndrome: >12 weeks, not otherwise explained \u00b7 exclude alternatives/red flags \u00b7 holistic assessment \u00b7 pacing/rehabilitation \u00b7 validation',
      points: [
        {
          h: 'Recognise & validate',
          t: 'Symptoms >12 weeks after COVID-19, not otherwise explained: fatigue, breathlessness, brain fog, palpitations, post-exertional malaise. Real, recognised \u2014 not "in your head".'
        },
        {
          h: 'Exclude alternatives',
          t: 'Don\u2019t attribute all to long COVID \u2014 breathlessness/chest pain (PE/cardiac/pneumonia), fatigue (anaemia/thyroid/diabetes). Examine (sats/chest/heart), sit-to-stand, lying/standing BP; bloods (FBC, renal, liver, CRP, ferritin, BNP, HbA1c, thyroid), ECG, chest X-ray by 12 weeks (NICE NG188).'
        },
        {
          h: 'Holistic assessment',
          t: 'Physical, cognitive, psychological, functional domains; screen mood; understand the post-exertional pattern.'
        },
        {
          h: 'Pacing & rehabilitation',
          t: 'Pacing/energy conservation (avoid boom-and-bust; no pushing through, no fixed incremental graded exercise \u2014 NICE NG206 principles), symptom-specific management, breathing/sleep, psychological support; long-COVID multidisciplinary service referral.'
        },
        {
          h: 'Function & work',
          t: 'Phased return/adjustments, fit note; Equality Act 2010 reasonable adjustments; realistic, fluctuating-recovery expectations.'
        },
        {
          h: 'Validate',
          t: 'Counter the sense of being disbelieved; avoid dismissiveness \u2014 patients are often not believed.'
        },
        {
          h: 'Never do',
          t: 'Never dismiss as "in your head"; never attribute all symptoms to long COVID without excluding red flags; never advise pushing through (post-exertional malaise); never skip basic investigations.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Red flags (sudden breathlessness/chest pain/haemoptysis/palpitations with syncope; hypoxaemia or desaturation on exercise) \u2192 urgent; results review in about two weeks; pacing/rehab plan; work support; referral; review.'
        }
      ]
    }
  };

  /* ===== 276. Tinea pedis ===== */
  const c276 = {
    "id": "tinea-pedis",
    "title": "“His feet stink, the cream from the chemist hasn’t worked, and he won’t listen to a word I say”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 16,
      "sex": "M",
      "setting": "Video consultation — a mother has booked for her 16-year-old son; both are on the call at the start.",
      "system": "Dermatology / Adolescent health — athlete’s foot that ‘won’t clear’ as the ticket of entry: seeing a young person alone, HEADSS, low mood and risk",
      "checked": "October 2026"
    },
    "brief": "Callum Reid, 16, Year 11, joins a video call with his mother, Jo, who booked it. Jo says his feet smell, the skin between his toes is peeling and cracked, and the athlete’s foot cream from the chemist “did nothing”. On history the cream was used for two days. Callum has stopped showering most days, wears the same trainers and socks for days, and sits gaming until 3am. If the doctor asks to speak to Callum alone and makes it safe, he says he has not done PE since February because of comments in the changing room about his feet and his weight, which spread on a group chat; he now dreads school, has missed several days, sleeps badly, has lost interest in football and friends, and feels “what’s the point” most days for about two months. He has had fleeting thoughts that people would be better off without him but no plans, no self-harm, no access to medicines beyond paracetamol in the kitchen. He does not want his mother told “everything”. No drugs; occasional alcohol at a friend’s. The feet: itchy, white, soggy, fissured skin between the 4th and 5th toes on both feet, no spreading redness, no nail changes, no fever. The task: treat the tinea pedis properly (topical terbinafine or an imidazole for the right duration; check the SPC/local formulary; foot hygiene), but recognise that the self-neglect is the cue; see Callum alone; take a HEADSS-style history; assess mood and suicide risk; agree what will be shared with his mother within the limits of confidentiality; and plan support for depression in a young person (NICE NG134) and the bullying.",
    "script": {
      "opening": "“(Mum) It’s his feet. They stink the house out, the skin’s peeling, and the cream from the chemist did nothing. He needs something stronger. And he won’t listen to a word I say.”",
      "facts": [
        {
          "topic": "Who is on the call",
          "text": "Jo (mother) and Callum, 16, sitting side by side. Callum has his hood up, short answers, does not look at the camera."
        },
        {
          "topic": "The feet",
          "text": "Itchy, white soggy skin between the toes, cracked and peeling, for about two months. Both feet. No redness spreading up the foot, no swelling, no fever, no nail changes. Cream from the chemist used twice, then lost."
        },
        {
          "topic": "What Mum has noticed",
          "text": "Same trainers and socks for days, showering “maybe twice a week”, up gaming until 3am, “grumpy”, not seeing his mates, quit Sunday football. She thinks he is “just being a teenager” and lazy."
        },
        {
          "topic": "Only when seen alone and made safe",
          "text": "No PE since February because of comments about his feet and his weight in the changing room, which got onto a group chat with photos. Dreads school; has missed some days by saying he was ill. Low mood most days for about two months, no enjoyment, poor sleep, tired, eating more junk."
        },
        {
          "topic": "Risk (only if asked directly)",
          "text": "Sometimes thinks people would be better off without him. No plans, never acted on it, no self-harm, no previous attempts. Would not want to upset his younger sister. Paracetamol is in the kitchen cupboard. No drugs; a few beers at a friend’s once a month."
        },
        {
          "topic": "Confidentiality",
          "text": "Does not want Mum to know about the photos or the thoughts: “She’ll go mental at the school.” Would be okay with her knowing he is “feeling down” and that he needs some help."
        },
        {
          "topic": "How to play it",
          "text": "Monosyllabic while Mum is there. Opens up if the doctor explains confidentiality simply and asks about school and friends without judgement. Relieved to be asked. Agrees to a plan if he has a say in what Mum is told."
        }
      ],
      "ice": {
        "ideas": "(Mum) “Athlete’s foot, and he’s lazy about washing.” (Callum, alone) “It’s my feet that started all of it.”",
        "concerns": "HIDDEN AGENDA: Callum is being humiliated online, is low and has passive thoughts that people would be better off without him; he is frightened his mother will make it worse at school.",
        "expectations": "(Mum) “Something stronger, maybe tablets.” (Callum) “For it to stop.”"
      },
      "cues": [
        "A teenager who has stopped showering, gaming till 3am and quit football — self-neglect and withdrawal are cues, not just laziness.",
        "Hood up, no eye contact, one-word answers while Mum talks — ask to see him alone.",
        "“It’s my feet that started all of it” — the bullying behind the skin complaint.",
        "“What’s the point” — ask directly about suicidal thoughts."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Confirms tinea pedis (interdigital maceration and fissuring), checks for cellulitis, nail involvement and how the previous cream was used"
      },
      {
        "dom": "cm",
        "text": "Treats appropriately: a topical antifungal such as terbinafine or an imidazole for the recommended duration (check the SPC/local formulary), with practical foot hygiene; does not offer oral treatment for uncomplicated interdigital disease"
      },
      {
        "dom": "dg",
        "text": "Notices the self-neglect and withdrawal as cues and asks to speak with Callum alone, explaining confidentiality and its limits"
      },
      {
        "dom": "dg",
        "text": "Takes a HEADSS-style history (home, education, activities, drugs and alcohol, sexuality as relevant, suicide and mood) and identifies bullying and low mood"
      },
      {
        "dom": "dg",
        "text": "Asks directly about suicidal thoughts, plans, self-harm, protective factors and access to means; judges current risk"
      },
      {
        "dom": "cm",
        "text": "Plans support for depression in a young person in line with NICE NG134 (for example guided self-help or digital CBT, school support, referral to CAMHS or the local mental health support team as appropriate, early review)"
      },
      {
        "dom": "cm",
        "text": "Agrees with Callum what will be shared with his mother, and a safety plan including crisis contacts and safe storage of medicines"
      },
      {
        "dom": "ro",
        "text": "Engages a reluctant adolescent respectfully, avoids blaming him or his mother, and brings the mother back in constructively"
      }
    ],
    "worked": [
      {
        "lbl": "Treat the feet properly",
        "txt": "“This is athlete’s foot. The cream only works if it goes on every day for the full course, even after it looks better. Dry between the toes, clean socks every day, and let the trainers dry out between wears.”"
      },
      {
        "lbl": "Asking to see him alone",
        "txt": "“Callum, I like to speak to young people on their own for part of the appointment, it’s routine. Jo, would you mind stepping out for a few minutes? I’ll bring you back in.”"
      },
      {
        "lbl": "Confidentiality",
        "txt": "“What you tell me stays between us, unless I’m worried you or someone else is at serious risk. If that happened, I’d talk to you first about who needs to know.”"
      },
      {
        "lbl": "HEADSS opener",
        "txt": "“How are things at school at the moment? And with your mates?”"
      },
      {
        "lbl": "Direct risk question",
        "txt": "“When things feel that bad, some people have thoughts of ending their life or that people would be better off without them. Have you had thoughts like that?”"
      },
      {
        "lbl": "Agree what to share",
        "txt": "“What would you be happy for me to tell your mum? Could we say that you’ve been feeling low and we’re getting you some help, and leave the details for you to share when you’re ready?”"
      }
    ],
    "learning": "A skin complaint can be a young person’s ticket of entry. Tinea pedis is common and easy to treat: interdigital itch, maceration, scaling and fissuring, usually between the 4th and 5th toes. NICE CKS recommends a topical antifungal (for example terbinafine for 1–2 weeks or an imidazole for several weeks, depending on the product; check the SPC/local formulary) plus foot hygiene: dry between the toes, change socks daily, alternate footwear, and do not share towels. Most “treatment failures” are short or irregular use. Oral antifungals are not needed for uncomplicated interdigital infection. The real station is the cue: a 16-year-old who has stopped washing, games through the night, has quit his team and will not look at the camera. Self-neglect and withdrawal should prompt a psychosocial history. See the young person alone for part of the consultation, explain confidentiality and its limits, and use a HEADSS framework. Ask directly about suicidal thoughts, plans, self-harm, protective factors and access to means; asking does not increase risk. NICE NG134 (Depression in children and young people) supports watchful waiting, then psychological therapy such as digital CBT, group or individual CBT, with referral to CAMHS for moderate to severe depression or risk. Bullying, including online, should be addressed with the school with the young person’s agreement. Agree with him what will be shared with his parent, and give a safety plan and crisis contacts. A 16-year-old is presumed to have capacity to consent, and his confidentiality should be respected unless there is a serious risk of harm (GMC 0–18 years guidance).",
    "knowledge": {
      "guideline": "[1] NICE CKS Fungal skin infection – foot (check current version) · [2] NICE NG134 Depression in children and young people: identification and management (2019) · [3] NICE NG225 Self-harm: assessment, management and preventing recurrence (2022) · [4] GMC 0–18 years: guidance for all doctors (2007, updated 2018) · [5] Product SPC for topical terbinafine and imidazoles · [6] RCGP/HEADSS adolescent psychosocial assessment",
      "summary": "Tinea pedis that “failed” because the cream was used for two days, in a 16-year-old whose self-neglect and withdrawal are the real cue. Treat the feet properly, then see Callum alone: bullying in the changing room and online, two months of low mood, and passive suicidal thoughts without plans. Assess risk, plan support in line with NICE NG134, involve the school with his agreement, and agree what his mother will be told.",
      "points": [
        {
          "h": "Tinea pedis",
          "t": "Interdigital itch, maceration, scaling and fissuring. Treat with a topical antifungal for the full recommended course and continue after the skin looks clear (check the SPC/local formulary) [1,5]."
        },
        {
          "h": "Foot hygiene",
          "t": "Dry carefully between the toes, cotton socks changed daily, alternate shoes so they dry out, flip-flops in communal showers, do not share towels."
        },
        {
          "h": "When to think again",
          "t": "Spreading redness, swelling or fever (cellulitis), nail involvement (needs confirmation before oral treatment), or diabetes or immunosuppression."
        },
        {
          "h": "Seeing the young person alone",
          "t": "Routine for adolescents. Explain why, ask the parent to step out, and explain confidentiality and its limits [4]."
        },
        {
          "h": "HEADSS",
          "t": "Home, Education/employment, Activities, Drugs and alcohol, Sexuality, Suicide and mood (plus Safety). Start with less sensitive areas."
        },
        {
          "h": "Risk assessment",
          "t": "Ask directly about suicidal thoughts, plans, self-harm, protective factors and access to means. Do not use risk tools or scores to predict risk; focus on needs and a safety plan [3]."
        },
        {
          "h": "Depression in young people",
          "t": "NICE NG134: for mild depression, watchful waiting with review and digital CBT, group CBT or group non-directive supportive therapy; for moderate to severe depression, refer to CAMHS for psychological therapy. Antidepressants are not offered in primary care without specialist assessment [2]."
        },
        {
          "h": "Bullying",
          "t": "With his agreement, involve the school (pastoral lead or mental health support team). Online image sharing may need the school’s safeguarding lead."
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c273, c274, c275, c276);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'dengue-fever': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Aaron Bell',
        age: '24 years \u00b7 male',
        pmh: [
          'Fever ~4 days after returning from Thailand; retro-orbital headache, severe myalgia ("breakbone"), rash',
          'One negative malaria film at walk-in',
          'Check FBC (thrombocytopenia/leucopenia)'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Back from Thailand with high fever, headache behind my eyes, aching all over." Walk-in centre, yesterday: temperature 39.2 \u00b0C, pulse 104, BP 118/72, respiratory rate 18, SpO2 98%, capillary refill under 2 seconds; blanching maculopapular rash on the trunk; one malaria rapid test and thick/thin film negative; no other bloods.',
        reason: 'Video consultation \u2014 fever in a returning traveller.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Exclude malaria first',
          d: 'Returning-traveller fever = malaria until excluded; one negative film insufficient \u2014 three over 24\u201348 hours, same-day hospital assessment.'
        },
        {
          t: '2\u20104',
          h: 'Recognise dengue',
          d: 'Retro-orbital headache + breakbone myalgia + rash + thrombocytopenia, SE Asia \u2014 NS1/serology.'
        },
        {
          t: '4\u20107',
          h: 'Travel hx + investigate',
          d: 'Exposure history; observations + sepsis screen (NICE NG253); FBC/LFTs/films \u00d73/cultures; monitor platelets/haematocrit.'
        },
        {
          t: '7\u20109',
          h: 'Warning signs',
          d: 'Abdominal pain, vomiting, bleeding/petechiae, lethargy, platelet fall (critical phase as fever settles) \u2192 admit.'
        },
        {
          t: '9\u201012',
          h: 'Supportive + safety-net',
          d: 'Hydration/paracetamol; AVOID NSAIDs/aspirin; lab reports confirmed dengue; warning-sign advice; fit note.'
        }
      ],
      wordPics: {
        fail: 'Reassured by one negative malaria film; misses dengue/warning signs; gives NSAIDs.',
        pass: 'Excludes malaria (repeat films), recognises dengue, and manages supportively avoiding NSAIDs.',
        exc: 'Approaches as returning-traveller fever, excludes malaria (repeat films), recognises/confirms dengue, takes exposure history, recognises warning signs/admission, and manages supportively avoiding NSAIDs/aspirin.'
      },
      avoid: [
        {
          dont: '"Your malaria test was negative, so it\u2019s just a viral bug."',
          instead: '"One negative film doesn\u2019t exclude malaria \u2014 it needs repeating today \u2014 and this looks like dengue."',
          why: 'A single negative film does not exclude malaria (three over 24\u201348 hours, UK malaria guidelines 2016).'
        },
        {
          dont: '"Take ibuprofen for the aches and fever."',
          instead: '"Use paracetamol, not ibuprofen or aspirin \u2014 they can worsen bleeding in dengue."',
          why: 'NSAIDs/aspirin raise bleeding risk with low platelets in dengue.'
        },
        {
          dont: '(No warning-sign advice) sending home without safety-netting.',
          instead: '"Bad tummy pain, vomiting, bleeding/bruising or drowsiness mean hospital urgently."',
          why: 'Severe dengue (WHO 2009 warning signs) needs urgent admission.'
        }
      ]
    },
    'needlestick-injury': {
      ceg: ['Urgent & unscheduled care', 'Professionalism & ethics'],
      stem: {
        name: 'Erin',
        age: '29 years \u00b7 female (healthcare worker)',
        pmh: [
          'Needlestick from a used needle ~1 hour ago; bled',
          'Anxious re HIV/hepatitis',
          'HBV vaccination status to confirm'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I jabbed myself with a used needle an hour ago \u2014 panicking about HIV and hepatitis."',
        reason: 'Telephone \u2014 occupational sharps exposure.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'First aid',
          d: 'Encourage bleeding, wash with soap/water (no scrub/suck); irrigate mucosa.'
        },
        {
          t: '2\u20104',
          h: 'Risk assess',
          d: 'Percutaneous vs mucosal, hollow needle, visible blood, source HIV/HBV/HCV status.'
        },
        {
          t: '4\u20106',
          h: 'Urgent occ-health/A&E',
          d: 'Same-day assessment + bloods (recipient baseline + source testing w/ consent sought by someone else); report.'
        },
        {
          t: '6\u20109',
          h: 'HIV PEP',
          d: 'Time-critical (ASAP, ideally within 24 h, not beyond 72 h) if HIV risk \u2014 via occ-health/specialist.'
        },
        {
          t: '9\u201012',
          h: 'HBV/HCV + support',
          d: 'HBV vaccine/immunoglobulin; HCV baseline+follow-up; reporting; condoms/no blood donation; reassurance.'
        }
      ],
      wordPics: {
        fail: 'Delays; no first aid/risk assessment; misses time-critical HIV PEP; no follow-up testing.',
        pass: 'Gives first aid, risk-assesses, and refers urgently for occ-health/PEP with HBV/HCV management.',
        exc: 'Gives first aid, risk-assesses, refers urgently to occ-health/A&E (bloods + source testing), considers time-critical HIV PEP, manages HBV/HCV, reports, and reassures with follow-up testing.'
      },
      avoid: [
        {
          dont: '"Just wash it and keep an eye on it; book in if you feel unwell."',
          instead: '"This needs urgent occupational-health assessment now \u2014 HIV PEP is time-critical."',
          why: 'Delay risks missing the PEP window (ideally within 24 h, not beyond 72 h; BHIVA/BASHH 2021).'
        },
        {
          dont: '(Scrubbing/sucking) advising aggressive wound care.',
          instead: '"Encourage bleeding and wash with soap and water \u2014 don\u2019t scrub or suck it."',
          why: 'Scrubbing/sucking is not recommended.'
        },
        {
          dont: '(No source testing) ignoring source-patient status.',
          instead: '"Occupational health will ask the source patient for consent to testing to guide PEP and follow-up."',
          why: 'Source status drives risk assessment and PEP decisions.'
        }
      ]
    },
    'post-covid-syndrome': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Dana Whitfield',
        age: '42 years \u00b7 female',
        pmh: [
          'Fatigue, breathlessness, brain fog, palpitations >12 weeks after COVID-19',
          '\u26a0 Post-exertional malaise ("crashing"); significant work/functional impact',
          'Feels disbelieved'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Months since COVID and I\u2019m still exhausted, breathless and foggy \u2014 crashing when I push myself." Practice nurse, last week: SpO2 98% at rest, 97% after a 1-minute sit-to-stand (18 repetitions); pulse 74 lying, 99 standing at 3 minutes; BP 116/74 lying, 114/76 standing; temperature 36.5 \u00b0C; BMI 24. No bloods, ECG or chest X-ray yet.',
        reason: 'Video consultation \u2014 persistent post-COVID symptoms.'
      },
      timeMap: [
        { t: '0\u20102', h: 'Validate', d: 'Post-COVID syndrome is real, recognised; not "in your head".' },
        {
          t: '2\u20105',
          h: 'Exclude red flags',
          d: 'Breathlessness/chest pain \u2192 PE/cardiac/pneumonia; NICE NG188 bloods; exam/sats/sit-to-stand/lying-standing BP/ECG/CXR.'
        },
        {
          t: '5\u20107',
          h: 'Holistic assessment',
          d: 'Physical/cognitive/psychological/functional; screen mood; post-exertional pattern.'
        },
        {
          t: '7\u201010',
          h: 'Pacing/rehab',
          d: 'Energy conservation (avoid boom-and-bust; no pushing through, no fixed incremental graded exercise); long-COVID multidisciplinary service referral.'
        },
        {
          t: '10\u201012',
          h: 'Work + safety-net',
          d: 'Phased return/fit note; Equality Act; red-flag advice; review.'
        }
      ],
      wordPics: {
        fail: 'Dismisses as "in your head"; or attributes all to long COVID without excluding red flags; advises pushing through.',
        pass: 'Validates, excludes red flags, and manages with pacing/rehab and work support.',
        exc: 'Validates post-COVID syndrome, excludes alternatives/red flags, assesses multi-domain, manages with pacing/rehabilitation (avoiding boom-and-bust) and work support, refers to a long-COVID service, and safety-nets.'
      },
      avoid: [
        {
          dont: '"Your tests will be fine \u2014 it\u2019s probably just stress, push through it."',
          instead: '"This is long COVID \u2014 real \u2014 and pushing through worsens the crashing; pacing is key, and I\u2019ll still check for other causes."',
          why: 'Dismissing it and advising pushing through harms a post-exertional-malaise patient.'
        },
        {
          dont: '(No exclusion) blaming all symptoms on long COVID.',
          instead: '"Your breathlessness deserves examining and a heart tracing, chest X-ray and bloods to exclude other causes."',
          why: 'Red flags (PE/cardiac) must be excluded.'
        },
        {
          dont: '(No work support) ignoring the functional impact.',
          instead: '"Let\u2019s arrange a phased return and adjustments, with a fit note if needed."',
          why: 'Function/return-to-work support is central.'
        }
      ]
    },
    'tinea-pedis': {
      "ceg": [
        "Children & young people",
        "Mental health & addiction"
      ],
      "stem": {
        "name": "Callum Reid",
        "age": "16 years · male",
        "pmh": [
          "Nil significant"
        ],
        "meds": [
          "None recorded"
        ],
        "allergy": "None recorded",
        "recent": "Appointment booked by his mother: “Athlete’s foot, cream not working.” Last seen aged 12 for a sprained ankle.",
        "reason": "“His feet stink and the cream hasn’t worked.”"
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Hear Mum; ask Callum in his own words."
        },
        {
          "t": "1–3",
          "h": "The feet",
          "d": "Duration, cream use, cellulitis and nails; look on camera. Note the self-neglect."
        },
        {
          "t": "3–8",
          "h": "Alone",
          "d": "Confidentiality. HEADSS: school, bullying, mood, sleep, drugs. Direct risk questions and means."
        },
        {
          "t": "8–10",
          "h": "Plan with Callum",
          "d": "Low mood support (NG134); school; what Mum will be told; safety plan."
        },
        {
          "t": "10–12",
          "h": "Mum back",
          "d": "Foot treatment and hygiene; agreed mood message; medicines stored safely; teach-back; review."
        }
      ],
      "wordPics": {
        "fail": "Prescribes a stronger antifungal, or tablets, and ends the consultation; never sees Callum alone; treats the self-neglect as laziness; no risk assessment.",
        "pass": "Treats the tinea correctly, sees Callum alone, uncovers bullying and low mood, asks about suicidal thoughts and plans support.",
        "exc": "All of the above, plus: explains confidentiality and its limits clearly; uses HEADSS naturally; gives a safety plan with crisis contacts and means restriction; negotiates exactly what Mum will be told; supports Mum without blaming; arranges early review and a route to the school."
      },
      "avoid": [
        {
          "dont": "“The cream didn’t work, so let’s try tablets.”",
          "instead": "“The cream needs using every day for the whole course. Let’s do that properly.”",
          "why": "Most failures are short use; oral antifungals are not needed for interdigital tinea."
        },
        {
          "dont": "(With Mum present) “Are you depressed?”",
          "instead": "“I usually see young people on their own for part of the appointment.”",
          "why": "Disclosure is unlikely in front of a parent."
        },
        {
          "dont": "“You’re not going to do anything silly, are you?”",
          "instead": "“Have you had thoughts of ending your life or that people would be better off without you?”",
          "why": "Closed, leading questions shut down disclosure."
        }
      ]
    }
  });

})();
