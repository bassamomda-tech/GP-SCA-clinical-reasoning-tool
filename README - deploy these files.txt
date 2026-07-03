GP / SCA CLINICAL REASONING TOOL — CHANGED FILES (July 2026 content audit)
==========================================================================
Upload/deploy everything in this folder, preserving the folder structure
(cases/, tools/, assets/, pages/, and service-worker.js at the root).

WHY EACH FOLDER IS HERE
-----------------------
cases/  (108 files)
  - Review-date stamp added to EVERY case ("Reviewed: July 2026").
  - Clinical fixes: asthma (NG245 AIR->MART rewrite), tia-stroke (NG128,
    all TIA -> 24h, ABCD2 de-scored), anxiety (NG222 -> CG113),
    abnormal-lfts (MASH drug claims corrected),
    urinary-incontinence (tolterodine 400mg -> 4mg XL / 2mg BD TYPO FIX),
    type-2-diabetes (atorvastatin 10mg -> 20mg; BP <130/80 -> <140/90),
    eczema (TA813 -> TA534), autism (TA741 -> licence/BNFc),
    plus ~30 earlier citation fixes (acne NG198, breast-cancer NG12, etc.)
    and IAPT -> NHS Talking Therapies renaming.

tools/algorithms/  (274 files)
  - Citations verified 270/270; targeted content fixes; the review-date
    stamp renders via assets/alg-diagram.js.
  - tools/algorithms.html directory page updated.

tools/management/  (176 files)
  - Protocol fixes (hypertension BP targets, etc.); the review stamp
    renders for all protocols via assets/management-engine.js.

assets/
  - alg-diagram.js         : appends review stamp to all algorithm pages
  - management-engine.js   : emits review stamp in all protocol footers
  - calculators-data.js    : CHA2DS2-VASc / NHS Talking Therapies wording
  - articles-data-27.js / -28.js : IAPT -> NHS Talking Therapies
  - prescriptions-data-batch6.js : pregnancy ranitidine -> famotidine
  - ask-core.js            : Ask grounding / safety framing
  - sca-cases 7,15,19,25,41,47,55,64.js : citation + IAPT fixes

pages/ask.html, tools/ask-quality.html
  - Ask retrieval / quality-console updates.

service-worker.js
  - CACHE_VERSION bumped v6 -> v7 so clients refetch the shared assets
    above. IMPORTANT: without this bump the old cached alg-diagram.js /
    management-engine.js are served and stamps/fixes won't appear.

MOST CLINICALLY IMPORTANT CATCHES
---------------------------------
1. urinary-incontinence: tolterodine "400mg OD" (100x overdose typo) -> 4mg XL.
2. type-2-diabetes: statin dose + blanket BP target corrected.
3. asthma fully rewritten to current NG245 (AIR/MART, no SABA-only).
4. tia-stroke fully rewritten to NG128 (all TIA -> 24h specialist review).
