# GP / SCA Clinical Reasoning Tool — project standards

## NICE NG12 two-week-wait (2WW) cancer criteria — MANDATORY in every algorithm
Author every clinical-reasoning algorithm as an RCGP/SCA examiner would. Where the
presenting complaint maps to a NICE NG12 *Suspected cancer: recognition and referral*
(May 2025) criterion, the relevant **2-week-wait / urgent suspected cancer (USC)**
pathway **must be stated explicitly** — including the qualifying age, the modifying
features, and the action (USC referral, direct-access test, or 48-hour referral).

- Put the cancer red flag in the **Safety / Red Flags** node, and restate the precise
  threshold in the **Refer** node, tagged with a purple `2WW` pill and "NICE NG12".
- Use NG12 wording for thresholds (e.g. "rectal bleeding 50+", "PSA above age-specific
  range", "post-menopausal bleeding 55+", "FIT ≥10 µg Hb/g", "CA-125 ≥35 IU/mL").
- Include the named **direct-access investigation** where NG12 specifies one
  (FIT, CA-125, CXR, USS, OGD, PSA+DRE, FBC, urine protein electrophoresis/BJP).
- For paediatric pathways use the NG12 *Children & young people* table (e.g. unexplained
  petechiae/hepatosplenomegaly/generalised lymphadenopathy with fever → very urgent FBC +
  immediate paediatric referral for leukaemia).
- If a presentation genuinely has no NG12 cancer link, do not invent one.

Source of truth: `uploads/Cancer referral NICE.pdf` (NICE NG12, May 2025).

## Algorithm file conventions
- New algorithms live in `tools/algorithms/<slug>.html`, must end with
  `<script src="../../assets/alg-nav.js"></script>` then `topic-links.js`.
- Register each in `tools/algorithms/_meta.json` and add a card under the correct
  specialty group in `tools/algorithms.html`; bump that group's `agh-count` and the
  three header totals (search placeholder, `algShown` / pathways, footer count).
- Lab-value pathways (abnormal blood tests) go in the `lab-results.html` hub, grouped by
  test, not as loose cards on the main directory.

## Clinic-tool conventions
- Clinic tools live in `tools/<name>.html`. Scaffold = fonts + `../assets/site.css`,
  body `<div class="app"><aside class="sidebar" data-active-id="__tools-…"><main class="main"><div class="tool-page">`,
  then `<script src="../assets/site.js?v=28"></script>` (renders the top nav + footer) … and
  `<script src="../assets/nav-back.js?v=1"></script>` last.
- **Always version the `site.js` include (`?v=N`).** It is loaded by every page and
  renders the nav/Tools menu from `RGP_TOOLS`; without a query string browsers serve a
  stale cached copy and new menu entries don't appear. When you change `site.js` (e.g.
  add a tool), bump `?v=N` on every page that includes it (`cases/`, `tools/`, `pages/`,
  root) — currently `?v=51`. (Hubs renamed: Clinical Core→**Clinical Compass**,
  Full Medicine→**The Compendium**; nav labels + page titles/heroes only, file paths
  `tools/clinical-core.html` / `pages/full-medicine.html` unchanged.)
- Register each Clinic tool in the `RGP_TOOLS` array in `assets/site.js` so it appears in
  the **Tools** mega-menu (id `__tools-<name>`, label, meta, path, emoji icon). The nav
  "Tools" count updates from that array automatically.
- Design system: warm cream `--bg`, deep teal `--teal` primary, rust `--rust` accent,
  DM Sans + Source Serif 4. Use the CSS vars in `site.css`; don't invent colours.
- AI features call `window.claude.complete({messages:[…]})` (only works on the live site
  in Chrome). Always handle the `unavailable` case gracefully and offer a worked example.

## Session log
- **SCA — Live Group Mock built (the one competitor feature we lacked) + 312-case marketing
  (this session):** competitive scan (SCAreVision/SCAPrep/MedTutor/Clinitalk) showed we already
  had readiness dashboard (sca-weakspots), worked examples, 12-case full-diet circuit, voice —
  the ONLY real gap was SCAreVision's networked group revision. Built it: (1) `backend/worker.js`
  new `/api/group` endpoint (signed-in, ANY tier): POST {op:'create',caseId}→5-letter code
  (alphabet excludes 0/O/1/I/L), state in USERS KV `grp:<CODE>` TTL 6h refreshed per write;
  GET ?code=→{state,now}; POST {op:'patch',code,patch}→shallow merge, roles merged per-role
  (null=leave), v counter; responses carry `now` for client clock-offset sync. (2) NEW
  `tools/sca-group.html`: host picks case (search all 312; free tier can host only the 5
  RGP_FREE_SAMPLES.scaCases — 🔒 in picker — but can JOIN any session = invite/growth loop);
  lobby with claim-a-role cards (candidate/patient/examiner, first-name, re-claim on race loss);
  synced 3-min prep (candidate auto-advances at 0) + 12-min clock computed from server ts +
  offset; per-role views (candidate=brief only; patient=opening/facts/ICE/cues card;
  examiner=checkpoints ticked live + CF/F/P/CP grades ×3 domains + one-line fix); done view
  shows grades + missed checkpoints + learning; candidate saves to `rgp-sca-attempts`
  (src:'group') so it feeds My Readiness. 2.5s polling, sessionStorage resume, graceful
  no-worker/preview message → points to printable Role-Play Packs. (3) `assets/site.js`:
  scaToolsList entry '👥 Live Group Mock'; bronze OPEN list += 'sca-group.html'. (4)
  `index.html`: SCA hero stat 300+→**312 AI patient cases · unlimited · no credits**; phase-3
  toolkit gained the Group Mock x-card; meta/og/twitter descriptions now say "312 AI patient
  roleplays — unlimited, no per-case credits". (5) SITEWIDE `site.js?v=64/65→66` (batches:
  root+pages 14, tools+lab-results 48, cases 108; "SETUP - Connect the AI" page has no site.js
  ref; deploy folders skipped). SW CACHE_VERSION **v27→v28**. Deploy = WHOLE SITE + re-paste
  worker.js in Cloudflare (group endpoint). sca-fix/ holds the core changed set. Residual
  (unchanged): 4.9MB document.write case loading; circuit personas/hands-free parity; TTS echo
  risk. KV race on simultaneous role claims is mitigated client-side (silent re-claim).
- **SCA — AI patient made fast + natural at the Worker root; full SCA audit (this session):**
  user asked to make the SCA side best-in-class, verify the AI patient runs smoothly live, and
  find deficits. Root causes of "not smooth" found in `backend/worker.js` aiProxy: EVERY /api/ai
  call carried the `web_search` tool (a simulated patient could stall 5–15s mid-consultation to
  search NICE) and `temperature:0` (patient replies robotic + identical on retry of the same
  case). Fix: aiProxy now reads `nosearch` + `temperature` from the request body — `nosearch:true`
  omits the web-search tool; temperature is clamped 0–1 (default stays 0 for Ask/Scribe accuracy).
  `assets/site.js` AI shim (complete() + stream()) forwards `arg.nosearch` / `arg.temperature`.
  `tools/sca-simulator.html` + `tools/sca-circuit-ai.html`: patient turns send
  `{nosearch:true, temperature:0.7}`, examiner-marking calls send `{nosearch:true}` (temp 0 kept
  for marking consistency). Simulator also gained ONE automatic retry when the examiner JSON
  fails to parse (renderFeedback returns false → re-mark once, mirrors Scribe); fixed literal
  `&amp;` artifacts inside both patient/examiner prompts; circuit persist() duplicate-condition
  bug (`r.dg!=='-'&&r.dg!=='-'`) fixed. Bumps: **site.js?v=64→65 on the two SCA AI pages ONLY**
  (precedent: v55→56 round — other pages don't use the new fields; stale copies elsewhere are
  behaviour-identical), SW CACHE_VERSION **v26→v27**. Deploy staged in `sca-fix/` (worker.js
  re-paste in Cloudflare + assets/site.js + the two tool pages + service-worker.js). Audit
  results (verified, no action needed): 80 sca-cases files eval cleanly → 312 cases, zero
  duplicate ids, zero missing fields (title/brief/opening/facts/cues/ice/checkpoints), types
  231 video + 81 telephone; sca-practice/sca-weakspots/sca-simulator load with zero console
  errors. KNOWN residual deficits (deliberate, not yet done): ~4.9 MB of case scripts load via
  document.write on simulator+circuit (SW caches after first visit — consider lazy loading);
  circuit lacks the simulator's personas + hands-free live-voice mode; simulator TTS safety
  timeout can re-open the mic while long TTS is still speaking (echo risk); patient replies
  don't stream (short replies, low win).
