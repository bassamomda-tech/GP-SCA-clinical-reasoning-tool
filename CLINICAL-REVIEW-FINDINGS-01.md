# MedWise clinical revision — findings batch 01

**Mode: report only. No clinical file has been modified.** Every entry below is a change *proposal*
with the exact current string and the exact replacement, so it can be applied by hand or fed to
another tool.

**Audience lens:** UK GP and GP trainee (SCA-facing).
**Date:** 27 September 2026.
**Verification tiers:** `T1` primary source · `T2` search-corroborated secondary source ·
`T3` my own clinical knowledge (to May 2026) · `T4` corpus contradicts itself (no external source
needed — highest confidence).
**Severity:** `S1` could cause harm · `S2` superseded/wrong guideline position · `S3` important GP
information missing · `S4` imprecision or inconsistency.

---

## 0. Correction to the plan document — please read first

`CLINICAL-REVIEW-PLAN.md` §5 claimed, as its headline finding, that the corpus carried a
**superseded flat CA125 threshold across ~26 files**. **That was wrong, and I am withdrawing it.**

My original grep extracted bare numeric tokens (`35 IU/mL`, `31 IU/mL`) from a text window around
"CA125" and counted them as flat-threshold statements. They were in fact the *first two entries of
a complete age-band list*. On proper extraction, the corpus already carries the full NG12
April 2026 age bands — **≥35 IU/mL at 40–49, ≥31 at 50–59, ≥24 at 60–69, ≥25 at 70–79, ≥31 at
80+** — in 46 threshold-stating passages across 21 files, and it states the under-40 rule too.

Two consequences:

- **The corpus is more current than the plan credited.** It independently matches what web search
  returns for NG12 1.5.6, which is mutual corroboration of both.
- **The plan's stated first action is void.** There is no NG12 CA125 rewrite to do, and I no longer
  need the age-band values from you. Priority order in §9 of the plan should be disregarded.

I have corrected §5 and §9 of the plan document in the same commit as this file.

---

## 1. Verified clean — do not spend effort here

Negative results, so you know where not to look. Each was scanned corpus-wide.

| Sweep | Result |
|---|---|
| **NG12 CA125 age bands** | 46 passages across 21 files; band values correct and internally consistent everywhere they are stated |
| **Nitrofurantoin renal cut-off** | 12 distinct statements, all correct and consistent (`eGFR ≥45`; cautious short course at 30–44 for resistant organisms only) |
| **QRISK statin threshold** | 10% used consistently; correct as `≥10%` in 60+ places (one exception, §2.4) |
| **Asthma** | current — NG245, AIR and MART regimens present; no legacy SABA-only ladder |
| **Redirect stubs** | all 97 stub targets resolve; none broken |
| **Protocol ↔ print-mirror payload** | 210 of 211 pairs byte-identical (one exception, §2.5) |

---

## 2. Findings with change specs

### 2.1 — `tools/algorithms/abnormal-cancer-markers.html` line 154 · **S3** · T2

The page dedicated to interpreting abnormal tumour markers gives only one of the five CA125 age
bands, so a GP reading this page cannot act on a result outside 40–49.

- **Current:** `CA125 at or above the NG12 age-specific threshold (35 IU/mL applies only at 40–49) = urgent USS pelvis`
- **Replace with:** `CA125 at or above the NG12 age-specific threshold (≥35 IU/mL at 40–49, ≥31 at 50–59, ≥24 at 60–69, ≥25 at 70–79, ≥31 at 80+) = urgent direct-access USS abdomen and pelvis; under 40 do not use CA125 alone — consider ultrasound as well`
- **Why:** the parenthesis as written reads as a limitation of the threshold rather than as one band
  of five. This is the corpus's own reference page for marker interpretation, so it is the one place
  the full table must appear. Wording matches the pattern already used in `tools/algorithms/bloating.html`.

### 2.2 — `tools/algorithms/irregular-periods.html` line 122 · **S4** · T2

