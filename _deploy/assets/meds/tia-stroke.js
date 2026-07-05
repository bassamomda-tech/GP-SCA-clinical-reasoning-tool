/* ============================================
   Medication Chooser — TIA / Ischaemic Stroke (secondary prevention)
   NICE NG128 · CKS Stroke and TIA · BNF
   ============================================ */
MedChooser.register('tia-stroke', {
  title: 'TIA / ischaemic stroke — secondary prevention',
  subtitle: 'Antiplatelet vs anticoagulant, plus statin and BP control after a confirmed ischaemic event (NICE NG128). Tick the patient profile; cards re-tier live.',
  guideline: 'NICE NG128 · CKS Stroke and TIA · BNF',

  factors: [
    // Event / mechanism
    { group:'Event & mechanism', id:'confirmed', label:'Ischaemic event confirmed (imaging done, haemorrhage excluded)', note:'Anticoagulation only after CT excludes bleed' },
    { group:'Event & mechanism', id:'af', label:'Atrial fibrillation (cardioembolic)', note:'Anticoagulate, not antiplatelet' },
    { group:'Event & mechanism', id:'carotid', label:'Symptomatic carotid stenosis', note:'Refer for endarterectomy assessment' },
    { group:'Event & mechanism', id:'acute', label:'Within 14 days of a disabling stroke', note:'Delay anticoag — haemorrhagic transformation risk' },

    // Comorbidities
    { group:'Comorbidities', id:'htn', label:'Hypertension' },
    { group:'Comorbidities', id:'dm',  label:'Type 2 diabetes' },
    { group:'Comorbidities', id:'ckd', label:'CKD (eGFR 15–50)', note:'DOAC dose adjustment' },
    { group:'Comorbidities', id:'ckd_severe', label:'eGFR <15 / dialysis', note:'DOACs contraindicated' },
    { group:'Comorbidities', id:'mech_valve', label:'Mechanical heart valve / mitral stenosis', note:'Warfarin only' },
    { group:'Comorbidities', id:'liver', label:'Significant liver disease', note:'DOAC caution' },

    // Bleeding risk
    { group:'Bleeding risk', id:'bleed_hx', label:'Prior major / intracranial bleed' },
    { group:'Bleeding risk', id:'pud', label:'Active peptic ulcer / recent GI bleed' },
    { group:'Bleeding risk', id:'falls', label:'Recurrent falls / frailty' },
    { group:'Bleeding risk', id:'alcohol', label:'Harmful alcohol use' },

    // Allergy / prior intolerance
    { group:'Allergy / prior intolerance', id:'clopi_intol', label:'Clopidogrel intolerance / allergy' },
    { group:'Allergy / prior intolerance', id:'asa_allergy', label:'Aspirin allergy' },
    { group:'Allergy / prior intolerance', id:'statin_myalgia', label:'Statin myalgia / prior intolerance' },

    // Current medications / context
    { group:'Current medications', id:'on_anticoag', label:'Already anticoagulated' },
    { group:'Current medications', id:'ppi_needed', label:'High GI risk (needs gastroprotection)' },

    // Preference / context
    { group:'Preference / context', id:'adherence', label:'Adherence concern / prefers monitored therapy', note:'May favour warfarin INR review' },
  ],

  flags: (f) => {
    const out = [];
    if (!f.confirmed) out.push({ tone:'red', text:'Confirm ischaemic mechanism on imaging and EXCLUDE haemorrhage before any antithrombotic' });
    if (f.af && f.acute) out.push({ tone:'amber', text:'AF + recent disabling stroke — delay anticoagulation (haemorrhagic transformation); specialist-led timing (often 1–2 weeks)' });
    if (f.mech_valve) out.push({ tone:'red', text:'Mechanical valve / mitral stenosis — DOACs contraindicated; warfarin only' });
    if (f.bleed_hx) out.push({ tone:'amber', text:'Prior intracranial bleed — antithrombotic decision needs specialist risk–benefit review' });
    if (f.carotid) out.push({ tone:'amber', text:'Symptomatic carotid stenosis — refer for endarterectomy within NICE timeframe alongside medical therapy' });
    return out;
  },

  drugs: [
    // -------- CLOPIDOGREL --------
    {
      id:'clopidogrel',
      name:'Clopidogrel (antiplatelet)',
      examples:'Clopidogrel 75 mg OD (after 300 mg load)',
      step:'1st-line (non-AF)',
      source:'NICE NG128 §1.4.1',
      sideEffects:'Bleeding, bruising, dyspepsia, rash',
      monitor:'Bleeding. No routine bloods.',
      counsel:'"A daily tablet to stop the platelets clumping and forming clots — the main long-term protection after a TIA or stroke that wasn\'t caused by an irregular heartbeat."',
      detail:{
        'Dose': 'Clopidogrel 75 mg OD long-term (300 mg loading dose acutely)',
        'Interactions': 'Omeprazole/esomeprazole (reduce clopidogrel activation — use lansoprazole/pantoprazole), other antithrombotics',
        'Key teaching': 'First-line long-term antiplatelet after non-cardioembolic TIA/ischaemic stroke. NOT for AF — those patients need anticoagulation.'
      },
      evaluate(f){
        if (f.af) return { tier:'avoid', reasons:[{kind:'bad', text:'AF (cardioembolic) — anticoagulation indicated, antiplatelet inferior'}] };
        if (f.clopi_intol) return { tier:'avoid', reasons:[{kind:'bad', text:'Clopidogrel intolerance — use aspirin + dipyridamole MR'}] };
        const r = [];
        if (f.confirmed && !f.af) r.push({kind:'good', text:'Confirmed non-cardioembolic event — first-line long-term antiplatelet'});
        if (f.ppi_needed) r.push({kind:'neutral', text:'If PPI needed, use lansoprazole/pantoprazole (not omeprazole)'});
        return { tier: f.af ? 'acceptable' : 'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line antiplatelet after non-AF TIA/stroke'}] };
      }
    },

    // -------- ASPIRIN + DIPYRIDAMOLE --------
    {
      id:'asa_dip',
      name:'Aspirin + dipyridamole MR',
      examples:'Aspirin 75 mg OD + dipyridamole MR 200 mg BD',
      step:'Alt 1st-line (non-AF)',
      source:'NICE NG128 §1.4.1',
      sideEffects:'Dipyridamole headache (common, settles), bleeding, GI upset',
      monitor:'Bleeding. Warn re: headache in first 1–2 weeks.',
      counsel:'"An alternative combination if clopidogrel doesn\'t suit. The second tablet can cause headaches at first — these usually settle within a couple of weeks."',
      detail:{
        'Dose': 'Aspirin 75 mg OD + dipyridamole MR 200 mg BD',
        'Interactions': 'Anticoagulants, other antiplatelets, NSAIDs',
        'Key teaching': 'The alternative when clopidogrel is not tolerated. Aspirin alone (75 mg) only if both clopidogrel and dipyridamole are unsuitable.'
      },
      evaluate(f){
        if (f.af) return { tier:'avoid', reasons:[{kind:'bad', text:'AF — needs anticoagulation, not antiplatelet'}] };
        if (f.asa_allergy) return { tier:'avoid', reasons:[{kind:'bad', text:'Aspirin allergy — cannot use'}] };
        const r = [];
        if (f.clopi_intol) r.push({kind:'good', text:'Clopidogrel not tolerated — this is the recommended alternative'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Alternative when clopidogrel unsuitable'}] };
      }
    },

    // -------- DOAC --------
    {
      id:'doac',
      name:'DOAC (anticoagulant)',
      examples:'Apixaban 5 mg BD · Rivaroxaban · Edoxaban · Dabigatran',
      step:'1st-line if AF',
      source:'NICE NG128 §1.4 · NICE NG196 (AF)',
      sideEffects:'Bleeding (GI, intracranial less than warfarin), bruising',
      monitor:'Renal function at least annually (more often if CKD/elderly). No routine INR.',
      counsel:'"Because the TIA/stroke came from an irregular heartbeat, you need a blood thinner rather than an antiplatelet — it\'s far more protective for this type. No regular blood tests needed."',
      detail:{
        'Dose': 'Apixaban 5 mg BD (2.5 mg BD if ≥2 of: age ≥80, weight ≤60 kg, creatinine ≥133)',
        'Interactions': 'Other antithrombotics, strong CYP3A4/P-gp inhibitors/inducers, azoles',
        'Key teaching': 'First-line anticoagulant for AF-related stroke once haemorrhage excluded and timing safe. Preferred over warfarin (NICE). Apixaban has the lowest bleeding profile.'
      },
      evaluate(f){
        if (f.mech_valve) return { tier:'avoid', reasons:[{kind:'bad', text:'Mechanical valve / mitral stenosis — DOAC contraindicated; warfarin only'}] };
        if (f.ckd_severe) return { tier:'avoid', reasons:[{kind:'bad', text:'eGFR <15 / dialysis — DOACs contraindicated'}] };
        if (!f.af) return { tier:'acceptable', reasons:[{kind:'neutral', text:'No AF — anticoagulation not indicated for routine secondary prevention; antiplatelet preferred'}] };
        const r = [];
        if (f.af) r.push({kind:'good', text:'AF — anticoagulation is first-line, DOAC preferred over warfarin'});
        if (f.acute) r.push({kind:'bad', text:'Within 14 days of disabling stroke — delay start (haemorrhagic transformation)'});
        if (f.ckd) r.push({kind:'neutral', text:'CKD eGFR 15–50 — dose-adjust (e.g. apixaban/edoxaban) and monitor renal function'});
        if (f.bleed_hx) r.push({kind:'bad', text:'Prior intracranial bleed — specialist risk–benefit before anticoagulating'});
        if (f.ppi_needed) r.push({kind:'neutral', text:'High GI bleed risk — co-prescribe a PPI'});
        return { tier: (f.af && !f.acute) ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'good', text:'First-line anticoagulant for AF-related stroke'}] };
      }
    },

    // -------- WARFARIN --------
    {
      id:'warfarin',
      name:'Warfarin',
      examples:'Warfarin, target INR 2.5 (2–3); valve INR per type',
      step:'Anticoag — valve / DOAC unsuitable',
      source:'NICE NG128 · BNF',
      sideEffects:'Bleeding, INR variability (diet/drug interactions), warfarin skin necrosis (rare)',
      monitor:'INR — frequent until stable, then up to every 12 weeks',
      counsel:'"A blood thinner that needs regular blood tests to keep it in the safe range. It\'s the right choice when you have a mechanical valve or the newer tablets aren\'t suitable."',
      detail:{
        'Dose': 'Loaded to target INR 2.5 (range 2–3) for AF; higher target for mechanical valves',
        'Interactions': 'Extensive — antibiotics, antifungals, amiodarone, NSAIDs, alcohol, cranberry, many others',
        'Key teaching': 'Mandatory (over DOAC) for mechanical valves and moderate–severe mitral stenosis. Also when DOAC contraindicated (severe renal impairment) or strongly preferred for monitoring.'
      },
      evaluate(f){
        const r = [];
        if (f.mech_valve) return { tier:'preferred', reasons:[{kind:'good', text:'Mechanical valve / mitral stenosis — warfarin is the only suitable anticoagulant'}] };
        if (f.ckd_severe) { r.push({kind:'good', text:'Severe renal impairment — option where DOACs are contraindicated'}); }
        if (f.af) r.push({kind:'neutral', text:'AF — DOAC preferred first-line unless valve/renal reasons or patient preference'});
        if (f.adherence) r.push({kind:'good', text:'Preference for monitored therapy / INR review'});
        if (!f.af && !f.mech_valve) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Only if an anticoagulation indication exists'}] };
        return { tier:'acceptable', reasons: r };
      }
    },

    // -------- STATIN --------
    {
      id:'statin',
      name:'High-intensity statin',
      examples:'Atorvastatin 20–80 mg OD',
      step:'Secondary prevention',
      source:'NICE NG128 §1.5 · NICE NG238',
      sideEffects:'Myalgia, deranged LFTs, rarely myopathy',
      monitor:'LFTs baseline, 3 and 12 months; non-fasting lipids; CK if myalgia',
      counsel:'"This lowers cholesterol and stabilises the arteries supplying the brain — a key part of preventing another stroke, even if your cholesterol looks normal."',
      detail:{
        'Dose': 'Atorvastatin 20–80 mg OD (start ~48 h after stroke onset, not in the hyperacute phase)',
        'Interactions': 'Amlodipine/diltiazem (avoid simvastatin), macrolides, grapefruit',
        'Key teaching': 'Indicated after ischaemic stroke/TIA regardless of baseline cholesterol. Avoid in haemorrhagic stroke unless other vascular indication.'
      },
      evaluate(f){
        const r = [];
        if (f.statin_myalgia) r.push({kind:'bad', text:'Prior myalgia — try lower dose / alternative statin before abandoning'});
        if (f.confirmed) r.push({kind:'good', text:'Confirmed ischaemic event — high-intensity statin recommended regardless of lipid level'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Mandatory secondary prevention after ischaemic TIA/stroke'}] };
      }
    },

    // -------- ANTIHYPERTENSIVE --------
    {
      id:'bp',
      name:'Antihypertensive (BP control)',
      examples:'ACEi/ARB + thiazide-like, or CCB per NG136',
      step:'Secondary prevention',
      source:'NICE NG128 §1.5 · NICE NG136',
      sideEffects:'Class-dependent (see Hypertension topic)',
      monitor:'BP target; U&E if ACEi/ARB/diuretic',
      counsel:'"Lowering your blood pressure is one of the most powerful ways to prevent another stroke — we\'ll start gently and build up."',
      detail:{
        'Dose': 'Per NICE NG136; avoid lowering BP too fast in the acute phase',
        'Key teaching': 'Initiate/optimise BP-lowering after the acute phase (typically not hyperacutely). Combine with the Hypertension chooser for drug selection.'
      },
      evaluate(f){
        const r = [];
        if (f.htn) r.push({kind:'good', text:'Hypertension — BP control central to stroke secondary prevention'});
        if (f.acute) r.push({kind:'neutral', text:'Avoid aggressive BP lowering in the acute phase'});
        return { tier: f.htn ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Optimise BP after the acute phase for all patients'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG128 — Stroke and TIA in over 16s', url:'https://www.nice.org.uk/guidance/ng128' },
    { label:'NICE CKS — Stroke and TIA', url:'https://cks.nice.org.uk/topics/stroke-tia/' },
    { label:'NICE NG196 — Atrial fibrillation: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng196' },
    { label:'BNF — Stroke treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/stroke/' },
  ],
});
