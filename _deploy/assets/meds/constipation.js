/* ============================================
   Medication Chooser — Constipation (adults)
   NICE CKS Constipation · BNF  (NG12 colorectal red flags)
   ============================================ */
MedChooser.register('constipation', {
  title: 'Constipation — laxative selection',
  subtitle: 'Stepwise laxative choice (NICE CKS Constipation) by stool type, cause and special situations. Tick the patient profile; cards re-tier live.',
  guideline: 'NICE CKS Constipation · BNF',

  factors: [
    // Stool / pattern
    { group:'Stool & pattern', id:'hard', label:'Hard stools' },
    { group:'Stool & pattern', id:'infrequent', label:'Infrequent but soft when passed' },
    { group:'Stool & pattern', id:'impaction', label:'Faecal loading / impaction', note:'Disimpaction regimen needed' },
    { group:'Stool & pattern', id:'rapid', label:'Needs rapid relief / very distressed' },
    { group:'Stool & pattern', id:'chronic_fail', label:'Chronic — failed ≥2 laxatives (different classes)', note:'Consider prucalopride' },

    // Cause / context
    { group:'Cause & context', id:'opioid', label:'Opioid-induced constipation', note:'Avoid bulk-forming' },
    { group:'Cause & context', id:'low_fibre', label:'Low fibre / fluid intake' },
    { group:'Cause & context', id:'ibs', label:'IBS-related (avoid lactulose)' },
    { group:'Cause & context', id:'secondary', label:'Possible secondary cause (hypothyroid, hyperCa, drugs)', note:'Treat the cause' },

    // Red flags (NG12)
    { group:'Red flags (exclude cancer)', id:'change_60', label:'Change in bowel habit, age ≥60' },
    { group:'Red flags (exclude cancer)', id:'rectal_bleed', label:'Rectal bleeding' },
    { group:'Red flags (exclude cancer)', id:'weight_loss', label:'Unexplained weight loss' },
    { group:'Red flags (exclude cancer)', id:'mass', label:'Abdominal / rectal mass' },
    { group:'Red flags (exclude cancer)', id:'anaemia', label:'Iron-deficiency anaemia' },
    { group:'Red flags (exclude cancer)', id:'obstruction', label:'Suspected obstruction (colic, vomiting, distension)' },

    // Demographics
    { group:'Demographics', id:'preg', label:'Pregnant or breastfeeding' },
    { group:'Demographics', id:'elderly', label:'Elderly / frail' },

    // Preference / context
    { group:'Preference / context', id:'rectal_ok', label:'Rectal route acceptable' },
    { group:'Preference / context', id:'bulk_intol', label:'Bloating / wind on bulk-forming' },
  ],

  flags: (f) => {
    const out = [];
    const ng12 = f.change_60 || f.rectal_bleed || f.weight_loss || f.mass || f.anaemia;
    if (ng12) out.push({ tone:'red', text:'NICE NG12 — alarm feature: FIT + FBC/ferritin and refer on the suspected lower-GI cancer (2WW) pathway. Abdominal/rectal mass → examine + urgent referral.' });
    if (f.obstruction) out.push({ tone:'red', text:'Suspected bowel obstruction — do NOT give oral laxatives/stimulants; assess for acute admission' });
    if (f.secondary) out.push({ tone:'amber', text:'Screen/treat secondary causes (hypothyroidism, hypercalcaemia, hypokalaemia, culprit drugs) alongside laxatives' });
    if (f.preg) out.push({ tone:'amber', text:'Pregnancy — bulk-forming first, then osmotic (lactulose/macrogol); senna only short-term, avoid near term' });
    return out;
  },

  drugs: [
    // -------- BULK-FORMING --------
    {
      id:'bulk',
      name:'Bulk-forming laxative',
      examples:'Ispaghula husk (Fybogel)',
      step:'1st-line (if adequate fluids)',
      source:'NICE CKS Constipation · BNF',
      sideEffects:'Bloating, flatulence, obstruction if inadequate fluid',
      monitor:'Stool frequency/consistency; ensure good fluid intake',
      counsel:'"This adds bulk and softens the stool — but only works if you drink plenty of water with it. Don\'t take it just before bed."',
      detail:{
        'Dose': 'Ispaghula husk one sachet BD with water',
        'Key teaching': 'First step when fibre/fluid is low and stool is hard. AVOID in opioid constipation and in faecal impaction (risk of obstruction).'
      },
      evaluate(f){
        if (f.opioid) return { tier:'avoid', reasons:[{kind:'bad', text:'Opioid-induced — bulk-forming risks obstruction; use osmotic ± stimulant'}] };
        if (f.impaction) return { tier:'avoid', reasons:[{kind:'bad', text:'Faecal impaction — bulk-forming inappropriate (obstruction risk)'}] };
        if (f.bulk_intol) return { tier:'avoid', reasons:[{kind:'bad', text:'Bloating/wind on bulk-forming — switch to an osmotic'}] };
        const r = [];
        if (f.low_fibre || f.hard) r.push({kind:'good', text:'Low fibre / hard stool — reasonable first step with good fluids'});
        if (f.ibs) r.push({kind:'neutral', text:'IBS — soluble fibre (ispaghula) ok; some prefer macrogol for bloating'});
        if (f.preg) r.push({kind:'good', text:'Pregnancy — bulk-forming is first-line'});
        return { tier: (f.low_fibre || f.hard || f.preg) ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'First-line when fibre/fluid is low'}] };
      }
    },

    // -------- MACROGOL --------
    {
      id:'macrogol',
      name:'Osmotic — macrogol',
      examples:'Macrogol 3350 (Movicol) 1–3 sachets/day',
      step:'1st/2nd-line · disimpaction',
      source:'NICE CKS Constipation · BNF',
      sideEffects:'Bloating, cramps, diarrhoea if over-titrated',
      monitor:'Titrate to soft formed stool; high-dose regimen for impaction',
      counsel:'"This draws water into the bowel to soften and move things along. For a blockage we sometimes use several sachets a day for a few days to clear it."',
      detail:{
        'Dose': 'Maintenance 1–3 sachets/day; faecal impaction: up to 8 sachets/day (in 1 L water) over up to 3 days',
        'Key teaching': 'First-choice osmotic. Preferred over lactulose (less bloating, better evidence). The disimpaction workhorse.'
      },
      evaluate(f){
        const r = [];
        if (f.impaction) r.push({kind:'good', text:'Faecal impaction — high-dose macrogol is the disimpaction regimen of choice'});
        if (f.opioid) r.push({kind:'good', text:'Opioid-induced — osmotic ± stimulant is standard'});
        if (f.hard || f.infrequent) r.push({kind:'good', text:'Hard / infrequent stool — effective and well tolerated'});
        if (f.ibs) r.push({kind:'good', text:'IBS — preferred osmotic (avoid lactulose)'});
        if (f.elderly) r.push({kind:'good', text:'Elderly — well tolerated, titratable'});
        const preferred = f.impaction || f.opioid || f.bulk_intol || f.ibs || f.hard;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reliable osmotic for most adults'}] };
      }
    },

    // -------- LACTULOSE --------
    {
      id:'lactulose',
      name:'Osmotic — lactulose',
      examples:'Lactulose 15 mL BD',
      step:'Osmotic alternative',
      source:'NICE CKS Constipation · BNF',
      sideEffects:'Bloating, flatulence, cramps (more than macrogol); takes 1–2 days',
      monitor:'Stool response; takes up to 48 h',
      counsel:'"A sugary syrup that softens the stool. It can cause some wind and bloating, and takes a day or two to work."',
      detail:{
        'Dose': 'Lactulose 15 mL BD, adjust to response',
        'Key teaching': 'Alternative osmotic, useful in pregnancy. Avoid in IBS (bloating). Macrogol generally preferred where both suitable.'
      },
      evaluate(f){
        if (f.ibs) return { tier:'avoid', reasons:[{kind:'bad', text:'IBS — NICE advises against lactulose (worsens bloating)'}] };
        const r = [];
        if (f.preg) r.push({kind:'good', text:'Pregnancy — lactulose is a recommended osmotic option'});
        if (f.bulk_intol) r.push({kind:'neutral', text:'Osmotic option, though macrogol usually preferred'});
        return { tier: f.preg ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Osmotic alternative to macrogol'}] };
      }
    },

    // -------- STIMULANT --------
    {
      id:'stimulant',
      name:'Stimulant laxative',
      examples:'Senna 7.5–15 mg nocte · Bisacodyl',
      step:'Add-on (soft but not moving)',
      source:'NICE CKS Constipation · BNF',
      sideEffects:'Cramping, abdominal pain; long-term — usually safe (myth of "lazy bowel" overstated)',
      monitor:'Stool response next morning',
      counsel:'"This stimulates the bowel to push the stool along — works overnight. Useful when the stool is soft but just isn\'t coming."',
      detail:{
        'Dose': 'Senna 7.5–15 mg at night; bisacodyl 5–10 mg nocte',
        'Key teaching': 'Add when stool is soft but movement is poor, and core of opioid-induced constipation (osmotic + stimulant). Avoid in suspected obstruction.'
      },
      evaluate(f){
        if (f.obstruction) return { tier:'avoid', reasons:[{kind:'bad', text:'Suspected obstruction — stimulants contraindicated'}] };
        const r = [];
        if (f.opioid) r.push({kind:'good', text:'Opioid-induced — stimulant + osmotic is standard combination'});
        if (f.infrequent) r.push({kind:'good', text:'Soft stool but not moving — stimulant is the right add-on'});
        if (f.rapid) r.push({kind:'good', text:'Needs quicker effect — works overnight'});
        if (f.preg) r.push({kind:'neutral', text:'Pregnancy — senna short-term only, avoid near term'});
        return { tier: (f.opioid || f.infrequent) ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Add-on when stool soft but transit slow'}] };
      }
    },

    // -------- RECTAL --------
    {
      id:'rectal',
      name:'Suppository / enema',
      examples:'Glycerol supp · Bisacodyl supp · Phosphate enema',
      step:'Rapid / impaction (rectal loading)',
      source:'NICE CKS Constipation · BNF',
      sideEffects:'Local irritation; phosphate enema — electrolyte shifts in frail/renal',
      monitor:'Response; caution with phosphate enemas in renal impairment/elderly',
      counsel:'"For a quick result or to clear a hard stool low down — these work within the hour. We\'ll choose the gentlest one that will do the job."',
      detail:{
        'Dose': 'Glycerol/bisacodyl suppository; phosphate or arachis-oil-retention enema for hard rectal loading',
        'Key teaching': 'For rapid relief or rectal (low) faecal loading when oral disimpaction is insufficient. Caution with phosphate enemas in the frail/renal-impaired.'
      },
      evaluate(f){
        if (!f.rectal_ok && !f.impaction && !f.rapid) return { tier:'acceptable', reasons:[{kind:'neutral', text:'If rectal route acceptable for rapid relief'}] };
        const r = [];
        if (f.impaction) r.push({kind:'good', text:'Hard rectal loading — suppository/enema clears the low rectum'});
        if (f.rapid) r.push({kind:'good', text:'Rapid relief needed — acts within ~1 hour'});
        if (f.elderly) r.push({kind:'bad', text:'Frail/elderly — avoid phosphate enemas (electrolyte risk); use gentler options'});
        return { tier: (f.impaction || f.rapid) ? 'preferred' : 'acceptable', reasons: r };
      }
    },

    // -------- PRUCALOPRIDE --------
    {
      id:'prucalopride',
      name:'Prucalopride',
      examples:'Prucalopride 2 mg OD (1 mg if elderly/renal)',
      step:'Chronic constipation (≥2 laxatives failed)',
      source:'NICE TA211 · CKS Constipation',
      sideEffects:'Headache, nausea, diarrhoea, abdominal pain (usually transient)',
      monitor:'Response at 4 weeks — stop if ineffective',
      counsel:'"A different type of tablet that helps the bowel\'s own wave of movement, for long-standing constipation that hasn\'t responded to the usual laxatives."',
      detail:{
        'Dose': 'Prucalopride 2 mg OD (1 mg if >65 or renal impairment); review at 4 weeks',
        'Key teaching': 'A 5-HT4 agonist for chronic constipation when at least 2 laxatives from different classes (at adequate dose) have failed over ≥6 months.'
      },
      evaluate(f){
        if (!f.chronic_fail) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Reserve for chronic constipation after ≥2 laxative classes have failed'}] };
        const r = [{kind:'good', text:'Chronic constipation, ≥2 laxative classes failed — appropriate next step'}];
        if (f.opioid) r.push({kind:'neutral', text:'Opioid-induced — consider a PAMORA (e.g. naloxegol) as well/instead'});
        return { tier:'preferred', reasons: r };
      }
    },

    // -------- PAMORA --------
    {
      id:'pamora',
      name:'Peripheral opioid antagonist (PAMORA)',
      examples:'Naloxegol 25 mg OD',
      step:'Opioid-induced (laxatives failed)',
      source:'NICE TA345 · BNF',
      sideEffects:'Abdominal pain, diarrhoea, flatulence; avoid with strong CYP3A4 inhibitors',
      monitor:'Response; stop opioids first if possible',
      counsel:'"This blocks the constipating effect of opioids in the gut without affecting their pain relief — for opioid-related constipation that ordinary laxatives haven\'t fixed."',
      detail:{
        'Dose': 'Naloxegol 25 mg OD on an empty stomach',
        'Key teaching': 'For opioid-induced constipation with inadequate response to standard laxatives. Does not cross to reverse central analgesia.'
      },
      evaluate(f){
        if (!f.opioid) return { tier:'avoid', reasons:[{kind:'bad', text:'Only indicated in opioid-induced constipation'}] };
        const r = [{kind:'good', text:'Opioid-induced constipation'}];
        if (f.chronic_fail) r.push({kind:'good', text:'Standard laxatives inadequate — appropriate'});
        else r.push({kind:'neutral', text:'Try osmotic + stimulant first before a PAMORA'});
        return { tier: f.chronic_fail ? 'preferred' : 'acceptable', reasons: r };
      }
    },
  ],

  sources: [
    { label:'NICE CKS — Constipation', url:'https://cks.nice.org.uk/topics/constipation/' },
    { label:'NICE NG12 — Suspected cancer: recognition and referral', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'NICE TA211 — Prucalopride for chronic constipation in women', url:'https://www.nice.org.uk/guidance/ta211' },
    { label:'BNF — Constipation treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/constipation/' },
  ],
});
