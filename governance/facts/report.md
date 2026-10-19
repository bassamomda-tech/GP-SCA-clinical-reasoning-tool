# Facts register report

- Statements with a clinical number: **14442**
- Files: **1320**
- Distinct fact keys (subject | action | unit): **1834**
- Keys where pages give different numbers: **754** (tier 1: 427, tier 2: 327)

## Statements by source

- case: 4673
- sca-data: 2447
- protocol: 2227
- algorithm: 1988
- other: 598
- summary: 569
- clinic-guide: 529
- snapshot: 523
- rx: 313
- sca: 244
- meds: 233
- article: 66
- teaching: 23
- audio: 9

## Top subjects

- statin: 834
- prednisolone: 486
- haemoglobin: 474
- blood pressure: 449
- aspirin: 445
- eGFR: 434
- LDL/non-HDL: 413
- doxycycline: 392
- FIT: 390
- HbA1c: 384
- glucose: 376
- calcium: 313
- hydrocortisone: 313
- folate: 304
- omeprazole/PPI: 272
- sodium: 262
- TSH: 258
- age threshold: 228
- ferritin: 225
- ALT: 207
- heart rate: 205
- potassium: 205
- oxygen saturation: 204
- metronidazole: 198
- vitamin D: 195
- creatinine: 179
- B12: 178
- amitriptyline: 175
- ramipril: 170
- ACR: 159
- BMI: 153
- amlodipine: 151
- sertraline: 151
- triglycerides: 151
- urate: 143
- paracetamol: 142
- ibuprofen: 139
- CK: 139
- metformin: 126
- naproxen: 119

## Top 60 candidate conflicts

### HbA1c | state | mmol/mol  (tier 1, 86 pages, 48 values)
- `48` — 13 page(s): assets/sca-addons-15.js, assets/sca-addons-2.js, assets/sca-cases-new-q.js, assets/sca-data/c/polyphagia-diabetes.json
- `≥48` — 12 page(s): assets/diagnostic/tatt.js, assets/pathways-redflags.js, cases/depression.html, cases/fatigue.html
- `42–47` — 11 page(s): assets/sca-addons-5.js, assets/sca-cases27.js, assets/sca-data/c/prediabetes-fork.json, cases/infertility.html
- `47` — 11 page(s): assets/sca-addons-2.js, assets/sca-addons-5.js, assets/sca-addons-7.js, assets/sca-cases27.js
- `44` — 6 page(s): assets/akt-questions.js, assets/sca-addons-7.js, assets/sca-data/c/nafld-result.json, assets/sca-data/index.js
- `45` — 6 page(s): assets/sca-cases-new-r.js, assets/sca-cases43.js, assets/sca-data/index.js, sca/case-smi-health-check.html

### glucose | state | mmol/l  (tier 1, 59 pages, 53 values)
- `>11` — 10 page(s): assets/sca-cases-new-p.js, assets/sca-data/c/new-t1dm-child.json, cases/type-1-diabetes.html, tools/algorithms/suspected-diabetes-children.html
- `<4.0` — 9 page(s): assets/sca-addons-2.js, assets/sca-data/c/t2dm-lada.json, cases/type-2-diabetes.html, tools/algorithms/hypoglycaemia.html
- `5.5–6.9` — 6 page(s): assets/sca-addons-5.js, assets/sca-data/c/prediabetes-fork.json, cases/infertility.html, cases/obesity.html
- `21.4` — 5 page(s): assets/sca-addons-15.js, assets/sca-cases80.js, assets/sca-data/c/polyphagia-diabetes.json, assets/sca-data/index.js
- `0.4` — 5 page(s): assets/sca-addons-15.js, assets/sca-cases80.js, assets/sca-data/c/polyphagia-diabetes.json, assets/sca-data/index.js
- `≥3.0` — 4 page(s): cases/type-1-diabetes.html, tools/clinic-guides/hyperglycaemia.html, tools/management/dka.html, tools/management/summaries/dka.html

### blood pressure | state | mmhg  (tier 1, 75 pages, 41 values)
- `≥20` — 15 page(s): assets/articles-data-3.js, assets/diagnostic/dizziness.js, assets/sca-cases21.js, cases/blackouts.html
- `>20` — 12 page(s): assets/pathways-redflags.js, cases/back-pain.html, cases/chest-pain.html, cases/eating-disorders.html
- `≥10` — 11 page(s): assets/articles-data-3.js, cases/hypertension.html, cases/multimorbidity-polypharmacy.html, tools/algorithms/dizziness.html
- `10` — 6 page(s): assets/ebm-topics.js, cases/tia-stroke.html, tools/algorithms/falls.html, tools/algorithms/hypotension.html
- `90` — 4 page(s): assets/sca-addons-7.js, assets/sca-data/c/nafld-result.json, cases/mi-secondary-prevention.html, tools/management/mastitis-breast-abscess.html
- `<90` — 4 page(s): assets/sca-cases26.js, assets/triage/chest-pain.js, cases/eating-disorders.html, tools/management/eating-disorders.html

### prednisolone | dose | mg  (tier 1, 81 pages, 30 values)
- `30` — 23 page(s): assets/diagnostic-cases.js, assets/prescriptions-data-batch12.js, assets/prescriptions-data.js, assets/sca-addons-10.js
- `40` — 12 page(s): assets/meds/asthma.js, assets/prescriptions-data-skin-sexual.js, assets/sca-addons-10.js, assets/sca-data/c/copd-flare-smoker.json
- `40–60` — 12 page(s): cases/headache.html, tools/algorithms/blurry-vision.html, tools/algorithms/facial-pain.html, tools/algorithms/high-crp-esr.html
- `5` — 10 page(s): cases/addisons-disease.html, cases/back-pain.html, cases/gout.html, cases/ulcerative-colitis.html
- `40–50` — 10 page(s): assets/diagnostic-cases.js, assets/prescriptions-data-batch13.js, cases/asthma.html, cases/breathlessness.html
- `15` — 9 page(s): assets/sca-cases23.js, assets/sca-data/c/pmr-gca.json, sca/case-pmr-gca.html, tools/algorithms/body-aches.html

### oxygen saturation | state | %  (tier 1, 58 pages, 33 values)
- `<92` — 11 page(s): assets/sca-cases-new-p.js, assets/sca-cases-new-q.js, assets/sca-cases18.js, assets/sca-data/c/bronchiolitis-phone.json
- `97` — 11 page(s): assets/sca-addons-15.js, assets/sca-cases-new-r.js, assets/sca-cases-new-s.js, assets/sca-cases76.js
- `98` — 9 page(s): assets/sca-addons-15.js, assets/sca-cases-new-s.js, assets/sca-cases76.js, assets/sca-data/c/dengue-fever.json
- `<20` — 6 page(s): cases/anaemia.html, cases/ckd.html, tools/algorithms/anaemia.html, tools/algorithms/microcytosis.html
- `95` — 6 page(s): assets/akt-questions.js, assets/sca-addons-15.js, assets/sca-cases33.js, assets/sca-data/c/carehome-delirium.json
- `78` — 6 page(s): assets/sca-addons-2.js, assets/sca-cases13.js, assets/sca-data/c/liver-haemochromatosis.json, assets/sca-data/index.js

