# Facts register: fixing pass

## Paths
- **SITE** = `/tmp/claude-0/-home-user-GP-SCA-clinical-reasoning-tool/db1fda5d-4448-5a27-9996-ec762174568a/scratchpad/u172/site/` (working copy; edit in place; no git)
- **F** = `SITE/governance/facts/`
- **Plan:** `F/fixplan.json`. It holds `findings` (each with an `id`, `subject`, `verdict`, `correct`, `source`, `note` and `fixes[{file, old, new}]`) and `bins` (4 file lists).

## Scope
You apply the fixes for the files in YOUR bin only. Three other agents are editing the other bins at the same time, so never touch a file outside your bin.

## Apply each fix
1. **Read the finding first.** Decide whether the `new` text is right. You are a second reviewer.
   - If you doubt the finding, check it with WebSearch against current UK guidance.
   - If it is not right, do NOT apply it. Report it as "rejected" with the reason.
   - Owner-verified facts (never change these):
     - **BSR GCA:** prednisolone 40–60 mg. With visual loss: IV methylprednisolone 0.5–1 g for up to 3 days, or 60 mg oral if IV is not immediately available.
     - **H. pylori with penicillin allergy:** PPI + clarithromycin 500 mg + metronidazole 400 mg BD for 7 days.
     - **Levemir:** switch by 30 Nov 2026.
     - **Cervical screening:** every 5 years at 25–64 after an HPV-negative result.
2. **Find the `old` text in the file.**
   - If it is not found exactly, locate the equivalent text (the file may differ slightly) and adapt the fix.
   - If it occurs more than once, fix each occurrence that carries the same error.
   - Also fix any OTHER place in the same file that states the same wrong fact. Grep the file for it.
3. **Write rules for `new` text.**
   - Never put "BNF" into site text; say "SPC" or "national guidance" instead.
   - No local names. UK English. No emoji.
   - Never write "2-week wait", "2WW" or "appointment within 2 weeks" for a cancer referral.
   - Keep the page's existing style and markup. In JS and JSON, keep the syntax valid and escape quotes properly.
4. **Generated files.**
   - Skip every `assets/search/idx-*.json` and `assets/review-index.json`; they are rebuilt.
   - `tools/clinic-guides/<slug>.html` is generated. Edit the source `/tmp/claude-0/-home-user-GP-SCA-clinical-reasoning-tool/db1fda5d-4448-5a27-9996-ec762174568a/scratchpad/cg/<slug>.html` and copy it to `.../scratchpad/cg_all/<slug>.html`.
     - The guide must still render to exactly 2 pages: run `node <scratchpad>/lab/render.js <abs path>`, where both sh values must be 1123, and `clipcheck.js` must report 0.
5. **SCA pairs.** If you change an SCA case in `assets/sca-*.js`, the same text is often in `assets/sca-data/c/<id>.json` and `sca/case-<id>.html`.
   - If those files are in your bin, fix them too.
   - If they are not, list them under "needs follow-up" in your report.

## Checks before reporting
- `node --check` on every changed `.js` file.
- `JSON.parse` on every changed `.json` file.
- Every inline `<script>` in each changed `.html` file still parses.
- From the SITE root, `python3 governance/check_consistency.py <changed html files>` reports HIGH 0 and MEDIUM 0.
- `node governance/check_one_page.mjs <changed one-page/ or summaries/ files>` passes.
  - Set `NODE_PATH=/tmp/claude-0/-home-user-GP-SCA-clinical-reasoning-tool/db1fda5d-4448-5a27-9996-ec762174568a/scratchpad/node_modules`.
  - Chromium is at `/opt/pw-browsers/chromium`.
- Before editing, back up each file to `.../scratchpad/factfix_bak/<path with / replaced by __>`.

## Report
- For each finding id in your bin: **applied** (list the files), **rejected** (give the reason) or **partly applied**.
- Any extra places you fixed in the same files.
- Needs follow-up: same-error files outside your bin.
- The results of the checks above.