- **Current:** `CA125 with the age-specific NG12 (updated April 2026) thresholds (e.g. ≥35 IU/mL at 40–49) →`
- **Replace with:** `CA125 with the age-specific NG12 (updated April 2026) thresholds (≥35 IU/mL at 40–49, ≥31 at 50–59, ≥24 at 60–69, ≥25 at 70–79, ≥31 at 80+) →`
- **Why:** `e.g.` plus a single band invites the reader to assume 35 generalises, which is the exact
  error the April 2026 update exists to remove.

### 2.3 — `tools/algorithms/abdominal-mass.html` line 168 · **S3** · T2

States all five age bands but carries **no under-40 statement anywhere in the file** — and a woman
under 40 with an unexplained abdominal or pelvic mass is precisely the group NG12 now addresses.

- **Current:** `CA125 at or above the NICE NG12 (updated April 2026) age-specific threshold (35 IU/mL at 40–49, 31 at 50–59, 24 at 60–69, 25 at 70–79, 31 at 80+), complex cystic-solid mass on USS → 2WW.`
- **Replace with:** `CA125 at or above the NICE NG12 (updated April 2026) age-specific threshold (35 IU/mL at 40–49, 31 at 50–59, 24 at 60–69, 25 at 70–79, 31 at 80+), complex cystic-solid mass on USS → 2WW. Under 40: do not rely on CA125 alone — arrange ultrasound, and refer on the mass itself regardless of the CA125.`
- **Why:** a normal CA125 under 40 is the classic false-reassurance route to a missed germ-cell or
  borderline ovarian tumour. The page sends the reader to a threshold that does not apply to them
  and offers no alternative action.

### 2.4 — `tools/algorithms/polycythaemia.html` line 577 · **S4** · T3

- **Current:** `statin if QRISK >10%`
- **Replace with:** `statin if QRISK3 ≥10%`
- **Why:** NICE uses **≥**10%; as written, a patient at exactly 10% is excluded. Every other
  statement in the corpus uses `≥10%`, so this is also an internal inconsistency.

### 2.5 — `tools/management/bells-palsy.html` vs `bells-palsy-print.html` · **S4** · T4

The only protocol/print pair whose `MG.render(…)` clinical payload is **not** byte-identical; the
other 210 pairs match exactly. One of the two is stale and the site is serving two versions of the
same protocol.

- **Action:** diff the two payloads, decide which is current, and bring the other into line.
- **Reproduce:** extract the `MG.render` block from each file and diff. A guard script asserting
  payload identity across all 211 pairs should run after every future edit batch.

### 2.6 — `cases/chest-pain.html` lines 770, 771, 773 · **S3** · T4

The `numstrip` — the GP-facing headline figures at the top of the case — leads with three
**secondary-care** metrics, and the page's own body contradicts one of them.

| Line | Current headline | Problem |
|---|---|---|
| 770 | `0h / 2h` — "hs-Troponin rule-out protocol" | line 1222 of the same file correctly labels this "hospital/ED setting" |
| 771 | `GRACE ≥140` — "High-risk ACS → immediate hospital" | GRACE is calculated after admission on a troponin a GP does not have |
| 773 | `D-dimer <500` — "Low-risk PE exclusion threshold" | line 1877 of the same file correctly says *assay-specific* threshold; a fixed 500 is wrong for many assays and ignores age adjustment |

- **Proposed replacements**, keeping the strip's format and the count of items:
  - line 770 → `ECG ≤10 min` / `Suspected ACS — before anything else` *(or drop; `ECG ≤10 min` already appears at line 776 — see note)*
  - line 771 → `999` / `Any suspected ACS — GP does not risk-score first`
  - line 773 → `Assay-specific` / `D-dimer cutoff varies by lab and age — never a fixed 500`
- **Why this matters for the target audience:** a trainee reading the strip learns metrics they will
  never use and may believe they are expected to risk-stratify before admitting. The body of the
  page already gets this right, so the fix is to the strip alone.
