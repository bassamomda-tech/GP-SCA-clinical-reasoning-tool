/* ============================================================
   Reasoning GP — Case Library batch 27: "Endocrine & metabolic results"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 noted where it maps (thyroid nodule with red flags ->
   neck-lump / suspected thyroid cancer 2WW consideration).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases26.js.
   ============================================================ */

(function(){

  /* ============ 101. VIDEO — Raised prolactin ============ */
  const c101 = {
    id:'raised-prolactin', title:'"My periods stopped and now there\u2019s milk \u2014 am I pregnant?"', type:'video', duration:12,
    meta:{ age:29, sex:'F', setting:'Video consultation \u2014 amenorrhoea + galactorrhoea; prolactin raised.', system:'Endocrine / Hyperprolactinaemia' },
    brief:'Miss Hannah Reid, 29. Bloods done for absent periods (6 months) show PROLACTIN markedly raised (~2200 mU/L; lab upper ~500). Negative pregnancy test. She has milky nipple discharge, reduced libido, and \u2014 on questioning \u2014 occasional headaches and "bumping into door frames" (?visual field). Takes no regular meds; if asked, recently started an antipsychotic-type tablet from a private clinic for "anxiety/sleep". Frightened it\u2019s a brain tumour. Wants to know if she can still have children.',
    script:{
      opening:'"Thanks for seeing me. My periods stopped about six months ago, I did about ten pregnancy tests and they\u2019re all negative \u2014 but now I\u2019ve got actual milk leaking from my breasts, which is terrifying when you\u2019re not pregnant. I googled it and I\u2019m now convinced I\u2019ve got a brain tumour. And honestly\u2026 the bit I keep coming back to is, does this mean I can\u2019t have kids? That\u2019s what\u2019s really keeping me up."',
      facts:[
        { topic:'The picture',         text:'If explored: 6 months amenorrhoea, galactorrhoea, reduced libido, with a markedly raised prolactin and negative pregnancy test \u2014 the classic hyperprolactinaemia syndrome. Headaches and possible visual-field disturbance ("bumping into door frames") raise the question of a pituitary macroadenoma pressing on the optic chiasm.' },
        { topic:'The medication clue',  text:'On direct questioning (easily missed): she recently started a drug from a private clinic for anxiety/sleep \u2014 it turns out to be a dopamine-blocking agent (e.g. an antipsychotic such as a prescribed sulpiride/risperidone, or metoclopramide/domperidone) which RAISES prolactin. Drug-induced hyperprolactinaemia is common and reversible \u2014 a key alternative to a tumour that must be actively sought. (Also exclude hypothyroidism, pregnancy, PCOS overlap.)' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the stated worry is a brain tumour, but the deeper, less-voiced fear is FERTILITY: she and her partner had just started thinking about trying for a baby, and she\u2019s terrified this means she\u2019s "broken" and can never conceive. There\u2019s also shame about the private "anxiety pills" she hasn\u2019t told her partner or her GP about. Surfacing both is the consultation.' },
        { topic:'The reassurance available', text:'If reached: most hyperprolactinaemia (drug-induced, or a prolactinoma) is very treatable; prolactinomas usually respond well to medication (dopamine agonists), fertility is usually RECOVERABLE once prolactin is normalised \u2014 genuinely reassuring news once the cause is found.' },
        { topic:'What she needs',       text:'Officially: to know it\u2019s not a tumour and whether she can have children. What she needs: a structured work-up (repeat prolactin, exclude pregnancy/drugs/hypothyroidism, then pituitary MRI/endocrine referral, visual fields if symptoms), the drug cause actively sought, honest fertility reassurance, and the brain-tumour fear addressed.' },
      ],
      ice:{
        ideas:'The milk and missed periods mean either pregnancy (ruled out) or a brain tumour.',
        concerns:'HIDDEN AGENDA \u2014 the deeper fear is fertility ("am I broken, can I never have kids?") just as she and her partner think about trying; plus shame about private "anxiety pills" she hasn\u2019t disclosed.',
        expectations:'To be told it\u2019s not a tumour and whether she can have children. What she actually needs: a structured cause work-up (incl. the drug cause), pituitary assessment, and honest, mostly-reassuring fertility information.'
      },
      cues:['Amenorrhoea + galactorrhoea + raised prolactin, pregnancy-negative \u2014 hyperprolactinaemia; find the cause, don\u2019t jump to tumour.','Headaches + "bumping into door frames" \u2014 possible chiasmal compression (macroadenoma); ask visual fields.','Recently started private "anxiety pills" \u2014 the dopamine-blocker drug cause, easily missed; and the unspoken fertility fear.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the hyperprolactinaemia syndrome (amenorrhoea, galactorrhoea, reduced libido, raised prolactin, pregnancy-negative) and works it up STRUCTURED rather than jumping to "brain tumour" \u2014 confirms with a repeat prolactin (avoiding spurious causes) and excludes the common reversible causes' },
      { dom:'tasks', text:'Actively seeks the DRUG cause: asks specifically about all medicines incl. private/OTC, identifying the dopamine-blocking agent (antipsychotic/metoclopramide/domperidone) as a common, reversible cause \u2014 and also excludes pregnancy, primary hypothyroidism (TFTs) and renal cause' },
      { dom:'tasks', text:'Screens for and acts on MACROADENOMA red flags: headache and visual-field disturbance (formal visual fields), and arranges PITUITARY MRI and endocrine referral, recognising chiasmal compression needs prompt assessment' },
      { dom:'tasks', text:'Gives honest, mostly-REASSURING fertility information: most hyperprolactinaemia is treatable (stop/switch the offending drug, or a dopamine agonist for a prolactinoma), and fertility usually recovers once prolactin normalises \u2014 directly addressing the deeper fear' },
      { dom:'tasks', text:'Addresses the brain-tumour fear proportionately and the private-medication disclosure non-judgementally, advising on the offending drug (not stopping a needed psychiatric drug abruptly without a plan / liaise as appropriate)' },
      { dom:'rto',   text:'Hears the stated tumour fear AND surfaces the deeper fertility fear, responding to both; handles the private "anxiety pills" shame without judgement so the drug history is complete' },
      { dom:'rto',   text:'Balances honesty (a cause must be found, possible MRI) with genuine reassurance (highly treatable, fertility usually recoverable), pacing it to her anxiety' },
      { dom:'gs',    text:'Safety-nets and follows up: repeat prolactin + TFTs + pregnancy test, MRI/endocrine referral and visual fields if symptoms, what to do if headache/vision worsens (urgent), the medication plan, and follow-up to go through results' },
    ],
    worked:[
      { lbl:'Name the syndrome',      txt:'"Let me explain what ties this together \u2014 the missed periods AND the milk. There\u2019s a hormone called prolactin, the one that makes milk, and yours is high. When it\u2019s up, it switches periods off and can cause milk even when you\u2019re not pregnant. So this isn\u2019t random or mysterious; it\u2019s one hormone, and the job now is to find WHY it\u2019s high \u2014 and most of the whys are very treatable."' },
      { lbl:'Hunt the drug cause',    txt:'"Before we think about anything in the head \u2014 can I ask about every tablet you take, including anything private or from the chemist? \u2026 The sleep/anxiety tablet from the clinic. That\u2019s really important: some of those directly push prolactin up, and that\u2019s a common, completely reversible cause. No judgement at all \u2014 I\u2019m just glad to know, because it might be the whole answer."' },
      { lbl:'Address the tumour fear', txt:'"On the brain-tumour worry \u2014 high prolactin CAN come from a small, benign growth on the pituitary gland at the base of the brain, but \u2018benign\u2019 is the word, and even then it\u2019s usually treated with tablets, not surgery. I do want a scan to look, and because you mentioned headaches and bumping into door frames, I\u2019ll check your eyes\u2019 side vision too \u2014 but the picture in your head is almost certainly worse than the reality."' },
      { lbl:'The fertility answer', txt:'"And the question that\u2019s really keeping you up \u2014 can you have children. Here\u2019s the honest, good news: this is one of the most fixable causes of periods stopping. Once we sort why the prolactin\u2019s high \u2014 change the tablet, or treat a small growth \u2014 the prolactin comes down, your periods come back, and fertility usually returns with them. You are not broken."' },
      { lbl:'The plan',             txt:'"So: I\u2019ll repeat the prolactin, check your thyroid and a pregnancy test, and arrange a scan of the pituitary and a check of your visual fields, plus refer you to the hormone specialists. We\u2019ll work out the tablet situation safely \u2014 don\u2019t stop the anxiety one suddenly; we\u2019ll plan it. Bring your partner to the next appointment if it helps."' },
      { lbl:'Safety-net',           txt:'"If your headaches get much worse, or your vision changes \u2014 blurring, losing the edges, double vision \u2014 that\u2019s urgent, contact us or go to eye casualty, because that\u2019s the bit we don\u2019t wait on. Otherwise, let\u2019s get the tests done and I\u2019ll go through everything with you. You came in fearing the worst on two fronts; the likely reality is a treatable hormone problem and a future that still very much includes children."' },
    ],
    learning:'The triad of amenorrhoea, galactorrhoea and a markedly raised prolactin (pregnancy-negative) is hyperprolactinaemia \u2014 work it up structured rather than leaping to "brain tumour". Confirm with a repeat prolactin and exclude the common reversible causes: pregnancy, primary hypothyroidism, renal impairment, and especially DRUGS (dopamine-blockers \u2014 antipsychotics, metoclopramide, domperidone), which here is the easily-missed cause hiding in a private "anxiety pill". Screen for macroadenoma red flags (headache, visual-field loss from chiasmal compression) with formal visual fields, and arrange pituitary MRI and endocrine referral. The examinable hidden agenda is twofold: the stated brain-tumour fear, and the deeper, less-voiced FERTILITY fear ("am I broken?") as she and her partner consider trying \u2014 plus shame about undisclosed private medication. Deliver honest, mostly-reassuring information (hyperprolactinaemia is highly treatable; prolactinomas usually respond to dopamine agonists; fertility usually recovers once prolactin normalises), take a complete non-judgemental drug history, don\u2019t stop a needed psychiatric drug abruptly, and safety-net visual symptoms as urgent.',
    knowledge:{
      guideline:'CKS hyperprolactinaemia · Society for Endocrinology / Endocrine Society prolactin guidance',
      points:[
        { h:'Recognise the syndrome', t:'Hyperprolactinaemia: amenorrhoea/oligomenorrhoea, galactorrhoea, reduced libido/erectile dysfunction, infertility; in long-standing cases, low oestrogen/testosterone effects. Confirm a raised prolactin on a repeat sample (avoid stress/venepuncture artefact; consider macroprolactin). Always exclude pregnancy first.' },
        { h:'Exclude reversible causes before "tumour"', t:'Common causes: pregnancy/lactation, DRUGS (dopamine antagonists \u2014 antipsychotics, metoclopramide, domperidone; also some antidepressants, opioids, oestrogens), primary hypothyroidism (check TFTs \u2014 high TRH drives prolactin), chronic kidney disease, stress, chest-wall stimulation. Take a thorough drug history INCLUDING private/OTC medicines.' },
        { h:'Identify pituitary causes & red flags', t:'Prolactinoma (microadenoma <10 mm; macroadenoma \u226510 mm) and other pituitary/hypothalamic lesions. Very high prolactin (e.g. >5000 mU/L) suggests a macroprolactinoma. Red flags of mass effect: headache, visual-field defect (bitemporal hemianopia from chiasmal compression), cranial nerve signs, hypopituitarism. Assess visual fields and arrange pituitary MRI.' },
        { h:'Treatment & prognosis are reassuring', t:'Drug-induced: stop/switch the offending agent where safe (liaise with the prescriber; do not abruptly stop needed psychiatric medication). Prolactinomas: dopamine agonists (cabergoline/bromocriptine) are first-line and usually shrink the tumour and normalise prolactin; surgery is rarely needed. Fertility typically recovers once prolactin normalises.' },
        { h:'Investigate appropriately', t:'Repeat prolactin, pregnancy test, TFTs, U&E; then pituitary MRI and endocrine referral for confirmed/unexplained hyperprolactinaemia or any red flags; formal visual fields if mass-effect symptoms.' },
        { h:'Address both fears', t:'Patients fixate on "brain tumour" while a deeper fertility fear often goes unspoken. Surface and address both; give honest, mostly-reassuring information; handle undisclosed/private medication non-judgementally to complete the history.' },
        { h:'Never do', t:'Never jump to "brain tumour" without excluding drugs/pregnancy/hypothyroidism; never omit the full (private/OTC-inclusive) drug history; never miss visual-field/mass-effect red flags or fail to arrange MRI; never abruptly stop a needed psychiatric drug; never leave the fertility fear unaddressed.' },
        { h:'Safety-net & follow-up', t:'Repeat prolactin + TFTs + pregnancy test; pituitary MRI, endocrine referral and visual fields as indicated; urgent review if headache/visual symptoms worsen; planned medication change; follow-up to discuss results and fertility.' }
      ]
    }
  };

  /* ============ 102. VIDEO — Incidental thyroid nodule ============ */
  const c102 = {
    id:'thyroid-nodule', title:'"I found a lump in my neck \u2014 it moves when I swallow"', type:'video', duration:12,
    meta:{ age:44, sex:'F', setting:'Video consultation \u2014 a self-found thyroid nodule.', system:'Endocrine / Thyroid nodule' },
    brief:'Mrs Priya Anand, 44, found a lump in the front of her neck that moves on swallowing. No pain. TFTs (done by the nurse) are normal. On the call/photo: a single ~2.5 cm nodule. On questioning she has NO compressive symptoms now, but \u2014 if asked \u2014 had neck radiotherapy as a teenager for lymphoma, and an aunt had thyroid cancer. She is dismissive ("probably nothing, the bloods were fine"). Wants to "leave it as the thyroid blood test was normal". No hoarseness/dysphagia volunteered.',
    script:{
      opening:'"Hi. So I found this lump in my neck \u2014 here, at the front \u2014 and it bobs up and down when I swallow, which my friend who\u2019s a nurse said means it\u2019s thyroid. The thyroid blood test came back normal though, so I\u2019m guessing it\u2019s nothing and I can just leave it? I don\u2019t really want a fuss over a lump that isn\u2019t even causing me any trouble. It\u2019s not painful or anything."',
      facts:[
        { topic:'Why normal TFTs don\u2019t reassure', t:'A thyroid nodule with NORMAL thyroid function is the rule, not reassurance: most thyroid cancers are euthyroid (normal TFTs). "The bloods were fine" does NOT mean a nodule can be ignored \u2014 a palpable thyroid nodule needs assessment (examination, TSH, and thyroid ultrasound to risk-stratify).' },
        { topic:'The risk factors',     text:'On direct questioning: previous NECK/HEAD radiotherapy in adolescence (a major thyroid-cancer risk factor) and a family history of thyroid cancer \u2014 both raise concern. She doesn\u2019t connect these to the lump.' },
        { topic:'The 2WW / red flags',   text:'NG12: an unexplained thyroid/neck lump warrants assessment and, with red flags, an urgent suspected-cancer (neck-lump/thyroid) pathway. Red flags: rapidly enlarging nodule, hard/fixed nodule, hoarseness/voice change (recurrent laryngeal nerve), dysphagia, cervical lymphadenopathy, prior neck irradiation, age extremes. Most nodules are benign, but risk-stratification (ultrasound \u00b1 FNA) is required \u2014 this isn\u2019t "leave it".' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the breezy "leave it" masks fear rooted in her lymphoma history: she went through cancer treatment as a teenager, is terrified of "it coming back" or a new cancer, and is using the normal TFTs as permission to avoid facing it. She also fears the disruption of investigations to her young family and work. Surfacing the cancer-survivor fear is central.' },
        { topic:'What she needs',       text:'Officially: reassurance to leave the lump because TFTs are normal. What she needs: to understand that a nodule needs examination + ultrasound regardless of normal TFTs, recognition of her radiotherapy/family-history risk and any red flags, appropriate referral (ultrasound \u00b1 FNA; 2WW if red flags), and her survivor-fear addressed.' },
      ],
      ice:{
        ideas:'The thyroid blood test was normal, so the lump must be nothing and can be left alone.',
        concerns:'HIDDEN AGENDA \u2014 cancer-survivor fear (treated for lymphoma as a teenager); terror of recurrence or a new cancer, using "normal bloods" as permission to avoid facing it; worry about disruption to family/work.',
        expectations:'Reassurance to leave the lump. What she actually needs: examination + thyroid ultrasound regardless of normal TFTs, risk-stratification given her radiotherapy/family history, appropriate referral, and her survivor-fear addressed.'
      },
      cues:['"The bloods were normal so it\u2019s nothing" \u2014 a misconception; most thyroid cancers are euthyroid. A nodule needs ultrasound.','Previous neck radiotherapy + family history of thyroid cancer \u2014 stacked risk factors she dismisses.','Breezy "don\u2019t want a fuss" \u2014 cancer-survivor fear underneath; surface it.']
    },
    checkpoints:[
      { dom:'tasks', text:'Corrects the key misconception: a palpable thyroid nodule with NORMAL TFTs is NOT reassuring \u2014 most thyroid cancers are euthyroid \u2014 so normal bloods do not justify "leaving it"; a nodule needs examination, TSH and thyroid ULTRASOUND to risk-stratify' },
      { dom:'tasks', text:'Elicits and weights the RISK FACTORS: previous head/neck irradiation (major) and family history of thyroid cancer, plus age \u2014 raising concern and the threshold to investigate/refer' },
      { dom:'tasks', text:'Screens for RED FLAGS: rapid growth, hard/fixed nodule, hoarseness/voice change, dysphagia, cervical lymphadenopathy \u2014 and knows these (or the risk factors / an unexplained neck lump) trigger urgent (suspected-cancer / neck-lump) referral per NG12; tagged NICE NG12' },
      { dom:'tasks', text:'Plans the correct work-up: examination (nodule characteristics + nodes), TSH (and thyroid antibodies if indicated), thyroid ULTRASOUND with risk-stratification (e.g. U-classification/TIRADS), and FNA/specialist referral as indicated \u2014 rather than reassurance from TFTs alone' },
      { dom:'tasks', text:'Gives balanced information: most thyroid nodules are benign and many cancers are treatable with excellent outcomes \u2014 so investigation is precautionary, not a verdict \u2014 without either dismissing or catastrophising' },
      { dom:'rto',   text:'Surfaces the cancer-survivor fear (the lymphoma history) gently and addresses it, rather than colluding with the "bloods are fine, leave it" avoidance' },
      { dom:'rto',   text:'Handles the disruption/family worries and balances honesty with reassurance so she engages with assessment' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges ultrasound/referral, advises reporting new hoarseness, rapid growth, swallowing/breathing difficulty (urgent), confirms understanding/engagement, documents, and tracks the result' },
    ],
    worked:[
      { lbl:'Correct the misconception', txt:'"I can see why a normal thyroid blood test feels reassuring \u2014 but here\u2019s the important thing most people don\u2019t know: a thyroid lump usually behaves with completely normal blood tests, even when it\u2019s something we\u2019d want to check. So \u2018the bloods were fine\u2019 doesn\u2019t tell us about the lump itself. The way to assess a lump is to look at it directly with an ultrasound scan."' },
      { lbl:'Surface the risk factors', txt:'"Can I ask a couple of things? \u2026 You had radiotherapy to the neck as a teenager, for the lymphoma, and an aunt had thyroid cancer. Those both matter \u2014 they raise the importance of checking a thyroid lump properly. I\u2019m not saying that to frighten you; I\u2019m saying it\u2019s exactly why we don\u2019t just leave it."' },
      { lbl:'Screen red flags',     txt:'"A few quick questions: has the lump grown quickly? Any change to your voice or hoarseness? Any trouble swallowing? Any other lumps in the neck? \u2026 Those help me judge how quickly to act. And I\u2019ll feel the lump and your neck glands when I examine you."' },
      { lbl:'Balance it',           txt:'"Two honest things together: the large majority of thyroid lumps turn out to be benign, and even the ones that aren\u2019t are usually very treatable with good outcomes. AND, because of your history, we check properly rather than guess. Both are true \u2014 so this is precautionary, not me telling you it\u2019s cancer."' },
      { lbl:'Surface the real fear', txt:'"I suspect part of you has been hoping the normal bloods meant you could avoid all this \u2014 because you\u2019ve been through cancer before and the thought of it coming back is terrifying. That fear makes complete sense. But having beaten it once, you of all people know that checking early is what gives the best outcome \u2014 not waiting."' },
      { lbl:'Plan + safety-net',    txt:'"So: I\u2019ll arrange an ultrasound of the thyroid and examine you, and depending on what it shows we may take a tiny sample with a needle or refer you on \u2014 quickly, given your history. If meanwhile your voice changes, the lump grows fast, or you struggle to swallow or breathe, tell us straightaway. I\u2019ll follow the results through with you. You wanted to leave it; what I\u2019m doing is making sure that if there\u2019s anything to find, we find it early."' },
    ],
    learning:'A palpable thyroid nodule with NORMAL thyroid function is the rule, not reassurance \u2014 most thyroid cancers are euthyroid \u2014 so "the bloods were fine" must never justify leaving a nodule. The work-up is examination (nodule characteristics and cervical nodes), TSH, and thyroid ULTRASOUND with risk-stratification (U-classification/TIRADS) and FNA/specialist referral as indicated. Elicit and weight the risk factors \u2014 here previous head/neck irradiation (major) and family history of thyroid cancer \u2014 and screen the red flags (rapid growth, hard/fixed nodule, hoarseness/voice change, dysphagia, cervical lymphadenopathy) that, with an unexplained neck lump, trigger an urgent suspected-cancer/neck-lump referral under NG12. The examinable hidden agenda is cancer-survivor fear: treated for lymphoma as a teenager, she uses the normal TFTs as permission to avoid facing a possible new cancer. Surface and address that fear, balance honesty with reassurance (most nodules benign, thyroid cancer usually very treatable), and complete the ultrasound/referral with a clear safety-net for compressive/voice red flags.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (neck lump / thyroid) · British Thyroid Association thyroid nodule/cancer guidelines (U-classification)',
      points:[
        { h:'Normal TFTs do NOT exclude cancer', t:'Most thyroid nodules are associated with normal thyroid function, and most thyroid cancers are euthyroid. Normal TFTs therefore do not reassure about a nodule. Always assess a palpable nodule with examination, TSH, and thyroid ULTRASOUND \u2014 the ultrasound (U1\u2013U5 risk classification) drives the need for FNA.' },
        { h:'Risk factors', t:'Previous head/neck irradiation (especially in childhood), family history of thyroid cancer or syndromes (MEN2/medullary), age <20 or >65, male sex, and rapid growth increase malignancy risk in a nodule.' },
        { h:'Red flags & NG12', t:'Red flags: rapidly enlarging or hard/fixed nodule, hoarseness/voice change (recurrent laryngeal nerve involvement), dysphagia/stridor, cervical lymphadenopathy. An unexplained thyroid/neck lump warrants assessment; with red flags or high-risk features, refer on the suspected-cancer (neck-lump/thyroid) 2-week-wait pathway. Consider urgent referral for a thyroid nodule with stridor (airway).' },
        { h:'Investigate correctly', t:'TSH first: a SUPPRESSED TSH suggests a hyperfunctioning ("hot") nodule (lower malignancy risk) \u2014 consider radionuclide scan; a normal/high TSH with a nodule proceeds to ultrasound risk-stratification and FNA of suspicious nodules. Don\u2019t substitute TFTs for imaging.' },
        { h:'Balance & prognosis', t:'The majority of nodules are benign; differentiated thyroid cancer (papillary/follicular) generally has excellent outcomes when treated. Frame investigation as precautionary risk-stratification, not a diagnosis.' },
        { h:'Address survivor fear', t:'A previous cancer (here lymphoma with neck radiotherapy) makes a new lump acutely frightening and can drive avoidance ("the bloods are fine, leave it"). Surface and validate the fear; use the survivor\u2019s own knowledge that early detection gives the best outcome.' },
        { h:'Never do', t:'Never reassure a thyroid nodule on the basis of normal TFTs; never skip examination/ultrasound; never miss irradiation/family-history risk or voice/compressive red flags; never collude with avoidance driven by survivor fear; never catastrophise without the balancing reassurance.' },
        { h:'Safety-net & follow-up', t:'Examination + TSH + thyroid ultrasound (\u00b1 FNA) / referral, urgent if red flags (NG12); report new hoarseness, rapid growth, swallowing/breathing difficulty; confirm engagement; track and discuss the result.' }
      ]
    }
  };

  /* ============ 103. TELEPHONE — Pre-diabetes (HbA1c 47): the fork in the road ============ */
  const c103 = {
    id:'prediabetes-fork', title:'"So I haven\u2019t got diabetes \u2014 I\u2019m fine then?"', type:'telephone', duration:12,
    meta:{ age:52, sex:'M', setting:'Telephone \u2014 a borderline HbA1c result.', system:'Endocrine / Pre-diabetes & prevention' },
    brief:'Mr Wesley Grant, 52, taxi driver. HbA1c 47 mmol/mol (non-diabetic hyperglycaemia / pre-diabetes; diabetes \u226548). Done as part of an NHS Health Check. BMI 33, BP 146/90, father had type 2 diabetes and an early MI, sedentary job, takeaways most nights. He rings, relieved: "so it\u2019s not diabetes, I\u2019m fine?" and wants to "leave it and recheck next year". No symptoms. Meds: none.',
    script:{
      opening:'"Hiya doc \u2014 just ringing about that sugar blood test from my health check. The receptionist said it wasn\u2019t in the diabetes range, so that\u2019s a relief, I dodged it! So I\u2019m fine then, yeah? I\u2019ll just carry on and we recheck it next year or whenever. Cheers for letting me know \u2014 I was a bit worried with my dad having had it, but sounds like I\u2019m in the clear."',
      facts:[
        { topic:'What 47 actually means', text:'HbA1c 47 is non-diabetic hyperglycaemia (pre-diabetes; 42\u201347), NOT "the clear" \u2014 it is a fork in the road. A meaningful proportion progress to type 2 diabetes each year, but progression is PREVENTABLE: intensive lifestyle change (and referral to the Diabetes Prevention Programme) can substantially reduce risk, and some return to normal. "I\u2019m fine" is a missed-opportunity trap.' },
        { topic:'The whole cardiometabolic risk', text:'BMI 33, BP 146/90 (raised), strong family history (father T2DM + early MI), sedentary, poor diet \u2014 this is high cardiovascular risk, not just a sugar number. The consultation is an opportunity to address BP, weight, QRISK/lipids and lifestyle, not only the HbA1c.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 his relief and "leave it" mask genuine FEAR: watching his father decline with diabetes complications and die early frightened him, and "dodging it" lets him not think about it. There\u2019s also a practical barrier (a taxi driver who sits all day, eats on the road, can\u2019t see how to change) and a fatalistic "it got my dad, it\u2019ll get me" undercurrent. Converting relief-avoidance into motivated prevention is the consultation.' },
        { topic:'The opportunity',       text:'If reached: he\u2019d actually be motivated by the goal of NOT following his father\u2019s path \u2014 framed as "this is the warning that lets you avoid what happened to your dad", pre-diabetes becomes empowering rather than either ignored or fatalistic.' },
        { topic:'What he needs',       text:'Officially: confirmation he\u2019s "fine" and can leave it. What he needs: to understand 47 is a modifiable warning (not "the clear"), realistic lifestyle change for a taxi driver, DPP referral, BP/weight/cardiovascular-risk management, a recheck plan, and his father-driven fear turned into motivation.' },
      ],
      ice:{
        ideas:'Not in the diabetes range = "I\u2019m fine, I dodged it", so he can carry on and recheck next year.',
        concerns:'HIDDEN AGENDA \u2014 fear from watching his father decline and die early with diabetes; "dodging it" lets him avoid thinking about it; a fatalistic "it got my dad, it\u2019ll get me", and a practical sense that a sedentary taxi job makes change impossible.',
        expectations:'Confirmation he\u2019s fine and can leave it. What he actually needs: to grasp that 47 is a modifiable warning, realistic lifestyle change + DPP referral, BP/cardiovascular-risk management, a recheck plan, and his fear turned into motivation.'
      },
      cues:['"It\u2019s not diabetes so I\u2019m fine, leave it" \u2014 the relief-avoidance trap; 47 is a modifiable warning, not "the clear".','BMI 33 + BP 146/90 + father T2DM/early MI + sedentary \u2014 high cardiovascular risk, not just a sugar number.','Worry about his dad \u2014 fear that can become motivation ("this is your chance to avoid his path").']
    },
    checkpoints:[
      { dom:'tasks', text:'Reframes HbA1c 47 accurately: NOT "the clear" but non-diabetic hyperglycaemia / pre-diabetes \u2014 a modifiable WARNING with real progression risk to type 2 diabetes that lifestyle change can substantially reduce (and sometimes reverse); avoids the "you\u2019re fine, recheck next year" trap' },
      { dom:'tasks', text:'Refers to / recommends the NHS Diabetes Prevention Programme (or structured lifestyle support) and gives specific, realistic lifestyle advice (diet, weight loss, physical activity) tailored to a sedentary taxi driver' },
      { dom:'tasks', text:'Treats the WHOLE cardiovascular risk, not just glucose: addresses raised BP (146/90 \u2014 recheck/assess hypertension), weight, QRISK/lipids and statin discussion, smoking status, and family history \u2014 recognising this as high CVD risk' },
      { dom:'tasks', text:'Sets a monitoring plan: at least annual HbA1c (sooner if higher-risk), BP follow-up, and clear thresholds (HbA1c \u226548 = diabetes) \u2014 framing monitoring as part of an active prevention plan, not passive waiting' },
      { dom:'tasks', text:'Converts the father-driven fear into motivation: frames pre-diabetes as the warning that lets him avoid his father\u2019s path, countering fatalism with genuine agency (the trajectory is changeable)' },
      { dom:'rto',   text:'Hears the relief-avoidance and the underlying fear/fatalism, and engages rather than colluding with "I\u2019m fine, leave it"; explores the taxi-driver practical barriers realistically' },
      { dom:'rto',   text:'Motivates without lecturing or shaming: builds the plan around his real day and his goal of not repeating his father\u2019s decline' },
      { dom:'gs',    text:'Safety-nets and follows up: one or two concrete first steps, DPP/structured-support referral, BP and recheck appointments, what symptoms would prompt earlier review, and a follow-up that keeps him engaged \u2014 prevention as an active plan' },
    ],
    worked:[
      { lbl:'Reframe “fine”',        txt:'"I\u2019m really glad you rang \u2014 and I want to be straight with you, because \u2018you\u2019re fine, dodged it\u2019 isn\u2019t quite the full picture. Your number, 47, isn\u2019t diabetes \u2014 but it\u2019s not the all-clear either. It\u2019s what we call pre-diabetes: a warning light on the dashboard. The brilliant thing is, a warning light is exactly what you WANT, because it means you can act before the engine trouble \u2014 and most people who act don\u2019t go on to develop diabetes."' },
      { lbl:'Turn dad into motivation', txt:'"You mentioned your dad. Can I be honest? I think watching him go through diabetes is part of why you\u2019d rather not think about this. But here\u2019s the flip: your dad probably never got a warning like this. You have. This is your chance to NOT follow his path \u2014 and that\u2019s genuinely in your hands, not just fate."' },
      { lbl:'The whole picture',    txt:'"And it\u2019s not just the sugar. Your blood pressure\u2019s up a bit and your weight\u2019s carrying some risk too \u2014 together those are about your heart as much as diabetes, which matters given your dad\u2019s heart attack. So this is one consultation that can protect a lot at once."' },
      { lbl:'Realistic for a driver', txt:'"I\u2019m not going to tell a man who drives all day to \u2018go to the gym and cook from scratch\u2019. Let\u2019s be real: swapping the nightly takeaway for something lighter a few nights a week, water instead of fizzy/energy drinks in the cab, a proper walk on your breaks, parking a bit further out. Small, repeatable. And there\u2019s a free NHS prevention programme I\u2019d love to refer you to \u2014 it\u2019s practical and made for exactly this."' },
      { lbl:'The plan + numbers',   txt:'"So: I\u2019ll refer you to that prevention programme, get your blood pressure rechecked properly, look at your heart risk and whether a statin would help, and we\u2019ll repeat the sugar in a few months \u2014 not \u2018next year and forget it\u2019. If it ever hit 48, that\u2019s the diabetes line, but the whole point is to push it the OTHER way. Most people can."' },
      { lbl:'Safety-net + engage',  txt:'"Pick ONE thing to start this week \u2014 say, the cab drinks \u2014 and we build from there. If you get the classic diabetes symptoms meanwhile \u2014 really thirsty, weeing loads, weight dropping \u2014 ring sooner. Come and see me to set this up properly. You called thinking you were in the clear; what you\u2019ve actually got is the best kind of warning \u2014 one you can still do something about."' },
    ],
    learning:'An HbA1c of 47 mmol/mol is non-diabetic hyperglycaemia (pre-diabetes), NOT "the all-clear" \u2014 it is a modifiable fork in the road with real progression risk to type 2 diabetes that intensive lifestyle change can substantially reduce (and sometimes reverse). The trap is the relief-driven "I\u2019m fine, leave it, recheck next year"; the task is to reframe it as a warning that can be acted on, refer to the NHS Diabetes Prevention Programme with realistic lifestyle advice tailored to the patient\u2019s actual life (here a sedentary taxi driver), and treat the WHOLE cardiometabolic risk \u2014 raised BP (146/90), weight, QRISK/lipids, family history \u2014 not just the glucose number, with an active monitoring plan (annual or sooner HbA1c, BP follow-up, the 48 = diabetes threshold). The examinable hidden agenda is that the relief masks fear and fatalism from watching his father decline and die early with diabetes; convert that into motivation ("this is the warning that lets you avoid his path"), build the plan around his real day without lecturing, and safety-net hyperglycaemic symptoms. Prevention framed as agency, not passive waiting.',
    knowledge:{
      guideline:'NICE NG28 / PH38 type 2 diabetes prevention · NHS Diabetes Prevention Programme · NICE CG181 CVD risk',
      points:[
        { h:'Define and reframe', t:'HbA1c 42\u201347 mmol/mol (or fasting glucose 5.5\u20136.9) = non-diabetic hyperglycaemia / "pre-diabetes" / high risk of type 2 diabetes; \u226548 mmol/mol = diabetes. Pre-diabetes is a modifiable risk state, not a diagnosis of "fine" \u2014 a significant proportion progress yearly, but progression is preventable.' },
        { h:'Prevention works', t:'Intensive lifestyle change (weight loss ~5\u201310%, dietary change, \u2265150 min/week activity) substantially reduces progression to type 2 diabetes; some revert to normoglycaemia. Refer to the NHS Diabetes Prevention Programme / structured lifestyle support. Metformin is an option in selected higher-risk people if lifestyle alone is insufficient.' },
        { h:'Treat total cardiovascular risk', t:'Pre-diabetes clusters with obesity, hypertension and dyslipidaemia (metabolic syndrome) and raised CVD risk. Assess and manage BP, weight, lipids/QRISK (statin where indicated), smoking and family history \u2014 not just the glucose. Confirm/assess the raised BP per the hypertension pathway.' },
        { h:'Active monitoring, not passive waiting', t:'Re-test HbA1c at least annually (sooner if higher risk or symptomatic); state the \u226548 diabetes threshold; frame monitoring as part of an active prevention plan with review, not "recheck next year and forget".' },
        { h:'Tailor to the person', t:'Make lifestyle advice realistic for the patient\u2019s life (e.g. a sedentary driver: cab drinks, break walks, takeaway swaps). Avoid idealised prescriptions that breed guilt and disengagement; agree one or two concrete first steps.' },
        { h:'Convert fear/fatalism to motivation', t:'Relief-avoidance and "it got my dad, it\u2019ll get me" fatalism are common. Reframe a family history of diabetes as the reason this warning is a GIFT \u2014 a chance to change the trajectory \u2014 giving agency rather than dismissal or doom.' },
        { h:'Never do', t:'Never call HbA1c 47 "fine/the clear"; never default to "recheck next year" without a prevention plan; never address only the glucose and miss BP/weight/CVD risk; never prescribe an idealised lifestyle that ignores the patient\u2019s job/reality; never leave the father-driven fear/fatalism unaddressed.' },
        { h:'Safety-net & follow-up', t:'DPP/structured-support referral; BP recheck and CVD-risk assessment; HbA1c re-test interval and the 48 threshold; one or two concrete first steps; hyperglycaemic-symptom safety-net; an engaging follow-up.' }
      ]
    }
  };

  /* ============ 104. VIDEO — Raised calcium: the work-up before the worry ============ */
  const c104 = {
    id:'hypercalcaemia-workup', title:'"My calcium\u2019s high \u2014 my friend said that means cancer"', type:'video', duration:12,
    meta:{ age:58, sex:'F', setting:'Video consultation \u2014 an incidental mildly raised calcium.', system:'Endocrine / Hypercalcaemia & hyperparathyroidism' },
    brief:'Mrs Carol Lindqvist, 58. A calcium checked for tiredness/aches is mildly raised (adjusted calcium 2.78 mmol/L; upper ~2.60), repeat confirms it. She is well, no cancer history, on no relevant meds (if asked: takes high-dose vitamin D and calcium supplements she bought herself, and a thiazide for BP). PTH not yet done. A friend told her "high calcium means cancer" and she is very frightened. Mild thirst, occasional constipation. No bone pain/red flags volunteered.',
    script:{
      opening:'"Doctor, I\u2019m really worried. My blood test showed my calcium\u2019s high, and my friend \u2014 she\u2019s usually right about these things \u2014 said high calcium means cancer, that it\u2019s often the first sign. I\u2019ve been sick with worry. I feel mostly okay, bit tired and achy, but now I can\u2019t stop thinking the worst. Is she right? Have I got cancer?"',
      facts:[
        { topic:'The two big causes',    text:'In the community, the two commonest causes of hypercalcaemia are PRIMARY HYPERPARATHYROIDISM (most common in well outpatients, often mild and chronic) and MALIGNANCY (more often markedly raised, in unwell patients / with a cancer history). A mild, stable rise in a well person with no cancer history points toward hyperparathyroidism \u2014 but it must be worked up, not guessed.' },
        { topic:'The work-up key',        text:'The single most useful next test is PTH (with renal function, and stop interfering factors): a raised or inappropriately-normal PTH = primary hyperparathyroidism; a SUPPRESSED PTH points toward malignancy/other causes and needs further work-up. Also relevant: vitamin D, phosphate, ALP, myeloma screen if indicated.' },
        { topic:'The reversible contributors', text:'On direct questioning (easily missed): she takes self-bought HIGH-DOSE VITAMIN D + CALCIUM supplements and a THIAZIDE diuretic \u2014 both can raise calcium and must be identified (stop/adjust and recheck). These OTC/lifestyle contributors are commonly overlooked because they\u2019re "not real medicines" to the patient.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 her terror is driven by a friend\u2019s "high calcium = cancer" claim, mapped onto herself, and amplified because her mother died of cancer. She is catastrophising and barely sleeping. She needs the catastrophic certainty defused (calmly, honestly \u2014 cancer is ONE cause and not the most likely here, but we check properly) and the reversible supplement/drug contributors found.' },
        { topic:'What she needs',       text:'Officially: a yes/no on cancer. What she needs: an honest, calming explanation that mild hypercalcaemia in a well person usually isn\u2019t cancer (hyperparathyroidism is commoner), the structured work-up (PTH-led), the supplement/thiazide contributors stopped and rechecked, and her fear addressed \u2014 without false reassurance OR feeding the catastrophe.' },
      ],
      ice:{
        ideas:'High calcium means cancer (per her friend) \u2014 possibly the first sign \u2014 and her mother died of cancer.',
        concerns:'HIDDEN AGENDA \u2014 catastrophic certainty from a friend\u2019s claim, amplified by her mother\u2019s cancer death; barely sleeping with fear; hasn\u2019t mentioned the self-bought high-dose vitamin D/calcium and the thiazide.',
        expectations:'A definitive yes/no on cancer. What she actually needs: an honest, calming explanation (hyperparathyroidism is the commoner cause of mild hypercalcaemia in a well person), the PTH-led work-up, the supplement/thiazide contributors stopped/rechecked, and her fear addressed.'
      },
      cues:['"High calcium means cancer, is she right?" \u2014 catastrophic certainty to defuse honestly; cancer is one cause, not the likeliest here.','Mild, stable rise + well + no cancer history \u2014 points toward hyperparathyroidism; PTH is the key next test.','Self-bought high-dose vitamin D/calcium + thiazide \u2014 reversible contributors, easily missed; ask specifically.']
    },
    checkpoints:[
      { dom:'tasks', text:'Responds to the "is it cancer?" fear honestly and calmly: explains that hypercalcaemia has several causes, that in a WELL person with a mild, confirmed rise and no cancer history PRIMARY HYPERPARATHYROIDISM is the commonest cause \u2014 cancer is possible but not the most likely \u2014 and that the right thing is to work it up, not guess' },
      { dom:'tasks', text:'Orders the KEY work-up: PTH (the pivotal test) with renal function, vitamin D, phosphate, ALP; interprets the logic (raised/inappropriately-normal PTH = primary hyperparathyroidism; suppressed PTH \u2192 investigate for malignancy/other) and considers a myeloma screen / further work-up if indicated' },
      { dom:'tasks', text:'Identifies and addresses the REVERSIBLE contributors by taking a full history INCLUDING OTC/self-bought items: high-dose vitamin D + calcium supplements and the thiazide diuretic \u2014 advises stopping/adjusting and rechecking calcium' },
      { dom:'tasks', text:'Screens for hypercalcaemia symptoms/severity ("bones, stones, groans, moans" \u2014 bone pain, renal stones, abdominal/constipation, polyuria/polydipsia, confusion) and knows that severe/symptomatic hypercalcaemia is urgent; here mild/stable, so structured outpatient work-up' },
      { dom:'tasks', text:'Avoids both false reassurance and feeding the catastrophe: does not promise "it\u2019s definitely not cancer", nor confirm the friend\u2019s claim \u2014 commits to finding the cause and explains what each result would mean' },
      { dom:'rto',   text:'Defuses the catastrophic certainty (the friend\u2019s claim, the mother\u2019s death) with empathy and calm, accurate information, rather than dismissing her or amplifying the fear' },
      { dom:'rto',   text:'Takes the supplement/OTC history non-judgementally and reframes the result as "a puzzle we solve", reducing her terror while staying honest' },
      { dom:'gs',    text:'Safety-nets and follows up: the PTH-led work-up and a recheck off supplements/thiazide, symptoms that would need urgent review (marked thirst/confusion/vomiting/severe symptoms), a clear plan to go through results, and reassurance balanced with honesty' },
    ],
    worked:[
      { lbl:'Defuse, honestly',       txt:'"I can hear how frightened you are, and I\u2019m really glad you came rather than sitting with it. Let me be honest AND calm with you: a high calcium has several possible causes, and yes, cancer is one of them \u2014 but your friend\u2019s rule isn\u2019t right. In someone like you \u2014 well in yourself, only mildly up, no history of cancer \u2014 by far the commonest cause is a small, benign overactivity of a gland in your neck, not cancer. We just need to test to confirm which."' },
      { lbl:'Name the key test',    txt:'"There\u2019s one test that sorts most of this out: a hormone called PTH, from the parathyroid glands. If it\u2019s up or even just \u2018normal when it shouldn\u2019t be\u2019, that\u2019s the benign gland problem \u2014 common and very manageable. If it\u2019s low, then we look further. So rather than worry in the dark, that one blood test points us the right way."' },
      { lbl:'Find the hidden causes', txt:'"Now \u2014 a couple of things that can nudge calcium up that people often don\u2019t mention. Do you take any supplements you\u2019ve bought yourself? \u2026 High-dose vitamin D and calcium, yes \u2014 those absolutely can do it. And the water tablet for your blood pressure can too. None of that is your fault, but it\u2019s really useful: let\u2019s stop the supplements, I\u2019ll review the water tablet, and recheck \u2014 that alone might explain it."' },
      { lbl:'Check for symptoms',   txt:'"Let me ask a few quick things: any bone pain, kidney-stone type pain, a lot of thirst or weeing, tummy upset or feeling muddled? \u2026 Mostly fine. Good \u2014 that\u2019s reassuring; it tells me this isn\u2019t a severe or urgent rise, so we\u2019ve time to work it up properly rather than rushing."' },
      { lbl:'No false promises',    txt:'"I\u2019m not going to do what your friend did and give you a verdict without the facts \u2014 I won\u2019t say \u2018it\u2019s definitely not cancer\u2019 any more than I\u2019d say it is. What I CAN promise is we\u2019ll find out properly and quickly, and I\u2019ll explain exactly what each result means as we go. The odds are genuinely in your favour here."' },
      { lbl:'Plan + safety-net',    txt:'"So: stop the calcium and vitamin D supplements now, I\u2019ll arrange the PTH and the other bloods and review your water tablet, and we\u2019ll recheck the calcium. If before then you get very thirsty and weeing lots, vomiting, confusion or severe tummy pain, contact us \u2014 that would need quicker attention. Otherwise, let\u2019s get the tests and I\u2019ll go through them with you. You came in braced for the worst; the most likely answer is something common, benign and fixable."' },
    ],
    learning:'A mild, confirmed hypercalcaemia in a WELL person with no cancer history most commonly reflects PRIMARY HYPERPARATHYROIDISM, not malignancy \u2014 so the patient\u2019s "high calcium means cancer" certainty must be defused honestly and calmly (cancer is one cause, not the likeliest here), and the result worked up rather than guessed. The pivotal next test is PTH (with renal function, vitamin D, phosphate, ALP): a raised or inappropriately-normal PTH indicates primary hyperparathyroidism; a suppressed PTH points toward malignancy/other causes needing further work-up (including a myeloma screen if indicated). Crucially, take a full history INCLUDING self-bought items \u2014 high-dose vitamin D/calcium supplements and thiazide diuretics are common, reversible contributors that are easily missed \u2014 stop/adjust and recheck. Screen severity ("bones, stones, groans, moans"; severe/symptomatic hypercalcaemia is urgent). The hidden agenda is catastrophic fear from a friend\u2019s claim amplified by a mother\u2019s cancer death; address it with empathy and accurate information, avoiding both false reassurance and feeding the catastrophe, and safety-net symptoms of severe hypercalcaemia.',
    knowledge:{
      guideline:'NICE NG132 hyperparathyroidism · CKS hypercalcaemia · myeloma work-up where indicated',
      points:[
        { h:'The two commonest causes', t:'In primary care, ~90% of hypercalcaemia is primary hyperparathyroidism (often mild, chronic, in well outpatients) or malignancy (often markedly raised, in unwell patients or with known cancer). A mild, stable rise in a well person without cancer history favours hyperparathyroidism \u2014 but confirm and work up.' },
        { h:'PTH is the pivotal test', t:'After confirming a raised ADJUSTED calcium on a repeat, measure PTH (with U&E, phosphate, vitamin D, ALP, and magnesium). Raised or inappropriately-normal PTH = primary hyperparathyroidism. SUPPRESSED PTH = PTH-independent hypercalcaemia \u2192 investigate for malignancy (incl. myeloma screen), vitamin D excess, granulomatous disease, etc.' },
        { h:'Find reversible/iatrogenic contributors', t:'Thiazide diuretics, lithium, and excess vitamin D/calcium supplementation (often self-bought and unmentioned) raise calcium. Take a full drug AND supplement history; stop/adjust and recheck \u2014 these can be the whole explanation or a confounder.' },
        { h:'Assess severity & symptoms', t:'"Bones, stones, abdominal groans, psychic moans, thrones (polyuria)": bone pain, renal stones, constipation/abdominal pain, polyuria/polydipsia, fatigue, confusion. Severe (e.g. >3.0 mmol/L) or symptomatic hypercalcaemia is a medical emergency (fluids, urgent assessment). Mild/asymptomatic \u2192 structured outpatient work-up.' },
        { h:'Manage primary hyperparathyroidism', t:'Confirmed primary hyperparathyroidism: assess for end-organ effects (renal function, stones, DEXA for bone density) and refer; parathyroidectomy is curative and indicated by NG132 criteria (e.g. symptomatic, significant hypercalcaemia, renal/bone involvement, younger age). Often it is mild and managed conservatively with monitoring.' },
        { h:'Communicate without false poles', t:'Defuse "high calcium = cancer" certainty honestly \u2014 cancer is one cause, not the likeliest in a well person with a mild rise \u2014 without promising "definitely not cancer". Take supplement/OTC history non-judgementally; commit to a structured work-up and explain what each result means.' },
        { h:'Never do', t:'Never confirm OR dismiss the cancer fear without working it up; never omit PTH or the supplement/thiazide history; never miss severe/symptomatic hypercalcaemia needing urgent care; never give false reassurance or feed the catastrophe.' },
        { h:'Safety-net & follow-up', t:'Repeat adjusted calcium off supplements / with thiazide reviewed; PTH-led work-up \u00b1 myeloma screen; severe-hypercalcaemia symptoms (marked thirst/polyuria, vomiting, confusion) \u2192 urgent; planned review of results; referral per cause.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c101, c102, c103, c104);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'raised-prolactin': {
      ceg: ['Gender, reproductive & sexual health', 'Investigations & results'],
      stem: {
        name: 'Hannah Reid', age: '29 years · female',
        pmh: ['6 months amenorrhoea + galactorrhoea; reduced libido', 'Prolactin ~2200 mU/L (very raised); pregnancy test negative', 'Headaches + "bumping into door frames" (?visual field)'],
        meds: ['Recently started a private "anxiety/sleep" tablet (dopamine-blocker)'],
        allergy: 'NKDA',
        recent: 'Convinced it\u2019s a brain tumour; deeper worry is fertility.',
        reason: 'Video consultation — periods stopped + breast milk.'
      },
      timeMap: [
        { t:'0–2',  h:'Name the syndrome',   d:'Missed periods + milk + high prolactin (one hormone). Find WHY — most causes are treatable.' },
        { t:'2–4',  h:'Hunt the drug cause',  d:'Full drug history incl. private/OTC — the dopamine-blocker "anxiety pill" raises prolactin; also exclude pregnancy/hypothyroidism.' },
        { t:'4–6',  h:'Address tumour fear + red flags', d:'Benign pituitary adenomas usually treated with tablets; headaches/door-frames → visual fields + pituitary MRI.' },
        { t:'6–9',  h:'The fertility answer',  d:'The deeper fear: highly treatable; fertility usually returns once prolactin normalises. "You are not broken."' },
        { t:'9–12', h:'Plan + safety-net',    d:'Repeat prolactin, TFTs, pregnancy test, MRI/endocrine referral, visual fields; don\u2019t stop the psych drug abruptly; worsening vision → urgent.' }
      ],
      wordPics: {
        fail: 'Jumps to "brain tumour" work-up or, conversely, dismisses it; never takes the private/OTC drug history so the dopamine-blocker cause is missed; never surfaces the fertility fear; misses the visual-field red flags.',
        pass: 'Recognises hyperprolactinaemia, excludes drugs/pregnancy/hypothyroidism, arranges MRI/endocrine referral and visual fields, and reassures on fertility.',
        exc:  'Names the syndrome and works it up structured; actively finds the private dopamine-blocker cause and the visual-field red flags; addresses both the stated tumour fear and the deeper, mostly-reassurable fertility fear; and plans repeat bloods/MRI/visual fields without abruptly stopping the psych drug, with an urgent visual safety-net.'
      },
      avoid: [
        { dont:'"High prolactin with headaches — we need to scan your brain urgently for a tumour."', instead:'"High prolactin usually comes from treatable things — let\u2019s first check your medicines, thyroid and a pregnancy test; even a small pituitary growth is usually treated with tablets, and I\u2019ll arrange a scan and check your vision."', why:'Leaping to "brain tumour" terrifies and skips the common, reversible drug/hormonal causes.' },
        { dont:'"Are you on any regular medication from us?" (record only)', instead:'"Tell me about every tablet, including anything private or from the chemist — some sleep/anxiety tablets push prolactin right up."', why:'Asking only about prescribed meds misses the dopamine-blocker that is often the whole cause.' },
        { dont:'"Let\u2019s not worry about fertility until we know what this is."', instead:'"I know the real worry is whether you can have children — and the honest, good news is this is very fixable and fertility usually returns once the prolactin\u2019s sorted."', why:'Deferring the fertility question leaves the deepest fear unaddressed when it can largely be answered reassuringly.' }
      ]
    },

    'thyroid-nodule': {
      ceg: ['Long-term conditions & cancer', 'Investigations & results'],
      stem: {
        name: 'Priya Anand', age: '44 years · female',
        pmh: ['Self-found ~2.5 cm thyroid nodule (moves on swallowing); TFTs normal', 'Neck radiotherapy as a teenager (lymphoma); aunt had thyroid cancer', 'No compressive symptoms now'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Dismissive ("bloods were fine, leave it"); cancer-survivor fear underneath.',
        reason: 'Video consultation — a lump in the neck.'
      },
      timeMap: [
        { t:'0–2',  h:'Correct the misconception', d:'Normal TFTs don\u2019t reassure — most thyroid cancers are euthyroid. A nodule needs examination + ultrasound.' },
        { t:'2–4',  h:'Risk factors',         d:'Teenage neck radiotherapy (major) + family history — raise the importance of checking, not frighten.' },
        { t:'4–6',  h:'Red flags + NG12',     d:'Rapid growth, hard/fixed, hoarseness, dysphagia, nodes → urgent neck-lump/thyroid 2WW. Tag NICE NG12.' },
        { t:'6–9',  h:'Balance + survivor fear', d:'Most nodules benign, thyroid cancer usually very treatable — precautionary, not a verdict. Surface the lymphoma-driven fear.' },
        { t:'9–12', h:'Plan + safety-net',    d:'Examination + TSH + thyroid ultrasound (±FNA)/referral; report new hoarseness/rapid growth/swallowing/breathing trouble; track result.' }
      ],
      wordPics: {
        fail: 'Reassures from the normal TFTs and agrees to "leave it"; misses that euthyroid nodules can be cancer; ignores the radiotherapy/family-history risk and the red flags; never surfaces the survivor fear.',
        pass: 'Corrects the TFT misconception, arranges examination + ultrasound, weights risk factors, refers per red flags, and safety-nets.',
        exc:  'Corrects the "normal bloods = nothing" misconception and weights the radiotherapy/family-history risk; screens red flags and applies the NG12 neck-lump/thyroid pathway; balances honesty with reassurance; surfaces the cancer-survivor fear and uses the patient\u2019s own knowledge that early detection wins; and arranges ultrasound/referral with a compressive/voice safety-net.'
      },
      avoid: [
        { dont:'"Your thyroid blood test was normal, so the lump\u2019s nothing to worry about."', instead:'"A normal thyroid blood test doesn\u2019t tell us about the lump — most thyroid lumps behave with normal bloods. We assess the lump itself with an ultrasound."', why:'Reassuring from normal TFTs misses that most thyroid cancers are euthyroid.' },
        { dont:'"Your old radiotherapy isn\u2019t relevant to a thyroid lump now."', instead:'"Your teenage neck radiotherapy and your aunt\u2019s thyroid cancer actually matter — they\u2019re exactly why we check this lump properly rather than leave it."', why:'Dismissing the radiotherapy/family-history risk discards features that raise the threshold to investigate.' },
        { dont:'"Let\u2019s just keep an eye on it and see if it changes."', instead:'"This needs an ultrasound now, and quickly given your history — watching a thyroid lump with your risk factors isn\u2019t safe."', why:'"Watch and wait" for a nodule in a high-risk patient delays risk-stratification that may need urgent action.' }
      ]
    },

    'prediabetes-fork': {
      ceg: ['Long-term conditions & cancer', 'Investigations & results'],
      stem: {
        name: 'Wesley Grant', age: '52 years · male',
        pmh: ['HbA1c 47 (non-diabetic hyperglycaemia / pre-diabetes)', 'BMI 33, BP 146/90; father T2DM + early MI', 'Sedentary taxi driver; takeaways most nights'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Relieved ("not diabetes, I\u2019m fine"), wants to leave it and recheck next year.',
        reason: 'Telephone — borderline sugar result from an NHS Health Check.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe "fine"',      d:'47 isn\u2019t the all-clear — it\u2019s pre-diabetes, a warning light. Acting now prevents most progression.' },
        { t:'2–4',  h:'Dad → motivation',     d:'His father\u2019s decline drives the avoidance. Flip it: this is the warning to NOT follow that path — agency, not fate.' },
        { t:'4–6',  h:'Whole risk',           d:'BP 146/90 + weight + family MI = heart risk too. One consultation protects a lot.' },
        { t:'6–9',  h:'Realistic for a driver', d:'Cab-drink swaps, break walks, takeaway swaps; refer to the NHS Diabetes Prevention Programme. No idealised lecture.' },
        { t:'9–12', h:'Plan + numbers + net', d:'DPP referral, BP recheck, QRISK/statin, HbA1c re-test in months (48 = diabetes); one first step; hyperglycaemia symptoms → sooner.' }
      ],
      wordPics: {
        fail: 'Confirms "you\u2019re fine, recheck next year", missing the prevention opportunity; addresses only the glucose and ignores BP/weight/CVD risk; never converts the father-driven fear/fatalism into motivation; no DPP referral.',
        pass: 'Reframes 47 as a modifiable warning, refers to the DPP with realistic advice, addresses BP/CVD risk, and sets a recheck plan.',
        exc:  'Defuses the relief-avoidance and reframes 47 as a warning he can act on; converts the father story into motivation against fatalism; treats the whole cardiometabolic risk; tailors lifestyle to a taxi driver and refers to the DPP; and sets an active monitoring plan with one concrete first step and a safety-net.'
      },
      avoid: [
        { dont:'"It\u2019s not in the diabetes range, so you\u2019re fine — we\u2019ll recheck next year."', instead:'"47 isn\u2019t diabetes, but it\u2019s not the all-clear either — it\u2019s a warning light, and acting now stops most people going on to diabetes."', why:'Calling pre-diabetes "fine" and parking it for a year wastes a preventable fork in the road.' },
        { dont:'"It runs in your family, so it\u2019s likely you\u2019ll get it eventually anyway."', instead:'"Your dad\u2019s diabetes is exactly why this warning is a gift — it\u2019s your chance to NOT follow his path, and that\u2019s genuinely in your hands."', why:'Feeding fatalism removes the agency that makes prevention work.' },
        { dont:'"You just need to lose weight and exercise more."', instead:'"Driving all day, let\u2019s be realistic — cab drinks to water, a walk on breaks, lighter takeaways a few nights, plus a free NHS prevention programme made for this."', why:'An idealised lecture a driver can\u2019t follow breeds guilt and disengagement.' }
      ]
    },

    'hypercalcaemia-workup': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Carol Lindqvist', age: '58 years · female',
        pmh: ['Adjusted calcium 2.78 (mildly raised), confirmed on repeat; well', 'No cancer history; PTH not yet done', 'Self-bought high-dose vitamin D + calcium; thiazide for BP'],
        meds: ['Thiazide', 'High-dose vitamin D + calcium (self-bought)'],
        allergy: 'NKDA',
        recent: 'Terrified — friend said "high calcium means cancer"; mother died of cancer.',
        reason: 'Video consultation — incidental mildly raised calcium.'
      },
      timeMap: [
        { t:'0–2',  h:'Defuse, honestly',    d:'Cancer is one cause, not the likeliest in a well person with a mild rise — the friend\u2019s rule is wrong. We test to confirm.' },
        { t:'2–4',  h:'PTH is the key',       d:'PTH (+ U&E, phosphate, vit D, ALP): raised/inappropriately-normal = benign parathyroid cause; suppressed → look further.' },
        { t:'4–6',  h:'Find hidden causes',   d:'Self-bought high-dose vitamin D/calcium + thiazide raise calcium — stop/adjust and recheck; may be the whole answer.' },
        { t:'6–9',  h:'Severity + no false poles', d:'Screen bones/stones/groans/moans; mild here. Won\u2019t promise "definitely not cancer" nor confirm the friend; commit to working it up.' },
        { t:'9–12', h:'Plan + safety-net',    d:'Stop supplements, review thiazide, PTH-led bloods, recheck calcium; severe symptoms (thirst/polyuria/vomiting/confusion) → urgent; go through results.' }
      ],
      wordPics: {
        fail: 'Either confirms the cancer fear or falsely promises "it\u2019s not cancer"; never orders PTH; never asks about the self-bought vitamin D/calcium or the thiazide; misses the reversible contributors and the structured work-up.',
        pass: 'Explains hyperparathyroidism is the commoner cause, orders PTH-led bloods, finds and stops the supplement/thiazide contributors, screens severity, and safety-nets.',
        exc:  'Defuses the catastrophic certainty honestly without false reassurance; orders the PTH-led work-up and explains the logic; takes a non-judgemental supplement/OTC history and stops the reversible contributors with a recheck; screens severity; and addresses the friend/mother-driven fear with empathy while committing to find the cause.'
      },
      avoid: [
        { dont:'"Don\u2019t worry, high calcium almost never means cancer — it\u2019s definitely something minor."', instead:'"Cancer is one cause but not the likeliest in someone well with a mild rise — the commonest is a benign gland problem. I won\u2019t guess either way; one blood test, the PTH, points us the right direction."', why:'False reassurance ("definitely minor") is as unsafe as confirming the cancer fear; commit to the work-up instead.' },
        { dont:'"Are you on any medication?" (and stopping there)', instead:'"Do you take any supplements you\u2019ve bought yourself? \u2026 High-dose vitamin D and calcium, and your water tablet, can all raise calcium — let\u2019s stop the supplements and recheck."', why:'Missing the self-bought vitamin D/calcium and the thiazide overlooks common reversible causes that may explain the result.' },
        { dont:'"Let\u2019s just repeat the calcium in a few months and see."', instead:'"Let\u2019s do the PTH and the other bloods now, stop the supplements, review the thiazide, and recheck — that gets us an answer rather than just watching a worrying number."', why:'Passive repeat without PTH and without removing contributors leaves the cause unfound and the patient frightened.' }
      ]
    }
  });

})();
