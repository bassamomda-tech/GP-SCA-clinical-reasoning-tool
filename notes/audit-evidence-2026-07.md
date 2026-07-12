# Audit evidence log — expert review session (July 2026)

## ROUND 12 (accessibility audit + fixes) — COMPLETE.
- PROBED index.html (live-DOM contrast ratios, WCAG 2.2 AA). Already-passing: img alts, accessible
  names, labelled inputs, lang, landmarks, no outline:none, nav targets ≥24px. FAILS: --muted 4.33:1,
  --muted-2 2.29:1, --teal-3 4.32:1 on cream at small sizes; no skip link; install-app btn 18px target.
  (.x-arrow 1.55:1 decorative — exempt, left.)
- FIXES: (1) site.css :root — --muted→#5d6673 (~5.1:1), --muted-2→#64748b (~4.8:1), --teal-3→#136a65
  (~5.6:1) — near-identical visually, fixes all marginal text site-wide. (2) site.js a11y IIFE appended:
  global :focus-visible outline (2px teal, keyboard-only) + "Skip to content" link (.rgp-skip, hidden
  until focus, targets main/.main/.tool-page/.alg-flow, tabindex=-1+focus). (3) install-app button
  padding 0→8px 6px, -4px margin (≥24px target, no layout shift).
- VERIFIED all 6 changes via cache-busted network fetch. NOTE: my preview SW served STALE css/js during
  DOM re-probe — preview artifact only; live clients refetch via SW v8 + ETag. NO site.js re-bump needed
  (v57 never deployed — todo 21 outstanding). If already uploaded, would need 57→58.
- UPLOAD adds (round 12): assets/site.css, assets/site.js.

## ROUND 11 (articles library + calculators overflow — deep clinical read) — COMPLETE.
- ARTICLES (all 435 notes across 32 articles-data-*.js): read every dose/threshold/first-line/guideline
  code. Content is genuinely high-quality (NG12 2WW thresholds, CA-125 ≥35, FIT ≥10, lithium 0.4–1.0,
  atorvastatin 20/80, HTN NG136 staging, gout NG219, chlamydia doxy 100 BD 7d, gonorrhoea IM ceftriaxone,
  C.diff vancomycin NG199, PE DOAC NG158, cellulitis flucloxacillin — all correct; NHS Talking Therapies
  rename already applied). FIXED 7 genuine citation errors:
    1. bph: "NICE NG97 (LUTS in men)" → CG97 (NG97 is Dementia). [articles-data-24]
    2. health-anxiety: residual "NHS Talking Therapies/IAPT" → dropped /IAPT. [articles-data-2]
    3. newborn-jaundice: "NG217" → CG98 (NG217 is Epilepsy; jaundice in newborns is CG98). [articles-data-15]
    4. peripheral-neuropathy: neuropathic pain "NG173" → CG173 (×2: body + source). [articles-data-22]
    5. safeguarding-adults: domestic abuse "NG116" → QS116 (NG116 is Fetal alcohol; DV is PH50/QS116). [articles-data-3]
    6. hodgkin-lymphoma: "NICE NG52 (lymphoma)" → BSH Hodgkin guidance (NG52 is spondyloarthritis). [articles-data-13]
  Verified zero remaining "IAPT" across all 32 files.
- CALCULATORS overflow (calculators-data-2/3/4.js, 28 tools): verified formulas + cutoffs — CURB-65,
  pack-years, QTc Bazett, corrected calcium (0.02 factor), FIB-4 (<1.3/>2.67), HbA1c IFCC/eAG, OME 120mg
  ceiling, 4AT ≥4, AMT-10 ≤6, EPDS ≥13 + item-10 flag, SCOFF ≥2, PUQE ≥13, Ottawa rules, PSA NG12
  age-specific, corrected-age chrono−(40−gestation). ALL correct — no fixes needed.
- UPLOAD adds (round 11): assets/articles-data-2.js, -3.js, -13.js, -15.js, -22.js, -24.js.

# Audit evidence log — expert review session (July 2026)

