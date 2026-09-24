/* Reasoning GP — Examinations data: Cardiovascular & Respiratory & Peripheral vascular */
window.RGP_EXAMINATIONS = (window.RGP_EXAMINATIONS || []).concat([

{
  id:'cardiovascular', system:'Cardiovascular', icon:'🫀', title:'Cardiovascular examination',
  blurb:'Peripheral signs → pulse & BP → precordium inspection, palpation and auscultation.',
  indications:['Chest pain, breathlessness, palpitations, syncope','Murmur on incidental auscultation','Heart-failure assessment / oedema','Hypertension or arrhythmia work-up'],
  equipment:['Stethoscope','Sphygmomanometer','Couch reclined to 45°'],
  redFlags:[
    'Chest pain + haemodynamic compromise / new murmur / signs of dissection → **999 / emergency**',
    'New murmur with syncope or heart failure → urgent cardiology',
    'Signs of acute severe heart failure (pulmonary oedema) → same-day admission',
  ],
  sequence:[
    { phase:'General & hands', items:[
      { name:'End of bed', finding:'Breathlessness, cyanosis, pallor, oedema, cachexia, GTN spray' },
      { name:'Hands', finding:'Clubbing, splinter haemorrhages, Janeway lesions/Osler nodes (endocarditis), peripheral cyanosis, tar staining, tendon xanthomata' },
      { name:'Pulse', how:'Rate, rhythm, character; radio-radial & radio-femoral delay', finding:'AF (irregularly irregular), collapsing pulse (AR), slow-rising (AS), radio-femoral delay (coarctation)' },
    ]},
    { phase:'Face, neck & BP', items:[
      { name:'Face/eyes/mouth', finding:'Malar flush (mitral stenosis), corneal arcus/xanthelasma, conjunctival pallor, central cyanosis, dental hygiene' },
      { name:'JVP', how:'At 45°, internal jugular; assess height & waveform; hepatojugular reflux', positive:'Raised JVP → right heart failure / fluid overload' },
      { name:'Blood pressure', how:'Both arms if indicated; lying/standing if postural symptoms', finding:'Hypertension, postural drop, wide pulse pressure (AR)' },
    ]},
    { phase:'Precordium — inspect & palpate', items:[
      { name:'Inspection', finding:'Scars (sternotomy, pacemaker), visible pulsations, chest deformity' },
      { name:'Apex beat', how:'Locate (normally 5th ICS, mid-clavicular line)', finding:'Displaced (LV dilatation), heaving (pressure overload), tapping (mitral stenosis)' },
      { name:'Heaves & thrills', how:'Heel of hand at left sternal edge; palpate valve areas', positive:'Parasternal heave → RV hypertrophy; thrill → palpable murmur' },
    ]},
    { phase:'Auscultation', items:[
      { name:'Four valve areas + accessory manoeuvres', how:'Aortic, pulmonary, tricuspid, mitral; bell at apex in left lateral (mitral stenosis); diaphragm at left sternal edge sitting forward in expiration (AR)', finding:'Identify S1/S2, added sounds (S3/S4), murmurs (timing, character, radiation)' },
      { name:'Lung bases & sacral/ankle oedema', finding:'Bibasal crepitations + peripheral oedema → heart failure' },
    ]},
  ],
  outcomes:[
    { finding:'Ejection-systolic murmur radiating to carotids, slow-rising pulse', meaning:'Aortic stenosis — echo; refer if symptomatic/severe' },
    { finding:'Pansystolic murmur at apex radiating to axilla', meaning:'Mitral regurgitation — echo + cardiology' },
    { finding:'Early-diastolic murmur, collapsing pulse, wide pulse pressure', meaning:'Aortic regurgitation — echo + cardiology' },
    { finding:'Irregularly irregular pulse', meaning:'AF — ECG, rate/rhythm + anticoagulation assessment (CHA₂DS₂-VASc)' },
    { finding:'Raised JVP, bibasal crepitations, oedema, displaced apex', meaning:'Heart failure — BNP/echo, treat per NICE NG106' },
  ],
  note:'Time the murmur against the pulse: feel the carotid while you listen. Systolic = with the pulse; diastolic = between beats.',
  links:{ case:'cases/heart-failure.html', caseLabel:'Heart failure', algorithm:'tools/algorithms/palpitations.html', algorithmLabel:'Palpitations', calc:'tools/calculators.html#chads-vasc', calcLabel:'CHA₂DS₂-VASc' },
},

{
  id:'peripheral-vascular', system:'Cardiovascular', icon:'🦵', title:'Peripheral arterial (vascular) examination',
  blurb:'Inspection, pulses, capillary refill, Buerger test and ABPI for limb ischaemia.',
  indications:['Intermittent claudication / rest pain','Non-healing leg or foot ulcer','Cold/discoloured limb','Diabetes vascular surveillance','Before compression therapy (ABPI)'],
  equipment:['Hand-held Doppler + sphygmomanometer (ABPI)','Couch'],
  redFlags:[
    'Acute limb: pain, pallor, pulseless, perishingly cold, paraesthesia, paralysis (6 Ps) → **emergency** vascular referral',
    'Rest pain / tissue loss / gangrene → critical limb ischaemia — urgent vascular referral',
    'Ulcer with spreading erythema, fever → ?infection/sepsis',
  ],
  sequence:[
    { phase:'Look', items:[
      { name:'Inspect both legs', finding:'Colour (pallor/rubor), hair loss, shiny skin, muscle wasting, ulcers (arterial = punched-out, painful, distal), gangrene, scars, amputations' },
    ]},
    { phase:'Feel', items:[
      { name:'Temperature & capillary refill', finding:'Cool, prolonged refill (>2 s) distally → ischaemia' },
      { name:'Pulses', how:'Femoral, popliteal, posterior tibial, dorsalis pedis (+ radio-femoral delay)', finding:'Absent/weak pulses localise the level of disease' },
    ]},
    { phase:'Special tests', items:[
      { name:'Buerger test', how:'Raise legs to 45° (note pallor angle), then hang over edge', positive:'Pallor on elevation + reactive hyperaemia (sunset foot) on dependency → significant ischaemia' },
      { name:'ABPI', how:'Ankle systolic ÷ brachial systolic by Doppler', positive:'0.9–1.3 normal · 0.5–0.9 claudication · <0.5 critical ischaemia · >1.3 calcification (diabetes/CKD — unreliable)', pitfall:'Falsely high in calcified/diabetic vessels — interpret with toe pressures' },
    ]},
  ],
  outcomes:[
    { finding:'Claudication + ABPI 0.5–0.9 + weak pulses', meaning:'Peripheral arterial disease — risk-factor modification, supervised exercise, antiplatelet + statin' },
    { finding:'Rest pain, ulcers, ABPI <0.5', meaning:'Critical limb ischaemia — urgent vascular referral' },
    { finding:'Acute 6 Ps', meaning:'Acute limb ischaemia — emergency referral' },
  ],
  links:{ algorithm:'tools/algorithms/claudication.html', algorithmLabel:'Claudication pathway' },
},

{
  id:'respiratory', system:'Respiratory', icon:'🫁', title:'Respiratory examination',
  blurb:'Inspection → palpation → percussion → auscultation, front and back.',
  indications:['Breathlessness, cough, wheeze, haemoptysis','Chest pain (pleuritic)','Monitoring of asthma/COPD','Suspected infection, effusion or malignancy'],
  equipment:['Stethoscope','Couch at 45°','SpO₂ probe'],
  redFlags:[
    'Haemoptysis with weight loss / age >40 smoker → 2-week-wait chest referral / urgent CXR',
    'Acute severe breathlessness, silent chest, SpO₂ low, exhaustion → **999**',
    'Stridor → upper-airway obstruction — emergency',
    'Unilateral leg swelling + pleuritic pain + breathlessness → ?PE',
  ],
  sequence:[
    { phase:'General & hands', items:[
      { name:'End of bed', finding:'Respiratory rate, accessory muscle use, pursed lips, audible wheeze/stridor, cachexia, inhalers/oxygen' },
      { name:'Hands', finding:'Clubbing (fibrosis, bronchiectasis, cancer), tar staining, CO₂ retention flap (asterixis), fine tremor (β-agonist)' },
    ]},
    { phase:'Face & neck', items:[
      { name:'Face/eyes/mouth', finding:'Central cyanosis, Horner syndrome (apical tumour), pursed lips' },
      { name:'Trachea & lymph nodes', how:'Palpate tracheal position; cervical/supraclavicular nodes', positive:'Tracheal deviation (away — effusion/pneumothorax; toward — collapse/fibrosis); Virchow node → malignancy' },
    ]},
    { phase:'Chest — inspect & palpate', items:[
      { name:'Inspection', finding:'Scars, deformity (barrel chest, pectus), asymmetry of expansion' },
      { name:'Chest expansion', how:'Hands symmetrically on chest', positive:'Reduced unilaterally → that side abnormal (effusion, collapse, consolidation, pneumothorax)' },
      { name:'Tactile vocal fremitus', how:'Ulnar border / palm while patient says "99"', finding:'Increased over consolidation; decreased over effusion/pneumothorax' },
    ]},
    { phase:'Percussion', items:[
      { name:'Percuss & compare side-to-side', finding:'Dull → consolidation/collapse; **stony dull** → pleural effusion; hyper-resonant → pneumothorax/emphysema' },
    ]},
    { phase:'Auscultation', items:[
      { name:'Breath sounds & added sounds', how:'Compare each zone front & back', finding:'Bronchial breathing (consolidation); coarse crackles (infection/bronchiectasis); fine end-inspiratory crackles (fibrosis/oedema); wheeze (asthma/COPD); absent (effusion/pneumothorax)' },
      { name:'Vocal resonance', positive:'Increased over consolidation; decreased over effusion' },
    ]},
  ],
  outcomes:[
    { finding:'Focal bronchial breathing + crackles + dullness + ↑ fremitus', meaning:'Consolidation (pneumonia) — CRB-65, antibiotics, CXR' },
    { finding:'Stony dull base, absent breath sounds, ↓ fremitus, trachea away', meaning:'Pleural effusion — CXR, investigate cause' },
    { finding:'Widespread polyphonic wheeze + prolonged expiration', meaning:'Obstructive disease (asthma/COPD) — spirometry, optimise inhalers' },
    { finding:'Bilateral fine end-inspiratory crackles + clubbing', meaning:'Pulmonary fibrosis — HRCT + respiratory referral' },
    { finding:'Hyper-resonance, absent breath sounds, trachea away (tension)', meaning:'Pneumothorax — CXR; tension = emergency decompression' },
  ],
  note:'Pattern-match four signs together — expansion, percussion, fremitus/resonance and breath sounds point to one diagnosis far more reliably than any single sign.',
  links:{ case:'cases/copd.html', caseLabel:'COPD', algorithm:'tools/algorithms/breathlessness.html', algorithmLabel:'Breathlessness', calc:'tools/calculators.html#crb-65', calcLabel:'CRB-65' },
},

]);
