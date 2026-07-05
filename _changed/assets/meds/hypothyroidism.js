/* ============================================
   Medication Chooser — Hypothyroidism (levothyroxine & titration)
   NICE NG145 · CKS Hypothyroidism · BNF
   ============================================ */
MedChooser.register('hypothyroidism', {
  title: 'Hypothyroidism — levothyroxine replacement',
  subtitle: 'Levothyroxine (LT4) is the treatment for primary hypothyroidism for virtually everyone — the real decisions are the starting dose, how fast to titrate, and the TSH target. Age, cardiac disease, pregnancy and the subclinical/overt distinction drive those choices. Tick the profile; cards re-tier and the starting-dose guidance updates live.',
  guideline: 'NICE NG145 · CKS Hypothyroidism · BNF',

  factors: [
    { group:'Presentation', id:'overt', label:'Overt (TSH high + low FT4)' },
    { group:'Presentation', id:'subclinical', label:'Subclinical (TSH high, FT4 normal)' },
    { group:'Presentation', id:'tsh10', label:'TSH ≥10 mU/L', note:'Treat even if subclinical' },
    { group:'Presentation', id:'symptomatic', label:'Symptomatic' },

    { group:'Patient', id:'age65', label:'Age ≥65 / frail' },
    { group:'Patient', id:'ihd', label:'Ischaemic heart disease / angina', note:'Start low, go slow' },
    { group:'Patient', id:'af', label:'Atrial fibrillation / arrhythmia' },

    { group:'Pregnancy', id:'pregnant', label:'Pregnant' },
    { group:'Pregnancy', id:'preconception', label:'Trying to conceive' },

    { group:'Special', id:'central', label:'Secondary / central (pituitary)', note:'Use FT4 not TSH; exclude adrenal insufficiency first' },
    { group:'Special', id:'persistent_sx', label:'Persistent symptoms despite normal TSH' },
    { group:'Special', id:'malabsorption', label:'Malabsorption / interacting drugs', note:'Iron, calcium, PPI, levothyroxine timing' },
  ],

  flags: (f) => {
    const out = [];
    if (f.central) out.push({ tone:'red', text:'Central hypothyroidism: titrate to FT4 (TSH is unreliable) and exclude/treat adrenal insufficiency BEFORE starting levothyroxine — replacing thyroxine first can precipitate an adrenal crisis.' });
    if (f.pregnant) out.push({ tone:'red', text:'Pregnancy: levothyroxine requirements rise early — increase the dose as soon as pregnancy is confirmed and check TSH each trimester (aim trimester-specific / TSH <2.5 mU/L).' });
    if (f.ihd) out.push({ tone:'amber', text:'IHD/angina: start at 25 mcg and titrate slowly (4–6 weekly) — too-rapid replacement can precipitate angina, arrhythmia or MI.' });
    if (f.subclinical && !f.tsh10 && !f.pregnant) out.push({ tone:'amber', text:'Subclinical with TSH <10: treatment is optional — a 6-month trial if symptomatic and <65; otherwise watch-and-repeat. Avoid over-treatment.' });
    if (f.malabsorption) out.push({ tone:'amber', text:'Separate levothyroxine from iron, calcium and antacids by ≥4 h; PPIs and coeliac disease reduce absorption — recheck TSH after any change.' });
    return out;
  },

  drugs: [
    // ---------- LEVOTHYROXINE — STANDARD START ----------
    {
      id:'lt4_standard',
      name:'Levothyroxine — full replacement start (~1.6 mcg/kg)',
      examples:'Typically 50–100 mcg OD; titrate by TSH at 6–8 weeks',
      step:'First-line — young, fit, overt',
      source:'NICE NG145 · BNF',
      sideEffects:'Usually only if over-replaced: palpitations, tremor, weight loss, AF, ↓bone density',
      monitor:'TSH 6–8 weeks after start/change; then annually once stable',
      counsel:'"Take one tablet every morning on an empty stomach, 30–60 minutes before food or other tablets. It takes a few weeks to work; we\'ll recheck a blood test in about 8 weeks and fine-tune the dose."',
      detail:{
        'Dose':'Healthy adults <65 with no cardiac disease: start at full replacement ~1.6 mcg/kg/day (commonly 50–100 mcg). Adjust in 25–50 mcg steps by TSH every 6–8 weeks.',
        'Target':'Primary hypothyroidism: TSH within reference range (often 0.5–2.5 mU/L if symptoms persist at the upper end). Take levothyroxine consistently relative to food.',
        'Key teaching':'Same time daily, empty stomach. Lifelong in most. Recheck TSH 6–8 weeks after any dose change — not sooner.'
      },
      evaluate(f){
        if (f.central) return { tier:'preferred', reasons:[{kind:'good', text:'Levothyroxine is still the drug — but titrate to FT4, and only after adrenal insufficiency is excluded/treated'}] };
        if (f.subclinical && !f.tsh10 && !f.pregnant && !f.symptomatic) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Subclinical, TSH <10, asymptomatic — treatment usually not needed; monitor instead'}] };
        if (f.age65 || f.ihd) return { tier:'acceptable', reasons:[{kind:'bad', text:'Older / cardiac — do NOT start at full replacement; use the low-and-slow start instead'}] };
        if (f.pregnant) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Correct drug, but pregnancy needs a higher dose and tighter target — see the pregnancy option'}] };
        return { tier:'preferred', reasons:[{kind:'good', text:'Young, fit, overt hypothyroidism — start at weight-based full replacement and titrate to TSH'}] };
      }
    },

    // ---------- LEVOTHYROXINE — LOW & SLOW ----------
    {
      id:'lt4_lowstart',
      name:'Levothyroxine — low-dose cautious start (25 mcg)',
      examples:'25 mcg OD, increase by 25 mcg every 4–6 weeks',
      step:'First-line — age ≥65 or cardiac disease',
      source:'NICE NG145 · CKS',
      sideEffects:'Angina/arrhythmia if titrated too fast; otherwise as above',
      monitor:'TSH every 6–8 weeks during titration; review cardiac symptoms',
      counsel:'"Because of your age/heart, we start at a low dose and build up slowly to avoid straining the heart. Tell us if you get chest tightness or palpitations as we increase it."',
      detail:{
        'Dose':'Start 25 mcg OD (some use 25–50 mcg). Increase in 25 mcg steps every 4–6 weeks guided by TSH and tolerance.',
        'Key teaching':'"Start low, go slow" prevents precipitating angina, arrhythmia or MI in people with (or at risk of) ischaemic heart disease, and in the frail elderly. Accept a slightly higher TSH target in the very elderly.'
      },
      evaluate(f){
        if (f.pregnant) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy needs prompt full/increased replacement — do not under-treat; use the pregnancy option'}] };
        if (f.ihd) return { tier:'preferred', reasons:[{kind:'good', text:'Ischaemic heart disease — start 25 mcg and titrate slowly to avoid precipitating angina/MI'}] };
        if (f.age65 || f.af) return { tier:'preferred', reasons:[{kind:'good', text:'Older / arrhythmia-prone — cautious low-and-slow start is safest'}] };
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Cautious start is reasonable but unnecessary in a young, fit patient — full replacement is fine there'}] };
      }
    },

    // ---------- LEVOTHYROXINE — PREGNANCY ----------
    {
      id:'lt4_pregnancy',
      name:'Levothyroxine — pregnancy dosing',
      examples:'Increase dose ~25–50% as soon as pregnancy confirmed',
      step:'First-line in pregnancy / preconception',
      source:'NICE NG145 · CKS · Endocrine guidance',
      sideEffects:'Under-replacement risks fetal neurodevelopment; over-replacement maternal thyrotoxic symptoms',
      monitor:'TSH every trimester (and 4–6 weeks after dose change); aim TSH <2.5 mU/L',
      counsel:'"Pregnancy increases how much thyroxine you need. As soon as you know you\'re pregnant, increase the dose as we\'ve agreed and let us know so we can check your levels — your baby\'s development depends on it."',
      detail:{
        'Dose':'On confirmation of pregnancy, increase levothyroxine (commonly by ~25–50%, e.g. two extra doses per week as an interim step) and check TSH. Aim for trimester-specific range / TSH <2.5 mU/L. Optimise BEFORE conception if planning.',
        'Key teaching':'Requirements rise from early in the first trimester. Do not stop levothyroxine in pregnancy. Refer/seek specialist advice for overt disease in pregnancy.'
      },
      evaluate(f){
        if (f.pregnant) return { tier:'preferred', reasons:[{kind:'good', text:'Pregnant — increase dose promptly and check TSH each trimester, aim <2.5 mU/L'}] };
        if (f.preconception) return { tier:'preferred', reasons:[{kind:'good', text:'Planning pregnancy — optimise TSH (<2.5) before conception and plan an early dose increase'}] };
        return { tier:'avoid', reasons:[{kind:'neutral', text:'Pregnancy-specific dosing — not relevant unless pregnant or trying to conceive'}] };
      }
    },

    // ---------- LIOTHYRONINE / COMBINATION ----------
    {
      id:'lt3',
      name:'Liothyronine (T3) or LT4/LT3 combination',
      examples:'Specialist-initiated only',
      step:'Not routine — specialist only',
      source:'NICE NG145 · BTA',
      sideEffects:'Cardiac/arrhythmia risk, harder to monitor, short half-life',
      monitor:'Specialist endocrinology supervision',
      counsel:'"Standard thyroxine works for almost everyone. A second hormone (T3) is occasionally tried by specialists, but the evidence is weak and we wouldn\'t start it in primary care."',
      detail:{
        'Key teaching':'NICE/BTA do NOT recommend routine liothyronine or combination therapy. Consider specialist referral only for the small number with persistent symptoms despite biochemically adequate levothyroxine, after excluding other causes. Do not initiate T3 in primary care.'
      },
      evaluate(f){
        if (f.persistent_sx) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Persistent symptoms despite normal TSH — first re-check adherence/timing, dose, and other diagnoses; refer before any T3 trial'}] };
        return { tier:'avoid', reasons:[{kind:'bad', text:'Not recommended routinely — specialist-only and not initiated in primary care'}] };
      }
    },

    // ---------- WATCHFUL WAITING ----------
    {
      id:'monitor',
      name:'Monitor without treatment (subclinical)',
      examples:'Repeat TSH/FT4 in 3–6 months',
      step:'Option — asymptomatic subclinical, TSH <10',
      source:'NICE NG145 · CKS',
      sideEffects:'None',
      monitor:'Repeat thyroid function; check TPO antibodies (higher progression risk)',
      counsel:'"Your thyroid is only mildly underactive and you feel well, so the safest plan is to recheck the blood test rather than start a lifelong tablet now."',
      detail:{
        'Key teaching':'For asymptomatic subclinical hypothyroidism with TSH <10 mU/L, repeat testing (e.g. 3–6 months) rather than treat. Consider a time-limited levothyroxine trial only if symptomatic and <65; stop if no benefit. Always treat if TSH ≥10 or pregnant/planning pregnancy.'
      },
      evaluate(f){
        if (f.overt || f.tsh10 || f.pregnant || f.preconception) return { tier:'avoid', reasons:[{kind:'bad', text:'Overt disease, TSH ≥10, or pregnancy — treat, do not just monitor'}] };
        if (f.subclinical && !f.symptomatic) return { tier:'preferred', reasons:[{kind:'good', text:'Asymptomatic subclinical, TSH <10 — monitoring is preferred to avoid over-treatment'}] };
        if (f.subclinical && f.symptomatic && f.age65) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Older + symptomatic subclinical — monitoring or a cautious trial both reasonable'}] };
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Reasonable where treatment threshold not met'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG145 — Thyroid disease: assessment and management', url:'https://www.nice.org.uk/guidance/ng145' },
    { label:'NICE CKS — Hypothyroidism', url:'https://cks.nice.org.uk/topics/hypothyroidism/' },
    { label:'BNF — Levothyroxine sodium', url:'https://bnf.nice.org.uk/drugs/levothyroxine-sodium/' },
    { label:'British Thyroid Association — Liothyronine position statement', url:'https://www.british-thyroid-association.org/' },
  ],
});
