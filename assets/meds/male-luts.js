/* ============================================
   Medication Chooser — Male LUTS
   NICE NG97 · CKS LUTS in men · BNF
   ============================================ */
MedChooser.register('male-luts', {
  title: 'Male LUTS — drug selection',
  subtitle: 'Match the drug to the dominant symptom: voiding (α-blocker ± 5-ARI), storage/OAB (antimuscarinic / mirabegron), or nocturnal polyuria. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG97 · CKS LUTS in men · BNF',

  factors: [
    // Symptom pattern
    { group:'Dominant symptom', id:'pattern', label:'Predominant symptom', options:[
      { value:'voiding', label:'Voiding (hesitancy, weak stream)' },
      { value:'storage', label:'Storage / OAB (urgency, frequency)' },
      { value:'mixed',   label:'Mixed voiding + storage' },
      { value:'nocturia',label:'Nocturnal polyuria predominant' },
    ]},
    { group:'Dominant symptom', id:'bothersome', label:'Moderate–severe bothersome symptoms' },

    // Prostate / objective
    { group:'Prostate / objective', id:'large_prostate', label:'Enlarged prostate (>30 g) / PSA >1.4' },
    { group:'Prostate / objective', id:'high_residual', label:'High post-void residual / retention risk' },
    { group:'Prostate / objective', id:'progression_risk', label:'High risk of progression', note:'Large prostate + high PSA' },

    // Comorbidities
    { group:'Comorbidities', id:'ed', label:'Comorbid erectile dysfunction' },
    { group:'Comorbidities', id:'postural', label:'Postural hypotension / frail / falls' },
    { group:'Comorbidities', id:'elderly', label:'Elderly (>65)', note:'Antimuscarinic + desmopressin caution' },
    { group:'Comorbidities', id:'cognitive', label:'Cognitive impairment / dementia', note:'Avoid anticholinergics' },
    { group:'Comorbidities', id:'cataract', label:'Planned cataract surgery', note:'α-blocker → IFIS — tell surgeon' },
    { group:'Comorbidities', id:'cvd', label:'Cardiovascular disease / uncontrolled HTN' },

    // Bloods / context
    { group:'Bloods / context', id:'na_low', label:'Hyponatraemia / Na⁺ risk' },
    { group:'Bloods / context', id:'fertility', label:'Planning to father children', note:'5-ARI effects on fertility/teratogenicity' },
    { group:'Bloods / context', id:'pde5_nitrate', label:'On nitrates', note:'PDE5 inhibitor contraindicated' },
  ],

  flags: (f) => {
    const out = [];
    if (f.cataract) out.push({ tone:'amber', text:'Planned cataract surgery — α-blockers cause intra-operative floppy iris syndrome; inform the ophthalmologist' });
    if (f.cognitive) out.push({ tone:'amber', text:'Cognitive impairment — minimise anticholinergic burden (antimuscarinics worsen cognition)' });
    if (f.na_low) out.push({ tone:'red', text:'Hyponatraemia risk — desmopressin can cause dangerous hyponatraemia; check Na⁺' });
    if (f.high_residual) out.push({ tone:'amber', text:'High residual/retention risk — antimuscarinics can precipitate retention; ensure voiding adequate first' });
    return out;
  },

  drugs: [
    // -------- Alpha-blocker --------
    {
      id:'alpha',
      name:'α-blocker (tamsulosin / alfuzosin)',
      examples:'Tamsulosin 400 µg OD',
      step:'Voiding · 1st-line',
      source:'NICE NG97 §1.6 (moderate–severe)',
      sideEffects:'Postural hypotension, dizziness, retrograde ejaculation, IFIS at cataract surgery',
      monitor:'Postural BP; review at 4–6 weeks',
      counsel:'"This relaxes the muscle at the bladder outlet so you pass water more easily — it works within days. It can cause dizziness on standing and dry orgasms."',
      detail:{ 'Key teaching':'First-line for bothersome moderate–severe voiding LUTS. Fast onset (days). Warn re cataract surgery (IFIS).' },
      evaluate(f){
        const r = [];
        if (f.pattern === 'voiding' || f.pattern === 'mixed') r.push({kind:'good', text:'Voiding symptoms — α-blocker is first-line and fast-acting'});
        if (f.postural) r.push({kind:'bad', text:'Postural hypotension / falls — dizziness risk; start cautiously'});
        if (f.cataract) r.push({kind:'bad', text:'Cataract surgery planned — IFIS risk; inform surgeon'});
        const preferred = (f.pattern === 'voiding' || f.pattern === 'mixed') && f.bothersome !== false;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'First-line for voiding symptoms'}] };
      }
    },
    // -------- 5-ARI --------
    {
      id:'fivear',
      name:'5α-reductase inhibitor (finasteride / dutasteride)',
      examples:'Finasteride 5 mg OD',
      step:'Voiding · large prostate',
      source:'NICE NG97 §1.6.10',
      sideEffects:'↓ libido, ED, ejaculatory dysfunction, gynaecomastia; ↓ PSA by ~50%',
      monitor:'Slow onset (3–6 months); halve PSA reference range',
      counsel:'"This gradually shrinks the prostate over several months, so it works slowly but reduces the chance of needing surgery. It can affect sexual function."',
      detail:{ 'Key teaching':'For enlarged prostate (>30 g / PSA >1.4) to reduce progression + retention/surgery risk. Teratogenic — handling caution. Halves PSA.' },
      evaluate(f){
        const r = [];
        if (f.large_prostate || f.progression_risk) r.push({kind:'good', text:'Enlarged prostate / progression risk — 5-ARI reduces long-term retention + surgery'});
        if (f.fertility) r.push({kind:'bad', text:'Fertility/teratogenicity concerns — counsel; avoid handling crushed tablets near pregnancy'});
        if (f.ed) r.push({kind:'bad', text:'Existing ED — 5-ARI may worsen sexual function'});
        const preferred = (f.large_prostate || f.progression_risk);
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Indicated only with prostate enlargement'}] };
      }
    },
    // -------- Combination --------
    {
      id:'combo',
      name:'α-blocker + 5-ARI combination',
      examples:'Tamsulosin + finasteride / dutasteride',
      step:'Voiding · combination',
      source:'NICE NG97 §1.6.12',
      sideEffects:'Combined effects of both classes',
      monitor:'As above',
      counsel:'"We can combine the fast-acting relaxant with the prostate-shrinking tablet — quick relief now, plus protection against it getting worse."',
      detail:{ 'Key teaching':'Offer combination for bothersome moderate–severe LUTS WITH prostate enlargement — best of immediate + long-term benefit.' },
      evaluate(f){
        const r = [];
        if ((f.large_prostate || f.progression_risk) && f.bothersome) { r.push({kind:'good', text:'Bothersome symptoms + enlarged prostate — combination is the NICE option'}); return { tier:'preferred', reasons:r }; }
        if (f.large_prostate) r.push({kind:'neutral', text:'Reasonable if both rapid relief and progression-prevention wanted'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'For bothersome symptoms with prostate enlargement'}] };
      }
    },
    // -------- Antimuscarinic --------
    {
      id:'antimusc',
      name:'Antimuscarinic (solifenacin / tolterodine)',
      examples:'Solifenacin 5 mg OD',
      step:'Storage / OAB',
      source:'NICE NG97 §1.6.16',
      sideEffects:'Dry mouth, constipation, blurred vision, cognitive effects, urinary retention',
      monitor:'Residual volume; cognition in elderly; review 4–6 weeks',
      counsel:'"This calms an overactive bladder to reduce urgency and frequency. It can give a dry mouth and constipation; tell us if you struggle to pass water."',
      detail:{ 'Key teaching':'For storage/OAB symptoms. Caution if high residual (retention risk) and in the elderly/cognitively impaired (anticholinergic load).' },
      evaluate(f){
        if (f.high_residual) return { tier:'avoid', reasons:[{kind:'bad', text:'High post-void residual — risk of acute retention'}] };
        if (f.cognitive) return { tier:'avoid', reasons:[{kind:'bad', text:'Cognitive impairment — anticholinergic burden; prefer mirabegron'}] };
        const r = [];
        if (f.pattern === 'storage' || f.pattern === 'mixed') r.push({kind:'good', text:'Storage/OAB symptoms — antimuscarinic indicated'});
        if (f.elderly) r.push({kind:'bad', text:'Elderly — anticholinergic side effects; consider mirabegron'});
        const preferred = (f.pattern === 'storage') && !f.elderly;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'For storage symptoms; mind residual + cognition'}] };
      }
    },
    // -------- Mirabegron --------
    {
      id:'mirabegron',
      name:'Mirabegron (β3-agonist)',
      examples:'Mirabegron 50 mg OD',
      step:'Storage / OAB (alt)',
      source:'NICE NG97 · NICE TA290',
      sideEffects:'Hypertension (monitor BP), tachycardia, UTI',
      monitor:'BP at baseline + during treatment',
      counsel:'"An alternative bladder medicine that avoids the dry mouth and confusion of the older drugs — but we\'ll keep an eye on your blood pressure."',
      detail:{ 'Key teaching':'Alternative to antimuscarinics for OAB, especially in the elderly or where anticholinergic load is a problem. Avoid in uncontrolled hypertension.' },
      evaluate(f){
        if (f.cvd) return { tier:'acceptable', reasons:[{kind:'bad', text:'Uncontrolled HTN — caution; monitor BP'}] };
        const r = [];
        if ((f.pattern === 'storage' || f.pattern === 'mixed') && (f.elderly || f.cognitive)) { r.push({kind:'good', text:'OAB in elderly / cognitive impairment — avoids anticholinergic burden'}); return { tier:'preferred', reasons:r }; }
        if (f.pattern === 'storage') r.push({kind:'good', text:'Storage symptoms — effective antimuscarinic alternative'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Alternative for OAB; check BP'}] };
      }
    },
    // -------- Desmopressin --------
    {
      id:'desmopressin',
      name:'Desmopressin (nocturnal polyuria)',
      examples:'Desmopressin nocte',
      step:'Nocturia',
      source:'NICE NG97 §1.6.20',
      sideEffects:'Hyponatraemia (can be severe), fluid retention, headache',
      monitor:'Na⁺ at baseline, 3 days, 1 month; avoid >65 with cardiovascular risk',
      counsel:'"This concentrates your urine overnight so you\'re not up so often — but we must check your sodium because it can drop dangerously."',
      detail:{ 'Key teaching':'For troublesome nocturnal polyuria. Check sodium before and during. Caution/avoid in older men and cardiovascular disease.' },
      evaluate(f){
        if (f.na_low) return { tier:'avoid', reasons:[{kind:'bad', text:'Hyponatraemia risk — desmopressin contraindicated'}] };
        const r = [];
        if (f.pattern === 'nocturia') { r.push({kind:'good', text:'Nocturnal polyuria predominant — desmopressin targets this'}); }
        if (f.elderly) r.push({kind:'bad', text:'Over 65 — higher hyponatraemia risk; caution'});
        const preferred = f.pattern === 'nocturia' && !f.elderly;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Only for nocturnal polyuria; monitor sodium'}] };
      }
    },
    // -------- PDE5 (tadalafil) --------
    {
      id:'tadalafil',
      name:'Tadalafil (if comorbid ED)',
      examples:'Tadalafil 5 mg OD',
      step:'LUTS + ED',
      source:'CKS · BNF',
      sideEffects:'Headache, flushing, dyspepsia; hypotension with nitrates',
      monitor:'Avoid with nitrates / nicorandil',
      counsel:'"A daily low dose can help both the waterworks symptoms and erections at the same time."',
      detail:{ 'Key teaching':'Daily tadalafil can improve both LUTS and erectile dysfunction. Absolutely contraindicated with nitrates.' },
      evaluate(f){
        if (f.pde5_nitrate) return { tier:'avoid', reasons:[{kind:'bad', text:'On nitrates — PDE5 inhibitor contraindicated'}] };
        const r = [];
        if (f.ed) { r.push({kind:'good', text:'Comorbid ED — tadalafil treats both LUTS and ED'}); return { tier:'preferred', reasons:r }; }
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Consider when LUTS coexist with erectile dysfunction'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG97 — Lower urinary tract symptoms in men: management', url:'https://www.nice.org.uk/guidance/cg97' },
    { label:'NICE CKS — LUTS in men', url:'https://cks.nice.org.uk/topics/luts-in-men/' },
    { label:'BNF — Drugs for urinary frequency, enuresis and incontinence', url:'https://bnf.nice.org.uk/treatment-summaries/urological-conditions/' },
  ],
});
