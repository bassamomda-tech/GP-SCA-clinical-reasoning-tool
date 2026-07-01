/* ============================================
   Medication Chooser — Allergic rhinitis
   NICE CKS · BSACI · BNF
   ============================================ */
MedChooser.register('allergic-rhinitis', {
  title: 'Allergic rhinitis — treatment selection',
  subtitle: 'Antihistamine vs intranasal corticosteroid by severity and dominant symptom (BSACI / CKS). Tick the patient profile; cards re-tier live.',
  guideline: 'NICE CKS · BSACI · BNF',

  factors: [
    // Severity / pattern
    { group:'Severity & pattern', id:'mild', label:'Mild / intermittent' },
    { group:'Severity & pattern', id:'modsev', label:'Moderate–severe / persistent' },
    { group:'Severity & pattern', id:'seasonal', label:'Seasonal (pollen)' },
    { group:'Severity & pattern', id:'failed_incs', label:'Uncontrolled on intranasal steroid' },

    // Dominant symptom
    { group:'Dominant symptom', id:'rhinorrhoea', label:'Watery rhinorrhoea predominant' },
    { group:'Dominant symptom', id:'congestion', label:'Nasal congestion predominant' },
    { group:'Dominant symptom', id:'conjunctivitis', label:'Itchy / watery eyes' },

    // Comorbidities
    { group:'Comorbidities', id:'asthma', label:'Comorbid asthma', note:'Consider LTRA' },
    { group:'Comorbidities', id:'polyps', label:'Nasal polyps' },

    // Demographics
    { group:'Demographics', id:'child', label:'Child' },
    { group:'Demographics', id:'preg', label:'Pregnant or breastfeeding' },

    // Preference / context
    { group:'Preference / context', id:'avoid_sedation', label:'Needs to avoid sedation (driver / safety-critical)' },
    { group:'Preference / context', id:'event', label:'Time-limited severe (exam / event)' },
  ],

  flags: (f) => {
    const out = [];
    if (f.preg) out.push({ tone:'amber', text:'Pregnancy — saline first; if a nasal steroid needed choose a low-bioavailability one (fluticasone/mometasone/budesonide); loratadine/cetirizine if antihistamine needed' });
    if (f.child) out.push({ tone:'amber', text:'Child — saline + low-bioavailability INCS; monitor growth on long-term use; non-sedating antihistamines' });
    return out;
  },

  drugs: [
    // -------- ORAL ANTIHISTAMINE --------
    {
      id:'oral_antihistamine',
      name:'Oral non-sedating antihistamine',
      examples:'Cetirizine · Loratadine · Fexofenadine',
      step:'1st-line (mild)',
      source:'NICE CKS · BSACI',
      sideEffects:'Generally minimal; cetirizine mildly sedating in some',
      monitor:'Symptom response',
      counsel:'"A once-a-day non-drowsy antihistamine for mild symptoms and itchy eyes — works within an hour, good for occasional or pollen-season use."',
      detail:{
        'Dose': 'Cetirizine/loratadine 10 mg OD (or fexofenadine)',
        'Key teaching': 'First-line for mild/intermittent disease and good for itch/eye symptoms. Avoid sedating antihistamines (chlorphenamine) routinely.'
      },
      evaluate(f){
        const r = [];
        if (f.mild) r.push({kind:'good', text:'Mild/intermittent — first-line'});
        if (f.conjunctivitis) r.push({kind:'good', text:'Itchy eyes — oral antihistamine helps systemic/eye symptoms'});
        if (f.avoid_sedation) r.push({kind:'good', text:'Non-sedating — safe for drivers'});
        if (f.modsev && !f.mild) r.push({kind:'neutral', text:'Moderate–severe — antihistamine alone usually insufficient; add INCS'});
        const preferred = f.mild || f.conjunctivitis;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'For mild symptoms / itch'}] };
      }
    },

    // -------- INTRANASAL CORTICOSTEROID --------
    {
      id:'incs',
      name:'Intranasal corticosteroid',
      examples:'Mometasone · Fluticasone · Budesonide spray',
      step:'1st-line (moderate–severe)',
      source:'NICE CKS · BSACI',
      sideEffects:'Local dryness, crusting, epistaxis; rare septal effects with poor technique',
      monitor:'Technique + adherence; takes days–weeks for full effect',
      counsel:'"A steroid nasal spray is the most effective treatment — but it must be used every day and aimed slightly away from the middle of the nose. It takes a week or two to fully work, so don\'t give up early."',
      detail:{
        'Dose': 'One–two sprays per nostril OD, continuous use through the season',
        'Key teaching': 'Most effective single agent — FIRST-LINE for moderate–severe/persistent rhinitis. Technique and adherence are the top reasons it "fails". Start ~2 weeks pre-season.'
      },
      evaluate(f){
        const r = [];
        if (f.modsev) r.push({kind:'good', text:'Moderate–severe/persistent — most effective treatment, first-line'});
        if (f.congestion) r.push({kind:'good', text:'Congestion predominant — INCS works better than antihistamine for blockage'});
        if (f.polyps) r.push({kind:'good', text:'Nasal polyps — INCS is the mainstay'});
        if (f.preg) r.push({kind:'neutral', text:'Pregnancy — choose low-bioavailability INCS (fluticasone/mometasone/budesonide)'});
        const preferred = f.modsev || f.congestion || f.polyps;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'First-line for persistent/moderate–severe symptoms'}] };
      }
    },

    // -------- COMBINATION SPRAY --------
    {
      id:'combo_spray',
      name:'INCS + intranasal antihistamine spray',
      examples:'Azelastine/fluticasone combination spray',
      step:'Step up (INCS insufficient)',
      source:'NICE CKS · BSACI',
      sideEffects:'As components; local irritation, bitter taste',
      monitor:'Technique; review response',
      counsel:'"A combined spray with both a steroid and an antihistamine in one — a step up when the steroid spray alone isn\'t quite controlling things."',
      detail:{
        'Dose': 'One spray per nostril BD',
        'Key teaching': 'Step up when a regular INCS alone is insufficient despite good technique/adherence.'
      },
      evaluate(f){
        const r = [];
        if (f.failed_incs) r.push({kind:'good', text:'Uncontrolled on INCS alone — appropriate step up'});
        return { tier: f.failed_incs ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Step up if INCS alone insufficient'}] };
      }
    },

    // -------- LTRA --------
    {
      id:'ltra',
      name:'Leukotriene receptor antagonist',
      examples:'Montelukast 10 mg nocte',
      step:'Adjunct (with asthma)',
      source:'NICE CKS · BSACI',
      sideEffects:'Headache, GI upset, neuropsychiatric effects (counsel/monitor mood)',
      monitor:'Mood/behaviour (MHRA warning)',
      counsel:'"A tablet that can help when you have both hay fever and asthma. Let us know about any mood or sleep changes, as these can occasionally occur."',
      detail:{
        'Dose': 'Montelukast 10 mg nocte (age-adjusted in children)',
        'Key teaching': 'Particularly considered where rhinitis coexists with asthma. Note MHRA neuropsychiatric warning.'
      },
      evaluate(f){
        if (!f.asthma) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Most useful when asthma coexists; not first-line for rhinitis alone'}] };
        return { tier:'preferred', reasons:[{kind:'good', text:'Comorbid asthma — treats both (one airway)'}] };
      }
    },

    // -------- IPRATROPIUM (rhinorrhoea) --------
    {
      id:'ipratropium',
      name:'Intranasal ipratropium',
      examples:'Ipratropium nasal spray',
      step:'Targeted (rhinorrhoea)',
      source:'NICE CKS · BNF',
      sideEffects:'Nasal dryness, epistaxis',
      monitor:'Symptom-targeted use',
      counsel:'"If a constantly runny nose is the main problem, this spray specifically dries up the watery discharge."',
      detail:{
        'Dose': 'Per nostril BD–TDS as needed',
        'Key teaching': 'Targets persistent watery rhinorrhoea not controlled by INCS/antihistamine.'
      },
      evaluate(f){
        if (!f.rhinorrhoea) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Reserve for predominant watery rhinorrhoea'}] };
        return { tier:'preferred', reasons:[{kind:'good', text:'Watery rhinorrhoea predominant — targeted choice'}] };
      }
    },

    // -------- SHORT ORAL STEROID --------
    {
      id:'oral_steroid',
      name:'Short oral corticosteroid (rescue)',
      examples:'Prednisolone short course',
      step:'Rescue (severe, time-limited)',
      source:'NICE CKS · BSACI',
      sideEffects:'Short course generally safe; usual steroid cautions',
      monitor:'Occasional, short courses only',
      counsel:'"For severe symptoms at an important time — like exams or a wedding — a few days of steroid tablets can settle things. We never use steroid injections for hay fever."',
      detail:{
        'Dose': 'Short oral prednisolone course (e.g. 5–10 days)',
        'Key teaching': 'Occasional rescue for severe uncontrolled symptoms. NEVER use depot corticosteroid injections.'
      },
      evaluate(f){
        if (f.event || (f.modsev && f.failed_incs)) return { tier:'acceptable', reasons:[{kind:'neutral', text:'Short rescue course for severe time-limited symptoms'}] };
        return { tier:'avoid', reasons:[{kind:'bad', text:'Not for routine use — reserve as occasional rescue only'}] };
      }
    },

    // -------- DECONGESTANT (avoid) --------
    {
      id:'decongestant',
      name:'Intranasal decongestant',
      examples:'Xylometazoline',
      step:'Avoid (rebound)',
      source:'NICE CKS',
      sideEffects:'Rhinitis medicamentosa (rebound congestion) with >5–7 days use',
      monitor:'Max 5–7 days if ever used',
      counsel:'"Decongestant sprays work fast but cause rebound blockage if used more than about a week, so we avoid them as a regular treatment."',
      detail:{
        'Key teaching': 'Avoid for ongoing management — limit to ≤5–7 days if ever used (e.g. to allow INCS penetration).'
      },
      evaluate(f){
        return { tier:'avoid', reasons:[{kind:'bad', text:'Not for ongoing use — rebound congestion (rhinitis medicamentosa)'}] };
      }
    },
  ],

  sources: [
    { label:'NICE CKS — Allergic rhinitis', url:'https://cks.nice.org.uk/topics/allergic-rhinitis/' },
    { label:'BSACI — Rhinitis guideline', url:'https://www.bsaci.org/guidelines/' },
    { label:'BNF — Antihistamines / nasal preparations', url:'https://bnf.nice.org.uk/treatment-summaries/' },
  ],
});
