/* ============================================
   Reasoning GP — Medical Calculator Data (supplement 3)
   Mental health · Cognition & frailty · Women's / obstetric · MSK / pain
   Appends to window.RGP_CALCULATORS.
   ============================================ */
(function(){
  if (!window.RGP_CALCULATORS) window.RGP_CALCULATORS = [];

  const L4 = [ {value:0,label:'0 — Not at all'},{value:1,label:'1 — Several days'},{value:2,label:'2 — More than half the days'},{value:3,label:'3 — Nearly every day'} ];

  window.RGP_CALCULATORS.push(

    // ============================================
    // MENTAL HEALTH — brief screens
    // ============================================
    {
      id: 'phq2',
      title: 'PHQ-2 (depression screen)',
      category: 'Mental health',
      description: 'Two-item depression case-finding (0–6).',
      usefulFor: 'Quick screen — score ≥ 3 → complete PHQ-9.',
      resultLabel: 'PHQ-2', resultMax: 6,
      inputs: [
        { group:'Over the last 2 weeks, how often bothered by:', id:'phq2a', kind:'likert', label:'Little interest or pleasure in doing things', options:L4 },
        { id:'phq2b', kind:'likert', label:'Feeling down, depressed or hopeless', options:L4 },
      ],
      compute(v){ return Number(v.phq2a||0) + Number(v.phq2b||0); },
      interpret(s){
        if (s >= 3) return { label:'Positive screen', severity:'med', action:'Complete PHQ-9 + assess risk.', detail:'≥ 3 has good sensitivity for depression.' };
        return { label:'Negative screen', severity:'low', action:'Depression unlikely; re-screen if clinical concern.', detail:'' };
      },
      refs:[{ label:'NICE NG222 Depression', url:'https://www.nice.org.uk/guidance/ng222' }],
    },

    {
      id: 'gad2',
      title: 'GAD-2 (anxiety screen)',
      category: 'Mental health',
      description: 'Two-item anxiety case-finding (0–6).',
      usefulFor: 'Quick screen — score ≥ 3 → complete GAD-7.',
      resultLabel: 'GAD-2', resultMax: 6,
      inputs: [
        { group:'Over the last 2 weeks, how often bothered by:', id:'gad2a', kind:'likert', label:'Feeling nervous, anxious or on edge', options:L4 },
        { id:'gad2b', kind:'likert', label:'Not being able to stop or control worrying', options:L4 },
      ],
      compute(v){ return Number(v.gad2a||0) + Number(v.gad2b||0); },
      interpret(s){
        if (s >= 3) return { label:'Positive screen', severity:'med', action:'Complete GAD-7 + assess.', detail:'≥ 3 suggests probable anxiety disorder.' };
        return { label:'Negative screen', severity:'low', action:'Anxiety disorder unlikely; re-screen if concern.', detail:'' };
      },
      refs:[{ label:'NICE CG113 Anxiety', url:'https://www.nice.org.uk/guidance/cg113' }],
    },

    {
      id: 'whooley',
      title: 'Whooley questions (depression)',
      category: 'Mental health',
      description: 'Two-question NICE depression case-finding.',
      usefulFor: 'Opportunistic screening (esp. chronic disease, antenatal/postnatal).',
      resultLabel: 'Positive answers', resultMax: 2,
      inputs: [
        { id:'wh1', kind:'check', label:'During the last month, often bothered by feeling down, depressed or hopeless?', points:1 },
        { id:'wh2', kind:'check', label:'During the last month, often bothered by little interest or pleasure in doing things?', points:1 },
      ],
      compute(v){ return Object.values(v).filter(Boolean).length; },
      interpret(s){
        if (s >= 1) return { label:'Positive — assess further', severity:'med', action:'Ask the "help" question + complete PHQ-9; assess risk.', detail:'Either "yes" warrants fuller assessment.' };
        return { label:'Negative', severity:'low', action:'Depression unlikely currently.', detail:'' };
      },
      refs:[{ label:'NICE NG222 Depression', url:'https://www.nice.org.uk/guidance/ng222' }],
    },

    {
      id: 'epds',
      title: 'Edinburgh Postnatal Depression Scale',
      category: 'Mental health',
      description: 'Perinatal depression screen (10 items, 0–30).',
      usefulFor: 'Antenatal & postnatal mood screening. ≥ 13 likely depression; item 10 = self-harm flag.',
      resultLabel: 'EPDS', resultMax: 30,
      inputs: [
        { group:'In the past 7 days:', id:'ep1', kind:'select', label:'1. Able to laugh and see the funny side of things',
          options:[ {value:0,label:'As much as I always could'},{value:1,label:'Not quite so much now'},{value:2,label:'Definitely not so much now'},{value:3,label:'Not at all'} ] },
        { id:'ep2', kind:'select', label:'2. Looked forward with enjoyment to things',
          options:[ {value:0,label:'As much as I ever did'},{value:1,label:'Rather less than I used to'},{value:2,label:'Definitely less than I used to'},{value:3,label:'Hardly at all'} ] },
        { id:'ep3', kind:'select', label:'3. Blamed myself unnecessarily when things went wrong',
          options:[ {value:3,label:'Yes, most of the time'},{value:2,label:'Yes, some of the time'},{value:1,label:'Not very often'},{value:0,label:'No, never'} ] },
        { id:'ep4', kind:'select', label:'4. Anxious or worried for no good reason',
          options:[ {value:0,label:'No, not at all'},{value:1,label:'Hardly ever'},{value:2,label:'Yes, sometimes'},{value:3,label:'Yes, very often'} ] },
        { id:'ep5', kind:'select', label:'5. Scared or panicky for no good reason',
          options:[ {value:3,label:'Yes, quite a lot'},{value:2,label:'Yes, sometimes'},{value:1,label:'No, not much'},{value:0,label:'No, not at all'} ] },
        { id:'ep6', kind:'select', label:'6. Things have been getting on top of me',
          options:[ {value:3,label:'Yes, most of the time not coping'},{value:2,label:'Yes, sometimes not coping as well'},{value:1,label:'No, mostly coped well'},{value:0,label:'No, coping as well as ever'} ] },
        { id:'ep7', kind:'select', label:'7. So unhappy I had difficulty sleeping',
          options:[ {value:3,label:'Yes, most of the time'},{value:2,label:'Yes, sometimes'},{value:1,label:'Not very often'},{value:0,label:'No, not at all'} ] },
        { id:'ep8', kind:'select', label:'8. Felt sad or miserable',
          options:[ {value:3,label:'Yes, most of the time'},{value:2,label:'Yes, quite often'},{value:1,label:'Not very often'},{value:0,label:'No, not at all'} ] },
        { id:'ep9', kind:'select', label:'9. So unhappy I have been crying',
          options:[ {value:3,label:'Yes, most of the time'},{value:2,label:'Yes, quite often'},{value:1,label:'Only occasionally'},{value:0,label:'No, never'} ] },
        { id:'ep10', kind:'select', label:'10. Thought of harming myself',
          options:[ {value:3,label:'Yes, quite often'},{value:2,label:'Sometimes'},{value:1,label:'Hardly ever'},{value:0,label:'Never'} ] },
      ],
      compute(v){ return ['ep1','ep2','ep3','ep4','ep5','ep6','ep7','ep8','ep9','ep10'].reduce(function(s,k){ return s + Number(v[k]||0); }, 0); },
      interpret(s, v){
        const sh = Number(v.ep10 || 0);
        const shNote = sh > 0 ? ' ⚠ Item 10 (self-harm) positive — assess risk TODAY regardless of total.' : '';
        if (s < 10)  return { label:'Low likelihood', severity:'low',  action:'Reassure; re-screen later in perinatal period.', detail:'' + shNote };
        if (s <= 12) return { label:'Possible depression', severity:'med', action:'Clinical assessment; repeat in 2 weeks; consider support.', detail:'Borderline — use clinical judgement.' + shNote };
        return        { label:'Likely depression', severity:'high', action:'Full assessment; perinatal mental-health pathway (NICE NG192).', detail:'≥ 13 suggests a depressive illness.' + shNote };
      },
      refs:[
        { label:'NICE NG192 Perinatal mental health', url:'https://www.nice.org.uk/guidance/ng192' },
        { label:'Cox EPDS 1987', url:'https://pubmed.ncbi.nlm.nih.gov/3651732/' },
      ],
    },

    {
      id: 'scoff',
      title: 'SCOFF (eating disorder screen)',
      category: 'Mental health',
      description: 'Five-question eating-disorder case-finding.',
      usefulFor: 'Suspected anorexia/bulimia. ≥ 2 "yes" → likely eating disorder, assess further.',
      resultLabel: 'SCOFF', resultMax: 5,
      inputs: [
        { id:'sc_s', kind:'check', label:'S — Make yourself Sick because uncomfortably full?', points:1 },
        { id:'sc_c', kind:'check', label:'C — Lost Control over how much you eat?', points:1 },
        { id:'sc_o', kind:'check', label:'O — Lost > One stone (6.35 kg) in 3 months?', points:1 },
        { id:'sc_f', kind:'check', label:'F — Believe yourself Fat when others say too thin?', points:1 },
        { id:'sc_f2',kind:'check', label:'F — Would you say Food dominates your life?', points:1 },
      ],
      compute(v){ return Object.values(v).filter(Boolean).length; },
      interpret(s){
        if (s >= 2) return { label:'Likely eating disorder', severity:'high', action:'Full assessment (incl. physical risk: BMI, bloods, ECG); refer eating-disorder service.', detail:'≥ 2 — sensitive for anorexia/bulimia. Beware SUSS / medical instability.' };
        return { label:'Lower likelihood', severity:'low', action:'Re-screen if concern persists; explore eating attitudes.', detail:'' };
      },
      refs:[
        { label:'NICE NG69 Eating disorders', url:'https://www.nice.org.uk/guidance/ng69' },
        { label:'Morgan SCOFF 1999', url:'https://pubmed.ncbi.nlm.nih.gov/10584890/' },
      ],
    },

    {
      id: 'alcohol-units',
      title: 'Alcohol units calculator',
      category: 'Mental health',
      description: 'UK units from volume and strength.',
      usefulFor: 'Brief intervention; quantify weekly intake against the 14-unit guideline.',
      resultLabel: 'Units', resultUnit:'units',
      formula: 'units = volume (mL) × ABV % ÷ 1000 × number of drinks',
      inputs: [
        { id:'al_ml',  kind:'number', label:'Volume per drink', unit:'mL', min:25, max:2000, step:5, note:'pint ≈ 568 · small wine 125 · spirit 25' },
        { id:'al_abv', kind:'number', label:'Strength (ABV)', unit:'%', min:0, max:96, step:0.1 },
        { id:'al_n',   kind:'number', label:'Number of drinks', unit:'', min:1, max:50, step:1 },
      ],
      compute(v){
        if (!v.al_ml || !v.al_abv) return null;
        const n = v.al_n || 1;
        const u = (v.al_ml * v.al_abv / 1000) * n;
        return Math.round(u * 10) / 10;
      },
      interpret(s){
        if (s <= 6)  return { label:'Within an occasion', severity:'low', action:'Note weekly total vs 14-unit guideline.', detail:'UK CMO: ≤ 14 units/week spread over ≥ 3 days, with drink-free days.' };
        if (s <= 14) return { label:'Approaching weekly guideline', severity:'med', action:'Brief advice; spread + drink-free days.', detail:'14 units/week is the low-risk ceiling.' };
        return        { label:'Above low-risk level', severity:'high', action:'Brief intervention; screen with AUDIT; consider services.', detail:'Regularly exceeding 14 units/week increases harm.' };
      },
      refs:[
        { label:'UK CMO alcohol guidelines', url:'https://www.gov.uk/government/publications/alcohol-consumption-advice-on-low-risk-drinking' },
        { label:'NICE CKS Alcohol', url:'https://cks.nice.org.uk/topics/alcohol-problem-drinking/' },
      ],
    },

    // ============================================
    // COGNITION & FRAILTY
    // ============================================
    {
      id: '4at',
      title: '4AT (delirium / cognition)',
      category: 'Cognition',
      description: 'Rapid delirium + cognitive screen (0–12).',
      usefulFor: 'Acute confusion, home visits, frail older adults. ≥ 4 = possible delirium.',
      resultLabel: '4AT', resultMax: 12,
      inputs: [
        { id:'a1', kind:'select', label:'1. Alertness',
          options:[ {value:0,label:'Normal / mild drowsy < 10 s'},{value:4,label:'Clearly abnormal (drowsy or agitated)'} ] },
        { id:'a2', kind:'select', label:'2. AMT4 (age, DOB, place, current year)',
          options:[ {value:0,label:'No mistakes'},{value:1,label:'1 mistake'},{value:2,label:'≥ 2 mistakes / untestable'} ] },
        { id:'a3', kind:'select', label:'3. Attention — months of year backwards',
          options:[ {value:0,label:'≥ 7 correct'},{value:1,label:'Starts but < 7 / refuses'},{value:2,label:'Untestable'} ] },
        { id:'a4', kind:'select', label:'4. Acute change or fluctuating course',
          options:[ {value:0,label:'No'},{value:4,label:'Yes'} ] },
      ],
      compute(v){ return ['a1','a2','a3','a4'].reduce(function(s,k){ return s + Number(v[k]||0); }, 0); },
      interpret(s){
        if (s >= 4) return { label:'Possible delirium ± cognitive impairment', severity:'high', action:'Assess for delirium — find & treat cause (infection, drugs, retention, pain, metabolic). TIME bundle.', detail:'Delirium is a medical emergency in the frail.' };
        if (s >= 1) return { label:'Possible cognitive impairment', severity:'med', action:'Further cognitive assessment when acute illness resolved.', detail:'1–3: cognitive impairment (delirium possible).' };
        return { label:'Delirium / impairment unlikely', severity:'low', action:'No evidence of delirium now.', detail:'' };
      },
      refs:[
        { label:'4AT (MacLullich)', url:'https://www.the4at.com/' },
        { label:'NICE CG103 Delirium', url:'https://www.nice.org.uk/guidance/cg103' },
      ],
    },

    {
      id: 'amt10',
      title: 'AMT-10 (Abbreviated Mental Test)',
      category: 'Cognition',
      description: 'Ten-item cognitive screen (each correct = 1).',
      usefulFor: 'Quick cognitive screen in older adults. ≤ 6 suggests impairment / delirium.',
      resultLabel: 'AMT', resultMax: 10,
      inputs: [
        { id:'am1',  kind:'check', label:'Age', points:1 },
        { id:'am2',  kind:'check', label:'Time (to nearest hour)', points:1 },
        { id:'am3',  kind:'check', label:'Recall address (42 West Street) at end', points:1 },
        { id:'am4',  kind:'check', label:'Current year', points:1 },
        { id:'am5',  kind:'check', label:'Name of this place', points:1 },
        { id:'am6',  kind:'check', label:'Recognise two persons (e.g. doctor, nurse)', points:1 },
        { id:'am7',  kind:'check', label:'Date of birth', points:1 },
        { id:'am8',  kind:'check', label:'Year of First World War start', points:1 },
        { id:'am9',  kind:'check', label:'Name of present monarch', points:1 },
        { id:'am10', kind:'check', label:'Count backwards 20 → 1', points:1 },
      ],
      compute(v){ return Object.values(v).filter(Boolean).length; },
      interpret(s){
        if (s >= 8) return { label:'Normal', severity:'low', action:'No gross cognitive impairment.', detail:'8–10 normal.' };
        if (s >= 7) return { label:'Borderline', severity:'med', action:'Repeat; consider 6-CIT / fuller assessment.', detail:'' };
        return { label:'Impairment likely', severity:'high', action:'Exclude delirium (4AT); investigate reversible causes; consider memory clinic.', detail:'≤ 6 suggests cognitive impairment or delirium.' };
      },
      refs:[
        { label:'Hodkinson AMT 1972', url:'https://pubmed.ncbi.nlm.nih.gov/4669880/' },
        { label:'NICE NG97 Dementia', url:'https://www.nice.org.uk/guidance/ng97' },
      ],
    },

    {
      id: 'cfs',
      title: 'Rockwood Clinical Frailty Scale',
      category: 'Frailty',
      description: 'Global frailty judgement (1–9).',
      usefulFor: 'Frailty identification, treatment-burden & escalation decisions, anticipatory care.',
      resultLabel: 'CFS', resultMax: 9,
      inputs: [
        { id:'cfs', kind:'select', label:'Clinical Frailty Scale level',
          options:[
            { value:1, label:'1 — Very fit' },
            { value:2, label:'2 — Fit / well' },
            { value:3, label:'3 — Managing well' },
            { value:4, label:'4 — Living with very mild frailty (vulnerable)' },
            { value:5, label:'5 — Mildly frail (needs help with IADLs)' },
            { value:6, label:'6 — Moderately frail (help with outside + some inside ADLs)' },
            { value:7, label:'7 — Severely frail (dependent for personal care)' },
            { value:8, label:'8 — Very severely frail (approaching end of life)' },
            { value:9, label:'9 — Terminally ill (life expectancy < 6 months)' },
          ] },
      ],
      compute(v){ return v.cfs ? Number(v.cfs) : null; },
      interpret(s){
        if (s <= 3) return { label:'Not frail', severity:'low', action:'Health promotion; no frailty intervention needed.', detail:'CFS 1–3.' };
        if (s === 4) return { label:'Vulnerable', severity:'med', action:'Optimise activity, nutrition, medication review; monitor.', detail:'CFS 4 — pre-frail.' };
        if (s <= 6) return { label:'Mild–moderate frailty', severity:'high', action:'Comprehensive geriatric assessment; medication review (STOPP/START); falls & bone health; care planning.', detail:'CFS 5–6.' };
        return { label:'Severe frailty', severity:'severe', action:'Anticipatory / advance care planning; ceiling-of-treatment discussion; deprescribe; community support.', detail:'CFS 7–9.' };
      },
      refs:[
        { label:'Rockwood CFS 2005', url:'https://pubmed.ncbi.nlm.nih.gov/16129869/' },
        { label:'BGS Frailty', url:'https://www.bgs.org.uk/' },
      ],
    },

    {
      id: 'prisma7',
      title: 'PRISMA-7 (frailty screen)',
      category: 'Frailty',
      description: 'Seven-item frailty case-finding.',
      usefulFor: 'Screening older adults for frailty. ≥ 3 "yes" suggests frailty — assess further.',
      resultLabel: 'PRISMA-7', resultMax: 7,
      inputs: [
        { id:'pr1', kind:'check', label:'Are you older than 85 years?', points:1 },
        { id:'pr2', kind:'check', label:'Male sex?', points:1 },
        { id:'pr3', kind:'check', label:'Health problems that limit your activities?', points:1 },
        { id:'pr4', kind:'check', label:'Do you need someone to help you regularly?', points:1 },
        { id:'pr5', kind:'check', label:'Health problems that make you stay at home?', points:1 },
        { id:'pr6', kind:'check', label:'If in need, can you count on someone close? (No = 1)', points:1 },
        { id:'pr7', kind:'check', label:'Do you regularly use a stick, walker or wheelchair?', points:1 },
      ],
      compute(v){ return Object.values(v).filter(Boolean).length; },
      interpret(s){
        if (s >= 3) return { label:'Frailty likely', severity:'high', action:'Comprehensive geriatric assessment; confirm with Clinical Frailty Scale / gait speed.', detail:'≥ 3 — sensitive for frailty.' };
        return { label:'Frailty less likely', severity:'low', action:'Re-screen periodically.', detail:'' };
      },
      refs:[
        { label:'NICE frailty / BGS', url:'https://www.bgs.org.uk/' },
        { label:'Raîche PRISMA-7 2008', url:'https://pubmed.ncbi.nlm.nih.gov/18674833/' },
      ],
    },

    // ============================================
    // WOMEN'S / OBSTETRIC
    // ============================================
    {
      id: 'puqe',
      title: 'PUQE (nausea/vomiting of pregnancy)',
      category: "Women's / obstetric",
      description: 'Severity of nausea & vomiting in pregnancy (3 items, 3–15).',
      usefulFor: 'Grading NVP / hyperemesis & response to antiemetics. ≥ 13 = severe.',
      resultLabel: 'PUQE', resultMax: 15,
      inputs: [
        { id:'pq_nausea', kind:'select', label:'Hours per day feeling nauseated',
          options:[ {value:1,label:'Not at all'},{value:2,label:'≤ 1 hour'},{value:3,label:'2–3 hours'},{value:4,label:'4–6 hours'},{value:5,label:'> 6 hours'} ] },
        { id:'pq_vomit', kind:'select', label:'Vomiting episodes per day',
          options:[ {value:1,label:'None'},{value:2,label:'1–2'},{value:3,label:'3–4'},{value:4,label:'5–6'},{value:5,label:'≥ 7'} ] },
        { id:'pq_retch', kind:'select', label:'Retching / dry heaving episodes per day',
          options:[ {value:1,label:'None'},{value:2,label:'1–2'},{value:3,label:'3–4'},{value:4,label:'5–6'},{value:5,label:'≥ 7'} ] },
      ],
      compute(v){
        if (!v.pq_nausea || !v.pq_vomit || !v.pq_retch) return null;
        return Number(v.pq_nausea) + Number(v.pq_vomit) + Number(v.pq_retch);
      },
      interpret(s){
        if (s <= 6)  return { label:'Mild', severity:'low', action:'Conservative + oral antiemetic if needed (cyclizine / promethazine / prochlorperazine).', detail:'Reassure; dietary measures; hydration.' };
        if (s <= 12) return { label:'Moderate', severity:'med', action:'Regular oral antiemetic; check ketones/weight; consider ambulatory care.', detail:'Escalate antiemetic (add metoclopramide/ondansetron with counselling).' };
        return        { label:'Severe', severity:'high', action:'Likely hyperemesis — assess dehydration/ketonuria; consider admission / IV fluids + thiamine.', detail:'RCOG: ≥ 13 severe; risk of Wernicke\u2019s if prolonged.' };
      },
      refs:[
        { label:'RCOG GTG 69 — NVP & hyperemesis', url:'https://www.rcog.org.uk/guidance/' },
        { label:'NICE CKS NVP', url:'https://cks.nice.org.uk/topics/nausea-vomiting-in-pregnancy/' },
      ],
    },

    // ============================================
    // MSK / PAIN
    // ============================================
    {
      id: 'ottawa-ankle',
      title: 'Ottawa ankle & foot rules',
      category: 'MSK / pain',
      description: 'Whether an ankle/foot X-ray is needed after injury.',
      usefulFor: 'Acute ankle/foot trauma — safely avoids unnecessary X-rays (near-100% sensitive for fracture).',
      resultLabel: 'X-ray indication', resultUnit:'',
      inputs: [
        { group:'Ankle X-ray — pain in the malleolar zone AND any of:',
          id:'oa_mall', kind:'check', label:'Pain in malleolar zone', points:0 },
        { id:'oa_lat',  kind:'check', label:'Bony tenderness — posterior edge / tip of lateral malleolus (distal 6 cm)', points:0 },
        { id:'oa_med',  kind:'check', label:'Bony tenderness — posterior edge / tip of medial malleolus', points:0 },
        { group:'Foot X-ray — pain in the midfoot zone AND any of:',
          id:'oa_mid',  kind:'check', label:'Pain in midfoot zone', points:0 },
        { id:'oa_5mt',  kind:'check', label:'Bony tenderness — base of 5th metatarsal', points:0 },
        { id:'oa_nav',  kind:'check', label:'Bony tenderness — navicular', points:0 },
        { group:'Either region:',
          id:'oa_weight', kind:'check', label:'Unable to weight-bear 4 steps (both immediately and now)', points:0 },
      ],
      compute(v){
        const ankle = v.oa_mall && (v.oa_lat || v.oa_med || v.oa_weight);
        const foot  = v.oa_mid  && (v.oa_5mt || v.oa_nav || v.oa_weight);
        return { display: (ankle||foot) ? 'X-ray indicated' : 'No X-ray needed', ankle: !!ankle, foot: !!foot };
      },
      interpret(r){
        if (r.ankle && r.foot) return { label:'Ankle + foot X-ray', severity:'high', action:'Request ankle AND foot series.', detail:'Criteria met in both zones.' };
        if (r.ankle) return { label:'Ankle X-ray indicated', severity:'high', action:'Request ankle series.', detail:'Malleolar pain + tenderness/weight-bearing failure.' };
        if (r.foot)  return { label:'Foot X-ray indicated', severity:'high', action:'Request foot series.', detail:'Midfoot pain + tenderness/weight-bearing failure.' };
        return { label:'No X-ray needed', severity:'low', action:'Soft-tissue injury — RICE, analgesia, safety-net.', detail:'Rules near-100% sensitive; reassess if not improving.' };
      },
      refs:[
        { label:'Stiell Ottawa rules 1992', url:'https://pubmed.ncbi.nlm.nih.gov/1554175/' },
        { label:'NICE CKS Ankle sprain', url:'https://cks.nice.org.uk/topics/sprains-strains/' },
      ],
    },

    {
      id: 'ome',
      title: 'Oral morphine equivalent (OME)',
      category: 'MSK / pain',
      description: 'Daily opioid dose converted to oral morphine equivalent.',
      usefulFor: 'Chronic non-cancer pain safety — the 120 mg/day OME ceiling (Faculty of Pain Medicine).',
      resultLabel: 'OME', resultUnit:'mg/day',
      formula: 'OME = total daily dose × conversion factor',
      inputs: [
        { id:'ome_drug', kind:'select', label:'Opioid (oral, total per day)',
          options:[
            { value:1,    label:'Morphine (oral)' },
            { value:0.1,  label:'Codeine' },
            { value:0.1,  label:'Dihydrocodeine' },
            { value:0.1,  label:'Tramadol' },
            { value:1.5,  label:'Oxycodone (oral)' },
            { value:0.4,  label:'Tapentadol' },
          ] },
        { id:'ome_dose', kind:'number', label:'Total dose per day', unit:'mg/day', min:1, max:2000, step:1 },
      ],
      compute(v){
        if (v.ome_drug == null || !v.ome_dose) return null;
        return Math.round(v.ome_drug * v.ome_dose);
      },
      interpret(s){
        if (s < 50)  return { label:'Lower dose', severity:'low', action:'Review benefit vs harm at each prescription; aim lowest effective dose.', detail:'' };
        if (s <= 120) return { label:'Caution zone', severity:'med', action:'Little evidence of benefit above this; review function; avoid further escalation.', detail:'50–120 mg/day OME — harm rises with dose.' };
        return        { label:'High-risk dose', severity:'high', action:'> 120 mg/day OME: seek specialist pain advice; do not escalate; plan a gradual taper.', detail:'Benefit unlikely to outweigh harm; overdose/dependence risk. Patches (fentanyl/buprenorphine) need specialist conversion tables.' };
      },
      refs:[
        { label:'Faculty of Pain Medicine — Opioids Aware', url:'https://fpm.ac.uk/opioids-aware' },
        { label:'NICE NG193 Chronic pain', url:'https://www.nice.org.uk/guidance/ng193' },
      ],
    }

  );
})();
