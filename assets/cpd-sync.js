/* ============================================================
   Reasoning GP — CPD log account sync (RGPCPDSync)
   ------------------------------------------------------------
   Backs up the CPD log (localStorage 'rgp-cpd-v1') to the signed-in
   user's account through the existing Worker endpoint
   /api/data?k=cpd, and pulls it on any other device.

   Local data is ALWAYS the working copy: signed out (or with no
   network) the CPD page works exactly as before. Nothing local is
   ever wiped by a sync — entries only disappear when the user
   deletes them, and that delete is carried to other devices as a
   tombstone.

   Server document (one per account, KV key udata:<email>:cpd):
     { v:2, entries:{ <id>: <entry> }, tomb:{ <id>: <deletedAt ms> }, updated }
   Entries are the same objects the CPD page already stores, minus
   any attached evidence file (evidence stays on the device; only its
   name/type travel).

   Merge (per entry id):
     • activity fields   seconds/visits = max, first = min, last = max
     • user-edited fields (title, credits, reflection…) come from the copy
       with the newer edit time (emod; falls back to mod/last); a field the
       newer copy never had is taken from the other copy
     • tombstone wins only if it is newer than the entry's last change (mod)
       — so re-reading a deleted page later logs it again
   Local sync state: localStorage 'rgp-cpd-sync-v1'
     { owner, optOut, tomb, known[], hash, lastSync, legacy }
   ============================================================ */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;   // node tests
  else if (!root.RGPCPDSync) { root.RGPCPDSync = api; api._boot(); }
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';

  var KEY = 'rgp-cpd-v1';
  var STATE_KEY = 'rgp-cpd-sync-v1';
  var DATA_K = 'cpd';
  var LEGACY_K = 'store:rgp-cpd-v1';           // lossy copy written by older RGPSync builds
  var TOMB_TTL = 400 * 864e5;                  // keep delete markers ~13 months
  var ACT = { seconds: 1, visits: 1, first: 1, last: 1, mod: 1, emod: 1, evidence: 1 };

  /* ---------------- pure merge helpers (unit-tested in node) ---------------- */
  function num(x) { x = Number(x); return isFinite(x) ? x : 0; }
  function modOf(r) { return r ? (num(r.mod) || num(r.last) || num(r.first)) : 0; }
  function emodOf(r) { return r ? num(r.emod) : 0; }
  function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }

  // a = local copy, b = remote copy (ties keep local)
  function mergeEntry(a, b) {
    if (!a) return Object.assign({}, b);
    if (!b) return Object.assign({}, a);
    var ea = emodOf(a), eb = emodOf(b), bNewer;
    if (ea || eb) bNewer = eb > ea; else bNewer = modOf(b) > modOf(a);
    var nw = bNewer ? b : a, old = bNewer ? a : b, o = {}, k;
    for (k in old) if (has(old, k) && !ACT[k]) o[k] = old[k];
    for (k in nw) if (has(nw, k) && !ACT[k]) o[k] = nw[k];
    o.seconds = Math.max(num(a.seconds), num(b.seconds));
    o.visits = Math.max(num(a.visits), num(b.visits));
    var fs = [num(a.first), num(b.first)].filter(Boolean);
    if (fs.length) o.first = Math.min.apply(null, fs);
    o.last = Math.max(num(a.last), num(b.last));
    var m = Math.max(num(a.mod), num(b.mod)); if (m) o.mod = m;
    var em = Math.max(ea, eb); if (em) o.emod = em;
    // evidence: keep a device-local file if either copy still holds it
    var ev = nw.evidence || old.evidence;
    if (ev) {
      var withData = (a.evidence && a.evidence.data) ? a.evidence : ((b.evidence && b.evidence.data) ? b.evidence : null);
      o.evidence = withData && (!ev.name || withData.name === ev.name) ? withData : ev;
    }
    return o;
  }

  // Merge two {entries, tomb} states. Returns a new state.
  function mergeState(local, remote, now) {
    now = now || Date.now();
    local = local || {}; remote = remote || {};
    var le = local.entries || {}, re = remote.entries || {};
    var tomb = {}, k;
    [local.tomb || {}, remote.tomb || {}].forEach(function (t) {
      for (k in t) if (has(t, k)) tomb[k] = Math.max(tomb[k] || 0, num(t[k]));
    });
    var out = {}, ids = {};
    for (k in le) if (has(le, k)) ids[k] = 1;
    for (k in re) if (has(re, k)) ids[k] = 1;
    for (k in ids) {
      var e = mergeEntry(le[k], re[k]);
      if (tomb[k] && tomb[k] >= modOf(e)) continue;      // deleted after its last change
      if (!e.href) e.href = k;
      out[k] = e;
    }
    for (k in tomb) if (now - tomb[k] > TOMB_TTL) delete tomb[k];
    return { entries: out, tomb: tomb };
  }

  // Payload for the server: drop device-only evidence bytes.
  function toPayload(state, now) {
    var ent = {}, k;
    for (k in state.entries) if (has(state.entries, k)) {
      var r = Object.assign({}, state.entries[k]);
      if (r.evidence) r.evidence = { name: r.evidence.name || 'evidence', type: r.evidence.type || '', onDevice: true };
      ent[k] = r;
    }
    return { v: 2, entries: ent, tomb: Object.assign({}, state.tomb || {}), updated: now || Date.now() };
  }

  // Accept the v2 document or the legacy flat {id: entry} map.
  function fromRemote(d) {
    if (!d || typeof d !== 'object') return { entries: {}, tomb: {} };
    if (d.v === 2) return { entries: d.entries || {}, tomb: d.tomb || {} };
    return { entries: d, tomb: {} };
  }

  // Ids that were synced before but are now missing locally → deleted here.
  function implicitDeletes(known, entries, tomb, now) {
    var t = Object.assign({}, tomb || {});
    (known || []).forEach(function (id) { if (!has(entries, id) && !t[id]) t[id] = now; });
    return t;
  }

  function hashStr(s) { var h = 5381, i; s = s || ''; for (i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return s.length + ':' + h; }

  /* ---------------- browser runtime ---------------- */
  var status = { state: 'idle', lastSync: 0, message: '' };
  var busy = false, again = false, lastToken = null, booted = false;

  function ls() { try { return window.localStorage; } catch (e) { return null; } }
  function readJSON(k, dflt) { try { var v = JSON.parse(ls().getItem(k)); return v == null ? dflt : v; } catch (e) { return dflt; } }
  function writeJSON(k, v) { try { ls().setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function raw(k) { try { return ls().getItem(k) || ''; } catch (e) { return ''; } }
  function st() { var s = readJSON(STATE_KEY, {}); return (s && typeof s === 'object') ? s : {}; }
  function setSt(s) { writeJSON(STATE_KEY, s); }

  function apiBase() { var u = (window.RGP_CONFIG || {}).workerUrl; return u ? String(u).replace(/\/$/, '') : null; }
  function token() { try { return ls().getItem('rgp.auth.token.v1'); } catch (e) { return null; } }
  function email() { var m = readJSON('rgp.auth.me.v1', null); return m && m.email ? String(m.email).toLowerCase() : ''; }
  function signedIn() { return !!(apiBase() && token()); }

  function emit(name, detail) { try { window.dispatchEvent(new CustomEvent(name, { detail: detail })); } catch (e) {} }
  function setStatus(state, message) {
    status = { state: state, lastSync: st().lastSync || 0, message: message || '' };
    emit('rgp-cpd-sync-status', status);
  }

  // Record deletions made on this device (cpd.html remove / clear).
  function markDeleted(ids) {
    var s = st(), now = Date.now(); s.tomb = s.tomb || {};
    (ids || []).forEach(function (id) { s.tomb[id] = now; });
    s.pendingTomb = true; setSt(s); schedule(300);
  }

  function dirty() { var s = st(); return hashStr(raw(KEY)) !== s.hash || !!s.pendingTomb; }

  async function call(k, method, body) {
    var res = await fetch(apiBase() + '/api/data?k=' + encodeURIComponent(k), {
      method: method,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token() },
      body: body === undefined ? undefined : JSON.stringify(body)
    });
    var d = await res.json().catch(function () { return {}; });
    if (!res.ok) { var e = new Error(d.error || ('HTTP ' + res.status)); e.status = res.status; e.body = d; throw e; }
    return d;
  }

  function currentState() {
    return { status: status, signedIn: signedIn(), email: email(), owner: st().owner || '', optOut: st().optOut || '' };
  }

  async function syncNow(opts) {
    opts = opts || {};
    if (!apiBase()) { setStatus('local'); return status; }
    if (!token()) { setStatus('signedout'); return status; }
    var me = email(), s = st();
    if (s.optOut && s.optOut === me && !opts.enable) { setStatus('paused'); return status; }
    if (s.owner && me && s.owner !== me && !opts.adopt) { setStatus('other', s.owner); return status; }
    if (opts.statusOnly) { setStatus(s.lastSync ? 'ok' : 'idle'); return status; }
    if (typeof navigator !== 'undefined' && navigator.onLine === false) { setStatus('offline'); return status; }
    if (busy) { again = true; return status; }
    busy = true; setStatus('syncing');
    try {
      var now = Date.now();
      // fold deletions made on this device since the last sync into the tombstones
      var local0 = readJSON(KEY, {}) || {};
      s.tomb = implicitDeletes(s.known, local0, s.tomb, now);
      setSt(s);

      var got = await call(DATA_K, 'GET');
      var remote = fromRemote(got.data), baseTs = got.ts || 0;
      if (!got.data && !s.legacy) {
        try { var lg = await call(LEGACY_K, 'GET'); if (lg && lg.data) remote = mergeState(remote, fromRemote(lg.data), now); } catch (e) {}
      }
      var merged, attempt = 0;
      for (;;) {
        // re-read local right before writing: the reading tracker may have flushed meanwhile
        var localNow = readJSON(KEY, {}) || {};
        merged = mergeState({ entries: localNow, tomb: st().tomb || {} }, remote, now);
        var before = raw(KEY), after = JSON.stringify(merged.entries);
        if (before !== after) {
          if (!writeJSON(KEY, merged.entries)) throw Object.assign(new Error('Device storage is full'), { status: 507 });
          emit('rgp-sync-updated', { keys: [KEY], source: 'cpd' });
        }
        try {
          var put = await call(DATA_K, 'POST', { data: toPayload(merged, now), baseTs: baseTs });
          baseTs = put.ts; break;
        } catch (e) {
          if (e.status === 409 && e.body && attempt++ < 3) { remote = mergeState(remote, fromRemote(e.body.data), now); baseTs = e.body.ts || 0; continue; }
          throw e;
        }
      }
      s = st();
      s.owner = me || s.owner; s.optOut = ''; s.tomb = merged.tomb; s.pendingTomb = false;
      s.known = Object.keys(merged.entries); s.hash = hashStr(raw(KEY)); s.lastSync = Date.now(); s.legacy = true;
      setSt(s);
      setStatus('ok');
    } catch (e) {
      var offline = !e.status || (typeof navigator !== 'undefined' && navigator.onLine === false);
      if (e.status === 401) setStatus('signedout', 'Your session has expired — sign in again to back up.');
      else if (e.status === 413) setStatus('error', 'Your CPD log is too large to back up — remove some older entries.');
      else if (offline) setStatus('offline');
      else setStatus('error', e.message || 'Backup failed — will retry.');
    } finally {
      busy = false;
      if (again) { again = false; schedule(500); }
    }
    return status;
  }

  var timer = null;
  function schedule(ms) { clearTimeout(timer); timer = setTimeout(function () { syncNow(); }, ms || 0); }

  // Delete the server copy (and the legacy copy) and stop syncing for this account.
  async function deleteServer() {
    if (!signedIn()) throw new Error('Sign in first — the server copy belongs to your account.');
    await call(DATA_K, 'DELETE');
    try { await call(LEGACY_K, 'DELETE'); } catch (e) {}
    var s = st(); s.optOut = email() || 'unknown'; s.owner = ''; s.known = []; s.hash = ''; s.lastSync = 0; s.legacy = false;
    setSt(s); setStatus('paused');
    return true;
  }
  function enable() { var s = st(); s.optOut = ''; setSt(s); return syncNow({ enable: true }); }
  function adopt() { var s = st(); s.owner = email(); s.known = []; s.optOut = ''; setSt(s); return syncNow({ adopt: true }); }
  function onSignIn() { lastToken = token(); schedule(200); }

  function _boot() {
    if (booted || typeof window === 'undefined' || !window.localStorage) return; booted = true;
    lastToken = token();
    var s = st(), stale = Date.now() - (s.lastSync || 0) > 120000;
    setTimeout(function () { if (signedIn() && (dirty() || stale)) syncNow(); else syncNow({ statusOnly: true }); }, 1200);
    setInterval(function () {
      var t = token();
      if (t !== lastToken) { lastToken = t; if (t) schedule(300); else setStatus(apiBase() ? 'signedout' : 'local'); return; }
      if (signedIn() && dirty()) syncNow();
    }, 4000);
    window.addEventListener('online', function () { schedule(500); });
    window.addEventListener('offline', function () { if (signedIn()) setStatus('offline'); });
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden' && signedIn() && dirty()) syncNow(); });
  }

  return {
    KEY: KEY, STATE_KEY: STATE_KEY,
    mergeEntry: mergeEntry, mergeState: mergeState, toPayload: toPayload, fromRemote: fromRemote,
    implicitDeletes: implicitDeletes, modOf: modOf,
    syncNow: syncNow, markDeleted: markDeleted, deleteServer: deleteServer, enable: enable, adopt: adopt,
    onSignIn: onSignIn, state: currentState, _boot: _boot
  };
});