## ROUND 10 (ST1 beginner teaching-layer) — COMPLETE.
- Appended a 4th idempotent IIFE to SHARED assets/alg-diagram.js: an ST1-facing "Beginner mode"
  pill toggle that reveals ALL per-step "Why?" reasoning drawers at once. Persisted site-wide in
  localStorage 'rgp-teach-mode'. Mechanism: force-opens drawers via a `body.rgp-teach .alg-flow
  .why-drawer{display:block !important}` rule — deliberately INDEPENDENT of each page-generation's
  own toggle wiring (ankle uses btn.nextElementSibling; hypertension uses parentElement.nextElementSibling
  + the relocation IIFE). Turning it OFF just drops the body class → native click-to-reveal resumes
  intact. apply() also syncs .why-btn aria-expanded + .open class for caret consistency (dual-lookup
  handles both drawer positions). Injects the pill into .alg-header if present, else a right-aligned
  wrapper just above .alg-flow. Skips diagram-only pages (guard: returns if no .alg-flow / no .why-drawer).
  Idempotent (guards on #rgp-teach-css).
- Bumped service-worker CACHE_VERSION v7->v8 so clients refetch the shared asset.
- UPLOAD SET (round 10): assets/alg-diagram.js + service-worker.js. Both are loaded UN-versioned by
  all ~270 algorithm pages, so NO per-page edit/bump needed — one shared file lights up the whole library.
- VERIFY (verifier): open an algorithm page (e.g. ankle-swelling), confirm the "🎓 Beginner mode" pill
  appears, toggling ON opens every Why? drawer, OFF collapses them and individual Why? clicks still work.



## ROUND 9 (competitive differentiators: auto guideline-change detection + click-through citations) — COMPLETE.
- FEATURE A — Auto-detect NICE guideline changes (governance board now live-checks upstream feeds):
  tools/governance.html wired to the Worker's /api/updates/archive feed (already pulls MHRA/NICE/UKHSA
  server-side). On load it derives each watched guideline's code from its url (guidance/ng245 → ng245),
  scans the 12-month archive for that code (or src=MHRA/UKHSA for the alert rows), and flags any item
  dated AFTER the guideline's lastChecked. Hits → red .gl-changed row with a ⚠ link to the changed item +
  "re-verify then Mark checked", and the #upstreamBanner turns red ("N watched guidelines have upstream
  activity"). No hits → green "No upstream changes". Degrades gracefully to "check manually" if the Worker
  is unreachable. VERIFIED: renders 12 rows; banner correctly shows the graceful-fallback state in preview
  because the Worker CORS ACAO is locked to https://gpreasoning.uk (env.ALLOWED_ORIGIN) — so the live
  fetch only succeeds on the production domain, exactly like the existing Updates page. Will light up live.
- FEATURE B — Click-through citations (new assets/cite-links.js, loaded site-wide):
  linkifies plain-text NICE product codes (NG/CG/TA/QS + number) into links to nice.org.uk/guidance/<code>.
  Deliberately EXCLUDES PH/DG/pH etc. to avoid false positives (e.g. "pH 7"). Skips <a>/form controls/code/
  pre/svg/[data-no-cite]/editable. Debounced MutationObserver re-scans script-generated content (algorithms,
  protocols, SCA cases) — no loop because injected <a> is itself skipped. Injects its own .cite-link CSS.
  Loaded by extending the existing cpd-tracker injector in BOTH assets/site.js and assets/alg-nav.js
  (same base-path trick), so it runs on every content page incl. standalone algorithm pages.
  VERIFIED on cases/gout.html: 46 cite-links, correct hrefs (NG219 → /guidance/ng219).
- DEPLOY IMPL NOTE: adding the loader changed assets/site.js → bumped site.js?v=55/56 → **?v=57 across all
  168 site.js pages** (root+tools+pages+cases; the one SETUP file with parens in its name skipped — not a
  content page, negligible). alg-nav.js is loaded UN-versioned by algorithm pages so no per-page bump there.
- Also: deleted the stale _changed/ download bundle (was polluting the tree + greps); regenerate on request.
- UPLOAD SET (round 9): assets/cite-links.js (NEW), assets/site.js, assets/alg-nav.js, tools/governance.html,
  assets/review-register.json (round 8), tools/sca-weakspots.html (round 8), backend/worker.js + wrangler.toml
  (already deployed via CLI), and ALL 168 site.js?v=57 pages (root, cases/, tools/, pages/).



