/* ============================================
   Medication Chooser — Erectile dysfunction
   BSSM 2018 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('erectile-dysfunction', {
  title: 'Erectile dysfunction — treatment selection',
  subtitle: 'PDE5-inhibitor-led therapy after cardiovascular and cause assessment (BSSM 2018).',
  guideline: 'BSSM 2018 · SPC',


  safety: [
    {"tone":"amber","label":"","text":"ED is a marker of cardiovascular risk — assess QRISK, BP, lipids, HbA1c in every man"},
    {"tone":"amber","label":"Low libido / symptoms of low testosterone","text":"Check 9am testosterone (×2) + LH/FSH/prolactin — treat confirmed hypogonadism; PDE5 inhibitors work less well if testosterone low"},
    {"tone":"red","label":"Taking nitrates / nicorandil","text":"Nitrates / nicorandil + PDE5 inhibitor = profound hypotension — ABSOLUTE contraindication"},
    {"tone":"red","label":"Unstable angina / recent MI or stroke","text":"Recent MI/stroke or unstable angina — assess cardiovascular fitness for sexual activity before prescribing; defer/cardiology if high-risk"}
  ],

  drugs: [
    // -------- PDE5 ON DEMAND --------
    {
      id:'pde5_demand',
      name:'PDE5 inhibitor — on demand',
      examples:'Sildenafil 50 mg · Tadalafil 10–20 mg PRN',
      step:'1st-line',
      source:'BSSM 2018 · SPC',
      sideEffects:'Headache, flushing, dyspepsia, nasal congestion, visual disturbance (sildenafil)',
      monitor:'Trial ×4 at adequate dose, correctly used, before declaring failure',
      counsel:'"Take one tablet before sex — sildenafil works in about an hour (avoid a heavy/fatty meal); you still need arousal for it to work. Try it properly a few times before we judge whether it suits."',
      detail:{
        'Dose': 'Sildenafil 50 mg (range 25–100) ~1 h before; tadalafil 10–20 mg with a longer window (up to 36 h)',
        'Interactions': 'Nitrates/nicorandil (absolute CI), α-blockers (hypotension — separate dosing), strong CYP3A4 inhibitors (reduce dose)',
        'Key teaching': 'First-line for almost all causes. Counsel on correct use (timing, arousal, food/alcohol) — most "failures" are inadequate trials.'
      },
      conditions: [
        {"kind":"avoid","label":"Taking nitrates / nicorandil","text":"On nitrates/nicorandil — absolute contraindication"},
        {"kind":"caution","label":"Unstable angina / recent MI or stroke","text":"Recent CV event — assess fitness for sexual activity first"},
        {"kind":"caution","label":"Sickle cell / priapism risk","text":"Priapism risk (sickle cell) — use with caution; counsel on 4-hour rule"},
        {"kind":"favoured","label":"Diabetes / vascular risk","text":"Diabetic/vascular ED — PDE5 inhibitor still first-line"},
        {"kind":"favoured","label":"Infrequent / planned activity","text":"Infrequent/planned activity — on-demand dosing suits"},
        {"kind":"note","label":"On an α-blocker","text":"On α-blocker — start low, separate dosing to avoid hypotension"}
      ]
    },

    // -------- PDE5 DAILY --------
    {
      id:'pde5_daily',
      name:'PDE5 inhibitor — daily',
      examples:'Tadalafil 5 mg OD',
      step:'1st-line (spontaneity / LUTS)',
      source:'BSSM 2018 · SPC',
      sideEffects:'As PDE5 class; back/muscle ache with tadalafil',
      monitor:'Same contraindications as on-demand',
      counsel:'"A low daily dose means you don\'t have to plan ahead — and if you also have urinary symptoms from the prostate, it can help both at once."',
      detail:{
        'Dose': 'Tadalafil 5 mg OD (2.5 mg if not tolerated, per SPC)',
        'Interactions': 'Same as on-demand (nitrates absolute CI, α-blockers, CYP3A4)',
        'Key teaching': 'Daily tadalafil suits men wanting spontaneity or with coexisting LUTS/BPH (dual licensed benefit).'
      },
      conditions: [
        {"kind":"avoid","label":"Taking nitrates / nicorandil","text":"On nitrates/nicorandil — absolute contraindication"},
        {"kind":"favoured","label":"Wants spontaneity (frequent sex)","text":"Wants spontaneity — daily dosing avoids timing"},
        {"kind":"favoured","label":"Also has bothersome LUTS / BPH","text":"Coexisting LUTS/BPH — daily tadalafil treats both"}
      ]
    },

    // -------- TESTOSTERONE --------
    {
      id:'testosterone',
      name:'Testosterone replacement',
      examples:'Testosterone gel / injection',
      step:'If confirmed hypogonadism',
      source:'BSSM 2018',
      sideEffects:'Polycythaemia, prostate effects, acne, fluid retention',
      monitor:'Confirm low testosterone ×2 (9am); baseline + monitoring of Hct, PSA, testosterone',
      counsel:'"If blood tests confirm a genuinely low testosterone, replacing it can restore desire and help the tablets work better. We\'ll monitor your blood count and prostate."',
      detail:{
        'Dose': 'Per preparation; recheck levels and Hct/PSA',
        'Key teaching': 'Only for biochemically confirmed hypogonadism. Improves libido and PDE5-inhibitor response; not for men with normal testosterone.'
      },
      conditions: [
        {"kind":"favoured","label":"Low libido / symptoms of low testosterone","text":"Confirmed low testosterone — replacement restores libido and PDE5 response"}
      ]
    },

    // -------- ALPROSTADIL --------
    {
      id:'alprostadil',
      name:'Alprostadil (2nd-line)',
      examples:'Intracavernosal injection · MUSE intraurethral · topical cream',
      step:'2nd-line (PDE5 failed/unsuitable)',
      source:'BSSM 2018 · SPC',
      sideEffects:'Penile pain, priapism, injection-site effects',
      monitor:'First dose titration with supervision; counsel 4-hour rule',
      counsel:'"If tablets don\'t work or aren\'t suitable, there\'s a medicine given as a tiny injection or pellet into the penis — very effective. We\'ll teach the first dose and what to do if an erection lasts over 4 hours."',
      detail:{
        'Dose': 'Intracavernosal/intraurethral alprostadil, dose-titrated',
        'Key teaching': 'Second-line where PDE5 inhibitors fail or are contraindicated (e.g. nitrate users). First dose supervised; priapism counselling essential.'
      },
      conditions: [
        {"kind":"caution","label":"Sickle cell / priapism risk","text":"Priapism risk — use with particular caution"},
        {"kind":"favoured","label":"Failed adequate PDE5 inhibitor trial","text":"Failed adequate PDE5 trial — appropriate second-line"},
        {"kind":"favoured","label":"Taking nitrates / nicorandil","text":"Nitrate user (PDE5 contraindicated) — alprostadil is an option"}
      ]
    },

    // -------- VACUUM / REFERRAL --------
    {
      id:'device_referral',
      name:'Vacuum device / specialist referral',
      examples:'Vacuum erection device · urology / andrology',
      step:'Non-drug / refer',
      source:'BSSM 2018',
      sideEffects:'Device — bruising, cool/numb erection',
      monitor:'Per device; refer anatomical causes',
      counsel:'"A vacuum pump is a drug-free option that works well for many. For anatomical problems or when treatments fail, the urology team can offer further options including implants."',
      detail:{
        'Key teaching': 'Vacuum devices suit men avoiding drugs or with contraindications. Refer Peyronie\'s/anatomical causes, treatment failure, young men with primary ED, or endocrine causes needing specialist input.'
      },
      conditions: [
        {"kind":"favoured","label":"Failed adequate PDE5 inhibitor trial","text":"Drug treatments failed — device or specialist referral"},
        {"kind":"favoured","label":"Peyronie’s / anatomical deformity","text":"Peyronie's / anatomical deformity — refer urology"},
        {"kind":"note","label":"Likely psychogenic (young, sudden, situational)","text":"Psychogenic/young — consider psychosexual referral alongside"}
      ]
    }
  ],

  sources: [
    
    { label:'BSSM — Guidelines on management of ED', url:'https://www.bssm.org.uk/' },
    { label:'BNF — Drugs for erectile dysfunction', url:'https://bnf.nice.org.uk/treatment-summaries/erectile-dysfunction/' }
  ],
});
