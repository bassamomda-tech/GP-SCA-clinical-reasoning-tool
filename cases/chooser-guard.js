/* chooser-guard.js — keeps the legacy "Select patient characteristics" quick-reference
   (.ds-wrap) from throwing errors. Several case pages carry a page-specific calcDrug()
   that looks up checkbox/card ids which are not on the page, so the first click threw
   "Cannot read properties of null". This file wraps whichever calcDrug() the page
   defines: if it throws, a generic, error-free summary is shown instead, pointing the
   reader to the drug reference cards. Load it as the last script on the page. */
(function(){
  function generic(){
    var out=document.getElementById('ds-output'); if(!out) return;
    if(out.dataset.initial===undefined) out.dataset.initial=out.innerHTML;
    var wrap=out.closest('.ds-wrap')||document;
    var picked=[].slice.call(wrap.querySelectorAll('input[type=checkbox]:checked')).map(function(c){
      var l=c.closest('label'); return (l?l.textContent:c.id).trim();
    });
    if(!picked.length){ out.innerHTML=out.dataset.initial; return; }
    var esc=function(t){return t.replace(/[&<>"]/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch];});};
    out.innerHTML='<div style="font-size:12.5px;line-height:1.55;color:var(--ink,#222)"><strong>Selected:</strong> '+picked.map(esc).join(' · ')+
      '<br><span style="color:var(--g,#555)">Use the drug reference cards below for choice, cautions and monitoring for these characteristics — this quick reference does not auto-select a drug for this topic. Check doses in the BNF.</span></div>'+
      (out.dataset.initial?'<div style="margin-top:.5rem">'+out.dataset.initial+'</div>':'');
  }
  function wrap(){
    var f=window.calcDrug;
    if(f && f.__guarded) return;
    var g=function(){
      if(typeof f!=='function') return generic();
      var out=document.getElementById('ds-output'), snap=out?out.innerHTML:null;
      try{ return f.apply(this,arguments); }
      catch(e){ if(out&&snap!==null) out.innerHTML=snap; return generic(); }
    };
    g.__guarded=true; window.calcDrug=g;
  }
  window.calcDrugGeneric=window.calcDrugGeneric||generic;
  wrap();
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',wrap);
})();
