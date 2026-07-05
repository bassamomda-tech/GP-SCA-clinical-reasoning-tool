/* Reasoning GP — Basic Science: PHARMACOLOGY (set 5: Antimicrobials, Urology/Repro,
   Rheumatology/Immunosuppression, Allergy/Emergency). Same schema as basic-science-pharma.js.
   Educational reasoning aid — verify against BNF / NICE / local antimicrobial guidance. */
window.RGP_BASICSCIENCE = (window.RGP_BASICSCIENCE || []).concat([

/* ==================== ANTIMICROBIALS ==================== */
{
  id:'pharma-penicillins', domain:'Pharmacology', class:'Antimicrobials', icon:'💊',
  title:'Penicillins', blurb:'Beta-lactams that wreck the bacterial cell wall — the workhorse of GP prescribing.',
  examples:['Amoxicillin','Phenoxymethylpenicillin (pen V)','Flucloxacillin','Co-amoxiclav'],
  moa:[
    'Bind **penicillin-binding proteins** and inhibit **cross-linking of peptidoglycan** in the bacterial cell wall → osmotic lysis of dividing bacteria (bactericidal).',
  ],
  effects:[
    { effect:'Kills susceptible bacteria', mechanism:'Cell-wall synthesis fails → lysis.' },
    { effect:'Flucloxacillin = anti-staphylococcal', mechanism:'β-lactamase-stable side chain (skin/soft tissue).' },
  ],
  adverse:[
    { ae:'Allergy (rash → anaphylaxis)', mechanism:'IgE/immune response; true penicillin allergy contraindicates the whole class + caution with cephalosporins.' },
    { ae:'Diarrhoea, C. difficile (esp. co-amoxiclav)', mechanism:'Disruption of gut flora.' },
    { ae:'Cholestatic jaundice (co-amoxiclav, flucloxacillin)', mechanism:'Idiosyncratic hepatic reaction, may be delayed.' },
  ],
  practical:[
    { point:'Document the “allergy” accurately', detail:'GI upset is not allergy; mislabelling drives broader-spectrum use and resistance.' },
    { point:'Amoxicillin rash in glandular fever', detail:'Near-universal maculopapular rash with EBV — not true allergy.' },
  ],
  pearls:['A clear penicillin-allergy history must be recorded — but distinguish true allergy from simple GI intolerance to avoid unnecessary broad-spectrum prescribing.'],
  note:'Cell-wall disruption is rapidly bactericidal; the prescribing story is allergy labelling, C. difficile risk and β-lactamase coverage.',
  links:{ patho:'patho-cellulitis', pathoLabel:'Cellulitis' },
},
{
  id:'pharma-macrolides', domain:'Pharmacology', class:'Antimicrobials', icon:'💊',
  title:'Macrolides', blurb:'Protein-synthesis inhibitors and the usual penicillin-allergy alternative.',
  examples:['Clarithromycin','Erythromycin','Azithromycin'],
  moa:[
    'Bind the **50S ribosomal subunit** → block bacterial protein synthesis (bacteriostatic). Cover atypicals and many respiratory/skin pathogens.',
  ],
  effects:[
    { effect:'Respiratory & soft-tissue cover in penicillin allergy', mechanism:'Broad Gram-positive + atypical activity.' },
  ],
  adverse:[
    { ae:'QT prolongation', mechanism:'Avoid stacking with other QT drugs; risk of torsades.' },
    { ae:'CYP3A4 inhibition (clari/erythro)', mechanism:'Raises statins (myopathy), warfarin, DOACs, some calcium-channel blockers.' },
    { ae:'GI upset', mechanism:'Erythromycin is a motilin agonist.' },
  ],
  practical:[
    { point:'Hold the statin during clarithromycin', detail:'Especially simvastatin/atorvastatin — myopathy/rhabdomyolysis risk.' },
    { point:'Check the QT-drug list', detail:'Antipsychotics, ondansetron, other QT prolongers.' },
  ],
  pearls:['Clarithromycin + simvastatin is a classic dangerous interaction — pause the statin while on the macrolide.'],
  note:'Ribosomal inhibition gives useful atypical cover, but CYP3A4 inhibition and QT prolongation dominate the interaction risk.',
  links:{ patho:'patho-copd', pathoLabel:'COPD' },
},
{
  id:'pharma-cephalosporins', domain:'Pharmacology', class:'Antimicrobials', icon:'💊',
  title:'Cephalosporins', blurb:'Beta-lactams reserved in primary care — broad but C. difficile-prone.',
  examples:['Cefalexin','Cefuroxime','Ceftriaxone (hospital)'],
  moa:[
    'Like penicillins, inhibit **cell-wall peptidoglycan synthesis** via penicillin-binding proteins → bactericidal; broader Gram-negative cover at higher generations.',
  ],
  effects:[
    { effect:'Broad-spectrum bactericidal cover', mechanism:'Cell-wall disruption.' },
  ],
  adverse:[
    { ae:'C. difficile colitis', mechanism:'One of the highest-risk classes — restrict use.' },
    { ae:'Cross-reactivity in penicillin allergy', mechanism:'Small but real — avoid if severe penicillin allergy.' },
  ],
  practical:[
    { point:'Not a routine first-line in GP', detail:'Reserved per local antimicrobial guidance to limit C. diff and resistance.' },
    { point:'Caution if severe penicillin allergy', detail:'Avoid with previous anaphylaxis to penicillin.' },
  ],
  pearls:['Cephalosporins (with clindamycin, co-amoxiclav and quinolones) are the classic “4C” C. difficile-driving antibiotics.'],
  note:'Same cell-wall mechanism as penicillins with broader cover — but high C. difficile risk keeps them off the GP first line.',
  links:{ patho:'patho-uti', pathoLabel:'UTI' },
},
{
  id:'pharma-quinolones', domain:'Pharmacology', class:'Antimicrobials', icon:'⚠️',
  title:'Fluoroquinolones', blurb:'Powerful but restricted — serious MHRA-flagged adverse effects.',
  examples:['Ciprofloxacin','Ofloxacin','Levofloxacin'],
  moa:[
    'Inhibit **DNA gyrase and topoisomerase IV** → block bacterial DNA replication (bactericidal); good Gram-negative and atypical cover.',
  ],
  effects:[
    { effect:'Broad Gram-negative cover', mechanism:'DNA replication failure.' },
  ],
  adverse:[
    { ae:'Tendonitis / tendon rupture', mechanism:'Especially Achilles, elderly, on steroids — MHRA warning.' },
    { ae:'Aortic aneurysm/dissection, QT prolongation, neuropathy', mechanism:'Connective-tissue and cardiac/neuro effects — disabling, potentially irreversible.' },
    { ae:'Lowers seizure threshold; C. difficile', mechanism:'CNS effect; flora disruption.' },
  ],
  practical:[
    { point:'Reserve per MHRA restrictions', detail:'Only when other antibiotics are inappropriate; stop at first sign of tendon/neuro effects.' },
    { point:'Reduces seizure threshold', detail:'Caution in epilepsy; avoid with NSAIDs in that context.' },
  ],
  pearls:['MHRA: stop a fluoroquinolone at the first sign of tendon pain — rupture and disabling, potentially permanent effects can occur.'],
  note:'Highly effective DNA-replication inhibitors, but tendon, aortic, neurological and CNS toxicity restrict them to when nothing safer works.',
  links:{ patho:'patho-uti', pathoLabel:'UTI' },
},
{
  id:'pharma-nitrofurantoin', domain:'Pharmacology', class:'Antimicrobials', icon:'💊',
  title:'Nitrofurantoin', blurb:'First-line lower-UTI agent that only works in the urine.',
  examples:['Nitrofurantoin (immediate / MR)'],
  moa:[
    'Concentrated in **urine**; reduced by bacterial enzymes to reactive intermediates that damage bacterial DNA/ribosomes → bactericidal in the bladder.',
  ],
  effects:[
    { effect:'Treats uncomplicated lower UTI', mechanism:'High urinary concentration kills common uropathogens.' },
  ],
  adverse:[
    { ae:'Ineffective if eGFR <45', mechanism:'Inadequate urinary concentration — and accumulates → toxicity.' },
    { ae:'Pulmonary fibrosis / hepatotoxicity (long-term)', mechanism:'Chronic use toxicity.' },
    { ae:'Neonatal haemolysis at term', mechanism:'Avoid at term / G6PD deficiency.' },
  ],
  practical:[
    { point:'Check renal function', detail:'Avoid if eGFR <45 (some allow ≥30 short-course with caution).' },
    { point:'No use for pyelonephritis', detail:'Doesn’t reach therapeutic tissue/blood levels — bladder only.' },
  ],
  pearls:['Nitrofurantoin works only in the urinary tract — useless for pyelonephritis or any systemic infection, and unreliable in renal impairment.'],
  note:'Its urine-only concentration makes it ideal for cystitis and useless for tissue infection — and dependent on adequate renal function.',
  links:{ patho:'patho-uti', pathoLabel:'UTI', case:'cases/uti-women.html', caseLabel:'UTI in women' },
},
{
  id:'pharma-trimethoprim', domain:'Pharmacology', class:'Antimicrobials', icon:'💊',
  title:'Trimethoprim', blurb:'Folate-pathway inhibitor for UTI — watch potassium and pregnancy.',
  examples:['Trimethoprim','Co-trimoxazole (+ sulfamethoxazole)'],
  moa:[
    'Inhibits **dihydrofolate reductase** → blocks bacterial folate/DNA synthesis (bacteriostatic).',
  ],
  effects:[
    { effect:'Alternative for lower UTI', mechanism:'Folate-synthesis inhibition.' },
  ],
  adverse:[
    { ae:'Hyperkalaemia', mechanism:'Blocks renal ENaC (amiloride-like) — risky with ACEi/ARB/spironolactone.' },
    { ae:'Teratogenic in 1st trimester', mechanism:'Folate antagonist → neural-tube defects; avoid in early pregnancy.' },
    { ae:'Raises creatinine / interacts with methotrexate', mechanism:'Additive folate antagonism — avoid together.' },
  ],
  practical:[
    { point:'Avoid with methotrexate', detail:'Additive antifolate → marrow suppression.' },
    { point:'Caution with ACEi/ARB/K-sparing', detail:'Additive hyperkalaemia, especially in elderly/CKD.' },
  ],
  pearls:['Trimethoprim + methotrexate (or + ACE inhibitor) is a dangerous combination — antifolate marrow toxicity and hyperkalaemia.'],
  note:'Folate-pathway blockade treats UTI but explains the teratogenicity, hyperkalaemia and methotrexate interaction.',
  links:{ patho:'patho-uti', pathoLabel:'UTI' },
},
{
  id:'pharma-tetracyclines', domain:'Pharmacology', class:'Antimicrobials', icon:'💊',
  title:'Tetracyclines', blurb:'Doxycycline/lymecycline — acne, atypical chest infection and more.',
  examples:['Doxycycline','Lymecycline (acne)','Oxytetracycline'],
  moa:[
    'Bind the **30S ribosomal subunit** → inhibit protein synthesis (bacteriostatic); broad cover including atypicals/intracellular organisms.',
  ],
  effects:[
    { effect:'Acne, atypical pneumonia, chlamydia, COPD exacerbation', mechanism:'Broad + anti-inflammatory in acne.' },
  ],
  adverse:[
    { ae:'Photosensitivity', mechanism:'Counsel on sun protection.' },
    { ae:'Tooth staining / avoid in pregnancy & <12 y', mechanism:'Chelates calcium in developing bone/teeth.' },
    { ae:'Oesophagitis', mechanism:'Take upright with water, not at bedtime.' },
  ],
  practical:[
    { point:'Separate from antacids/iron/calcium', detail:'Divalent cations chelate and block absorption.' },
    { point:'Avoid in pregnancy and young children', detail:'Dental/skeletal effects.' },
  ],
  pearls:['Tetracyclines are contraindicated in pregnancy and children under 12 because they bind calcium and stain developing teeth/bones.'],
  note:'Ribosomal protein-synthesis block gives broad/atypical cover; calcium chelation drives the dosing rules and contraindications.',
  links:{ patho:'patho-copd', pathoLabel:'COPD' },
},
{
  id:'pharma-metronidazole', domain:'Pharmacology', class:'Antimicrobials', icon:'💊',
  title:'Metronidazole', blurb:'Anaerobe and protozoa killer with one golden rule — no alcohol.',
  examples:['Metronidazole (oral/IV/topical/PV)'],
  moa:[
    'Reduced inside **anaerobic** organisms to reactive nitroso radicals that fragment microbial DNA → bactericidal against anaerobes and protozoa.',
  ],
  effects:[
    { effect:'Anaerobic/dental infection, BV, C. diff, abscess, giardia', mechanism:'Anaerobe/protozoa-selective DNA damage.' },
  ],
  adverse:[
    { ae:'Disulfiram-like reaction with alcohol', mechanism:'Flushing, vomiting, tachycardia — avoid alcohol during + 48 h after.' },
    { ae:'Metallic taste, peripheral neuropathy (prolonged)', mechanism:'Neurotoxic with long courses.' },
    { ae:'Raises warfarin (INR)', mechanism:'Inhibits warfarin metabolism.' },
  ],
  practical:[
    { point:'Warn: absolutely no alcohol', detail:'Including during the course and for 48 hours after.' },
    { point:'Monitor INR on warfarin', detail:'Potentiates anticoagulation.' },
  ],
  pearls:['Always warn patients on metronidazole to avoid alcohol — the disulfiram-like reaction is unpleasant and well known.'],
  note:'Selective activation in anaerobes makes it a targeted DNA poison; the alcohol and warfarin interactions are the practical headlines.',
  links:{ patho:'patho-cellulitis', pathoLabel:'Anaerobic/soft-tissue infection' },
},
{
  id:'pharma-antivirals', domain:'Pharmacology', class:'Antimicrobials', icon:'🦠',
  title:'Antivirals (aciclovir)', blurb:'Selective inhibition of herpes-family viral replication.',
  examples:['Aciclovir, valaciclovir (HSV/VZV)','Oseltamivir (influenza)'],
  moa:[
    'Aciclovir is activated by **viral thymidine kinase** then inhibits **viral DNA polymerase** → chain termination. Selectivity comes from activation only inside infected cells.',
  ],
  effects:[
    { effect:'Shingles, cold sores, genital herpes, chickenpox in at-risk', mechanism:'Halts viral DNA replication if started early.' },
  ],
  adverse:[
    { ae:'Crystal nephropathy / AKI (esp. IV, dehydration)', mechanism:'Drug precipitates in tubules — keep hydrated.' },
    { ae:'Neurotoxicity in renal impairment', mechanism:'Accumulation — dose-reduce by eGFR.' },
  ],
  practical:[
    { point:'Start shingles antiviral within 72 h', detail:'Greatest benefit early; consider in ophthalmic/older/immunocompromised.' },
    { point:'Maintain hydration; dose by renal function', detail:'Reduce AKI and neurotoxicity risk.' },
  ],
  pearls:['Antivirals for shingles are most effective when started within 72 hours of the rash appearing.'],
  note:'Viral-enzyme activation gives selectivity; the safety issues are renal precipitation and accumulation in CKD.',
  links:{ patho:'patho-shingles', pathoLabel:'Shingles' },
},
{
  id:'pharma-oral-antifungals', domain:'Pharmacology', class:'Antimicrobials', icon:'🍄',
  title:'Oral antifungals', blurb:'Terbinafine and azoles for nail, skin and systemic fungal infection.',
  examples:['Terbinafine (nail/skin)','Fluconazole, itraconazole (azoles)'],
  moa:[
    'Terbinafine inhibits **squalene epoxidase**; azoles inhibit **lanosterol 14α-demethylase (CYP)** → both deplete **ergosterol**, destabilising the fungal membrane.',
  ],
  effects:[
    { effect:'Onychomycosis, tinea, candidiasis', mechanism:'Ergosterol depletion.' },
  ],
  adverse:[
    { ae:'Hepatotoxicity', mechanism:'Check LFTs before/while on terbinafine and azoles for prolonged courses.' },
    { ae:'Azoles = potent CYP inhibitors', mechanism:'Raise statins, warfarin, DOACs; QT prolongation.' },
  ],
  practical:[
    { point:'Confirm fungal nail before long courses', detail:'Send clippings — terbinafine is months of treatment.' },
    { point:'Mind azole interactions', detail:'Fluconazole raises warfarin/statin levels.' },
  ],
  pearls:['Confirm the diagnosis (nail clippings) before committing to months of terbinafine for a “fungal” nail.'],
  note:'All target ergosterol; terbinafine’s issue is hepatotoxicity, azoles’ is potent CYP-mediated interactions.',
  links:{ patho:'patho-cellulitis', pathoLabel:'Skin infection' },
},

/* ==================== UROLOGY / SEXUAL / REPRODUCTIVE ==================== */
{
  id:'pharma-oab-antimuscarinics', domain:'Pharmacology', class:'Urology & Reproductive', icon:'🚻',
  title:'Overactive-bladder drugs', blurb:'Calm an overactive detrusor — antimuscarinics or a β3-agonist.',
  examples:['Oxybutynin, solifenacin, tolterodine (antimuscarinic)','Mirabegron (β3-agonist)'],
  moa:[
    'Antimuscarinics block **M3 receptors** on the detrusor → less involuntary contraction. Mirabegron agonises **β3 receptors** → detrusor relaxation (fewer antimuscarinic effects).',
  ],
  effects:[
    { effect:'Reduced urgency, frequency, urge incontinence', mechanism:'Dampened detrusor overactivity.' },
  ],
  adverse:[
    { ae:'Antimuscarinic load: dry mouth, constipation, blurred vision, confusion', mechanism:'M-blockade — avoid oxybutynin in frail elderly (falls/cognition).' },
    { ae:'Mirabegron: hypertension', mechanism:'β3 (and some β1) effect — check BP.' },
  ],
  practical:[
    { point:'Avoid oxybutynin in frail elderly', detail:'High anticholinergic burden → cognitive decline/falls; prefer mirabegron.' },
    { point:'Mind total anticholinergic burden', detail:'Adds to TCAs, sedating antihistamines, etc.' },
  ],
  pearls:['Oxybutynin adds heavily to anticholinergic burden in older people — mirabegron is often the safer choice.'],
  note:'Two routes to a calmer bladder; the choice turns on anticholinergic burden in the elderly versus mirabegron’s BP effect.',
  links:{ patho:'patho-bph', pathoLabel:'Lower urinary tract symptoms' },
},
{
  id:'pharma-5ari', domain:'Pharmacology', class:'Urology & Reproductive', icon:'🚹',
  title:'5α-reductase inhibitors', blurb:'Finasteride/dutasteride shrink the prostate over months.',
  examples:['Finasteride','Dutasteride'],
  moa:[
    'Block **5α-reductase** → less conversion of testosterone to **dihydrotestosterone (DHT)** → gradual prostate shrinkage.',
  ],
  effects:[
    { effect:'Shrinks prostate, improves flow, reduces retention/surgery risk', mechanism:'Lower DHT over 6–12 months.' },
  ],
  adverse:[
    { ae:'Sexual dysfunction (libido, ED, ejaculatory)', mechanism:'Reduced DHT.' },
    { ae:'Halves PSA', mechanism:'Double the measured PSA when screening for cancer.' },
    { ae:'Teratogenic — pregnant women must not handle crushed tablets', mechanism:'Disrupts fetal male genital development.' },
  ],
  practical:[
    { point:'Counsel: works over months', detail:'Best for larger prostates; often combined with an alpha-blocker.' },
    { point:'Adjust PSA interpretation', detail:'Roughly double the result after 6 months on treatment.' },
  ],
  pearls:['5α-reductase inhibitors roughly halve PSA — double the value when assessing for prostate cancer.'],
  note:'Lowering DHT slowly shrinks the prostate; the practical catches are the PSA halving and teratogenic handling risk.',
  links:{ patho:'patho-bph', pathoLabel:'Benign prostatic hyperplasia' },
},
{
  id:'pharma-pde5', domain:'Pharmacology', class:'Urology & Reproductive', icon:'🚹',
  title:'PDE5 inhibitors', blurb:'Sildenafil/tadalafil for erectile dysfunction — never with nitrates.',
  examples:['Sildenafil','Tadalafil'],
  moa:[
    'Inhibit **phosphodiesterase-5** → ↑ cGMP in the corpus cavernosum → smooth-muscle relaxation and erection with sexual stimulation.',
  ],
  effects:[
    { effect:'Improves erectile function', mechanism:'Sustained cGMP-mediated vasodilation.' },
  ],
  adverse:[
    { ae:'Profound hypotension with nitrates/nicorandil', mechanism:'Both raise cGMP/cAMP vasodilation — ABSOLUTE contraindication.' },
    { ae:'Headache, flushing, visual disturbance, priapism', mechanism:'Systemic vasodilation; prolonged erection is an emergency.' },
  ],
  practical:[
    { point:'Never co-prescribe with nitrates', detail:'Including recreational “poppers” — catastrophic hypotension.' },
    { point:'ED can be a cardiovascular warning', detail:'Assess CVD risk — endothelial dysfunction often precedes cardiac events.' },
  ],
  pearls:['PDE5 inhibitors plus nitrates can cause fatal hypotension — an absolute contraindication; and new ED warrants cardiovascular risk assessment.'],
  note:'Boosting cGMP relaxes cavernosal muscle; the same vasodilation makes nitrate co-use lethal, and ED itself flags vascular risk.',
  links:{ patho:'patho-bph', pathoLabel:'Men’s health' },
},
{
  id:'pharma-cocp', domain:'Pharmacology', class:'Urology & Reproductive', icon:'💊',
  title:'Combined hormonal contraception', blurb:'Oestrogen + progestogen — highly effective, with a VTE/migraine caveat.',
  examples:['Combined oral pill','Patch, vaginal ring'],
  moa:[
    'Oestrogen + progestogen suppress **FSH/LH** → inhibit ovulation; progestogen thickens cervical mucus and thins endometrium.',
  ],
  effects:[
    { effect:'Contraception + cycle control, less acne/menorrhagia', mechanism:'Ovulation suppression and endometrial effects.' },
  ],
  adverse:[
    { ae:'Venous thromboembolism', mechanism:'Oestrogen raises clotting factors — higher with smoking, obesity, immobility.' },
    { ae:'Arterial risk; contraindicated in migraine with aura', mechanism:'Raised ischaemic stroke risk (UKMEC 4).' },
  ],
  practical:[
    { point:'Check UKMEC before starting', detail:'Migraine with aura, BP, smoking ≥35 y, BMI, VTE history.' },
    { point:'Enzyme inducers reduce efficacy', detail:'Some AEDs, rifampicin.' },
  ],
  pearls:['Combined contraception is contraindicated (UKMEC 4) in migraine with aura because of the ischaemic stroke risk.'],
  note:'Ovulation suppression gives reliable contraception; oestrogen’s thrombotic/arterial risk drives the eligibility rules.',
  links:{ case:'cases/contraception.html', caseLabel:'Contraception' },
},
{
  id:'pharma-pop-larc', domain:'Pharmacology', class:'Urology & Reproductive', icon:'💊',
  title:'Progestogen-only & LARC', blurb:'Oestrogen-free options — POP, implant, injection, hormonal coil.',
  examples:['Progestogen-only pill (desogestrel)','Implant (etonogestrel)','Depot (medroxyprogesterone)','LNG-IUS (Mirena)'],
  moa:[
    'Progestogen thickens **cervical mucus**, thins endometrium and (desogestrel/implant/depot) **inhibits ovulation** — no oestrogen, so usable when oestrogen is contraindicated.',
  ],
  effects:[
    { effect:'Effective contraception incl. when oestrogen unsafe', mechanism:'LARC = most effective (user-independent); LNG-IUS also treats heavy bleeding.' },
  ],
  adverse:[
    { ae:'Irregular bleeding', mechanism:'Commonest reason for discontinuation — counsel upfront.' },
    { ae:'Depot: reversible bone-density loss, delayed return of fertility', mechanism:'Hypo-oestrogenic effect; review long-term use.' },
  ],
  practical:[
    { point:'LARC first-line for efficacy', detail:'Implant/IUS remove adherence error.' },
    { point:'Traditional POP needs tight timing', detail:'Desogestrel has a 12-h window; older POPs only 3 h.' },
  ],
  pearls:['Long-acting reversible contraception (implant/IUS) is the most effective method because it removes user error.'],
  note:'Oestrogen-free progestogen action makes these safe when the combined pill isn’t — bleeding patterns are the main trade-off.',
  links:{ case:'cases/contraception.html', caseLabel:'Contraception' },
},
{
  id:'pharma-emergency-contraception', domain:'Pharmacology', class:'Urology & Reproductive', icon:'⏱️',
  title:'Emergency contraception', blurb:'The copper coil is most effective; oral options buy time.',
  examples:['Copper IUD (most effective)','Ulipristal acetate','Levonorgestrel'],
  moa:[
    'Copper IUD is **toxic to sperm/ovum** and blocks implantation. Oral agents **delay or inhibit ovulation** (ulipristal = selective progesterone-receptor modulator; levonorgestrel = progestogen).',
  ],
  effects:[
    { effect:'Prevents pregnancy after UPSI', mechanism:'Copper IUD works post-ovulation; oral agents only if pre-ovulation.' },
  ],
  adverse:[
    { ae:'Levonorgestrel less effective with higher BMI / later use', mechanism:'Consider IUD or ulipristal.' },
    { ae:'Ulipristal delays starting hormonal contraception', mechanism:'Wait 5 days; progestogens reduce its efficacy.' },
  ],
  practical:[
    { point:'Offer the copper IUD first', detail:'Most effective EC and ongoing contraception; up to 5 days.' },
    { point:'Time window matters', detail:'Oral EC works only before ovulation — sooner is better.' },
  ],
  pearls:['The copper IUD is the most effective emergency contraception and should be offered first wherever possible.'],
  note:'Mechanism dictates effectiveness: the copper IUD acts post-ovulation, while oral options merely delay ovulation if given in time.',
  links:{ case:'cases/contraception.html', caseLabel:'Contraception' },
},
{
  id:'pharma-hrt', domain:'Pharmacology', class:'Urology & Reproductive', icon:'🔥',
  title:'Hormone replacement therapy', blurb:'Replace oestrogen for menopausal symptoms — add a progestogen if there’s a uterus.',
  examples:['Transdermal/oral oestradiol','+ Progestogen (or LNG-IUS) if uterus present','Vaginal oestrogen (local)'],
  moa:[
    'Replaces **oestrogen** to relieve vasomotor/urogenital symptoms; **progestogen** opposes oestrogen’s endometrial proliferation to prevent hyperplasia/cancer.',
  ],
  effects:[
    { effect:'Relieves flushes, sweats, urogenital atrophy; protects bone', mechanism:'Oestrogen replacement.' },
  ],
  adverse:[
    { ae:'Oral (not transdermal) raises VTE risk', mechanism:'First-pass hepatic effect — transdermal is VTE-neutral.' },
    { ae:'Small breast-cancer risk with combined HRT', mechanism:'Progestogen-related; individualise.' },
    { ae:'Unopposed oestrogen → endometrial cancer', mechanism:'Must add progestogen if uterus present.' },
  ],
  practical:[
    { point:'Transdermal if VTE/migraine/BMI risk', detail:'Avoids first-pass thrombotic effect.' },
    { point:'Always oppose oestrogen if a uterus is present', detail:'Cyclical or continuous progestogen, or LNG-IUS.' },
  ],
  pearls:['Transdermal oestrogen does not carry the VTE risk of oral HRT — preferred when thrombotic or migraine risk is a concern.'],
  note:'Oestrogen treats symptoms and protects bone; the route determines VTE risk and a progestogen is mandatory to protect the endometrium.',
  links:{ case:'cases/menopause.html', caseLabel:'Menopause' },
},

/* ==================== RHEUMATOLOGY / IMMUNOSUPPRESSION ==================== */
{
  id:'pharma-allopurinol', domain:'Pharmacology', class:'Rheumatology & Immunosuppression', icon:'🦶',
  title:'Allopurinol (urate-lowering)', blurb:'Long-term gout prevention — but never start it during an acute attack alone.',
  examples:['Allopurinol','Febuxostat (alternative)'],
  moa:[
    'Inhibits **xanthine oxidase** → less uric acid production → serum urate falls below saturation, dissolving tophi over time.',
  ],
  effects:[
    { effect:'Prevents recurrent gout', mechanism:'Sustained urate lowering (target <360, or <300 µmol/L if tophi).' },
  ],
  adverse:[
    { ae:'Can trigger a flare on initiation', mechanism:'Mobilises urate crystals — co-prescribe colchicine/NSAID cover.' },
    { ae:'Allopurinol hypersensitivity (rash → SJS/DRESS)', mechanism:'Start low, titrate; higher risk in certain HLA-B*58:01 groups/CKD.' },
    { ae:'Interacts with azathioprine', mechanism:'Blocks its metabolism → marrow toxicity.' },
  ],
  practical:[
    { point:'Start low, titrate to target urate', detail:'With colchicine cover for ~6 months; don’t stop during a flare once established.' },
    { point:'Don’t initiate during an acute attack', detail:'Treat the flare first (though never stop existing allopurinol).' },
  ],
  pearls:['When starting allopurinol, give colchicine (or NSAID) cover and titrate to a target urate — initiation itself can precipitate a flare.'],
  note:'Blocking xanthine oxidase steadily dissolves urate, but the early flare risk and azathioprine interaction shape how it’s started.',
  links:{ patho:'patho-gout', pathoLabel:'Gout', case:'cases/gout.html', caseLabel:'Gout' },
},
{
  id:'pharma-colchicine', domain:'Pharmacology', class:'Rheumatology & Immunosuppression', icon:'🦶',
  title:'Colchicine', blurb:'Acute gout relief when NSAIDs are unsuitable — dose-limited by diarrhoea.',
  examples:['Colchicine (acute gout, pericarditis)'],
  moa:[
    'Binds **tubulin** → inhibits microtubule formation → impairs neutrophil migration and the inflammasome response to urate crystals.',
  ],
  effects:[
    { effect:'Settles acute gout/pericarditis', mechanism:'Reduced neutrophil-driven inflammation.' },
  ],
  adverse:[
    { ae:'Diarrhoea (dose-limiting), nausea', mechanism:'GI epithelial effect — the practical ceiling on dosing.' },
    { ae:'Toxicity in renal/hepatic impairment; narrow margin', mechanism:'Accumulation; interacts with macrolides/statins/CYP inhibitors.' },
  ],
  practical:[
    { point:'Low-dose regimen', detail:'500 µg 2–3×/day; stop if diarrhoea — avoid old high-dose schedules.' },
    { point:'Reduce in CKD; mind interactions', detail:'Clarithromycin, ciclosporin and others raise levels dangerously.' },
  ],
  pearls:['Use low-dose colchicine and stop at the onset of diarrhoea — high-dose regimens cause toxicity without added benefit.'],
  note:'Microtubule inhibition blunts the crystal-driven neutrophil response; its narrow margin and GI toxicity define the low-dose approach.',
  links:{ patho:'patho-gout', pathoLabel:'Gout', case:'cases/gout.html', caseLabel:'Gout' },
},
{
  id:'pharma-methotrexate', domain:'Pharmacology', class:'Rheumatology & Immunosuppression', icon:'🧬',
  title:'Methotrexate', blurb:'Anchor DMARD — weekly dosing and folate are safety-critical.',
  examples:['Methotrexate (weekly) + folic acid'],
  moa:[
    'Inhibits **dihydrofolate reductase** and has anti-inflammatory adenosine effects → suppresses the immune/inflammatory response in RA, psoriasis, IBD.',
  ],
  effects:[
    { effect:'Disease-modifying in RA/psoriasis/IBD', mechanism:'Immunosuppression slows joint/tissue damage.' },
  ],
  adverse:[
    { ae:'Myelosuppression, hepatotoxicity, pneumonitis', mechanism:'Antifolate/immune effects — needs FBC/LFT monitoring.' },
    { ae:'Teratogenic — effective contraception essential', mechanism:'Abortifacient/teratogen in both sexes around conception.' },
    { ae:'Toxic with trimethoprim/NSAIDs in renal impairment', mechanism:'Additive antifolate / reduced clearance.' },
  ],
  practical:[
    { point:'WEEKLY dosing + folic acid', detail:'Daily dosing errors are fatal — a recognised never-event; folic acid on a different day.' },
    { point:'Regular FBC/LFT/U&E monitoring', detail:'And avoid trimethoprim co-prescription.' },
  ],
  pearls:['Methotrexate is taken ONCE WEEKLY — accidental daily dosing causes fatal marrow and mucosal toxicity.'],
  note:'Antifolate immunosuppression is disease-modifying, but weekly dosing, folate cover, monitoring and teratogenicity dominate safe use.',
  links:{ patho:'patho-ra', pathoLabel:'Rheumatoid arthritis' },
},
{
  id:'pharma-hydroxychloroquine', domain:'Pharmacology', class:'Rheumatology & Immunosuppression', icon:'🧬',
  title:'Hydroxychloroquine', blurb:'A well-tolerated DMARD for RA/lupus — watch the retina.',
  examples:['Hydroxychloroquine (RA, SLE)'],
  moa:[
    'Accumulates in lysosomes, raising pH and impairing **antigen processing / Toll-like-receptor signalling** → modulates the autoimmune response.',
  ],
  effects:[
    { effect:'Mild disease control in RA, key in lupus', mechanism:'Immunomodulation with a favourable safety profile.' },
  ],
  adverse:[
    { ae:'Retinal toxicity (long-term)', mechanism:'Cumulative-dose maculopathy — baseline + annual screening after 5 years.' },
    { ae:'GI upset, rare cardiomyopathy/QT', mechanism:'Generally well tolerated.' },
  ],
  practical:[
    { point:'Arrange retinopathy monitoring', detail:'Baseline eye check and ongoing screening per dose/duration.' },
    { point:'Safe in pregnancy', detail:'Often continued in lupus during pregnancy.' },
  ],
  pearls:['Hydroxychloroquine can cause irreversible retinal toxicity — ophthalmic screening is essential with long-term use.'],
  note:'Gentle immunomodulation makes it well tolerated; the one thing that defines monitoring is cumulative retinal toxicity.',
  links:{ patho:'patho-ra', pathoLabel:'Rheumatoid arthritis' },
},
{
  id:'pharma-azathioprine', domain:'Pharmacology', class:'Rheumatology & Immunosuppression', icon:'🧬',
  title:'Azathioprine', blurb:'Steroid-sparing immunosuppressant needing TPMT testing first.',
  examples:['Azathioprine (IBD, autoimmune, transplant)'],
  moa:[
    'Metabolised to **6-mercaptopurine** → inhibits purine synthesis → suppresses proliferating lymphocytes.',
  ],
  effects:[
    { effect:'Maintains remission / spares steroids', mechanism:'Lymphocyte suppression.' },
  ],
  adverse:[
    { ae:'Myelosuppression', mechanism:'Severe if low **TPMT** activity — check before starting; ongoing FBC monitoring.' },
    { ae:'Hepatotoxicity, pancreatitis, infection, skin-cancer risk', mechanism:'Immunosuppression/metabolite effects.' },
    { ae:'Dangerous with allopurinol', mechanism:'Xanthine-oxidase block raises active metabolites → marrow toxicity.' },
  ],
  practical:[
    { point:'Check TPMT before starting', detail:'Low/absent activity → severe toxicity; dose accordingly or avoid.' },
    { point:'Avoid/▼dose with allopurinol', detail:'Profound marrow suppression if combined.' },
  ],
  pearls:['Always check TPMT before azathioprine, and never combine it with allopurinol at normal doses — both risk catastrophic marrow toxicity.'],
  note:'Purine-synthesis blockade suppresses lymphocytes; TPMT status and the allopurinol interaction are the make-or-break safety checks.',
  links:{ patho:'patho-ra', pathoLabel:'Autoimmune disease' },
},

/* ==================== ALLERGY / RESPIRATORY / EMERGENCY / DERM ==================== */
{
  id:'pharma-saba', domain:'Pharmacology', class:'Allergy, Respiratory & Emergency', icon:'🫁',
  title:'Short-acting beta-agonists (SABA)', blurb:'Salbutamol — the reliever; rising use signals poor control.',
  examples:['Salbutamol','Terbutaline'],
  moa:[
    'Agonise **β2 receptors** on airway smooth muscle → rapid bronchodilation within minutes.',
  ],
  effects:[
    { effect:'Quick relief of bronchospasm', mechanism:'β2-mediated smooth-muscle relaxation.' },
  ],
  adverse:[
    { ae:'Tremor, tachycardia, palpitations', mechanism:'β2 (and some β1) systemic effect.' },
    { ae:'Hypokalaemia in high/nebulised doses', mechanism:'β2 drives potassium intracellularly — monitor in acute asthma.' },
  ],
  practical:[
    { point:'≥3 canisters/year = poor control', detail:'Review inhaler technique, adherence and preventer therapy; step up.' },
    { point:'Overreliance is a risk marker', detail:'High SABA use is associated with asthma deaths.' },
  ],
  pearls:['Frequent reliever use (≥3 SABA inhalers a year) signals poorly controlled asthma and a raised risk of attacks — review, don’t just refill.'],
  note:'Fast β2 bronchodilation relieves symptoms, but rising reliever use is a red flag that the preventer plan needs escalating.',
  links:{ patho:'patho-asthma', pathoLabel:'Asthma', case:'cases/asthma.html', caseLabel:'Asthma' },
},
{
  id:'pharma-nasal-steroids', domain:'Pharmacology', class:'Allergy, Respiratory & Emergency', icon:'👃',
  title:'Intranasal corticosteroids', blurb:'First-line for persistent allergic rhinitis — technique is everything.',
  examples:['Fluticasone, mometasone, beclometasone nasal sprays'],
  moa:[
    'Local **glucocorticoid** action reduces mucosal inflammation, eosinophils and mediator release → less congestion, sneezing, rhinorrhoea.',
  ],
  effects:[
    { effect:'Controls allergic rhinitis (incl. nasal blockage)', mechanism:'Anti-inflammatory mucosal effect; most effective when used regularly.' },
  ],
  adverse:[
    { ae:'Epistaxis, local irritation', mechanism:'Poor technique — aim away from the septum.' },
    { ae:'Minimal systemic effect at usual doses', mechanism:'Low bioavailability.' },
  ],
  practical:[
    { point:'Use regularly, not PRN', detail:'Takes days to work — start before/through the season.' },
    { point:'Teach spray technique', detail:'Aim laterally; reduces epistaxis and improves efficacy.' },
  ],
  pearls:['Intranasal steroids only work if used regularly and with correct technique — aim the spray away from the septum to avoid nosebleeds.'],
  note:'Local steroid action is the most effective rhinitis treatment; adherence and spray technique determine whether it works.',
  links:{ case:'cases/allergic-rhinitis.html', caseLabel:'Allergic rhinitis' },
},
{
  id:'pharma-sedating-antihistamine', domain:'Pharmacology', class:'Allergy, Respiratory & Emergency', icon:'🤧',
  title:'Sedating antihistamines', blurb:'Chlorphenamine — useful acutely, but anticholinergic and drowsy.',
  examples:['Chlorphenamine','Promethazine','Hydroxyzine'],
  moa:[
    'Block peripheral **H1 receptors** (anti-allergy) but cross the blood–brain barrier → sedation; also antimuscarinic.',
  ],
  effects:[
    { effect:'Relieve acute allergic symptoms/itch', mechanism:'H1 blockade; sedation can help nocturnal itch.' },
  ],
  adverse:[
    { ae:'Sedation, impaired driving', mechanism:'Central H1 blockade.' },
    { ae:'Anticholinergic effects in elderly', mechanism:'Confusion, retention, falls — adds to anticholinergic burden.' },
  ],
  practical:[
    { point:'Prefer non-sedating for routine allergy', detail:'Cetirizine/loratadine for day-to-day allergic rhinitis/urticaria.' },
    { point:'IM chlorphenamine has a role in anaphylaxis aftercare', detail:'After adrenaline, for residual urticaria — not as primary treatment.' },
  ],
  pearls:['Non-sedating antihistamines are preferred for routine allergy; reserve sedating ones, mindful of anticholinergic burden in older people.'],
  note:'H1 blockade treats allergy, but CNS penetration and antimuscarinic effects make the sedating agents second-choice in most settings.',
  links:{ case:'cases/allergic-rhinitis.html', caseLabel:'Allergic rhinitis' },
},
{
  id:'pharma-adrenaline', domain:'Pharmacology', class:'Allergy, Respiratory & Emergency', icon:'🚨',
  title:'Adrenaline (anaphylaxis)', blurb:'The one drug that saves life in anaphylaxis — IM, into the thigh.',
  examples:['Adrenaline 1:1000 IM (anaphylaxis)','Auto-injectors (e.g. 300 µg)'],
  moa:[
    '**α1** vasoconstriction reverses hypotension and angio-oedema; **β1** supports the heart; **β2** bronchodilates and stabilises mast cells → reverses the whole anaphylactic cascade.',
  ],
  effects:[
    { effect:'Reverses airway, breathing and circulatory collapse', mechanism:'Combined α/β adrenergic action.' },
  ],
  adverse:[
    { ae:'Tachycardia, tremor, anxiety', mechanism:'Expected adrenergic effects — not a reason to withhold in anaphylaxis.' },
    { ae:'Risk only if given IV/wrong dose', mechanism:'IM 1:1000 into the anterolateral thigh is safe and correct.' },
  ],
  practical:[
    { point:'Give early — IM, anterolateral thigh', detail:'Repeat after 5 minutes if no improvement; do not delay for IV access.' },
    { point:'Prescribe two auto-injectors + train', detail:'Carry at all times; refer to allergy; observe after use (biphasic reaction).' },
  ],
  pearls:['Intramuscular adrenaline into the anterolateral thigh is the immediate, life-saving treatment for anaphylaxis — give it first, before antihistamines or steroids.'],
  note:'Its combined α/β action reverses every limb of anaphylaxis; the only real error is giving it late, by the wrong route, or not at all.',
  links:{ patho:'patho-anaphylaxis', pathoLabel:'Anaphylaxis' },
},
{
  id:'pharma-topical-calcineurin', domain:'Pharmacology', class:'Allergy, Respiratory & Emergency', icon:'🧴',
  title:'Topical calcineurin inhibitors', blurb:'Steroid-sparing eczema treatment for the face and skin folds.',
  examples:['Tacrolimus ointment','Pimecrolimus cream'],
  moa:[
    'Inhibit **calcineurin** in T-cells → block cytokine transcription → reduce skin inflammation without steroid-type skin thinning.',
  ],
  effects:[
    { effect:'Controls eczema in delicate sites', mechanism:'Local immunomodulation; no atrophy/striae.' },
  ],
  adverse:[
    { ae:'Transient burning/stinging on application', mechanism:'Common early; usually settles.' },
    { ae:'Photosensitivity; avoid on infected skin', mechanism:'Use sun protection; treat infection first.' },
  ],
  practical:[
    { point:'Useful where steroids risk atrophy', detail:'Face, eyelids, flexures; steroid-sparing in frequent relapses.' },
    { point:'No skin thinning', detail:'Advantage over topical steroids for long-term sensitive-site use.' },
  ],
  pearls:['Topical calcineurin inhibitors are valuable for eczema on the face and skin folds because, unlike steroids, they don’t thin the skin.'],
  note:'Blocking T-cell calcineurin calms eczema without atrophy — ideal for delicate sites where steroids are risky.',
  links:{ case:'cases/eczema.html', caseLabel:'Eczema' },
},

]);
