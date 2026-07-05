/* ============================================
   Reasoning GP — Medical Calculator Data (supplement 4)
   Date-based calculators — Women's / obstetric · Paediatrics
   Appends to window.RGP_CALCULATORS.
   ============================================ */
(function(){
  if (!window.RGP_CALCULATORS) window.RGP_CALCULATORS = [];

  // --- date helpers (parse YYYY-MM-DD as a calendar date, diff in whole days) ---
  function parseD(s){
    if (!s) return null;
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (!m) return null;
    const d = new Date(Date.UTC(+m[1], +m[2]-1, +m[3]));
    return isNaN(d.getTime()) ? null : d;
  }
  function today(){
    const n = new Date();
    return new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()));
  }
  function addDays(d, n){ return new Date(d.getTime() + n*86400000); }
  function diffDays(a, b){ return Math.round((a.getTime() - b.getTime()) / 86400000); }
  function fmt(d){
    if (!d) return '—';
    const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const mon=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return days[d.getUTCDay()] + ' ' + d.getUTCDate() + ' ' + mon[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
  }
  function wkd(days){
    if (days < 0) return '0+0';
    return Math.floor(days/7) + '+' + (days%7);
  }
  function trimester(days){
    if (days < 14*7) return '1st trimester';
    if (days < 28*7) return '2nd trimester';
    return '3rd trimester';
  }

  window.RGP_CALCULATORS.push(

    // ============================================
    // EDD & gestational age from LMP (Naegele)
    // ============================================
    {
      id: 'edd-lmp',
      title: 'EDD & gestational age (from LMP)',
      category: "Women's / obstetric",
      description: 'Estimated due date and current gestation from the last menstrual period (Naegele\u2019s rule).',
      usefulFor: 'Confirming pregnancy dates before the dating scan; antenatal booking. A USS at 11\u201314 weeks supersedes LMP dating.',
      resultLabel: 'Result', resultUnit:'',
      formula: 'EDD = LMP + 280 days (+ adjustment for cycle length \u2260 28)',
      inputs: [
        { id:'lmp_date', kind:'date', label:'First day of last menstrual period (LMP)', note:'Reliable, certain dates only' },
        { id:'lmp_cycle', kind:'number', label:'Usual cycle length', unit:'days', min:20, max:45, step:1, note:'Optional \u2014 defaults to 28' },
      ],
      compute(v){
        const lmp = parseD(v.lmp_date);
        if (!lmp) return null;
        const cycle = v.lmp_cycle ? Number(v.lmp_cycle) : 28;
        const adj = cycle - 28;
        const edd = addDays(lmp, 280 + adj);
        const gaDays = diffDays(today(), lmp) - adj; // gestational age adjusted to conception timing
        return { display: 'EDD ' + fmt(edd) + '  ·  GA today ' + wkd(gaDays) + ' weeks', edd: edd, gaDays: gaDays };
      },
      interpret(r){
        const d = r.gaDays;
        if (d < 0) return { label:'LMP is in the future', severity:'neutral', action:'Check the date entered.', detail:'' };
        if (d > 300) return { label:'Past dates / post-term range', severity:'med', action:'Re-check dating; if genuinely post-term follow local post-dates pathway.', detail:'Gestation appears > 42 weeks \u2014 likely a date error.' };
        const tri = trimester(d);
        if (d < 70)  return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Arrange booking bloods + dating scan (11\u201314 weeks). Folic acid 400 mcg (5 mg if high-risk).', detail:'EDD ' + fmt(r.edd) + '. Dating USS will confirm/adjust.' };
        if (d < 196) return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Routine antenatal care; anomaly scan ~18\u201320+6 weeks.', detail:'EDD ' + fmt(r.edd) + '.' };
        if (d < 259) return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Third-trimester care; GBS/whooping-cough vaccine; growth surveillance if indicated.', detail:'EDD ' + fmt(r.edd) + '.' };
        if (d < 294) return { label:'Term \u2014 ' + wkd(d) + ' weeks', severity:'med', action:'Term (37\u201342 weeks). Discuss birth plan; monitor for labour.', detail:'EDD ' + fmt(r.edd) + '.' };
        return { label:'Post-term \u2014 ' + wkd(d) + ' weeks', severity:'high', action:'\u2265 42 weeks \u2014 follow post-dates pathway (membrane sweep / induction discussion).', detail:'EDD ' + fmt(r.edd) + '.' };
      },
      refs:[
        { label:'NICE NG201 Antenatal care', url:'https://www.nice.org.uk/guidance/ng201' },
        { label:'NICE CKS Pregnancy dating', url:'https://cks.nice.org.uk/topics/antenatal-care-uncomplicated-pregnancy/' },
      ],
    },

    // ============================================
    // Gestational age from a known EDD (e.g. dating scan)
    // ============================================
    {
      id: 'ga-from-edd',
      title: 'Gestational age (from EDD)',
      category: "Women's / obstetric",
      description: 'Current gestation and trimester from a known estimated due date (e.g. the dating-scan EDD).',
      usefulFor: 'Quick "how many weeks is she?" from the scan EDD \u2014 medication safety, scan timing, referral urgency.',
      resultLabel: 'Result', resultUnit:'',
      formula: 'GA today = 280 \u2212 (EDD \u2212 today),  in weeks+days',
      inputs: [
        { id:'edd_date', kind:'date', label:'Estimated due date (EDD)', note:'From dating scan or LMP' },
      ],
      compute(v){
        const edd = parseD(v.edd_date);
        if (!edd) return null;
        const gaDays = 280 - diffDays(edd, today());
        const conception = addDays(edd, -266);
        return { display: 'GA today ' + wkd(gaDays) + ' weeks  ·  ' + trimester(Math.max(0,gaDays)), gaDays: gaDays, conception: conception };
      },
      interpret(r){
        const d = r.gaDays;
        if (d < 0) return { label:'EDD already passed by ' + Math.abs(d) + ' days', severity:'high', action:'Post-dates \u2014 follow local pathway.', detail:'' };
        const tri = trimester(d);
        if (d < 70)  return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Avoid teratogens; review any medication for pregnancy safety. Approx conception ' + fmt(r.conception) + '.', detail:'Anomaly scan ~18\u201320+6 weeks.' };
        if (d < 196) return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Routine antenatal milestones.', detail:'' };
        if (d < 259) return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Third-trimester care.', detail:'' };
        return { label:'Term \u2014 ' + wkd(d) + ' weeks', severity:'med', action:'Term/near-term \u2014 monitor for labour; reduced fetal movements = same-day assessment.', detail:'' };
      },
      refs:[
        { label:'NICE NG201 Antenatal care', url:'https://www.nice.org.uk/guidance/ng201' },
      ],
    },

    // ============================================
    // Corrected age for prematurity (paediatrics)
    // ============================================
    {
      id: 'corrected-age',
      title: 'Corrected age (prematurity)',
      category: 'Paediatrics',
      description: 'Chronological and corrected age for an infant born preterm.',
      usefulFor: 'Interpreting development, growth charts and immunisation timing for premature babies (correct until ~2 years).',
      resultLabel: 'Result', resultUnit:'',
      formula: 'Corrected age = chronological age \u2212 (40 weeks \u2212 gestation at birth)',
      inputs: [
        { id:'ca_dob', kind:'date', label:'Date of birth' },
        { id:'ca_ga_wk', kind:'number', label:'Gestation at birth \u2014 weeks', unit:'wks', min:22, max:42, step:1 },
        { id:'ca_ga_d',  kind:'number', label:'Gestation at birth \u2014 extra days', unit:'days', min:0, max:6, step:1, note:'Optional' },
      ],
      compute(v){
        const dob = parseD(v.ca_dob);
        if (!dob || !v.ca_ga_wk) return null;
        const gaBirth = Number(v.ca_ga_wk)*7 + Number(v.ca_ga_d||0);
        const chronoDays = diffDays(today(), dob);
        if (chronoDays < 0) return { display:'Date of birth is in the future', err:true };
        const prematureDays = (40*7) - gaBirth;
        const correctedDays = chronoDays - prematureDays;
        const chronoMo = (chronoDays/30.4375);
        const corrMo = (correctedDays/30.4375);
        return {
          display: 'Chronological ' + chronoMo.toFixed(1) + ' mo  ·  Corrected ' + (correctedDays<0?'\u2212':'') + Math.abs(corrMo).toFixed(1) + ' mo',
          chronoDays: chronoDays, correctedDays: correctedDays, prematureDays: prematureDays, gaBirth: gaBirth
        };
      },
      interpret(r){
        if (r.err) return { label:'Check the date', severity:'neutral', action:'Date of birth cannot be in the future.', detail:'' };
        const wkBirth = Math.floor(r.gaBirth/7) + '+' + (r.gaBirth%7);
        const correctUntil = r.chronoDays < 730;
        if (r.gaBirth >= 37*7) return { label:'Born at term (' + wkBirth + ')', severity:'low', action:'No correction needed \u2014 use chronological age.', detail:'Correction only applies to preterm infants.' };
        if (r.correctedDays < 0) return { label:'Corrected age below term-equivalent', severity:'med', action:'Plot growth at corrected age; expect catch-up. Immunise by CHRONOLOGICAL age regardless of prematurity.', detail:'Born ' + wkBirth + '; ' + Math.abs(Math.round(r.correctedDays)) + ' days below term-equivalent.' };
        return { label:'Born preterm (' + wkBirth + ')', severity:'low',
          action: (correctUntil ? 'Use CORRECTED age for development & growth-chart plotting (until ~2 years). ' : 'Past ~2 years \u2014 correction no longer needed. ') + 'Immunise by chronological age.',
          detail: 'Chronological ' + Math.round(r.chronoDays/7) + ' weeks; correction = ' + r.prematureDays + ' days.' };
      },
      refs:[
        { label:'RCPCH growth charts (preterm)', url:'https://www.rcpch.ac.uk/resources/growth-charts' },
        { label:'NICE NG72 Developmental follow-up of preterm', url:'https://www.nice.org.uk/guidance/ng72' },
      ],
    }

  );
})();
