/* ============================================
   Medication Chooser — Hyperthyroidism
   NICE NG145 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('hyperthyroidism', {
  title: 'Hyperthyroidism — antithyroid therapy',
  subtitle: 'Carbimazole is first-line for most. The choices that move are: PTU in the first trimester of pregnancy and thyroid storm; block-and-replace vs titration; a beta-blocker for symptom relief; and when to favour radioiodine or surgery.',
  guideline: 'NICE NG145 · SPC',


  safety: [
    {"tone":"amber","label":"Pregnant — 1st trimester","text":"First trimester — PTU preferred (carbimazole embryopathy risk); switch to lowest effective dose with specialist endocrine/obstetric input."},
    {"tone":"red","label":"Sore throat/fever on antithyroid drug","text":"Sore throat, mouth ulcers or fever on carbimazole/PTU → STOP the drug and check an urgent FBC TODAY — agranulocytosis. Counsel every patient on this before starting."},
    {"tone":"red","label":"Thyroid storm / very severe","text":"Thyroid storm is a medical emergency — admit. PTU + beta-blocker + iodine (Lugol's, after PTU) + hydrocortisone under specialist care."}
  ],

  drugs: [
    {
      id:'carbimazole',
      name:'Carbimazole',
      examples:'Titration (e.g. 15–40 mg OD, reduce to maintenance) or block-and-replace',
      step:'First-line',
      source:'NICE NG145 · SPC',
      sideEffects:'Rash, agranulocytosis (rare, serious), hepatotoxicity, congenital malformation in T1',
      monitor:'TFTs (titrate on T4/T3, TSH lags); warn re sore throat/fever → FBC',
      counsel:'"This brings the thyroid back down over a few weeks. The one urgent rule: if you get a sore throat, mouth ulcers or fever, stop it and get a blood test that day. We\'ll check thyroid levels regularly and adjust the dose."',
      detail:{
        'Regimens':'Titration block: start higher, reduce to maintenance against TFTs. Block-and-replace: fixed carbimazole + levothyroxine (specialist, Graves\', ~12–18 months).',
        'Key teaching':'First-line for Graves\' and most hyperthyroidism. TSH stays suppressed for weeks — titrate on free T4/T3, not TSH. Counsel on agranulocytosis at every initiation.'
      },
      conditions: [
        {"kind":"avoid","label":"Pregnant — 1st trimester","text":"First trimester — carbimazole embryopathy risk; use PTU"},
        {"kind":"caution","label":"Thyroid storm / very severe","text":"In storm, PTU preferred acutely (blocks T4→T3 conversion); carbimazole for ongoing control"},
        {"kind":"favoured","label":"Graves' disease","text":"First-line antithyroid drug; titration or block-and-replace"},
        {"kind":"favoured","label":"Toxic nodular goitre / adenoma","text":"First-line antithyroid drug; titration or block-and-replace"},
        {"kind":"favoured","label":"Pregnant — 2nd/3rd trimester","text":"Can switch back to carbimazole after the first trimester (specialist-led)"}
      ]
    },
    {
      id:'ptu',
      name:'Propylthiouracil (PTU)',
      examples:'e.g. 200–400 mg/day in divided doses, reduce to maintenance',
      step:'1st trimester / storm / carbimazole-intolerant',
      source:'NICE NG145 · SPC',
      sideEffects:'Agranulocytosis, hepatotoxicity (rare severe — can be fatal), rash',
      monitor:'TFTs; warn re sore throat/fever; liver symptoms',
      counsel:'"We use this version in early pregnancy and in severe cases. Same urgent rule about sore throat/fever and a blood test — and tell us about any yellowing of the skin or severe tummy pain."',
      detail:{ 'Key teaching':'Preferred in the first trimester and in thyroid storm (also blocks peripheral T4→T3). Reserve otherwise because of a small risk of severe hepatotoxicity. Switch to carbimazole after the first trimester where possible.' },
      conditions: [
        {"kind":"favoured","label":"Pregnant — 1st trimester","text":"First trimester — preferred over carbimazole"},
        {"kind":"favoured","label":"Thyroid storm / very severe","text":"Thyroid storm — blocks T4→T3 conversion; preferred acutely"}
      ]
    },
    {
      id:'betablocker',
      name:'Beta-blocker (propranolol)',
      examples:'Propranolol 10–40 mg TDS for symptom relief',
      step:'Symptom control — adjunct',
      source:'NICE NG145',
      sideEffects:'Bronchospasm (asthma), fatigue, bradycardia',
      monitor:'Short-term until antithyroid drug takes effect',
      counsel:'"While the main treatment kicks in, this quickly eases the racing heart, tremor and anxiety. It\'s usually short-term."',
      detail:{ 'Key teaching':'Adjunct for adrenergic symptoms while awaiting antithyroid effect / radioiodine. Non-selective propranolol also slightly reduces T4→T3 conversion.' },
      conditions: [
        {"kind":"caution","label":"Asthma","text":"Asthma — avoid non-selective; if essential use cardioselective (e.g. bisoprolol) cautiously or a rate-limiting CCB (diltiazem)"},
        {"kind":"favoured","label":"Adrenergic symptoms (tremor, palpitations)","text":"Rapid symptom relief while antithyroid therapy takes effect"},
        {"kind":"favoured","label":"Thyroid storm / very severe","text":"Rapid symptom relief while antithyroid therapy takes effect"}
      ]
    },
    {
      id:'radioiodine',
      name:'Radioiodine (definitive)',
      examples:'Specialist-administered ¹³¹I',
      step:'Definitive treatment',
      source:'NICE NG145',
      sideEffects:'Hypothyroidism (expected), transient thyroiditis, eye-disease worsening',
      monitor:'Lifelong TFTs; contraception advice',
      counsel:'"A one-off radioactive iodine treatment that\'s a permanent cure. It usually leaves the thyroid underactive, so you\'d take levothyroxine afterwards. There are pregnancy and contact precautions we\'d go through."',
      detail:{ 'Key teaching':'First-line definitive option for Graves\'/toxic nodular disease per NICE NG145, unless contraindicated. Avoid in pregnancy/breastfeeding; caution/relative contraindication in active thyroid eye disease (can worsen — steroid cover).' },
      conditions: [
        {"kind":"avoid","label":"Pregnant — 1st trimester","text":"Pregnancy/breastfeeding/planning — radioiodine contraindicated; avoid conception for months after"},
        {"kind":"avoid","label":"Pregnant — 2nd/3rd trimester","text":"Pregnancy/breastfeeding/planning — radioiodine contraindicated; avoid conception for months after"},
        {"kind":"avoid","label":"Planning pregnancy / breastfeeding","text":"Pregnancy/breastfeeding/planning — radioiodine contraindicated; avoid conception for months after"},
        {"kind":"caution","label":"Active thyroid eye disease","text":"Active thyroid eye disease — can worsen; needs steroid cover / specialist decision"},
        {"kind":"favoured","label":"Toxic nodular goitre / adenoma","text":"Toxic nodular disease — effective definitive treatment"},
        {"kind":"favoured","label":"Relapse after a drug course","text":"Relapsed Graves' after a drug course — consider definitive treatment"}
      ]
    },
    {
      id:'surgery',
      name:'Thyroidectomy',
      examples:'Total/near-total thyroidectomy (specialist)',
      step:'Definitive — selected',
      source:'NICE NG145',
      sideEffects:'Hypothyroidism, hypoparathyroidism, recurrent laryngeal nerve injury',
      monitor:'Render euthyroid pre-op; lifelong levothyroxine + calcium check',
      counsel:'"Surgery to remove the thyroid is best when the gland is large and pressing, or there\'s a worrying nodule. You\'d be on thyroid replacement for life afterwards."',
      detail:{ 'Key teaching':'Preferred where there is a large/compressive goitre, suspicion of malignancy, or patient choice. Must be rendered euthyroid pre-operatively.' },
      conditions: [
        {"kind":"favoured","label":"Large goitre / compressive / suspicious nodule","text":"Large/compressive goitre or suspicious nodule — surgery is the definitive choice"},
        {"kind":"favoured","label":"Active thyroid eye disease","text":"Active eye disease — surgery avoids the radioiodine flare risk"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG145 — Thyroid disease: assessment and management', url:'https://www.nice.org.uk/guidance/ng145' },
    { label:'NICE NG145 — thyroid disease', url:'https://www.nice.org.uk/guidance/ng145' },
    { label:'SPC — carbimazole', url:'https://www.medicines.org.uk/emc/search?q=carbimazole' },
    { label:'SPC — propylthiouracil', url:'https://www.medicines.org.uk/emc/search?q=propylthiouracil' }
  ],
});
