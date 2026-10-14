/* Important news for UK general practice: practice-relevant changes that are NOT
   NICE guideline changes (those live in updates-nice-archive.js), plus outbreaks and
   public-health alerts that patients may bring to the surgery.
   Read by pages/updates.html ("Important news" section). Curated, dated, source-linked.

   HOW TO ADD AN ITEM
   - Add it anywhere in the list below (the page sorts newest first and groups by month).
     Items older than 12 months are hidden automatically.
   - Check every fact against the primary source first (gov.uk MHRA / UKHSA, NHS England,
     RCGP, DVLA, DHSC). If you cannot verify it, do not add it.
   - Fields:
       id       short unique slug, e.g. 'mhra-domperidone-2026-07' (becomes the anchor #news-<id>)
       date     'YYYY-MM-DD', or 'YYYY-MM' when only the month is confirmed
       src      'MHRA' | 'UKHSA' | 'NHS England' | 'RCGP' | 'DVLA' | 'DHSC' | 'Outbreak'
                (each source gets its own filter chip; a chip with no items is hidden)
       title    one line
       summary  what changed / what is happening, in one or two plain sentences
       action   what GPs should do differently, in one or two plain sentences
       url      the primary source page;  sourceName  e.g. 'MHRA Drug Safety Update'
       more     optional extra source links: [['Label','https://...'], ...]
       site     optional links to this site: [['Label','tools/management/xyz.html'], ...]
   - OUTBREAKS / PUBLIC HEALTH: use src:'Outbreak' and add
       kind     'Outbreak' or 'Public health' (the badge text)
       lookFor  what to look out for: symptoms and at-risk groups
       status   'ongoing' (shows a red "Ongoing" marker) or 'ended' (shows "Ended").
                Leave status out for a public-health update that is neither.
     To end an outbreak, change status:'ongoing' to status:'ended' and update the summary
     with the date UKHSA declared it over. Do not delete it; it drops off after 12 months.
   - Bump ?v= on the <script> tag in pages/updates.html after editing.            */
