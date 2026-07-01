/* Reasoning GP — Basic Science data: PATHOPHYSIOLOGY of common primary-care conditions
   Schema: { id, domain:'Pathophysiology', system, icon, title, blurb,
     mechanism:[...], cascade:[{step,detail}], implications:[{clue,why}], pearls:[...], note, links } */
window.RGP_BASICSCIENCE = (window.RGP_BASICSCIENCE || []).concat([

/* ---------------- CARDIOVASCULAR ---------------- */
{
  id:'patho-hypertension', domain:'Pathophysiology', system:'Cardiovascular', icon:'🩸',
  title:'Hypertension', blurb:'Why a chronically raised pressure is usually “essential”, and why it silently damages arteries, heart, kidney, brain and eye.',
  mechanism:[
    'BP = cardiac output × systemic vascular resistance. In **essential hypertension** (>90% of cases) no single cause is found — it reflects a resetting of the balance between cardiac output, vascular tone, the renin–angiotensin–aldosterone system (RAAS), the sympathetic nervous system and renal sodium handling.',
    'Over time, raised pressure drives **arterial remodelling**: endothelial dysfunction, smooth-muscle hypertrophy and arteriosclerosis, which raises resistance further — a self-sustaining cycle.',
    'Sustained afterload causes **left ventricular hypertrophy**; pressure injury to small vessels damages the **kidney** (nephrosclerosis), **brain** (lacunar disease, haemorrhage) and **retina**.',
  ],
  cascade:[
    { step:'Raised pressure', detail:'Mechanical stress + endothelial dysfunction' },
    { step:'Vascular remodelling', detail:'Stiffer, narrower arteries → higher resistance' },
    { step:'End-organ injury', detail:'LVH, CKD, stroke risk, retinopathy' },
  ],
  implications:[
    { clue:'Usually asymptomatic', why:'No symptoms until end-organ damage — so we **screen** and treat numbers, not symptoms. Justifies opportunistic BP checks and ABPM.' },
    { clue:'We check U&E, ACR, HbA1c, lipids, ECG, fundi', why:'These detect the silent end-organ damage (kidney, heart, eye) and concurrent CV risk the pressure is causing.' },
    { clue:'First-line drug depends on age/ethnicity', why:'Younger/white patients tend to be higher-renin → ACEi/ARB work best; older/Black patients are lower-renin, volume-driven → CCB/thiazide work best.' },
    { clue:'We treat to a target, lifelong', why:'Benefit comes from sustained lowering of mechanical stress — stopping treatment lets the cycle resume.' },
  ],
  pearls:[
    'Look for **secondary** causes if young, resistant, or with hypokalaemia (Conn’s), paroxysms (phaeo) or renal bruit (renovascular).',
    'Most CV benefit is from the **degree** of BP reduction, somewhat independent of the agent used.',
  ],
  note:'Hypertension is a disease of cumulative mechanical and humoral injury to arteries. That is why we treat an asymptomatic number — the “symptom” is the stroke or kidney failure years later.',
  links:{ case:'cases/hypertension.html', caseLabel:'Hypertension case', drug:'pharma-acei', drugLabel:'ACE inhibitors', calculator:'tools/calculators.html#qrisk3', calculatorLabel:'QRISK3' },
},
{
  id:'patho-heart-failure', domain:'Pathophysiology', system:'Cardiovascular', icon:'🫀',
  title:'Heart failure', blurb:'Why a failing pump triggers the very neurohormonal responses that make it worse — and why our drugs block them.',
  mechanism:[
    'Heart failure is the inability of the heart to deliver adequate output at normal filling pressures. In **HFrEF** systolic contractility falls (e.g. post-MI, dilated cardiomyopathy); in **HFpEF** a stiff ventricle cannot fill.',
    'Falling output is sensed as hypovolaemia, activating the **RAAS** and **sympathetic** systems. These maintain pressure short-term but cause salt/water retention, vasoconstriction and adverse **cardiac remodelling** — a maladaptive vicious cycle.',
    'Rising filling pressures back up into the lungs (pulmonary congestion → breathlessness) and systemic veins (oedema, raised JVP, hepatic congestion).',
  ],
  cascade:[
    { step:'↓ Cardiac output', detail:'Perceived as underfilling' },
    { step:'RAAS + sympathetic activation', detail:'Salt/water retention, vasoconstriction, tachycardia' },
    { step:'Congestion + remodelling', detail:'Breathlessness, oedema, progressive dysfunction' },
  ],
  implications:[
    { clue:'BNP/NT-proBNP is raised', why:'Stretched ventricular myocytes secrete natriuretic peptides — a useful rule-out and severity marker.' },
    { clue:'The four pillars (ARNI/ACEi, beta-blocker, MRA, SGLT2i) improve survival', why:'Each blocks the maladaptive neurohormonal cascade (RAAS, sympathetic, aldosterone) rather than just relieving symptoms.' },
    { clue:'Loop diuretics relieve symptoms but don’t prolong life', why:'They treat congestion (the consequence) not the neurohormonal drive (the cause).' },
    { clue:'Start beta-blockers low and slow, when stable', why:'Acutely they reduce contractility — benefit is from long-term reverse remodelling, harm is from starting during decompensation.' },
  ],
  pearls:[
    'NSAIDs cause salt/water retention and blunt diuretics/ACEi — avoid in heart failure.',
    'A “dry” weight and daily weights help patients catch congestion early.',
  ],
  note:'The body’s attempt to defend blood pressure is exactly what destroys the failing heart. Modern therapy works by interrupting that compensatory cascade.',
  links:{ case:'cases/heart-failure.html', caseLabel:'Heart failure case', drug:'pharma-acei', drugLabel:'ACE inhibitors' },
},
{
  id:'patho-atrial-fibrillation', domain:'Pathophysiology', system:'Cardiovascular', icon:'💓',
  title:'Atrial fibrillation', blurb:'Why a quivering atrium causes an irregular pulse, breathlessness and — crucially — stroke.',
  mechanism:[
    'AF arises from chaotic, self-perpetuating electrical re-entry circuits in the atria (often triggered near the pulmonary veins). The atria “fibrillate” at 300–600/min with no coordinated contraction.',
    'The AV node filters these impulses irregularly → an **irregularly irregular** ventricular response, often fast.',
    'Loss of atrial contraction reduces cardiac filling (the “atrial kick”) and causes **blood stasis** in the left atrial appendage → thrombus formation → embolic stroke.',
  ],
  cascade:[
    { step:'Atrial re-entry', detail:'Disorganised electrical activity, no effective contraction' },
    { step:'Irregular AV conduction', detail:'Irregularly irregular, often fast ventricular rate' },
    { step:'Stasis in LA appendage', detail:'Thrombus → systemic embolism / stroke' },
  ],
  implications:[
    { clue:'We anticoagulate based on CHA₂DS₂-VASc, not on symptoms', why:'Stroke risk comes from stasis-driven thrombus, which is present whether or not the patient feels the AF.' },
    { clue:'Rate control is often enough', why:'Most symptoms come from the fast, irregular ventricular rate — slowing AV conduction restores filling time and relieves symptoms.' },
    { clue:'DOACs preferred over warfarin', why:'Predictable pharmacodynamics, no monitoring, fewer interactions — they target the same final clotting steps with less variability.' },
    { clue:'Treat the driver (HTN, alcohol, thyroid, OSA)', why:'These remodel/irritate the atria and perpetuate AF.' },
  ],
  pearls:[
    'New AF → always check thyroid function and consider precipitants.',
    'The atrial kick matters most when the ventricle is stiff (HFpEF, AS) — these patients tolerate AF poorly.',
  ],
  note:'AF kills through the clot it forms, not the palpitations it causes — which is why anticoagulation, decided by risk score, is the single most important decision.',
  links:{ case:'cases/atrial-fibrillation.html', caseLabel:'Atrial fibrillation case', drug:'pharma-doac', drugLabel:'DOACs', calculator:'tools/calculators.html#chads-vasc', calculatorLabel:'CHA₂DS₂-VASc' },
},
{
  id:'patho-atherosclerosis', domain:'Pathophysiology', system:'Cardiovascular', icon:'🧈',
  title:'Atherosclerosis & ischaemic heart disease', blurb:'How LDL, inflammation and a fragile plaque cap turn into angina and myocardial infarction.',
  mechanism:[
    'LDL particles enter the arterial intima, become oxidised, and are taken up by macrophages → **foam cells** → fatty streak. This drives chronic inflammation and a lipid-rich plaque with a fibrous cap.',
    'A **stable** plaque narrows the lumen gradually → fixed flow limitation → **angina** on exertion (demand outstrips supply).',
    'An **unstable** plaque with a thin cap can rupture; exposed lipid core triggers platelet aggregation and thrombosis → acute coronary syndrome / MI.',
  ],
  cascade:[
    { step:'LDL deposition + oxidation', detail:'Foam cells, fatty streak, inflammation' },
    { step:'Plaque growth', detail:'Fixed stenosis → stable angina' },
    { step:'Cap rupture + thrombosis', detail:'Acute coronary syndrome / MI' },
  ],
  implications:[
    { clue:'Statins help even at “normal” cholesterol', why:'They lower LDL **and** stabilise the plaque/reduce inflammation — benefit is partly independent of the starting number.' },
    { clue:'Antiplatelets prevent events', why:'The acute event is a platelet-driven thrombus on ruptured plaque — aspirin/clopidogrel target that final step.' },
    { clue:'Stable angina = predictable exertional pain; ACS = rest pain', why:'Fixed stenosis limits supply only under demand; rupture causes thrombosis even at rest.' },
    { clue:'We manage global risk (BP, lipids, glucose, smoking)', why:'Each accelerates endothelial injury and plaque formation — risk is multiplicative.' },
  ],
  pearls:[
    'Most MIs arise from **non-obstructive** plaques that rupture — severity of stenosis predicts angina, not necessarily MI.',
    'Smoking cessation gives the fastest reduction in CV event risk of any intervention.',
  ],
  note:'Atherosclerosis is a chronic inflammatory lipid disease punctuated by acute thrombotic events. We treat the chronic process (lipids, BP) and protect against the acute one (antiplatelets).',
  links:{ case:'cases/chest-pain.html', caseLabel:'Chest pain case', drug:'pharma-statin', drugLabel:'Statins', calculator:'tools/calculators.html#qrisk3', calculatorLabel:'QRISK3' },
},

/* ---------------- RESPIRATORY ---------------- */
{
  id:'patho-asthma', domain:'Pathophysiology', system:'Respiratory', icon:'🫁',
  title:'Asthma', blurb:'Why asthma is reversible airway inflammation — and why inhaled steroids, not relievers, are the treatment.',
  mechanism:[
    'Asthma is **chronic eosinophilic/Th2 airway inflammation** with bronchial hyper-responsiveness. Triggers (allergen, virus, exercise, cold air) cause mast-cell and eosinophil activation.',
    'This produces **reversible** bronchoconstriction, mucosal oedema and mucus plugging → variable airflow obstruction.',
    'Untreated chronic inflammation causes **airway remodelling** (smooth-muscle hypertrophy, basement-membrane thickening) and progressively fixed obstruction.',
  ],
  cascade:[
    { step:'Trigger + Th2 inflammation', detail:'Eosinophils, mast cells, cytokines' },
    { step:'Bronchoconstriction + oedema + mucus', detail:'Reversible airflow obstruction, wheeze' },
    { step:'Chronic remodelling', detail:'Fixed obstruction if undertreated' },
  ],
  implications:[
    { clue:'Inhaled corticosteroids are first-line, not SABA alone', why:'The disease is inflammation — ICS treats the cause; SABA only relieves the symptom and over-reliance signals poor control.' },
    { clue:'Symptoms and PEF are variable/diurnal', why:'Reversible inflammation fluctuates — worse at night/early morning; reversibility on spirometry supports the diagnosis.' },
    { clue:'High SABA use predicts attacks', why:'It reflects untreated inflammation — ≥3 canisters/year is a red flag for exacerbation risk.' },
    { clue:'A flare needs systemic steroids', why:'Inhaled relievers can’t reach plugged, inflamed airways — oral steroids damp the inflammatory surge.' },
  ],
  pearls:[
    'Always check **inhaler technique and adherence** before stepping up therapy.',
    'MART regimens use an ICS/formoterol inhaler for both maintenance and relief — every reliever puff also delivers anti-inflammatory steroid.',
  ],
  note:'Asthma is reversible inflammation; COPD is largely fixed destruction. That single distinction drives why ICS is central in one and bronchodilators in the other.',
  links:{ case:'cases/asthma.html', caseLabel:'Asthma case', drug:'pharma-ics', drugLabel:'Inhaled corticosteroids' },
},
{
  id:'patho-copd', domain:'Pathophysiology', system:'Respiratory', icon:'🚬',
  title:'COPD', blurb:'Why smoking-driven airway destruction is largely irreversible — and what that means for treatment.',
  mechanism:[
    'Chronic exposure (usually cigarette smoke) drives **neutrophilic** airway inflammation, protease–antiprotease imbalance and oxidative stress.',
    'This causes **emphysema** (alveolar wall destruction → loss of elastic recoil and gas-exchange surface) and **chronic bronchitis** (mucus gland hyperplasia, small-airway fibrosis).',
    'Loss of recoil causes **dynamic airway collapse** on expiration → air trapping, hyperinflation and a largely **fixed** (non-reversible) obstruction.',
  ],
  cascade:[
    { step:'Noxious exposure', detail:'Neutrophilic inflammation, protease excess, oxidative stress' },
    { step:'Emphysema + bronchitis', detail:'Alveolar destruction + mucus + small-airway fibrosis' },
    { step:'Air trapping + fixed obstruction', detail:'Hyperinflation, breathlessness, exacerbations' },
  ],
  implications:[
    { clue:'Obstruction is fixed (post-bronchodilator FEV1/FVC <0.7)', why:'Destruction isn’t reversible — so unlike asthma, bronchodilators are the backbone and ICS is reserved for eosinophilic/exacerbating phenotypes.' },
    { clue:'Smoking cessation is the only thing that slows decline', why:'It removes the driver of ongoing destruction; drugs treat symptoms but don’t restore lung.' },
    { clue:'Give oxygen carefully', why:'In chronic CO₂ retainers, high-flow O₂ can worsen hypercapnia (V/Q and Haldane effects) — titrate to target SpO₂ 88–92%.' },
    { clue:'Pulmonary rehab and vaccination matter', why:'Deconditioning and infective exacerbations drive disability and progression.' },
  ],
  pearls:[
    'Check **blood eosinophils** — higher counts predict ICS benefit; low counts favour withholding ICS to avoid pneumonia risk.',
    'Consider alpha-1 antitrypsin deficiency in young or non-smoking emphysema.',
  ],
  note:'COPD is fixed structural loss from cumulative exposure. The single most effective intervention is removing the exposure — everything else is symptom control and exacerbation prevention.',
  links:{ case:'cases/copd.html', caseLabel:'COPD case', drug:'pharma-laba-lama', drugLabel:'LABA / LAMA' },
},

/* ---------------- ENDOCRINE & METABOLIC ---------------- */
{
  id:'patho-t2dm', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'🍬',
  title:'Type 2 diabetes', blurb:'Why insulin resistance plus beta-cell failure causes hyperglycaemia — and why complications are vascular.',
  mechanism:[
    'T2DM combines **insulin resistance** (muscle, liver, fat respond poorly to insulin) with progressive **beta-cell failure** (insufficient compensatory insulin).',
    'The liver over-produces glucose and tissues under-take it up → chronic hyperglycaemia. Excess free fatty acids and adiposity worsen resistance (the “ominous octet” of organ defects).',
    'Chronic hyperglycaemia glycates proteins and damages vessels: **microvascular** (retinopathy, nephropathy, neuropathy) and **macrovascular** (MI, stroke, PAD) disease.',
  ],
  cascade:[
    { step:'Insulin resistance', detail:'Compensatory hyperinsulinaemia maintains glucose initially' },
    { step:'Beta-cell exhaustion', detail:'Insulin can no longer compensate → hyperglycaemia' },
    { step:'Vascular glycation injury', detail:'Micro- and macro-vascular complications' },
  ],
  implications:[
    { clue:'HbA1c reflects 3 months of glycaemia', why:'It measures glycated haemoglobin — proportional to average glucose over the red-cell lifespan; unreliable in anaemia/haemoglobinopathy.' },
    { clue:'Metformin is first-line', why:'It reduces hepatic glucose output and improves insulin sensitivity without causing weight gain or hypos.' },
    { clue:'SGLT2i and GLP-1 chosen for organ protection', why:'They independently reduce CV and renal events — we now pick agents for outcomes, not just glucose.' },
    { clue:'We screen feet, eyes, kidneys annually', why:'Complications are silent and vascular — early detection prevents ulceration, blindness and ESRF.' },
  ],
  pearls:[
    'Weight loss (incl. very-low-calorie diets/bariatric surgery) can drive **remission** by reversing the underlying resistance.',
    'Beware euglycaemic DKA with SGLT2 inhibitors during illness/fasting.',
  ],
  note:'The hyperglycaemia is the marker; the vascular damage is the disease. That reframing explains why modern drugs are chosen for cardiorenal protection, not just lower numbers.',
  links:{ case:'cases/type-2-diabetes.html', caseLabel:'Type 2 diabetes case', drug:'pharma-metformin', drugLabel:'Metformin' },
},
{
  id:'patho-hypothyroidism', domain:'Pathophysiology', system:'Endocrine & Metabolic', icon:'🦋',
  title:'Hypothyroidism', blurb:'Why low thyroid hormone slows every system — and why TSH rises and we replace with levothyroxine.',
  mechanism:[
    'Most UK hypothyroidism is **primary** (autoimmune, Hashimoto’s, or post-treatment): the thyroid fails to produce enough T4/T3.',
    'Thyroid hormone sets basal metabolic rate and tissue sensitivity to catecholamines, affecting heart, gut, CNS, skin and metabolism. Low levels slow all of these.',
    'Falling T4 releases the pituitary from negative feedback → **TSH rises** (the sensitive early marker of primary failure).',
  ],
  cascade:[
    { step:'↓ T4/T3 production', detail:'Reduced metabolic drive across tissues' },
    { step:'Loss of negative feedback', detail:'Pituitary secretes more TSH → TSH rises' },
    { step:'Systemic slowing', detail:'Fatigue, weight gain, bradycardia, constipation, cold intolerance' },
  ],
  implications:[
    { clue:'TSH is the primary test', why:'In primary disease it rises before T4 falls below range — the most sensitive screen; check T4 to confirm.' },
    { clue:'Levothyroxine (T4) once daily replaces the hormone', why:'T4 has a long half-life (~7 days) → stable levels and once-daily dosing; the body converts T4→active T3 peripherally.' },
    { clue:'Recheck TSH ~6–8 weeks after dose change', why:'It takes that long for levels and pituitary feedback to re-equilibrate.' },
    { clue:'Start low in elderly/cardiac patients', why:'Restoring metabolic rate increases myocardial oxygen demand — too fast can precipitate angina/arrhythmia.' },
  ],
  pearls:[
    'Take levothyroxine on an empty stomach — calcium, iron, PPIs and food impair absorption.',
    'Subclinical hypothyroidism (raised TSH, normal T4): treat selectively (symptoms, pregnancy, very high TSH).',
  ],
  note:'TSH rising is the pituitary “shouting louder” at a failing gland. Replacement aims to normalise TSH, the readout of adequate tissue hormone.',
  links:{ case:'cases/hypothyroidism.html', caseLabel:'Hypothyroidism case', drug:'pharma-levothyroxine', drugLabel:'Levothyroxine' },
},
{
  id:'patho-gout', domain:'Pathophysiology', system:'Musculoskeletal', icon:'🦶',
  title:'Gout', blurb:'Why urate crystals cause sudden agony — and why we treat the flare and the urate separately.',
  mechanism:[
    'Gout is caused by **monosodium urate crystal** deposition when serum urate is chronically supersaturated (often >0.36 mmol/L).',
    'Crystals in and around joints are engulfed by the innate immune system, activating the **NLRP3 inflammasome** → IL-1β release → intense acute inflammation (the flare).',
    'Hyperuricaemia results from under-excretion (most patients; worsened by renal impairment, diuretics) or over-production (high purine turnover, alcohol, fructose).',
  ],
  cascade:[
    { step:'Chronic hyperuricaemia', detail:'Urate supersaturates → crystal formation' },
    { step:'Crystal-driven inflammasome activation', detail:'IL-1β surge → acute hot, painful joint' },
    { step:'Tophi + joint damage', detail:'If untreated, chronic deposition and erosions' },
  ],
  implications:[
    { clue:'Acute flare: NSAID/colchicine/steroid', why:'These damp the IL-1β-driven inflammation — they relieve the attack but don’t lower urate.' },
    { clue:'Don’t start or stop urate-lowering during a flare without cover', why:'Any rapid change in urate can destabilise crystals and trigger flares — co-prescribe prophylaxis when starting allopurinol.' },
    { clue:'Allopurinol lowers production (xanthine oxidase inhibition)', why:'Long-term it dissolves the crystal burden by keeping urate below saturation — a treat-to-target strategy.' },
    { clue:'Review diuretics and lifestyle', why:'Thiazides/loop diuretics reduce urate excretion; alcohol and fructose raise production.' },
  ],
  pearls:[
    'A normal serum urate during an acute flare does not exclude gout — recheck after settling.',
    'Target urate <0.30 mmol/L if tophi or frequent flares.',
  ],
  note:'Two diseases in one: an acute IL-1β inflammatory storm (treat fast) and chronic hyperuricaemia (treat to target). Confusing the two is the commonest management error.',
  links:{ case:'cases/gout.html', caseLabel:'Gout case' },
},
{
  id:'patho-osteoporosis', domain:'Pathophysiology', system:'Musculoskeletal', icon:'🦴',
  title:'Osteoporosis', blurb:'Why bone silently loses strength — and why bisphosphonates work by switching off resorption.',
  mechanism:[
    'Bone is constantly remodelled: **osteoclasts** resorb and **osteoblasts** rebuild. After ~35 the balance tips toward loss.',
    'Oestrogen restrains osteoclasts; at menopause its withdrawal **accelerates resorption**, outpacing formation → reduced bone mineral density and disrupted microarchitecture.',
    'Weaker, more porous bone fractures with minimal trauma — typically wrist, vertebra and hip (fragility fractures).',
  ],
  cascade:[
    { step:'Resorption > formation', detail:'Net bone loss, especially post-menopause' },
    { step:'↓ BMD + microarchitectural decay', detail:'Reduced bone strength' },
    { step:'Fragility fracture', detail:'Low-trauma wrist/vertebral/hip fracture' },
  ],
  implications:[
    { clue:'It’s silent until a fracture', why:'No symptoms from low BMD itself — so we use risk tools (FRAX/QFracture) and DXA to find it before the fracture.' },
    { clue:'Bisphosphonates are first-line', why:'They bind bone and **inhibit osteoclasts** → reduce resorption, raise BMD, cut fracture risk.' },
    { clue:'Take bisphosphonate upright, fasting, with water', why:'Poor oral absorption and risk of oesophagitis — strict instructions maximise uptake and reduce harm.' },
    { clue:'Co-prescribe calcium/vitamin D if deficient', why:'Anti-resorptives need adequate substrate and can unmask hypocalcaemia in deficiency.' },
  ],
  pearls:[
    'A vertebral fracture on imaging is diagnostic of osteoporosis regardless of DXA.',
    'Consider a drug holiday after ~5 years of oral bisphosphonate if low risk.',
  ],
  note:'Osteoporosis is a disorder of remodelling balance. Most treatments tip it back by silencing osteoclasts; the disease is invisible until it breaks a bone, so prediction beats reaction.',
  links:{ case:'cases/osteoporosis.html', caseLabel:'Osteoporosis case', drug:'pharma-bisphosphonate', drugLabel:'Bisphosphonates', calculator:'tools/calculators.html#frax', calculatorLabel:'FRAX' },
},

/* ---------------- RENAL ---------------- */
{
  id:'patho-ckd', domain:'Pathophysiology', system:'Renal', icon:'🫘',
  title:'Chronic kidney disease', blurb:'Why nephron loss is self-perpetuating, and why ACEi and SGLT2i protect the kidney.',
  mechanism:[
    'CKD is progressive, usually irreversible loss of nephrons (commonly from diabetes and hypertension). Surviving nephrons **hyperfilter** to compensate.',
    'Hyperfiltration raises intraglomerular pressure, causing glomerulosclerosis and proteinuria, which is itself toxic to tubules — a self-perpetuating decline.',
    'Failing kidneys cause fluid/electrolyte disturbance, acidosis, **renal anaemia** (low EPO), and **mineral-bone disease** (low active vitamin D, high phosphate, secondary hyperparathyroidism).',
  ],
  cascade:[
    { step:'Nephron loss', detail:'Remaining nephrons hyperfilter to compensate' },
    { step:'Glomerular hypertension + proteinuria', detail:'Sclerosis and tubular injury accelerate loss' },
    { step:'Systemic consequences', detail:'Anaemia, acidosis, CKD-MBD, fluid overload, ↑CV risk' },
  ],
  implications:[
    { clue:'We stage by eGFR and ACR', why:'Both filtration (eGFR) and damage (albuminuria) independently predict progression and CV risk.' },
    { clue:'ACEi/ARB are renoprotective despite a small eGFR dip', why:'They dilate the efferent arteriole → lower intraglomerular pressure and proteinuria. A ≤25% creatinine rise is expected and acceptable.' },
    { clue:'SGLT2 inhibitors slow progression', why:'They restore tubuloglomerular feedback, reducing hyperfiltration — now used even in non-diabetic proteinuric CKD.' },
    { clue:'Watch potassium and nephrotoxins', why:'Reduced excretion → hyperkalaemia risk; avoid NSAIDs and dose-adjust renally-cleared drugs.' },
  ],
  pearls:[
    'A small expected creatinine rise on starting ACEi is renoprotective — don’t stop unless >25–30%.',
    '“Sick day rules”: hold ACEi/ARB, SGLT2i, metformin, diuretics, NSAIDs during acute dehydrating illness.',
  ],
  note:'CKD progresses because the compensation (hyperfiltration) is itself injurious. Our key drugs work by relieving that intraglomerular pressure, not by boosting filtration.',
  links:{ case:'cases/ckd.html', caseLabel:'CKD case', drug:'pharma-acei', drugLabel:'ACE inhibitors', calculator:'tools/calculators.html#egfr', calculatorLabel:'eGFR' },
},

/* ---------------- GASTROINTESTINAL ---------------- */
{
  id:'patho-gord', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🔥',
  title:'GORD & peptic ulcer disease', blurb:'Why acid refluxes and ulcerates — and why PPIs and H. pylori eradication work.',
  mechanism:[
    'GORD results from a weak/transiently relaxing lower oesophageal sphincter allowing acidic stomach contents into the oesophagus, overwhelming mucosal defence → inflammation (oesophagitis).',
    'Peptic ulcers form when aggressive factors (acid, pepsin, **H. pylori**, NSAIDs) overwhelm mucosal protection (mucus, bicarbonate, prostaglandin-driven blood flow).',
    'H. pylori causes inflammation and alters acid secretion; **NSAIDs** inhibit protective prostaglandins (COX-1) → mucosal vulnerability.',
  ],
  cascade:[
    { step:'Defence < aggression', detail:'Acid/pepsin/H. pylori/NSAID overwhelm mucosa' },
    { step:'Mucosal injury', detail:'Oesophagitis or gastric/duodenal ulcer' },
    { step:'Complications', detail:'Bleeding, stricture, Barrett’s metaplasia' },
  ],
  implications:[
    { clue:'PPIs are highly effective', why:'They irreversibly block the gastric H⁺/K⁺-ATPase **proton pump** — the final common step of acid secretion — allowing mucosa to heal.' },
    { clue:'Test and treat H. pylori', why:'Eradication removes a root cause of ulcers and cuts recurrence and gastric cancer risk.' },
    { clue:'Review NSAID use; co-prescribe PPI if needed', why:'NSAIDs remove prostaglandin protection — stopping them or adding a PPI restores the defence.' },
    { clue:'ALARMS symptoms need urgent endoscopy', why:'Dysphagia, weight loss, anaemia, GI bleeding or a mass may signal malignancy, not simple reflux.' },
  ],
  pearls:[
    'Stop PPI before H. pylori testing (urea breath/stool antigen) to avoid false negatives.',
    'Long-standing GORD → Barrett’s (metaplasia) → small cancer risk; persistent symptoms warrant assessment.',
  ],
  note:'Acid disease is a balance of aggression vs mucosal defence. PPIs reduce the aggression at its final step; eradication and NSAID review remove the cause.',
  links:{ case:'cases/dyspepsia.html', caseLabel:'Dyspepsia case', drug:'pharma-ppi', drugLabel:'Proton pump inhibitors' },
},
{
  id:'patho-ibs', domain:'Pathophysiology', system:'Gastrointestinal', icon:'🌀',
  title:'Irritable bowel syndrome', blurb:'Why a structurally normal gut produces real symptoms — the brain–gut axis explained.',
  mechanism:[
    'IBS is a disorder of **gut–brain interaction**: there is no structural lesion, but visceral hypersensitivity, altered motility and dysregulated brain–gut signalling produce genuine pain and bowel change.',
    'Contributors include altered microbiota, low-grade immune activation, food sensitivities (e.g. fermentable FODMAPs causing distension), and a strong influence of stress/affect on gut function.',
    'Pain arises from heightened perception of normal gut signals (visceral hypersensitivity), not from damage.',
  ],
  cascade:[
    { step:'Trigger (infection, stress, diet)', detail:'Microbiome and immune changes' },
    { step:'Visceral hypersensitivity + dysmotility', detail:'Normal signals perceived as painful; altered transit' },
    { step:'Brain–gut amplification', detail:'Stress/affect modulate symptom severity' },
  ],
  implications:[
    { clue:'It’s a positive diagnosis after excluding red flags', why:'No test confirms IBS — we exclude coeliac, IBD (faecal calprotectin) and cancer, then diagnose on symptom criteria.' },
    { clue:'Antispasmodics and low-FODMAP diet help', why:'They target dysmotility and luminal distension — the mechanical drivers of pain and bloating.' },
    { clue:'Low-dose tricyclics/SSRIs can help', why:'They modulate the brain–gut axis and visceral pain perception, not mood alone (“neuromodulators”).' },
    { clue:'Explaining the mechanism is therapeutic', why:'Reassurance that the gut is not damaged but “oversensitive” reduces anxiety-driven amplification.' },
  ],
  pearls:[
    'Always check **faecal calprotectin** to separate IBS from IBD when in doubt.',
    'Coeliac serology should be checked in all suspected IBS.',
  ],
  note:'IBS is real pain from an oversensitive, dysregulated but undamaged gut. Treatment targets motility, luminal triggers and the brain–gut axis — there is nothing to “cure”, but much to manage.',
  links:{ case:'cases/ibs.html', caseLabel:'IBS case' },
},

/* ---------------- NEUROLOGY & MENTAL HEALTH ---------------- */
{
  id:'patho-depression', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'🧠',
  title:'Depression', blurb:'Beyond “low serotonin” — why SSRIs take weeks and what the monoamine and plasticity models explain.',
  mechanism:[
    'The **monoamine hypothesis** links depression to reduced serotonergic/noradrenergic neurotransmission — the basis for most antidepressants — but it is incomplete.',
    'Modern models emphasise impaired **neuroplasticity** (reduced BDNF, hippocampal changes), HPA-axis dysregulation (chronic cortisol), inflammation and disrupted neural circuits.',
    'This explains the lag: SSRIs raise synaptic serotonin within hours, but clinical benefit takes **2–6 weeks**, consistent with downstream receptor adaptation and neuroplastic change.',
  ],
  cascade:[
    { step:'Stress / vulnerability', detail:'HPA-axis and monoamine dysregulation' },
    { step:'Reduced plasticity (↓BDNF)', detail:'Circuit-level mood, cognition and drive changes' },
    { step:'Clinical syndrome', detail:'Low mood, anhedonia, somatic and cognitive symptoms' },
  ],
  implications:[
    { clue:'SSRIs take weeks to work', why:'Benefit comes from downstream receptor and neuroplastic adaptation, not the immediate rise in synaptic serotonin — counsel patients to persist.' },
    { clue:'Don’t stop abruptly', why:'Adapted receptors cause discontinuation symptoms — taper slowly.' },
    { clue:'Watch early for worse agitation/suicidality', why:'Energy/activation can improve before mood — close review in the first weeks, especially in young people.' },
    { clue:'Combine drugs with psychological therapy', why:'Therapy targets cognition and circuits; combined treatment outperforms either alone in moderate–severe disease.' },
  ],
  pearls:[
    'Screen for bipolarity before starting antidepressants — they can precipitate mania.',
    'Always assess and document **suicide risk**.',
  ],
  note:'“Chemical imbalance” is a useful shorthand but an oversimplification. The weeks-long lag to benefit is the clue that depression — and its treatment — is about neuroplastic change, not just serotonin levels.',
  links:{ case:'cases/depression.html', caseLabel:'Depression case', drug:'pharma-ssri', drugLabel:'SSRIs', case2:'cases/anxiety.html', case2Label:'Generalised anxiety' },
},

/* ---------------- HAEMATOLOGY ---------------- */
{
  id:'patho-ida', domain:'Pathophysiology', system:'Haematology', icon:'🩸',
  title:'Iron-deficiency anaemia', blurb:'Why iron lack makes small, pale cells — and why the priority is finding the cause.',
  mechanism:[
    'Iron is essential for haem synthesis. When iron supply (intake/absorption) cannot meet demand (growth, menstruation, blood loss), stores (ferritin) deplete first, then circulating iron, then erythropoiesis fails.',
    'Marrow produces fewer, smaller, paler cells → **microcytic, hypochromic** anaemia (low MCV, low MCH).',
    'In adults, especially men and postmenopausal women, the key question is **why** — occult GI blood loss (including colorectal cancer) until proven otherwise.',
  ],
  cascade:[
    { step:'Negative iron balance', detail:'Loss/demand exceeds intake/absorption' },
    { step:'Store then functional depletion', detail:'Ferritin falls → low serum iron → impaired haem synthesis' },
    { step:'Microcytic hypochromic anaemia', detail:'Fatigue, pallor, breathlessness; low MCV/MCH' },
  ],
  implications:[
    { clue:'Ferritin is the key test (but is an acute-phase reactant)', why:'Low ferritin confirms deficiency; a “normal” ferritin during inflammation can mask it — interpret with CRP.' },
    { clue:'Iron-deficiency in men/postmenopausal women → investigate the gut', why:'Occult GI loss/malignancy is the priority — anaemia is a symptom, not the diagnosis.' },
    { clue:'Oral iron, then recheck', why:'Replaces stores; a rising reticulocyte/Hb confirms the diagnosis and adherence. Alternate-day dosing improves absorption (less hepcidin block).' },
    { clue:'Coeliac screen if no obvious cause', why:'Malabsorption is a common, treatable cause of iron deficiency.' },
  ],
  pearls:[
    'Don’t just replace iron — always pursue the cause, particularly GI loss.',
    'GI side-effects of oral iron improve with alternate-day or lower dosing.',
  ],
  note:'Iron-deficiency anaemia is a clue, not a diagnosis. Correcting the blood count while ignoring a bleeding colon can be fatal — the workup matters more than the ferrous sulfate.',
  links:{ case:'cases/anaemia.html', caseLabel:'Anaemia case' },
},

]);
