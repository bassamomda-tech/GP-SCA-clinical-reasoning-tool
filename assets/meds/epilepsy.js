/* ============================================
   Medication Chooser — Epilepsy (adults; specialist-initiated)
   NICE NG217 (2022) · MHRA valproate/topiramate measures · SPC
   Fixed lists (Upload 128, October 2026): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('epilepsy', {
  title: 'Epilepsy — antiseizure medicines (ASMs)',
  subtitle: 'Antiseizure medicines are started by an epilepsy specialist after a confirmed diagnosis (NICE NG217). The GP role is continuing the prescription, keeping the same manufacturer where the MHRA category says so, checking interactions and contraception, and reproductive-safety reviews. NG217 lists options by seizure type — the order below follows that.',
  guideline: 'NICE NG217 · MHRA · SPC',

  safety: [
    {"tone":"red","label":"Valproate — anyone under 55","text":"Do not start valproate in anyone under 55 unless two specialists independently agree no other treatment is suitable or the reproductive risks do not apply (MHRA, January 2024; February 2025 clarification). Women and girls who could become pregnant must be on the Pregnancy Prevention Programme with an annual risk acknowledgement."},
    {"tone":"red","label":"Topiramate — women who could become pregnant","text":"Topiramate needs a Pregnancy Prevention Programme from June 2024 (MHRA): highly effective contraception, pregnancy test before starting, annual risk acknowledgement form."},
    {"tone":"amber","label":"Continuity of supply","text":"MHRA category 1 ASMs (carbamazepine, phenobarbital, phenytoin, primidone) — keep the patient on the same manufacturer's product. Category 2 (e.g. lamotrigine, valproate, topiramate, clobazam, zonisamide) — use clinical judgement and patient preference."},
    {"tone":"amber","label":"Enzyme inducers and contraception","text":"Carbamazepine, phenytoin, phenobarbital, primidone, oxcarbazepine and (above 200 mg/day) topiramate reduce the effect of hormonal contraception — a copper IUD, LNG-IUD or DMPA is preferred (CoSRH)."},
    {"tone":"amber","label":"Do not stop abruptly","text":"Sudden withdrawal can provoke seizures or status epilepticus. Any change is planned with the specialist. Driving rules (DVLA) apply during withdrawal and after a seizure."},
    {"tone":"red","label":"Pregnancy planning","text":"Folic acid 5 mg daily from before conception to 12 weeks; urgent specialist review of the ASM. Do not stop the ASM if pregnancy is found — seek same-day specialist advice."}
  ],

  drugs: [
    {
      id:'lamotrigine',
      name:'Lamotrigine',
      examples:'Slow titration over weeks per SPC (slower with valproate, faster with enzyme inducers)',
      step:'Focal and generalised — first-line option',
      source:'NICE NG217 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng217',
      sideEffects:'Rash (rarely SJS/TEN, mostly in the first 8 weeks), dizziness, diplopia, headache, insomnia',
      monitor:'Rash during titration; levels may be used in pregnancy (specialist)',
      counsel:'"Build the dose up exactly as written — going faster raises the risk of a serious rash. Any rash, fever, mouth ulcers or sore eyes in the first two months — stop and contact us the same day."',
      detail:{
        'Dose':'Specialist-set titration schedule from the SPC; the starting dose and steps depend on whether valproate or an enzyme inducer is co-prescribed. Restart from the beginning of the titration if more than about 5 half-lives of doses are missed.',
        'Key teaching':'First-line for focal seizures (NG217) and an option for generalised tonic-clonic seizures in women and girls who could become pregnant. Combined hormonal contraception lowers lamotrigine levels (and levels rise in the pill-free week) — tell the specialist before starting or stopping it. Levels fall in pregnancy.'
      },
      conditions: [
        {"kind":"caution","label":"Combined hormonal contraception","text":"Oestrogen lowers lamotrigine levels — seizure control may change; specialist adjusts dose"},
        {"kind":"caution","label":"Taking valproate","text":"Valproate roughly doubles lamotrigine levels — slower titration and lower doses"},
        {"kind":"favoured","label":"Woman or girl who could become pregnant","text":"Among the ASMs with the most reassuring pregnancy data (with levetiracetam)"}
      ]
    },
    {
      id:'levetiracetam',
      name:'Levetiracetam',
      examples:'Twice daily; titrated by the specialist per SPC',
      step:'Focal — first-line option; generalised — alternative',
      source:'NICE NG217 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng217',
      sideEffects:'Irritability, low mood, aggression, somnolence, fatigue',
      monitor:'Mood and behaviour; renal function (dose reduces in renal impairment)',
      counsel:'"Some people feel irritable, low or angry on this — tell us early, there are alternatives. Do not stop it suddenly."',
      detail:{
        'Dose':'Specialist-led titration per the SPC; reduce in renal impairment (CrCl bands in the SPC).',
        'Key teaching':'First-line for focal seizures alongside lamotrigine (NG217). Few interactions — useful with complex medication lists. Ask about mood at every review; MHRA has highlighted suicidal ideation across ASMs.'
      },
      conditions: [
        {"kind":"caution","label":"Depression / behavioural problems","text":"Can worsen mood and behaviour — ask at each review"},
        {"kind":"caution","label":"CKD","text":"Renally cleared — dose reduction by CrCl (SPC)"},
        {"kind":"favoured","label":"Woman or girl who could become pregnant","text":"Reassuring pregnancy data relative to valproate/topiramate"}
      ]
    },
    {
      id:'valproate',
      name:'Sodium valproate',
      examples:'Specialist-initiated only, under the MHRA measures',
      step:'Generalised — first-line in males and in those ≥55 / without reproductive potential',
      source:'NICE NG217 · MHRA DSU 2024–25',
      sourceUrl:'https://www.gov.uk/drug-safety-update/valproate-belvo-convulex-depakote-dyzantil-epilim-epilim-chrono-or-chronosphere-episenta-epival-and-syonellv-review-by-two-specialists-is-required-for-initiating-valproate-but-not-for-male-patients-already-taking-valproate',
      sideEffects:'Weight gain, tremor, hair loss, hepatotoxicity, pancreatitis, thrombocytopenia, hyperammonaemia',
      monitor:'LFTs and FBC per SPC; annual risk acknowledgement (females under PPP); reproductive counselling for males',
      counsel:'"This medicine can seriously harm an unborn baby. If you could become pregnant you need highly effective contraception and a yearly review with your specialist. Do not stop it suddenly — speak to us first."',
      detail:{
        'Dose':'Specialist decision; SPC dosing by weight and response.',
        'Key teaching':'Most effective for generalised epilepsies but highly teratogenic (around 1 in 10 risk of major malformation and up to 4 in 10 risk of neurodevelopmental disorder). Men: as a precaution, men and their partners should use effective contraception during treatment and for 3 months after stopping (MHRA, September 2024).'
      },
      conditions: [
        {"kind":"avoid","label":"Woman or girl who could become pregnant","text":"Do not start unless two specialists agree and the PPP is in place; check contraception and annual form"},
        {"kind":"avoid","label":"Pregnant","text":"Contraindicated for epilepsy in pregnancy unless no suitable alternative — urgent specialist review; do not stop abruptly"},
        {"kind":"caution","label":"Male patient planning a family","text":"Counsel on the precautionary neurodevelopmental risk; refer to specialist to review"},
        {"kind":"caution","label":"Liver disease","text":"Hepatotoxicity risk — LFTs before and during early treatment"}
      ]
    },
    {
      id:'carbamazepine',
      name:'Carbamazepine',
      examples:'Modified-release preferred; specialist titration',
      step:'Focal — second-line option',
      source:'NICE NG217 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng217',
      sideEffects:'Dizziness, diplopia, hyponatraemia, rash (HLA-B*1502 SJS risk), leucopenia, LFT changes',
      monitor:'Sodium, FBC, LFTs per SPC; HLA-B*1502 before starting in Han Chinese or Thai ancestry',
      counsel:'"Keep to the same brand. It interacts with many medicines and stops hormonal pills, patches and implants working well."',
      detail:{
        'Dose':'Specialist-set; MHRA category 1 — maintain the same manufacturer.',
        'Key teaching':'Strong enzyme inducer: reduces efficacy of combined and progestogen-only pills, implant, DOACs, some statins, warfarin. Can worsen absence and myoclonic seizures.'
      },
      conditions: [
        {"kind":"caution","label":"On hormonal contraception","text":"Enzyme inducer — use a copper IUD, LNG-IUD or DMPA"},
        {"kind":"caution","label":"Older adult / on diuretic","text":"Hyponatraemia risk — check sodium"},
        {"kind":"avoid","label":"Absence or myoclonic seizures","text":"May worsen these seizure types"}
      ]
    },
    {
      id:'other_asm',
      name:'Other ASMs — zonisamide, lacosamide, oxcarbazepine, topiramate, ethosuximide, clobazam',
      examples:'Specialist choice by seizure type',
      step:'Specialist — alternatives and adjuncts',
      source:'NICE NG217 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng217',
      sideEffects:'Drug-specific — see SPC (e.g. zonisamide/topiramate: weight loss, kidney stones; topiramate: cognitive slowing)',
      monitor:'As set out in the specialist letter',
      counsel:'"This is chosen by your epilepsy team. We will keep prescribing it exactly as they set — tell us before stopping or starting any other medicine."',
      detail:{
        'Key teaching':'Ethosuximide is first-line for absence seizures (NG217). Topiramate is now under a Pregnancy Prevention Programme (MHRA, June 2024). Buccal midazolam is the usual community rescue medicine for prolonged seizures — prescribed with an individual care plan.'
      },
      conditions: [
        {"kind":"avoid","label":"Topiramate — could become pregnant without PPP","text":"Topiramate contraindicated unless the PPP conditions are met"},
        {"kind":"note","label":"Rescue medicine","text":"Buccal midazolam per specialist care plan; check carers are trained"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG217 — Epilepsies in children, young people and adults (2022)', url:'https://www.nice.org.uk/guidance/ng217' },
    { label:'MHRA DSU — Valproate: review by two specialists (February 2025)', url:'https://www.gov.uk/drug-safety-update/valproate-belvo-convulex-depakote-dyzantil-epilim-epilim-chrono-or-chronosphere-episenta-epival-and-syonellv-review-by-two-specialists-is-required-for-initiating-valproate-but-not-for-male-patients-already-taking-valproate' },
    { label:'MHRA — Topiramate: Pregnancy Prevention Programme (June 2024)', url:'https://www.gov.uk/government/news/new-pregnancy-prevention-measures-introduced-for-topiramate' },
    { label:'SPC — lamotrigine', url:'https://www.medicines.org.uk/emc/search?q=lamotrigine' },
    { label:'SPC — levetiracetam', url:'https://www.medicines.org.uk/emc/search?q=levetiracetam' },
    { label:'BNF — Epilepsy', url:'https://bnf.nice.org.uk/treatment-summaries/epilepsy/' }
  ],
});
