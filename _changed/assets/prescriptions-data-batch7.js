/* ============================================
   Reasoning GP — Ready Prescriptions (batch 7)
   Haematinics · paediatric · mental health · eyes.
   Adds: folate deficiency, B12 deficiency, vitamin D
   deficiency (halal options), chickenpox, infantile
   colic, GORD in children, allergic conjunctivitis,
   agitation, acute stress disorder.
   Pushes into window.RGP_PRESCRIPTIONS.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);

  RX.push(
  // ---------------- Folate deficiency anaemia ----------------
  {
    id: 'folate-deficiency',
    title: 'Folate deficiency anaemia',
    category: 'Haematology & Nutrition',
    eyebrow: 'Replace folic acid · ALWAYS check B12 first',
    indication: 'Macrocytic anaemia / low serum folate. Replace with oral folic acid and treat the underlying cause (poor diet, malabsorption/coeliac, pregnancy, alcohol, drugs e.g. methotrexate).',
    contraindications: 'CRITICAL: check & correct B12 BEFORE giving folic acid in combined deficiency \u2014 folate alone can precipitate/worsen subacute combined degeneration of the cord. Exclude haematological malignancy if unexplained.',
    duration: 'Usually 4 months (longer if cause persists)',
    drugs: [
      { name: 'Folic acid', dose: '5 mg', freq: 'OD', route: 'PO', days: '4 months (until cause corrected)' },
      { name: 'Check B12 first (treat if also low)', dose: '\u2014', freq: 'Baseline', route: 'Investigation', days: 'Before folate' },
    ],
    altRegimens: [
      { label: 'Pregnancy / preconception', drugs: 'Folic acid 400 micrograms OD until 12 weeks (5 mg OD if high risk: previous NTD, diabetes, BMI \u226530, antiepileptics, sickle cell/thalassaemia).' },
      { label: 'Ongoing cause (e.g. malabsorption, chronic haemolysis)', drugs: 'Longer-term/lifelong folic acid; treat underlying cause (e.g. coeliac).' },
      { label: 'Methotrexate', drugs: 'Folic acid (e.g. 5 mg weekly, on a different day) to reduce toxicity \u2014 separate indication.' },
    ],
    counselling: [
      'Low folate is a common, very treatable cause of anaemia \u2014 a daily tablet usually corrects it over a few months.',
      'We always check your B12 at the same time, because treating folate alone when B12 is also low can cause nerve problems.',
      'We\u2019ll look for the cause \u2014 diet, gut absorption (e.g. coeliac), pregnancy, alcohol or certain medicines.',
      'Folate-rich foods include green leafy vegetables, pulses and fortified cereals.',
    ],
    followUp: 'Recheck FBC at ~2\u20134 weeks (reticulocytosis confirms response) and ensure normalisation; investigate/treat cause (coeliac screen, diet, alcohol). Consider lifelong if cause persists.',
    redFlags: [
      'Pancytopenia, very high MCV, or no response \u2192 reconsider diagnosis (myelodysplasia, haematological malignancy) \u2192 haematology.',
      'Neurological symptoms \u2192 ensure B12 addressed.',
    ],
    emisText: `Folate deficiency anaemia:
- CHECK B12 FIRST (and treat if low) before folate \u2014 avoid SACD.
- Folic acid 5 mg OD x 4 months (longer if cause persists).
- Find cause: diet, coeliac/malabsorption, alcohol, pregnancy, drugs (methotrexate).
- Pregnancy prophylaxis: 400 mcg OD (5 mg if high risk) to 12 wks.
- Recheck FBC; no response/pancytopenia \u2192 haematology.`,
    sources: [
      { label: 'NICE CKS \u2014 Anaemia (B12 & folate deficiency)', url: 'https://cks.nice.org.uk/topics/anaemia-b12-folate-deficiency/' },
    ],
  },

  // ---------------- B12 deficiency anaemia ----------------
  {
    id: 'b12-deficiency',
    title: 'B12 deficiency anaemia',
    category: 'Haematology & Nutrition',
    eyebrow: 'IM hydroxocobalamin · loading then maintenance',
    indication: 'Vitamin B12 deficiency (macrocytic anaemia and/or neurological features). Determine cause: pernicious anaemia (anti-IF/parietal antibodies), malabsorption, or dietary (vegan). Treat with IM hydroxocobalamin; dietary cause may use oral.',
    contraindications: 'If both B12 and folate low, START B12 FIRST (then folate) to avoid subacute combined degeneration. Neurological involvement needs more intensive loading. Exclude other causes of macrocytosis.',
    duration: 'Lifelong if pernicious anaemia/malabsorption',
    drugs: [
      { name: 'Hydroxocobalamin (no neuro features): loading', dose: '1 mg IM', freq: '3\u00d7/week', route: 'IM', days: '2 weeks' },
      { name: 'Hydroxocobalamin: maintenance', dose: '1 mg IM', freq: 'Every 3 months', route: 'IM', days: 'Lifelong (if irreversible cause)' },
      { name: 'Neurological involvement: loading', dose: '1 mg IM', freq: 'Alternate days', route: 'IM', days: 'Until no further improvement' },
      { name: 'Dietary deficiency (vegan): oral cyanocobalamin', dose: '50\u20131000 micrograms', freq: 'OD', route: 'PO', days: 'Ongoing / correct diet' },
    ],
    altRegimens: [
      { label: 'Pernicious anaemia / malabsorption', drugs: 'Lifelong 3-monthly IM hydroxocobalamin maintenance (neuro: 2-monthly).' },
      { label: 'Dietary (vegan/vegetarian)', drugs: 'Oral B12 supplement and/or fortified foods; IM if symptomatic/anaemic until corrected.' },
      { label: 'Combined B12 + folate deficiency', drugs: 'Treat B12 first, then add folic acid 5 mg OD.' },
    ],
    counselling: [
      'Low B12 is treated with vitamin injections \u2014 a course to build up the level, then usually one every three months if the cause is permanent (like pernicious anaemia).',
      'If your deficiency is from a vegan/vegetarian diet, tablets or fortified foods may be enough.',
      'Tell us about any numbness, tingling, balance or memory problems \u2014 these need a more intensive injection schedule.',
      'We treat B12 before folate when both are low, to protect the nerves.',
      'Pernicious anaemia is autoimmune and usually needs lifelong injections.',
    ],
    followUp: 'Recheck FBC/reticulocytes after ~10 days\u20138 weeks; monitor for hypokalaemia early in treatment of severe anaemia. Check ferritin (co-existing iron deficiency may emerge). Monitor neurological recovery.',
    redFlags: [
      'Neurological features (SACD), or severe anaemia with cardiac symptoms \u2192 prompt/intensive treatment.',
      'No response, pancytopenia \u2192 reconsider diagnosis \u2192 haematology.',
    ],
    emisText: `B12 deficiency:
- Combined with folate \u2192 treat B12 FIRST.
- No neuro: hydroxocobalamin 1 mg IM 3x/week for 2 weeks, then 1 mg IM every 3 months (lifelong if PA/malabsorption).
- Neuro involvement: 1 mg IM alternate days until no further improvement, then 2-monthly.
- Dietary/vegan: oral cyanocobalamin 50-1000 mcg OD / fortified foods.
- Check PA antibodies; recheck FBC; watch K+ early; check ferritin.`,
    sources: [
      { label: 'NICE CKS \u2014 Anaemia (B12 & folate deficiency)', url: 'https://cks.nice.org.uk/topics/anaemia-b12-folate-deficiency/' },
    ],
  },

  // ---------------- Vitamin D deficiency (halal options) ----------------
  {
    id: 'vitamin-d-deficiency',
    title: 'Vitamin D deficiency (with halal options)',
    category: 'Haematology & Nutrition',
    eyebrow: 'Loading then maintenance · halal/vegan formulations',
    indication: 'Vitamin D deficiency (commonly 25-OH-D <25 nmol/L) or insufficiency. Loading dose then maintenance. Many standard colecalciferol products are animal/lanolin-derived or in gelatin capsules \u2014 this card flags halal/vegan-suitable options.',
    contraindications: 'Avoid in hypercalcaemia, known vitamin D toxicity, some renal stones/sarcoidosis (specialist). Check calcium before/with treatment if symptomatic or giving high doses. Correct significant hypocalcaemia/coexisting causes; severe deficiency with symptoms \u2192 consider bone profile, PTH.',
    duration: 'Loading ~6\u201310 weeks then lifelong maintenance',
    drugs: [
      { name: 'Loading: colecalciferol total ~300,000 IU (split)', dose: 'e.g. 50,000 IU/week \u00d76, or 4000 IU/day', freq: 'Per regimen', route: 'PO', days: '~6\u201310 weeks' },
      { name: 'Maintenance: colecalciferol', dose: '800\u20132000 IU', freq: 'OD', route: 'PO', days: 'Ongoing' },
      { name: 'Halal/vegan option: lichen-derived vegan colecalciferol (D3)', dose: 'Equivalent IU', freq: 'Per regimen', route: 'PO', days: 'As above' },
      { name: 'Alt halal/vegan: ergocalciferol (D2) oral preparation', dose: 'Equivalent IU', freq: 'Per regimen', route: 'PO', days: 'As above' },
    ],
    altRegimens: [
      { label: 'Halal / vegan suitability', drugs: 'Colecalciferol (D3) is usually sheep\u2019s-wool (lanolin) or fish-derived and often in gelatin capsules. Halal/vegan-suitable options: lichen-derived vegan D3, ergocalciferol (D2, plant/yeast-derived), or oral solution/drops without gelatin. Check the specific product/excipients and patient preference.' },
      { label: 'Maintenance only (insufficiency)', drugs: 'If insufficiency rather than deficiency, colecalciferol 800\u20132000 IU OD without high-dose loading.' },
      { label: 'Malabsorption / non-response', drugs: 'Higher doses or specialist input; check adherence, calcium, PTH; consider coeliac.' },
      { label: 'With calcium (bone protection)', drugs: 'If dietary calcium low / on bone-protective therapy, consider a combined calcium + vitamin D preparation (check halal status of the specific brand).' },
    ],
    counselling: [
      'We\u2019ll give a higher \u201cloading\u201d dose for a few weeks to top up your levels, then a smaller daily dose to keep them up.',
      'Many vitamin D capsules contain animal-derived ingredients or gelatin \u2014 if that matters to you, there are halal/vegan-friendly options (lichen-derived D3, plant-based D2, or gelatin-free drops) and we\u2019ll prescribe one of those.',
      'Sensible sun exposure and vitamin-D-rich/fortified foods help maintain levels.',
      'Take it regularly \u2014 it works gradually; tell us if you get symptoms like excessive thirst or nausea (rare, from too much).',
    ],
    followUp: 'Recheck after loading only if symptoms persist or malabsorption suspected (routine retesting often unnecessary). Continue lifelong maintenance for at-risk groups. Check calcium if symptomatic/high-dose.',
    redFlags: [
      'Symptomatic hypocalcaemia (tetany, seizures), or features suggesting osteomalacia/rickets \u2192 prompt treatment/specialist.',
      'Hypercalcaemia symptoms \u2192 review dose; investigate cause.',
    ],
    emisText: `Vitamin D deficiency (25-OH-D <25 nmol/L):
- Loading ~300,000 IU total (e.g. colecalciferol 50,000 IU/week x6, or 4000 IU/day x ~10 wks), then maintenance 800-2000 IU OD lifelong (at-risk).
- HALAL/VEGAN options: standard D3 often lanolin/fish + gelatin \u2014 use lichen-derived vegan D3, ergocalciferol (D2), or gelatin-free drops; check excipients.
- Check calcium if symptomatic/high-dose; consider PTH/bone profile if severe. Routine retesting often unnecessary.`,
    sources: [
      { label: 'NICE CKS \u2014 Vitamin D deficiency in adults', url: 'https://cks.nice.org.uk/topics/vitamin-d-deficiency-in-adults/' },
    ],
  },

  // ---------------- Chickenpox ----------------
  {
    id: 'chickenpox',
    title: 'Chickenpox (varicella)',
    category: 'Dermatology',
    eyebrow: 'Supportive · antiviral for at-risk · avoid NSAIDs',
    indication: 'Varicella (itchy vesicular rash, mild systemic upset). Usually self-limiting in healthy children \u2014 supportive care. Aciclovir is considered for at-risk/older patients presenting early. Identify and protect vulnerable contacts.',
    contraindications: 'AVOID NSAIDs in chickenpox (associated with severe soft-tissue/necrotising skin infection). Avoid aspirin in children (Reye\u2019s). Immunocompromised, neonates, and pregnant women with chickenpox/exposure need urgent specialist advice (VZIG/antivirals).',
    duration: 'Rash crusts over ~5 days; aciclovir 7 days',
    drugs: [
      { name: 'Paracetamol for fever/discomfort (NOT ibuprofen)', dose: 'Weight/age-based', freq: 'PRN', route: 'PO', days: 'Symptomatic' },
      { name: 'Chlorphenamine (antihistamine) for itch (\u22651 yr)', dose: 'Age-based', freq: 'PRN/ON', route: 'PO', days: 'Symptomatic' },
      { name: 'Topical calamine / emollients for itch', dose: 'Apply', freq: 'PRN', route: 'Topical', days: 'Symptomatic' },
      { name: 'Aciclovir (at-risk, presenting \u226424 h of rash)', dose: '800 mg (adult) / age-based', freq: '5\u00d7/day', route: 'PO', days: '7 days' },
    ],
    altRegimens: [
      { label: 'Healthy child', drugs: 'Supportive only: fluids, paracetamol, antihistamine/calamine for itch, keep nails short, loose clothing.' },
      { label: 'Adult / adolescent / smoker / immunocompetent presenting early', drugs: 'Consider oral aciclovir if within 24 h of rash onset (more severe disease in adults).' },
      { label: 'High risk (immunocompromised, neonate, pregnant, severe)', drugs: 'Urgent specialist advice \u2014 IV aciclovir / VZIG / varicella antibody testing as indicated.' },
      { label: 'Secondary bacterial infection', drugs: 'Increasing redness/pain/fever after initial improvement \u2192 antibiotics (e.g. flucloxacillin); be alert to necrotising infection.' },
    ],
    counselling: [
      'Chickenpox is usually mild in children and gets better by itself \u2014 the spots scab over in about 5 days.',
      'Use paracetamol (not ibuprofen) for fever or discomfort \u2014 anti-inflammatories can rarely lead to serious skin infections in chickenpox.',
      'Soothe the itch with calamine, cooling emollients or an antihistamine; keep nails short to reduce scratching and scarring.',
      'Stay off school/work until all the spots have crusted over (usually ~5 days from the rash starting).',
      'Avoid contact with pregnant women, newborns and anyone with a weak immune system.',
      'Seek urgent help if your child becomes drowsy, breathless, has a spreading red/painful area of skin, or won\u2019t drink.',
    ],
    followUp: 'Safety-net for complications. High-risk exposure (pregnant/immunocompromised/neonate) \u2192 urgent same-day advice. Review if secondary infection or systemic deterioration.',
    redFlags: [
      'Pregnant woman, neonate, or immunocompromised person with chickenpox or significant exposure \u2192 urgent specialist advice.',
      'Spreading painful erythema (necrotising fasciitis), breathlessness (varicella pneumonia), drowsiness/neurological signs (encephalitis/cerebellitis), or dehydration \u2192 emergency.',
    ],
    emisText: `Chickenpox (varicella):
- Healthy child: supportive \u2014 paracetamol (NOT ibuprofen/NSAID; not aspirin), antihistamine/calamine for itch, fluids, nails short. Off school until lesions crusted (~5 days).
- Consider aciclovir if at-risk/adolescent/adult presenting \u226424 h of rash.
- HIGH RISK (pregnant/neonate/immunocompromised) or exposure \u2192 urgent specialist advice (VZIG/IV aciclovir).
- Red flags: necrotising skin infection, pneumonia, neuro signs, dehydration.`,
    sources: [
      { label: 'NICE CKS \u2014 Chickenpox', url: 'https://cks.nice.org.uk/topics/chickenpox/' },
    ],
  },

  // ---------------- Infantile colic ----------------
  {
    id: 'infantile-colic',
    title: 'Infantile colic',
    category: 'Paediatrics',
    eyebrow: 'Reassurance & support · no effective drug',
    indication: 'Infantile colic (paroxysmal crying \u22653 h/day, \u22653 days/week, in a thriving, well baby <4 months). A self-limiting diagnosis of exclusion. Management is parental reassurance and support \u2014 there is no consistently effective drug treatment.',
    contraindications: 'Exclude other causes of crying first (hunger, infection, cow\u2019s milk protein allergy, reflux, hair tourniquet, hernia, NAI). Faltering growth, fever, vomiting, blood in stool, or an unwell baby are NOT colic. Avoid unproven/withdrawn medicines.',
    duration: 'Self-limiting \u2014 usually resolves by 3\u20134 months',
    drugs: [
      { name: 'Parental reassurance, support & coping strategies (mainstay)', dose: '\u2014', freq: '\u2014', route: 'Advice', days: 'Until resolves' },
      { name: 'Holding/soothing techniques; responsive feeding; winding', dose: '\u2014', freq: 'PRN', route: 'Advice', days: 'Ongoing' },
    ],
    altRegimens: [
      { label: 'Optional, limited-evidence parent-led trials', drugs: 'Some parents try simethicone or lactase drops \u2014 evidence is weak; not routinely recommended. Review and stop if no benefit.' },
      { label: 'Suspected cow\u2019s milk protein allergy', drugs: 'If other features (eczema, GI/blood in stool, faltering growth): 2\u20134-week trial of maternal dairy exclusion (breastfed) or extensively hydrolysed formula \u2014 see CMPA pathway.' },
      { label: 'Suspected GORD', drugs: 'If marked regurgitation/distress with feeds \u2192 see infant reflux pathway (positioning, feed review; medication only if GORD).' },
    ],
    counselling: [
      'Colic is common, not dangerous, and your baby is healthy and growing \u2014 it almost always settles by 3 to 4 months.',
      'It is not caused by anything you are doing wrong, and it doesn\u2019t mean your baby is in danger.',
      'Soothing strategies can help: holding, gentle motion/rocking, white noise, a warm bath, and winding during/after feeds.',
      'There is no reliable medicine for colic \u2014 over-the-counter drops have weak evidence; we can review feeding if needed.',
      'Look after yourselves too \u2014 take turns, accept help, and never shake the baby; put the baby down safely and take a break if you feel overwhelmed.',
      'See us urgently if your baby has a fever, vomiting, blood in the nappy, poor feeding, or seems unwell or floppy \u2014 that is not colic.',
    ],
    followUp: 'Review if not improving by ~4 months, faltering growth, or red flags. Consider CMPA/GORD pathways if specific features. Screen and support parental wellbeing/coping.',
    redFlags: [
      'Fever, vomiting (esp. bilious), blood in stool, faltering growth, lethargy, or an unwell/floppy baby \u2192 urgent assessment.',
      'Concerns about parental coping / safeguarding \u2192 support and safeguard.',
    ],
    emisText: `Infantile colic (well, thriving baby <4 mo):
- Diagnosis of exclusion; self-limiting (resolves ~3-4 mo).
- Mainstay: parental reassurance + support + soothing/feeding advice; safeguard parental coping (never shake baby).
- No effective drug \u2014 simethicone/lactase weak evidence, not routine.
- If CMPA features \u2192 dairy exclusion/eHF trial; if GORD features \u2192 reflux pathway.
- Red flags (fever, bilious vomiting, blood in stool, faltering growth, unwell) = NOT colic \u2192 assess.`,
    sources: [
      { label: 'NICE CKS \u2014 Colic (infantile)', url: 'https://cks.nice.org.uk/topics/colic-infantile/' },
    ],
  },

  // ---------------- GORD in children ----------------
  {
    id: 'gord-children',
    title: 'GORD in infants & children',
    category: 'Paediatrics',
    eyebrow: 'Positioning/feeds first · stepwise · NG1',
    indication: 'Gastro-oesophageal reflux (GOR) vs reflux disease (GORD) in infants/children. Physiological GOR in a thriving baby needs reassurance only. Stepwise treatment for marked distress, feeding difficulty, or faltering growth (GORD).',
    contraindications: 'Red flags (bile/blood-stained or projectile vomiting, abdominal distension, faltering growth, late onset >6 months or persisting >1 year, systemic illness, bulging fontanelle) are NOT simple reflux \u2192 investigate. Avoid acid suppression for simple posseting in a thriving infant. Don\u2019t combine a thickener with an alginate.',
    duration: 'Trials ~1\u20132 weeks then review; PPI/H2RA 4 weeks',
    drugs: [
      { name: 'Breastfed: breastfeeding assessment \u00b1 alginate trial', dose: 'Per product', freq: 'After feeds', route: 'PO', days: '1\u20132 weeks trial' },
      { name: 'Formula-fed: review feed volume/frequency; trial thickened feeds', dose: 'Smaller, more frequent', freq: 'Per feeds', route: 'PO', days: '1\u20132 weeks' },
      { name: 'Alginate (e.g. Gaviscon Infant) \u2014 if measures fail (not with thickener)', dose: 'Per weight', freq: 'With feeds', route: 'PO', days: '1\u20132 weeks trial' },
      { name: 'PPI or H2RA trial (GORD: distress/feeding difficulty/faltering growth)', dose: 'Weight-based (specialist dosing)', freq: 'OD\u2013BD', route: 'PO', days: '4 weeks then review' },
    ],
    altRegimens: [
      { label: 'Physiological GOR (thriving, well)', drugs: 'Reassurance: common, peaks ~4 months, resolves by ~1 year. Position upright after feeds; never reduce total intake; sleep supine.' },
      { label: 'Stepwise (formula-fed)', drugs: 'Review overfeeding \u2192 smaller/more frequent feeds \u2192 thickened feed trial \u2192 alginate trial (stop thickener if using alginate).' },
      { label: 'Suspected CMPA overlap', drugs: 'If allergic features \u2192 trial of dairy exclusion / extensively hydrolysed formula (see CMPA pathway).' },
      { label: 'No response to PPI/H2RA', drugs: 'Reconsider diagnosis; refer paediatrics (do not continue acid suppression indefinitely without benefit). Avoid prokinetics without specialist advice.' },
    ],
    counselling: [
      'In a happy, growing baby, bringing up milk is normal and almost always settles by the first birthday \u2014 we focus on feeding tweaks and reassurance, not medicines.',
      'Helpful measures: hold upright after feeds, avoid overfeeding, and (for formula) smaller, more frequent feeds; always put the baby to sleep on their back.',
      'If reflux is causing real distress, feeding refusal or poor weight gain, we can trial treatments step by step.',
      'Acid-suppressing medicines are only for reflux that is causing problems, used as a trial and reviewed \u2014 not for simple posseting.',
      'Seek urgent help for green (bile) or blood-stained vomit, forceful projectile vomiting, a baby who won\u2019t feed or is unwell, or poor weight gain.',
    ],
    followUp: 'Review feeding measures at 1\u20132 weeks; PPI/H2RA trial at 4 weeks (stop if ineffective). Faltering growth, red flags, or non-response \u2192 paediatrics.',
    redFlags: [
      'Bile/blood-stained or projectile vomiting, abdominal distension, faltering growth, late onset >6 months / persisting >1 year, systemic illness, or bulging fontanelle \u2192 urgent assessment.',
    ],
    emisText: `GOR/GORD in infants & children (NG1):
- Physiological GOR (thriving): reassurance \u2014 resolves ~1 yr; upright after feeds, supine sleep, don't overfeed.
- Stepwise (formula): review feeds \u2192 smaller/more frequent \u2192 thickened feed \u2192 alginate (NOT with thickener), 1-2 wk trials.
- GORD (distress/feeding difficulty/faltering growth): 4-wk PPI or H2RA trial; stop if no benefit.
- CMPA features \u2192 dairy exclusion/eHF. Red flags (bile/blood vomit, projectile, faltering growth, late onset) \u2192 assess.`,
    sources: [
      { label: 'NICE NG1 \u2014 GORD in children & young people', url: 'https://www.nice.org.uk/guidance/ng1' },
    ],
  },

  // ---------------- Allergic conjunctivitis ----------------
  {
    id: 'conjunctivitis-allergic',
    title: 'Allergic conjunctivitis',
    category: 'ENT & Eyes',
    eyebrow: 'Allergen avoidance · antihistamine/mast-cell drops',
    indication: 'Itchy, watery, red eyes (often bilateral) with allergic rhinitis or known allergen exposure (seasonal/perennial). Itch is the hallmark. Allergen avoidance plus topical/oral antihistamines; mast-cell stabilisers for frequent/seasonal symptoms.',
    contraindications: 'Distinguish from infective (purulent discharge, no itch) and from sight-threatening red eye (pain, photophobia, reduced vision, unilateral fixed red eye). Topical antihistamine/decongestant combinations: limit duration (rebound). Avoid topical steroids in primary care (specialist \u2014 risk of glaucoma/cataract/herpes).',
    duration: 'PRN / seasonal course; mast-cell stabilisers regular',
    drugs: [
      { name: 'Topical antihistamine (e.g. olopatadine / azelastine)', dose: '1 drop', freq: 'BD', route: 'Ocular', days: 'Symptomatic / seasonal' },
      { name: 'Mast-cell stabiliser (e.g. sodium cromoglicate 2%)', dose: '1\u20132 drops', freq: 'QDS', route: 'Ocular', days: 'Regular (needs days\u2013weeks to work)' },
      { name: 'Oral antihistamine (e.g. cetirizine/loratadine)', dose: 'Standard', freq: 'OD', route: 'PO', days: 'Symptomatic' },
      { name: 'Lubricant drops + cool compresses (adjunct)', dose: '1 drop', freq: 'PRN', route: 'Ocular', days: 'Symptomatic' },
    ],
    altRegimens: [
      { label: 'With allergic rhinitis', drugs: 'Treat the rhinitis (intranasal corticosteroid \u00b1 oral antihistamine) \u2014 often improves eye symptoms too (see allergic rhinitis pathway).' },
      { label: 'Frequent/seasonal (predictable)', drugs: 'Start a mast-cell stabiliser ~1\u20132 weeks before the season and use regularly; combined antihistamine/mast-cell drops (e.g. olopatadine) are convenient.' },
      { label: 'Severe / vernal / atopic keratoconjunctivitis', drugs: 'Refer ophthalmology (may need topical steroid/ciclosporin) \u2014 risk to vision.' },
    ],
    counselling: [
      'Itchy, watery, pink eyes from allergy are uncomfortable but not harmful \u2014 the itch is the giveaway it\u2019s allergic rather than infective.',
      'Avoid rubbing; cool compresses and lubricant drops soothe; reduce exposure to the trigger (e.g. pollen \u2014 wraparound sunglasses, shower/change after being outside).',
      'Antihistamine eye drops work quickly; the \u201cmast-cell\u201d drops work preventively but take a week or two, so start them before your hay-fever season.',
      'If you also get a runny/itchy nose, treating that often helps the eyes too.',
      'See us urgently for eye pain, sensitivity to light, reduced vision, or a one-sided very red eye \u2014 that is not simple allergy.',
    ],
    followUp: 'Review if not controlled or diagnosis uncertain. Severe/vernal/atopic keratoconjunctivitis, or red flags \u2192 ophthalmology.',
    redFlags: [
      'Eye pain, photophobia, reduced visual acuity, unilateral persistent red eye, contact-lens wearer with red eye \u2192 same-day ophthalmology (not allergic conjunctivitis).',
    ],
    emisText: `Allergic conjunctivitis (itch = hallmark, bilateral):
- Allergen avoidance, cool compresses, lubricants, don't rub.
- Topical antihistamine (olopatadine/azelastine) BD PRN; or mast-cell stabiliser (cromoglicate QDS) regularly \u2014 start ~1-2 wks pre-season.
- Oral antihistamine (cetirizine/loratadine). Treat coexisting allergic rhinitis (intranasal steroid).
- Avoid topical steroids in primary care. Pain/photophobia/reduced vision/unilateral red eye \u2192 ophthalmology.`,
    sources: [
      { label: 'NICE CKS \u2014 Conjunctivitis (allergic)', url: 'https://cks.nice.org.uk/topics/conjunctivitis-allergic/' },
    ],
  },

  // ---------------- Agitation ----------------
  {
    id: 'agitation',
    title: 'Agitation / acute behavioural disturbance',
    category: 'Mental Health',
    eyebrow: 'De-escalate first · cause-led · drugs last resort',
    indication: 'Acute agitation/behavioural disturbance. ALWAYS look for and treat an underlying cause (delirium, hypoxia, hypoglycaemia, pain, infection, intoxication/withdrawal, urinary retention). De-escalation is first-line; medication is a last resort at the lowest effective dose. Covers delirium-related and palliative agitation.',
    contraindications: 'Antipsychotics in dementia/delirium: increased stroke/death risk \u2014 use only if severe distress/risk, lowest dose, shortest time. AVOID antipsychotics in Parkinson\u2019s/Lewy body dementia (use lorazepam, or quetiapine/clozapine if essential). Benzodiazepines can worsen delirium (reserve for alcohol/benzo withdrawal, seizures, or where antipsychotics contraindicated).',
    duration: 'Single/short-term; review urgently',
    drugs: [
      { name: 'De-escalation + treat underlying cause (FIRST)', dose: '\u2014', freq: '\u2014', route: '\u2014', days: 'Always first' },
      { name: 'Lorazepam (if pharmacological control needed)', dose: '0.5\u20131 mg', freq: 'PRN, review', route: 'PO/IM', days: 'Short-term' },
      { name: 'Haloperidol (NOT in Parkinson\u2019s/LBD)', dose: '0.5\u20131 mg (elderly) / 1\u20132 mg', freq: 'PRN, review', route: 'PO/IM', days: 'Lowest dose, shortest time' },
      { name: 'Palliative terminal agitation: midazolam', dose: '2.5\u20135 mg', freq: 'PRN / via CSCI', route: 'SC', days: 'Per palliative plan' },
    ],
    altRegimens: [
      { label: 'Delirium (NICE)', drugs: 'Identify & treat cause; reorientate, optimise environment. If severely distressed/risk and verbal de-escalation fails \u2192 short-term low-dose haloperidol (avoid in Parkinson\u2019s/LBD) \u2014 review daily.' },
      { label: 'Dementia (BPSD)', drugs: 'Non-pharmacological first (unmet needs: pain, infection, constipation, environment). Antipsychotic only if severe risk/distress \u2014 lowest dose, time-limited, review.' },
      { label: 'Parkinson\u2019s / Lewy body dementia', drugs: 'Avoid typical/most antipsychotics (severe sensitivity). Use lorazepam; if antipsychotic essential, quetiapine or clozapine (specialist).' },
      { label: 'Alcohol/benzodiazepine withdrawal', drugs: 'Benzodiazepine (e.g. chlordiazepoxide/diazepam) per withdrawal regimen + thiamine; not antipsychotic-first.' },
    ],
    counselling: [
      '(For carers/family) Agitation is often caused by something treatable \u2014 pain, infection, constipation, a full bladder, or a new medication \u2014 so we look for and fix the cause first.',
      'A calm environment, familiar faces, good lighting, glasses/hearing aids and reorientation help more than medication.',
      'If a sedating medicine is needed, we use the smallest dose for the shortest time and review quickly, because these drugs carry risks especially in older or frail people.',
      'In Parkinson\u2019s and related conditions we avoid certain antipsychotics, as they can cause severe reactions.',
    ],
    followUp: 'Review any sedative within 24 hours; reassess cause and need. Document indication, dose, response. Escalate/admit if cause needs treatment or risk persists.',
    redFlags: [
      'New acute confusion = delirium until proven otherwise \u2192 find the cause (sepsis, hypoxia, hypoglycaemia, retention, intoxication/withdrawal).',
      'Risk to self/others not manageable safely, or serious underlying cause \u2192 urgent assessment / admission.',
    ],
    emisText: `Acute agitation / behavioural disturbance:
- FIRST: de-escalate + find/treat cause (delirium, hypoxia, hypoglycaemia, pain, infection, retention, intoxication/withdrawal).
- Drugs = last resort, lowest dose, shortest time, review:
  - Lorazepam 0.5-1 mg PO/IM PRN.
  - Haloperidol 0.5-2 mg (NOT in Parkinson's/LBD) \u2014 review daily.
  - Palliative: midazolam 2.5-5 mg SC.
- Dementia/delirium antipsychotics \u2191 stroke/death \u2014 time-limited. Withdrawal \u2192 benzodiazepine regimen + thiamine.`,
    sources: [
      { label: 'NICE CKS \u2014 Delirium', url: 'https://cks.nice.org.uk/topics/delirium/' },
      { label: 'NICE NG10 \u2014 Violence and aggression', url: 'https://www.nice.org.uk/guidance/ng10' },
    ],
  },

  // ---------------- Acute stress disorder ----------------
  {
    id: 'acute-stress-disorder',
    title: 'Acute stress disorder / reaction',
    category: 'Mental Health',
    eyebrow: 'Watchful waiting · TF-CBT if needed · no routine drugs',
    indication: 'Acute stress reaction/disorder within ~1 month of a traumatic event (intrusion, avoidance, arousal, dissociation). Most resolve spontaneously. Management is psychological support and active monitoring; consider trauma-focused CBT if severe/persisting. Watch for evolution to PTSD.',
    contraindications: 'Do NOT offer single-session psychological debriefing (may be harmful). Drugs are NOT first-line and not routine. Avoid benzodiazepines (dependence, no benefit, may worsen outcomes). Assess risk (suicide/self-harm) and safeguarding.',
    duration: 'Active monitoring ~1 month; review',
    drugs: [
      { name: 'Psychological first aid + practical/social support (mainstay)', dose: '\u2014', freq: '\u2014', route: 'Support', days: 'Early' },
      { name: 'Active monitoring with planned review', dose: '\u2014', freq: '\u2014', route: '\u2014', days: '~1 month' },
      { name: 'Trauma-focused CBT (if severe symptoms / not settling)', dose: '\u2014', freq: 'Course', route: 'Psychological', days: 'Per therapy' },
      { name: 'Short-term hypnotic for severe sleep disturbance (caution)', dose: 'Lowest dose', freq: 'Short-term', route: 'PO', days: 'Days only' },
    ],
    altRegimens: [
      { label: 'Severe acute stress symptoms', drugs: 'Offer trauma-focused CBT (do not wait for spontaneous resolution if severe/functionally impairing).' },
      { label: 'Evolving PTSD (>1 month)', drugs: 'Move to PTSD pathway: trauma-focused psychological therapy (TF-CBT/EMDR) first-line; consider SSRI/venlafaxine as adjunct/second-line.' },
      { label: 'Comorbidity / risk', drugs: 'Treat comorbid depression, and assess/manage suicide risk and substance misuse; safeguard.' },
    ],
    counselling: [
      'After a frightening or traumatic event it\u2019s normal to feel shaken, have flashbacks, poor sleep or feel on edge \u2014 for most people this settles over the following weeks.',
      'The most helpful things early on are practical support, talking with people you trust, routine, and looking after sleep and basic needs \u2014 not a single \u201cdebrief\u201d session, which isn\u2019t recommended.',
      'We won\u2019t usually start medication; if symptoms are severe or aren\u2019t settling, a specific talking therapy (trauma-focused CBT) helps.',
      'Avoid using alcohol or sedatives to cope \u2014 they tend to make things worse.',
      'Come back \u2014 or seek urgent help \u2014 if you feel unsafe, have thoughts of harming yourself, or symptoms are getting worse rather than better.',
    ],
    followUp: 'Active monitoring with review at ~1 month; if symptoms persist beyond a month \u2192 assess for PTSD and offer trauma-focused therapy. Reassess risk at each contact.',
    redFlags: [
      'Suicidal ideation/intent, severe functional impairment, or risk to self/others \u2192 urgent mental-health assessment.',
      'Psychotic symptoms or severe dissociation \u2192 specialist.',
    ],
    emisText: `Acute stress disorder/reaction (<1 month post-trauma):
- Most resolve. Mainstay: psychological first aid, practical/social support, active monitoring (~1 month).
- Do NOT offer single-session debriefing. Drugs NOT routine; avoid benzodiazepines.
- Severe/persisting \u2192 trauma-focused CBT. >1 month \u2192 PTSD pathway (TF-CBT/EMDR; SSRI/venlafaxine adjunct).
- Assess suicide risk + safeguarding; treat comorbidity; avoid alcohol/sedative coping.`,
    sources: [
      { label: 'NICE NG116 \u2014 Post-traumatic stress disorder', url: 'https://www.nice.org.uk/guidance/ng116' },
      { label: 'NICE CKS \u2014 Post-traumatic stress disorder', url: 'https://cks.nice.org.uk/topics/post-traumatic-stress-disorder/' },
    ],
  }
  );
})();
