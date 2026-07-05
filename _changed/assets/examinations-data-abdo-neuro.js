/* Reasoning GP — Examinations data: Abdominal & Neurological */
window.RGP_EXAMINATIONS = (window.RGP_EXAMINATIONS || []).concat([

{
  id:'abdominal', system:'Abdominal & GI', icon:'🫃', title:'Abdominal examination',
  blurb:'Peripheral signs → inspection → palpation (light/deep) → percussion → auscultation.',
  indications:['Abdominal pain, distension, mass','Altered bowel habit, weight loss','Jaundice / suspected liver disease','GI bleeding, suspected organomegaly or ascites'],
  equipment:['Couch laid flat, one pillow','Stethoscope','Expose xiphisternum to pubis (drape genitalia)'],
  redFlags:[
    'Rigid, board-like abdomen / peritonism → **emergency** surgical referral',
    'Pulsatile expansile mass + pain/collapse → ?ruptured AAA — 999',
    'GI bleeding with haemodynamic compromise → emergency',
    'Weight loss + mass/altered bowel habit / iron-deficiency anaemia → 2-week-wait',
  ],
  sequence:[
    { phase:'General & hands', items:[
      { name:'End of bed', finding:'Cachexia, jaundice, distension, pain behaviour, stoma/drains' },
      { name:'Hands', finding:'Clubbing (IBD, cirrhosis, coeliac), leuconychia, koilonychia, palmar erythema, Dupuytren, asterixis (liver flap)' },
    ]},
    { phase:'Face, neck & chest', items:[
      { name:'Eyes/mouth', finding:'Conjunctival pallor, scleral icterus, angular stomatitis, glossitis, ulcers' },
      { name:'Neck & chest', positive:'Virchow node (left supraclavicular) → GI malignancy; spider naevi, gynaecomastia → chronic liver disease' },
    ]},
    { phase:'Inspect', items:[
      { name:'Abdominal inspection', finding:'Distension, scars, striae, caput medusae, visible peristalsis/pulsation, hernias (ask to cough)' },
    ]},
    { phase:'Palpate', items:[
      { name:'Light palpation (9 regions)', how:'Watch the face; start away from pain', positive:'Tenderness, guarding, rebound' },
      { name:'Deep palpation & organs', how:'Liver (RIF up to costal margin on inspiration), spleen (RIF to LUQ), kidneys (ballot)', finding:'Hepatomegaly, splenomegaly, ballotable kidneys, masses' },
      { name:'Aorta', how:'Palpate above umbilicus', positive:'Expansile pulsation → ?AAA' },
    ]},
    { phase:'Percuss', items:[
      { name:'Liver span & bladder; shifting dullness', how:'Percuss liver edges; test for ascites', positive:'Shifting dullness / fluid thrill → ascites' },
    ]},
    { phase:'Auscultate & finish', items:[
      { name:'Bowel sounds & bruits', finding:'Absent (ileus/peritonitis), tinkling (obstruction), aortic/renal bruits' },
      { name:'Finish', how:'Hernial orifices, external genitalia, DRE where indicated, legs for oedema', pitfall:'"Complete my exam with hernial orifices, genitalia and a rectal examination"' },
    ]},
  ],
  outcomes:[
    { finding:'RIF tenderness + rebound + Rovsing', meaning:'Appendicitis — surgical referral' },
    { finding:'Hepatomegaly + stigmata of chronic liver disease + ascites', meaning:'Chronic liver disease — LFTs, USS, refer' },
    { finding:'Palpable expansile central mass', meaning:'AAA — urgent USS/CT, vascular referral' },
    { finding:'Mass + weight loss + altered bowel habit', meaning:'?GI malignancy — 2-week-wait referral' },
    { finding:'Distension + tinkling bowel sounds + vomiting', meaning:'Bowel obstruction — surgical referral' },
  ],
  links:{ algorithm:'tools/algorithms/abdominal-pain.html', algorithmLabel:'Abdominal pain pathway', case:'cases/dyspepsia.html', caseLabel:'Dyspepsia' },
},

{
  id:'neurological', system:'Neurological', icon:'🧠', title:'Full neurological examination (stepwise: standing → sitting → lying)',
  blurb:'One integrated neuro screen — gait & stance standing, cranial nerves + upper limbs sitting, lower limbs lying — with the localising value of every finding (UMN vs LMN, root, nerve, cerebellar, cord).',
  indications:['Limb weakness, numbness or paraesthesia','Headache or facial weakness with neurology','Difficulty walking, falls, tremor or incoordination','Suspected stroke/TIA, MS, Parkinsonism, cord/cauda equina, radiculopathy or peripheral neuropathy'],
  equipment:['Snellen chart','Pen torch','Ophthalmoscope','512 Hz tuning fork (hearing) + 128 Hz (vibration)','Cotton wool / neuro-tip','Tendon hammer','Orange/wooden stick (plantar)'],
  redFlags:[
    'Sudden focal deficit + FAST positive → **stroke pathway / 999**',
    'Bilateral leg weakness + sensory level + bladder/bowel disturbance or saddle anaesthesia → **emergency** ?cord compression / cauda equina (MRI)',
    'Rapidly ascending weakness + areflexia → ?Guillain–Barré — emergency',
    'Painful pupil-involving 3rd nerve palsy → ?posterior communicating artery aneurysm — emergency',
    'New CN deficit + headache + papilloedema → ?raised ICP — urgent imaging',
    'Wasting + fasciculations + mixed UMN/LMN signs → ?motor neurone disease — urgent neurology',
  ],
  note:'Examine by position to be slick and complete: get the patient STANDING first (gait is the single most informative test and patients fatigue), then SITTING for cranial nerves and the upper limbs, then LYING for the lower limbs and sensory levels. Throughout, the core question is "where is the lesion?" — UMN vs LMN, then which root, nerve, tract or region.',
  sequence:[
    { phase:'① STANDING — gait, stance & balance (do first)', items:[
      { name:'General inspection on standing', how:'Posture, symmetry, abnormal movements, walking aids, mobility', finding:'Hemiparetic posture, resting tremor, festination, asymmetry' },
      { name:'Gait — walk across the room and back', how:'Observe initiation, stride length, arm swing, turning, symmetry', finding:'Hemiplegic (circumduction), spastic/scissoring, ataxic broad-based, high-stepping (foot drop), parkinsonian (shuffling, reduced arm swing, festinant), waddling (proximal myopathy), antalgic, apraxic ("stuck to floor")' },
      { name:'Heel–toe (tandem) walk', how:'Walk heel-to-toe in a straight line', positive:'Unsteady/falls to one side → midline cerebellar (vermis) lesion' },
      { name:'Walk on toes (S1) and on heels (L4/5)', how:'Tip-toe then heel-walk', finding:'Cannot toe-walk → S1/gastrocnemius; cannot heel-walk → foot drop (L4/5 / common peroneal)' },
      { name:'Romberg test', how:'Stand feet together, eyes open then closed (stand ready to catch)', positive:'Steady with eyes open but sways/falls with eyes closed → sensory (dorsal-column / proprioceptive) ataxia — NOT cerebellar' },
      { name:'Pronator drift', how:'Arms out, palms up, eyes closed', positive:'One arm drifts down & pronates → contralateral UMN (pyramidal) weakness' },
    ]},
    { phase:'② SITTING — higher function & cranial nerves I–XII', items:[
      { name:'Higher function & speech', how:'Orientation, attention, dysarthria vs dysphasia, neglect', finding:'Dysphasia → dominant hemisphere; dysarthria → cerebellar/bulbar; neglect → non-dominant parietal' },
      { name:'I Olfactory', how:'Ask about change in smell', finding:'Anosmia (rarely formally tested)' },
      { name:'II Optic', how:'Acuity (Snellen), fields by confrontation, pupils (direct/consensual, RAPD swinging-light), colour vision, fundoscopy', positive:'Field defect localises the lesion (bitemporal hemianopia → chiasm; homonymous → optic tract/radiation); RAPD → optic nerve; papilloedema → raised ICP' },
      { name:'III, IV, VI Eye movements & pupils', how:'Follow target in an H; note diplopia, nystagmus, ptosis', finding:'3rd: "down-and-out", ptosis, dilated pupil; 4th: vertical diplopia on down-gaze; 6th: failed abduction; nystagmus → vestibular/cerebellar' },
      { name:'V Trigeminal', how:'Sensation in all 3 divisions, muscles of mastication, corneal reflex, jaw jerk', finding:'Sensory loss / weak masseter; brisk jaw jerk → bilateral UMN' },
      { name:'VII Facial', how:'Raise eyebrows, screw eyes shut, puff cheeks, show teeth', positive:'Forehead SPARED → UMN (stroke); forehead INVOLVED → LMN (Bell palsy, Ramsay Hunt)' },
      { name:'VIII Vestibulocochlear', how:'Whisper/finger-rub; Rinne & Weber; balance', finding:'Sensorineural vs conductive loss' },
      { name:'IX & X Glossopharyngeal/Vagus', how:'Say "ahh" (palate), gag reflex, swallow, cough, voice', positive:'Uvula deviates AWAY from the lesion; bovine cough → recurrent laryngeal/vagal' },
      { name:'XI Accessory', how:'Shrug shoulders & turn head against resistance', finding:'Weak trapezius / sternocleidomastoid' },
      { name:'XII Hypoglossal', how:'Protrude tongue; inspect for wasting/fasciculation', positive:'Tongue deviates TOWARD the side of the lesion (LMN); fasciculation → MND' },
    ]},
    { phase:'② SITTING — upper limbs (inspect → tone → power → reflexes → coordination → sensation)', items:[
      { name:'Inspect', how:'Posture, wasting, fasciculations, tremor, scars', finding:'Wasting/fasciculation → LMN/anterior horn; resting tremor → Parkinsonism; pill-rolling' },
      { name:'Tone', how:'Passive movement at wrist & elbow; supinate/pronate', finding:'Spasticity (clasp-knife, velocity-dependent) → UMN; rigidity (lead-pipe/cogwheel) → extrapyramidal; flaccid → LMN' },
      { name:'Power (MRC 0–5)', how:'Shoulder abduction (C5), elbow flexion (C5/6) / extension (C7), wrist extension (C6), finger extension (C7), finger abduction (T1), grip', finding:'Pyramidal pattern (extensors weak > flexors) → UMN; myotomal pattern → root; nerve-specific (e.g. median → APB) → mononeuropathy' },
      { name:'Reflexes', how:'Biceps (C5/6), supinator (C6), triceps (C7)', finding:'Brisk → UMN; absent/reduced → LMN/root; inverted supinator → C5/6 cord level' },
      { name:'Coordination', how:'Finger–nose (look for intention tremor/past-pointing), dysdiadochokinesis, rebound', positive:'Intention tremor, past-pointing, dysdiadochokinesia → ipsilateral cerebellar hemisphere' },
      { name:'Sensation', how:'Light touch, pinprick, vibration (128 Hz), proprioception; compare sides, map by dermatome/nerve', finding:'Dermatomal → root; glove → peripheral neuropathy; nerve territory (median/ulnar/radial) → mononeuropathy; dissociated (loss pain/temp, preserved dorsal column) → spinothalamic/cord' },
    ]},
    { phase:'③ LYING — lower limbs (inspect → tone → power → reflexes → coordination → sensation)', items:[
      { name:'Inspect', how:'Wasting, fasciculation, foot deformity (pes cavus), scars', finding:'Pes cavus + wasting → hereditary neuropathy (CMT); fasciculation → LMN/MND' },
      { name:'Tone & clonus', how:'Roll leg, lift knee briskly; test ankle clonus', finding:'Spasticity + sustained clonus (>3 beats) → UMN' },
      { name:'Power (MRC)', how:'Hip flexion (L1/2), knee extension (L3/4) / flexion (L5/S1), ankle dorsiflexion (L4/5) / plantarflexion (S1/2), big-toe extension/EHL (L5)', finding:'Localises root/level; pyramidal pattern (flexors weak > extensors) → UMN' },
      { name:'Reflexes & plantars', how:'Knee (L3/4), ankle (S1/2); stroke sole laterally for plantar response', positive:'Up-going plantar (Babinski) → UMN; absent ankle jerk → S1 root / peripheral neuropathy' },
      { name:'Coordination', how:'Heel–shin test', positive:'Incoordination → ipsilateral cerebellar' },
      { name:'Sensation & sensory level', how:'Light touch, pinprick, vibration, proprioception; ascend from feet to find a sensory level', finding:'Stocking loss → peripheral neuropathy; clear sensory LEVEL on the trunk → cord lesion; dermatomal → root' },
    ]},
    { phase:'Special / provocation tests (as indicated)', items:[
      { name:'Straight-leg raise (sciatic stretch)', how:'Passively flex hip with knee straight', positive:'Reproduces radicular leg pain → L5/S1 nerve-root irritation' },
      { name:'Saddle sensation & anal tone / PR', how:'If cauda equina suspected', positive:'Saddle anaesthesia + reduced tone + retention → **emergency MRI (cauda equina)**' },
    ]},
  ],
  outcomes:[
    { finding:'Increased tone, brisk reflexes, up-going plantars, pronator drift, pyramidal-pattern weakness', meaning:'UMN lesion — central (stroke, cord, MS, space-occupying). Localise by level/associated signs.' },
    { finding:'Wasting, fasciculation, reduced tone, absent reflexes, flaccid weakness', meaning:'LMN lesion — anterior horn / root / plexus / peripheral nerve.' },
    { finding:'Mixed UMN + LMN signs with fasciculation, no sensory loss', meaning:'Motor neurone disease — urgent neurology.' },
    { finding:'Unilateral facial weakness sparing the forehead + arm/leg signs', meaning:'Contralateral UMN — stroke pathway.' },
    { finding:'Facial weakness involving the forehead (LMN VII)', meaning:'Bell palsy (steroids if <72 h) / Ramsay Hunt / other VII lesion.' },
    { finding:'Bitemporal hemianopia', meaning:'Optic chiasm lesion (e.g. pituitary) — imaging + endocrine.' },
    { finding:'Homonymous hemianopia', meaning:'Contralateral optic tract / radiation / occipital lesion.' },
    { finding:'Intention tremor, past-pointing, dysdiadochokinesia, broad-based gait, scanning speech', meaning:'Cerebellar lesion (DANISH) — imaging + neurology.' },
    { finding:'Romberg positive (worse eyes closed)', meaning:'Sensory ataxia — dorsal-column / proprioceptive loss (B12, tabes, sensory neuropathy).' },
    { finding:'Glove-and-stocking sensory loss + absent ankle jerks', meaning:'Peripheral neuropathy — screen diabetes, B12, alcohol, thyroid, drugs.' },
    { finding:'Dermatomal sensory/motor loss + reduced reflex (e.g. foot drop + L5 loss)', meaning:'Radiculopathy (L5) or focal nerve palsy (common peroneal) — distinguish by pattern.' },
    { finding:'Clear sensory level on the trunk + bilateral leg UMN signs', meaning:'Cord compression / myelopathy — urgent MRI.' },
    { finding:'Saddle anaesthesia, lax anal tone, bilateral leg signs, retention', meaning:'Cauda equina syndrome — emergency MRI & neurosurgery.' },
    { finding:'Resting tremor, cogwheel rigidity, bradykinesia, shuffling gait', meaning:'Parkinsonism — examine for asymmetry; neurology.' },
    { finding:'Tongue deviates to one side / wasting + fasciculation', meaning:'XII (hypoglossal) LMN lesion — deviates toward lesion; consider MND.' },
  ],
  links:{ algorithm:'tools/algorithms/headache.html', algorithmLabel:'Headache pathway', case:'cases/blackouts.html', caseLabel:'Blackouts & syncope' },
},

]);
