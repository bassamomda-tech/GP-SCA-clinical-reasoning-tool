/* Reasoning GP — Articles data (batch 15: J & K topics)
   NHS conditions A–Z (letters J and K) not already covered. RCGP/SCA examiner depth.
   NICE NG12 (May 2025) 2WW pathways stated explicitly where relevant. */
(function(){
  const A = (window.RGP_ARTICLES = window.RGP_ARTICLES || []);
  A.push(

  { id:'newborn-jaundice', title:'Newborn jaundice (jaundice in babies)', category:'Paediatrics', icon:'👶',
    overview:'Yellow discolouration of a baby’s skin and sclerae from raised bilirubin — very common in the first week and usually physiological and harmless. The clinical imperative is to identify the dangerous patterns: jaundice in the first 24 hours, prolonged jaundice, and very high bilirubin that risks kernicterus (permanent brain injury).',
    features:[
      'Yellow skin/sclerae, usually appearing from day 2–3, spreading head-to-toe as bilirubin rises',
      'Physiological jaundice (common, benign): appears after 24 hours, peaks around days 3–5, and resolves within ~2 weeks',
      'RED FLAG — jaundice within the first 24 hours of life: always pathological (e.g. haemolysis, sepsis) and needs urgent assessment',
      'Breast-milk jaundice: a common cause of prolonged but benign unconjugated jaundice in a thriving breastfed baby',
      'PROLONGED jaundice (>14 days term, >21 days preterm): needs investigation — crucially to detect CONJUGATED jaundice (pale stools, dark urine), which can indicate biliary atresia (a time-critical surgical diagnosis) or liver disease',
      'KERNICTERUS risk: very high unconjugated bilirubin can cross into the brain (lethargy, poor feeding, high-pitched cry, hypertonia/arching) — irreversible if missed; assess with transcutaneous/serum bilirubin plotted on threshold charts'],
    management:[
      'Assess every jaundiced newborn promptly: timing of onset, gestational age, feeding/hydration, stool/urine colour, and wellbeing; measure bilirubin (transcutaneous or serum) and plot on the age-specific treatment threshold chart',
      'Jaundice in the first 24 hours → urgent same-day assessment (treat as pathological)',
      'Use bilirubin against the gestation/age threshold graphs to decide on phototherapy and the need for escalation',
      'Phototherapy is the mainstay for significant hyperbilirubinaemia; exchange transfusion for very high/rapidly rising levels at risk of kernicterus',
      'Support feeding and hydration (jaundice and poor feeding compound each other); do not stop breastfeeding for breast-milk jaundice in a well, thriving baby',
      'Investigate prolonged jaundice: check a split (conjugated/unconjugated) bilirubin — a raised CONJUGATED fraction, or pale stools/dark urine, demands urgent assessment for biliary atresia/liver disease',
      'Investigate for underlying causes where indicated (haemolysis — blood group/DAT, G6PD, sepsis, hypothyroidism)',
      'Safety-net parents on worsening jaundice, poor feeding, lethargy, and stool/urine colour, and arrange timely review'],
    referral:[
      'Jaundice in the first 24 hours of life, or a baby who is unwell/very high or rapidly rising bilirubin → urgent same-day paediatric/neonatal assessment',
      'Prolonged jaundice with conjugated hyperbilirubinaemia, pale stools or dark urine → urgent referral (suspected biliary atresia — time-critical surgery)',
      'Bilirubin above the phototherapy/exchange threshold → paediatrics for treatment',
      'Signs of kernicterus (lethargy, poor feeding, abnormal tone/cry) → emergency admission'],
    source:'NICE NG217 (Jaundice in newborn babies)' },

  { id:'tmj', title:'Jaw problems (temporomandibular disorders)', category:'Musculoskeletal', icon:'🦷',
    overview:'Temporomandibular disorders (TMD) are common conditions affecting the jaw joint and the muscles of chewing, causing facial/jaw pain, joint noises and restricted movement. They are usually benign, self-limiting and managed conservatively — the role is reassurance, simple measures, and excluding the less common serious mimics.',
    features:[
      'Pain in the jaw, around the ear, or in the face/temple, often worse with chewing, yawning or talking',
      'Joint clicking, popping or crepitus, and a sensation of the jaw "catching" or locking',
      'Restricted or deviated mouth opening; associated headaches and earache (with a normal ear on examination)',
      'Aggravating factors: bruxism (teeth grinding/clenching), stress/anxiety, malocclusion, jaw trauma, and chewing gum/hard foods',
      'Often coexists with tension-type headache, neck pain and other chronic pain conditions',
      'RED FLAGS prompting other diagnoses: new persistent unilateral pain in an older patient (consider giant cell arteritis — jaw claudication), a hard mass/swelling, persistent unexplained symptoms, neurological signs, or trismus with systemic illness'],
    management:[
      'Reassure: most TMD is benign and self-limiting, improving over weeks to months with conservative measures',
      'Self-care advice: a soft diet, avoid wide yawning/gum/hard foods, jaw rest, and apply warmth; gentle jaw exercises',
      'Address contributing factors: manage stress and bruxism (relaxation, and a dental bite-splint/occlusal appliance where indicated)',
      'Pain relief: simple analgesia (paracetamol/NSAIDs) and short-term use as needed',
      'Refer to dentistry for splint therapy/occlusal assessment, and physiotherapy for jaw and neck symptoms',
      'Exclude serious mimics — consider giant cell arteritis in over-50s with new jaw/temporal pain (and act urgently if suspected), and dental/ENT/salivary or sinister causes for atypical features',
      'For persistent or severe TMD, refer to a specialist (oral and maxillofacial surgery)',
      'Provide written self-management advice and review if not improving'],
    referral:[
      'Suspected giant cell arteritis (new headache/jaw claudication, scalp tenderness, visual symptoms in over-50s) → urgent same-day assessment, start steroids, urgent referral',
      'Persistent/severe TMD, locking, or failure of conservative measures → oral and maxillofacial surgery / dental specialist',
      'A jaw mass, persistent unexplained swelling, or red-flag features → urgent assessment (exclude tumour/other pathology; consider relevant NICE NG12 pathway)',
      'Bruxism/occlusal problems → dentistry for a splint'],
    source:'NICE CKS — Temporomandibular disorders' },

  { id:'jia', title:'Juvenile idiopathic arthritis (JIA)', category:'Musculoskeletal', icon:'🧒',
    overview:'The commonest chronic inflammatory arthritis of childhood — persistent joint inflammation beginning before age 16 and lasting at least 6 weeks, with no other identified cause. Early recognition and treatment prevent joint damage and disability, and a crucial, often silent, complication is chronic anterior uveitis, which threatens sight.',
    features:[
      'Joint swelling, pain, stiffness (especially morning stiffness or after rest), warmth, and reduced movement, lasting ≥6 weeks, with onset before 16 years',
      'Young children may not complain of pain — instead they limp, regress in motor skills, avoid using a limb, or become irritable',
      'Subtypes include oligoarticular (≤4 joints — commonest), polyarticular, systemic (Still’s — high spiking fevers, salmon-pink rash, lymphadenopathy, serositis), enthesitis-related, and psoriatic',
      'CHRONIC ANTERIOR UVEITIS is a key complication — often ASYMPTOMATIC, especially in young girls with oligoarticular ANA-positive disease — and can silently damage sight, so regular ophthalmology screening is essential',
      'Systemic JIA can be complicated by macrophage activation syndrome — a life-threatening emergency (persistent fever, cytopenias, very high ferritin, organ dysfunction)',
      'Diagnosis is clinical (a diagnosis of exclusion); investigations support it and exclude mimics (infection, malignancy such as leukaemia, reactive arthritis)'],
    management:[
      'Refer any child with persistent joint swelling/arthritis (or unexplained limp/joint symptoms) to paediatric rheumatology — early specialist diagnosis and treatment protect joints',
      'Exclude red-flag mimics before/at referral: consider leukaemia/malignancy (night pain, systemic upset, cytopenias, very high inflammatory markers) and septic arthritis (a hot, acutely painful joint with fever) as emergencies',
      'Management is specialist and multidisciplinary: NSAIDs for symptom relief, intra-articular corticosteroid injections, and disease-modifying drugs (methotrexate) and biologics for persistent/severe disease',
      'Ensure regular ophthalmology uveitis screening per protocol — this is essential and the eye disease is often symptomless',
      'Involve physiotherapy and occupational therapy to maintain function, joint range and muscle strength, and support school and activity',
      'Monitor growth, bone health, and the side effects of treatment (e.g. immunosuppression — manage infection risk and live-vaccine considerations)',
      'Recognise and urgently escalate macrophage activation syndrome in systemic JIA',
      'Support the child and family with information, psychological support, and transition planning to adult services'],
    referral:[
      'Suspected JIA (persistent joint swelling/arthritis ≥6 weeks, unexplained limp) → paediatric rheumatology',
      'Suspected malignancy (e.g. leukaemia: bone pain, systemic upset, cytopenias) → very urgent FBC/blood film and referral (NICE NG12); suspected septic arthritis → emergency',
      'Established JIA → regular ophthalmology uveitis screening',
      'Suspected macrophage activation syndrome (persistent fever, very high ferritin, cytopenias) → emergency admission'],
    source:'NICE CKS / BSPAR — Juvenile idiopathic arthritis' },

  { id:'kawasaki', title:'Kawasaki disease', category:'Paediatrics', icon:'🧒',
    overview:'An acute systemic vasculitis of young children (mostly under 5) of unknown cause. Its importance lies in the risk of coronary-artery aneurysms — so prompt recognition and treatment with immunoglobulin within the first 10 days dramatically reduces cardiac complications. It is a key "fever for ≥5 days in a child" diagnosis not to miss.',
    features:[
      'Fever persisting for ≥5 days is the essential feature, typically high and unresponsive to antipyretics/antibiotics',
      'Plus several of the classic features (mnemonic "CRASH and burn"): Conjunctivitis (bilateral, non-purulent), Rash (polymorphous), Adenopathy (cervical, often unilateral), Strawberry tongue / cracked red lips / oral changes, and Hands and feet changes (erythema/oedema, later peeling)',
      'The child is typically very irritable and unwell',
      'INCOMPLETE/atypical Kawasaki disease (fewer features) is common, especially in infants — and infants are at the highest risk of coronary complications, so maintain a high index of suspicion',
      'The major complication is coronary-artery aneurysm, which can cause myocardial infarction and sudden death',
      'Diagnosis is clinical; supportive findings include raised inflammatory markers, thrombocytosis (typically in the second week), and echocardiography to assess the coronary arteries'],
    management:[
      'Consider Kawasaki disease in any child with fever for ≥5 days plus compatible features — and in unexplained prolonged fever in an infant even with incomplete features',
      'Refer urgently to paediatrics for assessment and treatment — early diagnosis is time-critical',
      'Treatment (specialist) is intravenous immunoglobulin (IVIG), ideally within the first 10 days of illness, which markedly reduces the risk of coronary aneurysms, plus aspirin',
      'Arrange echocardiography to assess the coronary arteries, with cardiology follow-up',
      'Exclude/consider mimics (e.g. measles, scarlet fever, other viral exanthems, staphylococcal/streptococcal toxin-mediated disease) but do not let this delay referral',
      'Provide ongoing cardiology surveillance for those with coronary involvement, and long-term follow-up',
      'Counsel parents and ensure clear follow-up; note that aspirin use here is specialist-directed (an exception to usual paediatric aspirin avoidance)',
      'Safety-net for cardiac symptoms and ensure the diagnosis is communicated for future cardiovascular risk'],
    referral:[
      'Suspected Kawasaki disease (fever ≥5 days with compatible features, or unexplained prolonged fever in an infant) → urgent paediatric admission for IVIG (ideally within 10 days)',
      'Cardiac complications/coronary aneurysm → paediatric cardiology',
      'Diagnostic uncertainty in a persistently febrile unwell child → urgent paediatric assessment',
      'Shock or severe illness → emergency admission'],
    source:'NICE CKS / RCPCH — Kawasaki disease' },

  { id:'kidney-cancer', title:'Kidney cancer (renal cell carcinoma)', category:'Cardiovascular & Renal', icon:'🎗️',
    overview:'The commonest kidney cancer (renal cell carcinoma) often presents late or incidentally, as early disease is usually silent. The cardinal symptom to act on is visible (frank) haematuria. The classic triad of haematuria, loin pain and a mass is a late finding — so recognising unexplained haematuria and referring urgently is the key task.',
    features:[
      'Visible (frank) haematuria is the most important presenting symptom — often painless',
      'Other features: loin/flank pain, a palpable abdominal/flank mass, and (late) the classic triad of all three',
      'Constitutional/paraneoplastic features: weight loss, fatigue, fever, anaemia or polycythaemia, hypercalcaemia, and a new varicocele (especially left-sided, from renal vein involvement)',
      'Many are detected incidentally on imaging done for other reasons',
      'Risk factors: smoking, obesity, hypertension, chronic kidney disease/dialysis, and inherited syndromes (e.g. von Hippel-Lindau)',
      'Investigations: urinalysis, and imaging — ultrasound and CT (with contrast) characterise renal masses; staging CT for confirmed cancer'],
    management:[
      'Take visible haematuria seriously — refer urgently on the suspected-cancer pathway and arrange imaging; do not attribute it to a UTI without follow-up',
      'Investigate non-visible (microscopic) haematuria appropriately, especially with risk factors',
      'Arrange imaging (ultrasound/CT) for suspected renal masses and refer to urology',
      'Refer confirmed/suspected renal cancer to the urology/uro-oncology MDT for staging and treatment',
      'Treatment is specialist: surgery (partial or radical nephrectomy) for localised disease; ablation/active surveillance for selected small masses; and systemic therapy (targeted/immunotherapy) for advanced disease',
      'Manage and monitor renal function (especially after nephrectomy or with pre-existing CKD)',
      'Support risk reduction and general health: smoking cessation, weight and blood-pressure management',
      'Provide information, psychological support, and survivorship/surveillance follow-up'],
    referral:[
      'Aged 45+ with unexplained visible haematuria (without UTI, or persisting/recurring after treatment of UTI) → urgent suspected renal/bladder cancer (2WW) referral (NICE NG12)',
      'An unexplained renal mass on imaging → urgent urology referral',
      'Confirmed kidney cancer → uro-oncology MDT',
      'Non-visible haematuria with risk factors → investigate/refer per local haematuria pathway'],
    source:'NICE NG12 / renal cancer guidance' },

  { id:'pyelonephritis', title:'Kidney infection (pyelonephritis)', category:'Urology', icon:'🫘',
    overview:'Infection of the upper urinary tract (kidney), usually ascending from the bladder. It is more serious than a lower UTI — it can cause sepsis, renal abscess and lasting kidney damage. The key tasks are recognising it (loin pain, fever, systemic illness), treating promptly, and identifying who needs admission or imaging.',
    features:[
      'Loin/flank pain and tenderness, fever and rigors, and systemic illness (nausea/vomiting, malaise) — often with lower-urinary-tract symptoms (dysuria, frequency)',
      'More unwell than simple cystitis; may progress to urosepsis (tachycardia, hypotension, confusion)',
      'Commonest organism is E. coli; usually ascending infection',
      'Higher-risk/complicated groups: pregnancy, men, children, diabetes, immunosuppression, structural/functional urinary abnormalities, stones, and catheters',
      'Complications: sepsis, renal/perinephric abscess, and (with obstruction) an infected obstructed kidney — a urological emergency',
      'Investigations: urine dipstick and culture (send before antibiotics), bloods/inflammatory markers if unwell, and imaging (ultrasound/CT) for suspected obstruction/stones, complicated cases, or failure to respond'],
    management:[
      'Assess severity and for sepsis; send a urine culture before starting antibiotics',
      'Start empirical antibiotics promptly per local guidance (e.g. a 7–10 day course of an appropriate agent such as a fluoroquinolone or cefalexin), then tailor to culture results',
      'Manage at home those who are systemically well enough, with analgesia, fluids, and clear safety-netting and review',
      'Admit those who are septic, vomiting/unable to take oral treatment/fluids, pregnant and unwell, significantly comorbid, or not improving — for IV antibiotics and assessment',
      'Suspect and urgently image for obstruction (e.g. an infected obstructed/stone-bearing kidney) in severe, non-responding, or high-risk cases — this needs emergency urological drainage',
      'Treat pyelonephritis in pregnancy promptly and usually with admission/specialist input',
      'Investigate underlying causes in men, children, recurrent infection, or complicated cases (structural abnormalities, stones)',
      'Arrange follow-up to confirm resolution and consider further urological investigation as indicated'],
    referral:[
      'Sepsis/urosepsis, pregnancy with pyelonephritis, inability to tolerate oral treatment, or failure to respond → hospital admission',
      'Suspected infected obstructed kidney/obstructing stone → emergency urology (urgent drainage)',
      'Recurrent or complicated pyelonephritis, or in men/children → urology assessment',
      'Renal/perinephric abscess → urgent urology'],
    source:'NICE NG111 (Pyelonephritis — acute, antimicrobial prescribing)' },

  { id:'kidney-stones', title:'Kidney stones (renal and ureteric stones)', category:'Urology', icon:'🪨',
    overview:'Crystalline stones forming in the urinary tract, causing severe pain (renal/ureteric colic) when they obstruct. Most pass spontaneously, but the priorities are effective analgesia, imaging to confirm and assess obstruction, and recognising the emergency of an infected, obstructed kidney — plus preventing recurrence.',
    features:[
      'Renal/ureteric colic: sudden, severe, colicky loin-to-groin pain, with the patient typically restless and unable to get comfortable, often with nausea/vomiting',
      'Haematuria (often non-visible) is common; lower-tract symptoms (urgency, frequency) occur as a stone nears the bladder',
      'Most stones are calcium-based; others include uric acid, struvite (infection), and cystine',
      'EMERGENCY — an infected, obstructed kidney: colic with fever/rigors/systemic illness — this is a urological emergency needing urgent decompression (risk of sepsis and kidney loss)',
      'Other red flags: a solitary or transplanted kidney, bilateral obstruction, or acute kidney injury',
      'Diagnosis: urinalysis, and low-dose non-contrast CT of the kidneys, ureters and bladder (CT KUB) is the gold-standard investigation (ultrasound in pregnancy/children)'],
    management:[
      'Provide strong analgesia early — an NSAID (e.g. diclofenac) is first-line for renal colic, with an alternative (e.g. opioid) if NSAIDs are unsuitable',
      'Arrange urgent imaging (CT KUB) to confirm the stone, its size/site, and any obstruction',
      'Recognise and act on an infected obstructed kidney (colic + fever/sepsis) as an emergency — urgent admission for antibiotics and decompression (nephrostomy/stent)',
      'For uncomplicated small stones (typically <5–7 mm) with controlled pain: manage expectantly (most pass spontaneously) with analgesia, hydration, and safety-netting; consider medical expulsive therapy (an alpha-blocker, e.g. tamsulosin) for distal ureteric stones',
      'Refer larger stones, stones unlikely to pass, persistent pain/obstruction, or failure to progress to urology for active treatment (shockwave lithotripsy, ureteroscopy, or PCNL)',
      'Strain urine/retrieve the stone for analysis where possible to guide prevention',
      'Prevent recurrence: high fluid intake, dietary advice (e.g. reduce salt, normal calcium intage, limit oxalate-rich foods/animal protein per stone type), and treat metabolic abnormalities',
      'Investigate recurrent/multiple stones (metabolic screen) and manage underlying causes'],
    referral:[
      'Infected obstructed kidney (colic + fever/sepsis), AKI, bilateral obstruction, or a single/transplanted kidney → emergency urology (urgent decompression)',
      'Uncontrolled pain, large stones, or stones not passing → urology for active treatment',
      'Pregnancy with suspected stones → specialist (use ultrasound; obstetric/urology input)',
      'Recurrent stones → urology/metabolic assessment'],
    source:'NICE NG118 (Renal and ureteric stones)' },

  { id:'klinefelter', title:'Klinefelter syndrome', category:'Endocrine & metabolic', icon:'🧬',
    overview:'A common chromosomal condition in males (usually 47,XXY) causing primary hypogonadism (testosterone deficiency) and infertility. It is markedly under-diagnosed, often presenting at puberty, with infertility, or as incidental hypogonadism. Recognition allows testosterone replacement, fertility counselling, and management of associated health risks.',
    features:[
      'Primary hypogonadism: small, firm testes, reduced testosterone, with raised LH/FSH (the gonads fail to respond)',
      'Variable presentation by age: tall stature with long legs in childhood; in adolescence, delayed/incomplete puberty, gynaecomastia, and reduced facial/body hair; in adults, infertility (azoospermia), low libido/erectile dysfunction, and reduced muscle/energy',
      'Learning, language and psychosocial difficulties can occur (often mild); the majority have normal intelligence',
      'Infertility is very common (a frequent route to diagnosis at fertility clinics)',
      'Associated health risks: osteoporosis, metabolic syndrome/type 2 diabetes, venous thromboembolism, autoimmune disease, and a higher risk of breast cancer (relative to other men)',
      'Diagnosis: low testosterone with raised LH/FSH, confirmed by karyotype (47,XXY)'],
    management:[
      'Consider the diagnosis in boys/men with delayed or incomplete puberty, small testes, gynaecomastia, infertility, or unexplained hypogonadism — check testosterone, LH/FSH, and arrange a karyotype',
      'Refer to endocrinology; testosterone replacement therapy is the mainstay — it improves secondary sexual characteristics, energy, libido, muscle and bone health, and wellbeing (it does not restore fertility)',
      'Refer to fertility services and counsel about infertility — sperm retrieval techniques (e.g. micro-TESE), ideally discussed/arranged early (including before testosterone therapy and in adolescence), offer some men a chance of biological fatherhood',
      'Monitor and manage associated risks: bone density (osteoporosis), cardiovascular/metabolic risk and diabetes, and breast awareness (increased breast cancer risk)',
      'Support learning, speech/language and psychosocial needs in children, and provide educational support where relevant',
      'Manage gynaecomastia and the psychological impact; provide patient information and peer support',
      'Offer genetic counselling and coordinate multidisciplinary, lifelong follow-up',
      'In primary care, support testosterone therapy monitoring, bone and metabolic health, and mental wellbeing'],
    referral:[
      'Suspected Klinefelter syndrome (hypogonadism with raised LH/FSH) → endocrinology (± karyotype) for testosterone replacement',
      'Fertility concerns → fertility services (early — for sperm retrieval/preservation)',
      'Delayed puberty/gynaecomastia in adolescents → paediatric endocrinology',
      'Associated complications (osteoporosis, diabetes, breast lump) → relevant specialty (a breast lump → 2WW breast pathway, NICE NG12)'],
    source:'NICE CKS / Society for Endocrinology — Klinefelter syndrome' }

  );
})();
