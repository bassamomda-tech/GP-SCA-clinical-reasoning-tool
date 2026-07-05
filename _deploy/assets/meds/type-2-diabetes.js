/* ============================================
   Medication Chooser — Type 2 Diabetes
   NICE NG28 (2022, updated 2024) · CKS T2DM · BNF
   ============================================ */
MedChooser.register('type-2-diabetes', {
  title: 'Type 2 Diabetes — glucose-lowering therapy',
  subtitle: 'First-line metformin plus tailored add-ons. NICE NG28 prioritises SGLT2i for cardiovascular and renal risk regardless of HbA1c.',
  guideline: 'NICE NG28 · CKS Type 2 diabetes · BNF',

  factors: [
    // Demographics
    { group:'Demographics', id:'preg',    label:'Pregnant or planning pregnancy', note:'Insulin / metformin only' },
    { group:'Demographics', id:'frail',   label:'Frail / elderly', note:'Relax target to ~58 mmol/mol' },
    { group:'Demographics', id:'driver',  label:'Group 2 driver (HGV/PCV)', note:'Avoid hypos' },

    // Cardio-renal risk — the NG28 pivot
    { group:'Cardio-renal risk', id:'cvd',  label:'Established atherosclerotic CVD', note:'SGLT2i / GLP-1 RA strongly preferred' },
    { group:'Cardio-renal risk', id:'qrisk', label:'QRISK ≥10% (no CVD yet)', note:'Add SGLT2i with metformin' },
    { group:'Cardio-renal risk', id:'hf',   label:'Heart failure (HFrEF/HFpEF)', note:'SGLT2i first-line add-on' },
    { group:'Cardio-renal risk', id:'ckd',  label:'CKD eGFR 25–60 or ACR ≥3', note:'SGLT2i renoprotective' },

    // Bloods
    { group:'Bloods', id:'hba1c_high', label:'HbA1c ≥75 mmol/mol', note:'May need dual therapy from start' },
    { group:'Bloods', id:'egfr_low',   label:'eGFR <30 mL/min', note:'Avoid metformin, SGLT2i, GLP-1 caution' },
    { group:'Bloods', id:'ketone_risk',label:'DKA risk / ill / fasting', note:'Hold SGLT2i (sick-day rules)' },

    // Comorbidities
    { group:'Comorbidities', id:'obese',  label:'BMI ≥30', note:'Weight-loss benefit drives choice' },
    { group:'Comorbidities', id:'hepatic',label:'Significant hepatic impairment' },
    { group:'Comorbidities', id:'pancreatitis', label:'Past pancreatitis' },
    { group:'Comorbidities', id:'gi',     label:'IBS / chronic GI symptoms' },
    { group:'Comorbidities', id:'urti',   label:'Recurrent genital/UTI infections' },
    { group:'Comorbidities', id:'bladder',label:'Bladder cancer (current/history)' },
    { group:'Comorbidities', id:'fractures',label:'Osteoporosis / high fracture risk' },

    // Patient preference / practical
    { group:'Preference / practical', id:'oral', label:'Strongly prefers oral therapy' },
    { group:'Preference / practical', id:'weight_loss', label:'Wants to lose weight' },
    { group:'Preference / practical', id:'avoid_hypo', label:'Hypo-averse occupation/lifestyle' },
    { group:'Preference / practical', id:'cost', label:'Cost-sensitive' },
  ],

  flags: (f) => {
    const out = [];
    if (f.preg) out.push({ tone:'red', text:'Pregnancy — metformin ± insulin only; stop all others' });
    if (f.ketone_risk) out.push({ tone:'red', text:'DKA risk / acute illness — hold SGLT2i (sick-day rules)' });
    if (f.egfr_low) out.push({ tone:'amber', text:'eGFR <30 — avoid metformin and most SGLT2i; specialist input' });
    if (f.hf) out.push({ tone:'amber', text:'HFrEF/HFpEF — pioglitazone contraindicated; favour SGLT2i' });
    return out;
  },

  drugs: [
    // -------- METFORMIN --------
    {
      id:'metformin',
      name:'Metformin',
      examples:'Standard release 500 mg OD → 1g BD (or MR if GI side effects)',
      step:'First-line',
      source:'NICE NG28 §1.6.7',
      sideEffects:'GI upset (use MR or titrate slowly), B12 deficiency on long-term use, rare lactic acidosis',
      monitor:'Annual U&E + B12 (long-term). Sick-day rules — hold if dehydrated/AKI risk.',
      counsel:'"Start with one a week, build up slowly with food — most tummy upset settles. If you\'re ever badly ill, vomiting, or not eating, hold the tablets for a day and call us."',
      detail:{
        'Dose': '500 mg OD with evening meal → 500 mg BD → 500 mg TDS → 1 g BD (MR if intolerant)',
        'Interactions': 'Iodinated contrast (hold), alcohol excess (lactic acidosis)',
        'Key teaching': 'Cardiovascular-neutral, weight-neutral, no hypos. Backbone of T2DM therapy.'
      },
      evaluate(f){
        if (f.egfr_low) return { tier:'avoid', reasons:[{kind:'bad', text:'eGFR <30 — contraindicated (lactic acidosis risk)'}] };
        const r = [];
        if (f.preg) r.push({kind:'good', text:'Pregnancy — metformin is safe and preferred'});
        if (f.gi) r.push({kind:'bad', text:'IBS / chronic GI — use MR form, titrate slowly'});
        if (f.obese) r.push({kind:'good', text:'Weight-neutral or mild weight loss'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line for almost all T2DM unless contraindicated'}] };
      }
    },

    // -------- SGLT2i --------
    {
      id:'sglt2i',
      name:'SGLT2 inhibitor',
      examples:'Dapagliflozin 10 mg OD · Empagliflozin 10–25 mg OD',
      step:'1st add-on (or 1st-line with metformin if CVD/HF/CKD)',
      source:'NICE NG28 §1.6.13 · CKS T2DM',
      sideEffects:'Genital thrush + UTI, mild volume depletion, rare euglycaemic DKA',
      monitor:'eGFR at start; sick-day rules; foot care (Fournier\'s rare). Hold if acutely unwell.',
      counsel:'"These tablets protect your heart and kidneys as well as lowering sugar. Stop them if you\'re ill, fasting, or about to have surgery — call us if unsure."',
      detail:{
        'Dose': 'Dapagliflozin 10 mg OD or empagliflozin 10–25 mg OD',
        'Interactions': 'Loop diuretics (volume depletion), insulin/sulfonylurea (hypo if combined)',
        'Key teaching': 'Sick-day rules: hold during illness, surgery, prolonged fasting — euglycaemic DKA risk.'
      },
      evaluate(f){
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — contraindicated'}] };
        if (f.ketone_risk) return { tier:'avoid', reasons:[{kind:'bad', text:'DKA risk / acutely unwell — hold; risk of euglycaemic DKA'}] };
        if (f.egfr_low) return { tier:'avoid', reasons:[{kind:'bad', text:'eGFR <30 — most SGLT2i not licensed (dapa allowed in CKD specialist-led)'}] };

        const r = [];
        if (f.cvd) r.push({kind:'good', text:'Established CVD — cardiovascular event reduction (independent of HbA1c)'});
        if (f.hf)  r.push({kind:'good', text:'HF (any EF) — hospitalisation + mortality benefit; dapa/empa first-line'});
        if (f.ckd) r.push({kind:'good', text:'CKD with ACR ≥3 — slows progression (DAPA-CKD, EMPA-KIDNEY)'});
        if (f.qrisk) r.push({kind:'good', text:'QRISK ≥10% — add to metformin per NG28'});
        if (f.obese || f.weight_loss) r.push({kind:'good', text:'Weight loss 2–3 kg average'});
        if (f.urti) r.push({kind:'bad', text:'Recurrent thrush/UTI — significant SGLT2i adverse effect'});

        const preferred = f.cvd || f.hf || f.ckd || f.qrisk;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reasonable add-on if metformin alone insufficient'}] };
      }
    },

    // -------- GLP-1 RA --------
    {
      id:'glp1',
      name:'GLP-1 receptor agonist',
      examples:'Semaglutide SC weekly · Dulaglutide SC weekly · Liraglutide SC daily',
      step:'3rd-line / specialist',
      source:'NICE NG28 §1.6.27 (criteria: BMI ≥35 + comorbidity, or BMI <35 with insulin-related occupation issues)',
      sideEffects:'Nausea, vomiting, early satiety, rare pancreatitis, injection site reactions',
      monitor:'Stop at 6 months if HbA1c ↓ <11 mmol/mol AND weight ↓ <3% (NICE continuation criteria)',
      counsel:'"This is a weekly injection that lowers sugar, protects the heart, and reduces appetite. Nausea is common in the first weeks — eat smaller meals."',
      detail:{
        'Dose': 'Semaglutide 0.25 → 1 mg weekly; dulaglutide 0.75 → 1.5 mg weekly',
        'Interactions': 'Insulin / sulfonylurea — significant hypo risk if combined',
        'Key teaching': 'NICE criteria: BMI ≥35 (≥32.5 if South-Asian etc.) + psychological/medical comorbidity OR BMI <35 with occupational/medical reason against insulin.'
      },
      evaluate(f){
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — contraindicated'}] };
        if (f.pancreatitis) return { tier:'avoid', reasons:[{kind:'bad', text:'Past pancreatitis — relative contraindication'}] };

        const r = [];
        if (f.cvd) r.push({kind:'good', text:'Established CVD — semaglutide / liraglutide proven CV benefit'});
        if (f.obese) r.push({kind:'good', text:'BMI ≥30 — significant weight loss (5–15%)'});
        if (f.weight_loss) r.push({kind:'good', text:'Weight loss is a treatment goal'});
        if (f.oral) r.push({kind:'bad', text:'Patient prefers oral — most GLP-1s injectable (oral semaglutide is an option)'});
        if (f.gi) r.push({kind:'bad', text:'Chronic GI / IBS — nausea + early satiety may not be tolerated'});

        const preferred = f.cvd && f.obese;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r };
      }
    },

    // -------- DPP4i --------
    {
      id:'dpp4',
      name:'DPP-4 inhibitor',
      examples:'Sitagliptin 100 mg OD · Linagliptin 5 mg OD',
      step:'2nd or 3rd add-on',
      source:'NICE NG28 §1.6.21',
      sideEffects:'Generally well-tolerated, rare pancreatitis, rare arthralgia',
      monitor:'Dose-reduce in CKD (except linagliptin)',
      counsel:'"A gentle tablet — once a day, weight-neutral, and unlikely to cause low sugars."',
      detail:{
        'Dose': 'Sitagliptin 100 mg OD (50 mg if eGFR 30–45, 25 mg if eGFR <30); linagliptin 5 mg OD (no dose adjust)',
        'Interactions': 'Few. Caution with insulin/sulfonylurea (hypo).',
        'Key teaching': 'Stop if SGLT2i or GLP-1 RA started — combining DPP-4 with GLP-1 has no extra benefit.'
      },
      evaluate(f){
        if (f.pancreatitis) return { tier:'avoid', reasons:[{kind:'bad', text:'Past pancreatitis — relative contraindication'}] };
        if (f.hf) return { tier:'avoid', reasons:[{kind:'bad', text:'Saxagliptin associated with HF hospitalisation; avoid in HF (others neutral)'}] };

        const r = [];
        if (f.avoid_hypo) r.push({kind:'good', text:'Hypo-averse — very low hypo risk'});
        if (f.frail) r.push({kind:'good', text:'Frail elderly — well tolerated, low hypo risk'});
        if (f.oral) r.push({kind:'good', text:'Oral, once-daily'});
        if (f.obese) r.push({kind:'bad', text:'Weight-neutral — no weight loss benefit'});
        if (f.egfr_low) r.push({kind:'good', text:'Linagliptin needs no dose adjust in CKD'});

        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reasonable when SGLT2i/GLP-1 not tolerated or contraindicated'}] };
      }
    },

    // -------- SULFONYLUREA --------
    {
      id:'su',
      name:'Sulfonylurea',
      examples:'Gliclazide 40–80 mg OD → 160 mg BD',
      step:'2nd or 3rd add-on',
      source:'NICE NG28 §1.6.16 · BNF',
      sideEffects:'Hypoglycaemia (esp. elderly + skipped meals), weight gain ~2 kg',
      monitor:'Educate on hypos. DVLA: must inform if Group 2 driver.',
      counsel:'"These work quickly to lower sugar — but they can cause low sugars (hypo). I\'ll show you the warning signs and what to do. Don\'t skip meals."',
      detail:{
        'Dose': 'Gliclazide 40 mg OD with breakfast, titrate to 160 mg BD',
        'Interactions': 'β-blockers mask hypo. NSAIDs, fluconazole potentiate.',
        'Key teaching': 'Cheap, effective rescue when HbA1c high. Avoid first-line in drivers, frail elderly, irregular meal patterns.'
      },
      evaluate(f){
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — switch to insulin'}] };
        if (f.driver || f.avoid_hypo) return { tier:'avoid', reasons:[{kind:'bad', text:'Group 2 driver / hypo-averse — significant hypoglycaemia risk'}] };

        const r = [];
        if (f.hba1c_high) r.push({kind:'good', text:'HbA1c ≥75 — rapid glycaemic response when needed'});
        if (f.cost) r.push({kind:'good', text:'Lowest-cost add-on'});
        if (f.frail) r.push({kind:'bad', text:'Frail elderly — hypos can precipitate falls and admission'});
        if (f.obese || f.weight_loss) r.push({kind:'bad', text:'~2 kg weight gain — wrong direction for weight-loss goals'});

        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Useful rapid 2nd-line if SGLT2i / GLP-1 not appropriate'}] };
      }
    },

    // -------- PIOGLITAZONE --------
    {
      id:'pio',
      name:'Pioglitazone',
      examples:'15 → 45 mg OD',
      step:'3rd-line',
      source:'NICE NG28 §1.6.18 · BNF',
      sideEffects:'Weight gain, fluid retention → HF, fracture risk, possible bladder cancer signal',
      monitor:'Annual LFTs. Stop if ALT >3× normal. Watch for oedema.',
      counsel:'"This works well but can cause fluid retention. Tell me about any swelling, breathlessness, or unusual bruising."',
      detail:{
        'Dose': '15–30 mg OD → 45 mg',
        'Interactions': 'Insulin (oedema, HF risk). Avoid combination.',
        'Key teaching': 'Useful in severe insulin resistance / fatty liver. Modern guidelines deprioritise due to safety.'
      },
      evaluate(f){
        if (f.hf) return { tier:'avoid', reasons:[{kind:'bad', text:'Heart failure — fluid retention contraindicates'}] };
        if (f.bladder) return { tier:'avoid', reasons:[{kind:'bad', text:'Bladder cancer history — contraindicated'}] };
        if (f.fractures) return { tier:'avoid', reasons:[{kind:'bad', text:'High fracture risk — pioglitazone increases fractures'}] };
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — switch to insulin'}] };

        const r = [];
        if (f.hepatic) r.push({kind:'bad', text:'Hepatic impairment — monitor LFTs closely'});
        if (f.obese) r.push({kind:'bad', text:'Weight gain'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'3rd-line when other agents unsuitable'}] };
      }
    },

    // -------- INSULIN --------
    {
      id:'insulin',
      name:'Insulin',
      examples:'Isophane (NPH) OD/BD · Detemir/Glargine · Mixed biphasic',
      step:'Specialist / late stage / pregnancy',
      source:'NICE NG28 §1.6.30 · BNF',
      sideEffects:'Hypoglycaemia, weight gain ~4 kg, injection burden',
      monitor:'Capillary glucose, hypo recognition, sick-day rules. DVLA notification.',
      counsel:'"This will make the biggest difference to your sugars — and yes, it\'s an injection, but with a very fine needle most people don\'t feel it. I\'ll arrange specialist nurse support."',
      detail:{
        'Dose': 'Start isophane (NPH) 10 units nocte → titrate by FBG',
        'Interactions': 'β-blockers mask hypos; alcohol; steroids raise needs',
        'Key teaching': 'In T2DM: usually escalate to insulin only after multiple oral/injectable agents fail (except pregnancy or symptomatic hyperglycaemia).'
      },
      evaluate(f){
        const r = [];
        if (f.preg) return { tier:'preferred', reasons:[{kind:'good', text:'Pregnancy — insulin (± metformin) is the standard'}] };
        if (f.hba1c_high) r.push({kind:'good', text:'HbA1c ≥75 with symptoms — insulin can rescue quickly'});
        if (f.driver || f.avoid_hypo) r.push({kind:'bad', text:'Hypo-averse / Group 2 driver — needs careful titration'});
        if (f.frail) r.push({kind:'bad', text:'Frail elderly — hypo + falls risk'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reserved for late-stage T2DM or specialist initiation'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG28 — Type 2 diabetes in adults: management', url:'https://www.nice.org.uk/guidance/ng28' },
    { label:'NICE CKS — Type 2 diabetes', url:'https://cks.nice.org.uk/topics/diabetes-type-2/' },
    { label:'BNF — Diabetes treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/type-2-diabetes/' },
    { label:'NICE NG3 — Diabetes in pregnancy', url:'https://www.nice.org.uk/guidance/ng3' },
  ],
});