### ferritin | state | µg/l  (tier 1, 50 pages, 35 values)
- `>1000` — 8 page(s): assets/pathways-redflags.js, assets/sca-addons-2.js, assets/sca-cases13.js, assets/sca-data/c/liver-haemochromatosis.json
- `<30` — 7 page(s): assets/diagnostic/tatt.js, cases/anaemia.html, tools/algorithms/mouth-ulcers.html, tools/algorithms/normocytic-anaemia.html
- `6` — 6 page(s): assets/sca-addons-1.js, assets/sca-cases-new-q.js, assets/sca-data/c/angry-apology.json, assets/sca-data/index.js
- `<15` — 6 page(s): tools/algorithms/normocytic-anaemia.html, tools/algorithms/widespread-itch.html, tools/clinic-guides/anaemia.html, tools/clinic-guides/low-ferritin.html
- `11` — 5 page(s): assets/sca-addons-1.js, assets/sca-cases4.js, assets/sca-data/c/anaemia-ida.json, assets/sca-data/index.js
- `1180` — 5 page(s): assets/sca-addons-2.js, assets/sca-cases13.js, assets/sca-data/c/liver-haemochromatosis.json, assets/sca-data/index.js

### haemoglobin | state | g/l  (tier 2, 95 pages, 54 values)
- `<100` — 15 page(s): assets/pathways-redflags.js, cases/breathlessness.html, cases/ckd.html, cases/depression.html
- `128` — 15 page(s): assets/sca-addons-1.js, assets/sca-addons-5.js, assets/sca-cases-new-p.js, assets/sca-cases-new-q.js
- `<105` — 10 page(s): assets/pathways-redflags.js, assets/sca-addons-8.js, assets/sca-cases44.js, assets/sca-data/c/uc-flare-phone.json
- `<110` — 10 page(s): cases/anaemia.html, cases/ckd.html, cases/dyspepsia.html, tools/algorithms/anaemia.html
- `<130` — 10 page(s): cases/anaemia.html, tools/algorithms/anaemia.html, tools/algorithms/normocytic-anaemia.html, tools/algorithms/one-page/anaemia.html
- `<120` — 10 page(s): assets/diagnostic/tatt.js, cases/anaemia.html, tools/algorithms/normocytic-anaemia.html, tools/algorithms/one-page/anaemia.html

### statin | dose | mg  (tier 1, 89 pages, 16 values)
- `20` — 25 page(s): assets/akt-questions.js, assets/ask-testbank.js, assets/consult-templates.js, assets/meds/ckd.js
- `80` — 25 page(s): assets/akt-questions.js, assets/articles-data-13.js, assets/consult-templates.js, assets/ebm-topics.js
- `40` — 11 page(s): assets/sca-cases-new-q.js, assets/sca-data/index.js, cases/abnormal-lfts.html, cases/aki.html
- `10` — 6 page(s): assets/meds/hypercholesterolaemia.js, cases/hypercholesterolaemia.html, cases/mi-secondary-prevention.html, cases/peripheral-arterial-disease.html
- `100` — 3 page(s): assets/sca-cases-new-s.js, assets/sca-data/index.js, sca/case-post-tia-medicine-side-effects.html
- `>10` — 2 page(s): cases/ckd.html, tools/management/hypercholesterolaemia.html

### calcium | state | mmol/l  (tier 1, 41 pages, 29 values)
- `>2.6` — 11 page(s): assets/diagnostic-cases.js, assets/kb-index.js, assets/site.js, cases/dementia.html
- `>3.5` — 10 page(s): cases/hypercalcaemia.html, tools/algorithms/abnormal-bone-profile.html, tools/algorithms/anorexia.html, tools/algorithms/hypercalcaemia.html
- `2.82` — 5 page(s): assets/sca-addons-1.js, assets/sca-cases4.js, assets/sca-data/c/hypercalcaemia-ca.json, assets/sca-data/index.js
- `2.85` — 5 page(s): assets/sca-addons-5.js, assets/sca-cases27.js, assets/sca-data/c/hypercalcaemia-workup.json, sca/case-hypercalcaemia-workup.html
- `<1.90` — 5 page(s): tools/algorithms/abnormal-bone-profile.html, tools/algorithms/hypocalcaemia.html, tools/algorithms/one-page/abnormal-bone-profile.html, tools/clinic-guides/hypocalcaemia.html
- `≥3.0` — 4 page(s): cases/hypercalcaemia.html, tools/algorithms/abnormal-bone-profile.html, tools/algorithms/hypercalcaemia.html, tools/management/malignant-hypercalcaemia.html

### ACR | dose | mg  (tier 1, 40 pages, 27 values)
- `≥70` — 12 page(s): assets/calculators.js, cases/aki.html, cases/angina.html, cases/peripheral-arterial-disease.html
- `>30` — 8 page(s): assets/sca-addons-2.js, assets/sca-addons-5.js, assets/sca-data/c/ckd3-result.json, assets/sca-data/c/t2dm-complications.json
- `≥3` — 6 page(s): assets/meds/ckd.js, cases/ckd.html, cases/type-2-diabetes.html, tools/algorithms/haematuria.html
- `>3` — 5 page(s): cases/hypercholesterolaemia.html, cases/hypertension.html, tools/algorithms/raised-creatinine.html, tools/clinic-guides/type-2-diabetes.html
- `70` — 5 page(s): assets/sca-addons-2.js, assets/sca-cases12.js, assets/sca-cases26.js, assets/sca-data/c/ckd3-result.json
- `≥30` — 4 page(s): assets/meds/ckd.js, tools/algorithms/haematuria.html, tools/algorithms/one-page/haematuria.html, tools/algorithms/proteinuria.html

### statin | state | %  (tier 1, 41 pages, 22 values)
- `≥10` — 23 page(s): assets/articles-data-13.js, assets/ebm-topics.js, assets/meds/hypercholesterolaemia.js, assets/sca-addons-3.js
- `10` — 10 page(s): assets/sca-addons-2.js, assets/sca-addons-5.js, assets/sca-cases-new-q.js, assets/sca-cases12.js
- `226510` — 3 page(s): tools/management/hypercholesterolaemia.html, tools/management/metabolic-syndrome.html, tools/management/type-2-diabetes.html
- `18` — 2 page(s): assets/sca-drills.js, cases/hypercholesterolaemia.html
- `≥50` — 2 page(s): assets/sca-addons-7.js, assets/sca-data/c/familial-hypercholesterolaemia.json
- `13.8` — 2 page(s): assets/sca-cases-new-r.js, assets/sca-data/c/smi-health-check.json

### eGFR | state | ml/min  (tier 1, 36 pages, 25 values)
- `<30` — 11 page(s): assets/meds/hypertension.js, assets/meds/type-2-diabetes.js, assets/meds/vte-treatment.js, assets/prescriptions-data-batch8.js
- `<35` — 4 page(s): cases/osteoporosis.html, tools/algorithms/abnormal-bone-profile.html, tools/clinic-guides/abnormal-bone-profile.html, tools/management/osteoporosis.html
- `<15` — 3 page(s): assets/meds/vte-treatment.js, cases/dvt.html, tools/management/ckd.html
- `15–29` — 3 page(s): assets/meds/vte-treatment.js, cases/dvt.html, cases/multimorbidity-polypharmacy.html
- `45` — 2 page(s): cases/uti-women.html, tools/management/uti-women.html
- `≥45` — 2 page(s): cases/uti-women.html, tools/management/uti-men.html

### potassium | state | mmol/l  (tier 1, 34 pages, 26 values)
- `≥6.5` — 10 page(s): assets/pathways-redflags.js, cases/aki.html, cases/ckd.html, tools/algorithms/hyperkalaemia.html
- `<3.5` — 6 page(s): assets/kb-index.js, tools/algorithms.html, tools/algorithms/_meta.json, tools/algorithms/one-page/hypokalaemia.html
- `6.6` — 5 page(s): assets/sca-addons-5.js, assets/sca-cases26.js, assets/sca-data/c/hyperkalaemia-recall.json, assets/sca-data/index.js
- `>5.5` — 4 page(s): assets/pathways-redflags.js, cases/aki.html, cases/gout.html, tools/management/ckd.html
- `<2.5` — 4 page(s): cases/eating-disorders.html, tools/management/eating-disorders.html, tools/management/malnutrition.html, tools/management/summaries/eating-disorders.html
- `≥6.0` — 4 page(s): assets/pathways-redflags.js, cases/ckd.html, tools/algorithms/raised-creatinine.html, tools/management/aki.html

