/* ============================================================
   Reasoning GP — Case Library batch 62:
   "Renal, urology & endocrine in pregnancy" (NEW themes)
   Acute kidney injury (the dehydrated patient on an ACEi/NSAID +
   sick-day rules); prostatitis (the unwell man with perineal pain
   & LUTS); overactive bladder (urgency/frequency \u2014 bladder training
   before pills); and gestational diabetes (an OGTT-positive
   pregnancy \u2014 risks, glucose control, delivery & postnatal). No
   NG12 cancer pathway genuinely applies; none invented (haematuria
   safety-net noted where relevant).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases61.js.
   ============================================================ */

(function(){

  /* ============ 220. F2F — Acute kidney injury: the dehydrated patient on an ACEi/NSAID & sick-day rules ============ */
  const c220 = {
    id:'aki-sick-day', title:'"I\u2019ve had a sickness bug and barely kept fluids down \u2014 a blood test says my kidneys are off"', type:'video', duration:12,
    meta:{ age:72, sex:'F', setting:'Video consultation \u2014 abnormal renal function after a diarrhoea/vomiting illness.', system:'Renal \u2014 acute kidney injury: the dehydration/drug triad & sick-day rules' },
    brief:'Mrs Pauline Drake, 72 (hypertension, type 2 diabetes), has had 4 days of DIARRHOEA and VOMITING, has barely kept fluids down, feels weak/dizzy, and a check blood test shows a RISE in creatinine (ACUTE KIDNEY INJURY). She takes RAMIPRIL, an SGLT2 inhibitor and METFORMIN, and has been taking IBUPROFEN for aches. The examinable task is to recognise pre-renal ACUTE KIDNEY INJURY precipitated by DEHYDRATION plus NEPHROTOXIC/risk drugs (the classic "triad": ACE inhibitor/ARB + NSAID + intercurrent illness/dehydration), to assess SEVERITY and hydration/red flags (postural drop, reduced urine output, confusion, very high potassium risk, sepsis), to institute SICK-DAY RULES \u2014 temporarily HOLD the drugs that worsen AKI or accumulate in illness (ACEi/ARB, NSAID, SGLT2 inhibitor [also DKA risk], metformin [lactic acidosis/accumulation], diuretics) \u2014 to manage hydration (oral rehydration vs admit if unable/severe), to RECHECK renal function and arrange follow-up, and to give clear SICK-DAY guidance for the future. Recognise when ADMISSION is needed (severe AKI, hyperkalaemia, anuria, can\u2019t maintain fluids, very unwell). The skill is the drug-illness-dehydration recognition, the sick-day medication holds, and safe disposition. No NG12 cancer link (visible haematuria/persisting abnormality would prompt urology thought).',
    script:{
      opening:'"I\u2019ve had this awful tummy bug for a few days \u2014 diarrhoea and being sick \u2014 and I can hardly keep anything down. I feel weak and a bit dizzy when I stand. The nurse did a blood test and said my kidneys aren\u2019t happy. I\u2019ve been taking ibuprofen for the aches. Should I be worried?"',
      facts:[
        { topic:'Recognise the AKI triad', text:'CORE \u2014 a rise in creatinine after a DEHYDRATING illness (D&V, poor intake) in a patient on an ACE INHIBITOR/ARB and an NSAID is the classic recipe for pre-renal ACUTE KIDNEY INJURY \u2014 the "triad" of ACEi/ARB + NSAID + intercurrent illness/dehydration. Recognise that her tummy bug + ramipril + ibuprofen have combined to injure the kidneys. AKI is common, often reversible, and dangerous if missed.' },
        { topic:'Assess severity, hydration & red flags', text:'Assess: degree of creatinine rise/eGFR drop, hydration (postural BP/dizziness, dry mucous membranes, reduced URINE OUTPUT/anuria), and red flags \u2014 confusion/drowsiness, breathlessness/fluid overload, features of HYPERKALAEMIA (the dangerous electrolyte \u2014 palpitations, weakness; needs urgent K+/ECG), sepsis, and inability to keep fluids down. These determine home vs admit.' },
        { topic:'Sick-day rules \u2014 hold the risk drugs', text:'CRITICAL \u2014 institute SICK-DAY RULES: temporarily STOP medications that worsen AKI or accumulate during acute illness/dehydration \u2014 ACE INHIBITOR/ARB (ramipril), NSAID (ibuprofen \u2014 stop and avoid), SGLT2 INHIBITOR (hold \u2014 also euglycaemic DKA risk when unwell/dehydrated), METFORMIN (hold \u2014 accumulation/lactic acidosis risk in AKI), and DIURETICS. Explain to resume once eating/drinking normally and renal function recovers (often after ~24\u201348h well), and recheck. This is a key, examinable medication-safety action.' },
        { topic:'Manage hydration & disposition', text:'Manage hydration: encourage ORAL rehydration if tolerating; if she CANNOT keep fluids down, is significantly dehydrated, has severe AKI, hyperkalaemia, anuria, confusion or sepsis \u2192 ADMIT for IV fluids and monitoring. Otherwise, home management with the drug holds, oral fluids, and a clear plan to RECHECK renal function and electrolytes within a short interval.' },
        { topic:'Recheck, follow-up & future sick-day advice', text:'Arrange to RECHECK U&E/renal function (and review medications to restart) within a few days, and give clear FUTURE SICK-DAY guidance: during any illness with D&V/dehydration, temporarily stop the listed drugs and seek advice/recheck \u2014 ideally documented on a sick-day card. Avoid routine NSAIDs in at-risk patients. Address modifiable risks.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 she asks "should I be worried?" and may not connect her tablets/ibuprofen to the kidney result. The skill is to explain the link clearly (the bug + the tablets together), institute the sick-day holds, decide safely on home vs admit, recheck, and equip her with future sick-day rules \u2014 not to ignore the AKI or leave her on the offending drugs.' },
      ],
      ice:{
        ideas:'It\u2019s just a tummy bug; unsure why her kidney blood test is "off" or whether it\u2019s serious.',
        concerns:'Feeling weak/dizzy; worry about her kidneys; not connecting her medications to the result.',
        expectations:'Reassurance / something for the bug. What she needs: recognition of AKI from dehydration + drugs, sick-day medication holds, hydration management, a recheck, safe disposition, and future sick-day rules.'
      },
      cues:['Creatinine rise after D&V/poor intake on ramipril + ibuprofen \u2014 pre-renal AKI: the ACEi/ARB + NSAID + dehydration triad.','Sick-day rules: HOLD ramipril, ibuprofen, SGLT2 inhibitor, metformin, diuretics during the illness; recheck and restart on recovery.','Assess hydration/red flags (postural drop, reduced urine, hyperkalaemia, confusion, sepsis) \u2192 admit if can\u2019t keep fluids/severe.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises pre-renal ACUTE KIDNEY INJURY from a dehydrating illness on an ACE inhibitor/ARB + NSAID \u2014 the classic ACEi/ARB + NSAID + intercurrent-illness/dehydration triad' },
      { dom:'tasks', text:'Assesses severity, hydration and RED FLAGS \u2014 creatinine rise, postural BP/dizziness, reduced urine output/anuria, confusion, fluid overload, hyperkalaemia risk, sepsis, inability to keep fluids down' },
      { dom:'tasks', text:'Institutes SICK-DAY RULES \u2014 temporarily holds ACEi/ARB (ramipril), NSAID (ibuprofen), SGLT2 inhibitor (also DKA risk), metformin (accumulation/lactic acidosis), and diuretics \u2014 explaining when to restart' },
      { dom:'tasks', text:'Manages hydration (oral rehydration if tolerating) and decides DISPOSITION \u2014 admitting for IV fluids/monitoring if unable to maintain fluids, severe AKI, hyperkalaemia, anuria, confusion or sepsis' },
      { dom:'tasks', text:'Arranges to RECHECK U&E/renal function within a few days (and review restarting medications), and gives clear FUTURE SICK-DAY guidance (and avoiding routine NSAIDs in at-risk patients)' },
      { dom:'rto',   text:'Explains the link between the illness, the tablets/ibuprofen and the kidney result in accessible terms, addressing "should I be worried?" proportionately' },
      { dom:'rto',   text:'Checks understanding of the medication holds and the recheck plan, and supports the patient through the illness' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags warranting urgent review/admission (can\u2019t keep fluids, reduced urine, drowsiness/confusion, palpitations), the recheck and medication-restart plan, and future sick-day rules \u2014 active AKI management, not leaving her on the offending drugs' },
    ],
    worked:[
      { lbl:'Explain the link', txt:'"Yes, but it\u2019s manageable \u2014 let me explain what\u2019s happened. The tummy bug has dried you out, and two of your tablets \u2014 the ramipril for blood pressure and the ibuprofen \u2014 strain the kidneys when you\u2019re dehydrated. Together they\u2019ve given you a kidney \u2018wobble\u2019 we call acute kidney injury. It usually recovers."' },
      { lbl:'Assess red flags', txt:'"A few checks: are you passing much less urine? Any dizziness on standing, palpitations, drowsiness or confusion? Can you keep any fluids down at all? \u2026 Those tell me whether we can sort this at home or you need a drip in hospital."' },
      { lbl:'Sick-day medication holds', txt:'"The key step now: STOP the ibuprofen completely, and pause the ramipril, your metformin and the SGLT2 diabetes tablet while you\u2019re unwell and not eating/drinking properly \u2014 they can build up or strain the kidneys when you\u2019re dry. We restart them once you\u2019re eating, drinking and recovered."' },
      { lbl:'Hydration + disposition', txt:'"Sip fluids little and often \u2014 rehydration sachets are ideal. If you genuinely can\u2019t keep anything down, are passing very little urine, or feel really unwell, you\u2019ll need hospital for a drip. (If borderline:) Given you\u2019re managing small sips, we\u2019ll try at home with a close recheck."' },
      { lbl:'Recheck + future rules', txt:'"I\u2019ll arrange a repeat kidney blood test in a few days to be sure it\u2019s recovering and to restart your tablets safely. And for the future: any time you get a bad D&V bug, pause those same tablets and let us know \u2014 I\u2019ll give you a sick-day list."' },
      { lbl:'Safety-net', txt:'"Come back urgently \u2014 or call 999 \u2014 if you stop passing urine, become drowsy or confused, get palpitations or chest symptoms, or can\u2019t keep fluids down. Otherwise, fluids, hold those tablets, and we\u2019ll recheck."' },
    ],
    learning:'A rise in creatinine after a DEHYDRATING illness (diarrhoea/vomiting, poor intake) in a patient on an ACE INHIBITOR/ARB and an NSAID is the classic recipe for pre-renal ACUTE KIDNEY INJURY \u2014 the "triad" of ACEi/ARB + NSAID + intercurrent illness/dehydration \u2014 a common, often reversible, but dangerous problem. Assess severity (creatinine rise/eGFR drop), hydration (postural BP/dizziness, dry mucosa, reduced URINE output/anuria) and RED FLAGS (confusion/drowsiness, fluid overload, features/risk of HYPERKALAEMIA \u2014 the dangerous electrolyte needing urgent K+/ECG \u2014 sepsis, and inability to keep fluids down), which determine home versus admission. The key examinable action is SICK-DAY RULES: temporarily STOP the medications that worsen AKI or accumulate during acute illness \u2014 ACEi/ARB, NSAID (stop and avoid), SGLT2 inhibitor (also euglycaemic DKA risk when unwell), metformin (accumulation/lactic acidosis risk in AKI) and diuretics \u2014 explaining to resume once eating/drinking normally and renal function recovers. Manage hydration with oral rehydration if tolerated, but ADMIT for IV fluids/monitoring if the patient cannot keep fluids down or has severe AKI, hyperkalaemia, anuria, confusion or sepsis. Arrange to RECHECK U&E within a few days (and review restarting medications), and give clear FUTURE SICK-DAY guidance \u2014 pausing the listed drugs and seeking advice during any dehydrating illness, ideally on a sick-day card \u2014 while avoiding routine NSAIDs in at-risk patients. The hidden agenda is the patient not connecting her tablets/ibuprofen to the result; explain the link, institute the holds, decide disposition safely, recheck, and equip her for the future \u2014 not ignore the AKI or leave her on the offending drugs. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG148 acute kidney injury \u00b7 sick-day rules / medication holds \u00b7 hyperkalaemia awareness \u00b7 nephrotoxic drug triad',
      points:[
        { h:'Recognise the AKI triad', t:'Creatinine rise after a dehydrating illness on an ACEi/ARB + NSAID = pre-renal AKI (ACEi/ARB + NSAID + intercurrent illness/dehydration). Common, often reversible, dangerous if missed.' },
        { h:'Assess severity/red flags', t:'Creatinine/eGFR, hydration (postural BP, dry mucosa, reduced urine/anuria), confusion, fluid overload, hyperkalaemia risk (urgent K+/ECG), sepsis, inability to keep fluids down.' },
        { h:'Sick-day rules', t:'Temporarily hold ACEi/ARB, NSAID, SGLT2 inhibitor (DKA risk), metformin (accumulation/lactic acidosis), diuretics during acute illness/dehydration; restart when eating/drinking and recovered.' },
        { h:'Hydration & disposition', t:'Oral rehydration if tolerating; admit for IV fluids/monitoring if can\u2019t keep fluids down, severe AKI, hyperkalaemia, anuria, confusion or sepsis.' },
        { h:'Recheck & future advice', t:'Recheck U&E within days; review restarting medications; give future sick-day guidance (pause listed drugs during D&V, seek advice); avoid routine NSAIDs in at-risk patients.' },
        { h:'Explain the link', t:'Connect the illness + tablets/ibuprofen to the kidney result for the patient; address "should I be worried?" proportionately.' },
        { h:'Never do', t:'Never ignore an AKI result; never continue the NSAID/ACEi/SGLT2/metformin through the dehydrating illness; never miss hyperkalaemia or the can\u2019t-keep-fluids admission trigger.' },
        { h:'Safety-net & follow-up', t:'Urgent review/admission for anuria, drowsiness/confusion, palpitations, can\u2019t keep fluids; recheck U&E + restart plan; sick-day card for the future.' }
      ]
    }
  };

  /* ============ 221. F2F — Prostatitis: the unwell man with perineal pain and LUTS ============ */
  const c221 = {
    id:'prostatitis', title:'"I\u2019ve got pain down below, burning when I wee and I feel feverish \u2014 is it just a water infection?"', type:'video', duration:12,
    meta:{ age:44, sex:'M', setting:'Video consultation \u2014 perineal/pelvic pain with urinary symptoms and fever.', system:'Urology \u2014 prostatitis: recognition, treatment & the acute red flags' },
    brief:'Mr Owen Beckett, 44, has several days of PERINEAL/lower pelvic pain, DYSURIA and urinary frequency/urgency, with FEVER, malaise and some pain on ejaculation; he wonders if it is "just a water infection". The examinable task is to recognise ACUTE PROSTATITIS \u2014 a bacterial infection of the prostate causing perineal/pelvic/back pain, LUTS (dysuria, frequency, urgency, hesitancy), painful ejaculation, fever/systemic illness, and an exquisitely TENDER prostate on (gentle) DRE \u2014 distinct from a simple lower UTI (uncommon and significant in men), to assess SEVERITY/sepsis and the key red flag of ACUTE URINARY RETENTION (which with prostatitis may need urology/suprapubic catheter, not just a routine catheter), to treat with an APPROPRIATE prolonged antibiotic course (a fluoroquinolone such as ciprofloxacin, or per local guidance, typically 2\u20134 weeks given prostatic penetration), send urine culture (\u00b1 STI screen if relevant), and safety-net. Distinguish acute from CHRONIC prostatitis/chronic pelvic pain syndrome (persistent pelvic pain >3 months, often non-bacterial \u2014 different, multimodal management). Recognise that any unwell/septic or retention features warrant urgent/same-day assessment or admission. Note: a UTI in a man warrants thought about the urinary tract; PSA is not done in acute infection (falsely raised). No NG12 cancer link in the acute setting.',
    script:{
      opening:'"For the last few days I\u2019ve had this ache low down \u2014 sort of between my legs and in my back \u2014 it burns when I wee, I\u2019m going all the time, and it even hurts when I ejaculate. I feel feverish and rough too. Is it just a water infection? Can I get some antibiotics?"',
      facts:[
        { topic:'Recognise acute prostatitis', text:'CORE \u2014 PERINEAL/pelvic/low back pain + LUTS (dysuria, frequency, urgency, hesitancy) + PAINFUL EJACULATION + FEVER/systemic illness in a man is ACUTE PROSTATITIS (bacterial infection of the prostate), not "just a water infection". On gentle DRE the prostate is typically exquisitely TENDER/boggy (avoid vigorous massage). Recognise it as a significant infection requiring proper treatment.' },
        { topic:'A UTI in a man is significant', text:'A urinary infection in a man is uncommon and significant \u2014 don\u2019t treat it as a trivial "water infection". Acute prostatitis is a common cause of febrile UTI in men. Send a URINE culture (mid-stream) and, if sexual-history relevant (younger men, risk factors), consider an STI screen (chlamydia/gonorrhoea can cause prostatitis). Assess the wider urinary tract context.' },
        { topic:'Assess sepsis & the retention red flag', text:'CRITICAL \u2014 assess for SEPSIS (high fever, rigors, tachycardia, hypotension, marked illness \u2014 may need admission/IV antibiotics) and the key red flag of ACUTE URINARY RETENTION (unable to pass urine, painful distended bladder). In prostatitis, urethral catheterisation can be difficult/contraindicated and may need urology/suprapubic catheter \u2014 so retention warrants urgent urology assessment, not a routine attempt.' },
        { topic:'Treat with an appropriate, prolonged course', text:'Treat acute bacterial prostatitis with an antibiotic that PENETRATES the prostate \u2014 a FLUOROQUINOLONE (e.g. ciprofloxacin/ofloxacin) first-line, or trimethoprim/alternative per local guidance/culture \u2014 for a PROLONGED course (typically ~2\u20134 weeks) to prevent chronic prostatitis/abscess. Add analgesia and advice. (Note fluoroquinolone cautions \u2014 tendon/aortic/neuro/QT \u2014 and counsel accordingly.) Adjust per culture. Severe/septic \u2192 admit for IV.' },
        { topic:'Distinguish chronic prostatitis/CPPS', text:'Distinguish ACUTE prostatitis from CHRONIC prostatitis/CHRONIC PELVIC PAIN SYNDROME \u2014 persistent pelvic/perineal pain and LUTS for >3 months, often non-bacterial, without acute fever \u2014 which is managed differently and multimodally (alpha-blockers, analgesia, sometimes prolonged antibiotic trial, physiotherapy, psychological support). His acute febrile presentation is acute prostatitis.' },
        { topic:'Avoid PSA + safety-net; the hidden agenda', text:'Do NOT measure PSA during acute infection (falsely elevated). Safety-net: return/urgent assessment for inability to pass urine (retention), worsening fever/rigors/sepsis, or no improvement. Arrange follow-up and recheck; consider urology referral if recurrent, abscess suspected, or retention. HIDDEN AGENDA \u2014 he wants "antibiotics for a water infection"; the skill is to recognise prostatitis as more than a simple UTI, treat it adequately (right drug, right duration), screen sepsis/retention, and safety-net \u2014 not give a short trimethoprim course as for a simple cystitis.' },
      ],
      ice:{
        ideas:'It\u2019s "just a water infection" needing a short course of antibiotics.',
        concerns:'Feeling feverish/rough; the pain and urinary symptoms; possibly embarrassment about ejaculatory pain.',
        expectations:'Quick antibiotics. What he needs: recognition of acute prostatitis, urine culture (\u00b1 STI screen), sepsis/retention assessment, an appropriate prolonged antibiotic course, and safety-netting \u2014 not a short cystitis course.'
      },
      cues:['Perineal/pelvic/back pain + dysuria/frequency + painful ejaculation + fever in a man \u2014 acute prostatitis, not a simple "water infection".','Assess sepsis + acute urinary retention (retention with prostatitis \u2192 urgent urology/suprapubic, not routine catheter).','Treat with a prostate-penetrating antibiotic (fluoroquinolone) for a PROLONGED course (~2\u20134 weeks); culture urine; don\u2019t check PSA in acute infection.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises ACUTE PROSTATITIS (perineal/pelvic/back pain + LUTS + painful ejaculation + fever/systemic illness, tender prostate on gentle DRE) as distinct from a simple "water infection"' },
      { dom:'tasks', text:'Treats a UTI in a man as significant \u2014 sends a urine culture, considers an STI screen where relevant, and assesses the wider urinary-tract context' },
      { dom:'tasks', text:'Assesses SEPSIS (fever, rigors, tachycardia, hypotension) and the ACUTE URINARY RETENTION red flag \u2014 recognising retention with prostatitis needs urgent urology/possible suprapubic catheter, not a routine attempt' },
      { dom:'tasks', text:'Treats with an APPROPRIATE prostate-penetrating antibiotic (fluoroquinolone first-line, or per local guidance/culture) for a PROLONGED course (~2\u20134 weeks), with analgesia \u2014 not a short cystitis course \u2014 and counsels fluoroquinolone cautions' },
      { dom:'tasks', text:'Distinguishes acute prostatitis from CHRONIC prostatitis/chronic pelvic pain syndrome (>3 months, often non-bacterial, multimodal management) and avoids checking PSA in acute infection' },
      { dom:'rto',   text:'Explains that this is more than a simple water infection and why a longer course is needed, addressing any embarrassment (ejaculatory pain) sensitively and checking understanding' },
      { dom:'tasks', text:'Decides disposition \u2014 admit for IV antibiotics if septic/severe or retention \u2014 and considers urology referral if recurrent, abscess suspected, or retention' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent review for inability to pass urine (retention), worsening fever/rigors/sepsis, or no improvement; urine-culture-guided adjustment; recheck and follow-up \u2014 adequate treatment, not a short course' },
    ],
    worked:[
      { lbl:'Reframe "water infection"', txt:'"It\u2019s related, but more than a simple water infection. The pain between your legs and in your back, the burning, going all the time, pain on ejaculating and the fever together point to an infection of the prostate gland \u2014 prostatitis. In men, urine infections are taken more seriously and need proper treatment."' },
      { lbl:'Assess severity/retention', txt:'"A couple of important checks: are you managing to pass urine okay, or struggling/unable to go? And how feverish \u2014 any shaking chills, feeling really unwell? \u2026 If you couldn\u2019t pass urine or were septic, you\u2019d need urgent hospital assessment."' },
      { lbl:'Investigate', txt:'"I\u2019ll send a urine sample to identify the bug and guide treatment, and \u2014 I have to ask routinely \u2014 about sexual history, as some infections that cause this need a specific test. I won\u2019t check a prostate (PSA) blood test now, as infection makes it misleading."' },
      { lbl:'Treat properly', txt:'"This needs an antibiotic that gets into the prostate \u2014 usually ciprofloxacin \u2014 and crucially a longer course, around two to four weeks, not the few days you\u2019d have for simple cystitis, to clear it fully and stop it becoming chronic. I\u2019ll add painkillers too."' },
      { lbl:'Counsel + distinguish chronic', text:'"A note on that antibiotic \u2014 rarely it affects tendons or other things, so stop and contact us if you get tendon pain or unusual symptoms. If pelvic pain ever drags on for months without infection, that\u2019s a different, longer-term condition we\u2019d manage differently."' },
      { lbl:'Safety-net', txt:'"Come back urgently \u2014 or A&E \u2014 if you can\u2019t pass urine, get shaking chills/high fever, or feel much worse. I\u2019ll check the urine result and review you to make sure it\u2019s clearing. Don\u2019t stop the antibiotics early even when you feel better."' },
    ],
    learning:'PERINEAL/pelvic/low back pain with LUTS (dysuria, frequency, urgency, hesitancy), PAINFUL EJACULATION and FEVER/systemic illness in a man is ACUTE PROSTATITIS \u2014 a bacterial infection of the prostate, with an exquisitely tender/boggy prostate on gentle DRE \u2014 not "just a water infection", and a urinary infection in a man is itself uncommon and significant. Send a urine culture (and consider an STI screen where sexual history is relevant, as chlamydia/gonorrhoea can cause prostatitis), and assess the wider urinary tract. Critically, assess for SEPSIS (high fever, rigors, tachycardia, hypotension \u2014 may need admission/IV antibiotics) and the key red flag of ACUTE URINARY RETENTION, because in prostatitis urethral catheterisation can be difficult/contraindicated and may require urology/suprapubic catheter \u2014 so retention warrants urgent urology assessment rather than a routine attempt. Treat with an antibiotic that PENETRATES the prostate \u2014 a FLUOROQUINOLONE (ciprofloxacin/ofloxacin) first-line, or an alternative per local guidance/culture \u2014 for a PROLONGED course (typically ~2\u20134 weeks) to prevent chronic prostatitis/abscess, with analgesia, counselling fluoroquinolone cautions (tendon/aortic/neuropsychiatric/QT) and adjusting to culture; admit if septic/severe. Distinguish acute prostatitis from CHRONIC prostatitis/CHRONIC PELVIC PAIN SYNDROME (persistent pelvic/perineal pain and LUTS >3 months, often non-bacterial, managed multimodally). Do NOT measure PSA during acute infection (falsely elevated), and safety-net for retention, worsening sepsis or non-improvement, with culture-guided follow-up and urology referral if recurrent, abscess suspected or retention. The hidden agenda is the wish for "antibiotics for a water infection"; recognise prostatitis as more than a simple UTI and treat it adequately, not as simple cystitis. No NICE NG12 cancer pathway applies in the acute setting.',
    knowledge:{
      guideline:'Acute prostatitis (CKS/EAU) \u00b7 male UTI significance \u00b7 prostate-penetrating prolonged antibiotics \u00b7 retention/sepsis red flags',
      points:[
        { h:'Recognise acute prostatitis', t:'Perineal/pelvic/back pain + LUTS + painful ejaculation + fever in a man, tender prostate on gentle DRE = acute bacterial prostatitis, not a simple "water infection".' },
        { h:'Male UTI is significant', t:'Urinary infection in men is uncommon/significant. Send MSU culture; consider STI screen (chlamydia/gonorrhoea can cause prostatitis) where relevant; assess the urinary tract.' },
        { h:'Sepsis & retention', t:'Assess sepsis (fever, rigors, tachycardia, hypotension \u2192 admit/IV). Acute urinary retention with prostatitis needs urgent urology/possible suprapubic catheter, not a routine attempt.' },
        { h:'Treat adequately', t:'Prostate-penetrating antibiotic \u2014 fluoroquinolone (ciprofloxacin/ofloxacin) first-line or per local guidance/culture \u2014 for a prolonged course (~2\u20134 weeks). Analgesia. Counsel fluoroquinolone cautions. Adjust to culture.' },
        { h:'Acute vs chronic', t:'Chronic prostatitis/CPPS = pelvic pain + LUTS >3 months, often non-bacterial, managed multimodally (alpha-blockers, analgesia, physio, psychological support). Acute febrile = acute prostatitis.' },
        { h:'No PSA in acute infection', t:'PSA is falsely elevated in acute prostatitis \u2014 do not measure it during the acute episode.' },
        { h:'Never do', t:'Never treat male prostatitis as trivial cystitis with a short course; never miss sepsis or acute retention; never attempt routine catheterisation in retention with prostatitis without urology; never check PSA acutely.' },
        { h:'Safety-net & follow-up', t:'Urgent review for inability to pass urine, rigors/high fever/sepsis, or no improvement; culture-guided adjustment; complete the prolonged course; urology referral if recurrent/abscess/retention.' }
      ]
    }
  };

  /* ============ 222. F2F — Overactive bladder: urgency and frequency, bladder training before pills ============ */
  const c222 = {
    id:'overactive-bladder', title:'"I\u2019m desperate for the loo all the time and sometimes don\u2019t make it \u2014 I just want a tablet to stop it"', type:'video', duration:12,
    meta:{ age:55, sex:'F', setting:'Video consultation \u2014 urinary urgency, frequency and urge incontinence.', system:'Urology / Continence \u2014 overactive bladder: conservative-first management & the red flags' },
    brief:'Mrs Diane Foster, 55, has urinary URGENCY, FREQUENCY (day and night) and occasional urge INCONTINENCE ("don\u2019t make it in time"); it is affecting her social life and sleep. She wants "a tablet to stop it". The examinable task is to recognise OVERACTIVE BLADDER (OAB) / urge-predominant symptoms, to EXCLUDE other causes and RED FLAGS first \u2014 infection (urine dip/culture), VISIBLE HAEMATURIA (bladder cancer \u2014 NG12 urology 2WW), diabetes/polyuria, neurological causes, medications (diuretics), and to distinguish from stress incontinence (leak on cough/exertion \u2014 different management) and mixed \u2014 then to follow the CONSERVATIVE-FIRST pathway per NICE: bladder DIARY, lifestyle (reduce caffeine/alcohol, sensible fluid intake \u2014 not too little, weight loss), and BLADDER TRAINING (and pelvic floor exercises, esp. if mixed) BEFORE medication; only then consider antimuscarinics (e.g. oxybutynin \u2014 anticholinergic burden/caution in older/frail) or mirabegron, with onward referral if refractory. The skill is resisting the "just a pill" request in favour of red-flag exclusion and conservative-first management, with the haematuria/NG12 safety-net. The hidden agenda is the social/sleep impact and embarrassment.',
    script:{
      opening:'"It\u2019s so embarrassing \u2014 I\u2019m bursting for the loo all the time, day and night, and sometimes I just don\u2019t make it. I\u2019ve started avoiding going out and I\u2019m exhausted from getting up at night. Can you just give me a tablet to stop it? My friend takes something for hers."',
      facts:[
        { topic:'Recognise OAB \u2014 but exclude causes/red flags first', text:'CORE \u2014 urgency, frequency, nocturia and urge incontinence suggest OVERACTIVE BLADDER (OAB). But before treating, EXCLUDE other causes and RED FLAGS: urinary INFECTION (urine dip/culture), DIABETES/polyuria (glucose/HbA1c), neurological disease, medications (diuretics, caffeine), and \u2014 critically \u2014 VISIBLE HAEMATURIA, which is a red flag for BLADDER cancer warranting a NICE NG12 urology 2-week-wait referral. A pill should not be given before this assessment.' },
        { topic:'Characterise the incontinence type', text:'Distinguish the incontinence type, as management differs: URGE incontinence (sudden urgency then leak \u2014 OAB) vs STRESS incontinence (leak on cough/sneeze/exertion \u2014 pelvic floor/structural) vs MIXED. Her "urgency then don\u2019t make it" is urge-predominant. A focused history (and examination where appropriate \u2014 pelvic, prolapse) and a bladder diary clarify this.' },
        { topic:'Conservative-first management (NICE)', text:'KEY \u2014 NICE recommends CONSERVATIVE measures FIRST for OAB, before medication: a BLADDER DIARY (frequency/volume), LIFESTYLE changes (reduce CAFFEINE and alcohol, sensible fluid intake \u2014 neither too much nor too little, weight loss if relevant), and BLADDER TRAINING (scheduled voiding with gradually increased intervals, typically over \u22656 weeks); add PELVIC FLOOR exercises especially if there is a stress/mixed component. These are first-line and often effective \u2014 not a delay tactic.' },
        { topic:'Medication \u2014 only after conservative measures', text:'If conservative measures are insufficient, THEN consider medication: an ANTIMUSCARINIC (e.g. oxybutynin, tolterodine, solifenacin \u2014 counsel anticholinergic side-effects: dry mouth, constipation, and caution/avoid oxybutynin in older/frail patients due to cognitive/anticholinergic burden) or MIRABEGRON (a beta-3 agonist \u2014 useful where antimuscarinics are unsuitable; check BP). Review efficacy/side-effects; refer to continence/urology services if refractory (further options incl. Botox, neuromodulation).' },
        { topic:'Address the impact + the embarrassment', text:'Acknowledge the significant SOCIAL, sleep and quality-of-life impact and the EMBARRASSMENT (she\u2019s avoiding going out, exhausted). Take it seriously, normalise it, and frame conservative management positively. Signpost continence services/products as needed. The human impact is central to the consultation.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 "just give me a tablet" reflects the wish for a quick fix and the embarrassment/impact; her friend\u2019s tablet sets the expectation. The skill is to validate the impact, exclude red flags (especially haematuria \u2192 NG12), and explain that conservative measures come first and work well \u2014 offering medication as a next step rather than first line \u2014 without dismissing her distress.' },
      ],
      ice:{
        ideas:'A tablet will "stop it" (her friend takes one); it\u2019s just something to be medicated.',
        concerns:'HIDDEN AGENDA \u2014 embarrassment, social withdrawal, exhausting nocturia, quality of life; wanting a quick fix.',
        expectations:'A pill. What she needs: red-flag exclusion (infection, haematuria/NG12, diabetes), characterisation of the incontinence, conservative-first management (diary, lifestyle, bladder training), and medication only as a next step.'
      },
      cues:['Urgency + frequency + nocturia + urge incontinence \u2014 overactive bladder; exclude infection, diabetes, and VISIBLE HAEMATURIA (NG12 bladder) first.','Distinguish urge vs stress vs mixed incontinence \u2014 management differs (bladder training vs pelvic floor).','Conservative-first (bladder diary, reduce caffeine, bladder training) BEFORE antimuscarinic/mirabegron \u2014 not "just a pill"; take the impact seriously.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises OVERACTIVE BLADDER (urgency, frequency, nocturia, urge incontinence) but EXCLUDES other causes/RED FLAGS first \u2014 urine infection (dip/culture), diabetes/polyuria, neurological causes, medications' },
      { dom:'tasks', text:'Specifically checks for VISIBLE HAEMATURIA and recognises it as an NG12 red flag for bladder cancer warranting urgent (2-week-wait) urology referral' },
      { dom:'tasks', text:'Characterises the incontinence type (urge vs stress vs mixed) with a focused history (\u00b1 examination) and a bladder diary, as management differs' },
      { dom:'tasks', text:'Follows the CONSERVATIVE-FIRST pathway \u2014 bladder diary, lifestyle (reduce caffeine/alcohol, sensible fluids, weight loss), and BLADDER TRAINING (\u00b1 pelvic floor exercises if stress/mixed) BEFORE medication' },
      { dom:'tasks', text:'Reserves MEDICATION for after conservative measures \u2014 antimuscarinic (counselling anticholinergic side-effects and caution in older/frail) or mirabegron \u2014 and refers to continence/urology if refractory' },
      { dom:'rto',   text:'Acknowledges the significant social/sleep/quality-of-life impact and EMBARRASSMENT, takes it seriously, and frames conservative management positively rather than dismissively' },
      { dom:'rto',   text:'Responds to the "just a pill" request by validating the wish for relief while explaining the conservative-first rationale, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags warranting review (haematuria \u2192 urgent urology, infection, neurological symptoms), the bladder-training/diary plan with review, medication as a next step, and continence-service signposting \u2014 conservative-first with the NG12 safety-net' },
    ],
    worked:[
      { lbl:'Validate + take seriously', txt:'"This is really common and nothing to be embarrassed about \u2014 and it\u2019s clearly affecting your life, stopping you going out and wrecking your sleep. That matters, and we will sort it. Let me just check a few things first so we treat the right problem."' },
      { lbl:'Exclude red flags', txt:'"A few important checks: any blood in your urine? Any burning or signs of infection? Are you very thirsty or losing weight? \u2026 I\u2019ll test your urine. (If haematuria:) Blood in the urine I\u2019d want to investigate urgently with the specialists \u2014 not to alarm you, just to be thorough."' },
      { lbl:'Characterise it', txt:'"Is it that you get a sudden desperate urge and then leak, or does it leak when you cough or exercise? \u2026 Sounds like the urgency type \u2014 \u2018overactive bladder\u2019. That guides what works best."' },
      { lbl:'Conservative-first', txt:'"Here\u2019s the thing about tablets \u2014 they\u2019re not actually first-line, and the first steps work really well: keeping a bladder diary, cutting back on caffeine and fizzy drinks (big culprits), and \u2018bladder training\u2019 where we gradually stretch the time between visits. Most people improve a lot with this."' },
      { lbl:'Medication as next step', txt:'"If that\u2019s not enough after a few weeks, THEN we add a tablet \u2014 there are a couple of options, and I\u2019d pick one that suits you and go through the side-effects. So you\u2019re not being denied medication \u2014 it\u2019s just the smart order to do things in."' },
      { lbl:'Safety-net + follow-up', txt:'"Start the diary and the caffeine cut, and I\u2019ll show you bladder training; let\u2019s review in a few weeks. Come back sooner if you see any blood in your urine, get burning/fever, or any new numbness or weakness. And there\u2019s continence support if you need products meanwhile."' },
    ],
    learning:'Urinary urgency, frequency, nocturia and urge incontinence suggest OVERACTIVE BLADDER (OAB), but before treating, EXCLUDE other causes and RED FLAGS: urinary infection (urine dip/culture), diabetes/polyuria (glucose/HbA1c), neurological disease, and medications (diuretics, caffeine) \u2014 and critically check for VISIBLE HAEMATURIA, a red flag for bladder cancer warranting a NICE NG12 urology 2-week-wait referral \u2014 so a pill must not be the first move. Characterise the incontinence type, as management differs: URGE (sudden urgency then leak \u2014 OAB), STRESS (leak on cough/exertion \u2014 pelvic floor/structural), or MIXED, clarified by a focused history (\u00b1 examination) and a bladder diary. NICE recommends CONSERVATIVE measures FIRST: a bladder diary, lifestyle changes (reduce caffeine and alcohol, sensible fluid intake \u2014 neither too much nor too little, weight loss if relevant), and BLADDER TRAINING (scheduled voiding with gradually increased intervals over \u22656 weeks), adding pelvic floor exercises if there is a stress/mixed component \u2014 these are effective first-line measures, not a delay tactic. Only if conservative measures are insufficient should MEDICATION follow \u2014 an antimuscarinic (oxybutynin/tolterodine/solifenacin, counselling anticholinergic side-effects and caution/avoidance of oxybutynin in older/frail patients) or mirabegron (a beta-3 agonist, check BP) \u2014 with referral to continence/urology services if refractory (Botox, neuromodulation). Acknowledge the significant social, sleep and quality-of-life impact and the embarrassment, take it seriously, and frame conservative management positively. The hidden agenda is the wish for a quick "pill to stop it" amid embarrassment and impact; validate the distress, exclude red flags (especially haematuria \u2192 NG12), and explain conservative-first with medication as a next step \u2014 not first line.',
    knowledge:{
      guideline:'NICE NG123 urinary incontinence/OAB \u00b7 conservative-first (bladder training) \u00b7 antimuscarinic/mirabegron \u00b7 NG12 (visible haematuria \u2192 bladder)',
      points:[
        { h:'Recognise OAB \u2014 exclude first', t:'Urgency, frequency, nocturia, urge incontinence = OAB. Exclude infection (urine dip/culture), diabetes/polyuria, neurological causes, medications before treating.' },
        { h:'Haematuria red flag', t:'Visible haematuria is an NG12 red flag for bladder cancer \u2192 urgent (2-week-wait) urology referral. Always check.' },
        { h:'Characterise incontinence', t:'Urge (OAB) vs stress (cough/exertion) vs mixed \u2014 management differs (bladder training vs pelvic floor). Use a bladder diary.' },
        { h:'Conservative-first', t:'Bladder diary, lifestyle (reduce caffeine/alcohol, sensible fluids, weight loss), bladder training (scheduled voiding, increasing intervals, \u22656 weeks) \u00b1 pelvic floor exercises \u2014 before medication.' },
        { h:'Medication as next step', t:'Antimuscarinic (oxybutynin/tolterodine/solifenacin \u2014 anticholinergic side-effects; caution/avoid oxybutynin in older/frail) or mirabegron (check BP). Refer to continence/urology if refractory.' },
        { h:'Take the impact seriously', t:'Significant social/sleep/quality-of-life impact and embarrassment; validate, normalise, frame conservative management positively; signpost continence services/products.' },
        { h:'Never do', t:'Never give a pill before excluding infection/diabetes/haematuria; never miss visible haematuria (NG12); never skip conservative-first measures; never use oxybutynin uncritically in older/frail patients.' },
        { h:'Safety-net & follow-up', t:'Review for haematuria (urgent urology), infection, neurological symptoms; bladder-diary/training review; medication as next step; continence-service signposting.' }
      ]
    }
  };

  /* ============ 223. F2F — Gestational diabetes: a positive OGTT in pregnancy ============ */
  const c223 = {
    id:'gestational-diabetes', title:'"My pregnancy sugar test came back high \u2014 does this mean my baby\u2019s in danger?"', type:'video', duration:12,
    meta:{ age:31, sex:'F', setting:'Video consultation \u2014 explaining a positive OGTT in pregnancy.', system:'Endocrine / Maternity \u2014 gestational diabetes: risks, control, delivery & postnatal' },
    brief:'Mrs Aisha Rahman, 31, 27 weeks pregnant (BMI 32, family history of type 2 diabetes), has had an oral glucose tolerance test (OGTT) showing GESTATIONAL DIABETES; she is anxious "is my baby in danger?". The examinable task is to explain and manage GESTATIONAL DIABETES (GDM) sensitively and accurately: explain what it is (glucose intolerance arising in pregnancy, often resolving after birth) and WHY it matters \u2014 risks of MACROSOMIA (large baby) and associated birth complications (shoulder dystocia), neonatal hypoglycaemia, polyhydramnios, pre-eclampsia, and increased intervention/Caesarean, and the longer-term risk to mother (type 2 diabetes) and child \u2014 while reassuring that GOOD GLUCOSE CONTROL substantially reduces these risks; to outline MANAGEMENT \u2014 referral to the JOINT antenatal/diabetes team, blood glucose self-MONITORING and targets, DIET and exercise first-line, then METFORMIN and/or INSULIN if targets not met (and that these are safe in pregnancy); increased fetal MONITORING/growth scans and a planned delivery (timing/place per glycaemic control and fetal size); and POSTNATAL care \u2014 glucose usually normalises after birth but needs a postnatal check (e.g. HbA1c/fasting glucose ~6\u201313 weeks) and lifelong increased type-2 risk with annual screening, plus implications for future pregnancies. The skill is balancing honest risk information with reassurance and a clear plan, addressing the "is my baby in danger?" fear. No NG12 cancer link.',
    script:{
      opening:'"I had that glucose drink test and they\u2019ve told me I\u2019ve got diabetes in pregnancy. I\u2019m really frightened \u2014 does this mean my baby\u2019s in danger? Have I done something wrong? I don\u2019t really understand what it means or what happens now."',
      facts:[
        { topic:'Explain GDM clearly and reduce blame', text:'CORE \u2014 explain GESTATIONAL DIABETES simply: in pregnancy, hormones make it harder for the body to control blood sugar, and in some women the sugar rises (gestational diabetes), usually resolving after birth. Reduce self-blame: it is driven by pregnancy hormones and risk factors (BMI, family history, ethnicity, previous big baby) \u2014 not something she did wrong. Acknowledge her fear directly.' },
        { topic:'Why it matters \u2014 honest risks, with reassurance', text:'Explain WHY it matters, balancing honesty with reassurance: poorly controlled GDM raises the risk of a LARGE baby (MACROSOMIA) and birth complications (shoulder dystocia), NEONATAL HYPOGLYCAEMIA, polyhydramnios, PRE-ECLAMPSIA, and more intervention/Caesarean; and longer-term type 2 diabetes risk for mother and child. CRUCIALLY \u2014 GOOD GLUCOSE CONTROL substantially REDUCES these risks, so the message is "this is manageable, and controlling it protects your baby", not catastrophe.' },
        { topic:'Management \u2014 the joint team, monitoring, diet then drugs', text:'Outline management: referral to the JOINT antenatal/diabetes (maternal medicine) team; blood glucose SELF-MONITORING against targets; DIET and physical activity first-line (carbohydrate awareness, dietitian input); and if glucose targets are not met, METFORMIN and/or INSULIN \u2014 reassure these are SAFE and commonly used in pregnancy. Control is the lever that reduces the risks above.' },
        { topic:'Fetal monitoring & delivery planning', text:'Explain increased FETAL MONITORING \u2014 growth SCANS (to watch for macromia/polyhydramnios) \u2014 and that DELIVERY will be planned by the team (timing and place depend on glycaemic control and fetal size; well-controlled diet-only GDM differs from insulin-requiring). Birth is usually planned to avoid prolonged pregnancy. The team individualises this.' },
        { topic:'Postnatal & future implications', text:'POSTNATAL \u2014 glucose usually NORMALISES after birth, but she needs a POSTNATAL glucose check (e.g. fasting glucose/HbA1c around 6\u201313 weeks postpartum) and is at INCREASED LIFELONG risk of type 2 diabetes (annual screening, lifestyle to reduce risk). GDM is likely to RECUR in future pregnancies (early testing next time). The baby also has a higher long-term metabolic risk. Breastfeeding is encouraged.' },
        { topic:'The communication core + hidden agenda', text:'COMMUNICATION/HIDDEN AGENDA \u2014 her dominant emotion is FEAR for the baby and possible self-blame. The skill is to give honest, accurate risk information WITHOUT catastrophising, repeatedly anchoring on the reassuring message that good control markedly reduces risk and there is a clear team-based plan; remove blame; check understanding; and provide a concrete next step (joint clinic, monitoring, diet) so she leaves informed and supported, not terrified.' },
      ],
      ice:{
        ideas:'Diabetes in pregnancy means her baby is in danger; possibly that she caused it.',
        concerns:'HIDDEN AGENDA \u2014 fear for the baby, self-blame, not understanding what happens now.',
        expectations:'To know if her baby is in danger and what happens next. What she needs: a clear explanation of GDM and its risks balanced with reassurance, the management plan (joint team, monitoring, diet then metformin/insulin), delivery/monitoring outline, postnatal/future implications, and blame removed.'
      },
      cues:['Positive OGTT at 27 weeks with risk factors \u2014 gestational diabetes; explain clearly and remove self-blame.','Honest risks (macrosomia/shoulder dystocia, neonatal hypoglycaemia, pre-eclampsia, intervention) balanced with: good control markedly reduces them.','Plan: joint antenatal/diabetes team, glucose monitoring/targets, diet first then metformin/insulin (safe in pregnancy), growth scans, planned delivery, postnatal check + lifelong T2 risk.']
    },
    checkpoints:[
      { dom:'tasks', text:'Explains GESTATIONAL DIABETES clearly (pregnancy-hormone-driven glucose rise, usually resolving after birth) and reduces self-blame, acknowledging her fear' },
      { dom:'tasks', text:'Gives HONEST risk information \u2014 macrosomia/shoulder dystocia, neonatal hypoglycaemia, polyhydramnios, pre-eclampsia, increased intervention/Caesarean, longer-term type 2 risk \u2014 balanced with the reassurance that GOOD GLUCOSE CONTROL substantially reduces these risks' },
      { dom:'tasks', text:'Outlines MANAGEMENT \u2014 referral to the JOINT antenatal/diabetes team, blood glucose self-monitoring/targets, diet and activity first-line, then metformin and/or insulin if targets unmet \u2014 reassuring these are safe in pregnancy' },
      { dom:'tasks', text:'Explains increased FETAL MONITORING (growth scans) and that DELIVERY is planned by the team (timing/place by control and fetal size)' },
      { dom:'tasks', text:'Covers POSTNATAL care and FUTURE implications \u2014 glucose usually normalises but needs a postnatal check (fasting glucose/HbA1c ~6\u201313 weeks), lifelong increased type 2 risk (annual screening, lifestyle), likely recurrence in future pregnancies, and encouraging breastfeeding' },
      { dom:'rto',   text:'Addresses the "is my baby in danger?" fear and self-blame directly \u2014 honest but not catastrophising \u2014 anchoring repeatedly on the reassuring, controllable message' },
      { dom:'rto',   text:'Checks understanding, paces the information, and ensures she leaves with a concrete next step and feeling supported rather than terrified' },
      { dom:'gs',    text:'Safety-nets and follows up: the joint-clinic referral and monitoring plan, when to seek help (reduced fetal movements, pre-eclampsia symptoms), the postnatal glucose check and lifelong screening, and review \u2014 honest risk + reassurance + a clear plan' },
    ],
    worked:[
      { lbl:'Acknowledge + de-blame', txt:'"First \u2014 you haven\u2019t done anything wrong. Pregnancy hormones make blood sugar harder to control, and some women, especially with certain risk factors, develop this. It\u2019s called gestational diabetes, and the good news is it usually goes away after the baby\u2019s born."' },
      { lbl:'Honest but reassuring on risk', txt:'"Is your baby in danger? Here\u2019s the honest answer: if the sugar stays high it can make the baby grow large and cause some delivery and newborn problems. BUT \u2014 and this is the key bit \u2014 keeping your sugar well controlled hugely reduces those risks. So this is very manageable, and managing it protects your baby."' },
      { lbl:'The plan', txt:'"Here\u2019s what happens now: I\u2019ll refer you to the joint pregnancy-and-diabetes team. You\u2019ll check your blood sugars against targets, and we start with diet and activity \u2014 with a dietitian. If that\u2019s not enough, we add tablets (metformin) or insulin, which are safe in pregnancy."' },
      { lbl:'Monitoring + delivery', txt:'"You\u2019ll have extra scans to watch the baby\u2019s growth, and the team will plan your delivery \u2014 timing and place \u2014 based on your sugars and the baby\u2019s size. It\u2019s all individualised; you won\u2019t be left guessing."' },
      { lbl:'Postnatal + future', txt:'"After birth, your sugar usually returns to normal, but we\u2019ll check it around 6 to 13 weeks later. It does mean a higher chance of type 2 diabetes in future, so we\u2019ll screen you yearly and support healthy changes \u2014 and it can come back in future pregnancies, so we\u2019d test earlier next time. Breastfeeding\u2019s encouraged and helps."' },
      { lbl:'Reassure + safety-net', txt:'"I know it\u2019s a lot and frightening, but you\u2019re in good hands and there\u2019s a clear plan. Contact the maternity team urgently if the baby\u2019s movements reduce, or you get bad headaches, vision changes or swelling. Let\u2019s get that referral going and review together."' },
    ],
    learning:'GESTATIONAL DIABETES (GDM) is glucose intolerance arising in pregnancy (pregnancy hormones impairing glucose control), usually resolving after birth, with risk factors of raised BMI, family history, ethnicity and a previous large baby \u2014 so explain it simply and remove self-blame while acknowledging the mother\u2019s fear. Give honest risk information balanced with reassurance: poorly controlled GDM raises the risk of a large baby (MACROSOMIA) and birth complications (shoulder dystocia), neonatal hypoglycaemia, polyhydramnios, pre-eclampsia and increased intervention/Caesarean, with longer-term type 2 diabetes risk for mother and child \u2014 but GOOD GLUCOSE CONTROL substantially REDUCES these risks, so the anchoring message is "manageable, and controlling it protects your baby", not catastrophe. Management: referral to the JOINT antenatal/diabetes (maternal medicine) team, blood glucose self-monitoring against targets, diet and physical activity first-line (dietitian input), and metformin and/or insulin if targets are not met (reassuring these are safe in pregnancy). Explain increased fetal monitoring (growth scans for macrosomia/polyhydramnios) and that delivery is planned by the team (timing and place per glycaemic control and fetal size, usually avoiding prolonged pregnancy). Postnatally, glucose usually normalises but needs a postnatal check (fasting glucose/HbA1c around 6\u201313 weeks), with lifelong increased type 2 diabetes risk (annual screening, lifestyle), likely recurrence in future pregnancies (early testing next time), higher long-term metabolic risk for the child, and breastfeeding encouraged. The communication core (and hidden agenda) is fear for the baby and self-blame; give accurate risk information WITHOUT catastrophising, repeatedly anchor on the reassuring controllable message, remove blame, check understanding, and provide a concrete next step so she leaves informed and supported. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG3 diabetes in pregnancy \u00b7 gestational diabetes risks/management \u00b7 joint antenatal-diabetes care \u00b7 postnatal & lifelong T2 risk',
      points:[
        { h:'Explain GDM & de-blame', t:'Pregnancy hormones impair glucose control; some women develop gestational diabetes, usually resolving after birth. Driven by hormones/risk factors, not the mother\u2019s fault. Acknowledge fear.' },
        { h:'Risks (honest + reassuring)', t:'Macrosomia/shoulder dystocia, neonatal hypoglycaemia, polyhydramnios, pre-eclampsia, increased intervention/Caesarean, longer-term type 2 risk \u2014 but good glucose control substantially reduces them.' },
        { h:'Management', t:'Joint antenatal/diabetes team; glucose self-monitoring/targets; diet + activity first-line (dietitian); metformin and/or insulin if targets unmet \u2014 safe in pregnancy.' },
        { h:'Monitoring & delivery', t:'Increased fetal monitoring/growth scans; planned delivery (timing/place per control and fetal size), usually avoiding prolonged pregnancy; individualised by the team.' },
        { h:'Postnatal & future', t:'Glucose usually normalises; postnatal check (fasting glucose/HbA1c ~6\u201313 weeks); lifelong increased type 2 risk (annual screening, lifestyle); likely recurrence (early testing next pregnancy); breastfeeding encouraged.' },
        { h:'Communication', t:'Honest risk without catastrophising; anchor on the reassuring controllable message; remove blame; check understanding; give a concrete next step.' },
        { h:'Never do', t:'Never catastrophise ("baby in danger") without the reassurance that control reduces risk; never blame the mother; never omit the joint-team referral, postnatal check or lifelong-risk counselling.' },
        { h:'Safety-net & follow-up', t:'Joint-clinic referral + monitoring; urgent maternity contact for reduced fetal movements or pre-eclampsia symptoms (headache, visual changes, swelling); postnatal glucose check; annual screening; review.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c220, c221, c222, c223);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'aki-sick-day': {
      ceg: ['Older adults', 'Prescribing & pharmacology'],
      stem: {
        name: 'Pauline Drake', age: '72 years \u00b7 female',
        pmh: ['\u26a0 4 days D&V, barely keeping fluids down, weak/dizzy; creatinine risen (AKI)', 'Hypertension; type 2 diabetes', 'On ramipril, SGLT2 inhibitor, metformin; taking ibuprofen for aches'],
        meds: ['Ramipril', 'SGLT2 inhibitor', 'Metformin', 'Ibuprofen (recent)'],
        allergy: 'NKDA',
        recent: '"Had a sickness bug, can\u2019t keep fluids down \u2014 a blood test says my kidneys are off."',
        reason: 'Video \u2014 abnormal renal function after D&V.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise the triad', d:'Creatinine rise + D&V/dehydration + ramipril + ibuprofen = pre-renal AKI.' },
        { t:'2\u20134',  h:'Severity/red flags', d:'Postural BP/dizziness, urine output, confusion, hyperkalaemia risk, sepsis, can\u2019t keep fluids.' },
        { t:'4\u20137',  h:'Sick-day holds', d:'STOP ibuprofen; hold ramipril, SGLT2 inhibitor (DKA), metformin (lactic acidosis), diuretics.' },
        { t:'7\u20139',  h:'Hydration + disposition', d:'Oral rehydration if tolerating; admit if can\u2019t keep fluids/severe/hyperkalaemia/anuria/confusion.' },
        { t:'9\u201312', h:'Recheck + future rules', d:'Repeat U&E in days + restart plan; sick-day card; avoid routine NSAIDs; safety-net.' }
      ],
      wordPics: {
        fail: 'Ignores the AKI or leaves her on ramipril/ibuprofen/SGLT2/metformin through the illness; misses hyperkalaemia/retention; no recheck.',
        pass: 'Recognises pre-renal AKI, applies sick-day medication holds, manages hydration, and arranges a recheck.',
        exc:  'Recognises the ACEi/NSAID/dehydration triad, assesses severity/red flags (hyperkalaemia, urine output), institutes sick-day holds (ramipril/NSAID/SGLT2/metformin/diuretics), manages hydration with safe disposition, rechecks U&E, and gives future sick-day rules.'
      },
      avoid: [
        { dont:'"Keep taking all your usual tablets and push fluids \u2014 it\u2019ll settle."', instead:'"Stop the ibuprofen and pause the ramipril, metformin and SGLT2 tablet while you\u2019re unwell \u2014 they strain or build up in the kidneys when you\u2019re dry."', why:'Continuing the nephrotoxic/accumulating drugs through dehydration worsens AKI.' },
        { dont:'(No red-flag check) reassuring without asking about urine output/fluids.', instead:'"Are you passing much urine, and can you keep any fluids down? If not, you need a drip in hospital."', why:'Missing anuria/can\u2019t-keep-fluids/hyperkalaemia misses an admission trigger.' },
        { dont:'(No recheck) sending her off without follow-up bloods.', instead:'"I\u2019ll repeat the kidney blood test in a few days and tell you when to restart your tablets."', why:'AKI needs rechecking and a safe medication-restart plan.' }
      ]
    },

    'prostatitis': {
      ceg: ['Urgent & unscheduled care', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Owen Beckett', age: '44 years \u00b7 male',
        pmh: ['Days of perineal/pelvic/back pain + dysuria + frequency/urgency + painful ejaculation', 'Fever, malaise', 'Tender prostate on gentle DRE'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Pain down below, burning when I wee, feverish \u2014 is it just a water infection?"',
        reason: 'Video \u2014 perineal pain with urinary symptoms and fever.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe', d:'Perineal pain + LUTS + painful ejaculation + fever = acute prostatitis, not simple cystitis.' },
        { t:'2\u20134',  h:'Sepsis + retention', d:'Rigors/very unwell \u2192 admit; can\u2019t pass urine \u2192 urgent urology/suprapubic, not routine catheter.' },
        { t:'4\u20136',  h:'Investigate', d:'MSU culture; STI screen if relevant; NO PSA in acute infection (falsely raised).' },
        { t:'6\u20139',  h:'Treat adequately', d:'Fluoroquinolone (or per guidance/culture) PROLONGED ~2\u20134 weeks; analgesia; counsel cautions.' },
        { t:'9\u201312', h:'Chronic vs acute + safety-net', d:'CPPS if >3 months/non-bacterial; return for retention/rigors/no improvement; complete the course.' }
      ],
      wordPics: {
        fail: 'Treats it as simple cystitis with a short trimethoprim course; misses sepsis/retention; checks PSA in acute infection.',
        pass: 'Recognises acute prostatitis, treats with an appropriate prolonged course, and screens sepsis/retention.',
        exc:  'Recognises acute prostatitis (more than a water infection), assesses sepsis and the retention red flag, sends culture (\u00b1 STI), treats with a prostate-penetrating prolonged antibiotic course with cautions, avoids PSA acutely, distinguishes chronic prostatitis/CPPS, and safety-nets.'
      },
      avoid: [
        { dont:'"It\u2019s a water infection \u2014 here\u2019s 3 days of trimethoprim."', instead:'"In a man this is likely prostatitis \u2014 it needs a prostate-penetrating antibiotic for 2\u20134 weeks, not a short course."', why:'A short cystitis course under-treats prostatitis and risks chronicity/abscess.' },
        { dont:'(Ignoring retention) not asking about passing urine.', instead:'"Can you pass urine okay? If you couldn\u2019t, that\u2019s urgent \u2014 and needs urology, not a routine catheter."', why:'Acute retention with prostatitis is a red flag needing urology/suprapubic management.' },
        { dont:'"Let\u2019s check your PSA to be thorough."', instead:'"I won\u2019t check PSA now \u2014 infection makes it falsely high and misleading."', why:'PSA is unreliable in acute prostatitis and should not be measured.' }
      ]
    },

    'overactive-bladder': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Diane Foster', age: '55 years \u00b7 female',
        pmh: ['Urinary urgency + frequency + nocturia + occasional urge incontinence', 'Avoiding going out; exhausted from nocturia; embarrassed', 'Wants "a tablet to stop it"'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Desperate for the loo all the time and sometimes don\u2019t make it \u2014 just give me a tablet."',
        reason: 'Video \u2014 urgency, frequency, urge incontinence.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate + take seriously', d:'Common, embarrassing, affecting life/sleep; reassure and assess.' },
        { t:'2\u20134',  h:'Exclude red flags', d:'Urine infection, diabetes/polyuria, neuro; VISIBLE HAEMATURIA \u2192 NG12 urology 2WW.' },
        { t:'4\u20136',  h:'Characterise', d:'Urge vs stress vs mixed (management differs); bladder diary.' },
        { t:'6\u20139',  h:'Conservative-first', d:'Diary, reduce caffeine/alcohol, sensible fluids, bladder training \u00b1 pelvic floor \u2014 before pills.' },
        { t:'9\u201312', h:'Medication as next step + safety-net', d:'Antimuscarinic (caution older/frail) or mirabegron if needed; refer if refractory; haematuria \u2192 urgent.' }
      ],
      wordPics: {
        fail: 'Hands over an antimuscarinic without excluding infection/haematuria/diabetes or trying conservative measures; misses the NG12 haematuria flag.',
        pass: 'Excludes red flags, characterises the incontinence, and starts conservative-first management with medication as a next step.',
        exc:  'Validates the impact, excludes infection/diabetes/haematuria (NG12), characterises urge vs stress, starts conservative-first management (diary, caffeine reduction, bladder training), reserves antimuscarinic/mirabegron for later with appropriate cautions, and safety-nets.'
      },
      avoid: [
        { dont:'"Here\u2019s an oxybutynin tablet \u2014 that\u2019ll stop it."', instead:'"Tablets aren\u2019t first-line \u2014 a bladder diary, cutting caffeine and bladder training work well first; we add a tablet only if needed."', why:'Jumping to medication skips effective conservative-first management and red-flag exclusion.' },
        { dont:'(No haematuria check) treating without urinalysis.', instead:'"Any blood in your urine? \u2014 that I\u2019d need to investigate urgently."', why:'Missing visible haematuria misses an NG12 bladder-cancer referral.' },
        { dont:'(Dismissive) "It\u2019s just part of getting older."', instead:'"This is common and treatable, and it\u2019s clearly affecting your life \u2014 we\u2019ll take it seriously."', why:'Dismissing the impact ignores significant quality-of-life harm and the patient\u2019s distress.' }
      ]
    },

    'gestational-diabetes': {
      ceg: ['Gender, reproductive & sexual health', 'Long-term conditions & cancer'],
      stem: {
        name: 'Aisha Rahman', age: '31 years \u00b7 female',
        pmh: ['27 weeks pregnant; OGTT positive \u2014 gestational diabetes', 'BMI 32; family history of type 2 diabetes', 'Anxious "is my baby in danger?"; fears she caused it'],
        meds: ['Pregnancy vitamins'],
        allergy: 'NKDA',
        recent: '"My pregnancy sugar test came back high \u2014 does this mean my baby\u2019s in danger?"',
        reason: 'Video \u2014 explaining a positive OGTT in pregnancy.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Explain + de-blame', d:'Pregnancy-hormone-driven; not her fault; usually resolves after birth; acknowledge fear.' },
        { t:'2\u20135',  h:'Honest + reassuring risk', d:'Macrosomia/shoulder dystocia, neonatal hypoglycaemia, pre-eclampsia \u2014 but good control markedly reduces risk.' },
        { t:'5\u20138',  h:'Management plan', d:'Joint antenatal/diabetes team; glucose monitoring/targets; diet+activity first, then metformin/insulin (safe).' },
        { t:'8\u201310', h:'Monitoring + delivery', d:'Growth scans; planned delivery by control/fetal size; individualised.' },
        { t:'10\u201312',h:'Postnatal + future', d:'Glucose check ~6\u201313 weeks; lifelong T2 risk/annual screening; recurrence; breastfeeding; safety-net.' }
      ],
      wordPics: {
        fail: 'Either catastrophises ("your baby\u2019s at serious risk") or under-plays it; blames the mother; omits the team referral/plan or the postnatal/lifelong-risk counselling.',
        pass: 'Explains GDM and its risks with reassurance, outlines the management plan, and covers postnatal follow-up.',
        exc:  'Explains GDM and removes blame, gives honest risks anchored on the reassuring "good control protects your baby", outlines joint-team management (monitoring, diet then metformin/insulin), explains scans/planned delivery and postnatal/lifelong-risk follow-up, and addresses the fear with a concrete plan.'
      },
      avoid: [
        { dont:'"Diabetes in pregnancy is dangerous for the baby \u2014 you\u2019ll need a lot of intervention."', instead:'"There are risks if sugar stays high, but controlling it hugely reduces them \u2014 this is very manageable and we\u2019ll support you."', why:'Catastrophising without the reassuring controllable message terrifies the patient unnecessarily.' },
        { dont:'"This is because of your weight \u2014 you should have managed that."', instead:'"This isn\u2019t your fault \u2014 it\u2019s driven by pregnancy hormones and risk factors; let\u2019s focus on managing it well."', why:'Blaming the mother is harmful and damages engagement.' },
        { dont:'(No postnatal plan) ending once pregnancy management is covered.', instead:'"After birth your sugar usually normalises, but we\u2019ll check it at 6\u201313 weeks and screen yearly, as your future diabetes risk is higher."', why:'Omitting postnatal/lifelong-risk follow-up misses key GDM aftercare.' }
      ]
    }

  });

})();
