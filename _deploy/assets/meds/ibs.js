/* ============================================
   Medication Chooser — Irritable Bowel Syndrome
   NICE CG61 · CKS IBS · BNF  (NG12 colorectal red flags)
   ============================================ */
MedChooser.register('ibs', {
  title: 'IBS — symptom-targeted pharmacotherapy',
  subtitle: 'Drug selection by predominant symptom once red flags are excluded (NICE CG61). Tick the patient profile; cards re-tier live.',
  guideline: 'NICE CG61 · CKS IBS · BNF',

  factors: [
    // Predominant pattern
    { group:'Predominant symptom', id:'pain', label:'Pain / cramping predominant' },
    { group:'Predominant symptom', id:'bloating', label:'Bloating predominant' },
    { group:'Predominant symptom', id:'constip', label:'Constipation predominant (IBS-C)' },
    { group:'Predominant symptom', id:'diarr', label:'Diarrhoea predominant (IBS-D)' },
    { group:'Predominant symptom', id:'refractory', label:'Refractory ≥12 months despite first-line', note:'Consider 2nd-line / referral' },

    // Red flags (NG12)
    { group:'Red flags (exclude cancer first)', id:'rectal_bleed', label:'Rectal bleeding' },
    { group:'Red flags (exclude cancer first)', id:'weight_loss', label:'Unexplained weight loss' },
    { group:'Red flags (exclude cancer first)', id:'change_60', label:'Change in bowel habit, age ≥60' },
    { group:'Red flags (exclude cancer first)', id:'mass', label:'Abdominal / rectal mass' },
    { group:'Red flags (exclude cancer first)', id:'anaemia', label:'Iron-deficiency anaemia' },
    { group:'Red flags (exclude cancer first)', id:'fh_ca', label:'FH bowel or ovarian cancer' },
    { group:'Red flags (exclude cancer first)', id:'night', label:'Nocturnal / progressive symptoms' },

    // Demographics
    { group:'Demographics', id:'preg', label:'Pregnant or breastfeeding' },
    { group:'Demographics', id:'elderly', label:'Elderly / frail' },

    // Comorbidities
    { group:'Comorbidities', id:'mood', label:'Comorbid anxiety / depression' },
    { group:'Comorbidities', id:'cardiac', label:'Ischaemic heart disease / arrhythmia', note:'TCA caution' },
    { group:'Comorbidities', id:'glaucoma', label:'Closed-angle glaucoma / urinary retention', note:'Antimuscarinic caution' },
    { group:'Comorbidities', id:'qt', label:'Long QT / on QT-prolonging drugs' },

    // Preference / context
    { group:'Preference / context', id:'avoid_sedation', label:'Needs to avoid sedation (driver / works at height)' },
    { group:'Preference / context', id:'fodmap_tried', label:'Diet (FODMAP / fibre) already optimised' },
  ],

  flags: (f) => {
    const out = [];
    const ng12 = f.rectal_bleed || f.weight_loss || f.change_60 || f.mass || f.anaemia || f.night;
    if (ng12) out.push({ tone:'red', text:'NICE NG12 — alarm feature present: this is NOT IBS until cancer excluded. FIT + FBC/ferritin; refer on the suspected lower-GI cancer (2WW) pathway. Abdominal/rectal mass → examine + urgent referral.' });
    if (f.fh_ca) out.push({ tone:'amber', text:'FH bowel/ovarian cancer — consider CA-125 if ovarian features; lower threshold for FIT and referral' });
    if (f.preg) out.push({ tone:'amber', text:'Pregnancy/breastfeeding — most IBS drugs restricted; bulk-forming laxatives + dietary measures first' });
    return out;
  },

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
      evaluate(f){
        const r = [];
        if (f.pain || f.bloating) r.push({kind:'good', text:'Pain/spasm or bloating predominant — first-line'});
        if (f.glaucoma) r.push({kind:'bad', text:'Glaucoma/retention — avoid hyoscine; use mebeverine or peppermint oil'});
        if (f.preg) r.push({kind:'neutral', text:'Pregnancy — peppermint oil generally preferred; check suitability'});
        const preferred = f.pain || f.bloating;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'For abdominal pain / cramping'}] };
      }
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
        'Key teaching': 'NICE specifically advises AGAINST lactulose in IBS (worsens bloating). Soluble fibre (ispaghula), not insoluble bran.'
      },
      evaluate(f){
        if (f.diarr && !f.constip) return { tier:'avoid', reasons:[{kind:'bad', text:'Diarrhoea-predominant — laxative not indicated'}] };
        const r = [];
        if (f.constip) r.push({kind:'good', text:'IBS-C — first-line, titrate to effect (avoid lactulose)'});
        if (f.bloating) r.push({kind:'neutral', text:'Bloating — prefer macrogol over bulk-forming if bloating troublesome'});
        return { tier: f.constip ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'For constipation-predominant IBS'}] };
      }
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
      evaluate(f){
        if (f.constip && !f.diarr) return { tier:'avoid', reasons:[{kind:'bad', text:'Constipation-predominant — antimotility would worsen'}] };
        const r = [];
        if (f.diarr) r.push({kind:'good', text:'IBS-D — first-line antimotility'});
        if (f.qt) r.push({kind:'bad', text:'Long QT — avoid high doses'});
        return { tier: f.diarr ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'For diarrhoea-predominant IBS'}] };
      }
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
      evaluate(f){
        if (f.qt) return { tier:'avoid', reasons:[{kind:'bad', text:'Long QT / QT drugs — TCA contraindicated'}] };
        const r = [];
        if (f.cardiac) r.push({kind:'bad', text:'IHD / arrhythmia — TCA caution, consider ECG / avoid'});
        if (f.glaucoma) r.push({kind:'bad', text:'Glaucoma / retention — antimuscarinic effect, caution'});
        if (f.refractory || f.pain) r.push({kind:'good', text:'Persistent pain despite first-line — 2nd-line option'});
        if (f.diarr) r.push({kind:'good', text:'IBS-D — constipating effect can be helpful'});
        if (f.constip) r.push({kind:'bad', text:'IBS-C — may worsen constipation; consider SSRI instead'});
        if (f.avoid_sedation) r.push({kind:'bad', text:'Needs to avoid sedation — sedating; dose at night / reconsider'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Second-line for refractory pain'}] };
      }
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
      evaluate(f){
        const r = [];
        if (f.mood) r.push({kind:'good', text:'Comorbid anxiety/depression — dual benefit'});
        if (f.constip) r.push({kind:'good', text:'IBS-C — SSRI loosening effect can help'});
        if (f.diarr) r.push({kind:'bad', text:'IBS-D — may worsen diarrhoea'});
        if (f.qt) r.push({kind:'bad', text:'Long QT — avoid citalopram; choose sertraline cautiously'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Where a TCA is ineffective or unsuitable'}] };
      }
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
      evaluate(f){
        if (!f.constip) return { tier:'avoid', reasons:[{kind:'bad', text:'Only for constipation-predominant IBS'}] };
        if (f.diarr) return { tier:'avoid', reasons:[{kind:'bad', text:'Diarrhoea features — would worsen'}] };
        const r = [];
        if (f.constip && f.refractory) r.push({kind:'good', text:'Refractory IBS-C after ≥12 months optimised laxatives'});
        else if (f.constip) r.push({kind:'neutral', text:'IBS-C — reserve until laxatives optimised for 12 months'});
        return { tier:'acceptable', reasons: r };
      }
    },
  ],

  sources: [
    { label:'NICE CG61 — Irritable bowel syndrome in adults', url:'https://www.nice.org.uk/guidance/cg61' },
    { label:'NICE CKS — Irritable bowel syndrome', url:'https://cks.nice.org.uk/topics/irritable-bowel-syndrome/' },
    { label:'NICE NG12 — Suspected cancer: recognition and referral', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'BNF — Irritable bowel syndrome treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/irritable-bowel-syndrome/' },
  ],
});
