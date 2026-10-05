# One-page summaries — specification (v1.1, October 2026)

Two templates share one design, one set of colours and one set of safety rules:

| Type | Page | Template | Reference example |
|---|---|---|---|
| Protocol (manage a condition) | `tools/management/summaries/<slug>.html` | `governance/protocol-summary-template.html` | `tools/management/summaries/hypertension.html` |
| Algorithm (diagnose / triage a presentation) | `tools/algorithms/one-page/<slug>.html` | `governance/algorithm-summary-template.html` | `tools/algorithms/one-page/chest-pain.html` |

How to make one, step by step, is in `governance/ONE-PAGE-PROCESS.md`. Run `governance/check_one_page.mjs` on every page before publishing.

## Protocol summaries

Every protocol in `tools/management/` can have a one-page summary at `tools/management/summaries/<slug>.html`. A busy GP should be able to read it in under two minutes, know they have not missed anything dangerous, and close the consultation safely. The full protocol keeps the detail, evidence and recommendation numbers.

## Safety rules for both types (non-negotiable)

1. **Source lock.** Every fact, number, drug and time frame must already appear in the full protocol or algorithm page. A summary never adds clinical content. If the protocol is silent, the summary is silent. If the protocol is wrong, fix the protocol first, then the summary.
2. **Keep NICE's strength of recommendation.** "Offer", "consider" and "discuss" mean different things; never upgrade "consider" to an instruction.
3. **Every urgent action has a time frame.** Use only these labels: `999` · `Same-day` · `Urgent` · `≤7 days` (or another stated interval) · `Routine`. Never write "seek help" or "refer urgently" without saying where and when.
4. **Doses only where the protocol gives them.** Always add "doses per BNF and local formulary".
5. **Scope line is mandatory.** State who it is for and who it is not for, and where to go instead (for example pregnancy, children).
6. **Same review date as the protocol.** Add the summary to the 6-monthly review (governance/UPDATE-PROCESS.md, step 7).
7. **One A4 page in print**, with at least 4% spare height (sheet height ≤ about 1025 px at 96 dpi in print emulation). Check with print preview or Playwright `page.pdf()` = 1 page.
8. **Must link back** to the full protocol, at the top (button) and in the footer.

## Protocol: fixed block order and colours

The order and colours are identical on every summary, so GPs learn where to look. Omit a block only if the protocol truly has nothing for it, and keep the remaining numbers in order.

| # | Block | Colour | What goes in it | Limit |
|---|---|---|---|---|
| — | **Header** | — | Title, scope line (for / not for), review date, 3–5 source chips | 3 lines |
| — | **Core rule** | dark banner | The single sentence that prevents most harm | 1 sentence |
| 0 | **Act now** | red, full width | Red flags, each with the exact action and time-frame label | ≤6 bullets |
| 1 | **Confirm** | amber | How the diagnosis is made; thresholds as a small table | ≤60 words + table |
| 2 | **Check** | blue | Minimum work-up as tick boxes; one "don't miss" line | ≤40 words |
| 3 | **Decide** | teal | Who gets treatment, in the protocol's offer/consider wording; lifestyle in one line | ≤5 bullets |
| 4 | **Target** | teal | Targets or treatment goals, as a table | ≤5 rows |
| 5 | **Treat** | teal | Steps (ladder boxes) or first line → second line; "before every step" check | ≤4 steps + 3 bullets |
| 6 | **Monitor** | purple | Test → when → action threshold; review interval | ≤4 bullets |
| 7 | **Refer** | amber | Non-urgent referral criteria (urgent ones are in block 0) | ≤4 bullets |
| 8 | **Never** | slate, full width | The 3–5 errors that cause most harm | ≤5 items |
| 9 | **Safety-net** | green, full width | Exact words to say: the 999 symptoms, then medicine-specific advice | ≤4 scripts |
| ✓ | **Safe consultation check** | green, full width | Five tick boxes; all five done = case safely managed | 5 items |
| — | **Footer** | — | "Summary of the full protocol" link, sources, decision-support disclaimer | 2 lines |

Layout: block 0 full width; blocks 1–4 in the left column and 5–7 in the right; blocks 8, 9 and ✓ full width. On screens below 820 px everything stacks into one column.


## Algorithm: fixed block order and colours

An algorithm summary answers "is this dangerous, and where does this patient go?", not "how do I manage the condition?". Same colours, same rules, same one A4 page.

