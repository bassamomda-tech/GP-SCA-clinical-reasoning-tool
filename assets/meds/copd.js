/* ============================================
   Medication Chooser — COPD inhaler ladder
   NICE NG115 · CKS COPD · BNF
   ============================================ */
MedChooser.register('copd', {
  title: 'COPD — inhaled therapy ladder',
  subtitle: 'NICE NG115: start with a short-acting reliever, then choose dual therapy by whether there are asthmatic / steroid-responsive features. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG115 · CKS COPD · BNF',

  factors: [
    // Step / control
    { group:'Current step', id:'newdx', label:'Newly diagnosed, no inhaler yet' },
    { group:'Current step', id:'breathless_saba', label:'Breathless / exercise-limited on SABA/SAMA PRN' },
    { group:'Current step', id:'exac2', label:'≥2 exacerbations/yr OR ≥1 hospitalisation', note:'Step up to dual therapy' },
    { group:'Current step', id:'persistent', label:'Persistent symptoms on LABA+LAMA' },

    // Asthmatic / steroid-responsive features (decide ICS)
    { group:'Asthmatic / steroid-responsive features', id:'atopy', label:'History of asthma / atopy' },
    { group:'Asthmatic / steroid-responsive features', id:'eos', label:'Raised blood eosinophils' },
    { group:'Asthmatic / steroid-responsive features', id:'variability', label:'Diurnal / FEV₁ variability' },

    // ICS safety
    { group:'ICS safety', id:'pneumonia', label:'Recurrent pneumonia / high pneumonia risk', note:'ICS raises pneumonia risk' },
    { group:'ICS safety', id:'mycobact', label:'History of mycobacterial / non-TB infection' },

    // Comorbidities
    { group:'Comorbidities', id:'cvd', label:'Cardiovascular disease / arrhythmia' },
    { group:'Comorbidities', id:'glaucoma', label:'Narrow-angle glaucoma / urinary retention', note:'Antimuscarinic caution' },
    { group:'Comorbidities', id:'chronic_sputum', label:'Chronic productive cough', note:'Mucolytic may help' },
    { group:'Comorbidities', id:'frequent_exac_optimal', label:'Frequent exacerbations despite optimal inhalers' },

    // Practical
    { group:'Practical / preference', id:'dexterity', label:'Poor dexterity / coordination', note:'DPI or spacer' },
    { group:'Practical / preference', id:'low_flow', label:'Low inspiratory flow', note:'Avoid DPI alone' },
    { group:'Practical / preference', id:'smoker', label:'Current smoker', note:'Cessation is the priority intervention' },
    { group:'Practical / preference', id:'eco', label:'Wants low-carbon inhaler' },
  ],

  flags: (f) => {
    const out = [];
    if (f.smoker) out.push({ tone:'amber', text:'Smoking cessation is the single most effective intervention — offer support + pharmacotherapy' });
    if (f.exac2 || f.frequent_exac_optimal) out.push({ tone:'amber', text:'Frequent exacerbations — ensure pulmonary rehab, vaccinations, rescue pack + self-management plan' });
    if (f.pneumonia) out.push({ tone:'amber', text:'High pneumonia risk — weigh ICS benefit carefully; review eosinophils' });
    return out;
  },

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
      evaluate(f){
        const r = [];
        if (f.newdx) r.push({kind:'good', text:'Newly diagnosed — short-acting reliever is the starting point'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'PRN reliever for all COPD'}] };
      }
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
      evaluate(f){
        if (f.glaucoma) return { tier:'acceptable', reasons:[{kind:'bad', text:'Antimuscarinic caution — narrow-angle glaucoma / retention; counsel'}] };
        const asthmatic = f.atopy || f.eos || f.variability;
        const r = [];
        if (f.breathless_saba || f.exac2) r.push({kind:'good', text:'Symptoms/exacerbations on PRN therapy — step up to dual'});
        if (asthmatic) r.push({kind:'bad', text:'Asthmatic/steroid-responsive features present — LABA+ICS preferred at this step'});
        const preferred = (f.breathless_saba || f.exac2) && !asthmatic;
        if (preferred) return { tier:'preferred', reasons: r };
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Dual therapy when no asthmatic features'}] };
      }
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
      evaluate(f){
        const asthmatic = f.atopy || f.eos || f.variability;
        if (f.pneumonia) return { tier:'acceptable', reasons:[{kind:'bad', text:'High pneumonia risk — ICS benefit must outweigh; review eosinophils'}] };
        const r = [];
        if (asthmatic) { r.push({kind:'good', text:'Asthmatic / steroid-responsive features — ICS-containing therapy indicated'}); return { tier:'preferred', reasons:r }; }
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Choose only if asthmatic/steroid-responsive features present'}] };
      }
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
      evaluate(f){
        const r = [];
        if (f.persistent || f.frequent_exac_optimal) { r.push({kind:'good', text:'Persistent symptoms/exacerbations on dual therapy — escalate to triple'}); return { tier:'preferred', reasons:r }; }
        if (f.pneumonia) r.push({kind:'bad', text:'Pneumonia risk — ICS component caution; review at 3 months'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Reserve for inadequate control on dual therapy'}] };
      }
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
      evaluate(f){ return { tier:'avoid', reasons:[{kind:'bad', text:'Not recommended in COPD — always pair with LABA(±LAMA)'}] }; }
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
      evaluate(f){
        const r = [];
        if (f.chronic_sputum) { r.push({kind:'good', text:'Chronic productive cough — trial of mucolytic'}); return { tier:'acceptable', reasons:r }; }
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Only for chronic sputum; review benefit'}] };
      }
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
      evaluate(f){
        if (f.smoker) return { tier:'avoid', reasons:[{kind:'bad', text:'Current smoker — less effective; address smoking first'}] };
        const r = [];
        if (f.frequent_exac_optimal) { r.push({kind:'good', text:'Frequent exacerbations despite optimal therapy — consider (specialist)'}); return { tier:'acceptable', reasons:r }; }
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Specialist-initiated for refractory exacerbators'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG115 — COPD in over 16s: diagnosis and management', url:'https://www.nice.org.uk/guidance/ng115' },
    { label:'NICE CKS — Chronic obstructive pulmonary disease', url:'https://cks.nice.org.uk/topics/chronic-obstructive-pulmonary-disease/' },
    { label:'BNF — COPD treatment summary', url:'https://bnf.nice.org.uk/treatment-summaries/chronic-obstructive-pulmonary-disease/' },
  ],
});
