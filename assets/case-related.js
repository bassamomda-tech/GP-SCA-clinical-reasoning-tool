/* ============================================
   Reasoning GP — Case ↔ Tools cross-linking
   Auto-injects a "Connect" panel into every case page
   showing relevant tools, calculators, leaflets, and
   sibling cases. Single source of truth.
   ============================================ */

(function(){
  // -------- Tool registry --------
  const TOOLS = {
    workup:     { icon:'🩺', label:'Diagnostic Tool',   path:'tools/diagnostic.html',       meta:'Triage + differential' },
    rx:         { icon:'📝', label:'Ready Prescriptions',path:'tools/prescriptions.html',   meta:'EMIS copy-paste' },
    calc:       { icon:'🧮', label:'Calculators',        path:'tools/calculators.html',     meta:'Risk scores · 55' },
    labs:       { icon:'🧪', label:'Lab Results',        path:'tools/lab-results.html',     meta:'Per-result GP actions' },
    algorithms: { icon:'🗺️', label:'Algorithms',         path:'tools/algorithms.html',     meta:'Visual pathways' },
    medchooser: { icon:'💊', label:'Medication Chooser', path:'tools/medication-chooser.html', meta:'NICE CKS · BNF' },
    leaflets:   { icon:'📄', label:'Patient Leaflets',   path:'tools/leaflets.html',        meta:'AccuRx copy-link' },
    sca:        { icon:'🎓', label:'SCA Practice',       path:'tools/sca-practice.html',    meta:'12-min mock + scorecard' },
  };

  // -------- Per-case relationships --------
  // Key = case filename (without .html). Values:
  //   tools:    array of tool keys (above)
  //   calcs:    array of calculator IDs (anchor on tools/calculators.html#id)
  //   leaflet:  slug from leaflets-data.js (#slug on tools/leaflets.html)
  //   resources: anchor on pages/resources.html (#guidance, #signposting, etc.)
  //   keywords: optional extra search terms appended to deep links
  const CASE_MAP = {
    // ---- Cardiovascular & Renal ----
    'hypertension': {
      tools:['workup','rx','calc','labs','algorithms','medchooser','leaflets'],
      calcs:['qrisk3','frax'],
      leaflet:'hypertension',
    },
    'atrial-fibrillation': {
      tools:['workup','rx','calc','algorithms','leaflets'],
      calcs:['chads-vasc','has-bled','orbit'],
      leaflet:'atrial-fibrillation',
    },
    'heart-failure': {
      tools:['workup','rx','calc','labs','algorithms','leaflets'],
      calcs:['news2','qrisk3'],
      leaflet:'heart-failure',
    },
    'chest-pain': {
      tools:['workup','calc','algorithms'],
      calcs:['news2'],
    },
    'palpitations': {
      tools:['workup','calc','algorithms','rx'],
      calcs:['chads-vasc','has-bled'],
    },
    'ckd': {
      tools:['workup','calc','labs','algorithms','rx','leaflets'],
      calcs:['egfr','crcl','qrisk3'],
      leaflet:'chronic-kidney-disease',
    },
    // ---- Respiratory ----
    'asthma': {
      tools:['workup','rx','algorithms','medchooser','leaflets'],
      leaflet:'asthma',
    },
    'copd': {
      tools:['workup','rx','calc','algorithms','medchooser','leaflets'],
      calcs:['crb-65'],
      leaflet:'copd',
    },
    'breathlessness': {
      tools:['workup','calc','algorithms','labs'],
      calcs:['wells-pe','crb-65','news2'],
    },
    // ---- Endocrine & Metabolic ----
    'type-2-diabetes': {
      tools:['workup','rx','calc','labs','algorithms','medchooser','leaflets'],
      calcs:['egfr','bmi','qrisk3'],
      leaflet:'type-2-diabetes',
    },
    'type-1-diabetes': {
      tools:['workup','rx','calc','labs','algorithms','leaflets'],
      calcs:['egfr','bmi'],
    },
    'hypothyroidism': {
      tools:['workup','rx','labs','algorithms','leaflets'],
    },
    'hyperthyroidism': {
      tools:['workup','rx','labs','algorithms','leaflets'],
    },
    'osteoporosis': {
      tools:['workup','rx','calc','algorithms','leaflets'],
      calcs:['frax','qfracture'],
      leaflet:'osteoporosis',
    },
    'fatigue': {
      tools:['workup','calc','labs','algorithms'],
      calcs:['phq9','gad7','audit-c'],
    },
    // ---- Gastroenterology ----
    'abdominal-pain': {
      tools:['workup','algorithms','calc'],
    },
    'dyspepsia': {
      tools:['workup','rx','algorithms','medchooser'],
    },
    'ibs': {
      tools:['workup','rx','algorithms','leaflets'],
      leaflet:'ibs',
    },
    'coeliac': {
      tools:['workup','labs','algorithms'],
    },
    'crohns': {
      tools:['workup','labs','algorithms','rx'],
    },
    'ulcerative-colitis': {
      tools:['workup','labs','algorithms','rx'],
    },
    'diverticulosis': {
      tools:['workup','algorithms','rx'],
    },
    'constipation': {
      tools:['workup','rx','algorithms','medchooser'],
    },
    // ---- Mental Health ----
    'depression': {
      tools:['workup','calc','rx','algorithms','medchooser','leaflets','sca'],
      calcs:['phq9','gad7','audit-c'],
      leaflet:'depression',
    },
    // ---- Women's Health ----
    'menopause': {
      tools:['workup','rx','algorithms','medchooser','leaflets'],
      leaflet:'menopause',
    },
    'contraception': {
      tools:['workup','rx','algorithms','medchooser'],
    },
    'pcos': {
      tools:['workup','calc','labs','algorithms','leaflets'],
      calcs:['bmi'],
      leaflet:'pcos',
    },
    'infertility': {
      tools:['workup','labs','algorithms'],
      calcs:['bmi'],
    },
    // ---- Urology & Continence ----
    'male-luts': {
      tools:['workup','calc','algorithms','rx','medchooser'],
      calcs:['ipss'],
    },
    'urinary-incontinence': {
      tools:['workup','algorithms','rx'],
    },
    'enuresis': {
      tools:['workup','algorithms','rx','leaflets'],
    },
    // ---- ENT, Balance & Neuro ----
    'hearing-loss': {
      tools:['workup','algorithms'],
    },
    'tinnitus': {
      tools:['workup','algorithms','leaflets'],
    },
    'vertigo': {
      tools:['workup','algorithms','rx'],
    },
    'blackouts': {
      tools:['workup','calc','algorithms','labs'],
      calcs:['chads-vasc','news2'],
    },
    // ---- Lab result workups ----
    'anaemia': {
      tools:['workup','labs','algorithms','rx'],
    },
    'abnormal-lfts': {
      tools:['workup','labs','algorithms','calc'],
      calcs:['audit-c','audit','bmi'],
    },
    'hyponatraemia': {
      tools:['workup','labs','algorithms'],
    },
    'hypercalcaemia': {
      tools:['workup','labs','algorithms'],
    },
    // ---- Acute & MSK ----
    'osteoarthritis': {
      tools:['workup','rx','algorithms','medchooser'],
    },
    'low-back-pain': {
      tools:['workup','rx','algorithms','medchooser'],
    },
    // ---- Infectious diseases ----
    'hiv': {
      tools:['workup','labs','algorithms'],
    },
  };

  // -------- Helpers --------
  function getPathPrefix(){
    return /\/(cases|tools|pages)\//.test(location.pathname) ? '../' : '';
  }

  function getCurrentCaseKey(){
    const m = location.pathname.match(/\/cases\/([^\/]+)\.html/);
    return m ? m[1] : null;
  }

  // Find the case meta in window.RGP_CASES by matching path
  function findCaseInCatalog(filename){
    const cases = window.RGP_CASES || [];
    for (const g of cases){
      for (const it of g.items){
        if (it.path && it.path.endsWith('/' + filename + '.html')) return {group:g, item:it};
      }
    }
    return null;
  }

  // Calculator title lookup — uses window.RGP_CALCULATORS if loaded (calculators-data.js),
  // else falls back to a hardcoded mini-map.
  const CALC_TITLES_FALLBACK = {
    'chads-vasc':'CHA₂DS₂-VASc', 'has-bled':'HAS-BLED', 'orbit':'ORBIT',
    'qrisk3':'QRISK3', 'abcd2':'ABCD₂', 'wells-pe':"Wells' PE", 'wells-dvt':"Wells' DVT",
    'crb-65':'CRB-65', 'feverpain':'FeverPAIN', 'centor':'Centor', 'news2':'NEWS2',
    'phq9':'PHQ-9', 'gad7':'GAD-7', 'audit-c':'AUDIT-C', 'audit':'AUDIT',
    'epworth':'Epworth', 'stop-bang':'STOP-BANG', 'egfr':'eGFR', 'crcl':'CrCl (Cockcroft-Gault)',
    'bmi':'BMI', 'frax':'FRAX', 'qfracture':'QFracture', 'ipss':'IPSS', 'must':'MUST',
    'das28':'DAS28-CRP', '6cit':'6-CIT', 'mmse-moca':'MMSE / MoCA / ACE-III',
  };
  function calcTitle(id){
    if (window.RGP_CALCULATORS) {
      const found = window.RGP_CALCULATORS.find(c => c.id === id);
      if (found) return found.title;
    }
    return CALC_TITLES_FALLBACK[id] || id;
  }

  // -------- Renderer --------
  function render(){
    const key = getCurrentCaseKey();
    if (!key) return;
    const cfg = CASE_MAP[key] || { tools:['workup','calc','rx','algorithms','leaflets'] };
    const PRE = getPathPrefix();
    const meta = findCaseInCatalog(key);

    // Build siblings (related cases) — same group, exclude self
    let siblings = [];
    if (meta) {
      siblings = meta.group.items
        .filter(it => it.id !== meta.item.id && (it.status === 'full' || it.status === 'stub'))
        .slice(0, 5);
    }

    const toolCards = (cfg.tools || []).map(t => {
      const def = TOOLS[t];
      if (!def) return '';
      return `<a class="cr-card" href="${PRE}${def.path}">
        <span class="cr-card-ic">${def.icon}</span>
        <span class="cr-card-tx">
          <b>${def.label}</b>
          <small>${def.meta}</small>
        </span>
      </a>`;
    }).join('');

    const calcChips = (cfg.calcs || []).map(id =>
      `<a class="cr-chip" href="${PRE}tools/calculators.html#${id}">
        <span class="cr-chip-ic">🧮</span> ${calcTitle(id)}
      </a>`
    ).join('');

    let patientChips = '';
    if (cfg.leaflet) {
      patientChips += `<a class="cr-chip" href="${PRE}tools/leaflets.html#${cfg.leaflet}">
        <span class="cr-chip-ic">📄</span> Patient leaflet
      </a>`;
    }
    patientChips += `<a class="cr-chip" href="${PRE}pages/resources.html#signposting">
      <span class="cr-chip-ic">🤝</span> Patient signposting (A–Z)
    </a>`;
    patientChips += `<a class="cr-chip" href="${PRE}pages/resources.html#local-pathways">
      <span class="cr-chip-ic">🏥</span> Local NHS pathways
    </a>`;

    const siblingChips = siblings.map(s =>
      `<a class="cr-chip cr-chip-case" href="${PRE}${s.path}">
        <span class="cr-chip-ic">→</span>
        <span class="cr-chip-tx"><b>${s.title}</b><small>${s.setting}</small></span>
      </a>`
    ).join('');

    const groupName = meta ? meta.group.group : '';

    const html = `
      <section class="case-related" data-screen-label="Connect">
        <div class="cr-head">
          <span class="eyebrow">Connect</span>
          <h2>Tools, leaflets &amp; related cases</h2>
          <p>Everything else on the site that ties to this case — designed so a single click takes you to the calculator, prescription, leaflet, or pathway you need next.</p>
        </div>

        <div class="cr-grid">
          <div class="cr-col">
            <h3>Tools for this case</h3>
            <div class="cr-cards">${toolCards}</div>
          </div>

          ${calcChips ? `
          <div class="cr-col">
            <h3>Calculators</h3>
            <div class="cr-chips">${calcChips}</div>
          </div>` : ''}

          <div class="cr-col">
            <h3>Patient resources</h3>
            <div class="cr-chips">${patientChips}</div>
          </div>

          ${siblings.length ? `
          <div class="cr-col cr-col-wide">
            <h3>More in ${groupName}</h3>
            <div class="cr-chips">${siblingChips}</div>
          </div>` : ''}
        </div>

        <div class="cr-foot">
          <a class="cr-foot-link" href="${PRE}index.html#framework">↑ 7-step framework</a>
          <a class="cr-foot-link" href="${PRE}tools/sca-practice.html">🎓 Practise this case under SCA conditions</a>
          <a class="cr-foot-link" href="${PRE}pages/resources.html">🔗 All UK GP resources</a>
        </div>
      </section>
    `;

    // Mount: append into the .main element, before any trailing <script> tags
    const main = document.querySelector('main.main');
    if (!main) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    const section = wrap.firstElementChild;
    main.appendChild(section);
  }

  // Inject CSS
  function injectCss(){
    if (document.getElementById('case-related-css')) return;
    const s = document.createElement('style');
    s.id = 'case-related-css';
    s.textContent = `
      .case-related{
        margin:42px 0 36px;padding:34px 30px;
        background:var(--surface-2);border:1px solid var(--line);border-radius:18px;
        position:relative;
      }
      .case-related::before{
        content:"";position:absolute;left:30px;right:30px;top:0;height:3px;
        background:linear-gradient(90deg,var(--teal),var(--rust),var(--mustard,#c79a3a));
        border-radius:2px;opacity:.7;
      }
      .cr-head{margin-bottom:22px;max-width:680px}
      .cr-head .eyebrow{display:block;margin-bottom:6px}
      .cr-head h2{
        font-family:'Source Serif 4',serif;font-size:26px;font-weight:500;
        line-height:1.15;margin:0 0 8px;letter-spacing:-0.01em;
      }
      .cr-head p{font-size:14px;color:var(--muted);line-height:1.55;margin:0}

      .cr-grid{
        display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px 28px;
      }
      .cr-col-wide{grid-column:1 / -1}
      @media(max-width:780px){.cr-grid{grid-template-columns:1fr}}

      .cr-col h3{
        font-family:'DM Sans',sans-serif;
        font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
        color:var(--muted);margin:0 0 10px;
      }

      .cr-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:8px}
      .cr-card{
        display:flex;align-items:flex-start;gap:10px;padding:11px 12px;
        background:var(--surface);border:1px solid var(--line);border-radius:10px;
        text-decoration:none;color:inherit;transition:all .15s ease;
      }
      .cr-card:hover{
        border-color:var(--rust);background:var(--bg);
        transform:translateY(-1px);
      }
      .cr-card-ic{font-size:18px;line-height:1;flex-shrink:0;margin-top:1px}
      .cr-card-tx{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1}
      .cr-card-tx b{font-size:13px;font-weight:600;color:var(--ink);line-height:1.25}
      .cr-card-tx small{font-size:11px;color:var(--muted);line-height:1.3}

      .cr-chips{display:flex;flex-wrap:wrap;gap:6px}
      .cr-chip{
        display:inline-flex;align-items:center;gap:7px;
        padding:6px 11px;font-size:12.5px;line-height:1.3;
        background:var(--surface);border:1px solid var(--line);border-radius:99px;
        color:var(--ink-2);text-decoration:none;font-weight:500;
        transition:all .15s ease;
      }
      .cr-chip:hover{background:var(--rust-soft);border-color:var(--rust);color:var(--rust-2)}
      .cr-chip-ic{font-size:13px;flex-shrink:0}
      .cr-chip.cr-chip-case{
        padding:8px 13px;border-radius:10px;align-items:flex-start;gap:9px;
      }
      .cr-chip.cr-chip-case .cr-chip-tx{display:flex;flex-direction:column;gap:1px}
      .cr-chip.cr-chip-case .cr-chip-tx b{font-size:12.5px;color:var(--ink);font-weight:600}
      .cr-chip.cr-chip-case .cr-chip-tx small{font-size:11px;color:var(--muted);line-height:1.3}

      .cr-foot{
        margin-top:22px;padding-top:18px;border-top:1px dashed var(--line);
        display:flex;flex-wrap:wrap;gap:18px;
      }
      .cr-foot-link{
        font-size:13px;color:var(--teal);text-decoration:none;font-weight:500;
      }
      .cr-foot-link:hover{color:var(--rust)}

      @media(max-width:560px){
        .case-related{padding:24px 20px;margin:32px -8px}
      }
    `;
    document.head.appendChild(s);
  }

  // -------- TOOL-PAGE side: render "Cases using this tool" --------
  function getCurrentToolKey(){
    const m = location.pathname.match(/\/tools\/([^\/]+)\.html/);
    if (!m) return null;
    // map tool filename to TOOLS key
    const filename = m[1];
    const reverse = {
      'workup':'workup',
      'prescriptions':'rx',
      'calculators':'calc',
      'lab-results':'labs',
      'algorithms':'algorithms',
      'medication-chooser':'medchooser',
      'leaflets':'leaflets',
      'sca-practice':'sca',
    };
    return reverse[filename] || null;
  }

  function renderToolPage(){
    const toolKey = getCurrentToolKey();
    if (!toolKey) return;

    // Find every case that lists this tool
    const matching = [];
    for (const [caseKey, cfg] of Object.entries(CASE_MAP)) {
      if ((cfg.tools || []).includes(toolKey)) matching.push(caseKey);
    }
    if (!matching.length) return;

    const PRE = getPathPrefix();

    // Resolve each case to its catalog entry so we get title/setting/group
    const byGroup = new Map();
    for (const caseKey of matching) {
      const meta = findCaseInCatalog(caseKey);
      if (!meta) continue;
      // Skip legacy/duplicate hypertension-v1 if v1 of HTN already in catalog
      if (caseKey === 'hypertension-v1') continue;
      if (!byGroup.has(meta.group.group)) byGroup.set(meta.group.group, []);
      byGroup.get(meta.group.group).push(meta.item);
    }
    if (!byGroup.size) return;

    const groupsHtml = [...byGroup.entries()].map(([groupName, items]) => `
      <div class="cr-col">
        <h3>${groupName}</h3>
        <div class="cr-chips">
          ${items.map(it => `<a class="cr-chip cr-chip-case" href="${PRE}${it.path}">
            <span class="cr-chip-ic">→</span>
            <span class="cr-chip-tx"><b>${it.title}</b><small>${it.setting}</small></span>
          </a>`).join('')}
        </div>
      </div>
    `).join('');

    const toolDef = TOOLS[toolKey];
    const html = `
      <section class="case-related" data-screen-label="Connect">
        <div class="cr-head">
          <span class="eyebrow">Connect</span>
          <h2>Cases that use the ${toolDef.label}</h2>
          <p>Every case below references this tool in its reasoning — jump straight into the consultation it supports.</p>
        </div>
        <div class="cr-grid">${groupsHtml}</div>
        <div class="cr-foot">
          <a class="cr-foot-link" href="${PRE}index.html">↑ Case library home</a>
          <a class="cr-foot-link" href="${PRE}pages/resources.html">🔗 UK GP resources</a>
          <a class="cr-foot-link" href="${PRE}index.html#framework">📐 7-step framework</a>
        </div>
      </section>
    `;

    // Mount at end of main
    const main = document.querySelector('main.main') || document.querySelector('main') || document.body;
    if (!main) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    main.appendChild(wrap.firstElementChild);
  }

  function init(){
    const isCasePage = !!getCurrentCaseKey();
    const isToolPage = !!getCurrentToolKey();
    if (!isCasePage && !isToolPage) return;
    injectCss();
    const fn = isCasePage ? render : renderToolPage;
    if (window.RGP_CASES) fn();
    else setTimeout(fn, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
