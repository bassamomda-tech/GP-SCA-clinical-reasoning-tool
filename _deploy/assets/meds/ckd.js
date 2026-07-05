/* ============================================
   Medication Chooser — Chronic Kidney Disease (CKD)
   NICE NG203 · NG28 · CKS CKD · BNF
   ============================================ */
MedChooser.register('ckd', {
  title: 'CKD — cardio-renal protection',
  subtitle: 'CKD management is about slowing progression and cutting cardiovascular risk, not "a kidney tablet". The four pillars: an ACE inhibitor / ARB for albuminuria, an SGLT2 inhibitor for cardio-renal protection, a statin for everyone, and — in diabetic CKD with residual albuminuria — finerenone. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG203 · NG28 · CKS CKD · BNF',

  factors: [
    { group:'Albuminuria / function', id:'acr3', label:'ACR ≥3 mg/mmol (albuminuria)' },
    { group:'Albuminuria / function', id:'acr30', label:'ACR ≥30 mg/mmol' },
    { group:'Albuminuria / function', id:'egfr', label:'eGFR <60' },
    { group:'Albuminuria / function', id:'egfr_low', label:'eGFR <20–25 / advanced CKD' },

    { group:'Comorbidity', id:'diabetes', label:'Type 2 diabetes' },
    { group:'Comorbidity', id:'hf', label:'Heart failure' },
    { group:'Comorbidity', id:'cvd', label:'Established cardiovascular disease' },
    { group:'Comorbidity', id:'htn', label:'Hypertension' },

    { group:'Cautions', id:'hyperkalaemia', label:'K⁺ ≥5.0 / hyperkalaemia tendency' },
    { group:'Cautions', id:'pregnancy', label:'Pregnant / planning pregnancy', note:'ACEi/ARB & statin contraindicated' },
    { group:'Cautions', id:'volume', label:'Recurrent UTI / volume depletion risk' },
    { group:'Cautions', id:'frail', label:'Frail / recurrent AKI' },
  ],

  flags: (f) => {
    const out = [];
    if (f.pregnancy) out.push({ tone:'red', text:'Pregnancy — stop ACE inhibitor/ARB and statin; use pregnancy-safe antihypertensives (labetalol/nifedipine). Specialist renal–obstetric input.' });
    if (f.hyperkalaemia) out.push({ tone:'amber', text:'Check K⁺ and eGFR before and 1–2 weeks after starting/up-titrating ACEi/ARB or finerenone; a creatinine rise up to 30% / K⁺ up to 5.5 can be acceptable.' });
    if (f.egfr_low) out.push({ tone:'amber', text:'Advanced CKD (eGFR <20) — coordinate with nephrology before initiating/changing agents; "sick-day rules" for ACEi/ARB/SGLT2i/diuretics/NSAIDs/metformin.' });
    return out;
  },

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
        'Key teaching':'Do not combine an ACEi with an ARB. A small, stable creatinine rise (≤30%) or K⁺ ≤5.5 is expected and acceptable.'
      },
      evaluate(f){
        if (f.pregnancy) return { tier:'avoid', reasons:[{kind:'bad', text:'Contraindicated in pregnancy (fetotoxicity) — switch to a pregnancy-safe antihypertensive'}] };
        if (f.hyperkalaemia) return { tier:'acceptable', reasons:[{kind:'bad', text:'K⁺ ≥5.0 — correct/recheck first; may still be appropriate with monitoring as it is renoprotective'}] };
        const r = [];
        if (f.acr30 || f.acr3) r.push({kind:'good', text:'Albuminuria — first-line renoprotection (reduces ACR and slows progression)'});
        if (f.diabetes) r.push({kind:'good', text:'Diabetic CKD with albuminuria — strongly indicated'});
        if (f.htn) r.push({kind:'good', text:'Also treats hypertension'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Foundation of CKD protection where albuminuria present'}] };
      }
    },
    {
      id:'sglt2',
      name:'SGLT2 inhibitor (dapagliflozin)',
      examples:'Dapagliflozin 10 mg OD (add to ACEi/ARB)',
      step:'Pillar 2 — cardio-renal',
      source:'NICE NG203 · TA775',
      sideEffects:'Genital thrush, volume depletion, rare DKA (esp. T1DM/illness)',
      monitor:'Expect a small initial eGFR dip (haemodynamic, reversible); sick-day rules',
      counsel:'"This tablet has been shown to protect kidneys and the heart, even if you don\'t have diabetes. There may be a small dip in the kidney test at first — that\'s expected and settles. Keep good genital hygiene, and pause it if you\'re unwell or not eating/drinking."',
      detail:{
        'Indication':'Add to a maximally tolerated ACEi/ARB in CKD with ACR ≥22.6 mg/mmol (≈ uACR 200 mg/g), and consider down to lower ACR with T2DM. Eligibility extends across a wide eGFR range.',
        'Sick-day rules':'Withhold if acutely unwell, dehydrated, or perioperative (DKA risk).',
        'Key teaching':'The early eGFR dip is haemodynamic and not a reason to stop. Counsel on DKA symptoms; not for type 1 diabetes in primary care.'
      },
      evaluate(f){
        const r = [];
        if (f.acr30 || f.acr3) r.push({kind:'good', text:'Albuminuric CKD — adds cardio-renal protection on top of ACEi/ARB'});
        if (f.diabetes) r.push({kind:'good', text:'Type 2 diabetes + CKD — clear indication'});
        if (f.hf) r.push({kind:'good', text:'Heart failure — additional benefit'});
        if (f.volume || f.frail) r.push({kind:'neutral', text:'Volume-depletion/UTI risk — counsel on sick-day rules and hygiene'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Cardio-renal protection across CKD with albuminuria'}] };
      }
    },
    {
      id:'statin',
      name:'Statin (atorvastatin)',
      examples:'Atorvastatin 20 mg OD (primary prevention in CKD)',
      step:'Pillar 3 — CV risk',
      source:'NICE NG203 · CG181',
      sideEffects:'Myalgia, deranged LFTs (usually transient)',
      monitor:'Lipids/non-HDL response; LFTs',
      counsel:'"CKD raises heart and stroke risk, so a statin is recommended for almost everyone with kidney disease regardless of the cholesterol number."',
      detail:{
        'Indication':'Offer atorvastatin 20 mg for primary prevention of CVD to people with CKD; increase if >40% reduction in non-HDL not achieved and eGFR ≥30.',
        'Key teaching':'CKD is a CVD risk multiplier — statin benefit is independent of baseline cholesterol.'
      },
      evaluate(f){
        if (f.pregnancy) return { tier:'avoid', reasons:[{kind:'bad', text:'Statins contraindicated in pregnancy — stop'}] };
        return { tier:'preferred', reasons:[{kind:'good', text:'Offer to essentially all CKD patients for CV protection (atorvastatin 20 mg)'}] };
      }
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
      evaluate(f){
        if (!f.diabetes) return { tier:'avoid', reasons:[{kind:'neutral', text:'Licensed for type 2 diabetic CKD — not for non-diabetic CKD here'}] };
        if (f.hyperkalaemia) return { tier:'avoid', reasons:[{kind:'bad', text:'K⁺ ≥5.0 — do not start finerenone; correct potassium first'}] };
        const r = [{kind:'good', text:'Type 2 diabetic CKD with residual albuminuria on ACEi/ARB — add-on cardio-renal protection'}];
        if (f.acr3 || f.acr30) r.push({kind:'good', text:'Persistent albuminuria — target population for finerenone'});
        return { tier:'acceptable', reasons:r };
      }
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
      evaluate(f){
        return { tier:'avoid', reasons:[{kind:'bad', text:'Nephrotoxic in CKD — avoid where possible; deprescribe and counsel on OTC ibuprofen'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG203 — Chronic kidney disease: assessment and management', url:'https://www.nice.org.uk/guidance/ng203' },
    { label:'NICE TA775 — Dapagliflozin for CKD', url:'https://www.nice.org.uk/guidance/ta775' },
    { label:'NICE TA877 — Finerenone for CKD in type 2 diabetes', url:'https://www.nice.org.uk/guidance/ta877' },
    { label:'NICE CKS — Chronic kidney disease', url:'https://cks.nice.org.uk/topics/chronic-kidney-disease/' },
  ],
});