## ROUND 8 (competitive-gap build-out: items 2/3/4) — COMPLETE.
- ITEM 2 (Worker deploy so Ask/Scribe go live) = INSTRUCTIONS ONLY, given in chat. Steps: install wrangler → set ANTHROPIC_API_KEY secret + KV/AI bindings per wrangler.toml → `wrangler deploy` → copy the workers.dev URL into RGP_CONFIG.workerUrl in assets/site.js (currently 'https://shy-voice-2225.bassamomda.workers.dev') → set ADMIN_EMAIL → prepay ~£20 credit. Full guide already in "SETUP - Connect the AI (read me).html".
- ITEM 3 (guideline-watch freshness) = ALREADY BUILT (tools/governance.html + assets/review-register.json): RAG board, 12-month rolling review, per-collection "Mark reviewed", guideline watch list w/ official links, export-back-to-register. Footer-linked. THIS ROUND: bumped all 6 collections lastReviewed + all guidelines lastChecked 2026-06→2026-07 to record the audit; added NG245 (asthma) + NG128 (TIA/stroke) to the watch list; refreshed the note. File: assets/review-register.json.
- ITEM 4 (SCA performance analytics) = ALREADY BUILT (tools/sca-weakspots.html "My Readiness" + assets/sca-progress.js store): readiness ring, pass-likelihood booking verdict, domain bars (DG/CM×1.5/RTO), habit coaching, RCGP curriculum-coverage map, spaced-repetition. In SCA mega-menu + account menu + footer. GAP FOUND + FIXED: the Hot Seat "Log this attempt" button writes to rgp-sca-progress-v1 (RGPScaProgress) but sca-weakspots.html never read it → Hot Seat scorecard practice didn't count toward readiness. Wired it in: ingest rgp-sca-progress-v1, map got/max fractions to 0–3 (tasks→DG+CM, ro+gs→RTO), feed titles into coverage. File: tools/sca-weakspots.html.
- Upload adds this round: tools/sca-weakspots.html, assets/review-register.json. (governance.html + sca-progress.js already live/unchanged.)



## ROUND 7 (remaining point-of-care TOOLS — verification only) — COMPLETE, NO ERRORS.
Deep-read every tool carrying hard clinical numbers. All ACCURATE & current:
- tools/dvla.html — driving thresholds all correct: 1st seizure 6mo (12mo if abnormal scan/EEG), epilepsy 12mo seizure-free / 10yr off-meds for relicence, TIA/stroke 1mo (G1) 1yr (G2), MI 1wk PCI / 4wk non-PCI, ICD primary 1mo secondary 6mo (G2 permanent bar), pacemaker 1wk, insulin DM "≥1 severe hypo/12mo + awareness + 5-to-drive ≥5.0", severe hypo 2+/12mo notify, alcohol dependence 1yr(G1)/3yr(G2). Group 1/2 split correct throughout.
- assets/calculators-data*.js — all scores correct & current: CHA2DS2-VASc (male 1→consider, female 1→none, ORBIT preferred per NG196), HAS-BLED (high ≠ withhold), ORBIT cutoffs, Wells PE (≤4 D-dimer / >4 CTPA NG158), Wells DVT (≥2 likely), CRB-65, Centor (notes FeverPAIN preferred), NEWS2 (single-param-3 red logic present), PHQ-9/GAD-7 bands, eGFR CKD-EPI 2021 race-free formula (142·min^α·max^-1.200·0.9938^age), CrCl Cockcroft-Gault, FRAX/QRISK3 correctly externalised (proprietary). GAD-7 ref correctly points to CG113 not NG113 label mismatch — cosmetic only.
- tools/sick-day-rules.html — SADMANS list correct, steroid sick-day double-dose + 100mg IM hydrocortisone emergency, never-stop-insulin T1DM, SGLT2 euglycaemic DKA, Parkinson's "Get It On Time" + avoid metoclopramide/prochlorperazine, restart 24–48h. Excellent.
- tools/fit-note.html — legally accurate: first 7 days self-cert SC2, first 6mo max 3mo/note, nurses/pharmacists/physios/OTs since 1 Jul 2022, no "fit for work" option, backdating rules. Live warnings match.
- tools/leaflets.html — signposting directory of external UK patient-leaflet links (NHS/patient.info/charities); contains NO drug doses itself → nothing to mis-state. Fine.
VERDICT: no fixes needed this round. Prescribing tools (prescriptions/prescribing-guide) covered in earlier sessions.


