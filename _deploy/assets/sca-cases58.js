/* ============================================================
   Reasoning GP — Case Library batch 58 (final unscripted batch):
   "Men's health below the belt" (filling 4 live-linked gaps)
   Blood in the semen (haematospermia \u2014 reassure the young,
   investigate the older / NG12 prostate); penile curvature
   (Peyronie\u2019s \u2014 function, honesty & self-esteem); abnormal semen
   analysis (fertility news delivered to one half of a couple, +
   testicular-cancer awareness); and tiredness in a young man
   (testosterone myths vs real causes). NG12 stated where genuine
   (haematospermia \u2192 prostate; semen analysis \u2192 testicular exam),
   not invented elsewhere.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases57.js.
   ============================================================ */

(function(){

  /* ============ 204. VIDEO — Blood in the semen: haematospermia (NG12 prostate where relevant) ============ */
  const c204 = {
    id:'haematospermia', title:'"There was blood when I ejaculated \u2014 I\u2019ve convinced myself it\u2019s cancer"', type:'video', duration:12,
    meta:{ age:33, sex:'M', setting:'Video consultation \u2014 blood in the ejaculate.', system:'Urology / Men\u2019s health \u2014 haematospermia: reassure the young, investigate the older' },
    brief:'Mr Daniel Ofori, 33, noticed BLOOD in his ejaculate once or twice over the past week and is frightened it is cancer. He is otherwise well, no urinary symptoms, no trauma, no fever, no weight loss. The examinable task is to manage HAEMATOSPERMIA correctly by AGE and red flags: in a YOUNG man (<40) with a single/short episode and no red flags it is almost always BENIGN and self-limiting (idiopathic, inflammatory/infective \u2014 prostatitis/urethritis, post-procedure e.g. after a prostate biopsy, minor vessel) \u2014 needing examination, basic checks (urine dip/MSU, STI screen if indicated, BP, examine genitalia, and DRE/PSA guided by age and findings) and strong REASSURANCE with safety-netting; BUT recognise the situations that warrant investigation/referral \u2014 age \u226540 (especially persistent/recurrent), associated haematuria, abnormal DRE or raised PSA, or systemic features \u2014 which raise concern for PROSTATE cancer or other urological pathology (NICE NG12: 2WW urology for raised PSA/abnormal prostate). The skill is to address the cancer FEAR proportionately (most cases are benign, especially when young) while not missing the older/persistent/red-flag patient. No NG12 trigger in this young man unless red flags emerge.',
    script:{
      opening:'"This is really embarrassing, doctor, but \u2014 there was blood when I ejaculated, a couple of times this week. I\u2019ve been up at night googling it and I\u2019ve completely convinced myself it\u2019s cancer. I\u2019m only 33 but I\u2019m terrified. Is it? I haven\u2019t been able to think about anything else."',
      facts:[
        { topic:'In a young man, haematospermia is usually benign', text:'CORE \u2014 in men UNDER 40 with a single or short episode and no red flags, haematospermia is almost always BENIGN and self-limiting. Common causes: idiopathic (most), inflammation/infection (prostatitis, urethritis, epididymo-orchitis), STIs, recent instrumentation/prostate biopsy, vigorous/prolonged sexual activity, and minor vessel bleeding. Cancer is an UNCOMMON cause in this group \u2014 so strong, evidence-based reassurance is appropriate, after a sensible assessment.' },
        { topic:'Assess and examine', text:'Take a history (duration/recurrence, urinary symptoms, haematuria, urethral discharge/STI risk, recent procedures, trauma, bleeding tendency/anticoagulants, fever, weight loss/bone pain), check BP (hypertension is associated), URINE dip/MSU, STI screen if indicated, and EXAMINE the external genitalia. A digital rectal examination (DRE) and PSA are guided by age and findings \u2014 important in the older/persistent patient, more selective in a low-risk young man.' },
        { topic:'Know who to investigate/refer', text:'Recognise the features that move haematospermia from "reassure" to "investigate/refer": AGE \u226540 (especially persistent or recurrent), associated visible/non-visible HAEMATURIA, an abnormal (hard/nodular) prostate on DRE, a raised PSA (age-adjusted), or systemic red flags (weight loss, bone pain). These raise concern for PROSTATE cancer or other urological pathology and warrant urology referral \u2014 NICE NG12 supports a 2-week-wait urology referral for a raised PSA or abnormal-feeling prostate.' },
        { topic:'Manage the young, low-risk patient', text:'For this 33-year-old with no red flags: examine, dip the urine (\u00b1 STI screen), check BP, and if all is reassuring, give clear REASSURANCE that this is very likely a benign, self-limiting problem; treat any identified infection; and SAFETY-NET \u2014 return if it persists/recurs beyond a few weeks, if he develops haematuria, urinary symptoms, fever, weight loss, or is \u226540, when investigation/referral would follow.' },
        { topic:'Address the cancer fear proportionately', text:'COMMUNICATION CORE \u2014 his dominant emotion is FEAR of cancer fuelled by late-night googling. Address it directly and proportionately: acknowledge the fear, explain honestly that in a young man this is usually benign and rarely cancer, and that you are checking sensibly \u2014 reassurance that is honest and grounded in assessment, not dismissive ("it\u2019s nothing, off you go") and not falsely alarming.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 beneath the embarrassment is significant anxiety and catastrophic cancer fear; he needs permission to be reassured AND to feel he has been taken seriously. The skill is to normalise the symptom, assess properly, reassure proportionately with safety-netting, and treat any cause \u2014 while keeping the threshold to investigate clear for the older/persistent/red-flag scenario.' },
      ],
      ice:{
        ideas:'Blood in the semen means cancer (reinforced by googling).',
        concerns:'HIDDEN AGENDA \u2014 intense cancer fear and anxiety, embarrassment; can\u2019t stop thinking about it.',
        expectations:'To be told whether it\u2019s cancer. What he needs: a sensible assessment, honest proportionate reassurance (usually benign in the young), treatment of any cause, and clear safety-netting for the features that would warrant investigation.'
      },
      cues:['Blood in ejaculate, age 33, no urinary/systemic symptoms \u2014 in a young man almost always benign/self-limiting; reassure after assessment.','Assess: urinary symptoms, haematuria, STI risk, recent procedures, trauma, BP, urine dip, examine genitalia; DRE/PSA guided by age/findings.','Investigate/refer if \u226540 (esp. persistent/recurrent), haematuria, abnormal DRE/raised PSA, or systemic red flags \u2014 NG12 2WW prostate then.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that in a YOUNG man (<40) with a short episode and no red flags, haematospermia is almost always BENIGN/self-limiting \u2014 and reassures proportionately after assessment rather than over-investigating' },
      { dom:'tasks', text:'Takes a targeted history (duration/recurrence, urinary symptoms, haematuria, STI risk/discharge, recent procedures, trauma, anticoagulants, fever, weight loss/bone pain) and considers the benign causes (idiopathic, prostatitis/urethritis, STI, post-procedure)' },
      { dom:'tasks', text:'Examines appropriately \u2014 BP, urine dip/MSU, STI screen if indicated, external genitalia \u2014 with DRE/PSA guided by age and findings (more selective in a low-risk young man)' },
      { dom:'tasks', text:'Knows the features warranting INVESTIGATION/REFERRAL \u2014 age \u226540 (especially persistent/recurrent), haematuria, abnormal (hard/nodular) prostate or raised PSA, systemic red flags \u2014 and that NICE NG12 supports 2WW urology for raised PSA/abnormal prostate' },
      { dom:'tasks', text:'Manages the low-risk patient: treats any identified infection, gives clear reassurance, and SAFETY-NETS for persistence/recurrence, haematuria, urinary/systemic symptoms or age threshold prompting later investigation' },
      { dom:'rto',   text:'Addresses the cancer FEAR directly and proportionately \u2014 acknowledging the anxiety/embarrassment and the googling \u2014 with honest reassurance grounded in assessment, neither dismissive nor falsely alarming' },
      { dom:'rto',   text:'Normalises the symptom, explains the reasoning in accessible terms, and checks understanding so the reassurance lands' },
      { dom:'gs',    text:'Safety-nets and follows up: which features warrant return/investigation (persistence, haematuria, systemic symptoms, age), treatment of any cause, and review \u2014 proportionate reassurance for the young/low-risk, clear threshold to investigate the older/red-flag patient' },
    ],
    worked:[
      { lbl:'Normalise + take seriously', txt:'"There\u2019s no need to be embarrassed \u2014 this is a common thing to come about, and I\u2019m really glad you did rather than worrying alone. Let me ask a few things and examine you, and then I can give you a proper, honest answer rather than the internet\u2019s worst-case version."' },
      { lbl:'Assess', txt:'"Any pain passing urine, blood in your wee, discharge, recent injury, or new sexual partners? Any fevers, weight loss? \u2026 None. Let me check your blood pressure, test your urine, and examine you \u2014 and depending on that, possibly a prostate check, though at your age that\u2019s less likely to be needed."' },
      { lbl:'Reassure proportionately', txt:'"Here\u2019s the honest reassurance you came for: in a man of 33, with no other symptoms, blood in the semen is almost always harmless and settles on its own \u2014 often from a tiny blood vessel or mild inflammation. Cancer is a very uncommon cause at your age."' },
      { lbl:'Treat any cause', txt:'"If your urine test or swabs show an infection, I\u2019ll treat that. Otherwise there\u2019s usually nothing that needs doing \u2014 it tends to clear by itself over a few weeks."' },
      { lbl:'Be clear when it WOULD matter', txt:'"So you know where the line is: I\u2019d want to look further if it keeps happening over several weeks, if you see blood in your wee, get urinary symptoms or feel unwell \u2014 or, in older men, it\u2019s checked more thoroughly. But none of that applies to you right now."' },
      { lbl:'Safety-net the anxiety', txt:'"Try to step away from the 2am googling \u2014 it\u2019s feeding the fear. If it persists, recurs, or any of those warning signs appear, come back and we\u2019ll investigate properly. But I\u2019m genuinely reassuring, not fobbing you off."' },
    ],
    learning:'Haematospermia (blood in the ejaculate) is managed by AGE and red flags. In men UNDER 40 with a single or short episode and no red flags it is almost always BENIGN and self-limiting \u2014 commonly idiopathic, or due to inflammation/infection (prostatitis, urethritis, STI), recent instrumentation/prostate biopsy, vigorous sexual activity, or minor vessel bleeding \u2014 with cancer an uncommon cause, so strong, honest reassurance is appropriate after a sensible assessment. Take a targeted history (duration/recurrence, urinary symptoms, haematuria, STI risk/discharge, recent procedures, trauma, anticoagulants, fever, weight loss/bone pain), check BP (hypertension is associated), dip the urine/MSU, screen for STIs if indicated, and examine the external genitalia, with DRE and PSA guided by age and findings (important in the older/persistent patient, more selective in a low-risk young man). Recognise the features that warrant INVESTIGATION/REFERRAL: age \u226540 (especially persistent or recurrent), associated visible/non-visible haematuria, an abnormal (hard/nodular) prostate, a raised age-adjusted PSA, or systemic red flags \u2014 these raise concern for PROSTATE cancer or other urological pathology, and NICE NG12 supports a 2-week-wait urology referral for a raised PSA or abnormal-feeling prostate. For the low-risk young man, treat any identified infection, give clear proportionate reassurance, and safety-net for persistence/recurrence, haematuria, urinary/systemic symptoms or reaching the age threshold. The communication core is the cancer FEAR fuelled by googling: acknowledge it, reassure honestly and proportionately (usually benign, rarely cancer in the young), and keep the threshold to investigate clear for the older/persistent/red-flag scenario \u2014 neither dismissive nor falsely alarming.',
    knowledge:{
      guideline:'Haematospermia (CKS/EAU) \u00b7 NICE NG12 (prostate \u2014 raised PSA/abnormal DRE 2WW) \u00b7 age-based assessment & reassurance',
      points:[
        { h:'Young = usually benign', t:'In men <40 with a short episode and no red flags, haematospermia is almost always benign/self-limiting (idiopathic, prostatitis/urethritis, STI, post-procedure, minor vessel). Cancer is uncommon \u2014 reassure after assessment.' },
        { h:'Assess sensibly', t:'History (duration/recurrence, urinary symptoms, haematuria, STI risk, procedures, trauma, anticoagulants, systemic features); BP; urine dip/MSU; STI screen if indicated; examine genitalia; DRE/PSA guided by age/findings.' },
        { h:'Who to investigate/refer', t:'Age \u226540 (esp. persistent/recurrent), associated haematuria, abnormal (hard/nodular) prostate, raised age-adjusted PSA, or systemic red flags \u2192 urology. NG12: 2WW urology for raised PSA or abnormal-feeling prostate.' },
        { h:'Manage the low-risk patient', t:'Treat identified infection; otherwise reassure (self-limiting over weeks); no routine imaging needed in young, low-risk men.' },
        { h:'Address the fear', t:'Cancer fear (often google-fuelled) is the dominant emotion. Reassure honestly and proportionately, grounded in assessment \u2014 neither dismissive nor falsely alarming.' },
        { h:'PSA counselling', t:'If checking PSA, counsel appropriately (transient rises with ejaculation, instrumentation, infection); interpret with age-adjusted thresholds and DRE findings.' },
        { h:'Never do', t:'Never over-investigate a low-risk young man; never dismiss without assessment; never miss the \u226540/persistent/haematuria/abnormal-DRE/raised-PSA patient; never reassure falsely where red flags exist.' },
        { h:'Safety-net & follow-up', t:'Return/investigate if persistent/recurrent, haematuria, urinary/systemic symptoms, or age \u226540; treat any cause; review; reduce anxiety-driven googling.' }
      ]
    }
  };

  /* ============ 205. F2F — Penile curvature: Peyronie's, sex and self-esteem ============ */
  const c205 = {
    id:'peyronies-curvature', title:'"My penis has started bending and it hurts \u2014 I\u2019m too embarrassed to even say it out loud"', type:'video', duration:12,
    meta:{ age:54, sex:'M', setting:'Video consultation \u2014 acquired penile curvature.', system:'Urology / Men\u2019s health \u2014 Peyronie\u2019s disease: function, honesty & self-esteem' },
    brief:'Mr Stephen Hargreaves, 54, has noticed his erect penis has developed a CURVE over a few months, with PAIN on erection and a palpable lump along the shaft; intercourse has become difficult and he is distressed and embarrassed. The examinable task is to recognise PEYRONIE\u2019S DISEASE (acquired penile curvature from fibrous plaque in the tunica albuginea \u2014 active phase: pain, evolving curvature; stable phase: curvature/plaque, often with erectile difficulty), take the history sensitively, examine appropriately, and counsel HONESTLY about its course and options: the active/inflammatory phase may settle and curvature can stabilise; conservative options and that surgery is generally reserved for STABLE disease (after ~12 months) causing functional problems; associations (erectile dysfunction \u2014 screen and address; Dupuytren\u2019s; cardiovascular/diabetes risk); and refer to UROLOGY. Crucially, manage the EMOTIONAL/relationship impact and self-esteem with sensitivity and a non-judgemental, dignity-preserving manner, and screen mood. The skill is creating safety to discuss an embarrassing problem, honest realistic information, and addressing the psychosexual impact \u2014 not brisk reassurance. No NG12 cancer link.',
    script:{
      opening:'"I\u2019m sorry, this is mortifying \u2014 I almost cancelled. Over the last few months my\u2026 my penis has started to bend when it\u2019s erect, there\u2019s a lump I can feel, and it hurts. Sex has become really difficult and honestly it\u2019s knocking me for six. I didn\u2019t know who else to talk to."',
      facts:[
        { topic:'Create safety first', text:'COMMUNICATION CORE \u2014 he is deeply embarrassed and nearly didn\u2019t come. The FIRST task is to create psychological safety: thank him for coming, normalise that this is a recognised medical problem men commonly find hard to raise, and signal a calm, non-judgemental, dignified manner. Without this, the consultation fails regardless of clinical accuracy.' },
        { topic:'Recognise Peyronie\u2019s disease', text:'PEYRONIE\u2019S DISEASE is acquired penile curvature caused by a fibrous PLAQUE in the tunica albuginea. It has two phases: an ACTIVE/inflammatory phase (pain on erection, evolving/worsening curvature, developing plaque \u2014 over months) and a STABLE phase (curvature and palpable plaque settle, pain usually resolves, but erectile function and intercourse may be affected). His months of evolving curvature, pain and a palpable lump fit the active phase.' },
        { topic:'History, examination & associations', text:'Take a sensitive history (onset/progression, pain, degree/direction of curvature, effect on intercourse/penetration, erectile function) and examine (palpate the plaque; assessment of curvature is often best on an erect/photographic basis via urology). Screen ASSOCIATIONS: erectile dysfunction (common and important to address), DUPUYTREN\u2019S contracture and other fibrosing conditions, and cardiovascular/diabetes risk factors (ED and Peyronie\u2019s share vascular associations).' },
        { topic:'Honest counselling on course & options', text:'Counsel HONESTLY: in the active phase the priority is often to allow it to stabilise; pain frequently improves and curvature may partially settle or stabilise over ~12 months. Options span conservative/medical measures and, for STABLE disease (generally after ~12 months) with significant functional problems, surgical correction \u2014 but surgery is not done in the active phase. Set realistic expectations (it may not return fully to "normal", but function can often be restored/improved), and refer to UROLOGY for assessment and management, including any intralesional or surgical options.' },
        { topic:'Address ED and the psychosexual impact', text:'Actively address ERECTILE DYSFUNCTION if present (it commonly coexists and is treatable) and the major PSYCHOSEXUAL/relationship impact: this condition hits self-esteem, mood and relationships hard. Validate the distress, screen mood, involve the partner/relationship sensitively if he wishes, and consider psychosexual support \u2014 the emotional management is as important as the physical.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 beneath the embarrassment are real distress, fear about his sexual future and relationship, possibly shame, and a need to be heard without judgement. The skill is to make it safe to talk, recognise Peyronie\u2019s, give honest realistic information and urology referral, address ED and the emotional impact, and preserve his dignity throughout \u2014 not brisk physical reassurance that skips the psychosexual dimension.' },
      ],
      ice:{
        ideas:'Something is badly wrong with his penis; unsure if it can be fixed; fears for his sex life.',
        concerns:'HIDDEN AGENDA \u2014 embarrassment/shame, distress, impact on intercourse, relationship and self-esteem; fear about his sexual future.',
        expectations:'To be heard without judgement and to know if it can be treated. What he needs: safety to discuss it, recognition of Peyronie\u2019s, honest realistic information and urology referral, ED assessment, and psychosexual/emotional support.'
      },
      cues:['Acquired penile curvature over months + pain on erection + palpable shaft plaque + difficult intercourse \u2014 Peyronie\u2019s disease (active phase).','Screen associations: erectile dysfunction (common, treatable), Dupuytren\u2019s, cardiovascular/diabetes risk; refer urology; surgery only for stable disease (~12 months).','"Mortifying \u2014 I almost cancelled" \u2014 create safety, preserve dignity; address self-esteem/relationship impact and mood, not just the physical.']
    },
    checkpoints:[
      { dom:'rto',   text:'Creates psychological SAFETY first \u2014 thanks him for coming, normalises an embarrassing problem, and maintains a calm, non-judgemental, dignity-preserving manner throughout' },
      { dom:'tasks', text:'Recognises PEYRONIE\u2019S DISEASE (acquired curvature from a tunica plaque, active vs stable phase) from the evolving curvature, pain on erection and palpable plaque' },
      { dom:'tasks', text:'Takes a sensitive history (onset/progression, pain, curvature degree/direction, effect on intercourse, erectile function) and examines appropriately (palpates the plaque), recognising erect/photographic assessment is often via urology' },
      { dom:'tasks', text:'Screens ASSOCIATIONS \u2014 erectile dysfunction (common, treatable), Dupuytren\u2019s contracture, and cardiovascular/diabetes risk factors' },
      { dom:'tasks', text:'Counsels HONESTLY on course and options \u2014 active phase often allowed to stabilise (pain improves, curvature may settle over ~12 months); conservative/medical measures; surgery reserved for STABLE disease with functional problems \u2014 with realistic expectations, and refers to UROLOGY' },
      { dom:'tasks', text:'Addresses ERECTILE DYSFUNCTION if present and the PSYCHOSEXUAL/relationship impact \u2014 validates distress, screens mood, considers partner involvement/psychosexual support' },
      { dom:'rto',   text:'Manages the emotional impact and self-esteem with sensitivity, checks understanding, and ensures he feels heard rather than given brisk physical reassurance' },
      { dom:'gs',    text:'Safety-nets and follows up: urology referral, realistic information on phases/timeline, ED treatment and psychosexual support, mood review, and an open door \u2014 honest, dignified, whole-person care' },
    ],
    worked:[
      { lbl:'Make it safe', txt:'"I\u2019m really glad you didn\u2019t cancel \u2014 that took courage, and there\u2019s absolutely nothing to be embarrassed about. This is a recognised medical condition, I see it, and we\u2019ll talk about it calmly and sort out a plan together."' },
      { lbl:'Name it', txt:'"What you\u2019re describing \u2014 a curve developing over months, pain with erections, and a lump you can feel \u2014 sounds like Peyronie\u2019s disease. It\u2019s scar tissue forming in the wall of the penis, and it\u2019s genuinely common. Knowing what it is usually helps."' },
      { lbl:'Explain the course honestly', txt:'"It tends to go through two stages: an early phase, where you are now, with pain and the curve changing; and a later, settled phase. The pain often eases and the curve usually stabilises. We don\u2019t rush to fix it surgically early \u2014 we let it settle, generally about a year, before considering an operation if it\u2019s still causing problems."' },
      { lbl:'Screen ED + associations', txt:'"Can I ask honestly \u2014 how are erections themselves, firmness-wise? \u2026 That often goes hand in hand with this and is very treatable, so we\u2019ll address it. I\u2019ll also check a couple of things like your blood pressure and sugar, which are linked."' },
      { lbl:'Refer + realistic hope', txt:'"I\u2019m going to refer you to the urology team who specialise in this. I\u2019ll be honest \u2014 it may not go back to exactly as before, but there\u2019s a lot that can be done to improve function and intercourse, including treatments and, if needed later, surgery."' },
      { lbl:'Address the impact', txt:'"This clearly hits more than the physical \u2014 your confidence, maybe your relationship. That matters just as much, and it\u2019s normal to feel low about it. If it would help, we can involve your partner, and there\u2019s psychosexual support too. How are you doing in yourself with all this?"' },
    ],
    learning:'Peyronie\u2019s disease is acquired penile curvature caused by a fibrous PLAQUE in the tunica albuginea, with an ACTIVE/inflammatory phase (pain on erection, evolving curvature, developing plaque over months) and a STABLE phase (curvature/plaque settle, pain usually resolves, but erectile function and intercourse may be affected). The first and most important task is to create psychological SAFETY for a deeply embarrassed patient \u2014 thank him for coming, normalise a problem men commonly find hard to raise, and maintain a calm, non-judgemental, dignity-preserving manner \u2014 because the consultation fails without it. Recognise the condition from the evolving curvature, pain and palpable plaque, take a sensitive history (onset/progression, pain, curvature degree/direction, effect on intercourse, erectile function) and examine appropriately (erect/photographic assessment is often via urology), and screen ASSOCIATIONS \u2014 erectile dysfunction (common and treatable), Dupuytren\u2019s contracture, and cardiovascular/diabetes risk. Counsel HONESTLY on course and options: in the active phase the priority is usually to let it stabilise (pain often improves, curvature may partially settle over ~12 months); conservative/medical measures exist, and surgery is generally reserved for STABLE disease (after ~12 months) with significant functional problems \u2014 not the active phase \u2014 with realistic expectations (function can often be improved even if not fully "normal"), referring to UROLOGY. Crucially, address coexisting ERECTILE DYSFUNCTION and the major PSYCHOSEXUAL/relationship and self-esteem impact: validate the distress, screen mood, consider partner involvement and psychosexual support, and preserve dignity throughout \u2014 the emotional management matters as much as the physical, and brisk physical reassurance that skips it is a failure. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Peyronie\u2019s disease (EAU/BAUS) \u00b7 active vs stable phase \u00b7 associated ED & cardiometabolic risk \u00b7 psychosexual care (no NG12 link)',
      points:[
        { h:'Create safety first', t:'For an embarrassed patient, normalise the problem and maintain a calm, non-judgemental, dignified manner \u2014 essential for the consultation to succeed.' },
        { h:'Recognise Peyronie\u2019s', t:'Acquired curvature from a tunica albuginea plaque. Active phase: pain, evolving curvature, developing plaque. Stable phase: curvature/plaque settle, pain resolves, function may be affected.' },
        { h:'History & exam', t:'Onset/progression, pain, curvature degree/direction, effect on intercourse, erectile function; palpate the plaque; erect/photographic curvature assessment often via urology.' },
        { h:'Associations', t:'Erectile dysfunction (common, treatable), Dupuytren\u2019s contracture and other fibroses, and shared cardiovascular/diabetes risk \u2014 screen and address.' },
        { h:'Course & options', t:'Active phase: allow stabilisation (pain often improves, curvature may settle ~12 months). Conservative/medical measures; surgery reserved for stable disease with functional problems (after ~12 months), not the active phase. Refer urology.' },
        { h:'Psychosexual impact', t:'Major effect on self-esteem, mood and relationships. Validate distress, screen mood, involve partner if wished, consider psychosexual support \u2014 as important as the physical management.' },
        { h:'Never do', t:'Never rush or dismiss the embarrassed patient; never offer surgery in the active phase; never miss coexisting ED or cardiometabolic risk; never skip the psychosexual/emotional dimension; never give false "it\u2019ll be fine" reassurance.' },
        { h:'Safety-net & follow-up', t:'Urology referral; realistic phase/timeline information; ED treatment and psychosexual support; mood review; open door for the relationship/emotional impact.' }
      ]
    }
  };

  /* ============ 206. F2F — Abnormal semen analysis: fertility news to one half of a couple ============ */
  const c206 = {
    id:'abnormal-semen-analysis', title:'"My sperm test came back abnormal \u2014 does this mean we\u2019ll never have kids, and is it my fault?"', type:'video', duration:12,
    meta:{ age:34, sex:'M', setting:'Video consultation \u2014 results of a semen analysis in a couple trying to conceive.', system:'Men\u2019s health / Fertility \u2014 abnormal semen analysis: interpretation, the couple & testicular awareness' },
    brief:'Mr Tom Whitfield, 34, and his partner have been trying to conceive for ~14 months; his SEMEN ANALYSIS shows oligozoospermia (low count) with reduced motility. He attends alone, anxious and blaming himself. The examinable task is to interpret and communicate an abnormal semen analysis sensitively: explain that a single abnormal sample should be CONFIRMED with a REPEAT (after ~3 months, given the ~72-day sperm cycle) before conclusions; take a male-factor history and address MODIFIABLE factors (smoking, alcohol, recreational drugs/anabolic steroids, heat, obesity, medications, timing/frequency of intercourse, occupational exposures); EXAMINE (testicular volume, varicocele, absent vas, signs of hypogonadism) and \u2014 importantly \u2014 use the opportunity for TESTICULAR awareness (examine for a mass; subfertile men have a slightly higher testicular-cancer risk; NICE NG12: 2WW urology for a non-painful testicular enlargement/mass); arrange relevant tests (hormones \u2014 FSH/LH/testosterone, etc.) and refer to FERTILITY services as a COUPLE (fertility is a couple issue \u2014 his partner needs assessment too). Handle the BLAME/guilt and relationship/emotional impact with sensitivity, and avoid false despair (many options exist, incl. lifestyle, treatment, IUI/IVF/ICSI). The skill is delivering fertility news to one half of a couple compassionately and accurately.',
    script:{
      opening:'"I came in on my own \u2014 my partner\u2019s at work, and honestly I wanted to hear this by myself first. The sperm test came back abnormal. Does that mean it\u2019s my fault we haven\u2019t got pregnant? Does it mean we\u2019ll never have kids? I feel like I\u2019ve let her down."',
      facts:[
        { topic:'One abnormal sample is not a diagnosis \u2014 repeat it', text:'CORE \u2014 a single abnormal semen analysis should be CONFIRMED with a REPEAT test before drawing conclusions, as sperm parameters vary considerably and are affected by recent illness/fever, abstinence period and collection. Because spermatogenesis takes ~72 days (about 3 months), the repeat is usually arranged after ~3 months (sooner if grossly abnormal/azoospermia). Avoid catastrophic conclusions from one result.' },
        { topic:'Address modifiable factors', text:'Take a male-factor history and identify MODIFIABLE contributors that can improve sperm quality: smoking, alcohol, recreational drugs (notably ANABOLIC STEROIDS, which suppress sperm production), obesity, scrotal HEAT (hot baths, tight clothing, laptops), medications, occupational/chemical exposures, and the timing/frequency of intercourse (regular intercourse every 2\u20133 days through the cycle). Optimising these and giving it time can meaningfully improve a borderline result.' },
        { topic:'Examine \u2014 and the testicular-cancer opportunity', text:'EXAMINE: testicular volume, a VARICOCELE, absence of the vas deferens, signs of hypogonadism/secondary sexual characteristics \u2014 and critically PALPATE FOR A TESTICULAR MASS. Subfertile men have a slightly increased risk of TESTICULAR CANCER, and this is a key opportunity to examine; NICE NG12 advises a 2-week-wait urology referral for a non-painful enlargement or mass/change in a testis. Do not miss this while focused on fertility.' },
        { topic:'Investigate and refer the COUPLE', text:'Arrange relevant tests (hormonal profile \u2014 FSH, LH, testosterone \u00b1 prolactin; consider genetic/specialist tests if severe oligo-/azoospermia) and refer to FERTILITY/andrology services. CRUCIAL framing \u2014 fertility is a COUPLE issue: his partner must be assessed in parallel (ovulation, tubal/uterine factors), and a male abnormality does not mean the cause is solely his. Refer them as a couple.' },
        { topic:'Avoid false despair \u2014 give realistic hope', text:'An abnormal result does NOT mean "never have kids". Many men with low counts conceive naturally, especially after optimising modifiable factors; and assisted options exist \u2014 intrauterine insemination, IVF, and ICSI (which can achieve fertilisation with very few sperm). Set realistic, hopeful expectations rather than catastrophe, while being honest about uncertainty and the need for further assessment.' },
        { topic:'The hidden agenda \u2014 blame and the couple', text:'HIDDEN AGENDA \u2014 he is consumed by SELF-BLAME and guilt ("my fault", "let her down") and chose to hear it alone. The skill is to address the blame compassionately (fertility issues are common, often multifactorial, and not a personal failing or a question of fault), correct the "never" catastrophe, manage the emotional and relationship impact sensitively (encourage involving his partner, as they face this together), and deliver accurate information \u2014 not cold facts or false reassurance.' },
      ],
      ice:{
        ideas:'The abnormal result means it\u2019s his fault and they\u2019ll never have children.',
        concerns:'HIDDEN AGENDA \u2014 self-blame and guilt, fear of letting his partner down, fear of permanent infertility; wanted to face it alone first.',
        expectations:'To know if it\u2019s his fault and whether children are possible. What he needs: explanation that one result needs repeating, modifiable factors, examination (incl. testicular check), couple-based referral, and compassionate handling of blame with realistic hope.'
      },
      cues:['Single abnormal semen analysis (low count/motility) after ~14 months trying \u2014 confirm with a REPEAT (~3 months, 72-day cycle) before conclusions.','Address modifiable factors (smoking/alcohol/anabolic steroids/heat/obesity), examine (varicocele, volume) AND palpate for a testicular mass (NG12 2WW; subfertile men higher testicular-cancer risk).','"Is it my fault / will we never have kids?" \u2014 fertility is a COUPLE issue; address blame, refer both, give realistic hope (lifestyle, IUI/IVF/ICSI), not despair.']
    },
    checkpoints:[
      { dom:'tasks', text:'Explains that a single abnormal semen analysis must be CONFIRMED with a REPEAT (usually after ~3 months, given the ~72-day sperm cycle; sooner if grossly abnormal) before drawing conclusions \u2014 avoiding catastrophic interpretation of one result' },
      { dom:'tasks', text:'Takes a male-factor history and addresses MODIFIABLE factors (smoking, alcohol, anabolic steroids/recreational drugs, obesity, scrotal heat, medications, occupational exposures, intercourse timing/frequency)' },
      { dom:'tasks', text:'EXAMINES (testicular volume, varicocele, absent vas, hypogonadism signs) and PALPATES FOR A TESTICULAR MASS \u2014 recognising subfertile men\u2019s higher testicular-cancer risk and the NG12 2WW urology pathway for a non-painful testicular mass/enlargement' },
      { dom:'tasks', text:'Arranges relevant tests (FSH/LH/testosterone \u00b1 prolactin, genetic/specialist if severe) and refers to FERTILITY/andrology services' },
      { dom:'tasks', text:'Frames fertility as a COUPLE issue \u2014 ensures his partner is assessed in parallel, and that a male abnormality does not mean the cause is solely his \u2014 referring them as a couple' },
      { dom:'tasks', text:'Avoids false despair \u2014 explains that abnormal results do not mean "never", that optimisation may improve natural conception, and that assisted options (IUI, IVF, ICSI) exist \u2014 with realistic, honest hope' },
      { dom:'rto',   text:'Addresses the SELF-BLAME/guilt compassionately (fertility issues are common and not a personal failing or matter of fault), manages the emotional/relationship impact, and encourages involving his partner as they face it together' },
      { dom:'gs',    text:'Safety-nets and follows up: the repeat test and timeline, lifestyle optimisation, examination/testicular safety-netting and any 2WW referral, couple-based fertility referral, hormone results, and emotional support \u2014 accurate, compassionate fertility care, not cold facts or false reassurance' },
    ],
    worked:[
      { lbl:'Address blame first', txt:'"Before anything clinical \u2014 please hear this: this is not your fault, and you haven\u2019t let anyone down. Fertility difficulties are really common, they\u2019re usually nobody\u2019s \u2018fault\u2019, and they\u2019re often about the couple together, not one person. I\u2019m really glad you came."' },
      { lbl:'One test isn\u2019t the verdict', txt:'"Crucially, one sperm test doesn\u2019t give us the full picture \u2014 the numbers vary a lot, and things like a recent illness can affect it. Sperm take about three months to be made, so we repeat the test after a few months before drawing any firm conclusions."' },
      { lbl:'Modifiable factors + exam', txt:'"There\u2019s plenty we can work on that genuinely improves things \u2014 smoking, alcohol, weight, keeping the area cool, and any supplements or gym products like steroids, which really affect sperm. And I\u2019d like to examine you \u2014 it\u2019s a good chance to check the testicles are healthy too."' },
      { lbl:'Testicular safety-net', txt:'"While I examine you I\u2019m checking for any lumps \u2014 men with lower counts have a slightly higher chance of testicular problems, so it\u2019s worth being thorough. If I ever found something, I\u2019d refer you quickly, but that\u2019s being careful, not expecting it."' },
      { lbl:'Couple + realistic hope', txt:'"Two important things: I\u2019ll refer you both to fertility services, because your partner needs checking too \u2014 this is a team effort. And an abnormal result absolutely does NOT mean never: many couples conceive after some changes, and there are treatments like IVF and ICSI that work even with low numbers."' },
      { lbl:'Emotional support', txt:'"This is a lot to carry, especially alone. Would it help to bring your partner next time? You\u2019re in this together, and facing it as a couple usually helps. How are you feeling in yourself with all this?"' },
    ],
    learning:'An abnormal semen analysis must be interpreted and communicated carefully. A single abnormal sample should be CONFIRMED with a REPEAT before drawing conclusions \u2014 sperm parameters vary widely and are affected by recent illness/fever, abstinence period and collection \u2014 and because spermatogenesis takes about 72 days, the repeat is usually arranged after ~3 months (sooner if grossly abnormal/azoospermic). Take a male-factor history and address MODIFIABLE contributors (smoking, alcohol, recreational drugs \u2014 notably anabolic steroids, which suppress sperm production \u2014 obesity, scrotal heat, medications, occupational exposures, and intercourse timing/frequency), which can meaningfully improve borderline results. EXAMINE testicular volume, varicocele, absent vas and hypogonadism signs, and \u2014 critically \u2014 PALPATE FOR A TESTICULAR MASS, because subfertile men have a slightly increased testicular-cancer risk and NICE NG12 advises a 2-week-wait urology referral for a non-painful testicular enlargement or mass; do not miss this while focused on fertility. Arrange hormonal tests (FSH, LH, testosterone \u00b1 prolactin; genetic/specialist tests if severe) and refer to fertility/andrology services, framing fertility as a COUPLE issue \u2014 the partner must be assessed in parallel and a male abnormality does not mean the cause is solely his. Avoid false despair: abnormal results do not mean "never", many men with low counts conceive (especially after optimisation), and assisted options (IUI, IVF, ICSI \u2014 which can fertilise with very few sperm) exist. The hidden agenda is self-blame and guilt, with the patient choosing to hear it alone; address the blame compassionately (fertility issues are common, multifactorial and not a personal failing or matter of fault), correct the catastrophe, manage the emotional/relationship impact, encourage involving the partner, and deliver accurate information \u2014 neither cold facts nor false reassurance.',
    knowledge:{
      guideline:'NICE CG156 fertility \u00b7 semen analysis interpretation/repeat \u00b7 NICE NG12 (testicular cancer 2WW) \u00b7 couple-based fertility care',
      points:[
        { h:'Confirm with a repeat', t:'A single abnormal semen analysis should be repeated before conclusions \u2014 parameters vary and are affected by illness/abstinence/collection. Spermatogenesis ~72 days, so repeat after ~3 months (sooner if grossly abnormal).' },
        { h:'Modifiable factors', t:'Smoking, alcohol, anabolic steroids/recreational drugs, obesity, scrotal heat, medications, occupational exposures, intercourse timing/frequency (every 2\u20133 days). Optimising these can improve sperm quality.' },
        { h:'Examine + testicular cancer', t:'Assess testicular volume, varicocele, absent vas, hypogonadism signs, and palpate for a mass. Subfertile men have higher testicular-cancer risk; NG12: 2WW urology for non-painful testicular mass/enlargement.' },
        { h:'Investigate & refer', t:'Hormones (FSH, LH, testosterone \u00b1 prolactin); genetic/specialist tests if severe oligo-/azoospermia; refer to fertility/andrology.' },
        { h:'Fertility is a couple issue', t:'Assess the partner in parallel; a male abnormality does not mean the cause is solely male. Refer and manage as a couple.' },
        { h:'Realistic hope', t:'Abnormal results don\u2019t mean "never": many conceive after optimisation; assisted options (IUI, IVF, ICSI) work even with low counts. Honest, hopeful framing, not despair.' },
        { h:'Never do', t:'Never diagnose from one sample; never miss the testicular examination/mass; never frame fertility as solely the man\u2019s problem or "his fault"; never induce despair or give false reassurance; never ignore the emotional/couple dimension.' },
        { h:'Safety-net & follow-up', t:'Repeat test and timeline; lifestyle optimisation; testicular safety-netting/2WW if a mass; couple-based fertility referral; hormone results; emotional support and partner involvement.' }
      ]
    }
  };

  /* ============ 207. VIDEO — Tiredness in a young man: testosterone myths vs real causes ============ */
  const c207 = {
    id:'tiredness-testosterone-myths', title:'"I\u2019m knackered and my gym mate says it\u2019s low testosterone \u2014 can I just get a T boost?"', type:'video', duration:12,
    meta:{ age:32, sex:'M', setting:'Video consultation \u2014 fatigue with a request for testosterone.', system:'Men\u2019s health / Endocrine \u2014 fatigue & testosterone: myths, real causes & safe assessment' },
    brief:'Mr Ryan Forsythe, 32, gym-goer, feels persistently TIRED with low energy and reduced libido, and \u2014 influenced by online "low-T" content and a gym friend \u2014 wants TESTOSTERONE ("a T boost") to fix it. The examinable task is to resist the "just give me testosterone" request and instead: take a structured FATIGUE history and screen real causes (sleep/insomnia/OSA, mood/depression, stress, diet, overtraining, alcohol, anaemia, thyroid, diabetes, etc. \u2014 as in any TATT), specifically assess for genuine HYPOGONADISM symptoms and confirm it CORRECTLY if suspected (a fasting MORNING total testosterone, repeated if low, with LH/FSH, prolactin, SHBG \u2014 not a one-off random level), and \u2014 critically \u2014 counsel the MYTHS and HARMS: testosterone is NOT a fatigue tonic; inappropriate testosterone (and especially ANABOLIC STEROID use from gyms/online) suppresses the body\u2019s own production, causes INFERTILITY (impaired spermatogenesis), testicular atrophy, polycythaemia, mood/cardiovascular effects, and is not a shortcut. Explore whether he is already using gym/online supplements or steroids (ask non-judgementally). Manage the actual cause, and only consider testosterone replacement if genuine, confirmed hypogonadism (ideally specialist/endocrine input). The hidden agenda is fatigue + body-image/online influence; the skill is honest education without dismissiveness. No NG12 cancer link.',
    script:{
      opening:'"Doc, I\u2019m just constantly knackered \u2014 no energy, my sex drive\u2019s dropped, my gym gains have stalled. My mate at the gym reckons it\u2019s low testosterone, and I\u2019ve seen loads online about it. Can you just test it and give me a testosterone boost? Or honestly, where\u2019s the harm in just trying some?"',
      facts:[
        { topic:'Don\u2019t jump to testosterone \u2014 work the fatigue up', text:'CORE \u2014 fatigue with low libido has MANY causes, and testosterone deficiency is an uncommon and over-attributed one in a young man. Resist "just test it and give me a boost". Take a structured FATIGUE history and screen the real causes: poor SLEEP/insomnia/OSA, MOOD/depression and stress, diet, overtraining/under-recovery, alcohol/drugs, anaemia, thyroid disease, diabetes, and lifestyle \u2014 as for any "tired all the time" presentation. The cause is far more often one of these than low testosterone.' },
        { topic:'Assess genuine hypogonadism \u2014 and test correctly', text:'IF symptoms genuinely suggest hypogonadism (low libido, erectile dysfunction, reduced morning erections, low mood/energy, reduced muscle mass, gynaecomastia, small testes), confirm it CORRECTLY: a FASTING MORNING (≈8\u201311am) TOTAL TESTOSTERONE, REPEATED if low (levels vary, fall with acute illness and through the day), together with LH, FSH, SHBG (\u00b1 calculated free testosterone) and PROLACTIN \u2014 not a single random level. A correctly low result then needs explanation (primary vs secondary hypogonadism) and usually specialist/endocrine input.' },
        { topic:'Bust the myth \u2014 testosterone is not a tonic', text:'CRITICAL \u2014 testosterone is NOT a fatigue/energy/performance tonic for men with normal levels, and "where\u2019s the harm in trying" is a dangerous misconception. Giving testosterone to a man who is not truly deficient (or self-sourced anabolic steroids) is harmful, not a shortcut to feeling better or bigger.' },
        { topic:'Spell out the harms', text:'Inappropriate exogenous testosterone / anabolic steroids: SUPPRESS the body\u2019s own testosterone and sperm production \u2014 causing INFERTILITY (often the most underestimated harm in young men) and TESTICULAR ATROPHY \u2014 and cause POLYCYTHAEMIA (thrombosis/stroke risk), acne, gynaecomastia, mood/aggression changes, hair loss, and cardiovascular effects; gym/online "products" are unregulated and may be contaminated. These harms must be spelled out plainly, especially the fertility risk.' },
        { topic:'Ask about gym/online steroid use', text:'Ask NON-JUDGEMENTALLY whether he is already using \u2014 or considering \u2014 gym/online testosterone, anabolic steroids, SARMs or "boosters", as this is common in gym culture and may itself be CAUSING his symptoms (steroid-induced hypogonadism after cycles) and is important for safe management and harm reduction. Many men don\u2019t volunteer this.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his request is driven by genuine fatigue/low libido AND online/gym BODY-IMAGE influence and a wish for a quick fix; he may already be using or be tempted by gym products. The skill is to take the fatigue seriously, work it up properly, test testosterone correctly only if indicated, bust the myth and spell out the harms (especially infertility) honestly without being dismissive or preachy, ask about steroid use, and treat the actual cause \u2014 not simply hand over testosterone.' },
      ],
      ice:{
        ideas:'His tiredness/low libido is "low testosterone" (per a gym friend/online); a testosterone boost will fix it; "no harm in trying".',
        concerns:'HIDDEN AGENDA \u2014 fatigue and low libido genuinely bothering him, plus body-image/online influence and a wish for a quick fix; possibly already using gym products.',
        expectations:'A testosterone test and a "boost". What he needs: a proper fatigue work-up, correct testosterone testing only if indicated, honest myth-busting and harm information (esp. infertility), a non-judgemental steroid-use enquiry, and treatment of the real cause.'
      },
      cues:['Fatigue + low libido in a young man, wanting "a T boost" from online/gym influence \u2014 work up the many real causes first; low-T is over-attributed.','If hypogonadism suspected, test correctly: fasting MORNING total testosterone, repeated if low, + LH/FSH/SHBG/prolactin \u2014 not a one-off random level.','Bust the myth: testosterone is not a tonic; inappropriate T/anabolic steroids cause INFERTILITY, testicular atrophy, polycythaemia \u2014 ask non-judgementally about gym/online use.']
    },
    checkpoints:[
      { dom:'tasks', text:'Resists the "just test it and give me testosterone" request and works up the FATIGUE structurally \u2014 screening sleep/OSA, mood/depression, stress, diet, overtraining, alcohol/drugs, anaemia, thyroid, diabetes \u2014 as for any TATT' },
      { dom:'tasks', text:'Assesses for genuine HYPOGONADISM symptoms and, IF indicated, tests CORRECTLY \u2014 a fasting MORNING total testosterone, REPEATED if low, with LH, FSH, SHBG \u00b1 free testosterone and prolactin \u2014 not a single random level' },
      { dom:'tasks', text:'BUSTS THE MYTH that testosterone is a fatigue/energy/performance tonic, and that "where\u2019s the harm in trying" is safe \u2014 it is not for men with normal levels' },
      { dom:'tasks', text:'Spells out the HARMS of inappropriate testosterone/anabolic steroids \u2014 suppression of endogenous production, INFERTILITY and testicular atrophy, polycythaemia/thrombosis risk, gynaecomastia, mood/cardiovascular effects, unregulated products \u2014 especially the fertility risk' },
      { dom:'tasks', text:'Asks NON-JUDGEMENTALLY about current/considered gym/online testosterone, anabolic steroid or "booster"/SARM use \u2014 recognising it may be causing his symptoms and matters for safe management/harm reduction' },
      { dom:'rto',   text:'Takes the fatigue and low libido seriously, reads the body-image/online influence, and educates honestly WITHOUT being dismissive or preachy \u2014 not simply refusing or simply complying' },
      { dom:'tasks', text:'Manages the ACTUAL cause found, and only considers testosterone replacement for genuine, correctly-confirmed hypogonadism (usually with specialist/endocrine input)' },
      { dom:'gs',    text:'Safety-nets and follows up: appropriate fatigue investigations and review, correct testosterone testing only if indicated, harm-reduction/steroid-cessation support if relevant, treatment of the real cause, and review \u2014 honest education, not handing over testosterone' },
    ],
    worked:[
      { lbl:'Take it seriously, reframe', txt:'"Being constantly knackered with a low sex drive is genuinely worth sorting \u2014 so I do want to help. But I\u2019d be doing you a disservice if I just tested testosterone and handed you a boost, because in a young man that\u2019s actually an uncommon cause, and there are several more likely ones we\u2019d miss."' },
      { lbl:'Work up the real causes', txt:'"Let me ask properly: how\u2019s your sleep \u2014 snoring, waking unrefreshed? Your mood and stress? Drinking, diet, how hard you\u2019re training and recovering? \u2026 I\u2019ll also do bloods \u2014 thyroid, blood count, sugar \u2014 because these are the usual culprits for this kind of tiredness."' },
      { lbl:'Test T correctly if needed', txt:'"If your symptoms point to genuinely low testosterone, we test it properly \u2014 a morning, fasting sample, repeated if it\u2019s low, plus some related hormones \u2014 not a random one-off, because levels swing about and a single low reading can mislead."' },
      { lbl:'Bust the myth honestly', txt:'"Here\u2019s the honest bit: testosterone isn\u2019t an energy tonic. If your level is normal, taking it won\u2019t fix the tiredness \u2014 and \u2018no harm in trying\u2019 really isn\u2019t true here."' },
      { lbl:'Spell out the harms', txt:'"Taking testosterone or gym steroids when you don\u2019t need them shuts down your own production \u2014 which can make you INFERTILE and shrink the testicles \u2014 thickens the blood and raises clot and stroke risk, and the gym/online stuff is unregulated. The fertility one catches a lot of young men out."' },
      { lbl:'Ask + support', txt:'"Can I ask without any judgement \u2014 are you taking, or thinking about, any gym or online testosterone, steroids or boosters? \u2026 That\u2019s really useful to know, because it can actually cause exactly these symptoms, and I can help you do this safely. Let\u2019s find and fix the real reason you\u2019re so tired."' },
    ],
    learning:'Fatigue with low libido in a young man has many causes, and testosterone deficiency is an uncommon and heavily over-attributed one \u2014 so resist the "just test it and give me a T boost" request (driven by online "low-T" content and gym culture) and work the fatigue up structurally, screening sleep/insomnia/OSA, mood/depression and stress, diet, overtraining/under-recovery, alcohol/drugs, anaemia, thyroid disease and diabetes, as for any "tired all the time" presentation. If symptoms genuinely suggest HYPOGONADISM (low libido, erectile dysfunction, reduced morning erections, low energy/mood, reduced muscle mass, gynaecomastia, small testes), confirm it CORRECTLY: a fasting MORNING (≈8\u201311am) total testosterone, REPEATED if low (levels vary and fall with acute illness and through the day), with LH, FSH, SHBG (\u00b1 calculated free testosterone) and prolactin \u2014 not a single random level \u2014 with a confirmed low result needing explanation (primary vs secondary) and usually specialist/endocrine input. Crucially, bust the MYTH that testosterone is a fatigue/energy/performance tonic and that "where\u2019s the harm in trying" is safe: giving testosterone to a man with normal levels (or self-sourced anabolic steroids) is harmful, suppressing endogenous testosterone and sperm production to cause INFERTILITY (the most underestimated harm in young men) and testicular atrophy, plus polycythaemia (thrombosis/stroke risk), gynaecomastia, mood/cardiovascular effects, with unregulated, potentially contaminated gym/online products. Ask NON-JUDGEMENTALLY about current/considered gym or online testosterone, anabolic steroid, "booster" or SARM use, as it is common, may itself be causing his symptoms (post-cycle hypogonadism), and matters for safe management and harm reduction. Take the fatigue and low libido seriously, educate honestly without being dismissive or preachy, treat the actual cause, and reserve testosterone replacement for genuine, correctly-confirmed hypogonadism with specialist input. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Male hypogonadism assessment (BSSM) \u00b7 testosterone testing (morning, fasting, repeated + LH/FSH/SHBG/prolactin) \u00b7 anabolic-steroid harms \u00b7 fatigue work-up',
      points:[
        { h:'Work up fatigue first', t:'Fatigue + low libido has many causes; low testosterone is uncommon/over-attributed in young men. Screen sleep/OSA, mood, stress, diet, overtraining, alcohol/drugs, anaemia, thyroid, diabetes before attributing to testosterone.' },
        { h:'Test testosterone correctly', t:'If hypogonadism suspected: fasting morning total testosterone, repeated if low, with LH, FSH, SHBG \u00b1 free testosterone and prolactin \u2014 not a single random level. Confirmed low \u2192 explain (primary/secondary), usually specialist input.' },
        { h:'Testosterone is not a tonic', t:'For men with normal levels, testosterone does not fix fatigue/energy/performance, and "no harm in trying" is false \u2014 it is harmful.' },
        { h:'Spell out the harms', t:'Inappropriate testosterone/anabolic steroids suppress endogenous production \u2192 infertility and testicular atrophy; polycythaemia (thrombosis/stroke), gynaecomastia, mood/cardiovascular effects; unregulated gym/online products. Emphasise the fertility risk.' },
        { h:'Ask about steroid use', t:'Non-judgementally ask about current/considered gym/online testosterone, anabolic steroids, SARMs or boosters \u2014 common, may be causing the symptoms (post-cycle hypogonadism), and key for harm reduction.' },
        { h:'Treat the real cause', t:'Manage the actual cause found; reserve testosterone replacement for genuine, correctly-confirmed hypogonadism, usually with endocrine input.' },
        { h:'Never do', t:'Never give testosterone for fatigue without confirmed deficiency; never test with a single random level; never omit the harm/infertility counselling; never skip the non-judgemental steroid enquiry; never be dismissive or preachy.' },
        { h:'Safety-net & follow-up', t:'Appropriate fatigue investigations and review; correct testosterone testing only if indicated; harm-reduction/steroid-cessation support; treat the real cause; specialist referral for confirmed hypogonadism.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c204, c205, c206, c207);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'haematospermia': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Daniel Ofori', age: '33 years \u00b7 male',
        pmh: ['Blood in ejaculate once or twice over a week', 'No urinary symptoms, haematuria, trauma, fever or weight loss', 'Convinced it is cancer (googling)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"There was blood when I ejaculated \u2014 I\u2019ve convinced myself it\u2019s cancer."',
        reason: 'Video consultation \u2014 blood in the semen.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Normalise + take seriously', d:'Reduce embarrassment; assess properly to give an honest answer, not google\u2019s worst case.' },
        { t:'2\u20135',  h:'Assess', d:'Urinary symptoms, haematuria, STI risk, procedures, trauma, systemic features; BP, urine dip, examine genitalia.' },
        { t:'5\u20137',  h:'Reassure proportionately', d:'Young + no red flags \u2192 almost always benign/self-limiting; cancer uncommon at 33.' },
        { t:'7\u20139',  h:'Treat any cause', d:'Treat infection if found; otherwise typically self-limiting over weeks.' },
        { t:'9\u201312', h:'Threshold + safety-net', d:'Investigate/refer if \u226540, persistent/recurrent, haematuria, abnormal DRE/raised PSA (NG12 2WW); reduce googling.' }
      ],
      wordPics: {
        fail: 'Either over-investigates a low-risk young man, or dismisses without any assessment; fails to set the threshold for when it WOULD matter; leaves the cancer fear unaddressed.',
        pass: 'Assesses sensibly, reassures the young/low-risk patient proportionately, and safety-nets the red flags.',
        exc:  'Normalises and assesses (urine, exam, red-flag screen), reassures proportionately that it is almost always benign in the young, treats any cause, clearly sets the \u226540/persistent/haematuria/abnormal-DRE thresholds (NG12 prostate), and addresses the cancer fear honestly.'
      },
      avoid: [
        { dont:'"Blood in the semen \u2014 we\u2019d better do lots of tests and a 2-week cancer referral to be safe."', instead:'"In a man of 33 with no other symptoms this is almost always harmless \u2014 let me examine you and test your urine, and I\u2019ll explain when it would need more."', why:'Over-investigating a low-risk young man causes harm and anxiety and misuses the 2WW pathway.' },
        { dont:'"It\u2019s nothing, don\u2019t worry about it" (without assessing).', instead:'"Let me check a few things first so my reassurance actually means something \u2014 then I can be confident."', why:'Dismissing without assessment risks missing the occasional red-flag case and doesn\u2019t land as genuine reassurance.' },
        { dont:'(No threshold) failing to say when it would matter.', instead:'"It would need looking into if it persists, you see blood in your wee, or in older men \u2014 but none of that applies to you now."', why:'Without a clear safety-net threshold, the older/persistent/red-flag case can be missed later.' }
      ]
    },

    'peyronies-curvature': {
      ceg: ['Gender, reproductive & sexual health', 'Mental health & addiction'],
      stem: {
        name: 'Stephen Hargreaves', age: '54 years \u00b7 male',
        pmh: ['Acquired penile curvature over months + pain on erection + palpable shaft plaque', 'Intercourse difficult; distressed/embarrassed', '?erectile dysfunction; cardiometabolic risk to check'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My penis has started bending and it hurts \u2014 I almost cancelled, it\u2019s mortifying."',
        reason: 'Video consultation \u2014 acquired penile curvature.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Create safety', d:'Thank him; normalise; calm, non-judgemental, dignified manner \u2014 essential before anything clinical.' },
        { t:'2\u20134',  h:'Recognise Peyronie\u2019s', d:'Plaque + pain + evolving curve = active-phase Peyronie\u2019s; explain the two phases.' },
        { t:'4\u20137',  h:'History/exam + associations', d:'Curvature/pain/intercourse/erectile function; palpate plaque; screen ED, Dupuytren\u2019s, CV/diabetes risk.' },
        { t:'7\u20139',  h:'Honest course + refer', d:'Let active phase stabilise (~12 months); surgery only stable disease; realistic expectations; urology referral.' },
        { t:'9\u201312', h:'ED + psychosexual', d:'Treat ED; validate self-esteem/relationship impact; screen mood; partner/psychosexual support.' }
      ],
      wordPics: {
        fail: 'Brisk/embarrassed handling; offers surgery in the active phase or false "it\u2019ll be fine"; ignores ED and the psychosexual/self-esteem impact.',
        pass: 'Creates safety, recognises Peyronie\u2019s, gives honest phase-based information and urology referral, and addresses ED/mood.',
        exc:  'Creates psychological safety, recognises active-phase Peyronie\u2019s, takes a sensitive history/exam and screens associations (ED, Dupuytren\u2019s, cardiometabolic), counsels honestly on phases/timeline and that surgery awaits stable disease, refers to urology, and addresses ED and the psychosexual/self-esteem impact with dignity.'
      },
      avoid: [
        { dont:'(Brisk) "It\u2019s Peyronie\u2019s \u2014 I\u2019ll refer you to urology, next." ', instead:'"Thank you for raising something so hard to talk about \u2014 let\u2019s go through it calmly; this is common and there\u2019s a lot we can do."', why:'Failing to create safety and address the emotional impact fails an embarrassed, distressed patient.' },
        { dont:'"They can just operate to straighten it."', instead:'"Surgery is generally only once it\u2019s settled, around a year on \u2014 in the painful, changing phase we let it stabilise first."', why:'Operating in the active phase is wrong; honest phase-based counselling is needed.' },
        { dont:'(Ignoring ED/mood) focusing only on the curve.', instead:'"How are erections themselves, and how\u2019s this affecting you and your relationship? Both matter and are treatable."', why:'Missing coexisting ED and the psychosexual/self-esteem impact neglects core management.' }
      ]
    },

    'abnormal-semen-analysis': {
      ceg: ['Gender, reproductive & sexual health', 'Long-term conditions & cancer'],
      stem: {
        name: 'Tom Whitfield', age: '34 years \u00b7 male',
        pmh: ['Trying to conceive ~14 months; semen analysis: low count + reduced motility (single sample)', 'Attends alone; self-blaming', 'Modifiable factors + testicular exam to assess'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My sperm test came back abnormal \u2014 is it my fault, will we never have kids?"',
        reason: 'Video consultation \u2014 results of a semen analysis.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Address blame', d:'Not his fault; fertility is common, multifactorial, a couple issue; glad he came.' },
        { t:'2\u20134',  h:'One test isn\u2019t the verdict', d:'Confirm with a repeat (~3 months, 72-day cycle); parameters vary; illness affects it.' },
        { t:'4\u20137',  h:'Modifiable + exam', d:'Smoking/alcohol/steroids/heat/weight; examine \u2014 varicocele/volume AND palpate for a testicular mass.' },
        { t:'7\u20139',  h:'Testicular safety-net + couple', d:'NG12 2WW if a mass (higher risk in subfertile men); refer BOTH to fertility; partner assessed too.' },
        { t:'9\u201312', h:'Realistic hope + support', d:'Not "never" \u2014 optimisation, IUI/IVF/ICSI; involve partner; screen mood/relationship impact.' }
      ],
      wordPics: {
        fail: 'Treats one sample as a verdict; frames it as solely his fault; skips the testicular exam; induces despair or false reassurance; ignores the couple/emotional dimension.',
        pass: 'Advises a repeat, addresses modifiable factors, examines (incl. testes), refers the couple, and gives realistic hope.',
        exc:  'Addresses self-blame compassionately, explains one sample needs repeating (72-day cycle), tackles modifiable factors, examines including palpating for a testicular mass (NG12 2WW awareness), refers both partners to fertility, gives realistic hope (IUI/IVF/ICSI), and supports the emotional/couple impact.'
      },
      avoid: [
        { dont:'"Your sperm test is abnormal \u2014 so that\u2019s why you\u2019re not conceiving."', instead:'"One sample isn\u2019t the full picture \u2014 we repeat it after about three months, and fertility is a couple issue, not just you."', why:'Diagnosing from a single sample and pinning it on the man is inaccurate and harmful.' },
        { dont:'(Skipping exam) referring on the result alone.', instead:'"Let me examine you \u2014 it\u2019s also a chance to check the testicles, as men with lower counts have a slightly higher risk of testicular problems."', why:'Missing the testicular examination/mass overlooks the NG12 testicular-cancer awareness in subfertile men.' },
        { dont:'"It\u2019s unlikely you\u2019ll have children naturally, I\u2019m afraid."', instead:'"This doesn\u2019t mean never \u2014 many conceive after some changes, and treatments like IVF/ICSI work even with low counts."', why:'Inducing despair is inaccurate and damaging; realistic hope is warranted.' }
      ]
    },

    'tiredness-testosterone-myths': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Ryan Forsythe', age: '32 years \u00b7 male',
        pmh: ['Persistent tiredness, low energy, reduced libido, "stalled gains"', 'Wants testosterone ("a T boost") from online/gym influence', '?gym/online steroid use to ask about'],
        meds: ['Various gym supplements'],
        allergy: 'NKDA',
        recent: '"My gym mate says it\u2019s low testosterone \u2014 can you test it and give me a boost? Where\u2019s the harm?"',
        reason: 'Video consultation \u2014 fatigue with a testosterone request.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take seriously, reframe', d:'Fatigue/low libido worth sorting; low-T uncommon/over-attributed \u2014 don\u2019t just test and boost.' },
        { t:'2\u20135',  h:'Work up fatigue', d:'Sleep/OSA, mood, stress, diet, overtraining, alcohol; bloods (thyroid, FBC, glucose).' },
        { t:'5\u20137',  h:'Test T correctly if needed', d:'Fasting morning total testosterone, repeated if low + LH/FSH/SHBG/prolactin \u2014 not a one-off random.' },
        { t:'7\u20139',  h:'Myth + harms', d:'Not a tonic; inappropriate T/steroids \u2192 infertility, testicular atrophy, polycythaemia; unregulated products.' },
        { t:'9\u201312', h:'Ask use + treat cause', d:'Non-judgemental steroid enquiry; harm reduction; treat the real cause; specialist if confirmed hypogonadism.' }
      ],
      wordPics: {
        fail: 'Tests a random testosterone and/or prescribes a "boost" without working up fatigue; ignores the harms/infertility; never asks about gym steroid use; or just refuses dismissively.',
        pass: 'Works up the fatigue, tests testosterone correctly only if indicated, and counsels the myths/harms.',
        exc:  'Takes the symptoms seriously, works up fatigue structurally, tests testosterone correctly (morning/fasting/repeated + LH/FSH/SHBG/prolactin) only if indicated, busts the tonic myth and spells out harms (esp. infertility), asks non-judgementally about gym/online steroid use, and treats the real cause \u2014 honest, not dismissive.'
      },
      avoid: [
        { dont:'"Sure, let\u2019s check your testosterone and we can try a boost if it\u2019s on the low side."', instead:'"Low-T is actually an uncommon cause in young men \u2014 let\u2019s find the real reason for the tiredness first, and test testosterone properly only if it fits."', why:'Jumping to testosterone skips the work-up and risks inappropriate, harmful prescribing.' },
        { dont:'"There\u2019s no harm in trying a bit of testosterone."', instead:'"There genuinely is \u2014 it can make you infertile, shrink the testicles and thicken the blood. It\u2019s not a tonic."', why:'\u2018No harm in trying\u2019 is a dangerous myth; the harms (especially infertility) must be spelled out.' },
        { dont:'(Not asking) ignoring possible steroid use.', instead:'"Without judgement \u2014 are you taking any gym or online testosterone, steroids or boosters? It can cause exactly these symptoms."', why:'Failing to ask about anabolic-steroid use misses a likely cause and a harm-reduction opportunity.' }
      ]
    }

  });

})();
