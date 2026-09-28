# MedWise clinical revision — findings batch 03: corpus-wide sweeps

**Mode: report only. No clinical file has been modified.**
**Audience lens:** UK GP and GP trainee (SCA-facing). **Date:** 28 September 2026.
**Tiers:** `T1` primary source · `T2` search-corroborated · `T3` my knowledge (to May 2026) ·
`T4` corpus contradicts itself. **Severity:** `S1` harm · `S2` superseded · `S3` missing GP info ·
`S4` imprecision.

**Coverage:** these five sweeps each ran across **all 506 artefacts**, not a sample. Every lead was
verified against raw source at the exact line before entering §1 — the scans are lead generators
with a high false-positive rate, and §3 records what they threw away.

---

## 1. Findings

### 1.1 — `tools/management/essential-tremor.html` · **S1/S2** · T3

Prescribes **topiramate 25–100 mg OD** and lists its adverse effects (cognitive slowing,
paraesthesiae, weight loss) — but carries **no mention of teratogenicity, the Pregnancy Prevention
Programme, or contraception**. The only pregnancy-related word in the entire file is about
caeruloplasmin in a Wilson's disease workup.

Essential tremor affects women of childbearing age, and since the MHRA's January 2024 safety
measures topiramate must not be used in pregnancy and may be prescribed to people able to have
children only under a PPP with effective contraception. As written, a trainee would prescribe it
unaware of any of that.

- **Fix:** copy the wording your own migraine protocol already uses —
  `tools/management/migraine.html`: *"Topiramate is effective BUT teratogenic (Pregnancy Prevention
  Programme and effective contraception mandatory), reduces COC efficacy, causes cognitive fog,
  weight loss, paraesthesia, renal stones and acute glaucoma (early eye pain → stop)."*
- Add the same "in any woman who could conceive, prefer the alternative" steer the migraine
  protocol makes explicit, since propranolol and primidone are the first-line options here anyway.
- **Mirror into `tools/management/essential-tremor-print.html`** if a print twin exists.

### 1.2 — `tools/algorithms/tremors.html` · **S3** · T3

Same gap, lower exposure: lists `topiramate/gabapentin 2nd-line` and `topiramate / gabapentin
(adjunct)` as treatment steps with no dose and no PPP reference. One pregnancy-related word in the
file, unrelated.

- **Fix:** add a short PPP flag at the point topiramate is named, or link to the protocol.

### 1.3 — `tools/algorithms/nasal-congestion.html` · **S3** · T4

Prescribes **montelukast 10 mg OD** twice (once specifically recommending it for
aspirin-sensitivity/Samter's and asthma+rhinitis overlap) with **zero neuropsychiatric-warning
content** — 0 hits for nightmare, mood, behaviour, agitation, sleep disturbance or suicidality.

**T4: your own corpus does this properly elsewhere.** `tools/management/allergic-rhinitis.html`
carries the exemplary version, citing both MHRA dates: *"warn about **sleep disturbance,
nightmares, mood change, anxiety, depression and suicidal thoughts**: the MHRA strengthened these
warnings in April 2024"*, plus the September 2019 detail on speech disturbance (stuttering) and
obsessive-compulsive symptoms.

- **Fix:** copy that sentence to the point of prescribing on this page.

### 1.4 — `tools/algorithms/widespread-itch.html` · **S3** · T4

`montelukast 10 mg OD if refractory` — same zero-warning gap, same fix.

### 1.5 — `cases/axial-spa.html` (14 sites) · **S2** · T3

Instructs UK GPs to use **Framingham with a ×1.5 multiplier** for CVD risk:
*"Annual BP, lipid profile, and glucose. Framingham risk calculation (×1.5 multiplier is the EULAR
2016 international recommendation)"* and *"Target: annual CVD risk assessment; Framingham ×1.5"*.

Two problems for the target audience:

1. **Not actionable in UK primary care.** Framingham is not in EMIS or SystmOne; **QRISK3** is the
   UK tool. A trainee cannot do what this page instructs during a consultation.
2. **The underlying clinical point is right but mis-transmitted.** QRISK3 includes rheumatoid
   arthritis as a variable but **not axial SpA**, so risk genuinely is under-estimated here — which
   is what the EULAR ×1.5 multiplier was designed to address in inflammatory arthritis.

- **Fix:** switch the instruction to **QRISK3 annually**, state plainly that QRISK3 captures RA but
  not axial SpA so it under-estimates risk in this group, and keep EULAR's ×1.5 as *international
  context informing a lower treatment threshold / earlier statin discussion* rather than as the
  calculation to perform. Retain the (correct and valuable) underlying teaching that inflammation
  drives premature atherosclerosis.

### 1.6 — `cases/ckd.html` line 1204 · **S3** · T4

- **Current:** `indapamide 1.25mg`
- **Replace with:** `indapamide 1.5 mg MR`
- **Why:** **1.25 mg is not a marketed UK strength.** Indapamide is 2.5 mg standard tablets or
  1.5 mg modified-release. This is an unprescribable dose. Every other mention in the corpus is
  correct (2.5 mg ×3, 1.5 mg ×2), and the CKD *protocol* for the same topic says
  `indapamide 1.5 mg MR` at line 136 — so the case contradicts its own protocol.

