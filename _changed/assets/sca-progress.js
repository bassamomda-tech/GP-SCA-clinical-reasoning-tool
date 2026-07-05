/* ================================================================
   Reasoning GP — SCA progress + analytics store
   window.RGPScaProgress — persists Hot Seat scorecard attempts to
   localStorage and derives readiness, domain-weakness and
   spaced-repetition review scheduling.  Read by tools/sca-analytics.html
   and written by the "Log this attempt" button in the Hot Seat.
   ================================================================ */
window.RGPScaProgress = (function () {
  'use strict';
  var KEY = 'rgp-sca-progress-v1';
  var CAP = 600;

  // RCGP-style band thresholds (fraction of total marks)
  var BORDER = 0.515, PASS = 0.758;

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }

  function band(pct) {
    if (pct < 0.33) return { key: 'below', label: 'Below pass', icon: '🔴' };
    if (pct < BORDER) return { key: 'borderline', label: 'Borderline', icon: '🟠' };
    if (pct < PASS) return { key: 'pass', label: 'Pass standard', icon: '🟢' };
    return { key: 'strong', label: 'Strong pass', icon: '🟢' };
  }

  // Spaced-repetition interval (ms) from performance — weaker = sooner
  var DAY = 86400000;
  function interval(pct) {
    if (pct < BORDER) return 1 * DAY;   // weak → tomorrow
    if (pct < PASS) return 5 * DAY;     // pass → this week
    return 14 * DAY;                    // strong → a fortnight
  }

  function logAttempt(a) {
    var all = load();
    all.push({
      ts: Date.now(),
      caseId: a.caseId || '',
      title: a.title || '',
      system: a.system || '',
      got: a.got || { gs: 0, tasks: 0, ro: 0 },
      max: a.max || { gs: 0, tasks: 0, ro: 0 },
      total: a.total || 0,
      maxTotal: a.maxTotal || 0
    });
    if (all.length > CAP) all.splice(0, all.length - CAP);
    save(all);
    return all.length;
  }

  function all() { return load().slice().sort(function (x, y) { return x.ts - y.ts; }); }

  function readiness() {
    var a = load();
    if (!a.length) return { attempts: 0, pct: 0, band: band(0), last: null };
    var g = 0, m = 0;
    a.forEach(function (r) { g += r.total; m += r.maxTotal; });
    var pct = m ? g / m : 0;
    return { attempts: a.length, pct: pct, band: band(pct), last: a[a.length - 1] };
  }

  function domainStats() {
    var a = load();
    var acc = { gs: { g: 0, m: 0 }, tasks: { g: 0, m: 0 }, ro: { g: 0, m: 0 } };
    a.forEach(function (r) {
      ['gs', 'tasks', 'ro'].forEach(function (k) {
        acc[k].g += (r.got && r.got[k]) || 0;
        acc[k].m += (r.max && r.max[k]) || 0;
      });
    });
    var out = {};
    var weakest = null, weakPct = 2;
    ['gs', 'tasks', 'ro'].forEach(function (k) {
      var pct = acc[k].m ? acc[k].g / acc[k].m : 0;
      out[k] = { got: acc[k].g, max: acc[k].m, pct: pct };
      if (acc[k].m && pct < weakPct) { weakPct = pct; weakest = k; }
    });
    out.weakest = weakest;
    out.any = a.length > 0;
    return out;
  }

  // chronological readiness series (per attempt, cumulative-free = raw attempt pct)
  function series() {
    return all().map(function (r) {
      return { ts: r.ts, pct: r.maxTotal ? r.total / r.maxTotal : 0, title: r.title, caseId: r.caseId };
    });
  }

  // one row per case: best + latest performance, next review date
  function caseSummary() {
    var a = all();
    var byId = {};
    a.forEach(function (r) {
      if (!r.caseId) return;
      var s = byId[r.caseId] || (byId[r.caseId] = { caseId: r.caseId, title: r.title, system: r.system, attempts: 0, best: 0, lastPct: 0, lastTs: 0 });
      var pct = r.maxTotal ? r.total / r.maxTotal : 0;
      s.attempts++;
      if (pct > s.best) s.best = pct;
      s.lastPct = pct; s.lastTs = r.ts; s.title = r.title || s.title; s.system = r.system || s.system;
    });
    return Object.keys(byId).map(function (id) {
      var s = byId[id];
      s.band = band(s.lastPct);
      s.nextDue = s.lastTs + interval(s.lastPct);
      s.due = Date.now() >= s.nextDue;
      return s;
    });
  }

  function dueForReview() {
    return caseSummary().filter(function (s) { return s.due; })
      .sort(function (x, y) { return x.lastPct - y.lastPct; });
  }

  function weakCases() {
    return caseSummary().sort(function (x, y) { return x.best - y.best; });
  }

  function clear() { save([]); }

  return {
    logAttempt: logAttempt, all: all, readiness: readiness,
    domainStats: domainStats, series: series, caseSummary: caseSummary,
    dueForReview: dueForReview, weakCases: weakCases, band: band, clear: clear,
    BORDER: BORDER, PASS: PASS
  };
})();
