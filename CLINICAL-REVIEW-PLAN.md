# MedWise clinical revision — plan

**Goal:** revise every protocol, algorithm and casebook page for *accuracy* and for *important
information missing*, judged against one audience: **UK GPs and GP trainees (SCA-facing)**.

**Status:** first pass run in **report-only** mode; no clinical file edited.
Findings and change specs are in `CLINICAL-REVIEW-FINDINGS-01.md`. §5 and §9 corrected 27 Sep 2026.
**Branch for all work:** `claude/intelligent-cerf-ly6nvs`

---

## 1. Scope — what actually has to be reviewed

| Body of content | Location | Real pages | Notes |
|---|---|---|---|
| Casebook | `cases/*.html` | **108** | all substantive; all carry a provenance panel; `Reviewed: July 2026` stamps |
| Management protocols | `tools/management/*.html` | **208** | `MG.render({…})` data objects; 145 carry `reviewed:`/`nextReview:` |
| Algorithms | `tools/algorithms/*.html` | **190** | step-node flows (`SAFETY / DIAGNOSE / TREAT / REFER / LIFESTYLE`) |
| **Total clinical artefacts** | | **506** | |
| Print mirrors | `tools/management/*-print.html` | 211 | generated snapshots — see §2 |
| Redirect stubs | both `tools/` dirs | 97 | 15-line redirects; correct by design; **all targets verified to resolve** |

Adjacent clinical content **excluded unless you say otherwise**: `assets/dx-packs/` (98 files),
`assets/akt-questions.js`, `tools/sca-qbank.html`, `tools/prescribing.html`,
`tools/clinical-core.html`, `pages/resources.html`.

## 2. Structural facts that shape the work

1. **Print mirrors are byte-identical copies of the clinical payload.** For each
   `x-print.html` the `MG.render(…)` block matches `x.html` exactly — I verified all 211 pairs:
   **210 identical, 1 already divergent (`bells-palsy`)**. So every protocol edit must be applied
   to *both* files, and a guard script can assert payload identity after each batch. No generator
   exists in the repo, so this is done by mirrored edit, not regeneration.
2. **22 algorithms carry the same clinical content twice** in one file — a 2-page printable sheet
   (`<div class="page">`) *and* the interactive node flow — in different prose. Those 22 need every
   fix applied in both places. The other 167 are flow-only (1 is sheet-only).
3. **Cases hold the same facts in up to three registers:** the `numstrip` headline figures, the
   step sections, and the Clinic/SCA reference summaries. A corrected figure has to be chased
   through all three or the page contradicts itself.
4. **Algorithms and protocols are deliberately disjoint by name** — algorithms cover
   presentations and abnormal results, protocols cover conditions. Zero filename overlap. So
   cross-checking is by topic, not filename.
5. **House conventions to preserve:** the `provenance` / Evidence-panel section with a named
   source per figure; the `foot:` summary line; `guideline:` / `reviewed:` / `nextReview:` fields;
   the semantic colour code (red = now, amber = same-day, blue = assess, green = GP management,
   purple = specialist/2WW); and the "check doses against the current BNF" footer.

## 3. The review rubric — GP and GP-trainee lens

Each page is checked against 10 points. 1–4 are accuracy; 5–10 are the "important info missing"
half, which is where a page can be technically correct and still fail a trainee.

1. **Emergency and referral thresholds** — is every red flag present, and is the action
   (999 / same-day / 2WW / routine) the one current guidance gives?
2. **Drugs** — first-line choice, dose, frequency, duration, max dose, formulation, against the
   current BNF. Paediatric doses where the page covers children.
3. **Contraindications a GP prescribes into** — pregnancy, breastfeeding, eGFR cut-offs, hepatic,
   frailty/elderly, UKMEC category, interactions.
4. **Live MHRA Drug Safety Update items** — e.g. topiramate PPP, valproate, montelukast,
   fluoroquinolones, SGLT2 and DKA. Present and correctly stated?
5. **Investigation thresholds *and result handling*** — what the number means and what to do when
   it lands in the inbox, including the failsafe.
