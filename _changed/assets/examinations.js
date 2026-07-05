/* ============================================
   Reasoning GP — Examinations tool
   Launcher (grouped, searchable) + hash-routed
   reference card per examination, with an optional
   decision-pathway view for diagnostic exams.
   Data: window.RGP_EXAMINATIONS (examinations-data-*.js)
   ============================================ */
(function(){
  'use strict';

  const SYSTEM_ORDER = [
    'Cardiovascular','Respiratory','Abdominal & GI','Neurological','Musculoskeletal',
    'ENT, Neck & Thyroid','Ophthalmology','Breast','Vascular & Diabetic foot',
    'Skin','Lymphoreticular','Mental health & Cognitive','Paediatric',
  ];
  const SYSTEM_ICON = {
    'Cardiovascular':'🫀','Respiratory':'🫁','Abdominal & GI':'🫃','Neurological':'🧠',
    'Musculoskeletal':'🦴','ENT, Neck & Thyroid':'👂','Ophthalmology':'👁️','Breast':'🎗️',
    'Vascular & Diabetic foot':'🦶','Skin':'🔬','Lymphoreticular':'🩸',
    'Mental health & Cognitive':'🧩','Paediatric':'🧒',
  };

  const PRE = /\/(cases|tools|pages)\//.test(location.pathname) ? '../' : '';

  function all(){ return (window.RGP_EXAMINATIONS || []).slice(); }
  function byId(id){ return all().find(e => e.id === id) || null; }
  const esc = s => String(s==null?'':s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  // allow a tiny bit of inline emphasis authored in data
  const rich = s => esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');

  /* ---------------- Launcher ---------------- */
  function renderLauncher(root){
    const items = all();
    const groups = new Map();
    items.forEach(e => {
      const g = e.system || 'Other';
      if (!groups.has(g)) groups.set(g, []);
      groups.get(g).push(e);
    });
    const orderedGroups = [...groups.keys()].sort((a,b)=>{
      const ia = SYSTEM_ORDER.indexOf(a), ib = SYSTEM_ORDER.indexOf(b);
      return (ia<0?99:ia) - (ib<0?99:ib);
    });

    let sections = '';
    for (const g of orderedGroups){
      const list = groups.get(g).sort((a,b)=>a.title.localeCompare(b.title));
      const cards = list.map(e => {
        const search = esc([e.title, e.system, e.blurb, (e.indications||[]).join(' '), e.id].join(' ').toLowerCase());
        const path = e.pathway ? '🗺️ pathway' : `${(e.indications||[]).length} indications`;
        return `<a class="ex-card" href="#${esc(e.id)}" data-search="${search}">
          <span class="ex-ic">${e.icon || SYSTEM_ICON[g] || '🩺'}</span>
          <span class="ex-tx">
            <b>${esc(e.title)}</b>
            <small>${esc(e.blurb||'')}</small>
            <span class="ex-meta">${e.pathway?'<span class="ex-flag-path">Pathway</span>':''}${(e.redFlags&&e.redFlags.length)?'<span class="ex-flag-red">Red flags</span>':''}</span>
          </span>
          <span class="ex-arrow">→</span>
        </a>`;
      }).join('');
      sections += `<section class="ex-group" data-group="${esc(g.toLowerCase())}">
        <div class="ex-group-head"><span class="egh-ic">${SYSTEM_ICON[g]||'🩺'}</span><h2>${esc(g)}</h2><span class="egh-count">${list.length}</span></div>
        <div class="ex-grid">${cards}</div>
      </section>`;
    }

    root.innerHTML = `
      <div class="tool-breadcrumb">
        <a href="${PRE}index.html">Reasoning GP</a>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="9 6 15 12 9 18"/></svg>
        <span>Tools</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="9 6 15 12 9 18"/></svg>
        <span style="color:var(--ink-2)">Examinations</span>
      </div>
      <header class="tool-head" data-screen-label="Examination tool">
        <span class="eyebrow">Reasoning Tool · Clinical examination</span>
        <h1>Clinical <em>examinations</em> — indications, technique &amp; interpretation</h1>
        <p>A primary-care examination reference: when to examine, exactly how to perform each component and special test, what a positive finding suggests, the pitfalls, the red flags that demand referral, and a decision pathway for the diagnostic exams. Pick an examination to open its card.</p>
      </header>
      <div class="ex-controls">
        <div class="ex-search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="search" id="exSearch" placeholder="Search examinations — e.g. shoulder, cranial nerves, thyroid, red eye…" autocomplete="off" />
        </div>
        <span class="ex-count-pill"><b id="exShown">${items.length}</b> / ${items.length} examinations</span>
      </div>
      <div class="ex-empty" id="exEmpty">No examination matches that search.</div>
      ${sections}
      <div class="ex-foot"><strong>Educational use.</strong> Authored to RCGP / UK primary-care standards. A reference and revision aid — always integrate with the individual patient's history and your clinical judgement.</div>
    `;

    const input = root.querySelector('#exSearch');
    const cards = [...root.querySelectorAll('.ex-card')];
    const grps = [...root.querySelectorAll('.ex-group')];
    const shown = root.querySelector('#exShown');
    const empty = root.querySelector('#exEmpty');
    function apply(){
      const q = input.value.trim().toLowerCase();
      let n = 0;
      cards.forEach(c => { const m = !q || c.dataset.search.includes(q); c.style.display = m?'':'none'; if(m)n++; });
      grps.forEach(g => { const any = [...g.querySelectorAll('.ex-card')].some(c=>c.style.display!=='none'); g.style.display = any?'':'none'; });
      shown.textContent = n; empty.classList.toggle('show', n===0);
    }
    input.addEventListener('input', apply);

    // Left category filter rail (GPatlas-style), like Pathways
    if (window.RGP_buildRail) window.RGP_buildRail({
      page: root, controls: '.ex-controls', group: '.ex-group', card: '.ex-card',
      gridClass: 'ex-grid', search: '#exSearch', shown: '#exShown', empty: '.ex-empty',
      foot: '.ex-foot', groupName: 'h2', chapterHeading: 'Body system', takeOverSearch: true
    });
  }

  /* ---------------- Detail card ---------------- */
  function chipList(arr, cls){
    if (!arr || !arr.length) return '';
    return `<div class="ex-chips">${arr.map(x=>`<span class="ex-chip ${cls||''}">${rich(x)}</span>`).join('')}</div>`;
  }

  function renderSequence(seq){
    if (!seq || !seq.length) return '';
    return seq.map(phase => {
      const isTests = /special|test|function|manoeuvre|provocation/i.test(phase.phase||'');
      const items = (phase.items||[]).map(it => {
        if (typeof it === 'string') return `<li class="ex-li"><span class="ex-li-name">${rich(it)}</span></li>`;
        const bits = [];
        if (it.how)     bits.push(`<div class="ex-li-row"><span class="ex-li-k">How</span><span>${rich(it.how)}</span></div>`);
        if (it.positive)bits.push(`<div class="ex-li-row"><span class="ex-li-k">Positive</span><span>${rich(it.positive)}</span></div>`);
        if (it.suggests)bits.push(`<div class="ex-li-row"><span class="ex-li-k">Suggests</span><span>${rich(it.suggests)}</span></div>`);
        if (it.finding) bits.push(`<div class="ex-li-row"><span class="ex-li-k">Finding</span><span>${rich(it.finding)}</span></div>`);
        if (it.pitfall) bits.push(`<div class="ex-li-row ex-li-pit"><span class="ex-li-k">Pitfall</span><span>${rich(it.pitfall)}</span></div>`);
        return `<li class="ex-li${bits.length?' ex-li-rich':''}">
          <span class="ex-li-name">${rich(it.name||'')}</span>
          ${bits.join('')}
        </li>`;
      }).join('');
      return `<div class="ex-phase${isTests?' is-tests':''}">
        <div class="ex-phase-h">${esc(phase.phase)}</div>
        <ul class="ex-phase-list">${items}</ul>
      </div>`;
    }).join('');
  }

  function renderPathway(path){
    if (!path || !path.length) return '';
    const steps = path.map((s,i) => {
      const branches = (s.branches||[]).map(b => `
        <div class="ex-pw-branch">
          <div class="ex-pw-cond">${rich(b.condition||b.dx||'')}</div>
          ${b.clues?`<div class="ex-pw-clues">${rich(b.clues)}</div>`:''}
          ${b.primaryCare?`<div class="ex-pw-line"><span class="ex-pw-k ex-pc">Primary care</span><span>${rich(b.primaryCare)}</span></div>`:''}
          ${b.refer?`<div class="ex-pw-line"><span class="ex-pw-k ex-rf">Refer</span><span>${rich(b.refer)}</span></div>`:''}
        </div>`).join('');
      return `<div class="ex-pw-step">
        <div class="ex-pw-num">${i+1}</div>
        <div class="ex-pw-body">
          <div class="ex-pw-q">${rich(s.q||s.question||'')}</div>
          ${s.note?`<div class="ex-pw-note">${rich(s.note)}</div>`:''}
          ${branches?`<div class="ex-pw-branches">${branches}</div>`:''}
        </div>
      </div>`;
    }).join('<div class="ex-pw-connector"></div>');
    return `<section class="ex-sec"><h3 class="ex-sec-h">🗺️ Diagnostic pathway</h3><div class="ex-pathway">${steps}</div></section>`;
  }

  function renderTriage(tri){
    if (!tri || !tri.length) return '';
    const groups = tri.map(g => {
      const cards = (g.items||[]).map(it => {
        const rows = [];
        if (it.reassure) rows.push(`<div class="ex-tri-row r-green"><span class="ex-tri-k">Reassure</span><span>${rich(it.reassure)}</span></div>`);
        if (it.followup) rows.push(`<div class="ex-tri-row r-amber"><span class="ex-tri-k">Follow up</span><span>${rich(it.followup)}</span></div>`);
        if (it.refer)    rows.push(`<div class="ex-tri-row r-red"><span class="ex-tri-k">Refer</span><span>${rich(it.refer)}</span></div>`);
        return `<div class="ex-tri">
          <div class="ex-tri-find">${rich(it.finding)}</div>
          ${rows.join('')}
        </div>`;
      }).join('');
      return `<div class="ex-tri-grp">${g.group?`<h4 class="ex-tri-gh">${esc(g.group)}</h4>`:''}<div class="ex-tri-list">${cards}</div></div>`;
    }).join('');
    return `<section class="ex-sec"><h3 class="ex-sec-h">Common findings — reassure, follow up or refer</h3>
      <div class="ex-triage">${groups}</div></section>`;
  }

  function renderOutcomes(out){
    if (!out || !out.length) return '';
    const rows = out.map(o => `<tr><td>${rich(o.finding)}</td><td>${rich(o.meaning)}</td></tr>`).join('');
    return `<section class="ex-sec"><h3 class="ex-sec-h">Possible findings &amp; what they mean</h3>
      <table class="ex-outcomes"><thead><tr><th>Finding</th><th>Interpretation / outcome</th></tr></thead><tbody>${rows}</tbody></table></section>`;
  }

  const CF_TIERS = {
    reassure: { label:'Reassure', cls:'cf-reassure' },
    followup: { label:'Follow-up', cls:'cf-followup' },
    refer:    { label:'Refer', cls:'cf-refer' },
    urgent:   { label:'Urgent / same-day', cls:'cf-urgent' },
  };
  function renderCommonFindings(cf){
    if (!cf || !cf.length) return '';
    const groups = cf.filter(g => g.items && g.items.length);
    if (!groups.length) return '';
    const blocks = groups.map(g => {
      const rows = g.items.map(it => {
        const t = CF_TIERS[it.action] || CF_TIERS.followup;
        return `<tr>
          <td class="cf-find">${rich(it.finding)}</td>
          <td class="cf-act"><span class="cf-pill ${t.cls}">${t.label}</span></td>
          <td class="cf-detail">${rich(it.detail||'')}</td>
        </tr>`;
      }).join('');
      return `<div class="cf-group">
        ${g.group?`<h4 class="cf-group-h">${rich(g.group)}</h4>`:''}
        <table class="ex-outcomes cf-table"><thead><tr><th>Finding</th><th>Action</th><th>What to do</th></tr></thead><tbody>${rows}</tbody></table>
      </div>`;
    }).join('');
    return `<section class="ex-sec"><h3 class="ex-sec-h">Common findings — when to reassure, follow up or refer</h3>
      <div class="cf-legend"><span class="cf-pill cf-reassure">Reassure</span><span class="cf-pill cf-followup">Follow-up</span><span class="cf-pill cf-refer">Refer</span><span class="cf-pill cf-urgent">Urgent / same-day</span></div>
      <div class="cf-wrap">${blocks}</div></section>`;
  }

  function renderLinks(links){
    if (!links) return '';
    const map = [
      ['case', '📋', 'Full case', PRE],
      ['algorithm', '🗺️', 'Algorithm', PRE],
      ['leaflet', '📄', 'Patient leaflet', PRE],
      ['calc', '🧮', 'Calculator', PRE],
      ['calculator', '🧮', 'Calculator', PRE],
      ['article', '📚', 'Reference', PRE],
    ];
    const out = map.filter(([k]) => links[k]).map(([k,ic,label]) =>
      `<a class="ex-link" href="${PRE}${esc(links[k])}"><span>${ic}</span> ${label}${links[k+'Label']?` — ${esc(links[k+'Label'])}`:''}</a>`
    ).join('');
    if (!out) return '';
    return `<section class="ex-sec"><h3 class="ex-sec-h">Connect</h3><div class="ex-links">${out}</div></section>`;
  }

  function renderDetail(root, e){
    const redFlags = (e.redFlags && e.redFlags.length)
      ? `<div class="ex-redflags"><div class="ex-rf-h">🚩 Red flags — urgent / same-day referral</div><ul>${e.redFlags.map(f=>`<li>${rich(f)}</li>`).join('')}</ul></div>`
      : '';
    root.innerHTML = `
      <div class="tool-breadcrumb">
        <a href="${PRE}index.html">Reasoning GP</a>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="9 6 15 12 9 18"/></svg>
        <a href="#" class="ex-back-crumb">Examinations</a>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="9 6 15 12 9 18"/></svg>
        <span style="color:var(--ink-2)">${esc(e.title)}</span>
      </div>

      <a class="ex-back" href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg> All examinations</a>

      <header class="ex-detail-head" data-screen-label="${esc(e.title)} exam">
        <div class="ex-dh-ic">${e.icon || SYSTEM_ICON[e.system] || '🩺'}</div>
        <div>
          <span class="ex-dh-sys">${esc(e.system||'')}</span>
          <h1>${esc(e.title)}</h1>
          ${e.blurb?`<p>${rich(e.blurb)}</p>`:''}
        </div>
      </header>

      ${(e.indications&&e.indications.length)?`<section class="ex-sec"><h3 class="ex-sec-h">Indications — when to examine</h3>${chipList(e.indications,'ex-chip-ind')}</section>`:''}
      ${(e.equipment&&e.equipment.length)?`<section class="ex-sec"><h3 class="ex-sec-h">Equipment</h3>${chipList(e.equipment,'ex-chip-eq')}</section>`:''}

      ${redFlags}

      ${renderPathway(e.pathway)}

      ${(e.sequence&&e.sequence.length)?`<section class="ex-sec"><h3 class="ex-sec-h">Examination sequence &amp; items</h3><div class="ex-phases">${renderSequence(e.sequence)}</div></section>`:''}

      ${renderTriage(e.triage)}

      ${renderOutcomes(e.outcomes)}

      ${renderCommonFindings(e.commonFindings)}

      ${e.note?`<div class="ex-keynote"><strong>Clinical pearl.</strong> ${rich(e.note)}</div>`:''}

      ${renderLinks(e.links)}
    `;
    root.querySelectorAll('.ex-back, .ex-back-crumb').forEach(a => a.addEventListener('click', (ev)=>{ ev.preventDefault(); location.hash=''; }));
    window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  }

  /* ---------------- Router ---------------- */
  function route(){
    const root = document.getElementById('examRoot');
    if (!root) return;
    const id = (location.hash||'').replace(/^#/,'').trim();
    if (id && byId(id)) renderDetail(root, byId(id));
    else renderLauncher(root);
  }

  function init(){
    if (!document.getElementById('examRoot')) return;
    if (!(window.RGP_EXAMINATIONS||[]).length){ setTimeout(init, 40); return; }
    route();
    window.addEventListener('hashchange', route);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
