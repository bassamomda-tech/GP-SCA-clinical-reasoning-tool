/* ============================================
   Medication Chooser — COPD inhaler ladder
   NICE NG115 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('copd', {
  title: 'COPD — inhaled therapy ladder',
  subtitle: 'NICE NG115: start with a short-acting reliever, then choose dual therapy by whether there are asthmatic / steroid-responsive features.',
  guideline: 'NICE NG115 · SPC',


  safety: [
    {"tone":"amber","label":"≥2 exacerbations/yr OR ≥1 hospitalisation","text":"Frequent exacerbations — ensure pulmonary rehab, vaccinations, rescue pack + self-management plan"},
    {"tone":"amber","label":"Recurrent pneumonia / high pneumonia risk","text":"High pneumonia risk — weigh ICS benefit carefully; review eosinophils"},
    {"tone":"amber","label":"Current smoker","text":"Smoking cessation is the single most effective intervention — offer support + pharmacotherapy"}
  ],

  drugs: [
    // -------- SABA/SAMA --------
    {
      id:'saba',
      name:'Short-acting bronchodilator (SABA / SAMA)',
      examples:'Salbutamol · Ipratropium — PRN',
      step:'Step 1',
      source:'NICE NG115 §1.2.6',
      sideEffects:'Tremor, tachycardia (SABA); dry mouth (SAMA)',
      monitor:'Inhaler technique; reliever frequency as control marker',
      counsel:'"Use this when you feel breathless or before exertion. If you\'re needing it often, tell us — we can add a regular inhaler."',
      detail:{ 'Key teaching':'First-line for everyone as needed. Do not combine SAMA with a LAMA (both antimuscarinic).' },
      conditions: [
        {"kind":"favoured","label":"Newly diagnosed, no inhaler yet","text":"Newly diagnosed — short-acting reliever is the starting point"}
      ]
    },
    // -------- LABA+LAMA --------
    {
      id:'laba_lama',
      name:'LABA + LAMA',
      examples:'e.g. umeclidinium/vilanterol OD',
      step:'Step 2 (no asthmatic features)',
      source:'NICE NG115 §1.2.11',
      sideEffects:'Dry mouth, urinary retention (LAMA); tremor, palpitations (LABA)',
      monitor:'Technique; BPH/glaucoma symptoms',
      counsel:'"A regular dual inhaler that keeps the airways open all day — this is the next step up from your reliever."',
      detail:{ 'Key teaching':'First-choice dual therapy when there are NO asthmatic/steroid-responsive features. Avoids pneumonia risk of ICS.' },
      conditions: [
        {"kind":"caution","label":"History of asthma / atopy","text":"Asthmatic/steroid-responsive features present — LABA+ICS preferred at this step"},
        {"kind":"caution","label":"Raised blood eosinophils","text":"Asthmatic/steroid-responsive features present — LABA+ICS preferred at this step"},
        {"kind":"caution","label":"Diurnal / FEV₁ variability","text":"Asthmatic/steroid-responsive features present — LABA+ICS preferred at this step"},
        {"kind":"caution","label":"Narrow-angle glaucoma / urinary retention","text":"Antimuscarinic caution — narrow-angle glaucoma / retention; counsel"},
        {"kind":"favoured","label":"Breathless / exercise-limited on SABA/SAMA PRN","text":"Symptoms/exacerbations on PRN therapy — step up to dual"},
        {"kind":"favoured","label":"≥2 exacerbations/yr OR ≥1 hospitalisation","text":"Symptoms/exacerbations on PRN therapy — step up to dual"}
      ]
    },
    // -------- LABA+ICS --------
    {
      id:'laba_ics',
      name:'LABA + ICS',
      examples:'e.g. budesonide/formoterol BD',
      step:'Step 2 (asthmatic features)',
      source:'NICE NG115 §1.2.12',
      sideEffects:'Oral thrush, dysphonia, ↑ pneumonia risk',
      monitor:'Rinse mouth; review pneumonia episodes + eosinophils',
      counsel:'"This inhaler includes a steroid because your COPD has features that respond to it. Rinse your mouth after each use."',
      detail:{ 'Key teaching':'Use dual LABA+ICS when asthmatic/steroid-responsive features OR raised eosinophils. Never ICS alone in COPD.' },
      conditions: [
        {"kind":"caution","label":"Recurrent pneumonia / high pneumonia risk","text":"High pneumonia risk — ICS benefit must outweigh; review eosinophils"},
        {"kind":"favoured","label":"History of asthma / atopy","text":"Asthmatic / steroid-responsive features — ICS-containing therapy indicated"},
        {"kind":"favoured","label":"Raised blood eosinophils","text":"Asthmatic / steroid-responsive features — ICS-containing therapy indicated"},
        {"kind":"favoured","label":"Diurnal / FEV₁ variability","text":"Asthmatic / steroid-responsive features — ICS-containing therapy indicated"}
      ]
    },
    // -------- TRIPLE --------
    {
      id:'triple',
      name:'Triple therapy (LABA + LAMA + ICS)',
      examples:'Single-inhaler triple, OD/BD',
      step:'Step 3',
      source:'NICE NG115 §1.2.14',
      sideEffects:'Combined antimuscarinic + ICS effects; pneumonia risk',
      monitor:'Review benefit at 3 months; technique',
      counsel:'"We\'re combining all three medicines in one inhaler to control your symptoms and reduce flare-ups."',
      detail:{ 'Key teaching':'Step up to triple if persistent symptoms/exacerbations on LABA+LAMA, or on LABA+ICS with continued exacerbations + day-to-day symptoms.' },
      conditions: [
        {"kind":"caution","label":"Recurrent pneumonia / high pneumonia risk","text":"Pneumonia risk — ICS component caution; review at 3 months"},
        {"kind":"favoured","label":"Persistent symptoms on LABA+LAMA","text":"Persistent symptoms/exacerbations on dual therapy — escalate to triple"},
        {"kind":"favoured","label":"Frequent exacerbations despite optimal inhalers","text":"Persistent symptoms/exacerbations on dual therapy — escalate to triple"}
      ]
    },
    // -------- ICS alone --------
    {
      id:'ics_alone',
      name:'ICS monotherapy',
      examples:'Inhaled steroid without a long-acting bronchodilator',
      step:'Avoid',
      source:'NICE NG115',
      sideEffects:'Pneumonia risk without bronchodilator benefit',
      monitor:'—',
      counsel:'"A steroid inhaler on its own isn\'t the right treatment for COPD — it needs to be paired with a long-acting opener."',
      detail:{ 'Key teaching':'ICS monotherapy is not recommended in COPD.' },
      
    },
    // -------- Mucolytic --------
    {
      id:'mucolytic',
      name:'Mucolytic — carbocisteine',
      examples:'Carbocisteine 750 mg TDS',
      step:'Add-on',
      source:'NICE NG115 §1.2.20',
      sideEffects:'GI upset; rare GI bleeding',
      monitor:'Continue only if symptomatic benefit',
      counsel:'"A tablet that thins the phlegm to make it easier to clear — we\'ll only keep it if it actually helps."',
      detail:{ 'Key teaching':'Consider in chronic productive cough; stop if no benefit.' },
      conditions: [
        {"kind":"favoured","label":"Chronic productive cough","text":"Chronic productive cough — trial of mucolytic"}
      ]
    },
    // -------- Prophylactic azithromycin --------
    {
      id:'azithro',
      name:'Prophylactic azithromycin (specialist)',
      examples:'Azithromycin 250 mg 3×/week',
      step:'Specialist',
      source:'NICE NG115 §1.2.21',
      sideEffects:'QTc prolongation, hearing loss, GI upset, resistance',
      monitor:'ECG (QTc) + LFTs baseline; specialist initiation',
      counsel:'"A small dose of antibiotic a few times a week can cut down flare-ups in some people — but it\'s started by the specialist team after some checks."',
      detail:{ 'Key teaching':'For non-smokers optimised on inhalers/rehab with frequent exacerbations. Needs CT thorax + sputum culture + ECG first.' },
      conditions: [
        {"kind":"avoid","label":"Current smoker","text":"Current smoker — less effective; address smoking first"},
        {"kind":"favoured","label":"Frequent exacerbations despite optimal inhalers","text":"Frequent exacerbations despite optimal therapy — consider (specialist)"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG115 — COPD in over 16s: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng115' },
    { label:'NICE NG115 — COPD', url:'https://www.nice.org.uk/guidance/ng115' },
    { label:'BNF — COPD treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/chronic-obstructive-pulmonary-disease/' }
  ],
});
