# Making one-page summaries — repeatable process

Follow these steps for every new one-page summary (protocol or algorithm). They are written so that a new Claude session, or a person, can produce the same quality without this conversation. The rules are in `governance/ONE-PAGE-SUMMARY-SPEC.md`.

The site owner applies changes through Claude Design and direct GitHub uploads. **Do not commit or push to the repository.** Produce files and hand them over.

## Steps

1. **Get the live source.** Fetch `main` and copy it to a scratch folder. The source page is `tools/management/<slug>.html` (protocol) or `tools/algorithms/<slug>.html` (algorithm). If the page is a redirect stub (`http-equiv="refresh"`), follow it to the real page.
2. **Extract the source text.** Strip the HTML and read the whole page: red flags, thresholds, drug steps, targets, monitoring, referral criteria, safety-netting, sources and the review date.
3. **Copy the template.** Protocol: `governance/protocol-summary-template.html` → `tools/management/summaries/<slug>.html`. Algorithm: `governance/algorithm-summary-template.html` → `tools/algorithms/one-page/<slug>.html`.
4. **Fill the blocks in the fixed order.** Take every fact from the source page only (source lock). Keep NICE's offer/consider wording. Give every urgent action a time-frame label. Doses only where the source gives them, with "doses per BNF and local formulary".
5. **Review as an examiner.** Re-read the summary line by line against the source. For each line ask: is it in the source? Is the strength of recommendation the same? Is any condition (age, "unexplained", "consistently", and/or) lost? Would a GP who reads only this page do anything unsafe? Fix anything that fails.
6. **Fix the source, not just the summary.** Every FLAG from step 5 (the full page is outdated or says the same thing two ways) is checked against guidance and corrected on the full page and its print twin in the same upload. Then run `python3 governance/check_consistency.py <full page>`.
7. **Run the checker:** `node governance/check_one_page.mjs <page> --pdf <folder>`. It must PASS: one A4 page, at least 4% spare height, no phone scroll, no placeholders. If it is too long, rebalance the two columns before cutting content; cut wording, never safety content.
8. **Show it in the Snapshot tab** of the source page with a find-and-replace brief (see "Snapshot tabs" in the spec): protocols get `snapshot:"summaries/<slug>.html"` in their `MG.render` data; algorithms get the Snapshot tab in place of their Summary or Diagram tab.
9. **Package for the owner.** Make a zip containing a `MANIFEST.md` (new files to upload directly, briefs in order, the Claude Design prompt), the new page under `github-direct/` with its repo path, the link brief(s) and the printed PDF for preview.
10. **Keep it current.** Summaries carry the same review date as their source page and are updated in the 6-monthly review (`governance/UPDATE-PROCESS.md`). When a source page changes, its summary must change in the same upload.

## Done (October 2026)

All built with this process, examiner-reviewed and checked with `check_one_page.mjs`:

- **Protocols** (`tools/management/summaries/`): hypertension, heart-failure, stable-angina, atrial-fibrillation, type-2-diabetes, ckd, hrt-prescribing (menopause), contraception, asthma, copd, depression, migraine, male-luts, female-urinary-incontinence, iron-deficiency-anaemia.
- **Algorithms** (`tools/algorithms/one-page/`): chest-pain, breathlessness, abdominal-pain, headache, dizziness, tremors, hearing-loss, tinnitus, red-eye, amenorrhoea, irregular-periods, back-pain, fatigue, limping-children, hyperkalaemia, abnormal-lfts, anaemia, chronic-cough, dyspepsia, fever-adults, haematemesis, hypercalcaemia.

Still on the old 2-page Summary tab (no one-page summary yet): hypernatraemia, hypocalcaemia, hypokalaemia, hyponatraemia, leg-ulcers, nausea-vomiting-adults, pelvic-pain-women.

To add a new topic, follow the steps above with the right template, then add it to this list.
