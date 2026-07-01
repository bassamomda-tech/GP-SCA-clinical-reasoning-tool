/* ============================================
   Reasoning GP — Ready Prescriptions (batch 10)
   Dermatology · neurology · ENT.
   Adds: actinic keratoses, bedbugs, cradle cap, dandruff,
   herpetic whitlow, motion sickness, trigeminal neuralgia.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);

  RX.push(
  // ---------------- Actinic keratoses ----------------
  {
    id: 'actinic-keratoses',
    title: 'Actinic (solar) keratoses',
    category: 'Dermatology',
    eyebrow: 'Sun protection · field/lesion topical Rx',
    indication: 'Rough scaly patches on sun-exposed skin (pre-malignant). Manage by sun protection for all; treat symptomatic/numerous lesions with topical field therapy or lesion-directed treatment. Most have low risk of progression to SCC.',
    contraindications: 'Diagnostic doubt or features of SCC (induration, tenderness, rapid growth, ulceration, bleeding) \u2192 do NOT treat as AK \u2014 refer/biopsy. Topical 5-FU/imiquimod cause expected inflammation; avoid in pregnancy. Diclofenac gel: NSAID cautions.',
    duration: '5-FU 4 wks · imiquimod 4 wks/cycle · diclofenac 60\u201390 days',
    drugs: [
      { name: 'Sun protection: high-SPF (SPF 30\u201350+) broad-spectrum, cover up, avoid peak sun (all patients)', dose: 'Apply generously', freq: 'Daily', route: 'External', days: 'Ongoing (mainstay)' },
      { name: 'Emollient + reassurance for mild/few lesions', dose: 'Apply', freq: '2\u20133\u00d7/day PRN', route: 'Topical', days: 'Ongoing' },
      { name: 'Field therapy 1st: fluorouracil 5% cream (Efudix)', dose: 'Thin layer to affected field', freq: 'Once\u2013twice daily', route: 'Topical', days: '4 weeks (expect inflammation; review)' },
      { name: 'Alt: fluorouracil 0.5% + salicylic acid 10% (Actikerall) \u2014 hyperkeratotic lesions', dose: 'Apply to lesion', freq: 'Once daily', route: 'Topical', days: 'Up to 12 weeks' },
      { name: 'Alt field: imiquimod 5% cream (Aldara)', dose: 'Apply, wash off after \u22488 h', freq: '3\u00d7/week', route: 'Topical', days: '4 weeks; repeat 4-wk course after 4-wk break if needed' },
      { name: 'Alt field (better tolerated): diclofenac 3% gel (Solaraze)', dose: 'Apply to lesions', freq: 'Twice daily', route: 'Topical', days: '60\u201390 days' },
    ],
    altRegimens: [
      { label: 'Lesion-directed', drugs: 'Cryotherapy (liquid nitrogen) for isolated hyperkeratotic lesions \u2014 typically a single 5\u201310 second freeze; repeat at 2\u20133 weeks if needed.' },
      { label: 'Extensive field change / refractory', drugs: 'Dermatology for photodynamic therapy or other field treatments.' },
      { label: 'Suspected SCC/diagnostic doubt', drugs: 'Refer (2WW if suspected SCC); biopsy.' },
    ],
    counselling: [
      'These are sun-damage spots that are usually harmless but can occasionally turn into a skin cancer, so we treat troublesome ones and protect your skin.',
      'Daily sun protection is the most important thing \u2014 high-factor sunscreen, hats and avoiding strong midday sun.',
      'Field creams work by causing a few weeks of redness and soreness as they clear the damaged skin \u2014 that reaction is expected, not an allergy.',
      'Show us any spot that becomes lumpy, tender, grows quickly, bleeds or won\u2019t heal \u2014 that needs checking promptly.',
    ],
    followUp: 'Review field-therapy response; recheck for lesions that change. Refer/biopsy if suspected SCC or diagnostic doubt; immunosuppressed \u2192 lower threshold/specialist surveillance.',
    redFlags: [
      'Induration, tenderness, rapid growth, ulceration or bleeding \u2192 suspected SCC \u2192 2WW/biopsy.',
    ],
    emisText: `Actinic (solar) keratoses (pre-malignant):
- All: sun protection (high SPF, cover up) \u00b1 emollient; reassure (low SCC risk).
- Field therapy: fluorouracil 5% cream OD\u2013BD x4 wks (or fluorouracil 0.5%/salicylic acid 10% OD up to 12 wks); imiquimod 5% 3x/wk x4 wks (\u00b14-wk repeat); or diclofenac 3% gel BD x60\u201390 days (expect inflammation; avoid 5-FU/imiquimod in pregnancy).
- Isolated hyperkeratotic: cryotherapy. Extensive/refractory \u2192 dermatology (PDT).
- Induration/tender/rapid/ulcerated/bleeding \u2192 suspected SCC \u2192 2WW/biopsy.`,
    sources: [
      { label: 'NICE CKS \u2014 Actinic keratosis', url: 'https://cks.nice.org.uk/topics/actinic-keratosis/' },
    ],
  },

  // ---------------- Bedbugs ----------------
  {
    id: 'bedbugs',
    title: 'Bedbug bites',
    category: 'Dermatology',
    eyebrow: 'Eradicate infestation · symptomatic skin care',
    indication: 'Itchy bites (often in lines/clusters on exposed skin, worse on waking). Self-limiting skin reaction; the key intervention is eradicating the infestation (environmental/pest control). Topical relief for itch; antibiotics only if secondary infection.',
    contraindications: 'Bites resolve without specific drug treatment. Topical steroids: short courses. Distinguish from scabies, papular urticaria, flea bites. Insecticides are for the environment (pest control) \u2014 not applied to skin.',
    duration: 'Bites settle 1\u20132 weeks; eradication ongoing',
    drugs: [
      { name: 'Environmental eradication (professional pest control, hot-wash bedding, vacuum)', dose: '\u2014', freq: '\u2014', route: 'Environmental', days: 'Until cleared (mainstay)' },
      { name: 'Oral antihistamine for itch', dose: 'Standard', freq: 'PRN/ON', route: 'PO', days: 'Symptomatic' },
      { name: 'Mild\u2013moderate topical corticosteroid for itch/inflammation', dose: 'Apply thin', freq: 'OD\u2013BD', route: 'Topical', days: 'Short course' },
      { name: 'Flucloxacillin if secondary bacterial infection', dose: 'Standard', freq: 'QDS', route: 'PO', days: 'If infected' },
    ],
    altRegimens: [
      { label: 'Secondary infection', drugs: 'Scratched/impetiginised lesions \u2192 antibiotics (e.g. flucloxacillin).' },
      { label: 'Diagnostic uncertainty', drugs: 'Consider scabies (burrows, web spaces, household itch), fleas, or papular urticaria.' },
    ],
    counselling: [
      'Bedbug bites are harmless and settle over a week or two \u2014 the itch is a reaction to the bite.',
      'The main treatment is getting rid of the bugs: professional pest control, washing bedding/clothes on a hot cycle, and thorough vacuuming.',
      'Soothe the itch with antihistamines and, if needed, a short course of mild steroid cream; try not to scratch to avoid infection.',
      'See us if bites become increasingly red, painful, weepy or you feel unwell \u2014 that may mean a skin infection.',
    ],
    followUp: 'Reassure; review if secondary infection or if itch persists/diagnosis uncertain (reconsider scabies). Signpost to local pest-control/environmental health.',
    redFlags: [
      'Spreading erythema, pus, systemic upset \u2192 secondary infection \u2192 antibiotics.',
    ],
    emisText: `Bedbug bites:
- Self-limiting (settle 1-2 wks). KEY: eradicate infestation \u2014 professional pest control, hot-wash bedding/clothes, vacuum.
- Itch: oral antihistamine \u00b1 short mild/moderate topical steroid; avoid scratching.
- Secondary infection \u2192 flucloxacillin.
- Consider scabies/fleas/papular urticaria if atypical.`,
    sources: [
      { label: 'NICE CKS \u2014 Insect bites and stings', url: 'https://cks.nice.org.uk/topics/insect-bites-stings/' },
    ],
  },

  // ---------------- Cradle cap ----------------
  {
    id: 'cradle-cap',
    title: 'Cradle cap (infantile seborrhoeic dermatitis)',
    category: 'Paediatrics',
    eyebrow: 'Self-limiting · emollient/oil · gentle measures',
    indication: 'Greasy yellow scales on the scalp (\u00b1 face/flexures) in infants. Benign and self-limiting, usually resolving within weeks to months. Management is reassurance and simple measures; antifungal/mild steroid for persistent or inflamed cases.',
    contraindications: 'Widespread, intensely itchy, or markedly inflamed/weeping rash \u2192 reconsider (atopic eczema, secondary infection). Avoid harsh scrubbing/picking. Topical steroids only short-term for inflamed flexural disease.',
    duration: 'Self-limiting (weeks\u2013months)',
    drugs: [
      { name: 'Soften scales with emollient / baby oil / white soft paraffin, then gently brush + wash', dose: 'Apply', freq: 'OD', route: 'Topical', days: 'Until clears' },
      { name: 'Regular baby shampoo', dose: '\u2014', freq: 'Regularly', route: 'Topical', days: 'Ongoing' },
      { name: 'Persistent: topical antifungal (e.g. ketoconazole/clotrimazole) or mild steroid if inflamed', dose: 'Apply', freq: 'OD\u2013BD', route: 'Topical', days: 'Short course' },
    ],
    altRegimens: [
      { label: 'Persistent / inflamed', drugs: 'Topical imidazole antifungal; short course of mild topical corticosteroid (e.g. hydrocortisone 1%) if inflamed flexural involvement.' },
      { label: 'Diagnostic doubt', drugs: 'If very itchy/widespread/atopic features \u2192 consider atopic eczema and treat accordingly.' },
    ],
    counselling: [
      'Cradle cap is very common, harmless, and not due to poor hygiene or an allergy \u2014 it usually clears by itself over weeks to a few months.',
      'Soften the scales with a little baby oil or emollient, leave for a while, then gently loosen with a soft brush and wash with baby shampoo \u2014 don\u2019t pick or scrub hard.',
      'If it\u2019s persistent or a bit red, an antifungal or mild steroid cream can help.',
      'See us if it becomes very red, weepy, spreads, or your baby seems itchy/uncomfortable \u2014 it may be eczema or infected.',
    ],
    followUp: 'Reassure; review if persistent, inflamed, infected, or diagnostic doubt (eczema). ',
    redFlags: [
      'Weeping, pustules, rapidly spreading, or systemically unwell infant \u2192 secondary infection \u2192 assess.',
    ],
    emisText: `Cradle cap (infantile seborrhoeic dermatitis):
- Benign, self-limiting (weeks-months). Reassure (not hygiene/allergy).
- Soften scales: baby oil/emollient/white soft paraffin \u2192 gentle brush + baby shampoo; don't pick/scrub.
- Persistent/inflamed: topical antifungal (ketoconazole/clotrimazole) or short mild steroid (hydrocortisone 1%).
- Very itchy/widespread \u2192 consider atopic eczema; weeping/pustular \u2192 ?infection.`,
    sources: [
      { label: 'NICE CKS \u2014 Seborrhoeic dermatitis', url: 'https://cks.nice.org.uk/topics/seborrhoeic-dermatitis/' },
    ],
  },

  // ---------------- Dandruff ----------------
  {
    id: 'dandruff',
    title: 'Dandruff (scalp seborrhoeic dermatitis)',
    category: 'Dermatology',
    eyebrow: 'Antifungal/keratolytic shampoo · relapsing',
    indication: 'Fine white/greasy scalp scaling \u00b1 mild itch (mild seborrhoeic dermatitis). Treat with medicated antifungal/keratolytic shampoos; chronic relapsing \u2014 intermittent maintenance prevents recurrence.',
    contraindications: 'Markedly inflamed/widespread seborrhoeic dermatitis (face/flexures) may need additional antifungal cream \u00b1 short mild steroid. Severe/refractory or atypical \u2192 reconsider psoriasis, atopic/contact dermatitis, tinea capitis.',
    duration: 'Treatment courses + intermittent maintenance',
    drugs: [
      { name: 'Ketoconazole 2% shampoo', dose: 'Apply, leave 3\u20135 min, rinse', freq: '2\u00d7/week', route: 'Topical', days: '~4 weeks, then maintenance' },
      { name: 'Selenium sulfide / zinc pyrithione shampoo (alt)', dose: 'Apply', freq: '2\u00d7/week', route: 'Topical', days: 'Courses' },
      { name: 'Coal tar / salicylic acid shampoo (scaly)', dose: 'Apply', freq: 'Per product', route: 'Topical', days: 'As needed' },
      { name: 'Maintenance (relapse prevention)', dose: 'Apply', freq: 'Weekly/fortnightly', route: 'Topical', days: 'Ongoing' },
    ],
    altRegimens: [
      { label: 'Facial / flexural seborrhoeic dermatitis', drugs: 'Topical antifungal (ketoconazole/clotrimazole) cream \u00b1 short course mild topical steroid for inflammation.' },
      { label: 'Refractory / diagnostic doubt', drugs: 'Reconsider scalp psoriasis, atopic/contact dermatitis, tinea capitis; treat/refer accordingly.' },
    ],
    counselling: [
      'Dandruff is a common, harmless, long-term tendency \u2014 not a hygiene problem \u2014 and is well controlled with medicated shampoos.',
      'Use the antifungal shampoo a couple of times a week, leaving it on the scalp for a few minutes before rinsing.',
      'It tends to come back, so use the shampoo occasionally (e.g. weekly) to keep it under control even when clear.',
      'If your face or other areas are red and scaly too, an antifungal cream (sometimes with a short mild steroid) helps.',
    ],
    followUp: 'Review after ~4 weeks; set up intermittent maintenance. Refractory/atypical \u2192 reconsider diagnosis (psoriasis/tinea) or refer.',
    redFlags: [
      'Scarring, hair loss, boggy scalp swelling, or marked inflammation \u2192 reconsider (tinea capitis/other) \u2192 sample/refer.',
    ],
    emisText: `Dandruff (mild scalp seborrhoeic dermatitis):
- Antifungal shampoo: ketoconazole 2% (leave 3-5 min) 2x/wk ~4 wks, then intermittent maintenance (weekly/fortnightly). Alts: selenium sulfide, zinc pyrithione, coal tar/salicylic acid.
- Facial/flexural: topical antifungal cream \u00b1 short mild steroid.
- Relapsing/chronic \u2014 maintenance prevents recurrence. Atypical/scarring \u2192 reconsider psoriasis/tinea.`,
    sources: [
      { label: 'NICE CKS \u2014 Seborrhoeic dermatitis', url: 'https://cks.nice.org.uk/topics/seborrhoeic-dermatitis/' },
    ],
  },

  // ---------------- Herpetic whitlow ----------------
  {
    id: 'herpetic-whitlow',
    title: 'Herpetic whitlow',
    category: 'Dermatology',
    eyebrow: 'HSV finger infection · antiviral · do NOT incise',
    indication: 'HSV infection of the finger/distal digit (painful grouped vesicles on an erythematous base, often a tingling prodrome). Usually self-limiting; oral antiviral started early shortens it. Supportive care and infection-control advice.',
    contraindications: 'Do NOT incise/drain (it is viral, not a bacterial paronychia/pulp abscess \u2014 incision worsens it and risks spread). Avoid contact lens handling if ocular autoinoculation risk. Immunocompromised/severe/recurrent or ocular involvement \u2192 specialist.',
    duration: 'Antiviral ~5\u201310 days; lesions ~2\u20134 weeks',
    drugs: [
      { name: 'Aciclovir (start early, within 48\u201372 h / prodrome)', dose: '400 mg TDS (or 200 mg 5\u00d7/day)', freq: 'Per regimen', route: 'PO', days: '5\u201310 days' },
      { name: 'Analgesia (paracetamol \u00b1 ibuprofen)', dose: 'Standard', freq: 'PRN', route: 'PO', days: 'Symptomatic' },
      { name: 'Cover lesion (dressing) + hand hygiene to prevent spread', dose: '\u2014', freq: '\u2014', route: 'External', days: 'Until crusted' },
    ],
    altRegimens: [
      { label: 'Recurrent', drugs: 'Episodic antiviral at prodrome; suppressive antiviral if frequent/severe.' },
      { label: 'Secondary bacterial infection', drugs: 'If genuine superadded bacterial infection (spreading cellulitis) \u2192 antibiotics \u2014 but distinguish from primary HSV.' },
      { label: 'Immunocompromised / severe / ocular', drugs: 'Specialist input; consider higher-dose/IV antiviral; ophthalmology if eye involved.' },
    ],
    counselling: [
      'This is a cold-sore-type virus infection of the finger \u2014 painful but usually settles on its own; an antiviral tablet started early helps shorten it.',
      'Very important: it should NOT be cut or drained \u2014 that doesn\u2019t help and can make it worse or spread it.',
      'Keep it covered and wash your hands well to avoid spreading it to your eyes, genitals or other people.',
      'It can come back in the same spot; treat early at the first tingling. Seek help if it spreads, the eye is affected, or you\u2019re very unwell.',
    ],
    followUp: 'Reassure (self-limiting); episodic/suppressive antiviral if recurrent. Refer if ocular involvement, immunocompromised, severe, or diagnostic doubt (bacterial).',
    redFlags: [
      'Ocular involvement (eye pain/redness/visual change), spreading cellulitis/systemic illness, or immunocompromise \u2192 urgent/specialist.',
    ],
    emisText: `Herpetic whitlow (HSV finger):
- Usually self-limiting. Oral aciclovir 400 mg TDS x5-10 days, start early (prodrome/\u226448-72 h) + analgesia.
- DO NOT incise/drain (viral, not bacterial abscess) \u2014 worsens/spreads.
- Cover lesion + hand hygiene (avoid auto-inoculation to eyes/genitals).
- Recurrent \u2192 episodic/suppressive antiviral. Ocular/immunocompromised/severe \u2192 specialist.`,
    sources: [
      { label: 'NICE CKS \u2014 Herpes simplex (oral)', url: 'https://cks.nice.org.uk/topics/herpes-simplex-oral/' },
    ],
  },

  // ---------------- Motion sickness ----------------
  {
    id: 'motion-sickness',
    title: 'Motion sickness',
    category: 'ENT & Eyes',
    eyebrow: 'Non-drug measures · hyoscine / antihistamine',
    indication: 'Nausea/vomiting provoked by travel/motion. Non-drug measures first; preventive medication taken BEFORE travel \u2014 hyoscine hydrobromide (most effective) or sedating antihistamines.',
    contraindications: 'Hyoscine (antimuscarinic): glaucoma, prostatism/urinary retention, elderly (confusion), avoid in young children per product. Sedating antihistamines: drowsiness (driving/operating machinery), caution elderly. Take BEFORE the journey (less effective once nauseated).',
    duration: 'Before and during travel',
    drugs: [
      { name: 'Non-drug: face forward, fix on horizon, fresh air, avoid reading/screens, light meals', dose: '\u2014', freq: '\u2014', route: 'Advice', days: 'Each journey (first-line)' },
      { name: 'Hyoscine hydrobromide (oral or patch)', dose: 'Per product', freq: 'Before travel (patch ~5\u20136 h before)', route: 'PO/Transdermal', days: 'Per journey' },
      { name: 'Sedating antihistamine (e.g. cinnarizine / promethazine)', dose: 'Per product', freq: 'Before travel', route: 'PO', days: 'Per journey' },
      { name: 'Acupressure wristbands (P6) \u2014 low-risk option', dose: '\u2014', freq: 'During travel', route: 'External', days: 'Optional' },
    ],
    altRegimens: [
      { label: 'Children', drugs: 'Non-drug measures; age-appropriate antihistamine (e.g. promethazine) per product licence \u2014 check minimum age.' },
      { label: 'Pregnancy', drugs: 'Non-drug measures first; if needed, promethazine/cyclizine are options (as for NVP).' },
      { label: 'Long journeys', drugs: 'Hyoscine transdermal patch for prolonged exposure (e.g. cruises) \u2014 apply hours before.' },
    ],
    counselling: [
      'Simple measures help a lot: sit facing forward, look at the horizon, get fresh air, avoid reading or screens, and eat light before travelling.',
      'If you need medication, take it BEFORE the journey \u2014 it works to prevent sickness, not so well once you already feel sick.',
      'Hyoscine is the most effective but can cause a dry mouth, blurred vision or drowsiness; antihistamines can make you sleepy \u2014 don\u2019t drive if affected.',
      'Acupressure wristbands are a harmless option some people find helpful.',
    ],
    followUp: 'Self-care; no routine follow-up. Persistent/atypical \u201cmotion sickness\u201d with vertigo/hearing change \u2192 reconsider a vestibular cause.',
    redFlags: [
      'Vertigo, hearing loss, persistent vomiting unrelated to motion, or neurological symptoms \u2192 reconsider vestibular/central cause.',
    ],
    emisText: `Motion sickness:
- Non-drug first: face forward, horizon, fresh air, avoid reading/screens, light meals; P6 wristbands.
- Preventive (take BEFORE travel): hyoscine hydrobromide oral/patch (most effective; antimuscarinic cautions) OR sedating antihistamine (cinnarizine/promethazine \u2014 drowsiness).
- Children/pregnancy: non-drug \u00b1 promethazine/cyclizine per licence.`,
    sources: [
      { label: 'NICE CKS \u2014 Motion sickness', url: 'https://cks.nice.org.uk/topics/motion-sickness/' },
    ],
  },

  // ---------------- Trigeminal neuralgia ----------------
  {
    id: 'trigeminal-neuralgia',
    title: 'Trigeminal neuralgia',
    category: 'Neurology & Pain',
    eyebrow: 'Carbamazepine 1st-line · neurology · MRI',
    indication: 'Paroxysmal severe, brief, electric-shock-like unilateral facial pain in trigeminal distribution, triggered by light touch/chewing. First-line is carbamazepine; refer to neurology, and image (MRI) to exclude a secondary cause.',
    contraindications: 'Carbamazepine: many interactions (enzyme inducer \u2014 e.g. reduces COC/DOAC/other drug levels), hyponatraemia, blood dyscrasias, rash (test HLA-B*1502 in at-risk Han Chinese/Thai \u2014 SJS/TEN risk), hepatic impairment. Standard simple analgesia/opioids are ineffective.',
    duration: 'Titrate to control; long-term, review',
    drugs: [
      { name: 'Carbamazepine (start low, titrate)', dose: '100 mg OD\u2013BD \u2192 titrate to effect', freq: 'BD\u2013TDS', route: 'PO', days: 'Titrate; long-term' },
      { name: 'Baseline + monitoring: U&E (Na), FBC, LFTs', dose: '\u2014', freq: 'Baseline + periodic', route: 'Investigation', days: 'Ongoing' },
    ],
    altRegimens: [
      { label: 'Carbamazepine not tolerated/effective', drugs: 'Specialist alternatives: oxcarbazepine, lamotrigine, gabapentin/pregabalin, baclofen \u2014 usually neurology-guided.' },
      { label: 'Refractory', drugs: 'Neurology referral; consider neurosurgical options (e.g. microvascular decompression) or ablative procedures.' },
      { label: 'Secondary cause', drugs: 'MRI to exclude MS, tumour, or vascular compression; younger patients/bilateral/atypical \u2192 higher suspicion.' },
    ],
    counselling: [
      'This is a nerve-pain condition causing sudden, severe, shock-like facial pains \u2014 ordinary painkillers don\u2019t work, but a specific tablet (carbamazepine) usually controls it well.',
      'We start it at a low dose and build up; it can interact with other medicines (including some contraceptives) and needs occasional blood tests.',
      'Tell us urgently about any rash, fever, mouth ulcers, bruising or sore throat after starting \u2014 these need an immediate check.',
      'We\u2019ll refer you to neurology and usually arrange a scan to find the cause.',
    ],
    followUp: 'Titrate to control; monitor U&E/FBC/LFTs. Neurology referral + MRI. Refractory or red flags \u2192 specialist/neurosurgery.',
    redFlags: [
      'Sensory loss, other cranial-nerve signs, bilateral symptoms, age <40, or deafness \u2192 suspect secondary cause \u2192 urgent neurology/MRI.',
      'Carbamazepine rash/fever/mucosal involvement \u2192 stop + urgent review (SJS/TEN, blood dyscrasia).',
    ],
    emisText: `Trigeminal neuralgia:
- 1st-line: carbamazepine 100 mg OD-BD, titrate to effect (monitor Na/FBC/LFTs; many interactions incl. COC; HLA-B*1502 in at-risk ancestry). Simple analgesia/opioids ineffective.
- Refer neurology + MRI (exclude MS/tumour/vascular compression).
- Not tolerated/effective: oxcarbazepine, lamotrigine, gabapentin/pregabalin, baclofen (specialist). Refractory \u2192 neurosurgery (MVD).
- Rash/fever/mucosal/bruising on carbamazepine \u2192 stop + urgent review.`,
    sources: [
      { label: 'NICE CKS \u2014 Trigeminal neuralgia', url: 'https://cks.nice.org.uk/topics/trigeminal-neuralgia/' },
    ],
  }
  );
})();
