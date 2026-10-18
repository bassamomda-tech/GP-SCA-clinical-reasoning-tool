/* ============================================
   Medication Chooser — Hypertension
   NICE NG136 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('hypertension', {
  title: 'Hypertension — antihypertensive selection',
  subtitle: 'Tiered first-line drug selection from NICE NG136.',
  guideline: 'NICE NG136 · SPC',


  // Global warnings shown above tiers
  safety: [
    {"tone":"red","label":"Pregnant or planning pregnancy","text":"Pregnancy — labetalol/nifedipine/methyldopa only"},
    {"tone":"amber","label":"Heart failure (HFrEF)","text":"HFrEF — CCB (amlodipine) avoided; favour ACEi + β-blocker + spiro"},
    {"tone":"amber","label":"Active gout","text":"Active gout — thiazide contraindicated"},
    {"tone":"red","label":"K⁺ >5.0 mmol/L","text":"K⁺ >5.0 — avoid ACEi/ARB/spiro"},
    {"tone":"amber","label":"eGFR <30 mL/min","text":"eGFR <30 — most drugs need dose adjust + specialist input"},
    {"tone":"red","label":"Prior angioedema (any cause)","text":"Prior angioedema — ACEi contraindicated; ARB cautious"}
  ],

  drugs: [
    // -------- ACE INHIBITOR --------
    {
      id:'acei',
      name:'ACE inhibitor',
      examples:'Ramipril 2.5 → 10 mg OD · Lisinopril',
      step:'Step 1',
      source:'NICE NG136 §1.4',
      sideEffects:'Dry cough (10–15%), hyperkalaemia, AKI, angioedema (rare)',
      monitor:'U&E + K⁺ within 1 week of start / titration',
      counsel:'"You may get a dry tickly cough — don\'t stop it, call us and we\'ll switch. If lips/tongue/throat swell, call 999."',
      detail:{
        'Dose': 'Ramipril 2.5 mg OD (1.25 mg if on a diuretic, per SPC) → titrate to 10 mg over weeks',
        'Interactions': 'NSAIDs (AKI), K-sparing diuretics + spiro (hyperK), lithium (toxicity)',
        'Key teaching': 'Never combine with ARB. Stop if creatinine rises >30% or K⁺ rise >0.5'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant or planning pregnancy","text":"Contraindicated in pregnancy — teratogenic (oligohydramnios, renal agenesis)"},
        {"kind":"avoid","label":"K⁺ >5.0 mmol/L","text":"K⁺ >5.0 — risk of dangerous hyperkalaemia"},
        {"kind":"avoid","label":"ACEi-induced cough","text":"Previous ACEi cough — switch to ARB"},
        {"kind":"avoid","label":"Prior angioedema (any cause)","text":"Prior angioedema — ACEi absolutely contraindicated"},
        {"kind":"caution","label":"Age ≥55 years","text":"Age ≥55 without DM/CKD/HF — CCB preferred Step 1"},
        {"kind":"caution","label":"Black African / African-Caribbean family origin","text":"Black African/Caribbean (no DM) — CCB superior at Step 1"},
        {"kind":"caution","label":"eGFR <30 mL/min","text":"eGFR <30 — specialist input before starting"},
        {"kind":"caution","label":"Regular NSAIDs","text":"Regular NSAID — triple-whammy AKI risk"},
        {"kind":"favoured","label":"Type 2 diabetes","text":"DM → ACEi/ARB renoprotective regardless of age/ethnicity (Black African/Caribbean: ARB preferred over ACEi — NICE NG136)"},
        {"kind":"favoured","label":"CKD / ACR >3","text":"CKD / ACR >3 → proteinuria reduction"},
        {"kind":"favoured","label":"Heart failure (HFrEF)","text":"HFrEF → mortality benefit"},
        {"kind":"favoured","label":"IHD / post-MI / stable angina","text":"Post-MI / LV dysfunction → secondary prevention"}
      ]
    },

    // -------- ARB --------
    {
      id:'arb',
      name:'Angiotensin-II receptor blocker',
      examples:'Candesartan 8 → 32 mg OD · Losartan',
      step:'Step 1',
      source:'NICE NG136 §1.4',
      sideEffects:'Hyperkalaemia, AKI — significantly less cough than ACEi',
      monitor:'U&E + K⁺ within 1 week (same as ACEi)',
      counsel:'"Works the same way but without the cough. We\'ll check kidneys in a week — routine, not a concern."',
      detail:{
        'Dose': 'Candesartan 8 mg OD → 32 mg',
        'Interactions': 'Same family as ACEi — never combine. NSAIDs, K-sparing diuretics.',
        'Key teaching': 'Preferred over ACEi in Black African/Caribbean patients whenever a RAS blocker is used (Step 1 with T2DM, or Step 2) — NICE NG136.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant or planning pregnancy","text":"Contraindicated in pregnancy (same class effect as ACEi)"},
        {"kind":"avoid","label":"K⁺ >5.0 mmol/L","text":"K⁺ >5.0 — hyperkalaemia risk"},
        {"kind":"caution","label":"Black African / African-Caribbean family origin","text":"Black African/Caribbean (no DM) — CCB superior at Step 1"},
        {"kind":"favoured","label":"Type 2 diabetes","text":"DM → equal renoprotection to ACEi"},
        {"kind":"favoured","label":"CKD / ACR >3","text":"CKD / ACR >3 — proteinuria reduction"},
        {"kind":"favoured","label":"Heart failure (HFrEF)","text":"Direct alternative to ACEi"},
        {"kind":"favoured","label":"ACEi-induced cough","text":"ACEi cough → ARB is the direct switch"},
        {"kind":"favoured","label":"Prior angioedema (any cause)","text":"Previous angioedema — cautious ARB use possible (specialist if ACEi-related)"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"Heart failure (HFrEF)","text":"HFrEF — amlodipine worsens outcomes; verapamil/diltiazem absolutely contraindicated"},
        {"kind":"favoured","label":"Age ≥55 years","text":"Age ≥55 without DM/CKD — first-line CCB"},
        {"kind":"favoured","label":"Black African / African-Caribbean family origin","text":"Black African/Caribbean (no DM) — superior efficacy at Step 1"},
        {"kind":"favoured","label":"Pregnant or planning pregnancy","text":"Pregnancy — nifedipine MR is an option (specialist guided)"},
        {"kind":"favoured","label":"IHD / post-MI / stable angina","text":"Stable angina — anti-anginal effect"},
        {"kind":"favoured","label":"Raynaud's","text":"Raynaud's — dual benefit (vasodilation)"}
      ]
    },

    // -------- THIAZIDE-LIKE --------
    {
      id:'thiazide',
      name:'Thiazide-like diuretic',
      examples:'Indapamide SR 1.5 mg OD',
      step:'Step 3',
      source:'NICE NG136 §1.4 · SPC',
      sideEffects:'Hypokalaemia, hyponatraemia, hyperuricaemia → gout, hyperglycaemia, photosensitivity',
      monitor:'U&E + Na⁺ + K⁺ within 2 weeks of starting',
      counsel:'"A gentle tablet — it won\'t make you rush to the toilet. We\'ll check your salts in 2 weeks."',
      detail:{
        'Dose': 'Indapamide SR 1.5 mg OD (NOT IR 2.5 mg — that\'s for HF diuresis)',
        'Interactions': 'Digoxin (hypoK amplifies toxicity), lithium (toxicity), NSAIDs (reduce efficacy)',
        'Key teaching': 'Use SR formulation for HTN. Avoid in gout, eGFR <30, pregnancy.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant or planning pregnancy","text":"Pregnancy — contraindicated"},
        {"kind":"avoid","label":"Active gout","text":"Active gout — thiazide raises urate and precipitates flares"},
        {"kind":"avoid","label":"K⁺ <3.5 mmol/L","text":"K⁺ <3.5 — correct first or use alternative"},
        {"kind":"avoid","label":"eGFR <30 mL/min","text":"eGFR <30 — ineffective"},
        {"kind":"avoid","label":"Na⁺ <130 mmol/L","text":"Na⁺ <130 — worsens hyponatraemia"},
        {"kind":"favoured","label":"Age ≥80 years","text":"Elderly isolated systolic HTN"},
        {"kind":"favoured","label":"Black African / African-Caribbean family origin","text":"Black African/Caribbean — more effective than ACEi alone"}
      ]
    },

    // -------- SPIRONOLACTONE --------
    {
      id:'spiro',
      name:'Spironolactone',
      examples:'25 mg OD (Step 4 add-on)',
      step:'Step 4',
      source:'NICE NG136 §1.4.27',
      sideEffects:'Hyperkalaemia (STOP if K⁺ >5.5), gynaecomastia (10% men → eplerenone), menstrual irregularity',
      monitor:'U&E + K⁺ within 1 month, then 3-monthly × 1 year',
      counsel:'"Men sometimes notice breast tenderness — if so, we\'ll switch to a similar tablet. Don\'t stop without calling us."',
      detail:{
        'Dose': 'Spironolactone 25 mg OD (max 50 mg)',
        'Interactions': 'ACEi/ARB + spiro = hyperK; NSAIDs; lithium',
        'Key teaching': 'The K⁺ 4.5 pivot at Step 4 — ≤4.5 spiro; >4.5 use α/β-blocker.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant or planning pregnancy","text":"Pregnancy — anti-androgen effects, contraindicated"},
        {"kind":"avoid","label":"K⁺ >5.0 mmol/L","text":"K⁺ >5.0 — hyperkalaemia risk"},
        {"kind":"avoid","label":"eGFR <30 mL/min","text":"eGFR <30 — contraindicated"},
        {"kind":"avoid","label":"Spironolactone gynaecomastia","text":"Prior gynaecomastia on spiro — switch to eplerenone"},
        {"kind":"favoured","label":"Heart failure (HFrEF)","text":"HFrEF — independent mortality benefit"},
        {"kind":"favoured","label":"OSA / resistant HTN","text":"Resistant HTN / OSA — spiro most effective Step 4 add-on"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"PDE5 inhibitor (sildenafil etc.)","text":"Concurrent PDE5 inhibitor — risk of profound hypotension"},
        {"kind":"caution","label":"Frail / falls risk","text":"Frail / falls — postural hypotension risk"},
        {"kind":"favoured","label":"BPH / LUTS","text":"BPH / LUTS — dual benefit"},
        {"kind":"favoured","label":"K⁺ >5.0 mmol/L","text":"Step 4 with K⁺ >4.5 — alpha/β-blocker over spiro"}
      ]
    },

    // -------- BETA-BLOCKER --------
    {
      id:'beta',
      name:'β-blocker',
      examples:'Bisoprolol 2.5 → 10 mg OD',
      step:'Step 4 / specialist',
      source:'NICE NG136 §1.4 · SPC',
      sideEffects:'Bradycardia, fatigue, cold extremities, nightmares, ED, masks hypoglycaemia',
      monitor:'Resting HR + BP. Never stop abruptly.',
      counsel:'"Don\'t stop these tablets suddenly — call us if there\'s a problem. They can mask the warning signs of low sugars if you have diabetes."',
      detail:{
        'Dose': 'Bisoprolol 2.5 mg OD → 10 mg',
        'Interactions': 'Verapamil/diltiazem — heart block. Insulin — masks hypos.',
        'Key teaching': 'No longer routine Step 4 — but first-line in AF rate control, post-MI, HFrEF, thyrotoxicosis, young women with HTN where ACEi/ARB CI\'d.'
      },
      conditions: [
        {"kind":"avoid","label":"Asthma / reversible airway disease","text":"Asthma — risk of bronchospasm (cardioselective only with specialist input)"},
        {"kind":"caution","label":"Type 2 diabetes","text":"DM — masks hypoglycaemia awareness"},
        {"kind":"caution","label":"Raynaud's","text":"Raynaud's — worsens peripheral vasoconstriction"},
        {"kind":"favoured","label":"Pregnant or planning pregnancy","text":"Pregnancy — labetalol is first-line"},
        {"kind":"favoured","label":"Heart failure (HFrEF)","text":"HFrEF — bisoprolol / carvedilol prognostic"},
        {"kind":"favoured","label":"IHD / post-MI / stable angina","text":"Post-MI / stable angina — secondary prevention"},
        {"kind":"favoured","label":"Atrial fibrillation","text":"AF — rate control + BP in one drug"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"Asthma / reversible airway disease","text":"Asthma — even in pregnancy, choose nifedipine MR"},
        {"kind":"favoured","label":"Pregnant or planning pregnancy","text":"Pregnancy / breastfeeding — first-line"},
        {"kind":"favoured","label":"Breastfeeding","text":"Pregnancy / breastfeeding — first-line"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG136 — Hypertension in adults: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng136' },
    { label:'NICE NG136 — hypertension', url:'https://www.nice.org.uk/guidance/ng136' },
    { label:'NICE NG133 — Hypertension in pregnancy', url:'https://www.nice.org.uk/guidance/ng133' },
    { label:'BNF — Hypertension treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/hypertension/' }
  ],
});
