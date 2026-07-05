/* ============================================
   Reasoning GP — Ready Prescription Tool
   Single filterable grid of pre-built prescriptions.
   ============================================ */

window.RGP_PRESCRIPTIONS = [

  // ============================================
  // H. PYLORI ERADICATION — 1st LINE
  // ============================================
  {
    id: 'hpylori-1st',
    title: 'H. pylori eradication — 1st line',
    category: 'Gastroenterology',
    eyebrow: '7-day triple therapy',
    indication: 'Confirmed H. pylori infection (positive stool antigen / urea breath test / biopsy)',
    contraindications: 'Penicillin allergy (use 2nd-line). Recent macrolide use within 12 months → use alternative.',
    duration: '7 days',
    drugs: [
      { name:'Lansoprazole', dose:'30 mg', freq:'BD', route:'PO', days:'7' },
      { name:'Amoxicillin',   dose:'1 g',   freq:'BD', route:'PO', days:'7' },
      { name:'Clarithromycin',dose:'500 mg',freq:'BD', route:'PO', days:'7' },
    ],
    counselling: [
      'Take all three together, 30 minutes before food, for the full 7 days.',
      'Common side effects: diarrhoea, metallic taste, abdominal discomfort.',
      'Avoid alcohol during treatment (clarithromycin causes nausea / flushing).',
      'Yoghurt / probiotics may help bowel symptoms.',
      'Stop PPI for 2 weeks before re-testing.',
    ],
    followUp: 'Re-test only if symptoms persist or relapsing dyspepsia — urea breath test or stool antigen ≥ 4 weeks after completing treatment AND ≥ 2 weeks off PPI.',
    redFlags: [
      'Dysphagia, weight loss, GI bleeding, anaemia, persistent vomiting → 2WW upper GI per NICE NG12.',
      'Persistent symptoms despite eradication → consider gastroscopy.',
    ],
    emisText: `H. pylori 1st-line eradication (7 days):
- Lansoprazole 30 mg BD × 7 days
- Amoxicillin 1 g BD × 7 days
- Clarithromycin 500 mg BD × 7 days
Counsel: take all 3 together, complete full course, avoid alcohol. Re-test only if relapse, ≥ 4 wks post-treatment and ≥ 2 wks off PPI.`,
    sources: [
      { label:'NICE CKS Helicobacter pylori 2024', url:'https://cks.nice.org.uk/topics/dyspepsia-proven-functional/management/helicobacter-pylori-test-positive/' },
      { label:'NICE CG184 Dyspepsia', url:'https://www.nice.org.uk/guidance/cg184' },
    ],
  },

  // ============================================
  // H. PYLORI ERADICATION — 2nd LINE
  // ============================================
  {
    id: 'hpylori-2nd',
    title: 'H. pylori eradication — 2nd line',
    category: 'Gastroenterology',
    eyebrow: '7-day triple therapy (after failed 1st line)',
    indication: 'Failed 1st-line H. pylori eradication. Confirm persistence with urea breath test or stool antigen first.',
    contraindications: 'Use an antibiotic the patient did NOT receive 1st line. Penicillin allergy → use clarithromycin + metronidazole combination.',
    duration: '7 days',
    drugs: [
      { name:'Lansoprazole', dose:'30 mg', freq:'BD', route:'PO', days:'7' },
      { name:'Amoxicillin',   dose:'1 g',   freq:'BD', route:'PO', days:'7' },
      { name:'Metronidazole', dose:'400 mg',freq:'BD', route:'PO', days:'7' },
    ],
    altRegimens: [
      { label:'If clarithromycin not used 1st line', drugs:'PPI + amoxicillin 1 g BD + clarithromycin 500 mg BD × 7 days' },
      { label:'Penicillin allergy', drugs:'PPI + clarithromycin 500 mg BD + metronidazole 400 mg BD × 7 days' },
      { label:'Pen-allergic + clarithromycin used 1st line', drugs:'PPI + bismuth subsalicylate + metronidazole + tetracycline (specialist input — refer gastro)' },
    ],
    counselling: [
      'Avoid alcohol for the whole course AND 48 hours after (metronidazole — disulfiram reaction).',
      'Metallic taste is very common and resolves on stopping.',
      'Take all three together, 30 minutes before food.',
      'If still symptomatic after 2nd-line failure — refer gastroenterology.',
    ],
    followUp: 'Re-test 4+ weeks after treatment if symptoms persist. After 2nd-line failure → gastroenterology referral for susceptibility testing / alternative regimen.',
    redFlags: [
      'Alarm features (dysphagia, weight loss, anaemia) → 2WW upper GI.',
      'Two failed eradication courses → gastroenterology referral.',
    ],
    emisText: `H. pylori 2nd-line eradication (7 days):
- Lansoprazole 30 mg BD × 7 days
- Amoxicillin 1 g BD × 7 days
- Metronidazole 400 mg BD × 7 days
Avoid alcohol during AND for 48 h after treatment. Refer gastro if 2nd line fails.`,
    sources: [
      { label:'NICE CKS Helicobacter pylori 2024', url:'https://cks.nice.org.uk/topics/dyspepsia-proven-functional/management/helicobacter-pylori-test-positive/' },
    ],
  },

  // ============================================
  // EMERGENCY CONTRACEPTION
  // ============================================
  {
    id: 'emergency-contraception',
    title: 'Emergency contraception',
    category: "Women's & Sexual Health",
    eyebrow: 'Single doses · choice depends on time since UPSI',
    indication: 'Unprotected sex or contraceptive failure within last 5 days. Discuss all 3 options.',
    contraindications: 'UPA: severe asthma on oral steroids (relative). Avoid combined contraception 5 days before / 7 days after UPA.',
    duration: 'Single dose (oral options) or fitted device (Cu-IUD)',
    drugs: [
      { name:'Cu-IUD (copper coil)', dose:'1 device', freq:'Fit', route:'IU', days:'Up to 120 h after UPSI OR ≤ 5 days after earliest predicted ovulation — MOST EFFECTIVE' },
      { name:'Ulipristal acetate (ellaOne)', dose:'30 mg', freq:'Stat', route:'PO', days:'Up to 120 h after UPSI' },
      { name:'Levonorgestrel', dose:'1.5 mg', freq:'Stat', route:'PO', days:'Up to 72 h after UPSI · double to 3 mg if BMI > 26 or > 70 kg' },
    ],
    counselling: [
      "Cu-IUD is most effective (~99.9%). Offer to ALL women requesting EC, regardless of time since UPSI.",
      "UPA delays ovulation more effectively than LNG — preferred if > 72 h or close to ovulation.",
      "Restart hormonal contraception: LNG → next day; UPA → wait 5 days before starting/restarting CHC, POP, patch, ring, injection.",
      "Vomiting within 2 h of LNG or 3 h of UPA → repeat dose.",
      "Pregnancy test in 3 weeks if no period.",
      "Discuss ongoing contraception. Offer STI screen.",
    ],
    followUp: 'Pregnancy test 3 weeks after EC if no period. Review contraception choice. Consider STI screen.',
    redFlags: [
      'Pregnancy already established → EC not effective; counsel + refer EPAU if uncertain.',
      'Severe abdominal pain after Cu-IUD fit → exclude perforation / ectopic.',
    ],
    emisText: `Emergency contraception (UPSI within 120 h):
DISCUSS ALL 3 OPTIONS:
1. Cu-IUD — fit within 120 h; MOST EFFECTIVE; refer SRH same-day.
2. Ulipristal acetate (ellaOne) 30 mg PO STAT — within 120 h.
3. Levonorgestrel 1.5 mg PO STAT — within 72 h (3 mg if BMI > 26 / > 70 kg).
Counsel: restart hormonal contraception 5 days after UPA / next day after LNG. Pregnancy test if no period in 3 wks. Offer STI screen.`,
    sources: [
      { label:'FSRH Emergency Contraception 2017 (amended 2023)', url:'https://www.fsrh.org/standards-and-guidance/documents/ceu-clinical-guidance-emergency-contraception-march-2017/' },
      { label:'NICE CKS Contraception (EC)', url:'https://cks.nice.org.uk/topics/contraception-emergency/' },
    ],
  },

  // ============================================
  // MIGRAINE — ACUTE
  // ============================================
  {
    id: 'migraine-acute',
    title: 'Migraine — acute attack',
    category: 'Neurology & Pain',
    eyebrow: 'Triptan + NSAID step-wise',
    indication: 'Adult with diagnosed migraine ± aura presenting with acute attack.',
    contraindications: 'Triptans: uncontrolled HTN, IHD, previous CVA, hemiplegic / basilar migraine, pregnancy (specialist). NSAID: peptic ulcer, CKD eGFR < 30, asthma if sensitive.',
    duration: 'Single attack — repeat triptan in 2 h if recurrence (max 2 doses / 24 h).',
    drugs: [
      { name:'Sumatriptan',    dose:'50–100 mg', freq:'Stat (repeat in 2 h if recurrence; max 300 mg/24 h)', route:'PO', days:'PRN attack' },
      { name:'Naproxen',       dose:'500 mg',    freq:'BD',  route:'PO', days:'2–3' },
      { name:'Metoclopramide', dose:'10 mg',     freq:'TDS PRN', route:'PO', days:'PRN nausea (max 5 days)' },
    ],
    altRegimens: [
      { label:'Sumatriptan non-responder', drugs:'Trial alternative triptan — rizatriptan 10 mg or zolmitriptan 2.5 mg or eletriptan 40 mg.' },
      { label:'Nasal route (vomiting)',    drugs:'Sumatriptan 10–20 mg nasal spray OR zolmitriptan 5 mg nasal spray.' },
      { label:'Pregnancy',                 drugs:'Paracetamol 1 g QDS + metoclopramide 10 mg TDS (avoid triptans, NSAIDs in 3rd trimester).' },
    ],
    counselling: [
      'Take triptan at the FIRST sign of pain — not aura.',
      'Combine triptan + NSAID for additive effect (NICE NG150).',
      'Avoid using > 10 days/month — risk of medication-overuse headache.',
      'Headache diary helps identify triggers and frequency.',
      'Avoid caffeine and reduce screen / stress triggers.',
    ],
    followUp: 'Review after 1 month — if ≥ 4 attacks/month or significant disability → start preventive therapy.',
    redFlags: [
      'Thunderclap, fever + neck stiffness, focal neuro, age > 50 with new headache → see Diagnostic Tool red-flag triage.',
      'Triptan use > 10 days/month → MOH risk; withdraw.',
    ],
    emisText: `Acute migraine treatment plan:
- Sumatriptan 50–100 mg PO STAT at onset; repeat in 2 h if recurrence (max 300 mg / 24 h).
- Naproxen 500 mg PO BD for 2–3 days.
- Metoclopramide 10 mg PO TDS PRN nausea (max 5 days).
COUNSEL: take triptan EARLY in attack; avoid > 10 days/month use (MOH risk); keep a headache diary; review in 4 wks.`,
    sources: [
      { label:'NICE CKS Migraine 2024', url:'https://cks.nice.org.uk/topics/migraine/' },
      { label:'NICE NG150 Headaches', url:'https://www.nice.org.uk/guidance/cg150' },
    ],
  },

  // ============================================
  // MIGRAINE — PREVENTIVE
  // ============================================
  {
    id: 'migraine-prevent',
    title: 'Migraine — preventive therapy',
    category: 'Neurology & Pain',
    eyebrow: 'First-line: propranolol or topiramate',
    indication: '≥ 4 attacks/month, significant disability, medication-overuse, or attacks lasting > 24 h.',
    contraindications: 'Propranolol: asthma, decompensated HF, AV block, peripheral vascular disease. Topiramate: pregnancy (teratogenic — use HIGHLY EFFECTIVE contraception), depression history, renal calculi.',
    duration: 'Trial for 3 months at target dose. Continue 6–12 months if effective, then trial withdrawal.',
    drugs: [
      { name:'Propranolol (preferred)', dose:'40 mg BD → titrate to 80 mg BD over 4–6 wks', freq:'BD', route:'PO', days:'≥ 3 months' },
      { name:'Topiramate (2nd line)',   dose:'Start 25 mg ON; titrate weekly to 50 mg BD', freq:'BD', route:'PO', days:'≥ 3 months' },
      { name:'Amitriptyline (3rd line / mixed migraine + tension)', dose:'10 mg ON; titrate to 25–75 mg ON', freq:'ON', route:'PO', days:'≥ 3 months' },
    ],
    altRegimens: [
      { label:'Pregnancy / planning pregnancy', drugs:'Propranolol 40 mg BD (cat C2). Avoid topiramate, amitriptyline (specialist).' },
      { label:'Menstrual migraine — perimenstrual', drugs:'Frovatriptan 2.5 mg BD or zolmitriptan 2.5 mg BD or naproxen 250–500 mg BD on days -2 to +3 of period.' },
      { label:'Refractory (≥ 4 fails)', drugs:'Refer neurology for CGRP monoclonal antibody (erenumab / fremanezumab) per NICE TA682/TA764.' },
    ],
    counselling: [
      'Propranolol: take at same time daily; effect builds over 4–6 weeks.',
      'Topiramate: paraesthesia, weight loss, cognitive slowing are common. AVOID PREGNANCY — use highly effective contraception.',
      'Keep a headache diary — aim ≥ 50% reduction in frequency.',
      'Lifestyle: regular sleep, hydration, meals, exercise. Avoid known triggers.',
    ],
    followUp: 'Review at 3 months: if ≥ 50% reduction in attack frequency → continue 6–12 months then trial withdrawal. If not → switch class.',
    redFlags: [
      'Topiramate + pregnancy → cleft lip/palate, neural tube defects. Pregnancy Prevention Programme required.',
      'Propranolol + asthma → bronchospasm.',
    ],
    emisText: `Migraine prevention (≥ 4 attacks/month):
1st line: Propranolol 40 mg PO BD; titrate to 80 mg BD over 4–6 wks. Trial ≥ 3 months.
2nd line: Topiramate 25 mg ON; titrate weekly to 50 mg BD. PREGNANCY: highly-effective contraception required.
3rd line: Amitriptyline 10–75 mg ON.
COUNSEL: review at 3 months; aim ≥ 50% reduction; keep diary; lifestyle measures.`,
    sources: [
      { label:'NICE CKS Migraine 2024 — Prophylaxis', url:'https://cks.nice.org.uk/topics/migraine/management/migraine-prophylaxis/' },
      { label:'NICE NG150', url:'https://www.nice.org.uk/guidance/cg150' },
      { label:'MHRA Topiramate pregnancy warning 2024', url:'https://www.gov.uk/government/publications/topiramate-introduction-of-new-safety-measures' },
    ],
  },

  // ============================================
  // GOUT — ACUTE
  // ============================================
  {
    id: 'gout-acute',
    title: 'Gout — acute flare',
    category: 'Musculoskeletal & Rheumatology',
    eyebrow: 'NSAID or colchicine; steroid if both unsuitable',
    indication: 'Acute monoarthritis (typically 1st MTP, midfoot, ankle, knee) with rapid onset, erythema, swelling.',
    contraindications: 'NSAID: CKD eGFR < 30, peptic ulcer, HF, anticoag, elderly frail. Colchicine: eGFR < 10, severe hepatic impairment, drug interactions (clarithromycin, ciclosporin, statins).',
    duration: 'Until flare settles — usually 3–7 days. Continue allopurinol/febuxostat if already established.',
    drugs: [
      { name:'Naproxen (preferred if no CI)', dose:'500 mg BD × 5–7 days', freq:'BD', route:'PO', days:'5–7' },
      { name:'+ PPI (lansoprazole)',           dose:'15–30 mg OD',          freq:'OD', route:'PO', days:'During NSAID' },
      { name:'Colchicine (alt to NSAID)',      dose:'500 µg BD–QDS (max 6 mg/course)', freq:'BD–QDS', route:'PO', days:'Until flare settles' },
      { name:'Prednisolone (alt if both CI)',  dose:'30 mg OD × 5 days', freq:'OD', route:'PO', days:'5' },
    ],
    altRegimens: [
      { label:'CKD eGFR 30–59', drugs:'Colchicine 500 µg BD (reduce frequency). Avoid NSAID if eGFR < 30.' },
      { label:'Anticoagulated / peptic ulcer', drugs:'Colchicine 500 µg BD–QDS OR prednisolone 30 mg OD × 5 days. Skip NSAID.' },
      { label:'Septic joint suspected', drugs:'Do NOT inject steroid. Same-day orthopaedic referral for joint aspiration.' },
    ],
    counselling: [
      'NSAID: take with food; stop if dyspepsia or oedema. PPI cover for ≥ 65 or risk factors.',
      'Colchicine: stop immediately if diarrhoea/vomiting — common at higher doses.',
      'Ice pack to affected joint. Rest until acute pain settles.',
      'Avoid alcohol (especially beer), high-purine foods (red meat, shellfish, offal), sugary drinks.',
      'Hydration: aim 2 L/day water.',
      'If on allopurinol/febuxostat: DO NOT STOP during flare.',
    ],
    followUp: '4–6 weeks after flare settles → check urate (target < 360 µmol/L; < 300 if tophi). Initiate / titrate allopurinol if recurrent / tophi / urate stones / CKD / urate > 600.',
    redFlags: [
      'Fever + hot joint + raised inflammatory markers → ?septic arthritis. Same-day orthopaedic referral, aspirate before starting antibiotics.',
      'Bilateral / migratory joint involvement → consider pseudogout / reactive arthritis / RA.',
    ],
    emisText: `Acute gout flare:
- Naproxen 500 mg PO BD × 5–7 days
- Lansoprazole 30 mg PO OD (gastric cover)
- Ice, rest, hydrate, avoid alcohol/purines.
If NSAID contraindicated: Colchicine 500 µg BD–QDS until settled (max 6 mg/course) OR Prednisolone 30 mg PO OD × 5 days.
DO NOT STOP allopurinol if established. Check urate 4–6 wks after flare.`,
    sources: [
      { label:'NICE CKS Gout 2024', url:'https://cks.nice.org.uk/topics/gout/' },
      { label:'BSR Gout guideline 2017', url:'https://academic.oup.com/rheumatology/article/56/7/e1/3855128' },
    ],
  },

  // ============================================
  // GOUT — PROPHYLAXIS
  // ============================================
  {
    id: 'gout-prophylaxis',
    title: 'Gout — urate-lowering prophylaxis',
    category: 'Musculoskeletal & Rheumatology',
    eyebrow: 'Allopurinol (1st line); febuxostat (2nd)',
    indication: 'Recurrent gout (≥ 2 attacks/year), tophi, urate stones, CKD ≥ stage 3, urate > 600 µmol/L, or one severe flare. Start 2–4 weeks AFTER acute flare settles.',
    contraindications: 'Allopurinol: HLA-B*5801 positive (Chinese / Thai / Korean — test before starting) → high risk SCAR. Avoid azathioprine concurrent.',
    duration: 'Lifelong once started (urate-lowering therapy is for life).',
    drugs: [
      { name:'Allopurinol', dose:'Start 100 mg OD (50 mg if eGFR < 60); titrate by 100 mg every 4 weeks (aim 200–600 mg OD)', freq:'OD', route:'PO', days:'Lifelong' },
      { name:'Colchicine cover',  dose:'500 µg OD–BD',  freq:'OD–BD', route:'PO', days:'First 3–6 months while titrating' },
      { name:'OR Naproxen cover', dose:'250 mg BD + PPI', freq:'BD',  route:'PO', days:'First 3–6 months while titrating' },
    ],
    altRegimens: [
      { label:'Allopurinol intolerance / failure', drugs:'Febuxostat 80 mg OD; titrate to 120 mg OD after 4 weeks if urate not at target. AVOID in IHD / HF.' },
      { label:'CKD eGFR 30–60', drugs:'Allopurinol start 50 mg OD; titrate slowly; reduce max dose. Monitor U&E + LFTs.' },
      { label:'CKD eGFR < 30', drugs:'Specialist input. Reduced allopurinol doses; febuxostat 40 mg OD with caution.' },
    ],
    counselling: [
      'Continue allopurinol DURING gout flares — never stop.',
      'Target serum urate: < 360 µmol/L (< 300 if tophi).',
      'Allopurinol hypersensitivity = rash + fever + eosinophilia + organ involvement — STOP immediately, urgent review.',
      'Cover during titration prevents flares — take colchicine / NSAID for 3–6 months.',
      'Lifestyle: lose weight if BMI > 25, hydrate well, reduce alcohol (especially beer), oily fish OK, low-fat dairy protective.',
    ],
    followUp: 'Check serum urate + U&E every 4 weeks during titration. Once at target → annual review.',
    redFlags: [
      'Allopurinol hypersensitivity syndrome (SCAR / DRESS / SJS) — rash + systemic features → STOP, urgent admission.',
      'Persistent flares despite urate < 360 → reconsider diagnosis or refer rheumatology.',
    ],
    emisText: `Urate-lowering therapy (chronic gout):
1st line: Allopurinol 100 mg PO OD (50 mg if eGFR < 60). Titrate by 100 mg every 4 wks. Target serum urate < 360 µmol/L (< 300 if tophi).
Flare prophylaxis: Colchicine 500 µg PO OD–BD × 3–6 months while titrating.
DO NOT STOP allopurinol during flares.
Check urate + U&E every 4 wks until at target, then annual.
Counsel: lifelong therapy; lifestyle (alcohol, weight, hydration); rash → STOP and review.`,
    sources: [
      { label:'NICE CKS Gout 2024 — Prophylaxis', url:'https://cks.nice.org.uk/topics/gout/management/long-term-management/' },
      { label:'NICE NG219 Gout', url:'https://www.nice.org.uk/guidance/ng219' },
    ],
  },

  // ============================================
  // POSTPONE MENSTRUATION
  // ============================================
  {
    id: 'postpone-menses',
    title: 'Postponing menstruation',
    category: "Women's & Sexual Health",
    eyebrow: 'Norethisterone — start 3 days before expected period',
    indication: 'Patient wants to delay menstruation for travel, exam, holiday, sport, religious event etc.',
    contraindications: 'History of VTE / clot / known thrombophilia / active liver disease. Caution in obesity, smokers > 35, migraine with aura, hypertension, breast cancer. Consider risk-benefit if BMI ≥ 30, > 35 + smoker, FH VTE.',
    duration: 'Up to 17 days. Period will arrive 2–3 days after stopping.',
    drugs: [
      { name:'Norethisterone', dose:'5 mg', freq:'TDS', route:'PO', days:'Start 3 days BEFORE expected period; continue until happy for period to start (max 17 days).' },
    ],
    altRegimens: [
      { label:'Woman on COCP', drugs:'Tricycle / continuous pack: take 3 packs back-to-back without the 7-day break (skip the placebo / pill-free week). No norethisterone needed.' },
      { label:'Woman on POP', drugs:'POP does not need adjustment if amenorrhoeic. Otherwise consider switch / additional norethisterone short-term.' },
      { label:'Long event (> 17 days)', drugs:'Refer SRH for tailored regimen. Norethisterone > 17 days increases VTE risk and is off-licence.' },
    ],
    counselling: [
      'Take 3 days BEFORE your expected period to be effective.',
      'Period will arrive 2–3 days after you stop the tablets — plan accordingly.',
      'Norethisterone is NOT a contraceptive — continue your usual method.',
      'Side effects: breast tenderness, mood changes, bloating, breakthrough bleeding.',
      'Stop and seek urgent review if: calf pain, breathlessness, chest pain, severe headache, visual changes → ?VTE / stroke.',
      'If you smoke and are ≥ 35, BMI ≥ 30, or have FH VTE — discuss benefits/risks first.',
    ],
    followUp: 'Routine review only if recurrent need (consider underlying menstrual issue — HMB / endometriosis). Consider continuous CHC if regular need.',
    redFlags: [
      'New leg swelling / calf pain → ?DVT — same-day assessment.',
      'Sudden SOB / chest pain → ?PE — call 999.',
      'New severe headache / focal neuro / visual changes → STOP, urgent review.',
    ],
    emisText: `Postponing menstruation:
- Norethisterone 5 mg PO TDS, start 3 days BEFORE expected period; continue until happy for period to begin (max 17 days).
- Period will arrive 2–3 days after stopping.
- NOT a contraceptive — continue usual method.
- Stop and seek review if: calf pain / chest pain / SOB / severe headache (?VTE).
Off-licence if > 17 days. Consider alternatives (continuous CHC pack) if on COCP.`,
    sources: [
      { label:'NICE CKS Menstruation — postponing', url:'https://cks.nice.org.uk/topics/menstruation-postponing/' },
      { label:'FSRH Combined Hormonal Contraception 2019', url:'https://www.fsrh.org/standards-and-guidance/' },
    ],
  },

  // ============================================
  // SHINGLES
  // ============================================
  {
    id: 'shingles',
    title: 'Shingles (herpes zoster)',
    category: 'Dermatology',
    eyebrow: 'Antiviral within 72 h of rash',
    indication: 'Adult with characteristic unilateral dermatomal vesicular rash + neuropathic pain. Start ASAP — ideally within 72 h of rash onset.',
    contraindications: 'Renal impairment — dose-adjust antivirals (eGFR < 50 reduce dose). Pregnancy: aciclovir is preferred; specialist input if disseminated.',
    duration: 'Antiviral 7 days. Pain management may continue weeks.',
    drugs: [
      { name:'Aciclovir', dose:'800 mg', freq:'5×/day (every 4 h waking)', route:'PO', days:'7' },
      { name:'OR Valaciclovir', dose:'1 g', freq:'TDS', route:'PO', days:'7' },
      { name:'OR Famciclovir', dose:'500 mg', freq:'TDS', route:'PO', days:'7' },
      { name:'Paracetamol + ibuprofen', dose:'1 g / 400 mg', freq:'QDS / TDS', route:'PO', days:'Pain control · review at 5 days' },
      { name:'Amitriptyline', dose:'10–25 mg', freq:'ON', route:'PO', days:'If severe / neuropathic pain — titrate weekly to 75 mg' },
    ],
    altRegimens: [
      { label:'eGFR 30–49',     drugs:'Aciclovir 800 mg QDS × 7 days (frequency reduced).' },
      { label:'eGFR 10–29',     drugs:'Aciclovir 800 mg BD × 7 days.' },
      { label:'Pregnancy',      drugs:'Aciclovir 800 mg 5×/day × 7 days — safer profile than valaciclovir/famciclovir.' },
      { label:'Immunocompromised / disseminated', drugs:'⚡ Same-day medical admission for IV aciclovir.' },
    ],
    counselling: [
      'Antivirals are most effective if started within 72 h of rash — but consider up to 1 week if new lesions still forming or systemic.',
      'Cover lesions; avoid contact with pregnant women, neonates, immunocompromised.',
      'Pain may persist after rash heals (post-herpetic neuralgia) — review at 3 months.',
      'Hygiene: do not share towels; wash hands.',
      'Vaccine: shingrix offered at age 70–80 — discuss after recovery.',
    ],
    followUp: 'Review at 5 days for pain control. At 4 weeks for PHN (consider amitriptyline / gabapentin if persistent pain).',
    redFlags: [
      'Ophthalmic shingles (V1 distribution / Hutchinson sign / eye involvement) → ⚡ same-day ophthalmology.',
      'Ramsay-Hunt (facial palsy + ear vesicles) → ⚡ ENT same-day, prednisolone + antiviral.',
      'Disseminated rash / immunocompromised → ⚡ medical admission.',
      'Severe / refractory pain at 4 weeks → consider gabapentin 300 mg ON titrating up; refer pain clinic.',
    ],
    emisText: `Shingles (herpes zoster):
- Aciclovir 800 mg PO 5×/day × 7 days (within 72 h of rash) OR Valaciclovir 1 g TDS × 7 OR Famciclovir 500 mg TDS × 7.
- Pain: paracetamol 1 g QDS + ibuprofen 400 mg TDS PRN. Add amitriptyline 10–25 mg ON if neuropathic.
- Cover lesions; avoid pregnant women / neonates / immunocompromised.
- Ophthalmic / Ramsay-Hunt / immunocompromised → same-day specialist.
- Review at 5 days for pain; 4 wks for PHN.`,
    sources: [
      { label:'NICE CKS Shingles 2024', url:'https://cks.nice.org.uk/topics/shingles/' },
      { label:'NICE NG173 Shingles & PHN', url:'https://www.nice.org.uk/guidance/cg173' },
    ],
  },

  // ============================================
  // COLD SORE
  // ============================================
  {
    id: 'cold-sore',
    title: 'Cold sore (herpes labialis)',
    category: 'Dermatology',
    eyebrow: 'Topical aciclovir within 48 h of prodrome',
    indication: 'Recurrent oral herpes simplex. Most cases self-limiting (~7–10 days). Antivirals shorten illness by 1–2 days if started early (tingling / prodrome).',
    contraindications: 'Renal impairment — dose-adjust oral antivirals. Pregnancy: topical safe.',
    duration: 'Topical: 5 days. Oral (severe / immunocompromised): 5–7 days.',
    drugs: [
      { name:'Aciclovir 5% cream',     dose:'Apply', freq:'5×/day', route:'Topical', days:'5 — start at prodrome' },
      { name:'OR Penciclovir 1% cream',dose:'Apply', freq:'Every 2 h while awake', route:'Topical', days:'4' },
    ],
    altRegimens: [
      { label:'Severe / frequent recurrence', drugs:'Aciclovir 200–400 mg PO 5×/day × 5 days (started at prodrome).' },
      { label:'Immunocompromised',            drugs:'Aciclovir 400 mg PO 5×/day × 7 days. Consider prophylaxis 400 mg BD.' },
      { label:'Eczema herpeticum (vesicles on eczema)', drugs:'⚡ Same-day admission. Aciclovir IV 5 mg/kg TDS.' },
    ],
    counselling: [
      'Topical creams are most effective if started at the tingling / prodrome stage.',
      'Do not share towels, cutlery, lip balm; avoid kissing / oral sex during outbreaks.',
      'Vesicles → crust → resolves over 7–10 days even without treatment.',
      'Avoid touching eyes — herpetic keratitis is sight-threatening.',
      'Sun + stress are common triggers — SPF lip balm.',
    ],
    followUp: 'No routine review needed. Consider suppression if > 6 episodes/year.',
    redFlags: [
      'Eye involvement (red eye / pain) → ⚡ same-day ophthalmology — herpetic keratitis.',
      'Eczema herpeticum → ⚡ medical admission.',
      'No improvement at 2 weeks → reconsider diagnosis / impetigo / oral cancer (esp. age > 50).',
    ],
    emisText: `Cold sore (HSV-1 labialis):
- Aciclovir 5% cream 5×/day × 5 days, started at prodrome (tingling) OR
- Penciclovir 1% cream every 2 h × 4 days.
For severe / immunocompromised: Aciclovir 200–400 mg PO 5×/day × 5 days.
Counsel: SPF lip balm, do not share utensils, avoid touching eyes.
Eye involvement → same-day ophthalmology (?keratitis).`,
    sources: [
      { label:'NICE CKS Herpes simplex — oral 2024', url:'https://cks.nice.org.uk/topics/herpes-simplex-oral/' },
    ],
  },

  // ============================================
  // ORAL CANDIDIASIS
  // ============================================
  {
    id: 'oral-candidiasis',
    title: 'Oral candidiasis (thrush)',
    category: 'ENT & Eyes',
    eyebrow: 'Miconazole gel 1st line; fluconazole if extensive',
    indication: 'White plaques on tongue / palate / buccal mucosa wiping to leave erythema; or angular cheilitis; or denture stomatitis. Risk factors: ICS, antibiotics, dentures, DM, immunosuppression, age.',
    contraindications: 'Miconazole gel: warfarin (potentiates — INR rise), statins (rhabdomyolysis risk). Fluconazole: warfarin, statins, terfenadine, cisapride.',
    duration: 'Topical 7–14 days. Oral fluconazole 7–14 days.',
    drugs: [
      { name:'Miconazole 2% oral gel', dose:'2.5 mL (½ tsp)', freq:'QDS', route:'Topical (held in mouth before swallow)', days:'7–14 (continue 48 h after symptoms resolve)' },
      { name:'OR Nystatin suspension 100,000 units/mL', dose:'1 mL', freq:'QDS', route:'Topical', days:'7' },
    ],
    altRegimens: [
      { label:'Severe / extensive / immunocompromised', drugs:'Fluconazole 50 mg PO OD × 7–14 days (50 mg only if normal LFTs; ↑ to 100 mg OD if needed).' },
      { label:'Denture stomatitis', drugs:'Miconazole gel QDS + denture hygiene (clean nightly, soak in chlorhexidine 0.2% or sodium hypochlorite; leave out at night).' },
      { label:'Angular cheilitis', drugs:'Miconazole 2% cream (Daktarin) BD × 10 days; check FBC + ferritin + B12.' },
      { label:'Inhaled corticosteroid related', drugs:'Treat with miconazole + reinforce: rinse mouth after each ICS dose, use spacer.' },
    ],
    counselling: [
      'Hold the gel in your mouth as long as possible before swallowing.',
      'Brush teeth gently with soft brush.',
      'Soft-bristle toothbrush; replace after symptoms resolve.',
      'If on inhaled steroids: rinse mouth + use spacer + brush teeth after every dose.',
      'Sterilise dummies / bottles / dentures.',
      'Underlying cause if recurrent: HbA1c, HIV test (if other features), nutritional bloods.',
    ],
    followUp: 'Review at 2 weeks if not improved. Investigate underlying cause if recurrent (HbA1c, ferritin, B12, folate, HIV testing if risk).',
    redFlags: [
      'Recurrent unexplained thrush in non-immunocompromised adult → offer HIV testing.',
      'Persistent oral white patches NOT scraping off → ?leucoplakia / dysplasia → 2WW oral cancer.',
      'Dysphagia / odynophagia → ?oesophageal candidiasis → upper GI endoscopy, consider HIV testing.',
    ],
    emisText: `Oral candidiasis (thrush):
- Miconazole 2% oral gel 2.5 mL (½ tsp) QDS held in mouth × 7–14 days (continue 48 h after resolved) OR
- Nystatin suspension 1 mL QDS × 7 days.
Severe / immunocompromised: Fluconazole 50 mg PO OD × 7–14 days.
CAUTION miconazole: interacts with warfarin (raises INR) + statins.
Counsel: if ICS — rinse mouth, use spacer. Treat denture stomatitis with hygiene + gel. Investigate cause if recurrent (HbA1c, HIV, bloods).`,
    sources: [
      { label:'NICE CKS Candida — oral 2024', url:'https://cks.nice.org.uk/topics/candida-oral/' },
      { label:'BNF — Antifungals', url:'https://bnf.nice.org.uk/treatment-summaries/antifungals-systemic-use/' },
    ],
  },

];

window.RGP_PRESCRIPTION_CATEGORIES = [
  'All',
  'Gastroenterology',
  'Urology & Renal',
  "Women's & Sexual Health",
  'Dermatology',
  'ENT & Eyes',
  'Neurology & Pain',
  'Musculoskeletal & Rheumatology',
  'Mental Health',
];