- **Ask — irrelevant library chips on off-library questions FIXED at the retrieval root (this
  session):** user screenshot (thrombocytosis/Raynaud's/warfarin question) STILL showed a "FROM
  THE REASONING GP LIBRARY" row of junk (Growing pains, Tailbone, Foot drop, Cold sores, Ready
  Prescriptions). The prior client-side srcHtml gate (`confident===false → no chips`) was
  correct but never fired: the confidence flag itself was a FALSE POSITIVE — any single
  incidental title-hit flipped it true (lexical `tHits.length>0`; semantic `||titleHit(top)`),
  and on the live site the semantic layer ranked odd neighbours that got listed unfiltered.
  Root-cause fix in `assets/ask-retrieval.js`: (1) `searchScored` now tracks **specHit** = a
  matched title term that is genuinely DISCRIMINATING (`tokIDF ≥ SPECIFIC_IDF=3.0`, i.e. term in
  ≲5% of the 975 titles) and non-generic; (2) confidence now keys on specHit — lexical
  `confident = specHits.length>0`, semantic `confident = top.f≥0.45 || specHit(top)`; (3) prefix
  matching gained a **length-ratio guard** (`min/max ≥ 0.5`) so a short common word can't latch
  a long unrelated term ("diver" ✗→ diverticulitis, "man" ✗→ management, while
  hyponatr→hyponatremia / anticoag→anticoagulation survive); (4) new exported `relevantSlugs(q)`
  = slugs with a specHit (the ONLY topics allowed as chips). `pages/ask.js`: chips are now built
  from `hits.filter(h=>relevantSlugs.has(h.slug))` (stored as hitSlugs + passed to srcHtml) so
  semantic near-neighbours with no title overlap can never show as chips; srcHtml also **dedupes**
  chips by normalised title (killed the triple "Raynaud's phenomenon/Raynaud's Phenomenon/
  Raynauds"). Verified with a temp harness over the full 975-topic index: the user's exact query
  now shows Raynaud's phenomenon · Thrombocytosis (relevant!) with ZERO junk; hypertension/
  headache/anaemia core queries stay confident with correct chips; "diver" no longer hits
  diverticulitis. Known residual: a contrived off-library multi-word query can still surface a
  tangential chip that shares an exact real word (e.g. "decompression **sickness**" → "Motion
  sickness") — lexical-only can't tell peripheral from central; semantic would, but the chip
  filter is deliberately lexical to keep OUT bad semantic neighbours. Client/retrieval only — NO
  worker framing/salt change (answer cache stays valid; chips are recomputed client-side every
  ask, so the fix applies even to cached answers). Bumps: **ask-retrieval.js?v=3→4** (ask.html +
  ask-quality.html), **ask.js?v=18→19** (ask.html), SW CACHE_VERSION **v25→v26**. `ask-fix-2/`
  refreshed to the FULL undeployed set (7 files: assets/ask-core.js v8 + assets/ask-retrieval.js
  v4 + pages/ask.js + pages/ask.html + tools/ask-quality.html + service-worker.js v26 + re-paste
  backend/worker.js for the p6 salt from the prior round).
- **Scribe — Heidi/Tandem-style templates + problem-based notes (this session):** user chose
  (questions form): note templates, saveable custom templates, problem-based notes,
  EMIS/SystmOne copy (already existed via `sys`/SECMAP), priority = medical language. All in
  `tools/scribe.html`: (1) **Template segmented control** `#tplSeg` (GP consult default /
  Problem-based / Chronic review / Triage-phone) above the note-style row; `tpl` state
  persisted in save()/restore + per-session (upsert/loadSession); `TPL` directive map injected
  into buildPrompt after STYLE. Problem-based → JSON shape gains `problems:[{title,history,
  examination,assessment,plan}]` (shape string is dynamic on tpl); chronic → control status/
  adherence/objective-measures/recall structure, QOF-able actions in tasks; triage → never
  imply physical exam, remote findings labelled, explicit disposition line, full safety-net.
  (2) **My templates**: `#tplSelect`+Save/✕ buttons (`.scr-mytpl` CSS); saves {tpl, noteStyle,
  custom instructions} as named template in localStorage `rgp-scribe-mytpl-v1` (cap 30,
  local-only — NOT in RGPSync); applying sets all three. (3) **Problem-split rendering**:
  `noteProblems()`/`problemText()`; renderNote shows presenting card + per-problem cards
  ("Problem N — title", sub-labelled via SECMAP[sys] so EMIS/S1/SOAP wording carries through,
  `.scr-psec` CSS) + any non-empty shared flat sections; per-problem Copy button
  (data-prob); plainNote() outputs "── PROBLEM N: TITLE ──" blocks for the full-note copy.
  (4) **MEDICAL LANGUAGE rule** in buildPrompt (codeable SNOMED-style problem/assessment
  wording, lay→clinical term translation, ICE kept as short quotes). Bumped SW CACHE_VERSION
  **v24→v25**. Deploy staged in `scribe-fix/` (tools/scribe.html + service-worker.js).
- **Scribe — fidelity rules + background context (this session):** user: Scribe "not accurate,
  not considering the context". (1) New full-width **Background** field (`#ctxBg`, PMH/meds/
  allergies/results) in the context row; persisted in save()/restore, sessions (upsert/load),
  cleared on new session, input listener; `.scr-ctx .bg{flex-basis:100%}`. (2) `bgBrief()`
  helper next to settingBrief() — injects the background into referral letter, record-refine
  chat and second-opinion prompts; scaPrompt ctx line gains Background; buildPrompt pushes it
  as clinician-entered context. (3) buildPrompt hardened: FIDELITY rule (negation never
  flipped; numbers/doses verbatim or "[unclear]"; patient-reported vs doctor-observed
  attribution; ambiguous material points → "[unclear — verify]"), USE THE CONTEXT rule
  (age→NG12 thresholds, background meds→interactions; context informs interpretation but is
  never documented as consultation content), FINAL SELF-CHECK (silent re-read: nothing
  invented/dropped, negatives intact, numbers verbatim, twoww/missedFlags justified, valid
  JSON). Bumped SW CACHE_VERSION **v23→v24**. Deploy staged in `scribe-fix/` (tools/scribe.html
  + service-worker.js) — no worker/site.js change.
- **Ask — 4 further accuracy rules (this session, follow-on):** added to `assets/ask-core.js`
  FRAMING: (1) MISSING PATIENT FACTOR — BRANCH, DON'T ASSUME (renal/hepatic, pregnancy/
  breastfeeding, age/frailty, anticoagulation, allergy → branch the answer or add a
  "**Check first:**" line; never silently assume the common case); (2) PRESCRIBING SAFETY
  BLOCK ("**Before prescribing:**" — key contraindications/cautions, interactions to check,
  monitoring + interval, sourced); (3) VALIDATED SCORES (name score + threshold + action —
  Wells/CURB-65/FeverPAIN/CHA₂DS₂-VASc+ORBIT/QRISK3/FRAX etc.; never invent a cut-off);
  (4) CONFLICT RULE (live-fetched guidance beats a conflicting library note; state the
  discrepancy, never average). PRIMER_ACK updated. Prompt-only — no ask.js change. Bumps:
  ask-core.js?v=7→8 (ask.html + ask-quality.html), worker ansKey salt **p5→p6**, SW
  CACHE_VERSION **v22→v23**. `ask-fix-2/` refreshed (5 files) + worker re-paste required.
- **Ask — ranked-differential diagnostic answers (this session):** user wants diagnostic
  queries answered as a practical ranked differential ("highly likely / likely"), never one
  over-confident diagnosis. (1) `assets/ask-core.js`: added DIAGNOSTIC QUESTIONS rule to
  FRAMING — dx questions must open with "## Working diagnosis": **Most likely** (ONE named
  front-runner + likelihood word + supporting features), **Also possible** (ranked, each with
  its discriminator), **Must not miss** (each with excluding action, [[2WW]]/NG12 where met),
  **To narrow it down**, **Safety-net**; likelihood words only (highly likely/likely/possible/
  unlikely-but-exclude), no invented percentages, no certainty unless pathognomonic; mgmt-of-
  established-diagnosis questions excluded. Also added FINAL SELF-CHECK (silent pre-answer
  re-read: figures sourced, NG12 age+feature+action, dx shape, Guidelines-used line) and
  exported `classify(q)` → 'dx'|'general' (regex: differential/what could this be/causes of/
  presents-with-without-mgmt-verbs etc.). PRIMER_ACK updated. (2) `pages/ask.js`: groundingMeta
  takes k; classify(effectiveQ)==='dx' → retrieval widened 4→7 notes (extra notes = candidate
  diagnoses) + DIAGNOSTIC MODE order appended after weakNote restating the shape; mdToHtml
  renders "## Working diagnosis" as a rust-accented `.ans-dx` box (🧭 header, mirrors
  ans-evidence; closes on next heading or **Guidelines used**/_Educational_ line — same
  closure added for the evidence box). (3) CSS `.ans-dx` in pages/ask.html (color-mix rust
  tints). Bumps: ask-core.js?v=6→7 + ask.js?v=17→18 (ask.html), ask-core v7 in ask-quality.html,
  worker ansKey salt **p4→p5** (framing changed → kills stale cached answers), SW CACHE_VERSION
  **v21→v22**. `ask-fix-2/` refreshed (6 files) + worker re-paste required.
- **Ask — hide unrelated library chips on weak match (this session):** user screenshot showed
  an off-library question (thrombocytosis/Raynaud's) still rendering a "FROM THE REASONING GP
  LIBRARY" row of unrelated topics (Growing pains, Tailbone pain, Foot drop, Cold sores, Ready
  Prescriptions) — the low-confidence grounding hits. Fixed in `pages/ask.js`: `srcHtml(hits,q,
  confident)` now drops the article/topic chips entirely when `confident===false` (keeps tool
  chips, which are only added on a genuine keyword match; relabels to "Related tools" if only
  those remain, else the row is omitted). The confidence flag is persisted on each assistant
  message (`conf:gMeta.confident`) so the saved-chat re-render path (`renderThread`) suppresses
  them too. Bumped `ask.js?v=16→17` in ask.html; SW CACHE_VERSION **v20→v21**. `ask-fix-2/`
  refreshed (ask.js, ask.html, service-worker.js). Presentational + client-only — no worker
  change needed for this piece.
- **Ask — coloured evidence box for the direct answer (this session):** user wanted the part
  that directly answers the question boxed + coloured so it's findable in a busy clinic. In
  `pages/ask.js` `mdToHtml` now detects the "What the guidance says" heading and wraps that
  section (until the next heading) in `<div class="ans-evidence">` with a 📋 header; also added
  `>` blockquote parsing so the quoted guidance lines render as quotes. CSS in `pages/ask.html`:
  `.ans-evidence` = teal-soft bg + 4px teal left border + rounded, `.ans-evidence-h` uppercase
  teal label, `.ans blockquote` teal left-rule. Verified via a standalone harness screenshot
  (box renders correctly, "In practice"/"Guidelines used" fall outside it). Bumped `ask.js?v=15→16`
  in ask.html; SW CACHE_VERSION **v19→v20**. `ask-fix-2/` refreshed (ask.js, ask.html,
  service-worker.js). Purely presentational — no worker change, but the box only appears when
  the model uses the evidence-first shape (needs the p4 framing round deployed).
- **Ask — Medwise-style evidence-first (extractive) answers (this session):** user wants
  Medwise-level accuracy. Medwise's trick = extractive answers (quote the guideline text,
  don't compose from memory). Added EVIDENCE-FIRST ANSWER SHAPE rule to `assets/ask-core.js`
  FRAMING: any figure-dependent answer (dose/category/threshold/referral criterion/monitoring
  interval) must OPEN with a "**What the guidance says**" block of 1–3 near-verbatim quoted
  lines each ending "[source]", drawn ONLY from the supplied notes or THIS turn's web content,
  then an "**In practice**" advisory block; memory paraphrase may never be dressed as a quote;
  non-figure questions keep normal structure. PRIMER_ACK updated to match. Cache salt
  `p3→p4` in `backend/worker.js`; `ask-core.js?v=5→6` in pages/ask.html + tools/ask-quality.html;
  SW CACHE_VERSION **v18→v19**. `ask-fix-2/` deploy folder refreshed (7 files incl. pages/ask.js
  from the prior round; worker re-paste still required — it may also predate /api/embed, check
  the 🧠/🔤 retrieval chip on live answers). Combined with the prior rounds this gives the
  Medwise property end-to-end: semantic retrieval → confidence gate → forced verification
  search → extractive quoted answer → visible retrieval mode → vetted answer cache.
- **Ask — systemic accuracy net: retrieval-confidence gate + forced verification search (this
  session):** user (rightly) rejected per-topic synonym patching as whack-a-mole and demanded a
  systemic fix; they confirmed the Cloudflare `AI` binding EXISTS, so semantic search should be
  live once the current worker.js is pasted (if answers still show the keyword chip, the deployed
  worker predates `/api/embed`). Changes: (1) `assets/ask-retrieval.js` — `grounding` refactored
  into `groundingMeta(q,k)` returning `{items, mode:'semantic'|'lexical', confident}` (semantic:
  confident = top blended f≥0.45 or title-hit; lexical: confident = any title-hit); `grounding`
  is now a thin wrapper; both exported (`?v=2→3`). (2) `pages/ask.js` — uses groundingMeta; when
  NOT confident, appends a RETRIEVAL WARNING to the grounded context ordering the model to ignore
  mismatched notes, never answer from memory, and MUST verify via live web search (or name the
  source to check + safe general position). Every answer now shows a retrieval chip in the
  ans-note: 🧠 "matched by meaning" / 🔤 "matched by keywords (semantic layer warming up or
  offline)" + 📡 weak-match chip when the gate fired — so the user can SEE which mode answered
  on the live site (`ask.js?v=14→15`). (3) `backend/worker.js` — web_search `max_uses 1→2` so the
  verification search isn't starved. SW CACHE_VERSION **v17→v18**. Deploy set refreshed in
  `ask-fix-2/` (now 6 site files + worker re-paste). Diagnostic for the user: if live answers
  show 🔤 keyword chip persistently, the deployed worker lacks /api/embed → re-paste worker.js.
