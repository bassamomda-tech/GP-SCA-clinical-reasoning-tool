/* ============================================
   Medication Chooser — Stable Angina
   NICE CG126 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('angina', {
  title: 'Stable angina — anti-anginal + secondary prevention',
  subtitle: 'Anti-anginal selection (NICE CG126) plus the mandatory secondary-prevention pair.',
  guideline: 'NICE CG126 · SPC',


  safety: [
    {"tone":"amber","label":"Bradycardia / HR <50 or AV block","text":"Bradycardia / AV block — avoid all rate-limiting agents (β-blocker, verapamil, diltiazem, ivabradine)"},
    {"tone":"amber","label":"Severe aortic stenosis","text":"Severe aortic stenosis — nitrates can cause syncope; use with caution"},
    {"tone":"amber","label":"Vasospastic / Prinzmetal angina","text":"Vasospastic angina — β-blockers may worsen spasm; CCB is the anti-anginal of choice"},
    {"tone":"red","label":"PDE5 inhibitor (sildenafil, tadalafil)","text":"PDE5 inhibitor on board — ALL nitrates (incl. GTN) contraindicated; profound hypotension"}
  ],

  drugs: [
    // -------- GTN --------
    {
      id:'gtn',
      name:'GTN spray (short-acting nitrate)',
      examples:'GTN 400 micrograms sublingual PRN',
      step:'All patients',
      source:'NICE CG126 §1.3.2',
      sideEffects:'Headache, flushing, postural hypotension, light-headedness',
      monitor:'No bloods. Check inhaler/spray technique and expiry.',
      counsel:'"Sit down, one or two sprays under the tongue. If pain is still there after 5 minutes, repeat. Still there 5 minutes after the second dose — call 999."',
      detail:{
        'Dose': 'One spray (400 mcg) sublingual; repeat once after 5 min; 999 if pain persists 5 min after 2nd dose',
        'Interactions': 'PDE5 inhibitors (sildenafil/tadalafil) — absolute contraindication, profound hypotension',
        'Key teaching': 'Everyone with angina needs GTN, both as a reliever and for pre-emptive use before exertion.'
      },
      conditions: [
        {"kind":"avoid","label":"PDE5 inhibitor (sildenafil, tadalafil)","text":"PDE5 inhibitor — nitrates absolutely contraindicated"},
        {"kind":"caution","label":"Severe aortic stenosis","text":"Severe aortic stenosis — caution, risk of syncope"},
        {"kind":"note","label":"Disabling nitrate headache","text":"Nitrate headache — still indicated; paracetamol cover, tends to settle"}
      ]
    },

    // -------- BETA-BLOCKER --------
    {
      id:'beta',
      name:'β-blocker',
      examples:'Bisoprolol 5 → 10 mg OD · Atenolol',
      step:'1st-line anti-anginal',
      source:'NICE CG126 §1.3.3',
      sideEffects:'Bradycardia, fatigue, cold extremities, ED, masks hypoglycaemia, nightmares',
      monitor:'Resting HR + BP. Never stop abruptly (rebound angina).',
      counsel:'"This slows the heart so it needs less oxygen — fewer episodes of pain. Don\'t stop suddenly. It can mask the warning signs of a low sugar if you\'re diabetic."',
      detail:{
        'Dose': 'Bisoprolol 5 mg OD, usually 5–10 mg (SPC); titrate to symptoms, HR, BP and side effects — no fixed HR target',
        'Interactions': 'Verapamil/diltiazem (heart block — never combine), insulin (masks hypos)',
        'Key teaching': 'First-line anti-anginal with a β-blocker OR a rate-limiting CCB. Prognostic post-MI and in HFrEF.'
      },
      conditions: [
        {"kind":"avoid","label":"Asthma / reversible airway disease","text":"Asthma — risk of life-threatening bronchospasm"},
        {"kind":"avoid","label":"Bradycardia / HR <50 or AV block","text":"Bradycardia / AV block — contraindicated"},
        {"kind":"avoid","label":"Already on verapamil / diltiazem","text":"Already on verapamil/diltiazem — adding a β-blocker risks asystole"},
        {"kind":"caution","label":"Hypotension (SBP <100)","text":"Hypotension — may not tolerate"},
        {"kind":"caution","label":"Vasospastic / Prinzmetal angina","text":"Vasospastic angina — may worsen coronary spasm; prefer CCB"},
        {"kind":"favoured","label":"Heart failure (HFrEF)","text":"HFrEF — bisoprolol/carvedilol prognostic (start low when stable)"},
        {"kind":"favoured","label":"Hypertension","text":"Coexisting hypertension — dual benefit"},
        {"kind":"favoured","label":"Atrial fibrillation","text":"AF — rate control + anti-anginal in one drug"},
        {"kind":"favoured","label":"Prior MI / PCI / CABG","text":"Post-MI — prognostic, reduces reinfarction"},
        {"kind":"note","label":"COPD","text":"COPD — cardioselective (bisoprolol) usually tolerated; monitor"},
        {"kind":"note","label":"Type 2 diabetes","text":"Diabetes — masks hypoglycaemia awareness; counsel"}
      ]
    },

    // -------- RATE-LIMITING CCB --------
    {
      id:'ccb_rl',
      name:'Rate-limiting CCB',
      examples:'Diltiazem MR · Verapamil MR',
      step:'1st-line anti-anginal',
      source:'NICE CG126 §1.3.3',
      sideEffects:'Bradycardia, constipation (verapamil), ankle oedema, heart block',
      monitor:'HR + BP. Verapamil is the more negatively inotropic.',
      counsel:'"An alternative to the heart-slowing tablet — useful if you have asthma. We can\'t combine it with a beta-blocker though."',
      detail:{
        'Dose': 'Diltiazem MR 90 mg BD (brand-specific — prescribe by brand)',
        'Interactions': 'β-blocker (heart block — never combine), statins, digoxin',
        'Key teaching': 'First-line alternative to a β-blocker, especially in asthma or vasospastic angina. NEVER with a β-blocker.'
      },
      conditions: [
        {"kind":"avoid","label":"Heart failure (HFrEF)","text":"HFrEF — negatively inotropic, worsens heart failure"},
        {"kind":"avoid","label":"Bradycardia / HR <50 or AV block","text":"Bradycardia / AV block — contraindicated"},
        {"kind":"avoid","label":"Already on a β-blocker","text":"Already on a β-blocker — combination risks asystole"},
        {"kind":"favoured","label":"Asthma / reversible airway disease","text":"Asthma — anti-anginal of choice (no bronchospasm)"},
        {"kind":"favoured","label":"Atrial fibrillation","text":"AF — rate control + anti-anginal"},
        {"kind":"favoured","label":"Vasospastic / Prinzmetal angina","text":"Vasospastic angina — CCB is first-line"}
      ]
    },

    // -------- DIHYDROPYRIDINE CCB --------
    {
      id:'ccb_dhp',
      name:'Dihydropyridine CCB',
      examples:'Amlodipine 5 → 10 mg · Felodipine · Nifedipine MR',
      step:'Add-on / combination',
      source:'NICE CG126 §1.3.6',
      sideEffects:'Ankle oedema, flushing, headache, reflex tachycardia (short-acting nifedipine)',
      monitor:'BP, oedema clinically.',
      counsel:'"This one opens the heart\'s blood vessels. It can be safely combined with a beta-blocker if one tablet isn\'t enough."',
      detail:{
        'Dose': 'Amlodipine 5 mg OD → 10 mg',
        'Interactions': 'Simvastatin (myopathy — use atorvastatin), grapefruit',
        'Key teaching': 'The CCB to use WITH a β-blocker (no heart-block risk). Avoid immediate-release nifedipine in angina.'
      },
      conditions: [
        {"kind":"caution","label":"Heart failure (HFrEF)","text":"HFrEF — avoid amlodipine unless needed for BP/angina (least harmful CCB)"},
        {"kind":"favoured","label":"Hypertension","text":"Coexisting hypertension — dual benefit"},
        {"kind":"favoured","label":"Already on a β-blocker","text":"Combines safely with a β-blocker for dual anti-anginal therapy"},
        {"kind":"favoured","label":"Symptoms uncontrolled on one anti-anginal","text":"Combines safely with a β-blocker for dual anti-anginal therapy"}
      ]
    },

    // -------- LONG-ACTING NITRATE --------
    {
      id:'la_nitrate',
      name:'Long-acting nitrate',
      examples:'Isosorbide mononitrate MR 25–50 mg OD',
      step:'2nd-line / add-on',
      source:'NICE CG126 §1.3.8',
      sideEffects:'Headache, flushing, tolerance if no nitrate-free interval',
      monitor:'Symptoms. Ensure a daily nitrate-free interval.',
      counsel:'"Take it in a way that leaves a tablet-free gap each day, otherwise the body gets used to it and it stops working."',
      detail:{
        'Dose': 'ISMN MR 25–50 mg OD; or standard ISMN asymmetric BD (8am + 2pm) to preserve nitrate-free interval',
        'Interactions': 'PDE5 inhibitors — contraindicated',
        'Key teaching': 'Add when a β-blocker + CCB are insufficient or one is not tolerated. Nitrate tolerance is the key teaching point.'
      },
      conditions: [
        {"kind":"avoid","label":"PDE5 inhibitor (sildenafil, tadalafil)","text":"PDE5 inhibitor — nitrates contraindicated"},
        {"kind":"caution","label":"Severe aortic stenosis","text":"Severe aortic stenosis — caution, syncope risk"},
        {"kind":"caution","label":"Disabling nitrate headache","text":"Disabling nitrate headache — limits use"},
        {"kind":"favoured","label":"Symptoms uncontrolled on one anti-anginal","text":"Uncontrolled on first-line — reasonable add-on"}
      ]
    },

    // -------- OTHER SECOND-LINE --------
    {
      id:'second_line',
      name:'Nicorandil / Ivabradine / Ranolazine',
      examples:'Nicorandil 10 mg BD · Ivabradine · Ranolazine',
      step:'2nd-line (consider specialist)',
      source:'NICE CG126 §1.3.8',
      sideEffects:'Nicorandil — GI/oral/anal ulceration; Ivabradine — luminous phenomena, bradycardia; Ranolazine — QT prolongation',
      monitor:'Drug-specific. Ivabradine needs sinus rhythm and resting HR ≥70 to start (MHRA).',
      counsel:'"A further option if the usual tablets aren\'t enough or don\'t suit you — we\'d usually discuss this alongside the cardiology team."',
      detail:{
        'Dose': 'Nicorandil 10 mg BD; Ivabradine 5 mg BD (sinus rhythm only; start only if resting HR ≥70 — MHRA); Ranolazine 375 mg BD',
        'Interactions': 'Ivabradine — avoid with diltiazem/verapamil; Ranolazine — QT drugs',
        'Key teaching': 'Use when both first-line classes are tried/contraindicated, or while awaiting revascularisation assessment. Ivabradine needs sinus rhythm.'
      },
      conditions: [
        {"kind":"caution","label":"Bradycardia / HR <50 or AV block","text":"Bradycardia — ivabradine contraindicated"},
        {"kind":"caution","label":"Atrial fibrillation","text":"AF — ivabradine ineffective (needs sinus rhythm)"},
        {"kind":"favoured","label":"Symptoms uncontrolled on one anti-anginal","text":"First-line options exhausted — reasonable third agent"}
      ]
    },

    // -------- ASPIRIN --------
    {
      id:'aspirin',
      name:'Aspirin (antiplatelet)',
      examples:'Aspirin 75 mg OD',
      step:'Secondary prevention',
      source:'NICE CG126 §1.4.1',
      sideEffects:'GI bleeding, dyspepsia, bronchospasm (aspirin-sensitive asthma)',
      monitor:'Bleeding. Consider PPI co-prescription if GI risk.',
      counsel:'"A low-dose aspirin every day to keep the blood from clotting in the narrowed arteries. Take it with food."',
      detail:{
        'Dose': 'Aspirin 75 mg OD with food',
        'Interactions': 'Anticoagulants (bleeding), other antiplatelets, NSAIDs',
        'Key teaching': 'CG126 does not name an alternative if aspirin is unsuitable — individual decision (seek advice). Do not routinely double-up with a DOAC.'
      },
      conditions: [
        {"kind":"avoid","label":"Aspirin allergy / intolerance","text":"Aspirin allergy — alternative antiplatelet is an individual decision (not specified in CG126)"},
        {"kind":"caution","label":"On an anticoagulant (DOAC / warfarin)","text":"On an anticoagulant — avoid routine dual therapy (bleeding); specialist decision"},
        {"kind":"favoured","label":"Prior MI / PCI / CABG","text":"Established CAD / post-MI — secondary prevention"}
      ]
    },

    // -------- STATIN --------
    {
      id:'statin',
      name:'High-intensity statin',
      examples:'Atorvastatin 80 mg OD',
      step:'Secondary prevention',
      source:'NICE CG126 · NICE NG238',
      sideEffects:'Myalgia, deranged LFTs, rarely myopathy/rhabdomyolysis',
      monitor:'LFTs at baseline, 3 and 12 months; non-fasting lipids; CK if myalgia',
      counsel:'"This lowers cholesterol and stabilises the fatty plaques in the arteries — one of the most important tablets for preventing a heart attack."',
      detail:{
        'Dose': 'Atorvastatin 80 mg OD (secondary prevention dose); reduce to 20–40 mg if interactions/intolerance',
        'Interactions': 'Diltiazem/verapamil and amlodipine ↑ statin levels (avoid simvastatin), macrolides, grapefruit',
        'Key teaching': 'Aim for more than 40% reduction in non-HDL cholesterol. Try a lower dose / alternative statin before abandoning.'
      },
      conditions: [
        {"kind":"caution","label":"Statin myalgia / prior intolerance","text":"Prior myalgia — try lower dose / alternate-day / rosuvastatin before stopping"},
        {"kind":"favoured","label":"Prior MI / PCI / CABG","text":"Established CAD — high-intensity statin is standard of care"}
      ]
    },

    // -------- ACE INHIBITOR --------
    {
      id:'acei',
      name:'ACE inhibitor',
      examples:'Ramipril 1.25 → 10 mg OD',
      step:'If diabetes / HTN / CKD',
      source:'NICE CG126 §1.4.4',
      sideEffects:'Dry cough, hyperkalaemia, AKI, angioedema (rare)',
      monitor:'U&E + K⁺ within 1–2 weeks of start/titration',
      counsel:'"This protects the heart and kidneys, particularly helpful with your diabetes/blood pressure. You might get a dry cough — let us know."',
      detail:{
        'Dose': 'Ramipril 1.25 mg OD → titrate to 10 mg',
        'Interactions': 'NSAIDs, K-sparing diuretics, ARB (never combine)',
        'Key teaching': 'Not routine for every angina patient — add when there is diabetes, hypertension, CKD, or LV dysfunction.'
      },
      conditions: [
        {"kind":"favoured","label":"Heart failure (HFrEF)","text":"LV dysfunction / HFrEF — prognostic"},
        {"kind":"favoured","label":"Type 2 diabetes","text":"Diabetes — recommended in stable angina with diabetes"},
        {"kind":"favoured","label":"Hypertension","text":"Coexisting hypertension"},
        {"kind":"favoured","label":"CKD / diabetic nephropathy","text":"CKD / nephropathy — renoprotective"}
      ]
    }
  ],

  sources: [
    { label:'NICE CG126 — Stable angina: management', url:'https://www.nice.org.uk/guidance/cg126' },
    { label:'NICE CG126 — stable angina', url:'https://www.nice.org.uk/guidance/cg126' },
    { label:'NICE NG238 — Cardiovascular disease: risk assessment and reduction', url:'https://www.nice.org.uk/guidance/ng238' },
    { label:'BNF — Stable angina treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/angina/' }
  ],
});
