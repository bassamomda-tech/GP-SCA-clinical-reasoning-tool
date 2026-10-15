/* ============================================
   Medication Chooser — Urinary Incontinence (women)
   NICE NG123 · BNF
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('urinary-incontinence', {
  title: 'Urinary incontinence (women) — drug selection',
  subtitle: 'Conservative therapy comes first (pelvic floor training for stress; bladder training for urgency). Drugs are adjuncts.',
  guideline: 'NICE NG123 · BNF',


  safety: [
    {"tone":"amber","label":"","text":"Offer supervised PFMT (stress, ≥3 months) or bladder training (urgency, ≥6 weeks) before drug treatment"},
    {"tone":"amber","label":"Predominant type: Stress (leak on cough/effort)","text":"Stress UI — drugs are limited; PFMT then surgical referral. Duloxetine only if surgery declined/unsuitable"},
    {"tone":"amber","label":"Frail older woman","text":"Frail / cognitive impairment — avoid oxybutynin IR; minimise anticholinergic burden (falls, confusion)"},
    {"tone":"red","label":"Hyponatraemia / Na⁺ risk","text":"Hyponatraemia risk — desmopressin can cause severe hyponatraemia; check sodium"}
  ],

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
      conditions: [
        {"kind":"avoid","label":"Predominant type: Stress (leak on cough/effort)","text":"Stress UI — antimuscarinics do not help"},
        {"kind":"avoid","label":"Cognitive impairment / dementia","text":"Cognitive impairment — anticholinergic load; prefer mirabegron"},
        {"kind":"avoid","label":"Narrow-angle glaucoma","text":"Narrow-angle glaucoma — contraindicated"},
        {"kind":"avoid","label":"Retention / poor bladder emptying","text":"Poor emptying / retention — antimuscarinics contraindicated"},
        {"kind":"caution","label":"Frail older woman","text":"Frail older woman — avoid oxybutynin IR; use lower-burden agent or mirabegron"},
        {"kind":"caution","label":"High existing anticholinergic burden","text":"High anticholinergic burden — adds cumulative risk; consider mirabegron"},
        {"kind":"caution","label":"Significant constipation","text":"Constipation — antimuscarinics worsen it"},
        {"kind":"favoured","label":"Predominant type: Urgency / OAB","text":"Urgency/OAB — first-line drug after bladder training"},
        {"kind":"favoured","label":"Predominant type: Mixed","text":"Urgency/OAB — first-line drug after bladder training"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"Predominant type: Stress (leak on cough/effort)","text":"Stress UI — not indicated"},
        {"kind":"caution","label":"Uncontrolled hypertension / CVD","text":"Uncontrolled HTN — caution; monitor BP"},
        {"kind":"favoured","label":"Predominant type: Urgency / OAB","text":"OAB — effective antimuscarinic alternative"}
      ]
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
      conditions: [
        {"kind":"note","label":"Postmenopausal + vaginal atrophy","text":"Useful adjunct for urogenital atrophy"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"Hepatic impairment","text":"Hepatic impairment — duloxetine contraindicated"},
        {"kind":"caution","label":"Predominant type: Stress (leak on cough/effort)","text":"Stress UI — offer PFMT + surgery first; duloxetine only if surgery declined"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"Hyponatraemia / Na⁺ risk","text":"Hyponatraemia risk — contraindicated"},
        {"kind":"caution","label":"Frail older woman","text":"Frail/older — higher hyponatraemia risk; caution"},
        {"kind":"favoured","label":"Troublesome nocturia","text":"Troublesome nocturia — desmopressin targets this"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG123 — Urinary incontinence and pelvic organ prolapse in women', url:'https://www.nice.org.uk/guidance/ng123' },
    { label:'NICE NG123 — urinary incontinence and prolapse in women', url:'https://www.nice.org.uk/guidance/ng123' },
    { label:'BNF — Urinary incontinence', url:'https://bnf.nice.org.uk/treatment-summaries/urological-conditions/' }
  ],
});
