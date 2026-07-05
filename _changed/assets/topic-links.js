/* ============================================
   Reasoning GP — Topic cross-links ("Across the toolkit")
   Auto-injects a compact strip on Case / Diagnostic-algorithm /
   Management-card pages linking to the SAME topic in the other tools.
   Single source of truth: the REG map below (generated from the
   files that actually exist in each tool).
   ============================================ */
(function(){
  "use strict";
  var REG = {"migraine":{"c":"migraine","a":null,"m":"migraine","t":"Migraine"},"stable-angina":{"c":"angina","a":null,"m":"stable-angina","t":"Stable Angina"},"type-2-diabetes":{"c":"type-2-diabetes","a":"t2dm","m":"type-2-diabetes","t":"Type 2 Diabetes"},"tia-stroke":{"c":"tia-stroke","a":"tia","m":"tia-stroke","t":"TIA & Stroke"},"male-luts":{"c":"male-luts","a":"luts-men","m":"male-luts","t":"Male LUTS"},"urinary-incontinence-female":{"c":"urinary-incontinence","a":"urinary-incontinence-female","m":"female-urinary-incontinence","t":"Urinary Incontinence"},"hypercholesterolaemia":{"c":"hypercholesterolaemia","a":"high-cholesterol","m":"hypercholesterolaemia","t":"Hypercholesterolaemia"},"menopause":{"c":"menopause","a":"hrt-menopause","m":"menopause","t":"Menopause"},"nausea-vomiting-pregnancy":{"c":null,"a":"nvp","m":"nausea-vomiting-pregnancy","t":"Nausea/Vomiting in Pregnancy"},"crohns":{"c":"crohns","a":"crohns-flare","m":"crohns-disease","t":"Crohn's Disease"},"ulcerative-colitis":{"c":"ulcerative-colitis","a":"uc-flare","m":"ulcerative-colitis","t":"Ulcerative Colitis"},"diverticular":{"c":"diverticulosis","a":"diverticulitis","m":"diverticular-disease","t":"Diverticular Disease"},"constipation":{"c":"constipation","a":"constipation","m":"constipation-adult","t":"Constipation"},"enuresis":{"c":"enuresis","a":null,"m":"nocturnal-enuresis","t":"Enuresis"},"low-back-pain":{"c":"low-back-pain","a":"back-pain","m":null,"t":"Low Back Pain"},"abdominal-pain":{"c":"abdominal-pain","a":"abdominal-pain","m":null,"t":"Abdominal Pain"},"abnormal-lfts":{"c":"abnormal-lfts","a":"abnormal-lfts","m":null,"t":"Abnormal Lfts"},"anaemia":{"c":"anaemia","a":"anaemia","m":null,"t":"Anaemia"},"anxiety":{"c":"anxiety","a":"anxiety","m":"anxiety","t":"Anxiety"},"asthma":{"c":"asthma","a":"acute-asthma","m":"asthma","t":"Asthma"},"atrial-fibrillation":{"c":"atrial-fibrillation","a":null,"m":"atrial-fibrillation","t":"Atrial Fibrillation"},"breathlessness":{"c":"breathlessness","a":"breathlessness","m":null,"t":"Breathlessness"},"chest-pain":{"c":"chest-pain","a":"chest-pain","m":null,"t":"Chest Pain"},"ckd":{"c":"ckd","a":"ckd","m":"ckd","t":"CKD"},"contraception":{"c":"contraception","a":"contraception","m":"contraception","t":"Contraception"},"copd":{"c":"copd","a":"acute-copd","m":"copd","t":"COPD"},"dementia":{"c":"dementia","a":null,"m":"dementia","t":"Dementia"},"depression":{"c":"depression","a":null,"m":"depression","t":"Depression"},"dyspepsia":{"c":"dyspepsia","a":"dyspepsia","m":null,"t":"Dyspepsia"},"gout":{"c":"gout","a":"gout","m":"gout","t":"Gout"},"hearing-loss":{"c":"hearing-loss","a":"hearing-loss","m":null,"t":"Hearing Loss"},"heart-failure":{"c":"heart-failure","a":null,"m":"heart-failure","t":"Heart Failure"},"hypercalcaemia":{"c":"hypercalcaemia","a":"hypercalcaemia","m":null,"t":"Hypercalcaemia"},"hypertension":{"c":"hypertension","a":"hypertension","m":"hypertension","t":"Hypertension"},"hyperthyroidism":{"c":"hyperthyroidism","a":"hyperthyroidism","m":"hyperthyroidism","t":"Hyperthyroidism"},"hyponatraemia":{"c":"hyponatraemia","a":"hyponatraemia","m":null,"t":"Hyponatraemia"},"hypothyroidism":{"c":"hypothyroidism","a":"hypothyroidism","m":"hypothyroidism","t":"Hypothyroidism"},"ibs":{"c":"ibs","a":null,"m":"ibs","t":"IBS"},"osteoarthritis":{"c":"osteoarthritis","a":null,"m":"osteoarthritis","t":"Osteoarthritis"},"osteoporosis":{"c":"osteoporosis","a":"osteoporosis","m":"osteoporosis","t":"Osteoporosis"},"palpitations":{"c":"palpitations","a":"palpitations","m":null,"t":"Palpitations"},"pcos":{"c":"pcos","a":null,"m":"pcos","t":"PCOS"},"peripheral-arterial-disease":{"c":"peripheral-arterial-disease","a":null,"m":"peripheral-arterial-disease","t":"Peripheral Arterial Disease"},"red-eye":{"c":"red-eye","a":"red-eye","m":null,"t":"Red Eye"},"tinnitus":{"c":"tinnitus","a":"tinnitus","m":null,"t":"Tinnitus"},"type-1-diabetes":{"c":"type-1-diabetes","a":null,"m":"type-1-diabetes","t":"Type 1 Diabetes"},"vertigo":{"c":"vertigo","a":"vertigo","m":null,"t":"Vertigo"},"erectile-dysfunction":{"c":"erectile-dysfunction","a":"erectile-dysfunction","m":"erectile-dysfunction","t":"Erectile Dysfunction"},"hirsutism":{"c":null,"a":"hirsutism","m":"hirsutism","t":"Hirsutism"},"hyperhidrosis":{"c":null,"a":"hyperhidrosis","m":"hyperhidrosis","t":"Hyperhidrosis"},"leg-cramps":{"c":null,"a":"leg-cramps","m":"leg-cramps","t":"Leg Cramps"},"premature-ejaculation":{"c":null,"a":"premature-ejaculation","m":"premature-ejaculation","t":"Premature Ejaculation"},"raynauds":{"c":null,"a":"raynauds","m":"raynauds","t":"Raynauds"},"sciatica":{"c":"sciatica","a":"sciatica","m":"sciatica","t":"Sciatica"},"uti-children":{"c":null,"a":"uti-children","m":"uti-children","t":"UTI in Children"},"addisons-disease":{"c":"addisons-disease","a":"addisons-disease","m":"addisons-disease","t":"Addisons Disease"},"aki":{"c":"aki","a":"aki","m":"aki","t":"AKI"},"anogenital-warts":{"c":null,"a":"anogenital-warts","m":"anogenital-warts","t":"Anogenital Warts"},"bppv":{"c":null,"a":"bppv","m":"bppv","t":"BPPV"},"dysmenorrhoea":{"c":null,"a":"dysmenorrhoea","m":"dysmenorrhoea","t":"Dysmenorrhoea"},"gord":{"c":null,"a":"gord","m":"gord","t":"GORD"},"infertility":{"c":"infertility","a":"infertility","m":"infertility","t":"Infertility"},"insomnia":{"c":"insomnia","a":"insomnia","m":"insomnia","t":"Insomnia"},"menorrhagia":{"c":null,"a":"menorrhagia","m":"menorrhagia","t":"Menorrhagia"},"metabolic-syndrome":{"c":null,"a":"metabolic-syndrome","m":"metabolic-syndrome","t":"Metabolic Syndrome"},"neuropathic-pain":{"c":"neuropathic-pain","a":"neuropathic-pain","m":"neuropathic-pain","t":"Neuropathic Pain"},"palliative-pain":{"c":null,"a":"palliative-pain","m":"palliative-pain","t":"Palliative Pain"},"renal-colic":{"c":null,"a":"renal-colic","m":"renal-colic","t":"Renal Colic"},"restless-legs":{"c":null,"a":"restless-legs","m":"restless-legs","t":"Restless Legs"},"sensory-neuropathy":{"c":null,"a":"sensory-neuropathy","m":"sensory-neuropathy","t":"Sensory Neuropathy"},"shoulder-pain":{"c":"shoulder-pain","a":"shoulder-pain","m":"shoulder-pain","t":"Shoulder Pain"},"sore-throat":{"c":null,"a":"sore-throat","m":"sore-throat","t":"Sore Throat"},"undescended-testis":{"c":null,"a":"undescended-testis","m":"undescended-testis","t":"Undescended Testis"},"urticaria":{"c":"urticaria","a":"urticaria","m":"urticaria","t":"Urticaria"},"vaginal-discharge":{"c":"vaginal-discharge","a":"vaginal-discharge","m":"vaginal-discharge","t":"Vaginal Discharge"},"palliative-delirium-agitation":{"c":null,"a":"delirium","m":"palliative-delirium-agitation","t":"Palliative Delirium Agitation"},"menieres":{"c":null,"a":"menieres-disease","m":"menieres","t":"Menieres"},"osa":{"c":"osa","a":"snoring-osa","m":"osa","t":"OSA"},"iron-deficiency-anaemia":{"c":null,"a":"iron-deficiency","m":"iron-deficiency-anaemia","t":"Iron Deficiency Anaemia"},"constipation-child":{"c":"constipation-children","a":"constipation-children","m":"constipation-child","t":"Constipation Child"},"acne":{"c":"acne","a":null,"m":"acne","t":"Acne"},"allergic-rhinitis":{"c":"allergic-rhinitis","a":null,"m":"allergic-rhinitis","t":"Allergic Rhinitis"},"amenorrhoea":{"c":"amenorrhoea","a":"amenorrhoea","m":null,"t":"Amenorrhoea"},"dvt":{"c":"dvt","a":null,"m":"dvt","t":"Dvt"},"eczema":{"c":"eczema","a":null,"m":"eczema","t":"Eczema"},"fatigue":{"c":"fatigue","a":"fatigue","m":null,"t":"Fatigue"},"glaucoma":{"c":"glaucoma","a":null,"m":"glaucoma","t":"Glaucoma"},"headache":{"c":"headache","a":"headache","m":null,"t":"Headache"},"hip-pain":{"c":"hip-pain","a":"hip-pain","m":null,"t":"Hip Pain"},"hiv":{"c":"hiv","a":null,"m":"hiv","t":"HIV"},"mi-secondary-prevention":{"c":"mi-secondary-prevention","a":null,"m":"mi-secondary-prevention","t":"MI Secondary Prevention"},"neck-pain":{"c":"neck-pain","a":"neck-pain","m":null,"t":"Neck Pain"},"obesity":{"c":"obesity","a":null,"m":"obesity","t":"Obesity"},"ocd":{"c":"ocd","a":null,"m":"ocd","t":"OCD"},"parkinsons":{"c":"parkinsons","a":null,"m":"parkinsons","t":"Parkinsons"},"ptsd":{"c":"ptsd","a":null,"m":"ptsd","t":"PTSD"},"uti-women":{"c":"uti-women","a":null,"m":"uti-women","t":"UTI Women"},"alcohol":{"c":"alcohol","a":null,"m":"alcohol-problem-drinking","t":"Alcohol"},"axial-spa":{"c":"axial-spa","a":null,"m":"ankylosing-spondylitis","t":"Axial Spa"},"blackouts":{"c":"blackouts","a":"tloc","m":null,"t":"Blackouts"},"childhood-limp":{"c":"childhood-limp","a":"limping-children","m":null,"t":"Childhood Limp"},"childhood-msk":{"c":"childhood-msk","a":"paediatric-msk","m":null,"t":"Childhood Msk"},"cmpa-reflux":{"c":"cmpa-reflux","a":"cows-milk-allergy","m":"cmpa","t":"CMPA Reflux"},"coeliac":{"c":"coeliac","a":null,"m":"coeliac-disease","t":"Coeliac"},"diarrhoea":{"c":"diarrhoea","a":"chronic-diarrhoea","m":null,"t":"Diarrhoea"},"dry-eye":{"c":"dry-eye","a":null,"m":"dry-eye-disease","t":"Dry Eye"},"fungal-infections":{"c":"fungal-infections","a":null,"m":"fungal-skin-infection","t":"Fungal Infections"},"perinatal-mental-health":{"c":"perinatal-mental-health","a":"postnatal-disorders","m":"postnatal-depression","t":"Perinatal Mental Health"},"premenstrual-disorder":{"c":"premenstrual-disorder","a":null,"m":"premenstrual-syndrome","t":"Premenstrual Disorder"},"pruritus":{"c":"pruritus","a":"widespread-itch","m":null,"t":"Pruritus"},"psychosis-schizophrenia":{"c":"psychosis-schizophrenia","a":"psychosis","m":null,"t":"Psychosis Schizophrenia"},"tremor":{"c":"tremor","a":"tremors","m":"essential-tremor","t":"Tremor"},"wheeze-children":{"c":"wheeze-children","a":"wheeze-child","m":"asthma-children","t":"Wheeze Children"}};

  // current page → {type, slug}
  function current(){
    var p = location.pathname;
    var m;
    if ((m = p.match(/\/tools\/algorithms\/([^\/]+)\.html/))) return {type:'a', slug:m[1], pre:'../../'};
    if ((m = p.match(/\/tools\/management\/([^\/]+)\.html/)))  return {type:'m', slug:m[1], pre:'../../'};
    if ((m = p.match(/\/cases\/([^\/]+)\.html/)))              return {type:'c', slug:m[1], pre:'../'};
    return null;
  }
  // find the REG entry whose field for this type === slug
  function lookup(cur){
    for (var k in REG){ if (REG[k][cur.type] === cur.slug) return REG[k]; }
    return null;
  }
  var DEF = {
    c:{icon:'📋', label:'Full case',           sub:'7-step reasoning walkthrough', path:function(p,s){return p+'cases/'+s+'.html';}},
    a:{icon:'🗺️', label:'Diagnostic algorithm', sub:'Visual triage + workup',       path:function(p,s){return p+'tools/algorithms/'+s+'.html';}},
    m:{icon:'💠', label:'Protocol',      sub:'Stepwise treatment pathway',   path:function(p,s){return p+'tools/management/'+s+'.html';}}
  };
  var ORDER = ['c','a','m'];

  function build(){
    var cur = current(); if (!cur) return;
    var entry = lookup(cur); if (!entry) return;
    var others = ORDER.filter(function(t){ return t !== cur.type && entry[t]; });
    if (!others.length) return;

    var cards = others.map(function(t){
      var d = DEF[t];
      return '<a class="tl-card" href="'+d.path(cur.pre, entry[t])+'">'+
        '<span class="tl-ic">'+d.icon+'</span>'+
        '<span class="tl-tx"><b>'+d.label+'</b><small>'+d.sub+'</small></span>'+
        '<span class="tl-arr">→</span></a>';
    }).join('');

    var strip = document.createElement('div');
    strip.className = 'tl-strip';
    strip.setAttribute('data-screen-label','Across the toolkit');
    strip.innerHTML =
      '<div class="tl-head"><span class="tl-eyebrow">Across the toolkit</span>'+
      '<span class="tl-topic">'+entry.t+'</span></div>'+
      '<div class="tl-cards">'+cards+'</div>';

    // insertion target by page type
    var target, mode;
    if (cur.type === 'a'){ target = document.querySelector('.alg-flow'); mode='before'; }
    else if (cur.type === 'm'){ target = document.querySelector('#mgRoot .mg-stem'); mode='after'; }
    else { target = document.querySelector('main.main'); mode='prepend'; }

    if (!target){ // fallbacks
      target = document.querySelector('main.main, .mg-wrap, body'); mode='prepend';
    }
    if (mode==='before') target.parentNode.insertBefore(strip, target);
    else if (mode==='after') target.parentNode.insertBefore(strip, target.nextSibling);
    else target.insertBefore(strip, target.firstChild);
  }

  function css(){
    if (document.getElementById('tl-css')) return;
    var s = document.createElement('style'); s.id='tl-css';
    s.textContent = [
      '.tl-strip{font-family:"DM Sans",system-ui,sans-serif;margin:16px auto;max-width:1080px;',
      '  background:linear-gradient(135deg,#0c4a47,#0e5c58);border-radius:14px;padding:14px 16px;color:#f3ede0;}',
      '.tl-strip .tl-head{display:flex;align-items:baseline;gap:10px;margin-bottom:10px;flex-wrap:wrap}',
      '.tl-eyebrow{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#9ec9c4}',
      '.tl-topic{font-family:"Source Serif 4",Georgia,serif;font-size:16px;font-weight:600;color:#fff}',
      '.tl-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px}',
      '.tl-card{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;',
      '  background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.16);text-decoration:none;color:#fff;transition:background .15s ease}',
      '.tl-card:hover{background:rgba(255,255,255,.20)}',
      '.tl-ic{font-size:18px;flex-shrink:0}',
      '.tl-tx{display:flex;flex-direction:column;min-width:0;flex:1}',
      '.tl-tx b{font-size:13px;font-weight:600;line-height:1.2}',
      '.tl-tx small{font-size:11px;color:rgba(243,237,224,.78);line-height:1.3}',
      '.tl-arr{color:rgba(255,255,255,.6);font-size:15px;flex-shrink:0}',
      '@media print{.tl-strip{display:none!important}}'
    ].join('\n');
    document.head.appendChild(s);
  }

  function init(){ css(); build(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
