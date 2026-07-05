/* Reasoning GP — Basic Science data: PHARMACODYNAMICS of common drug classes
   Schema: { id, domain:'Pharmacology', class, icon, title, blurb,
     moa:[...], examples:[...], effects:[{effect,mechanism}], adverse:[{ae,mechanism}],
     practical:[{point,detail}], pearls:[...], note, links } */
window.RGP_BASICSCIENCE = (window.RGP_BASICSCIENCE || []).concat([

/* ---------------- CARDIOVASCULAR / RENAL ---------------- */
{
  id:'pharma-acei', domain:'Pharmacology', class:'Cardiovascular', icon:'🫀',
  title:'ACE inhibitors & ARBs', blurb:'Block the renin–angiotensin system to lower BP, protect the kidney and reverse cardiac remodelling.',
  examples:['Ramipril, lisinopril, enalapril, perindopril (ACEi)','Losartan, candesartan, irbesartan (ARB)'],
  moa:[
    'ACE inhibitors block conversion of angiotensin I → **angiotensin II**; ARBs block the **AT₁ receptor**. Either way, angiotensin II’s effects are reduced.',
    'Less angiotensin II → vasodilatation (↓ systemic resistance), less aldosterone (↓ salt/water retention), and crucially **dilatation of the efferent glomerular arteriole** (↓ intraglomerular pressure).',
    'ACEi also reduce bradykinin breakdown — contributing to vasodilatation but also the dry cough.',
  ],
  effects:[
    { effect:'Lower blood pressure', mechanism:'Vasodilatation + reduced aldosterone-driven volume.' },
    { effect:'Renoprotection (↓ proteinuria)', mechanism:'Efferent arteriolar dilatation lowers intraglomerular pressure — slows CKD/diabetic nephropathy.' },
    { effect:'Reverse cardiac remodelling / mortality benefit in HF', mechanism:'Interrupts the maladaptive RAAS drive after MI and in heart failure.' },
  ],
  adverse:[
    { ae:'Dry cough (ACEi)', mechanism:'Reduced bradykinin breakdown → switch to an ARB (no cough).' },
    { ae:'Hyperkalaemia', mechanism:'Reduced aldosterone → renal potassium retention.' },
    { ae:'First-dose hypotension / AKI', mechanism:'In volume-deplete or bilateral renal artery stenosis, efferent dilatation drops filtration pressure.' },
    { ae:'Angio-oedema (rare)', mechanism:'Bradykinin-mediated; can be delayed and dangerous.' },
  ],
  practical:[
    { point:'Check U&E ~1–2 weeks after starting/up-titrating', detail:'Expect a small creatinine rise (≤25–30%) and watch potassium — this is acceptable and renoprotective.' },
    { point:'Avoid in pregnancy', detail:'Teratogenic / fetotoxic — use alternatives in women who may conceive.' },
    { point:'Hold during dehydrating illness (sick-day rules)', detail:'Reduces AKI risk when renal perfusion falls.' },
    { point:'Caution with K⁺-raising drugs', detail:'MRAs, potassium supplements, trimethoprim, NSAIDs compound hyperkalaemia.' },
  ],
  pearls:['Don’t combine an ACEi with an ARB — more harm (renal, K⁺) without benefit.'],
  note:'One mechanism — less angiotensin II — explains the BP fall, the renoprotection, the heart-failure benefit, AND the hyperkalaemia and AKI risk. Knowing it predicts both effect and side-effect.',
  links:{ patho:'patho-hypertension', pathoLabel:'Hypertension', case:'cases/heart-failure.html', caseLabel:'Heart failure', case2:'cases/ckd.html', case2Label:'CKD' },
},
{
  id:'pharma-betablocker', domain:'Pharmacology', class:'Cardiovascular', icon:'🫀',
  title:'Beta-blockers', blurb:'Block β-adrenoceptors to slow the heart, reduce its work, and protect it in heart failure and post-MI.',
  examples:['Bisoprolol, atenolol, metoprolol (β1-selective)','Propranolol (non-selective)','Carvedilol (α+β)'],
  moa:[
    'Block **β1-adrenoceptors** in the heart → reduced heart rate, contractility and AV conduction → less myocardial oxygen demand.',
    'Reduce renin release from the kidney (β1) → contributes to BP lowering.',
    'Non-selective agents also block **β2** (bronchi, vessels, metabolic), explaining bronchospasm and masked hypoglycaemia.',
  ],
  effects:[
    { effect:'Rate control (e.g. AF), anti-anginal', mechanism:'↓ Rate and contractility → lower oxygen demand and longer diastolic filling.' },
    { effect:'Mortality benefit in HFrEF & post-MI', mechanism:'Blocking chronic sympathetic overdrive allows reverse remodelling.' },
    { effect:'Lower blood pressure', mechanism:'↓ Cardiac output and renin.' },
  ],
  adverse:[
    { ae:'Bradycardia, fatigue, cold peripheries', mechanism:'Excessive β1 blockade ± β2 peripheral vasoconstriction.' },
    { ae:'Bronchospasm', mechanism:'β2 blockade — caution/avoid in asthma; β1-selective preferred in COPD.' },
    { ae:'Masked hypoglycaemia', mechanism:'Blunts adrenergic warning symptoms (tremor, tachycardia) in insulin-treated diabetes.' },
  ],
  practical:[
    { point:'Start low and titrate slowly in heart failure', detail:'Acute negative inotropy can worsen decompensation — benefit is long-term; never start during acute pulmonary oedema.' },
    { point:'Don’t stop abruptly in IHD', detail:'Rebound tachycardia/ischaemia — taper.' },
    { point:'Avoid combining with verapamil/diltiazem', detail:'Additive AV block and negative inotropy → risk of severe bradycardia/heart block.' },
  ],
  pearls:['β1-selectivity is relative and lost at high doses — still cautious in airways disease.'],
  note:'The same β1 blockade that controls rate and protects the failing heart also causes bradycardia and fatigue; the β2 effects explain bronchospasm and masked hypos.',
  links:{ patho:'patho-atrial-fibrillation', pathoLabel:'Atrial fibrillation', case:'cases/heart-failure.html', caseLabel:'Heart failure' },
},
{
  id:'pharma-ccb', domain:'Pharmacology', class:'Cardiovascular', icon:'🫀',
  title:'Calcium channel blockers', blurb:'Block L-type calcium channels — dihydropyridines relax arteries; rate-limiting agents slow the heart.',
  examples:['Amlodipine, felodipine, nifedipine (dihydropyridine)','Verapamil, diltiazem (non-dihydropyridine / rate-limiting)'],
  moa:[
    'Block **L-type calcium channels**, reducing calcium entry into vascular smooth muscle and cardiac cells.',
    '**Dihydropyridines** (amlodipine) act mainly on vascular smooth muscle → arterial vasodilatation → lower BP.',
    '**Rate-limiting** CCBs (verapamil, diltiazem) act more on the heart → reduced rate, contractility and AV conduction.',
  ],
  effects:[
    { effect:'Lower BP (dihydropyridines)', mechanism:'Peripheral arterial vasodilatation.' },
    { effect:'Rate control / anti-anginal (verapamil, diltiazem)', mechanism:'↓ AV conduction and myocardial oxygen demand.' },
  ],
  adverse:[
    { ae:'Ankle oedema, flushing, headache (dihydropyridines)', mechanism:'Arteriolar vasodilatation increases capillary pressure — not fluid overload (diuretics don’t help much).' },
    { ae:'Bradycardia/heart block, constipation (verapamil)', mechanism:'Cardiac calcium-channel and gut smooth-muscle effects.' },
  ],
  practical:[
    { point:'Never combine verapamil with a beta-blocker', detail:'Additive AV nodal block → risk of severe bradycardia/asystole.' },
    { point:'Amlodipine is a good add-on or first-line in older/Black patients', detail:'Volume/resistance-driven hypertension responds well to vasodilatation.' },
  ],
  pearls:['Dihydropyridine ankle oedema is from vasodilatation, not heart failure — combining with an ACEi reduces it.'],
  note:'“Where the channel is blocked” explains everything: vessels (dihydropyridines → BP, oedema) versus heart (verapamil/diltiazem → rate, AV block).',
  links:{ patho:'patho-hypertension', pathoLabel:'Hypertension' },
},
{
  id:'pharma-diuretics', domain:'Pharmacology', class:'Cardiovascular', icon:'💧',
  title:'Diuretics (thiazide & loop)', blurb:'Block renal sodium reabsorption to offload fluid and lower BP — at different nephron sites.',
  examples:['Indapamide, bendroflumethiazide (thiazide/-like)','Furosemide, bumetanide (loop)'],
  moa:[
    '**Thiazides** block the Na⁺/Cl⁻ cotransporter in the distal convoluted tubule → modest natriuresis; long-term BP fall partly via vasodilatation.',
    '**Loop diuretics** block the Na⁺/K⁺/2Cl⁻ cotransporter in the thick ascending limb → powerful natriuresis and venodilatation — used for congestion/oedema.',
    'Both increase distal sodium delivery → enhanced **potassium and hydrogen excretion** (hence hypokalaemia/alkalosis).',
  ],
  effects:[
    { effect:'Lower BP (thiazide)', mechanism:'Initial volume loss, then reduced peripheral resistance.' },
    { effect:'Relieve congestion/oedema (loop)', mechanism:'Brisk natriuresis + venodilatation reduce preload — symptom relief in HF.' },
  ],
  adverse:[
    { ae:'Hypokalaemia, hyponatraemia', mechanism:'Increased distal Na⁺ delivery drives K⁺ loss; free-water handling disturbed.' },
    { ae:'Raised urate (gout), glucose', mechanism:'Reduced urate excretion; metabolic effects of thiazides.' },
    { ae:'Dehydration / AKI / postural drop (loop)', mechanism:'Excessive volume depletion, especially with ACEi/illness.' },
  ],
  practical:[
    { point:'Loop diuretics treat symptoms in HF, not mortality', detail:'They relieve congestion; the prognostic drugs are ACEi/ARNI, beta-blocker, MRA, SGLT2i.' },
    { point:'Monitor U&E', detail:'Check sodium and potassium after starting/changing dose.' },
    { point:'Avoid thiazides if gout/active hyperuricaemia', detail:'They reduce urate excretion and precipitate flares.' },
  ],
  pearls:['Thiazides lose efficacy as eGFR falls (<30) — switch to a loop diuretic.'],
  note:'Same principle (block sodium reabsorption) at two sites: distal tubule (thiazide, gentle, for BP) vs loop (powerful, for congestion). The downstream K⁺/H⁺ loss is shared.',
  links:{ patho:'patho-hypertension', pathoLabel:'Hypertension', case:'cases/heart-failure.html', caseLabel:'Heart failure' },
},
{
  id:'pharma-statin', domain:'Pharmacology', class:'Cardiovascular', icon:'🧈',
  title:'Statins', blurb:'Inhibit cholesterol synthesis to lower LDL — and stabilise plaque beyond the number.',
  examples:['Atorvastatin, rosuvastatin (high-intensity)','Simvastatin, pravastatin'],
  moa:[
    'Inhibit **HMG-CoA reductase**, the rate-limiting enzyme of hepatic cholesterol synthesis.',
    'Lower intracellular cholesterol → hepatocytes **upregulate LDL receptors** → increased clearance of circulating LDL.',
    'Additional **pleiotropic** effects: improved endothelial function, reduced inflammation and plaque stabilisation.',
  ],
  effects:[
    { effect:'Lower LDL cholesterol', mechanism:'↑ Hepatic LDL-receptor uptake.' },
    { effect:'Reduce CV events (primary & secondary prevention)', mechanism:'LDL lowering + plaque stabilisation + anti-inflammatory effects.' },
  ],
  adverse:[
    { ae:'Myalgia ± raised CK; rarely rhabdomyolysis', mechanism:'Muscle effect, dose- and interaction-related.' },
    { ae:'Transient transaminase rise', mechanism:'Hepatic enzyme effect — usually benign.' },
  ],
  practical:[
    { point:'Take simvastatin at night', detail:'Cholesterol synthesis peaks nocturnally; atorvastatin/rosuvastatin have long half-lives so timing matters less.' },
    { point:'Watch interactions (CYP3A4)', detail:'Macrolides, some antifungals and grapefruit raise simvastatin/atorvastatin levels → myopathy risk.' },
    { point:'Check lipids and consider adherence before escalating', detail:'Non-response often reflects adherence; aim for ≥40% non-HDL reduction.' },
  ],
  pearls:['Most “statin intolerance” can be managed by dose reduction, switching agent, or alternate-day dosing.'],
  note:'Statins do more than lower a number — they stabilise the very plaques that rupture. That’s why they cut events even when baseline cholesterol looks “normal”.',
  links:{ patho:'patho-atherosclerosis', pathoLabel:'Atherosclerosis & IHD', calculator:'tools/calculators.html#qrisk3', calculatorLabel:'QRISK3' },
},
{
  id:'pharma-doac', domain:'Pharmacology', class:'Cardiovascular', icon:'🩸',
  title:'DOACs (anticoagulants)', blurb:'Directly inhibit factor Xa or thrombin to prevent clot — predictable, no routine monitoring.',
  examples:['Apixaban, rivaroxaban, edoxaban (factor Xa inhibitors)','Dabigatran (direct thrombin inhibitor)'],
  moa:[
    'Directly and reversibly inhibit a single clotting factor: **factor Xa** (-xabans) or **thrombin/factor IIa** (dabigatran).',
    'This blocks the final common pathway of the coagulation cascade → reduced fibrin/thrombus formation.',
    'Unlike warfarin (which depresses vitamin-K-dependent factor synthesis), DOACs act directly with rapid on/off kinetics.',
  ],
  effects:[
    { effect:'Stroke prevention in AF; treat/prevent VTE', mechanism:'Reduced thrombin generation prevents stasis-driven thrombus (e.g. LA appendage).' },
  ],
  adverse:[
    { ae:'Bleeding (GI, intracranial)', mechanism:'On-target anticoagulant effect — the therapeutic action is also the main risk.' },
  ],
  practical:[
    { point:'Dose-adjust for renal function, age, weight', detail:'Mostly renally cleared (esp. dabigatran) — check eGFR; reduce per criteria to avoid accumulation/bleeding.' },
    { point:'No routine monitoring (vs warfarin INR)', detail:'Predictable pharmacodynamics — but adherence matters because the effect wears off quickly.' },
    { point:'Mind interactions', detail:'Strong P-gp/CYP3A4 inducers/inhibitors alter levels; caution with other antithrombotics.' },
    { point:'Reversal agents exist', detail:'Andexanet (Xa inhibitors), idarucizumab (dabigatran) for major bleeding.' },
  ],
  pearls:['Anticoagulation decision in AF is driven by CHA₂DS₂-VASc, balanced against bleeding (e.g. ORBIT/HAS-BLED).'],
  note:'A single, direct, reversible target gives predictable anticoagulation without monitoring — but the same action that prevents stroke causes bleeding. Renal dosing keeps that balance safe.',
  links:{ patho:'patho-atrial-fibrillation', pathoLabel:'Atrial fibrillation', calculator:'tools/calculators.html#chads-vasc', calculatorLabel:'CHA₂DS₂-VASc' },
},

/* ---------------- ENDOCRINE / METABOLIC ---------------- */
{
  id:'pharma-metformin', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'🍬',
  title:'Metformin', blurb:'First-line in T2DM — reduces hepatic glucose output and improves insulin sensitivity without hypos.',
  examples:['Metformin (standard & modified-release)'],
  moa:[
    'Activates **AMP-activated protein kinase (AMPK)** in the liver, **reducing hepatic gluconeogenesis** (the main effect).',
    'Improves peripheral insulin sensitivity and glucose uptake; modestly reduces intestinal glucose absorption.',
    'Does **not** stimulate insulin secretion — hence no hypoglycaemia and weight neutrality.',
  ],
  effects:[
    { effect:'Lower fasting and overall glucose/HbA1c', mechanism:'Reduced hepatic glucose production + improved sensitivity.' },
    { effect:'Weight-neutral, no hypos', mechanism:'Doesn’t drive insulin secretion.' },
  ],
  adverse:[
    { ae:'GI upset (nausea, diarrhoea)', mechanism:'Gut effects — dose-related; mitigated by MR formulation and titration.' },
    { ae:'B12 deficiency (long-term)', mechanism:'Reduced ileal B12 absorption — monitor.' },
    { ae:'Lactic acidosis (rare)', mechanism:'Accumulation in renal impairment/hypoperfusion impairs lactate handling.' },
  ],
  practical:[
    { point:'Titrate slowly with food', detail:'Minimises GI effects; MR preparation if intolerant.' },
    { point:'Renal dosing / sick-day rules', detail:'Reduce below eGFR 45, stop below 30, and withhold during acute dehydrating illness or before contrast.' },
  ],
  pearls:['Check B12 in long-term users with fatigue or neuropathy.'],
  note:'Metformin lowers glucose by telling the liver to stop making it — not by pushing out insulin. That’s why it doesn’t cause hypos or weight gain, and why it stays first-line.',
  links:{ patho:'patho-t2dm', pathoLabel:'Type 2 diabetes', case:'cases/type-2-diabetes.html', caseLabel:'Type 2 diabetes' },
},
{
  id:'pharma-sglt2', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'🍬',
  title:'SGLT2 inhibitors', blurb:'Make the kidney excrete glucose — with major heart-failure and renal protection.',
  examples:['Dapagliflozin, empagliflozin, canagliflozin'],
  moa:[
    'Block the **sodium–glucose cotransporter 2** in the proximal tubule → reduced glucose (and sodium) reabsorption → **glycosuria** and natriuresis.',
    'Restore tubuloglomerular feedback, lowering intraglomerular pressure (renoprotection); reduce preload/afterload and have favourable cardiac metabolic effects.',
  ],
  effects:[
    { effect:'Lower glucose (insulin-independent)', mechanism:'Urinary glucose loss — works regardless of beta-cell function.' },
    { effect:'Reduce HF hospitalisation & slow CKD', mechanism:'Haemodynamic + tubuloglomerular effects — benefit even in non-diabetics.' },
    { effect:'Modest weight and BP reduction', mechanism:'Calorie (glucose) loss + mild diuresis.' },
  ],
  adverse:[
    { ae:'Genital/urinary infections', mechanism:'Glycosuria feeds candida/bacteria.' },
    { ae:'Euglycaemic DKA', mechanism:'Shift to ketogenesis — can occur with near-normal glucose, esp. during illness/fasting/surgery.' },
    { ae:'Volume depletion', mechanism:'Osmotic diuresis — caution with other diuretics/in frailty.' },
  ],
  practical:[
    { point:'Sick-day rules: withhold during acute illness/fasting/surgery', detail:'Reduces euglycaemic DKA risk.' },
    { point:'Counsel on genital hygiene and DKA symptoms', detail:'Improves adherence and safety.' },
  ],
  pearls:['Now prescribed for HF and CKD even **without** diabetes — a cardiorenal drug that happens to lower glucose.'],
  note:'Dumping glucose in the urine is almost incidental — the reason SGLT2 inhibitors transformed practice is their heart-failure and kidney protection.',
  links:{ patho:'patho-t2dm', pathoLabel:'Type 2 diabetes', case:'cases/heart-failure.html', caseLabel:'Heart failure', case2:'cases/ckd.html', case2Label:'CKD' },
},
{
  id:'pharma-levothyroxine', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'🦋',
  title:'Levothyroxine', blurb:'Synthetic T4 replacement — long half-life, titrated to TSH.',
  examples:['Levothyroxine (T4)'],
  moa:[
    'Synthetic **thyroxine (T4)**, a prohormone converted peripherally to active **T3**, restoring physiological thyroid hormone signalling.',
    'Normalises basal metabolic rate and tissue function; suppresses the elevated TSH via restored negative feedback.',
  ],
  effects:[
    { effect:'Reverse hypothyroid symptoms', mechanism:'Restores metabolic drive across tissues.' },
    { effect:'Normalises TSH', mechanism:'Adequate T4 re-establishes pituitary feedback — our titration target.' },
  ],
  adverse:[
    { ae:'Over-replacement → thyrotoxic features (AF, osteoporosis, palpitations)', mechanism:'Excess hormone — especially risky in elderly/cardiac patients.' },
  ],
  practical:[
    { point:'Recheck TSH ~6–8 weeks after any dose change', detail:'Long T4 half-life (~7 days) means levels and feedback take weeks to stabilise.' },
    { point:'Take on an empty stomach, separated from interacting drugs', detail:'Calcium, iron, PPIs and food impair absorption.' },
    { point:'Start low in elderly/IHD', detail:'Raising metabolic rate increases cardiac oxygen demand.' },
  ],
  pearls:['In pregnancy, requirements rise early — increase dose and monitor TSH closely.'],
  note:'A long half-life makes once-daily dosing possible but means patience: dose, wait 6–8 weeks, recheck TSH, repeat.',
  links:{ patho:'patho-hypothyroidism', pathoLabel:'Hypothyroidism', case:'cases/hypothyroidism.html', caseLabel:'Hypothyroidism' },
},

/* ---------------- RESPIRATORY ---------------- */
{
  id:'pharma-ics', domain:'Pharmacology', class:'Respiratory', icon:'🫁',
  title:'Inhaled corticosteroids (ICS)', blurb:'The anti-inflammatory backbone of asthma — local steroid delivered to the airway.',
  examples:['Beclometasone, budesonide, fluticasone','+ formoterol (MART regimens)'],
  moa:[
    'Steroids enter cells and modulate gene transcription → **broad suppression of airway inflammation** (reduced eosinophils, cytokines, mast-cell activity).',
    'Reduce bronchial hyper-responsiveness and mucosal oedema; inhaled delivery concentrates effect in the airway with limited systemic absorption.',
  ],
  effects:[
    { effect:'Reduce asthma symptoms and exacerbations', mechanism:'Treats the underlying inflammation, not just bronchoconstriction.' },
  ],
  adverse:[
    { ae:'Oral candidiasis, dysphonia', mechanism:'Local steroid deposition in the oropharynx.' },
    { ae:'Systemic effects at high dose', mechanism:'Some absorption — adrenal suppression, growth effects, osteoporosis with long high-dose use.' },
  ],
  practical:[
    { point:'Rinse mouth / use a spacer', detail:'Reduces oropharyngeal deposition → fewer candida/voice effects and better lung delivery.' },
    { point:'It’s preventer, not reliever', detail:'Benefit needs regular use; counsel that it won’t relieve an acute attack.' },
    { point:'In COPD, reserve ICS for eosinophilic/exacerbating phenotype', detail:'Raises pneumonia risk if used indiscriminately.' },
  ],
  pearls:['MART (ICS/formoterol for maintenance + relief) means every reliever puff also delivers anti-inflammatory steroid.'],
  note:'Asthma is inflammation, so its core drug is anti-inflammatory. Over-reliance on the blue (SABA) reliever signals undertreated inflammation and predicts attacks.',
  links:{ patho:'patho-asthma', pathoLabel:'Asthma', case:'cases/asthma.html', caseLabel:'Asthma' },
},
{
  id:'pharma-laba-lama', domain:'Pharmacology', class:'Respiratory', icon:'🫁',
  title:'Bronchodilators (SABA/LABA & SAMA/LAMA)', blurb:'Open the airways via β2-agonism or antimuscarinic action — the backbone of COPD.',
  examples:['Salbutamol (SABA), salmeterol/formoterol (LABA)','Ipratropium (SAMA), tiotropium/umeclidinium (LAMA)'],
  moa:[
    '**β2-agonists** stimulate airway β2-receptors → smooth-muscle relaxation (bronchodilatation) via cyclic AMP.',
    '**Antimuscarinics** block M3 receptors → reduce cholinergic bronchoconstriction and mucus secretion.',
    'Short-acting (SABA/SAMA) for rapid relief; long-acting (LABA/LAMA) for maintenance.',
  ],
  effects:[
    { effect:'Relieve breathlessness / improve airflow', mechanism:'Reduce bronchomotor tone — the reversible component of obstruction.' },
  ],
  adverse:[
    { ae:'Tremor, tachycardia, hypokalaemia (β2)', mechanism:'Systemic β2 effects — drive potassium into cells, stimulate skeletal muscle/heart.' },
    { ae:'Dry mouth, urinary retention (antimuscarinic)', mechanism:'Systemic M-receptor blockade.' },
  ],
  practical:[
    { point:'In COPD, LABA+LAMA is the maintenance backbone', detail:'Bronchodilatation targets the symptomatic, partly reversible component of fixed disease.' },
    { point:'Rising SABA use signals poor control', detail:'In asthma especially — prompts review of inhaled steroid and technique.' },
  ],
  pearls:['Nebulised high-dose β2 agonists can drop potassium — monitor in acute severe asthma/COPD.'],
  note:'Two mechanisms, one goal — relax airway smooth muscle. The systemic spill-over (tremor/tachycardia for β2, dry mouth for antimuscarinics) is predictable from the receptor hit.',
  links:{ patho:'patho-copd', pathoLabel:'COPD', case:'cases/copd.html', caseLabel:'COPD' },
},

/* ---------------- GI / MSK / MENTAL HEALTH / ANALGESIA ---------------- */
{
  id:'pharma-ppi', domain:'Pharmacology', class:'Gastrointestinal', icon:'🔥',
  title:'Proton pump inhibitors (PPIs)', blurb:'Irreversibly block the stomach’s acid pump — the most effective acid suppressants.',
  examples:['Omeprazole, lansoprazole, pantoprazole, esomeprazole'],
  moa:[
    'Irreversibly inhibit the gastric **H⁺/K⁺-ATPase (proton pump)** in parietal cells — the final common step of acid secretion.',
    'Because the block is irreversible, acid suppression outlasts the drug’s plasma level until new pumps are synthesised.',
  ],
  effects:[
    { effect:'Heal oesophagitis and peptic ulcers', mechanism:'Profound acid reduction allows mucosal healing.' },
    { effect:'Gastroprotection with NSAIDs/antiplatelets', mechanism:'Less acid → less mucosal injury.' },
  ],
  adverse:[
    { ae:'↑ Enteric infection risk (e.g. C. difficile)', mechanism:'Loss of the gastric acid barrier.' },
    { ae:'Hypomagnesaemia, low B12, possible fracture risk (long-term)', mechanism:'Altered absorption with chronic high-dose use.' },
    { ae:'May mask gastric cancer symptoms', mechanism:'Symptom relief can delay diagnosis — assess ALARM features.' },
  ],
  practical:[
    { point:'Take ~30 min before food', detail:'Pumps are most active after a meal — pre-dosing maximises the irreversible block.' },
    { point:'Stop before H. pylori testing', detail:'PPIs suppress the organism and cause false-negative breath/stool tests.' },
    { point:'Review and step down long-term use', detail:'“Lowest effective dose”; deprescribe where possible.' },
  ],
  pearls:['Persistent dyspepsia with ALARM symptoms needs endoscopy, not an indefinite PPI.'],
  note:'Hitting the final acid step irreversibly is why PPIs outperform H2 blockers — and why the loss of the acid barrier explains their main long-term risks.',
  links:{ patho:'patho-gord', pathoLabel:'GORD & peptic ulcer', case:'cases/dyspepsia.html', caseLabel:'Dyspepsia' },
},
{
  id:'pharma-nsaid', domain:'Pharmacology', class:'Analgesia & MSK', icon:'💊',
  title:'NSAIDs', blurb:'Block COX/prostaglandins — anti-inflammatory and analgesic, but at GI, renal and CV cost.',
  examples:['Ibuprofen, naproxen, diclofenac','Celecoxib (COX-2 selective)'],
  moa:[
    'Inhibit **cyclo-oxygenase (COX)**, reducing prostaglandin synthesis. Prostaglandins drive inflammation, pain sensitisation and fever.',
    '**COX-1** maintains gastric mucosa, renal perfusion and platelet function; **COX-2** is induced at sites of inflammation. Non-selective NSAIDs hit both.',
  ],
  effects:[
    { effect:'Analgesia, anti-inflammatory, antipyretic', mechanism:'Reduced prostaglandin-driven pain, inflammation and fever.' },
  ],
  adverse:[
    { ae:'GI ulceration/bleeding', mechanism:'Loss of COX-1 prostaglandin protection of gastric mucosa.' },
    { ae:'Renal impairment, fluid retention, raised BP', mechanism:'Prostaglandins maintain renal perfusion — blocking them is dangerous in CKD/HF/dehydration.' },
    { ae:'Increased CV risk', mechanism:'COX-2-related prothrombotic shift (esp. diclofenac, high-dose).' },
  ],
  practical:[
    { point:'Avoid the “triple whammy”', detail:'NSAID + ACEi/ARB + diuretic markedly raises AKI risk.' },
    { point:'Lowest dose, shortest duration; co-prescribe PPI if needed', detail:'Balances benefit against GI/renal/CV harm.' },
    { point:'Avoid in heart failure and significant CKD', detail:'Fluid retention and falling renal perfusion.' },
  ],
  pearls:['Naproxen has the most favourable CV profile of the traditional NSAIDs.'],
  note:'Every NSAID benefit and harm flows from one fact — prostaglandins do more than cause pain; they also protect the stomach, kidney and vasculature.',
  links:{ patho:'patho-gout', pathoLabel:'Gout', case:'cases/osteoarthritis.html', caseLabel:'Osteoarthritis' },
},
{
  id:'pharma-opioids', domain:'Pharmacology', class:'Analgesia & MSK', icon:'💊',
  title:'Opioids', mechanism:[], blurb:'Agonists at opioid receptors — effective acute analgesia, but tolerance, dependence and poor results in chronic pain.',
  examples:['Codeine, dihydrocodeine (weak)','Morphine, oxycodone, fentanyl (strong)','Tramadol (opioid + monoamine effects)'],
  moa:[
    'Agonists at **µ (mu) opioid receptors** in the CNS and periphery → reduced neuronal excitability and neurotransmitter release → dampened pain transmission and altered pain perception.',
    'Also act on brainstem centres (respiration, cough) and the gut (reduced motility).',
  ],
  effects:[
    { effect:'Analgesia (acute/cancer pain)', mechanism:'µ-receptor inhibition of pain pathways.' },
  ],
  adverse:[
    { ae:'Constipation (does not tolerate)', mechanism:'Gut µ-receptors slow motility — co-prescribe laxatives.' },
    { ae:'Respiratory depression, sedation', mechanism:'Brainstem µ effect — the cause of overdose death.' },
    { ae:'Tolerance, dependence, hyperalgesia', mechanism:'Receptor adaptation with chronic use — escalating dose, paradoxical worsening.' },
  ],
  practical:[
    { point:'Limited role in chronic non-cancer pain', detail:'Poor long-term efficacy and major harm — set functional goals and review; avoid dose escalation.' },
    { point:'Codeine/tramadol depend on CYP2D6', detail:'Variable conversion to active metabolite → unpredictable effect; avoid codeine in breastfeeding/ultra-rapid metabolisers.' },
    { point:'Always co-prescribe a laxative', detail:'Constipation is near-universal and does not abate.' },
  ],
  pearls:['Naloxone reverses opioid toxicity but has a short half-life — repeated doses/infusion may be needed.'],
  note:'Opioids excel in acute and cancer pain but disappoint in chronic pain, where tolerance and hyperalgesia mean more drug, more harm, no more relief.',
  links:{ case:'cases/low-back-pain.html', caseLabel:'Low back pain' },
},
{
  id:'pharma-ssri', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🧠',
  title:'SSRIs', blurb:'Raise synaptic serotonin — first-line for depression and anxiety, with a delayed clinical effect.',
  examples:['Sertraline, citalopram, escitalopram, fluoxetine, paroxetine'],
  moa:[
    'Block the presynaptic **serotonin reuptake transporter (SERT)** → more serotonin in the synapse.',
    'Synaptic serotonin rises within hours, but **downstream receptor adaptation and neuroplastic change** over weeks underlie the clinical benefit.',
  ],
  effects:[
    { effect:'Improve mood and anxiety', mechanism:'Enhanced serotonergic signalling + neuroplastic adaptation.' },
  ],
  adverse:[
    { ae:'Early nausea, GI upset, headache, jitteriness', mechanism:'Acute serotonergic effects — often settle in 1–2 weeks.' },
    { ae:'Hyponatraemia (esp. elderly)', mechanism:'SIADH-like effect.' },
    { ae:'Bleeding risk; QT prolongation (citalopram)', mechanism:'Platelet serotonin depletion; cardiac repolarisation effect.' },
    { ae:'Sexual dysfunction; discontinuation symptoms', mechanism:'Serotonergic effect; receptor re-adaptation on stopping.' },
  ],
  practical:[
    { point:'Counsel on the 2–6 week lag and early side-effects', detail:'Prevents premature discontinuation; benefit follows neuroplastic change.' },
    { point:'Review early, especially under-25s', detail:'Activation can precede mood improvement — monitor for increased agitation/suicidality.' },
    { point:'Taper to stop; screen for bipolar first', detail:'Avoids discontinuation symptoms and antidepressant-induced mania.' },
  ],
  pearls:['Sertraline is a sensible first choice (broad evidence, relatively few interactions); citalopram/escitalopram are dose-limited by QT.'],
  note:'The delay between raising serotonin (hours) and feeling better (weeks) is the central clinical fact — it tells you the mechanism is neuroplastic adaptation, and it dictates how you counsel patients.',
  links:{ patho:'patho-depression', pathoLabel:'Depression', case:'cases/depression.html', caseLabel:'Depression', case2:'cases/anxiety.html', case2Label:'Generalised anxiety' },
},
{
  id:'pharma-bisphosphonate', domain:'Pharmacology', class:'Musculoskeletal', icon:'🦴',
  title:'Bisphosphonates', blurb:'Bind bone and switch off osteoclasts to reduce fracture risk in osteoporosis.',
  examples:['Alendronate, risedronate (oral)','Zoledronate (IV)'],
  moa:[
    'Bind avidly to **hydroxyapatite** at sites of bone resorption; taken up by **osteoclasts**, they impair the enzymes (e.g. farnesyl pyrophosphate synthase) osteoclasts need to function → reduced resorption and osteoclast apoptosis.',
    'Tipping remodelling back toward formation raises BMD and reduces fracture risk.',
  ],
  effects:[
    { effect:'Reduce vertebral/hip fracture risk', mechanism:'Less osteoclastic resorption → higher BMD, preserved architecture.' },
  ],
  adverse:[
    { ae:'Oesophagitis (oral)', mechanism:'Direct mucosal irritation — strict dosing instructions needed.' },
    { ae:'Hypocalcaemia', mechanism:'Reduced bone calcium release — correct vitamin D/calcium deficiency first.' },
    { ae:'Osteonecrosis of jaw / atypical femoral fracture (rare, long-term)', mechanism:'Over-suppressed remodelling.' },
  ],
  practical:[
    { point:'Take upright, fasting, with plain water; stay upright 30 min', detail:'Maximises poor oral absorption and prevents oesophagitis.' },
    { point:'Ensure dental health and replete vitamin D/calcium first', detail:'Reduces ONJ and hypocalcaemia risk.' },
    { point:'Consider a drug holiday after ~5 years if low risk', detail:'Long skeletal retention sustains effect; reduces rare long-term harms.' },
  ],
  pearls:['IV zoledronate is useful where oral absorption/adherence is a problem (e.g. post-hip-fracture).'],
  note:'Bisphosphonates work by silencing the osteoclast. The fussy dosing rules exist because oral absorption is tiny and the drug irritates the oesophagus — get the instructions right or it won’t work and may harm.',
  links:{ patho:'patho-osteoporosis', pathoLabel:'Osteoporosis', case:'cases/osteoporosis.html', caseLabel:'Osteoporosis', calculator:'tools/calculators.html#frax', calculatorLabel:'FRAX' },
},

]);
