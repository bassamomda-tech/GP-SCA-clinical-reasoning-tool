/* Reasoning GP — Ready Prescriptions (batch 11): common dermatology gaps */
(function(){
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);
  RX.push(

  { id:'molluscum', title:'Molluscum contagiosum', category:'Dermatology',
    eyebrow:'Self-limiting · reassure · no routine treatment',
    indication:'Benign viral skin infection (pearly umbilicated papules), common in children. Self-limiting — usually clears within ~12–18 months. Treatment is generally not recommended.',
    contraindications:'Avoid traumatic/irritant treatments in children (pain, scarring). Do not squeeze. Widespread/persistent lesions in immunocompromised (e.g. HIV) → investigate/refer. Eyelid-margin lesion with conjunctivitis → ophthalmology.',
    duration:'Self-resolving (months)',
    drugs:[
      { name:'Reassurance — no treatment needed; avoid sharing towels/baths, don\u2019t scratch/squeeze', dose:'\u2014', freq:'\u2014', route:'Advice', days:'Until resolves' },
      { name:'Emollient / mild topical steroid if surrounding eczema (molluscum dermatitis)', dose:'Apply', freq:'OD\u2013BD', route:'Topical', days:'Short course' },
    ],
    altRegimens:[
      { label:'Troublesome/cosmetic (selected)', drugs:'Physical/chemical treatments are options but often painful and not routinely advised, especially in young children.' },
      { label:'Immunocompromised / atypical', drugs:'Extensive, facial in adults, or rapidly enlarging → consider HIV test / dermatology referral.' },
    ],
    counselling:[
      'These little spots are a harmless viral skin infection that almost always clears on its own, usually within a year or so.',
      'Try not to scratch or squeeze them, and avoid sharing towels or bath water to reduce spreading.',
      'No treatment is usually needed — creams and freezing can be painful, especially in children, and don\u2019t speed things up much.',
      'See us if the skin around them becomes red, sore and itchy (eczema reaction) or if a spot near the eye causes a red eye.',
    ],
    followUp:'Reassure; no routine follow-up. Review if eyelid involvement with conjunctivitis, secondary infection, or extensive/atypical in an immunocompromised patient.',
    redFlags:['Adult with extensive/facial lesions, or immunocompromise → consider HIV / refer.','Eyelid-margin lesion + red eye → ophthalmology.'],
    emisText:`Molluscum contagiosum:
- Benign, self-limiting (clears ~12-18 months). Reassure; no routine treatment.
- Don't squeeze/scratch; avoid sharing towels/bath water.
- Surrounding eczema: emollient \u00b1 short mild topical steroid.
- Immunocompromised/extensive/facial in adult \u2192 consider HIV/refer. Eyelid + conjunctivitis \u2192 ophthalmology.`,
    sources:[{ label:'NICE CKS \u2014 Molluscum contagiosum', url:'https://cks.nice.org.uk/topics/molluscum-contagiosum/' }],
  },

  { id:'contact-dermatitis', title:'Contact dermatitis (irritant / allergic)', category:'Dermatology',
    eyebrow:'Avoid trigger + emollient + topical steroid',
    indication:'Eczematous reaction from skin contact with an irritant (cumulative, e.g. soaps/water) or allergen (delayed type IV, e.g. nickel, fragrances). Identify and avoid the cause; treat the flare.',
    contraindications:'Topical steroids: match potency to site (mild on face/flexures; avoid potent long-term on face). Suspected occupational cause → document (RIDDOR/occupational health). Persistent/unexplained → patch testing (dermatology).',
    duration:'Topical steroid short bursts; avoidance ongoing',
    drugs:[
      { name:'Identify + avoid trigger; soap substitute; gloves/barrier for irritant exposure', dose:'\u2014', freq:'\u2014', route:'Advice', days:'Ongoing (key)' },
      { name:'Emollient (generous) + soap substitute', dose:'Apply liberally', freq:'\u2265BD', route:'Topical', days:'Ongoing' },
      { name:'Topical corticosteroid matched to site/severity', dose:'Apply thin', freq:'OD\u2013BD', route:'Topical', days:'Short burst, review' },
    ],
    altRegimens:[
      { label:'Hand dermatitis', drugs:'Emollients + potent topical steroid burst; cotton-lined gloves for wet work; avoid irritants.' },
      { label:'Secondary infection', drugs:'Weeping/crusting/pustular \u2192 antibiotics (flucloxacillin).' },
      { label:'Persistent / allergic suspected', drugs:'Refer dermatology for patch testing to identify the allergen.' },
    ],
    counselling:[
      'This is a skin reaction to something it\u2019s come into contact with \u2014 the most important treatment is working out and avoiding the trigger.',
      'Use moisturiser often and a soap substitute; protect your hands with gloves for wet or dirty work.',
      'The steroid cream settles the flare \u2014 use it as directed for a short course, not long-term on the face.',
      'If it keeps coming back despite avoiding obvious triggers, we can refer you for patch testing to pin down the cause.',
    ],
    followUp:'Review flare response; reinforce avoidance/skin protection. Refer for patch testing if persistent/recurrent or occupational. Document occupational cases.',
    redFlags:['Spreading infection (weeping, pustules, systemic upset) \u2192 antibiotics.','Severe/widespread or facial involvement not settling \u2192 dermatology.'],
    emisText:`Contact dermatitis (irritant/allergic):
- KEY: identify + avoid trigger; soap substitute; gloves/barrier for wet work.
- Emollients generous + soap substitute; topical steroid (match potency to site) short burst.
- Secondary infection \u2192 flucloxacillin.
- Persistent/recurrent/occupational \u2192 dermatology for patch testing; document occupational cases.`,
    sources:[{ label:'NICE CKS \u2014 Dermatitis (contact)', url:'https://cks.nice.org.uk/topics/dermatitis-contact/' }],
  },

  { id:'folliculitis-boils', title:'Folliculitis & boils (furuncles)', category:'Dermatology',
    eyebrow:'Hygiene · most settle · antibiotics if needed',
    indication:'Superficial folliculitis (inflamed hair follicles) and furuncles/carbuncles (deeper staph abscesses). Most folliculitis is self-limiting; boils often need incision/drainage; antibiotics for systemic features, cellulitis, or high-risk sites.',
    contraindications:'A fluctuant boil needs drainage, not just antibiotics. Recurrent furunculosis → consider decolonisation, diabetes, MRSA. Facial \u201cdanger triangle\u201d lesions / systemic upset → caution (cavernous sinus risk). Swab if recurrent/not responding.',
    duration:'Antibiotic 5 days if indicated',
    drugs:[
      { name:'Hygiene: warm compresses, don\u2019t squeeze, antiseptic wash; most folliculitis self-resolves', dose:'\u2014', freq:'\u2014', route:'Advice', days:'Ongoing' },
      { name:'Incision & drainage for a fluctuant boil/abscess', dose:'\u2014', freq:'Once', route:'Procedure', days:'\u2014' },
      { name:'Flucloxacillin if systemic/spreading/cellulitis or high-risk site', dose:'500 mg', freq:'QDS', route:'PO', days:'5 days' },
      { name:'Clarithromycin if penicillin-allergic', dose:'500 mg', freq:'BD', route:'PO', days:'5 days' },
    ],
    altRegimens:[
      { label:'Recurrent furunculosis', drugs:'Swab (incl. MRSA); decolonisation (nasal mupirocin + antiseptic body wash); screen for diabetes; treat close contacts if recurrent.' },
      { label:'Hot-tub / gram-negative folliculitis', drugs:'Usually self-limiting; avoid the source.' },
    ],
    counselling:[
      'Most inflamed hair follicles settle by themselves with warm compresses and good hygiene \u2014 try not to squeeze them.',
      'A boil that becomes a soft, pus-filled lump usually needs draining rather than antibiotics alone.',
      'We\u2019ll add antibiotics if it\u2019s spreading, you feel unwell, or it\u2019s in a risky spot like the face.',
      'If you keep getting boils, come back \u2014 we may check for diabetes and treat the bacteria you carry on your skin.',
    ],
    followUp:'Review if not improving or recurrent. Recurrent → swab + decolonisation + diabetes screen. Spreading cellulitis → treat per cellulitis.',
    redFlags:['Systemic upset, spreading cellulitis, or facial \u201cdanger triangle\u201d with severe features → urgent.','Recurrent → MRSA/diabetes work-up.'],
    emisText:`Folliculitis & boils (furuncles):
- Folliculitis usually self-limiting: warm compresses, antiseptic wash, don't squeeze.
- Fluctuant boil/abscess \u2192 incision & drainage (not just abx).
- Flucloxacillin 500 mg QDS 5d (clarithromycin 500 mg BD if pen-allergic) if systemic/spreading/cellulitis/high-risk site.
- Recurrent \u2192 swab (incl MRSA) + decolonisation + diabetes screen.`,
    sources:[{ label:'NICE CKS \u2014 Boils, carbuncles, and staphylococcal carriage', url:'https://cks.nice.org.uk/topics/boils-carbuncles-staphylococcal-carriage/' }],
  },

  { id:'paronychia-acute', title:'Acute paronychia', category:'Dermatology',
    eyebrow:'Warm soaks · drain pus · antibiotic if needed',
    indication:'Acute bacterial (usually Staph) infection of the nail fold \u2014 painful, red, swollen \u00b1 pus. Warm soaks; drain a collection; oral antibiotic if cellulitis/not settling.',
    contraindications:'A pus collection needs drainage. Chronic paronychia (months, multiple digits, wet work) is different \u2014 manage as irritant/candidal (avoid antibiotics; barrier + topical steroid \u00b1 antifungal). Consider herpetic whitlow (vesicles \u2014 do NOT incise).',
    duration:'Antibiotic 5 days if indicated',
    drugs:[
      { name:'Warm soaks several times daily; analgesia', dose:'\u2014', freq:'QDS', route:'Advice', days:'Until settles' },
      { name:'Incision/drainage if pus collection', dose:'\u2014', freq:'Once', route:'Procedure', days:'\u2014' },
      { name:'Flucloxacillin if cellulitis / not settling', dose:'500 mg', freq:'QDS', route:'PO', days:'5 days' },
      { name:'Clarithromycin if penicillin-allergic', dose:'500 mg', freq:'BD', route:'PO', days:'5 days' },
    ],
    altRegimens:[
      { label:'Chronic paronychia', drugs:'Avoid wet work / irritants; keep dry; topical steroid \u00b1 antifungal; not an antibiotic problem.' },
      { label:'Herpetic whitlow', drugs:'Grouped vesicles \u2192 oral aciclovir; do NOT incise.' },
    ],
    counselling:[
      'This is an infected nail fold \u2014 warm soaks several times a day help it settle and bring any pus to the surface.',
      'If there\u2019s a pocket of pus, releasing it is the quickest way to relieve the pain.',
      'Antibiotics are only needed if the redness is spreading or it isn\u2019t settling.',
      'Keep hands dry and avoid picking at the nails; if it keeps recurring with wet work, tell us \u2014 that\u2019s treated differently.',
    ],
    followUp:'Review if not settling or recurrent. Recurrent/chronic → manage as irritant/candidal (barrier, keep dry, topical steroid \u00b1 antifungal).',
    redFlags:['Spreading cellulitis, deep space infection (felon), or systemic upset → urgent.','Vesicles (herpetic whitlow) → antiviral, do not incise.'],
    emisText:`Acute paronychia:
- Warm soaks QDS + analgesia; incise/drain if pus collection.
- Flucloxacillin 500 mg QDS 5d (clarithromycin 500 mg BD if pen-allergic) if cellulitis/not settling.
- Chronic paronychia: keep dry, avoid irritants, topical steroid \u00b1 antifungal (not abx).
- Vesicles = herpetic whitlow \u2192 aciclovir; do NOT incise.`,
    sources:[{ label:'NICE CKS \u2014 Paronychia', url:'https://cks.nice.org.uk/topics/paronychia-acute/' }],
  },

  { id:'intertrigo', title:'Intertrigo', category:'Dermatology',
    eyebrow:'Keep dry · barrier · antifungal if candidal',
    indication:'Inflammation of skin folds (submammary, groin, abdominal, axillary) from friction, heat and moisture, often with secondary candidal or bacterial infection.',
    contraindications:'Avoid potent steroids long-term in flexures (atrophy). Treat secondary infection. Recurrent in skin folds → consider diabetes/obesity. Exclude flexural psoriasis, erythrasma, tinea if atypical.',
    duration:'Topical antifungal ~2\u20134 weeks if candidal',
    drugs:[
      { name:'Keep cool/dry: separate skin folds, absorbent material, weight loss, loose clothing', dose:'\u2014', freq:'\u2014', route:'Advice', days:'Ongoing (key)' },
      { name:'Barrier preparation (e.g. zinc-based)', dose:'Apply', freq:'OD\u2013BD', route:'Topical', days:'Ongoing' },
      { name:'Topical imidazole antifungal if candidal (\u00b1 mild hydrocortisone short course)', dose:'Apply', freq:'BD', route:'Topical', days:'2\u20134 weeks' },
    ],
    altRegimens:[
      { label:'Bacterial infection', drugs:'Topical/oral antibiotic if bacterial (e.g. flucloxacillin) features.' },
      { label:'Erythrasma (coral-red on Wood\u2019s lamp)', drugs:'Topical antibiotic/antifungal; oral macrolide if extensive.' },
      { label:'Recurrent', drugs:'Screen for diabetes; weight management; ongoing barrier/drying measures.' },
    ],
    counselling:[
      'This happens where skin rubs together and traps warmth and moisture \u2014 keeping the area cool and dry is the main treatment.',
      'Dry carefully after washing, use a barrier cream, wear loose breathable clothing, and lose weight if that\u2019s relevant.',
      'If there\u2019s a yeast infection in the fold, an antifungal cream for a few weeks clears it.',
      'If it keeps coming back, we\u2019ll check for diabetes and reinforce the drying measures.',
    ],
    followUp:'Review response; reinforce drying/barrier measures. Recurrent → diabetes screen, weight management. Atypical → reconsider psoriasis/tinea/erythrasma.',
    redFlags:['Spreading bacterial infection / systemic upset → treat/refer.','Recurrent or treatment-resistant → reconsider diagnosis, screen diabetes.'],
    emisText:`Intertrigo:
- KEY: keep folds cool/dry \u2014 separate skin, absorbent material, loose clothing, weight loss.
- Barrier prep; candidal \u2192 topical imidazole BD 2-4 wks (\u00b1 short mild hydrocortisone).
- Bacterial \u2192 antibiotic. Recurrent \u2192 screen diabetes.
- Atypical \u2192 consider flexural psoriasis/erythrasma/tinea.`,
    sources:[{ label:'NICE CKS \u2014 Candida (skin) / intertrigo', url:'https://cks.nice.org.uk/topics/candida-skin/' }],
  },

  { id:'pompholyx', title:'Pompholyx (dyshidrotic eczema)', category:'Dermatology',
    eyebrow:'Emollient + potent topical steroid · avoid irritants',
    indication:'Eczema variant with itchy deep-seated vesicles on palms, soles and sides of fingers. Manage as eczema: emollients, potent topical steroid for flares, avoid irritants/triggers.',
    contraindications:'Potent steroids are appropriate on palms/soles (thick skin) but for short bursts. Treat secondary infection. Severe/refractory → dermatology (consider patch testing, phototherapy, systemics).',
    duration:'Potent steroid short bursts',
    drugs:[
      { name:'Emollients (generous) + soap substitute; avoid irritants, manage sweating/stress', dose:'Apply', freq:'\u2265BD', route:'Topical', days:'Ongoing' },
      { name:'Potent topical corticosteroid for flares (palms/soles)', dose:'Apply thin', freq:'OD\u2013BD', route:'Topical', days:'Short burst' },
      { name:'Sedating antihistamine at night if itch disturbs sleep', dose:'Standard', freq:'ON', route:'PO', days:'Short term' },
    ],
    altRegimens:[
      { label:'Secondary infection', drugs:'Weeping/pustular \u2192 antibiotics (flucloxacillin).' },
      { label:'Refractory / severe', drugs:'Dermatology \u2014 patch testing, hand-eczema regimens, phototherapy, systemics.' },
    ],
    counselling:[
      'These small intensely itchy blisters on the hands/feet are a form of eczema; they tend to come and go.',
      'Use plenty of moisturiser and a soap substitute, and avoid irritants like detergents \u2014 wear gloves for wet work.',
      'The strong steroid cream is used in short bursts to settle a flare, even on the palms and soles.',
      'See us if the skin becomes weepy, crusted or more painful (possible infection) or if it isn\u2019t settling.',
    ],
    followUp:'Review flare control; reinforce emollients/irritant avoidance. Refer if severe, recurrent disabling, or refractory.',
    redFlags:['Secondary infection (weeping, pustules) → antibiotics.','Severe/refractory hand eczema affecting function → dermatology.'],
    emisText:`Pompholyx (dyshidrotic eczema):
- Manage as eczema: emollients generous + soap substitute; avoid irritants (gloves for wet work).
- Potent topical steroid short bursts (palms/soles); sedating antihistamine ON if itch.
- Secondary infection \u2192 flucloxacillin. Refractory \u2192 dermatology (patch test/phototherapy/systemics).`,
    sources:[{ label:'NICE CKS \u2014 Eczema (atopic)', url:'https://cks.nice.org.uk/topics/eczema-atopic/' }],
  },

  { id:'sunburn', title:'Sunburn', category:'Dermatology',
    eyebrow:'Cool · analgesia · prevention · burns care if severe',
    indication:'Acute UV skin injury \u2014 erythema, pain \u00b1 blistering. Supportive care; assess as a burn if extensive/blistering; emphasise prevention and skin-cancer risk reduction.',
    contraindications:'Extensive blistering, signs of heat illness/dehydration, or vulnerable groups (infants) → assess as burns/heat illness. Avoid topical local anaesthetics (sensitisation). Do not burst blisters.',
    duration:'Settles over days',
    drugs:[
      { name:'Cool the skin (cool showers/compresses), generous fluids, rest in shade', dose:'\u2014', freq:'\u2014', route:'Advice', days:'Until settles' },
      { name:'Simple analgesia \u2014 paracetamol \u00b1 ibuprofen', dose:'Standard', freq:'PRN', route:'PO', days:'Symptomatic' },
      { name:'Emollient / after-sun (e.g. aloe-based); leave blisters intact', dose:'Apply', freq:'PRN', route:'Topical', days:'Until heals' },
    ],
    altRegimens:[
      { label:'Severe/extensive blistering', drugs:'Manage as a burn; consider referral; watch for dehydration/heat illness.' },
      { label:'Prevention', drugs:'Broad-spectrum SPF 30+, reapply; cover up; avoid peak sun; never sunbeds.' },
    ],
    counselling:[
      'Cool the skin, drink plenty, and take simple painkillers \u2014 it usually settles over a few days.',
      'Leave any blisters intact and use a soothing moisturiser/after-sun; avoid numbing sprays.',
      'Get checked if the burn is extensive or blistering, or if you feel faint, sick or feverish (heat illness/dehydration).',
      'Sunburn raises skin-cancer risk \u2014 use high-factor sunscreen, cover up, avoid midday sun and never use sunbeds.',
    ],
    followUp:'Self-care; review if extensive blistering, signs of infection, or systemic features. Reinforce sun-safety and skin-cancer prevention.',
    redFlags:['Extensive blistering, high fever, confusion, faintness, or dehydration → assess as burn/heat illness.','Infants/young children with significant sunburn → assess.'],
    emisText:`Sunburn:
- Cool skin (cool showers/compresses), fluids, rest in shade; paracetamol \u00b1 ibuprofen; after-sun/emollient; leave blisters intact (avoid topical LA).
- Extensive blistering/heat illness/dehydration \u2192 assess as burn.
- Prevent: SPF 30+ broad-spectrum, cover up, avoid peak sun, no sunbeds (skin-cancer risk).`,
    sources:[{ label:'NICE CKS \u2014 Sunburn / Sunscreen and sun safety', url:'https://cks.nice.org.uk/topics/sunburn/' }],
  },

  { id:'perioral-dermatitis', title:'Perioral dermatitis', category:'Dermatology',
    eyebrow:'STOP topical steroids · zero therapy · topical/oral abx',
    indication:'Papulopustular eruption around the mouth (sparing the vermilion border), eyes or nose \u2014 often triggered/worsened by topical (or inhaled) corticosteroids. Stop steroids and treat with anti-inflammatory antibiotics.',
    contraindications:'Do NOT use topical corticosteroids (they worsen it / cause rebound). Stopping steroids may flare initially \u2014 warn the patient. Avoid heavy cosmetics/occlusive creams during treatment.',
    duration:'Topical weeks; oral course several weeks',
    drugs:[
      { name:'STOP all topical corticosteroids on the face; \u201czero therapy\u201d (stop cosmetics/occlusives)', dose:'\u2014', freq:'\u2014', route:'Advice', days:'Key step' },
      { name:'Topical: metronidazole or azelaic acid (mild)', dose:'Apply', freq:'OD\u2013BD', route:'Topical', days:'Several weeks' },
      { name:'Oral: lymecycline / doxycycline / oxytetracycline (moderate\u2013severe)', dose:'Standard', freq:'OD\u2013BD', route:'PO', days:'~6\u20138 weeks' },
    ],
    altRegimens:[
      { label:'Children / pregnancy (tetracyclines unsuitable)', drugs:'Topical therapy; oral erythromycin if systemic treatment needed.' },
      { label:'Steroid-induced flare on stopping', drugs:'Warn and reassure; it settles \u2014 do not restart steroids.' },
    ],
    counselling:[
      'This rash is often caused or worsened by steroid creams \u2014 the most important step is to stop using them on your face.',
      'When you stop the steroid it may flare for a week or two before improving \u2014 that\u2019s expected; please don\u2019t restart it.',
      'A non-steroid cream and, if needed, an antibiotic tablet course treats it \u2014 the tablets work over several weeks.',
      'Avoid heavy face creams and cosmetics while it settles.',
    ],
    followUp:'Review at ~4\u20138 weeks; warn re initial flare on steroid withdrawal. Refer if refractory or diagnostic doubt.',
    redFlags:['Diagnostic uncertainty or refractory to standard treatment → dermatology.'],
    emisText:`Perioral dermatitis:
- KEY: STOP topical (and review inhaled) corticosteroids on face; \u201czero therapy\u201d (stop cosmetics/occlusives). Warn re initial flare on stopping.
- Topical metronidazole or azelaic acid (mild); oral lymecycline/doxycycline ~6-8 wks (moderate-severe).
- Children/pregnancy: topical \u00b1 oral erythromycin (avoid tetracyclines).`,
    sources:[{ label:'NICE CKS \u2014 Perioral dermatitis', url:'https://cks.nice.org.uk/topics/rosacea-acne-rosacea/' }],
  }

  );
})();
