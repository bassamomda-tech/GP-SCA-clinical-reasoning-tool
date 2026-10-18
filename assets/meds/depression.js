/* ============================================
   Medication Chooser — Depression (adults)
   NICE NG222 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('depression', {
  title: 'Depression — antidepressant selection',
  subtitle: 'NICE NG222 treats all first-line antidepressants as broadly equal in efficacy — choice is driven by the patient profile, side-effect fit and safety.',
  guideline: 'NICE NG222 · SPC',


  safety: [
    {"tone":"amber","label":"Under 18 (CYP)","text":"Under 18 — fluoxetine is the only first-line option, initiate via CAMHS"},
    {"tone":"amber","label":"Age 18–25","text":"18–25 / under 30 — review within 1 week; ↑ early suicidality risk"},
    {"tone":"amber","label":"Pregnant","text":"Pregnancy — weigh risks with patient; sertraline best evidence; involve perinatal team"},
    {"tone":"red","label":"Bipolar / past manic episode","text":"Bipolar — antidepressant monotherapy can trigger mania; discuss with specialist / cover with mood stabiliser"},
    {"tone":"amber","label":"Triptan / tramadol / other serotonergic","text":"Serotonergic co-medication — counsel on serotonin syndrome"},
    {"tone":"red","label":"MAOI (current or recent)","text":"MAOI — 2-week washout before/after; risk of serotonin syndrome + hypertensive crisis"}
  ],

  drugs: [
    // -------- SERTRALINE --------
    {
      id:'sertraline',
      name:'Sertraline (SSRI)',
      examples:'50 mg OD → 200 mg (start 25–50 mg)',
      step:'First-line',
      source:'NICE NG222',
      sideEffects:'Nausea, GI upset, headache, sexual dysfunction, transient ↑ anxiety, hyponatraemia',
      monitor:'Review at 1–2 weeks (1 week if <30 or higher risk); Na⁺ if symptoms',
      counsel:'"It can take 2–4 weeks to work, and you may feel a little more anxious or queasy in the first week — that settles. Don\'t stop suddenly; we\'ll taper when the time comes."',
      detail:{
        'Dose': 'Sertraline 50 mg OD (25 mg if anxious start); titrate to max 200 mg',
        'Interactions': 'Lowest cardiac-interaction SSRI; still ↑ bleeding with NSAID/anticoagulant',
        'Key teaching': 'NICE CG91-preferred SSRI in cardiac disease; broadly first choice for new moderate depression.'
      },
      conditions: [
        {"kind":"avoid","label":"Bipolar / past manic episode","text":"Bipolar — no antidepressant monotherapy"},
        {"kind":"avoid","label":"MAOI (current or recent)","text":"Recent MAOI — risk of serotonin syndrome; needs washout"},
        {"kind":"caution","label":"Severity (PHQ-9): Mild / subthreshold (<10)","text":"Mild — try guided self-help / exercise / IAPT before drugs"},
        {"kind":"caution","label":"GI bleed / peptic ulcer history","text":"Bleeding risk — co-prescribe PPI; counsel on GI bleeding"},
        {"kind":"caution","label":"NSAID / anticoagulant / antiplatelet","text":"Bleeding risk — co-prescribe PPI; counsel on GI bleeding"},
        {"kind":"favoured","label":"Previous good response to a specific drug","text":"If this is the drug that worked before — re-use it"},
        {"kind":"favoured","label":"Prominent comorbid anxiety","text":"Comorbid anxiety — SSRIs first-line for both"},
        {"kind":"favoured","label":"Cardiac disease / recent MI","text":"Cardiac disease / post-MI — sertraline is the preferred SSRI"}
      ]
    },

    // -------- CITALOPRAM / ESCITALOPRAM --------
    {
      id:'citalopram',
      name:'Citalopram / Escitalopram (SSRI)',
      examples:'Citalopram 20 mg OD (max 40; 20 if elderly)',
      step:'First-line',
      source:'NICE NG222 · MHRA QTc warning',
      sideEffects:'As SSRIs; dose-dependent QTc prolongation',
      monitor:'Review 1–2 weeks; consider ECG in cardiac disease; correct low K+/Mg2+',
      counsel:'"A well-tolerated daily tablet. There\'s a small effect on heart rhythm at higher doses, so we keep the dose sensible and check if needed."',
      detail:{
        'Dose': 'Citalopram 20 mg OD (max 40; max 20 if >65 or hepatic). Escitalopram 10 mg → 20 mg',
        'Interactions': 'Contraindicated with other QT-prolonging drugs (e.g. some antipsychotics, methadone, ondansetron) — MHRA 2011',
        'Key teaching': 'MHRA: dose caps for QTc. Contraindicated in known QT prolongation or congenital long QT, and with other QT-prolonging drugs.'
      },
      conditions: [
        {"kind":"avoid","label":"Bipolar / past manic episode","text":"Bipolar — no antidepressant monotherapy"},
        {"kind":"avoid","label":"Long QT / QTc-prolonging risk","text":"Long QT / QTc-prolonging burden — citalopram contraindicated"},
        {"kind":"avoid","label":"MAOI (current or recent)","text":"Recent MAOI — washout required"},
        {"kind":"caution","label":"Elderly / frail","text":"Elderly — cap at 20 mg; hyponatraemia risk"},
        {"kind":"caution","label":"Cardiac disease / recent MI","text":"Cardiac disease — prefer sertraline (QTc concern)"},
        {"kind":"favoured","label":"Prominent comorbid anxiety","text":"Comorbid anxiety — effective SSRI option"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"Bipolar / past manic episode","text":"Bipolar — no antidepressant monotherapy"},
        {"kind":"avoid","label":"MAOI (current or recent)","text":"MAOI — 5-week washout needed (long half-life)"},
        {"kind":"avoid","label":"Tamoxifen","text":"Tamoxifen — strong CYP2D6 inhibition reduces efficacy"},
        {"kind":"caution","label":"Insomnia + poor appetite / weight loss","text":"Poor appetite / weight loss — activating SSRI may worsen; consider mirtazapine"},
        {"kind":"favoured","label":"Under 18 (CYP)","text":"Under 18 — fluoxetine is the only first-line option (CAMHS)"}
      ]
    },

    // -------- MIRTAZAPINE --------
    {
      id:'mirtazapine',
      name:'Mirtazapine',
      examples:'15 mg nocte → 45 mg',
      step:'Alternative / 2nd-line',
      source:'NICE NG222 · SPC',
      sideEffects:'Sedation (worse at low dose), weight gain, ↑ appetite, rare neutropenia',
      monitor:'Weight; FBC if signs of infection',
      counsel:'"Taken at night — it helps sleep and appetite, and many people gain a little weight. Tell us if you get a sore throat or fever."',
      detail:{
        'Dose': 'Mirtazapine 15 mg nocte → 45 mg (sedation paradoxically less at higher dose)',
        'Interactions': 'Additive sedation; serotonin syndrome with other serotonergics',
        'Key teaching': 'Useful when insomnia + poor appetite dominate, or sexual dysfunction must be avoided.'
      },
      conditions: [
        {"kind":"avoid","label":"Bipolar / past manic episode","text":"Bipolar — no antidepressant monotherapy"},
        {"kind":"caution","label":"Wants to avoid weight gain / sedation","text":"Wants to avoid weight gain/sedation — mirtazapine is the wrong fit"},
        {"kind":"favoured","label":"Insomnia + poor appetite / weight loss","text":"Insomnia + poor appetite/weight loss — mirtazapine targets both"},
        {"kind":"favoured","label":"Wants to avoid sexual dysfunction","text":"Lower rate of sexual dysfunction than SSRIs"}
      ]
    },

    // -------- VENLAFAXINE --------
    {
      id:'venlafaxine',
      name:'Venlafaxine (SNRI)',
      examples:'75 mg OD → 375 mg (MR)',
      step:'2nd-line / severe',
      source:'NICE NG222 · SPC',
      sideEffects:'Nausea, sweating, ↑ BP (dose-related), marked discontinuation symptoms',
      monitor:'BP at baseline and on titration; taper slowly to stop',
      counsel:'"A stronger option if an SSRI hasn\'t worked. We\'ll keep an eye on your blood pressure, and it\'s important never to stop it abruptly."',
      detail:{
        'Dose': 'Venlafaxine MR 75 mg OD → 375 mg',
        'Interactions': 'Serotonergics, QTc at high dose; hepatotoxicity rare',
        'Key teaching': 'Reserve after SSRI failure / severe depression. Worst for discontinuation symptoms — taper carefully.'
      },
      conditions: [
        {"kind":"avoid","label":"Bipolar / past manic episode","text":"Bipolar — no antidepressant monotherapy; SNRIs higher switch risk"},
        {"kind":"avoid","label":"Cardiac disease / recent MI","text":"Cardiac disease / uncontrolled HTN — venlafaxine raises BP"},
        {"kind":"avoid","label":"MAOI (current or recent)","text":"MAOI — washout required"},
        {"kind":"favoured","label":"Severity (PHQ-9): Severe (≥20)","text":"Severe depression / SSRI non-response — reasonable next step"},
        {"kind":"favoured","label":"Chronic / neuropathic pain","text":"Comorbid pain — SNRI dual action"}
      ]
    },

    // -------- DULOXETINE --------
    {
      id:'duloxetine',
      name:'Duloxetine (SNRI)',
      examples:'60 mg OD',
      step:'Alternative (pain)',
      source:'NICE NG222',
      sideEffects:'Nausea, dry mouth, ↑ BP, hepatotoxicity',
      monitor:'BP; LFTs if symptoms',
      counsel:'"This treats both the low mood and the nerve pain, so it can do two jobs at once."',
      detail:{
        'Dose': 'Duloxetine 60 mg OD',
        'Key teaching': 'Good when depression coexists with neuropathic pain / diabetic neuropathy. Avoid in significant hepatic impairment.'
      },
      conditions: [
        {"kind":"avoid","label":"Bipolar / past manic episode","text":"Bipolar — no antidepressant monotherapy"},
        {"kind":"avoid","label":"Significant hepatic impairment","text":"Hepatic impairment — contraindicated"},
        {"kind":"avoid","label":"MAOI (current or recent)","text":"MAOI — washout required"},
        {"kind":"caution","label":"Cardiac disease / recent MI","text":"Cardiac disease — SNRI raises BP"},
        {"kind":"favoured","label":"Chronic / neuropathic pain","text":"Comorbid neuropathic pain + depression — dual target"}
      ]
    },

    // -------- TCA --------
    {
      id:'tca',
      name:'Tricyclic (e.g. amitriptyline)',
      examples:'Not first-line for depression in primary care',
      step:'Avoid (1st-line)',
      source:'NICE NG222 · SPC',
      sideEffects:'Anticholinergic, sedation, postural drop, cardiotoxic — lethal in overdose',
      monitor:'ECG; extreme caution in overdose risk',
      counsel:'"Older antidepressants like this are rarely first choice now — they can be dangerous in overdose and have more side effects."',
      detail:{
        'Key teaching': 'Not recommended first-line. Lofepramine least toxic if a TCA is used. Low-dose amitriptyline has a separate role in neuropathic pain, not as an antidepressant here.'
      },
      conditions: [
        {"kind":"avoid","label":"Elderly / frail","text":"Anticholinergic load — falls, retention, glaucoma, confusion"},
        {"kind":"avoid","label":"Cardiac disease / recent MI","text":"Cardiac disease / QTc — TCAs cardiotoxic"},
        {"kind":"avoid","label":"Long QT / QTc-prolonging risk","text":"Cardiac disease / QTc — TCAs cardiotoxic"},
        {"kind":"avoid","label":"Narrow-angle glaucoma / urinary retention","text":"Anticholinergic load — falls, retention, glaucoma, confusion"},
        {"kind":"avoid","label":"High overdose / self-harm risk","text":"High overdose risk — TCAs are lethal in overdose"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG222 — Depression in adults: treatment and management', url:'https://www.nice.org.uk/guidance/ng222' },
    { label:'NICE NG222 — depression in adults', url:'https://www.nice.org.uk/guidance/ng222' },
    { label:'NICE NG134 — Depression in children and young people', url:'https://www.nice.org.uk/guidance/ng134' },
    { label:'BNF — Antidepressant drugs', url:'https://bnf.nice.org.uk/treatment-summaries/antidepressant-drugs/' }
  ],
});
