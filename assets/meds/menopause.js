/* ============================================
   Medication Chooser — Menopause / HRT
   NICE NG23 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('menopause', {
  title: 'Menopause — HRT & symptom management',
  subtitle: 'Choice turns on three questions: uterus or not (need a progestogen?), oral or transdermal oestrogen, and sequential vs continuous.',
  guideline: 'NICE NG23 · SPC',


  safety: [
    {"tone":"amber","label":"Uterus present","text":"Uterus present — oestrogen MUST be opposed by a progestogen to protect the endometrium"},
    {"tone":"amber","label":"Premature ovarian insufficiency (<40)","text":"POI — offer HRT (or COC) until at least the natural age of menopause; benefits outweigh risks"},
    {"tone":"red","label":"Current / past breast cancer","text":"Hormone-dependent cancer — systemic HRT contraindicated; consider non-hormonal options (vaginal oestrogen needs oncology input)"},
    {"tone":"red","label":"Undiagnosed vaginal bleeding","text":"Undiagnosed PV bleeding — investigate before starting HRT"},
    {"tone":"red","label":"Active VTE / arterial event","text":"Active VTE/arterial event — defer HRT; if needed later use transdermal"}
  ],

  drugs: [
    // -------- Transdermal oestrogen --------
    {
      id:'transdermal',
      name:'Transdermal oestrogen (patch / gel / spray)',
      examples:'Estradiol patch · gel · spray',
      step:'Oestrogen · preferred route',
      source:'NICE NG23 §1.4',
      sideEffects:'Skin irritation; breast tenderness; minimal VTE effect',
      monitor:'Symptom response, BP; review at 3 months then annually',
      counsel:'"Through-the-skin oestrogen avoids the small clot risk of tablets — better if you have migraines, a higher BMI, or any clot history."',
      detail:{ 'Key teaching':'No increased VTE risk (unlike oral). Preferred with VTE risk, migraine, BMI ≥30, hypertension, malabsorption, gallbladder disease.' },
      conditions: [
        {"kind":"avoid","label":"Current / past breast cancer","text":"Systemic oestrogen contraindicated in this profile"},
        {"kind":"avoid","label":"Other oestrogen-dependent cancer","text":"Systemic oestrogen contraindicated in this profile"},
        {"kind":"avoid","label":"Active VTE / arterial event","text":"Systemic oestrogen contraindicated in this profile"},
        {"kind":"favoured","label":"VTE history / high VTE risk","text":"VTE risk — transdermal carries no excess clot risk"},
        {"kind":"favoured","label":"High BMI / obesity","text":"High BMI — transdermal route preferred"},
        {"kind":"favoured","label":"Migraine (esp. with aura)","text":"Migraine — transdermal preferred over oral"},
        {"kind":"favoured","label":"Hypertension","text":"Hypertension — transdermal has least BP/clot impact"},
        {"kind":"favoured","label":"Malabsorption / on enzyme inducers","text":"Malabsorption / enzyme inducers — bypasses gut/first-pass"}
      ]
    },
    // -------- Oral oestrogen --------
    {
      id:'oral_oest',
      name:'Oral oestrogen',
      examples:'Estradiol tablet (often combined preparation)',
      step:'Oestrogen · alternative',
      source:'NICE NG23',
      sideEffects:'Small ↑ VTE risk; nausea; breast tenderness',
      monitor:'BP, symptom response',
      counsel:'"A simple daily tablet — fine if you don\'t have clot risk factors and prefer not to use a patch or gel."',
      detail:{ 'Key teaching':'Reasonable when no VTE/migraine/BMI concerns and the patient prefers a tablet. Combined oral preparations simplify the progestogen.' },
      conditions: [
        {"kind":"avoid","label":"Current / past breast cancer","text":"Systemic oestrogen contraindicated"},
        {"kind":"avoid","label":"Other oestrogen-dependent cancer","text":"Systemic oestrogen contraindicated"},
        {"kind":"avoid","label":"Active VTE / arterial event","text":"Systemic oestrogen contraindicated"},
        {"kind":"caution","label":"VTE history / high VTE risk","text":"VTE/migraine/high-BMI/malabsorption — prefer transdermal"},
        {"kind":"caution","label":"High BMI / obesity","text":"VTE/migraine/high-BMI/malabsorption — prefer transdermal"},
        {"kind":"caution","label":"Migraine (esp. with aura)","text":"VTE/migraine/high-BMI/malabsorption — prefer transdermal"},
        {"kind":"caution","label":"Malabsorption / on enzyme inducers","text":"VTE/migraine/high-BMI/malabsorption — prefer transdermal"}
      ]
    },
    // -------- Micronised progesterone --------
    {
      id:'mp',
      name:'Micronised progesterone (Utrogestan)',
      examples:'Sequential or continuous, with oestrogen',
      step:'Progestogen · preferred',
      source:'NICE NG23',
      sideEffects:'Drowsiness (take at night), bloating; lower breast/VTE risk than synthetics',
      monitor:'Bleeding pattern; endometrial protection',
      counsel:'"This is the body-identical progesterone that protects your womb lining — taken at night as it can be a little sedating."',
      detail:{ 'Key teaching':'Needed if uterus present. Sequential (12 days/cycle) if perimenopausal/still bleeding; continuous (daily) if postmenopausal >12 months. Lower breast cancer/VTE signal than synthetic progestogens.' },
      conditions: [
        {"kind":"avoid","label":"Hysterectomy (no uterus)","text":"No uterus — progestogen not needed (oestrogen-only)"},
        {"kind":"favoured","label":"Uterus present","text":"Uterus present — endometrial protection required"}
      ]
    },
    // -------- LNG-IUS --------
    {
      id:'ius',
      name:'LNG-IUS (Mirena) as progestogen',
      examples:'Levonorgestrel IUS + oestrogen',
      step:'Progestogen + contraception',
      source:'NICE NG23 · CoSRH',
      sideEffects:'Irregular bleeding initially; insertion discomfort',
      monitor:'Threads; UK licence 4 years for HRT endometrial protection (BMS/CoSRH up to 5 years off-licence; 8 years for contraception only)',
      counsel:'"The coil can double as the womb-lining protection for your HRT and gives contraception too — a neat two-in-one."',
      detail:{ 'Key teaching':'Provides the progestogen component AND contraception. Ideal when contraception still needed in perimenopause.' },
      conditions: [
        {"kind":"avoid","label":"Hysterectomy (no uterus)","text":"No uterus — not required"},
        {"kind":"favoured","label":"Uterus present","text":"Endometrial protection with the convenience of a coil"},
        {"kind":"favoured","label":"Also needs contraception","text":"Also needs contraception — IUS covers both roles"}
      ]
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
      conditions: [
        {"kind":"favoured","label":"Urogenital / vaginal symptoms only","text":"Urogenital symptoms — local oestrogen is first-line and very safe"}
      ]
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
      conditions: [
        {"kind":"favoured","label":"Persistent low libido on HRT","text":"Persistent low libido despite HRT — testosterone add-on"}
      ]
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
      conditions: [
        {"kind":"favoured","label":"Current / past breast cancer","text":"HRT contraindicated — non-hormonal options for vasomotor symptoms"},
        {"kind":"favoured","label":"Other oestrogen-dependent cancer","text":"HRT contraindicated — non-hormonal options for vasomotor symptoms"},
        {"kind":"note","label":"Vasomotor (flushes/sweats) dominant","text":"Alternative if HRT declined"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG23 — Menopause: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng23' },
    { label:'NICE NG23 — menopause', url:'https://www.nice.org.uk/guidance/ng23' },
    { label:'BNF — Sex hormones (HRT)', url:'https://bnf.nice.org.uk/treatment-summaries/sex-hormones/' }
  ],
});
