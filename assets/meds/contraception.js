/* ============================================
   Medication Chooser — Contraception (method choice)
   FSRH · UKMEC · BNF
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('contraception', {
  title: 'Contraception — method selection',
  subtitle: 'Effectiveness, oestrogen-safety (UKMEC) and patient preference drive the choice. LARC methods are the most effective.',
  guideline: 'FSRH · UKMEC',


  safety: [
    {"tone":"red","label":"Migraine WITH aura","text":"Migraine with aura — combined hormonal contraception is UKMEC 4 (do not use)"},
    {"tone":"amber","label":"VTE history / thrombophilia","text":"Oestrogen-containing methods unsafe in this profile — favour progestogen-only or copper IUD"},
    {"tone":"red","label":"Current / past breast cancer","text":"Current breast cancer — hormonal methods UKMEC 4; use copper IUD / barrier"},
    {"tone":"amber","label":"Needs STI protection","text":"Condoms needed for STI protection regardless of the chosen method"},
    {"tone":"amber","label":"Enzyme-inducing drugs (e.g. some AEDs)","text":"Enzyme inducers reduce efficacy of pills/implant — favour IUD/IUS or DMPA (FSRH)"}
  ],

  drugs: [
    // -------- LNG-IUS --------
    {
      id:'ius',
      name:'LNG-IUS (hormonal coil)',
      examples:'Levonorgestrel IUS — 5–8 years',
      step:'LARC · most effective',
      source:'FSRH · UKMEC',
      sideEffects:'Irregular bleeding/spotting early then lighter; insertion discomfort',
      monitor:'Threads check; not affected by enzyme inducers',
      counsel:'"Fit-and-forget for years, makes periods much lighter, and one of the most reliable options. Bleeding can be irregular for the first few months."',
      detail:{ 'Key teaching':'LARC: top-tier efficacy, unaffected by enzyme inducers, treats heavy menstrual bleeding, can provide HRT progestogen later.' },
      conditions: [
        {"kind":"avoid","label":"Current / past breast cancer","text":"Breast cancer — hormonal method UKMEC 4; choose copper IUD"},
        {"kind":"favoured","label":"Migraine WITH aura","text":"Oestrogen-unsafe — progestogen IUS is appropriate"},
        {"kind":"favoured","label":"VTE history / thrombophilia","text":"Oestrogen-unsafe — progestogen IUS is appropriate"},
        {"kind":"favoured","label":"Wants the most effective (LARC)","text":"Wants maximally effective / nothing daily — LARC"},
        {"kind":"favoured","label":"Wants nothing to remember daily","text":"Wants maximally effective / nothing daily — LARC"},
        {"kind":"favoured","label":"Heavy menstrual bleeding","text":"Heavy menstrual bleeding — IUS is first-line treatment AND contraception"},
        {"kind":"favoured","label":"Enzyme-inducing drugs (e.g. some AEDs)","text":"Enzyme inducers — efficacy unaffected"}
      ]
    },
    // -------- Implant --------
    {
      id:'implant',
      name:'Etonogestrel implant',
      examples:'Subdermal implant — 3 years',
      step:'LARC · most effective',
      source:'FSRH · UKMEC',
      sideEffects:'Unpredictable bleeding (main reason for removal); no VTE risk',
      monitor:'Palpable; reduced efficacy with enzyme inducers',
      counsel:'"The most effective method there is — a tiny rod in the arm for three years. The main downside is unpredictable bleeding."',
      detail:{ 'Key teaching':'Lowest failure rate of all methods. Progestogen-only — safe with oestrogen contraindications. Efficacy reduced by enzyme inducers.' },
      conditions: [
        {"kind":"avoid","label":"Current / past breast cancer","text":"Breast cancer — hormonal method UKMEC 4"},
        {"kind":"caution","label":"Enzyme-inducing drugs (e.g. some AEDs)","text":"Enzyme inducers reduce efficacy — IUD/IUS preferred"},
        {"kind":"favoured","label":"Migraine WITH aura","text":"Oestrogen-unsafe — progestogen implant is appropriate"},
        {"kind":"favoured","label":"VTE history / thrombophilia","text":"Oestrogen-unsafe — progestogen implant is appropriate"},
        {"kind":"favoured","label":"Smoker and age ≥35","text":"Oestrogen-unsafe — progestogen implant is appropriate"},
        {"kind":"favoured","label":"BMI ≥35","text":"Oestrogen-unsafe — progestogen implant is appropriate"},
        {"kind":"favoured","label":"Wants the most effective (LARC)","text":"Wants the most effective / nothing daily — implant has the lowest failure rate"},
        {"kind":"favoured","label":"Wants nothing to remember daily","text":"Wants the most effective / nothing daily — implant has the lowest failure rate"}
      ]
    },
    // -------- Copper IUD --------
    {
      id:'cuiud',
      name:'Copper IUD (hormone-free)',
      examples:'Cu-IUD — 5–10 years',
      step:'LARC · hormone-free',
      source:'FSRH · UKMEC',
      sideEffects:'Heavier/more painful periods; insertion discomfort',
      monitor:'Threads check; also emergency contraception',
      counsel:'"Completely hormone-free and lasts years — but it can make periods heavier and crampier, especially at first."',
      detail:{ 'Key teaching':'Only LARC with no hormones — ideal where all hormonal methods contraindicated (e.g. breast cancer). Also the most effective emergency contraception.' },
      conditions: [
        {"kind":"caution","label":"Heavy menstrual bleeding","text":"Heavy periods — copper IUD may worsen; prefer IUS"},
        {"kind":"favoured","label":"Current / past breast cancer","text":"Breast cancer — non-hormonal method of choice"},
        {"kind":"favoured","label":"Wants the most effective (LARC)","text":"Highly effective LARC"},
        {"kind":"favoured","label":"Prefers hormone-free","text":"Prefers hormone-free — copper IUD is the effective non-hormonal LARC"}
      ]
    },
    // -------- POP --------
    {
      id:'pop',
      name:'Progestogen-only pill (desogestrel)',
      examples:'Desogestrel 75 µg OD',
      step:'Daily · oestrogen-free',
      source:'FSRH · UKMEC',
      sideEffects:'Irregular bleeding; must take daily (12-h window for desogestrel)',
      monitor:'Adherence; now available OTC',
      counsel:'"A daily pill with no oestrogen — safe with migraines, clot risk or while breastfeeding. It just needs taking around the same time each day."',
      detail:{ 'Key teaching':'Oestrogen-free → safe in most UKMEC oestrogen contraindications. Desogestrel has a 12-hour missed-pill window. Reduced efficacy with enzyme inducers.' },
      conditions: [
        {"kind":"avoid","label":"Current / past breast cancer","text":"Breast cancer — hormonal method UKMEC 4"},
        {"kind":"caution","label":"Enzyme-inducing drugs (e.g. some AEDs)","text":"Enzyme inducers reduce efficacy — choose IUD/IUS/DMPA"},
        {"kind":"favoured","label":"Migraine WITH aura","text":"Oestrogen-unsafe — POP is a suitable oral option"},
        {"kind":"favoured","label":"VTE history / thrombophilia","text":"Oestrogen-unsafe — POP is a suitable oral option"},
        {"kind":"favoured","label":"Smoker and age ≥35","text":"Oestrogen-unsafe — POP is a suitable oral option"},
        {"kind":"favoured","label":"BMI ≥35","text":"Oestrogen-unsafe — POP is a suitable oral option"},
        {"kind":"favoured","label":"Breastfeeding / postpartum","text":"Breastfeeding — POP safe"}
      ]
    },
    // -------- DMPA --------
    {
      id:'dmpa',
      name:'Injectable (DMPA)',
      examples:'Medroxyprogesterone IM/SC every 13 weeks',
      step:'Oestrogen-free · 3-monthly',
      source:'FSRH · UKMEC',
      sideEffects:'Weight gain, delayed fertility return (up to 1 yr), reversible ↓ BMD',
      monitor:'Reassess if continued >2 years; not affected by enzyme inducers',
      counsel:'"An injection every three months — convenient and oestrogen-free, but it can cause weight gain and fertility takes a while to return."',
      detail:{ 'Key teaching':'Avoid if wanting rapid return of fertility; caution re BMD in adolescents and >45s. Efficacy unaffected by enzyme inducers.' },
      conditions: [
        {"kind":"avoid","label":"Current / past breast cancer","text":"Breast cancer — hormonal method UKMEC 4"},
        {"kind":"caution","label":"Wants fertility back quickly","text":"Wants fertility soon — DMPA delays return up to a year"},
        {"kind":"caution","label":"Concerned about weight gain","text":"Weight concern — DMPA associated with weight gain"},
        {"kind":"favoured","label":"Enzyme-inducing drugs (e.g. some AEDs)","text":"Enzyme inducers — DMPA efficacy unaffected"}
      ]
    },
    // -------- CHC --------
    {
      id:'chc',
      name:'Combined hormonal contraception (pill / patch / ring)',
      examples:'COC · transdermal patch · vaginal ring',
      step:'Daily · oestrogen-containing',
      source:'FSRH · UKMEC',
      sideEffects:'Small ↑ VTE & arterial risk; nausea; breakthrough bleeding',
      monitor:'BP before + at review; UKMEC screen essential',
      counsel:'"Good cycle control and can help acne and painful periods — but it carries a small clot risk, so it isn\'t safe with certain migraines or clot history."',
      detail:{ 'Key teaching':'Non-contraceptive benefits: cycle control, acne, dysmenorrhoea, ovarian/endometrial cancer reduction. Contraindicated (UKMEC 4) in migraine with aura, prior VTE, smoker ≥35, BMI/BP extremes, breast cancer.' },
      conditions: [
        {"kind":"avoid","label":"Migraine WITH aura","text":"Migraine with aura — UKMEC 4"},
        {"kind":"avoid","label":"VTE history / thrombophilia","text":"VTE history — UKMEC 4"},
        {"kind":"avoid","label":"Smoker and age ≥35","text":"Smoker ≥35 — UKMEC 4 (≥15/day) / 3"},
        {"kind":"avoid","label":"BMI ≥35","text":"BMI ≥35 — UKMEC 3/4, risk outweighs benefit"},
        {"kind":"avoid","label":"Current / past breast cancer","text":"Breast cancer — UKMEC 4"},
        {"kind":"caution","label":"Enzyme-inducing drugs (e.g. some AEDs)","text":"Enzyme inducers reduce efficacy — not recommended"},
        {"kind":"favoured","label":"Heavy menstrual bleeding","text":"Heavy/painful periods — CHC gives cycle control"},
        {"kind":"favoured","label":"Acne / PCOS symptoms","text":"Acne / PCOS symptoms — CHC improves both"},
        {"kind":"note","label":"Migraine without aura","text":"Migraine without aura — UKMEC 2 (broadly usable, review)"}
      ]
    }
  ],

  sources: [
    { label:'FSRH — UK Medical Eligibility Criteria (UKMEC)', url:'https://www.fsrh.org/standards-and-guidance/uk-medical-eligibility-criteria/' },
    
    { label:'FSRH — Clinical guidance', url:'https://www.fsrh.org/standards-and-guidance/' }
  ],
});
