/* Reasoning GP — Basic Science: PATHOPHYSIOLOGY (set 2: Cardiovascular + Respiratory)
   Same schema as basic-science-patho.js. Educational reasoning aid. */
window.RGP_BASICSCIENCE = (window.RGP_BASICSCIENCE || []).concat([

/* ---------------- CARDIOVASCULAR ---------------- */
{ id:'patho-stroke', domain:'Pathophysiology', system:'Cardiovascular', icon:'🧠',
  title:'Stroke & TIA', blurb:'Why “time is brain”, and why ischaemic and haemorrhagic strokes need opposite treatments.',
  mechanism:[
    'Most strokes are **ischaemic** — a thrombus or embolus (often from carotid atheroma or the AF left atrium) occludes a cerebral artery, starving neurons of glucose/oxygen. A penumbra of stunned-but-viable tissue surrounds the dead core and can be salvaged if flow is restored fast.',
    'A minority are **haemorrhagic** — vessel rupture (hypertension, amyloid) bleeds into brain or subarachnoid space, causing pressure injury. A **TIA** is transient ischaemia with full recovery and no infarct, but flags high early stroke risk.',
  ],
  cascade:[
    { step:'Vessel occlusion / rupture', detail:'Focal loss of perfusion' },
    { step:'Penumbra at risk', detail:'Salvageable if reperfused quickly' },
    { step:'Infarction', detail:'Irreversible deficit if flow not restored' },
  ],
  implications:[
    { clue:'Urgent CT before any treatment', why:'Thrombolysis/thrombectomy help ischaemic stroke but are catastrophic in haemorrhage — imaging must separate them first.' },
    { clue:'TIA gets urgent assessment + aspirin', why:'Early stroke risk after TIA is high; antiplatelets and risk-factor control sharply reduce it.' },
    { clue:'Long-term: BP, antiplatelet/anticoagulant, statin, carotid review', why:'Each targets a mechanism of recurrence — pressure, clot source, plaque.' },
  ],
  pearls:[
    'AF-related strokes are prevented by **anticoagulation**, not antiplatelets.',
    'FAST symptoms with full recovery is still a TIA — act, don’t reassure.',
  ],
  note:'The penumbra is why speed matters: every minute of occlusion converts salvageable brain into permanent deficit.',
  links:{ case:'cases/tia.html', caseLabel:'TIA case', algorithm:'tools/algorithms/tia.html', algorithmLabel:'TIA pathway' } },

{ id:'patho-vte', domain:'Pathophysiology', system:'Cardiovascular', icon:'🦵',
  title:'Venous thromboembolism (DVT)', blurb:'How Virchow’s triad turns a calf vein into a limb- and life-threatening clot.',
  mechanism:[
    'Venous thrombi form through **Virchow’s triad**: stasis (immobility, long travel), endothelial injury (surgery, trauma) and hypercoagulability (cancer, oestrogen, thrombophilia, pregnancy).',
    'A fibrin-rich clot forms in deep leg veins → obstructs venous return → painful, swollen, warm limb. Fragments can embolise to the lungs (PE).',
  ],
  cascade:[
    { step:'Stasis + hypercoagulability', detail:'Clot nucleates in deep veins' },
    { step:'Venous obstruction', detail:'Unilateral swelling, pain, warmth' },
    { step:'Embolisation', detail:'Clot travels to pulmonary arteries → PE' },
  ],
  implications:[
    { clue:'We risk-stratify (Wells) then D-dimer or scan', why:'D-dimer rules out low-probability cases; imaging confirms when probability is high — reflecting pre-test likelihood of clot.' },
    { clue:'Anticoagulate, don’t “dissolve”', why:'Anticoagulation stops propagation and lets endogenous fibrinolysis clear the clot; the body remodels it over months.' },
    { clue:'Unprovoked VTE prompts a cancer/thrombophilia thought', why:'Hypercoagulability may be the first sign of occult malignancy.' },
  ],
  pearls:[
    'Provoked (surgery, immobility) vs unprovoked drives **duration** of anticoagulation.',
    'Oestrogen (COCP, HRT) and pregnancy are common, modifiable triggers.',
  ],
  note:'A DVT and a PE are the same disease in two places — treat the clot, find the trigger.',
  links:{ case:'cases/dvt.html', caseLabel:'DVT case', drug:'pharma-doac', drugLabel:'DOACs' } },

{ id:'patho-pe', domain:'Pathophysiology', system:'Cardiovascular', icon:'🫁',
  title:'Pulmonary embolism', blurb:'Why a clot in the lung causes breathlessness, hypoxia and strain on the right heart.',
  mechanism:[
    'An embolus (usually from a leg DVT) lodges in the pulmonary arteries, creating **dead space** — ventilated lung that is no longer perfused — and a ventilation/perfusion mismatch causing hypoxia.',
    'Acute obstruction raises pulmonary artery pressure; the thin-walled **right ventricle** strains acutely and, if large, fails — the mechanism of sudden collapse and death.',
  ],
  cascade:[
    { step:'Embolus lodges in pulmonary artery', detail:'V/Q mismatch, dead space' },
    { step:'Hypoxia + raised PA pressure', detail:'Breathlessness, tachycardia, pleuritic pain' },
    { step:'RV strain', detail:'Massive PE → obstructive shock, arrest' },
  ],
  implications:[
    { clue:'Tachycardia + hypoxia + pleuritic pain', why:'Reflect dead space, RV strain and pleural irritation respectively.' },
    { clue:'Massive PE with shock → thrombolysis', why:'Clot burden is causing obstructive RV failure — lysis is justified despite bleeding risk.' },
    { clue:'Most PEs → anticoagulation alone', why:'Stops propagation; the lung’s own fibrinolysis resolves the embolus.' },
  ],
  pearls:[
    'A normal D-dimer with low Wells safely excludes PE; a raised one is non-specific.',
    'PE can present as unexplained breathlessness or syncope with few chest signs.',
  ],
  note:'PE kills through acute right-heart failure — risk-stratify on haemodynamics, not just clot size.',
  links:{ case:'cases/pulmonary-embolism.html', caseLabel:'PE case', drug:'pharma-doac', drugLabel:'DOACs' } },

{ id:'patho-pad', domain:'Pathophysiology', system:'Cardiovascular', icon:'🦶',
  title:'Peripheral arterial disease', blurb:'Why atherosclerosis in the legs causes claudication, rest pain and ulcers.',
  mechanism:[
    'The same atherosclerotic process as coronary disease narrows the lower-limb arteries, limiting flow. On exertion, muscle oxygen demand outstrips a fixed supply → **intermittent claudication** (cramping pain relieved by rest).',
    'As stenosis worsens, even resting flow is inadequate → **critical limb ischaemia**: rest pain, ulceration, gangrene, and risk of limb loss.',
  ],
  cascade:[
    { step:'Arterial stenosis', detail:'Fixed flow limitation to the limb' },
    { step:'Demand > supply on walking', detail:'Claudication' },
    { step:'Resting ischaemia', detail:'Rest pain, ulcers, tissue loss' },
  ],
  implications:[
    { clue:'ABPI confirms and grades', why:'A reduced ankle:brachial pressure ratio objectively quantifies the perfusion deficit.' },
    { clue:'PAD = coronary/cerebral disease elsewhere', why:'It is a marker of systemic atherosclerosis — statin, antiplatelet and BP control cut MI/stroke, not just leg symptoms.' },
    { clue:'Supervised exercise before intervention', why:'Develops collateral flow and extends walking distance.' },
  ],
  pearls:[
    'Beware falsely high ABPI in diabetes/CKD (calcified, incompressible vessels).',
    'A diabetic foot ulcer with PAD needs urgent vascular + podiatry input.',
  ],
  note:'PAD is a window onto whole-body atherosclerosis — the legs hurt, but the heart and brain are at risk too.',
  links:{ drug:'pharma-statin', drugLabel:'Statins' } },

{ id:'patho-aaa', domain:'Pathophysiology', system:'Cardiovascular', icon:'🎈',
  title:'Abdominal aortic aneurysm', blurb:'Why a silent dilated aorta is lethal when it ruptures, and why we screen.',
  mechanism:[
    'Degeneration of the aortic wall media (elastin loss, inflammation, atherosclerosis) lets the vessel dilate. By **Laplace’s law**, wall tension rises with diameter, so a bigger aneurysm expands and weakens faster.',
    'Beyond a threshold (~5.5 cm) rupture risk climbs steeply; rupture causes catastrophic retroperitoneal haemorrhage.',
  ],
  cascade:[
    { step:'Wall degeneration', detail:'Loss of structural elastin/collagen' },
    { step:'Progressive dilatation', detail:'Higher wall tension → faster growth' },
    { step:'Rupture', detail:'Sudden pain, collapse, exsanguination' },
  ],
  implications:[
    { clue:'National screening of men at 65', why:'AAA is asymptomatic until rupture — ultrasound detects it while repair is elective and safe.' },
    { clue:'Surveillance scans by size', why:'Growth is predictable; we repair at the diameter where rupture risk exceeds operative risk.' },
    { clue:'Triad: pain + pulsatile mass + collapse', why:'Rupture — immediate vascular emergency, do not delay for imaging if unstable.' },
  ],
  pearls:[
    'Smoking and family history are the strongest risk factors.',
    'A tender, expanding AAA can mimic renal colic — examine the abdomen.',
  ],
  note:'AAA is a mechanical disease governed by Laplace’s law — diameter predicts rupture, which is why we measure and repair on size.',
  links:{} },

{ id:'patho-aortic-stenosis', domain:'Pathophysiology', system:'Cardiovascular', icon:'🚪',
  title:'Aortic stenosis', blurb:'Why a calcified valve causes exertional syncope, angina and breathlessness.',
  mechanism:[
    'Progressive **calcific degeneration** (or a bicuspid valve) narrows the aortic orifice. The LV must generate higher pressure to eject across it → concentric **LV hypertrophy**.',
    'The fixed obstruction limits the rise in cardiac output on exertion; the hypertrophied muscle outgrows its blood supply (angina) and cerebral perfusion falls (syncope). Eventually the LV fails.',
  ],
  cascade:[
    { step:'Valve narrowing', detail:'Pressure overload on the LV' },
    { step:'LV hypertrophy', detail:'Stiff ventricle, supply–demand mismatch' },
    { step:'Fixed low output', detail:'Exertional angina, syncope, heart failure' },
  ],
  implications:[
    { clue:'Symptoms change the prognosis abruptly', why:'Once angina/syncope/HF appear, survival without valve replacement is poor — symptoms drive referral.' },
    { clue:'Ejection systolic murmur radiating to carotids + slow-rising pulse', why:'Direct signs of turbulent flow across a fixed, narrowed orifice.' },
    { clue:'Caution with vasodilators/nitrates', why:'A fixed-output ventricle can’t compensate for sudden afterload drop → profound hypotension/syncope.' },
  ],
  pearls:[
    'TAVI now offers valve replacement to higher-risk/older patients.',
    'Exertional syncope in an older patient — examine for AS.',
  ],
  note:'AS is a fixed-obstruction disease: the heart copes until it can’t, and symptom onset is the alarm.',
  links:{} },

{ id:'patho-mitral-regurgitation', domain:'Pathophysiology', system:'Cardiovascular', icon:'🌊',
  title:'Mitral regurgitation', blurb:'Why a leaking mitral valve volume-overloads the left heart and causes AF and breathlessness.',
  mechanism:[
    'An incompetent mitral valve (degenerative prolapse, post-MI, annular dilatation) lets blood regurgitate from LV to LA in systole → **volume overload** of both chambers.',
    'The LA dilates (predisposing to **AF**) and pressure backs up into the lungs (breathlessness); the LV dilates and eventually fails as it pumps a large fraction backwards.',
  ],
  cascade:[
    { step:'Valve incompetence', detail:'Systolic regurgitation LV→LA' },
    { step:'LA + LV volume overload', detail:'Chamber dilatation, AF, pulmonary congestion' },
    { step:'LV failure', detail:'Falling forward output, breathlessness' },
  ],
  implications:[
    { clue:'Pansystolic murmur at apex radiating to axilla', why:'Continuous systolic regurgitant jet from LV into LA.' },
    { clue:'New AF is common', why:'Atrial stretch from chronic volume overload remodels the atrium.' },
    { clue:'Timing of surgery matters', why:'Repair before irreversible LV dysfunction — echo surveillance guides the window.' },
  ],
  pearls:[
    'Acute severe MR (papillary muscle rupture post-MI) is a surgical emergency.',
    'Mitral prolapse is common and usually benign — severity is what counts.',
  ],
  note:'MR is a volume-overload lesion: the leak is silent for years, then the atrium fibrillates and the ventricle fails.',
  links:{ drug:'pharma-doac', drugLabel:'DOACs' } },

{ id:'patho-hyperlipidaemia', domain:'Pathophysiology', system:'Cardiovascular', icon:'🧈',
  title:'Hyperlipidaemia & familial hypercholesterolaemia', blurb:'Why circulating LDL drives lifelong cardiovascular risk, and why FH matters early.',
  mechanism:[
    'LDL carries cholesterol to tissues; excess circulating LDL infiltrates arterial walls and seeds atherosclerosis. Cumulative LDL exposure over a lifetime determines vascular risk.',
    'In **familial hypercholaesterolaemia**, an inherited LDL-receptor defect means LDL is cleared poorly from birth → very high levels and premature coronary disease.',
  ],
  cascade:[
    { step:'High circulating LDL', detail:'Arterial wall infiltration' },
    { step:'Plaque formation', detail:'Atherosclerosis accelerates' },
    { step:'Premature CV events', detail:'Early MI/stroke, especially in FH' },
  ],
  implications:[
    { clue:'We treat cumulative LDL, lifelong', why:'Risk is dose×time of LDL exposure — earlier, sustained lowering yields most benefit.' },
    { clue:'Tendon xanthomata / very high LDL / early family MI → suspect FH', why:'These flag a monogenic cause needing cascade family testing and intensive treatment.' },
    { clue:'Statins ± ezetimibe ± PCSK9', why:'Each lowers LDL by a different mechanism; combine to reach target.' },
  ],
  pearls:[
    'Triglyceride >10 mmol/L risks pancreatitis — a separate, urgent target.',
    'Always exclude secondary causes (hypothyroidism, alcohol, diabetes) first.',
  ],
  note:'Cholesterol is an exposure, not an event — the lower and earlier the LDL, the fewer the arteries clog.',
  links:{ case:'cases/high-cholesterol.html', caseLabel:'Cholesterol case', drug:'pharma-statin', drugLabel:'Statins' } },

{ id:'patho-postural-hypotension', domain:'Pathophysiology', system:'Cardiovascular', icon:'🧍',
  title:'Postural (orthostatic) hypotension', blurb:'Why standing up causes dizziness when baroreflexes or volume fail.',
  mechanism:[
    'On standing, ~500 mL of blood pools in the legs. Normally **baroreceptors** trigger reflex tachycardia and vasoconstriction to defend cerebral perfusion.',
    'When this fails — through volume depletion, autonomic neuropathy (diabetes, Parkinson’s), or vasodilator/diuretic drugs — BP falls on standing → transient cerebral hypoperfusion → dizziness, syncope, falls.',
  ],
  cascade:[
    { step:'Standing → venous pooling', detail:'Transient drop in venous return' },
    { step:'Inadequate baroreflex', detail:'No compensatory tachycardia/vasoconstriction' },
    { step:'Cerebral hypoperfusion', detail:'Lightheadedness, syncope, falls' },
  ],
  implications:[
    { clue:'Lying/standing BP confirms it', why:'A sustained drop (≥20 systolic / ≥10 diastolic) objectively documents failed compensation.' },
    { clue:'Review culprit drugs first', why:'Antihypertensives, diuretics, alpha-blockers, antidepressants commonly cause or worsen it — often the easiest fix.' },
    { clue:'Non-drug measures matter', why:'Hydration, slow rising, compression, salt — restore or buffer the volume/reflex deficit.' },
  ],
  pearls:[
    'A common, treatable cause of falls in older people.',
    'Postprandial and early-morning dips are worst — time activity around them.',
  ],
  note:'Postural hypotension is a failure of the body’s reflex to defend the brain on standing — usually drugs or dehydration, not the heart.',
  links:{} },

{ id:'patho-svt', domain:'Pathophysiology', system:'Cardiovascular', icon:'⚡',
  title:'Supraventricular tachycardia', blurb:'Why a re-entry circuit above the ventricles causes sudden palpitations.',
  mechanism:[
    'SVT (commonly AVNRT) arises from a self-sustaining **re-entry circuit** using dual pathways within or near the AV node, producing a rapid, regular, narrow-complex tachycardia.',
    'The fast rate shortens diastolic filling → palpitations, breathlessness, chest discomfort; it starts and stops abruptly.',
  ],
  cascade:[
    { step:'Premature beat triggers re-entry', detail:'Circuit established around AV node' },
    { step:'Rapid regular conduction', detail:'Narrow-complex tachycardia 150–250/min' },
    { step:'Reduced filling time', detail:'Palpitations, breathlessness' },
  ],
  implications:[
    { clue:'Vagal manoeuvres / adenosine terminate it', why:'Transiently blocking the AV node breaks the re-entry circuit that depends on it.' },
    { clue:'Regular & abrupt onset/offset', why:'Distinguishes re-entry SVT from the irregular, sustained rhythm of AF.' },
    { clue:'Ablation cures recurrent cases', why:'Destroying the slow pathway removes the substrate for re-entry.' },
  ],
  pearls:[
    'Caffeine, alcohol and stress are common triggers.',
    'WPW (a delta wave) needs specialist care — avoid AV-blocking drugs in pre-excited AF.',
  ],
  note:'SVT is an electrical short-circuit — interrupt the AV node and the loop collapses.',
  links:{} },

{ id:'patho-pericarditis', domain:'Pathophysiology', system:'Cardiovascular', icon:'🛡️',
  title:'Pericarditis', blurb:'Why inflamed pericardium causes sharp, positional chest pain — and when it becomes dangerous.',
  mechanism:[
    'Inflammation of the pericardial sac (viral, autoimmune, post-MI, uraemic) irritates the parietal pericardium and adjacent pleura → **sharp, pleuritic chest pain**, classically relieved by sitting forward.',
    'A friction rub reflects inflamed surfaces moving against each other. Fluid can accumulate (effusion) and, if rapid, compress the heart — **tamponade**.',
  ],
  cascade:[
    { step:'Pericardial inflammation', detail:'Pleuritic, positional chest pain + rub' },
    { step:'Effusion', detail:'Fluid accumulates in the sac' },
    { step:'Tamponade', detail:'Compressed filling → obstructive shock' },
  ],
  implications:[
    { clue:'Pain better sitting forward, worse lying flat', why:'Posture changes pericardial/pleural contact and stretch.' },
    { clue:'Widespread saddle ST elevation + PR depression', why:'Diffuse epicardial inflammation, unlike the territorial ST elevation of MI.' },
    { clue:'NSAIDs + colchicine are first-line', why:'They suppress the inflammatory process and cut recurrence.' },
  ],
  pearls:[
    'Beck’s triad (hypotension, raised JVP, muffled sounds) signals tamponade — emergency.',
    'Post-MI and uraemic pericarditis point to a specific underlying cause.',
  ],
  note:'Pericarditis is usually benign inflammation — but watch for the effusion that tips into tamponade.',
  links:{} },

/* ---------------- RESPIRATORY ---------------- */
{ id:'patho-pneumonia', domain:'Pathophysiology', system:'Respiratory', icon:'🫁',
  title:'Pneumonia', blurb:'Why alveolar infection causes consolidation, hypoxia and systemic sepsis.',
  mechanism:[
    'Pathogens (commonly *Strep pneumoniae*) reach the alveoli and overwhelm local defences. The immune response floods alveoli with neutrophils, fluid and debris → **consolidation**.',
    'Consolidated alveoli are perfused but not ventilated → V/Q mismatch and hypoxia. Inflammatory mediators spilling into the blood drive fever, tachycardia and, if severe, sepsis.',
  ],
  cascade:[
    { step:'Alveolar infection', detail:'Inflammatory exudate fills air spaces' },
    { step:'Consolidation', detail:'Perfused-but-unventilated lung → hypoxia' },
    { step:'Systemic response', detail:'Fever, tachycardia, sepsis' },
  ],
  implications:[
    { clue:'CRB-65 guides severity/where to treat', why:'Confusion, RR, BP and age track the physiological burden of infection.' },
    { clue:'Focal crackles, bronchial breathing, dullness', why:'Direct signs of consolidated, fluid-filled lung.' },
    { clue:'Antibiotics by severity + local resistance', why:'Targets the likely organism while limiting resistance.' },
  ],
  pearls:[
    'Failure to improve → think empyema, abscess, wrong bug, or cancer behind it.',
    'Atypical organisms cause prominent systemic symptoms with few chest signs.',
  ],
  note:'Pneumonia is alveoli drowning in their own inflammatory response — hypoxia comes from perfusing lung that can no longer ventilate.',
  links:{ algorithm:'tools/algorithms/acute-cough.html', algorithmLabel:'Acute cough pathway' } },

{ id:'patho-bronchiectasis', domain:'Pathophysiology', system:'Respiratory', icon:'🌀',
  title:'Bronchiectasis', blurb:'Why permanently dilated airways trap mucus and drive a vicious cycle of infection.',
  mechanism:[
    'An initial insult (infection, immune defect, CF, obstruction) damages airway walls. Loss of cilia and structural support leaves airways **permanently dilated** and unable to clear mucus.',
    'Pooled mucus is colonised by bacteria → chronic inflammation → more wall damage — a self-perpetuating **vicious cycle** of infection and destruction.',
  ],
  cascade:[
    { step:'Airway wall injury', detail:'Dilatation + impaired mucociliary clearance' },
    { step:'Mucus stasis + colonisation', detail:'Chronic bacterial infection' },
    { step:'Ongoing inflammation', detail:'Progressive airway destruction' },
  ],
  implications:[
    { clue:'Daily airway clearance is core treatment', why:'Physically removing mucus breaks the stasis–infection cycle that drugs alone can’t.' },
    { clue:'Chronic productive cough with large sputum volumes', why:'Reflects the pooled secretions in dilated airways.' },
    { clue:'Find the cause (immune, CF, ABPA)', why:'A treatable underlying driver changes management.' },
  ],
  pearls:[
    'Pseudomonas colonisation marks more severe disease.',
    'HRCT (tram-track/signet-ring sign) confirms the diagnosis.',
  ],
  note:'Bronchiectasis is a self-sustaining cycle — clearance plus targeted antibiotics, not antibiotics alone.',
  links:{} },

{ id:'patho-pulmonary-fibrosis', domain:'Pathophysiology', system:'Respiratory', icon:'🕸️',
  title:'Pulmonary fibrosis (ILD)', blurb:'Why scarred lung becomes stiff, restrictive and hypoxic.',
  mechanism:[
    'Repeated alveolar injury triggers aberrant repair: fibroblasts deposit collagen in the interstitium → **scarring** that thickens the alveolar–capillary membrane and stiffens the lung.',
    'This impairs gas diffusion (hypoxia, especially on exertion) and reduces compliance → a **restrictive** pattern with small, stiff lungs.',
  ],
  cascade:[
    { step:'Alveolar injury', detail:'Aberrant fibroblast activation' },
    { step:'Interstitial fibrosis', detail:'Thickened membrane, stiff lung' },
    { step:'Restriction + impaired diffusion', detail:'Exertional breathlessness, hypoxia' },
  ],
  implications:[
    { clue:'Fine bibasal “Velcro” crackles + clubbing', why:'Signs of fibrotic, stiff peripheral lung.' },
    { clue:'Spirometry restrictive, reduced TLCO', why:'Stiff lungs (low volumes) with impaired gas transfer across the thickened membrane.' },
    { clue:'Antifibrotics slow, don’t reverse, IPF', why:'They blunt the fibrotic drive; established scar is permanent.' },
  ],
  pearls:[
    'Screen for drug, occupational and connective-tissue causes — some are treatable.',
    'Progressive exertional breathlessness + crackles + clubbing → think ILD.',
  ],
  note:'Fibrosis is scarring of the gas-exchange surface — the lung gets stiff and the blood gets hypoxic.',
  links:{} },

{ id:'patho-osa', domain:'Pathophysiology', system:'Respiratory', icon:'😴',
  title:'Obstructive sleep apnoea', blurb:'Why the airway collapses in sleep, and why it drives hypertension and sleepiness.',
  mechanism:[
    'During sleep, pharyngeal muscle tone falls; in susceptible airways (obesity, large tonsils, retrognathia) the upper airway repeatedly **collapses**, causing apnoeas/hypopnoeas with oxygen desaturation.',
    'Each event triggers a brief arousal and sympathetic surge to reopen the airway → fragmented sleep (daytime somnolence) and chronic sympathetic activation (hypertension, AF, CV risk).',
  ],
  cascade:[
    { step:'Airway collapse in sleep', detail:'Apnoea/hypopnoea + desaturation' },
    { step:'Arousal + sympathetic surge', detail:'Sleep fragmentation, BP spikes' },
    { step:'Chronic consequences', detail:'Daytime sleepiness, hypertension, CV risk' },
  ],
  implications:[
    { clue:'CPAP is the definitive treatment', why:'A pneumatic splint holds the airway open, abolishing the collapse–arousal cycle.' },
    { clue:'Resistant hypertension → screen for OSA', why:'The nightly sympathetic surges raise daytime BP.' },
    { clue:'DVLA/occupational implications', why:'Untreated sleepiness impairs driving safety — a legal duty to advise.' },
  ],
  pearls:[
    'Epworth score + overnight oximetry/sleep study quantify severity.',
    'Weight loss and avoiding alcohol/sedatives at night help substantially.',
  ],
  note:'OSA is mechanical airway collapse with systemic fallout — fix the airway (CPAP) and the blood pressure and sleepiness follow.',
  links:{} },

{ id:'patho-pneumothorax', domain:'Pathophysiology', system:'Respiratory', icon:'💨',
  title:'Pneumothorax', blurb:'Why air in the pleural space collapses the lung — and why tension is an emergency.',
  mechanism:[
    'Air enters the pleural space (ruptured bleb, trauma, iatrogenic), abolishing the negative pressure that holds the lung expanded → the elastic lung **recoils and collapses**.',
    'In a **tension** pneumothorax a one-way valve lets air accumulate under pressure, shifting the mediastinum and compressing the great veins → obstructed venous return and cardiac arrest.',
  ],
  cascade:[
    { step:'Air enters pleural space', detail:'Loss of negative intrapleural pressure' },
    { step:'Lung collapses', detail:'Sudden breathlessness, pleuritic pain' },
    { step:'Tension (if valve)', detail:'Mediastinal shift → obstructive shock' },
  ],
  implications:[
    { clue:'Tension = immediate decompression, no imaging', why:'Rising intrathoracic pressure kills within minutes — needle/finger decompression first.' },
    { clue:'Tall thin young smokers get primary spontaneous PTX', why:'Apical blebs rupture in this body habitus.' },
    { clue:'Size + symptoms guide aspiration vs drain vs observe', why:'Small, asymptomatic PTX can resorb; large/symptomatic needs evacuation.' },
  ],
  pearls:[
    'Sudden pleuritic pain + breathlessness + reduced breath sounds = think PTX.',
    'Tracheal deviation away from the side is a late tension sign.',
  ],
  note:'A pneumothorax collapses the lung by destroying the pleural vacuum — and tension turns that into obstructive shock.',
  links:{} },

{ id:'patho-pleural-effusion', domain:'Pathophysiology', system:'Respiratory', icon:'💧',
  title:'Pleural effusion', blurb:'Why fluid collects between lung and chest wall — and what transudate vs exudate tells you.',
  mechanism:[
    'Fluid accumulates in the pleural space when formation exceeds reabsorption. **Transudates** (heart/liver/renal failure) arise from raised hydrostatic or low oncotic pressure — the pleura is normal.',
    '**Exudates** (infection, malignancy, PE, inflammation) arise from increased pleural permeability — protein and cells leak in. Fluid compresses lung → breathlessness.',
  ],
  cascade:[
    { step:'Imbalance of formation/drainage', detail:'Fluid collects in pleural space' },
    { step:'Lung compression', detail:'Breathlessness, dullness, reduced air entry' },
    { step:'Underlying cause persists', detail:'Re-accumulation until cause treated' },
  ],
  implications:[
    { clue:'Light’s criteria split transudate vs exudate', why:'Protein/LDH ratios reveal whether the pleura is leaking (exudate) or pressures are off (transudate) — directing the work-up.' },
    { clue:'Stony dull base, reduced breath sounds', why:'Fluid between lung and chest wall damps percussion and sound.' },
    { clue:'Unilateral exudate → exclude malignancy/infection', why:'Cytology and culture change management.' },
  ],
  pearls:[
    'Bilateral transudates usually reflect heart failure — treat the cause.',
    'An empyema (infected effusion) needs drainage, not just antibiotics.',
  ],
  note:'The effusion is a symptom — Light’s criteria point you at the disease causing it.',
  links:{} },

{ id:'patho-lung-cancer', domain:'Pathophysiology', system:'Respiratory', icon:'🎗️',
  title:'Lung cancer', blurb:'Why smoking-driven mutations present late, and why we chase red-flag symptoms.',
  mechanism:[
    'Carcinogens (chiefly tobacco) cause cumulative mutations in bronchial epithelium → uncontrolled proliferation. Tumours grow silently until they obstruct an airway, invade locally or metastasise.',
    'Local effects (haemoptysis, collapse, effusion), regional invasion (hoarseness, SVC obstruction) and paraneoplastic/metastatic features explain the varied presentation.',
  ],
  cascade:[
    { step:'Carcinogen-driven mutations', detail:'Malignant transformation of airway epithelium' },
    { step:'Local growth/invasion', detail:'Cough, haemoptysis, collapse, pain' },
    { step:'Spread', detail:'Nodal, metastatic, paraneoplastic effects' },
  ],
  implications:[
    { clue:'NG12 2WW: haemoptysis, or CXR suggestive', why:'Late presentation means survival hinges on catching red flags early.' },
    { clue:'Hoarseness or SVC obstruction = local invasion', why:'Recurrent laryngeal nerve or SVC compression by tumour.' },
    { clue:'Smoking cessation + screening reduce burden', why:'Removes the driver and detects disease earlier.' },
  ],
  pearls:[
    'Clubbing, weight loss and a smoking history raise suspicion sharply.',
    'Consider mesothelioma with asbestos exposure and a pleural effusion.',
  ],
  note:'Lung cancer is mutation-driven and silent early — the whole strategy is to act fast on red flags.',
  links:{ algorithm:'tools/algorithms/haemoptysis.html', algorithmLabel:'Haemoptysis pathway' } },

{ id:'patho-sarcoidosis', domain:'Pathophysiology', system:'Respiratory', icon:'🔘',
  title:'Sarcoidosis', blurb:'Why non-caseating granulomas form in the lungs and beyond — and why many resolve.',
  mechanism:[
    'An exaggerated Th1 immune response to an unknown trigger forms **non-caseating granulomas** — organised clusters of macrophages and lymphocytes — most often in the lungs and hilar nodes.',
    'Granulomas distort tissue (interstitial lung disease) and can secrete active vitamin D (hypercalcaemia). The disease ranges from self-limiting to chronic fibrosis.',
  ],
  cascade:[
    { step:'Immune trigger', detail:'Th1-driven granuloma formation' },
    { step:'Tissue involvement', detail:'Bilateral hilar nodes, lung, skin, eyes' },
    { step:'Resolution or fibrosis', detail:'Many remit; some progress to scarring' },
  ],
  implications:[
    { clue:'Bilateral hilar lymphadenopathy on CXR', why:'The classic radiological signature of granulomatous nodal disease.' },
    { clue:'Raised calcium/ACE', why:'Granulomas activate vitamin D and produce ACE — markers of disease activity.' },
    { clue:'Many cases need only observation', why:'Acute sarcoid (e.g. Löfgren’s) often resolves spontaneously — steroids reserved for organ-threatening disease.' },
  ],
  pearls:[
    'Erythema nodosum + hilar nodes + arthralgia (Löfgren’s) carries a good prognosis.',
    'Always check eyes (uveitis) and heart (arrhythmia) involvement.',
  ],
  note:'Sarcoid is granulomatous inflammation of unknown cause — treat the organ damage, not the X-ray.',
  links:{} },

{ id:'patho-urti', domain:'Pathophysiology', system:'Respiratory', icon:'🤧',
  title:'Upper respiratory tract infection', blurb:'Why the common cold is viral, self-limiting, and rarely needs antibiotics.',
  mechanism:[
    'Respiratory viruses (rhinovirus, coronavirus, RSV) infect nasal/pharyngeal epithelium → local inflammation, mucus and the familiar symptoms of coryza, sore throat and cough.',
    'The immune response clears the virus over days; symptoms are largely the *response*, not the organism, and resolve without specific treatment.',
  ],
  cascade:[
    { step:'Viral mucosal infection', detail:'Local inflammation, mucus, oedema' },
    { step:'Symptom peak', detail:'Coryza, sore throat, cough, malaise' },
    { step:'Immune clearance', detail:'Self-limiting recovery in ~1–2 weeks' },
  ],
  implications:[
    { clue:'Antibiotics don’t help viral URTI', why:'No bacterial target — they add resistance and side-effects without benefit.' },
    { clue:'Safety-net for secondary bacterial infection', why:'Persisting fever or focal signs may flag sinusitis, otitis or pneumonia.' },
    { clue:'Self-care + realistic time-course advice', why:'Setting expectations (cough can last weeks) reduces reconsultation and antibiotic pressure.' },
  ],
  pearls:[
    'Green sputum/snot is not a marker of bacterial infection.',
    'Consider scoring tools (FeverPAIN/Centor) for sore throat antibiotic decisions.',
  ],
  note:'The cold is the immune response you feel — reassurance and self-care beat antibiotics almost every time.',
  links:{} },

]);
