/* ============================================
   Medication Chooser — Depression (adults)
   NICE NG222 · CKS Depression · BNF
   ============================================ */
MedChooser.register('depression', {
  title: 'Depression — antidepressant selection',
  subtitle: 'NICE NG222 treats all first-line antidepressants as broadly equal in efficacy — choice is driven by the patient profile, side-effect fit and safety. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG222 · CKS Depression · BNF',

  factors: [
    // Demographics
    { group:'Demographics', id:'under18', label:'Under 18 (CYP)', note:'Fluoxetine + CAMHS only' },
    { group:'Demographics', id:'young',   label:'Age 18–25', note:'↑ suicidality monitoring; review at 1 week' },
    { group:'Demographics', id:'elderly', label:'Elderly / frail', note:'Hyponatraemia + falls risk' },
    { group:'Demographics', id:'preg',    label:'Pregnant' },
    { group:'Demographics', id:'bf',      label:'Breastfeeding' },

    // Severity / illness pattern
    { group:'Severity / pattern', id:'severity', label:'Severity (PHQ-9)', options:[
      { value:'mild', label:'Mild / subthreshold (<10)' },
      { value:'mod',  label:'Moderate (10–19)' },
      { value:'sev',  label:'Severe (≥20)' },
    ]},
    { group:'Severity / pattern', id:'prior_response', label:'Previous good response to a specific drug', note:'Re-use what worked' },
    { group:'Severity / pattern', id:'poor_appetite', label:'Insomnia + poor appetite / weight loss' },
    { group:'Severity / pattern', id:'comorbid_anx', label:'Prominent comorbid anxiety' },
    { group:'Severity / pattern', id:'bipolar', label:'Bipolar / past manic episode', note:'Do NOT start antidepressant monotherapy' },

    // Comorbidities
    { group:'Comorbidities', id:'cardiac', label:'Cardiac disease / recent MI' },
    { group:'Comorbidities', id:'longqt', label:'Long QT / QTc-prolonging risk' },
    { group:'Comorbidities', id:'pain',   label:'Chronic / neuropathic pain' },
    { group:'Comorbidities', id:'epilepsy', label:'Epilepsy / low seizure threshold' },
    { group:'Comorbidities', id:'hepatic', label:'Significant hepatic impairment' },
    { group:'Comorbidities', id:'glaucoma', label:'Narrow-angle glaucoma / urinary retention' },

    // Bloods / bleeding
    { group:'Bloods / bleeding', id:'na_low', label:'Na⁺ <130 / SIADH risk' },
    { group:'Bloods / bleeding', id:'gibleed', label:'GI bleed / peptic ulcer history' },

    // Current medications
    { group:'Current medications', id:'nsaid_anticoag', label:'NSAID / anticoagulant / antiplatelet', note:'↑ GI bleed on SSRI — co-prescribe PPI' },
    { group:'Current medications', id:'serotonergic', label:'Triptan / tramadol / other serotonergic' },
    { group:'Current medications', id:'maoi', label:'MAOI (current or recent)' },
    { group:'Current medications', id:'tamoxifen', label:'Tamoxifen', note:'Avoid strong CYP2D6 inhibitors' },

    // Preference / context
    { group:'Preference / context', id:'avoid_sexual', label:'Wants to avoid sexual dysfunction' },
    { group:'Preference / context', id:'avoid_weight', label:'Wants to avoid weight gain / sedation' },
    { group:'Preference / context', id:'overdose_risk', label:'High overdose / self-harm risk', note:'Avoid TCAs — toxic in OD' },
  ],

  flags: (f) => {
    const out = [];
    if (f.bipolar) out.push({ tone:'red', text:'Bipolar — antidepressant monotherapy can trigger mania; discuss with specialist / cover with mood stabiliser' });
    if (f.maoi) out.push({ tone:'red', text:'MAOI — 2-week washout before/after; risk of serotonin syndrome + hypertensive crisis' });
    if (f.under18) out.push({ tone:'amber', text:'Under 18 — fluoxetine is the only first-line option, initiate via CAMHS' });
    if (f.young) out.push({ tone:'amber', text:'18–25 / under 30 — review within 1 week; ↑ early suicidality risk' });
    if (f.serotonergic) out.push({ tone:'amber', text:'Serotonergic co-medication — counsel on serotonin syndrome' });
    if (f.preg) out.push({ tone:'amber', text:'Pregnancy — weigh risks with patient; sertraline best evidence; involve perinatal team' });
    return out;
  },

  drugs: [
    // -------- SERTRALINE --------
    {
      id:'sertraline',
      name:'Sertraline (SSRI)',
      examples:'50 mg OD → 200 mg (start 25–50 mg)',
      step:'First-line',
      source:'NICE NG222 · CKS Depression',
      sideEffects:'Nausea, GI upset, headache, sexual dysfunction, transient ↑ anxiety, hyponatraemia',
      monitor:'Review at 1–2 weeks (1 week if <30 or higher risk); Na⁺ if symptoms',
      counsel:'"It can take 2–4 weeks to work, and you may feel a little more anxious or queasy in the first week — that settles. Don\'t stop suddenly; we\'ll taper when the time comes."',
      detail:{
        'Dose': 'Sertraline 50 mg OD (25 mg if anxious start); titrate to max 200 mg',
        'Interactions': 'Lowest cardiac-interaction SSRI; still ↑ bleeding with NSAID/anticoagulant',
        'Key teaching': 'NICE-preferred SSRI in cardiac disease; broadly first choice for new moderate depression.'
      },
      evaluate(f){
        if (f.maoi) return { tier:'avoid', reasons:[{kind:'bad', text:'Recent MAOI — risk of serotonin syndrome; needs washout'}] };
        if (f.bipolar) return { tier:'avoid', reasons:[{kind:'bad', text:'Bipolar — no antidepressant monotherapy'}] };
        const r = [];
        if (f.cardiac) r.push({kind:'good', text:'Cardiac disease / post-MI — sertraline is the preferred SSRI'});
        if (f.comorbid_anx) r.push({kind:'good', text:'Comorbid anxiety — SSRIs first-line for both'});
        if (f.prior_response) r.push({kind:'good', text:'If this is the drug that worked before — re-use it'});
        if (f.gibleed || f.nsaid_anticoag) r.push({kind:'bad', text:'Bleeding risk — co-prescribe PPI; counsel on GI bleeding'});
        if (f.severity === 'mild') r.push({kind:'bad', text:'Mild — try guided self-help / exercise / IAPT before drugs'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Sensible default first-line SSRI for moderate depression'}] };
      }
    },

    // -------- CITALOPRAM / ESCITALOPRAM --------
    {
      id:'citalopram',
      name:'Citalopram / Escitalopram (SSRI)',
      examples:'Citalopram 20 mg OD (max 40; 20 if elderly)',
      step:'First-line',
      source:'NICE NG222 · MHRA QTc warning',
      sideEffects:'As SSRIs; dose-dependent QTc prolongation',
      monitor:'Review 1–2 weeks; ECG if cardiac risk / polypharmacy',
      counsel:'"A well-tolerated daily tablet. There\'s a small effect on heart rhythm at higher doses, so we keep the dose sensible and check if needed."',
      detail:{
        'Dose': 'Citalopram 20 mg OD (max 40; max 20 if >65 or hepatic). Escitalopram 10 mg → 20 mg',
        'Interactions': 'Additive QTc with other QT-prolonging drugs (antipsychotics, methadone, ondansetron)',
        'Key teaching': 'MHRA: dose caps for QTc. Avoid if congenital long QT.'
      },
      evaluate(f){
        if (f.maoi) return { tier:'avoid', reasons:[{kind:'bad', text:'Recent MAOI — washout required'}] };
        if (f.longqt) return { tier:'avoid', reasons:[{kind:'bad', text:'Long QT / QTc-prolonging burden — citalopram contraindicated'}] };
        if (f.bipolar) return { tier:'avoid', reasons:[{kind:'bad', text:'Bipolar — no antidepressant monotherapy'}] };
        const r = [];
        if (f.cardiac) r.push({kind:'bad', text:'Cardiac disease — prefer sertraline (QTc concern)'});
        if (f.elderly) r.push({kind:'bad', text:'Elderly — cap at 20 mg; hyponatraemia risk'});
        if (f.comorbid_anx) r.push({kind:'good', text:'Comorbid anxiety — effective SSRI option'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Effective alternative SSRI where QTc is not a concern'}] };
      }
    },

    // -------- FLUOXETINE --------
    {
      id:'fluoxetine',
      name:'Fluoxetine (SSRI)',
      examples:'20 mg OD → 60 mg',
      step:'First-line (CYP / specific)',
      source:'NICE NG222 · NICE NG134 (CYP)',
      sideEffects:'As SSRIs; long half-life → less discontinuation, more activating',
      monitor:'Review 1–2 weeks; CYP via CAMHS',
      counsel:'"Long-acting, so missing a dose matters less and stopping is smoother. It can be a bit activating early on."',
      detail:{
        'Dose': 'Fluoxetine 20 mg OD (max 60). CYP: 10 mg start',
        'Interactions': 'Strong CYP2D6 inhibitor — avoid with tamoxifen; long washout before MAOI (5 weeks)',
        'Key teaching': 'Only antidepressant first-line in under-18s (initiate via CAMHS). Good if adherence erratic.'
      },
      evaluate(f){
        if (f.maoi) return { tier:'avoid', reasons:[{kind:'bad', text:'MAOI — 5-week washout needed (long half-life)'}] };
        if (f.bipolar) return { tier:'avoid', reasons:[{kind:'bad', text:'Bipolar — no antidepressant monotherapy'}] };
        if (f.tamoxifen) return { tier:'avoid', reasons:[{kind:'bad', text:'Tamoxifen — strong CYP2D6 inhibition reduces efficacy'}] };
        const r = [];
        if (f.under18) { r.push({kind:'good', text:'Under 18 — fluoxetine is the only first-line option (CAMHS)'}); return { tier:'preferred', reasons:r }; }
        if (f.poor_appetite) r.push({kind:'bad', text:'Poor appetite / weight loss — activating SSRI may worsen; consider mirtazapine'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Good where adherence is erratic (long half-life)'}] };
      }
    },

    // -------- MIRTAZAPINE --------
    {
      id:'mirtazapine',
      name:'Mirtazapine',
      examples:'15 mg nocte → 45 mg',
      step:'Alternative / 2nd-line',
      source:'NICE NG222 · BNF',
      sideEffects:'Sedation (worse at low dose), weight gain, ↑ appetite, rare neutropenia',
      monitor:'Weight; FBC if signs of infection',
      counsel:'"Taken at night — it helps sleep and appetite, and many people gain a little weight. Tell us if you get a sore throat or fever."',
      detail:{
        'Dose': 'Mirtazapine 15 mg nocte → 45 mg (sedation paradoxically less at higher dose)',
        'Interactions': 'Additive sedation; serotonin syndrome with other serotonergics',
        'Key teaching': 'Useful when insomnia + poor appetite dominate, or sexual dysfunction must be avoided.'
      },
      evaluate(f){
        if (f.bipolar) return { tier:'avoid', reasons:[{kind:'bad', text:'Bipolar — no antidepressant monotherapy'}] };
        const r = [];
        if (f.poor_appetite) r.push({kind:'good', text:'Insomnia + poor appetite/weight loss — mirtazapine targets both'});
        if (f.avoid_sexual) r.push({kind:'good', text:'Lower rate of sexual dysfunction than SSRIs'});
        if (f.avoid_weight) r.push({kind:'bad', text:'Wants to avoid weight gain/sedation — mirtazapine is the wrong fit'});
        const preferred = f.poor_appetite || (f.avoid_sexual && !f.avoid_weight);
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Good alternative when sedation/appetite gain is desirable'}] };
      }
    },

    // -------- VENLAFAXINE --------
    {
      id:'venlafaxine',
      name:'Venlafaxine (SNRI)',
      examples:'75 mg OD → 375 mg (MR)',
      step:'2nd-line / severe',
      source:'NICE NG222 · BNF',
      sideEffects:'Nausea, sweating, ↑ BP (dose-related), marked discontinuation symptoms',
      monitor:'BP at baseline and on titration; taper slowly to stop',
      counsel:'"A stronger option if an SSRI hasn\'t worked. We\'ll keep an eye on your blood pressure, and it\'s important never to stop it abruptly."',
      detail:{
        'Dose': 'Venlafaxine MR 75 mg OD → 375 mg',
        'Interactions': 'Serotonergics, QTc at high dose; hepatotoxicity rare',
        'Key teaching': 'Reserve after SSRI failure / severe depression. Worst for discontinuation symptoms — taper carefully.'
      },
      evaluate(f){
        if (f.maoi) return { tier:'avoid', reasons:[{kind:'bad', text:'MAOI — washout required'}] };
        if (f.bipolar) return { tier:'avoid', reasons:[{kind:'bad', text:'Bipolar — no antidepressant monotherapy; SNRIs higher switch risk'}] };
        if (f.cardiac) return { tier:'avoid', reasons:[{kind:'bad', text:'Cardiac disease / uncontrolled HTN — venlafaxine raises BP'}] };
        const r = [];
        if (f.severity === 'sev') r.push({kind:'good', text:'Severe depression / SSRI non-response — reasonable next step'});
        if (f.pain) r.push({kind:'good', text:'Comorbid pain — SNRI dual action'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Second-line after SSRI; check BP'}] };
      }
    },

    // -------- DULOXETINE --------
    {
      id:'duloxetine',
      name:'Duloxetine (SNRI)',
      examples:'60 mg OD',
      step:'Alternative (pain)',
      source:'NICE NG222 · CKS Neuropathic pain',
      sideEffects:'Nausea, dry mouth, ↑ BP, hepatotoxicity',
      monitor:'BP; LFTs if symptoms',
      counsel:'"This treats both the low mood and the nerve pain, so it can do two jobs at once."',
      detail:{
        'Dose': 'Duloxetine 60 mg OD',
        'Key teaching': 'Good when depression coexists with neuropathic pain / diabetic neuropathy. Avoid in significant hepatic impairment.'
      },
      evaluate(f){
        if (f.maoi) return { tier:'avoid', reasons:[{kind:'bad', text:'MAOI — washout required'}] };
        if (f.bipolar) return { tier:'avoid', reasons:[{kind:'bad', text:'Bipolar — no antidepressant monotherapy'}] };
        if (f.hepatic) return { tier:'avoid', reasons:[{kind:'bad', text:'Hepatic impairment — contraindicated'}] };
        const r = [];
        if (f.pain) { r.push({kind:'good', text:'Comorbid neuropathic pain + depression — dual target'}); return { tier:'preferred', reasons:r }; }
        if (f.cardiac) r.push({kind:'bad', text:'Cardiac disease — SNRI raises BP'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'SNRI alternative, particularly with pain'}] };
      }
    },

    // -------- TCA --------
    {
      id:'tca',
      name:'Tricyclic (e.g. amitriptyline)',
      examples:'Not first-line for depression in primary care',
      step:'Avoid (1st-line)',
      source:'NICE NG222 · BNF',
      sideEffects:'Anticholinergic, sedation, postural drop, cardiotoxic — lethal in overdose',
      monitor:'ECG; extreme caution in overdose risk',
      counsel:'"Older antidepressants like this are rarely first choice now — they can be dangerous in overdose and have more side effects."',
      detail:{
        'Key teaching': 'Not recommended first-line. Lofepramine least toxic if a TCA is used. Low-dose amitriptyline has a separate role in neuropathic pain, not as an antidepressant here.'
      },
      evaluate(f){
        if (f.overdose_risk) return { tier:'avoid', reasons:[{kind:'bad', text:'High overdose risk — TCAs are lethal in overdose'}] };
        if (f.cardiac || f.longqt) return { tier:'avoid', reasons:[{kind:'bad', text:'Cardiac disease / QTc — TCAs cardiotoxic'}] };
        if (f.elderly || f.glaucoma) return { tier:'avoid', reasons:[{kind:'bad', text:'Anticholinergic load — falls, retention, glaucoma, confusion'}] };
        return { tier:'avoid', reasons:[{kind:'bad', text:'Not first-line for depression; reserve for specialist / resistant cases'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG222 — Depression in adults: treatment and management', url:'https://www.nice.org.uk/guidance/ng222' },
    { label:'NICE CKS — Depression', url:'https://cks.nice.org.uk/topics/depression/' },
    { label:'NICE NG134 — Depression in children and young people', url:'https://www.nice.org.uk/guidance/ng134' },
    { label:'BNF — Antidepressant drugs', url:'https://bnf.nice.org.uk/treatment-summaries/antidepressant-drugs/' },
  ],
});
