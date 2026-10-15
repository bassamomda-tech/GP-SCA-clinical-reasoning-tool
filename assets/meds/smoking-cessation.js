/* ============================================
   Medication Chooser — Smoking cessation (adults)
   NICE NG209 (2021, updated February 2025) · SPC
   Fixed lists (Upload 128, October 2026): no patient factors and no scoring.
   ============================================ */
MedChooser.register('smoking-cessation', {
  title: 'Smoking cessation — stop-smoking medicines',
  subtitle: 'NICE NG209: combine behavioural support with varenicline, cytisinicline, combination NRT or a nicotine vape — these are the options most likely to work. Bupropion and short-acting NRT alone are less effective options. Order below follows NG209.',
  guideline: 'NICE NG209 · SPC',

  safety: [
    {"tone":"amber","label":"Clozapine, olanzapine, theophylline, warfarin","text":"Stopping smoking (not nicotine) raises levels of drugs metabolised by CYP1A2 within days — reduce dose / monitor, and tell the mental-health team for clozapine."},
    {"tone":"amber","label":"Mental health","text":"Stopping smoking may change mood; monitor people with mental-health conditions. Varenicline is not contraindicated in mental illness."},
    {"tone":"amber","label":"Pregnancy","text":"Behavioural support plus NRT (or a vape) — varenicline, cytisinicline and bupropion are not used in pregnancy."},
    {"tone":"amber","label":"Refer","text":"Local stop-smoking service roughly triples the chance of success compared with going alone."}
  ],

  drugs: [
    {
      id:'varenicline',
      name:'Varenicline',
      examples:'0.5 mg OD days 1–3, 0.5 mg BD days 4–7, then 1 mg BD for 12 weeks',
      step:'Most effective — first-line option (NG209)',
      source:'NICE NG209 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng209',
      sideEffects:'Nausea, abnormal dreams, insomnia, headache',
      monitor:'Mood; nausea',
      counsel:'"Set your quit date for 1–2 weeks after starting. Take with food and water to reduce sickness."',
      detail:{
        'Dose':'Titration per SPC; quit date 1–2 weeks after starting (NG209); a further 12 weeks may be considered to prevent relapse.',
        'Renal':'Reduce dose in severe renal impairment (SPC).'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant / breastfeeding","text":"Not recommended"},
        {"kind":"caution","label":"Severe CKD","text":"Dose reduction (SPC)"}
      ]
    },
    {
      id:'cytisinicline',
      name:'Cytisinicline (cytisine)',
      examples:'Fixed 25-day course of 1.5 mg tablets with a falling daily number (SPC)',
      step:'Most effective — first-line option (NG209, 2025 update)',
      source:'NICE NG209 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng209',
      sideEffects:'Dry mouth, nausea, sleep disturbance, headache',
      monitor:'Progress at the stop-smoking reviews',
      counsel:'"Follow the course card exactly — the number of tablets each day falls over 25 days. Stop smoking within the first 5 days."',
      detail:{ 'Dose':'25-day schedule per SPC; quit date within the first 5 days (NG209).' },
      conditions: [
        {"kind":"avoid","label":"Pregnant / breastfeeding","text":"Not recommended"},
        {"kind":"caution","label":"Age over 65","text":"Limited data (SPC)"}
      ]
    },
    {
      id:'nrt',
      name:'Combination NRT (patch + short-acting form)',
      examples:'24- or 16-hour patch plus gum, lozenge, inhalator, mouth or nasal spray',
      step:'Most effective — first-line option (NG209)',
      source:'NICE NG209 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng209',
      sideEffects:'Skin irritation, sleep disturbance (24-h patch), hiccups, throat irritation',
      monitor:'Cravings and withdrawal — adjust strength',
      counsel:'"Use the patch every day and the short-acting form whenever you get a craving — most people use too little."',
      detail:{ 'Key teaching':'Combination beats a single form. Safe to use in pregnancy and in cardiovascular disease (lower risk than smoking).' },
      conditions: [
        {"kind":"favoured","label":"Pregnant","text":"NRT is the pharmacological option in pregnancy"},
        {"kind":"favoured","label":"Cardiovascular disease","text":"Far safer than continuing to smoke"}
      ]
    },
    {
      id:'vape',
      name:'Nicotine-containing e-cigarette (vape)',
      examples:'Not prescribed — advice and service support',
      step:'Most effective — option (NG209)',
      source:'NICE NG209',
      sourceUrl:'https://www.nice.org.uk/guidance/ng209',
      sideEffects:'Throat irritation, cough; long-term effects unknown but far less harmful than smoking',
      monitor:'Aim to stop smoking completely, not dual use',
      counsel:'"Vaping is much less harmful than smoking — the goal is to stop smoking completely. It is not for people who do not smoke."',
      detail:{ 'Key teaching':'NG209 says to give clear information on vapes; disposable vapes were banned in the UK from June 2025.' },
      conditions: [
        {"kind":"note","label":"Young people / non-smokers","text":"Not for people who do not smoke"}
      ]
    },
    {
      id:'bupropion',
      name:'Bupropion',
      examples:'150 mg OD for 6 days, then 150 mg BD for 7–9 weeks',
      step:'Option — less effective than the above (NG209)',
      source:'NICE NG209 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng209',
      sideEffects:'Insomnia, dry mouth, headache; seizures (dose-related)',
      monitor:'Seizure risk factors; BP',
      counsel:'"Set your quit date in the first 2 weeks."',
      detail:{ 'Dose':'Per SPC; quit date within the first 2 weeks (NG209).' },
      conditions: [
        {"kind":"avoid","label":"Epilepsy or seizure history","text":"Contraindicated (SPC)"},
        {"kind":"avoid","label":"Eating disorder (bulimia/anorexia)","text":"Contraindicated (SPC)"},
        {"kind":"avoid","label":"Pregnant","text":"Not used"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG209 — Tobacco: preventing uptake, promoting quitting and treating dependence', url:'https://www.nice.org.uk/guidance/ng209' },
    { label:'SPC — varenicline', url:'https://www.medicines.org.uk/emc/search?q=varenicline' },
    { label:'SPC — cytisinicline', url:'https://www.medicines.org.uk/emc/search?q=cytisinicline' },
    { label:'SPC — bupropion', url:'https://www.medicines.org.uk/emc/search?q=bupropion' },
    { label:'NCSCT — training and resources', url:'https://www.ncsct.co.uk/' }
  ],
});
