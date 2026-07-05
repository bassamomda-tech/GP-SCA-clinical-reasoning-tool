/* ============================================
   Medication Chooser — Menopause / HRT
   NICE NG23 · CKS Menopause · BNF
   ============================================ */
MedChooser.register('menopause', {
  title: 'Menopause — HRT & symptom management',
  subtitle: 'Choice turns on three questions: uterus or not (need a progestogen?), oral or transdermal oestrogen, and sequential vs continuous. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG23 · CKS Menopause · BNF',

  factors: [
    // Anatomy / stage
    { group:'Anatomy / stage', id:'uterus', label:'Uterus present', note:'Needs a progestogen (endometrial protection)' },
    { group:'Anatomy / stage', id:'hysterectomy', label:'Hysterectomy (no uterus)', note:'Oestrogen-only HRT' },
    { group:'Anatomy / stage', id:'perimeno', label:'Perimenopausal / still having periods' },
    { group:'Anatomy / stage', id:'postmeno', label:'Postmenopausal >12 months' },
    { group:'Anatomy / stage', id:'poi', label:'Premature ovarian insufficiency (<40)', note:'Replace to ≥51; do not withhold' },

    // Symptoms
    { group:'Symptoms', id:'vasomotor', label:'Vasomotor (flushes/sweats) dominant' },
    { group:'Symptoms', id:'urogenital', label:'Urogenital / vaginal symptoms only' },
    { group:'Symptoms', id:'libido', label:'Persistent low libido on HRT' },
    { group:'Symptoms', id:'contraception', label:'Also needs contraception' },

    // Risk factors
    { group:'Risk factors', id:'vte', label:'VTE history / high VTE risk' },
    { group:'Risk factors', id:'bmi', label:'High BMI / obesity' },
    { group:'Risk factors', id:'migraine', label:'Migraine (esp. with aura)' },
    { group:'Risk factors', id:'htn', label:'Hypertension' },
    { group:'Risk factors', id:'malabsorption', label:'Malabsorption / on enzyme inducers' },
    { group:'Risk factors', id:'gallbladder', label:'Gallbladder disease' },

    // Contraindications
    { group:'Contraindications', id:'breast_ca', label:'Current / past breast cancer' },
    { group:'Contraindications', id:'hormone_ca', label:'Other oestrogen-dependent cancer' },
    { group:'Contraindications', id:'liver', label:'Active liver disease' },
    { group:'Contraindications', id:'undiagnosed_bleed', label:'Undiagnosed vaginal bleeding' },
    { group:'Contraindications', id:'active_vte', label:'Active VTE / arterial event' },
  ],

  flags: (f) => {
    const out = [];
    if (f.breast_ca || f.hormone_ca) out.push({ tone:'red', text:'Hormone-dependent cancer — systemic HRT contraindicated; consider non-hormonal options (vaginal oestrogen needs oncology input)' });
    if (f.active_vte) out.push({ tone:'red', text:'Active VTE/arterial event — defer HRT; if needed later use transdermal' });
    if (f.undiagnosed_bleed) out.push({ tone:'red', text:'Undiagnosed PV bleeding — investigate before starting HRT' });
    if (f.uterus) out.push({ tone:'amber', text:'Uterus present — oestrogen MUST be opposed by a progestogen to protect the endometrium' });
    if (f.poi) out.push({ tone:'amber', text:'POI — offer HRT (or COC) until at least the natural age of menopause; benefits outweigh risks' });
    return out;
  },

  drugs: [
    // -------- Transdermal oestrogen --------
    {
      id:'transdermal',
      name:'Transdermal oestrogen (patch / gel / spray)',
      examples:'Estradiol patch · gel · spray',
      step:'Oestrogen · preferred route',
      source:'NICE NG23 §1.4 · CKS Menopause',
      sideEffects:'Skin irritation; breast tenderness; minimal VTE effect',
      monitor:'Symptom response, BP; review at 3 months then annually',
      counsel:'"Through-the-skin oestrogen avoids the small clot risk of tablets — better if you have migraines, a higher BMI, or any clot history."',
      detail:{ 'Key teaching':'No increased VTE risk (unlike oral). Preferred with VTE risk, migraine, BMI ≥30, hypertension, malabsorption, gallbladder disease.' },
      evaluate(f){
        if (f.breast_ca || f.hormone_ca || f.active_vte) return { tier:'avoid', reasons:[{kind:'bad', text:'Systemic oestrogen contraindicated in this profile'}] };
        const r = [];
        if (f.vte) r.push({kind:'good', text:'VTE risk — transdermal carries no excess clot risk'});
        if (f.migraine) r.push({kind:'good', text:'Migraine — transdermal preferred over oral'});
        if (f.bmi) r.push({kind:'good', text:'High BMI — transdermal route preferred'});
        if (f.htn) r.push({kind:'good', text:'Hypertension — transdermal has least BP/clot impact'});
        if (f.malabsorption) r.push({kind:'good', text:'Malabsorption / enzyme inducers — bypasses gut/first-pass'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Effective oestrogen with the safest risk profile for most'}] };
      }
    },
    // -------- Oral oestrogen --------
    {
      id:'oral_oest',
      name:'Oral oestrogen',
      examples:'Estradiol tablet (often combined preparation)',
      step:'Oestrogen · alternative',
      source:'NICE NG23 · CKS',
      sideEffects:'Small ↑ VTE risk; nausea; breast tenderness',
      monitor:'BP, symptom response',
      counsel:'"A simple daily tablet — fine if you don\'t have clot risk factors and prefer not to use a patch or gel."',
      detail:{ 'Key teaching':'Reasonable when no VTE/migraine/BMI concerns and the patient prefers a tablet. Combined oral preparations simplify the progestogen.' },
      evaluate(f){
        if (f.breast_ca || f.hormone_ca || f.active_vte) return { tier:'avoid', reasons:[{kind:'bad', text:'Systemic oestrogen contraindicated'}] };
        const r = [];
        if (f.vte || f.migraine || f.bmi || f.malabsorption) r.push({kind:'bad', text:'VTE/migraine/high-BMI/malabsorption — prefer transdermal'});
        return { tier: r.length ? 'acceptable' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Acceptable when no clot/migraine risk factors'}] };
      }
    },
    // -------- Micronised progesterone --------
    {
      id:'mp',
      name:'Micronised progesterone (Utrogestan)',
      examples:'Sequential or continuous, with oestrogen',
      step:'Progestogen · preferred',
      source:'NICE NG23 · CKS',
      sideEffects:'Drowsiness (take at night), bloating; lower breast/VTE risk than synthetics',
      monitor:'Bleeding pattern; endometrial protection',
      counsel:'"This is the body-identical progesterone that protects your womb lining — taken at night as it can be a little sedating."',
      detail:{ 'Key teaching':'Needed if uterus present. Sequential (12 days/cycle) if perimenopausal/still bleeding; continuous (daily) if postmenopausal >12 months. Lower breast cancer/VTE signal than synthetic progestogens.' },
      evaluate(f){
        if (!f.uterus && !f.hysterectomy) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Only required if uterus present'}] };
        if (f.hysterectomy) return { tier:'avoid', reasons:[{kind:'bad', text:'No uterus — progestogen not needed (oestrogen-only)'}] };
        const r = [];
        if (f.uterus) r.push({kind:'good', text:'Uterus present — endometrial protection required'});
        if (f.perimeno) r.push({kind:'neutral', text:'Perimenopausal — use sequential (cyclical) dosing'});
        if (f.postmeno) r.push({kind:'neutral', text:'Postmenopausal >12 months — use continuous (no bleed)'});
        return { tier:'preferred', reasons: r };
      }
    },
    // -------- LNG-IUS --------
    {
      id:'ius',
      name:'LNG-IUS (Mirena) as progestogen',
      examples:'Levonorgestrel IUS + oestrogen',
      step:'Progestogen + contraception',
      source:'NICE NG23 · FSRH',
      sideEffects:'Irregular bleeding initially; insertion discomfort',
      monitor:'Threads; licensed 5 years for HRT endometrial protection',
      counsel:'"The coil can double as the womb-lining protection for your HRT and gives contraception too — a neat two-in-one."',
      detail:{ 'Key teaching':'Provides the progestogen component AND contraception. Ideal when contraception still needed in perimenopause.' },
      evaluate(f){
        if (f.hysterectomy) return { tier:'avoid', reasons:[{kind:'bad', text:'No uterus — not required'}] };
        const r = [];
        if (f.contraception) { r.push({kind:'good', text:'Also needs contraception — IUS covers both roles'}); return { tier:'preferred', reasons:r }; }
        if (f.uterus) r.push({kind:'good', text:'Endometrial protection with the convenience of a coil'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Progestogen option, especially if contraception wanted'}] };
      }
    },
    // -------- Vaginal oestrogen --------
    {
      id:'vaginal',
      name:'Vaginal (local) oestrogen',
      examples:'Estriol cream · estradiol pessary/ring',
      step:'Urogenital symptoms',
      source:'NICE NG23 §1.4.7',
      sideEffects:'Minimal systemic absorption; local irritation',
      monitor:'Can be used long-term; no progestogen needed',
      counsel:'"A local treatment for vaginal dryness and bladder symptoms — barely absorbed, so it\'s safe to use long-term, even alongside systemic HRT."',
      detail:{ 'Key teaching':'For urogenital atrophy. No systemic risks; no progestogen required. Can continue indefinitely. May be considered (with specialist input) even after breast cancer.' },
      evaluate(f){
        const r = [];
        if (f.urogenital) { r.push({kind:'good', text:'Urogenital symptoms — local oestrogen is first-line and very safe'}); return { tier:'preferred', reasons:r }; }
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Add for vaginal/bladder symptoms; can combine with systemic HRT'}] };
      }
    },
    // -------- Testosterone --------
    {
      id:'testosterone',
      name:'Testosterone (add-on)',
      examples:'Transdermal testosterone (off-label)',
      step:'Add-on (libido)',
      source:'NICE NG23 §1.4.9',
      sideEffects:'Acne, hirsutism; monitor levels',
      monitor:'Baseline + periodic testosterone levels',
      counsel:'"If your sex drive stays low despite HRT, a small amount of testosterone can help — we\'d monitor levels."',
      detail:{ 'Key teaching':'Consider for low sexual desire if HRT alone ineffective. Off-label; specialist/experienced clinician.' },
      evaluate(f){
        const r = [];
        if (f.libido) { r.push({kind:'good', text:'Persistent low libido despite HRT — testosterone add-on'}); return { tier:'acceptable', reasons:r }; }
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Only for low libido unresponsive to standard HRT'}] };
      }
    },
    // -------- Non-hormonal --------
    {
      id:'nonhormonal',
      name:'Non-hormonal (SSRI/SNRI, clonidine, CBT)',
      examples:'Venlafaxine / citalopram (off-label) · clonidine · CBT',
      step:'HRT-contraindicated',
      source:'NICE NG23 §1.4.18',
      sideEffects:'SSRI/SNRI class effects; clonidine — dry mouth, drowsiness',
      monitor:'Symptom response',
      counsel:'"If hormones aren\'t safe for you, there are tablets and talking therapies that can still take the edge off the flushes."',
      detail:{ 'Key teaching':'For vasomotor symptoms when HRT contraindicated (e.g. breast cancer) or declined. CBT also helps. Avoid SSRIs that inhibit CYP2D6 with tamoxifen.' },
      evaluate(f){
        const r = [];
        if (f.breast_ca || f.hormone_ca) { r.push({kind:'good', text:'HRT contraindicated — non-hormonal options for vasomotor symptoms'}); return { tier:'preferred', reasons:r }; }
        if (f.vasomotor) r.push({kind:'neutral', text:'Alternative if HRT declined'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Option when HRT contraindicated or declined'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG23 — Menopause: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng23' },
    { label:'NICE CKS — Menopause', url:'https://cks.nice.org.uk/topics/menopause/' },
    { label:'BNF — Sex hormones (HRT)', url:'https://bnf.nice.org.uk/treatment-summaries/sex-hormones/' },
  ],
});
