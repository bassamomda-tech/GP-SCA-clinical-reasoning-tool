/* ============================================
   Medication Chooser — Stable Angina
   NICE NG126 · CKS Stable angina · BNF
   ============================================ */
MedChooser.register('angina', {
  title: 'Stable angina — anti-anginal + secondary prevention',
  subtitle: 'Anti-anginal selection (NICE NG126) plus the mandatory secondary-prevention pair. Tick the patient profile on the left; cards re-tier live.',
  guideline: 'NICE NG126 · CKS Stable angina · BNF',

  factors: [
    // Demographics
    { group:'Demographics', id:'elderly', label:'Elderly / frail', note:'Start low, titrate slowly' },
    { group:'Demographics', id:'driver',  label:'HGV / PCV or vocational driver', note:'DVLA implications' },

    // Comorbidities
    { group:'Comorbidities', id:'asthma',   label:'Asthma / reversible airway disease' },
    { group:'Comorbidities', id:'copd',     label:'COPD' },
    { group:'Comorbidities', id:'hf',       label:'Heart failure (HFrEF)' },
    { group:'Comorbidities', id:'brady',    label:'Bradycardia / HR <50 or AV block', note:'No rate-limiting drugs' },
    { group:'Comorbidities', id:'hypoten',  label:'Hypotension (SBP <100)' },
    { group:'Comorbidities', id:'dm',       label:'Type 2 diabetes' },
    { group:'Comorbidities', id:'htn',      label:'Hypertension' },
    { group:'Comorbidities', id:'af',       label:'Atrial fibrillation' },
    { group:'Comorbidities', id:'priormi',  label:'Prior MI / PCI / CABG' },
    { group:'Comorbidities', id:'ckd',      label:'CKD / diabetic nephropathy' },
    { group:'Comorbidities', id:'as',       label:'Severe aortic stenosis', note:'Nitrate caution' },
    { group:'Comorbidities', id:'vasospastic', label:'Vasospastic / Prinzmetal angina', note:'β-blocker can worsen' },

    // Allergy / prior intolerance
    { group:'Allergy / prior intolerance', id:'asa_allergy', label:'Aspirin allergy / intolerance' },
    { group:'Allergy / prior intolerance', id:'statin_myalgia', label:'Statin myalgia / prior intolerance' },
    { group:'Allergy / prior intolerance', id:'nitrate_headache', label:'Disabling nitrate headache' },

    // Current medications
    { group:'Current medications', id:'pde5',  label:'PDE5 inhibitor (sildenafil, tadalafil)', note:'Nitrates contraindicated' },
    { group:'Current medications', id:'on_bb', label:'Already on a β-blocker' },
    { group:'Current medications', id:'on_ratelimit_ccb', label:'Already on verapamil / diltiazem' },
    { group:'Current medications', id:'anticoag', label:'On an anticoagulant (DOAC / warfarin)' },

    // Preference / context
    { group:'Preference / context', id:'needs_addon', label:'Symptoms uncontrolled on one anti-anginal', note:'Step up to combination / 2nd-line' },
  ],

  flags: (f) => {
    const out = [];
    if (f.pde5) out.push({ tone:'red', text:'PDE5 inhibitor on board — ALL nitrates (incl. GTN) contraindicated; profound hypotension' });
    if (f.on_bb && f.on_ratelimit_ccb) out.push({ tone:'red', text:'β-blocker + verapamil/diltiazem = risk of severe bradycardia / asystole — never combine' });
    if (f.vasospastic) out.push({ tone:'amber', text:'Vasospastic angina — β-blockers may worsen spasm; CCB is the anti-anginal of choice' });
    if (f.brady) out.push({ tone:'amber', text:'Bradycardia / AV block — avoid all rate-limiting agents (β-blocker, verapamil, diltiazem, ivabradine)' });
    if (f.as) out.push({ tone:'amber', text:'Severe aortic stenosis — nitrates can cause syncope; use with caution' });
    return out;
  },

  drugs: [
    // -------- GTN --------
    {
      id:'gtn',
      name:'GTN spray (short-acting nitrate)',
      examples:'GTN 400 micrograms sublingual PRN',
      step:'All patients',
      source:'NICE NG126 §1.3.2',
      sideEffects:'Headache, flushing, postural hypotension, light-headedness',
      monitor:'No bloods. Check inhaler/spray technique and expiry.',
      counsel:'"Sit down, one or two sprays under the tongue. If pain is still there after 5 minutes, repeat. Still there 5 minutes after the second dose — call 999."',
      detail:{
        'Dose': 'One spray (400 mcg) sublingual; repeat once after 5 min; 999 if pain persists 5 min after 2nd dose',
        'Interactions': 'PDE5 inhibitors (sildenafil/tadalafil) — absolute contraindication, profound hypotension',
        'Key teaching': 'Everyone with angina needs GTN, both as a reliever and for pre-emptive use before exertion.'
      },
      evaluate(f){
        if (f.pde5) return { tier:'avoid', reasons:[{kind:'bad', text:'PDE5 inhibitor — nitrates absolutely contraindicated'}] };
        const r = [];
        if (f.as) r.push({kind:'bad', text:'Severe aortic stenosis — caution, risk of syncope'});
        if (f.nitrate_headache) r.push({kind:'neutral', text:'Nitrate headache — still indicated; paracetamol cover, tends to settle'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line reliever for every angina patient — abortive + pre-emptive'}] };
      }
    },

    // -------- BETA-BLOCKER --------
    {
      id:'beta',
      name:'β-blocker',
      examples:'Bisoprolol 2.5 → 10 mg OD · Atenolol',
      step:'1st-line anti-anginal',
      source:'NICE NG126 §1.3.3',
      sideEffects:'Bradycardia, fatigue, cold extremities, ED, masks hypoglycaemia, nightmares',
      monitor:'Resting HR + BP. Never stop abruptly (rebound angina).',
      counsel:'"This slows the heart so it needs less oxygen — fewer episodes of pain. Don\'t stop suddenly. It can mask the warning signs of a low sugar if you\'re diabetic."',
      detail:{
        'Dose': 'Bisoprolol 2.5 mg OD → titrate to 10 mg aiming resting HR 55–60',
        'Interactions': 'Verapamil/diltiazem (heart block — never combine), insulin (masks hypos)',
        'Key teaching': 'First-line anti-anginal with a β-blocker OR a rate-limiting CCB. Prognostic post-MI and in HFrEF.'
      },
      evaluate(f){
        if (f.asthma) return { tier:'avoid', reasons:[{kind:'bad', text:'Asthma — risk of life-threatening bronchospasm'}] };
        if (f.brady) return { tier:'avoid', reasons:[{kind:'bad', text:'Bradycardia / AV block — contraindicated'}] };
        if (f.on_ratelimit_ccb) return { tier:'avoid', reasons:[{kind:'bad', text:'Already on verapamil/diltiazem — adding a β-blocker risks asystole'}] };
        const r = [];
        if (f.priormi) r.push({kind:'good', text:'Post-MI — prognostic, reduces reinfarction'});
        if (f.hf) r.push({kind:'good', text:'HFrEF — bisoprolol/carvedilol prognostic (start low when stable)'});
        if (f.af) r.push({kind:'good', text:'AF — rate control + anti-anginal in one drug'});
        if (f.htn) r.push({kind:'good', text:'Coexisting hypertension — dual benefit'});
        if (f.vasospastic) r.push({kind:'bad', text:'Vasospastic angina — may worsen coronary spasm; prefer CCB'});
        if (f.copd) r.push({kind:'neutral', text:'COPD — cardioselective (bisoprolol) usually tolerated; monitor'});
        if (f.hypoten) r.push({kind:'bad', text:'Hypotension — may not tolerate'});
        if (f.dm) r.push({kind:'neutral', text:'Diabetes — masks hypoglycaemia awareness; counsel'});
        const preferred = !f.vasospastic;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'good', text:'First-line anti-anginal'}] };
      }
    },

    // -------- RATE-LIMITING CCB --------
    {
      id:'ccb_rl',
      name:'Rate-limiting CCB',
      examples:'Diltiazem MR · Verapamil MR',
      step:'1st-line anti-anginal',
      source:'NICE NG126 §1.3.3',
      sideEffects:'Bradycardia, constipation (verapamil), ankle oedema, heart block',
      monitor:'HR + BP. Verapamil is the more negatively inotropic.',
      counsel:'"An alternative to the heart-slowing tablet — useful if you have asthma. We can\'t combine it with a beta-blocker though."',
      detail:{
        'Dose': 'Diltiazem MR 90 mg BD (brand-specific — prescribe by brand)',
        'Interactions': 'β-blocker (heart block — never combine), statins, digoxin',
        'Key teaching': 'First-line alternative to a β-blocker, especially in asthma or vasospastic angina. NEVER with a β-blocker.'
      },
      evaluate(f){
        if (f.hf) return { tier:'avoid', reasons:[{kind:'bad', text:'HFrEF — negatively inotropic, worsens heart failure'}] };
        if (f.brady) return { tier:'avoid', reasons:[{kind:'bad', text:'Bradycardia / AV block — contraindicated'}] };
        if (f.on_bb) return { tier:'avoid', reasons:[{kind:'bad', text:'Already on a β-blocker — combination risks asystole'}] };
        const r = [];
        if (f.asthma) r.push({kind:'good', text:'Asthma — anti-anginal of choice (no bronchospasm)'});
        if (f.vasospastic) r.push({kind:'good', text:'Vasospastic angina — CCB is first-line'});
        if (f.af) r.push({kind:'good', text:'AF — rate control + anti-anginal'});
        const preferred = f.asthma || f.vasospastic;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'First-line alternative to a β-blocker'}] };
      }
    },

    // -------- DIHYDROPYRIDINE CCB --------
    {
      id:'ccb_dhp',
      name:'Dihydropyridine CCB',
      examples:'Amlodipine 5 → 10 mg · Felodipine · Nifedipine MR',
      step:'Add-on / combination',
      source:'NICE NG126 §1.3.6',
      sideEffects:'Ankle oedema, flushing, headache, reflex tachycardia (short-acting nifedipine)',
      monitor:'BP, oedema clinically.',
      counsel:'"This one opens the heart\'s blood vessels. It can be safely combined with a beta-blocker if one tablet isn\'t enough."',
      detail:{
        'Dose': 'Amlodipine 5 mg OD → 10 mg',
        'Interactions': 'Simvastatin (myopathy — use atorvastatin), grapefruit',
        'Key teaching': 'The CCB to use WITH a β-blocker (no heart-block risk). Avoid immediate-release nifedipine in angina.'
      },
      evaluate(f){
        const r = [];
        if (f.on_bb || f.needs_addon) r.push({kind:'good', text:'Combines safely with a β-blocker for dual anti-anginal therapy'});
        if (f.htn) r.push({kind:'good', text:'Coexisting hypertension — dual benefit'});
        if (f.hf) r.push({kind:'bad', text:'HFrEF — avoid amlodipine unless needed for BP/angina (least harmful CCB)'});
        const preferred = f.on_bb && f.needs_addon;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Add-on when a β-blocker alone is insufficient'}] };
      }
    },

    // -------- LONG-ACTING NITRATE --------
    {
      id:'la_nitrate',
      name:'Long-acting nitrate',
      examples:'Isosorbide mononitrate MR 25–50 mg OD',
      step:'2nd-line / add-on',
      source:'NICE NG126 §1.3.8',
      sideEffects:'Headache, flushing, tolerance if no nitrate-free interval',
      monitor:'Symptoms. Ensure a daily nitrate-free interval.',
      counsel:'"Take it in a way that leaves a tablet-free gap each day, otherwise the body gets used to it and it stops working."',
      detail:{
        'Dose': 'ISMN MR 25–50 mg OD; or standard ISMN asymmetric BD (8am + 2pm) to preserve nitrate-free interval',
        'Interactions': 'PDE5 inhibitors — contraindicated',
        'Key teaching': 'Add when a β-blocker + CCB are insufficient or one is not tolerated. Nitrate tolerance is the key teaching point.'
      },
      evaluate(f){
        if (f.pde5) return { tier:'avoid', reasons:[{kind:'bad', text:'PDE5 inhibitor — nitrates contraindicated'}] };
        const r = [];
        if (f.as) r.push({kind:'bad', text:'Severe aortic stenosis — caution, syncope risk'});
        if (f.needs_addon) r.push({kind:'good', text:'Uncontrolled on first-line — reasonable add-on'});
        if (f.nitrate_headache) r.push({kind:'bad', text:'Disabling nitrate headache — limits use'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Second-line add-on or where β-blocker/CCB not tolerated'}] };
      }
    },

    // -------- OTHER SECOND-LINE --------
    {
      id:'second_line',
      name:'Nicorandil / Ivabradine / Ranolazine',
      examples:'Nicorandil 10 mg BD · Ivabradine · Ranolazine',
      step:'2nd-line (consider specialist)',
      source:'NICE NG126 §1.3.8',
      sideEffects:'Nicorandil — GI/oral/anal ulceration; Ivabradine — luminous phenomena, bradycardia; Ranolazine — QT prolongation',
      monitor:'Drug-specific. Ivabradine needs sinus rhythm + HR.',
      counsel:'"A further option if the usual tablets aren\'t enough or don\'t suit you — we\'d usually discuss this alongside the cardiology team."',
      detail:{
        'Dose': 'Nicorandil 10 mg BD; Ivabradine 5 mg BD (sinus rhythm only); Ranolazine 375 mg BD',
        'Interactions': 'Ivabradine — avoid with diltiazem/verapamil; Ranolazine — QT drugs',
        'Key teaching': 'Use when both first-line classes are tried/contraindicated, or while awaiting revascularisation assessment. Ivabradine needs sinus rhythm.'
      },
      evaluate(f){
        const r = [];
        if (f.needs_addon) r.push({kind:'good', text:'First-line options exhausted — reasonable third agent'});
        if (f.af) r.push({kind:'bad', text:'AF — ivabradine ineffective (needs sinus rhythm)'});
        if (f.brady) r.push({kind:'bad', text:'Bradycardia — ivabradine contraindicated'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reserve for when first-line classes are insufficient or unsuitable'}] };
      }
    },

    // -------- ASPIRIN --------
    {
      id:'aspirin',
      name:'Aspirin (antiplatelet)',
      examples:'Aspirin 75 mg OD',
      step:'Secondary prevention',
      source:'NICE NG126 §1.4.1',
      sideEffects:'GI bleeding, dyspepsia, bronchospasm (aspirin-sensitive asthma)',
      monitor:'Bleeding. Consider PPI co-prescription if GI risk.',
      counsel:'"A low-dose aspirin every day to keep the blood from clotting in the narrowed arteries. Take it with food."',
      detail:{
        'Dose': 'Aspirin 75 mg OD with food',
        'Interactions': 'Anticoagulants (bleeding), other antiplatelets, NSAIDs',
        'Key teaching': 'Clopidogrel 75 mg is the alternative if aspirin not tolerated or contraindicated. Do not routinely double-up with a DOAC.'
      },
      evaluate(f){
        if (f.asa_allergy) return { tier:'avoid', reasons:[{kind:'bad', text:'Aspirin allergy — use clopidogrel 75 mg instead'}] };
        const r = [];
        if (f.anticoag) r.push({kind:'bad', text:'On an anticoagulant — avoid routine dual therapy (bleeding); specialist decision'});
        if (f.priormi) r.push({kind:'good', text:'Established CAD / post-MI — secondary prevention'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Mandatory secondary prevention in stable angina'}] };
      }
    },

    // -------- STATIN --------
    {
      id:'statin',
      name:'High-intensity statin',
      examples:'Atorvastatin 80 mg OD',
      step:'Secondary prevention',
      source:'NICE NG126 · NICE NG238',
      sideEffects:'Myalgia, deranged LFTs, rarely myopathy/rhabdomyolysis',
      monitor:'LFTs at baseline, 3 and 12 months; non-fasting lipids; CK if myalgia',
      counsel:'"This lowers cholesterol and stabilises the fatty plaques in the arteries — one of the most important tablets for preventing a heart attack."',
      detail:{
        'Dose': 'Atorvastatin 80 mg OD (secondary prevention dose); reduce to 20–40 mg if interactions/intolerance',
        'Interactions': 'Diltiazem/verapamil and amlodipine ↑ statin levels (avoid simvastatin), macrolides, grapefruit',
        'Key teaching': 'Aim for ≥40% reduction in non-HDL cholesterol. Try a lower dose / alternative statin before abandoning.'
      },
      evaluate(f){
        const r = [];
        if (f.statin_myalgia) r.push({kind:'bad', text:'Prior myalgia — try lower dose / alternate-day / rosuvastatin before stopping'});
        if (f.priormi) r.push({kind:'good', text:'Established CAD — high-intensity statin is standard of care'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Mandatory secondary prevention — atorvastatin 80 mg'}] };
      }
    },

    // -------- ACE INHIBITOR --------
    {
      id:'acei',
      name:'ACE inhibitor',
      examples:'Ramipril 1.25 → 10 mg OD',
      step:'If diabetes / HTN / CKD',
      source:'NICE NG126 §1.4.4',
      sideEffects:'Dry cough, hyperkalaemia, AKI, angioedema (rare)',
      monitor:'U&E + K⁺ within 1–2 weeks of start/titration',
      counsel:'"This protects the heart and kidneys, particularly helpful with your diabetes/blood pressure. You might get a dry cough — let us know."',
      detail:{
        'Dose': 'Ramipril 1.25 mg OD → titrate to 10 mg',
        'Interactions': 'NSAIDs, K-sparing diuretics, ARB (never combine)',
        'Key teaching': 'Not routine for every angina patient — add when there is diabetes, hypertension, CKD, or LV dysfunction.'
      },
      evaluate(f){
        const r = [];
        if (f.dm)  r.push({kind:'good', text:'Diabetes — recommended in stable angina with diabetes'});
        if (f.ckd) r.push({kind:'good', text:'CKD / nephropathy — renoprotective'});
        if (f.htn) r.push({kind:'good', text:'Coexisting hypertension'});
        if (f.hf)  r.push({kind:'good', text:'LV dysfunction / HFrEF — prognostic'});
        const indicated = f.dm || f.ckd || f.htn || f.hf;
        return { tier: indicated ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Add if diabetes, hypertension, CKD or LV dysfunction present'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG126 — Stable angina: management', url:'https://www.nice.org.uk/guidance/ng126' },
    { label:'NICE CKS — Angina', url:'https://cks.nice.org.uk/topics/angina/' },
    { label:'NICE NG238 — Cardiovascular disease: risk assessment and reduction', url:'https://www.nice.org.uk/guidance/ng238' },
    { label:'BNF — Stable angina treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/angina/' },
  ],
});
