/* ============================================
   Medication Chooser — Male LUTS
   NICE CG97 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('male-luts', {
  title: 'Male LUTS — drug selection',
  subtitle: 'Match the drug to the dominant symptom: voiding (α-blocker ± 5-ARI), storage/OAB (antimuscarinic / mirabegron), or nocturnal polyuria.',
  guideline: 'NICE CG97 · SPC',


  safety: [
    {"tone":"amber","label":"High post-void residual / retention risk","text":"High residual/retention risk — antimuscarinics can precipitate retention; ensure voiding adequate first"},
    {"tone":"amber","label":"Cognitive impairment / dementia","text":"Cognitive impairment — minimise anticholinergic burden (antimuscarinics worsen cognition)"},
    {"tone":"amber","label":"Planned cataract surgery","text":"Planned cataract surgery — α-blockers cause intra-operative floppy iris syndrome; inform the ophthalmologist"},
    {"tone":"red","label":"Hyponatraemia / Na⁺ risk","text":"Hyponatraemia risk — desmopressin can cause dangerous hyponatraemia; check Na⁺"}
  ],

  drugs: [
    // -------- Alpha-blocker --------
    {
      id:'alpha',
      name:'α-blocker (tamsulosin / alfuzosin)',
      examples:'Tamsulosin 400 µg OD',
      step:'Voiding · 1st-line',
      source:'NICE CG97 §1.6 (moderate–severe)',
      sideEffects:'Postural hypotension, dizziness, retrograde ejaculation, IFIS at cataract surgery',
      monitor:'Postural BP; review at 4–6 weeks',
      counsel:'"This relaxes the muscle at the bladder outlet so you pass water more easily — it works within days. It can cause dizziness on standing and dry orgasms."',
      detail:{ 'Key teaching':'First-line for bothersome moderate–severe voiding LUTS. Fast onset (days). Warn re cataract surgery (IFIS).' },
      conditions: [
        {"kind":"caution","label":"Postural hypotension / frail / falls","text":"Postural hypotension / falls — dizziness risk; start cautiously"},
        {"kind":"caution","label":"Planned cataract surgery","text":"Cataract surgery planned — IFIS risk; inform surgeon"},
        {"kind":"favoured","label":"Predominant symptom: Voiding (hesitancy, weak stream)","text":"Voiding symptoms — α-blocker is first-line and fast-acting"},
        {"kind":"favoured","label":"Predominant symptom: Mixed voiding + storage","text":"Voiding symptoms — α-blocker is first-line and fast-acting"}
      ]
    },
    // -------- 5-ARI --------
    {
      id:'fivear',
      name:'5α-reductase inhibitor (finasteride / dutasteride)',
      examples:'Finasteride 5 mg OD',
      step:'Voiding · large prostate',
      source:'NICE CG97 §1.6.10',
      sideEffects:'↓ libido, ED, ejaculatory dysfunction (may persist after stopping — MHRA 2026), gynaecomastia; depression/suicidal ideation (finasteride; precautionary for dutasteride); ↓ PSA by ~50%',
      monitor:'Slow onset (3–6 months); halve PSA reference range; ask about prior depression before starting and review mood (MHRA 2026)',
      counsel:'"This gradually shrinks the prostate over several months, so it works slowly but reduces the chance of needing surgery. It can affect sexual function, occasionally even after stopping, and has been linked to low mood — tell us promptly if your mood changes."',
      detail:{ 'Key teaching':'For enlarged prostate (>30 g / PSA >1.4) to reduce progression + retention/surgery risk. Teratogenic — handling caution. Halves PSA.' },
      conditions: [
        {"kind":"caution","label":"Comorbid erectile dysfunction","text":"Existing ED — 5-ARI may worsen sexual function"},
        {"kind":"caution","label":"Planning to father children","text":"Fertility/teratogenicity concerns — counsel; avoid handling crushed tablets near pregnancy"},
        {"kind":"favoured","label":"Enlarged prostate (>30 g) / PSA >1.4","text":"Enlarged prostate / progression risk — 5-ARI reduces long-term retention + surgery"},
        {"kind":"favoured","label":"High risk of progression","text":"Enlarged prostate / progression risk — 5-ARI reduces long-term retention + surgery"}
      ]
    },
    // -------- Combination --------
    {
      id:'combo',
      name:'α-blocker + 5-ARI combination',
      examples:'Tamsulosin + finasteride / dutasteride',
      step:'Voiding · combination',
      source:'NICE CG97 §1.6.12',
      sideEffects:'Combined effects of both classes',
      monitor:'As above',
      counsel:'"We can combine the fast-acting relaxant with the prostate-shrinking tablet — quick relief now, plus protection against it getting worse."',
      detail:{ 'Key teaching':'Offer combination for bothersome moderate–severe LUTS WITH prostate enlargement — best of immediate + long-term benefit.' },
      conditions: [
        {"kind":"note","label":"Enlarged prostate (>30 g) / PSA >1.4","text":"Reasonable if both rapid relief and progression-prevention wanted"}
      ]
    },
    // -------- Antimuscarinic --------
    {
      id:'antimusc',
      name:'Antimuscarinic (solifenacin / tolterodine)',
      examples:'Solifenacin 5 mg OD',
      step:'Storage / OAB',
      source:'NICE CG97 §1.6.16',
      sideEffects:'Dry mouth, constipation, blurred vision, cognitive effects, urinary retention',
      monitor:'Residual volume; cognition in elderly; review 4–6 weeks',
      counsel:'"This calms an overactive bladder to reduce urgency and frequency. It can give a dry mouth and constipation; tell us if you struggle to pass water."',
      detail:{ 'Key teaching':'For storage/OAB symptoms. Caution if high residual (retention risk) and in the elderly/cognitively impaired (anticholinergic load).' },
      conditions: [
        {"kind":"avoid","label":"High post-void residual / retention risk","text":"High post-void residual — risk of acute retention"},
        {"kind":"avoid","label":"Cognitive impairment / dementia","text":"Cognitive impairment — anticholinergic burden; prefer mirabegron"},
        {"kind":"caution","label":"Elderly (>65)","text":"Elderly — anticholinergic side effects; consider mirabegron"},
        {"kind":"favoured","label":"Predominant symptom: Storage / OAB (urgency, frequency)","text":"Storage/OAB symptoms — antimuscarinic indicated"},
        {"kind":"favoured","label":"Predominant symptom: Mixed voiding + storage","text":"Storage/OAB symptoms — antimuscarinic indicated"}
      ]
    },
    // -------- Mirabegron --------
    {
      id:'mirabegron',
      name:'Mirabegron (β3-agonist)',
      examples:'Mirabegron 50 mg OD',
      step:'Storage / OAB (alt)',
      source:'NICE CG97 · NICE TA290',
      sideEffects:'Hypertension (monitor BP), tachycardia, UTI',
      monitor:'BP at baseline + during treatment',
      counsel:'"An alternative bladder medicine that avoids the dry mouth and confusion of the older drugs — but we\'ll keep an eye on your blood pressure."',
      detail:{ 'Key teaching':'Alternative to antimuscarinics for OAB, especially in the elderly or where anticholinergic load is a problem. Avoid in uncontrolled hypertension.' },
      conditions: [
        {"kind":"caution","label":"Cardiovascular disease / uncontrolled HTN","text":"Uncontrolled HTN — caution; monitor BP"},
        {"kind":"favoured","label":"Predominant symptom: Storage / OAB (urgency, frequency)","text":"Storage symptoms — effective antimuscarinic alternative"}
      ]
    },
    // -------- Desmopressin --------
    {
      id:'desmopressin',
      name:'Desmopressin (nocturnal polyuria)',
      examples:'Desmopressin nocte',
      step:'Nocturia',
      source:'NICE CG97 §1.6.20',
      sideEffects:'Hyponatraemia (can be severe), fluid retention, headache',
      monitor:'Na⁺ at baseline, 3 days, 1 month; avoid >65 with cardiovascular risk',
      counsel:'"This concentrates your urine overnight so you\'re not up so often — but we must check your sodium because it can drop dangerously."',
      detail:{ 'Key teaching':'For troublesome nocturnal polyuria. Check sodium before and during. Caution/avoid in older men and cardiovascular disease.' },
      conditions: [
        {"kind":"avoid","label":"Hyponatraemia / Na⁺ risk","text":"Hyponatraemia risk — desmopressin contraindicated"},
        {"kind":"caution","label":"Elderly (>65)","text":"Over 65 — higher hyponatraemia risk; caution"},
        {"kind":"favoured","label":"Predominant symptom: Nocturnal polyuria predominant","text":"Nocturnal polyuria predominant — desmopressin targets this"}
      ]
    },
    // -------- PDE5 (tadalafil) --------
    {
      id:'tadalafil',
      name:'Tadalafil (if comorbid ED)',
      examples:'Tadalafil 5 mg OD',
      step:'LUTS + ED',
      source:'SPC (licensed); NICE TA273 (2013) is a terminated appraisal — the company made no evidence submission, so NICE was unable to recommend tadalafil for BPH-LUTS',
      sideEffects:'Headache, flushing, dyspepsia; hypotension with nitrates',
      monitor:'Avoid with nitrates / nicorandil',
      counsel:'"A daily low dose can help both the waterworks symptoms and erections at the same time."',
      detail:{ 'Key teaching':'Daily tadalafil can improve both LUTS and erectile dysfunction. Absolutely contraindicated with nitrates.' },
      conditions: [
        {"kind":"avoid","label":"On nitrates","text":"On nitrates — PDE5 inhibitor contraindicated"},
        {"kind":"favoured","label":"Comorbid erectile dysfunction","text":"Comorbid ED — tadalafil treats both LUTS and ED"}
      ]
    }
  ],

  sources: [
    { label:'NICE CG97 — Lower urinary tract symptoms in men: management', url:'https://www.nice.org.uk/guidance/cg97' },
    { label:'NICE CG97 — LUTS in men', url:'https://www.nice.org.uk/guidance/cg97' },
    { label:'BNF — Drugs for urinary frequency, enuresis and incontinence', url:'https://bnf.nice.org.uk/treatment-summaries/urological-conditions/' }
  ],
});
