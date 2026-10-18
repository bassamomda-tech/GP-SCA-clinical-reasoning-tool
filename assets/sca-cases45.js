/* ============================================================
   Reasoning GP — Case Library batch 45:
   "Skin & hair — manage it, or don't miss it"
   Four ORIGINAL dermatology cases. Each pairs a confident
   primary-care management plan with the honesty to name what
   evidence can and can't do — and one carries an explicit NICE
   NG12 suspected cancer pathway referral (the non-healing ear lesion). The other
   three have NO NG12 cancer link and none is invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases44.js.
   ============================================================ */

(function(){

  /* ============ 173. F2F — Male-pattern hair loss: what works, what's marketing ============ */
  const c173 = {
    id:'male-pattern-hair-loss', title:'"I\u2019ve spent a fortune on shampoos and supplements \u2014 just tell me what actually works"', type:'video', duration:12,
    meta:{ age:31, sex:'M', setting:'Video consultation \u2014 a young man worried about thinning hair.', system:'Dermatology \u2014 androgenetic alopecia: evidence, expectations & the mind behind it', checked:'October 2026' },
    brief:'Mr Jordan Ashby, 31, has noticed receding at the temples and thinning at the crown over two years. His father and grandfather were bald early. He has spent heavily on caffeine shampoos, biotin and "thickening" supplements, derma rollers and online "hair growth" kits, with no benefit, and arrives frustrated wanting "the truth about what works". The examinable task is to diagnose ANDROGENETIC ALOPECIA (male-pattern, pattern + family history) confidently, briefly EXCLUDE other causes (telogen effluvium, thyroid/iron issues, scarring alopecia, alopecia areata), give an HONEST evidence summary \u2014 what genuinely works (topical minoxidil, oral finasteride, with their realistic effects, time course and caveats, and the fact that neither can be prescribed on an NHS FP10 because both are listed in NHS Drug Tariff Part XVIIIA) versus the marketing (most shampoos/biotin/supplements in the absence of deficiency) \u2014 and, crucially, explore the EMOTIONAL impact and expectations driving the spend, supporting him whatever he chooses without either dismissing his distress or overselling treatment.',
    script:{
      opening:"(Frustrated, half-joking, rubs his hairline.) \"Right doc, I'll be honest — I've spent an absolute fortune. Caffeine shampoo, biotin, a derma roller, some online kit that promised regrowth. None of it's done a thing. My hair's going the same way my dad's did and it's really getting to me. Just tell me straight: what actually works, and what's a con?\"",
      facts:[
        { topic:"The hair loss", text:"\"It's going at the temples and the crown. Same as my dad and my grandad.\" \"Gradual. Two years or so. No patches.\" Not shedding in handfuls. Will tilt his head to show the crown on camera: \"There — see?\"" },
        { topic:"Scalp and health", text:"If asked: \"No, the scalp's fine\" — no itch, redness, scale, pain or scarring. No recent illness, surgery, crash diet or big stress. Feels well — no tiredness, weight change or feeling hot or cold." },
        { topic:"What he has tried", text:"Caffeine shampoo, biotin tablets, a \"hair vitamins\" supplement, a derma roller and an online \"regrowth kit\" (doesn't know what was in it). About £600 over 18 months. Never tried minoxidil or finasteride." },
        { topic:"Medicines and history", text:"No prescribed medicines. No steroids or bodybuilding supplements. No allergies. No past history of depression, but if asked about mood when hearing about finasteride side-effects: no previous low mood or suicidal thoughts." },
        { topic:"Family plans", text:"If asked: has a partner, Leah; they might try for a baby \"in a couple of years\". Not trying now." },
        { topic:"Social", text:"Sales rep — \"appearance matters in my job\". Non-smoker, drinks at weekends, goes to the gym." },
        { topic:"Impact and mood", text:"If asked how it affects him: \"Confidence, mostly. Photos, the mirror. I think I thought if I found the right product it would stop. Now I feel a bit stupid for spending so much.\" Checks it often: \"Not hours. I'm not depressed, just fed up with it.\"" },
        { topic:"How to play it", text:"Frustrated but good-humoured. Wants honesty, dislikes vague answers. If dismissed (\"it's only hair\"), become irritated: \"Easy for you to say.\" Ask \"How long before I'd know?\" and \"I've read scary stuff online about the tablet\" — wants a straight answer on finasteride side-effects. Ends: \"That's the first straight answer I've had.\"" }
      ],
      ice:{
        ideas:"\"It's my dad's genes — but there must be something that works if I find the right product.\"",
        concerns:"HIDDEN AGENDA — it is knocking his confidence at work and in photos, and he feels foolish about the money wasted; he has read frightening things about finasteride online.",
        expectations:"\"Just tell me straight: what works and what's a con.\""
      },
      cues:[
        "\"It's really getting to me.\" — invites exploring the impact.",
        "\"Now I feel a bit stupid for spending so much.\" — embarrassment to acknowledge, not judge.",
        "\"I've read scary stuff online.\" — wants honest side-effect information."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Diagnoses androgenetic alopecia confidently from the pattern (bitemporal recession + vertex thinning) and family history, without unnecessary investigations when typical' },
      { dom:'dg', text:'Briefly EXCLUDES mimics \u2014 telogen effluvium, iron/thyroid (ferritin/TFTs if diffuse shedding), alopecia areata, and scarring alopecia (which needs dermatology) \u2014 with a targeted history/examination' },
      { dom:'cm', text:'Gives an HONEST evidence summary of what works \u2014 topical minoxidil and oral finasteride \u2014 with realistic effect size, a realistic time course (minoxidil judged after at least 6 and possibly 12 months, BAD; finasteride a year or more, SPC), the maintenance/ongoing-use caveat, and finasteride’s sexual side-effects (may persist after stopping), mood/suicidal-ideation warning (MHRA Drug Safety Update April 2024: ask about depression first), PSA lowering and teratogenicity/handling' },
      { dom:'cm', text:'Names clearly what is mostly MARKETING (caffeine shampoos, biotin/supplements without deficiency, derma-rollers/laser) and mentions transplant/cosmetic options neutrally \u2014 and is clear these treatments cannot be prescribed on an NHS FP10 (NHS Drug Tariff Part XVIIIA): minoxidil is bought over the counter and finasteride obtained privately' },
      { dom:'ro', text:'Explores the EMOTIONAL impact (identity, confidence, mood, relationships), screens low mood/body-image preoccupation, and validates the distress without trivialising or over-medicalising' },
      { dom:'ro',   text:'Responds to his frustration and the wasted spend with empathy and respect \u2014 honest without being dismissive ("it\u2019s only hair") and supportive of his autonomy' },
      { dom:'ro',   text:'Sets realistic expectations and supports an informed choice (treat / cosmetic / accept), checking understanding rather than overselling a cure' },
      { dom:'cm',    text:'Safety-nets and follows up: realistic review timeframe for any treatment trial, when to return (new patches, scarring, scalp symptoms, low mood), signposting (reliable information, counselling if distress is significant), and an honest, supportive plan \u2014 evidence and empathy, not a hard sell' },
    ],
    worked:[
      { lbl:'Name it plainly', txt:'"Let me give you the honest version you asked for. What you\u2019ve got is male-pattern hair loss \u2014 the same gradual, patterned thinning your dad had. It\u2019s genetic and it\u2019s incredibly common; it\u2019s not a sign of anything wrong with your health."' },
      { lbl:'Quick check for other causes', txt:'"I\u2019ll just make sure there\u2019s nothing else going on \u2014 any sudden shedding all over, any smooth bald patches, scalp redness or scaling? \u2026 No. Then I don\u2019t think we need lots of tests; this is the classic pattern."' },
      { lbl:'What actually works', txt:'"Two things have real evidence: a solution called minoxidil you put on the scalp, and a tablet called finasteride. They slow the loss and can thicken things up a bit — but they’re slow: give the lotion at least six months, possibly a year, and the tablet a year or more to show what it can do; they work best started early, and only keep working while you use them. The tablet’s a bit more effective but can affect sex drive or function in a small number of men — about two in a hundred — occasionally even after stopping, and has been linked to low mood, so before anything else I’d ask whether you’ve ever had depression. It also lowers the PSA blood test, which matters if you ever have one. And I should be upfront: neither can be prescribed on the NHS, so the lotion is bought over the counter and the tablet comes through a private prescriber."' },
      { lbl:'What\u2019s marketing', txt:'"And the honest bad news on the money: caffeine shampoos, biotin and most \u2018growth\u2019 supplements don\u2019t have good evidence unless you\u2019re actually deficient, which is rare. The rollers and laser caps are weak at best. You weren\u2019t doing anything daft \u2014 the marketing is genuinely convincing."' },
      { lbl:'Explore the impact', txt:'"Can I ask how this is affecting you, honestly? It\u2019s clearly more than vanity \u2014 it\u2019s getting to you. \u2026 That matters, and you\u2019re not being silly. Hair loss young can knock your confidence hard, and we can take that seriously too."' },
      { lbl:'Support the choice + safety-net', txt:'"There\u2019s no wrong answer here \u2014 try a treatment, go cosmetic, or decide it\u2019s not worth the hassle; I\u2019ll support whatever you choose. If you try minoxidil or finasteride, take a photo now as a baseline, give it at least six months and we’ll review. And if your mood\u2019s taking a real hit, come back \u2014 that\u2019s worth tackling in its own right."' },
    ],
    learning:'Androgenetic alopecia (male-pattern hair loss) is a confident CLINICAL diagnosis \u2014 gradual patterned loss (bitemporal recession, vertex thinning) in a post-pubertal man, usually with family history and hair miniaturisation, needing little or no investigation when typical. Briefly exclude mimics: telogen effluvium (diffuse, often reversible post-stressor shedding), iron deficiency/thyroid disease (ferritin, TFTs if diffuse shedding), alopecia areata (smooth patches, exclamation-mark hairs), and SCARRING alopecia (erythema, scaling, lost follicular openings \u2014 irreversible, refer dermatology). The honest evidence: TOPICAL MINOXIDIL and ORAL FINASTERIDE are the two treatments that genuinely work \u2014 they slow loss and partially regrow but are slow (minoxidil judged after at least 6 and possibly 12 months, BAD 2016; finasteride a year or more, SPC), work best early, and only maintain benefit while continued; finasteride is more effective but carries sexual side-effects in a minority (about 2%, may persist after stopping), a depression/suicidal-ideation warning (MHRA Drug Safety Update April 2024, reinforced May 2026 — ask about mood history first, especially given his distress), lowers PSA, and is teratogenic/not for women, while minoxidil can cause irritation and initial shedding — and neither can be prescribed on an NHS FP10 (NHS Drug Tariff Part XVIIIA), so both are bought or obtained privately. Be straight that caffeine shampoos, biotin and most supplements (absent deficiency), and derma-rollers/laser, are largely marketing with little good evidence; mention transplant and cosmetic options neutrally. The real consultation, though, is the EMOTIONAL one: heavy spending and frustration signal genuine distress, as hair loss young can hit identity, confidence and mood \u2014 explore and validate the impact, screen low mood/body-image preoccupation, set realistic expectations, and support whatever informed choice he makes, neither trivialising ("it\u2019s only hair") nor overselling a cure.',
    knowledge:{
      guideline:'PCDS Hair Loss: Primary Care Treatment Pathway (Nov 2024) · BAD male pattern hair loss leaflet (2016) · MHRA Drug Safety Update (April 2024, reinforced May 2026) · finasteride 1 mg and minoxidil 5% SPCs · NHS Drug Tariff Part XVIIIA · NICE CG31 (body dysmorphic disorder) · alopecia differential',
      points:[
        { h:'Clinical diagnosis', t:'Male-pattern hair loss is diagnosed clinically: patterned bitemporal/vertex thinning, post-puberty, family history, hair miniaturisation. No tests needed when typical (PCDS Hair Loss pathway, Nov 2024); check the scalp for scarring, and if it cannot be seen clearly on camera, arrange a face-to-face look.' },
        { h:'Exclude mimics', t:'Telogen effluvium (diffuse shedding 2–6 months after a trigger, settling over 6–9 months), iron/thyroid (FBC, ferritin, TFTs only if diffuse or atypical, PCDS 2024), tinea capitis, alopecia areata (smooth patches, exclamation-mark hairs), and scarring alopecia (erythema/scaling/loss of follicular ostia \u2192 refer dermatology, irreversible).' },
        { h:'What works', t:'Topical minoxidil for men (5% solution 1 ml twice daily, licensed 18–49, or 5% foam twice daily per product directions; SPC) and oral finasteride (1 mg daily): slow loss, partial regrowth, benefit only while continued. Minoxidil: judge after at least 6 and possibly 12 months (BAD 2016). Finasteride: 3–6 months to stabilise, a year or more to show benefit; gains lost 9–12 months after stopping (SPC). Finasteride more effective but sexual side-effects in about 2% (BAD; may persist after stopping), depression/suicidal ideation (MHRA Drug Safety Update April 2024, reinforced May 2026 — ask about mood history; alert card; stop and seek advice if mood changes), lowers PSA, teratogenic, not for women.' },
        { h:'What is marketing', t:'Caffeine shampoos, biotin and most supplements (no benefit without deficiency; biotin can interfere with lab assays), derma-rollers/microneedling and low-level laser (weak/emerging evidence). Be honest rather than dismissive.' },
        { h:'NHS availability', t:'Treatment of androgenetic alopecia is considered cosmetic: finasteride 1 mg and minoxidil scalp preparations are listed in NHS Drug Tariff Part XVIIIA and cannot be prescribed on an NHS FP10; minoxidil is available to buy and finasteride privately — be clear about cost and access.' },
        { h:'Emotional impact', t:'Hair loss can significantly affect identity, confidence, mood and relationships, especially when young. Explore impact, screen low mood/body-image preoccupation (body dysmorphic disorder where preoccupation is marked, NICE CG31), validate, and offer support/counselling signposting where distress is significant.' },
        { h:'Never do', t:'Never trivialise ("it\u2019s only hair"); never oversell a cure; never recommend unevidenced products; never miss scarring alopecia or a reversible cause.' },
        { h:'Safety-net & follow-up', t:'Set a realistic review for any treatment trial (about six months, with baseline photos); advise return for new patches, scarring/scalp symptoms, or significant low mood; signpost reliable information and psychological support; support an informed, autonomous choice.' }
      ]
    }
  };

  /* ============ 174. F2F — Keloid scarring in a young Black woman: options and honesty ============ */
  const c174 = {
    id:'keloid-scar', title:'"It keeps growing back bigger every time someone treats it \u2014 can you just get rid of it?"', type:'video', duration:12,
    meta:{ age:24, sex:'F', setting:'Video consultation — raised, growing scars on the upper chest and an earlobe.', system:'Dermatology \u2014 keloid scarring: realistic options, honesty & cultural sensitivity', checked:'October 2026' },
    brief:'Miss Amara Bello, 24, of Nigerian heritage, has a firm, raised, itchy scar on her upper chest (from a healed spot) and a smaller one on an earlobe (from piercing). Both have grown beyond the original wound and one recurred larger after a previous excision elsewhere. She finds them itchy, sometimes tender, and is self-conscious \u2014 a wedding is coming up. She wants it "cut off and gone". The examinable task is to recognise KELOID scarring (growth beyond the wound margin, predilection in darker skin and at sites like chest/shoulders/earlobes, high recurrence), distinguish it from a hypertrophic scar, give an HONEST account of realistic options and their limits (intralesional steroids ± cryo, with their side effects of skin thinning and lightening that show more on darker skin; silicone; pressure earrings; specialist excision only when combined with adjuvant steroid injection or pressure; the high recurrence and worsening risk of simple excision alone, BAD keloids leaflet 2017), set expectations (control rather than cure, recurrence common), refer appropriately, and handle it with cultural sensitivity and respect for the distress \u2014 without promising a clean removal that the evidence cannot support.',
    script:{
      opening:"(Polite, a little exasperated; touches her chest and ear.) \"Thanks for seeing me. I've got these lumpy scars — this one on my chest started from a spot, and the one on my ear from a piercing. They're itchy and they've got bigger than the original mark. I had the chest one cut out before and it came back worse and bigger. I've got my sister's wedding in a few months — can you just cut it off properly this time?\"",
      facts:[
        { topic:"The scars", text:"Chest: started from a spot about three years ago, kept growing; cut out at a private clinic 18 months ago, came back within months \"wider than it was before they cut it\" — now about 4 cm, raised, shiny, darker than her skin. Earlobe: from a piercing two years ago, now a firm lump \"like a marble\". Will show both on camera." },
        { topic:"Symptoms", text:"\"They just itch, and the chest one's sometimes tender.\" Itch keeps her awake some nights. No bleeding, ulceration or discharge." },
        { topic:"Previous treatment", text:"\"I'm not sure. Nobody mentioned anything else\" — no steroid injections, silicone or pressure after the excision as far as she knows." },
        { topic:"Pregnancy", text:"\"Not at the moment. Why?\" Not pregnant, not breastfeeding; on the combined pill." },
        { topic:"History and medicines", text:"No other medical problems. Combined pill only. No allergies. Her mum has a keloid on her shoulder from a vaccination." },
        { topic:"Social", text:"Pharmacy student. Lives with her parents. Non-smoker. The wedding is in four months; she will be a bridesmaid in a strapless dress." },
        { topic:"Impact", text:"If asked: \"Everyone will see it in the photos. I'm so self-conscious about it, and the itching drives me mad.\" Wears high necklines. Her aunties comment on it." },
        { topic:"How to play it", text:"Hopeful at first that a better surgeon will fix it: \"I think they just didn't do it properly.\" If told honestly that cutting alone often makes it worse, go quiet: \"(Quiet.) So I'm stuck with it.\" Brightens if offered realistic options and a timeline: \"Would the injections work before the wedding?\" If the doctor promises it can be cut out cleanly, accept eagerly (the trap)." }
      ],
      ice:{
        ideas:"\"The last surgeon didn't do it properly. Cut out properly, it'll be gone.\"",
        concerns:"HIDDEN AGENDA — being looked at in her sister's wedding photos and comments from family; the constant itch; worried it will keep getting bigger.",
        expectations:"\"Cut it off properly this time, before the wedding.\""
      },
      cues:[
        "\"It came back worse and bigger.\" — the key history; invites the honest conversation about excision.",
        "\"My sister's wedding in a few months.\" — the deadline and the emotional weight.",
        "\"So I'm stuck with it.\" — disappointment to respond to with empathy."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises KELOID (growth beyond the wound margin, itch/tenderness, predilection in darker skin and at chest/earlobe/shoulder sites, recurrence) and distinguishes it from a hypertrophic scar (within wound margins, tends to regress)' },
      { dom:'ro', text:'Is HONEST that simple surgical excision alone has a high recurrence rate and can worsen/enlarge a keloid \u2014 directly addressing the "just cut it off" request rather than agreeing to it' },
      { dom:'cm', text:'Outlines realistic, control-focused options — intralesional corticosteroid (± cryotherapy), including its side effects (skin thinning, hypopigmentation more visible on darker skin), silicone gel/sheets, pressure devices (e.g. pressure earrings), and specialist excision only when combined with adjuvant steroid injection or pressure — and sets the expectation of control, not guaranteed cure, with common recurrence' },
      { dom:'cm', text:'Gives prevention advice for a keloid-prone individual (avoid non-essential trauma/piercings on prone sites, treat new lesions early, silicone/pressure after wounds) without blame' },
      { dom:'cm', text:'Refers appropriately (dermatology \u00b1 plastics for selected earlobe keloids with combined excision + adjuvant therapy) rather than attempting or promising simple removal' },
      { dom:'ro',   text:'Handles the consultation with CULTURAL SENSITIVITY and takes the cosmetic/emotional impact (wedding, self-consciousness, itch) seriously \u2014 neither minimising nor being discouraging' },
      { dom:'ro',   text:'Communicates the honest limits of treatment with empathy, acknowledges the previous recurrence, checks understanding, and supports realistic expectations' },
      { dom:'cm',    text:'Safety-nets and follows up: a clear management/referral plan with realistic timeframe relative to the wedding, symptom relief (itch) in the meantime, what to expect from treatment and recurrence, and review \u2014 honesty and support, not an over-promised clean removal' },
    ],
    worked:[
      { lbl:'Name it and validate', txt:'"What you\u2019ve got are keloid scars \u2014 scar tissue that overgrows beyond the original mark. They\u2019re common in people with skin like yours and at spots like the chest and earlobes, and they can be itchy and uncomfortable, so I understand why they\u2019re bothering you, especially with the wedding."' },
      { lbl:'The honest bit about cutting', txt:'"Here\u2019s the honest part, and it explains what happened last time: simply cutting a keloid out often makes it come back \u2014 sometimes bigger \u2014 because the new cut can keloid too. So \u2018just cutting it off\u2019 isn\u2019t the reliable fix it sounds like, and I don\u2019t want to set you up for the same disappointment."' },
      { lbl:'What we can realistically do', txt:'"What does help is treatments aimed at flattening and softening them and easing the itch \u2014 steroid injections, sometimes with freezing, silicone gel or sheets, and pressure earrings for the ear one. I should be upfront that the injections can thin the skin and leave a paler patch, which shows more on darker skin, so that’s something to weigh up with the specialist. If surgery\u2019s ever used, it has to be combined with these to stop it returning. The honest goal is good control, not a guaranteed clean cure \u2014 and they can recur."' },
      { lbl:'Prevention, no blame', txt:'"Because your skin is prone to this, it\u2019s worth avoiding extra piercings or non-essential procedures on areas like the chest and ears, and treating any new lumpy scar early. That\u2019s not you having done anything wrong \u2014 it\u2019s just how your skin heals."' },
      { lbl:'Refer + manage expectations re wedding', txt:'"I\u2019m going to refer you to the skin specialists \u2014 and for the earlobe, possibly the plastic surgery team who do combined treatment. I\u2019ll be honest that a few months may not fully flatten them before the wedding, but we can start treatment now to improve them and settle the itch."' },
      { lbl:'Symptom relief + safety-net', txt:'"In the meantime I can help with the itch, and silicone gel is worth starting. If a scar suddenly changes a lot, becomes painful, ulcerates or bleeds, come back. We\u2019ll go through the specialist plan together and keep your expectations realistic but hopeful."' },
    ],
    learning:'KELOID scarring is scar tissue that grows BEYOND the boundary of the original wound, often itchy or tender, with a strong predilection in people with darker skin (African, Caribbean, Asian heritage) and at sites such as the chest, shoulders, upper back, earlobes and jawline \u2014 distinguished from a HYPERTROPHIC scar, which stays within the wound margins and tends to regress. The central, examinable honesty is that simple surgical EXCISION ALONE has a high recurrence rate and can make a keloid worse/larger (because the fresh wound itself keloids), so the natural request to "just cut it off" must be addressed directly rather than agreed to; any surgery must be combined with adjuvant therapy (intralesional steroid, pressure, selected radiotherapy) under specialist care. Realistic options are control-focused: intralesional corticosteroid injections (± cryotherapy) to flatten/soften and reduce itch — with side effects of skin thinning and hypopigmentation that are more visible on darker skin — silicone gel/sheets, and pressure devices (e.g. pressure earrings), often combined with each other or with specialist excision (BAD keloids leaflet, 2017) \u2014 with the explicit expectation that the aim is control, not guaranteed cure, and that recurrence is common. Give prevention advice for a keloid-prone individual (avoid non-essential trauma/piercings on prone sites, treat new lesions early, silicone/pressure after wounds) without blame, and refer to dermatology (\u00b1 plastics for selected earlobe keloids). Throughout, handle the consultation with cultural sensitivity \u2014 keloids disproportionately affect people with darker skin \u2014 and take the cosmetic and emotional impact (here, an upcoming wedding and self-consciousness) seriously, communicating honest limits with empathy rather than minimising or over-promising.',
    knowledge:{
      guideline:'BAD patient information leaflet: Keloids (updated October 2017) · BAD leaflet: Intralesional steroid therapy · culturally competent dermatology',
      points:[
        { h:'Keloid vs hypertrophic', t:'Keloid grows beyond the original wound margin and can follow very minor injury (BAD 2017), may keep growing, itchy/tender, predilection in darker skin and at chest/shoulder/earlobe/jaw. Hypertrophic scar stays within margins and tends to regress.' },
        { h:'Excision alone fails', t:'Simple excision has a high recurrence rate and can enlarge a keloid; the new wound itself keloids (BAD 2017: excision alone is rarely successful). Surgery must be combined with adjuvant therapy (intralesional steroid, pressure, selected radiotherapy) under specialist care.' },
        { h:'Control-focused options', t:'Intralesional corticosteroid (triamcinolone, course of injections several weeks apart, dose per BNF, ± cryotherapy) — side effects: skin thinning, visible vessels and hypopigmentation, more visible on darker skin; silicone gel/sheets; pressure devices (pressure earrings); specialist excision only with adjuvant steroid or pressure. Aim is control/symptom relief; recurrence is common — set this expectation.' },
        { h:'Prevention', t:'For keloid-prone individuals: avoid non-essential trauma/piercings on prone sites, treat new lesions early, use silicone/pressure after unavoidable wounds. Frame as skin tendency, not fault.' },
        { h:'Refer appropriately', t:'Dermatology for intralesional therapy and combined management (injections are given face to face); plastics for selected earlobe keloids with combined excision + adjuvant treatment. Avoid attempting or promising simple removal in primary care.' },
        { h:'Cultural sensitivity', t:'Keloids disproportionately affect people with darker skin; consult with cultural awareness, take cosmetic/emotional impact seriously, acknowledge prior recurrence frustration, and be honest without being discouraging.' },
        { h:'Never do', t:'Never agree to simple excision as a cure; never over-promise clean removal; never minimise the cosmetic/emotional impact; never blame the patient.' },
        { h:'Safety-net & follow-up', t:'Clear management/referral plan with realistic timeframe; interim itch relief and silicone; expectations re control and recurrence; return if a scar changes markedly/ulcerates/bleeds; review the specialist plan.' }
      ]
    }
  };

  /* ============ 175. F2F — Fingers turning white in a teenager: Raynaud's vs connective tissue disease ============ */
  const c175 = {
    id:'raynauds-young-girl', title:'"Her fingers go dead white then blue in the cold \u2014 is it just poor circulation?"', type:'video', duration:12,
    meta:{ age:15, sex:'F', setting:'Video consultation \u2014 teenager with colour-changing fingers, mother present.', system:'Rheumatology / Paediatric-adolescent \u2014 Raynaud\u2019s: primary vs secondary', checked:'October 2026' },
    brief:'Ruby Hartnell, 15, brought by her mother. For two winters her fingers go sharply WHITE then BLUE then red on cold exposure, with numbness/tingling and pain on rewarming, settling fully in between. She is otherwise well, on no medication. The examinable task is to recognise RAYNAUD\u2019S PHENOMENON and \u2014 the key skill \u2014 distinguish PRIMARY Raynaud\u2019s (common, benign, typically young females, symmetrical, no tissue damage, normal nailfold capillaries, negative autoantibodies) from SECONDARY Raynaud\u2019s pointing to connective tissue disease (later onset, asymmetry, digital ulcers/pitting/gangrene, abnormal nailfold capillaries, associated features \u2014 arthralgia, rash, dry eyes/mouth, dysphagia, mouth ulcers, Raynaud\u2019s plus systemic symptoms, positive ANA), screening specifically for SCLERODERMA/SLE/mixed connective tissue disease. Primary Raynaud’s is managed with conservative measures (nifedipine is licensed only for adults, so in a 15-year-old it is off-label and started only with specialist advice, dose per BNFC, if attacks remain severe); secondary features warrant bloods (FBC, ESR, ANA ± ENA) and rheumatology referral. Hands, nailfolds, pulses and BP cannot be examined properly on video, so arrange a face-to-face examination. A digit that stays white or blue and will not rewarm, or new ulceration or necrosis, needs same-day assessment (BSR systemic sclerosis guideline 2024). The consultation must engage Ruby herself, offer her time on her own, and reassure the mother proportionately.',
    script:{
      opening:"(Mother, worried, speaks first.) \"Her fingers go completely dead white in the cold — then blue — and they really hurt when they warm up. My friend said it might be poor circulation, or is it something to do with her heart? She's 15, I just want to know it's nothing serious.\" (Ruby, quietly) \"It's annoying at school — PE outside is the worst.\"",
      facts:[
        { topic:"The attacks", text:"(Ruby) \"They go white, like dead, then blue. And when they warm up they go red and really hurt.\" Numb and tingly while white. Last 10–20 minutes. Two winters now. Triggered by cold, sometimes by holding a cold drink. (Ruby) \"Both hands. Mostly the same fingers each side.\" Toes sometimes too." },
        { topic:"Between attacks", text:"(Ruby) \"They go back to normal. No sores.\" No pits or ulcers on the fingertips, no tight or shiny skin, no swollen fingers. Will show her hands and fingertips on camera." },
        { topic:"Other symptoms", text:"(Ruby) \"No, none of that\" — no joint pains or swelling, no rashes (including on the face in sun), no mouth ulcers, no dry eyes or mouth, no trouble swallowing, no hair loss, no breathlessness, no fevers or weight loss, no tiredness beyond normal." },
        { topic:"Medicines and history", text:"(Mother) \"No, nothing.\" No regular medicines, no contraceptive pill, no ADHD medicines, no migraine treatment. Healthy, no heart problems. No allergies." },
        { topic:"Family", text:"If asked: Mum's sister \"has cold hands\". No lupus, scleroderma or rheumatoid arthritis in the family that they know of." },
        { topic:"Lifestyle", text:"Year 10 student. Doesn't smoke or vape (if asked alone: \"No, honestly\"). Mum's partner smokes outside. Drinks two energy drinks a day sometimes. Plays netball." },
        { topic:"If seen alone", text:"Happy to talk alone for a minute if offered. Nothing to disclose — no smoking, not sexually active, mood fine. Feels a bit embarrassed that teachers think she is making a fuss." },
        { topic:"How to play it", text:"Mum is anxious and does most of the talking; Ruby is shy but answers clearly if asked directly. If the doctor only talks to Mum, Ruby goes silent. (Mother) \"That it's a sign of something serious. You read things online. She's only 15.\" (Ruby) \"It's just annoying. I don't like making a fuss.\" Mum is reassured by a clear explanation and asks for a letter for school." }
      ],
      ice:{
        ideas:"(Mother) \"Poor circulation — or something with her heart.\" (Ruby) \"Just cold hands.\"",
        concerns:"HIDDEN AGENDA — (Mother) she has read online that it can be a sign of a serious disease and is frightened. (Ruby) PE in winter is painful and embarrassing; she doesn't want to make a fuss.",
        expectations:"(Mother) To be told it's nothing serious. (Ruby) Something practical for school — like being allowed gloves in PE."
      },
      cues:[
        "(Mother) \"Is it something to do with her heart?\" — the worry to address directly.",
        "(Ruby) \"PE outside is the worst.\" — the practical impact; invites talking to Ruby.",
        "(Ruby) \"I don't like making a fuss.\" — may under-report; check directly."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises RAYNAUD\u2019S PHENOMENON from the triphasic colour change (white\u2192blue\u2192red), cold/stress trigger, numbness/pain and full inter-attack recovery' },
      { dom:'dg', text:'Performs the KEY primary-vs-secondary distinction \u2014 actively screening for secondary red flags (later onset, asymmetry, digital ulcers/pits/gangrene, abnormal nailfold capillaries) and associated CTD features (arthralgia, skin tightening, rash, sicca symptoms, dysphagia, mouth ulcers, fatigue)' },
      { dom:'dg', text:'Recognises the reassuring PRIMARY picture in Ruby (teenage female, symmetrical, no tissue damage, no systemic features) and examines appropriately (digits, nailfold capillaries, pulses, BP) — arranging this face to face because it cannot be done properly on video' },
      { dom:'dg', text:'Orders proportionate investigations (FBC, ESR/CRP, ANA \u00b1 ENA) to support the diagnosis/catch early CTD, and refers to (paediatric/adolescent) rheumatology if any secondary feature or positive autoantibodies' },
      { dom:'cm', text:'Advises conservative management of primary Raynaud\u2019s (keep warm/gloves/hand warmers, avoid sudden cold, no smoking incl. household, limit caffeine, avoid precipitant drugs) and knows nifedipine is the usual first drug if severe but is off-label under 18 (adult-only licence) and started only with specialist advice, dose per BNFC' },
      { dom:'ro',   text:'Engages RUBY directly about the impact (school, PE, self-image) and supports her understanding, involving the mother without talking over the patient, and offering her time on her own' },
      { dom:'ro',   text:'Addresses the mother\u2019s "is it her heart/something serious?" honestly and proportionately \u2014 reassuring about benign primary Raynaud\u2019s while explaining the checks for the small chance of an underlying cause' },
      { dom:'cm',    text:'Safety-nets and follows up: what change would warrant review (ulcers/sores on fingertips, asymmetry, new joint/skin/systemic symptoms), with a same-day call for a finger that stays white or blue and will not rewarm (critical digital ischaemia), the plan for any bloods/referral, practical school advice, and review \u2014 proportionate care, neither over-investigating nor missing secondary disease' },
    ],
    worked:[
      { lbl:'Name it for both', txt:'(To Ruby first.) "What you\u2019re describing \u2014 fingers going white, then blue, then red and sore in the cold \u2014 has a name: Raynaud\u2019s. It\u2019s the small blood vessels in your fingers over-reacting to cold. It\u2019s really common, especially in younger women." (To mum) "It\u2019s not the heart."' },
      { lbl:'Screen for the serious type', txt:'"There are two kinds, and my main job today is to check which. Ruby \u2014 do you ever get sores or ulcers on your fingertips? Any joint pains, rashes, dry eyes or mouth, trouble swallowing, mouth ulcers, or feeling really tired? \u2026 None of that. Good \u2014 that\u2019s reassuring."' },
      { lbl:'Examine + explain', txt:'"Could you hold your hands up to the camera? … No sores or scars that I can see. I can’t check the little vessels at your nails, your pulses or blood pressure properly on video, so I’d like to see you in person for that. So far it all points to the common, harmless type — it doesn’t damage your fingers. I’ll do a couple of blood tests at the same visit just to be thorough."' },
      { lbl:'Practical self-help for Ruby', txt:'"The biggest helpers are practical: keep your whole self warm, not just hands \u2014 gloves, layers, hand warmers in your coat for PE. Avoid going from warm to freezing suddenly. Easy on the energy drinks and coffee, and definitely no smoking or vaping, which makes it worse."' },
      { lbl:'When medication helps', txt:'"If it ever gets bad enough to really interfere \u2014 lots of painful attacks \u2014 there’s a tablet called nifedipine that relaxes those vessels. It’s licensed for adults, so for someone your age we’d only use it with advice from a specialist. We don’t need it now, but it’s there if things step up."' },
      { lbl:'Safety-net', txt:'"If a finger ever stays white or blue and won’t warm up, call us the same day. Come back if Ruby gets any sores or ulcers on her fingertips, if one hand’s much worse than the other, or if any of those other things appear \u2014 joint pains, rashes, swallowing trouble. Otherwise this is very manageable. Ruby, anything you wanted to ask me yourself? And if you ever want to talk to me on your own about anything, that’s always fine."' },
    ],
    learning:'The triphasic digital colour change \u2014 WHITE (vasospasm) \u2192 BLUE (cyanosis) \u2192 RED (reperfusion) \u2014 on cold/stress exposure, with numbness/pain and full recovery between attacks, is RAYNAUD\u2019S PHENOMENON, and the key examinable skill is distinguishing PRIMARY from SECONDARY disease. PRIMARY (idiopathic) Raynaud\u2019s is common and benign: onset in the teens/twenties, typically female, symmetrical, with no tissue damage (no digital ulcers/pits/gangrene), normal nailfold capillaries, no systemic features, and negative autoantibodies/normal inflammatory markers. SECONDARY Raynaud\u2019s points to an underlying connective tissue disease (systemic sclerosis/scleroderma, SLE, mixed CTD) and is flagged by later onset (>30\u201340), asymmetry, severe attacks, digital ulcers/pitting scars/gangrene, abnormal nailfold capillaries, and associated features (arthralgia, skin tightening/puffiness, malar or photosensitive rash, dry eyes/mouth, dysphagia/reflux, mouth ulcers, hair loss, fatigue) \u2014 so screen these actively. Investigations are proportionate: examine hands, nailfolds, pulses and BP face to face (not possible on video); a purely primary picture with normal examination needs little, though FBC, ESR/CRP and ANA (\u00b1 ENA) reasonably support the diagnosis and catch early CTD; any secondary red flag or positive autoantibodies warrants these bloods and rheumatology referral. Manage primary Raynaud\u2019s conservatively first \u2014 keep the whole body warm (gloves, hand warmers, layers, avoid sudden cold), stop smoking (including household exposure), limit caffeine and avoid precipitant drugs — with nifedipine the usual first drug if attacks are frequent/severe (licensed for adults only, so off-label and specialist-advised under 18, dose per BNFC), reassuring that primary Raynaud’s does not damage the fingers while safety-netting for same-day assessment of a digit that will not rewarm or new ulceration/necrosis (BSR 2024). Engage the teenager directly about real-life impact (school, PE, self-image), offer her time on her own, and reassure the anxious parent proportionately.',
    knowledge:{
      guideline:'BSR guideline for the management of systemic sclerosis (2024) · EULAR systemic sclerosis recommendations (2023 update, international) · PCDS Raynaud’s phenomenon · GMC 0–18 years (2018) · primary vs secondary Raynaud’s',
      points:[
        { h:'Recognise Raynaud\u2019s', t:'Triphasic colour change (white\u2192blue\u2192red) of digits on cold/stress, with numbness/pain and full recovery between attacks. The label is easy; the primary-vs-secondary distinction is the skill.' },
        { h:'Primary (benign) features', t:'Onset teens/twenties, female, symmetrical, no tissue damage, normal nailfold capillaries, no systemic features, negative autoantibodies/normal inflammatory markers. Does not damage the fingers.' },
        { h:'Secondary red flags', t:'Later onset (>30\u201340), asymmetry, severe attacks, digital ulcers/pits/gangrene, abnormal nailfold capillaries, and CTD features (arthralgia, skin tightening, rash, sicca, dysphagia, mouth ulcers, fatigue) → suggest systemic sclerosis/SLE/MCTD (BSR 2024: most often systemic sclerosis).' },
        { h:'Proportionate investigation', t:'Primary picture: minimal tests, though FBC/ESR/CRP/ANA (± ENA) reasonable; examine hands, nailfold capillaries (dermatoscope), pulses and BP face to face — not by video. Secondary features or positive ANA \u2192 bloods + rheumatology (paediatric/adolescent) referral and follow-up.' },
        { h:'Conservative management', t:'Keep whole body and extremities warm (gloves, hand warmers, layers), avoid sudden cold, stop smoking (incl. household), limit caffeine, avoid precipitant drugs (some decongestants, beta-blockers, stimulants).' },
        { h:'Drug therapy', t:'For frequent/severe attacks affecting life, nifedipine (calcium-channel blocker) is the usual first drug and the only one licensed for Raynaud’s in the UK — for adults; under 18 it is off-label and started with specialist advice (dose per BNFC). Reserve for impact, not every case. A digit that stays white/blue or new ulceration/necrosis → same-day assessment (BSR 2024).' },
        { h:'Never do', t:'Never label "poor circulation" and stop; never skip the secondary CTD screen; never miss digital ulcers/asymmetry/abnormal nailfolds; never talk over the teenager.' },
        { h:'Safety-net & follow-up', t:'Same-day assessment if a digit stays white or blue and will not rewarm; review if fingertip ulcers/sores, asymmetry, or new joint/skin/systemic features appear; arrange any bloods/referral; give practical school/PE advice; engage the young person directly, offer time alone, and reassure the parent proportionately.' }
      ]
    }
  };

  /* ============ 176. F2F — Non-healing scaly lump on the ear: BCC/SCC and the sun-damage story (NICE NG12 skin, suspected cancer pathway) ============ */
  const c176 = {
    id:'ear-scaly-lump-scc', title:'"It\u2019s just a scab that won\u2019t heal \u2014 I keep knocking it. It\u2019ll sort itself out, won\u2019t it?"', type:'video', duration:12,
    meta:{ age:73, sex:'M', setting:'Video consultation \u2014 a long-standing non-healing lesion on the ear.', system:'Dermatology \u2014 keratinocyte skin cancer (SCC/BCC) & the urgent skin-cancer referral', checked:'October 2026' },
    brief:'Mr Stanley Frost, 73, retired greenkeeper, lifelong outdoor worker. A scaly, crusted lump on the upper rim (helix) of his right ear for ~4 months; it bleeds when knocked, scabs, partly heals and breaks down again \u2014 it has never fully healed. It is enlarging, slightly tender, with surrounding sun-damaged skin (actinic keratoses, solar elastosis). He has a fair complexion and decades of sun exposure, and previously had a "spot" frozen off his bald scalp. He attends mainly about something else and mentions the ear in passing, assuming it is just a knock that won\u2019t heal. The examinable task is to recognise a NON-HEALING, enlarging, bleeding lesion on a sun-exposed site as a likely keratinocyte skin cancer \u2014 squamous cell carcinoma (SCC) given the rapid growth, tenderness, crusting and breakdown, with basal cell carcinoma (BCC) in the differential \u2014 take the sun-damage/occupational history, look at the lesion on camera and then arrange a prompt face-to-face examination of the lesion and regional (pre/post-auricular, parotid, cervical) nodes (palpation is not possible on video), and refer under NICE NG12 (consider a suspected cancer pathway referral for a lesion suggesting SCC; routine referral for suspected BCC unless delay could matter because of site or size), while not being deflected by the "it\u2019s just a scab" minimisation.',
    script:{
      opening:"(Genial, dismissive about the ear, keen to talk about his knee.) \"I'm really here about my knee, doc, but the wife told me to show you this thing on my ear while I'm on. It's just a scab that won't heal — I keep catching it with my glasses and knocking it, so it never gets the chance. It'll sort itself out eventually, won't it? Don't make a fuss over it.\"",
      facts:[
        { topic:"The ear", text:"Upper rim of the right ear. \"About four months. It bleeds if I knock it, scabs over, looks like it's going, then it breaks down again. It's never actually healed.\" \"It's got a bit bigger, I'd say. It's tender if I press it.\" About the size of a fingernail now. Will turn his head to the camera; his wife can hold the phone close or send a photo." },
        { topic:"Lumps", text:"If asked about lumps in front of or behind the ear or in the neck: \"Not that I've noticed.\"" },
        { topic:"Sun and skin history", text:"\"Forty-odd years on golf courses. Never wore a hat much. Fair skin — I always burnt. I had a spot frozen off my head a while back.\" Rough, scaly patches on his bald scalp and backs of hands. No sunbeds." },
        { topic:"Medicines and history", text:"Amlodipine 5 mg for blood pressure, paracetamol for the knee. No immunosuppressants, no transplant. No allergies." },
        { topic:"The knee", text:"Right knee: aching for a year, worse on stairs and after walking the dog, stiff for 10 minutes in the morning, no locking or giving way, no swelling or redness. Wants \"something stronger than paracetamol\"." },
        { topic:"Social", text:"Retired greenkeeper, lives with wife, Margaret. Ex-smoker. A couple of pints at the club on Sundays. Plays bowls." },
        { topic:"How to play it", text:"Cheerful and dismissive about the ear. If the doctor pursues it: \"If you must. Go on then.\" If asked what his wife thinks: \"She keeps going on that it's been too long. I suppose… I've wondered. But I didn't want to be told something I don't want to hear.\" Prefers it straight: \"Straight. I'd rather know.\" At the word cancer: \"Cancer? From a scab?\" Then practical: \"What happens next, then?\" If the doctor only deals with the knee, go along happily (the trap)." }
      ],
      ice:{
        ideas:"\"It's a scab I keep knocking with my glasses.\"",
        concerns:"HIDDEN AGENDA — he has wondered for a while why it won't heal, and his wife is worried; he hasn't wanted to hear bad news.",
        expectations:"\"Sort my knee out, and tell me the ear's nothing.\""
      },
      cues:[
        "\"The wife told me to show you.\" — someone else is worried.",
        "\"It's never actually healed.\" — the key red flag, if asked.",
        "\"I suppose… I've wondered.\" — his own worry, if explored."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises a NON-HEALING, enlarging, crusting/bleeding lesion on a sun-exposed site in an older sun-damaged person as a likely keratinocyte skin cancer \u2014 not accepting the "just a scab I keep knocking" explanation' },
      { dom:'dg', text:'Differentiates the likely SCC (rapid growth, tender, scaly/crusted, non-healing ulcer/nodule \u2014 can metastasise) from BCC (pearly, telangiectasia, rolled edge, slow), and keeps keratoacanthoma/amelanotic melanoma in mind' },
      { dom:'dg', text:'Takes the SUN-DAMAGE/OCCUPATIONAL history (outdoor work, fair skin, cumulative UV, prior skin cancers, surrounding actinic keratoses/solar elastosis) recognising it raises pre-test probability' },
      { dom:'dg', text:'EXAMINES and documents the lesion (site, size, morphology) AND the draining regional nodes (pre-/post-auricular, parotid, cervical) given metastatic potential of ear SCC — recognising that a video call shows the lesion but cannot replace palpation, so arranging a prompt face-to-face examination' },
      { dom:'cm', text:'Applies NICE NG12: considers a suspected cancer pathway referral for a lesion suggesting SCC (and uses the suspected cancer pathway for suspected melanoma); knows BCC is usually routine, suspected cancer pathway only if delay could matter because of site or size — and refers this lesion on the suspected cancer pathway' },
      { dom:'ro',   text:'Takes the incidental "just a scab" mention seriously, gently corrects the "it\u2019ll heal itself" belief, and is honest about needing specialist assessment without alarming him into disengagement \u2014 while acknowledging the knee he came for' },
      { dom:'ro',   text:'Explains the referral and reasoning clearly and checks understanding, balancing honesty with reassurance (many are treatable, especially caught early)' },
      { dom:'cm',    text:'Safety-nets and follows up: makes the suspected cancer pathway referral promptly, gives sun-protection and actinic-keratosis advice, advises what change warrants sooner review (rapid growth, bleeding, new lesions/nodes), addresses the knee, confirms attendance, and reviews the outcome \u2014 urgent referral, not "leave it to heal"' },
    ],
    worked:[
      { lbl:'Take the "by the way" seriously', txt:'"I\u2019m glad your wife sent you in with it \u2014 we\u2019ll definitely sort your knee, but let me have a proper look at that ear on the camera first, because something that won\u2019t heal for months is worth taking seriously, not brushing off."' },
      { lbl:'Gently challenge the belief', txt:'"I know it feels like just a scab you keep knocking \u2014 but here\u2019s the thing: ordinary skin heals even if you catch it now and then. A spot that keeps breaking down and growing over months is behaving differently, and that\u2019s what I want a specialist to check."' },
      { lbl:'Take the sun history + examine', txt:'"You were a greenkeeper \u2014 years outdoors, fair skin, and you\u2019ve had a spot frozen off before. That all matters. Could you turn so I can see it on the camera? … There’s sun damage around it too. I can’t feel the glands around your ear and neck over video, so I’d like you in to the surgery today or tomorrow so I can examine it and them properly."' },
      { lbl:'Name the plan honestly', txt:'"I want to be straight with you. This has the features of a skin cancer \u2014 most likely the type called a squamous cell, which we don\u2019t leave to heal. I’m referring you on the suspected cancer pathway to the skin specialists, which means you’re seen quickly and should have an answer within about four weeks. The good news is these are very treatable, especially caught now."' },
      { lbl:'Sun advice + the knee', txt:'"Going forward, hat and high-factor sun cream on your ears, scalp and face \u2014 the damage is cumulative. Now \u2014 let\u2019s also properly sort that knee you came in about; I haven\u2019t forgotten it."' },
      { lbl:'Safety-net + follow-up', txt:'"If it grows quickly, bleeds a lot, or you notice new lumps near it before the appointment, contact us sooner. I\u2019ll get the referral done today and we\u2019ll go through whatever they find together. You did the right thing showing me."' },
    ],
    learning:'A lesion that does NOT HEAL over weeks to months \u2014 enlarging, crusting, bleeding and repeatedly breaking down \u2014 on a sun-exposed site in an older, sun-damaged person is a keratinocyte skin cancer until proven otherwise, and "I keep knocking it, so it won\u2019t heal" is the classic explanation that masks malignancy: normal skin and benign knocks heal, a persistently non-healing lesion does not. Differentiate SQUAMOUS CELL CARCINOMA (rapidly growing, often tender, scaly/crusted/keratotic nodule or non-healing ulcer on ear/face/scalp/lip/hands, with metastatic potential \u2014 especially ear and lip) from BASAL CELL CARCINOMA (slow, pearly, telangiectatic, rolled edge, central ulceration, rarely metastasises), keeping keratoacanthoma and amelanotic melanoma in mind; rapid growth, tenderness and breakdown favour SCC. Take the sun-damage/occupational history (outdoor work, fair skin, cumulative UV, prior skin cancers, surrounding actinic keratoses/solar elastosis), which raises pre-test probability, and look at the lesion on camera, then arrange a face-to-face examination documenting the lesion AND the draining regional nodes (pre-/post-auricular, parotid, cervical) given the metastatic risk of ear SCC. NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026): consider a suspected cancer pathway referral for a lesion suggesting SCC (suspected melanoma is also referred on the suspected cancer pathway); BCC is usually a routine referral, suspected cancer pathway only where delay could have a significant impact because of site or size — so this SCC-favouring lesion on a high-risk site (ear, BAD 2020) goes on the suspected cancer pathway. Nodes cannot be palpated on video, so arrange a prompt face-to-face examination. Do not be deflected by the incidental "just a scab" framing in a patient who came about something else: take the mention seriously, gently correct the "it\u2019ll heal itself" belief, refer on the suspected cancer pathway, give sun-protection/actinic-keratosis advice (BAD actinic keratosis guideline 2017), address the original complaint too, and safety-net \u2014 never "leave it to heal".',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) Suspected cancer — skin (SCC/BCC/melanoma) · BAD guidelines for cutaneous squamous cell carcinoma (2020) · BAD guidelines for actinic keratosis (2017) · keratinocyte cancer recognition',
      points:[
        { h:'Non-healing = red flag', t:'A lesion not healing over weeks\u2013months, enlarging, crusting, bleeding and breaking down on sun-exposed skin in an older/sun-damaged person is keratinocyte skin cancer until proven otherwise. Benign knocks heal; persistent non-healing does not.' },
        { h:'SCC features', t:'Rapidly growing, often tender, scaly/crusted/keratotic nodule or non-healing ulcer on ear/face/scalp/lip/hands; can metastasise (ear and lip are high-risk sites, BAD 2020) — examine regional nodes face to face and refer on the suspected cancer pathway.' },
        { h:'BCC features', t:'Slow-growing pearly papule with telangiectasia and a rolled edge, may ulcerate centrally (rodent ulcer); rarely metastasises. Usually routine referral.' },
        { h:'NICE NG12 skin criteria', t:'NICE NG12: suspicion of SCC → consider a suspected cancer pathway referral (NHS England Faster Diagnosis Standard: cancer confirmed or ruled out within 28 days of referral). Suspected melanoma → suspected cancer pathway (weighted 7-point checklist score 3 or more, or dermoscopy suggesting melanoma). BCC → consider routine referral; suspected cancer pathway only if there is particular concern that delay could have a significant impact because of site or size.' },
        { h:'Risk/sun-damage history', t:'Outdoor occupation, fair skin, cumulative UV, prior skin cancers and surrounding actinic keratoses/solar elastosis raise pre-test probability and support a suspected cancer pathway referral.' },
        { h:'Examine nodes', t:'For suspected SCC (especially ear/lip), examine and document the lesion and draining regional nodes (pre-/post-auricular, parotid, cervical) because of metastatic potential. A video call can show the lesion but cannot replace palpation — arrange a prompt face-to-face examination.' },
        { h:'Never do', t:'Never accept "just a scab I keep knocking" for a months-long non-healing lesion; never watch-and-wait a likely SCC; never skip the node exam; never let an incidental mention be dismissed; never miss the sun-damage context.' },
        { h:'Safety-net & follow-up', t:'Suspected cancer pathway skin referral (NICE NG12); sun-protection and actinic-keratosis advice (BAD 2017); advise sooner review for rapid growth/bleeding/new nodes; address the original complaint; confirm attendance and review the outcome.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c173, c174, c175, c176);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'male-pattern-hair-loss': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Jordan Ashby', age: '31 years \u00b7 male',
        pmh: ['2-year bitemporal recession + vertex thinning; strong family history (father/grandfather early balding)', 'Spent heavily on caffeine shampoos, biotin, supplements, derma roller, online "growth" kit \u2014 no benefit', 'Otherwise well; mood affected'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Just tell me straight what actually works and what\u2019s a con \u2014 it\u2019s really getting to me."',
        reason: 'Video consultation \u2014 worried about thinning hair.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Diagnose confidently', d:'Pattern + family history = androgenetic alopecia; no tests needed when typical.' },
        { t:'2\u20134',  h:'Exclude mimics', d:'Diffuse shedding? Patches? Scalp redness/scaling? Ferritin/TFTs if diffuse \u2014 else minimal work-up.' },
        { t:'4\u20137',  h:'Honest evidence', d:'Minoxidil + finasteride (effect, minoxidil ≥6–12 mo, finasteride ≥1 yr, maintain-only, side-effects, MHRA mood question); marketing = shampoos/biotin/rollers.' },
        { t:'7\u20139',  h:'Explore the impact', d:'Identity/confidence/mood; screen low mood/body-image; validate, don\u2019t trivialise.' },
        { t:'9\u201312', h:'Support the choice', d:'Treat/cosmetic/accept all valid; not on NHS FP10 (Drug Tariff Part XVIIIA); review trial at ~6 months; safety-net mood.' }
      ],
      wordPics: {
        fail: 'Either dismisses ("it\u2019s only hair, nothing to do") or recommends shampoos/biotin; ignores the emotional impact; oversells a "cure".',
        pass: 'Diagnoses androgenetic alopecia, gives honest minoxidil/finasteride vs marketing summary, and acknowledges the impact.',
        exc:  'Diagnoses confidently, briefly excludes mimics, gives an honest evidence summary (minoxidil/finasteride with realistic limits, the MHRA mood question and the Drug Tariff Part XVIIIA/private reality) versus marketing, explores and validates the emotional impact, sets realistic expectations, and supports an informed autonomous choice with mood safety-netting.'
      },
      avoid: [
        { dont:"\"It's only hair \u2014 there's really nothing to be done, try not to worry about it.\"", instead:'"This is clearly getting to you, and that matters. There are two treatments with real evidence, and I\u2019ll be honest about what they can and can\u2019t do."', why:'Dismissing the distress and the evidence-based options fails the patient on both the clinical and emotional fronts.' },
        { dont:'"Try a good biotin supplement and a caffeine shampoo \u2014 they help a lot of men."', instead:'"Honestly, those have little evidence unless you\u2019re deficient. Minoxidil and finasteride are the ones that actually work."', why:'Recommending unevidenced products wastes money and misleads \u2014 the opposite of the honesty he asked for.' },
        { dont:'"Finasteride will sort it out completely \u2014 you\u2019ll get your hair back."', instead:'"It can slow loss and partly regrow over a year or more, only while you keep taking it, and a minority get sexual or mood side-effects \u2014 let\u2019s be realistic."', why:'Overselling a cure sets up disappointment and omits material side-effects/limitations.' }
      ]
    },

    'keloid-scar': {
      ceg: ['Ethnicity, culture & diversity', 'New & undifferentiated presentations'],
      stem: {
        name: 'Amara Bello', age: '24 years \u00b7 female',
        pmh: ['Raised, itchy scars growing beyond original wounds \u2014 chest (from a spot) + earlobe (piercing)', 'Chest keloid recurred LARGER after previous excision elsewhere', 'Nigerian heritage; sister\u2019s wedding in a few months'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Can you just cut it off properly this time?"',
        reason: 'Video consultation \u2014 raised growing scars, self-conscious before a wedding.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise + validate', d:'Keloid (grows beyond wound, darker skin, upper chest and earlobe); take itch + cosmetic/emotional impact seriously.' },
        { t:'2\u20135',  h:'Honesty about excision', d:'Simple excision often recurs/worsens keloid \u2014 explains last time; address "just cut it off" directly.' },
        { t:'5\u20138',  h:'Realistic options', d:'Intralesional steroid ± cryo (thinning/lightening side effects), silicone, pressure earrings, specialist excision only with adjuvant steroid/pressure; control not cure.' },
        { t:'8\u201310', h:'Prevention, no blame', d:'Avoid extra piercings/elective procedures on prone sites; treat new lesions early; silicone/pressure after wounds.' },
        { t:'10\u201312',h:'Refer + expectations', d:'Dermatology \u00b1 plastics; honest re wedding timeframe; interim itch relief; safety-net.' }
      ],
      wordPics: {
        fail: 'Agrees to/arranges simple excision as a "cure"; over-promises clean removal before the wedding; minimises the cosmetic/emotional impact.',
        pass: 'Recognises keloid, explains why excision alone recurs/worsens, offers control-focused options and refers with realistic expectations.',
        exc:  'Recognises keloid vs hypertrophic, is honest that excision alone fails/worsens it, offers control-focused options (intralesional steroid with its thinning/lightening side effects, silicone, pressure, specialist excision with adjuvant therapy), gives non-blaming prevention advice, refers (dermatology \u00b1 plastics), and handles the distress with cultural sensitivity and realistic, hopeful expectations.'
      },
      avoid: [
        { dont:'"Sure, we can get it cut out and that\u2019ll be the end of it."', instead:'"Cutting it out alone often makes a keloid come back bigger \u2014 that\u2019s likely what happened last time. We aim to control it with injections, silicone and pressure, and any surgery must be combined with these."', why:'Promising a clean excisional cure ignores the high recurrence/worsening risk and repeats the prior failure.' },
        { dont:'"It\u2019s only a scar \u2014 it\u2019s nothing to worry about medically."', instead:'"It\u2019s itchy and it\u2019s affecting how you feel before the wedding \u2014 that matters, and we\u2019ll take it seriously."', why:'Minimising the cosmetic/emotional impact dismisses the patient\u2019s real concern and the cultural context.' },
        { dont:'"There\u2019s nothing that can be done about keloids."', instead:'"We can\u2019t always cure them, but we can often flatten, soften and de-itch them with the right treatments \u2014 let\u2019s get you to the specialists."', why:'Therapeutic nihilism is inaccurate and unhelpful \u2014 control-focused options genuinely help.' }
      ]
    },

    'raynauds-young-girl': {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Ruby Hartnell (mother present)', age: '15 years \u00b7 female',
        pmh: ['2 winters: digits go white\u2192blue\u2192red on cold, numb/tingling, painful on rewarming, full recovery between', 'No tissue damage, no systemic symptoms; otherwise well', 'Symmetrical; affects school/PE outdoors'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '(Mother) "Is it poor circulation? Her heart? I just want to know it\u2019s nothing serious."',
        reason: 'Video consultation \u2014 colour-changing fingers, teenager with mother.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Name Raynaud\u2019s', d:'Triphasic colour change = Raynaud\u2019s; reassure it\u2019s not the heart. Address Ruby directly.' },
        { t:'2\u20135',  h:'Primary vs secondary', d:'Screen ulcers/pits, asymmetry, arthralgia, rash, sicca, dysphagia, mouth ulcers, fatigue; look on camera, then arrange face-to-face exam of hands, nailfolds, pulses and BP.' },
        { t:'5\u20137',  h:'Proportionate tests', d:'Primary picture: FBC/ESR/ANA reasonable; secondary features/+ANA \u2192 rheumatology referral.' },
        { t:'7\u201310', h:'Conservative mgmt', d:'Keep whole body warm, gloves/hand warmers, avoid sudden cold, no smoking/vaping, limit caffeine; nifedipine only with specialist advice if severe (off-label under 18).' },
        { t:'10\u201312',h:'Engage Ruby + safety-net', d:'School/PE advice; same-day if a finger won’t rewarm; return for ulcers/asymmetry/new systemic features; offer Ruby time alone.' }
      ],
      wordPics: {
        fail: 'Labels "poor circulation" and stops; never screens for connective tissue disease; talks only to the mother; over- or under-investigates.',
        pass: 'Recognises Raynaud\u2019s, screens primary vs secondary, advises conservative management and refers if secondary features.',
        exc:  'Recognises Raynaud\u2019s, performs the primary-vs-secondary screen (red flags + nailfolds), orders proportionate bloods, advises conservative management (nifedipine only off-label with specialist advice if severe), engages Ruby directly about school/PE and offers her time alone, reassures the mother proportionately, and safety-nets for secondary features and same-day for a finger that will not rewarm.'
      },
      avoid: [
        { dont:'"It\u2019s just poor circulation, she\u2019ll grow out of it \u2014 nothing to worry about."', instead:'"It\u2019s Raynaud\u2019s, usually the harmless type, but I want to check there\u2019s no underlying cause \u2014 any finger ulcers, joint pains, rashes or dry eyes/mouth?"', why:'Labelling and stopping skips the essential primary-vs-secondary connective tissue disease screen.' },
        { dont:'(To mother only) "Has she had any other symptoms?"', instead:'(To Ruby) "Ruby, do you ever get sores on your fingertips, or joint pains? How\u2019s it affecting school?"', why:'Talking over a 15-year-old ignores her autonomy and the real-life impact she can best describe.' },
        { dont:'"Let\u2019s start her on nifedipine straight away to be safe."', instead:'"Conservative measures \u2014 staying warm, gloves, no smoking \u2014 come first; we’d only add a tablet if attacks are frequent and really affecting her, and at her age only with specialist advice."', why:'Medicating mild primary Raynaud’s first-line is disproportionate, and nifedipine is off-label under 18; conservative measures lead.' }
      ]
    },

    'ear-scaly-lump-scc': {
      ceg: ['Long-term conditions & cancer', 'Older adults'],
      stem: {
        name: 'Stanley Frost', age: '73 years \u00b7 male',
        pmh: ['\u26a0 Scaly, crusted, enlarging lump on R ear helix ~4 months \u2014 bleeds when knocked, never fully heals', 'Lifelong greenkeeper (outdoor), fair skin, surrounding actinic damage; prior scalp lesion frozen off', 'Attends mainly about his knee'],
        meds: ['Amlodipine', 'Atorvastatin'],
        allergy: 'NKDA',
        recent: '"It\u2019s just a scab that won\u2019t heal \u2014 I keep knocking it. It\u2019ll sort itself out, won\u2019t it? Don\u2019t make a fuss."',
        reason: 'Video consultation \u2014 (incidental) non-healing ear lesion; came about knee.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take the "by the way" seriously', d:'Don\u2019t brush off an incidental non-healing lesion; examine it properly. Acknowledge the knee too.' },
        { t:'2\u20134',  h:'Challenge "just a scab"', d:'Benign knocks heal; months of non-healing/growth behaves differently \u2014 needs specialist assessment.' },
        { t:'4\u20136',  h:'Sun history + exam', d:'Outdoor work, fair skin, prior lesion, actinic damage; view lesion on camera, then face-to-face exam of lesion + pre/post-auricular, parotid + cervical nodes.' },
        { t:'6\u20139',  h:'NICE NG12 suspected cancer pathway referral', d:'Features favour SCC → suspected cancer pathway skin referral, NICE NG12 (BCC routine unless site/size concern; melanoma suspected cancer pathway). Treatable, esp. early.' },
        { t:'9\u201312', h:'Sun advice + knee + safety-net', d:'Hat/SPF, AK advice; address the knee; sooner review if rapid growth/bleeding/new nodes; follow up.' }
      ],
      wordPics: {
        fail: 'Accepts "just a scab I keep knocking" and advises it\u2019ll heal; focuses only on the knee; no node exam; no referral \u2014 misses an SCC.',
        pass: 'Recognises a likely skin cancer, takes the sun history, arranges face-to-face examination of lesion and nodes, and refers on the suspected cancer pathway (NICE NG12).',
        exc:  'Takes the incidental lesion seriously, recognises a non-healing growing lesion as likely SCC, takes the sun/occupational history, arranges a prompt face-to-face examination of lesion and regional nodes, refers on the suspected cancer pathway (NICE NG12), gives sun-protection/AK advice, addresses the knee, and safety-nets \u2014 honest without alarming into disengagement.'
      },
      avoid: [
        { dont:'"If you keep knocking it, that\u2019s why it won\u2019t heal \u2014 leave it alone and it\u2019ll sort itself out."', instead:'"Ordinary skin heals even if you catch it; something growing and not healing for months behaves differently and needs checking urgently by a skin specialist."', why:'Accepting the "I keep knocking it" explanation for a months-long non-healing lesion misses a likely SCC.' },
        { dont:'(Focusing only on the presenting complaint) "Let\u2019s deal with your knee \u2014 the ear\u2019s probably nothing."', instead:'"We\u2019ll sort the knee, but this ear lesion needs a suspected cancer pathway skin referral first \u2014 it\u2019s the more important of the two today."', why:'Letting the incidental framing downgrade a red-flag lesion delays cancer diagnosis.' },
        { dont:'(No node exam) referring without examining the neck.', instead:'"I need to feel the glands around your ear and neck, which I can’t do on video, so come in and I’ll examine you in person — ear skin cancers can occasionally spread, so this guides how urgently we act."', why:'Omitting regional node examination misses metastatic spread of an ear SCC.' }
      ]
    }

  });

})();
