/* ============================================================
   Reasoning GP — Case Library batch 27: "Endocrine & metabolic results"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 noted where it maps (thyroid nodule with red flags ->
   neck-lump / suspected thyroid cancer pathway consideration).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases26.js.
   ============================================================ */

(function(){

  /* ============ 101. VIDEO — Raised prolactin ============ */
  const c101 = {
    id:'raised-prolactin', title:'"My periods stopped and now there\u2019s milk \u2014 am I pregnant?"', type:'video', duration:12,
    meta:{ age:29, sex:'F', setting:'Video consultation \u2014 amenorrhoea + galactorrhoea; prolactin raised.', system:'Endocrine / Hyperprolactinaemia', checked:'October 2026' },
    brief:'Miss Hannah Reid, 29. Bloods done for absent periods (6 months) show PROLACTIN markedly raised (~2200 mU/L; lab upper ~500). Negative pregnancy test. She has milky nipple discharge, reduced libido, and \u2014 on questioning \u2014 occasional headaches and "bumping into door frames" (?visual field). Takes no regular meds on the practice record; if asked, started an antipsychotic-type tablet from a private clinic for "anxiety/sleep" about 8 months ago, shortly before her periods stopped (so the timing fits a drug cause — though a pituitary cause still has to be excluded, given her visual symptoms). Frightened it\u2019s a brain tumour. Wants to know if she can still have children.',
    script:{
      opening:'"Thanks for seeing me. My periods stopped about six months ago, I did about ten pregnancy tests and they\u2019re all negative \u2014 but now I\u2019ve got actual milk leaking from my breasts, which is terrifying when you\u2019re not pregnant. I googled it and I\u2019m now convinced I\u2019ve got a brain tumour. And honestly\u2026 the bit I keep coming back to is, does this mean I can\u2019t have kids? That\u2019s what\u2019s really keeping me up."',
      facts:[
        { topic:'The picture',         text:'If explored: 6 months amenorrhoea, galactorrhoea, reduced libido, with a markedly raised prolactin and negative pregnancy test \u2014 the classic hyperprolactinaemia syndrome. Headaches and possible visual-field disturbance ("bumping into door frames") raise the question of a pituitary macroadenoma pressing on the optic chiasm.' },
        { topic:'The medication clue',  text:'On direct questioning (easily missed): about 8 months ago — shortly before her periods stopped — she started a drug from a private clinic for anxiety/sleep \u2014 it turns out to be a dopamine-blocking agent (e.g. an antipsychotic such as a prescribed sulpiride/risperidone, or metoclopramide/domperidone) which RAISES prolactin. Drug-induced hyperprolactinaemia is common and reversible — a key alternative to a tumour that must be actively sought, and the dates fit. But a drug cause does not explain the headaches and "bumping into door frames", so pituitary imaging is still needed. (Also exclude hypothyroidism, renal impairment, pregnancy, macroprolactin, PCOS overlap.)' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the stated worry is a brain tumour, but the deeper, less-voiced fear is FERTILITY: she and her partner had just started thinking about trying for a baby, and she\u2019s terrified this means she\u2019s "broken" and can never conceive. There\u2019s also shame about the private "anxiety pills" she hasn\u2019t told her partner or her GP about. Surfacing both is the consultation.' },
        { topic:'The reassurance available', text:'If reached: most hyperprolactinaemia (drug-induced, or a prolactinoma) is very treatable; prolactinomas usually respond well to medication (dopamine agonists), fertility is usually RECOVERABLE once prolactin is normalised \u2014 genuinely reassuring news once the cause is found.' },
        { topic:'What she needs',       text:'Officially: to know it\u2019s not a tumour and whether she can have children. What she needs: a structured work-up (repeat prolactin, exclude pregnancy/drugs/hypothyroidism, then pituitary MRI/endocrine referral, visual fields if symptoms), the drug cause actively sought, honest fertility reassurance, and the brain-tumour fear addressed.' },
      ],
      ice:{
        ideas:'The milk and missed periods mean either pregnancy (ruled out) or a brain tumour.',
        concerns:'HIDDEN AGENDA \u2014 the deeper fear is fertility ("am I broken, can I never have kids?") just as she and her partner think about trying; plus shame about private "anxiety pills" she hasn\u2019t disclosed.',
        expectations:'To be told it\u2019s not a tumour and whether she can have children. What she actually needs: a structured cause work-up (incl. the drug cause), pituitary assessment, and honest, mostly-reassuring fertility information.'
      },
      cues:['Amenorrhoea + galactorrhoea + raised prolactin, pregnancy-negative \u2014 hyperprolactinaemia; find the cause, don\u2019t jump to tumour.','Headaches + "bumping into door frames" \u2014 possible chiasmal compression (macroadenoma); ask visual fields.','Private "anxiety pills" started about 8 months ago, just before the periods stopped — the dopamine-blocker drug cause, easily missed (but it doesn’t explain the visual symptoms); and the unspoken fertility fear.']
    },
    checkpoints:[
      { dom:'dg', text:'Recognises the hyperprolactinaemia syndrome (amenorrhoea, galactorrhoea, reduced libido, raised prolactin, pregnancy-negative) and works it up STRUCTURED rather than jumping to "brain tumour" \u2014 confirms with a repeat prolactin on a rested sample (asking the lab about macroprolactin) and excludes the common reversible causes' },
      { dom:'dg', text:'Actively seeks the DRUG cause: asks specifically about all medicines incl. private/OTC, identifying the dopamine-blocking agent (antipsychotic/metoclopramide/domperidone) as a common, reversible cause \u2014 and also excludes pregnancy, primary hypothyroidism (TFTs) and renal cause' },
      { dom:'dg', text:'Screens for and acts on MACROADENOMA red flags: headache and visual-field disturbance (formal visual fields), and arranges PITUITARY MRI and endocrine referral, recognising chiasmal compression needs prompt assessment — and that a sudden severe headache with visual loss or eye-movement problems suggests pituitary apoplexy, an emergency (Society for Endocrinology pituitary apoplexy guidelines, 2011)' },
      { dom:'cm', text:'Gives honest, mostly-REASSURING fertility information: most hyperprolactinaemia is treatable (stop/switch the offending drug, or a dopamine agonist for a prolactinoma), and fertility usually recovers once prolactin normalises \u2014 directly addressing the deeper fear' },
      { dom:'cm', text:'Addresses the brain-tumour fear proportionately and the private-medication disclosure non-judgementally, advising on the offending drug (not stopping a needed psychiatric drug abruptly without a plan / liaise as appropriate)' },
      { dom:'ro',   text:'Hears the stated tumour fear AND surfaces the deeper fertility fear, responding to both; handles the private "anxiety pills" shame without judgement so the drug history is complete' },
      { dom:'ro',   text:'Balances honesty (a cause must be found, possible MRI) with genuine reassurance (highly treatable, fertility usually recoverable), pacing it to her anxiety' },
      { dom:'cm',    text:'Safety-nets and follows up: repeat prolactin + TFTs + pregnancy test, MRI/endocrine referral and visual fields if symptoms, what to do if headache/vision worsens (urgent), the medication plan, and follow-up to go through results' },
    ],
    worked:[
      { lbl:'Name the syndrome',      txt:'"Let me explain what ties this together \u2014 the missed periods AND the milk. There\u2019s a hormone called prolactin, the one that makes milk, and yours is high. When it\u2019s up, it switches periods off and can cause milk even when you\u2019re not pregnant. So this isn\u2019t random or mysterious; it\u2019s one hormone, and the job now is to find WHY it\u2019s high \u2014 and most of the whys are very treatable."' },
      { lbl:'Hunt the drug cause',    txt:'"Before we think about anything in the head \u2014 can I ask about every tablet you take, including anything private or from the chemist? \u2026 The sleep/anxiety tablet from the clinic. That\u2019s really important: some of those directly push prolactin up, and that\u2019s a common, completely reversible cause. No judgement at all \u2014 I\u2019m just glad to know, because it might be the whole answer."' },
      { lbl:'Address the tumour fear', txt:'"On the brain-tumour worry \u2014 high prolactin CAN come from a small, benign growth on the pituitary gland at the base of the brain, but \u2018benign\u2019 is the word, and even then it\u2019s usually treated with tablets, not surgery. I do want a scan to look, and because you mentioned headaches and bumping into door frames, I\u2019ll check your eyes\u2019 side vision too \u2014 but the picture in your head is almost certainly worse than the reality."' },
      { lbl:'The fertility answer', txt:'"And the question that\u2019s really keeping you up \u2014 can you have children. Here\u2019s the honest, good news: this is one of the most fixable causes of periods stopping. Once we sort why the prolactin\u2019s high \u2014 change the tablet, or treat a small growth \u2014 the prolactin comes down, your periods come back, and fertility usually returns with them. You are not broken."' },
      { lbl:'The plan',             txt:'"So: I\u2019ll repeat the prolactin, check your thyroid and a pregnancy test, and arrange a scan of the pituitary and a check of your visual fields, plus refer you to the hormone specialists. We\u2019ll work out the tablet situation safely \u2014 don\u2019t stop the anxiety one suddenly; we\u2019ll plan it. Bring your partner to the next appointment if it helps."' },
      { lbl:'Safety-net',           txt:'"If your headaches get much worse, or your vision changes \u2014 blurring, losing the edges, double vision \u2014 that’s urgent, contact us the same day; and a sudden, severe headache with loss of vision or double vision is an emergency — go to A&E or call 999 — because that’s the bit we don’t wait on. Otherwise, let\u2019s get the tests done and I\u2019ll go through everything with you. You came in fearing the worst on two fronts; the likely reality is a treatable hormone problem and a future that still very much includes children."' },
    ],
    learning:'The triad of amenorrhoea, galactorrhoea and a markedly raised prolactin (pregnancy-negative) is hyperprolactinaemia \u2014 work it up structured rather than leaping to "brain tumour". Confirm with a repeat prolactin and exclude the common reversible causes: pregnancy, primary hypothyroidism, renal impairment, and especially DRUGS (dopamine-blockers \u2014 antipsychotics, metoclopramide, domperidone), which here is the easily-missed cause hiding in a private "anxiety pill" started shortly before her periods stopped — though it does not explain her visual symptoms. Screen for macroadenoma red flags (headache, visual-field loss from chiasmal compression) with formal visual fields, and arrange pituitary MRI and endocrine referral. The examinable hidden agenda is twofold: the stated brain-tumour fear, and the deeper, less-voiced FERTILITY fear ("am I broken?") as she and her partner consider trying \u2014 plus shame about undisclosed private medication. Deliver honest, mostly-reassuring information (hyperprolactinaemia is highly treatable; prolactinomas usually respond to dopamine agonists; fertility usually recovers once prolactin normalises), take a complete non-judgemental drug history, don\u2019t stop a needed psychiatric drug abruptly, and safety-net visual symptoms as urgent.',
    knowledge:{
      guideline:'No UK national guideline on hyperprolactinaemia · Endocrine Society clinical practice guideline: diagnosis and treatment of hyperprolactinemia (2011; international) · Pituitary Society consensus on prolactinomas (2023; international) · Society for Endocrinology pituitary apoplexy guidelines (2011)',
      points:[
        { h:'Recognise the syndrome', t:'Hyperprolactinaemia: amenorrhoea/oligomenorrhoea, galactorrhoea, reduced libido/erectile dysfunction, infertility; in long-standing cases, low oestrogen/testosterone effects. Confirm a raised prolactin on a repeat sample (avoid stress/venepuncture artefact; consider macroprolactin). Always exclude pregnancy first.' },
        { h:'Exclude reversible causes before "tumour"', t:'Common causes: pregnancy/lactation, DRUGS (dopamine antagonists \u2014 antipsychotics, metoclopramide, domperidone; also some antidepressants, opioids, oestrogens), primary hypothyroidism (check TFTs \u2014 high TRH drives prolactin), chronic kidney disease, stress, chest-wall stimulation. Take a thorough drug history INCLUDING private/OTC medicines.' },
        { h:'Identify pituitary causes & red flags', t:"Prolactinoma (microadenoma <10 mm; macroadenoma ≥10 mm) and other pituitary/hypothalamic lesions. Very high prolactin suggests a macroprolactinoma (Endocrine Society 2011, international: a level above 250 µg/L — roughly 5000 mU/L — usually indicates a prolactinoma). Red flags of mass effect: headache, visual-field defect (bitemporal hemianopia from chiasmal compression), cranial nerve signs, hypopituitarism. Assess visual fields and arrange pituitary MRI." },
        { h:'Treatment & prognosis are reassuring', t:'Drug-induced: stop/switch the offending agent where safe (liaise with the prescriber; do not abruptly stop needed psychiatric medication). Prolactinomas: dopamine agonists (cabergoline/bromocriptine; dose and monitoring per BNF) are first-line and usually shrink the tumour and normalise prolactin; surgery is rarely needed (Pituitary Society 2023, international). Fertility typically recovers once prolactin normalises. Prolonged low oestrogen affects bone health — another reason to find and treat the cause.' },
        { h:'Investigate appropriately', t:'Repeat prolactin, pregnancy test, TFTs, U&E; then pituitary MRI and endocrine referral for confirmed/unexplained hyperprolactinaemia or any red flags; formal visual fields if mass-effect symptoms.' },
        { h:'Address both fears', t:'Patients fixate on "brain tumour" while a deeper fertility fear often goes unspoken. Surface and address both; give honest, mostly-reassuring information; handle undisclosed/private medication non-judgementally to complete the history.' },
        { h:'Never do', t:'Never jump to "brain tumour" without excluding drugs/pregnancy/hypothyroidism; never omit the full (private/OTC-inclusive) drug history; never miss visual-field/mass-effect red flags or fail to arrange MRI; never abruptly stop a needed psychiatric drug; never leave the fertility fear unaddressed.' },
        { h:'Safety-net & follow-up', t:'Repeat prolactin (rested sample; macroprolactin) + TFTs + U&E + pregnancy test; pituitary MRI, endocrine referral and visual fields as indicated; urgent review if headache/visual symptoms worsen; planned medication change; follow-up to discuss results and fertility.' }
      ]
    }
  };

  /* ============ 102. VIDEO — Incidental thyroid nodule ============ */
  const c102 = {
    id:'thyroid-nodule', title:'"I found a lump in my neck \u2014 it moves when I swallow"', type:'video', duration:12,
    meta:{ age:44, sex:'F', setting:'Video consultation \u2014 a self-found thyroid nodule.', system:'Endocrine / Thyroid nodule', checked:'October 2026' },
    brief:'Mrs Priya Anand, 44, found a lump in the front of her neck that moves on swallowing. No pain. TFTs (done by the nurse) are normal. On the call/photo: a single ~2.5 cm nodule. On questioning she has NO compressive symptoms now, but \u2014 if asked \u2014 had neck radiotherapy as a teenager for lymphoma, and an aunt had thyroid cancer. She is dismissive ("probably nothing, the bloods were fine"). Wants to "leave it as the thyroid blood test was normal". No hoarseness/dysphagia volunteered.',
    script:{
      "opening": "\"Hi. So I found this lump in my neck — here, at the front — and it bobs up and down when I swallow, which my friend who's a nurse said means it's thyroid. The thyroid blood test came back normal though, so I'm guessing it's nothing and I can just leave it? I don't really want a fuss over a lump that isn't even causing me any trouble. It's not painful or anything.\"",
      "facts": [
        {
          "topic": "The lump",
          "text": "If asked: found it about six weeks ago putting on a necklace. Front of the neck, slightly to the right, \"about the size of a grape\". Not painful. You think it might be a little bigger than when you first noticed it, but you are not sure. On video you can point to it and swallow — it moves up and down."
        },
        {
          "topic": "Neck and throat symptoms (if asked)",
          "text": "No change in your voice, no hoarseness, no difficulty swallowing, no choking, no noisy breathing or breathlessness. No other lumps you have felt in your neck."
        },
        {
          "topic": "Thyroid symptoms (if asked)",
          "text": "No palpitations, tremor, weight change, heat or cold intolerance. Periods regular."
        },
        {
          "topic": "Past history — only if asked about past illnesses",
          "text": "Hodgkin lymphoma at 15 — chemotherapy and radiotherapy to the neck and chest. \"All clear for nearly 30 years.\" You stopped going to the late-effects follow-up clinic about 10 years ago."
        },
        {
          "topic": "Family history (if asked)",
          "text": "Your aunt (mum's sister) had thyroid cancer in her 50s — \"she had an operation and she's fine now\"."
        },
        {
          "topic": "Medication and allergies",
          "text": "No regular medication. No allergies."
        },
        {
          "topic": "Social",
          "text": "44, accountant, married, two children aged 7 and 10. Never smoked. Drinks socially."
        },
        {
          "topic": "Hidden fear — hold back",
          "text": "You are terrified of \"cancer again\". The lymphoma treatment was the worst year of your life and you swore you would never go through that again. That is why you want the normal blood test to be the answer. Say this only if asked about the lymphoma or what worries you."
        },
        {
          "topic": "How to play it",
          "text": "Brisk and breezy — you want to be told to leave it. If the doctor accepts that, say thank you and go. If they explain that normal bloods do not rule out a problem and ask about your past, become quieter and admit the fear. You accept an urgent referral if it is explained as checking carefully, with the reassurance that most lumps are not cancer. Ask: \"Will it be a big operation?\" and \"Do I have to tell the kids?\""
        }
      ],
      "ice": {
        "ideas": "\"It's thyroid, and the blood test was normal, so it's probably nothing.\"",
        "concerns": "Underneath (only if asked): \"I can't go through cancer again.\" Also the disruption to work and the children.",
        "expectations": "\"Can I just leave it?\" You will accept a scan and referral if the reasons are explained calmly."
      },
      "cues": [
        "\"The blood test was normal though, so I'm guessing it's nothing.\" — say in the opening.",
        "\"I had treatment for lymphoma as a teenager — but that was ages ago.\" — say if asked about your medical history.",
        "\"I don't want to go through all that again.\" — say quietly if the lymphoma is explored."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Corrects the key misconception: a palpable thyroid nodule with NORMAL TFTs is NOT reassuring \u2014 most thyroid cancers are euthyroid \u2014 so normal bloods do not justify "leaving it"; a nodule needs examination, TSH and thyroid ULTRASOUND to risk-stratify' },
      { dom:'dg', text:'Elicits and weights the RISK FACTORS: previous head/neck irradiation (major) and family history of thyroid cancer, plus age \u2014 raising concern and the threshold to investigate/refer' },
      { dom:'dg', text:"Screens for RED FLAGS: rapid growth, hard/fixed nodule, hoarseness/voice change, dysphagia, cervical lymphadenopathy — and knows that under NICE NG12 an unexplained thyroid lump on its own meets the criterion to consider a suspected cancer pathway referral (her radiotherapy and family history make it clearly right), while stridor or breathing difficulty needs an immediate same-day opinion (British Thyroid Association 2014); tagged NICE NG12" },
      { dom:'cm', text:"Plans the correct work-up: examination (nodule characteristics + nodes), TSH (and thyroid antibodies if indicated), thyroid ULTRASOUND with risk-stratification (NICE NG230: an established grading system — in the UK usually BTA U1–U5; TIRADS systems are international alternatives), and FNA/specialist referral as indicated — in practice via the suspected cancer pathway given the NICE NG12 criterion and her risk factors — rather than reassurance from TFTs alone" },
      { dom:'cm', text:'Gives balanced information: most thyroid nodules are benign and many cancers are treatable with excellent outcomes \u2014 so investigation is precautionary, not a verdict \u2014 without either dismissing or catastrophising' },
      { dom:'ro',   text:'Surfaces the cancer-survivor fear (the lymphoma history) gently and addresses it, rather than colluding with the "bloods are fine, leave it" avoidance' },
      { dom:'ro',   text:'Handles the disruption/family worries and balances honesty with reassurance so she engages with assessment' },
      { dom:'cm',    text:'Safety-nets and follows up: arranges the suspected cancer pathway referral (NHS England Faster Diagnosis Standard: diagnosis or all-clear within 28 days), advises reporting new hoarseness, rapid growth, swallowing difficulty (urgent) and any noisy breathing/stridor or breathing difficulty (same day — BTA 2014), confirms understanding/engagement, documents, and tracks the result' },
    ],
    worked:[
      { lbl:'Correct the misconception', txt:'"I can see why a normal thyroid blood test feels reassuring \u2014 but here\u2019s the important thing most people don\u2019t know: a thyroid lump usually behaves with completely normal blood tests, even when it\u2019s something we\u2019d want to check. So \u2018the bloods were fine\u2019 doesn\u2019t tell us about the lump itself. The way to assess a lump is to look at it directly with an ultrasound scan."' },
      { lbl:'Surface the risk factors', txt:'"Can I ask a couple of things? \u2026 You had radiotherapy to the neck as a teenager, for the lymphoma, and an aunt had thyroid cancer. Those both matter \u2014 they raise the importance of checking a thyroid lump properly. I\u2019m not saying that to frighten you; I\u2019m saying it\u2019s exactly why we don\u2019t just leave it."' },
      { lbl:'Screen red flags',     txt:'"A few quick questions: has the lump grown quickly? Any change to your voice or hoarseness? Any trouble swallowing? Any other lumps in the neck? \u2026 Those help me judge how quickly to act. And I\u2019ll feel the lump and your neck glands when I examine you."' },
      { lbl:'Balance it',           txt:'"Two honest things together: the large majority of thyroid lumps turn out to be benign, and even the ones that aren\u2019t are usually very treatable with good outcomes. AND, because of your history, we check properly rather than guess. Both are true \u2014 so this is precautionary, not me telling you it\u2019s cancer."' },
      { lbl:'Surface the real fear', txt:'"I suspect part of you has been hoping the normal bloods meant you could avoid all this \u2014 because you\u2019ve been through cancer before and the thought of it coming back is terrifying. That fear makes complete sense. But having beaten it once, you of all people know that checking early is what gives the best outcome \u2014 not waiting."' },
      { lbl:'Plan + safety-net',    txt:"\"So: I’ll examine you and refer you on the fast-track route to the thyroid/neck-lump clinic — the NICE guidance, NICE NG12, supports that for a new thyroid lump, and your history makes it clearly right. They’ll do the ultrasound and, depending on what it shows, may take a tiny sample with a needle; the aim is an answer within 28 days. If meanwhile your voice changes, the lump grows fast, or you struggle to swallow, tell us straightaway — and any noisy breathing or difficulty breathing is same-day, A&E if we’re closed. I’ll follow the results through with you. You wanted to leave it; what I’m doing is making sure that if there’s anything to find, we find it early.\"" },
    ],
    learning:"A palpable thyroid nodule with NORMAL thyroid function is the rule, not reassurance — most thyroid cancers are euthyroid — so \"the bloods were fine\" must never justify leaving a nodule. The work-up is examination (nodule characteristics and cervical nodes), TSH, and thyroid ULTRASOUND with risk-stratification (U-classification/TIRADS) and FNA/specialist referral as indicated. Elicit and weight the risk factors — here previous head/neck irradiation (major) and family history of thyroid cancer — and screen the red flags (rapid growth, hard/fixed nodule, hoarseness/voice change, dysphagia, cervical lymphadenopathy). Under NICE NG12 an unexplained thyroid lump on its own meets the criterion to consider a suspected cancer pathway referral — her risk factors make it clearly right — and stridor needs an immediate same-day opinion (British Thyroid Association 2014). The examinable hidden agenda is cancer-survivor fear: treated for lymphoma as a teenager, she uses the normal TFTs as permission to avoid facing a possible new cancer. Surface and address that fear, balance honesty with reassurance (most nodules benign, thyroid cancer usually very treatable), and complete the ultrasound/referral with a clear safety-net for compressive/voice red flags.",
    knowledge:{
      guideline:"NICE NG230 Thyroid cancer: assessment and management (2022) · NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) · British Thyroid Association guidelines for the management of thyroid cancer (2014; U1–U5 classification) · NHS England Faster Diagnosis Standard (October 2023)",
      points:[
        { h:'Normal TFTs do NOT exclude cancer', t:'Most thyroid nodules are associated with normal thyroid function, and most thyroid cancers are euthyroid. Normal TFTs therefore do not reassure about a nodule. Always assess a palpable nodule with examination, TSH, and thyroid ULTRASOUND — NICE NG230 (2022): greyscale ultrasound graded with an established system (UK: BTA U1–U5) is the first diagnostic test and drives the need for ultrasound-guided FNA cytology.' },
        { h:'Risk factors', t:'Previous head/neck irradiation (especially in childhood), family history of thyroid cancer or syndromes (MEN2/medullary), age <20 or >65, male sex, and rapid growth increase malignancy risk in a nodule.' },
        { h:"Red flags and NICE NG12", t:"Red flags: rapidly enlarging or hard/fixed nodule, hoarseness/voice change (recurrent laryngeal nerve involvement), dysphagia/stridor, cervical lymphadenopathy. NICE NG12: consider a suspected cancer pathway referral for thyroid cancer in people with an unexplained thyroid lump — the lump alone meets the criterion; red flags or high-risk features (her neck radiotherapy and family history) make the referral clearly right. Stridor or breathing difficulty with a thyroid mass needs an immediate same-day specialist opinion (British Thyroid Association 2014)." },
        { h:'Investigate correctly', t:"TSH first: a SUPPRESSED TSH suggests a hyperfunctioning (\"hot\") nodule (lower malignancy risk) — consider radionuclide scan; a normal/high TSH with a nodule proceeds to ultrasound risk-stratification and FNA of suspicious nodules (NICE NG230), in the specialist thyroid or neck-lump clinic when the NICE NG12 criterion is met. Don’t substitute TFTs for imaging." },
        { h:'Balance & prognosis', t:'The majority of nodules are benign; differentiated thyroid cancer (papillary/follicular) generally has excellent outcomes when treated. Frame investigation as precautionary risk-stratification, not a diagnosis. NHS England Faster Diagnosis Standard: diagnosis or all-clear within 28 days of referral.' },
        { h:'Address survivor fear', t:'A previous cancer (here lymphoma with neck radiotherapy) makes a new lump acutely frightening and can drive avoidance ("the bloods are fine, leave it"). Surface and validate the fear; use the survivor\u2019s own knowledge that early detection gives the best outcome.' },
        { h:'Never do', t:'Never reassure a thyroid nodule on the basis of normal TFTs; never skip examination/ultrasound; never miss irradiation/family-history risk or voice/compressive red flags; never collude with avoidance driven by survivor fear; never catastrophise without the balancing reassurance.' },
        { h:'Safety-net & follow-up', t:"Examination + TSH; suspected cancer pathway referral for the unexplained thyroid lump (NICE NG12) for ultrasound (± FNA); stridor or breathing difficulty → same-day (BTA 2014); report new hoarseness, rapid growth, swallowing/breathing difficulty; confirm engagement; track and discuss the result." }
      ]
    }
  };

  /* ============ 103. TELEPHONE — Pre-diabetes (HbA1c 47): the fork in the road ============ */
  const c103 = {
    id:'prediabetes-fork', title:'"So I haven\u2019t got diabetes \u2014 I\u2019m fine then?"', type:'telephone', duration:12,
    meta:{ age:52, sex:'M', setting:'Telephone \u2014 a borderline HbA1c result.', system:'Endocrine / Pre-diabetes & prevention', checked:'October 2026' },
    brief:'Mr Wesley Grant, 52, taxi driver. HbA1c 47 mmol/mol (non-diabetic hyperglycaemia / pre-diabetes; diabetes \u226548). Done as part of an NHS Health Check. BMI 33, BP 146/90, father had type 2 diabetes and an early MI, sedentary job, takeaways most nights. He rings, relieved: "so it\u2019s not diabetes, I\u2019m fine?" and wants to "leave it and recheck next year". No symptoms. Meds: none.',
    script:{
      opening:'"Hiya doc \u2014 just ringing about that sugar blood test from my health check. The receptionist said it wasn\u2019t in the diabetes range, so that\u2019s a relief, I dodged it! So I\u2019m fine then, yeah? I\u2019ll just carry on and we recheck it next year or whenever. Cheers for letting me know \u2014 I was a bit worried with my dad having had it, but sounds like I\u2019m in the clear."',
      facts:[
        { topic:'What 47 actually means', text:'HbA1c 47 is non-diabetic hyperglycaemia (pre-diabetes; 42\u201347), NOT "the clear" \u2014 it is a fork in the road. A meaningful proportion progress to type 2 diabetes each year, but progression is PREVENTABLE: intensive lifestyle change (and referral to the Diabetes Prevention Programme) can substantially reduce risk, and some return to normal. "I\u2019m fine" is a missed-opportunity trap.' },
        { topic:'The whole cardiometabolic risk', text:'BMI 33, BP 146/90 (raised), strong family history (father T2DM + early MI), sedentary, poor diet \u2014 this is high cardiovascular risk, not just a sugar number. The consultation is an opportunity to address BP (a clinic reading of 146/90 needs ambulatory or home monitoring to confirm hypertension before any treatment decision — NICE NG136), weight, QRISK/lipids (NICE NG238) and lifestyle, not only the HbA1c.' },
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
      { dom:'ro', text:'Reframes HbA1c 47 accurately: NOT "the clear" but non-diabetic hyperglycaemia / pre-diabetes \u2014 a modifiable WARNING with real progression risk to type 2 diabetes that lifestyle change can substantially reduce (and sometimes reverse); avoids the "you\u2019re fine, recheck next year" trap' },
      { dom:'cm', text:'Refers to / recommends the NHS Diabetes Prevention Programme (or structured lifestyle support) and gives specific, realistic lifestyle advice (diet, weight loss, physical activity) tailored to a sedentary taxi driver' },
      { dom:'cm', text:'Treats the WHOLE cardiovascular risk, not just glucose: addresses raised BP (146/90 — NICE NG136: clinic BP 140/90 or more → offer ambulatory, or home, BP monitoring to confirm hypertension before treating), weight, QRISK/lipids and statin discussion (NICE NG238: offer atorvastatin 20 mg if the 10-year QRISK3 risk is 10% or more), smoking status, and family history \u2014 recognising this as high CVD risk' },
      { dom:'cm', text:'Sets a monitoring plan: at least annual HbA1c (NICE PH38; sooner if higher-risk), BP follow-up with ambulatory/home readings, and clear thresholds (HbA1c \u226548 = diabetes) \u2014 framing monitoring as part of an active prevention plan, not passive waiting' },
      { dom:'ro', text:'Converts the father-driven fear into motivation: frames pre-diabetes as the warning that lets him avoid his father\u2019s path, countering fatalism with genuine agency (the trajectory is changeable)' },
      { dom:'ro',   text:'Hears the relief-avoidance and the underlying fear/fatalism, and engages rather than colluding with "I\u2019m fine, leave it"; explores the taxi-driver practical barriers realistically' },
      { dom:'ro',   text:'Motivates without lecturing or shaming: builds the plan around his real day and his goal of not repeating his father\u2019s decline' },
      { dom:'cm',    text:'Safety-nets and follows up: one or two concrete first steps, DPP/structured-support referral, BP and recheck appointments, what symptoms would prompt earlier review, and a follow-up that keeps him engaged \u2014 prevention as an active plan' },
    ],
    worked:[
      { lbl:'Reframe “fine”',        txt:'"I\u2019m really glad you rang \u2014 and I want to be straight with you, because \u2018you\u2019re fine, dodged it\u2019 isn\u2019t quite the full picture. Your number, 47, isn\u2019t diabetes \u2014 but it\u2019s not the all-clear either. It\u2019s what we call pre-diabetes: a warning light on the dashboard. The brilliant thing is, a warning light is exactly what you WANT, because it means you can act before the engine trouble \u2014 and most people who act don\u2019t go on to develop diabetes."' },
      { lbl:'Turn dad into motivation', txt:'"You mentioned your dad. Can I be honest? I think watching him go through diabetes is part of why you\u2019d rather not think about this. But here\u2019s the flip: your dad probably never got a warning like this. You have. This is your chance to NOT follow his path \u2014 and that\u2019s genuinely in your hands, not just fate."' },
      { lbl:'The whole picture',    txt:'"And it\u2019s not just the sugar. Your blood pressure\u2019s up a bit and your weight\u2019s carrying some risk too \u2014 together those are about your heart as much as diabetes, which matters given your dad\u2019s heart attack. So this is one consultation that can protect a lot at once."' },
      { lbl:'Realistic for a driver', txt:'"I\u2019m not going to tell a man who drives all day to \u2018go to the gym and cook from scratch\u2019. Let\u2019s be real: swapping the nightly takeaway for something lighter a few nights a week, water instead of fizzy/energy drinks in the cab, a proper walk on your breaks, parking a bit further out. Small, repeatable. And there\u2019s a free NHS prevention programme I\u2019d love to refer you to \u2014 it\u2019s practical and made for exactly this."' },
      { lbl:'The plan + numbers',   txt:'"So: I\u2019ll refer you to that prevention programme, get your blood pressure checked properly with a 24-hour monitor or a week of home readings, because one reading in a clinic isn’t enough to decide, look at your heart risk and whether a statin would help, and we\u2019ll repeat the sugar in a few months \u2014 not \u2018next year and forget it\u2019. If it ever hit 48, that\u2019s the diabetes line, but the whole point is to push it the OTHER way. Most people can."' },
      { lbl:'Safety-net + engage',  txt:'"Pick ONE thing to start this week \u2014 say, the cab drinks \u2014 and we build from there. If you get the classic diabetes symptoms meanwhile \u2014 really thirsty, weeing loads, weight dropping \u2014 ring sooner. Come and see me to set this up properly. You called thinking you were in the clear; what you\u2019ve actually got is the best kind of warning \u2014 one you can still do something about."' },
    ],
    learning:'An HbA1c of 47 mmol/mol is non-diabetic hyperglycaemia (pre-diabetes), NOT "the all-clear" \u2014 it is a modifiable fork in the road with real progression risk to type 2 diabetes that intensive lifestyle change can substantially reduce (and sometimes reverse). The trap is the relief-driven "I\u2019m fine, leave it, recheck next year"; the task is to reframe it as a warning that can be acted on, refer to the NHS Diabetes Prevention Programme with realistic lifestyle advice tailored to the patient\u2019s actual life (here a sedentary taxi driver), and treat the WHOLE cardiometabolic risk — raised BP (146/90, confirmed by ambulatory or home monitoring before treatment — NICE NG136), weight, QRISK/lipids (NICE NG238), family history — not just the glucose number, with an active monitoring plan (NICE PH38: at least annual HbA1c; BP follow-up; the 48 = diabetes threshold). The examinable hidden agenda is that the relief masks fear and fatalism from watching his father decline and die early with diabetes; convert that into motivation ("this is the warning that lets you avoid his path"), build the plan around his real day without lecturing, and safety-net hyperglycaemic symptoms. Prevention framed as agency, not passive waiting.',
    knowledge:{
      guideline:'NICE PH38 Type 2 diabetes: prevention in people at high risk (2012, updated 2017) · NHS Diabetes Prevention Programme · NICE NG136 Hypertension in adults (2019) · NICE NG238 Cardiovascular disease: risk assessment and reduction (2023) · UK Chief Medical Officers’ physical activity guidelines (2019) · WHO HbA1c diagnostic threshold (2011; international)',
      points:[
        { h:'Define and reframe', t:'HbA1c 42–47 mmol/mol (or fasting glucose 5.5–6.9) = non-diabetic hyperglycaemia / "pre-diabetes" / high risk of type 2 diabetes (NICE PH38); ≥48 mmol/mol = diabetes (WHO 2011, international). Pre-diabetes is a modifiable risk state, not a diagnosis of "fine" \u2014 a significant proportion progress yearly, but progression is preventable.' },
        { h:'Prevention works', t:'Intensive lifestyle change (weight loss ~5–10%, dietary change, ≥150 min/week moderate activity — UK CMOs 2019) substantially reduces progression to type 2 diabetes; some revert to normoglycaemia. Refer to the NHS Diabetes Prevention Programme / structured lifestyle support (NICE PH38; face-to-face, remote and digital options). NICE PH38: consider metformin, using clinical judgement, when HbA1c or fasting glucose is worsening despite (or he cannot take part in) an intensive lifestyle programme, particularly with a BMI over 35 — not first-line here.' },
        { h:'Treat total cardiovascular risk', t:'Pre-diabetes clusters with obesity, hypertension and dyslipidaemia (metabolic syndrome) and raised CVD risk. Assess and manage BP, weight, lipids/QRISK (NICE NG238: offer atorvastatin 20 mg for primary prevention if the 10-year risk is 10% or more), smoking and family history — not just the glucose. Confirm the raised BP before treating: NICE NG136 — clinic BP 140/90 or more → offer ambulatory BP monitoring (home monitoring if ABPM is unsuitable or declined).' },
        { h:'Active monitoring, not passive waiting', t:'Re-test HbA1c at least annually (NICE PH38; sooner if higher risk or symptomatic); state the \u226548 diabetes threshold; frame monitoring as part of an active prevention plan with review, not "recheck next year and forget".' },
        { h:'Tailor to the person', t:'Make lifestyle advice realistic for the patient\u2019s life (e.g. a sedentary driver: cab drinks, break walks, takeaway swaps). Avoid idealised prescriptions that breed guilt and disengagement; agree one or two concrete first steps.' },
        { h:'Convert fear/fatalism to motivation', t:'Relief-avoidance and "it got my dad, it\u2019ll get me" fatalism are common. Reframe a family history of diabetes as the reason this warning is a GIFT \u2014 a chance to change the trajectory \u2014 giving agency rather than dismissal or doom.' },
        { h:'Never do', t:'Never call HbA1c 47 "fine/the clear"; never default to "recheck next year" without a prevention plan; never address only the glucose and miss BP/weight/CVD risk; never prescribe an idealised lifestyle that ignores the patient\u2019s job/reality; never leave the father-driven fear/fatalism unaddressed.' },
        { h:'Safety-net & follow-up', t:'DPP/structured-support referral; ambulatory or home BP monitoring (NICE NG136) and CVD-risk assessment (NICE NG238); HbA1c re-test interval and the 48 threshold; one or two concrete first steps; hyperglycaemic-symptom safety-net; an engaging follow-up.' }
      ]
    }
  };

  /* ============ 104. VIDEO — Raised calcium: the work-up before the worry ============ */
  const c104 = {
    "id": "hypercalcaemia-workup",
    "title": "“Another phone call about my bloods — just tell me straight. And I’m not having an operation.”",
    "type": "telephone",
    "duration": 12,
    "meta": {
      "age": 64,
      "sex": "M",
      "setting": "Telephone — to discuss the results of repeat blood tests.",
      "system": "Endocrine / Results — confirmed primary hyperparathyroidism: explanation, NICE NG132 referral criteria, medicines review and a fear of surgery after bereavement",
      "checked": "October 2026"
    },
    "brief": "Desmond Okoro, 64, retired bus driver, lives alone since his wife Grace died three years ago. Bloods taken for tiredness showed an albumin-adjusted calcium of 2.86 mmol/L, repeated at 2.88; PTH is 9.8 pmol/L (reference about 1.6–6.9), 25-hydroxyvitamin D 38 nmol/L, eGFR 72, phosphate low-normal, rest unremarkable. This is primary hyperparathyroidism. He had a kidney stone two years ago (A&E, passed spontaneously; nobody checked his calcium). He takes bendroflumethiazide and amlodipine for blood pressure, no lithium, and no supplements. On direct questioning: tired, thirsty, constipated, aching, “foggy” and low for months, which he put down to grief. He is calm on the phone until surgery is mentioned. His hidden concern: Grace died of sepsis after what was meant to be a “routine” bowel operation, and he has decided he will never have an operation. The task: confirm identity and that it is a good time; explain the result and the parathyroid gland in plain language; check symptoms and red flags; explain why he meets NICE NG132 criteria for referral to a specialist in parathyroid surgery (calcium of 2.85 mmol/L or above and a kidney stone); stop the thiazide and agree an alternative for his blood pressure; replace vitamin D; advise fluids; explore the fear of surgery with empathy, give honest information, respect his right to decide, and agree that he will at least see the specialist to hear the options (including monitoring or medical treatment if he declines surgery); screen his mood; and safety-net for symptoms of severe hypercalcaemia.",
    "script": {
      "opening": "“Hello. Another phone call about my bloods. Just tell me straight, doctor. And before you start, I’m not having an operation, whatever it is.”",
      "facts": [
        {
          "topic": "Identity and setting",
          "text": "Confirms name and date of birth. At home on his own, happy to talk."
        },
        {
          "topic": "Symptoms (if asked)",
          "text": "Tired for months, thirsty, up once or twice at night to wee, constipated, aching in his back and legs, “foggy”, forgetting things. Low and not enjoying much since Grace died. No vomiting, no confusion that others have noticed, no abdominal pain, no bone fractures. Weight steady."
        },
        {
          "topic": "Past history",
          "text": "Kidney stone two years ago: severe left loin pain, A&E, passed the stone, no follow-up. Hypertension for ten years."
        },
        {
          "topic": "Medicines",
          "text": "Bendroflumethiazide and amlodipine. No lithium, no calcium or vitamin D supplements, no antacids. Drinks little water: “tea, mostly”."
        },
        {
          "topic": "The fear (only if explored)",
          "text": "Grace went in for a “routine” bowel operation and died of sepsis a week later. “They said it was routine. I watched her die.” He has decided he will never have surgery."
        },
        {
          "topic": "Mood (only if asked directly)",
          "text": "Lonely, low most days, sleeps badly. Sees his daughter at weekends. No thoughts of ending his life: “Grace wouldn’t want that.”"
        },
        {
          "topic": "How to play it",
          "text": "Courteous but guarded. Firm “no” to surgery. Softens if the doctor asks why, listens to his story about Grace, and does not push. Agrees to see the specialist “just to listen” and to the medicine changes."
        }
      ],
      "ice": {
        "ideas": "“It’s probably my age, or the grief making me tired.”",
        "concerns": "HIDDEN AGENDA: his wife died after a ‘routine’ operation; he is terrified of surgery and of being pressured into it. Also feels foggy and worries it is dementia.",
        "expectations": "“Tell me what it is, give me a tablet if there is one, and leave it at that.”"
      },
      "cues": [
        "“I’m not having an operation, whatever it is” before anything has been said — a story behind it.",
        "Lives alone since his wife died — grief, mood and the meaning of surgery.",
        "A kidney stone two years ago — end-organ damage and a referral criterion.",
        "“Foggy” and tired — possible symptoms of hypercalcaemia, and a fear of dementia."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Confirms identity and privacy on the telephone, and asks what he already knows before explaining the results"
      },
      {
        "dom": "dg",
        "text": "Interprets the results: raised adjusted calcium on two occasions with an inappropriately raised PTH indicates primary hyperparathyroidism; checks symptoms, stone history, fractures and drugs (thiazide, lithium, supplements)"
      },
      {
        "dom": "dg",
        "text": "Screens for features of severe hypercalcaemia needing same-day care (vomiting, confusion, abdominal pain, dehydration, very high calcium)"
      },
      {
        "dom": "cm",
        "text": "Explains that he meets NICE NG132 criteria for referral to a specialist in parathyroid surgery (adjusted calcium 2.85 mmol/L or above and a previous renal stone), and what the specialist will do (exclude familial hypocalciuric hypercalcaemia, imaging, bone density, options)"
      },
      {
        "dom": "cm",
        "text": "Stops the thiazide (it reduces urinary calcium excretion) and agrees an alternative antihypertensive with a blood pressure check; offers vitamin D replacement for insufficiency; advises good fluid intake and not restricting dietary calcium"
      },
      {
        "dom": "ro",
        "text": "Explores the refusal of surgery, hears the bereavement story with empathy, gives honest information about parathyroid surgery, and respects his right to decide"
      },
      {
        "dom": "cm",
        "text": "Agrees a shared plan: referral to hear the options (including monitoring or medical treatment if he declines surgery), repeat bloods after the medicine changes, and mood support"
      },
      {
        "dom": "cm",
        "text": "Safety-nets clearly (vomiting, confusion, severe abdominal or loin pain, inability to keep fluids down) and arranges follow-up"
      }
    ],
    "worked": [
      {
        "lbl": "Ask before telling",
        "txt": "“Before I go through them, what have you been told about these blood tests so far?”"
      },
      {
        "lbl": "Plain explanation",
        "txt": "“Your calcium is a bit high on two tests, and the hormone that controls calcium, called PTH, is high too. That usually means one of four tiny glands in your neck, the parathyroids, has become overactive. It’s common, and it isn’t cancer.”"
      },
      {
        "lbl": "Explore the refusal",
        "txt": "“You said you won’t have an operation before I’d mentioned one. Would you tell me what’s behind that?”"
      },
      {
        "lbl": "Respond to grief",
        "txt": "“I’m so sorry about Grace. After that, it makes complete sense that the word ‘operation’ feels terrifying. Nobody will make you have one.”"
      },
      {
        "lbl": "Why referral",
        "txt": "“Your calcium level and the kidney stone two years ago mean the national guidance recommends you see a specialist. Seeing them doesn’t commit you to anything; they’ll explain the choices, including not operating.”"
      },
      {
        "lbl": "Things we can do now",
        "txt": "“One of your blood pressure tablets can raise calcium, so I’ll swap it. Your vitamin D is low, so I’ll replace it. And plenty of water, not just tea.”"
      }
    ],
    "learning": "Primary hyperparathyroidism is the commonest cause of hypercalcaemia in primary care: a raised albumin-adjusted calcium with a PTH that is raised or inappropriately normal. NICE NG132 (2019) advises measuring PTH when adjusted calcium is 2.6 mmol/L or above on two occasions (or 2.5 or above with suspected primary hyperparathyroidism), and not excluding the diagnosis if PTH is in the upper half of the normal range. Refer people with confirmed primary hyperparathyroidism to a specialist with expertise in parathyroid surgery if they have symptoms, end-organ disease (renal stones, fragility fractures or osteoporosis), or an albumin-adjusted calcium of 2.85 mmol/L or above. Parathyroidectomy is the only cure and has a high success rate; the specialist will exclude familial hypocalciuric hypercalcaemia (urine calcium), arrange imaging and assess bone density. For people who decline or are unsuitable for surgery, monitoring and, in some circumstances, cinacalcet are options. In primary care: review drugs (thiazides reduce urinary calcium excretion; lithium causes hyperparathyroidism; stop calcium and vitamin D supplements unless deficient), measure vitamin D and replace deficiency, advise good hydration, and do not restrict dietary calcium. Safety-net for severe hypercalcaemia (vomiting, confusion, abdominal pain, dehydration), which needs same-day care. Symptoms such as tiredness, thirst, constipation, aches, low mood and poor concentration may be due to hypercalcaemia and can be mistaken for grief or ageing. The communication skill is exploring a pre-emptive refusal: understanding the bereavement behind it, giving honest information, respecting autonomy, and agreeing a step he can accept, such as hearing the specialist’s options.",
    "knowledge": {
      "guideline": "[1] NICE NG132 Hyperparathyroidism (primary): diagnosis, assessment and initial management (2019) · [2] NICE NG136 Hypertension in adults: diagnosis and management (2019, updated 2026) · [3] NICE CKS Hypercalcaemia (check current version) · [4] NICE NG222 Depression in adults: treatment and management (2022) · [5] Product SPCs for bendroflumethiazide and vitamin D preparations · [6] GMC Decision making and consent (2020)",
      "summary": "Two raised calcium results with a raised PTH: primary hyperparathyroidism, with a previous kidney stone and calcium above 2.85 mmol/L, so NICE NG132 recommends referral to a parathyroid surgery specialist. He is on a thiazide and vitamin D insufficient. He refuses surgery because his wife died after a ‘routine’ operation. Explain, change the medicines, replace vitamin D, explore the fear, agree to hear the specialist’s options, check mood and safety-net.",
      "points": [
        {
          "h": "Diagnosis",
          "t": "Raised albumin-adjusted calcium on two occasions with raised or inappropriately normal PTH. Do not exclude PHPT if PTH is in the upper half of the reference range [1]."
        },
        {
          "h": "Symptoms",
          "t": "Often few. Tiredness, thirst, polyuria, constipation, aches, low mood and poor concentration; renal stones; fragility fractures."
        },
        {
          "h": "Referral criteria (NG132)",
          "t": "Refer to a specialist with expertise in parathyroid surgery if symptoms, end-organ disease (renal stones, fragility fractures, osteoporosis) or adjusted calcium of 2.85 mmol/L or above [1]."
        },
        {
          "h": "What the specialist does",
          "t": "Excludes familial hypocalciuric hypercalcaemia (urine calcium), localising imaging, bone density, renal imaging, and discusses parathyroidectomy versus monitoring or medical treatment such as cinacalcet if surgery is declined or unsuitable [1]."
        },
        {
          "h": "Medicines",
          "t": "Thiazides reduce urinary calcium excretion and can raise calcium; switch to an alternative antihypertensive in line with NG136 [2]. Ask about lithium and calcium or vitamin D supplements."
        },
        {
          "h": "Vitamin D and diet",
          "t": "Measure vitamin D and replace deficiency (check the SPC/local formulary). Do not restrict dietary calcium. Encourage good fluid intake [1]."
        },
        {
          "h": "Severe hypercalcaemia",
          "t": "Vomiting, confusion, drowsiness, abdominal pain, dehydration or very high calcium need same-day hospital assessment [3]."
        },
        {
          "h": "Consent and autonomy",
          "t": "A capacitous patient can decline surgery. Give balanced information and support his decision; seeing the specialist does not commit him [6]."
        }
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
        meds: ['Private "anxiety/sleep" tablet (dopamine-blocker), started ~8 months ago — just before periods stopped'],
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
        { t:'4–6',  h:"Red flags + NICE NG12",     d:"An unexplained thyroid lump alone meets the NICE NG12 criterion (consider a suspected cancer pathway referral) — her radiotherapy + family history make it clearly right. Ask: rapid growth, hard/fixed, hoarseness, dysphagia, nodes. Stridor → same day (BTA 2014). Tag NICE NG12." },
        { t:'6–9',  h:'Balance + survivor fear', d:'Most nodules benign, thyroid cancer usually very treatable — precautionary, not a verdict. Surface the lymphoma-driven fear.' },
        { t:'9–12', h:'Plan + safety-net',    d:'Examination + TSH; suspected cancer pathway referral for ultrasound (±FNA); report new hoarseness/rapid growth/swallowing/breathing trouble; track result.' }
      ],
      wordPics: {
        fail: 'Reassures from the normal TFTs and agrees to "leave it"; misses that euthyroid nodules can be cancer; ignores the radiotherapy/family-history risk and the red flags; never surfaces the survivor fear.',
        pass: "Corrects the TFT misconception, arranges examination and a suspected cancer pathway referral for ultrasound (NICE NG12: unexplained thyroid lump), weights risk factors, and safety-nets.",
        exc:  "Corrects the \"normal bloods = nothing\" misconception and weights the radiotherapy/family-history risk; screens red flags and applies the NICE NG12 thyroid-lump criterion; balances honesty with reassurance; surfaces the cancer-survivor fear and uses the patient’s own knowledge that early detection wins; and arranges ultrasound/referral with a compressive/voice safety-net."
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
        { t:'9–12', h:'Plan + numbers + net', d:'DPP referral, ambulatory/home BP to confirm 146/90 (NICE NG136), QRISK/statin (NICE NG238), HbA1c re-test in months and at least yearly (NICE PH38; 48 = diabetes); one first step; hyperglycaemia symptoms → sooner.' }
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
      "ceg": [
        "Investigations & results",
        "Long-term conditions & cancer"
      ],
      "stem": {
        "name": "Desmond Okoro",
        "age": "64 years · male",
        "pmh": [
          "Hypertension",
          "Renal colic two years ago (A&E attendance; stone passed)"
        ],
        "meds": [
          "Bendroflumethiazide",
          "Amlodipine"
        ],
        "allergy": "None recorded",
        "recent": "Adjusted calcium 2.86 mmol/L, repeat 2.88 mmol/L. PTH 9.8 pmol/L (ref 1.6–6.9). 25-OH vitamin D 38 nmol/L. eGFR 72. Phosphate low-normal. FBC and LFTs normal.",
        "reason": "Telephone appointment booked by the practice to discuss results."
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Identity and privacy. Note the refusal; say you’ll come back to it. What does he know?"
        },
        {
          "t": "1–4",
          "h": "Results and history",
          "d": "Plain explanation; symptoms; severe features; stone; drugs."
        },
        {
          "t": "4–7",
          "h": "The refusal",
          "d": "Ask why; Grace’s death; empathy; autonomy; mood and risk."
        },
        {
          "t": "7–11",
          "h": "Plan",
          "d": "NG132 referral to hear options; stop thiazide, alternative; vitamin D; fluids; bereavement support."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; repeat bloods; same-day safety-net."
        }
      ],
      "wordPics": {
        "fail": "Reads out numbers; misses the thiazide and the stone; tells him he needs an operation; or accepts the refusal without exploring it and does not refer.",
        "pass": "Explains primary hyperparathyroidism, recognises the referral criteria, stops the thiazide, replaces vitamin D and safety-nets.",
        "exc": "All of the above, plus: explores the refusal and responds to his bereavement with real empathy; reframes referral as hearing options without commitment; explains symptoms that may improve; screens mood and offers support; clear teach-back."
      },
      "avoid": [
        {
          "dont": "“You’ll need an operation to remove the gland.”",
          "instead": "“A specialist can explain the options, including not operating.”",
          "why": "Leading with surgery ends the conversation with a frightened patient."
        },
        {
          "dont": "“That’s fine, we’ll just keep an eye on it.”",
          "instead": "“Your level and the kidney stone mean the guidance recommends seeing a specialist; it doesn’t commit you.”",
          "why": "He meets NG132 referral criteria; not referring deprives him of an informed choice."
        },
        {
          "dont": "(Not reviewing medicines) leaving the thiazide.",
          "instead": "“One of your blood pressure tablets can raise calcium; I’ll switch it.”",
          "why": "Thiazides reduce urinary calcium excretion."
        }
      ]
    }
  });

})();
