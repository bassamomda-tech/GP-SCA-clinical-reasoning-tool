/* ============================================
   Medication Chooser — Erectile dysfunction
   NICE CKS Erectile dysfunction · BNF
   ============================================ */
MedChooser.register('erectile-dysfunction', {
  title: 'Erectile dysfunction — treatment selection',
  subtitle: 'PDE5-inhibitor-led therapy after cardiovascular and cause assessment (NICE CKS). Tick the patient profile; cards re-tier live.',
  guideline: 'NICE CKS · BNF',

  factors: [
    // Cause / context
    { group:'Cause & context', id:'diabetes', label:'Diabetes / vascular risk' },
    { group:'Cause & context', id:'psychogenic', label:'Likely psychogenic (young, sudden, situational)' },
    { group:'Cause & context', id:'hypogonadism', label:'Low libido / symptoms of low testosterone', note:'Check 9am testosterone' },
    { group:'Cause & context', id:'failed_pde5', label:'Failed adequate PDE5 inhibitor trial', note:'×4 at max dose, correctly used' },

    // Cardiovascular / safety
    { group:'Cardiovascular & safety', id:'nitrate', label:'Taking nitrates / nicorandil', note:'PDE5 absolutely contraindicated' },
    { group:'Cardiovascular & safety', id:'unstable_cv', label:'Unstable angina / recent MI or stroke', note:'Defer; assess CV fitness' },
    { group:'Cardiovascular & safety', id:'alpha_blocker', label:'On an α-blocker', note:'Hypotension risk — separate dosing' },
    { group:'Cardiovascular & safety', id:'priapism_risk', label:'Sickle cell / priapism risk' },

    // Anatomy
    { group:'Anatomy', id:'peyronie', label:'Peyronie\u2019s / anatomical deformity', note:'Refer' },

    // Preference
    { group:'Preference', id:'spontaneity', label:'Wants spontaneity (frequent sex)', note:'Daily tadalafil' },
    { group:'Preference', id:'on_demand', label:'Infrequent / planned activity', note:'On-demand dosing' },
    { group:'Preference', id:'luts', label:'Also has bothersome LUTS / BPH', note:'Daily tadalafil dual benefit' },
  ],

  flags: (f) => {
    const out = [];
    if (f.nitrate) out.push({ tone:'red', text:'Nitrates / nicorandil + PDE5 inhibitor = profound hypotension — ABSOLUTE contraindication' });
    if (f.unstable_cv) out.push({ tone:'red', text:'Recent MI/stroke or unstable angina — assess cardiovascular fitness for sexual activity before prescribing; defer/cardiology if high-risk' });
    if (f.hypogonadism) out.push({ tone:'amber', text:'Check 9am testosterone (×2) + LH/FSH/prolactin — treat confirmed hypogonadism; PDE5 inhibitors work less well if testosterone low' });
    out.push({ tone:'amber', text:'ED is a marker of cardiovascular risk — assess QRISK, BP, lipids, HbA1c in every man' });
    return out;
  },

  drugs: [
    // -------- PDE5 ON DEMAND --------
    {
      id:'pde5_demand',
      name:'PDE5 inhibitor — on demand',
      examples:'Sildenafil 50 mg · Tadalafil 10–20 mg PRN',
      step:'1st-line',
      source:'NICE CKS · BNF',
      sideEffects:'Headache, flushing, dyspepsia, nasal congestion, visual disturbance (sildenafil)',
      monitor:'Trial ×4 at adequate dose, correctly used, before declaring failure',
      counsel:'"Take one tablet before sex — sildenafil works in about an hour (avoid a heavy/fatty meal); you still need arousal for it to work. Try it properly a few times before we judge whether it suits."',
      detail:{
        'Dose': 'Sildenafil 50 mg (range 25–100) ~1 h before; tadalafil 10–20 mg with a longer window (up to 36 h)',
        'Interactions': 'Nitrates/nicorandil (absolute CI), α-blockers (hypotension — separate dosing), strong CYP3A4 inhibitors (reduce dose)',
        'Key teaching': 'First-line for almost all causes. Counsel on correct use (timing, arousal, food/alcohol) — most "failures" are inadequate trials.'
      },
      evaluate(f){
        if (f.nitrate) return { tier:'avoid', reasons:[{kind:'bad', text:'On nitrates/nicorandil — absolute contraindication'}] };
        if (f.priapism_risk) return { tier:'acceptable', reasons:[{kind:'bad', text:'Priapism risk (sickle cell) — use with caution; counsel on 4-hour rule'}] };
        const r = [];
        if (f.on_demand) r.push({kind:'good', text:'Infrequent/planned activity — on-demand dosing suits'});
        if (f.diabetes) r.push({kind:'good', text:'Diabetic/vascular ED — PDE5 inhibitor still first-line'});
        if (f.alpha_blocker) r.push({kind:'neutral', text:'On α-blocker — start low, separate dosing to avoid hypotension'});
        if (f.unstable_cv) r.push({kind:'bad', text:'Recent CV event — assess fitness for sexual activity first'});
        return { tier: f.nitrate ? 'avoid' : 'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line therapy for ED'}] };
      }
    },

    // -------- PDE5 DAILY --------
    {
      id:'pde5_daily',
      name:'PDE5 inhibitor — daily',
      examples:'Tadalafil 2.5–5 mg OD',
      step:'1st-line (spontaneity / LUTS)',
      source:'NICE CKS · BNF',
      sideEffects:'As PDE5 class; back/muscle ache with tadalafil',
      monitor:'Same contraindications as on-demand',
      counsel:'"A low daily dose means you don\'t have to plan ahead — and if you also have urinary symptoms from the prostate, it can help both at once."',
      detail:{
        'Dose': 'Tadalafil 2.5–5 mg OD',
        'Interactions': 'Same as on-demand (nitrates absolute CI, α-blockers, CYP3A4)',
        'Key teaching': 'Daily tadalafil suits men wanting spontaneity or with coexisting LUTS/BPH (dual licensed benefit).'
      },
      evaluate(f){
        if (f.nitrate) return { tier:'avoid', reasons:[{kind:'bad', text:'On nitrates/nicorandil — absolute contraindication'}] };
        const r = [];
        if (f.spontaneity) r.push({kind:'good', text:'Wants spontaneity — daily dosing avoids timing'});
        if (f.luts) r.push({kind:'good', text:'Coexisting LUTS/BPH — daily tadalafil treats both'});
        const preferred = f.spontaneity || f.luts;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Daily option for frequent activity / LUTS'}] };
      }
    },

    // -------- TESTOSTERONE --------
    {
      id:'testosterone',
      name:'Testosterone replacement',
      examples:'Testosterone gel / injection',
      step:'If confirmed hypogonadism',
      source:'NICE CKS · BSSM',
      sideEffects:'Polycythaemia, prostate effects, acne, fluid retention',
      monitor:'Confirm low testosterone ×2 (9am); baseline + monitoring of Hct, PSA, testosterone',
      counsel:'"If blood tests confirm a genuinely low testosterone, replacing it can restore desire and help the tablets work better. We\'ll monitor your blood count and prostate."',
      detail:{
        'Dose': 'Per preparation; recheck levels and Hct/PSA',
        'Key teaching': 'Only for biochemically confirmed hypogonadism. Improves libido and PDE5-inhibitor response; not for men with normal testosterone.'
      },
      evaluate(f){
        if (!f.hypogonadism) return { tier:'avoid', reasons:[{kind:'bad', text:'Only if hypogonadism biochemically confirmed — not for normal testosterone'}] };
        return { tier:'preferred', reasons:[{kind:'good', text:'Confirmed low testosterone — replacement restores libido and PDE5 response'}] };
      }
    },

    // -------- ALPROSTADIL --------
    {
      id:'alprostadil',
      name:'Alprostadil (2nd-line)',
      examples:'Intracavernosal injection · MUSE intraurethral · topical cream',
      step:'2nd-line (PDE5 failed/unsuitable)',
      source:'NICE CKS · BNF',
      sideEffects:'Penile pain, priapism, injection-site effects',
      monitor:'First dose titration with supervision; counsel 4-hour rule',
      counsel:'"If tablets don\'t work or aren\'t suitable, there\'s a medicine given as a tiny injection or pellet into the penis — very effective. We\'ll teach the first dose and what to do if an erection lasts over 4 hours."',
      detail:{
        'Dose': 'Intracavernosal/intraurethral alprostadil, dose-titrated',
        'Key teaching': 'Second-line where PDE5 inhibitors fail or are contraindicated (e.g. nitrate users). First dose supervised; priapism counselling essential.'
      },
      evaluate(f){
        const r = [];
        if (f.failed_pde5) r.push({kind:'good', text:'Failed adequate PDE5 trial — appropriate second-line'});
        if (f.nitrate) r.push({kind:'good', text:'Nitrate user (PDE5 contraindicated) — alprostadil is an option'});
        if (f.priapism_risk) r.push({kind:'bad', text:'Priapism risk — use with particular caution'});
        const preferred = f.failed_pde5 || f.nitrate;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Second-line where PDE5 inhibitors unsuitable'}] };
      }
    },

    // -------- VACUUM / REFERRAL --------
    {
      id:'device_referral',
      name:'Vacuum device / specialist referral',
      examples:'Vacuum erection device · urology / andrology',
      step:'Non-drug / refer',
      source:'NICE CKS',
      sideEffects:'Device — bruising, cool/numb erection',
      monitor:'Per device; refer anatomical causes',
      counsel:'"A vacuum pump is a drug-free option that works well for many. For anatomical problems or when treatments fail, the urology team can offer further options including implants."',
      detail:{
        'Key teaching': 'Vacuum devices suit men avoiding drugs or with contraindications. Refer Peyronie\'s/anatomical causes, treatment failure, young men with primary ED, or endocrine causes needing specialist input.'
      },
      evaluate(f){
        const r = [];
        if (f.peyronie) r.push({kind:'good', text:'Peyronie\'s / anatomical deformity — refer urology'});
        if (f.failed_pde5) r.push({kind:'good', text:'Drug treatments failed — device or specialist referral'});
        if (f.psychogenic) r.push({kind:'neutral', text:'Psychogenic/young — consider psychosexual referral alongside'});
        return { tier: (f.peyronie) ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Non-drug option / referral pathway'}] };
      }
    },
  ],

  sources: [
    { label:'NICE CKS — Erectile dysfunction', url:'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
    { label:'BSSM — Guidelines on management of ED', url:'https://www.bssm.org.uk/' },
    { label:'BNF — Drugs for erectile dysfunction', url:'https://bnf.nice.org.uk/treatment-summaries/erectile-dysfunction/' },
  ],
});
