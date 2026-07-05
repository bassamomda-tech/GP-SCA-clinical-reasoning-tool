/* ============================================
   Medication Chooser — Migraine (acute + prophylaxis)
   NICE CKS Migraine · NICE NG150 Headache · BNF
   ============================================ */
MedChooser.register('migraine', {
  title: 'Migraine — acute treatment & prophylaxis',
  subtitle: 'Two decisions sit side by side: abort the attack, and decide whether prophylaxis is warranted. NICE recommends a triptan + NSAID/paracetamol for the acute attack, and offers propranolol, topiramate or amitriptyline first-line for prevention — choice is driven by comorbidity, contraception, and pregnancy. Tick the profile; cards re-tier live.',
  guideline: 'NICE CKS Migraine · NICE NG150 · BNF',

  factors: [
    { group:'Decision', id:'phase', label:'Which decision?', options:[
      { value:'acute', label:'Acute attack — abort the headache' },
      { value:'prevent', label:'Prophylaxis — reduce frequency' },
    ]},

    { group:'Migraine pattern', id:'aura', label:'Migraine WITH aura', note:'Avoid oestrogen contraception' },
    { group:'Migraine pattern', id:'frequent', label:'≥4 migraine days/month or significant disability', note:'Offer prophylaxis' },
    { group:'Migraine pattern', id:'menstrual', label:'Clear menstrual pattern' },
    { group:'Migraine pattern', id:'overuse', label:'Acute meds ≥10–15 days/month', note:'Medication-overuse headache' },

    { group:'Demographics', id:'preg', label:'Pregnant or planning pregnancy' },
    { group:'Demographics', id:'bf', label:'Breastfeeding' },
    { group:'Demographics', id:'cbp', label:'Woman of childbearing potential', note:'Topiramate / valproate teratogenicity' },
    { group:'Demographics', id:'elderly', label:'Age ≥65 / vascular risk factors' },

    { group:'Cardiovascular', id:'ihd', label:'IHD / cerebrovascular / PAD', note:'Triptans contraindicated' },
    { group:'Cardiovascular', id:'uncontrolled_htn', label:'Uncontrolled hypertension', note:'Triptans contraindicated' },
    { group:'Cardiovascular', id:'asthma', label:'Asthma', note:'Propranolol contraindicated' },
    { group:'Cardiovascular', id:'lowbp', label:'Low BP / bradycardia' },

    { group:'Other comorbidity', id:'depression', label:'Depression / low mood' },
    { group:'Other comorbidity', id:'anxiety_insomnia', label:'Anxiety or insomnia' },
    { group:'Other comorbidity', id:'epilepsy', label:'Coexisting epilepsy' },
    { group:'Other comorbidity', id:'gibleed', label:'Peptic ulcer / GI bleed risk', note:'NSAID caution' },
    { group:'Other comorbidity', id:'ckd', label:'CKD / eGFR <30', note:'NSAID caution' },
    { group:'Other comorbidity', id:'nausea', label:'Prominent nausea / vomiting' },
    { group:'Other comorbidity', id:'glaucoma', label:'Narrow-angle glaucoma / renal stones', note:'Avoid topiramate' },
  ],

  flags: (f) => {
    const out = [];
    if (f.aura) out.push({ tone:'red', text:'Migraine with aura — combined hormonal (oestrogen) contraception is contraindicated (stroke risk); switch to progestogen-only / non-hormonal' });
    if ((f.ihd || f.uncontrolled_htn) ) out.push({ tone:'red', text:'Triptans are contraindicated in ischaemic heart/cerebrovascular/peripheral arterial disease and uncontrolled hypertension' });
    if (f.overuse) out.push({ tone:'amber', text:'Medication-overuse headache — withdraw the overused acute drug (abrupt for simple analgesics/triptans; consider prophylaxis cover) rather than escalating it' });
    if (f.preg && f.phase!=='prevent') out.push({ tone:'amber', text:'Pregnancy — paracetamol first-line acute; avoid NSAIDs in 3rd trimester and triptans where avoidable (sumatriptan has most data if needed)' });
    if ((f.preg || f.cbp) ) out.push({ tone:'red', text:'Topiramate and sodium valproate are teratogenic — do not use for prevention in pregnancy or without highly effective contraception (valproate effectively avoided in women of childbearing potential)' });
    return out;
  },

  drugs: [
    // ---------- ACUTE ----------
    {
      id:'triptan_nsaid',
      name:'Triptan + NSAID (or paracetamol)',
      examples:'Sumatriptan 50–100 mg PO at onset + naproxen/ibuprofen',
      step:'Acute — first-line',
      source:'NICE CKS Migraine',
      sideEffects:'Triptan: chest/throat tightness, tingling, drowsiness; NSAID: GI/renal',
      monitor:'Limit to ≤10 triptan days/month; review response after 3 attacks',
      counsel:'"Take the triptan as soon as the headache (not the aura) starts, with an anti-inflammatory. If it helps but comes back, you can repeat the triptan after 2 hours — but keep it to no more than about 10 days a month."',
      detail:{
        'Dose':'Sumatriptan 50–100 mg at headache onset; may repeat after ≥2 h if it recurs (max per BNF). Combine with naproxen 250–500 mg or ibuprofen 400 mg. Nasal/SC sumatriptan if vomiting.',
        'Key teaching':'First-line per NICE — a triptan plus an NSAID (or paracetamol) works better than either alone. Treat early. If one triptan fails, try an alternative triptan before abandoning the class.'
      },
      evaluate(f){
        if (f.phase === 'prevent') return { tier:'avoid', reasons:[{kind:'neutral', text:'Acute drug — switch the decision toggle to "prophylaxis"'}] };
        if (f.ihd || f.uncontrolled_htn) return { tier:'avoid', reasons:[{kind:'bad', text:'Triptan contraindicated in IHD/cerebrovascular/PAD or uncontrolled hypertension — use NSAID/paracetamol ± antiemetic'}] };
        const r = [];
        if (f.preg) r.push({kind:'bad', text:'Pregnancy — prefer paracetamol; use sumatriptan only if needed (most pregnancy data)'});
        if (f.elderly) r.push({kind:'bad', text:'Age ≥65 / vascular risk — assess cardiovascular risk before a triptan'});
        if (f.gibleed || f.ckd) r.push({kind:'bad', text:'Use paracetamol rather than the NSAID component (GI/renal risk)'});
        if (f.overuse) r.push({kind:'bad', text:'Triptan/analgesic overuse — limit days and withdraw; do not escalate'});
        if (r.some(x=>x.kind==='bad')) return { tier:'acceptable', reasons:r };
        return { tier:'preferred', reasons:[{kind:'good', text:'First-line: triptan + NSAID/paracetamol, taken early in the attack'}] };
      }
    },
    {
      id:'simple_analgesia',
      name:'NSAID or paracetamol (± aspirin)',
      examples:'Ibuprofen 400 mg / naproxen / aspirin 900 mg / paracetamol 1 g',
      step:'Acute — first-line (mild) / triptan-unsuitable',
      source:'NICE CKS Migraine',
      sideEffects:'NSAID/aspirin: GI, renal, bleed; paracetamol well tolerated',
      monitor:'Limit to <15 days/month (simple analgesics) to avoid overuse headache',
      counsel:'"For milder attacks a high-dose anti-inflammatory or soluble aspirin taken early can be enough. Keep it under 15 days a month so it doesn\'t start causing headaches itself."',
      detail:{
        'Dose':'Aspirin 900 mg, ibuprofen 400 mg or naproxen at onset; paracetamol 1 g if NSAID unsuitable. Soluble/effervescent preparations act faster.',
        'Key teaching':'Reasonable first step for milder attacks and the safe fallback when triptans are contraindicated. Paracetamol is the acute drug of choice in pregnancy.'
      },
      evaluate(f){
        if (f.phase === 'prevent') return { tier:'avoid', reasons:[{kind:'neutral', text:'Acute drug — switch to "prophylaxis"'}] };
        const useParacetamol = f.gibleed || f.ckd || f.preg;
        const r = [];
        if (f.ihd || f.uncontrolled_htn) r.push({kind:'good', text:'Safe alternative where triptans are contraindicated'});
        if (useParacetamol) r.push({kind:'neutral', text:'Use paracetamol rather than NSAID/aspirin here (GI/renal/pregnancy)'});
        if (f.overuse) r.push({kind:'bad', text:'Overuse headache — keep simple analgesics <15 days/month and withdraw if exceeded'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Effective for milder attacks; combine with a triptan for better response'}] };
      }
    },
    {
      id:'antiemetic',
      name:'Antiemetic (metoclopramide / prochlorperazine)',
      examples:'Metoclopramide 10 mg; prochlorperazine 3–6 mg buccal',
      step:'Acute — adjunct',
      source:'NICE CKS Migraine',
      sideEffects:'Extrapyramidal/dystonia (esp. young women, limit metoclopramide ≤5 days), drowsiness',
      monitor:'Short courses only; avoid metoclopramide long-term',
      counsel:'"I\'ll add something for the sickness — it also helps your body absorb the painkillers. We only use it for a few days at a time."',
      detail:{
        'Dose':'Metoclopramide 10 mg (max 5 days, avoid in young women where possible) or prochlorperazine. Buccal/IM useful if vomiting.',
        'Key teaching':'Add to acute treatment when nausea/vomiting is prominent — also improves absorption of oral analgesia. Offer even without vomiting per NICE.'
      },
      evaluate(f){
        if (f.phase === 'prevent') return { tier:'avoid', reasons:[{kind:'neutral', text:'Acute adjunct — switch to "prophylaxis"'}] };
        if (f.nausea) return { tier:'preferred', reasons:[{kind:'good', text:'Prominent nausea/vomiting — add an antiemetic and use a non-oral route if vomiting'}] };
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Useful adjunct; NICE suggests offering even without nausea to aid analgesic absorption'}] };
      }
    },

    // ---------- PROPHYLAXIS ----------
    {
      id:'propranolol',
      name:'Propranolol (beta-blocker)',
      examples:'80 mg/day in divided doses, up to 160 mg',
      step:'Prophylaxis — first-line',
      source:'NICE CKS Migraine',
      sideEffects:'Fatigue, cold extremities, bradycardia, vivid dreams; bronchospasm',
      monitor:'HR/BP; review benefit at 2–3 months at adequate dose',
      counsel:'"This is a daily preventer — give it 2–3 months at a proper dose before we judge it. It can make you feel a bit tired or cold-handed at first."',
      detail:{
        'Dose':'Start 80 mg/day (often 40 mg BD), titrate to 80–160 mg/day. Trial for at least 2–3 months at target dose.',
        'Key teaching':'First-line preventive and the safest of the three in women of childbearing potential and pregnancy. Avoid in asthma.'
      },
      evaluate(f){
        if (f.phase === 'acute') return { tier:'avoid', reasons:[{kind:'neutral', text:'Daily preventer — switch to "acute attack" for abortive options'}] };
        if (f.asthma) return { tier:'avoid', reasons:[{kind:'bad', text:'Asthma — non-selective beta-blocker contraindicated; use topiramate or amitriptyline'}] };
        const r = [];
        if (f.lowbp) r.push({kind:'bad', text:'Low BP/bradycardia — beta-blocker may worsen; consider alternative'});
        if (f.preg || f.cbp) r.push({kind:'good', text:'Preferred preventer in pregnancy / childbearing potential (avoids teratogenic topiramate/valproate)'});
        if (f.uncontrolled_htn) r.push({kind:'good', text:'Coexisting hypertension — dual benefit'});
        if (f.depression) r.push({kind:'neutral', text:'Use with awareness of possible mood/fatigue effects'});
        if (r.some(x=>x.kind==='bad')) return { tier:'acceptable', reasons:r };
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line prophylaxis; trial 2–3 months at adequate dose'}] };
      }
    },
    {
      id:'amitriptyline',
      name:'Amitriptyline (TCA)',
      examples:'10 mg at night, titrate to 25–75 mg',
      step:'Prophylaxis — first-line',
      source:'NICE CKS Migraine (off-label)',
      sideEffects:'Sedation, dry mouth, constipation, weight gain; caution in arrhythmia',
      monitor:'Review at adequate dose; warn re morning drowsiness/driving',
      counsel:'"A low dose of an old antidepressant, taken at night — it helps migraine, sleep and mood. Start low; the dry mouth and drowsiness usually settle."',
      detail:{
        'Dose':'Start 10 mg nocte, titrate slowly to 25–75 mg as tolerated. Off-label but well established.',
        'Key teaching':'Good choice where there is coexisting depression, anxiety, insomnia or tension-type headache. Anticholinergic load — caution in the elderly.'
      },
      evaluate(f){
        if (f.phase === 'acute') return { tier:'avoid', reasons:[{kind:'neutral', text:'Daily preventer — switch to "acute attack"'}] };
        const r = [];
        if (f.depression || f.anxiety_insomnia) r.push({kind:'good', text:'Coexisting low mood / anxiety / insomnia — single drug covers both'});
        if (f.asthma) r.push({kind:'good', text:'Suitable where propranolol contraindicated by asthma'});
        if (f.preg) r.push({kind:'neutral', text:'Used in pregnancy if needed (specialist/shared decision); propranolol generally preferred'});
        if (f.elderly) r.push({kind:'bad', text:'Elderly — anticholinergic/sedation and falls risk; start very low or avoid'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line option; particularly if sleep/mood symptoms coexist'}] };
      }
    },
    {
      id:'topiramate',
      name:'Topiramate',
      examples:'25 mg/day, titrate to 50–100 mg in divided doses',
      step:'Prophylaxis — first-line (with caution)',
      source:'NICE CKS Migraine · MHRA',
      sideEffects:'Paraesthesia, cognitive slowing, weight loss, renal stones, glaucoma',
      monitor:'Pregnancy prevention programme in women; mood; weight',
      counsel:'"An effective preventer, but it can affect concentration and is unsafe in pregnancy — so we need reliable contraception while you take it. Tingling in the fingers is common early on."',
      detail:{
        'Dose':'Start 25 mg nocte, titrate to 50–100 mg/day in 2 divided doses.',
        'Key teaching':'Effective but teratogenic and reduces hormonal contraceptive efficacy at higher doses — subject to the MHRA Pregnancy Prevention Programme. Avoid with glaucoma/renal stones. Useful where weight loss is desirable.'
      },
      evaluate(f){
        if (f.phase === 'acute') return { tier:'avoid', reasons:[{kind:'neutral', text:'Daily preventer — switch to "acute attack"'}] };
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Teratogenic — contraindicated in pregnancy'}] };
        if (f.glaucoma) return { tier:'avoid', reasons:[{kind:'bad', text:'Narrow-angle glaucoma / renal stones — avoid topiramate'}] };
        const r = [];
        if (f.cbp) r.push({kind:'bad', text:'Childbearing potential — only under the Pregnancy Prevention Programme with highly effective contraception; reduces hormonal contraceptive efficacy'});
        if (f.epilepsy) r.push({kind:'good', text:'Coexisting epilepsy — single drug may treat both'});
        if (f.asthma) r.push({kind:'good', text:'Suitable where propranolol contraindicated'});
        if (f.depression) r.push({kind:'bad', text:'Can worsen mood/cognition — caution with depression'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Effective first-line preventer; weigh cognitive/teratogenic risks'}] };
      }
    },
    {
      id:'menstrual_prophylaxis',
      name:'Perimenstrual triptan / NSAID (menstrual migraine)',
      examples:'Frovatriptan 2.5 mg BD or naproxen around menstruation',
      step:'Prophylaxis — targeted (menstrual)',
      source:'NICE CKS Migraine',
      sideEffects:'As for triptan/NSAID',
      monitor:'Use only around the predictable window',
      counsel:'"If your migraines cluster around your period, we can use a short preventive course just for those few days each month rather than a daily tablet."',
      detail:{
        'Dose':'Frovatriptan 2.5 mg BD (or zolmitriptan) from 2 days before until 3 days after onset of menstruation; or naproxen perimenstrually.',
        'Key teaching':'Mini-prophylaxis for predictable, pure menstrual migraine. Standard daily prophylaxis remains the option if attacks are not confined to menstruation.'
      },
      evaluate(f){
        if (f.phase === 'acute') return { tier:'avoid', reasons:[{kind:'neutral', text:'Preventive strategy — switch to "prophylaxis"'}] };
        if (!f.menstrual) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Only relevant for a clear menstrual pattern — tick that factor'}] };
        if (f.ihd || f.uncontrolled_htn) return { tier:'avoid', reasons:[{kind:'bad', text:'Triptan contraindicated — use perimenstrual NSAID instead'}] };
        return { tier:'preferred', reasons:[{kind:'good', text:'Clear menstrual pattern — targeted perimenstrual prophylaxis avoids daily medication'}] };
      }
    },
  ],

  sources: [
    { label:'NICE CKS — Migraine', url:'https://cks.nice.org.uk/topics/migraine/' },
    { label:'NICE NG150 — Headaches in over 12s', url:'https://www.nice.org.uk/guidance/ng150' },
    { label:'MHRA — Topiramate: Pregnancy Prevention Programme', url:'https://www.gov.uk/drug-safety-update' },
    { label:'BNF — Migraine', url:'https://bnf.nice.org.uk/treatment-summaries/migraine/' },
  ],
});
