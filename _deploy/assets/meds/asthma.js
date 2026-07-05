/* ============================================
   Medication Chooser — Adult Asthma
   NICE NG245 (2024 joint NICE/BTS/SIGN) · CKS Asthma · BNF
   ============================================ */
MedChooser.register('asthma', {
  title: 'Adult Asthma — pharmacological ladder',
  subtitle: 'NICE NG245 replaces the historical SABA-first model. AIR (low-dose ICS-formoterol PRN) is first-line; MART is the next step.',
  guideline: 'NICE NG245 · CKS Asthma · BNF',

  factors: [
    // Demographics
    { group:'Demographics', id:'age12',   label:'Age 12–17 years', note:'NG245 paediatric pathway differs slightly' },
    { group:'Demographics', id:'preg',    label:'Pregnant or breastfeeding', note:'Treat as in non-pregnancy — under-treatment is worse' },
    { group:'Demographics', id:'older',   label:'Age ≥65 / frail' },

    // Control / severity
    { group:'Control / severity', id:'newdx', label:'Newly diagnosed, not on treatment' },
    { group:'Control / severity', id:'saba_only',  label:'On SABA only, mild symptoms', note:'NG245: switch to AIR' },
    { group:'Control / severity', id:'sx_3wk', label:'Symptoms / SABA ≥3×/week' },
    { group:'Control / severity', id:'nocturnal', label:'Night-time waking from asthma' },
    { group:'Control / severity', id:'exac_year', label:'≥1 exacerbation needing OCS in last year' },
    { group:'Control / severity', id:'high_saba', label:'≥3 SABA inhalers/year', note:'Marker of poor control' },
    { group:'Control / severity', id:'severe', label:'Difficult-to-treat / suspected severe asthma' },

    // Comorbidities
    { group:'Comorbidities', id:'copd_overlap', label:'COPD overlap / smoking history' },
    { group:'Comorbidities', id:'rhinitis', label:'Allergic rhinitis' },
    { group:'Comorbidities', id:'gord', label:'GORD / reflux' },
    { group:'Comorbidities', id:'anxiety', label:'Anxiety / dysfunctional breathing' },
    { group:'Comorbidities', id:'ihd_asth', label:'IHD / arrhythmia' },

    // Allergies / prior intolerance
    { group:'Allergy / prior', id:'aspirin_sens', label:'Aspirin/NSAID sensitivity (Samter\'s)' },
    { group:'Allergy / prior', id:'ltra_intol', label:'Past LTRA neuropsychiatric effects' },

    // Practical
    { group:'Practical / preference', id:'dexterity', label:'Poor dexterity / coordination', note:'Favours DPI or spacer' },
    { group:'Practical / preference', id:'low_inspiratory', label:'Low inspiratory flow', note:'Avoid DPI alone' },
    { group:'Practical / preference', id:'eco', label:'Wants low-carbon inhaler', note:'DPI preferred over MDI' },
    { group:'Practical / preference', id:'cost', label:'Cost-sensitive' },
    { group:'Practical / preference', id:'pdic', label:'PDA / pregnancy / wants simple regimen' },
  ],

  flags: (f) => {
    const out = [];
    if (f.high_saba) out.push({ tone:'red', text:'≥3 SABA/year — poor control, high exacerbation/death risk' });
    if (f.exac_year) out.push({ tone:'amber', text:'Exacerbation last year — step up + asthma plan + review trigger' });
    if (f.severe) out.push({ tone:'amber', text:'Suspected severe asthma — refer specialist (consider biologic)' });
    if (f.saba_only) out.push({ tone:'amber', text:'NG245: SABA-only is no longer recommended — convert to AIR' });
    return out;
  },

  drugs: [
    // -------- AIR (anti-inflammatory reliever) --------
    {
      id:'air',
      name:'AIR — low-dose ICS-formoterol PRN',
      examples:'Budesonide/formoterol 200/6 — 1 puff as reliever',
      step:'Step 1',
      source:'NICE NG245 §1.4 (2024)',
      sideEffects:'Oral thrush, dysphonia — minimised by spacer/rinsing; mild tremor',
      monitor:'Review symptoms + technique at 4–8 weeks. Annual review.',
      counsel:'"This is your reliever AND your preventer in one — use when you feel symptoms. Rinse your mouth after."',
      detail:{
        'Dose': 'Budesonide/formoterol 200/6 (Symbicort Turbohaler or equivalent) — 1 puff PRN',
        'Interactions': 'β-blockers (avoid non-selective)',
        'Key teaching': 'NG245 replaces SABA-only as first-line. Even mild asthma needs ICS exposure.'
      },
      evaluate(f){
        if (f.copd_overlap) return { tier:'acceptable', reasons:[{kind:'bad', text:'Smoking / COPD overlap — consider COPD pathway / combined approach'}] };

        const r = [];
        if (f.newdx)     r.push({kind:'good', text:'Newly diagnosed adult — NG245 first-line'});
        if (f.saba_only) r.push({kind:'good', text:'Switch from SABA-only to AIR per NG245'});
        if (f.preg)      r.push({kind:'good', text:'Pregnancy — ICS-formoterol safe; under-treatment is the risk'});

        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line for most adults with new or mild asthma'}] };
      }
    },

    // -------- MART --------
    {
      id:'mart',
      name:'MART — low-dose ICS-formoterol maintenance + reliever',
      examples:'Budesonide/formoterol 200/6 — 1 puff BD + PRN',
      step:'Step 2',
      source:'NICE NG245 §1.4',
      sideEffects:'Same as ICS; some patients confused by dual role — clear plan needed',
      monitor:'Review at 8–12 weeks; check inhaler technique; PEF if appropriate',
      counsel:'"Two puffs every day to keep symptoms away, AND extra puffs as a reliever when you feel tight. One inhaler does both jobs."',
      detail:{
        'Dose': 'Low-dose ICS-formoterol: 1 puff morning + 1 puff evening + 1 puff PRN (up to 8/day)',
        'Interactions': 'β-blockers (avoid non-selective)',
        'Key teaching': 'Only formoterol-containing combinations can be used as MART — fast onset + long action.'
      },
      evaluate(f){
        const r = [];
        if (f.sx_3wk)    r.push({kind:'good', text:'Symptoms ≥3×/week — MART step'});
        if (f.nocturnal) r.push({kind:'good', text:'Night-time waking — step up to MART'});
        if (f.exac_year) r.push({kind:'good', text:'Exacerbation last year — MART reduces severe exacerbations'});
        if (f.high_saba) r.push({kind:'good', text:'≥3 SABA/year — needs MART or fixed combination'});
        if (f.anxiety)   r.push({kind:'bad', text:'Anxiety / over-use risk — give very clear written plan or use fixed-dose'});

        const preferred = f.sx_3wk || f.nocturnal || f.exac_year || f.high_saba;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r };
      }
    },

    // -------- Moderate-dose MART --------
    {
      id:'mart_mod',
      name:'Moderate-dose MART',
      examples:'Budesonide/formoterol 400/12 — 1 puff BD + PRN',
      step:'Step 3',
      source:'NICE NG245 §1.4',
      sideEffects:'ICS effects more prominent; HPA axis suppression at high cumulative dose',
      monitor:'Adherence + technique before stepping up. Specialist if not controlled.',
      counsel:'"Same inhaler approach, just a stronger preventer dose. If you\'re still not controlled, we should refer to specialist."',
      detail:{
        'Dose': 'Moderate-dose ICS-formoterol BD + PRN',
        'Key teaching': 'Always check adherence + technique + trigger control before assuming step-up is needed.'
      },
      evaluate(f){
        const r = [];
        if (f.exac_year && f.sx_3wk) r.push({kind:'good', text:'Persistent symptoms despite low-dose MART — step up'});
        if (f.severe) r.push({kind:'bad', text:'Possible severe asthma — refer specialist for assessment'});
        return { tier:'acceptable', reasons: r };
      }
    },

    // -------- LTRA add-on --------
    {
      id:'ltra',
      name:'LTRA — Montelukast',
      examples:'10 mg nocte',
      step:'Add-on',
      source:'NICE NG245 §1.4.16 · MHRA 2024 warning (neuropsychiatric)',
      sideEffects:'Neuropsychiatric: low mood, vivid dreams, agitation, suicidal ideation (MHRA black-box)',
      monitor:'Counsel on mental-health side effects + warning leaflet at start',
      counsel:'"This tablet can occasionally cause mood changes, vivid dreams, or low mood — particularly in young people. Stop and call us if that happens. There\'s a yellow MHRA leaflet I\'ll give you."',
      detail:{
        'Dose': 'Montelukast 10 mg nocte (5 mg if 6–14 yrs, 4 mg if 2–5 yrs)',
        'Interactions': 'Minimal',
        'Key teaching': 'Add-on if poor control on moderate-dose MART, OR allergic rhinitis dominant, OR aspirin-sensitive asthma. MHRA 2024: explicit neuropsychiatric warning required.'
      },
      evaluate(f){
        if (f.ltra_intol) return { tier:'avoid', reasons:[{kind:'bad', text:'Previous neuropsychiatric reaction — contraindicated'}] };

        const r = [];
        if (f.aspirin_sens) r.push({kind:'good', text:'Aspirin-sensitive asthma (Samter\'s) — LTRA often effective'});
        if (f.rhinitis) r.push({kind:'good', text:'Coexisting rhinitis — dual benefit'});
        if (f.anxiety) r.push({kind:'bad', text:'Anxiety / low mood — caution; counsel re neuropsychiatric MHRA warning'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reasonable add-on at Step 3 / 4 per NG245'}] };
      }
    },

    // -------- LAMA --------
    {
      id:'lama',
      name:'LAMA add-on — Tiotropium',
      examples:'Tiotropium Respimat 2.5 µg, 2 puffs OD',
      step:'Add-on',
      source:'NICE NG245 §1.4.19',
      sideEffects:'Dry mouth, urinary retention, blurred vision, ↑ glaucoma',
      monitor:'BPH symptoms, glaucoma — review at 8 weeks',
      counsel:'"An add-on inhaler — once a day. Tell me if you get a dry mouth, eye discomfort, or trouble passing water."',
      detail:{
        'Dose': 'Tiotropium Respimat 2.5 µg — 2 puffs OD',
        'Interactions': 'Other anti-muscarinics — additive effects',
        'Key teaching': 'Add when persistent symptoms despite moderate-dose MART, particularly if features of fixed obstruction or COPD overlap.'
      },
      evaluate(f){
        const r = [];
        if (f.copd_overlap) r.push({kind:'good', text:'COPD overlap — LAMA already indicated'});
        if (f.older) r.push({kind:'bad', text:'Elderly — anti-muscarinic burden (urinary retention, cognition)'});
        return { tier:'acceptable', reasons: r };
      }
    },

    // -------- Fixed ICS-LABA --------
    {
      id:'ics_laba_fixed',
      name:'Fixed-dose ICS + LABA (non-MART)',
      examples:'Seretide / Fostair fixed BD + separate SABA reliever',
      step:'Alternative',
      source:'NICE NG245 — alternative when MART unsuitable',
      sideEffects:'ICS local (thrush, dysphonia); LABA tremor',
      monitor:'Review technique + control',
      counsel:'"Take the preventer twice a day every day — even when you feel well. Use the blue reliever only when needed."',
      detail:{
        'Dose': 'E.g. Fostair 100/6 — 1 puff BD; salbutamol 100 PRN',
        'Key teaching': 'Use if patient cannot manage the MART concept (cognitive, anxiety, language) or if formoterol-containing combination unsuitable.'
      },
      evaluate(f){
        const r = [];
        if (f.anxiety) r.push({kind:'good', text:'Anxiety / over-use risk — fixed regimen simpler than MART'});
        if (f.pdic)    r.push({kind:'good', text:'Wants simple regimen — fixed BD easier to teach'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Alternative when MART not suitable'}] };
      }
    },

    // -------- SABA only --------
    {
      id:'saba',
      name:'SABA — Salbutamol',
      examples:'Salbutamol 100 µg MDI — 2 puffs PRN',
      step:'Rescue only',
      source:'NICE NG245 — no longer recommended as monotherapy',
      sideEffects:'Tremor, tachycardia, hypokalaemia at high dose',
      monitor:'Inhaler count — ≥3/year = poor control',
      counsel:'"On its own this is no longer the safest way to treat asthma — using it alone increases the risk of serious attacks. We\'ll add an anti-inflammatory inhaler."',
      detail:{
        'Dose': 'Salbutamol 100 µg — 2 puffs PRN (max 8/day before review)',
        'Key teaching': 'NG245 explicit: SABA monotherapy is no longer a recommended treatment for asthma. Every patient should have ICS exposure.'
      },
      evaluate(f){
        if (f.saba_only) return { tier:'avoid', reasons:[{kind:'bad', text:'NG245: SABA-only is no longer recommended — convert to AIR'}] };
        if (f.high_saba) return { tier:'avoid', reasons:[{kind:'bad', text:'≥3 SABA/year — marker of poor control + mortality risk'}] };
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Reserved for acute exacerbation rescue (e.g. nebulised in attack)'}] };
      }
    },

    // -------- Oral corticosteroid (exacerbation) --------
    {
      id:'ocs',
      name:'Oral corticosteroid (exacerbation)',
      examples:'Prednisolone 40 mg OD × 5 days',
      step:'Exacerbation',
      source:'NICE NG245 · BTS-SIGN',
      sideEffects:'Hyperglycaemia, mood, GI, sleep, adrenal suppression if repeated',
      monitor:'Glucose if diabetic; bone protection if frequent courses',
      counsel:'"A short, 5-day course of steroids to settle this flare. Take with food in the morning. Don\'t stop blue inhaler — use it alongside."',
      detail:{
        'Dose': 'Prednisolone 40 mg OD × 5 days (no tapering needed if course <2 weeks)',
        'Key teaching': 'Frequent OCS courses (≥2/year) = marker for severe asthma referral / biologic consideration.'
      },
      evaluate(f){
        const r = [];
        if (f.exac_year) r.push({kind:'good', text:'Recent exacerbation — short course indicated'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reserved for acute exacerbation, not maintenance'}] };
      }
    },

    // -------- Biologic --------
    {
      id:'biologic',
      name:'Biologic (specialist)',
      examples:'Mepolizumab · Benralizumab · Omalizumab · Dupilumab',
      step:'Specialist',
      source:'NICE NG245 · NICE TAs · BTS-SIGN',
      sideEffects:'Injection site reaction, rare anaphylaxis',
      monitor:'Specialist asthma clinic',
      counsel:'"There are injection treatments that target specific types of asthma — but these are specialist-only. I\'ll refer you to the asthma clinic."',
      detail:{
        'Key teaching': 'Refer if: ≥2 OCS courses/year, maintenance OCS, FeNO + eosinophilia, frequent admissions despite optimal inhaler therapy.'
      },
      evaluate(f){
        if (f.severe) return { tier:'preferred', reasons:[{kind:'good', text:'Severe / difficult-to-treat asthma — refer for biologic assessment'}] };
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Specialist initiation only'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG245 — Asthma: diagnosis, monitoring and chronic asthma management (2024)', url:'https://www.nice.org.uk/guidance/ng245' },
    { label:'NICE CKS — Asthma', url:'https://cks.nice.org.uk/topics/asthma/' },
    { label:'BNF — Asthma treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/asthma/' },
    { label:'MHRA — Montelukast neuropsychiatric reactions', url:'https://www.gov.uk/drug-safety-update/montelukast-singulair' },
  ],
});
