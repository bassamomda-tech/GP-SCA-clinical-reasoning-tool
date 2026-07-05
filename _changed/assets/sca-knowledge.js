/* ============================================================
   Reasoning GP — The Hot Seat: categorised SCA knowledge + "what to do" playbook
   - SCA_KB[caseId]: knowledge split into Social & holistic / Legal / Professional /
     Community (the CLINICAL bucket stays as SCA_KNOWLEDGE[id].points).
   - SCA_PLAYBOOK[caseId]: the ideal approach for THIS station — History (what to
     ask), Diagnosis (how to phrase it), Management (how to manage this case).
   Frameworks informed by the RCGP SCA consultation/marking guidance and standard
   UK communication-skills teaching. Educational; verify against live NICE CKS.
   ============================================================ */

window.SCA_KB = {

  'htn-young-bp': {
    social: [
      { h:'Occupational & lifestyle', t:'Long hours and shift-type fatigue, energy-drink/caffeine load, takeaway/salt intake, alcohol and exercise — all modifiable drivers to explore, not lecture.' },
      { h:'Family & emotional context', t:'A father’s early stroke and a new baby make this deeply personal; health anxiety and fear of “tablets for life” shape adherence and must be named.' }
    ],
    legal: [
      { h:'DVLA & blood pressure', t:'Group 1 drivers need not notify for hypertension. Group 2 (HGV/PSV) drivers are disqualified if resting BP is consistently ≥180 systolic or ≥100 diastolic — relevant if the patient drives for work.' }
    ],
    professional: [
      { h:'Equity in prescribing', t:'Choosing a CCB first-line for a man of African/Caribbean family origin is evidence-based, not assumption — explain the reasoning transparently (GMC: good clinical care + shared decisions).' },
      { h:'Consent & shared decision', t:'Offer ABPM/HBPM and lifestyle change as options the patient chooses into; document the discussion and his specific concerns.' }
    ],
    community: [
      { h:'Patient resources', t:'Blood Pressure UK and the British Heart Foundation for home-monitoring technique and lifestyle; community pharmacy BP checks and the NHS Health Check.' }
    ]
  },

  'rif-pain-young-female': {
    social: [
      { h:'The meaning of this pregnancy', t:'A couple actively trying to conceive — pain plus a possible pregnancy carries huge emotional weight; acknowledge hope and fear, and the practical need for support to attend.' }
    ],
    legal: [
      { h:'Duty of care & urgent referral', t:'A reproductive-age woman with this picture needs same-day assessment; a documented, actioned referral with a clear safety-net discharges the duty of care. If she declines, assess capacity and explain risks.' }
    ],
    professional: [
      { h:'Safety-netting & documentation', t:'GMC: act on red flags, arrange and record same-day EPAU/A&E, and give explicit emergency advice; a chaperone is offered for any examination.' }
    ],
    community: [
      { h:'Support after the event', t:'The Ectopic Pregnancy Trust and the Miscarriage Association offer specialist emotional support; the local Early Pregnancy Assessment Unit is the clinical destination.' }
    ]
  },

  'knee-pain-walker': {
    social: [
      { h:'Identity & function', t:'Hill-walking is part of who he is; frame management around restoring valued activity, and explore weight and daily function supportively rather than as blame.' }
    ],
    legal: [
      { h:'Fitness for work', t:'If his role is physically demanding, brief discussion of adjustments/fit note may be relevant; not a statutory issue for OA itself.' }
    ],
    professional: [
      { h:'Avoid over-investigation', t:'Diagnosing OA clinically and not reflexly imaging reflects good stewardship; manage the expectation of a scan honestly (GMC: good use of resources + shared decisions).' },
      { h:'Realistic surgical expectations', t:'Be clear a replacement is decided on quality of life and failed conservative care, not on an X-ray — set expectations early.' }
    ],
    community: [
      { h:'Self-management resources', t:'Versus Arthritis, the ESCAPE-pain programme, local physiotherapy/exercise referral and weight-management services.' }
    ]
  },

  'home-visit-confusion': {
    social: [
      { h:'Carer strain (the second patient)', t:'June is exhausted — offer a Carer’s Assessment under the Care Act 2014, respite and support; carer breakdown is a common reason placement fails.' },
      { h:'Home & safety', t:'Hydration, nutrition, falls risk and the practicalities of managing delirium at home shape the home-vs-admission decision.' }
    ],
    legal: [
      { h:'Mental Capacity Act 2005', t:'Edith likely lacks capacity for this decision now — act in her best interests, least-restrictive option, and involve family. Use a DoLS/its successor if care amounts to a deprivation of liberty.' },
      { h:'Safeguarding', t:'Be alert to safeguarding under the Care Act (s42) if neglect or abuse is suspected; check for any LPA for health & welfare.' }
    ],
    professional: [
      { h:'Capacity & best interests', t:'GMC: assess capacity decision-specifically, document it, and make best-interests decisions with those close to her — treating without consent only where she lacks capacity.' }
    ],
    community: [
      { h:'Support networks', t:'Age UK, Alzheimer’s Society, Admiral Nurses (dementia), local authority social care and carers’ services.' }
    ]
  },

  'acne-teen': {
    social: [
      { h:'School & self-esteem', t:'Acne in a 16-year-old can drive social withdrawal, bullying and low mood — the psychological impact is part of severity, not a soft add-on.' }
    ],
    legal: [
      { h:'Gillick competence / Fraser', t:'Assess capacity to consent in her own right; offer to see her alone. Confidentiality applies to under-16s who are competent, with the usual safeguarding caveats.' },
      { h:'Isotretinoin & pregnancy', t:'Specialist-initiated isotretinoin carries a Pregnancy Prevention Programme — legally and professionally important to flag (though started in secondary care).' }
    ],
    professional: [
      { h:'Mental-health duty', t:'GMC: actively screen mood and self-harm risk when appearance is affecting wellbeing, and act on it — not just treat the skin.' }
    ],
    community: [
      { h:'Youth resources', t:'Kooth (online support), YoungMinds, Papyrus (self-harm), the British Skin Foundation, and the school nurse.' }
    ]
  },

  'third-party-meno': {
    social: [
      { h:'Family impact', t:'A frightening row witnessed by a child and marital strain matter — but the route is supporting the husband to bring his wife in, not managing her by proxy.' }
    ],
    legal: [
      { h:'Confidentiality of a competent adult', t:'You cannot diagnose, prescribe for, or disclose information about Helen without her consent. Domestic-abuse and child-welfare concerns (Children Act 1989) override only where there is genuine risk.' }
    ],
    professional: [
      { h:'GMC Confidentiality (2017)', t:'You may listen and give general, non-personal information. Explain the boundary warmly and document the third-party contact in a way that doesn’t breach her confidentiality.' }
    ],
    community: [
      { h:'Resources to share', t:'NHS menopause pages, Women’s Health Concern, the Balance app; for risk, Samaritans (116 123) and the National Domestic Abuse Helpline.' }
    ]
  },

  'cough-smoker-2ww': {
    social: [
      { h:'Fear, denial & work', t:'Requesting antibiotics can mask fear of cancer (a parent’s history); ask about occupational exposures (e.g. asbestos) and the impact on family.' }
    ],
    legal: [
      { h:'Capacity & consent to referral', t:'Standard consent to urgent investigation; driving/occupational implications arise only if a serious diagnosis is later confirmed.' }
    ],
    professional: [
      { h:'Breaking bad news & candour', t:'Honest, plain-language explanation (SPIKES-style), continuity to give results in person, and GMC duty of candour — resist inappropriate antibiotics.' },
      { h:'Referral duty', t:'NG12: arrange the urgent CXR / suspected-cancer pathway and safety-net explicitly.' }
    ],
    community: [
      { h:'Support & cessation', t:'Roy Castle Lung Cancer Foundation, Asthma + Lung UK, Macmillan, and local stop-smoking services (varenicline/NRT + behavioural support).' }
    ]
  },

  'insulin-ramadan': {
    social: [
      { h:'Faith, culture & work', t:'Fasting for Ramadan and driving a taxi for a living are central — the plan must respect faith and protect livelihood, not override either.' }
    ],
    legal: [
      { h:'DVLA & diabetes', t:'On sulfonylureas/insulin: check glucose ≥5 to drive, test within 2h of driving and every 2h, carry fast sugar. Insulin must be notified to the DVLA; Group 2 rules are stricter (regular monitoring, hypo-awareness).' }
    ],
    professional: [
      { h:'Individualised, shared care', t:'GMC: respect his beliefs, set an individualised HbA1c target, and frame insulin as treatment not failure — decisions made with him.' }
    ],
    community: [
      { h:'Education & resources', t:'Diabetes UK Ramadan guidance, IDF-DAR risk stratification, and structured education (e.g. DESMOND) plus a pre-Ramadan review.' }
    ]
  },

  'lft-alcohol': {
    social: [
      { h:'Stress & stigma', t:'Being passed over for partnership, relationship and work pressure drive the drinking; a non-judgmental, stigma-aware approach is essential to engagement.' }
    ],
    legal: [
      { h:'DVLA & alcohol', t:'Alcohol dependence or persistent misuse must be notified to the DVLA and affects licensing until a period of controlled use/abstinence is demonstrated.' }
    ],
    professional: [
      { h:'Withdrawal safety & candour', t:'GMC good clinical care: never advise abrupt cessation where withdrawal features exist (seizure risk); arrange supported reduction and document honestly.' }
    ],
    community: [
      { h:'Alcohol support', t:'Drinkline, local alcohol services / We Are With You, Alcoholics Anonymous and Al-Anon (for family).' }
    ]
  },

  'sleep-paeds': {
    social: [
      { h:'The mother is the real patient', t:'Months of broken sleep with tearfulness and hopelessness point to maternal depression — recognise and assess her in her own right, with partner/support context.' }
    ],
    legal: [
      { h:'Safeguarding', t:'Maternal mental health and a young child mean safeguarding awareness throughout; assess risk to mother and child and act if present.' }
    ],
    professional: [
      { h:'Spotting the hidden agenda', t:'GMC: respond to cues and treat the person who needs treating — here, screening maternal mood and risk, not just advising on the child’s sleep.' }
    ],
    community: [
      { h:'Family & perinatal support', t:'Health Visitor, ICON (infant crying), The Sleep Charity, PANDAS / perinatal mental-health services, Home-Start, and Samaritans for crisis.' }
    ]
  }

};

