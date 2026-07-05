/* ============================================
   Reasoning GP — Ready Prescriptions (extra batch 5)
   Genital · eyes · paediatric skin/airway.
   Adds: balanitis, dry eye, napkin dermatitis, chilblains, croup.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);

  RX.push(
  // ---------------- Balanitis ----------------
  {
    id: 'balanitis',
    title: 'Balanitis',
    category: 'Dermatology',
    eyebrow: 'Hygiene + cause-directed · candidal commonest',
    indication: 'Inflammation of the glans (± foreskin). Most is candidal or irritant/contact. Treat the cause after hygiene measures; check glucose if recurrent candidal balanitis.',
    contraindications: 'Topical steroid: short courses only on genital skin (atrophy). Persistent/atypical lesion (induration, ulcer, white patches) → exclude lichen sclerosus (BXO) and penile cancer. Consider STI in sexually active men.',
    duration: 'Hygiene ongoing; topical courses ~1–2 weeks',
    drugs: [
      { name: 'All: wash with water, retract & dry; emollient/soap substitute', dose: 'Apply', freq: 'Regularly', route: 'Topical', days: 'Ongoing' },
      { name: 'Candidal: Clotrimazole 1% cream (± hydrocortisone 1% if inflamed)', dose: 'Apply', freq: 'BD–TDS', route: 'Topical', days: '~1–2 weeks' },
      { name: 'Severe candidal: Fluconazole', dose: '150 mg', freq: 'Stat', route: 'PO', days: 'Single dose' },
      { name: 'Bacterial (per swab): e.g. Flucloxacillin / anaerobic cover', dose: 'Per result', freq: 'Per result', route: 'PO', days: '~7 days' },
    ],
    altRegimens: [
      { label: 'Irritant / contact', drugs: 'Stop soaps/overwashing; emollient/soap substitute; short course hydrocortisone 1% if inflamed.' },
      { label: 'Recurrent candidal', drugs: 'Check capillary glucose / HbA1c (diabetes); treat partner if relevant; consider STI screen.' },
      { label: 'Suspected lichen sclerosus (BXO)', drugs: 'Potent topical steroid (often specialist-guided); refer dermatology/urology — may need circumcision.' },
      { label: 'Suspicious/non-healing lesion', drugs: 'Refer urology (suspected penile cancer) / dermatology.' },
    ],
    counselling: [
      'Wash gently with water once a day, pulling back the foreskin to clean and dry underneath — avoid soaps and shower gels on the area.',
      'Use the antifungal (and short steroid if given) as directed; most settle within a week or two.',
      'If it keeps coming back we will check for diabetes, which can be an underlying reason.',
      'Loose cotton underwear and good drying help prevent recurrence.',
      'See us if it does not clear, keeps returning, or you notice a lasting lump, ulcer or white/scarred area.',
    ],
    followUp: 'Review if not resolving or recurrent → check glucose, reconsider cause, swab, treat partner. Persistent/atypical → dermatology/urology.',
    redFlags: [
      'Non-healing lesion, induration, ulcer, or persistent white patches → exclude lichen sclerosus / penile cancer → refer.',
      'Tight/scarred foreskin (phimosis) developing → urology.',
    ],
    emisText: `Balanitis:
- All: wash with water, retract & dry, soap substitute/emollient; avoid irritants.
- Candidal (commonest): clotrimazole 1% BD–TDS (± hydrocortisone 1% if inflamed) ~1–2 wks; severe → fluconazole 150 mg stat.
- Bacterial: treat per swab (e.g. flucloxacillin) ~7 days.
- Recurrent candidal → check glucose/HbA1c (diabetes); treat partner; consider STI screen.
Persistent/atypical/non-healing → exclude lichen sclerosus (BXO)/penile cancer → derm/urology.`,
    sources: [
      { label: 'NICE CKS — Balanitis', url: 'https://cks.nice.org.uk/topics/balanitis/' },
    ],
  },

  // ---------------- Dry eye ----------------
  {
    id: 'dry-eye',
    title: 'Dry eye disease',
    category: 'ENT & Eyes',
    eyebrow: 'Ocular lubricants · lid hygiene · stepwise',
    indication: 'Dry eye (gritty, burning, watery-then-dry, worse with screens/wind). Manage with ocular lubricants and lid hygiene; treat blepharitis/meibomian gland dysfunction and contributing factors.',
    contraindications: 'Exclude red-flag causes of red/painful eye (acute glaucoma, keratitis, iritis, foreign body). Preservative (benzalkonium) drops can irritate with frequent use → preservative-free if >4–6×/day or contact-lens wearer.',
    duration: 'Ongoing (chronic, relapsing)',
    drugs: [
      { name: 'Ocular lubricant drops — hypromellose / carmellose', dose: '1 drop', freq: 'QDS–PRN (frequently)', route: 'Topical eye', days: 'Ongoing' },
      { name: 'Thicker gel/ointment (e.g. carbomer / paraffin) at night', dose: 'Apply', freq: 'ON', route: 'Topical eye', days: 'Ongoing' },
      { name: 'Preservative-free drops if frequent use / lens wearer', dose: '1 drop', freq: 'PRN', route: 'Topical eye', days: 'Ongoing' },
    ],
    altRegimens: [
      { label: 'Blepharitis / meibomian gland dysfunction', drugs: 'Warm compresses + lid hygiene/massage twice daily; consider a course of oral doxycycline for posterior blepharitis/ocular rosacea (specialist/CKS-guided).' },
      { label: 'Inadequate to drops alone', drugs: 'Step up lubricant viscosity / frequency; treat contributing factors (screens, environment, drugs e.g. anticholinergics, systemic disease e.g. Sjögren\u2019s).' },
      { label: 'Severe / not responding', drugs: 'Refer ophthalmology — consider topical ciclosporin, punctal plugs; investigate underlying autoimmune cause.' },
    ],
    counselling: [
      'Dry eye is usually a long-term condition we control rather than cure — regular lubricant drops are the mainstay; use them often, before symptoms build.',
      'Use thicker gel/ointment at night (it can blur vision briefly).',
      'Take regular screen breaks (blink, 20-20-20 rule), reduce direct drafts/air-con, and stay hydrated.',
      'If you have blepharitis, do warm compresses and lid cleaning daily — it treats the cause of the dryness.',
      'Seek urgent help for a painful red eye, marked light sensitivity, or reduced vision — that is not simple dry eye.',
    ],
    followUp: 'Review symptom control; step up viscosity/frequency or treat blepharitis if persisting. Severe/refractory or suspected autoimmune (Sjögren\u2019s) → ophthalmology/rheumatology.',
    redFlags: [
      'Painful red eye, photophobia, reduced acuity, or contact-lens-related red eye → urgent ophthalmology (keratitis/other).',
    ],
    emisText: `Dry eye disease:
- Ocular lubricants (hypromellose/carmellose) QDS–PRN, frequently; thicker gel/ointment (carbomer/paraffin) at night.
- Preservative-free if using >4–6×/day or contact-lens wearer.
- Lid hygiene + warm compresses BD if blepharitis/MGD; consider doxycycline course for ocular rosacea.
- Lifestyle: screen breaks (20-20-20), reduce drafts/air-con, hydration; review anticholinergic drugs.
Severe/refractory or ?Sjögren\u2019s → ophthalmology/rheumatology. Painful red eye/↓vision → urgent ophthalmology.`,
    sources: [
      { label: 'NICE CKS — Dry eye disease', url: 'https://cks.nice.org.uk/topics/dry-eye-disease/' },
    ],
  },

  // ---------------- Napkin (nappy) dermatitis ----------------
  {
    id: 'napkin-dermatitis',
    title: 'Napkin dermatitis (nappy rash)',
    category: 'Dermatology',
    eyebrow: 'Barrier + nappy care · antifungal if candidal',
    indication: 'Irritant napkin dermatitis (erythema of convex surfaces, sparing skin folds). Mainstay is nappy care and barrier protection; treat secondary candidal infection if folds involved / satellite lesions.',
    contraindications: 'Avoid potent steroids on napkin area (occluded, thin skin → atrophy) — mild (hydrocortisone 1%) short course only. Consider other diagnoses if atypical/not responding (seborrhoeic/atopic dermatitis, psoriasis, bacterial infection, rarely zinc deficiency/abuse).',
    duration: 'Barrier ongoing; antifungal/steroid short courses',
    drugs: [
      { name: 'Barrier preparation (e.g. zinc & castor oil / dimeticone)', dose: 'Thin layer', freq: 'Each nappy change', route: 'Topical', days: 'Ongoing' },
      { name: 'Candidal (folds/satellite lesions): Clotrimazole 1% cream', dose: 'Apply', freq: 'BD–TDS', route: 'Topical', days: 'Until clear (~7–14 days)' },
      { name: 'Marked inflammation: Hydrocortisone 1% (short course)', dose: 'Apply thin', freq: 'OD', route: 'Topical', days: '≤7 days' },
    ],
    altRegimens: [
      { label: 'Bacterial infection (impetiginised)', drugs: 'Consider topical/oral antibiotics per severity (e.g. flucloxacillin) if weeping/pustular/crusted.' },
      { label: 'Not responding / atypical', drugs: 'Reconsider diagnosis: seborrhoeic dermatitis (involves folds, scalp), atopic eczema, psoriasis; persistent → review/refer.' },
    ],
    counselling: [
      'Change nappies frequently and as soon as soiled; use highly absorbent disposables.',
      'Clean gently with water or fragrance-free wipes and pat dry; allow nappy-free time to air the skin.',
      'Apply a thin layer of barrier cream at each change to protect the skin.',
      'Avoid soaps, bubble baths and talcum powder on the area.',
      'If there are spots spreading into the skin folds, an antifungal cream is needed; see us if it is not improving in a few days, looks infected, or the baby is unwell.',
    ],
    followUp: 'Review if not improving within ~1 week or recurrent; reconsider diagnosis (candida, seb/atopic dermatitis, psoriasis, bacterial infection).',
    redFlags: [
      'Systemically unwell, spreading/blistering/pustular rash, or not responding → consider bacterial infection / alternative diagnosis; safeguarding if features suggest neglect.',
    ],
    emisText: `Napkin (nappy) dermatitis — irritant:
- Nappy care: frequent changes, highly absorbent nappies, clean with water/fragrance-free wipes, pat dry, nappy-free air time.
- Barrier preparation (zinc & castor oil / dimeticone) thin layer at each change.
- Candidal (folds + satellite lesions): clotrimazole 1% BD–TDS until clear.
- Marked inflammation: hydrocortisone 1% OD ≤7 days (mild only — avoid potent steroids).
Not improving/atypical → reconsider seb/atopic dermatitis, psoriasis, bacterial infection.`,
    sources: [
      { label: 'NICE CKS — Nappy rash', url: 'https://cks.nice.org.uk/topics/nappy-rash/' },
    ],
  },

  // ---------------- Chilblains ----------------
  {
    id: 'chilblains',
    title: 'Chilblains (perniosis)',
    category: 'Dermatology',
    eyebrow: 'Keep warm · self-limiting · nifedipine if severe',
    indication: 'Chilblains — itchy/painful red-purple papules on extremities (toes/fingers) after cold exposure. Usually self-limiting; mainstay is keeping warm and avoiding rapid rewarming.',
    contraindications: 'Recurrent/severe/atypical or ulcerating chilblains, or in a young person → consider underlying cause (connective tissue disease/SLE, peripheral arterial disease, vasculitis). Nifedipine: caution in hypotension; off-label use.',
    duration: 'Self-limiting (1–3 weeks); preventive measures ongoing',
    drugs: [
      { name: 'Keep warm; gradual rewarming; emollient; avoid scratching', dose: '—', freq: '—', route: '—', days: 'Mainstay' },
      { name: 'Severe/recurrent: Nifedipine MR (off-label)', dose: 'e.g. 20 mg', freq: 'BD–TDS', route: 'PO', days: 'During cold season / until resolved' },
      { name: 'Itch: emollient ± short mild topical steroid if inflamed', dose: 'Apply', freq: 'OD–BD', route: 'Topical', days: 'Short course' },
    ],
    altRegimens: [
      { label: 'Broken skin / secondary infection', drugs: 'Keep clean; treat secondary bacterial infection with antibiotics if present.' },
      { label: 'Recurrent / atypical / ulcerating', drugs: 'Investigate for underlying cause (autoantibodies for SLE, assess peripheral pulses for PAD); refer as appropriate.' },
    ],
    counselling: [
      'Chilblains are an over-reaction of small blood vessels to cold and usually clear by themselves in 1–3 weeks.',
      'Keep hands and feet warm with gloves, warm socks and footwear; warm up gradually — avoid putting cold skin straight onto hot radiators/water.',
      'Don\u2019t scratch; use a moisturiser; stop smoking (it worsens circulation).',
      'Keep the whole body warm, not just the extremities, and stay active to help circulation.',
      'See us if they keep recurring, ulcerate, look infected, or you have other symptoms (joint pains, colour changes of fingers) so we can check for an underlying cause.',
    ],
    followUp: 'Most settle with conservative measures. Recurrent/severe/ulcerating or features of connective tissue disease → investigate/refer.',
    redFlags: [
      'Ulceration, necrosis, or signs of critical ischaemia → urgent assessment.',
      'Young person with recurrent chilblains + systemic features → exclude SLE/connective tissue disease.',
    ],
    emisText: `Chilblains (perniosis) — usually self-limiting (1–3 wks):
- Keep extremities AND whole body warm; gradual rewarming (avoid direct heat); emollient; don\u2019t scratch; stop smoking.
- Itch/inflammation: emollient ± short mild topical steroid.
- Severe/recurrent: nifedipine MR 20 mg BD–TDS (off-label) during cold season.
- Secondary infection → antibiotics.
Recurrent/atypical/ulcerating or young + systemic features → investigate underlying cause (SLE/PAD) / refer.`,
    sources: [
      { label: 'NICE CKS — Chilblains', url: 'https://cks.nice.org.uk/topics/chilblains/' },
    ],
  },

  // ---------------- Croup ----------------
  {
    id: 'croup',
    title: 'Croup (laryngotracheitis)',
    category: 'ENT & Eyes',
    eyebrow: 'Single-dose oral dexamethasone · safety-net stridor',
    indication: 'Croup — viral barking cough, hoarse voice ± inspiratory stridor, worse at night, in a child (commonly 6 months–3 years). A single dose of oral corticosteroid is given to all severities; mild croup can be managed at home with safety-netting.',
    contraindications: 'Do NOT examine the throat or distress the child if severe (risk of complete obstruction). Consider alternative diagnosis if drooling/toxic/unable to swallow (epiglottitis), sudden choking (foreign body), or no preceding coryza. Severe croup (stridor at rest, recession, agitation) = emergency.',
    duration: 'Single steroid dose; illness ~48 hours–few days',
    drugs: [
      { name: 'Dexamethasone (oral)', dose: '0.15 mg/kg', freq: 'Single dose', route: 'PO', days: 'Once (may repeat after 12 h if needed)' },
      { name: 'Alternative: Prednisolone', dose: '1–2 mg/kg', freq: 'OD', route: 'PO', days: '1 dose (± repeat next day) if dexamethasone unavailable' },
      { name: 'Hospital (moderate–severe): Nebulised budesonide / adrenaline', dose: 'Per protocol', freq: 'As needed', route: 'Nebulised', days: 'Acute (secondary care)' },
    ],
    altRegimens: [
      { label: 'Mild croup (no stridor/recession at rest)', drugs: 'Single dose oral dexamethasone 0.15 mg/kg; manage at home with safety-netting; antipyretics/fluids as needed.' },
      { label: 'Moderate–severe (stridor ± recession at rest)', drugs: 'Oral/IM dexamethasone; admit; nebulised adrenaline + budesonide; oxygen; observe.' },
      { label: 'Impending obstruction (severe distress, cyanosis, exhaustion)', drugs: '999 / emergency — keep child calm, minimal handling, senior/anaesthetic + ENT input.' },
    ],
    counselling: [
      'Croup is a common viral illness that swells the voice box, causing a barking cough — the steroid reduces the swelling and usually settles it.',
      'Keep your child calm and comfortable (upset worsens the breathing); sit them upright; give fluids and paracetamol/ibuprofen for fever/discomfort.',
      'Symptoms are often worse at night and usually improve over a few days.',
      'Steam/humidified air is not proven to help and hot water risks scalds.',
      'Call 999 if your child has noisy breathing (stridor) at rest, is sucking in around the ribs/neck, looks pale/blue, is drowsy or struggling — and seek urgent advice if drooling or unable to swallow.',
    ],
    followUp: 'Mild croup: safety-net and review if worsening. Most resolve within 48 hours–few days. Re-attend / admit if stridor at rest, increased work of breathing, or not improving.',
    redFlags: [
      'Stridor at rest, marked recession, agitation/drowsiness, cyanosis, exhaustion → emergency (impending obstruction).',
      'Drooling, unable to swallow, toxic, no cough → suspect epiglottitis / bacterial tracheitis — do not examine throat; emergency.',
      'Sudden onset with choking, no coryza → suspect inhaled foreign body.',
    ],
    emisText: `Croup (viral laryngotracheitis) — barking cough ± stridor, worse at night:
- ALL severities: single dose oral dexamethasone 0.15 mg/kg (alt: prednisolone 1–2 mg/kg if dexamethasone unavailable).
- Mild (no stridor/recession at rest): home management + safety-net; keep child calm; fluids/antipyretics.
- Moderate–severe (stridor/recession at rest): admit — dexamethasone + nebulised adrenaline/budesonide, oxygen.
Do NOT examine throat / distress child if severe. 999 if stridor at rest, recession, cyanosis, drowsy, exhausted.
Consider epiglottitis (drooling/toxic, no cough) / foreign body (sudden choking).`,
    sources: [
      { label: 'NICE CKS — Croup', url: 'https://cks.nice.org.uk/topics/croup/' },
    ],
  }
  );
})();
