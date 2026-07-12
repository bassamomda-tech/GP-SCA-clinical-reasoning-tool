/* ============================================================
   Reasoning GP — Ask quality test bank (owner tool)
   ------------------------------------------------------------
   Gold-standard questions with the facts a safe, current answer
   MUST contain. Run from tools/ask-quality.html after any change
   to the library, retrieval, framing or model — every question
   is answered through the exact same pipeline users get, then
   checked for its must-have facts.
   Format: { t: topic, q: question, must: [ [variant, ...], ... ] }
   → PASS = every `must` group has at least ONE variant present
     (case-insensitive substring match).
   ============================================================ */
window.ASK_TESTBANK = [

  /* ---- cardiovascular ---- */
  { t:'Hypertension — first line <55', q:'First-line drug for newly diagnosed hypertension in a 52-year-old white man, no diabetes?',
    must:[ ['ACE','angiotensin'] ], why:'NICE NG136: <55, not Black African → ACE-i/ARB' },
  { t:'Hypertension — Black African', q:'First-line antihypertensive for a 62-year-old Black African woman?',
    must:[ ['calcium','amlodipine'] ], why:'NICE NG136: Black African any age → CCB' },
  { t:'Hypertension — ABPM threshold', q:'What ABPM average confirms stage 1 hypertension?',
    must:[ ['135/85'] ], why:'NICE NG136 stage 1 = ABPM ≥135/85' },
  { t:'AF — stroke risk + anticoagulation', q:'65-year-old with new atrial fibrillation — how do I assess stroke risk and what anticoagulation is first line?',
    must:[ ['CHA','CHADS'], ['DOAC','apixaban','edoxaban','rivaroxaban','dabigatran'] ], why:'CHA2DS2-VASc; DOAC first line (NICE NG196)' },
  { t:'Statin — primary prevention', q:'Which statin and dose for primary prevention of cardiovascular disease?',
    must:[ ['atorvastatin'], ['20 mg','20mg'] ], why:'Atorvastatin 20 mg od (NICE CG181)' },
  { t:'DVT — assessment', q:'Patient with a unilaterally swollen calf — how do I assess for DVT in primary care?',
    must:[ ['Wells'], ['D-dimer','d dimer','D\u2011dimer'] ], why:'Two-level Wells → D-dimer / proximal leg USS (NICE NG158)' },

  /* ---- respiratory ---- */
  { t:'Asthma — first-line adult', q:'First-line maintenance treatment for newly diagnosed asthma in an adult?',
    must:[ ['ICS','inhaled corticosteroid','formoterol','AIR','MART'] ], why:'BTS/NICE/SIGN 2024: low-dose ICS/formoterol (AIR/MART) pathway' },
  { t:'COPD — exacerbation', q:'How do I manage an infective exacerbation of COPD in the community?',
    must:[ ['prednisolone'], ['amoxicillin','doxycycline'] ], why:'Pred 30 mg 5 days + first-line antibiotic (NICE NG114)' },
  { t:'Croup', q:'Treatment for a 2-year-old with mild croup?',
    must:[ ['dexamethasone'], ['0.15'] ], why:'Single dose dexamethasone 0.15 mg/kg (NICE CKS)' },

  /* ---- infection / antimicrobials ---- */
  { t:'UTI — uncomplicated woman', q:'Antibiotic choice and duration for an uncomplicated UTI in a non-pregnant woman?',
    must:[ ['nitrofurantoin'], ['3 day','3-day','three day','3\u2011day'] ], why:'Nitrofurantoin 3 days (NICE NG109)' },
  { t:'UTI — pregnancy', q:'How do I treat a UTI in a pregnant woman at 20 weeks?',
    must:[ ['nitrofurantoin','cefalexin'], ['7 day','7-day','seven day'] ], why:'7-day course; nitrofurantoin (avoid at term) or cefalexin (NICE NG109)' },
  { t:'Sore throat — scoring', q:'When should I prescribe antibiotics for acute sore throat and what first line?',
    must:[ ['FeverPAIN','Centor'], ['phenoxymethylpenicillin','penicillin V'] ], why:'FeverPAIN/Centor; phenoxymethylpenicillin 5–10 days (NICE NG84)' },
  { t:'Otitis media — child', q:'First-line antibiotic for acute otitis media in a child when one is needed?',
    must:[ ['amoxicillin'] ], why:'Amoxicillin 5–7 days; most resolve without (NICE NG91)' },
  { t:'H. pylori eradication', q:'First-line H. pylori eradication regimen?',
    must:[ ['PPI','omeprazole','lansoprazole'], ['amoxicillin'], ['clarithromycin','metronidazole'], ['7 day','7-day','seven day'] ], why:'PPI + amoxicillin + clari/metro BD 7 days (NICE CG184)' },
  { t:'Shingles — treatment window', q:'A 70-year-old presents with shingles — do I treat, and with what?',
    must:[ ['aciclovir','valaciclovir','famciclovir'], ['72'] ], why:'Antiviral within 72 h of rash onset (NICE CKS)' },
  { t:'Chickenpox contact in pregnancy', q:'Pregnant woman with no history of chickenpox exposed to chickenpox — what do I do?',
    must:[ ['varicella','VZV'], ['immunoglobulin','VZIG','aciclovir','antibod'] ], why:'Check VZV IgG; PEP per UKHSA (antivirals/VZIG)' },
  { t:'Scabies', q:'Treatment for scabies?',
    must:[ ['permethrin'], ['household','contacts'] ], why:'Permethrin 5% whole household simultaneously (NICE CKS)' },

  /* ---- NICE NG12 2-week-wait ---- */
  { t:'NG12 — bowel (FIT)', q:'58-year-old with a 6-week change in bowel habit — do I need to refer?',
    must:[ ['FIT','faecal immunochemical'], ['2WW','two-week','2-week','urgent suspected','USC'] ], why:'FIT ≥10 → USC colorectal (NG12/DG56)' },
  { t:'NG12 — post-menopausal bleeding', q:'62-year-old with an episode of post-menopausal bleeding — what now?',
    must:[ ['2WW','two-week','2-week','urgent suspected','USC'], ['endometrial','gynae'] ], why:'PMB 55+ → USC endometrial (NG12)' },
  { t:'NG12 — visible haematuria', q:'60-year-old with painless visible haematuria — what is the pathway?',
    must:[ ['2WW','two-week','2-week','urgent suspected','USC'], ['bladder','urolog','renal'] ], why:'45+ unexplained visible haematuria → USC bladder/renal (NG12)' },
  { t:'NG12 — weight loss + IDA', q:'67-year-old man with unexplained weight loss and iron-deficiency anaemia — what now?',
    must:[ ['2WW','two-week','2-week','urgent suspected','USC','FIT'], ['colorectal','gastrointestinal','GI cancer'] ], why:'IDA + weight loss → FIT + USC colorectal (NG12)' },
  { t:'NG12 — breast lump', q:'35-year-old woman with a discrete breast lump — how urgently should she be seen?',
    must:[ ['2WW','two-week','2-week','urgent suspected','USC'] ], why:'30+ unexplained breast lump → USC breast (NG12)' },
  { t:'NG12 — ovarian (CA-125)', q:'58-year-old woman with persistent bloating and early satiety — what tests?',
    must:[ ['CA-125','CA125','CA\u2011125'], ['ovarian'] ], why:'CA-125 first (≥35 → USS) — ovarian pathway (NG12)' },
  { t:'NG12 — PSA', q:'When does a raised PSA warrant urgent referral?',
    must:[ ['age-specific','age specific','age\u2011specific'] ], why:'PSA above age-specific range → USC prostate (NG12)' },
  { t:'NG12 — child petechiae', q:'A feverish 4-year-old has unexplained petechiae — what must I do?',
    must:[ ['immediate','same day','same-day','emergency','999','very urgent'], ['FBC','full blood count','meningococc'] ], why:'Very urgent FBC + immediate paediatric assessment (NG12 CYP / meningococcal)' },

  /* ---- endocrine / metabolic / haematology ---- */
  { t:'T2DM — first line', q:'First-line drug treatment for type 2 diabetes?',
    must:[ ['metformin'] ], why:'Metformin first line (NICE NG28)' },
  { t:'Diabetes — diagnostic HbA1c', q:'What HbA1c confirms a diagnosis of type 2 diabetes?',
    must:[ ['48'] ], why:'HbA1c ≥48 mmol/mol (repeat if asymptomatic)' },
  { t:'Folate deficiency', q:'How do I treat folate deficiency anaemia?',
    must:[ ['5 mg','5mg'], ['4 month','four month','4-month','four-month'] ], why:'Folic acid 5 mg od ~4 months (BNF/CKS); check B12 first' },
  { t:'B12 — pernicious anaemia', q:'Treatment of B12 deficiency due to pernicious anaemia?',
    must:[ ['hydroxocobalamin'], ['intramuscular','IM '] ], why:'IM hydroxocobalamin, lifelong maintenance (CKS)' },
  { t:'Hypothyroidism — starting', q:'Starting dose of levothyroxine for an otherwise healthy 45-year-old with overt hypothyroidism?',
    must:[ ['levothyroxine'], ['1.6','100 ','50 '] ], why:'~1.6 µg/kg/day (NICE NG145); recheck TSH 6–8 wks' },
  { t:'Gout — acute', q:'First-line treatment for an acute gout flare?',
    must:[ ['NSAID','naproxen','colchicine'] ], why:'NSAID or colchicine (NICE NG219)' },
  { t:'Gout — allopurinol start', q:'How do I start allopurinol after a gout flare has settled?',
    must:[ ['100 mg','100mg'], ['urate'] ], why:'Start 100 mg od, titrate to serum urate target (NG219)' },
  { t:'PMR', q:'Starting treatment for polymyalgia rheumatica?',
    must:[ ['prednisolone'], ['15 mg','15mg'] ], why:'Prednisolone 15 mg od with dramatic-response review (CKS)' },
  { t:'GCA — urgent', q:'72-year-old with new temporal headache and jaw claudication — what do I do today?',
    must:[ ['prednisolone'], ['urgent','same day','same-day','immediate'] ], why:'Start high-dose pred + urgent specialist referral (GCA)' },
  { t:'Hyperkalaemia — severe', q:'Routine bloods show potassium 6.7 — what do I do?',
    must:[ ['admit','same day','same-day','emergency','urgent','999','hospital'], ['ECG'] ], why:'K+ ≥6.5 = emergency admission + ECG' },
  { t:'AKI — sick day rules', q:'Which medicines should be paused during acute illness with dehydration?',
    must:[ ['ACE','NSAID','metformin','diuretic','SGLT2'], ['stop','hold','withhold','pause','suspend'] ], why:'Sick-day rules: hold ACEi/ARB, diuretics, NSAIDs, metformin, SGLT2i' },
  { t:'CKD — referral markers', q:'Which results should prompt nephrology referral in CKD?',
    must:[ ['ACR'], ['eGFR'] ], why:'eGFR/ACR thresholds (NICE NG203)' },

  /* ---- women's health / contraception ---- */
  { t:'HRT — uterus intact', q:'What HRT regimen for a 53-year-old with a uterus?',
    must:[ ['progestogen','combined'], ['oestrogen','estrogen'] ], why:'Oestrogen + progestogen (endometrial protection) — NG23' },
  { t:'COCP — migraine with aura', q:'Can a woman with migraine with aura use the combined pill?',
    must:[ ['contraindicated','UKMEC'] ], why:'UKMEC 4 — absolute contraindication' },

  /* ---- mental health / neuro / MSK / eye ---- */
  { t:'Depression — first-line drug', q:'First-line antidepressant class for moderate depression in an adult?',
    must:[ ['SSRI','sertraline'] ], why:'SSRI first line (NICE NG222)' },
  { t:'Headache — red flags', q:'What are the red flags in a patient presenting with headache?',
    must:[ ['thunderclap'], ['papilloedema','papilledema','raised intracranial'] ], why:'Must include thunderclap + raised ICP signs' },
  { t:'Back pain — red flags', q:'Red flags in acute low back pain with leg symptoms?',
    must:[ ['cauda equina'], ['saddle','urinary','bladder','retention'] ], why:'Cauda equina features = emergency' },
  { t:'Red eye — urgent', q:'Painful red eye with reduced vision — how urgently should this be seen?',
    must:[ ['same day','same-day','urgent','emergency','ophthalm'] ], why:'Sight-threatening until proven otherwise — same-day ophthalmology' },

  /* ---- dermatology ---- */
  { t:'Eczema — flare', q:'How do I manage an eczema flare on the limbs in an adult?',
    must:[ ['steroid','corticosteroid','betamethasone','hydrocortisone'], ['emollient'] ], why:'Topical corticosteroid + continued emollients (CKS)' },

  /* ---- contraception / UKMEC 2025 (added after the postpartum-patch incident) ---- */
  { t:'Postpartum — CHC patch, breastfeeding 8 wks', q:'Can I prescribe a contraceptive patch for a 30-year-old who gave birth 8 weeks ago and is breastfeeding?',
    must:[ ['UKMEC 2025'], ['category 2','ukmec 2'] ], why:'UKMEC 2025: breastfeeding ≥6 wks–<6 months, CHC = category 2 (can be offered). NOT WHO MEC 3, NOT "avoid"' },
  { t:'Postpartum — CHC, not breastfeeding', q:'When can a woman who is not breastfeeding start the combined pill after giving birth?',
    must:[ ['3 week','three week','21 day'], ['VTE','thrombo','clot'] ], why:'UKMEC 2025: from 3 weeks if no VTE risk factors; ≥6 weeks unrestricted' },
  { t:'Postpartum — CHC <6 wks breastfeeding', q:'Combined pill for a breastfeeding mother 4 weeks after delivery?',
    must:[ ['UKMEC'], ['4','do not','not use','avoid'] ], why:'UKMEC 4 at 0–<6 weeks breastfeeding — do not use' },
  { t:'Postpartum — when contraception needed', q:'How soon after giving birth does a woman need contraception?',
    must:[ ['21','day 21','three week','3 week'] ], why:'Fertility can return from day 21 postpartum' },
  { t:'Postpartum — POP timing', q:'Can the progestogen-only pill be started straight after delivery while breastfeeding?',
    must:[ ['any time','anytime','yes','immediately','straight away'] ], why:'POP/implant: any time postpartum, UKMEC 1' },
  { t:'Postpartum — IUD timing', q:'When can a copper coil be fitted after childbirth?',
    must:[ ['48 hour','48h','48-hour'], ['4 week','four week','28 day'] ], why:'Within 48 h of birth OR from 4 weeks; between = UKMEC 3' },
  { t:'UKMEC — current edition', q:'Which edition of the UKMEC is current for contraceptive eligibility?',
    must:[ ['2025'] ], why:'UKMEC 2025 (CoSRH, Dec 2025) supersedes UKMEC 2016 — a "2016" or "2023" answer is stale' },
  { t:'UKMEC — aura', q:'Is the combined pill safe in migraine with aura?',
    must:[ ['UKMEC'], ['4','contraindicated'] ], why:'UKMEC 4 at any age' },
  { t:'UKMEC — smoker over 35', q:'Can a 38-year-old smoking 15 a day use the combined pill?',
    must:[ ['UKMEC','contraindicated','category 4','not'] ], why:'Smoking ≥15/day aged ≥35 = UKMEC 4 for CHC' },
  { t:'Emergency contraception — options', q:'A woman had unprotected sex 4 days ago — what emergency contraception can I offer?',
    must:[ ['copper','Cu-IUD','IUD'], ['ulipristal','ellaOne'] ], why:'Cu-IUD up to 5 days (most effective) + ulipristal 120 h; levonorgestrel only ≤72 h' }
];
