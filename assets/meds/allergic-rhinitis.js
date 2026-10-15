/* ============================================
   Medication Chooser — Allergic rhinitis
   BSACI 2017 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('allergic-rhinitis', {
  title: 'Allergic rhinitis — treatment selection',
  subtitle: 'Antihistamine vs intranasal corticosteroid by severity and dominant symptom (BSACI 2017 / SPC).',
  guideline: 'BSACI 2017 · SPC',


  safety: [
    {"tone":"amber","label":"Child","text":"Child — saline + low-bioavailability INCS; monitor growth on long-term use; non-sedating antihistamines"},
    {"tone":"amber","label":"Pregnant or breastfeeding","text":"Pregnancy — saline first; if a nasal steroid needed choose a low-bioavailability one (fluticasone/mometasone/budesonide); loratadine/cetirizine if antihistamine needed"}
  ],

  drugs: [
    // -------- ORAL ANTIHISTAMINE --------
    {
      id:'oral_antihistamine',
      name:'Oral non-sedating antihistamine',
      examples:'Cetirizine · Loratadine · Fexofenadine',
      step:'1st-line (mild)',
      source:'BSACI 2017 · SPC',
      sideEffects:'Generally minimal; cetirizine mildly sedating in some',
      monitor:'Symptom response',
      counsel:'"A once-a-day non-drowsy antihistamine for mild symptoms and itchy eyes — works within an hour, good for occasional or pollen-season use."',
      detail:{
        'Dose': 'Cetirizine/loratadine 10 mg OD (or fexofenadine 120 mg OD)',
        'Key teaching': 'First-line for mild/intermittent disease and good for itch/eye symptoms. Avoid sedating antihistamines (chlorphenamine) routinely.'
      },
      conditions: [
        {"kind":"favoured","label":"Mild / intermittent","text":"Mild/intermittent — first-line"},
        {"kind":"favoured","label":"Itchy / watery eyes","text":"Itchy eyes — oral antihistamine helps systemic/eye symptoms"},
        {"kind":"favoured","label":"Needs to avoid sedation (driver / safety-critical)","text":"Non-sedating — safe for drivers"},
        {"kind":"note","label":"Moderate–severe / persistent","text":"Moderate–severe — antihistamine alone usually insufficient; add INCS"}
      ]
    },

    // -------- INTRANASAL CORTICOSTEROID --------
    {
      id:'incs',
      name:'Intranasal corticosteroid',
      examples:'Mometasone · Fluticasone · Budesonide spray',
      step:'1st-line (moderate–severe)',
      source:'BSACI 2017 · SPC',
      sideEffects:'Local dryness, crusting, epistaxis; rare septal effects with poor technique',
      monitor:'Technique + adherence; takes days–weeks for full effect',
      counsel:'"A steroid nasal spray is the most effective treatment — but it must be used every day and aimed slightly away from the middle of the nose. It takes a week or two to fully work, so don\'t give up early."',
      detail:{
        'Dose': 'One–two sprays per nostril OD, continuous use through the season',
        'Key teaching': 'Most effective single agent — FIRST-LINE for moderate–severe/persistent rhinitis. Technique and adherence are the top reasons it "fails". Start ~2 weeks pre-season.'
      },
      conditions: [
        {"kind":"favoured","label":"Moderate–severe / persistent","text":"Moderate–severe/persistent — most effective treatment, first-line"},
        {"kind":"favoured","label":"Nasal congestion predominant","text":"Congestion predominant — INCS works better than antihistamine for blockage"},
        {"kind":"favoured","label":"Nasal polyps","text":"Nasal polyps — INCS is the mainstay"},
        {"kind":"note","label":"Pregnant or breastfeeding","text":"Pregnancy — choose low-bioavailability INCS (fluticasone/mometasone/budesonide)"}
      ]
    },

    // -------- COMBINATION SPRAY --------
    {
      id:'combo_spray',
      name:'INCS + intranasal antihistamine spray',
      examples:'Azelastine/fluticasone combination spray',
      step:'Step up (INCS insufficient)',
      source:'BSACI 2017 · SPC',
      sideEffects:'As components; local irritation, bitter taste',
      monitor:'Technique; review response',
      counsel:'"A combined spray with both a steroid and an antihistamine in one — a step up when the steroid spray alone isn\'t quite controlling things."',
      detail:{
        'Dose': 'One spray per nostril BD',
        'Key teaching': 'Step up when a regular INCS alone is insufficient despite good technique/adherence.'
      },
      conditions: [
        {"kind":"favoured","label":"Uncontrolled on intranasal steroid","text":"Uncontrolled on INCS alone — appropriate step up"}
      ]
    },

    // -------- LTRA --------
    {
      id:'ltra',
      name:'Leukotriene receptor antagonist',
      examples:'Montelukast 10 mg nocte',
      step:'Adjunct (with asthma)',
      source:'BSACI 2017 · SPC',
      sideEffects:'Headache, GI upset, neuropsychiatric effects (counsel/monitor mood)',
      monitor:'Mood/behaviour (MHRA warning)',
      counsel:'"A tablet that can help when you have both hay fever and asthma. Let us know about any mood or sleep changes, as these can occasionally occur."',
      detail:{
        'Dose': 'Montelukast 10 mg nocte (age-adjusted in children)',
        'Key teaching': 'Particularly considered where rhinitis coexists with asthma. Note MHRA neuropsychiatric warning.'
      },
      conditions: [
        {"kind":"favoured","label":"Comorbid asthma","text":"Comorbid asthma — treats both (one airway)"}
      ]
    },

    // -------- IPRATROPIUM (rhinorrhoea) --------
    {
      id:'ipratropium',
      name:'Intranasal ipratropium',
      examples:'Ipratropium nasal spray',
      step:'Targeted (rhinorrhoea)',
      source:'SPC',
      sideEffects:'Nasal dryness, epistaxis',
      monitor:'Symptom-targeted use',
      counsel:'"If a constantly runny nose is the main problem, this spray specifically dries up the watery discharge."',
      detail:{
        'Dose': 'Per nostril BD–TDS as needed',
        'Key teaching': 'Targets persistent watery rhinorrhoea not controlled by INCS/antihistamine.'
      },
      conditions: [
        {"kind":"favoured","label":"Watery rhinorrhoea predominant","text":"Watery rhinorrhoea predominant — targeted choice"}
      ]
    },

    // -------- SHORT ORAL STEROID --------
    {
      id:'oral_steroid',
      name:'Short oral corticosteroid (rescue)',
      examples:'Prednisolone short course',
      step:'Rescue (severe, time-limited)',
      source:'BSACI 2017 · SPC',
      sideEffects:'Short course generally safe; usual steroid cautions',
      monitor:'Occasional, short courses only',
      counsel:'"For severe symptoms at an important time — like exams or a wedding — a few days of steroid tablets can settle things. We never use steroid injections for hay fever."',
      detail:{
        'Dose': 'Short oral prednisolone course (e.g. 5–10 days)',
        'Key teaching': 'Occasional rescue for severe uncontrolled symptoms. NEVER use depot corticosteroid injections.'
      },
      conditions: [
        {"kind":"note","label":"Time-limited severe (exam / event)","text":"Short rescue course for severe time-limited symptoms"}
      ]
    },

    // -------- DECONGESTANT (avoid) --------
    {
      id:'decongestant',
      name:'Intranasal decongestant',
      examples:'Xylometazoline',
      step:'Avoid (rebound)',
      source:'SPC',
      sideEffects:'Rhinitis medicamentosa (rebound congestion) with >5 consecutive days use',
      monitor:'Max 5 consecutive days if ever used (MHRA 2026)',
      counsel:'"Decongestant sprays work fast but cause rebound blockage if used for more than 5 days in a row, so we avoid them as a regular treatment."',
      detail:{
        'Key teaching': 'Avoid for ongoing management — limit to ≤5 consecutive days if ever used (e.g. to allow INCS penetration).'
      },
      
    }
  ],

  sources: [
    
    { label:'BSACI — Rhinitis guideline', url:'https://www.bsaci.org/guidelines/' },
    { label:'BNF — Antihistamines / nasal preparations', url:'https://bnf.nice.org.uk/treatment-summaries/' }
  ],
});
