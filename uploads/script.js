function toggleSum(which){
  const body = document.getElementById('sum-body-' + which);
  const toggle = document.getElementById('sum-toggle-' + which);
  const icon = toggle.querySelector('.sum-ti-icon');
  const text = toggle.querySelector('.sum-ti-text');
  const isClosed = body.classList.contains('closed');
  if(isClosed){
    body.classList.remove('closed');
    icon.textContent = '▲';
    text.textContent = 'collapse';
  } else {
    body.classList.add('closed');
    icon.textContent = '▼';
    text.textContent = 'expand';
  }
}

function setMode(m){
  document.getElementById('bodyEl').className='mode-'+m;
  ['sca','both','clinic'].forEach(k=>document.getElementById('btn-'+k).classList.toggle('active',k===m));
}

function toggleStep(hdr){
  const body=hdr.nextElementSibling;
  const icon=hdr.querySelector('.sti-icon');
  const text=hdr.querySelector('.sti-text');
  const isOpen=hdr.classList.contains('is-open');
  if(isOpen){
    body.classList.add('closed');
    hdr.classList.remove('is-open');
    icon.textContent='▼';
    text.textContent='expand';
  } else {
    body.classList.remove('closed');
    hdr.classList.add('is-open');
    icon.textContent='▲';
    text.textContent='collapse';
  }
}

function expandAll(){
  document.querySelectorAll('.step-hdr').forEach(h=>{
    h.classList.add('is-open');
    h.nextElementSibling.classList.remove('closed');
    h.querySelector('.sti-icon').textContent='▲';
    h.querySelector('.sti-text').textContent='collapse';
  });
}

function collapseAll(){
  document.querySelectorAll('.step-hdr').forEach(h=>{
    h.classList.remove('is-open');
    h.nextElementSibling.classList.add('closed');
    h.querySelector('.sti-icon').textContent='▼';
    h.querySelector('.sti-text').textContent='expand';
  });
}

function toggleActor(){
  const b=document.getElementById('actor-body');
  const i=document.getElementById('actor-icon');
  b.classList.toggle('open');
  i.textContent=b.classList.contains('open')?'▲ hide':'▼ show';
}

function printSummary(){
  const steps=document.querySelectorAll('.step-wrap');
  const orig=[];
  steps.forEach((s,i)=>{orig[i]=s.style.display;s.style.display='none';});
  const ac=document.querySelector('.card.sca-only');
  const ad=ac?ac.style.display:'';
  if(ac)ac.style.display='none';
  window.print();
  steps.forEach((s,i)=>{s.style.display=orig[i];});
  if(ac)ac.style.display=ad;
}

function calcDrug(){
  const dm=document.getElementById('ds-dm').checked,
    ckd=document.getElementById('ds-ckd').checked,
    cvd=document.getElementById('ds-cvd').checked,
    afro=document.getElementById('ds-afro').checked,
    age55=document.getElementById('ds-age55').checked,
    hf=document.getElementById('ds-hf').checked,
    angina=document.getElementById('ds-angina').checked,
    af=document.getElementById('ds-af').checked,
    cough=document.getElementById('ds-cough').checked;
  const none=!dm&&!ckd&&!cvd&&!afro&&!age55&&!hf&&!angina&&!af&&!cough;
  ['acei','arb','ccb','thiazide','spiro','ab'].forEach(id=>{
    const el=document.getElementById('dc-'+id);
    el.classList.remove('recommended','alt-rec');
    const b=document.getElementById('rec-'+id);
    b.style.cssText='';b.textContent='✓ Recommended';b.style.display='none';
  });
  if(none){
    document.getElementById('ds-output').innerHTML='<span style="font-size:12.5px;color:var(--g)">Select patient characteristics above</span>';
    return;
  }
  let main='',alt='',mainLabel='',altLabel='',why='',altWhy='';
  if(hf){
    main='thiazide';mainLabel='Indapamide SR 1.5mg';
    why='HF with fluid overload: thiazide-like diuretic. Add ACEi + bisoprolol + spiro per NICE NG106 HF guideline.';
    alt='acei';altLabel='+ Ramipril (essential in HFrEF)';altWhy='ACEi + beta-blocker + spiro = cornerstone of HFrEF management';
  } else if(af){
    main='ab';mainLabel='Bisoprolol (rate control + antihypertensive)';
    why='AF: bisoprolol controls rate AND lowers blood pressure. Check CHA₂DS₂-VASc and consider anticoagulation.';
    alt=(dm||ckd)?'acei':'ccb';altLabel='+ ACEi or CCB for BP target';altWhy='Rate control alone may not achieve BP target — add Step 2 drug';
  } else if(cough){
    main='arb';mainLabel='Candesartan / Losartan (ARB)';
    why='ACEi intolerance (cough): switch class to ARB. Identical cardio-renal protection without the cough.';
    alt='';altLabel='';altWhy='';
  } else if(dm||ckd||cvd){
    main='acei';mainLabel='Ramipril (ACEi)';
    why='DM / CKD / CVD: ACEi first-line for cardio-renal protection at ANY age and ANY ethnicity (NICE NG136).';
    alt='arb';altLabel='Candesartan (ARB) — if ACEi cough develops';altWhy='Equal renoprotection. Never combine ACEi + ARB simultaneously.';
  } else if(afro){
    main='ccb';mainLabel='Amlodipine (CCB)';
    why='Afro-Caribbean (no DM): CCB more effective in low-renin hypertension. At Step 2: ARB preferred over ACEi.';
    alt='';altLabel='';altWhy='';
  } else if(age55){
    main='ccb';mainLabel='Amlodipine (CCB)';
    why='Age ≥55 (no DM, no Afro-Caribbean): CCB preferred over ACEi — greater efficacy in lower-renin patients.';
    alt=angina?'acei':'arb';
    altLabel=angina?'+ Ramipril (anti-anginal benefit at Step 2)':'Candesartan (ARB) — if CCB not tolerated';
    altWhy=angina?'ACEi has additional anti-anginal benefit at Step 2':'ARB is equally effective if CCB causes intolerable oedema';
  } else {
    main='acei';mainLabel='Ramipril (ACEi)';
    why='Age <55, non-Afro-Caribbean, no DM/CKD/CVD: ACEi is the Step 1 drug of choice (NICE NG136).';
    alt='arb';altLabel='Candesartan (ARB) — if ACEi cough develops';
    altWhy='Switch to ARB within the RAAS class, not off-class, if cough develops.';
  }

  const m=document.getElementById('dc-'+main);
  m.classList.add('recommended');
  const mb=document.getElementById('rec-'+main);
  mb.style.display='inline-block';

  if(alt){
    const a=document.getElementById('dc-'+alt);
    a.classList.add('alt-rec');
    const ab=document.getElementById('rec-'+alt);
    ab.style.display='inline-block';
    ab.style.background='#dbeafe';
    ab.style.color='#1d4ed8';
    ab.style.borderColor='#bfdbfe';
    ab.textContent='↳ Alternative';
  }

  document.getElementById('ds-output').innerHTML=`
    <div style="font-size:13px;font-weight:700;color:var(--g);margin-bottom:4px">Step 1: ${mainLabel}</div>
    ${alt?`<div style="font-size:12.5px;color:var(--b);margin-bottom:4px">Alternative: ${altLabel}</div>`:''}
    <div style="font-size:12px;color:#15803d;margin-bottom:3px">${why}</div>
    ${altWhy?`<div style="font-size:11.5px;color:var(--b);margin-bottom:3px">${altWhy}</div>`:''}
    <div style="font-size:11px;color:var(--muted);margin-top:5px">Drug card highlighted below ↓ &nbsp;|&nbsp; U&Es within 1 week of starting ACEi/ARB</div>`;
}