6. **Current NICE referral criteria** — NG12 above all (see §5), plus the condition's own NG/CG.
7. **Monitoring intervals, review rhythm and stopping rules** — the part trainees most often lack.
8. **Safety-netting in words a patient can act on** — with the trigger *and* the route.
9. **GP-system reality** — DVLA, fit notes, sick-day rules, shared care, QOF where relevant, and
   a clear line between *what the GP does* and *what secondary care does*, so trainees do not
   over-reach. (Example to assess: the `chest-pain` case headlines GRACE ≥140, 0h/2h hs-troponin
   and D-dimer <500 — secondary-care metrics presented as GP-facing numbers.)
10. **SCA fitness** — does the consultation practice match the current SCA format and marking
    domains (data gathering / clinical management / relating to others)?

### Severity scale used in the findings ledger

- **S1 critical** — could cause harm if followed: wrong dose, missing red flag, wrong emergency
  threshold, contraindication error.
- **S2 major** — superseded or wrong guideline position; would fail an SCA or an audit.
- **S3 moderate** — important GP information absent: monitoring, safety-netting, DVLA, pregnancy.
- **S4 minor** — imprecision, cross-page inconsistency, stale citation label.

## 4. Verification — method and one real constraint

**Constraint, stated plainly:** this container's network policy blocks `nice.org.uk`,
`bnf.nice.org.uk`, `cks.nice.org.uk` and `gov.uk`, so I **cannot fetch primary sources**.
Web *search* works and returns usable summaries; my own clinical knowledge runs to **May 2026**.

So verification runs in this order, and every finding in the ledger is labelled with which tier
settled it:

- **T1 primary source** — only available if the domains above are allowed (see §8, decision 1).
- **T2 search-corroborated** — a reputable secondary summary found by search, cited by URL.
- **T3 knowledge (to May 2026)** — my own, flagged as such.
- **T4 internal consistency** — the corpus disagrees with itself; both sides flagged for your call.

Anything that turns on a figure published **after May 2026** and not confirmable by search gets
**flagged to you rather than silently changed**. I will not invent a threshold to fill a gap.

## 5. Calibration sample — corrected 27 Sep 2026

**The original headline finding in this section was wrong and has been withdrawn.** It claimed the
corpus carried a superseded *flat* CA125 threshold across ~26 files. It does not: the corpus already
carries the full NICE NG12 April 2026 age bands (≥35 IU/mL at 40–49, ≥31 at 50–59, ≥24 at 60–69,
≥25 at 70–79, ≥31 at 80+) in 46 passages across 21 files, plus the under-40 rule. My original grep
had counted the first two entries of each age-band list as standalone flat thresholds. I no longer
need the CA125 values from you, and the NG12 sweep is not the place to start.

See `CLINICAL-REVIEW-FINDINGS-01.md` for what the corrected first pass actually found. In summary:

1. **Four corpus-wide sweeps came back clean** — NG12 CA125 bands, nitrofurantoin renal cut-offs,
   the QRISK 10% threshold, and asthma currency (NG245, AIR/MART).
2. **The real defect class is different from what this plan assumed.** It is scope-of-practice
   confusion (GP-facing headline figures that are secondary-care metrics), a page's headline
   contradicting its own body, and incompleteness at the point of use — not wrong facts.
3. **Genuine findings so far:** two incomplete CA125 statements, one missing under-40 rule in
   `abdominal-mass.html`, one `QRISK >10%` that should be `≥10%`, the `bells-palsy` print mirror
   already divergent, and the `chest-pain` case numstrip leading with hs-troponin/GRACE/D-dimer 500
   while its own body correctly calls two of the three hospital-only and the third assay-specific.
4. Asthma is current — so this is targeted revision of a good corpus, not a rewrite.

**Consequence for the plan:** the balance of effort should shift from broad numeric sweeps (Pass A)
toward the per-page deep review (Pass B), because that is where this corpus's remaining defects are.

## 6. Execution — four passes

### Pass A — cross-cutting sweeps (first, highest yield)
Corpus-wide facts fixed uniformly everywhere they appear, so pages cannot disagree afterwards.
Roughly 10 sweeps: NG12 referral criteria (incl. CA125 and myeloma), MHRA safety items, UKMEC and
contraception, antibiotic choice/dose vs NICE NG, eGFR and renal dosing cut-offs, statin and
QRISK positions, BP thresholds and targets, pregnancy/breastfeeding safety, DVLA rules,
sick-day rules. Each sweep: grep the corpus → adjudicate → one commit per sweep.

