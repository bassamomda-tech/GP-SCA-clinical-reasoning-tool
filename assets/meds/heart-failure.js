/* ============================================
   Medication Chooser — Heart Failure (HFrEF)
   NICE NG106 · BNF
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('heart-failure', {
  title: 'Chronic heart failure — disease-modifying therapy',
  subtitle: 'HFrEF prognosis rests on the "four pillars" (ACEi/ARB→ARNI, β-blocker, MRA, SGLT2i). Diuretics treat congestion but not mortality.',
  guideline: 'NICE NG106 · BNF',


  safety: [
    {"tone":"amber","label":"Ejection fraction: HFpEF (preserved EF)","text":"HFpEF — no drug proven to cut mortality; treat congestion + comorbidities; SGLT2i now recommended"},
    {"tone":"red","label":"K⁺ >5.0 mmol/L","text":"K⁺ >5.0 — caution/avoid ACEi/ARB/ARNI/MRA; recheck and treat"},
    {"tone":"amber","label":"Symptomatic hypotension (SBP <100)","text":"Hypotension — uptitrate slowly; prioritise prognostic drugs over diuretic dose"},
    {"tone":"amber","label":"Regular NSAIDs","text":"NSAIDs cause fluid retention + AKI — stop where possible"},
    {"tone":"red","label":"On verapamil/diltiazem","text":"Verapamil/diltiazem — negatively inotropic, contraindicated in HFrEF"}
  ],

  drugs: [
    // -------- ACEi --------
    {
      id:'acei',
      name:'ACE inhibitor',
      examples:'Ramipril · Enalapril (titrate to target)',
      step:'Pillar 1',
      source:'NICE NG106 §1.4 (first-line + β-blocker)',
      sideEffects:'Cough, hyperkalaemia, AKI, hypotension, angioedema',
      monitor:'U&E + K⁺ before, 1–2 weeks after start/titration',
      counsel:'"One of the core tablets that helps the heart and prolongs life. We\'ll build the dose up slowly and check your kidneys."',
      detail:{
        'Dose': 'Ramipril titrated to max tolerated; enalapril 2.5 mg BD → 10–20 mg BD',
        'Key teaching': 'First-line with a β-blocker for all HFrEF unless contraindicated. Start one, then add the other.'
      },
      conditions: [
        {"kind":"avoid","label":"K⁺ >5.0 mmol/L","text":"K⁺ >5.0 — correct first"},
        {"kind":"avoid","label":"ACEi-induced cough","text":"ACEi cough — switch to ARB"},
        {"kind":"avoid","label":"Prior angioedema","text":"Prior angioedema — contraindicated"},
        {"kind":"avoid","label":"Pregnant or planning","text":"Pregnancy — teratogenic"},
        {"kind":"caution","label":"Regular NSAIDs","text":"NSAID — triple-whammy AKI risk"},
        {"kind":"note","label":"Ejection fraction: HFpEF (preserved EF)","text":"HFpEF — for comorbidity (HTN), not prognostic"}
      ]
    },
    // -------- ARB --------
    {
      id:'arb',
      name:'ARB (if ACEi not tolerated)',
      examples:'Candesartan · Losartan',
      step:'Pillar 1 (alt)',
      source:'NICE NG106 §1.4',
      sideEffects:'Hyperkalaemia, AKI — less cough',
      monitor:'U&E + K⁺ as for ACEi',
      counsel:'"Same job as the first tablet but without the cough some people get."',
      detail:{ 'Key teaching':'Use when ACEi causes cough. Never combine ACEi + ARB.' },
      conditions: [
        {"kind":"avoid","label":"K⁺ >5.0 mmol/L","text":"K⁺ >5.0 — correct first"},
        {"kind":"avoid","label":"Pregnant or planning","text":"Pregnancy — teratogenic"},
        {"kind":"favoured","label":"ACEi-induced cough","text":"ACEi cough — ARB is the direct switch"},
        {"kind":"note","label":"Ejection fraction: HFpEF (preserved EF)","text":"HFpEF — comorbidity indication only"}
      ]
    },
    // -------- ARNI --------
    {
      id:'arni',
      name:'ARNI — sacubitril/valsartan',
      examples:'Sacubitril/valsartan (specialist initiation)',
      step:'Pillar 1 (escalation)',
      source:'NICE NG106 · NICE TA388',
      sideEffects:'Hypotension, hyperkalaemia, angioedema',
      monitor:'Specialist; 36-h washout from ACEi before starting',
      counsel:'"A newer combined tablet that replaces the first one and works even better for the heart — started by the heart-failure team."',
      detail:{ 'Key teaching':'For symptomatic HFrEF on optimal therapy. Replaces ACEi/ARB — needs 36-h ACEi washout to avoid angioedema. Specialist initiation.' },
      conditions: [
        {"kind":"note","label":"Ejection fraction: HFrEF (reduced EF ≤40%)","text":"Escalation when symptomatic despite ACEi + β-blocker + MRA"}
      ]
    },
    // -------- BETA-BLOCKER --------
    {
      id:'beta',
      name:'β-blocker (HF-licensed)',
      examples:'Bisoprolol · Carvedilol · Nebivolol',
      step:'Pillar 2',
      source:'NICE NG106 §1.4',
      sideEffects:'Bradycardia, fatigue, transient worsening, bronchospasm',
      monitor:'HR, BP; "start low, go slow"; do not start in decompensation',
      counsel:'"This protects the heart over time. You may feel a bit more tired at first — that settles. Never stop it suddenly."',
      detail:{ 'Key teaching':'Only bisoprolol, carvedilol or nebivolol are licensed for HF. Start when stable/euvolaemic, titrate slowly.' },
      conditions: [
        {"kind":"avoid","label":"Asthma / reversible airways","text":"Asthma — bronchospasm risk (specialist may use cardioselective)"},
        {"kind":"caution","label":"Congestion / fluid overload","text":"Decompensated/congested — stabilise first, do not start during acute overload"},
        {"kind":"favoured","label":"Atrial fibrillation","text":"Coexisting AF — rate control + prognosis"},
        {"kind":"note","label":"Ejection fraction: HFpEF (preserved EF)","text":"HFpEF — rate control / comorbidity, not prognostic"}
      ]
    },
    // -------- MRA --------
    {
      id:'mra',
      name:'MRA — spironolactone / eplerenone',
      examples:'Spironolactone 25 mg OD',
      step:'Pillar 3',
      source:'NICE NG106 §1.4',
      sideEffects:'Hyperkalaemia, gynaecomastia (spiro → eplerenone), AKI',
      monitor:'U&E + K⁺ at 1 week, 1 month, then regularly',
      counsel:'"A third tablet that adds extra protection. We watch your potassium closely; men sometimes get breast tenderness and we can switch."',
      detail:{ 'Key teaching':'Add if still symptomatic on ACEi/ARB + β-blocker. Eplerenone if gynaecomastia. Avoid if K⁺ high or eGFR <30.' },
      conditions: [
        {"kind":"avoid","label":"K⁺ >5.0 mmol/L","text":"K⁺ >5.0 — contraindicated"},
        {"kind":"caution","label":"Spironolactone gynaecomastia","text":"Spiro gynaecomastia — switch to eplerenone"},
        {"kind":"note","label":"Ejection fraction: HFpEF (preserved EF)","text":"HFpEF — may help selected patients; not core prognostic"}
      ]
    },
    // -------- SGLT2i --------
    {
      id:'sglt2',
      name:'SGLT2 inhibitor — dapagliflozin / empagliflozin',
      examples:'Dapagliflozin 10 mg OD',
      step:'Pillar 4',
      source:'NICE NG106 · NICE TA679/TA773',
      sideEffects:'Genital thrush, volume depletion, rare euglycaemic DKA',
      monitor:'Counsel sick-day rules; works irrespective of diabetes status',
      counsel:'"A once-daily tablet that protects the heart and kidneys — even if you don\'t have diabetes. Keep good genital hygiene; pause it if you\'re acutely unwell."',
      detail:{ 'Key teaching':'Now a pillar of HFrEF therapy regardless of diabetes. Also recommended in HFpEF. Hold during acute illness (DKA risk).' },
      conditions: [
        {"kind":"favoured","label":"Ejection fraction: HFpEF (preserved EF)","text":"HFpEF — SGLT2i is the recommended disease-modifying option"},
        {"kind":"favoured","label":"Type 2 diabetes","text":"Coexisting T2DM — dual cardiac + glycaemic benefit"}
      ]
    },
    // -------- LOOP DIURETIC --------
    {
      id:'loop',
      name:'Loop diuretic — furosemide / bumetanide',
      examples:'Furosemide 40 mg OD (titrate to symptoms)',
      step:'Symptom relief',
      source:'NICE NG106 §1.4 · BNF',
      sideEffects:'Hypokalaemia, hyponatraemia, AKI, gout, hearing (high dose)',
      monitor:'U&E, weight, symptoms; use lowest effective dose',
      counsel:'"This tablet shifts the fluid off your lungs and legs so you breathe easier — it controls symptoms but it\'s the other tablets that prolong life."',
      detail:{ 'Key teaching':'Treats congestion, not mortality. Titrate to euvolaemia, then minimise. Teach flexible dosing by weight.' },
      conditions: [
        {"kind":"caution","label":"Active gout","text":"Gout — diuretics precipitate flares; balance against congestion"},
        {"kind":"favoured","label":"Congestion / fluid overload","text":"Fluid overload — loop diuretic for symptom relief"}
      ]
    },
    // -------- HYDRALAZINE/NITRATE --------
    {
      id:'hydralazine',
      name:'Hydralazine + nitrate',
      examples:'Hydralazine + isosorbide dinitrate',
      step:'Specific groups',
      source:'NICE NG106 §1.4',
      sideEffects:'Headache, flushing, lupus-like syndrome (hydralazine)',
      monitor:'BP; specialist guided',
      counsel:'"An add-on combination that particularly helps certain patients, or when the usual tablets can\'t be used."',
      detail:{ 'Key teaching':'Consider in people of African/Caribbean origin with moderate–severe HFrEF, or where ACEi/ARB not tolerated (renal).' },
      conditions: [
        {"kind":"avoid","label":"Ejection fraction: HFpEF (preserved EF)","text":"Not indicated in HFpEF"},
        {"kind":"favoured","label":"Black African / Caribbean origin","text":"African/Caribbean origin with moderate–severe HFrEF — added benefit"},
        {"kind":"favoured","label":"ACEi-induced cough","text":"Where ACEi/ARB not tolerated — alternative vasodilator combo"},
        {"kind":"favoured","label":"Prior angioedema","text":"Where ACEi/ARB not tolerated — alternative vasodilator combo"}
      ]
    },
    // -------- IVABRADINE --------
    {
      id:'ivabradine',
      name:'Ivabradine',
      examples:'Ivabradine 5 mg BD (specialist)',
      step:'Niche add-on',
      source:'NICE NG106 · NICE TA267',
      sideEffects:'Bradycardia, luminous visual phenomena (phosphenes)',
      monitor:'HR; sinus rhythm only',
      counsel:'"An extra tablet that slows the heart rate when the beta-blocker alone isn\'t enough — only if your rhythm is regular."',
      detail:{ 'Key teaching':'Sinus rhythm + HR ≥75 + EF ≤35% on maximal β-blocker (or β-blocker intolerant). No effect in AF.' },
      conditions: [
        {"kind":"avoid","label":"Atrial fibrillation","text":"AF — ivabradine ineffective (needs sinus rhythm)"},
        {"kind":"note","label":"Ejection fraction: HFrEF (reduced EF ≤40%)","text":"Only when sinus HR ≥75 persists on maximal β-blocker"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG106 — Chronic heart failure in adults: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng106' },
    { label:'NICE NG106 — chronic heart failure', url:'https://www.nice.org.uk/guidance/ng106' },
    { label:'BNF — Chronic heart failure treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/chronic-heart-failure/' }
  ],
});
