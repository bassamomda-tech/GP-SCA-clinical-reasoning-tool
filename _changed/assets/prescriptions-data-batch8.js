/* ============================================
   Reasoning GP — Ready Prescriptions (batch 8)
   Oral · endocrine/derm · travel · women's health · pain.
   Adds: halitosis, hirsutism, malaria prophylaxis, male
   pattern hair loss, HRT choices, nausea/vomiting in
   pregnancy, post-herpetic neuralgia, plantar fasciitis.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);

  RX.push(
  // ---------------- Halitosis ----------------
  {
    id: 'halitosis',
    title: 'Halitosis (bad breath)',
    category: 'ENT & Eyes',
    eyebrow: 'Oral hygiene + dentist · treat cause',
    indication: 'Persistent bad breath. Most is intra-oral (tongue coating, gingivitis/periodontitis, dental caries, dry mouth). Management is oral hygiene and dental review; treat specific causes. Antibacterial mouthwash is an adjunct only.',
    contraindications: 'Mouthwash is adjunctive, not a cure. Chlorhexidine: staining/taste, short-term. Exclude non-oral causes if no dental cause (sinusitis, tonsillitis, GORD, rarely systemic — ketotic/hepatic/renal fetor).',
    duration: 'Hygiene ongoing; mouthwash short-term',
    drugs: [
      { name: 'Oral hygiene: brushing (fluoride) + interdental cleaning + tongue cleaning', dose: '—', freq: 'BD + daily', route: 'External', days: 'Ongoing (mainstay)' },
      { name: 'Chlorhexidine 0.2% mouthwash (adjunct)', dose: '10 mL', freq: 'BD', route: 'Oromucosal', days: 'Short-term' },
      { name: 'Treat dry mouth: saliva substitutes / sugar-free gum', dose: 'PRN', freq: 'PRN', route: 'Oromucosal', days: 'Ongoing' },
    ],
    altRegimens: [
      { label: 'Dental cause (commonest)', drugs: 'Refer to dentist for caries/periodontitis; scaling and hygiene instruction; treat gingivitis (see gingivitis card).' },
      { label: 'Non-oral cause', drugs: 'Treat sinusitis/post-nasal drip, tonsillitis (tonsilloliths), or GORD if present; review.' },
      { label: 'Systemic (rare)', drugs: 'Persistent fetor with systemic features → consider DKA, hepatic/renal disease → investigate.' },
    ],
    counselling: [
      'Most bad breath comes from the mouth — brushing twice daily, cleaning between the teeth, and gently cleaning the tongue make the biggest difference.',
      'A dental check-up is important to look for gum disease or decay.',
      'Antiseptic mouthwash can help short-term but won\u2019t fix the cause and can stain teeth.',
      'Stay hydrated, chew sugar-free gum for a dry mouth, and reduce strong-smelling foods, smoking and alcohol.',
    ],
    followUp: 'Ensure dental review. If no oral cause, assess ENT/GI causes. Persistent unexplained halitosis with systemic features → investigate.',
    redFlags: [
      'Unilateral nasal symptoms, persistent sore throat/dysphagia, oral lesion >3 weeks → exclude sinister causes (2WW where appropriate).',
    ],
    emisText: `Halitosis:
- Mainstay: oral hygiene (fluoride brushing BD, interdental + TONGUE cleaning) + DENTIST review (caries/periodontitis).
- Chlorhexidine 0.2% mouthwash BD short-term adjunct; treat dry mouth.
- Treat non-oral causes: sinusitis/post-nasal drip, tonsilloliths, GORD.
- Persistent + systemic features → consider DKA/hepatic/renal → investigate.`,
    sources: [
      { label: 'NICE CKS — Halitosis', url: 'https://cks.nice.org.uk/topics/halitosis/' },
    ],
  },

  // ---------------- Hirsutism ----------------
  {
    id: 'hirsutism',
    title: 'Hirsutism',
    category: "Women's & Sexual Health",
    eyebrow: 'COC ± topical eflornithine · slow response',
    indication: 'Excess terminal hair in androgen-dependent areas in women (commonly PCOS). Cosmetic measures + combined oral contraceptive (anti-androgenic effect); topical eflornithine for facial hair; antiandrogens if refractory. Response takes ≥6 months.',
    contraindications: 'Antiandrogens (spironolactone, cyproterone, finasteride) are TERATOGENIC — reliable contraception essential. COC: standard VTE/contraindication checks. Rapid-onset hirsutism or virilisation → exclude androgen-secreting tumour (urgent).',
    duration: 'Assess at ≥6 months (hair cycle)',
    drugs: [
      { name: 'Cosmetic: shaving/waxing/threading; laser/electrolysis', dose: '—', freq: 'PRN', route: 'External', days: 'Ongoing (immediate)' },
      { name: 'Combined oral contraceptive (anti-androgenic)', dose: 'Per product', freq: 'OD', route: 'PO', days: '≥6 months trial' },
      { name: 'Eflornithine 11.9% cream (facial hirsutism)', dose: 'Apply thin', freq: 'BD', route: 'Topical', days: 'Reassess at 4 months' },
      { name: 'Antiandrogen (e.g. spironolactone) — with contraception', dose: 'Specialist/off-label', freq: '—', route: 'PO', days: 'If refractory' },
    ],
    altRegimens: [
      { label: 'Weight & PCOS', drugs: 'If overweight/PCOS, weight loss reduces androgens and improves hirsutism; manage PCOS holistically (see PCOS pathway).' },
      { label: 'Refractory facial hair', drugs: 'Eflornithine + cosmetic (laser); effect reverses on stopping.' },
      { label: 'Refractory / specialist', drugs: 'Antiandrogens (spironolactone, cyproterone acetate, finasteride) — often specialist-guided; always with reliable contraception.' },
    ],
    counselling: [
      'This is usually hormonal (often PCOS) and not dangerous, but we\u2019ll check there\u2019s no other cause first.',
      'Treatments take time — give them at least 6 months, as hair grows in slow cycles, and combine with cosmetic methods.',
      'The contraceptive pill helps by lowering male-hormone activity; a facial cream (eflornithine) can slow facial hair.',
      'Some tablets that block male hormones can harm a developing baby — reliable contraception is essential while taking them.',
      'See us promptly if hair increases rapidly, your voice deepens, or periods become very irregular.',
    ],
    followUp: 'Review at ≥6 months; eflornithine at 4 months (stop if no benefit). Add/escalate antiandrogen with contraception if refractory. Investigate if features of androgen excess.',
    redFlags: [
      'Rapid-onset hirsutism or virilisation (clitoromegaly, voice change, balding), very high testosterone → exclude androgen-secreting tumour → urgent endocrinology.',
    ],
    emisText: `Hirsutism (women; commonly PCOS):
- Cosmetic (shaving/waxing/laser/electrolysis) + weight loss if PCOS.
- COC (anti-androgenic) — trial ≥6 months. Facial: eflornithine 11.9% cream BD (reassess 4 months).
- Refractory: antiandrogen (spironolactone/cyproterone/finasteride) — TERATOGENIC, need reliable contraception; often specialist.
- Rapid onset/virilisation/very high testosterone → exclude androgen tumour → urgent.`,
    sources: [
      { label: 'NICE CKS — Hirsutism', url: 'https://cks.nice.org.uk/topics/hirsutism/' },
    ],
  },

  // ---------------- Malaria prophylaxis ----------------
  {
    id: 'malaria-prophylaxis',
    title: 'Malaria chemoprophylaxis',
    category: 'Travel Health',
    eyebrow: 'ABCD · bite avoidance + region-specific drug',
    indication: 'Malaria prevention for travel to endemic areas. Follow ABCD: Awareness of risk, Bite avoidance, Chemoprophylaxis, prompt Diagnosis. Choice depends on destination resistance, trip length, cost, comorbidity and patient factors (check current country-specific advice/TRAVAX/NaTHNaC).',
    contraindications: 'Mefloquine: avoid in neuropsychiatric history (depression, anxiety, psychosis, seizures). Doxycycline: pregnancy, children <12, photosensitivity. Atovaquone-proguanil: caution severe renal impairment. Chloroquine: not for resistant areas; caution epilepsy/psoriasis. Pregnancy/children/immunocompromised — specialist travel advice.',
    duration: 'Varies by drug (see below)',
    drugs: [
      { name: 'Bite avoidance: DEET ≥20–50%, nets, covering clothing, repellents', dose: '—', freq: 'Continuous', route: 'External', days: 'Whole trip + after' },
      { name: 'Atovaquone-proguanil (Malarone)', dose: '1 tab', freq: 'OD', route: 'PO', days: '1–2 days before → 7 days after' },
      { name: 'Doxycycline', dose: '100 mg', freq: 'OD', route: 'PO', days: '1–2 days before → 4 weeks after' },
      { name: 'Mefloquine', dose: '250 mg', freq: 'Once weekly', route: 'PO', days: '2–3 weeks before → 4 weeks after' },
    ],
    altRegimens: [
      { label: 'Chloroquine + proguanil', drugs: 'Only for areas without significant resistance (limited use now) — check current guidance.' },
      { label: 'Pregnancy', drugs: 'Avoid travel to endemic areas if possible; if essential, specialist travel advice (some regimens unsuitable).' },
      { label: 'Start timing (tolerance test)', drugs: 'Mefloquine started 2–3 weeks ahead allows a tolerance check; Malarone/doxycycline started 1–2 days before.' },
    ],
    counselling: [
      'No tablet is 100% — bite avoidance is essential: cover up at dusk/night, use DEET repellent, and sleep under a treated net.',
      'Take the tablets exactly as directed, including the full period AFTER you return (this is when many infections show up).',
      'Seek urgent medical care for any fever during travel or up to a year after returning, and mention where you travelled.',
      'We\u2019ll choose the tablet based on where you\u2019re going and your health; some have specific side effects we\u2019ll discuss.',
    ],
    followUp: 'Provide written advice; ensure adequate supply. Advise prompt assessment for febrile illness during/after travel (malaria is a medical emergency).',
    redFlags: [
      'Fever during or within ~1 year of travel to an endemic area → urgent malaria testing (blood films/RDT) — can be rapidly fatal (falciparum).',
    ],
    emisText: `Malaria chemoprophylaxis (ABCD; check country-specific TRAVAX/NaTHNaC):
- Bite avoidance: DEET, nets, cover up (essential).
- Atovaquone-proguanil 1 tab OD: 1-2 days before → 7 days after.
- Doxycycline 100 mg OD: 1-2 days before → 4 weeks after (not pregnancy/<12, photosensitivity).
- Mefloquine 250 mg weekly: 2-3 wks before → 4 wks after (avoid neuropsychiatric hx).
- ANY fever during/within 1 yr of travel → urgent malaria test.`,
    sources: [
      { label: 'NICE CKS — Malaria prophylaxis', url: 'https://cks.nice.org.uk/topics/malaria-prophylaxis/' },
    ],
  },

  // ---------------- Male pattern hair loss ----------------
  {
    id: 'male-pattern-hair-loss',
    title: 'Male pattern hair loss (androgenetic alopecia)',
    category: 'Dermatology',
    eyebrow: 'Topical minoxidil ± oral finasteride',
    indication: 'Male androgenetic alopecia (bitemporal recession + vertex thinning). Largely cosmetic; reassure and discuss options. Topical minoxidil and/or oral finasteride maintain/regrow hair only while continued.',
    contraindications: 'Finasteride: men only; sexual side effects (libido/erectile/ejaculatory — usually reversible), reduces PSA by ~50% (interpret with care/double the value), women of childbearing potential must not handle crushed tablets (teratogenic). Minoxidil: initial shedding, scalp irritation.',
    duration: 'Continuous; assess at 6–12 months',
    drugs: [
      { name: 'Minoxidil 5% topical solution/foam', dose: 'Apply to dry scalp', freq: 'OD–BD (per product)', route: 'Topical', days: 'Continuous (≥6–12 mo trial)' },
      { name: 'Finasteride', dose: '1 mg', freq: 'OD', route: 'PO', days: 'Continuous (private/where appropriate)' },
    ],
    altRegimens: [
      { label: 'Combination', drugs: 'Topical minoxidil + oral finasteride together give greater benefit than either alone.' },
      { label: 'Reversible causes', drugs: 'Exclude/treat telogen effluvium, iron deficiency, thyroid disease, and drug causes if pattern atypical.' },
      { label: 'Non-drug', drugs: 'Reassurance, accept/shave, hairpieces, or surgical hair transplant (private).' },
    ],
    counselling: [
      'This is the common inherited type of balding and isn\u2019t harmful — treatment is optional and aimed at slowing loss or partial regrowth.',
      'Both minoxidil (a scalp solution) and finasteride (a tablet) only work while you keep using them; stopping reverses the gains over months.',
      'You may notice a little extra shedding in the first weeks of minoxidil — that\u2019s expected.',
      'Finasteride can rarely affect libido or sexual function (usually reversible); it also lowers a prostate (PSA) blood test, so tell any doctor checking your PSA that you take it.',
      'Women must not handle the crushed/broken finasteride tablets, especially if pregnant.',
    ],
    followUp: 'Assess response at 6–12 months (photos help). Continue if benefit; benefit lost if stopped. Atypical/scarring/patchy loss → dermatology.',
    redFlags: [
      'Scarring alopecia, patchy loss (alopecia areata), rapidly progressive loss, or systemic features → dermatology.',
    ],
    emisText: `Male pattern hair loss (androgenetic):
- Cosmetic; reassure. Options (work only while continued):
  - Minoxidil 5% topical OD-BD (expect early shedding).
  - Finasteride 1 mg OD (sexual SEs usually reversible; halves PSA — interpret x2; women not to handle crushed tabs/teratogenic).
  - Combination > either alone.
- Assess 6-12 months (photos). Atypical/scarring/patchy → dermatology.`,
    sources: [
      { label: 'NICE CKS — Hair loss (androgenetic alopecia)', url: 'https://cks.nice.org.uk/topics/hair-loss-androgenetic-alopecia/' },
    ],
  },

  // ---------------- HRT choices ----------------
  {
    id: 'hrt-choices',
    title: 'HRT choices (menopause)',
    category: "Women's & Sexual Health",
    eyebrow: 'Oestrogen ± progestogen · transdermal if risk',
    indication: 'Hormone replacement therapy selection for menopausal symptoms. Choose regimen by uterus (need progestogen?), menopausal stage (cyclical vs continuous), and risk profile (transdermal route if VTE/CV risk). Add vaginal oestrogen for urogenital symptoms.',
    contraindications: 'Oestrogen-dependent cancer (breast/endometrial), undiagnosed vaginal bleeding, active/recent VTE or arterial event, active liver disease, pregnancy. Unopposed oestrogen contraindicated if uterus present (endometrial cancer risk). HRT is NOT contraceptive.',
    duration: 'Review at 3 months then annually',
    drugs: [
      { name: 'Uterus present: oestrogen + progestogen (combined HRT)', dose: 'Lowest effective', freq: 'Per regimen', route: 'Transdermal/PO', days: 'Cyclical (perimenopausal) / continuous (postmenopausal)' },
      { name: 'No uterus: oestrogen alone', dose: 'Lowest effective', freq: 'Per regimen', route: 'Transdermal/PO', days: 'Continuous' },
      { name: 'Transdermal oestradiol (patch/gel) — preferred if VTE/CV risk/migraine', dose: 'Per product', freq: 'Per product', route: 'Transdermal', days: 'Ongoing' },
      { name: 'Vaginal oestrogen (urogenital symptoms)', dose: 'Per product', freq: 'Per product', route: 'Vaginal', days: 'Long-term (low systemic absorption)' },
    ],
    altRegimens: [
      { label: 'Progestogen options', drugs: 'Micronised progesterone (body-identical, favourable risk), or LNG-IUS (provides endometrial protection + contraception).' },
      { label: 'Higher-risk women', drugs: 'Transdermal oestrogen (no excess VTE risk) ± micronised progesterone; individualise after risk discussion.' },
      { label: 'Non-hormonal (HRT declined/contraindicated)', drugs: 'SSRI/SNRI (e.g. venlafaxine), CBT for vasomotor symptoms; vaginal moisturisers/lubricants for dryness.' },
      { label: 'Low libido', drugs: 'Consider adding testosterone (often specialist) if persistent low desire despite HRT.' },
    ],
    counselling: [
      'HRT is usually the most effective treatment for menopausal symptoms, and for most women under 60 the benefits outweigh the small risks.',
      'If you still have a womb, you need a progestogen as well as oestrogen to protect the womb lining.',
      'Patches or gel (through the skin) avoid the small clot risk of tablets and are preferred if you have clot, migraine or cardiovascular risk factors.',
      'Vaginal oestrogen is very safe and can be used long-term for dryness and bladder symptoms.',
      'HRT does not prevent pregnancy — you still need contraception until the menopause is confirmed.',
      'Report any unscheduled or new vaginal bleeding so we can check the womb lining.',
    ],
    followUp: 'Review at 3 months (symptoms, side effects, bleeding) then annually (benefits/risks, BP, bleeding). Unscheduled bleeding → investigate endometrium.',
    redFlags: [
      'Unscheduled/persistent vaginal bleeding on HRT → endometrial assessment.',
      'Calf swelling/pain or sudden breathlessness/chest pain (VTE), new breast lump → urgent.',
    ],
    emisText: `HRT choices (menopause):
- Uterus present → oestrogen + progestogen (cyclical if perimenopausal, continuous if postmenopausal). No uterus → oestrogen alone.
- TRANSDERMAL oestradiol preferred if VTE/CV risk/migraine (no excess VTE). Progestogen: micronised progesterone or LNG-IUS.
- Vaginal oestrogen for urogenital symptoms (long-term OK).
- HRT NOT contraceptive. Review 3 mo then annually. Unscheduled bleeding → investigate.
- Non-hormonal: SSRI/SNRI, CBT.`,
    sources: [
      { label: 'NICE NG23 — Menopause', url: 'https://www.nice.org.uk/guidance/ng23' },
    ],
  },

  // ---------------- Nausea & vomiting in pregnancy ----------------
  {
    id: 'nausea-vomiting-pregnancy',
    title: 'Nausea & vomiting in pregnancy',
    category: "Women's & Sexual Health",
    eyebrow: 'Antiemetic ladder · safe in pregnancy · spot HG',
    indication: 'Nausea/vomiting of pregnancy (NVP). Conservative measures first; stepwise antiemetics with established pregnancy safety. Recognise hyperemesis gravidarum (HG: >5% weight loss, dehydration, ketonuria/electrolyte disturbance) needing escalation/admission.',
    contraindications: 'Exclude other causes (UTI, thyroid, molar/multiple pregnancy) if atypical/late onset. In HG: give thiamine (prevent Wernicke\u2019s) and assess VTE risk. Limit metoclopramide to ~5 days (extrapyramidal effects); counsel on ondansetron first-trimester data.',
    duration: 'Until symptoms settle (often by 16–20 wks)',
    drugs: [
      { name: 'Conservative: small frequent bland meals, fluids, ginger, P6 acupressure', dose: '—', freq: '—', route: 'Self-care', days: 'First-line' },
      { name: 'First-line: Cyclizine / Promethazine / Prochlorperazine', dose: 'Per drug', freq: 'Per drug', route: 'PO', days: 'Regular/PRN' },
      { name: 'Second-line: Metoclopramide (≤5 days) or Ondansetron', dose: 'Per drug', freq: 'Per drug', route: 'PO', days: 'Short-term' },
      { name: 'HG: thiamine + consider VTE prophylaxis; IV fluids if admitted', dose: 'Per protocol', freq: '—', route: 'IV/PO', days: 'Per HG care' },
    ],
    altRegimens: [
      { label: 'Refractory / HG', drugs: 'Combine antiemetics from different classes; corticosteroid (specialist) for refractory HG; admit/ambulatory IV fluids if dehydrated.' },
      { label: 'Ambulatory care', drugs: 'Where available, day-unit IV fluids + antiemetics for moderate cases unable to tolerate oral.' },
    ],
    counselling: [
      'Sickness in pregnancy is common and usually eases by around 16–20 weeks; the medicines we use have a good safety record.',
      'Try small, frequent bland meals, sip fluids often, and consider ginger and acupressure bands.',
      'The most important thing is staying hydrated — if you can\u2019t keep fluids down, pass little/dark urine, or feel faint, contact maternity/us, as you may need a drip.',
      'We\u2019ll step the medicines up if the first one isn\u2019t enough.',
    ],
    followUp: 'Review within days; step up antiemetics if persisting. Check hydration/ketonuria/weight. HG or unable to tolerate oral → maternity/early-pregnancy unit.',
    redFlags: [
      'Unable to keep fluids down, ketonuria, >5% weight loss, dehydration (HG) → admit/ambulatory IV fluids + thiamine.',
      'Abdominal pain, fever, dysuria, or vaginal bleeding → assess for other causes.',
    ],
    emisText: `Nausea & vomiting of pregnancy (NVP):
- Conservative: small frequent bland meals, fluids, ginger, P6 bands.
- 1st-line antiemetic: cyclizine / promethazine / prochlorperazine.
- 2nd-line: metoclopramide (≤5 days) or ondansetron (counsel 1st-trimester data).
- Hyperemesis (>5% wt loss, dehydration, ketonuria) → thiamine + VTE assessment + IV fluids/admit.
- Exclude UTI/thyroid/molar if atypical.`,
    sources: [
      { label: 'NICE CKS — Nausea/vomiting in pregnancy', url: 'https://cks.nice.org.uk/topics/nausea-vomiting-in-pregnancy/' },
      { label: 'RCOG Green-top 69 — Hyperemesis', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/the-management-of-nausea-and-vomiting-of-pregnancy-and-hyperemesis-gravidarum-green-top-guideline-no-69/' },
    ],
  },

  // ---------------- Post-herpetic neuralgia ----------------
  {
    id: 'post-herpetic-neuralgia',
    title: 'Post-herpetic neuralgia',
    category: 'Neurology & Pain',
    eyebrow: 'Neuropathic agent · switch not stack',
    indication: 'Neuropathic pain persisting >3 months after shingles, in the affected dermatome. First-line neuropathic agents; offer one, switch (don\u2019t stack) if ineffective/not tolerated. Topical options for localised pain.',
    contraindications: 'Amitriptyline: cardiac disease, elderly (anticholinergic, falls), glaucoma, urinary retention. Gabapentinoids: dependence/misuse potential, respiratory depression with opioids, dose-adjust in renal impairment. Duloxetine: uncontrolled hypertension.',
    duration: 'Titrate; review effect and taper later',
    drugs: [
      { name: 'Amitriptyline', dose: '10 mg → titrate (max ~75 mg)', freq: 'ON', route: 'PO', days: 'Titrate to effect' },
      { name: 'Duloxetine', dose: '60 mg', freq: 'OD', route: 'PO', days: 'Titrate' },
      { name: 'Gabapentin', dose: 'Titrate to max ~3.6 g/day', freq: 'TDS', route: 'PO', days: 'Titrate' },
      { name: 'Pregabalin', dose: 'Titrate to max ~600 mg/day', freq: 'BD', route: 'PO', days: 'Titrate' },
    ],
    altRegimens: [
      { label: 'Localised pain', drugs: 'Topical capsaicin (0.075% cream or 8% patch — specialist) or lidocaine 5% medicated plaster for localised PHN, especially if oral agents not tolerated.' },
      { label: 'Switch strategy', drugs: 'If first agent ineffective at max tolerated dose → switch to another first-line agent (amitriptyline / duloxetine / gabapentin / pregabalin). Do not routinely combine in primary care.' },
      { label: 'Prevention', drugs: 'Shingles vaccination reduces incidence of zoster and PHN; early antiviral treatment of shingles may reduce PHN.' },
    ],
    counselling: [
      'This nerve pain after shingles can be stubborn but usually improves over months; the medicines damp down the over-active nerves rather than acting as ordinary painkillers.',
      'They work gradually and need building up to an effective dose — and we try one at a time, switching if it doesn\u2019t suit you.',
      'Side effects like drowsiness or dizziness often settle; don\u2019t stop suddenly — we\u2019ll taper when the time comes.',
      'A medicated plaster or capsaicin cream can help if the pain is in one small area.',
    ],
    followUp: 'Review response at adequate dose; switch agent if ineffective/not tolerated. Reassess periodically and taper when pain settles. Refer to pain service if refractory.',
    redFlags: [
      'New neurological signs, ophthalmic involvement (eye pain/redness/visual change after facial shingles), or red-flag features → assess/refer.',
    ],
    emisText: `Post-herpetic neuralgia (>3 mo post-shingles):
- 1st-line (offer ONE, switch don't stack): amitriptyline 10 mg ON titrate, duloxetine 60 mg OD, gabapentin (→3.6 g/day), or pregabalin (→600 mg/day).
- Localised: lidocaine 5% plaster or capsaicin.
- Titrate to effect; review; taper when settled. Refractory → pain service.
- Prevention: zoster vaccine; early antivirals for shingles.`,
    sources: [
      { label: 'NICE CG173 — Neuropathic pain in adults', url: 'https://www.nice.org.uk/guidance/cg173' },
      { label: 'NICE CKS — Post-herpetic neuralgia', url: 'https://cks.nice.org.uk/topics/post-herpetic-neuralgia/' },
    ],
  },

  // ---------------- Plantar fasciitis ----------------
  {
    id: 'plantar-fasciitis',
    title: 'Plantar fasciitis',
    category: 'Musculoskeletal & Rheumatology',
    eyebrow: 'Self-care · stretching · usually self-limiting',
    indication: 'Plantar heel pain (worst on first steps in the morning / after rest). Self-limiting in most over months. Management is self-care: stretching, supportive footwear/orthotics, activity modification, and analgesia.',
    contraindications: 'Corticosteroid injection: risk of fat-pad atrophy and (rarely) fascia rupture — use judiciously. NSAIDs: usual GI/renal/CV cautions. Consider alternative diagnoses (calcaneal stress fracture, nerve entrapment, inflammatory arthropathy) if atypical.',
    duration: 'Self-care over weeks–months',
    drugs: [
      { name: 'Plantar fascia & calf stretching exercises', dose: '—', freq: 'Daily', route: 'Exercise', days: 'Ongoing (mainstay)' },
      { name: 'Supportive footwear / cushioned heel insoles / arch supports', dose: '—', freq: '—', route: 'External', days: 'Ongoing' },
      { name: 'Analgesia: paracetamol ± topical/oral NSAID', dose: 'Standard', freq: 'PRN', route: 'PO/Topical', days: 'Symptomatic' },
      { name: 'Activity modification + ice after activity', dose: '—', freq: 'PRN', route: 'External', days: 'As needed' },
    ],
    altRegimens: [
      { label: 'Persistent (>6 weeks)', drugs: 'Refer to physiotherapy/podiatry for structured stretching, taping, custom orthotics.' },
      { label: 'Refractory', drugs: 'Consider corticosteroid injection (short-term relief; counsel on risks) or extracorporeal shockwave therapy (specialist).' },
      { label: 'Weight', drugs: 'Weight loss if overweight reduces load and recurrence.' },
    ],
    counselling: [
      'This heel pain comes from the band along the sole and usually settles over a few months — it\u2019s not dangerous.',
      'The most effective treatment is regular stretching of the sole and calf, plus cushioned, supportive footwear (avoid flat/unsupportive shoes and walking barefoot on hard floors).',
      'Roll the arch over a cold bottle, use a heel cushion, and modify high-impact activity for a while.',
      'Painkillers help short-term; physiotherapy or insoles help if it\u2019s slow to settle.',
      'See us if the heel is hot/swollen, the pain follows an injury, or you have numbness/tingling.',
    ],
    followUp: 'Review if not improving by ~6 weeks → physiotherapy/podiatry. Refractory → injection/shockwave or specialist. Reconsider diagnosis if atypical.',
    redFlags: [
      'Acute severe pain after trauma (?calcaneal stress fracture), hot swollen joint, bilateral with inflammatory features (?spondyloarthropathy), or numbness/tingling (nerve entrapment) → assess/refer.',
    ],
    emisText: `Plantar fasciitis (first-step heel pain):
- Self-limiting over months. Mainstay: plantar fascia + calf STRETCHING daily; supportive/cushioned footwear, heel insoles; activity modification; ice.
- Analgesia: paracetamol ± topical/oral NSAID. Weight loss if overweight.
- >6 wks → physio/podiatry (orthotics, taping). Refractory → steroid injection (counsel risks) / shockwave.
- Atypical (trauma, hot joint, inflammatory, neuro) → reconsider diagnosis.`,
    sources: [
      { label: 'NICE CKS — Plantar fasciitis', url: 'https://cks.nice.org.uk/topics/plantar-fasciitis/' },
    ],
  }
  );
})();
