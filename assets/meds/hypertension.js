/* ============================================
   Medication Chooser — Hypertension
   NICE NG136 · CKS Hypertension · BNF
   ============================================ */
MedChooser.register('hypertension', {
  title: 'Hypertension — antihypertensive selection',
  subtitle: 'Tiered first-line drug selection from NICE NG136. Tick the patient profile on the left; cards re-tier live.',
  guideline: 'NICE NG136 · CKS Hypertension · BNF',

  factors: [
    // Demographics
    { group:'Demographics', id:'age55',  label:'Age ≥55 years' },
    { group:'Demographics', id:'age80',  label:'Age ≥80 years', note:'BP target 150/90' },
    { group:'Demographics', id:'afro',   label:'Black African / African-Caribbean family origin', note:'CCB preferred Step 1 (no DM)' },
    { group:'Demographics', id:'preg',   label:'Pregnant or planning pregnancy' },
    { group:'Demographics', id:'bf',     label:'Breastfeeding' },
    { group:'Demographics', id:'frail',  label:'Frail / falls risk' },

    // Comorbidities
    { group:'Comorbidities', id:'dm',    label:'Type 2 diabetes' },
    { group:'Comorbidities', id:'ckd',   label:'CKD / ACR >3', note:'Renoprotective drug needed' },
    { group:'Comorbidities', id:'hf',    label:'Heart failure (HFrEF)' },
    { group:'Comorbidities', id:'ihd',   label:'IHD / post-MI / stable angina' },
    { group:'Comorbidities', id:'af',    label:'Atrial fibrillation' },
    { group:'Comorbidities', id:'asthma',label:'Asthma / reversible airway disease' },
    { group:'Comorbidities', id:'gout',  label:'Active gout' },
    { group:'Comorbidities', id:'osa',   label:'OSA / resistant HTN' },
    { group:'Comorbidities', id:'bph',   label:'BPH / LUTS' },
    { group:'Comorbidities', id:'raynauds',label:'Raynaud\'s' },

    // Bloods
    { group:'Bloods', id:'k_high', label:'K⁺ >5.0 mmol/L' },
    { group:'Bloods', id:'k_low',  label:'K⁺ <3.5 mmol/L' },
    { group:'Bloods', id:'egfr_low', label:'eGFR <30 mL/min' },
    { group:'Bloods', id:'na_low', label:'Na⁺ <130 mmol/L' },

    // Allergies / prior
    { group:'Allergy / prior intolerance', id:'cough_acei', label:'ACEi-induced cough' },
    { group:'Allergy / prior intolerance', id:'angioed', label:'Prior angioedema (any cause)' },
    { group:'Allergy / prior intolerance', id:'gynaeco', label:'Spironolactone gynaecomastia' },

    // Current meds
    { group:'Current medications', id:'nsaid', label:'Regular NSAIDs' },
    { group:'Current medications', id:'pde5',  label:'PDE5 inhibitor (sildenafil etc.)', note:'Avoid α-blocker combination' },
    { group:'Current medications', id:'lithium', label:'Lithium' },

    // Lifestyle / preference
    { group:'Preference / context', id:'once_daily', label:'Prefers once-daily' },
    { group:'Preference / context', id:'hgv', label:'HGV / PCV driver', note:'BP must be <180/100' },
    { group:'Preference / context', id:'lowmood', label:'Depression / low mood' },
  ],

  // Global warnings shown above tiers
  flags: (f) => {
    const out = [];
    if (f.preg) out.push({ tone:'red', text:'Pregnancy — labetalol/nifedipine/methyldopa only' });
    if (f.k_high) out.push({ tone:'red', text:'K⁺ >5.0 — avoid ACEi/ARB/spiro' });
    if (f.egfr_low) out.push({ tone:'amber', text:'eGFR <30 — most drugs need dose adjust + specialist input' });
    if (f.angioed) out.push({ tone:'red', text:'Prior angioedema — ACEi contraindicated; ARB cautious' });
    if (f.gout && !f.k_high) out.push({ tone:'amber', text:'Active gout — thiazide contraindicated' });
    if (f.hf) out.push({ tone:'amber', text:'HFrEF — CCB (amlodipine) avoided; favour ACEi + β-blocker + spiro' });
    return out;
  },

  drugs: [
    // -------- ACE INHIBITOR --------
    {
      id:'acei',
      name:'ACE inhibitor',
      examples:'Ramipril 1.25 → 10 mg OD · Lisinopril',
      step:'Step 1',
      source:'NICE NG136 §1.4',
      sideEffects:'Dry cough (10–15%), hyperkalaemia, AKI, angioedema (rare)',
      monitor:'U&E + K⁺ within 1 week of start / titration',
      counsel:'"You may get a dry tickly cough — don\'t stop it, call us and we\'ll switch. If lips/tongue/throat swell, call 999."',
      detail:{
        'Dose': 'Ramipril 1.25 mg OD → titrate to 10 mg over weeks',
        'Interactions': 'NSAIDs (AKI), K-sparing diuretics + spiro (hyperK), lithium (toxicity)',
        'Key teaching': 'Never combine with ARB. Stop if creatinine rises >30% or K⁺ rise >0.5'
      },
      evaluate(f){
        const r = [];
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Contraindicated in pregnancy — teratogenic (oligohydramnios, renal agenesis)'}] };
        if (f.angioed) return { tier:'avoid', reasons:[{kind:'bad', text:'Prior angioedema — ACEi absolutely contraindicated'}] };
        if (f.cough_acei) return { tier:'avoid', reasons:[{kind:'bad', text:'Previous ACEi cough — switch to ARB'}] };
        if (f.k_high) return { tier:'avoid', reasons:[{kind:'bad', text:'K⁺ >5.0 — risk of dangerous hyperkalaemia'}] };

        if (f.dm)  r.push({kind:'good', text:'DM → ACEi/ARB renoprotective regardless of age/ethnicity'});
        if (f.ckd) r.push({kind:'good', text:'CKD / ACR >3 → proteinuria reduction'});
        if (f.hf)  r.push({kind:'good', text:'HFrEF → mortality benefit'});
        if (f.ihd) r.push({kind:'good', text:'Post-MI / LV dysfunction → secondary prevention'});

        if (f.afro && !f.dm) r.push({kind:'bad', text:'Black African/Caribbean (no DM) — CCB superior at Step 1'});
        if (f.age55 && !f.dm && !f.ckd && !f.hf) r.push({kind:'bad', text:'Age ≥55 without DM/CKD/HF — CCB preferred Step 1'});

        if (f.egfr_low) r.push({kind:'bad', text:'eGFR <30 — specialist input before starting'});
        if (f.nsaid) r.push({kind:'bad', text:'Regular NSAID — triple-whammy AKI risk'});

        const preferred = (f.dm || f.ckd || f.hf || f.ihd) ||
                          (!f.afro && !f.age55);
        if (preferred && !f.egfr_low) return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line for under-55s without contraindications'}] };
        if (f.egfr_low) return { tier:'acceptable', reasons: r };
        return { tier:'acceptable', reasons: r };
      }
    },

    // -------- ARB --------
    {
      id:'arb',
      name:'Angiotensin-II receptor blocker',
      examples:'Candesartan 8 → 32 mg OD · Losartan',
      step:'Step 1',
      source:'NICE NG136 §1.4 · CKS Hypertension',
      sideEffects:'Hyperkalaemia, AKI — significantly less cough than ACEi',
      monitor:'U&E + K⁺ within 1 week (same as ACEi)',
      counsel:'"Works the same way but without the cough. We\'ll check kidneys in a week — routine, not a concern."',
      detail:{
        'Dose': 'Candesartan 8 mg OD → 32 mg',
        'Interactions': 'Same family as ACEi — never combine. NSAIDs, K-sparing diuretics.',
        'Key teaching': 'Preferred over ACEi in Black African/Caribbean patients with DM at Step 2.'
      },
      evaluate(f){
        const r = [];
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Contraindicated in pregnancy (same class effect as ACEi)'}] };
        if (f.k_high) return { tier:'avoid', reasons:[{kind:'bad', text:'K⁺ >5.0 — hyperkalaemia risk'}] };

        if (f.cough_acei) r.push({kind:'good', text:'ACEi cough → ARB is the direct switch'});
        if (f.angioed)    r.push({kind:'good', text:'Previous angioedema — cautious ARB use possible (specialist if ACEi-related)'});
        if (f.dm)  r.push({kind:'good', text:'DM → equal renoprotection to ACEi'});
        if (f.ckd) r.push({kind:'good', text:'CKD / ACR >3 — proteinuria reduction'});
        if (f.afro && f.dm) r.push({kind:'good', text:'Black African/Caribbean with DM — ARB preferred over ACEi at Step 2'});

        if (f.afro && !f.dm) r.push({kind:'bad', text:'Black African/Caribbean (no DM) — CCB superior at Step 1'});

        const preferred = f.cough_acei || (f.dm || f.ckd || f.hf) || (f.afro && f.dm);
        if (preferred) return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Direct alternative to ACEi'}] };
        return { tier:'acceptable', reasons: r };
      }
    },

    // -------- CCB --------
    {
      id:'ccb',
      name:'Calcium channel blocker',
      examples:'Amlodipine 5 → 10 mg OD',
      step:'Step 1',
      source:'NICE NG136 §1.4',
      sideEffects:'Ankle oedema (10–15%, vasodilatory — diuretics don\'t help), flushing, headache, gingival hyperplasia',
      monitor:'No routine bloods. Review oedema clinically.',
      counsel:'"You may notice ankle swelling — that\'s the tablet relaxing blood vessels, not fluid overload. Avoid grapefruit juice."',
      detail:{
        'Dose': 'Amlodipine 5 mg OD → 10 mg',
        'Interactions': 'Grapefruit (↑ levels), simvastatin (myopathy — switch to atorva)',
        'Key teaching': 'Avoid amlodipine in HFrEF — worsens outcomes. Verapamil/diltiazem + β-blocker = heart block.'
      },
      evaluate(f){
        const r = [];
        if (f.hf) return { tier:'avoid', reasons:[{kind:'bad', text:'HFrEF — amlodipine worsens outcomes; verapamil/diltiazem absolutely contraindicated'}] };

        if (f.afro && !f.dm) r.push({kind:'good', text:'Black African/Caribbean (no DM) — superior efficacy at Step 1'});
        if (f.age55 && !f.dm && !f.ckd) r.push({kind:'good', text:'Age ≥55 without DM/CKD — first-line CCB'});
        if (f.raynauds) r.push({kind:'good', text:'Raynaud\'s — dual benefit (vasodilation)'});
        if (f.ihd && !f.hf) r.push({kind:'good', text:'Stable angina — anti-anginal effect'});
        if (f.preg) r.push({kind:'good', text:'Pregnancy — nifedipine MR is an option (specialist guided)'});

        const preferred = (f.afro && !f.dm) || (f.age55 && !f.dm && !f.ckd && !f.hf) || f.raynauds;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reasonable Step 1 or Step 2 add-on for most profiles'}] };
      }
    },

    // -------- THIAZIDE-LIKE --------
    {
      id:'thiazide',
      name:'Thiazide-like diuretic',
      examples:'Indapamide SR 1.5 mg OD',
      step:'Step 3',
      source:'NICE NG136 §1.4 · BNF',
      sideEffects:'Hypokalaemia, hyponatraemia, hyperuricaemia → gout, hyperglycaemia, photosensitivity',
      monitor:'U&E + Na⁺ + K⁺ within 2 weeks of starting',
      counsel:'"A gentle tablet — it won\'t make you rush to the toilet. We\'ll check your salts in 2 weeks."',
      detail:{
        'Dose': 'Indapamide SR 1.5 mg OD (NOT IR 2.5 mg — that\'s for HF diuresis)',
        'Interactions': 'Digoxin (hypoK amplifies toxicity), lithium (toxicity), NSAIDs (reduce efficacy)',
        'Key teaching': 'Use SR formulation for HTN. Avoid in gout, eGFR <30, pregnancy.'
      },
      evaluate(f){
        if (f.gout) return { tier:'avoid', reasons:[{kind:'bad', text:'Active gout — thiazide raises urate and precipitates flares'}] };
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — contraindicated'}] };
        if (f.egfr_low) return { tier:'avoid', reasons:[{kind:'bad', text:'eGFR <30 — ineffective'}] };
        if (f.na_low) return { tier:'avoid', reasons:[{kind:'bad', text:'Na⁺ <130 — worsens hyponatraemia'}] };
        if (f.k_low) return { tier:'avoid', reasons:[{kind:'bad', text:'K⁺ <3.5 — correct first or use alternative'}] };

        const r = [];
        if (f.afro) r.push({kind:'good', text:'Black African/Caribbean — more effective than ACEi alone'});
        if (f.age80) r.push({kind:'good', text:'Elderly isolated systolic HTN'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Standard Step 3 add-on to ACEi/ARB + CCB'}] };
      }
    },

    // -------- SPIRONOLACTONE --------
    {
      id:'spiro',
      name:'Spironolactone',
      examples:'25 mg OD (Step 4 add-on)',
      step:'Step 4',
      source:'NICE NG136 §1.4.27 · CKS Hypertension',
      sideEffects:'Hyperkalaemia (STOP if K⁺ >5.5), gynaecomastia (10% men → eplerenone), menstrual irregularity',
      monitor:'U&E + K⁺ within 1 month, then 3-monthly × 1 year',
      counsel:'"Men sometimes notice breast tenderness — if so, we\'ll switch to a similar tablet. Don\'t stop without calling us."',
      detail:{
        'Dose': 'Spironolactone 25 mg OD (max 50 mg)',
        'Interactions': 'ACEi/ARB + spiro = hyperK; NSAIDs; lithium',
        'Key teaching': 'The K⁺ 4.5 pivot at Step 4 — ≤4.5 spiro; >4.5 use α/β-blocker.'
      },
      evaluate(f){
        if (f.k_high) return { tier:'avoid', reasons:[{kind:'bad', text:'K⁺ >5.0 — hyperkalaemia risk'}] };
        if (f.egfr_low) return { tier:'avoid', reasons:[{kind:'bad', text:'eGFR <30 — contraindicated'}] };
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — anti-androgen effects, contraindicated'}] };
        if (f.gynaeco) return { tier:'avoid', reasons:[{kind:'bad', text:'Prior gynaecomastia on spiro — switch to eplerenone'}] };

        const r = [];
        if (f.osa) r.push({kind:'good', text:'Resistant HTN / OSA — spiro most effective Step 4 add-on'});
        if (f.hf) r.push({kind:'good', text:'HFrEF — independent mortality benefit'});

        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Step 4 add-on if K⁺ ≤4.5'}] };
      }
    },

    // -------- ALPHA-BLOCKER --------
    {
      id:'alpha',
      name:'α-blocker',
      examples:'Doxazosin 1 → 16 mg OD',
      step:'Step 4',
      source:'NICE NG136 §1.4.27',
      sideEffects:'First-dose hypotension (take at bedtime), postural drop, stress incontinence in women',
      monitor:'Standing BP. Always ask about PDE5 inhibitors first.',
      counsel:'"Take the first dose at bedtime — it can cause dizziness when you stand. Are you taking anything for erectile dysfunction? Mixing them is dangerous."',
      detail:{
        'Dose': 'Doxazosin 1 mg nocte → titrate to 16 mg',
        'Interactions': 'PDE5 inhibitors (sildenafil) — profound hypotension. Always ask.',
        'Key teaching': 'Phaeo prep: α-blocker MUST go before β-blocker.'
      },
      evaluate(f){
        if (f.pde5) return { tier:'avoid', reasons:[{kind:'bad', text:'Concurrent PDE5 inhibitor — risk of profound hypotension'}] };

        const r = [];
        if (f.bph) r.push({kind:'good', text:'BPH / LUTS — dual benefit'});
        if (f.k_high && !f.egfr_low) r.push({kind:'good', text:'Step 4 with K⁺ >4.5 — alpha/β-blocker over spiro'});

        if (f.frail) r.push({kind:'bad', text:'Frail / falls — postural hypotension risk'});

        const preferred = f.bph;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r };
      }
    },

    // -------- BETA-BLOCKER --------
    {
      id:'beta',
      name:'β-blocker',
      examples:'Bisoprolol 2.5 → 10 mg OD',
      step:'Step 4 / specialist',
      source:'NICE NG136 §1.4 · BNF',
      sideEffects:'Bradycardia, fatigue, cold extremities, nightmares, ED, masks hypoglycaemia',
      monitor:'Resting HR + BP. Never stop abruptly.',
      counsel:'"Don\'t stop these tablets suddenly — call us if there\'s a problem. They can mask the warning signs of low sugars if you have diabetes."',
      detail:{
        'Dose': 'Bisoprolol 2.5 mg OD → 10 mg',
        'Interactions': 'Verapamil/diltiazem — heart block. Insulin — masks hypos.',
        'Key teaching': 'No longer routine Step 4 — but first-line in AF rate control, post-MI, HFrEF, thyrotoxicosis, young women with HTN where ACEi/ARB CI\'d.'
      },
      evaluate(f){
        if (f.asthma) return { tier:'avoid', reasons:[{kind:'bad', text:'Asthma — risk of bronchospasm (cardioselective only with specialist input)'}] };

        const r = [];
        if (f.af) r.push({kind:'good', text:'AF — rate control + BP in one drug'});
        if (f.ihd) r.push({kind:'good', text:'Post-MI / stable angina — secondary prevention'});
        if (f.hf) r.push({kind:'good', text:'HFrEF — bisoprolol / carvedilol prognostic'});
        if (f.preg) r.push({kind:'good', text:'Pregnancy — labetalol is first-line'});

        if (f.dm) r.push({kind:'bad', text:'DM — masks hypoglycaemia awareness'});
        if (f.raynauds) r.push({kind:'bad', text:'Raynaud\'s — worsens peripheral vasoconstriction'});

        const preferred = f.af || f.ihd || f.hf || f.preg;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reserved for specific indications, not routine Step 1'}] };
      }
    },

    // -------- LABETALOL (pregnancy) --------
    {
      id:'labetalol',
      name:'Labetalol',
      examples:'100 → 800 mg BD (pregnancy first-line)',
      step:'Pregnancy',
      source:'NICE NG133 Hypertension in pregnancy',
      sideEffects:'Same β-blocker class; tiredness, scalp tingling',
      monitor:'BP, FHR if antenatal',
      counsel:'"This is the safest blood pressure tablet to take while pregnant or breastfeeding."',
      detail:{
        'Dose': 'Labetalol 100 mg BD → 800 mg',
        'Key teaching': 'Pregnancy options: labetalol first, then nifedipine MR, then methyldopa.'
      },
      evaluate(f){
        if (f.asthma) return { tier:'avoid', reasons:[{kind:'bad', text:'Asthma — even in pregnancy, choose nifedipine MR'}] };
        if (f.preg || f.bf) return { tier:'preferred', reasons:[{kind:'good', text:'Pregnancy / breastfeeding — first-line'}] };
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Specialist use outside pregnancy'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG136 — Hypertension in adults: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng136' },
    { label:'NICE CKS — Hypertension', url:'https://cks.nice.org.uk/topics/hypertension/' },
    { label:'NICE NG133 — Hypertension in pregnancy', url:'https://www.nice.org.uk/guidance/ng133' },
    { label:'BNF — Hypertension treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/hypertension/' },
  ],
});
