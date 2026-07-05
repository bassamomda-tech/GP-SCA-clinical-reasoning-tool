/* ============================================
   Medication Chooser — Psoriasis (topical)
   NICE CG153 · CKS Psoriasis · BNF
   ============================================ */
MedChooser.register('psoriasis', {
  title: 'Psoriasis — topical treatment selection',
  subtitle: 'Topical choice by body site, with escalation thresholds (NICE CG153). Tick the presentation; cards re-tier live.',
  guideline: 'NICE CG153 · CKS · BNF',

  factors: [
    // Site
    { group:'Site', id:'trunk_limb', label:'Trunk / limbs (plaque)' },
    { group:'Site', id:'scalp', label:'Scalp' },
    { group:'Site', id:'face_flexure', label:'Face / flexures / genitals', note:'Thin skin' },
    { group:'Site', id:'nails', label:'Nail involvement' },

    // Type / severity
    { group:'Type & severity', id:'guttate', label:'Guttate (post-streptococcal)' },
    { group:'Type & severity', id:'extensive', label:'Extensive (>10% BSA) / severe impact' },
    { group:'Type & severity', id:'failed_topical', label:'Failed optimised topical therapy' },
    { group:'Type & severity', id:'unstable', label:'Erythrodermic / pustular / unstable', note:'Urgent referral' },

    // Comorbidity
    { group:'Comorbidity', id:'psa', label:'Joint pain / ?psoriatic arthritis', note:'Screen (PEST); refer' },
    { group:'Comorbidity', id:'cvd_metabolic', label:'Cardiometabolic risk factors' },

    // Demographics
    { group:'Demographics', id:'preg', label:'Pregnant or breastfeeding' },

    // Preference / context
    { group:'Preference / context', id:'steroid_concern', label:'Concern about long-term steroids' },
  ],

  flags: (f) => {
    const out = [];
    if (f.unstable) out.push({ tone:'red', text:'Erythrodermic or generalised pustular psoriasis — same-day dermatology referral / admission' });
    if (f.psa) out.push({ tone:'amber', text:'Screen for psoriatic arthritis (PEST tool); refer to rheumatology if positive — early DMARDs prevent joint damage' });
    if (f.extensive || f.failed_topical) out.push({ tone:'amber', text:'Extensive / topical-resistant disease — refer to dermatology for phototherapy or systemic therapy (methotrexate, ciclosporin, biologics)' });
    if (f.cvd_metabolic) out.push({ tone:'amber', text:'Psoriasis is linked to cardiometabolic disease — assess CVD risk, weight, and lifestyle' });
    return out;
  },

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
      evaluate(f){
        if (f.face_flexure && !f.trunk_limb) return { tier:'avoid', reasons:[{kind:'bad', text:'Face/flexures — potent steroid inappropriate; use mild steroid or calcineurin inhibitor'}] };
        const r = [];
        if (f.trunk_limb) r.push({kind:'good', text:'Trunk/limb plaques — first-line per CG153'});
        if (f.steroid_concern) r.push({kind:'neutral', text:'Steroid concern — time-limited (≤4 weeks) use then vitamin D maintenance'});
        return { tier: f.trunk_limb ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'First-line for plaque psoriasis on trunk/limbs'}] };
      }
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
      evaluate(f){
        const r = [];
        if (f.steroid_concern) r.push({kind:'good', text:'Avoids ongoing steroid — good maintenance choice'});
        if (f.trunk_limb) r.push({kind:'good', text:'Trunk/limb maintenance after initial combined therapy'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Maintenance / steroid-sparing'}] };
      }
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
      evaluate(f){
        if (!f.scalp) return { tier:'acceptable', reasons:[{kind:'neutral', text:'For scalp involvement'}] };
        return { tier:'preferred', reasons:[{kind:'good', text:'Scalp psoriasis — potent steroid prep is first-line'}] };
      }
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
      evaluate(f){
        if (!f.face_flexure) return { tier:'acceptable', reasons:[{kind:'neutral', text:'For face/flexures/genitals'}] };
        return { tier:'preferred', reasons:[{kind:'good', text:'Face/flexures — low-potency steroid (short) or calcineurin inhibitor'}] };
      }
    },

    // -------- COAL TAR --------
    {
      id:'coal_tar',
      name:'Coal tar preparation',
      examples:'Coal tar cream / shampoo',
      step:'Alternative / adjunct',
      source:'NICE CG153 · CKS',
      sideEffects:'Smell, staining, photosensitivity, folliculitis',
      monitor:'Tolerability',
      counsel:'"An older but effective treatment — it can be messy and has a smell, but suits some people, particularly for the scalp."',
      detail:{
        'Dose': 'Coal tar cream/ointment or shampoo (scalp)',
        'Key teaching': 'Alternative where vitamin D/steroid not suitable or as scalp adjunct; less cosmetically acceptable.'
      },
      evaluate(f){
        const r = [];
        if (f.scalp) r.push({kind:'good', text:'Scalp — useful adjunct/alternative'});
        if (f.steroid_concern) r.push({kind:'good', text:'Non-steroid option'});
        return { tier:'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Alternative / adjunct topical'}] };
      }
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
      evaluate(f){
        const r = [];
        if (f.extensive || f.failed_topical) r.push({kind:'good', text:'Extensive / topical-resistant — phototherapy or systemic therapy'});
        if (f.nails) r.push({kind:'neutral', text:'Nail disease — often needs systemic therapy if impacting function'});
        if (f.psa) r.push({kind:'good', text:'Psoriatic arthritis — rheumatology + systemic DMARDs'});
        const preferred = f.extensive || f.failed_topical || f.psa;
        return { tier: preferred ? 'preferred' : 'acceptable', reasons: r.length ? r : [{kind:'neutral', text:'Where topical therapy is insufficient'}] };
      }
    },
  ],

  sources: [
    { label:'NICE CG153 — Psoriasis: assessment and management', url:'https://www.nice.org.uk/guidance/cg153' },
    { label:'NICE CKS — Psoriasis', url:'https://cks.nice.org.uk/topics/psoriasis/' },
    { label:'BNF — Psoriasis / topical treatment', url:'https://bnf.nice.org.uk/treatment-summaries/psoriasis/' },
  ],
});
