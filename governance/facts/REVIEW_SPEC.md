# Facts register: cross-page review, pass 1

Your job is to find wrong or inconsistent clinical numbers ACROSS a UK GP education website.

## Paths and rules
- **F** = `/tmp/claude-0/-home-user-GP-SCA-clinical-reasoning-tool/db1fda5d-4448-5a27-9996-ec762174568a/scratchpad/u172/site/governance/facts/`
- **SITE** (READ ONLY in this pass) = `/tmp/claude-0/-home-user-GP-SCA-clinical-reasoning-tool/db1fda5d-4448-5a27-9996-ec762174568a/scratchpad/u172/site/`
- Do NOT edit any site file. A separate fixing pass will apply your findings.
- No git.

## What you are given
For each of your subjects, `F/dossiers/<subject>.md` lists every number the site states about that subject:
- grouped by action and unit (e.g. "maintenance | iu");
- each distinct value with the files that state it and up to 3 example sentences.

Groups marked **VALUES DIFFER** are the main work.

Number extraction is automatic, so expect noise: a number bound to the wrong subject, IDs, years. Ignore noise quickly.

## For every "VALUES DIFFER" group
Decide which of these it is:
1. **Legitimate.** The values apply to different situations: indication, age band, formulation, severity band, pre-start vs on-treatment, adult vs child, renal dose. No action needed.
2. **Inconsistent or wrong.** The same situation is stated with different numbers on different pages, or a value is out of date or wrong.
   - Establish the CORRECT current UK value. Verify it with WebSearch against NICE/CKS, SPC (emc), SPS, MHRA, BSH, BSG, BTS, UKKA, SfE, RCUK, JBDS, DVLA, NOS/ROS, BASHH, RCOG, NHS England.
   - nice.org.uk is often blocked; use search results that quote it.
   - Open the files with Read/Grep to get the exact wording in context.
   - List every file that needs changing.

Also flag any single-value statement you **know** is wrong, especially Tier 1 facts:
- doses;
- emergency thresholds;
- anything about children or pregnancy;
- high-risk drugs (insulin, anticoagulants, methotrexate, lithium, opioids, clozapine, adrenaline).

### Facts to treat as correct
- The site's recent corrections, listed in `/tmp/claude-0/-home-user-GP-SCA-clinical-reasoning-tool/db1fda5d-4448-5a27-9996-ec762174568a/scratchpad/lab/LAB_SITE_FIXES.md` and `OWNER_DECISIONS.md` in the same folder.
- Owner-verified facts:
  - **BSR GCA:** prednisolone 40–60 mg. With visual loss: IV methylprednisolone 0.5–1 g for up to 3 days, or 60 mg oral if IV is not immediately available.
  - **H. pylori with penicillin allergy:** PPI + clarithromycin 500 mg + metronidazole 400 mg BD for 7 days.
  - **Levemir:** National Patient Safety Alert; switch by 30 Nov 2026.
  - **Cervical screening:** every 5 years at 25–64 after an HPV-negative result.

## Output
Write `F/findings/<your batch name>.json`. It is a JSON list of findings, each of this form:

```json
{"subject":"vitamin D","group":"maintenance | iu","verdict":"wrong",
 "tier":1,
 "correct":"800–2,000 IU daily (ROS 2020)",
 "source":"<URL you verified>",
 "fixes":[{"file":"cases/x.html","old":"<exact text copied from the file, unique enough to find>","new":"<replacement>"}],
 "note":"why"}
```

- **verdict** is one of: `"wrong"` (a value is incorrect), `"inconsistent"` (pages disagree; pick the correct one) or `"owner"` (a genuine clinical choice the owner must make; put the question in `note`, with no fixes).
- **old** must be copied EXACTLY from the file. Check it with Grep. HTML entities appear as they are in the file, for example `&lt;`. JS strings appear as in the source.
- Include **every** file that carries the wrong value: protocol, -print twin, one-page, summary, Clinic Guide, case, SCA data (.js AND the matching `assets/sca-data/c/*.json`), meds, Ready Prescriptions, audio, articles.

## Final message
- Groups reviewed, and how many were legitimate, wrong, inconsistent or owner.
- The top findings, one line each.
- The path to your JSON.

Be thorough but efficient. Do not research groups that are clearly legitimate.
