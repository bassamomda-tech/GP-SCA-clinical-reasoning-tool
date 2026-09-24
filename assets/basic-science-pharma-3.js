/* Reasoning GP — Basic Science: PHARMACOLOGY (set 3: Respiratory + GI + Dermatology + Supplements)
   Same schema as basic-science-pharma.js. Educational reasoning aid — verify against BNF. */
window.RGP_BASICSCIENCE = (window.RGP_BASICSCIENCE || []).concat([

/* ---------------- RESPIRATORY ---------------- */
{
  id:'pharma-loratadine', domain:'Pharmacology', class:'Respiratory', icon:'🤧',
  title:'Antihistamines (H1 blockers)', blurb:'Block histamine to treat allergy — the newer ones avoid the old sedation.',
  examples:['Cetirizine, loratadine, fexofenadine (non-sedating)','Chlorphenamine, promethazine (sedating)'],
  moa:[
    'Block the **H1 receptor** → reduce histamine-driven vasodilatation, itch, wheal and secretions.',
    'Older agents cross the blood–brain barrier → sedation and antimuscarinic effects; newer ones largely don’t.',
  ],
  effects:[
    { effect:'Relieve allergic rhinitis, urticaria, itch', mechanism:'H1 blockade in skin and mucosa.' },
    { effect:'Sedation (older agents)', mechanism:'Central H1 blockade.' },
  ],
  adverse:[
    { ae:'Drowsiness (sedating agents)', mechanism:'CNS H1 blockade — caution driving.' },
    { ae:'Antimuscarinic effects', mechanism:'Dry mouth, urinary retention with older drugs.' },
  ],
  practical:[
    { point:'Use non-sedating first', detail:'Cetirizine/loratadine for daytime allergy.' },
    { point:'No role as monotherapy in anaphylaxis', detail:'Adrenaline is the treatment; antihistamines only for residual skin symptoms.' },
  ],
  pearls:['Antihistamines do NOT treat anaphylaxis — never delay adrenaline for them.'],
  note:'H1 blockade calms allergy; whether it also sedates depends purely on CNS penetration.',
  links:{ patho:'patho-anaphylaxis', pathoLabel:'Anaphylaxis', case:'cases/allergic-rhinitis.html', caseLabel:'Allergic rhinitis' },
},
{
  id:'pharma-montelukast', domain:'Pharmacology', class:'Respiratory', icon:'🫁',
  title:'Leukotriene receptor antagonists', blurb:'Montelukast — an oral add-on in asthma, particularly allergic or exercise-induced.',
  examples:['Montelukast (oral, evening)'],
  moa:[
    'Block the **cysteinyl-leukotriene receptor** → reduce leukotriene-driven bronchoconstriction, mucus and eosinophilic inflammation.',
  ],
  effects:[
    { effect:'Add-on asthma control', mechanism:'Complements ICS by blocking a different inflammatory mediator.' },
  ],
  adverse:[
    { ae:'Neuropsychiatric effects', mechanism:'MHRA warning — sleep disturbance, mood/behaviour change, especially in children.' },
  ],
  practical:[
    { point:'Counsel on mood/behaviour', detail:'Warn families to report nightmares, low mood or agitation.' },
    { point:'Useful in exercise/allergic asthma', detail:'And concomitant allergic rhinitis.' },
  ],
  pearls:['Ask about mood and sleep at review — montelukast carries an MHRA neuropsychiatric warning.'],
  note:'Blocking leukotrienes tackles a non-histamine arm of asthma inflammation; the key safety issue is neuropsychiatric.',
  links:{ patho:'patho-asthma', pathoLabel:'Asthma' },
},
{
  id:'pharma-theophylline', domain:'Pharmacology', class:'Respiratory', icon:'🫁',
  title:'Theophylline', blurb:'An old oral bronchodilator with a narrow therapeutic index and many interactions.',
  examples:['Theophylline, aminophylline'],
  moa:[
    'Non-selective **phosphodiesterase inhibition** (↑ cAMP) + adenosine-receptor antagonism → bronchodilatation and some anti-inflammatory effect.',
  ],
  effects:[
    { effect:'Bronchodilatation', mechanism:'Smooth-muscle relaxation via raised cAMP.' },
  ],
  adverse:[
    { ae:'Toxicity: arrhythmia, seizures, vomiting', mechanism:'Narrow therapeutic window — needs level monitoring.' },
  ],
  practical:[
    { point:'Many interactions alter levels', detail:'Macrolides, ciprofloxacin, smoking cessation (raise levels); enzyme inducers lower them.' },
    { point:'Check levels', detail:'Especially after dose change or interacting drug.' },
  ],
  pearls:['Stopping smoking raises theophylline levels — toxicity can follow quitting.'],
  note:'Raised cAMP dilates bronchi but the narrow index plus enzyme interactions make levels unpredictable.',
  links:{ patho:'patho-copd', pathoLabel:'COPD' },
},
{
  id:'pharma-carbocisteine', domain:'Pharmacology', class:'Respiratory', icon:'🫁',
  title:'Mucolytics (carbocisteine)', blurb:'Thin tenacious sputum to ease clearance in chronic productive cough/COPD.',
  examples:['Carbocisteine'],
  moa:[
    'Alter mucin disulphide bonds → **less viscous sputum** → easier expectoration.',
  ],
  effects:[
    { effect:'Easier sputum clearance, fewer exacerbations', mechanism:'Reduced mucus viscosity.' },
  ],
  adverse:[
    { ae:'GI upset, rare GI bleeding', mechanism:'Direct mucosal effect.' },
  ],
  practical:[
    { point:'Trial and review', detail:'Stop if no symptomatic benefit after 4 weeks.' },
  ],
  pearls:['A symptomatic add-on — review and discontinue if it isn’t helping.'],
  note:'Breaking mucin disulphide bonds thins sputum; the benefit is symptomatic, so it’s trial-and-review.',
  links:{ patho:'patho-copd', pathoLabel:'COPD' },
},

/* ---------------- GASTROINTESTINAL ---------------- */
{
  id:'pharma-antacids-alginate', domain:'Pharmacology', class:'Gastrointestinal', icon:'🔥',
  title:'Antacids & alginates', blurb:'Neutralise acid and form a protective raft for fast reflux relief.',
  examples:['Gaviscon (alginate)','Magnesium/aluminium salts'],
  moa:[
    'Antacids **neutralise gastric acid**; alginates form a viscous **raft** floating on stomach contents to block reflux.',
  ],
  effects:[
    { effect:'Rapid symptomatic reflux/dyspepsia relief', mechanism:'Acid neutralisation + physical barrier.' },
  ],
  adverse:[
    { ae:'Magnesium salts → diarrhoea; aluminium → constipation', mechanism:'Opposing gut motility effects.' },
    { ae:'Reduced absorption of other drugs', mechanism:'Bind tetracyclines, levothyroxine, bisphosphonates.' },
  ],
  practical:[
    { point:'Separate from other medicines', detail:'Leave a gap to avoid chelating absorption.' },
  ],
  pearls:['Antacids chelate levothyroxine and some antibiotics — space the doses apart.'],
  note:'Neutralise acid plus float a raft over it — fast relief, but the cations interfere with other drugs.',
  links:{ patho:'patho-gord', pathoLabel:'GORD', pharma:'pharma-ppi', pharmaLabel:'PPIs' },
},
{
  id:'pharma-h2', domain:'Pharmacology', class:'Gastrointestinal', icon:'🔥',
  title:'H2-receptor antagonists', blurb:'Famotidine — reduce acid less potently than PPIs but useful as an alternative.',
  examples:['Famotidine, nizatidine'],
  moa:[
    'Block **histamine H2 receptors** on gastric parietal cells → reduced acid secretion.',
  ],
  effects:[
    { effect:'Acid suppression', mechanism:'Less potent and shorter-acting than PPIs.' },
  ],
  adverse:[
    { ae:'Generally well tolerated', mechanism:'—' },
  ],
  practical:[
    { point:'Alternative/adjunct to PPIs', detail:'Useful for nocturnal acid breakthrough.' },
    { point:'Ranitidine withdrawn', detail:'NDMA-contamination concern — famotidine is the usual choice now.' },
  ],
  pearls:['H2 blockers suppress acid via histamine, not the proton pump — a useful adjunct when PPIs aren’t enough.'],
  note:'Block parietal-cell H2 receptors and acid falls — gentler than PPIs, hence a second-line/adjunct role.',
  links:{ patho:'patho-gord', pathoLabel:'GORD' },
},
{
  id:'pharma-laxatives', domain:'Pharmacology', class:'Gastrointestinal', icon:'💩',
  title:'Laxatives', blurb:'Four classes with distinct mechanisms — match the laxative to the cause.',
  examples:['Bulk (ispaghula)','Osmotic (macrogol, lactulose)','Stimulant (senna, bisacodyl)','Softeners (docusate)'],
  moa:[
    'Bulk-forming retain water and add mass; **osmotic** draw water into the lumen; **stimulant** increase peristalsis and secretion; softeners wet the stool.',
  ],
  effects:[
    { effect:'Relieve constipation', mechanism:'Different mechanisms for different situations.' },
  ],
  adverse:[
    { ae:'Cramps (stimulants), bloating (osmotic)', mechanism:'Increased motility/luminal water.' },
  ],
  practical:[
    { point:'Opioid constipation → stimulant', detail:'Add a stimulant ± osmotic; avoid bulk-forming (worsens it).' },
    { point:'Lactulose in hepatic encephalopathy', detail:'Also traps ammonia.' },
    { point:'Bulk-forming needs fluid', detail:'Avoid in suspected obstruction.' },
  ],
  pearls:['For opioid-induced constipation use a stimulant — bulk-forming agents make it worse.'],
  note:'Pick by mechanism: bulk, osmotic pull, stimulation or softening — the cause decides the class.',
  links:{ case:'cases/constipation.html', caseLabel:'Constipation' },
},
{
  id:'pharma-antiemetics', domain:'Pharmacology', class:'Gastrointestinal', icon:'🤢',
  title:'Antiemetics', blurb:'Choose by the receptor driving the nausea — and mind the side-effects.',
  examples:['Cyclizine (H1/antimuscarinic)','Metoclopramide/domperidone (D2)','Ondansetron (5-HT3)','Prochlorperazine (D2)'],
  moa:[
    'Block the receptor mediating the vomiting pathway: **D2** (chemoreceptor trigger zone, gastric stasis), **5-HT3** (chemo, post-op, gut), **H1/muscarinic** (motion, vestibular).',
  ],
  effects:[
    { effect:'Reduce nausea/vomiting', mechanism:'Targeted receptor blockade by cause.' },
  ],
  adverse:[
    { ae:'Metoclopramide → extrapyramidal/dystonia', mechanism:'Central D2 blockade — esp. young women; avoid prolonged use.' },
    { ae:'Ondansetron → constipation, QT prolongation', mechanism:'5-HT3 effects + cardiac channels.' },
    { ae:'Domperidone → QT', mechanism:'Doesn’t cross BBB → fewer extrapyramidal effects than metoclopramide.' },
  ],
  practical:[
    { point:'Match drug to mechanism', detail:'Gastric stasis/gastroparesis → prokinetic D2 (metoclopramide/domperidone); vestibular/motion → cyclizine/prochlorperazine; chemo/post-op → ondansetron.' },
    { point:'Metoclopramide caution in young/Parkinson’s', detail:'Dystonia risk; worsens Parkinson’s (use domperidone).' },
  ],
  pearls:['In Parkinson’s, use domperidone (peripheral) — metoclopramide and prochlorperazine worsen it by blocking central D2.'],
  note:'Each antiemetic targets a specific emetic receptor — knowing the cause picks the drug and predicts the side-effects.',
  links:{ case:'cases/vomiting.html', caseLabel:'Nausea & vomiting' },
},
{
  id:'pharma-aminosalicylates', domain:'Pharmacology', class:'Gastrointestinal', icon:'🩹',
  title:'Aminosalicylates (mesalazine)', blurb:'Topical gut anti-inflammatories — the mainstay of mild–moderate ulcerative colitis.',
  examples:['Mesalazine, sulfasalazine'],
  moa:[
    'Deliver **5-ASA** to the colonic mucosa → local anti-inflammatory action (prostaglandin/leukotriene modulation, antioxidant).',
  ],
  effects:[
    { effect:'Induce & maintain UC remission', mechanism:'Topical mucosal anti-inflammatory effect.' },
  ],
  adverse:[
    { ae:'Renal impairment (interstitial nephritis)', mechanism:'Monitor U&E.' },
    { ae:'Blood dyscrasias', mechanism:'Report unexplained bleeding/bruising/sore throat.' },
  ],
  practical:[
    { point:'Monitor renal function', detail:'Baseline and periodically.' },
    { point:'More effective in UC than Crohn’s', detail:'Topical colonic action.' },
  ],
  pearls:['5-ASA works topically on the mucosa — formulation determines where in the gut it’s released.'],
  note:'A locally-acting mucosal anti-inflammatory; the systemic concern is renal, so U&E are monitored.',
  links:{ patho:'patho-ibd', pathoLabel:'Inflammatory bowel disease' },
},

/* ---------------- DERMATOLOGY ---------------- */
{
  id:'pharma-topical-steroids', domain:'Pharmacology', class:'Dermatology', icon:'🧴',
  title:'Topical corticosteroids', blurb:'Graded-potency anti-inflammatories for eczema and dermatoses — potency and site matter.',
  examples:['Hydrocortisone (mild)','Eumovate (moderate)','Betnovate (potent)','Dermovate (very potent)'],
  moa:[
    'Local **glucocorticoid-receptor** activation → suppress cutaneous inflammation, vasoconstriction and cell proliferation.',
  ],
  effects:[
    { effect:'Settle eczema/dermatitis flares', mechanism:'Local anti-inflammatory action.' },
  ],
  adverse:[
    { ae:'Skin atrophy, striae, telangiectasia', mechanism:'Collagen/epidermal thinning with prolonged potent use, esp. on face/flexures.' },
    { ae:'Systemic absorption (large area/occlusion)', mechanism:'Can suppress the HPA axis in extremes.' },
  ],
  practical:[
    { point:'Match potency to site', detail:'Mild on face/flexures; potent for thick/lichenified skin; fingertip-unit dosing.' },
    { point:'Treat flares, step down', detail:'Use enough to control, then emollients to maintain.' },
  ],
  pearls:['Fingertip units guide quantity; the face and flexures need the mildest steroid to avoid atrophy.'],
  note:'Local glucocorticoid action settles inflammation — match potency to skin thickness and site to avoid atrophy.',
  links:{ patho:'patho-eczema', pathoLabel:'Eczema', case:'cases/eczema.html', caseLabel:'Eczema' },
},
{
  id:'pharma-emollients', domain:'Pharmacology', class:'Dermatology', icon:'🧴',
  title:'Emollients', blurb:'Restore the skin barrier — the foundation of all eczema and dry-skin care.',
  examples:['Ointments, creams, lotions; soap substitutes'],
  moa:[
    'Occlusive/humectant lipids **repair the skin barrier** → reduce water loss, itch and the need for steroids.',
  ],
  effects:[
    { effect:'Reduce flares & steroid use', mechanism:'A maintained barrier is less inflamed and less itchy.' },
  ],
  adverse:[
    { ae:'Paraffin fire risk', mechanism:'Emollient-soaked fabric is highly flammable — no smoking/naked flames.' },
    { ae:'Occasional stinging/folliculitis', mechanism:'Irritant or occlusive effect.' },
  ],
  practical:[
    { point:'Apply liberally and often', detail:'Even when clear; use as a soap substitute; apply before steroids (wait a few minutes).' },
    { point:'Fire-safety warning', detail:'Wash/change emollient-soaked clothing and bedding.' },
  ],
  pearls:['Emollient-soaked clothing and dressings are a serious fire hazard — always warn patients.'],
  note:'Barrier repair is the disease-modifying step in eczema — steroids treat flares, emollients prevent them.',
  links:{ patho:'patho-eczema', pathoLabel:'Eczema' },
},
{
  id:'pharma-topical-antifungals', domain:'Pharmacology', class:'Dermatology', icon:'🍄',
  title:'Antifungals (topical & oral)', blurb:'Azoles and terbinafine for skin/nail fungal infection — oral when topical can’t reach.',
  examples:['Clotrimazole, miconazole (topical azoles)','Terbinafine (oral, nails/scalp)','Nystatin (candida)'],
  moa:[
    'Azoles inhibit **ergosterol synthesis** (fungal membrane); terbinafine blocks squalene epoxidase — both disrupt the fungal cell membrane.',
  ],
  effects:[
    { effect:'Clear dermatophyte/candidal infection', mechanism:'Loss of membrane integrity.' },
  ],
  adverse:[
    { ae:'Oral terbinafine: hepatotoxicity, taste loss', mechanism:'Check LFTs for prolonged courses.' },
    { ae:'Azole drug interactions', mechanism:'CYP inhibition (esp. oral).' },
  ],
  practical:[
    { point:'Nails/scalp need oral', detail:'Topicals can’t penetrate — confirm with sampling before long oral courses.' },
    { point:'Treat the source', detail:'Footwear, occlusion, tinea pedis reservoir.' },
  ],
  pearls:['Confirm fungal nail infection by clipping/sampling before committing to months of oral terbinafine.'],
  note:'Both classes wreck the fungal membrane; the practical issue is reach — nails and scalp need oral therapy.',
  links:{ patho:'patho-skin-infection', pathoLabel:'Skin infections' },
},
{
  id:'pharma-topical-acne', domain:'Pharmacology', class:'Dermatology', icon:'🧴',
  title:'Topical acne treatments', blurb:'Retinoids, benzoyl peroxide and topical antibiotics — combined to avoid resistance.',
  examples:['Adapalene (retinoid)','Benzoyl peroxide','Topical clindamycin','Azelaic acid'],
  moa:[
    'Retinoids normalise **follicular keratinisation** (unblock comedones); benzoyl peroxide is antibacterial + keratolytic; antibiotics reduce *C. acnes*.',
  ],
  effects:[
    { effect:'Reduce comedones and inflammation', mechanism:'Combined anti-comedonal + antibacterial action.' },
  ],
  adverse:[
    { ae:'Irritation, dryness, photosensitivity (retinoids)', mechanism:'Epidermal turnover; bleaching of fabrics with BPO.' },
    { ae:'Retinoid teratogenicity', mechanism:'Avoid topical/oral retinoids in pregnancy.' },
  ],
  practical:[
    { point:'Combine to limit resistance', detail:'Never use a topical antibiotic alone — pair with BPO or a retinoid.' },
    { point:'Allow 6–8 weeks', detail:'And expect initial irritation; moisturise, use sunscreen.' },
  ],
  pearls:['Topical antibiotics for acne must be combined with benzoyl peroxide or a retinoid to prevent resistance.'],
  note:'Unblock the follicle and kill the bacteria — combination therapy works better and curbs resistance.',
  links:{ patho:'patho-acne', pathoLabel:'Acne', case:'cases/acne.html', caseLabel:'Acne' },
},

/* ---------------- SUPPLEMENTS & REPLACEMENT ---------------- */
{
  id:'pharma-iron', domain:'Pharmacology', class:'Haematology', icon:'🩸',
  title:'Iron replacement', blurb:'Replenish stores in iron-deficiency anaemia — absorption and tolerance dictate dosing.',
  examples:['Ferrous sulfate/fumarate/gluconate (oral)','IV iron (intolerance/malabsorption)'],
  moa:[
    'Provides **elemental iron** for haemoglobin synthesis; absorbed in the duodenum (favoured by an acidic, vitamin-C-rich environment).',
  ],
  effects:[
    { effect:'Rises Hb ~20 g/L per 3–4 weeks', mechanism:'Restored substrate for erythropoiesis.' },
  ],
  adverse:[
    { ae:'GI upset, black stools, constipation', mechanism:'Unabsorbed iron irritates the gut — dose-related.' },
  ],
  practical:[
    { point:'Alternate-day dosing', detail:'Improves fractional absorption and tolerance (hepcidin physiology).' },
    { point:'Continue 3 months after Hb normalises', detail:'To refill stores; recheck FBC/ferritin.' },
    { point:'Always seek the cause', detail:'IDA in men/postmenopausal women → 2WW GI per NG12.' },
  ],
  pearls:['Treating the number without finding the bleeding source can be fatal — investigate the cause of IDA.'],
  note:'Replace the substrate for haemoglobin, but absorption physiology (alternate-day) and the underlying cause matter more than the salt chosen.',
  links:{ patho:'patho-iron-anaemia', pathoLabel:'Iron-deficiency anaemia', case:'cases/iron-deficiency-anaemia.html', caseLabel:'IDA' },
},
{
  id:'pharma-b12-folate', domain:'Pharmacology', class:'Haematology', icon:'🩸',
  title:'B12 & folate replacement', blurb:'Correct megaloblastic anaemia — but B12 first, and the route depends on the cause.',
  examples:['Hydroxocobalamin (IM)','Folic acid (oral)'],
  moa:[
    'B12 and folate are cofactors for **DNA synthesis**; deficiency impairs erythroblast maturation → megaloblastic anaemia.',
  ],
  effects:[
    { effect:'Restores normal erythropoiesis', mechanism:'Cofactors available for DNA synthesis.' },
  ],
  adverse:[
    { ae:'Hypokalaemia on starting', mechanism:'Brisk erythropoiesis consumes potassium — monitor.' },
  ],
  practical:[
    { point:'Replace B12 BEFORE folate', detail:'Folate alone in B12 deficiency can precipitate/worsen subacute combined degeneration of the cord.' },
    { point:'Pernicious anaemia needs IM', detail:'Lifelong hydroxocobalamin; oral fails (no intrinsic factor).' },
    { point:'Folic acid in pregnancy', detail:'400 µg pre-conception (5 mg if high-risk) to prevent neural-tube defects.' },
  ],
  pearls:['Give B12 before folate — folate alone can unmask irreversible neurological damage in B12 deficiency.'],
  note:'Both are DNA-synthesis cofactors, but the order of replacement and the route (IM for pernicious anaemia) are what keep it safe.',
  links:{ patho:'patho-b12-folate', pathoLabel:'B12/folate deficiency' },
},
{
  id:'pharma-vitamind-calcium', domain:'Pharmacology', class:'Endocrine & Metabolic', icon:'🦴',
  title:'Vitamin D & calcium', blurb:'Underpin bone health and are co-prescribed with most bone-protection regimens.',
  examples:['Colecalciferol (D3)','Calcium carbonate (often combined)'],
  moa:[
    'Vitamin D (activated in liver→kidney to calcitriol) drives **intestinal calcium absorption** and bone mineralisation; calcium supplies the substrate.',
  ],
  effects:[
    { effect:'Corrects deficiency, supports bisphosphonate efficacy', mechanism:'Adequate calcium/vitamin D is needed for antiresorptives to work and to avoid hypocalcaemia.' },
  ],
  adverse:[
    { ae:'Constipation, hypercalcaemia (excess)', mechanism:'Calcium load.' },
    { ae:'Renal stones (rare, high-dose)', mechanism:'Hypercalciuria.' },
  ],
  practical:[
    { point:'Co-prescribe with bisphosphonates/denosumab', detail:'Correct deficiency first — denosumab can cause severe hypocalcaemia otherwise.' },
    { point:'Replace deficiency then maintain', detail:'Loading then maintenance dosing for low levels.' },
  ],
  pearls:['Check and correct vitamin D/calcium before starting denosumab to avoid dangerous hypocalcaemia.'],
  note:'Vitamin D opens the door to calcium absorption — both are prerequisites for bone drugs to work safely.',
  links:{ patho:'patho-osteoporosis', pathoLabel:'Osteoporosis', pharma:'pharma-bisphosphonates', pharmaLabel:'Bisphosphonates' },
},
{
  id:'pharma-potassium', domain:'Pharmacology', class:'Renal', icon:'🧂',
  title:'Electrolyte replacement (K⁺)', blurb:'Correct hypokalaemia safely — route and rate matter enormously.',
  examples:['Sando-K (oral)','IV potassium chloride (diluted, monitored)'],
  moa:[
    'Restores **potassium**, essential for membrane potential — cardiac, neuromuscular and renal function.',
  ],
  effects:[
    { effect:'Corrects hypokalaemia', mechanism:'Replaces the deficit; also correct magnesium (needed for K⁺ retention).' },
  ],
  adverse:[
    { ae:'IV too fast → fatal arrhythmia', mechanism:'Never give rapid concentrated IV potassium.' },
    { ae:'Oral GI irritation', mechanism:'High local concentration.' },
  ],
  practical:[
    { point:'Replace magnesium too', detail:'Hypokalaemia is refractory until low magnesium is corrected.' },
    { point:'IV via pump, monitored', detail:'Strict rate limits and cardiac monitoring for higher rates.' },
  ],
  pearls:['You can’t correct potassium while magnesium is low — replace both.'],
  note:'Potassium governs the membrane potential; the dangers are all about route and rate, and the hidden dependence on magnesium.',
  links:{ patho:'patho-aki', pathoLabel:'AKI / electrolytes' },
},

]);
