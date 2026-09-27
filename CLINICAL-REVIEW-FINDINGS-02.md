# MedWise clinical revision — findings batch 02: cardiovascular

**Mode: report only. No clinical file has been modified.**
**Audience lens:** UK GP and GP trainee (SCA-facing). **Date:** 27 September 2026.
**Tiers:** `T1` primary source · `T2` search-corroborated · `T3` my knowledge (to May 2026) ·
`T4` corpus contradicts itself. **Severity:** `S1` harm · `S2` superseded position · `S3` missing
GP info · `S4` imprecision.

**Artefacts in scope (29):** cases — angina, atrial-fibrillation, blackouts, breathlessness,
chest-pain*, dvt, heart-failure, hypercholesterolaemia, hypertension, palpitations,
peripheral-arterial-disease, tia-stroke · protocols — antiplatelets-anticoagulants,
atrial-fibrillation, dvt, familial-hypercholesterolaemia, heart-failure, hypercholesterolaemia,
hypertension, hypertension-pregnancy, peripheral-arterial-disease, pulmonary-embolism,
stable-angina, tia-stroke, varicose-veins, vasovagal-syncope · algorithms — ankle-swelling,
breathlessness, chest-pain*, leg-pain, palpitations. *(\* reviewed in batch 01.)*

---

## 1. Findings

### 1.1 — `cases/breathlessness.html` lines 1577–1578 · **S2, safety-relevant** · T4

Two adjacent headline number-cards apply the **NT-proBNP** band structure to cards labelled
**BNP**. These are two different assays with different NG106 cut-offs, and the result understates
urgency for a whole band of patients.

| Line | Current card | Problem |
|---|---|---|
| 1577 | `BNP >400` — "pg/mL → HF likely; **echo within 6 weeks**" | For BNP, >400 pg/mL is the *high* category → specialist assessment and echo **within 2 weeks**. The 6-week window belongs to BNP **100–400**. |
| 1578 | `BNP >2000` — "pg/mL → echo within 2 weeks (NICE NG106)" | **No BNP 2000 threshold exists in NG106.** 2000 is the NT-proBNP cut-off (ng/L). |

**Effect on a GP using the page:** the two cards read together teach *BNP 400–2000 → 6 weeks,
>2000 → 2 weeks*. A patient with BNP 500 pg/mL is therefore put on a 6-week pathway when NG106
places them on the 2-week pathway.

**This is T4 — your own corpus already contradicts it.** `cases/heart-failure.html:1867` states
`BNP >400 → echo ≤2 weeks (NICE NG106)`, and lines 1871/1880 of that file give the full BNP scale
correctly. `cases/heart-failure.html` is the correct model; `cases/breathlessness.html` is the
outlier.

- **Replace line 1577 card with:** val `BNP 100–400` · label `pg/mL → possible HF; specialist assessment + echo within 6 weeks`
- **Replace line 1578 card with:** val `BNP >400` · label `pg/mL → probable HF; specialist assessment + echo within 2 weeks (NG106)`
- **Or**, to keep an NT-proBNP card (many labs report it instead): val `NT-proBNP >2000` · label `ng/L → specialist assessment + echo within 2 weeks (NG106)`. **Do not** leave a card that pairs the label "BNP" with the figure 2000.
- **Also check** lines 772–773 of the same file: these use the BNP scale **correctly**
  (`BNP >400 → HF likely`, `BNP <100 → HF unlikely`) and need no change — but they sit in a
  different strip from 1577–1578, so the file currently ships two different BNP scales.

### 1.2 — `cases/atrial-fibrillation.html` (~28 sites) · **S2, SCA-relevant** · T4

The casebook teaches **HAS-BLED** as the operative bleeding-risk tool, while **your own protocol
for the same condition states that NG196 prefers ORBIT**. HAS-BLED appears 28 times in the case and
ORBIT once; in the protocol the ratio is reversed (ORBIT 12, HAS-BLED 3).

`tools/management/atrial-fibrillation.html:43` — "**NG196 prefers ORBIT to HAS-BLED**"
`tools/management/atrial-fibrillation.html:132` — "ORBIT (preferred over HAS-BLED in NG196): sex plus haemoglobin, age >74, bleeding history, renal impairment, antiplatelet use"

The case does not merely mention HAS-BLED in passing — it trains the trainee to *score* it and
marks them on it:

| Line | Current | Why it needs changing |
|---|---|---|
| 694 | data-gathering list: `CHA₂DS₂-VASc score · HAS-BLED score` | tells the candidate which score to produce |
| 786, 801, 804 | `HAS-BLED point if uncontrolled` / `if ongoing use` / `HAS-BLED point` | walks the candidate through awarding HAS-BLED points |
| 951, 957 | examiner checkpoints referencing `HAS-BLED risk factor` / `changes HAS-BLED assessment` | the candidate is *marked* on HAS-BLED |
| 1060 | `bleeding risk (HAS-BLED)` as the basis of the anticoagulation decision | names the superseded tool as the decision input |
| 1067 | section header `5C — HAS-BLED Score: assess bleed risk…` | an entire subsection built on it |
| 1069 | card header `🩸 HAS-BLED — identify and correct modifiable bleeding risk factors` | ditto |
| 671 | `HAS-BLED ≥3` … "NB NICE NG196 now prefers ORBIT" | the page already *knows*; it was flagged but never converted |

