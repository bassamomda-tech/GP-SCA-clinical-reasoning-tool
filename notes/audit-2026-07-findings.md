# Audit working notes — July 2026 (3-level GP review)

## Scope requested
Expert GP + ST3 + ST1 perspectives. Strengths vs UK competitors, weaknesses, accuracy audit.
Focus: pathways/algorithms, Ask, Scribe, SCA Hot Seat.

## ALGORITHMS — findings so far

### hypertension.html (read fully) — ACCURATE vs NG136
- ABPM ≥135/85 stage 1, ≥150/95 stage 2, ≥180/120 severe — correct
- Drug ladder A/C split by age 55 / ethnicity / T2DM — correct; step 4 K+ 4.5 spiro/alpha-beta — correct
- Targets <140/90 (<80y), <150/90 (≥80y) — correct
- U&E 1-2wk after ACEi/spiro, K>5.5 or Cr↑>30% stop — correct
- Pregnancy ≥20wk + ≥140/90 same-day obstetric — reasonable (NG133)
- Minor: statin "if QRISK ≥10%" — fine per NG238 but could add "consider below 10% (informed preference)"
- Minor: HBPM described as "2 readings twice daily ≥4 days" in diagram vs "7 days BD" in steps — both NG136-compliant but slightly inconsistent wording
- TECH: inline script uses scrollIntoView (CLAUDE.md bans it — can break app preview); present in every algorithm page template
- No NG12 link needed for HTN — correctly omitted

### rectal-bleeding.html — strong, 2 issues
- NG12 thresholds: ≥50 unexplained bleeding, ≥40 + bowel habit change, IDA, mass, FIT ≥10 — matches classic NG12
- **ERROR: "Rockford criteria" (line ~213) — should be Glasgow-Blatchford (used correctly elsewhere) / Rockall.** Typo = credibility risk.
- **UPDATE GAP: NG12 Aug-2023 FIT-first update (DG56): FIT now recommended BEFORE referral for most lower-GI symptom combos incl. rectal bleeding (except rectal/anal mass, anal ulceration). Page says "do not wait for FIT if NG12 criteria met" — reflects pre-2023 position. Need to check uploads/Cancer referral NICE.pdf (May 2025) stance and align. BSG/ACPGBI 2023 + NHSE all FIT-first.**
- BCSP "FIT every 2 years from age 50" — correct (rollout complete)

### haematuria.html — accurate with 1 internal inconsistency
- ≥45 visible, ≥60 NVH + dysuria/raised WCC — correct NG12
- **INCONSISTENCY: red-flag tile says "Visible haematuria in ≥40y → 2WW" — contradicts the ≥45 used everywhere else on same page.**
- Good: anticoagulation doesn't explain VH; recheck dip post-UTI; nephrology ACR≥30/PCR≥50 criteria

### dysphagia.html — accurate
- 2WW OGD any age, no threshold — correct; SALT, food bolus 999, Zenker's caution re OGD — good
- ">55, weight loss + dysphagia" additions fine

## Templates: ~270 algorithms, ≥5 visual template generations unified via shared alg-diagram.css/js (per CLAUDE.md). Steps default view. Progress persistence localStorage. Why-drawers = teaching layer (differentiator).
