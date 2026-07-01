/* ============================================
   Reasoning GP — Case page interactions
   Auto-builds drop-down section nav from headings
   ============================================ */

(function(){
  // Canonical 7-step framework → short label + icon (consistent across all cases)
  var STEP = {
    1:{e:'📝', l:'History'},
    2:{e:'🚦', l:'Triage'},
    3:{e:'🩺', l:'Examination'},
    4:{e:'🧪', l:'Investigations'},
    5:{e:'🎯', l:'Diagnosis'},
    6:{e:'📨', l:'Referral'},
    7:{e:'💊', l:'Management'}
  };

  // Find all main sections — accept both legacy .step-wrap[id] and new .step[id]
  function getSections(){
    const list = [];
    document.querySelectorAll('.step-wrap[id], .step[id]').forEach(el=>{
      const titleEl = el.querySelector('.step-title, .step-head-text h3');
      const labelEl = el.querySelector('.step-label, .step-head-text .lbl');
      if (!titleEl) return;
      let title = titleEl.textContent.trim();
      const compact = title.split(/[—–:·]/)[0].trim();
      const n = labelEl ? parseInt(labelEl.textContent.replace(/\D/g,''),10) : (list.length+1);
      const meta = STEP[n];
      list.push({
        id: el.id,
        n: n || (list.length+1),
        title: meta ? meta.l : compact,
        full: title,
        emoji: meta ? meta.e : '•',
        cls: ''
      });
    });
    // SCA scorecard (its own section, after Management) — SCA view only
    if (document.getElementById('sca-scorecard')){
      list.push({ id:'sca-scorecard', n:'★', title:'SCA Scorecard', full:'SCA Consultation Scorecard', emoji:'📋', cls:'sca-only' });
    }
    // Reference summaries — mode-specific
    const SUM = [
      {sel:'#sum-clinic', title:'Clinic Reference', emoji:'🏥', cls:'clinic-only'},
      {sel:'#sum-sca',    title:'SCA Blueprint',    emoji:'🎓', cls:'sca-only'}
    ];
    SUM.forEach(s=>{
      const el = document.querySelector(s.sel);
      if (el && !list.some(x=>x.id===el.id)){
        list.push({ id:el.id, n:'★', title:s.title, full:s.title, emoji:s.emoji, cls:s.cls });
      }
    });
    // Any other generic summary sections
    document.querySelectorAll('.sum-section[id], #summary').forEach(el=>{
      if (list.some(s=>s.id===el.id)) return;
      const t = el.querySelector('.sum-title, h2, h3');
      list.push({ id:el.id, n:'★', title:t?t.textContent.trim():'Summary', full:t?t.textContent.trim():'Summary', emoji:'⭐', cls:'' });
    });
    return list;
  }

  function renderNav(sections){
    if (!sections.length) return null;
    const wrap = document.createElement('div');
    wrap.className = 'case-nav';
    wrap.innerHTML = `
      <div class="case-nav-row">
        <button class="case-nav-trigger" type="button" aria-expanded="false">
          <svg class="cn-ic" viewBox="0 0 24 24" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="14" y2="18"/></svg>
          <span>Sections</span>
          <span class="cn-caret" aria-hidden="true"></span>
        </button>
        <div class="case-nav-pills">
          ${sections.map(s=>`<button class="case-nav-pill" data-target="${s.id}"><span class="cn-pill-n">${s.n}</span>${s.title}</button>`).join('')}
        </div>
      </div>
      <div class="case-nav-drawer" role="region" aria-label="Case sections">
        <div class="cnd-grid">
          ${sections.map(s=>`
            <a class="cnd-item" href="#${s.id}" data-target="${s.id}">
              <span class="cnd-num">${s.n}</span>
              <span class="cnd-text"><b>${s.title}</b><small>${s.full!==s.title?s.full:''}</small></span>
            </a>
          `).join('')}
        </div>
      </div>
      <div class="case-progress" style="width:0"></div>
    `;
    return wrap;
  }

  function wire(navEl){
    const trigger = navEl.querySelector('.case-nav-trigger');
    const drawer = navEl.querySelector('.case-nav-drawer');
    const pills = navEl.querySelectorAll('.case-nav-pill');
    const drawerItems = navEl.querySelectorAll('.cnd-item');
    const progress = navEl.querySelector('.case-progress');

    function closeDrawer(){
      drawer.classList.remove('is-open');
      trigger.classList.remove('is-open');
      trigger.setAttribute('aria-expanded','false');
    }
    function openDrawer(){
      drawer.classList.add('is-open');
      trigger.classList.add('is-open');
      trigger.setAttribute('aria-expanded','true');
    }
    trigger.addEventListener('click', e=>{
      e.stopPropagation();
      drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
    });
    document.addEventListener('click', e=>{
      if (!navEl.contains(e.target)) closeDrawer();
    });
    document.addEventListener('keydown', e=>{
      if (e.key==='Escape') closeDrawer();
    });

    function scrollTo(id){
      const el = document.getElementById(id);
      if (!el) return;
      const head = document.querySelector('.case-head');
      const headH = head ? head.getBoundingClientRect().height : 0;
      const navH = navEl.offsetHeight + headH + 8;
      const y = el.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({top:y, behavior:'smooth'});
    }

    pills.forEach(p => p.addEventListener('click', e=>{
      e.preventDefault();
      scrollTo(p.dataset.target);
      closeDrawer();
    }));
    drawerItems.forEach(p => p.addEventListener('click', e=>{
      e.preventDefault();
      scrollTo(p.dataset.target);
      closeDrawer();
    }));

    // Scroll-spy + reading progress
    const ids = [...pills].map(p=>p.dataset.target);
    function update(){
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docH > 0 ? Math.min(1, window.scrollY / docH) : 0;
      progress.style.width = (ratio*100).toFixed(1) + '%';

      // active section: the last id whose top is above the viewport's upper edge + offset
      const offset = 120;
      let activeId = ids[0];
      for (const id of ids){
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) activeId = id;
      }
      pills.forEach(p=> p.classList.toggle('active', p.dataset.target===activeId));
      drawerItems.forEach(p=> p.classList.toggle('active', p.dataset.target===activeId));
    }
    update();
    window.addEventListener('scroll', update, {passive:true});
    window.addEventListener('resize', update);
  }

  // ---- Persistent left-hand Table of Contents (desktop) ----
  function renderTOC(sections){
    if (!sections.length) return null;
    const el = document.createElement('aside');
    el.className = 'case-toc';
    el.innerHTML = `
      <a class="case-toc-back" href="../cases.html">
        <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        <span>All cases</span>
      </a>
      <div class="case-toc-card">
        <span class="ctc-ic" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        </span>
        <span class="ctc-text"><b>Case Sections</b><small>Navigate through case content</small></span>
      </div>
      <nav class="case-toc-list" aria-label="Sections">
        ${sections.map((s, i)=>`
          <a class="case-toc-link ${s.cls||''}" href="#${s.id}" data-target="${s.id}">
            <span class="ctl-ic" aria-hidden="true">${s.emoji||'•'}</span>
            <span class="ctl-t">${s.title}</span>
            <span class="ctl-n">${i+1}</span>
          </a>`).join('')}
      </nav>
      <div class="case-toc-foot">
        <span>${sections.length} sections</span>
        <span class="ctf-cur"><span class="ctf-dot"></span>Current section</span>
      </div>`;
    return el;
  }

  function mountTOC(tocEl){
    const page = document.querySelector('.main .page') || document.querySelector('.page');
    if (!page || !page.parentNode) return false;
    const layout = document.createElement('div');
    layout.className = 'case-layout';
    page.parentNode.insertBefore(layout, page);
    layout.appendChild(tocEl);
    layout.appendChild(page);
    return true;
  }

  function wireTOC(tocEl, sections){
    const links = tocEl.querySelectorAll('.case-toc-link');
    function navOffset(){
      const v = getComputedStyle(document.documentElement).getPropertyValue('--rgp-nav-h');
      return (parseInt(v,10) || 116) + 16;
    }
    function scrollToId(id){
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - navOffset();
      window.scrollTo({top:y, behavior:'smooth'});
    }
    links.forEach(a => a.addEventListener('click', e=>{
      e.preventDefault();
      scrollToId(a.dataset.target);
      history.replaceState(null,'','#'+a.dataset.target);
    }));
    const ids = sections.map(s=>s.id);
    function spy(){
      const offset = 150;
      let activeId = ids[0];
      for (const id of ids){
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) activeId = id;
      }
      links.forEach(a => a.classList.toggle('active', a.dataset.target===activeId));
    }
    spy();
    window.addEventListener('scroll', spy, {passive:true});
    window.addEventListener('resize', spy);
  }

  function init(){
    // Remove any previously-mounted case-nav (when re-routing in single-file mode)
    document.querySelectorAll('.case-nav').forEach(n => n.remove());

    // Mount point: prefer a placeholder, else after the .case-head
    const placeholder = document.getElementById('case-nav-mount');
    const sections = getSections();
    const nav = renderNav(sections);
    if (!nav) return;
    if (placeholder){
      placeholder.replaceWith(nav);
    } else {
      const caseHead = document.querySelector('.case-head');
      if (caseHead && caseHead.parentNode){
        caseHead.insertAdjacentElement('afterend', nav);
      } else {
        // fallback: at top of <main>
        const main = document.querySelector('main.main') || document.body;
        main.insertBefore(nav, main.firstChild);
      }
    }
    wire(nav);
    injectIntoSidebar(sections);
    trackCaseHeadHeight(nav);

    // Build the persistent left TOC and wrap the content into a 2-column layout.
    if (!document.querySelector('.case-toc')){
      const toc = renderTOC(sections);
      if (toc && mountTOC(toc)) wireTOC(toc, sections);
    }
  }

  // Keep the case-nav's sticky offset in sync with the case-head's height
  // so the nav sits directly under the header instead of overlapping it.
  function trackCaseHeadHeight(nav){
    const head = document.querySelector('.case-head');
    if (!head) return;
    const setVar = ()=>{
      const h = head.getBoundingClientRect().height || 0;
      document.documentElement.style.setProperty('--case-head-h', h + 'px');
    };
    setVar();
    if (typeof ResizeObserver !== 'undefined'){
      new ResizeObserver(setVar).observe(head);
    }
    window.addEventListener('resize', setVar);
    // also re-measure after fonts/images settle
    window.addEventListener('load', setVar);
  }

  // Populate the active sidebar item's sub-list with section anchors
  function injectIntoSidebar(sections){
    const subHost = document.querySelector('.sidebar .sb-sub');
    if (!subHost) return;
    if (!sections.length){
      subHost.innerHTML = `<span style="font-size:11.5px;color:var(--muted);padding:6px 9px;display:block">No sections found.</span>`;
      return;
    }
    subHost.innerHTML = sections.map(s=>`
      <a href="#${s.id}" data-target="${s.id}">
        <span class="sb-sub-n">${s.n}</span>
        <span>${s.title}</span>
      </a>
    `).join('');

    // Smooth-scroll and scrollspy mirror with main nav
    const links = subHost.querySelectorAll('a');
    links.forEach(a => a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.dataset.target;
      const el = document.getElementById(id);
      if (!el) return;
      const navEl = document.querySelector('.case-nav');
      const head = document.querySelector('.case-head');
      const headH = head ? head.getBoundingClientRect().height : 0;
      const navH = (navEl ? navEl.offsetHeight : 0) + headH + 8;
      const y = el.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({top:y, behavior:'smooth'});
      // close mobile sidebar if open
      document.querySelector('.sidebar.is-open')?.classList.remove('is-open');
      document.querySelector('.sb-overlay.is-open')?.classList.remove('is-open');
    }));

    // Sync active state with case-nav pills
    const ids = sections.map(s=>s.id);
    function syncActive(){
      const offset = 120;
      let activeId = ids[0];
      for (const id of ids){
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) activeId = id;
      }
      links.forEach(a => a.classList.toggle('active', a.dataset.target===activeId));
    }
    syncActive();
    window.addEventListener('scroll', syncActive, {passive:true});
    window.addEventListener('resize', syncActive);
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // expose for single-file router
  window.RGP_initCaseNav = init;
})();
