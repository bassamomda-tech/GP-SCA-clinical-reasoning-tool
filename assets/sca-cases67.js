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
    id: 'sjs-ten',
    title: '"I started a new tablet, now I\u2019ve got a spreading rash, blisters and my mouth and eyes are raw"',
    type: 'video',
    duration: 12,
    meta: {
      age: 34,
      sex: 'F',
      setting: 'Video/urgent \u2014 severe rash after a new drug (observations cannot be taken on video).',
      system: 'Dermatology / Urgent care \u2014 Stevens-Johnson syndrome / TEN',
      checked: 'October 2026'
    },
    brief: 'Mrs Nadia Karim, 34, started LAMOTRIGINE for epilepsy about ten days ago (1\u20132 weeks; this is the culprit drug \u2014 other high-risk culprits include allopurinol, sulfonamide antibiotics and oxicam NSAIDs) and has a rapidly spreading painful rash with dusky/target macules, blisters and skin sloughing, plus painful erosions of mouth, eyes and genitals, fever and malaise. Recognise STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS \u2014 a life-threatening severe cutaneous adverse drug reaction \u2014 from a culprit drug + painful (not itchy) skin + mucosal involvement (\u22652 sites) + skin detachment (Nikolsky+) + systemic illness; STOP the culprit drug immediately; arrange IMMEDIATE admission (dermatology-led care, often burns/ITU, with EARLY ophthalmology review \u2014 BAD UK guidelines 2016) and assess sepsis risk (NICE NG253), accepting observations cannot be taken on video; if the culprit is an antiepileptic, stopping it still comes first and the hospital arranges safe seizure cover; know the extent bands (SJS <10%, SJS/TEN overlap 10\u201330%, TEN >30%) and the differential (erythema multiforme, SSSS, DRESS); document a severe drug reaction and report on a Yellow Card (MHRA). Not a minor drug rash.',
    script: {
      opening: '"I started a new tablet about ten days ago \u2014 lamotrigine, for my epilepsy \u2014 and now I\u2019ve got this rash spreading everywhere, some bits blistering and the skin coming away. My mouth is full of painful sores, my eyes are red and sore, and it hurts to wee. I feel awful and feverish. Is this the tablet?"',
      facts: [
        {
          topic: 'The rash',
          text: 'Started 2 days ago on her chest and face as dusky red-purple blotches, now spreading to arms and back. Some have blistered; skin on her chest peels away if rubbed \u2014 will show the camera if asked. Burning and painful rather than itchy.'
        },
        {
          topic: 'Mouth, eyes, genitals',
          text: 'Lips crusted and bleeding; mouth full of sores; swallowing hurts but can sip water. Both eyes red, gritty, sore in the light. Painful to pass urine; sores "down below".'
        },
        {
          topic: 'How she feels',
          text: 'Fever 38.6 on her thermometer, shivery, achy, weak. Breathing OK. Not confused. Passing small amounts of urine.'
        },
        {
          topic: 'Medicines',
          text: 'Lamotrigine started 10 days ago by the neurologist (had been on levetiracetam, which made her moody). Nothing else new \u2014 no antibiotics, no painkillers apart from paracetamol yesterday. On the progestogen-only pill. No known allergies before this.'
        },
        {
          topic: 'Epilepsy',
          text: 'Generalised seizures since age 19; last seizure 6 months ago. Not driving because of that. Worried about fitting without her tablet.'
        },
        {
          topic: 'Social',
          text: 'Lives with her husband, Saif, who is at work 20 minutes away; her mother lives nearby. Two children at school. Works as a pharmacy technician.'
        },
        {
          topic: 'How to play it',
          text: 'Frightened, in pain, speaking carefully because of mouth sores. You underestimate how serious it is and ask "Can\u2019t I just have some cream?" when hospital is mentioned. Then worry about your epilepsy: "But it\u2019s for my epilepsy \u2014 what if I have a fit?" Accept an ambulance once the danger is explained.'
        }
      ],
      ice: {
        ideas: '"I think it\u2019s an allergy to the new tablet."',
        concerns: 'HIDDEN AGENDA \u2014 fear of having a seizure if she stops the tablet, and who will collect the children from school.',
        expectations: '"Some cream or antihistamines." Does not expect to be told it is an emergency.'
      },
      cues: [
        '"Is this the tablet?" \u2014 the culprit drug, started 10 days ago.',
        '"The skin is coming away" and "my mouth and eyes are raw" \u2014 the emergency features.',
        '"What if I have a fit?" \u2014 her worry about stopping lamotrigine, to address while still stopping it.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises SJS/TEN from the red flags \u2014 recent culprit drug, painful rash, dusky/target lesions, blistering/skin detachment (Nikolsky), and MUCOSAL involvement (mouth/eyes/genitals) with systemic illness'
      },
      {
        dom: 'dg',
        text: 'Identifies the likely CULPRIT DRUG (antiepileptics, allopurinol, sulfonamides/antibiotics, oxicam NSAIDs, nevirapine) and STOPS it immediately \u2014 knowing that for an antiepileptic the hospital arranges seizure cover'
      },
      {
        dom: 'cm',
        text: 'Recognises a life-threatening EMERGENCY and arranges IMMEDIATE admission (dermatology/burns/ITU + early ophthalmology) with a sepsis risk assessment (NICE NG253) \u2014 not community management'
      },
      {
        dom: 'dg',
        text: 'Knows the extent bands (SJS <10%, overlap 10\u201330%, TEN >30%), the differential (erythema multiforme, staph scalded skin, DRESS) and the seriousness (skin failure, fluid loss, infection, mortality)'
      },
      {
        dom: 'cm',
        text: 'Documents the suspected drug as a SEVERE reaction to prevent fatal re-exposure, flags related drugs for specialist discussion, and reports on a Yellow Card (MHRA)'
      },
      {
        dom: 'ro',
        text: 'Communicates urgency clearly but calmly to a frightened patient and arranges emergency transfer'
      },
      {
        dom: 'ro',
        text: 'Checks understanding of the need for hospital specialist care, avoiding both panic and false reassurance'
      },
      {
        dom: 'cm',
        text: 'Arranges disposition: emergency admission today (999/acute), drug stopped + allergy documented + Yellow Card, early ophthalmology/skin care flagged, clear handover'
      }
    ],
    worked: [
      {
        lbl: 'Recognise + reframe',
        txt: '"I\u2019m glad you contacted us \u2014 yes, this is very likely a serious reaction to the new tablet. The spreading blistering rash, skin coming away, and raw mouth, eyes and genitals make me think of Stevens-Johnson syndrome. That\u2019s an emergency, not a minor rash."'
      },
      {
        lbl: 'Stop the drug',
        txt: '"Stop the lamotrigine now and take no more. I\u2019ll record it as a serious allergy so you\u2019re never given it again \u2014 re-taking it could be dangerous \u2014 and I\u2019ll report it to the medicines safety scheme. I know it\u2019s for your epilepsy \u2014 the hospital will give you safe seizure cover straight away, today."'
      },
      {
        lbl: 'Admit',
        txt: '"You need hospital straight away \u2014 I can\u2019t check your pulse, blood pressure or temperature over video \u2014 skin specialists, often burns-level care, and eye specialists early on, because your skin and the surfaces of your eyes and mouth need protecting. I\u2019m arranging that now."'
      },
      {
        lbl: 'Why urgent',
        txt: '"When skin is affected this badly it can\u2019t do its job \u2014 fluid loss and infection become a real risk \u2014 so this can\u2019t wait or be managed at home."'
      },
      {
        lbl: 'Practical',
        txt: '"Don\u2019t put creams on it, sip fluids if you can, and bring the tablet packet so they know exactly what caused it."'
      },
      {
        lbl: 'Safety-net',
        txt: '"If your breathing becomes difficult, you can\u2019t swallow, or you feel very faint, call 999. The plan is hospital, now \u2014 I\u2019ll make sure they\u2019re expecting you."'
      }
    ],
    learning: 'STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS (SJS/TEN) is a life-threatening severe cutaneous adverse drug reaction: a recent culprit DRUG plus a PAINFUL (not merely itchy) rash with dusky/target macules, BLISTERS and skin detachment (Nikolsky+), and crucially MUCOSAL erosions of \u22652 of mouth/eyes/genitals, with fever and systemic illness (SJS <10% body-surface detachment, SJS/TEN overlap 10\u201330%, TEN >30% \u2014 BAD UK guidelines 2016). The combination of mucosal involvement, skin detachment and a culprit drug is the alarm. Identify the culprit (antiepileptics \u2014 lamotrigine/carbamazepine/phenytoin; allopurinol; sulfonamide/other antibiotics; oxicam NSAIDs; nevirapine), typically started days-weeks before, and STOP it immediately (for an antiepileptic the hospital arranges safe seizure cover), documenting a severe drug allergy and reporting on a Yellow Card (MHRA), since re-exposure can be fatal and prompt withdrawal improves outcome. Recognise an EMERGENCY with significant mortality (skin failure causes fluid/electrolyte loss, thermoregulation failure, infection/sepsis, eye/mucosal complications) and arrange IMMEDIATE admission \u2014 dermatology with burns/ITU-level supportive care and EARLY ophthalmology, with a sepsis risk assessment (NICE NG253; observations cannot be taken on video) \u2014 not community management. Know the differential: erythema multiforme (milder, target lesions, often post-HSV, less mucosal/systemic), staphylococcal scalded skin (mostly young children, no mucosa), and DRESS (rash, fever, eosinophilia, organ involvement). Communicate the urgency clearly but calmly, arrange emergency transfer, and ensure the drug is stopped and documented. The skill is rapid pattern recognition, stopping the drug, and emergency admission \u2014 not a community antihistamine.',
    knowledge: {
      guideline: '[1] UK guidelines for the management of Stevens\u2013Johnson syndrome/toxic epidermal necrolysis in adults (British Association of Dermatologists, 2016) \u00b7 [2] NICE NG253 (suspected sepsis in people aged 16 and over) \u00b7 [3] MHRA Yellow Card scheme \u00b7 stop culprit + emergency admission \u00b7 differential (EM/SSSS/DRESS)',
      points: [
        {
          h: 'Recognise SJS/TEN',
          t: 'Recent culprit drug + painful rash, dusky/target lesions, blistering/skin detachment (Nikolsky), mucosal involvement (\u22652 of mouth/eyes/genitals), systemic illness. SJS <10%, SJS/TEN overlap 10\u201330%, TEN >30% detachment [1].'
        },
        {
          h: 'Stop the culprit',
          t: 'Antiepileptics (lamotrigine/carbamazepine/phenytoin/phenobarbital), allopurinol, sulfonamides such as co-trimoxazole, oxicam NSAIDs, nevirapine [1]. Stop immediately; prompt withdrawal improves outcome. Antiepileptic culprit: hospital arranges seizure cover; never restart without specialist advice.'
        },
        {
          h: 'Emergency admission',
          t: 'Life-threatening (skin failure, fluid loss, infection, eye/mucosal complications, mortality). Immediate admission \u2014 dermatology/burns/ITU + early ophthalmology [1]; sepsis risk (NICE NG253 [2]). Not community management.'
        },
        {
          h: 'Differential',
          t: 'Erythema multiforme (milder, target, post-HSV, less mucosal/systemic), staph scalded skin (mostly young children, no mucosa), DRESS (rash/fever/eosinophilia/organ).'
        },
        {
          h: 'Document the allergy',
          t: 'Record the drug as a severe reaction with date and reaction, and discuss related drugs with the specialist \u2014 re-exposure can be fatal. Yellow Card report [3]. Bring the packet.'
        },
        {
          h: 'Communicate',
          t: 'Convey urgency calmly; arrange emergency transfer; avoid panic and false reassurance; explain hospital specialist care is needed.'
        },
        {
          h: 'Never do',
          t: 'Never treat as a minor/community rash; never continue the culprit; never delay admission; never re-challenge; never miss the mucosal involvement.'
        },
        {
          h: 'Safety-net & disposition',
          t: 'Emergency admission today (999/acute), drug stopped + allergy documented, ophthalmology/skin care flagged; 999 for breathing/swallowing difficulty or collapse en route.'
        }
      ]
    }
  };

  /* ===== 241. Kawasaki disease ===== */
  const c241 = {
    id: 'kawasaki-disease',
    title: '"My little girl\u2019s had a high fever for six days, a rash, red eyes and cracked lips \u2014 the calpol isn\u2019t touching it"',
    type: 'video',
    duration: 12,
    meta: {
      age: 3,
      sex: 'F',
      setting: 'Video \u2014 a child with prolonged fever, mother present (heart rate, capillary refill and hydration cannot be assessed on video).',
      system: 'Paediatrics \u2014 Kawasaki disease (coronary risk)',
      checked: 'October 2026'
    },
    brief: 'Ivy Calderwood, 3, has fever \u22656 days despite antipyretics, plus polymorphous rash, bilateral non-purulent conjunctivitis, red/cracked lips and strawberry tongue, red/swollen hands, and a cervical node; irritable and miserable. Recognise KAWASAKI DISEASE \u2014 NICE NG143: be aware of Kawasaki disease in a child with fever lasting 5 days or longer, without needing 4 of the principal features (conjunctival injection without exudate, mucosal changes, cervical lymphadenopathy, polymorphous rash, extremity changes); the "\u22654 of 5" rule is the AHA research definition (international) \u2014 a clinical diagnosis (beware incomplete/atypical, esp. infants); do the NG143 traffic-light and NICE NG254 sepsis risk assessment, knowing heart rate, capillary refill and hydration cannot be judged on video; know the major complication is CORONARY ARTERY ANEURYSM, reduced by prompt IVIG + aspirin within ~10 days; make an URGENT same-day paediatric referral (emergency transfer if any red feature or high-risk sepsis criterion); exclude mimics (measles, scarlet fever); antipyretics are for distress only, not given together (NG143); parents must not give aspirin at home (BNFC). Not "just a virus".',
    script: {
      opening: '"I\u2019m really worried about Ivy \u2014 raging temperature for six days now, Calpol and Nurofen barely touch it. She\u2019s got a blotchy rash, really red eyes but not gunky, cracked red lips, a tongue like a strawberry, and puffy red hands. So miserable. Everyone says it\u2019s just a virus, but six days?"',
      facts: [
        {
          topic: 'Who is calling',
          text: 'Mother, Jade, on video with Ivy (3) on her lap. Ivy is grizzly, flushed, clingy and won\u2019t settle.'
        },
        {
          topic: 'The fever',
          text: 'Six days, up to 39.8. Comes down a little with Calpol and Nurofen, then straight back up. Saw the out-of-hours GP on day 2 \u2014 "probably viral".'
        },
        {
          topic: 'How it developed',
          text: 'Fever first; red eyes and a blotchy rash on her body two days later; then cracked red lips and a red "strawberry" tongue; hands and feet red and puffy since yesterday. Eyes red but no gunk. Tender lump on the right side of her neck.'
        },
        {
          topic: 'Traffic-light questions',
          text: 'Awake but grizzly; responds to Mum, smiles a little at her favourite toy. Drinking less than normal, wet nappy/wee about 3 times today. No cough, no runny nose, breathing normal. Rash blanches when Jade presses a glass. No vomiting or diarrhoea. No fits.'
        },
        {
          topic: 'Background',
          text: 'Born at term, healthy. Vaccinations "I think up to date \u2014 I\u2019d need to check her red book". No medicines except Calpol/Nurofen. No allergies. Nobody else ill at home. No travel abroad.'
        },
        {
          topic: 'Social',
          text: 'Lives with partner, Craig, and baby son (8 months). Jade has a car. Craig is at work but can come home.'
        },
        {
          topic: 'How to play it',
          text: 'Worried, tired, a little defensive because you feel nobody is listening. If the doctor takes you seriously, relief. Ask: "Is it serious?" and "Can I drive her in myself?". Ask what to give for the fever.'
        }
      ],
      ice: {
        ideas: '"Everyone says it\u2019s a virus, but I don\u2019t believe that any more."',
        concerns: 'HIDDEN AGENDA \u2014 "I feel something\u2019s really wrong. She\u2019s never been this poorly, and nobody\u2019s listening." She fears she\u2019ll be seen as a fussy mum.',
        expectations: '"Find out what it is. Maybe something stronger for the fever."'
      },
      cues: [
        '"Six days?" \u2014 the length of fever is the key red flag.',
        '"Everyone says it\u2019s just a virus" \u2014 her instinct has been dismissed.',
        '"Can I drive her in myself?" \u2014 practical arrangements for same-day assessment.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises possible KAWASAKI \u2014 fever lasting 5 days or more (NICE NG143: be aware without needing 4 features) with bilateral non-purulent conjunctivitis, mucosal changes, cervical lymphadenopathy, polymorphous rash, extremity changes'
      },
      {
        dom: 'dg',
        text: 'Knows it is CLINICAL and is alert to INCOMPLETE/ATYPICAL Kawasaki (esp. infants, higher coronary risk) \u2014 low referral threshold'
      },
      {
        dom: 'dg',
        text: 'Understands the CORONARY ARTERY ANEURYSM complication and that early recognition/treatment reduces risk'
      },
      {
        dom: 'cm',
        text: 'Makes an URGENT same-day paediatric referral/admission after an NG143 traffic-light and NG254 sepsis assessment (recognising the limits of video), knowing treatment is IVIG + aspirin within ~10 days, with echocardiography, and that aspirin is not given at home (BNFC)'
      },
      {
        dom: 'dg',
        text: 'Considers/excludes mimics (measles, scarlet fever, viral exanthems, toxin-mediated illness) without delaying referral'
      },
      {
        dom: 'ro',
        text: 'Takes the prolonged fever and the mother\u2019s concern seriously, validating that 6 days of fever warrants action not more reassurance'
      },
      {
        dom: 'ro',
        text: 'Explains the need for urgent paediatric assessment clearly and calmly, checking understanding'
      },
      {
        dom: 'cm',
        text: 'Arranges disposition: urgent same-day paediatric referral, deterioration advice en route, clear communication \u2014 recognising Kawasaki, not dismissing as "just a virus"'
      }
    ],
    worked: [
      {
        lbl: 'Validate + take seriously',
        txt: '"You\u2019re right to push \u2014 six days of high fever that won\u2019t come down, with red eyes, cracked lips and that rash, is NOT something to keep calling a virus. There\u2019s a condition I\u2019m concerned about called Kawasaki disease."'
      },
      {
        lbl: 'Examine',
        txt: '"Can you show me Ivy on the camera \u2014 her eyes, lips and tongue, the rash, her hands and feet, and her neck? \u2026 She has several features plus the long fever, which is exactly why I want her seen in person today \u2014 I can\u2019t check her heart rate, circulation or how dry she is over video. Is she drinking and passing urine? Any breathing difficulty or very sleepy spells?"'
      },
      {
        lbl: 'Why it matters',
        txt: '"We act fast because, untreated, this can affect the blood vessels around the heart \u2014 and treatment within the first ten days or so greatly reduces that risk. That\u2019s why it\u2019s urgent, not wait-and-see."'
      },
      {
        lbl: 'Refer',
        txt: '"I\u2019m referring Ivy to the children\u2019s team to be seen today \u2014 they\u2019ll confirm it, do a heart scan, and treat with immunoglobulin and aspirin if it\u2019s Kawasaki. Please don\u2019t give her aspirin yourself \u2014 it\u2019s only used by the specialists."'
      },
      {
        lbl: 'Address mother',
        txt: '"You did exactly the right thing trusting your instinct and bringing her \u2014 this isn\u2019t you overreacting."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Keep her comfortable and give plenty of fluids. Use Calpol or Nurofen only if she\u2019s distressed, not both at the same time. If she becomes very drowsy, breathless or much worse, call 999. I\u2019ll make sure the team are expecting her."'
      }
    ],
    learning: 'KAWASAKI DISEASE is a medium-vessel vasculitis of young children. NICE NG143: be aware of it in any child with FEVER lasting 5 DAYS or longer \u2014 4 features are not required (the "\u22654 of 5" rule is the AHA 2017 research definition, international); the features are bilateral NON-purulent conjunctivitis; mucosal changes (red/cracked lips, strawberry tongue); cervical lymphadenopathy; polymorphous rash; and extremity changes (palm/sole erythema-oedema, later peeling). It is a CLINICAL diagnosis with no single confirmatory test (inflammatory markers and later thrombocytosis support it), and clinicians must be alert to INCOMPLETE/ATYPICAL Kawasaki \u2014 especially in INFANTS, who present atypically and are at higher coronary risk \u2014 keeping a low referral threshold. The critical reason for early recognition is the risk of CORONARY ARTERY ANEURYSMS (a leading cause of acquired paediatric heart disease), substantially reduced by prompt treatment, so a prolonged-fever child with these features must not be dismissed as "just a virus". The action is an URGENT same-day paediatric referral/admission after an NG143 traffic-light and NICE NG254 sepsis assessment (on video, heart rate, capillary refill and hydration cannot be judged; any red or high-risk feature means emergency transfer): treatment is IV immunoglobulin plus aspirin, ideally within the first ~10 days, with echocardiography \u2014 primary care\u2019s role is recognition and urgent referral. Aspirin is a specialist exception to the under-16 rule (BNFC): parents must not give it at home; antipyretics are for distress only and not given together (NG143). Consider and exclude mimics (measles, scarlet fever, other viral exanthems, toxin-mediated illness, drug reactions), but persistent high fever \u22655 days with the mucocutaneous cluster warrants paediatric assessment regardless. Validate the worried parent repeatedly told "it\u2019s just a virus", recognise the pattern, and refer urgently the same day.',
    knowledge: {
      guideline: '[1] NICE NG143 (Fever in under 5s: assessment and initial management, 2019) \u00b7 [2] NICE NG254 (Suspected sepsis in under 16s, 2025) \u00b7 [3] Eleftheriou et al., Management of Kawasaki disease, Arch Dis Child 2014;99:74\u201383 (UK) \u00b7 [4] American Heart Association scientific statement on Kawasaki disease (McCrindle et al., Circulation 2017, international) \u00b7 think of it at 5 days of fever \u00b7 coronary aneurysm risk \u00b7 urgent paediatric referral, IVIG + aspirin',
      points: [
        {
          h: 'Recognise Kawasaki',
          t: 'NICE NG143 [1]: be aware at fever \u22655 days, without needing 4 features (the \u22654-of-5 rule is the AHA research definition [4], international). Features: bilateral non-purulent conjunctivitis; mucosal changes (cracked lips/strawberry tongue); cervical lymphadenopathy; polymorphous rash; extremity changes (palm/sole erythema-oedema, later peeling).'
        },
        {
          h: 'Clinical & incomplete',
          t: 'Clinical diagnosis (no single test; markers/thrombocytosis support). Beware incomplete/atypical Kawasaki, esp. infants (higher coronary risk, atypical presentation).'
        },
        {
          h: 'Why it matters',
          t: 'Major complication = coronary artery aneurysm (leading cause of acquired paediatric heart disease). Early recognition/treatment reduces risk \u2014 don\u2019t dismiss prolonged fever.'
        },
        {
          h: 'Urgent treatment',
          t: 'Urgent same-day paediatric referral/admission; NG143 traffic-light and NG254 [2] sepsis assessment (emergency transfer if red/high-risk). IVIG + aspirin, ideally within ~10 days, with echocardiography [3]. BNFC: no aspirin at home. Primary care = recognise and refer.'
        },
        {
          h: 'Differential',
          t: 'Measles (Koplik spots/coryza), scarlet fever (strep, sandpaper rash, antibiotic-responsive), other viral exanthems, toxin-mediated illness, drug reaction.'
        },
        {
          h: 'Validate the parent',
          t: 'Take prolonged fever and parental concern seriously; 6 days of fever warrants action, not more reassurance/antipyretics (NG143: antipyretics for distress only; paracetamol and ibuprofen not given together).'
        },
        {
          h: 'Never do',
          t: 'Never dismiss \u22655-day fever with mucocutaneous features as "just a virus"; never delay referral; never wait for a confirmatory test; never miss incomplete Kawasaki in infants.'
        },
        {
          h: 'Safety-net & disposition',
          t: 'Urgent same-day paediatric referral; deterioration advice en route (drowsy/breathless/much worse \u2192 999); ensure the team expects the child.'
        }
      ]
    }
  };

  /* ===== 242. Carbon monoxide poisoning ===== */
  const c242 = {
    id: 'carbon-monoxide',
    title: '"The whole family\u2019s had headaches, feel sick and dizzy at home \u2014 even the dog seems off \u2014 but we\u2019re fine when we\u2019re out"',
    type: 'telephone',
    duration: 12,
    meta: {
      age: 41,
      sex: 'F',
      setting: 'Telephone \u2014 non-specific symptoms affecting the household.',
      system: 'Toxicology / Urgent care \u2014 carbon monoxide poisoning',
      checked: 'October 2026'
    },
    brief: 'Mrs Gemma Toller, 41, rings about recurring headaches, nausea, dizziness and lethargy affecting herself, partner, children (and the pet) for two weeks \u2014 worse at HOME (mornings/heating on), better when OUT. Older property with a gas boiler/fire. Recognise the CARBON MONOXIDE pattern (flu-like symptoms in MULTIPLE household members and pets, home-related, improving away, with a combustion source) \u2014 commonly missed as a virus/migraine; advise IMMEDIATE action (everyone OUT into fresh air, turn off appliance, ventilate, call the National Gas Emergency Service on 0800 111 999 from outside, and 999 if anyone is drowsy, confused, has chest pain or collapses \u2014 UKHSA); arrange urgent same-day assessment (high-flow O2, carboxyhaemoglobin level \u2014 a normal level taken late or after oxygen does not exclude exposure, and smokers have higher baseline levels; pulse oximetry reads FALSELY normal; hyperbaric decisions follow NPIS/TOXBASE advice); and advise prevention (CO alarms, Gas Safe servicing; in rented homes landlords must arrange an annual gas safety check and fit CO alarms) and review for delayed neurological effects (memory, concentration, mood).',
    script: {
      opening: '"This sounds odd, doctor. For two weeks me, my partner and the two kids have all had headaches, felt sick and dizzy and tired \u2014 even the dog seems off and sleepy. We feel rough at home, especially mornings, but when we\u2019re out for the day we\u2019re fine. Is there a bug going round?"',
      facts: [
        {
          topic: 'Where she is',
          text: 'At home, in the lounge, on the phone. Has a headache now and feels "a bit woozy". The two children (9 and 6) are at school; partner, Lee, is at work. The dog is in the kitchen.'
        },
        {
          topic: 'Symptoms',
          text: 'Two weeks. Dull headache, nausea, dizziness, tiredness \u2014 all four of them. Worse first thing in the morning and in the evenings. Better within an hour or two of going out. Weekend at her mum\u2019s: all felt fine.'
        },
        {
          topic: 'Severity (if asked)',
          text: 'Nobody has collapsed, fitted or been confused. No chest pain or breathlessness. Nobody pregnant. The 6-year-old was sick twice last week.'
        },
        {
          topic: 'The house (if asked)',
          text: 'Old terraced house, rented. Gas boiler in the kitchen and a gas fire in the lounge that they\u2019ve had on a lot since the cold weather started. Noticed some black sooty marks around the gas fire. Doesn\u2019t think there\u2019s a carbon monoxide alarm. Doesn\u2019t know when the boiler was last serviced \u2014 the landlord deals with it.'
        },
        { topic: 'Health', text: 'All generally healthy. Gemma takes no medicines. Smokes about 5 a day outside.' },
        {
          topic: 'How to play it',
          text: 'Puzzled, chatty at first. When the doctor suggests carbon monoxide, become frightened: "Are you serious?" Follow instructions if they are clear (go outside with the dog). Feel guilty \u2014 "I\u2019ve had the kids in there. Have I made them ill?" Ask "Couldn\u2019t I just check them with one of those finger oxygen monitors?" and "When can we go back home?"'
        }
      ],
      ice: {
        ideas: '"A bug going round the family."',
        concerns: 'HIDDEN AGENDA \u2014 once CO is mentioned: guilt \u2014 "Have I poisoned my children?" Also worried about the landlord and money if they have to leave the house.',
        expectations: '"Something for the bug, or to be told it\u2019ll pass."'
      },
      cues: [
        '"Even the dog seems off" \u2014 everyone in the house, including the pet.',
        '"When we\u2019re out for the day we\u2019re fine" \u2014 the home-related pattern.',
        '"Have I made them ill?" \u2014 guilt to address while giving clear emergency instructions.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises the CARBON MONOXIDE pattern \u2014 flu-like symptoms in MULTIPLE household members (and pets), worse at home (mornings/heating), improving away \u2014 not labelling it a virus'
      },
      {
        dom: 'dg',
        text: 'Asks about the COMBUSTION SOURCE (gas boiler/fire/cooker, solid-fuel stove, blocked/faulty flue, ventilation) and whether a CO alarm is present'
      },
      {
        dom: 'cm',
        text: 'Gives IMMEDIATE emergency advice \u2014 everyone (and pets) OUT into fresh air, turn off the appliance, ventilate, call the National Gas Emergency Service (0800 111 999)/999 \u2014 without delay'
      },
      {
        dom: 'cm',
        text: 'Arranges urgent MEDICAL assessment, knowing treatment is high-flow O2, carboxyhaemoglobin supports exposure (but a normal level taken late or after oxygen does not exclude it; smokers\u2019 baseline is higher), and hyperbaric decisions follow NPIS/TOXBASE advice'
      },
      {
        dom: 'dg',
        text: 'Knows pulse OXIMETRY reads FALSELY NORMAL in CO poisoning and is not falsely reassured by normal sats'
      },
      {
        dom: 'cm',
        text: 'Advises PREVENTION \u2014 CO alarms, appliance/flue servicing by a registered engineer, ventilation, no unsuitable appliances indoors, landlord duties if rented \u2014 and review for delayed neurological effects'
      },
      {
        dom: 'ro',
        text: 'Connects the pattern for the patient and conveys urgency clearly without panic, ensuring she acts immediately'
      },
      {
        dom: 'cm',
        text: 'Arranges disposition: immediate evacuation + gas emergency/999, urgent assessment for those affected, prevention advice, escalation if anyone drowsy/unconscious'
      }
    ],
    worked: [
      {
        lbl: 'Recognise the pattern',
        txt: '"This doesn\u2019t sound like a bug. All of you \u2014 and the dog \u2014 feeling ill at home, worse mornings with the heating on, and fine when out, is the classic pattern of carbon monoxide poisoning from a faulty appliance. This is urgent."'
      },
      {
        lbl: 'Immediate action',
        txt: '"Act now: get everyone and the dog OUT into fresh air. If safe, turn off the boiler/fire and open windows on your way out. Don\u2019t stay inside."'
      },
      {
        lbl: 'Call the right people',
        txt: '"From outside, call the gas emergency line on 0800 111 999 \u2014 they\u2019ll check the property urgently \u2014 and if anyone is drowsy, confused or very unwell, call 999. CO can be dangerous quickly, especially overnight."'
      },
      {
        lbl: 'Get checked',
        txt: '"You all need assessment today \u2014 the treatment is high-flow oxygen, and a blood test can show it, although the level falls once you\u2019re out in fresh air, so a normal result later doesn\u2019t rule it out. Importantly, the finger oxygen monitors read normal even when CO is high, so don\u2019t be falsely reassured by that."'
      },
      {
        lbl: 'Prevention',
        txt: '"Once safe, get a CO alarm fitted and have the boiler, gas appliances and flue checked by a registered Gas Safe engineer before using them again. If you rent, your landlord has to arrange the gas safety check and alarms. And let me know if anyone has memory, concentration or mood problems in the coming weeks."'
      },
      {
        lbl: 'Safety-net',
        txt: '"So: out into fresh air now, gas emergency line, 999 if anyone\u2019s drowsy or faints. Don\u2019t go back until it\u2019s declared safe. Ring me once you\u2019re all out and I\u2019ll help arrange check-ups."'
      }
    ],
    learning: 'CARBON MONOXIDE (CO) POISONING is recognised by non-specific FLU-LIKE symptoms \u2014 headache, nausea, dizziness, fatigue, sometimes confusion \u2014 affecting MULTIPLE PEOPLE and PETS in the SAME HOME, WORSE at home (mornings/heating on) and IMPROVING when AWAY; CO is the "great mimic", commonly misdiagnosed as a viral illness, migraine or food poisoning, so the household + pet + home-related + improves-away pattern is the crucial clue. Ask about the combustion source (gas boiler/fire/cooker, solid-fuel stove, blocked/faulty flue, poor ventilation, unserviced appliance) and a CO alarm. The immediate action is an EMERGENCY: get everyone (and pets) OUT into fresh air, turn off the appliance if safe, ventilate, don\u2019t stay inside, and call the National Gas Emergency Service (0800 111 999) and 999/urgent assessment \u2014 CO can rapidly cause loss of consciousness and death, particularly overnight. Arrange urgent assessment: treatment is high-flow 100% OXYGEN (speeds CO elimination), a raised carboxyhaemoglobin level supports exposure (but it falls once away from the source and faster on oxygen, so a normal level taken late does not exclude it, and smokers have higher baseline levels), and hyperbaric oxygen decisions for severe cases (neuro signs, LOC, pregnancy, cardiac involvement) follow NPIS/TOXBASE advice. Critically, pulse OXIMETRY reads FALSELY NORMAL because it cannot distinguish carboxyhaemoglobin \u2014 a normal sats reading is misleadingly reassuring. Advise prevention: CO alarms, servicing by a registered (Gas Safe) engineer, ventilation, and no unsuitable appliances (BBQs/generators) indoors; landlords must arrange annual gas safety checks and CO alarms; and review for delayed neurological effects. The skill is recognising the pattern, immediate emergency advice, assessment without false reassurance from oximetry, and prevention \u2014 not labelling it viral.',
    knowledge: {
      guideline: '[1] UKHSA Carbon monoxide: general information (GOV.UK) \u00b7 [2] UKHSA Carbon monoxide: toxicological overview (GOV.UK) \u00b7 [3] National Gas Emergency Service (0800 111 999) and Gas Safe Register \u00b7 [4] National Poisons Information Service (TOXBASE) \u00b7 [5] Smoke and Carbon Monoxide Alarm (England) Regulations 2015, amended 2022; Gas Safety (Installation and Use) Regulations 1998 \u00b7 pattern (household/pet, home-related, improves away) \u00b7 emergency action + high-flow O2 \u00b7 falsely-normal oximetry \u00b7 prevention',
      points: [
        {
          h: 'Recognise the pattern',
          t: 'Flu-like symptoms (headache, nausea, dizziness, fatigue, confusion) in multiple household members and pets, worse at home (mornings/heating), better away = CO poisoning. The "great mimic".'
        },
        {
          h: 'Ask about the source',
          t: 'Gas boiler/fire/cooker, solid-fuel stove, blocked/faulty flue, poor ventilation, unserviced appliance; presence of a CO alarm.'
        },
        {
          h: 'Emergency action',
          t: 'Everyone (and pets) OUT into fresh air now; turn off the appliance if safe; ventilate; call the gas emergency service (0800 111 999 [3]) from outside and 999/urgent assessment [1]. CO can be rapidly fatal, esp. overnight.'
        },
        {
          h: 'Treatment',
          t: 'High-flow 100% oxygen speeds CO elimination [2]; carboxyhaemoglobin supports exposure, but a normal level taken late or after oxygen does not exclude it and smokers\u2019 baseline is higher [2]; hyperbaric decisions (neuro signs, LOC, pregnancy, cardiac) follow NPIS/TOXBASE [4].'
        },
        {
          h: 'Falsely-normal oximetry',
          t: 'Pulse oximetry reads falsely normal in CO poisoning (can\u2019t detect carboxyhaemoglobin). Don\u2019t be falsely reassured by normal sats.'
        },
        {
          h: 'Prevention',
          t: 'CO alarms, appliance/flue servicing by a registered (Gas Safe) engineer, ventilation, no unsuitable appliances (BBQs/generators) indoors; landlord duties \u2014 annual gas safety check and CO alarms [5]; review for delayed neurological effects.'
        },
        {
          h: 'Never do',
          t: 'Never label household/home-related flu-like symptoms as "just a virus" without considering CO; never be reassured by normal oximetry; never delay evacuation.'
        },
        {
          h: 'Safety-net & disposition',
          t: 'Immediate evacuation + gas emergency/999; urgent assessment for all affected; 999 if drowsy/unconscious; don\u2019t re-enter until declared safe; prevention advice.'
        }
      ]
    }
  };

  /* ===== 243. Otitis externa ===== */
  const c243 = {
    id: 'otitis-externa',
    title: '"My ear\u2019s really painful and itchy with some discharge \u2014 worse when I touch it. I\u2019ve been using cotton buds"',
    type: 'video',
    duration: 12,
    meta: {
      age: 45,
      sex: 'M',
      setting: 'Video consultation, with otoscopy arranged face to face \u2014 a painful, discharging, itchy ear.',
      system: 'ENT \u2014 otitis externa & the malignant-OE red flag',
      checked: 'October 2026'
    },
    brief: 'Mr Owen Pryce, 45, has a few days of a painful, itchy, discharging ear with pain on moving the tragus/pinna and muffled hearing; he uses cotton buds and swims; the practice nurse who looked in the ear this morning recorded a red, swollen, debris-filled canal with the drum not visible. Recognise OTITIS EXTERNA (canal inflammation \u2014 tragal/pinna pain, erythema/oedema/debris, discharge, itch; provoked by water/swimming, cotton-bud trauma, eczema), distinguish from otitis media, manage per the UKHSA antimicrobial summary (2025): analgesia and local heat, then topical acetic acid (over 12s) or a topical antibiotic \u00b1 steroid (similar cure rates at 7 days; choice per BNF), with aural toilet (not systemic antibiotics) + keep dry + stop cotton buds; avoid aminoglycoside drops if the drum is perforated or cannot be seen unless the ENT UK criteria are met; oral flucloxacillin and referral only if cellulitis spreads beyond the canal or there are systemic signs; advise prevention, and recognise MALIGNANT (NECROTISING) OE in elderly diabetic/immunocompromised (severe night pain out of proportion, granulation, facial palsy \u2014 same-day ENT, UK consensus 2023). Not routine oral antibiotics.',
    script: {
      opening: '"My right ear\u2019s been sore and itchy for a few days, with some discharge. It hurts if I touch it or pull on it, and feels blocked, muffled. I\u2019ve been poking it with cotton buds to clean it, and I was swimming last week. Can you sort it?"',
      facts: [
        {
          topic: 'The ear',
          text: 'Right ear, 4 days. Itchy first, then sore \u2014 "five out of ten", worse lying on it and when he touches or pulls the ear. Yellowish crusty discharge, no blood. Feels blocked and muffled.'
        },
        {
          topic: 'The nurse\u2019s look (if asked)',
          text: 'Saw the practice nurse this morning for his blood pressure; she looked in the ear: "She said the canal was red, swollen and full of gunk and she couldn\u2019t see the eardrum." His BP was fine.'
        },
        {
          topic: 'Negatives (if asked)',
          text: 'No fever, feels well. No severe pain at night. No dizziness, no facial weakness, no ringing. No swelling behind the ear or spreading redness on the face. Never had ear surgery or a perforated eardrum. No previous ear infections as an adult.'
        },
        {
          topic: 'Habits',
          text: 'Uses cotton buds every day after a shower, "to get the wax out". Swims three times a week at the leisure centre. Has mild eczema on his hands, sometimes in his ears.'
        },
        {
          topic: 'Health',
          text: 'Not diabetic as far as he knows; no immune problems. Takes ramipril for blood pressure. No allergies.'
        },
        {
          topic: 'Social',
          text: 'Call-centre team leader \u2014 wears a headset all day. Lives with wife and teenage daughter.'
        },
        {
          topic: 'How to play it',
          text: 'Relaxed, a bit impatient \u2014 wants it sorted quickly. Expect antibiotic tablets ("So I don\u2019t need tablets?"). Ask how to put drops in properly, and whether you can keep swimming. Admit cotton buds are "an old habit".'
        }
      ],
      ice: {
        ideas: '"An infection. I thought I\u2019d need antibiotics to get rid of it quickly."',
        concerns: '"Whether the hearing will come back properly \u2014 I need it for work."',
        expectations: '"Antibiotic tablets." Wants to keep swimming.'
      },
      cues: [
        '"I\u2019ve been poking it with cotton buds" \u2014 the habit that keeps it going.',
        '"I was swimming last week" \u2014 water exposure; advice on keeping the ear dry.',
        '"So I don\u2019t need tablets?" \u2014 expectation of oral antibiotics to discuss.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises OTITIS EXTERNA \u2014 ear pain/itch/discharge, PAIN ON MOVING the tragus/pinna, a red/swollen/debris-filled canal, provoked by water/swimming and cotton-bud trauma'
      },
      {
        dom: 'dg',
        text: 'Distinguishes it from otitis MEDIA and considers foreign body, furuncle and fungal OE (otomycosis)'
      },
      {
        dom: 'cm',
        text: 'Manages uncomplicated OE correctly (UKHSA 2025) \u2014 analgesia and heat, aural toilet, topical acetic acid or antibiotic +/- steroid drops/spray (not systemic; aminoglycoside caution if the drum is perforated or unseen), keep DRY, ear wick if very swollen \u2014 reserving oral flucloxacillin with referral for spreading cellulitis/systemic involvement'
      },
      {
        dom: 'cm',
        text: 'Advises PREVENTION/technique \u2014 STOP cotton buds, keep ears dry, treat skin conditions, correct drop technique \u2014 and addresses recurrent causes'
      },
      {
        dom: 'dg',
        text: 'Screens MALIGNANT (NECROTISING) OE red flags in high-risk patients (elderly diabetic/immunocompromised): severe pain out of proportion/worse at night, granulation, facial palsy \u2014 and would refer URGENTLY to ENT'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and why topical (not oral) treatment is appropriate, engaging him in keep-dry/stop-cotton-buds advice without dismissiveness'
      },
      {
        dom: 'ro',
        text: 'Checks understanding of drop technique and prevention, and responds to his wish for quick relief realistically'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review if not improving/spreading, malignant-OE red flags warranting urgent ENT (esp. diabetics), prevention to avoid recurrence'
      }
    ],
    worked: [
      {
        lbl: 'Diagnose + explain',
        txt: '(After a face-to-face look in the ear.) "You\u2019ve got otitis externa \u2014 inflammation of the ear canal. The swimming and, honestly, the cotton buds set it off: the buds scratch the canal and push stuff in, which keeps it going. It usually settles well with the right drops."'
      },
      {
        lbl: 'Treat correctly',
        txt: '"First, painkillers and a warm compress for the pain. Then ear DROPS \u2014 either an acidic drop or an antibiotic with a steroid, which work about as well as each other at a week \u2014 rather than antibiotic tablets, which aren\u2019t needed. Use them for about seven days. I\u2019ll check whether your eardrum is intact, as that decides which drops are safe. I\u2019ll clean the ear so the drops get in. If the canal\u2019s too swollen, we sometimes place a little wick."'
      },
      {
        lbl: 'Technique + keep dry',
        txt: '"Use the drops lying with the bad ear up and stay still a few minutes. Crucially: stop the cotton buds completely, and keep the ear dry \u2014 no swimming while it settles, keep water out in the shower."'
      },
      {
        lbl: 'Prevention',
        txt: '"Once better, keeping ears dry and leaving them alone prevents most recurrences. If you\u2019re a keen swimmer we can talk about keeping water out."'
      },
      {
        lbl: 'Red-flag awareness',
        txt: '(If high-risk/severe:) "Because severe ear infections can occasionally become serious \u2014 especially with diabetes \u2014 severe pain worse at night and out of proportion, or any facial weakness, would need urgent ENT. That doesn\u2019t fit you now, but worth knowing."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if it\u2019s not improving in a week, the pain gets much worse, it spreads to the skin around the ear, or you feel feverish. Otherwise the drops and keeping it dry should sort it."'
      }
    ],
    learning: 'OTITIS EXTERNA (inflammation of the external ear CANAL) presents with ear PAIN, ITCH and DISCHARGE, PAIN ON MOVING the tragus/pinna, and a blocked/muffled-hearing sensation, with a red, swollen, debris-filled canal; it is provoked by WATER/SWIMMING ("swimmer\u2019s ear"), local TRAUMA (cotton buds), and skin conditions (eczema/seborrhoeic dermatitis/psoriasis). Distinguish it from otitis MEDIA (deeper pain, systemic/febrile especially in children, a bulging/red drum, no tragal tenderness; discharge if the drum perforates), and consider a foreign body, a furuncle, and FUNGAL OE/otomycosis (itch-predominant, fungal debris, may need antifungal drops). Manage uncomplicated OE: adequate ANALGESIA, AURAL TOILET (cleaning/microsuction improves drop delivery), analgesia and local heat first, then topical ACETIC ACID (over 12s) or a TOPICAL antibiotic +/- corticosteroid (similar cure rates at 7 days \u2014 UKHSA Summary of antimicrobial prescribing guidance 2025; choice per BNF) rather than systemic antibiotics, avoiding aminoglycoside drops if the drum is perforated or cannot be seen unless the ENT UK criteria are met, keeping the ear DRY (avoid water/swimming during treatment) and using an ear WICK (ENT) if the canal is very swollen; reserve oral flucloxacillin, with referral to exclude necrotising OE, for cellulitis spreading beyond the canal or systemic signs. Advise prevention and technique \u2014 STOP cotton buds (they cause trauma and push debris in), keep ears dry, treat underlying skin conditions, and use drops correctly. The critical RED FLAG is MALIGNANT (NECROTISING) OTITIS EXTERNA in a high-risk patient (elderly DIABETIC or immunocompromised): SEVERE, persistent pain (out of proportion, worse at night), copious discharge, GRANULATION tissue in the canal, and/or cranial-nerve involvement (e.g. facial palsy) \u2014 a skull-base osteomyelitis that is serious/potentially life-threatening and needs same-day ENT/hospital referral (UK consensus 2023), imaging and IV antibiotics, not routine OE treatment. The skill is correct topical management, advice/technique, and screening the malignant-OE red flags; otoscopy needs a face-to-face appointment.',
    knowledge: {
      guideline: '[1] UKHSA Summary of antimicrobial prescribing guidance: managing common infections (2025), otitis externa \u00b7 [2] ENT UK consensus on topical aminoglycosides with a perforated drum (Phillips et al., Clin Otolaryngol 2007;32:330\u2013336) \u00b7 [3] UK consensus definitions of necrotising otitis externa (Hodgson et al., BMJ Open 2023;13:e061349) \u00b7 [4] Kaushik et al., Cochrane 2010 CD004740 (interventions for acute otitis externa) \u00b7 [5] AAO-HNSF clinical practice guideline, acute otitis externa (Rosenfeld et al., 2014, international) \u00b7 topical drops + aural toilet \u00b7 keep dry / stop cotton buds \u00b7 malignant (necrotising) OE red flag',
      points: [
        {
          h: 'Recognise OE',
          t: 'Ear pain, itch, discharge, pain on moving the tragus/pinna, red/swollen debris-filled canal. Provoked by water/swimming, cotton-bud trauma, eczema/dermatitis.'
        },
        {
          h: 'Distinguish & differential',
          t: 'Otitis media (deeper pain, systemic/febrile in children, bulging drum, no tragal tenderness). Consider foreign body, furuncle, fungal OE/otomycosis (itch-predominant, fungal debris).'
        },
        {
          h: 'Manage uncomplicated OE',
          t: 'UKHSA [1]: analgesia and local heat; then topical acetic acid (over 12s) or antibiotic +/- steroid drops/spray (similar cure at 7 days [4]; choice per BNF); not systemic in uncomplicated [1][5]. Aural toilet, keep dry, ear wick if very swollen. Drum perforated or unseen: avoid aminoglycosides unless ENT UK criteria met [2].'
        },
        {
          h: 'Advice & technique',
          t: 'Stop cotton buds, keep ears dry, treat underlying skin conditions, correct drop technique (ear up, stay still); address recurrent causes.'
        },
        {
          h: 'Malignant (necrotising) OE',
          t: 'Elderly diabetic/immunocompromised + severe persistent pain (out of proportion, worse at night), granulation tissue, facial palsy = skull-base osteomyelitis \u2192 same-day ENT/hospital [3], imaging, IV antibiotics.'
        },
        {
          h: 'When to escalate',
          t: 'Spreading cellulitis beyond the canal or systemic signs \u2192 oral flucloxacillin (dose per BNF) and referral to exclude necrotising OE [1]; not improving or malignant-OE features \u2192 ENT referral as appropriate.'
        },
        {
          h: 'Never do',
          t: 'Never give routine oral antibiotics for uncomplicated OE; never miss the cotton-bud/keep-dry advice; never overlook malignant OE in diabetics/immunocompromised.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review if not improving in ~1 week, worsening pain, spreading, or fever; urgent ENT for malignant-OE features; prevention to avoid recurrence.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c240, c241, c242, c243);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'sjs-ten': {
      ceg: ['Urgent & unscheduled care', 'Prescribing & pharmacology'],
      stem: {
        name: 'Nadia Karim',
        age: '34 years \u00b7 female',
        pmh: [
          '\u26a0 Epilepsy: lamotrigine started about ten days ago (1\u20132 weeks) for epilepsy \u2014 suspected culprit (other high-risk drugs: allopurinol/sulfonamide/NSAID)',
          '\u26a0 Spreading painful rash + dusky/target lesions + blisters + skin detachment',
          '\u26a0 Mucosal erosions (mouth/eyes/genitals); fever, unwell'
        ],
        meds: ['Lamotrigine (started about ten days ago for epilepsy; suspected culprit)'],
        allergy: 'NKDA (until now)',
        recent: '"New tablet, now a spreading rash, blisters, and my mouth and eyes are raw."',
        reason: 'Video/urgent \u2014 severe rash after a new drug (emergency admission for face-to-face assessment).'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise SJS/TEN',
          d: 'Culprit drug + painful rash + dusky/target + blisters/detachment + mucosal erosions + systemic illness.'
        },
        {
          t: '2\u20134',
          h: 'Stop the culprit',
          d: 'Antiepileptics (seizure cover in hospital)/allopurinol/sulfonamides/NSAIDs \u2014 stop now; document severe allergy; Yellow Card.'
        },
        {
          t: '4\u20137',
          h: 'Emergency admission',
          d: 'Dermatology/burns/ITU + early ophthalmology; sepsis risk (NICE NG253); never community-managed.'
        },
        {
          t: '7\u20139',
          h: 'Differential',
          d: 'Erythema multiforme, staph scalded skin, DRESS \u2014 but mucosa+detachment+systemic = SJS/TEN.'
        },
        {
          t: '9\u201312',
          h: 'Communicate + safety-net',
          d: 'Convey urgency calmly; bring packet; 999 for breathing/swallowing difficulty en route.'
        }
      ],
      wordPics: {
        fail: 'Treats as a minor drug rash with an antihistamine; continues the culprit; no admission; misses the mucosal involvement.',
        pass: 'Recognises SJS/TEN, stops the drug and arranges emergency admission with allergy documentation and a Yellow Card report.',
        exc: 'Rapidly recognises SJS/TEN (mucosa + detachment + culprit drug), stops the drug, arranges immediate admission (dermatology/burns/ITU + ophthalmology), documents a severe allergy, and communicates the urgency calmly.'
      },
      avoid: [
        {
          dont: '"Looks like a drug rash \u2014 stop the tablet, take an antihistamine and see how it goes."',
          instead: '"With blistering, skin coming away and your mouth/eyes raw, this is Stevens-Johnson syndrome \u2014 an emergency needing hospital now."',
          why: 'Treating SJS/TEN as a minor rash misses a life-threatening emergency.'
        },
        {
          dont: '(Not documenting) failing to record the allergy.',
          instead: '"I\u2019ll record this drug as a serious allergy so you\u2019re never given it again."',
          why: 'Re-exposure can be fatal; documentation is essential.'
        },
        {
          dont: '(Delaying) "Let\u2019s review in a couple of days."',
          instead: '"This needs immediate admission \u2014 I\u2019m arranging transfer now."',
          why: 'SJS/TEN has significant mortality; delay is dangerous.'
        }
      ]
    },
    'kawasaki-disease': {
      ceg: ['Children & young people', 'Urgent & unscheduled care'],
      stem: {
        name: 'Ivy Calderwood (mother present)',
        age: '3 years \u00b7 female',
        pmh: [
          '\u26a0 Fever \u22656 days despite antipyretics',
          'Polymorphous rash, bilateral non-purulent conjunctivitis, cracked lips/strawberry tongue, red/swollen hands, cervical node',
          'Irritable, miserable'
        ],
        meds: ['Paracetamol/ibuprofen (minimal effect)'],
        allergy: 'NKDA',
        recent: '"High fever for six days, a rash, red eyes and cracked lips \u2014 calpol isn\u2019t touching it."',
        reason: 'Video \u2014 a child with prolonged fever (same-day face-to-face paediatric assessment needed).'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Validate + recognise',
          d: 'Fever \u22655 days + conjunctivitis + lips/tongue + rash + hands + node = Kawasaki; not "just a virus".'
        },
        {
          t: '2\u20134',
          h: 'Clinical + incomplete',
          d: 'Clinical diagnosis; beware incomplete/atypical (esp. infants); low referral threshold.'
        },
        { t: '4\u20136', h: 'Why it matters', d: 'Coronary artery aneurysm risk, reduced by prompt treatment.' },
        {
          t: '6\u20139',
          h: 'Urgent referral',
          d: 'Same-day paediatrics (emergency if red/high-risk sepsis features, NG143/NG254); IVIG + aspirin within ~10 days; echocardiography; no aspirin at home.'
        },
        {
          t: '9\u201312',
          h: 'Differential + safety-net',
          d: 'Measles/scarlet fever/exanthems; deterioration advice en route; team expecting child.'
        }
      ],
      wordPics: {
        fail: 'Dismisses prolonged fever as "just a virus", offers more antipyretics, no recognition or referral \u2014 risks missed coronary disease.',
        pass: 'Recognises Kawasaki and refers urgently the same day with validation of the parent.',
        exc: 'Recognises Kawasaki (fever \u22655 days with features \u2014 NICE NG143 does not require 4), is alert to incomplete/atypical disease, explains the coronary-aneurysm rationale, refers urgently the same day for IVIG + aspirin/echo, excludes mimics, and validates the worried parent.'
      },
      avoid: [
        {
          dont: '"Six days of fever \u2014 it\u2019s a stubborn virus, keep up the Calpol."',
          instead: '"Fever this long with red eyes, cracked lips and a rash makes me think of Kawasaki disease \u2014 she needs to be seen by paediatrics today."',
          why: 'Dismissing prolonged fever with the cluster risks missing Kawasaki and coronary complications.'
        },
        {
          dont: '(Waiting) "Let\u2019s give it another couple of days."',
          instead: '"Treatment works best within about ten days \u2014 this is urgent, today."',
          why: 'Delay reduces the window for IVIG to protect the coronaries.'
        },
        {
          dont: '(Dismissing the parent) "Try not to worry, fevers are common."',
          instead: '"You were right to trust your instinct \u2014 this isn\u2019t overreacting."',
          why: 'Validating parental concern is part of safe, patient-centred care.'
        }
      ]
    },
    'carbon-monoxide': {
      ceg: ['Urgent & unscheduled care', 'Population & planetary health'],
      stem: {
        name: 'Gemma Toller',
        age: '41 years \u00b7 female',
        pmh: [
          '\u26a0 Headache/nausea/dizziness/fatigue in whole family (and the pet) ~2 weeks',
          '\u26a0 Worse at home (mornings/heating on), better when out',
          'Older property; gas boiler/fire; ?CO alarm'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Whole family\u2019s had headaches, feel sick and dizzy at home \u2014 even the dog \u2014 but we\u2019re fine when out."',
        reason: 'Telephone \u2014 non-specific symptoms affecting the household.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise the pattern',
          d: 'Flu-like symptoms in whole household + pet, worse at home/mornings, better away = CO poisoning.'
        },
        { t: '2\u20134', h: 'Ask the source', d: 'Gas boiler/fire/cooker, blocked flue, ventilation, CO alarm.' },
        {
          t: '4\u20137',
          h: 'Emergency action',
          d: 'Everyone (+ pets) OUT into fresh air, turn off appliance, ventilate, gas emergency (0800 111 999)/999.'
        },
        {
          t: '7\u20139',
          h: 'Assessment',
          d: 'High-flow O2; carboxyhaemoglobin level (normal late level doesn\u2019t exclude); pulse oximetry FALSELY normal \u2014 don\u2019t be reassured.'
        },
        {
          t: '9\u201312',
          h: 'Prevention + safety-net',
          d: 'CO alarms, Gas Safe servicing, ventilation; 999 if anyone drowsy/unconscious; don\u2019t re-enter until safe.'
        }
      ],
      wordPics: {
        fail: 'Labels it a viral bug; misses the household/pet/home-related pattern; no emergency advice; reassured by normal oximetry.',
        pass: 'Recognises the CO pattern, gives immediate evacuation/gas-emergency advice and arranges assessment.',
        exc: 'Recognises CO poisoning from the pattern, gives immediate emergency advice (out + gas emergency/999), arranges urgent assessment (high-flow O2, not reassured by normal oximetry), and advises prevention (alarms/servicing).'
      },
      avoid: [
        {
          dont: '"Sounds like a bug going round the family \u2014 rest and fluids."',
          instead: '"Whole household and the pet, worse at home, better away \u2014 that\u2019s carbon monoxide poisoning; everyone out into fresh air now and call the gas emergency line."',
          why: 'Labelling it viral misses a rapidly dangerous, potentially fatal exposure.'
        },
        {
          dont: '(Reassured by sats) "Your oxygen reading is normal, so you\u2019re fine."',
          instead: '"Finger oxygen monitors read normal even with high CO \u2014 don\u2019t rely on that; you still need assessment."',
          why: 'Pulse oximetry is falsely normal in CO poisoning.'
        },
        {
          dont: '(No evacuation) advising a routine appointment.',
          instead: '"Get everyone out now and call the gas emergency service \u2014 this can\u2019t wait."',
          why: 'CO can cause loss of consciousness/death, especially overnight \u2014 evacuation is immediate.'
        }
      ]
    },
    'otitis-externa': {
      ceg: ['New & undifferentiated presentations', 'Prescribing & pharmacology'],
      stem: {
        name: 'Owen Pryce',
        age: '45 years \u00b7 male',
        pmh: [
          'Painful, itchy, discharging R ear; pain on moving tragus/pinna; muffled hearing',
          'Uses cotton buds; swims; canal red/swollen/debris-filled',
          'Not diabetic/immunocompromised'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Painful itchy ear with discharge \u2014 worse when I touch it. I\u2019ve been using cotton buds."',
        reason: 'Video consultation (otoscopy arranged face to face) \u2014 a painful, discharging ear.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise OE',
          d: 'Pain on moving tragus/pinna + red swollen debris-filled canal + swimming/cotton buds = otitis externa.'
        },
        { t: '2\u20134', h: 'Distinguish', d: 'Vs otitis media; consider foreign body, furuncle, fungal OE.' },
        {
          t: '4\u20137',
          h: 'Manage',
          d: 'Analgesia + heat, then acetic acid or antibiotic/steroid drops for 7 days (not systemic; aminoglycoside caution) + aural toilet + keep dry; ear wick if swollen.'
        },
        {
          t: '7\u20139',
          h: 'Advice/technique',
          d: 'Stop cotton buds, keep dry, treat skin conditions, correct drop technique.'
        },
        {
          t: '9\u201312',
          h: 'Red flag + safety-net',
          d: 'Malignant OE (elderly diabetic/immunocompromised: severe night pain, granulation, facial palsy) \u2192 urgent ENT; review if not improving.'
        }
      ],
      wordPics: {
        fail: 'Prescribes oral antibiotics for uncomplicated OE; no aural toilet or keep-dry/cotton-bud advice; never considers malignant OE in high-risk patients.',
        pass: 'Recognises OE, treats with topical drops + aural toilet + keep-dry advice, and knows the malignant-OE red flag.',
        exc: 'Recognises OE and distinguishes it from otitis media/fungal OE, manages with topical drops + aural toilet + keep-dry/stop-cotton-buds advice (not systemic antibiotics), and screens malignant-OE red flags in high-risk patients with safety-netting.'
      },
      avoid: [
        {
          dont: '"I\u2019ll give you a course of antibiotic tablets for the ear infection."',
          instead: '"This is otitis externa \u2014 ear drops with aural cleaning work better than tablets, which aren\u2019t needed here."',
          why: 'Systemic antibiotics are inappropriate first-line for uncomplicated otitis externa.'
        },
        {
          dont: '(No technique advice) treating without addressing cotton buds.',
          instead: '"Stop the cotton buds and keep the ear dry \u2014 they\u2019re a big part of why it keeps flaring."',
          why: 'Cotton-bud trauma and moisture perpetuate OE; advice prevents recurrence.'
        },
        {
          dont: '(Ignoring malignant OE) treating a severe-pain diabetic as routine.',
          instead: '"Severe night pain out of proportion or facial weakness in someone with diabetes needs urgent ENT \u2014 it can be a deeper bone infection."',
          why: 'Malignant (necrotising) OE is a serious skull-base osteomyelitis in high-risk patients.'
        }
      ]
    }
  });

})();