### Pass B — per-artefact deep review, batched by clinical domain
All 506 pages read against the §3 rubric, in domain batches (cardiovascular, respiratory,
GI/hepatology, renal/urology, endocrine, neurology, mental health, women's health, men's health,
paediatrics, MSK/rheumatology, dermatology, ENT/eyes, ID/travel, cancer/palliative, prescribing
and admin). Domain batching keeps a guideline position identical across every page that touches it.
Protocol edits are mirrored into the `-print` twin; the 22 dual-representation algorithms get both
copies fixed.

### Pass C — gaps and omissions
The "missing info" half, at corpus level: 29 casebook topics have neither a protocol nor an
algorithm — I will check whether each is a real gap or covered under a different name, and list
what a GP trainee would expect to find and cannot. Plus per-page omissions from rubric points 5–10.

### Pass D — consistency and integrity gate
Run after every batch: print-mirror payload identity across all 211 pairs; numeric-fact
consistency (one threshold, one value, corpus-wide); internal cross-references and stub targets
resolve; provenance panels updated where a figure changed; `reviewed:`/`nextReview:` bumped only
on pages whose content actually changed.

## 7. Deliverables

1. **The edits**, committed to `claude/intelligent-cerf-ly6nvs` — one commit per sweep or domain
   batch, so each is reviewable on its own.
2. **`CLINICAL-REVIEW-FINDINGS.md`** — a ledger: file, location, what it said, what it now says,
   severity, verification tier, source. This is the audit trail, and your check on my work.
3. **`CLINICAL-REVIEW-OPEN-QUESTIONS.md`** — everything I would not change on my own authority:
   post-May-2026 figures I could not confirm, genuine clinical judgement calls, and gaps that need
   a decision rather than an edit.
4. **A `pages/updates.html` entry** for clinically notable changes, in the existing house format —
   if you want it (decision 6).

## 8. Decisions I need before starting

1. **Network access.** Allow `nice.org.uk`, `bnf.nice.org.uk`, `cks.nice.org.uk` and `gov.uk`
   (MHRA) for this environment — Network access in the cloud environment's settings (environment
   menu in the session title bar → Edit), either a broader access level or those hosts added to
   allowed domains. Levels are described at
   <https://code.claude.com/docs/en/claude-code-on-the-web>. Without it I work at T2/T3 and flag
   more to you — usable, but materially weaker. Alternatively paste the key values you want used
   (starting with the NG12 CA125 age bands).
2. **Parallelism.** 506 pages is large. May I run parallel reviewer subagents (one per domain
   batch)? Much faster, more tokens. Default if you say nothing: sequential, single-threaded.
3. **Scope.** Cases + protocols + algorithms only, or add the adjacent content listed in §1?
4. **Edit posture.** My recommendation: fix S1–S4 in place and log everything, except where a
   change would alter a clinical position I cannot verify — those go to open questions. Say if you
   would rather see a report first and approve before any file changes.
5. **Delivery cadence.** Recommended: push per batch so you can review as it goes, rather than one
   large push at the end. No PR unless you ask.
6. **Metadata.** Bump `reviewed:` / `nextReview:` on changed pages, and add a `pages/updates.html`
   entry for notable changes? (Recommended yes to both.)

## 9. Order of work once you say go

**Revised 27 Sep 2026.** The original order started with an NG12 CA125 sweep that turned out not to
be needed (§5). Revised order:

1. Apply the batch-01 change specs in `CLINICAL-REVIEW-FINDINGS-01.md` (7 concrete edits, once you
   approve them and confirm the report-only vs edit-in-place posture).
2. **Pass B deep review**, batched by clinical domain — promoted ahead of the remaining Pass A
   sweeps, because the clean sweep results in §5 show the defects live at page level, not in
   corpus-wide numeric drift.
3. Remaining Pass A sweeps (MHRA, UKMEC, antibiotics, renal dosing, BP, pregnancy, DVLA, sick-day
   rules) folded into the domain batches they belong to, rather than run separately.
4. Pass C gap analysis, then the Pass D integrity gate after every batch.

The first Pass B batch will be cardiovascular, since `chest-pain` is already part-reviewed and the
scope-of-practice principle established there (§2.6–2.7 of the findings) needs applying uniformly
across angina, AF, heart failure and hypertension.
