/* ============================================
   Medication Chooser — Polycystic ovary syndrome (PCOS)
   International evidence-based PCOS guideline (2023) · NICE CKS · FSRH UKMEC · SPC
   Fixed lists (Upload 128, October 2026): no patient factors and no scoring.
   ============================================ */
MedChooser.register('pcos', {
  title: 'PCOS — medication options by goal',
  subtitle: 'There is no NICE guideline for PCOS; NICE CKS and the 2023 International evidence-based guideline set out options by goal — cycle control and endometrial protection, hyperandrogenism (hirsutism, acne), metabolic risk and weight, and fertility (specialist). Lifestyle support comes first for everyone.',
  guideline: 'International PCOS guideline 2023 · NICE CKS · UKMEC',

  safety: [
    {"tone":"amber","label":"Endometrial protection","text":"Fewer than about 4 bleeds a year — protect the endometrium (combined pill, cyclical progestogen or LNG-IUD); refer if persistent unscheduled bleeding or thickened endometrium."},
    {"tone":"red","label":"Anti-androgens and pregnancy","text":"Spironolactone, cyproterone and finasteride can feminise a male fetus — effective contraception is essential; use is off-label for PCOS."},
    {"tone":"amber","label":"Co-cyprindiol","text":"Higher VTE risk than levonorgestrel pills — for moderate–severe acne/hirsutism when other treatment has failed; stop 3 months after symptoms resolve (MHRA)."},
    {"tone":"amber","label":"Metabolic screening","text":"Glycaemic status at diagnosis then every 1–3 years (OGTT preferred), BP yearly, lipids at diagnosis; screen mood and sleep apnoea."}
  ],

  drugs: [
    {
      id:'coc',
      name:'Combined hormonal contraception',
      examples:'Low-dose ethinylestradiol pill (e.g. with levonorgestrel); no specific pill preferred',
      step:'First-line for irregular cycles and hyperandrogenic symptoms (International guideline)',
      source:'International PCOS guideline 2023 · UKMEC · SPC',
      sourceUrl:'https://www.monash.edu/medicine/mchri/pcos/guideline',
      sideEffects:'VTE, raised BP, breakthrough bleeding, mood',
      monitor:'BP and BMI; UKMEC review yearly',
      counsel:'"The pill regulates bleeds, protects the womb lining and helps acne and excess hair over 6 months or so."',
      detail:{ 'Key teaching':'Check UKMEC — obesity (BMI ≥35 is UKMEC 3), smoking over 35, migraine with aura and hypertension limit use.' },
      conditions: [
        {"kind":"avoid","label":"Migraine with aura","text":"UKMEC 4"},
        {"kind":"caution","label":"BMI ≥35","text":"UKMEC 3 — consider alternatives"},
        {"kind":"caution","label":"Smoker aged 35+","text":"UKMEC 3–4 depending on amount"}
      ]
    },
    {
      id:'progestogen',
      name:'Cyclical progestogen or LNG-IUD',
      examples:'E.g. medroxyprogesterone acetate for 12–14 days every 1–3 months; or 52 mg LNG-IUD',
      step:'Endometrial protection if CHC unsuitable or declined',
      source:'NICE CKS · RCOG · SPC',
      sourceUrl:'https://cks.nice.org.uk/topics/polycystic-ovary-syndrome/',
      sideEffects:'Mood change, bloating, irregular bleeding',
      monitor:'Bleed frequency',
      counsel:'"A short course of tablets every few months brings on a bleed and protects the womb lining."',
      detail:{ 'Key teaching':'Cyclical oral progestogen does not provide contraception.' },
      conditions: [
        {"kind":"favoured","label":"CHC contraindicated","text":"Protects endometrium without oestrogen"}
      ]
    },
    {
      id:'metformin',
      name:'Metformin (off-label in PCOS without diabetes)',
      examples:'Start low with meals and titrate (SPC)',
      step:'Metabolic outcomes / weight, added to lifestyle (International guideline)',
      source:'International PCOS guideline 2023 · SPC',
      sourceUrl:'https://www.monash.edu/medicine/mchri/pcos/guideline',
      sideEffects:'GI upset, B12 deficiency with long-term use',
      monitor:'Renal function; B12 if symptoms',
      counsel:'"Start with one tablet with food and build up slowly to reduce tummy upset."',
      detail:{ 'Key teaching':'Off-label in PCOS without diabetes — document discussion. Modest effect on weight and cycles.' },
      conditions: [
        {"kind":"caution","label":"CKD","text":"Dose limits by eGFR (SPC)"}
      ]
    },
    {
      id:'hirsutism',
      name:'Hirsutism — eflornithine cream, anti-androgens (specialist/off-label)',
      examples:'Eflornithine 11.5% cream twice daily to facial hair; spironolactone off-label with contraception',
      step:'Add-on after 6 months of CHC if hirsutism persists',
      source:'NICE CKS · International guideline · SPC',
      sourceUrl:'https://cks.nice.org.uk/topics/hirsutism/',
      sideEffects:'Eflornithine: skin irritation; spironolactone: hyperkalaemia, menstrual irregularity',
      monitor:'U&E for spironolactone where indicated',
      counsel:'"Treatments for excess hair take 6–9 months to show benefit; cosmetic methods can be used alongside."',
      detail:{ 'Key teaching':'Eflornithine availability on NHS varies by formulary.' },
      conditions: [
        {"kind":"avoid","label":"Could become pregnant without contraception","text":"Anti-androgens contraindicated without effective contraception"}
      ]
    },
    {
      id:'fertility',
      name:'Ovulation induction — letrozole, clomifene (specialist)',
      examples:'Fertility specialist only',
      step:'Fertility — refer',
      source:'International PCOS guideline 2023 · NICE CG156',
      sourceUrl:'https://www.nice.org.uk/guidance/cg156',
      sideEffects:'Multiple pregnancy, ovarian hyperstimulation',
      monitor:'Specialist follow-up scans',
      counsel:'"If you are trying for a baby we will refer you — start folic acid now."',
      detail:{ 'Key teaching':'Letrozole is first-line in the international guideline but off-label in the UK. Folic acid before conception (5 mg if BMI ≥30).' },
      conditions: [
        {"kind":"note","label":"Trying to conceive","text":"Refer; check rubella, smear, folic acid, BMI"}
      ]
    }
  ],

  sources: [
    { label:'International evidence-based guideline for the assessment and management of PCOS (2023)', url:'https://www.monash.edu/medicine/mchri/pcos/guideline' },
    { label:'NICE CKS — Polycystic ovary syndrome', url:'https://cks.nice.org.uk/topics/polycystic-ovary-syndrome/' },
    { label:'FSRH — UK Medical Eligibility Criteria (UKMEC)', url:'https://www.fsrh.org/Public/Public/Standards-and-Guidance/fsrh-ukmec-for-contraceptive-use.aspx' },
    { label:'SPC — co-cyprindiol', url:'https://www.medicines.org.uk/emc/search?q=co-cyprindiol' }
  ],
});
