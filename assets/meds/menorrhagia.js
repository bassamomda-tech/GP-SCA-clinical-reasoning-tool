/* ============================================
   Medication Chooser — Heavy menstrual bleeding
   NICE NG88 · BNF  (NICE NG12 (updated April 2026) endometrial red flags)
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('menorrhagia', {
  title: 'Heavy menstrual bleeding — treatment selection',
  subtitle: 'Hormonal vs non-hormonal choice driven by contraception need and structural cause (NICE NG88).',
  guideline: 'NICE NG88 · BNF',


  safety: [
    {"tone":"amber","label":"Fibroids ≥3 cm / uterine distortion","text":"Fibroids ≥3 cm / distorted cavity — refer; LNG-IUS may not be retained; consider GnRH analogues / surgical options"},
    {"tone":"amber","label":"Iron-deficiency anaemia","text":"Iron-deficiency anaemia — start iron and treat HMB promptly; check ferritin"},
    {"tone":"red","label":"Postmenopausal bleeding","text":"NICE NG12 (updated April 2026) — postmenopausal bleeding (55+): refer on the suspected endometrial/gynae cancer pathway; direct-access TVUSS"},
    {"tone":"amber","label":"Persistent intermenstrual / postcoital bleeding","text":"Persistent IMB/PCB, or ≥45 with treatment failure/risk factors — investigate endometrium (TVUSS ± biopsy / refer) before assuming benign HMB"}
  ],

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
      conditions: [
        {"kind":"avoid","label":"Trying to conceive soon","text":"Trying to conceive — a long-acting device is unsuitable; use non-hormonal during ttc"},
        {"kind":"caution","label":"Fibroids ≥3 cm / uterine distortion","text":"Distorted cavity / large fibroids — device may not fit or be retained; refer"},
        {"kind":"caution","label":"Declines intrauterine device","text":"Declines IUD — offer alternatives"},
        {"kind":"favoured","label":"Also wants contraception","text":"Also wants contraception — ideal dual benefit"},
        {"kind":"favoured","label":"No structural cause (idiopathic HMB)","text":"No major structural cause — first-line per NG88"},
        {"kind":"favoured","label":"Fibroids <3 cm, no distortion","text":"No major structural cause — first-line per NG88"},
        {"kind":"favoured","label":"Painful periods too (dysmenorrhoea)","text":"Coexisting dysmenorrhoea — often improves too"},
        {"kind":"favoured","label":"VTE risk / thrombophilia","text":"Oestrogen-avoidant profile — progestogen-only device is safe"},
        {"kind":"favoured","label":"Migraine with aura","text":"Oestrogen-avoidant profile — progestogen-only device is safe"},
        {"kind":"favoured","label":"Smoker and age ≥35","text":"Oestrogen-avoidant profile — progestogen-only device is safe"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"VTE risk / thrombophilia","text":"Active VTE / high thrombophilia risk — avoid"},
        {"kind":"favoured","label":"Does NOT want hormonal contraception","text":"Hormone-free / trying to conceive — first-line non-hormonal"},
        {"kind":"favoured","label":"Trying to conceive soon","text":"Hormone-free / trying to conceive — first-line non-hormonal"},
        {"kind":"favoured","label":"Declines intrauterine device","text":"Declines device — good non-hormonal option"}
      ]
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
      conditions: [
        {"kind":"favoured","label":"Does NOT want hormonal contraception","text":"Hormone-free option, compatible with trying to conceive"},
        {"kind":"favoured","label":"Trying to conceive soon","text":"Hormone-free option, compatible with trying to conceive"},
        {"kind":"favoured","label":"Painful periods too (dysmenorrhoea)","text":"Painful periods too — NSAID treats bleeding AND pain"}
      ]
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
      conditions: [
        {"kind":"avoid","label":"Trying to conceive soon","text":"Trying to conceive — contraceptive not appropriate"},
        {"kind":"avoid","label":"VTE risk / thrombophilia","text":"VTE risk — avoid oestrogen"},
        {"kind":"avoid","label":"Migraine with aura","text":"Migraine with aura — UKMEC 4, oestrogen contraindicated"},
        {"kind":"avoid","label":"Smoker and age ≥35","text":"Smoker ≥35 — UKMEC 3/4 for COC"},
        {"kind":"favoured","label":"Also wants contraception","text":"Wants contraception + cycle control — reasonable choice if no oestrogen CI"},
        {"kind":"favoured","label":"Painful periods too (dysmenorrhoea)","text":"Also helps dysmenorrhoea"}
      ]
    },

    // -------- PROGESTOGEN --------
    {
      id:'progestogen',
      name:'Oral / cyclical progestogen',
      examples:'Norethisterone 5 mg TDS (short-term) · long-cycle',
      step:'Short-term control',
      source:'NICE NG88',
      sideEffects:'Bloating, mood, breakthrough bleeding; high-dose norethisterone VTE risk',
      monitor:'Short-term stop-gap; not first-line maintenance',
      counsel:'"A progesterone tablet can quickly stop a heavy bleed as a short-term measure while we plan longer-term treatment."',
      detail:{
        'Dose': 'Norethisterone 5 mg TDS to stop acute bleeding; or luteal-phase cyclical regimens',
        'Key teaching': 'Useful for short-term/acute control. Long-term cyclical oral progestogen is less effective than LNG-IUS; high-dose norethisterone carries VTE risk.'
      },
      conditions: [
        {"kind":"caution","label":"VTE risk / thrombophilia","text":"VTE risk — high-dose norethisterone increases risk"},
        {"kind":"note","label":"Trying to conceive soon","text":"Stops bleeding short-term; not while actively conceiving"}
      ]
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
      conditions: [
        {"kind":"favoured","label":"Fibroids ≥3 cm / uterine distortion","text":"Fibroids ≥3 cm / distorted cavity — specialist medical or surgical options"},
        {"kind":"note","label":"Age ≥45 with treatment failure / risk factors","text":"Treatment failure — investigate + refer"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG88 — Heavy menstrual bleeding: assessment and management', url:'https://www.nice.org.uk/guidance/ng88' },
    { label:'NICE NG88 — heavy menstrual bleeding', url:'https://www.nice.org.uk/guidance/ng88' },
    { label:'NICE NG12 (updated April 2026) — Suspected cancer: recognition and referral', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'BNF — Menorrhagia', url:'https://bnf.nice.org.uk/treatment-summaries/' }
  ],
});
