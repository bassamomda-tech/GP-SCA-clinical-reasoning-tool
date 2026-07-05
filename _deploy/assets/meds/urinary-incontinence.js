/* ============================================
   Medication Chooser — Urinary Incontinence (women)
   NICE NG123 · CKS UI in women · BNF
   ============================================ */
MedChooser.register('urinary-incontinence', {
  title: 'Urinary incontinence (women) — drug selection',
  subtitle: 'Conservative therapy comes first (pelvic floor training for stress; bladder training for urgency). Drugs are adjuncts. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG123 · CKS UI in women · BNF',

  factors: [
    // Type
    { group:'Continence type', id:'type', label:'Predominant type', options:[
      { value:'stress', label:'Stress (leak on cough/effort)' },
      { value:'urge',   label:'Urgency / OAB' },
      { value:'mixed',  label:'Mixed' },
    ]},
    { group:'Continence type', id:'conservative_done', label:'Conservative therapy already tried', note:'PFMT 3 mo / bladder training 6 wk' },
    { group:'Continence type', id:'nocturia', label:'Troublesome nocturia' },

    // Patient factors
    { group:'Patient factors', id:'frail_elderly', label:'Frail older woman' },
    { group:'Patient factors', id:'cognitive', label:'Cognitive impairment / dementia', note:'Avoid anticholinergics' },
    { group:'Patient factors', id:'postmeno_atrophy', label:'Postmenopausal + vaginal atrophy' },
    { group:'Patient factors', id:'depression', label:'Comorbid depression', note:'Duloxetine dual benefit' },
    { group:'Patient factors', id:'high_acb', label:'High existing anticholinergic burden' },

    // Cautions / contraindications
    { group:'Cautions', id:'glaucoma', label:'Narrow-angle glaucoma' },
    { group:'Cautions', id:'retention', label:'Retention / poor bladder emptying' },
    { group:'Cautions', id:'constipation', label:'Significant constipation' },
    { group:'Cautions', id:'cvd', label:'Uncontrolled hypertension / CVD', note:'Mirabegron caution' },
    { group:'Cautions', id:'hepatic', label:'Hepatic impairment', note:'Duloxetine caution' },

    // Context
    { group:'Context', id:'surgery_declined', label:'Surgery declined / unsuitable (stress UI)' },
    { group:'Context', id:'na_low', label:'Hyponatraemia / Na⁺ risk' },
    { group:'Context', id:'preg', label:'Pregnant / postpartum' },
  ],

  flags: (f) => {
    const out = [];
    if (!f.conservative_done) out.push({ tone:'amber', text:'Offer supervised PFMT (stress, ≥3 months) or bladder training (urgency, ≥6 weeks) before drug treatment' });
    if (f.frail_elderly || f.cognitive) out.push({ tone:'amber', text:'Frail / cognitive impairment — avoid oxybutynin IR; minimise anticholinergic burden (falls, confusion)' });
    if (f.na_low) out.push({ tone:'red', text:'Hyponatraemia risk — desmopressin can cause severe hyponatraemia; check sodium' });
    if (f.type === 'stress') out.push({ tone:'amber', text:'Stress UI — drugs are limited; PFMT then surgical referral. Duloxetine only if surgery declined/unsuitable' });
    return out;
  },

  drugs: [
    // -------- Antimuscarinic --------
    {
      id:'antimusc',
      name:'Antimuscarinic (tolterodine / darifenacin / oxybutynin)',
      examples:'Tolterodine MR · darifenacin · solifenacin',
      step:'Urgency / OAB · 1st-line drug',
      source:'NICE NG123 §1.4.7',
      sideEffects:'Dry mouth, constipation, blurred vision, cognitive effects, retention',
      monitor:'Review at 4 weeks then 6–12 monthly; residual if symptoms; cognition in elderly',
      counsel:'"This settles an overactive bladder to reduce urgency and leaks. Expect a dry mouth; tell us if you get constipated or struggle to pass water."',
      detail:{ 'Key teaching':'First-line drug for OAB after bladder training. Choose lowest acquisition cost. Do NOT offer oxybutynin IR to frail older women (falls, confusion).' },
      evaluate(f){
        if (f.type === 'stress') return { tier:'avoid', reasons:[{kind:'bad', text:'Stress UI — antimuscarinics do not help'}] };
        if (f.retention) return { tier:'avoid', reasons:[{kind:'bad', text:'Poor emptying / retention — antimuscarinics contraindicated'}] };
        if (f.glaucoma) return { tier:'avoid', reasons:[{kind:'bad', text:'Narrow-angle glaucoma — contraindicated'}] };
        if (f.cognitive) return { tier:'avoid', reasons:[{kind:'bad', text:'Cognitive impairment — anticholinergic load; prefer mirabegron'}] };
        const r = [];
        if (f.type === 'urge' || f.type === 'mixed') r.push({kind:'good', text:'Urgency/OAB — first-line drug after bladder training'});
        if (f.frail_elderly) r.push({kind:'bad', text:'Frail older woman — avoid oxybutynin IR; use lower-burden agent or mirabegron'});
        if (f.constipation) r.push({kind:'bad', text:'Constipation — antimuscarinics worsen it'});
        if (f.high_acb) r.push({kind:'bad', text:'High anticholinergic burden — adds cumulative risk; consider mirabegron'});
        const preferred = (f.type === 'urge') && f.conservative_done && !f.frail_elderly && !f.high_acb;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'First-line OAB drug; pick lowest-cost, lowest-burden agent'}] };
      }
    },
    // -------- Mirabegron --------
    {
      id:'mirabegron',
      name:'Mirabegron (β3-agonist)',
      examples:'Mirabegron 50 mg OD (25 mg if renal/hepatic)',
      step:'Urgency / OAB · alt',
      source:'NICE NG123 · NICE TA290',
      sideEffects:'Hypertension (monitor BP), tachycardia, UTI',
      monitor:'BP at baseline + during treatment',
      counsel:'"A bladder medicine without the dry mouth or confusion of the older type — we just monitor your blood pressure."',
      detail:{ 'Key teaching':'Use when antimuscarinics contraindicated, not tolerated, or anticholinergic burden/cognition is a concern (frail elderly). Avoid in severe uncontrolled hypertension.' },
      evaluate(f){
        if (f.type === 'stress') return { tier:'avoid', reasons:[{kind:'bad', text:'Stress UI — not indicated'}] };
        if (f.cvd) return { tier:'acceptable', reasons:[{kind:'bad', text:'Uncontrolled HTN — caution; monitor BP'}] };
        const r = [];
        if ((f.type === 'urge' || f.type === 'mixed') && (f.frail_elderly || f.cognitive || f.high_acb)) {
          r.push({kind:'good', text:'OAB with frailty / cognitive / anticholinergic concerns — mirabegron preferred'});
          return { tier:'preferred', reasons: r };
        }
        if (f.type === 'urge') r.push({kind:'good', text:'OAB — effective antimuscarinic alternative'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Alternative for OAB; monitor BP'}] };
      }
    },
    // -------- Vaginal oestrogen --------
    {
      id:'vaginal_oest',
      name:'Vaginal (local) oestrogen',
      examples:'Estriol cream · estradiol pessary',
      step:'Adjunct (atrophy)',
      source:'NICE NG123 §1.4.20',
      sideEffects:'Minimal systemic absorption; local irritation',
      monitor:'Can be used long-term',
      counsel:'"A local oestrogen treatment that improves bladder urgency symptoms when there\'s vaginal dryness after the menopause."',
      detail:{ 'Key teaching':'Offer to postmenopausal women with vaginal atrophy and OAB symptoms. Not systemic HRT.' },
      evaluate(f){
        const r = [];
        if (f.postmeno_atrophy && (f.type === 'urge' || f.type === 'mixed')) { r.push({kind:'good', text:'Postmenopausal atrophy + OAB — local oestrogen helps'}); return { tier:'preferred', reasons:r }; }
        if (f.postmeno_atrophy) r.push({kind:'neutral', text:'Useful adjunct for urogenital atrophy'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Adjunct where vaginal atrophy contributes'}] };
      }
    },
    // -------- Duloxetine --------
    {
      id:'duloxetine',
      name:'Duloxetine (stress UI)',
      examples:'Duloxetine 40 mg BD',
      step:'Stress · 2nd-line',
      source:'NICE NG123 §1.4.30',
      sideEffects:'Nausea (common), dry mouth, fatigue, ↑ BP; discontinuation symptoms',
      monitor:'BP; warn re nausea; taper to stop',
      counsel:'"A tablet option for leaking if you\'d rather not have surgery — the main issue is nausea early on, which usually settles."',
      detail:{ 'Key teaching':'NOT first-line. Offer only if a woman with stress UI prefers drug therapy and declines/cannot have surgery. Counsel re nausea + discontinuation.' },
      evaluate(f){
        if (f.hepatic) return { tier:'avoid', reasons:[{kind:'bad', text:'Hepatic impairment — duloxetine contraindicated'}] };
        const r = [];
        if (f.type === 'stress' && f.surgery_declined) { r.push({kind:'good', text:'Stress UI, surgery declined/unsuitable — duloxetine is the drug option'}); }
        else if (f.type === 'stress') r.push({kind:'bad', text:'Stress UI — offer PFMT + surgery first; duloxetine only if surgery declined'});
        else return { tier:'avoid', reasons:[{kind:'bad', text:'Not indicated for urgency UI'}] };
        if (f.depression) r.push({kind:'good', text:'Comorbid depression — potential dual benefit'});
        const preferred = f.type === 'stress' && f.surgery_declined;
        return { tier: preferred ? 'acceptable' : 'acceptable', reasons: r };
      }
    },
    // -------- Desmopressin (nocturia) --------
    {
      id:'desmopressin',
      name:'Desmopressin (nocturia, off-label)',
      examples:'Desmopressin nocte',
      step:'Nocturia',
      source:'NICE NG123 · BNF',
      sideEffects:'Hyponatraemia (can be severe), fluid retention, headache',
      monitor:'Na⁺ baseline + during; caution >65',
      counsel:'"This can reduce how often you\'re up at night — but we must check your sodium as it can drop too low."',
      detail:{ 'Key teaching':'May be used to reduce troublesome nocturia. Check sodium; caution/avoid in older women and cardiac disease.' },
      evaluate(f){
        if (f.na_low) return { tier:'avoid', reasons:[{kind:'bad', text:'Hyponatraemia risk — contraindicated'}] };
        const r = [];
        if (f.nocturia) r.push({kind:'good', text:'Troublesome nocturia — desmopressin targets this'});
        if (f.frail_elderly) r.push({kind:'bad', text:'Frail/older — higher hyponatraemia risk; caution'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Only for nocturia; monitor sodium'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG123 — Urinary incontinence and pelvic organ prolapse in women', url:'https://www.nice.org.uk/guidance/ng123' },
    { label:'NICE CKS — Incontinence (urinary, in women)', url:'https://cks.nice.org.uk/topics/incontinence-urinary-in-women/' },
    { label:'BNF — Urinary incontinence', url:'https://bnf.nice.org.uk/treatment-summaries/urological-conditions/' },
  ],
});