### aspirin | dose | mg  (tier 1, 58 pages, 12 values)
- `75` — 25 page(s): assets/basic-science-pharma-2.js, assets/consult-templates.js, assets/meds/angina.js, assets/meds/tia-stroke.js
- `300` — 13 page(s): assets/complaint-scaffolds.js, assets/diagnostic/chest-pain.js, assets/labs/generic.js, assets/sca-addons-2.js
- `900` — 8 page(s): assets/meds/migraine.js, assets/sca-cases-new-q.js, assets/sca-data/c/bsl-patient.json, cases/headache.html
- `90` — 5 page(s): assets/sca-cases-new-t.js, assets/sca-data/index.js, cases/mi-secondary-prevention.html, tools/management/antiplatelets-anticoagulants.html
- `75–150` — 4 page(s): cases/gout.html, tools/management/gestational-diabetes.html, tools/management/hypertension-pregnancy.html, tools/management/summaries/hypertension-pregnancy.html
- `200` — 3 page(s): assets/meds/tia-stroke.js, tools/management/summaries/tia-stroke.html, tools/management/tia-stroke.html

### doxycycline | dose | mg  (tier 1, 77 pages, 8 values)
- `100` — 25 page(s): assets/prescriptions-data-batch11.js, assets/prescriptions-data-batch12.js, assets/prescriptions-data-batch13.js, assets/prescriptions-data-batch8.js
- `200` — 25 page(s): assets/prescriptions-data-batch12.js, assets/prescriptions-data-batch13.js, assets/prescriptions-data-infections.js, cases/breathlessness.html
- `408` — 8 page(s): cases/acne.html, tools/clinic-guides/acne.html, tools/management/acne.html, tools/management/hidradenitis-suppurativa.html
- `40` — 5 page(s): assets/prescriptions-data-skin-sexual.js, cases/acne.html, tools/management/dry-eye-disease.html, tools/management/rosacea.html
- `500` — 3 page(s): assets/prescriptions-data-batch11.js, assets/prescriptions-data-infections.js, tools/algorithms/one-page/vaginal-discharge.html
- `2192100` — 1 page(s): assets/prescriptions-data-batch12.js

### sodium | state | mmol/l  (tier 1, 22 pages, 28 values)
- `<135` — 9 page(s): assets/diagnostic-cases.js, assets/kb-index.js, cases/hyponatraemia.html, tools/algorithms.html
- `121` — 5 page(s): assets/sca-addons-5.js, assets/sca-cases26.js, assets/sca-data/c/hyponatraemia-diuretic.json, assets/sca-data/index.js
- `<125` — 4 page(s): cases/abnormal-lfts.html, tools/algorithms/hyponatraemia.html, tools/algorithms/unwell-older-adult.html, tools/clinic-guides/hyponatraemia.html
- `<120` — 4 page(s): assets/pathways-redflags.js, cases/hyponatraemia.html, tools/algorithms/hyponatraemia.html, tools/algorithms/one-page/hyponatraemia.html
- `<130` — 3 page(s): assets/meds/hypertension.js, cases/depression.html, tools/algorithms/hyponatraemia.html
- `>145` — 3 page(s): tools/algorithms/one-page/hypernatraemia.html, tools/clinic-guides.html, tools/clinic-guides/hypernatraemia.html

### ibuprofen | dose | mg  (tier 1, 55 pages, 11 values)
- `400` — 25 page(s): assets/articles-data-1.js, assets/meds/low-back-pain.js, assets/meds/migraine.js, assets/prescriptions-data-common.js
- `≥2400` — 4 page(s): tools/management/achilles-tendinopathy.html, tools/management/osteoarthritis.html, tools/management/summaries/tennis-elbow.html, tools/management/tennis-elbow.html
- `2400` — 3 page(s): tools/management/achilles-tendinopathy.html, tools/management/osteoarthritis.html, tools/management/tennis-elbow.html
- `500` — 2 page(s): assets/prescriptions-data-common.js, cases/migraine.html
- `200` — 2 page(s): cases/axial-spa.html, cases/sciatica.html
- `400–600` — 2 page(s): cases/back-pain.html, cases/sciatica.html

### eGFR | dose | mg  (tier 1, 27 pages, 21 values)
- `10` — 6 page(s): cases/dementia.html, cases/heart-failure.html, cases/type-2-diabetes.html, tools/clinic-guides/heart-failure.html
- `50` — 4 page(s): assets/meds/type-2-diabetes.js, cases/male-luts.html, cases/type-2-diabetes.html, tools/clinic-guides/male-luts.html
- `25` — 4 page(s): assets/meds/type-2-diabetes.js, cases/male-luts.html, cases/type-2-diabetes.html, tools/clinic-guides/male-luts.html
- `15` — 4 page(s): assets/meds/vte-treatment.js, tools/management/antiplatelets-anticoagulants.html, tools/management/summaries/atrial-fibrillation.html, tools/prescribing.html
- `30` — 4 page(s): assets/meds/vte-treatment.js, tools/management/summaries/atrial-fibrillation.html, tools/management/summaries/influenza-covid-antivirals.html, tools/prescribing.html
- `100` — 4 page(s): assets/meds/type-2-diabetes.js, tools/clinic-guides/type-2-diabetes.html, tools/management/influenza-covid-antivirals.html, tools/management/summaries/influenza-covid-antivirals.html

### LDL/non-HDL | state | %  (tier 1, 21 pages, 26 values)
- `>40` — 9 page(s): assets/labs/generic.js, assets/meds/hypercholesterolaemia.js, cases/type-2-diabetes.html, tools/clinic-guides/abnormal-lipid-profile.html
- `40` — 6 page(s): assets/articles-data-13.js, cases/hypercholesterolaemia.html, tools/algorithms/abnormal-lipid-profile.html, tools/algorithms/proteinuria.html
- `≥50` — 6 page(s): tools/algorithms/one-page/abnormal-lipid-profile.html, tools/clinic-guides/abnormal-lipid-profile.html, tools/clinic-guides/hypercholesterolaemia.html, tools/management.html
- `50–60` — 2 page(s): cases/hypercholesterolaemia.html, cases/mi-secondary-prevention.html
- `50` — 2 page(s): cases/hypercholesterolaemia.html, tools/management/familial-hypercholesterolaemia.html
- `<40` — 2 page(s): assets/meds/hypercholesterolaemia.js, cases/type-2-diabetes.html

### statin | start/initiate | %  (tier 1, 44 pages, 11 values)
- `≥10` — 25 page(s): assets/akt-questions.js, assets/calculators-data.js, assets/ebm-topics.js, assets/sca-addons-11.js
- `10` — 16 page(s): assets/sca-addons-11.js, assets/sca-addons-15.js, assets/sca-addons-3.js, assets/sca-addons-5.js
- `50` — 3 page(s): assets/sca-addons-7.js, assets/sca-data/c/familial-hypercholesterolaemia.json, cases/hypercholesterolaemia.html
- `<10` — 3 page(s): cases/hypertension.html, tools/algorithms/one-page/abnormal-lipid-profile.html, tools/management/summaries/hypercholesterolaemia.html
- `>40` — 3 page(s): assets/akt-questions.js, assets/meds/ckd.js, tools/management/summaries/metabolic-syndrome.html
- `18` — 1 page(s): cases/hypercholesterolaemia.html

