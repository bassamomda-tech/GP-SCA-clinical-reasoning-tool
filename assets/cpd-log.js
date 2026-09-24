/* ============================================================
   Reasoning GP — CPD case logger (shared)
   Lets the Consult Scribe and Consultation Spine push a real
   clinical consultation into the CPD log as a case-based entry,
   so it appears under "Case walkthroughs" on the CPD dashboard
   with editable credits + reflection.
   Writes to the same store the tracker/dashboard use:
     localStorage 'rgp-cpd-v1' = { "<key>": {href,title,kind,seconds,
        visits,first,last,credits,source,summary,rLearn,rChange,rNeed,reflection} }
   Recorded cases use an href prefix 'cpdcase:' so the dashboard
   groups them as Case and shows them as logged (date + credits),
   not as auto-tracked reading time.
   ============================================================ */
(function(){
  if (window.RGPCPDLog) return;
  var KEY = 'rgp-cpd-v1';
  function load(){ try{ return JSON.parse(localStorage.getItem(KEY)||'{}')||{}; }catch(e){ return {}; } }
  function save(d){ try{ localStorage.setItem(KEY, JSON.stringify(d)); return true; }catch(e){ return false; } }

  function recordCase(opts){
    opts = opts || {};
    var d = load();
    var ts = Date.now();
    var id = 'cpdcase:' + ts + ':' + Math.random().toString(36).slice(2,7);
    var credits = (opts.credits!=null) ? Number(opts.credits) : 0.5;   // default 30 min
    if (!(credits >= 0)) credits = 0.5;
    var rec = {
      href: id,
      title: (opts.title && String(opts.title).trim()) || 'Clinical case',
      kind: 'Case',
      seconds: Math.round(credits * 3600),
      credits: credits,
      visits: 1,
      first: ts,
      last: ts,
      source: opts.source || '',          // 'Consult Scribe' | 'Consultation Spine'
      summary: opts.summary || '',         // short context line
      rLearn: opts.rLearn || '',
      rChange: opts.rChange || '',
      rNeed: opts.rNeed || '',
      reflection: opts.reflection || ''
    };
    d[id] = rec;
    return save(d) ? rec : null;
  }
  function count(){ var d=load(), n=0; for(var k in d){ if(/^cpdcase:/.test(k)) n++; } return n; }

  window.RGPCPDLog = { recordCase: recordCase, count: count, KEY: KEY };
})();
