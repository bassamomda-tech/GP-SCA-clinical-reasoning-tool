/* Reasoning GP — Basic Science: PHARMACOLOGY (set 4: Neurology & Mental health)
   Same schema as basic-science-pharma.js. Educational reasoning aid — verify against BNF. */
window.RGP_BASICSCIENCE = (window.RGP_BASICSCIENCE || []).concat([

/* ---------------- MENTAL HEALTH ---------------- */
{
  id:'pharma-snri', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🧠',
  title:'SNRIs (venlafaxine, duloxetine)', blurb:'Boost serotonin and noradrenaline — for depression, anxiety and neuropathic pain.',
  examples:['Venlafaxine, duloxetine'],
  moa:[
    'Inhibit reuptake of **serotonin AND noradrenaline** → more monoamine in the synapse → mood elevation and descending pain modulation.',
  ],
  effects:[
    { effect:'Antidepressant/anxiolytic + neuropathic pain relief', mechanism:'Dual monoamine reuptake block.' },
  ],
  adverse:[
    { ae:'Hypertension (dose-related, venlafaxine)', mechanism:'Noradrenergic effect — monitor BP.' },
    { ae:'Discontinuation syndrome', mechanism:'Short half-life — taper slowly.' },
    { ae:'Nausea, sweating, insomnia', mechanism:'Serotonergic/noradrenergic.' },
  ],
  practical:[
    { point:'Check BP at higher doses', detail:'Venlafaxine raises BP dose-dependently.' },
    { point:'Duloxetine for diabetic neuropathy', detail:'Licensed indication.' },
  ],
  pearls:['Venlafaxine has a notoriously difficult discontinuation syndrome — taper very gradually.'],
  note:'Dual serotonin+noradrenaline reuptake blockade explains the antidepressant, anxiolytic and analgesic effects — and the BP rise.',
  links:{ patho:'patho-depression', pathoLabel:'Depression', case:'cases/depression.html', caseLabel:'Depression' },
},
{
  id:'pharma-mirtazapine', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🧠',
  title:'Mirtazapine', blurb:'A noradrenergic/specific-serotonergic antidepressant useful when sleep and appetite are poor.',
  examples:['Mirtazapine (often nocte)'],
  moa:[
    'Blocks central **α2-autoreceptors** (↑ noradrenaline/serotonin release) and **H1** (sedation) and 5-HT2/5-HT3 receptors (less nausea/sexual dysfunction).',
  ],
  effects:[
    { effect:'Antidepressant + sedation + appetite gain', mechanism:'H1 blockade aids sleep; useful where insomnia/weight loss coexist.' },
  ],
  adverse:[
    { ae:'Sedation, weight gain', mechanism:'H1 antagonism (paradoxically more sedating at LOW doses).' },
    { ae:'Rare neutropenia', mechanism:'Report signs of infection.' },
  ],
  practical:[
    { point:'Lower dose = more sedating', detail:'Higher doses recruit noradrenergic drive — counter-intuitive.' },
    { point:'Good when appetite/sleep poor', detail:'And fewer sexual/GI side-effects than SSRIs.' },
  ],
  pearls:['Mirtazapine is MORE sedating at low doses — increasing the dose can reduce drowsiness.'],
  note:'α2-autoreceptor blockade raises monoamines while H1 blockade drives sleep and appetite — its niche in depression with insomnia/weight loss.',
  links:{ patho:'patho-depression', pathoLabel:'Depression' },
},
{
  id:'pharma-tca', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🧠',
  title:'Tricyclic antidepressants', blurb:'Older antidepressants now used mostly low-dose for neuropathic pain — dangerous in overdose.',
  examples:['Amitriptyline, nortriptyline (low-dose pain)','Lofepramine'],
  moa:[
    'Block serotonin/noradrenaline reuptake **plus** muscarinic, H1 and α1 receptors and cardiac sodium channels — hence broad side-effects.',
  ],
  effects:[
    { effect:'Neuropathic pain relief / antidepressant', mechanism:'Monoamine reuptake block; pain benefit at sub-antidepressant doses.' },
  ],
  adverse:[
    { ae:'Antimuscarinic: dry mouth, constipation, retention, blurred vision', mechanism:'Muscarinic blockade.' },
    { ae:'Fatal in overdose (arrhythmia, seizures)', mechanism:'Sodium-channel blockade → wide QRS.' },
    { ae:'Postural hypotension, sedation', mechanism:'α1 and H1 blockade.' },
  ],
  practical:[
    { point:'Caution in overdose risk', detail:'Very toxic — consider limited quantities in at-risk patients.' },
    { point:'Low dose for pain', detail:'Amitriptyline 10–25 mg nocte for neuropathic pain/migraine prophylaxis.' },
  ],
  pearls:['TCAs are cardiotoxic in overdose (sodium-channel blockade, wide QRS) — prescribe cautiously where self-harm is a risk.'],
  note:'The “dirty” receptor profile explains every antimuscarinic side-effect, and sodium-channel blockade is what makes overdose lethal.',
  links:{ patho:'patho-neuropathic-pain', pathoLabel:'Neuropathic pain' },
},
{
  id:'pharma-benzodiazepines', domain:'Pharmacology', class:'Neurology & Mental health', icon:'😴',
  title:'Benzodiazepines & Z-drugs', blurb:'Short-term anxiolytics/hypnotics and anticonvulsants — high dependence potential.',
  examples:['Diazepam, lorazepam','Zopiclone, zolpidem (Z-drugs)'],
  moa:[
    'Enhance **GABA-A** receptor activity (↑ chloride influx) → CNS depression: anxiolysis, sedation, muscle relaxation, anticonvulsant action.',
  ],
  effects:[
    { effect:'Rapid anxiolysis/sedation, seizure termination', mechanism:'Potentiated inhibitory GABA tone.' },
  ],
  adverse:[
    { ae:'Tolerance & dependence', mechanism:'Receptor adaptation — limit to ≤2–4 weeks.' },
    { ae:'Falls/confusion (elderly), respiratory depression', mechanism:'CNS depression, worse with alcohol/opioids.' },
    { ae:'Withdrawal seizures', mechanism:'Taper, never stop abruptly after regular use.' },
  ],
  practical:[
    { point:'Short courses only', detail:'Crisis/insomnia ≤2–4 weeks; withdraw via long-acting diazepam.' },
    { point:'Avoid with opioids', detail:'Additive respiratory depression.' },
  ],
  pearls:['Combining benzodiazepines with opioids markedly raises the risk of fatal respiratory depression.'],
  note:'Boosting GABA gives fast relief but the same mechanism drives tolerance, dependence and dangerous synergy with other CNS depressants.',
  links:{ patho:'patho-anxiety', pathoLabel:'Anxiety' },
},
{
  id:'pharma-antipsychotics', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🧠',
  title:'Antipsychotics', blurb:'Dopamine blockers for psychosis — the side-effect profile splits typical vs atypical.',
  examples:['Haloperidol (typical)','Olanzapine, quetiapine, risperidone, aripiprazole (atypical)'],
  moa:[
    'Block **dopamine D2 receptors** (mesolimbic → antipsychotic). Atypicals also block 5-HT2A → fewer movement effects.',
  ],
  effects:[
    { effect:'Reduce positive psychotic symptoms', mechanism:'Mesolimbic D2 blockade.' },
  ],
  adverse:[
    { ae:'Extrapyramidal side-effects (typicals)', mechanism:'Nigrostriatal D2 blockade — dystonia, parkinsonism, tardive dyskinesia.' },
    { ae:'Metabolic syndrome (atypicals)', mechanism:'Weight gain, diabetes, dyslipidaemia — monitor.' },
    { ae:'Hyperprolactinaemia, QT prolongation, NMS', mechanism:'Tuberoinfundibular D2 block; cardiac; rare neuroleptic malignant syndrome.' },
  ],
  practical:[
    { point:'Annual metabolic monitoring', detail:'Weight, glucose/HbA1c, lipids, prolactin, ECG.' },
    { point:'Clozapine = agranulocytosis', detail:'Reserved for resistant cases with mandatory FBC monitoring.' },
  ],
  pearls:['Typicals cause more movement disorders; atypicals cause more metabolic harm — choose and monitor accordingly.'],
  note:'D2 blockade treats psychosis but also produces movement, endocrine and (via off-target receptors) metabolic effects.',
  links:{ patho:'patho-psychosis', pathoLabel:'Psychosis' },
},
{
  id:'pharma-lithium', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🧠',
  title:'Lithium', blurb:'A mood stabiliser with a very narrow therapeutic index demanding tight monitoring.',
  examples:['Lithium carbonate (bipolar prophylaxis)'],
  moa:[
    'Modulates second-messenger systems (inositol/GSK-3) to stabilise mood — exact mechanism uncertain.',
  ],
  effects:[
    { effect:'Reduces relapse in bipolar disorder', mechanism:'Mood stabilisation; also anti-suicidal benefit.' },
  ],
  adverse:[
    { ae:'Toxicity: tremor, ataxia, confusion, seizures', mechanism:'Narrow window; precipitated by dehydration, NSAIDs, ACEi/diuretics, AKI.' },
    { ae:'Hypothyroidism, nephrogenic DI, CKD', mechanism:'Chronic renal/thyroid effects.' },
  ],
  practical:[
    { point:'Monitor levels + TFT/U&E', detail:'Levels 12 h post-dose, 3-monthly once stable; thyroid/renal 6-monthly.' },
    { point:'Beware interacting drugs/dehydration', detail:'NSAIDs, ACEi, thiazides and any cause of dehydration raise levels.' },
  ],
  pearls:['Any new NSAID, ACE inhibitor, diuretic or dehydrating illness can tip lithium into toxicity — recheck the level.'],
  note:'Its narrow index means the whole drug is about monitoring and avoiding the things (dehydration, NSAIDs, ACEi) that raise the level.',
  links:{ patho:'patho-bipolar', pathoLabel:'Bipolar disorder' },
},
{
  id:'pharma-varenicline', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🚭',
  title:'Smoking-cessation drugs', blurb:'Partial nicotine agonism and NRT to ease withdrawal and craving.',
  examples:['Varenicline','Nicotine replacement (patch + short-acting)','Bupropion'],
  moa:[
    'Varenicline **partially agonises** the α4β2 nicotinic receptor → eases withdrawal while blunting the reward of smoking. NRT supplies controlled nicotine; bupropion is a dopamine/noradrenaline reuptake inhibitor.',
  ],
  effects:[
    { effect:'Higher quit rates', mechanism:'Reduced craving and withdrawal.' },
  ],
  adverse:[
    { ae:'Varenicline: nausea, vivid dreams, mood change', mechanism:'Central nicotinic effects.' },
    { ae:'Bupropion lowers seizure threshold', mechanism:'Avoid in epilepsy/eating disorders.' },
  ],
  practical:[
    { point:'Combine patch + short-acting NRT', detail:'Background + breakthrough craving cover.' },
    { point:'Set a quit date', detail:'Start varenicline 1–2 weeks before.' },
  ],
  pearls:['Smoking cessation is the single most effective intervention for COPD progression and CVD risk.'],
  note:'Partial nicotinic agonism eases withdrawal while reducing reward — the pharmacological lever behind successful quitting.',
  links:{ patho:'patho-copd', pathoLabel:'COPD' },
},

/* ---------------- NEUROLOGY ---------------- */
{
  id:'pharma-aed-sodium', domain:'Pharmacology', class:'Neurology & Mental health', icon:'⚡',
  title:'Sodium-channel AEDs', blurb:'Lamotrigine, carbamazepine — stabilise neuronal membranes in epilepsy.',
  examples:['Lamotrigine','Carbamazepine','Phenytoin'],
  moa:[
    'Block voltage-gated **sodium channels** in their inactivated state → stabilise hyperexcitable neuronal membranes → fewer seizures.',
  ],
  effects:[
    { effect:'Seizure control (focal & generalised)', mechanism:'Reduced repetitive neuronal firing.' },
  ],
  adverse:[
    { ae:'Lamotrigine: Stevens–Johnson rash', mechanism:'Titrate slowly; stop for any rash early in treatment.' },
    { ae:'Carbamazepine: enzyme induction, hyponatraemia, marrow suppression', mechanism:'Potent CYP inducer — many interactions.' },
  ],
  practical:[
    { point:'Lamotrigine preferred in pregnancy/women', detail:'Lower teratogenic risk than valproate.' },
    { point:'Carbamazepine interactions', detail:'Reduces efficacy of contraceptives, DOACs, many drugs.' },
  ],
  pearls:['A spreading rash soon after starting lamotrigine may be Stevens–Johnson syndrome — stop and review urgently.'],
  note:'Stabilising sodium channels calms seizures; the safety story is the lamotrigine rash and carbamazepine’s enzyme induction.',
  links:{ patho:'patho-epilepsy', pathoLabel:'Epilepsy' },
},
{
  id:'pharma-valproate', domain:'Pharmacology', class:'Neurology & Mental health', icon:'⚡',
  title:'Sodium valproate', blurb:'A broad-spectrum AED with one absolute rule — never in women of childbearing potential.',
  examples:['Sodium valproate (epilepsy, bipolar)'],
  moa:[
    'Increases **GABA**, blocks sodium channels and T-type calcium channels → broad anticonvulsant action.',
  ],
  effects:[
    { effect:'Broad-spectrum seizure control', mechanism:'Multiple anticonvulsant mechanisms.' },
  ],
  adverse:[
    { ae:'Highly teratogenic', mechanism:'Neural-tube defects + neurodevelopmental harm — Pregnancy Prevention Programme.' },
    { ae:'Weight gain, tremor, hair loss, hepatotoxicity', mechanism:'Metabolic/hepatic effects.' },
  ],
  practical:[
    { point:'Avoid in girls/women who could conceive', detail:'Only under the Pregnancy Prevention Programme with specialist sign-off.' },
    { point:'Monitor LFTs', detail:'Especially early and in young children.' },
  ],
  pearls:['Valproate must not be used in women of childbearing potential unless conditions of the Pregnancy Prevention Programme are met.'],
  note:'Effective but defined by its teratogenicity — the regulatory and prescribing rules dominate its use.',
  links:{ patho:'patho-epilepsy', pathoLabel:'Epilepsy' },
},
{
  id:'pharma-levetiracetam', domain:'Pharmacology', class:'Neurology & Mental health', icon:'⚡',
  title:'Levetiracetam', blurb:'A widely-used, interaction-light AED — watch for mood effects.',
  examples:['Levetiracetam'],
  moa:[
    'Binds **synaptic vesicle protein SV2A** → modulates neurotransmitter release → reduced seizures.',
  ],
  effects:[
    { effect:'Broad seizure control, few interactions', mechanism:'Renally cleared, not a CYP substrate/inducer.' },
  ],
  adverse:[
    { ae:'Irritability, low mood, aggression', mechanism:'Common neuropsychiatric effect — ask about it.' },
  ],
  practical:[
    { point:'Few drug interactions', detail:'Convenient in polypharmacy/pregnancy planning.' },
    { point:'Screen mood at review', detail:'Behavioural change is the main issue.' },
  ],
  pearls:['Levetiracetam’s lack of interactions is offset by its tendency to cause irritability and low mood.'],
  note:'A clean pharmacokinetic profile (SV2A, renal clearance) makes it easy to combine — the trade-off is behavioural side-effects.',
  links:{ patho:'patho-epilepsy', pathoLabel:'Epilepsy' },
},
{
  id:'pharma-gabapentinoids', domain:'Pharmacology', class:'Neurology & Mental health', icon:'⚡',
  title:'Gabapentinoids', blurb:'Gabapentin/pregabalin for neuropathic pain — now controlled drugs due to misuse.',
  examples:['Gabapentin, pregabalin'],
  moa:[
    'Bind the **α2δ subunit of voltage-gated calcium channels** → reduced excitatory neurotransmitter release → analgesia and anxiolysis.',
  ],
  effects:[
    { effect:'Neuropathic pain relief, anxiolysis', mechanism:'Dampened excitatory transmission.' },
  ],
  adverse:[
    { ae:'Sedation, dizziness, weight gain', mechanism:'CNS depression.' },
    { ae:'Misuse/dependence; respiratory depression with opioids', mechanism:'Now Class C controlled drugs — additive with opioids.' },
  ],
  practical:[
    { point:'Caution with opioids/renal impairment', detail:'Renally cleared — reduce dose; combined CNS depression risk.' },
    { point:'Taper to stop', detail:'Withdrawal on abrupt cessation.' },
  ],
  pearls:['Gabapentinoids + opioids substantially increase the risk of fatal respiratory depression — co-prescribe cautiously.'],
  note:'α2δ binding reduces excitatory transmission (pain, anxiety), but misuse potential and opioid synergy now define the prescribing rules.',
  links:{ patho:'patho-neuropathic-pain', pathoLabel:'Neuropathic pain' },
},
{
  id:'pharma-triptans', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🧠',
  title:'Triptans', blurb:'Acute migraine-specific drugs that constrict dilated cranial vessels.',
  examples:['Sumatriptan, rizatriptan, zolmitriptan'],
  moa:[
    'Agonise **5-HT1B/1D receptors** → cranial vasoconstriction and inhibition of pro-inflammatory neuropeptide release in the trigeminovascular system.',
  ],
  effects:[
    { effect:'Aborts migraine attacks', mechanism:'Reverses the neurovascular changes of migraine.' },
  ],
  adverse:[
    { ae:'Chest/throat tightness', mechanism:'Mild coronary vasoconstriction — contraindicated in ischaemic heart disease.' },
    { ae:'Medication-overuse headache', mechanism:'Limit to ≤10 days/month.' },
  ],
  practical:[
    { point:'Take early in the attack', detail:'Most effective at onset; can repeat after 2 h if it recurs.' },
    { point:'Avoid in vascular disease', detail:'IHD, uncontrolled HTN, prior stroke.' },
  ],
  pearls:['Triptans are contraindicated in ischaemic heart disease because they constrict coronary as well as cranial arteries.'],
  note:'5-HT1B/1D agonism reverses migraine’s neurovascular dilation — and the same vasoconstriction is why they’re unsafe in vascular disease.',
  links:{ patho:'patho-migraine', pathoLabel:'Migraine', case:'cases/headache.html', caseLabel:'Headache' },
},
{
  id:'pharma-levodopa', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🧠',
  title:'Levodopa (Parkinson’s)', blurb:'Replaces dopamine in Parkinson’s — effective but with long-term motor complications.',
  examples:['Co-careldopa, co-beneldopa (levodopa + dopa-decarboxylase inhibitor)'],
  moa:[
    'Levodopa crosses the BBB and is converted to **dopamine**; a peripheral decarboxylase inhibitor limits peripheral conversion (less nausea, more brain delivery).',
  ],
  effects:[
    { effect:'Improves bradykinesia/rigidity', mechanism:'Restores striatal dopamine.' },
  ],
  adverse:[
    { ae:'Motor fluctuations & dyskinesia (long-term)', mechanism:'“Wearing off” and involuntary movements as disease progresses.' },
    { ae:'Nausea, hypotension, hallucinations, impulse-control disorders', mechanism:'Dopaminergic effects.' },
  ],
  practical:[
    { point:'Never stop abruptly', detail:'Risk of a neuroleptic-malignant-like syndrome / acute akinesia — give on time in hospital.' },
    { point:'Time doses to meals', detail:'Protein can compete with absorption.' },
  ],
  pearls:['Parkinson’s medication must be given on time and never suddenly stopped — omission can be dangerous.'],
  note:'Dopamine replacement works well early; the long game is managing wearing-off and dyskinesia — and never interrupting dosing.',
  links:{ patho:'patho-parkinsons', pathoLabel:'Parkinson’s disease' },
},
{
  id:'pharma-acei-dementia', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🧠',
  title:'Cholinesterase inhibitors (dementia)', blurb:'Donepezil and friends modestly support cognition in Alzheimer’s.',
  examples:['Donepezil, rivastigmine, galantamine','Memantine (NMDA antagonist)'],
  moa:[
    'Inhibit **acetylcholinesterase** → more synaptic acetylcholine → modest cognitive benefit. Memantine blocks NMDA receptors (excitotoxicity).',
  ],
  effects:[
    { effect:'Modest symptomatic cognitive benefit', mechanism:'Boosted cholinergic transmission.' },
  ],
  adverse:[
    { ae:'Bradycardia, syncope, GI upset', mechanism:'Cholinergic excess — caution with heart block.' },
  ],
  practical:[
    { point:'Specialist-initiated', detail:'For mild–moderate Alzheimer’s; memantine for moderate–severe.' },
    { point:'Check pulse/ECG', detail:'Bradycardia risk.' },
  ],
  pearls:['Cholinergic excess can cause bradycardia and falls — review cardiac history before starting.'],
  note:'More acetylcholine helps cognition modestly, but the cholinergic effect carries cardiac and GI consequences.',
  links:{ patho:'patho-dementia', pathoLabel:'Dementia' },
},
{
  id:'pharma-baclofen', domain:'Pharmacology', class:'Neurology & Mental health', icon:'💪',
  title:'Muscle relaxants (baclofen)', blurb:'Reduce spasticity and acute muscle spasm.',
  examples:['Baclofen (spasticity)','Tizanidine','Diazepam (spasm)'],
  moa:[
    'Baclofen is a **GABA-B agonist** in the spinal cord → reduced reflex muscle tone.',
  ],
  effects:[
    { effect:'Reduces spasticity', mechanism:'Dampened spinal reflex arcs.' },
  ],
  adverse:[
    { ae:'Sedation, weakness, hypotonia', mechanism:'CNS depression.' },
    { ae:'Withdrawal (seizures) on abrupt stop', mechanism:'Taper after regular use.' },
  ],
  practical:[
    { point:'Titrate to balance tone vs weakness', detail:'Some spasticity may aid standing/transfers.' },
    { point:'Don’t stop abruptly', detail:'Withdrawal syndrome.' },
  ],
  pearls:['Reducing spasticity too far can unmask underlying weakness — titrate to function, not zero tone.'],
  note:'GABA-B agonism calms spinal reflexes; the trade-off is sedation and the loss of useful tone.',
  links:{ patho:'patho-ms', pathoLabel:'Multiple sclerosis' },
},
{
  id:'pharma-sumatriptan-prophylaxis', domain:'Pharmacology', class:'Neurology & Mental health', icon:'🧠',
  title:'Migraine prophylaxis', blurb:'Reduce attack frequency when migraines are frequent or disabling.',
  examples:['Propranolol','Amitriptyline','Topiramate','Candesartan'],
  moa:[
    'Several mechanisms reduce neuronal hyperexcitability/vascular reactivity — beta-blockade, sodium/calcium channel modulation (topiramate), monoamine effects (amitriptyline).',
  ],
  effects:[
    { effect:'Fewer/less severe attacks', mechanism:'Raised migraine threshold.' },
  ],
  adverse:[
    { ae:'Topiramate: teratogenic, cognitive slowing, weight loss', mechanism:'Avoid in pregnancy; counsel on contraception.' },
    { ae:'Propranolol: avoid in asthma', mechanism:'β2 bronchoconstriction.' },
  ],
  practical:[
    { point:'Offer when ≥4 attacks/month or disabling', detail:'Trial for 2–3 months at adequate dose.' },
    { point:'Choose by comorbidity', detail:'Propranolol if hypertensive (not asthmatic); amitriptyline if poor sleep; avoid topiramate if pregnancy possible.' },
  ],
  pearls:['Match the prophylactic to comorbidities — and avoid topiramate in women who might conceive.'],
  note:'Prophylaxis raises the migraine threshold; the choice is driven by the patient’s other conditions and pregnancy plans.',
  links:{ patho:'patho-migraine', pathoLabel:'Migraine' },
},
{
  id:'pharma-paracetamol', domain:'Pharmacology', class:'Neurology & Mental health', icon:'💊',
  title:'Paracetamol', blurb:'The default first-line analgesic/antipyretic — safe at dose, lethal in overdose.',
  examples:['Paracetamol (oral/IV/rectal)'],
  moa:[
    'Central action (likely **COX inhibition in the CNS** and other pathways) → analgesia and antipyresis with minimal peripheral anti-inflammatory effect.',
  ],
  effects:[
    { effect:'Pain and fever relief', mechanism:'Central prostaglandin modulation.' },
  ],
  adverse:[
    { ae:'Hepatotoxicity in overdose', mechanism:'NAPQI accumulation depletes glutathione → centrilobular necrosis.' },
    { ae:'Dose-reduce in low weight/frailty/liver disease', mechanism:'Reduced metabolic reserve.' },
  ],
  practical:[
    { point:'Max 4 g/day; reduce if <50 kg or frail', detail:'Many combination products hide extra paracetamol — check.' },
    { point:'Overdose → N-acetylcysteine', detail:'Replenishes glutathione; treat by nomogram/timing.' },
  ],
  pearls:['Staggered or “therapeutic-excess” paracetamol overdose is easily missed — ask about all paracetamol-containing products.'],
  note:'Safe centrally-acting analgesia at dose; in overdose NAPQI overwhelms glutathione and destroys the liver — hence NAC.',
  links:{ patho:'patho-overdose', pathoLabel:'Paracetamol overdose' },
},
{
  id:'pharma-codeine', domain:'Pharmacology', class:'Neurology & Mental health', icon:'💊',
  title:'Weak opioids & tramadol', blurb:'Codeine/tramadol bridge the analgesic ladder — with pharmacogenetic surprises.',
  examples:['Codeine, dihydrocodeine','Tramadol (opioid + monoamine effects)'],
  moa:[
    'Codeine is a **prodrug** converted by **CYP2D6** to morphine. Tramadol is a weak μ-agonist that also inhibits serotonin/noradrenaline reuptake.',
  ],
  effects:[
    { effect:'Moderate pain relief', mechanism:'μ-opioid agonism (± monoamine effects for tramadol).' },
  ],
  adverse:[
    { ae:'Variable effect (CYP2D6)', mechanism:'Poor metabolisers get no relief; ultra-rapid metabolisers risk morphine toxicity.' },
    { ae:'Tramadol: seizures, serotonin syndrome', mechanism:'Monoamine reuptake — caution with SSRIs/SNRIs.' },
    { ae:'Constipation, dependence', mechanism:'Opioid class effects.' },
  ],
  practical:[
    { point:'Avoid codeine in children/breastfeeding', detail:'Ultra-rapid metabolisers → unpredictable morphine levels (MHRA).' },
    { point:'Tramadol + SSRI caution', detail:'Serotonin syndrome and seizure risk.' },
  ],
  pearls:['Codeine is useless in CYP2D6 poor-metabolisers and dangerous in ultra-rapid ones — a true pharmacogenetic drug.'],
  note:'Codeine’s entire effect depends on CYP2D6 conversion to morphine; tramadol’s monoamine action adds serotonergic risks.',
  links:{ pharma:'pharma-opioids', pharmaLabel:'Opioids' },
},

]);