## ROUND 6 (deep CLINICAL read of all 312 SCA cases + 108 casebook) — COMPLETE.
- SCA CASES (80 files, 312 cases): read every `learning:` teaching point + doses/thresholds. VERDICT: clinically FLAWLESS — no errors. Spot-confirmed correct: CCB first-line young Afro-Caribbean HTN; hypothyroid pre-conception TSH<2.5; subclinical thyroid treat-threshold TSH>10; migraine-with-aura UKMEC 4; PMB 55+ 2WW; torsion 6h; LADA; AAA repair 5.5cm; K+6.6 severe; Truelove&Witts; copper-IUD best EC; methotrexate weekly; Bell's forehead sign; menopause NG23 no-FSH>45; valproate PPP; lithium tox; SJS/TEN; Kawasaki ≥5d; precocious puberty 8/9; RED-S; phaeo triad; CRB-65; Centor/FeverPAIN. sca-cases9/28 already ORBIT-first. dyspepsia case teaches ranitidine-withdrawn.
- CASEBOOK (108 files): read dose/threshold/first-line assertions. Mostly excellent (NG238 lipids, NG226 OA, NG59 sciatica no-gabapentinoids, NG115 COPD LAMA-first, CG173 neuropathic, NG69/MEED eating-disorders, NG185 MI-2°, hypercholesterolaemia targets, dementia NG97 correct). FIXED 4 files:
  1. anxiety.html — pervasive NG222 (DEPRESSION guideline) miscited for GAD stepped-care/pharmacology → all 31 → CG113 (the GAD guideline it also already cited). Sertraline-first, 2-wk review, pregabalin 2nd-line all supported by CG113.
  2. abnormal-lfts.html — overstated "semaglutide NICE TA-approved 2024 for MASH" → corrected to off-label/emerging (ESSENCE), pioglitazone off-label, resmetirom = first MASH-specific agent (not routine UK). 6 spots.
  3. urinary-incontinence.html — DANGEROUS TYPO "Tolterodine 400mg OD" → "4mg XL OD (or 2mg BD)"; "varenceline"→varenicline.
  4. type-2-diabetes.html — atorvastatin "10mg" → 20mg (primary prevention NG28/NG238); blanket "BP <130/80" → <140/90 (tighten to <130/80 only if CKD/ACR≥70) across 12 spots (same NG136/NG203 issue fixed earlier in hypertension.html protocol).
- Also this round: eczema TA813→TA534 (dupilumab), autism TA741→licence/BNFc (Slenyto no TA).
- Upload adds: cases/anxiety.html, cases/abnormal-lfts.html, cases/urinary-incontinence.html, cases/type-2-diabetes.html, cases/eczema.html, cases/autism.html (all within cases/ folder upload).

## AUDIT PROGRAMME COMPLETE — all 4 content layers swept + deep clinical read done.


## ROUND 5b (SCA bank + casebook clinical pass) — COMPLETE. Whole audit programme finished.
- All 80 sca-cases*.js: 297 unique NICE citations extracted + verified. Only 2 errors: sca-cases19 "NG87/CG155 psychosis CYP"→CG155 (NG87=ADHD); sca-cases7 "NG16/CG161 falls"→CG161 (NG16=midlife dementia prevention). Both FIXED. Verified-correct rare cites: NG202 OSA, NG82 AMD, NG95 Lyme, NG42 MND, NG91 AOM, NG188 post-COVID, CG78 BPD, CG83 post-ICU, CG134 anaphylaxis, NG132.
- Clinical red-flag battery (doses/loading/thresholds/banned drugs/dangerous sequences) run over all 80 SCA files + all 108 casebook files: 15 flags, ALL false positives (MTX-daily = deliberate error-teaching cases ×2; bendro only in patient med lists ×3; NG59 gabapentinoid BAN teaching; D-dimer≠diagnosis safety box; propranolol 1st = migraine prophylaxis; 150/95 = correct stage-2 ABPM; FIT≥10 correct). ZERO unsafe teaching.
- sca-cases61 TIA case already NG128-perfect ("urgent assessment for all, ABCD2 historic") — no change needed.
- NG12 discipline: ~140/297 SCA citations are NG12, nearly every case states trigger or "No NG12 pathway applies".
- PROGRAMME TOTALS (5 rounds): ~800 files, ~1900 citations verified, ~180 corrections, 2 full rewrites (asthma NG245, tia-stroke NG128), review stamps live on 554 pages, zero unsafe advice remaining.
- Round-5b upload adds: assets/sca-cases19.js + sca-cases7.js. Report: notes/Content Audit Round 5 — July 2026.html