| # | Block | Colour | What goes in it | Limit |
|---|---|---|---|---|
| — | **Header** + **Core rule** | — / dark | Scope (who, setting, exclusions); the one rule that prevents most missed diagnoses | 3 lines + 1 sentence |
| 0 | **Stop — call 999 now** | red, full width | Emergency triggers, then "while waiting" actions and what not to delay transfer for | ≤4 bullets |
| 1 | **Triage** | amber | The pathway's first decision point as a small table (for example time since pain, severity, age band) | ≤5 rows |
| 2 | **Screen** | red | Serious causes: trigger → destination with a time-frame label | ≤6 bullets |
| 3 | **Assess** | blue | Observations, examination and tests as tick boxes; what not to do in primary care | ≤50 words |
| 4 | **Classify** | teal | Likely diagnoses, each with its key discriminating feature and next step; always end with "Uncertain" | ≤6 bullets |
| 5 | **Treat today** | teal | Only what primary care does in this consultation | ≤4 bullets |
| 6 | **Refer routinely** | amber | Non-urgent routes (urgent ones are in blocks 0–2) | ≤4 bullets |
| 7 | **Never reassure by** | slate, full width | The false reassurances that cause missed diagnoses | 3–6 items |
| 8 | **Safety-net** | green, full width | Exact 999 and same-day words; the remote/OOH conversion rule | ≤3 lines |
| ✓ | **Safe to leave primary care only if** | green, full width | Five tick boxes, all documented | 5 items |

Layout: block 0 full width; blocks 1–3 left, 4–6 right; blocks 7, 8 and ✓ full width.

Show it in the algorithm page's **Snapshot** tab (tabs: **Steps | Snapshot**). The tab replaces the old 2-page Summary tab, and on pages that had a Diagram tab it replaces Diagram. See "Snapshot tabs" below.

## Writing style (both types)

- Short bullets of no more than 20 words. Lead with the trigger in bold, then → and the action.
- Numbers always carry units and the comparison sign (≥, <).
- Plain UK English. Spell out an abbreviation once, unless every GP knows it (BP, ECG, eGFR, U&E).
- No evidence discussion, no trial names and no recommendation numbers; those stay in the full protocol.

## The safe consultation check (✓, protocol summaries)

Adapt the five boxes to the condition, but always cover:

1. Block 0 red flags excluded.
2. Diagnosis made the way block 1 requires.
3. Work-up done, plus any population-specific check (for example pregnancy potential, renal function).
4. Plan, target and follow-up booked, with dates.
5. Safety-net given and documented.

## Snapshot tabs (how a summary is shown)

Every page that has a one-page summary shows two tabs: **Steps** (the normal page) and **Snapshot** (the one-page summary, embedded; "Download PDF" prints it on one A4 page). Pages without a summary keep their own tabs.

- **Protocols:** add `snapshot:"summaries/<slug>.html",` at the start of the page's `MG.render({ … })` data. `assets/management-engine.js` then draws the Steps | Snapshot tabs (not on print copies).
- **Algorithms that had a Summary tab:** rename the button `Summary` → `Snapshot`, and insert the Snapshot block straight after `<div id="viewSummary">` with a style rule hiding the old `.sum-bar` and `.sum` children.
- **Algorithms that had a Diagram tab:** replace the Diagram button with `<button class="vt-btn" data-view="summary" …>Snapshot</button>`, change `<div id="viewDiagram">` to `<div id="viewDiagramRetired" hidden>`, and add `<div id="viewSummary">` + the Snapshot block before `<div class="alg-flow" id="flow">`.
- The Snapshot block is an iframe of `one-page/<slug>.html`. Each summary page hides its own top bar when framed (`html.in-frame`).

`Generating the briefs with a script is recommended: build the briefs from the live page and check every FIND is unique.

## Checks before publishing (both types)

- [ ] Every statement traced to the full protocol (source lock), with offer/consider strength kept.
- [ ] `node governance/check_one_page.mjs <page>` passes: one A4 page, at least 4% spare height, no horizontal scroll at 390 px wide.
- [ ] Review date matches the protocol's current round.
- [ ] Back links work; `<meta name="robots" content="noindex">`; the canonical link points to the full source page.
- [ ] The Snapshot tab opens the summary with its top bar hidden, Download PDF prints one page, and Steps returns to the full page.
