# Reasoning GP — backend setup (Cloudflare + PayPal)

This folder is your **backend**. It turns the site from "device-local accounts, no AI on your domain" into **real, secure accounts + working AI + paid access**. You deploy it once to Cloudflare, paste a few IDs into the site, and everything activates.

You do **not** need to change any other site file except `assets/site.js` (one line: the Worker URL) and, for payments, the PayPal IDs in the same config block.

---

## What you'll end up with
- **Secure logins** that work across phone + laptop (passwords hashed server-side).
- **AI features working on your own domain** (the key stays on the server).
- **PayPal subscriptions** (cards + Apple Pay) paying into your business account, which automatically unlock the right tier (Silver = clinic, Gold = SCA, Platinum = all).

---

## Before you start — accounts you need
1. **Cloudflare account** (free) — you're already hosting the site on Cloudflare Pages.
2. **PayPal Business account** for your limited company (upgrade your personal PayPal to Business, or create one; link your **Monzo Business** account as the withdrawal bank).
3. **An AI API key** — from Anthropic (console.anthropic.com). This is pay-as-you-go; set a spend limit.
4. **Node.js** installed on your computer (to run `wrangler`, Cloudflare's CLI).

---

## Step 1 — install Wrangler & log in
```bash
npm install -g wrangler
wrangler login
```

## Step 2 — create the two databases (KV)
```bash
cd backend
wrangler kv namespace create USERS
wrangler kv namespace create TOKENS
```
Each command prints an `id`. Paste them into `wrangler.toml` (replace `PASTE_USERS_KV_ID` and `PASTE_TOKENS_KV_ID`).

## Step 3 — set your secrets
```bash
wrangler secret put AI_API_KEY          # your Anthropic key (sk-ant-…)
wrangler secret put PAYPAL_CLIENT_ID     # PayPal LIVE client id  (Step 6)
wrangler secret put PAYPAL_SECRET        # PayPal LIVE secret      (Step 6)
wrangler secret put PAYPAL_WEBHOOK_ID    # PayPal webhook id       (Step 7)
```

## Step 4 — set your domain & model
In `wrangler.toml` set `ALLOWED_ORIGIN` to your live site origin (e.g. `https://www.reasoninggp.com`). Leave `AI_MODEL` as-is unless you want a different model.

## Step 5 — deploy
```bash
wrangler deploy
```
You'll get a URL like `https://reasoning-gp-api.YOURNAME.workers.dev`. **Copy it.**

➡️ **Open `assets/site.js`, find `window.RGP_CONFIG`, and set:**
```js
workerUrl: 'https://reasoning-gp-api.YOURNAME.workers.dev',
```
Re-upload the site to Cloudflare Pages. **Logins + AI are now live.** (Bump the `?v=` on `site.js` everywhere, or purge the Cloudflare cache, so browsers fetch the change.)

---

## Step 6 — PayPal: app credentials & subscription plans
1. Go to **developer.paypal.com → Apps & Credentials → Live**. Create an app. Copy the **Client ID** and **Secret** → these are the `PAYPAL_CLIENT_ID` / `PAYPAL_SECRET` secrets from Step 3.
2. Create a **Product** and then **Subscription Plans** (one per price). You need up to seven:
   - Silver £10/mo, Silver £100/yr
   - Gold £15/mo, Gold £40/3mo, Gold £100/yr
   - Platinum £20/mo, Platinum £180/yr
   You can create plans in the dashboard (Pay → Subscriptions) or with PayPal's API.
3. Paste each **Plan ID** into `wrangler.toml` `[vars]` (`PLAN_SILVER_MONTHLY`, etc.) and run `wrangler deploy` again.
4. In `assets/site.js` `RGP_CONFIG`, set `paypalClientId` and fill the matching `paypalPlans` ids. Re-upload the site.

## Step 7 — PayPal: the webhook (this is what unlocks access)
1. In your Live app, add a **Webhook**. URL: `https://reasoning-gp-api.YOURNAME.workers.dev/api/paypal/webhook`.
2. Subscribe to these events: **BILLING.SUBSCRIPTION.ACTIVATED, UPDATED, RE-ACTIVATED, CANCELLED, EXPIRED, SUSPENDED** and **PAYMENT.SALE.COMPLETED** (the worker handles all seven; without RE-ACTIVATED / SALE.COMPLETED a member whose retry succeeds after a suspension loses access when the grace period ends). For the handbook shop also add **PAYMENT.CAPTURE.COMPLETED, PAYMENT.CAPTURE.REFUNDED and PAYMENT.CAPTURE.REVERSED** (see "Handbook shop").
3. Copy the **Webhook ID** → that's the `PAYPAL_WEBHOOK_ID` secret (Step 3). Re-deploy if you set it after first deploy.

## Step 8 — Apple Pay
Apple Pay rides on PayPal's checkout but Apple requires you to **verify your domain**:
1. In PayPal → **Payment Methods / Apple Pay**, register your domain.
2. PayPal gives you a file `apple-developer-merchantid-domain-association`. Put it at
   `/.well-known/apple-developer-merchantid-domain-association` on your live site (Cloudflare Pages serves it).
3. Apple Pay then appears automatically in the PayPal buttons on supported devices/browsers.

---

## How entitlement works (plain English)
- When someone subscribes on the site, the PayPal button tags the subscription with **their account email**.
- PayPal calls your Worker's webhook. The Worker **verifies it's really PayPal**, looks up the plan, and sets that user's **tier** (silver/gold/platinum).
- The site asks the Worker "what tier is this user?" on every load and unlocks the matching area. Cancelling/expiry sets them back to **bronze** automatically.

## Testing safely first
Use PayPal **Sandbox** while testing: deploy a separate test Worker with `PAYPAL_MODE = "sandbox"` in `[vars]`, sandbox app credentials as its secrets, sandbox `PLAN_*` ids, and sandbox buyer accounts. `PAYPAL_MODE` switches every PayPal call (webhook verification, plan look-ups, pause / resume / cancel) together. Leave it unset on the live Worker.

## Manage my plan — pause, resume, cancel
Members open **Manage my plan** from the account menu (top right) → `pages/account-plan.html`. The Worker endpoints:
- `GET /api/plan` — the signed-in member's plan, status, next payment, start date.
- `POST /api/plan/pause {months: 1|2|3}` — PayPal **suspend**. The pause starts at the end of the paid period; Bronze while paused; restarts automatically (PayPal **activate**) on the date shown.
- `POST /api/plan/resume` — restart a paused plan early.
- `POST /api/plan/cancel {reason?, details?}` — PayPal **cancel**. No more payments; access to the end of the paid period, then Bronze.
- `GET|POST /api/admin/plan` — owner only (ADMIN_EMAIL): look up, cancel, pause or resume for a member by email; `GET` with no email lists recent actions. Used by the "Cancel or pause a member's plan" card in `tools/access-codes.html`.

All actions use the member's own bearer token (nobody can act on another account), are idempotent, rate-limited (6 an hour per member) and logged in USERS KV as `planlog:*` (time, email, action, reason, who; never card data; kept 2 years). Pauses are indexed as `pause:<email>`; the hourly cron (`15 * * * *`) and the member's next visit restart them when due.

**PayPal app permission:** the live app must have **Subscriptions** enabled (developer.paypal.com → Apps & Credentials → your app → Features). Suspend, activate and cancel use the same client id and secret as the webhook.

**No email yet:** the Worker does not send email. A cancellation or pause confirmation email from Reasoning GP (and, from 2027, the DMCC Act reminder notices) needs an email provider adding.

## Auto-updating "Updates & News" feed (no manual editing)
The Worker exposes a public **`/api/updates`** endpoint that fetches the official
**MHRA Drug Safety Update**, **UKHSA** and **NICE** feeds *server-side* (a Worker has no
CORS limit), normalises them and returns JSON. The Updates page (`pages/updates.html`)
calls it on load and renders the latest items automatically — so the live site stays
current with zero editing. Results are edge-cached ~6h.

- Nothing extra to set up: it works as soon as the Worker is deployed and
  `RGP_CONFIG.workerUrl` is set (same as AI). In preview / before deploy, the page falls
  back to the curated "Editorial picks" cards.
- **Optional — warm the cache on a schedule** so the first visitor each day gets it
  instantly. In `wrangler.toml` add:
  ```toml
  [triggers]
  crons = ["0 7 * * *"]   # 07:00 UTC daily
  ```
  The Worker's `scheduled()` handler pre-fetches the same feeds. Redeploy with
  `wrangler deploy`.
- To change sources, edit `UPDATE_FEEDS` in `worker.js` (any Atom/RSS URL works).

### 12-month archive ("memory" of weekly updates)
The page also shows an **Updates archive — the last year**, filterable (All / NICE / MHRA / UKHSA) and grouped by month. Two layers feed it:
- **Per-device memory** (no setup): every item the live feed shows is remembered in the
  browser (`localStorage` `rgp.updates.archive.v1`), deduped and pruned to 12 months — so
  the archive builds up automatically as the user visits, and works even in preview.
- **Shared server archive** (recommended): create a third KV namespace and the Worker keeps
  a canonical 12-month history every user sees immediately:
  ```bash
  wrangler kv namespace create UPDATES
  ```
  Paste the id into `wrangler.toml` (`{ binding = "UPDATES", id = "…" }`, already stubbed).
  The daily cron appends new items to KV (`/api/updates/archive` serves them; it also
  back-fills opportunistically on each `/api/updates` call). Without the KV binding the
  endpoint falls back to a live pull, and the per-device memory still works.


## Searches with no results (anonymous)
When a search on the site finds nothing at all, the site sends just the search words to
`POST /api/search-miss` (after typing stops for 1.5 s, or on Enter; once per search per page view).
Nothing to configure: it uses the existing **USERS** KV.

- **Kept:** `miss:YYYY-MM` → `{ terms: { "<words>": count }, overflow }`. Only words and counts per month:
  no IP, no account, no page, no time. Each month's key expires 12 months after the month ends.
- **Filtered twice** (browser and Worker): lower-case, spaces collapsed, max 60 characters; dropped if it
  has a run of 6+ digits, an email, a UK postcode or a date. Max 2,000 different searches a month
  (`MISS_MAX_TERMS`); beyond that only `overflow` goes up.
- **Rate limit:** 20 a minute per visitor (`MISS_RL_MAX`), counted against a salted hash of the IP in a
  `missrl:*` key that expires after 60 seconds. Optional: `wrangler secret put MISS_SALT` (any long
  random text) keeps the hash stable across Worker instances; without it each instance uses its own.
- **Owner view:** `GET /api/search-misses?month=YYYY-MM` — signed in as `ADMIN_EMAIL`, like the other
  owner endpoints. The page is `pages/search-misses.html` (not linked, not indexed): top searches,
  counts and a CSV download.
- **Only the site may report:** requests whose `Origin` is not in `ALLOWED_ORIGIN` are ignored. The
  endpoint always answers `204`.
- **KV cost:** each reported search is about two KV reads and two writes. The free tier allows 1,000
  writes a day, which is far more than no-result searches on a site this size.

## Handbook shop (one-off £20 purchases)
Handbooks are sold **separately, £20 each, as a one-off PayPal payment**. Buyers can put several
in a **basket** on the Shop page and pay for them in one PayPal payment; every handbook in that
payment shares one order number, and a full refund of that payment removes all of them. They are **not
part of any plan**: Silver, Gold and Platinum members buy them like everyone else. (The
individual Clinic Guides stay in the Silver and Platinum plans; nothing changes there.)

**The products** (`const PRODUCTS` in `worker.js`). The R2 name must match exactly:

| Product id (`data-cg-product`) | Title | Exact file name in R2 | Saved on the buyer's computer as |
|---|---|---|---|
| `lab-handbook` | Lab Results Handbook | **`lab-results-handbook-v2.0.pdf`** | `Reasoning-GP-Lab-Results-Handbook-v2.0.pdf` |
| `sca-casebook-1` | SCA Casebook Vol 1 | **`sca-casebook-vol1-v1.0.pdf`** | `Reasoning-GP-SCA-Casebook-Vol1-v1.0.pdf` |
| `sca-communication` | SCA Communication Book | **`sca-communication-book-v1.0.pdf`** | `Reasoning-GP-SCA-Communication-Book-v1.0.pdf` |
| `chronic-disease` | Chronic Disease Handbook | **`chronic-disease-handbook-v1.0.pdf`** | `Reasoning-GP-Chronic-Disease-Handbook-v1.0.pdf` |

**Where they are sold:** all three on the **Shop** page (`pages/shop.html`, "Shop" in the
top bar next to Plans); the Lab Results Handbook also on Clinic Guides → Lab results.
Any page with a `div.cg-handbook[data-cg-product]` card that loads `site.js` and
`assets/clinic-guides.js` sells that handbook.

How it works for a member:
- **Signed out** → a **Sign in to buy · £20** button (opens the usual sign-in box). An
  account is needed so the purchase is linked to them and they can download it again on
  any device.
- **Signed in, not bought** → a **tick box** and, under it, the **PayPal** button (PayPal,
  card, Apple Pay where offered). The PayPal button stays disabled until the box is ticked
  (see "Tick box" below). The Worker sets the price (£20, in pounds) and checks with PayPal
  that exactly £20 was paid before it unlocks anything. Nothing the browser sends can
  change the price.
- **Bought** → a **Download PDF** button, from then on, on any device they sign in on.
  Re-downloads are free and always give the newest version of the same edition.
- **Your admin account** can always download (no purchase needed).
- **If PayPal's checkout is blocked** (some NHS networks) or the shop isn't switched on
  yet, the card says so and offers your email address, so you can send a payment link
  by hand.

The PDFs live in a **private Cloudflare R2 bucket** (file storage) called
`rgp-downloads`. There is no public link to them: the Worker sends a file only to someone
who bought it. Upload the watermarked PDFs we build (gpreasoning.uk watermark, copyright
strip on every page, "Copyright and licence" page; copyright holder "Reasoning GP").

**Tick box (no 14-day cancellation for downloads).** Under the Consumer Contracts
Regulations 2013 a buyer of digital content (not on a tangible medium) loses the 14-day
right to cancel only if they give **express consent** to immediate supply **and
acknowledge** they lose that right. So before the PayPal button works the buyer must tick:
> "I want the download now. I understand that once it is available I lose my 14-day right to cancel, and that this purchase is not refundable unless the file is faulty."

with a link to `pages/terms.html#downloads` (Terms, section 7 "Digital downloads").
- The browser sends `waiver: true` with `POST /api/shop/order`. The Worker refuses to make
  a PayPal order without it (400 `waiver_required`).
- **The consent is recorded:** the Worker stores `waiver:<PayPal order id>` in the USERS KV
  = `{ email, product, at (time), text: "v1-2026-10" }` for 90 days, and when the purchase
  is recorded (by the browser's capture call or by the webhook) copies `waiverAt` and
  `waiverText` onto the member's `purchases.<id>` record, where it stays.
- `text` is `WAIVER_TEXT_VERSION` in `worker.js`. If you ever change the tick-box wording
  (in `assets/clinic-guides.js`, `WAIVER`), change that version too, so each record says
  which wording the buyer agreed to.

**Order number on every copy.** Each download is stamped with its order number: the
buyer's PayPal transaction ID (the capture id, which is also on their PayPal receipt), or
`ADMIN-COPY` for your admin account. No name or email goes in the file.
- The Worker sends the number in the `X-Order-Ref` header of `/api/download/<id>`.
- **The stamp is done in the buyer's browser** (pdf-lib, loaded from cdnjs only when
  needed): top right of every page, 6 pt grey, "Licensed copy · Order <number> ·
  gpreasoning.uk · Not for redistribution", plus the PDF's Subject, Keywords and Author
  (Reasoning GP). **The file in R2 stays the clean master**: upload it unstamped by order.
- If pdf-lib can't load (blocked network) or fails, the buyer still gets the unstamped
  file: the download is never blocked.
- `GET /api/shop/purchases` also returns `orders: { <id>: <capture id> }`, and the card
  shows "Order <number>" under the Download button.

**Refund policy.** Downloads are **not refundable once they are available** (the buyer
consented to immediate supply), **except for a faulty file**: their rights under the
Consumer Rights Act 2015 are not affected, and for a faulty file or one not as described
you repair, replace or refund. You can still refund by hand in PayPal at any time (e.g.
for a faulty file). The webhook handles it: a **full refund or a chargeback (reversal)
removes** the handbook from their account; a **partial refund keeps** it.

### One-off setup
Everything below can be done in the Cloudflare and PayPal dashboards, with no command
line. (Wrangler commands are given as an alternative at the end.)

**A. PayPal (5 minutes).** You don't need a new plan or new app: the Live app whose client
id and secret are already in the Worker (`PAYPAL_CLIENT_ID`, `PAYPAL_SECRET`) can take
one-off payments too, and the site already has `paypalClientId` in `assets/site.js`.
1. Go to developer.paypal.com → **Apps & Credentials** → make sure **Live** is selected →
   open your app.
2. Under **Features**, check **Accept payments** is ticked (it normally is). Save if you
   changed anything.
3. Scroll to **Webhooks** → click your existing webhook (the one ending
   `/api/paypal/webhook`) → **Edit**. **Add** these three events and keep all the
   ones already ticked:
   - **Payment capture completed** (`PAYMENT.CAPTURE.COMPLETED`): a backup that unlocks
     the handbook if the buyer closed the page straight after paying.
   - **Payment capture refunded** (`PAYMENT.CAPTURE.REFUNDED`): a full refund removes
     the handbook from their account. (A partial refund keeps it.)
   - **Payment capture reversed** (`PAYMENT.CAPTURE.REVERSED`): a chargeback removes it.
4. Save. The **Webhook ID does not change**, so the `PAYPAL_WEBHOOK_ID` secret stays as
   it is.

**B. Cloudflare R2: the bucket and the files (10 minutes, skip any step already done).**
1. **Turn on R2** in the Cloudflare dashboard (left menu → **R2 Object Storage** →
   enable). The free tier (10 GB, free downloads) is far more than a few PDFs need.
   Cloudflare may ask for a card, even on the free tier.
2. **Create the bucket**: R2 → **Create bucket** → name **`rgp-downloads`** → Create.
   It is private by default; leave it that way (no public access, no custom domain).
3. **Rename each PDF on your computer first** to its exact R2 name from the table above
   (e.g. `sca-casebook-vol1-v1.0.pdf`). The Worker looks for that exact name, so a
   different name means "File not uploaded yet" for buyers.
4. **Upload**: R2 → **`rgp-downloads`** → **Upload** → choose the renamed files → Upload.
   Uploading again under the same name replaces a file.

**C. The Worker: paste the code and bind the bucket.**
1. Cloudflare dashboard → **Workers & Pages** → **shy-voice-2225** → **Edit code**.
2. Select all the code in the editor, delete it, **paste the whole of `backend/worker.js`**
   from this folder, then click **Deploy**. Your secrets, variables, KV bindings and cron
   triggers are kept: only the code changes.
3. Bind the bucket (once): **shy-voice-2225** → **Settings** → **Bindings** → **Add** →
   **R2 bucket** → Variable name **`DOWNLOADS`** (exactly, capitals) → bucket
   **`rgp-downloads`** → Save/Deploy. Without it downloads answer "downloads not
   configured" (503).
4. Re-upload the site to Cloudflare Pages (the new `pages/shop.html` and `assets/shop/`
   images, `assets/clinic-guides.js`, `assets/site.js`, the Clinic Guides pages, the Lab
   results page, the pricing and terms pages, `sitemap.xml` and the search index).

**D. Test with a real purchase (10 minutes, costs nothing in the end).**
1. On the live site, sign in with an ordinary account (**not** your admin account, which
   can always download). Open **Shop**. You should see the tick box and the PayPal
   button, greyed out.
2. Try the PayPal button without ticking: a note asks you to tick the box. Tick it: the
   button becomes active.
3. Pay the £20 with a real card or PayPal account. The button turns into **Download PDF**.
   Download: the button says "Preparing your copy…", then the file saves. Open it: the
   top right of every page reads "Licensed copy · Order <number> · …", and the number is
   the transaction ID on your PayPal receipt.
4. Sign out: the card shows **Sign in to buy**. Sign in again: **Download PDF** is back.
5. In PayPal (paypal.com → **Activity**), open the £20 payment → **Refund** → full amount.
   Within a minute or two, reload the page while signed in: the PayPal button is back
   and the download is refused. That proves the webhook works.
6. If the download did not unlock in step 3, or the refund did not remove it, see
   "If something goes wrong" below before going further.

**E. Remove the public copy (do not skip).** Once D works, **delete
`assets/downloads/*.pdf` from the site** and re-upload the site. Until you do, the old
file is still reachable at `/assets/downloads/Lab_Results_Handbook_v1.pdf` by anyone who
knows the address. The shop never sends buyers there; the file is used only on preview
and local copies and by your admin account. Never put paid files in the site folder
again: put them in R2. Keep the master copy of each PDF somewhere safe off the site.

**Alternative: Wrangler (command line).** Only if you deploy from this folder.
> ⚠️ `wrangler.toml` **still has placeholder KV ids** (`PASTE_USERS_KV_ID`, …). Paste the
> real ids first (`wrangler kv namespace list`), or a `wrangler deploy` fails or, worse,
> binds the wrong namespaces. The dashboard paste in C does not have this problem.
```bash
wrangler r2 bucket create rgp-downloads
wrangler r2 object put rgp-downloads/lab-results-handbook-v2.0.pdf --file=<path to the PDF> --content-type=application/pdf --remote
wrangler r2 object put rgp-downloads/sca-casebook-vol1-v1.0.pdf --file=<path to the PDF> --content-type=application/pdf --remote
wrangler r2 object put rgp-downloads/sca-communication-book-v1.0.pdf --file=<path to the PDF> --content-type=application/pdf --remote
wrangler deploy
```
`--remote` sends a file to Cloudflare rather than a local test copy. `wrangler.toml`
already has the `[[r2_buckets]]` block (`binding = "DOWNLOADS"`, `bucket_name = "rgp-downloads"`).

### If something goes wrong
- **Paid, but no download:** the owner lookup (`/api/admin/user` with no email) lists
  recent `payissue:` rows, e.g. `shop-capture-mismatch` or `signature-failed`. A
  signature failure means the webhook ID or app doesn't match (Step 7). The purchase is on
  the member's record as `purchases.<product id>` (owner lookup with their email). In an
  emergency you can refund them in PayPal and they buy again.
- **"File not uploaded yet" / 404:** the file in R2 is missing or its name is not exactly
  the R2 name in the table above.
- **"downloads not configured" / 503:** the `DOWNLOADS` R2 binding is missing (C.3).
- **The PayPal button stays grey:** the tick box is not ticked; that is by design.
- **The card says "Coming soon":** either `workerUrl` or `paypalClientId` is empty in
  `assets/site.js`, or the deployed Worker is an older version without the shop
  (paste and deploy `worker.js` again, C.2).
- **"Card checkout couldn't load":** PayPal's script was blocked by the network or a
  browser extension. The member can use a phone on mobile data, or email you.
- **A copy without the order number:** the buyer's network blocked cdnjs (pdf-lib), so
  they got the unstamped file. Nothing to fix; they can download again elsewhere.

### Updating a handbook to a new version
Buyers keep access to the newest version of the same edition. Upload the new PDF under a
**new name** (e.g. `lab-results-handbook-v2.1.pdf`), then in `worker.js` find
`const PRODUCTS = {` and change `r2Key` (the R2 file name) and `filename` (the name the
member's computer saves it as) on that product's line. Paste and deploy the Worker (C.2).
Update the page count and version on the Shop page (`pages/shop.html`) and, for the Lab
Results Handbook, in `governance/import_clinic_guides.py` (`GROUP_EXTRA`, then re-run the
importer). Delete the old file in R2 when you're happy.

### Adding another handbook
1. Rename the PDF to its R2 name and upload it to `rgp-downloads` (B.3–B.4).
2. In `worker.js`, add **one line** inside `const PRODUCTS = { … }`, for example:
   ```js
   'sca-casebook-2': { title: 'SCA Casebook Vol 2', price: '20.00', currency: 'GBP', r2Key: 'sca-casebook-vol2-v1.0.pdf', filename: 'Reasoning-GP-SCA-Casebook-Vol2-v1.0.pdf', type: 'application/pdf' },
   ```
   The first word (`sca-casebook-2`) is the product **id**. Only ids in this list can ever be
   bought or downloaded, and the price here is the price PayPal is asked for and checked
   against. Keep `currency: 'GBP'`.
3. Paste and deploy the Worker (C.2).
4. On `pages/shop.html`, copy a product card and change `data-cg-product`, `data-cg-title`,
   the images (in `assets/shop/`) and the text; move it out of "Coming soon".
   `assets/clinic-guides.js` does the rest. (`data-cg-size`, e.g. "2.6 MB", is optional.)

### Counts
Monthly numbers in the USERS KV (a number only: no account, no IP):
`buy:<id>:YYYY-MM` = purchases, `dl:<id>:YYYY-MM` = downloads, e.g.
`wrangler kv key get --binding USERS "buy:lab-handbook:2026-10" --remote`
(or Cloudflare dashboard → Storage & Databases → KV → the USERS namespace → search the key).
Each purchase and refund is also in the owner's plan log (`planlog:`), as
"purchase <id>" / "refund <id>".

## Collecting your signups / users
All users live in the **USERS** KV namespace. View them in the Cloudflare dashboard (Workers & Pages → KV), or `wrangler kv key list --binding USERS`.

---

## Referrals — "give a month, get a month"
Nothing to configure: the `/api/referral` endpoint works as soon as the Worker is
deployed. Redeploy with `wrangler deploy` after pulling this version.

**How it works**
- `GET /api/referral` issues (on first call) and returns the signed-in member's own
  code, e.g. `RGP-K7M2QP`, plus how many free months they have earned.
- `POST /api/referral {code}` claims a colleague's code: the claimer gets **30 days of
  Platinum**, and the code's owner gets **30 days added to their own plan**.
- The pricing page's single "Have a code?" box tries the access-code path first and
  falls back to referrals, so members don't have to know which kind they hold.

**The rules that protect you** (all enforced server-side, not in the browser):
- You cannot claim your own code.
- An account can claim **once, ever**.
- Only an account that has **never held paid access** can claim — so an existing
  subscriber cannot top themselves up with a friend's code.
- Credit is applied through the same `grantWindow()` used by access codes, but in
  **additive** mode. The distinction matters:
  - An **access code** must never shorten existing access, so it takes the *later* of
    the two expiries. A 7-day code redeemed by an annual member leaves them on 300 days,
    not 307.
  - A **referral credit** was earned on top of what the member already holds, so it
    *adds* to the end of their period. Three referrals on a 300-day account → 390 days.
- **Banking, for live subscribers.** A live PayPal subscription has no expiry at all
  (`tierUntil === null`), so there is nothing to add 30 days to. Those days are banked in
  `refCreditDays` and released by the webhook when the subscription ends — added after the
  already-paid period on CANCELLED, or granted as a fresh Platinum window on EXPIRED.
  Without this a subscriber's referrals would silently vanish.

  **Earned time therefore lives in two places** — a dated window in `tierUntil`, or banked
  days in `refCreditDays` — and every transition between them must convert. There are
  exactly three: a subscription **starting** (`bankRemaining()` folds the remaining window
  into the bank before `tierUntil` is cleared), **cancelling**, and **expiring** (both
  release the bank). `bankRemaining()` exists so that rule lives in one place: **if you
  ever add code that clears `tierUntil`, call it first**, or you will delete access the
  member earned. The free member who refers three colleagues and then subscribes is the
  likeliest path in the whole scheme, and it is exactly the one that breaks if you don't.
- Referrer credit is **capped at 3 months** (`REF_MAX_EARNED = 3`). After three successful
  claims the referrer earns nothing further, but their code keeps working — colleagues who
  use it still get their free month. Change the constant at the top of the referral block
  to adjust.

**Storage** — in the existing USERS KV, no new namespace:
- `ref:<CODE>` → owner's email (the lookup index)
- each user record gains `refCode`, `refEarned`, `refClaims[]`, `refClaimedFrom`, and
  `refCreditDays` (months banked while a subscription is live)

**Watch the cost.** Every claim gives away 60 days of Platinum in total (30 to each
side) and AI usage is metered to you. Check `refEarned` in KV occasionally, and if it is
being gamed, lower `REF_DAYS` or add the cap above — both are one-line changes at the top
of the referral block in `worker.js`.

---

## Costs (rough)
- Cloudflare Workers + KV: **free tier** covers a small site comfortably.
- AI: **pay per use** to Anthropic — set a monthly cap. Gate AI to paid tiers (already done: bronze gets the graceful "subscription required" fallback).
- PayPal: standard transaction fees; no monthly fee.

## Security notes
- Passwords are hashed with PBKDF2-SHA256 (100k iterations) + per-user salt; plaintext is never stored.
- The AI key and PayPal secret live only as Worker secrets — never in the browser.
- The webhook is signature-verified with PayPal before any tier change.
- This is a solid launch architecture. For scale you may later move KV → D1 (SQL), add email verification and password reset, and rate-limit `/api/ai`.