### eGFR | state | %  (tier 1, 28 pages, 17 values)
- `≥25` — 9 page(s): assets/labs/generic.js, cases/ckd.html, tools/algorithms/ankle-swelling.html, tools/algorithms/one-page/proteinuria.html
- `25` — 8 page(s): assets/basic-science-patho.js, assets/basic-science-pharma.js, assets/calculators.js, assets/sca-addons-5.js
- `32` — 3 page(s): assets/sca-cases-new-p.js, assets/sca-data/index.js, sca/case-living-with-hiv.html
- `39` — 2 page(s): cases/ckd.html, cases/peripheral-arterial-disease.html
- `226525` — 2 page(s): tools/management/ckd.html, tools/management/type-2-diabetes.html
- `≤25` — 2 page(s): tools/management/summaries/ckd.html, tools/management/summaries/heart-failure.html

### sertraline | dose | mg  (tier 1, 26 pages, 18 values)
- `50` — 17 page(s): cases/anxiety.html, cases/autism.html, cases/blackouts.html, cases/dementia.html
- `100` — 6 page(s): assets/sca-cases63.js, assets/sca-data/c/eupd-crisis.json, cases/anxiety.html, cases/insomnia.html
- `200` — 5 page(s): assets/meds/anxiety.js, cases/ocd.html, cases/ptsd.html, tools/management/anxiety.html
- `100–200` — 4 page(s): cases/depression.html, cases/mi-secondary-prevention.html, cases/ocd.html, cases/ptsd.html
- `25` — 4 page(s): cases/anxiety.html, cases/autism.html, cases/dementia.html, tools/management/summaries/palliative-anxiety-depression.html
- `up–200` — 4 page(s): cases/ocd.html, tools/clinic-guides/anxiety.html, tools/management/anxiety.html, tools/management/summaries/anxiety.html

### calcium | dose | mg  (tier 1, 29 pages, 16 values)
- `1000` — 6 page(s): cases/cmpa-reflux.html, cases/coeliac.html, cases/ulcerative-colitis.html, tools/algorithms/chronic-diarrhoea.html
- `700` — 4 page(s): cases/menopause.html, tools/clinic-guides/abnormal-bone-profile.html, tools/clinic-guides/hypocalcaemia.html, tools/management/osteoporosis.html
- `≥700` — 4 page(s): assets/sca-addons-4.js, assets/sca-cases21.js, assets/sca-data/c/dexa-bisphosphonate.json, tools/algorithms/amenorrhoea.html
- `700–1000` — 4 page(s): tools/algorithms/abnormal-bone-profile.html, tools/algorithms/amenorrhoea.html, tools/algorithms/fractures.html, tools/algorithms/one-page/amenorrhoea.html
- `500` — 3 page(s): cases/hypercalcaemia.html, cases/hypothyroidism.html, tools/algorithms/abnormal-bone-profile.html
- `<700` — 3 page(s): tools/algorithms/one-page/vitamin-d-deficiency.html, tools/algorithms/vitamin-d-deficiency.html, tools/clinic-guides/vitamin-d-deficiency.html

### bisoprolol | dose | mg  (tier 1, 29 pages, 16 values)
- `2.5` — 13 page(s): assets/meds/hypertension.js, assets/sca-cases-new-r.js, assets/sca-cases-new-s.js, assets/sca-cases6.js
- `5` — 10 page(s): assets/meds/angina.js, assets/sca-cases-new-s.js, assets/sca-cases-new-t.js, assets/sca-data/index.js
- `10` — 9 page(s): assets/meds/angina.js, assets/meds/atrial-fibrillation.js, assets/meds/hypertension.js, cases/angina.html
- `1.25` — 4 page(s): cases/angina.html, cases/heart-failure.html, tools/management/heart-failure.html, tools/management/mi-secondary-prevention.html
- `5–10` — 4 page(s): cases/angina.html, tools/algorithms/chest-pain.html, tools/clinic-guides/hypertension.html, tools/clinic-guides/stable-angina.html
- `2.5–10` — 3 page(s): cases/atrial-fibrillation.html, cases/chest-pain.html, cases/palpitations.html

### creatinine | state | µmol/l  (tier 1, 33 pages, 14 values)
- `≥133` — 11 page(s): cases/atrial-fibrillation.html, cases/multimorbidity-polypharmacy.html, cases/palpitations.html, tools/algorithms/bruising.html
- `≥26` — 5 page(s): assets/dx-packs/aki.js, assets/pathways-redflags.js, tools/algorithms/raised-creatinine.html, tools/management/summaries/aki.html
- `71` — 3 page(s): assets/sca-cases-new-t.js, assets/sca-data/index.js, sca/case-recurrent-uti-letrozole.html
- `88` — 3 page(s): assets/sca-cases-new-t.js, assets/sca-data/index.js, sca/case-ace-cough-post-mi.html
- `92` — 3 page(s): assets/sca-cases-new-r.js, assets/sca-data/index.js, sca/case-results-ecg-af.html
- `78` — 3 page(s): assets/sca-cases-new-s.js, assets/sca-data/index.js, sca/case-melaena-declines-admission.html

### TSH | state | mu/l  (tier 1, 26 pages, 17 values)
- `>10` — 7 page(s): assets/pathways-redflags.js, assets/sca-addons-2.js, assets/sca-data/c/thyroid-subclin-preg.json, tools/algorithms/abnormal-tfts.html
- `<0.1` — 6 page(s): assets/dx-packs/palpitations.js, cases/anxiety.html, cases/blackouts.html, cases/hyperthyroidism.html
- `5.8` — 5 page(s): assets/sca-addons-2.js, assets/sca-cases11.js, assets/sca-data/c/thyroid-subclin-preg.json, assets/sca-data/index.js
- `4.0` — 5 page(s): assets/sca-addons-2.js, assets/sca-cases11.js, assets/sca-data/c/thyroid-subclin-preg.json, assets/sca-data/index.js
- `22` — 4 page(s): assets/sca-addons-2.js, assets/sca-data/c/thyroid-hypo-young.json, assets/sca-data/index.js, sca/case-thyroid-hypo-young.html
- `6.4` — 4 page(s): assets/sca-addons-2.js, assets/sca-cases11.js, assets/sca-data/c/thyroid-subclinical.json, assets/sca-data/index.js

### heart rate | state | °c  (tier 1, 31 pages, 14 values)
- `>37.8` — 7 page(s): assets/pathways-redflags.js, assets/sca-addons-8.js, assets/sca-data/c/uc-flare-phone.json, cases/ulcerative-colitis.html
- `37.9` — 5 page(s): assets/sca-cases33.js, assets/sca-cases44.js, assets/sca-data/c/carehome-delirium.json, assets/sca-data/c/uc-flare-phone.json
- `36.6` — 4 page(s): assets/sca-addons-12.js, assets/sca-data/c/migraine-moh.json, assets/sca-data/index.js, sca/case-migraine-moh.html
- `35.6` — 4 page(s): assets/sca-cases-new-r.js, assets/sca-data/c/adult-eating-disorder.json, assets/sca-data/index.js, assets/sca-sc-tasks-extra.js
- `39.2` — 4 page(s): assets/sca-addons-15.js, assets/sca-data/c/dengue-fever.json, assets/sca-data/index.js, sca/case-dengue-fever.html
- `37.0` — 4 page(s): assets/sca-addons-15.js, assets/sca-data/c/diverticular-disease.json, assets/sca-data/index.js, sca/case-diverticular-disease.html

