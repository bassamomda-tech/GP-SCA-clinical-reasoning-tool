/* ============================================
   Medication Chooser — Osteoarthritis
   NICE NG226 · CKS Osteoarthritis · BNF
   ============================================ */
MedChooser.register('osteoarthritis', {
  title: 'Osteoarthritis — analgesia selection',
  subtitle: 'Topical-first analgesic selection tiered by joint and comorbidity (NICE NG226). Tick the patient profile; cards re-tier live.',
  guideline: 'NICE NG226 · CKS · BNF',

  factors: [
    // Joint
    { group:'Affected joint', id:'knee', label:'Knee OA' },
    { group:'Affected joint', id:'hand', label:'Hand OA' },
    { group:'Affected joint', id:'hip', label:'Hip OA', note:'Topical NSAID less effective' },
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
    { group:'Preference / context', id:'gastroprotect', label:'Needs gastroprotection (high GI risk)' },
  ],

  flags: (f) => {
    const out = [];
    if (f.pud || f.ckd || f.cvd || f.anticoag) out.push({ tone:'amber', text:'NSAID-risk profile — use topical first; if oral NSAID essential, lowest dose, shortest time + PPI' });
    if (f.opioid_risk) out.push({ tone:'amber', text:'NICE NG226 — do NOT use strong opioids for OA; weak opioids only briefly for an acute flare' });
    return out;
  },

  drugs: [
    // -------- TOPICAL NSAID --------
    {
      id:'topical_nsaid',
      name:'Topical NSAID',
      examples:'Topical ibuprofen / diclofenac gel',
      step:'1st-line (knee / hand)',
      source:'NICE NG226 §1.4.1',
      sideEffects:'Local skin irritation; minimal systemic absorption',
      monitor:'Skin reaction; review at 2–4 weeks',
      counsel:'"Rub this into the joint — it works locally with very little getting into the bloodstream, so it\'s much safer for the stomach and kidneys than tablets."',
      detail:{
        'Dose': 'Apply to the affected joint up to QDS',
        'Key teaching': 'NICE NG226: topical NSAID is FIRST-LINE for knee OA (consider for other joints). Try before any oral NSAID, especially in older or comorbid patients.'
      },
      evaluate(f){
        const r = [];
        if (f.knee || f.hand) r.push({kind:'good', text:'Knee/hand OA — first-line per NG226'});
        if (f.hip) r.push({kind:'neutral', text:'Hip is deep — topical NSAID less effective; may still trial'});
        if (f.elderly || f.pud || f.ckd || f.cvd || f.topical_pref) r.push({kind:'good', text:'Comorbid/older or systemic-averse — safest effective option'});
        const preferred = f.knee || f.hand || f.elderly || f.pud || f.ckd || f.cvd;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'First-line topical analgesia'}] };
      }
    },

    // -------- ORAL NSAID --------
    {
      id:'oral_nsaid',
      name:'Oral NSAID (+ PPI)',
      examples:'Naproxen 250–500 mg BD + PPI · Ibuprofen',
      step:'If topical insufficient',
      source:'NICE NG226 §1.4.3',
      sideEffects:'GI bleed/ulcer, renal impairment, fluid retention, raised BP, CV risk',
      monitor:'Lowest dose, shortest time; co-prescribe PPI; renal function if at risk',
      counsel:'"A stronger anti-inflammatory tablet if the gel isn\'t enough — always with a stomach-protector, at the lowest dose for the shortest time."',
      detail:{
        'Dose': 'Naproxen 250–500 mg BD (lower CV risk) with a PPI; review need regularly',
        'Interactions': 'Anticoagulants/antiplatelets, ACEi/ARB+diuretic (AKI), SSRIs/steroids (GI bleed)',
        'Key teaching': 'Use the lowest effective dose for the shortest time, always with gastroprotection. Avoid where NSAID-risk comorbidity present.'
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
        return { tier: safe ? 'acceptable' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Second step if topical NSAID insufficient, with PPI'}] };
      }
    },

    // -------- INTRA-ARTICULAR STEROID --------
    {
      id:'ia_steroid',
      name:'Intra-articular corticosteroid',
      examples:'Methylprednisolone / triamcinolone injection',
      step:'Short-term flare relief',
      source:'NICE NG226 §1.4.6',
      sideEffects:'Post-injection flare, skin/fat atrophy, transient glucose rise, small infection risk',
      monitor:'Effect is short-lived (weeks); not for repeated long-term use',
      counsel:'"An injection straight into the joint can settle a bad flare for a few weeks — useful to get you moving and into physiotherapy, but it\'s a short-term help, not a cure."',
      detail:{
        'Dose': 'Single intra-articular injection during a flare',
        'Key teaching': 'NICE NG226: consider for short-term relief of moderate–severe pain, e.g. to support exercise. Benefit is temporary.'
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
      examples:'Capsaicin 0.025% cream',
      step:'Adjunct (knee / hand)',
      source:'NICE NG226 §1.4.2',
      sideEffects:'Local burning/stinging (settles with regular use)',
      monitor:'Apply regularly; wash hands; takes 1–2 weeks',
      counsel:'"A chilli-based cream — it stings a little at first but with regular use it dampens the pain signals. Wash your hands well and keep it away from the eyes."',
      detail:{
        'Dose': 'Apply sparingly up to QDS to the affected joint',
        'Key teaching': 'NICE NG226: consider topical capsaicin for knee OA. Useful adjunct or where NSAIDs unsuitable.'
      },
      evaluate(f){
        const r = [];
        if (f.knee || f.hand) r.push({kind:'good', text:'Knee/hand OA — NICE-supported adjunct'});
        if (f.pud || f.ckd || f.cvd) r.push({kind:'good', text:'NSAID-risk patient — drug-free systemic profile'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Adjunct, especially where NSAIDs unsuitable'}] };
      }
    },

    // -------- WEAK OPIOID / PARACETAMOL --------
    {
      id:'paracetamol_opioid',
      name:'Paracetamol / weak opioid',
      examples:'Paracetamol PRN · short codeine course',
      step:'Limited role',
      source:'NICE NG226 §1.4.8',
      sideEffects:'Opioid — constipation, sedation, dependence; paracetamol well tolerated',
      monitor:'Short, infrequent use only; review',
      counsel:'"Paracetamol can take the edge off but doesn\'t do much on its own for arthritis. A stronger painkiller is only for a short spell during a bad flare."',
      detail:{
        'Dose': 'Paracetamol PRN; weak opioid only short-term for a flare',
        'Key teaching': 'NICE NG226 advises against routine paracetamol or weak opioids; only consider short-term for infrequent flares. Do NOT use strong opioids, glucosamine, or rubefacients.'
      },
      evaluate(f){
        if (f.opioid_risk) return { tier:'avoid', reasons:[{kind:'bad', text:'Opioid misuse risk — avoid opioids'}] };
        const r = [{kind:'neutral', text:'Limited role — only short-term for flares, not routine background therapy'}];
        if (f.elderly) r.push({kind:'bad', text:'Elderly — opioid falls/constipation/confusion risk'});
        return { tier:'acceptable', reasons: r };
      }
    },

    // -------- AVOID --------
    {
      id:'avoid_oa',
      name:'Glucosamine · rubefacients · strong opioids',
      examples:'Glucosamine/chondroitin · capsicum rubs · morphine',
      step:'Avoid',
      source:'NICE NG226 §1.4.9',
      sideEffects:'No meaningful benefit; opioid harms',
      monitor:'—',
      counsel:'"The glucosamine supplements and strong painkillers don\'t help arthritis enough to justify them — exercise and weight management do far more."',
      detail:{
        'Key teaching': 'NICE NG226 specifically recommends NOT offering glucosamine, chondroitin, rubefacients, or strong opioids for OA.'
      },
      evaluate(f){
        return { tier:'avoid', reasons:[{kind:'bad', text:'Not recommended for OA — no meaningful benefit / disproportionate harm'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG226 — Osteoarthritis in over 16s: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng226' },
    { label:'NICE CKS — Osteoarthritis', url:'https://cks.nice.org.uk/topics/osteoarthritis/' },
    { label:'BNF — Osteoarthritis / soft-tissue disorders', url:'https://bnf.nice.org.uk/treatment-summaries/osteoarthritis/' },
  ],
});