/* ---------- "What you should do" playbook (ideal approach per station) ---------- */
window.SCA_PLAYBOOK = {

  'htn-young-bp': {
    history: {
      redFlags: ['Accelerated hypertension: severe headache, visual disturbance, chest pain, breathlessness, neurological symptoms — would prompt same-day assessment','BP ≥180/120 with any end-organ symptoms = emergency, not a routine review','Secondary-cause clues: heavy snoring + daytime sleepiness (OSA), drug/NSAID/decongestant use'],
      psychosocial: ['Tailor to a new father working long hours: salt/takeaways, energy drinks, alcohol, exercise, sleep','Name the impact — fear for his baby’s future and the pressure of “tablets for life”','Explore practical barriers to lifelong daily medication and monitoring'],
      ice: ['Idea: “Is this a fluke from rushing in / one bad reading?”','Concern: father’s stroke at 51 — “I don’t want my daughter watching me go the same way”','Expectation: hoping to be told it’s nothing, but wanting it dealt with properly if real']
    },
    diagnosis: 'Be honest we never diagnose hypertension from one reading: “Today’s reading is high, but a single clinic reading can mislead — I’d like home or 24-hour monitoring to find the true picture before we label anything.”',
    diagnosisLay: '“Think of one blood-pressure reading like one photo on a busy day — it might catch you at a bad moment. I want a week of readings at home, like a short film, so we judge the real average rather than one snapshot.”',
    management: {
      reflectIce: '“You mentioned your dad’s stroke and your little girl — that fear makes complete sense, and it’s exactly why taking this seriously now is the most protective thing you can do for her.”',
      psychosocial: 'Work around his long hours and energy-drink habit — pick ONE realistic change he chooses (e.g. one energy drink a day) rather than a lecture; address the OSA that worsens both BP and his exhaustion.',
      sharedPlan: ['Confirm with ABPM/HBPM; baseline U&E/eGFR, ACR, HbA1c, lipids, ECG; calculate QRISK3','First-line CCB for his phenotype (African/Caribbean origin, <55); statin if QRISK ≥10%','Agree one achievable lifestyle goal together; screen/refer for OSA'],
      safetyNet: ['Named 999 symptoms (severe headache, visual change, weakness, chest pain)','U&E check if ACEi/ARB started; review within 4 weeks with home readings']
    }
  },

  'rif-pain-young-female': {
    history: {
      redFlags: ['Ectopic red flags: late period + pain + spotting, shoulder-tip pain, dizziness/syncope, signs of shock','Risk factors: previous ectopic, PID/chlamydia, tubal surgery, IUD, assisted conception','SOCRATES of the pain; LMP, cycle, contraception, possibility of pregnancy'],
      psychosocial: ['Tailor to a couple actively trying to conceive — acknowledge the hope and the dread','Impact: who can support and transport her urgently; she may be alone/at work','Be alert to her need for reassurance without false reassurance'],
      ice: ['Idea: “Am I losing a baby?”','Concern: terrified something is seriously wrong','Expectation: wants to know what is happening and to be looked after quickly']
    },
    diagnosis: 'Do not falsely reassure: “Because your period is late and you have this pain with spotting and feeling faint, I have to take seriously a pregnancy settling outside the womb — an ectopic — and that needs checking today.”',
    diagnosisLay: '“Sometimes a pregnancy settles in the wrong place — in the tube instead of the womb. We can’t tell over the phone, and because it can become dangerous, the safe thing is a scan and a blood test today, not tomorrow.”',
    management: {
      reflectIce: '“I can hear how frightened you are that you might be losing a baby — whatever this turns out to be, ringing now was absolutely the right thing, and I’m going to make sure you’re seen quickly.”',
      psychosocial: 'Help her mobilise support (call partner), arrange transport, and give clear interim advice (nil-by-mouth, simple analgesia) so she feels held, not abandoned, while she gets there.',
      sharedPlan: ['Same-day Early Pregnancy Assessment Unit (or A&E if unwell/delay) — do not wait for a home test','Urine βhCG if to hand; nil-by-mouth in case of intervention; phone the unit so she is expected'],
      safetyNet: ['Explicit 999 for collapse, severe pain or heavy bleeding — say “you may have an ectopic”','Check back understanding of exactly what she will do now']
    }
  },

  'knee-pain-walker': {
    history: {
      redFlags: ['Hot, red, acutely swollen joint with systemic upset (septic arthritis) — urgent','True locking or giving-way (mechanical/meniscal); significant trauma','Inflammatory pattern: prolonged morning stiffness, multiple joints, systemic features'],
      psychosocial: ['Tailor to a keen hill-walker — frame everything around restoring valued activity','Impact on hobby, mood and independence; explore weight supportively, not as blame','Occupational impact if his role is physical'],
      ice: ['Idea: “It’s bone on bone”','Concern: needing a knee replacement and months off his feet','Expectation: assumes he’ll be sent for a scan']
    },
    diagnosis: 'State it plainly and reassure: “From your age, the activity-related pain and brief morning stiffness, this is osteoarthritis. When it’s this typical we diagnose it clinically — an X-ray rarely changes what we do.”',
    diagnosisLay: '“Osteoarthritis is the normal wear and tear of a well-used joint — like the tread on a favourite pair of walking boots. ‘Bone on bone’ sounds frightening, but it doesn’t mean you need a new knee, and staying active actually protects it.”',
    management: {
      reflectIce: '“You were dreading being told you need a replacement like your mate — let me reassure you: most people manage well for years without surgery, and we decide that on how you’re living, never on a scan.”',
      psychosocial: 'Anchor the plan to getting him back on the hills — exercise as treatment (not rest), and a little weight loss framed as offloading the joint for longer walks.',
      sharedPlan: ['Core: therapeutic exercise (strengthening + aerobic) ± weight loss — offered to everyone','Topical NSAID first-line; short oral NSAID + PPI for flares (cautious re age); avoid opioids','Refer physiotherapy; signpost Versus Arthritis / ESCAPE-pain'],
      safetyNet: ['Hot, very swollen, painful joint with feeling unwell → urgent review','Surgical opinion only if quality of life suffers despite conservative care; review in 6 weeks']
    }
  },

  'home-visit-confusion': {
    history: {
      redFlags: ['Sepsis/hypoxia/AKI as a delirium cause; reduced consciousness, seizure → escalate','Sudden, fluctuating change (delirium) vs slow decline (dementia)','PINCH ME precipitants — Pain, INfection, Constipation, deHydration, Medication (new co-codamol), Electrolytes'],
      psychosocial: ['Tailor to an exhausted carer (June) — her capacity to cope shapes home-vs-admission','Impact on home safety, nutrition, hydration and falls','Get collateral from the carer AND speak directly to Edith'],
      ice: ['Family idea: “Her dementia has suddenly got much worse”','Concern: she can no longer stay at home','Expectation: wanting something done today']
    },
    diagnosis: 'Distinguish delirium from dementia and give hope: “This sudden, fluctuating change is most likely a delirium — the brain reacting to something physical — and those triggers are treatable, so she may well come back to herself.”',
    diagnosisLay: '“This isn’t her dementia suddenly jumping ahead. Her brain is reacting to physical things — a strong new painkiller, constipation and not drinking enough — a bit like a phone glitching when it overheats. Cool it down and it usually works again.”',
    management: {
      reflectIce: '“I know you feared this was her dementia stepping down a level for good — I think it’s something different and more hopeful, and that once we fix the cause she should improve.”',
      psychosocial: 'Treat June as the second patient — offer a Carer’s Assessment (Care Act 2014), respite and support; build a plan that keeps Edith safely at home if June can be supported.',
      sharedPlan: ['Treat precipitants: stop co-codamol → paracetamol, laxative, hydration; urinalysis + bloods (FBC, U&E, CRP, glucose, calcium, B12/folate, TSH)','Decide home vs admission on safety; act in best interests (MCA) as she lacks capacity now, involving family'],
      safetyNet: ['Drowsy/unrousable, fever, stops drinking, sudden worsening → call us or 999','Chase urine/bloods today; planned review or revisit']
    }
  },

  'acne-teen': {
    history: {
      redFlags: ['Low mood / social withdrawal with thoughts of self-harm — screen directly','Nodulocystic disease or scarring needing specialist (isotretinoin) referral','Hormonal features (irregular periods, hirsutism) suggesting PCOS'],
      psychosocial: ['Tailor to a 16-year-old: school, friendships, bullying, confidence','Impact: stopping going out, hating her appearance — severity includes psychological burden','Offer to see her alone; respect her growing autonomy'],
      ice: ['Idea: the scars will be permanent','Concern: being judged/looked at; mum pushing for strong tablets','Expectation: hoping for “the strong tablets” (isotretinoin)']
    },
    diagnosis: 'Grade and explain, then manage expectations: “This is moderate acne, and the early scarring means we shouldn’t be timid — but the very strong tablet is specialist-started with safety steps, and there’s a lot I can start today that works well.”',
    diagnosisLay: '“Acne happens when tiny pores get blocked and inflamed — it’s not about being unclean, and it’s very treatable. Treating it well now is exactly how we stop new scars forming, so we’re protecting your skin for the future.”',
    management: {
      reflectIce: '“You’re really worried about scarring, and I’ve heard that — getting on top of this properly now is the best way to prevent more scars, which is exactly what you want.”',
      psychosocial: 'Name the impact on her mood and confidence; signpost youth support (Kooth/Papyrus) and keep the door open — treat the person, not just the spots.',
      sharedPlan: ['12-week fixed topical combination (e.g. adapalene + benzoyl peroxide); add an oral tetracycline for moderate–severe — never antibiotic monotherapy','Adherence advice (build up slowly, moisturise); offer COC given irregular periods','Review at 12 weeks; dermatology if severe/scarring/failed courses'],
      safetyNet: ['If mood worsens or any self-harm thoughts → reach out sooner; crisis routes given','Confidentiality + safeguarding handled appropriately for her age']
    }
  },

  'third-party-meno': {
    history: {
      redFlags: ['Domestic abuse / child welfare — sensitively screen (was anyone hurt or frightened?)','Risk of self-harm in the wife — establish if present','Consent: does Helen know her husband has called?'],
      psychosocial: ['Tailor to a worried husband: marital strain, a frightened child, his sense of helplessness','Impact on the whole family; validate his care while holding the boundary','Explore what he has and hasn’t discussed with Helen'],
      ice: ['Idea: “It’s her hormones — the menopause”','Concern: the marriage and the children; “the woman I married has vanished”','Expectation: wants you to put her on HRT']
    },
    diagnosis: 'Hold the confidentiality line warmly: “Because Helen is an adult who can make her own decisions, I can’t diagnose, prescribe for, or share anything about her without her consent — that protects her, and you too. But I can listen and give general information.”',
    diagnosisLay: '“I know it’s frustrating, but I can only treat someone I’ve spoken with myself — a bit like a bank won’t discuss your wife’s account with you, even with the best intentions. The most powerful thing is helping her feel able to come in herself.”',
    management: {
      reflectIce: '“You came in hoping I’d prescribe HRT because you love her and want the old Helen back — I can’t do that without her, but I can help you get her through the door, which gets you to the same place.”',
      psychosocial: 'Acknowledge the family strain; coach a gentle, non-clinical conversation (“I miss us, would you see someone”) rather than “the doctor says you need HRT”; offer to see them together.',
      sharedPlan: ['Give general (non-personal) info: perimenopause is clinical >45 without routine FSH; HRT is effective first-line','Encourage Helen to book her own appointment — offer a joint appointment with her consent','Share resources (NHS menopause, Women’s Health Concern, Balance app)'],
      safetyNet: ['If he ever fears she might harm herself → urgent help, Samaritans 116 123, 999','Document the third-party contact without breaching her confidentiality']
    }
  },

  'cough-smoker-2ww': {
    history: {
      redFlags: ['Haemoptysis, unexplained weight loss, appetite loss, hoarseness >3 weeks, breathlessness, chest pain','Massive haemoptysis or breathlessness at rest = emergency','Smoking pack-years and occupational exposure (e.g. asbestos)'],
      psychosocial: ['Tailor to a man minimising symptoms and asking for antibiotics — explore why','Impact: a parent’s lung cancer driving avoidance/fear; effect on family','Readiness to discuss smoking — offer, don’t lecture'],
      ice: ['Idea: “It’s just a lingering chest infection”','Concern: hidden fear of cancer (father’s history) he’s trying not to think about','Expectation: wants a course of antibiotics']
    },
    diagnosis: 'Be honest, not falsely reassuring: “A cough this long with a fleck of blood, some weight loss and a hoarse voice in someone who smokes is something I can’t safely treat as a chest infection — I want an urgent X-ray within two weeks to rule out anything serious, including cancer.”',
    diagnosisLay: '“I’m not saying you have cancer — most of these turn out fine — but the safe thing is a quick chest X-ray within two weeks to look properly, rather than guessing with antibiotics. Finding anything early is exactly what gives the best outcome.”',
    management: {
      reflectIce: '“I think the reason you wanted antibiotics is that the other possibility — the one your dad had — is frightening to face. I’m really glad you told me, because being straight with each other is how I look after you best.”',
      psychosocial: 'Acknowledge the fear and his father’s history; promise continuity (you’ll give the result in person); offer smoking cessation as support, only when he’s ready.',
      sharedPlan: ['Urgent CXR within 2 weeks / suspected-cancer pathway (NG12); separate head-and-neck pathway for hoarseness >3 weeks','No antibiotics; offer evidence-based smoking cessation (varenicline/NRT + support) when ready','Arrange in-person follow-up to give the result'],
      safetyNet: ['Coughing up a lot of blood, severe breathlessness or chest pain → 999/A&E','Confirm he knows the plan back']
    }
  },

  'insulin-ramadan': {
    history: {
      redFlags: ['Hypoglycaemia (shaky/sweaty episodes), especially while driving — and DKA awareness','Driving safety on sulfonylurea/insulin; complications (eyes, feet)','Fasting risk: dehydration, hypo/hyper while fasting (IDF-DAR risk category)'],
      psychosocial: ['Tailor to faith (wishing to fast for Ramadan) and livelihood (taxi driver)','Impact: meals all over the place on shift; family and cultural context','Explore the meaning of insulin to him'],
      ice: ['Idea: insulin means he has “failed” / is going downhill like his father','Concern: a dangerous hypo while fasting or driving','Expectation: wants to fast safely with his family']
    },
    diagnosis: 'Reframe and individualise: “Your HbA1c is higher than we’d like, so we do need to do more — but insulin isn’t the only next step and it isn’t failure; diabetes is progressive. There are newer medicines that lower sugars, protect heart and kidneys and rarely cause hypos.”',
    diagnosisLay: '“Diabetes tends to need more help over time — that’s the condition, not you failing. Your sugars have crept up, so we step the treatment up. There are modern options that work well and rarely cause those shaky low-sugar moments.”',
    management: {
      reflectIce: '“You said insulin feels like failing, like it did for your dad — I want to be clear this isn’t that, and we can almost certainly avoid it for now while still keeping you safe to fast and to drive.”',
      psychosocial: 'Respect both faith and job: plan a safe fast (faith permits breaking it for illness/hypo) and protect his driving — never force a choice between health, work and religion.',
      sharedPlan: ['Add organ-protective agent (SGLT2i and/or GLP-1 RA) before reflex insulin; reduce/switch the sulfonylurea (hypo risk for fasting)','Pre-Ramadan review + structured education; agree an individualised HbA1c target','DVLA duties: glucose ≥5 to drive, test before and every 2h, carry sugar; notify DVLA if insulin'],
      safetyNet: ['Severe hypo you can’t treat, repeated vomiting, very unwell while fasting → break fast / 999','Sick-day rules and hypo treatment; arrange review']
    }
  },

  'lft-alcohol': {
    history: {
      redFlags: ['Withdrawal: the “jittery, sweaty dry week” — abrupt cessation risks seizures/DTs','Dependence (4Cs, morning drinking); decompensated liver disease signs','Other causes: viral, metabolic, drug-induced'],
      psychosocial: ['Tailor to work stress (passed over for partnership), relationships, stigma','Impact: drinking as the way he copes — treat the driver, not just the numbers','Quantify actual weekly units non-judgmentally; AUDIT-C/AUDIT'],
      ice: ['Idea: assumed tiredness was “just stress / run down”','Concern: “Have I damaged my liver?”','Expectation: wanted answers from the bloods, half-fearing a telling-off']
    },
    diagnosis: 'Name it honestly without labelling: “Your liver tests show a pattern that, with what you’ve told me, points to alcohol as the main cause — and the good news is the liver can recover if we act now. But stopping suddenly on your own can be dangerous, so we reduce in a supported way.”',
    diagnosisLay: '“Your liver’s been working overtime to handle the alcohol, and the blood test shows the strain. The liver is forgiving and can heal if we ease off now — but going cold turkey on your own can actually be dangerous, so we do it with support.”',
    management: {
      reflectIce: '“You came in worried this might be your liver, and braced for a lecture — there’s no lecture here. This is fixable, and being this honest with me is the single thing that changes the outcome.”',
      psychosocial: 'Address the engine behind the drinking — work stress, sleep and mood — alongside the alcohol; treating one without the other rarely sticks. Approach with stigma-aware respect.',
      sharedPlan: ['Further tests (fibrosis e.g. ELF/FIB-4; viral/autoimmune/ferritin; repeat LFTs)','Supported reduction — never abrupt cessation with withdrawal features; refer alcohol services; Drinkline','Tackle sleep/stress/mood together with the drinking'],
      safetyNet: ['Cutting down too fast with shakes, sweats, confusion or any seizure → 999','Review in 2 weeks']
    }
  },

  'sleep-paeds': {
    history: {
      redFlags: ['Maternal depression with hopelessness — screen mood and self-harm risk directly','Organic child causes: snoring/apnoea, daytime sleepiness, faltering growth, developmental concern','Safeguarding awareness (mother and young child)'],
      psychosocial: ['Tailor to an exhausted mother “on her knees” — she may be the real patient','Impact: months of broken sleep, tearfulness, snapping at the family, support at home','Establish the child is well, thriving and developing normally'],
      ice: ['Idea: something is wrong with the child','Concern: she isn’t coping; hopelessness','Expectation: wants a medicine to make him sleep']
    },
    diagnosis: 'Reassure on the child, surface the real issue: “A thriving, sociable boy with no snoring or daytime sleepiness almost always has a behavioural sleep pattern, not a medical disorder — and I’m also struck by how exhausted and low you’re feeling.”',
    diagnosisLay: '“There’s nothing medically wrong with Aaron — he’s just learned to fall asleep with you and the telly there, so when he naturally stirs he needs that back to resettle. We can gently teach him to drift off on his own. And honestly, you matter here too.”',
    management: {
      reflectIce: '“You came worried something was wrong with Aaron and hoping for something to help him sleep — the good news is he’s well, and there’s a method that really works. But I don’t want to fix his nights and miss how you’re doing.”',
      psychosocial: 'Recognise the mother in her own right — validate the exhaustion, screen and treat her mood, and mobilise practical support so the behavioural plan is even achievable.',
      sharedPlan: ['Behavioural plan: consistent wind-down, put down sleepy-but-awake, gradual retreat; melatonin not routine (specialist-only)','Mobilise support: Health Visitor, The Sleep Charity, ICON','Assess and treat maternal mood — book her own appointment this week'],
      safetyNet: ['Worsening mood or thoughts of self-harm/harming the child → urgent help, 111, Samaritans, 999','Review; advise if the child develops snoring or seems unwell']
    }
  }

};

