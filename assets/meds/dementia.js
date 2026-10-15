/* ============================================
   Medication Chooser — Dementia (Alzheimer's disease, Lewy body, Parkinson's dementia)
   NICE NG97 (2018) · NICE TA217 · SPC
   Fixed lists (Upload 128, October 2026): no patient factors and no scoring.
   ============================================ */
MedChooser.register('dementia', {
  title: 'Dementia — cognitive-enhancing medicines',
  subtitle: 'NICE NG97: the acetylcholinesterase (AChE) inhibitors donepezil, galantamine and rivastigmine are options for mild to moderate Alzheimer\'s disease, with memantine for moderate disease if AChE inhibitors are unsuitable and for severe disease. The diagnosis is made by a specialist service; primary care can start or continue treatment on the advice of a clinician with the necessary knowledge and skills (NG97), without waiting for a specialist prescription where local arrangements allow.',
  guideline: 'NICE NG97 · TA217 · SPC',

  safety: [
    {"tone":"red","label":"Antipsychotics in dementia","text":"Only for severe distress or risk of harm when non-drug approaches have failed; increased stroke and mortality. Avoid in Lewy body and Parkinson's disease dementia (severe sensitivity reactions)."},
    {"tone":"amber","label":"Bradycardia, syncope, falls","text":"AChE inhibitors can cause bradycardia and heart block — check pulse before starting; ECG if slow or irregular pulse, syncope, or on rate-limiting drugs."},
    {"tone":"amber","label":"Anticholinergic burden","text":"Review medicines with anticholinergic effects (e.g. oxybutynin, amitriptyline, chlorphenamine) — they worsen cognition and oppose AChE inhibitors."},
    {"tone":"amber","label":"Disease-modifying antibodies","text":"Lecanemab and donanemab have UK marketing authorisations but are not recommended by NICE for NHS use (2025 final guidance) — not prescribed in primary care."}
  ],

  drugs: [
    {
      id:'donepezil',
      name:'Donepezil',
      examples:'Once daily at night; starting dose and step-up per SPC',
      step:'Mild–moderate Alzheimer\'s — first-line option',
      source:'NICE NG97 · TA217 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng97',
      sideEffects:'Nausea, diarrhoea, vivid dreams/insomnia, muscle cramps, bradycardia',
      monitor:'Pulse; weight; response and tolerability after the step-up',
      counsel:'"Take it at bedtime. If dreams are vivid, try taking it in the morning. Feeling sick usually settles in a couple of weeks."',
      detail:{
        'Dose':'Start low and step up after about a month per the SPC; the usual choice is the AChE inhibitor with the lowest acquisition cost (TA217).',
        'Key teaching':'Also used (off-label for some) in dementia with Lewy bodies — NG97 recommends donepezil or rivastigmine for mild–moderate DLB.'
      },
      conditions: [
        {"kind":"caution","label":"Bradycardia / sick sinus / heart block","text":"Pulse and ECG; specialist advice"},
        {"kind":"caution","label":"Peptic ulcer / on NSAID","text":"Cholinergic increase in gastric acid — caution"},
        {"kind":"caution","label":"Asthma / COPD","text":"Cholinergic — caution"}
      ]
    },
    {
      id:'rivastigmine',
      name:'Rivastigmine (capsules or patch)',
      examples:'Twice-daily capsules or a daily transdermal patch; titrated per SPC',
      step:'Mild–moderate Alzheimer\'s; Parkinson\'s disease dementia; DLB',
      source:'NICE NG97 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng97',
      sideEffects:'Nausea, vomiting, weight loss; patch: skin reactions',
      monitor:'Weight; pulse',
      counsel:'"Apply a new patch every day to a different area of skin and remove yesterday\'s. If you miss several days, ask us before restarting — the dose may need building up again."',
      detail:{ 'Key teaching':'Patch useful when swallowing or GI side effects are a problem. Restart at a lower dose after a treatment gap of more than a few days (SPC).' },
      conditions: [
        {"kind":"favoured","label":"Parkinson's disease dementia","text":"Licensed for mild–moderate PDD"},
        {"kind":"caution","label":"Low body weight","text":"Weight loss and GI effects — monitor"}
      ]
    },
    {
      id:'galantamine',
      name:'Galantamine',
      examples:'Modified-release once daily; titrated per SPC',
      step:'Mild–moderate Alzheimer\'s — option',
      source:'NICE NG97 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng97',
      sideEffects:'Nausea, dizziness, bradycardia; rare serious skin reactions',
      monitor:'Pulse; renal and hepatic function (dose limits)',
      counsel:'"Take with food and drink plenty of fluid."',
      detail:{ 'Key teaching':'Avoid in severe hepatic or renal impairment (SPC).' },
      conditions: [
        {"kind":"avoid","label":"Severe renal or hepatic impairment","text":"Not recommended (SPC)"}
      ]
    },
    {
      id:'memantine',
      name:'Memantine',
      examples:'Once daily; weekly step-up per SPC',
      step:'Moderate (if AChE-I unsuitable) or severe Alzheimer\'s; add-on to an AChE-I in moderate–severe',
      source:'NICE NG97 · TA217 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng97',
      sideEffects:'Dizziness, headache, constipation, drowsiness, raised BP',
      monitor:'Renal function (reduce in renal impairment); BP',
      counsel:'"Increase the dose each week as shown on the starter pack."',
      detail:{ 'Key teaching':'NG97: consider adding memantine to an AChE inhibitor in moderate disease and offer it in severe disease. Primary care can start it without a specialist if the diagnosis is established.' },
      conditions: [
        {"kind":"caution","label":"CKD","text":"Dose reduction by CrCl (SPC)"},
        {"kind":"caution","label":"Epilepsy","text":"Seizure threshold — caution"},
        {"kind":"favoured","label":"Bradycardia","text":"No AChE-I cardiac effect"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG97 — Dementia: assessment, management and support', url:'https://www.nice.org.uk/guidance/ng97' },
    { label:'NICE TA217 — Donepezil, galantamine, rivastigmine and memantine', url:'https://www.nice.org.uk/guidance/ta217' },
    { label:'SPC — donepezil', url:'https://www.medicines.org.uk/emc/search?q=donepezil' },
    { label:'SPC — memantine', url:'https://www.medicines.org.uk/emc/search?q=memantine' },
    { label:'BNF — Dementia', url:'https://bnf.nice.org.uk/treatment-summaries/dementia/' }
  ],
});
