/* ============================================
   Medication Chooser — Constipation (adults)
   BNF · NICE NG12 (updated April 2026)  (NICE NG12 (updated April 2026) colorectal red flags)
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('constipation', {
  title: 'Constipation — laxative selection',
  subtitle: 'Stepwise laxative choice (NICE CKS) by stool type, cause and special situations.',
  guideline: 'NICE CKS constipation · NICE NG12 (updated April 2026) (red flags) · NICE TA211 · NICE TA345',


  safety: [
    {"tone":"amber","label":"Possible secondary cause (hypothyroid, hyperCa, drugs)","text":"Screen/treat secondary causes (hypothyroidism, hypercalcaemia, hypokalaemia, culprit drugs) alongside laxatives"},
    {"tone":"red","label":"Change in bowel habit, age ≥60","text":"NICE NG12 (updated April 2026) — alarm feature: FIT + FBC/ferritin and refer on the suspected lower-GI cancer pathway. Abdominal/rectal mass → examine + urgent referral."},
    {"tone":"red","label":"Suspected obstruction (colic, vomiting, distension)","text":"Suspected bowel obstruction — do NOT give oral laxatives/stimulants; assess for acute admission"},
    {"tone":"amber","label":"Pregnant or breastfeeding","text":"Pregnancy — bulk-forming first, then osmotic (lactulose/macrogol); senna only short-term, avoid near term"}
  ],

  drugs: [
    // -------- BULK-FORMING --------
    {
      id:'bulk',
      name:'Bulk-forming laxative',
      examples:'Ispaghula husk (Fybogel)',
      step:'1st-line (if adequate fluids)',
      source:'NICE CKS — Constipation',
      sideEffects:'Bloating, flatulence, obstruction if inadequate fluid',
      monitor:'Stool frequency/consistency; ensure good fluid intake',
      counsel:'"This adds bulk and softens the stool — but only works if you drink plenty of water with it. Don\'t take it just before bed."',
      detail:{
        'Dose': 'Ispaghula husk one sachet BD with water',
        'Key teaching': 'First step when fibre/fluid is low and stool is hard. AVOID in opioid constipation and in faecal impaction (risk of obstruction).'
      },
      conditions: [
        {"kind":"avoid","label":"Faecal loading / impaction","text":"Faecal impaction — bulk-forming inappropriate (obstruction risk)"},
        {"kind":"avoid","label":"Opioid-induced constipation","text":"Opioid-induced — bulk-forming risks obstruction; use osmotic ± stimulant"},
        {"kind":"avoid","label":"Bloating / wind on bulk-forming","text":"Bloating/wind on bulk-forming — switch to an osmotic"},
        {"kind":"favoured","label":"Hard stools","text":"Low fibre / hard stool — reasonable first step with good fluids"},
        {"kind":"favoured","label":"Low fibre / fluid intake","text":"Low fibre / hard stool — reasonable first step with good fluids"},
        {"kind":"favoured","label":"Pregnant or breastfeeding","text":"Pregnancy — bulk-forming is first-line"},
        {"kind":"note","label":"IBS-related (avoid lactulose)","text":"IBS — soluble fibre (ispaghula) ok; some prefer macrogol for bloating"}
      ]
    },

    // -------- MACROGOL --------
    {
      id:'macrogol',
      name:'Osmotic — macrogol',
      examples:'Macrogol 3350 (Movicol) 1–3 sachets/day',
      step:'1st/2nd-line · disimpaction',
      source:'NICE CKS — Constipation',
      sideEffects:'Bloating, cramps, diarrhoea if over-titrated',
      monitor:'Titrate to soft formed stool; high-dose regimen for impaction',
      counsel:'"This draws water into the bowel to soften and move things along. For a blockage we sometimes use several sachets a day for a few days to clear it."',
      detail:{
        'Dose': 'Maintenance 1–3 sachets/day; faecal impaction: up to 8 sachets/day (in 1 L water) over up to 3 days',
        'Key teaching': 'First-choice osmotic. Preferred over lactulose (less bloating, better evidence). The disimpaction workhorse.'
      },
      conditions: [
        {"kind":"favoured","label":"Hard stools","text":"Hard / infrequent stool — effective and well tolerated"},
        {"kind":"favoured","label":"Infrequent but soft when passed","text":"Hard / infrequent stool — effective and well tolerated"},
        {"kind":"favoured","label":"Faecal loading / impaction","text":"Faecal impaction — high-dose macrogol is the disimpaction regimen of choice"},
        {"kind":"favoured","label":"Opioid-induced constipation","text":"Opioid-induced — osmotic ± stimulant is standard"},
        {"kind":"favoured","label":"IBS-related (avoid lactulose)","text":"IBS — preferred osmotic (avoid lactulose)"},
        {"kind":"favoured","label":"Elderly / frail","text":"Elderly — well tolerated, titratable"}
      ]
    },

    // -------- LACTULOSE --------
    {
      id:'lactulose',
      name:'Osmotic — lactulose',
      examples:'Lactulose 15 mL BD',
      step:'Osmotic alternative',
      source:'NICE CKS — Constipation',
      sideEffects:'Bloating, flatulence, cramps (more than macrogol); takes 1–2 days',
      monitor:'Stool response; takes up to 48 h',
      counsel:'"A sugary syrup that softens the stool. It can cause some wind and bloating, and takes a day or two to work."',
      detail:{
        'Dose': 'Lactulose 15 mL BD, adjust to response',
        'Key teaching': 'Alternative osmotic, useful in pregnancy. Avoid in IBS (bloating). Macrogol generally preferred where both suitable.'
      },
      conditions: [
        {"kind":"avoid","label":"IBS-related (avoid lactulose)","text":"IBS — NICE CG61 advises against lactulose (worsens bloating)"},
        {"kind":"favoured","label":"Pregnant or breastfeeding","text":"Pregnancy — lactulose is a recommended osmotic option"},
        {"kind":"note","label":"Bloating / wind on bulk-forming","text":"Osmotic option, though macrogol usually preferred"}
      ]
    },

    // -------- STIMULANT --------
    {
      id:'stimulant',
      name:'Stimulant laxative',
      examples:'Senna 7.5–15 mg nocte · Bisacodyl',
      step:'Add-on (soft but not moving)',
      source:'NICE CKS — Constipation',
      sideEffects:'Cramping, abdominal pain; long-term — usually safe (myth of "lazy bowel" overstated)',
      monitor:'Stool response next morning',
      counsel:'"This stimulates the bowel to push the stool along — works overnight. Useful when the stool is soft but just isn\'t coming."',
      detail:{
        'Dose': 'Senna 7.5–15 mg at night; bisacodyl 5–10 mg nocte',
        'Key teaching': 'Add when stool is soft but movement is poor, and core of opioid-induced constipation (osmotic + stimulant). Avoid in suspected obstruction.'
      },
      conditions: [
        {"kind":"avoid","label":"Suspected obstruction (colic, vomiting, distension)","text":"Suspected obstruction — stimulants contraindicated"},
        {"kind":"favoured","label":"Infrequent but soft when passed","text":"Soft stool but not moving — stimulant is the right add-on"},
        {"kind":"favoured","label":"Needs rapid relief / very distressed","text":"Needs quicker effect — works overnight"},
        {"kind":"favoured","label":"Opioid-induced constipation","text":"Opioid-induced — stimulant + osmotic is standard combination"},
        {"kind":"note","label":"Pregnant or breastfeeding","text":"Pregnancy — senna short-term only, avoid near term"}
      ]
    },

    // -------- RECTAL --------
    {
      id:'rectal',
      name:'Suppository / enema',
      examples:'Glycerol supp · Bisacodyl supp · Phosphate enema',
      step:'Rapid / impaction (rectal loading)',
      source:'NICE CKS — Constipation',
      sideEffects:'Local irritation; phosphate enema — electrolyte shifts in frail/renal',
      monitor:'Response; caution with phosphate enemas in renal impairment/elderly',
      counsel:'"For a quick result or to clear a hard stool low down — these work within the hour. We\'ll choose the gentlest one that will do the job."',
      detail:{
        'Dose': 'Glycerol/bisacodyl suppository; phosphate or arachis-oil-retention enema for hard rectal loading',
        'Key teaching': 'For rapid relief or rectal (low) faecal loading when oral disimpaction is insufficient. Caution with phosphate enemas in the frail/renal-impaired.'
      },
      conditions: [
        {"kind":"favoured","label":"Faecal loading / impaction","text":"Hard rectal loading — suppository/enema clears the low rectum"},
        {"kind":"favoured","label":"Needs rapid relief / very distressed","text":"Rapid relief needed — acts within ~1 hour"}
      ]
    },

    // -------- PRUCALOPRIDE --------
    {
      id:'prucalopride',
      name:'Prucalopride',
      examples:'Prucalopride 2 mg OD (1 mg if elderly/renal)',
      step:'Chronic constipation (≥2 laxatives failed)',
      source:'NICE TA211',
      sideEffects:'Headache, nausea, diarrhoea, abdominal pain (usually transient)',
      monitor:'Response at 4 weeks — stop if ineffective',
      counsel:'"A different type of tablet that helps the bowel\'s own wave of movement, for long-standing constipation that hasn\'t responded to the usual laxatives."',
      detail:{
        'Dose': 'Prucalopride 2 mg OD (1 mg if >65 or renal impairment); review at 4 weeks',
        'Key teaching': 'A 5-HT4 agonist for chronic constipation when at least 2 laxatives from different classes (at adequate dose) have failed over ≥6 months.'
      },
      conditions: [
        {"kind":"favoured","label":"Chronic — failed ≥2 laxatives (different classes)","text":"Chronic constipation, ≥2 laxative classes failed — appropriate next step"}
      ]
    },

    // -------- PAMORA --------
    {
      id:'pamora',
      name:'Peripheral opioid antagonist (PAMORA)',
      examples:'Naloxegol 25 mg OD',
      step:'Opioid-induced (laxatives failed)',
      source:'NICE TA345 · SPC',
      sideEffects:'Abdominal pain, diarrhoea, flatulence; avoid with strong CYP3A4 inhibitors',
      monitor:'Response; stop opioids first if possible',
      counsel:'"This blocks the constipating effect of opioids in the gut without affecting their pain relief — for opioid-related constipation that ordinary laxatives haven\'t fixed."',
      detail:{
        'Dose': 'Naloxegol 25 mg OD on an empty stomach',
        'Key teaching': 'For opioid-induced constipation with inadequate response to standard laxatives. Does not cross to reverse central analgesia.'
      },
      conditions: [
        {"kind":"favoured","label":"Opioid-induced constipation","text":"Opioid-induced constipation · Try osmotic + stimulant first before a PAMORA"}
      ]
    }
  ],

  sources: [
    
    { label:'NICE NG12 (updated April 2026) — Suspected cancer: recognition and referral', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'NICE TA211 — Prucalopride for chronic constipation in women', url:'https://www.nice.org.uk/guidance/ta211' },
    { label:'NICE TA345 — Naloxegol for treating opioid-induced constipation', url:'https://www.nice.org.uk/guidance/ta345' },
    { label:'BNF — Constipation treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/constipation/' }
  ],
});
