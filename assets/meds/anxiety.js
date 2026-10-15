/* ============================================
   Medication Chooser — Generalised Anxiety Disorder
   NICE CG113 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('anxiety', {
  title: 'GAD — pharmacological selection',
  subtitle: 'NICE CG113 stepped care: sertraline is first-line drug treatment for GAD. Psychological therapy runs alongside.',
  guideline: 'NICE CG113 · SPC',


  safety: [
    {"tone":"amber","label":"Under 18","text":"Under 18 — initiate via CAMHS, not routinely in primary care"},
    {"tone":"amber","label":"Age 18–25","text":"18–25 / under 30 — review within 1 week (suicidality)"},
    {"tone":"amber","label":"Substance / alcohol misuse history","text":"Substance misuse — pregabalin is misused/diverted; benzodiazepines best avoided"},
    {"tone":"red","label":"MAOI (current or recent)","text":"MAOI — washout required; serotonin syndrome risk"}
  ],

  drugs: [
    // -------- SERTRALINE --------
    {
      id:'sertraline',
      name:'Sertraline (SSRI)',
      examples:'25–50 mg OD → 200 mg',
      step:'First-line',
      source:'NICE CG113 §1.2.23',
      sideEffects:'Early ↑ anxiety/jitteriness, nausea, sexual dysfunction, hyponatraemia',
      monitor:'Review at 1–2 weeks (1 week if <30); warn re early symptom worsening',
      counsel:'"Anxiety often feels worse for the first week or two before it improves — that\'s expected, not a sign it\'s failing. Start low, build up slowly."',
      detail:{
        'Dose': 'Sertraline 25–50 mg OD; titrate to 200 mg',
        'Interactions': '↑ bleeding with NSAID/anticoagulant; serotonergic load',
        'Key teaching': 'NICE CG113-named first-line drug for GAD (most cost-effective SSRI). Start low to limit initial activation.'
      },
      conditions: [
        {"kind":"avoid","label":"MAOI (current or recent)","text":"Recent MAOI — washout required"},
        {"kind":"caution","label":"Stepped-care stage: Step 1–2: mild, no marked impairment","text":"Mild GAD — try low-intensity psychological intervention first"},
        {"kind":"caution","label":"GI bleed / ulcer history","text":"Bleeding risk — consider PPI cover"},
        {"kind":"caution","label":"NSAID / anticoagulant / antiplatelet","text":"Bleeding risk — consider PPI cover"},
        {"kind":"favoured","label":"Comorbid depression","text":"Comorbid depression — SSRI treats both"},
        {"kind":"favoured","label":"Previous good response to a drug","text":"If it worked before — re-use it"},
        {"kind":"favoured","label":"Cardiac disease / recent MI","text":"Cardiac disease — sertraline is the safest SSRI"}
      ]
    },

    // -------- ALTERNATIVE SSRI --------
    {
      id:'altssri',
      name:'Alternative SSRI (escitalopram / paroxetine)',
      examples:'Escitalopram 10 mg OD · Paroxetine 20 mg OD',
      step:'2nd-line',
      source:'NICE CG113 §1.2.24',
      sideEffects:'As SSRIs; escitalopram QTc; paroxetine marked discontinuation + weight gain',
      monitor:'Review 1–2 weeks; ECG if QTc risk',
      counsel:'"If the first one didn\'t suit you, a different tablet in the same family is the usual next step."',
      detail:{
        'Dose': 'Escitalopram 10 mg → 20 mg; paroxetine 20 mg → 50 mg',
        'Key teaching': 'Offer a different SSRI if sertraline ineffective/not tolerated. Paroxetine: most discontinuation symptoms, avoid in pregnancy.'
      },
      conditions: [
        {"kind":"avoid","label":"MAOI (current or recent)","text":"Recent MAOI — washout required"},
        {"kind":"caution","label":"Pregnant","text":"Pregnancy — avoid paroxetine (cardiac malformation signal)"},
        {"kind":"caution","label":"Long QT / QTc-prolonging risk","text":"Long QT — avoid escitalopram; choose non-QT SSRI"}
      ]
    },

    // -------- SNRI --------
    {
      id:'snri',
      name:'SNRI (duloxetine / venlafaxine)',
      examples:'Duloxetine 30–60 mg OD · Venlafaxine MR 75 mg',
      step:'2nd / 3rd-line',
      source:'NICE CG113 §1.2.24',
      sideEffects:'Nausea, ↑ BP (venlafaxine), discontinuation symptoms',
      monitor:'BP at baseline + titration; taper slowly',
      counsel:'"A different class that lifts mood and eases anxiety. We\'ll check your blood pressure as we go up."',
      detail:{
        'Dose': 'Duloxetine 30 → 60 mg; venlafaxine MR 75 → 225 mg',
        'Key teaching': 'Offer an SNRI if SSRIs ineffective. Check BP, especially with venlafaxine.'
      },
      conditions: [
        {"kind":"avoid","label":"MAOI (current or recent)","text":"Recent MAOI — washout required"},
        {"kind":"caution","label":"Cardiac disease / recent MI","text":"Cardiac disease / HTN — venlafaxine raises BP (prefer duloxetine, monitor)"},
        {"kind":"favoured","label":"Stepped-care stage: Step 3: SSRI + SNRI failed / refractory","text":"SSRI failure — SNRI is the next evidence-based step"}
      ]
    },

    // -------- PREGABALIN --------
    {
      id:'pregabalin',
      name:'Pregabalin',
      examples:'150 mg/day in 2–3 doses → 600 mg',
      step:'Alternative',
      source:'NICE CG113 §1.2.25 · Class C controlled drug',
      sideEffects:'Sedation, dizziness, weight gain, dependence/misuse, respiratory depression with opioids',
      monitor:'Misuse risk; renal dose adjustment; taper to stop',
      counsel:'"An option if antidepressants don\'t suit you — but it can be habit-forming, so we\'ll use it carefully and review."',
      detail:{
        'Dose': 'Pregabalin 150 mg/day → 600 mg; reduce in renal impairment',
        'Interactions': 'Opioids/CNS depressants — fatal respiratory depression reported',
        'Key teaching': 'Now a controlled drug (Class C). Offer if SSRIs/SNRIs unsuitable. Avoid in substance misuse.'
      },
      conditions: [
        {"kind":"avoid","label":"Substance / alcohol misuse history","text":"Substance misuse — high diversion/misuse potential"},
        {"kind":"caution","label":"Renal impairment (eGFR <60)","text":"Renal impairment — dose reduction required"},
        {"kind":"caution","label":"Opioids / CNS depressants","text":"Concurrent opioids — risk of respiratory depression"},
        {"kind":"favoured","label":"Stepped-care stage: Step 3: SSRI + SNRI failed / refractory","text":"SSRI/SNRI not tolerated or failed — pregabalin is the NICE CG113 alternative"}
      ]
    },

    // -------- BENZODIAZEPINE --------
    {
      id:'benzo',
      name:'Benzodiazepine',
      examples:'Diazepam — crisis use only, ≤2–4 weeks',
      step:'Avoid (routine)',
      source:'NICE CG113 §1.2.26',
      sideEffects:'Dependence, tolerance, sedation, falls, cognitive impairment',
      monitor:'Strictly time-limited; do not repeat',
      counsel:'"These calm things very quickly but become habit-forming within weeks, so they\'re only for a short crisis, not ongoing treatment."',
      detail:{
        'Key teaching': 'NICE CG113: do NOT offer benzodiazepines for GAD except short-term during a crisis. Not for chronic use.'
      },
      conditions: [
        {"kind":"note","label":"Acute crisis / severe agitation","text":"Very short-term (≤2–4 weeks) only, during acute crisis"}
      ]
    },

    // -------- BETA-BLOCKER (symptomatic) --------
    {
      id:'propranolol',
      name:'Propranolol (somatic symptoms)',
      examples:'Propranolol 10–40 mg PRN/BD',
      step:'Adjunct',
      source:'SPC',
      sideEffects:'Bradycardia, fatigue, cold peripheries; bronchospasm',
      monitor:'HR, BP; avoid in asthma',
      counsel:'"This eases the physical side — racing heart, tremor, palpitations — but doesn\'t treat the worry itself."',
      detail:{
        'Key teaching': 'Symptomatic relief of autonomic/somatic anxiety only. Not a substitute for SSRI/therapy.'
      },
      conditions: [
        {"kind":"favoured","label":"Prominent panic disorder","text":"Prominent somatic / palpitation symptoms — useful adjunct"}
      ]
    }
  ],

  sources: [
    { label:'NICE CG113 — Generalised anxiety disorder and panic disorder in adults', url:'https://www.nice.org.uk/guidance/cg113' },
    { label:'NICE CG113 — generalised anxiety disorder', url:'https://www.nice.org.uk/guidance/cg113' },
    { label:'BNF — Anxiety treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/hypnotics-and-anxiolytics/' }
  ],
});
