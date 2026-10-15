/* ============================================
   Medication Chooser — Alcohol dependence (adults)
   NICE CG115 (2011) · NICE CG100 (2010, updated 2017) · TA325 · SPC
   Fixed lists (Upload 128, October 2026): no patient factors and no scoring.
   ============================================ */
MedChooser.register('alcohol-dependence', {
  title: 'Alcohol dependence — withdrawal, relapse prevention and thiamine',
  subtitle: 'NICE CG115: after successful withdrawal, offer acamprosate or oral naltrexone, with psychosocial support, to prevent relapse; disulfiram is an option if those are unsuitable or the person prefers it. These are usually started by, or with, a specialist alcohol service; GPs may continue under local shared care. Withdrawal management and thiamine follow CG100/CG115.',
  guideline: 'NICE CG115 · CG100 · SPC',

  safety: [
    {"tone":"red","label":"Do not stop suddenly at home if dependent","text":"Abrupt stopping in dependent drinkers risks withdrawal seizures and delirium tremens. Assisted withdrawal is planned with the alcohol service; admit if history of DTs/seizures, or very high consumption, or other risk factors (CG115)."},
    {"tone":"red","label":"Wernicke's encephalopathy","text":"Confusion, ataxia, ophthalmoplegia — emergency parenteral thiamine in hospital. Oral thiamine is for prophylaxis only."},
    {"tone":"amber","label":"Benzodiazepines","text":"Withdrawal regimens (chlordiazepoxide) are fixed-length and supervised; never give open-ended benzodiazepine supplies."},
    {"tone":"amber","label":"Driving","text":"Alcohol dependence is notifiable to the DVLA; advise the patient of their duty."}
  ],

  drugs: [
    {
      id:'thiamine',
      name:'Thiamine (oral)',
      examples:'Oral thiamine at the prophylactic dose in the SPC/local protocol',
      step:'Prophylaxis — harmful drinkers / dependence with malnourishment or decompensated liver disease, and during withdrawal (CG100)',
      source:'NICE CG100 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/cg100',
      sideEffects:'Rare',
      monitor:'Nutrition; signs of Wernicke\'s',
      counsel:'"This vitamin protects your brain and nerves from damage caused by alcohol."',
      detail:{ 'Key teaching':'CG100: offer prophylactic oral thiamine to harmful or dependent drinkers who are malnourished or at risk, have decompensated liver disease, or are in acute withdrawal or about to undergo withdrawal.' },
      conditions: [
        {"kind":"note","label":"Suspected Wernicke's","text":"Oral thiamine is not enough — emergency admission for parenteral thiamine"}
      ]
    },
    {
      id:'acamprosate',
      name:'Acamprosate',
      examples:'Weight-based dosing per SPC, three times daily; usually up to 6 months',
      step:'Relapse prevention — first-line option after withdrawal (CG115)',
      source:'NICE CG115 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/cg115',
      sideEffects:'Diarrhoea, nausea, abdominal pain, rash, pruritus',
      monitor:'Engagement with psychosocial support; renal function',
      counsel:'"Start it as soon as possible after detox. It reduces cravings; keep taking it even if you have a drink, and tell your keyworker."',
      detail:{ 'Key teaching':'Start as soon as possible after withdrawal; continue for up to 6 months or longer if benefiting (CG115). Contraindicated in severe renal impairment.' },
      conditions: [
        {"kind":"avoid","label":"Severe renal impairment","text":"Contraindicated (SPC)"},
        {"kind":"favoured","label":"Liver disease","text":"Not hepatically metabolised (check severity — avoid in severe hepatic failure per SPC)"}
      ]
    },
    {
      id:'naltrexone',
      name:'Naltrexone (oral)',
      examples:'Once daily per SPC; usually up to 6 months',
      step:'Relapse prevention — first-line option after withdrawal (CG115)',
      source:'NICE CG115 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/cg115',
      sideEffects:'Nausea, headache, dizziness, fatigue; hepatotoxicity at high doses',
      monitor:'LFTs; check no opioid use',
      counsel:'"This blocks opioid painkillers — carry a card and tell any doctor; you will not get pain relief from codeine or morphine while on it."',
      detail:{ 'Key teaching':'Opioid antagonist — will precipitate withdrawal in anyone taking opioids. Stop if feeling unwell and seek advice (CG115).' },
      conditions: [
        {"kind":"avoid","label":"Taking opioids (including OST)","text":"Precipitates withdrawal and blocks analgesia"},
        {"kind":"avoid","label":"Acute hepatitis / liver failure","text":"Contraindicated (SPC)"}
      ]
    },
    {
      id:'disulfiram',
      name:'Disulfiram',
      examples:'Specialist-initiated; supervised dosing recommended',
      step:'If acamprosate/naltrexone unsuitable or preferred, with a goal of abstinence (CG115)',
      source:'NICE CG115 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/cg115',
      sideEffects:'Drowsiness, halitosis, rare hepatotoxicity; severe reaction with alcohol',
      monitor:'LFTs and U&Es; supervision by a family member or carer',
      counsel:'"Even small amounts of alcohol — in mouthwash, sauces or perfume — can cause a severe reaction. Do not drink for at least 24 hours before starting and for a week after stopping."',
      detail:{ 'Key teaching':'Start at least 24 hours after the last drink; a supervisor should be involved (CG115).' },
      conditions: [
        {"kind":"avoid","label":"Cardiac failure, coronary disease, stroke history, hypertension","text":"Contraindicated (SPC)"},
        {"kind":"avoid","label":"Psychosis / severe personality disorder / suicide risk","text":"Contraindicated (SPC)"},
        {"kind":"avoid","label":"Pregnant","text":"Avoid"}
      ]
    },
    {
      id:'nalmefene',
      name:'Nalmefene',
      examples:'As-needed, 1–2 hours before anticipated drinking (SPC)',
      step:'Reducing consumption (not abstinence) — TA325, with psychosocial support',
      source:'NICE TA325 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ta325',
      sideEffects:'Nausea, dizziness, insomnia',
      monitor:'Drinking diary',
      counsel:'"Take one on days you expect to drink, an hour or two before."',
      detail:{ 'Key teaching':'TA325: high drinking-risk level without physical withdrawal symptoms, not needing immediate detoxification, still at high risk 2 weeks after initial assessment.' },
      conditions: [
        {"kind":"avoid","label":"Taking opioids","text":"Opioid antagonist — contraindicated"}
      ]
    }
  ],

  sources: [
    { label:'NICE CG115 — Alcohol-use disorders: diagnosis, assessment and management of harmful drinking and alcohol dependence', url:'https://www.nice.org.uk/guidance/cg115' },
    { label:'NICE CG100 — Alcohol-use disorders: diagnosis and management of physical complications', url:'https://www.nice.org.uk/guidance/cg100' },
    { label:'NICE TA325 — Nalmefene for reducing alcohol consumption', url:'https://www.nice.org.uk/guidance/ta325' },
    { label:'SPC — acamprosate', url:'https://www.medicines.org.uk/emc/search?q=acamprosate' },
    { label:'SPC — naltrexone', url:'https://www.medicines.org.uk/emc/search?q=naltrexone' },
    { label:'SPC — disulfiram', url:'https://www.medicines.org.uk/emc/search?q=disulfiram' }
  ],
});
