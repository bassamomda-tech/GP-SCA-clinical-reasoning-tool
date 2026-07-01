/* ============================================
   Medication Chooser — Neuropathic pain
   NICE NG173 · CKS Neuropathic pain · BNF
   ============================================ */
MedChooser.register('neuropathic-pain', {
  title: 'Neuropathic pain — first-line agent selection',
  subtitle: 'The NG173 four first-line agents (switch, don\u2019t stack) plus condition-specific choices. Tick the patient profile; cards re-tier live.',
  guideline: 'NICE NG173 · CKS · BNF',

  factors: [
    // Cause / type
    { group:'Cause / type', id:'diabetic', label:'Painful diabetic neuropathy' },
    { group:'Cause / type', id:'trigeminal', label:'Trigeminal neuralgia', note:'Carbamazepine first-line' },
    { group:'Cause / type', id:'phn', label:'Post-herpetic neuralgia' },
    { group:'Cause / type', id:'localised', label:'Localised peripheral pain', note:'Topical option' },
    { group:'Cause / type', id:'failed_one', label:'Tried one first-line agent, ineffective', note:'Switch, don\u2019t add' },

    // Comorbidities
    { group:'Comorbidities', id:'depression', label:'Comorbid depression / anxiety', note:'Duloxetine dual benefit' },
    { group:'Comorbidities', id:'insomnia', label:'Insomnia / poor sleep', note:'Amitriptyline at night' },
    { group:'Comorbidities', id:'cardiac', label:'IHD / arrhythmia / long QT', note:'TCA caution' },
    { group:'Comorbidities', id:'renal', label:'Renal impairment (eGFR <50)', note:'Gabapentinoid dose-reduce' },
    { group:'Comorbidities', id:'elderly', label:'Elderly / falls risk' },
    { group:'Comorbidities', id:'gad', label:'Generalised anxiety disorder', note:'Pregabalin licensed' },

    // Allergy / risk
    { group:'Risk', id:'misuse', label:'Substance-misuse / dependence risk', note:'Gabapentinoid caution (Class C)' },
    { group:'Risk', id:'preg', label:'Pregnant or planning pregnancy' },

    // Preference / context
    { group:'Preference / context', id:'avoid_sedation', label:'Needs to avoid sedation (driver / safety-critical)' },
    { group:'Preference / context', id:'weight', label:'Weight gain a concern' },
  ],

  flags: (f) => {
    const out = [];
    if (f.trigeminal) out.push({ tone:'amber', text:'Trigeminal neuralgia — carbamazepine is first-line (NOT the standard four). MRI / refer if red flags (young, bilateral, sensory loss, deafness).' });
    if (f.misuse) out.push({ tone:'amber', text:'Pregabalin & gabapentin are Class C controlled drugs — assess misuse/diversion risk before prescribing' });
    if (f.preg) out.push({ tone:'amber', text:'Pregnancy — gabapentinoids/valproate avoided; specialist advice; amitriptyline/duloxetine case-by-case' });
    return out;
  },

  drugs: [
    // -------- AMITRIPTYLINE --------
    {
      id:'amitriptyline',
      name:'Amitriptyline',
      examples:'Amitriptyline 10 mg nocte, titrate',
      step:'1st-line (one of four)',
      source:'NICE NG173 §1.1.1',
      sideEffects:'Sedation, dry mouth, constipation, urinary retention, weight gain',
      monitor:'Titrate to effect/tolerance; ECG if cardiac risk/higher dose',
      counsel:'"A low dose of an older medicine used here for nerve pain, not depression. Take it at night — it can help sleep, and the dry mouth/drowsiness usually settle."',
      detail:{
        'Dose': 'Start 10 mg nocte, titrate to effect (usually ≤75 mg)',
        'Interactions': 'Other sedatives/anticholinergics, QT-prolonging drugs, tramadol (serotonin)',
        'Key teaching': 'One of four NG173 first-line agents (amitriptyline, duloxetine, gabapentin, pregabalin) — choose ONE; if ineffective/not tolerated, SWITCH to another (do not stack).'
      },
      evaluate(f){
        if (f.cardiac) return { tier:'avoid', reasons:[{kind:'bad', text:'IHD/arrhythmia/long QT — avoid TCA'}] };
        const r = [];
        if (f.insomnia) r.push({kind:'good', text:'Poor sleep — sedating effect at night is helpful'});
        if (f.elderly) r.push({kind:'bad', text:'Elderly — anticholinergic/falls risk; start very low or choose another'});
        if (f.avoid_sedation) r.push({kind:'bad', text:'Safety-critical role — sedation; dose at night or pick another'});
        if (f.weight) r.push({kind:'bad', text:'Weight gain concern — possible side effect'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'NG173 first-line option'}] };
      }
    },

    // -------- DULOXETINE --------
    {
      id:'duloxetine',
      name:'Duloxetine',
      examples:'Duloxetine 60 mg OD (30 mg start)',
      step:'1st-line (one of four)',
      source:'NICE NG173 §1.1.1',
      sideEffects:'Nausea, insomnia, dry mouth, raised BP, sexual dysfunction',
      monitor:'BP; mood; titrate from 30 mg',
      counsel:'"This one helps nerve pain and low mood together, so it\'s a good fit if both are a problem. Take it in the morning; any nausea usually settles in a week or two."',
      detail:{
        'Dose': 'Start 30 mg OD, increase to 60 mg; first-line/licensed in diabetic neuropathy',
        'Interactions': 'Other serotonergic drugs, tramadol, hepatic impairment (avoid)',
        'Key teaching': 'NG173 first-line; particularly useful with comorbid depression/anxiety and the agent of choice many use for diabetic neuropathy.'
      },
      evaluate(f){
        const r = [];
        if (f.diabetic) r.push({kind:'good', text:'Diabetic neuropathy — licensed and commonly first choice'});
        if (f.depression) r.push({kind:'good', text:'Comorbid depression/anxiety — dual benefit'});
        if (f.cardiac) r.push({kind:'good', text:'TCA unsuitable (cardiac) — duloxetine a safer first-line'});
        if (f.avoid_sedation) r.push({kind:'good', text:'Less sedating than amitriptyline/gabapentinoids'});
        const preferred = true;
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'NG173 first-line option'}] };
      }
    },

    // -------- GABAPENTIN --------
    {
      id:'gabapentin',
      name:'Gabapentin',
      examples:'Gabapentin 300 mg, titrate',
      step:'1st-line (one of four)',
      source:'NICE NG173 §1.1.1',
      sideEffects:'Sedation, dizziness, ataxia, weight gain, oedema; dependence (Class C)',
      monitor:'Titrate slowly; reduce dose in renal impairment; taper to stop',
      counsel:'"A nerve-pain tablet built up gradually over a couple of weeks. It can make you drowsy or unsteady at first. Don\'t stop it abruptly — we\'ll taper it if needed."',
      detail:{
        'Dose': 'Titrate from 300 mg/day (or lower in elderly/renal) per BNF schedule',
        'Interactions': 'CNS depressants, opioids (respiratory depression), antacids reduce absorption',
        'Key teaching': 'NG173 first-line. Controlled drug (Class C) — assess misuse risk. Renally cleared: dose-reduce in low eGFR.'
      },
      evaluate(f){
        if (f.misuse) return { tier:'acceptable', reasons:[{kind:'bad', text:'Misuse/dependence risk — gabapentinoid caution; prefer amitriptyline/duloxetine'}] };
        const r = [];
        if (f.renal) r.push({kind:'bad', text:'Renal impairment — reduce dose, titrate carefully'});
        if (f.elderly) r.push({kind:'bad', text:'Elderly — sedation/falls; titrate slowly'});
        if (f.weight) r.push({kind:'bad', text:'Weight gain / oedema possible'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'NG173 first-line option'}] };
      }
    },

    // -------- PREGABALIN --------
    {
      id:'pregabalin',
      name:'Pregabalin',
      examples:'Pregabalin 75 mg BD, titrate',
      step:'1st-line (one of four)',
      source:'NICE NG173 §1.1.1',
      sideEffects:'Sedation, dizziness, weight gain, oedema, euphoria; dependence (Class C)',
      monitor:'Titrate; renal dose-reduce; taper to stop',
      counsel:'"Similar to gabapentin but taken twice a day and easier to build up. It can also ease anxiety. Like its cousin, don\'t stop it suddenly."',
      detail:{
        'Dose': 'Start 75 mg BD, titrate (max 600 mg/day); reduce in renal impairment',
        'Interactions': 'CNS depressants, opioids',
        'Key teaching': 'NG173 first-line and licensed for GAD — handy with comorbid anxiety. Controlled drug (Class C); higher misuse potential than gabapentin.'
      },
      evaluate(f){
        if (f.misuse) return { tier:'acceptable', reasons:[{kind:'bad', text:'Misuse risk — pregabalin has notable diversion potential; prefer non-gabapentinoid'}] };
        const r = [];
        if (f.gad) r.push({kind:'good', text:'Comorbid GAD — pregabalin licensed for both'});
        if (f.renal) r.push({kind:'bad', text:'Renal impairment — dose-reduce'});
        if (f.elderly) r.push({kind:'bad', text:'Elderly — sedation/falls; titrate slowly'});
        const preferred = !f.misuse;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'good', text:'NG173 first-line option'}] };
      }
    },

    // -------- CARBAMAZEPINE (trigeminal) --------
    {
      id:'carbamazepine',
      name:'Carbamazepine',
      examples:'Carbamazepine 100 mg OD/BD, titrate',
      step:'1st-line trigeminal neuralgia',
      source:'NICE NG173 §1.4',
      sideEffects:'Dizziness, ataxia, hyponatraemia, rash (SJS — esp. HLA-B*1502), blood dyscrasias, enzyme induction',
      monitor:'FBC, U&E (Na⁺), LFTs; many interactions',
      counsel:'"The specific tablet for this facial nerve pain. It needs building up slowly, and we\'ll do occasional blood tests to check your sodium and blood count."',
      detail:{
        'Dose': 'Start 100 mg OD–BD, titrate to response',
        'Interactions': 'Strong enzyme inducer — reduces COC, DOACs, many drugs; check before adding',
        'Key teaching': 'First-line specifically for trigeminal neuralgia (not the standard four). Refer if it fails or red-flag features.'
      },
      evaluate(f){
        if (!f.trigeminal) return { tier:'avoid', reasons:[{kind:'bad', text:'Reserved for trigeminal neuralgia — not for general neuropathic pain'}] };
        return { tier:'preferred', reasons:[{kind:'good', text:'Trigeminal neuralgia — first-line agent'}] };
      }
    },

    // -------- TOPICAL CAPSAICIN / LIDOCAINE --------
    {
      id:'topical',
      name:'Topical capsaicin / lidocaine',
      examples:'Capsaicin 0.075% cream · Lidocaine 5% plaster',
      step:'Localised pain',
      source:'NICE NG173 §1.1.4',
      sideEffects:'Local burning (capsaicin), skin reaction; minimal systemic effect',
      monitor:'Skin; useful when oral agents unsuitable',
      counsel:'"For pain in one small area, a cream or patch applied locally can help without whole-body side effects — handy if tablets don\'t suit you."',
      detail:{
        'Dose': 'Capsaicin cream TDS–QDS; lidocaine 5% plaster (often used in PHN, off-label/specialist)',
        'Key teaching': 'Consider topical capsaicin for localised neuropathic pain when oral agents are not tolerated or unwanted.'
      },
      evaluate(f){
        const r = [];
        if (f.localised || f.phn) r.push({kind:'good', text:'Localised pain / PHN — topical option avoids systemic side effects'});
        if (f.elderly) r.push({kind:'good', text:'Elderly — avoids sedation/falls of oral agents'});
        return { tier: (f.localised||f.phn) ? 'acceptable' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'For localised peripheral neuropathic pain'}] };
      }
    },

    // -------- TRAMADOL (rescue only) --------
    {
      id:'tramadol',
      name:'Tramadol (acute rescue only)',
      examples:'Tramadol PRN, short-term',
      step:'Rescue / specialist',
      source:'NICE NG173 §1.1.5',
      sideEffects:'Nausea, dizziness, dependence, serotonin syndrome, seizures',
      monitor:'Short-term only; avoid with SSRIs/SNRIs',
      counsel:'"Only as a short-term rescue while we get the regular nerve-pain tablet working — it\'s not for long-term use."',
      detail:{
        'Dose': 'Short-term only',
        'Key teaching': 'NG173: consider tramadol only for ACUTE rescue. Do NOT start morphine/other opioids for neuropathic pain in primary care (specialist only).'
      },
      evaluate(f){
        if (f.misuse) return { tier:'avoid', reasons:[{kind:'bad', text:'Misuse risk — avoid'}] };
        const r = [{kind:'neutral', text:'Acute rescue only — not for maintenance neuropathic pain'}];
        if (f.depression) r.push({kind:'bad', text:'On serotonergic drug — serotonin syndrome risk with tramadol'});
        return { tier:'acceptable', reasons: r };
      }
    },
  ],

  sources: [
    { label:'NICE NG173 — Neuropathic pain in adults: pharmacological management', url:'https://www.nice.org.uk/guidance/ng173' },
    { label:'NICE CKS — Neuropathic pain', url:'https://cks.nice.org.uk/topics/neuropathic-pain-drug-treatment/' },
    { label:'BNF — Neuropathic pain', url:'https://bnf.nice.org.uk/treatment-summaries/neuropathic-pain/' },
  ],
});
