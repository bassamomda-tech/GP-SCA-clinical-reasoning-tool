# MedWise clinical revision — consolidated change register

**Every proposed change from the review, in one place, ordered by severity.**
**No clinical file has been modified.** Date: 28 September 2026.

Tiers: `T1` primary source · `T2` search-corroborated · `T3` my knowledge (to May 2026) ·
`T4` corpus contradicts itself (needs no external source — highest confidence).

**Verification caveat that applies to the whole register:** `nice.org.uk`, `bnf.nice.org.uk`,
`cks.nice.org.uk` and `gov.uk` are blocked by this environment's network policy, so **nothing here
is T1**. The T4 items are the ones to act on with most confidence. Check every dose against the
current BNF before applying, as your own page footers require.

---

## Priority 1 — act first (patient-safety or exam-safety consequence)

### R1 · `tools/management/essential-tremor.html` · S1/S2 · T3
Topiramate 25–100 mg OD prescribed with **no teratogenicity, PPP or contraception content at all**.

**Add at the point topiramate is named**, reusing your own migraine protocol's wording verbatim:
> Topiramate is effective BUT teratogenic (Pregnancy Prevention Programme and effective
> contraception mandatory), reduces COC efficacy, causes cognitive fog, weight loss, paraesthesia,
> renal stones and acute glaucoma (early eye pain → stop).

Add the same "in any woman who could conceive, prefer the alternative" steer — propranolol and
primidone are first-line here anyway. **Mirror into the `-print` twin if one exists.**

### R2 · `cases/breathlessness.html` lines 1577–1578 · S2 · T4
NT-proBNP band structure applied to cards labelled **BNP**, understating urgency for BNP 400–2000.

| | Current | Replace with |
|---|---|---|
| 1577 | val `BNP >400` · lbl `pg/mL → HF likely; echo within 6 weeks` | val `BNP 100–400` · lbl `pg/mL → possible HF; specialist assessment + echo within 6 weeks` |
| 1578 | val `BNP >2000` · lbl `pg/mL → echo within 2 weeks (NICE NG106)` | val `BNP >400` · lbl `pg/mL → probable HF; specialist assessment + echo within 2 weeks (NG106)` |

Alternative for 1578 if you want an NT-proBNP card: val `NT-proBNP >2000` · lbl `ng/L → specialist
assessment + echo within 2 weeks (NG106)`. **Never pair the label "BNP" with the figure 2000.**
Lines 772–773 of the same file are already correct — leave them.
Reference model: `cases/heart-failure.html` lines 1867/1871/1880.

### R3 · `cases/atrial-fibrillation.html` · ~28 sites · S2 · T4
Teaches **HAS-BLED** as the operative bleeding tool; your own protocol says NG196 prefers **ORBIT**.

Convert section 5C and all scoring/checkpoint references to ORBIT. Sites: **671** (numstrip),
**694** (data-gathering list), **786 / 801 / 804** (point-awarding), **951 / 957** (examiner
checkpoints), **1060** (decision input), **1067** (section header 5C), **1069** (card header).

ORBIT components, 0–7: haemoglobin <13 g/dL men / <12 g/dL women, or haematocrit <40% / <36% — **2**;
age >74 — **1**; bleeding history (GI, intracranial, haemorrhagic stroke) — **2**; eGFR <60 — **1**;
concurrent antiplatelet — **1**. Low 0–2, medium 3, high 4–7.

Keep HAS-BLED as a named historic tool using your own house pattern from
`cases/tia-stroke.html:355` — *"ABCD² Score — historic tool (NG128: do NOT use it to set referral
urgency)"* → *"HAS-BLED — historic tool (NG196 prefers ORBIT)"*.
Preserve the existing correct framing that the score directs modification, never withholding.

### R4 · `cases/axial-spa.html` · 14 sites · S2 · T3
Instructs **Framingham ×1.5** (EULAR 2016) for CVD risk — not actionable in UK primary care, where
QRISK3 is the tool in EMIS and SystmOne.

