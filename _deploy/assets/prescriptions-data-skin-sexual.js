/* ============================================
   Reasoning GP — Ready Prescriptions (extra batch 2)
   Skin conditions & sexual/genital health.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);

  RX.push(
  // ---------------- Fungal skin infection (tinea) ----------------
  {
    id: 'tinea-skin',
    title: 'Fungal skin infection (tinea / ringworm)',
    category: 'Dermatology',
    eyebrow: 'Topical antifungal · oral if extensive/scalp/nail',
    indication: 'Tinea corporis/cruris/pedis (ringworm, jock itch, athlete\u2019s foot) — annular scaly itchy rash with raised edge. Confirm clinically ± skin scrapings if doubt.',
    contraindications: 'Oral terbinafine: hepatic impairment (check LFTs if prolonged). Avoid potent steroid alone (worsens / "tinea incognito").',
    duration: 'Topical 2–4 weeks (continue 1–2 weeks after clearing)',
    drugs: [
      { name: 'Terbinafine 1% cream', dose: 'Apply', freq: 'OD–BD', route: 'Topical', days: '1–2 weeks (foot up to 4)' },
      { name: 'OR Clotrimazole 1% cream', dose: 'Apply', freq: 'BD–TDS', route: 'Topical', days: '2–4 weeks' },
      { name: 'Marked inflammation: + Hydrocortisone 1% (short)', dose: 'Apply', freq: 'OD', route: 'Topical', days: '7 (with antifungal)' },
    ],
    altRegimens: [
      { label: 'Extensive / scalp (tinea capitis)', drugs: 'Oral terbinafine or griseofulvin (children) — scalp needs ORAL treatment; send scrapings; treat household.' },
      { label: 'Nail (onychomycosis), confirmed', drugs: 'Oral terbinafine 250 mg OD — 6 weeks (fingernail) / 3 months (toenail); confirm by clippings first.' },
    ],
    counselling: [
      'Apply to the rash AND 2 cm of surrounding normal skin; continue 1–2 weeks after it clears.',
      'Keep the area clean and dry; wear loose cotton clothing; dry between toes.',
      'Do not share towels; wash towels/socks hot; treat athlete\u2019s foot to prevent recurrence/cellulitis.',
      'Avoid using steroid creams alone — they mask and worsen fungal rashes.',
    ],
    followUp: 'Review if no better at 2–4 weeks (reconsider diagnosis / scrapings / oral therapy).',
    redFlags: [
      'Scalp involvement / hair loss → needs oral antifungal (topical insufficient).',
      'Spreading cellulitis from cracked athlete\u2019s foot → antibiotics.',
    ],
    emisText: `Tinea (ringworm/jock itch/athlete\u2019s foot):
- Terbinafine 1% cream OD–BD × 1–2 wks (foot up to 4) OR Clotrimazole 1% cream BD–TDS × 2–4 wks. Apply to rash + 2 cm margin; continue 1–2 wks after clearing.
- Scalp/nail → ORAL terbinafine (confirm nail by clippings first).
Keep dry; don\u2019t share towels; avoid steroid-only creams. Review if no better at 2–4 wks.`,
    sources: [
      { label: 'NICE CKS — Fungal skin infection (body & groin)', url: 'https://cks.nice.org.uk/topics/fungal-skin-infection-body-groin/' },
      { label: 'NICE CKS — Fungal nail infection', url: 'https://cks.nice.org.uk/topics/fungal-nail-infection/' },
    ],
  },

  // ---------------- Scabies ----------------
  {
    id: 'scabies',
    title: 'Scabies',
    category: 'Dermatology',
    eyebrow: 'Permethrin 5% · treat all contacts simultaneously',
    indication: 'Intensely itchy rash (worse at night), burrows in web spaces/wrists/genitalia. Treat the patient AND all household/close/sexual contacts at the same time, even if asymptomatic.',
    contraindications: 'Permethrin: caution in infants <2 months (specialist). Malathion if permethrin unsuitable.',
    duration: '2 applications, 7 days apart',
    drugs: [
      { name: 'Permethrin 5% cream', dose: 'Whole body (neck-down; include scalp in young/elderly)', freq: '2 applications 7 days apart', route: 'Topical', days: 'Leave on 8–12 h (overnight)' },
      { name: 'OR Malathion 0.5% aqueous', dose: 'Whole body', freq: '2 applications 7 days apart', route: 'Topical', days: 'Leave on 24 h' },
      { name: 'Itch relief: antihistamine ± crotamiton', dose: 'Standard', freq: 'PRN', route: 'PO/Topical', days: 'Itch may persist 2–4 weeks' },
    ],
    altRegimens: [
      { label: 'Crusted (Norwegian) scabies / immunocompromised', drugs: 'Specialist — oral ivermectin + topical; isolate; treat aggressively.' },
      { label: 'Infants / pregnancy', drugs: 'Permethrin generally suitable; seek advice for <2 months; include face/scalp in infants.' },
    ],
    counselling: [
      'Apply to cool dry skin over the WHOLE body (chin down), including under nails, between fingers/toes, genitals; leave on 8–12 h then wash off.',
      'Reapply to hands if washed during treatment.',
      'Treat all household and close/sexual contacts on the SAME day.',
      'Wash bedding/clothing/towels at 50°C+ (or seal in a bag for 72 h) on the treatment day.',
      'Itch can persist for 2–4 weeks after successful treatment — this does NOT mean failure.',
    ],
    followUp: 'Review at 2–4 weeks if itch persists/new burrows (consider reinfection / inadequate application / treatment failure).',
    redFlags: [
      'Crusted scabies (thick scaly plaques, immunocompromised) → highly contagious, specialist management.',
      'Secondary bacterial infection (impetiginised) → add antibiotic.',
    ],
    emisText: `Scabies (treat patient + ALL contacts same day):
- Permethrin 5% cream to whole body (chin-down; scalp in young/elderly), leave 8–12 h, wash off; REPEAT after 7 days. (Alt: malathion 0.5%, 24 h.)
- Wash bedding/clothing at 50°C+ (or bag 72 h) on treatment day.
- Itch may persist 2–4 wks (antihistamine/crotamiton) — not failure.
Review at 2–4 wks if persistent/new burrows.`,
    sources: [
      { label: 'NICE CKS — Scabies', url: 'https://cks.nice.org.uk/topics/scabies/' },
    ],
  },

  // ---------------- Head lice ----------------
  {
    id: 'head-lice',
    title: 'Head lice',
    category: 'Dermatology',
    eyebrow: 'Dimeticone 4% · only treat if live lice seen',
    indication: 'Confirmed live head lice (detection combing). Do NOT treat on itch alone or prophylactically.',
    contraindications: 'Avoid traditional insecticides where resistance high; dimeticone (physical action) preferred. Asthma caution with sprays.',
    duration: '2 applications 7 days apart',
    drugs: [
      { name: 'Dimeticone 4% lotion (Hedrin)', dose: 'Apply to dry hair', freq: '2 applications 7 days apart', route: 'Topical', days: 'Leave on 8 h / overnight' },
      { name: 'OR Wet combing (Bug Busting)', dose: 'Conditioner + fine comb', freq: 'Every 3–4 days', route: 'Mechanical', days: '≥2 weeks (until no lice)' },
    ],
    altRegimens: [
      { label: 'Treatment failure', drugs: 'Switch product class (e.g. dimeticone ↔ wet combing ↔ malathion); confirm correct application; recheck for reinfection.' },
    ],
    counselling: [
      'Only treat if you SEE a living, moving louse — itching alone is not enough.',
      'Apply to dry hair, cover all the hair/scalp, leave for the recommended time, then wash out.',
      'Repeat after 7 days to kill lice hatched from eggs.',
      'Check (comb) other household members and treat only those with live lice.',
      'No need to keep children off school.',
    ],
    followUp: 'Detection comb 2–3 days after the second application to confirm clearance.',
    redFlags: ['Secondary bacterial infection of scratched scalp → consider antibiotic.'],
    emisText: `Head lice (only if live lice seen):
- Dimeticone 4% lotion to dry hair, leave 8 h/overnight, wash out; REPEAT after 7 days. OR wet-combing every 3–4 days for ≥2 weeks.
- Check household; treat only those with live lice. No school exclusion.
Recheck by combing 2–3 days after 2nd application.`,
    sources: [
      { label: 'NICE CKS — Head lice', url: 'https://cks.nice.org.uk/topics/head-lice/' },
    ],
  },

  // ---------------- Acne vulgaris ----------------
  {
    id: 'acne',
    title: 'Acne vulgaris',
    category: 'Dermatology',
    eyebrow: 'Topical combo 1st line · oral antibiotic for moderate',
    indication: 'Mild–moderate acne. NICE NG198 recommends a 12-week course of a topical combination first line; add oral antibiotic (with a topical) for moderate–severe.',
    contraindications: 'Topical retinoid / oral tetracyclines: pregnancy & breastfeeding (avoid). Avoid antibiotic monotherapy (resistance) — always combine with benzoyl peroxide / retinoid.',
    duration: '12-week courses; review',
    drugs: [
      { name: 'Adapalene 0.1% + benzoyl peroxide gel (1st line)', dose: 'Apply thin layer', freq: 'OD (night)', route: 'Topical', days: '12 weeks' },
      { name: 'OR Benzoyl peroxide + clindamycin gel', dose: 'Apply', freq: 'OD', route: 'Topical', days: '12 weeks' },
      { name: 'Moderate: + Lymecycline (with topical)', dose: '408 mg', freq: 'OD', route: 'PO', days: 'Up to 12 weeks' },
    ],
    altRegimens: [
      { label: 'Pregnancy', drugs: 'Avoid retinoids & tetracyclines. Topical benzoyl peroxide / azelaic acid; erythromycin if oral antibiotic needed.' },
      { label: 'Female — hormonal pattern', drugs: 'Consider COC (e.g. with cyproterone/drospirenone) ± co-cyprindiol per guidance.' },
      { label: 'Severe / nodulocystic / scarring / failed therapy', drugs: 'Refer dermatology for oral isotretinoin.' },
    ],
    counselling: [
      'Apply topical treatment to the whole affected area, not just spots; start every other night if irritation.',
      'Benzoyl peroxide can bleach towels/clothing/bedding and cause dryness — use moisturiser, SPF.',
      'It takes 6–8 weeks to see benefit and up to 12 weeks for full effect — persevere.',
      'Don\u2019t pick/squeeze (scarring). Non-comedogenic skincare.',
      'Oral antibiotics are always used WITH a topical and for a limited time to avoid resistance.',
    ],
    followUp: 'Review at 12 weeks. If oral antibiotic used, review and stop by ~6 months (maintain with topical). Refer if scarring or no response.',
    redFlags: [
      'Scarring acne or major psychological impact → earlier dermatology referral.',
      'Acne fulminans / systemic features → urgent dermatology.',
    ],
    emisText: `Acne vulgaris (NG198):
- 1st line (12-wk course): Adapalene 0.1%/benzoyl peroxide gel OD at night OR benzoyl peroxide/clindamycin gel OD.
- Moderate: ADD Lymecycline 408 mg OD (always WITH a topical; review/stop by ~6 months).
- Pregnancy: avoid retinoids/tetracyclines → benzoyl peroxide/azelaic acid (+ erythromycin if needed).
Counsel: 6–12 wks to work; BPO bleaches fabrics; don\u2019t pick. Refer if scarring/failed.`,
    sources: [
      { label: 'NICE NG198 — Acne vulgaris', url: 'https://www.nice.org.uk/guidance/ng198' },
      { label: 'NICE CKS — Acne vulgaris', url: 'https://cks.nice.org.uk/topics/acne-vulgaris/' },
    ],
  },

  // ---------------- Rosacea ----------------
  {
    id: 'rosacea',
    title: 'Rosacea',
    category: 'Dermatology',
    eyebrow: 'Topical for papulopustular · oral doxycycline if needed',
    indication: 'Rosacea — facial flushing, erythema, papules/pustules, telangiectasia. Treat by predominant feature; manage triggers.',
    contraindications: 'Oral tetracyclines: pregnancy/breastfeeding (avoid → erythromycin). Topical brimonidine: caution (rebound erythema).',
    duration: 'Topical 8–12 weeks; oral 8–12 weeks',
    drugs: [
      { name: 'Papulopustular: Ivermectin 1% cream', dose: 'Apply', freq: 'OD', route: 'Topical', days: '8–12 weeks' },
      { name: 'OR Metronidazole 0.75% gel/cream / Azelaic acid 15% gel', dose: 'Apply', freq: 'OD–BD', route: 'Topical', days: '8–12 weeks' },
      { name: 'Moderate–severe: Doxycycline (modified-release 40 mg)', dose: '40 mg', freq: 'OD', route: 'PO', days: '8–12 weeks' },
    ],
    altRegimens: [
      { label: 'Persistent erythema/flushing', drugs: 'Brimonidine 0.5% gel OD PRN (caution rebound) ± laser/IPL for telangiectasia.' },
      { label: 'Pregnancy', drugs: 'Topical azelaic acid / erythromycin; avoid tetracyclines & ivermectin.' },
      { label: 'Ocular rosacea', drugs: 'Lid hygiene, ocular lubricants; oral doxycycline; refer ophthalmology if keratitis.' },
    ],
    counselling: [
      'Identify and avoid triggers (sun, heat, alcohol, spicy food, stress); daily SPF 30+.',
      'Use gentle, non-soap cleansers and fragrance-free moisturisers.',
      'It controls — not cures; expect 8–12 weeks for benefit.',
      'Avoid topical steroids on the face (worsen rosacea).',
    ],
    followUp: 'Review at 8–12 weeks; consider maintenance topical. Refer for laser (telangiectasia) or rhinophyma.',
    redFlags: [
      'Eye pain/redness/visual symptoms → ophthalmology (ocular rosacea/keratitis).',
      'Rhinophyma → dermatology/plastics.',
    ],
    emisText: `Rosacea (treat by feature; manage triggers + SPF):
- Papulopustular: Ivermectin 1% cream OD (or metronidazole 0.75% gel BD / azelaic acid 15% gel) × 8–12 wks.
- Moderate–severe: ADD Doxycycline MR 40 mg OD × 8–12 wks (pregnancy → erythromycin/azelaic acid).
- Flushing/erythema: brimonidine 0.5% gel PRN; laser/IPL for telangiectasia.
Avoid facial steroids. Ocular symptoms → ophthalmology.`,
    sources: [
      { label: 'NICE CKS — Rosacea', url: 'https://cks.nice.org.uk/topics/rosacea/' },
    ],
  },

  // ---------------- Urticaria ----------------
  {
    id: 'urticaria',
    title: 'Urticaria (hives)',
    category: 'Dermatology',
    eyebrow: 'Non-sedating antihistamine · up-dose if needed',
    indication: 'Acute or chronic urticaria (itchy weals ± angioedema) without anaphylaxis. Identify/avoid triggers.',
    contraindications: 'Anaphylaxis (airway/breathing/circulation) → IM adrenaline, NOT antihistamine alone. Sedating antihistamines: caution driving/elderly.',
    duration: 'PRN to regular; chronic up to several weeks',
    drugs: [
      { name: 'Cetirizine (or loratadine/fexofenadine)', dose: '10 mg', freq: 'OD (up to QDS / x4 in chronic per specialist)', route: 'PO', days: 'Until settled' },
      { name: 'Add at night: Chlorphenamine (if itch disturbs sleep)', dose: '4 mg', freq: 'ON', route: 'PO', days: 'Short-term' },
      { name: 'Severe acute flare: Prednisolone (short course)', dose: '40 mg', freq: 'OD', route: 'PO', days: '3–5' },
    ],
    altRegimens: [
      { label: 'Chronic spontaneous urticaria not controlled', drugs: 'Up-dose non-sedating antihistamine (up to 4×, off-licence) → refer dermatology/immunology (omalizumab).' },
      { label: 'Angioedema without weals / ACEi-related', drugs: 'Stop ACE inhibitor; consider C1-esterase inhibitor deficiency if recurrent.' },
    ],
    counselling: [
      'Take the antihistamine regularly (not just when itchy) for best control.',
      'Avoid identifiable triggers (NSAIDs, certain foods, heat, pressure, infection).',
      'Most acute urticaria settles within days to a few weeks.',
      'Seek emergency help (999) with swelling of the lips/tongue/throat, difficulty breathing, or feeling faint.',
    ],
    followUp: 'Review chronic urticaria persisting >6 weeks; consider referral if uncontrolled on up-dosed antihistamine.',
    redFlags: [
      'Anaphylaxis (airway/breathing/circulation) → IM adrenaline, 999.',
      'Painful/bruising weals lasting >24 h, systemic features → consider urticarial vasculitis.',
    ],
    emisText: `Urticaria (hives):
- Non-sedating antihistamine: Cetirizine 10 mg OD (or loratadine/fexofenadine); up-dose if needed.
- Disturbed sleep: add chlorphenamine 4 mg ON short-term.
- Severe acute flare: prednisolone 40 mg OD × 3–5 days.
Avoid triggers; take regularly. Chronic >6 wks or uncontrolled → dermatology/immunology.
Angioedema with airway/breathing compromise → IM adrenaline + 999.`,
    sources: [
      { label: 'NICE CKS — Urticaria', url: 'https://cks.nice.org.uk/topics/urticaria/' },
    ],
  },

  // ---------------- Genital chlamydia ----------------
  {
    id: 'chlamydia',
    title: 'Genital chlamydia',
    category: "Women's & Sexual Health",
    eyebrow: 'Doxycycline 7 days (1st line) · partner notification',
    indication: 'Uncomplicated genital Chlamydia trachomatis (positive NAAT) in non-pregnant adults. Treat index + arrange partner notification; offer full STI screen.',
    contraindications: 'Doxycycline: pregnancy/breastfeeding & children (avoid) → azithromycin. Avoid milk/antacids around doses.',
    duration: '7 days',
    drugs: [
      { name: 'Doxycycline', dose: '100 mg', freq: 'BD', route: 'PO', days: '7' },
      { name: 'Pregnancy/breastfeeding: Azithromycin', dose: '1 g then 500 mg OD ×2 days', freq: 'See dose', route: 'PO', days: '3' },
    ],
    altRegimens: [
      { label: 'Doxycycline not tolerated/declined', drugs: 'Azithromycin 1 g stat then 500 mg OD × 2 days.' },
      { label: 'Rectal chlamydia / LGV risk', drugs: 'Doxycycline 100 mg BD × 7 days (preferred); extend per GUM advice if LGV.' },
    ],
    counselling: [
      'Avoid sex (including with treated partners) until 7 days after treatment starts (or 7 days after azithromycin).',
      'Inform recent sexual partners so they can be tested/treated (partner notification — GUM can help).',
      'Complete the full course; doxycycline can cause photosensitivity — use sun protection.',
      'Offer a full STI screen (HIV, syphilis, gonorrhoea) and contraception advice.',
    ],
    followUp: 'Test of cure NOT routinely needed (except pregnancy, rectal, or persistent symptoms — retest ≥3–4 weeks). Re-test under-25s at 3 months.',
    redFlags: [
      'Pelvic/abdominal pain + deep dyspareunia + cervical excitation → PID (treat empirically).',
      'Pregnant + positive → test of cure at ≥3 weeks; obstetric awareness.',
    ],
    emisText: `Genital chlamydia (NAAT positive):
- Doxycycline 100 mg PO BD × 7 days (1st line). Pregnancy/breastfeeding → Azithromycin 1 g then 500 mg OD × 2 days.
- Abstain from sex 7 days after starting; partner notification; full STI screen.
- Test of cure only if pregnant/rectal/persistent. Re-test under-25s at 3 months.`,
    sources: [
      { label: 'BASHH — Chlamydia 2018', url: 'https://www.bashh.org/guidelines' },
      { label: 'NICE CKS — Chlamydia (uncomplicated)', url: 'https://cks.nice.org.uk/topics/chlamydia-uncomplicated-genital/' },
    ],
  },

  // ---------------- Bacterial vaginosis ----------------
  {
    id: 'bv',
    title: 'Bacterial vaginosis',
    category: "Women's & Sexual Health",
    eyebrow: 'Metronidazole · oral or vaginal',
    indication: 'Symptomatic BV (thin grey, fishy-smelling, non-itchy discharge; pH >4.5). Asymptomatic usually needs no treatment (except some pregnant/pre-procedure).',
    contraindications: 'Oral metronidazole + alcohol → disulfiram-like reaction (avoid during and 48 h after). Pregnancy: avoid high single-dose regimens (use 7-day course).',
    duration: '5–7 days',
    drugs: [
      { name: 'Metronidazole', dose: '400 mg', freq: 'BD', route: 'PO', days: '5–7' },
      { name: 'OR Metronidazole 0.75% vaginal gel', dose: '1 applicator', freq: 'ON', route: 'PV', days: '5' },
      { name: 'OR Clindamycin 2% vaginal cream', dose: '1 applicator', freq: 'ON', route: 'PV', days: '7' },
    ],
    altRegimens: [
      { label: 'Single-dose option (non-pregnant)', drugs: 'Metronidazole 2 g PO stat (lower cure than 7-day; avoid in pregnancy).' },
      { label: 'Pregnancy / breastfeeding', drugs: 'Metronidazole 400 mg BD × 5–7 days (avoid 2 g stat); vaginal options also suitable.' },
    ],
    counselling: [
      'Avoid alcohol during oral metronidazole and for 48 h afterwards.',
      'Avoid vaginal douching, perfumed soaps/shower gels, and antiseptics — these trigger BV.',
      'Clindamycin cream can weaken latex condoms/diaphragms.',
      'BV is not an STI but recurs commonly; return if symptoms persist or recur.',
    ],
    followUp: 'No routine test of cure. Recurrent BV → consider longer/suppressive regimens; review triggers.',
    redFlags: [
      'Pregnant with symptoms → treat (associated with preterm birth).',
      'Discharge with pelvic pain/fever/IMB → consider PID / STI screen.',
    ],
    emisText: `Bacterial vaginosis (symptomatic):
- Metronidazole 400 mg PO BD × 5–7 days (avoid alcohol during + 48 h after) OR
- Metronidazole 0.75% vaginal gel ON × 5 days OR Clindamycin 2% cream ON × 7 days.
Avoid douching/perfumed products. Pregnancy → 5–7 day course (not 2 g stat). Recurrent → suppressive regimen.`,
    sources: [
      { label: 'BASHH — Bacterial vaginosis 2012', url: 'https://www.bashh.org/guidelines' },
      { label: 'NICE CKS — Bacterial vaginosis', url: 'https://cks.nice.org.uk/topics/bacterial-vaginosis/' },
    ],
  },

  // ---------------- Vaginal thrush ----------------
  {
    id: 'vaginal-thrush',
    title: 'Vaginal candidiasis (thrush)',
    category: "Women's & Sexual Health",
    eyebrow: 'Oral fluconazole or clotrimazole pessary',
    indication: 'Symptomatic vulvovaginal candidiasis (thick white discharge, vulval itch/soreness). Confirm clinically ± swab if recurrent/uncertain.',
    contraindications: 'Oral fluconazole: pregnancy (avoid — use topical). Interactions (warfarin, statins). Clotrimazole damages latex condoms/diaphragms.',
    duration: 'Single dose or short course',
    drugs: [
      { name: 'Fluconazole (non-pregnant)', dose: '150 mg', freq: 'Stat', route: 'PO', days: '1' },
      { name: 'OR Clotrimazole pessary', dose: '500 mg', freq: 'Stat (ON)', route: 'PV', days: '1' },
      { name: 'Vulval itch: + Clotrimazole 1–2% cream', dose: 'Apply', freq: 'BD–TDS', route: 'Topical', days: 'PRN' },
    ],
    altRegimens: [
      { label: 'Pregnancy', drugs: 'Clotrimazole 500 mg pessary ON (may need up to 7 nights of lower-strength); AVOID oral fluconazole.' },
      { label: 'Recurrent (≥4/year)', drugs: 'Confirm by swab; induction (fluconazole 150 mg every 72 h × 3 doses) then maintenance (150 mg weekly × 6 months).' },
      { label: 'Severe symptoms', drugs: 'Fluconazole 150 mg repeated after 3 days; add topical for vulval symptoms.' },
    ],
    counselling: [
      'Avoid soaps/shower gels on the vulva; use emollient washes; avoid tight synthetic underwear.',
      'Antifungal pessaries/creams can weaken latex condoms and diaphragms.',
      'Most improve within a few days; vulval cream helps the external itch.',
      'Return if no better, recurrent, or if pregnant/uncertain diagnosis (swab).',
    ],
    followUp: 'No routine review. Recurrent or treatment failure → confirm species (non-albicans), check HbA1c, consider maintenance regimen.',
    redFlags: [
      'Recurrent/refractory thrush → check for diabetes; consider non-albicans Candida.',
      'Pelvic pain / abnormal bleeding / atypical discharge → reconsider diagnosis / STI screen.',
    ],
    emisText: `Vaginal thrush:
- Fluconazole 150 mg PO stat (non-pregnant) OR Clotrimazole 500 mg pessary ON stat.
- Add clotrimazole 1–2% cream for vulval itch.
- Pregnancy: clotrimazole pessary (AVOID oral fluconazole).
- Recurrent (≥4/yr): swab → fluconazole 150 mg every 72 h ×3 then 150 mg weekly × 6 months; check HbA1c.
Avoid soaps; pessaries weaken latex condoms.`,
    sources: [
      { label: 'NICE CKS — Candida (female genital)', url: 'https://cks.nice.org.uk/topics/candida-female-genital/' },
    ],
  }
  );
})();
