# Facts register, pass 2: independent check of Tier 1 statements

Pass 1 looked only at places where pages disagreed. Pass 2 checks every high-risk statement for correctness against current UK guidance, even where all pages agree. A fact that is wrong everywhere would pass a consistency check, so this pass is needed to catch it.

## Paths and rules
- **F** = `/tmp/claude-0/-home-user-GP-SCA-clinical-reasoning-tool/db1fda5d-4448-5a27-9996-ec762174568a/scratchpad/u172/site/governance/facts/`
- **SITE** (READ ONLY) = `/tmp/claude-0/-home-user-GP-SCA-clinical-reasoning-tool/db1fda5d-4448-5a27-9996-ec762174568a/scratchpad/u172/site/`
- Do NOT edit site files. No git.

## Input
Your files are `F/tier1/<name>.md`. Each line is one distinct statement, with the files that carry it.

**Tier 1** covers:
- doses of high-risk drugs;
- emergency thresholds and vital-sign cut-offs;
- anything about children or pregnancy.

## What to do
For EVERY statement:
1. **Is it correct and current for UK primary care?** Check it against NICE/CKS, the SPC (emc), SPS, MHRA, BTS/SIGN, RCUK, JBDS, UKKA, SfE, BSH, NHS England, RCOG, RCPCH, BASHH, the Green Book and DVLA.
   - Verify with WebSearch whenever you are not certain.
   - nice.org.uk is often blocked; use search results that quote it.
2. **Read in context.** A dose may be right for one indication and wrong for another. Open the file (Read/Grep) to see the sentence in its context before you judge it.
3. **Watch especially for:**
   - adult doses given for children;
   - a missing weight or age band;
   - mg vs micrograms;
   - daily vs weekly (methotrexate);
   - IV vs IM;
   - the wrong frequency;
   - outdated thresholds;
   - a missing "999";
   - a drug that is unsafe in pregnancy or breastfeeding but stated as safe, or the reverse.
4. **Ignore:**
   - extraction noise;
   - vignette numbers inside a case story, such as a patient's own reading, unless the teaching point drawn from it is wrong.
5. **Treat as correct:**
   - owner decisions in `F/OWNER_DECISIONS_2.md`, `scratchpad/lab/OWNER_DECISIONS.md` and `scratchpad/lab/LAB_SITE_FIXES.md`;
   - the owner-verified facts:
     - **BSR GCA:** prednisolone 40–60 mg. With visual loss: IV methylprednisolone 0.5–1 g for up to 3 days, or 60 mg oral if IV is not immediately available.
     - **H. pylori with penicillin allergy:** PPI + clarithromycin 500 mg + metronidazole 400 mg BD for 7 days.
     - **Levemir:** switch by 30 Nov 2026.
     - **Cervical screening:** every 5 years at 25–64 after an HPV-negative result.

## Output
Write `F/findings2/<batch>.json` in the same format as pass 1 (see `F/REVIEW_SPEC.md`). For each finding, give:
- **verdict:** `wrong`, `inconsistent` or `owner`;
- **tier**;
- **correct:** the correct value;
- **source:** the URL you verified it against;
- **fixes:** every file and exact `old` → `new`. Check with Grep that each `old` string matches the file exactly.
- **note.**

Include every file that carries the same error. Grep the whole site, not only the files listed in the dossier.

## Final message
- The number of statements you checked.
- The counts: wrong, inconsistent, owner.
- The top findings, one line each.
- The path to your JSON.

Be thorough. Patient safety depends on this pass.