- **Ask — postpartum UKMEC still wrong: retrieval miss + memory-quoted category (this
  session):** user transcript showed the live site answering "CHC at 8 wks postpartum,
  breastfeeding" with UKMEC 3 (the 2016 figure; UKMEC 2025 = category 2), self-correcting
  only when challenged. TWO root causes found: (1) **retrieval miss** — the library chips
  showed pregnancy articles, NOT the curated postpartum-contraception article; the lexical
  index has no stemming so "contraceptive"≠"contraception" and "post pregnancy"≠"postpartum",
  so the one note with the right category never reached the model. Fixed in
  `assets/ask-retrieval.js`: PHRASES additions (post[- ]pregnancy / N weeks after birth-
  delivery-pregnancy / after (giving) birth / after delivery → 'postpartum'; combined
  (contraceptive|hormonal) pill → 'combined hormonal contraception chc'; contraceptive
  pill|patch|ring|injection|implant → 'contraception $1') + SYN additions (contraceptive/s
  →contraception, cocp/chc→contraception, postnatal/postnatally/puerperium→postpartum).
  Verified in preview: the user's exact question now ranks postpartum-contraception #1
  (55 vs 22). (2) **memory-quoted figure** — model stated a category despite live UKMEC 2025
  search results being present. Added VERIFIED FIGURES ONLY rule to `assets/ask-core.js`
  FRAMING (never state a UKMEC category/dose/threshold from memory; quote only if in notes
  or THIS turn's web content; else search, else say "check the UKMEC 2025 summary table" +
  safe general position). Cache salt `p2→p3` in `backend/worker.js` (framing changed
  materially). Bumps: ask-retrieval.js?v=1→2 + ask-core.js?v=4→5 in pages/ask.html +
  tools/ask-quality.html; SW CACHE_VERSION **v16→v17** (user has deployed the v64/v16 round,
  so this needs a real bump). Deploy set staged in `ask-fix-2/`: assets/ask-retrieval.js,
  assets/ask-core.js, pages/ask.html, tools/ask-quality.html, service-worker.js + RE-PASTE
  backend/worker.js in Cloudflare (kills the wrong cached answers via p3). Told user: also
  run the contraception test-bank set in the Quality Console and approve correct answers to
  pin them permanently.
- **"Install app" dead on phones — RGPInstall early-return fix (this session):** the nav
  "📲 Install app" button calls `window.RGPInstall()`, but the install IIFE in
  `assets/site.js` did `if (standalone() || dismissed()) return;` BEFORE defining
  `RGPInstall` — so on any device where the auto install pill had ever been dismissed
  (key `rgp-install-dismissed-v1`), the button was undefined and silently did nothing
  (PC worked because the pill was never dismissed there). Fix: removed the module-level
  early return (the auto-pill paths already gate on standalone/dismissed themselves) so
  `RGPInstall` is ALWAYS defined; generalised `iosSheet()` → `manualSheet(kind)` with an
  Android variant (⋮ menu → Add to Home screen / Install app); `RGPInstall` now = native
  `beforeinstallprompt` when captured, else the platform manual sheet (no more dead pill
  when `deferred` is null); no-op when already standalone. Runtime-verified by re-running
  the module with the dismissed key set: button opens the sheet. NO version bump — site.js
  stays ?v=64 because v64 was never deployed (this landed in the same undeployed round as
  the chat sync); refreshed `chat-sync-fix/assets/site.js` in the download package.
- **Ask chat history cross-device sync + UKMEC 2025 content round (this session):** user
  reported Ask chats don't follow the account across devices. Added `rgp.ask.sessions.v1`
  to the `RGPSync` CFG in `assets/site.js` with a new `asksess` merge: union sessions by id
  keeping the newer `.updated` copy, drop empty "New chat" shells (only when real chats
  exist), cap 60, keep the LOCAL device's activeId when it survives. `pages/ask.js` listens
  for `rgp-sync-updated` (key match on SESS_KEY) → reloads from localStorage and re-renders
  thread+chat list, preserving the open chat if it survived the merge (`ask.js?v=13→14`).
  Sync only manifests on the live site (Worker + signed in; preview = local-only). ALSO this
  session (continuation of the UKMEC accuracy plan): postpartum-contraception article was
  already in `articles-data-32.js` + index (total 436) + contraception test-bank set in
  `ask-testbank.js` — completed the remaining stale-citation sweep: UKMEC 2023→2025 (CoSRH)
  in tools/algorithms/contraception.html + emergency-contraception.html, cases/migraine.html
  (×2), tools/management/contraception.html (guideline+foot), assets/dx-packs/contraception.js
  (4 strings via run_script). Sitewide **site.js?v=63→v=64** (root+pages 14, tools+lab-results
  48, cases 108; verified zero live v63 — the only hits were the now-deleted `changed-signin/`
  + `signin-only/` download packages, superseded because deploy is again the whole site).
  Bumped `service-worker.js` CACHE_VERSION **v15→v16**. Deploy = whole site + re-paste worker
  if not already done.
- **Sign-in blocked on locked pages — auth-modal z-index fix (this session):** user reported
  that after signing OUT on a gated page (e.g. `pages/ask.html`), clicking **Sign in** on the
  "This page is for members" gate did nothing — they had to close the tab and sign in from the
  home page. Root cause: the members-gate overlay `.rgp-gate` is `z-index:9000`, but the auth
  modal `.rgp-auth-modal` was `z-index:220` (in `assets/site.css`), so `RGP_openAuth()` opened
  the login box BEHIND the gate — invisible/unclickable. On the home page there's no gate so it
  worked, matching the symptom. Fix: raised the auth modal to `z-index:9600` in `assets/site.css`
  AND added a cache-proof `.rgp-auth-modal{z-index:9600 !important}` rule to the `<style>` block
  `injectAuthModal()` appends in `site.js` (that style loads after site.css, so it wins even if a
  stale site.css is cached). Verified in preview: `RGP_openAuth('signin')` opens, computed
  `z-index` = 9600 (> gate 9000), no console errors. Required sitewide **site.js?v=62→v=63**
  (root + cases/ + tools/ + pages/ + tools/algorithms/lab-results.html; algorithm/management
  pathway pages load alg-nav.js/mgmt-nav.js NOT site.js so were untouched; verified zero live
  ?v=62 remain — the two ?v=62 hits left are the separate `_changed/` + `changed-4/` Ask-accuracy
  deploy packages). Bumped `service-worker.js` CACHE_VERSION **v14→v15** so clients refetch the
  HTML pages (which now reference ?v=63). Deploy = re-upload assets/site.js + assets/site.css +
  all HTML pages + service-worker.js (effectively the whole site).
- **Ask — accuracy hardening round 2 (this session):** follow-on to the wrong/inconsistent
  UKMEC answer complaint. Prior (interrupted) turn had already landed: ADVISORY REGISTER
  (recommendations not orders), NAME YOUR SOURCES (edition+year), UNREACHABLE PUBLISHER RULE,
  UKMEC 2025/CoSRH rule, `temperature:0`, fallback model off by default, default model
  `claude-sonnet-5`, cosrh.org/fsrh.org/medicines.org.uk in allowed_domains. THIS session
  added: (1) **GUIDELINES-USED LINE** rule in `assets/ask-core.js` FRAMING — every answer must
  end (before the educational italic) with `**Guidelines used:** …` listing each guideline w/
  edition/year (or "none directly applicable"); PRIMER_ACK updated to match. (2) Unreachable-
  publisher rule strengthened: a recommendation is fair to give whenever endorsed by NICE/BNF/
  current UK guidance regardless of hosting site; never say "cannot access / no permission".
  (3) **Answer-cache invalidation**: `ansKey` hash in `backend/worker.js` now salts with a
  prompt version (`model + '|p2|' + norm`) — bump `p2` whenever FRAMING changes materially, so
  stale answers generated under old rules can never be served (this was a real cause of the
  two-users-different-answers report: one user hit a pre-fix cached answer). Old `ans:` entries
  age out via TTL. Bumped `ask-core.js?v=3`→`?v=4` in pages/ask.html + tools/ask-quality.html
  ONLY (site.js untouched, stays ?v=62). Deploy set (also staged in `_changed/`):
  assets/ask-core.js, pages/ask.html, tools/ask-quality.html + re-paste backend/worker.js in
  Cloudflare. Cost note given to user: Sonnet ≈2–3p/question vs Haiku <1p; Opus not needed —
  grounding + search + cache matter more than model size.
