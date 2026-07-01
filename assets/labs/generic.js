/* ============================================
   Lab Results Actioning — Generic adult primary care
   NICE CKS · NICE NG12 · BSH · Renal Association
   BMJ Best Practice · Medscape · UK national societies
   ============================================ */
RGPLabs.register('generic', {
  title: 'Lab results — generic adult primary care',
  subtitle: 'Enter values (or paste from EMIS / SystmOne). Tool surfaces per-result actions: emergency, 2WW, urgent, treat, drug review, repeat, refer, recall, annotate — each anchored to UK guidance.',
  guideline: 'NICE · BSH · Renal Association · BMJ Best Practice',

  context: [
    { id:'age',     kind:'number', label:'Age', unit:'yrs', default: null },
    { id:'female',  kind:'check',  label:'Female' },
    { id:'preg',    kind:'check',  label:'Pregnant' },
    { id:'symptoms',kind:'check',  label:'Symptomatic at presentation' },
    { id:'on_acei', kind:'check',  label:'On ACEi / ARB / spiro' },
    { id:'on_anticoag', kind:'check', label:'On anticoagulant' },
    { id:'on_warfarin', kind:'check', label:'On warfarin specifically' },
    { id:'on_statin', kind:'check', label:'On statin' },
    { id:'on_metformin', kind:'check', label:'On metformin' },
    { id:'on_sglt2', kind:'check', label:'On SGLT2 inhibitor' },
    { id:'has_dm', kind:'check', label:'Known diabetes' },
    { id:'has_ckd', kind:'check', label:'Known CKD' },
    { id:'immuno', kind:'check', label:'Immunosuppressed' },
    { id:'alcohol_excess', kind:'check', label:'Alcohol excess' },
  ],

  panels: [
    // ============ FBC ============
    {
      id:'fbc', label:'FBC — Full Blood Count',
      tests: [
        // -- Haemoglobin --
        {
          id:'hb', label:'Haemoglobin', unit:'g/L', step:1,
          refByCtx: ctx => ctx.female ? [120,160] : [130,170],
          pathways:[{slug:'anaemia',label:'Anaemia'},{slug:'normocytic-anaemia',label:'Normocytic'},{slug:'polycythaemia',label:'Polycythaemia'},{slug:'pancytopenia',label:'Pancytopenia'}],
          rules: [
            {
              action:'emergency', label:'Pancytopenia — all cell lines low; same-day haematology',
              rule:'Hb low + WCC <4 + platelets <150 (marrow failure / acute leukaemia / aplasia)',
              timeframe:'Same day',
              source:'BSH · NICE NG12 §1.10',
              patientPhrase:'"All three of your blood cell lines are low — we need a blood specialist to see you quickly to find out why."',
              noteTemplate:'Pancytopenia.\nHb [value], WCC [value], Plt [value]. Blood film + reticulocytes urgently.\nSame-day haematology discussion. B12/folate, LFTs, LDH, virology. ?Marrow failure / leukaemia / hypersplenism.',
              when:(v, ctx, all) => v < (ctx.female ? 120 : 130) && all.wcc != null && all.wcc < 4 && all.plt != null && all.plt < 150
            },
            {
              action:'emergency', label:'Severe anaemia — same-day admission for transfusion',
              rule:'Hb <70 g/L (any context) OR Hb <80 g/L with chest pain / SOB / syncope',
              timeframe:'Same day',
              source:'BSH 2017 / BMJ Best Practice anaemia',
              sourceUrl:'https://b-s-h.org.uk/guidelines/',
              patientPhrase:'"Your blood count is very low — that explains why you\'ve been so tired. We need to send you in today to get a transfusion and find out the cause."',
              noteTemplate:'Severe anaemia.\nHb [value] g/L. Symptoms [chest pain / SOB / syncope].\nSame-day admission; group & save; reticulocytes, film, B12/folate, ferritin, LFTs, U&E sent.\nIron / B12 / folate / GI / gynae source workup in hospital.',
              when:(v, ctx) => v < 70 || (v < 80 && ctx.symptoms)
            },
            {
              action:'urgent', label:'Anaemia on anticoagulant — same-day GI / source workup',
              rule:'Hb <120 ♀ / <130 ♂ in patient on DOAC / warfarin / treatment-dose LMWH',
              timeframe:'Same day',
              source:'BSH · BSG · BMJ Best Practice',
              patientPhrase:'"Your blood count is low and you\'re on a blood thinner — that combination means we need to find the source today, often by checking the gut."',
              noteTemplate:'Anaemia on anticoagulant.\nHb [value], on [DOAC / warfarin / LMWH]. Symptoms [Y/N].\nSame-day senior review. FIT, iron studies, INR if warfarin, U&E + LFT, G&S.\nConsider holding/reversing anticoag pending bleeding source assessment. Urgent endoscopy referral if symptomatic / drop confirmed.',
              when:(v, ctx) => v < (ctx.female ? 120 : 130) && ctx.on_anticoag
            },
            {
              action:'urgent', label:'Symptomatic moderate anaemia — same-day review',
              rule:'Hb 70–99 with cardiopulmonary symptoms (chest pain / SOB / palpitations / syncope)',
              timeframe:'Same day',
              source:'BSH · CKS Anaemia · BMJ Best Practice',
              patientPhrase:'"Your blood count is low enough that it\'s already affecting you. We need to look at this today — find the cause and decide whether you need hospital care."',
              noteTemplate:'Symptomatic moderate anaemia.\nHb [value]. Symptomatic.\nSame-day review. Iron studies, B12/folate, reticulocytes, film. Source workup (GI, gynae, renal, anticoag if applicable). Transfusion threshold if deteriorating.',
              when:(v, ctx) => v >= 70 && v < 100 && ctx.symptoms
            },
            {
              action:'cancer', label:'Unexplained anaemia ≥60 — colorectal 2WW (NG12 §1.3.3)',
              rule:'Hb <120 ♀ / <130 ♂ + age ≥60 — refer 2WW (regardless of ferritin if no clear alternative cause)',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.3.3 colorectal',
              sourceUrl:'https://www.nice.org.uk/guidance/ng12',
              patientPhrase:'"At your age, a low blood count needs a faster specialist look at the bowel — this is standard and doesn\'t mean anything is definitely wrong."',
              noteTemplate:'2WW lower GI — anaemia ≥60 (NG12 §1.3.3).\nHb [value], MCV [value], ferritin [value if known]. DRE [findings]. FIT requested.\nIron studies if not yet done. Anticoagulant: [Y/N — consider as cause but still refer].',
              handoff:{ tool:'triage', topic:'tiredness', label:'Triage — IDA pathway' },
              when:(v, ctx) => ctx.age != null && ctx.age >= 60 && v < (ctx.female ? 120 : 130)
            },
            {
              action:'urgent', label:'Anaemia age 50–59 — order ferritin + FIT, refer if IDA',
              rule:'Hb <120 ♀ / <130 ♂ + age 50–59 — ferritin pending or absent',
              timeframe:'Within days',
              source:'NICE NG12 §1.3 · BSG FIT',
              patientPhrase:'"Your blood count is low. The next step is iron studies and a bowel test — depending on the result we may need a specialist referral."',
              noteTemplate:'Anaemia age 50–59. Hb [value].\nOrder ferritin + iron studies, FIT, B12/folate. If IDA confirmed → lower GI 2WW (NG12 §1.3.5). DRE done.',
              handoff:{ tool:'triage', topic:'tiredness', label:'Triage — IDA pathway' },
              when:(v, ctx, all) => ctx.age != null && ctx.age >= 50 && ctx.age < 60 && v < (ctx.female ? 120 : 130) && (all.ferritin == null || all.ferritin >= 30)
            },
            {
              action:'cancer', label:'Iron-deficient anaemia ≥50 — colorectal 2WW',
              rule:'Hb <120 ♀ / <130 ♂ + ferritin <30 + age ≥50',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.3 colorectal',
              sourceUrl:'https://www.nice.org.uk/guidance/ng12',
              patientPhrase:'"Your blood test shows iron-deficient anaemia. In your age group, the safest thing is to rule out a bowel cause quickly — that\'s why I\'m sending an urgent referral."',
              noteTemplate:'2WW lower GI — iron deficiency anaemia (NG12 §1.3).\nHb [value], MCV [low], ferritin [low].\nDRE done. FIT sent (refer regardless of FIT if age ≥60). PR exam normal.',
              handoff:{ tool:'triage', topic:'tiredness', label:'Triage Tool — IDA pathway' },
              when:(v, ctx, all) => ctx.age != null && ctx.age >= 50 && v < (ctx.female ? 120 : 130) && all.ferritin != null && all.ferritin < 30
            },
            {
              action:'urgent', label:'Moderate anaemia — urgent workup',
              rule:'Hb 70–99 — find cause urgently',
              timeframe:'Same week',
              source:'CKS Anaemia / BSH',
              patientPhrase:'"Your blood count is low. We need to find out why this week — this is what\'s been making you tired."',
              noteTemplate:'Moderate anaemia.\nHb [value] g/L, MCV [value]. Iron studies, B12, folate, reticulocytes, blood film sent. Dietary / menstrual / GI review.\nReview in 1 week with results.',
              when:(v, ctx) => v >= 70 && v < 100
            },
            {
              action:'treat', label:'Mild iron-deficient anaemia — treat + recheck',
              rule:'Hb 100–119 ♀ / 100–129 ♂ + ferritin <30',
              timeframe:'4–8 weeks recheck',
              source:'CKS Anaemia · BSH iron deficiency',
              patientPhrase:'"You\'ve got mild iron-deficient anaemia. We\'ll start iron tablets and check your blood again in 6 weeks — that should bring your energy back."',
              noteTemplate:'Iron-deficient anaemia.\nHb [value], ferritin [low]. Start ferrous fumarate 210 mg OD (or alternate-day) — recheck Hb + ferritin at 4–8 wk.\nDietary advice; gynae / GI review as appropriate.',
              when:(v, ctx, all) => v < (ctx.female ? 120 : 130) && v >= 100 && all.ferritin != null && all.ferritin < 30 && !(ctx.age != null && ctx.age >= 50)
            },
            {
              action:'repeat', label:'Borderline low Hb — repeat with iron studies',
              rule:'Hb just below reference, no MCV/ferritin available',
              timeframe:'2 weeks',
              source:'BSH',
              when:(v, ctx, all) => {
                const lo = ctx.female ? 120 : 130;
                return v >= lo - 10 && v < lo && (all.ferritin == null && all.mcv == null);
              }
            },
            {
              action:'cancer', label:'Polycythaemia — Hb >185 ♂ / >165 ♀ — refer haematology',
              rule:'Persistent ↑Hb — consider PV / secondary causes',
              timeframe:'2 weeks (NG12 §1.10)',
              source:'NICE NG12 §1.10 haematological · BSH',
              patientPhrase:'"Your blood count is high — there are a few causes and we want a haematology team to look quickly."',
              noteTemplate:'? Polycythaemia.\nHb [value]. Smoker [Y/N], OSA [Y/N], altitude/dehydration. Confirm with repeat after hydration.\nIf confirmed → haematology 2WW; JAK2 testing in secondary care.',
              when:(v, ctx) => v > (ctx.female ? 165 : 185)
            },
          ]
        },
        // -- MCV --
        {
          id:'mcv', label:'MCV', unit:'fL', step:0.1, ref:[80,100],
          pathways:[{slug:'macrocytosis',label:'Macrocytosis'},{slug:'microcytosis',label:'Microcytosis'}],
          rules: [
            {
              action:'treat', label:'Microcytic — iron deficiency likely; check ferritin if not already',
              rule:'MCV <80 + low Hb', timeframe:'Routine',
              source:'BSH iron deficiency',
              when:(v, ctx, all) => v < 80 && all.hb != null && all.hb < (ctx.female ? 120 : 130)
            },
            {
              action:'treat', label:'Macrocytic — consider B12/folate, alcohol, hypothyroid, drugs',
              rule:'MCV >100 — investigate cause',
              timeframe:'Routine',
              source:'CKS Anaemia · BSH B12/folate',
              patientPhrase:'"Your red blood cells are larger than normal — usually means a vitamin or thyroid issue. We\'ll check those and treat."',
              noteTemplate:'Macrocytosis.\nMCV [value]. Check B12, folate, TFTs, LFTs (GGT), reticulocytes if not done. Drug review (methotrexate, hydroxyurea, antiepileptics).',
              when:(v) => v > 105
            },
          ]
        },
        // -- WCC --
        {
          id:'wcc', label:'WCC', unit:'×10⁹/L', step:0.1, ref:[4,11],
          pathways:[{slug:'leucocytosis',label:'Leucocytosis'},{slug:'leucopenia',label:'Leucopenia'}],
          rules: [
            {
              action:'emergency', label:'Leucocytosis >50 — consider leukaemia',
              rule:'WCC >50',
              timeframe:'Same-day haematology phone',
              source:'NICE NG12 §1.10 · BSH',
              when:(v) => v > 50
            },
            {
              action:'cancer', label:'Persistent leucocytosis / unexplained ↑ — haematology 2WW',
              rule:'WCC >20 without clear infective cause',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.10',
              when:(v, ctx) => v > 20 && !ctx.symptoms
            },
            {
              action:'urgent', label:'Leucopenia — repeat + investigate',
              rule:'WCC <3.0',
              timeframe:'Same week',
              source:'BSH',
              when:(v) => v < 3.0
            },
          ]
        },
        // -- Neutrophils --
        {
          id:'neut', label:'Neutrophils', unit:'×10⁹/L', step:0.1, ref:[2,7.5],
          rules: [
            {
              action:'emergency', label:'Severe neutropenia / neutropenic sepsis risk',
              rule:'Neutrophils <1.0 — esp with fever or immunosuppression',
              timeframe:'Call 999 if febrile',
              source:'NICE NG143 neutropenic sepsis',
              sourceUrl:'https://www.nice.org.uk/guidance/ng143',
              patientPhrase:'"Your immune cells are very low — if you get any fever you need to call 111 / come in immediately. We\'re also going to repeat this blood test today."',
              noteTemplate:'Severe neutropenia. Neut [value].\nIf febrile / immunosuppressed → admit per NICE NG143 neutropenic sepsis (pip-tazo within 1h).\nIf stable → urgent repeat + haematology phone advice.',
              handoff:{ tool:'triage', topic:'tiredness', label:'Triage — neutropenic sepsis' },
              when:(v) => v < 1.0
            },
            {
              action:'urgent', label:'Mild neutropenia — drug + viral review, repeat',
              rule:'Neutrophils 1.0–1.5',
              timeframe:'1–2 weeks',
              source:'BSH',
              when:(v) => v >= 1.0 && v < 1.5
            },
          ]
        },
        // -- Lymphocytes --
        {
          id:'lymph', label:'Lymphocytes', unit:'×10⁹/L', step:0.1, ref:[1,4],
          pathways:[{slug:'lymphocytosis',label:'Lymphocytosis'},{slug:'lymphopenia',label:'Lymphopenia'}],
          rules: [
            {
              action:'cancer', label:'Lymphocytosis >20 — exclude CLL (haematology 2WW)',
              rule:'Lymphocytes >20 (or >5 persisting) — film + immunophenotyping',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.10 · BSH CLL',
              patientPhrase:'"One type of your white cells is high — usually reactive, but we should check it with a blood-specialist test."',
              noteTemplate:'Lymphocytosis. Lymph [value].\nBlood film + flow cytometry/immunophenotyping. If persistent / >5 → CLL workup. Reactive causes: viral (EBV/CMV), pertussis.',
              when:(v) => v > 20
            },
            {
              action:'repeat', label:'Mild lymphocytosis — repeat + film',
              rule:'Lymphocytes 5–20 — recheck in 4–6 weeks with film',
              timeframe:'4–6 weeks',
              source:'BSH', when:(v) => v > 5 && v <= 20
            },
            {
              action:'urgent', label:'Lymphopenia <0.5 — investigate (HIV, immunosuppression)',
              rule:'Lymphocytes <0.5 — persistent / unexplained',
              timeframe:'Within weeks',
              source:'BSH · BMJ Best Practice',
              patientPhrase:'"Your infection-fighting cells are low — we should run a few tests to find out why."',
              when:(v) => v < 0.5
            },
          ]
        },
        // -- Eosinophils --
        {
          id:'eos', label:'Eosinophils', unit:'×10⁹/L', step:0.1, ref:[0,0.5],
          pathways:[{slug:'eosinophilia',label:'Eosinophilia'}],
          rules: [
            {
              action:'urgent', label:'Marked eosinophilia >1.5 — end-organ + cause workup',
              rule:'Eosinophils >1.5 (hypereosinophilia ≥1.5; ≥5 → urgent haematology)',
              timeframe:'Within weeks (same week if >5 / unwell)',
              source:'BSH eosinophilia · BMJ Best Practice',
              patientPhrase:'"A type of your white cells is high — there are several causes from allergy to parasites, so we\u2019ll run some tests."',
              noteTemplate:'Eosinophilia. Eos [value].\nReview drugs (DRESS), travel/parasites (strongyloides serology before steroids), atopy, vasculitis (EGPA: asthma+ANCA), malignancy. Film, IgE, ANCA, CXR. Haematology if >1.5 persistent or ≥5.',
              when:(v) => v > 1.5
            },
            {
              action:'repeat', label:'Mild eosinophilia — recheck + atopy/parasite review',
              rule:'Eosinophils 0.5–1.5',
              timeframe:'4–6 weeks',
              source:'BSH', when:(v) => v > 0.5 && v <= 1.5
            },
          ]
        },
        // -- Platelets --
        {
          id:'plt', label:'Platelets', unit:'×10⁹/L', step:1, ref:[150,400],
          pathways:[{slug:'thrombocytopenia',label:'Thrombocytopenia'},{slug:'thrombocytosis',label:'Thrombocytosis'},{slug:'bruising',label:'Bruising'}],
          rules: [
            {
              action:'emergency', label:'Severe thrombocytopenia — bleeding risk',
              rule:'Platelets <30 — risk of spontaneous bleeding',
              timeframe:'Same-day haematology',
              source:'BSH thrombocytopenia',
              sourceUrl:'https://b-s-h.org.uk/guidelines/',
              patientPhrase:'"Your platelets are dangerously low — we need a specialist to see you urgently. Please avoid any contact sports or NSAIDs."',
              noteTemplate:'Severe thrombocytopenia.\nPlt [value]. Bruising / bleeding [Y/N].\nUrgent haematology referral / phone. Stop NSAIDs and antiplatelet/anticoagulant pending review.',
              when:(v) => v < 30
            },
            {
              action:'urgent', label:'Moderate thrombocytopenia — workup ITP / drug / liver / haem',
              rule:'Platelets 30–100',
              timeframe:'1 week',
              source:'BSH thrombocytopenia',
              when:(v) => v >= 30 && v < 100
            },
            {
              action:'cancer', label:'Thrombocytosis + cancer-paired symptom — 2WW',
              rule:'Plt ≥400 + symptoms — lung / oesophageal / gastric / colorectal / endometrial / ovarian',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.5.21 thrombocytosis',
              sourceUrl:'https://www.nice.org.uk/guidance/ng12',
              patientPhrase:'"This blood marker is raised — combined with your symptoms it\'s a signal we shouldn\'t ignore. I\'d like to send a faster referral to be safe."',
              noteTemplate:'2WW — raised platelets (NG12 §1.5.21).\nPlt [value] + [weight loss / haemoptysis / dysphagia / change bowel / PMB / abdominal mass / cough]. Triggers site-specific 2WW.',
              handoff:{ tool:'triage', topic:'tiredness', label:'Triage — thrombocytosis cancer rule' },
              when:(v, ctx) => v >= 400 && ctx.symptoms
            },
            {
              action:'repeat', label:'Mild thrombocytosis — repeat in 4 weeks',
              rule:'Plt 400–500 with no symptoms',
              timeframe:'4 weeks',
              source:'BSH / BMJ Best Practice',
              when:(v, ctx) => v >= 400 && v < 500 && !ctx.symptoms
            },
            {
              action:'annotate', label:'Mild low — known stable or post-viral pattern',
              rule:'Plt 100–149, otherwise well — repeat in 2–4 weeks',
              timeframe:'2–4 weeks',
              source:'BSH',
              when:(v) => v >= 100 && v < 150
            },
          ]
        },
      ]
    },

    // ============ U&E + ACR ============
    {
      id:'uee', label:'U&E · eGFR · ACR',
      tests:[
        {
          id:'k', label:'Potassium', unit:'mmol/L', step:0.1, ref:[3.5, 5.0],
          topics:['hypertension','tatt','type-2-diabetes'],
          pathways:[{slug:'hyperkalaemia',label:'Hyperkalaemia'},{slug:'hypokalaemia',label:'Hypokalaemia'}],
          rules:[
            {
              action:'emergency', label:'Severe hyperkalaemia — arrhythmia risk',
              rule:'K⁺ >6.5',
              timeframe:'Call 999 · ECG now',
              source:'Renal Association hyperkalaemia 2023',
              sourceUrl:'https://ukkidney.org/health-professionals/guidelines',
              patientPhrase:'"Your potassium is dangerously high — that affects the heart\'s rhythm. I need to send you to hospital straight away for an ECG and treatment."',
              noteTemplate:'Severe hyperkalaemia.\nK⁺ [value] mmol/L. ECG: [findings].\nAdmit for IV calcium gluconate + insulin/dextrose ± dialysis.\nStop ACEi/ARB/spironolactone/K-sparing/NSAID/trimethoprim.',
              handoff:{ tool:'triage', topic:'tiredness', label:'Triage Tool — hyperkalaemia rule' },
              when:(v) => v > 6.5
            },
            {
              action:'urgent', label:'Moderate hyperkalaemia — same-day repeat + ECG',
              rule:'K⁺ 6.0–6.5',
              timeframe:'Same day',
              source:'Renal Association',
              patientPhrase:'"Your potassium is high. Please come in today — we\'ll do an ECG and decide whether you need to go to hospital."',
              noteTemplate:'Hyperkalaemia: K⁺ [value]. ECG required same day.\nReview ACEi/ARB/spiro/K-sparing/NSAID/trimethoprim. Dietary review (banana, dried fruit, salt substitute).',
              when:(v) => v > 6.0 && v <= 6.5
            },
            {
              action:'review', label:'Mild hyperkalaemia + on ACEi/ARB/spiro — drug review',
              rule:'K⁺ 5.5–6.0 in patient on RAAS-blocker',
              timeframe:'Within days',
              source:'NICE NG136 · Renal Association',
              patientPhrase:'"Your potassium is slightly raised — one of your blood pressure tablets is partly responsible. We\'ll review the dose."',
              noteTemplate:'Drug review — K⁺ [value] on ACEi/ARB/spiro.\nHold or halve dose if appropriate. Repeat U&E in 1 week.\nReview NSAIDs, salt substitutes, supplements.',
              handoff:{ tool:'medchooser', topic:'hypertension', label:'MedChooser — ACEi/ARB context' },
              when:(v, ctx) => v >= 5.5 && v <= 6.0 && ctx.on_acei
            },
            {
              action:'repeat', label:'Mild hyperkalaemia — repeat avoiding haemolysis',
              rule:'K⁺ 5.1–5.5 incidental',
              timeframe:'1 week',
              source:'BMJ Best Practice',
              when:(v) => v > 5.0 && v < 5.5
            },
            {
              action:'urgent', label:'Rapidly rising K⁺ — earlier escalation than absolute value suggests',
              rule:'K⁺ rising ≥0.5 mmol/L within ≤14 days',
              timeframe:'Same week',
              source:'Renal Association / BMJ Best Practice',
              patientPhrase:'"Your potassium has risen quickly compared to last time. Even though it\'s only mildly raised right now, the speed of change makes me want to act sooner."',
              noteTemplate:'Rising K⁺. Current [value]; previous [prev value] [prev days] ago.\nMedication review, repeat U&E within days, low-K⁺ diet. Hold spironolactone if applicable.',
              when:(v, ctx, all, meta) => v >= 5.0 && v < 6.0 && meta?.deltaAbs != null && meta.deltaAbs >= 0.5 && meta.daysSince != null && meta.daysSince <= 14
            },
            {
              action:'annotate', label:'Stable mildly raised K⁺ — known pattern',
              rule:'K⁺ 5.0–5.5 stable across ≥3 months',
              timeframe:'Routine recall',
              source:'CKS / BMJ Best Practice',
              patientPhrase:'"Your potassium is slightly raised, but the same as last time — that\'s your baseline. We\'ll just keep an eye on it."',
              when:(v, ctx, all, meta) => v >= 5.0 && v < 5.5 && meta?.trend === 'stable' && meta.daysSince != null && meta.daysSince >= 90
            },
            {
              action:'urgent', label:'Severe hypokalaemia — arrhythmia/paralysis risk',
              rule:'K⁺ <2.5',
              timeframe:'Same day',
              source:'BMJ Best Practice',
              patientPhrase:'"Your potassium is very low — we need to act on this today. Please come in or we\'ll admit you for a drip."',
              when:(v) => v < 2.5
            },
            {
              action:'treat', label:'Hypokalaemia — replace + investigate',
              rule:'K⁺ <3.5',
              timeframe:'1 week',
              source:'BMJ Best Practice · BNF',
              patientPhrase:'"Your potassium is low — usually from a tablet or fluid loss. We\'ll top it up and repeat the test."',
              noteTemplate:'Hypokalaemia. K⁺ [value].\nReview thiazide / loop diuretic / steroid / liquorice / GI loss / Conn\'s.\nSando-K 2 tabs TDS or alternative; repeat U&E in 1 week.',
              when:(v) => v >= 2.5 && v < 3.5
            },
          ]
        },
        {
          id:'na', label:'Sodium', unit:'mmol/L', step:1, ref:[135,145],
          topics:['tatt','hypertension'],
          pathways:[{slug:'hyponatraemia',label:'Hyponatraemia'},{slug:'hypernatraemia',label:'Hypernatraemia'}],
          rules:[
            {
              action:'emergency', label:'Severe hyponatraemia — admit',
              rule:'Na⁺ <125 (or <130 with altered consciousness)',
              timeframe:'Same day',
              source:'CKS Hyponatraemia · BMJ Best Practice',
              sourceUrl:'https://cks.nice.org.uk/topics/hyponatraemia/',
              patientPhrase:'"Your salt level is very low — we need to bring it up safely in hospital. Don\'t drink large volumes of fluid in the meantime."',
              noteTemplate:'Severe hyponatraemia. Na⁺ [value]. Symptoms [drowsy / fits / vomiting].\nAdmit. Stop offending drugs (thiazide, SSRI, carbamazepine, PPI). Paired serum + urine osmolality if cause unclear.',
              when:(v, ctx) => v < 125 || (v < 130 && ctx.symptoms)
            },
            {
              action:'urgent', label:'Moderate hyponatraemia — same-day review',
              rule:'Na⁺ 125–129',
              timeframe:'Same day',
              source:'CKS Hyponatraemia',
              patientPhrase:'"Your salt level is low. We need to look at why — usually it\'s a tablet that needs reviewing."',
              noteTemplate:'Hyponatraemia. Na⁺ [value].\nVolume status, paired osmolality, drug review (thiazide/SSRI/PPI/carbamazepine).\nRepeat U&E in 3–7 days.',
              when:(v) => v >= 125 && v < 130
            },
            {
              action:'repeat', label:'Mild hyponatraemia — repeat + drug review',
              rule:'Na⁺ 130–134',
              timeframe:'1–2 weeks',
              source:'CKS Hyponatraemia',
              when:(v) => v >= 130 && v < 135
            },
            {
              action:'urgent', label:'Hypernatraemia — assess dehydration urgently',
              rule:'Na⁺ >150',
              timeframe:'Same day',
              source:'BMJ Best Practice',
              when:(v) => v > 150
            },
          ]
        },
        {
          id:'cr', label:'Creatinine', unit:'µmol/L', step:1,
          refByCtx: ctx => ctx.female ? [45,90] : [60,110],
          topics:['hypertension','tatt','type-2-diabetes'],
          pathways:[{slug:'aki',label:'AKI'}],
          rules:[
            {
              action:'urgent', label:'Likely AKI — same-day action',
              rule:'Creatinine markedly raised (>200 or >1.5× baseline)',
              timeframe:'Same day',
              source:'NICE CG169 AKI',
              sourceUrl:'https://www.nice.org.uk/guidance/cg169',
              patientPhrase:'"Your kidney function has dropped — we need to act today. We\'ll review tablets and repeat the test."',
              noteTemplate:'? AKI.\nCreatinine [value], eGFR [value], K⁺ [value]. Drug hold list: ACEi/ARB, diuretic, NSAID, metformin, SGLT2i.\nFluid status, ACR, urine output, urinalysis. Recheck in 24–48h.',
              handoff:{ tool:'triage', topic:'tiredness', label:'Triage — AKI rule' },
              when:(v) => v > 200
            },
          ]
        },
        {
          id:'egfr', label:'eGFR', unit:'mL/min', step:1, ref:[60,200],
          topics:['hypertension','tatt','type-2-diabetes'],
          pathways:[{slug:'ckd',label:'CKD'},{slug:'aki',label:'AKI'}],
          rules:[
            {
              action:'urgent', label:'eGFR <30 — refer renal, drug review',
              rule:'CKD stage 4–5',
              timeframe:'2–4 weeks',
              source:'NICE NG203 CKD',
              sourceUrl:'https://www.nice.org.uk/guidance/ng203',
              patientPhrase:'"Your kidney function is significantly reduced — we\'ll review your medications and refer you to a kidney specialist."',
              noteTemplate:'CKD G4/G5. eGFR [value].\nNephrology referral. Review nephrotoxic drugs (metformin, SGLT2i variable, NSAID, gentamicin).\nACR, urinalysis, renal USS, parathyroid + bone profile, Hb.',
              when:(v) => v < 30
            },
            {
              action:'review', label:'eGFR 30–44 — drug review + monitor',
              rule:'CKD G3b — adjust nephrotoxic doses',
              timeframe:'3 months',
              source:'NICE NG203',
              when:(v) => v >= 30 && v < 45
            },
            {
              action:'recall', label:'CKD G3a — primary-care monitoring',
              rule:'eGFR 45–59 — check ACR, monitor 6-monthly',
              timeframe:'6 months',
              source:'NICE NG203',
              when:(v) => v >= 45 && v < 60
            },
            {
              action:'urgent', label:'Rapid eGFR decline — accelerated CKD progression',
              rule:'eGFR drop ≥25% (or ≥15 mL/min) within ≤12 months',
              timeframe:'Same week — repeat + drug review',
              source:'NICE NG203 §1.2 / Renal Association',
              sourceUrl:'https://www.nice.org.uk/guidance/ng203',
              patientPhrase:'"Your kidney function has dropped faster than I\'d expect. Let\'s repeat the test, review your tablets, and check things over before deciding next steps."',
              noteTemplate:'Accelerated eGFR decline.\nCurrent eGFR [value]; previous [prev value] [prev days] ago. Drop [deltaPct]%.\nRepeat U&E + ACR within days. Drug review (ACEi/ARB/NSAID/SGLT2i context-dependent). Hydration, sepsis, obstruction screen.',
              handoff:{ tool:'triage', topic:'tiredness', label:'Triage — AKI / accelerated CKD' },
              when:(v, ctx, all, meta) => meta?.deltaPct != null && meta.deltaPct <= -25 && meta.daysSince != null && meta.daysSince <= 365
            },
            {
              action:'annotate', label:'eGFR stable — known CKD',
              rule:'eGFR 30–59 stable across ≥3 months',
              timeframe:'Routine annual',
              source:'NICE NG203',
              when:(v, ctx, all, meta) => v >= 30 && v < 60 && meta?.trend === 'stable' && meta.daysSince != null && meta.daysSince >= 90
            },
          ]
        },
        {
          id:'acr', label:'Urine ACR', unit:'mg/mmol', step:0.1, ref:[0,3],
          topics:['hypertension','type-2-diabetes','tatt'],
          pathways:[{slug:'ckd',label:'CKD / albuminuria'}],
          rules:[
            {
              action:'urgent', label:'A3 albuminuria — refer renal',
              rule:'ACR ≥30 — significant proteinuria',
              timeframe:'2 weeks',
              source:'NICE NG203 CKD',
              patientPhrase:'"There\'s a significant amount of protein in your urine — that\'s a kidney signal we need a specialist to assess."',
              noteTemplate:'Heavy albuminuria. ACR [value].\nRenal referral. Start ACEi/ARB unless contraindicated. SGLT2i if eligible (DM or non-DM CKD).\nBP target <130/80.',
              handoff:{ tool:'medchooser', topic:'hypertension', label:'MedChooser — ACEi/ARB' },
              when:(v) => v >= 30
            },
            {
              action:'treat', label:'A2 albuminuria — start ACEi/ARB',
              rule:'ACR 3–29',
              timeframe:'Within weeks',
              source:'NICE NG203 / NG136',
              patientPhrase:'"There\'s a small amount of protein in your urine — common in diabetes / blood pressure. A tablet protects the kidneys long-term."',
              noteTemplate:'Microalbuminuria. ACR [value].\nStart ACEi/ARB (e.g. ramipril 1.25 mg → 10 mg) regardless of BP. Recheck ACR + U&E in 1–2 weeks.',
              when:(v) => v >= 3 && v < 30
            },
          ]
        },
        {
          id:'mg', label:'Magnesium', unit:'mmol/L', step:0.01, ref:[0.7, 1.0],
          pathways:[{slug:'magnesium-deficiency',label:'Hypomagnesaemia'}],
          rules:[
            {
              action:'urgent', label:'Severe hypomagnesaemia <0.4 — risk of arrhythmia / tetany / seizures',
              rule:'Mg <0.4 (or symptomatic) — same-day, consider IV replacement',
              timeframe:'Same day',
              source:'BMJ Best Practice · Renal Association',
              patientPhrase:'"Your magnesium is very low — that can upset the heart rhythm, so we need to act on it today."',
              noteTemplate:'Severe hypomagnesaemia. Mg [value].\nECG (QT, torsades risk). IV MgSO4 if <0.4 / symptomatic / arrhythmia. Correct alongside K⁺ and Ca²⁺ (often co-deplete). Stop/review PPI.',
              when:(v) => v < 0.4
            },
            {
              action:'treat', label:'Hypomagnesaemia — replace + review PPI / cause',
              rule:'Mg 0.4–0.69 — oral replacement; explains refractory hypokalaemia/hypocalcaemia',
              timeframe:'1–2 weeks',
              source:'BMJ Best Practice · MHRA PPI',
              patientPhrase:'"Your magnesium is low — often from acid-reducing tablets or gut losses. We\u2019ll top it up and check the cause."',
              noteTemplate:'Hypomagnesaemia. Mg [value].\nOral magnesium (e.g. Mg aspartate). Review PPI (long-term), diuretics, alcohol, GI losses. Recheck K⁺/Ca²⁺ (refractory until Mg corrected). Repeat in 1–2 weeks.',
              when:(v) => v >= 0.4 && v < 0.7
            },
          ]
        },
      ]
    },

    // ============ LFTs ============
    {
      id:'lfts', label:'LFTs',
      tests:[
        {
          id:'alt', label:'ALT', unit:'U/L', step:1, ref:[0,40],
          pathways:[{slug:'abnormal-lfts',label:'Abnormal LFTs'},{slug:'fatty-liver',label:'Fatty liver'}],
          rules:[
            {
              action:'urgent', label:'ALT >10× upper limit — suspect acute hepatitis / drug injury',
              rule:'ALT >400',
              timeframe:'Same day',
              source:'BMJ Best Practice · BSG',
              patientPhrase:'"Your liver enzymes are very high — we need to act today. Have you started any new tablets or had any unwell episodes recently?"',
              noteTemplate:'Acute hepatitis pattern.\nALT [value]. Repeat LFTs, INR, paracetamol level (if any concern), hepatitis screen (A/B/C/E), ferritin, autoimmune (ANA, ASMA, AMA), USS.\nStop hepatotoxic drugs; admit if INR raised or encephalopathy.',
              when:(v) => v > 400
            },
            {
              action:'urgent', label:'ALT raised — non-invasive liver screen',
              rule:'ALT 2–10× upper limit (80–400)',
              timeframe:'Routine review',
              source:'BSG abnormal LFTs · NICE CKS',
              noteTemplate:'Abnormal LFTs.\nALT [value]. Liver screen: hepatitis B/C, ferritin/transferrin, AMA, ANA, SMA, immunoglobulins, alpha-1 antitrypsin, USS liver. Alcohol history. Repeat in 6 weeks if mild.',
              when:(v) => v > 80
            },
            {
              action:'repeat', label:'Mildly raised ALT — repeat in 4–6 weeks',
              rule:'ALT 40–80 isolated',
              timeframe:'4–6 weeks',
              source:'BSG abnormal LFTs',
              when:(v, ctx, all) => v > 40 && v <= 80
            },
            {
              action:'urgent', label:'ALT rising despite previous monitoring — escalate',
              rule:'ALT ↑ >50% over ≤3 months',
              timeframe:'Within days',
              source:'BSG abnormal LFTs · BMJ Best Practice',
              patientPhrase:'"Your liver enzymes are climbing. Let\'s look at what might be doing it — recent tablets, alcohol — and arrange a scan."',
              when:(v, ctx, all, meta) => v > 80 && meta?.deltaPct != null && meta.deltaPct >= 50 && meta.daysSince != null && meta.daysSince <= 90
            },
            {
              action:'recall', label:'ALT improving — continue current plan',
              rule:'ALT trending down toward normal',
              timeframe:'Routine',
              source:'BSG abnormal LFTs',
              when:(v, ctx, all, meta) => v > 40 && meta?.trend === 'falling'
            },
          ]
        },
        {
          id:'alp', label:'ALP', unit:'U/L', step:1, ref:[30,130],
          pathways:[{slug:'abnormal-lfts',label:'Abnormal LFTs'},{slug:'abnormal-bone-profile',label:'Bone profile'}],
          rules:[
            {
              action:'urgent', label:'Cholestatic pattern — image biliary tree',
              rule:'ALP >2× ULN — consider obstruction, PBC, malignancy',
              timeframe:'Within days',
              source:'BSG abnormal LFTs',
              noteTemplate:'Cholestatic LFTs. ALP [value], GGT [value], bilirubin [value].\nUSS biliary tree urgently. AMA, immunoglobulins, ferritin. If jaundice/RUQ pain — admit or 2WW pancreatic / HPB.',
              when:(v) => v > 260
            },
          ]
        },
        {
          id:'ggt', label:'GGT', unit:'U/L', step:1, ref:[0,60],
          pathways:[{slug:'abnormal-lfts',label:'Abnormal LFTs'}],
          rules:[
            {
              action:'review', label:'Isolated raised GGT — likely alcohol / fatty liver / drug',
              rule:'GGT >120',
              timeframe:'Routine',
              source:'BSG · BMJ Best Practice',
              patientPhrase:'"This particular liver enzyme is sensitive to alcohol and to the liver carrying a bit of fat. Worth looking at lifestyle and reviewing tablets."',
              when:(v) => v > 120
            },
          ]
        },
        {
          id:'bili', label:'Bilirubin', unit:'µmol/L', step:1, ref:[0,21],
          pathways:[{slug:'jaundice',label:'Jaundice'}],
          rules:[
            {
              action:'urgent', label:'Jaundice — same-day workup',
              rule:'Bilirubin >50 + symptoms or jaundice',
              timeframe:'Same day',
              source:'NICE NG12 §1.2 / BSG',
              patientPhrase:'"You\'re slightly jaundiced and your liver tests are off — we need to investigate this today."',
              when:(v, ctx) => v > 50 && ctx.symptoms
            },
            {
              action:'cancer', label:'Painless jaundice ≥40 — pancreatic 2WW',
              rule:'Bilirubin >25 + age ≥40 + painless',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.2.10 pancreatic',
              patientPhrase:'"Painless jaundice in your age group has to be checked quickly to look at the pancreas."',
              when:(v, ctx) => v > 25 && ctx.age != null && ctx.age >= 40 && !ctx.symptoms
            },
          ]
        },
        {
          id:'alb', label:'Albumin', unit:'g/L', step:1, ref:[35,50],
          rules:[
            {
              action:'urgent', label:'Low albumin <25 — investigate cause',
              rule:'Albumin <25 — nephrotic / chronic illness / malnutrition',
              timeframe:'Within days',
              source:'BMJ Best Practice',
              when:(v) => v < 25
            },
          ]
        },
      ]
    },

    // ============ TFTs ============
    {
      id:'tft', label:'Thyroid function',
      tests:[
        {
          id:'tsh', label:'TSH', unit:'mU/L', step:0.01, ref:[0.4, 4.0],
          pathways:[{slug:'abnormal-tfts',label:'Abnormal TFTs'},{slug:'hypothyroidism',label:'Hypothyroidism'},{slug:'hyperthyroidism',label:'Hyperthyroidism'},{slug:'subclinical-hypothyroidism',label:'Subclinical'},{slug:'thyroid-pregnancy',label:'In pregnancy'}],
          rules:[
            {
              action:'urgent', label:'Profound hypothyroidism — start treatment + urgent endo if myxoedema',
              rule:'TSH >20',
              timeframe:'Same day to start treatment',
              source:'NICE NG145 thyroid disease',
              sourceUrl:'https://www.nice.org.uk/guidance/ng145',
              patientPhrase:'"Your thyroid is significantly underactive — that explains a lot of the tiredness. We\'ll start levothyroxine today and recheck in 6–8 weeks."',
              noteTemplate:'Profound hypothyroidism.\nTSH [value], fT4 [value].\nLevothyroxine 25–50 mcg OD (lower in elderly / IHD). Recheck TFTs at 6–8 weeks; titrate to TSH 0.4–2.5.\nIf myxoedema (hypothermia / bradycardia / altered consciousness) — admit.',
              handoff:{ tool:'triage', topic:'tiredness', label:'Triage — profound hypothyroidism' },
              when:(v) => v > 20
            },
            {
              action:'treat', label:'Overt hypothyroidism — start levothyroxine',
              rule:'TSH >10 (or 4.5–10 + symptomatic with low fT4)',
              timeframe:'1–2 weeks',
              source:'NICE NG145 · BTA',
              patientPhrase:'"You have an underactive thyroid — common and very treatable. We\'ll start a small dose tablet and recheck in 6–8 weeks."',
              noteTemplate:'Hypothyroidism.\nTSH [value]. Start levothyroxine 50 mcg OD (25 if elderly / IHD / frail). Recheck TFTs in 6–8 wk.\nTPO antibodies if not done.',
              when:(v, ctx, all) => v > 10 || (v > 4.5 && all.ft4 != null && all.ft4 < 9 && ctx.symptoms)
            },
            {
              action:'repeat', label:'Subclinical hypothyroidism — repeat 3 months + TPO',
              rule:'TSH 4.5–10 with normal fT4',
              timeframe:'3 months',
              source:'NICE NG145',
              patientPhrase:'"Your thyroid is mildly underactive. We\'ll repeat the test in 3 months — if it\'s still raised or you\'re symptomatic we\'ll consider treatment."',
              when:(v, ctx, all) => v >= 4.5 && v <= 10 && (all.ft4 == null || all.ft4 >= 9)
            },
            {
              action:'urgent', label:'Possible thyroid storm — TSH suppressed + symptoms',
              rule:'TSH <0.1 + tachycardia / fever / agitation',
              timeframe:'Same day',
              source:'BMJ Best Practice · BTA',
              when:(v, ctx) => v < 0.1 && ctx.symptoms
            },
            {
              action:'treat', label:'Hyperthyroid — refer endo + consider beta-blocker',
              rule:'TSH <0.1 with raised fT4 / fT3',
              timeframe:'2 weeks',
              source:'NICE NG145 · BTA',
              patientPhrase:'"Your thyroid is overactive. We\'ll arrange a specialist appointment, and meanwhile we can give a tablet to settle the heart-racing."',
              when:(v, ctx, all) => v < 0.1 && ((all.ft4 != null && all.ft4 > 22) || (all.ft3 != null && all.ft3 > 6.5))
            },
            {
              action:'repeat', label:'Subclinical hyperthyroidism — repeat 3 months',
              rule:'TSH 0.1–0.39 with normal fT4',
              timeframe:'3 months',
              source:'NICE NG145',
              when:(v, ctx, all) => v >= 0.1 && v < 0.4 && (all.ft4 == null || all.ft4 <= 22)
            },
          ]
        },
        {
          id:'ft4', label:'Free T4', unit:'pmol/L', step:0.1, ref:[9, 22] },
        {
          id:'ft3', label:'Free T3', unit:'pmol/L', step:0.1, ref:[3.5, 6.5] },
      ]
    },

    // ============ HbA1c / Glucose ============
    {
      id:'gluc', label:'HbA1c · Glucose',
      tests:[
        {
          id:'hba1c', label:'HbA1c', unit:'mmol/mol', step:1, ref:[20, 42],
          topics:['type-2-diabetes','tatt','hypertension'],
          pathways:[{slug:'t2dm',label:'Type 2 diabetes'}],
          rules:[
            {
              action:'treat', label:'New diabetes likely — confirm + start NICE pathway',
              rule:'HbA1c ≥48 — confirm with repeat if asymptomatic',
              timeframe:'Same-week review',
              source:'NICE NG28 type 2 diabetes',
              sourceUrl:'https://www.nice.org.uk/guidance/ng28',
              patientPhrase:'"Your blood tests show diabetes. The good news is we caught it early — there\'s a lot we can do."',
              noteTemplate:'New T2DM.\nHbA1c [value] mmol/mol. Repeat HbA1c if asymptomatic.\nFull workup: lipids, U&E, ACR, LFT, BP, eyes referral, foot check.\nLifestyle ± metformin per NG28. Structured education (DESMOND).',
              handoff:{ tool:'medchooser', topic:'type-2-diabetes', label:'MedChooser — T2DM' },
              when:(v) => v >= 48
            },
            {
              action:'recall', label:'Pre-diabetes — DPP referral + lifestyle',
              rule:'HbA1c 42–47',
              timeframe:'Annual',
              source:'NICE NG28 · NHS DPP',
              patientPhrase:'"You\'re not diabetic — but you\'re in a window where we can prevent it. The NHS has a programme that helps."',
              noteTemplate:'Pre-diabetes. HbA1c [value].\nRefer NHS Diabetes Prevention Programme. Lifestyle, BMI, BP, lipids. Annual HbA1c.',
              when:(v) => v >= 42 && v < 48
            },
            {
              action:'review', label:'T2DM with HbA1c >58 — intensify Rx',
              rule:'HbA1c >58 in known diabetic',
              timeframe:'Within weeks',
              source:'NICE NG28',
              patientPhrase:'"Your diabetes control could be better — let\'s look at what\'s changed and adjust your tablets."',
              handoff:{ tool:'medchooser', topic:'type-2-diabetes', label:'MedChooser — T2DM' },
              when:(v, ctx) => ctx.has_dm && v > 58
            },
            {
              action:'recall', label:'HbA1c improving on lifestyle / metformin — routine recall',
              rule:'HbA1c trending down ≥5 mmol/mol over 3–6 months',
              timeframe:'6 months',
              source:'NICE NG28',
              patientPhrase:'"Your HbA1c has come down nicely. Keep doing what you\'re doing — we\'ll recheck in 6 months."',
              when:(v, ctx, all, meta) => ctx.has_dm && meta?.trend === 'falling' && meta.deltaAbs != null && meta.deltaAbs <= -5
            },
            {
              action:'review', label:'HbA1c worsening despite Rx — intensify or check adherence',
              rule:'HbA1c rising ≥5 mmol/mol over ≤6 months',
              timeframe:'Within weeks',
              source:'NICE NG28',
              patientPhrase:'"Your sugar control has slipped since last time. Let\'s talk about what\'s changed — and whether we need to step up the medication."',
              handoff:{ tool:'medchooser', topic:'type-2-diabetes', label:'MedChooser — T2DM' },
              when:(v, ctx, all, meta) => ctx.has_dm && meta?.trend === 'rising' && meta.deltaAbs != null && meta.deltaAbs >= 5 && meta.daysSince != null && meta.daysSince <= 200
            },
          ]
        },
        {
          id:'glucose', label:'Random / fasting glucose', unit:'mmol/L', step:0.1, ref:[3.5, 7.8],
          pathways:[{slug:'hypoglycaemia',label:'Hypoglycaemia'},{slug:'t2dm',label:'Type 2 diabetes'}],
          rules:[
            {
              action:'emergency', label:'Hypoglycaemia — treat now (15-15 rule), 999 if severe',
              rule:'Glucose <4 (“four is the floor”); <3 or impaired consciousness = level 3 emergency',
              timeframe:'Immediate',
              source:'JBDS-IP hypoglycaemia · NICE CKS',
              sourceUrl:'https://cks.nice.org.uk/topics/diabetes-type-2/',
              patientPhrase:'"Your sugar is low — take fast-acting sugar now and recheck in 15 minutes. If you ever can\u2019t treat it yourself, that\u2019s a 999 call."',
              noteTemplate:'Hypoglycaemia. Glucose [value].\nConscious + able to swallow → 15–20 g fast carbohydrate, recheck 15 min (15-15 rule), then long-acting carb.\nImpaired/unable → IM glucagon / Baqsimi / IV glucose + 999.\nReview drivers: sulfonylurea (24–48 h obs / admit), insulin, missed meals, alcohol, renal/hepatic, Addison\u2019s. Reassess regimen + DVLA advice.',
              when:(v) => v < 4
            },
            {
              action:'emergency', label:'Severe hyperglycaemia — DKA / HHS workup',
              rule:'Glucose >20 — capillary ketones now',
              timeframe:'Same day',
              source:'NICE NG17 / JBDS-IP',
              sourceUrl:'https://www.nice.org.uk/guidance/ng17',
              patientPhrase:'"Your sugar is very high — we need to check ketones today and possibly send you in."',
              noteTemplate:'Severe hyperglycaemia.\nGlucose [value]. Capillary ketones — if ≥3 or unwell → DKA admission. If lean/young + weight loss → ? T1DM, urgent specialist.',
              handoff:{ tool:'triage', topic:'type-2-diabetes', label:'Triage — DKA pathway' },
              when:(v) => v > 20
            },
          ]
        },
      ]
    },

    // ============ LIPIDS ============
    {
      id:'lipids', label:'Lipid panel',
      tests:[
        {
          id:'tc', label:'Total cholesterol', unit:'mmol/L', step:0.1, ref:[0, 5.0],
          topics:['hypertension','type-2-diabetes'],
          pathways:[{slug:'high-cholesterol',label:'High cholesterol'}],
          rules:[
            {
              action:'cancer', label:'Suspected familial hypercholesterolaemia — refer lipid clinic',
              rule:'TC >7.5 + FH premature CVD',
              timeframe:'2 weeks',
              source:'NICE CG71 FH',
              sourceUrl:'https://www.nice.org.uk/guidance/cg71',
              patientPhrase:'"Your cholesterol is very high for your age — and with your family history we should get a specialist lipid review."',
              when:(v) => v > 7.5
            },
          ]
        },
        {
          id:'ldl', label:'LDL cholesterol', unit:'mmol/L', step:0.1, ref:[0, 3.0] },
        {
          id:'hdl', label:'HDL cholesterol', unit:'mmol/L', step:0.1, ref:[1.0, 3.0] },
        {
          id:'tg', label:'Triglycerides (fasting)', unit:'mmol/L', step:0.1, ref:[0, 1.7],
          pathways:[{slug:'high-triglycerides',label:'High triglycerides'}],
          rules:[
            {
              action:'urgent', label:'Severe hypertriglyceridaemia — pancreatitis risk',
              rule:'TG >20 — urgent lipid review + fibrate',
              timeframe:'Within days',
              source:'NICE CG181 · Heart UK',
              patientPhrase:'"Your triglycerides are very high — there\'s a small risk of pancreatitis. We need to act on this quickly."',
              when:(v) => v > 20
            },
          ]
        },
        {
          id:'nonhdl', label:'Non-HDL', unit:'mmol/L', step:0.1, ref:[0, 4.0],
          topics:['hypertension','type-2-diabetes'],
          rules:[
            {
              action:'treat', label:'Non-HDL not at target on statin — uptitrate or check adherence',
              rule:'Non-HDL >40% reduction not achieved',
              timeframe:'Routine review',
              source:'NICE CG181 lipid modification',
              sourceUrl:'https://www.nice.org.uk/guidance/cg181',
              when:(v, ctx) => ctx.on_statin && v > 2.6
            },
          ]
        },
      ]
    },

    // ============ BONE PROFILE ============
    {
      id:'bone', label:'Bone profile · Vitamin D',
      tests:[
        {
          id:'ca', label:'Adjusted calcium', unit:'mmol/L', step:0.01, ref:[2.2, 2.6],
          pathways:[{slug:'hypercalcaemia',label:'Hypercalcaemia'},{slug:'hypocalcaemia',label:'Hypocalcaemia'},{slug:'malignant-hypercalcaemia',label:'Malignant'},{slug:'abnormal-bone-profile',label:'Bone profile'}],
          rules:[
            {
              action:'emergency', label:'Severe hypercalcaemia — admit',
              rule:'Adj Ca²⁺ >3.0',
              timeframe:'Same day',
              source:'CKS Hypercalcaemia · BMJ Best Practice',
              patientPhrase:'"Your calcium is dangerously high — we need to send you in today for IV fluids and look for a cause."',
              noteTemplate:'Severe hypercalcaemia. Adj Ca²⁺ [value].\nAdmit for IV saline ± bisphosphonate. Investigate cause: malignancy (myeloma, bone mets), primary HPT, sarcoid, thiazide, vit D toxicity.\nSent: PTH, vit D, myeloma screen, electrophoresis, CXR.',
              when:(v) => v > 3.0
            },
            {
              action:'cancer', label:'Moderate hypercalcaemia — myeloma / bone mets screen',
              rule:'Adj Ca²⁺ 2.8–3.0',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.10.5 myeloma',
              patientPhrase:'"Your calcium is high — there are several causes and we need to investigate all of them quickly."',
              noteTemplate:'Hypercalcaemia. Adj Ca²⁺ [value].\nPTH, vit D, U&E, myeloma screen (SPEP, immunoglobulins, Bence-Jones), CXR, urinary calcium.\nUrgent endo referral if PTH inappropriately normal/raised.',
              when:(v) => v > 2.7 && v <= 3.0
            },
            {
              action:'repeat', label:'Mild hypercalcaemia — repeat fasting + PTH',
              rule:'Adj Ca²⁺ 2.6–2.7',
              timeframe:'2–4 weeks',
              source:'BMJ Best Practice',
              when:(v) => v > 2.6 && v <= 2.7
            },
            {
              action:'urgent', label:'Severe hypocalcaemia — tetany risk',
              rule:'Adj Ca²⁺ <1.9',
              timeframe:'Same day',
              source:'BMJ Best Practice',
              when:(v) => v < 1.9
            },
          ]
        },
        {
          id:'po4', label:'Phosphate', unit:'mmol/L', step:0.01, ref:[0.8, 1.5], pathways:[{slug:'abnormal-bone-profile',label:'Bone profile'}] },
        {
          id:'vitd', label:'25-OH Vitamin D', unit:'nmol/L', step:1, ref:[50, 200],
          pathways:[{slug:'vitamin-d-deficiency',label:'Vitamin D deficiency'}],
          rules:[
            {
              action:'treat', label:'Vitamin D deficiency — loading regimen',
              rule:'25-OH Vit D <25',
              timeframe:'Start now',
              source:'NOS · BNF',
              patientPhrase:'"Your vitamin D is low — we\'ll give you a loading course then a daily supplement to maintain levels."',
              noteTemplate:'Vit D deficient. [value] nmol/L.\nLoading: colecalciferol 50,000 IU weekly × 6 OR 20,000 IU twice weekly × 7. Maintenance 800–2000 IU OD.\nCheck Ca²⁺ before loading.',
              when:(v) => v < 25
            },
            {
              action:'treat', label:'Vit D insufficient — daily supplement',
              rule:'25-OH Vit D 25–49',
              timeframe:'Routine',
              source:'NOS · BNF',
              when:(v) => v >= 25 && v < 50
            },
          ]
        },
      ]
    },

    // ============ HAEMATINICS ============
    {
      id:'haem', label:'Haematinics',
      tests:[
        {
          id:'ferritin', label:'Ferritin', unit:'µg/L', step:1, ref:[30, 400],
          topics:['tatt','type-2-diabetes'],
          pathways:[{slug:'low-ferritin',label:'Low ferritin'},{slug:'iron-deficiency',label:'Iron deficiency'},{slug:'high-ferritin',label:'High ferritin'}],
          rules:[
            {
              action:'cancer', label:'Iron-deficiency + age ≥50 — colorectal 2WW',
              rule:'Ferritin <30 + age ≥50 + low Hb',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.3',
              patientPhrase:'"Your iron is low. At your age we want to rule out a bowel cause urgently."',
              handoff:{ tool:'triage', topic:'tiredness', label:'Triage — IDA rule' },
              when:(v, ctx, all) => v < 30 && ctx.age != null && ctx.age >= 50 && all.hb != null && all.hb < (ctx.female ? 120 : 130)
            },
            {
              action:'treat', label:'Iron deficiency — start iron + investigate cause',
              rule:'Ferritin <30',
              timeframe:'Now',
              source:'BSH iron deficiency · CKS',
              patientPhrase:'"Your iron stores are low — common cause of tiredness. We\'ll start an iron tablet and check what\'s causing it."',
              noteTemplate:'Iron deficiency. Ferritin [value].\nFerrous fumarate 210 mg OD (alternate-day option). Recheck Hb + ferritin at 4–8 wks. Dietary + menstrual + GI source.',
              when:(v) => v < 30
            },
            {
              action:'urgent', label:'Very raised ferritin — haemochromatosis screen',
              rule:'Ferritin >1000 — exclude haemochromatosis / inflammation / malignancy',
              timeframe:'Within weeks',
              source:'BSH haemochromatosis',
              when:(v) => v > 1000
            },
          ]
        },
        {
          id:'b12', label:'Vitamin B12', unit:'ng/L', step:1, ref:[200, 900],
          topics:['tatt'],
          pathways:[{slug:'vitamin-b12-deficiency',label:'B12 deficiency'}],
          rules:[
            {
              action:'treat', label:'Severe B12 deficiency — IM loading',
              rule:'B12 <100 OR symptomatic neurology',
              timeframe:'Start now',
              source:'BSH B12/folate guidelines',
              sourceUrl:'https://b-s-h.org.uk/guidelines/',
              patientPhrase:'"Your B12 is very low — that\'s a fixable cause of tiredness. We\'ll start an injection straight away."',
              noteTemplate:'B12 deficiency. B12 [value], MCV [value].\nIF antibody, gastric parietal cell Ab.\nHydroxocobalamin 1 mg IM alternate days × 6 (daily if neurology). Maintenance 1 mg IM 3-monthly (pernicious anaemia) or follow guidelines for dietary.',
              when:(v) => v < 100
            },
            {
              action:'treat', label:'Mild B12 deficiency — oral trial + dietary review',
              rule:'B12 100–200',
              timeframe:'1 month',
              source:'BSH B12 · BNF',
              when:(v) => v >= 100 && v < 200
            },
          ]
        },
        {
          id:'folate', label:'Serum folate', unit:'µg/L', step:0.1, ref:[3, 17],
          pathways:[{slug:'low-folate',label:'Low folate'}],
          rules:[
            {
              action:'treat', label:'Folate deficiency — replace + check B12 first',
              rule:'Folate <3 (always check + replace B12 first)',
              timeframe:'Start now',
              source:'BSH B12/folate · BNF',
              noteTemplate:'Folate deficiency.\nCheck B12 — replace B12 first if low (folate alone in B12 deficiency can precipitate subacute combined cord degeneration).\nFolic acid 5 mg OD × 4 months. Coeliac screen.',
              when:(v) => v < 3
            },
          ]
        },
      ]
    },

    // ============ COAGULATION ============
    {
      id:'coag', label:'Coagulation',
      tests:[
        {
          id:'inr', label:'INR', unit:'', step:0.1, ref:[0.8, 1.2],
          rules:[
            {
              action:'emergency', label:'INR >8 — major bleed risk',
              rule:'INR >8 on warfarin',
              timeframe:'Same day',
              source:'BSH warfarin reversal',
              patientPhrase:'"Your INR is dangerously high — please stop the warfarin and come in today. We\'ll give vitamin K to bring it down."',
              noteTemplate:'INR [value] on warfarin.\nStop warfarin. If bleeding → admit, IV vit K + PCC. If no bleeding → oral vit K 1–5 mg, recheck INR at 24h.',
              when:(v, ctx) => v > 8 && ctx.on_warfarin
            },
            {
              action:'urgent', label:'INR 5–8 — withhold warfarin + oral vit K',
              rule:'INR 5–8 on warfarin',
              timeframe:'Same day',
              source:'BSH warfarin reversal',
              when:(v, ctx) => v > 5 && v <= 8 && ctx.on_warfarin
            },
            {
              action:'review', label:'Sub-therapeutic INR on warfarin',
              rule:'INR <2 on warfarin (target 2–3)',
              timeframe:'Within days',
              source:'BSH · BMJ Best Practice',
              when:(v, ctx) => v < 2 && ctx.on_warfarin
            },
          ]
        },
        {
          id:'aptt', label:'APTT', unit:'s', step:1, ref:[25, 38] },
        {
          id:'fib', label:'Fibrinogen', unit:'g/L', step:0.1, ref:[1.8, 4.0] },
      ]
    },

    // ============ INFLAMMATORY ============
    {
      id:'inflam', label:'Inflammatory markers',
      tests:[
        {
          id:'crp', label:'CRP', unit:'mg/L', step:1, ref:[0, 5],
          pathways:[{slug:'high-crp-esr',label:'Raised CRP / ESR'}],
          rules:[
            {
              action:'urgent', label:'Markedly raised CRP — investigate source',
              rule:'CRP >100 with symptoms',
              timeframe:'Same day',
              source:'BMJ Best Practice',
              patientPhrase:'"Your inflammation marker is high — that suggests an infection or something we need to find. Let\'s examine you today."',
              when:(v, ctx) => v > 100 && ctx.symptoms
            },
            {
              action:'cancer', label:'Raised CRP + B-symptoms — haematological 2WW',
              rule:'CRP >30 + drenching night sweats / weight loss',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.10',
              when:(v, ctx) => v > 30 && ctx.symptoms
            },
          ]
        },
        {
          id:'esr', label:'ESR', unit:'mm/hr', step:1, ref:[0, 20],
          pathways:[{slug:'high-crp-esr',label:'Raised CRP / ESR'}],
          rules:[
            {
              action:'urgent', label:'ESR >100 + ≥50 yrs + symptoms — consider GCA / PMR / myeloma',
              rule:'ESR ≥100',
              timeframe:'Same day if GCA features',
              source:'BSR GCA · BMJ Best Practice',
              patientPhrase:'"Your inflammation marker is very high — there are a few causes that can\'t wait. Let\'s look at this together today."',
              noteTemplate:'Markedly raised ESR. [value] mm/hr.\nGCA screen if temporal symptoms / jaw claudication / visual changes — start prednisolone 60 mg if suspected, refer rheum same-day.\nMyeloma screen + CXR. PMR if girdle stiffness.',
              when:(v, ctx) => v >= 100 && ctx.age != null && ctx.age >= 50
            },
          ]
        },
        {
          id:'pv', label:'Plasma viscosity', unit:'mPa·s', step:0.01, ref:[1.50, 1.72] },
        {
          id:'urate', label:'Serum urate', unit:'µmol/L', step:1, ref:[200, 430],
          pathways:[{slug:'gout',label:'Gout'}],
          rules:[
            {
              action:'treat', label:'Urate >360 with gout history — start allopurinol',
              rule:'Recurrent gout — initiate or uptitrate ULT',
              timeframe:'Routine',
              source:'BSR gout · NICE CKS gout',
              when:(v, ctx) => v > 360 && ctx.symptoms
            },
          ]
        },
      ]
    },

    // ============ URINALYSIS ============
    {
      id:'urine', label:'Urinalysis',
      tests:[
        // Placeholders — urinalysis is mostly captured in symptom/context. Including ACR which lives above.
      ]
    },

    // ============ ADDITIONAL TESTS ============
    {
      id:'misc', label:'PSA · FIT · Calprotectin · Amylase · Troponin',
      tests:[
        {
          id:'psa', label:'PSA', unit:'µg/L', step:0.1, ref:[0, 3.0],
          pathways:[{slug:'high-psa',label:'Raised PSA'}],
          rules:[
            {
              action:'cancer', label:'Raised PSA — prostate cancer 2WW',
              rule:'PSA above age-specific threshold (>3 if <60, >4 if 60–69, >5 if ≥70) — see NG12',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.6 urological / Macmillan',
              sourceUrl:'https://www.nice.org.uk/guidance/ng12',
              patientPhrase:'"Your PSA is raised for your age. The next step is a specialist assessment — that\'s standard, not a sign anything is definitely wrong."',
              noteTemplate:'2WW — prostate cancer (NG12 §1.6.4).\nPSA [value], age [value]. DRE [findings].\nRepeat PSA only if very small rise. Otherwise urology 2WW.',
              when:(v, ctx) => ctx.age != null && (
                (ctx.age < 60 && v > 3) ||
                (ctx.age >= 60 && ctx.age < 70 && v > 4) ||
                (ctx.age >= 70 && v > 5)
              )
            },
          ]
        },
        {
          id:'fit', label:'FIT (faecal immunochemical)', unit:'µg Hb/g', step:1, ref:[0, 10],
          rules:[
            {
              action:'cancer', label:'FIT ≥10 — lower GI 2WW',
              rule:'FIT ≥10 µg Hb/g',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.3 / BSG FIT in symptomatic',
              patientPhrase:'"Your bowel test is positive enough to warrant an urgent specialist look. This is standard — most people referred this way turn out fine."',
              noteTemplate:'2WW — lower GI cancer.\nFIT [value]. Symptoms [bowel habit / bleeding / weight loss].\nDRE done.',
              when:(v) => v >= 10
            },
          ]
        },
        {
          id:'calpro', label:'Faecal calprotectin', unit:'µg/g', step:1, ref:[0, 50],
          rules:[
            {
              action:'urgent', label:'Calprotectin >250 — strongly suggests IBD',
              rule:'Calprotectin >250 with bowel symptoms',
              timeframe:'2–4 weeks',
              source:'NICE DG11 · BSG IBD',
              patientPhrase:'"Your bowel marker is raised in a way that suggests inflammation, not cancer. We\'ll arrange a specialist appointment."',
              noteTemplate:'? IBD. Calprotectin [value].\nGastroenterology referral (urgent if >250 + symptoms). Repeat in 2–4 wks for 50–250 range. Exclude infection / NSAIDs.',
              when:(v) => v > 250
            },
            {
              action:'repeat', label:'Calprotectin 50–250 — repeat after 2–4 wks',
              rule:'Borderline calprotectin',
              timeframe:'2–4 weeks',
              source:'NICE DG11',
              when:(v) => v >= 50 && v <= 250
            },
          ]
        },
        {
          id:'amylase', label:'Amylase', unit:'U/L', step:1, ref:[30, 110],
          rules:[
            {
              action:'emergency', label:'Amylase >3× ULN + abdominal pain — pancreatitis',
              rule:'Amylase >330 + symptoms',
              timeframe:'Same day',
              source:'BMJ Best Practice · BSG pancreatitis',
              patientPhrase:'"Your pancreas marker is very high — I need to send you to hospital today."',
              when:(v, ctx) => v > 330 && ctx.symptoms
            },
          ]
        },
        {
          id:'troponin', label:'Troponin (hs)', unit:'ng/L', step:1, ref:[0, 14],
          rules:[
            {
              action:'emergency', label:'Raised troponin — ACS / myocardial injury',
              rule:'Above 99th-centile threshold + symptoms',
              timeframe:'Call 999',
              source:'NICE NG185 ACS · BMJ Best Practice',
              sourceUrl:'https://www.nice.org.uk/guidance/ng185',
              patientPhrase:'"Your heart enzyme is raised — this can be a heart attack signal. I\'m calling an ambulance now."',
              noteTemplate:'Raised troponin in primary care.\nValue [value]. Symptoms [chest pain / SOB].\n999 admission. Aspirin 300 mg if appropriate. ECG.',
              when:(v) => v > 30
            },
          ]
        },
      ]
    },
    // ============ HORMONES / ENDOCRINE ============
    {
      id:'endo', label:'Hormones / Endocrine',
      tests:[
        {
          id:'testost', label:'Testosterone (male, 9am)', unit:'nmol/L', step:0.1, ref:[8, 30],
          pathways:[{slug:'testosterone-deficiency',label:'Testosterone deficiency'}],
          rules:[
            {
              action:'refer', label:'Low testosterone — confirm + LH/FSH + prolactin before TRT',
              rule:'Total testosterone <12 on TWO morning (9am, fasting) samples + symptoms',
              timeframe:'Routine',
              source:'BSSM hypogonadism · CKS',
              patientPhrase:'"Your testosterone is on the low side. We need a second morning sample and a couple of extra hormone checks before deciding on treatment."',
              noteTemplate:'? Hypogonadism. Testosterone [value] (9am).\nRepeat 9am fasting + SHBG, LH, FSH, prolactin. Low LH/FSH → pituitary (MRI, prolactin). Treat reversibles (weight, opioids, alcohol). PSA + Hct before TRT.',
              when:(v) => v < 12
            },
          ]
        },
        {
          id:'prolactin', label:'Prolactin', unit:'mU/L', step:1, ref:[60, 500],
          pathways:[{slug:'hyperprolactinaemia',label:'Hyperprolactinaemia'}],
          rules:[
            {
              action:'urgent', label:'Prolactin >5000 — likely macroprolactinoma; endocrine + pituitary MRI',
              rule:'Prolactin grossly raised (>5000 mU/L)',
              timeframe:'Within weeks (same-week if visual field loss / apoplexy)',
              source:'Endocrine Society · CKS',
              patientPhrase:'"This hormone is high enough that we should arrange a brain (pituitary) scan and a specialist review."',
              noteTemplate:'Marked hyperprolactinaemia. Prolactin [value].\nPituitary MRI + endocrine referral. Check visual fields. Exclude pregnancy, hypothyroidism, drugs (antipsychotics, metoclopramide). Apoplexy (sudden headache + visual loss) → same-day.',
              when:(v) => v > 5000
            },
            {
              action:'review', label:'Raised prolactin — exclude drugs / macroprolactin / hypothyroid',
              rule:'Prolactin mildly–moderately raised (500–5000)',
              timeframe:'Within weeks',
              source:'CKS hyperprolactinaemia',
              patientPhrase:'"Your prolactin is mildly raised — often a tablet or a lab artefact. We\'ll repeat it and check a few things."',
              noteTemplate:'Hyperprolactinaemia. Prolactin [value].\nRequest macroprolactin (PEG). Review drugs (antipsychotics, metoclopramide, SSRI). TFTs, pregnancy test. Repeat. If persistent / symptomatic → endocrine + MRI.',
              when:(v) => v > 500 && v <= 5000
            },
          ]
        },
        {
          id:'fsh', label:'FSH (female)', unit:'IU/L', step:0.1, ref:[1, 12],
          pathways:[{slug:'female-hormone-abnormalities',label:'Female hormone abnormalities'}],
          rules:[
            {
              action:'refer', label:'FSH >25 in woman <40 — possible premature ovarian insufficiency',
              rule:'FSH >25 IU/L on two samples ≥4 weeks apart, age <40',
              timeframe:'Routine (HRT essential)',
              source:'NICE NG23 menopause · CKS POI',
              patientPhrase:'"Your hormone test suggests the ovaries are slowing down earlier than usual. This matters for bone and heart health, so we\'ll confirm it and start protective treatment."',
              noteTemplate:'? Premature ovarian insufficiency. FSH [value], age [value].\nRepeat FSH ≥4 weeks apart + oestradiol. If confirmed → HRT/COC until ~51 (bone/CV protection), gynae/endocrine referral, bone health, fertility discussion.',
              when:(v, ctx) => v > 25 && ctx.age != null && ctx.age < 40
            },
          ]
        },
        {
          id:'oestradiol', label:'Oestradiol', unit:'pmol/L', step:1, ref:[70, 1000], note:'Interpret with FSH/LH',
          pathways:[{slug:'female-hormone-abnormalities',label:'Female hormone abnormalities'}] },
      ]
    },

    // ============ TUMOUR & IMMUNE MARKERS ============
    {
      id:'markers2', label:'Tumour & immune markers',
      tests:[
        {
          id:'paraprotein', label:'Paraprotein / serum FLC ratio', unit:'(enter FLC ratio)', step:0.01, ref:[0.26, 1.65],
          pathways:[{slug:'abnormal-immunoglobulin',label:'Abnormal immunoglobulins'}],
          rules:[
            {
              action:'cancer', label:'Paraprotein / abnormal FLC + CRAB — urgent myeloma pathway',
              rule:'Paraprotein present or FLC ratio markedly abnormal (<0.1 or >8) ± CRAB features',
              timeframe:'Very urgent (same-week haematology)',
              source:'NICE NG12 §1.10 / NG35 myeloma',
              sourceUrl:'https://www.nice.org.uk/guidance/ng35',
              patientPhrase:'"One of your blood proteins is abnormal — we need a blood-specialist (haematology) review and a few more tests to look into it."',
              noteTemplate:'? Myeloma / paraproteinaemia. FLC ratio [value].\nSent: SPEP + immunofixation, serum FLC, immunoglobulins, urine Bence-Jones, FBC, Ca²⁺, U&E (CRAB), B2-microglobulin.\nMGUS vs myeloma — haematology referral; very urgent if CRAB / FLC ratio extreme.',
              when:(v) => v < 0.1 || v > 8
            },
            {
              action:'repeat', label:'Borderline FLC ratio — recheck + immunoglobulins',
              rule:'FLC ratio mildly outside 0.26–1.65',
              timeframe:'Routine',
              source:'BSH paraprotein',
              when:(v) => (v < 0.26 || v > 1.65) && v >= 0.1 && v <= 8
            },
          ]
        },
        {
          id:'igg', label:'Immunoglobulin G (IgG)', unit:'g/L', step:0.1, ref:[6, 16],
          pathways:[{slug:'abnormal-immunoglobulin',label:'Abnormal immunoglobulins'}],
          rules:[
            {
              action:'refer', label:'Low IgG — exclude immunodeficiency (CVID) / secondary causes',
              rule:'IgG <6 g/L (with recurrent infection → immunology)',
              timeframe:'Routine',
              source:'BSH · UK PIN',
              when:(v) => v < 6
            },
          ]
        },
        {
          id:'ca125', label:'CA-125', unit:'IU/mL', step:1, ref:[0, 35],
          pathways:[{slug:'abnormal-cancer-markers',label:'Abnormal tumour markers'}],
          rules:[
            {
              action:'cancer', label:'CA-125 ≥35 — ovarian cancer pathway (USS + 2WW per RMI)',
              rule:'CA-125 ≥35 IU/mL in woman with symptoms (bloating, early satiety, pelvic/abdominal pain, urinary urgency)',
              timeframe:'2 weeks',
              source:'NICE NG12 §1.4 / CG122 ovarian',
              sourceUrl:'https://www.nice.org.uk/guidance/ng12',
              patientPhrase:'"This marker is raised — combined with your symptoms we need an ultrasound and, depending on the result, an urgent gynaecology referral. It often turns out to be benign."',
              noteTemplate:'? Ovarian cancer. CA-125 [value].\nPelvic + abdominal USS; calculate RMI. If ascites/pelvic mass → 2WW gynae now. Symptoms: bloating, early satiety, pelvic pain, urinary urgency (NG12 §1.4).',
              when:(v) => v >= 35
            },
          ]
        },
        {
          id:'ige', label:'Total IgE', unit:'kU/L', step:1, ref:[0, 100], note:'sIgE only with clinical history',
          pathways:[{slug:'allergy-test-abnormalities',label:'Allergy test abnormalities'}],
          rules:[
            {
              action:'annotate', label:'Raised IgE / sIgE = sensitisation, not allergy — interpret with history',
              rule:'A positive specific IgE without a matching clinical history does not diagnose allergy',
              timeframe:'Routine',
              source:'BSACI · NICE CKS allergy',
              patientPhrase:'"A positive allergy blood test on its own only shows sensitivity — it has to match your symptoms to count. Let\'s go through the history."',
              noteTemplate:'Allergy testing. Total/specific IgE [value].\nInterpret sIgE strictly against history (sensitisation ≠ clinical allergy). Tryptase if anaphylaxis/mastocytosis suspected. Penicillin de-labelling, OAS, venom immunotherapy as indicated. Provide AAI + plan if true anaphylaxis risk.',
              when:(v) => v > 100
            },
          ]
        },
        {
          id:'tryptase', label:'Mast cell tryptase (baseline)', unit:'µg/L', step:0.1, ref:[0, 11.4],
          pathways:[{slug:'allergy-test-abnormalities',label:'Allergy test abnormalities'}],
          rules:[
            {
              action:'refer', label:'Raised baseline tryptase — exclude mastocytosis (immunology/haem)',
              rule:'Persistent baseline tryptase >11.4 µg/L (or formula 1.2×baseline+2 for acute)',
              timeframe:'Routine',
              source:'BSACI · WHO mastocytosis',
              when:(v) => v > 11.4
            },
          ]
        },
      ]
    },

    // ============ MUSCLE ENZYMES ============
    {
      id:'muscle', label:'Muscle enzymes',
      tests:[
        {
          id:'ck', label:'Creatine kinase (CK)', unit:'U/L', step:1, ref:[40, 320],
          pathways:[{slug:'raised-creatine-kinase',label:'Raised creatine kinase'}],
          rules:[
            {
              action:'emergency', label:'CK >5000 (or AKI / dark urine) — rhabdomyolysis, admit',
              rule:'CK >5000 U/L, or any CK rise with AKI / myoglobinuria',
              timeframe:'Same day',
              source:'BMJ Best Practice rhabdomyolysis',
              patientPhrase:'"Your muscle enzyme is very high — that can affect the kidneys, so I need to send you in today for fluids and monitoring."',
              noteTemplate:'Rhabdomyolysis. CK [value].\nIV fluids, U&E (K⁺, creatinine), urine dip (blood without RBCs = myoglobin). Stop statin/offending drug. Admit if CK >5000 / AKI / symptomatic.',
              when:(v, ctx, all) => v > 5000 || (v > 1000 && all.cr != null && all.cr > 150)
            },
            {
              action:'review', label:'CK 1000–5000 — statin myopathy / cause; stop statin if >5× ULN + symptoms',
              rule:'CK markedly raised on statin or with myalgia/weakness',
              timeframe:'Within days',
              source:'NICE CG181 · BNF statin monitoring',
              patientPhrase:'"Your muscle enzyme is up — one of your tablets can do this. We\'ll pause it and recheck."',
              noteTemplate:'Raised CK. CK [value].\nIf on statin and CK >5× ULN with symptoms → stop statin, recheck CK + renal. Review exertion, drugs, hypothyroidism (TSH), alcohol. If proximal weakness/persistent → ?inflammatory myositis → rheumatology.',
              when:(v) => v > 1000 && v <= 5000
            },
            {
              action:'repeat', label:'Mildly raised CK — recheck rested + review cause',
              rule:'CK 320–1000 (exercise, IM injection, ethnicity, hypothyroid)',
              timeframe:'2 weeks',
              source:'BMJ Best Practice',
              when:(v) => v > 320 && v <= 1000
            },
          ]
        },
      ]
    },

  ],

  sources: [
    { label:'NICE NG12 — Suspected cancer recognition and referral', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'Macmillan — Rapid referral guidelines', url:'https://www.macmillan.org.uk/healthcare-professionals/cancer-pathways/prevention-and-diagnosis/rapid-referral-guidelines' },
    { label:'NICE CKS — Anaemia · TFTs · LFTs · Hypercalcaemia · Hyponatraemia', url:'https://cks.nice.org.uk/' },
    { label:'NICE NG203 — Chronic kidney disease', url:'https://www.nice.org.uk/guidance/ng203' },
    { label:'NICE NG145 — Thyroid disease', url:'https://www.nice.org.uk/guidance/ng145' },
    { label:'NICE NG28 — Type 2 diabetes', url:'https://www.nice.org.uk/guidance/ng28' },
    { label:'NICE NG17 — Type 1 diabetes / DKA', url:'https://www.nice.org.uk/guidance/ng17' },
    { label:'NICE NG143 — Neutropenic sepsis', url:'https://www.nice.org.uk/guidance/ng143' },
    { label:'NICE CG181 — Lipid modification', url:'https://www.nice.org.uk/guidance/cg181' },
    { label:'NICE CG169 — Acute kidney injury', url:'https://www.nice.org.uk/guidance/cg169' },
    { label:'NICE NG185 — Acute coronary syndromes', url:'https://www.nice.org.uk/guidance/ng185' },
    { label:'NICE DG11 — Faecal calprotectin in IBD', url:'https://www.nice.org.uk/guidance/dg11' },
    { label:'BSH — Haematology guidelines', url:'https://b-s-h.org.uk/guidelines/' },
    { label:'Renal Association — Hyperkalaemia 2023', url:'https://ukkidney.org/health-professionals/guidelines' },
    { label:'BSG — Abnormal LFTs / IBD / pancreatitis', url:'https://www.bsg.org.uk/clinical-resource-tag/guidelines/' },
    { label:'BMJ Best Practice', url:'https://bestpractice.bmj.com' },
    { label:'Medscape — Reference', url:'https://emedicine.medscape.com' },
  ],
});
