/* Reasoning GP — Articles data (batch 26: S topics, part 1)
   NHS A–Z (letter S) gaps. RCGP/SCA examiner depth.
   NICE NG12 (May 2025) 2WW pathways stated explicitly where relevant. */
(function(){
  const A = (window.RGP_ARTICLES = window.RGP_ARTICLES || []);
  A.push(

  { id:'sepsis', title:'Sepsis', category:'Infectious diseases', icon:'🚨',
    overview:'Life-threatening organ dysfunction caused by a dysregulated host response to infection. It is a time-critical emergency where early recognition and the "Sepsis Six" within the first hour save lives. The challenge in primary care is spotting it early, because presentation is often non-specific — "could this be sepsis?" should be a constant question in any unwell, febrile (or hypothermic) patient.',
    features:[
      'Suspect sepsis in any patient with known or likely infection who is more unwell than expected, or deteriorating',
      'Warning signs: fever or hypothermia, tachycardia, tachypnoea, hypotension, prolonged capillary refill, mottled/ashen skin, and reduced urine output',
      'Altered mental state — new confusion, drowsiness, or "just not right" — is a key and often early red flag',
      'In children/infants: poor feeding, lethargy, abnormal cry, reduced wet nappies, mottling, and a non-blanching rash (meningococcal); the very young can deteriorate rapidly',
      'Higher-risk groups: the very young and old, frail, immunocompromised (including post-splenectomy, on chemotherapy/steroids), pregnant/recently pregnant, indwelling devices, and recent surgery',
      'Use a structured risk-stratification tool (e.g. NICE sepsis criteria / NEWS2) to identify high-risk features'],
    management:[
      'Have a low threshold to consider sepsis in any acutely unwell person with possible infection — actively ask "could this be sepsis?"',
      'Assess physiology (temperature, heart rate, respiratory rate, blood pressure, oxygen saturations, conscious level, capillary refill, urine output) and risk-stratify',
      'High-risk features → arrange EMERGENCY transfer to hospital (999) for the "Sepsis Six" within an hour: give oxygen, take blood cultures/lactate, give IV antibiotics and IV fluids, and monitor urine output',
      'In primary care, do not delay transfer; give pre-hospital benzylpenicillin for suspected meningococcal sepsis (especially with a non-blanching rash) if it will not delay transfer',
      'Identify and treat the source of infection where possible',
      'Provide clear, specific safety-netting to patients/carers managed in the community: the symptoms that mean "call 999/return immediately" (worsening, new confusion, mottled skin, rapid breathing, reduced urine, non-blanching rash)',
      'Be especially vigilant in neutropenic patients (neutropenic sepsis is a same-hour emergency) and in pregnancy',
      'Document the risk assessment and the safety-net advice given'],
    referral:[
      'Suspected sepsis with high-risk features → 999 emergency admission for the Sepsis Six within 1 hour',
      'Suspected meningococcal sepsis (non-blanching rash, very unwell) → emergency transfer + pre-hospital benzylpenicillin if it does not delay transfer',
      'Neutropenic patient with fever/unwellness → emergency admission (neutropenic sepsis)',
      'Lower-risk but uncertain → urgent review/reassessment with explicit safety-netting'],
    source:'NICE NG51 (Sepsis)' },

  { id:'scabies', title:'Scabies', category:'Dermatology', icon:'🦠',
    overview:'An intensely itchy contagious skin infestation by the mite Sarcoptes scabiei. It is common, spreads through close/prolonged skin contact (including within households and care settings), and is frequently misdiagnosed as eczema. Treatment must include all close contacts simultaneously, or it recurs.',
    features:[
      'Intense itch, characteristically WORSE AT NIGHT, often starting 3–6 weeks after a first infestation (sooner on re-infestation)',
      'A widespread papular/excoriated rash; pathognomonic burrows (thin grey wavy lines) in the finger webs, wrists, and other sites',
      'Typical distribution: finger webs, wrists, axillae, genitals (penile/scrotal papules), nipples/areolae, and around the waist — usually sparing the head in adults (but the scalp/face/soles are involved in infants)',
      'Often a history of others in the household/contacts with itch',
      'CRUSTED (Norwegian) scabies: hyperkeratotic, heavily infested, often non-itchy crusting in immunocompromised/elderly/institutionalised patients — extremely contagious and needs specialist management',
      'Diagnosis is clinical (itch + rash + burrows ± affected contacts); dermoscopy/skin scraping can confirm'],
    management:[
      'Treat with a topical scabicide — permethrin 5% cream first-line (malathion as an alternative) — applied to the WHOLE body (including under nails; and scalp/face in infants and the elderly), left on for the recommended time, then repeated after 7 days',
      'Treat ALL household members and close/sexual contacts at the SAME TIME, even if asymptomatic, to prevent reinfestation',
      'Wash clothing, bedding and towels at a hot temperature (or seal in a bag for ~72 hours) on the day of treatment',
      'Explain that itch can persist for 2–4 weeks AFTER successful treatment — manage with emollients, antihistamines, and a mild topical steroid; this does not necessarily mean treatment failure',
      'Provide clear written instructions on correct application (a common reason for treatment failure)',
      'Treat secondary bacterial infection (from scratching) if present',
      'Manage crusted scabies and institutional outbreaks with dermatology/health-protection input (oral ivermectin ± topical treatment, and infection control)',
      'Advise contacts/sexual partners and consider an STI screen where sexually transmitted'],
    referral:[
      'Crusted (Norwegian) scabies, or treatment failure despite correct treatment of patient and contacts → dermatology',
      'Outbreaks in care homes/institutions → health protection / infection control',
      'Diagnostic uncertainty → dermatology',
      'Severe secondary infection → treat ± refer'],
    source:'NICE CKS — Scabies' },

  { id:'scarlet-fever', title:'Scarlet fever', category:'Infectious diseases', icon:'🦠',
    overview:'A childhood illness caused by group A streptococcus, with a characteristic sandpaper rash, fever and sore throat. It is usually mild and treated with antibiotics, but it is notifiable, can cause complications, and matters in the context of invasive group A strep — so recognition, treatment and public-health awareness are important.',
    features:[
      'Fever, sore throat and headache, then a fine, red, "sandpaper"-textured (rough to touch) rash, typically starting on the trunk and spreading, with flushed cheeks and circumoral pallor',
      'A "strawberry tongue" (white-coated then red and swollen), and skin peeling/desquamation as the rash fades',
      'Rash blanches on pressure and is often more prominent in skin folds (Pastia’s lines)',
      'Mainly affects children (commonly 2–8 years); spread by respiratory droplets/contact',
      'Complications: otitis media, peritonsillar abscess (quinsy), and (rare) rheumatic fever, post-streptococcal glomerulonephritis, and invasive group A streptococcal disease',
      'Diagnosis is usually clinical (throat swab can confirm); it is a NOTIFIABLE disease'],
    management:[
      'Treat with antibiotics: phenoxymethylpenicillin (penicillin V) for 10 days first-line (a macrolide if penicillin-allergic) — antibiotics speed recovery, reduce complications and transmission',
      'Supportive care: fluids, paracetamol/ibuprofen for fever and pain, and rest',
      'Advise on exclusion: keep the child away from school/nursery until at least 24 hours after starting antibiotics',
      'Notify the health protection team — scarlet fever is a notifiable disease (and surveillance matters given invasive group A strep concerns)',
      'Safety-net for complications and for features of invasive group A streptococcal disease (high/persistent fever, severe pain, marked systemic illness, a rapidly deteriorating child)',
      'Be alert to invasive group A strep, particularly if there is co-circulating chickenpox/influenza or a deteriorating child — escalate urgently',
      'Reassure that it is usually a mild, self-limiting illness with treatment',
      'Provide written information on the course and when to seek help'],
    referral:[
      'A rapidly deteriorating or seriously unwell child, or suspected invasive group A streptococcal disease/sepsis → emergency admission',
      'Complications (quinsy, severe otitis media, suspected post-streptococcal nephritis/rheumatic fever) → relevant urgent assessment',
      'Notify public health (notifiable disease)',
      'Diagnostic uncertainty → assessment'],
    source:'UKHSA / NICE CKS — Scarlet fever' },

  { id:'schizophrenia', title:'Schizophrenia', category:'Mental health', icon:'🧠',
    overview:'A severe, chronic psychotic disorder affecting thinking, perception, emotion and behaviour, typically emerging in late adolescence/early adulthood. Early intervention improves prognosis. Care is long-term and shared with specialist services; the GP role includes recognition, physical-health monitoring (markedly reduced life expectancy), and relapse detection.',
    features:[
      'POSITIVE symptoms: delusions, hallucinations (often auditory), thought disorder, and disorganised behaviour',
      'NEGATIVE symptoms: blunted affect, apathy/avolition, social withdrawal, and poverty of speech — often the most disabling and persistent',
      'Cognitive impairment (attention, memory, executive function) is common',
      'Often preceded by a prodrome of declining function, social withdrawal and odd ideas (especially in young people)',
      'Markedly increased physical-health morbidity and reduced life expectancy (cardiovascular/metabolic disease, smoking) — and increased suicide risk',
      'Diagnosis is clinical (specialist), after excluding organic and substance-induced causes'],
    management:[
      'Refer a suspected first episode urgently to early intervention in psychosis/community mental-health services — do not delay (early treatment improves outcomes)',
      'Treatment combines antipsychotic medication (specialist-initiated) with psychological therapy (CBT for psychosis) and family intervention',
      'Support medication adherence; clozapine is used for treatment-resistant schizophrenia (with mandatory blood monitoring for agranulocytosis)',
      'Conduct/share regular PHYSICAL-HEALTH monitoring — weight/BMI, blood pressure, lipids, glucose/HbA1c, and ECG — given antipsychotic metabolic and cardiac effects; actively manage cardiovascular risk and support smoking cessation',
      'Assess and manage risk (suicide, self-neglect, risk to others) and safeguarding; involve crisis teams and use the Mental Health Act where necessary',
      'Recognise relapse early (return of prodromal/positive symptoms, non-adherence) and act',
      'Support recovery: housing, employment/education, social inclusion, and carer support',
      'Provide continuity, reduce stigma, and coordinate care with the community mental-health team'],
    referral:[
      'First-episode psychosis/suspected schizophrenia → urgent early intervention in psychosis / mental-health referral',
      'Acute risk or severe disturbance → crisis team / urgent psychiatric assessment (consider Mental Health Act)',
      'Treatment-resistant illness → psychiatry (clozapine)',
      'Relapse or significant deterioration → mental-health team'],
    source:'NICE CG178 (Psychosis and schizophrenia in adults)' },

  { id:'sciatica', title:'Sciatica (lumbar radiculopathy)', category:'Musculoskeletal', icon:'🦵',
    overview:'Pain radiating down the leg in a nerve-root distribution, usually from lumbar disc herniation compressing a nerve root. Most resolves with conservative management and reassurance. The non-negotiable task is screening for cauda equina syndrome and other serious spinal pathology.',
    features:[
      'Unilateral leg pain (typically worse than any back pain) radiating below the knee in a dermatomal pattern, often with paraesthesia/numbness and sometimes weakness',
      'Pain may be aggravated by sitting, coughing, sneezing, or straining; a positive straight-leg-raise supports nerve-root irritation',
      'Most commonly from a prolapsed lumbar disc (L4/5, L5/S1); also lateral recess/foraminal stenosis',
      'CAUDA EQUINA SYNDROME red flags (emergency): bilateral leg pain/sciatica, saddle (perineal) anaesthesia, bladder dysfunction (retention/incontinence), bowel incontinence, and sexual dysfunction',
      'Other serious-pathology red flags: features of malignancy (history of cancer, weight loss, night pain), infection (fever, IV drug use), fracture, or progressive/severe neurological deficit',
      'Diagnosis is clinical; MRI is reserved for red flags, or for persistent/severe symptoms where intervention is being considered'],
    management:[
      'Screen explicitly for cauda equina syndrome and other red flags at presentation and at every review — these change management completely',
      'Reassure: most sciatica improves over weeks; advise staying active and avoiding bed rest, with self-management and a clear recovery expectation',
      'Analgesia: NSAIDs (with gastroprotection) where appropriate; do not offer gabapentinoids, and avoid opioids for chronic use (limited benefit)',
      'Refer to physiotherapy/exercise for ongoing symptoms and to support return to activity',
      'Consider a referral for imaging and specialist (spinal) assessment if symptoms persist (e.g. beyond 4–6 weeks) and are not improving, or are severe/disabling, with a view to epidural injection or surgery',
      'Address psychosocial factors and support return to work',
      'Manage radicular pain with a graded, activity-based approach rather than escalating medication',
      'Provide written advice and clear safety-netting on the cauda equina red flags'],
    referral:[
      'Suspected cauda equina syndrome (saddle anaesthesia, bladder/bowel dysfunction, bilateral leg symptoms) → EMERGENCY same-day spinal assessment and MRI',
      'Progressive or severe neurological deficit → urgent spinal assessment',
      'Red flags for malignancy/infection/fracture → urgent investigation (consider relevant cancer pathway, NICE NG12)',
      'Persistent/disabling sciatica not improving with conservative care → spinal service (imaging, injection, surgery)'],
    source:'NICE NG59 (Low back pain and sciatica)' },

  { id:'scoliosis', title:'Scoliosis', category:'Musculoskeletal', icon:'🦴',
    overview:'A lateral curvature with rotation of the spine. Most is idiopathic adolescent scoliosis, often detected during growth; management depends on the curve size and skeletal maturity. Recognising progressive curves needing specialist treatment, and red flags suggesting a secondary cause, are the key tasks.',
    features:[
      'A visible curvature of the spine, asymmetry of the shoulders/waist/scapulae, or a rib hump made more obvious on forward bending (Adam’s forward-bend test)',
      'ADOLESCENT IDIOPATHIC scoliosis (commonest): develops during the pubertal growth spurt, more often in girls; usually painless',
      'May also be congenital (vertebral anomalies), neuromuscular (e.g. cerebral palsy, muscular dystrophy), or degenerative (older adults)',
      'Progression risk is highest during rapid growth — curves can worsen quickly in adolescence',
      'RED FLAGS suggesting a secondary/serious cause: significant pain, rapid progression, a short sharp curve, neurological signs, very young onset, or systemic features — warrant imaging/specialist assessment',
      'Diagnosis: clinical examination and standing spinal X-ray (measuring the Cobb angle)'],
    management:[
      'Examine the spine (including the forward-bend test) and assess for asymmetry, the curve, pain, neurology, and skeletal maturity',
      'Refer suspected significant or progressive scoliosis to orthopaedics/spinal services for assessment and X-ray (Cobb angle)',
      'Management depends on curve magnitude and maturity: small curves are monitored; moderate curves in growing children may need bracing to prevent progression; larger/progressive curves may need surgery (e.g. spinal fusion)',
      'Reassure that mild idiopathic curves often need only observation through growth',
      'Investigate/refer red-flag presentations (pain, neurology, rapid progression, very young) to exclude a secondary cause',
      'Address the psychological/body-image impact, especially in adolescents',
      'For neuromuscular/syndromic scoliosis, coordinate care with the relevant specialists',
      'Provide information and arrange appropriate monitoring/follow-up'],
    referral:[
      'Suspected significant or progressive scoliosis → orthopaedic/spinal service',
      'Red flags (significant pain, neurological signs, rapid progression, very young onset) → urgent specialist assessment (exclude secondary cause/tumour)',
      'Neuromuscular/congenital scoliosis → specialist spinal + relevant specialty',
      'Curves needing bracing or surgery → spinal surgery'],
    source:'NICE CKS / spinal surgical guidance' },

  { id:'sad', title:'Seasonal affective disorder (SAD)', category:'Mental health', icon:'🌥️',
    overview:'A form of depression with a seasonal pattern, typically recurring in autumn/winter and remitting in spring/summer. It is a recognised subtype of depression with the same risks (including suicidality), and is managed along the same lines as depression, with some specific measures.',
    features:[
      'Recurrent depressive episodes with a clear seasonal pattern — most commonly low mood, low energy and reduced function in autumn/winter, improving in spring/summer',
      '"Atypical" depressive features are common: increased sleep (hypersomnia), increased appetite/carbohydrate craving and weight gain, and marked fatigue/low energy',
      'Core depressive symptoms: persistent low mood, anhedonia, poor concentration, and reduced motivation',
      'Assess risk as for any depression, including suicidality',
      'The seasonal pattern should be established over at least a couple of years to distinguish it from coincidental timing',
      'Consider and exclude other contributors (e.g. hypothyroidism, other depression, bipolar pattern)'],
    management:[
      'Assess severity and risk as for depression, and confirm the seasonal pattern',
      'Treat as for depression generally: psychological therapy (e.g. CBT) and/or an antidepressant (SSRI) for moderate–severe episodes',
      'Lifestyle measures: regular activity/exercise, maximising daylight exposure and outdoor time, and a regular routine',
      'Light therapy (a light box) is commonly used and may help some people, though the evidence base is limited — it can be offered as an option',
      'Consider starting treatment in advance of the usual season of onset for those with a clear recurrent pattern',
      'Treat to remission and consider relapse prevention given the recurrent nature',
      'Provide self-management resources and review response',
      'Be alert to a possible bipolar pattern (seasonal mood swings) and reconsider the diagnosis if features suggest it'],
    referral:[
      'Severe depression, significant risk (suicidality/self-neglect) → urgent mental-health assessment',
      'Treatment-resistant or diagnostically uncertain cases → mental-health services',
      'Suspected bipolar pattern → psychiatry',
      'Otherwise manage in primary care as for depression'],
    source:'NICE CKS / NICE NG222 (Depression) — seasonal pattern' },

  { id:'shingles', title:'Shingles (herpes zoster)', category:'Dermatology', icon:'🦠',
    overview:'A painful vesicular rash from reactivation of latent varicella-zoster virus in a single dermatome. It is common, especially with age and immunosuppression. Antivirals reduce severity if started early; the key complications are post-herpetic neuralgia and ophthalmic shingles (a threat to sight).',
    features:[
      'A painful, often preceded by tingling/burning, vesicular rash in a single dermatome that does NOT cross the midline (unilateral)',
      'Pain may precede the rash by days; the rash evolves through papules → vesicles → crusting over ~7–10 days',
      'OPHTHALMIC shingles (herpes zoster ophthalmicus): rash in the trigeminal V1 distribution; Hutchinson’s sign (rash on the nose tip) signals likely eye involvement — a sight threat needing ophthalmology',
      'Ramsay Hunt syndrome: facial palsy with vesicles in the ear/auditory canal (and altered taste/hearing) — needs prompt treatment',
      'POST-HERPETIC NEURALGIA: persistent dermatomal pain after the rash heals — the commonest complication, more likely with age',
      'Higher risk/severity in older and immunocompromised patients; disseminated zoster can occur in the immunocompromised'],
    management:[
      'Offer oral antiviral treatment (e.g. aciclovir/valaciclovir) started within 72 hours of rash onset — particularly for older patients, those with significant pain, ophthalmic/severe disease, or immunocompromise (and consider beyond 72 hours if new vesicles are still forming or in high-risk patients)',
      'Manage pain: regular analgesia, and neuropathic agents (e.g. amitriptyline, gabapentin/pregabalin) for significant or post-herpetic pain',
      'Keep the rash clean and dry; advise on infectivity — contact with the fluid can cause chickenpox in non-immune people, so avoid contact with pregnant women, neonates and the immunocompromised until lesions crust',
      'Recognise and refer ophthalmic shingles (V1 involvement/Hutchinson’s sign) urgently to ophthalmology, and Ramsay Hunt syndrome for prompt treatment',
      'Treat immunocompromised or severe/disseminated zoster aggressively (often IV antivirals/admission)',
      'Counsel on post-herpetic neuralgia and treat it proactively',
      'Promote the shingles vaccination for eligible older adults (prevention)',
      'Provide safety-netting for eye symptoms, spreading/disseminated rash, or systemic illness'],
    referral:[
      'Ophthalmic shingles with eye involvement (pain, redness, visual change, Hutchinson’s sign) → urgent ophthalmology',
      'Immunocompromised patients, disseminated zoster, or severe disease → urgent specialist/admission (IV antivirals)',
      'Ramsay Hunt syndrome (facial palsy + ear vesicles) → prompt ENT/specialist treatment',
      'Refractory post-herpetic neuralgia → pain service'],
    source:'NICE CKS — Shingles / Green Book (zoster vaccine)' }

  );
})();
