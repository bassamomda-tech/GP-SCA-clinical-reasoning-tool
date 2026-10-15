/* Reasoning GP — NICE NG12 suspected cancer quick view (reference only).
   Summarised in our own words from NICE NG12 "Suspected cancer: recognition and referral"
   (2015, last updated 15 April 2026). Always check the full recommendation and the local ICB proforma.
   a = action type: scp (suspected cancer pathway referral), vu (very urgent, within 48 hours),
       dat (direct access test), test (other test first), nonurg (non-urgent), con prefix = "consider".
   s = strength: 'offer' (refer / offer) or 'consider'. */
window.RGP_NG12 = [
  // ---------- Lung & pleura ----------
  {site:'Lung & mesothelioma', sym:'Chest X-ray suggests lung cancer or mesothelioma', age:'Any adult', a:'scp', s:'offer', act:'Suspected cancer pathway referral', link:'algorithms/chronic-cough.html'},
  {site:'Lung & mesothelioma', sym:'Unexplained haemoptysis', age:'40 and over', a:'scp', s:'offer', act:'Suspected cancer pathway referral', link:'algorithms/chronic-cough.html'},
  {site:'Lung & mesothelioma', sym:'Two or more unexplained: cough, fatigue, breathlessness, chest pain, weight loss, appetite loss — or one of these if ever smoked', age:'40 and over', a:'dat', s:'offer', act:'Urgent chest X-ray (within 2 weeks)', link:'algorithms/chronic-cough.html'},
  {site:'Lung & mesothelioma', sym:'Persistent or recurrent chest infection, finger clubbing, supraclavicular or persistent cervical lymphadenopathy, chest signs of lung cancer, or thrombocytosis', age:'40 and over', a:'dat', s:'consider', act:'Consider urgent chest X-ray (within 2 weeks)', link:'algorithms/chronic-cough.html'},
  {site:'Lung & mesothelioma', sym:'Mesothelioma symptoms (as above) with asbestos exposure or ever smoked; chest signs of pleural disease, finger clubbing or thrombocytosis', age:'40 and over', a:'dat', s:'offer', act:'Urgent chest X-ray (within 2 weeks)', link:'algorithms/breathlessness.html'},

  // ---------- Upper GI ----------
  {site:'Upper GI', sym:'Dysphagia', age:'Any age', a:'scp', s:'offer', act:'Suspected cancer pathway referral (oesophageal/stomach; changed from direct access endoscopy, May 2025)', link:'algorithms/dysphagia.html'},
  {site:'Upper GI', sym:'Weight loss with upper abdominal pain, reflux or dyspepsia', age:'55 and over', a:'scp', s:'offer', act:'Suspected cancer pathway referral (oesophageal/stomach)', link:'algorithms/dyspepsia.html'},
  {site:'Upper GI', sym:'Upper abdominal mass consistent with stomach cancer', age:'Any adult', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral', link:'algorithms/abdominal-mass.html'},
  {site:'Upper GI', sym:'Treatment-resistant dyspepsia; upper abdominal pain with low haemoglobin; raised platelets or nausea/vomiting with weight loss, reflux, dyspepsia or upper abdominal pain', age:'55 and over', a:'nonurg', s:'consider', act:'Consider non-urgent direct access upper GI endoscopy', link:'algorithms/dyspepsia.html'},
  {site:'Upper GI', sym:'Jaundice', age:'40 and over', a:'scp', s:'offer', act:'Suspected cancer pathway referral (pancreatic)', link:'algorithms/jaundice.html'},
  {site:'Upper GI', sym:'Weight loss plus any of: diarrhoea, back pain, abdominal pain, nausea, vomiting, constipation or new-onset diabetes', age:'60 and over', a:'dat', s:'consider', act:'Consider urgent direct access CT (within 2 weeks), or urgent ultrasound if CT unavailable (pancreatic)', link:'algorithms/weight-loss.html'},
  {site:'Upper GI', sym:'Upper abdominal mass consistent with an enlarged gallbladder or liver', age:'Any adult', a:'dat', s:'consider', act:'Consider urgent direct access ultrasound (within 2 weeks)', link:'algorithms/abdominal-mass.html'},

  // ---------- Lower GI ----------
  {site:'Lower GI', sym:'Any symptoms that might suggest colorectal cancer (change in bowel habit, rectal bleeding, iron-deficiency anaemia, abdominal pain, weight loss, abdominal mass)', age:'Adults', a:'test', s:'offer', act:'Offer FIT first; refer on the suspected cancer pathway if FIT 10 µg Hb/g or more (NICE DG56/HTG690)', link:'algorithms/rectal-bleeding.html'},
  {site:'Lower GI', sym:'Rectal mass, or an abdominal mass suggestive of colorectal cancer', age:'Any adult', a:'scp', s:'offer', act:'Suspected cancer pathway referral (no need to wait for FIT)', link:'algorithms/rectal-bleeding.html'},
  {site:'Lower GI', sym:'Unexplained anal mass or anal ulceration', age:'Any adult', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (anal)', link:'algorithms/anal-lumps.html'},
  {site:'Lower GI', sym:'FIT below 10 but symptoms persist or clinical concern remains', age:'Adults', a:'nonurg', s:'consider', act:'Do not rule out cancer on FIT alone: safety-net, review, use local pathway or specialist advice', link:'algorithms/chronic-diarrhoea.html'},

  // ---------- Breast ----------
  {site:'Breast', sym:'Unexplained breast lump, with or without pain', age:'30 and over', a:'scp', s:'offer', act:'Suspected cancer pathway referral', link:'management/breast-disorders.html'},
  {site:'Breast', sym:'Discharge, retraction or other changes of concern in one nipple only', age:'50 and over', a:'scp', s:'offer', act:'Suspected cancer pathway referral', link:'algorithms/nipple-problems.html'},
  {site:'Breast', sym:'Skin changes suggestive of breast cancer; or unexplained lump in the axilla', age:'Skin: any · axilla: 30 and over', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral', link:'management/breast-disorders.html'},
  {site:'Breast', sym:'Unexplained breast lump, with or without pain', age:'Under 30', a:'nonurg', s:'consider', act:'Consider non-urgent referral', link:'management/breast-disorders.html'},

  // ---------- Gynaecological ----------
  {site:'Gynaecological', sym:'Ascites, or a pelvic or abdominal mass that is not obviously uterine fibroids', age:'Any adult', a:'scp', s:'offer', act:'Suspected cancer pathway referral (ovarian)', link:'algorithms/abdominal-mass.html'},
  {site:'Gynaecological', sym:'Persistent or frequent bloating, early satiety or loss of appetite, pelvic or abdominal pain, urinary urgency or frequency (also new IBS-type symptoms, unexplained weight loss or fatigue)', age:'40 and over', a:'test', s:'offer', act:'CA125 → urgent direct access ultrasound if at or above the age threshold (35 IU/mL at 40–49, 31 at 50–59, 24 at 60–69, 25 at 70–79, 31 at 80+; amended April 2026)', link:'algorithms/abnormal-cancer-markers.html'},
  {site:'Gynaecological', sym:'Symptoms suggesting ovarian cancer', age:'39 and under', a:'dat', s:'consider', act:'Do not use CA125 alone — consider ultrasound (amended April 2026)', link:'algorithms/pelvic-pain-women.html'},
  {site:'Gynaecological', sym:'Unexplained postmenopausal bleeding (not attributable to HRT)', age:'55 and over', a:'scp', s:'offer', act:'Suspected cancer pathway referral (endometrial; amended April 2026)', link:'algorithms/vaginal-bleeding.html'},
  {site:'Gynaecological', sym:'Unexplained postmenopausal bleeding', age:'Under 55', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (endometrial)', link:'algorithms/vaginal-bleeding.html'},
  {site:'Gynaecological', sym:'Other features that may suggest endometrial cancer (for example unexplained vaginal discharge, thrombocytosis or haematuria with postmenopausal symptoms)', age:'55 and over', a:'dat', s:'consider', act:'Consider direct access ultrasound — check the amended wording of recs 1.5.14–1.5.15 (April 2026)', link:'algorithms/vaginal-discharge.html'},
  {site:'Gynaecological', sym:'Appearance of the cervix consistent with cervical cancer', age:'Any', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (cervical)', link:'algorithms/vaginal-bleeding.html'},
  {site:'Gynaecological', sym:'Unexplained vulval lump, ulceration or bleeding', age:'Any', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (vulval)', link:'management/vulvar-disorders.html'},
  {site:'Gynaecological', sym:'Unexplained palpable mass in or at the entrance to the vagina', age:'Any', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (vaginal)', link:'algorithms/vaginal-mass.html'},

  // ---------- Urological ----------
  {site:'Urological', sym:'Prostate feels malignant on rectal examination', age:'Men', a:'scp', s:'offer', act:'Suspected cancer pathway referral', link:'algorithms/high-psa.html'},
  {site:'Urological', sym:'PSA above the age-specific reference range', age:'Men', a:'scp', s:'offer', act:'Suspected cancer pathway referral (check local PSA thresholds)', link:'algorithms/high-psa.html'},
  {site:'Urological', sym:'Lower urinary tract symptoms, erectile dysfunction, visible haematuria; or unexplained back/bone pain, weight loss, fatigue', age:'Men', a:'test', s:'consider', act:'Consider PSA and digital rectal examination', link:'management/male-luts.html'},
  {site:'Urological', sym:'Unexplained visible haematuria without UTI, or persisting or recurring after successful UTI treatment', age:'45 and over', a:'scp', s:'offer', act:'Suspected cancer pathway referral (bladder or kidney)', link:'algorithms/haematuria.html'},
  {site:'Urological', sym:'Unexplained non-visible haematuria with dysuria or a raised white cell count', age:'60 and over', a:'scp', s:'offer', act:'Suspected cancer pathway referral (bladder)', link:'algorithms/haematuria.html'},
  {site:'Urological', sym:'Recurrent or persistent unexplained UTI', age:'60 and over', a:'nonurg', s:'consider', act:'Consider non-urgent referral (bladder)', link:'management/recurrent-uti.html'},
  {site:'Urological', sym:'Non-painful enlargement or change in shape or texture of the testis', age:'Men', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (testicular)', link:'algorithms/testicular-lump.html'},
  {site:'Urological', sym:'Unexplained or persistent testicular symptoms', age:'Men', a:'dat', s:'consider', act:'Consider direct access ultrasound', link:'algorithms/testicular-lump.html'},
  {site:'Urological', sym:'Penile mass or ulcerated lesion (STI excluded), or persistent unexplained change in the foreskin or glans', age:'Men', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (penile)', link:'management/penile-disorders.html'},

  // ---------- Skin ----------
  {site:'Skin', sym:'Suspicious pigmented lesion with weighted 7-point checklist score of 3 or more, or dermoscopy suggesting melanoma', age:'Any', a:'scp', s:'offer', act:'Suspected cancer pathway referral (melanoma)', link:'algorithms/pigmented-skin-lesions.html'},
  {site:'Skin', sym:'Pigmented or non-pigmented lesion suggesting nodular melanoma', age:'Any', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral', link:'algorithms/pigmented-skin-lesions.html'},
  {site:'Skin', sym:'Lesion that raises suspicion of squamous cell carcinoma', age:'Any', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral', link:'algorithms/pigmented-skin-lesions.html'},
  {site:'Skin', sym:'Lesion suggestive of basal cell carcinoma', age:'Any', a:'nonurg', s:'consider', act:'Consider routine referral; suspected cancer pathway only if delay could matter (site or size)', link:'algorithms/pigmented-skin-lesions.html'},

  // ---------- Head & neck ----------
  {site:'Head & neck', sym:'Persistent unexplained hoarseness', age:'45 and over', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (laryngeal)', link:'algorithms/hoarseness.html'},
  {site:'Head & neck', sym:'Unexplained lump in the neck', age:'45 and over', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (laryngeal)', link:'algorithms/neck-lump.html'},
  {site:'Head & neck', sym:'Unexplained ulceration in the oral cavity lasting more than 3 weeks, or a persistent unexplained neck lump', age:'Any', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (oral)', link:'algorithms/mouth-ulcers.html'},
  {site:'Head & neck', sym:'Lump on the lip or in the oral cavity; red or red-and-white patch (erythroplakia or erythroleukoplakia)', age:'Any', a:'urg', s:'consider', act:'Consider urgent dental referral (within 2 weeks)', link:'algorithms/mouth-ulcers.html'},
  {site:'Head & neck', sym:'Unexplained thyroid lump', age:'Any', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (thyroid)', link:'algorithms/neck-lump.html'},

  // ---------- Brain & CNS ----------
  {site:'Brain & CNS', sym:'Progressive, sub-acute loss of central neurological function', age:'Adults', a:'dat', s:'consider', act:'Consider urgent direct access MRI brain (or CT if MRI contraindicated) within 2 weeks', link:'algorithms/headache.html'},
  {site:'Brain & CNS', sym:'Newly abnormal cerebellar or other central neurological function', age:'Children and young people', a:'vu', s:'offer', act:'Very urgent referral (within 48 hours)', link:'algorithms/paediatric-cancer-referral.html'},

  // ---------- Haematological ----------
  {site:'Haematological', sym:'Pallor, persistent fatigue, unexplained fever or persistent infection, generalised lymphadenopathy, unexplained bruising, bleeding or petechiae, hepatosplenomegaly', age:'Adults', a:'vu', s:'consider', act:'Consider very urgent full blood count (within 48 hours) — leukaemia', link:'algorithms/bruising.html'},
  {site:'Haematological', sym:'Unexplained petechiae or hepatosplenomegaly', age:'Children and young people', a:'vu', s:'offer', act:'Very urgent referral for immediate specialist assessment', link:'algorithms/purpura-petechiae.html'},
  {site:'Haematological', sym:'Persistent bone pain (especially back pain) or unexplained fracture', age:'60 and over', a:'test', s:'offer', act:'FBC, calcium, ESR or plasma viscosity, then serum protein electrophoresis and serum free light chains (amended April 2025) — myeloma', link:'algorithms/back-pain.html'},
  {site:'Haematological', sym:'Protein electrophoresis or free light chain results suggest myeloma', age:'Any adult', a:'scp', s:'offer', act:'Suspected cancer pathway referral', link:'algorithms/abnormal-immunoglobulin.html'},
  {site:'Haematological', sym:'Unexplained lymphadenopathy (consider fever, night sweats, breathlessness, itch, weight loss, alcohol-induced node pain)', age:'Adults', a:'scp', s:'consider', act:'Consider suspected cancer pathway referral (lymphoma)', link:'algorithms/lymphadenopathy.html'},
  {site:'Haematological', sym:'Unexplained lymphadenopathy or splenomegaly', age:'Children and young people', a:'vu', s:'consider', act:'Consider very urgent referral (lymphoma)', link:'algorithms/paediatric-cancer-referral.html'},

  // ---------- Sarcoma ----------
  {site:'Sarcoma', sym:'X-ray suggests possible bone sarcoma', age:'Any', a:'scp', s:'offer', act:'Suspected cancer pathway referral (very urgent in children)', link:'algorithms/leg-pain.html'},
  {site:'Sarcoma', sym:'Unexplained bone swelling or pain', age:'Children and young people', a:'vu', s:'offer', act:'Very urgent direct access X-ray (within 48 hours)', link:'algorithms/paediatric-msk.html'},
  {site:'Sarcoma', sym:'Unexplained lump that is increasing in size', age:'Adults', a:'dat', s:'consider', act:'Consider urgent direct access ultrasound (within 2 weeks)', link:'algorithms/subcutaneous-lumps.html'},
  {site:'Sarcoma', sym:'Ultrasound suggests soft tissue sarcoma, or is uncertain and clinical concern persists', age:'Adults', a:'scp', s:'offer', act:'Suspected cancer pathway referral', link:'algorithms/subcutaneous-lumps.html'},

  // ---------- Childhood ----------
  {site:'Childhood cancers', sym:'Palpable abdominal mass or unexplained enlarged abdominal organ (neuroblastoma, Wilms tumour)', age:'Children', a:'vu', s:'offer', act:'Very urgent referral (within 48 hours)', link:'algorithms/paediatric-cancer-referral.html'},
  {site:'Childhood cancers', sym:'Absent red reflex', age:'Children', a:'urg', s:'consider', act:'Consider urgent referral for ophthalmological assessment (retinoblastoma)', link:'algorithms/paediatric-cancer-referral.html'},

  // ---------- Non-site-specific ----------
  {site:'Non-site-specific', sym:'Unexplained weight loss of more than 5% in 6 months', age:'60 and over', a:'test', s:'offer', act:'Assess for other features, then urgent investigation, a suspected cancer pathway referral or a non-specific symptoms pathway referral (rec 1.13.2, amended April 2026)', link:'algorithms/weight-loss.html'},
  {site:'Non-site-specific', sym:'Vague but concerning symptoms not meeting a site-specific route (fatigue, weight loss, nausea, abdominal pain, GP "gut feeling")', age:'Adults', a:'scp', s:'consider', act:'Consider the non-specific symptoms (rapid diagnostic centre) pathway if available locally', link:'algorithms/fatigue.html'},
  {site:'Non-site-specific', sym:'Thrombocytosis (raised platelets)', age:'40 and over (lung) / 55 and over (GI, endometrial)', a:'test', s:'consider', act:'Prompts a chest X-ray or endoscopy/ultrasound depending on symptoms — see site rows', link:'algorithms/thrombocytosis.html'}
];
