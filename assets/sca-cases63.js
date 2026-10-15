/* ============================================================
   Reasoning GP — Case Library batch 63:
   "Prevention, mental health & skin" (NEW themes; final batch)
   Vaccine hesitancy (a worried parent declining the MMR \u2014 explore,
   don't lecture); an abnormal cervical screening / high-risk HPV
   result (explaining colposcopy, allaying cancer fear); emotionally
   unstable (borderline) personality disorder presenting in crisis
   (validation, risk, boundaries); and chronic plaque psoriasis (more
   than skin \u2014 the treatment ladder, comorbidity & PsA). No NG12
   cancer pathway is the driver; none invented (cervical-screening
   pathway is screening, not 2WW).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases62.js.
   ============================================================ */

(function(){

  /* ============ 224. VIDEO — Vaccine hesitancy: the parent declining the MMR ============ */
  const c224 = {
    id: 'vaccine-hesitancy-mmr',
    title: '"I\u2019ve read things about the MMR \u2014 I\u2019m not sure I want my daughter to have it"',
    type: 'video',
    duration: 12,
    meta: {
      age: 32,
      sex: 'F',
      setting: 'Video consultation \u2014 a mother hesitant about her child\u2019s MMR vaccine.',
      system: 'Population health / Prevention \u2014 vaccine hesitancy: explore, inform, respect autonomy',
      checked: 'October 2026'
    },
    brief: 'Mrs Lauren Hill, 32, has come about her 13-month-old daughter\u2019s due MMR vaccine (now given as MMRV \u2014 measles, mumps, rubella and varicella: under the UKHSA schedule from 1 January 2026, children born on or after 1 January 2025 receive MMRV at 12 and 18 months, so Mia is due her first dose, with the second at the new 18-month appointment); she is HESITANT, having "read things" online linking it to autism and worrying about "overloading" the immune system. She is a thoughtful, anxious parent, not a hardened refuser. The examinable task is the VACCINE-HESITANCY consultation done well: EXPLORE her specific concerns and where they come from (without judgement), ELICIT her understanding and fears, then provide CLEAR, ACCURATE, BALANCED information \u2014 the discredited autism link (the original 1998 study was fraudulent and fully retracted by The Lancet in 2010, its author struck off the medical register; extensive evidence, e.g. a Danish cohort of over 650,000 children \u2014 Hviid, Annals of Internal Medicine 2019 \u2014 shows NO link), how the vaccine and immune system work (the "overload" myth), the real RISKS of the diseases (UKHSA Green Book chapter 21: measles \u2014 serious complications, encephalitis, death; mumps; rubella in pregnancy) and of falling herd immunity \u2014 using motivational-interviewing-style, non-confrontational communication, NOT lecturing or shaming; CHECK understanding, address each concern, check for genuine contraindications (Green Book: e.g. severe immunosuppression or a previous severe allergic reaction to a component), and RESPECT her AUTONOMY and the decision \u2014 consent from a person with parental responsibility, informed and voluntary (Green Book chapter 2; GMC Decision making and consent 2020) \u2014 (offer time, written info, a follow-up, and leave the door open if she declines today), while being clear and honest about the recommendation. The skill is building trust and informing without coercion or dismissiveness \u2014 hesitancy is engaged, not lectured.',
    script: {
      opening: '"I\u2019ve come about Mia\u2019s jabs, but honestly I\u2019m not sure about the MMR. I\u2019ve read quite a bit online \u2014 there\u2019s stuff about it being linked to autism, and about overloading their little immune systems with so many vaccines. I\u2019m not anti-vaccine or anything, I just want to do the right thing for her. What do you think?"',
      facts: [
        {
          topic: 'Mia',
          text: 'Mia is 13 months, first child. Born at term, healthy, growing well, walking round the furniture, saying "mama" and "dada". Had all her baby jabs on time; had a fever after one of them and "was grizzly for a day".'
        },
        {
          topic: 'Contraindication questions (all negative)',
          text: 'No serious allergic reaction to any vaccine. No egg or gelatin allergy. Not on steroids or any medicines; no illness affecting her immune system. Nobody at home having cancer treatment. Mia is well today, no fever.'
        },
        {
          topic: 'What she has read',
          text: 'Facebook posts and a parenting forum; a friend shared a video about a boy who "changed after his MMR". Hasn\u2019t read the NHS leaflet. "Then why do so many people still say it?"'
        },
        {
          topic: 'The new combined jab',
          text: 'Was told by the nursery nurse it is now "four in one" with chickenpox. Worried that\u2019s even more for Mia\u2019s body to cope with.'
        },
        {
          topic: 'Family and social',
          text: 'Lives with partner, Sam, who "thinks I\u2019m overthinking it, he\u2019d just get it done". Works part-time in a bank. Mia starts nursery 3 days a week next month. Lauren\u2019s nephew (her sister\u2019s son, 6) has autism \u2014 she has seen how hard it is for her sister.'
        },
        {
          topic: 'Own history',
          text: 'Lauren thinks she had "all the usual jabs" as a child. Is planning another baby in the next year or two (only if asked about future plans).'
        },
        {
          topic: 'How to play it',
          text: 'Warm, thoughtful, anxious \u2014 not hostile. If lectured, given statistics without being asked about your worries, or made to feel stupid, become defensive and say you\u2019ll "think about it" and leave. If the doctor asks what worries you most and listens, open up about your nephew. You may want a day or two to read something reliable before booking \u2014 accept an open door gratefully.'
        }
      ],
      ice: {
        ideas: '"There might be a link with autism, and four vaccines at once might be too much for her."',
        concerns: 'HIDDEN AGENDA \u2014 fear of causing harm either way: "My sister\u2019s little boy has autism. If I gave her the jab and something happened, I couldn\u2019t forgive myself." She has not thought much about how serious measles can be.',
        expectations: '"Your honest opinion \u2014 what would you do?" Wants to be listened to, not pushed.'
      },
      cues: [
        '"I\u2019m not anti-vaccine or anything" \u2014 a hesitant, persuadable parent; explore, don\u2019t lecture.',
        '"I couldn\u2019t forgive myself" \u2014 the fear of harm behind the questions.',
        '"What do you think?" \u2014 an invitation for a clear, honest recommendation.'
      ]
    },
    checkpoints: [
      {
        dom: 'ro',
        text: 'EXPLORES her specific concerns, sources and underlying fears, and elicits her understanding FIRST \u2014 using a non-judgemental, motivational-interviewing-style approach rather than lecturing'
      },
      {
        dom: 'ro',
        text: 'Addresses the AUTISM myth accurately (fraudulent original study, retracted by The Lancet in 2010; no link in subsequent large studies such as Hviid 2019) clearly and non-defensively, acknowledging why the fear persists'
      },
      {
        dom: 'ro',
        text: 'Addresses the "immune overload" myth and explains simply how vaccines/combined MMR work and are safe and effective'
      },
      {
        dom: 'cm',
        text: 'Balances the discussion with the REAL risks of the diseases (measles \u2014 pneumonia/encephalitis/death; mumps; rubella in pregnancy) and the importance of herd immunity/outbreaks \u2014 framing it as vaccine risk vs disease risk'
      },
      {
        dom: 'ro',
        text: 'RESPECTS her AUTONOMY \u2014 gives a clear recommendation and honest information without coercion/shaming, offers written info, time, a follow-up, and an open door if she declines today \u2014 checks for genuine contraindications, confirms consent is informed, voluntary and from a person with parental responsibility (Green Book chapter 2; GMC 2020), knows MMRV is now given at 12 and 18 months (UKHSA, from 1 January 2026), and documents the discussion'
      },
      {
        dom: 'ro',
        text: 'Reads her as an anxious, thoughtful parent (not an ideological refuser), builds trust, and engages her concerns warmly rather than dismissing or pressuring'
      },
      {
        dom: 'ro',
        text: 'Checks understanding, addresses each concern, and maintains a respectful, trust-preserving relationship throughout'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: reliable information sources, a follow-up/catch-up plan, an open door, and clarity on the recommendation \u2014 informing and respecting autonomy, not coercing or lecturing'
      }
    ],
    worked: [
      {
        lbl: 'Explore, don\u2019t lecture',
        txt: '"I\u2019m really glad you\u2019re asking rather than just deciding \u2014 that\u2019s a caring parent. Before I share what I think, tell me what you\u2019ve read and what worries you most about it? I\u2019d rather understand your specific concerns than just reel off facts."'
      },
      {
        lbl: 'The autism worry, honestly',
        txt: '"The autism link is the one that scares a lot of parents, so I understand it. Honestly: it came from a single study that was later found to be fraudulent and was withdrawn, and the doctor was struck off the medical register. Since then, studies of millions of children have found no link at all. The worry is understandable, but the evidence is really clear."'
      },
      {
        lbl: 'The "overload" myth',
        txt: '"On overloading \u2014 it feels logical, but a baby\u2019s immune system deals with thousands of germs every day; the few in MMR are a tiny drop. Combining them into one jab is safe and means fewer needles for Mia, not more strain."'
      },
      {
        lbl: 'The other side of the scales',
        txt: '"It\u2019s worth weighing what we\u2019re protecting against: measles isn\u2019t a mild rash \u2014 it can cause serious chest and brain infections and, rarely, death, and rubella in pregnancy can harm a baby. As fewer children are vaccinated, we\u2019re seeing outbreaks again. So it\u2019s really small vaccine risk versus real disease risk."'
      },
      {
        lbl: 'Respect her choice',
        txt: '"My honest recommendation is the vaccine \u2014 now called MMRV, as it also covers chickenpox, with a second dose at 18 months \u2014 but it\u2019s your decision, and I won\u2019t pressure you. If you\u2019d like time, I can give you reliable information to read and we can talk again. The offer stays open \u2014 we can catch up the jab whenever you\u2019re ready. And if you do go ahead, we\u2019ll check first that there\u2019s no medical reason to delay, such as a severe allergy or a problem with her immune system."'
      },
      {
        lbl: 'Keep the door open',
        txt: '"Whatever you decide today, you\u2019re welcome back to talk it through again \u2014 no judgement. Would written information and a follow-up chat help? I\u2019ll note our conversation so we can pick it up easily."'
      }
    ],
    learning: 'Vaccine hesitancy is best met by EXPLORING rather than lecturing: elicit the parent\u2019s specific concerns, what they have read and where, their underlying fears (harming their child either way), and their current understanding first, using a respectful, motivational-interviewing-style approach \u2014 because a thoughtful, anxious parent who is lectured or shamed disengages, while one whose concerns are genuinely heard and addressed is far more likely to vaccinate. Address the AUTISM myth accurately and non-defensively: the original claim came from a study found to be FRAUDULENT and RETRACTED by The Lancet in 2010 (its author struck off the medical register), and subsequent large, robust studies of millions of children show NO link between MMR and autism (e.g. Hviid, Annals of Internal Medicine 2019) \u2014 acknowledging why the fear persists rather than dismissing the parent for raising it. Address the "immune overload" worry (a child\u2019s immune system handles vast numbers of antigens daily; the few in vaccines are a tiny fraction, and combined MMR \u2014 now MMRV at 12 and 18 months under the UKHSA schedule from 1 January 2026 \u2014 is safe, effective and reduces injections) and explain simply how vaccination primes immunity. Balance the discussion with the REAL risks of the diseases \u2014 measles (pneumonia, encephalitis, deafness, death, rare SSPE), mumps (meningitis/orchitis), rubella in pregnancy (congenital defects) \u2014 and the importance of herd immunity and the outbreaks that follow falling uptake, framing the choice as small vaccine risk versus real disease risk. Crucially, RESPECT the parent\u2019s AUTONOMY: give a clear, honest recommendation without coercion or shaming, and if she is not ready, offer reliable written information, time, a follow-up and an open door (vaccination can be caught up), documenting the discussion, checking for genuine contraindications (Green Book) and ensuring consent is informed, voluntary and given by a person with parental responsibility (Green Book chapter 2; GMC Decision making and consent 2020) \u2014 a trust-preserving encounter is more likely to lead to vaccination than pressure. The hidden agenda is an anxious, thoughtful parent seeking trustworthy guidance, not an ideological refuser; engage, inform warmly, respect autonomy and build trust.',
    knowledge: {
      guideline: 'UKHSA Green Book chapter 21 (measles) and chapter 2 (consent) \u00b7 UKHSA routine childhood schedule changes (1 July 2025 and 1 January 2026: MMRV at 12 and 18 months) \u00b7 Lancet retraction of Wakefield et al. (2010) \u00b7 Hviid et al., Annals of Internal Medicine 2019 \u00b7 GMC Decision making and consent (2020) \u00b7 Vaccine hesitancy / motivational interviewing \u00b7 MMR safety & the discredited autism claim \u00b7 immunisation (Green Book) \u00b7 herd immunity',
      points: [
        {
          h: 'Explore, don\u2019t lecture',
          t: 'Elicit specific concerns, sources, fears and understanding first, non-judgementally (MI-style). Lecturing/shaming entrenches hesitancy; engaging concerns builds trust and uptake.'
        },
        {
          h: 'Autism myth',
          t: 'The original 1998 study was fraudulent and retracted by The Lancet (2010), the author struck off; large subsequent studies (e.g. Hviid 2019, over 650,000 children) show no MMR\u2013autism link. Explain clearly, acknowledge the fear, don\u2019t dismiss.'
        },
        {
          h: '"Overload" myth',
          t: 'Children\u2019s immune systems handle vast antigen loads daily; vaccine antigens are a tiny fraction. Combined MMR (now MMRV) is safe/effective and means fewer injections.'
        },
        {
          h: 'Real disease risks',
          t: 'Measles (pneumonia, encephalitis, deafness, death, rare SSPE), mumps (meningitis/orchitis), rubella in pregnancy (congenital defects); falling uptake \u2192 outbreaks/loss of herd immunity. Vaccine risk vs disease risk.'
        },
        {
          h: 'Respect autonomy',
          t: 'Give a clear recommendation and honest information without coercion/shaming; offer written info, time, follow-up and an open door (catch-up possible). Document the discussion. Check genuine contraindications (Green Book); consent from a person with parental responsibility, informed and voluntary (Green Book chapter 2; GMC 2020). Schedule: MMRV at 12 and 18 months for children born on or after 1 January 2025 (UKHSA, from 1 January 2026).'
        },
        {
          h: 'Build trust',
          t: 'Treat the hesitant parent as caring, not adversarial; warmth and respect preserve the relationship and the chance of future vaccination.'
        },
        {
          h: 'Never do',
          t: 'Never lecture, shame or dismiss a hesitant parent; never misstate the evidence defensively; never coerce; never close the door if they decline today.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Reliable information sources, follow-up/catch-up plan, open door, documented discussion; revisit at future contacts.'
        }
      ]
    }
  };

  /* ============ 225. VIDEO — Abnormal cervical screening: high-risk HPV and colposcopy ============ */
  const c225 = {
    id: 'abnormal-cervical-screening',
    title: '"My smear came back abnormal \u2014 do I have cancer? I\u2019m terrified and I don\u2019t understand the letter"',
    type: 'video',
    duration: 12,
    meta: {
      age: 29,
      sex: 'F',
      setting: 'Video consultation \u2014 explaining an abnormal cervical screening result.',
      system: 'Gynaecology / Prevention \u2014 abnormal cervical screening: HPV, dyskaryosis & colposcopy',
      checked: 'October 2026'
    },
    brief: 'Miss Carla Nunez, 29, has had a CERVICAL SCREENING test result of high-risk HPV POSITIVE with borderline or low-grade DYSKARYOSIS (after HPV-primary triage, either grade means direct colposcopy referral), and a letter recommending COLPOSCOPY; she is frightened she has cancer and does not understand the result. The examinable task is to explain an abnormal cervical screening result clearly and reassuringly: what cervical screening DOES (detects high-risk HPV and pre-cancerous CELL CHANGES \u2014 it is SCREENING, not a cancer diagnosis), what HPV is (a common, usually transient sexually-transmitted virus \u2014 not a reflection of promiscuity/blame, often cleared by the immune system), what DYSKARYOSIS/CIN means (abnormal but PRE-cancerous cell changes that are NOT cancer and are highly treatable), why COLPOSCOPY is recommended (a closer look \u00b1 biopsy/treatment of any significant changes to PREVENT cancer developing), and to allay the cancer FEAR with honest, accurate reassurance while explaining the process; address emotional impact, relationship/HPV questions sensitively (HPV can be long-dormant \u2014 not evidence of infidelity), reinforce the importance of attending colposcopy and continued screening (from 1 July 2025, HPV-negative people aged 25\u201349 are recalled every 5 years; after an HPV-positive result recall is sooner) \u2014 HPV vaccination prevents new infection but does not treat existing HPV, and NHS eligibility runs to the 25th birthday (UKHSA Green Book chapter 18a), so it is not routinely offered at 29 \u2014 and safety-net. The skill is translating a frightening letter into understanding, distinguishing screening abnormality from cancer, and supporting an anxious patient. NICE NG12 note: this is the cervical SCREENING pathway (colposcopy referral), not a suspected cancer pathway referral \u2014 NG12 advises considering a suspected cancer pathway referral if, on examination, the appearance of the cervix is consistent with cervical cancer, and symptoms such as post-coital or intermenstrual bleeding need face-to-face examination in their own right.',
    script: {
      opening: '"I got this letter about my smear test \u2014 it says something about HPV and abnormal cells and that I need a \u2018colposcopy\u2019. I\u2019ve been in bits since it arrived. Do I have cancer? What does it all mean? And does the HPV thing mean my partner\u2019s cheated, or that I\u2019ve done something?"',
      facts: [
        {
          topic: 'The letter',
          text: 'Arrived 3 days ago. If asked what it says: "high-risk HPV found", "borderline or low-grade changes", and that she will be invited to colposcopy. Hasn\u2019t had the colposcopy appointment through yet.'
        },
        {
          topic: 'Symptoms (all negative if asked)',
          text: 'No bleeding after sex or between periods, no bleeding after periods have finished, no unusual discharge, no pelvic pain. Periods regular. "I feel completely fine \u2014 that\u2019s what\u2019s scary."'
        },
        {
          topic: 'Screening history',
          text: 'First smear at 25 was normal. This is her second. Thinks she didn\u2019t have the HPV jab at school ("I was off a lot that year").'
        },
        {
          topic: 'Relationship and sexual history (if asked sensitively)',
          text: 'With her partner, Leo, for 4 years; before that, two previous partners. Uses the combined pill. No previous STIs. Hasn\u2019t told Leo about the letter yet.'
        },
        {
          topic: 'Health and lifestyle',
          text: 'Well; no medicines except the pill; no allergies. Smokes about 5 a day ("I\u2019ve been meaning to stop"). Works as a hairdresser. Not planning a pregnancy right now.'
        },
        {
          topic: 'Family',
          text: 'An aunt died of "cancer down below" \u2014 Carla isn\u2019t sure if it was cervix or womb. That\u2019s why the letter frightened her so much.'
        },
        {
          topic: 'How to play it',
          text: 'Very anxious, talking quickly, near tears. Calm down noticeably if the doctor starts by explaining clearly that this is not a cancer result. If given jargon (CIN, dyskaryosis) without explanation, look confused and ask what it means. Ask: "So why do I need this colposcopy thing?" and "What do I tell Leo?". Say back the main points at the end if asked.'
        }
      ],
      ice: {
        ideas: '"Abnormal cells means cancer. And HPV is an STI, so someone must have given it to me."',
        concerns: 'HIDDEN AGENDA \u2014 two fears: cancer (her aunt), and her relationship \u2014 "Does this mean Leo\u2019s been with someone else? Or he\u2019ll think I have?" She is dreading telling him.',
        expectations: '"To know if I\u2019ve got cancer, and what happens at the colposcopy." Wants to know what to say to her partner.'
      },
      cues: [
        '"Do I have cancer?" \u2014 lead with clear reassurance that this is screening, not a cancer diagnosis.',
        '"Does the HPV thing mean my partner\u2019s cheated?" \u2014 blame and relationship worry to address without judgement.',
        '"My aunt died of cancer down below" (if asked about worries or family) \u2014 why the fear is so strong.'
      ]
    },
    checkpoints: [
      {
        dom: 'cm',
        text: 'Leads with the key reassurance \u2014 cervical screening detects high-risk HPV and PRE-cancerous cell changes early; an abnormal screening result is SCREENING, NOT a cancer diagnosis'
      },
      {
        dom: 'ro',
        text: 'Explains HPV simply and WITHOUT BLAME \u2014 a very common virus, usually cleared, can lie dormant for years, not evidence of promiscuity/infidelity \u2014 addressing the relationship question sensitively'
      },
      {
        dom: 'ro',
        text: 'Explains that DYSKARYOSIS/CIN is PRE-cancerous (not cancer), that low-grade changes often resolve, and that changes needing treatment are highly treatable \u2014 preventing cancer'
      },
      {
        dom: 'ro',
        text: 'Explains COLPOSCOPY (magnified look \u00b1 biopsy/treatment such as LLETZ, usually quick and awake) and what to expect, framing it as prevention to reduce fear and improve attendance'
      },
      {
        dom: 'cm',
        text: 'Reinforces ATTENDING colposcopy and continued screening (5-yearly recall at 25\u201349 if HPV negative, from 1 July 2025), explains HPV VACCINATION accurately (prevents new infection, doesn\u2019t treat existing HPV; NHS eligibility to the 25th birthday, so not routinely offered at 29), and recognises this is the screening pathway (not a suspected cancer pathway referral) while noting that symptoms need face-to-face examination and a cervix that looks consistent with cancer warrants considering a suspected cancer pathway referral (NICE NG12)'
      },
      {
        dom: 'ro',
        text: 'Validates her FEAR of cancer and relationship distress, leads with reassurance, and explains a frightening letter in clear, accessible terms'
      },
      {
        dom: 'ro',
        text: 'Checks understanding throughout and ensures she leaves reassured, informed and committed to attending \u2014 not more frightened'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: the importance of attending colposcopy, what symptoms (abnormal/post-coital bleeding) warrant prompt review, continued screening (HPV vaccine not routinely offered at 29), and support \u2014 translating screening abnormality into an understood, supported plan'
      }
    ],
    worked: [
      {
        lbl: 'Lead with reassurance',
        txt: '"Let me put the most important thing first, because I can see you\u2019re terrified: this does NOT mean you have cancer. A cervical screening test is exactly that, a screening test \u2014 it\u2019s designed to catch early changes long before they could ever become cancer, so they can be sorted. This is the system working as intended."'
      },
      {
        lbl: 'Explain HPV without blame',
        txt: '"The HPV part \u2014 that\u2019s a really common virus that most people who\u2019ve ever been sexually active will have had. It usually clears by itself and can sit silently for years. So finding it does NOT mean your partner\u2019s cheated or that you\u2019ve done anything wrong \u2014 please don\u2019t blame yourself or him."'
      },
      {
        lbl: 'Pre-cancer, not cancer',
        txt: '"The \u2018abnormal cells\u2019 are pre-cancerous changes \u2014 not cancer. Mild ones often go away on their own, and any that need treating are very treatable with a simple procedure. The whole point is to deal with them early so cancer never gets a chance."'
      },
      {
        lbl: 'Demystify colposcopy',
        txt: '"Colposcopy just means a closer look at the cervix with a magnifying camera in a clinic \u2014 you\u2019re awake, it\u2019s usually quick. They may take a tiny sample, and if there\u2019s an area that needs it, they can treat it there or soon after. It\u2019s a preventive step, not a scary one."'
      },
      {
        lbl: 'Encourage attendance',
        txt: '"The single most important thing is to go to the colposcopy appointment \u2014 that\u2019s what keeps you safe. Keep going to your routine cervical screening too. The HPV vaccine prevents new infections rather than treating an existing one, and on the NHS it\u2019s offered up to your 25th birthday, so it isn\u2019t part of your plan now. Does that make the letter make more sense?"'
      },
      {
        lbl: 'Safety-net',
        txt: '"If you ever get bleeding between periods or after sex, or any new symptoms, tell me \u2014 that\u2019s a separate reason to be examined in person. But for now: this is reassuring news caught early, and going to the appointment is the key. I\u2019m here if more questions come up."'
      }
    ],
    learning: 'An abnormal cervical screening result terrifies patients, so lead with the central reassurance: cervical screening is SCREENING, designed to detect high-risk HPV and PRE-CANCEROUS cell changes EARLY so they can be treated before any cancer could develop \u2014 an abnormal cervical screening result is NOT a diagnosis of cancer. Explain HPV simply and WITHOUT BLAME: it is a very common sexually-transmitted virus that most sexually active people encounter, usually cleared by the immune system, able to lie DORMANT for years, and finding it does not imply promiscuity or partner infidelity \u2014 a frequent, distressing worry to address sensitively. Explain that DYSKARYOSIS (or CIN on biopsy) means abnormal but PRE-cancerous cell changes (not cancer), that low-grade changes often resolve spontaneously, and that changes needing treatment are highly treatable with simple procedures that effectively PREVENT cancer. Explain COLPOSCOPY \u2014 a magnified look at the cervix \u00b1 a small biopsy and, if needed, treatment (e.g. LLETZ, followed by a test of cure about 6 months later; CIN1 instead has a repeat screening test at 12 months), usually quick and done awake \u2014 framing it as prevention and describing what to expect to reduce fear and improve attendance. Reinforce the importance of ATTENDING colposcopy (non-attendance is a key risk), continued routine screening (from 1 July 2025, HPV-negative people aged 25\u201349 are recalled every 5 years), and accurate HPV VACCINATION information (it prevents new infection but does not treat an existing one; NHS eligibility runs to the 25th birthday, Green Book chapter 18a, so she is outside it at 29), and recognise that this is the cervical-SCREENING pathway (a colposcopy referral), distinct from an urgent suspected cancer pathway referral \u2014 though symptoms (abnormal, post-coital or intermenstrual bleeding) need face-to-face examination in their own right, and a cervix whose appearance is consistent with cancer warrants considering a suspected cancer pathway referral (NICE NG12). The communication core is fear of cancer and relationship distress; lead with accurate reassurance, explain HPV without blame, demystify colposcopy, validate the fear, check understanding, and ensure she attends.',
    knowledge: {
      guideline: 'NHS Cervical Screening Programme: programme and colposcopy management (GOV.UK) \u00b7 NHS England cervical screening changes from 1 July 2025 \u00b7 UKHSA Green Book chapter 18a (HPV) \u00b7 NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) \u00b7 NHS cervical screening (HPV primary screening) \u00b7 dyskaryosis/CIN \u00b7 colposcopy \u00b7 HPV vaccination (screening pathway, not a suspected cancer pathway referral unless the cervix looks suspicious or there are symptoms)',
      points: [
        {
          h: 'Screening, not cancer',
          t: 'An abnormal cervical screening result detects high-risk HPV and pre-cancerous changes early \u2014 it is screening, not a cancer diagnosis. Lead with this reassurance.'
        },
        {
          h: 'HPV without blame',
          t: 'HPV is very common, usually cleared, can lie dormant for years; not evidence of promiscuity or infidelity. Address the relationship worry sensitively and remove blame.'
        },
        {
          h: 'Dyskaryosis/CIN',
          t: 'Pre-cancerous cell changes, not cancer. Low-grade often resolves; changes needing treatment are highly treatable \u2014 the programme prevents cancer.'
        },
        {
          h: 'Colposcopy',
          t: 'Magnified look at the cervix \u00b1 biopsy/treatment (e.g. LLETZ, with a test of cure about 6 months after; CIN1 \u2192 repeat test at 12 months, NHSCSP), usually quick and awake. Explain what to expect; it is preventive.'
        },
        {
          h: 'Attendance, screening, vaccine',
          t: 'Attending colposcopy is the key safety step; continue routine screening (5-yearly at 25\u201349 if HPV negative, from 1 July 2025); HPV vaccination prevents new high-risk infection but doesn\u2019t treat existing HPV \u2014 NHS eligibility to the 25th birthday (Green Book chapter 18a), so not routinely offered at 29.'
        },
        {
          h: 'Pathway note',
          t: 'This is the cervical-screening pathway (colposcopy referral), not a suspected cancer pathway referral. Symptoms (abnormal/post-coital/intermenstrual bleeding) need face-to-face examination; a cervix consistent with cancer on examination \u2192 consider a suspected cancer pathway referral (NICE NG12).'
        },
        {
          h: 'Never do',
          t: 'Never let the patient believe an abnormal screening result = cancer; never imply HPV means infidelity/blame; never under-stress the importance of attending colposcopy; never ignore symptoms that change the pathway.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Attend colposcopy; report abnormal/post-coital bleeding or new symptoms; continued screening (HPV vaccine not routinely offered at 29); emotional support; check understanding.'
        }
      ]
    }
  };

  /* ============ 226. VIDEO — Emotionally unstable (borderline) personality disorder: crisis, validation & boundaries ============ */
  const c226 = {
    id: 'eupd-crisis',
    title: '"Nobody helps me, I can\u2019t cope, and I\u2019ve been hurting myself \u2014 you\u2019re my last hope, you have to fix this now"',
    type: 'video',
    duration: 12,
    meta: {
      age: 26,
      sex: 'F',
      setting: 'Video consultation \u2014 a distressed patient in crisis with self-harm.',
      system: 'Mental health \u2014 emotionally unstable (borderline) personality disorder: crisis, risk & therapeutic boundaries',
      checked: 'October 2026'
    },
    brief: 'Miss Robyn Easton, 26, known emotionally unstable (borderline) personality disorder (EUPD), contacts the practice by video in CRISIS \u2014 intensely distressed, recent SELF-HARM (cutting), feelings of emptiness/abandonment after a relationship breakdown, idealising the GP ("you\u2019re the only one who understands / my last hope") and demanding an immediate fix. The examinable task is the EUPD-in-crisis consultation: respond with genuine VALIDATION and empathy (not dismissal) while assessing RISK carefully (current self-harm, suicidal ideation/intent/plan, protective factors, safety \u2014 NICE NG225: do not use risk tools or scales, or low/medium/high labels, to predict suicide or decide care; base decisions on her needs and the whole picture), avoiding both over-reaction and under-reaction; recognise the patterns of EUPD (emotional dysregulation, fear of abandonment, impulsivity, idealisation/devaluation, recurrent self-harm) WITHOUT being dismissive or stigmatising; maintain CONSISTENT, COMPASSIONATE BOUNDARIES (you cannot "fix it now" or be the sole rescuer \u2014 explain this kindly, avoid splitting, model reliability within limits); make a collaborative SAFETY/crisis plan (crisis-team/contacts, coping strategies, follow-up), reinforce the EVIDENCE-BASED treatment (structured PSYCHOLOGICAL therapy through the mental health service is the mainstay \u2014 NICE CG78 advises considering a comprehensive DBT programme for women for whom reducing recurrent self-harm is a priority; MBT is a specialist-service option not named in CG78; CG78: no drug treatment specifically for the disorder, though comorbid depression/anxiety is treated); involve the wider team (crisis/CMHT) appropriately; and look after continuity. The skill is holding empathy + risk assessment + boundaries together, and not being drawn into an unsustainable rescuer role or dismissing the distress.',
    script: {
      opening: '"You\u2019re the only one who actually listens \u2014 everyone else has given up on me. I can\u2019t cope, my partner\u2019s left, I feel completely empty, and I\u2019ve been cutting again. I need you to fix this right now, today. Please, you\u2019re my last hope. If you can\u2019t help me I don\u2019t know what I\u2019ll do."',
      facts: [
        {
          topic: 'What has happened',
          text: 'Her partner, Jordan, left 5 days ago after a row \u2014 "took his stuff and blocked me". Since then she has felt "empty, like there\u2019s nothing inside me", and switches between rage and crying.'
        },
        {
          topic: 'The self-harm',
          text: 'Cut her left forearm last night with a razor blade, "to make the feeling stop \u2014 it\u2019s the only thing that works". If asked: several superficial cuts, cleaned them, not gaping, no numbness, "they\u2019ve stopped bleeding". Last cut before this was 4 months ago.'
        },
        {
          topic: 'Suicidal thoughts (only if asked directly)',
          text: '"Sometimes I think everyone would be better off without me." No plan, hasn\u2019t researched methods, hasn\u2019t saved tablets, no note, hasn\u2019t taken an overdose. "I just want the feeling to stop." Took an overdose of paracetamol two years ago after a previous break-up.'
        },
        {
          topic: 'Means and safety',
          text: 'The blade is in the bathroom cabinet. Small amount of paracetamol in the kitchen. Willing to put the blades in the outside bin if asked. Not drinking today; drank a bottle of wine two nights ago. No drugs.'
        },
        {
          topic: 'Protective factors (if asked)',
          text: 'Her cat, Pickle. Her younger sister, Tasha, who she texts most days. "Part of me still wants things to get better." Talking helps "if they don\u2019t judge me".'
        },
        {
          topic: 'Services and medicines',
          text: 'Diagnosed with EUPD at 21. Had a CMHT care coordinator until 6 months ago; discharged when "they said I was stable". Started a DBT group once but stopped after 3 sessions when the group changed. Takes sertraline 100 mg "most days". No allergies.'
        },
        {
          topic: 'Social',
          text: 'Lives alone in a rented flat now. Works part-time in a caf\u00e9; hasn\u2019t been in this week. No children. Mum "doesn\u2019t get it".'
        },
        {
          topic: 'How to play it',
          text: 'Intense, tearful, sometimes angry. Idealise the doctor ("you\u2019re the only one"). If the doctor dismisses you or rushes, escalate: "So you\u2019re giving up on me like everyone else." If the doctor is warm, listens and explains kindly what they can and can\u2019t do, calm a little. When a referral to the crisis team is suggested, accuse them of "passing me on", then accept if reassured they will stay involved and follow up. Ask for "something to knock me out" if medication is not mentioned.'
        }
      ],
      ice: {
        ideas: '"You can make this stop. You\u2019re the only one who can help."',
        concerns: 'HIDDEN AGENDA \u2014 terror of being abandoned again: "Everyone gets fed up with me in the end." She needs to feel heard and not dropped, more than an actual fix.',
        expectations: '"Fix it today" \u2014 perhaps tablets to "knock me out", or to be seen by someone immediately. Will accept a plan if she feels the doctor is not giving up on her.'
      },
      cues: [
        '"You\u2019re the only one who actually listens" \u2014 idealisation; needs warmth and clear, kind boundaries.',
        '"If you can\u2019t help me I don\u2019t know what I\u2019ll do" \u2014 the door to asking directly about suicidal thoughts.',
        '"So you\u2019re passing me on, like everyone else" (when referral is raised) \u2014 abandonment fear to name and address.'
      ]
    },
    checkpoints: [
      {
        dom: 'ro',
        text: 'Responds with genuine VALIDATION/empathy AND carefully ASSESSES RISK \u2014 recent self-harm (method/intent/escalation), current suicidal ideation/intent/plan/means, protective factors, support and immediate safety \u2014 exploring "I don\u2019t know what I\u2019ll do" directly \u2014 without risk scales or low/medium/high labels (NICE NG225)'
      },
      {
        dom: 'dg',
        text: 'Recognises EMOTIONALLY UNSTABLE (BORDERLINE) PERSONALITY DISORDER patterns (emotional dysregulation, abandonment fear, emptiness, impulsivity, recurrent self-harm, idealisation/devaluation) WITHOUT stigma or dismissal'
      },
      {
        dom: 'cm',
        text: 'Avoids BOTH over-reaction (reflexive admission/medication escalation) and under-reaction (dismissal) \u2014 assessing this presentation on its merits and responding proportionately'
      },
      {
        dom: 'cm',
        text: 'Maintains COMPASSIONATE, CONSISTENT BOUNDARIES \u2014 kindly explaining there is no instant fix and that the clinician cannot be the sole rescuer, avoiding splitting/idealisation and promises that can\u2019t be kept, while not rejecting her'
      },
      {
        dom: 'cm',
        text: 'Makes a collaborative SAFETY/CRISIS plan (coping strategies, crisis-line/crisis-team contacts, means safety, follow-up, CMHT/crisis-team involvement as risk dictates) and reinforces the evidence-based treatment (structured psychological therapy mainstay \u2014 NICE CG78: consider comprehensive DBT for women where reducing recurrent self-harm is a priority; medication not first-line for EUPD itself)'
      },
      {
        dom: 'ro',
        text: 'Holds empathy and containment together \u2014 making her feel genuinely heard and safe \u2014 while not being drawn into an unsustainable rescuer role'
      },
      {
        dom: 'ro',
        text: 'Communicates boundaries with warmth (not warmth without limits, nor limits without warmth), checks understanding, and preserves the therapeutic relationship and continuity'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: a clear crisis/safety plan with named contacts, when/how to seek urgent help, crisis-team/CMHT involvement proportionate to risk, follow-up and continuity \u2014 validation + risk management + boundaries, neither rejecting nor rescuing'
      }
    ],
    worked: [
      {
        lbl: 'Validate genuinely',
        txt: '"I can hear how much pain you\u2019re in, and I\u2019m really glad you came to me with it rather than being alone with it. Losing your partner, feeling empty, hurting yourself \u2014 that\u2019s a huge amount to carry. I\u2019m taking it seriously."'
      },
      {
        lbl: 'Assess risk directly',
        txt: '"I need to ask you some direct questions to keep you safe. When you cut, were you trying to end your life or to cope with the feelings? Right now, are you having thoughts of ending your life \u2014 any plan, anything you\u2019d use? What\u2019s kept you going so far?"'
      },
      {
        lbl: 'Compassionate boundary',
        txt: '"I want to be honest and kind with you: I can\u2019t fix all of this today, and it wouldn\u2019t be fair to pretend I can be the only person who helps you \u2014 because you deserve a proper team around you, not just me. What I CAN do is make sure you\u2019re safe today and get the right help in place."'
      },
      {
        lbl: 'Avoid splitting, stay warm',
        txt: '"It sounds like others have let you down, and that\u2019s painful \u2014 but I don\u2019t want to be your only lifeline and then let you down too. Let\u2019s build something more reliable: you, me, and the crisis and mental-health teams working together."'
      },
      {
        lbl: 'Safety plan + right treatment',
        txt: '"Let\u2019s make a plan for when it feels unbearable \u2014 things that help you cope, who to call, the crisis line, and keeping yourself safe from means. The treatment that genuinely helps this in the long run is a talking therapy like DBT \u2014 not just tablets \u2014 and I\u2019ll get that moving with the team."'
      },
      {
        lbl: 'Follow-up + safety-net',
        txt: '"I\u2019m going to arrange close follow-up and involve the crisis team given how you\u2019re feeling. If your thoughts of harming yourself get stronger or you feel unsafe, call the crisis line or 999 / go to A&E \u2014 that\u2019s exactly what they\u2019re there for. You\u2019re not a burden, and I\u2019m not giving up on you."'
      }
    ],
    learning: 'The EUPD-in-crisis consultation requires holding genuine VALIDATION/empathy and careful RISK ASSESSMENT together: the patient\u2019s distress is real and overwhelming and must not be dismissed, while the recent self-harm (method, intent, escalation), current suicidal ideation/intent/plan/means, protective factors and immediate safety are assessed directly (without risk scales or low/medium/high labels, NICE NG225) \u2014 statements like "I don\u2019t know what I\u2019ll do" explored with sensitive, specific suicide-risk questioning. Recognise the patterns of EMOTIONALLY UNSTABLE (BORDERLINE) PERSONALITY DISORDER \u2014 emotional dysregulation, fear of ABANDONMENT (here a relationship breakdown), chronic emptiness, impulsivity, recurrent self-harm, and IDEALISATION/devaluation (the clinician as "the only one who understands") \u2014 without stigma, because understanding the pattern guides a measured response rather than panic or rejection. Avoid BOTH extremes: under-reacting/dismissing risks missing genuinely elevated risk, while over-reacting (reflexive admission, escalating medication) can be unhelpful or harmful and reinforce unhelpful patterns \u2014 assess each presentation on its merits and respond proportionately, recognising self-harm as often a way of coping with unbearable emotion. The critical skill is maintaining COMPASSIONATE, CONSISTENT BOUNDARIES: you cannot "fix it now" or be the sole rescuer, and saying so KINDLY (without rejecting) is therapeutic; avoid being drawn into idealisation/SPLITTING ("the good clinician versus everyone who gave up"), model reliability within clear limits, and avoid promises you cannot keep \u2014 boundaries with warmth, neither warmth without limits nor limits without warmth. Make a collaborative SAFETY/CRISIS plan (coping strategies, crisis-line/crisis-team contacts, means safety, follow-up, CMHT involvement per risk) and reinforce the evidence-based treatment \u2014 structured PSYCHOLOGICAL therapies are the mainstay (NICE CG78: consider a comprehensive DBT programme for women for whom reducing recurrent self-harm is a priority; MBT is a specialist-service option not recommended in CG78), while medication is NOT first-line for EUPD itself (treat comorbid depression/anxiety, avoid reflexive sedatives/polypharmacy in crisis) \u2014 ensuring continuity. The hidden agenda is unbearable pain, abandonment fear and a need to be heard and held safely, not an expectation of an instant cure; validate and contain, manage risk, hold boundaries, signpost the right treatment/team, and preserve continuity \u2014 neither rejecting nor rescuing.',
    knowledge: {
      guideline: 'NICE CG78 Borderline personality disorder (2009) \u00b7 NICE NG225 Self-harm (2022) \u00b7 NICE QS88 Personality disorders (2015) \u00b7 GMC Good medical practice (2024) \u00b7 needs-based assessment (no risk scales or low/medium/high labels) \u00b7 DBT (CG78) \u00b7 therapeutic boundaries',
      points: [
        {
          h: 'Validate + assess risk',
          t: 'Respond with genuine empathy (not dismissal) AND assess risk: recent self-harm (method/intent/escalation), current suicidal ideation/intent/plan/means, protective factors, safety. Explore "I don\u2019t know what I\u2019ll do" directly. No risk tools/scales or low/medium/high labels (NICE NG225).'
        },
        {
          h: 'Recognise EUPD',
          t: 'Emotional dysregulation, abandonment fear, emptiness, impulsivity, recurrent self-harm, idealisation/devaluation. Understand the pattern without stigma to respond in a measured way.'
        },
        {
          h: 'Avoid both extremes',
          t: 'Under-reaction/dismissal risks missing real risk; over-reaction (reflexive admission/medication) can harm and reinforce patterns. Assess on merits; respond proportionately.'
        },
        {
          h: 'Compassionate boundaries',
          t: 'No instant fix; not the sole rescuer \u2014 say so kindly without rejecting. Avoid splitting/idealisation, model reliability within limits, don\u2019t over-promise. Warmth with boundaries.'
        },
        {
          h: 'Safety plan',
          t: 'Collaborative crisis/safety plan: coping strategies, crisis-line/crisis-team contacts, means safety, follow-up, CMHT involvement per risk.'
        },
        {
          h: 'Evidence-based treatment',
          t: 'Structured psychological therapy is the mainstay (NICE CG78: consider comprehensive DBT for women where reducing recurrent self-harm is a priority; MBT is not a CG78 recommendation); medication is not first-line for EUPD itself (CG78; short-term crisis sedation no longer than 1 week, safe in overdose) (treat comorbid depression/anxiety; avoid reflexive sedatives/polypharmacy in crisis).'
        },
        {
          h: 'Never do',
          t: 'Never dismiss as "attention-seeking"; never over-react reflexively; never become the sole rescuer or make promises you can\u2019t keep; never start/escalate sedatives reflexively; never reject the patient.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Clear crisis/safety plan with named contacts and when to call crisis line/999/A&E; proportionate crisis-team/CMHT involvement; follow-up and continuity; validation + risk + boundaries.'
        }
      ]
    }
  };

  /* ============ 227. VIDEO — Chronic plaque psoriasis: more than skin deep ============ */
  const c227 = {
    id: 'chronic-plaque-psoriasis',
    title: '"These scaly patches keep coming back and creams barely help \u2014 it\u2019s ruining my confidence"',
    type: 'video',
    duration: 12,
    meta: {
      age: 38,
      sex: 'M',
      setting: 'Video consultation \u2014 recurrent scaly plaques affecting quality of life.',
      system: 'Dermatology \u2014 chronic plaque psoriasis: the treatment ladder, comorbidity & psychosocial impact',
      checked: 'October 2026'
    },
    brief: 'Mr Daniel Okafor, 38, has recurrent well-demarcated, red, SCALY plaques on his elbows, knees and scalp (\u00b1 nail changes), present for years, worsening, with significant impact on confidence/mood and some joint stiffness in the mornings. The examinable task is to recognise CHRONIC PLAQUE PSORIASIS and manage it holistically: confirm the clinical picture (well-demarcated salmon-pink plaques with silvery scale at extensor sites/scalp, nail pitting/onycholysis), apply the topical TREATMENT LADDER (NICE CG153: emollients plus a potent topical CORTICOSTEROID once daily and a vitamin D analogue once daily, applied separately \u2014 one in the morning, one in the evening \u2014 for up to 4 weeks first-line, with a combined product only if separate application is not possible; scalp/flexural-appropriate preparations; review at 4 weeks, with a break of at least 4 weeks between courses of potent steroids at one site), know when to STEP UP/refer (extensive/severe, unresponsive, significant impact \u2192 dermatology for phototherapy, systemic agents, biologics); screen for PSORIATIC ARTHRITIS (PEST for peripheral joints; his lower back symptoms assessed against the NICE NG65 inflammatory back pain criteria, as PEST does not detect axial disease; his morning joint stiffness/pain \u2014 a key associated condition needing rheumatology), recognise the CARDIOVASCULAR/metabolic comorbidity (psoriasis associates with cardiovascular risk, metabolic syndrome \u2014 address smoking, weight, alcohol; CG153 offers a formal cardiovascular risk assessment to adults with severe psoriasis at presentation and at least every 5 years) and triggers (stress, infection, drugs e.g. beta-blockers/lithium, skin trauma), and \u2014 critically \u2014 take the PSYCHOSOCIAL impact seriously (confidence, mood, stigma, relationships \u2014 screen low mood). The skill is treating psoriasis as MORE THAN SKIN: the ladder, the arthritis screen, the comorbidity, and the psychological impact.',
    script: {
      opening: '"I\u2019ve had these scaly patches on my elbows, knees and scalp for years \u2014 they flare up, the creams barely touch them, and they\u2019re back worse than ever. Honestly it\u2019s wrecking my confidence; I cover up even in summer. And lately my fingers and lower back are stiff and achy in the mornings. Can you give me something stronger that actually works?"',
      facts: [
        {
          topic: 'The skin',
          text: 'Psoriasis since age 20. Thick, red, scaly patches on both elbows and knees, scalp "flaky all the time", a patch in the small of the back. Worse over the last 6 months. Will show his elbows to the camera if asked: raised red plaques with silvery scale.'
        },
        {
          topic: 'How he uses the creams',
          text: 'Has a steroid cream and a "vitamin D one" plus an emollient. Uses them "when it flares and stops when it calms down". Finds them greasy and messy, and two creams at different times "too much hassle". Uses an ordinary dandruff shampoo for the scalp.'
        },
        {
          topic: 'Nails',
          text: 'If asked: "a few little dents" in his fingernails, and one nail lifting at the end.'
        },
        {
          topic: 'Joints (if asked)',
          text: 'For about 4 months: fingers stiff and achy in the mornings for about an hour; the end of his right middle finger "looked a bit puffy" a few weeks ago. Low back stiff first thing, better once he gets moving, wakes him in the early hours sometimes. No injury. No eye problems.'
        },
        {
          topic: 'Triggers and lifestyle',
          text: 'Stressful year \u2014 promoted to site manager. Drinks about 25 units a week, smokes 15 a day. BMI about 31. Not on beta-blockers or lithium; no new tablets. No recent sore throat.'
        },
        {
          topic: 'Health',
          text: 'No other conditions he knows of; blood pressure "never checked". No allergies. Father had a heart attack at 58 and also had psoriasis.'
        },
        {
          topic: 'Mood and impact',
          text: 'Dreads summer, never wears short sleeves, avoids swimming with his kids. Feels people stare. "It gets me down \u2014 not all the time, but it does." No thoughts of self-harm if asked. Partner, Joy, is supportive.'
        },
        {
          topic: 'How to play it',
          text: 'Frustrated, a little embarrassed. You want a stronger cream. Mention the joint stiffness in the opening but don\u2019t expand unless asked. If the doctor explores the impact on your life, open up. Prefer one treatment at night if given the choice. Be surprised that the joints and heart risk might be linked.'
        }
      ],
      ice: {
        ideas: '"The creams don\u2019t work. I need something stronger \u2014 maybe tablets or an injection."',
        concerns: 'HIDDEN AGENDA \u2014 the effect on his confidence and mood; covering up and avoiding the beach with his children. Also worried the stiff fingers mean he\u2019s getting arthritis "like an old man", which would affect his job.',
        expectations: '"Something that actually clears it, so I can stop hiding."'
      },
      cues: [
        '"I use them when it flares and stop when it calms down" \u2014 how he actually uses the creams.',
        '"My fingers and lower back are stiff in the mornings" \u2014 possible psoriatic arthritis.',
        '"I cover up even in summer" \u2014 the psychosocial impact to explore.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises CHRONIC PLAQUE PSORIASIS (well-demarcated silvery-scaled plaques at extensor sites/scalp \u00b1 nail changes, chronic relapsing course) and assesses extent/severity/sites'
      },
      {
        dom: 'cm',
        text: 'Applies the topical TREATMENT LADDER \u2014 emollients + potent topical corticosteroid once daily and vitamin D analogue once daily applied separately (a combined product only if separate application is not possible) first-line for up to 4 weeks, site-appropriate preparations, review at 4 weeks and at least 4-week breaks between potent steroid courses (NICE CG153) \u2014 recognising "creams don\u2019t work" is often under-treatment/incorrect application'
      },
      {
        dom: 'cm',
        text: 'Knows when to STEP UP/refer to dermatology (extensive/severe, topical-resistant, significant impact \u2192 phototherapy/systemics/biologics) and the urgent emergencies (erythrodermic/generalised pustular)'
      },
      {
        dom: 'dg',
        text: 'SCREENS for PSORIATIC ARTHRITIS (morning stiffness/joint pain, dactylitis, nail disease; PEST for peripheral joints, NICE NG65 criteria for the inflammatory back pain, joint exam face to face) and refers to RHEUMATOLOGY if suspected \u2014 not treating skin and missing joints'
      },
      {
        dom: 'dg',
        text: 'Recognises the CARDIOVASCULAR/metabolic comorbidity (assess/address smoking, weight, alcohol, BP/lipids/glucose; formal cardiovascular risk assessment for severe psoriasis at presentation and at least 5-yearly, CG153) and identifies TRIGGERS (stress, infection, skin trauma, drugs \u2014 beta-blockers/lithium/antimalarials)'
      },
      {
        dom: 'ro',
        text: 'Takes the PSYCHOSOCIAL impact seriously \u2014 confidence, mood, body image, stigma, relationships \u2014 screens low mood, and validates the distress rather than treating it as merely cosmetic'
      },
      {
        dom: 'ro',
        text: 'Explains the treatment plan and realistic expectations (control not cure), checks understanding (including correct application), and supports adherence'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: optimised topical therapy with review, rheumatology referral for suspected psoriatic arthritis, cardiovascular/metabolic risk management, trigger advice, mood support, and dermatology referral if needed \u2014 treating more than the skin'
      }
    ],
    worked: [
      {
        lbl: 'Recognise + reframe',
        txt: '"Those silvery, well-defined scaly patches on your elbows, knees and scalp are classic psoriasis \u2014 and importantly it\u2019s more than a skin problem, so I want to look at the whole picture, not just hand you a stronger cream."'
      },
      {
        lbl: 'Optimise the creams',
        txt: '"Often \u2018creams don\u2019t work\u2019 because the strength or how they\u2019re used isn\u2019t quite right. The mainstay is a strong steroid once a day and a vitamin D cream once a day, used separately \u2014 one in the morning, one at night \u2014 for up to 4 weeks, plus a proper scalp preparation, used consistently, with emollients underneath. Let\u2019s get that right and review; if it\u2019s still not controlled, the skin specialists have light therapy and tablets/injections."'
      },
      {
        lbl: 'Screen the joints',
        txt: '"The morning stiffness in your fingers and back is important \u2014 psoriasis can come with a linked arthritis, and treating it early protects the joints. I\u2019ll ask a few screening questions, including about your back, and examine your joints in person, and refer you to rheumatology if it fits."'
      },
      {
        lbl: 'Whole-body health',
        txt: '"Psoriasis is also linked with heart and metabolic risk, so I\u2019d like to check your blood pressure, cholesterol and sugar and support things like smoking, weight and alcohol. And some triggers matter \u2014 stress, infections, even certain blood-pressure tablets can flare it."'
      },
      {
        lbl: 'Address the impact',
        txt: '"You said it\u2019s wrecking your confidence and you cover up \u2014 that matters as much as the skin itself. It\u2019s really common for psoriasis to affect mood. How have you been in yourself? We can support that too, and good control usually helps the confidence."'
      },
      {
        lbl: 'Plan + safety-net',
        txt: '"So: optimise the treatment and review, screen and refer for the joints, check your heart/metabolic risk, and look after your mood. Come back if it spreads dramatically, your skin goes red all over or you feel unwell \u2014 those rarer severe forms need urgent care. We\u2019ll tackle this properly, not just paper over it."'
      }
    ],
    learning: 'CHRONIC PLAQUE PSORIASIS \u2014 well-demarcated, red/salmon-pink plaques with SILVERY scale at extensor sites (elbows, knees), the scalp, and sometimes the lower back/umbilicus, often with NAIL changes (pitting, onycholysis) and a chronic relapsing course \u2014 must be managed as MORE THAN SKIN. Confirm the clinical picture and assess extent, severity and sites, then apply the topical TREATMENT LADDER: generous emollients plus a potent topical CORTICOSTEROID + VITAMIN D ANALOGUE (NICE CG153: once daily each, applied separately, for up to 4 weeks; a combined once-daily product only if separate application is not possible) first-line, with site-appropriate preparations (scalp formulations; appropriate agents for flexures/face) and review at 4 weeks, with at least 4-week breaks between courses of potent steroids at one site \u2014 recognising that "creams don\u2019t work" is often under-treatment or incorrect potency/application. Know when to STEP UP or REFER to dermatology (extensive/severe, topical-resistant, significant functional/psychological impact, difficult sites \u2192 phototherapy, systemics such as methotrexate/ciclosporin/acitretin, biologics) and the rare emergencies (erythrodermic or generalised pustular psoriasis). Critically, SCREEN for PSORIATIC ARTHRITIS \u2014 morning joint stiffness/pain, dactylitis, enthesitis, axial symptoms or nail disease (PEST for peripheral joints, which misses axial disease; NICE NG65 inflammatory back pain criteria for the back; joints examined face to face) \u2014 and refer to rheumatology if suspected, because early treatment prevents joint damage; do not treat the skin and miss the joints. Recognise psoriasis as a SYSTEMIC condition associated with increased cardiovascular risk and metabolic syndrome (address smoking, weight, alcohol, BP/lipids/glucose, with formal cardiovascular risk assessment for severe psoriasis at presentation and at least every 5 years per CG153) and identify TRIGGERS (stress, infection \u2014 e.g. streptococcal/guttate, skin trauma/Koebner, and drugs such as beta-blockers, lithium, antimalarials, plus alcohol). Above all, take the PSYCHOSOCIAL impact seriously \u2014 psoriasis profoundly affects confidence, mood, body image, relationships and work, with stigma and real risk of depression/anxiety \u2014 so screen low mood and validate the distress rather than treating it as merely cosmetic. The hidden agenda is the visible skin plus the distress and now the joints; optimise treatment, screen arthritis and comorbidity, and address the emotional impact.',
    knowledge: {
      guideline: 'NICE CG153 Psoriasis (2012, updated 2017) \u00b7 NICE QS40 Psoriasis (2013) \u00b7 NICE NG65 Spondyloarthritis (2017) \u00b7 MHRA Drug Safety Update December 2018 (emollient fire risk) \u00b7 BNF \u00b7 topical ladder (steroid + vitamin D) \u00b7 psoriatic arthritis (PEST; NG65 for back pain) \u00b7 cardiovascular/metabolic comorbidity & psychosocial impact',
      points: [
        {
          h: 'Recognise it',
          t: 'Well-demarcated silvery-scaled plaques at extensor sites/scalp \u00b1 nail changes (pitting, onycholysis), chronic relapsing. Assess extent, severity, sites.'
        },
        {
          h: 'Topical ladder',
          t: 'Emollients + potent topical corticosteroid once daily + vitamin D analogue once daily, applied separately, for up to 4 weeks (combined product only if separate application is not possible) first-line (CG153); site-appropriate (scalp: potent steroid up to 4 weeks; face/flexures: mild or moderate up to 2 weeks); review at 4 weeks; at least 4-week breaks between potent courses. "Creams don\u2019t work" often = under-treatment/incorrect application. Control, not cure.'
        },
        {
          h: 'Step up / refer',
          t: 'Extensive/severe, topical-resistant, significant impact, difficult sites \u2192 dermatology (phototherapy, methotrexate/ciclosporin/acitretin, biologics). Urgent: erythrodermic/generalised pustular psoriasis.'
        },
        {
          h: 'Screen psoriatic arthritis',
          t: 'Morning stiffness/joint pain, dactylitis, enthesitis, axial symptoms, nail disease \u2192 screen (PEST annually; misses axial disease \u2014 use NG65 criteria for back pain), examine face to face, refer rheumatology. Early treatment prevents joint damage.'
        },
        {
          h: 'Systemic comorbidity & triggers',
          t: 'Increased cardiovascular risk/metabolic syndrome \u2014 formal CVD risk assessment for severe psoriasis at presentation and at least 5-yearly (CG153); address smoking, weight, alcohol, BP/lipids/glucose. Triggers: stress, infection (strep/guttate), trauma (Koebner), drugs (beta-blockers, lithium, antimalarials), alcohol.'
        },
        {
          h: 'Psychosocial impact',
          t: 'Profound effect on confidence, mood, body image, relationships, work; stigma; depression/anxiety risk. Screen low mood; validate; good control aids confidence.'
        },
        {
          h: 'Never do',
          t: 'Never treat psoriasis as merely cosmetic; never give a "stronger cream" without optimising the ladder/application; never miss psoriatic arthritis or cardiovascular comorbidity; never ignore the psychological impact.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Optimise topicals + review; rheumatology referral if arthritis suspected; cardiovascular/metabolic risk management; trigger advice; mood support; dermatology referral if needed; urgent review for erythroderma/generalised pustular.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c224, c225, c226, c227);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'vaccine-hesitancy-mmr': {
      ceg: ['Children & young people', 'Population & planetary health'],
      stem: {
        name: 'Lauren Hill (mother of Mia, 13 months)',
        age: '32 years \u00b7 female',
        pmh: [
          'Hesitant about daughter\u2019s due MMR \u2014 "read things" online (autism link, "immune overload")',
          'Thoughtful, anxious parent; not an ideological refuser',
          'Wants to do the right thing'
        ],
        meds: ['\u2014'],
        allergy: 'NKDA',
        recent: '"I\u2019ve read things about the MMR \u2014 I\u2019m not sure I want my daughter to have it. What do you think?"',
        reason: 'Video \u2014 mother hesitant about her child\u2019s MMR.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Explore, don\u2019t lecture',
          d: 'Elicit specific concerns, sources and fears; she\u2019s a caring parent, not adversarial.'
        },
        {
          t: '2\u20135',
          h: 'Address myths accurately',
          d: 'Autism: fraudulent study (retracted by The Lancet 2010), no link in large studies; "overload" myth; how vaccines work.'
        },
        {
          t: '5\u20138',
          h: 'Real disease risks',
          d: 'Measles (encephalitis/death), rubella in pregnancy, herd immunity/outbreaks \u2014 vaccine vs disease risk.'
        },
        {
          t: '8\u201310',
          h: 'Respect autonomy',
          d: 'Clear recommendation (MMRV now due at 12 and 18 months, UKHSA 2026) without coercion; check contraindications; consent from a parent with parental responsibility; written info, time, follow-up; door stays open (catch-up).'
        },
        {
          t: '10\u201312',
          h: 'Build trust + document',
          d: 'Warm, non-judgemental; preserve relationship and future chance; document discussion.'
        }
      ],
      wordPics: {
        fail: 'Lectures/shames the parent, dismisses her concerns, or simply demands compliance \u2014 entrenching hesitancy; or capitulates without giving accurate information.',
        pass: 'Explores concerns, corrects the myths accurately, balances with disease risks, and respects autonomy with an open door.',
        exc: 'Explores her specific concerns non-judgementally, addresses the autism and "overload" myths accurately and warmly, balances with real disease/herd-immunity risks, gives a clear recommendation while respecting autonomy (info, time, follow-up, open door), and builds trust.'
      },
      avoid: [
        {
          dont: '"That autism stuff is nonsense \u2014 you just need to get her vaccinated, end of."',
          instead: '"I understand the autism worry \u2014 it came from a study later found fraudulent and retracted; huge studies since show no link. Let\u2019s talk it through."',
          why: 'Dismissing/lecturing a hesitant parent entrenches hesitancy and damages trust.'
        },
        {
          dont: '(Capitulating) "Okay, skip it if you\u2019re worried."',
          instead: '"My honest recommendation is the MMR, and here\u2019s why \u2014 but it\u2019s your choice, and I\u2019ll give you reliable info and time."',
          why: 'Failing to give accurate information and a clear recommendation abandons the duty to inform.'
        },
        {
          dont: '(Pressuring) refusing to let her leave without consenting.',
          instead: '"If you\u2019re not ready today, that\u2019s okay \u2014 the offer stays open and we can catch up the jab whenever."',
          why: 'Coercion breaches autonomy and reduces the chance of future vaccination.'
        }
      ]
    },
    'abnormal-cervical-screening': {
      ceg: ['Gender, reproductive & sexual health', 'Investigations & results'],
      stem: {
        name: 'Carla Nunez',
        age: '29 years \u00b7 female',
        pmh: [
          'Cervical screening: high-risk HPV positive + borderline or low-grade dyskaryosis (either triggers direct colposcopy referral); colposcopy recommended',
          'Terrified she has cancer; doesn\u2019t understand the letter',
          'Worried HPV means partner unfaithful'
        ],
        meds: ['Combined oral contraceptive'],
        allergy: 'NKDA',
        recent: '"My smear came back abnormal \u2014 do I have cancer? Does HPV mean my partner cheated?"',
        reason: 'Video \u2014 explaining an abnormal cervical screening result.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Lead with reassurance',
          d: 'Screening detects pre-cancer early \u2014 NOT a cancer diagnosis; settle the terror first.'
        },
        {
          t: '2\u20135',
          h: 'HPV without blame',
          d: 'Common virus, often dormant for years \u2014 not infidelity/promiscuity; address the relationship worry.'
        },
        {
          t: '5\u20137',
          h: 'Dyskaryosis = pre-cancer',
          d: 'Abnormal but pre-cancerous cells; low-grade often resolves; treatable \u2014 prevents cancer.'
        },
        {
          t: '7\u20139',
          h: 'Demystify colposcopy',
          d: 'Magnified look \u00b1 biopsy/treatment (LLETZ, test of cure ~6 months; CIN1 \u2192 repeat at 12 months), quick/awake, preventive; what to expect.'
        },
        {
          t: '9\u201312',
          h: 'Attendance + safety-net',
          d: 'Attend colposcopy; continue screening (HPV vaccine eligibility ends at 25; it doesn\u2019t treat existing HPV); report abnormal/post-coital bleeding.'
        }
      ],
      wordPics: {
        fail: 'Leaves her believing she has cancer, or implies HPV means infidelity; fails to explain colposcopy or stress attendance.',
        pass: 'Reassures it is screening/pre-cancer not cancer, explains HPV without blame, and demystifies colposcopy with attendance advice.',
        exc: 'Leads with accurate reassurance (screening, not cancer), explains HPV without blame and addresses the relationship worry, clarifies dyskaryosis as treatable pre-cancer, demystifies colposcopy, stresses attendance/screening, gives accurate HPV-vaccine eligibility (to the 25th birthday), and validates her fear.'
      },
      avoid: [
        {
          dont: '"You\u2019ve got abnormal cells \u2014 we need to check it\u2019s not cancer" (leaving the fear hanging).',
          instead: '"This is a screening result showing early, pre-cancerous changes \u2014 not cancer \u2014 caught so they can be treated before they ever could be."',
          why: 'Leaving the cancer fear unaddressed causes needless terror and misrepresents screening.'
        },
        {
          dont: '"HPV is sexually transmitted, so someone\u2019s been unfaithful."',
          instead: '"HPV is extremely common and can lie dormant for years \u2014 it doesn\u2019t mean infidelity or that you did anything wrong."',
          why: 'Implying infidelity is inaccurate and harmful to the patient and relationship.'
        },
        {
          dont: '(No attendance emphasis) ending without stressing colposcopy.',
          instead: '"The key thing is to attend the colposcopy \u2014 that\u2019s what keeps you safe."',
          why: 'Non-attendance is the main risk; emphasising attendance is essential.'
        }
      ]
    },
    'eupd-crisis': {
      ceg: ['Mental health & addiction', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Robyn Easton',
        age: '26 years \u00b7 female',
        pmh: [
          'Known EUPD; in crisis \u2014 \u26a0 recent self-harm (cutting), emptiness/abandonment after relationship breakdown',
          'Idealising GP ("only you understand", "last hope"); demands immediate fix',
          '\u26a0 "If you can\u2019t help I don\u2019t know what I\u2019ll do"'
        ],
        meds: ['Sertraline (for comorbid depression)'],
        allergy: 'NKDA',
        recent: '"Nobody helps me, I can\u2019t cope, I\u2019ve been hurting myself \u2014 you have to fix this now."',
        reason: 'Video \u2014 distressed patient in crisis with self-harm.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Validate',
          d: 'Genuine empathy \u2014 the pain is real; glad she came; take it seriously (not dismissal).'
        },
        {
          t: '2\u20135',
          h: 'Assess risk directly',
          d: 'Self-harm intent/escalation; suicidal ideation/intent/plan/means; protective factors; safety; no risk scales/labels (NG225).'
        },
        {
          t: '5\u20137',
          h: 'Compassionate boundary',
          d: 'No instant fix; not sole rescuer \u2014 said kindly; avoid splitting; don\u2019t over-promise.'
        },
        {
          t: '7\u20139',
          h: 'Safety plan + right treatment',
          d: 'Coping strategies, crisis line/team, means safety; structured psychological therapy mainstay (CG78: DBT for women prioritising self-harm reduction; meds not first-line for EUPD).'
        },
        {
          t: '9\u201312',
          h: 'Follow-up + safety-net',
          d: 'Crisis-team/CMHT per risk; named contacts; 999/A&E if unsafe; continuity \u2014 not rejecting/rescuing.'
        }
      ],
      wordPics: {
        fail: 'Dismisses ("she always does this") missing real risk, OR is drawn into rescuing/over-promising/reflexive admission; no risk assessment or safety plan.',
        pass: 'Validates and assesses risk, holds compassionate boundaries, and makes a safety plan with the crisis team.',
        exc: 'Holds genuine validation + careful risk assessment together, recognises EUPD without stigma, avoids over- and under-reaction, maintains compassionate consistent boundaries (no instant fix/sole rescuer, avoids splitting), makes a collaborative safety plan, reinforces structured psychological therapy (DBT per CG78), and ensures continuity \u2014 neither rejecting nor rescuing.'
      },
      avoid: [
        {
          dont: '"You always come in like this \u2014 there\u2019s not much I can do."',
          instead: '"I can hear how much pain you\u2019re in and I\u2019m taking it seriously \u2014 let me ask some direct questions to keep you safe."',
          why: 'Dismissal risks missing genuinely elevated risk and is anti-therapeutic.'
        },
        {
          dont: '"Don\u2019t worry, I\u2019ll personally sort all of this out for you, just rely on me."',
          instead: '"I can\u2019t fix everything today or be your only support \u2014 you deserve a proper team; let\u2019s build that together."',
          why: 'Becoming the sole rescuer/over-promising feeds splitting and is unsustainable and harmful.'
        },
        {
          dont: '(No risk assessment) reassuring without asking about suicide.',
          instead: '"Are you having thoughts of ending your life \u2014 any plan or means? What\u2019s kept you safe so far?"',
          why: 'Failing to assess suicide risk in a self-harm crisis is unsafe.'
        }
      ]
    },
    'chronic-plaque-psoriasis': {
      ceg: ['Long-term conditions & cancer', 'Mental health & addiction'],
      stem: {
        name: 'Daniel Okafor',
        age: '38 years \u00b7 male',
        pmh: [
          'Years of well-demarcated silvery-scaled plaques: elbows, knees, scalp \u00b1 nail changes; worsening',
          '\u26a0 Morning joint stiffness/pain (fingers, lower back) \u2014 ?psoriatic arthritis',
          'Significant impact on confidence/mood; covers up'
        ],
        meds: ['Emollient', 'OTC topical steroid (intermittent)'],
        allergy: 'NKDA',
        recent: '"Scaly patches keep coming back, creams barely help, it\u2019s wrecking my confidence \u2014 give me something stronger?"',
        reason: 'Video \u2014 recurrent scaly plaques affecting quality of life.'
      },
      timeMap: [
        {
          t: '0\u20132',
          h: 'Recognise + reframe',
          d: 'Classic plaque psoriasis; more than skin \u2014 look at the whole picture, not just a stronger cream.'
        },
        {
          t: '2\u20135',
          h: 'Optimise the ladder',
          d: 'Emollients + potent steroid + vitamin D once daily each, applied separately, \u22644 weeks (CG153); scalp prep; correct application/review; refer if resistant.'
        },
        {
          t: '5\u20137',
          h: 'Screen psoriatic arthritis',
          d: 'Morning stiffness/joint pain \u2192 PEST + NG65 back criteria + face-to-face joint exam \u2192 rheumatology; early treatment protects joints.'
        },
        {
          t: '7\u20139',
          h: 'Comorbidity + triggers',
          d: 'Cardiovascular/metabolic risk (formal assessment if severe, \u22655-yearly; smoking/weight/alcohol/BP/lipids/glucose); triggers (drugs/stress/infection/trauma).'
        },
        {
          t: '9\u201312',
          h: 'Psychosocial + safety-net',
          d: 'Screen low mood; validate impact; control aids confidence; urgent if erythroderma/generalised pustular.'
        }
      ],
      wordPics: {
        fail: 'Just gives a stronger steroid for the skin; misses the psoriatic-arthritis screen, the cardiovascular comorbidity, and the psychological impact.',
        pass: 'Optimises topical therapy, screens for psoriatic arthritis, and addresses comorbidity and mood.',
        exc: 'Recognises chronic plaque psoriasis and treats it as more than skin \u2014 optimises the topical ladder (correct potency/application/site), screens and refers for psoriatic arthritis, addresses cardiovascular/metabolic comorbidity and triggers, and takes the psychosocial impact seriously with mood screening.'
      },
      avoid: [
        {
          dont: '"Here\u2019s a stronger steroid cream \u2014 that should sort the patches."',
          instead: '"Let\u2019s optimise the right combination and how you use it \u2014 but psoriasis is more than skin, so I also want to check your joints and general health."',
          why: 'Treating only the skin misses psoriatic arthritis, comorbidity and the psychological impact.'
        },
        {
          dont: '(Ignoring joints) not asking about the stiffness.',
          instead: '"Morning stiffness in your fingers and back matters \u2014 psoriasis can come with an arthritis we should screen for and refer early."',
          why: 'Missing psoriatic arthritis risks preventable joint damage.'
        },
        {
          dont: '(Dismissing impact) "It\u2019s just a skin condition."',
          instead: '"It\u2019s wrecking your confidence \u2014 that matters as much as the skin, and low mood is common with psoriasis; let\u2019s support that too."',
          why: 'Treating psoriasis as merely cosmetic ignores its significant psychosocial burden.'
        }
      ]
    }
  });

})();
