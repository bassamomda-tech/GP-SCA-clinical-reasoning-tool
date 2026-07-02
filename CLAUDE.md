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
