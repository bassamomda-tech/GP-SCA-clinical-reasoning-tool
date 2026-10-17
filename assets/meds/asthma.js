/* ============================================
   Medication Chooser — Adult Asthma
   NICE NG245 (2024 joint NICE/BTS/SIGN) · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('asthma', {
  title: 'Adult Asthma — pharmacological ladder',
  subtitle: 'NICE NG245 replaces the historical SABA-first model. AIR (low-dose ICS-formoterol PRN) is first-line; MART is the next step.',
  guideline: 'NICE NG245 · SPC',


  safety: [
    {"tone":"amber","label":"On SABA only, mild symptoms","text":"NG245: SABA-only is no longer recommended — convert to AIR"},
    {"tone":"amber","label":"≥1 exacerbation needing OCS in last year","text":"Exacerbation last year — step up + asthma plan + review trigger"},
    {"tone":"red","label":"≥3 SABA inhalers/year","text":"≥3 SABA/year — poor control, high exacerbation/death risk"},
    {"tone":"amber","label":"Difficult-to-treat / suspected severe asthma","text":"Suspected severe asthma — refer specialist (consider biologic)"}
  ],

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
      conditions: [
        {"kind":"caution","label":"COPD overlap / smoking history","text":"Smoking / COPD overlap — consider COPD pathway / combined approach"},
        {"kind":"favoured","label":"Pregnant or breastfeeding","text":"Pregnancy — ICS-formoterol safe; under-treatment is the risk"},
        {"kind":"favoured","label":"Newly diagnosed, not on treatment","text":"Newly diagnosed adult — NG245 first-line"},
        {"kind":"favoured","label":"On SABA only, mild symptoms","text":"Switch from SABA-only to AIR per NG245"}
      ]
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
      conditions: [
        {"kind":"caution","label":"Anxiety / dysfunctional breathing","text":"Anxiety / over-use risk — give very clear written plan or use fixed-dose"},
        {"kind":"favoured","label":"Symptoms / SABA ≥3×/week","text":"Symptoms ≥3×/week — MART step"},
        {"kind":"favoured","label":"Night-time waking from asthma","text":"Night-time waking — step up to MART"},
        {"kind":"favoured","label":"≥1 exacerbation needing OCS in last year","text":"Exacerbation last year — MART reduces severe exacerbations"},
        {"kind":"favoured","label":"≥3 SABA inhalers/year","text":"≥3 SABA/year — needs MART or fixed combination"}
      ]
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
      conditions: [
        {"kind":"caution","label":"Difficult-to-treat / suspected severe asthma","text":"Possible severe asthma — refer specialist for assessment"}
      ]
    },

    // -------- LTRA add-on --------
    {
      id:'ltra',
      name:'LTRA — Montelukast',
      examples:'10 mg nocte',
      step:'Add-on',
      source:'NICE NG245 §1.4.16 · MHRA 2024 warning (neuropsychiatric)',
      sideEffects:'Neuropsychiatric: low mood, vivid dreams, agitation, suicidal ideation (MHRA Drug Safety Update Sept 2019; US FDA boxed warning (international))',
      monitor:'Counsel on mental-health side effects + warning leaflet at start',
      counsel:'"This tablet can occasionally cause mood changes, vivid dreams, or low mood — particularly in young people. Stop and call us if that happens. There\'s a yellow MHRA leaflet I\'ll give you."',
      detail:{
        'Dose': 'Montelukast 10 mg nocte (5 mg if 6–14 yrs, 4 mg if 2–5 yrs)',
        'Interactions': 'Minimal',
        'Key teaching': 'Add-on if poor control on moderate-dose MART, OR allergic rhinitis dominant, OR aspirin-sensitive asthma. MHRA 2024: explicit neuropsychiatric warning required.'
      },
      conditions: [
        {"kind":"avoid","label":"Past LTRA neuropsychiatric effects","text":"Previous neuropsychiatric reaction — contraindicated"},
        {"kind":"caution","label":"Anxiety / dysfunctional breathing","text":"Anxiety / low mood — caution; counsel re neuropsychiatric MHRA warning"},
        {"kind":"favoured","label":"Allergic rhinitis","text":"Coexisting rhinitis — dual benefit"},
        {"kind":"favoured","label":"Aspirin/NSAID sensitivity (Samter's)","text":"Aspirin-sensitive asthma (Samter's) — LTRA often effective"}
      ]
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
      conditions: [
        {"kind":"caution","label":"Age ≥65 / frail","text":"Elderly — anti-muscarinic burden (urinary retention, cognition)"},
        {"kind":"favoured","label":"COPD overlap / smoking history","text":"COPD overlap — LAMA already indicated"}
      ]
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
      conditions: [
        {"kind":"favoured","label":"Anxiety / dysfunctional breathing","text":"Anxiety / over-use risk — fixed regimen simpler than MART"},
        {"kind":"favoured","label":"PDA / pregnancy / wants simple regimen","text":"Wants simple regimen — fixed BD easier to teach"}
      ]
    },

    // -------- SABA only --------
    {
      id:'saba',
      name:'SABA — Salbutamol',
      examples:'Salbutamol 100 µg MDI — 1–2 puffs PRN',
      step:'Rescue only',
      source:'NICE NG245 — no longer recommended as monotherapy',
      sideEffects:'Tremor, tachycardia, hypokalaemia at high dose',
      monitor:'Inhaler count — ≥3/year = poor control',
      counsel:'"On its own this is no longer the safest way to treat asthma — using it alone increases the risk of serious attacks. We\'ll add an anti-inflammatory inhaler."',
      detail:{
        'Dose': 'Salbutamol 100–200 micrograms (1–2 puffs of 100 µg) PRN, alongside an ICS; frequent need → review control',
        'Key teaching': 'NG245 explicit: SABA monotherapy is no longer a recommended treatment for asthma. Every patient should have ICS exposure.'
      },
      conditions: [
        {"kind":"avoid","label":"On SABA only, mild symptoms","text":"NG245: SABA-only is no longer recommended — convert to AIR"},
        {"kind":"avoid","label":"≥3 SABA inhalers/year","text":"≥3 SABA/year — marker of poor control + mortality risk"}
      ]
    },

    // -------- Oral corticosteroid (exacerbation) --------
    {
      id:'ocs',
      name:'Oral corticosteroid (exacerbation)',
      examples:'Prednisolone 40 mg OD × 5 days',
      step:'Exacerbation',
      source:'BTS/SIGN 158 (2019, acute asthma) · SPC',
      sideEffects:'Hyperglycaemia, mood, GI, sleep, adrenal suppression if repeated',
      monitor:'Glucose if diabetic; bone protection if frequent courses',
      counsel:'"A short, 5-day course of steroids to settle this flare. Take with food in the morning. Don\'t stop blue inhaler — use it alongside."',
      detail:{
        'Dose': 'Prednisolone 40 mg OD × 5 days (no tapering needed if course <2 weeks)',
        'Key teaching': 'Frequent OCS courses (≥2/year) = marker for severe asthma referral / biologic consideration.'
      },
      conditions: [
        {"kind":"favoured","label":"≥1 exacerbation needing OCS in last year","text":"Recent exacerbation — short course indicated"}
      ]
    },

    // -------- Biologic --------
    {
      id:'biologic',
      name:'Biologic (specialist)',
      examples:'Mepolizumab · Benralizumab · Omalizumab · Dupilumab',
      step:'Specialist',
      source:'NICE NG245 · NICE TA278/TA671/TA565/TA751/TA880 (biologics)',
      sideEffects:'Injection site reaction, rare anaphylaxis',
      monitor:'Specialist asthma clinic',
      counsel:'"There are injection treatments that target specific types of asthma — but these are specialist-only. I\'ll refer you to the asthma clinic."',
      detail:{
        'Key teaching': 'Refer if: ≥2 OCS courses/year, maintenance OCS, FeNO + eosinophilia, frequent admissions despite optimal inhaler therapy.'
      },
      conditions: [
        {"kind":"favoured","label":"Difficult-to-treat / suspected severe asthma","text":"Severe / difficult-to-treat asthma — refer for biologic assessment"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG245 — Asthma: diagnosis, monitoring and chronic asthma management (2024)', url:'https://www.nice.org.uk/guidance/ng245' },
    { label:'NICE NG245 — asthma', url:'https://www.nice.org.uk/guidance/ng245' },
    { label:'BNF — Asthma treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/asthma/' },
    { label:'MHRA — Montelukast neuropsychiatric reactions', url:'https://www.gov.uk/drug-safety-update/montelukast-reminder-of-the-risk-of-neuropsychiatric-reactions' }
  ],
});
