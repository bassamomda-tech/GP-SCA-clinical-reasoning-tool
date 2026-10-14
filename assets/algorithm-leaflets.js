/* Algorithm → patient-leaflet map for the "Give to patient" panel (assets/alg-ui.js).
   Keys are algorithm slugs (tools/algorithms/<slug>.html); values are [leaflet slug, confidence]
   pairs pointing at window.LEAFLET_CONDITIONS in assets/leaflets-data.js (first = shown first).
   confidence: 'exact' = same slug, or the algorithm name equals the leaflet's name or synonym;
               'clear' = same key words, or a reviewed manual match (reason in the review CSV).
   Same rules as assets/protocol-leaflets.js. Uncertain matches are deliberately left out — an
   algorithm with no entry shows no "Give to patient" button.
   Review list: algorithm-leaflets-review.csv. 22 of 185 live algorithms mapped.
   Oct 2026 clinical review: a symptom algorithm is NOT given a leaflet about one possible cause
   (removed: anaemia→iron deficiency, anal pain→fissure, headache→migraine, psychosis→schizophrenia,
   red eye→conjunctivitis, wheeze in children→asthma, dizziness/vertigo→labyrinthitis or BPPV). */
window.RGP_ALGORITHM_LEAFLETS = {
  'back-pain': [['low-back-pain','clear']],
  'chest-pain': [['angina','clear']],
  'chronic-cough': [['cough','exact']],
  'constipation': [['constipation','exact']],
  'dizziness': [['vertigo','exact']],
  'epistaxis': [['epistaxis','exact']],
  'fatigue': [['fatigue','exact']],
  'fever-children': [['fever-child','clear']],
  'haematuria': [['haematuria','exact']],
  'hearing-loss': [['hearing-loss','exact']],
  'knee-pain': [['knee-pain','exact']],
  'low-folate': [['b12-folate-anaemia','exact']],
  'mouth-ulcers': [['mouth-ulcers','exact']],
  'neck-pain': [['neck-pain','exact']],
  'palpitations': [['palpitations','exact']],
  'renal-colic': [['kidney-stones','exact']],
  'shoulder-pain': [['shoulder-pain','exact']],
  'sore-throat': [['tonsillitis','exact']],
  'tinnitus': [['tinnitus','exact']],
  'vertigo': [['vertigo','exact']],
  'vitamin-d-deficiency': [['vitamin-d-deficiency','exact']],
  'weight-loss': [['weight-loss-unintended','clear']]
};
