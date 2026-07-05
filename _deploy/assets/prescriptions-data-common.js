/* ============================================
   Reasoning GP — Ready Prescriptions (extra batch 3)
   GI · women's health · pain · allergy · mental health.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);

  RX.push(
  // ---------------- GORD / dyspepsia ----------------
  {
    id: 'gord-dyspepsia',
    title: 'GORD / uninvestigated dyspepsia',
    category: 'Gastroenterology',
    eyebrow: 'PPI 4–8 weeks · lifestyle · test-and-treat H. pylori',
    indication: 'Reflux / dyspepsia without ALARM features. Lifestyle advice + full-dose PPI for 4–8 weeks, OR test-and-treat H. pylori. Review and step down.',
    contraindications: 'Exclude red flags first (dysphagia, weight loss, GI bleed, ≥55 with new/persistent symptoms → 2WW OGD). PPI: caution long-term (B12, Mg, fracture, C. diff).',
    duration: '4–8 weeks then review/step-down',
    drugs: [
      { name: 'Omeprazole (or lansoprazole)', dose: '20 mg (lanso 30 mg)', freq: 'OD', route: 'PO', days: '4–8 weeks' },
      { name: 'Step-down: lowest effective dose / PRN', dose: '10–20 mg', freq: 'OD or PRN', route: 'PO', days: 'Maintenance' },
      { name: 'Alginate (e.g. Gaviscon)', dose: '10–20 mL', freq: 'After meals & ON', route: 'PO', days: 'PRN' },
    ],
    altRegimens: [
      { label: 'H. pylori positive', drugs: 'Eradication therapy (see H. pylori 1st-line card); retest only if relapse.' },
      { label: 'Refractory after 8 weeks full-dose PPI', drugs: 'Confirm adherence/lifestyle; consider H2RA (famotidine) add-on; review for OGD if persistent/alarm.' },
      { label: 'Pregnancy', drugs: 'Lifestyle + alginate first; omeprazole if needed (well-established safety).' },
    ],
    counselling: [
      'Lifestyle: lose weight if overweight, smaller meals, avoid late eating, reduce alcohol/caffeine/fatty foods, stop smoking, raise the head of the bed.',
      'Take the PPI 30–60 minutes before breakfast.',
      'Aim to step down to the lowest dose that controls symptoms / use as-needed.',
      'Return if difficulty swallowing, unintentional weight loss, vomiting, or black stools.',
    ],
    followUp: 'Review at 4–8 weeks; step down. Annual review if on long-term PPI. Persistent/relapsing → consider OGD / H. pylori test.',
    redFlags: [
      'Dysphagia, weight loss, GI bleeding/anaemia, persistent vomiting, epigastric mass, ≥55 with new dyspepsia → 2WW upper GI.',
    ],
    emisText: `GORD / uninvestigated dyspepsia (no alarm features):
- Lifestyle advice + Omeprazole 20 mg (or lansoprazole 30 mg) OD × 4–8 weeks; take before breakfast. OR test-and-treat H. pylori.
- Alginate PRN. Step down to lowest effective dose / PRN.
Safety-net/2WW: dysphagia, weight loss, GI bleed, vomiting, ≥55 new dyspepsia. Review long-term PPI annually.`,
    sources: [
      { label: 'NICE CG184 — Dyspepsia & GORD', url: 'https://www.nice.org.uk/guidance/cg184' },
      { label: 'NICE CKS — Dyspepsia', url: 'https://cks.nice.org.uk/topics/dyspepsia-unidentified-cause/' },
    ],
  },

  // ---------------- Constipation ----------------
  {
    id: 'constipation-adult',
    title: 'Constipation (adult)',
    category: 'Gastroenterology',
    eyebrow: 'Laxative ladder · lifestyle first',
    indication: 'Primary constipation without red flags. Lifestyle measures + laxative ladder (bulk-forming → osmotic → stimulant). Review medications.',
    contraindications: 'Bulk-forming: avoid if opioid-induced / impaction / poor fluid intake. Exclude obstruction. Stimulants: avoid in suspected obstruction.',
    duration: 'Until regular soft stools; taper',
    drugs: [
      { name: 'Bulk-forming: Ispaghula husk (Fybogel)', dose: '1 sachet', freq: 'BD', route: 'PO', days: 'With plenty of fluid' },
      { name: 'Osmotic: Macrogol (Movicol)', dose: '1–3 sachets', freq: 'OD–TDS', route: 'PO', days: 'Titrate to effect' },
      { name: 'Stimulant: Senna', dose: '7.5–15 mg', freq: 'ON', route: 'PO', days: 'Add if stools soft but hard to pass' },
    ],
    altRegimens: [
      { label: 'Opioid-induced', drugs: 'Avoid bulk-forming. Osmotic (macrogol) + stimulant (senna); consider naloxegol if refractory.' },
      { label: 'Faecal impaction with overflow', drugs: 'High-dose macrogol disimpaction regimen (escalating over days) then maintenance.' },
      { label: 'Pregnancy', drugs: 'Bulk-forming first; then osmotic (lactulose/macrogol); senna short-term if needed.' },
    ],
    counselling: [
      'Increase fibre gradually, drink more fluid, and stay active.',
      'Bulk-forming laxatives need plenty of water and take a few days to work.',
      'Macrogol: dissolve in water; titrate the dose up or down to achieve soft, easy stools.',
      'Don\u2019t ignore the urge to go; consider a footstool to aid posture.',
      'Return if no bowel movement with abdominal pain/vomiting/distension, blood in stool, or unexplained change in bowel habit.',
    ],
    followUp: 'Review response; taper laxatives gradually once regular. Persistent/new change ≥60 or red flags → investigate.',
    redFlags: [
      'New change in bowel habit ≥60, rectal bleeding, weight loss, abdominal/rectal mass, iron-deficiency anaemia → 2WW colorectal.',
      'Vomiting + distension + no flatus → obstruction (admit).',
    ],
    emisText: `Constipation (no red flags):
- Lifestyle: fibre, fluids, activity.
- Laxative ladder: Ispaghula (Fybogel) 1 sachet BD → Macrogol (Movicol) 1–3 sachets/day (titrate) → add Senna 7.5–15 mg ON.
- Opioid-induced: avoid bulk-forming; macrogol + senna.
Safety-net/2WW: new change ≥60, bleeding, weight loss, mass, IDA. Taper once regular.`,
    sources: [
      { label: 'NICE CKS — Constipation', url: 'https://cks.nice.org.uk/topics/constipation/' },
    ],
  },

  // ---------------- Threadworm ----------------
  {
    id: 'threadworm',
    title: 'Threadworm (enterobiasis)',
    category: 'Gastroenterology',
    eyebrow: 'Mebendazole + treat whole household · hygiene',
    indication: 'Perianal itch (worse at night) ± visible worms. Treat the whole household at the same time and combine with rigorous hygiene measures.',
    contraindications: 'Mebendazole: avoid in pregnancy (esp. 1st trimester) and <6 months — use hygiene measures alone (6 weeks).',
    duration: 'Single dose, repeat after 2 weeks',
    drugs: [
      { name: 'Mebendazole', dose: '100 mg', freq: 'Stat (repeat after 2 weeks)', route: 'PO', days: 'Single dose ×2' },
      { name: 'Hygiene measures (all)', dose: '—', freq: 'Daily', route: '—', days: '2 weeks (6 if no drug)' },
    ],
    altRegimens: [
      { label: 'Pregnancy / <6 months', drugs: 'Hygiene measures alone for 6 weeks (no mebendazole).' },
    ],
    counselling: [
      'Treat everyone in the household on the same day, even without symptoms.',
      'Hygiene for 2 weeks: wash hands/scrub nails (especially after toilet and before food), keep nails short, discourage scratching/nail-biting.',
      'Wash bed linen, nightwear, and towels; damp-dust/vacuum bedrooms; daily morning shower/bath to remove eggs.',
      'Each person wears close-fitting underwear at night and changes it each morning.',
    ],
    followUp: 'No routine review; repeat dose at 2 weeks. Persistent → recheck adherence/hygiene; consider re-treatment.',
    redFlags: ['Atypical/persistent symptoms → reconsider diagnosis.'],
    emisText: `Threadworm:
- Mebendazole 100 mg PO stat, REPEAT after 2 weeks — treat WHOLE household same day.
- Pregnancy/<6 months: hygiene measures alone × 6 weeks.
- Hygiene (2 wks): handwashing/short nails, morning shower, wash linen/nightwear, no scratching.`,
    sources: [
      { label: 'NICE CKS — Threadworm', url: 'https://cks.nice.org.uk/topics/threadworm/' },
    ],
  },

  // ---------------- Haemorrhoids ----------------
  {
    id: 'haemorrhoids',
    title: 'Haemorrhoids',
    category: 'Gastroenterology',
    eyebrow: 'Fibre/fluids · short-term topical soothing',
    indication: 'Symptomatic haemorrhoids (bright bleeding on wiping, itch, discomfort, prolapse) after excluding sinister causes. Mainstay is lifestyle; topical preparations give short-term relief.',
    contraindications: 'Topical local-anaesthetic / steroid preparations: short-term use only (≤7 days steroid — skin atrophy/sensitisation). Always exclude colorectal cancer in ≥50/red flags.',
    duration: 'Topical ≤7 days; lifestyle ongoing',
    drugs: [
      { name: 'Bulk-forming laxative: Ispaghula', dose: '1 sachet', freq: 'BD', route: 'PO', days: 'Ongoing (soften stool)' },
      { name: 'Soothing: Lidocaine + soothing/astringent ointment', dose: 'Apply', freq: 'BD–QDS PRN', route: 'Topical', days: '≤7' },
      { name: 'Short-term: Topical steroid + local anaesthetic (e.g. Anusol-HC)', dose: 'Apply', freq: 'BD', route: 'Topical', days: '≤7' },
    ],
    altRegimens: [
      { label: 'Persistent / large / recurrent', drugs: 'Refer for rubber-band ligation / sclerotherapy / haemorrhoidectomy.' },
      { label: 'Thrombosed external pile (<72 h, severe pain)', drugs: 'Consider referral for evacuation; otherwise analgesia, ice, stool softeners (settles ~1–2 weeks).' },
    ],
    counselling: [
      'Increase fibre and fluids; avoid straining and prolonged sitting on the toilet; don\u2019t delay defecation.',
      'Keep the area clean and dry; use moist wipes; warm baths can soothe.',
      'Topical steroid creams are for short-term use only (up to a week).',
      'See your doctor if bleeding is dark/mixed with stool, there\u2019s a change in bowel habit, weight loss, or you\u2019re ≥50 — to exclude other causes.',
    ],
    followUp: 'Review if not settling or recurrent → consider outpatient procedures. Ensure colorectal cancer excluded where indicated.',
    redFlags: [
      'Rectal bleeding ≥50, change in bowel habit, weight loss, iron-deficiency anaemia, mass → 2WW colorectal.',
      'Severe pain + irreducible prolapse / strangulation → urgent surgical.',
    ],
    emisText: `Haemorrhoids (after excluding sinister causes):
- Fibre + fluids; avoid straining/prolonged toilet sitting; anal hygiene.
- Bulk-forming laxative (ispaghula BD) to soften stool.
- Short-term topical soothing ± steroid/local-anaesthetic (e.g. Anusol-HC) BD ≤7 days.
- Persistent/large → banding/surgery referral.
Safety-net/2WW: bleeding ≥50, change in habit, weight loss, IDA, mass.`,
    sources: [
      { label: 'NICE CKS — Haemorrhoids', url: 'https://cks.nice.org.uk/topics/haemorrhoids/' },
    ],
  },

  // ---------------- Acute gastroenteritis / diarrhoea ----------------
  {
    id: 'gastroenteritis',
    title: 'Acute gastroenteritis / diarrhoea',
    category: 'Gastroenterology',
    eyebrow: 'Rehydration · antibiotics rarely needed',
    indication: 'Acute infective diarrhoea ± vomiting. Mainstay is fluid/electrolyte replacement; most are self-limiting and viral. Antibiotics only for specific bacterial/parasitic causes.',
    contraindications: 'Avoid antimotility agents (loperamide) if bloody diarrhoea/fever (dysentery) or possible C. difficile. Avoid empirical antibiotics for routine cases.',
    duration: 'Supportive; usually self-limiting (days)',
    drugs: [
      { name: 'Oral rehydration salts (Dioralyte)', dose: 'As directed', freq: 'After each loose stool', route: 'PO', days: 'Until recovered' },
      { name: 'Loperamide (non-dysenteric only)', dose: '4 mg then 2 mg after each loose stool', freq: 'PRN (max 16 mg/day)', route: 'PO', days: 'Short-term symptom relief' },
      { name: 'Antiemetic if needed: e.g. ondansetron/metoclopramide', dose: 'Standard', freq: 'PRN', route: 'PO', days: 'Short-term' },
    ],
    altRegimens: [
      { label: 'Confirmed/strongly suspected specific cause', drugs: 'Targeted antibiotics per stool culture/advice (e.g. metronidazole for giardia; azithromycin for invasive Campylobacter/traveller\u2019s if severe).' },
      { label: 'Traveller\u2019s diarrhoea (severe)', drugs: 'Consider single-dose azithromycin per travel-medicine guidance; rehydration mainstay.' },
    ],
    counselling: [
      'Drink small, frequent sips of fluid / oral rehydration salts; continue eating as tolerated.',
      'Strict hand hygiene; do not prepare food for others; stay off work/school until 48 h after the last episode.',
      'Avoid anti-diarrhoeal tablets if there is blood in the stool or a high fever.',
      'Seek help with signs of dehydration (reduced urine, dizziness), blood in stool, high fever, or symptoms >7 days.',
    ],
    followUp: 'No routine review. Notify/stool sample if: blood/mucus, recent travel, systemically unwell, immunocompromised, food-handler, suspected outbreak.',
    redFlags: [
      'Dehydration / shock, bloody diarrhoea + fever, severe abdominal pain → urgent assessment.',
      'Recent hospital/antibiotics + diarrhoea → test for C. difficile.',
    ],
    emisText: `Acute gastroenteritis / diarrhoea (mostly self-limiting):
- Oral rehydration (Dioralyte) after each loose stool; continue eating.
- Loperamide 4 mg then 2 mg/stool (max 16 mg/day) ONLY if non-bloody, no fever.
- Hand hygiene; off work/school until 48 h after last episode.
Stool sample if blood/mucus, travel, systemic illness, immunocompromised, food-handler. Antibiotics only for specific causes.
Safety-net: dehydration, bloody diarrhoea + fever → urgent.`,
    sources: [
      { label: 'NICE CKS — Gastroenteritis', url: 'https://cks.nice.org.uk/topics/gastroenteritis/' },
    ],
  },

  // ---------------- IBS ----------------
  {
    id: 'ibs',
    title: 'Irritable bowel syndrome',
    category: 'Gastroenterology',
    eyebrow: 'Symptom-directed: antispasmodic / laxative / antimotility',
    indication: 'Positive IBS diagnosis (Rome/NICE) after excluding red flags + normal FBC/CRP/coeliac (± calprotectin). Treat by predominant symptom; dietary advice.',
    contraindications: 'Avoid lactulose in IBS (bloating). Loperamide caution if constipation-predominant. Review red flags before labelling IBS.',
    duration: 'PRN / ongoing; review',
    drugs: [
      { name: 'Pain/bloating: Mebeverine (antispasmodic)', dose: '135 mg', freq: 'TDS before meals', route: 'PO', days: 'PRN/ongoing' },
      { name: 'IBS-C: Macrogol (avoid lactulose)', dose: '1–2 sachets', freq: 'OD–BD', route: 'PO', days: 'Titrate' },
      { name: 'IBS-D: Loperamide', dose: '2 mg', freq: 'PRN after loose stool', route: 'PO', days: 'PRN' },
    ],
    altRegimens: [
      { label: 'Refractory pain / global symptoms', drugs: 'Low-dose tricyclic (amitriptyline 10 mg ON, titrate) as gut-brain neuromodulator; or SSRI 2nd line.' },
      { label: 'Diet', drugs: 'First-line dietary advice; if persistent → referral to dietitian for low-FODMAP under supervision.' },
    ],
    counselling: [
      'IBS is a genuine but benign disorder of gut–brain interaction — symptoms are real and manageable.',
      'General diet: regular meals, adequate fluids, limit caffeine/alcohol/fizzy drinks, adjust fibre (soluble may help), reduce resistant starch.',
      'Probiotics can be trialled for 4 weeks. Stress/exercise/sleep affect symptoms.',
      'Antispasmodics are taken before meals for cramping; take antidiarrhoeals/laxatives as needed for the predominant pattern.',
    ],
    followUp: 'Review response to symptom-directed therapy; consider tricyclic if persistent pain. Reassess diagnosis if new red-flag features.',
    redFlags: [
      'Weight loss, rectal bleeding, nocturnal symptoms, anaemia, FH bowel/ovarian cancer, age ≥60 change in habit → investigate / 2WW.',
      'Raised calprotectin → exclude IBD.',
    ],
    emisText: `IBS (positive diagnosis, red flags excluded):
- Dietary advice (regular meals, limit caffeine/alcohol, adjust fibre; consider low-FODMAP via dietitian).
- Pain/bloating: Mebeverine 135 mg TDS before meals. IBS-C: Macrogol (avoid lactulose). IBS-D: Loperamide PRN.
- Refractory: Amitriptyline 10 mg ON (titrate).
Safety-net: weight loss, bleeding, nocturnal/anaemia, ≥60 change in habit → investigate.`,
    sources: [
      { label: 'NICE CG61 — Irritable bowel syndrome', url: 'https://www.nice.org.uk/guidance/cg61' },
      { label: 'NICE CKS — IBS', url: 'https://cks.nice.org.uk/topics/irritable-bowel-syndrome/' },
    ],
  },

  // ---------------- Menorrhagia (HMB) ----------------
  {
    id: 'menorrhagia-medical',
    title: 'Heavy menstrual bleeding — medical',
    category: "Women's & Sexual Health",
    eyebrow: 'LNG-IUS 1st line · tranexamic / mefenamic acid',
    indication: 'Heavy menstrual bleeding affecting quality of life, no structural/histological cause requiring other treatment. Offer LNG-IUS first line; non-hormonal options for those who decline/awaiting.',
    contraindications: 'Tranexamic acid: history of VTE/thromboembolic disease. Mefenamic acid (NSAID): peptic ulcer, CKD, asthma sensitivity. COC: UKMEC contraindications.',
    duration: 'Cyclical (during periods) or device (LNG-IUS)',
    drugs: [
      { name: 'LNG-IUS (Mirena) — 1st line', dose: '1 device', freq: 'Fit', route: 'IU', days: 'Up to 8 years' },
      { name: 'Tranexamic acid (no dysmenorrhoea)', dose: '1 g', freq: 'TDS', route: 'PO', days: 'During heavy days (up to 4 days)' },
      { name: 'Mefenamic acid (if pain too)', dose: '500 mg', freq: 'TDS', route: 'PO', days: 'During period' },
    ],
    altRegimens: [
      { label: 'Wants contraception / cycle control', drugs: 'Combined hormonal contraception (if no UKMEC contraindication) or cyclical oral progestogen (norethisterone 5 mg TDS days 5–26).' },
      { label: 'Structural cause (fibroids/polyp) / treatment failure', drugs: 'Gynaecology referral (USS) for further options.' },
    ],
    counselling: [
      'Check FBC/ferritin and treat iron deficiency; the LNG-IUS is the most effective medical option and also gives contraception.',
      'Tranexamic and mefenamic acid are taken only during the heavy days of your period.',
      'It can take 3–6 months for the LNG-IUS to reduce bleeding (irregular spotting is common early).',
      'Return if bleeding between periods, after sex, or after the menopause — these need assessment.',
    ],
    followUp: 'Review at 3 months; if non-hormonal treatment ineffective after 3 cycles → reassess / refer. LNG-IUS — review bleeding pattern.',
    redFlags: [
      'Postmenopausal bleeding, persistent intermenstrual/post-coital bleeding, ≥45 with treatment failure → gynae 2WW / TV USS.',
    ],
    emisText: `Heavy menstrual bleeding (no sinister cause):
- 1st line: LNG-IUS (Mirena). Check FBC/ferritin, treat iron deficiency.
- Non-hormonal during periods: Tranexamic acid 1 g TDS (no dysmenorrhoea) OR Mefenamic acid 500 mg TDS (if pain).
- Alternatives: CHC or norethisterone 5 mg TDS days 5–26.
Safety-net/2WW: PMB, persistent IMB/PCB, ≥45 treatment failure → gynae + TV USS.`,
    sources: [
      { label: 'NICE NG88 — Heavy menstrual bleeding', url: 'https://www.nice.org.uk/guidance/ng88' },
      { label: 'NICE CKS — Menorrhagia', url: 'https://cks.nice.org.uk/topics/menorrhagia/' },
    ],
  },

  // ---------------- Primary dysmenorrhoea ----------------
  {
    id: 'dysmenorrhoea',
    title: 'Primary dysmenorrhoea',
    category: "Women's & Sexual Health",
    eyebrow: 'NSAID 1st line · ± hormonal contraception',
    indication: 'Primary dysmenorrhoea (painful periods, no underlying pathology). NSAID is first line; hormonal contraception if also wants contraception or NSAID insufficient.',
    contraindications: 'NSAID: peptic ulcer, CKD, asthma sensitivity. CHC: UKMEC contraindications (migraine with aura, VTE, etc.).',
    duration: 'During period (NSAID); ongoing (hormonal)',
    drugs: [
      { name: 'Mefenamic acid (or ibuprofen/naproxen)', dose: '500 mg (ibuprofen 400 mg)', freq: 'TDS', route: 'PO', days: 'From onset, through painful days' },
      { name: 'Combined hormonal contraception (if suitable)', dose: 'Standard', freq: 'Daily / cyclical', route: 'PO', days: 'Ongoing' },
      { name: 'Paracetamol (if NSAID unsuitable)', dose: '1 g', freq: 'QDS', route: 'PO', days: 'PRN' },
    ],
    altRegimens: [
      { label: 'NSAID + CHC insufficient / secondary features', drugs: 'Reassess for endometriosis/adenomyosis; consider LNG-IUS; gynaecology referral.' },
    ],
    counselling: [
      'Start the NSAID at the first sign of pain/bleeding and take regularly through the worst days — it works best taken early and with food.',
      'A local heat pad and regular exercise can help.',
      'Hormonal contraception both treats the pain and provides contraception if wanted.',
      'See your doctor if pain is getting worse, occurs outside periods, or with deep pain during sex — to check for other causes.',
    ],
    followUp: 'Review after 3–6 months. If not controlled or secondary features → consider USS / gynaecology.',
    redFlags: [
      'Pelvic pain between periods, deep dyspareunia, dyschezia, subfertility → endometriosis — consider referral.',
      'Severe acute pain + pregnancy possible → exclude ectopic/torsion.',
    ],
    emisText: `Primary dysmenorrhoea:
- Mefenamic acid 500 mg TDS (or ibuprofen 400 mg TDS / naproxen) from onset through painful days, with food.
- ± Combined hormonal contraception (if suitable / wants contraception). Heat pad, exercise.
Safety-net: pain between periods, deep dyspareunia, worsening → consider endometriosis / gynae referral.`,
    sources: [
      { label: 'NICE CKS — Dysmenorrhoea', url: 'https://cks.nice.org.uk/topics/dysmenorrhoea/' },
    ],
  },

  // ---------------- Mastitis (lactational) ----------------
  {
    id: 'mastitis',
    title: 'Lactational mastitis',
    category: "Women's & Sexual Health",
    eyebrow: 'Continue feeding · antibiotic if not settling/severe',
    indication: 'Breastfeeding woman with a painful, red, swollen breast segment. Effective milk removal is the key treatment; antibiotics if systemically unwell, nipple fissure, culture-positive, or not improving in 12–24 h.',
    contraindications: 'Penicillin allergy → erythromycin/clarithromycin. Avoid stopping breastfeeding (worsens stasis).',
    duration: '10–14 days antibiotic if used',
    drugs: [
      { name: 'Flucloxacillin', dose: '500 mg', freq: 'QDS', route: 'PO', days: '10–14' },
      { name: 'Penicillin allergy: Erythromycin', dose: '250–500 mg', freq: 'QDS', route: 'PO', days: '10–14' },
      { name: 'Analgesia: Paracetamol ± ibuprofen', dose: '1 g / 400 mg', freq: 'QDS / TDS', route: 'PO', days: 'PRN (both compatible with breastfeeding)' },
    ],
    altRegimens: [
      { label: 'Breast abscess (fluctuant mass)', drugs: 'Urgent referral for USS ± aspiration/drainage; antibiotics alone insufficient.' },
      { label: 'Not improving / culture-guided', drugs: 'Send breast-milk culture; review antibiotic choice; consider MRSA.' },
    ],
    counselling: [
      'Keep breastfeeding/expressing from the affected breast — effective milk removal is the most important treatment.',
      'Feed from the sore side first; vary positions; gentle massage toward the nipple; warm compress before feeds, cold after.',
      'Take regular paracetamol/ibuprofen (safe while breastfeeding); rest and fluids.',
      'Seek urgent review if you develop a high fever/rigors, a hard fluctuant lump (abscess), or feel very unwell.',
    ],
    followUp: 'Review in 24–48 h if antibiotics started. Persistent lump after resolution → exclude abscess / (if non-lactational/older) breast pathology.',
    redFlags: [
      'Fluctuant mass → abscess (USS/drainage).',
      'Non-lactational mastitis or persistent lump/skin change → consider inflammatory breast cancer (2WW if not resolving).',
    ],
    emisText: `Lactational mastitis:
- CONTINUE breastfeeding/expressing (effective milk removal is key) + analgesia (paracetamol ± ibuprofen).
- Antibiotic if systemically unwell / nipple fissure / not improving 12–24 h: Flucloxacillin 500 mg QDS × 10–14 days (pen-allergic: erythromycin).
Safety-net: fluctuant lump (abscess → USS/drainage); persistent lump/skin change → exclude malignancy.`,
    sources: [
      { label: 'NICE CKS — Mastitis & breast abscess', url: 'https://cks.nice.org.uk/topics/mastitis-breast-abscess/' },
    ],
  },

  // ---------------- Eczema flare ----------------
  {
    id: 'eczema-flare',
    title: 'Eczema (atopic) flare',
    category: 'Dermatology',
    eyebrow: 'Emollients + step-up topical steroid by potency/site',
    indication: 'Flare of atopic eczema. Generous emollients as the foundation + a topical corticosteroid matched to severity and body site for a short burst. Treat infection if present.',
    contraindications: 'Potent steroids: caution on face/flexures/children (use mild). Avoid long continuous potent steroid use (atrophy). Exclude eczema herpeticum.',
    duration: 'Steroid burst until flare controlled (then stop/step down)',
    drugs: [
      { name: 'Emollient (e.g. cream/ointment) + soap substitute', dose: 'Liberal/often', freq: 'Several times daily', route: 'Topical', days: 'Ongoing (continue between flares)' },
      { name: 'Mild steroid (Hydrocortisone 1%) — face/flexures', dose: 'Apply thin', freq: 'OD–BD', route: 'Topical', days: '5–7 then stop' },
      { name: 'Moderate/potent (e.g. Betamethasone valerate) — body/limbs', dose: 'Apply thin', freq: 'OD–BD', route: 'Topical', days: '7–14 then step down' },
    ],
    altRegimens: [
      { label: 'Infected (weeping/crusted/pustules)', drugs: 'Swab if needed; flucloxacillin 500 mg QDS × 5–7 days (pen-allergic: clarithromycin); ± antiseptic emollient.' },
      { label: 'Severe itch disturbing sleep', drugs: 'Short course sedating antihistamine at night (e.g. chlorphenamine) — not for daytime itch.' },
      { label: 'Recurrent flares same sites', drugs: 'Consider topical calcineurin inhibitor (tacrolimus) for face/flexures; "weekend" maintenance steroid; dermatology if uncontrolled.' },
    ],
    counselling: [
      'Apply emollients generously and frequently, even when the skin is clear — this is the mainstay and reduces flares.',
      'Apply the steroid thinly to active eczema only; use the fingertip-unit guide; steroids are safe in short bursts.',
      'Apply emollient and steroid a few minutes apart; emollients can make some products slippery/flammable — keep away from naked flames.',
      'Avoid soaps/bubble bath; identify and reduce triggers (heat, irritants, allergens).',
      'Seek urgent advice if painful clustered blisters / rapidly worsening (possible eczema herpeticum).',
    ],
    followUp: 'Review if not settling in 1–2 weeks, frequent flares, or growth concerns in children. Step down steroid as it improves.',
    redFlags: [
      'Eczema herpeticum (punched-out monomorphic vesicles, unwell, painful) → same-day aciclovir ± admission.',
      'Erythroderma / systemic illness → urgent.',
    ],
    emisText: `Atopic eczema flare:
- Emollients liberally + soap substitute (mainstay, continue between flares).
- Topical steroid burst by site: Hydrocortisone 1% (face/flexures) OD–BD × 5–7 days; moderate/potent (e.g. betamethasone valerate) for body/limbs × 7–14 days then step down.
- Infected: flucloxacillin 500 mg QDS × 5–7 days (pen-allergic clarithromycin).
Safety-net: eczema herpeticum (painful punched-out vesicles, unwell) → same-day aciclovir.`,
    sources: [
      { label: 'NICE CKS — Eczema (atopic)', url: 'https://cks.nice.org.uk/topics/eczema-atopic/' },
      { label: 'NICE CG57 — Atopic eczema in children', url: 'https://www.nice.org.uk/guidance/cg57' },
    ],
  },

  // ---------------- Allergic rhinitis / hay fever ----------------
  {
    id: 'allergic-rhinitis',
    title: 'Allergic rhinitis / hay fever',
    category: 'ENT & Eyes',
    eyebrow: 'Antihistamine ± intranasal corticosteroid',
    indication: 'Seasonal/perennial allergic rhinitis (sneezing, rhinorrhoea, itch, congestion ± eye symptoms). Step treatment by severity; allergen avoidance.',
    contraindications: 'Sedating antihistamines: avoid (driving/cognition) — use non-sedating. Intranasal steroid: caution with recent nasal surgery; correct technique.',
    duration: 'During exposure / seasonal',
    drugs: [
      { name: 'Non-sedating antihistamine (cetirizine/loratadine/fexofenadine)', dose: '10 mg (fexofenadine 120–180 mg)', freq: 'OD', route: 'PO', days: 'During season' },
      { name: 'Intranasal corticosteroid (e.g. mometasone/fluticasone)', dose: '2 sprays/nostril', freq: 'OD', route: 'INTRANASAL', days: 'Regular through season (start early)' },
      { name: 'Eye symptoms: Sodium cromoglicate 2% drops', dose: '1–2 drops', freq: 'QDS', route: 'Topical eye', days: 'PRN' },
    ],
    altRegimens: [
      { label: 'Moderate–severe / inadequate control', drugs: 'Combine intranasal corticosteroid + oral antihistamine; consider intranasal antihistamine (azelastine) or combined spray (azelastine/fluticasone).' },
      { label: 'Severe, important event (short-term)', drugs: 'Short course oral prednisolone occasionally (avoid depot steroid injections).' },
      { label: 'Refractory / single allergen', drugs: 'Refer for consideration of immunotherapy.' },
    ],
    counselling: [
      'Start the intranasal steroid 1–2 weeks before your season and use it regularly — it works best taken continuously, not just when bad.',
      'Correct spray technique: aim slightly away from the nasal septum, don\u2019t sniff hard.',
      'Allergen avoidance: monitor pollen counts, keep windows shut, shower/change clothes after being outdoors, wraparound sunglasses, balm around nostrils.',
      'Non-sedating antihistamines are preferred so you stay alert.',
    ],
    followUp: 'Review if poorly controlled despite combined therapy; consider referral. Reassess technique/adherence first.',
    redFlags: [
      'Unilateral symptoms / blood-stained discharge / facial pain/numbness → consider structural/sinister nasal cause (ENT).',
    ],
    emisText: `Allergic rhinitis / hay fever:
- Non-sedating antihistamine: Cetirizine/loratadine 10 mg OD (or fexofenadine).
- Intranasal corticosteroid (mometasone/fluticasone) 2 sprays/nostril OD — start 1–2 wks before season, use regularly; correct technique.
- Eye symptoms: sodium cromoglicate 2% drops QDS.
- Inadequate control: combine + consider azelastine/fluticasone spray; refractory → immunotherapy referral.
Allergen avoidance advice. Unilateral/bloody discharge → ENT.`,
    sources: [
      { label: 'NICE CKS — Allergic rhinitis', url: 'https://cks.nice.org.uk/topics/allergic-rhinitis/' },
    ],
  },

  // ---------------- Acute low back pain ----------------
  {
    id: 'low-back-pain',
    title: 'Acute low back pain',
    category: 'Musculoskeletal & Rheumatology',
    eyebrow: 'Stay active · NSAID 1st line (shortest effective)',
    indication: 'Acute non-specific low back pain ± sciatica, no red flags. Encourage activity and self-management; oral NSAID first line for analgesia at the lowest effective dose for the shortest time.',
    contraindications: 'NSAID: peptic ulcer/GI bleed, CKD eGFR <30, heart failure, on anticoagulant, asthma if sensitive (add PPI if used in at-risk). Avoid opioids routinely; do NOT offer paracetamol alone.',
    duration: 'Short course (days–2 weeks); review',
    drugs: [
      { name: 'Naproxen (or ibuprofen) + PPI if at risk', dose: '250–500 mg (ibuprofen 400 mg)', freq: 'BD / TDS', route: 'PO', days: 'Shortest effective (≤2 weeks)' },
      { name: 'Codeine (short-term, if NSAID unsuitable/insufficient)', dose: '15–30 mg ± paracetamol', freq: 'QDS PRN', route: 'PO', days: 'Few days only' },
      { name: 'Sciatica (neuropathic): consider per NG59', dose: '—', freq: '—', route: 'PO', days: 'Do NOT routinely use gabapentinoids for sciatica (NG59)' },
    ],
    altRegimens: [
      { label: 'Not improving / risk-stratify', drugs: 'Use a stratified approach (e.g. STarT Back); refer to physiotherapy/group exercise; consider manual therapy as part of a package.' },
      { label: 'Persistent radicular pain >4–6 weeks', drugs: 'Consider MRI + specialist referral for injection/surgery assessment.' },
    ],
    counselling: [
      'Stay active and continue normal activities as much as possible — bed rest delays recovery.',
      'Most acute back pain improves within a few weeks; keep moving, use heat, and pace activity.',
      'Take the NSAID with food at the lowest dose for the shortest time; avoid relying on strong painkillers.',
      'Seek urgent help with numbness around the back passage/genitals, difficulty passing urine, or new leg weakness (cauda equina).',
    ],
    followUp: 'Review if not improving as expected; physiotherapy/stratified care. Reassess for red/inflammatory flags if persistent.',
    redFlags: [
      'Saddle anaesthesia, bladder/bowel dysfunction, bilateral/progressive leg weakness → cauda equina — emergency MRI.',
      'Cancer history, weight loss, night pain, fever/IVDU, thoracic pain, age extremes → investigate (malignancy/infection/fracture).',
    ],
    emisText: `Acute low back pain (no red flags):
- Stay active + self-management; do NOT offer paracetamol alone or routine opioids.
- NSAID 1st line: Naproxen 250–500 mg BD (or ibuprofen 400 mg TDS), shortest effective course, + PPI if at risk.
- Codeine short-term only if NSAID unsuitable. Physiotherapy / stratified care (STarT Back).
EMERGENCY safety-net: saddle anaesthesia, bladder/bowel change, bilateral/progressive leg weakness → cauda equina.`,
    sources: [
      { label: 'NICE NG59 — Low back pain & sciatica', url: 'https://www.nice.org.uk/guidance/ng59' },
      { label: 'NICE CKS — Back pain (low, without radiculopathy)', url: 'https://cks.nice.org.uk/topics/back-pain-low-without-radiculopathy/' },
    ],
  },

  // ---------------- Neuropathic pain ----------------
  {
    id: 'neuropathic-pain',
    title: 'Neuropathic pain',
    category: 'Neurology & Pain',
    eyebrow: 'Amitriptyline / duloxetine / gabapentin / pregabalin',
    indication: 'Neuropathic pain (e.g. diabetic/peripheral neuropathy, post-herpetic, radicular). Offer one first-line agent; switch (not add) if ineffective/not tolerated. (Trigeminal neuralgia → carbamazepine.)',
    contraindications: 'Amitriptyline: cardiac disease/arrhythmia, glaucoma, urinary retention, elderly (anticholinergic). Duloxetine: uncontrolled hypertension. Pregabalin/gabapentin: misuse potential (controlled drugs), dose-reduce in renal impairment.',
    duration: 'Titrate; review at each step',
    drugs: [
      { name: 'Amitriptyline', dose: '10 mg ON; titrate to 25–75 mg', freq: 'ON', route: 'PO', days: 'Trial ≥6–8 weeks at effective dose' },
      { name: 'OR Duloxetine', dose: '30 mg → 60 mg OD', freq: 'OD', route: 'PO', days: 'Trial' },
      { name: 'OR Gabapentin / Pregabalin', dose: 'Gabapentin 300 mg titrate / Pregabalin 75 mg BD titrate', freq: 'TDS / BD', route: 'PO', days: 'Trial' },
    ],
    altRegimens: [
      { label: 'Localised pain', drugs: 'Capsaicin 0.075% cream or lidocaine 5% plaster (post-herpetic) as an option.' },
      { label: 'Trigeminal neuralgia', drugs: 'Carbamazepine first line (titrate); refer if refractory.' },
      { label: 'Inadequate response after trials', drugs: 'Switch agents (try alternatives); refer to specialist pain service; do not routinely use strong opioids.' },
    ],
    counselling: [
      'These medicines treat pain by calming overactive nerves — they are not standard painkillers and take 2–6 weeks to work.',
      'Start low and increase slowly; drowsiness/dizziness/dry mouth are common early and often settle.',
      'Take amitriptyline a couple of hours before bed to reduce morning grogginess; it also helps sleep.',
      'Don\u2019t stop abruptly (especially gabapentinoids); avoid alcohol; tell us about mood changes.',
    ],
    followUp: 'Review at each titration; assess benefit vs side effects. If ineffective at adequate dose/duration → switch class. Annual review if ongoing.',
    redFlags: [
      'New/progressive neurology, suspected cord/cauda compression → urgent imaging.',
      'Gabapentinoid misuse/diversion concerns → review (controlled drugs).',
    ],
    emisText: `Neuropathic pain (NG215 — choose ONE first-line, switch if needed):
- Amitriptyline 10 mg ON, titrate to 25–75 mg OR Duloxetine 30→60 mg OD OR Gabapentin 300 mg (titrate) / Pregabalin 75 mg BD (titrate).
- Localised: capsaicin 0.075% cream / lidocaine 5% plaster (PHN). Trigeminal neuralgia → carbamazepine.
Counsel: 2–6 wks to work; start low/go slow; don\u2019t stop gabapentinoids abruptly. Switch (not add) if ineffective; refer if refractory.`,
    sources: [
      { label: 'NICE NG215 — Chronic pain', url: 'https://www.nice.org.uk/guidance/ng215' },
      { label: 'NICE CKS — Neuropathic pain', url: 'https://cks.nice.org.uk/topics/neuropathic-pain-drug-treatment/' },
    ],
  },

  // ---------------- Short-term insomnia ----------------
  {
    id: 'insomnia',
    title: 'Short-term insomnia',
    category: 'Mental Health',
    eyebrow: 'Sleep hygiene/CBT-I first · hypnotic only short-term',
    indication: 'Short-term insomnia causing significant daytime impairment, after sleep hygiene/CBT-I. A short course of a hypnotic may be used at the lowest dose for the shortest time (≤2 weeks) when daytime impairment is severe.',
    contraindications: 'Z-drugs/benzodiazepines: respiratory failure, OSA, myasthenia, severe hepatic impairment, history of substance misuse, elderly (falls/confusion). Avoid in pregnancy. Do not use long-term.',
    duration: '≤2 weeks (intermittent dosing preferred)',
    drugs: [
      { name: 'Sleep hygiene / CBT-I (1st line)', dose: '—', freq: '—', route: '—', days: 'Mainstay (signpost digital CBT-I)' },
      { name: 'Zopiclone (short-term)', dose: '3.75–7.5 mg', freq: 'ON PRN', route: 'PO', days: '≤2 weeks (intermittent)' },
      { name: 'Elderly / alt: Zopiclone 3.75 mg or short-acting alternative', dose: '3.75 mg', freq: 'ON PRN', route: 'PO', days: '≤2 weeks' },
    ],
    altRegimens: [
      { label: 'Adults ≥55', drugs: 'Prolonged-release melatonin 2 mg ON for up to 13 weeks may be considered.' },
      { label: 'Chronic insomnia', drugs: 'CBT-I (e.g. Sleepio) is first line; avoid long-term hypnotics; treat underlying causes (mood, pain, alcohol, OSA).' },
    ],
    counselling: [
      'Sleep hygiene: consistent wake time, no screens/caffeine/alcohol late, get up if not asleep in ~20 minutes, keep the bedroom for sleep, daytime activity.',
      'Hypnotics are for short-term use only — they can cause dependence, next-day drowsiness, and falls.',
      'Do not drive if you feel drowsy the next morning; avoid alcohol.',
      'Address underlying causes (stress, low mood, pain, shift work) — these are the key to lasting improvement.',
    ],
    followUp: 'Review within 2 weeks; avoid repeat prescriptions of hypnotics. Address underlying cause; offer CBT-I for persistent insomnia.',
    redFlags: [
      'Insomnia with low mood/suicidal ideation → assess and manage depression.',
      'Loud snoring + daytime sleepiness + witnessed apnoea → assess for OSA (avoid sedatives).',
    ],
    emisText: `Short-term insomnia:
- 1st line: sleep hygiene + CBT-I (signpost digital CBT-I, e.g. Sleepio).
- If severe daytime impairment: Zopiclone 3.75–7.5 mg ON PRN for ≤2 weeks (intermittent), lowest dose. Adults ≥55: melatonin PR 2 mg ON (up to 13 wks).
Counsel: dependence/next-day drowsiness/falls; no driving if drowsy; treat underlying cause. Avoid long-term hypnotics.`,
    sources: [
      { label: 'NICE CKS — Insomnia', url: 'https://cks.nice.org.uk/topics/insomnia/' },
      { label: 'NICE — Hypnotics (Z-drugs) TA77', url: 'https://www.nice.org.uk/guidance/ta77' },
    ],
  }
  );
})();
