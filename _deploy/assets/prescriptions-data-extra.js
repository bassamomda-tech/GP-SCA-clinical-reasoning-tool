/* ============================================
   Reasoning GP — Ready Prescriptions (extra batch 4)
   Anorectal · dermatology steroid ladder · psoriasis · seb derm.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);

  RX.push(
  // ---------------- Anal fissure ----------------
  {
    id: 'anal-fissure',
    title: 'Anal fissure',
    category: 'Gastroenterology',
    eyebrow: 'Soften stool first · topical GTN/diltiazem if chronic',
    indication: 'Painful tear of the anal canal (sharp pain on defecation ± bright bleeding on wiping). Most acute fissures (<6 weeks) heal with conservative stool-softening measures; chronic fissures (≥6 weeks) usually need a topical agent to relax the sphincter.',
    contraindications: 'Topical GTN: avoid in significant headache disorder/hypotension; causes dose-limiting headache. Always exclude other causes of anal pain/bleeding; consider IBD/STI/malignancy if atypical, lateral, or multiple fissures.',
    duration: 'Conservative ongoing; topical GTN/diltiazem 6–8 weeks',
    drugs: [
      { name: 'Bulk-forming laxative: Ispaghula (Fybogel)', dose: '1 sachet', freq: 'BD', route: 'PO', days: 'Ongoing (keep stool soft)' },
      { name: 'OR Osmotic: Macrogol (Movicol)', dose: '1–2 sachets', freq: 'OD–BD', route: 'PO', days: 'Titrate to soft stool' },
      { name: 'Short-term pain: Lidocaine 5% ointment / paracetamol', dose: 'Apply / 1 g', freq: 'PRN before stool / QDS', route: 'Topical / PO', days: '≤1–2 weeks (lidocaine short-term)' },
      { name: 'Chronic (≥6 wk): GTN 0.4% rectal ointment (Rectogesic)', dose: 'Apply ~2.5 cm', freq: 'BD', route: 'Topical perianal', days: '6–8 weeks' },
    ],
    altRegimens: [
      { label: 'GTN not tolerated (headache) / failed', drugs: 'Topical diltiazem 2% BD × 6–8 weeks (off-label, fewer headaches) — often used as alternative or first choice locally.' },
      { label: 'Chronic fissure not healed after 6–8 weeks topical', drugs: 'Refer colorectal surgery: botulinum toxin injection or lateral internal sphincterotomy.' },
      { label: 'Atypical (lateral/multiple/irregular)', drugs: 'Consider & investigate underlying cause — Crohn\u2019s/IBD, infection (HIV, syphilis, TB), anal cancer — refer as appropriate.' },
    ],
    counselling: [
      'The key to healing is soft, easy-to-pass stools — increase fibre and fluids and use a laxative so stools are never hard.',
      'Warm sitz baths (sitting in warm water) after bowel movements ease pain and spasm; keep the area clean and dry.',
      'Avoid straining and don\u2019t delay going when you feel the urge.',
      'GTN/diltiazem ointment works by relaxing the muscle to let the tear heal — GTN commonly causes headache; apply a small amount and wash hands after.',
      'See your doctor if the pain/bleeding persists beyond 6–8 weeks, bleeding is dark or mixed with the stool, or there is a change in bowel habit or weight loss.',
    ],
    followUp: 'Review at 6–8 weeks. Acute fissures usually heal with conservative measures; chronic/non-healing on topical therapy → colorectal referral. Ensure sinister causes excluded where indicated.',
    redFlags: [
      'Rectal bleeding with change in bowel habit, weight loss, iron-deficiency anaemia, mass, or age ≥50 → 2WW colorectal.',
      'Lateral / multiple / non-healing fissures → consider Crohn\u2019s, infection (HIV/syphilis/TB), or anal carcinoma.',
    ],
    emisText: `Anal fissure:
- Keep stool soft: bulk-forming (ispaghula BD) or macrogol; increase fibre + fluids; warm sitz baths; avoid straining.
- Pain: lidocaine 5% ointment before defecation (short-term) ± paracetamol.
- Chronic (≥6 wks): GTN 0.4% rectal ointment BD × 6–8 wks (or diltiazem 2% BD if headache/failed).
- Not healed after 6–8 wks → colorectal referral (botulinum toxin / sphincterotomy).
Safety-net/2WW: bleeding + change in habit, weight loss, IDA, mass, ≥50. Atypical fissure → exclude IBD/infection/cancer.`,
    sources: [
      { label: 'NICE CKS — Anal fissure', url: 'https://cks.nice.org.uk/topics/anal-fissure/' },
    ],
  },

  // ---------------- Pruritus ani ----------------
  {
    id: 'pruritus-ani',
    title: 'Pruritus ani (anal itch)',
    category: 'Gastroenterology',
    eyebrow: 'Hygiene + barrier · short steroid for inflamed skin',
    indication: 'Itchy perianal skin. Most is idiopathic / irritant; treat by breaking the itch–scratch cycle with hygiene and a barrier, treating any underlying cause (threadworm, haemorrhoids, skin disease, faecal soiling).',
    contraindications: 'Topical steroid perianal: short-term only (≤1–2 weeks — skin atrophy in this thin, occluded site). Avoid prolonged local-anaesthetic preparations (sensitisation). Exclude underlying cause before labelling idiopathic.',
    duration: 'Hygiene ongoing; topical steroid ≤2 weeks',
    drugs: [
      { name: 'Barrier / emollient ointment (e.g. zinc & castor oil)', dose: 'Apply', freq: 'After cleaning & BD', route: 'Topical', days: 'Ongoing' },
      { name: 'Inflamed/eczematous skin: Hydrocortisone 1% ± antifungal', dose: 'Apply thin', freq: 'OD–BD', route: 'Topical', days: '≤1–2 weeks' },
      { name: 'Night itch: sedating antihistamine (e.g. chlorphenamine)', dose: '4 mg', freq: 'ON', route: 'PO', days: 'Short-term' },
    ],
    altRegimens: [
      { label: 'Threadworm suspected', drugs: 'Mebendazole 100 mg stat, repeat at 2 weeks + treat whole household + hygiene (see Threadworm card).' },
      { label: 'Underlying cause', drugs: 'Treat haemorrhoids/fissure/skin disease (psoriasis, eczema, lichen sclerosus); manage faecal soiling; review irritants.' },
      { label: 'Persistent / atypical', drugs: 'Examine carefully; consider dermatology/colorectal referral; biopsy if suspicious lesion.' },
    ],
    counselling: [
      'Avoid scratching — it perpetuates the itch; keep nails short and consider cotton gloves at night.',
      'Clean gently with water (avoid soaps, wet wipes, perfumed products); pat dry; consider drying with a hairdryer on cool.',
      'Keep the area dry and use a barrier ointment; wear loose cotton underwear; avoid excessive wiping.',
      'Reduce possible dietary triggers (caffeine, spicy food, citrus, tomatoes) if relevant; treat constipation/soiling.',
      'Steroid cream is for short-term use only — return if not settling so the cause can be checked.',
    ],
    followUp: 'Review if not settling in 2 weeks; re-examine for an underlying cause. Persistent/atypical → consider referral and biopsy.',
    redFlags: [
      'Persistent localised lesion / ulcer / induration / bleeding → exclude anal/perianal malignancy or lichen sclerosus → refer.',
    ],
    emisText: `Pruritus ani:
- Treat any underlying cause (threadworm, haemorrhoids, fissure, skin disease, soiling).
- Hygiene: clean with water (no soap/wet wipes), pat dry, barrier ointment, loose cotton underwear, DON\u2019T scratch.
- Inflamed skin: hydrocortisone 1% (± antifungal) OD–BD for ≤1–2 weeks only.
- Night itch: sedating antihistamine ON short-term.
Persistent/atypical lesion → refer (exclude malignancy/lichen sclerosus).`,
    sources: [
      { label: 'NICE CKS — Pruritus ani', url: 'https://cks.nice.org.uk/topics/itch-perianal-pruritus-ani/' },
    ],
  },

  // ---------------- Topical corticosteroid potency ladder ----------------
  {
    id: 'topical-steroid-ladder',
    title: 'Topical corticosteroid ladder (dermatology)',
    category: 'Dermatology',
    eyebrow: 'Reference: potency by site · fingertip units · step up/down',
    indication: 'Quick reference for choosing topical corticosteroid potency. Match potency to disease severity AND body site, use the lowest effective potency for the shortest time, and always continue generous emollients alongside.',
    contraindications: 'Avoid potent/very potent steroids on the face, flexures, and napkin area, and in young children (use mild). Untreated bacterial/fungal/viral skin infection. Long continuous use → skin atrophy, striae, telangiectasia, tachyphylaxis, perioral dermatitis, systemic absorption.',
    duration: 'Short bursts until controlled, then step down / stop',
    drugs: [
      { name: 'MILD — Hydrocortisone 0.5–2.5%', dose: 'Face, flexures, children, thin skin', freq: 'OD–BD', route: 'Topical', days: 'Mildest — first choice for delicate sites' },
      { name: 'MODERATE — Clobetasone butyrate 0.05% (Eumovate); Betamethasone valerate 0.025%', dose: 'Body / limbs, mild-moderate eczema', freq: 'OD–BD', route: 'Topical', days: '~2–25× hydrocortisone' },
      { name: 'POTENT — Betamethasone valerate 0.1% (Betnovate); Mometasone 0.1% (Elocon); Fluticasone (Cutivate)', dose: 'Trunk/limbs, psoriasis, resistant eczema', freq: 'OD–BD', route: 'Topical', days: '~100–150× hydrocortisone' },
      { name: 'VERY POTENT — Clobetasol propionate 0.05% (Dermovate)', dose: 'Thick plaques, palms/soles, specialist/short courses', freq: 'OD–BD', route: 'Topical', days: '~600× hydrocortisone' },
    ],
    altRegimens: [
      { label: 'Fingertip unit (FTU) guide', drugs: '1 FTU (line from adult fingertip to first crease, ~0.5 g) covers ~2 adult palms. Hand & fingers ~1 FTU; one arm ~3; one leg ~6; trunk front ~7, back ~7; face & neck ~2.5.' },
      { label: 'Face / flexures / children', drugs: 'Use mild (hydrocortisone). For recurrent facial/flexural eczema consider a topical calcineurin inhibitor (tacrolimus / pimecrolimus) as a steroid-sparing option.' },
      { label: 'Maintenance ("weekend therapy")', drugs: 'For frequently-relapsing eczema/psoriasis at the same sites: apply a moderate/potent steroid on 2 consecutive days per week to controlled skin to prevent flares.' },
      { label: 'Step-up / step-down principle', drugs: 'Step UP potency to gain control of a flare, then step DOWN (or to alternate-day / less potent) and stop; avoid abrupt stop of potent steroids on chronic plaques (rebound).' },
    ],
    counselling: [
      'Apply a thin layer to active/affected skin only, using the fingertip-unit guide — not to normal skin.',
      'Keep using emollients generously and frequently; leave a few minutes between emollient and steroid.',
      'Stronger steroids are safe and effective in short bursts but thin the skin if overused — use the weakest that works and step down as it improves.',
      'Use only mild steroids on the face and skin folds unless a doctor advises otherwise.',
      'Some products are flammable — keep away from naked flames; wash hands after applying.',
    ],
    followUp: 'Review response; step down potency/frequency as the condition settles. Frequent need for potent steroids, poor control, or steroid side effects → review diagnosis / consider dermatology referral.',
    redFlags: [
      'Worsening despite steroid / unusual rash → consider misdiagnosis (e.g. tinea incognito — fungal rash masked by steroid), infection, or eczema herpeticum.',
      'Skin atrophy, striae, perioral dermatitis, or rebound on stopping → reassess steroid use.',
    ],
    emisText: `Topical corticosteroid potency ladder (match to severity + SITE; lowest effective potency, shortest time; + emollients):
- MILD: Hydrocortisone 1% — face, flexures, children.
- MODERATE: Clobetasone butyrate 0.05% (Eumovate) — body, mild-moderate eczema.
- POTENT: Betamethasone valerate 0.1% (Betnovate) / Mometasone 0.1% (Elocon) — trunk/limbs, psoriasis, resistant eczema.
- VERY POTENT: Clobetasol propionate 0.05% (Dermovate) — thick plaques, palms/soles (short/specialist).
FTU: 1 FTU (~0.5 g) covers ~2 palms. Step UP to control then step DOWN/stop. Avoid potent on face/flexures. Recurrent facial/flexural → consider tacrolimus.`,
    sources: [
      { label: 'NICE CKS — Corticosteroids (topical)', url: 'https://cks.nice.org.uk/topics/corticosteroids-topical/' },
      { label: 'BNF — Topical corticosteroids', url: 'https://bnf.nice.org.uk/treatment-summaries/topical-corticosteroids/' },
    ],
  },

  // ---------------- Chronic plaque psoriasis ----------------
  {
    id: 'psoriasis-plaque',
    title: 'Chronic plaque psoriasis',
    category: 'Dermatology',
    eyebrow: 'Potent steroid + vitamin D analogue · emollients',
    indication: 'Chronic plaque psoriasis (well-demarcated red scaly plaques on extensors/scalp). First-line in primary care is a potent topical corticosteroid PLUS a vitamin D analogue, with generous emollients. Treat by body site.',
    contraindications: 'Potent steroids: avoid on face/flexures (use mild ± calcineurin inhibitor); limit continuous trunk/limb use to ≤8 weeks (atrophy/rebound, risk of pustular flare on abrupt withdrawal). Calcipotriol: max weekly dose limits; caution in calcium disorders. Withdraw oral steroids carefully (can precipitate pustular psoriasis).',
    duration: 'Trunk/limb regimen up to 8 weeks; review',
    drugs: [
      { name: 'Potent steroid (e.g. Betamethasone valerate 0.1%) — mornings', dose: 'Apply thin', freq: 'OD', route: 'Topical', days: 'Up to 8 weeks (trunk/limbs)' },
      { name: '+ Vitamin D analogue (Calcipotriol) — evenings', dose: 'Apply thin', freq: 'OD', route: 'Topical', days: 'Applied separately, opposite time to steroid' },
      { name: 'OR combined Calcipotriol/betamethasone (Dovobet gel / Enstilar foam)', dose: 'Apply', freq: 'OD', route: 'Topical', days: 'Up to 4 weeks per course' },
      { name: 'Emollient', dose: 'Liberal', freq: 'Several times daily', route: 'Topical', days: 'Ongoing (mainstay)' },
    ],
    altRegimens: [
      { label: 'Inadequate after 8 weeks of potent steroid + vit D', drugs: 'Vitamin D analogue alone BD; OR potent steroid BD (≤4 weeks); OR coal tar preparation. Reassess and consider dermatology.' },
      { label: 'Scalp psoriasis', drugs: 'Potent steroid scalp application (e.g. betamethasone) OD up to 4 weeks; if scale thick, soften with coal tar/salicylic acid or oil overnight; combined calcipotriol/betamethasone gel is an option.' },
      { label: 'Face / flexures / genitals', drugs: 'Short-term mild/moderate steroid; consider topical calcineurin inhibitor (tacrolimus) for delicate sites; avoid potent steroids and irritant vit D here.' },
      { label: 'Extensive / not controlled / nails / psoriatic arthritis', drugs: 'Refer dermatology (phototherapy, systemics — methotrexate/ciclosporin/biologics). Screen for psoriatic arthritis (PEST tool) → rheumatology if positive.' },
    ],
    counselling: [
      'Psoriasis is a long-term condition that is controlled, not cured — emollients are the foundation and reduce scaling and itch.',
      'Apply the steroid and the vitamin D cream at different times of day (e.g. steroid in the morning, calcipotriol at night), thinly to the plaques.',
      'Use the potent steroid only for the recommended period (don\u2019t stop very suddenly) — overuse thins the skin and stopping abruptly can cause a flare.',
      'Lifestyle: stop smoking, reduce alcohol, manage weight; these affect severity and cardiovascular risk.',
      'Tell us about joint pain/stiffness/swelling (psoriatic arthritis) and the impact on mood — psoriasis affects wellbeing.',
    ],
    followUp: 'Review at ~4 weeks (combined products) / 8 weeks (steroid + vit D) for response and steroid duration. Annual review: assess severity (psoriasis), screen for psoriatic arthritis, and assess cardiovascular risk/comorbidities.',
    redFlags: [
      'Generalised pustular or erythrodermic psoriasis (widespread redness/pustules, systemically unwell) → same-day dermatology / admission.',
      'New/worsening joint pain, stiffness, dactylitis → psoriatic arthritis — refer rheumatology.',
    ],
    emisText: `Chronic plaque psoriasis (trunk/limbs — primary care):
- Emollients liberally (mainstay) +
- Potent topical steroid (e.g. betamethasone valerate 0.1%) OD (morning) + Calcipotriol OD (evening), applied separately, up to 8 weeks; OR combined Dovobet gel/Enstilar foam OD up to 4 weeks.
- Scalp: potent steroid scalp app ± tar/salicylic acid to descale. Face/flexures: mild steroid / tacrolimus (avoid potent + irritant vit D).
- Inadequate/extensive/nails/PsA → dermatology ± rheumatology.
Annual review: severity, PsA screen (PEST), CV risk. Avoid abrupt withdrawal of potent steroid (pustular flare).`,
    sources: [
      { label: 'NICE CG153 — Psoriasis: assessment & management', url: 'https://www.nice.org.uk/guidance/cg153' },
      { label: 'NICE CKS — Psoriasis', url: 'https://cks.nice.org.uk/topics/psoriasis/' },
    ],
  },

  // ---------------- Seborrhoeic dermatitis ----------------
  {
    id: 'seborrhoeic-dermatitis',
    title: 'Seborrhoeic dermatitis',
    category: 'Dermatology',
    eyebrow: 'Antifungal (ketoconazole) ± short mild steroid',
    indication: 'Seborrhoeic dermatitis — flaky, greasy, erythematous scale of the scalp (dandruff), face (nasolabial folds, eyebrows, hairline), ears and chest. Driven by Malassezia yeast; managed with antifungal preparations, treating itch/inflammation with a short course of mild steroid.',
    contraindications: 'Facial steroid: short-term mild only (perioral dermatitis/atrophy with overuse). Severe/atypical/treatment-resistant seborrhoeic dermatitis (esp. abrupt/explosive onset) → consider underlying immunosuppression (offer HIV test).',
    duration: 'Antifungal courses; intermittent maintenance',
    drugs: [
      { name: 'Scalp: Ketoconazole 2% shampoo', dose: 'Lather, leave 5 min, rinse', freq: '2× weekly', route: 'Topical', days: '4 weeks, then weekly/PRN maintenance' },
      { name: 'Face/body: Ketoconazole 2% cream', dose: 'Apply', freq: 'OD–BD', route: 'Topical', days: 'Until clear (up to 4 weeks)' },
      { name: 'Inflamed/itchy: Hydrocortisone 1% (face) — short course', dose: 'Apply thin', freq: 'OD–BD', route: 'Topical', days: '≤1–2 weeks' },
    ],
    altRegimens: [
      { label: 'Scalp — alternative antifungal/keratolytic shampoos', drugs: 'Selenium sulfide or zinc pyrithione or coal tar shampoos; for thick scale soften with coal tar / salicylic acid preparation first.' },
      { label: 'Scalp inflammation', drugs: 'Short course of a potent topical corticosteroid scalp application (e.g. betamethasone) for itch/inflammation alongside antifungal shampoo.' },
      { label: 'Face — steroid-sparing / recurrent', drugs: 'Topical calcineurin inhibitor (tacrolimus 0.03–0.1% / pimecrolimus) as an alternative to repeated facial steroids.' },
      { label: 'Infantile (cradle cap)', drugs: 'Usually self-limiting: emollient/baby oil to soften scale + gentle brushing/washing; mild antifungal or hydrocortisone if persistent/inflamed.' },
    ],
    counselling: [
      'This is a long-term, relapsing condition controlled by regular antifungal treatment — not a hygiene problem and not contagious.',
      'Use the antifungal shampoo regularly (e.g. twice weekly), leaving it on for ~5 minutes before rinsing; continue intermittently to prevent relapse.',
      'Use the steroid cream only for short flares of redness/itch, especially on the face.',
      'Flares are common with stress, tiredness and cold weather — restart treatment early.',
      'See your doctor if it is severe, sudden, or not responding, so other causes can be considered.',
    ],
    followUp: 'Review if not improving in 4 weeks or frequently relapsing; set up intermittent maintenance antifungal. Consider HIV testing if severe/explosive/resistant.',
    redFlags: [
      'Severe, abrupt-onset, or treatment-resistant seborrhoeic dermatitis → consider immunosuppression — offer HIV test.',
      'Diagnostic uncertainty (psoriasis, tinea, rosacea, lupus) → reassess / refer.',
    ],
    emisText: `Seborrhoeic dermatitis (Malassezia-driven; relapsing):
- Scalp: Ketoconazole 2% shampoo, leave 5 min, 2×/week × 4 wks then weekly/PRN (alt: selenium sulfide / zinc pyrithione / coal tar). Thick scale → soften with tar/salicylic acid first; potent steroid scalp app short course if inflamed.
- Face/body: Ketoconazole 2% cream OD–BD; add hydrocortisone 1% short course (≤1–2 wks) for itch/redness; tacrolimus if recurrent (steroid-sparing).
- Infantile cradle cap: emollient + gentle washing.
Severe/abrupt/resistant → offer HIV test.`,
    sources: [
      { label: 'NICE CKS — Seborrhoeic dermatitis', url: 'https://cks.nice.org.uk/topics/seborrhoeic-dermatitis/' },
    ],
  }
  );
})();
