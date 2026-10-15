/* ============================================
   Medication Chooser — Psychosis and schizophrenia (adults)
   NICE CG178 (2014) · SPC
   Fixed lists (Upload 128, October 2026): no patient factors and no scoring.
   ============================================ */
MedChooser.register('psychosis-schizophrenia', {
  title: 'Psychosis and schizophrenia — antipsychotics',
  subtitle: 'NICE CG178: antipsychotics are started by the specialist team (early intervention in psychosis) after a shared choice based on side-effect profiles — NICE does not rank one oral antipsychotic above another. The GP role is physical health monitoring, continuing prescriptions and spotting adverse effects. Clozapine is for treatment-resistant illness and is hospital-supplied.',
  guideline: 'NICE CG178 · SPC',

  safety: [
    {"tone":"red","label":"First-episode psychosis","text":"Refer urgently to early intervention in psychosis; NICE advises the GP does not start antipsychotics before specialist assessment, unless done in consultation with a psychiatrist."},
    {"tone":"amber","label":"Physical health","text":"Weight, waist, pulse, BP, HbA1c or glucose, lipids at baseline, weekly weight for 6 weeks, at 12 weeks, at 1 year then annually (CG178). Offer smoking cessation and lifestyle support."},
    {"tone":"red","label":"Clozapine and infection","text":"Sore throat, fever or flu-like illness on clozapine — urgent FBC (neutropenia/agranulocytosis). Also ask about constipation (can be fatal ileus) and record clozapine on the GP record."},
    {"tone":"amber","label":"Smoking and clozapine/olanzapine","text":"Stopping smoking (not nicotine) raises clozapine and olanzapine levels within days — tell the mental-health team."},
    {"tone":"amber","label":"QT and cardiac risk","text":"ECG if cardiovascular risk, family history, or the SPC requires it (e.g. haloperidol, high doses, combinations)."}
  ],

  drugs: [
    {
      id:'aripiprazole',
      name:'Aripiprazole',
      examples:'Once daily; specialist-titrated (oral or long-acting injection)',
      step:'Specialist choice — oral antipsychotic',
      source:'NICE CG178 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/cg178',
      sideEffects:'Akathisia, nausea, insomnia, impulse-control problems (gambling); less weight gain and prolactin rise',
      monitor:'CG178 physical health schedule',
      counsel:'"Restlessness — feeling you cannot sit still — is a known side effect; tell us or your team. Urges to gamble or spend are rare but important to mention."',
      detail:{
        'Key teaching':'Lower metabolic and prolactin burden than olanzapine/risperidone — often chosen where weight or sexual side effects matter.'
      },
      conditions: [
        {"kind":"favoured","label":"Obesity / diabetes risk","text":"Lower metabolic burden than olanzapine"},
        {"kind":"caution","label":"History of impulse-control problems","text":"Rare compulsive gambling/spending — ask"}
      ]
    },
    {
      id:'olanzapine',
      name:'Olanzapine',
      examples:'Once daily; specialist-titrated',
      step:'Specialist choice — oral antipsychotic',
      source:'NICE CG178 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/cg178',
      sideEffects:'Marked weight gain, sedation, raised glucose and lipids',
      monitor:'Weight, HbA1c, lipids closely in the first year',
      counsel:'"This can increase appetite and weight — we will check your weight and bloods regularly and help early if it goes up."',
      detail:{ 'Key teaching':'Effective but highest metabolic risk of the commonly used oral agents (with clozapine). Levels rise when someone stops smoking.' },
      conditions: [
        {"kind":"caution","label":"Obesity / diabetes","text":"Weight gain and hyperglycaemia — monitor closely"},
        {"kind":"caution","label":"Stopping smoking","text":"Levels rise — specialist may reduce dose"}
      ]
    },
    {
      id:'risperidone_quetiapine',
      name:'Risperidone · quetiapine · amisulpride',
      examples:'Specialist-titrated per SPC',
      step:'Specialist choice — oral antipsychotics',
      source:'NICE CG178 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/cg178',
      sideEffects:'Risperidone/amisulpride: raised prolactin, EPSE; quetiapine: sedation, postural hypotension, weight gain',
      monitor:'Prolactin if symptoms (galactorrhoea, amenorrhoea, sexual dysfunction); CG178 schedule',
      counsel:'"Tell us about changes to periods, breast discharge or sexual problems — these can be caused by the medicine and are treatable."',
      detail:{ 'Key teaching':'Prolactin-raising agents can affect bone health and fertility. Amisulpride is renally cleared.' },
      conditions: [
        {"kind":"caution","label":"Osteoporosis / amenorrhoea","text":"Hyperprolactinaemia — check prolactin, discuss switch"},
        {"kind":"caution","label":"Older adult with dementia","text":"Antipsychotics increase stroke and mortality in dementia — specialist only"}
      ]
    },
    {
      id:'depot',
      name:'Long-acting injectable (depot) antipsychotics',
      examples:'Aripiprazole, paliperidone, risperidone, haloperidol decanoate, flupentixol, zuclopenthixol',
      step:'Specialist — when preferred or adherence is a concern',
      source:'NICE CG178',
      sourceUrl:'https://www.nice.org.uk/guidance/cg178',
      sideEffects:'As for the oral drug; injection-site reactions; EPSE with first-generation depots',
      monitor:'Given by the community mental health team or practice under a local agreement',
      counsel:'"An injection every few weeks or months means no daily tablets — your team will arrange each one."',
      detail:{ 'Key teaching':'Consider when the person prefers it or to avoid covert non-adherence (CG178). Record the depot on the GP record so it shows in interaction checks.' },
      conditions: [
        {"kind":"note","label":"Shared care","text":"Who gives and prescribes the depot depends on local shared-care agreements"}
      ]
    },
    {
      id:'clozapine',
      name:'Clozapine',
      examples:'Hospital/specialist-supplied with mandatory FBC monitoring',
      step:'Treatment-resistant schizophrenia (after 2 antipsychotics, one a non-clozapine second-generation)',
      source:'NICE CG178 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/cg178',
      sideEffects:'Neutropenia/agranulocytosis, constipation and ileus, hypersalivation, myocarditis, seizures, weight gain',
      monitor:'FBC through the clozapine monitoring service; bowel habit; record in GP notes as "hospital-prescribed"',
      counsel:'"Fever or a sore throat — get a same-day blood test. Constipation on clozapine can be serious — tell us early."',
      detail:{ 'Key teaching':'GP practices usually do not prescribe clozapine but must record it so that interacting medicines (e.g. ciprofloxacin, carbamazepine) are spotted and infection/constipation is acted on.' },
      conditions: [
        {"kind":"avoid","label":"Neutropenia","text":"Contraindicated; urgent specialist discussion"},
        {"kind":"caution","label":"Smoking status change","text":"Stopping smoking raises levels — toxicity risk"}
      ]
    }
  ],

  sources: [
    { label:'NICE CG178 — Psychosis and schizophrenia in adults', url:'https://www.nice.org.uk/guidance/cg178' },
    { label:'NICE QS80 — Psychosis and schizophrenia in adults', url:'https://www.nice.org.uk/guidance/qs80' },
    { label:'SPC — antipsychotics (emc)', url:'https://www.medicines.org.uk/emc/search?q=antipsychotic' },
    { label:'BNF — Psychoses and related disorders', url:'https://bnf.nice.org.uk/treatment-summaries/psychoses-and-related-disorders/' }
  ],
});
