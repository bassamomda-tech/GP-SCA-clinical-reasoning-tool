/* ============================================
   Medication Chooser — TIA / Ischaemic Stroke (secondary prevention)
   NICE NG128 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('tia-stroke', {
  title: 'TIA / ischaemic stroke — secondary prevention',
  subtitle: 'Antiplatelet vs anticoagulant, plus statin and BP control after a confirmed ischaemic event (NICE NG128).',
  guideline: 'NICE NG128 · SPC',


  safety: [
    {"tone":"red","label":"","text":"Confirm ischaemic mechanism on imaging and EXCLUDE haemorrhage before any antithrombotic"},
    {"tone":"amber","label":"Symptomatic carotid stenosis","text":"Symptomatic carotid stenosis — refer for endarterectomy within the NICE NG128 timeframe (surgery within 2 weeks of symptom onset) alongside medical therapy"},
    {"tone":"red","label":"Mechanical heart valve / mitral stenosis","text":"Mechanical valve / mitral stenosis — DOACs contraindicated; warfarin only"},
    {"tone":"amber","label":"Prior major / intracranial bleed","text":"Prior intracranial bleed — antithrombotic decision needs specialist risk–benefit review"}
  ],

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
      conditions: [
        {"kind":"avoid","label":"Atrial fibrillation (cardioembolic)","text":"AF (cardioembolic) — anticoagulation indicated, antiplatelet inferior"},
        {"kind":"avoid","label":"Clopidogrel intolerance / allergy","text":"Clopidogrel intolerance — use aspirin + dipyridamole MR"},
        {"kind":"favoured","label":"Ischaemic event confirmed (imaging done, haemorrhage excluded)","text":"Confirmed non-cardioembolic event — first-line long-term antiplatelet"},
        {"kind":"note","label":"High GI risk (needs gastroprotection)","text":"If PPI needed, use lansoprazole/pantoprazole (not omeprazole)"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"Atrial fibrillation (cardioembolic)","text":"AF — needs anticoagulation, not antiplatelet"},
        {"kind":"avoid","label":"Aspirin allergy","text":"Aspirin allergy — cannot use"},
        {"kind":"favoured","label":"Clopidogrel intolerance / allergy","text":"Clopidogrel not tolerated — this is the recommended alternative"}
      ]
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
        'Key teaching': 'First-line anticoagulant for AF-related stroke once haemorrhage excluded and timing safe. Preferred over warfarin (NICE NG196). Apixaban has the lowest bleeding profile.'
      },
      conditions: [
        {"kind":"avoid","label":"eGFR <15 / dialysis","text":"eGFR <15 / dialysis — DOACs contraindicated"},
        {"kind":"avoid","label":"Mechanical heart valve / mitral stenosis","text":"Mechanical valve / mitral stenosis — DOAC contraindicated; warfarin only"},
        {"kind":"favoured","label":"Atrial fibrillation (cardioembolic)","text":"AF — anticoagulation is first-line, DOAC preferred over warfarin"}
      ]
    },

    // -------- WARFARIN --------
    {
      id:'warfarin',
      name:'Warfarin',
      examples:'Warfarin, target INR 2.5 (2–3); valve INR per type',
      step:'Anticoag — valve / DOAC unsuitable',
      source:'NICE NG128 · SPC',
      sideEffects:'Bleeding, INR variability (diet/drug interactions), warfarin skin necrosis (rare)',
      monitor:'INR — frequent until stable, then up to every 12 weeks',
      counsel:'"A blood thinner that needs regular blood tests to keep it in the safe range. It\'s the right choice when you have a mechanical valve or the newer tablets aren\'t suitable."',
      detail:{
        'Dose': 'Loaded to target INR 2.5 (range 2–3) for AF; higher target for mechanical valves',
        'Interactions': 'Extensive — antibiotics, antifungals, amiodarone, NSAIDs, alcohol, cranberry, many others',
        'Key teaching': 'Mandatory (over DOAC) for mechanical valves and moderate–severe mitral stenosis. Also when DOAC contraindicated (severe renal impairment) or strongly preferred for monitoring.'
      },
      conditions: [
        {"kind":"favoured","label":"Mechanical heart valve / mitral stenosis","text":"Mechanical valve / mitral stenosis — warfarin is the only suitable anticoagulant"},
        {"kind":"note","label":"Atrial fibrillation (cardioembolic)","text":"AF — DOAC preferred first-line unless valve/renal reasons or patient preference"}
      ]
    },

    // -------- STATIN --------
    {
      id:'statin',
      name:'High-intensity statin',
      examples:'Atorvastatin 80 mg OD',
      step:'Secondary prevention',
      source:'NICE NG128 §1.5 · NICE NG238',
      sideEffects:'Myalgia, deranged LFTs, rarely myopathy',
      monitor:'LFTs baseline, 3 and 12 months; non-fasting lipids; CK if myalgia',
      counsel:'"This lowers cholesterol and stabilises the arteries supplying the brain — a key part of preventing another stroke, even if your cholesterol looks normal."',
      detail:{
        'Dose': 'Atorvastatin 80 mg OD (lower dose if interactions, high adverse-effect risk or patient preference); start ~48 h after stroke onset, not in the hyperacute phase',
        'Interactions': 'Amlodipine/diltiazem (avoid simvastatin), macrolides, grapefruit',
        'Key teaching': 'Indicated after ischaemic stroke/TIA regardless of baseline cholesterol. Avoid in haemorrhagic stroke unless other vascular indication.'
      },
      conditions: [
        {"kind":"caution","label":"Statin myalgia / prior intolerance","text":"Prior myalgia — try lower dose / alternative statin before abandoning"},
        {"kind":"favoured","label":"Ischaemic event confirmed (imaging done, haemorrhage excluded)","text":"Confirmed ischaemic event — high-intensity statin recommended regardless of lipid level"}
      ]
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
      conditions: [
        {"kind":"favoured","label":"Hypertension","text":"Hypertension — BP control central to stroke secondary prevention"},
        {"kind":"note","label":"Within 14 days of a disabling stroke","text":"Avoid aggressive BP lowering in the acute phase"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG128 — Stroke and TIA in over 16s', url:'https://www.nice.org.uk/guidance/ng128' },
    { label:'NICE NG128 — stroke and TIA', url:'https://www.nice.org.uk/guidance/ng128' },
    { label:'NICE NG196 — Atrial fibrillation: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng196' },
    { label:'BNF — Stroke treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/stroke/' }
  ],
});
