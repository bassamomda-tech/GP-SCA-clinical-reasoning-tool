/* ============================================================
   Reasoning GP — Case Library batch 33: "The frail older adult & prescribing safety"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Delirium-not-sedation; covert over-treatment; carer safety;
   the iatrogenic (anticholinergic) mimic. No NG12 link applies.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases32.js.
   ============================================================ */

(function(){

  /* ============ 125. TELEPHONE — New confusion in a care-home resident: delirium, not sedation ============ */
  const c125 = {
    id:'carehome-delirium', title:'"She\u2019s suddenly confused and agitated \u2014 can you prescribe something to settle her?"', type:'telephone', duration:12,
    meta:{ age:86, sex:'F', setting:'Telephone \u2014 care-home nurse requesting sedation for a resident.', system:'Older adults / Delirium' },
    brief:'Caller: a care-home nurse about Mrs Edna Hartley, 86 (background mild dementia), who over the last 24\u201348 hours has become acutely MORE confused, agitated, "not herself", not sleeping, picking at the air. The home wants "something to calm her down" (a sedative/antipsychotic). On questioning: reduced oral intake, possibly fewer wet pads / offensive urine, mildly febrile, recently constipated, and started on a new medication last week. This is acute DELIRIUM with a cause to find \u2014 not a behaviour to sedate.',
    script:{
      opening:'"Hi doctor, calling about one of our residents, Edna, 86, she\u2019s got a bit of dementia normally but the last day or two she\u2019s gone really confused and agitated \u2014 up all night, picking at things, not herself at all. The staff are struggling. Could you prescribe something to settle her down, a sedative or one of those antipsychotics? We just need her calmer, really."',
      facts:[
        { topic:'Delirium, not baseline dementia', text:'The key: this is an ACUTE change (hours\u2013days) on a background of dementia \u2014 fluctuating confusion, agitation, altered alertness, disturbed sleep-wake cycle, visual hallucinations ("picking at the air") \u2014 i.e. DELIRIUM, which is a sign of an underlying physical illness, NOT a behaviour to be sedated. Sedation treats the staff\u2019s problem, not the patient\u2019s, and antipsychotics in delirium/dementia carry real harms (falls, stroke, death).' },
        { topic:'Find the cause',      text:'On questioning: likely precipitants \u2014 INFECTION (UTI/chest \u2014 offensive urine, mild fever), CONSTIPATION, DEHYDRATION/reduced intake, and a NEW MEDICATION (possible anticholinergic/sedative/opioid). The task is to identify and treat the cause(s): assess/examine, urine and obs, review the new drug, hydration, bowels, pain \u2014 the "PINCH ME"/screen approach.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 the home\u2019s request for sedation is driven by being short-staffed and overwhelmed (genuine pressure), and possibly a culture of reaching for chemical restraint. There may also be an unspoken wish to avoid the hassle of sending her to hospital or doing the work-up. The GP must support the stretched staff while NOT colluding with inappropriate sedation \u2014 redirecting to finding and treating the cause and using non-drug measures.' },
        { topic:'Non-drug first',      text:'Delirium management is first about treating the cause and using environmental/non-pharmacological measures (reorientation, familiar faces, hydration, sleep hygiene, glasses/hearing aids, pain relief, mobilise, treat constipation). Sedation is a last resort for severe distress/risk, at the lowest dose, never the first move.' },
        { topic:'What\u2019s needed',      text:'Officially: a sedative to calm her. What\u2019s needed: recognition of delirium, a cause work-up (assess/examine, urine, obs, bloods, medication review, bowels/hydration), non-drug measures first, treatment of the precipitant, support for the stretched staff, and sedation only as a carefully-justified last resort \u2014 with a low threshold for review/admission if unwell.' },
      ],
      ice:{
        ideas:'She\u2019s "playing up"/her dementia is worse and a sedative will calm her down.',
        concerns:'HIDDEN AGENDA \u2014 short-staffed and overwhelmed, possibly a culture of chemical restraint, and a wish to avoid the work-up/hospital; genuine pressure behind the request.',
        expectations:'A sedative/antipsychotic to settle her. What\u2019s actually needed: recognition of delirium, a cause work-up, non-drug measures first, treating the precipitant, staff support, and sedation only as a justified last resort.'
      },
      cues:['ACUTE confusion/agitation over 24\u201348h on a dementia background, fluctuating, hallucinating \u2014 delirium with a cause, not a behaviour to sedate.','Offensive urine + mild fever + constipation + reduced intake + new medication \u2014 the precipitants to find and treat.','"Just prescribe something to settle her" \u2014 sedation solves the staff\u2019s problem, not hers; redirect, support the staff.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises this as ACUTE DELIRIUM (acute, fluctuating change in cognition/alertness on a dementia background, with hallucinations and sleep-wake disturbance) \u2014 a sign of underlying physical illness \u2014 NOT a behaviour to sedate, and does not simply prescribe a sedative/antipsychotic on request' },
      { dom:'tasks', text:'Systematically seeks the CAUSE(S): infection (UTI/chest \u2014 urine, obs, fever), constipation, dehydration/reduced intake, pain/urinary retention, and crucially the NEW MEDICATION (anticholinergic/sedative/opioid) \u2014 a "PINCH ME"-type screen \u2014 and plans assessment/examination, bloods and a medication review' },
      { dom:'tasks', text:'Prioritises NON-PHARMACOLOGICAL management: treat the precipitant, plus reorientation, familiar staff/faces, hydration, sleep hygiene, glasses/hearing aids, pain relief, mobilisation and treating constipation \u2014 before any sedation' },
      { dom:'tasks', text:'Recognises the HARMS of antipsychotics/sedatives in delirium/dementia (falls, stroke, increased mortality, worsening delirium) and reserves them as a LAST resort for severe distress/risk to self or others, at the lowest effective dose for the shortest time, with review' },
      { dom:'tasks', text:'Has a clear plan and threshold for ESCALATION: in-person assessment (GP visit), and admission if she is systemically unwell / cause cannot be managed in the home / safety concerns \u2014 not leaving a potentially septic elderly patient sedated and unassessed' },
      { dom:'rto',   text:'SUPPORTS the stretched, overwhelmed staff with empathy while NOT colluding with inappropriate chemical restraint \u2014 redirecting firmly but kindly to finding the cause and using non-drug measures' },
      { dom:'rto',   text:'Frames the approach around the patient\u2019s dignity and best interests (and the staff\u2019s genuine difficulty), gaining their cooperation with the work-up' },
      { dom:'gs',    text:'Safety-nets and acts: the cause work-up and review/visit plan, non-drug measures, red flags for urgent escalation/admission (deteriorating, septic, unsafe), documentation, and a follow-up \u2014 treating the delirium\u2019s cause, not chemically restraining the patient' },
    ],
    worked:[
      { lbl:'Reframe it as delirium', txt:'"Thank you for ringing \u2014 and I can hear the staff are really stretched. But before any sedative, the key thing is this: a sudden change like this over a day or two, on top of her usual dementia, isn\u2019t just \u2018her dementia getting worse\u2019. It\u2019s what we call delirium, and it\u2019s almost always a sign her body is unwell with something we can find and treat. Sedating her would calm the ward but miss what\u2019s actually wrong \u2014 and those drugs carry real risks for her, including falls and worse."' },
      { lbl:'Hunt the cause',       txt:'"So let\u2019s find the cause together. You mentioned offensive urine and she\u2019s a bit warm \u2014 that points to a possible infection. Is she constipated? How\u2019s she drinking? And crucially \u2014 was any new medication started recently? \u2026 Last week, yes. All of those \u2014 infection, constipation, not drinking, a new drug \u2014 are classic triggers, and they\u2019re treatable."' },
      { lbl:'Non-drug first',       txt:'"While we sort the cause, the things that genuinely help her settle aren\u2019t sedatives: keep her calm and reoriented, familiar staff where you can, her glasses and hearing aids on, plenty to drink, light in the day and quiet at night, deal with any pain or constipation. Those reduce the agitation safely."' },
      { lbl:'Assess properly',      txt:'"I\u2019m going to come and assess her / arrange an assessment \u2014 examine her, check a urine sample and her obs, and review that new medication. If she\u2019s clearly unwell with an infection that the home can\u2019t manage, or she\u2019s deteriorating, we may need to get her to hospital. I don\u2019t want to leave an 86-year-old sedated when she might have a treatable infection."' },
      { lbl:'Sedation as last resort', txt:'"I\u2019m not saying we\u2019d NEVER use a calming medicine \u2014 if she became severely distressed or a danger to herself, we might, briefly and at a tiny dose, and reviewed. But it\u2019s the last step, not the first, and only alongside treating the cause."' },
      { lbl:'Support staff + safety-net', txt:'"I do appreciate how hard this is when you\u2019re short-staffed \u2014 you\u2019re doing the right thing by calling rather than just managing it. Let\u2019s get the urine and obs done, I\u2019ll assess her, and ring me back if she becomes more unwell, drowsy, or you\u2019re worried about her safety. We treat what\u2019s making her like this \u2014 we don\u2019t just switch her off."' },
    ],
    learning:'Acute, fluctuating confusion and agitation over hours\u2013days on a background of dementia \u2014 with hallucinations and sleep-wake disturbance \u2014 is DELIRIUM, a sign of underlying physical illness, NOT a behaviour to be sedated on request. The task is to find and treat the cause(s): a systematic screen (infection \u2014 UTI/chest; constipation; dehydration/reduced intake; pain/retention; and crucially a NEW MEDICATION, often anticholinergic/sedative/opioid \u2014 "PINCH ME"), with assessment/examination, urine, obs, bloods and a medication review. Non-pharmacological measures come FIRST (treat the precipitant, reorientation, familiar faces, hydration, sleep hygiene, glasses/hearing aids, pain relief, mobilise, treat constipation); antipsychotics/sedatives carry real harms in delirium/dementia (falls, stroke, increased mortality, worsening delirium) and are a last resort for severe distress/risk only, at the lowest dose with review. The examinable hidden agenda is a stretched, overwhelmed care home seeking chemical restraint to manage a staffing problem; support the staff with empathy while NOT colluding \u2014 redirect to the cause and non-drug measures, assess in person, and escalate/admit if she is septic or unsafe.',
    knowledge:{
      guideline:'NICE CG103 delirium · NICE dementia (antipsychotic harms) · STOPP-START / anticholinergic burden',
      points:[
        { h:'Recognise delirium vs dementia', t:'Delirium = ACUTE onset (hours\u2013days), FLUCTUATING course, inattention, altered consciousness/alertness, disorganised thinking, perceptual disturbance (hallucinations), disturbed sleep-wake cycle \u2014 often superimposed on dementia. A sudden change in a person with dementia is delirium until proven otherwise, not "worse dementia".' },
        { h:'It is a medical emergency sign', t:'Delirium signals underlying physical illness and carries high morbidity/mortality. The priority is to identify and treat the cause(s), not to sedate. Sedation manages others\u2019 distress, not the patient\u2019s, and can worsen the delirium.' },
        { h:'Screen the causes', t:'Use a structured screen (e.g. PINCH ME: Pain, INfection, Constipation, deHydration, Medication, Environment/Electrolytes). Common: UTI/chest infection, constipation, dehydration, urinary retention, pain, hypoxia, electrolyte disturbance, and newly-started/anticholinergic/sedative/opioid drugs. Assess, examine, urine, obs, bloods; review medications.' },
        { h:'Non-pharmacological first', t:'Treat the cause; optimise environment \u2014 reorientation, familiar staff/family, lighting and sleep hygiene, hydration and nutrition, sensory aids (glasses/hearing aids), pain control, mobilisation, manage constipation, minimise lines/catheters. These reduce agitation without drug harms.' },
        { h:'Antipsychotics/sedatives \u2014 last resort', t:'Reserve short-term, low-dose sedation (e.g. cautious haloperidol, or per local guidance) ONLY for severe agitation causing risk to self/others when non-drug measures have failed \u2014 these drugs increase falls, stroke and mortality in older people with dementia/delirium. Review and stop promptly.' },
        { h:'Assess and escalate', t:'Arrange in-person assessment; admit if systemically unwell/septic, the cause cannot be managed in the community, or there are safety concerns. Don\u2019t leave a potentially septic elderly patient sedated and unassessed.' },
        { h:'Never do', t:'Never prescribe a sedative for new confusion on request without finding the cause; never accept "her dementia\u2019s just worse"; never make antipsychotics the first step; never overlook the new-medication/constipation/infection triggers; never collude with chemical restraint to solve a staffing problem.' },
        { h:'Safety-net & follow-up', t:'Cause work-up (urine, obs, bloods, medication review) and in-person assessment; non-drug measures; escalation/admission if unwell/unsafe; sedation only as a justified, reviewed last resort; staff support; documentation and follow-up.' }
      ]
    }
  };

  /* ============ 126. TELEPHONE — Recurrent UTIs in a woman: prophylaxis ladder, not endless antibiotics ============ */
  const c126 = {
    id:'recurrent-uti-woman', title:'"It\u2019s my fourth water infection this year \u2014 just give me antibiotics again"', type:'telephone', duration:12,
    meta:{ age:43, sex:'F', setting:'Telephone \u2014 recurrent UTIs requesting more antibiotics.', system:'Urology / Recurrent UTI in women' },
    brief:'Mrs Carla Mendez, 43. Rings for "yet another" course of antibiotics for recurrent UTIs (4th this year), with dysuria/frequency. She wants a quick phone script. On exploration: a clear post-coital pattern, she\u2019s peri-menopausal with vaginal dryness, drinks little, and is anxious and embarrassed about the link to sex. Previous cultures confirmed E. coli. No red flags (no fever/loin pain/haematuria today). She wants the antibiotic and to not "make it a whole thing". No pregnancy.',
    script:{
      opening:'"Hi \u2014 sorry, it\u2019s me again. I\u2019ve got another water infection, I just know the feeling now, burning and weeing constantly. It\u2019s my fourth this year. Can you just put another course of antibiotics through? I don\u2019t need to come in, I know what it is. I just want to nip it before the weekend. Same as last time is fine."',
      facts:[
        { topic:'Confirm and treat appropriately', text:'Recurrent UTI in a woman: confirm symptoms (and ideally a urine culture to guide therapy and confirm recurrence vs relapse/resistance), treat the acute episode appropriately \u2014 but the recurrence (\u22652 in 6 months / \u22653 in a year) is the real issue, warranting a PROPER review rather than repeated reflex phone scripts (which drive resistance and miss treatable contributors).' },
        { topic:'Address the contributors', text:'On exploration: a POST-COITAL pattern (consider post-coital prophylaxis/voiding), peri-menopausal VAGINAL ATROPHY/dryness (topical vaginal OESTROGEN markedly reduces recurrent UTIs in this group \u2014 a key, often-missed intervention), and low fluid intake. Address these rather than just antibiotics.' },
        { topic:'The prophylaxis ladder', text:'Recurrent UTI management is a LADDER: behavioural/self-care (hydration, voiding after sex, not delaying voiding), topical vaginal oestrogen if peri/post-menopausal, consider self-start/standby antibiotics or single post-coital prophylactic dose, then continuous antibiotic prophylaxis if needed \u2014 with review. Non-antibiotic options (e.g. D-mannose) may be discussed. Endless empirical courses without this is poor care.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 the "just give me antibiotics, don\u2019t make it a thing" is driven by EMBARRASSMENT about the post-coital link and the menopausal dryness (and its effect on her sex life/relationship), which she\u2019s reluctant to discuss, plus a wish to avoid examination. There may be relief available: naming the post-coital and atrophy links de-shames it and offers a real fix (vaginal oestrogen) rather than a cycle of infections. Surfacing this gently is the consultation.' },
        { topic:'What she needs',      text:'Officially: another antibiotic course by phone. What she needs: appropriate treatment of the acute episode (with a culture), and a proper recurrent-UTI review \u2014 the prophylaxis ladder, topical vaginal oestrogen, post-coital measures, hydration \u2014 with the embarrassment/sexual-link and dryness addressed, not endless reflex scripts.' },
      ],
      ice:{
        ideas:'It\u2019s the same old water infection; another antibiotic course over the phone will fix it, no need to make a thing of it.',
        concerns:'HIDDEN AGENDA \u2014 embarrassment about the post-coital link and peri-menopausal dryness (and its effect on her sex life), reluctance to discuss it or be examined; wants to avoid scrutiny.',
        expectations:'A quick phone antibiotic. What she actually needs: appropriate acute treatment plus a proper recurrent-UTI review (prophylaxis ladder, topical vaginal oestrogen, post-coital measures, hydration), with the embarrassment addressed.'
      },
      cues:['4th UTI this year \u2014 recurrent UTI is the real issue; needs a proper review, not reflex phone scripts.','Post-coital pattern + peri-menopausal dryness \u2014 the treatable contributors (vaginal oestrogen) the antibiotic cycle misses.','"Don\u2019t make it a thing" \u2014 embarrassment about the sexual link/dryness; surface it gently, de-shame, offer a real fix.']
    },
    checkpoints:[
      { dom:'tasks', text:'Treats the acute episode appropriately but recognises RECURRENT UTI (\u22653/year) as the real issue needing a proper review \u2014 not endless reflex phone scripts \u2014 and ideally confirms with a URINE CULTURE to guide therapy and exclude resistance/relapse' },
      { dom:'tasks', text:'Explores and addresses the CONTRIBUTORS: the post-coital pattern, peri-menopausal vaginal ATROPHY/dryness, and low fluid intake \u2014 rather than just prescribing' },
      { dom:'tasks', text:'Offers TOPICAL VAGINAL OESTROGEN for the peri/post-menopausal patient \u2014 a key, evidence-based, often-missed intervention that substantially reduces recurrent UTIs \u2014 having identified the atrophy' },
      { dom:'tasks', text:'Works through the PROPHYLAXIS LADDER: self-care (hydration, post-coital voiding, not delaying voiding), post-coital single-dose or self-start/standby antibiotics, and continuous antibiotic prophylaxis if needed \u2014 with review; may discuss non-antibiotic options (e.g. D-mannose) and antimicrobial-stewardship' },
      { dom:'tasks', text:'Considers when to investigate/refer (haematuria, persistent infection despite treatment, atypical organisms, suspected structural cause, recurrent in men) and screens red flags (fever, loin pain, haematuria \u2014 pyelonephritis)' },
      { dom:'rto',   text:'Surfaces the embarrassment about the post-coital link and menopausal dryness gently and non-judgementally, de-shaming it, so the real (treatable) contributors can be addressed rather than colluding with "don\u2019t make it a thing"' },
      { dom:'rto',   text:'Frames the review and vaginal oestrogen as the route OUT of the infection cycle (and helpful for her sex life), engaging her rather than just refilling antibiotics' },
      { dom:'gs',    text:'Safety-nets and follows up: urine culture, the prophylaxis plan and vaginal oestrogen, pyelonephritis red flags (fever/loin pain/vomiting \u2192 urgent), a review to assess the plan, and stewardship \u2014 ending the reflex-script cycle' },
    ],
    worked:[
      { lbl:'Treat now, but pause', txt:'"I\u2019ll help you with this flare \u2014 but four in a year tells me we should do more than keep firing antibiotics at it, because that just breeds resistance and never fixes WHY it keeps coming back. Let me sort today, ideally with a urine sample to be sure which bug, and then let\u2019s actually break the cycle."' },
      { lbl:'Open the door gently', txt:'"Can I ask a couple of things \u2014 no embarrassment, this is really common: do you notice they often come on after sex? \u2026 And being around the menopause, any vaginal dryness or soreness? \u2026 Thank you for telling me. Those two things are huge clues, and the good news is they\u2019re very treatable \u2014 it\u2019s not just bad luck."' },
      { lbl:'The vaginal oestrogen fix', txt:'"Here\u2019s something that genuinely changes this for a lot of women your age: a low-dose oestrogen cream or pessary used in the vagina. As we go through the menopause the tissues thin and dry, which makes infections much more likely \u2014 and topping up the oestrogen locally dramatically cuts the UTIs AND helps the dryness and your comfort during sex. It\u2019s a tiny dose, used locally, and very safe."' },
      { lbl:'The ladder',           txt:'"Alongside that: drink more through the day, wee after sex, don\u2019t hold on when you need to go. If those aren\u2019t enough, we can give you a single antibiotic to take after sex, or a stand-by course to start yourself at the first twinge, or a low daily dose for a while \u2014 a proper plan, stepped up only as needed."' },
      { lbl:'De-shame it',          txt:'"And honestly \u2014 the link with sex is nothing to be embarrassed about, it\u2019s just anatomy and incredibly common. I\u2019d much rather you could tell me than suffer four infections a year in silence. Sorting this should mean fewer infections AND a better, more comfortable sex life."' },
      { lbl:'Safety-net',           txt:'"So: I\u2019ll treat today with a culture, start you on the vaginal oestrogen, and set up the prevention plan, then review how it\u2019s going. If you ever get a fever, loin/back pain, vomiting, or blood in your urine \u2014 that\u2019s a kidney infection, contact us urgently. You rang for another quick course; what I\u2019d like to give you is a way to stop needing them."' },
    ],
    learning:'Recurrent UTI in a woman (\u22653/year) is the real issue \u2014 not a reflex phone-script opportunity \u2014 and warrants a proper review (ideally a urine culture to guide therapy and exclude resistance/relapse) rather than endless empirical courses that drive resistance and miss treatable contributors. Explore and address the contributors: the post-coital pattern, peri-menopausal vaginal ATROPHY/dryness, and low fluid intake. The key, often-missed intervention is TOPICAL VAGINAL OESTROGEN in peri/post-menopausal women, which substantially reduces recurrence (and helps dryness/dyspareunia). Work the prophylaxis LADDER \u2014 self-care (hydration, post-coital voiding), post-coital single-dose or self-start/standby antibiotics, then continuous prophylaxis if needed, with review and stewardship \u2014 and know when to investigate/refer (haematuria, treatment failure, atypical organisms, structural concern, men). The examinable hidden agenda is embarrassment about the sexual link and menopausal dryness driving "just give me antibiotics, don\u2019t make it a thing"; surface and de-shame it gently, frame vaginal oestrogen and the ladder as the route OUT of the cycle (and better for her sex life), and safety-net pyelonephritis.',
    knowledge:{
      guideline:'NICE NG112 recurrent UTI · CKS UTI (recurrent) · BMS vaginal atrophy / topical oestrogen',
      points:[
        { h:'Define and confirm recurrent UTI', t:'Recurrent UTI: \u22652 infections in 6 months or \u22653 in 12 months. Confirm episodes (urine culture to confirm infection, identify the organism and exclude resistance/relapse) rather than treating repeatedly on symptoms alone \u2014 this also supports antimicrobial stewardship.' },
        { h:'Identify and treat contributors', t:'Look for and address: post-coital pattern, vaginal atrophy (peri/post-menopause), incomplete bladder emptying/retention, constipation, low fluid intake, and behavioural factors. Treating these reduces recurrence more than antibiotics alone.' },
        { h:'Topical vaginal oestrogen', t:'In peri/post-menopausal women, topical vaginal oestrogen significantly reduces recurrent UTIs (and treats genitourinary syndrome of menopause/atrophy and dyspareunia). Low systemic absorption and a good safety profile \u2014 a key, frequently-missed intervention.' },
        { h:'The prophylaxis ladder', t:'Self-care first (hydration, voiding after intercourse, not delaying micturition); then options per NG112: single post-coital antibiotic prophylaxis (if clearly post-coital), self-start/standby antibiotics, or continuous low-dose antibiotic prophylaxis with review (e.g. trimethoprim or nitrofurantoin, mindful of resistance and duration). Non-antibiotic measures (e.g. D-mannose, cranberry) may be discussed though evidence varies.' },
        { h:'Investigate/refer when indicated', t:'Consider investigation/referral for: visible haematuria, persistent infection despite treatment, recurrent UTI in men, atypical/resistant organisms, suspected structural/functional abnormality, or rapid recurrence. Always exclude pregnancy and screen pyelonephritis red flags.' },
        { h:'De-shame and engage', t:'Embarrassment about the sexual link and menopausal dryness drives "just give me antibiotics". Normalise and de-shame; explore sensitively; frame vaginal oestrogen and the ladder as the route out of the cycle and as improving sexual comfort \u2014 engaging the patient in prevention.' },
        { h:'Never do', t:'Never keep issuing reflex phone antibiotics for recurrent UTI without a review; never miss vaginal atrophy/topical oestrogen in a peri/post-menopausal woman; never ignore the post-coital pattern; never skip culture confirmation/stewardship; never let embarrassment prevent addressing the real contributors.' },
        { h:'Safety-net & follow-up', t:'Urine culture; prophylaxis ladder + vaginal oestrogen; pyelonephritis red flags (fever, loin pain, vomiting, haematuria) \u2192 urgent; review the prevention plan; investigate/refer per indications.' }
      ]
    }
  };

  /* ============ 127. TELEPHONE — Aggression in dementia: carer safety + realistic options ============ */
  const c127 = {
    id:'dementia-aggression-carer', title:'"He\u2019s lashed out at me again \u2014 I can\u2019t cope, just sedate him"', type:'telephone', duration:12,
    meta:{ age:62, sex:'F', setting:'Telephone \u2014 wife/carer of a man with dementia who is becoming aggressive.', system:'Older adults / BPSD & carer safety' },
    brief:'Caller: Mrs Pauline Frost, 62, sole carer for her husband Geoff (74, dementia \u2014 likely mixed/frontotemporal features), who has become increasingly agitated and physically AGGRESSIVE \u2014 grabbed and pushed her, shouting, worse in the evenings. She is exhausted, frightened, tearful, and wants the GP to "sedate him" so she\u2019s safe. There may be unmet needs/triggers (pain, constipation, boredom, infection, environment). Safeguarding of HER (and him) and carer breakdown are central.',
    script:{
      opening:'(Tearful, shaky.) "Doctor, I don\u2019t know what to do. Geoff\u2019s got worse \u2014 he\u2019s started lashing out, he grabbed my wrist hard yesterday and pushed me, and he shouts terrible things in the evenings. I\u2019m frightened of my own husband. Can you just give him something to sedate him, calm him right down? I can\u2019t keep him safe OR me. I\u2019m at the end of my rope, I really am."',
      facts:[
        { topic:'BPSD with triggers, not just “sedate”', text:'Behavioural and psychological symptoms of dementia (BPSD \u2014 agitation, aggression, sundowning) usually have TRIGGERS/UNMET NEEDS: pain, constipation, infection (delirium), hunger/thirst, boredom, overstimulation, fear/disorientation, communication difficulty, the environment. First-line is to identify and address these and use non-pharmacological strategies \u2014 NOT reflex sedation/antipsychotics, which carry real harms (stroke, mortality) and are reserved for severe risk.' },
        { topic:'Carer SAFETY & breakdown', text:'CRITICAL \u2014 she is being physically harmed and is frightened, exhausted and "at the end of her rope". This is a carer-safety and carer-breakdown emergency in its own right: her immediate safety, her risk of burnout/depression, and the risk of placement breakdown must be assessed and supported (urgent carer support, respite, crisis/old-age psychiatry input, a safety plan). The patient\u2019s aggression AND the carer\u2019s welfare are both the consultation.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 beneath "just sedate him" is a woman at breaking point who may be experiencing domestic harm (from an unwell husband), feels guilt and shame ("frightened of my own husband"), grief for the man he was, and isolation, and who may be moments from collapse or unable to continue caring. She needs to be HEARD and supported as the patient too; the sedation request is a cry for rescue. There may also be safeguarding considerations both ways.' },
        { topic:'Realistic options',   text:'Realistic plan: assess/treat triggers (pain, constipation, infection), non-drug strategies (routine, calm environment, distraction, addressing evening triggers/sundowning), URGENT carer support and respite, old-age psychiatry/memory-service or crisis-team input, a safety plan for her, and \u2014 only if severe persistent risk after the above \u2014 cautious, reviewed pharmacological treatment. Consider whether the situation is now unsafe at home.' },
        { topic:'What\u2019s needed',      text:'Officially: sedate him so she\u2019s safe. What\u2019s needed: take the carer\u2019s safety and breakdown seriously NOW, assess/treat the triggers for the aggression, non-drug strategies, urgent carer support/respite and specialist input, a safety plan, and pharmacological treatment only as a justified last resort \u2014 supporting HER as much as managing HIM.' },
      ],
      ice:{
        ideas:'He needs sedating to make him safe and calm; that\u2019s the answer.',
        concerns:'HIDDEN AGENDA \u2014 she\u2019s at breaking point, being physically harmed, frightened, guilt-ridden and grieving the man he was, isolated and possibly unable to continue; the sedation request is a cry for rescue.',
        expectations:'For the GP to sedate him. What\u2019s actually needed: her safety and breakdown taken seriously now, the triggers for the aggression assessed/treated, non-drug strategies, urgent carer support/respite and specialist input, a safety plan, and medication only as a last resort.'
      },
      cues:['Physical aggression + sundowning in dementia \u2014 BPSD with triggers/unmet needs to find, not a reflex to sedate.','"I\u2019m frightened of my own husband / at the end of my rope" \u2014 carer safety + breakdown emergency; she is the patient too.','"Just sedate him" \u2014 a cry for rescue; support her, assess triggers, get urgent help and respite.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the aggression as BPSD with likely TRIGGERS/unmet needs (pain, constipation, infection/delirium, hunger/thirst, boredom, overstimulation, fear, environment, evening sundowning) to be identified and addressed \u2014 NOT a behaviour to reflexively sedate' },
      { dom:'tasks', text:'Takes the CARER\u2019S SAFETY and breakdown seriously as an urgent issue: assesses her immediate safety (is she safe right now?), the physical harm, her exhaustion/mood/risk, and the risk of caring breakdown \u2014 treating her as a patient in her own right' },
      { dom:'tasks', text:'Mobilises URGENT carer support: respite/emergency respite, carer\u2019s assessment, social services, old-age psychiatry/memory service or crisis team referral, and a SAFETY PLAN for her (what to do if she feels unsafe, who to call, removing means of harm)' },
      { dom:'tasks', text:'Prioritises NON-PHARMACOLOGICAL management of the BPSD: treat triggers (pain relief, constipation, infection), routine, calm low-stimulation environment, distraction/redirection, addressing evening triggers \u2014 before any medication' },
      { dom:'tasks', text:'Recognises that antipsychotics/sedatives in dementia carry significant harms (stroke, mortality, falls) and reserves them for SEVERE persistent risk after non-drug measures, at the lowest dose with specialist input/review \u2014 and considers whether home care is still safe/sustainable' },
      { dom:'rto',   text:'HEARS and supports the distressed, frightened carer with compassion \u2014 validates the fear, exhaustion, guilt and grief \u2014 rather than just processing the sedation request; recognises the cry for help' },
      { dom:'rto',   text:'Handles the safeguarding sensitivity (harm from an unwell partner, and the patient\u2019s welfare) without judgement, supporting her to accept help and respite' },
      { dom:'gs',    text:'Safety-nets and acts: her immediate safety plan (call 999 if in danger), urgent carer support/respite and specialist referral, the trigger work-up and non-drug plan, review, and clear follow-up \u2014 supporting the carer AND managing the patient, with medication only as a justified last resort' },
    ],
    worked:[
      { lbl:'Hear her first',       txt:'"Pauline, stop \u2014 before anything about Geoff, are YOU safe right this minute? \u2026 Okay. I can hear how frightened and exhausted you are, and I want you to know: being scared of someone you love because an illness has changed them is one of the hardest things in the world, and you are not failing. You did exactly the right thing ringing. Let\u2019s look after you as well as him."' },
      { lbl:'Reframe the aggression', txt:'"What\u2019s happening with Geoff \u2014 the lashing out, worse in the evenings \u2014 is part of the dementia, and it usually has triggers we can find: pain, constipation, an infection, being frightened or overstimulated, that \u2018sundowning\u2019 in the evenings. So rather than just knocking him out with a sedative \u2014 which carries real risks for him \u2014 the first job is to find and ease what\u2019s setting him off."' },
      { lbl:'Get urgent help',      txt:'"But I\u2019m not going to leave you to cope alone while we do that. I\u2019m going to get you urgent support \u2014 the memory/old-age psychiatry team who specialise in exactly this, a carer\u2019s assessment, and respite so you can have a break and be safe. This is too much for one person, and you shouldn\u2019t have to."' },
      { lbl:'A safety plan',        txt:'"Let\u2019s make a plan for your safety tonight: if he becomes aggressive, don\u2019t try to restrain him \u2014 keep yourself out of arm\u2019s reach, give him space, and if you\u2019re ever in danger, call 999, that is absolutely the right thing to do and no one will judge you for it. Is there someone who can be with you, or somewhere you can go if you need to?"' },
      { lbl:'Triggers + non-drug',  txt:'"Practically: let\u2019s check him for pain and constipation \u2014 huge triggers \u2014 and any infection. Keep evenings calm and low-key, familiar routine, gentle distraction when he\u2019s wound up. If, after all that, he\u2019s still a serious danger, we\u2019d consider a carefully-chosen medicine, at a low dose, with the specialists \u2014 but as a last step, not the first."' },
      { lbl:'Hold her + safety-net', txt:'"You\u2019re grieving the man he was while caring for who he\u2019s become \u2014 that\u2019s an enormous weight, and your own health matters too; if you\u2019re sinking, I want to help with that directly. I\u2019ll get the urgent referrals and respite moving today and ring you back. If you feel unsafe before then \u2014 999, no hesitation. We do this together, and you are not on your own."' },
    ],
    learning:'Aggression in dementia is BPSD with TRIGGERS/unmet needs (pain, constipation, infection/delirium, hunger/thirst, boredom, overstimulation, fear, environment, sundowning) to be identified and addressed \u2014 not a behaviour to reflexively sedate; antipsychotics/sedatives carry significant harms (stroke, mortality, falls) and are reserved for severe persistent risk after non-drug measures, with specialist input. But the examinable core is that the CARER is at breaking point, being physically harmed and frightened \u2014 a carer-safety and carer-breakdown emergency in her own right: assess her immediate safety, the harm, her exhaustion/mood, and the risk of caring breakdown, and mobilise URGENT support (respite, carer\u2019s assessment, social services, old-age psychiatry/crisis team, a safety plan including 999 if in danger). The hidden agenda is that "just sedate him" is a cry for rescue from a woman moments from collapse, carrying guilt, grief and isolation \u2014 hear and support her as the patient too, handle the safeguarding sensitively and without judgement, prioritise non-drug management of his triggers, and use medication only as a justified last resort while supporting HER as much as managing HIM.',
    knowledge:{
      guideline:'NICE NG97 dementia (BPSD) · antipsychotics in dementia (harms) · Care Act (carer\u2019s assessment) · safeguarding',
      points:[
        { h:'BPSD has triggers', t:'Agitation/aggression and sundowning in dementia usually reflect unmet needs or triggers: pain, constipation, infection (delirium), hunger/thirst, fatigue, boredom, overstimulation, fear/disorientation, communication difficulty, and environmental factors. Assess and address these first \u2014 they are the management, not sedation.' },
        { h:'Non-pharmacological first', t:'First-line for BPSD is non-drug: treat triggers (pain relief, constipation, infection), structured calm routine, low-stimulation environment, distraction/redirection, meaningful activity, managing evening triggers. These reduce aggression without drug harms.' },
        { h:'Antipsychotics \u2014 last resort, real harms', t:'Antipsychotics in dementia increase stroke and mortality and cause sedation/falls; reserve for severe distress or risk to self/others when non-drug measures have failed, at the lowest dose for the shortest time, with specialist involvement and review. Never a reflex first response.' },
        { h:'The carer is a patient too', t:'A carer being physically harmed, frightened and exhausted is a carer-safety and carer-breakdown emergency. Assess her immediate safety, the harm, her mood/burnout, and the sustainability of care. Provide a safety plan (including 999 if in danger; do not restrain). Domestic harm from an unwell partner still warrants safeguarding consideration and support.' },
        { h:'Mobilise urgent support', t:'Carer\u2019s assessment (Care Act), respite/emergency respite, social services, old-age psychiatry/memory service or crisis team referral, admiral nurses/dementia support. Treat carer support and respite as urgent clinical interventions, not afterthoughts.' },
        { h:'Hold the grief and guilt', t:'Carers grieve the person while caring for who they\u2019ve become, and feel guilt/shame at being frightened of a loved one. Validate this, reduce shame, and support the carer\u2019s own mental health \u2014 the sedation request is often a cry for rescue.' },
        { h:'Never do', t:'Never reflexively sedate aggression in dementia without assessing triggers; never make antipsychotics the first step; never ignore the carer\u2019s safety, harm and breakdown; never leave a frightened carer without a safety plan and urgent support; never judge a carer for being afraid or for calling 999.' },
        { h:'Safety-net & follow-up', t:'Carer safety plan (999 if in danger, don\u2019t restrain); urgent carer support/respite and old-age psychiatry/crisis referral; trigger work-up and non-drug plan; medication only as a justified, reviewed last resort; assess sustainability of home care; carer\u2019s own-health follow-up.' }
      ]
    }
  };

  /* ============ 128. VIDEO — The iatrogenic mimic: new symptoms after a new drug ============ */
  const c128 = {
    id:'iatrogenic-anticholinergic', title:'"Since the new tablets I\u2019m confused, constipated and can\u2019t wee properly"', type:'video', duration:12,
    meta:{ age:78, sex:'M', setting:'Video consultation \u2014 new symptoms after a medication change.', system:'Prescribing / Anticholinergic burden & deprescribing' },
    brief:'Mr Harold Inglis, 78, brought by his daughter. Over ~3 weeks since starting a new bladder antimuscarinic (oxybutynin) for urinary urgency \u2014 ON TOP of his amitriptyline (for old back pain) and an antihistamine he buys for sleep \u2014 he\u2019s become more forgetful/muddled, constipated, dry-mouthed, with blurred vision and now difficulty passing urine (worse, not better). The daughter wonders if it\u2019s "his age" or "getting dementia". This is anticholinergic toxicity / high anticholinergic burden \u2014 an iatrogenic, reversible mimic.',
    script:{
      opening:'(Daughter, with patient.) "We\u2019re a bit worried about Dad \u2014 over the last few weeks he\u2019s gone more confused and forgetful, he\u2019s really constipated, his mouth\u2019s bone dry, his vision\u2019s blurry, and ironically his waterworks are WORSE \u2014 he can barely go. Is this just his age catching up? Or\u2026 is he getting dementia? It came on quite quickly, which is what\u2019s scared us."',
      facts:[
        { topic:'The pattern points to drugs', text:'The cluster \u2014 new/worsening confusion, constipation, dry mouth, blurred vision, urinary RETENTION \u2014 coming on over weeks after starting an ANTIMUSCARINIC (oxybutynin), ON TOP of amitriptyline (anticholinergic) and a sedating antihistamine (anticholinergic) = classic ANTICHOLINERGIC TOXICITY / high anticholinergic burden. The relatively rapid onset linked to a medication change is the giveaway that this is iatrogenic and REVERSIBLE, not new dementia.' },
        { topic:'The irony / the trap', text:'The drug given FOR his urinary urgency (oxybutynin) has, with his other anticholinergics, caused urinary RETENTION and cognitive/peripheral anticholinergic effects \u2014 and his symptoms risk being misattributed to "ageing/dementia" and treated with yet more drugs, compounding the harm. Recognising the iatrogenic cause and DEPRESCRIBING is the consultation.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 the daughter\u2019s real, unspoken fear is DEMENTIA ("is Dad losing his mind?") and the grief/dread that implies; she\u2019s braced for the worst. There may be relief available: this is very likely a reversible medication effect, not dementia \u2014 a hopeful reframe. The patient himself may be frightened or embarrassed (the OTC sleep antihistamine he hasn\u2019t mentioned). Surfacing and addressing the dementia fear is central.' },
        { topic:'Deprescribing safely', text:'Plan: review the full drug list INCLUDING OTC items, calculate the anticholinergic burden, STOP/reduce the culprits (stop oxybutynin; review/stop amitriptyline and the antihistamine; consider safer alternatives for the urgency/back pain/sleep), assess for acute urinary retention (which may need urgent attention), and recheck cognition once off the drugs \u2014 expecting improvement.' },
        { topic:'What\u2019s needed',      text:'Officially: an explanation (is it dementia/age?). What\u2019s needed: recognition of the anticholinergic/iatrogenic cause, a full (OTC-inclusive) medication review and deprescribing of the culprits with safer alternatives, assessment of urinary retention, the dementia fear addressed with the hopeful (reversible) reframe, and follow-up to confirm improvement \u2014 not labelling it dementia and adding more drugs.' },
      ],
      ice:{
        ideas:'(Daughter) It\u2019s his age catching up, or he\u2019s developing dementia.',
        concerns:'HIDDEN AGENDA \u2014 the unspoken terror is dementia ("is Dad losing his mind?") with the grief/dread that implies; she\u2019s braced for the worst; the patient may be embarrassed about the OTC sleep antihistamine.',
        expectations:'An explanation, fearing dementia. What\u2019s actually needed: recognition of the reversible anticholinergic/iatrogenic cause, a full medication review and deprescribing with safer alternatives, retention assessment, the dementia fear addressed hopefully, and follow-up to confirm improvement.'
      },
      cues:['Confusion + constipation + dry mouth + blurred vision + urinary retention starting after a new antimuscarinic \u2014 anticholinergic toxicity, reversible.','Oxybutynin given FOR urgency now causing RETENTION, on top of amitriptyline + an OTC antihistamine \u2014 stacked anticholinergic burden.','"Is it dementia?" \u2014 the daughter\u2019s real fear; offer the hopeful reframe (likely reversible) and address it.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the symptom cluster (confusion, constipation, dry mouth, blurred vision, urinary RETENTION) coming on after a new ANTIMUSCARINIC as ANTICHOLINERGIC TOXICITY / high anticholinergic burden \u2014 a reversible IATROGENIC cause \u2014 rather than accepting "ageing" or "dementia"' },
      { dom:'tasks', text:'Takes a full MEDICATION history INCLUDING OTC/self-bought items, and identifies the STACKED anticholinergics: oxybutynin + amitriptyline + the sedating antihistamine (and recognises oxybutynin given for urgency has caused retention)' },
      { dom:'tasks', text:'Plans DEPRESCRIBING: stop/reduce the culprit anticholinergics (stop oxybutynin; review/stop amitriptyline and the antihistamine) and consider safer alternatives for the urinary urgency, the back pain, and sleep \u2014 reducing the anticholinergic burden' },
      { dom:'tasks', text:'Assesses the URINARY RETENTION (palpable bladder, degree, acute vs chronic) and acts on it appropriately \u2014 recognising acute retention may need urgent assessment/catheterisation \u2014 and rechecks cognition once off the drugs, expecting improvement' },
      { dom:'tasks', text:'Avoids the prescribing cascade: does NOT add further drugs or label dementia for what is an iatrogenic, reversible picture; plans to reassess cognition formally only after withdrawing the culprits if concern persists' },
      { dom:'rto',   text:'Surfaces and addresses the daughter\u2019s unspoken DEMENTIA fear, delivering the hopeful reframe (this is likely a reversible medication effect, not dementia) with compassion; handles the OTC-medication disclosure non-judgementally' },
      { dom:'rto',   text:'Engages the patient and daughter as partners, validates that the rapid onset rightly worried them, and explains the plan clearly' },
      { dom:'gs',    text:'Safety-nets and follows up: the deprescribing plan and safer alternatives, retention assessment and red flags (complete inability to pass urine/severe pain \u2192 urgent), a recheck of cognition/symptoms after withdrawal expecting improvement, and a review \u2014 reversing the iatrogenic harm rather than compounding it' },
    ],
    worked:[
      { lbl:'The hopeful reframe',  txt:'"I can see you\u2019re both frightened this is dementia \u2014 so let me give you some genuinely reassuring news first. The fact this came on quite quickly, over a few weeks, and right after a new tablet was started, points away from dementia and towards something we can REVERSE: the medicines themselves."' },
      { lbl:'Name the cause',       txt:'"There\u2019s a group of medicines that, especially when you take several together, can cause exactly this combination \u2014 muddled thinking, dry mouth, constipation, blurred vision, and trouble passing urine. The new bladder tablet, oxybutynin, is one; the old amitriptyline for your back is another. Can I ask \u2014 are you taking anything for sleep from the chemist? \u2026 An antihistamine. That\u2019s a third one. Together they\u2019ve tipped you over."' },
      { lbl:'The irony',            txt:'"Here\u2019s the cruel irony: the bladder tablet you were given to help your waterworks has actually made you unable to wee properly \u2014 that\u2019s the same family of effects. So adding MORE tablets would be the wrong direction; the fix is taking some AWAY."' },
      { lbl:'The deprescribing plan', txt:'"So my plan is to stop the oxybutynin, and review and most likely stop the amitriptyline and the sleep antihistamine, and find gentler alternatives for your bladder, your back and your sleep. I\u2019d expect the confusion, the dry mouth and the constipation to lift, and your waterworks to ease, over the next couple of weeks."' },
      { lbl:'Check the bladder',    txt:'"One thing I do need to check today \u2014 how your bladder is right now, because if it\u2019s very full and you really can\u2019t go, that sometimes needs sorting urgently. If at any point you completely can\u2019t pass urine and your tummy\u2019s painful and swollen, that\u2019s an emergency \u2014 go to A&E."' },
      { lbl:'Safety-net + recheck', txt:'"We\u2019ll stop the culprits, sort safer options, and I\u2019ll see Dad again in a couple of weeks \u2014 I\u2019m expecting a real improvement. IF, once he\u2019s off these, there\u2019s still a memory concern, then we\u2019d look into that properly \u2014 but I think you\u2019ll have your dad back. You were right to bring him; the quick onset was the clue, and it\u2019s a fixable one."' },
    ],
    learning:'A cluster of new/worsening confusion, constipation, dry mouth, blurred vision and urinary RETENTION coming on over weeks after starting an ANTIMUSCARINIC \u2014 on top of other anticholinergics (amitriptyline, a sedating antihistamine) \u2014 is ANTICHOLINERGIC TOXICITY / high anticholinergic burden: a reversible IATROGENIC mimic, not "ageing" or new dementia, with the rapid onset linked to a medication change as the giveaway. There is a cruel irony to spot: the oxybutynin given FOR urinary urgency has caused retention. The task is a full medication review INCLUDING OTC items, identifying the stacked anticholinergics and DEPRESCRIBING them (stop oxybutynin; review/stop amitriptyline and the antihistamine; safer alternatives for the urgency, back pain and sleep), assessing the urinary retention (acute retention may need urgent action), and rechecking cognition once off the drugs \u2014 avoiding the prescribing cascade of adding more drugs or labelling dementia. The examinable hidden agenda is the family\u2019s unspoken dementia terror; deliver the hopeful, evidence-based reframe (likely reversible, not dementia), handle the OTC disclosure non-judgementally, and follow up to confirm improvement \u2014 reversing iatrogenic harm rather than compounding it.',
    knowledge:{
      guideline:'STOPP-START / anticholinergic burden · NICE multimorbidity (NG56) & medicines optimisation · deprescribing',
      points:[
        { h:'Recognise anticholinergic toxicity', t:'Central effects: confusion, memory impairment, drowsiness/agitation ("mad as a hatter"). Peripheral: dry mouth ("dry as a bone"), blurred vision ("blind as a bat"), constipation, urinary retention, tachycardia, dry skin ("red as a beet", "hot as a hare"). In older adults, high anticholinergic burden causes cognitive impairment, falls and functional decline \u2014 a reversible mimic of dementia.' },
        { h:'Anticholinergic burden stacks', t:'Many drugs contribute: bladder antimuscarinics (oxybutynin), tricyclics (amitriptyline), sedating antihistamines (often OTC), some antipsychotics, antispasmodics, and others. The cumulative ("anticholinergic burden") effect is what tips older patients over \u2014 review the TOTAL load, including OTC/self-bought medicines.' },
        { h:'Onset linked to a drug change = iatrogenic', t:'New symptoms appearing over days\u2013weeks after starting/increasing a culprit drug strongly suggest an iatrogenic cause \u2014 reversible \u2014 not new dementia. Always review recent medication changes when an older patient presents with new confusion/decline.' },
        { h:'Deprescribe', t:'Identify and stop/reduce the culprits (using tools like the anticholinergic burden scale and STOPP-START), and substitute safer alternatives (e.g. for urgency: bladder training, mirabegron; for sleep/back pain: non-anticholinergic options). Withdraw thoughtfully and review.' },
        { h:'Assess the retention', t:'Anticholinergics cause/worsen urinary retention; the very drug given for urgency can cause it. Assess for a palpable bladder and acute vs chronic retention; acute urinary retention is painful and may need urgent catheterisation. Safety-net complete inability to void with pain \u2192 urgent/A&E.' },
        { h:'Avoid the prescribing cascade', t:'Do NOT treat drug-induced symptoms with more drugs or label dementia prematurely. Reassess cognition AFTER withdrawing culprits; only investigate for dementia if concern persists once the reversible cause is removed.' },
        { h:'Address the dementia fear', t:'Families presenting an older relative with confusion often fear dementia. Surface and address it; deliver the hopeful, evidence-based reframe when the picture is iatrogenic; handle undisclosed OTC medicines non-judgementally to complete the review.' },
        { h:'Never do', t:'Never attribute new confusion + anticholinergic symptoms to "ageing/dementia" without reviewing medications; never miss OTC anticholinergics; never add more drugs (cascade) for drug-induced symptoms; never miss urinary retention; never leave the dementia fear unaddressed or fail to recheck after deprescribing.' },
        { h:'Safety-net & follow-up', t:'Deprescribe culprits with safer alternatives; assess/act on retention (urgent if acute); recheck cognition/symptoms in ~2 weeks expecting improvement; investigate dementia only if concern persists post-withdrawal; review and follow-up.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c125, c126, c127, c128);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'carehome-delirium': {
      ceg: ['Older adults', 'Urgent & unscheduled care'],
      stem: {
        name: 'Edna Hartley (care-home nurse calling)', age: '86 years · female',
        pmh: ['Background mild dementia; ACUTE confusion/agitation over 24\u201348h', 'Reduced intake, ?offensive urine, mild fever, recently constipated', 'New medication started last week'],
        meds: ['Recently-started new medication; usual meds'],
        allergy: 'NKDA',
        recent: '⚠ Home short-staffed; requesting a sedative/antipsychotic to "settle her".',
        reason: 'Telephone — care-home nurse requesting sedation.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe as delirium', d:'Acute change on a dementia background = delirium, a sign of physical illness — not a behaviour to sedate. Sedation\u2019s harms in the elderly.' },
        { t:'2–5',  h:'Hunt the cause',      d:'PINCH ME: infection (offensive urine/fever), constipation, dehydration, pain, and the NEW MEDICATION. Urine, obs, exam, med review.' },
        { t:'5–8',  h:'Non-drug first',      d:'Reorientation, familiar staff, hydration, sensory aids, sleep hygiene, treat constipation/pain — reduces agitation safely.' },
        { t:'8–10', h:'Assess + escalate',   d:'In-person assessment; admit if septic/unmanageable/unsafe. Don\u2019t leave a possibly-septic elder sedated and unassessed.' },
        { t:'10–12',h:'Support staff + net',  d:'Empathy for stretched staff without colluding; sedation only as a justified last resort; ring back if she deteriorates.' }
      ],
      wordPics: {
        fail: 'Prescribes a sedative/antipsychotic on request to "settle her"; accepts "her dementia\u2019s worse"; never screens for infection/constipation/the new drug; leaves a possibly-septic 86-year-old chemically restrained and unassessed.',
        pass: 'Recognises delirium, screens for causes, advises non-drug measures and assessment, and reserves sedation as a last resort.',
        exc:  'Reframes the acute change as delirium with harms of sedation; runs a structured cause screen (PINCH ME incl. the new drug); prioritises non-drug measures and in-person assessment with an escalation/admission threshold; supports the stretched staff without colluding; and reserves sedation as a justified, reviewed last resort.'
      },
      avoid: [
        { dont:'"I\u2019ll prescribe a sedative to calm her — call back if it doesn\u2019t work."', instead:'"A sudden change like this is delirium — a sign she\u2019s physically unwell. Let\u2019s find the cause (a urine sample, her obs, that new tablet) rather than sedate her, which carries real risks."', why:'Sedating new confusion on request misses a treatable cause (often infection) and can worsen the delirium.' },
        { dont:'"It\u2019s probably just her dementia getting worse."', instead:'"Dementia doesn\u2019t change over a day or two — this acute fluctuation is delirium until proven otherwise, and that means something physical we can treat."', why:'Mislabelling acute delirium as "worse dementia" overlooks an urgent, reversible illness.' },
        { dont:'"There\u2019s no need for me to see her if you can manage the behaviour."', instead:'"I want to assess her properly — examine her, check for infection and review that new medication — because she could have something serious that needs treating today."', why:'Managing the behaviour without assessing the cause risks missing sepsis in a frail elderly patient.' }
      ]
    },

    'recurrent-uti-woman': {
      ceg: ['Gender, reproductive & sexual health', 'Prescribing & pharmacology'],
      stem: {
        name: 'Carla Mendez', age: '43 years · female',
        pmh: ['Recurrent UTI (4th this year); dysuria/frequency today', 'Post-coital pattern; peri-menopausal with vaginal dryness; low fluid intake', 'Previous cultures: E. coli; no red flags today'],
        meds: ['Repeated antibiotic courses'],
        allergy: 'NKDA',
        recent: 'Wants a quick phone antibiotic; embarrassed about the sexual link; "don\u2019t make it a thing".',
        reason: 'Telephone — recurrent UTI, requesting more antibiotics.'
      },
      timeMap: [
        { t:'0–2',  h:'Treat now, but pause', d:'Help the flare (with a culture) — but 4/year means break the cycle, not keep firing antibiotics (resistance, no fix).' },
        { t:'2–5',  h:'Open the door gently', d:'Post-coital pattern? Peri-menopausal dryness? De-shame it — these are big, treatable clues, not bad luck.' },
        { t:'5–7',  h:'Vaginal oestrogen',    d:'Low-dose topical vaginal oestrogen markedly cuts recurrent UTIs in peri/post-menopause AND helps dryness/sex — key, often missed.' },
        { t:'7–9',  h:'The ladder',           d:'Hydration, post-coital voiding; then post-coital single dose / self-start / continuous prophylaxis as needed, with review.' },
        { t:'9–12', h:'De-shame + safety-net', d:'The sexual link is just anatomy, nothing to be embarrassed about. Pyelonephritis red flags → urgent; review the plan.' }
      ],
      wordPics: {
        fail: 'Issues another reflex phone antibiotic for the 4th time with no review; never explores the post-coital pattern or peri-menopausal atrophy; misses topical vaginal oestrogen; leaves her in the infection cycle, embarrassed and untreated at the root.',
        pass: 'Treats with a culture, reviews the recurrent UTI, offers vaginal oestrogen and the prophylaxis ladder, and safety-nets.',
        exc:  'Treats the flare but reframes recurrent UTI as needing a real review; gently surfaces and de-shames the post-coital/atrophy contributors; offers topical vaginal oestrogen as the key fix; works the prophylaxis ladder with stewardship; and frames it as the route out of the cycle and better for her sex life, with a pyelonephritis safety-net.'
      },
      avoid: [
        { dont:'"No problem, I\u2019ll put another course through — same as last time."', instead:'"I\u2019ll treat today, ideally with a urine sample — but four in a year means we should fix WHY, not keep firing antibiotics that breed resistance and never solve it."', why:'Reflex repeat scripts drive resistance and miss the treatable contributors behind recurrent UTI.' },
        { dont:'"It\u2019s just one of those things some women get."', instead:'"Often there\u2019s a clear reason — do they come after sex? Any vaginal dryness with the menopause? Those are common, treatable causes, not bad luck."', why:'Calling it bad luck misses the post-coital pattern and atrophy that have specific, effective treatments.' },
        { dont:'"Let\u2019s not get into the menopause side, let\u2019s just clear the infection."', instead:'"The menopausal dryness is actually central here — a low-dose vaginal oestrogen can dramatically cut these infections and help the dryness too."', why:'Skipping vaginal atrophy/topical oestrogen omits the single most effective intervention for this group.' }
      ]
    },

    'dementia-aggression-carer': {
      ceg: ['Older adults', 'Mental health & addiction'],
      stem: {
        name: 'Geoff Frost (wife/carer calling)', age: '74 years · male',
        pmh: ['Dementia (mixed/frontotemporal features); increasing agitation + physical AGGRESSION, worse evenings', 'Has grabbed/pushed his wife; she is frightened', 'Possible unmet triggers (pain, constipation, infection)'],
        meds: ['Usual dementia/comorbidity meds'],
        allergy: 'NKDA',
        recent: '⚠ Wife (sole carer, 62) exhausted, tearful, "at the end of my rope"; wants him sedated for safety.',
        reason: 'Telephone — carer of a man with dementia becoming aggressive.'
      },
      timeMap: [
        { t:'0–2',  h:'Hear her, check safety', d:'"Are YOU safe right now?" Validate the fear/exhaustion/guilt. She did the right thing ringing — look after her too.' },
        { t:'2–4',  h:'Reframe the aggression', d:'BPSD with triggers (pain, constipation, infection, fear, overstimulation, sundowning) — find and ease them, not reflex-sedate (real harms).' },
        { t:'4–6',  h:'Urgent carer support',  d:'Old-age psychiatry/memory team, carer\u2019s assessment, respite/emergency respite, social services — treat as urgent.' },
        { t:'6–8',  h:'Safety plan',           d:'Don\u2019t restrain; keep out of arm\u2019s reach; 999 if in danger (no judgement); someone to be with her / somewhere to go.' },
        { t:'8–12', h:'Triggers + last resort', d:'Check pain/constipation/infection; calm evenings, routine, distraction. Medication only if severe persistent risk, low dose, specialist, reviewed.' }
      ],
      wordPics: {
        fail: 'Processes the "sedate him" request or reflexively prescribes an antipsychotic; never assesses the carer\u2019s safety or breakdown; misses the triggers; leaves a frightened, harmed carer without a safety plan or urgent support.',
        pass: 'Recognises BPSD with triggers, takes the carer\u2019s safety seriously, mobilises support/respite and a safety plan, and reserves medication as a last resort.',
        exc:  'Puts the carer\u2019s immediate safety and breakdown first and validates her fear/guilt/grief; reframes the aggression as BPSD with treatable triggers; mobilises urgent carer support, respite and old-age psychiatry; gives a concrete safety plan (999 if in danger); prioritises non-drug management; and reserves medication as a justified, reviewed last resort — supporting HER as much as managing HIM.'
      },
      avoid: [
        { dont:'"I\u2019ll prescribe something to sedate him so he\u2019s calmer."', instead:'"First, are you safe right now? His aggression usually has triggers we can ease — and sedatives carry real risks. Let\u2019s find the cause AND get you urgent support and a break."', why:'Reflex sedation ignores the carer-safety emergency and the treatable triggers, and risks harming the patient.' },
        { dont:'"Try to be patient with him — it\u2019s the illness, not him."', instead:'"It IS the illness — and that doesn\u2019t mean you should be hit or frightened. Your safety matters; let\u2019s make a plan, including calling 999 if you\u2019re ever in danger, and get you real support."', why:'Telling a harmed carer to be patient minimises her safety and abandons her at breaking point.' },
        { dont:'"There\u2019s not much can be done at home — he may just need a home eventually."', instead:'"Let\u2019s get the specialist team, a carer\u2019s assessment and respite involved urgently, and find his triggers — there\u2019s a lot we can do right now to make this safer for you both."', why:'A hopeless framing abandons the carer instead of mobilising the urgent support and trigger-management available.' }
      ]
    },

    'iatrogenic-anticholinergic': {
      ceg: ['Prescribing & pharmacology', 'Older adults'],
      stem: {
        name: 'Harold Inglis', age: '78 years · male',
        pmh: ['New confusion, constipation, dry mouth, blurred vision, urinary RETENTION over ~3 weeks', 'Started oxybutynin (for urgency); also on amitriptyline + OTC sedating antihistamine', 'Brought by daughter'],
        meds: ['Oxybutynin (new)', 'Amitriptyline', 'OTC antihistamine (sleep)'],
        allergy: 'NKDA',
        recent: 'Daughter fears "his age" or dementia; rapid onset scared them.',
        reason: 'Video consultation — new symptoms after a medication change.'
      },
      timeMap: [
        { t:'0–2',  h:'Hopeful reframe',     d:'Rapid onset after a new tablet points AWAY from dementia, toward something reversible — the medicines.' },
        { t:'2–4',  h:'Name the cause',      d:'Confusion + dry mouth + constipation + blurred vision + retention = anticholinergic toxicity. Ask about OTC sleep meds (the hidden 3rd).' },
        { t:'4–6',  h:'The irony',           d:'Oxybutynin given for urgency has caused retention — same drug family. The fix is taking tablets AWAY, not adding more.' },
        { t:'6–9',  h:'Deprescribe',         d:'Stop oxybutynin; review/stop amitriptyline + antihistamine; safer alternatives for bladder, back, sleep. Expect improvement in ~2 weeks.' },
        { t:'9–12', h:'Check bladder + net',  d:'Assess retention (urgent if acute, painful, can\u2019t void → A&E); recheck cognition after withdrawal; investigate dementia only if concern persists.' }
      ],
      wordPics: {
        fail: 'Attributes it to "ageing" or starts a dementia work-up / adds more drugs (cascade); never reviews the medications or asks about OTC items; misses the anticholinergic toxicity and the retention; leaves the family fearing dementia.',
        pass: 'Recognises anticholinergic toxicity, reviews meds incl. OTC, deprescribes the culprits with alternatives, assesses retention, and rechecks cognition.',
        exc:  'Leads with the hopeful reframe and names the anticholinergic/iatrogenic cause; takes a full OTC-inclusive drug history and spots the stacked burden and the oxybutynin-causing-retention irony; deprescribes with safer alternatives; assesses/acts on retention; avoids the prescribing cascade and premature dementia label; and addresses the family\u2019s dementia fear with follow-up to confirm improvement.'
      },
      avoid: [
        { dont:'"At his age, some memory decline is expected — let\u2019s refer for a dementia assessment."', instead:'"This came on over weeks, right after a new tablet — that points away from dementia and toward the medicines, which we can reverse. Let\u2019s sort those first."', why:'Labelling it dementia/ageing misses a reversible anticholinergic cause and starts an unnecessary cascade.' },
        { dont:'"I\u2019ll add something to help the constipation and the waterworks."', instead:'"Adding more would be the wrong direction — these symptoms ARE from the tablets. The fix is stopping the culprits, not piling on more."', why:'Treating drug-induced symptoms with more drugs is a classic harmful prescribing cascade.' },
        { dont:'"Just keep taking everything as prescribed and see how he goes."', instead:'"Let\u2019s stop the oxybutynin and review the amitriptyline and the sleep antihistamine now, with gentler alternatives — I\u2019d expect him to improve within a couple of weeks."', why:'Continuing the stacked anticholinergics sustains the toxicity and the retention.' }
      ]
    }
  });

})();