---

## 2. Verified clean — corpus-wide

| Sweep | Scope | Result |
|---|---|---|
| **Deprecated tools and scores** | 11 tools × 506 artefacts | **Essentially a clean bill.** Only one new finding (§1.5). Everything else is handled correctly or is a legitimate use — see §3. |
| **Outlier drug doses** | every drug+dose string in the corpus | **4 leads, all legitimate** — aspirin 600 mg (Lynch/CAPP2 context), carbimazole 5 mg (maintenance), estradiol 100 mcg (patch vs 10 mcg vaginal), prednisolone 1 mg (taper step). No dosing errors found. |
| **Case ↔ protocol dose agreement** | all 57 same-named pairs | 22 divergences, **21 benign** (start dose vs range, per-dose vs per-day, different route or age group). One real finding (§1.6). |
| **MHRA/BNF mandatory warnings** | 16 high-risk drugs × 506 artefacts | 19 leads, **15 false positives**, 4 genuine (§1.1–1.4). |
| **Headline card vs page body** | 1,878 headline items across 108 cases | Not mechanisable — see §3. |

**Notable positives worth preserving as house templates:**
- `cases/tia-stroke.html:355` — deprecated-tool wording: *"ABCD² Score — historic tool (NG128: do NOT use it to set referral urgency)"*
- `tools/management/allergic-rhinitis.html` — montelukast warning, citing both MHRA dates
- `tools/management/migraine.html` — topiramate PPP wording
- `tools/algorithms/haematemesis.html` — scope-of-practice framing: *"A Glasgow-Blatchford score of 0 identifies very low risk, but it needs blood results and most UK units admit anyway"*
- `cases/heart-failure.html` — the correct BNP scale (see batch 02 §1.1)

---

## 3. What the scans threw away, and why it matters

Recording the false positives, because the ratio is the useful signal about this corpus.

**Deprecated-tool sweep — 39 unflagged leads, 38 discarded:**
- **Centor** (13 sites): **my premise was wrong.** NICE NG84 recommends FeverPAIN **or** Centor —
  Centor is not deprecated. Dropped from the sweep entirely.
- **MMSE** (~40 sites): correctly contextualised as *"copyrighted so less used now"* alongside 6CIT
  and MoCA, and legitimately required for the NICE TA217 ChEI licensing bands.
- **Framingham in `cases/hiv.html`** (7 sites): quoting the D:A:D study's own methodology. Correct.
- **Exercise ECG in `cases/angina.html`** (6 sites): correctly states CTCA *"has replaced exercise
  tolerance testing as first-line investigation for stable chest pain in NICE CG95"*.
- **Exercise ECG in `mi-secondary-prevention` and `hypercholesterolaemia`**: these are **DVLA
  Group 2 relicensing requirements**, which genuinely do require exercise testing. Correct.
- **Blatchford / Rockall**: correctly labelled as needing bloods / secondary care.

**MHRA sweep — 15 of 19 discarded**, including `tools/management/uti-women.html`, which I first
flagged for prescribing ciprofloxacin 500 mg BD without a fluoroquinolone caution. It **does** carry
it — *"MHRA (January 2024): systemic fluoroquinolones only when other recommended antibiotics are
inappropriate"* — in a different field from the drug name. Also discarded: `uti-men` flagged for a
*pregnancy* warning on trimethoprim (patients are men), and pages naming a drug only as a *cause* of
the presenting problem (pioglitazone under hair loss; ciprofloxacin under pancytopenia and purpura).

**Headline-vs-body sweep — abandoned as a method.** All 7 hits were false positives: the heuristic
matched incidental numbers (`500` mg, `95`%, `20–25`%) against unrelated body text. The batch-02 BNP
finding was caught by knowing BNP and NT-proBNP are different assays with different scales — domain
knowledge, not pattern matching. **That class of defect needs paired reading, not a regex.**

---

## 4. Status

**Cumulative:** all 506 artefacts covered by five corpus-wide sweeps; 31 artefacts additionally
read in depth (cardiovascular batch 02 + chest pain batch 01). **17 change specs proposed. No file
modified.**

**Where the remaining risk sits.** The sweeps have now largely exhausted what automation can find in
this corpus: dosing is sound, deprecated tools are handled well, MHRA warnings are present almost
everywhere. Every substantive finding across all three batches came from **reading a case and its
protocol side by side** (§1.5, §1.6, batch 02 §1.1, §1.2) or from **domain knowledge about two
similar-looking scales** (batch 02 §1.1). Neither is automatable.

**Honest statement of what is left.** A rigorous per-page review of the remaining ~475 artefacts is
not something I can complete to the standard of batches 01–03 in one sitting, and I am not going to
claim a clean bill over pages I have not read. What is left is listed by domain in the plan's Pass B.
The corpus-wide sweeps mean the *high-severity, systematic* risks have been checked everywhere; what
remains is per-page incompleteness of the §1.1–1.4 kind, which is found by reading.

**Verification standing.** No T1 in this batch. `nice.org.uk`, `bnf.nice.org.uk`, `cks.nice.org.uk`
and `gov.uk` remain blocked by this environment's network policy. §1.3, §1.4 and §1.6 are T4 —
your corpus contradicting itself — and need no external source to act on.
