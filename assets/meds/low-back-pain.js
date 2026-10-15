/* ============================================
   Medication Chooser — Low back pain & sciatica
   NICE NG59 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('low-back-pain', {
  title: 'Low back pain & sciatica — analgesia selection',
  subtitle: 'NICE NG59 analgesic options for low back pain and sciatica.',
  guideline: 'NICE NG59 · SPC',


  safety: [
    {"tone":"red","label":"Cauda equina features","text":"Cauda equina syndrome — EMERGENCY same-day spinal referral + urgent MRI. Do not manage as simple back pain."},
    {"tone":"red","label":"?Myeloma (older, bone pain, ↑ESR, anaemia, ↑Ca, renal)","text":"NICE NG12 (updated April 2026) — ?myeloma: FBC, ESR/plasma viscosity, calcium, renal + serum protein electrophoresis / Bence-Jones protein (urine). Very urgent if hypercalcaemia/renal failure."},
    {"tone":"red","label":"Cancer history / ?spinal metastasis","text":"Cancer history with new back pain — consider spinal metastasis / MSCC; urgent imaging + MSCC pathway if neurology"},
    {"tone":"amber","label":"?Spinal infection (fever, IVDU, immunosuppressed)","text":"?Spinal infection (discitis/abscess) — inflammatory markers, blood cultures, urgent imaging/referral"},
    {"tone":"amber","label":"?Vertebral fracture (trauma, osteoporosis, steroids)","text":"?Vertebral fragility fracture — imaging; assess osteoporosis (FRAX, DXA)"},
    {"tone":"amber","label":"?Inflammatory (age <40, morning stiffness, alternating buttock)","text":"?Axial spondyloarthritis — inflammatory back pain criteria; consider rheumatology referral (see axSpA pathway)"}
  ],

  drugs: [
    // -------- NSAID --------
    {
      id:'nsaid',
      name:'Oral NSAID',
      examples:'Ibuprofen 400 mg TDS · Naproxen 250–500 mg BD',
      step:'Consider (low back pain)',
      source:'NICE NG59',
      sideEffects:'GI bleed/ulcer, renal impairment, fluid retention, raised BP, bronchospasm in sensitive asthma',
      monitor:'Lowest effective dose, shortest time; co-prescribe PPI; renal function if at risk',
      counsel:'"An anti-inflammatory is the most effective tablet for back pain — take it with food and a stomach-protecting tablet, at the lowest dose for the shortest time."',
      detail:{
        'Dose': 'Naproxen 250–500 mg BD or ibuprofen 400 mg TDS, with a PPI; shortest effective course',
        'Interactions': 'Anticoagulants/antiplatelets (bleed), ACEi/ARB + diuretic (triple-whammy AKI), other NSAIDs',
        'Key teaching': 'NICE NG59: consider an oral NSAID for low back pain, at the lowest effective dose for the shortest time, taking GI, liver and cardiorenal risk into account (do NOT offer paracetamol alone). Evidence of NSAID benefit in sciatica is limited.'
      },
      conditions: [
        {"kind":"avoid","label":"Peptic ulcer / GI bleed history","text":"Peptic ulcer / GI bleed history — NSAID contraindicated (or only with strong gastroprotection + specialist judgement)"},
        {"kind":"avoid","label":"CKD / renal impairment","text":"Renal impairment — NSAID risks further AKI"},
        {"kind":"avoid","label":"NSAID-sensitive asthma","text":"NSAID-sensitive asthma — risk of bronchospasm"},
        {"kind":"caution","label":"Cardiovascular disease / heart failure","text":"Cardiovascular disease / HF — NSAID raises CV risk; avoid or use lowest dose briefly"},
        {"kind":"caution","label":"Pregnant or breastfeeding","text":"Pregnancy — avoid (esp. 3rd trimester)"},
        {"kind":"caution","label":"On anticoagulant / antiplatelet","text":"On anticoagulant/antiplatelet — increased bleeding; avoid if possible"},
        {"kind":"favoured","label":"Acute low back pain (<6 weeks)","text":"Acute low back pain — NSAID is the analgesic NG59 recommends considering"},
        {"kind":"note","label":"Elderly / falls risk","text":"Elderly — higher GI/renal risk; PPI cover, short course"}
      ]
    },

    // -------- WEAK OPIOID --------
    {
      id:'weak_opioid',
      name:'Weak opioid (± paracetamol)',
      examples:'Codeine 30–60 mg QDS · Co-codamol',
      step:'Acute, if NSAID unsuitable',
      source:'NICE NG59',
      sideEffects:'Constipation, drowsiness, nausea, dependence with prolonged use',
      monitor:'Short course only; review; co-prescribe laxative',
      counsel:'"A short course of a stronger painkiller if the anti-inflammatory isn\'t enough or isn\'t suitable — only for a week or two, as it can be constipating and habit-forming."',
      detail:{
        'Dose': 'Codeine 30–60 mg QDS (often as co-codamol) for a short acute course',
        'Interactions': 'Other sedatives, CNS depressants',
        'Key teaching': 'NICE NG59: consider a weak opioid (± paracetamol) for acute low back pain ONLY if an NSAID is contraindicated, not tolerated, or ineffective. Do not offer opioids for chronic low back pain or chronic sciatica.'
      },
      conditions: [
        {"kind":"avoid","label":"Persistent / chronic (>12 weeks)","text":"Chronic low back pain — NICE NG59: do not offer opioids (poor long-term benefit, harm)"},
        {"kind":"avoid","label":"Opioid dependence / misuse risk","text":"Opioid misuse risk — avoid"},
        {"kind":"caution","label":"Elderly / falls risk","text":"Elderly — falls, constipation, confusion; use cautiously"},
        {"kind":"caution","label":"Needs to avoid sedation (driver / safety-critical)","text":"Safety-critical role — sedation risk"},
        {"kind":"favoured","label":"Peptic ulcer / GI bleed history","text":"NSAID unsuitable/ineffective — short acute opioid course is the NG59 fallback"},
        {"kind":"favoured","label":"CKD / renal impairment","text":"NSAID unsuitable/ineffective — short acute opioid course is the NG59 fallback"},
        {"kind":"favoured","label":"NSAID-sensitive asthma","text":"NSAID unsuitable/ineffective — short acute opioid course is the NG59 fallback"},
        {"kind":"favoured","label":"NSAID tried / ineffective / contraindicated","text":"NSAID unsuitable/ineffective — short acute opioid course is the NG59 fallback"}
      ]
    },

    // -------- ANTIDEPRESSANTS (amitriptyline / duloxetine) --------
    {
      id:'neuropathic',
      name:'Antidepressants (amitriptyline · duloxetine)',
      examples:'Amitriptyline · Duloxetine',
      step:'NOT recommended for low back pain',
      source:'NICE NG59',
      sideEffects:'Amitriptyline — sedation, dry mouth, retention, QT; duloxetine — nausea, insomnia, raised BP',
      monitor:'If already taking one for back pain: review and taper',
      counsel:'"Antidepressant-type tablets such as amitriptyline or duloxetine haven\'t been shown to help back pain enough to outweigh their side effects, so the guidance advises against them for this. If your mood is low, we\'ll look at that separately."',
      detail:{
        'Dose': 'N/A for low back pain — dose per SPC only for a separate indication (e.g. co-existing depression)',
        'Interactions': 'TCA — QT drugs, other sedatives; duloxetine — serotonergic drugs, hepatic',
        'Key teaching': 'NICE NG59: do not offer SSRIs, SNRIs or tricyclic antidepressants for managing low back pain. For sciatica NG59 makes no antidepressant recommendation (research recommendation only) — any trial is a specialist or pain-service decision. NICE CG173 excludes sciatica, which is covered by NG59. Treat co-existing depression in its own right.'
      },
      conditions: [
        {"kind":"avoid","label":"Sciatica / radicular (neuropathic) pain","text":"Sciatica — NG59 makes no antidepressant recommendation; specialist / pain-service decision only"},
        {"kind":"avoid","label":"IHD / arrhythmia / long QT","text":"IHD/arrhythmia/long QT — TCA caution"}
      ]
    },

    // -------- GABAPENTINOID --------
    {
      id:'gabapentinoid',
      name:'Gabapentinoid',
      examples:'Pregabalin · Gabapentin',
      step:'NOT recommended for sciatica',
      source:'NICE NG59',
      sideEffects:'Sedation, dizziness, weight gain, dependence (Class C controlled)',
      monitor:'Misuse potential; taper to stop',
      counsel:'"We used to use these for sciatica but the evidence shows they don\'t help and carry risks, so the guidance advises against them for this."',
      detail:{
        'Dose': 'N/A for sciatica',
        'Key teaching': 'NICE NG59: do not offer gabapentinoids or other antiepileptics for low back pain, and do not offer gabapentinoids, other antiepileptics, oral corticosteroids or benzodiazepines for sciatica. They remain options in other neuropathic-pain conditions (NICE CG173).'
      },
      conditions: [
        {"kind":"avoid","label":"Sciatica / radicular (neuropathic) pain","text":"NICE NG59 — do not offer gabapentinoids for sciatica (no benefit, dependence risk)"}
      ]
    },

    // -------- PARACETAMOL --------
    {
      id:'paracetamol',
      name:'Paracetamol (not as sole agent)',
      examples:'Paracetamol 1 g QDS',
      step:'Adjunct only',
      source:'NICE NG59',
      sideEffects:'Well tolerated; hepatotoxic in overdose / low body weight',
      monitor:'Dose by weight in frail/low-weight adults',
      counsel:'"On its own paracetamol doesn\'t do much for back pain, but it\'s a safe tablet to combine with the others to take the edge off."',
      detail:{
        'Dose': 'Paracetamol 1 g QDS (reduce if <50 kg / frail)',
        'Key teaching': 'NICE NG59: do NOT offer paracetamol alone for low back pain. Reasonable only as part of combination analgesia.'
      },
      
    },

    // -------- AVOID: strong opioids / benzodiazepines --------
    {
      id:'avoid_class',
      name:'Strong opioids · benzodiazepines · muscle relaxants',
      examples:'Morphine · Diazepam',
      step:'Avoid',
      source:'NICE NG59',
      sideEffects:'Dependence, sedation, falls, poor long-term outcomes',
      monitor:'—',
      counsel:'"Strong painkillers and diazepam-type tablets don\'t help back pain in the long run and carry real risks, so we steer away from them."',
      detail:{
        'Key teaching': 'NICE NG59: do not offer opioids for chronic low back pain or chronic sciatica, and do not offer benzodiazepines for sciatica. Benzodiazepines and muscle relaxants are avoided for low back pain in practice because of dependence and sedation.'
      },
      conditions: [
        {"kind":"avoid","label":"Persistent / chronic (>12 weeks)","text":"Chronic pain — particularly avoid escalation to strong opioids"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG59 — Low back pain and sciatica in over 16s', url:'https://www.nice.org.uk/guidance/ng59' },
    { label:'NICE CG173 — Neuropathic pain in adults (excludes sciatica)', url:'https://www.nice.org.uk/guidance/cg173' },
    { label:'NICE NG12 (updated April 2026) — Suspected cancer: recognition and referral (updated April 2026)', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'BNF — Analgesics', url:'https://bnf.nice.org.uk/treatment-summaries/analgesics/' }
  ],
});
