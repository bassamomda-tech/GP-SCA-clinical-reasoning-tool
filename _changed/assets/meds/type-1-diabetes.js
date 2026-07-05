/* ============================================
   Medication Chooser — Type 1 Diabetes (insulin)
   NICE NG17 · NICE TA943 (hybrid closed loop) · BNF
   ============================================ */
MedChooser.register('type-1-diabetes', {
  title: 'Type 1 diabetes — insulin regimen selection',
  subtitle: 'NICE NG17: multiple daily injection (basal–bolus) is the regimen of choice for adults; pumps and hybrid closed-loop for specific indications. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG17 · NICE TA943 · BNF',

  factors: [
    // Demographics
    { group:'Demographics', id:'newadult', label:'New-onset adult, stable' },
    { group:'Demographics', id:'cyp', label:'Child / adolescent (<18)', note:'Paediatric diabetes team' },
    { group:'Demographics', id:'preg', label:'Pregnant / planning pregnancy' },
    { group:'Demographics', id:'elderly', label:'Frail / elderly' },

    // Glycaemic pattern / safety
    { group:'Glycaemic pattern', id:'hypo_unaware', label:'Impaired hypoglycaemia awareness' },
    { group:'Glycaemic pattern', id:'severe_hypos', label:'Recurrent severe / nocturnal hypos on MDI' },
    { group:'Glycaemic pattern', id:'hba1c_high', label:'HbA1c ≥69 despite optimised MDI' },
    { group:'Glycaemic pattern', id:'dawn', label:'Marked dawn phenomenon / glycaemic variability' },
    { group:'Glycaemic pattern', id:'shift', label:'Shift work / irregular meals' },

    // Comorbidities / context
    { group:'Comorbidities / context', id:'obese', label:'Overweight / high insulin requirement', note:'Metformin adjunct may help' },
    { group:'Comorbidities / context', id:'ed_risk', label:'Eating-disorder / insulin-omission risk' },
    { group:'Comorbidities / context', id:'ckd', label:'Renal impairment' },

    // Practical / preference
    { group:'Practical / preference', id:'dexterity', label:'Dexterity issues / cannot manage 4+ injections' },
    { group:'Practical / preference', id:'needle_phobia', label:'Needle phobia / wants fewer injections' },
    { group:'Practical / preference', id:'tech_engaged', label:'Engaged with technology / wants CGM + pump' },
    { group:'Practical / preference', id:'wants_simple', label:'Wants simplest possible regimen' },
  ],

  flags: (f) => {
    const out = [];
    out.push({ tone:'amber', text:'All T1DM: structured education (e.g. DAFNE), carb counting, CGM/flash offered, sick-day + DKA rules, hypo treatment plan' });
    if (f.preg) out.push({ tone:'amber', text:'Pregnancy — joint specialist care; CGM offered to all; tighter targets' });
    if (f.ed_risk) out.push({ tone:'red', text:'Insulin omission risk — never withhold insulin; psychological support + DKA safety-netting' });
    if (f.cyp) out.push({ tone:'amber', text:'Child/adolescent — managed by paediatric diabetes MDT, HCL increasingly first-line' });
    return out;
  },

  drugs: [
    // -------- MDI basal-bolus --------
    {
      id:'mdi',
      name:'Multiple daily injections (basal–bolus)',
      examples:'Twice-daily basal + rapid-acting analogue with meals',
      step:'Regimen of choice',
      source:'NICE NG17 §1.7 (MDI for all adults)',
      sideEffects:'Hypoglycaemia, weight gain, injection-site lipohypertrophy',
      monitor:'HbA1c, glucose/CGM time-in-range, injection sites, hypo frequency',
      counsel:'"You\'ll take a background insulin to cover the day and a quick one with meals — this flexible approach lets you match insulin to what you eat."',
      detail:{
        'Components': 'Basal (detemir BD first-line; glargine/degludec alternatives) + rapid-acting analogue (aspart/lispro/glulisine) with meals',
        'Key teaching': 'NICE NG17: MDI basal–bolus is the regimen of choice for adults. Pair with carbohydrate counting + structured education.'
      },
      evaluate(f){
        const r = [];
        if (f.newadult) r.push({kind:'good', text:'New-onset adult — MDI basal–bolus is the standard starting regimen'});
        if (f.shift) r.push({kind:'good', text:'Irregular meals/shifts — basal–bolus offers the most flexibility'});
        if (f.dexterity) r.push({kind:'bad', text:'Dexterity issues — 4+ injections may be impractical; consider pump'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Regimen of choice for adults with T1DM'}] };
      }
    },
    // -------- Basal insulin --------
    {
      id:'basal',
      name:'Basal insulin (detemir / glargine / degludec)',
      examples:'Detemir BD (1st-line) · glargine OD · degludec OD',
      step:'Basal component',
      source:'NICE NG17 §1.7.4',
      sideEffects:'Hypoglycaemia (esp. nocturnal), weight gain',
      monitor:'Fasting glucose, nocturnal hypos',
      counsel:'"This is your background insulin that works steadily through the day and night."',
      detail:{
        'Dose': 'Detemir BD first-line; glargine OD if BD not tolerated/preference; degludec for problematic nocturnal hypos',
        'Key teaching': 'Degludec\'s flat, ultra-long profile reduces nocturnal hypoglycaemia and suits variable timing.'
      },
      evaluate(f){
        const r = [];
        if (f.severe_hypos || f.shift) r.push({kind:'good', text:'Nocturnal hypos / variable timing — degludec\'s flat long profile helps'});
        if (f.wants_simple) r.push({kind:'good', text:'Once-daily glargine/degludec simpler than BD detemir'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Basal arm of MDI; detemir BD is NICE first-line'}] };
      }
    },
    // -------- Rapid-acting --------
    {
      id:'rapid',
      name:'Rapid-acting analogue (mealtime)',
      examples:'Aspart · Lispro · Glulisine (or faster-aspart)',
      step:'Bolus component',
      source:'NICE NG17 §1.7.10',
      sideEffects:'Hypoglycaemia if dose/carb mismatch',
      monitor:'Post-prandial glucose, carb-counting accuracy',
      counsel:'"Take this just before meals — the dose depends on the carbohydrate you\'re about to eat."',
      detail:{ 'Key teaching':'Inject before meals (not after). Avoid routine rapid-acting after eating except specific situations.' },
      evaluate(f){
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Mealtime arm of MDI; dose by carbohydrate counting'}] };
      }
    },
    // -------- CSII pump --------
    {
      id:'pump',
      name:'Insulin pump (CSII)',
      examples:'Continuous subcutaneous insulin infusion',
      step:'Specific indications',
      source:'NICE NG17 · NICE TA151',
      sideEffects:'Site infection, DKA if delivery interrupted, cost/burden',
      monitor:'Specialist pump clinic; rapid DKA if cannula fails',
      counsel:'"A small device delivering insulin continuously — it can smooth out control and reduce hypos, but it needs commitment and training."',
      detail:{ 'Key teaching':'TA151: offer CSII if disabling hypoglycaemia on MDI, OR HbA1c ≥69 mmol/mol despite optimised MDI.' },
      evaluate(f){
        const r = [];
        if (f.severe_hypos || f.hypo_unaware) r.push({kind:'good', text:'Disabling/recurrent hypoglycaemia on MDI — pump indicated (TA151)'});
        if (f.hba1c_high) r.push({kind:'good', text:'HbA1c ≥69 despite optimised MDI — pump indicated (TA151)'});
        if (f.dexterity) r.push({kind:'good', text:'Cannot manage multiple injections — pump may be more feasible'});
        const indicated = f.severe_hypos || f.hypo_unaware || f.hba1c_high;
        if (indicated) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'For disabling hypos or HbA1c ≥69 despite optimised MDI'}] };
      }
    },
    // -------- Hybrid closed loop --------
    {
      id:'hcl',
      name:'Hybrid closed-loop (automated insulin delivery)',
      examples:'Pump + CGM with control algorithm',
      step:'Escalation (TA943)',
      source:'NICE TA943 (2023)',
      sideEffects:'As pump + CGM; requires engagement with technology',
      monitor:'Specialist HCL service',
      counsel:'"The pump and a glucose sensor talk to each other and adjust insulin automatically — the closest thing to an artificial pancreas."',
      detail:{ 'Key teaching':'TA943: HCL for adults with HbA1c ≥58 (≥8%) or disabling hypos despite optimised therapy, and all pregnant women / children where appropriate.' },
      evaluate(f){
        const r = [];
        if (f.tech_engaged) r.push({kind:'good', text:'Engaged with technology — well suited to HCL'});
        if (f.hba1c_high || f.severe_hypos || f.hypo_unaware) r.push({kind:'good', text:'HbA1c high or disabling hypos despite optimised therapy — eligible (TA943)'});
        if (f.preg) r.push({kind:'good', text:'Pregnancy — HCL increasingly used; specialist led'});
        const indicated = f.hba1c_high || f.severe_hypos || f.hypo_unaware || f.tech_engaged;
        return { tier: indicated ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Escalation for eligible patients per TA943'}] };
      }
    },
    // -------- Mixed/biphasic --------
    {
      id:'mixed',
      name:'Twice-daily mixed (biphasic) insulin',
      examples:'Pre-mixed analogue BD',
      step:'Not first-line',
      source:'NICE NG17',
      sideEffects:'Less flexibility, hypo risk with fixed ratios',
      monitor:'Glucose; rigid meal timing required',
      counsel:'"A simpler two-injection routine, but it ties you to fixed meal times and doses — not usually the best fit for type 1."',
      detail:{ 'Key teaching':'NICE: do not routinely offer twice-daily mixed regimens to adults with T1DM. May suit very specific circumstances (e.g. dexterity, preference).' },
      evaluate(f){
        const r = [];
        if (f.wants_simple || f.dexterity) r.push({kind:'neutral', text:'Simpler routine where MDI/pump truly not feasible — but flexibility lost'});
        return { tier:'avoid', reasons: r.length ? r : [{kind:'bad', text:'Not recommended first-line for adults with T1DM'}] };
      }
    },
    // -------- Metformin adjunct --------
    {
      id:'metformin',
      name:'Metformin (adjunct)',
      examples:'Metformin alongside insulin',
      step:'Selective adjunct',
      source:'NICE NG17 §1.13',
      sideEffects:'GI upset; lactic acidosis risk in renal impairment',
      monitor:'Renal function; weight, insulin dose',
      counsel:'"An extra tablet that can help if you\'re carrying weight and using a lot of insulin — it isn\'t a replacement for insulin."',
      detail:{ 'Key teaching':'Consider adding metformin if BMI ≥25 (≥23 if South Asian) to improve glycaemic control while limiting insulin dose.' },
      evaluate(f){
        if (f.ckd) return { tier:'avoid', reasons:[{kind:'bad', text:'Renal impairment — review eGFR before metformin'}] };
        const r = [];
        if (f.obese) { r.push({kind:'good', text:'Overweight / high insulin requirement — metformin adjunct can help'}); return { tier:'acceptable', reasons:r }; }
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Adjunct only when BMI raised; never replaces insulin'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG17 — Type 1 diabetes in adults: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng17' },
    { label:'NICE TA943 — Hybrid closed loop systems for type 1 diabetes', url:'https://www.nice.org.uk/guidance/ta943' },
    { label:'NICE CKS — Diabetes - type 1', url:'https://cks.nice.org.uk/topics/diabetes-type-1/' },
    { label:'BNF — Insulin', url:'https://bnf.nice.org.uk/drugs/insulin/' },
  ],
});
