/* ============================================================
   Reasoning GP — Evidence-Based Medicine: 50+ high-yield topics
   The interventions a UK GP / SCA candidate is asked about most.
   Sourced from TheNNT, Cochrane, NICE/CKS, GPevidence and the major
   landmark trials. Educational synthesis — verify against the primary
   source and current NICE/BNF before acting.

   verdict: 'help'  = good evidence of net benefit
            'nuance'= benefit only in selected patients / modest
            'none'  = little or no benefit over placebo/alternative
            'harm'  = evidence of net harm / avoid
   numbers: NNT/NNH or effect size — qualitative where a precise
            figure isn't robust (we never fabricate exact numbers).
   detail : the written evidence — what the trials show, the size of
            benefit and harm, and the practical bottom line.
   ============================================================ */
window.EBM_TOPICS = [

  /* ---------------- Cardiovascular ---------------- */
  { id:'statin-primary', cat:'Cardiovascular', name:'Statins — primary prevention (QRISK ≥10%)', verdict:'help',
    numbers:'NNT ≈ 100 over 5 yrs to prevent one MI/stroke (higher baseline risk → lower NNT). No clear all-cause mortality benefit in low-risk groups.',
    detail:'The Cholesterol Treatment Trialists\u2019 meta-analyses (>170,000 patients) show each 1 mmol/L fall in LDL cuts major vascular events by about a fifth per year. In genuinely low-risk primary prevention the absolute gain is small — roughly 1 in 100 over 5 years avoids an event — and a mortality signal is hard to detect, which is why treatment is offered by overall risk (QRISK ≥10%) rather than cholesterol alone. Muscle aches are reported by up to 1 in 10 but blinded n-of-1 and SAMSON-type studies show the large majority are not caused by the drug (nocebo effect); true myositis/rhabdomyolysis is rare (<1 in 10,000). Statins do not meaningfully raise serious harm, and the diabetes-incidence signal is small and outweighed by vascular benefit in those who qualify.',
    note:'Offer atorvastatin 20 mg when 10-yr CVD risk ≥10%. Frame benefit in absolute terms; reassure about muscle symptoms and re-challenge.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/statins-for-heart-disease-prevention-without-prior-heart-disease/'} },

  { id:'statin-secondary', cat:'Cardiovascular', name:'Statins — secondary prevention (known CVD)', verdict:'help',
    numbers:'NNT ≈ 39 over 5 yrs to prevent one major vascular event; ≈ 83 to prevent one death.',
    detail:'In patients with established coronary disease, stroke or PAD the baseline risk is high, so the same proportional LDL benefit translates into a large absolute gain. Landmark trials (4S, HPS, PROVE-IT, IMPROVE-IT) show high-intensity statins reduce recurrent MI, stroke, revascularisation and cardiovascular death, with a clear all-cause mortality benefit in this group. Lower is better: adding ezetimibe (or a PCSK9 inhibitor) for those not at target gives further proportional risk reduction. This is one of the highest-value long-term interventions in primary care and should rarely be stopped for mild muscle symptoms without a structured re-challenge.',
    note:'High-intensity atorvastatin 80 mg after MI/stroke/PAD. Aim for ≥40% LDL reduction; add ezetimibe if not at target.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/statins-for-heart-disease-prevention-with-known-heart-disease/'} },

  { id:'aspirin-primary', cat:'Cardiovascular', name:'Aspirin — primary prevention', verdict:'harm',
    numbers:'No net benefit: a small fall in CV events is offset by NNH ≈ 200 for a major bleed.',
    detail:'The three big modern trials — ASPREE (healthy elderly), ARRIVE (moderate risk) and ASCEND (diabetes) — together settled this. Aspirin produces only a marginal reduction in non-fatal cardiovascular events and no mortality benefit, while significantly increasing major gastrointestinal and intracranial bleeding; in ASPREE there was even a small excess of all-cause mortality in healthy over-70s. The bleeding harm cancels the vascular gain in people without established disease, so the risk\u2013benefit balance is unfavourable for primary prevention at any age.',
    note:'Do not use for primary prevention (including in diabetes or the elderly). Reserve antiplatelets for secondary prevention.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/aspirin-to-prevent-a-first-heart-attack-or-stroke/'} },

  { id:'aspirin-secondary', cat:'Cardiovascular', name:'Aspirin — secondary prevention', verdict:'help',
    numbers:'NNT ≈ 50 over ~2 yrs to prevent one serious vascular event after MI/stroke.',
    detail:'The Antithrombotic Trialists\u2019 Collaboration showed that after an established atherothrombotic event, aspirin reduces the combined risk of further MI, stroke and vascular death by about a quarter. Because these patients are at high recurrent risk, the absolute benefit clearly outweighs the bleeding risk (the reverse of the primary-prevention picture). Low-dose 75 mg is as effective as higher doses with less GI harm. After ACS or stenting, dual antiplatelet therapy is used for a defined period before stepping back to a single agent.',
    note:'Lifelong aspirin 75 mg after MI/ischaemic stroke/PAD unless anticoagulated or contraindicated; clopidogrel if aspirin-intolerant.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/aspirin-to-prevent-a-second-heart-attack-or-stroke/'} },

  { id:'doac-af', cat:'Cardiovascular', name:'Anticoagulation (DOAC) in AF', verdict:'help',
    numbers:'NNT ≈ 25/yr to prevent one stroke (rises with CHA₂DS₂-VASc); NNH ≈ 80–100 for a major bleed.',
    detail:'Anticoagulation reduces AF-related ischaemic stroke by roughly two-thirds — far more effective than aspirin, which is no longer recommended for stroke prevention in AF. The four pivotal DOAC trials (RE-LY, ROCKET-AF, ARISTOTLE, ENGAGE AF) showed DOACs are at least as effective as warfarin with significantly less intracranial haemorrhage and no INR monitoring, which is why NICE makes them first-line. Absolute benefit scales with CHA₂DS₂-VASc, so the decision is driven by that score; HAS-BLED/ORBIT flag modifiable bleeding risks (BP, alcohol, concomitant NSAID/antiplatelet) to optimise — not a reason to withhold anticoagulation.',
    note:'DOAC first-line (NICE NG196). Offer if CHA₂DS₂-VASc ≥2 (men) / ≥3 (women); consider if 1. Address modifiable bleeding risk; don\u2019t use HAS-BLED to deny treatment.',
    src:{label:'NICE NG196', url:'https://www.nice.org.uk/guidance/ng196'} },

  { id:'doac-vte', cat:'Cardiovascular', name:'Anticoagulation in DVT/PE', verdict:'help',
    numbers:'Large reduction in recurrent VTE and fatal PE; major-bleed NNH modest.',
    detail:'Anticoagulation is the established treatment for venous thromboembolism, markedly reducing clot extension, recurrence and fatal PE. DOAC trials (EINSTEIN, AMPLIFY, Hokusai-VTE) showed non-inferior efficacy to warfarin with less major bleeding and the convenience of fixed oral dosing, making apixaban or rivaroxaban first-line in NICE NG158. Duration is the key judgement: 3 months is sufficient for a provoked clot once the provoking factor resolves, whereas unprovoked VTE or persistent risk (e.g. active cancer, thrombophilia) warrants extended or indefinite therapy, balancing recurrence risk against bleeding.',
    note:'DOAC first-line (NICE NG158). 3 months if provoked & resolved; consider indefinite if unprovoked or ongoing risk; LMWH/DOAC in active cancer.',
    src:{label:'NICE NG158', url:'https://www.nice.org.uk/guidance/ng158'} },

  { id:'antihtn', cat:'Cardiovascular', name:'Antihypertensives — CVD prevention', verdict:'help',
    numbers:'NNT ≈ 100/5 yrs (mild HTN, low risk) → far lower at higher risk. Larger effect on stroke than MI.',
    detail:'Meta-analyses show each 10 mmHg fall in systolic BP reduces stroke by ~27% and coronary events by ~17%, with benefit across the spectrum of baseline risk. The absolute gain depends on starting risk: treating mild hypertension in an otherwise low-risk person prevents few events, whereas treating higher-risk patients (prior CVD, diabetes, CKD, older age) prevents many — hence NICE bases drug treatment on stage plus overall risk/target-organ damage. SPRINT suggested tighter control benefits selected high-risk patients but at the cost of more hypotension/AKI, so targets are individualised. Drug class matters less than the BP reduction achieved.',
    note:'Treat per NICE NG136. Target clinic BP <140/90 (<150/90 if ≥80). Biggest absolute benefit in higher baseline risk.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/anti-hypertensives-to-prevent-death-heart-attacks-and-strokes/'} },

  { id:'acei-hf', cat:'Cardiovascular', name:'ACE inhibitor in HF (reduced EF)', verdict:'help',
    numbers:'NNT ≈ 20 over ~3 yrs to prevent one death; reduces HF hospitalisation.',
    detail:'ACE inhibitors were the first drugs proven to prolong life in heart failure with reduced ejection fraction (SOLVD, CONSENSUS), reducing mortality and hospitalisation by interrupting the renin\u2013angiotensin\u2013aldosterone cascade that drives adverse remodelling. They form one of the "four pillars" of HFrEF therapy alongside a beta-blocker, a mineralocorticoid-receptor antagonist and an SGLT2 inhibitor (or sacubitril\u2013valsartan in place of the ACEi). Benefit is dose-related, so titrate to the maximum tolerated dose, monitoring U&E and BP; an ARB is substituted only if the ACEi causes cough or angioedema.',
    note:'Cornerstone of HFrEF therapy. Titrate to target dose; check U&E within 1–2 weeks of starting/up-titrating.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/ace-inhibitors-arbs-for-heart-failure/'} },

  { id:'sglt2-hf', cat:'Cardiovascular', name:'SGLT2 inhibitor in heart failure', verdict:'help',
    numbers:'NNT ≈ 20 over ~2 yrs to prevent one HF hospitalisation/CV death — benefit across the EF spectrum.',
    detail:'SGLT2 inhibitors are the newest pillar of heart-failure care. DAPA-HF and EMPEROR-Reduced showed dapagliflozin and empagliflozin cut the combined risk of worsening heart failure and cardiovascular death in HFrEF regardless of diabetes status, and DELIVER/EMPEROR-Preserved then extended the benefit to preserved ejection fraction — the first therapy to do so convincingly. The effect appears within weeks and is additive to the other pillars. They are generally well tolerated; the main practical points are genital mycotic infections, the need for sick-day rules (euglycaemic DKA risk) and a small initial eGFR dip that is expected and reversible.',
    note:'Add dapagliflozin/empagliflozin for HF regardless of diabetes (NICE). Counsel on sick-day rules and genital hygiene.',
    src:{label:'NICE', url:'https://www.nice.org.uk/guidance/ta902'} },

  { id:'bb-hf', cat:'Cardiovascular', name:'Beta-blocker in HF (reduced EF)', verdict:'help',
    numbers:'NNT ≈ 23 over ~1 yr to prevent one death in HFrEF.',
    detail:'Although counter-intuitive in a failing heart, beta-blockers prolong life in stable HFrEF (CIBIS-II, MERIT-HF, COPERNICUS) by blunting chronic sympathetic overdrive, reducing arrhythmic death and allowing reverse remodelling. Only bisoprolol, carvedilol and nebivolol have a robust evidence base, so use one of these. The key practical rule is to start low and up-titrate slowly while the patient is euvolaemic — never initiate during acute decompensation — because transient negative inotropy can worsen symptoms before the long-term benefit emerges.',
    note:'Bisoprolol/carvedilol/nebivolol. Start low, go slow; do not start in acute decompensation.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/beta-blockers-for-heart-failure/'} },

  /* ---------------- Diabetes / Endocrine ---------------- */
  { id:'metformin', cat:'Diabetes & endocrine', name:'Metformin in type 2 diabetes', verdict:'help',
    numbers:'UKPDS: reduced diabetes-related death and MI in overweight patients; weight-neutral, no hypos.',
    detail:'In the UKPDS overweight cohort metformin was the only glucose-lowering drug to reduce diabetes-related death and myocardial infarction, an effect that persisted in 10-year follow-up ("legacy effect"). It lowers HbA1c by around 1\u20131.5% without causing weight gain or hypoglycaemia, and is cheap and well established, which is why it remains first-line in NICE NG28. The main limits are GI intolerance (mitigated by modified-release and slow titration) and the need to withhold/stop as renal function falls (avoid if eGFR <30) and during acute illness to reduce lactic-acidosis risk. Long-term use can lower B12.',
    note:'First-line in T2DM (NICE NG28). Use MR if GI upset; review dose by eGFR; check B12 if symptomatic.',
    src:{label:'NICE NG28', url:'https://www.nice.org.uk/guidance/ng28'} },

  { id:'sglt2-renal', cat:'Diabetes & endocrine', name:'SGLT2 inhibitor — CKD / CV protection', verdict:'help',
    numbers:'Reduces CKD progression, HF hospitalisation and CV death; favourable NNT in albuminuric CKD.',
    detail:'Beyond glucose lowering, SGLT2 inhibitors protect the kidney and heart. CREDENCE (canagliflozin) and DAPA-CKD/EMPA-KIDNEY (dapagliflozin/empagliflozin) showed slowed progression to end-stage kidney disease, fewer cardiovascular events and reduced mortality in chronic kidney disease — and crucially the kidney benefit held even in people without diabetes. The mechanism is haemodynamic (reduced intraglomerular pressure), which also explains the small, expected, reversible early eGFR dip. NICE now recommends adding an SGLT2 inhibitor in CKD with albuminuria alongside an ACEi/ARB.',
    note:'Add for T2DM with CVD/HF/CKD, and in CKD with ACR ≥3 mg/mmol regardless of diabetes (NICE NG203). Sick-day rules.',
    src:{label:'NICE NG203', url:'https://www.nice.org.uk/guidance/ng203'} },

  { id:'glp1', cat:'Diabetes & endocrine', name:'GLP-1 receptor agonist', verdict:'help',
    numbers:'Reduces major adverse CV events in high-risk T2DM; substantial weight loss.',
    detail:'GLP-1 receptor agonists (e.g. semaglutide, liraglutide, dulaglutide) lower HbA1c, drive clinically meaningful weight loss and — in cardiovascular outcome trials such as LEADER and SUSTAIN-6 — reduced major adverse cardiovascular events in people with type 2 diabetes and established or high cardiovascular risk. They rarely cause hypoglycaemia alone. The dominant adverse effects are gastrointestinal (nausea, vomiting), mitigated by slow up-titration, and they should be paused for sick-days/dehydration. Semaglutide and tirzepatide are also licensed for weight management.',
    note:'Option for T2DM with obesity/high CV risk per NICE criteria. Titrate slowly to limit GI effects.',
    src:{label:'NICE NG28', url:'https://www.nice.org.uk/guidance/ng28'} },

  { id:'tight-glucose', cat:'Diabetes & endocrine', name:'Very tight glycaemic control', verdict:'nuance',
    numbers:'Microvascular benefit, but ACCORD showed excess mortality with very tight targets; NNH for severe hypo.',
    detail:'Tighter glucose control reliably reduces microvascular complications (retinopathy, nephropathy, neuropathy), but the macrovascular and mortality story is more cautionary. ACCORD was stopped early because intensively lowering HbA1c below ~6% increased all-cause mortality, and ADVANCE/VADT found no macrovascular benefit from very tight control. The harm is driven largely by severe hypoglycaemia, which is especially dangerous in frail, elderly or long-duration patients. The lesson is to individualise targets — tighter in young, newly diagnosed patients; relaxed (e.g. 58\u201364 mmol/mol) in frailty — and to avoid over-treatment.',
    note:'Individualise HbA1c. Relax targets and deprescribe in frailty/elderly to avoid hypoglycaemia.',
    src:{label:'GPevidence', url:'https://gpevidence.org/'} },

  { id:'levothyroxine-subclinical', cat:'Diabetes & endocrine', name:'Levothyroxine for subclinical hypothyroidism', verdict:'none',
    numbers:'No improvement in symptoms or quality of life in most trials (especially TSH <10, older adults).',
    detail:'Subclinical hypothyroidism (raised TSH, normal free T4) is common and often over-treated. The TRUST trial and a large meta-analysis (JAMA 2018) found that giving levothyroxine to older adults with TSH below 10 produced no improvement in tiredness, mood, cognition or quality of life despite normalising TSH — patients felt no better. Treatment is therefore reserved for those most likely to benefit or progress: TSH persistently ≥10, symptomatic younger patients who are TPO-antibody positive, or women who are pregnant or planning pregnancy. Otherwise the right action is to recheck and monitor, avoiding lifelong medicalisation.',
    note:'Treat if TSH ≥10, or symptomatic/antibody-positive/pre-pregnancy. Otherwise repeat in a few months and monitor.',
    src:{label:'GPevidence', url:'https://gpevidence.org/'} },

  /* ---------------- Respiratory ---------------- */
  { id:'ics-asthma', cat:'Respiratory', name:'Inhaled corticosteroid in asthma', verdict:'help',
    numbers:'Major reduction in exacerbations and asthma deaths; the single most important asthma intervention.',
    detail:'Inhaled corticosteroids treat the underlying airway inflammation, and observational and trial data show they substantially reduce exacerbations, hospital admissions and asthma death. The National Review of Asthma Deaths found most fatalities occurred in patients over-reliant on short-acting relievers with inadequate ICS — over-use of SABA is a marker of risk, not control. The 2024 BTS/NICE/SIGN guidance therefore abandons SABA-only treatment in favour of ICS-formoterol regimens (anti-inflammatory reliever, or MART), which cut severe exacerbations compared with SABA reliever strategies. Adherence and inhaler technique are the highest-yield things to check.',
    note:'Never SABA alone. Use ICS-formoterol (AIR/MART) per NICE NG245; check adherence + technique first at every review.',
    src:{label:'NICE NG245', url:'https://www.nice.org.uk/guidance/ng245'} },

  { id:'abx-copd', cat:'Respiratory', name:'Antibiotics for COPD exacerbation', verdict:'nuance',
    numbers:'Benefit mainly when sputum is purulent or the patient is more unwell; modest otherwise.',
    detail:'Antibiotics help a defined subset of exacerbations. Anthonisen\u2019s classic work and subsequent reviews show the benefit is greatest when there is increased sputum purulence plus increased volume and/or breathlessness, or when the patient is systemically unwell — the purulence is a reasonable bedside marker of bacterial involvement. In milder, non-purulent exacerbations antibiotics add little over a short course of oral corticosteroid and bronchodilator optimisation. NICE NG114 therefore advises judging severity and sputum rather than reflex prescribing, with a 5-day course when indicated.',
    note:'Use purulence + increased dyspnoea/volume to guide. 5-day course; pair with prednisolone (NICE NG114).',
    src:{label:'NICE NG114', url:'https://www.nice.org.uk/guidance/ng114'} },

  { id:'abx-bronchitis', cat:'Respiratory', name:'Antibiotics for acute bronchitis', verdict:'none',
    numbers:'Cochrane: cough ~½ day shorter at the cost of more side-effects; no meaningful benefit in healthy adults.',
    detail:'Acute bronchitis is overwhelmingly viral and self-limiting. The Cochrane review found antibiotics shorten cough by less than a day on average in otherwise healthy adults, while measurably increasing adverse effects such as nausea, diarrhoea and rash — a poor trade and a driver of antimicrobial resistance. The evidence supports not prescribing for most patients, instead explaining the natural 3\u2013week course, offering symptomatic advice, and safety-netting for red flags (focal chest signs, breathlessness, sustained fever) that would suggest pneumonia. A back-up/delayed prescription is a reasonable compromise in higher-risk patients.',
    note:'Self-limiting; explain natural course and safety-net. Consider a delayed script only if higher risk.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/antibiotics-for-acute-bronchitis/'} },

  { id:'oseltamivir', cat:'Respiratory', name:'Oseltamivir (Tamiflu) for influenza', verdict:'none',
    numbers:'Shortens symptoms by ~½–1 day in healthy adults; NNH for nausea/vomiting. No solid reduction in hospitalisation.',
    detail:'The 2014 Cochrane review (which obtained the full clinical study reports) concluded oseltamivir reduces the duration of influenza symptoms by roughly half a day to a day in healthy adults, with no reliable evidence that it reduces hospitalisations or serious complications, and with a measurable increase in nausea and vomiting. The headline claims that drove government stockpiling were not supported once unpublished data were included. There remains a reasonable case for use in genuinely at-risk groups during confirmed circulating influenza, but it is not a treatment for routine healthy adults.',
    note:'Reserve for at-risk groups during circulating flu (UKHSA/NICE), started early. Not for routine healthy adults.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/neuraminidase-inhibitors-tamiflu-relenza-influenza/'} },

  /* ---------------- Infections / antibiotics ---------------- */
  { id:'abx-sorethroat', cat:'Infections', name:'Antibiotics for sore throat', verdict:'nuance',
    numbers:'NNT ≈ 6 for symptom relief at day 3 — but most are viral; NNH ≈ 14 for diarrhoea.',
    detail:'Most sore throats are viral and resolve in about a week whether or not antibiotics are given. Cochrane shows antibiotics shorten symptoms by around 16 hours on average and reduce suppurative complications (which are now rare in developed settings), so the absolute benefit is small and must be weighed against side-effects and resistance. The practical approach is to target the minority with likely streptococcal infection using FeverPAIN or Centor scores: low scores get analgesia and safety-netting, high scores (FeverPAIN 4\u20135) are where immediate or back-up antibiotics are most justified. Penicillin remains first-line.',
    note:'Use FeverPAIN/Centor to target. Most need only analgesia + safety-net; phenoxymethylpenicillin if scored high (NICE NG84).',
    src:{label:'NICE NG84', url:'https://www.nice.org.uk/guidance/ng84'} },

  { id:'abx-otitis', cat:'Infections', name:'Antibiotics for acute otitis media', verdict:'nuance',
    numbers:'NNT ≈ 20 for pain at 2–3 days; most resolve spontaneously. NNH for rash/diarrhoea.',
    detail:'Cochrane data show acute otitis media in children is largely self-limiting: antibiotics make no difference to pain in the first 24 hours and only modestly reduce pain at 2\u20133 days (NNT ~20), without reducing recurrences or hearing loss, while increasing diarrhoea, vomiting and rash. The children who do benefit more are those under 2 with bilateral disease, those with otorrhoea, and those who are systemically unwell. NICE NG91 therefore recommends no antibiotic or a back-up prescription for most, reserving immediate antibiotics for those specific higher-risk groups, with analgesia central for all.',
    note:'No/back-up antibiotic for most; immediate if <2 yrs bilateral, otorrhoea, or systemically unwell (NICE NG91). Regular analgesia.',
    src:{label:'NICE NG91', url:'https://www.nice.org.uk/guidance/ng91'} },

  { id:'abx-sinusitis', cat:'Infections', name:'Antibiotics for acute sinusitis', verdict:'none',
    numbers:'Minimal benefit; most improve without antibiotics by ~2–3 weeks.',
    detail:'Acute sinusitis is usually viral and resolves over 2\u20133 weeks. Cochrane and the NICE review found antibiotics confer little benefit even when symptoms have lasted ten days, because purulent nasal discharge and facial pain do not reliably indicate a bacterial cause. The evidence supports symptomatic management and, for symptoms persisting beyond about ten days, a high-dose intranasal corticosteroid rather than antibiotics. A back-up antibiotic can be offered for deterioration, with immediate treatment only for systemically very unwell patients or those at risk of serious complications.',
    note:'No/back-up antibiotic; high-dose nasal steroid if symptoms ≥10 days (NICE NG79).',
    src:{label:'NICE NG79', url:'https://www.nice.org.uk/guidance/ng79'} },

  { id:'abx-uti', cat:'Infections', name:'Antibiotics for lower UTI (women)', verdict:'help',
    numbers:'Clear symptom benefit and faster resolution vs placebo in symptomatic UTI.',
    detail:'In non-pregnant women with symptomatic lower urinary tract infection, antibiotics clearly shorten symptoms and speed bacteriological cure compared with placebo, and a short course is as effective as a long one. NICE NG109 makes nitrofurantoin first-line for 3 days (provided eGFR is adequate), reflecting both efficacy and local resistance patterns. The important counterpoint is diagnostic discipline: treating asymptomatic bacteriuria provides no benefit and drives resistance, so antibiotics should follow genuine symptoms, with cultures sent in pregnancy, recurrence, treatment failure, or in those over 65.',
    note:'Nitrofurantoin 3 days first-line (NICE NG109). Treat symptoms, not the dipstick; send MSU in pregnancy/recurrence/≥65.',
    src:{label:'NICE NG109', url:'https://www.nice.org.uk/guidance/ng109'} },

  { id:'asymp-bacteriuria', cat:'Infections', name:'Treating asymptomatic bacteriuria', verdict:'harm',
    numbers:'No benefit (except in pregnancy / before urological surgery); drives resistance and side-effects.',
    detail:'Asymptomatic bacteriuria — a positive culture without urinary symptoms — is common, especially in older people and those with catheters, and trials consistently show that treating it does not reduce symptomatic UTIs, hospitalisation or mortality. Treatment merely exposes patients to side-effects, C. difficile and antimicrobial resistance. A particular pitfall is attributing non-specific decline or confusion in an elderly patient to a positive dipstick and prescribing reflexively; the evidence is against this. The only well-established exceptions are pregnancy and prior to urological procedures that breach the mucosa.',
    note:'Do not treat asymptomatic bacteriuria — including elderly/catheterised. Exceptions: pregnancy and pre-urological surgery.',
    src:{label:'GPevidence', url:'https://gpevidence.org/'} },

  /* ---------------- Pain / MSK ---------------- */
  { id:'opioids-chronic', cat:'Pain & MSK', name:'Opioids in chronic non-cancer pain', verdict:'harm',
    numbers:'Little benefit beyond a few months; dependence, hyperalgesia, falls and overdose rise with dose.',
    detail:'For chronic non-cancer pain the evidence for long-term opioids is weak and the harms are substantial. The SPACE trial found opioids were no better than non-opioid analgesics for pain-related function in chronic back, hip or knee pain over 12 months, and the broader literature shows tolerance, opioid-induced hyperalgesia, dependence, falls, fractures, endocrine effects and a dose-dependent overdose risk. NICE NG193 explicitly advises against starting opioids (and most drugs) for chronic primary pain, favouring exercise, psychological therapy and supported self-management. Where patients are already on long-term opioids without benefit, the right action is structured, supported dose reduction.',
    note:'Avoid/limit in chronic primary pain (NICE NG193). Review and deprescribe; offer exercise, CBT and group programmes.',
    src:{label:'NICE NG193', url:'https://www.nice.org.uk/guidance/ng193'} },

  { id:'paracetamol-lbp', cat:'Pain & MSK', name:'Paracetamol for low back pain', verdict:'none',
    numbers:'No better than placebo for acute low back pain (large RCTs).',
    detail:'The PACE trial — a large, well-conducted RCT — found regular or as-needed paracetamol was no better than placebo for time to recovery, pain, function, sleep or quality of life in acute low back pain. This overturned decades of guideline habit, and NICE NG59 now advises against offering paracetamol alone for low back pain. The evidence-based emphasis is on staying active and continuing normal activities, with an oral or topical NSAID at the lowest effective dose for the shortest time if drug treatment is needed, and avoiding bed rest and early imaging.',
    note:'Do not offer paracetamol alone for low back pain (NICE NG59). Encourage activity; NSAID lowest effective dose if needed.',
    src:{label:'NICE NG59', url:'https://www.nice.org.uk/guidance/ng59'} },

  { id:'nsaid-oa', cat:'Pain & MSK', name:'NSAIDs in osteoarthritis', verdict:'help',
    numbers:'Modest pain benefit; topical NSAID effective for knee/hand with far lower systemic NNH.',
    detail:'NSAIDs give modest but real pain relief in osteoarthritis and outperform paracetamol. The key practical insight is route: topical NSAIDs provide meaningful relief for knee and hand OA with only a fraction of the gastrointestinal, renal and cardiovascular exposure of oral therapy, which is why NICE NG226 recommends them first-line for those joints. When an oral NSAID is needed it should be the lowest effective dose for the shortest period, with a PPI for gastroprotection and caution in the elderly, in CKD, in cardiovascular disease and alongside ACEi/diuretic ("triple whammy" AKI risk).',
    note:'Topical NSAID first for knee/hand OA (NICE NG226). Oral NSAID lowest dose + PPI; avoid the triple whammy.',
    src:{label:'NICE NG226', url:'https://www.nice.org.uk/guidance/ng226'} },

  { id:'gabapentinoids', cat:'Pain & MSK', name:'Gabapentinoids for chronic primary pain / sciatica', verdict:'harm',
    numbers:'Little benefit in sciatica/primary pain; misuse, sedation and dependence (now controlled drugs).',
    detail:'Gabapentin and pregabalin are widely prescribed beyond the evidence. A landmark RCT and systematic reviews found gabapentinoids ineffective for sciatica/radicular low back pain, and NICE NG193 advises against using them for chronic primary pain. Meanwhile real-world harms have grown — sedation, falls, misuse, dependence and deaths in combination with opioids — which is why they were reclassified as Schedule 3 controlled drugs in the UK. They retain a legitimate role only in defined neuropathic pain conditions; outside those, the right action is often to avoid starting or to taper.',
    note:'Do not start for chronic primary pain/sciatica (NICE NG193). Reserve for defined neuropathic pain; taper if no benefit.',
    src:{label:'NICE NG193', url:'https://www.nice.org.uk/guidance/ng193'} },

  { id:'amitriptyline-neuro', cat:'Pain & MSK', name:'Amitriptyline / duloxetine for neuropathic pain', verdict:'help',
    numbers:'NNT ≈ 4–7 for ≥50% pain relief in neuropathic pain; NNH for drowsiness/dry mouth.',
    detail:'For genuine neuropathic pain (diabetic neuropathy, post-herpetic neuralgia, etc.) the tricyclic amitriptyline and the SNRI duloxetine have a solid evidence base, with numbers-needed-to-treat around 4\u20137 for meaningful pain relief — better than most analgesics achieve in this setting. NICE CG173 lists amitriptyline, duloxetine, gabapentin and pregabalin as first-line options, trying an alternative if the first is ineffective or not tolerated. Anticholinergic effects (drowsiness, dry mouth, urinary retention) limit tricyclic dosing, particularly in the elderly, so start low and titrate. These agents do not work for non-neuropathic chronic primary pain.',
    note:'First-line options for neuropathic pain (NICE CG173): amitriptyline, duloxetine, gabapentin or pregabalin — switch if one fails.',
    src:{label:'NICE CG173', url:'https://www.nice.org.uk/guidance/cg173'} },

  { id:'steroid-injection', cat:'Pain & MSK', name:'Corticosteroid joint/soft-tissue injection', verdict:'nuance',
    numbers:'Short-term pain relief (weeks) but no lasting benefit; repeated injections may harm cartilage/tendon.',
    detail:'Corticosteroid injections reliably reduce pain in the short term — useful for settling a flare of OA, frozen shoulder or some tendinopathies — but trials show the benefit fades over weeks to a few months and does not change the natural history. For some conditions repeated injection may be counterproductive: in knee OA frequent steroid injections were associated with greater cartilage loss, and in tendinopathies steroid gives short-term relief but worse longer-term outcomes than exercise. The evidence positions injection as a bridge that buys a window for rehabilitation, not a standalone or repeatable cure.',
    note:'Useful short-term bridge for flares; pair with exercise/physio. Avoid frequent repeat injections.',
    src:{label:'GPevidence', url:'https://gpevidence.org/'} },

  { id:'colchicine-gout', cat:'Pain & MSK', name:'Colchicine / NSAID for acute gout', verdict:'help',
    numbers:'Effective for acute flare; low-dose colchicine as effective as high-dose with far less diarrhoea.',
    detail:'Acute gout responds well to anti-inflammatory treatment, and the choice between an NSAID, low-dose colchicine and oral corticosteroid is driven by comorbidity rather than efficacy. The AGREE trial established that low-dose colchicine (e.g. 500 micrograms 2\u20133 times daily) is as effective as the old high-dose regimens but with far less diarrhoea and toxicity, so high-dose colchicine is now obsolete. Oral steroids are a good option when NSAIDs and colchicine are contraindicated (e.g. CKD, heart failure). Starting treatment promptly within the first 24 hours of a flare improves the response.',
    note:'NSAID, low-dose colchicine, or oral steroid — choose by comorbidity (NICE NG219). Treat early.',
    src:{label:'NICE NG219', url:'https://www.nice.org.uk/guidance/ng219'} },

  { id:'allopurinol', cat:'Pain & MSK', name:'Urate-lowering (allopurinol) in gout', verdict:'help',
    numbers:'Treat-to-target urate <360 µmol/L markedly reduces recurrent flares and dissolves tophi.',
    detail:'Urate-lowering therapy is the disease-modifying treatment for gout, yet is under-used. A treat-to-target strategy — titrating allopurinol to keep serum urate below 360 µmol/L (or below 300 if tophi or frequent attacks) — progressively reduces flare frequency, dissolves tophi and prevents joint damage. NICE NG219 now recommends offering ULT to most people after a flare, not just after multiple attacks. Two practical points: flares can be provoked when ULT is started, so cover the first ~6 months with an NSAID or low-dose colchicine; and continue ULT through acute attacks once established.',
    note:'Offer ULT after a flare; start low, titrate to urate target, cover ~6 months with NSAID/colchicine (NICE NG219).',
    src:{label:'NICE NG219', url:'https://www.nice.org.uk/guidance/ng219'} },

  /* ---------------- Neurology / headache ---------------- */
  { id:'triptan', cat:'Neurology', name:'Triptans for acute migraine', verdict:'help',
    numbers:'NNT ≈ 3–6 for pain relief at 2 h; combining with an NSAID improves response.',
    detail:'Triptans are selective 5-HT1 agonists with a strong evidence base for acute migraine, achieving pain freedom or relief at two hours with numbers-needed-to-treat around 3\u20136 depending on agent and dose. Combining a triptan with an NSAID (e.g. sumatriptan plus naproxen) outperforms either alone. NICE CKS recommends a triptan, alone or with an NSAID/antiemetic, for moderate-to-severe attacks. The key caveats are vascular contraindications (ischaemic heart disease, uncontrolled hypertension) and medication-overuse headache, so triptan use should be limited to fewer than 10 days per month.',
    note:'Triptan ± NSAID/antiemetic for moderate–severe migraine (NICE CKS). Limit to <10 days/month; avoid in vascular disease.',
    src:{label:'NICE CKS', url:'https://cks.nice.org.uk/topics/migraine/'} },

  { id:'migraine-prophylaxis', cat:'Neurology', name:'Migraine prophylaxis (propranolol/topiramate/amitriptyline)', verdict:'help',
    numbers:'≈ 50% reduction in attack frequency in responders.',
    detail:'When migraines are frequent (roughly four or more headache days a month) or disabling, prophylaxis roughly halves attack frequency in responders. Propranolol, topiramate and amitriptyline are the established first-line options with trial support; candesartan is a useful alternative, and anti-CGRP monoclonals are reserved for refractory cases under specialist care. Prophylaxis needs an adequate trial (6\u20138 weeks at target dose) before judging effect, and a headache diary helps track response. Topiramate is teratogenic and reduces hormonal contraceptive efficacy, so reliable contraception must be ensured in those who could become pregnant.',
    note:'Offer when ≥4 attacks/month or disabling; trial 6–8 weeks. Topiramate teratogenic — ensure reliable contraception.',
    src:{label:'NICE CKS', url:'https://cks.nice.org.uk/topics/migraine/'} },

  /* ---------------- Gastrointestinal ---------------- */
  { id:'ppi-gord', cat:'Gastrointestinal', name:'PPI for GORD / dyspepsia', verdict:'help',
    numbers:'Effective symptom control and healing of oesophagitis; review for deprescribing once controlled.',
    detail:'Proton-pump inhibitors are highly effective at controlling reflux symptoms and healing oesophagitis, clearly outperforming H2-blockers and placebo. NICE CG184 recommends a full-dose course for 4\u20138 weeks, then stepping down to the lowest effective or as-needed dose. Most reported "risks" of long-term PPIs (fracture, pneumonia, kidney disease, dementia) come from observational data confounded by indication and are probably overstated, but they justify using the lowest effective dose and periodic review rather than indefinite high-dose use. Always check for alarm features warranting endoscopy and review medicines that worsen reflux.',
    note:'Full-dose 4–8 weeks, then lowest effective/PRN (NICE CG184). Review long-term need; check for alarm features.',
    src:{label:'NICE CG184', url:'https://www.nice.org.uk/guidance/cg184'} },

  { id:'hpylori', cat:'Gastrointestinal', name:'H. pylori eradication', verdict:'help',
    numbers:'Cures most peptic ulcers; very favourable NNT for ulcer healing and preventing recurrence.',
    detail:'Eradicating Helicobacter pylori transformed peptic ulcer disease from a chronic relapsing condition into a curable one: clearing the organism heals ulcers and dramatically reduces recurrence, and it also reduces the long-term risk of gastric cancer. NICE recommends a test-and-treat approach for uninvestigated dyspepsia, using a 7-day triple regimen (a PPI plus two antibiotics). Two practical points improve accuracy and success: stop PPIs for two weeks before testing to avoid false negatives, and confirm eradication after treatment where appropriate (e.g. following a bleeding ulcer).',
    note:'Test-and-treat for dyspepsia; 7-day triple therapy. Stop PPI 2 weeks before testing; confirm cure when indicated.',
    src:{label:'NICE CG184', url:'https://www.nice.org.uk/guidance/cg184'} },

  { id:'probiotics-ibs', cat:'Gastrointestinal', name:'Probiotics in IBS', verdict:'nuance',
    numbers:'Some symptom benefit but heterogeneous strains/evidence; effect modest.',
    detail:'Meta-analyses suggest probiotics can modestly improve global IBS symptoms and bloating, but the evidence is hard to apply because trials use many different strains, doses and formulations, and effect sizes are small. NICE CG61 takes a pragmatic line: a patient who wants to try a probiotic should take it at the manufacturer\u2019s recommended dose for at least four weeks and stop if there is no benefit. Probiotics sit within a broader IBS strategy that includes dietary modification (a dietitian-led low-FODMAP trial), soluble fibre, antispasmodics and addressing stress, rather than being a stand-alone fix.',
    note:'Reasonable 4-week trial (NICE CG61); stop if no benefit. Combine with diet (dietitian-led FODMAP) and antispasmodics.',
    src:{label:'NICE CG61', url:'https://www.nice.org.uk/guidance/cg61'} },

  { id:'laxatives', cat:'Gastrointestinal', name:'Laxatives for chronic constipation', verdict:'help',
    numbers:'Effective; osmotic (macrogol) first-line, add a stimulant if needed.',
    detail:'Laxatives are effective for chronic constipation, and the evidence supports macrogol (an osmotic polyethylene-glycol agent) as first-line, with trials showing it outperforms lactulose on stool frequency and consistency. If response is inadequate a stimulant such as senna is added, and the dose is titrated to produce a soft, formed stool. Treatment should run alongside lifestyle measures (fibre, fluid, activity) and review of constipating drugs (opioids, iron, some antidepressants). For opioid-induced constipation a stimulant ± osmotic is used pre-emptively, with peripheral opioid antagonists reserved for refractory cases.',
    note:'Macrogol first-line, titrate; add stimulant if needed. Address fibre/fluid/activity and constipating drugs.',
    src:{label:'NICE CKS', url:'https://cks.nice.org.uk/topics/constipation/'} },

  /* ---------------- Mental health ---------------- */
  { id:'ssri-moderate', cat:'Mental health', name:'Antidepressants — moderate/severe depression', verdict:'help',
    numbers:'NNT ≈ 6–8 for response over placebo in moderate–severe depression.',
    detail:'For moderate-to-severe depression antidepressants clearly beat placebo: the large Cipriani network meta-analysis (2018, 522 trials) confirmed all studied antidepressants were more effective than placebo, with response NNTs around 6\u20138 and efficacy increasing with depression severity. NICE NG222 offers antidepressants and/or psychological therapy as comparable first-line options, with patient preference central. Key practical points are reviewing early (within 1\u20132 weeks, sooner if under 30 or higher risk) for emergent agitation or suicidality, allowing ~4 weeks for full effect, and continuing for at least six months after remission to prevent relapse.',
    note:'Offer SSRI and/or therapy (NICE NG222). Review at 1–2 weeks; continue ≥6 months after remission; taper to stop.',
    src:{label:'NICE NG222', url:'https://www.nice.org.uk/guidance/ng222'} },

  { id:'ssri-mild', cat:'Mental health', name:'Antidepressants — mild depression', verdict:'none',
    numbers:'Marginal benefit over placebo in mild depression.',
    detail:'The benefit of antidepressants shrinks as depression severity falls, and in mild depression the average advantage over placebo is small and may not be clinically meaningful. NICE NG222 therefore advises against routinely offering antidepressants first-line for less severe depression unless that is the patient\u2019s informed preference, recommending instead lower-intensity psychological and lifestyle interventions: guided self-help, group CBT or behavioural activation, structured exercise, and mindfulness. Antidepressants remain appropriate if mild depression persists despite these measures, has a history of more severe episodes, or the patient chooses them after discussion.',
    note:'Don\u2019t routinely offer first-line for mild depression (NICE NG222) — prefer guided self-help, exercise, group CBT.',
    src:{label:'NICE NG222', url:'https://www.nice.org.uk/guidance/ng222'} },

  { id:'cbt', cat:'Mental health', name:'CBT for depression & anxiety', verdict:'help',
    numbers:'Effective with durable benefit; relapse rates lower than medication alone after stopping.',
    detail:'Cognitive behavioural therapy has a robust evidence base across depression and the anxiety disorders, with effect sizes comparable to antidepressants for many patients and a particular advantage in durability — benefits persist after therapy ends, and relapse rates are lower than with medication that is subsequently stopped. It can be delivered at varying intensity (digital/guided self-help through to individual high-intensity CBT), which suits a stepped-care model, and combines well with medication in more severe illness. In the UK patients can self-refer to NHS Talking Therapies, making access relatively straightforward.',
    note:'Self-refer to NHS Talking Therapies. Equivalent/complementary to antidepressants; lower relapse after stopping.',
    src:{label:'NICE NG222', url:'https://www.nice.org.uk/guidance/ng222'} },

  { id:'ssri-gad', cat:'Mental health', name:'SSRI for generalised anxiety disorder', verdict:'help',
    numbers:'NNT ≈ 5–7 for response; benzodiazepines avoided beyond short-term crisis.',
    detail:'In generalised anxiety disorder that has not responded to lower-intensity interventions, SSRIs (sertraline is the usual first choice on cost-effectiveness grounds) reduce symptoms with response NNTs around 5\u20137; SNRIs and pregabalin are alternatives. NICE CG113 sets out a stepped-care pathway: psychoeducation and active monitoring, then low-intensity then high-intensity psychological work, with drug treatment for those with marked functional impairment or preference. Patients should be warned that anxiety can transiently worsen in the first weeks. Benzodiazepines are avoided except for short-term crisis use because of dependence.',
    note:'Stepped care (NICE CG113): self-help → CBT → SSRI (sertraline). Warn of early transient anxiety; avoid long-term benzodiazepines.',
    src:{label:'NICE CG113', url:'https://www.nice.org.uk/guidance/cg113'} },

  /* ---------------- Women's & men's health ---------------- */
  { id:'hrt', cat:'Women’s & men’s health', name:'HRT for menopausal symptoms', verdict:'help',
    numbers:'Most effective treatment for vasomotor symptoms; absolute VTE/breast-cancer risks small and route-dependent.',
    detail:'HRT is the most effective treatment for vasomotor symptoms and also helps urogenital symptoms, mood and bone density. The early scare from the Women\u2019s Health Initiative has been substantially recontextualised: for symptomatic women starting near menopause and under 60, the absolute risks are small and the benefit\u2013risk balance is generally favourable. Route matters — transdermal oestrogen carries little or no excess VTE or stroke risk and is preferred where those risks are relevant, while any breast-cancer signal relates mainly to the progestogen component and is small in absolute terms. NICE NG23 supports individualised, informed shared decisions rather than blanket avoidance.',
    note:'Offer for symptom relief after individualised discussion (NICE NG23). Transdermal preferred if VTE/migraine risk; add progestogen if uterus present.',
    src:{label:'NICE NG23', url:'https://www.nice.org.uk/guidance/ng23'} },

  { id:'vaginal-oestrogen', cat:'Women’s & men’s health', name:'Vaginal oestrogen for GSM', verdict:'help',
    numbers:'Effective for urogenital symptoms; minimal systemic absorption — can be long-term.',
    detail:'Low-dose vaginal (topical) oestrogen is highly effective for the genitourinary syndrome of menopause — vaginal dryness, dyspareunia and recurrent urinary symptoms — by restoring the vaginal epithelium and microbiome. Because systemic absorption is minimal, it does not carry the systemic risks attributed to oral HRT, can be continued long-term, does not require a progestogen for endometrial protection, and can be used alongside systemic HRT if needed. It is under-prescribed relative to need; symptoms recur when it is stopped, so ongoing use is appropriate, with review.',
    note:'Low-dose vaginal oestrogen for dryness/dyspareunia/recurrent UTI; usable long-term and alongside systemic HRT (NICE NG23).',
    src:{label:'NICE NG23', url:'https://www.nice.org.uk/guidance/ng23'} },

  { id:'tamsulosin-luts', cat:'Women’s & men’s health', name:'Alpha-blocker (tamsulosin) for BPH/LUTS', verdict:'help',
    numbers:'Meaningful symptom improvement within weeks; add 5-ARI for larger prostates.',
    detail:'For bothersome male voiding lower urinary tract symptoms from benign prostatic enlargement, alpha-blockers such as tamsulosin relax prostatic smooth muscle and improve symptoms and flow within a few weeks, making them first-line in NICE NG97. For men with larger prostates (or a raised PSA reflecting size), adding a 5-alpha-reductase inhibitor such as finasteride shrinks the gland over months and reduces the risk of progression, acute retention and surgery. Patients should be counselled about postural hypotension and dizziness, and about intra-operative floppy iris syndrome if cataract surgery is planned.',
    note:'Alpha-blocker first-line for voiding LUTS (NICE NG97); add 5-ARI if large prostate. Warn re postural hypotension & floppy-iris.',
    src:{label:'NICE NG97', url:'https://www.nice.org.uk/guidance/ng97'} },

  /* ---------------- Prevention / bone / vaccines ---------------- */
  { id:'vitd', cat:'Prevention & bone', name:'Vitamin D supplementation', verdict:'nuance',
    numbers:'Corrects deficiency; little benefit on fractures/CV/cancer outcomes in replete people.',
    detail:'Vitamin D supplementation clearly helps people who are genuinely deficient (and prevents osteomalacia/rickets), but the large VITAL trial and others found no meaningful reduction in fractures, cardiovascular events or cancer when given to vitamin-D-replete adults. The evidence therefore supports targeted treatment of deficiency and at-risk groups (housebound, limited sun exposure, darker skin, pregnancy) rather than population-wide high-dose supplementation. Routine testing of low-risk people is generally unhelpful; the pragmatic approach is to supplement those at risk and treat documented deficiency.',
    note:'Treat documented deficiency and at-risk groups; routine high-dose supplementation in replete adults is not beneficial.',
    src:{label:'GPevidence', url:'https://gpevidence.org/'} },

  { id:'calcium-vitd-fracture', cat:'Prevention & bone', name:'Calcium + vitamin D for fracture prevention', verdict:'nuance',
    numbers:'Small fracture reduction mainly in institutionalised/deficient elderly; little benefit community-dwelling.',
    detail:'The original evidence for calcium plus vitamin D reducing fractures came largely from trials in deficient, institutionalised elderly people, where it modestly reduced hip and non-vertebral fractures. In community-dwelling, replete older adults the benefit largely disappears, and high-dose calcium supplementation has raised concerns about a small excess of cardiovascular and gastrointestinal effects. The pragmatic conclusion is to target supplementation at frail, housebound or care-home residents and those with low intake or proven deficiency, and to favour dietary calcium where possible rather than blanket supplementation of healthy older adults.',
    note:'Target frail/housebound/care-home residents and the deficient. Not a blanket intervention for healthy older adults.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/vitamin-d-with-or-without-calcium-to-prevent-fractures/'} },

  { id:'bisphosphonates', cat:'Prevention & bone', name:'Bisphosphonates for osteoporosis', verdict:'help',
    numbers:'NNT ≈ 20–100 over ~3 yrs to prevent one vertebral fracture (higher risk → lower NNT); hip-fracture benefit in osteoporosis.',
    detail:'Bisphosphonates (alendronate first-line) reduce vertebral fractures robustly and hip/non-vertebral fractures in those with established osteoporosis, with the absolute benefit greatest in the highest-risk patients — hence treatment is directed by FRAX and DEXA rather than age alone. The much-publicised harms, atypical femoral fractures and osteonecrosis of the jaw, are real but rare and are outweighed by fractures prevented in appropriately selected patients. Adherence is a practical limitation (dosing rules, GI upset), and after about 3\u20135 years a treatment review or "drug holiday" is considered in lower-risk patients to balance ongoing benefit against cumulative risk.',
    note:'Offer when FRAX/DEXA indicates (NICE). Counsel on rare AFF/ONJ; review need after ~3–5 yrs.',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/bisphosphonates-osteoporosis/'} },

  { id:'flu-vaccine', cat:'Prevention & bone', name:'Influenza vaccine in older / at-risk adults', verdict:'help',
    numbers:'Reduces influenza illness and complications in at-risk groups; modest but worthwhile.',
    detail:'Influenza vaccination reduces laboratory-confirmed flu and, in at-risk groups, its complications including hospitalisation and, in some analyses, cardiovascular events triggered by infection. Efficacy varies year to year with the match between vaccine and circulating strains, so the effect is real but modest rather than dramatic. Because the burden of severe disease is concentrated in the elderly, those with chronic conditions and pregnant women, annual vaccination of these groups (and of carers and health workers to reduce transmission) is the evidence-based public-health strategy set out in the UKHSA Green Book.',
    note:'Annual vaccination for ≥65, chronic disease, pregnancy, carers and health workers (UKHSA Green Book).',
    src:{label:'TheNNT', url:'https://thennt.com/nnt/influenza-vaccine-prevent-influenza-adults/'} },

  { id:'smoking-cessation', cat:'Prevention & bone', name:'Smoking cessation support', verdict:'help',
    numbers:'Combination pharmacotherapy + behavioural support roughly triples quit rates; the highest-value preventive act.',
    detail:'Stopping smoking is the single most powerful thing most patients can do for their health, and the support that helps them do it is strongly evidence-based. Cochrane reviews show behavioural support plus pharmacotherapy roughly triples successful quit rates versus willpower alone, with varenicline and combination NRT the most effective drug options and bupropion an alternative. Even brief opportunistic advice at each contact increases quit attempts, so the high-yield action is to ask, advise and refer routinely. Cessation slows the decline in lung function in COPD, cuts cardiovascular and cancer risk, and benefits accrue at any age.',
    note:'Offer at every contact: behavioural support + varenicline/combination NRT/bupropion (NICE NG209).',
    src:{label:'NICE NG209', url:'https://www.nice.org.uk/guidance/ng209'} },

  { id:'weight-glp1', cat:'Prevention & bone', name:'GLP-1 / tirzepatide for obesity', verdict:'help',
    numbers:'Semaglutide ~15%, tirzepatide ~20% mean body-weight loss; improves cardiometabolic risk factors.',
    detail:'The incretin-based therapies have changed obesity pharmacotherapy. In the STEP programme semaglutide produced around 15% mean weight loss, and SURMOUNT showed tirzepatide achieving roughly 20% — figures previously only seen with bariatric surgery — alongside improvements in blood pressure, glycaemia and lipids, and (in SELECT) a reduction in cardiovascular events in people with obesity and established cardiovascular disease. The main caveats are gastrointestinal side-effects, the need for slow titration, cost and access via NICE/specialist criteria, and substantial weight regain when treatment stops, so they are best framed as long-term therapy rather than a short course.',
    note:'Option within NICE/specialist criteria for obesity with comorbidity. Weight regain on stopping — frame as long-term; titrate slowly.',
    src:{label:'NICE', url:'https://www.nice.org.uk/guidance/ta875'} }

];
