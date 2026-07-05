/* ============================================
   Medication Chooser — Heart Failure (HFrEF)
   NICE NG106 · CKS Chronic heart failure · BNF
   ============================================ */
MedChooser.register('heart-failure', {
  title: 'Chronic heart failure — disease-modifying therapy',
  subtitle: 'HFrEF prognosis rests on the "four pillars" (ACEi/ARB→ARNI, β-blocker, MRA, SGLT2i). Diuretics treat congestion but not mortality. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG106 · CKS Chronic heart failure · BNF',

  factors: [
    // Phenotype
    { group:'Phenotype', id:'type', label:'Ejection fraction', options:[
      { value:'hfref', label:'HFrEF (reduced EF ≤40%)' },
      { value:'hfpef', label:'HFpEF (preserved EF)' },
    ]},
    { group:'Phenotype', id:'congested', label:'Congestion / fluid overload', note:'Oedema, breathlessness' },
    { group:'Phenotype', id:'nyha', label:'NYHA III–IV symptoms' },
    { group:'Phenotype', id:'sinus75', label:'Sinus rhythm, HR ≥75 on max β-blocker', note:'Ivabradine niche' },
    { group:'Phenotype', id:'afro', label:'Black African / Caribbean origin', note:'Hydralazine + nitrate evidence' },

    // Bloods / haemodynamics
    { group:'Bloods / haemodynamics', id:'egfr', label:'eGFR', numeric:{ min:5, max:120, step:5, unit:'mL/min' } },
    { group:'Bloods / haemodynamics', id:'k_high', label:'K⁺ >5.0 mmol/L' },
    { group:'Bloods / haemodynamics', id:'lowbp', label:'Symptomatic hypotension (SBP <100)' },
    { group:'Bloods / haemodynamics', id:'dm', label:'Type 2 diabetes' },

    // Comorbidities
    { group:'Comorbidities', id:'asthma', label:'Asthma / reversible airways' },
    { group:'Comorbidities', id:'ckd', label:'CKD / ACR raised' },
    { group:'Comorbidities', id:'gout', label:'Active gout' },
    { group:'Comorbidities', id:'af', label:'Atrial fibrillation' },

    // Allergy / prior
    { group:'Allergy / prior', id:'cough_acei', label:'ACEi-induced cough' },
    { group:'Allergy / prior', id:'angioed', label:'Prior angioedema' },
    { group:'Allergy / prior', id:'gynaeco', label:'Spironolactone gynaecomastia' },

    // Current meds / context
    { group:'Current meds / context', id:'nsaid', label:'Regular NSAIDs', note:'Worsen HF — review/stop' },
    { group:'Current meds / context', id:'ccb_neg', label:'On verapamil/diltiazem', note:'Contraindicated in HFrEF' },
    { group:'Current meds / context', id:'preg', label:'Pregnant or planning' },
  ],

  flags: (f) => {
    const out = [];
    if (f.k_high) out.push({ tone:'red', text:'K⁺ >5.0 — caution/avoid ACEi/ARB/ARNI/MRA; recheck and treat' });
    if (f.ccb_neg) out.push({ tone:'red', text:'Verapamil/diltiazem — negatively inotropic, contraindicated in HFrEF' });
    if (f.nsaid) out.push({ tone:'amber', text:'NSAIDs cause fluid retention + AKI — stop where possible' });
    if (f.type === 'hfpef') out.push({ tone:'amber', text:'HFpEF — no drug proven to cut mortality; treat congestion + comorbidities; SGLT2i now recommended' });
    if (f.lowbp) out.push({ tone:'amber', text:'Hypotension — uptitrate slowly; prioritise prognostic drugs over diuretic dose' });
    return out;
  },

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
      evaluate(f){
        if (f.type === 'hfpef') return { tier:'acceptable', reasons:[{kind:'neutral', text:'HFpEF — for comorbidity (HTN), not prognostic'}] };
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — teratogenic'}] };
        if (f.angioed) return { tier:'avoid', reasons:[{kind:'bad', text:'Prior angioedema — contraindicated'}] };
        if (f.cough_acei) return { tier:'avoid', reasons:[{kind:'bad', text:'ACEi cough — switch to ARB'}] };
        if (f.k_high) return { tier:'avoid', reasons:[{kind:'bad', text:'K⁺ >5.0 — correct first'}] };
        const r = [];
        const egfr = Number(f.egfr) || 999;
        if (egfr < 30) r.push({kind:'bad', text:'eGFR <30 — specialist input; cautious titration'});
        if (f.nsaid) r.push({kind:'bad', text:'NSAID — triple-whammy AKI risk'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Core first-line HFrEF therapy with a β-blocker'}] };
      }
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
      evaluate(f){
        if (f.type === 'hfpef') return { tier:'acceptable', reasons:[{kind:'neutral', text:'HFpEF — comorbidity indication only'}] };
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — teratogenic'}] };
        if (f.k_high) return { tier:'avoid', reasons:[{kind:'bad', text:'K⁺ >5.0 — correct first'}] };
        const r = [];
        if (f.cough_acei) { r.push({kind:'good', text:'ACEi cough — ARB is the direct switch'}); return { tier:'preferred', reasons:r }; }
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Alternative to ACEi (cough/intolerance)'}] };
      }
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
      evaluate(f){
        if (f.type !== 'hfref') return { tier:'avoid', reasons:[{kind:'bad', text:'Only for HFrEF'}] };
        if (f.angioed) return { tier:'avoid', reasons:[{kind:'bad', text:'Angioedema history — contraindicated'}] };
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — contraindicated'}] };
        const r = [];
        if (f.nyha) r.push({kind:'good', text:'Persistent symptoms (NYHA III–IV) on optimal therapy — escalate to ARNI'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Escalation when symptomatic despite ACEi + β-blocker + MRA'}] };
      }
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
      evaluate(f){
        if (f.asthma) return { tier:'avoid', reasons:[{kind:'bad', text:'Asthma — bronchospasm risk (specialist may use cardioselective)'}] };
        if (f.type === 'hfpef') return { tier:'acceptable', reasons:[{kind:'neutral', text:'HFpEF — rate control / comorbidity, not prognostic'}] };
        const r = [];
        if (f.af) r.push({kind:'good', text:'Coexisting AF — rate control + prognosis'});
        if (f.congested) r.push({kind:'bad', text:'Decompensated/congested — stabilise first, do not start during acute overload'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Core prognostic therapy with ACEi/ARB'}] };
      }
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
      evaluate(f){
        if (f.type === 'hfpef') return { tier:'acceptable', reasons:[{kind:'neutral', text:'HFpEF — may help selected patients; not core prognostic'}] };
        if (f.k_high) return { tier:'avoid', reasons:[{kind:'bad', text:'K⁺ >5.0 — contraindicated'}] };
        const egfr = Number(f.egfr) || 999;
        if (egfr < 30) return { tier:'avoid', reasons:[{kind:'bad', text:'eGFR <30 — avoid/specialist'}] };
        const r = [];
        if (f.gynaeco) r.push({kind:'bad', text:'Spiro gynaecomastia — switch to eplerenone'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Add-on prognostic therapy for HFrEF'}] };
      }
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
      evaluate(f){
        const r = [];
        if (f.dm) r.push({kind:'good', text:'Coexisting T2DM — dual cardiac + glycaemic benefit'});
        if (f.type === 'hfpef') r.push({kind:'good', text:'HFpEF — SGLT2i is the recommended disease-modifying option'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Prognostic across HFrEF and HFpEF, with or without diabetes'}] };
      }
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
      evaluate(f){
        const r = [];
        if (f.congested) r.push({kind:'good', text:'Fluid overload — loop diuretic for symptom relief'});
        if (f.gout) r.push({kind:'bad', text:'Gout — diuretics precipitate flares; balance against congestion'});
        if (!f.congested) r.push({kind:'neutral', text:'Use only for congestion; minimise when euvolaemic'});
        return { tier:'acceptable', reasons: r };
      }
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
      evaluate(f){
        if (f.type === 'hfpef') return { tier:'avoid', reasons:[{kind:'bad', text:'Not indicated in HFpEF'}] };
        const r = [];
        if (f.afro) r.push({kind:'good', text:'African/Caribbean origin with moderate–severe HFrEF — added benefit'});
        if (f.angioed || f.cough_acei) r.push({kind:'good', text:'Where ACEi/ARB not tolerated — alternative vasodilator combo'});
        const preferred = f.afro;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reserved for specific groups; specialist guided'}] };
      }
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
      evaluate(f){
        if (f.af) return { tier:'avoid', reasons:[{kind:'bad', text:'AF — ivabradine ineffective (needs sinus rhythm)'}] };
        if (f.type !== 'hfref') return { tier:'avoid', reasons:[{kind:'bad', text:'HFrEF only'}] };
        const r = [];
        if (f.sinus75) { r.push({kind:'good', text:'Sinus rhythm, HR ≥75 on max β-blocker — licensed niche'}); return { tier:'acceptable', reasons:r }; }
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Only when sinus HR ≥75 persists on maximal β-blocker'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG106 — Chronic heart failure in adults: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng106' },
    { label:'NICE CKS — Heart failure (chronic)', url:'https://cks.nice.org.uk/topics/heart-failure-chronic/' },
    { label:'BNF — Chronic heart failure treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/chronic-heart-failure/' },
  ],
});
