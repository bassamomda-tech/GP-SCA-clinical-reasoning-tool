/* ============================================
   Medication Chooser — Atopic eczema
   NICE CG57 · BNF
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('eczema', {
  title: 'Atopic eczema — emollient & topical steroid selection',
  subtitle: 'Steroid potency matched to site and severity, plus calcineurin and infection management (NICE CG57).',
  guideline: 'NICE CG57 · BNF',


  safety: [
    {"tone":"amber","label":"Bacterial infection (weeping, crusting, pustules)","text":"Infected eczema — only use oral antibiotics (flucloxacillin) if unwell/spreading; most flares are not infected. Optimise steroid + emollient first."},
    {"tone":"red","label":"Eczema herpeticum (clustered, painful, punched-out)","text":"Eczema herpeticum — same-day oral/IV aciclovir; ophthalmology if near eye. Do NOT treat as bacterial only."},
    {"tone":"amber","label":"Steroid concern / phobia","text":"Address steroid phobia — explain fingertip units, that appropriate-potency short courses are safe, and undertreatment prolongs flares"}
  ],

  drugs: [
    // -------- EMOLLIENT --------
    {
      id:'emollient',
      name:'Emollient (leave-on + soap substitute)',
      examples:'Generous greasy emollient · ointment if dry',
      step:'All patients, always',
      source:'NICE CG57 §1.2',
      sideEffects:'Occasional stinging (try another); fire risk with paraffin-based on dressings/clothing',
      monitor:'Use in large amounts, frequently; continue when clear',
      counsel:'"This is the backbone — use it generously and often, even when the skin looks fine, and as a soap substitute. The greasier it is, the better it works, but pick one you\'ll actually use."',
      detail:{
        'Dose': 'Apply liberally several times daily and after washing; prescribe in large quantities (250–500 g/week if extensive)',
        'Key teaching': 'Foundation of all eczema care — reduces flares and steroid need. Apply emollient and steroid at different times.'
      },
      
    },

    // -------- MILD TCS --------
    {
      id:'mild_tcs',
      name:'Mild topical corticosteroid',
      examples:'Hydrocortisone 1%',
      step:'Face / flexures / mild',
      source:'NICE CG57 §1.3',
      sideEffects:'Minimal at this potency with correct use',
      monitor:'Short courses to flare control; fingertip-unit dosing',
      counsel:'"A gentle steroid cream for delicate areas like the face — use a thin layer once or twice a day on the flare until it settles, then stop."',
      detail:{
        'Dose': 'Apply OD–BD to active eczema; step down as it settles',
        'Key teaching': 'Match potency to site: MILD for face/flexures and in infants. Use the lowest potency that controls the flare.'
      },
      conditions: [
        {"kind":"favoured","label":"Face / eyelids","text":"Face/flexures — mild potency is the right match (skin is thin)"},
        {"kind":"favoured","label":"Flexures / neck","text":"Face/flexures — mild potency is the right match (skin is thin)"},
        {"kind":"favoured","label":"Mild (dryness, occasional itch)","text":"Mild eczema — mild TCS appropriate"},
        {"kind":"favoured","label":"Infant / young child","text":"Infant — start with mild potency"}
      ]
    },

    // -------- MODERATE/POTENT TCS --------
    {
      id:'strong_tcs',
      name:'Moderate / potent topical corticosteroid',
      examples:'Eumovate (mod) · Betnovate / Elocon (potent)',
      step:'Body / moderate–severe',
      source:'NICE CG57 §1.3',
      sideEffects:'Skin atrophy, striae, telangiectasia with prolonged/inappropriate use; perioral dermatitis on face',
      monitor:'Short bursts to control; review; avoid potent on face/flexures',
      counsel:'"A stronger steroid for tougher skin on the body during a flare — used as short bursts. It\'s safe used this way; the risk comes from long unbroken use on thin skin."',
      detail:{
        'Dose': 'Moderate/potent OD–BD for a flare (e.g. up to 1–2 weeks), then step down',
        'Key teaching': 'Match potency to site & severity: moderate/potent for trunk and limbs and thicker/lichenified skin. Avoid potent steroids on face/flexures.'
      },
      conditions: [
        {"kind":"avoid","label":"Face / eyelids","text":"Face/flexures — avoid potent steroids (atrophy); use mild TCS or a calcineurin inhibitor"},
        {"kind":"avoid","label":"Flexures / neck","text":"Face/flexures — avoid potent steroids (atrophy); use mild TCS or a calcineurin inhibitor"},
        {"kind":"caution","label":"Skin thinning from prior steroid use","text":"Existing skin thinning — limit potent steroid; consider calcineurin inhibitor"}
      ]
    },

    // -------- CALCINEURIN INHIBITOR --------
    {
      id:'tci',
      name:'Topical calcineurin inhibitor',
      examples:'Tacrolimus ointment · Pimecrolimus cream',
      step:'Steroid-sparing (face / flexures)',
      source:'NICE CG57 §1.3 · TA82',
      sideEffects:'Transient burning/stinging on application; no skin atrophy',
      monitor:'Second-line; sun protection advised',
      counsel:'"A non-steroid cream, useful for the face or for areas where we want to avoid steroids — it can sting for the first few days but won\'t thin the skin."',
      detail:{
        'Dose': 'Tacrolimus 0.03% (children)/0.1% (adults) or pimecrolimus BD; also for proactive twice-weekly use',
        'Key teaching': 'Second-line for moderate–severe eczema not controlled by/intolerant of steroids, especially face and flexures and to reduce steroid load.'
      },
      conditions: [
        {"kind":"favoured","label":"Frequent relapses (same sites)","text":"Frequent relapses — proactive twice-weekly use reduces flares"},
        {"kind":"favoured","label":"Skin thinning from prior steroid use","text":"Prior steroid atrophy — avoids further thinning"},
        {"kind":"note","label":"Infant / young child","text":"Young child — tacrolimus 0.03% (≥2y); specialist if younger"}
      ]
    },

    // -------- ANTIMICROBIAL --------
    {
      id:'antimicrobial',
      name:'Antibiotic / antiviral (infection)',
      examples:'Flucloxacillin (bacterial) · Aciclovir (herpeticum)',
      step:'Only if infected',
      source:'NICE CG57 · NG190',
      sideEffects:'Antibiotic GI upset; resistance with overuse',
      monitor:'Reassess; swab if not settling',
      counsel:'"Antibiotics are only needed if the eczema is genuinely infected — weeping, crusted or you feel unwell. For the cold-sore type infection, antiviral treatment is urgent."',
      detail:{
        'Dose': 'Oral flucloxacillin for significant bacterial infection; oral/IV aciclovir for eczema herpeticum',
        'Key teaching': 'Most flares are NOT infected — optimise steroid + emollient first. Reserve oral antibiotics for unwell/spreading infection. Herpeticum is an emergency.'
      },
      conditions: [
        {"kind":"favoured","label":"Bacterial infection (weeping, crusting, pustules)","text":"Significant bacterial infection — oral flucloxacillin"},
        {"kind":"favoured","label":"Eczema herpeticum (clustered, painful, punched-out)","text":"Eczema herpeticum — urgent antiviral (aciclovir)"}
      ]
    },

    // -------- SEDATING ANTIHISTAMINE --------
    {
      id:'antihistamine',
      name:'Sedating antihistamine (short-term)',
      examples:'Chlorphenamine · Hydroxyzine at night',
      step:'Adjunct (sleep during flare)',
      source:'NICE CG57 §1.6',
      sideEffects:'Sedation, anticholinergic effects',
      monitor:'Short-term only; not for routine itch control',
      counsel:'"A night-time antihistamine for a short spell can help sleep during a bad itchy flare — it doesn\'t treat the eczema itself though."',
      detail:{
        'Dose': 'Short-term (e.g. up to 2 weeks) at night during a severe flare',
        'Key teaching': 'NICE CG57: do NOT use routinely. A short course of a sedating antihistamine may help sleep in a severe flare. Non-sedating antihistamines are not routinely recommended.'
      },
      conditions: [
        {"kind":"note","label":"Severe (widespread, excoriation, sleep loss)","text":"Short-term night-time use if sleep badly disturbed by a severe flare"},
        {"kind":"note","label":"Acute flare","text":"Short-term night-time use if sleep badly disturbed by a severe flare"}
      ]
    }
  ],

  sources: [
    { label:'NICE CG57 — Atopic eczema in under 12s', url:'https://www.nice.org.uk/guidance/cg57' },
    { label:'NICE CG57 — atopic eczema in under 12s', url:'https://www.nice.org.uk/guidance/cg57' },
    { label:'NICE TA82 — Tacrolimus and pimecrolimus for atopic eczema', url:'https://www.nice.org.uk/guidance/ta82' },
    { label:'BNF — Topical corticosteroids', url:'https://bnf.nice.org.uk/treatment-summaries/topical-corticosteroids/' }
  ],
});