- Switch the instruction to **QRISK3 annually**.
- State that QRISK3 includes rheumatoid arthritis but **not axial SpA**, so it under-estimates risk
  in this group.
- Keep EULAR's ×1.5 as *international context supporting a lower treatment threshold / earlier statin
  discussion*, not as the calculation to perform.
- **Retain** the existing, correct teaching that inflammation drives premature atherosclerosis.

---

## Priority 2 — important information missing at the point of use

### R5 · `tools/algorithms/nasal-congestion.html` · S3 · T4
Montelukast 10 mg OD prescribed twice, **no neuropsychiatric warning**. Copy from
`tools/management/allergic-rhinitis.html`:
> warn about **sleep disturbance, nightmares, mood change, anxiety, depression and suicidal
> thoughts**: the MHRA strengthened these warnings in April 2024

(that page also carries the Sept 2019 detail on speech disturbance/stuttering and OCD symptoms).

### R6 · `tools/algorithms/widespread-itch.html` · S3 · T4
`montelukast 10 mg OD if refractory` — same gap, same fix as R5.

### R7 · `tools/algorithms/tremors.html` · S3 · T3
`topiramate/gabapentin 2nd-line` and `topiramate / gabapentin (adjunct)` with no PPP reference.
Add a short PPP flag at the point topiramate is named, or link to the protocol once R1 is done.

### R8 · `tools/algorithms/abnormal-cancer-markers.html` line 154 · S3 · T2
- **Current:** `CA125 at or above the NG12 age-specific threshold (35 IU/mL applies only at 40–49) = urgent USS pelvis`
- **Replace:** `CA125 at or above the NG12 age-specific threshold (≥35 IU/mL at 40–49, ≥31 at 50–59, ≥24 at 60–69, ≥25 at 70–79, ≥31 at 80+) = urgent direct-access USS abdomen and pelvis; under 40 do not use CA125 alone — consider ultrasound as well`
- This is the corpus's own marker-interpretation reference page, so it is the one place the full table must appear.

### R9 · `tools/algorithms/abdominal-mass.html` line 168 · S3 · T2
States all five bands but the file has **no under-40 rule anywhere** — the group most at risk of
false reassurance from a normal CA125.
- **Append to the existing sentence:** `Under 40: do not rely on CA125 alone — arrange ultrasound, and refer on the mass itself regardless of the CA125.`

### R10 · `cases/ckd.html` line 1204 · S3 · T4
- **Current:** `indapamide 1.25mg` — **not a marketed UK strength**
- **Replace:** `indapamide 1.5 mg MR`
- Corpus elsewhere: 2.5 mg ×3, 1.5 mg ×2. The CKD protocol says `indapamide 1.5 mg MR` at line 136.

### R11 · `cases/chest-pain.html` lines 770, 771, 773 · S3 · T4
GP-facing headline strip leads with secondary-care metrics; the page's own body contradicts one.

| Line | Current | Replace with |
|---|---|---|
| 770 | `0h / 2h` · hs-Troponin rule-out protocol | see note — body line 1222 correctly calls this hospital/ED |
| 771 | `GRACE ≥140` · High-risk ACS → immediate hospital | `999` · `Any suspected ACS — GP does not risk-score first` |
| 773 | `D-dimer <500` · Low-risk PE exclusion threshold | `Assay-specific` · `D-dimer cutoff varies by lab and age — never a fixed 500` |

Note: `ECG ≤10 min` already appears at line 776. Use the freed slot for a genuine GP number — e.g.
`>72 h`, the CG95 window in which a primary-care troponin is defensible, which your chest-pain
algorithm already states. Body line 1877 already says *assay-specific* correctly.

