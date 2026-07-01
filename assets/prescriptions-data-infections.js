/* ============================================
   Reasoning GP — Ready Prescriptions (extra batch 1)
   Common infections. Pushes into window.RGP_PRESCRIPTIONS.
   NICE NG/CKS antimicrobial prescribing guidance.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);

  RX.push(
  // ---------------- Lower UTI — non-pregnant women ----------------
  {
    id: 'uti-women',
    title: 'Lower UTI — non-pregnant women',
    category: 'Urology & Renal',
    eyebrow: 'Nitrofurantoin 3 days (1st line)',
    indication: 'Non-pregnant woman with ≥2 urinary symptoms (dysuria, frequency, urgency, suprapubic pain) and no vaginal discharge. Self-care / back-up prescription reasonable if mild.',
    contraindications: 'Nitrofurantoin: eGFR <45 (avoid; <30 contraindicated). Trimethoprim: 1st-trimester pregnancy (folate antagonist), on methotrexate. Check local resistance.',
    duration: '3 days',
    drugs: [
      { name: 'Nitrofurantoin (1st line)', dose: '100 mg MR', freq: 'BD', route: 'PO', days: '3' },
      { name: 'OR Trimethoprim (if low resistance risk)', dose: '200 mg', freq: 'BD', route: 'PO', days: '3' },
    ],
    altRegimens: [
      { label: 'eGFR <45 / nitrofurantoin unsuitable', drugs: 'Trimethoprim 200 mg BD × 3 days, or pivmecillinam 400 mg then 200 mg TDS × 3 days (per culture/local).' },
      { label: 'No improvement at 48 h / 2nd-line', drugs: 'Send urine culture; choose per sensitivities (e.g. pivmecillinam, fosfomycin 3 g single dose).' },
    ],
    counselling: [
      'Most uncomplicated UTIs improve within 48 h of antibiotics; symptoms may take a few days to fully settle.',
      'Drink plenty of fluids; paracetamol/ibuprofen for pain.',
      'Nitrofurantoin can turn urine dark yellow/brown — harmless.',
      'Return if symptoms worsen, fever/loin pain develop, or no better in 48 h.',
    ],
    followUp: 'No routine follow-up. Send culture if pregnant, recurrent, treatment failure, or atypical. ≥3 UTIs/year → investigate ± prophylaxis.',
    redFlags: [
      'Fever, rigors, loin pain, vomiting → pyelonephritis — same-day assessment.',
      'Visible haematuria (esp. ≥45) persisting after treatment → urology 2WW.',
      'Recurrent/atypical UTI in men or any child → investigate.',
    ],
    emisText: `Lower UTI (non-pregnant woman):
- Nitrofurantoin 100 mg MR PO BD × 3 days (1st line; avoid if eGFR <45) OR
- Trimethoprim 200 mg PO BD × 3 days (if low resistance risk).
Self-care: fluids, paracetamol. Safety-net: review if no better in 48 h / fever / loin pain.
Send culture if treatment fails / recurrent / atypical.`,
    sources: [
      { label: 'NICE NG109 — Lower UTI antimicrobial prescribing', url: 'https://www.nice.org.uk/guidance/ng109' },
      { label: 'NICE CKS — UTI (lower) women', url: 'https://cks.nice.org.uk/topics/urinary-tract-infection-lower-women/' },
    ],
  },

  // ---------------- UTI in pregnancy ----------------
  {
    id: 'uti-pregnancy',
    title: 'UTI in pregnancy',
    category: 'Urology & Renal',
    eyebrow: 'Treat symptomatic AND asymptomatic bacteriuria',
    indication: 'Pregnant woman with symptomatic lower UTI, OR asymptomatic bacteriuria on culture (treat — reduces pyelonephritis/preterm birth). Always send culture.',
    contraindications: 'Nitrofurantoin: avoid at term (36+ weeks / near delivery — neonatal haemolysis risk). Trimethoprim: avoid 1st trimester (folate antagonist; give folic acid if used later). Avoid both per trimester accordingly.',
    duration: '7 days',
    drugs: [
      { name: 'Nitrofurantoin (1st/2nd trimester)', dose: '100 mg MR', freq: 'BD', route: 'PO', days: '7' },
      { name: 'OR Amoxicillin (if culture-sensitive)', dose: '500 mg', freq: 'TDS', route: 'PO', days: '7' },
      { name: 'OR Cefalexin', dose: '500 mg', freq: 'BD–TDS', route: 'PO', days: '7' },
    ],
    altRegimens: [
      { label: 'Near term (≥36 wks)', drugs: 'Avoid nitrofurantoin — use amoxicillin (if sensitive) or cefalexin 500 mg BD–TDS × 7 days.' },
      { label: '1st trimester', drugs: 'Avoid trimethoprim — use nitrofurantoin or cefalexin per culture.' },
    ],
    counselling: [
      'Always complete the full 7-day course in pregnancy.',
      'Send a urine sample for culture before/with starting antibiotics.',
      'Return urgently with fever, loin pain, vomiting, or reduced fetal movements.',
    ],
    followUp: 'Repeat culture after treatment to confirm clearance (test of cure in pregnancy). Recurrent → consider prophylaxis with obstetric input.',
    redFlags: [
      'Fever / loin pain / systemically unwell → pyelonephritis — same-day obstetric/medical assessment (admission threshold low in pregnancy).',
      'Contractions / reduced fetal movements → urgent maternity assessment.',
    ],
    emisText: `UTI in pregnancy (send culture; treat asymptomatic bacteriuria too):
- Nitrofurantoin 100 mg MR PO BD × 7 days (avoid at term ≥36 wks) OR
- Amoxicillin 500 mg TDS × 7 (if sensitive) OR Cefalexin 500 mg BD–TDS × 7.
Avoid trimethoprim in 1st trimester. Test of cure after treatment.
Safety-net: fever/loin pain/reduced fetal movements → urgent maternity.`,
    sources: [
      { label: 'NICE NG109 — Lower UTI', url: 'https://www.nice.org.uk/guidance/ng109' },
      { label: 'NICE CKS — UTI in pregnancy', url: 'https://cks.nice.org.uk/topics/urinary-tract-infection-lower-women/' },
    ],
  },

  // ---------------- Lower UTI — men ----------------
  {
    id: 'uti-men',
    title: 'Lower UTI — men',
    category: 'Urology & Renal',
    eyebrow: 'Nitrofurantoin / trimethoprim 7 days',
    indication: 'Man with lower urinary symptoms suggesting UTI (always considered complicated). Send culture. Consider prostatitis if pelvic/perineal pain or systemic features.',
    contraindications: 'Nitrofurantoin: eGFR <45. Trimethoprim: methotrexate, monitor in CKD.',
    duration: '7 days',
    drugs: [
      { name: 'Nitrofurantoin', dose: '100 mg MR', freq: 'BD', route: 'PO', days: '7' },
      { name: 'OR Trimethoprim', dose: '200 mg', freq: 'BD', route: 'PO', days: '7' },
    ],
    altRegimens: [
      { label: 'Suspected prostatitis', drugs: 'Use a prostate-penetrating agent — ciprofloxacin 500 mg BD or trimethoprim 200 mg BD × 14–28 days; send culture; consider referral.' },
    ],
    counselling: [
      'Men need a longer (7-day) course as UTI is considered complicated.',
      'Send a urine sample for culture.',
      'Return with fever, loin pain, or pelvic/perineal pain.',
    ],
    followUp: 'Review culture. Recurrent UTI in men → investigate (renal tract / prostate). Consider PSA/DRE if LUTS.',
    redFlags: [
      'Fever / loin pain → pyelonephritis. Perineal/pelvic pain + systemic → prostatitis — same-day assessment.',
      'Visible haematuria (≥45) → urology 2WW.',
    ],
    emisText: `Lower UTI in a man (complicated; send culture):
- Nitrofurantoin 100 mg MR PO BD × 7 days OR Trimethoprim 200 mg PO BD × 7 days.
If prostatitis suspected: ciprofloxacin 500 mg BD (or trimethoprim) × 14–28 days.
Safety-net: fever / loin or perineal pain → same-day review. Investigate if recurrent.`,
    sources: [
      { label: 'NICE NG109 — Lower UTI', url: 'https://www.nice.org.uk/guidance/ng109' },
      { label: 'NICE CKS — UTI (lower) men', url: 'https://cks.nice.org.uk/topics/urinary-tract-infection-lower-men/' },
    ],
  },

  // ---------------- Acute sore throat ----------------
  {
    id: 'sore-throat',
    title: 'Acute sore throat / tonsillitis',
    category: 'ENT & Eyes',
    eyebrow: 'FeverPAIN / Centor-guided · most need no antibiotic',
    indication: 'Acute sore throat. Use FeverPAIN (0–1) or Centor (0–2) → no antibiotic / self-care. Higher scores or systemically unwell → consider antibiotic or back-up.',
    contraindications: 'Penicillin allergy → clarithromycin/erythromycin. Avoid amoxicillin (rash if glandular fever).',
    duration: '5–10 days',
    drugs: [
      { name: 'Phenoxymethylpenicillin (Pen V)', dose: '500 mg', freq: 'QDS (or 1000 mg BD)', route: 'PO', days: '5–10' },
      { name: 'Penicillin allergy: Clarithromycin', dose: '250–500 mg', freq: 'BD', route: 'PO', days: '5' },
      { name: 'Analgesia: Paracetamol ± ibuprofen', dose: '1 g / 400 mg', freq: 'QDS / TDS', route: 'PO', days: 'PRN' },
    ],
    altRegimens: [
      { label: 'No/low score (FeverPAIN 0–1)', drugs: 'No antibiotic — self-care (analgesia, fluids, medicated lozenges); safety-net.' },
      { label: 'FeverPAIN 2–3', drugs: 'Consider back-up (delayed) antibiotic to use if not improving in 3–5 days.' },
    ],
    counselling: [
      'Most sore throats are viral and settle within a week without antibiotics.',
      'Regular paracetamol/ibuprofen, fluids, and lozenges/saltwater gargle help.',
      'If given a back-up prescription, only start it if no better in 3–5 days or worsening.',
      'Return if difficulty swallowing fluids/breathing, drooling, unable to open mouth, or one-sided severe pain.',
    ],
    followUp: 'No routine follow-up. Reassess if not settling, recurrent tonsillitis (consider referral criteria).',
    redFlags: [
      'Stridor, drooling, muffled voice, trismus, unilateral swelling → quinsy / epiglottitis → same-day ENT / 999.',
      'Suspected glandular fever — avoid amoxicillin; check Monospot/FBC.',
    ],
    emisText: `Acute sore throat (FeverPAIN/Centor-guided):
- Low score: NO antibiotic — analgesia (paracetamol 1 g QDS ± ibuprofen 400 mg TDS), fluids, lozenges; safety-net.
- High score / systemically unwell: Phenoxymethylpenicillin 500 mg QDS (or 1 g BD) × 5–10 days. Pen-allergic: clarithromycin 250–500 mg BD × 5 days.
Safety-net: difficulty swallowing/breathing, drooling, trismus → same-day ENT.`,
    sources: [
      { label: 'NICE NG84 — Sore throat (acute)', url: 'https://www.nice.org.uk/guidance/ng84' },
      { label: 'NICE CKS — Sore throat', url: 'https://cks.nice.org.uk/topics/sore-throat-acute/' },
    ],
  },

  // ---------------- Acute otitis media ----------------
  {
    id: 'otitis-media',
    title: 'Acute otitis media',
    category: 'ENT & Eyes',
    eyebrow: 'Most self-limiting · amoxicillin if indicated',
    indication: 'Child/adult with acute otitis media. Most resolve without antibiotics. Offer immediate antibiotic if systemically unwell, <2 yrs with bilateral AOM, otorrhoea, or high risk.',
    contraindications: 'Penicillin allergy → clarithromycin (or erythromycin in pregnancy).',
    duration: '5–7 days',
    drugs: [
      { name: 'Amoxicillin', dose: '(child weight/age-based; adult 500 mg)', freq: 'TDS', route: 'PO', days: '5–7' },
      { name: 'Penicillin allergy: Clarithromycin', dose: '(weight/age-based; adult 250–500 mg)', freq: 'BD', route: 'PO', days: '5' },
      { name: 'Analgesia: Paracetamol / ibuprofen', dose: 'Weight-based', freq: 'Regular', route: 'PO', days: 'PRN pain' },
    ],
    altRegimens: [
      { label: 'No antibiotic / back-up', drugs: 'Regular analgesia; back-up prescription to use if not improving in 3 days.' },
      { label: 'Worsening / treatment failure', drugs: 'Co-amoxiclav per age/weight; reassess for complications.' },
    ],
    counselling: [
      'Most ear infections clear by themselves within 3–7 days; pain relief is the priority.',
      'Give paracetamol/ibuprofen regularly at the right dose for weight.',
      'Use a back-up antibiotic only if no better in 3 days or worse.',
      'Return if very unwell, swelling/redness behind the ear, neck stiffness, or new discharge with fever.',
    ],
    followUp: 'No routine review. Persistent effusion >6–12 weeks affecting hearing → audiology/ENT.',
    redFlags: [
      'Mastoiditis (swelling/redness/protruding ear), facial palsy, meningism → same-day / 999.',
      'Recurrent AOM or persistent effusion with hearing loss → ENT referral.',
    ],
    emisText: `Acute otitis media:
- Regular analgesia (paracetamol/ibuprofen, weight-based) — mainstay.
- Antibiotic if systemically unwell / <2 yr bilateral / otorrhoea / high-risk: Amoxicillin (weight/age dose) TDS × 5–7 days. Pen-allergic: clarithromycin × 5 days.
- Otherwise no/back-up antibiotic — use if not better in 3 days.
Safety-net: mastoid swelling, facial palsy, neck stiffness → same-day.`,
    sources: [
      { label: 'NICE NG91 — Otitis media (acute)', url: 'https://www.nice.org.uk/guidance/ng91' },
      { label: 'NICE CKS — Otitis media (acute)', url: 'https://cks.nice.org.uk/topics/otitis-media-acute/' },
    ],
  },

  // ---------------- Acute sinusitis ----------------
  {
    id: 'sinusitis',
    title: 'Acute sinusitis',
    category: 'ENT & Eyes',
    eyebrow: 'Usually viral · antibiotics rarely needed',
    indication: 'Acute sinusitis. <10 days → self-care (viral). Symptoms ≥10 days without improvement → consider high-dose intranasal corticosteroid ± back-up antibiotic.',
    contraindications: 'Penicillin allergy → doxycycline (not in pregnancy/children) or clarithromycin.',
    duration: 'Antibiotic 5 days if used',
    drugs: [
      { name: 'Symptom relief: Paracetamol / ibuprofen', dose: '1 g / 400 mg', freq: 'QDS / TDS', route: 'PO', days: 'PRN' },
      { name: '≥10 days: Mometasone nasal spray', dose: '2 sprays each nostril', freq: 'OD', route: 'INTRANASAL', days: '14' },
      { name: 'Back-up antibiotic: Phenoxymethylpenicillin', dose: '500 mg', freq: 'QDS', route: 'PO', days: '5' },
    ],
    altRegimens: [
      { label: 'Penicillin allergy', drugs: 'Doxycycline 200 mg day 1 then 100 mg OD × 5 days (not pregnancy/children) OR clarithromycin 500 mg BD × 5 days.' },
      { label: 'Systemically very unwell / complications', drugs: 'Co-amoxiclav 500/125 mg TDS × 5 days; assess for orbital/intracranial spread.' },
    ],
    counselling: [
      'Most sinus infections are viral and improve within 2–3 weeks without antibiotics.',
      'Nasal saline rinses, steam inhalation, analgesia, and decongestants (short-term) help.',
      'Use the back-up antibiotic only if no improvement after ≥10 days of intranasal steroid, or if worsening.',
      'Return urgently with swelling/redness around the eye, double vision, severe headache, or confusion.',
    ],
    followUp: 'No routine review. Recurrent (>3–4/year) or chronic (>12 weeks) → consider ENT referral.',
    redFlags: [
      'Periorbital swelling/redness, proptosis, diplopia, reduced acuity → orbital cellulitis — same-day / 999.',
      'Severe frontal headache, neurological signs → intracranial complication.',
    ],
    emisText: `Acute sinusitis:
- <10 days: self-care — analgesia, saline rinses, steam; no antibiotic.
- ≥10 days no improvement: Mometasone nasal spray 2 sprays/nostril OD × 14 days ± back-up antibiotic.
- Antibiotic (if needed): Phenoxymethylpenicillin 500 mg QDS × 5 days (pen-allergic: doxycycline 100 mg OD × 5 / clarithromycin 500 mg BD × 5).
Safety-net: periorbital swelling, diplopia, severe headache → same-day.`,
    sources: [
      { label: 'NICE NG79 — Sinusitis (acute)', url: 'https://www.nice.org.uk/guidance/ng79' },
      { label: 'NICE CKS — Sinusitis', url: 'https://cks.nice.org.uk/topics/sinusitis/' },
    ],
  },

  // ---------------- Otitis externa ----------------
  {
    id: 'otitis-externa',
    title: 'Otitis externa',
    category: 'ENT & Eyes',
    eyebrow: 'Topical aural drops (acid/antibiotic + steroid)',
    indication: 'Acute diffuse otitis externa (itchy, painful, discharging ear canal). Topical treatment is first line; systemic antibiotics rarely needed.',
    contraindications: 'Aminoglycoside drops (gentamicin/neomycin): avoid if perforation suspected (ototoxicity) — use ciprofloxacin drops. Avoid water exposure.',
    duration: '7 days (review at 7; max ~14)',
    drugs: [
      { name: 'Acetic acid 2% spray (mild)', dose: '1 spray', freq: 'TDS', route: 'Topical aural', days: '7' },
      { name: 'OR Neomycin + corticosteroid drops (e.g. Otomize)', dose: '1 spray / 2–3 drops', freq: 'TDS', route: 'Topical aural', days: '7' },
      { name: 'OR Ciprofloxacin + dexamethasone (if perforation/grommet)', dose: '4 drops', freq: 'BD', route: 'Topical aural', days: '7' },
    ],
    altRegimens: [
      { label: 'Canal very swollen', drugs: 'Consider ENT for wick insertion; analgesia.' },
      { label: 'Fungal (otomycosis)', drugs: 'Clotrimazole 1% solution; aural toilet; avoid antibacterial drops.' },
      { label: 'Cellulitis spreading beyond canal / systemically unwell', drugs: 'Add oral flucloxacillin 500 mg QDS × 7 days.' },
    ],
    counselling: [
      'Keep the ear dry — no swimming; use cotton wool with Vaseline when showering.',
      'Do not use cotton buds or scratch the canal.',
      'Use a heat pad and regular analgesia for pain.',
      'Return if pain/discharge worsens, spreads to the outer ear, or you become feverish.',
    ],
    followUp: 'Review at 7 days if not improving (consider aural toilet, swab, fungal cause, or ENT).',
    redFlags: [
      'Diabetic/immunocompromised + severe pain/granulation → necrotising (malignant) otitis externa → urgent ENT.',
      'Spreading cellulitis, facial swelling, systemic illness → same-day review.',
    ],
    emisText: `Otitis externa (topical first line):
- Acetic acid 2% spray TDS × 7 days (mild) OR
- Neomycin + corticosteroid drops (e.g. Otomize) TDS × 7 days OR
- Ciprofloxacin/dexamethasone drops if perforation/grommet.
Keep ear dry; no cotton buds; analgesia. Add oral flucloxacillin only if spreading cellulitis.
Safety-net: diabetic + severe pain/granulation → urgent ENT (necrotising OE).`,
    sources: [
      { label: 'NICE NG TA / CKS — Otitis externa', url: 'https://cks.nice.org.uk/topics/otitis-externa/' },
    ],
  },

  // ---------------- Bacterial conjunctivitis ----------------
  {
    id: 'conjunctivitis-bacterial',
    title: 'Bacterial conjunctivitis',
    category: 'ENT & Eyes',
    eyebrow: 'Mostly self-limiting · chloramphenicol if needed',
    indication: 'Acute infective conjunctivitis (red eye, discharge, gritty, vision normal). Most resolve in 5–7 days without treatment. Topical antibiotic for troublesome/persistent cases.',
    contraindications: 'Exclude red-flag causes first (pain, photophobia, reduced vision, contact-lens use → treat as keratitis). Avoid chloramphenicol in known hypersensitivity.',
    duration: '5–7 days',
    drugs: [
      { name: 'Chloramphenicol 0.5% drops', dose: '1 drop', freq: '2-hourly first 2 days then QDS', route: 'Topical eye', days: '5–7 (48 h after resolution)' },
      { name: 'OR Chloramphenicol 1% ointment', dose: 'Apply', freq: 'QDS (or BD + drops)', route: 'Topical eye', days: '5–7' },
    ],
    altRegimens: [
      { label: 'Chloramphenicol allergy', drugs: 'Fusidic acid 1% eye drops BD × 7 days.' },
      { label: 'Contact-lens wearer / suspected keratitis', drugs: 'Do NOT routinely treat as conjunctivitis — stop lenses, same-day ophthalmology.' },
      { label: 'Allergic conjunctivitis', drugs: 'Topical/oral antihistamine (e.g. sodium cromoglicate / olopatadine drops); avoid antibiotics.' },
    ],
    counselling: [
      'Most cases settle on their own within a week; hygiene prevents spread.',
      'Wash hands; do not share towels; clean discharge with cooled boiled water.',
      'Avoid contact lenses until fully resolved.',
      'Return urgently with eye pain, light sensitivity, or reduced vision.',
    ],
    followUp: 'No routine review. Reassess if not improved at 7 days or red flags develop.',
    redFlags: [
      'Pain, photophobia, reduced vision, fixed/irregular pupil, contact-lens wearer → same-day ophthalmology (keratitis/uveitis/glaucoma).',
      'Neonatal conjunctivitis → urgent (gonococcal/chlamydial).',
    ],
    emisText: `Bacterial conjunctivitis (self-limiting):
- Hygiene + cooled-boiled-water cleansing; most resolve in 5–7 days.
- If troublesome: Chloramphenicol 0.5% drops 2-hourly × 2 days then QDS (or 1% ointment QDS) × 5–7 days (continue 48 h after resolution). Allergy → fusidic acid 1% BD.
Avoid contact lenses. Safety-net: pain / photophobia / reduced vision / lens-wearer → same-day ophthalmology.`,
    sources: [
      { label: 'NICE CKS — Conjunctivitis (infective)', url: 'https://cks.nice.org.uk/topics/conjunctivitis-infective/' },
    ],
  },

  // ---------------- Impetigo ----------------
  {
    id: 'impetigo',
    title: 'Impetigo',
    category: 'Dermatology',
    eyebrow: 'Localised: topical · widespread: oral',
    indication: 'Localised non-bullous impetigo (golden crusts). First line for localised is hydrogen peroxide 1% cream; topical antibiotic if unsuitable; oral antibiotic if widespread/bullous/systemic.',
    contraindications: 'Penicillin allergy → clarithromycin/erythromycin. Avoid fusidic acid overuse (resistance).',
    duration: '5 days',
    drugs: [
      { name: 'Hydrogen peroxide 1% cream (localised, 1st line)', dose: 'Apply', freq: 'BD–TDS', route: 'Topical', days: '5' },
      { name: 'OR Fusidic acid 2% cream (localised)', dose: 'Apply', freq: 'TDS', route: 'Topical', days: '5' },
      { name: 'Widespread/bullous: Flucloxacillin', dose: '500 mg (child weight-based)', freq: 'QDS', route: 'PO', days: '5' },
    ],
    altRegimens: [
      { label: 'Penicillin allergy (oral)', drugs: 'Clarithromycin 250–500 mg BD × 5 days (or erythromycin in pregnancy).' },
      { label: 'MRSA / recurrent', drugs: 'Swab; treat per sensitivities; consider decolonisation.' },
    ],
    counselling: [
      'Very contagious — wash hands, avoid sharing towels/flannels; keep nails short.',
      'Stay off school/work until lesions are crusted/healed or 48 h after starting antibiotics.',
      'Do not touch/scratch the lesions; cover where possible.',
      'Return if spreading, blistering, fever, or not improving in a few days.',
    ],
    followUp: 'No routine review. Recurrent → swab (incl. nasal carriage); consider underlying skin disease (eczema).',
    redFlags: [
      'Rapidly spreading / systemically unwell / large bullae → cellulitis / SSSS — urgent review.',
      'Around the eyes or extensive in a young infant → lower threshold for oral treatment/referral.',
    ],
    emisText: `Impetigo:
- Localised: Hydrogen peroxide 1% cream BD–TDS × 5 days (1st line) OR Fusidic acid 2% cream TDS × 5 days.
- Widespread/bullous/systemic: Flucloxacillin 500 mg (weight-based in children) QDS × 5 days. Pen-allergic: clarithromycin × 5 days.
Hygiene + exclusion until crusted/48 h on antibiotics. Safety-net: spreading/systemic → review.`,
    sources: [
      { label: 'NICE NG153 — Impetigo', url: 'https://www.nice.org.uk/guidance/ng153' },
      { label: 'NICE CKS — Impetigo', url: 'https://cks.nice.org.uk/topics/impetigo/' },
    ],
  },

  // ---------------- Cellulitis ----------------
  {
    id: 'cellulitis',
    title: 'Cellulitis (mild–moderate)',
    category: 'Dermatology',
    eyebrow: 'Flucloxacillin 1st line · use Eron class',
    indication: 'Cellulitis (spreading erythema, warmth, swelling, pain). Treat in community if Eron class I (no systemic toxicity / instability). Mark the margins and review.',
    contraindications: 'Penicillin allergy → clarithromycin/doxycycline. Near eyes/face or orbital signs → different pathway (admit / co-amoxiclav).',
    duration: '5–7 days (extend to ~7 if slow response)',
    drugs: [
      { name: 'Flucloxacillin', dose: '500 mg–1 g', freq: 'QDS', route: 'PO', days: '5–7' },
      { name: 'Penicillin allergy: Clarithromycin', dose: '500 mg', freq: 'BD', route: 'PO', days: '5–7' },
      { name: 'OR Doxycycline (alt)', dose: '200 mg day 1 then 100 mg', freq: 'OD', route: 'PO', days: '5–7' },
    ],
    altRegimens: [
      { label: 'Facial / near eyes', drugs: 'Co-amoxiclav 500/125 mg TDS × 7 days; low threshold for admission (periorbital/orbital).' },
      { label: 'Class II / not improving / comorbid', drugs: 'Consider IV (OPAT) or admission; reassess for abscess/necrotising features.' },
      { label: 'Likely water exposure / animal source', drugs: 'Broaden cover per local guidance (e.g. co-amoxiclav / ciprofloxacin).' },
    ],
    counselling: [
      'Mark the edge of the redness (or photograph) to track spread.',
      'Rest and elevate the limb; treat any athlete\u2019s foot / skin breaks (portal of entry).',
      'Take analgesia; complete the course.',
      'Return urgently if the redness spreads beyond the mark, fever/rigors, blistering, or severe pain out of proportion.',
    ],
    followUp: 'Review at 48 h (or sooner if worsening). Recurrent cellulitis → treat predisposing factors ± prophylaxis.',
    redFlags: [
      'Severe pain out of proportion, rapidly spreading, crepitus, dusky skin, systemic toxicity → necrotising fasciitis — 999 / emergency surgery.',
      'Periorbital/orbital signs (proptosis, painful eye movement) → same-day.',
    ],
    emisText: `Cellulitis (Eron class I, community):
- Flucloxacillin 500 mg–1 g PO QDS × 5–7 days. Pen-allergic: clarithromycin 500 mg BD (or doxycycline 100 mg OD) × 5–7.
- Facial/periorbital: co-amoxiclav 500/125 TDS × 7 + low admission threshold.
Mark margins; elevate; treat skin breaks. Review at 48 h.
Safety-net: spreading beyond mark / systemic / severe pain → urgent (exclude necrotising fasciitis).`,
    sources: [
      { label: 'NICE NG141 — Cellulitis & erysipelas', url: 'https://www.nice.org.uk/guidance/ng141' },
      { label: 'NICE CKS — Cellulitis', url: 'https://cks.nice.org.uk/topics/cellulitis-acute/' },
    ],
  },

  // ---------------- Dental abscess / infection ----------------
  {
    id: 'dental-infection',
    title: 'Dental abscess / infection',
    category: 'ENT & Eyes',
    eyebrow: 'Antibiotics are adjunct — dentist for definitive care',
    indication: 'Acute dental infection with spreading/systemic features where urgent dental treatment is not immediately available. Definitive treatment is dental (drainage/extraction/RCT).',
    contraindications: 'Penicillin allergy → clarithromycin/metronidazole. Antibiotics do NOT replace dental drainage.',
    duration: '3–5 days (review)',
    drugs: [
      { name: 'Amoxicillin', dose: '500 mg', freq: 'TDS', route: 'PO', days: '3–5' },
      { name: 'OR/ADD Metronidazole', dose: '400 mg', freq: 'TDS', route: 'PO', days: '3–5' },
      { name: 'Analgesia: Ibuprofen + paracetamol', dose: '400 mg / 1 g', freq: 'TDS / QDS', route: 'PO', days: 'PRN' },
    ],
    altRegimens: [
      { label: 'Penicillin allergy', drugs: 'Metronidazole 400 mg TDS × 3–5 days (± clarithromycin 500 mg BD).' },
      { label: 'Severe / spreading', drugs: 'Co-amoxiclav per guidance; consider maxillofacial referral.' },
    ],
    counselling: [
      'Antibiotics are temporary — you must see a dentist for the underlying tooth problem.',
      'Regular ibuprofen + paracetamol controls pain well; warm saltwater rinses help.',
      'Avoid very hot/cold foods on the affected side.',
      'Return urgently with facial swelling, difficulty swallowing/breathing, eye involvement, or fever.',
    ],
    followUp: 'Urgent dental appointment for definitive treatment. Reassess if spreading.',
    redFlags: [
      'Floor-of-mouth swelling, trismus, raised tongue, difficulty swallowing/breathing → Ludwig\u2019s angina — 999.',
      'Eye involvement / rapidly spreading facial swelling → same-day maxillofacial.',
    ],
    emisText: `Dental infection (antibiotic = adjunct; dentist for definitive care):
- Amoxicillin 500 mg TDS × 3–5 days ± Metronidazole 400 mg TDS × 3–5 days (spreading/anaerobic).
- Pen-allergic: metronidazole 400 mg TDS (± clarithromycin).
- Analgesia: ibuprofen 400 mg TDS + paracetamol 1 g QDS; warm saltwater rinses.
Urgent dental referral. Safety-net: facial/floor-of-mouth swelling, trismus, dysphagia → 999.`,
    sources: [
      { label: 'NICE CKS — Dental abscess', url: 'https://cks.nice.org.uk/topics/dental-abscess/' },
      { label: 'SDCEP — Drug prescribing for dentistry', url: 'https://www.sdcep.org.uk/' },
    ],
  },

  // ---------------- Animal / human bite ----------------
  {
    id: 'bite-infection',
    title: 'Animal / human bite',
    category: 'Dermatology',
    eyebrow: 'Co-amoxiclav · prophylaxis or treatment',
    indication: 'Animal or human bite needing antibiotic prophylaxis (high-risk: hand/foot/face, deep/puncture, cat/human bites, immunocompromised) or treatment of an established infection. Always assess tetanus, rabies (travel), bloodborne-virus risk, and wound care.',
    contraindications: 'Penicillin allergy → doxycycline + metronidazole. Co-amoxiclav: caution in hepatic impairment.',
    duration: 'Prophylaxis 3 days · treatment 5 days',
    drugs: [
      { name: 'Co-amoxiclav 500/125 mg', dose: '1 tab', freq: 'TDS', route: 'PO', days: '3 (prophylaxis) / 5 (treatment)' },
      { name: 'Penicillin allergy: Doxycycline + Metronidazole', dose: '100 mg / 400 mg', freq: 'BD / TDS', route: 'PO', days: '3–5' },
      { name: 'Analgesia: Paracetamol ± ibuprofen', dose: '1 g / 400 mg', freq: 'QDS / TDS', route: 'PO', days: 'PRN' },
    ],
    altRegimens: [
      { label: 'Pregnancy + penicillin allergy', drugs: 'Seek microbiology advice (avoid doxycycline) — e.g. azithromycin + metronidazole per local guidance.' },
      { label: 'Established infection', drugs: 'Co-amoxiclav 5-day course; consider swab, imaging if deep/joint involvement.' },
    ],
    counselling: [
      'Clean the wound thoroughly (irrigate); do not close puncture wounds primarily.',
      'Check tetanus status — booster if due; consider rabies/BBV risk for travel/human bites.',
      'Watch for spreading redness, swelling, pus, or fever.',
      'Seek review urgently if the bite is over a joint/hand and becomes increasingly painful or swollen.',
    ],
    followUp: 'Review in 24–48 h if high-risk or signs of infection. Document tetanus/BBV risk assessment.',
    redFlags: [
      'Hand/joint involvement with worsening pain/swelling → septic arthritis/tenosynovitis — same-day hand surgery.',
      'Spreading cellulitis / systemic illness → escalate.',
    ],
    emisText: `Animal/human bite:
- Wound irrigation + tetanus/rabies/BBV risk assessment.
- Co-amoxiclav 500/125 mg TDS — 3 days prophylaxis (high-risk wound) or 5 days treatment (established infection).
- Pen-allergic: Doxycycline 100 mg BD + Metronidazole 400 mg TDS × 3–5 days.
Safety-net: hand/joint involvement, spreading infection → same-day review.`,
    sources: [
      { label: 'NICE NG184 — Human & animal bites', url: 'https://www.nice.org.uk/guidance/ng184' },
      { label: 'NICE CKS — Bites (human & animal)', url: 'https://cks.nice.org.uk/topics/bites-human-animal/' },
    ],
  }
  );
})();
