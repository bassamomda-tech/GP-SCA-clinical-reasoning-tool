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

/* calcDrugHTN(): the hypertension drug selector was removed Oct 2026 (Route 1). The case page shows its guidance as static text. */

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

/* Scorecard: stable anchor id + section-nav heading link + collapsible (compressible).
   v2 case pages load this file (not site.js), so wire it here for them. */
(function(){
  function enhance(){
    var wrap=document.querySelector('.scorecard-wrap');
    if(!wrap) return;
    if(!wrap.id) wrap.id='sca-scorecard';
    var nav=document.querySelector('.tb-nav');
    if(nav && !nav.querySelector('a[href="#sca-scorecard"]')){
      var a=document.createElement('a');
      a.href='#sca-scorecard'; a.className='sca-only'; a.textContent='📋 Scorecard';
      var mgmt=nav.querySelector('a[href="#s7"]');
      if(mgmt) mgmt.insertAdjacentElement('afterend',a); else nav.appendChild(a);
    }
    if(wrap.dataset.collapsible) return;
    var hdr=wrap.querySelector('.scorecard-hdr');
    if(!hdr) return;
    wrap.dataset.collapsible='1';
    var body=document.createElement('div');
    body.className='sc-collapse-body';
    var n=hdr.nextSibling;
    while(n){ var nx=n.nextSibling; body.appendChild(n); n=nx; }
    wrap.appendChild(body);
    var chev=document.createElement('span');
    chev.textContent='▼';
    chev.style.cssText='margin-left:8px;color:#fff;font-size:12px;transition:transform .2s ease;flex-shrink:0';
    hdr.appendChild(chev);
    hdr.style.cursor='pointer';
    var collapsed=false;
    function setC(c){ collapsed=c; body.style.display=c?'none':''; chev.style.transform=c?'rotate(-90deg)':''; }
    setC(true);
    hdr.addEventListener('click',function(e){ if(e.target.closest('.sc-reset-btn'))return; setC(!collapsed); });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',enhance);
  else enhance();
})();


/* Medication quick-reference selector (calcDrug / calcDrugGeneric) removed Oct 2026 (Route 1):
   every case page now shows its medication options as a static guideline summary. */
