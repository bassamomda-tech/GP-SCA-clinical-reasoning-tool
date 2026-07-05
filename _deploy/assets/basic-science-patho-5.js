/* Reasoning GP — Basic Science: PATHOPHYSIOLOGY (set 5: Haematology + Infection/Immunology)
   Same schema as basic-science-patho.js. Educational reasoning aid. */
window.RGP_BASICSCIENCE = (window.RGP_BASICSCIENCE || []).concat([

/* ---------------- HAEMATOLOGY ---------------- */
{ id:'patho-acd', domain:'Pathophysiology', system:'Haematology', icon:'🩸',
  title:'Anaemia of chronic disease', blurb:'Why chronic inflammation locks iron away from red-cell production.',
  mechanism:[
    'Chronic inflammation raises **hepcidin**, which traps iron in macrophages and blocks gut absorption — iron is present but unavailable for erythropoiesis.',
    'Inflammatory cytokines also blunt erythropoietin response and red-cell survival.',
  ],
  cascade:[
    { step:'Inflammation → raised hepcidin', detail:'Iron sequestered, not absorbed' },
    { step:'Functional iron restriction', detail:'Normocytic (sometimes microcytic) anaemia' },
    { step:'Blunted EPO response', detail:'Mild–moderate, stable anaemia' },
  ],
  implications:[
    { clue:'Ferritin is normal/high (it\u2019s an acute-phase protein)', why:'Distinguishes from true iron deficiency where ferritin is low.' },
    { clue:'Treat the underlying disease', why:'The anaemia tracks the inflammation.' },
    { clue:'Iron alone rarely helps', why:'Iron is available but locked away — not truly deficient.' },
  ],
  pearls:[
    'Coexisting true iron deficiency can occur — check transferrin saturation.',
    'Common in CKD, RA, IBD, chronic infection, malignancy.',
  ],
  note:'Inflammation hoards iron via hepcidin, so the body is iron-replete yet can\u2019t use it — which is why ferritin stays normal and iron tablets disappoint.',
  links:{} },

{ id:'patho-thrombocytopenia', domain:'Pathophysiology', system:'Haematology', icon:'🩸',
  title:'Thrombocytopenia & ITP', blurb:'Why low platelets cause bruising and how to reason about the cause.',
  mechanism:[
    'Low platelets arise from **reduced production** (marrow disease, drugs), **increased destruction** (immune — ITP, DIC) or **sequestration** (splenomegaly).',
    'In **ITP**, autoantibodies tag platelets for splenic destruction.',
  ],
  cascade:[
    { step:'Production / destruction / sequestration', detail:'Falling platelet count' },
    { step:'Mucocutaneous bleeding', detail:'Petechiae, bruising, epistaxis' },
    { step:'Severe thrombocytopenia', detail:'Risk of serious haemorrhage' },
  ],
  implications:[
    { clue:'Check a film and exclude pseudo-thrombocytopenia', why:'EDTA clumping causes spurious low counts — repeat in citrate.' },
    { clue:'Petechiae + fever + unwell → urgent', why:'Could be leukaemia, DIC, TTP or meningococcaemia.' },
    { clue:'Review drugs', why:'Many drugs (heparin, quinine, valproate) cause thrombocytopenia.' },
  ],
  pearls:[
    'ITP is often a diagnosis of exclusion; children often post-viral and self-limiting.',
    'TTP (microangiopathy + neurology + renal) is an emergency — don\u2019t transfuse platelets.',
  ],
  note:'Always ask whether platelets are under-made, destroyed, or pooled in a big spleen — the answer points straight at the cause and the urgency.',
  links:{} },

{ id:'patho-polycythaemia', domain:'Pathophysiology', system:'Haematology', icon:'🩸',
  title:'Polycythaemia', blurb:'Why too many red cells thicken blood and raise clot risk.',
  mechanism:[
    '**Primary** (polycythaemia vera) is a clonal marrow disorder (JAK2 mutation) overproducing red cells. **Secondary** is an appropriate EPO-driven response to hypoxia (COPD, smoking, altitude) or inappropriate EPO (tumours).',
    'Raised haematocrit increases blood viscosity and thrombosis risk.',
  ],
  cascade:[
    { step:'Clonal or EPO-driven overproduction', detail:'Raised red-cell mass' },
    { step:'Hyperviscosity', detail:'Headache, itch, plethora, thrombosis' },
    { step:'Complications', detail:'Arterial/venous clots, (PV) marrow progression' },
  ],
  implications:[
    { clue:'JAK2 testing + low EPO suggest PV', why:'Distinguishes primary from secondary.' },
    { clue:'Treat hypoxia / stop smoking in secondary', why:'Removes the EPO drive.' },
    { clue:'Venesection + aspirin reduce clot risk in PV', why:'Lower the haematocrit and platelet aggregation.' },
  ],
  pearls:[
    'Aquagenic pruritus (itch after a hot bath) is a PV clue.',
    'Exclude dehydration (relative polycythaemia) first.',
  ],
  note:'More red cells means thicker, clot-prone blood — and the key fork is whether the marrow is faulty (PV) or just responding to low oxygen.',
  links:{} },

{ id:'patho-leukaemia', domain:'Pathophysiology', system:'Haematology', icon:'🎗️',
  title:'Leukaemia', blurb:'Why malignant marrow crowds out normal blood production.',
  mechanism:[
    'Clonal proliferation of malignant **white-cell precursors** fills the marrow, crowding out normal red cells, platelets and functional white cells — causing pancytopenia despite a high white count.',
    'Acute leukaemias progress fast; chronic ones evolve slowly.',
  ],
  cascade:[
    { step:'Clonal blast proliferation', detail:'Marrow infiltration' },
    { step:'Marrow failure', detail:'Anaemia, bleeding (low platelets), infection (poor neutrophil function)' },
    { step:'Tissue infiltration', detail:'Lymphadenopathy, hepatosplenomegaly, bone pain' },
  ],
  implications:[
    { clue:'Unexplained bruising/petechiae + infection + fatigue', why:'Pancytopenia from marrow takeover — urgent FBC and film.' },
    { clue:'Children: petechiae, hepatosplenomegaly, lymphadenopathy → very urgent FBC', why:'NICE NG12 leukaemia pathway.' },
    { clue:'High WCC but failing function', why:'Malignant cells don\u2019t fight infection.' },
  ],
  pearls:[
    'Blasts on the film are a red flag.',
    'Same-day specialist discussion for suspected acute leukaemia.',
  ],
  note:'Leukaemic cells fill the marrow factory, so normal production collapses — anaemia, bleeding and infection together are the clue, even with a high white count.',
  links:{} },

{ id:'patho-lymphoma', domain:'Pathophysiology', system:'Haematology', icon:'🎗️',
  title:'Lymphoma', blurb:'Why malignant lymphocytes cause nodes and B symptoms.',
  mechanism:[
    'Malignant clonal proliferation of **lymphocytes** in lymph nodes and lymphoid tissue causes painless lymphadenopathy. Hodgkin and non-Hodgkin subtypes differ in cell type and spread.',
    'Cytokine release produces systemic \u201cB symptoms\u201d — fever, drenching night sweats, weight loss.',
  ],
  cascade:[
    { step:'Clonal lymphocyte proliferation', detail:'Lymph-node enlargement' },
    { step:'Painless lymphadenopathy', detail:'Rubbery, persistent nodes' },
    { step:'B symptoms', detail:'Fever, night sweats, >10% weight loss' },
  ],
  implications:[
    { clue:'Persistent unexplained lymphadenopathy needs investigation', why:'Especially with B symptoms — refer for assessment/biopsy.' },
    { clue:'Excision biopsy, not FNA', why:'Architecture is needed to subtype.' },
    { clue:'Alcohol-induced node pain is a Hodgkin clue', why:'Rare but characteristic.' },
  ],
  pearls:[
    'Reactive nodes are usually <2 cm, tender, and settle in weeks.',
    'Raised LDH reflects tumour burden.',
  ],
  note:'Lymphoma is lymphocytes growing where they shouldn\u2019t — painless persistent nodes plus fever, sweats and weight loss is the pattern that must not be dismissed.',
  links:{} },

{ id:'patho-myeloma', domain:'Pathophysiology', system:'Haematology', icon:'🦴',
  title:'Multiple myeloma', blurb:'Why malignant plasma cells cause CRAB features.',
  mechanism:[
    'Clonal **plasma cells** proliferate in the marrow, secreting a monoclonal paraprotein. They activate osteoclasts (lytic bone lesions, hypercalcaemia), crowd marrow (anaemia) and the paraprotein damages the kidney.',
    'The result is the **CRAB** tetrad: Calcium high, Renal impairment, Anaemia, Bone lesions.',
  ],
  cascade:[
    { step:'Clonal plasma cells + paraprotein', detail:'Marrow infiltration' },
    { step:'Bone + marrow effects', detail:'Lytic lesions, fractures, anaemia, hypercalcaemia' },
    { step:'Renal injury', detail:'Light-chain (cast) nephropathy' },
  ],
  implications:[
    { clue:'Older patient with bone pain + anaemia + raised calcium + AKI', why:'Screen with serum/urine electrophoresis and free light chains.' },
    { clue:'Unexplained back pain + raised ESR/protein gap', why:'A classic, often-missed presentation.' },
    { clue:'Hypercalcaemia and renal failure need urgent management', why:'Both threaten organs acutely.' },
  ],
  pearls:[
    'Raised total protein with normal albumin → check a paraprotein.',
    'Beware pathological/vertebral fractures.',
  ],
  note:'Malignant plasma cells eat bone, choke marrow and clog the kidney — remember CRAB and the diagnosis surfaces from routine bloods.',
  links:{} },

{ id:'patho-sickle', domain:'Pathophysiology', system:'Haematology', icon:'🩸',
  title:'Sickle cell disease', blurb:'Why a single mutation causes painful vaso-occlusive crises.',
  mechanism:[
    'A point mutation produces **HbS**, which polymerises when deoxygenated, deforming red cells into rigid sickles. These occlude small vessels (painful crises, organ infarction) and haemolyse early.',
    'Triggers (hypoxia, dehydration, cold, infection, acidosis) precipitate sickling.',
  ],
  cascade:[
    { step:'HbS polymerisation', detail:'Red cells sickle when deoxygenated' },
    { step:'Vaso-occlusion + haemolysis', detail:'Painful crises, anaemia, jaundice' },
    { step:'Chronic organ damage', detail:'Spleen, kidney, lungs, stroke, retina' },
  ],
  implications:[
    { clue:'Crises need analgesia, hydration, oxygen, warmth', why:'Reverse and remove the sickling triggers.' },
    { clue:'Functional hyposplenism raises infection risk', why:'Vaccination + prophylactic penicillin essential.' },
    { clue:'Acute chest syndrome / stroke are emergencies', why:'Major causes of mortality.' },
  ],
  pearls:[
    'Fever in sickle cell is an emergency (sepsis risk).',
    'Hydroxycarbamide raises HbF and reduces crises.',
  ],
  note:'One amino-acid change makes haemoglobin clump without oxygen — the rigid sickled cells jam vessels and break down early, explaining both the pain and the anaemia.',
  links:{} },

{ id:'patho-haemochromatosis', domain:'Pathophysiology', system:'Haematology', icon:'🩸',
  title:'Haemochromatosis', blurb:'Why iron overload silently damages organs.',
  mechanism:[
    'Hereditary (HFE) haemochromatosis causes **excess intestinal iron absorption**; iron deposits in liver, pancreas, heart, joints and pituitary, generating tissue damage via oxidative stress.',
    'Symptoms are insidious — fatigue, arthralgia, then organ failure.',
  ],
  cascade:[
    { step:'Excess iron absorption', detail:'Progressive iron loading' },
    { step:'Tissue deposition', detail:'Liver (cirrhosis), pancreas (diabetes), heart, joints, skin' },
    { step:'Organ damage', detail:'\u201cBronze diabetes\u201d, cardiomyopathy, hypogonadism' },
  ],
  implications:[
    { clue:'Raised ferritin + transferrin saturation', why:'High transferrin saturation distinguishes overload from inflammatory ferritin rise.' },
    { clue:'Venesection is the treatment', why:'Removing blood removes iron — effective and cheap.' },
    { clue:'Screen relatives', why:'Autosomal recessive; early treatment prevents organ damage.' },
  ],
  pearls:[
    'Consider in fatigue + arthralgia + abnormal LFTs.',
    'Early treatment normalises life expectancy.',
  ],
  note:'The body has no route to excrete excess iron, so absorbed surplus deposits in organs — which is why simply taking blood off (venesection) is curative.',
  links:{} },

/* ---------------- INFECTION & IMMUNOLOGY ---------------- */
{ id:'patho-sepsis', domain:'Pathophysiology', system:'Infection & Immunology', icon:'🌡️',
  title:'Sepsis', blurb:'Why a dysregulated immune response to infection injures the host.',
  mechanism:[
    'Sepsis is a **dysregulated host response** to infection: cytokine release causes vasodilatation, capillary leak and microvascular clotting — dropping perfusion to organs.',
    'Hypoperfusion + maldistribution of blood flow cause organ dysfunction (the lactate rises, the BP falls).',
  ],
  cascade:[
    { step:'Infection + dysregulated immune response', detail:'Cytokine storm' },
    { step:'Vasodilatation + capillary leak', detail:'Hypotension, raised lactate, poor perfusion' },
    { step:'Organ dysfunction', detail:'AKI, confusion, coagulopathy, shock' },
  ],
  implications:[
    { clue:'Sepsis Six saves lives', why:'Oxygen, cultures, IV antibiotics, fluids, lactate, urine output — fast.' },
    { clue:'Look for organ dysfunction, not just fever', why:'Confusion, low BP, low urine output, high lactate define severity.' },
    { clue:'Source control matters', why:'Drain the abscess / remove the line — antibiotics alone may not suffice.' },
  ],
  pearls:[
    'The frail/elderly may be hypothermic, not febrile.',
    'Early antibiotics within the first hour improve survival.',
  ],
  note:'Sepsis is the immune response, not the microbe, injuring the host — which is why it\u2019s a perfusion emergency treated by the clock, not just an infection to be cultured.',
  links:{} },

{ id:'patho-cellulitis', domain:'Pathophysiology', system:'Infection & Immunology', icon:'🦵',
  title:'Cellulitis', blurb:'Why a skin-barrier breach lets bacteria spread through soft tissue.',
  mechanism:[
    'A breach in the skin barrier (cut, tinea, ulcer, oedema) lets **streptococci/staphylococci** invade the dermis and subcutaneous tissue — spreading inflammation.',
    'The inflammatory response produces the warm, red, tender, spreading area.',
  ],
  cascade:[
    { step:'Skin-barrier breach', detail:'Bacterial entry' },
    { step:'Soft-tissue infection', detail:'Spreading erythema, warmth, pain, fever' },
    { step:'Systemic spread', detail:'Sepsis; rarely necrotising fasciitis' },
  ],
  implications:[
    { clue:'Mark the border and review', why:'Spread beyond the line means treatment failure.' },
    { clue:'Bilateral \u201ccellulitis\u201d is usually venous eczema/lipodermatosclerosis', why:'True cellulitis is almost always unilateral.' },
    { clue:'Severe pain out of proportion → exclude necrotising fasciitis', why:'Surgical emergency.' },
  ],
  pearls:[
    'Treat the portal of entry (e.g. athlete\u2019s foot).',
    'Elevate the limb; manage oedema to prevent recurrence.',
  ],
  note:'Cellulitis needs a way in — find the breach — and remember that the common bilateral \u201ccellulitis\u201d is usually venous skin disease, not infection.',
  links:{} },

{ id:'patho-glandular-fever', domain:'Pathophysiology', system:'Infection & Immunology', icon:'🦠',
  title:'Infectious mononucleosis', blurb:'Why EBV causes prolonged sore throat, nodes and fatigue.',
  mechanism:[
    '**EBV** infects B-lymphocytes; the vigorous T-cell response produces the atypical lymphocytes and the systemic features — fever, pharyngitis, lymphadenopathy and splenomegaly.',
    'The immune response, not the virus alone, drives much of the illness and its duration.',
  ],
  cascade:[
    { step:'EBV infection of B-cells', detail:'Reactive T-cell proliferation' },
    { step:'Clinical triad', detail:'Fever, exudative pharyngitis, lymphadenopathy' },
    { step:'Splenomegaly + fatigue', detail:'Prolonged recovery' },
  ],
  implications:[
    { clue:'Avoid amoxicillin/ampicillin', why:'Causes a florid maculopapular rash in EBV.' },
    { clue:'Advise against contact sport ~4 weeks', why:'Splenic rupture risk while enlarged.' },
    { clue:'Monospot/EBV serology confirms', why:'Atypical lymphocytes on film support it.' },
  ],
  pearls:[
    'Fatigue can persist for weeks — reassure.',
    'Consider in teenagers/young adults with prolonged tonsillitis.',
  ],
  note:'The misery of glandular fever is largely the immune reaction to EBV — hence the prolonged fatigue, the big spleen to protect, and the ampicillin rash to avoid.',
  links:{} },

{ id:'patho-hiv', domain:'Pathophysiology', system:'Infection & Immunology', icon:'🦠',
  title:'HIV', blurb:'Why progressive CD4 loss leads to opportunistic infection.',
  mechanism:[
    'HIV infects and depletes **CD4 T-helper cells**, progressively crippling cell-mediated immunity. As CD4 counts fall, opportunistic infections and certain cancers emerge (AIDS).',
    'A seroconversion illness occurs early; a long asymptomatic phase follows before immunodeficiency.',
  ],
  cascade:[
    { step:'CD4 T-cell infection/depletion', detail:'Declining cell-mediated immunity' },
    { step:'Asymptomatic phase', detail:'Years; ongoing viral replication' },
    { step:'Immunodeficiency (AIDS)', detail:'Opportunistic infections, malignancies' },
  ],
  implications:[
    { clue:'Test widely and early', why:'Seroconversion mimics glandular fever; late diagnosis worsens outcomes.' },
    { clue:'Antiretrovirals restore immunity', why:'Suppress viral load, raise CD4 — normal life expectancy.' },
    { clue:'U=U and PrEP', why:'Undetectable = untransmittable; PrEP prevents acquisition.' },
  ],
  pearls:[
    'Offer testing in any indicator condition or unexplained illness.',
    'Opportunistic infections cue the CD4 count.',
  ],
  note:'HIV slowly disarms the immune commander (CD4 cells) — which is why early treatment, before the count falls, preserves a normal life.',
  links:{} },

{ id:'patho-tb', domain:'Pathophysiology', system:'Infection & Immunology', icon:'🫁',
  title:'Tuberculosis', blurb:'Why TB can lie latent for years then reactivate.',
  mechanism:[
    '*Mycobacterium tuberculosis* is contained by the immune system in **granulomas** (latent TB). If immunity wanes (age, HIV, immunosuppression), it reactivates into active disease.',
    'Active pulmonary TB causes chronic cough, haemoptysis, weight loss, night sweats and is infectious.',
  ],
  cascade:[
    { step:'Inhalation + granuloma containment', detail:'Latent TB — asymptomatic, non-infectious' },
    { step:'Reactivation', detail:'When immunity falls' },
    { step:'Active TB', detail:'Cough, haemoptysis, weight loss, night sweats; can disseminate' },
  ],
  implications:[
    { clue:'Prolonged cough + weight loss + night sweats + risk factors', why:'Especially in those from high-incidence areas or immunosuppressed.' },
    { clue:'Treatment is months of combination therapy', why:'Prevents resistance; adherence is critical (DOT).' },
    { clue:'Notifiable + contact tracing', why:'Public-health control.' },
  ],
  pearls:[
    'Latent TB is treated before immunosuppression (e.g. biologics).',
    'Extrapulmonary TB (lymph nodes, spine, meninges) occurs.',
  ],
  note:'TB\u2019s trick is dormancy — walled off in granulomas for years, it waits for immunity to drop, which is why screening before immunosuppression matters.',
  links:{} },

{ id:'patho-anaphylaxis', domain:'Pathophysiology', system:'Infection & Immunology', icon:'⚠️',
  title:'Anaphylaxis & allergy', blurb:'Why IgE-driven mast-cell release causes airway, breathing and circulation collapse.',
  mechanism:[
    'On re-exposure to an allergen, **IgE on mast cells** triggers massive histamine and mediator release — vasodilatation, capillary leak, bronchospasm and mucosal oedema.',
    'The result is the airway/breathing/circulation compromise that defines anaphylaxis.',
  ],
  cascade:[
    { step:'Allergen + IgE-mast cell activation', detail:'Histamine/mediator release' },
    { step:'Systemic effects', detail:'Angio-oedema, wheeze, hypotension, urticaria' },
    { step:'Shock/airway compromise', detail:'Life-threatening within minutes' },
  ],
  implications:[
    { clue:'Adrenaline IM is the only life-saving drug', why:'Reverses vasodilatation, bronchospasm and mediator release — give it first.' },
    { clue:'Antihistamines/steroids are adjuncts', why:'They do not treat the acute airway/circulatory threat.' },
    { clue:'Biphasic reactions occur', why:'Observe after treatment; provide an auto-injector + plan.' },
  ],
  pearls:[
    'A→B→C compromise after exposure = anaphylaxis — don\u2019t wait for a rash.',
    'Mast-cell tryptase confirms retrospectively.',
  ],
  note:'Anaphylaxis is mast cells dumping their contents at once — adrenaline reverses every part of it, which is why it goes in first and fast.',
  links:{} },

{ id:'patho-shingles', domain:'Pathophysiology', system:'Infection & Immunology', icon:'🦠',
  title:'Shingles (herpes zoster)', blurb:'Why dormant chickenpox virus reactivates in one dermatome.',
  mechanism:[
    'Varicella-zoster virus lies dormant in a **dorsal root ganglion** after chickenpox. Reactivation (age, stress, immunosuppression) travels down the sensory nerve, erupting in that single **dermatome**.',
    'Nerve inflammation causes pain that can outlast the rash (post-herpetic neuralgia).',
  ],
  cascade:[
    { step:'VZV reactivation in ganglion', detail:'Travels along sensory nerve' },
    { step:'Dermatomal rash', detail:'Unilateral, painful vesicles not crossing the midline' },
    { step:'Post-herpetic neuralgia', detail:'Persistent neuropathic pain in some' },
  ],
  implications:[
    { clue:'Antivirals within 72 h help', why:'Reduce severity and (somewhat) PHN risk.' },
    { clue:'Ophthalmic involvement needs urgent eye review', why:'Hutchinson\u2019s sign (nose tip) flags eye risk.' },
    { clue:'It\u2019s contagious as chickenpox to non-immune contacts', why:'Vesicle fluid contains VZV.' },
  ],
  pearls:[
    'A unilateral dermatomal vesicular rash that stops at the midline is classic.',
    'Shingles vaccine reduces incidence in older adults.',
  ],
  note:'Shingles is yesterday\u2019s chickenpox waking up in one nerve — the single-dermatome, midline-respecting rash is the giveaway, and early antivirals limit the nerve pain.',
  links:{} },

{ id:'patho-influenza', domain:'Pathophysiology', system:'Infection & Immunology', icon:'🦠',
  title:'Influenza & viral URTI', blurb:'Why flu hits systemically and how it differs from a cold.',
  mechanism:[
    'Influenza virus infects respiratory epithelium; the vigorous **innate immune/interferon response** causes the abrupt systemic illness — high fever, myalgia, prostration — beyond local cold symptoms.',
    'Antigenic drift/shift explains seasonal recurrence and the need for annual vaccination.',
  ],
  cascade:[
    { step:'Respiratory epithelial infection', detail:'Innate immune activation' },
    { step:'Systemic illness', detail:'Abrupt fever, myalgia, headache, dry cough' },
    { step:'Complications', detail:'Secondary bacterial pneumonia, decompensation of comorbidity' },
  ],
  implications:[
    { clue:'Flu is systemic and abrupt; a cold is local and gradual', why:'Helps triage and counsel.' },
    { clue:'Antivirals help selected at-risk patients early', why:'Within 48 h, for those at complication risk.' },
    { clue:'Vaccinate the vulnerable annually', why:'Drift means last year\u2019s immunity wanes.' },
  ],
  pearls:[
    'Worsening after initial improvement suggests secondary bacterial infection.',
    'Most healthy adults need only supportive care.',
  ],
  note:'Flu\u2019s whole-body misery is the immune/interferon response — which is why it floors you abruptly while a cold just blocks your nose.',
  links:{} },

]);
