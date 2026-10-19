/* ============================================
   Medication Chooser — Type 1 Diabetes (insulin)
   NICE NG17 · NICE TA943 (hybrid closed loop) · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('type-1-diabetes', {
  title: 'Type 1 diabetes — insulin regimen selection',
  subtitle: 'NICE NG17: multiple daily injection (basal–bolus) is the regimen of choice for adults; pumps and hybrid closed-loop for specific indications.',
  guideline: 'NICE NG17 · NICE TA943 · SPC',


  safety: [
    {"tone":"amber","label":"","text":"All T1DM: structured education (e.g. DAFNE), carb counting, CGM/flash offered, sick-day + DKA rules, hypo treatment plan"},
    {"tone":"amber","label":"Child / adolescent (<18)","text":"Child/adolescent — managed by paediatric diabetes MDT, HCL increasingly first-line"},
    {"tone":"amber","label":"Pregnant / planning pregnancy","text":"Pregnancy — joint specialist care; CGM offered to all; tighter targets"},
    {"tone":"red","label":"Eating-disorder / insulin-omission risk","text":"Insulin omission risk — never withhold insulin; psychological support + DKA safety-netting"}
  ],

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
        'Components': 'Basal (detemir BD first-line in NICE NG17 — Levemir (insulin detemir) is being discontinued in the UK — no new starts; switch existing users by 30 Nov 2026 (National Patient Safety Alert, Oct 2026); glargine/degludec alternatives) + rapid-acting analogue (aspart/lispro/glulisine) with meals',
        'Key teaching': 'NICE NG17: MDI basal–bolus is the regimen of choice for adults. Pair with carbohydrate counting + structured education.'
      },
      conditions: [
        {"kind":"caution","label":"Dexterity issues / cannot manage 4+ injections","text":"Dexterity issues — 4+ injections may be impractical; consider pump"},
        {"kind":"favoured","label":"New-onset adult, stable","text":"New-onset adult — MDI basal–bolus is the standard starting regimen"},
        {"kind":"favoured","label":"Shift work / irregular meals","text":"Irregular meals/shifts — basal–bolus offers the most flexibility"}
      ]
    },
    // -------- Basal insulin --------
    {
      id:'basal',
      name:'Basal insulin (detemir / glargine / degludec)',
      examples:'Detemir BD (NG17 1st-line; Levemir being discontinued ~Dec 2026) · glargine OD · degludec OD',
      step:'Basal component',
      source:'NICE NG17 §1.7.4',
      sideEffects:'Hypoglycaemia (esp. nocturnal), weight gain',
      monitor:'Fasting glucose, nocturnal hypos',
      counsel:'"This is your background insulin that works steadily through the day and night."',
      detail:{
        'Dose': 'Detemir BD first-line (NICE NG17); glargine OD if BD not tolerated/preference; degludec for problematic nocturnal hypos. Levemir (insulin detemir) is being discontinued in the UK — supply ends ~Dec 2026 — start or switch to an alternative basal (glargine/degludec) per specialist advice',
        'Key teaching': 'Degludec\'s flat, ultra-long profile reduces nocturnal hypoglycaemia and suits variable timing.'
      },
      conditions: [
        {"kind":"favoured","label":"Recurrent severe / nocturnal hypos on MDI","text":"Nocturnal hypos / variable timing — degludec's flat long profile helps"},
        {"kind":"favoured","label":"Shift work / irregular meals","text":"Nocturnal hypos / variable timing — degludec's flat long profile helps"},
        {"kind":"favoured","label":"Wants simplest possible regimen","text":"Once-daily glargine/degludec simpler than BD detemir"}
      ]
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
      conditions: [
        {"kind":"favoured","label":"Impaired hypoglycaemia awareness","text":"Disabling/recurrent hypoglycaemia on MDI — pump indicated (TA151)"},
        {"kind":"favoured","label":"Recurrent severe / nocturnal hypos on MDI","text":"Disabling/recurrent hypoglycaemia on MDI — pump indicated (TA151)"},
        {"kind":"favoured","label":"HbA1c ≥69 despite optimised MDI","text":"HbA1c ≥69 despite optimised MDI — pump indicated (TA151)"},
        {"kind":"favoured","label":"Dexterity issues / cannot manage 4+ injections","text":"Cannot manage multiple injections — pump may be more feasible"}
      ]
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
      detail:{ 'Key teaching':'TA943: HCL for adults with HbA1c ≥58 mmol/mol (7.5%) or disabling hypos despite optimised therapy, and all pregnant women / children where appropriate.' },
      conditions: [
        {"kind":"favoured","label":"Pregnant / planning pregnancy","text":"Pregnancy — HCL increasingly used; specialist led"},
        {"kind":"favoured","label":"Impaired hypoglycaemia awareness","text":"HbA1c high or disabling hypos despite optimised therapy — eligible (TA943)"},
        {"kind":"favoured","label":"Recurrent severe / nocturnal hypos on MDI","text":"HbA1c high or disabling hypos despite optimised therapy — eligible (TA943)"},
        {"kind":"favoured","label":"HbA1c ≥69 despite optimised MDI","text":"HbA1c high or disabling hypos despite optimised therapy — eligible (TA943)"},
        {"kind":"favoured","label":"Engaged with technology / wants CGM + pump","text":"Engaged with technology — well suited to HCL"}
      ]
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
      detail:{ 'Key teaching':'NICE NG17: do not routinely offer twice-daily mixed regimens to adults with T1DM. May suit very specific circumstances (e.g. dexterity, preference).' },
      conditions: [
        {"kind":"avoid","label":"Dexterity issues / cannot manage 4+ injections","text":"Simpler routine where MDI/pump truly not feasible — but flexibility lost"},
        {"kind":"avoid","label":"Wants simplest possible regimen","text":"Simpler routine where MDI/pump truly not feasible — but flexibility lost"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"Renal impairment","text":"Renal impairment — review eGFR before metformin"},
        {"kind":"favoured","label":"Overweight / high insulin requirement","text":"Overweight / high insulin requirement — metformin adjunct can help"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG17 — Type 1 diabetes in adults: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng17' },
    { label:'NICE TA943 — Hybrid closed loop systems for type 1 diabetes', url:'https://www.nice.org.uk/guidance/ta943' },
    { label:'NICE NG17 — type 1 diabetes', url:'https://www.nice.org.uk/guidance/ng17' },
    { label:'SPC — insulin products', url:'https://www.medicines.org.uk/emc/search?q=insulin' }
  ],
});
