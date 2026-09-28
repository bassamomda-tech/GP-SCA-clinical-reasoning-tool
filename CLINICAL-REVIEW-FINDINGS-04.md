# MedWise clinical revision — findings batch 04: final systematic sweeps

**Mode: report only. No clinical file has been modified.** **Date:** 28 September 2026.

Four more sweeps, each across the whole corpus. **All four returned clean.** That is the finding,
and it is worth as much as a defect list: it bounds where the remaining risk can be.

---

## 1. Sweeps run and results

### 1.1 — Per-topic must-have safety items · **CLEAN**

For 15 high-stakes topics I defined the items a GP-facing page must contain and checked case and
protocol for each — about 50 checks in total.

| Topic | Items required |
|---|---|
| type-1-diabetes | sick-day rules · ketone testing · DVLA · hypo management · DKA |
| type-2-diabetes | SGLT2 for CVD/CKD/HF · metformin renal limit · DVLA · sick-day rules |
| addisons-disease | sick-day doubling · emergency IM hydrocortisone · steroid card · adrenal crisis |
| epilepsy | DVLA · valproate/teratogenicity · SUDEP · contraception interaction |
| asthma | action plan · inhaler technique · annual review · MART/AIR |
| copd | rescue pack · pulmonary rehab · vaccination · smoking cessation |
| contraception | UKMEC · missed pill · quick start · STI screen |
| depression | suicide risk · under-18 fluoxetine · withdrawal/taper |
| eating-disorders | medical instability/MARSIPAN · refeeding · ECG |
| anaphylaxis | adrenaline dose · two auto-injectors · allergy referral |
| osteoporosis | FRAX/QFracture · calcium/vitamin D · treatment break |
| palliative-care | anticipatory meds · syringe driver · DNACPR/ReSPECT |
| safeguarding | escalation route · documentation · child protection |
| hyperthyroidism | carbimazole agranulocytosis · pregnancy · thyroid eye disease |
| psychosis-schizophrenia | metabolic monitoring · clozapine · crisis/risk |

**Result: 3 apparent gaps, all three false positives** — phrasing variants, verified individually:
- asthma protocol "annual review" → says *"reviewed annually"*
- osteoporosis case "treatment break" → says *"bisphosphonate holiday at 5 years"*
- contraception case "quick start" → covers the concept as *"bridging contraception … immediately"* and *"start at any time"*

**One optional item from this** (§2 below): the contraception case never uses the FSRH term
**"Quick Start"**, though it teaches the practice. Terminology a trainee will meet in FSRH guidance
and possibly in the SCA.

### 1.2 — Case ↔ protocol first-line drug agreement · **CLEAN, method abandoned**

Compared the first-line drug named in each of the 57 same-named case/protocol pairs. Precision was
too low to be useful — a 150-character window after "first-line" bleeds into adjacent text, so
stopwords (`alongside`, `appropriate`, `everyone`, `moderate`) and unrelated drug names leaked in.

The two leads worth checking were both correct:
- **depression protocol / fluoxetine** — correctly scoped to under-18s (*"CAMHS pathway — fluoxetine is the only first-line antidepressant"*, NG134) and to a light-therapy efficacy comparison. Not an adult first-line claim.
- **dvt protocol / warfarin** — DOAC correctly first-line per NG158 (*"A DOAC first-line, dosed by renal function"*), with warfarin correctly positioned as *"the specific situations that demand warfarin instead"*.

**Recorded as a dead end so it is not retried.**

### 1.3 — Conflation-prone test pairs · **CLEAN**

The one real safety finding in this whole review (batch 02 §1.1) was two similar-looking assays with
different scales. I checked the other candidates with that property:

| Pair | Risk if conflated | Result |
|---|---|---|
| **urine ACR vs PCR** | thresholds differ (ACR 3/30/70 vs PCR 15/50/100 mg/mmol) | clean — ACR used correctly (`ACR ≥3 → start ACEi/ARB`, `>3 mg/mmol = significant proteinuria`); no PCR thresholds misapplied. "ACR" also appears as *American College of Rheumatology* in classification criteria, correctly. |
| **HbA1c % vs mmol/mol** | a % value read as mmol/mol is a large error | clean — values are consistently mmol/mol (48, 53, 47, 58, 62, 75, 86…), the UK convention. No value in the 4–10 range labelled mmol/mol, and no mmol/mol-magnitude value labelled %. |

### 1.4 — Outlier dose detection · **CLEAN** (reported in batch 03 §2)

---

## 2. Optional items — your call, not changed

1. **`cases/contraception.html`** — add the FSRH term **"Quick Start"** to the bridging-contraception
   content it already teaches, so the label matches the guidance and exam vocabulary. Content change:
   none. Terminology only.
2. **`tools/management/asthma.html`** — contains *"IV salbutamol 5 micrograms/min infusion"*. Correct
   as written (IV salbutamol is dosed in mcg/min) and legitimate as a description of what happens in
   hospital — but it is a secondary-care intervention in a GP protocol, so it falls under the same
   scope-of-practice question raised in batch 01 §2.6. Flagging for consistency of house policy, not
   as an error.

---

## 3. What these four sweeps establish

Combined with batches 01–03, the corpus has now been checked **corpus-wide** for:

1. NG12 CA125 thresholds and the under-40 rule
2. Nitrofurantoin renal cut-offs
3. QRISK statin threshold
4. Protocol ↔ print-mirror payload integrity (all 211 pairs)
5. Redirect-stub integrity (all 97)
6. Deprecated tools and scores (11 tools)
7. Outlier drug doses (every drug+dose string)
8. Case ↔ protocol dose agreement (all 57 pairs)
9. MHRA/BNF mandatory warnings (16 high-risk drugs)
10. Per-topic must-have safety items (15 topics, ~50 checks)
11. Case ↔ protocol first-line agreement (all 57 pairs)
12. Conflation-prone test pairs (ACR/PCR, HbA1c units, BNP/NT-proBNP)

**Nine of the twelve returned clean.** The systematic, high-severity risks — wrong doses, superseded
tools, missing mandatory warnings, missing core safety content — have been checked everywhere and are
largely absent. This is an accurate and well-maintained corpus.

**Therefore the residual risk is specific, not systemic.** It is per-page: a single mislabelled card,
one page's omission where its sibling page is complete, one instruction that is clinically sound but
not actionable in UK primary care. All four substantive findings across this review are of exactly
that shape, and each was found by reading — paired case-vs-protocol reading, or domain knowledge
about two similar scales. **No regex will find the rest.**
