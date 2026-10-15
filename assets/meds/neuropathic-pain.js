/* ============================================
   Medication Chooser — Neuropathic pain
   NICE CG173 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('neuropathic-pain', {
  title: 'Neuropathic pain — first-line agent selection',
  subtitle: 'The CG173 four first-line agents (switch, don\u2019t stack) plus condition-specific choices.',
  guideline: 'NICE CG173 · SPC',


  safety: [
    {"tone":"amber","label":"Trigeminal neuralgia","text":"Trigeminal neuralgia — carbamazepine is first-line (NOT the standard four). MRI / refer if red flags (young, bilateral, sensory loss, deafness)."},
    {"tone":"amber","label":"Substance-misuse / dependence risk","text":"Pregabalin & gabapentin are Class C controlled drugs — assess misuse/diversion risk before prescribing"},
    {"tone":"amber","label":"Pregnant or planning pregnancy","text":"Pregnancy — gabapentinoids/valproate avoided; specialist advice; amitriptyline/duloxetine case-by-case"}
  ],

  drugs: [
    // -------- AMITRIPTYLINE --------
    {
      id:'amitriptyline',
      name:'Amitriptyline',
      examples:'Amitriptyline 10 mg nocte, titrate',
      step:'1st-line (one of four)',
      source:'NICE CG173 §1.1.1',
      sideEffects:'Sedation, dry mouth, constipation, urinary retention, weight gain',
      monitor:'Titrate to effect/tolerance; ECG if cardiac risk/higher dose',
      counsel:'"A low dose of an older medicine used here for nerve pain, not depression. Take it at night — it can help sleep, and the dry mouth/drowsiness usually settle."',
      detail:{
        'Dose': 'Start 10 mg nocte, titrate to effect (usually ≤75 mg)',
        'Interactions': 'Other sedatives/anticholinergics, QT-prolonging drugs, tramadol (serotonin)',
        'Key teaching': 'One of four CG173 first-line agents (amitriptyline, duloxetine, gabapentin, pregabalin) — choose ONE; if ineffective/not tolerated, SWITCH to another (do not stack).'
      },
      conditions: [
        {"kind":"avoid","label":"IHD / arrhythmia / long QT","text":"IHD/arrhythmia/long QT — avoid TCA"},
        {"kind":"caution","label":"Elderly / falls risk","text":"Elderly — anticholinergic/falls risk; start very low or choose another"},
        {"kind":"caution","label":"Needs to avoid sedation (driver / safety-critical)","text":"Safety-critical role — sedation; dose at night or pick another"},
        {"kind":"caution","label":"Weight gain a concern","text":"Weight gain concern — possible side effect"},
        {"kind":"favoured","label":"Insomnia / poor sleep","text":"Poor sleep — sedating effect at night is helpful"}
      ]
    },

    // -------- DULOXETINE --------
    {
      id:'duloxetine',
      name:'Duloxetine',
      examples:'Duloxetine 60 mg OD (30 mg start only if tolerability is a concern)',
      step:'1st-line (one of four)',
      source:'NICE CG173 §1.1.1',
      sideEffects:'Nausea, insomnia, dry mouth, raised BP, sexual dysfunction',
      monitor:'BP; mood; tolerability (nausea)',
      counsel:'"This one helps nerve pain and low mood together, so it\'s a good fit if both are a problem. Take it in the morning; any nausea usually settles in a week or two."',
      detail:{
        'Dose': '60 mg OD for diabetic peripheral neuropathic pain (SPC; max 120 mg daily in divided doses); a lower 30 mg start may be used for tolerability; first-line/licensed in diabetic neuropathy',
        'Interactions': 'Other serotonergic drugs, tramadol, hepatic impairment (avoid)',
        'Key teaching': 'CG173 first-line; particularly useful with comorbid depression/anxiety and the agent of choice many use for diabetic neuropathy.'
      },
      conditions: [
        {"kind":"favoured","label":"Painful diabetic neuropathy","text":"Diabetic neuropathy — licensed and commonly first choice"},
        {"kind":"favoured","label":"Comorbid depression / anxiety","text":"Comorbid depression/anxiety — dual benefit"},
        {"kind":"favoured","label":"IHD / arrhythmia / long QT","text":"TCA unsuitable (cardiac) — duloxetine a safer first-line"},
        {"kind":"favoured","label":"Needs to avoid sedation (driver / safety-critical)","text":"Less sedating than amitriptyline/gabapentinoids"}
      ]
    },

    // -------- GABAPENTIN --------
    {
      id:'gabapentin',
      name:'Gabapentin',
      examples:'Gabapentin 300 mg, titrate',
      step:'1st-line (one of four)',
      source:'NICE CG173 §1.1.1',
      sideEffects:'Sedation, dizziness, ataxia, weight gain, oedema; dependence (Class C)',
      monitor:'Titrate slowly; reduce dose in renal impairment; taper to stop',
      counsel:'"A nerve-pain tablet built up gradually over a couple of weeks. It can make you drowsy or unsteady at first. Don\'t stop it abruptly — we\'ll taper it if needed."',
      detail:{
        'Dose': 'Titrate from 300 mg/day (or lower in elderly/renal) per SPC schedule',
        'Interactions': 'CNS depressants, opioids (respiratory depression), antacids reduce absorption',
        'Key teaching': 'CG173 first-line. Controlled drug (Class C) — assess misuse risk. Renally cleared: dose-reduce in low eGFR.'
      },
      conditions: [
        {"kind":"caution","label":"Renal impairment (eGFR <50)","text":"Renal impairment — reduce dose, titrate carefully"},
        {"kind":"caution","label":"Elderly / falls risk","text":"Elderly — sedation/falls; titrate slowly"},
        {"kind":"caution","label":"Substance-misuse / dependence risk","text":"Misuse/dependence risk — gabapentinoid caution; prefer amitriptyline/duloxetine"},
        {"kind":"caution","label":"Weight gain a concern","text":"Weight gain / oedema possible"}
      ]
    },

    // -------- PREGABALIN --------
    {
      id:'pregabalin',
      name:'Pregabalin',
      examples:'Pregabalin 75 mg BD, titrate',
      step:'1st-line (one of four)',
      source:'NICE CG173 §1.1.1',
      sideEffects:'Sedation, dizziness, weight gain, oedema, euphoria; dependence (Class C)',
      monitor:'Titrate; renal dose-reduce; taper to stop',
      counsel:'"Similar to gabapentin but taken twice a day and easier to build up. It can also ease anxiety. Like its cousin, don\'t stop it suddenly."',
      detail:{
        'Dose': 'Start 75 mg BD, titrate (max 600 mg/day); reduce in renal impairment',
        'Interactions': 'CNS depressants, opioids',
        'Key teaching': 'CG173 first-line and licensed for GAD — handy with comorbid anxiety. Controlled drug (Class C); higher misuse potential than gabapentin.'
      },
      conditions: [
        {"kind":"caution","label":"Renal impairment (eGFR <50)","text":"Renal impairment — dose-reduce"},
        {"kind":"caution","label":"Elderly / falls risk","text":"Elderly — sedation/falls; titrate slowly"},
        {"kind":"caution","label":"Substance-misuse / dependence risk","text":"Misuse risk — pregabalin has notable diversion potential; prefer non-gabapentinoid"},
        {"kind":"favoured","label":"Generalised anxiety disorder","text":"Comorbid GAD — pregabalin licensed for both"}
      ]
    },

    // -------- CARBAMAZEPINE (trigeminal) --------
    {
      id:'carbamazepine',
      name:'Carbamazepine',
      examples:'Carbamazepine 100 mg OD/BD, titrate',
      step:'1st-line trigeminal neuralgia',
      source:'NICE CG173 §1.4',
      sideEffects:'Dizziness, ataxia, hyponatraemia, rash (SJS — esp. HLA-B*1502), blood dyscrasias, enzyme induction',
      monitor:'FBC, U&E (Na⁺), LFTs; many interactions',
      counsel:'"The specific tablet for this facial nerve pain. It needs building up slowly, and we\'ll do occasional blood tests to check your sodium and blood count."',
      detail:{
        'Dose': 'Start 100 mg OD–BD, titrate to response',
        'Interactions': 'Strong enzyme inducer — reduces COC, DOACs, many drugs; check before adding',
        'Key teaching': 'First-line specifically for trigeminal neuralgia (not the standard four). Refer if it fails or red-flag features.'
      },
      conditions: [
        {"kind":"favoured","label":"Trigeminal neuralgia","text":"Trigeminal neuralgia — first-line agent"}
      ]
    },

    // -------- TOPICAL CAPSAICIN / LIDOCAINE --------
    {
      id:'topical',
      name:'Topical capsaicin / lidocaine',
      examples:'Capsaicin 0.075% cream · Lidocaine 5% plaster',
      step:'Localised pain',
      source:'NICE CG173 §1.1.4',
      sideEffects:'Local burning (capsaicin), skin reaction; minimal systemic effect',
      monitor:'Skin; useful when oral agents unsuitable',
      counsel:'"For pain in one small area, a cream or patch applied locally can help without whole-body side effects — handy if tablets don\'t suit you."',
      detail:{
        'Dose': 'Capsaicin cream TDS–QDS; lidocaine 5% plaster (often used in PHN, off-label/specialist)',
        'Key teaching': 'Consider topical capsaicin for localised neuropathic pain when oral agents are not tolerated or unwanted.'
      },
      conditions: [
        {"kind":"favoured","label":"Post-herpetic neuralgia","text":"Localised pain / PHN — topical option avoids systemic side effects"},
        {"kind":"favoured","label":"Localised peripheral pain","text":"Localised pain / PHN — topical option avoids systemic side effects"},
        {"kind":"favoured","label":"Elderly / falls risk","text":"Elderly — avoids sedation/falls of oral agents"}
      ]
    },

    // -------- TRAMADOL (rescue only) --------
    {
      id:'tramadol',
      name:'Tramadol (acute rescue only)',
      examples:'Tramadol PRN, short-term',
      step:'Rescue / specialist',
      source:'NICE CG173 §1.1.5',
      sideEffects:'Nausea, dizziness, dependence, serotonin syndrome, seizures',
      monitor:'Short-term only; avoid with SSRIs/SNRIs',
      counsel:'"Only as a short-term rescue while we get the regular nerve-pain tablet working — it\'s not for long-term use."',
      detail:{
        'Dose': 'Short-term only',
        'Key teaching': 'CG173: consider tramadol only for ACUTE rescue. Do NOT start morphine/other opioids for neuropathic pain in primary care (specialist only).'
      },
      conditions: [
        {"kind":"avoid","label":"Substance-misuse / dependence risk","text":"Misuse risk — avoid"},
        {"kind":"caution","label":"Comorbid depression / anxiety","text":"On serotonergic drug — serotonin syndrome risk with tramadol"}
      ]
    }
  ],

  sources: [
    { label:'NICE CG173 — Neuropathic pain in adults: pharmacological management', url:'https://www.nice.org.uk/guidance/cg173' },
    { label:'NICE CG173 — neuropathic pain', url:'https://www.nice.org.uk/guidance/cg173' },
    { label:'BNF — Neuropathic pain', url:'https://bnf.nice.org.uk/treatment-summaries/neuropathic-pain/' }
  ],
});
