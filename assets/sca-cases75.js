/* ============================================================
   Reasoning GP — Case Library batch 75:
   New themes from "SCA revision - Cases Notes" (verified absent)
   Premature ejaculation; lateral epicondylitis (tennis elbow);
   threadworm (enterobiasis); a request about assisted dying.
   No NG12 cancer pathway applies. Load AFTER sca-cases74.js.
   ============================================================ */
(function(){

  /* ===== 269. Premature ejaculation ===== */
  const c269 = {
    id:'premature-ejaculation', title:'"I came in asking for antidepressants \u2014 but really it\u2019s that I finish far too quickly in bed and it\u2019s wrecking my confidence and relationship"', type:'video', duration:12,
    meta:{ age:28, sex:'M', setting:'Face-to-face \u2014 a young man whose stated reason masks a sexual concern.', system:'Sexual health / Men\u2019s health \u2014 premature ejaculation: the hidden agenda, assessment & treatment' },
    brief:'Mr Ravi Anand, 28, books in "for antidepressants to feel better", but the real, embarrassing issue is PREMATURE EJACULATION (PE) \u2014 ejaculating sooner than he/his partner wishes, with distress, low confidence and relationship strain. The task is to elicit the HIDDEN AGENDA sensitively, take a non-judgemental sexual history, classify PE (LIFELONG vs ACQUIRED \u2014 acquired warrants looking for a cause: erectile dysfunction, anxiety/relationship factors, prostatitis, thyroid, drugs), screen mood/anxiety and the relationship impact, EXCLUDE/treat associated ED (often coexists and should be treated first), and offer EVIDENCE-BASED treatment: psychosexual/behavioural techniques (stop-start, squeeze), self-help, topical anaesthetics (lidocaine/prilocaine creams/sprays), and pharmacotherapy \u2014 an SSRI (e.g. dapoxetine on-demand, or off-label daily SSRI) which delays ejaculation \u2014 plus involving the partner and psychosexual referral if needed. The skill is the empathic hidden-agenda elicitation, classification, ED check, and offering effective treatment without embarrassment \u2014 not just handing over an antidepressant for "feeling low". No NG12 cancer link.',
    script:{
      opening:'"So\u2026 I said I wanted some antidepressants to feel better, and I have been a bit down. But honestly, that\u2019s not really why I\u2019m here. It\u2019s\u2026 god, this is embarrassing\u2026 I finish way too quickly when I\u2019m with my girlfriend, almost straight away, and it\u2019s killing my confidence and causing arguments. I didn\u2019t know how to bring it up."',
      facts:[
        { topic:'Elicit the hidden agenda sensitively', text:'CORE \u2014 the stated reason ("antidepressants/feeling low") masks the real, embarrassing concern. Create safety, pick up the hesitancy, and gently invite the real issue \u2014 a non-judgemental, normalising manner is what allows disclosure. Don\u2019t simply prescribe an antidepressant for "low mood" and miss the actual problem.' },
        { topic:'Define & classify PE', text:'PREMATURE EJACULATION = ejaculation occurring sooner than desired (often within ~1 minute / before or shortly after penetration), with a perceived lack of control and DISTRESS. Classify LIFELONG (since first sexual experiences) vs ACQUIRED (new) \u2014 ACQUIRED PE warrants seeking a cause: erectile dysfunction, performance ANXIETY/relationship factors, prostatitis, thyroid dysfunction (hyperthyroidism), and drugs.' },
        { topic:'Screen mood, anxiety & relationship', text:'Screen the PSYCHOLOGICAL and relationship context: anxiety (especially performance anxiety), low mood (he mentioned feeling down \u2014 explore and treat if a genuine depression), and the impact on the relationship/partner. PE and anxiety/mood often interact; address both.' },
        { topic:'Check for ED \u2014 treat first', text:'IMPORTANT \u2014 screen for ERECTILE DYSFUNCTION, which commonly COEXISTS with PE; if present, it should generally be treated FIRST (rushing to ejaculate to avoid losing the erection can drive PE). Also consider basic checks where indicated (e.g. TFTs in acquired PE).' },
        { topic:'Offer evidence-based treatment', text:'Offer treatment: BEHAVIOURAL/psychosexual techniques (STOP-START and SQUEEZE techniques), self-help and partner involvement; TOPICAL anaesthetics (lidocaine/prilocaine cream or spray to reduce sensitivity); and PHARMACOTHERAPY \u2014 an SSRI delays ejaculation: dapoxetine (a short-acting on-demand SSRI licensed for PE) or off-label daily SSRIs. Refer to PSYCHOSEXUAL services for refractory cases or significant relationship/psychological factors.' },
        { topic:'The agenda', text:'He needs the real issue safely surfaced, classified and treated. Elicit the hidden agenda, classify PE, check/treat ED, screen mood/anxiety, offer behavioural + topical + SSRI options and partner/psychosexual involvement \u2014 destigmatising throughout, not just prescribing an antidepressant for "feeling low". No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'Came in under cover of "antidepressants/feeling low"; the real issue is PE and he\u2019s embarrassed.', concerns:'Embarrassment; confidence; the relationship/arguments; whether it can be treated.', expectations:'(Stated) antidepressants. What he needs: the hidden agenda elicited, PE classified, ED checked/treated, mood/anxiety screened, and evidence-based PE treatment (behavioural, topical, SSRI) with destigmatisation.' },
      cues:['"Antidepressants to feel better" masks the real concern \u2014 premature ejaculation; elicit the hidden agenda sensitively, don\u2019t just prescribe for low mood.','Classify lifelong vs acquired (acquired \u2192 seek cause: ED, anxiety, prostatitis, thyroid, drugs); screen mood/anxiety/relationship.','Check for/treat coexisting ED first; offer stop-start/squeeze, topical anaesthetics, and an SSRI (dapoxetine on-demand); psychosexual referral if refractory.']
    },
    checkpoints:[
      { dom:'rto',   text:'Elicits the HIDDEN AGENDA sensitively \u2014 creating safety, picking up the hesitancy and inviting the real concern \u2014 rather than simply prescribing an antidepressant for "low mood"' },
      { dom:'tasks', text:'Defines and CLASSIFIES premature ejaculation (lifelong vs acquired), recognising acquired PE warrants seeking a cause (ED, anxiety/relationship, prostatitis, thyroid, drugs)' },
      { dom:'tasks', text:'Screens the PSYCHOLOGICAL/relationship context \u2014 anxiety (performance), low mood (explores/treats a genuine depression), and partner/relationship impact' },
      { dom:'tasks', text:'Checks for coexisting ERECTILE DYSFUNCTION (treat first if present) and considers basic checks (e.g. TFTs) in acquired PE' },
      { dom:'tasks', text:'Offers EVIDENCE-BASED treatment \u2014 behavioural techniques (stop-start/squeeze), topical anaesthetics, and an SSRI (dapoxetine on-demand/off-label daily) \u2014 with partner involvement and psychosexual referral if refractory' },
      { dom:'rto',   text:'Handles an embarrassing topic with destigmatising empathy, validates the impact on confidence/relationship, and checks understanding' },
      { dom:'rto', text:'Negotiates a treatment plan he is comfortable starting (behavioural, topical or tablet), framing it as a positive and solvable issue and inviting his preference and partner involvement' },
      { dom:'gs',    text:'Reaches a supportive plan: PE classified, ED addressed, mood/anxiety managed, treatment options offered with follow-up/psychosexual referral \u2014 the real issue treated, not an antidepressant for "feeling low"' },
    ],
    worked:[
      { lbl:'Make it safe', txt:'"Thank you for telling me what\u2019s really going on \u2014 that took courage, and there\u2019s absolutely nothing to be embarrassed about. This is really common and very treatable. Let\u2019s sort it out together."' },
      { lbl:'Classify', txt:'"Has it always been this way, or is it newer? \u2026 If it\u2019s changed recently I\u2019d look for a reason. And how are your erections \u2014 firm enough? Sometimes rushing because you\u2019re worried about losing the erection drives this, and we\u2019d treat that first."' },
      { lbl:'Screen mood/anxiety', txt:'"You mentioned feeling a bit down \u2014 how much of that is the worry about this? Performance anxiety feeds the problem, and if there\u2019s a genuine low mood underneath we\u2019ll treat that too."' },
      { lbl:'Behavioural + topical', txt:'"There are techniques that genuinely help \u2014 the \u2018stop-start\u2019 and \u2018squeeze\u2019 methods \u2014 which I\u2019ll explain, and doing them with your girlfriend helps. There are also numbing creams or sprays that reduce sensitivity."' },
      { lbl:'Medication', txt:'"And there\u2019s an effective tablet \u2014 a type of antidepressant called dapoxetine taken before sex, or a daily one \u2014 that delays things. So ironically an \u2018antidepressant\u2019 may help, but for the right reason."' },
      { lbl:'Support + refer', txt:'"If it\u2019s not settling, or there\u2019s a lot tied up in the relationship, a psychosexual therapist is excellent. Bring your girlfriend along if she\u2019s willing \u2014 this is a team effort, and it really does improve."' },
    ],
    learning:'A young man presenting "for antidepressants to feel better" may be masking an embarrassing sexual concern \u2014 here PREMATURE EJACULATION (PE) \u2014 so the first skill is eliciting the HIDDEN AGENDA sensitively, creating safety and inviting the real issue rather than prescribing an antidepressant for "low mood" and missing it. PE is ejaculation occurring sooner than desired (often within ~1 minute / before or shortly after penetration) with a lack of control and DISTRESS; classify LIFELONG versus ACQUIRED, as acquired PE warrants seeking a cause (erectile dysfunction, performance anxiety/relationship factors, prostatitis, thyroid dysfunction, drugs). Screen the psychological and relationship context (anxiety, low mood \u2014 exploring/treating genuine depression \u2014 and partner impact), and crucially check for coexisting ERECTILE DYSFUNCTION, which commonly accompanies PE and should generally be treated first (rushing to ejaculate before losing the erection can drive PE), with basic checks such as TFTs where indicated. Offer evidence-based treatment: behavioural/psychosexual techniques (stop-start and squeeze), self-help and partner involvement; topical anaesthetics (lidocaine/prilocaine cream or spray); and pharmacotherapy \u2014 an SSRI delays ejaculation (dapoxetine on-demand, licensed for PE, or off-label daily SSRIs) \u2014 with psychosexual referral for refractory cases or significant relationship/psychological factors. The skill is the empathic hidden-agenda elicitation, classification, ED check and offering effective, destigmatised treatment. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Premature ejaculation \u00b7 hidden agenda \u00b7 lifelong vs acquired \u00b7 treat coexisting ED \u00b7 behavioural + topical anaesthetic + SSRI (dapoxetine) \u00b7 psychosexual referral',
      points:[
        { h:'Hidden agenda', t:'Stated reason ("antidepressants/low mood") may mask PE. Create safety, pick up hesitancy, invite the real issue \u2014 don\u2019t just prescribe for low mood.' },
        { h:'Define & classify', t:'Ejaculation sooner than desired with lack of control and distress. Lifelong vs acquired; acquired warrants seeking a cause (ED, anxiety, prostatitis, thyroid, drugs).' },
        { h:'Screen context', t:'Performance anxiety, low mood (treat genuine depression), and partner/relationship impact \u2014 PE and anxiety/mood interact.' },
        { h:'Check ED first', t:'ED commonly coexists and should generally be treated first. Consider TFTs in acquired PE.' },
        { h:'Behavioural & topical', t:'Stop-start and squeeze techniques, self-help, partner involvement; topical lidocaine/prilocaine cream or spray.' },
        { h:'Pharmacotherapy', t:'SSRI delays ejaculation \u2014 dapoxetine on-demand (licensed) or off-label daily SSRI. Psychosexual referral if refractory.' },
        { h:'Never do', t:'Never prescribe an antidepressant for "low mood" while missing the real concern; never skip the ED check; never treat without addressing the relationship/psychological context.' },
        { h:'Safety-net & follow-up', t:'Review response; treat ED/mood; partner involvement; psychosexual referral for refractory/relationship factors.' }
      ]
    }
  };

  /* ===== 270. Lateral epicondylitis (tennis elbow) ===== */
  const c270 = {
    id:'tennis-elbow', title:'"The outer side of my elbow\u2019s been painful for weeks \u2014 it hurts to grip, lift the kettle or shake hands"', type:'video', duration:12,
    meta:{ age:46, sex:'M', setting:'Face-to-face \u2014 lateral elbow pain.', system:'MSK \u2014 lateral epicondylitis (tennis elbow): recognition & conservative care' },
    brief:'Mr Greg Holloway, 46 (manual/repetitive forearm use), has weeks of pain over the LATERAL epicondyle of the elbow, worse with GRIPPING, lifting and resisted wrist/finger EXTENSION, with local tenderness \u2014 LATERAL EPICONDYLITIS (tennis elbow), an overuse tendinopathy of the common extensor origin. Recognise it clinically (lateral elbow pain, tender lateral epicondyle, pain on resisted wrist extension/Cozen\u2019s test, provoked by gripping), distinguish from medial epicondylitis (golfer\u2019s), radial tunnel syndrome, referred cervical/neuro pain and elbow OA; MANAGE conservatively \u2014 it is largely self-limiting over months: activity modification/load management, analgesia/topical NSAIDs, a forearm/epicondylitis brace, physiotherapy with progressive ECCENTRIC strengthening exercises, and ergonomic advice; counsel realistic (slow) recovery; reserve corticosteroid injection for short-term relief (cautioning it may not improve and can worsen long-term outcomes) and refer for refractory cases. Reassure and safety-net. No NG12 cancer link.',
    script:{
      opening:'"The outside of my right elbow\u2019s been sore for a few weeks now \u2014 it really hurts when I grip things, lift the kettle, or even shake hands. I didn\u2019t injure it; it just came on. I do a lot of repetitive work with my hands. What is it, and will it settle?"',
      facts:[
        { topic:'Recognise tennis elbow', text:'LATERAL EPICONDYLITIS (tennis elbow) is an overuse TENDINOPATHY of the common extensor origin at the LATERAL epicondyle: pain over the lateral elbow, local TENDERNESS, worse with GRIPPING/lifting and resisted wrist/finger EXTENSION (e.g. positive Cozen\u2019s test), typically from repetitive forearm use, coming on without acute injury. His picture fits.' },
        { topic:'Differential', text:'Distinguish from MEDIAL epicondylitis (golfer\u2019s elbow \u2014 medial pain, resisted flexion), radial tunnel syndrome (more distal/forearm, no point epicondyle tenderness), referred CERVICAL/neurological pain (neck, paraesthesiae), and elbow OSTEOARTHRITIS (older, stiffness/crepitus). Clinical features usually suffice; imaging is not routinely needed.' },
        { topic:'Conservative management', text:'MANAGE conservatively \u2014 largely SELF-LIMITING over months: LOAD management/activity modification (reduce aggravating gripping), analgesia/topical NSAIDs, a forearm (epicondylitis) BRACE/strap, and PHYSIOTHERAPY with progressive ECCENTRIC strengthening exercises, plus ergonomic advice (tools, technique). These are first-line and effective for most.' },
        { topic:'Injections & escalation', text:'A corticosteroid injection may give SHORT-TERM relief but evidence suggests it does not improve (and may worsen) LONGER-TERM outcomes \u2014 so use selectively/with caution. Refer (physiotherapy/orthopaedics) for refractory cases (other options, rarely surgery). Set realistic, slow-recovery expectations.' },
        { topic:'The agenda', text:'He wants a diagnosis and to know it will settle. Recognise tennis elbow, exclude mimics, give load management/brace/eccentric-exercise advice, counsel a slow but favourable course, use injections cautiously, and safety-net. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'A repetitive-strain elbow problem; wants a fix and a timeline.', concerns:'The pain limiting grip/work; how long it\u2019ll last.', expectations:'A diagnosis and treatment. What he needs: recognition of lateral epicondylitis, conservative care (load management, brace, eccentric exercises), realistic timeline, and cautious use of injections.' },
      cues:['Lateral elbow pain + tender lateral epicondyle + pain on gripping/resisted wrist extension, repetitive use, no injury \u2014 tennis elbow (lateral epicondylitis).','Differential: medial epicondylitis, radial tunnel, cervical/referred pain, elbow OA; clinical diagnosis, imaging not routine.','Conservative: load management + brace + physio with eccentric exercises; injections cautiously (poor long-term); slow but favourable course.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises LATERAL EPICONDYLITIS (tennis elbow) \u2014 lateral elbow pain, tender lateral epicondyle, pain on gripping and resisted wrist/finger extension, from repetitive use without acute injury' },
      { dom:'tasks', text:'Distinguishes it from medial epicondylitis, radial tunnel syndrome, referred cervical/neuro pain and elbow OA, recognising imaging is not routinely needed' },
      { dom:'tasks', text:'Manages conservatively \u2014 load management/activity modification, analgesia/topical NSAIDs, a forearm brace, and physiotherapy with progressive ECCENTRIC strengthening \u2014 with ergonomic advice' },
      { dom:'tasks', text:'Uses corticosteroid injection CAUTIOUSLY (short-term relief but poorer long-term outcomes) and refers for refractory cases' },
      { dom:'rto',   text:'Sets realistic expectations about the slow but favourable (months) course, acknowledges the impact on grip/work, and checks understanding of the exercise/brace plan' },
      { dom:'rto', text:'Acknowledges the impact on his manual work and everyday grip tasks, and explores what he needs to keep doing, tailoring the load-management advice to his job' },
      { dom:'rto', text:'Negotiates a realistic self-management plan (brace and progressive exercises), gives clear explained instructions, and checks he is confident to carry it out' },
      { dom:'gs',    text:'Safety-nets and follows up: review if not improving, escalate (physio/orthopaedics) if refractory, and reconsider for atypical/neurological features \u2014 conservative-first management' },
    ],
    worked:[
      { lbl:'Name it', txt:'"This is tennis elbow \u2014 an overuse strain of the tendons on the outer elbow where they attach to the bone. The repetitive gripping work has set it off, and that\u2019s why gripping and shaking hands hurt. It\u2019s not serious and it does settle."' },
      { lbl:'Honest timeline', txt:'"I\u2019ll be upfront \u2014 it can be slow, often a few months, but the great majority get better with the right approach, and we don\u2019t usually need scans."' },
      { lbl:'Conservative plan', txt:'"The mainstays are easing the aggravating gripping where you can, a forearm strap/brace, anti-inflammatory gel or tablets, and \u2014 most importantly \u2014 physiotherapy with specific strengthening exercises that actually help the tendon heal. I\u2019ll refer you for those."' },
      { lbl:'Injections honestly', txt:'"A steroid injection can ease it short-term, but the evidence is that it doesn\u2019t help \u2014 and may even slow \u2014 recovery in the longer run, so I\u2019d use it cautiously rather than as a first move."' },
      { lbl:'Ergonomics', txt:'"Let\u2019s look at your work technique and tools too, since that\u2019s the driver \u2014 small changes reduce the strain."' },
      { lbl:'Safety-net', txt:'"Come back if it\u2019s not improving with the exercises and brace, or if you get pins and needles, neck symptoms or weakness \u2014 that would make me think again. Otherwise, patience and the exercises will get you there."' },
    ],
    learning:'LATERAL EPICONDYLITIS (tennis elbow) is an overuse TENDINOPATHY of the common extensor origin at the lateral epicondyle, recognised by lateral elbow pain with local tenderness, worse on GRIPPING/lifting and resisted wrist/finger EXTENSION (e.g. positive Cozen\u2019s test), typically from repetitive forearm use and coming on without acute injury. Distinguish it from medial epicondylitis (golfer\u2019s elbow), radial tunnel syndrome (more distal, no point epicondyle tenderness), referred cervical/neurological pain (neck symptoms, paraesthesiae) and elbow osteoarthritis (older, stiffness/crepitus) \u2014 clinical features usually suffice and imaging is not routinely needed. Manage conservatively, as it is largely self-limiting over months: load management/activity modification (reduce aggravating gripping), analgesia/topical NSAIDs, a forearm (epicondylitis) brace, and physiotherapy with progressive ECCENTRIC strengthening exercises, plus ergonomic advice on tools and technique \u2014 these are first-line and effective for most. A corticosteroid injection may give short-term relief but evidence suggests it does not improve (and may worsen) longer-term outcomes, so use it selectively and with caution, and refer (physiotherapy/orthopaedics) for refractory cases. Set realistic, slow-recovery expectations, reassure about the favourable course, and safety-net for atypical/neurological features that would prompt reconsideration. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Lateral epicondylitis (tennis elbow) \u00b7 clinical diagnosis \u00b7 load management + brace + eccentric physiotherapy \u00b7 cautious corticosteroid injection',
      points:[
        { h:'Recognise', t:'Lateral elbow pain, tender lateral epicondyle, pain on gripping and resisted wrist/finger extension (Cozen\u2019s), repetitive use, no acute injury.' },
        { h:'Differential', t:'Medial epicondylitis (golfer\u2019s), radial tunnel syndrome, referred cervical/neuro pain, elbow OA. Clinical diagnosis; imaging not routine.' },
        { h:'Conservative care', t:'Load management/activity modification, analgesia/topical NSAIDs, forearm brace, physiotherapy with progressive eccentric strengthening, ergonomic advice. Self-limiting over months.' },
        { h:'Injections', t:'Corticosteroid injection: short-term relief but poorer long-term outcomes \u2014 use cautiously/selectively, not first-line.' },
        { h:'Escalation', t:'Refer (physio/orthopaedics) for refractory cases; rarely surgery.' },
        { h:'Expectations', t:'Slow but favourable course (months); reassure most recover with conservative measures.' },
        { h:'Never do', t:'Never image routinely; never miss radial tunnel/cervical/neuro causes; never rely on repeated steroid injections.' },
        { h:'Safety-net & follow-up', t:'Review if not improving; escalate if refractory; reconsider for neurological/atypical features.' }
      ]
    }
  };

  /* ===== 271. Threadworm (enterobiasis) ===== */
  const c271 = {
    id:'threadworm', title:'"My little girl\u2019s bottom is really itchy at night and I\u2019ve seen tiny white threads \u2014 the whole family keeps catching it"', type:'video', duration:12,
    meta:{ age:5, sex:'F', setting:'Face-to-face \u2014 perianal itch in a child, parent present.', system:'Paediatrics / Infectious disease \u2014 threadworm: treat the whole household & hygiene' },
    brief:'A mother brings 5-year-old Ivy with intense PERIANAL ITCH worse at NIGHT, disturbed sleep, and visible tiny white THREADS (worms) in the perianal area/stool \u2014 THREADWORM (Enterobius/pinworm), the commonest worm infection in UK children, spread faeco-orally via eggs (scratching \u2192 fingers/under nails \u2192 mouth/surfaces). Recognise it clinically (nocturnal perianal/vulval itch, visible threadworms; tape test rarely needed); treat the WHOLE HOUSEHOLD simultaneously with an anthelmintic \u2014 MEBENDAZOLE (single dose, repeated in ~2 weeks) for those over the appropriate age \u2014 PLUS rigorous HYGIENE measures (treat everyone together, wash bedding/nightwear/towels on a hot wash, morning bathing/showering, hand-washing and nail-scrubbing especially after toileting and before eating, keep nails short, discourage scratching/nail-biting, avoid sharing towels) maintained for ~2 weeks; advise that in PREGNANCY/under-2s/very young, hygiene measures alone are usually first-line (medication per guidance/caution). Reassure it is common and not a sign of poor hygiene, and safety-net. No NG12 cancer link.',
    script:{
      opening:'"Ivy\u2019s been waking up scratching her bottom \u2014 it\u2019s really itchy at night and she\u2019s not sleeping. I had a look and I could see these tiny white thread-like things wriggling. And now her little brother\u2019s scratching too. I feel awful \u2014 does it mean we\u2019re not clean? How do we get rid of it?"',
      facts:[
        { topic:'Recognise threadworm', text:'THREADWORM (Enterobius vermicularis/pinworm) is the commonest worm infection in UK children: intense PERIANAL (and vulval in girls) ITCH worse at NIGHT (the female worm lays eggs around the anus at night), disturbed sleep, and visible tiny white THREADS in the perianal area or stool. Diagnosis is usually clinical from the history/seeing the worms (a sticky-tape perianal test is rarely needed).' },
        { topic:'How it spreads', text:'Spread is FAECO-ORAL via eggs: scratching the itchy anus transfers eggs to fingers/under the nails, then to the mouth (re-infection), other people and surfaces/bedding \u2014 which is why it spreads through households and recurs. It is COMMON and NOT a sign of poor hygiene \u2014 reassure the parent.' },
        { topic:'Treat the whole household', text:'CORE \u2014 treat the WHOLE HOUSEHOLD simultaneously (even if asymptomatic) with an anthelmintic \u2014 MEBENDAZOLE as a single dose, REPEATED after about 2 weeks (to catch newly hatched worms) \u2014 for those of the appropriate age. Treating only the index child leads to re-infection.' },
        { topic:'Hygiene measures \u2014 essential alongside', text:'Combine with rigorous HYGIENE for ~2 weeks: wash bedding, nightwear and towels on a HOT wash; bath/shower in the MORNING to remove eggs laid overnight; thorough HAND-WASHING and NAIL-SCRUBBING (especially after toileting and before eating); keep NAILS SHORT; discourage scratching and nail-biting; wear close-fitting underwear at night; avoid sharing towels; and damp-dust/vacuum. Hygiene plus treating everyone breaks the cycle.' },
        { topic:'Pregnancy & young children', text:'In PREGNANCY, breastfeeding, and very young children (e.g. under 2/under 6 months), HYGIENE measures alone are usually first-line and may be sufficient; medication is used according to guidance/with caution (check age/pregnancy suitability before prescribing). (Note this is relevant if a pregnant household member is involved.)' },
        { topic:'The agenda', text:'The parent fears it reflects poor hygiene and wants to clear it. Reassure (common, not about cleanliness), treat the WHOLE household (mebendazole + repeat) with rigorous hygiene for ~2 weeks, advise on pregnancy/young-child caveats, and safety-net for persistence/atypical features. No NG12 cancer pathway applies.' },
      ],
      ice:{ ideas:'Worried it means the family isn\u2019t clean; wants to get rid of it.', concerns:'The child\u2019s itch/disturbed sleep; spread through the family; embarrassment/cleanliness.', expectations:'Treatment/a cure. What is needed: recognition of threadworm, reassurance (common, not poor hygiene), whole-household treatment (mebendazole + repeat) plus hygiene measures, and pregnancy/young-child caveats.' },
      cues:['Nocturnal perianal/vulval itch + visible tiny white threads + household spread in a child \u2014 threadworm (Enterobius); clinical diagnosis.','Reassure: common, faeco-oral spread, NOT a sign of poor hygiene.','Treat the WHOLE household (mebendazole single dose, repeat ~2 weeks) PLUS rigorous hygiene for ~2 weeks; hygiene-first in pregnancy/very young.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises THREADWORM (Enterobius/pinworm) \u2014 nocturnal perianal/vulval itch, disturbed sleep, visible tiny white threads \u2014 as a clinical diagnosis (tape test rarely needed)' },
      { dom:'tasks', text:'Explains the faeco-oral spread (scratching \u2192 fingers/nails \u2192 mouth/surfaces) and reassures it is common and NOT a sign of poor hygiene' },
      { dom:'tasks', text:'Treats the WHOLE HOUSEHOLD simultaneously with an anthelmintic \u2014 MEBENDAZOLE single dose, REPEATED after ~2 weeks \u2014 for those of appropriate age, rather than only the index child' },
      { dom:'tasks', text:'Advises rigorous HYGIENE measures for ~2 weeks (hot-wash bedding/nightwear/towels, morning bathing, hand-washing/nail-scrubbing, short nails, discourage scratching, close-fitting underwear, no towel sharing)' },
      { dom:'tasks', text:'Knows the PREGNANCY/very-young-child caveat (hygiene measures usually first-line; medication per guidance/with caution) and checks age/pregnancy suitability before prescribing' },
      { dom:'rto',  text:'Reassures the parent (common, not about cleanliness) and addresses the embarrassment, checking understanding of the household treatment + hygiene plan' },
      { dom:'rto', text:'Negotiates whole-household buy-in with the parent, giving clear practical instructions for the medication and hygiene measures and checking she is confident to carry them out' },
      { dom:'gs',    text:'Safety-nets and follows up: return if persistent/recurrent despite treating everyone, or atypical features; reinforces the repeat dose and hygiene \u2014 whole-household treatment, not index-child only' },
    ],
    worked:[
      { lbl:'Reassure + name it', txt:'"These are threadworms \u2014 incredibly common in children, and crucially NOT a sign that you\u2019re not clean. Almost every family gets them at some point. The night-time bottom itch and those little white threads are the giveaway."' },
      { lbl:'Explain the spread', txt:'"They spread easily \u2014 scratching puts microscopic eggs on the fingers and under the nails, which then get to the mouth and to others. That\u2019s why the whole family keeps catching it, and why we treat everyone together."' },
      { lbl:'Treat the household', txt:'"So everyone in the house takes a single dose of a worm medicine called mebendazole, and then a second dose two weeks later to catch any that hatch. Treating just Ivy wouldn\u2019t work \u2014 she\u2019d just get re-infected."' },
      { lbl:'Hygiene measures', txt:'"Alongside, for two weeks: hot-wash the bedding, nightwear and towels, shower or bath in the MORNING to wash off overnight eggs, scrub hands and nails after the toilet and before eating, keep nails short, and try to stop scratching. That breaks the cycle."' },
      { lbl:'Caveats', txt:'"If anyone\u2019s pregnant or there\u2019s a baby, the hygiene measures alone usually do the job and we\u2019re careful with the medicine \u2014 just let me know so I prescribe correctly."' },
      { lbl:'Safety-net', txt:'"If it keeps coming back despite everyone being treated and the hygiene, come back. But done together, this clears up well \u2014 and please don\u2019t feel bad, it really isn\u2019t about cleanliness."' },
    ],
    learning:'THREADWORM (Enterobius vermicularis/pinworm) is the commonest worm infection in UK children, presenting with intense PERIANAL (and vulval in girls) ITCH worse at NIGHT, disturbed sleep, and visible tiny white THREADS in the perianal area or stool \u2014 a clinical diagnosis (a sticky-tape perianal test is rarely needed). Spread is FAECO-ORAL via eggs: scratching transfers eggs to the fingers/under the nails and then to the mouth (re-infection), other people and surfaces/bedding, which is why it spreads through households and recurs \u2014 and it is common and NOT a sign of poor hygiene, which the parent should be reassured about. The core treatment principle is to treat the WHOLE HOUSEHOLD simultaneously (even asymptomatic members) with an anthelmintic \u2014 MEBENDAZOLE as a single dose, repeated after about 2 weeks to catch newly hatched worms \u2014 for those of the appropriate age, because treating only the index child leads to re-infection. Combine this with rigorous HYGIENE for ~2 weeks: hot-washing bedding, nightwear and towels; morning bathing/showering to remove overnight eggs; thorough hand-washing and nail-scrubbing (especially after toileting and before eating); keeping nails short; discouraging scratching and nail-biting; wearing close-fitting underwear at night; and avoiding towel-sharing. In pregnancy, breastfeeding and very young children, hygiene measures alone are usually first-line and may suffice, with medication used according to guidance/with caution \u2014 so check age/pregnancy suitability before prescribing. Reassure, treat the whole household plus hygiene, advise the caveats, and safety-net for persistence. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Threadworm (enterobiasis) \u00b7 clinical diagnosis \u00b7 whole-household mebendazole (repeat at 2 weeks) + hygiene \u00b7 pregnancy/young-child hygiene-first',
      points:[
        { h:'Recognise', t:'Nocturnal perianal/vulval itch, disturbed sleep, visible tiny white threads in a child = threadworm (Enterobius). Clinical diagnosis; tape test rarely needed.' },
        { h:'Spread & reassurance', t:'Faeco-oral via eggs (scratching \u2192 fingers/nails \u2192 mouth/surfaces); spreads through households and recurs. Common and NOT a sign of poor hygiene \u2014 reassure.' },
        { h:'Treat whole household', t:'Treat everyone simultaneously (even asymptomatic) with mebendazole single dose, repeated after ~2 weeks. Treating only the index child causes re-infection.' },
        { h:'Hygiene measures', t:'~2 weeks: hot-wash bedding/nightwear/towels, morning bath/shower, hand-washing/nail-scrubbing, short nails, discourage scratching, close-fitting underwear, no towel sharing.' },
        { h:'Pregnancy/young children', t:'Hygiene measures usually first-line (and may suffice) in pregnancy/breastfeeding/very young; medication per guidance/with caution \u2014 check age/pregnancy suitability.' },
        { h:'Never do', t:'Never treat only the index child; never omit the repeat dose or hygiene measures; never reinforce the poor-hygiene stigma; never prescribe without checking age/pregnancy suitability.' },
        { h:'Safety-net & follow-up', t:'Return if persistent/recurrent despite whole-household treatment + hygiene, or atypical features; reinforce repeat dose and hygiene.' }
      ]
    }
  };

  /* ===== 272. Assisted dying request ===== */
  const c272 = {
    id:'assisted-dying-request', title:'"I\u2019ve got a terminal diagnosis and I want help to end my life when the time comes \u2014 will you help me, doctor?"', type:'video', duration:12,
    meta:{ age:67, sex:'M', setting:'Face-to-face \u2014 a patient with terminal illness raising assisted dying.', system:'Ethics / Palliative care \u2014 a request for assisted dying: law, exploration & support' },
    brief:'Mr Harold Vance, 67, with a terminal illness (e.g. metastatic cancer/MND), asks his GP directly to "help me end my life when the time comes". The task is a sensitive ETHICS/palliative consultation: respond with COMPASSION and without judgement; EXPLORE what lies behind the request (fear of suffering/pain, loss of dignity/control, being a burden, uncontrolled symptoms, DEPRESSION/hopelessness, existential distress) \u2014 such requests are often a cry for help or reflect treatable distress; be HONEST about the LAW \u2014 assisted dying/assisted suicide is currently UNLAWFUL in the UK and a doctor cannot lawfully assist a patient to end their life, and must not act on or encourage it; do NOT abandon the patient \u2014 reassure that you will not stop caring for him, address the modifiable drivers (excellent SYMPTOM control/PALLIATIVE care, treat depression, psychological/spiritual support, ADVANCE CARE PLANNING about future treatment/place of care, reassurance that he will not be left to suffer), assess RISK (suicidality), maintain confidentiality appropriately, and seek senior/palliative/ethics support. The skill is compassionate exploration, honest legal position, not abandoning the patient, and addressing the underlying distress \u2014 not a moralising refusal or false promise. No NG12 cancer pathway applies (the cancer is already diagnosed).',
    script:{
      opening:'"Doctor, you know my cancer\u2019s terminal now. I\u2019ve thought about this a lot \u2014 when things get bad, I don\u2019t want to suffer or be a burden, I want to go on my own terms. So I\u2019m asking you directly: will you help me end my life when the time comes?"',
      facts:[
        { topic:'Respond with compassion, not judgement', text:'CORE \u2014 receive the request with COMPASSION and without judgement or alarm. This is a profound disclosure of distress; reacting with shock, a brisk refusal or moralising shuts the patient down. Acknowledge how hard it is to say, and that you want to understand.' },
        { topic:'Explore what lies behind it', text:'CRITICAL \u2014 EXPLORE the reasons behind the request, which is often a cry for help or driven by TREATABLE factors: fear of future SUFFERING/PAIN, loss of DIGNITY/CONTROL, fear of being a BURDEN, current uncontrolled SYMPTOMS, DEPRESSION/hopelessness, and existential/spiritual distress. Understanding the drivers is the heart of the consultation and often reveals modifiable needs.' },
        { topic:'Be honest about the law', text:'KEY \u2014 be HONEST and clear that assisted dying/assisted suicide is currently UNLAWFUL in the UK; a doctor cannot lawfully help a patient end their life and must not act on, assist or encourage it. Deliver this gently and factually, framed within continuing to care for him \u2014 not as a rejection of him.' },
        { topic:'Do not abandon the patient', text:'ESSENTIAL \u2014 reassure that you will NOT abandon or stop caring for him because of the request. Commit to walking alongside him, to excellent care, and to the explicit promise that you will do everything to ensure he is comfortable and not left to suffer \u2014 which addresses the fear driving many such requests.' },
        { topic:'Address the modifiable drivers', text:'Address the underlying needs: optimise SYMPTOM control and involve PALLIATIVE/specialist care; screen and treat DEPRESSION; offer psychological/spiritual support; undertake ADVANCE CARE PLANNING (wishes about future treatment, ceiling of care, DNACPR/ReSPECT, preferred place of care/death); and assess RISK (suicidality/immediate plans). Seek senior/palliative/ethics support and handle confidentiality appropriately.' },
        { topic:'The agenda', text:'Beneath the request is fear of suffering, loss of control and not wanting to be a burden. Respond compassionately, explore the drivers, be honest about the law without abandoning him, promise good symptom control/palliative care, treat depression, plan ahead, and assess risk \u2014 not a moralising refusal or a false promise. No NG12 cancer pathway applies (already diagnosed).' },
      ],
      ice:{ ideas:'Wants control over his death and to avoid suffering/being a burden; asks the GP to help him die.', concerns:'Fear of future suffering/pain, loss of dignity/control, being a burden; possibly current symptoms/low mood.', expectations:'(Stated) help to die. What he needs: compassionate exploration of the drivers, an honest legal position, reassurance of non-abandonment, excellent symptom/palliative care, depression treatment, advance care planning, and risk assessment.' },
      cues:['Direct request for assisted dying from a terminally ill patient \u2014 respond with compassion, explore the reasons (often a cry for help/treatable distress).','Be honest: assisted dying/suicide is currently unlawful in the UK; a doctor cannot lawfully assist \u2014 deliver gently, do NOT abandon the patient.','Address drivers: symptom control/palliative care, treat depression, advance care planning, reassurance he won\u2019t be left to suffer; assess suicidality.']
    },
    checkpoints:[
      { dom:'rto',   text:'Responds to the request with COMPASSION and without judgement/alarm \u2014 acknowledging how hard it is to raise \u2014 rather than a brisk refusal or moralising' },
      { dom:'tasks', text:'EXPLORES what lies behind the request (fear of suffering/pain, loss of dignity/control, being a burden, uncontrolled symptoms, depression/hopelessness, existential distress), recognising it is often a cry for help/treatable distress' },
      { dom:'tasks', text:'Is HONEST and clear that assisted dying/assisted suicide is currently UNLAWFUL in the UK and that a doctor cannot lawfully assist \u2014 delivered gently and factually, not as a rejection' },
      { dom:'rto',   text:'Reassures that he will NOT be abandoned \u2014 committing to continued care and the explicit promise that he will not be left to suffer' },
      { dom:'tasks', text:'Addresses the modifiable drivers \u2014 optimised symptom control/PALLIATIVE care, screening/treating DEPRESSION, psychological/spiritual support, ADVANCE CARE PLANNING (ceiling of care, ReSPECT/DNACPR, preferred place of care) \u2014 and assesses RISK (suicidality)' },
      { dom:'rto',   text:'Communicates sensitively, checks understanding, and seeks senior/palliative/ethics support while handling confidentiality appropriately' },
      { dom:'tasks', text:'Sensitively assesses mental capacity and whether the wish is fixed or fluctuating, and checks for external pressure or coercion behind the request' },
      { dom:'gs',    text:'Reaches a compassionate, lawful plan \u2014 explore + honest legal position + non-abandonment + symptom/palliative/mood/ACP support + risk assessment + follow-up \u2014 not a moralising refusal or false promise' },
    ],
    worked:[
      { lbl:'Receive it compassionately', txt:'"Thank you for trusting me with something so important and so hard to say. I can hear how much thought you\u2019ve given this. Before anything else, I want to understand what\u2019s behind it \u2014 can you tell me what you\u2019re most afraid of?"' },
      { lbl:'Explore the drivers', txt:'"\u2026 So it\u2019s the fear of suffering and of being a burden, and wanting some control. Those are completely understandable. Are you in pain or struggling with symptoms now? And how\u2019s your mood \u2014 this is a huge amount to carry."' },
      { lbl:'Honest about the law', txt:'"I\u2019m going to be honest with you, gently: in this country, helping someone end their life is against the law, and as your doctor I can\u2019t do that. But I want to be just as clear that this doesn\u2019t change my commitment to you one bit."' },
      { lbl:'Non-abandonment', txt:'"I will not abandon you. I will be here with you the whole way, and I promise you this: we will do everything we can to keep you comfortable and to make sure you are not left to suffer. That\u2019s a promise I can keep."' },
      { lbl:'Address the drivers', txt:'"Let\u2019s tackle what\u2019s frightening you. I\u2019ll get the palliative care team involved for the best possible symptom control, we\u2019ll look after your mood, and we\u2019ll plan ahead together \u2014 your wishes about treatment and where you\u2019re cared for \u2014 so you keep as much control as possible."' },
      { lbl:'Risk + support', txt:'"Can I ask \u2014 are you having thoughts of ending things now, or any plans? \u2026 Thank you for telling me. Let\u2019s keep talking regularly, and I\u2019ll bring in the right support. You are not on your own with this."' },
    ],
    learning:'A direct request for assisted dying from a terminally ill patient is a profound ethics/palliative consultation. Respond with COMPASSION and without judgement or alarm \u2014 a brisk refusal or moralising shuts the patient down. The heart of the consultation is EXPLORING what lies behind the request, which is often a cry for help or driven by treatable factors: fear of future suffering/pain, loss of dignity/control, fear of being a burden, current uncontrolled symptoms, depression/hopelessness, and existential/spiritual distress. Be HONEST and clear that assisted dying/assisted suicide is currently UNLAWFUL in the UK and that a doctor cannot lawfully assist a patient to end their life and must not act on, assist or encourage it \u2014 delivered gently and factually, framed within continuing care rather than as a rejection of the person. Crucially, do NOT abandon the patient: reassure that you will keep caring for him and make the explicit promise that you will do everything to keep him comfortable and not leave him to suffer, which directly addresses the fear driving many such requests. Address the modifiable drivers \u2014 optimise symptom control and involve palliative/specialist care, screen and treat depression, offer psychological/spiritual support, undertake advance care planning (wishes about future treatment, ceiling of care, DNACPR/ReSPECT, preferred place of care/death) \u2014 and assess risk (suicidality/immediate plans), seeking senior/palliative/ethics support and handling confidentiality appropriately. The skill is compassionate exploration, an honest legal position, non-abandonment, and addressing the underlying distress \u2014 not a moralising refusal or a false promise. No NICE NG12 cancer pathway applies (the cancer is already diagnosed).',
    knowledge:{
      guideline:'Request for assisted dying \u00b7 explore drivers (often treatable distress) \u00b7 honest UK legal position (unlawful) \u00b7 non-abandonment \u00b7 palliative/symptom/mood/ACP \u00b7 risk assessment',
      points:[
        { h:'Compassion first', t:'Receive the request without judgement/alarm; acknowledge how hard it is to raise. A brisk refusal/moralising shuts the patient down.' },
        { h:'Explore the drivers', t:'Fear of suffering/pain, loss of dignity/control, being a burden, uncontrolled symptoms, depression/hopelessness, existential distress \u2014 often a cry for help/treatable. This is the core of the consultation.' },
        { h:'Honest legal position', t:'Assisted dying/assisted suicide is currently unlawful in the UK; a doctor cannot lawfully assist and must not act on/encourage it. Deliver gently, framed within continued care.' },
        { h:'Do not abandon', t:'Reassure you will keep caring for him; promise to keep him comfortable and not leave him to suffer \u2014 addresses the fear driving many requests.' },
        { h:'Address modifiable drivers', t:'Optimise symptom control + palliative care; screen/treat depression; psychological/spiritual support; advance care planning (ceiling of care, ReSPECT/DNACPR, preferred place of care).' },
        { h:'Assess risk', t:'Assess suicidality/immediate plans; seek senior/palliative/ethics support; handle confidentiality appropriately.' },
        { h:'Never do', t:'Never react with shock/moralising; never agree to or encourage assisting; never abandon the patient; never give false promises; never miss treatable depression or uncontrolled symptoms.' },
        { h:'Safety-net & follow-up', t:'Ongoing regular contact; palliative/psychological/ethics support; risk safety-netting; advance care planning and symptom optimisation.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c269, c270, c271, c272);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'premature-ejaculation': {
      ceg: ['Gender, reproductive & sexual health', 'Mental health & addiction'],
      stem: {
        name: 'Ravi Anand', age: '28 years \u00b7 male',
        pmh: ['Booked "for antidepressants/feeling low" \u2014 \u26a0 hidden agenda: premature ejaculation', 'Distress, low confidence, relationship strain', 'Screen ED + mood/anxiety; classify lifelong vs acquired'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I asked for antidepressants \u2014 but really I finish far too quickly and it\u2019s wrecking my confidence and relationship."',
        reason: 'Face-to-face \u2014 stated reason masks a sexual concern.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Hidden agenda', d:'Pick up the hesitancy; safely surface the real issue (PE); destigmatise.' },
        { t:'2\u20104',  h:'Classify + ED', d:'Lifelong vs acquired (acquired \u2192 cause); check/treat coexisting ED first; TFTs if acquired.' },
        { t:'4\u20106',  h:'Mood/anxiety/relationship', d:'Performance anxiety, low mood (treat genuine depression), partner impact.' },
        { t:'6\u20109',  h:'Treatment', d:'Stop-start/squeeze, topical anaesthetic, SSRI (dapoxetine on-demand/daily); partner involvement.' },
        { t:'9\u201012', h:'Refer + safety-net', d:'Psychosexual referral if refractory; review; support.' }
      ],
      wordPics: {
        fail: 'Prescribes an antidepressant for "low mood" and misses the real concern; no PE classification/ED check; no treatment offered.',
        pass: 'Elicits the hidden agenda, classifies PE, checks ED, and offers behavioural/topical/SSRI treatment.',
        exc:  'Sensitively elicits the hidden agenda, classifies PE (lifelong vs acquired), checks/treats coexisting ED and mood/anxiety, offers behavioural + topical + SSRI treatment with partner involvement and psychosexual referral if refractory.'
      },
      avoid: [
        { dont:'"I\u2019ll start you on an antidepressant for your low mood." (missing the real issue)', instead:'"It sounds like the real worry is finishing quickly \u2014 that\u2019s common and treatable; let\u2019s focus there."', why:'Prescribing for "low mood" misses the disclosed sexual concern \u2014 the actual agenda.' },
        { dont:'(No ED check) treating PE in isolation.', instead:'"How are your erections? If you\u2019re rushing to avoid losing one, we\u2019d treat that first."', why:'Coexisting ED commonly drives PE and should be treated first.' },
        { dont:'(Dismissive) "It\u2019ll sort itself out, don\u2019t worry."', instead:'"There are techniques, creams and a tablet that genuinely help \u2014 let\u2019s pick an approach."', why:'Dismissing it leaves an embarrassed, distressed patient untreated.' }
      ]
    },

    'tennis-elbow': {
      ceg: ['New & undifferentiated presentations', 'Long-term conditions & cancer'],
      stem: {
        name: 'Greg Holloway', age: '46 years \u00b7 male',
        pmh: ['Weeks of lateral elbow pain; worse gripping/lifting/shaking hands', 'Tender lateral epicondyle; pain on resisted wrist extension; repetitive forearm use', 'No injury; no neuro symptoms'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"The outer side of my elbow\u2019s painful \u2014 it hurts to grip, lift the kettle or shake hands."',
        reason: 'Face-to-face \u2014 lateral elbow pain.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Recognise', d:'Lateral elbow pain + tender epicondyle + pain on gripping/resisted wrist extension = tennis elbow.' },
        { t:'2\u20104',  h:'Differential', d:'Medial epicondylitis, radial tunnel, cervical/referred, elbow OA; clinical diagnosis.' },
        { t:'4\u20107',  h:'Conservative care', d:'Load management, topical NSAIDs, forearm brace, physio with eccentric exercises, ergonomics.' },
        { t:'7\u20109',  h:'Injections + expectations', d:'Steroid injection cautiously (poor long-term); slow but favourable course (months).' },
        { t:'9\u201012', h:'Refer + safety-net', d:'Physio/orthopaedics if refractory; reconsider for neuro/atypical features.' }
      ],
      wordPics: {
        fail: 'Images routinely or jumps to a steroid injection first-line; no load management/eccentric-exercise advice; misses radial tunnel/cervical causes.',
        pass: 'Recognises tennis elbow, gives conservative care with realistic timeline, and uses injections cautiously.',
        exc:  'Recognises lateral epicondylitis, excludes mimics, manages with load management/brace/eccentric physiotherapy and ergonomics, uses corticosteroid injection cautiously, and sets a realistic slow-recovery expectation.'
      },
      avoid: [
        { dont:'"Let\u2019s get an X-ray/scan."', instead:'"This is a clinical diagnosis from your symptoms and the tender spot \u2014 imaging isn\u2019t routinely needed."', why:'Imaging is not routinely required for tennis elbow.' },
        { dont:'"A steroid injection will fix it \u2014 let\u2019s do that now."', instead:'"Injections help short-term but can slow long-term recovery \u2014 I\u2019d start with exercises and a brace."', why:'Corticosteroid injection has poorer long-term outcomes and isn\u2019t first-line.' },
        { dont:'(No timeline) implying a quick fix.', instead:'"It can take a few months but usually settles well with the exercises."', why:'Unrealistic expectations cause frustration; the course is slow but favourable.' }
      ]
    },

    'threadworm': {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Ivy (mother present)', age: '5 years \u00b7 female',
        pmh: ['Intense nocturnal perianal itch + disturbed sleep; visible tiny white threads', 'Sibling now scratching; household spread', 'Parent fears it means poor hygiene'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Her bottom\u2019s really itchy at night and I\u2019ve seen tiny white threads \u2014 the whole family keeps catching it."',
        reason: 'Face-to-face \u2014 perianal itch in a child.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Recognise + reassure', d:'Nocturnal perianal itch + white threads = threadworm; common, NOT poor hygiene.' },
        { t:'2\u20104',  h:'Explain spread', d:'Faeco-oral via eggs (scratching \u2192 nails \u2192 mouth/surfaces); spreads through households.' },
        { t:'4\u20107',  h:'Treat whole household', d:'Mebendazole single dose for everyone, repeat ~2 weeks; not index child only.' },
        { t:'7\u20109',  h:'Hygiene measures', d:'Hot-wash bedding/nightwear/towels, morning bath, hand/nail hygiene, short nails, no towel sharing (~2 weeks).' },
        { t:'9\u201012', h:'Caveats + safety-net', d:'Hygiene-first in pregnancy/very young; return if persistent despite whole-household treatment.' }
      ],
      wordPics: {
        fail: 'Treats only the index child; omits the repeat dose or hygiene; reinforces the poor-hygiene stigma; ignores pregnancy/young-child caveats.',
        pass: 'Recognises threadworm, reassures, and treats the whole household with mebendazole + hygiene.',
        exc:  'Recognises threadworm, reassures (common, not poor hygiene), treats the whole household (mebendazole + repeat at 2 weeks) with rigorous hygiene measures, advises the pregnancy/young-child caveat, and safety-nets.'
      },
      avoid: [
        { dont:'"I\u2019ll give Ivy a dose of worm medicine."', instead:'"Everyone in the house needs treating together, with a repeat in two weeks \u2014 otherwise she\u2019ll just get re-infected."', why:'Treating only the index child leads to re-infection.' },
        { dont:'(Stigma) "You\u2019ll need to keep things cleaner."', instead:'"This has nothing to do with cleanliness \u2014 nearly every family gets threadworms."', why:'The poor-hygiene stigma is inaccurate and shaming.' },
        { dont:'(No hygiene measures) prescribing the tablet alone.', instead:'"Alongside the medicine, hot-wash the bedding, morning showers and hand/nail hygiene for two weeks break the cycle."', why:'Hygiene measures are essential to prevent re-infection.' }
      ]
    },

    'assisted-dying-request': {
      ceg: ['End-of-life & palliative care', 'Professionalism & ethics'],
      stem: {
        name: 'Harold Vance', age: '67 years \u00b7 male',
        pmh: ['Terminal illness (e.g. metastatic cancer/MND)', '\u26a0 Direct request for help to end his life "when the time comes"', 'Drivers: fear of suffering, loss of dignity/control, being a burden; ?symptoms/mood'],
        meds: ['Analgesia / palliative medications'],
        allergy: 'NKDA',
        recent: '"I\u2019ve got a terminal diagnosis and I want help to end my life when the time comes \u2014 will you help me?"',
        reason: 'Face-to-face \u2014 terminally ill patient raising assisted dying.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Compassion', d:'Receive without judgement/alarm; acknowledge how hard it is to say.' },
        { t:'2\u20105',  h:'Explore the drivers', d:'Fear of suffering/pain, dignity/control, being a burden, symptoms, depression/hopelessness, existential distress.' },
        { t:'5\u20107',  h:'Honest legal position', d:'Assisted dying/suicide currently unlawful in the UK; doctor cannot lawfully assist \u2014 gently, framed in continued care.' },
        { t:'7\u20109',  h:'Non-abandonment', d:'Reassure continued care + promise comfort/not left to suffer.' },
        { t:'9\u201012', h:'Address drivers + risk', d:'Palliative/symptom control, treat depression, advance care planning, suicidality assessment, senior/ethics support.' }
      ],
      wordPics: {
        fail: 'Reacts with shock/moralising or a brisk refusal; or appears to agree/encourage; abandons the patient; misses treatable distress/depression and symptom control.',
        pass: 'Responds compassionately, explores the drivers, states the legal position honestly, and addresses palliative/mood needs without abandonment.',
        exc:  'Responds with compassion, explores the underlying drivers, is honest that assisted dying is unlawful in the UK while reassuring non-abandonment, addresses symptom/palliative/mood/advance-care-planning needs, assesses suicidality, and seeks senior/ethics support.'
      },
      avoid: [
        { dont:'(Shock/moralising) "I could never do that \u2014 it\u2019s wrong."', instead:'"Thank you for trusting me with this \u2014 help me understand what\u2019s behind it."', why:'A shocked/moralising response shuts down the patient and misses the distress.' },
        { dont:'(Abandonment) "There\u2019s nothing I can do for you then."', instead:'"I can\u2019t help you end your life \u2014 that\u2019s the law \u2014 but I will not abandon you, and I\u2019ll make sure you\u2019re not left to suffer."', why:'Abandoning the patient deepens despair and neglects the duty of care.' },
        { dont:'(Vague agreement) "Let\u2019s see when the time comes."', instead:'"To be honest with you, assisting someone to die is unlawful and I can\u2019t do it \u2014 but here\u2019s everything I can do to support you."', why:'Implying possible future assistance is unlawful and dishonest; clarity with compassion is required.' }
      ]
    }

  });

})();
