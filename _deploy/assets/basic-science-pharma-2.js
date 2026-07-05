/* Reasoning GP — Basic Science: PHARMACOLOGY (set 2: Cardiovascular + Diabetes/Endocrine)
   Same schema as basic-science-pharma.js. Educational reasoning aid — verify doses against BNF. */
window.RGP_BASICSCIENCE = (window.RGP_BASICSCIENCE || []).concat([

/* ---------------- CARDIOVASCULAR ---------------- */
{
  id:'pharma-antiplatelets', domain:'Pharmacology', class:'Cardiovascular', icon:'🩸',
  title:'Antiplatelets (aspirin & clopidogrel)', blurb:'Stop platelets clumping — the cornerstone of secondary prevention after MI, stroke and in vascular disease.',
  examples:['Aspirin 75 mg (irreversible COX-1)','Clopidogrel, prasugrel, ticagrelor (P2Y12 blockers)','Dipyridamole'],
  moa:[
    'Aspirin **irreversibly** acetylates platelet COX-1 → no thromboxane A₂ → platelets cannot aggregate for their ~7–10 day lifespan.',
    'Clopidogrel/ticagrelor block the platelet **P2Y12 ADP receptor** → reduced activation by a different pathway (hence dual antiplatelet therapy combines them).',
    'Platelets are anucleate and cannot make new enzyme — effect lasts until new platelets are produced.',
  ],
  effects:[
    { effect:'Secondary prevention of arterial events', mechanism:'Fewer platelet-rich (“white”) thrombi in coronary/cerebral/peripheral arteries.' },
    { effect:'Dual therapy after ACS/stent', mechanism:'Two pathways blocked → greater protection while endothelium heals over a stent.' },
  ],
  adverse:[
    { ae:'GI bleeding / dyspepsia', mechanism:'Loss of COX-1-derived protective gastric prostaglandins + impaired haemostasis.' },
    { ae:'Bruising / bleeding', mechanism:'Impaired platelet plug formation.' },
    { ae:'Aspirin: bronchospasm in sensitive asthmatics', mechanism:'Shunting of arachidonic acid to leukotrienes.' },
  ],
  practical:[
    { point:'Not for primary prevention routinely', detail:'Bleeding risk outweighs benefit in most people without established CVD.' },
    { point:'Consider PPI cover', detail:'In higher GI-bleed risk, especially on dual therapy or with an anticoagulant.' },
    { point:'Stop ~7 days before high-risk surgery', detail:'Because the effect is irreversible — balance against thrombotic risk.' },
  ],
  pearls:['Aspirin’s effect is irreversible; the bleeding risk persists until the platelet pool turns over (~a week).'],
  note:'“Irreversible COX-1 acetylation” explains both the lasting cardioprotection and why you stop it a week before surgery.',
  links:{ patho:'patho-acs', pathoLabel:'Acute coronary syndrome', case:'cases/chest-pain.html', caseLabel:'Chest pain' },
},
{
  id:'pharma-warfarin', domain:'Pharmacology', class:'Cardiovascular', icon:'🩸',
  title:'Warfarin', blurb:'A vitamin-K-antagonist anticoagulant — cheap, reversible and monitored, still first-line for mechanical valves and severe renal impairment.',
  examples:['Warfarin (target INR 2–3 for AF/VTE; 2.5–3.5 for mechanical valves)'],
  moa:[
    'Inhibits **vitamin K epoxide reductase** → cannot recycle vitamin K → reduced synthesis of clotting factors **II, VII, IX, X** and proteins C & S.',
    'Effect is delayed (existing factors must clear) — full anticoagulation takes several days.',
    'A narrow therapeutic index with huge diet/drug interaction means INR monitoring is essential.',
  ],
  effects:[
    { effect:'Prevents thromboembolism (AF, VTE, valves)', mechanism:'Depleted functional clotting factors → slower coagulation cascade.' },
  ],
  adverse:[
    { ae:'Bleeding', mechanism:'Over-anticoagulation; reversible with vitamin K / PCC / FFP.' },
    { ae:'Initial procoagulant state / skin necrosis', mechanism:'Protein C (short half-life) falls first — bridge with heparin if high risk.' },
    { ae:'Teratogenic', mechanism:'Crosses placenta → avoid in pregnancy (use LMWH).' },
  ],
  practical:[
    { point:'Countless interactions', detail:'Enzyme inducers (rifampicin, carbamazepine) ↓ INR; inhibitors (many antibiotics, amiodarone, cranberry/alcohol) ↑ INR.' },
    { point:'Consistent vitamin K intake', detail:'Big swings in green-veg/alcohol destabilise the INR — keep intake steady, don’t avoid.' },
    { point:'Reversal', detail:'Vitamin K for high INR; PCC (Beriplex) for major bleeding.' },
  ],
  pearls:['DOACs have replaced warfarin for most non-valvular AF/VTE, but warfarin remains essential for mechanical valves and antiphospholipid syndrome.'],
  note:'Blocking vitamin-K recycling depletes factors II, VII, IX, X — the delay, the monitoring and the interactions all flow from that one step.',
  links:{ patho:'patho-af', pathoLabel:'Atrial fibrillation', calculator:'tools/calculators.html', calculatorLabel:'CHA₂DS₂-VASc / HAS-BLED' },
},
{
  id:'pharma-heparin', domain:'Pharmacology', class:'Cardiovascular', icon:'💉',
  title:'Heparins & LMWH', blurb:'Rapid-onset injectable anticoagulants for treatment and prevention of VTE, and bridging.',
  examples:['Enoxaparin, dalteparin, tinzaparin (LMWH)','Unfractionated heparin (UFH) — infusion','Fondaparinux'],
  moa:[
    'Potentiate **antithrombin III**, which then inactivates clotting factors.',
    'UFH inhibits both **thrombin (IIa)** and **factor Xa**; LMWH preferentially inhibits **factor Xa** → more predictable dosing, no routine monitoring.',
    'Given parenterally because they are not absorbed orally.',
  ],
  effects:[
    { effect:'Immediate anticoagulation', mechanism:'Unlike warfarin there is no synthesis delay — works within hours.' },
    { effect:'VTE prophylaxis & treatment, ACS, bridging', mechanism:'Antithrombin-mediated factor inhibition.' },
  ],
  adverse:[
    { ae:'Bleeding', mechanism:'Anticoagulant effect; UFH reversible with protamine.' },
    { ae:'Heparin-induced thrombocytopenia (HIT)', mechanism:'Antibodies to heparin–PF4 → paradoxical thrombosis; commoner with UFH.' },
    { ae:'Hyperkalaemia (long use)', mechanism:'Aldosterone suppression.' },
  ],
  practical:[
    { point:'LMWH renally cleared', detail:'Reduce dose / monitor anti-Xa in significant renal impairment; UFH preferred if eGFR very low.' },
    { point:'Weight-based dosing', detail:'Treatment-dose LMWH is by body weight; prophylaxis is fixed-dose.' },
    { point:'Anticoagulant of choice in pregnancy', detail:'Does not cross the placenta.' },
  ],
  pearls:['LMWH’s predictable anti-Xa effect is why it needs no routine monitoring, unlike UFH.'],
  note:'Both work via antithrombin — the difference is which factor they hit, which sets the monitoring and renal-dosing rules.',
  links:{ patho:'patho-dvt-pe', pathoLabel:'VTE (DVT & PE)' },
},
{
  id:'pharma-nitrates', domain:'Pharmacology', class:'Cardiovascular', icon:'💊',
  title:'Nitrates (GTN & isosorbide)', blurb:'Donate nitric oxide to dilate veins — relieving angina by reducing the heart’s workload.',
  examples:['GTN spray/sublingual (acute)','Isosorbide mononitrate (prophylaxis)'],
  moa:[
    'Metabolised to **nitric oxide (NO)** → activates guanylate cyclase → ↑ cGMP → vascular smooth-muscle relaxation.',
    'Predominantly **venodilatation** → reduced preload → less ventricular wall tension and myocardial oxygen demand.',
    'Also dilates coronary arteries and (at higher doses) arteries → reduced afterload.',
  ],
  effects:[
    { effect:'Rapid relief of angina', mechanism:'↓ Preload and coronary dilation restore the oxygen supply–demand balance.' },
  ],
  adverse:[
    { ae:'Headache, flushing', mechanism:'Cerebral and cutaneous vasodilatation.' },
    { ae:'Postural hypotension / dizziness', mechanism:'Venous pooling reduces venous return.' },
    { ae:'Tolerance', mechanism:'Sustained exposure depletes the response — needs a nitrate-free interval.' },
  ],
  practical:[
    { point:'Nitrate-free interval', detail:'Take the second ISMN dose after ~8 h (not 12 h) to avoid tolerance.' },
    { point:'Never with PDE5 inhibitors', detail:'Sildenafil + nitrate → catastrophic hypotension (both raise cGMP).' },
    { point:'GTN technique', detail:'Sit down; repeat after 5 min; call 999 if pain persists after the second dose.' },
  ],
  pearls:['Nitrate + sildenafil is a dangerous combination — always ask about erectile-dysfunction drugs before prescribing.'],
  note:'NO → cGMP → venodilatation → less preload: the same pathway explains relief of angina, the headache, and the fatal interaction with PDE5 inhibitors.',
  links:{ patho:'patho-acs', pathoLabel:'Stable angina / ACS', case:'cases/chest-pain.html', caseLabel:'Chest pain' },
},
{
  id:'pharma-digoxin', domain:'Pharmacology', class:'Cardiovascular', icon:'🫀',
  title:'Digoxin', blurb:'A cardiac glycoside that slows the ventricular rate in AF and gives modest inotropy in heart failure.',
  examples:['Digoxin (narrow therapeutic index)'],
  moa:[
    'Inhibits the **Na⁺/K⁺-ATPase** → ↑ intracellular Na⁺ → ↓ Na⁺/Ca²⁺ exchange → ↑ intracellular calcium → increased contractility.',
    'Enhances **vagal tone** → slows AV-node conduction → rate control in AF.',
  ],
  effects:[
    { effect:'Ventricular rate control in AF', mechanism:'Increased vagal slowing of the AV node (best at rest).' },
    { effect:'Mild positive inotropy', mechanism:'Raised intracellular calcium.' },
  ],
  adverse:[
    { ae:'Toxicity: nausea, visual halos, arrhythmia', mechanism:'Narrow therapeutic window; worsened by the factors below.' },
    { ae:'Toxicity potentiated by hypokalaemia', mechanism:'Low K⁺ lets digoxin bind the pump more — diuretics raise the risk.' },
  ],
  practical:[
    { point:'Watch K⁺, Mg²⁺ and renal function', detail:'Renally excreted — AKI or hypokalaemia precipitates toxicity.' },
    { point:'Better for sedentary patients', detail:'Vagal effect controls resting but not exertional rate.' },
    { point:'Digoxin-specific antibody (DigiFab)', detail:'For life-threatening toxicity.' },
  ],
  pearls:['A patient on digoxin + a thiazide/loop diuretic who becomes hypokalaemic is the classic toxicity setup.'],
  note:'Inhibiting the Na⁺/K⁺ pump raises calcium (inotropy) while vagal tone slows the AV node — and low potassium tips it into toxicity.',
  links:{ patho:'patho-af', pathoLabel:'Atrial fibrillation', case:'cases/heart-failure.html', caseLabel:'Heart failure' },
},
{
  id:'pharma-amiodarone', domain:'Pharmacology', class:'Cardiovascular', icon:'🫀',
  title:'Amiodarone', blurb:'A broad-spectrum antiarrhythmic with a huge volume of distribution and multi-system toxicity.',
  examples:['Amiodarone (loading then maintenance)'],
  moa:[
    'Class III action: blocks **potassium channels** → prolongs repolarisation and refractory period (longer QT).',
    'Also has class I (Na⁺), II (β) and IV (Ca²⁺) actions — hence effective across many arrhythmias.',
    'Extremely **lipophilic** → accumulates in tissues, half-life of weeks–months.',
  ],
  effects:[
    { effect:'Restores/maintains sinus rhythm; rate control', mechanism:'Multi-channel blockade stabilises atrial and ventricular arrhythmias.' },
  ],
  adverse:[
    { ae:'Thyroid dysfunction (hypo- or hyper-)', mechanism:'High iodine content + direct effects on the gland.' },
    { ae:'Pulmonary fibrosis', mechanism:'Cumulative lung toxicity — monitor for breathlessness/cough.' },
    { ae:'Hepatotoxicity, corneal deposits, photosensitivity, slate-grey skin', mechanism:'Tissue accumulation.' },
  ],
  practical:[
    { point:'Baseline + 6-monthly TFTs and LFTs', detail:'Plus a baseline CXR; monitor for lung/liver/thyroid toxicity.' },
    { point:'Many interactions', detail:'Raises digoxin and warfarin levels — halve their doses and monitor.' },
    { point:'Counsel on sun protection', detail:'Marked photosensitivity.' },
  ],
  pearls:['Amiodarone’s months-long half-life means side-effects and interactions persist long after stopping.'],
  note:'One drug, four antiarrhythmic classes and four organs of toxicity — its lipophilicity explains both the long half-life and the tissue side-effects.',
  links:{ patho:'patho-af', pathoLabel:'Atrial fibrillation' },
},
{
  id:'pharma-ivabradine', domain:'Pharmacology', class:'Cardiovascular', icon:'🫀',
  title:'Ivabradine', blurb:'Slows the heart purely by acting on the sinus node — useful when beta-blockers are contraindicated or insufficient.',
  examples:['Ivabradine (in HF and chronic stable angina)'],
  moa:[
    'Selectively inhibits the **“funny” (If) current** in the sinoatrial node → slows the rate of spontaneous depolarisation → lower heart rate.',
    'No effect on contractility, conduction below the SA node, or blood pressure.',
  ],
  effects:[
    { effect:'Rate reduction without negative inotropy', mechanism:'Pure SA-node slowing — preserves contractility, helpful in HFrEF.' },
  ],
  adverse:[
    { ae:'Luminous phenomena (phosphenes)', mechanism:'If-channels in the retina — transient bright spots.' },
    { ae:'Bradycardia', mechanism:'Excessive SA-node slowing.' },
  ],
  practical:[
    { point:'Only works in sinus rhythm', detail:'Ineffective in AF (no SA-node pacemaker to slow).' },
    { point:'Use when HR ≥75 despite beta-blocker', detail:'Or when beta-blockers are not tolerated.' },
  ],
  pearls:['Visual “halos/phosphenes” are the giveaway side-effect, reflecting retinal If-channels.'],
  note:'A targeted If-current blocker: it slows the sinus node and nothing else — so it needs the patient to be in sinus rhythm.',
  links:{ case:'cases/heart-failure.html', caseLabel:'Heart failure' },
},
{
  id:'pharma-mra', domain:'Pharmacology', class:'Cardiovascular', icon:'🫀',
  title:'Mineralocorticoid receptor antagonists', blurb:'Spironolactone/eplerenone — potassium-sparing diuretics with major mortality benefit in heart failure.',
  examples:['Spironolactone','Eplerenone (more selective, less gynaecomastia)'],
  moa:[
    'Block the **aldosterone (mineralocorticoid) receptor** in the distal nephron → less Na⁺ reabsorption and **K⁺ retention**.',
    'Also block aldosterone’s pro-fibrotic effects on the myocardium → remodelling benefit in HF.',
  ],
  effects:[
    { effect:'Mortality benefit in HFrEF', mechanism:'Anti-fibrotic + neurohormonal blockade beyond simple diuresis.' },
    { effect:'Diuresis in resistant hypertension / ascites', mechanism:'Aldosterone antagonism adds to other diuretics.' },
  ],
  adverse:[
    { ae:'Hyperkalaemia', mechanism:'K⁺ retention — dangerous with ACEi/ARB and renal impairment.' },
    { ae:'Gynaecomastia (spironolactone)', mechanism:'Off-target anti-androgen/progesterone effects — switch to eplerenone.' },
  ],
  practical:[
    { point:'Monitor K⁺ and renal function', detail:'Especially when combined with an ACEi/ARB (triple RAAS blockade is high-risk).' },
    { point:'Spironolactone in resistant HTN', detail:'4th-line add-on if K⁺ ≤4.5 mmol/L.' },
  ],
  pearls:['Combining an MRA with an ACEi/ARB is effective but the commonest cause of dangerous hyperkalaemia in HF — check the bloods.'],
  note:'Block aldosterone and you get K⁺-sparing diuresis AND anti-fibrotic cardiac benefit — but also the hyperkalaemia that limits the dose.',
  links:{ case:'cases/heart-failure.html', caseLabel:'Heart failure', patho:'patho-hypertension', pathoLabel:'Hypertension' },
},
{
  id:'pharma-alphablocker', domain:'Pharmacology', class:'Cardiovascular', icon:'💊',
  title:'Alpha-blockers (doxazosin, tamsulosin)', blurb:'Relax smooth muscle in vessels and the prostate — for resistant hypertension and BPH.',
  examples:['Doxazosin (HTN)','Tamsulosin, alfuzosin (BPH, α1A-selective)'],
  moa:[
    'Block **α1-adrenoceptors** on vascular smooth muscle → vasodilatation → lower BP.',
    'In the prostate/bladder neck, α1A blockade relaxes smooth muscle → improved urinary flow in BPH.',
  ],
  effects:[
    { effect:'BP lowering (resistant HTN add-on)', mechanism:'Reduced arterial tone.' },
    { effect:'Improved LUTS in BPH', mechanism:'Relaxed prostatic/bladder-neck smooth muscle.' },
  ],
  adverse:[
    { ae:'First-dose / postural hypotension', mechanism:'Sudden vasodilatation — take the first dose at night.' },
    { ae:'Floppy iris syndrome', mechanism:'α1A blockade in the iris — warn the ophthalmologist before cataract surgery.' },
    { ae:'Retrograde ejaculation', mechanism:'Relaxed bladder-neck sphincter.' },
  ],
  practical:[
    { point:'Warn about the first dose', detail:'Dizziness/syncope — start low, at bedtime.' },
    { point:'Tell cataract surgeons', detail:'Tamsulosin causes intra-operative floppy iris syndrome.' },
  ],
  pearls:['Always ask about planned cataract surgery before starting tamsulosin.'],
  note:'α1 blockade relaxes both arteries and prostatic smooth muscle — explaining the BP fall, the postural drop and the urological uses.',
  links:{ patho:'patho-bph', pathoLabel:'Benign prostatic hyperplasia' },
},
{
  id:'pharma-ezetimibe', domain:'Pharmacology', class:'Cardiovascular', icon:'💊',
  title:'Ezetimibe', blurb:'Blocks intestinal cholesterol absorption — the usual add-on when a statin alone is not enough.',
  examples:['Ezetimibe (often with a statin)'],
  moa:[
    'Inhibits the **NPC1L1 transporter** in the small intestine → less dietary/biliary cholesterol absorbed.',
    'The liver upregulates LDL receptors to compensate → lower circulating LDL.',
  ],
  effects:[
    { effect:'Additional ~15–20% LDL reduction', mechanism:'Complements statins (which block synthesis) by a different mechanism.' },
  ],
  adverse:[
    { ae:'Generally well tolerated', mechanism:'Minimal systemic absorption.' },
    { ae:'Occasional myalgia / deranged LFTs', mechanism:'Especially when combined with a statin.' },
  ],
  practical:[
    { point:'Add when statin alone insufficient', detail:'Or as monotherapy in true statin intolerance.' },
    { point:'No CYP interactions', detail:'Unlike statins — useful in polypharmacy.' },
  ],
  pearls:['Statin blocks synthesis, ezetimibe blocks absorption — the two together hit cholesterol from both sides.'],
  note:'Different target (gut absorption vs hepatic synthesis) means additive LDL lowering with the statin.',
  links:{ pharma:'pharma-statins', pharmaLabel:'Statins' },
},
{
  id:'pharma-pcsk9', domain:'Pharmacology', class:'Cardiovascular', icon:'💉',
  title:'PCSK9 inhibitors', blurb:'Injectable monoclonal antibodies that dramatically lower LDL in high-risk or familial hypercholesterolaemia.',
  examples:['Alirocumab, evolocumab (specialist-initiated)','Inclisiran (siRNA, 6-monthly)'],
  moa:[
    'PCSK9 normally tags hepatic **LDL receptors** for destruction. Inhibiting it lets receptors recycle → far more LDL cleared.',
    'Inclisiran silences PCSK9 production via RNA interference.',
  ],
  effects:[
    { effect:'~50–60% LDL reduction', mechanism:'More LDL receptors on hepatocytes.' },
  ],
  adverse:[
    { ae:'Injection-site reactions', mechanism:'Subcutaneous monoclonal antibody.' },
  ],
  practical:[
    { point:'Specialist / NICE-criteria use', detail:'For FH or established CVD not at target on maximal oral therapy.' },
    { point:'Inclisiran is twice-yearly', detail:'Aids adherence.' },
  ],
  pearls:['PCSK9 inhibition “rescues” LDL receptors from degradation — the opposite problem to familial hypercholesterolaemia where receptors are faulty.'],
  note:'Protect the LDL receptor from PCSK9-mediated destruction and the liver clears far more LDL.',
  links:{ pharma:'pharma-statins', pharmaLabel:'Statins' },
},
{
  id:'pharma-fibrates', domain:'Pharmacology', class:'Cardiovascular', icon:'💊',
  title:'Fibrates', blurb:'Lower triglycerides via PPAR-α activation — used mainly for severe hypertriglyceridaemia.',
  examples:['Fenofibrate, bezafibrate'],
  moa:[
    'Activate **PPAR-α** → ↑ lipoprotein lipase activity and fatty-acid oxidation → markedly lower triglycerides, modest HDL rise.',
  ],
  effects:[
    { effect:'Large triglyceride reduction', mechanism:'Enhanced VLDL/triglyceride clearance.' },
  ],
  adverse:[
    { ae:'Myopathy (esp. with a statin)', mechanism:'Additive muscle toxicity — gemfibrozil is worst, avoid with statins.' },
    { ae:'Gallstones', mechanism:'Increased biliary cholesterol.' },
  ],
  practical:[
    { point:'Main role: TG >10 mmol/L', detail:'To prevent pancreatitis.' },
    { point:'Caution combining with statins', detail:'Use fenofibrate (not gemfibrozil) if combination needed.' },
  ],
  pearls:['Very high triglycerides risk acute pancreatitis — that, not LDL, is the fibrate niche.'],
  note:'PPAR-α activation ramps up triglyceride clearance — the benefit and the statin-interaction myopathy both follow.',
  links:{ pharma:'pharma-statins', pharmaLabel:'Statins' },
},
{
  id:'pharma-nicorandil', domain:'Pharmacology', class:'Cardiovascular', icon:'💊',
  title:'Nicorandil', blurb:'A potassium-channel-opener antianginal with a notorious ulcer side-effect.',
  examples:['Nicorandil (add-on for angina)'],
  moa:[
    'Opens **ATP-sensitive K⁺ channels** → arterial dilatation; plus a nitrate moiety → venodilatation.',
    'Dual dilatation reduces both preload and afterload.',
  ],
  effects:[
    { effect:'Anti-anginal', mechanism:'Balanced arterial + venous dilation lowers cardiac oxygen demand.' },
  ],
  adverse:[
    { ae:'Painful mucosal/skin ulceration', mechanism:'Oral, anal, GI and skin ulcers — often misdiagnosed; resolve on stopping.' },
    { ae:'Headache', mechanism:'Vasodilatation.' },
  ],
  practical:[
    { point:'Suspect with any non-healing ulcer', detail:'Mouth, perianal or peristomal ulcers on nicorandil → stop the drug.' },
  ],
  pearls:['Persistent oral or anal ulcers in a cardiac patient? Check whether they’re on nicorandil.'],
  note:'K⁺-channel opening explains the antianginal effect; the ulcers are the unusual, reversible class side-effect.',
  links:{ patho:'patho-acs', pathoLabel:'Stable angina' },
},

/* ---------------- DIABETES & ENDOCRINE ---------------- */
{
  id:'pharma-sulfonylureas', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'🩸',
  title:'Sulfonylureas (gliclazide)', blurb:'Stimulate insulin release — effective and cheap, but cause weight gain and hypoglycaemia.',
  examples:['Gliclazide, glimepiride, glipizide'],
  moa:[
    'Block the **K-ATP channel** on pancreatic β-cells → depolarisation → calcium influx → **insulin secretion** — independent of glucose level.',
  ],
  effects:[
    { effect:'Rapid HbA1c reduction', mechanism:'Increased endogenous insulin.' },
  ],
  adverse:[
    { ae:'Hypoglycaemia', mechanism:'Insulin released regardless of glucose — risk if meals missed; worse in renal impairment/elderly.' },
    { ae:'Weight gain', mechanism:'Anabolic effect of insulin.' },
  ],
  practical:[
    { point:'Sick-day & DVLA advice', detail:'Hypo risk means counselling on driving and illness; avoid long-acting agents in the elderly.' },
    { point:'Needs functioning β-cells', detail:'Loses efficacy as β-cell mass declines over time.' },
  ],
  pearls:['Unlike metformin and gliptins, sulfonylureas cause hypoglycaemia because they release insulin even when glucose is normal.'],
  note:'Closing the β-cell K-ATP channel forces insulin out whatever the glucose — hence both the efficacy and the hypos.',
  links:{ patho:'patho-t2dm', pathoLabel:'Type 2 diabetes', case:'cases/type-2-diabetes.html', caseLabel:'T2DM' },
},
{
  id:'pharma-dpp4', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'🩸',
  title:'DPP-4 inhibitors (gliptins)', blurb:'Boost the body’s own incretin hormones — weight-neutral, low hypo risk.',
  examples:['Sitagliptin, linagliptin, alogliptin'],
  moa:[
    'Inhibit **dipeptidyl peptidase-4**, the enzyme that degrades incretins (GLP-1, GIP) → higher incretin levels → **glucose-dependent** insulin release and reduced glucagon.',
  ],
  effects:[
    { effect:'Modest HbA1c reduction, weight-neutral', mechanism:'Glucose-dependent action → little hypoglycaemia alone.' },
  ],
  adverse:[
    { ae:'Pancreatitis (rare)', mechanism:'Stop if persistent severe abdominal pain.' },
    { ae:'Generally very well tolerated', mechanism:'—' },
  ],
  practical:[
    { point:'Linagliptin in renal impairment', detail:'Not renally cleared — no dose adjustment needed.' },
    { point:'Don’t combine with GLP-1 agonists', detail:'Same incretin pathway — no added benefit.' },
  ],
  pearls:['“Glucose-dependent” incretin action is why gliptins rarely cause hypos on their own.'],
  note:'Stopping incretin breakdown raises insulin only when glucose is high — the basis of the low-hypo, weight-neutral profile.',
  links:{ patho:'patho-t2dm', pathoLabel:'Type 2 diabetes' },
},
{
  id:'pharma-glp1', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'💉',
  title:'GLP-1 receptor agonists', blurb:'Injectable incretin mimetics that lower glucose, drive weight loss and protect the heart.',
  examples:['Semaglutide, dulaglutide, liraglutide','(Tirzepatide — dual GIP/GLP-1)'],
  moa:[
    'Agonise the **GLP-1 receptor** → glucose-dependent insulin secretion, suppressed glucagon, **slowed gastric emptying** and central appetite suppression.',
  ],
  effects:[
    { effect:'HbA1c reduction + substantial weight loss', mechanism:'Incretin effect plus reduced appetite and gastric emptying.' },
    { effect:'Cardiovascular benefit', mechanism:'Proven CV risk reduction in trials.' },
  ],
  adverse:[
    { ae:'Nausea, vomiting, early satiety', mechanism:'Slowed gastric emptying — usually settles; titrate slowly.' },
    { ae:'Pancreatitis (rare)', mechanism:'Stop if severe persistent abdominal pain.' },
  ],
  practical:[
    { point:'Titrate dose gradually', detail:'Minimises GI side-effects.' },
    { point:'NICE/weight & HbA1c criteria', detail:'Continuation depends on response thresholds.' },
  ],
  pearls:['The same delayed gastric emptying that aids weight loss causes the early nausea — go slowly.'],
  note:'Agonising GLP-1 hits insulin, glucagon, gastric emptying and appetite at once — explaining glucose control, weight loss and the GI effects.',
  links:{ patho:'patho-t2dm', pathoLabel:'Type 2 diabetes', patho2:'patho-obesity', patho2Label:'Obesity' },
},
{
  id:'pharma-insulin', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'💉',
  title:'Insulin', blurb:'The definitive glucose-lowering hormone — essential in T1DM and advanced T2DM.',
  examples:['Rapid (aspart, lispro)','Short (Actrapid)','Intermediate (isophane)','Long-acting (glargine, detemir, degludec)'],
  moa:[
    'Activates the **insulin receptor** → glucose uptake (GLUT4) into muscle/fat, glycogen synthesis, and suppression of hepatic gluconeogenesis and lipolysis.',
  ],
  effects:[
    { effect:'Reliable glucose lowering', mechanism:'Drives glucose into cells and switches off hepatic glucose output.' },
  ],
  adverse:[
    { ae:'Hypoglycaemia', mechanism:'Dose/food/exercise mismatch — the main hazard.' },
    { ae:'Weight gain & lipohypertrophy', mechanism:'Anabolic effect; rotate injection sites to avoid fatty lumps that alter absorption.' },
  ],
  practical:[
    { point:'Never omit in T1DM', detail:'Even when not eating — omission precipitates DKA; follow sick-day rules.' },
    { point:'Basal–bolus mimics physiology', detail:'Long-acting background + rapid with meals.' },
  ],
  pearls:['In illness, T1DM patients need their basal insulin and often more, not less — stopping it causes DKA.'],
  note:'Insulin is the master anabolic signal: glucose uptake, glycogen and fat storage — and the hypos and weight gain are the flip side.',
  links:{ patho:'patho-t1dm', pathoLabel:'Type 1 diabetes', patho2:'patho-dka', patho2Label:'DKA' },
},
{
  id:'pharma-pioglitazone', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'🩸',
  title:'Pioglitazone', blurb:'A thiazolidinedione that improves insulin sensitivity — niche use because of fluid and fracture risks.',
  examples:['Pioglitazone'],
  moa:[
    'Agonises **PPAR-γ** in adipose tissue → improved insulin sensitivity and fatty-acid handling.',
  ],
  effects:[
    { effect:'HbA1c reduction, no hypos alone', mechanism:'Sensitises tissues rather than forcing insulin out.' },
  ],
  adverse:[
    { ae:'Fluid retention / worsens heart failure', mechanism:'Renal sodium retention — contraindicated in HF.' },
    { ae:'Fractures', mechanism:'Adverse effect on bone — caution in osteoporosis.' },
    { ae:'Bladder cancer signal', mechanism:'Avoid if haematuria/history.' },
  ],
  practical:[
    { point:'Avoid in HF, osteoporosis, bladder cancer', detail:'Its safety profile defines its narrow use.' },
    { point:'No hypoglycaemia alone', detail:'Insulin sensitiser, not secretagogue.' },
  ],
  pearls:['Fluid retention makes pioglitazone unsafe in heart failure — always screen first.'],
  note:'Improving insulin sensitivity via PPAR-γ comes packaged with sodium retention and bone effects that limit its use.',
  links:{ patho:'patho-t2dm', pathoLabel:'Type 2 diabetes' },
},
{
  id:'pharma-carbimazole', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'🦋',
  title:'Carbimazole & antithyroid drugs', blurb:'Block thyroid hormone synthesis in hyperthyroidism — with one dangerous bone-marrow side-effect.',
  examples:['Carbimazole','Propylthiouracil (1st-trimester pregnancy, thyroid storm)'],
  moa:[
    'Inhibit **thyroid peroxidase** → block iodination/coupling of tyrosine → reduced T3/T4 synthesis.',
    'Propylthiouracil also blocks peripheral T4→T3 conversion.',
  ],
  effects:[
    { effect:'Lowers thyroid hormone over weeks', mechanism:'Existing stored hormone must clear first — effect is not immediate.' },
  ],
  adverse:[
    { ae:'Agranulocytosis', mechanism:'Idiosyncratic neutropenia — sore throat/fever = urgent FBC and stop drug.' },
    { ae:'Carbimazole teratogenicity', mechanism:'Use propylthiouracil in the first trimester.' },
  ],
  practical:[
    { point:'Counsel every patient on agranulocytosis', detail:'“Stop and get an urgent blood test if you get a sore throat, mouth ulcers or fever.”' },
    { point:'Titration vs block-and-replace', detail:'Two valid regimens; monitor TFTs (TSH lags).' },
  ],
  pearls:['Sore throat on carbimazole is agranulocytosis until proven otherwise — urgent FBC.'],
  note:'Blocking thyroid peroxidase lowers hormone synthesis; the rare but lethal risk is agranulocytosis — drilled into every patient.',
  links:{ patho:'patho-hyperthyroidism', pathoLabel:'Hyperthyroidism' },
},
{
  id:'pharma-corticosteroids', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'💊',
  title:'Systemic corticosteroids', blurb:'Powerful anti-inflammatories with predictable, dose-related, multi-system side-effects.',
  examples:['Prednisolone, dexamethasone, hydrocortisone'],
  moa:[
    'Bind the **glucocorticoid receptor** → switch off pro-inflammatory genes (↓ cytokines, prostaglandins) and immune cell function.',
    'Also exert metabolic (gluconeogenesis), mineralocorticoid and HPA-axis-suppressing effects.',
  ],
  effects:[
    { effect:'Rapid anti-inflammatory / immunosuppressive action', mechanism:'Broad genomic suppression of inflammation.' },
  ],
  adverse:[
    { ae:'Hyperglycaemia, osteoporosis, weight gain, skin thinning', mechanism:'Metabolic glucocorticoid effects.' },
    { ae:'Adrenal suppression', mechanism:'HPA-axis shutdown — never stop abruptly after >3 weeks; risk of Addisonian crisis.' },
    { ae:'Infection, mood change, hypertension', mechanism:'Immunosuppression + mineralocorticoid effect.' },
  ],
  practical:[
    { point:'Taper after prolonged use', detail:'Allow the adrenal axis to recover; issue a steroid emergency card.' },
    { point:'Sick-day rules — increase dose', detail:'In intercurrent illness, replacement/long-term steroids must go UP, not down.' },
    { point:'Bone & GI protection', detail:'Consider bisphosphonate and PPI for long courses.' },
  ],
  pearls:['Long-term steroids must be increased in illness and never stopped suddenly — the opposite of most drugs.'],
  note:'Glucocorticoid-receptor activation gives both the anti-inflammatory benefit and every metabolic side-effect — and HPA suppression dictates the taper and sick-day rules.',
  links:{ patho:'patho-addisons', pathoLabel:'Adrenal insufficiency', case:'cases/sick-day-rules.html', caseLabel:'Sick-day rules' },
},
{
  id:'pharma-adrenal-replacement', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'💊',
  title:'Adrenal replacement (hydrocortisone & fludrocortisone)', blurb:'Physiological glucocorticoid + mineralocorticoid replacement in adrenal insufficiency.',
  examples:['Hydrocortisone (glucocorticoid)','Fludrocortisone (mineralocorticoid)'],
  moa:[
    'Hydrocortisone replaces **cortisol** (glucocorticoid + some mineralocorticoid).',
    'Fludrocortisone replaces **aldosterone** → Na⁺ retention, K⁺ excretion, BP support.',
  ],
  effects:[
    { effect:'Restores cortisol/aldosterone function', mechanism:'Mimics the diurnal cortisol rhythm (higher morning dose).' },
  ],
  adverse:[
    { ae:'Cushingoid effects if over-replaced', mechanism:'Excess glucocorticoid.' },
    { ae:'Crisis if under-replaced / illness', mechanism:'Insufficient cortisol during stress → Addisonian crisis.' },
  ],
  practical:[
    { point:'Sick-day rules are life-saving', detail:'Double oral hydrocortisone in illness; IM hydrocortisone if vomiting; steroid card + emergency injection kit.' },
    { point:'Never omit', detail:'Missed doses in illness precipitate crisis.' },
  ],
  pearls:['Every Addison’s patient needs an emergency hydrocortisone injection kit and sick-day training.'],
  note:'Replace both cortisol and aldosterone, mimic the daily rhythm, and crucially increase the dose under physiological stress.',
  links:{ patho:'patho-addisons', pathoLabel:'Adrenal insufficiency', case:'cases/addisons-disease.html', caseLabel:'Addison’s' },
},
{
  id:'pharma-methyldopa', domain:'Pharmacology', class:'Cardiovascular', icon:'🤰',
  title:'Methyldopa', blurb:'A centrally-acting antihypertensive with a long safety record in pregnancy.',
  examples:['Methyldopa (pregnancy hypertension)'],
  moa:[
    'Converted centrally to a **false neurotransmitter** that stimulates **α2-adrenoceptors** in the brainstem → reduced sympathetic outflow → lower BP.',
  ],
  effects:[
    { effect:'BP lowering safe in pregnancy', mechanism:'Long-established fetal safety data.' },
  ],
  adverse:[
    { ae:'Sedation, depression', mechanism:'Central sympatholytic action.' },
    { ae:'Positive Coombs / haemolytic anaemia (rare)', mechanism:'Autoimmune phenomenon.' },
  ],
  practical:[
    { point:'First-line option in pregnancy', detail:'Alongside labetalol/nifedipine; avoid if history of depression.' },
    { point:'Don’t stop abruptly', detail:'Rebound hypertension.' },
  ],
  pearls:['Reach for labetalol, nifedipine or methyldopa in pregnancy — ACEi/ARBs are contraindicated.'],
  note:'A central α2-agonist that lowers sympathetic drive — chosen in pregnancy for its safety record despite the sedation.',
  links:{ patho:'patho-pre-eclampsia', pathoLabel:'Pre-eclampsia', patho2:'patho-hypertension', patho2Label:'Hypertension' },
},

]);
