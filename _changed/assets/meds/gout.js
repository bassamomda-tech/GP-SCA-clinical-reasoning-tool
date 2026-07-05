/* ============================================
   Medication Chooser — Gout (acute attack + urate-lowering)
   NICE NG219 · CKS Gout · BNF
   ============================================ */
MedChooser.register('gout', {
  title: 'Gout — acute attack & urate-lowering therapy',
  subtitle: 'Two decisions sit side by side: settle the acute attack, and decide on long-term urate-lowering therapy (ULT). NICE NG219 makes allopurinol or febuxostat first-line for ULT and treats NSAID / colchicine / steroid as broadly equal for the acute attack — choice is driven by comorbidity. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG219 · CKS Gout · BNF',

  factors: [
    { group:'Decision', id:'phase', label:'Which decision?', options:[
      { value:'acute', label:'Acute attack — settle the flare' },
      { value:'ult',   label:'Urate-lowering therapy (prevention)' },
    ]},

    { group:'Renal / GI', id:'ckd', label:'CKD / eGFR <60' },
    { group:'Renal / GI', id:'ckd_severe', label:'eGFR <30 / severe CKD' },
    { group:'Renal / GI', id:'gibleed', label:'Peptic ulcer / GI bleed history' },
    { group:'Renal / GI', id:'anticoag', label:'Anticoagulant / antiplatelet' },

    { group:'Cardiometabolic', id:'cvd', label:'Established cardiovascular disease', note:'Febuxostat caution (CARES)' },
    { group:'Cardiometabolic', id:'hf', label:'Heart failure' },
    { group:'Cardiometabolic', id:'htn', label:'Hypertension' },
    { group:'Cardiometabolic', id:'diuretic', label:'On a thiazide / loop diuretic', note:'Urate-raising — review' },

    { group:'Other comorbidity', id:'diabetes', label:'Diabetes' },
    { group:'Other comorbidity', id:'transplant', label:'Transplant / on azathioprine', note:'Allopurinol + azathioprine = dangerous' },
    { group:'Other comorbidity', id:'hla', label:'Han Chinese / Thai / Korean ethnicity', note:'HLA-B*5801 — allopurinol SJS risk' },

    { group:'Attack pattern', id:'tophi', label:'Tophi / chronic gouty arthritis' },
    { group:'Attack pattern', id:'frequent', label:'≥2 attacks/year, or any with CKD/tophi/urate stones', note:'Offer ULT' },
    { group:'Attack pattern', id:'polyarticular', label:'Severe / polyarticular flare' },

    { group:'Steroid factors', id:'sepsis', label:'Possible septic joint', note:'Aspirate first — do not assume gout' },
  ],

  flags: (f) => {
    const out = [];
    if (f.sepsis) out.push({ tone:'red', text:'A hot, swollen single joint is septic arthritis until proven otherwise — aspirate / refer before assuming gout' });
    if (f.transplant) out.push({ tone:'red', text:'Azathioprine + allopurinol → life-threatening myelosuppression; avoid the combination (xanthine oxidase block). Specialist advice.' });
    if (f.hla) out.push({ tone:'amber', text:'Higher HLA-B*5801 prevalence — consider testing before allopurinol (severe cutaneous reaction risk)' });
    if (f.diuretic) out.push({ tone:'amber', text:'Thiazide/loop diuretic raises urate — review whether it can be changed (e.g. to an alternative antihypertensive)' });
    if (f.frequent) out.push({ tone:'amber', text:'Recurrent attacks / CKD / tophi / urate stones — offer urate-lowering therapy (switch the decision toggle)' });
    return out;
  },

  drugs: [
    // ---------- ACUTE: NSAID ----------
    {
      id:'nsaid',
      name:'NSAID (e.g. naproxen) + PPI',
      examples:'Naproxen 750 mg then 250 mg TDS until 1–2 days after resolution',
      step:'Acute — first-line',
      source:'NICE NG219 · CKS Gout',
      sideEffects:'GI upset/bleed, fluid retention, renal impairment, ↑ BP',
      monitor:'Co-prescribe PPI; short course only',
      counsel:'"Take it with the stomach-protector I\'m adding, start at the first twinge of the next attack, and stop a day or two after it settles."',
      detail:{
        'Dose':'Naproxen 750 mg stat then 250 mg every 8 h; or other NSAID at full anti-inflammatory dose. Always co-prescribe a PPI.',
        'Key teaching':'First-line for acute gout where there is no contraindication. Give a "rescue pack" so the patient can self-start early in future flares.'
      },
      evaluate(f){
        if (f.phase === 'ult') return { tier:'avoid', reasons:[{kind:'neutral', text:'Not a urate-lowering drug — switch the decision toggle to "acute attack"'}] };
        if (f.ckd_severe) return { tier:'avoid', reasons:[{kind:'bad', text:'eGFR <30 — NSAID contraindicated; use colchicine (reduced dose) or steroid'}] };
        if (f.gibleed) return { tier:'avoid', reasons:[{kind:'bad', text:'Peptic ulcer / GI bleed — avoid NSAID'}] };
        const r = [];
        if (f.ckd) r.push({kind:'bad', text:'CKD — NSAID worsens renal function; prefer colchicine/steroid'});
        if (f.hf) r.push({kind:'bad', text:'Heart failure — NSAID causes fluid retention; avoid'});
        if (f.anticoag) r.push({kind:'bad', text:'On anticoagulant/antiplatelet — ↑ bleed risk; prefer steroid'});
        if (f.cvd) r.push({kind:'bad', text:'Established CVD — minimise NSAID; short course only if essential'});
        if (r.some(x => x.kind==='bad')) return { tier:'acceptable', reasons:r };
        return { tier:'preferred', reasons:[{kind:'good', text:'No GI/renal/cardiac contraindication — first-line; add PPI and give a rescue pack'}] };
      }
    },

    // ---------- ACUTE: COLCHICINE ----------
    {
      id:'colchicine',
      name:'Colchicine',
      examples:'500 mcg 2–4× daily until symptoms settle (max 6 mg/course)',
      step:'Acute — first-line (NSAID-unsuitable)',
      source:'NICE NG219 · BNF',
      sideEffects:'Diarrhoea (dose-limiting), nausea; toxicity in renal/hepatic impairment',
      monitor:'Reduce dose in CKD; beware interactions',
      counsel:'"Take it 2–4 times a day until the pain eases. The main side effect is diarrhoea — if that happens, drop the dose."',
      detail:{
        'Dose':'500 mcg 2–4 times daily until the attack settles; do not exceed 6 mg per course and do not repeat within 3 days.',
        'Interactions':'Statins (myopathy), clarithromycin/erythromycin, diltiazem/verapamil, ciclosporin — reduce dose / avoid.',
        'Key teaching':'Preferred acute option when NSAIDs are contraindicated. Lower dose and caution in CKD; avoid in severe renal/hepatic impairment.'
      },
      evaluate(f){
        if (f.phase === 'ult') return { tier:'avoid', reasons:[{kind:'neutral', text:'Used as short-term flare prophylaxis when starting ULT, but it does not lower urate — toggle to "acute attack"'}] };
        if (f.ckd_severe) return { tier:'acceptable', reasons:[{kind:'bad', text:'Severe CKD — reduce dose and use with caution (toxicity risk); steroid may be safer'}] };
        const r = [];
        if (f.ckd) r.push({kind:'bad', text:'CKD — reduce dose; monitor for toxicity'});
        if (f.gibleed || f.hf || f.anticoag || f.cvd) r.push({kind:'good', text:'Avoids NSAID risks (GI bleed, fluid retention, anticoagulation)'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Effective acute option, especially where NSAIDs are unsuitable'}] };
      }
    },

    // ---------- ACUTE: CORTICOSTEROID ----------
    {
      id:'steroid',
      name:'Oral corticosteroid (prednisolone)',
      examples:'Prednisolone 30–35 mg OD for ~5 days',
      step:'Acute — first-line (NSAID/colchicine unsuitable)',
      source:'NICE NG219 · CKS Gout',
      sideEffects:'Hyperglycaemia, mood/sleep, BP, short-course GI risk',
      monitor:'Glucose if diabetic; short course',
      counsel:'"A short 5-day steroid course settles the attack quickly. If you\'re diabetic your sugars may rise a little for a few days."',
      detail:{
        'Dose':'Prednisolone 30–35 mg daily for ~5 days. Intra-articular or IM steroid is an option for a single joint / when oral is unsuitable.',
        'Key teaching':'Best choice when both NSAIDs and colchicine are contraindicated (e.g. CKD + GI risk). Exclude septic arthritis first.'
      },
      evaluate(f){
        if (f.phase === 'ult') return { tier:'avoid', reasons:[{kind:'neutral', text:'Not urate-lowering — toggle to "acute attack"'}] };
        if (f.sepsis) return { tier:'avoid', reasons:[{kind:'bad', text:'Possible septic joint — do not give steroid until infection excluded by aspiration'}] };
        const r = [];
        if (f.ckd || f.ckd_severe) r.push({kind:'good', text:'CKD — steroid avoids NSAID nephrotoxicity and colchicine accumulation'});
        if (f.gibleed) r.push({kind:'good', text:'GI bleed history — safer short-course alternative to NSAID'});
        if (f.anticoag) r.push({kind:'good', text:'On anticoagulant — avoids NSAID bleed risk'});
        if (f.diabetes) r.push({kind:'bad', text:'Diabetes — short course will raise glucose; warn and monitor'});
        if (f.hf || f.htn) r.push({kind:'bad', text:'HF / hypertension — fluid retention; use the shortest course'});
        const preferred = (f.ckd || f.ckd_severe || f.gibleed || f.anticoag);
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Effective acute option; reserve where NSAID/colchicine unsuitable'}] };
      }
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
        'Key teaching':'First-line ULT. Co-prescribe colchicine 500 mcg OD/BD (or low-dose NSAID/steroid) as flare prophylaxis for up to 6 months. Do not start during an acute attack, but never stop established ULT during a flare.'
      },
      evaluate(f){
        if (f.phase === 'acute') return { tier:'avoid', reasons:[{kind:'neutral', text:'Do not start ULT mid-attack — toggle to "urate-lowering therapy". (Continue it if already established.)'}] };
        if (f.transplant) return { tier:'avoid', reasons:[{kind:'bad', text:'On azathioprine — allopurinol blocks its metabolism → severe myelosuppression. Avoid; specialist advice.'}] };
        const r = [];
        if (f.hla) r.push({kind:'bad', text:'Higher HLA-B*5801 prevalence — consider testing first (SJS/DRESS risk); febuxostat an alternative'});
        if (f.ckd) r.push({kind:'good', text:'CKD — preferred first-line ULT; start 50 mg and titrate cautiously to target'});
        if (f.cvd) r.push({kind:'good', text:'Established CVD — preferred over febuxostat (cardiovascular safety signal)'});
        if (f.frequent || f.tophi) r.push({kind:'good', text:'Recurrent attacks / tophi — clear indication for ULT'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line urate-lowering therapy, treat-to-target with flare cover'}] };
      }
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
      evaluate(f){
        if (f.phase === 'acute') return { tier:'avoid', reasons:[{kind:'neutral', text:'Not for the acute attack — toggle to "urate-lowering therapy"'}] };
        if (f.transplant) return { tier:'avoid', reasons:[{kind:'bad', text:'On azathioprine — same xanthine-oxidase interaction; avoid'}] };
        if (f.cvd || f.hf) return { tier:'avoid', reasons:[{kind:'bad', text:'Established CVD / heart failure — MHRA advise avoiding febuxostat'}] };
        const r = [];
        if (f.hla) r.push({kind:'good', text:'Useful alternative where allopurinol-related SJS risk is a concern'});
        if (f.ckd) r.push({kind:'neutral', text:'Can be used in mild–moderate CKD (limited dose adjustment)'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Second-line ULT after allopurinol intolerance/failure'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG219 — Gout: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng219' },
    { label:'NICE CKS — Gout', url:'https://cks.nice.org.uk/topics/gout/' },
    { label:'MHRA — Febuxostat (Adenuric): cardiovascular risk', url:'https://www.gov.uk/drug-safety-update' },
    { label:'BNF — Gout and hyperuricaemia', url:'https://bnf.nice.org.uk/treatment-summaries/gout-and-hyperuricaemia/' },
  ],
});
