/* ============================================
   Medication Chooser — Gout (acute attack + urate-lowering)
   NICE NG219 · BNF
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('gout', {
  title: 'Gout — acute attack & urate-lowering therapy',
  subtitle: 'Two decisions sit side by side: settle the acute attack, and decide on long-term urate-lowering therapy (ULT). NICE NG219 makes allopurinol or febuxostat first-line for ULT and treats NSAID / colchicine / steroid as broadly equal for the acute attack — choice is driven by comorbidity.',
  guideline: 'NICE NG219 · BNF',


  safety: [
    {"tone":"amber","label":"On a thiazide / loop diuretic","text":"Thiazide/loop diuretic raises urate — review whether it can be changed (e.g. to an alternative antihypertensive)"},
    {"tone":"red","label":"Transplant / on azathioprine","text":"Azathioprine + allopurinol → life-threatening myelosuppression; avoid the combination (xanthine oxidase block). Specialist advice."},
    {"tone":"amber","label":"Han Chinese / Thai / Korean ethnicity","text":"Higher HLA-B*5801 prevalence — consider testing before allopurinol (severe cutaneous reaction risk)"},
    {"tone":"red","label":"Possible septic joint","text":"A hot, swollen single joint is septic arthritis until proven otherwise — aspirate / refer before assuming gout"}
  ],

  drugs: [
    // ---------- ACUTE: NSAID ----------
    {
      id:'nsaid',
      name:'NSAID (e.g. naproxen) + PPI',
      examples:'Naproxen 750 mg then 250 mg TDS until 1–2 days after resolution',
      step:'Acute — first-line',
      source:'NICE NG219',
      sideEffects:'GI upset/bleed, fluid retention, renal impairment, ↑ BP',
      monitor:'Co-prescribe PPI; short course only',
      counsel:'"Take it with the stomach-protector I\'m adding, start at the first twinge of the next attack, and stop a day or two after it settles."',
      detail:{
        'Dose':'Naproxen 750 mg stat then 250 mg every 8 h; or other NSAID at full anti-inflammatory dose. Always co-prescribe a PPI.',
        'Key teaching':'First-line for acute gout where there is no contraindication. Give a "rescue pack" so the patient can self-start early in future flares.'
      },
      conditions: [
        {"kind":"avoid","label":"eGFR <30 / severe CKD","text":"eGFR <30 — NSAID contraindicated; use colchicine (reduced dose) or steroid"},
        {"kind":"avoid","label":"Peptic ulcer / GI bleed history","text":"Peptic ulcer / GI bleed — avoid NSAID"},
        {"kind":"caution","label":"CKD / eGFR <60","text":"CKD — NSAID worsens renal function; prefer colchicine/steroid"},
        {"kind":"caution","label":"Anticoagulant / antiplatelet","text":"On anticoagulant/antiplatelet — ↑ bleed risk; prefer steroid"},
        {"kind":"caution","label":"Established cardiovascular disease","text":"Established CVD — minimise NSAID; short course only if essential"},
        {"kind":"caution","label":"Heart failure","text":"Heart failure — NSAID causes fluid retention; avoid"}
      ]
    },

    // ---------- ACUTE: COLCHICINE ----------
    {
      id:'colchicine',
      name:'Colchicine',
      examples:'Dose per current UK product information/local formulary — lowest effective dose',
      step:'Acute — first-line (NSAID-unsuitable)',
      source:'NICE NG219 · BNF',
      sideEffects:'Diarrhoea (dose-limiting), nausea; toxicity in renal/hepatic impairment',
      monitor:'Reduce dose in CKD; beware interactions',
      counsel:'"Take it 2–4 times a day until the pain eases. The main side effect is diarrhoea — if that happens, drop the dose."',
      detail:{
        'Dose':'Dose per current UK product information/local formulary — lowest effective dose; check renal and hepatic function and interacting medicines first. Do not repeat courses without reviewing cumulative exposure. Works best started early.',
        'Interactions':'Statins (myopathy), clarithromycin/erythromycin, diltiazem/verapamil, ciclosporin — reduce dose / avoid.',
        'Key teaching':'Preferred acute option when NSAIDs are contraindicated. Lower dose and caution in CKD; avoid in severe renal/hepatic impairment.'
      },
      conditions: [
        {"kind":"caution","label":"CKD / eGFR <60","text":"CKD — reduce dose; monitor for toxicity"},
        {"kind":"caution","label":"eGFR <30 / severe CKD","text":"Severe CKD — reduce dose and use with caution (toxicity risk); steroid may be safer"},
        {"kind":"favoured","label":"Peptic ulcer / GI bleed history","text":"Avoids NSAID risks (GI bleed, fluid retention, anticoagulation)"},
        {"kind":"favoured","label":"Anticoagulant / antiplatelet","text":"Avoids NSAID risks (GI bleed, fluid retention, anticoagulation)"},
        {"kind":"favoured","label":"Established cardiovascular disease","text":"Avoids NSAID risks (GI bleed, fluid retention, anticoagulation)"},
        {"kind":"favoured","label":"Heart failure","text":"Avoids NSAID risks (GI bleed, fluid retention, anticoagulation)"}
      ]
    },

    // ---------- ACUTE: CORTICOSTEROID ----------
    {
      id:'steroid',
      name:'Oral corticosteroid (prednisolone)',
      examples:'Prednisolone 30–35 mg OD for ~5 days',
      step:'Acute — first-line (NSAID/colchicine unsuitable)',
      source:'NICE NG219',
      sideEffects:'Hyperglycaemia, mood/sleep, BP, short-course GI risk',
      monitor:'Glucose if diabetic; short course',
      counsel:'"A short 5-day steroid course settles the attack quickly. If you\'re diabetic your sugars may rise a little for a few days."',
      detail:{
        'Dose':'Prednisolone 30–35 mg daily for ~5 days. Intra-articular or IM steroid is an option for a single joint / when oral is unsuitable.',
        'Key teaching':'Best choice when both NSAIDs and colchicine are contraindicated (e.g. CKD + GI risk). Exclude septic arthritis first.'
      },
      conditions: [
        {"kind":"avoid","label":"Possible septic joint","text":"Possible septic joint — do not give steroid until infection excluded by aspiration"},
        {"kind":"caution","label":"Heart failure","text":"HF / hypertension — fluid retention; use the shortest course"},
        {"kind":"caution","label":"Hypertension","text":"HF / hypertension — fluid retention; use the shortest course"},
        {"kind":"caution","label":"Diabetes","text":"Diabetes — short course will raise glucose; warn and monitor"},
        {"kind":"favoured","label":"CKD / eGFR <60","text":"CKD — steroid avoids NSAID nephrotoxicity and colchicine accumulation"},
        {"kind":"favoured","label":"eGFR <30 / severe CKD","text":"CKD — steroid avoids NSAID nephrotoxicity and colchicine accumulation"},
        {"kind":"favoured","label":"Peptic ulcer / GI bleed history","text":"GI bleed history — safer short-course alternative to NSAID"},
        {"kind":"favoured","label":"Anticoagulant / antiplatelet","text":"On anticoagulant — avoids NSAID bleed risk"}
      ]
    },

    // ---------- ULT: ALLOPURINOL ----------
    {
      id:'allopurinol',
      name:'Allopurinol (xanthine oxidase inhibitor)',
      examples:'Start 100 mg OD (50 mg if CKD), titrate to target urate',
      step:'ULT — first-line',
      source:'NICE NG219',
      sideEffects:'Rash (rarely SJS/DRESS), GI upset, deranged LFTs',
      monitor:'Urate to target <360 (<300 if tophi); titrate monthly; flare cover',
      counsel:'"This lowers your uric acid to stop future attacks. Start it after the flare settles, keep taking it during any new attack, and we\'ll cover the first few months so it doesn\'t trigger a flare. Stop and call us if you get a rash."',
      detail:{
        'Dose':'Start 100 mg OD (50 mg if eGFR <60); titrate by 100 mg every ~4 weeks against serum urate. Treat-to-target urate <360 µmol/L (<300 if tophi/chronic).',
        'Interactions':'Azathioprine/6-MP (avoid — myelosuppression), capecitabine; caution with amoxicillin (rash).',
        'Key teaching':'First-line ULT. Co-prescribe colchicine (low dose per product information, by renal function) (or low-dose NSAID/steroid) as flare prophylaxis for up to 6 months. Do not start during an acute attack, but never stop established ULT during a flare.'
      },
      conditions: [
        {"kind":"avoid","label":"Transplant / on azathioprine","text":"On azathioprine — allopurinol blocks its metabolism → severe myelosuppression. Avoid; specialist advice."},
        {"kind":"caution","label":"Han Chinese / Thai / Korean ethnicity","text":"Higher HLA-B*5801 prevalence — consider testing first (SJS/DRESS risk); febuxostat an alternative"},
        {"kind":"favoured","label":"CKD / eGFR <60","text":"CKD — preferred first-line ULT; start 50 mg and titrate cautiously to target"},
        {"kind":"favoured","label":"Established cardiovascular disease","text":"Established CVD — preferred over febuxostat (cardiovascular safety signal)"},
        {"kind":"favoured","label":"Tophi / chronic gouty arthritis","text":"Recurrent attacks / tophi — clear indication for ULT"},
        {"kind":"favoured","label":"≥2 attacks/year, or any with CKD/tophi/urate stones","text":"Recurrent attacks / tophi — clear indication for ULT"}
      ]
    },

    // ---------- ULT: FEBUXOSTAT ----------
    {
      id:'febuxostat',
      name:'Febuxostat (xanthine oxidase inhibitor)',
      examples:'80 mg OD → 120 mg (if urate not at target)',
      step:'ULT — second-line',
      source:'NICE NG219 · MHRA (CV)',
      sideEffects:'Deranged LFTs, rash, nausea; cardiovascular caution',
      monitor:'Urate to target; LFTs; flare cover as for allopurinol',
      counsel:'"An alternative urate-lowering tablet if allopurinol doesn\'t suit you. We\'ll still cover the first few months to prevent flares."',
      detail:{
        'Dose':'80 mg OD, increase to 120 mg if urate not at target after ~4 weeks. Flare prophylaxis as for allopurinol.',
        'Key teaching':'Second-line where allopurinol is not tolerated or not effective. MHRA: avoid in significant ischaemic heart disease / heart failure (excess CV events in CARES trial).'
      },
      conditions: [
        {"kind":"avoid","label":"Established cardiovascular disease","text":"Established CVD / heart failure — MHRA advise avoiding febuxostat"},
        {"kind":"avoid","label":"Heart failure","text":"Established CVD / heart failure — MHRA advise avoiding febuxostat"},
        {"kind":"avoid","label":"Transplant / on azathioprine","text":"On azathioprine — same xanthine-oxidase interaction; avoid"},
        {"kind":"favoured","label":"Han Chinese / Thai / Korean ethnicity","text":"Useful alternative where allopurinol-related SJS risk is a concern"},
        {"kind":"note","label":"CKD / eGFR <60","text":"Can be used in mild–moderate CKD (limited dose adjustment)"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG219 — Gout: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng219' },
    { label:'NICE NG219 — gout', url:'https://www.nice.org.uk/guidance/ng219' },
    { label:'MHRA — Febuxostat (Adenuric): cardiovascular risk', url:'https://www.gov.uk/drug-safety-update' },
    { label:'BNF — Gout and hyperuricaemia', url:'https://bnf.nice.org.uk/treatment-summaries/gout-and-hyperuricaemia/' }
  ],
});
