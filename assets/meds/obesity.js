/* ============================================
   Medication Chooser — Obesity (adults)
   NICE NG246 (2025) · TA875 · TA1026 · TA664 · MHRA · SPC
   Fixed lists (Upload 128, October 2026): no patient factors and no scoring.
   ============================================ */
MedChooser.register('obesity', {
  title: 'Obesity — weight-management medicines',
  subtitle: 'Medicines are an adjunct to a reduced-calorie diet and increased physical activity (NICE NG246). Orlistat can be prescribed in primary care. Semaglutide (Wegovy) is recommended by NICE TA875 within specialist weight-management services; tirzepatide (Mounjaro) by NICE TA1026, with a phased NHS England primary-care roll-out from June 2025 to prioritised cohorts. Who can prescribe on the NHS depends on local commissioning — check your ICB position.',
  guideline: 'NICE NG246 · TA875 · TA1026 · SPC',

  safety: [
    {"tone":"red","label":"Pregnancy, conception and breastfeeding","text":"GLP-1 and GIP/GLP-1 medicines must not be used in pregnancy, when trying to conceive or breastfeeding; use effective contraception and stop before trying to conceive (washout per SPC — e.g. about 2 months for semaglutide, 1 month for tirzepatide) (MHRA, June 2025)."},
    {"tone":"red","label":"Tirzepatide and oral contraception","text":"Tirzepatide may reduce the effect of oral contraceptives — switch to a non-oral method, or add a barrier method for 4 weeks after starting and for 4 weeks after each dose increase (MHRA/FSRH 2025)."},
    {"tone":"red","label":"Pancreatitis","text":"Severe, including necrotising and fatal, acute pancreatitis has been reported (MHRA, January 2026). Stop if suspected; do not restart if confirmed. Ask about privately bought GLP-1 medicines when someone presents with abdominal pain."},
    {"tone":"amber","label":"Anaesthesia and sedation","text":"Delayed gastric emptying — aspiration risk under general anaesthesia or deep sedation (MHRA, January 2025). Tell the anaesthetist/endoscopist."},
    {"tone":"amber","label":"Private prescriptions","text":"Record privately prescribed GLP-1s on the GP record; patients should not buy from unregulated sellers (MHRA). GPs are not obliged to take over private prescribing."},
    {"tone":"amber","label":"Eating disorders","text":"Screen for an eating disorder before any weight-loss medicine; do not prescribe to people with a low or normal BMI."}
  ],

  drugs: [
    {
      id:'orlistat',
      name:'Orlistat',
      examples:'120 mg with each main meal containing fat (up to three times daily)',
      step:'Primary care — option with lifestyle support',
      source:'NICE NG246 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng246',
      sideEffects:'Oily stools, faecal urgency and incontinence, flatulence; reduced absorption of fat-soluble vitamins',
      monitor:'Review at 3 months — continue only if weight loss (NG246); contraception if diarrhoea severe',
      counsel:'"Keep the fat in each meal low — high-fat meals cause oily, urgent stools. Skip the dose if you skip a meal or it has no fat. Take a multivitamin at bedtime."',
      detail:{
        'Dose':'120 mg taken with or up to an hour after each main meal (SPC).',
        'Interactions':'Reduces absorption of levothyroxine, antiepileptics, ciclosporin, amiodarone and possibly the oral contraceptive pill if severe diarrhoea; separate doses as per SPC.',
        'Key teaching':'Modest average effect; works only with a low-fat diet.'
      },
      conditions: [
        {"kind":"avoid","label":"Chronic malabsorption / cholestasis","text":"Contraindicated (SPC)"},
        {"kind":"caution","label":"On levothyroxine / antiepileptic","text":"Separate doses; monitor"}
      ]
    },
    {
      id:'semaglutide',
      name:'Semaglutide 2.4 mg weekly (Wegovy)',
      examples:'Once-weekly SC; dose escalated over about 16 weeks per SPC',
      step:'Specialist weight-management service — NICE TA875 (up to 2 years)',
      source:'NICE TA875 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ta875',
      sideEffects:'Nausea, vomiting, diarrhoea, constipation; gallstones; pancreatitis; dehydration-related AKI',
      monitor:'Weight; GI side effects; HbA1c if diabetic',
      counsel:'"Eat smaller meals and stop when full. Severe tummy pain going through to your back — stop and seek urgent help."',
      detail:{ 'Key teaching':'TA875: BMI ≥35 with at least one weight-related comorbidity (lower thresholds for some ethnic groups), or 30–34.9 meeting criteria for referral to specialist services; prescribed within a specialist service.' },
      conditions: [
        {"kind":"avoid","label":"Pregnant / planning pregnancy / breastfeeding","text":"Not to be used; contraception required"},
        {"kind":"caution","label":"History of pancreatitis","text":"Use with caution; stop if suspected"},
        {"kind":"caution","label":"Diabetic retinopathy","text":"Rapid HbA1c fall can worsen retinopathy (SPC)"}
      ]
    },
    {
      id:'tirzepatide',
      name:'Tirzepatide (Mounjaro)',
      examples:'Once-weekly SC; dose increased every 4 weeks per SPC',
      step:'NICE TA1026 — NHS primary care for prioritised cohorts where commissioned; otherwise specialist',
      source:'NICE TA1026 · NHS England interim commissioning guidance · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ta1026',
      sideEffects:'As for GLP-1 RAs — GI effects, gallstones, pancreatitis',
      monitor:'Weight; wraparound support is a condition of NHS prescribing',
      counsel:'"If you use the pill for contraception, switch to another method or add condoms for 4 weeks after starting and after each dose increase."',
      detail:{ 'Key teaching':'TA1026: BMI ≥35 with at least one weight-related comorbidity. NHS England phases access from June 2025, starting with BMI ≥40 plus four or more qualifying comorbidities — check your ICB\'s current cohort.' },
      conditions: [
        {"kind":"avoid","label":"Pregnant / planning pregnancy / breastfeeding","text":"Not to be used; contraception required"},
        {"kind":"caution","label":"On oral contraception","text":"Reduced oral contraceptive effect — non-oral or added barrier method"},
        {"kind":"caution","label":"History of pancreatitis","text":"Use with caution"}
      ]
    },
    {
      id:'liraglutide',
      name:'Liraglutide 3 mg (Saxenda)',
      examples:'Daily SC; weekly escalation per SPC',
      step:'Specialist service — NICE TA664 (narrow criteria: non-diabetic hyperglycaemia and high CVD risk)',
      source:'NICE TA664 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ta664',
      sideEffects:'As for GLP-1 RAs',
      monitor:'Stop if less than 5% weight loss at 12 weeks on the full dose (SPC/TA664)',
      counsel:'"A daily injection — we review at 12 weeks and stop it if it has not helped enough."',
      detail:{ 'Key teaching':'Largely superseded in practice by weekly agents; check local formulary.' },
      conditions: [
        {"kind":"avoid","label":"Pregnant / planning pregnancy / breastfeeding","text":"Not to be used"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG246 — Overweight and obesity management (2025)', url:'https://www.nice.org.uk/guidance/ng246' },
    { label:'NICE TA875 — Semaglutide for managing overweight and obesity', url:'https://www.nice.org.uk/guidance/ta875' },
    { label:'NICE TA1026 — Tirzepatide for managing overweight and obesity', url:'https://www.nice.org.uk/guidance/ta1026' },
    { label:'NHS England — Interim commissioning guidance: tirzepatide (TA1026)', url:'https://www.england.nhs.uk/long-read/interim-commissioning-guidance-nice-ta1026-tirzepatide/' },
    { label:'MHRA — GLP-1 medicines for weight loss and diabetes: what you need to know', url:'https://www.gov.uk/government/publications/glp-1-medicines-for-weight-loss-and-diabetes-what-you-need-to-know' },
    { label:'MHRA DSU — GLP-1 RAs: strengthened warnings on acute pancreatitis (January 2026)', url:'https://www.gov.uk/drug-safety-update/glp-1-receptor-agonists-and-dual-glp-1-slash-gip-receptor-agonists-strengthened-warnings-on-acute-pancreatitis-including-necrotising-and-fatal-cases' },
    { label:'SPC — orlistat', url:'https://www.medicines.org.uk/emc/search?q=orlistat' },
    { label:'SPC — tirzepatide', url:'https://www.medicines.org.uk/emc/search?q=tirzepatide' }
  ],
});
