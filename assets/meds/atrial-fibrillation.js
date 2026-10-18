/* ============================================
   Medication Chooser — Atrial Fibrillation
   NICE NG196 · SPC
   Covers anticoagulation + rate control
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('atrial-fibrillation', {
  title: 'Atrial fibrillation — anticoagulation & rate control',
  subtitle: 'Two decisions: stroke prevention (DOAC-first per NG196) and rate control (β-blocker or rate-limiting CCB first-line).',
  guideline: 'NICE NG196 · SPC',


  safety: [
    {"tone":"amber","label":"High bleeding risk (ORBIT/HAS-BLED)","text":"High bleeding risk — modify reversible factors; do not use as sole reason to withhold"},
    {"tone":"red","label":"Recent major / life-threatening bleed","text":"Recent major bleed — pause/avoid anticoagulation; specialist input"},
    {"tone":"red","label":"Mechanical heart valve","text":"Valvular AF (mechanical valve / mod–severe MS) — warfarin ONLY; DOACs contraindicated"}
  ],

  drugs: [
    // ============ ANTICOAGULATION ============
    {
      id:'doac',
      name:'DOAC — apixaban / rivaroxaban / edoxaban / dabigatran',
      examples:'Apixaban 5 mg BD (2.5 mg if 2 of: ≥80y, ≤60kg, Cr ≥133)',
      step:'Anticoag · 1st-line',
      source:'NICE NG196 §1.6 (DOAC first-line)',
      sideEffects:'Bleeding (lower intracranial than warfarin); dabigatran — dyspepsia',
      monitor:'Renal function ≥annually (more often if eGFR <60 or frail); no routine INR',
      counsel:'"A fixed-dose blood thinner — no regular blood tests like the old warfarin. Take it consistently; tell any dentist/surgeon you\'re on it."',
      detail:{
        'Dose': 'Apixaban 5 mg BD · Rivaroxaban 20 mg OD with food · Edoxaban 60 mg OD · Dabigatran 150 mg BD',
        'Interactions': 'Strong P-gp/CYP3A4 inducers/inhibitors; avoid with other anticoagulants',
        'Key teaching': 'NG196: offer a DOAC first-line. Apixaban often preferred when bleeding risk a concern. Reduce/avoid by CrCl.'
      },
      conditions: [
        {"kind":"avoid","label":"Mechanical heart valve","text":"Valvular AF — DOACs contraindicated; use warfarin"},
        {"kind":"avoid","label":"Moderate–severe mitral stenosis","text":"Valvular AF — DOACs contraindicated; use warfarin"},
        {"kind":"avoid","label":"Dialysis / CrCl <15","text":"CrCl <15 / dialysis — DOACs not recommended"},
        {"kind":"caution","label":"Strong P-gp/CYP3A4 interacting drug","text":"Interacting P-gp/CYP3A4 drug — check before choosing DOAC"},
        {"kind":"caution","label":"Dyspepsia / upper-GI symptoms","text":"Dyspepsia — avoid dabigatran specifically"},
        {"kind":"favoured","label":"High bleeding risk (ORBIT/HAS-BLED)","text":"Bleeding risk — apixaban has the lowest GI/ICH bleed profile"},
        {"kind":"favoured","label":"Wants/needs rapid reversibility","text":"Reversal agents exist (idarucizumab/andexanet) where needed"}
      ]
    },
    {
      id:'warfarin',
      name:'Warfarin (VKA)',
      examples:'Dose by INR (target 2.5, range 2–3)',
      step:'Anticoag · valvular / DOAC-unsuitable',
      source:'NICE NG196 · SPC',
      sideEffects:'Bleeding, many food/drug interactions, narrow therapeutic index',
      monitor:'Regular INR (TTR ≥65%); reassess if poor control',
      counsel:'"Effective but needs regular blood tests to keep it in range, and it interacts with foods and other medicines. For your valve, it\'s the only safe option."',
      detail:{
        'Dose': 'Variable; INR target 2.5 (2–3); mechanical valves often higher target',
        'Key teaching': 'Reserved for valvular AF or where DOACs are unsuitable. Vitamin K reversal. Assess TTR if INR control poor.'
      },
      conditions: [
        {"kind":"favoured","label":"Mechanical heart valve","text":"Valvular AF — warfarin is the required anticoagulant"},
        {"kind":"favoured","label":"Moderate–severe mitral stenosis","text":"Valvular AF — warfarin is the required anticoagulant"},
        {"kind":"favoured","label":"Dialysis / CrCl <15","text":"Severe renal impairment — warfarin where DOAC not recommended"},
        {"kind":"favoured","label":"Strong P-gp/CYP3A4 interacting drug","text":"Complex interactions can be managed via INR titration"},
        {"kind":"favoured","label":"Adherence concerns","text":"INR monitoring provides regular oversight/contact"}
      ]
    },
    {
      id:'aspirin_af',
      name:'Aspirin (for stroke prevention)',
      examples:'Not for AF stroke prevention',
      step:'Avoid',
      source:'NICE NG196 §1.6',
      sideEffects:'GI bleed without the stroke protection of anticoagulation',
      monitor:'—',
      counsel:'"Aspirin isn\'t an effective blood thinner for this kind of irregular heartbeat — we use a proper anticoagulant instead."',
      detail:{ 'Key teaching':'NG196: do NOT offer aspirin monotherapy solely for stroke prevention in AF.' },
      
    },

    // ============ RATE CONTROL ============
    {
      id:'betablocker',
      name:'β-blocker (rate control)',
      examples:'Bisoprolol 1.25–10 mg OD',
      step:'Rate · 1st-line',
      source:'NICE NG196 §1.7 (not sotalol)',
      sideEffects:'Bradycardia, fatigue, cold peripheries, bronchospasm',
      monitor:'Resting HR and symptoms (NG196 sets no number; ESC lenient <110), BP',
      counsel:'"Slows the heart rate so it pumps more efficiently. Don\'t stop it suddenly — let us know if you feel very tired or dizzy."',
      detail:{
        'Dose': 'Bisoprolol 1.25–2.5 mg OD → 10 mg (titrate to HR)',
        'Key teaching': 'First-line rate control: a β-blocker (NOT sotalol) OR a rate-limiting CCB (NG196). Also prognostic in HFrEF.'
      },
      conditions: [
        {"kind":"avoid","label":"Asthma / reversible airways","text":"Asthma — risk of bronchospasm; use rate-limiting CCB"},
        {"kind":"favoured","label":"Heart failure (HFrEF)","text":"HFrEF — β-blocker is prognostic and the rate-control choice"},
        {"kind":"favoured","label":"IHD / angina","text":"IHD/angina — dual anti-anginal + rate benefit"}
      ]
    },
    {
      id:'rateccb',
      name:'Rate-limiting CCB (diltiazem / verapamil)',
      examples:'Diltiazem MR · Verapamil',
      step:'Rate · 1st-line (non-HF)',
      source:'NICE NG196 §1.7',
      sideEffects:'Bradycardia, constipation (verapamil), ankle oedema; negative inotropy',
      monitor:'HR, BP; never verapamil + β-blocker (heart block); β-blocker + diltiazem only as monitored dual therapy',
      counsel:'"An alternative rate-slower that suits people who can\'t take beta-blockers — for example with asthma."',
      detail:{
        'Dose': 'Diltiazem MR titrated to HR; verapamil 40–120 mg TDS',
        'Key teaching': 'Equal first-line option to a β-blocker (NG196) — e.g. asthma. CONTRAINDICATED in HFrEF — negative inotrope. Never verapamil + β-blocker; NG196 allows β-blocker + diltiazem as dual therapy.'
      },
      conditions: [
        {"kind":"avoid","label":"Heart failure (HFrEF)","text":"HFrEF — negatively inotropic; contraindicated"},
        {"kind":"favoured","label":"Asthma / reversible airways","text":"Asthma — first choice where β-blocker avoided"}
      ]
    },
    {
      id:'digoxin',
      name:'Digoxin',
      examples:'Digoxin 125–250 µg OD',
      step:'Rate · add-on / sedentary',
      source:'NICE NG196 §1.7 · SPC',
      sideEffects:'Narrow therapeutic index; nausea, visual disturbance, arrhythmia; toxicity in renal impairment / hypokalaemia',
      monitor:'Renal function, K⁺; digoxin level if toxicity suspected',
      counsel:'"Useful if you\'re not very active — but it only controls rate at rest, and we need to keep an eye on kidney function and potassium."',
      detail:{
        'Dose': 'Digoxin 125–250 µg OD (lower if elderly/renal)',
        'Key teaching': 'Monotherapy only in sedentary patients with non-paroxysmal AF, or as add-on. Poor exertional rate control. Caution in renal impairment.'
      },
      conditions: [
        {"kind":"caution","label":"Frail / falls risk","text":"Frail/elderly — toxicity risk; lower dose"},
        {"kind":"favoured","label":"Heart failure (HFrEF)","text":"HF with persistent symptoms — add-on for rate + symptoms"},
        {"kind":"favoured","label":"Sedentary / elderly / non-paroxysmal","text":"Sedentary / non-paroxysmal — reasonable monotherapy or add-on"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG196 — Atrial fibrillation: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng196' },
    { label:'NICE NG196 — atrial fibrillation', url:'https://www.nice.org.uk/guidance/ng196' },
    { label:'BNF — Atrial fibrillation treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/arrhythmias/' }
  ],
});
