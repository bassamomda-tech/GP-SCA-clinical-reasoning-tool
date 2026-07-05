/* ============================================
   Medication Chooser — Generalised Anxiety Disorder
   NICE NG113 (CG113) · CKS GAD · BNF
   ============================================ */
MedChooser.register('anxiety', {
  title: 'GAD — pharmacological selection',
  subtitle: 'NICE stepped care: sertraline is first-line drug treatment for GAD. Psychological therapy runs alongside. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG113 · CKS Generalised anxiety disorder · BNF',

  factors: [
    // Demographics
    { group:'Demographics', id:'under18', label:'Under 18', note:'Specialist (CAMHS) initiation' },
    { group:'Demographics', id:'young',   label:'Age 18–25', note:'↑ suicidality monitoring; review at 1 week' },
    { group:'Demographics', id:'elderly', label:'Elderly / frail', note:'Hyponatraemia + falls' },
    { group:'Demographics', id:'preg',    label:'Pregnant' },
    { group:'Demographics', id:'bf',      label:'Breastfeeding' },

    // Pattern / severity
    { group:'Pattern / severity', id:'step', label:'Stepped-care stage', options:[
      { value:'mild', label:'Step 1–2: mild, no marked impairment' },
      { value:'mod',  label:'Step 3: marked functional impairment' },
      { value:'sev',  label:'Step 3: SSRI + SNRI failed / refractory' },
    ]},
    { group:'Pattern / severity', id:'comorbid_dep', label:'Comorbid depression' },
    { group:'Pattern / severity', id:'panic', label:'Prominent panic disorder' },
    { group:'Pattern / severity', id:'prior_response', label:'Previous good response to a drug' },

    // Comorbidities
    { group:'Comorbidities', id:'cardiac', label:'Cardiac disease / recent MI' },
    { group:'Comorbidities', id:'longqt', label:'Long QT / QTc-prolonging risk' },
    { group:'Comorbidities', id:'renal',  label:'Renal impairment (eGFR <60)' },
    { group:'Comorbidities', id:'substance', label:'Substance / alcohol misuse history', note:'Caution with pregabalin & benzos' },
    { group:'Comorbidities', id:'gibleed', label:'GI bleed / ulcer history' },

    // Bloods
    { group:'Bloods', id:'na_low', label:'Na⁺ <130 / SIADH risk' },

    // Current medications
    { group:'Current medications', id:'nsaid_anticoag', label:'NSAID / anticoagulant / antiplatelet' },
    { group:'Current medications', id:'serotonergic', label:'Triptan / tramadol / other serotonergic' },
    { group:'Current medications', id:'opioid', label:'Opioids / CNS depressants', note:'Pregabalin respiratory-depression risk' },
    { group:'Current medications', id:'maoi', label:'MAOI (current or recent)' },

    // Preference / context
    { group:'Preference / context', id:'avoid_sexual', label:'Wants to avoid sexual dysfunction' },
    { group:'Preference / context', id:'crisis', label:'Acute crisis / severe agitation', note:'Very short-term benzo only' },
  ],

  flags: (f) => {
    const out = [];
    if (f.maoi) out.push({ tone:'red', text:'MAOI — washout required; serotonin syndrome risk' });
    if (f.under18) out.push({ tone:'amber', text:'Under 18 — initiate via CAMHS, not routinely in primary care' });
    if (f.young) out.push({ tone:'amber', text:'18–25 / under 30 — review within 1 week (suicidality)' });
    if (f.substance) out.push({ tone:'amber', text:'Substance misuse — pregabalin is misused/diverted; benzodiazepines best avoided' });
    return out;
  },

  drugs: [
    // -------- SERTRALINE --------
    {
      id:'sertraline',
      name:'Sertraline (SSRI)',
      examples:'25–50 mg OD → 200 mg',
      step:'First-line',
      source:'NICE NG113 §1.2.21',
      sideEffects:'Early ↑ anxiety/jitteriness, nausea, sexual dysfunction, hyponatraemia',
      monitor:'Review at 1–2 weeks (1 week if <30); warn re early symptom worsening',
      counsel:'"Anxiety often feels worse for the first week or two before it improves — that\'s expected, not a sign it\'s failing. Start low, build up slowly."',
      detail:{
        'Dose': 'Sertraline 25–50 mg OD; titrate to 200 mg',
        'Interactions': '↑ bleeding with NSAID/anticoagulant; serotonergic load',
        'Key teaching': 'NICE-named first-line drug for GAD (most cost-effective SSRI). Start low to limit initial activation.'
      },
      evaluate(f){
        if (f.maoi) return { tier:'avoid', reasons:[{kind:'bad', text:'Recent MAOI — washout required'}] };
        const r = [];
        if (f.step === 'mild') r.push({kind:'bad', text:'Mild GAD — try low-intensity psychological intervention first'});
        if (f.comorbid_dep) r.push({kind:'good', text:'Comorbid depression — SSRI treats both'});
        if (f.cardiac) r.push({kind:'good', text:'Cardiac disease — sertraline is the safest SSRI'});
        if (f.prior_response) r.push({kind:'good', text:'If it worked before — re-use it'});
        if (f.gibleed || f.nsaid_anticoag) r.push({kind:'bad', text:'Bleeding risk — consider PPI cover'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'NICE first-line drug for GAD'}] };
      }
    },

    // -------- ALTERNATIVE SSRI --------
    {
      id:'altssri',
      name:'Alternative SSRI (escitalopram / paroxetine)',
      examples:'Escitalopram 10 mg OD · Paroxetine 20 mg OD',
      step:'2nd-line',
      source:'NICE NG113 §1.2.22',
      sideEffects:'As SSRIs; escitalopram QTc; paroxetine marked discontinuation + weight gain',
      monitor:'Review 1–2 weeks; ECG if QTc risk',
      counsel:'"If the first one didn\'t suit you, a different tablet in the same family is the usual next step."',
      detail:{
        'Dose': 'Escitalopram 10 mg → 20 mg; paroxetine 20 mg → 50 mg',
        'Key teaching': 'Offer a different SSRI if sertraline ineffective/not tolerated. Paroxetine: most discontinuation symptoms, avoid in pregnancy.'
      },
      evaluate(f){
        if (f.maoi) return { tier:'avoid', reasons:[{kind:'bad', text:'Recent MAOI — washout required'}] };
        const r = [];
        if (f.longqt) r.push({kind:'bad', text:'Long QT — avoid escitalopram; choose non-QT SSRI'});
        if (f.preg) r.push({kind:'bad', text:'Pregnancy — avoid paroxetine (cardiac malformation signal)'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Second SSRI if first ineffective/not tolerated'}] };
      }
    },

    // -------- SNRI --------
    {
      id:'snri',
      name:'SNRI (duloxetine / venlafaxine)',
      examples:'Duloxetine 30–60 mg OD · Venlafaxine MR 75 mg',
      step:'2nd / 3rd-line',
      source:'NICE NG113 §1.2.23',
      sideEffects:'Nausea, ↑ BP (venlafaxine), discontinuation symptoms',
      monitor:'BP at baseline + titration; taper slowly',
      counsel:'"A different class that lifts mood and eases anxiety. We\'ll check your blood pressure as we go up."',
      detail:{
        'Dose': 'Duloxetine 30 → 60 mg; venlafaxine MR 75 → 225 mg',
        'Key teaching': 'Offer an SNRI if SSRIs ineffective. Check BP, especially with venlafaxine.'
      },
      evaluate(f){
        if (f.maoi) return { tier:'avoid', reasons:[{kind:'bad', text:'Recent MAOI — washout required'}] };
        const r = [];
        if (f.cardiac) r.push({kind:'bad', text:'Cardiac disease / HTN — venlafaxine raises BP (prefer duloxetine, monitor)'});
        if (f.step === 'sev') r.push({kind:'good', text:'SSRI failure — SNRI is the next evidence-based step'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Next step after SSRI non-response'}] };
      }
    },

    // -------- PREGABALIN --------
    {
      id:'pregabalin',
      name:'Pregabalin',
      examples:'150 mg/day in 2–3 doses → 600 mg',
      step:'Alternative',
      source:'NICE NG113 §1.2.24 · Class C controlled drug',
      sideEffects:'Sedation, dizziness, weight gain, dependence/misuse, respiratory depression with opioids',
      monitor:'Misuse risk; renal dose adjustment; taper to stop',
      counsel:'"An option if antidepressants don\'t suit you — but it can be habit-forming, so we\'ll use it carefully and review."',
      detail:{
        'Dose': 'Pregabalin 150 mg/day → 600 mg; reduce in renal impairment',
        'Interactions': 'Opioids/CNS depressants — fatal respiratory depression reported',
        'Key teaching': 'Now a controlled drug (Class C). Offer if SSRIs/SNRIs unsuitable. Avoid in substance misuse.'
      },
      evaluate(f){
        if (f.substance) return { tier:'avoid', reasons:[{kind:'bad', text:'Substance misuse — high diversion/misuse potential'}] };
        const r = [];
        if (f.opioid) r.push({kind:'bad', text:'Concurrent opioids — risk of respiratory depression'});
        if (f.renal) r.push({kind:'bad', text:'Renal impairment — dose reduction required'});
        if (f.step === 'sev') r.push({kind:'good', text:'SSRI + SNRI failed — pregabalin is the NICE alternative'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reserve for when antidepressants unsuitable'}] };
      }
    },

    // -------- BENZODIAZEPINE --------
    {
      id:'benzo',
      name:'Benzodiazepine',
      examples:'Diazepam — crisis use only, ≤2–4 weeks',
      step:'Avoid (routine)',
      source:'NICE NG113 §1.2.27',
      sideEffects:'Dependence, tolerance, sedation, falls, cognitive impairment',
      monitor:'Strictly time-limited; do not repeat',
      counsel:'"These calm things very quickly but become habit-forming within weeks, so they\'re only for a short crisis, not ongoing treatment."',
      detail:{
        'Key teaching': 'NICE: do NOT offer benzodiazepines for GAD except short-term during a crisis. Not for chronic use.'
      },
      evaluate(f){
        if (f.crisis) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Very short-term (≤2–4 weeks) only, during acute crisis'}] };
        return { tier:'avoid', reasons:[{kind:'bad', text:'Not for routine GAD — dependence; only short-term crisis use'}] };
      }
    },

    // -------- BETA-BLOCKER (symptomatic) --------
    {
      id:'propranolol',
      name:'Propranolol (somatic symptoms)',
      examples:'Propranolol 10–40 mg PRN/BD',
      step:'Adjunct',
      source:'BNF · CKS',
      sideEffects:'Bradycardia, fatigue, cold peripheries; bronchospasm',
      monitor:'HR, BP; avoid in asthma',
      counsel:'"This eases the physical side — racing heart, tremor, palpitations — but doesn\'t treat the worry itself."',
      detail:{
        'Key teaching': 'Symptomatic relief of autonomic/somatic anxiety only. Not a substitute for SSRI/therapy.'
      },
      evaluate(f){
        const r = [];
        if (f.panic) r.push({kind:'good', text:'Prominent somatic / palpitation symptoms — useful adjunct'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Adjunct for physical symptoms; not core treatment'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG113 (CG113) — Generalised anxiety disorder and panic disorder in adults', url:'https://www.nice.org.uk/guidance/cg113' },
    { label:'NICE CKS — Generalised anxiety disorder', url:'https://cks.nice.org.uk/topics/generalized-anxiety-disorder/' },
    { label:'BNF — Anxiety treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/hypnotics-and-anxiolytics/' },
  ],
});
