/* ============================================
   Medication Chooser — Heavy menstrual bleeding
   NICE NG88 · CKS Menorrhagia · BNF  (NG12 endometrial red flags)
   ============================================ */
MedChooser.register('menorrhagia', {
  title: 'Heavy menstrual bleeding — treatment selection',
  subtitle: 'Hormonal vs non-hormonal choice driven by contraception need and structural cause (NICE NG88). Tick the patient profile; cards re-tier live.',
  guideline: 'NICE NG88 · CKS · BNF',

  factors: [
    // Contraception / fertility
    { group:'Contraception & fertility', id:'wants_contra', label:'Also wants contraception' },
    { group:'Contraception & fertility', id:'no_contra', label:'Does NOT want hormonal contraception' },
    { group:'Contraception & fertility', id:'fertility_soon', label:'Trying to conceive soon', note:'Non-hormonal only' },

    // Structure / cause
    { group:'Structure & cause', id:'no_structural', label:'No structural cause (idiopathic HMB)' },
    { group:'Structure & cause', id:'small_fibroid', label:'Fibroids <3 cm, no distortion' },
    { group:'Structure & cause', id:'large_fibroid', label:'Fibroids ≥3 cm / uterine distortion', note:'Refer; LNG-IUS may not fit' },
    { group:'Structure & cause', id:'dysmenorrhoea', label:'Painful periods too (dysmenorrhoea)' },

    // Demographics / risk
    { group:'Demographics / risk', id:'vte', label:'VTE risk / thrombophilia', note:'Avoid oestrogen' },
    { group:'Demographics / risk', id:'migraine_aura', label:'Migraine with aura', note:'No combined oestrogen' },
    { group:'Demographics / risk', id:'smoker35', label:'Smoker and age ≥35', note:'Avoid COC' },
    { group:'Demographics / risk', id:'anaemia', label:'Iron-deficiency anaemia', note:'Treat + urgency' },

    // Red flags (NG12)
    { group:'Red flags (refer)', id:'pmb', label:'Postmenopausal bleeding' },
    { group:'Red flags (refer)', id:'imb', label:'Persistent intermenstrual / postcoital bleeding' },
    { group:'Red flags (refer)', id:'over45_fail', label:'Age ≥45 with treatment failure / risk factors' },

    // Preference
    { group:'Preference', id:'avoid_device', label:'Declines intrauterine device' },
  ],

  flags: (f) => {
    const out = [];
    if (f.pmb) out.push({ tone:'red', text:'NICE NG12 — postmenopausal bleeding (55+): refer on the suspected endometrial/gynae cancer (2WW) pathway; direct-access TVUSS' });
    if (f.imb || f.over45_fail) out.push({ tone:'amber', text:'Persistent IMB/PCB, or ≥45 with treatment failure/risk factors — investigate endometrium (TVUSS ± biopsy / refer) before assuming benign HMB' });
    if (f.large_fibroid) out.push({ tone:'amber', text:'Fibroids ≥3 cm / distorted cavity — refer; LNG-IUS may not be retained; consider GnRH analogues / surgical options' });
    if (f.anaemia) out.push({ tone:'amber', text:'Iron-deficiency anaemia — start iron and treat HMB promptly; check ferritin' });
    return out;
  },

  drugs: [
    // -------- LNG-IUS --------
    {
      id:'lng_ius',
      name:'LNG-IUS (Mirena)',
      examples:'Levonorgestrel intrauterine system',
      step:'1st-line',
      source:'NICE NG88 §1.4',
      sideEffects:'Irregular bleeding/spotting first 3–6 months, then often amenorrhoea; hormonal effects',
      monitor:'Review at 3–6 months; warn re: initial spotting',
      counsel:'"A small device in the womb that releases a tiny amount of hormone locally — the most effective treatment, and many women\'s periods become very light or stop. Expect some irregular spotting for the first few months."',
      detail:{
        'Dose': 'Single device, lasts up to ~8 years (per brand)',
        'Key teaching': 'NICE NG88 FIRST-LINE for HMB (no/low structural cause), especially if contraception is also wanted. Counsel to persist through early irregular bleeding.'
      },
      evaluate(f){
        if (f.fertility_soon) return { tier:'avoid', reasons:[{kind:'bad', text:'Trying to conceive — a long-acting device is unsuitable; use non-hormonal during ttc'}] };
        if (f.large_fibroid) return { tier:'acceptable', reasons:[{kind:'bad', text:'Distorted cavity / large fibroids — device may not fit or be retained; refer'}] };
        if (f.avoid_device) return { tier:'acceptable', reasons:[{kind:'bad', text:'Declines IUD — offer alternatives'}] };
        const r = [];
        if (f.wants_contra) r.push({kind:'good', text:'Also wants contraception — ideal dual benefit'});
        if (f.no_structural || f.small_fibroid) r.push({kind:'good', text:'No major structural cause — first-line per NG88'});
        if (f.dysmenorrhoea) r.push({kind:'good', text:'Coexisting dysmenorrhoea — often improves too'});
        if (f.vte || f.migraine_aura || f.smoker35) r.push({kind:'good', text:'Oestrogen-avoidant profile — progestogen-only device is safe'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'NICE first-line for HMB'}] };
      }
    },

    // -------- TRANEXAMIC ACID --------
    {
      id:'tranexamic',
      name:'Tranexamic acid',
      examples:'Tranexamic acid 1 g TDS during menses',
      step:'1st-line non-hormonal',
      source:'NICE NG88 §1.4',
      sideEffects:'GI upset; theoretical thrombosis risk (avoid in active VTE)',
      monitor:'Take only on heavy days; stop if no benefit after 3 cycles',
      counsel:'"A non-hormonal tablet you take only during your period to reduce the flow by about a third — it doesn\'t affect your cycle or fertility, so it\'s ideal if you\'re trying for a baby."',
      detail:{
        'Dose': 'Tranexamic acid 1 g TDS for up to 4 days, starting when bleeding begins',
        'Key teaching': 'First-line where hormonal treatment is declined or contraindicated, or when trying to conceive. Does not provide contraception.'
      },
      evaluate(f){
        if (f.vte) return { tier:'avoid', reasons:[{kind:'bad', text:'Active VTE / high thrombophilia risk — avoid'}] };
        const r = [];
        if (f.no_contra || f.fertility_soon) r.push({kind:'good', text:'Hormone-free / trying to conceive — first-line non-hormonal'});
        if (f.avoid_device) r.push({kind:'good', text:'Declines device — good non-hormonal option'});
        const preferred = f.no_contra || f.fertility_soon || f.avoid_device;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Non-hormonal option taken during menses'}] };
      }
    },

    // -------- NSAID --------
    {
      id:'nsaid',
      name:'NSAID (mefenamic acid)',
      examples:'Mefenamic acid 500 mg TDS · Naproxen',
      step:'Non-hormonal (esp. with pain)',
      source:'NICE NG88 §1.4',
      sideEffects:'GI upset/ulcer, renal, bronchospasm in sensitive asthma',
      monitor:'Take during menses; stop if ineffective after 3 cycles',
      counsel:'"An anti-inflammatory taken during your period — it reduces both the bleeding and the cramps, so it\'s a good choice if periods are painful too."',
      detail:{
        'Dose': 'Mefenamic acid 500 mg TDS from onset of bleeding',
        'Key teaching': 'Particularly useful where dysmenorrhoea coexists. Non-hormonal; can combine with tranexamic acid. Avoid in NSAID-contraindicated patients.'
      },
      evaluate(f){
        const r = [];
        if (f.dysmenorrhoea) r.push({kind:'good', text:'Painful periods too — NSAID treats bleeding AND pain'});
        if (f.no_contra || f.fertility_soon) r.push({kind:'good', text:'Hormone-free option, compatible with trying to conceive'});
        const preferred = f.dysmenorrhoea;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Non-hormonal option, best when periods painful'}] };
      }
    },

    // -------- COC --------
    {
      id:'coc',
      name:'Combined oral contraceptive',
      examples:'Combined oestrogen/progestogen pill',
      step:'Hormonal alternative',
      source:'NICE NG88 §1.4 · UKMEC',
      sideEffects:'VTE risk, breast tenderness, mood, breakthrough bleeding',
      monitor:'UKMEC screen (BP, migraine, VTE, smoking)',
      counsel:'"The combined pill lightens and regulates periods and gives contraception — but it isn\'t suitable if you get migraine with aura, smoke over 35, or have clot risks."',
      detail:{
        'Dose': 'Standard COC, can be run with shortened/no breaks for HMB',
        'Key teaching': 'Option if contraception wanted and no oestrogen contraindication. Screen with UKMEC first.'
      },
      evaluate(f){
        if (f.migraine_aura) return { tier:'avoid', reasons:[{kind:'bad', text:'Migraine with aura — UKMEC 4, oestrogen contraindicated'}] };
        if (f.vte) return { tier:'avoid', reasons:[{kind:'bad', text:'VTE risk — avoid oestrogen'}] };
        if (f.smoker35) return { tier:'avoid', reasons:[{kind:'bad', text:'Smoker ≥35 — UKMEC 3/4 for COC'}] };
        if (f.fertility_soon) return { tier:'avoid', reasons:[{kind:'bad', text:'Trying to conceive — contraceptive not appropriate'}] };
        const r = [];
        if (f.wants_contra) r.push({kind:'good', text:'Wants contraception + cycle control — reasonable choice if no oestrogen CI'});
        if (f.dysmenorrhoea) r.push({kind:'good', text:'Also helps dysmenorrhoea'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Hormonal option if no oestrogen contraindication'}] };
      }
    },

    // -------- PROGESTOGEN --------
    {
      id:'progestogen',
      name:'Oral / cyclical progestogen',
      examples:'Norethisterone 5 mg TDS (short-term) · long-cycle',
      step:'Short-term control',
      source:'NICE NG88 · CKS',
      sideEffects:'Bloating, mood, breakthrough bleeding; high-dose norethisterone VTE risk',
      monitor:'Short-term stop-gap; not first-line maintenance',
      counsel:'"A progesterone tablet can quickly stop a heavy bleed as a short-term measure while we plan longer-term treatment."',
      detail:{
        'Dose': 'Norethisterone 5 mg TDS to stop acute bleeding; or luteal-phase cyclical regimens',
        'Key teaching': 'Useful for short-term/acute control. Long-term cyclical oral progestogen is less effective than LNG-IUS; high-dose norethisterone carries VTE risk.'
      },
      evaluate(f){
        const r = [{kind:'neutral', text:'Short-term control / acute heavy bleed; not preferred for long-term maintenance'}];
        if (f.vte) r.push({kind:'bad', text:'VTE risk — high-dose norethisterone increases risk'});
        if (f.fertility_soon) r.push({kind:'neutral', text:'Stops bleeding short-term; not while actively conceiving'});
        return { tier:'acceptable', reasons: r };
      }
    },

    // -------- GnRH / SURGICAL --------
    {
      id:'specialist',
      name:'GnRH analogue / surgical referral',
      examples:'GnRH analogue · ablation · myomectomy / hysterectomy',
      step:'Specialist (fibroids / refractory)',
      source:'NICE NG88 §1.6',
      sideEffects:'GnRH — menopausal symptoms, bone loss (needs add-back)',
      monitor:'Secondary care',
      counsel:'"If medicines aren\'t enough, or there are larger fibroids, the gynaecology team can offer hormone injections to shrink fibroids or procedures from a lining treatment up to surgery."',
      detail:{
        'Dose': 'GnRH analogue (often pre-operatively, with add-back HRT); endometrial ablation; myomectomy/UAE/hysterectomy',
        'Key teaching': 'For large fibroids/distorted cavity, failure of medical therapy, or where definitive treatment is chosen. Refer.'
      },
      evaluate(f){
        const r = [];
        if (f.large_fibroid) r.push({kind:'good', text:'Fibroids ≥3 cm / distorted cavity — specialist medical or surgical options'});
        if (f.over45_fail) r.push({kind:'neutral', text:'Treatment failure — investigate + refer'});
        return { tier: f.large_fibroid ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Where medical therapy fails or structural cause needs intervention'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG88 — Heavy menstrual bleeding: assessment and management', url:'https://www.nice.org.uk/guidance/ng88' },
    { label:'NICE CKS — Menorrhagia', url:'https://cks.nice.org.uk/topics/menorrhagia-heavy-menstrual-bleeding/' },
    { label:'NICE NG12 — Suspected cancer: recognition and referral', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'BNF — Menorrhagia', url:'https://bnf.nice.org.uk/treatment-summaries/' },
  ],
});