### ramipril | dose | mg  (tier 1, 42 pages, 10 values)
- `5` — 23 page(s): assets/sca-cases-new-r.js, assets/sca-cases-new-s.js, assets/sca-cases-new-t.js, assets/sca-cases2.js
- `10` — 16 page(s): assets/meds/angina.js, assets/meds/hypertension.js, assets/sca-cases-new-q.js, assets/sca-cases-new-t.js
- `2.5` — 10 page(s): assets/meds/hypertension.js, assets/sca-addons-2.js, assets/sca-cases6.js, assets/sca-data/c/hf-four-pillars.json
- `1.25` — 4 page(s): assets/meds/angina.js, assets/meds/hypertension.js, cases/hypertension.html, cases/peripheral-arterial-disease.html
- `32` — 2 page(s): tools/clinic-guides/heart-failure.html, tools/management/summaries/heart-failure.html
- `2.5–10` — 1 page(s): cases/tia-stroke.html

### triglycerides | state | mmol/l  (tier 1, 16 pages, 26 values)
- `>10` — 5 page(s): assets/basic-science-pharma-2.js, assets/pathways-redflags.js, cases/hypercholesterolaemia.html, tools/algorithms/high-triglycerides.html
- `>20` — 5 page(s): assets/pathways-redflags.js, tools/algorithms/high-triglycerides.html, tools/algorithms/one-page/high-triglycerides.html, tools/clinic-guides/abnormal-lipid-profile.html
- `>4.5` — 5 page(s): tools/algorithms/abnormal-lipid-profile.html, tools/algorithms/one-page/abnormal-lipid-profile.html, tools/algorithms/one-page/high-triglycerides.html, tools/clinic-guides/abnormal-lipid-profile.html
- `≥1.7` — 3 page(s): cases/hypercholesterolaemia.html, tools/algorithms/high-triglycerides.html, tools/management/summaries/metabolic-syndrome.html
- `2.8` — 3 page(s): assets/sca-cases-new-q.js, assets/sca-data/index.js, sca/case-telephone-interpreter.html
- `4.5–9.9` — 3 page(s): tools/algorithms/abnormal-lipid-profile.html, tools/algorithms/high-triglycerides.html, tools/clinic-guides/abnormal-lipid-profile.html

### LDL/non-HDL | state | mmol/l  (tier 2, 37 pages, 30 values)
- `≤2.6` — 10 page(s): cases/hypercholesterolaemia.html, cases/mi-secondary-prevention.html, tools/algorithms/abnormal-lipid-profile.html, tools/clinic-guides/abnormal-lipid-profile.html
- `≤2.0` — 9 page(s): cases/abnormal-lfts.html, cases/angina.html, cases/chest-pain.html, cases/hypercholesterolaemia.html
- `>7.5` — 6 page(s): assets/articles-data-13.js, tools/algorithms/abnormal-lipid-profile.html, tools/algorithms/high-triglycerides.html, tools/algorithms/one-page/high-triglycerides.html
- `>4.9` — 5 page(s): tools/algorithms/abnormal-lipid-profile.html, tools/clinic-guides/hypercholesterolaemia.html, tools/management/hypercholesterolaemia.html, tools/management/screening-programmes.html
- `9.2` — 4 page(s): assets/sca-addons-7.js, assets/sca-data/c/familial-hypercholesterolaemia.json, assets/sca-data/index.js, sca/case-familial-hypercholesterolaemia.html
- `6.8` — 4 page(s): assets/sca-addons-7.js, assets/sca-data/c/familial-hypercholesterolaemia.json, assets/sca-data/index.js, sca/case-familial-hypercholesterolaemia.html

### FIT | refer | micrograms  (tier 1, 90 pages, 4 values)
- `≥10` — 25 page(s): assets/akt-questions.js, assets/articles-data-25.js, assets/articles-data-5.js, assets/complaint-redflags.js
- `10` — 18 page(s): assets/audio-scripts-2.js, assets/dx-packs/anaemia.js, assets/dx-packs/chronic-diarrhoea.js, assets/dx-packs/constipation.js
- `<10` — 6 page(s): assets/sca-addons-4.js, assets/sca-cases22.js, assets/sca-data/c/bowel-habit-fit.json, assets/sca-data/c/rectal-bleeding-2ww.json
- `47` — 4 page(s): assets/sca-addons-1.js, assets/sca-data/c/fit-positive.json, assets/sca-data/index.js, sca/case-fit-positive.html

### metronidazole | dose | mg  (tier 1, 51 pages, 7 values)
- `400` — 25 page(s): assets/prescriptions-data-batch12.js, assets/prescriptions-data-batch6.js, assets/prescriptions-data-infections.js, assets/prescriptions-data-skin-sexual.js
- `400–500` — 8 page(s): assets/prescriptions-data-batch13.js, assets/prescriptions-data-zz-fields.js, cases/vaginal-discharge.html, tools/algorithms/one-page/vaginal-discharge.html
- `500` — 2 page(s): assets/prescriptions-data-batch11.js, tools/clinic-guides/dyspepsia.html
- `408` — 1 page(s): assets/prescriptions-data-batch11.js
- `250` — 1 page(s): assets/prescriptions-data.js
- `800` — 1 page(s): tools/management/trichomoniasis.html

### age threshold | state | %  (tier 1, 19 pages, 18 values)
- `5` — 5 page(s): assets/sca-addons-9.js, assets/sca-data/c/weight-loss-normal-tests.json, assets/updates-nice-archive.js, pages/updates.html
- `<92` — 3 page(s): tools/algorithms/cough-children.html, tools/algorithms/wheeze-child.html, tools/management/bronchiolitis.html
- `50` — 2 page(s): cases/diverticulosis.html, tools/management/hypercholesterolaemia.html
- `2` — 2 page(s): assets/pathways-redflags.js, tools/management/female-pattern-hair-loss.html
- `30` — 2 page(s): tools/management/chilblains.html, tools/management/hypercholesterolaemia.html
- `<90` — 2 page(s): tools/algorithms/cough-children.html, tools/algorithms/wheeze-child.html

### hydrocortisone | state | %  (tier 1, 48 pages, 7 values)
- `1` — 25 page(s): assets/articles-data-20.js, assets/meds/eczema.js, assets/meds/psoriasis.js, assets/prescriptions-data-batch10.js
- `0.5–2.5` — 2 page(s): assets/prescriptions-data-extra.js, tools/management/eczema.html
- `0.9` — 2 page(s): tools/algorithms/one-page/female-hormone-abnormalities.html, tools/management/addisons-disease.html
- `2.5` — 1 page(s): cases/cmpa-reflux.html
- `0.5–1` — 1 page(s): cases/eczema.html
- `1–2.5` — 1 page(s): cases/eczema.html

### CRP | state | mg/l  (tier 1, 19 pages, 17 values)
- `28` — 5 page(s): assets/sca-addons-7.js, assets/sca-cases35.js, assets/sca-data/c/raised-inflammatory-markers.json, assets/sca-data/index.js
- `42` — 3 page(s): assets/sca-cases-new-s.js, assets/sca-data/index.js, sca/case-ovarian-results-moving-on.html
- `<5` — 2 page(s): cases/crohns.html, tools/algorithms/high-crp-esr.html
- `20–100` — 2 page(s): cases/chest-infections.html, tools/management/chest-infections.html
- `4` — 2 page(s): assets/sca-cases43.js, assets/sca-data/index.js
- `5–20` — 2 page(s): tools/algorithms/high-crp-esr.html, tools/algorithms/one-page/high-crp-esr.html