function calcScore(){
  var total=0, tasks=0, ro=0, gs=0;
  var allCbs = document.querySelectorAll('.sc-cb');
  allCbs.forEach(function(cb){
    var item = cb.closest('.sc-item');
    if(cb.checked){
      var pts = parseInt(cb.dataset.pts)||0;
      total += pts; tasks += cb.classList.contains('tasks-cb')?pts:0;
      ro += cb.classList.contains('ro-cb')?pts:0; gs += cb.classList.contains('gs-cb')?pts:0;
      item.classList.add('checked');
    } else { item.classList.remove('checked'); }
  });
  document.getElementById('sc-total').textContent = total;
  document.getElementById('sc-tasks-score').textContent = tasks;
  document.getElementById('sc-ro-score').textContent = ro;
  document.getElementById('sc-gs-score').textContent = gs;
  document.getElementById('sc-bar-fill').style.width = Math.round((total/33)*100) + '%';
  var icon, msg;
  if(total < 11){ icon='🔴'; msg='<strong>Not yet at pass standard.</strong> Focus on: exploring ICE including the family history fear, planning ABPM to confirm BP stage, choosing the correct drug for age/ethnicity/comorbidity, sharing the QRISK score as a number, and naming 999 symptoms explicitly. Review Global Skills — are you finishing data gathering by 6-7 minutes?'; }
  else if(total < 17){ icon='🟠'; msg='<strong>Borderline — approaching pass standard.</strong> Core framework present but key items missing. Check: was ABPM planned and explained? Was QRISK shared as a specific percentage? Was the correct drug chosen for the specific comorbidities? Was the family history fear addressed in the plan? Was a 1-week follow-up named?'; }
  else if(total < 25){ icon='🟢'; msg='<strong>Pass standard.</strong> Good clinical reasoning and patient-centred communication. To reach a strong pass: ensure lifestyle advice is specific and measurable, QRISK is shared as a number, and the drug choice rationale is explained in plain language tailored to this patient.'; }
  else { icon='🟢'; msg='<strong>Strong pass.</strong> Excellent consultation across all three domains. ICE fully explored including family fear, BP staging with ABPM, correct drug for phenotype and comorbidities, QRISK shared as a number, lifestyle specific and measurable, 1-2-1 rule named, 999 symptoms explicit, closing question asked.'; }
  document.getElementById('sc-interp-msg').innerHTML = '<div class="interp-icon">'+icon+'</div><div class="interp-text">'+msg+'</div>';
  var missed = [];
  allCbs.forEach(function(cb){ if(!cb.checked){ missed.push(cb.closest('.sc-item').querySelector('.sc-item-text').textContent.trim()); } });
  var ms = document.getElementById('sc-missed-section');
  if(missed.length < allCbs.length && missed.length > 0){
    ms.style.display='block';
    document.getElementById('sc-missed-list').innerHTML = missed.map(function(m){ return '<div class="sc-missed-item">- '+m.substring(0,120)+'</div>'; }).join('');
  } else { ms.style.display='none'; }
}

function resetScorecard(){
  document.querySelectorAll('.sc-cb').forEach(function(cb){ cb.checked=false; cb.closest('.sc-item').classList.remove('checked'); });
  ['sc-total','sc-tasks-score','sc-ro-score','sc-gs-score'].forEach(function(id){ document.getElementById(id).textContent='0'; });
  document.getElementById('sc-bar-fill').style.width='0%';
  document.getElementById('sc-interp-msg').innerHTML='<div class="interp-icon">📋</div><div class="interp-text">Complete the checklist above to see your score interpretation</div>';
  document.getElementById('sc-missed-section').style.display='none';
}
