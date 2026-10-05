# 6-monthly guidance update check

This file is the playbook for the scheduled 6-monthly review of gpreasoning.uk. The scheduled Claude session follows it every **April and October**. A person can follow it too.

The site owner applies changes through **Claude Design** using find-and-replace briefs, and uploads whole files to GitHub directly. **Do not commit or push to the repository.** Produce files and hand them over.

## Files in this folder

| File | Purpose |
|---|---|
| `guidance_register.py` | Scans every clinical page and data file. Rebuilds `guidance-register.json`. Statuses from earlier checks are kept. |
| `guidance-register.json` | The work list: every NICE product, MHRA Drug Safety Update, BNF page and external guideline the site cites, with the pages citing it, `status`, `replacement` and `last_checked`. `last_full_check` and `next_due` are at the top. |
| `check_brief.py` | Validates a find-and-replace brief against the site: `python3 governance/check_brief.py <brief.md>`. Add `--apply` only on a scratch copy. |
| `UPDATE-PROCESS.md` | This playbook. |

## Steps

1. **Get the live site.** Clone or fetch `main` and copy it to a scratch folder. All checks and test-applies happen on the copy.

2. **Rebuild the register.** Run `python3 governance/guidance_register.py --summary`. Note new entries, which show `status: unchecked`.

3. **Find what changed since `last_full_check`.** Web search only works for NICE, BNF and gov.uk; direct fetching is usually blocked.
   - **NICE:** search NICE's "new and updated guidance" for each month in the period, and NICE news. For every NICE id in the register, check whether it was updated, replaced, withdrawn or renumbered (for example, to HTG numbers).
   - **MHRA:** search Drug Safety Updates for each month in the period. Match each one to drugs named on the site, in the register's `mhra-dsu` entries and in `assets/prescriptions-data*.js`.
   - **BNF and medicines:** check doses, licences, discontinuations and supply changes for drugs in the Ready Prescriptions, especially those affected by an MHRA alert or a NICE change.
   - **Other guidance** (BASHH, BTS/SIGN, RCOG, UKHSA Green Book, BSG, BAD, NOGG, DVLA, NHS England pathways): search for new versions of each guideline the register cites.
   - **Links:** for entries still `unchecked`, confirm the URL exists by search. If it has moved, record the new URL.
   - Use parallel agents, at most about 8 at once. Split by register type or by alphabetical ranges.

4. **Decide what each change means for the site.** For every changed item, open each page listed under `pages`. Decide whether the page:
   - **cites the guidance as current:** update the id, title, year and link;
   - **makes a clinical statement the change affects:** threshold, drug, dose, referral route or timing. Correct it. Only change what the new guidance clearly says, and record anything doubtful as a FLAG for the owner;
   - **mentions it only as history** ("replaced CG134"): leave it.

   Keep these owner decisions unless the guidance itself changes them:
   - H. pylori with penicillin allergy: clarithromycin 500 mg BD (BNF).
   - Oral B12 doses by BNF indication, with NICE NG239 thresholds.
   - NICE NG59 (July 2026): the recommendations on psychological therapy and on combined physical-and-psychological programmes for low back pain are withdrawn.
   - Beighton score: 6/9 or more in children.
   - Gender dysphoria referral: via the Gender National Referral Support Service (GNRSS) for adults, and via paediatrics/CAMHS for under-18s.
   - Folic acid: BMI alone does not need 5 mg (NICE NG247).
   - Greater Manchester local pathways where the protocol cites them, for example ivermectin for scabies and threadworm repeat dosing.

5. **Write briefs.** Use one brief per file, in this format:

   ````
   # <Page title> — 6-monthly update (<Month YYYY>)
   File: <repo path>
   Edits: <n>

   Apply each edit in order as an exact find-and-replace. Change nothing else.

   ### E1 — <short label>
   FIND:
   ```html
   <exact text from the live file, unique>
   ```
   REPLACE:
   ```html
   <new text>
   ```
   ````

   - Copy FIND text exactly, including `\uXXXX` escapes and `&amp;` entities. Write briefs with Python, not shell heredocs.
   - Keep FINDs short.
   - Each protocol has a `-print.html` twin, and some algorithms have a `summaries/` twin. Each needs its own brief.
   - Check the related Casebook cases (`cases/*.html`), Ready Prescriptions (`assets/prescriptions-data*.js`) and audio scripts (`assets/audio-scripts-*.js`) too, so they don't contradict the updated page.

6. **Validate.** Run `check_brief.py` on every brief. Then apply all briefs in order to a scratch copy and confirm:
   - `node --check` passes on every edited `.js` file and on every inline `<script>` of edited pages;
   - HTML tag balance is unchanged.

7. **Update the review date.** Write a brief for `assets/provenance.js` that sets the three `ROUNDS` dates to the new month (for example `'April 2027'`). Write another for the `CACHE_VERSION` bump in `service-worker.js`. Also brief the 22 `tools/algorithms/summaries/*.html` "Reviewed: … · next review due …" lines.

8. **Update the register.** Set `status`, `replacement`, `last_checked` (YYYY-MM) and `note` on every entry checked. Set `last_full_check` to this month and `next_due` to six months later. Include the updated `guidance-register.json` as a whole-file upload.

9. **Package for the owner.** Make a zip of at most 500 files, split it if bigger, and send it to the owner. It contains:
   - `MANIFEST.md`: the repository (`bassamomda-tech/GP-SCA-clinical-reasoning-tool`), a table of brief, GitHub file to update and edit count in apply order, and the Claude Design prompt below.
   - The briefs.
   - `coverage/`: what changed and why, with sources.
   - `REPORT.md`: a summary of every guidance change found, pages affected, and FLAGs needing an owner decision.
   - `github-direct/`: whole files to upload, such as `governance/guidance-register.json`.

   Claude Design prompt:
   > Repository: bassamomda-tech/GP-SCA-clinical-reasoning-tool. Use this MANIFEST as the work list: for each row in order, open the GitHub file named and apply that brief — replace each FIND text with its REPLACE text, in order. Change nothing else, do not restyle, do not summarise. If a FIND text is not found because it was already applied, skip it. Confirm "done: <file>" for each row.

If nothing changed in the period, still send the report and the register and review-date update. That way the review stays visible on every page.