### BMI | state | kg/m²  (tier 1, 20 pages, 16 values)
- `>30` — 4 page(s): tools/algorithms/female-hormone-abnormalities.html, tools/algorithms/testosterone-deficiency.html, tools/management/gestational-diabetes.html, tools/management/summaries/gestational-diabetes.html
- `29.5` — 2 page(s): assets/sca-cases-new-q.js, assets/sca-data/c/telephone-interpreter.json
- `≥30` — 2 page(s): tools/management/osa.html, tools/management/summaries/osa.html
- `30` — 2 page(s): tools/algorithms/abnormal-semen-analysis.html, tools/management/macular-degeneration.html
- `<35` — 1 page(s): cases/contraception.html
- `3.5` — 1 page(s): cases/dyspepsia.html

### morphine | dose | mg  (tier 1, 15 pages, 21 values)
- `60` — 7 page(s): assets/akt-questions.js, assets/sca-cases6.js, assets/sca-data/c/pall-pain.json, cases/chronic-pain.html
- `30` — 7 page(s): assets/sca-addons-1.js, assets/sca-data/c/pall-pain.json, assets/sca-worked-examples-b.js, cases/palliative-care.html
- `5` — 5 page(s): assets/sca-addons-1.js, assets/sca-data/c/pall-pain.json, assets/sca-worked-examples-b.js, cases/palliative-care.html
- `20` — 3 page(s): cases/palliative-care.html, tools/management/palliative-breathlessness.html, tools/management/palliative-pain.html
- `10` — 2 page(s): cases/palliative-care.html, tools/management/palliative-pain.html
- `40` — 2 page(s): cases/palliative-care.html, tools/management/palliative-pain.html

### amitriptyline | dose | mg  (tier 2, 41 pages, 22 values)
- `10` — 21 page(s): assets/meds/neuropathic-pain.js, assets/prescriptions-data-common.js, assets/prescriptions-data.js, assets/sca-cases-new-r.js
- `10–25` — 8 page(s): assets/basic-science-pharma-4.js, assets/prescriptions-data.js, cases/migraine.html, tools/algorithms/facial-pain.html
- `25` — 7 page(s): assets/sca-cases-new-q.js, assets/sca-cases33.js, assets/sca-data/c/iatrogenic-anticholinergic.json, assets/sca-data/index.js
- `5–10` — 5 page(s): assets/meds/ibs.js, tools/algorithms/bloating.html, tools/algorithms/one-page/bloating.html, tools/management/ibs.html
- `25–75` — 4 page(s): assets/prescriptions-data-common.js, assets/prescriptions-data.js, cases/neuropathic-pain.html, tools/management/summaries/tension-headache.html
- `10–75` — 4 page(s): cases/dyspepsia.html, cases/headache.html, tools/algorithms/headache.html, tools/management/post-herpetic-neuralgia.html

### prednisolone | start/initiate | mg  (tier 1, 30 pages, 10 values)
- `40–60` — 10 page(s): assets/labs/generic.js, assets/sca-addons-4.js, assets/sca-cases23.js, assets/sca-data/c/pmr-gca.json
- `15` — 7 page(s): assets/sca-addons-4.js, assets/sca-cases78.js, assets/sca-data/c/pmr-gca.json, assets/sca-data/c/steroid-fracture-osteoporosis.json
- `7.5` — 7 page(s): assets/sca-addons-15.js, assets/sca-addons-4.js, assets/sca-cases78.js, assets/sca-data/c/pmr-gca.json
- `≥7.5` — 5 page(s): assets/pathways-redflags.js, tools/algorithms/hip-pain.html, tools/clinic-guides/osteoporosis.html, tools/management/bullous-pemphigoid.html
- `60` — 3 page(s): assets/labs/generic.js, cases/headache.html, tools/algorithms/facial-pain.html
- `30` — 3 page(s): assets/prescriptions-data-batch13.js, assets/sca-addons-10.js, assets/sca-data/c/copd-flare-smoker.json

### sodium | state | %  (tier 1, 25 pages, 12 values)
- `0.9` — 10 page(s): assets/dx-packs/hyponatraemia.js, cases/hyponatraemia.html, cases/palliative-care.html, tools/algorithms/epistaxis.html
- `2` — 8 page(s): assets/prescriptions-data-batch7.js, assets/prescriptions-data-common.js, cases/allergic-rhinitis.html, cases/red-eye.html
- `0.1` — 4 page(s): cases/allergic-rhinitis.html, cases/red-eye.html, tools/algorithms/one-page/red-eye.html, tools/algorithms/watery-eye.html
- `5` — 4 page(s): assets/prescriptions-data-batch6.js, cases/hyponatraemia.html, tools/algorithms/hypernatraemia.html, tools/algorithms/hyponatraemia.html
- `3` — 2 page(s): cases/hyponatraemia.html, tools/management/actinic-keratosis.html
- `up–40` — 1 page(s): cases/hyponatraemia.html

### folate | dose | mg  (tier 1, 55 pages, 5 values)
- `5` — 25 page(s): assets/ask-testbank.js, assets/labs/generic.js, assets/meds/pcos.js, assets/prescriptions-data-batch7.js
- `2.5` — 1 page(s): tools/management/giant-cell-arteritis.html
- `0.25` — 1 page(s): tools/algorithms/macrocytosis.html
- `0.4` — 1 page(s): tools/algorithms/low-folate.html
- `70` — 1 page(s): tools/algorithms/vitamin-d-deficiency.html

### hydrocortisone | dose | mg  (tier 1, 27 pages, 10 values)
- `100` — 16 page(s): assets/triage/asthma.js, cases/addisons-disease.html, cases/asthma.html, cases/breathlessness.html
- `≥40` — 8 page(s): cases/addisons-disease.html, cases/hyponatraemia.html, tools/algorithms/hypotension.html, tools/algorithms/one-page/hypotension.html
- `15–25` — 5 page(s): cases/addisons-disease.html, tools/algorithms/anorexia.html, tools/algorithms/hypotension.html, tools/management/addisons-disease.html
- `2.5` — 5 page(s): tools/algorithms/mouth-ulcers.html, tools/algorithms/one-page/sore-mouth-tongue.html, tools/algorithms/sore-mouth-tongue.html, tools/management/aphthous-ulcer.html
- `20` — 4 page(s): cases/addisons-disease.html, tools/management/palliative-corticosteroids.html, tools/management/sick-day-rules.html, tools/management/summaries/sick-day-rules.html
- `200` — 4 page(s): cases/addisons-disease.html, tools/management/addisons-disease.html, tools/management/sick-day-rules.html, tools/prescribing.html

### creatinine | state | %  (tier 1, 22 pages, 12 values)
- `≤30` — 5 page(s): assets/meds/ckd.js, cases/heart-failure.html, tools/clinic-guides/heart-failure.html, tools/management/heart-failure.html
- `30` — 4 page(s): assets/basic-science-patho.js, assets/basic-science-pharma.js, tools/algorithms/proteinuria.html, tools/prescribing.html
- `<30` — 3 page(s): cases/mi-secondary-prevention.html, tools/algorithms/hyperkalaemia.html, tools/clinic-guides/ckd.html
- `≥50` — 3 page(s): assets/pathways-redflags.js, tools/algorithms/raised-creatinine.html, tools/management/summaries/aki.html
- `≥30` — 3 page(s): tools/algorithms/proteinuria.html, tools/clinic-guides/hypertension.html, tools/management/ckd.html
- `>30` — 2 page(s): cases/aki.html, tools/management/ckd.html

