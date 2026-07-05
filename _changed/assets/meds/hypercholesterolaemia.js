/* ============================================
   Medication Chooser — Hypercholesterolaemia / lipid modification
   NICE NG238 · CG71 (FH) · CKS · BNF
   ============================================ */
MedChooser.register('hypercholesterolaemia', {
  title: 'Lipid modification — statin & add-on selection',
  subtitle: 'Primary vs secondary prevention intensity and the add-on ladder to a >40% non-HDL reduction (NICE NG238). Tick the patient profile; cards re-tier live.',
  guideline: 'NICE NG238 · CG71 (FH) · BNF',

  factors: [
    // Indication
    { group:'Indication', id:'secondary', label:'Established CVD (secondary prevention)', note:'High-intensity, atorvastatin 80' },
    { group:'Indication', id:'primary_q10', label:'Primary prevention, QRISK3 ≥10%' },
    { group:'Indication', id:'t1dm', label:'Type 1 diabetes (qualifying)', note:'Offer atorvastatin 20' },
    { group:'Indication', id:'ckd', label:'CKD (eGFR <60 / ACR raised)', note:'Atorvastatin 20, review' },
    { group:'Indication', id:'fh', label:'Suspected familial hypercholesterolaemia', note:'TC >7.5 / FH features' },
    { group:'Indication', id:'not_target', label:'Non-HDL reduction <40% on max statin', note:'Add-on therapy' },

    // Demographics
    { group:'Demographics', id:'over84', label:'Age >84' },
    { group:'Demographics', id:'preg', label:'Pregnant / planning / breastfeeding', note:'Stop statin' },
    { group:'Demographics', id:'frail', label:'Frail / limited life expectancy' },

    // Bloods / cause
    { group:'Bloods & cause', id:'hypothyroid', label:'Untreated hypothyroidism', note:'Treat before statin' },
    { group:'Bloods & cause', id:'lft_high', label:'ALT/AST >3× ULN' },
    { group:'Bloods & cause', id:'high_tg', label:'Triglycerides markedly raised (>4.5)' },
    { group:'Bloods & cause', id:'ckd_severe', label:'eGFR <30' },

    // Allergy / intolerance
    { group:'Allergy / intolerance', id:'myalgia', label:'Statin myalgia / prior intolerance' },
    { group:'Allergy / intolerance', id:'true_intol', label:'True intolerance to ≥2 statins' },

    // Current medications
    { group:'Current medications', id:'interacting', label:'Interacting drug (amlodipine, diltiazem, macrolide)', note:'Avoid high-dose simvastatin' },
    { group:'Current medications', id:'ciclosporin', label:'Ciclosporin / strong CYP3A4 inhibitor' },

    // Preference / context
    { group:'Preference / context', id:'injection_ok', label:'Would accept injectable therapy' },
  ],

  flags: (f) => {
    const out = [];
    if (f.preg) out.push({ tone:'red', text:'Pregnancy/planning/breastfeeding — statins, ezetimibe and PCSK9i contraindicated; stop and refer if FH' });
    if (f.hypothyroid) out.push({ tone:'amber', text:'Treat hypothyroidism first — corrects lipids and reduces statin myopathy risk' });
    if (f.fh) out.push({ tone:'amber', text:'Suspected FH (CG71) — use Simon Broome/DLCN criteria, do NOT use QRISK; high-intensity statin + specialist referral; cascade-test relatives' });
    if (f.high_tg) out.push({ tone:'amber', text:'Triglycerides >4.5 — exclude secondary causes; if >10 risk of pancreatitis, refer; fibrate/omega-3 territory' });
    if (f.lft_high) out.push({ tone:'amber', text:'ALT/AST >3× ULN — do not start/▲ statin until investigated' });
    return out;
  },

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
        'Key teaching': 'Aim for ≥40% reduction in non-HDL cholesterol at 3 months. Atorvastatin/rosuvastatin are the high-intensity statins of choice.'
      },
      evaluate(f){
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — contraindicated'}] };
        if (f.lft_high) return { tier:'avoid', reasons:[{kind:'bad', text:'ALT/AST >3× ULN — do not start until investigated'}] };
        if (f.true_intol) return { tier:'avoid', reasons:[{kind:'bad', text:'True intolerance to ≥2 statins — move to ezetimibe ± injectable'}] };
        const r = [];
        if (f.secondary) r.push({kind:'good', text:'Established CVD — atorvastatin 80 mg, the cornerstone of secondary prevention'});
        if (f.fh) r.push({kind:'good', text:'FH — high-intensity statin regardless of QRISK'});
        if (f.primary_q10) r.push({kind:'good', text:'QRISK3 ≥10% — atorvastatin 20 mg primary prevention'});
        if (f.t1dm) r.push({kind:'good', text:'Type 1 diabetes (qualifying) — atorvastatin 20 mg'});
        if (f.ckd) r.push({kind:'good', text:'CKD — atorvastatin 20 mg; increase if non-HDL fall <40% and eGFR ≥30'});
        if (f.myalgia) r.push({kind:'neutral', text:'Prior myalgia — try lower dose / alternate-day / switch to rosuvastatin before abandoning'});
        if (f.interacting) r.push({kind:'neutral', text:'Interacting drug — use atorvastatin/rosuvastatin (not high-dose simvastatin)'});
        if (f.over84 || f.frail) r.push({kind:'neutral', text:'Older/frail — individualise; secondary prevention still usually worthwhile'});
        const indicated = f.secondary || f.primary_q10 || f.t1dm || f.ckd || f.fh;
        return { tier: indicated ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'First-line lipid-lowering where indicated'}] };
      }
    },

    // -------- MODERATE / LOWER-INTENSITY STATIN --------
    {
      id:'mod_statin',
      name:'Lower-intensity statin',
      examples:'Atorvastatin 10 · Rosuvastatin 5 · Pravastatin',
      step:'Intolerance / interaction',
      source:'NICE NG238 · CKS',
      sideEffects:'As statins, lower incidence at reduced dose',
      monitor:'Lipids + LFTs as above',
      counsel:'"If the full dose doesn\'t suit you, a lower or gentler statin still gives much of the benefit — some statin is far better than none."',
      detail:{
        'Dose': 'e.g. atorvastatin 10 mg, rosuvastatin 5 mg, or pravastatin (fewer interactions)',
        'Key teaching': 'For statin-intolerant patients try a lower dose or a less-interacting statin (pravastatin/fluvastatin/rosuvastatin) before declaring intolerance.'
      },
      evaluate(f){
        if (f.preg) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy — contraindicated'}] };
        const r = [];
        if (f.myalgia) r.push({kind:'good', text:'Myalgia — lower dose / less-interacting statin is the next step'});
        if (f.interacting) r.push({kind:'good', text:'Interacting drug — a low-interaction statin (e.g. pravastatin) helps'});
        if (f.ckd_severe) r.push({kind:'neutral', text:'eGFR <30 — cautious dosing, specialist input'});
        return { tier: (f.myalgia||f.interacting) ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Option where high-intensity not tolerated'}] };
      }
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
      evaluate(f){
        const r = [];
        if (f.not_target) r.push({kind:'good', text:'Below target on max statin — first add-on'});
        if (f.true_intol || f.myalgia) r.push({kind:'good', text:'Statin intolerance — ezetimibe monotherapy is the recommended alternative'});
        const preferred = f.not_target || f.true_intol;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Add-on or statin alternative'}] };
      }
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
        'Key teaching': 'NICE TA thresholds apply (LDL persistently high despite statin+ezetimibe, e.g. ≥4.0/≥3.5 mmol/L depending on FH/CVD risk). Usually lipid-clinic initiated.'
      },
      evaluate(f){
        const r = [];
        if (f.fh) r.push({kind:'good', text:'FH not at target — common route to PCSK9i/inclisiran (meets NICE thresholds)'});
        if (f.not_target && f.secondary) r.push({kind:'good', text:'High-risk CVD above LDL threshold on statin+ezetimibe — meets TA criteria'});
        if (f.true_intol && f.injection_ok) r.push({kind:'good', text:'Statin-intolerant and injectable acceptable — option per NICE'});
        if (!f.injection_ok && !f.true_intol) r.push({kind:'neutral', text:'Reserve for thresholds met / oral options exhausted'});
        const preferred = (f.fh && f.not_target) || (f.not_target && f.secondary);
        return { tier: preferred ? 'acceptable' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Specialist add-on when NICE LDL thresholds are met'}] };
      }
    },

    // -------- FIBRATE / OMEGA-3 (TG) --------
    {
      id:'tg_therapy',
      name:'Fibrate / high TG management',
      examples:'Fenofibrate (specialist) · address secondary causes',
      step:'Hypertriglyceridaemia',
      source:'NICE NG238 · BNF',
      sideEffects:'Fibrate — myopathy (esp. with statin), GI, gallstones',
      monitor:'Repeat fasting TG; specialist if >10 (pancreatitis risk)',
      counsel:'"Your triglyceride fat is high — first we\'ll look at alcohol, weight and diabetes control. Occasionally a specific tablet is needed to prevent pancreas inflammation."',
      detail:{
        'Dose': 'Address alcohol, weight, glycaemic control first; fenofibrate usually specialist-guided',
        'Key teaching': 'Statins are NOT primarily for isolated high TG. TG >10 mmol/L — urgent specialist (pancreatitis risk). Routine omega-3/fibrates not recommended for CVD prevention.'
      },
      evaluate(f){
        if (!f.high_tg) return { tier:'avoid', reasons:[{kind:'bad', text:'Only relevant with markedly raised triglycerides'}] };
        const r = [{kind:'good', text:'Markedly raised TG — address secondary causes; consider specialist therapy'}];
        if (f.high_tg) r.push({kind:'neutral', text:'If TG >10 — urgent referral for pancreatitis risk'});
        return { tier:'acceptable', reasons: r };
      }
    },
  ],

  sources: [
    { label:'NICE NG238 — Cardiovascular disease: risk assessment and reduction', url:'https://www.nice.org.uk/guidance/ng238' },
    { label:'NICE CG71 — Familial hypercholesterolaemia', url:'https://www.nice.org.uk/guidance/cg71' },
    { label:'NICE CKS — Lipid modification (CVD prevention)', url:'https://cks.nice.org.uk/topics/lipid-modification-cvd-prevention/' },
    { label:'BNF — Hypercholesterolaemia / lipid-regulating drugs', url:'https://bnf.nice.org.uk/treatment-summaries/dyslipidaemias/' },
  ],
});
