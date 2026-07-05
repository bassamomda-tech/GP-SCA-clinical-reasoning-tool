/* ============================================
   Medication Chooser — Osteoporosis (fragility-fracture prevention)
   NICE NG226 · CKS Osteoporosis · BNF · ROS
   ============================================ */
MedChooser.register('osteoporosis', {
  title: 'Osteoporosis — bone protection',
  subtitle: 'Once treatment is indicated (FRAX/DXA, or a fragility fracture), an oral bisphosphonate is first-line for almost everyone. The decision shifts when swallowing/upper-GI factors, adherence, severe CKD, or very high fracture risk are present. Always optimise calcium/vitamin D first. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG226 · CKS · BNF',

  factors: [
    { group:'Risk / indication', id:'fracture', label:'Prior fragility fracture' },
    { group:'Risk / indication', id:'veryhigh', label:'Very high risk / multiple vertebral fractures' },
    { group:'Risk / indication', id:'steroid', label:'Long-term oral corticosteroid' },

    { group:'GI / swallowing', id:'reflux', label:'GORD / oesophagitis / Barrett\'s' },
    { group:'GI / swallowing', id:'swallow', label:'Cannot sit upright / swallowing difficulty' },
    { group:'GI / swallowing', id:'malabsorption', label:'Malabsorption / bariatric surgery' },

    { group:'Renal / dental', id:'ckd', label:'eGFR <35' },
    { group:'Renal / dental', id:'dental', label:'Planned invasive dental work / poor dentition', note:'ONJ risk' },
    { group:'Renal / dental', id:'hypocalc', label:'Uncorrected hypocalcaemia / low vitamin D' },

    { group:'Practical', id:'adherence', label:'Adherence concerns / polypharmacy' },
    { group:'Menopause', id:'menopausal', label:'Early menopause / vasomotor symptoms' },
    { group:'Practical', id:'breast', label:'Breast cancer history / on aromatase inhibitor' },
  ],

  flags: (f) => {
    const out = [];
    if (f.hypocalc) out.push({ tone:'red', text:'Correct hypocalcaemia and replete vitamin D BEFORE starting any antiresorptive (bisphosphonate/denosumab) — risk of symptomatic hypocalcaemia.' });
    if (f.dental) out.push({ tone:'amber', text:'Encourage a dental check and complete invasive dental work before starting; counsel on the (low) risk of osteonecrosis of the jaw.' });
    return out;
  },

  drugs: [
    {
      id:'calcium_vitd',
      name:'Calcium + vitamin D (foundation)',
      examples:'Ensure adequate calcium intake + colecalciferol if deficient',
      step:'Foundation — for everyone',
      source:'NICE NG226 · CKS',
      sideEffects:'Constipation, bloating (calcium); usually well tolerated',
      monitor:'Correct deficiency before antiresorptives',
      counsel:'"Before and during bone treatment we make sure your calcium and vitamin D are topped up — the bone tablets don\'t work properly without them."',
      detail:{ 'Key teaching':'Supplement vitamin D if deficient/insufficient and calcium if dietary intake is inadequate. Essential before any bisphosphonate or denosumab.' },
      evaluate(f){ return { tier:'preferred', reasons:[{kind:'good', text:'Ensure adequate calcium and vitamin D in all patients on bone-protection therapy'}] }; }
    },
    {
      id:'alendronate',
      name:'Oral bisphosphonate (alendronate)',
      examples:'Alendronic acid 70 mg once weekly',
      step:'First-line',
      source:'NICE NG226 · TA464',
      sideEffects:'Oesophagitis, dyspepsia, rare ONJ / atypical femoral fracture',
      monitor:'Review need at ~5 years (drug holiday in lower-risk)',
      counsel:'"Take it first thing on an empty stomach with a full glass of plain water, then stay upright and don\'t eat for 30 minutes — that protects your gullet. We\'ll review it after about 5 years."',
      detail:{
        'Dose':'Alendronate 70 mg weekly (or risedronate 35 mg weekly). Take on rising, with water, sit/stand upright ≥30 min, before food/other drugs.',
        'Key teaching':'First-line and most cost-effective. Reassess after 5 years (oral) / 3 years (IV) — consider a drug holiday if risk has fallen.'
      },
      evaluate(f){
        if (f.reflux || f.swallow) return { tier:'avoid', reasons:[{kind:'bad', text:'Upper-GI disease / cannot stay upright — oral bisphosphonate contraindicated; use IV zoledronate or denosumab'}] };
        if (f.ckd) return { tier:'avoid', reasons:[{kind:'bad', text:'eGFR <35 — bisphosphonates contraindicated; consider denosumab'}] };
        const r = [];
        if (f.malabsorption) r.push({kind:'bad', text:'Malabsorption/bariatric surgery — oral absorption poor; consider IV/SC route'});
        if (f.adherence) r.push({kind:'bad', text:'Adherence concerns — weekly dosing regimen often poorly sustained; consider IV zoledronate (annual)'});
        if (f.fracture || f.steroid) r.push({kind:'good', text:'Clear treatment indication — start first-line oral bisphosphonate'});
        if (r.some(x=>x.kind==='bad')) return { tier:'acceptable', reasons:r };
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line bone protection; counsel carefully on dosing instructions'}] };
      }
    },
    {
      id:'zoledronate',
      name:'IV zoledronate',
      examples:'Zoledronic acid 5 mg IV once yearly',
      step:'2nd-line / adherence / GI issues',
      source:'NICE NG226 · TA464',
      sideEffects:'Acute-phase flu-like reaction (first dose), rare ONJ/AFF',
      monitor:'Correct calcium/vit D and check renal function first',
      counsel:'"A once-a-year drip avoids the daily/weekly tablets and the gullet precautions. The first infusion can give a few days of flu-like aching — paracetamol helps."',
      detail:{ 'Key teaching':'Good where oral bisphosphonates are not tolerated, GI contraindication, or adherence is poor. Avoid if eGFR <35. Pre-medicate/hydrate; warn re acute-phase reaction.' },
      evaluate(f){
        if (f.ckd) return { tier:'avoid', reasons:[{kind:'bad', text:'eGFR <35 — zoledronate contraindicated; consider denosumab'}] };
        const r = [];
        if (f.reflux || f.swallow || f.malabsorption) r.push({kind:'good', text:'Avoids oral/upper-GI route — suitable alternative'});
        if (f.adherence) r.push({kind:'good', text:'Annual dosing improves adherence'});
        if (f.veryhigh) r.push({kind:'good', text:'Potent option in high fracture risk'});
        return { tier: (r.length ? 'preferred':'acceptable'), reasons: r.length ? r : [{kind:'neutral', text:'Effective parenteral bisphosphonate where oral unsuitable'}] };
      }
    },
    {
      id:'denosumab',
      name:'Denosumab (SC)',
      examples:'60 mg SC every 6 months',
      step:'2nd-line (CKD / bisphosphonate-unsuitable)',
      source:'NICE NG226 · TA204',
      sideEffects:'Hypocalcaemia, rebound vertebral fractures if stopped, ONJ',
      monitor:'Calcium/vit D before each dose; never delay/stop without follow-on therapy',
      counsel:'"A 6-monthly injection that suits kidney problems. The key rule: it must not be stopped abruptly — bone loss rebounds fast — so we plan ahead and keep the doses on time."',
      detail:{ 'Key teaching':'Useful when bisphosphonates contraindicated, including CKD. Do NOT stop without consolidating with a bisphosphonate — rebound fractures. Correct calcium/vit D first.' },
      evaluate(f){
        if (f.hypocalc) return { tier:'avoid', reasons:[{kind:'bad', text:'Correct hypocalcaemia/vit D first — denosumab can cause severe hypocalcaemia'}] };
        const r = [];
        if (f.ckd) r.push({kind:'good', text:'eGFR <35 — preferred over bisphosphonates (not renally cleared the same way)'});
        if (f.reflux || f.swallow) r.push({kind:'good', text:'No oral/GI route — suitable where bisphosphonates contraindicated'});
        if (f.breast) r.push({kind:'good', text:'Aromatase-inhibitor bone loss — recognised role'});
        return { tier: (r.length ? 'preferred':'acceptable'), reasons: r.length ? r : [{kind:'neutral', text:'Second-line antiresorptive; mind the no-abrupt-stop rule'}] };
      }
    },
    {
      id:'hrt_raloxifene',
      name:'HRT / raloxifene',
      examples:'HRT (younger/perimenopausal); raloxifene (SERM)',
      step:'Selected women',
      source:'NICE NG226 · CKS',
      sideEffects:'VTE risk (both); HRT per menopause profile; raloxifene worsens hot flushes',
      monitor:'Assess VTE/breast risk',
      counsel:'"In younger women around menopause, HRT both protects bone and treats flushes. Raloxifene is a bone-only option but can worsen flushes and carries a small clot risk."',
      detail:{ 'Key teaching':'HRT is appropriate for fracture prevention in younger post-/perimenopausal women, especially with vasomotor symptoms or early menopause. Raloxifene reduces vertebral fracture and breast-cancer risk but increases VTE and hot flushes.' },
      evaluate(f){
        if (f.breast) return { tier:'avoid', reasons:[{kind:'bad', text:'Breast cancer history — HRT generally avoided; raloxifee per specialist'}] };
        const r = [];
        if (f.menopausal) r.push({kind:'good', text:'Early menopause / vasomotor symptoms — HRT protects bone and treats symptoms'});
        if (f.veryhigh) r.push({kind:'bad', text:'Very high fracture risk — these are not the most potent options; prefer bisphosphonate/denosumab ± specialist anabolic'});
        return { tier: (f.menopausal ? 'acceptable':'avoid'), reasons: r.length ? r : [{kind:'neutral', text:'Niche role; consider in younger women, not as default bone protection'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG226 — Osteoporosis: assessing the risk of fragility fracture', url:'https://www.nice.org.uk/guidance/ng226' },
    { label:'NICE CKS — Osteoporosis: prevention of fragility fractures', url:'https://cks.nice.org.uk/topics/osteoporosis-prevention-of-fragility-fractures/' },
    { label:'NICE TA464 — Bisphosphonates for osteoporosis', url:'https://www.nice.org.uk/guidance/ta464' },
    { label:'Royal Osteoporosis Society — Clinical guidance', url:'https://theros.org.uk/healthcare-professionals/' },
  ],
});
