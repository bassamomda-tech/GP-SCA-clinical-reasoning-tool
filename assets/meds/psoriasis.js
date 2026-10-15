/* ============================================
   Medication Chooser — Psoriasis (topical)
   NICE CG153 · SPC
   Fixed lists (October 2026, Upload 114): each card's "conditions" and the topic's
   "safety" points are written out here; there are no patient factors and no scoring.
   ============================================ */
MedChooser.register('psoriasis', {
  title: 'Psoriasis — topical treatment selection',
  subtitle: 'Topical choice by body site, with escalation thresholds (NICE CG153).',
  guideline: 'NICE CG153 · SPC',


  safety: [
    {"tone":"amber","label":"Extensive (>10% BSA) / severe impact","text":"Extensive / topical-resistant disease — refer to dermatology for phototherapy or systemic therapy (methotrexate, ciclosporin, biologics)"},
    {"tone":"red","label":"Erythrodermic / pustular / unstable","text":"Erythrodermic or generalised pustular psoriasis — same-day dermatology referral / admission"},
    {"tone":"amber","label":"Joint pain / ?psoriatic arthritis","text":"Screen for psoriatic arthritis (PEST tool); refer to rheumatology if positive — early DMARDs prevent joint damage"},
    {"tone":"amber","label":"Cardiometabolic risk factors","text":"Psoriasis is linked to cardiometabolic disease — assess CVD risk, weight, and lifestyle"}
  ],

  drugs: [
    // -------- POTENT STEROID + VIT D (trunk/limb) --------
    {
      id:'steroid_vitd',
      name:'Potent steroid + vitamin D analogue',
      examples:'Calcipotriol/betamethasone (Dovobet/Enstilar)',
      step:'1st-line trunk / limbs',
      source:'NICE CG153 §1.2',
      sideEffects:'Skin atrophy with prolonged steroid use; vitamin D — local irritation, hypercalcaemia if excessive',
      monitor:'Steroid OD for up to 4 weeks then review; max vitamin D dose limits',
      counsel:'"A combined ointment for the patches on your body — a steroid plus a vitamin-D medicine. Use it once daily for up to a month; we then take a break from the steroid part."',
      detail:{
        'Dose': 'Combined product OD for up to 4 weeks; or apply potent steroid (AM) and vitamin D analogue (PM) separately',
        'Key teaching': 'NICE CG153 FIRST-LINE for trunk/limb plaques: potent corticosteroid + vitamin D analogue OD for up to 4 weeks. Then step to vitamin D analogue alone for maintenance.'
      },
      conditions: [
        {"kind":"avoid","label":"Face / flexures / genitals","text":"Face/flexures — potent steroid inappropriate; use mild steroid or calcineurin inhibitor"},
        {"kind":"favoured","label":"Trunk / limbs (plaque)","text":"Trunk/limb plaques — first-line per CG153"},
        {"kind":"note","label":"Concern about long-term steroids","text":"Steroid concern — time-limited (≤4 weeks) use then vitamin D maintenance"}
      ]
    },

    // -------- VIT D ALONE (maintenance) --------
    {
      id:'vitd',
      name:'Vitamin D analogue (maintenance)',
      examples:'Calcipotriol OD–BD',
      step:'Maintenance / steroid-sparing',
      source:'NICE CG153 §1.2',
      sideEffects:'Local irritation; respect maximum weekly dose',
      monitor:'Ongoing use; avoid exceeding dose limits',
      counsel:'"After the combined treatment settles things, this vitamin-D ointment keeps the patches under control without the steroid — good for longer-term use."',
      detail:{
        'Dose': 'Calcipotriol OD–BD within max weekly limits',
        'Key teaching': 'Maintenance/steroid-sparing option once a flare is controlled; can be used long-term within dose limits.'
      },
      conditions: [
        {"kind":"favoured","label":"Trunk / limbs (plaque)","text":"Trunk/limb maintenance after initial combined therapy"},
        {"kind":"favoured","label":"Concern about long-term steroids","text":"Avoids ongoing steroid — good maintenance choice"}
      ]
    },

    // -------- SCALP --------
    {
      id:'scalp_steroid',
      name:'Scalp: potent steroid (± vitamin D)',
      examples:'Betamethasone scalp application · combined gel',
      step:'1st-line scalp',
      source:'NICE CG153 §1.3',
      sideEffects:'As topical steroids; vehicle irritation',
      monitor:'OD up to 4 weeks; descaling agents adjunct',
      counsel:'"For the scalp, a steroid lotion or gel works best — and softening the scale first (with an oil or salicylic-acid product) helps it get through."',
      detail:{
        'Dose': 'Potent corticosteroid scalp prep OD up to 4 weeks; consider a combined calcipotriol/betamethasone gel; use a descaling/keratolytic agent for thick scale',
        'Key teaching': 'First-line for scalp psoriasis: potent steroid preparation. Add a vitamin D analogue or descaling agent as needed.'
      },
      conditions: [
        {"kind":"favoured","label":"Scalp","text":"Scalp psoriasis — potent steroid prep is first-line"}
      ]
    },

    // -------- FACE/FLEXURE --------
    {
      id:'face_flexure_tx',
      name:'Face/flexure: mild steroid or calcineurin inhibitor',
      examples:'Hydrocortisone 1% (short) · tacrolimus ointment',
      step:'1st-line delicate sites',
      source:'NICE CG153 §1.2',
      sideEffects:'Mild steroid — minimal; tacrolimus — transient burning, no atrophy',
      monitor:'Short steroid courses; calcineurin for ongoing control',
      counsel:'"On the face and skin folds we use a gentle steroid for short bursts, or a non-steroid cream for ongoing control, because the skin here is thin."',
      detail:{
        'Dose': 'Short-term mild/moderate steroid (≤2 weeks); calcineurin inhibitor (tacrolimus/pimecrolimus) for maintenance (off-label but recommended)',
        'Key teaching': 'Delicate sites need low-potency steroids for short courses; calcineurin inhibitors are the steroid-sparing maintenance option.'
      },
      conditions: [
        {"kind":"favoured","label":"Face / flexures / genitals","text":"Face/flexures — low-potency steroid (short) or calcineurin inhibitor"}
      ]
    },

    // -------- COAL TAR --------
    {
      id:'coal_tar',
      name:'Coal tar preparation',
      examples:'Coal tar cream / shampoo',
      step:'Alternative / adjunct',
      source:'NICE CG153',
      sideEffects:'Smell, staining, photosensitivity, folliculitis',
      monitor:'Tolerability',
      counsel:'"An older but effective treatment — it can be messy and has a smell, but suits some people, particularly for the scalp."',
      detail:{
        'Dose': 'Coal tar cream/ointment or shampoo (scalp)',
        'Key teaching': 'Alternative where vitamin D/steroid not suitable or as scalp adjunct; less cosmetically acceptable.'
      },
      conditions: [
        {"kind":"favoured","label":"Scalp","text":"Scalp — useful adjunct/alternative"},
        {"kind":"favoured","label":"Concern about long-term steroids","text":"Non-steroid option"}
      ]
    },

    // -------- REFERRAL --------
    {
      id:'referral',
      name:'Phototherapy / systemic (refer)',
      examples:'Narrowband UVB · methotrexate · ciclosporin · biologics',
      step:'Specialist (extensive / refractory)',
      source:'NICE CG153 §1.4–1.5',
      sideEffects:'Agent-specific; systemic monitoring required',
      monitor:'Dermatology-led',
      counsel:'"If the creams aren\'t enough or a lot of skin is affected, the dermatology team can offer light treatment or tablets/injections that work throughout the body."',
      detail:{
        'Dose': 'Specialist-determined',
        'Key teaching': 'Refer for extensive (>10% BSA), high-impact, or topical-resistant disease, nail disease impacting function, or suspected psoriatic arthritis.'
      },
      conditions: [
        {"kind":"favoured","label":"Extensive (>10% BSA) / severe impact","text":"Extensive / topical-resistant — phototherapy or systemic therapy"},
        {"kind":"favoured","label":"Failed optimised topical therapy","text":"Extensive / topical-resistant — phototherapy or systemic therapy"},
        {"kind":"favoured","label":"Joint pain / ?psoriatic arthritis","text":"Psoriatic arthritis — rheumatology + systemic DMARDs"},
        {"kind":"note","label":"Nail involvement","text":"Nail disease — often needs systemic therapy if impacting function"}
      ]
    }
  ],

  sources: [
    { label:'NICE CG153 — Psoriasis: assessment and management', url:'https://www.nice.org.uk/guidance/cg153' },
    { label:'NICE CG153 — psoriasis', url:'https://www.nice.org.uk/guidance/cg153' },
    { label:'BNF — Psoriasis / topical treatment', url:'https://bnf.nice.org.uk/treatment-summaries/psoriasis/' }
  ],
});
