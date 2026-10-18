/* ============================================
   Medication Chooser — ADHD (adults and children)
   NICE NG87 (2018, updated 2019) · SPC
   Fixed lists (Upload 128, October 2026): no patient factors and no scoring.
   ============================================ */
MedChooser.register('adhd', {
  title: 'ADHD — medication options',
  subtitle: 'NICE NG87: medication for ADHD is started by a specialist with training in ADHD, then may continue in primary care under a shared-care agreement. The order below is the NG87 sequence. Methylphenidate, lisdexamfetamine and dexamfetamine are Schedule 2 controlled drugs.',
  guideline: 'NICE NG87 · SPC',

  safety: [
    {"tone":"amber","label":"Shared care is voluntary","text":"A GP can decline shared care (including from private providers) on clinical or capacity grounds; if no agreement is in place the initiating specialist continues to prescribe (BMA; NHS England 2018)."},
    {"tone":"amber","label":"Monitoring","text":"Pulse and BP at each dose change and every 6 months; weight every 6 months in adults (height and weight more often in children, plotted on a growth chart)."},
    {"tone":"red","label":"Cardiac history","text":"Baseline ECG/cardiology advice if history of congenital heart disease, cardiac surgery, sudden death in a young first-degree relative, exertional syncope or chest pain, or abnormal cardiac findings (NG87)."},
    {"tone":"amber","label":"Controlled drug rules","text":"Schedule 2 CDs: prescriptions are valid for 28 days; supply should normally be no more than 30 days. Check for diversion and misuse."},
    {"tone":"amber","label":"Supply problems","text":"Check the current national supply position before switching brands or formulations — specialist advice for switches."}
  ],

  drugs: [
    {
      id:'methylphenidate',
      name:'Methylphenidate (CD Schedule 2)',
      examples:'Immediate- or modified-release; specialist titration',
      step:'Children 5+: first-line · Adults: first-line option (with lisdexamfetamine)',
      source:'NICE NG87 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng87',
      sideEffects:'Reduced appetite, weight loss, insomnia, headache, raised pulse/BP, anxiety, tics',
      monitor:'Pulse, BP, weight (± height in children) every 6 months; sleep; mood',
      counsel:'"Take it in the morning so it does not keep you awake. It can blunt appetite — eat a good breakfast. We will check your pulse, blood pressure and weight regularly."',
      detail:{
        'Dose':'Specialist-led titration per the SPC. Modified-release brands are not interchangeable — prescribe by brand.',
        'Key teaching':'NG87 first-line drug for children and young people. Adults: lisdexamfetamine or methylphenidate first-line.'
      },
      conditions: [
        {"kind":"avoid","label":"Uncontrolled hypertension / significant cardiac disease","text":"Specialist and cardiology review before starting"},
        {"kind":"caution","label":"Tics / Tourette's","text":"Can worsen tics — specialist judgement"},
        {"kind":"caution","label":"Substance misuse risk","text":"Diversion risk — prefer modified-release / lisdexamfetamine"}
      ]
    },
    {
      id:'lisdexamfetamine',
      name:'Lisdexamfetamine (CD Schedule 2)',
      examples:'Once daily; specialist titration',
      step:'Adults: first-line option · Children: second-line after methylphenidate',
      source:'NICE NG87 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng87',
      sideEffects:'As for stimulants — appetite loss, insomnia, raised pulse/BP, irritability',
      monitor:'As for methylphenidate',
      counsel:'"A once-a-day capsule that releases slowly through the day. Take it in the morning."',
      detail:{ 'Key teaching':'Prodrug of dexamfetamine (must be metabolised to be active); the specialist may prefer it where misuse or diversion is a concern.' },
      conditions: [
        {"kind":"avoid","label":"Uncontrolled hypertension / significant cardiac disease","text":"Specialist and cardiology review"},
        {"kind":"caution","label":"On an MAOI","text":"Contraindicated within 14 days of an MAOI"}
      ]
    },
    {
      id:'dexamfetamine',
      name:'Dexamfetamine (CD Schedule 2)',
      examples:'Specialist titration',
      step:'Children: if lisdexamfetamine helps but its longer duration is not tolerated',
      source:'NICE NG87 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng87',
      sideEffects:'As for stimulants; higher misuse potential',
      monitor:'As for methylphenidate; diversion',
      counsel:'"Keep it somewhere safe and never share it."',
      detail:{ 'Key teaching':'Shorter-acting — used where lisdexamfetamine works but its duration is not tolerated.' },
      conditions: [
        {"kind":"caution","label":"Substance misuse risk","text":"Highest diversion/misuse potential of the options"}
      ]
    },
    {
      id:'atomoxetine',
      name:'Atomoxetine',
      examples:'Once or twice daily; specialist titration',
      step:'If stimulants unsuitable, not tolerated or ineffective',
      source:'NICE NG87 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng87',
      sideEffects:'Nausea, reduced appetite, raised pulse/BP, suicidal thinking (warn), rare liver injury',
      monitor:'Mood and suicidal thoughts; LFTs if symptoms of liver injury',
      counsel:'"It takes a few weeks to build up. Tell us straight away about low mood, thoughts of self-harm, dark urine or yellow skin."',
      detail:{ 'Key teaching':'Not a controlled drug. CYP2D6 interactions (fluoxetine, paroxetine).' },
      conditions: [
        {"kind":"caution","label":"Depression / suicidal thoughts","text":"Warning in SPC — monitor closely"},
        {"kind":"favoured","label":"Substance misuse risk","text":"Not a stimulant or a controlled drug; low misuse potential"}
      ]
    },
    {
      id:'guanfacine',
      name:'Guanfacine (children and young people)',
      examples:'Modified-release; specialist titration',
      step:'Children: if stimulants and atomoxetine unsuitable or ineffective',
      source:'NICE NG87 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng87',
      sideEffects:'Sedation, hypotension, bradycardia, weight gain; rebound hypertension if stopped abruptly',
      monitor:'BP, pulse, weight',
      counsel:'"Do not stop this suddenly — blood pressure can rebound. We reduce it slowly."',
      detail:{ 'Key teaching':'Licensed for children 6–17; off-label in adults (specialist only).' },
      conditions: [
        {"kind":"caution","label":"Bradycardia / heart block","text":"Hypotension and bradycardia — specialist review"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG87 — Attention deficit hyperactivity disorder: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng87' },
    { label:'NHS England — Responsibility for prescribing between primary and secondary/tertiary care (2018)', url:'https://www.england.nhs.uk/publication/responsibility-for-prescribing-between-primary-and-secondary-tertiary-care/' },
    { label:'SPC — methylphenidate', url:'https://www.medicines.org.uk/emc/search?q=methylphenidate' },
    { label:'SPC — lisdexamfetamine', url:'https://www.medicines.org.uk/emc/search?q=lisdexamfetamine' },
    { label:'BNF — Attention deficit hyperactivity disorder', url:'https://bnf.nice.org.uk/treatment-summaries/attention-deficit-hyperactivity-disorder/' }
  ],
});
