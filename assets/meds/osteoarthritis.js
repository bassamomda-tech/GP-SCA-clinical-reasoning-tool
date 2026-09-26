/* ============================================
   Medication Chooser — Osteoarthritis
   NICE NG226 · BNF
   ============================================ */
MedChooser.register('osteoarthritis', {
  title: 'Osteoarthritis — analgesia selection',
  subtitle: 'Drugs are an adjunct to therapeutic exercise and weight management. Topical NSAID first for knee OA (NICE NG226). Tick the patient profile; cards re-tier live. Doses per BNF.',
  guideline: 'NICE NG226 · BNF',

  factors: [
    // Joint
    { group:'Affected joint', id:'knee', label:'Knee OA' },
    { group:'Affected joint', id:'hand', label:'Hand OA' },
    { group:'Affected joint', id:'hip', label:'Hip OA', note:'Topical NSAID: consider (evidence strongest for knee)' },
    { group:'Affected joint', id:'flare', label:'Acute painful flare / single joint' },

    // Comorbidities (NSAID risk)
    { group:'Comorbidities', id:'pud', label:'Peptic ulcer / GI bleed history' },
    { group:'Comorbidities', id:'ckd', label:'CKD / renal impairment' },
    { group:'Comorbidities', id:'cvd', label:'Cardiovascular disease / heart failure' },
    { group:'Comorbidities', id:'asthma_nsaid', label:'NSAID-sensitive asthma' },
    { group:'Comorbidities', id:'htn', label:'Hypertension' },
    { group:'Comorbidities', id:'elderly', label:'Elderly / frail' },

    // Current medications
    { group:'Current medications', id:'anticoag', label:'On anticoagulant / antiplatelet' },
    { group:'Current medications', id:'on_ssri', label:'On SSRI / steroid', note:'Adds GI bleed risk' },
    { group:'Current medications', id:'opioid_risk', label:'Opioid dependence / misuse risk' },

    // Preference / context
    { group:'Preference / context', id:'topical_pref', label:'Prefers to avoid systemic drugs' },
    { group:'Preference / context', id:'gastroprotect', label:'Needs gastroprotection (high GI risk)' }
  ],

  flags: (f) => {
    const out = [];
    if (f.pud || f.ckd || f.cvd || f.anticoag) out.push({ tone:'amber', text:'NSAID-risk profile — topical NSAID first; if an oral NSAID is considered, lowest effective dose for the shortest possible time, with a PPI (NICE NG226)' });
    if (f.opioid_risk) out.push({ tone:'amber', text:'NICE NG226 — do not offer strong opioids for OA; do not routinely offer weak opioids (only infrequent short-term use when all other drug treatments are contraindicated, not tolerated or ineffective)' });
    return out;
  },

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
        'Dose': 'Per BNF / product SPC',
        'Key teaching': 'NICE NG226: offer a topical NSAID for knee OA; consider one for OA of other joints (e.g. hand, hip). Use alongside core treatment (exercise, weight management), before any oral NSAID.'
      },
      evaluate(f){
        const r = [];
        if (f.knee) r.push({kind:'good', text:'Knee OA — NG226: offer topical NSAID (first-line drug)'});
        if (f.hand) r.push({kind:'good', text:'Hand OA — NG226: consider topical NSAID (evidence weaker than knee)'});
        if (f.hip) r.push({kind:'neutral', text:'Hip OA — NG226: consider; evidence strongest for knee'});
        if (f.elderly || f.pud || f.ckd || f.cvd || f.topical_pref) r.push({kind:'good', text:'Comorbid/older or systemic-averse — safest effective option'});
        const preferred = f.knee || f.hand || f.elderly || f.pud || f.ckd || f.cvd;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Offer for knee OA; consider for other joints'}] };
      }
    },

    // -------- ORAL NSAID --------
    {
      id:'oral_nsaid',
      name:'Oral NSAID (+ PPI)',
      examples:'e.g. naproxen or ibuprofen, with a PPI',
      step:'If topical ineffective or unsuitable',
      source:'NICE NG226 (2022) · BNF',
      sideEffects:'GI bleed/ulcer, renal impairment, fluid retention, raised BP, CV risk',
      monitor:'Lowest dose, shortest time; co-prescribe PPI; renal function if at risk',
      counsel:'"A stronger anti-inflammatory tablet if the gel isn\'t enough — always with a stomach-protector, at the lowest dose for the shortest time."',
      detail:{
        'Dose': 'Choice and dose per BNF; lowest effective dose for the shortest possible time, with a PPI; review need regularly',
        'Interactions': 'Anticoagulants/antiplatelets, ACEi/ARB+diuretic (AKI), SSRIs/steroids (GI bleed)',
        'Key teaching': 'NICE NG226: if a topical NSAID is ineffective or unsuitable, consider an oral NSAID at the lowest effective dose for the shortest possible time, and offer a PPI. Take account of GI, renal, liver and CV risk (age, pregnancy, current medication, comorbidities).'
      },
      evaluate(f){
        if (f.pud) return { tier:'avoid', reasons:[{kind:'bad', text:'Peptic ulcer / GI bleed history — avoid (or only with strong gastroprotection + caution)'}] };
        if (f.ckd) return { tier:'avoid', reasons:[{kind:'bad', text:'Renal impairment — risk of AKI'}] };
        if (f.asthma_nsaid) return { tier:'avoid', reasons:[{kind:'bad', text:'NSAID-sensitive asthma — bronchospasm risk'}] };
        const r = [];
        if (f.cvd) r.push({kind:'bad', text:'CVD/HF — raises CV risk; avoid or shortest possible course'});
        if (f.anticoag) r.push({kind:'bad', text:'On anticoagulant/antiplatelet — bleeding risk'});
        if (f.hip) r.push({kind:'good', text:'Hip OA — oral may be needed where topical is less effective'});
        if (f.elderly) r.push({kind:'bad', text:'Elderly — higher GI/renal/CV risk; PPI cover, short course'});
        const safe = !f.cvd && !f.anticoag;
        return { tier: safe ? 'acceptable' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Consider if topical NSAID ineffective or unsuitable, with a PPI'}] };
      }
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
        'Dose': 'Agent and dose per BNF and local practice',
        'Key teaching': 'NICE NG226: consider intra-articular corticosteroid for short-term relief when other drug treatments are ineffective or unsuitable, or to support therapeutic exercise. Explain that relief is only short term.'
      },
      evaluate(f){
        const r = [];
        if (f.flare) r.push({kind:'good', text:'Acute flare / single painful joint — short-term relief to enable rehab'});
        if (f.pud || f.ckd || f.cvd) r.push({kind:'good', text:'NSAID-risk patient — avoids systemic NSAID exposure'});
        return { tier: f.flare ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Option for short-term flare relief'}] };
      }
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
      evaluate(f){
        return { tier:'avoid', reasons:[{kind:'bad', text:'Not a recommended option in NICE NG226 (dropped from CG177) — use topical NSAID instead'}] };
      }
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
        'Dose': 'Per BNF, only if the NG226 exception applies',
        'Key teaching': 'NICE NG226: do not routinely offer paracetamol or weak opioids unless they are only used infrequently for short-term pain relief AND all other pharmacological treatments are contraindicated, not tolerated or ineffective. Do not offer strong opioids.'
      },
      evaluate(f){
        if (f.opioid_risk) return { tier:'avoid', reasons:[{kind:'bad', text:'Opioid misuse risk — avoid opioids'}] };
        const oralNsaidCI = f.pud || f.ckd || f.asthma_nsaid;
        const r = [];
        if (oralNsaidCI) r.push({kind:'neutral', text:'Oral NSAID contraindicated — NG226 exception may apply if topical NSAID and injection also unsuitable/ineffective: infrequent short-term use only'});
        else r.push({kind:'bad', text:'NG226: not routinely — only if used infrequently short term AND all other drug treatments contraindicated, not tolerated or ineffective'});
        if (f.elderly) r.push({kind:'bad', text:'Elderly — opioid falls/constipation/confusion risk'});
        return { tier: oralNsaidCI ? 'acceptable' : 'avoid', reasons: r };
      }
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
      evaluate(f){
        return { tier:'avoid', reasons:[{kind:'bad', text:'NICE NG226 do-not-offer list — no worthwhile benefit or risks outweigh benefits'}] };
      }
    }
  ],

  sources: [
    { label:'NICE NG226 — Osteoarthritis in over 16s: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng226' },
    { label:'NICE NG226 — rationale and impact (topical capsaicin, rubefacients)', url:'https://www.nice.org.uk/guidance/ng226/chapter/rationale-and-impact' },
    { label:'BNF — Osteoarthritis / soft-tissue disorders', url:'https://bnf.nice.org.uk/treatment-summaries/osteoarthritis/' }
  ],
});
