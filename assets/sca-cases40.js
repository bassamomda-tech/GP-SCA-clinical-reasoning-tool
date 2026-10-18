/* ============================================================
   Reasoning GP — Case Library batch 40: "Pregnancy & the newborn"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   These fill the four library cards already flagged live:
   obstetric-cholestasis, febrile-young-infant, faltering-growth,
   neonatal-sticky-eye. Two are time-critical (febrile infant; ophthalmia).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases39.js.
   ============================================================ */

(function(){

  /* ============ 153. TELEPHONE — Itching in pregnancy: obstetric cholestasis ============ */
  const c153 = {
    id:'obstetric-cholestasis', title:'"My hands and feet are itching like mad \u2014 it\u2019s just my skin being dry"', type:'telephone', duration:12,
    meta:{ age:31, sex:'F', setting:'Telephone \u2014 itching at 34 weeks pregnant.', system:'Obstetrics / Obstetric cholestasis', checked:'October 2026' },
    brief:'Mrs Priya Anand, 31, 34 weeks pregnant (first ongoing pregnancy). Rings about intense ITCHING, worst on the PALMS and SOLES, worse at NIGHT, for about a week, keeping her awake. No rash to see. She blames "dry skin / pregnancy hormones" and wants moisturiser advice. CRUCIAL: itching without a rash, especially palms/soles and worse at night in the late second/third trimester, suggests OBSTETRIC CHOLESTASIS (intrahepatic cholestasis of pregnancy) \u2014 needs bile acids + LFTs and obstetric referral, as it carries fetal risk (stillbirth at high bile-acid levels).',
    script:{
      "opening": "\"Hi, sorry to bother you. I've got this maddening itch — mostly my hands and feet, and it's worse at night, I'm barely sleeping. There's nothing to see, no rash. I'm sure it's just dry skin, or the pregnancy hormones doing their thing. Could you just recommend a good moisturiser or an antihistamine? I don't want to make a fuss over a bit of itching.\"",
      "facts": [
        {
          "topic": "The itch (if asked)",
          "text": "About a week, palms of your hands and soles of your feet mostly, spreading a bit to your arms. Much worse at night — scratching till the skin is raw. No rash apart from scratch marks."
        },
        {
          "topic": "Pregnancy",
          "text": "34 weeks, first baby to get this far — you had an early miscarriage last year. Antenatal care has been normal so far; last midwife check two weeks ago, blood pressure fine."
        },
        {
          "topic": "Baby's movements (if asked)",
          "text": "\"He's moving as normal — lots of kicks this morning.\""
        },
        {
          "topic": "Other questions (if asked)",
          "text": "No dark urine, no pale stools, no yellow skin or eyes. No tummy pain, no headache, no visual disturbance, no swelling of face or hands, no bleeding, no fluid leaking. Feel a bit tired."
        },
        {
          "topic": "Medical history and medicines",
          "text": "Nothing. Pregnancy vitamins only. No allergies. Your mum had \"really bad itching\" in her pregnancies but nobody said why."
        },
        {
          "topic": "Social",
          "text": "31, pharmacist's assistant. Married to Dev. Non-smoker, no alcohol."
        },
        {
          "topic": "Hidden — hold back",
          "text": "After the miscarriage you have been anxious throughout and you do not want to \"be one of those anxious mums who calls about everything\". Say this only if asked how you are feeling or what worries you."
        },
        {
          "topic": "How to play it",
          "text": "Apologetic, minimising. If the doctor explains that itching without a rash on hands and feet in late pregnancy needs a blood test today and a call to the maternity unit, become worried: \"Is the baby okay?\" Respond well to calm, clear explanation and a practical plan (where to go today, what to watch for)."
        }
      ],
      "ice": {
        "ideas": "\"It's dry skin or pregnancy hormones.\"",
        "concerns": "Not sleeping. Underneath (only if asked): anything happening to this baby after last year.",
        "expectations": "\"A moisturiser or antihistamine.\" You will go to be checked today if the reason is explained."
      },
      "cues": [
        "\"There's nothing to see, no rash.\" — say in the opening.",
        "\"I don't want to make a fuss.\" — say in the opening.",
        "\"Is the baby okay?\" — ask when tests or maternity are mentioned."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises ITCHING WITHOUT A RASH \u2014 characteristically palms/soles, worse at night, in late pregnancy \u2014 as suggestive of OBSTETRIC CHOLESTASIS, and does NOT dismiss it as dry skin/hormones with moisturiser advice' },
      { dom:'cm', text:'Arranges the right INVESTIGATIONS urgently: serum BILE ACIDS and LIVER FUNCTION TESTS, and screens associated features (dark urine, pale stools, jaundice) and excludes a rash' },
      { dom:'cm', text:'Refers to OBSTETRICS/maternity for assessment, increased fetal and maternal MONITORING, and planning \u2014 recognising the condition carries fetal risk (stillbirth at high bile-acid levels, preterm birth) and that timing of birth may be brought forward by bile-acid level' },
      { dom:'cm', text:'Offers symptom RELIEF appropriately (e.g. emollients/menthol-in-aqueous for the itch; ursodeoxycholic acid is a maternity-team decision for itch only, with no proven perinatal benefit per RCOG GTG 43, 2022) while making clear this is symptomatic and the investigation/referral is the priority' },
      { dom:'cm', text:'Knows the safety-net: reduced FETAL MOVEMENTS, worsening symptoms, jaundice, or feeling unwell warrant urgent maternity assessment \u2014 and that this is fundamentally about the baby\u2019s safety, not just comfort' },
      { dom:'ro',   text:'Takes the symptom seriously and gently counters the "just dry skin/don\u2019t want to fuss" minimisation, validating that she was right to ring without alarming her excessively' },
      { dom:'ro',   text:'Explains clearly why itching can matter in pregnancy, linking it to the baby in an honest but calm way so she accepts the tests and referral' },
      { dom:'cm',    text:'Safety-nets and follows up: urgent bile acids/LFTs and obstetric referral, fetal-movement and worsening red flags \u2192 urgent maternity assessment, symptom relief meanwhile, and follow-up of results \u2014 investigating for cholestasis, not treating dry skin' },
    ],
    worked:[
      { lbl:'Take it seriously',    txt:'"I\u2019m really glad you rang \u2014 and this isn\u2019t a fuss at all. There\u2019s a particular kind of itching in pregnancy that I always check properly: itching with NO rash, especially on the palms and soles and worse at night, like yours. That pattern can point to a liver condition of pregnancy rather than dry skin, and it\u2019s important we test for it."' },
      { lbl:'Why it matters',       txt:'"I want to be honest about why, without frightening you: that condition \u2014 obstetric cholestasis \u2014 needs a couple of blood tests because, if it\u2019s present, it can affect the baby, so we keep a closer eye and sometimes plan the birth a little earlier. It\u2019s very manageable once we know, which is exactly why I don\u2019t want to just suggest moisturiser."' },
      { lbl:'The tests',            txt:'"So I\u2019d like to arrange blood tests today \u2014 bile acids and liver function \u2014 and let me ask: any dark urine, pale poos, or yellowing of your eyes/skin? \u2026 And definitely no rash you can see? Good \u2014 that no-rash, palms-and-soles pattern is exactly why I\u2019m testing."' },
      { lbl:'Refer + relief',       txt:'"I\u2019ll also link you in with the maternity team so they can monitor you and the baby, and we\u2019ll get you something for the itch in the meantime so you can sleep. There\u2019s a medicine the maternity team often use too. But the tests and their involvement are the priority."' },
      { lbl:'The crucial safety-net', txt:'"Really important: keep an eye on the baby\u2019s movements \u2014 if they slow down or change at all, ring the maternity unit straightaway, day or night, don\u2019t wait. Same if the itching gets much worse, you feel unwell, or go yellow. That\u2019s the bit that matters most."' },
      { lbl:'Reassure + follow-up', txt:'"You did exactly the right thing ringing about \u2018just an itch\u2019 \u2014 it\u2019s one of those symptoms that\u2019s worth taking seriously in pregnancy. Let\u2019s get the bloods done, get maternity involved, and I\u2019ll follow up your results with you. We\u2019re looking after you and the baby here."' },
    ],
    learning:'Itching WITHOUT a rash \u2014 characteristically on the palms and soles, worse at night, in the late second/third trimester \u2014 is the classic picture of OBSTETRIC CHOLESTASIS (intrahepatic cholestasis of pregnancy), NOT "just dry skin or hormones", and must not be reassured away with moisturiser. It matters because it carries fetal risk \u2014 notably stillbirth at high bile-acid concentrations, plus preterm birth and meconium \u2014 and mandates measuring serum BILE ACIDS and LFTs, obstetric referral, increased fetal/maternal monitoring, and often planned earlier timing of birth by peak bile-acid level (RCOG GTG 43, 2022: 35–36 weeks at 100 µmol/L or more; 38–39 weeks at 40–99 µmol/L). Offer symptom relief (emollients/menthol; ursodeoxycholic acid is a maternity-team decision and RCOG GTG 43 (2022) found no perinatal benefit) but make the investigation and referral the priority. The examinable hidden agenda is minimisation ("just dry skin / don\u2019t want to fuss") masking exhaustion and quiet worry; take it seriously, gently counter the minimisation, link the itch honestly to the baby, and \u2014 crucially \u2014 safety-net reduced fetal movements and worsening to urgent maternity assessment.',
    knowledge:{
      guideline:'RCOG Green-top Guideline No. 43 Intrahepatic cholestasis of pregnancy (2022) · RCOG Green-top Guideline No. 57 Reduced fetal movements (2011) · fetal-movement safety-netting',
      points:[
        { h:'Recognise the pattern', t:'Pruritus WITHOUT a rash, typically affecting the palms and soles, worse at night, in the second half of pregnancy, suggests obstetric cholestasis. Itching may precede biochemical changes. Excoriations may be seen but there is no primary rash.' },
        { h:'Investigate', t:'Measure non-fasting serum BILE ACIDS and LIVER FUNCTION TESTS (raised bile acids ± transaminases support the diagnosis; bilirubin usually normal). RCOG GTG 43 (2022) supports the diagnosis with itch plus a peak random bile acid of 19 µmol/L or more. Exclude other causes of itch/deranged LFTs. A normal initial result does not exclude it if symptoms persist \u2014 repeat as advised.' },
        { h:'Fetal risk drives management', t:'Obstetric cholestasis is associated with increased risk of stillbirth (rising with higher bile-acid levels), preterm birth and meconium-stained liquor. Management (obstetric-led): monitoring, and planned timing of birth informed by the peak bile-acid concentration (RCOG GTG 43, 2022): planned birth at 35–36 weeks if 100 µmol/L or more; by 38–39 weeks if 40–99 µmol/L without other risk factors; and for 19–39 µmol/L without other risk factors (stillbirth risk similar to background) planned birth by 40 weeks or routine antenatal care.' },
        { h:'Symptom relief', t:'Emollients and topical antipruritics (e.g. menthol in aqueous cream) for the itch; ursodeoxycholic acid is sometimes used in maternity care for symptoms, but RCOG GTG 43 (2022) found no reduction in adverse perinatal outcomes and advises against offering it routinely for that purpose — a maternity-team decision, dose per BNF. Vitamin K may be considered with prolonged/abnormal clotting. These are adjuncts \u2014 referral and monitoring are central.' },
        { h:'Refer and monitor', t:'Refer to the obstetric/maternity team for assessment, serial monitoring of bile acids/LFTs and fetal surveillance, and a delivery plan. It typically resolves after birth; recurrence in future pregnancies is common.' },
        { h:'Safety-net fetal movements', t:'Counsel the woman to report REDUCED or changed fetal movements immediately to maternity (day or night; RCOG GTG 57, 2011), plus worsening itch, jaundice or feeling unwell. This is fundamentally about fetal safety, not just comfort.' },
        { h:'Never do', t:'Never dismiss rash-free palmar/plantar night-worse itch in late pregnancy as dry skin/hormones; never just recommend moisturiser/antihistamine without bile acids + LFTs and referral; never omit the fetal-movement safety-net; never under-monitor a confirmed case.' },
        { h:'Safety-net & follow-up', t:'Urgent bile acids + LFTs and obstetric referral; reduced fetal movements/worsening/jaundice \u2192 immediate maternity assessment; symptom relief; follow up results and the delivery plan.' }
      ]
    }
  };

  /* ============ 154. TELEPHONE — Fever in a young infant (<3 months): the can't-miss ============ */
  const c154 = {
    id:'febrile-young-infant', title:'"She\u2019s got a temperature but she\u2019s only 7 weeks \u2014 can I just give Calpol?"', type:'telephone', duration:12,
    meta:{ age:0, sex:'F', setting:'Telephone \u2014 fever in a 7-week-old infant.', system:'Paediatrics / Febrile young infant (sepsis risk)', checked:'October 2026' },
    brief:'Caller: mother of Lily, 7 WEEKS old, with a measured temperature of 38.2\u00b0C, a bit sleepy and feeding less today. First-time mum, worried but hoping to manage at home; she asks whether she can "just give Calpol and keep an eye". CRUCIAL: a fever (\u226538\u00b0C) in an infant UNDER 3 MONTHS is a NICE NG143 RED flag \u2014 it mandates URGENT face-to-face assessment (paediatric/ED), because young infants can have serious bacterial infection/sepsis with few localising signs. Home management with antipyretics is unsafe here.',
    script:{
      "opening": "\"Hi, I'm really sorry to call, I'm probably overreacting — my little girl Lily, she's seven weeks old, she feels hot and I took her temperature and it's 38.2. She's a bit more sleepy than usual and not feeding as well today. Can I just give her some Calpol and keep an eye on her at home? I don't want to drag a newborn to hospital if it's just a cold.\"",
      "facts": [
        {
          "topic": "Temperature (if asked)",
          "text": "Measured with a digital under-arm thermometer 20 minutes ago: 38.2°C. Rechecked: 38.3°C. You have not given any Calpol yet."
        },
        {
          "topic": "Feeding and nappies (if asked)",
          "text": "Breastfed. Normally feeds every 3 hours for 20 minutes; today feeds are short and she falls asleep after five minutes. Two wet nappies since this morning (usually five or six by now)."
        },
        {
          "topic": "How she is (if asked)",
          "text": "Sleepier than usual and harder to rouse for feeds, but she does wake and cries when changed. Cry is normal, not high-pitched. Colour a little pale; hands and feet cool. No blue lips."
        },
        {
          "topic": "Breathing (if asked)",
          "text": "Breathing \"a bit fast\" when you watch her chest; no grunting, no pauses, no sucking in under the ribs that you can see."
        },
        {
          "topic": "Rash and other signs (if asked)",
          "text": "No rash. If asked to check the soft spot: \"It feels normal, not bulging.\" No vomiting, no diarrhoea, no fits, no stiffness or floppiness. Your partner has had a cold this week."
        },
        {
          "topic": "Birth and history",
          "text": "Born at 39 weeks, normal delivery, no problems; went home after a day. Mum did not have a fever in labour as far as you know. No medicines. 8-week vaccines not given yet."
        },
        {
          "topic": "Social",
          "text": "You are Jess, 28; Lily is your first baby. Partner at work; your mum lives 10 minutes away and could drive. Car seat available."
        },
        {
          "topic": "How to play it",
          "text": "Apologetic and hoping for \"Calpol and see\". If the doctor explains that babies under three months with a temperature need to be checked in hospital today, you are frightened: \"Is it something serious?\" If they explain calmly and give clear instructions, agree to go now. Ask: \"Should I give her Calpol first?\""
        }
      ],
      "ice": {
        "ideas": "\"It's probably just the cold her dad's got.\"",
        "concerns": "\"I don't want to be the overreacting mum\" — but you are worried by how sleepy she is.",
        "expectations": "\"Can I just give Calpol and keep an eye?\" You will go straight to hospital if it is explained clearly."
      },
      "cues": [
        "\"I'm probably overreacting.\" — say in the opening.",
        "\"She's more sleepy than usual.\" — say in the opening.",
        "\"Only two wet nappies today.\" — say if asked about nappies."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises that a temperature \u226538\u00b0C in an infant UNDER 3 MONTHS is a NICE NG143 RED flag mandating URGENT face-to-face assessment \u2014 and does NOT advise home management with Calpol "and keep an eye"' },
      { dom:'dg', text:'Weights the additional concerning features (more sleepy, feeding less) and screens/asks about colour, responsiveness, breathing, hydration (wet nappies) and rash \u2014 while recognising the age + fever alone already triggers urgent assessment' },
      { dom:'cm', text:'Arranges URGENT assessment NOW: same-day paediatric/emergency assessment (the infant needs to be SEEN, typically with septic-screen evaluation in secondary care) \u2014 not a routine GP appointment or telephone reassurance' },
      { dom:'ro', text:'Conveys that antipyretics do NOT make a febrile young infant safe and that the age + fever is the trigger regardless of how she looks between feeds \u2014 so this is not deferrable' },
      { dom:'cm', text:'Gives clear, practical instructions to get her seen (where to go / arranging it) and the threshold for 999 (worsening, non-blanching rash, breathing difficulty, unresponsiveness, fits, mottled/pale)' },
      { dom:'ro',   text:'VALIDATES the mother\u2019s instinct and explicitly counters the "overreacting/don\u2019t want to be a nuisance" minimisation \u2014 she did exactly the right thing \u2014 while not inducing paralysing panic' },
      { dom:'ro',   text:'Communicates the urgency calmly and supportively, giving concrete doable actions so she accepts and acts on the need for assessment' },
      { dom:'cm',    text:'Safety-nets unambiguously: urgent assessment today, what to watch en route, 999 criteria (non-blanching rash, breathing trouble, unresponsiveness, mottling/seizure), and ensures she will go \u2014 not Calpol-and-wait for a febrile 7-week-old' },
    ],
    worked:[
      { lbl:'Validate, then be clear', txt:'"First \u2014 you are absolutely NOT overreacting, and you did exactly the right thing ringing. Here\u2019s the important rule: a temperature of 38 or more in a baby under three months old is something we always get seen straightaway, today, in person. Babies this tiny can get unwell quickly and don\u2019t always show it, so we don\u2019t manage a fever at this age at home."' },
      { lbl:'Why not Calpol',       txt:'"I know the instinct is Calpol and watch \u2014 but at seven weeks, a fever isn\u2019t something to treat at home and keep an eye on. The Calpol would just lower the number; it wouldn\u2019t make her safe. The fact that she\u2019s seven weeks AND has a fever is the reason she needs to be looked at properly, whatever she\u2019s like between feeds."' },
      { lbl:'The sleepy/feeding clue', txt:'"And you\u2019ve noticed she\u2019s more sleepy and not feeding as well \u2014 that\u2019s exactly the kind of thing that adds to my wanting her seen quickly. You know her best, and your gut that something\u2019s off is worth trusting."' },
      { lbl:'The plan, now',        txt:'"So this is what I\u2019d like you to do: take her to be assessed now \u2014 I\u2019ll arrange where, the paediatric/children\u2019s assessment, today. They\u2019ll check her over properly and do some tests to be sure there\u2019s no infection brewing. This isn\u2019t me frightening you; it\u2019s just how we look after babies this small with a fever."' },
      { lbl:'999 safety-net',       txt:'"While you\u2019re getting ready or on the way \u2014 if she becomes harder to wake, her breathing looks fast or laboured, she goes pale/mottled or blue, has a fit, or you see any rash that doesn\u2019t fade when you press a glass on it \u2014 call 999 immediately, don\u2019t wait. Is there someone who can go with you?"' },
      { lbl:'Reassure the mum',     txt:'"You haven\u2019t made a fuss \u2014 you\u2019ve done the textbook right thing. Most of the time these little ones are fine, but the only safe way to know with a fever this young is to have her checked. Go now, and they\u2019ll take it from there. You\u2019re a good mum trusting your instincts."' },
    ],
    learning:'A temperature of 38\u00b0C or above in an infant UNDER 3 MONTHS is a NICE NG143 traffic-light RED feature in its own right \u2014 because young infants are at high risk of serious bacterial infection/sepsis and can deteriorate rapidly with few localising signs \u2014 so it mandates URGENT face-to-face assessment (paediatric/emergency) today, NOT home management with antipyretics. Antipyretics treat the number, not the cause, and do not make a febrile young infant safe; the age + fever is the trigger regardless of how the baby looks between feeds, and here the added features (more sleepy, feeding less) heighten concern. The examinable hidden agenda is a first-time mum minimising ("probably overreacting", "don\u2019t want to drag a newborn to hospital") out of not wanting to be a nuisance while quietly terrified \u2014 validate her instinct explicitly (she did exactly the right thing), be unambiguous that this must be seen urgently, convey it calmly without paralysing panic, arrange the assessment now, and safety-net the 999 criteria (non-blanching rash, breathing difficulty, unresponsiveness, mottling, seizure).',
    knowledge:{
      guideline:'NICE NG143 Fever in under 5s: assessment and initial management (2019; traffic light system) · NICE NG254 Suspected sepsis in under 16s (2025) · NICE NG224 Urinary tract infection in under 16s (2022) · local febrile young infant pathway',
      points:[
        { h:'Fever <3 months is a RED flag', t:'NICE NG143: a temperature \u226538\u00b0C in an infant younger than 3 months is a high-risk (RED) feature requiring urgent assessment by a paediatric specialist. (\u226539\u00b0C at 3\u20136 months is amber.) Young infants have immature responses and can have serious infection with minimal signs \u2014 the age + fever alone mandates urgent face-to-face assessment. NICE NG143: after remote assessment, a child with any red feature who is not immediately life-threatening should be assessed face to face within 2 hours; an immediately life-threatening picture needs an emergency ambulance.' },
        { h:'Assess with traffic-light thinking', t:'Beyond the temperature: colour (pale/mottled/blue), activity/responsiveness (rousability, weak/high-pitched/continuous cry), respiratory effort (tachypnoea, grunting, recession), hydration (feeding, wet nappies, skin turgor), and any non-blanching rash. Reduced feeding and increased sleepiness are concerning. The number alone is a poor guide \u2014 but at <3 months it is sufficient to require assessment.' },
        { h:'Don\u2019t manage at home with antipyretics', t:'Paracetamol/ibuprofen treat discomfort, not the cause, and do NOT make a febrile young infant safe. NICE NG143: do not use antipyretics with the sole aim of reducing body temperature, and do not rely on a fall (or no fall) in temperature at 1–2 hours to tell serious from non-serious illness; paracetamol at this age only per BNFC and the assessing clinician. "Give Calpol and keep an eye" is unsafe for a febrile infant <3 months \u2014 they need to be SEEN and usually have a septic screen in secondary care.' },
        { h:'Serious infection risk', t:'Differential includes sepsis, meningitis, UTI, pneumonia. Investigation in secondary care (NICE NG143 for infants under 3 months with fever: observations, FBC, CRP, blood culture and urine testing, with lumbar puncture and parenteral antibiotics depending on age, how unwell the baby looks and the white cell count) is standard for the febrile young infant; NICE NG224 refers infants under 3 months with possible UTI immediately to paediatric care. Primary-care priority: recognise and arrange urgent assessment.' },
        { h:'Validate parental instinct', t:'A parent\u2019s sense that their baby is unwell is an evidence-based warning sign. Counter the "overreacting/don\u2019t want to be a nuisance" minimisation explicitly \u2014 calling was exactly right \u2014 and convey urgency calmly without inducing panic.' },
        { h:'Safety-net to 999', t:'While arranging assessment: 999/emergency if the infant becomes unrousable, has laboured/fast breathing, looks pale/mottled/blue, develops a non-blanching rash, has a seizure, or deteriorates. Ensure transport/someone to accompany.' },
        { h:'Never do', t:'Never advise home Calpol-and-watch for a fever \u226538\u00b0C in an infant <3 months; never be reassured by a baby looking well between feeds at this age; never defer to a routine appointment; never dismiss reduced feeding/sleepiness; never undermine the parent for presenting.' },
        { h:'Safety-net & action', t:'Urgent same-day paediatric/emergency assessment; traffic-light screen; clear 999 criteria; validate the parent; confirm they are going and have transport; document.' }
      ]
    }
  };

  /* ============ 155. VIDEO — Faltering growth in an infant ============ */
  const c155 = {
    id:'faltering-growth', title:'"The health visitor says he\u2019s dropped centiles \u2014 am I starving my baby?"', type:'video', duration:12,
    meta:{ age:0, sex:'M', setting:'Video consultation \u2014 mother of a 5-month-old crossing down centiles.', system:'Paediatrics / Faltering growth', checked:'October 2026' },
    brief:'Mother of Noah, 5 months, whose weight has crossed DOWN two centile spaces; the health visitor flagged it and advised a GP review. He is breastfed, otherwise feeding, with no obvious illness; on history there may be feeding difficulties (frequent small feeds, some posseting), and the mother is exhausted, tearful and feels she is "failing" / "starving him". Faltering growth needs a structured, non-blaming assessment (feeding, history, examination, plotting) \u2014 most is non-organic and feeding-related, but red flags must be excluded, and maternal mental health matters.',
    script:{
      "opening": "(Tearful.) \"The health visitor weighed Noah and said he's dropped down the lines on his chart, and now I'm beside myself. Am I starving my own baby? I'm breastfeeding and I thought it was going okay, but maybe I haven't got enough milk, maybe I'm doing it all wrong. I feel like such a failure. Is something seriously wrong with him? Please just tell me what I'm doing wrong.\"",
      "facts": [
        {
          "topic": "Weights (if asked)",
          "text": "Born at term, 3.4 kg (about the 50th centile). The health visitor said he has dropped from the 50th to just below the 9th centile over the last two months. You can show the red book on camera."
        },
        {
          "topic": "Feeding (if asked)",
          "text": "Breastfed only. Feeds very often — every 1–2 hours, \"little snacky feeds\", often falls asleep on the breast after 5 minutes. Sometimes your nipples hurt with a \"lipstick\" shape after feeds. You have never seen a breastfeeding specialist. No bottles or solids yet."
        },
        {
          "topic": "Sick and stools (if asked)",
          "text": "Brings up a little milk after most feeds, not forceful, never green or bloody. Stools yellow, soft, two or three a day. Five or six wet nappies a day."
        },
        {
          "topic": "Noah otherwise (if asked)",
          "text": "Smiling, cooing, holding his head up, rolling. No coughs or infections, no breathing problems, no sweating with feeds. On video he looks alert and smiley, slim but not unwell."
        },
        {
          "topic": "Pregnancy and birth",
          "text": "Normal pregnancy and birth. Newborn check normal. Immunisations up to date."
        },
        {
          "topic": "You — only if asked how you are",
          "text": "You are 29, first baby. Exhausted, sleeping in 1–2 hour chunks, crying most days, feel \"useless\". Partner works long shifts. You enjoy cuddles with Noah but feel anxious all the time. No thoughts of harming yourself or Noah."
        },
        {
          "topic": "Family (if asked)",
          "text": "You are 5'3\", your partner 5'8\". Both were \"small babies\"."
        },
        {
          "topic": "How to play it",
          "text": "Tearful, expecting to be blamed. If the doctor asks clipped questions without acknowledging your feelings, get more upset: \"So it IS my fault.\" If they reassure you that this is common, not your fault, and that they will work it out with you, calm down. Welcome practical help (feeding specialist, weight checks) and accept support for yourself if offered kindly."
        }
      ],
      "ice": {
        "ideas": "\"I haven't got enough milk — I'm starving him.\"",
        "concerns": "\"Is something seriously wrong with him?\" and that you are failing as a mum.",
        "expectations": "\"Tell me what I'm doing wrong.\" You want a plan and to be told he is going to be okay."
      },
      "cues": [
        "\"I feel like such a failure.\" — say in the opening.",
        "\"He falls asleep on the breast after five minutes.\" — say when describing feeds.",
        "\"I cry most days, to be honest.\" — say if asked how you are coping."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Approaches faltering growth with a STRUCTURED, NON-BLAMING assessment: careful feeding/dietary history, birth/medical/developmental history, examination, and accurate plotting (correct chart, prematurity, mid-parental size, regression to mean, measurement error) \u2014 rather than assuming maternal fault' },
      { dom:'dg', text:'Assesses FEEDING closely (breastfeeding attachment/positioning, frequency/volume, posseting/vomiting, stools, satisfaction) and observes/plans to observe a feed and involve feeding/lactation support' },
      { dom:'dg', text:'EXCLUDES organic red flags: significant/projectile vomiting, diarrhoea/malabsorption, recurrent infections, dysmorphism, developmental concerns, signs of illness \u2014 and considers safeguarding only where genuinely indicated; refers to paediatrics/dietetics if red flags or no improvement' },
      { dom:'dg', text:'Recognises that most faltering growth is NON-ORGANIC/feeding-related and plans practical support and MONITORING (regular weights with the health visitor, feeding plan, top-ups only as guided) rather than alarm or unnecessary investigation' },
      { dom:'dg', text:'Assesses and supports MATERNAL MENTAL HEALTH \u2014 screens for postnatal depression/anxiety, exhaustion and breastfeeding confidence \u2014 recognising this as central to the consultation and the baby\u2019s feeding' },
      { dom:'ro',   text:'RELIEVES THE GUILT explicitly: faltering growth is usually not her fault and she is not "starving" her baby; seeking help is good mothering \u2014 responding to the tears and self-blame first' },
      { dom:'ro',   text:'Works in PARTNERSHIP and validates her efforts and distress, framing the plan as support not judgement, and engaging the health visitor as an ally' },
      { dom:'cm',    text:'Safety-nets and follows up: feeding support and a monitoring plan with the health visitor, what would prompt paediatric/dietetic referral or concern (red flags, no weight improvement), maternal-mental-health support/follow-up, and a review \u2014 partnership and reassurance, not blame' },
    ],
    worked:[
      { lbl:'Relieve the guilt first', txt:'"Stop \u2014 before anything else: you are NOT starving your baby, and you are not failing. Please hear that. Lots of babies cross the lines on the chart, and the great majority is to do with feeding getting established, not a mum doing anything wrong. The fact you\u2019re this worried tells me what a good, attentive mum you are. Let\u2019s work it out together, with no blame at all."' },
      { lbl:'Normalise + structure', txt:'"Charts can be misleading on their own \u2014 babies don\u2019t grow in straight lines, and one reading can wobble. So what I\u2019d like to do is look at the whole picture properly: how feeding’s going, how Noah is in himself, examine him — I can’t do that properly on video, so I’d like to see you both in person at the surgery, ideally with a feed I can watch — and plot his weights carefully over time rather than panic at one drop."' },
      { lbl:'Assess the feeding',    txt:'"Tell me about the breastfeeding \u2014 how often, how long, does he seem satisfied, any sicking up, what are his nappies like? \u2026 It would really help to watch a feed, and I\u2019d love to get you some proper feeding support \u2014 a few small tweaks to attachment can make a big difference, and that\u2019s not a criticism, it\u2019s just help."' },
      { lbl:'Check for red flags',   txt:'"A few things I want to be sure about \u2014 is he vomiting forcefully, lots of diarrhoea, lots of infections, otherwise developing and alert? \u2026 Good. Those would make me look further; without them, this is most likely about supporting the feeding, and we\u2019ll keep a close eye with regular weights."' },
      { lbl:'Look after HER',        txt:'"And can I ask how YOU are? You\u2019re exhausted and in tears, and that matters to me too \u2014 looking after a baby on no sleep while worrying like this is so hard. How\u2019s your mood been? \u2026 You don\u2019t have to carry this alone; if things are low, we can help with that as well."' },
      { lbl:'Plan + follow-up',      txt:'"So: feeding support, regular weight checks with your health visitor, examine Noah in person at the surgery today, and we look after you too. If he were to keep dropping, or any of those warning signs appeared, we\u2019d involve the children\u2019s team \u2014 but I don\u2019t expect that. Come back and see me, and let\u2019s do this as a team. You\u2019re doing a good job."' },
    ],
    learning:'Faltering growth (a sustained fall across centile spaces / slower-than-expected weight gain) needs a STRUCTURED, NON-BLAMING assessment \u2014 careful feeding and medical/developmental history, examination, and accurate plotting (correct chart, prematurity, mid-parental size, regression to the mean, measurement error) \u2014 and most is NON-ORGANIC and feeding-related, not a sign the mother is "starving" her baby. Assess feeding closely (breastfeeding attachment/positioning, frequency, posseting, stools; observe a feed; involve lactation support), EXCLUDE organic red flags (significant vomiting, diarrhoea/malabsorption, recurrent infections, dysmorphism, developmental concerns) and consider safeguarding only where indicated, and manage with practical support and MONITORING (regular weights with the health visitor; paediatric/dietetic referral if red flags or no improvement). The examinable hidden agenda is the MOTHER: exhaustion, guilt, a sense of failing and possible postnatal depression with crumbling breastfeeding confidence \u2014 relieve the blame explicitly (it is usually not her fault; seeking help is good mothering), assess and support her mental health, and frame everything as partnership not judgement.',
    knowledge:{
      guideline:'NICE NG75 Faltering growth: recognition and management of faltering growth in children (2017) · UK-WHO growth charts (RCPCH) · NICE CG192 Antenatal and postnatal mental health (2014, updated 2020) · NICE NG224 (urine testing for UTI) · NICE NG20 (coeliac testing once gluten is in the diet)',
      points:[
        { h:'Define and plot carefully', t:'Faltering growth is a sustained fall across centile spaces (or weight gain slower than expected). NICE NG75 thresholds for concern: a fall across 1 or more weight centile spaces if birthweight was below the 9th centile, 2 or more if between the 9th and 91st centiles, 3 or more if above the 91st centile, or current weight below the 2nd centile whatever the birthweight. Plot on the correct UK-WHO chart, correct for prematurity, consider mid-parental height, regression to the mean and measurement error. Interpret the trend over serial measurements, not a single reading; measure length too, and between 1 and 6 months weigh no more than weekly (NICE NG75).' },
        { h:'Structured, non-blaming assessment', t:'Take a detailed feeding/dietary history, birth/medical/developmental history, social history, and examine the child. Observe a feed where possible. Most faltering growth is non-organic and feeding-related; a calm structured approach (NG75) avoids over-investigation and blame.' },
        { h:'Support feeding', t:'For breastfed infants, assess and support attachment/positioning and feeding frequency, and involve infant-feeding/lactation support; consider strategies to increase intake; use top-ups/formula only as guided. Practical feeding support is often the key intervention.' },
        { h:'Exclude organic red flags', t:'Consider organic causes if red flags: significant/projectile vomiting (reflux, pyloric stenosis), chronic diarrhoea/malabsorption (e.g. coeliac, CMPA), recurrent infections, dysmorphism, developmental delay, or systemic illness. Investigate/refer (paediatrics/dietetics) for red flags or failure to improve (NICE NG75: signs of an underlying disorder, failed primary-care interventions, slow linear growth, rapid weight loss or severe undernutrition, or a safeguarding concern). Routine bloods are not needed if feeding explains the picture; test urine for UTI (NICE NG224) and test for coeliac disease only once gluten is in the diet (NICE NG20). Consider safeguarding only where genuinely indicated.' },
        { h:'Maternal mental health is central', t:'Faltering growth consultations are emotionally loaded; mothers often feel guilt and failure, and may have postnatal depression/anxiety and lost feeding confidence. Screen and support maternal mental health (NICE CG192: Whooley questions and GAD-2) — it is both compassionate and clinically important (it affects feeding and the baby).' },
        { h:'Relieve blame, work in partnership', t:'Reassure that faltering growth is usually not the mother\u2019s fault and that she is not starving her baby; seeking help is good parenting. Frame the plan as support, involve the health visitor as an ally, and monitor with regular weights.' },
        { h:'Never do', t:'Never assume maternal fault or imply she is starving the baby; never panic over a single weight; never skip the feeding assessment and red-flag screen; never over-investigate non-organic faltering growth; never ignore the mother\u2019s guilt and mental health.' },
        { h:'Safety-net & follow-up', t:'Feeding support and regular weight monitoring with the health visitor; paediatric/dietetic referral for red flags or no improvement; maternal-mental-health support and follow-up; review in partnership.' }
      ]
    }
  };

  /* ============ 156. TELEPHONE — Sticky eye in a newborn: usually benign, occasionally ophthalmia ============ */
  const c156 = {
    id:'neonatal-sticky-eye', title:'"My newborn\u2019s eye is gunky \u2014 it\u2019s just a blocked tear duct, isn\u2019t it?"', type:'telephone', duration:12,
    meta:{ age:0, sex:'M', setting:'Telephone \u2014 mother of a newborn with a sticky eye.', system:'Paediatrics / Neonatal conjunctivitis', checked:'October 2026' },
    brief:'Mother of Kai, 12 DAYS old, with a "gunky"/watery eye. Most neonatal sticky eye is a blocked nasolacrimal duct or mild sticky eye (benign, managed with cleaning). BUT the key task is to TRIAGE for OPHTHALMIA NEONATORUM (conjunctivitis in the first ~28 days) \u2014 especially severe/purulent discharge, marked swelling/redness, onset in the first days of life \u2014 which can be gonococcal (hyperacute, sight-threatening, needs same-day) or chlamydial (and signals maternal STI). On history there is COPIOUS PURULENT discharge and lid swelling \u2014 not a simple blocked duct.',
    script:{
      "opening": "\"Hi, my little boy Kai is twelve days old and his eye keeps getting gunky — there's yellowy stuff and it's a bit swollen. My mum says it's just a blocked tear duct and to bathe it with cooled boiled water. I'm sure she's right, she had four of us — but it does seem like a lot of discharge. Should I just keep cleaning it, or is that not enough? I don't want to overreact over a sticky eye.\"",
      "facts": [
        {
          "topic": "The eye (if asked)",
          "text": "Right eye. Started two days ago, worse today. Thick yellow-green pus that comes back within minutes of wiping — \"it's pouring out\". Both eyelids on that side are puffy and red, and the eye is hard to open. The left eye is fine."
        },
        {
          "topic": "Kai otherwise (if asked)",
          "text": "Feeding well (breast), wet nappies normal, no fever (36.9°C), not floppy or sleepy, no rash, no breathing problems."
        },
        {
          "topic": "Birth (if asked)",
          "text": "Born at 39 weeks, normal vaginal delivery, no problems. Newborn check was normal."
        },
        {
          "topic": "Pregnancy and sexual health — only if asked sensitively",
          "text": "You did not have any sexual health tests in pregnancy that you remember. \"I had a bit of discharge near the end but the midwife said it was normal.\" One partner, Kai's dad, together a year."
        },
        {
          "topic": "Medicines",
          "text": "None for Kai. You are on no medicines. No allergies."
        },
        {
          "topic": "Social",
          "text": "22, lives with partner Jay. Your mum is staying to help."
        },
        {
          "topic": "How to play it",
          "text": "Apologetic, deferring to your mum. If the doctor asks good questions, describe the discharge honestly. If they explain this needs to be seen today by the eye or children's team, you are surprised but agree. If an infection passed on at birth is mentioned, become anxious and a little defensive: \"Are you saying I've got something?\" Respond well to calm, non-judgemental explanation and an offer of testing for you and Jay."
        }
      ],
      "ice": {
        "ideas": "\"My mum says it's a blocked tear duct.\"",
        "concerns": "\"It does seem like a lot of gunk.\" Underneath: not wanting to overreact as a new mum.",
        "expectations": "\"Should I just keep cleaning it?\" You will take him to be seen today if the reason is explained."
      },
      "cues": [
        "\"It does seem like a lot of discharge.\" — say in the opening.",
        "\"It comes straight back after I wipe it.\" — say if asked about the discharge.",
        "\"Are you saying I've got something?\" — say if infection from birth is mentioned."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'TRIAGES the sticky eye rather than assuming a blocked duct: recognises that COPIOUS PURULENT discharge with marked LID SWELLING/redness in a neonate is possible OPHTHALMIA NEONATORUM \u2014 not a simple blocked nasolacrimal duct \u2014 and needs urgent assessment, not just cleaning' },
      { dom:'dg', text:'Identifies the EMERGENCY: hyperacute, profuse purulent discharge with marked lid oedema (especially early onset) suggests GONOCOCCAL ophthalmia \u2014 SIGHT-THREATENING \u2014 needing SAME-DAY ophthalmology/paediatric assessment, swabs and systemic treatment' },
      { dom:'cm', text:'Arranges SWABS and treatment per pathway: conjunctival swabs including for GONOCOCCUS and CHLAMYDIA (urgent), and recognises chlamydial conjunctivitis (the commonest cause; onset timing alone does not identify it) needs systemic treatment and signals maternal infection' },
      { dom:'dg', text:'Distinguishes the benign case and manages it correctly when appropriate: simple blocked nasolacrimal duct / mild sticky eye \u2014 cleaning with cooled boiled water and lacrimal-sac massage, reassurance (usually resolves by ~12 months) \u2014 i.e. does not over-treat the benign nor under-treat the red-flag picture' },
      { dom:'cm', text:'Handles the MATERNAL-STI implication sensitively and without blame: chlamydial/gonococcal ophthalmia implies maternal infection requiring maternal/partner sexual-health assessment and treatment \u2014 raised supportively and confidentially' },
      { dom:'ro',   text:'Validates the family wisdom for the common benign case while gently explaining why THIS picture (purulent, swollen) needs urgent checking \u2014 not colluding with "just a blocked duct" when red flags are present' },
      { dom:'ro',   text:'Reassures and supports an anxious new mother (and navigates the family-advice dynamic and any STI sensitivity) so she accepts urgent assessment without shame or panic' },
      { dom:'cm',    text:'Safety-nets and acts: same-day assessment for the purulent/swollen picture (gonococcal = emergency), swabs and treatment, what to watch (worsening swelling, corneal cloudiness, systemic illness \u2192 urgent), maternal sexual-health follow-up if indicated, and follow-up \u2014 triage and treat, not "keep cleaning"' },
    ],
    worked:[
      { lbl:'Validate, then triage', txt:'"Your mum\u2019s right that a LOT of the time a gunky newborn eye is just a blocked tear duct \u2014 so she\u2019s not wrong in general. But what makes me want to check Kai today specifically is the amount of yellow discharge AND the swelling you\u2019re describing. That\u2019s a bit more than a simple blocked duct, and in a baby this young we always take that seriously."' },
      { lbl:'Why urgent',          txt:'"In the first few weeks of life, a really gunky, swollen eye can sometimes be an infection that needs treating properly and quickly \u2014 occasionally a type that, left alone, can affect the eye itself. I\u2019m not saying that\u2019s what this is, but it\u2019s exactly why I don\u2019t want you to just keep bathing it and wait."' },
      { lbl:'The plan today',      txt:'"So I\u2019d like Kai seen today \u2014 they\u2019ll examine the eye, take a little swab to find out exactly what\u2019s causing it, and treat it. If the swelling and discharge are marked, that can be an urgent eye assessment, so let\u2019s get that arranged now rather than later."' },
      { lbl:'The sensitive bit',   txt:'"One thing I\u2019ll mention gently, and it\u2019s nothing to feel bad about: some of these eye infections in newborns come from very common bugs that can be passed on around birth, so depending on the swab, we might suggest a quick check for you too \u2014 routine, confidential, and no blame attached at all. We\u2019ll cross that bridge if we come to it."' },
      { lbl:'If it WERE benign',   txt:'"If it does turn out to be a simple blocked duct \u2014 which is still possible \u2014 then it\u2019s easy: clean it with cooled boiled water, a gentle little massage at the corner of the eye, and it usually sorts itself by around his first birthday. But the swelling and the amount of discharge are why we check first."' },
      { lbl:'Safety-net',          txt:'"Get him seen today. In the meantime, if the swelling gets worse, the eye looks cloudy, or he becomes unwell in himself \u2014 off feeds, floppy, feverish \u2014 that\u2019s more urgent, go straight in or call. You\u2019re not overreacting \u2014 you noticed it was more than usual, and that\u2019s exactly the right instinct."' },
    ],
    learning:'A sticky eye in a newborn is usually a benign blocked nasolacrimal duct / mild sticky eye (managed with cleaning and lacrimal-sac massage, resolving by ~12 months) \u2014 but the key task is to TRIAGE for OPHTHALMIA NEONATORUM (conjunctivitis in the first ~28 days). COPIOUS PURULENT discharge with marked LID SWELLING/redness (as here) is NOT a simple blocked duct and needs urgent assessment, swabs and treatment. GONOCOCCAL ophthalmia (the hyperacute picture; onset timing alone does not identify it) is hyperacute and SIGHT-THREATENING \u2014 a same-day emergency needing ophthalmology/paediatric assessment and systemic treatment; CHLAMYDIAL (now the commonest cause; onset timing alone does not identify it) is usually less acute but needs systemic treatment and signals a maternal STI. Take conjunctival swabs (including gonococcus/chlamydia), and handle the maternal-infection implication sensitively, confidentially and without blame (maternal/partner sexual-health follow-up). The examinable hidden agenda is family-reassurance minimisation ("just a blocked duct, don\u2019t want to overreact") and possible STI-related shame; validate the family wisdom for the common case but act on the red flags here, arrange urgent assessment, and support an anxious new mother without blame or panic.',
    knowledge:{
      guideline:'BASHH gonorrhoea guideline (2025) · BASHH chlamydia guideline (2026) · College of Optometrists Clinical Management Guidelines (ophthalmia neonatorum) · NICE NG143 Fever in under 5s (2019) · NICE NG254 Suspected sepsis in under 16s (2025) · ophthalmia neonatorum (no longer statutorily notifiable in England since April 2010)',
      points:[
        { h:'Triage every neonatal sticky eye', t:'Most are benign (blocked nasolacrimal duct / mild sticky eye: watery \u00b1 mild discharge, eye otherwise white and quiet). But conjunctivitis in the first ~28 days (ophthalmia neonatorum) must be triaged for red flags: COPIOUS PURULENT discharge, marked lid swelling/redness, conjunctival injection, and onset in the first days of life.' },
        { h:'Gonococcal = sight-threatening emergency', t:'Gonococcal ophthalmia (the hyperacute picture; onset timing alone is not a reliable guide) is hyperacute with profuse purulent discharge and marked lid oedema; it can cause corneal ulceration/perforation and blindness. It is a medical emergency \u2014 same-day ophthalmology/paediatric assessment, urgent swabs and systemic antibiotics given by the specialist team, dose per BNFC (BASHH gonorrhoea 2025 advises systemic plus topical treatment for eye infection).' },
        { h:'Chlamydial conjunctivitis', t:'Now the commonest cause of ophthalmia neonatorum (College of Optometrists); onset timing alone is not a reliable guide; usually less acute (watery becoming mucopurulent, lid swelling). Needs systemic treatment (antibiotic chosen by the specialist team, dose per BNFC, per BASHH) — topical alone is insufficient, and the baby can also develop chlamydial pneumonitis — and indicates maternal chlamydial infection, so maternal/partner sexual-health assessment and treatment are required.' },
        { h:'Swab and follow up', t:'Take conjunctival swabs for MC&S and specifically for gonococcus (culture, for sensitivities) and chlamydia (NAAT), ideally before antibiotics, with urgent processing; the receiving team usually takes these. Ophthalmia neonatorum stopped being a statutorily notifiable disease in England in April 2010 (Health Protection (Notification) Regulations 2010), so follow the local pathway rather than notifying. Treat per pathway and arrange follow-up; any baby under 3 months with a temperature of 38°C or more is high risk (NICE NG143), and poor feeding, floppiness or mottling should prompt sepsis assessment (NICE NG254).' },
        { h:'Manage the benign case correctly', t:'Simple blocked nasolacrimal duct: clean with cooled boiled water, gentle lacrimal-sac massage, reassurance; the majority resolve spontaneously by ~12 months. Avoid over-treating the benign \u2014 but only after the red-flag picture has been excluded/triaged.' },
        { h:'Handle the maternal-STI angle sensitively', t:'Raise the maternal sexual-health implication of chlamydial/gonococcal ophthalmia supportively, confidentially and without blame; arrange maternal/partner testing and treatment through sexual health services (BASHH chlamydia 2026 and gonorrhoea 2025 set partner notification); her results are confidential to her. Navigate the family-advice dynamic by validating the common benign case while acting on the red flags.' },
        { h:'Never do', t:'Never assume "just a blocked duct" for a purulent, swollen neonatal eye; never miss gonococcal ophthalmia as a same-day sight-threatening emergency; never treat chlamydial conjunctivitis with topical-only or miss the maternal STI; never omit swabs; never shame the mother over the STI implication.' },
        { h:'Safety-net & action', t:'Same-day assessment for purulent/swollen neonatal eye (gonococcal = emergency); urgent swabs (gonococcus/chlamydia) and treatment; maternal/partner sexual-health follow-up if indicated; watch for worsening swelling/corneal cloudiness/systemic illness \u2192 urgent; follow up results.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c153, c154, c155, c156);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'obstetric-cholestasis': {
      ceg: ['Gender, reproductive & sexual health', 'Urgent & unscheduled care'],
      stem: {
        name: 'Priya Anand', age: '31 years · female',
        pmh: ['34 weeks pregnant (first ongoing pregnancy)', 'Intense itching ~1 week — palms/soles, worse at night, no rash', 'Barely sleeping'],
        meds: ['Pregnancy multivitamin'],
        allergy: 'NKDA',
        recent: 'Blames "dry skin / hormones"; wants moisturiser; "don\u2019t want to fuss".',
        reason: 'Telephone — itching at 34 weeks pregnant.'
      },
      timeMap: [
        { t:'0–2',  h:'Take it seriously',   d:'Rash-free itch on palms/soles, worse at night, late pregnancy = check for obstetric cholestasis, not dry skin.' },
        { t:'2–4',  h:'Why it matters',      d:'It can affect the baby (stillbirth risk at high bile acids) — needs bloods + maternity, sometimes earlier birth. Honest, not alarming.' },
        { t:'4–6',  h:'The tests',           d:'Bile acids + LFTs today; ask dark urine/pale stools/jaundice; confirm no rash.' },
        { t:'6–9',  h:'Refer + relief',      d:'Maternity referral + monitoring; emollient/menthol for the itch; ursodeoxycholic acid only if the maternity team choose it (no proven benefit for the baby).' },
        { t:'9–12', h:'Fetal-movement net',  d:'Reduced/changed movements → ring maternity immediately, day or night. Worsening/jaundice too. Follow up results.' }
      ],
      wordPics: {
        fail: 'Reassures it as dry skin/hormones and recommends moisturiser/antihistamine; never checks bile acids/LFTs or refers; omits the fetal-movement safety-net — a fetal-risk condition missed.',
        pass: 'Recognises possible obstetric cholestasis, arranges bile acids + LFTs and maternity referral, offers relief, and safety-nets fetal movements.',
        exc:  'Takes the rash-free palmar/plantar night-worse itch seriously and gently counters the minimisation; explains the fetal-risk honestly without alarm; arranges urgent bile acids/LFTs and maternity referral/monitoring; offers symptom relief; and safety-nets reduced fetal movements to immediate maternity assessment.'
      },
      avoid: [
        { dont:'"It\u2019s just dry skin from the pregnancy — try a good moisturiser and an antihistamine."', instead:'"Itching with no rash, on the palms and soles and worse at night, can be a liver condition of pregnancy that affects the baby — let\u2019s do bile-acid and liver blood tests today and get maternity involved."', why:'Reassuring rash-free late-pregnancy palmar/plantar itch as dry skin misses obstetric cholestasis and its stillbirth risk.' },
        { dont:'"As long as the baby\u2019s moving, the itching itself isn\u2019t a worry."', instead:'"The itching IS worth checking — and please report any reduced or changed movements immediately; both matter."', why:'Downplaying the itch misses the diagnosis; the fetal-movement net is essential but not a substitute for investigation.' },
        { dont:'"Let\u2019s see if it settles over the next week or two."', instead:'"We don\u2019t wait on this — bile acids and LFTs today and maternity referral, because timing of birth can depend on it."', why:'Watchful waiting delays a diagnosis that may change the timing of delivery.' }
      ]
    },

    'febrile-young-infant': {
      ceg: ['Urgent & unscheduled care', 'Children & young people'],
      stem: {
        name: 'Lily (mother calling)', age: '7 weeks · female',
        pmh: ['Temperature 38.2°C', 'More sleepy than usual; feeding less today', 'Previously well'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ First-time mum: "probably overreacting", wants to give Calpol and watch at home.',
        reason: 'Telephone — fever in a 7-week-old.'
      },
      timeMap: [
        { t:'0–2',  h:'Validate + be clear', d:'Not overreacting — right to ring. Fever ≥38 under 3 months is always seen urgently, in person, today.' },
        { t:'2–4',  h:'Why not Calpol',      d:'Calpol lowers the number, not the risk. Age + fever is the trigger, whatever she\u2019s like between feeds.' },
        { t:'4–6',  h:'The sleepy/feeding clue', d:'More sleepy + feeding less adds concern; young infants deteriorate fast with few signs. Trust the instinct.' },
        { t:'6–9',  h:'Arrange urgent assessment', d:'Same-day paediatric/ED assessment now (likely septic screen). Not a routine appointment.' },
        { t:'9–12', h:'999 safety-net',       d:'Harder to wake / fast or laboured breathing / pale-mottled-blue / non-blanching rash / fit → 999. Confirm transport.' }
      ],
      wordPics: {
        fail: 'Agrees to "Calpol and keep an eye" at home for a febrile 7-week-old; reassured by her looking okay between feeds; defers to a routine appointment — a NICE NG143 red feature and possible sepsis missed.',
        pass: 'Recognises fever <3 months as a red flag, arranges urgent face-to-face assessment, validates the mum, and gives 999 criteria.',
        exc:  'Validates the mother\u2019s instinct and counters the "overreacting" minimisation; is unambiguous that fever ≥38 under 3 months needs urgent in-person assessment today (not Calpol-and-wait); weights the sleepy/feeding features; arranges same-day paediatric/ED assessment calmly; and safety-nets the 999 criteria with transport confirmed.'
      },
      avoid: [
        { dont:'"At this age a bit of fever is usually a cold — give Calpol and keep an eye on her."', instead:'"A fever of 38 or more in a baby under three months always needs seeing in person today — Calpol would just lower the number, not make her safe. Let\u2019s get her assessed now."', why:'Home Calpol-and-watch for a febrile infant <3 months risks missing rapidly-progressive serious infection.' },
        { dont:'"If she perks up after the Calpol, you probably don\u2019t need to bring her in."', instead:'"Whether she looks better between feeds or after Calpol doesn\u2019t change it — the age plus the fever is the reason she must be seen today."', why:'Response to antipyretics and looking well between feeds do not exclude serious illness in a young infant.' },
        { dont:'"You\u2019re probably overreacting, but book an appointment if you\u2019re worried."', instead:'"You are not overreacting — you did exactly the right thing. This needs urgent, same-day assessment, and I\u2019ll help arrange it now."', why:'Reinforcing the "overreacting" framing and offering a routine appointment dangerously underplays a red-flag presentation.' }
      ]
    },

    'faltering-growth': {
      ceg: ['Children & young people', 'Mental health & addiction'],
      stem: {
        name: 'Noah (mother present)', age: '5 months · male',
        pmh: ['Weight crossed DOWN two centile spaces (HV-flagged)', 'Breastfed; some posseting; otherwise feeding, no obvious illness', 'No vomiting/diarrhoea/recurrent infections volunteered'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Mother tearful, exhausted, feels she is "starving him" / failing.',
        reason: 'Video consultation — infant crossing down centiles.'
      },
      timeMap: [
        { t:'0–2',  h:'Relieve the guilt',   d:'You are NOT starving him or failing — most centile drops are about feeding getting established, not a mum doing wrong. No blame.' },
        { t:'2–4',  h:'Normalise + structure', d:'Charts wobble; babies don\u2019t grow in straight lines. Look at the whole picture and plot over time, not panic at one drop.' },
        { t:'4–6',  h:'Assess feeding',       d:'Breastfeeding frequency/latch/satisfaction, posseting, nappies; observe a feed; get feeding support (help, not criticism).' },
        { t:'6–8',  h:'Exclude red flags',    d:'Forceful vomiting, diarrhoea/malabsorption, recurrent infections, development? Absent → likely feeding-related; monitor.' },
        { t:'8–12', h:'Look after HER + plan', d:'Screen/support her mood and exhaustion; HV weight monitoring; paeds/dietetics if red flags/no improvement. Partnership.' }
      ],
      wordPics: {
        fail: 'Implies maternal fault / "you need to feed him more" or panics over one weight; skips the feeding assessment and red-flag screen; ignores the mother\u2019s guilt and possible postnatal depression — leaving her more ashamed.',
        pass: 'Assesses feeding and red flags, plots over time, arranges feeding support and HV monitoring, and acknowledges the mother\u2019s distress.',
        exc:  'Relieves the guilt explicitly and works in non-blaming partnership; takes a structured feeding/history/exam/plotting approach and excludes organic red flags; arranges practical feeding support and HV monitoring (paeds/dietetics if needed); and screens and supports the mother\u2019s mental health as central to the consultation.'
      },
      avoid: [
        { dont:'"He\u2019s not gaining enough — you\u2019ll need to feed him more / top him up."', instead:'"This is almost certainly not you failing — let\u2019s look at feeding together and get you support; a few tweaks often help, and we\u2019ll monitor his weight over time."', why:'A blaming "feed him more" deepens guilt and undermines feeding without the structured assessment NG75 requires.' },
        { dont:'"One drop on the chart means something\u2019s wrong — we should run lots of tests."', instead:'"Babies don\u2019t grow in straight lines and charts wobble — most of this is feeding-related, so we assess properly and monitor rather than rush to investigations."', why:'Over-investigating non-organic faltering growth alarms the mother and is not evidence-based.' },
        { dont:'"Let\u2019s focus on the baby\u2019s weight and not get distracted by how you\u2019re feeling."', instead:'"How YOU are matters too — you\u2019re exhausted and in tears, and that\u2019s part of this. If your mood\u2019s low, we\u2019ll help with that as well."', why:'Ignoring maternal guilt and possible postnatal depression misses a central part of the consultation and harms feeding.' }
      ]
    },

    'neonatal-sticky-eye': {
      ceg: ['Children & young people', 'Urgent & unscheduled care'],
      stem: {
        name: 'Kai (mother calling)', age: '12 days · male',
        pmh: ['Sticky/"gunky" eye', '⚠ Copious yellow purulent discharge + lid swelling', 'Otherwise feeding'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Grandmother says "just a blocked tear duct, bathe it"; mum minimises but worried at the amount of discharge.',
        reason: 'Telephone — newborn with a sticky eye.'
      },
      timeMap: [
        { t:'0–2',  h:'Validate, then triage', d:'Often it IS a blocked duct — but copious purulent discharge + swelling is more than that; check today.' },
        { t:'2–4',  h:'Why urgent',          d:'In the first weeks, a gunky swollen eye can be an infection that, untreated, can harm the eye (gonococcal = sight-threatening).' },
        { t:'4–6',  h:'Plan today',          d:'Same-day assessment + swabs (gonococcus/chlamydia) + treatment; marked swelling/discharge = urgent eye assessment.' },
        { t:'6–8',  h:'The sensitive bit',   d:'Some are passed on around birth — depending on swabs, a confidential check for mum too. No blame.' },
        { t:'8–10', h:'If benign',           d:'Simple blocked duct: cooled boiled water, gentle lacrimal massage, usually resolves by ~12 months.' },
        { t:'10–12',h:'Safety-net',          d:'Worsening swelling / cloudy eye / unwell baby → urgent. Validate her instinct; follow up swabs.' }
      ],
      wordPics: {
        fail: 'Accepts "just a blocked duct, keep bathing it" for a copiously purulent, swollen neonatal eye; misses ophthalmia neonatorum (gonococcal sight-threatening emergency); no swabs; misses the maternal-STI implication.',
        pass: 'Triages the purulent/swollen picture as possible ophthalmia neonatorum, arranges same-day assessment + swabs + treatment, and handles the maternal angle.',
        exc:  'Validates the family blocked-duct wisdom for the common case but recognises the copious purulent discharge + lid swelling as possible ophthalmia neonatorum (gonococcal = same-day sight-threatening emergency); arranges urgent assessment, swabs (gonococcus/chlamydia) and treatment; handles the maternal-STI implication sensitively and without blame; and gives correct benign-case advice plus a clear safety-net.'
      },
      avoid: [
        { dont:'"It\u2019s just a blocked tear duct — keep bathing it with cooled boiled water."', instead:'"A lot of discharge with swelling in a newborn is more than a blocked duct — that needs checking today in case it\u2019s an infection of the eye."', why:'Treating a copiously purulent, swollen neonatal eye as a blocked duct can miss sight-threatening gonococcal ophthalmia.' },
        { dont:'"Some antibiotic drops will sort it out."', instead:'"We need a swab to find the cause first — some of these need treatment by mouth and an urgent eye check, not just drops."', why:'Topical-only treatment is insufficient for chlamydial/gonococcal ophthalmia and delays the swab-guided correct treatment.' },
        { dont:'"There\u2019s no need to involve you — it\u2019s just the baby\u2019s eye."', instead:'"Depending on the swab, we might suggest a quick, confidential check for you too — these bugs are common and there\u2019s no blame; it just helps us treat everyone properly."', why:'Ignoring the maternal-STI implication of chlamydial/gonococcal ophthalmia misses necessary maternal/partner treatment.' }
      ]
    }
  });

})();
