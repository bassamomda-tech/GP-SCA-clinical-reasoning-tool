/* Reasoning GP — Basic Science: PATHOPHYSIOLOGY (set 4: Neurology/Mental health + MSK)
   Same schema as basic-science-patho.js. Educational reasoning aid. */
window.RGP_BASICSCIENCE = (window.RGP_BASICSCIENCE || []).concat([

/* ---------------- NEUROLOGY & MENTAL HEALTH ---------------- */
{ id:'patho-migraine', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'🧠',
  title:'Migraine', blurb:'Why a migraine is a brain-excitability disorder, not just a headache.',
  mechanism:[
    'Migraine arises from a hyperexcitable brain. A wave of **cortical spreading depression** underlies aura, and activation of the **trigeminovascular system** releases CGRP, causing neurogenic inflammation and throbbing pain.',
    'Central sensitisation explains photophobia, phonophobia, nausea and allodynia.',
  ],
  cascade:[
    { step:'Cortical spreading depression', detail:'Aura (visual/sensory) in some' },
    { step:'Trigeminovascular activation + CGRP', detail:'Throbbing pain, neurogenic inflammation' },
    { step:'Central sensitisation', detail:'Photophobia, nausea, allodynia' },
  ],
  implications:[
    { clue:'Triptans target the mechanism', why:'5-HT₁ agonists constrict vessels and dampen trigeminal/CGRP signalling.' },
    { clue:'Medication-overuse worsens headache', why:'Frequent analgesia/triptans lower the threshold for attacks.' },
    { clue:'CGRP biology now has targeted preventers', why:'Anti-CGRP therapies reflect the core mechanism.' },
  ],
  pearls:[
    'Aura + combined pill raises stroke risk — avoid oestrogen.',
    'Prophylaxis if frequent/disabling (e.g. propranolol, amitriptyline, topiramate).',
  ],
  note:'Migraine is the brain mis-firing — aura is a spreading electrical wave, the pain is trigeminal CGRP release — which is why it behaves so differently from a tension headache.',
  links:{ case:'cases/migraine.html', caseLabel:'Migraine case' } },

{ id:'patho-epilepsy', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'⚡',
  title:'Epilepsy & seizures', blurb:'Why synchronised neuronal firing produces seizures.',
  mechanism:[
    'A seizure is **excessive, synchronised neuronal discharge** from an imbalance between excitation (glutamate) and inhibition (GABA).',
    'Focal seizures start in one area (symptoms map to that region); generalised seizures involve both hemispheres from onset.',
  ],
  cascade:[
    { step:'Excitation/inhibition imbalance', detail:'Hypersynchronous discharge' },
    { step:'Seizure', detail:'Focal or generalised; post-ictal recovery' },
    { step:'Recurrence', detail:'Epilepsy = tendency to recurrent unprovoked seizures' },
  ],
  implications:[
    { clue:'Most antiepileptics raise the seizure threshold', why:'They enhance GABA or dampen sodium/calcium channel firing.' },
    { clue:'First seizure needs provoked-cause exclusion', why:'Hypoglycaemia, hyponatraemia, alcohol withdrawal, infection.' },
    { clue:'Driving and safety advice are essential', why:'Legal duty and risk during loss of awareness.' },
  ],
  pearls:[
    'Sodium valproate is teratogenic — avoid in those who may conceive.',
    'Tongue-biting and incontinence favour seizure over syncope.',
  ],
  note:'A seizure is the brain\u2019s circuits firing in lockstep — treatment is about restoring the balance between the accelerator (glutamate) and the brake (GABA).',
  links:{ case:'cases/epilepsy.html', caseLabel:'Epilepsy case' } },

{ id:'patho-parkinsons', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'🧠',
  title:'Parkinson\u2019s disease', blurb:'Why dopamine loss produces tremor, rigidity and bradykinesia.',
  mechanism:[
    'Progressive loss of **dopaminergic neurons** in the substantia nigra depletes dopamine in the basal ganglia, disrupting the circuits that smooth and initiate movement.',
    'The result is the triad of resting tremor, rigidity and bradykinesia, with postural instability later.',
  ],
  cascade:[
    { step:'Nigral dopaminergic neuron loss', detail:'Basal ganglia dopamine depletion' },
    { step:'Motor circuit dysfunction', detail:'Resting tremor, rigidity, bradykinesia' },
    { step:'Progression', detail:'Postural instability, non-motor features' },
  ],
  implications:[
    { clue:'Levodopa replaces dopamine', why:'Directly addresses the deficit — most effective symptomatic therapy.' },
    { clue:'Asymmetric, resting tremor that improves with movement', why:'Distinguishes it from essential tremor.' },
    { clue:'Never stop Parkinson\u2019s meds abruptly', why:'Risk of acute akinesia / neuroleptic-malignant-like crisis.' },
  ],
  pearls:[
    'Anosmia, REM-sleep disorder and constipation can precede motor signs.',
    'Avoid dopamine-blocking antiemetics (metoclopramide) — use domperidone.',
  ],
  note:'Lose the dopamine that lubricates the basal ganglia and movement becomes slow, stiff and tremulous — which is exactly what replacing dopamine improves.',
  links:{ case:'cases/parkinsons.html', caseLabel:'Parkinson\u2019s case' } },

{ id:'patho-ms', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'🧠',
  title:'Multiple sclerosis', blurb:'Why demyelination causes lesions \u201cseparated in time and space\u201d.',
  mechanism:[
    'Autoimmune attack on CNS **myelin** slows or blocks nerve conduction. Lesions occur at different sites and different times — the hallmark dissemination in space and time.',
    'Relapsing-remitting disease reflects inflammation then partial repair; progressive disease reflects axonal loss.',
  ],
  cascade:[
    { step:'Immune demyelination', detail:'Conduction block in affected tracts' },
    { step:'Focal deficits', detail:'Optic neuritis, sensory, motor, cerebellar signs' },
    { step:'Relapse/remission or progression', detail:'Repair vs cumulative axonal loss' },
  ],
  implications:[
    { clue:'Symptoms worsen with heat (Uhthoff\u2019s)', why:'Heat further slows demyelinated conduction.' },
    { clue:'MRI shows lesions disseminated in space/time', why:'Confirms the diagnostic pattern.' },
    { clue:'Disease-modifying drugs reduce relapses', why:'Dampen the autoimmune attack.' },
  ],
  pearls:[
    'Optic neuritis (painful monocular visual loss) is a common first presentation.',
    'Manage symptoms: spasticity, bladder, fatigue, neuropathic pain.',
  ],
  note:'MS strips myelin in scattered patches at scattered times — \u201clesions separated in space and time\u201d is both the mechanism and the diagnostic rule.',
  links:{} },

{ id:'patho-dementia', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'🧠',
  title:'Dementia (Alzheimer\u2019s)', blurb:'Why progressive neuronal loss erodes memory and function.',
  mechanism:[
    'In **Alzheimer\u2019s**, β-amyloid plaques and tau neurofibrillary tangles accumulate, driving synaptic loss and neuronal death — beginning in the hippocampus (memory).',
    'Acetylcholine-producing neurons are lost early, the basis of cholinesterase-inhibitor therapy.',
  ],
  cascade:[
    { step:'Amyloid + tau pathology', detail:'Synaptic and neuronal loss' },
    { step:'Hippocampal involvement', detail:'Early short-term memory failure' },
    { step:'Spread', detail:'Language, executive function, personality, ADLs' },
  ],
  implications:[
    { clue:'Cholinesterase inhibitors give modest benefit', why:'Boost the depleted acetylcholine.' },
    { clue:'Exclude reversible mimics', why:'Depression, B12/thyroid, medication, normal-pressure hydrocephalus.' },
    { clue:'Vascular, Lewy body and frontotemporal differ', why:'Pattern and management vary — e.g. neuroleptic sensitivity in Lewy body.' },
  ],
  pearls:[
    'Sudden stepwise decline suggests vascular dementia.',
    'Visual hallucinations + parkinsonism + fluctuation → Lewy body.',
  ],
  note:'Alzheimer\u2019s erodes the brain from the memory centres outward — and the early loss of acetylcholine neurons is what the main drugs try to prop up.',
  links:{ case:'cases/dementia.html', caseLabel:'Dementia case' } },

{ id:'patho-anxiety', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'🌀',
  title:'Anxiety disorders', blurb:'Why the threat system over-fires and the body responds.',
  mechanism:[
    'Anxiety reflects an over-active **threat-detection** circuit (amygdala) with reduced prefrontal regulation, amplified by serotonergic and noradrenergic signalling.',
    'Autonomic activation produces the physical symptoms — palpitations, sweating, hyperventilation, GI upset — which the brain misreads as further danger.',
  ],
  cascade:[
    { step:'Threat over-perception', detail:'Amygdala hyperactivity, poor top-down control' },
    { step:'Autonomic arousal', detail:'Palpitations, tremor, hyperventilation' },
    { step:'Misinterpretation cycle', detail:'Bodily symptoms reinforce fear' },
  ],
  implications:[
    { clue:'SSRIs are first-line drug therapy', why:'Modulate serotonergic tone over weeks.' },
    { clue:'CBT targets the maintenance cycle', why:'Breaks the catastrophic misinterpretation of symptoms.' },
    { clue:'Exclude organic mimics', why:'Hyperthyroidism, arrhythmia, caffeine, withdrawal.' },
  ],
  pearls:[
    'Avoid long-term benzodiazepines — dependence.',
    'SSRIs can transiently worsen anxiety on starting — warn and review.',
  ],
  note:'Anxiety is a smoke alarm set too sensitively — the body\u2019s alarm response then feeds back as fresh evidence of danger.',
  links:{ case:'cases/anxiety.html', caseLabel:'Anxiety case', algorithm:'tools/algorithms/anxiety.html', algorithmLabel:'Anxiety pathway' } },

{ id:'patho-bppv', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'🌀',
  title:'BPPV & vertigo', blurb:'Why displaced otoliths cause brief positional spinning.',
  mechanism:[
    'In **BPPV**, calcium-carbonate otoliths dislodge into a semicircular canal. Head movement makes them shift, falsely signalling rotation — brief, intense positional vertigo.',
    'Other peripheral causes (vestibular neuritis, Ménière\u2019s) and central causes (stroke) produce different patterns.',
  ],
  cascade:[
    { step:'Otoliths in semicircular canal', detail:'Abnormal endolymph movement on positioning' },
    { step:'False rotation signal', detail:'Brief vertigo + nystagmus on head turn' },
    { step:'Fatigable, positional', detail:'Settles within a minute' },
  ],
  implications:[
    { clue:'Dix-Hallpike provokes; Epley treats', why:'Repositioning the otoliths out of the canal cures most BPPV.' },
    { clue:'Distinguish peripheral from central', why:'Central vertigo (stroke) has other neurology and persistent nystagmus.' },
    { clue:'Brief + positional + fatigable = BPPV', why:'Pattern recognition guides management.' },
  ],
  pearls:[
    'Continuous vertigo with deafness/tinnitus suggests Ménière\u2019s or neuritis.',
    'New vertigo with focal signs/ataxia → exclude posterior-circulation stroke.',
  ],
  note:'BPPV is a mechanical fault — a loose crystal in the wrong canal — so a mechanical fix (the Epley manoeuvre) cures it.',
  links:{ algorithm:'tools/algorithms/bppv.html', algorithmLabel:'BPPV pathway', case:'cases/vertigo.html', caseLabel:'Vertigo case' } },

{ id:'patho-bells-palsy', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'😐',
  title:'Bell\u2019s palsy', blurb:'Why facial-nerve inflammation causes one-sided facial weakness.',
  mechanism:[
    'Inflammation/oedema of the **facial nerve (CN VII)**, often post-viral, compresses it within its bony canal — causing lower-motor-neuron facial weakness.',
    'Because it is lower motor neuron, the **whole** half of the face (including forehead) is affected.',
  ],
  cascade:[
    { step:'Facial nerve oedema', detail:'Compression in the facial canal' },
    { step:'LMN facial weakness', detail:'Whole hemiface incl. forehead, eye won\u2019t close' },
    { step:'Recovery', detail:'Most recover; eye protection meanwhile' },
  ],
  implications:[
    { clue:'Forehead sparing means stroke, not Bell\u2019s', why:'UMN lesions spare the forehead (bilateral cortical supply).' },
    { clue:'Early steroids improve recovery', why:'Reduce nerve oedema if started within 72 hours.' },
    { clue:'Protect the eye', why:'Incomplete closure risks exposure keratopathy.' },
  ],
  pearls:[
    'Rash/vesicles + palsy = Ramsay Hunt (add antivirals).',
    'Bilateral or progressive palsy needs further work-up.',
  ],
  note:'Forehead involvement is the whole game: a lower-motor-neuron CN VII palsy weakens the entire half-face, distinguishing Bell\u2019s from a stroke.',
  links:{} },

{ id:'patho-trigeminal-neuralgia', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'⚡',
  title:'Trigeminal neuralgia', blurb:'Why brief electric-shock facial pain follows a nerve territory.',
  mechanism:[
    'Usually **neurovascular compression** of the trigeminal nerve root demyelinates fibres, causing paroxysmal, ephaptic (cross-talk) firing.',
    'Light touch in the territory triggers sudden, severe, lancinating pain.',
  ],
  cascade:[
    { step:'Nerve root compression/demyelination', detail:'Abnormal excitability' },
    { step:'Trigger-evoked paroxysms', detail:'Brief electric-shock pain in V2/V3' },
    { step:'Refractory periods', detail:'Pain-free intervals between attacks' },
  ],
  implications:[
    { clue:'Carbamazepine is first-line', why:'Sodium-channel blockade calms the hyperexcitable nerve.' },
    { clue:'Red flags warrant imaging', why:'Young age, bilateral, sensory loss or other neurology suggest MS or a lesion.' },
    { clue:'Triggered by touch/chewing/cold', why:'Characteristic and diagnostic.' },
  ],
  pearls:[
    'Pain is unilateral and follows divisions of the trigeminal nerve.',
    'MS can cause trigeminal neuralgia, especially if young/bilateral.',
  ],
  note:'A blood vessel rubbing the nerve makes it misfire on the lightest touch — which is why an anticonvulsant, not an analgesic, is the treatment.',
  links:{} },

{ id:'patho-neuropathy', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'🦶',
  title:'Peripheral neuropathy', blurb:'Why nerve damage starts in the longest nerves first.',
  mechanism:[
    'Metabolic, toxic or inflammatory insults damage peripheral nerves. Length-dependent processes (e.g. diabetes) hit the **longest axons first** — feet before hands (glove-and-stocking).',
    'Sensory fibres give numbness/pain/paraesthesia; motor involvement causes weakness; autonomic fibres affect BP and bladder.',
  ],
  cascade:[
    { step:'Axonal/myelin injury', detail:'Distal, length-dependent' },
    { step:'Glove-and-stocking sensory loss', detail:'Numbness, burning, paraesthesia' },
    { step:'Motor/autonomic involvement', detail:'Weakness, postural drop' },
  ],
  implications:[
    { clue:'Diabetes and alcohol are the commonest causes', why:'Plus B12 deficiency, drugs, thyroid, renal.' },
    { clue:'Neuropathic pain needs specific agents', why:'Amitriptyline, duloxetine, gabapentinoids — not simple analgesics.' },
    { clue:'Foot care prevents diabetic ulcers', why:'Sensory loss removes the protective pain warning.' },
  ],
  pearls:[
    'Rapid, ascending weakness → think Guillain-Barré (emergency).',
    'Screen reversible causes: glucose, B12, TFT, U&E, alcohol.',
  ],
  note:'The longest nerves are most vulnerable, so length-dependent neuropathy announces itself in the feet — and losing protective sensation is what makes diabetic feet so dangerous.',
  links:{ algorithm:'tools/algorithms/sensory-neuropathy.html', algorithmLabel:'Sensory neuropathy pathway' } },

{ id:'patho-essential-tremor', domain:'Pathophysiology', system:'Neurology & Mental health', icon:'🤝',
  title:'Essential tremor', blurb:'Why an action tremor differs from Parkinson\u2019s.',
  mechanism:[
    'A central oscillator (cerebello-thalamo-cortical network) produces a **postural/action tremor** — present on holding a posture or movement, not at rest.',
    'It is often familial and characteristically improves with alcohol.',
  ],
  cascade:[
    { step:'Abnormal central oscillation', detail:'6–12 Hz action tremor' },
    { step:'Posture/action brings it out', detail:'Worse holding a cup, writing' },
    { step:'Slowly progressive', detail:'Bilateral, may affect head/voice' },
  ],
  implications:[
    { clue:'Action tremor vs Parkinson\u2019s rest tremor', why:'Essential tremor eases at rest; Parkinson\u2019s tremor is worst at rest.' },
    { clue:'Propranolol or primidone help', why:'Dampen the oscillation.' },
    { clue:'Alcohol responsiveness is a clue', why:'Characteristic of essential tremor.' },
  ],
  pearls:[
    'Often bilateral and symmetrical; family history common.',
    'No bradykinesia or rigidity (would suggest Parkinson\u2019s).',
  ],
  note:'Essential tremor shows itself in action and quiets at rest — the mirror image of Parkinson\u2019s, which is the key bedside distinction.',
  links:{ case:'cases/tremor.html', caseLabel:'Tremor case', algorithm:'tools/algorithms/tremors.html', algorithmLabel:'Tremor pathway' } },

/* ---------------- MUSCULOSKELETAL & RHEUMATOLOGY ---------------- */
{ id:'patho-osteoarthritis', domain:'Pathophysiology', system:'Musculoskeletal', icon:'🦴',
  title:'Osteoarthritis', blurb:'Why \u201cwear-and-repair\u201d cartilage loss causes mechanical joint pain.',
  mechanism:[
    'Progressive loss of articular **cartilage** with subchondral bone change, osteophytes and low-grade synovitis — a failure of the joint\u2019s repair processes, not simple wear.',
    'Reduced cartilage cushioning produces mechanical, use-related pain that eases with rest.',
  ],
  cascade:[
    { step:'Cartilage breakdown', detail:'Joint-space narrowing, osteophytes' },
    { step:'Mechanical pain + stiffness', detail:'Worse with use, brief morning stiffness (<30 min)' },
    { step:'Functional loss', detail:'Reduced range, deformity' },
  ],
  implications:[
    { clue:'Use-related pain + short morning stiffness', why:'Contrasts with the prolonged stiffness of inflammatory arthritis.' },
    { clue:'Exercise and weight loss are core treatment', why:'Strengthen support and offload the joint.' },
    { clue:'X-ray changes correlate poorly with symptoms', why:'Treat the patient, not the film.' },
  ],
  pearls:[
    'Commonly knees, hips, DIP joints (Heberden\u2019s nodes).',
    'Topical NSAIDs first for knee/hand OA.',
  ],
  note:'OA is failed cartilage repair, so the pain is mechanical — worse with use, better with rest — the opposite rhythm to inflammatory joint disease.',
  links:{ case:'cases/osteoarthritis.html', caseLabel:'Osteoarthritis case' } },

{ id:'patho-ra', domain:'Pathophysiology', system:'Musculoskeletal', icon:'✋',
  title:'Rheumatoid arthritis', blurb:'Why autoimmune synovitis destroys joints symmetrically.',
  mechanism:[
    'Autoimmune **synovial inflammation** (pannus) erodes cartilage and bone. It is symmetrical, affects small joints (MCP, PIP, wrists) and spares the DIPs.',
    'Systemic cytokines (TNF, IL-6) drive joint damage and extra-articular features.',
  ],
  cascade:[
    { step:'Autoimmune synovitis', detail:'Pannus formation' },
    { step:'Symmetrical small-joint arthritis', detail:'Prolonged morning stiffness (>30–60 min)' },
    { step:'Erosions + deformity', detail:'If untreated; extra-articular disease' },
  ],
  implications:[
    { clue:'Early DMARDs prevent erosions', why:'A \u201cwindow of opportunity\u201d — refer urgently for suspected RA.' },
    { clue:'Prolonged morning stiffness signals inflammation', why:'Distinguishes from OA.' },
    { clue:'Biologics target the cytokines', why:'Anti-TNF/IL-6 when DMARDs insufficient.' },
  ],
  pearls:[
    'Anti-CCP is specific and prognostic.',
    'Watch methotrexate monitoring (FBC, LFT) and pneumonitis.',
  ],
  note:'RA is the immune system attacking the synovium — symmetrical, small-joint, with long morning stiffness — and the urgency is because early DMARDs stop erosions before they happen.',
  links:{} },

{ id:'patho-pmr-gca', domain:'Pathophysiology', system:'Musculoskeletal', icon:'💪',
  title:'PMR & giant cell arteritis', blurb:'Why these linked conditions cause girdle pain and threaten sight.',
  mechanism:[
    '**PMR** is an inflammatory condition causing shoulder/hip girdle pain and stiffness. **GCA** is large-vessel vasculitis of cranial arteries — they overlap and can coexist.',
    'GCA inflammation can occlude the ophthalmic artery, causing sudden irreversible blindness.',
  ],
  cascade:[
    { step:'Systemic large-vessel inflammation', detail:'Raised ESR/CRP' },
    { step:'PMR', detail:'Bilateral girdle pain, prolonged morning stiffness, age >50' },
    { step:'GCA', detail:'Temporal headache, jaw claudication, scalp tenderness, visual loss' },
  ],
  implications:[
    { clue:'GCA is a sight-saving emergency', why:'Start high-dose steroids immediately on suspicion — don\u2019t wait for biopsy.' },
    { clue:'PMR responds dramatically to low-dose steroid', why:'A rapid response supports the diagnosis.' },
    { clue:'Both are diseases of the over-50s', why:'Rare below 50 — reconsider if younger.' },
  ],
  pearls:[
    'Jaw claudication and visual symptoms are GCA red flags.',
    'Temporal artery biopsy/USS confirms but must not delay steroids.',
  ],
  note:'PMR and GCA are two faces of the same inflammatory process — and the reason GCA is an emergency is a few hours\u2019 delay can cost permanent sight.',
  links:{} },

{ id:'patho-axial-spa', domain:'Pathophysiology', system:'Musculoskeletal', icon:'🧍',
  title:'Axial spondyloarthritis', blurb:'Why inflammatory back pain improves with movement.',
  mechanism:[
    'Inflammation at **entheses** (where ligaments insert into bone) and the sacroiliac joints, strongly HLA-B27 associated, drives inflammatory spinal pain and, over time, new bone formation (ankylosis).',
    'Inflammatory pain eases with activity and worsens with rest — the reverse of mechanical pain.',
  ],
  cascade:[
    { step:'Enthesitis + sacroiliitis', detail:'Inflammatory spinal pain' },
    { step:'Inflammatory pattern', detail:'Night/early-morning pain, prolonged stiffness, better with movement' },
    { step:'Ankylosis', detail:'Spinal fusion if untreated' },
  ],
  implications:[
    { clue:'Inflammatory back pain in a young adult warrants referral', why:'Onset <45, >3 months, morning stiffness, improves with exercise.' },
    { clue:'NSAIDs + exercise are first-line', why:'Reduce inflammation and preserve mobility.' },
    { clue:'Biologics (anti-TNF/IL-17) for refractory disease', why:'Target the inflammatory drive.' },
  ],
  pearls:[
    'Associated with uveitis, psoriasis and IBD.',
    'Beware delayed diagnosis — average lag is years.',
  ],
  note:'Inflammatory back pain announces itself by improving with movement and waking the patient at night — the opposite of mechanical pain, and the cue to refer.',
  links:{ case:'cases/axial-spa.html', caseLabel:'Axial SpA case' } },

{ id:'patho-back-pain', domain:'Pathophysiology', system:'Musculoskeletal', icon:'🧎',
  title:'Mechanical back pain & sciatica', blurb:'Why most back pain is benign — and what makes it dangerous.',
  mechanism:[
    'Most low back pain is **mechanical** — from muscles, ligaments, discs and facet joints — and self-limiting. A prolapsed disc can compress a nerve root, causing radicular leg pain (**sciatica**).',
    'Rarely, pathology (cauda equina, malignancy, infection, fracture) threatens the cord/roots — the basis for red flags.',
  ],
  cascade:[
    { step:'Mechanical strain / disc prolapse', detail:'Local pain ± nerve-root compression' },
    { step:'Radicular pain (sciatica)', detail:'Dermatomal leg pain, ± neurology' },
    { step:'Red-flag pathology (rare)', detail:'Cauda equina, cancer, infection, fracture' },
  ],
  implications:[
    { clue:'Cauda equina is an emergency', why:'Saddle anaesthesia, bladder/bowel dysfunction, bilateral leg symptoms — urgent MRI.' },
    { clue:'Most cases need reassurance + movement, not imaging', why:'Early imaging doesn\u2019t improve non-specific back pain.' },
    { clue:'Stay active', why:'Bed rest worsens outcomes.' },
  ],
  pearls:[
    'Screen red flags: age extremes, trauma, cancer history, fever, neurology.',
    'Sciatica usually improves over weeks with conservative care.',
  ],
  note:'The art is separating the common, benign, mechanical majority from the rare red-flag few — which is exactly what the red-flag questions are for.',
  links:{ case:'cases/low-back-pain.html', caseLabel:'Low back pain case', algorithm:'tools/algorithms/sciatica.html', algorithmLabel:'Sciatica pathway' } },

{ id:'patho-fibromyalgia', domain:'Pathophysiology', system:'Musculoskeletal', icon:'🌐',
  title:'Fibromyalgia', blurb:'Why central pain amplification causes widespread pain with normal tests.',
  mechanism:[
    'Fibromyalgia is a disorder of **central pain processing** — the CNS amplifies pain signals (central sensitisation), lowering pain thresholds without tissue damage.',
    'Disrupted sleep, mood and the stress response feed and worsen the amplification.',
  ],
  cascade:[
    { step:'Central sensitisation', detail:'Amplified pain perception' },
    { step:'Widespread pain + fatigue', detail:'Non-restorative sleep, \u201cfibro-fog\u201d' },
    { step:'Normal investigations', detail:'No inflammation or structural damage' },
  ],
  implications:[
    { clue:'Investigations are normal by definition', why:'Limited testing avoids harm; exclude mimics once.' },
    { clue:'Treatment is non-pharmacological first', why:'Graded exercise, sleep, CBT target the central mechanism.' },
    { clue:'Opioids don\u2019t work and harm', why:'The problem is central processing, not nociception.' },
  ],
  pearls:[
    'Amitriptyline/duloxetine/pregabalin can help pain and sleep.',
    'Validate the symptoms — they are real, just not structural.',
  ],
  note:'Fibromyalgia is the volume control for pain turned up centrally — which is why scans are normal and why exercise and sleep, not painkillers, are the mainstay.',
  links:{} },

{ id:'patho-tendinopathy', domain:'Pathophysiology', system:'Musculoskeletal', icon:'💪',
  title:'Tendinopathy', blurb:'Why overused tendons degenerate rather than simply \u201cinflame\u201d.',
  mechanism:[
    'Repetitive overload exceeds the tendon\u2019s repair capacity, causing **collagen disorganisation and degeneration** (tendinosis) rather than classic inflammation.',
    'The degenerate tendon is painful and weak on loading (e.g. rotator cuff, Achilles, tennis elbow).',
  ],
  cascade:[
    { step:'Repetitive overload', detail:'Repair capacity exceeded' },
    { step:'Collagen degeneration', detail:'Load-related pain and weakness' },
    { step:'Chronic tendinopathy', detail:'Persistent if loading not modified' },
  ],
  implications:[
    { clue:'Progressive loading rehab is the treatment', why:'Stimulates tendon remodelling — \u201ctendons need load to heal\u201d.' },
    { clue:'Steroid injection gives short-term relief but may weaken tendon', why:'Use judiciously; can impair healing/risk rupture.' },
    { clue:'It\u2019s degeneration, not inflammation', why:'Explains why rest alone and NSAIDs often disappoint.' },
  ],
  pearls:[
    'Sudden pop + loss of function suggests rupture, not tendinopathy.',
    'Address the causative load/technique.',
  ],
  note:'Overused tendons degenerate, not inflame — which is why graded loading, not rest and anti-inflammatories, is what rebuilds them.',
  links:{} },

{ id:'patho-septic-arthritis', domain:'Pathophysiology', system:'Musculoskeletal', icon:'🦠',
  title:'Septic arthritis', blurb:'Why an infected joint is an emergency.',
  mechanism:[
    'Bacteria (often *S. aureus*) reach a joint via blood, injury or spread, multiplying in synovial fluid. The inflammatory response and bacterial enzymes **destroy cartilage within days**.',
    'A hot, swollen, exquisitely painful joint with fever is septic arthritis until proven otherwise.',
  ],
  cascade:[
    { step:'Joint infection', detail:'Bacterial proliferation in synovial fluid' },
    { step:'Acute monoarthritis', detail:'Hot, swollen, very painful, won\u2019t move; fever' },
    { step:'Rapid cartilage destruction', detail:'Irreversible damage / sepsis if delayed' },
  ],
  implications:[
    { clue:'Aspirate before antibiotics where possible', why:'Confirms diagnosis and organism; then urgent washout.' },
    { clue:'Same-day referral', why:'Delay means joint destruction and systemic sepsis.' },
    { clue:'Prosthetic joints and immunosuppression raise risk', why:'Lower threshold to suspect.' },
  ],
  pearls:[
    'A single acutely hot swollen joint is septic arthritis until excluded — even if gout is likely.',
    'Gonococcal arthritis in young sexually active adults.',
  ],
  note:'Bacteria can wreck a joint in 24–48 hours — which is why \u201chot, swollen, won\u2019t move it\u201d triggers same-day referral, not a wait-and-see.',
  links:{} },

{ id:'patho-sle', domain:'Pathophysiology', system:'Musculoskeletal', icon:'🦋',
  title:'Systemic lupus erythematosus', blurb:'Why a multisystem autoimmune disease relapses and remits.',
  mechanism:[
    'Loss of self-tolerance produces **autoantibodies** (anti-dsDNA, ANA) and immune complexes that deposit in tissues — skin, joints, kidney, blood, serosa, CNS — driving multisystem inflammation.',
    'Complement consumption and a relapsing-remitting course are characteristic.',
  ],
  cascade:[
    { step:'Autoantibody + immune-complex formation', detail:'Tissue deposition' },
    { step:'Multisystem inflammation', detail:'Rash, arthralgia, serositis, nephritis, cytopenias' },
    { step:'Flares and remissions', detail:'Triggered by sun, infection, hormones' },
  ],
  implications:[
    { clue:'ANA is sensitive; anti-dsDNA is specific', why:'Screen with ANA, confirm with specific antibodies.' },
    { clue:'Lupus nephritis drives prognosis', why:'Monitor urine/renal function — silent until advanced.' },
    { clue:'Photosensitivity and flare triggers', why:'Sun protection reduces flares.' },
  ],
  pearls:[
    'Predominantly women of childbearing age.',
    'Hydroxychloroquine is a disease-modifying mainstay.',
  ],
  note:'Lupus is the immune system attacking many organs at once via immune complexes — which is why it relapses, remits, and must be tracked across systems, especially the kidney.',
  links:{} },

{ id:'patho-carpal-tunnel', domain:'Pathophysiology', system:'Musculoskeletal', icon:'🖐️',
  title:'Carpal tunnel syndrome', blurb:'Why median-nerve compression tingles the radial fingers at night.',
  mechanism:[
    'The **median nerve** is compressed as it passes through the carpal tunnel at the wrist, impairing conduction to its sensory and motor territory.',
    'Anything reducing tunnel space (oedema, repetitive strain, pregnancy, hypothyroidism, RA) precipitates it.',
  ],
  cascade:[
    { step:'Median nerve compression', detail:'Impaired conduction at the wrist' },
    { step:'Sensory symptoms', detail:'Tingling/numbness of thumb, index, middle, radial-ring fingers' },
    { step:'Motor loss (late)', detail:'Thenar wasting, weak thumb abduction' },
  ],
  implications:[
    { clue:'Night symptoms relieved by shaking the hand', why:'Classic history; fluid redistribution overnight worsens compression.' },
    { clue:'Splinting and treating the cause help early', why:'Wrist splints, treat hypothyroidism, await post-pregnancy resolution.' },
    { clue:'Decompression surgery for persistent/severe cases', why:'Relieves the mechanical compression.' },
  ],
  pearls:[
    'Sensation spares the little finger (ulnar territory).',
    'Tinel\u2019s and Phalen\u2019s tests support the diagnosis.',
  ],
  note:'It\u2019s a space problem at the wrist — the median nerve\u2019s territory tingles, classically at night, and relieving the pressure (splint or surgery) is the fix.',
  links:{} },

]);
