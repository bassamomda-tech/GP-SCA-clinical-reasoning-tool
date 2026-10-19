# Pass 2: leftover items (fix these too)

1. **Statin transaminases.** The TIA, angina, PAD and MI cases (and any other page) say "ALT >3× ULN → stop".
   - Align to the hypercholesterolaemia protocol: transaminases at baseline, within 3 months and at 12 months.
   - Raised but <3× ULN is not a reason to withhold or stop.
   - ≥3× ULN → recheck and review; stop if persistently ≥3× ULN (NICE NG238, SPS).
2. **`cases/infertility.html`:** "fasting glucose >6.1". Check the context.
   - Diabetes is ≥7.0.
   - NICE non-diabetic hyperglycaemia is 5.5–6.9 (PH38).
   - Fix as appropriate.
3. **`cases/ckd.html` (about line 1036):** "ACR 30–300" uses mg/g-style units. Convert to UK mg/mmol categories: A2 = 3–30, A3 = >30 mg/mmol.
4. **NG136 citations:** pages citing "NG136 (2019, updated 2023)" or "updated November 2023" → "updated 2026". NICE NG136 was last updated 26 February 2026. Change only the date wording.
5. **`assets/triage/tiredness.js`:** no rule fires for B12 180–350 ng/L. Add an "indeterminate (NG239): check MMA or active B12 if available, consider treatment if symptomatic" message, following the existing rule format. Its severe_b12 template says "— BNF"; change it to "— SPC".
6. **Older consistency findings on case pages.** Fix each genuine one. Leave word-matching false positives and list them in the report.
   - `cases/dyspepsia.html`: 3 HIGH urgency findings (black stools safety-net timeframe; dysphagia; haematemesis next to "routine").
   - `cases/headache.html`: papilloedema "urgent". It should be same-day.
   - `cases/fatigue.html`: review date mismatch with its one-page.
   - `cases/alcohol.html`: "consider after detox" strength.
   - `cases/infertility.html`: ectopic urgency.
   - `cases/ulcerative-colitis.html`: prednisolone wording strength; episcleritis urgency.
   - Run `python3 governance/check_consistency.py <page>` before and after each fix.
7. **`cases/pcos.html`:** scrolls sideways at desktop width (scrollWidth 1359 at a 1280 viewport). Find the overflowing element and fix it with CSS or markup. Do not change any content.
8. **`assets/meds/hypertension.js`:** "stop spironolactone if K⁺ >5.5". Align with the hypertension case: K⁺ 5.5–5.9 → reduce or review; ≥6.0 → stop.
