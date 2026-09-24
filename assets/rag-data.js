/* ============================================================
   Reasoning GP — RAG (traffic-light) prescribing dataset
   GMMMG-style worked example, grouped by system. The full
   GMMMG RAG list runs to many hundreds of items; this is the
   GP-relevant subset. Illustrative — verify locally.
   Consumed by tools/prescribing.html (Prescribing Hub).
   ============================================================ */
window.RGP_RAG = [
  // ===== Diabetes & endocrine =====
  { d:'Metformin', use:'Type 2 diabetes', grp:'Diabetes & endocrine', rag:'green', note:'First-line; GP initiation and review.' },
  { d:'Sulfonylureas (gliclazide, glipizide)', use:'Type 2 diabetes', grp:'Diabetes & endocrine', rag:'green', note:'GP initiation; hypo and driving advice.' },
  { d:'SGLT2 inhibitors (dapagliflozin, empagliflozin, canagliflozin)', use:'T2DM, HF, CKD', grp:'Diabetes & endocrine', rag:'green', note:'Green for licensed indications; give sick-day rules and DKA advice.' },
  { d:'DPP-4 inhibitors (sitagliptin, linagliptin)', use:'Type 2 diabetes', grp:'Diabetes & endocrine', rag:'green', note:'GP initiation.' },
  { d:'GLP-1 agonists (dulaglutide, semaglutide, liraglutide)', use:'T2DM (± obesity)', grp:'Diabetes & endocrine', rag:'amber', note:'Green for T2DM in many areas; amber/specialist for some (e.g. weight-management indications) — check local.' },
  { d:'Pioglitazone', use:'Type 2 diabetes', grp:'Diabetes & endocrine', rag:'green', note:'GP initiation; caution HF, bladder cancer, fracture risk.' },
  { d:'Insulin (all types)', use:'Type 1 & 2 diabetes', grp:'Diabetes & endocrine', rag:'green', note:'GP continuation; specialist-led for type 1 / pumps.' },
  { d:'Levothyroxine', use:'Hypothyroidism', grp:'Diabetes & endocrine', rag:'green', note:'GP initiation and TFT monitoring.' },
  { d:'Liothyronine (T3)', use:'Hypothyroidism', grp:'Diabetes & endocrine', rag:'grey', note:'Not routinely recommended; specialist endocrine support only.' },
  { d:'Carbimazole / propylthiouracil', use:'Hyperthyroidism', grp:'Diabetes & endocrine', rag:'amber', note:'Specialist initiation; shared-care FBC (agranulocytosis) and LFT advice.' },
  { d:'Hydrocortisone / fludrocortisone', use:'Adrenal replacement (Addison\u2019s)', grp:'Diabetes & endocrine', rag:'green', note:'GP continuation; sick-day rules and steroid card essential.' },
  { d:'Cabergoline / bromocriptine', use:'Hyperprolactinaemia', grp:'Diabetes & endocrine', rag:'amber', note:'Specialist initiation; shared-care prolactin/echo monitoring.' },
  { d:'Desmopressin', use:'Cranial diabetes insipidus / nocturia', grp:'Diabetes & endocrine', rag:'amber', note:'Specialist initiation; sodium monitoring.' },
  { d:'Somatropin (growth hormone)', use:'GH deficiency', grp:'Diabetes & endocrine', rag:'red', note:'Specialist / homecare only.' },
  { d:'Octreotide / lanreotide', use:'Acromegaly, NET', grp:'Diabetes & endocrine', rag:'red', note:'Specialist only.' },

  // ===== Cardiovascular =====
  { d:'Statins (atorvastatin, simvastatin, rosuvastatin)', use:'Lipid lowering / CVD', grp:'Cardiovascular', rag:'green', note:'GP initiation per QRISK / secondary prevention.' },
  { d:'ACE inhibitors / ARBs', use:'Hypertension, HF, CKD', grp:'Cardiovascular', rag:'green', note:'GP initiation with U&E monitoring.' },
  { d:'Calcium-channel blockers / thiazides', use:'Hypertension', grp:'Cardiovascular', rag:'green', note:'GP initiation per NICE.' },
  { d:'DOACs (apixaban, rivaroxaban, edoxaban, dabigatran)', use:'AF / VTE', grp:'Cardiovascular', rag:'green', note:'Green for stroke prevention in AF / VTE in most areas; check local for some indications.' },
  { d:'Warfarin', use:'Anticoagulation', grp:'Cardiovascular', rag:'green', note:'GP continuation with INR monitoring service.' },
  { d:'Spironolactone / eplerenone', use:'Heart failure, resistant HTN', grp:'Cardiovascular', rag:'green', note:'GP use with U&E monitoring; eplerenone amber in some areas.' },
  { d:'Ezetimibe', use:'Lipid lowering', grp:'Cardiovascular', rag:'green', note:'GP add-on where statin insufficient/intolerant.' },
  { d:'Bempedoic acid / inclisiran', use:'Lipid lowering', grp:'Cardiovascular', rag:'amber', note:'Specialist or local-pathway initiation; check APC.' },
  { d:'PCSK9 inhibitors (alirocumab, evolocumab)', use:'Familial / refractory hyperlipidaemia', grp:'Cardiovascular', rag:'red', note:'Lipid-clinic / specialist only.' },
  { d:'Amiodarone', use:'Arrhythmia', grp:'Cardiovascular', rag:'amber', note:'Specialist initiation; shared-care TFT/LFT monitoring.' },
  { d:'Ivabradine', use:'Heart failure / angina', grp:'Cardiovascular', rag:'amber', note:'Specialist initiation; shared-care HR monitoring.' },
  { d:'Sacubitril/valsartan (Entresto)', use:'Heart failure (HFrEF)', grp:'Cardiovascular', rag:'amber', note:'Specialist initiation in HF; GP continuation under shared care (red in some areas).' },
  { d:'Dapagliflozin / empagliflozin (HF/CKD)', use:'Heart failure, CKD', grp:'Cardiovascular', rag:'green', note:'GP can prescribe for licensed HF/CKD indications.' },
  { d:'Sildenafil / bosentan / ambrisentan (pulmonary HTN)', use:'Pulmonary hypertension', grp:'Cardiovascular', rag:'red', note:'Designated PH centre only.' },
  { d:'Nicorandil', use:'Angina', grp:'Cardiovascular', rag:'green', note:'GP use; ulcer risk awareness.' },

  // ===== Respiratory =====
  { d:'Inhaled therapies (ICS / LABA / LAMA, combinations)', use:'Asthma / COPD', grp:'Respiratory', rag:'green', note:'GP initiation per NICE / GOLD; inhaler technique.' },
  { d:'Montelukast', use:'Asthma', grp:'Respiratory', rag:'green', note:'GP use; neuropsychiatric warning.' },
  { d:'Theophylline / aminophylline', use:'Asthma / COPD', grp:'Respiratory', rag:'green', note:'GP use with level monitoring; brand-specific.' },
  { d:'Roflumilast', use:'Severe COPD', grp:'Respiratory', rag:'amber', note:'Specialist initiation; shared-care weight/mood monitoring.' },
  { d:'Azithromycin (prophylactic)', use:'COPD / bronchiectasis prophylaxis', grp:'Respiratory', rag:'amber', note:'Specialist initiation; ECG/LFT and resistance monitoring.' },
  { d:'Biologics (mepolizumab, benralizumab, omalizumab)', use:'Severe asthma', grp:'Respiratory', rag:'red', note:'Severe-asthma service only.' },
  { d:'Nintedanib / pirfenidone', use:'Pulmonary fibrosis', grp:'Respiratory', rag:'red', note:'ILD specialist only.' },

  // ===== Gastrointestinal =====
  { d:'PPIs (omeprazole, lansoprazole)', use:'Reflux / ulcer / gastroprotection', grp:'Gastrointestinal', rag:'green', note:'GP use; review long-term need.' },
  { d:'Mesalazine / other 5-ASA', use:'Ulcerative colitis', grp:'Gastrointestinal', rag:'green', note:'GP continuation common; renal monitoring; brand-specific.' },
  { d:'Azathioprine / mercaptopurine', use:'IBD, immunosuppression', grp:'Gastrointestinal', rag:'amber', note:'Specialist initiation after TPMT; shared-care FBC/LFT monitoring.' },
  { d:'Budesonide (modified-release / MMX)', use:'Crohn\u2019s / microscopic colitis', grp:'Gastrointestinal', rag:'amber', note:'Specialist initiation; shared care.' },
  { d:'Biologics (infliximab, adalimumab, vedolizumab, ustekinumab)', use:'IBD', grp:'Gastrointestinal', rag:'red', note:'IBD specialist / homecare only.' },
  { d:'Rifaximin', use:'Hepatic encephalopathy', grp:'Gastrointestinal', rag:'amber', note:'Specialist initiation; shared care.' },
  { d:'Pancreatin (Creon)', use:'Pancreatic insufficiency', grp:'Gastrointestinal', rag:'green', note:'GP continuation.' },

  // ===== Rheumatology & immunosuppression =====
  { d:'Methotrexate', use:'RA, psoriasis, IBD', grp:'Rheumatology & immunosuppression', rag:'amber', note:'Specialist initiation; shared-care FBC/LFT/U&E (weekly\u2192monthly). ONCE-WEEKLY dosing; folic acid.' },
  { d:'Leflunomide', use:'RA / psoriatic arthritis', grp:'Rheumatology & immunosuppression', rag:'amber', note:'Shared care; BP, weight, FBC, LFT monitoring.' },
  { d:'Sulfasalazine', use:'RA, IBD', grp:'Rheumatology & immunosuppression', rag:'amber', note:'Specialist initiation; shared-care FBC/LFT monitoring (green in some areas).' },
  { d:'Hydroxychloroquine', use:'RA, SLE', grp:'Rheumatology & immunosuppression', rag:'amber', note:'Specialist initiation; annual retinopathy screening.' },
  { d:'Ciclosporin / tacrolimus (systemic)', use:'Immunosuppression', grp:'Rheumatology & immunosuppression', rag:'amber', note:'Specialist initiation; shared-care levels, renal, BP monitoring.' },
  { d:'Mycophenolate mofetil', use:'Immunosuppression', grp:'Rheumatology & immunosuppression', rag:'amber', note:'Specialist initiation; shared-care FBC; pregnancy-prevention.' },
  { d:'Penicillamine', use:'RA', grp:'Rheumatology & immunosuppression', rag:'amber', note:'Specialist initiation; shared-care FBC/urinalysis.' },
  { d:'Colchicine / allopurinol / febuxostat', use:'Gout', grp:'Rheumatology & immunosuppression', rag:'green', note:'GP initiation; titrate allopurinol to urate target.' },
  { d:'Biologics & JAK inhibitors (adalimumab, etanercept, tofacitinib, baricitinib)', use:'RA, psoriatic/axial SpA', grp:'Rheumatology & immunosuppression', rag:'red', note:'Rheumatology / homecare only.' },
  { d:'Tocilizumab / rituximab', use:'RA, vasculitis', grp:'Rheumatology & immunosuppression', rag:'red', note:'Specialist only.' },

  // ===== Dermatology =====
  { d:'Topical corticosteroids / emollients', use:'Eczema, psoriasis', grp:'Dermatology', rag:'green', note:'GP use.' },
  { d:'Topical calcineurin inhibitors (tacrolimus, pimecrolimus)', use:'Atopic eczema', grp:'Dermatology', rag:'amber', note:'Specialist initiation in some areas; GP continuation.' },
  { d:'Acitretin', use:'Severe psoriasis', grp:'Dermatology', rag:'amber', note:'Dermatology initiation; teratogenic — shared-care LFT/lipids, pregnancy-prevention.' },
  { d:'Isotretinoin (oral)', use:'Severe acne', grp:'Dermatology', rag:'red', note:'Dermatology only; Pregnancy Prevention Programme; mood monitoring.' },
  { d:'Methotrexate / ciclosporin (dermatology)', use:'Severe psoriasis/eczema', grp:'Dermatology', rag:'amber', note:'Dermatology initiation; shared-care monitoring.' },
  { d:'Dapsone', use:'Dermatitis herpetiformis etc.', grp:'Dermatology', rag:'amber', note:'Specialist initiation; shared-care FBC (haemolysis).' },
  { d:'Biologics (adalimumab, secukinumab, dupilumab)', use:'Psoriasis / severe eczema', grp:'Dermatology', rag:'red', note:'Dermatology / homecare only.' },

  // ===== Neurology =====
  { d:'Antiepileptics (lamotrigine, levetiracetam, sodium valproate, carbamazepine)', use:'Epilepsy', grp:'Neurology', rag:'green', note:'GP continuation; specialist-led initiation. Valproate: pregnancy-prevention / MHRA restrictions.' },
  { d:'Gabapentin / pregabalin', use:'Neuropathic pain, epilepsy', grp:'Neurology', rag:'green', note:'GP use; Schedule 3 controlled drugs — misuse awareness.' },
  { d:'Levodopa (co-careldopa / co-beneldopa)', use:'Parkinson\u2019s disease', grp:'Neurology', rag:'green', note:'GP continuation; specialist-led titration.' },
  { d:'Dopamine agonists (ropinirole, pramipexole, rotigotine)', use:'Parkinson\u2019s / RLS', grp:'Neurology', rag:'amber', note:'Specialist initiation; impulse-control disorder monitoring.' },
  { d:'Apomorphine', use:'Advanced Parkinson\u2019s', grp:'Neurology', rag:'red', note:'Specialist only.' },
  { d:'Riluzole', use:'Motor neurone disease', grp:'Neurology', rag:'red', note:'Specialist only; LFT monitoring.' },
  { d:'Disease-modifying therapies (fingolimod, dimethyl fumarate, natalizumab, ocrelizumab)', use:'Multiple sclerosis', grp:'Neurology', rag:'red', note:'Neurology / MS service only.' },
  { d:'Fampridine', use:'MS walking impairment', grp:'Neurology', rag:'red', note:'Specialist only.' },
  { d:'CGRP antagonists (erenumab, fremanezumab) / triptans', use:'Migraine', grp:'Neurology', rag:'amber', note:'Triptans green (GP); CGRP mAbs amber/specialist headache service.' },
  { d:'Botulinum toxin', use:'Dystonia, chronic migraine', grp:'Neurology', rag:'red', note:'Specialist administration only.' },

  // ===== Mental health =====
  { d:'SSRIs / SNRIs (sertraline, citalopram, venlafaxine)', use:'Depression / anxiety', grp:'Mental health', rag:'green', note:'GP initiation and titration.' },
  { d:'Mirtazapine / tricyclics', use:'Depression', grp:'Mental health', rag:'green', note:'GP use.' },
  { d:'Lithium', use:'Bipolar / resistant depression', grp:'Mental health', rag:'amber', note:'Specialist initiation; shared-care levels, U&E, TFT, calcium; brand-specific.' },
  { d:'Most antipsychotics (olanzapine, risperidone, quetiapine, aripiprazole)', use:'Psychosis / bipolar', grp:'Mental health', rag:'amber', note:'Specialist initiation; shared-care metabolic monitoring; GP continuation.' },
  { d:'Clozapine', use:'Treatment-resistant schizophrenia', grp:'Mental health', rag:'red', note:'Hospital only; mandatory FBC monitoring service registration.' },
  { d:'Long-acting antipsychotic injections (depots)', use:'Schizophrenia', grp:'Mental health', rag:'red', note:'Mental-health service administration.' },
  { d:'ADHD medicines (methylphenidate, lisdexamfetamine, dexamfetamine, atomoxetine, guanfacine)', use:'ADHD', grp:'Mental health', rag:'amber', note:'Specialist diagnosis/initiation; shared-care height/weight/BP/HR; controlled drugs.' },
  { d:'Melatonin', use:'Sleep (children / specialist)', grp:'Mental health', rag:'amber', note:'Specialist initiation in children; shared care.' },
  { d:'Modafinil', use:'Narcolepsy', grp:'Mental health', rag:'amber', note:'Specialist initiation; shared care.' },

  // ===== Substance misuse =====
  { d:'Methadone / buprenorphine (OST)', use:'Opioid dependence', grp:'Substance misuse', rag:'amber', note:'Drug-service initiation; shared-care / instalment (FP10MDA) prescribing.' },
  { d:'Naltrexone', use:'Opioid / alcohol dependence', grp:'Substance misuse', rag:'amber', note:'Specialist service initiation.' },
  { d:'Acamprosate / disulfiram', use:'Alcohol dependence', grp:'Substance misuse', rag:'amber', note:'Specialist initiation; shared-care LFT monitoring (disulfiram).' },
  { d:'Nalmefene', use:'Alcohol reduction', grp:'Substance misuse', rag:'amber', note:'Specialist initiation with psychosocial support.' },

  // ===== Bone health =====
  { d:'Oral bisphosphonates (alendronate, risedronate)', use:'Osteoporosis', grp:'Bone health', rag:'green', note:'GP initiation; dental / dosing advice.' },
  { d:'IV zoledronate', use:'Osteoporosis', grp:'Bone health', rag:'amber', note:'Specialist / service administration; renal and calcium checks.' },
  { d:'Denosumab (Prolia)', use:'Osteoporosis', grp:'Bone health', rag:'amber', note:'Shared care; calcium before each dose; do NOT delay/stop without specialist advice (rebound fracture).' },
  { d:'Teriparatide / romosozumab', use:'Severe osteoporosis', grp:'Bone health', rag:'red', note:'Specialist / metabolic-bone service only.' },
  { d:'Cinacalcet', use:'Hyperparathyroidism', grp:'Bone health', rag:'amber', note:'Renal/endocrine initiation; shared-care calcium monitoring.' },

  // ===== Urology & men's health =====
  { d:'Tamsulosin / finasteride / dutasteride', use:'BPH', grp:"Urology & men's health", rag:'green', note:'GP use.' },
  { d:'PDE5 inhibitors (sildenafil, tadalafil)', use:'Erectile dysfunction', grp:"Urology & men's health", rag:'green', note:'GP use within Schedule 2 / local criteria; once-daily tadalafil discouraged on cost.' },
  { d:'Testosterone replacement', use:'Hypogonadism', grp:"Urology & men's health", rag:'amber', note:'Specialist initiation; shared-care PSA, haematocrit, testosterone monitoring.' },
  { d:'Solifenacin / mirabegron', use:'Overactive bladder', grp:"Urology & men's health", rag:'green', note:'GP use; mirabegron BP monitoring.' },
  { d:'GnRH analogues (goserelin, leuprorelin, triptorelin)', use:'Prostate cancer, endometriosis', grp:"Urology & men's health", rag:'amber', note:'Specialist initiation; GP continuation under shared care.' },

  // ===== Women's health & HRT =====
  { d:'HRT (estradiol, combined patches/gels, vaginal estrogens)', use:'Menopause', grp:"Women's health & HRT", rag:'green', note:'GP initiation.' },
  { d:'Combined / progestogen-only contraception', use:'Contraception', grp:"Women's health & HRT", rag:'green', note:'GP / sexual-health provision.' },
  { d:'Tranexamic acid', use:'Heavy menstrual bleeding', grp:"Women's health & HRT", rag:'green', note:'GP use.' },
  { d:'Ulipristal (Esmya)', use:'Uterine fibroids', grp:"Women's health & HRT", rag:'red', note:'Specialist only; LFT monitoring restrictions.' },
  { d:'Clomifene', use:'Anovulatory infertility', grp:"Women's health & HRT", rag:'amber', note:'Specialist initiation.' },

  // ===== Analgesia & pain =====
  { d:'Paracetamol', use:'Mild–moderate pain / fever', grp:'Analgesia & pain', rag:'green', note:'GP use; not routinely for self-limiting minor conditions (self-care).' },
  { d:'NSAIDs (ibuprofen, naproxen)', use:'Pain / inflammation', grp:'Analgesia & pain', rag:'green', note:'GP use; lowest dose/shortest duration, GI/renal/CV caution, consider PPI cover.' },
  { d:'Codeine / dihydrocodeine', use:'Moderate pain', grp:'Analgesia & pain', rag:'green', note:'GP use; CYP2D6 / dependence awareness; avoid in <12s and breastfeeding.' },
  { d:'Co-codamol / co-dydramol', use:'Moderate pain', grp:'Analgesia & pain', rag:'green', note:'GP use; counts paracetamol toward max dose.' },
  { d:'Tramadol', use:'Moderate–severe pain', grp:'Analgesia & pain', rag:'green', note:'GP use; Schedule 3 CD; serotonergic/seizure/dependence risk.' },
  { d:'Morphine / oxycodone (oral)', use:'Severe / cancer pain', grp:'Analgesia & pain', rag:'green', note:'GP can prescribe (Schedule 2 CD); follow opioid-safety and review; specialist advice for escalating non-cancer pain.' },
  { d:'Buprenorphine / fentanyl transdermal patches', use:'Chronic severe pain', grp:'Analgesia & pain', rag:'green', note:'GP continuation for stable pain; not for acute/opioid-naïve; specialist-led initiation often advised.' },
  { d:'Gabapentin / pregabalin', use:'Neuropathic pain', grp:'Analgesia & pain', rag:'green', note:'GP use; Schedule 3 CD — misuse/diversion awareness; taper on stopping.' },
  { d:'Amitriptyline / duloxetine (neuropathic)', use:'Neuropathic / chronic pain', grp:'Analgesia & pain', rag:'green', note:'GP use per NICE NG215.' },
  { d:'Capsaicin 0.075% cream', use:'Neuropathic / OA pain', grp:'Analgesia & pain', rag:'green', note:'GP use; specialist advice for high-strength 8% patch (red).' },
  { d:'Lidocaine 5% medicated plasters', use:'Post-herpetic neuralgia', grp:'Analgesia & pain', rag:'amber', note:'Only licensed PHN; specialist/restricted — not for general neuropathic or MSK pain.' },
  { d:'Tapentadol', use:'Severe pain', grp:'Analgesia & pain', rag:'amber', note:'Often restricted/specialist initiation; check local APC.' },
  { d:'Ketamine (oral, chronic pain)', use:'Refractory pain', grp:'Analgesia & pain', rag:'red', note:'Pain-clinic specialist only.' },
  { d:'Nabilone / nabiximols (Sativex)', use:'Pain / MS spasticity', grp:'Analgesia & pain', rag:'red', note:'Specialist only.' },

  // ===== Infections & antimicrobials =====
  { d:'First-line antibiotics (amoxicillin, nitrofurantoin, doxycycline, flucloxacillin)', use:'Common infections', grp:'Infections & antimicrobials', rag:'green', note:'GP use per local antimicrobial guidance / UKHSA.' },
  { d:'Antivirals (aciclovir, valaciclovir)', use:'Herpes / shingles', grp:'Infections & antimicrobials', rag:'green', note:'GP use; start early for shingles/severe HSV.' },
  { d:'Antifungals (oral fluconazole, terbinafine)', use:'Candidiasis / tinea', grp:'Infections & antimicrobials', rag:'green', note:'GP use; terbinafine LFT check for nail courses.' },
  { d:'"Last-line" / restricted antibiotics (co-amoxiclav, ciprofloxacin, clarithromycin)', use:'Specific infections', grp:'Infections & antimicrobials', rag:'green', note:'GP use but stewardship-restricted; quinolone MHRA cautions.' },
  { d:'Long-term antibiotic prophylaxis', use:'Recurrent UTI / bronchiectasis', grp:'Infections & antimicrobials', rag:'amber', note:'Often specialist-initiated; shared-care review and resistance monitoring.' },
  { d:'Antiretrovirals (HIV) / PrEP', use:'HIV treatment & prevention', grp:'Infections & antimicrobials', rag:'red', note:'GUM / HIV specialist service only.' },
  { d:'Hepatitis C direct-acting antivirals', use:'Chronic hepatitis C', grp:'Infections & antimicrobials', rag:'red', note:'Hepatology / ODN only.' },
  { d:'Antituberculosis therapy (rifampicin, isoniazid, etc.)', use:'Tuberculosis', grp:'Infections & antimicrobials', rag:'red', note:'TB service only.' },

  // ===== Eye, ENT & oral =====
  { d:'Chloramphenicol eye drops/ointment', use:'Bacterial conjunctivitis', grp:'Eye, ENT & oral', rag:'green', note:'OTC / GP — self-care for simple conjunctivitis.' },
  { d:'Ocular lubricants', use:'Dry eye', grp:'Eye, ENT & oral', rag:'green', note:'Largely self-care; prescribe in chronic/Sjögren’s.' },
  { d:'Latanoprost / timolol eye drops', use:'Glaucoma / ocular hypertension', grp:'Eye, ENT & oral', rag:'green', note:'GP continuation; ophthalmology-led management.' },
  { d:'Intravitreal anti-VEGF (ranibizumab, aflibercept)', use:'Wet AMD, DMO', grp:'Eye, ENT & oral', rag:'red', note:'Ophthalmology only.' },
  { d:'Ciclosporin eye drops (Ikervis)', use:'Severe keratitis / dry eye', grp:'Eye, ENT & oral', rag:'amber', note:'Ophthalmology initiation; shared care.' },

  // ===== Palliative & end-of-life =====
  { d:'Anticipatory ("just in case") medicines', use:'End-of-life symptom control', grp:'Palliative & end-of-life', rag:'green', note:'GP prescribing — morphine, midazolam, levomepromazine, hyoscine/glycopyrronium for the community syringe driver.' },
  { d:'Methadone (analgesia, palliative)', use:'Complex cancer pain', grp:'Palliative & end-of-life', rag:'amber', note:'Palliative-specialist initiation; shared care.' },
  { d:'Ketamine / specialist syringe-driver combinations', use:'Refractory symptoms', grp:'Palliative & end-of-life', rag:'amber', note:'Palliative-specialist advice / initiation.' },

  // ===== Nutrition & borderline substances =====
  { d:'Oral nutritional supplements (Ensure, Fortisip)', use:'Malnutrition (MUST-guided)', grp:'Nutrition & borderline substances', rag:'green', note:'GP per local pathway/ACBS; food-first first, review need.' },
  { d:'Gluten-free foods', use:'Coeliac disease', grp:'Nutrition & borderline substances', rag:'green', note:'Local-policy dependent (many ICBs restrict to bread/flour or have stopped).' },
  { d:'Specialist infant formulas (EHF, amino-acid)', use:'CMPA', grp:'Nutrition & borderline substances', rag:'green', note:'GP per pathway; amino-acid formula often dietitian/specialist-recommended.' },
  { d:'Vitamin D / calcium', use:'Deficiency / osteoporosis adjunct', grp:'Nutrition & borderline substances', rag:'green', note:'Prescribe for treatment of deficiency; not as a general supplement (self-care).' },

  // ===== Cancer & haematology =====
  { d:'Cytotoxic chemotherapy', use:'Cancer', grp:'Cancer & haematology', rag:'red', note:'Oncology / haematology only.' },
  { d:'Tamoxifen', use:'Breast cancer', grp:'Cancer & haematology', rag:'amber', note:'Specialist initiation; GP continuation under shared care.' },
  { d:'Aromatase inhibitors (anastrozole, letrozole)', use:'Breast cancer', grp:'Cancer & haematology', rag:'amber', note:'Specialist initiation; shared-care bone-health monitoring.' },
  { d:'Anti-androgens (bicalutamide, enzalutamide, abiraterone)', use:'Prostate cancer', grp:'Cancer & haematology', rag:'red', note:'Oncology only (bicalutamide amber in some areas).' },
  { d:'Erythropoiesis-stimulating agents (epoetin, darbepoetin)', use:'CKD / chemo anaemia', grp:'Cancer & haematology', rag:'amber', note:'Renal / oncology initiation; shared-care Hb/iron monitoring.' },
  { d:'Hydroxycarbamide', use:'Myeloproliferative disorders, SCD', grp:'Cancer & haematology', rag:'amber', note:'Haematology initiation; shared-care FBC monitoring.' },

  // ===== Low clinical value / not recommended =====
  { d:'Lidocaine 5% medicated plasters', use:'Neuropathic pain', grp:'Low clinical value', rag:'grey', note:'Only licensed post-herpetic neuralgia; otherwise not routinely prescribed.' },
  { d:'Glucosamine / chondroitin', use:'Osteoarthritis', grp:'Low clinical value', rag:'grey', note:'Low clinical value; do not prescribe.' },
  { d:'Omega-3 / fish oils', use:'Hypertriglyceridaemia', grp:'Low clinical value', rag:'grey', note:'Low clinical value; do not routinely prescribe.' },
  { d:'Homeopathy / herbal remedies', use:'Various', grp:'Low clinical value', rag:'grey', note:'Not prescribed on the NHS.' },
  { d:'Co-proxamol', use:'Analgesia', grp:'Low clinical value', rag:'grey', note:'Withdrawn for safety; not for routine prescribing.' },
  { d:'Rubefacients / capsaicin (low-conc.)', use:'Musculoskeletal pain', grp:'Low clinical value', rag:'grey', note:'Limited evidence; self-care item.' },
  { d:'Probiotics, vitamins & minerals', use:'Supplementation', grp:'Low clinical value', rag:'grey', note:'Limited evidence; not as supplements / "pick-me-up" (exceptions: diagnosed deficiency).' },
];;
