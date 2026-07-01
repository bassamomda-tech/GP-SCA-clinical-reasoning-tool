/* ============================================
   Medication Chooser — Hyperthyroidism
   NICE NG145 · CKS Hyperthyroidism · BNF
   ============================================ */
MedChooser.register('hyperthyroidism', {
  title: 'Hyperthyroidism — antithyroid therapy',
  subtitle: 'Carbimazole is first-line for most. The choices that move are: PTU in the first trimester of pregnancy and thyroid storm; block-and-replace vs titration; a beta-blocker for symptom relief; and when to favour radioiodine or surgery. Tick the profile; cards re-tier live.',
  guideline: 'NICE NG145 · CKS · BNF',

  factors: [
    { group:'Cause', id:'graves', label:'Graves\' disease' },
    { group:'Cause', id:'nodular', label:'Toxic nodular goitre / adenoma' },

    { group:'Pregnancy', id:'pregnant_t1', label:'Pregnant — 1st trimester' },
    { group:'Pregnancy', id:'pregnant_late', label:'Pregnant — 2nd/3rd trimester' },
    { group:'Pregnancy', id:'planning', label:'Planning pregnancy / breastfeeding' },

    { group:'Symptoms / safety', id:'symptomatic', label:'Adrenergic symptoms (tremor, palpitations)' },
    { group:'Symptoms / safety', id:'asthma', label:'Asthma' },
    { group:'Symptoms / safety', id:'agranulo', label:'Sore throat/fever on antithyroid drug', note:'?agranulocytosis' },
    { group:'Symptoms / safety', id:'storm', label:'Thyroid storm / very severe' },

    { group:'Treatment route', id:'large_goitre', label:'Large goitre / compressive / suspicious nodule' },
    { group:'Treatment route', id:'relapse', label:'Relapse after a drug course' },
    { group:'Treatment route', id:'eye', label:'Active thyroid eye disease' },
  ],

  flags: (f) => {
    const out = [];
    if (f.agranulo) out.push({ tone:'red', text:'Sore throat, mouth ulcers or fever on carbimazole/PTU → STOP the drug and check an urgent FBC TODAY — agranulocytosis. Counsel every patient on this before starting.' });
    if (f.storm) out.push({ tone:'red', text:'Thyroid storm is a medical emergency — admit. PTU + beta-blocker + iodine (Lugol\'s, after PTU) + hydrocortisone under specialist care.' });
    if (f.pregnant_t1) out.push({ tone:'amber', text:'First trimester — PTU preferred (carbimazole embryopathy risk); switch to lowest effective dose with specialist endocrine/obstetric input.' });
    return out;
  },

  drugs: [
    {
      id:'carbimazole',
      name:'Carbimazole',
      examples:'Titration (e.g. 15–40 mg OD, reduce to maintenance) or block-and-replace',
      step:'First-line',
      source:'NICE NG145 · BNF',
      sideEffects:'Rash, agranulocytosis (rare, serious), hepatotoxicity, congenital malformation in T1',
      monitor:'TFTs (titrate on T4/T3, TSH lags); warn re sore throat/fever → FBC',
      counsel:'"This brings the thyroid back down over a few weeks. The one urgent rule: if you get a sore throat, mouth ulcers or fever, stop it and get a blood test that day. We\'ll check thyroid levels regularly and adjust the dose."',
      detail:{
        'Regimens':'Titration block: start higher, reduce to maintenance against TFTs. Block-and-replace: fixed carbimazole + levothyroxine (specialist, Graves\', ~12–18 months).',
        'Key teaching':'First-line for Graves\' and most hyperthyroidism. TSH stays suppressed for weeks — titrate on free T4/T3, not TSH. Counsel on agranulocytosis at every initiation.'
      },
      evaluate(f){
        if (f.pregnant_t1) return { tier:'avoid', reasons:[{kind:'bad', text:'First trimester — carbimazole embryopathy risk; use PTU'}] };
        if (f.storm) return { tier:'acceptable', reasons:[{kind:'bad', text:'In storm, PTU preferred acutely (blocks T4→T3 conversion); carbimazole for ongoing control'}] };
        const r = [];
        if (f.graves || f.nodular) r.push({kind:'good', text:'First-line antithyroid drug; titration or block-and-replace'});
        if (f.pregnant_late) r.push({kind:'good', text:'Can switch back to carbimazole after the first trimester (specialist-led)'});
        return { tier:'preferred', reasons: r.length ? r : [{kind:'good', text:'First-line antithyroid therapy'}] };
      }
    },
    {
      id:'ptu',
      name:'Propylthiouracil (PTU)',
      examples:'e.g. 200–400 mg/day in divided doses, reduce to maintenance',
      step:'1st trimester / storm / carbimazole-intolerant',
      source:'NICE NG145 · BNF',
      sideEffects:'Agranulocytosis, hepatotoxicity (rare severe — can be fatal), rash',
      monitor:'TFTs; warn re sore throat/fever; liver symptoms',
      counsel:'"We use this version in early pregnancy and in severe cases. Same urgent rule about sore throat/fever and a blood test — and tell us about any yellowing of the skin or severe tummy pain."',
      detail:{ 'Key teaching':'Preferred in the first trimester and in thyroid storm (also blocks peripheral T4→T3). Reserve otherwise because of a small risk of severe hepatotoxicity. Switch to carbimazole after the first trimester where possible.' },
      evaluate(f){
        if (f.pregnant_t1) return { tier:'preferred', reasons:[{kind:'good', text:'First trimester — preferred over carbimazole'}] };
        if (f.storm) return { tier:'preferred', reasons:[{kind:'good', text:'Thyroid storm — blocks T4→T3 conversion; preferred acutely'}] };
        const r = [{kind:'neutral', text:'Reserve for carbimazole intolerance — higher severe-hepatotoxicity risk'}];
        return { tier:'acceptable', reasons:r };
      }
    },
    {
      id:'betablocker',
      name:'Beta-blocker (propranolol)',
      examples:'Propranolol 10–40 mg TDS for symptom relief',
      step:'Symptom control — adjunct',
      source:'NICE NG145 · CKS',
      sideEffects:'Bronchospasm (asthma), fatigue, bradycardia',
      monitor:'Short-term until antithyroid drug takes effect',
      counsel:'"While the main treatment kicks in, this quickly eases the racing heart, tremor and anxiety. It\'s usually short-term."',
      detail:{ 'Key teaching':'Adjunct for adrenergic symptoms while awaiting antithyroid effect / radioiodine. Non-selective propranolol also slightly reduces T4→T3 conversion.' },
      evaluate(f){
        if (f.asthma) return { tier:'acceptable', reasons:[{kind:'bad', text:'Asthma — avoid non-selective; if essential use cardioselective (e.g. bisoprolol) cautiously or a rate-limiting CCB (diltiazem)'}] };
        if (f.symptomatic || f.storm) return { tier:'preferred', reasons:[{kind:'good', text:'Rapid symptom relief while antithyroid therapy takes effect'}] };
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Useful short-term symptomatic adjunct'}] };
      }
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
      detail:{ 'Key teaching':'First-line definitive option for Graves\'/toxic nodular disease per NICE, unless contraindicated. Avoid in pregnancy/breastfeeding; caution/relative contraindication in active thyroid eye disease (can worsen — steroid cover).' },
      evaluate(f){
        if (f.pregnant_t1 || f.pregnant_late || f.planning) return { tier:'avoid', reasons:[{kind:'bad', text:'Pregnancy/breastfeeding/planning — radioiodine contraindicated; avoid conception for months after'}] };
        if (f.eye) return { tier:'acceptable', reasons:[{kind:'bad', text:'Active thyroid eye disease — can worsen; needs steroid cover / specialist decision'}] };
        const r = [];
        if (f.nodular) r.push({kind:'good', text:'Toxic nodular disease — effective definitive treatment'});
        if (f.relapse) r.push({kind:'good', text:'Relapsed Graves\' after a drug course — consider definitive treatment'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Specialist definitive option; counsel re resulting hypothyroidism'}] };
      }
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
      evaluate(f){
        if (f.large_goitre) return { tier:'preferred', reasons:[{kind:'good', text:'Large/compressive goitre or suspicious nodule — surgery is the definitive choice'}] };
        if (f.eye) return { tier:'acceptable', reasons:[{kind:'good', text:'Active eye disease — surgery avoids the radioiodine flare risk'}] };
        return { tier:'acceptable', reasons:[{kind:'neutral', text:'Definitive option for selected patients / patient choice'}] };
      }
    },
  ],

  sources: [
    { label:'NICE NG145 — Thyroid disease: assessment and management', url:'https://www.nice.org.uk/guidance/ng145' },
    { label:'NICE CKS — Hyperthyroidism', url:'https://cks.nice.org.uk/topics/hyperthyroidism/' },
    { label:'BNF — Carbimazole / Propylthiouracil', url:'https://bnf.nice.org.uk/drugs/carbimazole/' },
  ],
});