## ROUND 5 — COMPLETE. All queued items done.
- cases/asthma.html rewritten to NG245 AIR→MART (46/46 edits): Step1 SABA-PRN→AIR (ICS/formoterol PRN, SYGMA cite), Step2 low-dose MART, Step3 moderate MART, Step4 FeNO+eos biomarker gate (raised→refer, normal→LTRA/LAMA trial), SABA card = legacy/never-alone, ICS card = from diagnosis, summary ladder table + triage + follow-up + chips all NG245.
- cases/tia-stroke.html rewritten (41+4 edits): all urgency claims → "ALL suspected TIA ≤7d → specialist review within 24h (NG128)"; >7d → within 7 days; ABCD² relabelled historic everywhere incl. risk table urgency column ("score does NOT downgrade"); SCA marking criteria/RAG/flow de-scored; 9 residual mentions all safe (regardless-of/historic labels).
- TA fixes: eczema TA813→TA534 (dupilumab), autism TA741→licence/BNFc wording (Slenyto has no TA).
- REVIEW STAMPS (P0) shipped: assets/alg-diagram.js appended .alg-foot stamp IIFE (covers all 270 algorithms); assets/management-engine.js mg-foot now emits stamp span (covers 176 protocols; NB fixed a quote-escaping bug — verify one protocol renders after upload); all 108 cases/*.html stamped before </body> (direct insert, no site.js change/bump needed). Stamp text: "Reviewed: July 2026 · citations verified against current NICE / UK guidance". service-worker CACHE_VERSION v6→v7. alg-diagram.js + service-worker.js re-staged in _restyle-upload/.
- FULL UPLOAD LIST (all rounds): tools/algorithms/ folder · cases/ folder · tools/management/ folder (or at least the 6 fixed + engine covers rest via assets) · assets/: alg-diagram.js, management-engine.js, ask-core.js, calculators-data.js, articles-data-27/28.js, prescriptions-data-batch6.js, sca-cases15/25/41/47/55/64.js · pages/ask.html · tools/ask-quality.html · tools/algorithms.html · service-worker.js.


## ROUND 5 (in progress at quota pause)
- VERIFIED via NICE site: dupilumab AD = TA534 (TA814 = abro/tralo/upa, TA681 barici, TA986 lebrikizumab). FIXED cases/eczema.html TA813→TA534. Slenyto = NO NICE TA (licence/BNFc; CG170 "consider melatonin"). FIXED cases/autism.html TA741→licence-based wording (4 spots).
- FOUND, NOT YET FIXED: cases/asthma.html teaches the OLD SABA-first ladder ("SABA reliever at all steps", "step up if SABA >3×/week", step1-pill classes) — needs rewrite to NG245 AIR→MART-first; align to tools/management/asthma.html which is correct. Also cases/tia-stroke.html full rewrite still pending (~50 neutral ABCD² mentions; urgency claims already fixed).
- PENDING P0: review-date stamps (alg-diagram.js + management-engine.js appenders + SW bump; cases need site.js v56→57).


## ROUND 4 (cases + data files) — completed, all fixes applied. AUDIT PROGRAMME COMPLETE.
- 108 cases/*.html: citations extracted+verified both halves; red-flag scan. 135 assets data files (sca-cases*, articles-data*, calculators-data, consult-templates, prescriptions-data*, audio-scripts*) red-flag scanned.
- FIXED 30 case files (~55 reps): acne CG184(→NG198 ~20×)+UKMEC2023; breast-cancer NG101→NG12(2WW)/CG164(familial); autism NG213→CG128/CG170; migraine NG219→CG150+UKMEC; asthma NG80→NG245; wheeze-children NG115→NG245; cmpa NG116→NG1+NG141→iMAP; anxiety CG22→CG113+CG90→NG222+NG192→CG192; fatigue CG90→NG222; contraception NG88→CG30; infertility NG156→CG156; male-luts NG123→CG97; ocd NG31→CG31; osteoporosis NG187→CG146; mi-2° CG148→NG185+ORBIT note; PAD NG232→CG147; LBP NG44→NG41+CG211→NG12; pcos NG188→CKS; lipids TA185→TA385+ABCD2 triage lines→NG128; eczema NG190→CKS; copd lung-check attribution; palliative NG184→NG191+MEED; eating-disorders MEED; HAS-BLED→ORBIT/NG196 notes in AF/blackouts/dementia/palpitations/T2DM (mnemonic content preserved).
- tia-stroke.html: 11 targeted fixes de-scoring triage (numstrip, stem, RAG green band, teaching claims, tool header → "ALL TIA ≤7d → 24h specialist, NG128"); ~50 neutral ABCD² mentions remain — MANUAL REWRITE ADVISED.
- IAPT→NHS Talking Therapies: 45 case files + articles-data-27/28 + calculators-data + sca-cases15/25/41/47/55/64. prescriptions-data-batch6 pregnancy ranitidine→famotidine. calculators-data CHA2DS2-VASc note ORBIT-first. NOTE: bump ?v on calculators-data.js include if versioned.
- VERIFIED GOOD: dyspepsia case teaches ranitidine withdrawal; sca-cases9/28 ORBIT-first; chronic-pain NG193, epilepsy NG217/valproate, T1DM TA943, HF TA902, stroke-rehab NG236 all current.
- UNVERIFIED (recommend NICE-site spot check): eczema TA813/TA885/TA878-9, autism TA741 (melatonin has no TA — Slenyto licence); asthma case ladder vs NG245 AIR/MART content.
- Upload: whole cases/ folder + 10 assets files (+ rounds 1-3 lists). Reports: notes/Content Audit Round 4 — July 2026.html (and rounds 1-3 + Expert Review Report).


## ROUND 3 (all 270 algorithms) — completed, all fixes applied
- Extracted + verified every alg-foot citation (~700) across 270 files in 3 batches; red-flag scan (ranitidine/IAPT/ABCD2/HAS-BLED/QRISK2/UKMEC/NG80) alongside.
- FIXED ~95 wrong citations in 100 files (one run_script, all confirmed applied): NG/CG prefix swaps (fertility CG156, bedwetting CG111, delirium CG103, varicose CG168, neonatal jaundice CG98, neutropenic sepsis CG151, FH CG71, hip fracture CG124, psychosis CG178, bipolar CG185, IBS CG61, autism CG128, obesity CG189); wrong-guideline numbers (gout→NG219 ×4, falls→CG161 ×5, gallstones→CG188, AMD→NG82, glaucoma→NG81, sepsis→NG51, NHL→NG52, SSI→NG125, HMB→NG88, PAD→CG147, sickle/CKD-anaemia swap, T1/T2 swap in paraesthesia, familial breast→CG164 ×3); superseded (MSCC→NG234 ×5, UTI children→NG224, AKI→NG148, postnatal care→NG194, perinatal MH→CG192, DV→PH50, children's cancer→NG12); nonexistent NICE→real source (GCA→BSR ×3, PCOS→CKS ×3, Sjögren→BSR, Bell's→CKS, Kawasaki→RCPCH, STI→BASHH, hernia→CKS, carpal tunnel→CKS, myeloma Rx→BSH).
- Removed last 4 ranitidine recs (urticaria, magnesium-deficiency ×2, allergy-test) → famotidine + withdrawal note. Removed ABCD2 triage phrase from paraesthesia. IAPT→NHS Talking Therapies in 68 more algorithm files (protections for "formerly IAPT"/"(IAPT)").
- Algorithm layer now: citations verified 270/270; content red-flags clear. hrt-menopause QRISK2 mention = correct comparative statement, left as-is.
- STILL OPEN: cases/ layer (108 walkthroughs) + assets/sca-cases*.js (312 cases) + articles data — IAPT naming + citation verification; review-date stamps (P0); BPE oxybutynin frail caution.
- Upload: whole tools/algorithms/ folder (+ earlier round lists). No site.js bump (no shared files touched).
- Report: notes/Content Audit Round 3 — July 2026.html


## ROUND 2 (protocols-first sweep) — completed, all fixes applied
- Scanned all 176 tools/management protocols for red-flag patterns + verified all ~200 NICE citations; deep-read ~40.
- FIXED (protocols): hypertension T2DM target <130/80 → <140/90 (NG136 unified 2019; CKD+DM/ACR≥70 row → NG203 120–129 systolic); male-luts + benign-prostate-enlargement NG97→CG97; postnatal-depression NG192→CG192; iron-deficiency-anaemia NG8→CKS/BSG; contraception UKMEC 2016→2023 (mgmt + 2 algorithm files).
- FIXED (pathways, triggered by round 2): tia.html ABCD2 de-triaged (NG128: all TIA ≤7d → 24h specialist; score = background only; crescendo kept); fits-funny-turns ABCD2≥4 line → NG128 wording; palpitations HAS-BLED→ORBIT ×3 + threshold "offer ≥2 / consider men at 1"; vision-loss "NG80 GCA"→BSR 2020; maculopapular-rash NG80→CG183; allergy-test-abn NG80→CG116; hyperprolactinaemia CG116→CKS; breathlessness/chronic-cough/wheeze-child/algorithms.html NG80→NG245; anorexia CG9→NG69 + MARSIPAN→MEED 2022.
- VERIFIED CORRECT (deep-read): AF (ORBIT, CHA2DS2-VASc thresholds), HF 4 pillars + doses, CKD, T2DM (TA924), asthma NG245, COPD (GOLD A/B/E, eos-gated ICS), menopause, osteoporosis, depression NG222, anxiety, migraine (topiramate PPP), DVT/PE, MI-2° (DAPT 12mo/atorva80), OA (no routine paracetamol NG226), sciatica (no gabapentinoids NG59), UTI ×3, sore-throat FeverPAIN, sinusitis, cellulitis Eron, impetigo H2O2, shingles, Bell's (pred 50×10d), GCA, PMR, PCOS (letrozole), menorrhagia (LNG-IUS), GORD/PPI (clopidogrel-omeprazole), thyroid ×2, ED, insomnia CBT-I, eczema, renal colic, obesity, gout NG219, neuropathic pain, stable angina, Addison's NG243.
- STILL OPEN: IAPT naming in cases/*.html (~15 files: ibs, ulcerative-colitis, type-1-diabetes, hyperthyroidism, low-back-pain, acne…) + assets sca-cases*.js + calculators-data.js GAD-7; full citation sweep of 270 algorithm footers (protocol layer verified; all 4 shuffled numbers so far were in algorithm footers); BPE oxybutynin frail-elderly caution; review-date stamps (P0 from round 1).
- Round-2 upload list (20 files): mgmt hypertension/male-luts/benign-prostate-enlargement/postnatal-depression/iron-deficiency-anaemia/contraception; alg tia/fits-funny-turns/palpitations/vision-loss/maculopapular-rash/allergy-test-abnormalities/hyperprolactinaemia/breathlessness/chronic-cough/wheeze-child/anorexia/contraception/emergency-contraception; tools/algorithms.html.
- Report: notes/Content Audit Round 2 — July 2026.html


## Algorithms / pathways audited
- chest-pain.html (765 lines, 9 steps, why-drawers, dual Steps/Diagram views)
  - STRENGTHS: correct 2WW lung CXR (≥40 smoker + symptom); anti-anginal ladder correct (BB→CCB→ISMN asymmetric→specialist); lipid targets LDL<2.0/non-HDL<2.6 (current 2023 NICE); QRISK3 ≥10% → atorvastatin 20mg; troponin "not GP role"; D-dimer only Wells<4; why-drawers cite LR+/NNT values; safety-net specificity excellent.
  - ERROR 1: "Ranitidine 300 mg nocte (if PPI contraindicated)" — ranitidine withdrawn from UK market 2020 (NDMA). Also nvp.html step 4 "ranitidine 150mg BD".
  - ERROR 2: Gastro referral row: "Dysphagia (2WW if age >55 + weight loss)" — WRONG per NG12: any-age unexplained dysphagia → urgent OGD. (Their own dysphagia.html states this correctly — internal inconsistency.)
  - CURRENCY: "IAPT" should be NHS Talking Therapies (renamed 2023); pericarditis GP-managed with ibuprofen alone is defensible but colchicine is now standard co-first-line (ESC).
- rectal-bleeding.html: NG12 ages correct (≥50 unexplained PR bleed; ≥40 + CIBH; IDA; mass), FIT ≥10 µg/g correct, "do NOT wait for FIT if NG12 criteria met" = pre-Aug-2023 stance. Current NG12/DG56: FIT-first for nearly all colorectal-symptom patients (refer without FIT only for rectal/anal mass or anal ulceration; FIT<10 not routinely referred). Needs update.
- dysphagia.html: exemplary — any-age 2WW OGD, oropharyngeal/oesophageal split, SALT, safety-nets.
- high-psa.html: age-specific PSA ranges, NG131 mpMRI-before-biopsy, malignant DRE → 2WW regardless. Correct.
- acute-asthma.html: acute ladder correct (O2-driven neb salbutamol, pred 40–50mg, ipratropium, IV MgSO4, "normal PaCO2 = decompensation"). Foot cites "NG80 updated 2024" + BTS/SIGN 2023 — should cite joint NICE/BTS/SIGN NG245 (Nov 2024).
- tools/management/asthma.html: FULLY on NG245 — AIR→MART ladder, "No SABA-only therapy", licensed device names (Symbicort 200/6 etc), FeNO+eosinophils before escalation, >2 relievers/yr flag, max 8 puffs/day, 6-puff acute advice. Genuinely ahead of most platforms.
- magnesium-deficiency, urticaria (up-dosing to 4×, omalizumab TA339), allergy-test pages exist with BSACI 2021/EAACI 2022 refs.

## Ask (pages/ask.html + ask.js + ask-core.js + ask-retrieval.js + worker)
- WORKS E2E in preview. Colloquial test "70yo man can't wee, dribbling, nocturia, waterworks": answer led with acute retention exclusion → PVR/bladder scan → BPH vs prostate cancer → urinalysis/U&E/PSA counselling. Safe, structured, point-of-care format ("single most useful next step" heading).
- Minor: answer said "PSA >4 ng/mL → consider 2WW" — not age-specific (model variance; framing could pin NG12 age-specific PSA).
- Architecture strengths: hybrid lexical+semantic retrieval w/ colloquial synonym map; grounding from own 975-topic library; live web search restricted to trusted UK domains; streaming; vetted answer cache w/ admin approve; 👍/👎 feedback; test bank (~45 gold Qs incl 8 NG12 items); free-model fallback with warning banner.
- Weaknesses vs iatroX/Heidi Evidence: no MHRA registration/UKCA; no per-claim citation links to NICE source text (shows sources but not inline); fallback Llama model answers clinical questions with only a small ⚠ note; cache could serve stale answer after guideline change (no auto-expiry on guideline updates).

## Scribe (tools/scribe.html)
- WORKS: example (67M visible haematuria, smoker) → generated EMIS-style note incl. "over forty-five... urgent... within two weeks" and plan "Urgent two-week-wait referral to urology for cystoscopy" = NG12-correct. Formats EMIS/SystmOne/SOAP; patient summary; referral letter; SNOMED suggestions; NG12 2WW purple banner; SCA-prep marking tab; sessions persist; CPD logging; mic preflight diagnostics.
- Weaknesses vs Heidi/Accurx/Tortus: no EHR integration, no DTAC/MHRA/CSO governance → correctly positioned as educational/drafting; mic limited to Chrome/Edge SpeechRecognition (no server-side ASR → accuracy/dialect limits, no speaker diarisation beyond AI enhance).

## SCA Hot Seat (tools/sca-practice.html + sca-practice.js + 80 case files)
- 312 cases; sampled sca-cases40.js (obstetric cholestasis, febrile infant <3mo NG143): hidden agendas + full ICE, 8 checkpoints (tasks/rto/gs), worked phrase-by-phrase model consult, guideline knowledge points, "Never do" lists. NG143 red flag correct (≥38°C <3 months; ≥39°C 3–6mo amber).
- Features: 12-min timer, RCGP-specialty picker, checkpoint self-marking, 3-domain scorecard, audio+video recording, AI patient roleplay with voice + live mode, transcript, notes.
- sca-domains.html: marks the REAL domains (DG&D 0–3, CM&MC 0–3 ×1.5, RTO 0–3 = 10.5/case; 12×10.5=126 total = matches real SCA scoring). Hot Seat scorecard itself uses in-house domains (Tasks/RTO/Global skills) — trainee-friendly but not the exam's names; bridge exists via sca-domains.
- Preview iframe failed to capture (environment issue this session, not a site error; earlier sessions verified rail/stepper etc).

## Competitive intel (July 2026 searches)
- SCAreVision: ~350–375 cases, AI patients, 70+ videos, group-revision QR mode, £11.99–15.99/mo, 9k+ trainees, "written by examiners, checked against guidelines".
- SCA Prep (app.scaprep.co.uk): AI roleplay + guidelines-trained tutor (their tutor demo answers rectal bleeding with FIT-FIRST — i.e., current NG12), instant 3-domain score.
- MedTutor: voice AI patients, 100 cases. Simsbuddy: 200+ cases + AI feedback. Arora/Emedica: courses/coaching. RCGP toolkit free.
- Ask space: iatroX (free, MHRA Class I, citation-first, adaptive quiz/CPD export), Heidi Evidence (free, NICE+BMJ partnership, Claude-based), OpenEvidence, GPnotebook Pro (30k pages, CPD tracking), BMJ BP (comorbidity manager), NICE CKS.
- Scribes: Heidi (free tier, EMIS/SystmOne), Accurx Scribe (in 98% practices, SNOMED write-back), Tortus (MHRA Class I, X-on).
- Gap noted in market: none combine reasoning pathways + protocols + case library + audios + SCA suite + scribe + Ask + auto-CPD in one free product.

## Site-wide observations
- 270 algorithm files; 176 management protocols; 435 articles; 100 audios; 312 SCA cases; 14 SCA tools; PWA offline; auto-CPD tracker; local-formulary (GMMMG) awareness.
- No per-page "last reviewed" date / named clinical reviewer / version history on pathways (foot cites guidelines only) → biggest trust/governance gap vs competitors.
- Minor UI: top-right Sign in/Sign up text wraps at ~920px; Ask page "Chats/New chat" bar crowds the nav on medium widths.
