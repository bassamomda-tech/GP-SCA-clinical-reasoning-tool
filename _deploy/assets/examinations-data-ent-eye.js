/* Reasoning GP — Examinations data: ENT, Neck/Thyroid & Ophthalmology */
window.RGP_EXAMINATIONS = (window.RGP_EXAMINATIONS || []).concat([

{
  id:'ear', system:'ENT, Neck & Thyroid', icon:'👂', title:'Ear examination (otoscopy)',
  blurb:'Pinna, otoscopy of canal & drum, and tuning-fork tests for the type of hearing loss.',
  indications:['Earache, discharge, hearing loss, tinnitus','Vertigo / balance problems','Suspected otitis media/externa, wax, cholesteatoma','Hearing screen'],
  equipment:['Otoscope + speculae','512 Hz tuning fork'],
  redFlags:[
    'Foul discharge + attic crust/retraction pocket → ?cholesteatoma — ENT referral',
    'Facial nerve palsy with ear signs → ?malignant otitis externa / cholesteatoma — urgent',
    'Sudden unilateral sensorineural hearing loss → **same-day** ENT (emergency)',
    'Unilateral persistent tinnitus / hearing loss → urgent ENT (?vestibular schwannoma)',
  ],
  sequence:[
    { phase:'Inspect', items:[
      { name:'Pinna & post-auricular area', finding:'Deformity, scars, erythema, swelling, discharge, post-auricular swelling pushing pinna forward (mastoiditis)' },
    ]},
    { phase:'Otoscopy', items:[
      { name:'Canal', how:'Pull pinna up & back (adult); largest comfortable speculum', finding:'Wax, otitis externa (swollen weeping canal), foreign body, debris' },
      { name:'Tympanic membrane', how:'Identify handle of malleus, light reflex, pars tensa/flaccida', finding:'Bulging red (AOM), retracted dull (effusion/OME), perforation, attic crust (cholesteatoma)' },
    ]},
    { phase:'Tuning-fork tests', items:[
      { name:'Rinne', how:'512 Hz tuning fork: mastoid (BC) then beside ear (AC)', positive:'AC>BC normal/SNHL; BC>AC (Rinne negative) → conductive loss' },
      { name:'Weber', how:'Tuning fork on forehead midline', positive:'Lateralises to affected ear → conductive; to better ear → sensorineural' },
    ]},
  ],
  outcomes:[
    { finding:'Bulging erythematous drum + pain', meaning:'Acute otitis media — analgesia ± delayed antibiotic' },
    { finding:'Swollen tender canal + discharge', meaning:'Otitis externa — topical antibiotic/steroid, aural toilet' },
    { finding:'Retracted dull drum + conductive loss (child)', meaning:'Otitis media with effusion (glue ear) — watchful waiting, audiology' },
    { finding:'Weber lateralises to worse ear', meaning:'Sensorineural loss — audiology; sudden = same-day ENT' },
  ],
  links:{ algorithm:'tools/algorithms/hearing-loss.html', algorithmLabel:'Hearing loss', case:'cases/tinnitus.html', caseLabel:'Tinnitus' },
},

{
  id:'throat-oral', system:'ENT, Neck & Thyroid', icon:'👅', title:'Throat & oral cavity examination',
  blurb:'Inspection of lips, mucosa, tonsils, and the FeverPAIN/Centor approach to sore throat.',
  indications:['Sore throat, dysphagia, hoarseness','Mouth ulcers or white patches','Neck lump / suspected head & neck cancer','Suspected tonsillitis or quinsy'],
  equipment:['Tongue depressor','Pen torch','Gloves'],
  redFlags:[
    'Stridor, drooling, tripod posture, muffled voice → **do not examine throat** — emergency (?epiglottitis)',
    'Unexplained oral ulcer/lump >3 weeks, persistent hoarseness >3 weeks, neck lump → 2-week-wait head & neck',
    'Trismus + unilateral peritonsillar swelling + uvular deviation → ?quinsy — urgent ENT',
  ],
  sequence:[
    { phase:'Inspect (external & lips)', items:[
      { name:'Lips, perioral skin', finding:'Ulcers, angular cheilitis, swelling' },
    ]},
    { phase:'Oral cavity', items:[
      { name:'Systematic look', how:'Buccal mucosa, gums, teeth, tongue (dorsum + lift to see floor), hard/soft palate, tonsils, posterior pharynx', finding:'Exudate, ulcers, leukoplakia/erythroplakia, asymmetry, masses' },
      { name:'Tonsils', finding:'Enlargement, exudate, unilateral swelling (quinsy)' },
    ]},
    { phase:'Neck', items:[
      { name:'Cervical lymph nodes', how:'Palpate from behind, all chains', positive:'Tender mobile nodes → reactive; hard fixed node → ?malignancy' },
    ]},
    { phase:'Score', items:[
      { name:'FeverPAIN / Centor', how:'Apply score to guide antibiotics', suggests:'High score → higher chance of streptococcal infection', pitfall:'Most sore throats are viral — scores guide, not dictate' },
    ]},
  ],
  outcomes:[
    { finding:'Bilateral tonsillar exudate + tender nodes + fever', meaning:'Tonsillitis — FeverPAIN/Centor; antibiotics if high score' },
    { finding:'Unilateral swelling + trismus + uvular deviation', meaning:'Peritonsillar abscess (quinsy) — urgent ENT' },
    { finding:'Persistent ulcer/white-red patch >3 weeks', meaning:'?Oral malignancy — 2-week-wait' },
  ],
  links:{ calc:'tools/calculators.html#feverpain', calcLabel:'FeverPAIN', case:'cases/neck-lump.html', caseLabel:'Neck lump (algorithm)', algorithm:'tools/algorithms/neck-lump.html' },
},

{
  id:'neck-thyroid', system:'ENT, Neck & Thyroid', icon:'🦋', title:'Neck & thyroid examination',
  blurb:'Inspection (swallow/tongue protrusion), palpation from behind, and thyroid status signs.',
  indications:['Neck lump or goitre','Suspected hyper- or hypothyroidism','Dysphagia / hoarseness with neck swelling','Thyroid surveillance'],
  equipment:['Glass of water','Stethoscope (bruit)','Tendon hammer (reflexes)'],
  redFlags:[
    'Hard fixed thyroid nodule, rapid growth, hoarseness, cervical lymphadenopathy → 2-week-wait',
    'Stridor / airway compromise from large goitre → urgent',
    'Thyroid storm features (fever, tachyarrhythmia, agitation) → emergency',
  ],
  sequence:[
    { phase:'Inspect', items:[
      { name:'Neck at rest', finding:'Visible swelling, scars, distended veins' },
      { name:'Swallow + tongue protrusion', how:'Sip water & swallow; then protrude tongue', positive:'Moves up with swallowing → thyroid/thyroglossal; rises with tongue protrusion → thyroglossal cyst' },
    ]},
    { phase:'Palpate (from behind)', items:[
      { name:'Thyroid gland', how:'Both lobes + isthmus while swallowing', finding:'Diffuse goitre vs nodule(s); size, consistency, mobility, tenderness' },
      { name:'Lymph nodes & trachea', finding:'Cervical nodes; tracheal deviation' },
    ]},
    { phase:'Thyroid status', items:[
      { name:'Hyperthyroid signs', finding:'Tremor, warm sweaty palms, tachycardia/AF, lid lag, eye signs (Graves — exophthalmos, ophthalmoplegia), brisk reflexes, pretibial myxoedema' },
      { name:'Hypothyroid signs', finding:'Bradycardia, dry skin, slow-relaxing reflexes, periorbital puffiness, hoarse voice' },
      { name:'Auscultate', positive:'Bruit over gland → Graves (increased vascularity)' },
    ]},
  ],
  outcomes:[
    { finding:'Diffuse goitre + bruit + eye signs + tremor', meaning:'Graves disease — TFTs, TRAb, refer endocrine' },
    { finding:'Solitary firm nodule', meaning:'?Thyroid nodule — TFTs + USS; 2-week-wait if suspicious' },
    { finding:'Diffuse firm goitre + hypothyroid signs', meaning:'Hashimoto thyroiditis — TFTs, anti-TPO, levothyroxine' },
    { finding:'Midline lump rising with tongue protrusion', meaning:'Thyroglossal cyst' },
  ],
  links:{ case:'cases/hyperthyroidism.html', caseLabel:'Hyperthyroidism', algorithm:'tools/algorithms/hyperthyroidism.html', algorithmLabel:'Hyperthyroidism' },
},

{
  id:'red-eye', system:'Ophthalmology', icon:'👁️', title:'Red eye assessment',
  blurb:'Acuity, pattern of redness, pupil and cornea — with a sight-threatening-vs-benign pathway.',
  indications:['Acute red eye','Eye pain, photophobia, discharge or visual change','Contact-lens wearer with red eye','Trauma or chemical exposure'],
  equipment:['Snellen chart','Pen torch','Fluorescein + blue light','Topical anaesthetic (if available)'],
  redFlags:[
    'Chemical injury → **immediate copious irrigation** before anything else',
    'Reduced acuity, severe pain, photophobia, fixed/irregular pupil → sight-threatening — same-day ophthalmology',
    'Contact-lens wearer with painful red eye → ?microbial keratitis — same-day',
    'Acute painful red eye + haloes + nausea + hazy cornea + fixed mid-dilated pupil → ?acute angle-closure glaucoma — emergency',
  ],
  pathway:[
    { q:'Any chemical exposure or high-velocity trauma?', branches:[
      { condition:'Yes', clues:'Alkali/acid splash, grinding/hammering', primaryCare:'Irrigate immediately (chemical); do not pad penetrating injury', refer:'Same-day ophthalmology / ED' },
      { condition:'No', clues:'Continue assessment', primaryCare:'Check acuity, pain, photophobia, pupil', refer:'' },
    ]},
    { q:'Is visual acuity reduced, or severe pain / photophobia?', note:'These flag a potentially sight-threatening cause', branches:[
      { condition:'Reduced acuity / severe pain', clues:'Keratitis, anterior uveitis, acute glaucoma, scleritis', primaryCare:'Assess pupil & cornea (fluorescein); analgesia', refer:'Same-day ophthalmology' },
      { condition:'Normal acuity, comfortable/gritty only', clues:'Likely benign — continue', primaryCare:'Pattern of redness & discharge', refer:'' },
    ]},
    { q:'Pupil & cornea findings?', branches:[
      { condition:'Fixed mid-dilated pupil + hazy cornea + haloes + nausea', primaryCare:'Lie flat; analgesia/antiemetic while arranging', refer:'**Acute angle-closure glaucoma** — emergency ophthalmology' },
      { condition:'Small/irregular pupil + photophobia + ciliary flush', primaryCare:'—', refer:'**Anterior uveitis** — same-day ophthalmology' },
      { condition:'Fluorescein-staining dendritic/epithelial defect', primaryCare:'Stop contact lenses', refer:'**Keratitis** (?HSV/microbial) — same-day' },
    ]},
    { q:'Benign pattern — what type?', branches:[
      { condition:'Diffuse redness + discharge, normal pupil/acuity', clues:'Purulent = bacterial; watery + preauricular node = viral; itch + bilateral = allergic', primaryCare:'Bacterial: hygiene ± chloramphenicol · Viral: self-limiting, hygiene · Allergic: antihistamine/mast-cell stabiliser', refer:'Refer only if not settling or atypical' },
      { condition:'Localised flat painless redness, normal everything', primaryCare:'Subconjunctival haemorrhage — reassure; check BP', refer:'No referral unless recurrent/trauma' },
      { condition:'Gritty, lid-margin crusting', primaryCare:'Blepharitis / dry eye — lid hygiene, lubricants', refer:'Routine if refractory' },
    ]},
  ],
  sequence:[
    { phase:'Function first', items:[
      { name:'Visual acuity', how:'Snellen each eye (with usual correction/pinhole)', positive:'Reduced acuity is the key danger sign', pitfall:'Always document acuity — never skip it in a red eye' },
    ]},
    { phase:'Inspect', items:[
      { name:'Pattern of redness', finding:'Diffuse (conjunctivitis), ciliary flush around limbus (uveitis/keratitis), sectoral (episcleritis/scleritis), localised flat (subconjunctival haemorrhage)' },
      { name:'Discharge', finding:'Purulent (bacterial), watery (viral/allergic), stringy (allergic)' },
      { name:'Cornea + fluorescein', how:'Blue light after fluorescein', positive:'Dendritic ulcer (HSV), abrasion, infiltrate (microbial keratitis)' },
      { name:'Pupil', finding:'Fixed mid-dilated (acute glaucoma); small/irregular (uveitis)' },
    ]},
  ],
  outcomes:[
    { finding:'Bilateral diffuse redness + discharge, normal acuity', meaning:'Conjunctivitis — usually self-limiting; hygiene ± topical antibiotic' },
    { finding:'Ciliary flush + photophobia + small pupil', meaning:'Anterior uveitis — same-day ophthalmology' },
    { finding:'Fluorescein dendrite', meaning:'Herpes simplex keratitis — same-day; avoid steroids' },
    { finding:'Fixed mid-dilated pupil + hazy cornea + pain/vomiting', meaning:'Acute angle-closure glaucoma — emergency' },
    { finding:'Flat painless red patch, normal acuity', meaning:'Subconjunctival haemorrhage — reassure, check BP' },
  ],
  links:{ algorithm:'tools/algorithms/red-eye.html', algorithmLabel:'Red eye pathway', case:'cases/red-eye.html', caseLabel:'Red eye (full case)' },
},

{
  id:'fundoscopy', system:'Ophthalmology', icon:'🔬', title:'Fundoscopy (ophthalmoscopy)',
  blurb:'Red reflex → disc → vessels → macula, with diabetic/hypertensive/papilloedema findings.',
  indications:['Headache (?raised ICP)','Diabetes / hypertension review','Visual loss or floaters','Suspected papilloedema or retinal pathology'],
  equipment:['Direct ophthalmoscope','Mydriatic drops (tropicamide) if appropriate','Darkened room'],
  redFlags:[
    'Papilloedema (blurred disc margins, loss of venous pulsation) → urgent neuroimaging (?raised ICP)',
    'Sudden painless visual loss with retinal signs (cherry-red spot / pale retina / flame haemorrhages) → same-day ophthalmology',
    'Pre-proliferative/proliferative diabetic changes → urgent ophthalmology',
  ],
  sequence:[
    { phase:'Set-up', items:[
      { name:'Preparation', how:'Dim lights; same eye to same eye; dilate if safe; ask patient to fix on a distant point', pitfall:'Avoid dilating if acute glaucoma suspected or before neuro assessment needing pupils' },
    ]},
    { phase:'Systematic look', items:[
      { name:'Red reflex', how:'From ~30 cm', positive:'Absent/white reflex → cataract, vitreous haemorrhage, retinoblastoma (child — urgent)' },
      { name:'Optic disc', finding:'Margins (blurred → papilloedema), colour (pale → atrophy), cup:disc ratio (↑ in glaucoma)' },
      { name:'Vessels', finding:'AV nipping, silver/copper wiring (hypertension); new vessels (proliferative diabetic retinopathy)' },
      { name:'Background & macula', finding:'Microaneurysms, dot-blot & flame haemorrhages, hard exudates, cotton-wool spots; drusen/atrophy at macula (AMD)' },
    ]},
  ],
  outcomes:[
    { finding:'Blurred disc margins, absent venous pulsation', meaning:'Papilloedema — urgent neuroimaging' },
    { finding:'Dot-blot haemorrhages, hard exudates, microaneurysms', meaning:'Diabetic retinopathy — grade & refer per severity' },
    { finding:'AV nipping, flame haemorrhages, cotton-wool spots', meaning:'Hypertensive retinopathy — assess BP urgently' },
    { finding:'Increased cup:disc ratio', meaning:'?Glaucoma — optometry/ophthalmology' },
  ],
  links:{ case:'cases/abnormal-lfts.html', caseLabel:'', algorithm:'tools/algorithms/vision-loss.html', algorithmLabel:'Vision loss pathway' },
},

{
  id:'visual-acuity-fields', system:'Ophthalmology', icon:'👁️', title:'Visual acuity & fields',
  blurb:'Snellen acuity, pinhole, colour, and confrontation field testing to localise lesions.',
  indications:['Any visual symptom','Headache/neurology (field defect)','Diabetes/hypertension/glaucoma monitoring','Driving / occupational assessment'],
  equipment:['Snellen chart (6 m) / near chart','Pinhole occluder','Ishihara plates','Red pin (fields)'],
  redFlags:[
    'Sudden visual loss → same-day ophthalmology',
    'New homonymous field defect → ?stroke/space-occupying lesion — urgent',
    'Bitemporal hemianopia → ?chiasmal (pituitary) lesion — urgent imaging',
  ],
  sequence:[
    { phase:'Acuity', items:[
      { name:'Snellen each eye', how:'6 m, with usual glasses; record as 6/x', finding:'Reduced acuity quantified' },
      { name:'Pinhole', how:'Repeat through pinhole', positive:'Improves → refractive error; no improvement → pathology' },
      { name:'Colour vision (Ishihara)', positive:'Reduced → optic nerve disease' },
    ]},
    { phase:'Fields', items:[
      { name:'Confrontation', how:'Compare your field to patient\'s, one eye at a time, quadrant by quadrant', finding:'Map the defect' },
      { name:'Pupils (RAPD)', how:'Swinging-light test', positive:'RAPD → optic nerve / large retinal lesion' },
    ]},
  ],
  outcomes:[
    { finding:'Acuity improves with pinhole', meaning:'Refractive error — optometry' },
    { finding:'Bitemporal hemianopia', meaning:'Chiasmal lesion — pituitary imaging + endocrine' },
    { finding:'Homonymous hemianopia', meaning:'Retro-chiasmal (stroke/tumour) — neuroimaging' },
    { finding:'Central scotoma + reduced colour + RAPD', meaning:'Optic neuritis — neurology/ophthalmology' },
  ],
  links:{ algorithm:'tools/algorithms/vision-loss.html', algorithmLabel:'Vision loss', case:'cases/blackouts.html', caseLabel:'' },
},

]);
