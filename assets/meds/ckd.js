/* ============================================
   Medication Chooser — Chronic Kidney Disease (CKD)
   NICE NG203 · NG28 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('ckd', {
  title: 'CKD — cardio-renal protection',
  subtitle: 'CKD management is about slowing progression and cutting cardiovascular risk, not "a kidney tablet". The four pillars: an ACE inhibitor / ARB for albuminuria, an SGLT2 inhibitor for cardio-renal protection, a statin for everyone, and — in diabetic CKD with residual albuminuria — finerenone.',
  guideline: 'NICE NG203 · NG28 · SPC',


  safety: [
    {"tone":"amber","label":"eGFR <20–25 / advanced CKD","text":"Advanced CKD (eGFR <20) — coordinate with nephrology before initiating/changing agents; \"sick-day rules\" for ACEi/ARB/SGLT2i/diuretics/NSAIDs/metformin."},
    {"tone":"amber","label":"K⁺ ≥5.0 / hyperkalaemia tendency","text":"Check K⁺ and eGFR before and 1–2 weeks after starting/up-titrating ACEi/ARB or finerenone; a creatinine rise up to 30% / K⁺ up to 5.5 can be acceptable."},
    {"tone":"red","label":"Pregnant / planning pregnancy","text":"Pregnancy — stop ACE inhibitor/ARB and statin; use pregnancy-safe antihypertensives (labetalol/nifedipine). Specialist renal–obstetric input."}
  ],

  drugs: [
    {
      id:'acei_arb',
      name:'ACE inhibitor or ARB',
      examples:'Ramipril / lisinopril, or losartan / candesartan — titrate to max tolerated',
      step:'Pillar 1 — albuminuria',
      source:'NICE NG203',
      sideEffects:'Cough (ACEi), hyperkalaemia, AKI on volume depletion, first-dose hypotension',
      monitor:'U&E 1–2 weeks after start/up-titration; tolerate ≤30% creatinine rise',
      counsel:'"This protects your kidneys by reducing the protein leak, as well as controlling blood pressure. We\'ll check a blood test a week or two after starting, and you\'ll pause it if you become dehydrated or unwell."',
      detail:{
        'Indication':'Offer to CKD with ACR ≥30 (and diabetes), ACR ≥70 regardless, or ACR 3–29 with hypertension. Titrate to the maximum licensed tolerated dose.',
        'Sick-day rules':'Withhold during intercurrent illness with dehydration (D&V, sepsis) to reduce AKI risk.',
        'Key teaching':'An ACEi or an ARB (NICE states no preference). Do not normally start if K⁺ >5.0 mmol/L (NG203). Do not combine an ACEi with an ARB. A small, stable creatinine rise (≤30%) or K⁺ ≤5.5 is expected and acceptable.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant / planning pregnancy","text":"Contraindicated in pregnancy (fetotoxicity) — switch to a pregnancy-safe antihypertensive"},
        {"kind":"caution","label":"K⁺ ≥5.0 / hyperkalaemia tendency","text":"K⁺ ≥5.0 — correct/recheck first; may still be appropriate with monitoring as it is renoprotective"},
        {"kind":"favoured","label":"ACR ≥3 mg/mmol (albuminuria)","text":"Albuminuria — first-line renoprotection (reduces ACR and slows progression)"},
        {"kind":"favoured","label":"ACR ≥30 mg/mmol","text":"Albuminuria — first-line renoprotection (reduces ACR and slows progression)"},
        {"kind":"favoured","label":"Type 2 diabetes","text":"Diabetic CKD with albuminuria — strongly indicated"},
        {"kind":"favoured","label":"Hypertension","text":"Also treats hypertension"}
      ]
    },
    {
      id:'sglt2',
      name:'SGLT2 inhibitor (dapagliflozin)',
      examples:'Dapagliflozin 10 mg OD (add to ACEi/ARB)',
      step:'Pillar 2 — cardio-renal',
      source:'NICE NG203 · TA1075',
      sideEffects:'Genital thrush, volume depletion, rare DKA (esp. T1DM/illness)',
      monitor:'Expect a small initial eGFR dip (haemodynamic, reversible); sick-day rules',
      counsel:'"This tablet has been shown to protect kidneys and the heart, even if you don\'t have diabetes. There may be a small dip in the kidney test at first — that\'s expected and settles. Keep good genital hygiene, and pause it if you\'re unwell or not eating/drinking."',
      detail:{
        'Indication':'Add to a maximally tolerated ACEi/ARB in CKD with ACR ≥22.6 mg/mmol (≈ uACR 200 mg/g), and consider down to lower ACR with T2DM. Eligibility extends across a wide eGFR range.',
        'Sick-day rules':'Withhold if acutely unwell, dehydrated, or perioperative (DKA risk).',
        'Key teaching':'The early eGFR dip is haemodynamic and not a reason to stop. Counsel on DKA symptoms; not for type 1 diabetes in primary care.'
      },
      conditions: [
        {"kind":"favoured","label":"ACR ≥3 mg/mmol (albuminuria)","text":"Albuminuric CKD — adds cardio-renal protection on top of ACEi/ARB"},
        {"kind":"favoured","label":"ACR ≥30 mg/mmol","text":"Albuminuric CKD — adds cardio-renal protection on top of ACEi/ARB"},
        {"kind":"favoured","label":"Type 2 diabetes","text":"Type 2 diabetes + CKD — clear indication"},
        {"kind":"favoured","label":"Heart failure","text":"Heart failure — additional benefit"},
        {"kind":"note","label":"Recurrent UTI / volume depletion risk","text":"Volume-depletion/UTI risk — counsel on sick-day rules and hygiene"},
        {"kind":"note","label":"Frail / recurrent AKI","text":"Volume-depletion/UTI risk — counsel on sick-day rules and hygiene"}
      ]
    },
    {
      id:'statin',
      name:'Statin (atorvastatin)',
      examples:'Atorvastatin 20 mg OD (primary prevention in CKD)',
      step:'Pillar 3 — CV risk',
      source:'NICE NG203 · NG238',
      sideEffects:'Myalgia, deranged LFTs (usually transient)',
      monitor:'Lipids/non-HDL response; LFTs',
      counsel:'"CKD raises heart and stroke risk, so a statin is recommended for almost everyone with kidney disease regardless of the cholesterol number."',
      detail:{
        'Indication':'Offer atorvastatin 20 mg for primary prevention of CVD to people with CKD; increase if >40% reduction in non-HDL not achieved and eGFR ≥30.',
        'Key teaching':'CKD is a CVD risk multiplier — statin benefit is independent of baseline cholesterol.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant / planning pregnancy","text":"Statins contraindicated in pregnancy — stop"}
      ]
    },
    {
      id:'finerenone',
      name:'Finerenone (non-steroidal MRA)',
      examples:'10–20 mg OD (added to ACEi/ARB ± SGLT2i)',
      step:'Pillar 4 — diabetic CKD',
      source:'NICE TA877',
      sideEffects:'Hyperkalaemia (key), hypotension',
      monitor:'K⁺ before and during; do not start if K⁺ >5.0',
      counsel:'"An add-on tablet for diabetic kidney disease that further protects the kidneys and heart. Its main risk is a rise in potassium, so we monitor blood tests closely."',
      detail:{
        'Indication':'Type 2 diabetes with CKD (ACR ≥3, eGFR appropriate per TA877) and residual albuminuria despite maximally tolerated ACEi/ARB. Reduces CKD progression and CV events.',
        'Key teaching':'Do not initiate if K⁺ >5.0 mmol/L. Distinct from spironolactone (steroidal MRA).'
      },
      conditions: [
        {"kind":"favoured","label":"Type 2 diabetes","text":"Type 2 diabetic CKD with residual albuminuria on ACEi/ARB — add-on cardio-renal protection"}
      ]
    },
    {
      id:'nsaid_avoid',
      name:'NSAIDs (what to avoid / deprescribe)',
      examples:'Ibuprofen, naproxen, diclofenac — minimise/avoid in CKD',
      step:'Nephrotoxin review',
      source:'NICE NG203',
      sideEffects:'AKI, fluid retention, hyperkalaemia, ↓ ACEi/ARB efficacy',
      monitor:'Review all nephrotoxins; "triple whammy" (ACEi/ARB + diuretic + NSAID)',
      counsel:'"I\'d steer you away from anti-inflammatory painkillers like ibuprofen — in kidney disease they can tip the kidneys into injury, especially alongside your blood-pressure tablets."',
      detail:{
        'Key teaching':'Avoid the "triple whammy" of ACEi/ARB + diuretic + NSAID. Prefer paracetamol/topical agents; review OTC NSAID use.'
      },
      
    }
  ],

  sources: [
    { label:'NICE NG203 — Chronic kidney disease: assessment and management', url:'https://www.nice.org.uk/guidance/ng203' },
    { label:'NICE TA1075 — Dapagliflozin for CKD', url:'https://www.nice.org.uk/guidance/ta1075' },
    { label:'NICE TA877 — Finerenone for CKD in type 2 diabetes', url:'https://www.nice.org.uk/guidance/ta877' },
    { label:'NICE NG203 — chronic kidney disease', url:'https://www.nice.org.uk/guidance/ng203' }
  ],
});