### R12 · `tools/algorithms/chest-pain.html` line 245 · S3 · T3
- **Current:** `Not in primary care: exercise ECG for angina, GTN as a diagnostic trial, CT coronary angiography.`
- **Replace:** `Not a primary-care test: CT coronary angiography — but note it is the NICE CG95 first-line investigation for stable chest pain, so this is a referral, not a dead end (some areas run GP direct access — check locally). Not recommended at all for diagnosing stable angina: exercise ECG (removed from CG95 in 2016) and a GTN response as a diagnostic trial.`
- The single list conflates a test nobody should use, an unreliable heuristic, and *the* first-line test.

---

## Priority 3 — precision and internal consistency

| # | File · line | Current | Replace with | Tier |
|---|---|---|---|---|
| R13 | `tools/algorithms/irregular-periods.html:122` | `…thresholds (e.g. ≥35 IU/mL at 40–49) →` | `…thresholds (≥35 IU/mL at 40–49, ≥31 at 50–59, ≥24 at 60–69, ≥25 at 70–79, ≥31 at 80+) →` | T2 |
| R14 | `tools/algorithms/polycythaemia.html:577` | `statin if QRISK >10%` | `statin if QRISK3 ≥10%` | T3/T4 |
| R15 | `cases/heart-failure.html:970` | `BNP 100–400 = possible HF → echo routine` | `BNP 100–400 = possible HF → specialist assessment and echo within 6 weeks` | T4 |
| R16 | `cases/breathlessness.html:1100, 1104, 1138, 1192` | NT-proBNP in `pg/mL` | NT-proBNP in `ng/L` (house convention; numerically identical, so no safety impact — line 1100 currently switches units mid-cell) | T4 |
| R17 | `tools/management/bells-palsy.html` + `-print.html` | payloads have diverged — the only 1 of 211 pairs that has | diff the two `MG.render` blocks, decide which is current, bring the other into line | T4 |

---

## Priority 4 — optional / your policy call

| # | Item | Decision needed |
|---|---|---|
| R18 | ~14 files cite "the age-specific threshold" without the CA125 values — e.g. `tools/algorithms/pelvic-pain-women.html` (28 mentions, correctly carries the under-40 rule) | House rule: every page triggering a CA125 carries the bands inline, or a consistent link to the page that does? Editorially defensible as-is, but a GP cannot act without leaving the page. |
| R19 | `tools/algorithms/abdominal-mass.html` — `RMI >250 → 2WW` | RMI needs an ultrasound score a GP does not generate. Apply the R11/R12 scope-of-practice principle, or leave as specialist context? |
| R20 | `tools/management/asthma.html` — `IV salbutamol 5 micrograms/min infusion` | Correct as written and legitimate as hospital description. Same scope-of-practice question. |
| R21 | `cases/contraception.html` — teaches bridging/immediate start but never uses the FSRH term **"Quick Start"** | Terminology only, no content change. Worth it for FSRH and SCA vocabulary. |
| R22 | One page gives subclinical hypothyroidism lower bound as `TSH 4.5–10 + symptoms` | NG145 frames the lower bound as the assay's upper reference limit, not a fixed 4.5. Cosmetic unless you want exact NG145 wording. |

---

## After applying any of these

1. **Mirror every protocol edit into its `-print.html` twin.** The clinical payloads are byte-identical
   in 210 of 211 pairs — that property is worth keeping. Verify by extracting the `MG.render(…)` block
   from each file and diffing; a guard script asserting identity across all 211 pairs should run after
   every batch.
2. **The 22 dual-representation algorithms** carry their clinical content twice in one file (printable
   sheet + interactive node flow, in different prose). Fix both copies. R12's file is one of them —
   check whether line 245's content is duplicated in the node flow.
3. **Chase corrected figures through all three registers in a case** — numstrip, step sections, and
   the Clinic/SCA reference summaries. R2 and R11 are both numstrip-only fixes precisely because the
   bodies were already right; do not assume that holds for other edits.
4. Bump `reviewed:` / `nextReview:` only on pages whose content actually changed, and add a
   `pages/updates.html` entry for R1–R4 in the existing house format.
