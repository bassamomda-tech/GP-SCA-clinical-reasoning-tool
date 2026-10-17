/* ============================================
   Medication Chooser — Endometriosis
   NICE NG73 (2017, updated 2024) · SPC
   Fixed lists (Upload 128, October 2026): no patient factors and no scoring.
   ============================================ */
MedChooser.register('endometriosis', {
  title: 'Endometriosis — pain and hormonal treatment',
  subtitle: 'NICE NG73: offer a short trial (for example 3 months) of paracetamol or an NSAID, alone or combined, for pain; offer hormonal treatment (combined hormonal contraception or a progestogen) for suspected, confirmed or recurrent endometriosis. Refer to gynaecology if symptoms persist, treatment is not tolerated or contraindicated, or deep endometriosis is suspected. GnRH agonists are specialist.',
  guideline: 'NICE NG73 · SPC',

  safety: [
    {"tone":"amber","label":"Do not wait for laparoscopy","text":"Hormonal treatment can start on clinical suspicion (NG73); a normal examination or ultrasound does not exclude endometriosis."},
    {"tone":"amber","label":"Fertility","text":"Hormonal treatment does not improve spontaneous fertility — refer those trying to conceive."},
    {"tone":"red","label":"Bowel, bladder or ureteric involvement","text":"Suspected deep endometriosis involving bowel, bladder or ureter — refer to a specialist endometriosis centre."},
    {"tone":"amber","label":"Pain review","text":"Avoid long-term opioids; consider neuropathic agents only with specialist input (NG73 / NICE NG193 for chronic pain)."}
  ],

  drugs: [
    {
      id:'analgesia',
      name:'NSAID and/or paracetamol',
      examples:'E.g. naproxen or mefenamic acid with paracetamol, for about 3 months',
      step:'First — short trial for pain (NG73)',
      source:'NICE NG73 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng73',
      sideEffects:'NSAID: GI upset, renal effects, asthma exacerbation',
      monitor:'Pain response at 3 months',
      counsel:'"Start the anti-inflammatory a day before the pain usually begins and take it regularly through it."',
      detail:{ 'Key teaching':'If not effective, add or switch to hormonal treatment and consider referral.' },
      conditions: [
        {"kind":"avoid","label":"Peptic ulcer / GI bleed","text":"Avoid NSAIDs"},
        {"kind":"caution","label":"Asthma","text":"NSAID sensitivity — ask"}
      ]
    },
    {
      id:'chc',
      name:'Combined hormonal contraception',
      examples:'Pill, patch or ring — continuous or tailored regimen',
      step:'Hormonal — first-line option (NG73)',
      source:'NICE NG73 · FSRH · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng73',
      sideEffects:'VTE, BP rise, breakthrough bleeding',
      monitor:'UKMEC review; BP',
      counsel:'"Taking the pill back-to-back without breaks reduces the number of periods and the pain."',
      detail:{ 'Key teaching':'Extended or continuous use is off-label for some products but supported by FSRH.' },
      conditions: [
        {"kind":"avoid","label":"Migraine with aura","text":"UKMEC 4"},
        {"kind":"caution","label":"BMI ≥35 / smoker 35+","text":"UKMEC 3"}
      ]
    },
    {
      id:'progestogen',
      name:'Progestogens — desogestrel, medroxyprogesterone, LNG-IUD, implant, dienogest',
      examples:'Continuous oral progestogen, depot, LNG-IUD or implant',
      step:'Hormonal — first-line option (NG73)',
      source:'NICE NG73 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng73',
      sideEffects:'Irregular bleeding, mood change, bloating; depot: bone density',
      monitor:'Bleeding pattern; depot: review at 2 years (bone)',
      counsel:'"Irregular spotting is common in the first few months and usually settles."',
      detail:{ 'Key teaching':'Dienogest is licensed for endometriosis; LNG-IUD is used off-label for endometriosis pain.' },
      conditions: [
        {"kind":"favoured","label":"Oestrogen contraindicated","text":"Progestogen-only options"}
      ]
    },
    {
      id:'gnrh',
      name:'GnRH agonists (with add-back HRT) — specialist',
      examples:'Specialist-initiated; may be continued by GP under shared care',
      step:'Second-line — if first-line hormonal treatment fails (NG73)',
      source:'NICE NG73 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng73',
      sideEffects:'Menopausal symptoms, bone loss (add-back therapy reduces)',
      monitor:'Bone density for longer courses; per specialist letter',
      counsel:'"This creates a temporary menopause; the add-back HRT protects your bones and helps the hot flushes."',
      detail:{ 'Key teaching':'Relugolix combination therapy (Ryeqo) is recommended by NICE TA1057 (2025) for endometriosis symptoms when previous treatment has not worked — specialist-initiated.' },
      conditions: [
        {"kind":"caution","label":"Osteoporosis risk","text":"Bone loss — add-back and DEXA per specialist"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG73 — Endometriosis: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng73' },
    { label:'NICE CKS — Endometriosis', url:'https://cks.nice.org.uk/topics/endometriosis/' },
    { label:'CoSRH — UK Medical Eligibility Criteria (UKMEC 2025)', url:'https://www.cosrh.org/Common/Uploaded%20files/documents/UKMEC_2025.pdf' },
    { label:'SPC — dienogest', url:'https://www.medicines.org.uk/emc/search?q=dienogest' }
  ],
});
