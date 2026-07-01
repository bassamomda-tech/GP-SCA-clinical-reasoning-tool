/* ============================================
   Medication Chooser — Contraception (method choice)
   FSRH · UKMEC · CKS Contraception · BNF
   ============================================ */
MedChooser.register('contraception', {
  title: 'Contraception — method selection',
  subtitle: 'Effectiveness, oestrogen-safety (UKMEC) and patient preference drive the choice. LARC methods are the most effective. Tick the profile; cards re-tier live.',
  guideline: 'FSRH · UKMEC · CKS Contraception',

  factors: [
    // Oestrogen-safety / UKMEC red flags
    { group:'Oestrogen safety (UKMEC)', id:'migraine_aura', label:'Migraine WITH aura', note:'CHC = UKMEC 4 (absolute)' },
    { group:'Oestrogen safety (UKMEC)', id:'vte', label:'VTE history / thrombophilia' },
    { group:'Oestrogen safety (UKMEC)', id:'smoker35', label:'Smoker and age ≥35' },
    { group:'Oestrogen safety (UKMEC)', id:'bmi35', label:'BMI ≥35' },
    { group:'Oestrogen safety (UKMEC)', id:'htn', label:'Hypertension' },
    { group:'Oestrogen safety (UKMEC)', id:'breast_ca', label:'Current / past breast cancer' },
    { group:'Oestrogen safety (UKMEC)', id:'migraine_no_aura', label:'Migraine without aura' },

    // Stage / context
    { group:'Stage / context', id:'breastfeeding', label:'Breastfeeding / postpartum' },
    { group:'Stage / context', id:'young', label:'Adolescent / nulliparous' },
    { group:'Stage / context', id:'perimeno', label:'Perimenopausal (>40)' },
    { group:'Stage / context', id:'fertility_soon', label:'Wants fertility back quickly' },

    // Preference / co-benefits
    { group:'Preference / co-benefits', id:'most_effective', label:'Wants the most effective (LARC)' },
    { group:'Preference / co-benefits', id:'no_daily', label:'Wants nothing to remember daily' },
    { group:'Preference / co-benefits', id:'hmb', label:'Heavy menstrual bleeding' },
    { group:'Preference / co-benefits', id:'acne', label:'Acne / PCOS symptoms' },
    { group:'Preference / co-benefits', id:'avoid_hormones', label:'Prefers hormone-free' },
    { group:'Preference / co-benefits', id:'sti', label:'Needs STI protection' },
    { group:'Preference / co-benefits', id:'weight_concern', label:'Concerned about weight gain' },
    { group:'Preference / co-benefits', id:'epilepsy_inducer', label:'Enzyme-inducing drugs (e.g. some AEDs)' },
  ],

  flags: (f) => {
    const out = [];
    const chcUnsafe = f.migraine_aura || f.vte || f.smoker35 || f.bmi35 || f.breast_ca;
    if (f.migraine_aura) out.push({ tone:'red', text:'Migraine with aura — combined hormonal contraception is UKMEC 4 (do not use)' });
    if (f.breast_ca) out.push({ tone:'red', text:'Current breast cancer — hormonal methods UKMEC 4; use copper IUD / barrier' });
    if (chcUnsafe && !f.migraine_aura && !f.breast_ca) out.push({ tone:'amber', text:'Oestrogen-containing methods unsafe in this profile — favour progestogen-only or copper IUD' });
    if (f.sti) out.push({ tone:'amber', text:'Condoms needed for STI protection regardless of the chosen method' });
    if (f.epilepsy_inducer) out.push({ tone:'amber', text:'Enzyme inducers reduce efficacy of pills/implant — favour IUD/IUS or DMPA (FSRH)' });
    return out;
  },

  drugs: [
    // -------- LNG-IUS --------
    {
      id:'ius',
      name:'LNG-IUS (hormonal coil)',
      examples:'Levonorgestrel IUS — 5–8 years',
      step:'LARC · most effective',
      source:'FSRH · UKMEC · CKS',
      sideEffects:'Irregular bleeding/spotting early then lighter; insertion discomfort',
      monitor:'Threads check; not affected by enzyme inducers',
      counsel:'"Fit-and-forget for years, makes periods much lighter, and one of the most reliable options. Bleeding can be irregular for the first few months."',
      detail:{ 'Key teaching':'LARC: top-tier efficacy, unaffected by enzyme inducers, treats heavy menstrual bleeding, can provide HRT progestogen later.' },
      evaluate(f){
        const r = [];
        if (f.hmb) r.push({kind:'good', text:'Heavy menstrual bleeding — IUS is first-line treatment AND contraception'});
        if (f.most_effective || f.no_daily) r.push({kind:'good', text:'Wants maximally effective / nothing daily — LARC'});
        if (f.epilepsy_inducer) r.push({kind:'good', text:'Enzyme inducers — efficacy unaffected'});
        if (f.migraine_aura || f.vte || f.breast_ca) r.push({kind: f.breast_ca ? 'bad':'good', text: f.breast_ca ? 'Breast cancer — hormonal method UKMEC 4; choose copper IUD' : 'Oestrogen-unsafe — progestogen IUS is appropriate'});
        if (f.breast_ca) return { tier:'avoid', reasons:r };
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'Highly effective LARC suitable for most'}] };
      }
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
      evaluate(f){
        if (f.breast_ca) return { tier:'avoid', reasons:[{kind:'bad', text:'Breast cancer — hormonal method UKMEC 4'}] };
        const r = [];
        if (f.most_effective || f.no_daily) r.push({kind:'good', text:'Wants the most effective / nothing daily — implant has the lowest failure rate'});
        if (f.migraine_aura || f.vte || f.smoker35 || f.bmi35) r.push({kind:'good', text:'Oestrogen-unsafe — progestogen implant is appropriate'});
        if (f.epilepsy_inducer) r.push({kind:'bad', text:'Enzyme inducers reduce efficacy — IUD/IUS preferred'});
        return { tier: f.epilepsy_inducer ? 'acceptable' : 'preferred', reasons: r.length ? r : [{kind:'good', text:'Most effective LARC'}] };
      }
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
      evaluate(f){
        const r = [];
        if (f.avoid_hormones) r.push({kind:'good', text:'Prefers hormone-free — copper IUD is the effective non-hormonal LARC'});
        if (f.breast_ca) r.push({kind:'good', text:'Breast cancer — non-hormonal method of choice'});
        if (f.most_effective) r.push({kind:'good', text:'Highly effective LARC'});
        if (f.hmb) r.push({kind:'bad', text:'Heavy periods — copper IUD may worsen; prefer IUS'});
        const preferred = f.avoid_hormones || f.breast_ca;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Effective hormone-free LARC'}] };
      }
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
      evaluate(f){
        if (f.breast_ca) return { tier:'avoid', reasons:[{kind:'bad', text:'Breast cancer — hormonal method UKMEC 4'}] };
        const r = [];
        if (f.migraine_aura || f.vte || f.smoker35 || f.bmi35) r.push({kind:'good', text:'Oestrogen-unsafe — POP is a suitable oral option'});
        if (f.breastfeeding) r.push({kind:'good', text:'Breastfeeding — POP safe'});
        if (f.epilepsy_inducer) r.push({kind:'bad', text:'Enzyme inducers reduce efficacy — choose IUD/IUS/DMPA'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Oestrogen-free daily option'}] };
      }
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
      evaluate(f){
        if (f.breast_ca) return { tier:'avoid', reasons:[{kind:'bad', text:'Breast cancer — hormonal method UKMEC 4'}] };
        const r = [];
        if (f.epilepsy_inducer) r.push({kind:'good', text:'Enzyme inducers — DMPA efficacy unaffected'});
        if (f.weight_concern) r.push({kind:'bad', text:'Weight concern — DMPA associated with weight gain'});
        if (f.fertility_soon) r.push({kind:'bad', text:'Wants fertility soon — DMPA delays return up to a year'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Oestrogen-free 3-monthly option'}] };
      }
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
      evaluate(f){
        if (f.migraine_aura) return { tier:'avoid', reasons:[{kind:'bad', text:'Migraine with aura — UKMEC 4'}] };
        if (f.vte) return { tier:'avoid', reasons:[{kind:'bad', text:'VTE history — UKMEC 4'}] };
        if (f.breast_ca) return { tier:'avoid', reasons:[{kind:'bad', text:'Breast cancer — UKMEC 4'}] };
        if (f.smoker35) return { tier:'avoid', reasons:[{kind:'bad', text:'Smoker ≥35 — UKMEC 4 (≥15/day) / 3'}] };
        if (f.bmi35) return { tier:'avoid', reasons:[{kind:'bad', text:'BMI ≥35 — UKMEC 3/4, risk outweighs benefit'}] };
        const r = [];
        if (f.acne) r.push({kind:'good', text:'Acne / PCOS symptoms — CHC improves both'});
        if (f.hmb) r.push({kind:'good', text:'Heavy/painful periods — CHC gives cycle control'});
        if (f.migraine_no_aura) r.push({kind:'neutral', text:'Migraine without aura — UKMEC 2 (broadly usable, review)'});
        if (f.epilepsy_inducer) r.push({kind:'bad', text:'Enzyme inducers reduce efficacy — not recommended'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Suitable when no oestrogen contraindications'}] };
      }
    },
  ],

  sources: [
    { label:'FSRH — UK Medical Eligibility Criteria (UKMEC)', url:'https://www.fsrh.org/standards-and-guidance/uk-medical-eligibility-criteria/' },
    { label:'NICE CKS — Contraception', url:'https://cks.nice.org.uk/topics/contraception-assessment/' },
    { label:'FSRH — Clinical guidance', url:'https://www.fsrh.org/standards-and-guidance/' },
  ],
});
