# PayPal LIVE config — Reasoning GP
Collected during setup. Plan IDs go into site.js (RGP_CONFIG.paypalPlans)
and Cloudflare Worker vars (PLAN_*). Client ID also goes into site.js.
Secret + Webhook ID = Cloudflare only (never in site.js / never shared).

PayPal business account name shown at checkout: "Muslim Kids' Tarbiyah"
(optional: set a customer-facing/trading name to "Reasoning GP" in PayPal settings)

## Client ID
ASkO8Npsc_LwTMSZtzTYOARQLNm25eHaRNpRGivyOk98V4gSgzMjiBN0YIqAQhb9rEmuGV_GV8jTdoGD
(wired into assets/site.js RGP_CONFIG.paypalClientId)

## Launch mode: MONTHLY + YEARLY (all 6 plans wired; yearly toggle visible)

## Plan IDs (P-...)
- silver_monthly   = P-7W0981493D9643523NJFITGA
- silver_yearly    = P-5JJ39495BS015630PNJFJA3A
- gold_monthly     = P-3FU28600XR036331XNJFIV2I
- gold_yearly      = P-1YB945321J846421DNJFJBIY
- platinum_monthly = P-85Y58353NJ528450PNJFIXBQ
- platinum_yearly  = P-3EJ24467JK760462GNJFJBWQ

## Webhook ID (→ Cloudflare secret PAYPAL_WEBHOOK_ID)
9W130183MF308274U

## Still to do on PayPal/Worker side
- Worker secrets (Cloudflare): PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_WEBHOOK_ID
- Worker vars (all 6): PLAN_SILVER_MONTHLY / PLAN_SILVER_YEARLY / PLAN_GOLD_MONTHLY /
  PLAN_GOLD_YEARLY / PLAN_PLATINUM_MONTHLY / PLAN_PLATINUM_YEARLY = the P- ids below
- Webhook URL: https://shy-voice-2225.bassamomda.workers.dev/api/paypal/webhook
- Link Monzo Business as PayPal withdrawal bank for payouts

## Prices (for reference)
- Silver monthly: (pending)
