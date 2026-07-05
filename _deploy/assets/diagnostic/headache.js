/* ============================================
   Diagnostic Tool — Headache (flagship)
   ICHD-3 · NICE CKS Headache assessment ·
   SNNOOP10 red flags · NICE NG12 / NG228 / NG240
   ============================================ */
RGPDiagnostic.register('headache', {
  title: 'Headache — differential diagnosis',
  subtitle: 'Tick what the patient describes. The engine weighs every ticked feature against ICHD-3 primary headache criteria and SNNOOP10 secondary headache red flags, surfacing can\'t-miss diagnoses (SAH, meningitis, GCA, raised ICP, AACG, CO poisoning) the moment a relevant flag is ticked.',
  guideline: 'ICHD-3 · NICE CKS · SNNOOP10 · NICE NG12',
  patientPresenting: "I've been getting these headaches and they're not going away. My friend googled it and said it could be a brain tumour…",

  xlink: {
    url: '../tools/triage-tool.html',
    label: 'Headache doesn\'t have a dedicated triage dataset yet, but new-onset headache >50 + scalp tenderness fires NICE NG12 GCA pathway in the urgent column.',
  },

  // -----------------------------------------------------
  // INPUTS — symptoms, features, demographics
  // -----------------------------------------------------
  inputs: [
    // ---- Demographics & context ----
    { group:'Demographics & context', id:'age', kind:'number', label:'Age', unit:'yrs', min:0, max:120, step:1, note:'≥50 changes the workup; ≥65 raises GCA priority' },
    { group:'Demographics & context', id:'female', kind:'check', label:'Female sex' },
    { group:'Demographics & context', id:'obese', kind:'check', label:'BMI ≥30', note:'IIH risk factor' },
    { group:'Demographics & context', id:'pregnant_postpartum', kind:'check', label:'Pregnant / postpartum', note:'preeclampsia / CVST risk' },
    { group:'Demographics & context', id:'combined_pill', kind:'check', label:'On combined oral contraceptive / oestrogen' },
    { group:'Demographics & context', id:'cancer_hx', kind:'check', label:'Known/past cancer', note:'Brain mets — SNNOOP10' },
    { group:'Demographics & context', id:'immunosuppressed', kind:'check', label:'Immunosuppressed / HIV+', note:'CNS infection risk — SNNOOP10' },
    { group:'Demographics & context', id:'recent_trauma', kind:'check', label:'Recent head trauma / fall', note:'<6 weeks — subdural risk' },
    { group:'Demographics & context', id:'family_aneurysm', kind:'check', label:'1st-degree FH SAH / aneurysm' },
    { group:'Demographics & context', id:'gas_appliance_winter', kind:'check', label:'Gas appliance + winter / faulty boiler', note:'CO poisoning trigger' },
    { group:'Demographics & context', id:'household_drowsy', kind:'check', label:'Other household members / pets unwell', note:'CO clue' },

    // ---- Onset & timing ----
    { group:'Onset & timing', id:'thunderclap', kind:'check', label:'Thunderclap — peak severity <1 min', note:'"Worst headache of my life"' },
    { group:'Onset & timing', id:'gradual_progressive', kind:'check', label:'Gradual progression over days–weeks' },
    { group:'Onset & timing', id:'woke_from_sleep', kind:'check', label:'Wakes patient from sleep' },
    { group:'Onset & timing', id:'morning_worst', kind:'check', label:'Worst on waking / early morning' },
    { group:'Onset & timing', id:'first_ever_over50', kind:'check', label:'First-ever headache aged ≥50' },
    { group:'Onset & timing', id:'duration_secs', kind:'check', label:'Lasts seconds — paroxysmal "electric shocks"' },
    { group:'Onset & timing', id:'duration_15_180min', kind:'check', label:'Lasts 15 min – 3 hours per attack' },
    { group:'Onset & timing', id:'duration_4_72h', kind:'check', label:'Lasts 4 – 72 hours per attack' },
    { group:'Onset & timing', id:'duration_days_constant', kind:'check', label:'Continuous for days / weeks (low grade)' },
    { group:'Onset & timing', id:'frequency_15plus', kind:'check', label:'≥15 headache days / month' },
    { group:'Onset & timing', id:'analgesic_overuse', kind:'check', label:'Analgesic use >10–15 days / month', note:'Triptan/opioid/combination >10d; simple >15d' },

    // ---- Quality & site ----
    { group:'Quality & site', id:'throbbing', kind:'check', label:'Throbbing / pulsating' },
    { group:'Quality & site', id:'pressing_band', kind:'check', label:'Pressing / tightening — "band around head"' },
    { group:'Quality & site', id:'sharp_stabbing', kind:'check', label:'Sharp, stabbing, electric-shock' },
    { group:'Quality & site', id:'severe_10_10', kind:'check', label:'Severity 9–10/10' },
    { group:'Quality & site', id:'unilateral', kind:'check', label:'Strictly one-sided' },
    { group:'Quality & site', id:'bilateral', kind:'check', label:'Bilateral' },
    { group:'Quality & site', id:'periorbital_orbital', kind:'check', label:'Around / behind one eye' },
    { group:'Quality & site', id:'occipital_neck', kind:'check', label:'Occipital → radiating into neck' },
    { group:'Quality & site', id:'maxillofacial_v23', kind:'check', label:'Cheek / jaw / lower face (V2/V3)' },
    { group:'Quality & site', id:'sinus_distribution', kind:'check', label:'Forehead / behind cheekbone — sinus distribution' },

    // ---- Triggers & aggravators ----
    { group:'Triggers & aggravators', id:'worse_movement', kind:'check', label:'Worse with routine movement', note:'walking, head turning' },
    { group:'Triggers & aggravators', id:'worse_cough_valsalva', kind:'check', label:'Worse with cough / sneeze / Valsalva' },
    { group:'Triggers & aggravators', id:'worse_lying_bending', kind:'check', label:'Worse lying flat / bending forward' },
    { group:'Triggers & aggravators', id:'after_exertion_orgasm', kind:'check', label:'Triggered by exertion / sexual activity' },
    { group:'Triggers & aggravators', id:'face_touch_trigger', kind:'check', label:'Triggered by touching face / shaving / wind' },
    { group:'Triggers & aggravators', id:'worse_neck_movement', kind:'check', label:'Reproduced / worsened by neck movement' },
    { group:'Triggers & aggravators', id:'trigger_alcohol', kind:'check', label:'Alcohol triggers within 1 hour' },
    { group:'Triggers & aggravators', id:'trigger_menstrual', kind:'check', label:'Cyclical with menses' },

    // ---- Associated symptoms ----
    { group:'Associated symptoms', id:'nausea_vomiting', kind:'check', label:'Nausea / vomiting' },
    { group:'Associated symptoms', id:'photophobia', kind:'check', label:'Photophobia' },
    { group:'Associated symptoms', id:'phonophobia', kind:'check', label:'Phonophobia' },
    { group:'Associated symptoms', id:'aura_visual', kind:'check', label:'Visual aura — zigzags, scotoma, flashing', note:'Builds over 5–60 min' },
    { group:'Associated symptoms', id:'aura_sensory', kind:'check', label:'Sensory aura — tingling spreads up arm/face' },
    { group:'Associated symptoms', id:'aura_speech', kind:'check', label:'Dysphasia during attack', note:'Needs neuro review if first episode' },
    { group:'Associated symptoms', id:'autonomic_lacrimation', kind:'check', label:'Ipsilateral lacrimation' },
    { group:'Associated symptoms', id:'autonomic_red_eye', kind:'check', label:'Ipsilateral conjunctival injection' },
    { group:'Associated symptoms', id:'autonomic_rhinorrhea', kind:'check', label:'Ipsilateral rhinorrhoea / nasal congestion' },
    { group:'Associated symptoms', id:'ptosis_miosis', kind:'check', label:'Ipsilateral ptosis / miosis' },
    { group:'Associated symptoms', id:'restless_pacing', kind:'check', label:'Restless / pacing during attack', note:'vs migraine = lying still' },
    { group:'Associated symptoms', id:'nasal_purulent', kind:'check', label:'Purulent nasal discharge / postnasal drip' },
    { group:'Associated symptoms', id:'sinus_tender', kind:'check', label:'Maxillary / frontal tenderness on palpation' },
    { group:'Associated symptoms', id:'recent_uri', kind:'check', label:'Preceded by URI in last 10 days' },

    // ---- Red-flag features (SNNOOP10) ----
    { group:'Red flags (SNNOOP10)', id:'fever', kind:'check', label:'Fever' },
    { group:'Red flags (SNNOOP10)', id:'neck_stiffness', kind:'check', label:'Neck stiffness / meningism' },
    { group:'Red flags (SNNOOP10)', id:'non_blanching_rash', kind:'check', label:'Non-blanching petechial rash' },
    { group:'Red flags (SNNOOP10)', id:'scalp_tenderness', kind:'check', label:'Scalp tenderness — combing hair / pillow' },
    { group:'Red flags (SNNOOP10)', id:'jaw_claudication', kind:'check', label:'Jaw claudication on chewing' },
    { group:'Red flags (SNNOOP10)', id:'visual_loss_amaurosis', kind:'check', label:'Visual loss / amaurosis fugax' },
    { group:'Red flags (SNNOOP10)', id:'diplopia', kind:'check', label:'Diplopia / new squint' },
    { group:'Red flags (SNNOOP10)', id:'papilloedema', kind:'check', label:'Papilloedema on fundoscopy', note:'Examination finding' },
    { group:'Red flags (SNNOOP10)', id:'focal_neuro', kind:'check', label:'Persistent focal neurological deficit' },
    { group:'Red flags (SNNOOP10)', id:'altered_consciousness', kind:'check', label:'Reduced GCS / new confusion' },
    { group:'Red flags (SNNOOP10)', id:'seizure_with_ha', kind:'check', label:'Seizure with headache' },
    { group:'Red flags (SNNOOP10)', id:'eye_red_painful', kind:'check', label:'Red, painful eye + hazy vision' },
    { group:'Red flags (SNNOOP10)', id:'halos_lights', kind:'check', label:'Halos around lights' },
    { group:'Red flags (SNNOOP10)', id:'esr_crp_raised', kind:'check', label:'ESR ≥50 / CRP raised', note:'if already done' },
    { group:'Red flags (SNNOOP10)', id:'weight_loss_systemic', kind:'check', label:'Weight loss / night sweats / systemic features' },
  ],

  // -----------------------------------------------------
  // DIAGNOSES
  // -----------------------------------------------------
  diagnoses: [
    // ----- Common primary headaches -----
    {
      id: 'tth',
      name: 'Tension-type headache',
      plainName: 'tension headache',
      summary: 'Pressing, bilateral, mild-to-moderate, not aggravated by movement',
      baseline: 22,
      category: 'common',
      keyExam: 'Pericranial muscle tenderness on palpation (frontal, temporal, trapezius). Otherwise normal neuro and fundoscopy.',
      nextIx: 'No investigations needed — clinical diagnosis (ICHD-3). Bloods only if features overlap with secondary cause.',
      patientPhrase: 'A muscular, "stress" headache. It\'s real pain but the brain itself isn\'t the problem — the muscles wrapping your skull are tightening up.',
      ciksUrl: 'https://cks.nice.org.uk/topics/headache-tension-type/',
      caseLink: null,
    },
    {
      id: 'migraine',
      name: 'Migraine',
      plainName: 'migraine (with or without aura)',
      summary: 'Throbbing, unilateral, 4–72h, photophobia + nausea, worse with movement',
      baseline: 20,
      category: 'common',
      keyExam: 'Normal exam between attacks. During attack — usually lying still in a dark quiet room. Look for triggers diary, menstrual link, family history.',
      nextIx: 'None for typical migraine. If first attack aged ≥50, atypical aura, or any SNNOOP10 red flag → urgent neurology / MRI.',
      patientPhrase: 'A neurological storm — the brain\'s electrical activity destabilises and pain pathways switch on. Not "just a headache" — it is a recognised neurological condition.',
      ciksUrl: 'https://cks.nice.org.uk/topics/migraine/',
      caseLink: null,
    },
    {
      id: 'cluster',
      name: 'Cluster headache',
      plainName: 'cluster headache',
      summary: 'Severe unilateral periorbital pain 15min–3h + cranial autonomic features',
      baseline: 4,
      category: 'less-common',
      keyExam: 'During attack: ipsilateral lacrimation, conjunctival injection, miosis/ptosis, nasal congestion, restlessness/agitation (pacing).',
      nextIx: 'MRI brain ± pituitary at first presentation to exclude secondary trigeminal autonomic cephalalgia mimic.',
      patientPhrase: '"Suicide headache" — one of the most painful conditions in medicine. The trigeminal-autonomic system fires in bouts, like an alarm circuit short-circuiting.',
      ciksUrl: 'https://cks.nice.org.uk/topics/cluster-headache/',
      caseLink: null,
    },
    {
      id: 'moh',
      name: 'Medication-overuse headache',
      plainName: 'medication-overuse / rebound headache',
      summary: 'Daily/near-daily headache with regular analgesic use',
      baseline: 6,
      category: 'common',
      keyExam: 'No focal neuro. Headache calendar shows ≥15 HA-days/month with analgesic on ≥10 days (triptan/opioid/combination) or ≥15 days (simple analgesic).',
      nextIx: 'None. Diagnosis is clinical. Plan withdrawal — abrupt for simple analgesics & triptans; taper opioids. Reassess in 8 weeks.',
      patientPhrase: 'The medication you\'re taking to stop the headache is keeping it going. Withdrawal is the only thing that works — it gets worse for 2 weeks, then much better.',
      ciksUrl: 'https://cks.nice.org.uk/topics/headache-medication-overuse/',
      caseLink: null,
    },
    {
      id: 'tn',
      name: 'Trigeminal neuralgia',
      plainName: 'trigeminal neuralgia',
      summary: 'Brief, severe, electric-shock pain in V2/V3 triggered by touch / chewing / wind',
      baseline: 2,
      category: 'less-common',
      keyExam: 'Trigger zones in V2/V3 distribution — light touch, shaving, brushing teeth, cold wind. Normal cranial nerve exam between paroxysms (red flag if not).',
      nextIx: 'MRI head with dedicated trigeminal sequences (NICE NG217) to exclude tumour, vascular loop, MS plaque.',
      patientPhrase: 'A nerve to the face is misfiring — likely a blood vessel pressing on it. Brief stabs of pain rather than constant. Carbamazepine reduces attacks in 90%.',
      ciksUrl: 'https://cks.nice.org.uk/topics/trigeminal-neuralgia/',
      caseLink: null,
    },
    {
      id: 'sinusitis',
      name: 'Acute rhinosinusitis',
      plainName: 'sinus infection',
      summary: 'Frontal/maxillary pressure, purulent discharge, post-URI',
      baseline: 5,
      category: 'common',
      keyExam: 'Purulent nasal discharge, postnasal drip, tenderness over maxillary / frontal sinuses, fever sometimes. Bend forward — pain worsens.',
      nextIx: 'None routinely if <10 days. If >10 days OR severe/worsening → consider intranasal corticosteroid; refer ENT if persistent or red flags (orbital/peri-orbital swelling).',
      patientPhrase: 'Your sinuses are blocked and inflamed after that cold. Most clear without antibiotics; the symptoms peak around day 5–7 then settle.',
      ciksUrl: 'https://cks.nice.org.uk/topics/sinusitis/',
      caseLink: null,
    },
    {
      id: 'cervicogenic',
      name: 'Cervicogenic headache',
      plainName: 'neck-origin headache',
      summary: 'Occipital → unilateral pain reproduced by neck movement',
      baseline: 4,
      category: 'less-common',
      keyExam: 'Limited cervical ROM, tender upper cervical facet joints (C2/C3), pain reproduced by neck rotation / extension.',
      nextIx: 'Cervical spine X-ray only if trauma / suspected fracture. Otherwise refer physiotherapy.',
      patientPhrase: 'The pain is generated in the upper neck joints and referred up over the back of the head. Physio and posture work, not strong painkillers, is what fixes it.',
      ciksUrl: 'https://cks.nice.org.uk/topics/neck-pain-cervical-radiculopathy/',
      caseLink: null,
    },

    // ----- Can't-miss / red-flag diagnoses -----
    {
      id: 'sah',
      name: 'Subarachnoid haemorrhage',
      plainName: 'bleed around the brain',
      summary: 'Thunderclap, occipital, vomiting, neck stiffness, ↓GCS',
      baseline: 1,
      category: 'cant-miss',
      keyExam: 'Look for meningism, ↓GCS, focal neuro (CN III palsy from PCom aneurysm), fundoscopy for subhyaloid haemorrhage, BP.',
      nextIx: 'Same-day CT head — if performed <6h from onset by 3rd-gen scanner & reported by neuroradiologist, virtually rules out SAH. If beyond 6h or CT negative + high suspicion → LP at ≥12h for xanthochromia.',
      patientPhrase: 'There may be a bleed at the surface of the brain. We can\'t exclude this without a same-day scan — I\'m sending you to A&E now.',
      ciksUrl: 'https://cks.nice.org.uk/topics/headache-assessment/',
      redFlagAction: '🚑 999 / A&E now',
      caseLink: null,
    },
    {
      id: 'meningitis',
      name: 'Meningitis / encephalitis',
      plainName: 'meningitis',
      summary: 'Fever + neck stiffness + photophobia ± rash ± ↓GCS',
      baseline: 1,
      category: 'cant-miss',
      keyExam: 'Fever, neck stiffness, non-blanching rash (meningococcal), Kernig\'s / Brudzinski signs, photophobia, ↓GCS, focal neuro if encephalitis.',
      nextIx: 'Same-day admission. Pre-hospital IM/IV benzylpenicillin (1.2g adult) if meningococcal disease suspected and transfer not immediate — do NOT delay transfer.',
      patientPhrase: 'I\'m worried this could be an infection of the lining of the brain. It needs hospital antibiotics today — I\'m calling an ambulance.',
      ciksUrl: 'https://cks.nice.org.uk/topics/meningitis-bacterial-meningococcal-disease/',
      redFlagAction: '🚑 999 + IM benzylpen',
      caseLink: null,
    },
    {
      id: 'gca',
      name: 'Giant cell arteritis',
      plainName: 'temporal arteritis',
      summary: 'New HA ≥50 + scalp tenderness ± jaw claudication ± visual sx ± ESR↑',
      baseline: 1,
      category: 'cant-miss',
      keyExam: 'Tender, thickened, non-pulsatile temporal arteries. Visual acuity, RAPD, fundoscopy (pale swollen disc = AION).',
      nextIx: 'Same-day ESR + CRP + FBC + LFTs. ESR ≥50 supports. Start prednisolone 40–60mg PO immediately (60–100mg if visual sx). Urgent rheumatology / ophthalmology referral. Temporal artery biopsy / USS within 1 week — do NOT delay steroids.',
      patientPhrase: 'The blood vessels supplying the scalp and the eye can become inflamed. Untreated, it can permanently affect vision — so we treat first and confirm afterwards.',
      ciksUrl: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/',
      redFlagAction: '⚡ Same-day steroids + rheum',
      caseLink: null,
    },
    {
      id: 'tumour',
      name: 'Raised ICP / brain tumour',
      plainName: 'pressure inside the head',
      summary: 'Progressive HA, worse lying / morning / Valsalva, vomiting, focal neuro',
      baseline: 1,
      category: 'cant-miss',
      keyExam: 'Papilloedema, focal neurological deficit, cognitive change, false-localising CN VI palsy. Always do fundoscopy and a focused neuro exam.',
      nextIx: 'Urgent (2WW) brain & CNS suspected cancer pathway — MRI preferred (NICE NG12). CT same-day if rapid deterioration / GCS drop.',
      patientPhrase: 'Your symptoms suggest something raising the pressure inside the skull. I\'m sending you for an urgent brain scan to see what\'s causing it.',
      ciksUrl: 'https://www.nice.org.uk/guidance/ng12',
      redFlagAction: '⚡ 2WW brain & CNS',
      caseLink: null,
    },
    {
      id: 'iih',
      name: 'Idiopathic intracranial hypertension',
      plainName: 'raised pressure with no cause',
      summary: 'Young obese woman, daily HA, papilloedema, visual obscurations',
      baseline: 1,
      category: 'cant-miss',
      keyExam: 'Papilloedema (bilateral, sometimes asymmetric), enlarged blind spot, sometimes VI nerve palsy. BMI, BP.',
      nextIx: 'Urgent ophthalmology (visual fields, OCT) + MRI brain with MRV to exclude cerebral venous sinus thrombosis (especially if oestrogen / postpartum).',
      patientPhrase: 'Pressure inside the skull is raised even though scans of the brain are normal. The biggest risk is vision — that\'s why we monitor it closely with eye specialists.',
      ciksUrl: 'https://cks.nice.org.uk/topics/headache-assessment/',
      redFlagAction: '⚡ Urgent ophthalmology + MRI/MRV',
      caseLink: null,
    },
    {
      id: 'aacg',
      name: 'Acute angle-closure glaucoma',
      plainName: 'sudden eye-pressure rise',
      summary: 'Severe periorbital pain + red eye + halos + nausea',
      baseline: 1,
      category: 'cant-miss',
      keyExam: 'Red, painful eye; hazy/cloudy cornea; fixed mid-dilated pupil; reduced acuity; rock-hard globe on gentle palpation.',
      nextIx: 'Same-day ophthalmology — sight-threatening. Pre-referral if accessible: pilocarpine 2%, acetazolamide 500mg PO, lie supine. Do NOT delay transfer.',
      patientPhrase: 'The drainage of fluid inside the eye has suddenly blocked — the pressure inside the eye is climbing. Without treatment today, the optic nerve will be damaged.',
      ciksUrl: 'https://cks.nice.org.uk/topics/glaucoma/',
      redFlagAction: '⚡ Same-day ophthalmology',
      caseLink: null,
    },
    {
      id: 'co_poisoning',
      name: 'Carbon monoxide poisoning',
      plainName: 'CO poisoning',
      summary: 'Headache + nausea + multiple household members affected ± winter / faulty boiler',
      baseline: 1,
      category: 'cant-miss',
      keyExam: 'Often non-specific (flu-like). Cherry-red appearance is late & unreliable. SpO₂ does NOT detect — it reads normal.',
      nextIx: 'Same-day A&E for venous COHb level. Remove from source first. Notify CO regulator if confirmed.',
      patientPhrase: 'Carbon monoxide from a faulty appliance can build up at home. The reason everyone\'s unwell is because the gas is in your house — leave the property and get the appliance checked today.',
      ciksUrl: 'https://cks.nice.org.uk/topics/carbon-monoxide-poisoning/',
      redFlagAction: '⚡ Remove from source + A&E COHb',
      caseLink: null,
    },
  ],

  // -----------------------------------------------------
  // EFFECTS — input id → effect on each Dx
  // Positive = supports; negative = refutes.
  // For age (number), use a function.
  // -----------------------------------------------------
  effects: {
    // -- Demographics --
    age: (val, ins) => {
      const out = {};
      if (val >= 50) { out.gca = +18; out.tumour = +4; out.tn = +3; out.migraine = -3; }
      if (val >= 65) { out.gca = (out.gca||0) + 6; out.tumour = (out.tumour||0) + 3; }
      if (val < 30) { out.cluster = +2; out.iih = +2; }
      if (val >= 18 && val <= 50) { out.migraine = (out.migraine||0) + 4; out.tth = (out.tth||0) + 4; }
      return out;
    },
    female:              { migraine:+4, iih:+5, tth:+1 },
    obese:               { iih:+10 },
    pregnant_postpartum: { iih:+3, tumour:+3, migraine:-2 },
    combined_pill:       { tumour:+2, iih:+2 }, // proxy for CVST risk → raised ICP picture
    cancer_hx:           { tumour:+25 },
    immunosuppressed:    { meningitis:+8, tumour:+5 },
    recent_trauma:       { tumour:+8, sah:+4 },
    family_aneurysm:     { sah:+8 },
    gas_appliance_winter:{ co_poisoning:+22 },
    household_drowsy:    { co_poisoning:+25 },

    // -- Onset & timing --
    thunderclap:         { sah:+35, meningitis:+5, migraine:-3, tth:-8 },
    gradual_progressive: { tumour:+15, gca:+5, iih:+6, moh:+4, sah:-3, cluster:-4 },
    woke_from_sleep:     { cluster:+10, tumour:+8, migraine:+2 },
    morning_worst:       { tumour:+10, iih:+8, cluster:+4 },
    first_ever_over50:   { gca:+10, tumour:+6, sah:+3, migraine:-5, tth:-3 },
    duration_secs:       { tn:+22, cluster:-3, migraine:-5 },
    duration_15_180min:  { cluster:+15, migraine:-2, tn:-2 },
    duration_4_72h:      { migraine:+18, cluster:-3, tn:-5 },
    duration_days_constant:{ tth:+8, moh:+10, gca:+5, tumour:+5, sinusitis:+5 },
    frequency_15plus:    { moh:+18, tth:+6, migraine:+4 },
    analgesic_overuse:   { moh:+28, tth:-2 },

    // -- Quality & site --
    throbbing:           { migraine:+14, cluster:+3, tth:-3 },
    pressing_band:       { tth:+18, migraine:-3 },
    sharp_stabbing:      { tn:+18, cluster:+4 },
    severe_10_10:        { sah:+10, cluster:+12, migraine:+4, tn:+4, aacg:+4 },
    unilateral:          { migraine:+6, cluster:+10, tn:+8, tth:-4, gca:+4, aacg:+4 },
    bilateral:           { tth:+10, moh:+5, migraine:-2, cluster:-6, tn:-6 },
    periorbital_orbital: { cluster:+18, aacg:+10, tn:+3 },
    occipital_neck:      { cervicogenic:+15, sah:+5, tth:+3 },
    maxillofacial_v23:   { tn:+18, sinusitis:+5 },
    sinus_distribution:  { sinusitis:+12 },

    // -- Triggers --
    worse_movement:      { migraine:+10, tth:-3 },
    worse_cough_valsalva:{ tumour:+14, iih:+10, sah:+4 },
    worse_lying_bending: { tumour:+12, iih:+12, sinusitis:+5 },
    after_exertion_orgasm:{ sah:+10, migraine:+2 },
    face_touch_trigger:  { tn:+22 },
    worse_neck_movement: { cervicogenic:+14, tth:+3 },
    trigger_alcohol:     { migraine:+5, cluster:+10, tth:-1 },
    trigger_menstrual:   { migraine:+12 },

    // -- Associated --
    nausea_vomiting:     { migraine:+10, sah:+6, tumour:+5, gca:+2, aacg:+5, meningitis:+3, tth:-3 },
    photophobia:         { migraine:+15, meningitis:+10, sah:+5, aacg:+3, tth:-3 },
    phonophobia:         { migraine:+12, meningitis:+3, tth:-2 },
    aura_visual:         { migraine:+22, tumour:+3 },
    aura_sensory:        { migraine:+15, tumour:+5 },
    aura_speech:         { migraine:+8, tumour:+8 }, // and TIA but not in list
    autonomic_lacrimation:{ cluster:+14, tn:+2 },
    autonomic_red_eye:   { cluster:+12, aacg:+5 },
    autonomic_rhinorrhea:{ cluster:+10, sinusitis:+5 },
    ptosis_miosis:       { cluster:+14, sah:+5 }, // sah from PCom CN III palsy
    restless_pacing:     { cluster:+14, migraine:-4 },
    nasal_purulent:      { sinusitis:+20 },
    sinus_tender:        { sinusitis:+15 },
    recent_uri:          { sinusitis:+10 },

    // -- Red flags --
    fever:               { meningitis:+22, sinusitis:+4, tumour:+2 },
    neck_stiffness:      { meningitis:+25, sah:+15, tth:-2 },
    non_blanching_rash:  { meningitis:+28 },
    scalp_tenderness:    { gca:+22 },
    jaw_claudication:    { gca:+28 },
    visual_loss_amaurosis:{ gca:+18, aacg:+18, tumour:+5, iih:+8 },
    diplopia:            { tumour:+12, iih:+10 },
    papilloedema:        { iih:+22, tumour:+18 },
    focal_neuro:         { tumour:+18, sah:+12 },
    altered_consciousness:{ meningitis:+15, sah:+15, tumour:+10, co_poisoning:+10 },
    seizure_with_ha:     { tumour:+18, meningitis:+8, sah:+6 },
    eye_red_painful:     { aacg:+20 },
    halos_lights:        { aacg:+22 },
    esr_crp_raised:      { gca:+18, tumour:+3, meningitis:+5 },
    weight_loss_systemic:{ tumour:+8, gca:+8 },
  },

  // -----------------------------------------------------
  // ASK-ABOUT — features that strongly disambiguate
  // (surfaced in Pro/Con view as "💡 Ask about")
  // -----------------------------------------------------
  askAbout: {
    tth:        ['pressing_band','bilateral','duration_days_constant'],
    migraine:   ['throbbing','duration_4_72h','photophobia','aura_visual','nausea_vomiting','trigger_menstrual'],
    cluster:    ['periorbital_orbital','duration_15_180min','autonomic_lacrimation','ptosis_miosis','restless_pacing'],
    moh:        ['frequency_15plus','analgesic_overuse'],
    tn:         ['duration_secs','sharp_stabbing','face_touch_trigger','maxillofacial_v23'],
    sinusitis:  ['nasal_purulent','sinus_tender','recent_uri','sinus_distribution'],
    cervicogenic:['occipital_neck','worse_neck_movement'],
    sah:        ['thunderclap','neck_stiffness','severe_10_10','nausea_vomiting'],
    meningitis: ['fever','neck_stiffness','non_blanching_rash','photophobia'],
    gca:        ['age','scalp_tenderness','jaw_claudication','visual_loss_amaurosis','esr_crp_raised'],
    tumour:     ['morning_worst','worse_cough_valsalva','focal_neuro','papilloedema','gradual_progressive'],
    iih:        ['obese','female','papilloedema','visual_loss_amaurosis'],
    aacg:       ['eye_red_painful','halos_lights','periorbital_orbital','visual_loss_amaurosis'],
    co_poisoning:['gas_appliance_winter','household_drowsy'],
  },

  // -----------------------------------------------------
  // Evidence sources
  // -----------------------------------------------------
  sources: [
    { label:'NICE CKS Headache assessment', url:'https://cks.nice.org.uk/topics/headache-assessment/' },
    { label:'NICE NG12 Suspected cancer', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'NICE NG228 Stroke / TIA', url:'https://www.nice.org.uk/guidance/ng128' },
    { label:'NICE NG240 Meningitis', url:'https://www.nice.org.uk/guidance/ng240' },
    { label:'ICHD-3 classification', url:'https://ichd-3.org/' },
    { label:'SNNOOP10 red-flag mnemonic', url:'https://pubmed.ncbi.nlm.nih.gov/30429301/' },
    { label:'BSR Giant Cell Arteritis guideline', url:'https://academic.oup.com/rheumatology/article/59/3/e1/5714025' },
  ],

  defaultMessage: 'Tick features on the left — the differential ranks live.',
});
