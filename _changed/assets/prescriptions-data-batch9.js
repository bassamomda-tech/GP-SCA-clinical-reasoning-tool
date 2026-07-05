/* ============================================
   Reasoning GP — Ready Prescriptions (batch 9)
   Dermatology · women's health · GI · sexual health · oral.
   Adds: pityriasis rosea, pityriasis versicolor, pruritus
   vulvae, roundworm, verrucae & warts, anogenital warts,
   genital herpes, aphthous ulcers.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);

  RX.push(
  // ---------------- Pityriasis rosea ----------------
  {
    id: 'pityriasis-rosea',
    title: 'Pityriasis rosea',
    category: 'Dermatology',
    eyebrow: 'Self-limiting · reassure · symptomatic only',
    indication: 'Self-limiting rash: a herald patch followed days later by a \u201cChristmas-tree\u201d distribution of oval scaly macules on the trunk. Resolves spontaneously over 6\u201312 weeks. Management is reassurance and symptomatic relief of itch.',
    contraindications: 'No specific drug treatment needed. Confirm the diagnosis \u2014 exclude tinea (KOH if doubt), guttate psoriasis, and especially secondary SYPHILIS (if sexual risk, palms/soles involved, or atypical) and a drug eruption. Caution: rash may flare in pregnancy \u2014 some association with adverse outcomes if early pregnancy (discuss/monitor).',
    duration: 'Self-limiting (6\u201312 weeks)',
    drugs: [
      { name: 'Reassurance + explanation (mainstay)', dose: '\u2014', freq: '\u2014', route: 'Advice', days: 'Until resolves' },
      { name: 'Emollients for dryness/scale', dose: 'Apply', freq: 'PRN', route: 'Topical', days: 'Symptomatic' },
      { name: 'Mild topical corticosteroid + oral antihistamine for itch', dose: 'Apply / standard', freq: 'OD\u2013BD / PRN', route: 'Topical/PO', days: 'Symptomatic' },
    ],
    altRegimens: [
      { label: 'Diagnostic doubt', drugs: 'Consider tinea (scrape/KOH), guttate psoriasis, and serology for secondary syphilis if any sexual risk / palmoplantar involvement / atypical features.' },
      { label: 'Pregnancy', drugs: 'Discuss possible (uncommon) association with adverse outcomes if onset in early pregnancy; involve obstetrics/dermatology as appropriate.' },
    ],
    counselling: [
      'This is a harmless, non-contagious rash that clears on its own, usually within 6\u201312 weeks \u2014 it isn\u2019t a sign of anything serious.',
      'There\u2019s no specific cure or tablet needed; moisturisers and, if itchy, a mild steroid cream or antihistamine help.',
      'It may look worse before it fades, and can leave temporary marks (especially on darker skin) that settle.',
      'Tell us if you\u2019re pregnant, the rash is on your palms/soles, or it doesn\u2019t follow the usual pattern \u2014 we may check a blood test.',
    ],
    followUp: 'Reassure; review only if atypical, not resolving by ~3 months, or diagnostic doubt. Pregnancy onset \u2192 discuss/monitor.',
    redFlags: [
      'Palmar/plantar rash, sexual risk, or atypical features \u2192 exclude secondary syphilis (serology).',
      'Not resolving by ~3 months \u2192 reconsider diagnosis.',
    ],
    emisText: `Pityriasis rosea:
- Self-limiting (herald patch \u2192 "Christmas-tree" trunk rash), clears 6-12 wks. Reassure; non-contagious.
- Symptomatic only: emollients; mild topical steroid + oral antihistamine for itch.
- Exclude tinea, guttate psoriasis, drug eruption; SYPHILIS serology if palms/soles/sexual risk/atypical.
- Pregnancy onset \u2192 discuss possible adverse association.`,
    sources: [
      { label: 'NICE CKS \u2014 Pityriasis rosea', url: 'https://cks.nice.org.uk/topics/pityriasis-rosea/' },
    ],
  },

  // ---------------- Pityriasis versicolor ----------------
  {
    id: 'pityriasis-versicolor',
    title: 'Pityriasis versicolor',
    category: 'Dermatology',
    eyebrow: 'Antifungal shampoo/cream · oral if extensive',
    indication: 'Superficial yeast (Malassezia) infection: scaly hypo/hyperpigmented macules on trunk/upper arms. Topical antifungal first-line; oral for extensive/refractory. Pigment change persists for months after cure.',
    contraindications: 'Oral itraconazole/fluconazole: hepatotoxicity, drug interactions (CYP), pregnancy. Recurrence is common. Set expectation that the colour change takes time to normalise (not treatment failure).',
    duration: 'Topical 1\u20134 weeks; oral short course',
    drugs: [
      { name: 'Ketoconazole 2% shampoo (apply to skin, leave 5\u201310 min, rinse)', dose: 'Apply', freq: 'OD', route: 'Topical', days: '5\u201310 days (or weekly courses)' },
      { name: 'Selenium sulfide shampoo (as body wash) \u2014 alternative', dose: 'Apply', freq: 'OD', route: 'Topical', days: '7 days' },
      { name: 'Topical imidazole cream (small areas)', dose: 'Apply', freq: 'OD\u2013BD', route: 'Topical', days: '2\u20134 weeks' },
      { name: 'Extensive/refractory: oral itraconazole (or fluconazole)', dose: 'Per regimen', freq: 'Per regimen', route: 'PO', days: 'Short course' },
    ],
    altRegimens: [
      { label: 'Recurrent', drugs: 'Intermittent prophylactic ketoconazole shampoo (e.g. monthly) or periodic topical antifungal; advise it recurs especially in warm/humid conditions.' },
      { label: 'Confirm if doubt', drugs: 'Skin scrapings/Wood\u2019s lamp (yellow-green fluorescence) if diagnosis uncertain.' },
    ],
    counselling: [
      'This is a common, harmless overgrowth of a normal skin yeast \u2014 not a hygiene problem and not contagious in the usual sense.',
      'Use the antifungal shampoo on the affected skin, leave it on for a few minutes, then rinse; or a cream for small patches.',
      'Importantly, the patches of lighter/darker skin take weeks to months to return to normal colour AFTER the infection is treated \u2014 that\u2019s not failure of treatment.',
      'It often comes back, especially in warm, humid weather or with sweating \u2014 occasional repeat treatment helps prevent this.',
    ],
    followUp: 'Reassess at 2\u20134 weeks (scaling/itch resolve before pigment). Extensive/refractory \u2192 oral antifungal. Recurrent \u2192 intermittent prophylaxis.',
    redFlags: [
      'Diagnostic doubt or no response to antifungal \u2192 reconsider (vitiligo, post-inflammatory change, other) \u00b1 scrapings.',
    ],
    emisText: `Pityriasis versicolor (Malassezia):
- 1st-line topical: ketoconazole 2% shampoo to skin, leave 5-10 min, rinse, OD x 5-10 days (or selenium sulfide); imidazole cream for small areas.
- Extensive/refractory: oral itraconazole/fluconazole short course (LFTs/interactions; not pregnancy).
- Recurrence common \u2192 intermittent prophylactic shampoo.
- Counsel: pigment change persists weeks-months after cure (NOT failure).`,
    sources: [
      { label: 'NICE CKS \u2014 Pityriasis versicolor', url: 'https://cks.nice.org.uk/topics/pityriasis-versicolor/' },
    ],
  },

  // ---------------- Pruritus vulvae ----------------
  {
    id: 'pruritus-vulvae',
    title: 'Pruritus vulvae',
    category: "Women's & Sexual Health",
    eyebrow: 'Find the cause · emollient/soap substitute',
    indication: 'Vulval itch. Identify and treat the cause (candida, dermatitis/lichen simplex, lichen sclerosus, infection, atrophy, rarely VIN/cancer). General skin-care measures for all; treat the specific cause.',
    contraindications: 'Persistent vulval itch with a lump, ulcer, white/thickened plaque, or non-healing lesion \u2192 examine and exclude lichen sclerosus and vulval malignancy (VIN/cancer) \u2014 do not just keep treating empirically. Potent steroids: appropriate for lichen sclerosus but confirm diagnosis.',
    duration: 'Per cause; review',
    drugs: [
      { name: 'General: emollient/soap substitute; avoid irritants (soaps, wipes, tight synthetics)', dose: 'Apply', freq: 'Regularly', route: 'Topical', days: 'Ongoing (all)' },
      { name: 'Candida: topical/oral antifungal (clotrimazole / fluconazole)', dose: 'Per product', freq: 'Per product', route: 'Topical/PO', days: 'Per regimen' },
      { name: 'Dermatitis/lichen simplex: short course topical corticosteroid', dose: 'Apply thin', freq: 'OD\u2013BD', route: 'Topical', days: 'Short course' },
      { name: 'Lichen sclerosus: potent topical steroid (e.g. clobetasol)', dose: 'Apply', freq: 'Per regimen', route: 'Topical', days: 'Induction then maintenance' },
    ],
    altRegimens: [
      { label: 'Atrophic (postmenopausal)', drugs: 'Topical vaginal/vulval oestrogen + emollients for atrophy-related itch.' },
      { label: 'Suspected lichen sclerosus', drugs: 'Potent topical steroid regimen; confirm diagnosis; long-term follow-up (small malignancy risk) \u2014 consider dermatology/gynae.' },
      { label: 'Infection/STI', drugs: 'Swab/treat candida, BV, trichomonas as indicated; STI screen if risk.' },
    ],
    counselling: [
      'Vulval itch is common and usually treatable once we find the cause \u2014 thrush, skin irritation, or skin conditions are the usual reasons.',
      'General skin care helps a lot: wash with an emollient instead of soap, avoid perfumed products and wipes, wear loose cotton underwear, and pat dry.',
      'Use any cream exactly as directed; for some skin conditions a stronger steroid ointment is the correct treatment.',
      'Please come back if you notice a lump, ulcer, a white or thickened patch, or the itch doesn\u2019t settle \u2014 we\u2019ll examine to rule out anything more serious.',
    ],
    followUp: 'Review response; examine and biopsy/refer if persistent, or any suspicious lesion. Lichen sclerosus \u2192 ongoing follow-up. Recurrent candida \u2192 check glucose.',
    redFlags: [
      'Lump, ulcer, persistent white/thickened plaque, bleeding, or non-healing lesion \u2192 exclude lichen sclerosus / VIN / vulval cancer \u2192 examine \u00b1 2WW.',
    ],
    emisText: `Pruritus vulvae (treat the cause):
- All: emollient/soap substitute, avoid irritants (soaps/wipes), loose cotton, pat dry.
- Candida: clotrimazole/fluconazole. Dermatitis/lichen simplex: short topical steroid. Atrophy: topical oestrogen.
- Lichen sclerosus: potent topical steroid (e.g. clobetasol) + follow-up.
- Recurrent candida \u2192 check glucose. Lump/ulcer/white plaque/non-healing \u2192 examine, exclude VIN/cancer (2WW).`,
    sources: [
      { label: 'NICE CKS \u2014 Pruritus vulvae', url: 'https://cks.nice.org.uk/topics/pruritus-vulvae/' },
    ],
  },

  // ---------------- Roundworm ----------------
  {
    id: 'roundworm',
    title: 'Roundworm (ascariasis & other intestinal worms)',
    category: 'Gastroenterology',
    eyebrow: 'Anthelmintic · hygiene · treat household',
    indication: 'Intestinal nematode infection (e.g. Ascaris lumbricoides, and other helminths). Anthelmintic treatment with hygiene measures. Consider travel/migration history. (For threadworm/pinworm see the dedicated card.)',
    contraindications: 'Mebendazole/albendazole: avoid in first trimester of pregnancy (use after specialist advice); albendazole teratogenic in animals. Heavy Ascaris load can rarely cause bowel/biliary obstruction. Eosinophilia or atypical features \u2192 consider other helminths / specialist (e.g. strongyloides before immunosuppression).',
    duration: 'Single dose or short course',
    drugs: [
      { name: 'Mebendazole', dose: '100 mg BD (or 500 mg stat)', freq: 'Per regimen', route: 'PO', days: '3 days (or single dose)' },
      { name: 'Albendazole (alternative)', dose: '400 mg', freq: 'Stat', route: 'PO', days: 'Single dose' },
      { name: 'Hygiene: handwashing, sanitation, wash produce', dose: '\u2014', freq: '\u2014', route: 'Advice', days: 'Ongoing' },
    ],
    altRegimens: [
      { label: 'Other/atypical helminths', drugs: 'Stool microscopy (ova/cysts/parasites); seek specialist/tropical advice for strongyloides, hookworm, schistosomiasis, or eosinophilia.' },
      { label: 'Household / endemic exposure', drugs: 'Treat symptomatic household contacts; reinforce sanitation and food/water hygiene; consider re-treatment in heavy endemic exposure.' },
      { label: 'Pregnancy', drugs: 'Defer treatment of asymptomatic infection; if needed, treat after first trimester per specialist advice.' },
    ],
    counselling: [
      'Worm infections are treated with a short anthelmintic medicine and usually clear quickly.',
      'Good hygiene prevents re-infection and spread: wash hands well (especially before food and after the toilet), wash fruit and vegetables, and ensure safe water.',
      'Tell us about recent travel or where you grew up \u2014 it helps us pick the right treatment and check for other parasites.',
      'See us if you have ongoing tummy pain, weight loss, or pass worms despite treatment.',
    ],
    followUp: 'Reassess symptoms; stool microscopy if persistent/atypical or eosinophilia. Specialist/tropical advice for non-Ascaris helminths or complications.',
    redFlags: [
      'Severe abdominal pain/obstruction or biliary symptoms (heavy Ascaris load), or systemic features \u2192 urgent assessment.',
      'Eosinophilia / before immunosuppression \u2192 consider strongyloides screening (specialist).',
    ],
    emisText: `Roundworm / intestinal nematodes (e.g. Ascaris):
- Mebendazole 100 mg BD x3 days (or 500 mg stat); or albendazole 400 mg stat.
- Hygiene: handwashing, sanitation, wash produce; treat symptomatic contacts.
- Avoid in 1st-trimester pregnancy (defer/specialist).
- Travel/migration hx; stool O,C&P if persistent/atypical; eosinophilia/pre-immunosuppression \u2192 strongyloides screen.
- (Threadworm \u2192 separate card.)`,
    sources: [
      { label: 'NICE CKS \u2014 Threadworm (intestinal worms)', url: 'https://cks.nice.org.uk/topics/threadworm/' },
    ],
  },

  // ---------------- Verrucae & warts ----------------
  {
    id: 'verrucae-warts',
    title: 'Verrucae & cutaneous warts',
    category: 'Dermatology',
    eyebrow: 'Mostly self-resolve · salicylic acid · cryotherapy',
    indication: 'Common viral warts (hands) and verrucae (plantar). Most resolve spontaneously (esp. children) within ~2 years. Treatment is optional for symptomatic/persistent lesions: topical salicylic acid \u00b1 cryotherapy.',
    contraindications: 'Avoid salicylic acid / cryotherapy on the face and over poor circulation / peripheral neuropathy (e.g. diabetes \u2014 risk of ulceration). Do not over-treat in young children. Immunocompromised or rapidly changing/atypical lesions \u2192 reconsider/refer.',
    duration: 'Salicylic acid for up to ~12 weeks',
    drugs: [
      { name: 'Salicylic acid (e.g. 12\u201326%) topical', dose: 'Apply (pare + occlude)', freq: 'Daily', route: 'Topical', days: 'Up to ~12 weeks' },
      { name: 'Cryotherapy (liquid nitrogen)', dose: '\u2014', freq: 'Every 2\u20133 weeks', route: 'Procedure', days: 'Several cycles' },
      { name: 'Soak + file/pare hyperkeratosis before applying', dose: '\u2014', freq: 'With each application', route: 'External', days: 'Ongoing' },
    ],
    altRegimens: [
      { label: 'Combination', drugs: 'Salicylic acid + cryotherapy together may improve clearance over either alone.' },
      { label: 'Reassurance only', drugs: 'For asymptomatic warts (especially in children), no treatment is reasonable \u2014 most clear within ~2 years.' },
      { label: 'Refractory', drugs: 'Persistent/extensive/facial or refractory warts \u2192 consider dermatology (other modalities).' },
    ],
    counselling: [
      'Warts and verrucae are caused by a virus and are harmless \u2014 most go away on their own within a couple of years, especially in children.',
      'If you want to treat them, salicylic acid (applied daily after soaking and gently filing the hard skin) and/or freezing treatment work over several weeks.',
      'Be patient and consistent \u2014 treatment takes weeks to months; protect surrounding normal skin.',
      'Cover verrucae at swimming pools and avoid sharing towels/footwear to reduce spread.',
      'Don\u2019t use acid or freezing on the face, or on the feet if you have diabetes or poor circulation \u2014 check with us first.',
    ],
    followUp: 'Review after a course of salicylic acid/cryotherapy; reassure re slow response. Refractory/atypical/facial \u2192 dermatology.',
    redFlags: [
      'Rapidly growing, bleeding, pigmented or atypical lesion (?amelanotic melanoma/SCC), or immunocompromised \u2192 reassess/refer.',
    ],
    emisText: `Verrucae & cutaneous warts:
- Mostly self-resolve (~2 yrs, esp children) \u2014 treatment optional for symptomatic/persistent.
- Salicylic acid 12-26% daily (pare/soak + occlude) up to ~12 wks \u00b1 cryotherapy q2-3 wks; combination may help.
- AVOID acid/cryo on face; caution in diabetes/poor circulation/neuropathy.
- Cover at pools; don't share towels. Atypical/bleeding/pigmented or immunocompromised \u2192 refer.`,
    sources: [
      { label: 'NICE CKS \u2014 Warts and verrucae', url: 'https://cks.nice.org.uk/topics/warts-verrucae/' },
    ],
  },

  // ---------------- Anogenital warts ----------------
  {
    id: 'anogenital-warts',
    title: 'Anogenital warts',
    category: "Women's & Sexual Health",
    eyebrow: 'Topical (podophyllotoxin/imiquimod) or ablation · GUM',
    indication: 'External anogenital warts (HPV). Topical patient-applied therapy or clinician ablation; choice depends on number, site, morphology and pregnancy. Offer sexual-health (GUM) referral, STI screen, and HPV vaccination discussion.',
    contraindications: 'Podophyllotoxin and imiquimod are CONTRAINDICATED in pregnancy \u2014 use physical ablation (cryotherapy) instead. Internal (vaginal/cervical/anal/urethral) or extensive warts \u2192 GUM/specialist. Podophyllotoxin: apply only to external warts, limited area.',
    duration: 'Podophyllotoxin cycles; imiquimod up to 16 weeks',
    drugs: [
      { name: 'Podophyllotoxin 0.15% cream / 0.5% solution (soft, non-keratinised)', dose: 'Apply to warts', freq: 'BD x3 days, then 4 days off', route: 'Topical', days: 'Up to 4\u20135 cycles' },
      { name: 'Imiquimod 5% cream (keratinised / larger)', dose: 'Apply, wash off after 6\u201310 h', freq: '3\u00d7/week', route: 'Topical', days: 'Up to 16 weeks' },
      { name: 'Cryotherapy (incl. pregnancy)', dose: '\u2014', freq: 'Weekly cycles', route: 'Procedure', days: 'Until clear' },
    ],
    altRegimens: [
      { label: 'Pregnancy', drugs: 'Avoid podophyllotoxin & imiquimod \u2192 use cryotherapy or other physical ablation; many regress postpartum.' },
      { label: 'Keratinised / large / refractory', drugs: 'Imiquimod, cryotherapy, electrosurgery/excision, or laser \u2014 via GUM/specialist.' },
      { label: 'Prevention / screening', drugs: 'Offer STI screen, discuss HPV vaccination, and partner notification/sexual-health advice (GUM).' },
    ],
    counselling: [
      'Genital warts are a very common viral skin infection (HPV); they\u2019re harmless but can take time to clear and may recur.',
      'Treatment is either a cream you apply yourself or freezing at a clinic \u2014 the choice depends on the type and location of the warts.',
      'The creams must not be used in pregnancy \u2014 tell us if you could be pregnant, and we\u2019ll use freezing instead.',
      'Condoms reduce transmission; we\u2019ll offer a full sexual-health check and discuss the HPV vaccine.',
      'It\u2019s common for warts to come back after clearing \u2014 further treatment can be given.',
    ],
    followUp: 'Review response to topical therapy; GUM referral for internal/extensive/refractory warts, STI screen and partner notification.',
    redFlags: [
      'Pigmented, fixed, bleeding, ulcerated or atypical anogenital lesion \u2192 exclude intraepithelial neoplasia/malignancy \u2192 refer.',
      'Warts in a child \u2192 consider safeguarding assessment.',
    ],
    emisText: `Anogenital warts (HPV):
- Patient-applied: podophyllotoxin (soft/non-keratinised) BD x3 days then 4 off, up to 4-5 cycles; OR imiquimod 5% 3x/wk up to 16 wks.
- Clinician: cryotherapy (also in pregnancy), electrosurgery/excision.
- PREGNANCY: avoid podophyllotoxin/imiquimod \u2192 cryotherapy.
- Offer STI screen + HPV vaccine discussion + GUM (internal/extensive/refractory). Recurrence common.
- Atypical/pigmented/bleeding lesion \u2192 refer; child \u2192 safeguarding.`,
    sources: [
      { label: 'NICE CKS \u2014 Warts (anogenital)', url: 'https://cks.nice.org.uk/topics/warts-anogenital/' },
    ],
  },

  // ---------------- Genital herpes ----------------
  {
    id: 'genital-herpes',
    title: 'Genital herpes',
    category: "Women's & Sexual Health",
    eyebrow: 'Aciclovir · GUM referral · pregnancy care',
    indication: 'Anogenital HSV. Oral antiviral started early (ideally \u226472 h or while new lesions forming) for the first episode and for recurrences; supportive care. Refer to sexual health (GUM); special considerations in pregnancy.',
    contraindications: 'Antivirals do not eradicate latent virus (recurrences/asymptomatic shedding continue). Pregnancy (esp. first episode in third trimester) \u2192 urgent obstetric input (neonatal herpes risk; may need aciclovir suppression / caesarean). Immunocompromised \u2192 may need higher/longer dosing / specialist.',
    duration: 'First episode ~5 days; suppression ongoing',
    drugs: [
      { name: 'First episode: Aciclovir', dose: '400 mg TDS (or 200 mg 5\u00d7/day)', freq: 'Per regimen', route: 'PO', days: '5 days (longer if new lesions)' },
      { name: 'Recurrence (episodic): Aciclovir', dose: '800 mg TDS', freq: 'TDS', route: 'PO', days: '2 days (short-course)' },
      { name: 'Suppression (\u22656 recurrences/yr): Aciclovir', dose: '400 mg BD', freq: 'BD', route: 'PO', days: 'Ongoing; review ~1 year' },
      { name: 'Supportive: analgesia, topical lidocaine, saline bathing, adequate fluids', dose: '\u2014', freq: 'PRN', route: 'Topical/PO', days: 'Symptomatic' },
    ],
    altRegimens: [
      { label: 'Alternatives', drugs: 'Valaciclovir or famciclovir (less frequent dosing) as alternatives to aciclovir for episodic/suppressive therapy.' },
      { label: 'Pregnancy', drugs: 'First episode in pregnancy (esp. 3rd trimester) \u2192 urgent obstetric/GUM input; aciclovir treatment + suppression from ~36 weeks; caesarean if first episode near delivery. Recurrent \u2192 suppression from 36 weeks.' },
      { label: 'Severe / retention / immunocompromised', drugs: 'Severe disease, urinary retention, or immunocompromise \u2192 consider admission/IV aciclovir/specialist.' },
    ],
    counselling: [
      'Genital herpes is a common viral infection; the first episode is usually the worst, and outbreaks tend to become milder and less frequent over time.',
      'The antiviral tablets work best started early and shorten an outbreak, but they don\u2019t remove the virus from the body, so it can recur.',
      'Salt-water bathing, pain relief, loose clothing and keeping the area clean and dry help symptoms; drink plenty (passing urine in a warm bath can ease stinging).',
      'It can be passed on even without visible sores; condoms reduce but don\u2019t eliminate transmission \u2014 we\u2019ll arrange a sexual-health review and discuss telling partners.',
      'Tell us straight away if you are or might be pregnant, as this needs special care to protect the baby.',
    ],
    followUp: 'GUM referral (diagnosis confirmation, STI screen, partner notification). Frequent recurrences \u2192 suppression, review at ~1 year. Pregnancy \u2192 obstetric pathway.',
    redFlags: [
      'Pregnancy (esp. first episode in third trimester) \u2192 urgent obstetric input (neonatal herpes).',
      'Urinary retention, severe systemic illness, meningism, or immunocompromise \u2192 urgent assessment/admission.',
    ],
    emisText: `Genital herpes (HSV):
- First episode: aciclovir 400 mg TDS x5 days (start \u226472 h / while new lesions) + analgesia, saline bathing, fluids.
- Recurrence episodic: aciclovir 800 mg TDS x2 days. Suppression (\u22656/yr): aciclovir 400 mg BD, review ~1 yr. (Valaciclovir/famciclovir alternatives.)
- Antivirals don't eradicate virus. GUM referral + STI screen + partner notification.
- PREGNANCY (esp 1st episode 3rd trimester) \u2192 urgent obstetric input (neonatal herpes; suppression from 36/40 \u00b1 CS).`,
    sources: [
      { label: 'NICE CKS \u2014 Herpes simplex (genital)', url: 'https://cks.nice.org.uk/topics/herpes-simplex-genital/' },
    ],
  },

  // ---------------- Aphthous ulcers ----------------
  {
    id: 'aphthous-ulcers',
    title: 'Aphthous (mouth) ulcers',
    category: 'ENT & Eyes',
    eyebrow: 'Symptomatic relief · 3-week rule · screen if recurrent',
    indication: 'Recurrent aphthous stomatitis (minor/major/herpetiform). Most are benign and self-limiting. Symptomatic topical treatment; screen recurrent/severe cases for underlying causes; apply the 3-week rule for suspected oral cancer.',
    contraindications: 'CRITICAL: any single ulcer/oral lesion persisting >3 weeks \u2192 urgent suspected oral-cancer referral. Topical corticosteroid: avoid if untreated oral candidiasis/infection. Screen for haematinic deficiency (iron/B12/folate), coeliac, IBD, Beh\u00e7et\u2019s if recurrent/severe.',
    duration: 'Symptomatic; minor ulcers heal <2 weeks',
    drugs: [
      { name: 'Topical analgesic/antiseptic (benzydamine spray/rinse; chlorhexidine 0.2%)', dose: 'Per product', freq: 'PRN / BD', route: 'Oromucosal', days: 'Symptomatic' },
      { name: 'Topical corticosteroid (hydrocortisone oromucosal tablet / beclometasone)', dose: 'Apply', freq: 'BD\u2013QDS', route: 'Oromucosal', days: 'During episodes' },
      { name: 'SLS-free toothpaste; avoid trauma/triggers', dose: '\u2014', freq: '\u2014', route: 'External', days: 'Ongoing' },
      { name: 'Treat underlying cause if found (e.g. iron/B12/folate)', dose: 'Per cause', freq: '\u2014', route: '\u2014', days: 'Per cause' },
    ],
    altRegimens: [
      { label: 'Recurrent/severe screen', drugs: 'FBC, ferritin, B12, folate; coeliac serology; consider IBD/Beh\u00e7et\u2019s. Correct deficiencies.' },
      { label: 'Refractory', drugs: 'Oral medicine referral for severe/refractory recurrent aphthous stomatitis (e.g. systemic therapy).' },
      { label: 'Triggers', drugs: 'SLS-free toothpaste, avoid trauma (sharp teeth/dentures \u2192 dental review), stress, certain foods.' },
    ],
    counselling: [
      'Most mouth ulcers are harmless and heal within a week or two on their own \u2014 we can ease the pain meanwhile.',
      'A numbing/antiseptic spray or rinse, and a steroid lozenge during flare-ups, help; a sodium-lauryl-sulfate-free toothpaste can reduce recurrences.',
      'If they keep recurring, we may do blood tests to look for low iron, B12 or folate, or coeliac disease.',
      'One important rule: any ulcer or sore that hasn\u2019t healed within 3 weeks must be checked urgently to rule out mouth cancer \u2014 please come back.',
    ],
    followUp: 'Symptomatic relief; screen/treat causes if recurrent. ANY ulcer >3 weeks \u2192 urgent (2WW) referral. Severe/refractory \u2192 oral medicine.',
    redFlags: [
      'Single ulcer/oral lesion >3 weeks, induration, or non-healing \u2192 2-week-wait head & neck referral.',
      'Recurrent ulcers + systemic features (GI symptoms, genital ulcers, eye signs) \u2192 investigate (IBD/Beh\u00e7et\u2019s/coeliac).',
    ],
    emisText: `Aphthous (mouth) ulcers:
- Most benign/self-limiting (minor heal <2 wks). Symptomatic: benzydamine spray/rinse, chlorhexidine 0.2%; topical steroid (hydrocortisone oromucosal/beclometasone) during episodes; SLS-free toothpaste.
- Recurrent/severe: screen FBC, ferritin, B12, folate, coeliac (\u00b1 IBD/Beh\u00e7et's); correct deficiency.
- 3-WEEK RULE: any ulcer/lesion >3 wks \u2192 urgent 2WW (oral cancer). Refractory \u2192 oral medicine.`,
    sources: [
      { label: 'NICE CKS \u2014 Aphthous ulcer', url: 'https://cks.nice.org.uk/topics/aphthous-ulcer/' },
    ],
  }
  );
})();
