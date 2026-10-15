/* ============================================================
   Reasoning GP — neutral "setting" lines for SCA cases (Upload 137, Oct 2026)
   The setting line shows above the candidate brief, before and during the
   consultation. These replacements keep the consultation type and the reason
   for booking, but no longer name the diagnosis, the result to interpret or
   the hidden agenda. Loaded after the last case file.
   ============================================================ */
(function(){
  var NEUTRAL = {
  "af-incidental": "Telephone — results discussion after a recent ECG.",
  "hf-four-pillars": "Video consultation — review after a recent echocardiogram.",
  "t2dm-lada": "Telephone — diabetes review; tablets not seeming to work.",
  "liver-haemochromatosis": "Video consultation — to discuss recent blood results.",
  "syncope-cardiac-fh": "Video consultation — faints during football.",
  "headache-thunderclap": "Telephone — sudden severe headache.",
  "headache-preeclampsia": "Video consultation — 34 weeks pregnant, new headache.",
  "dizzy-older-postural": "Telephone — recurrent light-headedness.",
  "headache-coital": "Video consultation — booked for \"headaches\".",
  "hmb-fibroids": "Telephone — heavy periods; recent scan result to discuss.",
  "depression-firearms": "Video consultation — trouble sleeping and irritability.",
  "ptsd-veteran": "Telephone — ex-forces man asking about his back and his temper.",
  "carer-strain": "Video consultation — wife booked to talk about her husband.",
  "alcohol-dvla-driver": "Telephone — patient requesting help to stop drinking.",
  "hyperkalaemia-recall": "Telephone — GP-initiated recall to discuss a blood result.",
  "ckd3-result": "Telephone — patient distressed by a kidney blood-test letter.",
  "hyponatraemia-diuretic": "Telephone — to discuss recent blood results.",
  "nonvisible-haematuria": "Video consultation — to discuss a urine test result.",
  "raised-prolactin": "Video consultation — periods stopped and nipple discharge; blood results back.",
  "thyroid-nodule": "Video consultation — a lump the patient found in the neck.",
  "hypercalcaemia-workup": "Video consultation — to discuss a recent blood result.",
  "aaa-incidental": "Video consultation — to discuss a recent scan result.",
  "sicknote-unsupported": "Video consultation — request for a fit note.",
  "dont-record-this": "Telephone — patient asked to speak to a doctor.",
  "covert-medication": "Telephone — daughter calling about her mother's medication.",
  "coeliac-disease": "Video consultation — long-standing IBS and tiredness.",
  "painless-jaundice": "Video consultation — his wife thinks he looks yellow.",
  "nafld-result": "Video consultation — to discuss a liver blood test result.",
  "raised-inflammatory-markers": "Video consultation — to discuss recent blood results.",
  "macrocytosis-result": "Telephone — to discuss a recent blood count.",
  "familial-hypercholesterolaemia": "Video consultation — to discuss a cholesterol result.",
  "acne-psychological": "Video consultation — acne; requesting stronger treatment.",
  "b12-deficiency": "Video consultation — to discuss a recent blood result and next steps.",
  "diplopia-ms-myasthenia": "Video consultation — intermittent double vision in a young adult.",
  "aki-sick-day": "Video consultation — blood test results after a diarrhoea/vomiting illness.",
  "gestational-diabetes": "Video consultation — discussing a glucose test result in pregnancy.",
  "motor-neurone-disease": "Video consultation — slurred speech, dropping things and tripping",
  "ocd-recognition": "Video consultation — repeated checking and hand-washing taking over daily life (no examination needed).",
  "pityriasis-rosea": "Video consultation, with the skin examined face to face if the images are unclear — a spreading scaly rash on the trunk.",
  "molluscum-contagiosum": "Video consultation, parent present, with the skin examination arranged face to face if the images are unclear — a child with small skin bumps.",
  "de-quervains": "Video consultation, with the wrist examination arranged face to face — radial wrist pain in a new mother.",
  "wilsons-disease": "Video consultation, parent present with Adam’s agreement, with the liver and neurological examination arranged face to face — a young adult with abnormal liver tests, shaking and a change in mood.",
  "premature-ejaculation": "Video consultation — a young man requesting antidepressants",
  "cll-lymphocytosis": "Video consultation — discussing a routine blood test result",
  "picky-eating": "Video consultation — a worried parent about a fussy toddler (health visitor measurements recorded)",
  "forced-marriage": "Video consultation — a frightened teenager, alone in a private room at school, worried about a family trip abroad",
  "fibromyalgia": "Video — follow-up of blood tests for widespread aches and tiredness."
};
  (window.SCA_CASES || []).forEach(function(c){
    if (c && c.meta && Object.prototype.hasOwnProperty.call(NEUTRAL, c.id)) c.meta.setting = NEUTRAL[c.id];
  });
})();
