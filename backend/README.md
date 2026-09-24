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
2. Subscribe to these events: **BILLING.SUBSCRIPTION.ACTIVATED, UPDATED, RE-ACTIVATED, CANCELLED, EXPIRED, SUSPENDED** and **PAYMENT.SALE.COMPLETED** (the worker handles all seven; without RE-ACTIVATED / SALE.COMPLETED a member whose retry succeeds after a suspension loses access when the grace period ends).
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
Use PayPal **Sandbox** while testing: in `worker.js` change `PAYPAL_API` to the sandbox URL, use sandbox app credentials, and test with sandbox buyer accounts. Switch back to live for launch.

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