- **Note:** confirm whether `ECG ≤10 min` at line 776 duplicates the line 770 replacement before
  applying; pick one and use the freed slot for a genuine GP number (e.g. `>72 h` — the CG95 window
  in which a primary-care troponin is defensible, which the algorithm already states).

### 2.7 — `tools/algorithms/chest-pain.html` line 245 · **S3** · T3

- **Current:** `Not in primary care: exercise ECG for angina, GTN as a diagnostic trial, CT coronary angiography.`
- **Replace with:** `Not a primary-care test: CT coronary angiography — but note it is the NICE CG95 first-line investigation for stable chest pain, so this is a referral, not a dead end (some areas run GP direct access — check locally). Not recommended at all for diagnosing stable angina: exercise ECG (removed from CG95 in 2016) and a GTN response as a diagnostic trial.`
- **Why:** the single list conflates three different things — a test nobody should use for this
  purpose (exercise ECG), an unreliable diagnostic heuristic (GTN response), and *the* first-line
  test (CTCA). As written, a trainee can infer exercise ECG remains valid in secondary care, and
  that CTCA is unavailable rather than referral-gated.

---

## 3. Judgement calls for you — not changed on my authority

1. **Pages that cite "the age-specific threshold" without the values.**
   `tools/algorithms/pelvic-pain-women.html` (28 CA125 mentions) refers throughout to "the
   age-specific threshold" and correctly carries the under-40 rule, but never states the five
   numbers. Editorially defensible — one page holds the table. But a GP using that page at the desk
   cannot act without leaving it. **Decide:** house rule that any page triggering a CA125 also
   carries the bands, or a consistent inline link to the page that does. Affects roughly 14 files.
2. **`RMI >250 → 2WW` in `abdominal-mass.html`.** RMI is a secondary-care triage tool needing an
   ultrasound score a GP does not generate. Worth reviewing against the §2.6 scope-of-practice
   principle — I have not proposed a change pending your view on how strictly to apply it.
3. **Subclinical hypothyroidism lower bound.** One page says treat at `TSH 4.5–10 + symptoms`;
   NICE NG145 frames the lower bound as the assay's upper reference limit, not a fixed 4.5.
   Cosmetic unless you want the corpus to track NG145 wording exactly.

---

## 4. What this batch did and did not cover

**Covered, corpus-wide (all 506 artefacts scanned):** NG12 CA125 and the under-40 rule;
nitrofurantoin renal dosing; QRISK threshold; protocol/print payload integrity; redirect-stub
integrity; atorvastatin dose-string distribution.
**Covered in depth (2 artefacts):** `cases/chest-pain.html`, `tools/algorithms/chest-pain.html`.

**Not yet started:** Pass A sweeps 2–10 (MHRA safety items, UKMEC/contraception, antibiotic
choice and dose, eGFR/renal dosing beyond nitrofurantoin, BP thresholds and targets,
pregnancy/breastfeeding, DVLA, sick-day rules); Pass B deep review of the remaining **504**
artefacts; Pass C gap analysis; Pass D integrity gate.

**Calibration note, honestly stated.** Four corpus-wide sweeps returned essentially clean, and my
one headline claim was a false positive of my own making. This corpus is accurate and current far
more often than not. The yield from here is in the §2.6/§2.7 class — scope-of-practice confusion,
internal contradiction between a page's headline and its body, and incompleteness at the point of
use — rather than wrong facts. That is a real finding about where to aim the remaining effort, and
it argues for the deep per-page review (Pass B) over more broad numeric sweeps.

**On verification.** Everything above rests on T2/T3/T4. `nice.org.uk`, `bnf.nice.org.uk`,
`cks.nice.org.uk` and `gov.uk` are still blocked by this environment's network policy, so no
finding here is T1. The two CA125 change specs reuse band values that the corpus and web search
independently agree on, which is why I am comfortable proposing them; I would still confirm against
NG12 1.5.6 before they go live.