/* ---------- "Go deeper" links — verified Reasoning GP destinations per case ---------- */
window.SCA_LINKS = {
  'htn-young-bp': [
    { ic:'📋', t:'Hypertension', s:'Case walkthrough · NICE NG136', href:'../cases/hypertension.html' },
    { ic:'🗺️', t:'Hypertension pathway', s:'Visual algorithm · ABPM logic', href:'algorithms/hypertension.html' },
    { ic:'💠', t:'Cardiovascular protocols', s:'Drug ladders · monitoring', href:'management.html?cat=cardiovascular-and-renal' },
    { ic:'🧮', t:'QRISK3', s:'Medical Calculators', href:'calculators.html' }
  ],
  'rif-pain-young-female': [
    { ic:'📋', t:'Abdominal pain', s:'Case walkthrough', href:'../cases/abdominal-pain.html' },
    { ic:'🗺️', t:'Abdominal pain pathway', s:'Visual algorithm', href:'algorithms/abdominal-pain.html' },
    { ic:'🗺️', t:'Vaginal bleeding in pregnancy', s:'Ectopic & miscarriage pathway', href:'algorithms/vaginal-bleeding-pregnancy.html' }
  ],
  'knee-pain-walker': [
    { ic:'📋', t:'Osteoarthritis', s:'Case walkthrough · NICE NG226', href:'../cases/osteoarthritis.html' },
    { ic:'🗺️', t:'Knee pain pathway', s:'Visual algorithm', href:'algorithms/knee-pain.html' },
    { ic:'💠', t:'MSK protocols', s:'Stepwise treatment', href:'management.html?cat=musculoskeletal-and-rheumatology' }
  ],
  'home-visit-confusion': [
    { ic:'🗺️', t:'Delirium pathway', s:'4AT · PINCH ME', href:'algorithms/delirium.html' },
    { ic:'🗺️', t:'Confusion pathway', s:'Visual algorithm', href:'algorithms/confusion.html' },
    { ic:'📋', t:'Dementia', s:'Case walkthrough', href:'../cases/dementia.html' }
  ],
  'acne-teen': [
    { ic:'💠', t:'Dermatology protocols', s:'Incl. acne ladder · NG198', href:'management.html?cat=dermatology' },
    { ic:'📝', t:'Ready Prescriptions', s:'Skin bundles · EMIS copy-paste', href:'prescriptions.html' },
    { ic:'📄', t:'Patient Leaflets', s:'For Sophie to take away', href:'leaflets.html' }
  ],
  'third-party-meno': [
    { ic:'📋', t:'Menopause', s:'Case walkthrough · NICE NG23', href:'../cases/menopause.html' },
    { ic:'🗺️', t:'HRT & menopause pathway', s:'Diagnosis · HRT initiation', href:'algorithms/hrt-menopause.html' },
    { ic:'💠', t:'Women’s health protocols', s:'Incl. HRT preparations', href:'management.html?cat=women-s-health' }
  ],
  'cough-smoker-2ww': [
    { ic:'🗺️', t:'Chronic cough pathway', s:'NG12 2WW criteria', href:'algorithms/chronic-cough.html' },
    { ic:'🗺️', t:'Hoarseness pathway', s:'Laryngeal 2WW route', href:'algorithms/hoarseness.html' },
    { ic:'💠', t:'Lifestyle & prevention', s:'Smoking cessation', href:'management.html?cat=lifestyle-and-prevention' }
  ],
  'insulin-ramadan': [
    { ic:'🗺️', t:'T2DM & Ramadan pathway', s:'IDF-DAR · fasting adjustments', href:'algorithms/t2dm-ramadan.html' },
    { ic:'📋', t:'Type 2 diabetes', s:'Case walkthrough · NG28', href:'../cases/type-2-diabetes.html' },
    { ic:'🗺️', t:'Driving & disease', s:'DVLA rules pathway', href:'algorithms/driving-diseases.html' }
  ],
  'lft-alcohol': [
    { ic:'🗺️', t:'Abnormal LFTs pathway', s:'Pattern reading · fibrosis', href:'algorithms/abnormal-lfts.html' },
    { ic:'📋', t:'Abnormal LFTs', s:'Case walkthrough', href:'../cases/abnormal-lfts.html' },
    { ic:'🧪', t:'Lab Results hub', s:'Every abnormal blood test', href:'lab-results.html' }
  ],
  'sleep-paeds': [
    { ic:'🗺️', t:'Children’s sleep pathway', s:'Behavioural approach', href:'algorithms/sleep-problems-children.html' },
    { ic:'🗺️', t:'Postnatal disorders pathway', s:'Maternal mood screen', href:'algorithms/postnatal-disorders.html' },
    { ic:'📋', t:'Depression', s:'Case walkthrough (for mum)', href:'../cases/depression.html' }
  ]
};

/* Attach to case objects */
(function(){
  if (!window.SCA_CASES) return;
  window.SCA_CASES.forEach(function(c){
    if (window.SCA_KB && window.SCA_KB[c.id]) c.kb = window.SCA_KB[c.id];
    if (window.SCA_PLAYBOOK && window.SCA_PLAYBOOK[c.id]) c.playbook = window.SCA_PLAYBOOK[c.id];
    if (window.SCA_LINKS && window.SCA_LINKS[c.id]) c.links = window.SCA_LINKS[c.id];
  });
})();
