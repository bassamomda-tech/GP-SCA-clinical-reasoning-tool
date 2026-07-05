/* ============================================================
   Reasoning GP — Case Library batch 73:
   "The missing paediatric case" (NEW theme, verified absent as an
   SCA presenting complaint)
   Undescended testis (cryptorchidism) — empty scrotum found at the
   baby check: retractile vs true UDT, the orchidopexy referral/
   timing, the bilateral-impalpable DSD red flag, and fertility/
   cancer-risk counselling. No NG12 cancer pathway applies to the
   infant (UDT is a future risk factor, not a 2WW pathway).
   Load AFTER sca-cases72.js.
   ============================================================ */
(function(){

  /* ===== 264. Undescended testis (cryptorchidism) ===== */
  const c264 = {
    id:'undescended-testis', title:'"The midwife said one of my baby\u2019s testicles isn\u2019t in the right place \u2014 is that serious? Will he be okay?"', type:'video', duration:12,
    meta:{ age:0, sex:'M', setting:'Face-to-face \u2014 an empty scrotum found at the baby check, parent present.', system:'Paediatric urology \u2014 undescended testis (cryptorchidism): assessment, referral & counselling' },
    brief:'A mother brings 8-week-old Rory after the newborn/6\u20138-week check noted that one testis is not in the scrotum; she is anxious. The task is to assess UNDESCENDED TESTIS (CRYPTORCHIDISM): EXAMINE properly (warm hands, relaxed child) to establish whether the testis is PALPABLE in the inguinal canal/scrotum or IMPALPABLE, and \u2014 crucially \u2014 distinguish a RETRACTILE testis (can be gently manipulated into the scrotum and stays \u2014 usually benign, needs monitoring) from a true UNDESCENDED testis; recognise the must-not-miss BILATERAL IMPALPABLE testes (especially with hypospadias/ambiguous genitalia) as needing URGENT assessment for a disorder of sex development (DSD)/endocrine cause; know the REFERRAL pathway and TIMING \u2014 re-examine at the 6\u20138-week check and refer if a testis remains undescended (by around 3 months), for ORCHIDOPEXY ideally by ~6\u201312 months of age (timing improves fertility) \u2014 and that an ACQUIRED/ascending testis (previously descended, now undescended) also needs surgical assessment; COUNSEL parents on the long-term importance (impaired fertility, increased TESTICULAR CANCER risk \u2014 harder to detect in an undescended testis \u2014 hence later testicular self-examination), reassure proportionately, and arrange follow-up/referral. The skill is proper examination, retractile-vs-undescended distinction, the DSD red flag, timely referral for orchidopexy, and balanced parental counselling. No NG12 cancer pathway applies to the infant.',
    script:{
      opening:'"The midwife and then the doctor at his check said one of Rory\u2019s testicles isn\u2019t where it should be \u2014 it\u2019s not in the sac. I\u2019ve been really worried. Is it serious? Does he need an operation? Will it affect him having children one day? I just want to know he\u2019ll be okay."',
      facts:[
        { topic:'Examine properly first', text:'CORE \u2014 examine carefully with WARM hands and a relaxed, warm child (cold/anxiety causes the cremasteric reflex to retract the testis and mimic an undescended testis). Establish whether the testis is in the scrotum, PALPABLE in the inguinal canal (and gently manipulable into the scrotum), or truly IMPALPABLE. Examine both sides and the genitalia.' },
        { topic:'Retractile vs true undescended', text:'KEY DISTINCTION \u2014 a RETRACTILE testis can be gently manipulated DOWN into the scrotum and STAYS there once the cremasteric reflex relaxes \u2014 this is usually BENIGN and needs only MONITORING (though a small proportion later ascend, so review). A TRUE UNDESCENDED testis cannot be brought into/kept in the scrotum. Don\u2019t over-refer a retractile testis, but don\u2019t miss a genuinely undescended one.' },
        { topic:'Bilateral impalpable \u2014 the red flag', text:'CRITICAL \u2014 BILATERAL IMPALPABLE testes, especially with HYPOSPADIAS or other genital abnormality/ambiguous genitalia, may indicate a DISORDER OF SEX DEVELOPMENT (DSD) or endocrine cause (e.g. congenital adrenal hyperplasia) and needs URGENT senior/specialist assessment \u2014 a must-not-miss. (Rory has one normal-side testis, which is reassuring against this.)' },
        { topic:'Referral pathway & timing', text:'PATHWAY \u2014 many testes descend spontaneously in the first months (especially in preterm infants). If a testis remains undescended at the 6\u20138-week check, re-examine and REFER if it has not descended by around 3 months, for ORCHIDOPEXY (surgical placement/fixation in the scrotum) ideally performed by around 6\u201312 months of age \u2014 the TIMING matters because earlier surgery improves fertility outcomes. An ACQUIRED/ascending testis (previously descended, now undescended) also needs surgical referral.' },
        { topic:'Counsel the long-term importance', text:'COUNSEL the parents honestly but proportionately on WHY it matters: a persistently undescended testis is associated with impaired FERTILITY and an increased risk of TESTICULAR CANCER (and a cancer is harder to detect in an undescended testis) \u2014 which is why timely orchidopexy and, later in life, regular testicular SELF-EXAMINATION are advised. Frame this as the reason for treatment, not as alarm.' },
        { topic:'Reassure + the parent\u2019s agenda', text:'COMMUNICATION \u2014 the mother is anxious and wants to know "will he be okay?". Reassure proportionately (it is common, often resolves or is correctable, and the outlook with timely orchidopexy is good), explain the plan (re-examine/refer, surgery timing), and support her \u2014 while not under-playing the importance of follow-up and referral. No NG12 cancer pathway applies to the infant.' },
      ],
      ice:{ ideas:'Something is wrong with the baby\u2019s testicle; worried about seriousness, surgery and future fertility.', concerns:'Whether it\u2019s serious, needs an operation, and affects future fertility; general parental anxiety.', expectations:'Reassurance and a clear plan. What is needed: proper examination, retractile-vs-undescended distinction, DSD red-flag awareness, timely referral for orchidopexy, and balanced fertility/cancer-risk counselling.' },
      cues:['Empty scrotum at the baby check \u2014 examine with warm hands/relaxed child; establish palpable (inguinal) vs impalpable; both sides + genitalia.','Distinguish RETRACTILE (manipulable into scrotum, stays \u2014 monitor) from TRUE undescended; bilateral impalpable \u00b1 hypospadias \u2192 urgent DSD assessment.','Refer if undescended by ~3 months \u2192 orchidopexy by ~6\u201312 months (timing aids fertility); counsel fertility + testicular-cancer risk; reassure proportionately.']
    },
    checkpoints:[
      { dom:'tasks', text:'EXAMINES properly \u2014 warm hands, relaxed/warm child (avoiding cremasteric retraction) \u2014 establishing whether the testis is in the scrotum, palpable in the inguinal canal, or impalpable, and examines both sides and the genitalia' },
      { dom:'tasks', text:'Distinguishes a RETRACTILE testis (manipulable into the scrotum and stays \u2014 usually benign, monitor) from a TRUE UNDESCENDED testis, avoiding both over-referral and missing a genuine UDT' },
      { dom:'tasks', text:'Recognises the must-not-miss BILATERAL IMPALPABLE testes (especially with hypospadias/ambiguous genitalia) as needing URGENT assessment for a disorder of sex development/endocrine cause' },
      { dom:'tasks', text:'Knows the REFERRAL pathway and TIMING \u2014 re-examine at 6\u20138 weeks, refer if undescended by ~3 months, for ORCHIDOPEXY ideally by ~6\u201312 months (earlier improves fertility) \u2014 and that an acquired/ascending testis also needs surgical referral' },
      { dom:'tasks', text:'COUNSELS the long-term importance proportionately \u2014 impaired fertility and increased (harder-to-detect) testicular-cancer risk, hence timely orchidopexy and later testicular self-examination' },
      { dom:'rto',   text:'Reassures the anxious parent proportionately (common, often resolves/correctable, good outlook with timely treatment) and addresses the "will he be okay/fertility/surgery" questions directly' },
      { dom:'rto',   text:'Explains the diagnosis and plan clearly and sensitively, checking understanding without alarming' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges re-examination/referral as indicated, urgent assessment if bilateral impalpable/DSD features, clear timing for orchidopexy, fertility/cancer-risk counselling, and parental support \u2014 proper examination + timely referral, not watchful inaction' },
    ],
    worked:[
      { lbl:'Reassure + examine', txt:'"Thank you for bringing him \u2014 this is common and very treatable, so let\u2019s take it step by step. First I\u2019ll examine him gently with warm hands while he\u2019s relaxed, because the cold can make a testicle pop up and look missing when it isn\u2019t. Let me check both sides."' },
      { lbl:'Retractile vs undescended', txt:'"There are two pictures. Sometimes the testicle can be gently coaxed into the sac and stays \u2014 that\u2019s a \u2018retractile\u2019 testicle, which is usually harmless and just needs keeping an eye on. If it genuinely won\u2019t come down and stay, that\u2019s a true undescended testicle that needs the surgeons."' },
      { lbl:'Check the reassuring bit', txt:'"His other testicle is normally down, which is reassuring \u2014 it\u2019s when BOTH can\u2019t be felt, especially with other differences, that we\u2019d need an urgent specialist look. That\u2019s not the case here."' },
      { lbl:'The plan + timing', txt:'"Many descend on their own in the first few months. If it hasn\u2019t come down by around three months, I\u2019ll refer him for a small operation called orchidopexy that places and fixes it in the sac \u2014 ideally done between about six and twelve months, because the timing helps protect his future fertility."' },
      { lbl:'Honest counselling', txt:'"To answer your fertility question honestly: leaving it undescended long-term can affect fertility and slightly raises the future risk of a testicular problem, which is exactly why we treat it in good time and why, when he\u2019s older, he\u2019ll be taught to check himself. With timely surgery the outlook is good."' },
      { lbl:'Safety-net + support', txt:'"So: I\u2019ll re-check him, and refer if it hasn\u2019t descended by around three months. If you ever notice the other side change, or any concerns, come back. You did the right thing bringing him \u2014 he\u2019s going to be well looked after."' },
    ],
    learning:'UNDESCENDED TESTIS (CRYPTORCHIDISM) presents when a testis is not palpable in the scrotum \u2014 found at the newborn/6\u20138-week checks or noticed by a parent \u2014 and the first task is to EXAMINE properly with warm hands and a relaxed, warm child (cold or anxiety triggers the cremasteric reflex and can mimic an undescended testis), establishing whether the testis is in the scrotum, PALPABLE in the inguinal canal (and gently manipulable), or truly IMPALPABLE, examining both sides and the genitalia. The key distinction is between a RETRACTILE testis \u2014 which can be gently manipulated into the scrotum and STAYS there, is usually benign and needs only monitoring (a small proportion later ascend, so review) \u2014 and a TRUE UNDESCENDED testis, which cannot be brought into/kept in the scrotum; this avoids both over-referral and missing a genuine UDT. The must-not-miss is BILATERAL IMPALPABLE testes, especially with hypospadias or ambiguous genitalia, which may indicate a disorder of sex development or endocrine cause (e.g. congenital adrenal hyperplasia) and needs URGENT senior/specialist assessment. On the pathway and timing: many testes descend spontaneously in the first months (especially in preterm infants), but if a testis remains undescended at the 6\u20138-week check, re-examine and refer if it has not descended by around 3 months, for ORCHIDOPEXY (surgical placement/fixation in the scrotum) ideally performed by around 6\u201312 months of age \u2014 timing matters because earlier surgery improves fertility outcomes \u2014 and an acquired/ascending testis (previously descended, now undescended) also needs surgical referral. Counsel parents honestly but proportionately that a persistently undescended testis is associated with impaired FERTILITY and an increased, harder-to-detect risk of TESTICULAR CANCER, which is why timely orchidopexy and later regular testicular SELF-EXAMINATION are advised \u2014 framing this as the reason for treatment, not alarm. Reassure proportionately (it is common, often resolves or is correctable, with a good outlook after timely treatment), explain the plan, support the anxious parent, and safety-net. No NICE NG12 cancer pathway applies to the infant (UDT is a future risk factor, not a 2WW pathway).',
    knowledge:{
      guideline:'Undescended testis (cryptorchidism) \u00b7 NIPE/6\u20138-week check \u00b7 retractile vs UDT \u00b7 bilateral-impalpable DSD red flag \u00b7 orchidopexy timing \u00b7 fertility/cancer counselling',
      points:[
        { h:'Examine properly', t:'Warm hands, relaxed/warm child (avoid cremasteric retraction). Establish scrotal vs palpable inguinal vs impalpable; examine both sides and genitalia.' },
        { h:'Retractile vs true UDT', t:'Retractile = manipulable into the scrotum and stays (usually benign, monitor; small proportion ascend). True undescended = cannot be brought into/kept in the scrotum. Avoid over-referral and missed UDT.' },
        { h:'Bilateral impalpable red flag', t:'Bilateral impalpable testes, especially with hypospadias/ambiguous genitalia \u2192 urgent assessment for disorder of sex development/endocrine cause (e.g. CAH).' },
        { h:'Pathway & timing', t:'Many descend by ~3\u20136 months (esp. preterm). If undescended at 6\u20138 weeks, re-examine and refer if not descended by ~3 months; orchidopexy ideally by ~6\u201312 months (earlier improves fertility). Acquired/ascending testis also needs referral.' },
        { h:'Long-term counselling', t:'Persistent UDT \u2192 impaired fertility and increased (harder-to-detect) testicular-cancer risk \u2192 timely orchidopexy and later testicular self-examination. Frame as the reason for treatment.' },
        { h:'Reassure proportionately', t:'Common, often resolves/correctable, good outlook with timely treatment. Support the anxious parent; explain the plan.' },
        { h:'Never do', t:'Never examine a cold/distressed child and mislabel retraction as UDT; never over-refer a retractile testis; never miss bilateral impalpable/DSD; never delay referral past the orchidopexy window; never alarm without counselling the reason.' },
        { h:'Safety-net & follow-up', t:'Re-examine/refer per pathway; urgent assessment if bilateral impalpable/DSD features; clear orchidopexy timing; fertility/cancer-risk counselling; parental support. No NG12 cancer pathway in the infant.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c264);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'undescended-testis': {
      ceg: ['Children & young people', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Rory (mother present)', age: '8 weeks \u00b7 male',
        pmh: ['Empty scrotum on one side noted at newborn/6\u20138-week check', 'Otherwise well, thriving; other testis normally descended', 'No hypospadias/ambiguous genitalia'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"The midwife said one of his testicles isn\u2019t in the right place \u2014 is it serious? Will he be okay?"',
        reason: 'Face-to-face \u2014 empty scrotum found at the baby check.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Reassure + examine', d:'Warm hands/relaxed child; scrotal vs palpable inguinal vs impalpable; both sides + genitalia.' },
        { t:'2\u20104',  h:'Retractile vs true UDT', d:'Retractile (manipulable, stays \u2014 monitor) vs true undescended (needs surgery).' },
        { t:'4\u20106',  h:'Red flag', d:'Bilateral impalpable \u00b1 hypospadias \u2192 urgent DSD/endocrine assessment (reassuring here \u2014 other testis down).' },
        { t:'6\u20109',  h:'Pathway + timing', d:'Re-examine; refer if undescended by ~3 months \u2192 orchidopexy by ~6\u201312 months (aids fertility); acquired/ascending also refer.' },
        { t:'9\u201012', h:'Counsel + safety-net', d:'Fertility + testicular-cancer risk \u2192 timely surgery + later self-exam; reassure proportionately; follow-up.' }
      ],
      wordPics: {
        fail: 'Examines a cold/distressed baby and dismisses or over-refers; misses the retractile-vs-UDT distinction or bilateral-impalpable DSD; gives no referral timing or fertility/cancer counselling.',
        pass: 'Examines properly, distinguishes retractile from true UDT, and refers with correct timing and parental counselling.',
        exc:  'Examines properly (warm hands), distinguishes retractile from true undescended, recognises the bilateral-impalpable DSD red flag, refers per pathway with correct orchidopexy timing (~6\u201312 months), counsels fertility/cancer risk proportionately, and reassures/supports the parent.'
      },
      avoid: [
        { dont:'"It\u2019ll come down on its own \u2014 nothing to worry about, no need to do anything."', instead:'"Many do descend, but if it hasn\u2019t by around three months I\u2019ll refer him for a small operation \u2014 the timing matters for his fertility."', why:'Blanket watchful inaction risks missing the orchidopexy window that protects fertility.' },
        { dont:'(Examining a cold/upset baby) labelling retraction as undescended.', instead:'"Let me warm my hands and settle him \u2014 cold makes the testicle retract and look missing when it isn\u2019t."', why:'The cremasteric reflex causes false impressions; proper examination is essential.' },
        { dont:'(Ignoring the red flag) treating any non-palpable testis as routine.', instead:'"If both couldn\u2019t be felt, especially with other genital differences, that needs an urgent specialist assessment."', why:'Bilateral impalpable testes can signal a disorder of sex development/endocrine cause needing urgent assessment.' }
      ]
    }

  });

})();
