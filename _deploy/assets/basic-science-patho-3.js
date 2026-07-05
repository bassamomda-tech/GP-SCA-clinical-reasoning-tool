/* Reasoning GP — Basic Science: PATHOPHYSIOLOGY (set 3: Endocrine + Renal + GI)
   Same schema as basic-science-patho.js. Educational reasoning aid. */
window.RGP_BASICSCIENCE = (window.RGP_BASICSCIENCE || []).concat([

/* ---------------- ENDOCRINE & METABOLIC ---------------- */
{ id:'patho-t1dm', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'🩸',
  title:'Type 1 diabetes & DKA', blurb:'Why absolute insulin loss drives hyperglycaemia and ketoacidosis.',
  mechanism:[
    'Autoimmune destruction of pancreatic **β-cells** causes absolute insulin deficiency. Without insulin, glucose cannot enter cells — blood glucose rises while tissues starve.',
    'Unopposed counter-regulatory hormones drive lipolysis; free fatty acids are converted to **ketones**, producing a metabolic acidosis (DKA).',
  ],
  cascade:[
    { step:'β-cell destruction', detail:'Absolute insulin deficiency' },
    { step:'Hyperglycaemia + osmotic diuresis', detail:'Polyuria, polydipsia, dehydration' },
    { step:'Ketogenesis', detail:'Ketoacidosis — vomiting, Kussmaul breathing, coma' },
  ],
  implications:[
    { clue:'Insulin is never stopped — even when not eating', why:'Stopping insulin in illness precipitates DKA; sick-day rules increase, not omit, insulin.' },
    { clue:'DKA needs fluids + insulin + potassium watch', why:'Insulin drives K⁺ into cells; total-body potassium is depleted despite a normal serum level.' },
    { clue:'New polyuria/weight loss in a child is diabetes until proven otherwise', why:'T1DM presents fast; delay risks DKA.' },
  ],
  pearls:[
    'Euglycaemic DKA can occur (pregnancy, SGLT2 inhibitors) — check ketones, not just glucose.',
    'C-peptide is low/absent (vs preserved in T2DM).',
  ],
  note:'No insulin means cells starve in a sea of glucose — and burn fat to ketones. That single deficiency explains hyperglycaemia, dehydration and acidosis together.',
  links:{ case:'cases/type-1-diabetes.html', caseLabel:'Type 1 diabetes case', algorithm:'tools/algorithms/unwell-diabetes-insulin.html', algorithmLabel:'Unwell on insulin pathway' } },

{ id:'patho-hyperthyroid', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'🦋',
  title:'Hyperthyroidism (Graves\u2019)', blurb:'How excess thyroid hormone accelerates every metabolic process.',
  mechanism:[
    'In **Graves\u2019 disease**, TSH-receptor antibodies stimulate the thyroid to overproduce T3/T4 — independent of pituitary control.',
    'Excess thyroid hormone up-regulates the basal metabolic rate and β-adrenergic sensitivity, accelerating heart rate, metabolism and gut transit.',
  ],
  cascade:[
    { step:'TSH-receptor antibody stimulation', detail:'Autonomous T3/T4 overproduction' },
    { step:'Hypermetabolic state', detail:'Weight loss, heat intolerance, tremor, tachycardia' },
    { step:'Suppressed TSH', detail:'Pituitary senses excess and shuts off TSH' },
  ],
  implications:[
    { clue:'Suppressed TSH with raised free T4 confirms it', why:'The negative-feedback loop means a low TSH is the most sensitive screen.' },
    { clue:'β-blockers give fast symptom relief', why:'They block the adrenergic over-sensitivity while antithyroid drugs take weeks.' },
    { clue:'AF and osteoporosis are downstream risks', why:'Sustained hypermetabolism strains the heart and bone.' },
  ],
  pearls:[
    'Eye signs (proptosis) point specifically to Graves\u2019, not other causes.',
    'Carbimazole carries an agranulocytosis risk — sore throat + fever needs an urgent FBC.',
  ],
  note:'Antibodies hijack the thyroid\u2019s accelerator, and the pituitary\u2019s brake (TSH) drops to zero in response — hence low TSH, high T4.',
  links:{ case:'cases/hyperthyroidism.html', caseLabel:'Hyperthyroidism case', algorithm:'tools/algorithms/hyperthyroidism.html', algorithmLabel:'Hyperthyroidism pathway' } },

{ id:'patho-addisons', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'🧂',
  title:'Adrenal insufficiency (Addison\u2019s)', blurb:'Why cortisol and aldosterone loss causes collapse, low sodium and pigmentation.',
  mechanism:[
    'Autoimmune destruction of the adrenal cortex removes **cortisol** (stress hormone) and **aldosterone** (salt-retaining hormone).',
    'Low cortisol removes negative feedback → pituitary ACTH (and its melanocyte-stimulating fragment) rises, causing skin pigmentation.',
  ],
  cascade:[
    { step:'Adrenal cortex destruction', detail:'Cortisol + aldosterone deficiency' },
    { step:'Salt loss + hypotension', detail:'Hyponatraemia, hyperkalaemia, fatigue' },
    { step:'ACTH rises', detail:'Hyperpigmentation; crisis under stress' },
  ],
  implications:[
    { clue:'Hyponatraemia + hyperkalaemia + hypotension is a red flag', why:'Aldosterone loss means sodium is wasted and potassium retained.' },
    { clue:'Stress (illness, surgery) needs steroid cover', why:'A failing adrenal cannot mount the cortisol surge demand requires — Addisonian crisis.' },
    { clue:'Never stop long-term steroids abruptly', why:'Suppressed adrenals cause iatrogenic insufficiency.' },
  ],
  pearls:[
    'Short Synacthen test confirms the diagnosis.',
    'Crisis = IV hydrocortisone + fluids before any test result.',
  ],
  note:'Lose cortisol and aldosterone together and the body cannot hold salt or handle stress — collapse, low Na⁺, high K⁺, and tanned skin from the ACTH backlash.',
  links:{ case:'cases/addisons-disease.html', caseLabel:'Addison\u2019s case', algorithm:'tools/algorithms/addisons-disease.html', algorithmLabel:'Addison\u2019s pathway' } },

{ id:'patho-cushings', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'🌕',
  title:'Cushing\u2019s syndrome', blurb:'How chronic cortisol excess reshapes metabolism, fat and blood pressure.',
  mechanism:[
    'Persistent **cortisol excess** — most often exogenous steroids, or a pituitary/adrenal/ectopic ACTH source — drives gluconeogenesis, protein catabolism and central fat deposition.',
    'Cortisol has weak mineralocorticoid action; in excess it raises BP and lowers potassium.',
  ],
  cascade:[
    { step:'Cortisol excess', detail:'Catabolic, hyperglycaemic, hypertensive state' },
    { step:'Fat redistribution + protein loss', detail:'Central obesity, moon face, thin skin, striae, proximal myopathy' },
    { step:'Metabolic effects', detail:'Diabetes, hypertension, osteoporosis, immunosuppression' },
  ],
  implications:[
    { clue:'Iatrogenic steroids are the commonest cause', why:'Always review the drug history before extensive endocrine work-up.' },
    { clue:'Overnight dexamethasone suppression test screens', why:'Normal axis suppresses cortisol; Cushing\u2019s fails to.' },
    { clue:'Easy bruising + proximal weakness are specific clues', why:'Protein catabolism weakens skin, vessels and muscle.' },
  ],
  pearls:[
    'Simple obesity rarely causes proximal myopathy or thin skin — those point to Cushing\u2019s.',
    'Treat the source; taper exogenous steroids carefully.',
  ],
  note:'Too much cortisol turns the body catabolic everywhere except the trunk — muscle and skin waste while central fat, glucose and BP climb.',
  links:{} },

{ id:'patho-hypercalcaemia', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'🦴',
  title:'Hypercalcaemia & hyperparathyroidism', blurb:'Why high calcium causes \u201cstones, bones, groans and moans\u201d.',
  mechanism:[
    'Primary **hyperparathyroidism** (usually a parathyroid adenoma) secretes PTH autonomously → bone resorption, renal calcium reabsorption and vitamin-D activation all raise serum calcium.',
    'Malignancy is the other major cause (PTH-related peptide, or bone metastases).',
  ],
  cascade:[
    { step:'Excess PTH or PTHrP', detail:'Calcium mobilised from bone + retained by kidney' },
    { step:'Hypercalcaemia', detail:'Polyuria, constipation, confusion, renal stones' },
    { step:'End-organ effects', detail:'Osteoporosis, nephrocalcinosis, short QT' },
  ],
  implications:[
    { clue:'Check PTH with the calcium', why:'Raised/inappropriately normal PTH = hyperparathyroidism; suppressed PTH points to malignancy.' },
    { clue:'Severe hypercalcaemia is an emergency', why:'Dehydration and arrhythmia risk — IV fluids first.' },
    { clue:'New hypercalcaemia in a smoker/weight loss prompts a cancer search', why:'PTHrP or bony metastases.' },
  ],
  pearls:[
    'Thiazides and lithium raise calcium — review the drug chart.',
    '\u201cStones, bones, abdominal groans, psychic moans.\u201d',
  ],
  note:'PTH (or a tumour mimicking it) pulls calcium out of bone and holds it in the kidney — every symptom flows from a calcium the body can no longer regulate.',
  links:{ case:'cases/hypercalcaemia.html', caseLabel:'Hypercalcaemia case', algorithm:'tools/algorithms/hypercalcaemia.html', algorithmLabel:'Hypercalcaemia pathway' } },

{ id:'patho-pcos', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'⚖️',
  title:'Polycystic ovary syndrome', blurb:'How insulin resistance and androgen excess disrupt ovulation.',
  mechanism:[
    '**Insulin resistance** drives hyperinsulinaemia, which stimulates ovarian androgen production and lowers sex-hormone-binding globulin — raising free testosterone.',
    'Excess androgens disrupt the LH/FSH balance, arresting follicles before ovulation (the \u201cpolycystic\u201d appearance) and causing irregular or absent periods.',
  ],
  cascade:[
    { step:'Insulin resistance', detail:'Hyperinsulinaemia' },
    { step:'Ovarian androgen excess', detail:'Hirsutism, acne, raised free testosterone' },
    { step:'Anovulation', detail:'Oligomenorrhoea, subfertility, cysts on scan' },
  ],
  implications:[
    { clue:'Rotterdam criteria — 2 of 3', why:'Oligo/anovulation, clinical/biochemical androgen excess, polycystic ovaries.' },
    { clue:'Weight loss is first-line', why:'Reducing insulin resistance restores ovulation and lowers androgens.' },
    { clue:'Unopposed oestrogen raises endometrial cancer risk', why:'Anovulation means no progesterone; induce withdrawal bleeds.' },
  ],
  pearls:[
    'Metformin helps the metabolic component; the COCP regulates cycles and androgens.',
    'Screen for type 2 diabetes — they share insulin resistance.',
  ],
  note:'PCOS is really a metabolic disorder wearing a gynaecological mask: insulin resistance is the engine that drives the androgens and the anovulation.',
  links:{ case:'cases/pcos.html', caseLabel:'PCOS case', algorithm:'tools/algorithms/hirsutism.html', algorithmLabel:'Hirsutism pathway' } },

{ id:'patho-vitd', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'☀️',
  title:'Vitamin D deficiency & osteomalacia', blurb:'Why low vitamin D weakens bone and disturbs calcium.',
  mechanism:[
    'Vitamin D (from sunlight/diet) is needed to absorb dietary **calcium and phosphate**. Deficiency lowers calcium absorption.',
    'The body compensates with **secondary hyperparathyroidism** — PTH rises to maintain calcium by stripping bone, leaving under-mineralised, soft bone (osteomalacia; rickets in children).',
  ],
  cascade:[
    { step:'Low vitamin D', detail:'Reduced calcium/phosphate absorption' },
    { step:'Secondary hyperparathyroidism', detail:'PTH rises, mobilises bone calcium' },
    { step:'Defective mineralisation', detail:'Bone pain, proximal myopathy, fractures' },
  ],
  implications:[
    { clue:'Bone pain + proximal weakness are classic', why:'Soft bone and impaired muscle calcium handling.' },
    { clue:'Check calcium, phosphate, ALP, PTH', why:'Low/normal Ca, low PO₄, high ALP, high PTH is the osteomalacia picture.' },
    { clue:'At-risk groups need replacement', why:'Limited sun exposure, dark skin, malabsorption, the housebound.' },
  ],
  pearls:[
    'Correct deficiency before assessing osteoporosis treatment.',
    'Rickets in children: bowed legs, widened metaphyses.',
  ],
  note:'No vitamin D means no calcium absorption — so PTH robs the skeleton to keep blood calcium up, and bone is left soft.',
  links:{ algorithm:'tools/algorithms/vitamin-d-deficiency.html', algorithmLabel:'Vitamin D deficiency pathway' } },

{ id:'patho-b12', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'🧬',
  title:'B12 & folate deficiency', blurb:'Why deficiency causes large red cells and neurological damage.',
  mechanism:[
    'B12 and folate are cofactors for **DNA synthesis**. Without them, red-cell precursors cannot divide normally — producing large, fragile **megaloblastic** cells.',
    'B12 additionally maintains the myelin sheath; deficiency causes **subacute combined degeneration** of the cord.',
  ],
  cascade:[
    { step:'Impaired DNA synthesis', detail:'Megaloblastic, macrocytic anaemia' },
    { step:'Ineffective erythropoiesis', detail:'Fatigue, glossitis, mild jaundice' },
    { step:'B12: demyelination', detail:'Peripheral neuropathy, ataxia, cognitive change' },
  ],
  implications:[
    { clue:'Treat B12 before (or with) folate', why:'Giving folate alone in B12 deficiency can precipitate/worsen neurological damage.' },
    { clue:'Pernicious anaemia is the classic cause', why:'Autoimmune loss of intrinsic factor blocks B12 absorption.' },
    { clue:'Neurology can occur without anaemia', why:'Nerve damage may precede the haematological change.' },
  ],
  pearls:[
    'Macrocytosis without deficiency: alcohol, hypothyroidism, drugs.',
    'Metformin and PPIs lower B12 over time.',
  ],
  note:'No B12/folate, no DNA — cells grow but can\u2019t divide (big cells), and B12\u2019s separate myelin role means deficiency can cripple nerves as well as marrow.',
  links:{ algorithm:'tools/algorithms/vitamin-b12-deficiency.html', algorithmLabel:'B12 deficiency pathway' } },

{ id:'patho-obesity', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'⚖️',
  title:'Obesity & metabolic syndrome', blurb:'How excess adiposity drives insulin resistance and cardiovascular risk.',
  mechanism:[
    'Excess energy stored as **visceral fat** releases free fatty acids and inflammatory cytokines that impair insulin signalling — causing insulin resistance.',
    'Adipose tissue is endocrine: it disrupts appetite hormones (leptin resistance), raises BP, and shifts lipids toward an atherogenic pattern.',
  ],
  cascade:[
    { step:'Positive energy balance', detail:'Visceral fat accumulation' },
    { step:'Insulin resistance + inflammation', detail:'Hyperglycaemia, dyslipidaemia, hypertension' },
    { step:'Metabolic syndrome', detail:'Clustered cardiovascular & diabetes risk' },
  ],
  implications:[
    { clue:'Modest weight loss has outsized benefit', why:'5–10% loss markedly improves glycaemia, BP and lipids.' },
    { clue:'Screen for the cluster', why:'Obesity rarely travels alone — check glucose, lipids, BP.' },
    { clue:'Address drivers, not just willpower', why:'Sleep, mental health, medication and deprivation all feed weight gain.' },
  ],
  pearls:[
    'Visceral (central) fat is more metabolically harmful than subcutaneous.',
    'GLP-1 agonists target appetite and weight directly.',
  ],
  note:'Fat is an active organ — in excess it inflames, resists insulin and raises BP, which is why obesity sits upstream of diabetes and vascular disease.',
  links:{ case:'cases/obesity.html', caseLabel:'Obesity case' } },

{ id:'patho-hyponatraemia', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'💧',
  title:'Hyponatraemia & SIADH', blurb:'Why low sodium is usually a water problem, not a salt problem.',
  mechanism:[
    'Sodium concentration reflects the **ratio of sodium to water**. Most hyponatraemia is dilutional — too much water retained, often via inappropriate **ADH** secretion (SIADH).',
    'In SIADH, ADH is released despite normal/low osmolality — the kidney retains water, diluting sodium.',
  ],
  cascade:[
    { step:'Excess ADH (or water intake)', detail:'Water retained out of proportion to sodium' },
    { step:'Dilutional hyponatraemia', detail:'Nausea, confusion, falls; seizures if severe/rapid' },
    { step:'Cerebral oedema risk', detail:'Water shifts into brain cells' },
  ],
  implications:[
    { clue:'Assess volume status first', why:'Hypovolaemic, euvolaemic (SIADH) and hypervolaemic causes are managed differently.' },
    { clue:'Correct slowly', why:'Rapid correction risks osmotic demyelination.' },
    { clue:'SIADH causes: drugs, lung & CNS disease, malignancy', why:'Find and treat the trigger.' },
  ],
  pearls:[
    'Check paired serum + urine osmolality and urine sodium to classify.',
    'SSRIs and thiazides are common drug causes.',
  ],
  note:'Sodium tells you about water balance — in SIADH the body holds water it doesn\u2019t need, and the sodium simply looks low by dilution.',
  links:{ case:'cases/hyponatraemia.html', caseLabel:'Hyponatraemia case', algorithm:'tools/algorithms/hyponatraemia.html', algorithmLabel:'Hyponatraemia pathway' } },

/* ---------------- RENAL & UROLOGY ---------------- */
{ id:'patho-aki', domain:'Pathophysiology', system:'Renal', icon:'🫘',
  title:'Acute kidney injury', blurb:'The pre-renal, renal and post-renal logic of a rising creatinine.',
  mechanism:[
    'AKI is a sudden fall in filtration, classified by site: **pre-renal** (reduced perfusion — dehydration, sepsis, drugs), **intrinsic** (tubular/glomerular damage) or **post-renal** (obstruction).',
    'Reduced filtration means waste (urea, creatinine, potassium, acid) accumulates and fluid balance is lost.',
  ],
  cascade:[
    { step:'Insult to perfusion/parenchyma/outflow', detail:'Falling GFR' },
    { step:'Retention', detail:'Rising creatinine, K⁺, acidosis, fluid overload' },
    { step:'Recovery or progression', detail:'Reversible if cause corrected early' },
  ],
  implications:[
    { clue:'Stop nephrotoxic & sick-day drugs', why:'ACEi/ARB, NSAIDs, diuretics, metformin worsen or accumulate in AKI.' },
    { clue:'Exclude obstruction', why:'A blocked, distended bladder is a quickly reversible cause — feel/scan it.' },
    { clue:'Hyperkalaemia is the urgent threat', why:'Reduced excretion risks fatal arrhythmia — ECG + treat.' },
  ],
  pearls:[
    'Most community AKI is pre-renal — fluids and drug review fix it.',
    'Track urine output as well as creatinine.',
  ],
  note:'Ask where the problem is — before, in, or after the kidney — and the cause (and the fix) usually follows.',
  links:{ case:'cases/aki.html', caseLabel:'AKI case', algorithm:'tools/algorithms/aki.html', algorithmLabel:'AKI pathway' } },

{ id:'patho-nephrotic', domain:'Pathophysiology', system:'Renal', icon:'🫘',
  title:'Nephrotic syndrome', blurb:'Why a leaky glomerulus causes heavy proteinuria, oedema and clots.',
  mechanism:[
    'Damage to the glomerular **filtration barrier** lets large amounts of protein (especially albumin) escape into urine — heavy proteinuria.',
    'Falling serum albumin lowers oncotic pressure → oedema; the liver compensates by making lipids (hyperlipidaemia), and clotting factors shift toward **thrombosis**.',
  ],
  cascade:[
    { step:'Glomerular barrier damage', detail:'Proteinuria >3.5 g/day' },
    { step:'Hypoalbuminaemia', detail:'Oedema (periorbital, peripheral)' },
    { step:'Secondary effects', detail:'Hyperlipidaemia, hypercoagulability, infection risk' },
  ],
  implications:[
    { clue:'Triad: proteinuria, hypoalbuminaemia, oedema', why:'The leak explains all three.' },
    { clue:'Thrombosis risk is real', why:'Urinary loss of antithrombin and a procoagulant shift.' },
    { clue:'Refer for cause + biopsy', why:'Minimal change, membranous, diabetic and amyloid differ in treatment.' },
  ],
  pearls:[
    'Nephrotic = protein leak; nephritic = blood + hypertension.',
    'Frothy urine is a useful clue to proteinuria.',
  ],
  note:'One leaky barrier loses albumin — and from that single fact flow the oedema, the lipids and the clotting risk.',
  links:{} },

{ id:'patho-nephritic', domain:'Pathophysiology', system:'Renal', icon:'🫘',
  title:'Nephritic syndrome / glomerulonephritis', blurb:'Why glomerular inflammation causes blood in urine and hypertension.',
  mechanism:[
    'Immune-mediated **inflammation of the glomerulus** breaches the barrier — red cells leak into urine (haematuria, red-cell casts) with modest proteinuria.',
    'Inflammation reduces filtration and activates sodium retention → hypertension and oedema.',
  ],
  cascade:[
    { step:'Glomerular inflammation', detail:'Haematuria + red-cell casts' },
    { step:'Reduced GFR + Na retention', detail:'Hypertension, oedema, rising creatinine' },
    { step:'Variable progression', detail:'From self-limiting to rapidly progressive' },
  ],
  implications:[
    { clue:'Visible/persistent haematuria + hypertension + AKI is nephritic', why:'Different work-up and urgency than isolated haematuria.' },
    { clue:'Post-streptococcal forms follow infection', why:'Immune-complex deposition ~1–2 weeks after a throat/skin infection.' },
    { clue:'Refer urgently if renal function falls', why:'Rapidly progressive GN needs prompt immunosuppression.' },
  ],
  pearls:[
    'IgA nephropathy: haematuria during/just after a URTI.',
    'Red-cell casts localise bleeding to the glomerulus.',
  ],
  note:'Inflame the glomerulus and it both bleeds and clogs — hence blood in the urine alongside rising BP and creatinine.',
  links:{} },

{ id:'patho-uti', domain:'Pathophysiology', system:'Renal', icon:'🦠',
  title:'UTI & pyelonephritis', blurb:'How bacteria ascend the tract and when infection becomes dangerous.',
  mechanism:[
    'Uropathogens (usually **E. coli**) ascend from the perineum into the bladder, adhering to and inflaming the urothelium — causing dysuria, frequency and urgency.',
    'If organisms ascend the ureters to the kidney, **pyelonephritis** develops, with systemic sepsis risk.',
  ],
  cascade:[
    { step:'Bacterial ascent + adhesion', detail:'Lower UTI — dysuria, frequency' },
    { step:'Tissue invasion', detail:'Upper UTI — fever, loin pain, rigors' },
    { step:'Systemic spread', detail:'Urosepsis' },
  ],
  implications:[
    { clue:'Loin pain + fever = upper tract', why:'Pyelonephritis needs longer/parenteral antibiotics and possible admission.' },
    { clue:'Short female urethra explains higher incidence', why:'Anatomical proximity eases ascent.' },
    { clue:'Recurrent/atypical UTI in men or with haematuria warrants investigation', why:'Obstruction, stones or malignancy may underlie it.' },
  ],
  pearls:[
    'Asymptomatic bacteriuria is usually not treated (except pregnancy).',
    'New confusion in the elderly can be the only UTI sign — but exclude other causes.',
  ],
  note:'Most UTIs are simply gut bacteria climbing the urinary tract; danger rises the higher they reach.',
  links:{ case:'cases/uti-women.html', caseLabel:'UTI case', algorithm:'tools/algorithms/recurrent-uti.html', algorithmLabel:'Recurrent UTI pathway' } },

{ id:'patho-renal-stones', domain:'Pathophysiology', system:'Renal', icon:'🪨',
  title:'Renal & ureteric stones', blurb:'Why a crystallising stone causes excruciating colic.',
  mechanism:[
    'Supersaturated urine (dehydration, hypercalciuria, hyperuricaemia) lets crystals precipitate and aggregate into **stones**, usually calcium oxalate.',
    'A stone migrating into the ureter obstructs flow; the ureter spasms against it — generating severe, colicky loin-to-groin pain.',
  ],
  cascade:[
    { step:'Urinary supersaturation', detail:'Crystal nucleation and stone growth' },
    { step:'Ureteric obstruction', detail:'Loin-to-groin colic, haematuria, vomiting' },
    { step:'Risk of obstructed infected kidney', detail:'Surgical emergency if febrile' },
  ],
  implications:[
    { clue:'CT KUB is the diagnostic test', why:'Detects nearly all stones and their size/site.' },
    { clue:'Fever + obstruction is an emergency', why:'An infected, obstructed kidney needs urgent decompression.' },
    { clue:'Hydration + dietary advice prevents recurrence', why:'Dilute urine resists crystallisation.' },
  ],
  pearls:[
    'NSAIDs are first-line analgesia in colic.',
    'Stones <5 mm usually pass spontaneously.',
  ],
  note:'A stone is crystallised urine; the agony is the ureter fighting an obstruction it cannot move.',
  links:{ algorithm:'tools/algorithms/renal-colic.html', algorithmLabel:'Renal colic pathway' } },

{ id:'patho-bph', domain:'Pathophysiology', system:'Renal', icon:'🚹',
  title:'Benign prostatic hyperplasia', blurb:'How prostate growth obstructs the bladder outlet.',
  mechanism:[
    'Age- and androgen-driven **hyperplasia** of the periurethral prostate compresses the urethra, obstructing bladder outflow.',
    'The bladder hypertrophies to push against resistance, then becomes irritable (storage symptoms) and eventually fails to empty.',
  ],
  cascade:[
    { step:'Prostate enlargement', detail:'Urethral compression' },
    { step:'Outflow obstruction', detail:'Hesitancy, weak stream, incomplete emptying' },
    { step:'Bladder dysfunction', detail:'Frequency, urgency, nocturia; retention' },
  ],
  implications:[
    { clue:'α-blockers relax, 5α-reductase inhibitors shrink', why:'Tamsulosin relaxes smooth muscle fast; finasteride reduces gland size over months.' },
    { clue:'Acute retention is painful and needs catheterisation', why:'Sudden complete obstruction.' },
    { clue:'Exclude cancer and assess severity', why:'PSA, DRE and symptom score guide management.' },
  ],
  pearls:[
    'Check renal function — chronic retention can cause obstructive AKI.',
    'Anticholinergics and decongestants can precipitate retention.',
  ],
  note:'A bigger prostate squeezes the urethra; the bladder first fights back, then gives up — the storage and voiding symptoms map directly onto that struggle.',
  links:{} },

{ id:'patho-diabetic-nephropathy', domain:'Pathophysiology', system:'Renal', icon:'🫘',
  title:'Diabetic nephropathy', blurb:'Why chronic hyperglycaemia silently destroys the glomerulus.',
  mechanism:[
    'Chronic hyperglycaemia and glomerular **hyperfiltration** damage the filtration barrier and thicken the basement membrane — letting albumin leak.',
    'Progressive scarring (glomerulosclerosis) reduces GFR over years; the kidney is also exposed to the same hypertension that accelerates damage.',
  ],
  cascade:[
    { step:'Hyperglycaemia + hyperfiltration', detail:'Glomerular stress' },
    { step:'Microalbuminuria', detail:'Earliest detectable marker' },
    { step:'Proteinuria → falling GFR', detail:'Progressive CKD' },
  ],
  implications:[
    { clue:'Screen with urine ACR annually', why:'Microalbuminuria is reversible-stage disease — catch it early.' },
    { clue:'ACEi/ARB are renoprotective', why:'Lowering intraglomerular pressure slows progression even at the same BP.' },
    { clue:'SGLT2 inhibitors slow decline', why:'Reduce hyperfiltration and proteinuria independently of glucose.' },
  ],
  pearls:[
    'Tight glucose + BP control is the core prevention.',
    'It is a leading cause of end-stage renal disease.',
  ],
  note:'Years of high glucose make the glomerulus overwork and leak — first albumin, then function. The earliest leak (microalbuminuria) is the window to intervene.',
  links:{ case:'cases/ckd.html', caseLabel:'CKD case' } },

{ id:'patho-hyperkalaemia', domain:'Pathophysiology', system:'Renal', icon:'⚡',
  title:'Hyperkalaemia', blurb:'Why high potassium is an electrical emergency for the heart.',
  mechanism:[
    'Potassium is mostly intracellular; serum levels rise from **reduced excretion** (AKI/CKD, low aldosterone, drugs) or **shift out of cells** (acidosis, tissue breakdown).',
    'High extracellular K⁺ destabilises cardiac myocyte membranes — slowing conduction toward fatal arrhythmia.',
  ],
  cascade:[
    { step:'Retention or cellular shift', detail:'Rising serum K⁺' },
    { step:'Membrane instability', detail:'Peaked T waves → widened QRS → sine wave' },
    { step:'Arrhythmia/arrest', detail:'VF or asystole if untreated' },
  ],
  implications:[
    { clue:'ECG first, then treat', why:'ECG change dictates urgency more than the absolute number.' },
    { clue:'Calcium gluconate stabilises the myocardium', why:'Buys time; insulin/dextrose and salbutamol then shift K⁺ into cells.' },
    { clue:'Review the drug chart', why:'ACEi/ARB, MRAs, NSAIDs, trimethoprim and supplements all raise K⁺.' },
  ],
  pearls:[
    'Haemolysed samples cause spurious results — repeat if unexpected.',
    'Calcium protects the heart but doesn\u2019t lower potassium.',
  ],
  note:'Potassium runs the heart\u2019s electrics; too much outside the cell scrambles conduction, which is why a number on a form can be a true emergency.',
  links:{ algorithm:'tools/algorithms/hyperkalaemia.html', algorithmLabel:'Hyperkalaemia pathway' } },

/* ---------------- GASTROINTESTINAL ---------------- */
{ id:'patho-coeliac', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🌾',
  title:'Coeliac disease', blurb:'Why gluten triggers an immune attack that flattens the gut lining.',
  mechanism:[
    'In genetically susceptible people, **gluten** triggers a T-cell immune response against the small-bowel mucosa, causing **villous atrophy**.',
    'Loss of villi reduces absorptive surface → malabsorption of iron, folate, calcium and fat.',
  ],
  cascade:[
    { step:'Gluten exposure', detail:'Immune-mediated mucosal damage' },
    { step:'Villous atrophy', detail:'Malabsorption — anaemia, weight loss, diarrhoea, bloating' },
    { step:'Deficiency states', detail:'Iron/folate deficiency, osteoporosis' },
  ],
  implications:[
    { clue:'Test on a gluten-containing diet', why:'tTG-IgA falls on a gluten-free diet, causing false negatives.' },
    { clue:'Check IgA level alongside', why:'IgA deficiency causes false-negative tTG-IgA.' },
    { clue:'Lifelong gluten-free diet heals the gut', why:'Removing the trigger reverses villous atrophy.' },
  ],
  pearls:[
    'Consider in unexplained iron-deficiency anaemia or IBS-like symptoms.',
    'Associated with type 1 diabetes and autoimmune thyroid disease.',
  ],
  note:'Coeliac is an immune reaction to gluten that sands down the absorptive villi — so the consequences are the deficiencies of a gut that can no longer absorb.',
  links:{ case:'cases/coeliac.html', caseLabel:'Coeliac case' } },

{ id:'patho-ibd', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🔥',
  title:'Inflammatory bowel disease', blurb:'How Crohn\u2019s and ulcerative colitis differ in pattern and depth.',
  mechanism:[
    'Dysregulated mucosal immunity drives chronic bowel inflammation. **Crohn\u2019s** is transmural and patchy (\u201cskip lesions\u201d) anywhere mouth-to-anus; **UC** is continuous, mucosal, and confined to the colon.',
    'Transmural Crohn\u2019s inflammation explains strictures, fistulae and abscesses; mucosal UC explains bloody diarrhoea and a continuous friable colon.',
  ],
  cascade:[
    { step:'Immune dysregulation', detail:'Chronic relapsing inflammation' },
    { step:'Pattern diverges', detail:'Crohn\u2019s: transmural, patchy; UC: mucosal, continuous' },
    { step:'Complications', detail:'Crohn\u2019s: fistula/stricture; UC: toxic megacolon, cancer risk' },
  ],
  implications:[
    { clue:'Faecal calprotectin flags bowel inflammation', why:'Distinguishes IBD from IBS and triggers referral.' },
    { clue:'Bloody diarrhoea points to UC', why:'Mucosal ulceration of the colon.' },
    { clue:'Acute severe colitis is an emergency', why:'Risk of toxic megacolon and perforation.' },
  ],
  pearls:[
    'Smoking worsens Crohn\u2019s but (oddly) is protective in UC.',
    'Both carry extra-intestinal features (joints, eyes, skin) and colorectal-cancer surveillance needs.',
  ],
  note:'Depth and distribution separate them: Crohn\u2019s burrows through the whole wall anywhere; UC inflames the colonic surface continuously.',
  links:{ case:'cases/crohns.html', caseLabel:'Crohn\u2019s case', algorithm:'tools/algorithms/ulcerative-colitis-flare.html', algorithmLabel:'UC flare pathway' } },

{ id:'patho-gallstones', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🟡',
  title:'Gallstones & biliary colic', blurb:'Why stones form and how they cause pain, cholecystitis and jaundice.',
  mechanism:[
    'Cholesterol-supersaturated bile crystallises into **gallstones**. A stone obstructing the cystic duct after a fatty meal causes the gallbladder to contract against blockage — biliary colic.',
    'Persistent obstruction inflames the gallbladder (cholecystitis); a stone in the common bile duct blocks bile flow (obstructive jaundice) or the pancreatic duct (gallstone pancreatitis).',
  ],
  cascade:[
    { step:'Bile supersaturation', detail:'Stone formation' },
    { step:'Cystic duct obstruction', detail:'Post-prandial RUQ pain (biliary colic)' },
    { step:'Complications', detail:'Cholecystitis, CBD stone → jaundice/cholangitis, pancreatitis' },
  ],
  implications:[
    { clue:'Colic is intermittent; cholecystitis adds fever + tenderness', why:'Obstruction alone vs established inflammation.' },
    { clue:'Jaundice means the duct, not just the gallbladder', why:'A CBD stone blocks bile drainage.' },
    { clue:'Fat triggers symptoms', why:'CCK-driven gallbladder contraction against a stone.' },
  ],
  pearls:[
    'Fair, fat, female, forty, fertile — risk factors, not rules.',
    'Charcot\u2019s triad (pain, fever, jaundice) signals cholangitis — an emergency.',
  ],
  note:'A stone\u2019s symptoms depend entirely on which duct it blocks — gallbladder neck (colic), inflamed gallbladder (cholecystitis), or bile duct (jaundice).',
  links:{ algorithm:'tools/algorithms/biliary-colic.html', algorithmLabel:'Biliary colic pathway' } },

{ id:'patho-pancreatitis', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🔥',
  title:'Acute pancreatitis', blurb:'Why the pancreas digests itself — and why it can be life-threatening.',
  mechanism:[
    'A trigger (gallstones, alcohol) causes premature activation of digestive **enzymes inside the pancreas**, which begin to autodigest the gland — intense inflammation.',
    'Inflammatory mediators spill systemically, causing third-space fluid loss, shock and organ failure in severe cases.',
  ],
  cascade:[
    { step:'Intrapancreatic enzyme activation', detail:'Autodigestion + inflammation' },
    { step:'Severe epigastric pain', detail:'Radiating to back, vomiting, raised amylase/lipase' },
    { step:'Systemic inflammatory response', detail:'Fluid loss, hypocalcaemia, organ failure' },
  ],
  implications:[
    { clue:'Gallstones and alcohol cause most cases', why:'\u201cI GET SMASHED\u201d mnemonic — but these two dominate.' },
    { clue:'Aggressive fluid resuscitation is key', why:'Massive third-space loss drives shock.' },
    { clue:'Severity scoring guides care', why:'Necrosis and organ failure mark severe disease needing critical care.' },
  ],
  pearls:[
    'Lipase is more specific than amylase.',
    'Hypocalcaemia occurs as calcium is consumed in fat saponification.',
  ],
  note:'Enzymes meant for the gut switch on too early and digest the pancreas itself — and the inflammatory spillover is what makes severe cases dangerous.',
  links:{} },

{ id:'patho-cld', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🫛',
  title:'Chronic liver disease & cirrhosis', blurb:'How scarring turns into portal hypertension and liver failure.',
  mechanism:[
    'Chronic injury (alcohol, fatty liver, viral hepatitis) drives **fibrosis**; architecture is replaced by regenerative nodules and scar — cirrhosis.',
    'Scarring obstructs portal blood flow (**portal hypertension** → varices, ascites, splenomegaly) and loss of hepatocyte mass impairs synthesis and detoxification.',
  ],
  cascade:[
    { step:'Chronic injury → fibrosis', detail:'Progressive scarring' },
    { step:'Portal hypertension', detail:'Varices, ascites, splenomegaly' },
    { step:'Synthetic failure', detail:'Coagulopathy, low albumin, jaundice, encephalopathy' },
  ],
  implications:[
    { clue:'Varices can bleed catastrophically', why:'Portal pressure forces blood through fragile collateral veins.' },
    { clue:'Failing synthesis shows in clotting and albumin', why:'The liver makes clotting factors and albumin.' },
    { clue:'Encephalopathy reflects lost detoxification', why:'Ammonia and toxins bypass/overwhelm the liver.' },
  ],
  pearls:[
    'Decompensation = ascites, variceal bleed, encephalopathy or jaundice.',
    'Surveillance for hepatocellular carcinoma in established cirrhosis.',
  ],
  note:'Cirrhosis does two things — it dams the portal circulation and starves the body of liver function — and every complication is one or the other.',
  links:{ algorithm:'tools/algorithms/jaundice.html', algorithmLabel:'Jaundice pathway' } },

{ id:'patho-nafld', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🫛',
  title:'Non-alcoholic fatty liver disease', blurb:'Why metabolic syndrome deposits fat — and then inflames — the liver.',
  mechanism:[
    'Insulin resistance drives fat accumulation in hepatocytes (**steatosis**). In some, this provokes inflammation (steatohepatitis, NASH) and progressive fibrosis.',
    'NAFLD is essentially the liver manifestation of metabolic syndrome.',
  ],
  cascade:[
    { step:'Insulin resistance', detail:'Hepatic fat accumulation (steatosis)' },
    { step:'Inflammation (NASH)', detail:'Hepatocyte injury, fibrosis' },
    { step:'Progression', detail:'Cirrhosis, HCC in a minority' },
  ],
  implications:[
    { clue:'Often found as incidental raised ALT or bright liver on scan', why:'Usually asymptomatic until advanced.' },
    { clue:'Risk-stratify fibrosis (e.g. FIB-4)', why:'Most have benign steatosis; identify the few with significant fibrosis.' },
    { clue:'Weight loss is the core treatment', why:'Reduces hepatic fat and inflammation.' },
  ],
  pearls:[
    'Strongly linked to type 2 diabetes and obesity.',
    'Exclude alcohol and other liver disease before attributing.',
  ],
  note:'The same insulin resistance that drives diabetes parks fat in the liver — and in some, that fat inflames and scars.',
  links:{ algorithm:'tools/algorithms/fatty-liver.html', algorithmLabel:'Fatty liver pathway' } },

{ id:'patho-diverticular', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🧵',
  title:'Diverticular disease', blurb:'Why colonic pouches form and when they inflame.',
  mechanism:[
    'Raised intraluminal pressure (low-fibre diet, constipation) herniates mucosa through weak points in the colonic wall — forming **diverticula**.',
    'Faecal obstruction or microperforation of a diverticulum causes inflammation/infection — **diverticulitis**.',
  ],
  cascade:[
    { step:'High colonic pressure', detail:'Mucosal herniation → diverticula' },
    { step:'Diverticulosis', detail:'Often asymptomatic or PR bleeding' },
    { step:'Diverticulitis', detail:'Left iliac fossa pain, fever, raised inflammatory markers' },
  ],
  implications:[
    { clue:'LIF pain + fever suggests diverticulitis', why:'Inflamed sigmoid diverticula — the commonest site.' },
    { clue:'Complications: abscess, perforation, fistula', why:'Transmural spread of infection.' },
    { clue:'Fibre prevents recurrence', why:'Softer, bulkier stool lowers colonic pressure.' },
  ],
  pearls:[
    'Painless brisk PR bleeding can come from a diverticulum.',
    'Exclude colorectal cancer when symptoms are atypical.',
  ],
  note:'Pressure pushes pouches out through the colon wall; trouble starts only when one blocks and inflames.',
  links:{ algorithm:'tools/algorithms/diverticulitis.html', algorithmLabel:'Diverticulitis pathway' } },

{ id:'patho-constipation', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🚽',
  title:'Constipation', blurb:'Why stool slows, hardens — and how to reason about secondary causes.',
  mechanism:[
    'Slow colonic transit and/or impaired evacuation lets the colon reabsorb more water, hardening stool. Drivers include low fibre/fluid, immobility, drugs (opioids, iron, anticholinergics) and metabolic/neurological disease.',
    'Hard stool is harder to pass, creating a self-reinforcing cycle and, if impacted, overflow diarrhoea.',
  ],
  cascade:[
    { step:'Slow transit / poor evacuation', detail:'Increased water reabsorption' },
    { step:'Hard, infrequent stool', detail:'Straining, incomplete emptying' },
    { step:'Complications', detail:'Impaction, overflow, fissures, haemorrhoids' },
  ],
  implications:[
    { clue:'Review drugs and exclude red flags', why:'New change in bowel habit + weight loss/bleeding needs cancer assessment.' },
    { clue:'Match the laxative to the problem', why:'Bulk-forming, osmotic and stimulant laxatives act by different mechanisms.' },
    { clue:'Think secondary causes', why:'Hypothyroidism, hypercalcaemia, diabetes, neurological disease.' },
  ],
  pearls:[
    'Opioid constipation needs proactive laxatives from day one.',
    'Overflow diarrhoea around impaction is mistaken for simple diarrhoea.',
  ],
  note:'The longer stool sits, the more water the colon pulls from it — so most treatments either speed transit or keep water in the stool.',
  links:{ algorithm:'tools/algorithms/constipation.html', algorithmLabel:'Constipation pathway' } },

{ id:'patho-colorectal-ca', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🎗️',
  title:'Colorectal cancer', blurb:'How a benign polyp becomes cancer — the basis for screening.',
  mechanism:[
    'Most colorectal cancers arise through the **adenoma–carcinoma sequence**: accumulating genetic mutations turn a benign adenomatous polyp into invasive carcinoma over years.',
    'Tumours bleed (occult or visible), narrow the lumen (change in bowel habit, obstruction) and can metastasise, classically to the liver.',
  ],
  cascade:[
    { step:'Adenomatous polyp', detail:'Premalignant — removable at colonoscopy' },
    { step:'Carcinoma', detail:'Bleeding, altered bowel habit, iron-deficiency anaemia' },
    { step:'Spread', detail:'Local invasion, nodal, hepatic metastases' },
  ],
  implications:[
    { clue:'FIT detects occult blood', why:'Underpins both screening and the symptomatic 2WW pathway.' },
    { clue:'Iron-deficiency anaemia in older adults needs investigation', why:'Right-sided tumours often bleed silently.' },
    { clue:'The slow polyp sequence makes screening effective', why:'Removing adenomas prevents cancer.' },
  ],
  pearls:[
    'Left-sided: obstructive symptoms; right-sided: anaemia.',
    'Apply NICE NG12 thresholds for 2WW referral.',
  ],
  note:'Cancer here grows from a removable polyp over years — which is exactly why finding occult blood and scoping early saves lives.',
  links:{} },

{ id:'patho-haemorrhoids', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🩸',
  title:'Haemorrhoids', blurb:'Why anal cushions engorge and bleed bright red.',
  mechanism:[
    'Vascular **anal cushions** that aid continence become engorged and prolapse when venous pressure rises (straining, constipation, pregnancy).',
    'Engorged cushions bleed bright red on the surface of stool and, if they prolapse or thrombose, cause pain.',
  ],
  cascade:[
    { step:'Raised anal venous pressure', detail:'Cushion engorgement' },
    { step:'Internal haemorrhoids', detail:'Painless bright-red bleeding, prolapse' },
    { step:'Thrombosis', detail:'Acute, painful peri-anal lump' },
  ],
  implications:[
    { clue:'Bright-red coating blood is typical', why:'Surface bleeding from a low, distal source.' },
    { clue:'Never attribute rectal bleeding to piles without excluding cancer', why:'Both can coexist; apply NG12.' },
    { clue:'Treat the constipation', why:'Reducing straining is the core conservative measure.' },
  ],
  pearls:[
    'Internal haemorrhoids are usually painless; pain suggests thrombosis or a fissure.',
    'Fibre, fluids and stool softeners first-line.',
  ],
  note:'Haemorrhoids are normal cushions under too much pressure — the bright-red bleeding is superficial, but you still must rule out a sinister source.',
  links:{} },

]);