### metformin | dose | mg  (tier 1, 24 pages, 11 values)
- `500` — 11 page(s): assets/sca-cases-new-r.js, assets/sca-data/index.js, cases/abnormal-lfts.html, cases/ckd.html
- `10` — 7 page(s): assets/sca-cases62.js, assets/sca-data/c/aki-sick-day.json, tools/clinic-guides/hyperglycaemia.html, tools/clinic-guides/type-2-diabetes.html
- `100` — 3 page(s): assets/sca-cases56.js, assets/sca-data/c/insulin-start-beliefs.json, cases/neuropathic-pain.html
- `160` — 3 page(s): assets/sca-cases56.js, assets/sca-data/c/insulin-start-beliefs.json, tools/management/insulin-type-2-diabetes.html
- `80` — 3 page(s): assets/sca-cases.js, assets/sca-data/index.js, tools/management/t2dm-ramadan.html
- `≥1` — 2 page(s): tools/algorithms/one-page/vitamin-b12-deficiency.html, tools/algorithms/vitamin-b12-deficiency.html

### eGFR | state | ml/min/1.73m²  (tier 1, 24 pages, 11 values)
- `15` — 6 page(s): assets/calculators.js, assets/sca-addons-5.js, assets/sca-cases26.js, assets/sca-data/c/ckd3-result.json
- `≥15` — 5 page(s): cases/ckd.html, tools/algorithms/ankle-swelling.html, tools/algorithms/raised-creatinine.html, tools/clinic-guides/raised-creatinine.html
- `<30` — 3 page(s): cases/amenorrhoea.html, cases/infertility.html, tools/management/malignant-hypercalcaemia.html
- `78` — 3 page(s): assets/sca-cases-new-t.js, assets/sca-data/index.js, sca/case-recurrent-uti-letrozole.html
- `<60` — 3 page(s): assets/diagnostic/tatt.js, tools/algorithms/raised-creatinine.html, tools/algorithms/vision-loss.html
- `68` — 1 page(s): cases/neuropathic-pain.html

### BMI | state | %  (tier 1, 20 pages, 13 values)
- `5–10` — 6 page(s): cases/abnormal-lfts.html, cases/low-back-pain.html, cases/mi-secondary-prevention.html, cases/migraine.html
- `>15` — 5 page(s): tools/algorithms/low-folate.html, tools/algorithms/one-page/anorexia.html, tools/algorithms/one-page/low-folate.html, tools/management/eating-disorders.html
- `>5` — 3 page(s): cases/dementia.html, tools/algorithms/one-page/weight-loss.html, tools/algorithms/weight-loss.html
- `>10` — 3 page(s): tools/algorithms/one-page/anorexia.html, tools/management/eating-disorders.html, tools/management/malnutrition.html
- `10` — 1 page(s): cases/osteoarthritis.html
- `~50` — 1 page(s): cases/osteoarthritis.html

### blood pressure | recheck/monitor | weeks  (tier 1, 28 pages, 9 values)
- `2` — 11 page(s): assets/sca-addons-2.js, assets/sca-cases-new-q.js, assets/sca-data/c/htn-young-bp.json, assets/sca-data/c/polypharmacy-frailty-review.json
- `4` — 5 page(s): assets/sca-addons-12.js, assets/sca-data/c/overactive-bladder.json, cases/blackouts.html, cases/mi-secondary-prevention.html
- `2–4` — 4 page(s): assets/diagnostic/hypertension.js, cases/multimorbidity-polypharmacy.html, cases/tia-stroke.html, tools/management/angioedema.html
- `6` — 3 page(s): cases/blackouts.html, cases/ckd.html, tools/algorithms/weight-gain.html
- `1–2` — 3 page(s): assets/sca-addons-2.js, assets/sca-data/c/t2dm-complications.json, tools/clinic-guides/heart-failure.html
- `3` — 3 page(s): assets/sca-cases-new-s.js, assets/sca-data/index.js, sca/case-ed-after-mi-online-tablets.html

### platelets | state | ×10⁹/l  (tier 2, 34 pages, 22 values)
- `<150` — 7 page(s): assets/kb-index.js, tools/algorithms.html, tools/algorithms/_meta.json, tools/algorithms/one-page/thrombocytopenia.html
- `>450` — 7 page(s): assets/kb-index.js, tools/algorithms.html, tools/algorithms/_meta.json, tools/algorithms/one-page/thrombocytosis.html
- `<20` — 5 page(s): assets/pathways-redflags.js, tools/algorithms/pancytopenia.html, tools/algorithms/purpura-petechiae.html, tools/clinic-guides/pancytopenia.html
- `38` — 4 page(s): assets/sca-addons-8.js, assets/sca-data/c/low-platelets-young.json, assets/sca-data/index.js, sca/case-low-platelets-young.html
- `210` — 4 page(s): assets/sca-addons-15.js, assets/sca-data/c/cll-lymphocytosis.json, assets/sca-data/index.js, sca/case-cll-lymphocytosis.html
- `428` — 3 page(s): assets/sca-cases-new-t.js, assets/sca-data/index.js, sca/case-results-ra-fertility.html

### pregabalin | dose | mg  (tier 1, 19 pages, 13 values)
- `75` — 11 page(s): assets/meds/neuropathic-pain.js, assets/prescriptions-data-common.js, assets/sca-cases-new-s.js, assets/sca-data/index.js
- `150` — 5 page(s): assets/meds/anxiety.js, tools/algorithms/sensory-neuropathy.html, tools/management/anxiety.html, tools/management/neuropathic-pain.html
- `300` — 4 page(s): cases/anxiety.html, tools/management/neuropathic-pain.html, tools/management/opioid-prescribing.html, tools/management/palliative-pain.html
- `150–300` — 2 page(s): cases/anxiety.html, cases/neuropathic-pain.html
- `75–300` — 2 page(s): cases/neuropathic-pain.html, tools/management/post-herpetic-neuralgia.html
- `600` — 2 page(s): assets/meds/anxiety.js, assets/prescriptions-data-batch8.js

### HbA1c | state | %  (tier 1, 16 pages, 15 values)
- `13.8` — 4 page(s): assets/sca-cases-new-r.js, assets/sca-data/c/smi-health-check.json, assets/sca-data/index.js, assets/sca-sc-tasks-extra.js
- `7.5` — 2 page(s): assets/meds/type-1-diabetes.js, cases/type-1-diabetes.html
- `14` — 2 page(s): cases/hypercholesterolaemia.html, tools/management/type-2-diabetes.html
- `1` — 2 page(s): cases/type-2-diabetes.html, tools/management/type-2-diabetes.html
- `60` — 1 page(s): cases/neuropathic-pain.html
- `>70` — 1 page(s): cases/type-1-diabetes.html

### haemoglobin | recheck/monitor | weeks  (tier 1, 29 pages, 8 values)
- `2–4` — 17 page(s): assets/consult-templates.js, assets/dx-packs/iron-deficiency.js, assets/sca-addons-1.js, assets/sca-cases4.js
- `4` — 13 page(s): assets/sca-addons-1.js, assets/sca-addons-3.js, assets/sca-cases16.js, assets/sca-cases8.js
- `>3–4` — 4 page(s): assets/sca-addons-1.js, assets/sca-cases4.js, assets/sca-data/c/anaemia-ida.json, sca/case-anaemia-ida.html
- `2` — 4 page(s): tools/algorithms/low-ferritin.html, tools/algorithms/normocytic-anaemia.html, tools/algorithms/one-page/low-ferritin.html, tools/clinic-guides/microcytosis.html
- `~2–4` — 2 page(s): tools/algorithms/low-ferritin.html, tools/algorithms/one-page/low-ferritin.html
- `4–8` — 1 page(s): cases/anaemia.html

