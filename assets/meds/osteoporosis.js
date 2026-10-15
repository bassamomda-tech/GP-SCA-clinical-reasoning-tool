/* ============================================
   Medication Chooser — Osteoporosis (fragility-fracture prevention)
   NICE NG259 (July 2026; replaced CG146) · NICE TA464 · NOGG 2024 · BNF · ROS
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('osteoporosis', {
  title: 'Osteoporosis — bone protection',
  subtitle: 'Once treatment is indicated (FRAX/DXA, or a fragility fracture), an oral bisphosphonate is first-line for almost everyone. The decision shifts when swallowing/upper-GI factors, adherence, severe CKD, or very high fracture risk are present. Always optimise calcium/vitamin D first.',
  guideline: 'NICE NG259 (July 2026; replaced CG146) · NICE TA464 · NOGG 2024 · BNF',


  safety: [
    {"tone":"amber","label":"Planned invasive dental work / poor dentition","text":"Encourage a dental check and complete invasive dental work before starting; counsel on the (low) risk of osteonecrosis of the jaw."},
    {"tone":"red","label":"Uncorrected hypocalcaemia / low vitamin D","text":"Correct hypocalcaemia and replete vitamin D BEFORE starting any antiresorptive (bisphosphonate/denosumab) — risk of symptomatic hypocalcaemia."}
  ],

  drugs: [
    {
      id:'calcium_vitd',
      name:'Calcium + vitamin D (foundation)',
      examples:'Ensure adequate calcium intake + colecalciferol if deficient',
      step:'Foundation — for everyone',
      source:'NOGG 2024 · BNF',
      sideEffects:'Constipation, bloating (calcium); usually well tolerated',
      monitor:'Correct deficiency before antiresorptives',
      counsel:'"Before and during bone treatment we make sure your calcium and vitamin D are topped up — the bone tablets don\'t work properly without them."',
      detail:{ 'Key teaching':'Supplement vitamin D if deficient/insufficient and calcium if dietary intake is inadequate. Essential before any bisphosphonate or denosumab.' },
      
    },
    {
      id:'alendronate',
      name:'Oral bisphosphonate (alendronate)',
      examples:'Alendronic acid 70 mg once weekly',
      step:'First-line',
      source:'NICE TA464 · NOGG 2024',
      sideEffects:'Oesophagitis, dyspepsia, rare ONJ / atypical femoral fracture',
      monitor:'Review need at ~5 years (drug holiday in lower-risk)',
      counsel:'"Take it first thing on an empty stomach with a full glass of plain water, then stay upright and don\'t eat for 30 minutes — that protects your gullet. We\'ll review it after about 5 years."',
      detail:{
        'Dose':'Alendronate 70 mg weekly (or risedronate 35 mg weekly). Take on rising, with water, sit/stand upright ≥30 min, before food/other drugs.',
        'Key teaching':'First-line and most cost-effective. Reassess after 5 years (oral) / 3 years (IV) — consider a drug holiday if risk has fallen.'
      },
      conditions: [
        {"kind":"avoid","label":"GORD / oesophagitis / Barrett's","text":"Upper-GI disease / cannot stay upright — oral bisphosphonate contraindicated; use IV zoledronate or denosumab"},
        {"kind":"avoid","label":"Cannot sit upright / swallowing difficulty","text":"Upper-GI disease / cannot stay upright — oral bisphosphonate contraindicated; use IV zoledronate or denosumab"},
        {"kind":"avoid","label":"eGFR <35","text":"eGFR <35 — bisphosphonates contraindicated; consider denosumab"},
        {"kind":"caution","label":"Malabsorption / bariatric surgery","text":"Malabsorption/bariatric surgery — oral absorption poor; consider IV/SC route"},
        {"kind":"caution","label":"Adherence concerns / polypharmacy","text":"Adherence concerns — weekly dosing regimen often poorly sustained; consider IV zoledronate (annual)"},
        {"kind":"favoured","label":"Prior fragility fracture","text":"Clear treatment indication — start first-line oral bisphosphonate"},
        {"kind":"favoured","label":"Long-term oral corticosteroid","text":"Clear treatment indication — start first-line oral bisphosphonate"}
      ]
    },
    {
      id:'zoledronate',
      name:'IV zoledronate',
      examples:'Zoledronic acid 5 mg IV once yearly',
      step:'2nd-line / adherence / GI issues',
      source:'NICE TA464 · NOGG 2024',
      sideEffects:'Acute-phase flu-like reaction (first dose), rare ONJ/AFF',
      monitor:'Correct calcium/vit D and check renal function first',
      counsel:'"A once-a-year drip avoids the daily/weekly tablets and the gullet precautions. The first infusion can give a few days of flu-like aching — paracetamol helps."',
      detail:{ 'Key teaching':'Good where oral bisphosphonates are not tolerated, GI contraindication, or adherence is poor. Avoid if eGFR <35. Pre-medicate/hydrate; warn re acute-phase reaction.' },
      conditions: [
        {"kind":"avoid","label":"eGFR <35","text":"eGFR <35 — zoledronate contraindicated; consider denosumab"},
        {"kind":"favoured","label":"Very high risk / multiple vertebral fractures","text":"Potent option in high fracture risk"},
        {"kind":"favoured","label":"GORD / oesophagitis / Barrett's","text":"Avoids oral/upper-GI route — suitable alternative"},
        {"kind":"favoured","label":"Cannot sit upright / swallowing difficulty","text":"Avoids oral/upper-GI route — suitable alternative"},
        {"kind":"favoured","label":"Malabsorption / bariatric surgery","text":"Avoids oral/upper-GI route — suitable alternative"},
        {"kind":"favoured","label":"Adherence concerns / polypharmacy","text":"Annual dosing improves adherence"}
      ]
    },
    {
      id:'denosumab',
      name:'Denosumab (SC)',
      examples:'60 mg SC every 6 months',
      step:'2nd-line (CKD / bisphosphonate-unsuitable)',
      source:'NICE TA204 · NOGG 2024',
      sideEffects:'Hypocalcaemia, rebound vertebral fractures if stopped, ONJ',
      monitor:'Calcium/vit D before each dose; never delay/stop without follow-on therapy',
      counsel:'"A 6-monthly injection that suits kidney problems. The key rule: it must not be stopped abruptly — bone loss rebounds fast — so we plan ahead and keep the doses on time."',
      detail:{ 'Key teaching':'Useful when bisphosphonates contraindicated, including CKD. Do NOT stop without consolidating with a bisphosphonate — rebound fractures. Correct calcium/vit D first.' },
      conditions: [
        {"kind":"avoid","label":"Uncorrected hypocalcaemia / low vitamin D","text":"Correct hypocalcaemia/vit D first — denosumab can cause severe hypocalcaemia"},
        {"kind":"favoured","label":"GORD / oesophagitis / Barrett's","text":"No oral/GI route — suitable where bisphosphonates contraindicated"},
        {"kind":"favoured","label":"Cannot sit upright / swallowing difficulty","text":"No oral/GI route — suitable where bisphosphonates contraindicated"},
        {"kind":"favoured","label":"eGFR <35","text":"eGFR <35 — preferred over bisphosphonates (not renally cleared the same way)"},
        {"kind":"favoured","label":"Breast cancer history / on aromatase inhibitor","text":"Aromatase-inhibitor bone loss — recognised role"}
      ]
    },
    {
      id:'hrt_raloxifene',
      name:'HRT / raloxifene',
      examples:'HRT (younger/perimenopausal); raloxifene (SERM)',
      step:'Selected women',
      source:'NOGG 2024 · NICE NG23',
      sideEffects:'VTE risk (both); HRT per menopause profile; raloxifene worsens hot flushes',
      monitor:'Assess VTE/breast risk',
      counsel:'"In younger women around menopause, HRT both protects bone and treats flushes. Raloxifene is a bone-only option but can worsen flushes and carries a small clot risk."',
      detail:{ 'Key teaching':'HRT is appropriate for fracture prevention in younger post-/perimenopausal women, especially with vasomotor symptoms or early menopause. Raloxifene reduces vertebral fracture and breast-cancer risk but increases VTE and hot flushes.' },
      conditions: [
        {"kind":"avoid","label":"Very high risk / multiple vertebral fractures","text":"Very high fracture risk — these are not the most potent options; prefer bisphosphonate/denosumab ± specialist anabolic"},
        {"kind":"avoid","label":"Breast cancer history / on aromatase inhibitor","text":"Breast cancer history — HRT generally avoided; raloxifee per specialist"},
        {"kind":"favoured","label":"Early menopause / vasomotor symptoms","text":"Early menopause / vasomotor symptoms — HRT protects bone and treats symptoms"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG259 — Osteoporosis: risk assessment (July 2026; replaced CG146)', url:'https://www.nice.org.uk/guidance/ng259' },
    { label:'NOGG 2024 — UK clinical guideline for the prevention and treatment of osteoporosis', url:'https://www.nogg.org.uk/' },
    { label:'NICE TA464 — Bisphosphonates for osteoporosis', url:'https://www.nice.org.uk/guidance/ta464' },
    { label:'Royal Osteoporosis Society — Clinical guidance', url:'https://theros.org.uk/healthcare-professionals/' }
  ],
});
