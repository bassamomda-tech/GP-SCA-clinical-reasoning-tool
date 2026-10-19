/* ============================================
   Medication Chooser — Hypercholesterolaemia / lipid modification
   NICE NG238 · CG71 (FH) · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('hypercholesterolaemia', {
  title: 'Lipid modification — statin & add-on selection',
  subtitle: 'Primary vs secondary prevention intensity and the add-on ladder to a >40% non-HDL reduction (NICE NG238).',
  guideline: 'NICE NG238 · CG71 (FH) · SPC',


  safety: [
    {"tone":"amber","label":"Suspected familial hypercholesterolaemia","text":"Suspected FH (CG71) — use Simon Broome/DLCN criteria, do NOT use QRISK; high-intensity statin + specialist referral; cascade-test relatives"},
    {"tone":"red","label":"Pregnant / planning / breastfeeding","text":"Pregnancy/planning/breastfeeding — statins, ezetimibe and PCSK9i contraindicated; stop and refer if FH"},
    {"tone":"amber","label":"Untreated hypothyroidism","text":"Treat hypothyroidism first — corrects lipids and reduces statin myopathy risk"},
    {"tone":"amber","label":"ALT/AST >3× ULN","text":"ALT/AST >3× ULN — do not start/▲ statin until investigated"},
    {"tone":"amber","label":"Triglycerides markedly raised (>4.5)","text":"Triglycerides >4.5 — exclude secondary causes; if >10 risk of pancreatitis, refer; fibrate/omega-3 territory"}
  ],

  drugs: [
    // -------- HIGH-INTENSITY STATIN --------
    {
      id:'high_statin',
      name:'High-intensity statin',
      examples:'Atorvastatin 20 mg (primary) / 80 mg (secondary)',
      step:'1st-line',
      source:'NICE NG238 §1.3',
      sideEffects:'Myalgia, deranged LFTs, rarely myopathy/rhabdomyolysis, small ↑ diabetes risk',
      monitor:'LFTs baseline/3/12 months; lipids at 3 months (aim >40% non-HDL fall); CK if myalgia',
      counsel:'"This lowers cholesterol and stabilises the artery lining — far more than diet alone. Some muscle aches are common and usually settle; let us know rather than just stopping."',
      detail:{
        'Dose': 'Primary prevention: atorvastatin 20 mg OD. Secondary prevention/FH: atorvastatin 80 mg OD (reduce if interactions/intolerance)',
        'Interactions': 'Amlodipine/diltiazem and macrolides ↑ levels (avoid simvastatin 80); grapefruit; ciclosporin',
        'Key teaching': 'Aim for more than 40% reduction in non-HDL cholesterol at 3 months. Atorvastatin/rosuvastatin are the high-intensity statins of choice.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant / planning / breastfeeding","text":"Pregnancy — contraindicated"},
        {"kind":"avoid","label":"ALT/AST >3× ULN","text":"ALT/AST >3× ULN — do not start until investigated"},
        {"kind":"avoid","label":"True intolerance to ≥2 statins","text":"True intolerance to ≥2 statins — move to ezetimibe ± injectable"},
        {"kind":"favoured","label":"Established CVD (secondary prevention)","text":"Established CVD — atorvastatin 80 mg, the cornerstone of secondary prevention"},
        {"kind":"favoured","label":"Primary prevention, QRISK3 ≥10%","text":"QRISK3 ≥10% — atorvastatin 20 mg primary prevention"},
        {"kind":"favoured","label":"Type 1 diabetes (qualifying)","text":"Type 1 diabetes (qualifying) — atorvastatin 20 mg"},
        {"kind":"favoured","label":"CKD (eGFR <60 / ACR raised)","text":"CKD — atorvastatin 20 mg; increase if non-HDL fall <40% and eGFR ≥30"},
        {"kind":"favoured","label":"Suspected familial hypercholesterolaemia","text":"FH — high-intensity statin regardless of QRISK"},
        {"kind":"note","label":"Age >84","text":"Older/frail — individualise; secondary prevention still usually worthwhile"},
        {"kind":"note","label":"Frail / limited life expectancy","text":"Older/frail — individualise; secondary prevention still usually worthwhile"},
        {"kind":"note","label":"Statin myalgia / prior intolerance","text":"Prior myalgia — try lower dose / alternate-day / switch to rosuvastatin before abandoning"},
        {"kind":"note","label":"Interacting drug (amlodipine, diltiazem, macrolide)","text":"Interacting drug — use atorvastatin/rosuvastatin (not high-dose simvastatin)"}
      ]
    },

    // -------- MODERATE / LOWER-INTENSITY STATIN --------
    {
      id:'mod_statin',
      name:'Lower-intensity statin',
      examples:'Atorvastatin 10 · Rosuvastatin 5 · Pravastatin',
      step:'Intolerance / interaction',
      source:'NICE NG238',
      sideEffects:'As statins, lower incidence at reduced dose',
      monitor:'Lipids + LFTs as above',
      counsel:'"If the full dose doesn\'t suit you, a lower or gentler statin still gives much of the benefit — some statin is far better than none."',
      detail:{
        'Dose': 'e.g. atorvastatin 10 mg, rosuvastatin 5 mg, or pravastatin (fewer interactions)',
        'Key teaching': 'For statin-intolerant patients try a lower dose or a less-interacting statin (pravastatin/fluvastatin/rosuvastatin) before declaring intolerance.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant / planning / breastfeeding","text":"Pregnancy — contraindicated"},
        {"kind":"favoured","label":"Statin myalgia / prior intolerance","text":"Myalgia — lower dose / less-interacting statin is the next step"},
        {"kind":"favoured","label":"Interacting drug (amlodipine, diltiazem, macrolide)","text":"Interacting drug — a low-interaction statin (e.g. pravastatin) helps"},
        {"kind":"note","label":"eGFR <30","text":"eGFR <30 — cautious dosing, specialist input"}
      ]
    },

    // -------- EZETIMIBE --------
    {
      id:'ezetimibe',
      name:'Ezetimibe',
      examples:'Ezetimibe 10 mg OD',
      step:'Add-on / intolerance',
      source:'NICE NG238 · TA385',
      sideEffects:'Generally well tolerated; GI upset, occasional myalgia',
      monitor:'Lipids at 3 months',
      counsel:'"A second, different tablet that blocks cholesterol absorption from food — we add it when the statin alone isn\'t getting you to target, or instead of a statin if they don\'t suit."',
      detail:{
        'Dose': 'Ezetimibe 10 mg OD, alone or added to a statin',
        'Key teaching': 'First add-on when non-HDL reduction <40% on a maximal tolerated statin; or monotherapy if statins not tolerated.'
      },
      conditions: [
        {"kind":"favoured","label":"Non-HDL reduction <40% on max statin","text":"Below target on max statin — first add-on"},
        {"kind":"favoured","label":"Statin myalgia / prior intolerance","text":"Statin intolerance — ezetimibe monotherapy is the recommended alternative"},
        {"kind":"favoured","label":"True intolerance to ≥2 statins","text":"Statin intolerance — ezetimibe monotherapy is the recommended alternative"}
      ]
    },

    // -------- INJECTABLE / NOVEL --------
    {
      id:'injectable',
      name:'PCSK9 inhibitor / inclisiran / bempedoic acid',
      examples:'Alirocumab · Evolocumab · Inclisiran · Bempedoic acid',
      step:'Specialist add-on (thresholds)',
      source:'NICE TA393/394 · TA733 · TA694',
      sideEffects:'Injection-site reactions (PCSK9i/inclisiran); bempedoic acid — gout/tendon, raised urate',
      monitor:'Specialist/lipid-clinic initiated; LDL response',
      counsel:'"If tablets can\'t get your cholesterol low enough — especially with inherited high cholesterol or existing heart disease — there are injections given every few weeks or twice a year that are very effective."',
      detail:{
        'Dose': 'PCSK9i SC every 2–4 weeks; inclisiran SC at 0, 3 months then 6-monthly; bempedoic acid oral (with ezetimibe)',
        'Key teaching': 'NICE TA393/TA394 (PCSK9i) thresholds apply (LDL persistently high despite statin+ezetimibe, e.g. ≥4.0/≥3.5 mmol/L depending on FH/CVD risk); inclisiran (NICE TA733) after a previous CV event with LDL persistently ≥2.6 mmol/L. Usually lipid-clinic initiated.'
      },
      conditions: [
        {"kind":"favoured","label":"Suspected familial hypercholesterolaemia","text":"FH not at target — common route to PCSK9i/inclisiran (meets NICE TA393/TA394/TA733 thresholds)"},
        {"kind":"note","label":"True intolerance to ≥2 statins","text":"Specialist add-on when NICE TA393/TA394/TA733 LDL thresholds are met"},
        {"kind":"note","label":"Would accept injectable therapy","text":"Specialist add-on when NICE TA393/TA394/TA733 LDL thresholds are met"}
      ]
    },

    // -------- FIBRATE / OMEGA-3 (TG) --------
    {
      id:'tg_therapy',
      name:'Fibrate / high TG management',
      examples:'Fenofibrate (specialist) · address secondary causes',
      step:'Hypertriglyceridaemia',
      source:'NICE NG238 · SPC',
      sideEffects:'Fibrate — myopathy (esp. with statin), GI, gallstones',
      monitor:'Repeat fasting TG; specialist if >10 (pancreatitis risk)',
      counsel:'"Your triglyceride fat is high — first we\'ll look at alcohol, weight and diabetes control. Occasionally a specific tablet is needed to prevent pancreas inflammation."',
      detail:{
        'Dose': 'Address alcohol, weight, glycaemic control first; fenofibrate usually specialist-guided',
        'Key teaching': 'Statins are NOT primarily for isolated high TG. TG >20 mmol/L (not due to alcohol or poor glycaemic control) — urgent specialist referral; TG 10–20 — fasting repeat within 2 weeks and specialist advice if still >10 (NICE NG238). Routine omega-3/fibrates not recommended for CVD prevention.'
      },
      conditions: [
        {"kind":"favoured","label":"Triglycerides markedly raised (>4.5)","text":"Markedly raised TG — address secondary causes; consider specialist therapy · If TG >20 (not due to alcohol or poor glycaemic control) — urgent specialist referral; TG 10–20 — fasting repeat and specialist advice if still >10 (NICE NG238)"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG238 — Cardiovascular disease: risk assessment and reduction', url:'https://www.nice.org.uk/guidance/ng238' },
    { label:'NICE CG71 — Familial hypercholesterolaemia', url:'https://www.nice.org.uk/guidance/cg71' },
    { label:'NICE NG238 — CVD risk and lipid modification', url:'https://www.nice.org.uk/guidance/ng238' },
    { label:'BNF — Hypercholesterolaemia / lipid-regulating drugs', url:'https://bnf.nice.org.uk/treatment-summaries/dyslipidaemias/' }
  ],
});
