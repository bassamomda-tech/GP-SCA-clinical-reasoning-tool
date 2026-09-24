/* ============================================
   Reasoning GP — retired pathway resolver
   ============================================

   Maps a RETIRED diagnostic-pathway slug to the LIVE protocol that replaced it.
   Generated from the redirect stubs in tools/algorithms/ — those files are the
   source of truth; this map exists so that pages which BUILD a pathway URL at
   runtime (rather than writing it into the HTML) can resolve it correctly.

   WHY THIS FILE EXISTS
   Two pages compose their pathway links by interpolation rather than writing the
   URL into the HTML:
     · tools/diagnostic.html  — 'algorithms/' + it.slug + '.html'   (56 retired)
     · assets/labs.js         — `../tools/algorithms/${p.slug}.html` (10 retired)
   Because the URL is never a literal string, a text search for
   'algorithms/<slug>.html' cannot find either — which is how those links survived
   every retirement round. **Search for the CONSTRUCTION PATTERN, not the URL:**
   `algorithms/${` and `'algorithms/' +` find both. Any new page that builds a
   pathway URL must use this resolver.

   KEEP IN SYNC with RETIRED_ALG in assets/topic-links.js. The pairing is
   checked mechanically by assets/protocol-design-audit.js (PDA.checkRetiredMap).
   ============================================ */
(function (root) {
  'use strict';

  var MAP = {
    'mscc': 'mscc',
    'cauda-equina': 'cauda-equina',
    'svco': 'svco',
    'malignant-hypercalcaemia': 'malignant-hypercalcaemia',
    'terminal-haemorrhage': 'terminal-haemorrhage',
    'emergency-contraception': 'contraception',
    'postnatal-disorders': 'postnatal-disorders',
    'malnutrition': 'malnutrition',
    'sciatica': 'sciatica',
    't2dm-ramadan': 't2dm-ramadan',
    'thyroid-pregnancy': 'thyroid-pregnancy',
    'acute-asthma': 'asthma',
    'acute-copd': 'copd',
    'addisons-disease': 'addisons-disease',
    'aki': 'aki',
    'anogenital-warts': 'anogenital-warts',
    'anxiety': 'anxiety',
    'bppv': 'bppv',
    'ckd': 'ckd',
    'constipation-children': 'constipation-child',
    'contraception': 'contraception',
    'cows-milk-allergy': 'cmpa',
    'crohns-disease-flare': 'crohns-disease',
    'crohns-flare': 'crohns-disease',
    'diabetes-sick-day-rules': 'sick-day-rules',
    'diabetes-unwell-insulin': 'diabetes-unwell-insulin',
    'diverticulitis': 'diverticular-disease',
    'dka': 'dka',
    'dysmenorrhoea': 'dysmenorrhoea',
    'erectile-dysfunction': 'erectile-dysfunction',
    'fatty-liver': 'fatty-liver',
    'gord': 'gord',
    'gout': 'gout',
    'hernia': 'hernia',
    'high-cholesterol': 'hypercholesterolaemia',
    'hrt-menopause': 'hrt-prescribing',
    'hyperhidrosis': 'hyperhidrosis',
    'hypertension': 'hypertension',
    'hyperthyroidism': 'hyperthyroidism',
    'hypothyroidism': 'hypothyroidism',
    'infertility': 'infertility',
    'insomnia': 'insomnia',
    'iron-deficiency': 'iron-deficiency-anaemia',
    'leg-cramps': 'leg-cramps',
    'low-mood': 'depression',
    'luts-men': 'male-luts',
    'menieres-disease': 'menieres',
    'menorrhagia': 'menorrhagia',
    'metabolic-syndrome': 'metabolic-syndrome',
    'neuropathic-pain': 'neuropathic-pain',
    'nvp': 'nausea-vomiting-pregnancy',
    'opioid-dependence': 'opioid-dependence',
    'osteoporosis': 'osteoporosis',
    'palliative-pain': 'palliative-pain',
    'pelvic-organ-prolapse': 'pelvic-organ-prolapse',
    'penile-disorders': 'penile-disorders',
    'premature-ejaculation': 'premature-ejaculation',
    'raynauds': 'raynauds',
    'restless-legs': 'restless-legs',
    'sick-day-rules': 'sick-day-rules',
    'snoring-osa': 'osa',
    'subclinical-hypothyroidism': 'hypothyroidism',
    't2dm': 'type-2-diabetes',
    'tia': 'tia-stroke',
    'uc-flare': 'ulcerative-colitis',
    'ulcerative-colitis-flare': 'ulcerative-colitis',
    'undescended-testis': 'undescended-testis',
    'unwell-diabetes-insulin': 'diabetes-unwell-insulin',
    'urinary-incontinence-female': 'female-urinary-incontinence',
    'urticaria': 'urticaria'
  };

  /* resolve(slug, baseFromTools)
     Returns { url, kind, retired } for a pathway slug.
     baseFromTools: path prefix for a page living in tools/ (default '').   */
  function resolve(slug, base) {
    base = base || '';
    var dest = MAP[slug];
    if (dest) return { url: base + 'management/' + dest + '.html', kind: 'protocol', retired: true };
    return { url: base + 'algorithms/' + slug + '.html', kind: 'pathway', retired: false };
  }

  function isRetired(slug) { return !!MAP[slug]; }

  root.RGP_RETIRED_MAP = MAP;
  root.RGP_RESOLVE_PATHWAY = resolve;
  root.RGP_IS_RETIRED_PATHWAY = isRetired;
})(typeof globalThis !== 'undefined' ? globalThis : this);