- **Live paywall gaps fixed — pathway/protocol pages + PayPal button timing (this session):**
  user tested with a real free account on gpreasoning.uk and found (a) algorithms, protocols
  and casebook all fully open (not capped to 5), and (b) the pricing Subscribe buttons doing
  nothing. Root causes: (1) pathway pages (`tools/algorithms/*.html`) load `alg-nav.js` and
  protocol pages (`tools/management/*.html`) load `mgmt-nav.js` — NEITHER loads `site.js`, so the
  site.js paywall gate never ran on them (casebook `cases/*.html` DO load site.js and were fine).
  Fixed by appending an identical standalone content gate (IIFE, `window.__rgpContentGate` flag)
  to BOTH `assets/alg-nav.js` and `assets/mgmt-nav.js`: live-host check, reads the auth cache
  site.js keeps in localStorage (`rgp.auth.token.v1` + `rgp.auth.me.v1` → `.user.tier`/`.admin`),
  allows admin/platinum/silver, blocks gold+signed-out, bronze → only 5 curated sample basenames,
  else a teal upgrade overlay (links `../../index.html#subscriptions`). Curated FREE lists:
  pathways = chest-pain/headache/abdominal-pain/back-pain/breathlessness; protocols =
  hypertension/asthma/type-2-diabetes/gout/migraine (all verified to exist). Made site.js's
  `FREE_ALGS` a matching fixed Set (was dynamic first-5 of RGP_ALGORITHMS) so the hub-gate and
  page-gate agree. (2) `rgp-pay.js` gave up if `[data-subs]` wasn't in the DOM at DOMContentLoaded,
  but site.js renders the footer/subscriptions section — added a 12×300ms retry
  (`waitForSubs`). Bumped `service-worker.js` CACHE_VERSION **v13→v14** (alg-nav.js/mgmt-nav.js are
  loaded UN-versioned, so the SW bump forces clients to refetch them). NOTE: the user's "buttons do
  nothing" was ALSO partly a pre-deploy cached site — told them to redeploy + hard-refresh twice.
  Changed files to redeploy: assets/alg-nav.js, assets/mgmt-nav.js, assets/site.js, assets/rgp-pay.js,
  service-worker.js. site.js still ?v=61 sitewide (unchanged version string — content changed but
  it's fetched fresh once SW updates; if a browser still shows stale, the SW v14 bump clears it).
- **Free "Trainee" (bronze) taster — granular paywall gate (this session):** the user
  specified exactly what a FREE signed-in account may open. Rebuilt the paywall gate in
  `assets/site.js` (the `RGP paywall gate` IIFE) from a 2-way clinic/sca split into a granular
  bronze policy. Added `FREE_CASES`/`FREE_ALGS` = first 5 full case basenames (from
  `window.RGP_CASES` groups) + first 5 `RGP_ALGORITHMS` slugs (exposed as
  `window.RGP_FREE_SAMPLES`), and `bronzeReason()` returning null=allowed else a reason code.
  Free account ALLOWS: Consult Scribe, Articles, Resources, Patient Leaflets, Consultation
  Spine, the SCA **Guide** (reference, not a tool), the Casebook + Pathways **directories**
  (browse), and the 5 sample cases + 5 sample pathways. BLOCKS (→ upgrade overlay): Ask,
  Prescribing, CPD, all other clinic tools, ALL other `sca-*` tools, the management protocols,
  and non-sample cases/pathways. Signed-out still fully gated (must make a free account →
  captures email). `allowed()`: platinum=all, silver=clinic, gold=sca, bronze=`bronzeReason()===null`.
  Gate overlay got bronze-specific copy (per-reason message + "your free plan still includes…").
  Home free-tier pricing card rewritten to match (5 sample cases+pathways, Scribe, articles/
  resources/leaflets, Spine+SCA Guide; Ask/Prescribing/CPD/full toolkit marked N/A). Required
  sitewide **site.js?v=60→v=61** (root+cases/+tools/+pages/+lab-results; verified zero v=60 remain).
  STILL PENDING (told user): protocols (single `management.html` page) and SCA cases (inside the
  Hot Seat tool) can't be page-gated to "5 samples" — RESOLVED later this session:
  protocols ARE individual pages (`tools/management/<slug>.html`) so the gate handles them via a
  curated `FREE_PROTOCOLS` set (hypertension/asthma/type-2-diabetes/gout/migraine); management.html
  directory is browsable. SCA cases capped IN-TOOL: `assets/sca-practice.js` locks all but the first
  5 `SCA_CASES` for free accounts (dimmed tile + 🔒 CTA + upsell overlay on click), using the shared
  `window.RGP_PAYWALL.isFreeTier()` helper now exported from the gate. Scribe capped to 5 note
  generations/calendar month for free accounts (`rgp-scribe-quota-v1` in scribe.html generate();
  paid = unlimited). `window.RGP_FREE_SAMPLES` now also carries protocols + scaCases. All within
  site.js v=61 (unshipped this session, so no re-bump).
- **Cross-device progress sync — RGPSync (this session):** the user asked that progress
  (not just Scribe) follow the account across computers. Added `window.RGPSync` to
  `assets/site.js` (right after the `RGPCloud` IIFE): mirrors a family of localStorage
  progress stores to the account via `RGPCloud` → Worker `/api/data` under `store:<key>`.
  Synced keys (with per-type merge): `rgp.progress.v1` (rank/furthest-state), `rgp-cpd-v1`
  (cpd: max seconds/visits, min first, max last, newer reflection), and the SCA family
  `rgp-sca-progress-v1` / `-attempts` / `-circuit-history` / `-domain-attempts` /
  `-attempts-hotseat` / `-habits` (array: union by id||ts, cap 600) + `rgp-sca-exm` /
  `rgp-akt-srs` (objnew: union, keep newer by last/due/ts/updated). Non-destructive: PULL
  merges cloud⊕local and pushes the union back, so a device with local progress keeps it.
  Loop: `start()` on init (pulls if signed in) + `onSignIn()` after login + 8s poll of
  changed keys + push on visibilitychange/pagehide; dispatches `rgp-sync-updated` on change.
  `pages/cpd.html` re-renders on that event; `tools/sca-weakspots.html` reloads once
  (sessionStorage-guarded). `ready()` is false with no Worker → silently local-only in
  preview. Verified in preview: RGPSync present, 10 keys, ready=false, no console errors.
  Required sitewide **site.js?v=59→v=60** (root + cases/ + tools/ + pages/ +
  lab-results.html; verified zero v=59 remain). Also this session: built
  `tools/access-codes.html` (owner console for free-entry/discount codes → Worker
  `/api/admin/codes`), refreshed `_changed/README`, added Setup guide "Part 7 — Members-only
  access & payments" (PayPal→Monzo payouts, paywall, codes). Payment processor = PayPal
  (cheapest: no monthly fee; Cloudflare Worker/KV on free tier). Worker deploy + ADMIN_EMAIL
  + PayPal vars still pending on the user's side.
- **Algorithm pathways — "Why?" drawers unreachable = the real "thin" complaint (this session,
  follow-on 4):** user's "steps so thin compared to original" meant LESS CLINICAL INFO, not width.
  Diagnosis via eval: 9 hidden `.why-drawer` blocks (~1700 chars of reasoning per page) and the
  "Why?" button did nothing. Root cause is in the PAGE template itself, not the restyle: the
  hypertension generation nests `.why-drawer` INSIDE `.why-row`, but the page's own toggle does
  `btn.parentElement.nextElementSibling` (= element AFTER .why-row → null), so drawers could never
  open. Fix appended to SHARED `assets/alg-diagram.js`: "RGP why-drawer relocation" — move every
  `.alg-flow .why-row > .why-drawer` to just after its row (drawer lookup happens at click time,
  so the page's own listener then works). Idempotent; ankle-style pages (drawer already outside)
  untouched. Verified: 3/3 drawers open with full text + aria-expanded=true. Bumped
  `service-worker.js` CACHE_VERSION v5→v6. Upload set unchanged: `_restyle-upload/` (alg-diagram.css
  + alg-diagram.js + service-worker.js).
- **Algorithm pathways — column width raised to 1140px + SW v5 (this session, follow-on 3):**
  user: hypertension steps "so thin compared to original" (original page wrapper is 1180px).
  The desktop-width-fix block in shared `assets/alg-diagram.css` now forces
  `.alg-flow/.alg-foot/.stem-banner/.alg-progress{max-width:1140px !important}` (was 900).
  Bumped `service-worker.js` `CACHE_VERSION v4→v5`. NOTE: user kept seeing stale looks —
  every alg fix needs BOTH the upload of `_restyle-upload/` (alg-diagram.css + alg-diagram.js +
  service-worker.js) AND a hard refresh; preview eval_js timed out this round so width was
  verified from the CSS source only.
- **Algorithm pathways — side-by-side node layout fix (this session, follow-on 2):** user:
  hypertension "words on the right side" / not like ankle. Cause: hypertension-generation
  templates set `.node{display:grid;grid-template-columns:auto 1fr}` with `.node-body{grid-column:2}`
  — so after the node-header wrapping, the header sat squeezed in column 1 and the BODY beside it
  on the right, instead of ankle's stacked block card. Fix in the hard-unification block of SHARED
  `assets/alg-diagram.css`: `.alg-flow .node{display:block !important}` +
  `.alg-flow .node-body{display:block !important;width:auto !important;padding:0 16px 14px !important}`
  (grid-column on children is ignored once the parent is block). Verified numerically on
  hypertension: node display block, header 806px full-width, body 806px BELOW the header,
  20px left padding — canonical ankle stacking. Same 3-file upload set in `_restyle-upload/`.
- **Algorithm pathways — invisible stem-banner title fix (this session, follow-on):** user said
  hypertension "still not done properly". Root cause found via computed styles: the stem-banner
  `<b>` title rendered `rgb(246,242,233)` (cream) on the now-white banner = invisible. Older
  templates (hypertension, chest-pain generation) styled `.stem-banner` as a DARK teal banner
  with light text; the canonical override switched the bg to white but the page's light text
  colour persisted → light-on-light. Fixed in SHARED `assets/alg-diagram.css` (appended): force
  `.stem-banner{color:#1c1917}`, `.stem-banner b{color:#1c1917}`, `.stem-banner small{color:#6b7280}`.
  Repairs every page from that template generation, not just hypertension. Verified: header now
  "🩺 Hypertension", stem title dark/readable, steps + column clean. Shared-file only; SW already
  bumped to v4 this session. (Same upload set: assets/alg-diagram.css + alg-diagram.js +
  service-worker.js in `_restyle-upload/`.)
- **Algorithm pathways — desktop "thin column" fix + header title fix (this session):** after
  the library-wide restyle, the user reported PC pages looked "ugly and thin". Cause: the
  appended canonical `.alg-flow{max-width:720px}` clamped the steps column to 720px, but pages
  like hypertension are wrapped at `max-width:1180px`, so the 720 flow floated as a thin strip
  inside a wide box on desktop (ankle-swelling has no 1180 wrapper so it looked fine). Fix in
  SHARED `assets/alg-diagram.css` (appended, after the mobile block): widen `.alg-flow`/`.alg-foot`
  to **900px** and centre `.stem-banner`/`.alg-progress` to the same 900px so the whole pathway
  is one clean centred column; also `.alg-flow .box[style]{max-width:none}` so inline-width diagram
  boxes don't re-clamp. Separately, the dark-header injector in `assets/alg-diagram.js` was showing
  the stem SENTENCE (e.g. "New presentation of high blood pressure") as the H1; changed it to
  derive the title from `document.title` (split on ·/|/– and strip trailing "Algorithm") →
  "Hypertension", with the stem `<b>` as fallback. Verified on hypertension: flow+stem both ~869px
  at 924vw (aligned column), title logic → "Hypertension". Bumped `service-worker.js`
  `CACHE_VERSION v3→v4`. Minimal upload = **assets/alg-diagram.css + assets/alg-diagram.js +
  service-worker.js** (staged in `_restyle-upload/`).
- **Algorithm pathways — mobile fit (this session):** the two-column `.kv` key/value tables
  overflowed the viewport on phones and clipped the value column (user screenshot: palpitations
  ECG step cut off mid-word). Fixed in the SHARED `assets/alg-diagram.css` by appending a
  `@media (max-width:640px)` block scoped to `.alg-flow`: `.kv` → single column with
  `min-width:0` + `overflow-wrap:anywhere` on cells (the min-width:0 is the key — grid children
  default to min-content and refuse to shrink), `.rfgrid/.lsgrid/.branch` → 1 column, `.rung`
  wrap, `.pill` `white-space:normal`, tighter header/stem/progress margins, plus a
  `body{overflow-x:hidden}` guard. Diagram view already had its own `@media(max-width:760px)`.
  No per-page edits — one shared file; SW already on v3 so clients refetch. Re-copied to
  `_restyle-upload/assets/alg-diagram.css`.
- **Whole algorithm library unified to the ankle-swelling design — via SHARED files, not
  per-page edits (this session):** the user wanted all ~269 `tools/algorithms/*.html` step
  pathways to match the canonical ankle-swelling / chest-pain look. The library had ≥5 template
  generations (canonical top-border `.node-header`; flat absolute-badge left/right; corner-tab
  border-radius badges; border-LEFT cards; compact period-tools; bespoke back-pain
  `.node-header-row`). Rather than rewrite 269 files (run_script reads timed out badly at
  batch>~6), unified through the TWO shared files every pathway already loads:
  (1) **`assets/alg-diagram.css`** — appended the canonical inline style block (overrides each
  page's own `<style>`, which always precedes the linked sheet) PLUS a hard-unification override
  block scoped to `.alg-flow` with `!important` forcing: node border→neutral + coloured
  **border-top** per data-type, `.node-num`→static circular 32px tinted badge (defeats
  absolute/corner-tab/solid-fill variants), `.node-header` flex row, `.node-head` serif h3.
  (2) **`assets/alg-diagram.js`** — appended a flat-node wrapper (wraps direct-child
  `.node-num/.node-head/.node-tick` into a `.node-header` so the flex row applies) and a
  dark-header injector (builds the `.alg-header` bar from the page's own `.sb-icon` + stem
  `<b>` title + guideline chips parsed from the `.alg-foot` "Based on:" text, only if the page
  lacks one). Both are idempotent + scoped so the diagram view (`#viewDiagram`, `.box`) is
  untouched. Verified on the worst-case variant (bruising: corner-tab + border-left) via
  computed styles: border-top red, neutral left border, static 50% tinted badge, wrapped,
  black header — all canonical. **Bumped `service-worker.js` `CACHE_VERSION v2→v3`** so
  clients actually fetch the new shared assets (SW is stale-while-revalidate). NOTE: earlier
  in the session I also hard-edited ~35 pages inline (chest-pain + batches abdominal-mass…
  body-aches + anaemia) before switching to the shared approach — those edits are now
  REDUNDANT (shared files override them identically) and harmless; they don't need
  re-uploading. Minimal live upload = **assets/alg-diagram.css + assets/alg-diagram.js +
  service-worker.js** (staged in `_restyle-upload/`). Both shared files are loaded un-versioned
  by all pathway pages, so no per-page bump needed.
- **Chest-pain pathway restyled to match ankle-swelling (this session):** the user disliked
  chest-pain.html's look (teal gradient banner, no dark header, absolute-positioned node
  numbers with left-border cards) and wanted it identical in depth + design to ankle-swelling.
  All clinical content was already rich (9 steps, why-drawers, diagram view) — only the visual
  system differed. Fix via run_script transform: (1) swapped chest-pain's inline `<style>`
  block for ankle-swelling's exact block (shared design system: cream bg, top-border node
  colour coding, circular tinted number badges, rfgrid/kv/branch/ladder/lsgrid/pill styles);
  (2) inserted the dark sticky `.alg-header` (🫀 Chest Pain / RCGP SCA Algorithm / meta tags
  NICE CG95·NG185·NG12·10-min) which it previously lacked; (3) re-wrapped all 9 node headers
  from chest-pain's `node-num`+`node-head`+`node-tick` sibling structure into ankle's
  `.node-header` flex-row wrapper via regex. No content changed. NOTE for future: ~270
  algorithm pages exist in ≥3 template variants (ankle/ataxia/fatty-liver = newest & nicest
  `.node-header` wrapper style; chest-pain was an older flat variant; back-pain bespoke
  `.node-header-row`). Ankle-swelling is the canonical target design if more get restyled.
  Changed file: tools/algorithms/chest-pain.html only (no site.js/alg-* change → no bump).
- **Algorithm pathways — Steps is now the default view (this session):** the Steps/Diagram
  toggle used to open on the flowchart. Flipped it to open on **Steps**. `assets/alg-diagram.css`
  inverted: default (no body class) now shows `#viewSteps`/`#flow` + the progress bar and hides
  `#viewDiagram`; the flowchart shows only under a new `body.diagram-mode` class. `assets/alg-diagram.js`
  toggles `diagram-mode` (was `steps-mode`), still defaults to `'steps'`, and the persistence key
  was bumped `rgp.alg.view.` → `rgp.alg.view.v2.` so every user resets to Steps once (old saved
  "diagram" prefs ignored). Both files are loaded un-versioned by all 274 algorithm pages — no
  per-page edit needed; GitHub Pages revalidates them via ETag. Changed files: assets/alg-diagram.css
  + assets/alg-diagram.js only.
- **Ask — free fallback model when credit runs out (this session):** if the Anthropic call
  fails for ANY reason (most importantly prepaid credit exhausted, HTTP 400 "credit balance
  too low"), `aiProxy` in `backend/worker.js` now falls back to a FREE Cloudflare Workers AI
  model (`env.FALLBACK_MODEL` default `@cf/meta/llama-3.3-70b-instruct-fp8-fast`, via the
  existing `AI` binding) so Ask keeps answering. Returns `{completion, fallback:true}` as
  plain JSON (no streaming, no web search). `workersAiAnswer()` helper maps messages[0]→system.
  site.js shim sets `window.claude.lastFallback` in complete() + stream() (both JSON + SSE
  branches); ask.js prepends a ⚠️ "Answered by a free backup model — check carefully" note to
  the ans-note when fallback. `FALLBACK_MODEL` added to wrangler.toml [vars]. Bumped
  `site.js?v=55`→`?v=56` and `ask.js?v=12`→`?v=13` on the AI pages ONLY (ask.html, scribe.html,
  ask-quality.html) to keep the changed-file upload small — other pages don't use window.claude.
  Needs worker re-paste + upload of those + assets/site.js + pages/ask.js.
- **Ask — cost trim (this session):** token cost per question was ~12¢ (mostly INPUT tokens:
  big primer + 6 grounding notes + web-search pages fed back). Cut it ~half, quality-neutral:
  grounding 6→4 notes (`pages/ask.js` grounding() + searchScored fallback 5→4), buildContext
  clips tightened (features 6→4, management 7→5, referral 5→3 in `assets/ask-core.js`),
  conversation history sent 8→6 turns, and web-search `max_uses` 3→1 in `backend/worker.js`.
  Bumped `ask-core.js?v=1`→`?v=2` and `ask.js?v=11`→`?v=12` in ask.html + ask-quality.html.
  Needs worker re-paste (max_uses) + site re-upload. Prompt caching (0 reused on dashboard)
  only kicks in for repeat questions within 5 min — expected.
- **Ask — streaming answers (this session):** answers now render word-by-word (ChatGPT-style)
  so the wait no longer feels like waiting; total time unchanged, quality/model unchanged
  (Sonnet 4.6). `/api/ai` in `backend/worker.js` accepts `stream:true` → requests
  `stream:true` from Anthropic and pipes a simplified SSE (`data:{t}` per token, final
  `data:{done,sources}`) back via a TransformStream; still fills the answer cache at end of
  stream and still returns plain JSON on a cache hit (so instant answers keep working).
  site.js AI shim gained `window.claude.stream(arg,onToken)` (reads the SSE, calls onToken
  with each chunk + running full text, sets lastSources/lastCached; auto-falls back to JSON
  parse if the server didn't stream). `pages/ask.js` ask() uses stream() when available:
  creates the bot bubble on first token and re-renders `mdToHtml(full)` as tokens arrive,
  then finalises with the sources/feedback tail; falls back to complete() otherwise. Bumped
  **`site.js?v=54`→`?v=55`** sitewide (root+pages+tools+cases) and **`ask.js?v=10`→`?v=11`**.
  Needs the user to re-paste worker.js in Cloudflare + re-upload the site. Worker URL is
  live: `https://shy-voice-2225.bassamomda.workers.dev` (set in RGP_CONFIG.workerUrl).
- **Ask — quality flywheel: feedback + answer cache + test bank (this session):** three
  additions so Ask quality is measurable and self-improving. (1) **Shared answer core**
  `assets/ask-core.js` (`window.RGPAskCore` = FRAMING, PRIMER_ACK, buildContext) extracted
  verbatim out of `pages/ask.js` (which now just references it) so the console tests the
  identical pipeline. (2) **Worker** (`backend/worker.js`): `/api/feedback` POST (signed-in;
  stores `fb:<ts>:<rand>` in USERS KV, 180-day TTL); `/api/admin/ask` GET ?what=feedback|cache
  + POST {action:delete|approve} gated on new `ADMIN_EMAIL` var (added to wrangler.toml);
  **first-turn answer cache** in aiProxy — site sends `cacheKey` (normalised question, first
  turn only) → SHA-256 `ans:<hash>` in USERS KV, hit = instant `{cached:true}` response with
  zero AI cost, miss = generated then stored 30-day TTL; admin "approve" persists it (no TTL,
  optional edited completion). (3) **Client**: site.js complete() shim passes `cacheKey`
  through and sets `window.claude.lastCached`; ask.js sends cacheKey on first-turn asks,
  shows "⚡ Instant — served from the vetted cache" in the ans-note, and every answer gets a
  👍/👎 `fbHtml()` row (👎 opens an optional what-was-wrong input; POSTs to /api/feedback;
  verdict stored as `m.fb` so re-renders show "✓ Feedback noted"). (4) **Owner console**
  `tools/ask-quality.html` (UNLISTED on purpose — not in RGP_TOOLS/nav; linked from the setup
  guide Part 6): tabs Test bank / User feedback / Cached answers. Test bank runs
  `assets/ask-testbank.js` (window.ASK_TESTBANK, ~45 gold questions w/ must-contain fact
  groups incl. 8 NG12 2WW items) through RGPRetrieval.grounding + RGPAskCore, checks each
  answer for its must groups, persists results in localStorage `rgp-askq-run-v1`. site.js
  changed → **sitewide `site.js?v=53`→`?v=54`**; `ask.js?v=9`→**`?v=10`** + ask.html loads
  `ask-core.js?v=1` before it. Setup guide gained Part 6 (ADMIN_EMAIL + console). Worker
  deploy still pending on the user's side.
- **Ask — live web search on trusted UK domains (this session):** `/api/ai` in
  `backend/worker.js` now passes Anthropic's `web_search_20250305` tool (max_uses 3,
  `allowed_domains` = nice.org.uk (incl. cks./bnf.), sign.ac.uk, bestpractice.bmj.com,
  gov.uk, brit-thoracic, bashh, rcog, bad, bihsoc, resus, ginasthma) — disable via env var
  `WEB_SEARCH="off"` (added to wrangler.toml [vars]). Response parsing now joins ALL text
  blocks and collects citation URLs → returns `{completion, sources}`. Also added **prompt
  caching**: the first message (the big FRAMING primer, >1200 chars) is sent with
  `cache_control:{type:'ephemeral'}` (~90% cheaper on repeat calls). site.js `complete()`
  shim stores `data.sources` on `window.claude.lastSources`; `pages/ask.js` gained a
  LIVE WEB SEARCH framing rule (search only when unsure/recent), a `webHtml()` "Live
  sources · checked on the web just now" chip row (🌐, stored as `web:` on the history
  message and re-rendered in renderThread), and grounding bumped 5→6 notes. Setup guide
  gained "Part 5 — Live web search (already on)" (~1p/search, WEB_SEARCH=off to disable).
  site.js changed → **sitewide `site.js?v=52`→`?v=53`** (root + all cases/ + tools/ +
  pages/; also caught straggler `tools/sca-circuit-ai.html` which was stuck on ?v=27;
  verified zero ?v=52 remain); `ask.js?v=8`→**`?v=9`** in ask.html. Access model stays
  Option B (signed-in, any tier) for both /api/ai and /api/embed; default model
  `claude-sonnet-4-6`. Worker deploy still pending on the user's side.
- **Ask — semantic retrieval + trust hardening + backend wired (this session):** made Ask
  the flagship point-of-care tool (GPs use it live in clinic instead of studying, so
  accuracy = the product). (1) **New retrieval engine** `assets/ask-retrieval.js`
  (`window.RGPRetrieval`) replaces the inline retriever in `pages/ask.js`: builds one index
  over the whole library (~975 topics = 540 KB pathways/cases/protocols + 435 articles),
  scores with **IDF-weighted lexical** matching (specific terms like "folate" dominate common
  ones like "pain" automatically — retired the old GENERIC=2/6 hack) + a large
  **colloquial→clinical synonym & phrase map** ("SOB"→breathlessness, "can't wee"→urinary
  retention, "sugar 15"→glucose/diabetes, "feeling flat"→low mood/depression, "waterworks",
  "blood in wee"→haematuria, "pins and needles"→paraesthesia, "high bp"→hypertension, etc.),
  blended with an **optional semantic layer**: sentence embeddings via the Worker's new
  `/api/embed` (Cloudflare Workers AI `@cf/baai/bge-base-en-v1.5`), topic vectors cached in
  IndexedDB (`rgp-ask` db, fingerprinted so it re-embeds only if the library changes), cosine
  similarity in-browser, hybrid score `0.55*sem + 0.45*lexNorm (+0.08 title-hit)`. **Graceful
  fallback**: if embeddings aren't available (preview, or Workers AI binding absent) it
  silently uses pure lexical — nothing breaks. `ask.js` now delegates via `RET.searchScored`
  (sync, related chips), `RET.grounding` (async, the notes the answer is built from) and
  `RET.bySlug` (persisted chats); follow-up anchoring preserved. (2) **Trust hardening** of
  the answer FRAMING: point-of-care framing (clinician acts without cross-checking), explicit
  NEVER-fabricate rule (no invented doses/thresholds/guideline numbers), say-so-if-unsure +
  give the safe default/escalation instead of guessing, prefer correct-over-complete, disregard
  mismatched notes. (3) **Backend**: `/api/embed` added to `worker.js` (gated like `/api/ai`,
  returns 501 → lexical fallback if no `AI` binding); answer `max_tokens` 1024→**1600**;
  `wrangler.toml` gained `[ai] binding="AI"` + `EMBED_MODEL`. `site.js` AI shim gained
  `window.claude.embed(texts)` → `/api/embed`. (4) **Setup guide** (`SETUP - Connect the AI
  (read me).html`) gained "Part 4 — (Optional) turn on semantic search" (add Workers AI
  binding named `AI`). Loaded `../assets/ask-retrieval.js?v=1` in `ask.html` before
  `ask.js?v=7`→**`?v=8`**. site.js changed → **sitewide `site.js?v=51`→`?v=52`** (root + all
  cases/ + tools/ + pages/; verified zero `?v=51` remain). Prior this session: fixed the
  misleading "open from the live site" errors in Ask + Scribe; set AI access to **Option B**
  (signed-in free account, no payment) in `worker.js`; default model **claude-sonnet-4-6**
  (cheaper: claude-haiku-4-5); documented the £20/month prepaid-credit ceiling. NOTE: the AI
  only works on the live site once the user deploys the Worker (Cloudflare) and sets
  `RGP_CONFIG.workerUrl` in site.js — that deploy is still pending on the user's side.
- **Hot Seat in-case rail restyled (this session):** the in-session "Case Sections" sidebar
  in `tools/sca-practice.html` (`.hotseat-toc`) used an off-brand blue palette (`#3b6fd4`,
  `#dbe7ff`, blue gradient card, pill buttons w/ left-border accent + circular number badges)
  that both broke our teal/cream system and echoed another site. Rewrote it into our own
  visual language + a different metaphor: a **vertical stepper spine** — teal header card,
  numbered Source-Serif nodes threaded on a connecting line (`::before` spine), active step
  = solid teal node with `--teal-soft` glow ring, and completed steps auto-fill teal-soft via
  a new `.done` class. `goToStep()` in `assets/sca-practice.js` now marks all steps before the
  current one `.done` (order brief→script→knowledge→score→model→feedback); bumped
  `sca-practice.js?v=15`→`?v=16` in the page. Structure/markup unchanged — CSS + one JS
  helper only. No site.js bump.
- **Ultimate Consultation Guide built (this session):** new SCA craft tool
  `tools/sca-consultation-guide.html` — an interactive phase-by-phase walkthrough of ONE good
  SCA consultation (core structure only, per user). 7 phases (Opening / Focused
  data-gathering / ICE / Examination & investigations / Explanation / Shared management /
  Safety-net & close) as click-to-expand `.cg-ph` cards; each reveals three blocks — **The
  move** (what earns the marks), **Phrasebook** (italic example lines), **The trap** (the
  common failure) — plus domain tags (DG/CM/IP) showing where each phase scores. Clickable
  proportional timeline strip at top jumps+opens phases; Expand/Collapse-all; a "golden
  thread" note + cross-links to Hot Seat / Conversation Lab / Worked Examples / Playbooks.
  Built ORIGINAL (not copied from gpatlas's copyrighted guide). Registered in `scaToolsList`
  in site.js (🗺️, now 14 SCA tools → nav pill auto-updates), added to footer SCA column, and
  a home-toolkit tile in the "Learn the exam" phase next to the SCA Guide. site.js change →
  **sitewide `site.js?v=50`→`?v=51`** (root + all cases/ + tools/ + pages/; verified zero
  `?v=50` remain). Uses the standard tool scaffold + `__tools-sca` sidebar id.
- **Consult Scribe — mic preflight diagnostic (this session):** user kept hitting "mic not
  working". Root cause is environmental: the page was being used **inside the app preview
  frame**, and browsers don't delegate microphone permission to an embedded frame, so
  SpeechRecognition can never start there (note generation via `window.claude` works fine —
  verified end-to-end again, 4.3k-char SOAP note). Added `micPreflight()` in `tools/scribe.html`
  that runs BEFORE flipping the UI to "Recording": checks `!SR` / `!isSecureContext` /
  missing `mediaDevices` / `getUserMedia` rejection (NotAllowedError, NotFoundError) and
  returns a specific human reason; `startRec` is now async and shows that reason via
  `showMicBlocked()` instead of a generic "blocked". **IMPORTANT regression fix:** the first
  cut hard-blocked on `window.self!==window.top` (any frame) — but the app preview frame
  DOES delegate mic permission (`allow="microphone"`), so that falsely blocked a mic that
  had worked before. Removed the frame short-circuit: now it always *attempts* getUserMedia
  and only mentions the "open in own tab" option inside the NotAllowedError branch when the
  attempt actually fails. Also handles `no-speech`/`audio-capture` onerror hints. Direct
  edit → no site.js bump.\n- **Consult Scribe — mic-blocked / stuck "Auto-enhancing…" fix (this session):** users with
  the microphone denied saw the recorder freeze on "✦ Auto-enhancing the transcript with
  AI…". Two bugs in `tools/scribe.html`: (1) `rec.onerror` (`not-allowed`) calls `stopRec()`,
  which fired a **silent auto-enhance** whenever the transcript had ≥8 words — true even when
  the mic never captured anything (e.g. the loaded example), overriding the "Allow the
  microphone" hint; (2) `enhanceTranscript`'s `finally` reset the button but **never cleared
  `#recHint`**, so the transient "Auto-enhancing…" line stuck permanently (even on success).
  Fix: added a `captured` flag (false on `startRec`, set true in `rec.onresult`) and gated
  the stopRec auto-enhance on `captured` so it only runs after real dictation; and the
  `finally` now resets `#recHint` off the "Auto-enhancing…" line. Note generation itself was
  never broken (verified end-to-end: Load example → Generate produces a full SOAP note). AI
  features still need the live `window.claude` connection (Chrome); mic needs Chrome/Edge +
  permission. Direct edit → no site.js bump.
- **SCA home toolkit + Resit Clinic wired in + checkpoint audit (this session):** three
  pieces of work. (1) **Hot Seat checkpoint parity** — audited all 312 `SCA_CASES` against
  the hypertension reference (case 0: 6 facts / 3 cues / 8 checkpoints split
  `tasks×4,rto×3,gs` / 6 worked / ICE / learning). Structure was already consistent; only
  checkpoint depth lagged — 29 cases had 7 (tennis-elbow 6) and 3 had a `rho` domain typo
  (`iatrogenic-dyspepsia`, `picky-eating`, `trigeminal-neuralgia`). Added a genuine
  case-specific 8th checkpoint to each (mostly a 2nd/3rd `rto`) and fixed the typos →
  every case now ≥8 checkpoints across valid domains (`tasks`/`rto`/`gs`). Edited
  `assets/sca-cases*.js` directly (data files, not loaded via site.js → no bump for that).
  (2) **index.html SCA mode** — replaced the 6-step path section with a single
  **"Every tool — and exactly when to reach for it"** section: all SCA tools grouped into
  5 prep phases (Learn / Practise / Pressure-test / Sharpen / Track) as `.tk-phase` blocks
  of `.x-card`s, each with a bold-led `.x-when` "when to use it" line. Surfaced 6 tools that
  had no home-page presence (Conversation Lab, Micro-Drills, Hot Topics, Examiner Marking,
  Consultation Playbooks, self-led Mock Circuit) + removed the cross-section duplication
  (Hot Seat/Readiness/Mock each previously in 2–3 sections). Also added a concise rust SCA
  cross-promo banner (`.guide-flag.sca-cross`) to the **clinic** front door that switches
  interface. (3) **The Resit Clinic** (`tools/sca-resit.html`) was an orphan — built + in
  the sitemap but only linked from one SCA Guide FAQ. Registered it in `scaToolsList` in
  `site.js` (🩺, now 13 tools → SCA Tools nav pill auto-updates 12→13), added to the footer
  SCA column, and added a tile in the home toolkit "Track & fix" phase. site.js change →
  **sitewide `site.js?v=49`→`?v=50`** (root + all `cases/` + `tools/` + `pages/`; verified
  zero `?v=49` remain).
- **Worked Examples mobile overflow fix (this session):** `tools/sca-worked-examples.html`
  "See a pass" was unusable on phones — the conversation render template
  (`#convo` `.we-turn` builder) was **missing its closing `</div>`**, so every turn nested
  inside the previous one, creating a runaway-width staircase (one turn measured 1226px in
  an 818px column) that pushed text off-screen. Added the missing `</div>`; also hardened
  with `.we-turn .body{min-width:0}`, `overflow-wrap:anywhere` on `.txt`/`.we-an`, and a
  `@media(max-width:560px)` block (toggle stacks to column, tighter turn padding). Verified
  zero horizontal overflow + 10 un-nested turns. The SCA simulator was spot-checked and has
  no content overflow (global nav/sidebar/grids already have mobile breakpoints in site.css).
  Direct edit → no site.js bump.
- **Ask — continuous conversation (this session):** follow-up questions now build on the
  thread instead of being answered standalone. In `pages/ask.js` `ask()`: (1) framing gained
  a CONTINUING CONVERSATION rule (resolve back-references like "the dose", "in pregnancy",
  "and if it fails?" against the earlier condition/drug; don't repeat what's established) and
  the old hard "answer only what was asked about the named condition" line was softened to
  respect the thread; (2) retrieval for short/weak follow-ups (≤4 words or 0 hits) re-runs
  combining the previous user question + current, so context stays on the same topic;
  (3) history is capped to the last 8 turns sent to the model. ask.js include bumped to
  `?v=3` in ask.html. Continuity only manifests on the live `window.claude` connection.
- **Audio category filter + Ask promoted, More trimmed (this session):** (1) `pages/audios.html`
  left rail is now a **filter** — an "All categories" item + the 13 categories (each `data-acat`
  slug); clicking shows only that category's `.log-item`/`.log-cat-h` (both stamped `data-cat`),
  highlights the active rail item (`.dir-check.on`), and scrolls to the list top; a mobile-only
  `#logRailToggle` opens the rail. Compendium `#acat-<slug>` deep-links now FILTER to that
  category on arrival. (2) In `site.js`, **Ask** is promoted to a top-nav link
  (`<a data-navkey="ask">` 💬 → `pages/ask.html`, shown both modes) placed beside Clinical
  Compass (order: Ask · Compass · Prescribing · Compendium · More). (3–5) Ask, Audios and
  Articles were **removed from the More menu** (filtered out of the `RGP_NAV_SECTIONS.map` in the
  More mega — they live in the top nav / The Compendium now) but kept in the array for search.
  More pill recomputed (clinic 13; SCA more-sca now just Resources → pill 1). `applyNavOrder`
  seqs add `[data-navkey="ask"]`. site.js change → sitewide bump **35→36** (audios.html edited
  directly, no bump needed for it).
- **Audios — left category rail (this session):** `pages/audios.html` now uses the shared
  `.dir-layout > .dir-rail + .dir-main` directory pattern (like articles/algorithms): a
  sticky 236px left rail (`#logRail`) lists the 13 audio categories with counts, built in
  the player IIFE after the playlist renders; each link jumps to that category's
  `#acat-<slug>` header via `window.scrollTo` (NOT scrollIntoView, −90px for the fixed nav).
  The player + `#logList` were wrapped in `.dir-main`. The site `.sidebar` aside was also
  moved inside `.app` for structural consistency (it stays hidden in top-nav mode). Direct
  edit to audios.html → no site.js bump.
- **The Compendium — Audios per-specialty (this session):** the Audios section of
  `pages/full-medicine.html` now renders one tile per category (like Casebook/Articles)
  from a new generated index `assets/audios-index.js` (`window.RGP_AUDIOS_INDEX` =
  [{category,count,slug}] + `RGP_AUDIOS_TOTAL`; 100 briefings, 13 cats; built by regexing
  `cat:` out of the 5 `audio-scripts-*.js` files). Tiles deep-link `audios.html#acat-<slug>`;
  `pages/audios.html` now stamps `id="acat-<slug>"` on each `.log-cat-h` header (slug =
  lowercase/[^a-z0-9]+→-) and, after building the playlist, does a one-off `window.scrollTo`
  to the hash target (NOT scrollIntoView). Regenerate audios-index.js if audio cats/counts
  change. audios.html + full-medicine.html edited directly → no site.js bump.
- **Compass/Compendium = link + short dropdown (this session):** the two nav items became
  dropdown buttons again (`data-menu="core"`/`"reference"`) but with SHORT menus showing only
  the top-level contents — Compass → Open-page lead + Pathways + Protocols; Compendium →
  Open-page lead + Casebook + Articles + Audios (no per-specialty topics). New `coreMenu`/
  `refMenu` builders feed `data-mega="core"`/`"reference"` panels; the full per-specialty
  `coreMega`/`refMega` builders are now unused (left in place). The full landing pages
  (`tools/clinical-core.html`, `pages/full-medicine.html`) are still reached via each menu's
  lead row. `applyNavOrder` seqs reverted core/fullmed to `data-menu`. Required sitewide
  `site.js` bump **33→34**.
- **Prescribing promoted to top nav; other Tools folded into More (this session):** the
  standalone **Tools** dropdown (`data-menu="tools"` + its mega) was removed. **Prescribing**
  is now a direct top-nav link beside The Compendium (`<a data-navkey="prescribing">` →
  `tools/prescribing.html`, clinic-only, no pill). The remaining `RGP_TOOLS`
  (all except `__tools-prescribing`) now render inside the **More** mega under a clinic-only
  "Tools" sub-header, with the existing `RGP_NAV_SECTIONS` under a "Resources" sub-header
  (both headers `.rgp-mm-head rgp-clinic-only` so they hide in SCA mode, where the existing
  `.rgp-mm-tool:not(.rgp-more-sca)` rule already hides the tool links). Clinic More pill =
  sections(9) + tools(7) = 16. `applyNavOrder` seqs swapped `[data-menu="tools"]` →
  `[data-navkey="prescribing"]`. Required sitewide `site.js` bump **32→33**.
- **The Compendium — Articles shown per-specialty (this session):** the Articles section of
  `pages/full-medicine.html` now renders one tile per specialty (like the Casebook), instead
  of a single "open A–Z" tile. Counts come from a new generated index `assets/articles-index.js`
  (`window.RGP_ARTICLES_INDEX` = [{category,count,slug}] + `RGP_ARTICLES_TOTAL`), built by
  regexing `category:` out of the 32 `articles-data-*.js` files (435 notes, 19 categories;
  `\uXXXX` escapes decoded so the two apostrophe-variant "Women's health" entries merge to
  25). Tiles deep-link `articles.html?cat=<slug>` — the slug MUST match articles.html's slug
  (`toLowerCase, [^a-z0-9]+→-`, **no** &→and) so e.g. "Cardiovascular & Renal" →
  `cardiovascular-renal`; verified against the page's `.dir-check[data-slug]` checkboxes.
  Regenerate articles-index.js if articles categories/counts change. Loaded as one small file
  on the Compendium page (not all 32 data files). No site.js change → no version bump.
- **Clinical Core & Full Medicine → real landing pages (this session):** the user changed
  the two grouped dropdowns into clickable PAGES. The top-nav `core`/`reference` <button>
  dropdowns became <a class="rgp-nav-btn rgp-nav-link"> links (`data-navkey="core"` →
  `tools/clinical-core.html`, `data-navkey="fullmed"` → `pages/full-medicine.html`); the
  old `data-mega="core"`/`"reference"` panels were removed and `applyNavOrder` seqs updated
  to the navkeys. "Reference Library" was renamed **Full Medicine**. The nav pills still
  show combined totals (Core 441, Full Medicine 543). Two new pages built on the
  page-hero/page-section scaffold, each rendering specialty tiles CLIENT-SIDE from globals
  now exposed on window in site.js (`window.RGP_ALG_SPECIALTIES`, `window.RGP_MGMT_SPECIALTIES`,
  `window.rgpSlug`; `window.RGP_CASES` was already global): clinical-core.html =
  Pathways (→algorithms.html?cat=) + Protocols (→management.html?cat=), full-medicine.html =
  Casebook (→../cases.html?cat=) + Articles + Audios. `activeId` keys `__core`/`__fullmed`
  highlight the nav link + sidebar. Required sitewide `site.js` bump **30→31**.
- **Top-nav IA — Clinical Core + Reference Library (this session):** consolidated the
  top navigation (in `site.js` renderTopNav). The three standalone dropdowns **Casebook /
  Pathways / Protocols** were replaced by two grouped dropdowns: **Clinical Core**
  (🧭, `data-menu="core"` / `data-mega="core"`) = Pathways + Protocols, and **Reference
  Library** (📖, `data-menu="reference"` / `data-mega="reference"`) = Casebook + Articles +
  Audios. Each mega is the existing per-specialty grid prefixed with full-width sub-group
  headers (`.rgp-mm-head`, inline `grid-column:1/-1` so NO site.css change needed) that show
  the per-group count; the nav button pill shows the combined total (Core 441 = 265+176,
  Reference 543 = 108 cases + 435 articles; `ARTICLES_N=435` const). Builders `coreMega`/
  `refMega`/`mmHead` added just before renderTopNav's `return`. `applyNavOrder` seq arrays
  updated to `core`/`reference` for both clinic & SCA modes. Scope was **top nav only** —
  the sidebar, homepage and `RGP_NAV_SECTIONS` (More menu) were intentionally left as-is, so
  Articles/Audios still also appear under More (esp. for SCA mode's `.rgp-more-sca` filter)
  and search still indexes them. Required sitewide `site.js` bump **29→30**.
- **Tool consolidation — Decision Support + GP Admin + Prescribing (this session):** merged
  the loose point-of-care tools into three hub pages, each a `.phub-nav` of buttons that
  load the original sub-tools into a self-resizing `<iframe …?embed=1>` (site.js already has
  full embed mode: `?embed=1` adds `.rgp-embed` and hides nav/footer/sidebar/breadcrumb,
  zeroes `.main`/`.tool-page` padding, skips CPD double-count + install pill). Hubs:
  `tools/decision-support.html` (`__tools-decision`, Diagnose→Investigate→Treat =
  diagnostic + lab-results + medication-chooser), `tools/gp-admin.html` (`__tools-admin` =
  fit-note + dvla + gp-forms), and the pre-existing `tools/prescribing.html`
  (`__tools-prescribing` = prescriptions/Ready Rx + prescribing-guide + sick-day-rules).
  The original sub-tool files are KEPT (they're the iframe targets) — do not delete.
  `RGP_TOOLS` already lists the three combined entries; this session also rewrote the
  left **sidebar** Tools section (in `site.js` renderSidebar) to the combined set
  (Decision Support · Prescribing · GP Admin · Calculators · Examinations · Leaflets ·
  Hot Seat, count 7) and the **homepage** `index.html` point-of-care grids likewise.
  Required a sitewide `site.js` bump 25/27→**28** (cases were on 25, tools/pages on 27 —
  now unified). Only files that include site.js were bumped: root, tools/, pages/, all
  cases/, and the single `tools/algorithms/lab-results.html` (other algorithm/management
  cards use alg-nav.js, not site.js).
- **Hub embed fix — iframe `srcdoc` not framed URL (this session):** the first cut of the
  Decision Support & GP Admin hubs set `iframe.src = "sub-tool.html?embed=1"`, but the
  serve/preview environment refuses to be framed (X-Frame-Options / frame-ancestors) so the
  iframes went blank (contentDocument `about:blank`, height never set). Fix: the hub now
  `fetch()`es the sub-tool HTML (same-origin, returns 200), injects `data-rgp-embed="1"`
  onto its `<html>` tag, and sets it as the iframe **`srcdoc`** — srcdoc content executes
  its own scripts normally and is NOT subject to X-Frame-Options. Relative asset paths
  resolve against the hub's `tools/` dir, which is correct. Because srcdoc has no
  `?embed=1` query string, `site.js` embed detection was widened to ALSO honour
  `document.documentElement.hasAttribute('data-rgp-embed')` in all three places (the
  `RGP_EMBED` const that hides nav/footer/sidebar/breadcrumb, the install-pill IIFE, and
  the cpd-tracker IIFE). That `site.js` change required a fresh sitewide bump **28→29**.
  `prescribing.html` is unaffected — it was already fully self-contained (inline tabs, no
  iframe). Verified all six sub-tools render inline with `rgp-embed` active and no nested
  chrome.
- **Installable app (PWA) + install affordance (this session):** the site was already a
  PWA (`manifest.json`, `service-worker.js` with offline shell, iOS meta + icons, all wired
  via `site.js`). Added a site-wide **"Install Reasoning GP"** affordance in `site.js`: a
  dismissible bottom pill that fires the captured `beforeinstallprompt` on Android/Chromium,
  and an iOS Safari instruction sheet (Share → Add to Home Screen). Hidden when standalone or
  dismissed (localStorage `rgp-install-dismissed-v1`); `window.RGPInstall()` triggers it
  explicitly (homepage "Install app" button). Also enlarged the homepage search/ask box on
  phones (≤620px). Required `site.js` bump 18→19 sitewide.
- **Auto-CPD reading tracker (this session):** `assets/cpd-tracker.js` (loaded by a tiny
  injector appended to BOTH `site.js` and `alg-nav.js`, so it runs on every content page
  incl. pathway pages that don't load site.js). Counts ACTIVE reading time (pauses on
  hidden tab / 60s idle), flushes every 12s into localStorage `rgp-cpd-v1` keyed by
  pathname `{href,title,kind,seconds,visits,first,last,reflection}`; only tracks
  cases/tools/algorithms/management pages, skips hubs/home/cpd. Exposes `window.RGPCPD`
  (list/totalSeconds/setReflection/remove/clearAll). Small dismissible "⏱ reading → CPD"
  pill after 45s. **CPD dashboard** rebuilt in `pages/cpd.html`: total auto hours, items,
  reflections; grouped Pathways/Protocols/Case walkthroughs/Tools with per-item time,
  visits, editable reflection, remove; name field + print-to-PDF certificate (@media
  print). Required `site.js` bump 17→18 sitewide.
- **Audio listening → CPD (this session):** the `cpd-tracker.js` reading tracker still
  *skips* the audios page; instead `pages/audios.html` accrues its OWN active listening
  time into the same store (localStorage `rgp-cpd-v1`) as an **`Audio`** entry under a
  stable key `/pages/audios.html` (title "Clinical Audios"). A small IIFE at the end of the
  audio player's script counts only while a track is actually playing — it reads a
  `window.__rgpAudioActive` flag set inside `setPlayIcon(playing)` — so listening counts
  even with no interaction / hidden tab, and there's NO double-count with the reading
  tracker. Flushes every 12s + on visibility/pagehide/beforeunload, 25s min before logging.
  `pages/cpd.html` extended: `KIND_ORDER/IC/LABEL` gained `Audio` (🎧 "Audio learning")
  and the lead copy now mentions listening. No `cpd-tracker.js` change → no sitewide bump
  needed (audios.html + cpd.html are edited directly, so they're served fresh).
- **Global search + Local-area (this session):** homepage clinic search box
  (`#clinicGlobalSearch` in `index.html`) is now a command-palette that indexes the whole
  site — built from `RGP_KB_TOPICS` (kb-index.js: pathways/cases/protocols) + `RGP_TOOLS` +
  `RGP_NAV_SECTIONS` (referenced by bare name — they're `const` lexical globals, NOT on
  `window`). Dropdown `#clinicResults`, keyboard nav, kind badges, hrefs normalised by
  stripping leading `../`. `wireGlobalSearch()` defined in a script block before the main
  IIFE; old `wireSearch` clinic call removed (SCA still uses it). **Local-area** =
  `assets/local-area.js` (`window.RGPArea`, localStorage `rgp-area-v1`): ICB/APC picker;
  GM localities map to GMMMG, others get a "follow your local APC" prompt + find-my-formulary
  link. Placeholders: `[data-area-name|unset|set|matches|other|formulary]`,
  `RGPArea.renderSelect(mount)`. Used on homepage ("Your area" chip) and the Prescribing
  Guide RAG banner. Both new scripts included with `?v=1`.
- **Prescribing Guide** (`tools/prescribing-guide.html`, added this session): 4-tab
  reference — (1) free-prescription eligibility (England exemptions: age, MatEx, MedEx/FP92A
  condition list, low-income/benefits, PPC + HRT PPC); (2) writing a valid FP10 (legal
  elements checklist, controlled-drug extra rules, FP10 variants table, EPS); (3) what not
  to prescribe (OTC ~35 minor conditions, low clinical-value list, when OTC is still OK,
  secondary-care note); (4) traffic-light RAG — GREEN/AMBER/RED/GREY legend + searchable
  filterable drug list using **GMMMG** as the worked example, with a prominent "not in
  Greater Manchester? follow your local APC/ICB formulary" banner. Registered in
  `RGP_TOOLS` as `__tools-prescribing` (icon 🧾); hard-coded `x-card` in the index
  "Point-of-care tools" grid.
- **GP Forms & Certificates** (`tools/gp-forms.html`, added this session): searchable/
  filterable directory of forms a GP issues or writes, grouped by category (Death & end of
  life, Fitness for work, Maternity, Benefits & exemptions, Capacity & legal, Driving,
  Third-party reports, Travel & private letters). Each card = purpose, who completes,
  NHS-free vs private-chargeable pill, key guidance, pitfalls, cross-links to the Fit Note
  and DVLA tools. SR1 (replaced DS1500 2022, 12-month prognosis, fast-tracked
  PIP/DLA/AA/UC/ESA) is the lead card in the Death & end of life category. Registered in
  `RGP_TOOLS` as `__tools-forms`; also a hard-coded `x-card` in the index "Point-of-care
  tools" grid.
- **Consult Scribe** (`tools/scribe.html`, added this session): ambient AI medical
  scribe (Heidi-style). Live mic dictation (browser SpeechRecognition) → AI-generated GP
  record relabelled per **EMIS Web / SystmOne / SOAP** (toggle), with examination,
  assessment, plan, safety-net, follow-up, suggested SNOMED codes, referral-letter draft,
  prescription suggestions and admin tasks. Surfaces NICE NG12 2WW flags from the
  transcript in a purple `2WW` banner. Split/Stacked layout toggle. Transcript + last
  note persist in `localStorage` (`rgp-scribe-v1`); built-in worked example (NG12
  haematuria 2WW) previews output without mic/AI. Registered in `RGP_TOOLS` as
  `__tools-scribe`.
- **Consult Scribe — "Generate note" dead-button fix (this session):** users reported the
  tool "not working"; the cause was `updateWordCount()` hard-disabling `#genBtn`
  (`disabled = busy || n<6`), so on a short/empty transcript the button sat greyed-out and
  unresponsive with no explanation. Changed to `disabled = busy` (only while generating)
  and added a guard at the top of `generate()`: if the transcript is <6 words it now shows
  a clear `#outErr` message ("Add more to the transcript first… or Load example") instead
  of silently returning. AI note generation still requires the live `window.claude`
  connection (Chrome); mic needs SpeechRecognition (Chrome/Edge). scribe.html edited
  directly → no sitewide bump.
- **Dermatology Diagnosis tool — built then REMOVED (this session):** an image-based derm
  decision-support tool (`tools/derm-diagnosis.html`) was built and iterated, but removed
  at the user's request. Reason: the built-in `window.claude.complete` connection is a
  general assistant model with a hard ~256KB request cap (forcing image downscale/JPEG
  compression) and a ~1024-token output cap — it is NOT a validated dermatology classifier.
  Photo-based diagnoses were unreliable/misleading vs normal Claude chat (which reasons over
  the full-resolution image directly), and a confident-but-wrong skin-cancer read is unsafe.
  No logic fix makes a photo-in/diagnosis-out tool trustworthy on this connection. File
  deleted; it was never left registered in `RGP_TOOLS` or the homepage. **Lesson for future
  derm work:** do NOT ship an AI "diagnosis from photo" feature on this connection — if derm
  tooling is wanted, build a rule-based *reasoning/triage* aid (history structuring,
  dermoscopy frameworks, and the rule-based NICE NG12 2WW referral decision) where the photo
  is an optional prompt, not the source of truth.
- **Ask assistant fix + relevance tightening (this session):** the Ask page
  (`pages/ask.html` + `pages/ask.js`) had stopped answering — `retrieveScored` assigned an
  **undeclared `tHit`** under `'use strict'`, throwing a ReferenceError inside `retrieve()`
  before any answer (and breaking the related-topics render). Fixed by declaring
  `let tHit=false` per indexed item. Then tightened the "Explore related in the library"
  list so it shows only genuinely on-topic pathway/protocol/case/notes: (1) KB `titleTok`
  now built from the TITLE only (subtitle moved to body) so e.g. Splenomegaly's "portal
  hypertension" subtitle no longer false-matches a hypertension question; (2) added a
  title-**coverage bonus** (`+6 * titleHits/titleTokenCount`) so the exact condition
  ("Hypertension" case/protocol) outranks compound mentions ("Pulmonary hypertension",
  "IIH"). `relatedHtml` still filters to title-hits and groups Pathways/Protocols/Case
  walkthroughs/Topic notes. No sitewide bump (ask.js edited directly).
- **Ask — external references (this session):** added `refHtml(answer,q)` in `pages/ask.js`,
  rendered between the internal "From the Reasoning GP library" chips and the related list,
  as a **"References · external guidance cited"** row (rust dashed chips, open in new tab).
  It scans the generated answer for named UK sources the model attributes to and links out:
  NICE CKS (→ CKS search for the question), NICE NG12 (suspected-cancer / [[2WW]]), generic
  NICE guidance, BNF, BMJ Best Practice, SIGN, UKHSA/Green Book, MHRA, BHS, BTS, BASHH,
  RCOG, BAD, GINA, Resus Council. Ambiguous acronyms (SIGN/BHS/BTS/BASHH/RCOG/BAD) matched
  **case-sensitively** so "sign"/"bad" prose don't false-trigger. Wired into both the live
  answer and persisted-history render; CSS `.src-chip.ext` added in ask.html. ask.js/ask.html
  edited directly → no sitewide bump.
- **Ask — synonym matching + generic-word down-weighting (this session):** "folic acid
  deficiency" wasn't surfacing the **Low Folate** pathway. Two fixes in `pages/ask.js`
  `tokens()`/`retrieveScored()`: (1) a `SYN` map normalises clinical synonyms/abbreviations
  to a canonical token *after* the ae/oe spelling collapse (folic→folate, htn→hypertension,
  ckd→kidney, gord/gerd→reflux, uti→urinary, bph→prostate, t1dm/t2dm/diabetic→diabetes,
  osa→apnea, tia→stroke) — applied to BOTH index and query so they converge; (2) a `GENERIC`
  set of qualifier words (deficiency, disease, syndrome, chronic, low, high, raised, test,
  results, blood…) scores a title hit at +2 instead of +6 and is excluded from the coverage
  bonus, so the *specific* word (folate) decides ranking and "Low Folate" rises to #1 over
  every other "X deficiency" topic. No sitewide bump (ask.js edited directly).
- **Ask — answer quality: doses, on-topic, prescription link (this session):** three
  `pages/ask.js` `FRAMING`/`TOOLS` fixes after a folate answer punted to the BNF and
  drifted into hypoglycaemia. (1) Replaced the over-cautious "never invent doses → direct
  to BNF" line: the assistant MUST now state the real drug/dose/frequency/duration for
  routine UK primary-care regimens (e.g. "folic acid 5 mg once daily for 4 months"), only
  deferring to the BNF for genuinely variable (weight/renal/specialist) doses, with the
  verify caveat appended once at the end. (2) Added a STAY-ON-TOPIC rule forbidding
  unrelated conditions/mechanisms (explicitly the folate→hypoglycaemia digression). (3)
  Broadened the Ready Prescriptions `TOOLS` regex to also fire on treat/treatment/replace/
  supplement/deficien/deplet/manage(ment) so deficiency & treatment queries surface the
  prescription chip (links to the tool index — it has no per-item anchors). Dose/topic
  behaviour only manifests on the live `window.claude` connection. No sitewide bump.
