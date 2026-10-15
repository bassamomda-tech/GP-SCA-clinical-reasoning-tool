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
      guideline: 'UK malaria treatment guidelines 2016 (Lalloo, J Infect 2016) \u00b7 UKHSA dengue guidance and RIPL user manual \u00b7 UKHSA notifiable diseases: how to report \u00b7 Green Book chapter 15a Dengue (UKHSA, October 2024) \u00b7 NICE NG253 Suspected sepsis in people aged 16 or over \u00b7 BNF paracetamol, NSAIDs \u00b7 WHO Dengue guidelines 2009 (international) \u00b7 returning-traveller fever: exclude malaria (repeat films) \u00b7 dengue recognition \u00b7 warning signs/admission \u00b7 avoid NSAIDs/aspirin',
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
    id: 'tinea-pedis',
    title: '"The skin between my toes is itchy, flaky and cracked, and my feet smell \u2014 I\u2019ve tried everything"',
    type: 'video',
    duration: 12,
    meta: {
      age: 34,
      sex: 'M',
      setting: 'Video consultation \u2014 itchy, scaly feet (photos sent)',
      system: 'Dermatology \u2014 tinea pedis (athlete\u2019s foot): diagnosis, treatment & the diabetic caveat',
      checked: 'October 2026'
    },
    brief: 'Mr Leon Park, 34 (gym-goer, occlusive footwear; has used over-the-counter creams \u2014 ask which, how often and for how long), has itchy, flaky, MACERATED skin between the TOES (especially 4th web space) with scaling on the soles and odour \u2014 TINEA PEDIS (athlete\u2019s foot, a dermatophyte fungal infection). Recognise it clinically (interdigital maceration/scaling, itch; moccasin-type scaling of soles; provoked by sweating/occlusive footwear/communal showers); distinguish from contact dermatitis, eczema, erythrasma and pitted keratolysis; check for associated TINEA UNGUIUM (nail infection \u2014 reservoir for recurrence) and tinea elsewhere; MANAGE with topical ANTIFUNGALS for the full licensed course (terbinafine 1% cream once daily for 1 week for tinea pedis per the Lamisil AT SPC; clotrimazole for its longer licensed duration; stopping early risks recurrence), foot HYGIENE (keep feet dry, change socks, avoid occlusive footwear, dry between toes, antifungal powder, don\u2019t share towels, footwear in communal areas), treat nail involvement (often needs ORAL antifungal \u2014 confirm by nail clippings for microscopy and culture first; oral terbinafine for toenails usually 12 weeks, 12\u201316 weeks per BAD 2014, with baseline LFTs per the SPC), and consider oral antifungals for extensive/refractory disease; and \u2014 importantly \u2014 ASK about diabetes or immunosuppression and recognise the caveat (tinea/maceration is a portal for bacterial infection/cellulitis, so foot checks and prompt treatment matter more, NICE NG19). Reassure and safety-net. Recorded findings available to the candidate (no in-person examination in this remote consultation): Patient\u2019s photographs and video inspection: white, macerated, peeling skin between the 4th and 5th toes of both feet with fissures; fine scale on both soles; right great toenail thickened and yellow; no spreading redness or swelling.',
    script: {
      opening: '"The skin between my toes has gone really itchy, flaky and a bit cracked and soggy, and honestly my feet smell. I\u2019m at the gym a lot. I\u2019ve tried various creams and it keeps coming back. What is it and how do I get rid of it?"',
      facts: [
        {
          topic: 'The feet',
          text: 'On and off for about a year. Itchy, white, soggy, peeling skin between the toes, worst between the 4th and 5th toes on both feet; some cracks. Fine scaling on the soles. Will show his feet to the camera and has photos.'
        },
        {
          topic: 'Creams',
          text: '"A few from the chemist." Used an antifungal cream "for a few days until it looked better, then stopped". Once used a hydrocortisone cream, which made it worse.'
        },
        {
          topic: 'Nails (if asked)',
          text: '"I\u2019m not sure \u2014 I haven\u2019t looked closely." When he looks on camera: big toenail on the right is thick and yellowish.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'No spreading redness, swelling, heat or pain in the foot or leg. No fever. No rash elsewhere; no groin itch. No eczema or psoriasis.'
        },
        {
          topic: 'Health',
          text: 'Not diabetic that he knows of; no thirst or passing urine more. No immune problems. No medicines. No allergies.'
        },
        {
          topic: 'Lifestyle',
          text: 'Gym 5 times a week, uses the communal showers barefoot. Wears trainers all day at work (warehouse); feet sweaty. Lives with his girlfriend, who has started complaining about the smell.'
        },
        {
          topic: 'How to play it',
          text: 'Frustrated, a bit embarrassed. Ask "So I might have been stopping too early?" and "Only a week?" Mention the smell is what bothers you most.'
        }
      ],
      ice: {
        ideas: '"Athlete\u2019s foot, probably. But the creams don\u2019t work."',
        concerns: '"The smell, honestly. It\u2019s embarrassing at the gym and my girlfriend\u2019s noticed."',
        expectations: '"Something stronger \u2014 maybe tablets."'
      },
      cues: [
        '"It keeps coming back" \u2014 how the creams were used, and a nail reservoir.',
        '"The creams don\u2019t work" \u2014 check which cream and for how long.',
        '"It\u2019s embarrassing" \u2014 impact and practical foot-hygiene advice.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises TINEA PEDIS (interdigital maceration/scaling, sole "moccasin" scaling, itch, odour; sweating/occlusive footwear/gym) as a dermatophyte infection'
      },
      {
        dom: 'dg',
        text: 'Distinguishes it from contact dermatitis/eczema, erythrasma and pitted keratolysis, using skin scrapings if uncertain or before oral therapy'
      },
      {
        dom: 'dg',
        text: 'Checks for TINEA UNGUIUM (nail reservoir for recurrence) and tinea elsewhere, sampling nails before oral treatment'
      },
      {
        dom: 'dg',
        text: 'Asks how previous creams were used, then manages with a topical ANTIFUNGAL for the full licensed course (terbinafine 1% cream once daily for 1 week, SPC) plus FOOT HYGIENE (dry feet/between toes, change socks/footwear, antifungal powder, communal-shower footwear, no towel sharing), and considers ORAL antifungal for extensive/refractory/nail disease (after sampling, with baseline LFTs)'
      },
      {
        dom: 'dg',
        text: 'Asks about diabetes/immunocompromise and recognises the caveat \u2014 tinea/maceration as a portal for bacterial cellulitis \u2014 warranting foot care and a lower review threshold'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and why recurrence happens (nail reservoir/hygiene), and engages him in prevention, checking understanding'
      },
      {
        dom: 'ro',
        text: 'Negotiates a realistic foot-hygiene and treatment routine that fits his lifestyle, and checks he is willing and able to keep it up to prevent recurrence'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review if not improving/refractory (oral antifungal/sampling), signs of secondary infection/cellulitis (especially in diabetics), and prevention to reduce recurrence'
      }
    ],
    worked: [
      {
        lbl: 'Name it',
        txt: '"This is athlete\u2019s foot \u2014 a fungal infection of the skin, very common with gym use and sweaty, enclosed shoes. The soggy, itchy skin between the toes is classic."'
      },
      {
        lbl: 'Why it recurs',
        txt: '"It keeps coming back for two main reasons \u2014 the warm damp environment, and sometimes the nails get infected and act as a reservoir. Let me check your nails."'
      },
      {
        lbl: 'Treat + hygiene',
        txt: '"Terbinafine cream once a day for the full week, even if it looks better on day three, between all the toes and a little beyond the rash, should sort the skin \u2014 some other creams need longer. Just as important: dry carefully between the toes, change socks, let shoes air, use antifungal powder, and wear flip-flops in communal showers."'
      },
      {
        lbl: 'Nails/oral',
        txt: '"If the nails are involved, creams won\u2019t reach them \u2014 we\u2019d take a clipping to confirm and then often use a course of antifungal tablets \u2014 for nails that\u2019s about three months and needs a liver blood test first \u2014 which also helps stop the skin reinfecting."'
      },
      {
        lbl: 'Diabetic caveat',
        txt: '"Do you have diabetes, or anything that affects your immune system? If you ever do, this matters more, because cracked skin can let bacteria in and cause a skin infection. So keep on top of foot care."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if it isn\u2019t better two weeks after finishing the cream and I\u2019ll take skin scrapings, or the same day if the foot becomes red, hot, swollen or painful or you get a fever \u2014 that could be a spreading infection needing antibiotics."'
      }
    ],
    learning: 'TINEA PEDIS (athlete\u2019s foot) is a dermatophyte fungal infection recognised by itchy, flaky, MACERATED/cracked skin between the toes (especially the 4th web space), scaling in a "moccasin" distribution on the soles, and odour, provoked by sweating, occlusive footwear and communal showers/gyms. Distinguish it from contact dermatitis/eczema, erythrasma (coral-red under Wood\u2019s lamp) and pitted keratolysis, using skin scrapings for mycology if uncertain or before oral therapy. Check for TINEA UNGUIUM (onychomycosis \u2014 thickened/discoloured/crumbly nails), which is a reservoir for recurrent infection, and for tinea elsewhere, sampling nails before oral treatment. Manage with a topical ANTIFUNGAL for the full licensed course (terbinafine 1% cream once daily for 1 week for tinea pedis per its SPC; clotrimazole for its longer licensed duration), asking how previous creams were used, plus foot HYGIENE \u2014 keep feet dry, dry thoroughly between the toes, change socks and avoid occlusive footwear, use antifungal powder, avoid sharing towels and wear footwear in communal showers \u2014 and consider an ORAL antifungal for extensive/refractory disease or nail involvement (after sampling; toenails usually 12 weeks of terbinafine, 12\u201316 weeks per BAD 2014, with baseline LFTs). Importantly, ask about DIABETES or immunocompromise: in these people, tinea pedis/interdigital maceration is a portal for bacterial entry and CELLULITIS, so foot care, prompt treatment and vigilance for secondary infection matter more and the threshold for review is lower. Reassure, address recurrence (nail reservoir/hygiene), and safety-net for secondary infection (NICE NG19 foot checks in diabetes).',
    knowledge: {
      guideline: 'MHRA SPC Lamisil AT 1% cream (terbinafine) \u00b7 MHRA SPC Canesten 1% cream (clotrimazole) \u00b7 BAD guidelines for the management of onychomycosis 2014 \u00b7 MHRA SPC Lamisil 250 mg tablets \u00b7 BNF terbinafine, imidazoles \u00b7 NICE NG19 Diabetic foot problems \u00b7 tinea pedis: topical antifungal + hygiene \u00b7 nail reservoir \u00b7 oral antifungal for extensive/nail disease \u00b7 diabetic cellulitis caveat',
      points: [
        {
          h: 'Recognise',
          t: 'Itchy, flaky, macerated interdigital skin (4th web space), sole "moccasin" scaling, odour; sweating/occlusive footwear/gym. Dermatophyte infection.'
        },
        {
          h: 'Differential',
          t: 'Contact dermatitis/eczema, erythrasma (coral-red, Wood\u2019s lamp), pitted keratolysis. Skin scrapings if uncertain/before oral therapy.'
        },
        {
          h: 'Check nails/sites',
          t: 'Onychomycosis = reservoir for recurrence; check other sites (groin/hands). Sample nails before oral treatment.'
        },
        {
          h: 'Manage',
          t: 'Topical antifungal for the full licensed course (terbinafine 1% once daily for 1 week; clotrimazole longer) + foot hygiene (dry feet/between toes, change socks/footwear, antifungal powder, communal-shower footwear, no towel sharing).'
        },
        {
          h: 'Oral antifungal',
          t: 'For extensive/refractory disease or nail involvement (e.g. terbinafine; toenails usually 12 weeks, 12\u201316 per BAD 2014) \u2014 confirm by sampling first; baseline LFTs (SPC).'
        },
        {
          h: 'Diabetic caveat',
          t: 'Ask about diabetes/immunocompromise: maceration is a portal for cellulitis \u2014 foot checks (NICE NG19), prompt treatment, lower review threshold.'
        },
        {
          h: 'Never do',
          t: 'Never ignore an untreated nail reservoir driving recurrence; never start oral antifungal without sampling; never overlook the diabetic cellulitis risk.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review if not better 2 weeks after finishing the cream (scrapings/oral); signs of cellulitis (red/hot/swollen/painful, fever) \u2192 same-day review; prevention to reduce recurrence.'
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
      ceg: ['New & undifferentiated presentations', 'Long-term conditions & cancer'],
      stem: {
        name: 'Leon Park',
        age: '34 years \u00b7 male',
        pmh: [
          'Itchy, flaky, macerated skin between toes (4th web space) + sole scaling + odour',
          'Gym-goer; occlusive footwear; recurrent',
          'Check nails (onychomycosis reservoir)'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Skin between my toes is itchy, flaky and cracked, and my feet smell \u2014 it keeps coming back." Patient\u2019s photographs and video inspection: white, macerated, peeling skin between the 4th and 5th toes of both feet with fissures; fine scale on both soles; right great toenail thickened and yellow; no spreading redness or swelling.',
        reason: 'Video consultation \u2014 itchy, scaly feet.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise',
          d: 'Interdigital maceration/scaling + odour + gym/occlusive footwear = tinea pedis.'
        },
        {
          t: '2\u20104',
          h: 'Differential + nails',
          d: 'Vs dermatitis/erythrasma/pitted keratolysis; check nails (reservoir); sample if uncertain/before oral.'
        },
        {
          t: '4\u20107',
          h: 'Treat + hygiene',
          d: 'Topical antifungal for the full licensed course (terbinafine 1% once daily 1 week) + foot hygiene (dry, socks, powder, communal footwear).'
        },
        {
          t: '7\u20109',
          h: 'Oral if needed',
          d: 'Extensive/refractory/nail disease \u2192 oral antifungal after sampling (baseline LFTs; toenails about 12 weeks).'
        },
        {
          t: '9\u201012',
          h: 'Diabetic caveat + safety-net',
          d: 'Ask about diabetes; cellulitis portal in diabetes/immunocompromise; review if not improving/secondary infection.'
        }
      ],
      wordPics: {
        fail: 'Treats skin only, ignores nail reservoir/hygiene; misses the diabetic cellulitis caveat; starts oral antifungal without sampling.',
        pass: 'Recognises tinea pedis, treats with topical antifungal + hygiene, and checks nails.',
        exc: 'Recognises tinea pedis, distinguishes mimics, treats with topical antifungal + hygiene, checks/treats the nail reservoir (oral after sampling), notes the diabetic cellulitis caveat, and safety-nets.'
      },
      avoid: [
        {
          dont: '"Here\u2019s a cream \u2014 that should clear it." (ignoring recurrence drivers)',
          instead: '"We\u2019ll treat the skin and sort the cause of recurrence \u2014 hygiene and any infected nails."',
          why: 'A nail reservoir and poor hygiene drive recurrence.'
        },
        {
          dont: '(Oral without sampling) starting tablets for presumed nail infection.',
          instead: '"I\u2019ll take a nail clipping to confirm before any antifungal tablets."',
          why: 'Confirm onychomycosis before oral antifungals.'
        },
        {
          dont: '(Ignoring diabetes) treating as trivial in an at-risk patient.',
          instead: '"In diabetes, cracked skin can let infection in \u2014 foot care matters more, and watch for cellulitis."',
          why: 'Tinea is a portal for cellulitis in diabetics/immunocompromised.'
        }
      ]
    }
  });

})();
