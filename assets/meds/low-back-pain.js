/* ============================================
   Medication Chooser — Low back pain & sciatica
   NICE NG59 · BNF
   ============================================ */
MedChooser.register('low-back-pain', {
  title: 'Low back pain & sciatica — analgesia selection',
  subtitle: 'NICE NG59 analgesic options for low back pain and sciatica. Tick the patient profile; cards re-tier live.',
  guideline: 'NICE NG59 · BNF',

  factors: [
    // Presentation
    { group:'Presentation', id:'acute', label:'Acute low back pain (<6 weeks)' },
    { group:'Presentation', id:'sciatica', label:'Sciatica / radicular (neuropathic) pain', note:'Leg-dominant, dermatomal' },
    { group:'Presentation', id:'chronic', label:'Persistent / chronic (>12 weeks)' },
    { group:'Presentation', id:'spasm', label:'Prominent muscle spasm' },

    // Red flags
    { group:'Red flags', id:'cauda', label:'Cauda equina features', note:'Saddle anaesthesia · bladder/bowel · bilateral' },
    { group:'Red flags', id:'myeloma', label:'?Myeloma (older, bone pain, ↑ESR, anaemia, ↑Ca, renal)' },
    { group:'Red flags', id:'cancer_hx', label:'Cancer history / ?spinal metastasis' },
    { group:'Red flags', id:'infection', label:'?Spinal infection (fever, IVDU, immunosuppressed)' },
    { group:'Red flags', id:'fracture', label:'?Vertebral fracture (trauma, osteoporosis, steroids)' },
    { group:'Red flags', id:'inflammatory', label:'?Inflammatory (age <40, morning stiffness, alternating buttock)' },

    // Comorbidities / cautions
    { group:'Comorbidities', id:'pud', label:'Peptic ulcer / GI bleed history', note:'NSAID caution' },
    { group:'Comorbidities', id:'ckd', label:'CKD / renal impairment', note:'NSAID caution' },
    { group:'Comorbidities', id:'cvd', label:'Cardiovascular disease / heart failure', note:'NSAID caution' },
    { group:'Comorbidities', id:'asthma_nsaid', label:'NSAID-sensitive asthma' },
    { group:'Comorbidities', id:'cardiac_tca', label:'IHD / arrhythmia / long QT', note:'TCA caution' },
    { group:'Comorbidities', id:'elderly', label:'Elderly / falls risk', note:'Sedation, constipation' },
    { group:'Comorbidities', id:'preg', label:'Pregnant or breastfeeding' },

    // Current medications / risk
    { group:'Current medications', id:'anticoag', label:'On anticoagulant / antiplatelet' },
    { group:'Current medications', id:'opioid_risk', label:'Opioid dependence / misuse risk' },

    // Preference / context
    { group:'Preference / context', id:'avoid_sedation', label:'Needs to avoid sedation (driver / safety-critical)' },
    { group:'Preference / context', id:'tried_nsaid', label:'NSAID tried / ineffective / contraindicated' }
  ],

  flags: (f) => {
    const out = [];
    if (f.cauda) out.push({ tone:'red', text:'Cauda equina syndrome — EMERGENCY same-day spinal referral + urgent MRI. Do not manage as simple back pain.' });
    if (f.myeloma) out.push({ tone:'red', text:'NICE NG12 — ?myeloma: FBC, ESR/plasma viscosity, calcium, renal + serum protein electrophoresis / Bence-Jones protein (urine). Very urgent if hypercalcaemia/renal failure.' });
    if (f.cancer_hx) out.push({ tone:'red', text:'Cancer history with new back pain — consider spinal metastasis / MSCC; urgent imaging + MSCC pathway if neurology' });
    if (f.infection) out.push({ tone:'amber', text:'?Spinal infection (discitis/abscess) — inflammatory markers, blood cultures, urgent imaging/referral' });
    if (f.fracture) out.push({ tone:'amber', text:'?Vertebral fragility fracture — imaging; assess osteoporosis (FRAX, DXA)' });
    if (f.inflammatory) out.push({ tone:'amber', text:'?Axial spondyloarthritis — inflammatory back pain criteria; consider rheumatology referral (see axSpA pathway)' });
    return out;
  },

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
      evaluate(f){
        if (f.pud) return { tier:'avoid', reasons:[{kind:'bad', text:'Peptic ulcer / GI bleed history — NSAID contraindicated (or only with strong gastroprotection + specialist judgement)'}] };
        if (f.ckd) return { tier:'avoid', reasons:[{kind:'bad', text:'Renal impairment — NSAID risks further AKI'}] };
        if (f.asthma_nsaid) return { tier:'avoid', reasons:[{kind:'bad', text:'NSAID-sensitive asthma — risk of bronchospasm'}] };
        const r = [];
        if (f.cvd) r.push({kind:'bad', text:'Cardiovascular disease / HF — NSAID raises CV risk; avoid or use lowest dose briefly'});
        if (f.anticoag) r.push({kind:'bad', text:'On anticoagulant/antiplatelet — increased bleeding; avoid if possible'});
        if (f.preg) r.push({kind:'bad', text:'Pregnancy — avoid (esp. 3rd trimester)'});
        if (f.elderly) r.push({kind:'neutral', text:'Elderly — higher GI/renal risk; PPI cover, short course'});
        if (f.acute && !f.cvd && !f.elderly) r.push({kind:'good', text:'Acute low back pain — NSAID is the analgesic NG59 recommends considering'});
        const safe = !f.cvd && !f.anticoag && !f.preg;
        return { tier: safe ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'good', text:'NG59: consider for low back pain'}] };
      }
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
      evaluate(f){
        if (f.chronic && !f.acute) return { tier:'avoid', reasons:[{kind:'bad', text:'Chronic low back pain — NICE NG59: do not offer opioids (poor long-term benefit, harm)'}] };
        if (f.opioid_risk) return { tier:'avoid', reasons:[{kind:'bad', text:'Opioid misuse risk — avoid'}] };
        const r = [];
        if (f.tried_nsaid || f.pud || f.ckd || f.asthma_nsaid) r.push({kind:'good', text:'NSAID unsuitable/ineffective — short acute opioid course is the NG59 fallback'});
        if (f.elderly) r.push({kind:'bad', text:'Elderly — falls, constipation, confusion; use cautiously'});
        if (f.avoid_sedation) r.push({kind:'bad', text:'Safety-critical role — sedation risk'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Short-term acute use when NSAID unsuitable'}] };
      }
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
        'Dose': 'N/A for low back pain — dose per BNF only for a separate indication (e.g. co-existing depression)',
        'Interactions': 'TCA — QT drugs, other sedatives; duloxetine — serotonergic drugs, hepatic',
        'Key teaching': 'NICE NG59: do not offer SSRIs, SNRIs or tricyclic antidepressants for managing low back pain. For sciatica NG59 makes no antidepressant recommendation (research recommendation only) — any trial is a specialist or pain-service decision. NICE CG173 excludes sciatica, which is covered by NG59. Treat co-existing depression in its own right.'
      },
      evaluate(f){
        const r = [{kind:'bad', text:'NICE NG59 — do not offer SSRIs, SNRIs or TCAs for low back pain'}];
        if (f.sciatica) r.push({kind:'neutral', text:'Sciatica — NG59 makes no antidepressant recommendation; specialist / pain-service decision only'});
        if (f.cardiac_tca) r.push({kind:'bad', text:'IHD/arrhythmia/long QT — TCA caution'});
        return { tier:'avoid', reasons: r };
      }
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
      evaluate(f){
        if (f.sciatica) return { tier:'avoid', reasons:[{kind:'bad', text:'NICE NG59 — do not offer gabapentinoids for sciatica (no benefit, dependence risk)'}] };
        return { tier:'avoid', reasons:[{kind:'bad', text:'NICE NG59 — do not offer gabapentinoids for low back pain'}] };
      }
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
      evaluate(f){
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Only as a combination adjunct — not effective as monotherapy for low back pain'}] };
      }
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
      evaluate(f){
        const r = [{kind:'bad', text:'Not recommended for low back pain / sciatica — poor evidence, dependence and harm'}];
        if (f.chronic) r.push({kind:'bad', text:'Chronic pain — particularly avoid escalation to strong opioids'});
        return { tier:'avoid', reasons: r };
      }
    }
  ],

  sources: [
    { label:'NICE NG59 — Low back pain and sciatica in over 16s', url:'https://www.nice.org.uk/guidance/ng59' },
    { label:'NICE CG173 — Neuropathic pain in adults (excludes sciatica)', url:'https://www.nice.org.uk/guidance/cg173' },
    { label:'NICE NG12 — Suspected cancer: recognition and referral (updated April 2026)', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'BNF — Analgesics', url:'https://bnf.nice.org.uk/treatment-summaries/analgesics/' }
  ],
});
