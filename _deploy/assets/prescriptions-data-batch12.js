/* Reasoning GP — Ready Prescriptions (batch 12): common infections per NICE/BNF */
(function(){
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);
  RX.push(

  { id:'cap', title:'Community-acquired pneumonia', category:'Infections',
    eyebrow:'CRB-65 severity · amoxicillin 1st line',
    indication:'Adult CAP diagnosed clinically (± CXR). Assess severity with CRB-65 and treat at the appropriate setting. Antibiotic choice and duration per NICE NG138.',
    contraindications:'CRB-65 ≥2 (or clinical concern/comorbidity) → consider hospital. Sepsis/severe → admit. Penicillin allergy → use alternative. Review at 48–72 h; lack of response → reassess/CXR/admit.',
    duration:'5 days (review; extend if not improving)',
    drugs:[
      { name:'CRB-65 0\u20131 (low severity): Amoxicillin', dose:'500 mg', freq:'TDS', route:'PO', days:'5 days' },
      { name:'Penicillin allergy / atypical: doxycycline OR clarithromycin', dose:'doxy 200 mg then 100 mg / clarith 500 mg', freq:'OD / BD', route:'PO', days:'5 days' },
      { name:'Moderate severity (CRB-65 2): amoxicillin + (if atypical suspected) a macrolide', dose:'500 mg + 500 mg', freq:'TDS + BD', route:'PO', days:'5 days' },
      { name:'Safety-net + reassess at 48\u201372 h; CRB-65 \u22652 \u2192 consider admission', dose:'\u2014', freq:'\u2014', route:'Advice', days:'\u2014' },
    ],
    altRegimens:[
      { label:'High severity / sepsis', drugs:'Admit; hospital IV antibiotics per local policy.' },
      { label:'Not improving at 48\u201372 h', drugs:'Reassess, CXR, consider resistance/atypical/complication or admission.' },
    ],
    counselling:[
      'You have a chest infection (pneumonia) \u2014 take the full antibiotic course, rest and keep well hydrated.',
      'You should start to feel better within a few days; full recovery (especially tiredness/cough) can take several weeks.',
      'Come back urgently if you become more breathless, confused, can\u2019t keep fluids down, or feel much worse.',
      'Stop smoking and keep up vaccinations (flu/pneumococcal) to reduce future infections.',
    ],
    followUp:'Reassess at 48\u201372 h. If not improving \u2192 CXR/reassess/admit. Consider repeat CXR at ~6 weeks if smoker/>50 to exclude underlying pathology.',
    redFlags:['CRB-65 \u22652, sepsis, hypoxia, or unable to manage at home \u2192 admit.','Haemoptysis / not resolving \u2192 CXR to exclude malignancy.'],
    emisText:`Community-acquired pneumonia (NG138):
- Assess CRB-65. Low (0-1): amoxicillin 500 mg TDS 5d (pen-allergic: doxycycline 200 mg then 100 mg OD, or clarithromycin 500 mg BD, 5d).
- Moderate (2): amoxicillin + macrolide if atypical suspected; consider admission.
- High/sepsis \u2192 admit. Reassess 48-72 h; smoker/>50 \u2192 CXR ~6 wks.`,
    sources:[{ label:'NICE NG138 \u2014 Pneumonia (community-acquired): antimicrobial prescribing', url:'https://www.nice.org.uk/guidance/ng138' }],
  },

  { id:'acute-cough-bronchitis', title:'Acute cough / acute bronchitis', category:'Infections',
    eyebrow:'Usually viral · no antibiotic · safety-net',
    indication:'Acute cough/bronchitis in otherwise healthy adults \u2014 usually viral and self-limiting (~3 weeks). Antibiotics are not routinely indicated. Per NICE NG120.',
    contraindications:'Antibiotics offer minimal benefit and cause harm/resistance. Consider antibiotic only if systemically very unwell, higher risk of complications, or CRB-65/pneumonia features. Exclude pneumonia, PE, heart failure, asthma/COPD exacerbation.',
    duration:'Self-limiting (~3 weeks)',
    drugs:[
      { name:'No antibiotic \u2014 self-care: rest, fluids, honey, simple analgesia; reassure cough may last ~3 weeks', dose:'\u2014', freq:'\u2014', route:'Advice', days:'~3 weeks' },
      { name:'Honey / OTC cough preparations for symptom relief (limited evidence)', dose:'\u2014', freq:'PRN', route:'PO', days:'Symptomatic' },
      { name:'Back-up / immediate antibiotic ONLY if systemically very unwell or high complication risk (e.g. doxycycline)', dose:'200 mg then 100 mg OD', freq:'OD', route:'PO', days:'5 days' },
    ],
    altRegimens:[
      { label:'Higher-risk patient', drugs:'Consider back-up or immediate antibiotic if pre-existing comorbidity, frailty, or systemically unwell (per NG120).' },
      { label:'Suspected pneumonia', drugs:'Focal signs/CRB-65 features \u2192 treat as CAP.' },
    ],
    counselling:[
      'This is usually a viral chest infection that gets better on its own \u2014 antibiotics won\u2019t help and can cause side effects.',
      'The cough can last up to about three weeks even when everything else improves \u2014 that\u2019s normal.',
      'Self-care helps: rest, fluids, and honey for the cough.',
      'Come back urgently if you become breathless, cough up blood, get chest pain, a high fever, or feel much worse.',
    ],
    followUp:'Safety-net (most settle). Reassess if symptoms worsen, systemic deterioration, or cough >3 weeks (→ consider CXR/other cause).',
    redFlags:['Breathlessness, pleuritic pain, haemoptysis, high fever, confusion → reassess for pneumonia/PE/sepsis.','Cough >3 weeks / red flags → CXR (exclude malignancy).'],
    emisText:`Acute cough / bronchitis (NG120):
- Usually viral, self-limiting (~3 wks). NO routine antibiotic. Self-care: rest, fluids, honey, analgesia.
- Back-up/immediate antibiotic ONLY if systemically very unwell / high complication risk (e.g. doxycycline 200 mg then 100 mg OD 5d).
- Pneumonia features \u2192 treat as CAP. Cough >3 wks \u2192 CXR.`,
    sources:[{ label:'NICE NG120 \u2014 Cough (acute): antimicrobial prescribing', url:'https://www.nice.org.uk/guidance/ng120' }],
  },

  { id:'aecopd', title:'Acute exacerbation of COPD (infective)', category:'Infections',
    eyebrow:'Steroid \u00b1 antibiotic if purulent sputum',
    indication:'Infective COPD exacerbation (increased breathlessness, sputum volume and/or purulence). Antibiotic if sputum is purulent or clinical features warrant; oral steroid for significant increase in breathlessness. Per NICE NG114/NG115.',
    contraindications:'Severe exacerbation / respiratory failure / unable to cope → admit. Use the patient\u2019s rescue pack/personalised plan where present. Check previous sputum cultures if recurrent.',
    duration:'Antibiotic 5 days; prednisolone 5 days',
    drugs:[
      { name:'Increase short-acting bronchodilator (salbutamol \u00b1 spacer/nebuliser)', dose:'\u2014', freq:'PRN', route:'INH', days:'During exacerbation' },
      { name:'Prednisolone (if significant \u2191 breathlessness)', dose:'30 mg', freq:'OD', route:'PO', days:'5 days' },
      { name:'Antibiotic if purulent sputum / clinical need: amoxicillin OR doxycycline OR clarithromycin', dose:'amox 500 mg TDS / doxy 200\u2192100 mg OD / clarith 500 mg BD', freq:'\u2014', route:'PO', days:'5 days' },
    ],
    altRegimens:[
      { label:'Recurrent / risk factors', drugs:'Use previous sputum culture results to guide; co-amoxiclav if local guidance/resistance.' },
      { label:'Severe / type 2 respiratory failure', drugs:'Admit (consider NIV); do not manage at home.' },
    ],
    counselling:[
      'Your COPD has flared, probably with an infection \u2014 use your reliever inhaler more often and take the steroid (and antibiotic if given) as directed.',
      'Antibiotics are only added when the phlegm has turned a darker colour or you\u2019re clearly unwell.',
      'Finish the steroid course; tell us if you have lots of these flare-ups so we can review your inhalers and a rescue pack.',
      'Seek urgent help if you become very breathless, drowsy or confused, or your lips look blue.',
    ],
    followUp:'Review response; reinforce inhaler technique, smoking cessation, vaccinations, rescue-pack plan. Frequent exacerbations → optimise inhaled therapy / refer.',
    redFlags:['Severe breathlessness, cyanosis, drowsiness/confusion, or unable to cope → admit (?NIV).'],
    emisText:`Acute exacerbation COPD (infective) (NG114):
- \u2191 SABA \u00b1 spacer/neb. Prednisolone 30 mg OD 5d if significant \u2191 breathlessness.
- Antibiotic ONLY if purulent sputum/clinical need: amoxicillin 500 mg TDS, OR doxycycline 200\u2192100 mg OD, OR clarithromycin 500 mg BD \u2014 5d.
- Use prior sputum cultures if recurrent. Severe/T2RF \u2192 admit (?NIV).`,
    sources:[{ label:'NICE NG114 \u2014 COPD exacerbation: antimicrobial prescribing', url:'https://www.nice.org.uk/guidance/ng114' }],
  },

  { id:'pyelonephritis', title:'Acute pyelonephritis', category:'Infections',
    eyebrow:'Longer course broad-spectrum · send MSU · assess sepsis',
    indication:'Upper UTI (loin pain, fever/rigors, ± lower urinary symptoms, often systemically unwell). Send urine culture; treat empirically with a broad-spectrum agent; assess for sepsis and admission. Per NICE NG111.',
    contraindications:'Sepsis, pregnancy, significant dehydration/vomiting, or unable to take oral → admit. Avoid nitrofurantoin (does not treat upper tract). Men/recurrent → consider urological cause. Adjust to culture sensitivities.',
    duration:'7\u201310 days (per agent)',
    drugs:[
      { name:'Send MSU for culture BEFORE antibiotics; assess sepsis/admission criteria', dose:'\u2014', freq:'\u2014', route:'Investigation', days:'\u2014' },
      { name:'1st line: cefalexin', dose:'500 mg', freq:'BD\u2013TDS', route:'PO', days:'7\u201310 days' },
      { name:'Alt: co-amoxiclav (if culture susceptible) OR trimethoprim (if susceptible)', dose:'co-amox 500/125 TDS / trim 200 mg BD', freq:'\u2014', route:'PO', days:'7\u201310 / 14 days' },
      { name:'Alt: ciprofloxacin (consider fluoroquinolone cautions)', dose:'500 mg', freq:'BD', route:'PO', days:'7 days' },
    ],
    altRegimens:[
      { label:'Pregnant', drugs:'Cefalexin; seek advice; lower threshold to admit; send culture.' },
      { label:'Severe / sepsis / vomiting', drugs:'Admit for IV antibiotics + fluids; consider imaging (obstruction).' },
      { label:'Men / recurrent', drugs:'Consider urological assessment for underlying cause.' },
    ],
    counselling:[
      'This is a kidney infection, which is more serious than a simple bladder infection, so you need a longer antibiotic course.',
      'Drink plenty of fluids and take regular pain relief; we\u2019ve sent a urine sample and may change the antibiotic to match it.',
      'Come back urgently \u2014 or call 999 \u2014 if you have shaking chills, can\u2019t keep fluids down, become confused, or feel very unwell.',
      'You should feel better within 48 hours of starting treatment; if not, contact us.',
    ],
    followUp:'Review at 48 h and on culture results. Not improving / deteriorating → admit/imaging (obstruction, abscess). Recurrent or male → urology.',
    redFlags:['Sepsis, severe pain, vomiting, pregnancy, or not improving at 48 h → admit / urgent assessment.','Suspected obstruction (single kidney, stones) → urgent imaging/urology.'],
    emisText:`Acute pyelonephritis (NG111):
- Send MSU pre-antibiotic; assess sepsis/admission.
- 1st line cefalexin 500 mg BD-TDS 7-10d; alt co-amoxiclav or trimethoprim (if susceptible), or ciprofloxacin 500 mg BD 7d. NOT nitrofurantoin (upper tract).
- Pregnant/severe/vomiting/sepsis \u2192 admit. Review 48 h + cultures. Male/recurrent \u2192 urology.`,
    sources:[{ label:'NICE NG111 \u2014 Pyelonephritis (acute): antimicrobial prescribing', url:'https://www.nice.org.uk/guidance/ng111' }],
  },

  { id:'recurrent-uti', title:'Recurrent UTI (women) — prevention', category:'Urology & Renal',
    eyebrow:'Self-care · vaginal oestrogen · prophylaxis last',
    indication:'Recurrent UTI in women (≥2 in 6 months or ≥3 in 12 months). Address behavioural/self-care measures, consider vaginal oestrogen (postmenopausal), then antibiotic prophylaxis if needed. Per NICE NG112.',
    contraindications:'Confirm infections (cultures) before labelling recurrent. Investigate/refer if red flags (haematuria, suspected obstruction/stones), or in men. Antibiotic prophylaxis is a last resort — review at 6 months. Counsel re resistance.',
    duration:'Trial measures; prophylaxis reviewed at ~6 months',
    drugs:[
      { name:'Self-care: hydration, don\u2019t delay voiding, post-coital voiding; consider D-mannose / cranberry (patient choice)', dose:'\u2014', freq:'\u2014', route:'Advice', days:'Ongoing' },
      { name:'Vaginal oestrogen (postmenopausal women)', dose:'Per product', freq:'Per regimen', route:'PV', days:'Ongoing, review' },
      { name:'Standby/back-up antibiotic for prompt self-start at symptom onset', dose:'Per local 1st-line', freq:'\u2014', route:'PO', days:'3 days' },
      { name:'Antibiotic prophylaxis if measures fail: trimethoprim 100 mg OR nitrofurantoin 50\u2013100 mg', dose:'100 mg / 50\u2013100 mg', freq:'at night (\u00b1 post-coital)', route:'PO', days:'Review at 6 months' },
    ],
    altRegimens:[
      { label:'Post-coital trigger', drugs:'Single post-coital antibiotic dose instead of nightly prophylaxis.' },
      { label:'Postmenopausal', drugs:'Vaginal oestrogen first \u2014 reduces recurrence; often avoids antibiotics.' },
      { label:'Red flags / male / complicated', drugs:'Investigate (haematuria, stones, obstruction) and refer urology.' },
    ],
    counselling:[
      'We\u2019ll try to prevent these infections with simple measures first \u2014 staying hydrated, not holding on, and emptying your bladder after sex.',
      'After the menopause, an oestrogen cream/pessary can substantially cut recurrences.',
      'If we use a low-dose preventive antibiotic, it\u2019s a last resort and we\u2019ll review it after about six months to limit resistance.',
      'Tell us about any blood in the urine \u2014 that always needs checking.',
    ],
    followUp:'Confirm with cultures; trial self-care/vaginal oestrogen first. Review prophylaxis at ~6 months. Investigate/refer red flags, men, or treatment failure.',
    redFlags:['Visible haematuria, suspected stones/obstruction, or recurrent UTI in men → urology.','Pyelonephritis features → treat/admit.'],
    emisText:`Recurrent UTI in women \u2014 prevention (NG112):
- Confirm with cultures. Self-care: hydration, regular/post-coital voiding; D-mannose/cranberry (choice).
- Postmenopausal: vaginal oestrogen 1st.
- Standby antibiotic (self-start) or prophylaxis (trimethoprim 100 mg or nitrofurantoin 50-100 mg nocte \u00b1 post-coital) if measures fail \u2014 review 6 months.
- Haematuria/male/stones \u2192 urology.`,
    sources:[{ label:'NICE NG112 \u2014 Recurrent UTI: antimicrobial prescribing', url:'https://www.nice.org.uk/guidance/ng112' }],
  },

  { id:'gastroenteritis', title:'Acute gastroenteritis / infectious diarrhoea', category:'Infections',
    eyebrow:'Hydration · no routine antibiotic · hygiene',
    indication:'Acute diarrhoea ± vomiting, usually viral/self-limiting. Mainstay is rehydration; antibiotics are not routinely indicated. Notifiable if specific pathogens; advise exclusion (e.g. 48 h symptom-free for food handlers/healthcare/children).',
    contraindications:'Avoid antimotility (loperamide) if bloody diarrhoea/fever (?invasive/EHEC \u2014 HUS risk). Antibiotics may worsen EHEC. Assess dehydration; admit if severe/unable to maintain hydration. Send stool culture if indicated.',
    duration:'Self-limiting (days)',
    drugs:[
      { name:'Oral rehydration (fluids \u00b1 ORS); continue eating as tolerated', dose:'\u2014', freq:'Frequent sips', route:'PO', days:'Until settles' },
      { name:'Loperamide for non-bloody diarrhoea in adults (if no fever/blood)', dose:'Per product', freq:'PRN', route:'PO', days:'Short term' },
      { name:'Hygiene + exclusion advice (off work/school until 48 h symptom-free)', dose:'\u2014', freq:'\u2014', route:'Advice', days:'\u2014' },
    ],
    altRegimens:[
      { label:'Stool sample if', drugs:'Blood/mucus, recent travel, systemically unwell, immunocompromised, suspected outbreak, or persistent (>7 days).' },
      { label:'Specific pathogen (e.g. confirmed shigella/giardia)', drugs:'Treat per result/specialist; many do not need antibiotics.' },
      { label:'Traveller\u2019s diarrhoea (severe)', drugs:'Consider antibiotic only if severe/systemic per guidance.' },
    ],
    counselling:[
      'This is usually a tummy bug that clears in a few days \u2014 the most important thing is to keep drinking fluids to avoid dehydration.',
      'Antibiotics usually aren\u2019t needed and can sometimes make things worse.',
      'Wash hands well, don\u2019t prepare food for others, and stay off work/school until 48 hours after the last episode.',
      'Seek help if you can\u2019t keep fluids down, pass blood, have a high fever, or show signs of dehydration (little urine, dizziness).',
    ],
    followUp:'Safety-net on dehydration. Stool sample if blood/travel/immunocompromised/persistent. Notify/exclude as appropriate.',
    redFlags:['Dehydration, bloody diarrhoea, high fever, severe abdominal pain, or immunocompromise → assess/admit.','Avoid loperamide + antibiotics in possible EHEC (HUS risk).'],
    emisText:`Acute gastroenteritis / infectious diarrhoea:
- Mainstay rehydration (\u00b1 ORS); continue eating as tolerated. NO routine antibiotic.
- Loperamide only if non-bloody, no fever (avoid if bloody/fever \u2014 EHEC/HUS).
- Hygiene + exclusion until 48 h symptom-free. Stool sample if blood/travel/immunocompromised/persistent. Notifiable pathogens.`,
    sources:[{ label:'NICE CKS \u2014 Gastroenteritis', url:'https://cks.nice.org.uk/topics/gastroenteritis/' }],
  },

  { id:'influenza', title:'Influenza (antiviral treatment)', category:'Infections',
    eyebrow:'At-risk + within 48 h + circulating flu',
    indication:'Antivirals (oseltamivir) for at-risk patients with influenza-like illness, when influenza is circulating and treatment can start within 48 h of symptom onset. Healthy non-at-risk adults: supportive care only.',
    contraindications:'Only when flu is circulating (per UKHSA/PHE notification) and within 48 h (treatment) / 36 h (prophylaxis zanamivir). Dose-adjust oseltamivir in renal impairment. Not a substitute for vaccination.',
    duration:'5 days (treatment)',
    drugs:[
      { name:'At-risk + within 48 h + flu circulating: oseltamivir', dose:'75 mg (adjust if renal impairment)', freq:'BD', route:'PO', days:'5 days' },
      { name:'Healthy, not at-risk: supportive care \u2014 rest, fluids, paracetamol/ibuprofen', dose:'\u2014', freq:'PRN', route:'PO', days:'Self-limiting' },
      { name:'Post-exposure prophylaxis (at-risk, per criteria): oseltamivir 75 mg OD (or zanamivir)', dose:'75 mg', freq:'OD', route:'PO', days:'10 days' },
    ],
    altRegimens:[
      { label:'Oseltamivir-resistant / unable', drugs:'Inhaled zanamivir per criteria (caution in asthma/COPD).' },
      { label:'Prevention', drugs:'Annual flu vaccination for eligible/at-risk groups \u2014 the mainstay.' },
    ],
    counselling:[
      'Flu usually gets better on its own with rest, fluids and simple painkillers over about a week.',
      'Because you\u2019re in an at-risk group and it\u2019s early, an antiviral tablet can shorten it and reduce complications \u2014 take the full course.',
      'It works best started within two days of symptoms; it isn\u2019t a substitute for the annual flu jab.',
      'Seek urgent help if you become breathless, confused, or much worse.',
    ],
    followUp:'Safety-net for complications (pneumonia). Encourage annual vaccination. Reassess if deteriorating.',
    redFlags:['Breathlessness, chest pain, confusion, or secondary bacterial pneumonia → reassess/admit.'],
    emisText:`Influenza \u2014 antiviral treatment:
- ONLY when flu circulating + at-risk + within 48 h: oseltamivir 75 mg BD 5d (renal dose-adjust).
- Healthy/not at-risk: supportive (rest, fluids, analgesia).
- PEP (at-risk, criteria): oseltamivir 75 mg OD 10d (or zanamivir). Annual vaccination = mainstay.`,
    sources:[{ label:'NICE / UKHSA \u2014 Influenza antiviral guidance', url:'https://cks.nice.org.uk/topics/influenza-seasonal/' }],
  },

  { id:'vaginal-candidiasis', title:'Vaginal candidiasis (thrush)', category:'Women\'s & Sexual Health',
    eyebrow:'Antifungal (oral or pessary) · confirm if recurrent',
    indication:'Vulvovaginal candidiasis (itch, non-offensive curdy discharge, soreness). Treat with an antifungal; investigate recurrent (≥4/year) disease.',
    contraindications:'Oral fluconazole contraindicated in pregnancy → use topical (clotrimazole). Confirm diagnosis if recurrent/atypical (swab, exclude other causes/diabetes). Recurrent → induction + maintenance regimen.',
    duration:'Single dose / short course',
    drugs:[
      { name:'Oral fluconazole (non-pregnant)', dose:'150 mg', freq:'Single dose', route:'PO', days:'Once' },
      { name:'OR clotrimazole pessary \u00b1 external cream', dose:'500 mg pessary', freq:'Single dose', route:'PV', days:'Once (\u00b1 cream BD)' },
      { name:'Pregnancy: topical clotrimazole (avoid oral azole)', dose:'Per product (longer course)', freq:'\u2014', route:'PV', days:'7 days' },
    ],
    altRegimens:[
      { label:'Recurrent (\u22654/year)', drugs:'Confirm by swab; induction (e.g. fluconazole every 72 h \u00d73) then maintenance (fluconazole weekly ~6 months); screen for diabetes.' },
      { label:'Severe symptoms', drugs:'Add external antifungal/short mild steroid for vulval soreness.' },
    ],
    counselling:[
      'Thrush is a common yeast infection \u2014 the antifungal (tablet or pessary) usually clears it quickly.',
      'In pregnancy we use the pessary/cream rather than the tablet.',
      'Avoid soaps/irritants on the area; cotton underwear helps.',
      'If it keeps coming back, come in \u2014 we\u2019ll confirm it\u2019s thrush, check for diabetes, and use a longer preventive course.',
    ],
    followUp:'Reassure; review if not settling or recurrent. Recurrent → swab + induction/maintenance + diabetes screen. Atypical → reconsider diagnosis.',
    redFlags:['Recurrent/atypical or not responding → swab, exclude other causes/diabetes.','Pregnancy → topical only.'],
    emisText:`Vaginal candidiasis (thrush):
- Non-pregnant: fluconazole 150 mg PO single dose, OR clotrimazole 500 mg pessary single dose \u00b1 external cream.
- Pregnancy: topical clotrimazole (longer course); avoid oral azole.
- Recurrent (\u22654/yr): confirm swab; induction + maintenance fluconazole; screen diabetes.`,
    sources:[{ label:'NICE CKS \u2014 Candida (female genital)', url:'https://cks.nice.org.uk/topics/candida-female-genital/' }],
  },

  { id:'pid', title:'Pelvic inflammatory disease', category:'Women\'s & Sexual Health',
    eyebrow:'Low threshold to treat · broad-spectrum · STI screen',
    indication:'PID (pelvic/lower abdominal pain, deep dyspareunia, abnormal discharge/bleeding, cervical motion tenderness). Have a low threshold to treat empirically to protect fertility; take STI tests but don\u2019t delay treatment.',
    contraindications:'Exclude/treat as emergency if pregnancy (ectopic), severe/sepsis, or tubo-ovarian abscess (→ admit). Remove/avoid delay if IUD-related per guidance. Test for chlamydia/gonorrhoea/HIV; partner notification.',
    duration:'14 days',
    drugs:[
      { name:'Pregnancy test + STI screen (NAAT chlamydia/gonorrhoea), but start treatment empirically', dose:'\u2014', freq:'\u2014', route:'Investigation', days:'\u2014' },
      { name:'Ceftriaxone (single IM) + doxycycline + metronidazole', dose:'ceftriaxone 1 g IM; doxy 100 mg BD; metro 400 mg BD', freq:'\u2014', route:'IM/PO', days:'14 days (doxy+metro)' },
      { name:'Alt (per local guideline): ofloxacin + metronidazole (if low gonorrhoea risk)', dose:'ofloxacin 400 mg BD; metro 400 mg BD', freq:'\u2014', route:'PO', days:'14 days' },
      { name:'Analgesia; advise avoid intercourse until treated + partner(s) treated', dose:'\u2014', freq:'\u2014', route:'Advice', days:'\u2014' },
    ],
    altRegimens:[
      { label:'Severe / pregnant / abscess', drugs:'Admit for IV antibiotics / gynaecology.' },
      { label:'Partner notification', drugs:'Refer to sexual health (GUM) for contact tracing and STI management.' },
    ],
    counselling:[
      'This is an infection of the womb/tubes \u2014 we treat it promptly, even before tests are back, to protect your fertility.',
      'Take the full 14-day course, avoid sex until you and your partner(s) have been treated, and attend the sexual-health clinic for tests and partner treatment.',
      'Come back urgently if you get severe pain, fever, vomiting, or feel very unwell.',
      'Future protection: use condoms and have regular STI checks.',
    ],
    followUp:'Review at 72 h (should be improving). STI/partner management via GUM. No improvement / severe → admit/gynaecology. Discuss fertility implications.',
    redFlags:['Pregnancy (?ectopic), sepsis, severe pain/vomiting, or tubo-ovarian abscess → urgent gynaecology/admit.'],
    emisText:`Pelvic inflammatory disease (PID):
- Low threshold to treat empirically (protect fertility). Pregnancy test + STI NAATs but don't delay.
- Ceftriaxone 1 g IM stat + doxycycline 100 mg BD + metronidazole 400 mg BD \u00d714d (alt ofloxacin+metro if low GC risk).
- Avoid sex until treated; partner notification via GUM. Severe/pregnant/abscess \u2192 admit.`,
    sources:[{ label:'NICE CKS / BASHH \u2014 Pelvic inflammatory disease', url:'https://cks.nice.org.uk/topics/pelvic-inflammatory-disease/' }],
  },

  { id:'epididymo-orchitis', title:'Epididymo-orchitis', category:'Men\'s & Sexual Health',
    eyebrow:'Exclude torsion FIRST · treat by likely organism',
    indication:'Painful, swollen epididymis/testis. The critical step is excluding testicular torsion (surgical emergency). Then treat by likely cause: STI (younger, sexually active) vs enteric organism (older, urinary/instrumentation).',
    contraindications:'Sudden severe pain, young age, or any doubt → treat as TORSION (urgent surgical referral) \u2014 do not delay. Send STI screen and MSU. Adjust per cause/sensitivities; fluoroquinolone cautions.',
    duration:'10\u201314 days',
    drugs:[
      { name:'EXCLUDE torsion (sudden severe pain, age <20, high-riding testis) \u2192 urgent surgical referral', dose:'\u2014', freq:'\u2014', route:'Assessment', days:'\u2014' },
      { name:'Likely STI: ceftriaxone 1 g IM stat + doxycycline 100 mg BD', dose:'\u2014', freq:'\u2014', route:'IM/PO', days:'doxy 10\u201314 days' },
      { name:'Likely enteric (older / urinary): ofloxacin or levofloxacin (or per local guidance)', dose:'ofloxacin 200 mg BD / levofloxacin 500 mg OD', freq:'\u2014', route:'PO', days:'10\u201314 days' },
      { name:'Analgesia, scrotal support, rest', dose:'\u2014', freq:'PRN', route:'\u2014', days:'\u2014' },
    ],
    altRegimens:[
      { label:'STI confirmed/suspected', drugs:'Refer GUM for full screen + partner notification; avoid sex until treated.' },
      { label:'Severe / abscess / not improving', drugs:'Urology referral; consider imaging.' },
    ],
    counselling:[
      'First we make sure this isn\u2019t a twisted testicle, which is an emergency \u2014 if there\u2019s any doubt you\u2019ll be seen urgently by surgeons.',
      'Once that\u2019s excluded, antibiotics treat the infection; take the full course, rest, use scrotal support and pain relief.',
      'If it may be sexually transmitted, attend the sexual-health clinic for full testing and so partners can be treated.',
      'Come back urgently if the pain becomes severe, you develop a fever, or it isn\u2019t improving.',
    ],
    followUp:'Review at 48\u201372 h; should be improving. STI \u2192 GUM/partner notification. Not improving/abscess \u2192 urology.',
    redFlags:['Suspected torsion (sudden severe pain, young, high-riding/abnormal lie) → IMMEDIATE surgical referral.','Abscess, sepsis, or not improving → urology/admit.'],
    emisText:`Epididymo-orchitis:
- EXCLUDE TORSION first (sudden severe pain, <20, high-riding) \u2192 urgent surgery.
- STI likely: ceftriaxone 1 g IM stat + doxycycline 100 mg BD 10-14d (refer GUM).
- Enteric likely (older/urinary): ofloxacin 200 mg BD / levofloxacin 500 mg OD 10-14d.
- Scrotal support, analgesia. Not improving/abscess \u2192 urology.`,
    sources:[{ label:'NICE CKS / BASHH \u2014 Epididymo-orchitis', url:'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' }],
  },

  { id:'acute-prostatitis', title:'Acute bacterial prostatitis', category:'Men\'s & Sexual Health',
    eyebrow:'Prolonged antibiotic with good prostate penetration',
    indication:'Acute prostatitis (fever, perineal/pelvic pain, LUTS, tender prostate). Send MSU/STI screen; treat with a prolonged course of an antibiotic that penetrates the prostate. Assess for sepsis/retention.',
    contraindications:'Sepsis, acute urinary retention, or severe illness → admit. Avoid prostatic massage (bacteraemia). Adjust to culture; consider STI cause in younger men. Fluoroquinolone cautions.',
    duration:'14\u201328 days',
    drugs:[
      { name:'Send MSU (\u00b1 STI screen); assess sepsis/retention', dose:'\u2014', freq:'\u2014', route:'Investigation', days:'\u2014' },
      { name:'1st line: ciprofloxacin (or ofloxacin)', dose:'cipro 500 mg BD', freq:'BD', route:'PO', days:'14\u201328 days' },
      { name:'Alt: trimethoprim (if quinolone unsuitable/per sensitivities)', dose:'200 mg', freq:'BD', route:'PO', days:'14\u201328 days' },
      { name:'Analgesia; consider laxative; review with cultures', dose:'\u2014', freq:'PRN', route:'\u2014', days:'\u2014' },
    ],
    altRegimens:[
      { label:'STI suspected (younger men)', drugs:'Cover/refer per STI pathway (GUM).' },
      { label:'Severe / sepsis / retention', drugs:'Admit; IV antibiotics; suprapubic catheter if retention (avoid urethral if possible).' },
    ],
    counselling:[
      'This is an infection of the prostate gland, which needs a longer antibiotic course than a simple water infection.',
      'Take the full course, use pain relief, and keep hydrated; we may adjust the antibiotic once the urine test is back.',
      'Come back urgently \u2014 or call 999 \u2014 if you can\u2019t pass urine, develop shaking chills, or feel very unwell (these need hospital care).',
      'It can take a few weeks to fully settle; we\u2019ll review you.',
    ],
    followUp:'Review with cultures and at 48 h. Retention/sepsis → admit. Recurrent → consider chronic prostatitis / urology.',
    redFlags:['Sepsis, acute urinary retention, or severe illness → admit.','Recurrent/persistent → urology (chronic prostatitis).'],
    emisText:`Acute bacterial prostatitis:
- MSU \u00b1 STI screen; assess sepsis/retention.
- Ciprofloxacin 500 mg BD (or ofloxacin) 14-28d; alt trimethoprim 200 mg BD per sensitivities.
- Analgesia; avoid prostatic massage. Retention/sepsis \u2192 admit. Younger/STI risk \u2192 GUM.`,
    sources:[{ label:'NICE CKS \u2014 Prostatitis (acute)', url:'https://cks.nice.org.uk/topics/prostatitis-acute/' }],
  },

  { id:'chlamydia', title:'Genital chlamydia', category:'Men\'s & Sexual Health',
    eyebrow:'Doxycycline 1st line · partner notification',
    indication:'Uncomplicated genital Chlamydia trachomatis infection (often asymptomatic; or discharge, dysuria, pelvic pain). Treat, arrange partner notification and full STI screen — ideally via sexual health (GUM).',
    contraindications:'Doxycycline contraindicated in pregnancy → azithromycin (per current guidance) with test of cure. Complicated infection (PID, epididymo-orchitis) → treat as such. Always offer full STI/HIV screen and partner notification.',
    duration:'7 days',
    drugs:[
      { name:'Doxycycline (non-pregnant)', dose:'100 mg', freq:'BD', route:'PO', days:'7 days' },
      { name:'Pregnancy/breastfeeding or doxycycline unsuitable: azithromycin', dose:'1 g then 500 mg OD (per regimen)', freq:'\u2014', route:'PO', days:'1\u20133 days (test of cure)' },
      { name:'Full STI/HIV screen + partner notification + avoid sex 7 days (and until partners treated)', dose:'\u2014', freq:'\u2014', route:'Advice', days:'\u2014' },
    ],
    altRegimens:[
      { label:'Pregnancy', drugs:'Azithromycin (per current guidance); arrange test of cure.' },
      { label:'Rectal chlamydia / LGV', drugs:'Doxycycline 7 days (longer for LGV) \u2014 manage via GUM.' },
      { label:'Complicated (PID / epididymo-orchitis)', drugs:'Treat as the complication; extended regimen.' },
    ],
    counselling:[
      'Chlamydia is a common, easily treated infection that\u2019s often silent \u2014 a short antibiotic course clears it.',
      'Avoid sex for 7 days after starting treatment and until current partners have been treated, to prevent re-infection.',
      'It\u2019s important your recent partners are tested and treated \u2014 the sexual-health clinic can help with this confidentially.',
      'Have a full check for other infections including HIV, and a re-test if you\u2019re under 25 or at ongoing risk.',
    ],
    followUp:'Partner notification + full STI screen (ideally GUM). Test of cure in pregnancy/rectal/persistent. Re-test at 3 months if <25 / ongoing risk.',
    redFlags:['Complicated infection (PID, epididymo-orchitis) → treat accordingly.','Pregnancy → azithromycin + test of cure.'],
    emisText:`Genital chlamydia (uncomplicated):
- Doxycycline 100 mg BD 7d (non-pregnant).
- Pregnancy/unsuitable: azithromycin (per guidance) + test of cure.
- Full STI/HIV screen + partner notification (GUM); avoid sex 7d & until partners treated. Re-test 3/12 if <25/ongoing risk.`,
    sources:[{ label:'NICE CKS / BASHH \u2014 Chlamydia (uncomplicated genital)', url:'https://cks.nice.org.uk/topics/chlamydia-uncomplicated-genital/' }],
  }

  );
})();
