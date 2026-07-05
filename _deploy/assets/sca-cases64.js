/* ============================================================
   Reasoning GP — Case Library batch 64:
   "Acute pain, chronic wounds & the serious diagnosis" (NEW themes
   from the Emily Kirby-Blount casebook, verified absent)
   Renal/ureteric colic (loin-to-groin + the AAA/sepsis mimics);
   leg ulcer (venous vs arterial, ABPI before compression); motor
   neurone disease (progressive painless weakness/bulbar \u2014 red-flag
   referral); and OCD (recognise, ERP/CBT, SSRI). No NG12 cancer
   pathway genuinely applies; none invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases63.js.
   ============================================================ */

(function(){

  /* ============ 228. VIDEO — Renal/ureteric colic: loin-to-groin pain & the must-not-miss ============ */
  const c228 = {
    id:'renal-colic', title:'"Agonising pain in my side, coming in waves and shooting to my groin \u2014 I can\u2019t keep still"', type:'video', duration:12,
    meta:{ age:43, sex:'M', setting:'Video/urgent consultation \u2014 acute severe loin pain.', system:'Urology \u2014 renal/ureteric colic: analgesia, imaging & the dangerous mimics' },
    brief:'Mr Niall Hennessy, 43, has sudden severe COLICKY left LOIN pain radiating to the GROIN, in waves, with nausea/vomiting and HAEMATURIA; he is restless and cannot get comfortable. The examinable task is to recognise RENAL/URETERIC COLIC (loin-to-groin colicky pain, restlessness \u2014 unlike peritonitis where patients lie still; haematuria; nausea), provide prompt effective ANALGESIA (NSAID first-line, e.g. diclofenac PR/IM, opioid alternative), investigate appropriately (urine dip for blood, urgent NON-CONTRAST CT-KUB as imaging of choice; U&E, infection markers, pregnancy test in women), and \u2014 critically \u2014 EXCLUDE the dangerous MIMICS: above all a LEAKING ABDOMINAL AORTIC ANEURYSM (especially older patients \u2014 never assume colic without considering AAA), an INFECTED/obstructed kidney (fever + obstruction = urological EMERGENCY needing decompression), ectopic pregnancy, and other acute-abdomen causes. Recognise admission/urgent-referral criteria (infection with obstruction, AKI, single/transplant kidney, uncontrolled pain, large stone, dehydration, uncertainty), and give safety-netting and stone advice (most small stones pass; hydration; recurrence prevention). The skill is effective analgesia + appropriate imaging + excluding AAA/sepsis. No NG12 cancer link.',
    script:{
      opening:'"Doc, this came on suddenly in my left side and it\u2019s agony \u2014 it comes in waves and shoots down towards my groin. I literally can\u2019t keep still, I\u2019m pacing. I feel sick, and I think there was blood in my wee. I\u2019ve never had anything like it."',
      facts:[
        { topic:'Recognise renal/ureteric colic', text:'CORE \u2014 sudden severe COLICKY LOIN pain radiating to the GROIN, in waves, with the patient RESTLESS and unable to get comfortable (in contrast to peritonitis, where movement worsens pain and patients lie still), plus nausea/vomiting and HAEMATURIA (visible or dipstick), is the classic picture of renal/ureteric colic from a stone. The restlessness is a characteristic discriminator.' },
        { topic:'Effective analgesia promptly', text:'Provide prompt, effective ANALGESIA: an NSAID is FIRST-LINE for renal colic (e.g. diclofenac, often PR or IM) unless contraindicated, with an opioid as alternative/addition and an antiemetic for vomiting. Do not under-treat \u2014 the pain is severe; analgesia is an early priority alongside assessment.' },
        { topic:'EXCLUDE the dangerous mimics \u2014 esp. AAA', text:'CRITICAL \u2014 do NOT assume "just colic". The must-not-miss mimic is a LEAKING/ruptured ABDOMINAL AORTIC ANEURYSM \u2014 especially in older patients or those with vascular risk, who can present with "loin/back pain" \u2014 which is rapidly fatal and needs emergency vascular assessment (pulsatile mass, hypotension, collapse). Also exclude an INFECTED OBSTRUCTED kidney (fever/sepsis + obstruction = urological emergency), ECTOPIC pregnancy (always pregnancy-test women of childbearing age), appendicitis/diverticulitis, biliary colic, and bowel pathology.' },
        { topic:'Investigate appropriately', text:'Investigate: URINE dip (blood supports but its absence does not exclude colic), and the imaging of choice is an urgent NON-CONTRAST CT-KUB (confirms stone, size, site, obstruction); check U&E/renal function (AKI), FBC/CRP (infection), and a PREGNANCY test in women. Ultrasound is used in pregnancy/young patients to limit radiation.' },
        { topic:'Admission / urgent-referral criteria', text:'Refer/admit urgently for: signs of INFECTION with obstruction (urosepsis \u2014 needs urgent decompression), AKI/impaired renal function, a SINGLE or transplanted kidney, uncontrolled pain/vomiting, a large or high stone unlikely to pass, dehydration, bilateral obstruction, or diagnostic uncertainty. Otherwise, small distal stones often pass with analgesia, hydration and follow-up.' },
        { topic:'Safety-net & prevention + the agenda', text:'Safety-net: return/urgent if FEVER/rigors (infected obstruction), worsening or uncontrolled pain, anuria, or feeling very unwell. Advise most small stones pass over days-weeks, to keep hydrated, and discuss recurrence prevention (fluids, diet, treat metabolic causes) and stone analysis. HIDDEN AGENDA \u2014 he wants the pain stopped and to know what it is; the skill is rapid analgesia, the right imaging, AND explicitly excluding AAA/sepsis rather than anchoring on "kidney stone".' },
      ],
      ice:{
        ideas:'Severe one-sided pain \u2014 possibly a kidney stone (or he simply wants the agony stopped and an explanation).',
        concerns:'The severity of the pain; the blood in his urine; what is causing it.',
        expectations:'Pain relief and a diagnosis. What he needs: prompt NSAID analgesia, urine dip + urgent CT-KUB, exclusion of AAA/infected-obstructed kidney/ectopic, appropriate referral, and safety-netting.'
      },
      cues:['Sudden colicky loin-to-groin pain in waves, RESTLESS/can\u2019t keep still, haematuria, nausea \u2014 classic renal/ureteric colic.','NSAID is first-line analgesia; urgent non-contrast CT-KUB is the imaging of choice; pregnancy test in women.','Don\u2019t assume colic \u2014 exclude leaking AAA (esp. older), infected obstructed kidney (urosepsis emergency), ectopic; fever+obstruction \u2192 urgent decompression.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises RENAL/URETERIC COLIC (sudden colicky loin-to-groin pain in waves, RESTLESS/unable to keep still \u2014 unlike peritonitis, haematuria, nausea) as the likely diagnosis' },
      { dom:'tasks', text:'Provides prompt effective ANALGESIA \u2014 NSAID first-line (e.g. diclofenac PR/IM) unless contraindicated, opioid alternative, antiemetic \u2014 not under-treating severe pain' },
      { dom:'tasks', text:'EXCLUDES the dangerous mimics \u2014 above all a leaking/ruptured ABDOMINAL AORTIC ANEURYSM (especially older/vascular patients), an infected obstructed kidney (urosepsis), ectopic pregnancy, and other acute-abdomen causes \u2014 rather than anchoring on "stone"' },
      { dom:'tasks', text:'Investigates appropriately \u2014 urine dip, urgent NON-CONTRAST CT-KUB (imaging of choice), U&E (AKI), FBC/CRP, pregnancy test in women (ultrasound if pregnant/young)' },
      { dom:'tasks', text:'Recognises ADMISSION/urgent-referral criteria \u2014 infection with obstruction (urgent decompression), AKI, single/transplant kidney, uncontrolled pain, large/high stone, dehydration, uncertainty \u2014 vs safe outpatient passage of small stones' },
      { dom:'rto',   text:'Responds to severe pain with urgency and empathy, explains the likely diagnosis and plan, and checks understanding' },
      { dom:'tasks', text:'Gives stone advice and recurrence prevention (most small stones pass, hydration, diet, stone analysis/metabolic work-up) where appropriate' },
      { dom:'gs',    text:'Safety-nets robustly: urgent return for FEVER/rigors (infected obstruction), uncontrolled pain, anuria or feeling very unwell; appropriate referral/imaging; review \u2014 analgesia + imaging + AAA/sepsis exclusion, not anchoring on "just a stone"' },
    ],
    worked:[
      { lbl:'Recognise + relieve', txt:'"That pacing-can\u2019t-keep-still pain shooting to the groin, with blood in your urine, really sounds like a kidney stone passing. First priority \u2014 let\u2019s get on top of that pain with a strong anti-inflammatory, which works best for this, plus something for the sickness."' },
      { lbl:'Stay alert to mimics', txt:'"I do need to be thorough rather than just assume a stone \u2014 let me check your tummy and pulses and your blood pressure, because some serious things can mimic this, and I\u2019ll ask about fevers."' },
      { lbl:'Investigate', txt:'"I\u2019ll dip your urine and arrange an urgent CT scan of the kidneys \u2014 that\u2019s the best test to confirm a stone, see its size and whether it\u2019s blocking. I\u2019ll also check your kidney function and infection markers."' },
      { lbl:'Decide disposition', txt:'"If it\u2019s a small stone, no infection and your kidneys are fine, these usually pass at home with pain relief and plenty of fluids. But if you spike a fever, the pain can\u2019t be controlled, or your kidney\u2019s blocked, you\u2019d need hospital \u2014 a blocked, infected kidney is an emergency."' },
      { lbl:'Safety-net', txt:'"So watch for this: fever or shivering, pain we can\u2019t settle, not passing urine, or feeling really unwell \u2014 that\u2019s urgent, ring us or go to A&E. Otherwise drink plenty and we\u2019ll follow up the scan."' },
      { lbl:'Prevention', txt:'"Once it\u2019s passed, we can look at preventing more \u2014 staying well hydrated, some diet tweaks, and analysing the stone if you catch it. Stones do like to recur, so it\u2019s worth it."' },
    ],
    learning:'Sudden severe COLICKY LOIN pain radiating to the GROIN, in waves, with the patient RESTLESS and unable to get comfortable (a discriminator from peritonitis, where patients lie still), plus nausea/vomiting and HAEMATURIA, is the classic picture of RENAL/URETERIC COLIC from a stone. Provide prompt effective ANALGESIA \u2014 an NSAID is first-line (e.g. diclofenac, often PR/IM) unless contraindicated, with an opioid alternative and an antiemetic \u2014 as an early priority alongside assessment. Critically, do NOT anchor on "just a stone": exclude the dangerous MIMICS, above all a leaking/ruptured ABDOMINAL AORTIC ANEURYSM (especially in older or vascular patients presenting with loin/back pain \u2014 rapidly fatal, needs emergency vascular assessment), an INFECTED OBSTRUCTED kidney (fever/sepsis with obstruction is a urological emergency needing urgent decompression), ECTOPIC pregnancy (always pregnancy-test women of childbearing age), and other acute-abdomen causes. Investigate with a urine dip (blood supports the diagnosis but its absence does not exclude it) and an urgent NON-CONTRAST CT-KUB as the imaging of choice (confirming stone size/site/obstruction), plus U&E (AKI), FBC/CRP, and a pregnancy test (ultrasound if pregnant/young). Recognise admission/urgent-referral criteria \u2014 infection with obstruction, AKI, single/transplant kidney, uncontrolled pain/vomiting, large/high stone, dehydration, bilateral obstruction, uncertainty \u2014 while small distal stones often pass with analgesia, hydration and follow-up. Safety-net for fever/rigors, uncontrolled pain, anuria or feeling very unwell, and advise on stone passage and recurrence prevention. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG118 renal/ureteric stones \u00b7 NSAID first-line analgesia \u00b7 CT-KUB \u00b7 AAA & infected-obstruction mimics (no NG12 link)',
      points:[
        { h:'Recognise colic', t:'Sudden colicky loin-to-groin pain in waves, restless/can\u2019t keep still (vs peritonitis), haematuria, nausea/vomiting = renal/ureteric colic from a stone.' },
        { h:'Analgesia first-line', t:'NSAID (e.g. diclofenac PR/IM) is first-line unless contraindicated; opioid alternative; antiemetic for vomiting. Treat the severe pain promptly.' },
        { h:'Exclude AAA', t:'Never assume colic in older/vascular patients \u2014 a leaking/ruptured AAA mimics loin/back pain and is rapidly fatal. Check pulses, BP, abdomen; emergency vascular assessment if suspected.' },
        { h:'Infected obstruction = emergency', t:'Fever/sepsis with an obstructed kidney is a urological emergency needing urgent decompression. Always consider ectopic pregnancy in women (pregnancy test).' },
        { h:'Imaging & bloods', t:'Urine dip (blood supports, absence doesn\u2019t exclude); urgent non-contrast CT-KUB is imaging of choice; U&E (AKI), FBC/CRP, pregnancy test; ultrasound if pregnant/young.' },
        { h:'Admission criteria', t:'Infection + obstruction, AKI, single/transplant kidney, uncontrolled pain/vomiting, large/high stone, dehydration, bilateral obstruction, uncertainty \u2192 refer/admit. Small distal stones often pass at home.' },
        { h:'Never do', t:'Never anchor on "just a stone" without excluding AAA/sepsis; never under-treat the pain; never miss infected obstruction or ectopic; never skip the pregnancy test in women.' },
        { h:'Safety-net & prevention', t:'Urgent return for fever/rigors, uncontrolled pain, anuria, or feeling very unwell; most small stones pass; hydration, diet, stone analysis and recurrence prevention.' }
      ]
    }
  };

  /* ============ 229. F2F — Leg ulcer: venous vs arterial & ABPI before compression ============ */
  const c229 = {
    id:'leg-ulcer', title:'"I\u2019ve had this weepy sore on my ankle for weeks and it won\u2019t heal \u2014 can you just bandage it up tight?"', type:'video', duration:12,
    meta:{ age:71, sex:'F', setting:'Face-to-face \u2014 a chronic lower-leg ulcer.', system:'Vascular / Tissue viability \u2014 leg ulcer: venous vs arterial & the ABPI before compression' },
    brief:'Mrs Glenys Hart, 71 (obese, varicose veins, immobile), has a shallow, weepy, painless-ish ulcer over the medial GAITER area of the ankle for several weeks, with surrounding haemosiderin staining/varicose eczema and leg swelling \u2014 a venous picture. She wants it "bandaged up tight". The examinable task is to assess a chronic LEG ULCER and distinguish VENOUS (gaiter area, shallow, exudative, sloping edges, haemosiderin/varicose eczema/oedema, relatively less painful, pulses usually present) from ARTERIAL (distal/pressure points, "punched-out", deep, painful especially at night/on elevation, cold/pale foot, absent pulses) and other causes (neuropathic \u2014 diabetic foot; and the must-not-miss MALIGNANT change \u2014 Marjolin\u2019s ulcer/non-healing atypical ulcer). CRITICALLY, before applying COMPRESSION (the mainstay of venous ulcer healing), MEASURE the ANKLE-BRACHIAL PRESSURE INDEX (ABPI) to EXCLUDE significant ARTERIAL disease \u2014 compression on an arterial leg can cause ischaemia/necrosis, so "just bandage it tight" is unsafe until arterial supply is confirmed. Manage venous ulcers (refer to leg-ulcer/tissue-viability service for graded compression once ABPI adequate, wound care, elevation, address oedema/venous disease, treat infection only if clinically infected), give lifestyle advice, and safety-net (non-healing/atypical ulcers \u2192 consider biopsy/specialist for malignancy). No acute NG12 referral, but a non-healing/atypical ulcer prompts thought of skin malignancy.',
    script:{
      opening:'"I\u2019ve had this sore on the inside of my ankle for a few weeks now \u2014 it weeps and it just won\u2019t heal. My neighbour had hers bandaged up tight and it sorted it, so can you just do that for me? My leg\u2019s swollen and a bit itchy round it too."',
      facts:[
        { topic:'Assess the ulcer \u2014 venous vs arterial', text:'CORE \u2014 distinguish the ulcer type. VENOUS ulcers: over the medial GAITER area (above the malleolus), shallow with sloping edges, exudative/weepy, surrounded by haemosiderin staining, varicose eczema and oedema, relatively less painful, with palpable foot pulses \u2014 her picture. ARTERIAL ulcers: at distal sites/pressure points, "punched-out", deep, PAINFUL (especially at night and on elevation, relieved by dependency), with a cold/pale foot and absent/weak pulses. NEUROPATHIC ulcers occur at pressure points in diabetics. Examine both legs, pulses, sensation and the wound.' },
        { topic:'ABPI BEFORE compression \u2014 the safety-critical step', text:'CRITICAL \u2014 COMPRESSION is the mainstay of VENOUS ulcer healing, but you must FIRST measure the ANKLE-BRACHIAL PRESSURE INDEX (ABPI) to exclude significant ARTERIAL disease: applying compression to a leg with arterial insufficiency can cause ISCHAEMIA, tissue necrosis and limb loss. So "just bandage it up tight" is UNSAFE until arterial supply is confirmed adequate (broadly ABPI ~0.8\u20131.3 acceptable for compression; outside that range \u2192 vascular referral, no/modified compression). This is the key examinable safety point.' },
        { topic:'Don\u2019t miss the atypical/malignant ulcer', text:'Keep the must-not-miss in mind: a NON-HEALING ulcer, one with an atypical appearance (rolled/everted edges, exuberant granulation, bleeding), or a chronic ulcer that changes, may be a SKIN MALIGNANCY (SCC \u2014 including Marjolin\u2019s ulcer in chronic wounds/scars) and warrants BIOPSY/specialist assessment. Also reconsider the diagnosis if a "venous" ulcer fails to heal as expected.' },
        { topic:'Manage the venous ulcer', text:'Once ABPI confirms adequate arterial supply, manage the venous ulcer: refer to the LEG-ULCER/tissue-viability/district-nursing service for graded COMPRESSION bandaging/hosiery, appropriate WOUND care/dressings, leg ELEVATION and oedema management, treatment of varicose eczema, and assessment of underlying venous disease (consider venous intervention). Treat infection with antibiotics ONLY if clinically infected (not for colonisation), and manage pain.' },
        { topic:'Lifestyle & prevention', text:'Advise on healing and prevention: weight management, mobility/calf-muscle activity, elevation when resting, skin care, and \u2014 after healing \u2014 ongoing compression hosiery to prevent recurrence (venous ulcers commonly recur). Address modifiable factors and arrange ongoing nursing follow-up.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 she wants it "bandaged up tight" like her neighbour\u2019s, not realising compression can be dangerous without checking the arteries first. The skill is to take the request seriously, explain why ABPI must come first (safety), arrange proper assessment and the leg-ulcer service, give realistic expectations (venous ulcers heal slowly), and keep malignancy in mind for non-healing \u2014 not to simply apply tight bandaging on request.' },
      ],
      ice:{
        ideas:'A tight bandage will heal it (as it did for her neighbour).',
        concerns:'A weepy, non-healing sore; swelling and itch; wanting it sorted.',
        expectations:'To have it bandaged tightly. What she needs: ulcer assessment (venous vs arterial), ABPI BEFORE any compression, referral to the leg-ulcer service, realistic expectations, and malignancy awareness for non-healing.'
      },
      cues:['Shallow weepy ulcer over the medial gaiter area + haemosiderin/varicose eczema/oedema, pulses present \u2014 venous ulcer.','"Bandage it tight" \u2014 compression is the mainstay BUT measure ABPI first to exclude arterial disease (compression on an arterial leg can cause necrosis).','Non-healing/atypical ulcer (rolled edges) \u2014 keep skin malignancy (SCC/Marjolin\u2019s) in mind; biopsy/specialist.']
    },
    checkpoints:[
      { dom:'tasks', text:'Assesses the chronic leg ulcer and distinguishes VENOUS (gaiter area, shallow/exudative, haemosiderin/varicose eczema/oedema, pulses present) from ARTERIAL (distal/punched-out, deep, painful, cold/pale foot, absent pulses) and neuropathic causes \u2014 examining both legs, pulses and sensation' },
      { dom:'tasks', text:'Recognises that COMPRESSION is the mainstay of venous-ulcer healing but that the ANKLE-BRACHIAL PRESSURE INDEX (ABPI) must be measured FIRST to exclude significant arterial disease \u2014 because compression on an arterial leg risks ischaemia/necrosis (so "bandage it tight" is unsafe until confirmed)' },
      { dom:'tasks', text:'Keeps the must-not-miss in mind \u2014 a non-healing or atypical ulcer (rolled/everted edges) may be a skin malignancy (SCC/Marjolin\u2019s) warranting biopsy/specialist assessment \u2014 and reconsiders the diagnosis if healing fails' },
      { dom:'tasks', text:'Manages the venous ulcer once ABPI is adequate \u2014 referral to leg-ulcer/tissue-viability/district nursing for graded compression, wound care, elevation/oedema management, varicose-eczema treatment, venous-disease assessment \u2014 with antibiotics only if clinically infected' },
      { dom:'tasks', text:'Gives lifestyle/prevention advice (weight, mobility/calf activity, elevation, skin care) and post-healing compression hosiery to prevent recurrence, with ongoing nursing follow-up' },
      { dom:'rto',   text:'Takes the "bandage it tight" request seriously and explains WHY ABPI must come first (safety) without dismissing her, setting realistic expectations about slow venous healing' },
      { dom:'rto',   text:'Checks understanding and engages her in the plan (assessment, leg-ulcer service, follow-up) rather than simply applying compression on request' },
      { dom:'gs',    text:'Safety-nets and follows up: ABPI and leg-ulcer-service referral, signs of infection/arterial compromise (increasing pain, cold/pale/dusky foot) warranting urgent review, malignancy awareness for non-healing, and review \u2014 ABPI before compression, not bandaging on request' },
    ],
    worked:[
      { lbl:'Take the request seriously, reframe', txt:'"I can see why \u2014 a tight bandage often is the treatment for this kind of ulcer, and your neighbour\u2019s right that it works. But there\u2019s an important safety check first, because for some people tight bandaging can actually be harmful. Let me explain."' },
      { lbl:'Assess the ulcer', txt:'"This sore is over your inner ankle with the brown staining and swelling around it \u2014 that fits a venous ulcer, from the leg veins not draining well. Let me examine both legs, feel the foot pulses and check the skin and sensation."' },
      { lbl:'The ABPI safety step', txt:'"Before any compression, I need to check the blood supply to your foot with a simple test called the ABPI \u2014 ankle and arm blood pressures. If the arteries are narrowed, tight bandaging could cut off the circulation, which is dangerous. So we confirm it\u2019s safe first \u2014 that\u2019s why I can\u2019t just bandage it today."' },
      { lbl:'The plan', txt:'"Assuming the blood supply is fine, I\u2019ll refer you to the leg-ulcer nursing service for proper graded compression and dressings, plus elevating the leg and looking after the skin. Venous ulcers do heal, but I\u2019ll be honest \u2014 it can take weeks to months, so we\u2019ll be patient."' },
      { lbl:'Keep malignancy in mind', txt:'"If an ulcer doesn\u2019t heal as expected or looks unusual, we\u2019d take a small sample to be sure of the cause \u2014 just being thorough. I\u2019ll keep an eye on it."' },
      { lbl:'Prevention + safety-net', txt:'"Longer term \u2014 keeping moving, losing a little weight, elevating the leg and wearing support stockings once healed all help prevent it coming back. Come back urgently if the foot becomes cold, pale, very painful or the area looks infected. We\u2019ll get the assessment booked."' },
    ],
    learning:'Assess a chronic LEG ULCER by distinguishing VENOUS ulcers (over the medial GAITER area, shallow with sloping edges, exudative, surrounded by haemosiderin staining, varicose eczema and oedema, relatively less painful, with palpable foot pulses) from ARTERIAL ulcers (distal sites/pressure points, "punched-out", deep, painful especially at night and on elevation, cold/pale foot, absent/weak pulses) and neuropathic ulcers (pressure points in diabetics), examining both legs, pulses, sensation and the wound. The safety-critical, examinable point is that although COMPRESSION is the mainstay of venous-ulcer healing, the ANKLE-BRACHIAL PRESSURE INDEX (ABPI) must be measured FIRST to exclude significant arterial disease \u2014 applying compression to a leg with arterial insufficiency can cause ischaemia, necrosis and limb loss \u2014 so "just bandage it up tight" is unsafe until arterial supply is confirmed adequate (broadly ABPI ~0.8\u20131.3 acceptable; outside that \u2192 vascular referral, no/modified compression). Keep the must-not-miss in mind: a non-healing or atypical ulcer (rolled/everted edges, exuberant granulation, bleeding) may be a skin malignancy (SCC, including Marjolin\u2019s ulcer in chronic wounds/scars) warranting biopsy/specialist assessment, and reconsider the diagnosis if a "venous" ulcer fails to heal. Once ABPI confirms adequate supply, manage the venous ulcer via the leg-ulcer/tissue-viability/district-nursing service (graded compression, wound care/dressings, elevation and oedema management, varicose-eczema treatment, venous-disease assessment), treating infection with antibiotics only if clinically infected. Advise on lifestyle/prevention (weight, mobility, elevation, skin care, post-healing compression hosiery as venous ulcers recur). The hidden agenda is the wish to be "bandaged tight"; explain why ABPI must come first, set realistic expectations of slow healing, and safety-net for infection/arterial compromise. No acute NICE NG12 cancer pathway applies, though a non-healing/atypical ulcer prompts thought of skin malignancy.',
    knowledge:{
      guideline:'Leg ulcer assessment \u00b7 venous vs arterial \u00b7 ABPI before compression \u00b7 tissue-viability referral \u00b7 Marjolin/SCC awareness (no NG12 link)',
      points:[
        { h:'Venous vs arterial', t:'Venous: gaiter area, shallow/exudative, haemosiderin/varicose eczema/oedema, pulses present, less painful. Arterial: distal/punched-out, deep, painful (night/elevation), cold/pale foot, absent pulses. Neuropathic: pressure points in diabetics.' },
        { h:'ABPI before compression', t:'Compression is the mainstay for venous ulcers, but measure ABPI first to exclude arterial disease \u2014 compression on an arterial leg causes ischaemia/necrosis. ~0.8\u20131.3 broadly acceptable; outside \u2192 vascular referral/no compression.' },
        { h:'Atypical = think malignancy', t:'Non-healing or atypical ulcers (rolled/everted edges, exuberant granulation, bleeding) may be SCC/Marjolin\u2019s ulcer \u2014 biopsy/specialist. Reconsider diagnosis if healing fails.' },
        { h:'Manage venous ulcer', t:'After adequate ABPI: leg-ulcer/tissue-viability/district nursing for graded compression, wound care, elevation/oedema management, varicose-eczema treatment, venous-disease assessment. Antibiotics only if clinically infected.' },
        { h:'Lifestyle & prevention', t:'Weight management, mobility/calf activity, elevation, skin care; post-healing compression hosiery to prevent recurrence (venous ulcers commonly recur).' },
        { h:'Communication', t:'Take the "bandage it tight" request seriously, explain the ABPI safety step, set realistic (slow) healing expectations, and engage in the plan rather than bandaging on request.' },
        { h:'Never do', t:'Never apply compression without ABPI/excluding arterial disease; never miss an atypical/non-healing ulcer (malignancy); never give antibiotics for colonisation; never promise rapid healing.' },
        { h:'Safety-net & follow-up', t:'ABPI and leg-ulcer-service referral; urgent review for cold/pale/dusky/very painful foot or infection; biopsy if non-healing/atypical; ongoing nursing follow-up.' }
      ]
    }
  };

  /* ============ 230. F2F — Motor neurone disease: progressive painless weakness ============ */
  const c230 = {
    id:'motor-neurone-disease', title:'"My speech has got slurred and I keep dropping things and tripping \u2014 but I\u2019ve no pain at all"', type:'video', duration:12,
    meta:{ age:63, sex:'M', setting:'Face-to-face \u2014 progressive painless weakness and bulbar symptoms.', system:'Neurology \u2014 motor neurone disease: recognising the progressive painless red flag' },
    brief:'Mr Douglas Pereira, 63, describes several months of PROGRESSIVE, PAINLESS weakness \u2014 slurred SPEECH and some swallowing difficulty (bulbar), a weak/wasting hand with twitching (FASCICULATIONS), and tripping (foot drop) \u2014 with NO sensory symptoms and no pain. The examinable task is to recognise the RED-FLAG pattern of MOTOR NEURONE DISEASE (MND/ALS): progressive, painless, PURELY MOTOR weakness, often with a MIX of UPPER and LOWER motor neurone signs (wasting, fasciculations, weakness alongside brisk reflexes/spasticity), bulbar involvement (dysarthria, dysphagia), NO sensory loss and NO sphincter/eye-movement involvement early \u2014 and that this combination is highly concerning. Work the differential briefly (cervical myelopathy, multifocal neuropathy, myasthenia, stroke) but recognise the pattern, EXAMINE for combined UMN/LMN signs and fasciculations, and refer URGENTLY to NEUROLOGY (MND is a clinical diagnosis confirmed by specialists/EMG; early referral matters for diagnosis, riluzole, multidisciplinary and respiratory/nutritional support, and advance care planning). The communication skill is handling a frightening, life-limiting possibility honestly but compassionately WITHOUT prematurely naming a diagnosis you cannot confirm \u2014 conveying the need for urgent specialist assessment, supporting the patient, and not falsely reassuring. No NG12 cancer link.',
    script:{
      opening:'"Something\u2019s not right, doctor. Over the last few months my speech has got a bit slurred \u2014 people notice \u2014 and my right hand\u2019s gone weak and a bit wasted, with this odd twitching under the skin. I keep tripping too. The strange thing is there\u2019s no pain at all and I can feel everything normally. What\u2019s going on?"',
      facts:[
        { topic:'Recognise the red-flag pattern', text:'CORE \u2014 PROGRESSIVE, PAINLESS, PURELY MOTOR weakness with a MIX of upper and lower motor neurone features \u2014 muscle WASTING, FASCICULATIONS (twitching) and weakness alongside brisk reflexes/spasticity \u2014 plus BULBAR symptoms (slurred speech/dysarthria, swallowing difficulty), and NOTABLY NO sensory loss and (early) no eye-movement or sphincter involvement, is the highly concerning pattern of MOTOR NEURONE DISEASE (MND/ALS). The painless, motor-only, progressive nature with fasciculations is the key flag.' },
        { topic:'Examine for combined UMN/LMN signs', text:'EXAMINE deliberately: look for FASCICULATIONS, wasting and weakness (LMN) coexisting with brisk reflexes, spasticity and upgoing plantars (UMN) \u2014 the combination across regions is characteristic; assess bulbar function (speech, tongue wasting/fasciculation, swallow), and confirm SENSATION is INTACT. Combined UMN and LMN signs without sensory involvement strongly suggest MND.' },
        { topic:'Consider the differential \u2014 briefly', text:'Briefly consider mimics: cervical myelopathy/radiculopathy (but usually has sensory signs/neck issues), multifocal motor neuropathy, myasthenia gravis (fatigable, no wasting/fasciculations), stroke (sudden, not progressive), thyroid/metabolic, and benign fasciculations (isolated, no weakness/wasting). The progressive painless motor pattern with mixed UMN/LMN signs points away from these toward MND \u2014 but specialist confirmation is needed.' },
        { topic:'Refer urgently to neurology', text:'ACTION \u2014 refer URGENTLY to NEUROLOGY. MND is a clinical diagnosis confirmed by a neurologist (with EMG/nerve conduction and investigations to exclude mimics); early referral matters for timely diagnosis, disease-modifying treatment (RILUZOLE), and access to the MULTIDISCIPLINARY team (respiratory \u2014 NIV, nutrition/SALT/PEG, physiotherapy, OT, communication aids, palliative care and advance care planning). Do not delay or watch-and-wait a progressive motor syndrome.' },
        { topic:'Communicate honestly without premature labelling', text:'COMMUNICATION CORE \u2014 this is a frightening, potentially life-limiting possibility. Be honest that the symptoms are significant and need urgent specialist assessment, WITHOUT prematurely naming "motor neurone disease" as a certainty you cannot confirm in primary care \u2014 avoid both false reassurance and a definitive diagnosis you are not in a position to give. Explore his concerns, answer honestly if he asks directly (acknowledge it is one of the things being looked for), and support him.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 he senses something serious and wants to know what; he may fear the worst. The skill is to take the symptoms seriously, examine for the combined UMN/LMN/bulbar pattern, refer urgently, and handle the difficult uncertainty with compassion and honesty \u2014 not minimising progressive painless weakness nor delivering an unconfirmed terminal diagnosis bluntly. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'Something is seriously wrong; he wants an explanation for the painless progressive weakness and slurring.',
        concerns:'Fear of a serious/sinister cause; the strangeness of weakness without pain or numbness.',
        expectations:'An explanation. What he needs: recognition of the progressive painless motor red-flag pattern, examination for combined UMN/LMN/bulbar signs, urgent neurology referral, and honest compassionate handling without premature labelling.'
      },
      cues:['Progressive PAINLESS purely MOTOR weakness + slurred speech/swallowing (bulbar) + wasting/fasciculations + NO sensory loss \u2014 red flag for MND.','Examine for combined UMN (brisk reflexes/spasticity) + LMN (wasting/fasciculations) signs with intact sensation \u2014 characteristic of MND.','Refer URGENTLY to neurology; communicate honestly but don\u2019t prematurely name a diagnosis you can\u2019t confirm; don\u2019t falsely reassure.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the RED-FLAG pattern of MOTOR NEURONE DISEASE \u2014 progressive, painless, purely MOTOR weakness with wasting/FASCICULATIONS, bulbar symptoms (dysarthria/dysphagia), and NO sensory loss \u2014 as highly concerning' },
      { dom:'tasks', text:'EXAMINES for combined UPPER and LOWER motor neurone signs (fasciculations/wasting/weakness with brisk reflexes/spasticity/upgoing plantars), assesses bulbar function, and confirms sensation is intact' },
      { dom:'tasks', text:'Briefly considers the differential (cervical myelopathy, multifocal motor neuropathy, myasthenia, stroke, benign fasciculations) and recognises the progressive painless motor pattern points toward MND needing specialist confirmation' },
      { dom:'tasks', text:'Refers URGENTLY to NEUROLOGY \u2014 recognising the importance of early diagnosis, riluzole, and the multidisciplinary/respiratory/nutritional/palliative support \u2014 rather than watching and waiting' },
      { dom:'rto',   text:'Communicates honestly that the symptoms are significant and need urgent specialist assessment WITHOUT prematurely naming an unconfirmed life-limiting diagnosis \u2014 avoiding both false reassurance and a definitive label' },
      { dom:'rto',   text:'Explores his concerns, answers honestly if asked directly (acknowledging what is being looked for), and supports him compassionately through the uncertainty' },
      { dom:'tasks', text:'Does not minimise progressive painless weakness or attribute it to a benign cause, and avoids unnecessary delay' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent neurology referral, what would warrant sooner review (rapid deterioration, swallowing/breathing difficulty), support and a clear plan, and offer of follow-up \u2014 urgent referral with honest, compassionate handling, not premature labelling or false reassurance' },
    ],
    worked:[
      { lbl:'Take it seriously', txt:'"I\u2019m really glad you came \u2014 these symptoms are significant and I want to take them seriously. The combination of weakness without any pain or numbness, the slurred speech, and the twitching and wasting in your hand tells me your nerves and muscles need a proper specialist assessment."' },
      { lbl:'Examine', txt:'"Let me examine you carefully \u2014 your strength, reflexes, the twitching, your tongue and speech, and check your sensation. I\u2019m looking at how the nerves controlling your muscles are working in different areas."' },
      { lbl:'Honest, without premature label', txt:'"I\u2019m not able to give you a firm diagnosis here today, and I don\u2019t want to guess and frighten you or falsely reassure you. What I can say is that this pattern needs an urgent neurologist\u2019s opinion and some nerve tests to find out exactly what\u2019s going on."' },
      { lbl:'If he asks directly', txt:'(If he asks "is it something serious / MND?") "I can hear you\u2019re worried, and I won\u2019t dodge it \u2014 a condition affecting the nerves to the muscles is one of the things the specialist will be looking at and ruling in or out. That\u2019s exactly why I want you seen quickly, so you get answers and the right support."' },
      { lbl:'Refer urgently', txt:'"I\u2019m referring you urgently to neurology. Getting seen quickly matters \u2014 it means a proper diagnosis and, whatever it turns out to be, the right treatment and support team around you from the start."' },
      { lbl:'Support + safety-net', txt:'"This is a lot to sit with, and I\u2019m here \u2014 come back any time before the appointment. If your swallowing or breathing get noticeably worse, or you deteriorate quickly, contact us sooner. We\u2019ll go through whatever the specialist finds together."' },
    ],
    learning:'PROGRESSIVE, PAINLESS, PURELY MOTOR weakness with a MIX of upper and lower motor neurone features \u2014 muscle WASTING, FASCICULATIONS and weakness alongside brisk reflexes/spasticity/upgoing plantars \u2014 plus BULBAR symptoms (dysarthria, dysphagia) and NOTABLY no sensory loss and (early) no eye-movement or sphincter involvement, is the highly concerning red-flag pattern of MOTOR NEURONE DISEASE (MND/ALS). The painless, motor-only, progressive nature with fasciculations is the key flag. Examine deliberately for combined UMN and LMN signs across regions and intact sensation, which strongly suggests MND, and briefly consider mimics (cervical myelopathy/radiculopathy \u2014 usually with sensory signs; multifocal motor neuropathy; myasthenia \u2014 fatigable, no wasting/fasciculations; stroke \u2014 sudden; benign fasciculations \u2014 no weakness/wasting). Refer URGENTLY to NEUROLOGY: MND is a clinical diagnosis confirmed by a neurologist (with EMG/nerve conduction and investigations to exclude mimics), and early referral matters for timely diagnosis, disease-modifying treatment (riluzole), and access to the multidisciplinary team (respiratory/NIV, nutrition/SALT/PEG, physiotherapy, OT, communication aids, palliative care and advance care planning) \u2014 so do not watch-and-wait a progressive motor syndrome. The communication core is handling a frightening, potentially life-limiting possibility honestly but compassionately WITHOUT prematurely naming a diagnosis you cannot confirm in primary care: be honest that the symptoms are significant and need urgent specialist assessment, avoid both false reassurance and a definitive label, explore concerns, and answer honestly if the patient asks directly (acknowledging what is being looked for) while supporting him. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE NG42 motor neurone disease \u00b7 recognising progressive painless motor weakness \u00b7 urgent neurology referral \u00b7 breaking difficult news (no NG12 link)',
      points:[
        { h:'Red-flag pattern', t:'Progressive, painless, purely motor weakness with wasting/fasciculations + bulbar symptoms (dysarthria/dysphagia), no sensory loss, early sparing of eye movements/sphincters = concerning for MND.' },
        { h:'Combined UMN/LMN', t:'Look for LMN (wasting, fasciculations, weakness) coexisting with UMN signs (brisk reflexes, spasticity, upgoing plantars) across regions, with intact sensation \u2014 characteristic of MND.' },
        { h:'Differential', t:'Cervical myelopathy/radiculopathy (sensory signs), multifocal motor neuropathy, myasthenia (fatigable, no wasting/fasciculations), stroke (sudden), benign fasciculations (no weakness/wasting). Specialist confirms.' },
        { h:'Urgent neurology referral', t:'MND is a clinical diagnosis confirmed by neurology (EMG, exclude mimics). Early referral enables diagnosis, riluzole, and MDT support (respiratory/NIV, nutrition/SALT/PEG, physio, OT, communication, palliative/ACP).' },
        { h:'Honest, not premature', t:'Be honest that symptoms are significant and need urgent assessment without naming an unconfirmed life-limiting diagnosis. Answer honestly if asked directly; avoid false reassurance.' },
        { h:'Don\u2019t minimise/delay', t:'Never attribute progressive painless motor weakness to a benign cause or watch-and-wait; the pattern warrants urgent specialist assessment.' },
        { h:'Never do', t:'Never falsely reassure progressive painless weakness; never deliver an unconfirmed terminal diagnosis bluntly; never delay referral; never overlook combined UMN/LMN/bulbar signs.' },
        { h:'Safety-net & follow-up', t:'Urgent neurology referral; sooner review for rapid deterioration or swallowing/breathing difficulty; compassionate support and follow-up; go through specialist findings together.' }
      ]
    }
  };

  /* ============ 231. F2F — Obsessive-compulsive disorder: recognition & evidence-based treatment ============ */
  const c231 = {
    id:'ocd-recognition', title:'"I know it\u2019s irrational, but I check the locks and wash my hands for hours \u2014 it\u2019s taking over my life"', type:'video', duration:12,
    meta:{ age:27, sex:'F', setting:'Face-to-face \u2014 distressing intrusive thoughts and compulsions.', system:'Mental health \u2014 obsessive-compulsive disorder: recognition, ERP/CBT & SSRI' },
    brief:'Miss Heather Quinn, 27, describes intrusive, unwanted thoughts (contamination, fear of harm coming if she doesn\u2019t check) causing intense anxiety, which she neutralises with COMPULSIONS \u2014 repetitive hand-washing for hours and repeated lock/appliance checking \u2014 that she KNOWS are irrational but cannot stop; it is now consuming hours a day and impairing work and relationships. She is ashamed and has hidden it. The examinable task is to RECOGNISE OBSESSIVE-COMPULSIVE DISORDER (OCD): obsessions (recurrent intrusive thoughts/images causing anxiety) + compulsions (repetitive behaviours/mental acts performed to reduce that anxiety), with insight that they are excessive, time-consuming and distressing/impairing; to ask sensitively (people often hide it for years, and shame causes delay), to assess SEVERITY and RISK (functional impairment, depression, suicidality, and specifically distressing harm/taboo intrusive thoughts \u2014 reassure these are egodystonic OCD symptoms, NOT intent), and to offer EVIDENCE-BASED treatment per NICE: psychological therapy with EXPOSURE AND RESPONSE PREVENTION (ERP)/CBT as the cornerstone, and/or an SSRI (often higher doses/longer for OCD), with stepped care by severity and referral to specialist/NHS Talking Therapies services. The communication skill is destigmatising, validating, explaining the obsession-compulsion cycle, and instilling hope (OCD is treatable). No NG12 cancer link.',
    script:{
      opening:'"This is really embarrassing to say out loud. I have these thoughts I can\u2019t get rid of \u2014 about germs, and that something terrible will happen if I don\u2019t check things \u2014 and to make the anxiety stop I wash my hands until they\u2019re raw and check the locks over and over. I KNOW it\u2019s irrational, but I can\u2019t stop, and it\u2019s taking over my life. I\u2019ve hidden it for years."',
      facts:[
        { topic:'Recognise OCD \u2014 obsessions + compulsions', text:'CORE \u2014 OBSESSIVE-COMPULSIVE DISORDER is defined by OBSESSIONS (recurrent, intrusive, unwanted thoughts, images or urges that cause marked ANXIETY) and COMPULSIONS (repetitive behaviours or mental acts performed to reduce that anxiety or prevent a feared event), which are time-consuming, distressing and IMPAIRING, and which the person typically recognises as excessive/irrational (insight). Her contamination/harm obsessions with washing/checking compulsions and preserved insight are classic.' },
        { topic:'Ask sensitively \u2014 it is often hidden', text:'KEY \u2014 OCD is frequently HIDDEN for years out of shame/embarrassment (as here), so it is under-recognised and under-treated; ask sensitively and normalise. Take the disclosure seriously, validate her courage, and explore the content, frequency, time consumed and impact without judgement. Recognising and naming it is itself therapeutic.' },
        { topic:'Reassure about distressing intrusive thoughts', text:'IMPORTANT \u2014 OCD intrusive thoughts can be distressing/taboo (e.g. fears of harming others, contamination, blasphemous or sexual themes). These are EGODYSTONIC \u2014 unwanted and abhorrent to the person \u2014 and are SYMPTOMS, not intent or desire; people with OCD are NOT more likely to act on them. Sensitively reassure this (it relieves enormous shame), while still assessing risk appropriately.' },
        { topic:'Assess severity, function & risk', text:'Assess SEVERITY and impact (hours consumed, functional/occupational/relationship impairment), screen for comorbid DEPRESSION and anxiety, and assess RISK (suicidality \u2014 OCD carries a real suicide risk through distress/depression). Severity guides stepped care. Note avoidance behaviours and the toll on her life.' },
        { topic:'Evidence-based treatment (NICE)', text:'Offer EVIDENCE-BASED treatment per NICE: the cornerstone psychological therapy is CBT incorporating EXPOSURE AND RESPONSE PREVENTION (ERP) \u2014 gradually facing the anxiety-provoking trigger WITHOUT performing the compulsion, so the anxiety habituates; and/or an SSRI (which is effective in OCD, often at HIGHER doses and needing LONGER to work than in depression). Use STEPPED CARE: guided self-help/CBT for milder cases, combined ERP/CBT + SSRI for moderate-severe, and referral to specialist/NHS Talking Therapies (and to secondary care for severe/refractory). Explain the obsession-compulsion cycle and that compulsions reinforce the anxiety long-term.' },
        { topic:'Destigmatise + the hidden agenda', text:'COMMUNICATION/HIDDEN AGENDA \u2014 she is ashamed and has hidden this for years; she needs DESTIGMATISING, validation, and HOPE. Explain OCD is a recognised, common and TREATABLE condition (not a character flaw or "madness"), that effective therapies exist, and agree a plan (ERP/CBT \u00b1 SSRI, referral). Instilling hope and reducing shame are central. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'She knows the behaviours are irrational but can\u2019t stop; unsure what it is or whether it can be helped; ashamed.',
        concerns:'HIDDEN \u2014 shame/embarrassment (hidden for years); fear of being judged "mad"; the behaviours taking over her life; possibly distress at the intrusive thoughts themselves.',
        expectations:'Help to stop, and to be understood. What she needs: recognition and naming of OCD, reassurance about intrusive thoughts, risk/severity assessment, and evidence-based treatment (ERP/CBT \u00b1 SSRI) with hope and destigmatisation.'
      },
      cues:['Intrusive anxiety-provoking thoughts (obsessions) + repetitive washing/checking (compulsions) with insight, consuming hours and impairing life \u2014 OCD.','Often hidden for years from shame \u2014 ask sensitively, validate; reassure distressing intrusive thoughts are egodystonic symptoms, not intent.','Treat per NICE: ERP/CBT cornerstone \u00b1 SSRI (higher dose/longer for OCD), stepped care; assess risk (suicidality); destigmatise and give hope.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises OBSESSIVE-COMPULSIVE DISORDER \u2014 obsessions (intrusive anxiety-provoking thoughts) + compulsions (repetitive behaviours/mental acts to reduce anxiety), time-consuming, distressing and impairing, typically with insight' },
      { dom:'tasks', text:'Asks SENSITIVELY and non-judgementally, recognising OCD is often hidden for years from shame, and validates the disclosure while exploring content, time consumed and impact' },
      { dom:'tasks', text:'Reassures that distressing/taboo intrusive thoughts are EGODYSTONIC OCD SYMPTOMS \u2014 not intent or desire, and not acted upon \u2014 relieving shame, while still assessing risk appropriately' },
      { dom:'tasks', text:'Assesses SEVERITY/function and screens comorbid DEPRESSION/anxiety and RISK (suicidality), recognising OCD carries a real suicide risk' },
      { dom:'tasks', text:'Offers EVIDENCE-BASED treatment per NICE \u2014 CBT with EXPOSURE AND RESPONSE PREVENTION (ERP) as the cornerstone and/or an SSRI (often higher dose, longer to work in OCD) \u2014 using stepped care and referral to specialist/NHS Talking Therapies' },
      { dom:'tasks', text:'Explains the OBSESSION-COMPULSION cycle (compulsions relieve anxiety short-term but reinforce it long-term, which ERP breaks)' },
      { dom:'rto',   text:'DESTIGMATISES and validates \u2014 framing OCD as a recognised, common, treatable condition (not a flaw/"madness") \u2014 and instils HOPE, agreeing a plan collaboratively' },
      { dom:'gs',    text:'Safety-nets and follows up: risk/crisis safety-netting (low mood/suicidality), referral for ERP/CBT \u00b1 SSRI with realistic timelines, review of response, and ongoing support \u2014 recognition + evidence-based treatment + destigmatisation' },
    ],
    worked:[
      { lbl:'Validate the disclosure', txt:'"Thank you for telling me \u2014 I know that took real courage, and I want you to know there\u2019s nothing to be embarrassed about. What you\u2019re describing has a name, it\u2019s common, and importantly it\u2019s treatable."' },
      { lbl:'Name it + the cycle', txt:'"This is obsessive-compulsive disorder. The unwanted thoughts spike your anxiety, and the washing or checking brings the anxiety down for a moment \u2014 but that relief actually trains your brain to need to do it more. It\u2019s a cycle, not a weakness, and we can break it."' },
      { lbl:'Reassure about the thoughts', txt:'"And something important: those distressing thoughts \u2014 they\u2019re the opposite of what you want, which is exactly why they upset you so much. They\u2019re a symptom of OCD, not something you\u2019d ever act on. People with OCD don\u2019t act on them. I hope that lifts some of the weight."' },
      { lbl:'Assess impact + risk', txt:'"Can I ask how much of your day this takes, and how it\u2019s affecting work and relationships? And how\u2019s your mood been \u2014 have you had any thoughts that life isn\u2019t worth living? I ask because this is exhausting and I want to support you properly."' },
      { lbl:'Offer treatment', txt:'"The most effective treatment is a talking therapy called exposure and response prevention \u2014 gradually facing the anxiety without doing the ritual, so it fades. We can also use a medication (an SSRI) which works well for OCD, often at a higher dose and taking a bit longer to kick in. We can do either or both."' },
      { lbl:'Hope + plan + safety-net', txt:'"This genuinely gets better with treatment \u2014 I\u2019ve seen it. I\u2019ll refer you for the therapy and we can start medication if you\u2019d like, and review how you\u2019re doing. If your mood drops or you ever feel unsafe, contact us straight away. You\u2019ve taken the hardest step today."' },
    ],
    learning:'OBSESSIVE-COMPULSIVE DISORDER is defined by OBSESSIONS (recurrent, intrusive, unwanted thoughts, images or urges causing marked anxiety) and COMPULSIONS (repetitive behaviours or mental acts performed to reduce that anxiety or prevent a feared event) that are time-consuming, distressing and impairing, and which the person typically recognises as excessive \u2014 a contamination/harm picture with washing/checking and preserved insight is classic. OCD is frequently HIDDEN for years out of shame, so ask sensitively, normalise, validate the disclosure, and explore content, time consumed and impact without judgement \u2014 recognising and naming it is itself therapeutic. Distressing or taboo intrusive thoughts (fears of harming others, contamination, blasphemous or sexual themes) are EGODYSTONIC \u2014 unwanted and abhorrent to the person, and are symptoms, not intent or desire; people with OCD are not more likely to act on them \u2014 so reassure this sensitively (it relieves enormous shame) while still assessing risk appropriately. Assess severity and functional impairment, screen for comorbid depression/anxiety, and assess suicidality (OCD carries a real suicide risk through distress/depression). Offer EVIDENCE-BASED treatment per NICE: the cornerstone is CBT incorporating EXPOSURE AND RESPONSE PREVENTION (ERP) \u2014 facing the trigger without performing the compulsion so anxiety habituates \u2014 and/or an SSRI (effective in OCD, often at higher doses and taking longer to work than in depression), within a stepped-care framework (guided self-help/CBT for milder cases; combined ERP/CBT + SSRI for moderate-severe; specialist/secondary-care referral for severe/refractory). Explain the obsession-compulsion cycle (compulsions relieve anxiety short-term but reinforce it long-term, which ERP breaks). The communication core is destigmatising, validating, instilling HOPE that OCD is common and treatable, and agreeing a collaborative plan. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE CG31 OCD/BDD \u00b7 obsessions & compulsions \u00b7 ERP/CBT cornerstone + SSRI (higher dose/longer) \u00b7 stepped care \u00b7 egodystonic intrusive thoughts',
      points:[
        { h:'Recognise OCD', t:'Obsessions (intrusive anxiety-provoking thoughts/images/urges) + compulsions (repetitive behaviours/mental acts to reduce anxiety), time-consuming, distressing, impairing, usually with insight.' },
        { h:'Ask sensitively', t:'OCD is often hidden for years from shame and under-recognised. Ask sensitively, normalise, validate disclosure, and explore content/time/impact without judgement.' },
        { h:'Egodystonic thoughts', t:'Distressing/taboo intrusive thoughts are unwanted symptoms, not intent \u2014 people with OCD don\u2019t act on them. Reassure sensitively (relieves shame) while still assessing risk.' },
        { h:'Severity & risk', t:'Assess functional impairment, comorbid depression/anxiety, and suicidality (OCD carries real suicide risk). Severity guides stepped care.' },
        { h:'ERP/CBT + SSRI', t:'Cornerstone is CBT with exposure and response prevention (face trigger without the compulsion \u2192 anxiety habituates); and/or SSRI (often higher dose, longer to work in OCD).' },
        { h:'Stepped care', t:'Guided self-help/CBT for milder; combined ERP/CBT + SSRI for moderate-severe; specialist/secondary-care referral for severe/refractory. Explain the obsession-compulsion cycle.' },
        { h:'Destigmatise & hope', t:'Frame OCD as common, recognised and treatable (not a flaw/"madness"); validate; instil hope; agree a collaborative plan. Recognition/naming is therapeutic.' },
        { h:'Safety-net & follow-up', t:'Risk/crisis safety-netting (low mood/suicidality); referral for ERP/CBT \u00b1 SSRI with realistic timelines; review response; ongoing support.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c228, c229, c230, c231);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'renal-colic': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Niall Hennessy', age: '43 years \u00b7 male',
        pmh: ['Sudden severe colicky L loin pain in waves \u2192 groin; restless/can\u2019t keep still', 'Nausea/vomiting; \u26a0 haematuria', 'No prior episodes'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Agonising pain in my side, comes in waves, shoots to my groin \u2014 I can\u2019t keep still."',
        reason: 'Video/urgent \u2014 acute severe loin pain.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise + relieve', d:'Loin-to-groin colic, restless, haematuria = renal colic; NSAID first-line analgesia + antiemetic.' },
        { t:'2\u20134',  h:'Exclude mimics', d:'AAA (esp. older/vascular), infected obstructed kidney, ectopic (pregnancy test), acute abdomen; exam, pulses, BP.' },
        { t:'4\u20137',  h:'Investigate', d:'Urine dip, urgent non-contrast CT-KUB, U&E, FBC/CRP.' },
        { t:'7\u20139',  h:'Disposition', d:'Infection+obstruction/AKI/single kidney/uncontrolled pain/large stone \u2192 admit; small distal stone \u2192 home.' },
        { t:'9\u201312', h:'Safety-net + prevent', d:'Fever/rigors, uncontrolled pain, anuria \u2192 urgent; hydration; recurrence prevention/stone analysis.' }
      ],
      wordPics: {
        fail: 'Anchors on "kidney stone", gives weak analgesia, no imaging plan, and never considers AAA or infected obstruction; misses urosepsis/AAA.',
        pass: 'Recognises colic, gives NSAID analgesia, arranges CT-KUB, and excludes AAA/infected obstruction with appropriate disposition.',
        exc:  'Recognises colic and relieves pain promptly (NSAID), arranges urine dip + urgent CT-KUB, explicitly excludes AAA/infected-obstructed kidney/ectopic, sets correct disposition (admit if infection+obstruction/AKI etc.), and safety-nets for urosepsis with prevention advice.'
      },
      avoid: [
        { dont:'"Sounds like a kidney stone \u2014 take some paracetamol and drink plenty, it\u2019ll pass."', instead:'"Let\u2019s get strong anti-inflammatory pain relief now, arrange an urgent CT, and make sure it isn\u2019t something more serious mimicking a stone."', why:'Under-treating the pain and anchoring on "stone" risks missing AAA or an infected obstructed kidney.' },
        { dont:'(No mimic exclusion) treating colic without checking pulses/abdomen/fever.', instead:'"Let me check your tummy, pulses and blood pressure, and ask about fevers \u2014 some dangerous things mimic this."', why:'Failing to exclude AAA/urosepsis can be fatal.' },
        { dont:'(No safety-net) sending home without fever advice.', instead:'"If you get a fever or shivers, can\u2019t control the pain, or stop passing urine \u2014 that\u2019s an emergency, go to A&E."', why:'A fever with obstruction (urosepsis) needs urgent decompression \u2014 missing it is dangerous.' }
      ]
    },

    'leg-ulcer': {
      ceg: ['Older adults', 'Long-term conditions & cancer'],
      stem: {
        name: 'Glenys Hart', age: '71 years \u00b7 female',
        pmh: ['Shallow weepy ulcer over medial gaiter area, weeks; haemosiderin staining/varicose eczema/leg swelling', 'Obese; varicose veins; immobile; foot pulses present', 'Wants it "bandaged up tight"'],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '"Weepy sore on my ankle for weeks that won\u2019t heal \u2014 can you just bandage it up tight?"',
        reason: 'Face-to-face \u2014 chronic lower-leg ulcer.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take request seriously, reframe', d:'Compression often is the treatment \u2014 but a safety check (ABPI) comes first.' },
        { t:'2\u20134',  h:'Assess venous vs arterial', d:'Gaiter area + haemosiderin/eczema/oedema + pulses = venous; examine both legs, pulses, sensation.' },
        { t:'4\u20137',  h:'ABPI before compression', d:'Measure ABPI to exclude arterial disease \u2014 compression on an arterial leg causes necrosis.' },
        { t:'7\u20139',  h:'Refer + manage', d:'Leg-ulcer/tissue-viability service for graded compression, wound care, elevation; antibiotics only if infected.' },
        { t:'9\u201312', h:'Prevent + malignancy + safety-net', d:'Weight/mobility/hosiery to prevent recurrence; biopsy if non-healing/atypical; urgent if cold/pale/painful foot/infection.' }
      ],
      wordPics: {
        fail: 'Applies tight compression on request without ABPI; or dismisses the ulcer; misses arterial disease or a non-healing malignant ulcer.',
        pass: 'Assesses venous vs arterial, measures ABPI before compression, and refers to the leg-ulcer service.',
        exc:  'Takes the request seriously while explaining the ABPI safety step, distinguishes venous from arterial, refers for graded compression after adequate ABPI, manages wound/oedema, keeps malignancy in mind for non-healing, and advises on recurrence prevention.'
      },
      avoid: [
        { dont:'"Sure, I\u2019ll bandage it up nice and tight for you now."', instead:'"Compression is likely the answer, but I must check the artery supply (ABPI) first \u2014 tight bandaging on a poor-circulation leg can be dangerous."', why:'Compression without ABPI on an arterial leg can cause ischaemia and necrosis.' },
        { dont:'(No type assessment) treating all leg ulcers the same.', instead:'"Let me work out if this is venous or arterial \u2014 it changes everything, including whether compression is safe."', why:'Arterial ulcers must not be compressed; the distinction is essential.' },
        { dont:'(Ignoring non-healing) repeatedly redressing an atypical ulcer.', instead:'"If it doesn\u2019t heal or looks unusual, we\u2019ll biopsy it to rule out a skin cancer."', why:'A non-healing/atypical ulcer can be an SCC (Marjolin\u2019s) and needs biopsy.' }
      ]
    },

    'motor-neurone-disease': {
      ceg: ['New & undifferentiated presentations', 'End-of-life & palliative care'],
      stem: {
        name: 'Douglas Pereira', age: '63 years \u00b7 male',
        pmh: ['Months of progressive PAINLESS weakness: slurred speech + swallowing difficulty (bulbar)', 'Wasting/fasciculations R hand; tripping (foot drop); \u26a0 NO sensory symptoms', 'Otherwise well'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Slurred speech, dropping things and tripping \u2014 but no pain at all. What\u2019s going on?"',
        reason: 'Face-to-face \u2014 progressive painless weakness and bulbar symptoms.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take seriously', d:'Progressive painless purely-motor weakness + bulbar + fasciculations, no sensory loss \u2014 a red flag.' },
        { t:'2\u20135',  h:'Examine UMN+LMN', d:'Wasting/fasciculations + brisk reflexes/spasticity, bulbar function, intact sensation \u2014 characteristic of MND.' },
        { t:'5\u20137',  h:'Differential', d:'Cervical myelopathy, multifocal motor neuropathy, myasthenia, stroke, benign fasciculations \u2014 specialist confirms.' },
        { t:'7\u20139',  h:'Urgent neurology', d:'Refer urgently; early diagnosis enables riluzole + MDT (respiratory/nutrition/palliative/ACP).' },
        { t:'9\u201312', h:'Honest, not premature', d:'Significant, needs urgent assessment; answer honestly if asked; no false reassurance; support + safety-net.' }
      ],
      wordPics: {
        fail: 'Minimises progressive painless weakness or attributes it to a benign cause; or bluntly names "MND" as a certainty; delays referral.',
        pass: 'Recognises the red-flag motor pattern, examines for UMN/LMN signs, and refers urgently to neurology with honest handling.',
        exc:  'Recognises the progressive painless motor + bulbar + fasciculation pattern, examines for combined UMN/LMN signs with intact sensation, refers urgently to neurology, and communicates honestly and compassionately without prematurely naming an unconfirmed diagnosis or falsely reassuring.'
      },
      avoid: [
        { dont:'"It\u2019s probably just a trapped nerve or getting older \u2014 let\u2019s wait and see."', instead:'"Progressive weakness with no pain or numbness, plus the speech and twitching, needs an urgent neurologist \u2014 we shouldn\u2019t wait on this."', why:'Minimising/delaying a progressive painless motor syndrome misses a serious diagnosis.' },
        { dont:'"I\u2019m afraid this is motor neurone disease."', instead:'"This pattern needs urgent specialist assessment and nerve tests \u2014 it\u2019s one of the things they\u2019ll look at \u2014 but I can\u2019t give you a firm diagnosis here."', why:'Delivering an unconfirmed life-limiting diagnosis in primary care is wrong and harmful.' },
        { dont:'(False reassurance) "I\u2019m sure it\u2019s nothing serious."', instead:'"I won\u2019t pretend \u2014 these symptoms are significant, which is exactly why I\u2019m referring you urgently."', why:'False reassurance about a red-flag presentation erodes trust and delays care.' }
      ]
    },

    'ocd-recognition': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Heather Quinn', age: '27 years \u00b7 female',
        pmh: ['Intrusive contamination/harm thoughts (obsessions) + hours of hand-washing & checking (compulsions), with insight', 'Consuming hours/day; impairing work/relationships; hidden for years (shame)', 'Screen mood/suicidality'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I know it\u2019s irrational, but I check locks and wash my hands for hours \u2014 it\u2019s taking over my life."',
        reason: 'Face-to-face \u2014 distressing intrusive thoughts and compulsions.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate disclosure', d:'Thank her; destigmatise; name OCD \u2014 common and treatable, not a weakness.' },
        { t:'2\u20134',  h:'Explain the cycle', d:'Obsession \u2192 anxiety \u2192 compulsion \u2192 brief relief \u2192 reinforcement; ERP breaks it.' },
        { t:'4\u20136',  h:'Reassure intrusive thoughts', d:'Egodystonic symptoms, not intent; people with OCD don\u2019t act on them \u2014 relieves shame.' },
        { t:'6\u20138',  h:'Severity + risk', d:'Time consumed, impairment, comorbid depression, suicidality (real risk).' },
        { t:'8\u201312', h:'Treatment + hope', d:'ERP/CBT cornerstone \u00b1 SSRI (higher dose/longer); stepped care/referral; hope + safety-net.' }
      ],
      wordPics: {
        fail: 'Dismisses it as a habit/"just anxiety", doesn\u2019t name OCD or assess risk, offers no ERP/SSRI; leaves shame and the harm-thought fear unaddressed.',
        pass: 'Recognises OCD, reassures about intrusive thoughts, assesses risk, and offers ERP/CBT \u00b1 SSRI with destigmatisation.',
        exc:  'Validates the disclosure and names OCD, explains the obsession-compulsion cycle, reassures egodystonic intrusive thoughts are symptoms not intent, assesses severity/comorbidity/suicidality, offers ERP/CBT \u00b1 SSRI within stepped care, and instils hope.'
      },
      avoid: [
        { dont:'"Everyone likes things clean \u2014 try to resist it and don\u2019t worry so much."', instead:'"This is OCD \u2014 a recognised, treatable condition, not just being house-proud. There\u2019s effective therapy for it."', why:'Trivialising OCD invalidates the patient and misses an impairing, treatable disorder.' },
        { dont:'(Ignoring the thoughts) not addressing the distressing intrusive thoughts.', instead:'"Those upsetting thoughts are a symptom, the opposite of what you want \u2014 people with OCD don\u2019t act on them."', why:'Failing to reassure about egodystonic intrusive thoughts leaves enormous shame and risk of non-disclosure.' },
        { dont:'(No risk screen) treating without assessing mood/suicidality.', instead:'"How\u2019s your mood, and have you had thoughts that life isn\u2019t worth living?"', why:'OCD carries a real suicide risk; omitting the risk screen is unsafe.' }
      ]
    }

  });

})();
