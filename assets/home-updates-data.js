/* ============================================================
   HOME PAGE — "Latest in UK primary care" panel: editable wording
   ------------------------------------------------------------
   This is the ONLY file to edit for the home-page updates panel's words.
   Titles and dates of NICE items are NOT kept here — they come word for word
   from assets/updates-nice-archive.js (newest first). This file adds:

   1. DO — the one-line "What to do" shown under each NICE item.
      ⚠ CLINICAL SIGN-OFF NEEDED: these lines were drafted from each archive
      entry's own summary and have not yet been clinically signed off.
      Key = '<code>|<date>' exactly as in updates-nice-archive.js.
      A NICE item with no line here is skipped by the home panel (it still
      appears on pages/updates.html). So when you add a new NICE entry to the
      archive, add its "What to do" line here too, or it will not show on the
      home page.

   2. SAFETY — the MHRA items shown under the NICE items ("Safety" list).
      Titles and dates are as on pages/updates.html (Editorial picks).
      Newer MHRA/UKHSA items that this device has already seen in the live
      feed are added above these automatically.

   After editing: bump ?v= on the <script src="assets/home-updates-data.js">
   tag in index.html.
   ============================================================ */
window.RGP_HOME_UPDATES = {

  DO: {
    'NG59|2026-07-29':   'Build the plan on exercise, self-management and staying active; treat low mood or distress in its own right.',
    'NG259|2026-07-29':  'Use NG259 (not CG146) for who to assess, which risk tool to use, when to treat and when to reassess.',
    'TA1175|2026-07-09': 'Consider it for adults when antiperspirants and oral antimuscarinics have failed, are contraindicated or not tolerated.',
    'NG88|2026-07-07':   'FBC for everyone; consider ferritin where iron deficiency is suspected or the result will change treatment.',
    'TA1166|2026-06-17': 'Uncontrolled on triple therapy with eosinophils ≥ 0.3 × 10⁹/L? Refer to respiratory to consider a biologic.',
    'NG126|2026-06-17':  'No anti-D up to 11+6 weeks; from 12+0 to 12+6 weeks offer at least 250 IU with medical or surgical management.'
  },

  SAFETY: [
    { src:'MHRA', date:'2026-06-17', title:'ACE inhibitors — delayed-onset angioedema',
      action:'Stop the ACE inhibitor immediately if angioedema is suspected — it can occur at any time, even after years of use.' },
    { src:'MHRA', date:'2026-04-30', title:'Nasal decongestant sprays — rebound congestion',
      action:'Advise patients not to use xylometazoline or oxymetazoline sprays for more than 5 consecutive days.' }
  ]
};
