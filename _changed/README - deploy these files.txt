GP / SCA CLINICAL REASONING TOOL — FULL DEPLOYABLE SITE (July 2026)
===================================================================
This is a COMPLETE copy of the site. Upload it to your host
(Cloudflare Pages) preserving the folder structure. Uploading the
whole set is the safe option: the site.js version bump (?v=57) only
works if the pages and the shared assets deploy together.

WHAT CHANGED THIS SESSION
-------------------------
NEW
  assets/cite-links.js        Click-through citations: turns plain-text
                              NICE codes (NG/CG/TA/QS + number) into links
                              to nice.org.uk. Runs on every content page.

SHARED ASSETS
  assets/site.js              loads cite-links.js (+ earlier fixes)
  assets/alg-nav.js           loads cite-links.js on algorithm pages
  assets/alg-diagram.js       "Reviewed: July 2026" stamp on algorithms
  assets/management-engine.js "Reviewed" stamp in protocol footers
  assets/review-register.json governance dates refreshed; NG245 + NG128 added
  tools/governance.html       AUTO guideline-change detection (reads the
                              Worker's MHRA/NICE/UKHSA feed, flags changes)
  tools/sca-weakspots.html    Hot Seat "Log attempt" now feeds readiness
  service-worker.js           CACHE_VERSION v6 -> v7 (forces refetch)

CLINICAL FIXES (cases/)
  asthma            re-based to NG245 (AIR -> MART; no SABA-only)
  tia-stroke        re-based to NG128 (all suspected TIA -> 24h review)
  anxiety           31 miscited NG222 -> CG113 (correct GAD guideline)
  abnormal-lfts     MASH drug claims corrected (semaglutide/resmetirom)
  urinary-incontinence  tolterodine "400mg" -> 4mg XL (100x overdose TYPO)
  type-2-diabetes   atorvastatin 10mg -> 20mg; BP <130/80 -> <140/90
  eczema            dupilumab TA813 -> TA534
  autism            melatonin "TA741" -> licence/BNFc wording

VERSION BUMP
  site.js?v=55/56 -> ?v=57 on all 168 pages that load it
  (root: index.html, cases.html; all of cases/, tools/, pages/).

BACKEND (already deployed by you via `wrangler deploy`)
  backend/worker.js, backend/wrangler.toml — included for reference.
  If you re-deploy the Worker from the CLI, the KV IDs are already in
  wrangler.toml (USERS/TOKENS). ALLOWED_ORIGIN = https://gpreasoning.uk.

MOST IMPORTANT CATCHES OF THE WHOLE AUDIT
-----------------------------------------
1. urinary-incontinence: tolterodine 400mg (100x overdose) -> 4mg XL.
2. type-2-diabetes: statin dose + blanket BP target corrected.
3. asthma fully re-based to NG245; tia-stroke fully re-based to NG128.
