/* ============================================================
   Reasoning GP — Directory filter rail
   Shared controller for listing pages. Transforms a standard
   "controls + grouped card grid" layout into a GPatlas-style
   layout: left checkbox rail (multi-select, OR) + sortable
   results. No build step, no dependencies.

   Two ways to use it:
   1. AUTO  — drop the script on any page that uses the canonical
              .tool-page > .alg-controls + .alg-group/.alg-card
              markup (Pathways, Management, Lab Results, Casebook).
   2. MANUAL — call window.RGP_buildRail(cfg) after your own
              markup is in the DOM, passing the selectors your
              tool uses. Re-callable (re-renders rebuild the rail).
   ============================================================ */
(function(){
  function el(tag, cls, html){
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  const slugify = s => (s||'').toLowerCase()
    .replace(/&amp;/g,'and').replace(/&/g,'and')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');

  // ---- default config reproduces the original .alg-* behaviour ----
  const DEFAULTS = {
    page:          '.tool-page',   // container to scope + relocate within (selector or element)
    controls:      '.alg-controls',
    group:         '.alg-group',
    card:          '.alg-card',
    gridClass:     'alg-grid',     // class(es) used for the flat (A–Z / Recent) container
    search:        null,           // search input; null → first input inside controls
    shown:         '.alg-count-pill b', // "X shown" number, inside controls
    empty:         '.alg-empty',
    foot:          '.alg-foot',    // boundary the relocate loop stops at (optional)
    groupName:     'h2',           // selector inside a group for its display name
    searchOnlyAttr:'data-search-only', // groups surfaced only when searched
    totalSel:      '#caseTotal',   // optional total count element
    railTitle:     'Filter',
    chapterHeading:'Clinical chapters',
    takeOverSearch:false,          // clone+replace the search input to drop foreign listeners
    sort:          true            // include the sort control + flat A–Z / Recent views
  };

  function resolve(sel, root){
    if (!sel) return null;
    if (typeof sel !== 'string') return sel;     // already an element
    return (root || document).querySelector(sel);
  }

  function build(cfg){
    cfg = Object.assign({}, DEFAULTS, cfg || {});

    const page = resolve(cfg.page);
    if (!page || page.querySelector('.dir-layout')) return;
    const controls = page.querySelector(cfg.controls);
    if (!controls) return;
    const groupEls = [...page.querySelectorAll(cfg.group)];
    if (!groupEls.length) return;

    const foot   = cfg.foot ? page.querySelector(cfg.foot) : null;
    const empty  = cfg.empty ? page.querySelector(cfg.empty) : null;
    let search   = cfg.search ? resolve(cfg.search, page)
                              : controls.querySelector('input[type="search"], input[type="text"], input');
    // take exclusive ownership of the search box (drop any foreign listeners)
    if (search && cfg.takeOverSearch){
      const fresh = search.cloneNode(true);
      search.replaceWith(fresh);
      search = fresh;
    }
    const shownEl = resolve(cfg.shown, controls) || resolve(cfg.shown, page);
    const totalEl = cfg.totalSel ? document.querySelector(cfg.totalSel) : null;

    /* ---- relocate everything between controls and foot ---- */
    const movable = [];
    let n = controls.nextElementSibling;
    while (n && n !== foot){ movable.push(n); n = n.nextElementSibling; }

    const layout = el('div','dir-layout');
    const rail   = el('aside','dir-rail');
    const main   = el('div','dir-main');
    layout.append(rail, main);
    page.insertBefore(layout, controls);

    controls.classList.add('dir-toolbar');
    main.appendChild(controls);
    movable.forEach(m => {
      if (m.classList && (m.classList.contains('alg-cats') || m.classList.contains('view-seg'))){
        m.remove(); return;                 // legacy pills & view-toggle replaced by the rail + sort
      }
      main.appendChild(m);
    });
    controls.querySelectorAll('.view-seg').forEach(v => v.remove());

    /* ---- model: chapters + flat card list ---- */
    const groups = [...main.querySelectorAll(cfg.group)];
    const searchGroups  = groups.filter(g => g.hasAttribute(cfg.searchOnlyAttr));
    const chapterGroups = groups.filter(g => !g.hasAttribute(cfg.searchOnlyAttr));

    const nameOf = g => (g.querySelector(cfg.groupName)?.textContent || g.getAttribute('data-group') || '').trim();

    const chapters = chapterGroups.map((g, i) => ({
      i, el: g,
      name: nameOf(g),
      slug: slugify(nameOf(g)),
      count: g.querySelectorAll(cfg.card).length
    })).filter(c => c.count > 0);

    const cards = [];
    chapters.forEach(c => {
      c.el.querySelectorAll(cfg.card).forEach(card => {
        cards.push({
          card, ci: c.i,
          home: card.parentElement,
          name: (card.querySelector('b')?.textContent || card.textContent || '').trim().toLowerCase(),
          search: (card.dataset.search || card.textContent || '').toLowerCase()
        });
      });
    });

    const extraCards = [];
    searchGroups.forEach(g => {
      g.querySelectorAll(cfg.card).forEach(card => {
        extraCards.push({
          card, home: card.parentElement, group: g,
          name: (card.querySelector('b')?.textContent || '').trim().toLowerCase(),
          search: (card.dataset.search || card.textContent || '').toLowerCase()
        });
      });
    });
    searchGroups.forEach(g => { g.style.display = 'none'; });
    if (totalEl) totalEl.textContent = cards.length;

    /* ---- flat container for A–Z / Recent sorts ---- */
    const flat = el('div', cfg.gridClass + ' dir-flat');
    flat.style.display = 'none';
    (chapterGroups[0] || groups[0]).parentElement.insertBefore(flat, chapterGroups[0] || groups[0]);

    /* ---- build the rail ---- */
    rail.innerHTML =
      '<div class="dir-rail-top">' +
        '<span class="dir-rail-title">'+cfg.railTitle+'</span>' +
        '<span class="dir-rail-actions">' +
          '<button type="button" class="dir-reset" hidden>Reset all</button>' +
          '<button type="button" class="dir-rail-min" title="Hide filters" aria-label="Hide filters">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' +
          '</button>' +
        '</span>' +
      '</div>' +
      '<div class="dir-rail-sec">' +
        '<div class="dir-rail-h">'+cfg.chapterHeading+'</div>' +
        '<div class="dir-rail-list">' +
          chapters.map(c =>
            '<label class="dir-check" data-slug="'+c.slug+'">' +
              '<input type="checkbox" value="'+c.i+'">' +
              '<span class="dir-check-box"></span>' +
              '<span class="dir-check-label">'+c.name+'</span>' +
              '<span class="dir-check-n">'+c.count+'</span>' +
            '</label>'
          ).join('') +
        '</div>' +
      '</div>';
    const reset = rail.querySelector('.dir-reset');
    const minBtn = rail.querySelector('.dir-rail-min');

    /* ---- sort control + mobile toggle in the toolbar ---- */
    let sortSel = null;
    if (cfg.sort){
      const sortWrap = el('div','dir-sort',
        '<label>Sort&nbsp;' +
          '<select class="dir-sort-sel" aria-label="Sort results">' +
            '<option value="chapter">By chapter</option>' +
            '<option value="az">A&ndash;Z</option>' +
            '<option value="recent">Recently added</option>' +
          '</select>' +
        '</label>');
      controls.appendChild(sortWrap);
      sortSel = sortWrap.querySelector('select');
    }

    const toggle = el('button','dir-filters-toggle',
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/></svg>' +
      'Filters<span class="n" hidden>0</span>');
    controls.insertBefore(toggle, controls.firstChild);

    /* ---- minimize / restore the rail (desktop) + drawer (mobile) ---- */
    const RKEY = 'rgp-rail-collapsed';
    const isDesktop = () => window.matchMedia('(min-width:861px)').matches;
    function setCollapsed(v){
      layout.classList.toggle('rail-collapsed', v);
      try { localStorage.setItem(RKEY, v ? '1' : '0'); } catch(e){}
    }
    minBtn.addEventListener('click', () => {
      if (isDesktop()) setCollapsed(true);
      else rail.classList.remove('open');
    });
    toggle.addEventListener('click', () => {
      if (isDesktop()) setCollapsed(false);
      else rail.classList.toggle('open');
    });
    try { if (localStorage.getItem(RKEY) === '1') setCollapsed(true); } catch(e){}

    /* ---- filtering / sorting ---- */
    function selectedSet(){
      return new Set([...rail.querySelectorAll('.dir-check input:checked')].map(i => +i.value));
    }
    function restoreHomes(){
      cards.forEach(o => o.home.appendChild(o.card));
      extraCards.forEach(o => o.home.appendChild(o.card));
    }

    function apply(){
      const q = (search?.value || '').trim().toLowerCase();
      const sel = selectedSet();
      const sort = sortSel ? sortSel.value : 'chapter';
      let shown = 0;

      if (sort === 'chapter'){
        flat.style.display = 'none';
        restoreHomes();
        chapters.forEach(c => {
          const on = sel.size === 0 || sel.has(c.i);
          let any = false;
          c.el.querySelectorAll(cfg.card).forEach(card => {
            const m = on && (!q || (card.dataset.search || card.textContent || '').toLowerCase().includes(q));
            card.style.display = m ? '' : 'none';
            if (m){ any = true; shown++; }
          });
          c.el.style.display = any ? '' : 'none';
        });
        searchGroups.forEach(g => {
          let any = false;
          g.querySelectorAll(cfg.card).forEach(card => {
            const m = q && sel.size === 0 && (card.dataset.search || '').toLowerCase().includes(q);
            card.style.display = m ? '' : 'none';
            if (m){ any = true; shown++; }
          });
          g.style.display = any ? '' : 'none';
        });
      } else {
        groups.forEach(g => g.style.display = 'none');
        flat.style.display = '';
        cards.forEach(o => o.card.style.display = 'none');
        extraCards.forEach(o => o.card.style.display = 'none');
        let list = cards.filter(o => (sel.size === 0 || sel.has(o.ci)) && (!q || o.search.includes(q)));
        if (q && sel.size === 0) list = list.concat(extraCards.filter(o => o.search.includes(q)));
        if (sort === 'az') list.sort((a,b) => a.name.localeCompare(b.name, 'en', {sensitivity:'base'}));
        else if (sort === 'recent') list = list.slice().reverse();
        list.forEach(o => { o.card.style.display = ''; flat.appendChild(o.card); });
        shown = list.length;
      }

      if (shownEl) shownEl.textContent = shown;
      if (empty) empty.classList.toggle('show', shown === 0);
      reset.hidden = !(sel.size || q || (sortSel && sortSel.value !== 'chapter'));
      const tn = toggle.querySelector('.n');
      tn.hidden = sel.size === 0;
      tn.textContent = sel.size;
    }

    rail.addEventListener('change', e => { if (e.target.matches('.dir-check input')) apply(); });
    if (sortSel) sortSel.addEventListener('change', apply);
    if (search) search.addEventListener('input', apply);
    reset.addEventListener('click', () => {
      rail.querySelectorAll('.dir-check input:checked').forEach(i => i.checked = false);
      if (search) search.value = '';
      if (sortSel) sortSel.value = 'chapter';
      apply();
    });

    /* ---- deep links: ?q= and ?cat= ---- */
    const params = new URLSearchParams(location.search);
    if (params.get('q') && search){ search.value = params.get('q'); }
    const cat = params.get('cat');
    if (cat){
      const box = rail.querySelector('.dir-check[data-slug="'+slugify(cat)+'"] input');
      if (box) box.checked = true;
    }
    apply();
  }

  // public API for tools with bespoke markup
  window.RGP_buildRail = build;

  // auto-init for canonical .alg-* listing pages
  function autoInit(){ build(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoInit);
  else autoInit();
})();
