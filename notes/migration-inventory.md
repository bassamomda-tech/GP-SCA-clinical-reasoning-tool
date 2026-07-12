# Management-card migration inventory (CORRECTED via grep, this session)

176 total cards. Reliable marker of an upgraded card = title contains `— The Complete Guide`.
grep returned 29 matches (under the 100 cap = complete list).

## DONE — Complete Guide (29):
heart-failure, atrial-fibrillation, type-2-diabetes, stable-angina, hypothyroidism, eczema,
ckd, copd, hyperthyroidism, hypertension, male-luts, antiplatelets-anticoagulants,
hypercholesterolaemia, depression, osteoarthritis, uti-women, migraine, gord, osteoporosis,
menorrhagia, opioid-prescribing, insomnia, pulmonary-embolism, gout, asthma, obesity,
rheumatoid-arthritis, giant-cell-arteritis, anxiety.

## NOTE: obesity + giant-cell-arteritis were ALREADY complete (earlier session) —
my previous inventory wrongly listed them as old. Don't rewrite them.

## OLD → still to migrate: 176 − 29 = 147 cards.
Workflow: write <slug>-v2.html (Complete Guide, MG.render, css/js ?v=… , Step-tagged nodes) →
show_html + get_webview_logs self-check → move over original + de-DRAFT title/screen-label → continue.
User standing instruction: DON'T wait for "replace" — self-check then replace immediately.

## NEXT high-yield genuinely-old (verified not in done-list):
smoking-cessation, cellulitis, shingles, sinusitis, sore-throat, renal-colic,
iron-deficiency-anaemia, coeliac-disease, neuropathic-pain, post-herpetic-neuralgia,
trigeminal-neuralgia, me-cfs, postnatal-depression, premenstrual-syndrome, dysmenorrhoea,
pelvic-inflammatory-disease, osa, obesity(DONE-skip), giant-cell-arteritis(DONE-skip),
then STI cluster (chlamydia, gonorrhoea, genital-herpes, bacterial-vaginosis, trichomoniasis,
vaginal-discharge, urethritis-male, anogenital-warts), then derm/eye/ortho minors.
To get a fresh accurate old-list any time: grep `— The Complete Guide"` in tools/management, subtract from ls.
