/* ============================================
   Medication Chooser — Atrial Fibrillation
   NICE NG196 · CKS AF · BNF
   Covers anticoagulation + rate control
   ============================================ */
MedChooser.register('atrial-fibrillation', {
  title: 'Atrial fibrillation — anticoagulation & rate control',
  subtitle: 'Two decisions: stroke prevention (DOAC-first per NG196) and rate control (β-blocker or rate-limiting CCB first-line). Tick the profile; cards re-tier live.',
  guideline: 'NICE NG196 · CKS Atrial fibrillation · BNF',

  factors: [
    // Stroke / bleeding risk
    { group:'Stroke / bleeding risk', id:'chadsvasc', label:'CHA₂DS₂-VASc score', numeric:{ min:0, max:9, step:1, unit:'pts' } },
    { group:'Stroke / bleeding risk', id:'female', label:'Female (sex point only)', note:'Anticoagulate on the non-sex score' },
    { group:'Stroke / bleeding risk', id:'highbleed', label:'High bleeding risk (ORBIT/HAS-BLED)', note:'Modify risk factors, don\'t withhold' },
    { group:'Stroke / bleeding risk', id:'priorbleed', label:'Recent major / life-threatening bleed' },

    // Valve / rhythm
    { group:'Valve / structural', id:'mechvalve', label:'Mechanical heart valve' },
    { group:'Valve / structural', id:'mitralsten', label:'Moderate–severe mitral stenosis' },
    { group:'Valve / structural', id:'paroxysmal', label:'Paroxysmal / new-onset (<48h) AF' },

    // Comorbidities
    { group:'Comorbidities', id:'hf', label:'Heart failure (HFrEF)' },
    { group:'Comorbidities', id:'asthma', label:'Asthma / reversible airways' },
    { group:'Comorbidities', id:'ihd', label:'IHD / angina' },
    { group:'Comorbidities', id:'sedentary', label:'Sedentary / elderly / non-paroxysmal', note:'Digoxin may suit' },
    { group:'Comorbidities', id:'frail', label:'Frail / falls risk' },

    // Renal / hepatic
    { group:'Renal / hepatic', id:'egfr', label:'eGFR / CrCl', numeric:{ min:5, max:120, step:5, unit:'mL/min' } },
    { group:'Renal / hepatic', id:'dialysis', label:'Dialysis / CrCl <15' },
    { group:'Renal / hepatic', id:'hepatic', label:'Significant hepatic impairment' },

    // Current meds / practical
    { group:'Current meds / practical', id:'pgp', label:'Strong P-gp/CYP3A4 interacting drug', note:'azole, rifampicin, some antiepileptics' },
    { group:'Current meds / practical', id:'dyspepsia', label:'Dyspepsia / upper-GI symptoms', note:'Dabigatran often poorly tolerated' },
    { group:'Current meds / practical', id:'adherence', label:'Adherence concerns', note:'INR monitoring may aid oversight' },
    { group:'Current meds / practical', id:'reversal', label:'Wants/needs rapid reversibility' },
  ],

  flags: (f) => {
    const out = [];
    const cv = Number(f.chadsvasc) || 0;
    if (f.mechvalve || f.mitralsten) out.push({ tone:'red', text:'Valvular AF (mechanical valve / mod–severe MS) — warfarin ONLY; DOACs contraindicated' });
    if (cv >= 2 || (cv >= 1 && !f.female)) out.push({ tone:'amber', text:'CHA₂DS₂-VASc ≥2 (or ≥1 in men) — offer anticoagulation' });
    if (f.priorbleed) out.push({ tone:'red', text:'Recent major bleed — pause/avoid anticoagulation; specialist input' });
    if (f.highbleed) out.push({ tone:'amber', text:'High bleeding risk — modify reversible factors; do not use as sole reason to withhold' });
    return out;
  },

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
      evaluate(f){
        if (f.mechvalve || f.mitralsten) return { tier:'avoid', reasons:[{kind:'bad', text:'Valvular AF — DOACs contraindicated; use warfarin'}] };
        const cv = Number(f.chadsvasc) || 0;
        const egfr = Number(f.egfr) || 999;
        if (f.dialysis || egfr < 15) return { tier:'avoid', reasons:[{kind:'bad', text:'CrCl <15 / dialysis — DOACs not recommended'}] };
        const r = [];
        if (cv >= 2 || (cv >= 1 && !f.female)) r.push({kind:'good', text:'CHA₂DS₂-VASc indicates anticoagulation — DOAC is first-line'});
        if (f.highbleed) r.push({kind:'good', text:'Bleeding risk — apixaban has the lowest GI/ICH bleed profile'});
        if (f.reversal) r.push({kind:'good', text:'Reversal agents exist (idarucizumab/andexanet) where needed'});
        if (egfr < 30) r.push({kind:'bad', text:'CrCl 15–29 — dose-reduce; apixaban/edoxaban preferred over dabigatran'});
        if (f.dyspepsia) r.push({kind:'bad', text:'Dyspepsia — avoid dabigatran specifically'});
        if (f.pgp) r.push({kind:'bad', text:'Interacting P-gp/CYP3A4 drug — check before choosing DOAC'});
        const indicated = cv >= 2 || (cv >= 1 && !f.female);
        if (indicated) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Anticoagulant of choice once CHA₂DS₂-VASc indicates it'}] };
      }
    },
    {
      id:'warfarin',
      name:'Warfarin (VKA)',
      examples:'Dose by INR (target 2.5, range 2–3)',
      step:'Anticoag · valvular / DOAC-unsuitable',
      source:'NICE NG196 · BNF',
      sideEffects:'Bleeding, many food/drug interactions, narrow therapeutic index',
      monitor:'Regular INR (TTR ≥65%); reassess if poor control',
      counsel:'"Effective but needs regular blood tests to keep it in range, and it interacts with foods and other medicines. For your valve, it\'s the only safe option."',
      detail:{
        'Dose': 'Variable; INR target 2.5 (2–3); mechanical valves often higher target',
        'Key teaching': 'Reserved for valvular AF or where DOACs are unsuitable. Vitamin K reversal. Assess TTR if INR control poor.'
      },
      evaluate(f){
        if (f.mechvalve || f.mitralsten) return { tier:'preferred', reasons:[{kind:'good', text:'Valvular AF — warfarin is the required anticoagulant'}] };
        const egfr = Number(f.egfr) || 999;
        const r = [];
        if (f.dialysis || egfr < 15) r.push({kind:'good', text:'Severe renal impairment — warfarin where DOAC not recommended'});
        if (f.adherence) r.push({kind:'good', text:'INR monitoring provides regular oversight/contact'});
        if (f.pgp) r.push({kind:'good', text:'Complex interactions can be managed via INR titration'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Use when a DOAC is unsuitable; DOAC otherwise preferred'}] };
      }
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
      evaluate(f){
        return { tier:'avoid', reasons:[{kind:'bad', text:'Not effective for AF stroke prevention — use a DOAC/warfarin'}] };
      }
    },

    // ============ RATE CONTROL ============
    {
      id:'betablocker',
      name:'β-blocker (rate control)',
      examples:'Bisoprolol 1.25–10 mg OD',
      step:'Rate · 1st-line',
      source:'NICE NG196 §1.7 (not sotalol)',
      sideEffects:'Bradycardia, fatigue, cold peripheries, bronchospasm',
      monitor:'Resting HR (target <110 initially), BP',
      counsel:'"Slows the heart rate so it pumps more efficiently. Don\'t stop it suddenly — let us know if you feel very tired or dizzy."',
      detail:{
        'Dose': 'Bisoprolol 1.25–2.5 mg OD → 10 mg (titrate to HR)',
        'Key teaching': 'First-line rate control (standard β-blocker, NOT sotalol). Also prognostic in HFrEF.'
      },
      evaluate(f){
        if (f.asthma) return { tier:'avoid', reasons:[{kind:'bad', text:'Asthma — risk of bronchospasm; use rate-limiting CCB'}] };
        const r = [];
        if (f.hf) r.push({kind:'good', text:'HFrEF — β-blocker is prognostic and the rate-control choice'});
        if (f.ihd) r.push({kind:'good', text:'IHD/angina — dual anti-anginal + rate benefit'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line rate control for most patients'}] };
      }
    },
    {
      id:'rateccb',
      name:'Rate-limiting CCB (diltiazem / verapamil)',
      examples:'Diltiazem MR · Verapamil',
      step:'Rate · 1st-line (non-HF)',
      source:'NICE NG196 §1.7',
      sideEffects:'Bradycardia, constipation (verapamil), ankle oedema; negative inotropy',
      monitor:'HR, BP; avoid combining with β-blocker (heart block)',
      counsel:'"An alternative rate-slower that suits people who can\'t take beta-blockers — for example with asthma."',
      detail:{
        'Dose': 'Diltiazem MR titrated to HR; verapamil 40–120 mg TDS',
        'Key teaching': 'Good when β-blocker unsuitable (asthma). CONTRAINDICATED in HFrEF — negative inotrope. Never combine with β-blocker.'
      },
      evaluate(f){
        if (f.hf) return { tier:'avoid', reasons:[{kind:'bad', text:'HFrEF — negatively inotropic; contraindicated'}] };
        const r = [];
        if (f.asthma) { r.push({kind:'good', text:'Asthma — first choice where β-blocker avoided'}); return { tier:'preferred', reasons:r }; }
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'First-line alternative to β-blocker in non-HF patients'}] };
      }
    },
    {
      id:'digoxin',
      name:'Digoxin',
      examples:'Digoxin 125–250 µg OD',
      step:'Rate · add-on / sedentary',
      source:'NICE NG196 §1.7 · BNF',
      sideEffects:'Narrow therapeutic index; nausea, visual disturbance, arrhythmia; toxicity in renal impairment / hypokalaemia',
      monitor:'Renal function, K⁺; digoxin level if toxicity suspected',
      counsel:'"Useful if you\'re not very active — but it only controls rate at rest, and we need to keep an eye on kidney function and potassium."',
      detail:{
        'Dose': 'Digoxin 125–250 µg OD (lower if elderly/renal)',
        'Key teaching': 'Monotherapy only in sedentary patients with non-paroxysmal AF, or as add-on. Poor exertional rate control. Caution in renal impairment.'
      },
      evaluate(f){
        const egfr = Number(f.egfr) || 999;
        const r = [];
        if (f.sedentary) r.push({kind:'good', text:'Sedentary / non-paroxysmal — reasonable monotherapy or add-on'});
        if (f.hf) r.push({kind:'good', text:'HF with persistent symptoms — add-on for rate + symptoms'});
        if (egfr < 30) r.push({kind:'bad', text:'Renal impairment — accumulation/toxicity; reduce dose + monitor'});
        if (f.frail) r.push({kind:'bad', text:'Frail/elderly — toxicity risk; lower dose'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Add-on or for sedentary patients; not first-line'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG196 — Atrial fibrillation: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng196' },
    { label:'NICE CKS — Atrial fibrillation', url:'https://cks.nice.org.uk/topics/atrial-fibrillation/' },
    { label:'BNF — Atrial fibrillation treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/arrhythmias/' },
  ],
});
