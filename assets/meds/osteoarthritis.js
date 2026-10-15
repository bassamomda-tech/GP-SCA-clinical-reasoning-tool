/* ============================================
   Medication Chooser — Osteoarthritis
   NICE NG226 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('osteoarthritis', {
  title: 'Osteoarthritis — analgesia selection',
  subtitle: 'Drugs are an adjunct to therapeutic exercise and weight management. Topical NSAID first for knee OA (NICE NG226). Doses per SPC.',
  guideline: 'NICE NG226 · SPC',


  safety: [
    {"tone":"amber","label":"Peptic ulcer / GI bleed history","text":"NSAID-risk profile — topical NSAID first; if an oral NSAID is considered, lowest effective dose for the shortest possible time, with a PPI (NICE NG226)"},
    {"tone":"amber","label":"Opioid dependence / misuse risk","text":"NICE NG226 — do not offer strong opioids for OA; do not routinely offer weak opioids (only infrequent short-term use when all other drug treatments are contraindicated, not tolerated or ineffective)"}
  ],

  drugs: [
    // -------- TOPICAL NSAID --------
    {
      id:'topical_nsaid',
      name:'Topical NSAID',
      examples:'Topical ibuprofen / diclofenac gel',
      step:'1st-line (knee)',
      source:'NICE NG226 (2022)',
      sideEffects:'Local skin irritation; minimal systemic absorption',
      monitor:'Skin reaction; review at 2–4 weeks',
      counsel:'"Rub this into the joint — it works locally with very little getting into the bloodstream, so it\'s much safer for the stomach and kidneys than tablets."',
      detail:{
        'Dose': 'Per product SPC',
        'Key teaching': 'NICE NG226: offer a topical NSAID for knee OA; consider one for OA of other joints (e.g. hand, hip). Use alongside core treatment (exercise, weight management), before any oral NSAID.'
      },
      conditions: [
        {"kind":"favoured","label":"Knee OA","text":"Knee OA — NG226: offer topical NSAID (first-line drug)"},
        {"kind":"favoured","label":"Hand OA","text":"Hand OA — NG226: consider topical NSAID (evidence weaker than knee)"},
        {"kind":"favoured","label":"Peptic ulcer / GI bleed history","text":"Comorbid/older or systemic-averse — safest effective option"},
        {"kind":"favoured","label":"CKD / renal impairment","text":"Comorbid/older or systemic-averse — safest effective option"},
        {"kind":"favoured","label":"Cardiovascular disease / heart failure","text":"Comorbid/older or systemic-averse — safest effective option"},
        {"kind":"favoured","label":"Elderly / frail","text":"Comorbid/older or systemic-averse — safest effective option"},
        {"kind":"favoured","label":"Prefers to avoid systemic drugs","text":"Comorbid/older or systemic-averse — safest effective option"},
        {"kind":"note","label":"Hip OA","text":"Hip OA — NG226: consider; evidence strongest for knee"}
      ]
    },

    // -------- ORAL NSAID --------
    {
      id:'oral_nsaid',
      name:'Oral NSAID (+ PPI)',
      examples:'e.g. naproxen or ibuprofen, with a PPI',
      step:'If topical ineffective or unsuitable',
      source:'NICE NG226 (2022) · SPC',
      sideEffects:'GI bleed/ulcer, renal impairment, fluid retention, raised BP, CV risk',
      monitor:'Lowest dose, shortest time; co-prescribe PPI; renal function if at risk',
      counsel:'"A stronger anti-inflammatory tablet if the gel isn\'t enough — always with a stomach-protector, at the lowest dose for the shortest time."',
      detail:{
        'Dose': 'Choice and dose per SPC; lowest effective dose for the shortest possible time, with a PPI; review need regularly',
        'Interactions': 'Anticoagulants/antiplatelets, ACEi/ARB+diuretic (AKI), SSRIs/steroids (GI bleed)',
        'Key teaching': 'NICE NG226: if a topical NSAID is ineffective or unsuitable, consider an oral NSAID at the lowest effective dose for the shortest possible time, and offer a PPI. Take account of GI, renal, liver and CV risk (age, pregnancy, current medication, comorbidities).'
      },
      conditions: [
        {"kind":"avoid","label":"Peptic ulcer / GI bleed history","text":"Peptic ulcer / GI bleed history — avoid (or only with strong gastroprotection + caution)"},
        {"kind":"avoid","label":"CKD / renal impairment","text":"Renal impairment — risk of AKI"},
        {"kind":"avoid","label":"NSAID-sensitive asthma","text":"NSAID-sensitive asthma — bronchospasm risk"},
        {"kind":"caution","label":"Cardiovascular disease / heart failure","text":"CVD/HF — raises CV risk; avoid or shortest possible course"},
        {"kind":"caution","label":"Elderly / frail","text":"Elderly — higher GI/renal/CV risk; PPI cover, short course"},
        {"kind":"caution","label":"On anticoagulant / antiplatelet","text":"On anticoagulant/antiplatelet — bleeding risk"},
        {"kind":"favoured","label":"Hip OA","text":"Hip OA — oral may be needed where topical is less effective"}
      ]
    },

    // -------- INTRA-ARTICULAR STEROID --------
    {
      id:'ia_steroid',
      name:'Intra-articular corticosteroid',
      examples:'Methylprednisolone / triamcinolone injection',
      step:'Short-term relief',
      source:'NICE NG226 (2022)',
      sideEffects:'Post-injection flare, skin/fat atrophy, transient glucose rise, small infection risk',
      monitor:'Effect is short-lived (weeks); not for repeated long-term use',
      counsel:'"An injection straight into the joint can settle a bad flare for a few weeks — useful to get you moving and into physiotherapy, but it\'s a short-term help, not a cure."',
      detail:{
        'Dose': 'Agent and dose per SPC and local practice',
        'Key teaching': 'NICE NG226: consider intra-articular corticosteroid for short-term relief when other drug treatments are ineffective or unsuitable, or to support therapeutic exercise. Explain that relief is only short term.'
      },
      conditions: [
        {"kind":"favoured","label":"Acute painful flare / single joint","text":"Acute flare / single painful joint — short-term relief to enable rehab"},
        {"kind":"favoured","label":"Peptic ulcer / GI bleed history","text":"NSAID-risk patient — avoids systemic NSAID exposure"},
        {"kind":"favoured","label":"CKD / renal impairment","text":"NSAID-risk patient — avoids systemic NSAID exposure"},
        {"kind":"favoured","label":"Cardiovascular disease / heart failure","text":"NSAID-risk patient — avoids systemic NSAID exposure"}
      ]
    },

    // -------- TOPICAL CAPSAICIN --------
    {
      id:'capsaicin',
      name:'Topical capsaicin',
      examples:'Capsaicin cream',
      step:'Not recommended in NG226',
      source:'NICE NG226 (2022); was in NICE CG177 (2014)',
      sideEffects:'Local burning/stinging (settles with regular use)',
      monitor:'If already in use and helping, discuss rather than stop abruptly',
      counsel:'"The anti-inflammatory gel is the cream the guidelines now recommend for arthritis — it tends to work at least as well and is better value than the chilli-based cream."',
      detail:{
        'Key teaching': 'Recommended for knee and hand OA in the old guideline (CG177, 2014) but not among the options recommended in NICE NG226. NG226 found some evidence of benefit in knee (not hand) OA, but judged topical NSAIDs the better, more cost-effective option; capsaicin for joints other than the knee is a research recommendation.'
      },
      
    },

    // -------- WEAK OPIOID / PARACETAMOL --------
    {
      id:'paracetamol_opioid',
      name:'Paracetamol / weak opioid',
      examples:'Paracetamol PRN · short codeine course',
      step:'Not routinely',
      source:'NICE NG226 (2022)',
      sideEffects:'Opioid — constipation, sedation, dependence; paracetamol well tolerated',
      monitor:'Infrequent short-term use only; review for benefit; avoid drifting into repeat prescribing',
      counsel:'"Paracetamol and codeine-type painkillers have little evidence of helping arthritis and carry risks, so they\'re not for regular use — exercise, the gel and, if needed, an anti-inflammatory tablet are the better options."',
      detail:{
        'Dose': 'Per SPC, only if the NG226 exception applies',
        'Key teaching': 'NICE NG226: do not routinely offer paracetamol or weak opioids unless they are only used infrequently for short-term pain relief AND all other pharmacological treatments are contraindicated, not tolerated or ineffective. Do not offer strong opioids.'
      },
      conditions: [
        {"kind":"avoid","label":"Elderly / frail","text":"Elderly — opioid falls/constipation/confusion risk"},
        {"kind":"avoid","label":"Opioid dependence / misuse risk","text":"Opioid misuse risk — avoid opioids"},
        {"kind":"note","label":"Peptic ulcer / GI bleed history","text":"Oral NSAID contraindicated — NG226 exception may apply if topical NSAID and injection also unsuitable/ineffective: infrequent short-term use only"},
        {"kind":"note","label":"CKD / renal impairment","text":"Oral NSAID contraindicated — NG226 exception may apply if topical NSAID and injection also unsuitable/ineffective: infrequent short-term use only"},
        {"kind":"note","label":"NSAID-sensitive asthma","text":"Oral NSAID contraindicated — NG226 exception may apply if topical NSAID and injection also unsuitable/ineffective: infrequent short-term use only"}
      ]
    },

    // -------- AVOID --------
    {
      id:'avoid_oa',
      name:'Glucosamine · strong opioids · IA hyaluronan',
      examples:'Glucosamine · morphine, oxycodone · intra-articular hyaluronan',
      step:'Do not offer',
      source:'NICE NG226 (2022)',
      sideEffects:'No meaningful benefit; opioid harms',
      monitor:'—',
      counsel:'"Glucosamine supplements, strong painkillers and gel injections don\'t help arthritis enough to justify them — exercise and weight management do far more."',
      detail:{
        'Key teaching': 'NICE NG226: do not offer glucosamine, strong opioids or intra-articular hyaluronan to manage OA. Chondroitin was a CG177 "do not offer" and is not a recommended option. NG226 made no recommendation on rubefacients (insufficient evidence) — they are not a recommended option.'
      },
      
    }
  ],

  sources: [
    { label:'NICE NG226 — Osteoarthritis in over 16s: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng226' },
    { label:'NICE NG226 — rationale and impact (topical capsaicin, rubefacients)', url:'https://www.nice.org.uk/guidance/ng226/chapter/rationale-and-impact' },
    { label:'BNF — Osteoarthritis / soft-tissue disorders', url:'https://bnf.nice.org.uk/treatment-summaries/osteoarthritis/' }
  ],
});
