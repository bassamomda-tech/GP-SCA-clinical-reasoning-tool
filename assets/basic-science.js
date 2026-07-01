/* ============================================
   Reasoning GP — Basic Science tool
   Two domains: Pathophysiology (of common cases)
   and Pharmacology (pharmacodynamics of common drugs).
   Launcher (domain toggle + grouped, searchable) +
   hash-routed reference card. Cross-links cases ↔ drugs.
   Data: window.RGP_BASICSCIENCE (basic-science-*.js)
   ============================================ */
(function(){
  'use strict';

  const SYSTEM_ORDER = [
    'Cardiovascular','Respiratory','Endocrine & Metabolic','Renal','Gastrointestinal',
    'Neurology & Mental health','Musculoskeletal','Haematology','Infection & Immunology',
  ];
  const SYSTEM_ICON = {
    'Cardiovascular':'🫀','Respiratory':'🫁','Endocrine & Metabolic':'🧬','Renal':'🫘',
    'Gastrointestinal':'🫃','Neurology & Mental health':'🧠','Musculoskeletal':'🦴',
    'Haematology':'🩸','Infection & Immunology':'🦠',
  };

  const PRE = /\/(cases|tools|pages)\//.test(location.pathname) ? '../' : '';

  function all(){ return (window.RGP_BASICSCIENCE || []).slice(); }
  function byId(id){ return all().find(e => e.id === id) || null; }
  const esc = s => String(s==null?'':s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const rich = s => esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');

  let activeDomain = 'Pathophysiology'; // or 'Pharmacology'

  /* ---------------- Launcher ---------------- */
  function renderLauncher(root){
    const items = all().filter(e => e.domain === activeDomain);
    const groupKey = e => activeDomain === 'Pharmacology' ? (e.class || 'Other') : (e.system || 'Other');

    const groups = new Map();
    items.forEach(e => {
      const g = groupKey(e);
      if (!groups.has(g)) groups.set(g, []);
      groups.get(g).push(e);
    });
    const orderedGroups = [...groups.keys()].sort((a,b)=>{
      if (activeDomain === 'Pharmacology') return a.localeCompare(b);
      const ia = SYSTEM_ORDER.indexOf(a), ib = SYSTEM_ORDER.indexOf(b);
      return (ia<0?99:ia) - (ib<0?99:ib);
    });

    let sections = '';
    for (const g of orderedGroups){
      const list = groups.get(g).sort((a,b)=>a.title.localeCompare(b.title));
      const cards = list.map(e => {
        const search = esc([e.title, e.system, e.class, e.blurb, (e.examples||[]).join(' '), e.id].join(' ').toLowerCase());
        return `<a class="bs-card" href="#${esc(e.id)}" data-search="${search}">
          <span class="bs-ic">${e.icon || (activeDomain==='Pharmacology'?'💊':SYSTEM_ICON[g]) || '🔬'}</span>
          <span class="bs-tx">
            <b>${esc(e.title)}</b>
            <small>${esc(e.blurb||'')}</small>
          </span>
          <span class="bs-arrow">→</span>
        </a>`;
      }).join('');
      const icon = activeDomain==='Pharmacology' ? '💊' : (SYSTEM_ICON[g] || '🔬');
      sections += `<section class="bs-group" data-group>
        <div class="bs-group-head"><span class="bgh-ic">${icon}</span><h2>${esc(g)}</h2><span class="bgh-count">${list.length}</span></div>
        <div class="bs-grid">${cards}</div>
      </section>`;
    }

    root.innerHTML = `
      <div class="tool-breadcrumb">
        <a href="${PRE}index.html">Reasoning GP</a>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="9 6 15 12 9 18"/></svg>
        <span>Tools</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="9 6 15 12 9 18"/></svg>
        <span style="color:var(--ink-2)">Basic Science</span>
      </div>

      <header class="tool-head" data-screen-label="Tool head">
        <span class="eyebrow">Reasoning Tool · Mechanisms behind the medicine</span>
        <h1>Basic science — <em>why</em> the disease behaves, and <em>why</em> the drug works</h1>
        <p>The pathophysiology of common primary-care conditions and the pharmacodynamics of the drugs you prescribe — each one tied back to the practical clinical decision it explains. Use it to teach, to revise for the SCA/AKT, and to answer the patient who asks “but why?”.</p>
      </header>

      <div class="bs-domains" role="tablist">
        <button class="bs-domain ${activeDomain==='Pathophysiology'?'is-active':''}" data-domain="Pathophysiology" role="tab">
          <span class="bsd-ic">🔬</span><span><b>Pathophysiology</b><small>Disease mechanisms + implications</small></span>
        </button>
        <button class="bs-domain ${activeDomain==='Pharmacology'?'is-active':''}" data-domain="Pharmacology" role="tab">
          <span class="bsd-ic">💊</span><span><b>Pharmacodynamics</b><small>How common drugs work</small></span>
        </button>
      </div>

      <div class="ex-controls">
        <div class="ex-search">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="search" id="bsSearch" placeholder="Search ${activeDomain==='Pharmacology'?'drug classes (e.g. ACE inhibitor, SGLT2, statin)':'conditions (e.g. heart failure, asthma, gout)'}…" autocomplete="off"/>
        </div>
        <span class="ex-count-pill"><b id="bsCount">${items.length}</b> ${activeDomain==='Pharmacology'?'drug classes':'topics'}</span>
      </div>

      <div id="bsGroups">${sections}</div>
      <div class="ex-empty" id="bsEmpty">No ${activeDomain==='Pharmacology'?'drug classes':'topics'} match — try another term.</div>

      <div class="ex-foot">
        <strong>Educational use only.</strong> Mechanisms are simplified for clinical reasoning and revision. Always prescribe and act on current BNF / NICE / MHRA guidance — see the linked cases and tools for management detail.
      </div>
    `;

    // Domain toggle
    root.querySelectorAll('.bs-domain').forEach(b => {
      b.addEventListener('click', () => {
        if (activeDomain === b.dataset.domain) return;
        activeDomain = b.dataset.domain;
        renderLauncher(root);
      });
    });

    // Search
    const input = root.querySelector('#bsSearch');
    const empty = root.querySelector('#bsEmpty');
    const count = root.querySelector('#bsCount');
    input?.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      let visible = 0;
      root.querySelectorAll('.bs-card').forEach(c => {
        const match = !q || c.dataset.search.includes(q);
        c.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      root.querySelectorAll('[data-group]').forEach(g => {
        const any = [...g.querySelectorAll('.bs-card')].some(c => c.style.display !== 'none');
        g.style.display = any ? '' : 'none';
      });
      if (count) count.textContent = visible;
      if (empty) empty.classList.toggle('show', visible === 0);
    });

    // Left category filter rail (GPatlas-style), like Pathways
    if (window.RGP_buildRail) window.RGP_buildRail({
      page: root, controls: '.ex-controls', group: '.bs-group', card: '.bs-card',
      gridClass: 'bs-grid', search: '#bsSearch', shown: '#bsCount', empty: '.ex-empty',
      foot: '.ex-foot', groupName: 'h2',
      chapterHeading: activeDomain === 'Pharmacology' ? 'Drug class' : 'Body system',
      takeOverSearch: true
    });
  }

  /* ---------------- Detail card ---------------- */
  function sectionList(title, arr){
    if (!arr || !arr.length) return '';
    return `<div class="bs-sec"><h3 class="bs-sec-h">${esc(title)}</h3>
      <ul class="bs-list">${arr.map(x => `<li>${rich(x)}</li>`).join('')}</ul></div>`;
  }
  function sectionPairs(title, arr, kLabel, vLabel, variant){
    if (!arr || !arr.length) return '';
    const k = arr[0].clue!=null?'clue': arr[0].effect!=null?'effect': arr[0].ae!=null?'ae': arr[0].point!=null?'point':'step';
    const v = arr[0].why!=null?'why': arr[0].mechanism!=null?'mechanism': arr[0].detail!=null?'detail':'detail';
    return `<div class="bs-sec"><h3 class="bs-sec-h">${esc(title)}</h3>
      <div class="bs-pairs ${variant||''}">
        ${arr.map(row => `<div class="bs-pair">
          <div class="bs-pair-k">${rich(row[k]||'')}</div>
          <div class="bs-pair-v">${rich(row[v]||'')}</div>
        </div>`).join('')}
      </div></div>`;
  }

  function renderDetail(root, e){
    const groupLabel = e.domain === 'Pharmacology' ? e.class : e.system;
    const linkBits = [];
    const L = e.links || {};
    if (L.case)  linkBits.push(`<a class="ex-link" href="${PRE}${L.case}">📋 ${esc(L.caseLabel||'Related case')}</a>`);
    if (L.case2) linkBits.push(`<a class="ex-link" href="${PRE}${L.case2}">📋 ${esc(L.case2Label||'Related case')}</a>`);
    if (L.drug)  linkBits.push(`<a class="ex-link" href="#${esc(L.drug)}">💊 ${esc(L.drugLabel||'Drug class')}</a>`);
    if (L.patho) linkBits.push(`<a class="ex-link" href="#${esc(L.patho)}">🔬 ${esc(L.pathoLabel||'Pathophysiology')}</a>`);
    if (L.calculator) linkBits.push(`<a class="ex-link" href="${PRE}${L.calculator}">🧮 ${esc(L.calculatorLabel||'Calculator')}</a>`);
    if (L.algorithm)  linkBits.push(`<a class="ex-link" href="${PRE}${L.algorithm}">🗺️ ${esc(L.algorithmLabel||'Algorithm')}</a>`);

    root.innerHTML = `
      <a class="ex-back" href="#"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="15 18 9 12 15 6"/></svg> All basic science</a>

      <div class="ex-detail-head">
        <div class="ex-dh-ic">${e.icon || '🔬'}</div>
        <div>
          <div class="ex-dh-sys">${esc(e.domain)} · ${esc(groupLabel||'')}</div>
          <h1>${esc(e.title)}</h1>
          ${e.blurb?`<p>${rich(e.blurb)}</p>`:''}
        </div>
      </div>

      ${e.examples && e.examples.length ? `<div class="bs-sec"><h3 class="bs-sec-h">Agents in this class</h3><div class="ex-chips">${e.examples.map(x=>`<span class="ex-chip ex-chip-eq">${rich(x)}</span>`).join('')}</div></div>`:''}

      ${sectionList(e.domain==='Pharmacology'?'Mechanism of action':'Core mechanism', e.mechanism || e.moa)}

      ${sectionPairs('Step-by-step', e.cascade, '', '', 'bs-cascade')}

      ${sectionPairs(e.domain==='Pharmacology'?'Therapeutic effects — and why':'', e.effects)}

      ${sectionPairs('Adverse effects — and why', e.adverse)}

      ${sectionPairs(e.domain==='Pharmacology'?'Practical prescribing & monitoring':'Practical clinical implications', e.implications || e.practical, '', '', 'bs-impl')}

      ${sectionList('Clinical pearls', e.pearls)}

      ${e.note?`<div class="ex-keynote">${rich(e.note)}</div>`:''}

      ${linkBits.length?`<div class="bs-sec"><h3 class="bs-sec-h">Connect</h3><div class="ex-links">${linkBits.join('')}</div></div>`:''}
    `;

    root.querySelector('.ex-back')?.addEventListener('click', (ev)=>{ ev.preventDefault(); location.hash=''; });
  }

  /* ---------------- Router ---------------- */
  function route(){
    const root = document.getElementById('bsRoot');
    if (!root) return;
    const id = (location.hash||'').replace(/^#/,'').trim();
    const e = id ? byId(id) : null;
    if (e){
      // ensure the domain matches the entry so a deep-link from search works
      activeDomain = e.domain;
      renderDetail(root, e);
      window.scrollTo({ top:0, behavior:'auto' });
    } else {
      renderLauncher(root);
    }
  }

  function init(){
    const root = document.getElementById('bsRoot');
    if (!root) return;
    if (!window.RGP_BASICSCIENCE){
      root.innerHTML = '<div style="padding:40px;color:var(--muted)">Basic-science dataset not loaded.</div>';
      return;
    }
    route();
    window.addEventListener('hashchange', route);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