**Recommended change:** convert section 5C and all scoring/checkpoint references to **ORBIT**,
retaining HAS-BLED only as a named historic tool. ORBIT components for the rewrite (0–7 points):
haemoglobin <13 g/dL in men / <12 g/dL in women, or haematocrit <40%/<36% — **2**; age >74 — **1**;
bleeding history (GI bleed, intracranial bleed, haemorrhagic stroke) — **2**; eGFR <60 — **1**;
concurrent antiplatelet — **1**. Low 0–2, medium 3, high 4–7. Keep the existing and correct framing
that the score directs modification, never withholding.

**Use your own in-house precedent for the wording.** `cases/tia-stroke.html:355` handles exactly
this situation exemplarily: *"ABCD² Score — historic tool (NG128: do NOT use it to set referral
urgency)"*, and line 552 repeats it. Mirror that pattern: *"HAS-BLED — historic tool (NG196 prefers
ORBIT)"*. This keeps trainees able to recognise HAS-BLED if a colleague cites it, without being
coached to produce it in an SCA.

### 1.3 — `cases/breathlessness.html` lines 1100, 1104, 1138, 1192 · **S4** · T4

NT-proBNP is quoted in **pg/mL** here but in **ng/L** elsewhere in the corpus (and at line 1100's
own opening sentence). The two units are numerically identical for NT-proBNP, so **there is no
safety consequence** — but line 1100 switches units mid-cell, which reads like an error and
invites a reader to think two different scales are in play.

- **Change:** use `ng/L` for NT-proBNP throughout, matching `tools/algorithms/breathlessness.html`
  and `tools/management/heart-failure.html`.

### 1.4 — `cases/heart-failure.html` line 970 · **S4** · T3

- **Current:** `BNP 100–400 = possible HF → echo routine`
- **Replace with:** `BNP 100–400 = possible HF → specialist assessment and echo within 6 weeks`
- **Why:** "routine" understates a defined 6-week NG106 window, and the same file states it
  correctly at line 1871. Internal inconsistency within one file.

---

## 2. Verified clean — cardiovascular

| Check | Result |
|---|---|
| **TIA risk scores** | **Exemplary.** `cases/tia-stroke.html` labels ABCD² a historic tool and states NG128 removed score-based triage (lines 334, 355, 552). Use as the house template for deprecated tools. |
| **Heart failure four pillars** | complete — SGLT2i, ARNI/sacubitril and MRA all present in both case and protocol |
| **NT-proBNP thresholds** | correct wherever the label is NT-proBNP: 400–2000 ng/L → 6 weeks, >2000 → 2 weeks (protocol, print twin, ankle-swelling, breathlessness algorithm, summaries) |
| **PAD (NG147)** | clopidogrel, atorvastatin 80 mg and supervised exercise all present in case and protocol |
| **AF aspirin** | correctly and repeatedly rejected as a stroke-prevention alternative; female sex alone correctly non-qualifying |
| **Hypertension (NG136)** | 140/90, 135/85, 150/95, 150/90, 130/80 all present in expected proportions in case and protocol |

---

## 3. Method note — a correction I caught mid-batch

My first pass flagged `tools/management/heart-failure.html`, its print twin,
`tools/algorithms/ankle-swelling.html` and `tools/algorithms/breathlessness.html` as carrying
"BNP >2000". **They do not — all four correctly say NT-proBNP.** My grep extracted matches starting
at the substring `BNP`, which silently stripped the `NT-pro` prefix before the exclusion filter ran.
I verified each location against the raw source before reporting, which is why they appear in §2 as
clean rather than in §1 as findings.

Consequence for the remaining batches: any finding resting on a drug or assay *name* is now checked
against raw source text at the exact line before it goes in a report. Reported counts in §1 have
all had that check.

---

## 4. Batch status

**Reviewed this batch:** 29 cardiovascular artefacts (27 new + 2 from batch 01).
**Findings:** 2 substantive (§1.1 safety-relevant, §1.2 SCA-relevant), 2 minor.
**Cumulative:** 31 of 506 artefacts reviewed; 11 change specs proposed; no file modified.

**Pattern holding across both batches.** Both substantive findings are the class predicted at the
end of batch 01 — not wrong medicine, but a **headline card contradicting the page's own body**
(§1.1) and a **casebook teaching a tool the product's own protocol calls superseded** (§1.2).
Neither would be caught by a numeric sweep; both were caught by reading case and protocol for the
same condition side by side. **Recommendation: make paired case-vs-protocol reading the standard
method for every remaining domain batch.** It is also worth a one-off corpus-wide check for other
deprecated tools taught as current — the ABCD²/HAS-BLED pattern suggests there may be more.

**Next batch (03), unless you redirect:** respiratory — asthma, COPD, chest infections,
breathlessness overlap, PE, pleural disease, sleep apnoea — same report-only format, paired
case-vs-protocol reading.

**Verification standing.** No T1 in this batch: `nice.org.uk`, `bnf.nice.org.uk`, `cks.nice.org.uk`
and `gov.uk` remain blocked by this environment's network policy. §1.1 and §1.2 rest on T4 (your
corpus contradicting itself), which needs no external source — these are the two I would act on with
most confidence of anything found so far.