(function(){
  window.RGP_IMPORTANT_NEWS = {
    asOf: '2026-10-13',
    items: [
      /* ------------------------------------------------ outbreaks and public health */
      { id:'ob-mpox-clade-ib-2026', date:'2026-10-08', src:'Outbreak', kind:'Outbreak', status:'ongoing',
        title:'Mpox — clade Ib cases now outnumber clade IIb',
        summary:'UKHSA’s 8 October 2026 overview shows clade Ib mpox cases have exceeded clade IIb since July 2026, with community spread mainly in gay, bisexual and other men who have sex with men (GBMSM); there were 119 clade Ib cases in the UK to 31 July (82 in England).',
        lookFor:'New anogenital, oral or skin lesions (vesicles, pustules or ulcers), often with fever or swollen lymph nodes, particularly in GBMSM with new or multiple partners and in recent travellers.',
        action:'Notify the UKHSA health protection team (mpox is notifiable), avoid contact with the lesions and discuss testing with sexual health or the health protection team. Encourage two doses of mpox vaccine for eligible GBMSM through sexual health services.',
        url:'https://www.gov.uk/government/publications/monkeypox-outbreak-epidemiological-overview/mpox-outbreak-epidemiological-overview-8-october-2026', sourceName:'UKHSA mpox epidemiological overview',
        site:[['Anogenital ulcers algorithm','tools/algorithms/anogenital-ulcers.html']] },
      { id:'ob-measles-2026', date:'2026-06-11', src:'Outbreak', kind:'Outbreak', status:'ongoing',
        title:'Measles — high case numbers in England in 2026',
        summary:'UKHSA reported 736 laboratory-confirmed measles cases in England from 1 January to 8 June 2026 (959 in the whole of 2025) and two child deaths. 55% of cases were in London, followed by the West Midlands and the North West.',
        lookFor:'Fever with a maculopapular rash and cough, coryza or conjunctivitis, especially in unvaccinated children and young adults and in areas with low MMR uptake.',
        action:'Notify the health protection team on clinical suspicion, without waiting for test results. Keep the patient out of the waiting room, test as the health protection team advises, and check and catch up MMR or MMRV for the patient and their contacts.',
        url:'https://ukhsa-newsroom.prgloo.com/news/latest-measles-figures-published-as-two-deaths-confirmed-in-2026', sourceName:'UKHSA newsroom',
        more:[['UKHSA quarterly measles, mumps and rubella data','https://www.gov.uk/government/publications/measles-mumps-and-rubella-lab-confirmed-cases-in-england-2026/laboratory-confirmed-cases-of-measles-mumps-and-rubella-england-january-to-march-2026']],
        site:[['Maculopapular rash algorithm','tools/algorithms/maculopapular-rash.html'],['Fever in children algorithm','tools/algorithms/fever-children.html']] },
      { id:'ob-group-a-strep-2025-26', date:'2026-09-24', src:'Outbreak', kind:'Public health', status:'ended',
        title:'Scarlet fever and invasive group A strep — 2025 to 2026 season over',
        summary:'UKHSA’s final seasonal report says scarlet fever consultations peaked in March and have fallen since late June. Invasive group A strep (iGAS) notifications ran at the higher end of expected in January and then settled within expected levels.',
        lookFor:'Sore throat, fever and a fine “sandpaper” rash in children. Severe or rapidly worsening illness, especially after chickenpox or another viral infection, may be iGAS.',
        action:'Treat scarlet fever promptly with antibiotics and keep the child off school or nursery until 24 hours after starting treatment. Scarlet fever and iGAS are notifiable: tell the health protection team, and report outbreaks in schools or nurseries.',
        url:'https://www.gov.uk/government/publications/group-a-streptococcal-infections-seasonal-activity-in-england-2025-to-2026/group-a-streptococcal-infections-fourth-and-final-update-report-on-seasonal-activity-in-england-2025-to-2026', sourceName:'UKHSA seasonal report',
        site:[['Sore throat algorithm','tools/algorithms/sore-throat.html'],['Fever in children algorithm','tools/algorithms/fever-children.html']] },
      { id:'ob-pertussis-2025-report', date:'2026-06-25', src:'Outbreak', kind:'Public health',
        title:'Whooping cough back to low levels after the 2024 peak',
        summary:'UKHSA’s annual report for 2025 (updated 25 June 2026) lists 674 laboratory-confirmed pertussis cases in England in 2025, 95.5% fewer than the record 14,877 in 2024. Pertussis rises in cycles every 3 to 5 years.',
        lookFor:'A cough lasting 2 weeks or more with bouts of coughing, a whoop or vomiting after coughing. Young babies are at highest risk.',
        action:'Keep offering pertussis vaccine in every pregnancy and give the infant doses on time, because cases will rise again. Notify suspected cases to the health protection team.',
        url:'https://www.gov.uk/government/publications/pertussis-laboratory-confirmed-cases-reported-in-england-2025/laboratory-confirmed-cases-of-pertussis-in-england-annual-report-for-2025', sourceName:'UKHSA pertussis annual report',
        site:[['Whooping cough protocol','tools/management/whooping-cough.html']] },
      { id:'ob-flu-h3n2-2025', date:'2025-11-05', src:'Outbreak', kind:'Public health', status:'ended',
        title:'Early flu season driven by influenza A(H3N2) subclade K',
        summary:'In November 2025 UKHSA briefed clinicians on unusually early influenza A(H3N2) activity in England, dominated by subclade K, a drifted strain, with high test positivity and hospital admissions especially in school-age children.',
        lookFor:'Sudden fever, cough and aching. Older adults, pregnant women, young children and people with long-term conditions are at higher risk.',
        action:'Vaccinate eligible patients early in the season, because the vaccine still protects despite the drift. Follow UKHSA guidance on antivirals for at-risk patients while flu is circulating.',
        url:'https://primarycare.northeastlondon.icb.nhs.uk/wp-content/uploads/2025/11/20251105_BN2025_042_-Influenza-AH3N2-early-season-activity-in-England-implications-for-clinical-practice-and-laboratory-refer.pdf', sourceName:'UKHSA briefing note 2025/042 (via NHS North East London)',
        more:[['Eurosurveillance: subclade K in England, autumn 2025','https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2025.30.46.2500854']],
        site:[['Acute cough algorithm','tools/algorithms/acute-cough.html'],['Fever in adults algorithm','tools/algorithms/fever-adults.html']] },

      /* ------------------------------------------------ MHRA */
      { id:'mhra-anticholinergics-dementia-2026-07', date:'2026-07-27', src:'MHRA',
        title:'Bladder anticholinergics — review of dementia risk',
        summary:'The MHRA review found that the evidence does not confirm that bladder anticholinergics cause dementia, but a small increased risk cannot be ruled out.',
        action:'Keep the number of anticholinergic medicines low in older people, and use the lowest effective dose for the shortest time.',
        url:'https://www.gov.uk/government/publications/bladder-anticholinergics-review-of-risk-of-dementia', sourceName:'MHRA public assessment report',
        site:[['Female urinary incontinence protocol','tools/management/female-urinary-incontinence.html'],['Male LUTS protocol','tools/management/male-luts.html']] },
      { id:'mhra-domperidone-2026-07', date:'2026-07-21', src:'MHRA',
        title:'Domperidone — new contraindication in phaeochromocytoma',
        summary:'Domperidone is now contraindicated in confirmed or suspected phaeochromocytoma because of the risk of severe hypertension. It can also unmask a tumour that has not been diagnosed.',
        action:'Stop domperidone and switch to an alternative if phaeochromocytoma is confirmed or suspected. If someone taking domperidone has an episode of severe hypertension, consider investigating for phaeochromocytoma. Use the lowest dose for the shortest time, usually no more than 1 week.',
        url:'https://www.gov.uk/drug-safety-update/domperidone-new-contraindication-in-patients-with-phaeochromocytoma-due-to-the-risk-of-severe-hypertension', sourceName:'MHRA Drug Safety Update',
        site:[['Nausea and vomiting in adults algorithm','tools/algorithms/nausea-vomiting-adults.html']] },
      { id:'mhra-botulinum-2026-07', date:'2026-07-15', src:'MHRA',
        title:'Botulinum toxin type A — warnings about iatrogenic botulism',
        summary:'Warnings were strengthened for all botulinum toxin type A products after an outbreak of iatrogenic botulism in 2025. Symptoms usually start 4 to 8 days after treatment but can take up to 4 weeks.',
        action:'Ask about recent cosmetic or medical injections in anyone with drooping eyelids, slurred speech, or difficulty swallowing or breathing. Treat it as a medical emergency and follow the UKHSA guidance on iatrogenic botulism.',
        url:'https://www.gov.uk/drug-safety-update/botulinum-toxin-type-a-products-updated-warnings-regarding-risk-of-iatrogenic-botulism', sourceName:'MHRA Drug Safety Update' },
      { id:'mhra-ace-angioedema-2026-06', date:'2026-06-16', src:'MHRA',
        title:'ACE inhibitors — delayed-onset angioedema',
        summary:'Warnings were strengthened because about half of UK angioedema reports with a recorded onset began 30 or more days after starting the ACE inhibitor. It can occur after weeks or years of use.',
        action:'Stop the ACE inhibitor immediately if angioedema is suspected. Bradykinin-mediated angioedema is unlikely to respond to standard anaphylaxis treatment, including adrenaline, so think of it when that treatment is not working.',
        url:'https://www.gov.uk/drug-safety-update/ace-inhibitors-be-aware-of-the-distinction-between-bradykinin-and-histamine-mediated-angioedema-as-treatment-strategies-differ-significantly', sourceName:'MHRA Drug Safety Update',
        site:[['Angioedema protocol','tools/management/angioedema.html']] },
      { id:'mhra-finasteride-dutasteride-2026-05', date:'2026-05-11', src:'MHRA',
        title:'Finasteride and dutasteride — psychiatric and sexual side effects',
        summary:'Warnings were strengthened for finasteride 1 mg for hair loss, including that sexual dysfunction may contribute to mood changes. A precautionary warning was added for dutasteride.',
        action:'Tell patients taking finasteride to stop and seek advice if they have depression or suicidal thoughts. Ask patients on either medicine to report sexual side effects. The finasteride patient alert card stays in place.',
        url:'https://www.gov.uk/government/news/mhra-strengthens-safety-warnings-for-finasteride-and-dutasteride', sourceName:'MHRA',
        site:[['Male pattern hair loss protocol','tools/management/male-pattern-hair-loss.html'],['Male LUTS protocol','tools/management/male-luts.html']] },
      { id:'mhra-dependence-warnings-2026-01', date:'2026-01-08', src:'MHRA',
        title:'Gabapentinoids, benzodiazepines and Z-drugs — stronger dependence warnings',
        summary:'Product information, leaflets and packaging are being updated to warn more clearly about addiction, dependence, withdrawal and tolerance, and the MHRA has published new patient resources.',
        action:'Agree how long treatment will last and how it will stop before starting, and taper gradually when stopping. Share the MHRA patient resources.',
        url:'https://www.gov.uk/drug-safety-update/improving-information-supplied-with-gabapentinoids-pregabalin-slash-gabapentin-benzodiazepines-and-z-drugs', sourceName:'MHRA Drug Safety Update',
        site:[['Benzodiazepines and Z-drugs protocol','tools/management/benzodiazepines-z-drugs.html'],['Neuropathic pain protocol','tools/management/neuropathic-pain.html']] },

      /* ------------------------------------------------ vaccines (UKHSA / DHSC) */
      { id:'ukhsa-rsv-80-plus-2026-04', date:'2026-04-01', src:'UKHSA',
        title:'RSV vaccine extended to adults aged 80 and over',
        summary:'From 1 April 2026 the RSV programme in England was extended to adults aged 80 and over and to care home residents, following JCVI advice. It still uses a single dose of Abrysvo.',
        action:'Offer a single dose to anyone aged 75 or over who has not had one, and to eligible care home residents. RSV vaccination is not seasonal, so offer it all year round.',
        url:'https://www.gov.uk/government/publications/vaccine-update-issue-369-february-2026/vaccine-update-issue-369-february-2026', sourceName:'UKHSA Vaccine update, issue 369' },
      { id:'dhsc-covid-autumn-2026', date:'2026-03-23', src:'DHSC',
        title:'Autumn 2026 COVID-19 vaccine — who is eligible',
        summary:'The government accepted JCVI advice. In England the autumn 2026 COVID-19 vaccine is for adults aged 75 and over, residents in care homes for older adults, and people aged 6 months and over who are immunosuppressed.',
        action:'Identify and invite these groups. Check the local start date and delivery arrangements with your commissioner.',
        url:'https://www.gov.uk/government/news/advice-accepted-on-autumn-2026-covid-19-vaccination-programme', sourceName:'DHSC press release' },
      { id:'ukhsa-mmrv-2026-01', date:'2026-01-01', src:'UKHSA',
        title:'MMRV replaces MMR at 12 and 18 months',
        summary:'From 1 January 2026 all children are offered the combined MMRV (measles, mumps, rubella and varicella) vaccine at 12 and 18 months, which adds protection against chickenpox. The second dose moves to a new 18-month appointment.',
        action:'Give MMRV for any first or second MMR dose due on or after 1 January 2026, and book the 18-month appointment. Older children with no history of chickenpox are offered a dose in a catch-up programme.',
        url:'https://www.gov.uk/government/publications/mmrv-programme-information-for-healthcare-practitioners/mmrv-vaccination-information-for-healthcare-professionals', sourceName:'UKHSA guidance for healthcare professionals' },

      /* ------------------------------------------------ contract and exams */
      { id:'nhse-gp-contract-2026-27', date:'2026-02-24', src:'NHS England',
        title:'GP contract 2026/27 — same-day handling of urgent requests',
        summary:'NHS England set out the 2026/27 changes: a £485m uplift; requests the practice judges clinically urgent must be dealt with on the same day; online consultation has the same standing as phone and walk-in access; and patients must not be asked to call back on another day.',
        action:'Review triage so urgent online, phone and walk-in requests are handled the same day. Note the 2 new QOF obesity indicators that support referral to weight-management services.',
        url:'https://www.england.nhs.uk/long-read/changes-to-the-gp-contract-in-2026-27/', sourceName:'NHS England',
        site:[['Obesity protocol','tools/management/obesity.html']] },
      { id:'rcgp-exam-instalments-2026-04', date:'2026-04-01', src:'RCGP',
        title:'MRCGP exams — AKT and SCA fees can be paid in instalments',
        summary:'From 1 April 2026 candidates can spread the AKT and SCA fee across staged payments instead of paying it all at once.',
        action:'Trainees: check each payment deadline on the RCGP exam dates page. The first payment falls due months before the exam.',
        url:'https://rcgp.org.uk/mrcgp-exams/mrcgp-exam-applications', sourceName:'RCGP',
        site:[['SCA guide','tools/sca-guide.html']] }
    ]
  };
})();
