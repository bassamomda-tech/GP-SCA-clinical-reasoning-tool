/* ============================================
   Medication Chooser — Irritable Bowel Syndrome
   NICE CG61 · BNF  (NICE NG12 (updated April 2026) colorectal red flags)
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('ibs', {
  title: 'IBS — symptom-targeted pharmacotherapy',
  subtitle: 'Drug selection by predominant symptom once red flags are excluded (NICE CG61).',
  guideline: 'NICE CG61 · BNF',


  safety: [
    {"tone":"red","label":"Rectal bleeding","text":"NICE NG12 (updated April 2026) — alarm feature present: this is NOT IBS until cancer excluded. FIT + FBC/ferritin; refer on the suspected lower-GI cancer pathway if FIT ≥10 µg Hb/g. Abdominal/rectal mass → examine + urgent referral."},
    {"tone":"amber","label":"FH bowel or ovarian cancer","text":"FH bowel/ovarian cancer — consider CA-125 if ovarian features; lower threshold for FIT and referral"},
    {"tone":"amber","label":"Pregnant or breastfeeding","text":"Pregnancy/breastfeeding — most IBS drugs restricted; bulk-forming laxatives + dietary measures first"}
  ],

  drugs: [
    // -------- ANTISPASMODIC --------
    {
      id:'antispasmodic',
      name:'Antispasmodic',
      examples:'Mebeverine 135 mg TDS · Hyoscine butylbromide · Peppermint oil',
      step:'1st-line (pain / cramping)',
      source:'NICE CG61 §1.2.1.2',
      sideEffects:'Generally well tolerated; antimuscarinics — dry mouth, blurred vision, retention; peppermint — heartburn',
      monitor:'Symptom response. Review at 4 weeks.',
      counsel:'"This relaxes the gut muscle to ease the cramping. Take it before meals. Peppermint capsules are an alternative — swallow them whole."',
      detail:{
        'Dose': 'Mebeverine 135 mg TDS before meals; peppermint oil capsules TDS',
        'Interactions': 'Antimuscarinics add to anticholinergic burden',
        'Key teaching': 'First-line for abdominal pain/spasm. Peppermint oil is a useful non-antimuscarinic option.'
      },
      conditions: [
        {"kind":"caution","label":"Closed-angle glaucoma / urinary retention","text":"Glaucoma/retention — avoid hyoscine; use mebeverine or peppermint oil"},
        {"kind":"favoured","label":"Pain / cramping predominant","text":"Pain/spasm or bloating predominant — first-line"},
        {"kind":"favoured","label":"Bloating predominant","text":"Pain/spasm or bloating predominant — first-line"},
        {"kind":"note","label":"Pregnant or breastfeeding","text":"Pregnancy — peppermint oil generally preferred; check suitability"}
      ]
    },

    // -------- LAXATIVE (IBS-C) --------
    {
      id:'laxative',
      name:'Laxative (avoid lactulose)',
      examples:'Ispaghula husk · Macrogol (Movicol)',
      step:'1st-line (IBS-C)',
      source:'NICE CG61 §1.2.1.3',
      sideEffects:'Bloating/wind (bulk-forming), need adequate fluids',
      monitor:'Stool frequency/consistency; titrate to soft formed stool',
      counsel:'"For the constipation side — but we avoid lactulose because it causes bloating and wind. Take it with plenty of water and we\'ll adjust the dose to comfort."',
      detail:{
        'Dose': 'Macrogol 1–3 sachets/day titrated; or ispaghula husk',
        'Interactions': 'Separate bulk-forming fibre from other meds by ~30 min',
        'Key teaching': 'NICE CG61 specifically advises AGAINST lactulose in IBS (worsens bloating). Soluble fibre (ispaghula), not insoluble bran.'
      },
      conditions: [
        {"kind":"avoid","label":"Diarrhoea predominant (IBS-D)","text":"Diarrhoea-predominant — laxative not indicated"},
        {"kind":"favoured","label":"Constipation predominant (IBS-C)","text":"IBS-C — first-line, titrate to effect (avoid lactulose)"},
        {"kind":"note","label":"Bloating predominant","text":"Bloating — prefer macrogol over bulk-forming if bloating troublesome"}
      ]
    },

    // -------- LOPERAMIDE --------
    {
      id:'loperamide',
      name:'Loperamide (antimotility)',
      examples:'Loperamide 2 mg, titrate to stool',
      step:'1st-line (IBS-D)',
      source:'NICE CG61 §1.2.1.4',
      sideEffects:'Constipation, cramping, bloating; rare cardiac at very high doses',
      monitor:'Stool frequency; titrate to first symptoms',
      counsel:'"For the diarrhoea — take it when you need it and adjust the dose. Many people take a dose before going out to feel more confident."',
      detail:{
        'Dose': 'Loperamide titrated to response (e.g. before meals/outings); avoid excessive doses',
        'Interactions': 'QT-prolonging drugs at high dose',
        'Key teaching': 'First-line antimotility for IBS-D. Patient-adjusted dosing aiming for a soft well-formed stool.'
      },
      conditions: [
        {"kind":"avoid","label":"Constipation predominant (IBS-C)","text":"Constipation-predominant — antimotility would worsen"},
        {"kind":"caution","label":"Long QT / on QT-prolonging drugs","text":"Long QT — avoid high doses"},
        {"kind":"favoured","label":"Diarrhoea predominant (IBS-D)","text":"IBS-D — first-line antimotility"}
      ]
    },

    // -------- LOW-DOSE TCA --------
    {
      id:'tca',
      name:'Low-dose tricyclic (TCA)',
      examples:'Amitriptyline 5–10 mg nocte',
      step:'2nd-line (pain modulation)',
      source:'NICE CG61 §1.2.1.5',
      sideEffects:'Drowsiness, dry mouth, constipation, urinary retention, weight gain',
      monitor:'Symptoms; ECG if cardiac risk/higher dose',
      counsel:'"A very low dose of an old antidepressant — we use it here for its effect on gut nerves and pain, not for depression. Take it at night as it can help sleep."',
      detail:{
        'Dose': 'Amitriptyline 5–10 mg nocte, titrate slowly (max ~30 mg in IBS)',
        'Interactions': 'Other sedatives/anticholinergics, QT-prolonging drugs, SSRIs',
        'Key teaching': 'Second-line for pain not controlled by antispasmodics. The constipating effect can suit IBS-D, less so IBS-C.'
      },
      conditions: [
        {"kind":"avoid","label":"Long QT / on QT-prolonging drugs","text":"Long QT / QT drugs — TCA contraindicated"},
        {"kind":"caution","label":"Constipation predominant (IBS-C)","text":"IBS-C — may worsen constipation; consider SSRI instead"},
        {"kind":"caution","label":"Ischaemic heart disease / arrhythmia","text":"IHD / arrhythmia — TCA caution, consider ECG / avoid"},
        {"kind":"caution","label":"Closed-angle glaucoma / urinary retention","text":"Glaucoma / retention — antimuscarinic effect, caution"},
        {"kind":"caution","label":"Needs to avoid sedation (driver / works at height)","text":"Needs to avoid sedation — sedating; dose at night / reconsider"},
        {"kind":"favoured","label":"Pain / cramping predominant","text":"Persistent pain despite first-line — 2nd-line option"},
        {"kind":"favoured","label":"Diarrhoea predominant (IBS-D)","text":"IBS-D — constipating effect can be helpful"},
        {"kind":"favoured","label":"Refractory ≥12 months despite first-line","text":"Persistent pain despite first-line — 2nd-line option"}
      ]
    },

    // -------- SSRI --------
    {
      id:'ssri',
      name:'SSRI',
      examples:'Citalopram · Sertraline',
      step:'3rd-line (if TCA unsuitable)',
      source:'NICE CG61 §1.2.1.5',
      sideEffects:'Nausea, GI upset, can loosen stools, agitation early',
      monitor:'Mood, suicidality early, QT (citalopram)',
      counsel:'"If the tricyclic isn\'t suitable, this type can help the gut–brain pathway too — and it may help mood if that\'s a factor for you."',
      detail:{
        'Dose': 'Standard low starting dose per BNF',
        'Interactions': 'Other serotonergic drugs, QT drugs (citalopram), NSAIDs/anticoagulants (GI bleed)',
        'Key teaching': 'Considered when a TCA is ineffective or not tolerated; the loosening effect tends to suit IBS-C more than IBS-D.'
      },
      conditions: [
        {"kind":"caution","label":"Diarrhoea predominant (IBS-D)","text":"IBS-D — may worsen diarrhoea"},
        {"kind":"caution","label":"Long QT / on QT-prolonging drugs","text":"Long QT — avoid citalopram; choose sertraline cautiously"},
        {"kind":"favoured","label":"Constipation predominant (IBS-C)","text":"IBS-C — SSRI loosening effect can help"},
        {"kind":"favoured","label":"Comorbid anxiety / depression","text":"Comorbid anxiety/depression — dual benefit"}
      ]
    },

    // -------- LINACLOTIDE --------
    {
      id:'linaclotide',
      name:'Linaclotide',
      examples:'Linaclotide 290 micrograms OD',
      step:'Specialist (refractory IBS-C)',
      source:'NICE CG61 §1.2.1.3 · BNF',
      sideEffects:'Diarrhoea (common, can be severe), abdominal pain, flatulence',
      monitor:'Response at 3 months — stop if no benefit; review diarrhoea',
      counsel:'"A newer tablet for stubborn constipation-type IBS that hasn\'t responded to the usual measures. The main side effect is loose stools, so we review it at 3 months."',
      detail:{
        'Dose': 'Linaclotide 290 mcg OD, 30 min before food; review at 3 months',
        'Key teaching': 'Reserve for IBS-C that has not responded to ≥12 months of optimised laxatives. Stop if no response by 3 months.'
      },
      conditions: [
        {"kind":"note","label":"Constipation predominant (IBS-C)","text":"IBS-C — reserve until laxatives optimised for 12 months"}
      ]
    }
  ],

  sources: [
    { label:'NICE CG61 — Irritable bowel syndrome in adults', url:'https://www.nice.org.uk/guidance/cg61' },
    { label:'NICE CG61 — irritable bowel syndrome', url:'https://www.nice.org.uk/guidance/cg61' },
    { label:'NICE NG12 (updated April 2026) — Suspected cancer: recognition and referral', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'BNF — Irritable bowel syndrome treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/irritable-bowel-syndrome/' }
  ],
});
