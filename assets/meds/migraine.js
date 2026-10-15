/* ============================================
   Medication Chooser — Migraine (acute + prophylaxis)
   NICE CG150 Headache · BNF
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('migraine', {
  title: 'Migraine — acute treatment & prophylaxis',
  subtitle: 'Two decisions sit side by side: abort the attack, and decide whether prophylaxis is warranted. NICE CG150 recommends a triptan + NSAID/paracetamol for the acute attack, and (since June 2025) advises considering propranolol, topiramate or amitriptyline for prevention — choice is driven by comorbidity, contraception, and pregnancy.',
  guideline: 'NICE CG150 · BNF',


  safety: [
    {"tone":"red","label":"Migraine WITH aura","text":"Migraine with aura — combined hormonal (oestrogen) contraception is contraindicated (stroke risk); switch to progestogen-only / non-hormonal"},
    {"tone":"amber","label":"Acute meds ≥10–15 days/month","text":"Medication-overuse headache — withdraw the overused acute drug (abrupt for simple analgesics/triptans; consider prophylaxis cover) rather than escalating it"},
    {"tone":"amber","label":"Pregnant or planning pregnancy","text":"Pregnancy — paracetamol first-line acute; avoid NSAIDs in 3rd trimester and triptans where avoidable (sumatriptan has most data if needed)"},
    {"tone":"red","label":"Pregnant or planning pregnancy","text":"Topiramate and sodium valproate are teratogenic — do not use for prevention in pregnancy or without highly effective contraception (valproate effectively avoided in women of childbearing potential)"},
    {"tone":"red","label":"IHD / cerebrovascular / PAD","text":"Triptans are contraindicated in ischaemic heart/cerebrovascular/peripheral arterial disease and uncontrolled hypertension"}
  ],

  drugs: [
    // ---------- ACUTE ----------
    {
      id:'triptan_nsaid',
      name:'Triptan + NSAID (or paracetamol)',
      examples:'Sumatriptan 50–100 mg PO at onset + naproxen/ibuprofen',
      step:'Acute — first-line',
      source:'NICE CG150',
      sideEffects:'Triptan: chest/throat tightness, tingling, drowsiness; NSAID: GI/renal',
      monitor:'Limit to ≤10 triptan days/month; review response after 3 attacks',
      counsel:'"Take the triptan as soon as the headache (not the aura) starts, with an anti-inflammatory. If it helps but comes back, you can repeat the triptan after 2 hours — but keep it to no more than about 10 days a month."',
      detail:{
        'Dose':'Sumatriptan 50–100 mg at headache onset; may repeat after ≥2 h if it recurs (max per BNF). Combine with naproxen 250–500 mg or ibuprofen 400 mg. Nasal/SC sumatriptan if vomiting.',
        'Key teaching':'First-line per NICE CG150 — a triptan plus an NSAID (or paracetamol) works better than either alone. Treat early. If one triptan fails, try an alternative triptan before abandoning the class.'
      },
      conditions: [
        {"kind":"avoid","label":"IHD / cerebrovascular / PAD","text":"Triptan contraindicated in IHD/cerebrovascular/PAD or uncontrolled hypertension — use NSAID/paracetamol ± antiemetic"},
        {"kind":"avoid","label":"Uncontrolled hypertension","text":"Triptan contraindicated in IHD/cerebrovascular/PAD or uncontrolled hypertension — use NSAID/paracetamol ± antiemetic"},
        {"kind":"caution","label":"Acute meds ≥10–15 days/month","text":"Triptan/analgesic overuse — limit days and withdraw; do not escalate"},
        {"kind":"caution","label":"Pregnant or planning pregnancy","text":"Pregnancy — prefer paracetamol; use sumatriptan only if needed (most pregnancy data)"},
        {"kind":"caution","label":"Age ≥65 / vascular risk factors","text":"Age ≥65 / vascular risk — assess cardiovascular risk before a triptan"},
        {"kind":"caution","label":"Peptic ulcer / GI bleed risk","text":"Use paracetamol rather than the NSAID component (GI/renal risk)"},
        {"kind":"caution","label":"CKD / eGFR <30","text":"Use paracetamol rather than the NSAID component (GI/renal risk)"}
      ]
    },
    {
      id:'simple_analgesia',
      name:'NSAID or paracetamol (± aspirin)',
      examples:'Ibuprofen 400 mg / naproxen / aspirin 900 mg / paracetamol 1 g',
      step:'Acute — first-line (mild) / triptan-unsuitable',
      source:'NICE CG150',
      sideEffects:'NSAID/aspirin: GI, renal, bleed; paracetamol well tolerated',
      monitor:'Limit to <15 days/month (simple analgesics) to avoid overuse headache',
      counsel:'"For milder attacks a high-dose anti-inflammatory or soluble aspirin taken early can be enough. Keep it under 15 days a month so it doesn\'t start causing headaches itself."',
      detail:{
        'Dose':'Aspirin 900 mg, ibuprofen 400 mg or naproxen at onset; paracetamol 1 g if NSAID unsuitable. Soluble/effervescent preparations act faster.',
        'Key teaching':'Reasonable first step for milder attacks and the safe fallback when triptans are contraindicated. Paracetamol is the acute drug of choice in pregnancy.'
      },
      conditions: [
        {"kind":"avoid","label":"Which decision?: Prophylaxis — reduce frequency","text":"Acute drug — switch to \"prophylaxis\""},
        {"kind":"caution","label":"Acute meds ≥10–15 days/month","text":"Overuse headache — keep simple analgesics <15 days/month and withdraw if exceeded"},
        {"kind":"favoured","label":"IHD / cerebrovascular / PAD","text":"Safe alternative where triptans are contraindicated"},
        {"kind":"favoured","label":"Uncontrolled hypertension","text":"Safe alternative where triptans are contraindicated"},
        {"kind":"note","label":"Pregnant or planning pregnancy","text":"Use paracetamol rather than NSAID/aspirin here (GI/renal/pregnancy)"},
        {"kind":"note","label":"Peptic ulcer / GI bleed risk","text":"Use paracetamol rather than NSAID/aspirin here (GI/renal/pregnancy)"},
        {"kind":"note","label":"CKD / eGFR <30","text":"Use paracetamol rather than NSAID/aspirin here (GI/renal/pregnancy)"}
      ]
    },
    {
      id:'antiemetic',
      name:'Antiemetic (metoclopramide / prochlorperazine)',
      examples:'Metoclopramide 10 mg; prochlorperazine 3–6 mg buccal',
      step:'Acute — adjunct',
      source:'NICE CG150',
      sideEffects:'Extrapyramidal/dystonia (esp. young women, limit metoclopramide ≤5 days), drowsiness',
      monitor:'Short courses only; avoid metoclopramide long-term',
      counsel:'"I\'ll add something for the sickness — it also helps your body absorb the painkillers. We only use it for a few days at a time."',
      detail:{
        'Dose':'Metoclopramide 10 mg (max 5 days, avoid in young women where possible) or prochlorperazine. Buccal/IM useful if vomiting.',
        'Key teaching':'Add to acute treatment when nausea/vomiting is prominent — also improves absorption of oral analgesia. Offer even without vomiting per NICE CG150.'
      },
      conditions: [
        {"kind":"avoid","label":"Which decision?: Prophylaxis — reduce frequency","text":"Acute adjunct — switch to \"prophylaxis\""},
        {"kind":"favoured","label":"Prominent nausea / vomiting","text":"Prominent nausea/vomiting — add an antiemetic and use a non-oral route if vomiting"}
      ]
    },

    // ---------- PROPHYLAXIS ----------
    {
      id:'propranolol',
      name:'Propranolol (beta-blocker)',
      examples:'Propranolol MR 80 mg → 160 mg/day',
      step:'Prophylaxis — CG150 option',
      source:'NICE CG150',
      sideEffects:'Fatigue, cold extremities, bradycardia, vivid dreams; bronchospasm',
      monitor:'HR/BP; review benefit at 2–3 months at adequate dose',
      counsel:'"This is a daily preventer — give it 2–3 months at a proper dose before we judge it. It can make you feel a bit tired or cold-handed at first."',
      detail:{
        'Dose':'Propranolol MR 80 mg → 160 mg/day. Trial for at least 2–3 months at target dose.',
        'Key teaching':'A CG150 preventive to consider (June 2025 amendment) and the safest of the three in women of childbearing potential and pregnancy. Avoid in asthma.'
      },
      conditions: [
        {"kind":"avoid","label":"Which decision?: Acute attack — abort the headache","text":"Daily preventer — switch to \"acute attack\" for abortive options"},
        {"kind":"avoid","label":"Asthma","text":"Asthma — non-selective beta-blocker contraindicated; use topiramate or amitriptyline"},
        {"kind":"caution","label":"Low BP / bradycardia","text":"Low BP/bradycardia — beta-blocker may worsen; consider alternative"},
        {"kind":"favoured","label":"Pregnant or planning pregnancy","text":"Preferred preventer in pregnancy / childbearing potential (avoids teratogenic topiramate/valproate)"},
        {"kind":"favoured","label":"Woman of childbearing potential","text":"Preferred preventer in pregnancy / childbearing potential (avoids teratogenic topiramate/valproate)"},
        {"kind":"favoured","label":"Uncontrolled hypertension","text":"Coexisting hypertension — dual benefit"},
        {"kind":"note","label":"Depression / low mood","text":"Use with awareness of possible mood/fatigue effects"}
      ]
    },
    {
      id:'amitriptyline',
      name:'Amitriptyline (TCA)',
      examples:'10 mg at night, titrate to 25–75 mg',
      step:'Prophylaxis — CG150 option',
      source:'NICE CG150 (off-label)',
      sideEffects:'Sedation, dry mouth, constipation, weight gain; caution in arrhythmia',
      monitor:'Review at adequate dose; warn re morning drowsiness/driving',
      counsel:'"A low dose of an old antidepressant, taken at night — it helps migraine, sleep and mood. Start low; the dry mouth and drowsiness usually settle."',
      detail:{
        'Dose':'Start 10 mg nocte, titrate slowly to 25–75 mg as tolerated. Off-label but well established.',
        'Key teaching':'Good choice where there is coexisting depression, anxiety, insomnia or tension-type headache. Anticholinergic load — caution in the elderly.'
      },
      conditions: [
        {"kind":"avoid","label":"Which decision?: Acute attack — abort the headache","text":"Daily preventer — switch to \"acute attack\""},
        {"kind":"caution","label":"Age ≥65 / vascular risk factors","text":"Elderly — anticholinergic/sedation and falls risk; start very low or avoid"},
        {"kind":"favoured","label":"Asthma","text":"Suitable where propranolol contraindicated by asthma"},
        {"kind":"favoured","label":"Depression / low mood","text":"Coexisting low mood / anxiety / insomnia — single drug covers both"},
        {"kind":"favoured","label":"Anxiety or insomnia","text":"Coexisting low mood / anxiety / insomnia — single drug covers both"},
        {"kind":"note","label":"Pregnant or planning pregnancy","text":"Used in pregnancy if needed (specialist/shared decision); propranolol generally preferred"}
      ]
    },
    {
      id:'topiramate',
      name:'Topiramate',
      examples:'25 mg/day, titrate to 50–100 mg in divided doses',
      step:'Prophylaxis — CG150 option (with caution)',
      source:'NICE CG150 · MHRA',
      sideEffects:'Paraesthesia, cognitive slowing, weight loss, renal stones, glaucoma',
      monitor:'Pregnancy prevention programme in women; mood; weight',
      counsel:'"An effective preventer, but it can affect concentration and is unsafe in pregnancy — so we need reliable contraception while you take it. Tingling in the fingers is common early on."',
      detail:{
        'Dose':'Start 25 mg nocte, titrate to 50–100 mg/day in 2 divided doses.',
        'Key teaching':'Effective but teratogenic and reduces hormonal contraceptive efficacy at higher doses — subject to the MHRA Pregnancy Prevention Programme. Avoid with glaucoma/renal stones. Useful where weight loss is desirable.'
      },
      conditions: [
        {"kind":"avoid","label":"Which decision?: Acute attack — abort the headache","text":"Daily preventer — switch to \"acute attack\""},
        {"kind":"avoid","label":"Pregnant or planning pregnancy","text":"Teratogenic — contraindicated in pregnancy"},
        {"kind":"avoid","label":"Narrow-angle glaucoma / renal stones","text":"Narrow-angle glaucoma / renal stones — avoid topiramate"},
        {"kind":"caution","label":"Woman of childbearing potential","text":"Childbearing potential — only under the Pregnancy Prevention Programme with highly effective contraception; reduces hormonal contraceptive efficacy"},
        {"kind":"caution","label":"Depression / low mood","text":"Can worsen mood/cognition — caution with depression"},
        {"kind":"favoured","label":"Asthma","text":"Suitable where propranolol contraindicated"},
        {"kind":"favoured","label":"Coexisting epilepsy","text":"Coexisting epilepsy — single drug may treat both"}
      ]
    },
    {
      id:'menstrual_prophylaxis',
      name:'Perimenstrual triptan / NSAID (menstrual migraine)',
      examples:'Frovatriptan 2.5 mg BD or naproxen around menstruation',
      step:'Prophylaxis — targeted (menstrual)',
      source:'NICE CG150',
      sideEffects:'As for triptan/NSAID',
      monitor:'Use only around the predictable window',
      counsel:'"If your migraines cluster around your period, we can use a short preventive course just for those few days each month rather than a daily tablet."',
      detail:{
        'Dose':'Frovatriptan 2.5 mg BD (or zolmitriptan) from 2 days before until 3 days after onset of menstruation; or naproxen perimenstrually.',
        'Key teaching':'Mini-prophylaxis for predictable, pure menstrual migraine. Standard daily prophylaxis remains the option if attacks are not confined to menstruation.'
      },
      conditions: [
        {"kind":"avoid","label":"Which decision?: Acute attack — abort the headache","text":"Preventive strategy — switch to \"prophylaxis\""},
        {"kind":"favoured","label":"Clear menstrual pattern","text":"Clear menstrual pattern — targeted perimenstrual prophylaxis avoids daily medication"}
      ]
    }
  ],

  sources: [
    { label:'NICE CG150 — headaches', url:'https://www.nice.org.uk/guidance/cg150' },
    { label:'NICE CG150 — Headaches in over 12s', url:'https://www.nice.org.uk/guidance/cg150' },
    { label:'MHRA — Topiramate: Pregnancy Prevention Programme', url:'https://www.gov.uk/drug-safety-update' },
    { label:'BNF — Migraine', url:'https://bnf.nice.org.uk/treatment-summaries/migraine/' }
  ],
});
