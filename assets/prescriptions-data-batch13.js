/* ============================================
   Reasoning GP — Ready Prescriptions (batch 13, Upload 127)
   Straightforward conditions a pharmacist or GP could manage by phone:
   10 prescription cards + 8 self-care (advice-only, buy over the counter) cards.
   Doses in our own words from the cited guidance and the product SPC —
   always check the SPC, BNF/BNFC and local formulary.
   ============================================ */
(function () {
  const RX = (window.RGP_PRESCRIPTIONS = window.RGP_PRESCRIPTIONS || []);
  const NHS = (path, label) => ({ label: 'NHS — ' + label, url: 'https://www.nhs.uk/' + path + '/' });
  const C = (slug, label) => NHS('conditions/' + slug, label);
  const TARGET = { label: 'RCGP TARGET — “Treating your infection” leaflets (UTI, skin, ear, throat, sinus and more)', url: 'https://elearning.rcgp.org.uk/mod/book/view.php?id=12647' };
  const TARGET_RTI = { label: 'RCGP TARGET — “Treating your infection: respiratory tract infection” leaflet', url: 'https://elearning.rcgp.org.uk/mod/book/view.php?id=12653' };
  const HT = { label: 'Healthier Together — when your child is unwell (NHS, parents and carers)', url: 'https://www.what0-18.nhs.uk/' };
  const BNFC = 'Children: dose and licensed age by age/weight band — check the BNFC and product SPC.';
  const OTC = { label: 'NHS England — Policy guidance: conditions for which over the counter items should not be routinely prescribed in primary care (2024)', url: 'https://www.england.nhs.uk/long-read/policy-guidance-conditions-for-which-over-the-counter-items-should-not-be-routinely-prescribed-in-primary-care/' };
  const PFIRST = { label: 'NHS England — Pharmacy First clinical pathways', url: 'https://www.england.nhs.uk/primary-care/pharmacy/pharmacy-services/pharmacy-first/' };

  RX.push(

  /* =================== PRESCRIPTION CARDS =================== */

  {
    id: 'insect-bite-infected',
    title: 'Infected insect bite',
    category: 'Infections',
    eyebrow: 'Most bites are not infected · flucloxacillin only if infection',
    aka: 'infected bite, insect sting infection, cellulitis after bite',
    indication: 'Insect bite or sting with signs of spreading bacterial infection (spreading redness, warmth, swelling, pain, pus) per NICE NG182 (2020). Most redness and itch in the first 48 hours is an inflammatory or allergic reaction — antibiotics do not help that.',
    contraindications: 'Do not give antibiotics for a non-infected bite or sting. Penicillin allergy → clarithromycin (erythromycin in pregnancy) or doxycycline (not under 12 or in pregnancy). Systemic upset, facial/periorbital spread, rapidly spreading or immunocompromised → same-day assessment. Tick bite with expanding rash → see Lyme card.',
    duration: '5–7 days (NICE NG182: 5 days, extend to 7 if needed)',
    drugs: [
      { name: 'Flucloxacillin (first choice)', dose: '500 mg', freq: 'QDS', route: 'PO', days: '5–7 days', child: true },
      { name: 'Penicillin allergy: Clarithromycin', dose: '500 mg', freq: 'BD', route: 'PO', days: '5–7 days', child: true },
      { name: 'Penicillin allergy in pregnancy: Erythromycin', dose: '500 mg', freq: 'QDS', route: 'PO', days: '5–7 days' },
      { name: 'Penicillin allergy, alternative: Doxycycline (not under 12, not pregnant)', dose: '200 mg on day 1, then 100 mg', freq: 'OD', route: 'PO', days: '5–7 days in total' },
    ],
    altRegimens: [
      { label: 'Not infected (redness/itch/swelling only)', drugs: 'Self-care — see “Insect bites and stings” self-care card: cold compress, oral antihistamine, hydrocortisone 1% cream.' },
      { label: 'Severe or systemically unwell', drugs: 'Same-day assessment / admission for IV antibiotics per local policy.' },
    ],
    counselling: [
      'Take the antibiotic for the full course; you should start to improve within 2–3 days.',
      'Mark the edge of the redness with a pen — if it spreads beyond the line, or you feel unwell or feverish, get seen the same day.',
      'Raise the area, keep it clean, and don’t scratch.',
      'Most bites that are red and itchy in the first day or two are an allergic reaction, not infection.',
    ],
    followUp: 'Review if not improving after 2–3 days of antibiotics, worsening at any time, or recurrent infection.',
    redFlags: [
      'Rapidly spreading redness, fever, rigors, confusion → sepsis assessment (999/same day).',
      'Facial swelling, lip/throat swelling, wheeze, collapse after a sting → anaphylaxis: 999 + IM adrenaline.',
      'Expanding target-like rash after a tick bite → Lyme disease (erythema migrans).',
    ],
    emisText: `Infected insect bite (NICE NG182):
- Flucloxacillin 500 mg QDS × 5–7 days (pen allergy: clarithromycin 500 mg BD × 5–7 days; pregnancy: erythromycin 500 mg QDS × 5–7 days).
- Mark margin; review if spreading/unwell or no better at 2–3 days. Non-infected bites → self-care only.`,
    sources: [
      { label: 'NICE NG182 — Insect bites and stings: antimicrobial prescribing (2020)', url: 'https://www.nice.org.uk/guidance/ng182' },
      { label: 'NICE CKS — Insect bites and stings', url: 'https://cks.nice.org.uk/topics/insect-bites-stings/' },
      PFIRST,
    ],
    ageRange: 'Adults and children aged 1 and over (under 1 → GP assessment).',
    children: 'Flucloxacillin or clarithromycin liquid by age band; doxycycline not under 12. ' + BNFC,
    pregnancy: 'Flucloxacillin safe; erythromycin if penicillin-allergic. Avoid doxycycline.',
    breastfeeding: 'Flucloxacillin and macrolides compatible; avoid doxycycline courses where possible.',
    selfCare: 'Non-infected bites: self-care with OTC antihistamine and hydrocortisone cream. Infected bites need an antibiotic.',
    leaflets: [C('insect-bites-and-stings', 'Insect bites and stings'), TARGET],
    pharmacyFirst: 'Pharmacy First (England): pharmacists can supply under the NHS clinical pathway for infected insect bites in adults and children aged 1 and over (NHS England).',
  },

  {
    id: 'scarlet-fever',
    title: 'Scarlet fever',
    category: 'Infections',
    eyebrow: 'Penicillin V 10 days · notifiable · exclude 24 h',
    aka: 'scarlatina, group A strep, strep A',
    indication: 'Clinical scarlet fever (sore throat, fever, headache, sandpaper-like rash, strawberry tongue, flushed cheeks) — group A streptococcus. UKHSA advises prompt antibiotic treatment of suspected cases; a throat swab is not required before treating.',
    contraindications: 'Penicillin allergy → macrolide (azithromycin or clarithromycin). Amoxicillin is an acceptable alternative where phenoxymethylpenicillin is unsuitable or unavailable (e.g. liquid shortages, per UKHSA interim advice). Check for chickenpox or flu in the household — higher iGAS risk.',
    duration: '10 days (phenoxymethylpenicillin); macrolide 5 days',
    drugs: [
      { name: 'Phenoxymethylpenicillin (penicillin V)', dose: '500 mg (adult and 12+)', freq: 'QDS', route: 'PO', days: '10 days', child: true },
      { name: 'Penicillin allergy: Azithromycin', dose: '500 mg', freq: 'OD', route: 'PO', days: '5 days', child: true },
      { name: 'Penicillin allergy, alternative: Clarithromycin', dose: '500 mg', freq: 'BD', route: 'PO', days: '5 days', child: true },
    ],
    altRegimens: [
      { label: 'Penicillin V unsuitable/unavailable', drugs: 'Amoxicillin for 10 days, dose by age (UKHSA interim guidance; check the BNFC).' },
      { label: 'Notification', drugs: 'Scarlet fever is notifiable: the registered medical practitioner notifies the local UKHSA health protection team on clinical suspicion (do not wait for a swab).' },
      { label: 'Outbreak setting', drugs: 'Two or more cases in a school/nursery within 10 days → setting informs the health protection team.' },
    ],
    counselling: [
      'Stay off school, nursery or work until 24 hours after starting the antibiotic.',
      'Finish the full 10-day course even when you feel better — it prevents complications.',
      'Paracetamol or ibuprofen for fever and pain; plenty of fluids.',
      'Rarely the same bacteria cause serious invasive infection: get urgent help (999/A&E) for a high fever that won’t settle, severe pain or swelling in a limb, breathing difficulty, confusion, drowsiness, or a child who is floppy or not drinking.',
      'Wash hands, catch coughs in tissues and don’t share cutlery or towels.',
    ],
    followUp: 'Safety-net. Review if not improving within 48–72 hours, or new joint pain, dark urine or swelling in the following weeks (rheumatic fever / post-streptococcal glomerulonephritis — rare).',
    redFlags: [
      'Signs of invasive group A strep (iGAS): persistent high fever, severe muscle or limb pain, rapidly spreading skin redness, breathing difficulty, drowsiness/confusion → 999.',
      'Child with recent chickenpox and new fever/skin changes → urgent assessment.',
      'Quinsy, dehydration, unable to swallow → same-day assessment.',
    ],
    emisText: `Scarlet fever (clinical diagnosis; UKHSA):
- Phenoxymethylpenicillin 500 mg QDS × 10 days (children: age-banded per BNFC). Pen allergy: azithromycin 500 mg OD × 5 days (or clarithromycin 500 mg BD × 5 days).
- NOTIFIED to UKHSA HPT on suspicion. Exclude from school/work until 24 h after starting antibiotics.
- iGAS safety-net given (high fever, limb pain, breathing difficulty, drowsiness → 999).`,
    sources: [
      { label: 'UKHSA — Scarlet fever: symptoms, diagnosis and treatment', url: 'https://www.gov.uk/government/publications/scarlet-fever-symptoms-diagnosis-treatment' },
      { label: 'UKHSA — Group A streptococcal infections: guidance and data', url: 'https://www.gov.uk/government/collections/group-a-streptococcal-infections-guidance-and-data' },
      { label: 'NICE CKS — Scarlet fever', url: 'https://cks.nice.org.uk/topics/scarlet-fever/' },
      { label: 'SPC — phenoxymethylpenicillin', url: 'https://www.medicines.org.uk/emc/search?q=phenoxymethylpenicillin' },
    ],
    ageRange: 'Mainly children 2–8 years; adults can be affected.',
    children: 'Phenoxymethylpenicillin by age band (1 month to under 12) for 10 days; macrolide by weight if penicillin-allergic. ' + BNFC,
    pregnancy: 'Phenoxymethylpenicillin safe. Penicillin allergy in pregnancy: erythromycin is usually preferred (avoid clarithromycin) — check the SPC.',
    breastfeeding: 'Penicillin compatible; macrolides compatible (monitor infant).',
    selfCare: 'Supportive self-care alongside antibiotics: fluids, paracetamol/ibuprofen, calamine for itchy rash.',
    leaflets: [C('scarlet-fever', 'Scarlet fever'), HT, TARGET],
    pharmacyFirst: 'Not a Pharmacy First condition (a sore throat aged 5+ may present via the sore-throat pathway — pharmacists refer suspected scarlet fever).',
  },

  {
    id: 'lyme-em',
    title: 'Lyme disease — erythema migrans',
    category: 'Infections',
    eyebrow: 'Clinical diagnosis · doxycycline 21 days',
    aka: 'tick bite rash, Borrelia, bullseye rash',
    indication: 'Erythema migrans (expanding red rash, often with central clearing, appearing 1–4 weeks after a tick bite) — diagnose and treat clinically without testing (NICE NG95, 2018). Treat with the same regimen whether or not there are mild systemic symptoms.',
    contraindications: 'Doxycycline: not in pregnancy or under 9 (NICE NG95 allows doxycycline from 9 for EM; many prescribers use amoxicillin first under 12 — check the BNFC). Azithromycin: avoid with cardiac involvement (QT). Focal neurological signs, carditis, arthritis → see the Lyme protocol (different regimens/specialist).',
    duration: '21 days',
    drugs: [
      { name: 'Doxycycline (first choice)', dose: '100 mg BD or 200 mg OD', freq: 'BD / OD', route: 'PO', days: '21 days' },
      { name: 'Alternative: Amoxicillin (first choice in pregnancy and young children)', dose: '1 g', freq: 'TDS', route: 'PO', days: '21 days', child: true },
      { name: 'Second alternative: Azithromycin (not with cardiac involvement)', dose: '500 mg', freq: 'OD', route: 'PO', days: '17 days', child: true },
    ],
    altRegimens: [
      { label: 'Tick bite, no rash', drugs: 'No prophylactic antibiotic (NICE NG95). Remove tick with fine tweezers/tick tool; safety-net for rash or flu-like illness over 30 days.' },
      { label: 'Ongoing symptoms after treatment', drugs: 'Consider a second course with an alternative antibiotic (e.g. amoxicillin after doxycycline); after two courses seek specialist advice.' },
    ],
    counselling: [
      'The rash is enough to diagnose Lyme disease — a blood test is often negative this early and is not needed.',
      'Doxycycline: take with a full glass of water, sitting or standing, not just before bed; avoid strong sun or use high-factor sunscreen.',
      'You may feel briefly worse in the first day of treatment (a known reaction) — keep taking it.',
      'Prevent bites: cover skin, use repellent, check for ticks after outdoor activities.',
    ],
    followUp: 'Review if the rash or symptoms persist after the course, or new neurological, cardiac or joint symptoms.',
    redFlags: [
      'Facial palsy, meningism, radicular pain, palpitations/syncope/heart block, swollen joints → protocol + specialist discussion.',
      'Rash with fever and unwell child → consider other diagnoses (e.g. cellulitis, meningococcal disease).',
    ],
    emisText: `Erythema migrans — clinical Lyme disease (NICE NG95):
- Doxycycline 100 mg BD (or 200 mg OD) × 21 days. Alt: amoxicillin 1 g TDS × 21 days; 2nd alt: azithromycin 500 mg OD × 17 days (not if cardiac involvement).
- No serology needed for EM. Counselled re photosensitivity, tick-bite prevention; safety-net for neuro/cardiac/joint features.`,
    sources: [
      { label: 'NICE NG95 — Lyme disease (2018)', url: 'https://www.nice.org.uk/guidance/ng95' },
      { label: 'NICE CKS — Lyme disease', url: 'https://cks.nice.org.uk/topics/lyme-disease/' },
      { label: 'SPC — doxycycline', url: 'https://www.medicines.org.uk/emc/search?q=doxycycline' },
    ],
    ageRange: 'Adults and young people 12+ (adult doses from 45 kg). Children: weight-based.',
    children: 'Under 12: amoxicillin or azithromycin by weight is usual; doxycycline per NICE NG95 from 9 years (off-label under 12). ' + BNFC,
    pregnancy: 'Avoid doxycycline. Amoxicillin is commonly used for uncomplicated EM; discuss disseminated disease with infection/obstetric specialists.',
    breastfeeding: 'Amoxicillin compatible; doxycycline — avoid prolonged courses; azithromycin compatible (monitor infant).',
    selfCare: 'Tick removal kits can be bought. No OTC treatment for Lyme disease.',
    leaflets: [C('lyme-disease', 'Lyme disease')],
    pharmacyFirst: null,
  },

  {
    id: 'trichomonas',
    title: 'Trichomonas vaginalis',
    category: "Women's & Sexual Health",
    eyebrow: 'Metronidazole 7 days · GUM · partner notification',
    aka: 'trichomoniasis, TV, vaginal discharge STI',
    indication: 'Confirmed (NAAT) or strongly suspected Trichomonas vaginalis. Refer to or liaise with sexual health (GUM) for full STI screen, partner notification and test of cure where needed (BASHH 2021).',
    contraindications: 'Metronidazole + alcohol → disulfiram-like reaction (avoid during and for 48 hours after). Pregnancy: use the 7-day regimen, not a high single dose. Men: treat per current BASHH/local sexual-health pathway.',
    duration: '7 days',
    drugs: [
      { name: 'Women (preferred): Metronidazole', dose: '400–500 mg', freq: 'BD', route: 'PO', days: '7 days' },
      { name: 'Men: Metronidazole per BASHH/local sexual-health pathway', dose: 'Per BASHH pathway', freq: '—', route: 'PO', days: 'Per pathway' },
      { name: 'Current partner(s): treat epidemiologically, regardless of their test result', dose: '—', freq: '—', route: 'Advice', days: '—' },
    ],
    altRegimens: [
      { label: 'Adherence concern (not pregnant)', drugs: 'Metronidazole 2 g single dose — less effective than 7 days in women; GUM advice.' },
      { label: 'Treatment failure', drugs: 'Exclude reinfection and non-adherence; GUM for extended or alternative regimens (resistance).' },
    ],
    counselling: [
      'Take the tablets twice a day for 7 days with food; no alcohol during the course and for 48 hours after.',
      'Avoid sex (including oral) until you and your partner(s) have finished treatment and for 7 days after.',
      'Partners need treating even if their test is negative — the sexual health clinic can help tell them anonymously.',
      'We recommend a full STI and HIV screen.',
    ],
    followUp: 'Test of cure if symptoms persist, in pregnancy, or if adherence/reinfection is in doubt (BASHH) — via GUM.',
    redFlags: [
      'Pelvic pain, fever, dyspareunia → consider PID.',
      'Under 16 or possible abuse → safeguarding.',
    ],
    emisText: `Trichomonas vaginalis (BASHH 2021):
- Metronidazole 400–500 mg BD × 7 days (women; also in pregnancy). Men: per BASHH/sexual-health pathway.
- No alcohol during + 48 h after. Abstain until all partners treated + 7 days.
- Referred to GUM for STI/HIV screen + partner notification.`,
    sources: [
      { label: 'BASHH — UK national guideline on Trichomonas vaginalis (2021)', url: 'https://www.bashh.org/resources/20/trichomonas_vaginalis_2021/' },
      { label: 'NICE CKS — Trichomoniasis', url: 'https://cks.nice.org.uk/topics/trichomoniasis/' },
      { label: 'SPC — metronidazole', url: 'https://www.medicines.org.uk/emc/search?q=metronidazole' },
    ],
    ageRange: 'Sexually active adolescents and adults.',
    children: 'Under 16: Fraser competence and safeguarding; under 13 — safeguarding referral. Infection in a pre-pubertal child → paediatric and safeguarding assessment.',
    pregnancy: 'Treat with the 7-day metronidazole regimen (avoid 2 g single dose). Inform the maternity team (association with preterm birth).',
    breastfeeding: 'Metronidazole is generally compatible with the 7-day regimen; after a 2 g single dose, manufacturers advise caution — check the SPC.',
    selfCare: 'Not suitable for self-care or OTC treatment. Condoms reduce reinfection.',
    leaflets: [C('trichomonas-infection', 'Trichomonas infection')],
    pharmacyFirst: null,
  },

  {
    id: 'whooping-cough',
    title: 'Whooping cough (pertussis) — case and contacts',
    category: 'Infections',
    eyebrow: 'Notify · macrolide if in window · exclusion · protect infants',
    aka: 'pertussis, 100-day cough, Bordetella',
    indication: 'Clinically suspected or confirmed pertussis (paroxysmal cough, whoop, post-tussive vomiting, apnoea in infants). Notify on suspicion. Antibiotics mainly reduce spread: treat cases within the UKHSA time window (usually within 14 days of cough onset; 21 days if the case is pregnant or has a priority-group contact such as a young infant). Contacts: prophylaxis only for close contacts in priority groups, as directed by UKHSA/the HPT.',
    contraindications: 'Macrolides: QT prolongation, interactions (statins, warfarin, DOACs — check). Clarithromycin under 1 month; azithromycin or clarithromycin from 1 month; erythromycin in pregnancy; co-trimoxazole if macrolides unsuitable (not in pregnancy or young infants) — as the current UKHSA guidance tables set out. Infants under 1 month on macrolides: warn about pyloric stenosis (projectile vomiting).',
    duration: 'Clarithromycin 7 days; azithromycin 3 days (per UKHSA tables)',
    drugs: [
      { name: 'Adults / children 1 month+: Azithromycin — dose by age/weight per UKHSA table and BNF/BNFC', dose: 'Per UKHSA table', freq: 'OD', route: 'PO', days: '3 days', child: true },
      { name: 'OR Clarithromycin (also first choice under 1 month) — dose per UKHSA table and BNF/BNFC', dose: 'Per UKHSA table', freq: 'BD', route: 'PO', days: '7 days', child: true },
      { name: 'Pregnancy: Erythromycin — dose per UKHSA table/BNF', dose: 'Per UKHSA table', freq: 'QDS', route: 'PO', days: '7 days' },
      { name: 'Priority-group close contacts: same regimen as a case, only on HPT/UKHSA criteria', dose: '—', freq: '—', route: 'Advice', days: '—' },
    ],
    altRegimens: [
      { label: 'Macrolide unsuitable (not pregnant, infant over 6 weeks)', drugs: 'Co-trimoxazole per UKHSA table/BNF.' },
      { label: 'Outside the treatment window', drugs: 'No antibiotic for public-health purposes; supportive care, exclusion advice per guidance, safety-net.' },
      { label: 'Vaccination', drugs: 'Check and complete the child’s routine pertussis vaccines; pregnant women: offer the pertussis vaccine from 16 weeks (ideally 20–32 weeks).' },
    ],
    counselling: [
      'Whooping cough is a notifiable infection — we will let the health protection team know.',
      'Stay away from school, nursery or work until 48 hours after starting the antibiotic (or for the untreated period in the current guidance — traditionally 21 days from the start of the cough).',
      'Keep away from newborn babies and pregnant women while infectious.',
      'The cough can last for weeks to months (the “100-day cough”) even after the infection has gone — antibiotics will not shorten it.',
      'Call 999 if a baby goes blue, stops breathing or has pauses in breathing.',
    ],
    followUp: 'Review infants and frail adults closely; safety-net. HPT advises on contacts and settings.',
    redFlags: [
      'Infant under 6 months with suspected pertussis → urgent paediatric assessment/admission (apnoea, cyanosis, feeding difficulty).',
      'Apnoea, cyanosis, seizures, pneumonia or exhaustion → 999 / admit.',
    ],
    emisText: `Suspected pertussis (UKHSA):
- NOTIFIED to UKHSA HPT on suspicion. Swab/test per week of illness.
- Within treatment window (usually ≤14 days of cough onset; ≤21 days if pregnant or priority-group contact): azithromycin × 3 days OR clarithromycin × 7 days (erythromycin in pregnancy) — doses per UKHSA table/BNF/BNFC.
- Exclusion: until 48 h after starting antibiotics (or untreated period per guidance). Avoid newborns/pregnant contacts. Contacts' prophylaxis per HPT.`,
    sources: [
      { label: 'UKHSA — Pertussis: guidelines for public health management', url: 'https://www.gov.uk/government/publications/pertussis-guidelines-for-public-health-management' },
      { label: 'NICE CKS — Whooping cough', url: 'https://cks.nice.org.uk/topics/whooping-cough/' },
      { label: 'UKHSA — Green Book chapter 24: pertussis', url: 'https://www.gov.uk/government/publications/pertussis-the-green-book-chapter-24' },
    ],
    ageRange: 'All ages; infants under 6 months are at highest risk.',
    children: 'Clarithromycin under 1 month; azithromycin or clarithromycin from 1 month — doses by weight/age (UKHSA table). ' + BNFC,
    pregnancy: 'Erythromycin per UKHSA; treatment window extended to 21 days. Offer pertussis vaccination in every pregnancy.',
    breastfeeding: 'Macrolides compatible; continue breastfeeding. Infant may need prophylaxis — HPT advice.',
    selfCare: 'Rest, fluids, small frequent meals; paracetamol/ibuprofen for discomfort. OTC cough medicines don’t help pertussis.',
    leaflets: [C('whooping-cough', 'Whooping cough'), HT],
    pharmacyFirst: null,
  },

  {
    id: 'constipation-child',
    title: 'Constipation in children (macrogol)',
    category: 'Paediatrics',
    eyebrow: 'Disimpact first · maintain for months · NICE CG99',
    aka: 'childhood constipation, faecal impaction, overflow soiling, Movicol Paediatric',
    indication: 'Idiopathic childhood constipation without red flags (NICE CG99, 2010, updated 2017). If impacted (or overflow soiling) start disimpaction; then maintenance until regular soft stools for several weeks, weaned over months.',
    contraindications: 'Red flags → do not treat as idiopathic: symptoms from birth/first weeks, delayed meconium (>48 h in term baby), ribbon stools, abdominal distension with vomiting, faltering growth, abnormal neurology/spine, perianal abnormalities, possible maltreatment. Macrogol: licensed ages vary by product (check the SPC).',
    duration: 'Disimpaction: escalating macrogol for up to 2 weeks; maintenance: several weeks after a regular pattern, then wean gradually (often months)',
    drugs: [
      { name: 'Disimpaction: Macrogol (e.g. Movicol Paediatric Plain) — escalating daily dose by age band', dose: 'Per BNFC (age band)', freq: 'Daily, escalating', route: 'PO', days: 'Until disimpacted (up to 2 weeks)', child: true },
      { name: 'Maintenance: Macrogol — adjust to soft, painless stools', dose: 'Per BNFC (age band)', freq: 'Daily', route: 'PO', days: 'Several weeks after regular pattern; then wean', child: true },
      { name: 'Add if insufficient: Stimulant (senna or sodium picosulfate)', dose: 'Per BNFC (age)', freq: 'At night', route: 'PO', days: 'As needed', child: true },
      { name: 'If macrogol not tolerated: Lactulose (or docusate) ± stimulant', dose: 'Per BNFC (age)', freq: 'Daily', route: 'PO', days: 'As maintenance', child: true },
    ],
    altRegimens: [
      { label: 'Infants not yet weaned', drugs: 'Check feed preparation/volume; lactulose or glycerol suppository per BNFC; paediatric advice if under 1 with persistent symptoms.' },
      { label: 'Not disimpacted after 2 weeks / not responding', drugs: 'Add stimulant; then paediatric referral. Enemas/manual evacuation only in hospital.' },
    ],
    counselling: [
      'Constipation is common and treatable, but treatment usually lasts months — stopping too early is the commonest reason it comes back.',
      'During disimpaction soiling and tummy ache may get worse for a few days before they get better.',
      'Mix each sachet in the stated amount of water (it can be added to squash or juice).',
      'Sit on the toilet after meals for 5 minutes with feet supported; reward charts for sitting (not for clean pants).',
      'Fluids and a balanced diet with fruit and vegetables help but are not enough on their own.',
    ],
    followUp: 'Review within 1 week of starting disimpaction, then regularly; continue maintenance for several weeks after a regular pattern, wean gradually. Refer if no response after 3 months.',
    redFlags: [
      'Red flags above, or failure to thrive, blood in stool (without fissure), leg weakness/abnormal reflexes → paediatric referral.',
      'Faecal impaction with vomiting and distension → same-day.',
    ],
    emisText: `Idiopathic childhood constipation (NICE CG99):
- Disimpaction: macrogol (e.g. Movicol Paediatric Plain) escalating dose by age band per BNFC, up to 2 weeks; add stimulant if not disimpacted.
- Maintenance: macrogol per BNFC, titrated to soft painless stools; continue several weeks after regular pattern, wean over months.
- Toileting routine, rewards, diet/fluids. Leaflet given. Review 1 week. Red flags excluded.`,
    sources: [
      { label: 'NICE CG99 — Constipation in children and young people', url: 'https://www.nice.org.uk/guidance/cg99' },
      { label: 'NICE CKS — Constipation in children', url: 'https://cks.nice.org.uk/topics/constipation-in-children/' },
      { label: 'SPC — macrogol (paediatric preparations)', url: 'https://www.medicines.org.uk/emc/search?q=macrogol' },
    ],
    ageRange: 'Infants, children and young people under 18 (NICE CG99).',
    children: 'Macrogol doses by age band (under 1, 1–5, 5–12, 12–17) for disimpaction and maintenance — no doses are copied here: check the BNFC and the product SPC (licensed ages differ between products).',
    pregnancy: 'N/A (adolescent pregnancy: see adult constipation card).',
    breastfeeding: 'Breastfed babies may go several days without a stool and that can be normal if soft and thriving.',
    selfCare: 'Macrogol can be bought, but children should be assessed first (red flags, impaction). Toileting routine and diet are self-care.',
    leaflets: [C('constipation', 'Constipation (adults and children)'), NHS('baby/health/constipation-in-children', 'Constipation in babies and children'), HT],
    pharmacyFirst: null,
  },

  {
    id: 'contraception-bridging',
    title: 'Contraception — POP bridging / quick-start and pill repeats',
    category: "Women's & Sexual Health",
    eyebrow: 'Desogestrel quick-start · CHC repeat checks · UKMEC 2025',
    aka: 'mini pill, progestogen-only pill, combined pill repeat, Pharmacy Contraception Service, bridging contraception',
    indication: 'Starting a desogestrel POP (including as a bridge after emergency contraception or while waiting for LARC) and repeat prescribing of oral contraception after a review. Quick-start is appropriate when pregnancy is reasonably excluded or the benefit outweighs the small risk (CoSRH).',
    contraindications: 'Check UKMEC 2025 for each method. POP UKMEC 4: current breast cancer. CHC UKMEC 4 includes: migraine with aura, history of VTE, BP ≥160/100, smoker aged 35+ smoking 15+/day, BMI ≥35 is UKMEC 3, within 6 weeks postpartum if breastfeeding. Enzyme-inducing drugs reduce efficacy. After ulipristal EC: wait 5 days before starting hormonal contraception.',
    duration: 'POP: continuous; CHC: per regimen. Repeat for up to 12 months after a satisfactory review.',
    drugs: [
      { name: 'Desogestrel POP (bridging / quick-start)', dose: '75 micrograms', freq: 'OD, continuous (12-hour window)', route: 'PO', days: 'Ongoing; extra precautions for the first 2 days' },
      { name: 'Combined pill (CHC) repeat — continue the current product if UKMEC 1–2 at review', dose: 'Current product', freq: 'Per regimen (tailored regimens allowed)', route: 'PO', days: 'Up to 12 months' },
    ],
    altRegimens: [
      { label: 'Bridging after levonorgestrel EC', drugs: 'Start the POP immediately; condoms/abstain for 2 days; pregnancy test at 3 weeks.' },
      { label: 'Bridging after ulipristal EC', drugs: 'Wait 5 days before starting the POP; condoms meanwhile and for 2 days after starting; pregnancy test at 3 weeks.' },
      { label: 'NHS Pharmacy Contraception Service (England)', drugs: 'Community pharmacists can initiate and continue oral contraception (POP and CHC) under the national service — signpost where available.' },
    ],
    counselling: [
      'Take one pill at the same time every day with no break; desogestrel is “late” after 12 hours — take it as soon as you remember and use condoms for 2 days.',
      'Irregular bleeding is common on the POP and usually not harmful — tell us if it is heavy, after sex, or persistent.',
      'Vomiting within 3 hours or severe diarrhoea can stop the pill working — follow the missed-pill advice.',
      'Pills don’t protect against STIs — use condoms with new partners.',
      'Combined pill: seek help for calf pain/swelling, chest pain, breathlessness, new migraine with aura or sudden severe headache.',
    ],
    followUp: 'CHC: blood pressure and BMI check at least annually, UKMEC review (smoking, migraine, VTE risk, new medicines). POP: no routine BP needed; review at 12 months or sooner if problems. Offer LARC information.',
    redFlags: [
      'Possible pregnancy (late/absent period after risk) → pregnancy test.',
      'Signs of VTE, stroke or new focal migraine on CHC → stop CHC and urgent assessment.',
      'Under 16: Fraser competence and safeguarding; under 13 → safeguarding referral.',
    ],
    emisText: `Contraception — oral:
- Desogestrel 75 micrograms OD continuously (quick-start/bridging); condoms for 2 days; pregnancy test at 3 weeks if UPSI risk. (After ulipristal: start 5 days later.)
- CHC repeat: BP ___ BMI ___ smoking ___ migraine with aura? N; VTE risk reviewed; UKMEC 2025 category ___. Issued 12 months.
- Missed-pill rules, STI advice, LARC discussed.`,
    sources: [
      { label: 'CoSRH (formerly FSRH) — UKMEC 2025', url: 'https://www.cosrh.org/Common/Uploaded%20files/documents/UKMEC_2025.pdf' },
      { label: 'NICE CKS — Contraception: assessment', url: 'https://cks.nice.org.uk/topics/contraception-assessment/' },
      { label: 'NHS England — Pharmacy Contraception Service', url: 'https://www.england.nhs.uk/pharmacycontraception' },
      { label: 'SPC — desogestrel', url: 'https://www.medicines.org.uk/emc/search?q=desogestrel' },
    ],
    ageRange: 'From menarche to age 55 (POP can continue to 55; CHC is UKMEC 2 from 40 and generally stopped at 50).',
    children: 'Under 16: assess Fraser competence; same products and doses. Under 13 → safeguarding referral.',
    pregnancy: 'Not used once pregnant — no evidence of harm from inadvertent use.',
    breastfeeding: 'POP: UKMEC 1 from birth. CHC: UKMEC 4 under 6 weeks postpartum if breastfeeding, UKMEC 2 from 6 weeks.',
    selfCare: 'Desogestrel POP can be bought from pharmacies after a pharmacist consultation; free via sexual health services and the NHS Pharmacy Contraception Service.',
    leaflets: [C('contraception', 'Contraception'), NHS('contraception/emergency-contraception', 'Emergency contraception')],
    pharmacyFirst: 'Not a Pharmacy First condition — the separate NHS Pharmacy Contraception Service (England) lets pharmacists start and continue oral contraception.',
  },

  {
    id: 'smoking-cessation',
    title: 'Smoking cessation',
    category: 'Mental Health',
    eyebrow: 'Behavioural support + varenicline / cytisinicline / combination NRT / vape',
    aka: 'stop smoking, quit smoking, NRT, nicotine patch, Champix, varenicline, cytisine, e-cigarette',
    indication: 'Adults who smoke and want to stop. NICE NG209 (updated 2025): offer behavioural support with varenicline, cytisinicline, combination NRT (long-acting + short-acting) or a nicotine-containing e-cigarette — the options most likely to work. Refer to the local stop smoking service.',
    contraindications: 'Varenicline, cytisinicline and bupropion: not under 18; not in pregnancy or breastfeeding. Cytisinicline: not 66 or over; see SPC (e.g. recent MI/stroke, unstable angina). Varenicline: dose-reduce in severe renal impairment. Bupropion: seizures, eating disorders, bipolar, MAOI, abrupt alcohol/benzodiazepine withdrawal. Stopping smoking changes levels of clozapine, olanzapine, theophylline, warfarin, insulin — review.',
    duration: 'Varenicline 12 weeks; cytisinicline 25 days; NRT usually 8–12 weeks',
    drugs: [
      { name: 'Varenicline (start 1–2 weeks before quit date)', dose: '0.5 mg OD days 1–3, 0.5 mg BD days 4–7, then 1 mg BD', freq: 'Titrated', route: 'PO', days: '12 weeks' },
      { name: 'OR Cytisinicline (quit date within first 5 days)', dose: '1.5 mg tablets — fixed 25-day schedule per SPC', freq: 'Per SPC schedule', route: 'PO', days: '25 days' },
      { name: 'OR Combination NRT: patch (10+ cigarettes/day)', dose: '21 mg/24 h or 25 mg/16 h', freq: 'Daily', route: 'Transdermal', days: '8–12 weeks, stepping down' },
      { name: '+ short-acting NRT (gum, lozenge, inhalator, mouth or nasal spray)', dose: 'Per product', freq: 'For cravings', route: 'Various', days: 'Alongside patch' },
    ],
    altRegimens: [
      { label: 'Nicotine-containing e-cigarette (vape)', drugs: 'NICE NG209 option with behavioural support — not a prescription; explain far less harmful than smoking, but not risk-free; aim to stop vaping eventually.' },
      { label: 'Bupropion', drugs: '150 mg OD for 6 days then 150 mg BD for 7–9 weeks (SPC); set quit date in week 2.' },
      { label: 'Pregnancy', drugs: 'Behavioural support + NRT (including combination) if needed; refer to the stop smoking in pregnancy service; vapes can be used.' },
    ],
    counselling: [
      'Combining stop-smoking medicine with support from a stop smoking service roughly triples your chance of quitting.',
      'Varenicline: take after food with water; nausea is common and usually settles; vivid dreams can occur. Tell us about any mood changes.',
      'NRT: use enough — a patch plus a fast-acting product works best. Nicotine itself is not what makes smoking harmful.',
      'Setting a quit date and telling friends and family helps. Expect cravings for 2–4 weeks.',
    ],
    followUp: 'Review at 2–4 weeks and at the end of treatment (CO-validated where possible). Re-check medicines affected by smoking (e.g. clozapine levels).',
    redFlags: [
      'Low mood, suicidal thoughts or agitation on treatment → stop the drug and review.',
      'People taking clozapine or olanzapine who stop smoking → check levels/doses (toxicity risk).',
    ],
    emisText: `Smoking cessation (NICE NG209):
- Referred to local stop smoking service. Quit date set: __/__.
- Varenicline: 0.5 mg OD days 1–3, 0.5 mg BD days 4–7, then 1 mg BD to complete 12 weeks (start 1–2 weeks before quit date).
  OR cytisinicline 1.5 mg 25-day course per SPC OR combination NRT (patch 21 mg/24 h + short-acting).
- Interacting medicines reviewed (clozapine/olanzapine/theophylline/warfarin/insulin). Vaping advice given.`,
    sources: [
      { label: 'NICE NG209 — Tobacco: preventing uptake, promoting quitting and treating dependence (updated 2025)', url: 'https://www.nice.org.uk/guidance/ng209' },
      { label: 'NICE CKS — Smoking cessation', url: 'https://cks.nice.org.uk/topics/smoking-cessation/' },
      { label: 'SPC — varenicline', url: 'https://www.medicines.org.uk/emc/search?q=varenicline' },
      { label: 'SPC — cytisinicline', url: 'https://www.medicines.org.uk/emc/search?q=cytisinicline' },
      { label: 'NHS England — varenicline roll-out (November 2024)', url: 'https://www.england.nhs.uk/2024/11/nhs-rolls-out-stop-smoking-pill-to-help-tens-of-thousands-quit/' },
    ],
    ageRange: 'Adults 18 and over for varenicline/cytisinicline/bupropion (cytisinicline under 66). NRT from 12 years.',
    children: 'Young people 12–17: behavioural support ± NRT (licensed from 12); no varenicline, cytisinicline or bupropion.',
    pregnancy: 'Behavioural support first; NRT (including combination) if needed; vapes can help. Do not use varenicline, cytisinicline or bupropion.',
    breastfeeding: 'NRT acceptable (use short-acting products after feeds). Avoid varenicline, cytisinicline and bupropion.',
    selfCare: 'NRT can be bought over the counter and is free through local stop smoking services; NHS Quit Smoking app and Smokefree helpline.',
    leaflets: [NHS('better-health/quit-smoking', 'Better Health — Quit smoking')],
    pharmacyFirst: 'Not a Pharmacy First condition — many community pharmacies run NHS stop smoking services.',
  },

  {
    id: 'copd-rescue-pack',
    title: 'COPD rescue pack (standby medicines)',
    category: 'Infections',
    eyebrow: 'Antibiotic + prednisolone 5 days · tell the practice within 48 h',
    aka: 'COPD standby pack, emergency pack, exacerbation pack',
    indication: 'Selected people with COPD who have had exacerbations, understand and can follow a written self-management plan, and know when to start the pack (NICE NG115, 2018 updated 2019). Prednisolone when breathlessness increases and interferes with daily activities; antibiotic if sputum becomes purulent/changes colour.',
    contraindications: 'Not for patients who cannot recognise an exacerbation or follow the plan. Check allergy, interactions (clarithromycin: statins, QT), pregnancy, renal function and previous sputum cultures. Frequent use → review maintenance treatment (do not keep re-issuing). Diabetes: warn about steroid hyperglycaemia.',
    duration: '5 days (both)',
    drugs: [
      { name: 'Prednisolone', dose: '30 mg', freq: 'OD', route: 'PO', days: '5 days' },
      { name: 'Antibiotic (if purulent sputum): Amoxicillin', dose: '500 mg', freq: 'TDS', route: 'PO', days: '5 days' },
      { name: 'OR Doxycycline', dose: '200 mg on day 1, then 100 mg', freq: 'OD', route: 'PO', days: '5 days in total' },
      { name: 'OR Clarithromycin', dose: '500 mg', freq: 'BD', route: 'PO', days: '5 days' },
    ],
    altRegimens: [
      { label: 'Previous resistant organism', drugs: 'Choose by previous sputum culture/sensitivities; seek microbiology advice.' },
      { label: 'Steroid only', drugs: 'If sputum not purulent, start prednisolone alone and contact the practice.' },
    ],
    counselling: [
      'Start the pack only as your plan says: steroid if you are more breathless than usual and it stops you doing everyday things; antibiotic if your phlegm changes colour or thickens.',
      'Tell the practice within 48 hours (2 working days) of starting the pack so we can check you and replace it.',
      'Call 999 if you are very breathless at rest, have chest pain, become confused or drowsy, or your lips turn blue.',
      'Take prednisolone in the morning with food.',
    ],
    followUp: 'Contact within 48 hours of use; review after each exacerbation (inhaler technique, maintenance therapy, pulmonary rehab, vaccines, smoking). More than 2 packs a year → review management.',
    redFlags: [
      'Severe breathlessness, SpO₂ below target, confusion, cyanosis, chest pain → 999/admission.',
      'Not improving within 48–72 hours of the pack → urgent review (consider pneumonia, PE, heart failure).',
    ],
    emisText: `COPD rescue pack issued (NICE NG115/NG114):
- Prednisolone 30 mg OD × 5 days (start if breathlessness interferes with daily activities).
- Amoxicillin 500 mg TDS × 5 days (or doxycycline 200 mg day 1 then 100 mg OD × 5 days total / clarithromycin 500 mg BD × 5 days) if sputum purulent.
- Written self-management plan given. Told to inform practice within 48 h of use. 999 criteria explained.`,
    sources: [
      { label: 'NICE NG115 — COPD in over 16s: diagnosis and management', url: 'https://www.nice.org.uk/guidance/ng115' },
      { label: 'NICE NG114 — COPD (acute exacerbation): antimicrobial prescribing', url: 'https://www.nice.org.uk/guidance/ng114' },
      { label: 'SPC — prednisolone', url: 'https://www.medicines.org.uk/emc/search?q=prednisolone' },
    ],
    ageRange: 'Adults with diagnosed COPD (NICE NG115: over 16).',
    children: 'Not applicable.',
    pregnancy: 'Rare. Amoxicillin preferred; avoid doxycycline; prednisolone acceptable — specialist input.',
    breastfeeding: 'Prednisolone and amoxicillin compatible; avoid doxycycline courses where possible.',
    selfCare: 'Self-management plan, breathing techniques, pulmonary rehabilitation; no OTC substitute for the pack.',
    leaflets: [C('chronic-obstructive-pulmonary-disease-copd', 'COPD'), TARGET_RTI],
    pharmacyFirst: null,
  },

  {
    id: 'asthma-oral-steroid',
    title: 'Asthma attack — oral steroid course',
    category: 'Infections',
    eyebrow: 'Only after a severity assessment · 999 features first',
    aka: 'asthma exacerbation, prednisolone burst, asthma rescue steroids',
    indication: 'Acute asthma attack that has been assessed (PEF, SpO₂, ability to speak, RR/HR) and judged moderate or acute severe but suitable for home after treatment (BTS/NICE/SIGN 2024 asthma guideline; BTS/SIGN acute asthma). This card is only used AFTER a severity assessment — never by phone without one.',
    contraindications: 'ANY life-threatening feature (PEF <33% best/predicted, SpO₂ <92%, silent chest, cyanosis, poor respiratory effort, exhaustion, confusion, arrhythmia, hypotension) → 999 now, not a prescription. Acute severe features (PEF 33–50%, RR ≥25, HR ≥110, can’t complete sentences) → start treatment and arrange admission unless rapid sustained response. Diabetes: monitor glucose.',
    duration: 'Adults: at least 5 days; children: usually 3 days (longer if needed)',
    drugs: [
      { name: 'Prednisolone (adults and 12+)', dose: '40–50 mg', freq: 'OD (morning)', route: 'PO', days: 'At least 5 days (until recovery)' },
      { name: 'Children under 12: Prednisolone — dose by age band per BNFC', dose: 'Per BNFC (age band)', freq: 'OD', route: 'PO', days: 'Usually 3 days', child: true },
      { name: 'Reliever as per plan (SABA via spacer or MART)', dose: 'Per plan', freq: 'PRN', route: 'INH', days: 'During attack' },
    ],
    altRegimens: [
      { label: 'Life-threatening or acute severe not responding', drugs: '999 — high-flow oxygen to target, back-to-back nebulised salbutamol, oral prednisolone given immediately; stay with the patient.' },
      { label: 'On MART', drugs: 'Follow the MART plan (extra doses of the maintenance inhaler as reliever) — oral steroid per assessment.' },
    ],
    counselling: [
      'Take the steroid tablets once a day in the morning with food for the full course — there is no need to taper a short course.',
      'Use your reliever as your plan says. Call 999 if you can’t speak in full sentences, your lips go blue, your reliever isn’t helping, or your peak flow falls below a third of your best.',
      'We need to see you within 2 working days (or as arranged) to check you are recovering and review your usual treatment.',
      'Ask why the attack happened — missed preventer doses, infection, triggers.',
    ],
    followUp: 'Review within 2 working days (sooner if worse); after hospital per discharge plan. Update the action plan, check inhaler technique and adherence, consider stepping up maintenance.',
    redFlags: [
      'Life-threatening features → 999 immediately.',
      'Two or more courses of oral steroids in a year → review control and consider specialist referral.',
      'Pregnancy with acute severe asthma → emergency (999).',
    ],
    emisText: `Acute asthma — assessed: PEF ___ (__% best), SpO₂ ___%, RR ___, HR ___, speech ___. Severity: moderate / acute severe (no life-threatening features).
- Prednisolone 40–50 mg OD for at least 5 days (child: per BNFC age band, usually 3 days).
- Reliever per plan. 999 advice given. Review within 2 working days; action plan updated.`,
    sources: [
      { label: 'NICE NG245 — Asthma: diagnosis, monitoring and chronic asthma management (BTS/NICE/SIGN, 2024)', url: 'https://www.nice.org.uk/guidance/ng245' },
      { label: 'BTS/SIGN — British guideline on the management of asthma (SIGN 158) — acute asthma', url: 'https://www.sign.ac.uk/our-guidelines/british-guideline-on-the-management-of-asthma/' },
      { label: 'NICE CKS — Asthma', url: 'https://cks.nice.org.uk/topics/asthma/' },
      { label: 'SPC — prednisolone', url: 'https://www.medicines.org.uk/emc/search?q=prednisolone' },
    ],
    ageRange: 'Adults and children (different severity thresholds under 5 and 5–11).',
    children: 'Assess by age group (under 5; 5–11). Prednisolone by age band for usually 3 days — no doses copied here: check the BNFC and local paediatric formulary. Parents should not start leftover prednisolone unless in an agreed specialist plan.',
    pregnancy: 'Treat acute asthma in pregnancy as normal — prednisolone and salbutamol are safe; acute severe asthma in pregnancy is an emergency.',
    breastfeeding: 'Prednisolone compatible (small amounts in milk).',
    selfCare: 'Not suitable for self-care. Personal asthma action plan; spacer; preventer adherence.',
    leaflets: [C('asthma', 'Asthma'), NHS('conditions/asthma/asthma-attacks', 'Asthma attacks')],
    pharmacyFirst: null,
  },

  /* =================== SELF-CARE CARDS (advice only — no prescription) =================== */

  {
    id: 'common-cold',
    type: 'selfcare',
    title: 'Common cold',
    category: 'ENT & Eyes',
    eyebrow: 'Self-care · buy over the counter · no prescription',
    aka: 'coryza, URTI, runny nose, blocked nose, cold and flu remedies',
    indication: 'Viral upper respiratory infection — runny/blocked nose, sore throat, cough, mild fever. Lasts about 7–10 days (cough up to 3 weeks). NHS England OTC guidance: coughs, colds and nasal congestion are suitable for self-care — products should not routinely be prescribed.',
    contraindications: 'OTC cough and cold medicines: not under 6 years; 6–12 years only on pharmacist advice (MHRA). Decongestants: caution in hypertension, heart disease, glaucoma, prostatism, MAOIs; nasal decongestant sprays no longer than 5 consecutive days (MHRA, April 2026). Check combination products for paracetamol (avoid double dosing).',
    duration: '7–10 days',
    drugs: [
      { name: 'Paracetamol or ibuprofen (buy OTC) for fever/aches', dose: 'Per pack / age', freq: 'PRN', route: 'PO', days: 'While needed' },
      { name: 'Saline nasal drops/spray (all ages)', dose: 'Per pack', freq: 'PRN', route: 'Nasal', days: 'While needed' },
      { name: 'Decongestant spray (adults; max 5 days)', dose: 'Per pack', freq: 'Per pack', route: 'Nasal', days: 'Up to 5 consecutive days (MHRA 2026)' },
      { name: 'Honey and lemon drink (1 year and over)', dose: '—', freq: 'PRN', route: 'PO', days: 'While needed' },
    ],
    altRegimens: [
      { label: 'Infants', drugs: 'Saline drops before feeds; paracetamol from 2 months/ibuprofen from 3 months (over 5 kg) per pack; seek help if feeding poorly.' },
    ],
    counselling: [
      'Antibiotics don’t help colds. Rest, drink plenty and use paracetamol or ibuprofen if needed.',
      'A pharmacist can advise on cold remedies — many contain the same ingredients, so check you are not doubling up on paracetamol.',
      'Wash hands often and catch sneezes in a tissue.',
    ],
    followUp: 'No routine follow-up. Seek help if symptoms last more than 3 weeks, or red flags.',
    redFlags: [
      'Breathing difficulty, chest pain, coughing blood, confusion → urgent help.',
      'Child: see the “Fever in under-5s” card for traffic-light warning signs.',
    ],
    emisText: `Common cold — self-care advice given (NHS England OTC guidance). No prescription issued.
Paracetamol/ibuprofen and saline/decongestant from pharmacy as appropriate; no OTC cough/cold medicines under 6. Safety-net given.`,
    sources: [
      OTC,
      { label: 'NICE CKS — Common cold', url: 'https://cks.nice.org.uk/topics/common-cold/' },
    ],
    ageRange: 'All ages.',
    children: 'No OTC cough/cold medicines under 6; paracetamol/ibuprofen by age on the pack. ' + BNFC,
    pregnancy: 'Paracetamol; avoid oral decongestants (especially 1st trimester) and ibuprofen from 20 weeks; saline and steam (care) instead.',
    breastfeeding: 'Paracetamol and ibuprofen compatible; avoid pseudoephedrine (may reduce milk supply).',
    selfCare: 'Self-care — buy over the counter. Pharmacist advice for children 6–12 and anyone on other medicines.',
    leaflets: [C('common-cold', 'Common cold'), TARGET_RTI],
    pharmacyFirst: 'Self-care / pharmacist advice (not a Pharmacy First clinical pathway).',
  },

  {
    id: 'teething',
    type: 'selfcare',
    title: 'Teething',
    category: 'Paediatrics',
    eyebrow: 'Self-care · no benzocaine or choline salicylate gels',
    aka: 'teething baby, sore gums, teething gel',
    indication: 'Teething discomfort (sore red gums, dribbling, chewing, flushed cheek, mild irritability) usually from about 6 months. Teething does not cause high fever or diarrhoea — look for another cause.',
    contraindications: 'Do not use choline salicylate gels under 16 (Reye’s syndrome) or benzocaine teething products in young children; lidocaine gels — non-drug measures first (MHRA advice). Do not use amber necklaces (choking/strangulation). Ibuprofen: not if dehydrated or chickenpox.',
    duration: 'Episodes of a few days as each tooth comes through',
    drugs: [
      { name: 'Teething ring (chilled, not frozen) / gum massage with a clean finger', dose: '—', freq: 'PRN', route: 'Advice', days: '—' },
      { name: 'Healthy chewing foods from 6 months (e.g. raw vegetable sticks — supervise)', dose: '—', freq: 'PRN', route: 'Advice', days: '—' },
      { name: 'Sugar-free paracetamol or ibuprofen suitable for age (buy OTC)', dose: 'Per pack / age', freq: 'PRN', route: 'PO', days: 'Short term' },
    ],
    altRegimens: [
      { label: 'Under 3 months / under 5 kg', drugs: 'Teething is unlikely; seek advice for an unsettled young baby.' },
    ],
    counselling: [
      'Teething can make babies unsettled but should not make them very unwell — a temperature of 38°C or more, diarrhoea or a rash are not teething.',
      'Avoid teething gels containing choline salicylate or benzocaine; use a chilled teething ring instead.',
      'Start brushing teeth as soon as they appear with a smear of fluoride toothpaste; register with a dentist.',
    ],
    followUp: 'None. Seek advice if worried or symptoms suggest illness.',
    redFlags: [
      'Fever 38°C or more under 3 months, or any traffic-light red feature → urgent help (see Fever in under-5s card).',
    ],
    emisText: `Teething — self-care advice (no prescription). Chilled teething ring, gum massage, sugar-free paracetamol/ibuprofen per pack. Avoid choline salicylate/benzocaine gels and amber necklaces. Fever/diarrhoea not due to teething — safety-net given.`,
    sources: [
      OTC,
      { label: 'NICE CKS — Teething', url: 'https://cks.nice.org.uk/topics/teething/' },
      { label: 'MHRA Drug Safety Update — Oral salicylate gels: not for use in those younger than 16 years', url: 'https://www.gov.uk/drug-safety-update/oral-salicylate-gels-not-for-use-in-those-younger-than-age-16-years' },
    ],
    ageRange: 'Babies and toddlers (about 4 months to 2½ years).',
    children: 'Paracetamol from 2 months and ibuprofen from 3 months (over 5 kg) per pack instructions. ' + BNFC,
    pregnancy: 'N/A.',
    breastfeeding: 'Breastfeeding can continue; if baby bites, break the latch and reposition.',
    selfCare: 'Self-care — buy over the counter (NHS England OTC guidance: teething/mild toothache). No prescription needed.',
    leaflets: [NHS('baby/babys-development/teething/baby-teething-symptoms', 'Baby teething symptoms'), HT],
    pharmacyFirst: 'Self-care / pharmacist advice (not a Pharmacy First clinical pathway).',
  },

  {
    id: 'sprains-strains',
    type: 'selfcare',
    title: 'Sprains and strains',
    category: 'Musculoskeletal & Rheumatology',
    eyebrow: 'Self-care · protect, rest, ice, compress, elevate',
    aka: 'sprained ankle, pulled muscle, soft tissue injury',
    indication: 'Minor soft tissue injury (ligament sprain or muscle strain) without features of fracture. NHS England OTC guidance: minor sprains and strains are suitable for self-care.',
    contraindications: 'Exclude fracture (Ottawa ankle/knee rules: bony tenderness, unable to weight-bear 4 steps). Topical/oral NSAIDs: avoid in asthma if NSAID-sensitive, from 20 weeks of pregnancy, active peptic ulcer, severe heart/kidney disease; topical preferred in older people.',
    duration: 'Usually improves within 2 weeks; severe sprains up to 6–8 weeks',
    drugs: [
      { name: 'PRICE for 48–72 hours: protect, rest, ice (wrapped, 20 min every 2–3 h), compression, elevation', dose: '—', freq: '—', route: 'Advice', days: '48–72 hours' },
      { name: 'Topical NSAID gel (e.g. ibuprofen) — buy OTC', dose: 'Per pack', freq: 'Per pack', route: 'Topical', days: 'Up to 2 weeks' },
      { name: 'Paracetamol or oral ibuprofen (buy OTC)', dose: 'Per pack', freq: 'PRN', route: 'PO', days: 'Short term' },
    ],
    altRegimens: [
      { label: 'Avoid HARM for 72 hours', drugs: 'Heat, alcohol, running/exercise, massage.' },
      { label: 'After 48–72 hours', drugs: 'Gradually return to normal activity; gentle exercises improve recovery.' },
    ],
    counselling: [
      'Most sprains and strains get better with self-care and a pharmacist can advise on painkillers and supports.',
      'Start moving the joint gently after 2–3 days; avoid strenuous exercise for 8 weeks if severe.',
      'NHS physiotherapy self-referral may be available locally if not improving.',
    ],
    followUp: 'Seek review if not improving after 2 weeks or concerns about fracture.',
    redFlags: [
      'Unable to bear weight, deformity, bony tenderness, numbness, cold or pale limb → urgent care/minor injuries (X-ray).',
      'Heard a crack/pop with immediate swelling (e.g. knee) or Achilles injury → assessment.',
    ],
    emisText: `Sprain/strain — self-care advice given (NHS England OTC guidance). No prescription. PRICE 48–72 h, avoid HARM, topical NSAID/paracetamol OTC. Fracture features absent; safety-net given.`,
    sources: [
      OTC,
      { label: 'NICE CKS — Sprains and strains', url: 'https://cks.nice.org.uk/topics/sprains-strains/' },
    ],
    ageRange: 'All ages (children: growth-plate injuries — lower threshold for X-ray).',
    children: 'Children: paracetamol/ibuprofen by age; tender bone near a joint in a child may be a growth-plate fracture — assess. ' + BNFC,
    pregnancy: 'Paracetamol; avoid oral and topical NSAIDs from 20 weeks (and generally in pregnancy unless advised).',
    breastfeeding: 'Paracetamol and ibuprofen (oral or gel) compatible.',
    selfCare: 'Self-care — buy over the counter. No prescription needed.',
    leaflets: [C('sprains-and-strains', 'Sprains and strains')],
    pharmacyFirst: 'Self-care / pharmacist advice (not a Pharmacy First clinical pathway).',
  },

  {
    id: 'burns-scalds',
    type: 'selfcare',
    title: 'Minor burns and scalds',
    category: 'Dermatology',
    eyebrow: 'Self-care · cool 20 min · know when to refer',
    aka: 'burn, scald, first aid burns, British Burn Association',
    indication: 'Small superficial burns or scalds (red, painful, or small blisters) in otherwise well people — first aid and self-care. Use the British Burn Association / National Burn Care Referral Guidance to decide who needs a burns service.',
    contraindications: 'Do not use ice, iced water, butter, toothpaste or creams on a fresh burn. Do not burst blisters. Do not wrap cling film around a limb (lay it lengthways).',
    duration: 'Superficial burns usually heal within 2 weeks',
    drugs: [
      { name: 'Cool the burn under cool running water for 20 minutes (effective up to 3 hours after injury); remove jewellery/clothing unless stuck', dose: '—', freq: 'Once', route: 'First aid', days: 'Immediately' },
      { name: 'Cover loosely with cling film (laid on, not wrapped) or a clean non-fluffy dressing', dose: '—', freq: '—', route: 'First aid', days: '—' },
      { name: 'Paracetamol or ibuprofen (buy OTC)', dose: 'Per pack / age', freq: 'PRN', route: 'PO', days: 'Short term' },
    ],
    altRegimens: [
      { label: 'Refer to burns service / emergency department (BBA referral criteria)', drugs: 'Burns of 3% TBSA or more in adults or 2% or more in children; full-thickness or deep burns; circumferential burns; burns to face, hands, feet, genitalia, perineum or major joints; chemical, electrical or friction burns; inhalation injury; suspected non-accidental injury; burns not healed by 2 weeks; significant comorbidity, pregnancy, extremes of age; signs of infection or toxic shock.' },
      { label: 'Tetanus', drugs: 'Check tetanus immunisation status.' },
    ],
    counselling: [
      'Cool the burn with cool running water for 20 minutes as soon as possible, then cover it with cling film.',
      'Keep the person warm while cooling the burn.',
      'Leave blisters alone; keep the area clean and moisturise once healed. Protect healed skin from the sun for at least a year.',
      'In a child, watch for fever, rash, vomiting, diarrhoea or being unwell after a burn — toxic shock syndrome is rare but serious.',
    ],
    followUp: 'Review if not healing in 2 weeks, increasing pain/redness/discharge, or the child becomes unwell.',
    redFlags: [
      'Any BBA referral criterion above → burns service/ED.',
      'Child with a burn who develops fever, rash, diarrhoea/vomiting or is unwell → urgent (toxic shock syndrome).',
      'Burn pattern not fitting the story → safeguarding.',
    ],
    emisText: `Minor burn/scald — first aid (cool running water 20 min, cling film) and self-care advice given. Size ~__% TBSA, site ___, depth superficial. BBA referral criteria not met. Tetanus status ___. Safety-net (infection, toxic shock in children). No prescription issued.`,
    sources: [
      { label: 'British Burn Association — First aid clinical practice guidelines (2018; hosted copy)', url: 'https://www.salisbury.nhs.uk/media/kgklfbxt/british-burn-association-first-aid-clinical-practice-guidelines.pdf' },
      { label: 'NICE CKS — Burns and scalds (includes burns-service referral criteria)', url: 'https://cks.nice.org.uk/topics/burns-scalds/' },
    ],
    ageRange: 'All ages (lower referral threshold in children and older people).',
    children: 'Children: refer at 2% TBSA or more; paracetamol/ibuprofen by age; consider safeguarding. ' + BNFC,
    pregnancy: 'Any significant burn in pregnancy → refer (BBA). Paracetamol for pain.',
    breastfeeding: 'Paracetamol and ibuprofen compatible.',
    selfCare: 'Self-care — first aid and pain relief bought over the counter for minor superficial burns.',
    leaflets: [C('burns-and-scalds', 'Burns and scalds')],
    pharmacyFirst: 'Self-care / pharmacist advice (not a Pharmacy First clinical pathway).',
  },

  {
    id: 'hand-foot-mouth',
    type: 'selfcare',
    title: 'Hand, foot and mouth disease',
    category: 'Paediatrics',
    eyebrow: 'Self-care · fluids · no exclusion if well',
    aka: 'HFMD, coxsackie, mouth ulcers and rash in children',
    indication: 'Mild viral illness (usually coxsackievirus) mainly in under-10s: mouth ulcers, then spots/blisters on hands, feet, sometimes buttocks; mild fever. Self-limiting in 7–10 days.',
    contraindications: 'No antivirals or antibiotics. Avoid aspirin under 16. Mouth gels with choline salicylate not under 16.',
    duration: '7–10 days',
    drugs: [
      { name: 'Fluids — cold drinks, ice lollies; soft cool foods', dose: '—', freq: 'Often', route: 'Advice', days: 'While sore' },
      { name: 'Paracetamol or ibuprofen suitable for age (buy OTC)', dose: 'Per pack / age', freq: 'PRN', route: 'PO', days: 'Short term' },
      { name: 'Age-appropriate mouth ulcer spray/gel (pharmacist advice)', dose: 'Per pack', freq: 'Per pack', route: 'Oromucosal', days: 'Short term' },
    ],
    altRegimens: [
      { label: 'School/nursery', drugs: 'No need to keep a well child off (UKHSA); stay off while unwell.' },
    ],
    counselling: [
      'It usually gets better on its own within 7–10 days; the main thing is keeping your child drinking.',
      'Wash hands often and don’t share towels; the virus can stay in poo for weeks.',
      'Nails may peel or shed a few weeks later — they grow back.',
    ],
    followUp: 'None routinely.',
    redFlags: [
      'Not drinking/signs of dehydration (few wet nappies), very high fever, drowsiness, stiff neck, seizures → urgent help.',
      'Symptoms in a newborn, pregnant woman near term, or immunocompromised person → seek advice.',
    ],
    emisText: `Hand, foot and mouth disease — self-care advice (no prescription): fluids, paracetamol/ibuprofen OTC, hygiene; no exclusion needed if well (UKHSA). Dehydration/red-flag safety-net given.`,
    sources: [
      OTC,
      { label: 'NICE CKS — Hand, foot and mouth disease', url: 'https://cks.nice.org.uk/topics/hand-foot-mouth-disease/' },
      { label: 'UKHSA — Health protection in children and young people settings (exclusion table)', url: 'https://www.gov.uk/government/publications/health-protection-in-schools-and-other-childcare-facilities' },
    ],
    ageRange: 'Mainly children under 10; adults can be affected.',
    children: 'Paracetamol/ibuprofen by age; check mouth products’ minimum age. ' + BNFC,
    pregnancy: 'Usually mild; infection near term → inform the midwife (neonatal infection risk). Paracetamol for fever.',
    breastfeeding: 'Continue breastfeeding; hand hygiene.',
    selfCare: 'Self-care — buy over the counter. No prescription needed.',
    leaflets: [C('hand-foot-mouth-disease', 'Hand, foot and mouth disease'), HT],
    pharmacyFirst: 'Self-care / pharmacist advice (not a Pharmacy First clinical pathway).',
  },

  {
    id: 'blepharitis-selfcare',
    type: 'selfcare',
    title: 'Blepharitis (lid hygiene)',
    category: 'ENT & Eyes',
    eyebrow: 'Self-care · daily lid hygiene is the treatment',
    aka: 'sore eyelids, crusty eyelids, meibomian gland dysfunction, lid wipes',
    indication: 'Chronic inflammation of the eyelid margins (crusting, itchy/gritty eyes, red lid margins). Long-term lid hygiene is the main treatment (College of Optometrists). NHS England OTC guidance: mild irritant dermatitis/dry eye and lid hygiene products are for self-care.',
    contraindications: 'Not for a painful red eye, reduced vision, photophobia, or a contact-lens wearer with a painful red eye → same-day eye assessment. Hot (not warm) compresses risk burns.',
    duration: 'Twice daily in a flare, then once daily long term',
    drugs: [
      { name: 'Warm compress to closed eyelids 5–10 minutes', dose: '—', freq: 'BD in flare, OD maintenance', route: 'Advice', days: 'Long term' },
      { name: 'Gentle lid massage towards the lash line, then clean lid margins (lid wipes/cleanser bought OTC)', dose: '—', freq: 'BD in flare, OD maintenance', route: 'Topical', days: 'Long term' },
      { name: 'Lubricant eye drops (buy OTC) if dry/gritty', dose: 'Per pack', freq: 'PRN', route: 'Eye', days: 'As needed' },
    ],
    altRegimens: [
      { label: 'Not settling after good lid hygiene', drugs: 'Community optometrist / local eye-care pathway; topical or oral antibiotics are not routine (see the blepharitis protocol).' },
    ],
    counselling: [
      'Blepharitis is usually long-term and can’t be cured, but daily lid cleaning keeps it under control.',
      'Avoid eye make-up during flares; remove contact lenses while eyes are sore.',
      'If you have rosacea or dandruff, treating these can help too.',
    ],
    followUp: 'Optometrist if not improving after 2–4 weeks of lid hygiene.',
    redFlags: [
      'Painful red eye, reduced vision, light sensitivity → same-day eye assessment.',
      'Persistent lid lump, lash loss, ulceration or distortion → exclude malignancy.',
    ],
    emisText: `Blepharitis — self-care advice (no prescription): warm compress + lid massage + lid cleaning BD in flare then OD long term; lubricants OTC. Red-eye safety-net; optometrist if not settling.`,
    sources: [
      { label: 'College of Optometrists — Clinical Management Guideline: blepharitis (lid margin disease)', url: 'https://www.college-optometrists.org/clinical-guidance/clinical-management-guidelines/blepharitis_lidmargindisease' },
      { label: 'NICE CKS — Blepharitis', url: 'https://cks.nice.org.uk/topics/blepharitis/' },
      OTC,
    ],
    ageRange: 'All ages (mostly adults).',
    children: 'Children: lid hygiene as adults with supervision; recurrent styes/chalazia — optometry.',
    pregnancy: 'Lid hygiene and lubricants are safe.',
    breastfeeding: 'Lid hygiene and lubricants are safe.',
    selfCare: 'Self-care — buy lid wipes, cleansers and lubricants over the counter. No prescription needed.',
    leaflets: [C('blepharitis', 'Blepharitis')],
    pharmacyFirst: 'Self-care / pharmacist or community optometrist advice (not a Pharmacy First clinical pathway).',
  },

  {
    id: 'insect-bites-stings',
    type: 'selfcare',
    title: 'Insect bites and stings (not infected)',
    category: 'Dermatology',
    eyebrow: 'Self-care · antihistamine · no antibiotic',
    aka: 'bee sting, wasp sting, mosquito bite, horsefly bite, large local reaction',
    indication: 'Bites and stings causing local redness, swelling, itch or pain without signs of infection. Large local reactions (swelling over 10 cm) peak at 24–48 hours and are allergic, not infective — antibiotics are not needed (NICE NG182).',
    contraindications: 'Hydrocortisone 1% OTC: not on the face, eyes or anogenital area, or under 10 years without medical advice. Sedating antihistamines: drowsiness.',
    duration: 'Usually settles within a few days (large local reactions up to 10 days)',
    drugs: [
      { name: 'Remove sting/tick (scrape sideways; tick — fine tweezers close to skin); wash with soap and water', dose: '—', freq: 'Once', route: 'First aid', days: '—' },
      { name: 'Cold compress; raise the area', dose: '—', freq: 'PRN', route: 'Advice', days: 'Few days' },
      { name: 'Non-sedating oral antihistamine (buy OTC)', dose: 'Per pack / age', freq: 'OD', route: 'PO', days: 'Few days' },
      { name: 'Hydrocortisone 1% cream (buy OTC; adults and children 10+)', dose: 'Thin layer', freq: 'Per pack', route: 'Topical', days: 'Up to 7 days' },
    ],
    altRegimens: [
      { label: 'Signs of infection (spreading redness, pus, fever)', drugs: 'See the “Infected insect bite” prescription card (Pharmacy First from 1 year).' },
      { label: 'Tick bite', drugs: 'No antibiotic prophylaxis; watch for an expanding rash for 30 days (see Lyme card).' },
    ],
    counselling: [
      'Most bites and stings settle within a few days; try not to scratch.',
      'Big swelling the next day is usually an allergic reaction, not infection — an antihistamine and a cold compress help.',
      'Prevent bites with insect repellent and covering skin; take malaria advice before travel.',
    ],
    followUp: 'None unless worsening.',
    redFlags: [
      'Swelling of lips/tongue/throat, wheeze, faintness → anaphylaxis: 999, adrenaline auto-injector if available.',
      'Sting in the mouth/throat → urgent help.',
      'Spreading redness, pus, fever → infected bite card.',
    ],
    emisText: `Insect bite/sting, not infected — self-care advice (NICE NG182; NHS England OTC guidance). No antibiotic. Cold compress, OTC antihistamine ± hydrocortisone 1% (10+). Anaphylaxis and infection safety-net given.`,
    sources: [
      { label: 'NICE NG182 — Insect bites and stings: antimicrobial prescribing', url: 'https://www.nice.org.uk/guidance/ng182' },
      { label: 'NICE CKS — Insect bites and stings', url: 'https://cks.nice.org.uk/topics/insect-bites-stings/' },
      OTC,
    ],
    ageRange: 'All ages.',
    children: 'Antihistamine liquid by age (many from 2 years); hydrocortisone 1% OTC from 10 years only. ' + BNFC,
    pregnancy: 'Loratadine/cetirizine and short-term hydrocortisone cream acceptable.',
    breastfeeding: 'Loratadine/cetirizine and topical hydrocortisone compatible.',
    selfCare: 'Self-care — buy over the counter. No prescription needed.',
    leaflets: [C('insect-bites-and-stings', 'Insect bites and stings')],
    pharmacyFirst: 'Non-infected bites: self-care/pharmacist advice. Infected bites: Pharmacy First pathway (1 year and over).',
  },

  {
    id: 'fever-under-5',
    type: 'selfcare',
    title: 'Fever in under-5s (self-care and safety-netting)',
    category: 'Paediatrics',
    eyebrow: 'NICE NG143 traffic light · antipyretics for distress only',
    aka: 'high temperature child, febrile child, paracetamol ibuprofen children, traffic light',
    indication: 'A child under 5 with fever (38°C or more) who has been assessed and has no red or amber traffic-light features (NICE NG143, 2019, updated 2021) — managed at home with advice. Antipyretics are for distress, not to lower the number.',
    contraindications: 'Under 3 months with 38°C or more = red (urgent assessment); 3–6 months with 39°C or more = amber. Do not give paracetamol and ibuprofen at the same time; consider switching only if distress persists or recurs before the next dose; do not use tepid sponging; don’t over- or under-dress. Ibuprofen: avoid in chickenpox or dehydration.',
    duration: 'Most viral fevers settle within 3–5 days',
    drugs: [
      { name: 'Paracetamol OR ibuprofen suitable for age (buy OTC) — only if the child is distressed', dose: 'Per pack / age', freq: 'PRN within pack limits', route: 'PO', days: 'While distressed' },
      { name: 'Regular fluids (breast/bottle feeds; offer drinks)', dose: '—', freq: 'Often', route: 'Advice', days: '—' },
    ],
    altRegimens: [
      { label: 'Amber features (e.g. pallor reported, reduced activity, nasal flaring, dry mucous membranes, fever 5 days or more, swelling of a limb/joint)', drugs: 'Face-to-face assessment; safety-net with a clear plan if sent home.' },
      { label: 'Red features (e.g. mottled/blue, no response, weak high-pitched cry, grunting, RR >60, non-blanching rash, bulging fontanelle, neck stiffness, seizure)', drugs: 'Urgent face-to-face / 999.' },
    ],
    counselling: [
      'Fever is the body’s normal response to infection and most children get better on their own.',
      'Use paracetamol or ibuprofen only if your child seems distressed — not just to bring the temperature down. Don’t give both at once.',
      'Offer regular drinks; check for dehydration (dry mouth, no tears, sunken eyes, fewer wet nappies).',
      'Check your child during the night. Keep them off nursery/school while feverish.',
      'Seek help urgently if a rash doesn’t fade with a glass, they are hard to wake, breathing fast or grunting, have a fit, or you are worried.',
    ],
    followUp: 'Seek review if fever lasts 5 days or more, the child gets worse, or parents are more worried.',
    redFlags: [
      'Any NICE NG143 red feature → 999 / urgent face-to-face.',
      'Non-blanching rash → urgent (meningococcal disease).',
      'Under 3 months with temperature 38°C or more → same-day paediatric assessment.',
    ],
    emisText: `Fever in under-5 (NICE NG143) — assessed: no red/amber traffic-light features. Self-care advice: fluids, paracetamol OR ibuprofen (OTC, per pack) only if distressed; no tepid sponging. Verbal + written safety-net (non-blanching rash, drowsiness, breathing, dehydration, fever ≥5 days) given; Healthier Together/NHS leaflet signposted. No prescription issued.`,
    sources: [
      { label: 'NICE NG143 — Fever in under 5s: assessment and initial management', url: 'https://www.nice.org.uk/guidance/ng143' },
      { label: 'NICE CKS — Feverish children: management', url: 'https://cks.nice.org.uk/topics/feverish-children-management/' },
      OTC,
    ],
    ageRange: 'Children under 5 (NICE NG143).',
    children: 'Paracetamol from 2 months and ibuprofen from 3 months (over 5 kg) per pack — for pack doses by age check the label or the BNFC. ' + BNFC,
    pregnancy: 'N/A.',
    breastfeeding: 'Keep breastfeeding — it provides fluids and comfort.',
    selfCare: 'Self-care — buy paracetamol/ibuprofen over the counter. No prescription needed.',
    leaflets: [C('fever-in-children', 'Fever in children'), HT],
    pharmacyFirst: 'Self-care / pharmacist advice (not a Pharmacy First clinical pathway).',
  },

  );
})();
