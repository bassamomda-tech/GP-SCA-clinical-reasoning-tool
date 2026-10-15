/* ============================================
   Medication Chooser — Type 2 Diabetes
   NICE NG28 (updated February 2026) · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('type-2-diabetes', {
  title: 'Type 2 Diabetes — glucose-lowering therapy',
  subtitle: 'NICE NG28 (Feb 2026): MR metformin PLUS an SGLT2 inhibitor as dual first-line therapy for the majority \u2014 even with no comorbidity \u2014 then branch by phenotype (ASCVD, HF, CKD, obesity, early-onset, frailty).',
  guideline: 'NICE NG28 · SPC',


  safety: [
    {"tone":"red","label":"Pregnant or planning pregnancy","text":"Pregnancy — metformin ± insulin only; stop all others"},
    {"tone":"amber","label":"Heart failure (HFrEF/HFpEF)","text":"HFrEF/HFpEF — pioglitazone contraindicated; favour SGLT2i"},
    {"tone":"amber","label":"eGFR <30 mL/min","text":"eGFR <30 — avoid metformin and most SGLT2i; specialist input"},
    {"tone":"red","label":"DKA risk / ill / fasting","text":"DKA risk / acute illness — hold SGLT2i (sick-day rules)"}
  ],

  drugs: [
    // -------- METFORMIN --------
    {
      id:'metformin',
      name:'Metformin',
      examples:'Modified-release (MR) preferred: 500 mg OD with food → titrate to the maximum tolerated dose (standard-release only if tablets must be crushed or a liquid is needed)',
      step:'First-line (dual, with an SGLT2i, for most)',
      source:'NICE NG28 (updated 18 Feb 2026) — Initial medicines',
      sideEffects:'GI upset (use MR or titrate slowly), B12 deficiency on long-term use, rare lactic acidosis',
      monitor:'Annual U&E + B12 (long-term). Sick-day rules — hold if dehydrated/AKI risk.',
      counsel:'"Start with one a week, build up slowly with food — most tummy upset settles. If you\'re ever badly ill, vomiting, or not eating, hold the tablets for a day and call us."',
      detail:{
        'Dose': 'MR: 500 mg OD with evening meal, increased gradually to the maximum tolerated dose (MR max 2 g OD, SPC). Standard-release (500 mg OD → 500 mg BD → 500 mg TDS → 1 g BD) only if tablets must be crushed or a liquid is needed (NG28 Feb 2026)',
        'Interactions': 'Iodinated contrast (hold), alcohol excess (lactic acidosis)',
        'Key teaching': 'Cardiovascular-neutral, weight-neutral, no hypos. Backbone of T2DM therapy. Since NG28 (18 Feb 2026) it is paired with an SGLT2 inhibitor for most adults from diagnosis: the SGLT2i is added once the maximum tolerated metformin MR dose is reached.'
      },
      conditions: [
        {"kind":"avoid","label":"eGFR <30 mL/min","text":"eGFR <30 — contraindicated (lactic acidosis risk)"},
        {"kind":"caution","label":"IBS / chronic GI symptoms","text":"IBS / chronic GI — use MR form, titrate slowly"},
        {"kind":"favoured","label":"Pregnant or planning pregnancy","text":"Pregnancy — metformin is safe and preferred"},
        {"kind":"favoured","label":"BMI ≥30","text":"Weight-neutral or mild weight loss"}
      ]
    },

    // -------- SGLT2i --------
    {
      id:'sglt2i',
      name:'SGLT2 inhibitor',
      examples:'Dapagliflozin 10 mg OD · Empagliflozin 10–25 mg OD',
      step:'First-line with MR metformin for most (dual therapy); alone if metformin is contraindicated or not tolerated',
      source:'NICE NG28 (updated 18 Feb 2026) — Initial medicines',
      sideEffects:'Genital thrush + UTI, mild volume depletion, rare euglycaemic DKA',
      monitor:'eGFR at start; sick-day rules; foot care (Fournier\'s rare). Hold if acutely unwell.',
      counsel:'"These tablets protect your heart and kidneys as well as lowering sugar. Stop them if you\'re ill, fasting, or about to have surgery — call us if unsure."',
      detail:{
        'Dose': 'Dapagliflozin 10 mg OD or empagliflozin 10–25 mg OD',
        'Interactions': 'Loop diuretics (volume depletion), insulin/sulfonylurea (hypo if combined)',
        'Key teaching': 'Sick-day rules: hold during illness, surgery, prolonged fasting — euglycaemic DKA risk. Before starting, check DKA risk (previous DKA, dehydration, ketogenic diet) and do not start during intercurrent illness. Take care in frailty (volume depletion, hypotension) (NG28 Feb 2026).'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant or planning pregnancy","text":"Pregnancy — contraindicated"},
        {"kind":"avoid","label":"eGFR <30 mL/min","text":"eGFR <30 — most SGLT2i not licensed (dapa allowed in CKD specialist-led)"},
        {"kind":"avoid","label":"DKA risk / ill / fasting","text":"DKA risk / acutely unwell — hold; risk of euglycaemic DKA"},
        {"kind":"caution","label":"Frail / elderly","text":"Frailty — take care: volume depletion / hypotension risk; a DPP-4i may suit better (NG28 Feb 2026)"},
        {"kind":"caution","label":"Recurrent genital/UTI infections","text":"Recurrent thrush/UTI — significant SGLT2i adverse effect"},
        {"kind":"favoured","label":"Established atherosclerotic CVD","text":"Established CVD — cardiovascular event reduction (independent of HbA1c)"},
        {"kind":"favoured","label":"QRISK ≥10% (no CVD yet)","text":"QRISK ≥10% — dual first-line with metformin per NG28 (Feb 2026; applies with or without CV risk)"},
        {"kind":"favoured","label":"Heart failure (HFrEF/HFpEF)","text":"HF (any EF) — hospitalisation + mortality benefit; dapa/empa first-line"},
        {"kind":"favoured","label":"CKD eGFR 25–60 or ACR ≥3","text":"CKD with ACR ≥3 — slows progression (DAPA-CKD, EMPA-KIDNEY)"},
        {"kind":"favoured","label":"BMI ≥30","text":"Weight loss 2–3 kg average"},
        {"kind":"favoured","label":"Wants to lose weight","text":"Weight loss 2–3 kg average"}
      ]
    },

    // -------- GLP-1 RA --------
    {
      id:'glp1',
      name:'GLP-1 receptor agonist',
      examples:'Semaglutide SC weekly · Dulaglutide SC weekly · Liraglutide SC daily · (tirzepatide, dual GIP/GLP-1, SC weekly)',
      step:'First-line in established ASCVD (triple therapy); consider early in early-onset T2DM; otherwise a further add-on',
      source:'NICE NG28 (updated 18 Feb 2026): ASCVD → s/c semaglutide up to 1 mg weekly with MR metformin + SGLT2i; early-onset (diagnosed <40) → consider a GLP-1 RA or tirzepatide; weight-related criteria for other use (BMI ≥35 + comorbidity, or BMI <35 with insulin-related occupation issues)',
      sideEffects:'Nausea, vomiting, early satiety, rare pancreatitis, injection site reactions',
      monitor:'When prescribed for glucose / weight (not for cardiovascular benefit): continue beyond 6 months only if HbA1c ↓ ≥11 mmol/mol AND weight ↓ ≥3% (NICE NG28 continuation criteria); stop if it is not helping reach targets or BMI falls below 18.5. Do not stop semaglutide given for ASCVD benefit on glycaemic grounds alone.',
      counsel:'"This is a weekly injection that lowers sugar, protects the heart, and reduces appetite. Nausea is common in the first weeks — eat smaller meals."',
      detail:{
        'Dose': 'Semaglutide once-weekly injection (Ozempic regimen): 0.25 mg weekly for 4 weeks, then 0.5 mg weekly, up to 1 mg weekly if needed (NG28 recommends up to 1 mg; the SPC also allows 2 mg). Not interchangeable with Wegovy or oral semaglutide. Dulaglutide 0.75 → 1.5 mg weekly',
        'Interactions': 'Insulin / sulfonylurea — significant hypo risk if combined',
        'Key teaching': 'NICE NG28 (Feb 2026): established ASCVD → s/c semaglutide first-line alongside MR metformin + SGLT2i, for cardiovascular, renal and glycaemic benefit; early-onset T2DM (diagnosed <40) → consider a GLP-1 RA or tirzepatide early. Never combine with a DPP-4i. For glycaemic / weight use otherwise: BMI ≥35 (≥32.5 if South-Asian etc.) + psychological/medical comorbidity OR BMI <35 with occupational/medical reason against insulin.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant or planning pregnancy","text":"Pregnancy — contraindicated"},
        {"kind":"avoid","label":"Past pancreatitis","text":"Past pancreatitis — relative contraindication"},
        {"kind":"caution","label":"IBS / chronic GI symptoms","text":"Chronic GI / IBS — nausea + early satiety may not be tolerated"},
        {"kind":"caution","label":"Strongly prefers oral therapy","text":"Patient prefers oral — most GLP-1s injectable (oral semaglutide is an option)"},
        {"kind":"favoured","label":"Established atherosclerotic CVD","text":"Established ASCVD — s/c semaglutide first-line with MR metformin + SGLT2i (NG28 Feb 2026); proven CV benefit"},
        {"kind":"favoured","label":"BMI ≥30","text":"BMI ≥30 — significant weight loss (5–15%)"},
        {"kind":"favoured","label":"Wants to lose weight","text":"Weight loss is a treatment goal"}
      ]
    },

    // -------- DPP4i --------
    {
      id:'dpp4',
      name:'DPP-4 inhibitor',
      examples:'Sitagliptin 100 mg OD · Linagliptin 5 mg OD',
      step:'Further add-on (prioritise a GLP-1 RA / tirzepatide where recommended); alternative to an SGLT2i when frailty makes one unsafe',
      source:'NICE NG28 (updated 18 Feb 2026)',
      sideEffects:'Generally well-tolerated, rare pancreatitis, rare arthralgia',
      monitor:'Dose-reduce in CKD (except linagliptin)',
      counsel:'"A gentle tablet — once a day, weight-neutral, and unlikely to cause low sugars."',
      detail:{
        'Dose': 'Sitagliptin 100 mg OD (50 mg if eGFR 30–45, 25 mg if eGFR <30); linagliptin 5 mg OD (no dose adjust)',
        'Interactions': 'Few. Caution with insulin/sulfonylurea (hypo).',
        'Key teaching': 'Stop if a GLP-1 RA or tirzepatide is started — do not combine a DPP-4i with either (NG28). It can be used alongside metformin and an SGLT2i.'
      },
      conditions: [
        {"kind":"avoid","label":"Heart failure (HFrEF/HFpEF)","text":"Saxagliptin associated with HF hospitalisation; avoid in HF (others neutral)"},
        {"kind":"avoid","label":"Past pancreatitis","text":"Past pancreatitis — relative contraindication"},
        {"kind":"caution","label":"BMI ≥30","text":"Weight-neutral — no weight loss benefit"},
        {"kind":"favoured","label":"Frail / elderly","text":"Frail elderly — well tolerated, low hypo risk"},
        {"kind":"favoured","label":"eGFR <30 mL/min","text":"Linagliptin needs no dose adjust in CKD"},
        {"kind":"favoured","label":"Strongly prefers oral therapy","text":"Oral, once-daily"},
        {"kind":"favoured","label":"Hypo-averse occupation/lifestyle","text":"Hypo-averse — very low hypo risk"}
      ]
    },

    // -------- SULFONYLUREA --------
    {
      id:'su',
      name:'Sulfonylurea',
      examples:'Gliclazide 40–80 mg OD → 160 mg BD',
      step:'Further add-on (after dual first-line)',
      source:'NICE NG28 (updated Feb 2026) · SPC',
      sideEffects:'Hypoglycaemia (esp. elderly + skipped meals), weight gain ~2 kg',
      monitor:'Educate on hypos. DVLA: must inform if Group 2 driver.',
      counsel:'"These work quickly to lower sugar — but they can cause low sugars (hypo). I\'ll show you the warning signs and what to do. Don\'t skip meals."',
      detail:{
        'Dose': 'Gliclazide 40 mg OD with breakfast, titrate to 160 mg BD',
        'Interactions': 'β-blockers mask hypo. NSAIDs, fluconazole potentiate.',
        'Key teaching': 'Cheap, effective rescue when HbA1c high. Avoid first-line in drivers, frail elderly, irregular meal patterns.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant or planning pregnancy","text":"Pregnancy — switch to insulin"},
        {"kind":"avoid","label":"Group 2 driver (HGV/PCV)","text":"Group 2 driver / hypo-averse — significant hypoglycaemia risk"},
        {"kind":"avoid","label":"Hypo-averse occupation/lifestyle","text":"Group 2 driver / hypo-averse — significant hypoglycaemia risk"},
        {"kind":"caution","label":"Frail / elderly","text":"Frail elderly — hypos can precipitate falls and admission"},
        {"kind":"caution","label":"BMI ≥30","text":"~2 kg weight gain — wrong direction for weight-loss goals"},
        {"kind":"caution","label":"Wants to lose weight","text":"~2 kg weight gain — wrong direction for weight-loss goals"},
        {"kind":"favoured","label":"HbA1c ≥75 mmol/mol","text":"HbA1c ≥75 — rapid glycaemic response when needed"},
        {"kind":"favoured","label":"Cost-sensitive","text":"Lowest-cost add-on"}
      ]
    },

    // -------- PIOGLITAZONE --------
    {
      id:'pio',
      name:'Pioglitazone',
      examples:'15 → 45 mg OD',
      step:'Further add-on',
      source:'NICE NG28 (updated Feb 2026) · SPC',
      sideEffects:'Weight gain, fluid retention → HF, fracture risk, possible bladder cancer signal',
      monitor:'Annual LFTs. Stop if ALT >3× normal. Watch for oedema.',
      counsel:'"This works well but can cause fluid retention. Tell me about any swelling, breathlessness, or unusual bruising."',
      detail:{
        'Dose': '15–30 mg OD → 45 mg',
        'Interactions': 'Insulin (oedema, HF risk). Avoid combination.',
        'Key teaching': 'Useful in severe insulin resistance / fatty liver. Modern guidelines deprioritise due to safety.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant or planning pregnancy","text":"Pregnancy — switch to insulin"},
        {"kind":"avoid","label":"Heart failure (HFrEF/HFpEF)","text":"Heart failure — fluid retention contraindicates"},
        {"kind":"avoid","label":"Bladder cancer (current/history)","text":"Bladder cancer history — contraindicated"},
        {"kind":"avoid","label":"Osteoporosis / high fracture risk","text":"High fracture risk — pioglitazone increases fractures"},
        {"kind":"caution","label":"BMI ≥30","text":"Weight gain"},
        {"kind":"caution","label":"Significant hepatic impairment","text":"Hepatic impairment — monitor LFTs closely"}
      ]
    },

    // -------- INSULIN --------
    {
      id:'insulin',
      name:'Insulin',
      examples:'Isophane (NPH) OD/BD · Detemir (Levemir being discontinued in the UK, supply ends ~Dec 2026)/Glargine · Mixed biphasic',
      step:'Specialist / late stage / pregnancy',
      source:'NICE NG28 (updated Feb 2026) · SPC',
      sideEffects:'Hypoglycaemia, weight gain ~4 kg, injection burden',
      monitor:'Capillary glucose, hypo recognition, sick-day rules. DVLA notification.',
      counsel:'"This will make the biggest difference to your sugars — and yes, it\'s an injection, but with a very fine needle most people don\'t feel it. I\'ll arrange specialist nurse support."',
      detail:{
        'Dose': 'Start isophane (NPH) 10 units nocte → titrate by FBG',
        'Interactions': 'β-blockers mask hypos; alcohol; steroids raise needs',
        'Key teaching': 'In T2DM: usually escalate to insulin only after multiple oral/injectable agents fail (except pregnancy or symptomatic hyperglycaemia).'
      },
      conditions: [
        {"kind":"caution","label":"Frail / elderly","text":"Frail elderly — hypo + falls risk"},
        {"kind":"caution","label":"Group 2 driver (HGV/PCV)","text":"Hypo-averse / Group 2 driver — needs careful titration"},
        {"kind":"caution","label":"Hypo-averse occupation/lifestyle","text":"Hypo-averse / Group 2 driver — needs careful titration"},
        {"kind":"favoured","label":"Pregnant or planning pregnancy","text":"Pregnancy — insulin (± metformin) is the standard"},
        {"kind":"favoured","label":"HbA1c ≥75 mmol/mol","text":"HbA1c ≥75 with symptoms — insulin can rescue quickly"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG28 — Type 2 diabetes in adults: management', url:'https://www.nice.org.uk/guidance/ng28' },
    { label:'NICE NG28 — type 2 diabetes', url:'https://www.nice.org.uk/guidance/ng28' },
    { label:'BNF — Diabetes treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/type-2-diabetes/' },
    { label:'NICE NG3 — Diabetes in pregnancy', url:'https://www.nice.org.uk/guidance/ng3' }
  ],
});
