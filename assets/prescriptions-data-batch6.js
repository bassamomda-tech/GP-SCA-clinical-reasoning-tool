/* ============================================
   Reasoning GP — Ready Prescriptions (batch 6)
   Ladders & reference · ENT · derm · men's health.
   Adds: chronic pain ladder, emollient ladder, reflux
   medications, cough preparations, fungal infections,
   ear wax, epistaxis, gingivitis/periodontitis, female
   pattern hair loss, erectile dysfunction.
   Pushes into window.RGP_PRESCRIPTIONS.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);

  RX.push(
  // ---------------- Chronic pain / analgesic ladder ----------------
  {
    id: 'chronic-pain-ladder',
    title: 'Chronic pain — analgesic ladder',
    category: 'Neurology & Pain',
    eyebrow: 'Stepwise non-opioid → opioid · review & deprescribe',
    indication: 'Stepwise analgesia for nociceptive pain (WHO-style ladder), adapted for primary care. For chronic primary pain, NICE advises AGAINST initiating opioids/NSAIDs/paracetamol/gabapentinoids — favour exercise, CBT/ACT, antidepressant. Use this ladder mainly for ongoing nociceptive (e.g. OA, mechanical) pain.',
    contraindications: 'NSAIDs: GI/renal/cardiovascular risk, elderly, anticoagulants. Opioids: limited efficacy in chronic pain, dependence/tolerance — set a clear goal and review date; avoid escalating doses. Codeine: ultra-rapid CYP2D6 metabolisers, children, breastfeeding.',
    duration: 'Lowest effective dose, shortest time; scheduled review',
    drugs: [
      { name: 'Step 1: Paracetamol', dose: '1 g', freq: 'QDS', route: 'PO', days: 'Regular/PRN' },
      { name: 'Step 1: ± topical NSAID (e.g. ibuprofen/diclofenac gel)', dose: 'Apply', freq: 'TDS–QDS', route: 'Topical', days: 'For localised OA' },
      { name: 'Step 2: Oral NSAID + PPI cover (if risk)', dose: 'e.g. naproxen 250–500 mg', freq: 'BD', route: 'PO', days: 'Shortest effective' },
      { name: 'Step 2: Weak opioid — codeine', dose: '30–60 mg', freq: 'QDS PRN', route: 'PO', days: 'Short-term; review' },
      { name: 'Step 3: Stronger opioid (e.g. morphine MR) — caution', dose: 'Lowest dose', freq: 'Per regimen', route: 'PO', days: 'Specialist/structured; review' },
    ],
    altRegimens: [
      { label: 'Chronic primary pain (NICE NG193)', drugs: 'Do NOT start opioids/NSAIDs/paracetamol/gabapentinoids/benzodiazepines. Offer exercise, psychological therapy (CBT/ACT), acupuncture, or a trial of an antidepressant (e.g. duloxetine/amitriptyline).' },
      { label: 'Neuropathic component', drugs: 'Use the neuropathic-pain pathway (amitriptyline / duloxetine / gabapentin / pregabalin) — switch, don\u2019t stack.' },
      { label: 'Osteoarthritis', drugs: 'Topical NSAID first-line for knee/hand; exercise + weight loss; oral NSAID + PPI if needed; avoid routine opioids.' },
    ],
    counselling: [
      'We aim for the lowest dose that keeps you functioning, not necessarily zero pain.',
      'Anti-inflammatory tablets can affect the stomach, kidneys and heart — we keep them short and may add a stomach-protecting tablet.',
      'Strong painkillers (opioids) often help less than expected in long-term pain and can cause dependence — we set a clear goal and review date, and reduce if they are not helping function.',
      'Staying active, pacing, and approaches like CBT are some of the most effective long-term treatments.',
    ],
    followUp: 'Set a review date at every step. Reassess function (not just pain score); deprescribe opioids/gabapentinoids if no meaningful benefit. Refer to pain service if escalating or complex.',
    redFlags: [
      'New neurological deficit, cauda equina symptoms, systemic features, or pain with red flags → urgent assessment.',
      'Escalating opioid use without functional benefit → review and taper; consider dependence support.',
    ],
    emisText: `Analgesic ladder (nociceptive pain):
- Step 1: paracetamol 1 g QDS ± topical NSAID.
- Step 2: oral NSAID (+PPI if risk) OR codeine 30-60 mg QDS PRN, short-term.
- Step 3: stronger opioid (lowest dose, structured, review) — caution in chronic pain.
Chronic PRIMARY pain (NG193): do NOT start opioids/NSAIDs/paracetamol/gabapentinoids; offer exercise, CBT/ACT, acupuncture, or antidepressant trial.
Review function at each step; deprescribe if no benefit.`,
    sources: [
      { label: 'NICE NG193 — Chronic pain (primary & secondary)', url: 'https://www.nice.org.uk/guidance/ng193' },
      { label: 'NICE CKS — Analgesia', url: 'https://cks.nice.org.uk/topics/analgesia-mild-to-moderate-pain/' },
    ],
  },

  // ---------------- Emollient ladder ----------------
  {
    id: 'emollient-ladder',
    title: 'Emollient ladder (dry skin / eczema)',
    category: 'Dermatology',
    eyebrow: 'Light → greasy · leave-on + soap substitute',
    indication: 'Emollient selection for dry skin conditions (eczema, ichthyosis, xerosis). Choose by greasiness vs cosmetic acceptability; the greasiest tolerated works best. Prescribe generously and use as a soap substitute. Foundation of eczema care alongside topical steroids for flares.',
    contraindications: 'Paraffin-based emollients are a FIRE HAZARD on dressings/clothing/bedding — warn patients (risk of severe burns near naked flame/cigarettes). Some preparations contain sensitisers (e.g. lanolin, fragrances).',
    duration: 'Long-term, daily; continue when skin is clear',
    drugs: [
      { name: 'Lotions (high water, light) — large areas/mild', dose: 'Apply liberally', freq: '\u22652\u20133\u00d7/day', route: 'Topical', days: 'Ongoing' },
      { name: 'Creams (e.g. Diprobase, Cetraben, Aveeno) — everyday use', dose: 'Apply liberally', freq: '\u22652\u20133\u00d7/day', route: 'Topical', days: 'Ongoing' },
      { name: 'Gels / lighter ointments (e.g. Doublebase) — moderate dryness', dose: 'Apply liberally', freq: 'BD\u2013TDS', route: 'Topical', days: 'Ongoing' },
      { name: 'Ointments (e.g. 50:50 WSP/LP, Epaderm, Hydromol) — very dry/lichenified', dose: 'Apply liberally', freq: 'BD\u2013TDS', route: 'Topical', days: 'Ongoing' },
      { name: 'Soap substitute (use an emollient instead of soap)', dose: 'Wash with', freq: 'Each wash', route: 'Topical', days: 'Ongoing' },
    ],
    altRegimens: [
      { label: 'Quantities (adult, NICE)', drugs: 'Prescribe 250\u2013500 g/week for widespread eczema. Apply in the direction of hair growth; wait ~15\u201330 min before/after a topical steroid.' },
      { label: 'Itch / antimicrobial', drugs: 'Consider an emollient with an antipruritic or antimicrobial (e.g. for recurrent infection) per specialist advice; avoid aqueous cream as a leave-on (irritant).' },
      { label: 'Bath additives', drugs: 'Routine bath emollients are no longer recommended (BATHE trial showed no added benefit) \u2014 use leave-on + soap substitute.' },
    ],
    counselling: [
      'Use moisturiser generously and often \u2014 even when the skin looks clear \u2014 it prevents flares.',
      'The greasier the moisturiser, the better it works, but choose one you will actually use; you can use a lighter one by day and a greasier one at night.',
      'Use it instead of soap, and smooth it on gently in the direction the hair grows (don\u2019t rub up and down).',
      'Important safety point: paraffin-based moisturisers on skin, clothing or bedding can catch fire easily \u2014 keep away from flames, cigarettes and heat.',
      'If using a steroid cream for a flare, leave a gap of about 15\u201330 minutes between the two.',
    ],
    followUp: 'Review adherence and quantity used (a common reason for poor control). Step up greasiness if not enough; ensure adequate prescribed amounts.',
    redFlags: [
      'Weeping, crusting, rapidly worsening or painful eczema with clustered vesicles \u2192 ?infection / eczema herpeticum \u2192 urgent.',
    ],
    emisText: `Emollient ladder (dry skin/eczema):
- Light: lotion. Everyday: cream (Diprobase/Cetraben). Drier: gel/ointment (Doublebase/Epaderm/50:50).
- Use as SOAP SUBSTITUTE; apply liberally \u22652-3x/day; 250-500 g/week if widespread.
- Continue when clear; gap ~15-30 min from topical steroid.
- SAFETY: paraffin emollients are a fire hazard on clothing/bedding \u2014 keep from flames.
- Avoid aqueous cream as leave-on (irritant); routine bath additives not recommended.`,
    sources: [
      { label: 'NICE CKS \u2014 Eczema (atopic)', url: 'https://cks.nice.org.uk/topics/eczema-atopic/' },
      { label: 'MHRA \u2014 Emollients fire risk', url: 'https://www.gov.uk/drug-safety-update/emollients-new-information-about-risk-of-severe-and-fatal-burns-with-paraffin-containing-and-paraffin-free-emollients' },
    ],
  },

  // ---------------- Reflux medications (reference ladder) ----------------
  {
    id: 'reflux-medications',
    title: 'Reflux medications (reference ladder)',
    category: 'Gastroenterology',
    eyebrow: 'Antacid/alginate → H2RA → PPI · step up/down',
    indication: 'Reference ladder of acid-reducing/neutralising agents for reflux/dyspepsia in adults (see GORD card for the full pathway). Lifestyle first; escalate to PPI for proven/persistent reflux; step down to lowest effective dose.',
    contraindications: 'Exclude ALARM features (dysphagia, weight loss, GI bleed, mass, age \u226555 with new dyspepsia) before symptomatic treatment. PPIs: long-term risks (hyponatraemia, hypomagnesaemia, B12, fracture, C. difficile, microscopic colitis). Review need for long-term PPI.',
    duration: 'PPI 4\u20138 weeks then review/step down',
    drugs: [
      { name: 'Antacid (e.g. magnesium/aluminium salts)', dose: 'Per pack', freq: 'PRN', route: 'PO', days: 'Symptomatic' },
      { name: 'Alginate (e.g. Gaviscon Advance)', dose: '10\u201320 mL / 2 tabs', freq: 'After meals + bedtime', route: 'PO', days: 'Symptomatic' },
      { name: 'H2-receptor antagonist (famotidine)', dose: '20\u201340 mg', freq: 'BD', route: 'PO', days: 'Step-up / adjunct' },
      { name: 'PPI standard dose (e.g. omeprazole 20 mg / lansoprazole 30 mg)', dose: 'Standard', freq: 'OD', route: 'PO', days: '4\u20138 weeks' },
      { name: 'PPI high dose (if severe oesophagitis)', dose: 'Double', freq: 'OD\u2013BD', route: 'PO', days: 'Per indication' },
    ],
    altRegimens: [
      { label: 'Test-and-treat H. pylori', drugs: 'In uninvestigated dyspepsia, test for H. pylori and eradicate if positive (see H. pylori cards).' },
      { label: 'Pregnancy', drugs: 'Lifestyle + antacid/alginate first; omeprazole/ranitidine alternatives if needed (omeprazole has most safety data).' },
      { label: 'Step-down', drugs: 'After symptom control, reduce to lowest effective dose, on-demand PPI, or H2RA; review long-term PPI need annually.' },
    ],
    counselling: [
      'Lifestyle helps a lot: smaller meals, not eating late, weight loss, less alcohol/caffeine, raising the head of the bed, and stopping smoking.',
      'Antacids and alginates give quick, short-term relief; a PPI tablet works over days and is taken before food.',
      'We use the PPI for a set course then try to reduce it to the lowest dose that keeps you comfortable \u2014 long-term use has some risks we review.',
      'Tell us about difficulty swallowing, weight loss, vomiting blood or black stools \u2014 these need urgent checks.',
    ],
    followUp: 'Review at 4\u20138 weeks; step down to lowest effective dose. Persistent/relapsing or alarm features \u2192 consider endoscopy/referral. Review long-term PPI annually.',
    redFlags: [
      'Dysphagia, odynophagia, weight loss, GI bleeding (haematemesis/melaena), iron-deficiency anaemia, epigastric mass, or new dyspepsia \u226555 \u2192 urgent endoscopy/2WW.',
    ],
    emisText: `Reflux medication ladder (adult):
- Lifestyle first (weight, meal timing, alcohol/caffeine, smoking, bed head-up).
- PRN: antacid \u00b1 alginate (Gaviscon Advance after meals + bedtime).
- Step up: H2RA (famotidine 20-40 mg BD).
- PPI standard dose OD 4-8 weeks (high dose if severe oesophagitis); step down to lowest effective.
- Uninvestigated dyspepsia: test-and-treat H. pylori.
- ALARM features / new dyspepsia \u226555 \u2192 urgent endoscopy/2WW. Review long-term PPI.`,
    sources: [
      { label: 'NICE NG12 / CKS \u2014 Dyspepsia & GORD', url: 'https://cks.nice.org.uk/topics/dyspepsia-proven-gord/' },
    ],
  },

  // ---------------- Cough preparations ----------------
  {
    id: 'cough-preparations',
    title: 'Cough preparations (acute cough)',
    category: 'ENT & Eyes',
    eyebrow: 'Self-care · honey · OTC limited evidence',
    indication: 'Acute cough (usually viral URTI / acute bronchitis), self-limiting. Mainstay is reassurance and self-care; over-the-counter cough preparations have limited evidence. Antibiotics are not routinely indicated.',
    contraindications: 'Honey: not under 1 year (infant botulism). Codeine/opioid linctus: avoid <18 y for cough, avoid in respiratory depression risk. Sedating antihistamines/decongestants: caution in elderly, cardiovascular disease, glaucoma, prostatism. Many OTC products unsuitable in young children.',
    duration: 'Acute cough usually 3\u20134 weeks (can linger)',
    drugs: [
      { name: 'Honey (\u22651 year) \u00b1 warm lemon drink', dose: '1\u20132 tsp', freq: 'PRN', route: 'PO', days: 'Self-care' },
      { name: 'Simple linctus / glycerol-based soothing syrup', dose: 'Per pack', freq: 'PRN', route: 'PO', days: 'Symptomatic' },
      { name: 'Pelargonium / OTC cough preparations (limited evidence)', dose: 'Per pack', freq: 'Per pack', route: 'PO', days: 'Optional' },
      { name: 'Paracetamol / ibuprofen for systemic symptoms', dose: 'Standard', freq: 'PRN', route: 'PO', days: 'Symptomatic' },
    ],
    altRegimens: [
      { label: 'Acute bronchitis', drugs: 'Antibiotics NOT routinely offered (no/marginal benefit). Consider delayed/immediate antibiotic only if systemically very unwell or high risk (e.g. significant comorbidity, CRP-guided per NG120).' },
      { label: 'Cough with COPD exacerbation', drugs: 'Treat the exacerbation (see COPD pathway) \u2014 not just cough linctus.' },
      { label: 'Children', drugs: 'Honey \u22651 year; avoid OTC cough/cold medicines under 6 years; safety-net.' },
    ],
    counselling: [
      'Most coughs are caused by viruses and get better on their own, though a cough can linger for 3\u20134 weeks after a cold.',
      'Honey in a warm drink (if over 1 year old) is as good as most cough medicines; paracetamol or ibuprofen help if you feel achey or feverish.',
      'Cough medicines from the pharmacy are optional \u2014 the evidence they help is weak.',
      'Antibiotics don\u2019t help a normal viral cough and can cause side effects.',
      'Come back if you cough up blood, are very breathless, have chest pain, high fever that won\u2019t settle, or the cough lasts more than 3 weeks.',
    ],
    followUp: 'Safety-net; review if >3 weeks (consider CXR / further assessment), or if red flags. Persistent cough >8 weeks = chronic cough work-up.',
    redFlags: [
      'Haemoptysis, significant breathlessness, chest pain, weight loss, or cough >3 weeks in a smoker/\u226540 \u2192 consider chest X-ray / lung-cancer pathway.',
      'Signs of pneumonia (focal signs, high NEWS) \u2192 assess/treat.',
    ],
    emisText: `Acute cough (viral URTI/bronchitis):
- Self-limiting (can last 3-4 wks). Reassure + safety-net.
- Honey \u22651 yr; simple linctus PRN; paracetamol/ibuprofen for systemic symptoms.
- OTC cough preparations: limited evidence, optional. Avoid OTC cough/cold <6 yrs.
- Antibiotics NOT routine for acute cough/bronchitis (consider only if systemically very unwell/high-risk, per NG120).
- Red flags: haemoptysis, breathlessness, chest pain, weight loss, cough >3 wks (smoker/\u226540) \u2192 CXR.`,
    sources: [
      { label: 'NICE NG120 \u2014 Cough (acute): antimicrobial prescribing', url: 'https://www.nice.org.uk/guidance/ng120' },
      { label: 'NICE CKS \u2014 Cough', url: 'https://cks.nice.org.uk/topics/cough/' },
    ],
  },

  // ---------------- Fungal infections (body / foot / nail / scalp) ----------------
  {
    id: 'fungal-infections',
    title: 'Fungal infections (body, foot, nail, scalp)',
    category: 'Dermatology',
    eyebrow: 'Topical for skin · oral for nail/scalp · confirm before oral',
    indication: 'Dermatophyte infections by site: tinea corporis/cruris (body/groin), tinea pedis (athlete\u2019s foot), onychomycosis (nail), tinea capitis (scalp). Topical antifungals for skin; ORAL antifungals are needed for nail and scalp disease. Confirm nail/scalp infection (sampling) before oral treatment.',
    contraindications: 'Terbinafine/oral azoles: check LFTs (hepatotoxicity), drug interactions (azoles are CYP inhibitors \u2014 e.g. statins, warfarin). Avoid oral terbinafine in significant liver disease. Tinea capitis needs ORAL therapy (topicals don\u2019t penetrate hair follicles).',
    duration: 'Skin 1\u20136 wks; nail 6\u201312 months; scalp 4\u20138 weeks',
    drugs: [
      { name: 'Body/groin/foot: Terbinafine 1% cream', dose: 'Apply', freq: 'OD\u2013BD', route: 'Topical', days: '1\u20132 wks (body) / up to 6 wks (foot)' },
      { name: 'Alt topical: imidazole (clotrimazole/miconazole)', dose: 'Apply', freq: 'BD\u2013TDS', route: 'Topical', days: 'Until clear + 1\u20132 wks' },
      { name: 'Nail (dermatophyte-confirmed): Terbinafine PO', dose: '250 mg', freq: 'OD', route: 'PO', days: 'Fingernail 6 wks / toenail 12\u2013(16) wks' },
      { name: 'Scalp (tinea capitis): oral antifungal (terbinafine or griseofulvin)', dose: 'Weight-based', freq: 'OD', route: 'PO', days: '4\u20138 weeks (+ antifungal shampoo)' },
    ],
    altRegimens: [
      { label: 'Mild/early nail (\u226450%, distal, few nails)', drugs: 'Amorolfine 5% nail lacquer (fingernails ~6 months, toenails ~9\u201312 months) \u2014 lower cure than oral.' },
      { label: 'Inflamed tinea (kerion / very itchy)', drugs: 'Short combined antifungal + mild steroid for skin can reduce inflammation \u2014 but don\u2019t use steroid alone (tinea incognito). Kerion \u2192 oral + consider referral.' },
      { label: 'Tinea capitis (children)', drugs: 'Oral antifungal is essential; add ketoconazole/selenium sulfide shampoo to reduce transmission; examine/treat household contacts; inform school.' },
      { label: 'Confirm before oral', drugs: 'Send nail clippings / skin/hair samples for microscopy & culture before starting oral therapy for nail/scalp disease.' },
    ],
    counselling: [
      'Skin fungal infections usually clear with a cream; keep using it for a week or two after it looks better.',
      'Nail and scalp infections need tablets because creams can\u2019t reach deep enough \u2014 and we usually take a sample first to confirm it.',
      'Nail treatment is long (several months to a year) and the nail looks normal only as it grows out.',
      'Keep feet clean and dry, change socks, treat athlete\u2019s foot to prevent nail/groin spread, and don\u2019t share towels.',
      'Tablets can rarely affect the liver and interact with other medicines \u2014 we may check a blood test and review your medications.',
    ],
    followUp: 'Skin: review if not improved in 2\u20134 weeks. Nail/scalp: confirm with sampling; monitor adherence; LFTs if indicated on oral therapy. Tinea capitis: ensure source/contacts treated.',
    redFlags: [
      'Scalp boggy swelling (kerion), widespread/immunocompromised infection, or diagnostic doubt \u2192 sample/refer.',
      'Recurrent/extensive tinea \u2192 consider underlying immunosuppression or diabetes.',
    ],
    emisText: `Dermatophyte infections by site:
- Body/groin/foot: terbinafine 1% cream OD-BD (or imidazole BD) until clear + 1-2 wks (foot up to 6 wks).
- Nail (confirm by clippings): terbinafine 250 mg OD \u2014 fingernail 6 wks, toenail 12-16 wks (or amorolfine lacquer if mild/distal).
- Scalp (tinea capitis): ORAL antifungal (terbinafine/griseofulvin) 4-8 wks + antifungal shampoo; treat contacts; oral essential.
- Confirm nail/scalp before oral; check LFTs/interactions. Don't use steroid alone (tinea incognito).`,
    sources: [
      { label: 'NICE CKS \u2014 Fungal skin infection (body/groin/foot)', url: 'https://cks.nice.org.uk/topics/fungal-skin-infection-body-groin/' },
      { label: 'NICE CKS \u2014 Fungal nail infection', url: 'https://cks.nice.org.uk/topics/fungal-nail-infection/' },
    ],
  },

  // ---------------- Ear wax ----------------
  {
    id: 'ear-wax',
    title: 'Ear wax (cerumen impaction)',
    category: 'ENT & Eyes',
    eyebrow: 'Softening drops · irrigation if needed',
    indication: 'Symptomatic ear wax (hearing loss, fullness, discomfort, tinnitus, or wax obscuring the drum / blocking a hearing aid). First-line is softening drops; irrigation or microsuction if drops insufficient.',
    contraindications: 'Do NOT irrigate if: perforated eardrum (current or history), grommets, previous ear surgery, otitis externa/media, only-hearing ear, or unable to cooperate. Avoid cotton buds. Olive/almond oil: nut allergy caution with almond oil.',
    duration: 'Drops 3\u20135 days before review/irrigation',
    drugs: [
      { name: 'Olive oil ear drops', dose: '2\u20133 drops', freq: 'BD\u2013TDS', route: 'Aural', days: '3\u20135 days' },
      { name: 'Sodium bicarbonate 5% ear drops', dose: '2\u20133 drops', freq: 'BD\u2013TDS', route: 'Aural', days: '3\u20135 days' },
      { name: 'Almond oil (avoid if nut allergy)', dose: '2\u20133 drops', freq: 'BD\u2013TDS', route: 'Aural', days: '3\u20135 days' },
    ],
    altRegimens: [
      { label: 'Persistent after drops', drugs: 'Ear irrigation (electronic irrigator) or microsuction \u2014 per local service; warm drops/oil for several days beforehand improves success.' },
      { label: 'Recurrent wax', drugs: 'Regular olive oil (e.g. weekly) to prevent re-accumulation; avoid cotton buds.' },
    ],
    counselling: [
      'Wax is normal and protective \u2014 we only treat it if it\u2019s causing symptoms or blocking a view of the eardrum.',
      'Use the drops for a few days to soften the wax; lie with the treated ear up for a few minutes after putting them in.',
      'Don\u2019t use cotton buds \u2014 they push wax in and can damage the ear.',
      'If drops don\u2019t clear it, the ear can be syringed/irrigated or have microsuction \u2014 but not if you\u2019ve had a burst eardrum, ear surgery or grommets.',
      'Regular oil drops can stop it building up again.',
    ],
    followUp: 'Review after drops; arrange irrigation/microsuction if needed. Persistent hearing loss after wax removal \u2192 examine drum and consider audiology.',
    redFlags: [
      'Unilateral hearing loss persisting after wax removal, sudden sensorineural hearing loss, otalgia with discharge, or suspected cholesteatoma \u2192 ENT.',
    ],
    emisText: `Ear wax (symptomatic):
- Softening drops: olive oil / sodium bicarbonate 5% / almond oil (nut allergy caution) 2-3 drops BD-TDS x 3-5 days.
- If persists: irrigation or microsuction (warm oil for several days first).
- Do NOT irrigate: perforation/history, grommets, ear surgery, otitis externa/media, only-hearing ear.
- Avoid cotton buds. Recurrent \u2192 regular olive oil prophylaxis.
- Persistent unilateral hearing loss after removal \u2192 ENT/audiology.`,
    sources: [
      { label: 'NICE CKS \u2014 Earwax', url: 'https://cks.nice.org.uk/topics/earwax/' },
    ],
  },

  // ---------------- Epistaxis ----------------
  {
    id: 'epistaxis',
    title: 'Epistaxis (nosebleed)',
    category: 'ENT & Eyes',
    eyebrow: 'First-aid pressure · Naseptin · cautery if needed',
    indication: 'Anterior epistaxis management in primary care: correct first-aid compression, then antiseptic cream for recurrent bleeds (often from Little\u2019s area), with nasal cautery as an option. Address contributing factors.',
    contraindications: 'Naseptin (contains peanut oil & neomycin): avoid in peanut/soya allergy \u2014 use mupirocin nasal ointment instead. Cautery: don\u2019t cauterise both sides of the septum simultaneously (perforation risk). Review anticoagulant/antiplatelet contribution.',
    duration: 'Naseptin QDS for ~10\u201314 days',
    drugs: [
      { name: 'First aid: pinch soft part of nose, lean forward', dose: '10\u201315 min continuous', freq: 'Acute', route: 'External', days: 'Immediate' },
      { name: 'Naseptin (chlorhexidine/neomycin) cream', dose: 'Apply to nostrils', freq: 'QDS', route: 'Nasal', days: '10\u201314 days' },
      { name: 'Alt (peanut/soya allergy): Mupirocin nasal ointment', dose: 'Apply', freq: 'BD\u2013TDS', route: 'Nasal', days: '~5\u201310 days' },
      { name: 'Petroleum jelly / nasal saline gel (mucosal dryness)', dose: 'Apply', freq: 'PRN', route: 'Nasal', days: 'Ongoing' },
    ],
    altRegimens: [
      { label: 'Visible anterior bleeding point', drugs: 'Silver nitrate cautery (one side of septum only) after topical anaesthetic/vasoconstrictor \u2014 if trained.' },
      { label: 'Bleeding not controlled by first aid', drugs: 'Consider nasal packing and refer to ENT/ED; recurrent/posterior bleeds \u2192 ENT.' },
      { label: 'Contributing factors', drugs: 'Review anticoagulants/antiplatelets, hypertension, NSAIDs, nasal steroid technique, cocaine use; check FBC/clotting if recurrent/heavy.' },
    ],
    counselling: [
      'To stop a nosebleed: sit up, lean forward, and firmly pinch the soft part of the nose for 10\u201315 minutes without letting go; breathe through your mouth.',
      'Avoid picking/blowing the nose, hot drinks, alcohol and heavy lifting for ~24 hours afterwards.',
      'The antiseptic cream helps heal the lining and reduce repeat bleeds \u2014 but tell us about any peanut allergy as the usual cream contains peanut oil.',
      'A dab of petroleum jelly and not picking helps prevent recurrences, especially in dry weather.',
      'Seek urgent help if bleeding won\u2019t stop after 20\u201330 minutes of pressure, is very heavy, or you feel faint.',
    ],
    followUp: 'Review recurrent epistaxis; consider cautery/ENT. Investigate if heavy/recurrent, on anticoagulants, or systemic features (FBC/clotting).',
    redFlags: [
      'Uncontrolled bleeding despite first aid, haemodynamic compromise, or posterior bleed \u2192 ED/ENT.',
      'Recurrent unilateral epistaxis/obstruction (esp. adults) \u2192 exclude nasal tumour; bilateral easy bruising \u2192 bleeding disorder.',
    ],
    emisText: `Epistaxis (anterior):
- First aid: lean forward, pinch soft nose 10-15 min continuously, mouth-breathe.
- Recurrent/Little's area: Naseptin QDS 10-14 days (AVOID if peanut/soya allergy \u2192 mupirocin nasal BD-TDS).
- Petroleum jelly/saline gel for dryness; avoid picking/blowing.
- Visible bleeding point \u2192 silver nitrate cautery (one side only).
- Not controlled / posterior / heavy \u2192 pack + ENT/ED. Review anticoagulants; FBC/clotting if recurrent.`,
    sources: [
      { label: 'NICE CKS \u2014 Epistaxis', url: 'https://cks.nice.org.uk/topics/epistaxis-nosebleeds/' },
    ],
  },

  // ---------------- Gingivitis & periodontitis ----------------
  {
    id: 'gingivitis-periodontitis',
    title: 'Gingivitis & periodontitis',
    category: 'ENT & Eyes',
    eyebrow: 'Oral hygiene + dentist · antiseptic adjunct',
    indication: 'Gum inflammation (gingivitis) and periodontitis. Management is primarily DENTAL \u2014 mechanical plaque control and professional cleaning. GP role: reinforce oral hygiene, manage acute conditions (e.g. ANUG), and refer to a dentist. Antibiotics are not for chronic gingivitis/periodontitis.',
    contraindications: 'Antibiotics do NOT treat chronic gingivitis/periodontitis (dental/mechanical treatment is needed). Chlorhexidine: staining, taste disturbance; short-term adjunct only. Metronidazole: alcohol interaction.',
    duration: 'Chlorhexidine short-term; ANUG metronidazole ~3 days',
    drugs: [
      { name: 'Oral hygiene: effective brushing (fluoride) + interdental cleaning', dose: '\u2014', freq: 'BD + daily', route: 'External', days: 'Ongoing (mainstay)' },
      { name: 'Chlorhexidine 0.2% mouthwash (short-term adjunct)', dose: '10 mL', freq: 'BD', route: 'Oromucosal', days: 'Short-term' },
      { name: 'ANUG: Metronidazole', dose: '400 mg', freq: 'TDS', route: 'PO', days: '3 days' },
      { name: 'Analgesia (paracetamol/ibuprofen) for pain', dose: 'Standard', freq: 'PRN', route: 'PO', days: 'Symptomatic' },
    ],
    altRegimens: [
      { label: 'Acute necrotising ulcerative gingivitis (ANUG)', drugs: 'Metronidazole 400 mg TDS 3 days (or amoxicillin) + chlorhexidine/hydrogen peroxide mouthwash + urgent dental review + smoking cessation.' },
      { label: 'Penicillin/metronidazole considerations', drugs: 'For dental infections needing antibiotics, amoxicillin is alternative; refer to dentist for source control (antibiotics are adjuncts, not a substitute).' },
      { label: 'Chronic periodontitis', drugs: 'Refer to dentist/hygienist for scaling/root planing; manage risk factors (smoking, diabetes control).' },
    ],
    counselling: [
      'Healthy gums depend on removing plaque \u2014 brush twice daily with fluoride toothpaste and clean between the teeth daily.',
      'The key treatment is seeing a dentist or hygienist for a professional clean \u2014 antibiotics don\u2019t fix gum disease.',
      'Antiseptic mouthwash can help short-term but can stain teeth, so it\u2019s not for long-term use.',
      'Stopping smoking and good diabetes control make a big difference to your gums.',
      'See a dentist urgently if you have painful, bleeding, ulcerated gums with a bad taste (a specific infection we can treat).',
    ],
    followUp: 'Ensure dental registration/review. ANUG \u2192 dental follow-up. Recurrent/severe periodontitis with systemic disease (diabetes) \u2192 optimise control.',
    redFlags: [
      'Rapidly destructive periodontitis, oral ulceration not healing >3 weeks, or a neck/facial swelling with systemic upset \u2192 urgent (exclude oral cancer / spreading infection).',
    ],
    emisText: `Gingivitis / periodontitis:
- Mainstay = oral hygiene (fluoride brushing BD + interdental daily) + DENTIST/hygienist (scaling). Antibiotics do NOT treat chronic gum disease.
- Chlorhexidine 0.2% mouthwash BD short-term adjunct (staining).
- ANUG: metronidazole 400 mg TDS 3 days + chlorhexidine + urgent dental review + stop smoking.
- Optimise smoking/diabetes. Non-healing oral ulcer >3 wks \u2192 2WW.`,
    sources: [
      { label: 'NICE CKS \u2014 Gingivitis and periodontitis', url: 'https://cks.nice.org.uk/topics/gingivitis-periodontitis/' },
    ],
  },

  // ---------------- Female pattern hair loss ----------------
  {
    id: 'female-pattern-hair-loss',
    title: 'Female pattern hair loss (androgenetic alopecia)',
    category: 'Dermatology',
    eyebrow: 'Topical minoxidil · exclude reversible causes',
    indication: 'Female androgenetic alopecia (diffuse thinning over the crown, preserved frontal hairline). Exclude/treat reversible contributors first. Topical minoxidil is the main evidence-based treatment; effect is gradual and maintained only with continued use.',
    contraindications: 'Minoxidil: not in pregnancy/breastfeeding; can cause facial hypertrichosis and initial shedding. Rule out other causes before labelling as pattern loss. Signs of hyperandrogenism (virilisation, irregular periods) \u2192 investigate (e.g. PCOS, androgen excess).',
    duration: 'Continuous; assess at 6\u201312 months',
    drugs: [
      { name: 'Minoxidil 2% or 5% topical solution/foam', dose: 'Apply to dry scalp', freq: 'OD\u2013BD (per product)', route: 'Topical', days: 'Continuous (\u22656\u201312 mo trial)' },
      { name: 'Check & correct: ferritin, TFTs, ANA if indicated', dose: '\u2014', freq: 'Baseline', route: 'Investigation', days: 'Once' },
    ],
    altRegimens: [
      { label: 'Reversible causes', drugs: 'Treat iron deficiency (ferritin), thyroid disease, recent illness/telogen effluvium, crash diets, and review drugs causing alopecia.' },
      { label: 'Hyperandrogenism / PCOS', drugs: 'If features present \u2192 investigate; antiandrogen therapy (e.g. spironolactone, off-label) is specialist/considered; treat PCOS.' },
      { label: 'Specialist options', drugs: 'Dermatology for diagnostic doubt, scarring alopecia, or for oral options (e.g. low-dose oral minoxidil/antiandrogens \u2014 specialist).' },
      { label: 'Camouflage', drugs: 'Hair fibres, wigs, and psychological support; signpost Alopecia UK.' },
    ],
    counselling: [
      'This is the most common type of hair thinning and is not dangerous, but we\u2019ll check for treatable causes like low iron or thyroid problems first.',
      'Topical minoxidil is the main treatment \u2014 it works slowly over months and only keeps working while you use it; stopping reverses the benefit.',
      'You may notice a little extra shedding in the first weeks \u2014 that\u2019s expected and settles.',
      'Apply it to the dry scalp and wash your hands afterwards; it shouldn\u2019t be used in pregnancy.',
      'See us if hair loss is patchy, scarring, or comes with other symptoms like irregular periods or excess body hair.',
    ],
    followUp: 'Assess response at 6\u201312 months (photos help). Investigate/refer if scarring, patchy (alopecia areata), rapidly progressive, or features of androgen excess.',
    redFlags: [
      'Scarring alopecia (loss of follicular openings), rapidly progressive loss, or systemic features \u2192 dermatology.',
      'Virilisation / sudden hyperandrogenism \u2192 investigate for androgen-secreting cause.',
    ],
    emisText: `Female pattern hair loss (androgenetic):
- Exclude/treat reversible causes: ferritin (iron), TFTs, telogen effluvium, drugs, crash diet.
- Topical minoxidil 2-5% OD-BD, continuous; assess 6-12 months (photos). Expect early shedding; not in pregnancy.
- Hyperandrogenism features \u2192 investigate (PCOS); antiandrogens specialist.
- Scarring/patchy/rapid loss or virilisation \u2192 dermatology. Psychological support + camouflage.`,
    sources: [
      { label: 'NICE CKS \u2014 Hair loss (androgenetic alopecia)', url: 'https://cks.nice.org.uk/topics/hair-loss-androgenetic-alopecia/' },
    ],
  },

  // ---------------- Erectile dysfunction ----------------
  {
    id: 'erectile-dysfunction',
    title: 'Erectile dysfunction',
    category: "Men's & Sexual Health",
    eyebrow: 'PDE5 inhibitor · treat as CV risk marker',
    indication: 'Erectile dysfunction. Treat as a cardiovascular risk marker (assess QRISK/CV risk, glucose, lipids, early-morning testosterone). PDE5 inhibitor is first-line drug therapy alongside addressing reversible causes and lifestyle.',
    contraindications: 'PDE5 inhibitors ABSOLUTELY CONTRAINDICATED with nitrates and nicorandil (profound hypotension). Caution: recent MI/stroke/unstable angina, significant hypotension, severe hepatic impairment, certain retinal disorders. Alpha-blockers \u2014 separate dosing/start low.',
    duration: 'On-demand or daily; review response',
    drugs: [
      { name: 'Sildenafil', dose: '50 mg (range 25\u2013100)', freq: '~1 h before sex (max OD)', route: 'PO', days: 'On-demand; try \u22656\u20138 times' },
      { name: 'Tadalafil (on-demand)', dose: '10 mg (range 10\u201320)', freq: 'Before sex (max OD)', route: 'PO', days: 'On-demand' },
      { name: 'Tadalafil (regular low-dose)', dose: '2.5\u20135 mg', freq: 'OD', route: 'PO', days: 'Daily (spontaneity)' },
      { name: 'Treat low testosterone (if confirmed on repeat AM sample)', dose: 'Per regimen', freq: '\u2014', route: '\u2014', days: 'Endocrine-guided' },
    ],
    altRegimens: [
      { label: 'Reversible causes / lifestyle', drugs: 'Smoking cessation, weight loss, exercise, reduce alcohol; review drugs (\u03b2-blockers, thiazides, SSRIs, finasteride); optimise diabetes/BP/lipids.' },
      { label: 'PDE5i ineffective (after adequate trials)', drugs: 'Confirm correct use (adequate dose, stimulation, several attempts, sildenafil on empty stomach); treat low testosterone; then vacuum device / intraurethral or intracavernosal alprostadil / urology referral.' },
      { label: 'Psychogenic ED', drugs: 'Sudden onset, situational, preserved morning erections \u2192 psychosexual counselling; PDE5i can still help.' },
    ],
    counselling: [
      'Erection problems are common and treatable \u2014 and they can be an early warning about heart and circulation health, so we\u2019ll check those too.',
      'The tablet needs sexual stimulation to work, and it\u2019s worth trying it properly several times (at an adequate dose) before deciding it hasn\u2019t worked.',
      'Sildenafil works best on an empty stomach; tadalafil lasts longer and can be taken as a small daily dose for more spontaneity.',
      'One vital safety rule: never take these with nitrate heart medicines or \u201cpoppers\u201d \u2014 the combination can dangerously drop your blood pressure.',
      'Seek urgent help for an erection lasting over 4 hours, or sudden vision/hearing loss.',
    ],
    followUp: 'Assess after an adequate trial (\u22656\u20138 attempts at optimal dose). Manage CV risk factors. Refer to urology if refractory, or endocrine if confirmed hypogonadism/pituitary concern.',
    redFlags: [
      'ED with exertional chest pain/breathlessness \u2192 cardiac assessment before sexual activity.',
      'Priapism (>4 h) \u2192 emergency; sudden visual/hearing loss with PDE5i \u2192 stop and assess.',
    ],
    emisText: `Erectile dysfunction:
- Treat as CV risk marker: assess QRISK, glucose, lipids, early-morning testosterone; review drugs; lifestyle.
- 1st-line: PDE5i \u2014 sildenafil 50 mg (~1 h pre-sex, empty stomach) or tadalafil 10 mg on-demand / 2.5-5 mg OD. Try \u22656-8 times at adequate dose.
- ABSOLUTE CI: nitrates / nicorandil.
- Confirm/treat low testosterone. Refractory \u2192 vacuum device/alprostadil/urology. Psychogenic \u2192 counselling.
- Priapism >4 h = emergency.`,
    sources: [
      { label: 'NICE CKS \u2014 Erectile dysfunction', url: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
    ],
  }
  );
})();