### respiratory rate | state | %  (tier 1, 21 pages, 11 values)
- `50–75` — 5 page(s): assets/sca-cases-new-p.js, assets/sca-data/c/bronchiolitis-phone.json, tools/management/bronchiolitis.html, tools/management/preschool-wheeze.html
- `33–50` — 5 page(s): assets/pathways-redflags.js, assets/triage/asthma.js, tools/algorithms/breathlessness.html, tools/algorithms/one-page/breathlessness.html
- `<92` — 5 page(s): tools/algorithms/one-page/fever-adults.html, tools/algorithms/one-page/renal-colic.html, tools/algorithms/renal-colic.html, tools/algorithms/unwell-older-adult.html
- `<94` — 3 page(s): assets/pathways-redflags.js, tools/management/anaphylaxis.html, tools/management/summaries/anaphylaxis.html
- `201350` — 2 page(s): assets/akt-questions.js, tools/management/asthma.html
- `<88` — 1 page(s): cases/copd.html

### clarithromycin | dose | mg  (tier 1, 46 pages, 5 values)
- `500` — 25 page(s): assets/prescriptions-data-batch11.js, assets/prescriptions-data-batch12.js, assets/prescriptions-data-batch13.js, assets/prescriptions-data-infections.js
- `250–500` — 7 page(s): assets/prescriptions-data-infections.js, tools/algorithms/blistering-rash.html, tools/algorithms/one-page/sore-throat.html, tools/algorithms/sore-throat.html
- `250` — 6 page(s): cases/eczema.html, tools/clinic-guides/eczema.html, tools/management/eczema.html, tools/management/impetigo.html
- `up–500` — 1 page(s): tools/management/impetigo.html
- `125` — 1 page(s): tools/management/summaries/cellulitis.html

### omeprazole/PPI | dose | mg  (tier 2, 40 pages, 16 values)
- `20` — 25 page(s): assets/articles-data-2.js, assets/consult-templates.js, assets/prescriptions-data-common.js, assets/sca-cases44.js
- `30` — 14 page(s): assets/prescriptions-data-common.js, assets/prescriptions-data.js, cases/abdominal-pain.html, cases/anaemia.html
- `40` — 7 page(s): cases/chest-pain.html, cases/dyspepsia.html, tools/algorithms/dyspepsia.html, tools/algorithms/magnesium-deficiency.html
- `15–30` — 5 page(s): cases/axial-spa.html, cases/migraine.html, cases/palliative-care.html, tools/management/ppi-prescribing.html
- `20–40` — 4 page(s): assets/sca-cases-new-s.js, assets/sca-data/c/melaena-declines-admission.json, cases/abdominal-pain.html, cases/dyspepsia.html
- `15` — 3 page(s): cases/osteoarthritis.html, cases/palliative-care.html, cases/sciatica.html

### glucose | diagnose/threshold | mmol/l  (tier 1, 16 pages, 13 values)
- `>11` — 5 page(s): assets/pathways-redflags.js, assets/sca-addons-15.js, assets/sca-data/c/polyphagia-diabetes.json, tools/algorithms/suspected-diabetes-children.html
- `7.0` — 3 page(s): assets/sca-cases62.js, assets/sca-data/c/gestational-diabetes.json, sca/case-gestational-diabetes.html
- `>11.0` — 2 page(s): assets/sca-addons-2.js, assets/sca-data/c/t2dm-lada.json
- `≥11.1` — 2 page(s): tools/algorithms/hyperglycaemia.html, tools/clinic-guides/hyperglycaemia.html
- `11.1` — 1 page(s): cases/enuresis.html
- `≥3.0` — 1 page(s): assets/pathways-redflags.js

### paracetamol | dose | g  (tier 1, 33 pages, 6 values)
- `1` — 25 page(s): assets/meds/low-back-pain.js, assets/meds/migraine.js, assets/prescriptions-data-batch6.js, assets/prescriptions-data-infections.js
- `up–5` — 3 page(s): assets/sca-cases-new-t.js, assets/sca-data/c/diverticulitis-discharge.json, assets/sca-data/index.js
- `8` — 3 page(s): assets/sca-cases-new-s.js, assets/sca-data/c/loin-pain-away-from-home.json, assets/sca-data/index.js
- `up–4` — 2 page(s): assets/sca-cases-new-t.js, assets/sca-data/c/diverticulitis-discharge.json
- `4` — 2 page(s): assets/sca-cases-new-t.js, assets/sca-data/c/diverticulitis-discharge.json
- `≤6` — 1 page(s): tools/clinic-guides/ckd.html

### prednisolone | 999/admit | mg  (tier 1, 28 pages, 7 values)
- `40–60` — 9 page(s): assets/diagnostic/headache.js, assets/sca-cases23.js, assets/sca-data/c/pmr-gca.json, cases/headache.html
- `5` — 9 page(s): assets/sca-addons-7.js, assets/sca-cases35.js, assets/sca-data/c/raised-inflammatory-markers.json, sca/case-raised-inflammatory-markers.html
- `60` — 8 page(s): assets/diagnostic/headache.js, assets/triage/headache.js, cases/headache.html, tools/algorithms/facial-pain.html
- `≥5` — 4 page(s): tools/algorithms/one-page/lymphopenia.html, tools/management/bullous-pemphigoid.html, tools/management/sick-day-rules.html, tools/management/summaries/bullous-pemphigoid.html
- `40–50` — 2 page(s): tools/clinic-guides/asthma.html, tools/management/summaries/asthma.html
- `20` — 1 page(s): tools/management/sick-day-rules.html

### glucose | 999/admit | mmol/l  (tier 1, 17 pages, 11 values)
- `≥3.0` — 3 page(s): cases/type-1-diabetes.html, tools/clinic-guides/hyperglycaemia.html, tools/management/summaries/dka.html
- `<3` — 3 page(s): cases/eating-disorders.html, tools/management/summaries/type-2-diabetes.html, tools/management/type-2-diabetes.html
- `7.0` — 2 page(s): assets/sca-cases62.js, assets/sca-data/c/gestational-diabetes.json
- `22653.0` — 2 page(s): tools/management/dka.html, tools/management/type-2-diabetes.html
- `>11` — 2 page(s): tools/algorithms/one-page/vomiting-children.html, tools/algorithms/vomiting-children.html
- `<4` — 2 page(s): tools/algorithms/one-page/dizziness.html, tools/algorithms/unwell-older-adult.html

### amlodipine | dose | mg  (tier 2, 60 pages, 9 values)
- `5` — 25 page(s): assets/meds/angina.js, assets/meds/hypertension.js, assets/sca-addons-1.js, assets/sca-cases-new-q.js
- `10` — 23 page(s): assets/meds/angina.js, assets/meds/hypertension.js, assets/sca-cases-new-q.js, assets/sca-cases-new-r.js
- `5–10` — 3 page(s): cases/angina.html, cases/tia-stroke.html, tools/clinic-guides/hypertension.html
- `7.5` — 2 page(s): assets/sca-cases2.js, assets/sca-data/index.js
- `90` — 1 page(s): cases/angina.html
- `20` — 1 page(s): cases/hypercholesterolaemia.html

### hydrocortisone | 999/admit | mg  (tier 1, 19 pages, 9 values)
- `100` — 18 page(s): cases/addisons-disease.html, cases/amenorrhoea.html, cases/hyponatraemia.html, tools/algorithms/anorexia.html
- `≥40` — 2 page(s): cases/addisons-disease.html, tools/management/sick-day-rules.html
- `20` — 2 page(s): cases/addisons-disease.html, tools/management/sick-day-rules.html
- `25` — 2 page(s): tools/management/addisons-disease.html, tools/management/sick-day-rules.html
- `50` — 2 page(s): tools/management/addisons-disease.html, tools/management/sick-day-rules.html
- `5` — 1 page(s): cases/fatigue.html

