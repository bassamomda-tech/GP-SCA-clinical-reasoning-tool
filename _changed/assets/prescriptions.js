/* ============================================
   Reasoning GP — Ready Prescription Tool
   Single filterable grid that consumes
   window.RGP_PRESCRIPTIONS (defined in
   prescriptions-data.js).

   Layout mirrors the GPatlas-style directory
   pages: a left multi-select filter rail
   (reuses the shared .dir-* styles) + sortable
   results. Shell is built once; only the
   results re-render so search focus persists.
   ============================================ */

(function(){
  const HOST_SELECTOR = '[data-prescriptions]';
  const RKEY = 'rgp-rail-collapsed';

  function slugify(s){
    return (s||'').toLowerCase()
      .replace(/&amp;/g,'and').replace(/&/g,'and')
      .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
  }
  const esc = s => (s==null?'':String(s)).replace(/"/g,'&quot;');

  /* specialty → accent colour + duotone anatomical icon (soft fill + line detail) */
  const SVG = (b) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${b}</svg>`;
  const F = ' fill="currentColor" fill-opacity=".16"';   // duotone fill on the main organ mass
  const CAT_META = {
    'Gastroenterology': { c:'#C2703D', icon: SVG(
      `<path${F} d="M10 3.4a1 1 0 0 1 1 1v1.9a2.4 2.4 0 0 0 2.4 2.4h.3a4.6 4.6 0 0 1 4.6 4.6 4.9 4.9 0 0 1-9.7 1 1 1 0 0 1 1.95-.45 2.9 2.9 0 0 0 5.75-.55 2.6 2.6 0 0 0-2.6-2.6h-.3A4.4 4.4 0 0 1 9 6.3V4.4a1 1 0 0 1 1-1Z"/>`) },
    'Urology & Renal': { c:'#2E6F8E', icon: SVG(
      `<path${F} d="M13.6 4C10 4 7.2 7.6 7.2 12s2.8 8 6.4 8c2.1 0 3.6-1.5 3.6-3.3 0-1.3-.8-2.1-1.9-2.8-.8-.5-1.4-1-1.4-2.1s.6-1.6 1.4-2.1C16.4 9 17.2 8.2 17.2 6.9 17.2 5.2 15.7 4 13.6 4Z"/>`) },
    "Women's & Sexual Health": { c:'#C24D7B', icon: SVG(
      `<circle cx="12" cy="8" r="4.8"${F}/><line x1="12" y1="12.8" x2="12" y2="21"/><line x1="8.6" y1="18" x2="15.4" y2="18"/>`) },
    "Men's & Sexual Health": { c:'#4C5FA6', icon: SVG(
      `<circle cx="9.8" cy="14.2" r="5.3"${F}/><line x1="13.8" y1="10.2" x2="19.5" y2="4.5"/><polyline points="15 4.5 19.5 4.5 19.5 9"/>`) },
    'Dermatology': { c:'#CC7A4A', icon: SVG(
      `<rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.2"${F}/><circle cx="14" cy="14" r="2.4" fill="currentColor" fill-opacity=".38"/><path d="M7.6 8.4h3.2M7.6 11h2.1"/>`) },
    'ENT & Eyes': { c:'#2E8B86', icon: SVG(
      `<path${F} d="M8 9.2a4 4 0 0 1 8 0c0 2.1-1.6 3-2.4 4.1-.5.8-.5 2.1-1.6 2.6a2.1 2.1 0 0 1-2.8-1 .9.9 0 0 1 1.6-.8.6.6 0 0 0 .8.3c.4-.2.4-1 .8-1.7.5-1 2-1.7 2-3.3a2.4 2.4 0 0 0-4.8 0 .9.9 0 0 1-1.8 0Z"/><path d="M10.4 9.1a1.9 1.9 0 0 1 3.1 1.4"/>`) },
    'Neurology & Pain': { c:'#7A57A3', icon: SVG(
      `<path${F} d="M11.5 5.4a2.8 2.8 0 0 0-2.6 1.9 2.6 2.6 0 0 0-1.1 4.8c0 2 1.5 3.5 3.4 3.5.1 0 .2 0 .3-.1V5.4Z"/><path${F} d="M12.5 5.4a2.8 2.8 0 0 1 2.6 1.9 2.6 2.6 0 0 1 1.1 4.8c0 2-1.5 3.5-3.4 3.5-.1 0-.2 0-.3-.1V5.4Z"/><line x1="12" y1="5.4" x2="12" y2="17.6"/>`) },
    'Musculoskeletal & Rheumatology': { c:'#A8825B', icon: SVG(
      `<path d="M9.4 14.6 14.6 9.4"/><path${F} d="M9.4 14.6a1.9 1.9 0 1 1-2.6 2.6 1.9 1.9 0 1 1-2.6-2.6 1.9 1.9 0 0 1 2.6 0 1.9 1.9 0 0 1 2.6 0Z"/><path${F} d="M14.6 9.4a1.9 1.9 0 1 0 2.6-2.6 1.9 1.9 0 1 0 2.6 2.6 1.9 1.9 0 0 1-2.6 0 1.9 1.9 0 0 1-2.6 0Z"/>`) },
    'Mental Health': { c:'#4E8D6E', icon: SVG(
      `<path${F} d="M16 19.5v-2.4c2-1.2 3.2-3.5 3-6a5.6 5.6 0 0 0-11.1.6c0 1-.4 1.5-.9 2.1-.4.5-.7.9-.7 1.4 0 .5.4.8.9.9.3.1.3.2.3.5v2.1a1.6 1.6 0 0 0 1.6 1.6"/><path d="M12 11.3c.8-1 2.5-.4 2.5.9 0 1-1.3 1.9-2.5 2.8-1.2-.9-2.5-1.8-2.5-2.8 0-1.3 1.7-1.9 2.5-.9Z" fill="currentColor" fill-opacity=".42" stroke="none"/>`) },
    'Haematology & Nutrition': { c:'#B23B3B', icon: SVG(
      `<path${F} d="M12 4s5.2 6 5.2 9.6A5.2 5.2 0 0 1 6.8 13.6C6.8 10 12 4 12 4Z"/>`) },
    'Paediatrics': { c:'#E0A22E', icon: SVG(
      `<circle cx="12" cy="12" r="7.6"${F}/><path d="M9.6 11h.01M14.4 11h.01"/><path d="M9.6 14.4a3.4 3.4 0 0 0 4.8 0"/>`) },
    'Travel Health': { c:'#3E8FB0', icon: SVG(
      `<circle cx="12" cy="12" r="8"${F}/><line x1="4" y1="12" x2="20" y2="12"/><path d="M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16"/>`) },
    'Infections': { c:'#5B8C3E', icon: SVG(
      `<circle cx="12" cy="12" r="4.4"${F}/><path d="M12 3.2v2.4M12 18.4v2.4M3.2 12h2.4M18.4 12h2.4M5.8 5.8l1.7 1.7M16.5 16.5l1.7 1.7M18.2 5.8l-1.7 1.7M7.5 16.5l-1.7 1.7"/><circle cx="11" cy="11.2" r=".7" fill="currentColor" stroke="none"/><circle cx="13.4" cy="13" r=".7" fill="currentColor" stroke="none"/>`) },
  };
  const FALLBACK = { c:'#0f766e', icon: SVG('<path d="M10.5 3.5 3.5 10.5a5 5 0 0 0 7 7l7-7a5 5 0 0 0-7-7Z"/><line x1="7" y1="7" x2="14" y2="14"/>') };
  const catIcon  = c => (CAT_META[c] || FALLBACK).icon;
  const catColor = c => (CAT_META[c] || FALLBACK).c;

  function init(){
    const host = document.querySelector(HOST_SELECTOR);
    if (!host) return;
    if (!window.RGP_PRESCRIPTIONS){
      host.innerHTML = '<div style="padding:30px;color:#94a3b8">Prescription dataset not loaded.</div>';
      return;
    }

    const DATA = window.RGP_PRESCRIPTIONS;
    const state = { q:'', cats:new Set(), sort:'chapter', activeId:null };

    /* ---- category model (curated order, only those present) ---- */
    function catList(){
      const curated = (window.RGP_PRESCRIPTION_CATEGORIES || []).filter(c => c !== 'All');
      const present = new Set(DATA.map(p => p.category));
      const out = curated.filter(c => present.has(c));
      [...present].forEach(c => { if (!out.includes(c)) out.push(c); });
      return out;
    }
    const CATS = catList();
    const catCount = {};
    CATS.forEach(c => { catCount[c] = DATA.filter(p => p.category === c).length; });

    function matches(p){
      if (state.cats.size && !state.cats.has(p.category)) return false;
      if (!state.q) return true;
      const q = state.q.toLowerCase();
      const hay = [
        p.title, p.category, p.eyebrow, p.indication,
        (p.drugs||[]).map(d => d.name).join(' '),
      ].filter(Boolean).join(' ').toLowerCase();
      return hay.includes(q);
    }
    function countMatches(){ return DATA.filter(matches).length; }

    /* ---- build the shell ONCE ---- */
    host.classList.add('rx');
    host.innerHTML = `
      <div class="dir-layout">
        <aside class="dir-rail">
          <div class="dir-rail-top">
            <span class="dir-rail-title">Filter</span>
            <span class="dir-rail-actions">
              <button type="button" class="dir-reset" hidden>Reset all</button>
              <button type="button" class="dir-rail-min" title="Hide filters" aria-label="Hide filters">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
            </span>
          </div>
          <div class="dir-rail-sec">
            <div class="dir-rail-h">Specialty</div>
            <div class="dir-rail-list">
              ${CATS.map(c =>
                `<label class="dir-check" data-slug="${slugify(c)}">
                   <input type="checkbox" value="${esc(c)}">
                   <span class="dir-check-box"></span>
                   <span class="dir-check-label">${c}</span>
                   <span class="dir-check-n">${catCount[c]}</span>
                 </label>`
              ).join('')}
            </div>
          </div>
        </aside>
        <div class="dir-main">
          <div class="rx-toolbar dir-toolbar">
            <button class="dir-filters-toggle" type="button">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/></svg>
              Filters<span class="n" hidden>0</span>
            </button>
            <div class="rx-search-wrap">
              <svg class="rx-search-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              <input class="rx-search" type="search" placeholder="Search prescriptions — drug, condition, e.g. 'shingles', 'pylori', 'colchicine'…" autocomplete="off"/>
              <span class="rx-count"><b>${countMatches()}</b> of ${DATA.length}</span>
            </div>
            <div class="dir-sort">
              <label>Sort&nbsp;
                <select class="dir-sort-sel" aria-label="Sort results">
                  <option value="chapter">By specialty</option>
                  <option value="az">A&ndash;Z</option>
                  <option value="recent">Recently added</option>
                </select>
              </label>
            </div>
          </div>
          <div class="rx-groups" data-results></div>
          <div class="rx-empty" hidden>
            <span class="rx-empty-ic">🔎</span>
            <div><b>No prescriptions match.</b><br/>Try a different search term or filter.</div>
          </div>
        </div>
      </div>
    `;

    const layout   = host.querySelector('.dir-layout');
    const rail     = host.querySelector('.dir-rail');
    const results  = host.querySelector('[data-results]');
    const empty    = host.querySelector('.rx-empty');
    const countEl  = host.querySelector('.rx-count b');
    const search   = host.querySelector('.rx-search');
    const sortSel  = host.querySelector('.dir-sort-sel');
    const reset    = host.querySelector('.dir-reset');
    const minBtn   = host.querySelector('.dir-rail-min');
    const toggle   = host.querySelector('.dir-filters-toggle');

    /* ---- card markup ---- */
    // Open card: full-width expanded plan (no flip)
    function openCardHTML(p){
      return `
        <article class="rx-card is-open" data-id="${p.id}" role="listitem">
          <div class="rx-open-head">
            <span class="rx-open-ic" style="--c:${catColor(p.category)}">${catIcon(p.category)}</span>
            <div class="rx-open-titles">
              <h3 class="rx-card-title">${p.title}</h3>
              ${p.eyebrow ? `<div class="rx-card-eyebrow">${p.eyebrow}</div>` : ''}
            </div>
          </div>
          ${renderDetail(p)}
        </article>
      `;
    }

    // Closed card: flip card — front = condition, back = prescription summary
    function cardHTML(p){
      if (state.activeId === p.id) return openCardHTML(p);
      const drugLines = (p.drugs||[]).slice(0, 4).map(d =>
        `<li><b>${d.name}</b> <span>${[d.dose,d.freq,d.route].filter(Boolean).join(' ')}${d.days ? ` · ${d.days}` : ''}</span></li>`
      ).join('');
      const more = (p.drugs||[]).length > 4 ? `<li class="rx-more">+ ${p.drugs.length - 4} more</li>` : '';
      return `
        <div class="rx-flip" data-id="${p.id}" role="listitem">
          <div class="rx-flip-inner">
            <button class="rx-face rx-face-front" type="button" data-flip="${p.id}" aria-label="Show prescription for ${esc(p.title)}">
              <span class="rx-front-ic" style="--c:${catColor(p.category)}">${catIcon(p.category)}</span>
              <h3 class="rx-card-title">${p.title}</h3>
              ${p.eyebrow ? `<div class="rx-card-eyebrow">${p.eyebrow}</div>` : ''}
              <span class="rx-front-hint">View prescription
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
              </span>
            </button>
            <div class="rx-face rx-face-back">
              <div class="rx-back-head">
                <span class="rx-back-label">Prescription</span>
                <button class="rx-back-flip" type="button" data-flip="${p.id}" aria-label="Flip back" title="Flip back">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5H9"/></svg>
                </button>
              </div>
              <ul class="rx-back-drugs">${drugLines}${more}</ul>
              ${p.duration ? `<div class="rx-back-course"><b>Course</b> ${p.duration}</div>` : ''}
              <button class="rx-back-more" type="button" data-toggle="${p.id}">Full details</button>
            </div>
          </div>
        </div>
      `;
    }

    function renderDetail(p){
      const drugRows = (p.drugs||[]).map(d => `
        <tr><td><b>${d.name}</b></td><td>${d.dose||''}</td><td>${d.freq||''}</td><td>${d.route||''}</td><td>${d.days||''}</td></tr>
      `).join('');
      const altRows = (p.altRegimens||[]).map(a =>
        `<div class="rx-alt"><div class="rx-alt-l">${a.label}</div><div class="rx-alt-r">${a.drugs}</div></div>`
      ).join('');
      const counsel = (p.counselling||[]).map(c => `<li>${c}</li>`).join('');
      const reds = (p.redFlags||[]).map(r => `<li>${r}</li>`).join('');
      const sources = (p.sources||[]).map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a>`).join('');
      return `
        <div class="rx-detail">
          ${p.indication ? `<div class="rx-section"><h4>Indication</h4><p>${p.indication}</p></div>` : ''}
          ${p.contraindications ? `<div class="rx-section rx-section-warn"><h4>⚠ Contraindications / cautions</h4><p>${p.contraindications}</p></div>` : ''}
          <div class="rx-section">
            <h4>Prescription</h4>
            <div class="rx-drugs-wrap">
              <table class="rx-drugs">
                <thead><tr><th>Drug</th><th>Dose</th><th>Freq</th><th>Route</th><th>Duration</th></tr></thead>
                <tbody>${drugRows}</tbody>
              </table>
            </div>
            ${p.duration ? `<div class="rx-duration"><b>Course:</b> ${p.duration}</div>` : ''}
          </div>
          ${altRows ? `<div class="rx-section"><h4>Alternative regimens</h4><div class="rx-alts">${altRows}</div></div>` : ''}
          ${counsel ? `<div class="rx-section"><h4>💬 Counselling points</h4><ul class="rx-list">${counsel}</ul></div>` : ''}
          ${p.followUp ? `<div class="rx-section"><h4>🔁 Follow-up</h4><p>${p.followUp}</p></div>` : ''}
          ${reds ? `<div class="rx-section rx-section-red"><h4>🔴 Red flags</h4><ul class="rx-list">${reds}</ul></div>` : ''}
          ${p.emisText ? `<div class="rx-section rx-section-emis"><h4>📋 EMIS / SystmOne copy-paste</h4><div class="rx-emis-wrap"><pre class="rx-emis-text" id="rx-emis-${p.id}">${p.emisText}</pre><button class="rx-copy-btn" data-copy="${p.id}" type="button">Copy</button></div></div>` : ''}
          ${sources ? `<div class="rx-section"><h4>Sources</h4><div class="rx-sources">${sources}</div></div>` : ''}
          <div class="rx-detail-foot"><button class="rx-close-btn" data-close="${p.id}" type="button">Close ▲</button></div>
        </div>
      `;
    }

    /* ---- results: grouped by specialty, or flat when sorted ---- */
    function renderResults(){
      const items = DATA.filter(matches);
      let html;
      if (state.sort === 'chapter'){
        const groups = {};
        items.forEach(p => { (groups[p.category] = groups[p.category] || []).push(p); });
        const cats = CATS.filter(c => groups[c]);
        Object.keys(groups).forEach(c => { if (!cats.includes(c)) cats.push(c); });
        html = cats.map(cat => `
          <section class="rx-group" data-group="${cat}">
            <div class="rx-group-head"><h2>${cat}</h2><span class="rx-group-count">${groups[cat].length}</span></div>
            <div class="rx-grid" role="list">${groups[cat].map(cardHTML).join('')}</div>
          </section>
        `).join('');
      } else {
        let list = items.slice();
        if (state.sort === 'az') list.sort((a,b) => (a.title||'').localeCompare(b.title||'', 'en', {sensitivity:'base'}));
        else if (state.sort === 'recent') list.reverse();
        html = `<div class="rx-grid rx-grid-flat" role="list">${list.map(cardHTML).join('')}</div>`;
      }
      results.innerHTML = html;
      wireResults();

      const n = items.length;
      if (countEl) countEl.textContent = n;
      empty.hidden = n !== 0;

      // rail / toggle affordances
      reset.hidden = !(state.cats.size || state.q || state.sort !== 'chapter');
      const tn = toggle.querySelector('.n');
      tn.hidden = state.cats.size === 0;
      tn.textContent = state.cats.size;
    }

    function wireResults(){
      // Flip (front ⇄ back) — pure DOM toggle so the 3D animation plays
      results.querySelectorAll('[data-flip]').forEach(btn => {
        btn.addEventListener('click', () => {
          const flip = btn.closest('.rx-flip');
          if (flip) flip.classList.toggle('is-flipped');
        });
      });
      results.querySelectorAll('[data-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.toggle;
          state.activeId = state.activeId === id ? null : id;
          renderResults();
          const card = results.querySelector(`.rx-card[data-id="${id}"]`);
          if (card && state.activeId) card.scrollIntoView({ block:'start', behavior:'smooth' });
        });
      });
      results.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => { state.activeId = null; renderResults(); });
      });
      results.querySelectorAll('[data-copy]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.copy;
          const text = document.getElementById('rx-emis-' + id)?.textContent || '';
          navigator.clipboard?.writeText(text);
          btn.textContent = 'Copied ✓';
          setTimeout(() => { btn.textContent = 'Copy'; }, 1400);
        });
      });
    }

    /* ---- shell wiring (bound once) ---- */
    search.addEventListener('input', e => { state.q = e.target.value; state.activeId = null; renderResults(); });
    sortSel.addEventListener('change', () => { state.sort = sortSel.value; state.activeId = null; renderResults(); });
    rail.addEventListener('change', e => {
      if (!e.target.matches('.dir-check input')) return;
      const c = e.target.value;
      if (e.target.checked) state.cats.add(c); else state.cats.delete(c);
      state.activeId = null;
      renderResults();
    });
    reset.addEventListener('click', () => {
      state.cats.clear(); state.q = ''; state.sort = 'chapter'; state.activeId = null;
      search.value = ''; sortSel.value = 'chapter';
      rail.querySelectorAll('.dir-check input:checked').forEach(i => i.checked = false);
      renderResults();
    });

    /* ---- minimize / restore ---- */
    const isDesktop = () => window.matchMedia('(min-width:861px)').matches;
    function setCollapsed(v){
      layout.classList.toggle('rail-collapsed', v);
      try { localStorage.setItem(RKEY, v ? '1' : '0'); } catch(e){}
    }
    minBtn.addEventListener('click', () => { if (isDesktop()) setCollapsed(true); else rail.classList.remove('open'); });
    toggle.addEventListener('click', () => { if (isDesktop()) setCollapsed(false); else rail.classList.toggle('open'); });
    try { if (localStorage.getItem(RKEY) === '1') setCollapsed(true); } catch(e){}

    /* ---- hash deep-link: #migraine-acute opens that rx ---- */
    function applyHash(){
      const id = (location.hash || '').replace(/^#/, '').trim();
      if (id && DATA.find(p => p.id === id)){
        state.activeId = id; state.q = ''; state.cats.clear(); state.sort = 'chapter';
        search.value = ''; sortSel.value = 'chapter';
        rail.querySelectorAll('.dir-check input:checked').forEach(i => i.checked = false);
        renderResults();
        requestAnimationFrame(() => {
          const card = results.querySelector(`.rx-card[data-id="${id}"]`);
          if (!card) return;
          const r = card.getBoundingClientRect();
          window.scrollTo({ top: window.scrollY + r.top - 90, behavior:'smooth' });
        });
      }
    }

    renderResults();
    applyHash();
    window.addEventListener('hashchange', applyHash);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
