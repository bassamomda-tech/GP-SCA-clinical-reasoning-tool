/* ============================================================
   Reasoning GP — Case Library batch 45:
   "Skin & hair — manage it, or don't miss it"
   Four ORIGINAL dermatology cases. Each pairs a confident
   primary-care management plan with the honesty to name what
   evidence can and can't do — and one carries an explicit NICE
   NG12 skin-cancer 2WW (the non-healing ear lesion). The other
   three have NO NG12 cancer link and none is invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases44.js.
   ============================================================ */

(function(){

  /* ============ 173. F2F — Male-pattern hair loss: what works, what's marketing (no NG12) ============ */
  const c173 = {
    id:'male-pattern-hair-loss', title:'"I\u2019ve spent a fortune on shampoos and supplements \u2014 just tell me what actually works"', type:'video', duration:12,
    meta:{ age:31, sex:'M', setting:'Video consultation \u2014 a young man worried about thinning hair.', system:'Dermatology \u2014 androgenetic alopecia: evidence, expectations & the mind behind it' },
    brief:'Mr Jordan Pryce, 31, has noticed receding at the temples and thinning at the crown over two years. His father and grandfather were bald early. He has spent heavily on caffeine shampoos, biotin and "thickening" supplements, derm rollers and online "hair growth" kits, with no benefit, and arrives frustrated wanting "the truth about what works". The examinable task is to diagnose ANDROGENETIC ALOPECIA (male-pattern, pattern + family history) confidently, briefly EXCLUDE other causes (telogen effluvium, thyroid/iron issues, scarring alopecia, alopecia areata), give an HONEST evidence summary \u2014 what genuinely works (topical minoxidil, oral finasteride, with their realistic effects, time course and caveats) versus the marketing (most shampoos/biotin/supplements in the absence of deficiency) \u2014 and, crucially, explore the EMOTIONAL impact and expectations driving the spend, supporting him whatever he chooses without either dismissing his distress or overselling treatment.',
    script:{
      opening:'"Right doc, I\u2019ll be honest \u2014 I\u2019ve spent an absolute fortune. Caffeine shampoo, biotin, a derma roller, some online kit that promised regrowth. None of it\u2019s done a thing. My hair\u2019s going the same way my dad\u2019s did and it\u2019s really getting to me. Just tell me straight: what actually works, and what\u2019s a con?"',
      facts:[
        { topic:'Diagnose the pattern confidently', text:'Androgenetic alopecia (male-pattern hair loss) is a clinical diagnosis: gradual, patterned loss \u2014 bitemporal recession and vertex thinning \u2014 in a post-pubertal man, usually with a family history. Miniaturisation of hairs, not inflammation or scarring. His two-year history, pattern and strong family history fit. No investigations are needed to make the diagnosis when it is typical.' },
        { topic:'Briefly exclude the mimics', text:'A short screen prevents missing a treatable/different cause: telogen effluvium (diffuse shedding after illness/stress/surgery, often reversible), iron deficiency or thyroid disease (check ferritin and TFTs if any diffuse shedding or suggestive features), alopecia areata (discrete smooth patches, exclamation-mark hairs), and SCARRING alopecia (redness, scaling, loss of follicular openings \u2014 needs dermatology, as it is irreversible). Typical patterned loss with no red flags needs little or no work-up.' },
        { topic:'What genuinely works \u2014 honest evidence', text:'The two evidence-based treatments are TOPICAL MINOXIDIL (5% solution/foam) and ORAL FINASTERIDE (5\u03b1-reductase inhibitor, 1 mg). Honest framing: they slow loss and can partially regrow, work best earlier, take 3\u20136 months to show effect, and the benefit is maintained only while continuing \u2014 stop and the gain is lost over months. Finasteride is more effective but carries sexual side-effects in a minority (reduced libido/erectile/ejaculatory issues, usually reversible) and is a prescription with counselling; it is not licensed for women and is teratogenic (handling caution). Minoxidil can cause local irritation and initial shedding. (Note: in the NHS these are generally private/cosmetic; be clear about availability.)' },
        { topic:'What is mostly marketing', text:'Be straight: caffeine shampoos, biotin and most "hair growth" supplements have little or no good evidence in the absence of a deficiency (biotin only helps genuine biotin deficiency, which is rare \u2014 and can interfere with some lab assays). Derma-rollers/microneedling and low-level laser have weak/emerging evidence at best. Honesty here is the service he is actually asking for. Other options to mention neutrally: cosmetic measures, and surgical hair transplant (effective but costly, private).' },
        { topic:'The emotional layer \u2014 the real consultation', text:'HIDDEN AGENDA / core skill \u2014 the spend and frustration signal real DISTRESS: hair loss at 31 can hit identity, confidence, mood and relationships hard. Explore the impact ("how is this affecting you?"), screen low mood/body-image preoccupation, and validate it \u2014 do not trivialise ("it\u2019s only hair") nor over-medicalise. The aim is an informed, supported decision, with realistic expectations, whether he opts for treatment, cosmetic approaches or acceptance.' },
        { topic:'What he needs', text:'Officially: the truth about what works. What he needs: a confident diagnosis of androgenetic alopecia, brief exclusion of mimics, an HONEST evidence summary (minoxidil/finasteride with realistic effects, time course, side-effects, ongoing-use caveat, and NHS availability) versus the marketing he has been sold, exploration and validation of the emotional impact, and support for whatever choice he makes \u2014 neither dismissive nor overselling.' },
      ],
      ice:{
        ideas:'There must be a product that "works"; he just hasn\u2019t found the right one yet (having tried shampoos/supplements/kits).',
        concerns:'HIDDEN AGENDA \u2014 real distress about losing his hair young: identity, confidence, mood; frustration and embarrassment at money wasted; following his father\u2019s pattern.',
        expectations:'A straight answer on what works and what\u2019s a con. What he needs: honest evidence (minoxidil/finasteride vs marketing), realistic expectations, and his distress explored and validated.'
      },
      cues:['Bitemporal recession + vertex thinning over 2 years + strong family history at 31 \u2014 clinical androgenetic alopecia; diagnose confidently.','Heavy spend on shampoos/biotin/supplements/kits with no benefit \u2014 mostly marketing; he\u2019s asking for honesty about evidence.','"It\u2019s really getting to me" \u2014 emotional impact on a young man\u2019s identity/confidence; explore and validate, don\u2019t trivialise.']
    },
    checkpoints:[
      { dom:'tasks', text:'Diagnoses androgenetic alopecia confidently from the pattern (bitemporal recession + vertex thinning) and family history, without unnecessary investigations when typical' },
      { dom:'tasks', text:'Briefly EXCLUDES mimics \u2014 telogen effluvium, iron/thyroid (ferritin/TFTs if diffuse shedding), alopecia areata, and scarring alopecia (which needs dermatology) \u2014 with a targeted history/examination' },
      { dom:'tasks', text:'Gives an HONEST evidence summary of what works \u2014 topical minoxidil and oral finasteride \u2014 with realistic effect size, 3\u20136-month time course, the maintenance/ongoing-use caveat, and finasteride\u2019s sexual side-effects and teratogenicity/handling' },
      { dom:'tasks', text:'Names clearly what is mostly MARKETING (caffeine shampoos, biotin/supplements without deficiency, derma-rollers/laser) and mentions transplant/cosmetic options neutrally \u2014 and is clear these treatments are generally private/cosmetic on the NHS' },
      { dom:'tasks', text:'Explores the EMOTIONAL impact (identity, confidence, mood, relationships), screens low mood/body-image preoccupation, and validates the distress without trivialising or over-medicalising' },
      { dom:'rto',   text:'Responds to his frustration and the wasted spend with empathy and respect \u2014 honest without being dismissive ("it\u2019s only hair") and supportive of his autonomy' },
      { dom:'rto',   text:'Sets realistic expectations and supports an informed choice (treat / cosmetic / accept), checking understanding rather than overselling a cure' },
      { dom:'gs',    text:'Safety-nets and follows up: realistic review timeframe for any treatment trial, when to return (new patches, scarring, scalp symptoms, low mood), signposting (reliable information, counselling if distress is significant), and an honest, supportive plan \u2014 evidence and empathy, not a hard sell' },
    ],
    worked:[
      { lbl:'Name it plainly', txt:'"Let me give you the honest version you asked for. What you\u2019ve got is male-pattern hair loss \u2014 the same gradual, patterned thinning your dad had. It\u2019s genetic and it\u2019s incredibly common; it\u2019s not a sign of anything wrong with your health."' },
      { lbl:'Quick check for other causes', txt:'"I\u2019ll just make sure there\u2019s nothing else going on \u2014 any sudden shedding all over, any smooth bald patches, scalp redness or scaling? \u2026 No. Then I don\u2019t think we need lots of tests; this is the classic pattern."' },
      { lbl:'What actually works', txt:'"Two things have real evidence: a solution called minoxidil you put on the scalp, and a tablet called finasteride. They slow the loss and can thicken things up a bit \u2014 but they take three to six months, work best started early, and only keep working while you use them. The tablet\u2019s a bit more effective but can affect sex drive or function in a small number of men, so we\u2019d talk that through."' },
      { lbl:'What\u2019s marketing', txt:'"And the honest bad news on the money: caffeine shampoos, biotin and most \u2018growth\u2019 supplements don\u2019t have good evidence unless you\u2019re actually deficient, which is rare. The rollers and laser caps are weak at best. You weren\u2019t doing anything daft \u2014 the marketing is genuinely convincing."' },
      { lbl:'Explore the impact', txt:'"Can I ask how this is affecting you, honestly? It\u2019s clearly more than vanity \u2014 it\u2019s getting to you. \u2026 That matters, and you\u2019re not being silly. Hair loss young can knock your confidence hard, and we can take that seriously too."' },
      { lbl:'Support the choice + safety-net', txt:'"There\u2019s no wrong answer here \u2014 try a treatment, go cosmetic, or decide it\u2019s not worth the hassle; I\u2019ll support whatever you choose. If you try minoxidil or finasteride, give it a few months and we\u2019ll review. And if your mood\u2019s taking a real hit, come back \u2014 that\u2019s worth tackling in its own right."' },
    ],
    learning:'Androgenetic alopecia (male-pattern hair loss) is a confident CLINICAL diagnosis \u2014 gradual patterned loss (bitemporal recession, vertex thinning) in a post-pubertal man, usually with family history and hair miniaturisation, needing little or no investigation when typical. Briefly exclude mimics: telogen effluvium (diffuse, often reversible post-stressor shedding), iron deficiency/thyroid disease (ferritin, TFTs if diffuse shedding), alopecia areata (smooth patches, exclamation-mark hairs), and SCARRING alopecia (erythema, scaling, lost follicular openings \u2014 irreversible, refer dermatology). The honest evidence: TOPICAL MINOXIDIL and ORAL FINASTERIDE are the two treatments that genuinely work \u2014 they slow loss and partially regrow, take 3\u20136 months, work best early, and only maintain benefit while continued; finasteride is more effective but carries sexual side-effects in a minority and is teratogenic/not for women, while minoxidil can cause irritation and initial shedding \u2014 and on the NHS these are generally private/cosmetic. Be straight that caffeine shampoos, biotin and most supplements (absent deficiency), and derma-rollers/laser, are largely marketing with little good evidence; mention transplant and cosmetic options neutrally. The real consultation, though, is the EMOTIONAL one: heavy spending and frustration signal genuine distress, as hair loss young can hit identity, confidence and mood \u2014 explore and validate the impact, screen low mood/body-image preoccupation, set realistic expectations, and support whatever informed choice he makes, neither trivialising ("it\u2019s only hair") nor overselling a cure. This presentation has no NICE NG12 cancer link and none should be invented.',
    knowledge:{
      guideline:'Androgenetic alopecia management \u00b7 minoxidil/finasteride evidence \u00b7 alopecia differential (no NG12 link)',
      points:[
        { h:'Clinical diagnosis', t:'Male-pattern hair loss is diagnosed clinically: patterned bitemporal/vertex thinning, post-puberty, family history, hair miniaturisation. No tests needed when typical.' },
        { h:'Exclude mimics', t:'Telogen effluvium (diffuse post-stressor shedding), iron/thyroid (ferritin, TFTs), alopecia areata (smooth patches, exclamation-mark hairs), and scarring alopecia (erythema/scaling/loss of follicular ostia \u2192 refer dermatology, irreversible).' },
        { h:'What works', t:'Topical minoxidil (5%) and oral finasteride (1 mg): slow loss, partial regrowth, 3\u20136 months to effect, benefit only while continued. Finasteride more effective but sexual side-effects in a minority (usually reversible), teratogenic, not for women.' },
        { h:'What is marketing', t:'Caffeine shampoos, biotin and most supplements (no benefit without deficiency; biotin can interfere with lab assays), derma-rollers/microneedling and low-level laser (weak/emerging evidence). Be honest rather than dismissive.' },
        { h:'NHS availability', t:'Treatment of androgenetic alopecia is generally considered cosmetic and not routinely NHS-funded; minoxidil is available to buy and finasteride privately \u2014 be clear about cost and access.' },
        { h:'Emotional impact', t:'Hair loss can significantly affect identity, confidence, mood and relationships, especially when young. Explore impact, screen low mood/body-image preoccupation, validate, and offer support/counselling signposting where distress is significant.' },
        { h:'Never do', t:'Never trivialise ("it\u2019s only hair"); never oversell a cure; never recommend unevidenced products; never miss scarring alopecia or a reversible cause; never invent an NG12 cancer pathway where none applies.' },
        { h:'Safety-net & follow-up', t:'Set a realistic review for any treatment trial; advise return for new patches, scarring/scalp symptoms, or significant low mood; signpost reliable information and psychological support; support an informed, autonomous choice.' }
      ]
    }
  };

  /* ============ 174. F2F — Keloid scarring in a young Black woman: options and honesty (no NG12) ============ */
  const c174 = {
    id:'keloid-scar', title:'"It keeps growing back bigger every time someone treats it \u2014 can you just get rid of it?"', type:'video', duration:12,
    meta:{ age:24, sex:'F', setting:'Video consultation \u2014 a raised, growing scar on the chest/earlobe.', system:'Dermatology \u2014 keloid scarring: realistic options, honesty & cultural sensitivity' },
    brief:'Miss Amara Bello, 24, of Nigerian heritage, has a firm, raised, itchy scar on her upper chest (from a healed spot) and a smaller one on an earlobe (from piercing). Both have grown beyond the original wound and one recurred larger after a previous excision elsewhere. She finds them itchy, sometimes tender, and is self-conscious \u2014 a wedding is coming up. She wants it "cut off and gone". The examinable task is to recognise KELOID scarring (growth beyond the wound margin, predilection in darker skin and at sites like chest/shoulders/earlobes, high recurrence), distinguish it from a hypertrophic scar, give an HONEST account of realistic options and their limits (intralesional steroids \u00b1 cryo, silicone, pressure earrings, combination approaches; the high recurrence and worsening risk of simple excision alone), set expectations (control rather than cure, recurrence common), refer appropriately, and handle it with cultural sensitivity and respect for the distress \u2014 without promising a clean removal that the evidence cannot support.',
    script:{
      opening:'"Thanks for seeing me. I\u2019ve got these lumpy scars \u2014 this one on my chest started from a spot, and the one on my ear from a piercing. They\u2019re itchy and they\u2019ve got bigger than the original mark. I had the chest one cut out before and it came back worse and bigger. I\u2019ve got my sister\u2019s wedding in a few months \u2014 can you just cut it off properly this time?"',
      facts:[
        { topic:'Recognise keloid vs hypertrophic scar', text:'KELOID: scar tissue that grows BEYOND the boundaries of the original wound, often continues to grow, may be itchy/tender, and has a strong predilection in people with darker skin (African, Caribbean, Asian heritage) and at certain sites (chest, shoulders, upper back, earlobes, jawline). A HYPERTROPHIC scar stays within the wound margins and tends to regress over time. The growth beyond the wound and recurrence-larger-after-excision here are classic keloid.' },
        { topic:'Honesty about excision \u2014 the key teaching', text:'CORE POINT \u2014 simple surgical excision alone has a HIGH recurrence rate and can make a keloid WORSE/larger (as she has experienced), because cutting it creates a fresh wound that itself keloids. So "just cut it off" is precisely the request to handle honestly: removal is not a reliable cure, and naive excision can worsen it. Any surgery for keloid must be combined with adjuvant therapy (e.g. intralesional steroid, pressure, and in selected cases radiotherapy) under specialist care.' },
        { topic:'Realistic options and their limits', text:'First-line/adjunct options: INTRALESIONAL CORTICOSTEROID injections (often serial, \u00b1 cryotherapy) to flatten and soften and reduce itch; SILICONE gel/sheets and PRESSURE devices (e.g. pressure earrings post earlobe treatment); intralesional options and combination regimens. Outcomes are about CONTROL \u2014 reducing size, symptoms and itch \u2014 rather than guaranteed cure, and RECURRENCE is common. Set this expectation explicitly and kindly.' },
        { topic:'Prevention & future care', text:'Prevention matters given her tendency: advise avoiding non-essential skin trauma (further piercings, elective cosmetic procedures) on keloid-prone sites; early treatment of new lesions; and silicone/pressure after any unavoidable wound. This is practical, respectful, lifelong-tendency advice \u2014 not blame.' },
        { topic:'Cultural sensitivity & the distress', text:'COMMUNICATION CORE \u2014 keloids disproportionately affect people with darker skin, and the consultation must be culturally aware: take the cosmetic and emotional impact seriously (the wedding, self-consciousness, itch/discomfort), avoid minimising, and be honest without being discouraging. Acknowledge the frustration of the previous recurrence. Refer to dermatology (and consider plastics for selected earlobe keloids with combined excision + adjuvant therapy).' },
        { topic:'What she needs', text:'Officially: to have it cut off cleanly before the wedding. What she needs: recognition of keloid, an HONEST explanation of why simple excision often fails/worsens it, realistic options focused on control (intralesional steroid \u00b1 cryo, silicone, pressure, combination/specialist surgery with adjuvant therapy), prevention advice, appropriate referral, and culturally sensitive handling of her distress \u2014 not a promise of clean removal the evidence cannot support.' },
      ],
      ice:{
        ideas:'A proper surgical removal will finally get rid of it \u2014 the last attempt just wasn\u2019t done well enough.',
        concerns:'Itch/discomfort, self-consciousness, and the wedding; frustration and worry after the previous excision made it worse.',
        expectations:'To have it cut off and gone. What she needs: honesty that excision alone often recurs/worsens keloid, realistic control-focused options, prevention advice, referral, and her distress taken seriously with cultural sensitivity.'
      },
      cues:['Scars growing BEYOND the original wound, itchy, recurred larger after excision, in a young woman of African heritage at chest/earlobe \u2014 classic keloid.','"Just cut it off properly this time" \u2014 the central honesty point: simple excision has high recurrence and can worsen keloid; needs adjuvant therapy.','Wedding coming up + self-conscious + itch \u2014 real cosmetic/emotional impact; culturally sensitive, take it seriously, don\u2019t over-promise.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises KELOID (growth beyond the wound margin, itch/tenderness, predilection in darker skin and at chest/earlobe/shoulder sites, recurrence) and distinguishes it from a hypertrophic scar (within wound margins, tends to regress)' },
      { dom:'tasks', text:'Is HONEST that simple surgical excision alone has a high recurrence rate and can worsen/enlarge a keloid \u2014 directly addressing the "just cut it off" request rather than agreeing to it' },
      { dom:'tasks', text:'Outlines realistic, control-focused options \u2014 intralesional corticosteroid (\u00b1 cryotherapy), silicone gel/sheets, pressure devices (e.g. pressure earrings), and combination/specialist surgery with adjuvant therapy \u2014 and sets the expectation of control, not guaranteed cure, with common recurrence' },
      { dom:'tasks', text:'Gives prevention advice for a keloid-prone individual (avoid non-essential trauma/piercings on prone sites, treat new lesions early, silicone/pressure after wounds) without blame' },
      { dom:'tasks', text:'Refers appropriately (dermatology \u00b1 plastics for selected earlobe keloids with combined excision + adjuvant therapy) rather than attempting or promising simple removal' },
      { dom:'rto',   text:'Handles the consultation with CULTURAL SENSITIVITY and takes the cosmetic/emotional impact (wedding, self-consciousness, itch) seriously \u2014 neither minimising nor being discouraging' },
      { dom:'rto',   text:'Communicates the honest limits of treatment with empathy, acknowledges the previous recurrence, checks understanding, and supports realistic expectations' },
      { dom:'gs',    text:'Safety-nets and follows up: a clear management/referral plan with realistic timeframe relative to the wedding, symptom relief (itch) in the meantime, what to expect from treatment and recurrence, and review \u2014 honesty and support, not an over-promised clean removal' },
    ],
    worked:[
      { lbl:'Name it and validate', txt:'"What you\u2019ve got are keloid scars \u2014 scar tissue that overgrows beyond the original mark. They\u2019re common in people with skin like yours and at spots like the chest and earlobes, and they can be itchy and uncomfortable, so I understand why they\u2019re bothering you, especially with the wedding."' },
      { lbl:'The honest bit about cutting', txt:'"Here\u2019s the honest part, and it explains what happened last time: simply cutting a keloid out often makes it come back \u2014 sometimes bigger \u2014 because the new cut can keloid too. So \u2018just cutting it off\u2019 isn\u2019t the reliable fix it sounds like, and I don\u2019t want to set you up for the same disappointment."' },
      { lbl:'What we can realistically do', txt:'"What does help is treatments aimed at flattening and softening them and easing the itch \u2014 steroid injections, sometimes with freezing, silicone gel or sheets, and pressure earrings for the ear one. If surgery\u2019s ever used, it has to be combined with these to stop it returning. The honest goal is good control, not a guaranteed clean cure \u2014 and they can recur."' },
      { lbl:'Prevention, no blame', txt:'"Because your skin is prone to this, it\u2019s worth avoiding extra piercings or non-essential procedures on areas like the chest and ears, and treating any new lumpy scar early. That\u2019s not you having done anything wrong \u2014 it\u2019s just how your skin heals."' },
      { lbl:'Refer + manage expectations re wedding', txt:'"I\u2019m going to refer you to the skin specialists \u2014 and for the earlobe, possibly the plastic surgery team who do combined treatment. I\u2019ll be honest that a few months may not fully flatten them before the wedding, but we can start treatment now to improve them and settle the itch."' },
      { lbl:'Symptom relief + safety-net', txt:'"In the meantime I can help with the itch, and silicone gel is worth starting. If a scar suddenly changes a lot, becomes painful, ulcerates or bleeds, come back. We\u2019ll go through the specialist plan together and keep your expectations realistic but hopeful."' },
    ],
    learning:'KELOID scarring is scar tissue that grows BEYOND the boundary of the original wound, often itchy or tender, with a strong predilection in people with darker skin (African, Caribbean, Asian heritage) and at sites such as the chest, shoulders, upper back, earlobes and jawline \u2014 distinguished from a HYPERTROPHIC scar, which stays within the wound margins and tends to regress. The central, examinable honesty is that simple surgical EXCISION ALONE has a high recurrence rate and can make a keloid worse/larger (because the fresh wound itself keloids), so the natural request to "just cut it off" must be addressed directly rather than agreed to; any surgery must be combined with adjuvant therapy (intralesional steroid, pressure, selected radiotherapy) under specialist care. Realistic options are control-focused: intralesional corticosteroid injections (\u00b1 cryotherapy) to flatten/soften and reduce itch, silicone gel/sheets, and pressure devices (e.g. pressure earrings), often in combination \u2014 with the explicit expectation that the aim is control, not guaranteed cure, and that recurrence is common. Give prevention advice for a keloid-prone individual (avoid non-essential trauma/piercings on prone sites, treat new lesions early, silicone/pressure after wounds) without blame, and refer to dermatology (\u00b1 plastics for selected earlobe keloids). Throughout, handle the consultation with cultural sensitivity \u2014 keloids disproportionately affect people with darker skin \u2014 and take the cosmetic and emotional impact (here, an upcoming wedding and self-consciousness) seriously, communicating honest limits with empathy rather than minimising or over-promising. This presentation has no NICE NG12 cancer link and none should be invented.',
    knowledge:{
      guideline:'Keloid & hypertrophic scar management \u00b7 intralesional steroid/silicone/pressure \u00b7 culturally competent dermatology (no NG12 link)',
      points:[
        { h:'Keloid vs hypertrophic', t:'Keloid grows beyond the original wound margin, may keep growing, itchy/tender, predilection in darker skin and at chest/shoulder/earlobe/jaw. Hypertrophic scar stays within margins and tends to regress.' },
        { h:'Excision alone fails', t:'Simple excision has a high recurrence rate and can enlarge a keloid; the new wound itself keloids. Surgery must be combined with adjuvant therapy (intralesional steroid, pressure, selected radiotherapy) under specialist care.' },
        { h:'Control-focused options', t:'Intralesional corticosteroid (\u00b1 cryotherapy), silicone gel/sheets, pressure devices (pressure earrings), and combination regimens. Aim is control/symptom relief; recurrence is common \u2014 set this expectation.' },
        { h:'Prevention', t:'For keloid-prone individuals: avoid non-essential trauma/piercings on prone sites, treat new lesions early, use silicone/pressure after unavoidable wounds. Frame as skin tendency, not fault.' },
        { h:'Refer appropriately', t:'Dermatology for intralesional therapy/combination management; plastics for selected earlobe keloids with combined excision + adjuvant treatment. Avoid attempting or promising simple removal in primary care.' },
        { h:'Cultural sensitivity', t:'Keloids disproportionately affect people with darker skin; consult with cultural awareness, take cosmetic/emotional impact seriously, acknowledge prior recurrence frustration, and be honest without being discouraging.' },
        { h:'Never do', t:'Never agree to simple excision as a cure; never over-promise clean removal; never minimise the cosmetic/emotional impact; never blame the patient; never invent an NG12 cancer pathway where none applies.' },
        { h:'Safety-net & follow-up', t:'Clear management/referral plan with realistic timeframe; interim itch relief and silicone; expectations re control and recurrence; return if a scar changes markedly/ulcerates/bleeds; review the specialist plan.' }
      ]
    }
  };

  /* ============ 175. F2F — Fingers turning white in a teenager: Raynaud's vs connective tissue disease (no NG12) ============ */
  const c175 = {
    id:'raynauds-young-girl', title:'"Her fingers go dead white then blue in the cold \u2014 is it just poor circulation?"', type:'video', duration:12,
    meta:{ age:15, sex:'F', setting:'Video consultation \u2014 teenager with colour-changing fingers, mother present.', system:'Rheumatology / Paediatric-adolescent \u2014 Raynaud\u2019s: primary vs secondary' },
    brief:'Ruby Hartnell, 15, brought by her mother. For two winters her fingers go sharply WHITE then BLUE then red on cold exposure, with numbness/tingling and pain on rewarming, settling fully in between. She is otherwise well, on no medication. The examinable task is to recognise RAYNAUD\u2019S PHENOMENON and \u2014 the key skill \u2014 distinguish PRIMARY Raynaud\u2019s (common, benign, typically young females, symmetrical, no tissue damage, normal nailfold capillaries, negative autoantibodies) from SECONDARY Raynaud\u2019s pointing to connective tissue disease (later onset, asymmetry, digital ulcers/pitting/gangrene, abnormal nailfold capillaries, associated features \u2014 arthralgia, rash, dry eyes/mouth, dysphagia, mouth ulcers, Raynaud\u2019s plus systemic symptoms, positive ANA), screening specifically for SCLERODERMA/SLE/mixed connective tissue disease. Primary Raynaud\u2019s is managed with conservative measures (\u00b1 nifedipine if severe); secondary features warrant bloods (FBC, ESR, ANA \u00b1 ENA) and rheumatology referral. The consultation must engage Ruby herself and reassure the mother proportionately. No NG12 cancer link \u2014 do not invent one.',
    script:{
      opening:'(Mother) "Her fingers go completely dead white in the cold \u2014 then blue \u2014 and they really hurt when they warm up. My friend said it might be poor circulation, or is it something to do with her heart? She\u2019s 15, I just want to know it\u2019s nothing serious." (Ruby, quietly) "It\u2019s annoying at school \u2014 PE outside is the worst."',
      facts:[
        { topic:'Recognise Raynaud\u2019s phenomenon', text:'The classic triphasic colour change \u2014 WHITE (vasospasm/ischaemia) \u2192 BLUE (cyanosis) \u2192 RED (reperfusion) \u2014 of digits on cold/stress exposure, with numbness/pain and full recovery in between, is Raynaud\u2019s phenomenon. The history here is textbook. The crucial next step is not the label but the primary-vs-secondary distinction.' },
        { topic:'Primary Raynaud\u2019s \u2014 the reassuring picture', text:'PRIMARY (idiopathic) Raynaud\u2019s is common and benign: onset in the teens/twenties, typically female, SYMMETRICAL, no tissue damage (no ulcers/pits/gangrene), normal nailfold capillaries, no associated systemic features, and negative/normal autoantibodies and inflammatory markers. Ruby\u2019s age, symmetry, full recovery and absence of other features fit primary Raynaud\u2019s.' },
        { topic:'Secondary Raynaud\u2019s \u2014 the red flags to screen', text:'CORE SKILL \u2014 actively screen for features suggesting SECONDARY Raynaud\u2019s (an underlying connective tissue disease such as systemic sclerosis/scleroderma, SLE, or mixed CTD): later age of onset (>30\u201340), ASYMMETRY, severe/painful attacks, DIGITAL ULCERS, pitting scars or gangrene, abnormal NAILFOLD CAPILLARIES, and associated symptoms \u2014 arthralgia/arthritis, skin tightening/puffiness, rash (e.g. malar), photosensitivity, dry eyes/mouth, dysphagia/reflux, mouth ulcers, hair loss, fatigue. Their presence prompts bloods and referral; their absence is reassuring.' },
        { topic:'Investigations \u2014 proportionate', text:'If features are purely primary and exam is normal, extensive tests are not mandatory \u2014 but checking FBC, ESR/CRP and ANA (\u00b1 ENA if ANA positive or features suggest it) is reasonable to support the primary diagnosis and to catch early CTD; examine nailfold capillaries. Any secondary red flag \u2192 these bloods AND rheumatology referral (paediatric/adolescent rheumatology as appropriate). Persistent positive ANA with Raynaud\u2019s warrants follow-up even if currently well.' },
        { topic:'Management of primary Raynaud\u2019s', text:'Conservative first: keep the whole body and extremities WARM (gloves, hand warmers, layered clothing, avoid sudden cold), STOP SMOKING (and avoid in household), limit caffeine, and avoid precipitating drugs (e.g. some decongestants, beta-blockers, stimulants). If attacks are frequent/severe and affecting life, a calcium-channel blocker (NIFEDIPINE) is first-line drug therapy. Reassure that primary Raynaud\u2019s does not damage the fingers.' },
        { topic:'Engage Ruby; reassure the mother proportionately', text:'COMMUNICATION \u2014 this is a teenager: address Ruby directly about how it affects her (school, PE, self-image), support her autonomy and understanding, and involve the mother without talking over Ruby. Address the mother\u2019s "is it her heart / something serious?" honestly: it is a circulation reflex in the small vessels of the fingers, almost always benign at this age, and you are checking for the small chance of an underlying cause.' },
      ],
      ice:{
        ideas:'(Mother) "Poor circulation" or possibly something to do with the heart; wants to know it\u2019s nothing serious.',
        concerns:'(Mother) that it signals a serious underlying disease in her 15-year-old. (Ruby) the practical embarrassment/pain at school, especially PE.',
        expectations:'Reassurance and an explanation. What is needed: recognition of Raynaud\u2019s, a careful primary-vs-secondary screen, proportionate bloods, conservative management (\u00b1 nifedipine), and referral only if secondary features \u2014 engaging Ruby directly.'
      },
      cues:['Triphasic white\u2192blue\u2192red digital colour change on cold, numbness, pain on rewarming, full recovery \u2014 classic Raynaud\u2019s phenomenon.','Age 15, female, symmetrical, no tissue damage or systemic features \u2014 fits PRIMARY Raynaud\u2019s; screen actively for secondary red flags.','Teenager + anxious mother ("is it her heart?") \u2014 engage Ruby directly; reassure proportionately; no NG12 cancer link to invent.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises RAYNAUD\u2019S PHENOMENON from the triphasic colour change (white\u2192blue\u2192red), cold/stress trigger, numbness/pain and full inter-attack recovery' },
      { dom:'tasks', text:'Performs the KEY primary-vs-secondary distinction \u2014 actively screening for secondary red flags (later onset, asymmetry, digital ulcers/pits/gangrene, abnormal nailfold capillaries) and associated CTD features (arthralgia, skin tightening, rash, sicca symptoms, dysphagia, mouth ulcers, fatigue)' },
      { dom:'tasks', text:'Recognises the reassuring PRIMARY picture in Ruby (teenage female, symmetrical, no tissue damage, no systemic features) and examines appropriately (digits, nailfold capillaries)' },
      { dom:'tasks', text:'Orders proportionate investigations (FBC, ESR/CRP, ANA \u00b1 ENA) to support the diagnosis/catch early CTD, and refers to (paediatric/adolescent) rheumatology if any secondary feature or positive autoantibodies' },
      { dom:'tasks', text:'Advises conservative management of primary Raynaud\u2019s (keep warm/gloves/hand warmers, avoid sudden cold, no smoking incl. household, limit caffeine, avoid precipitant drugs) and knows nifedipine is first-line drug therapy if severe' },
      { dom:'rto',   text:'Engages RUBY directly about the impact (school, PE, self-image) and supports her understanding, involving the mother without talking over the patient' },
      { dom:'rto',   text:'Addresses the mother\u2019s "is it her heart/something serious?" honestly and proportionately \u2014 reassuring about benign primary Raynaud\u2019s while explaining the checks for the small chance of an underlying cause' },
      { dom:'gs',    text:'Safety-nets and follows up: what change would warrant review (ulcers/sores on fingertips, asymmetry, new joint/skin/systemic symptoms), the plan for any bloods/referral, practical school advice, and review \u2014 proportionate care, neither over-investigating nor missing secondary disease; no invented cancer pathway' },
    ],
    worked:[
      { lbl:'Name it for both', txt:'(To Ruby first.) "What you\u2019re describing \u2014 fingers going white, then blue, then red and sore in the cold \u2014 has a name: Raynaud\u2019s. It\u2019s the small blood vessels in your fingers over-reacting to cold. It\u2019s really common, especially in younger women." (To mum) "It\u2019s not the heart."' },
      { lbl:'Screen for the serious type', txt:'"There are two kinds, and my main job today is to check which. Ruby \u2014 do you ever get sores or ulcers on your fingertips? Any joint pains, rashes, dry eyes or mouth, trouble swallowing, mouth ulcers, or feeling really tired? \u2026 None of that. Good \u2014 that\u2019s reassuring."' },
      { lbl:'Examine + explain', txt:'"Let me look at your fingers and nails closely. \u2026 No damage, and the little vessels at the nails look normal. That all points to the common, harmless type \u2014 it doesn\u2019t damage your fingers. I\u2019ll do a couple of blood tests just to be thorough."' },
      { lbl:'Practical self-help for Ruby', txt:'"The biggest helpers are practical: keep your whole self warm, not just hands \u2014 gloves, layers, hand warmers in your coat for PE. Avoid going from warm to freezing suddenly. Easy on the energy drinks and coffee, and definitely no smoking or vaping, which makes it worse."' },
      { lbl:'When medication helps', txt:'"If it ever gets bad enough to really interfere \u2014 lots of painful attacks \u2014 there\u2019s a tablet called nifedipine that relaxes those vessels. We don\u2019t need it now, but it\u2019s there if things step up."' },
      { lbl:'Safety-net', txt:'"Come back if Ruby gets any sores or ulcers on her fingertips, if one hand\u2019s much worse than the other, or if any of those other things appear \u2014 joint pains, rashes, swallowing trouble. Otherwise this is very manageable. Ruby, anything you wanted to ask me yourself?"' },
    ],
    learning:'The triphasic digital colour change \u2014 WHITE (vasospasm) \u2192 BLUE (cyanosis) \u2192 RED (reperfusion) \u2014 on cold/stress exposure, with numbness/pain and full recovery between attacks, is RAYNAUD\u2019S PHENOMENON, and the key examinable skill is distinguishing PRIMARY from SECONDARY disease. PRIMARY (idiopathic) Raynaud\u2019s is common and benign: onset in the teens/twenties, typically female, symmetrical, with no tissue damage (no digital ulcers/pits/gangrene), normal nailfold capillaries, no systemic features, and negative autoantibodies/normal inflammatory markers. SECONDARY Raynaud\u2019s points to an underlying connective tissue disease (systemic sclerosis/scleroderma, SLE, mixed CTD) and is flagged by later onset (>30\u201340), asymmetry, severe attacks, digital ulcers/pitting scars/gangrene, abnormal nailfold capillaries, and associated features (arthralgia, skin tightening/puffiness, malar or photosensitive rash, dry eyes/mouth, dysphagia/reflux, mouth ulcers, hair loss, fatigue) \u2014 so screen these actively. Investigations are proportionate: a purely primary picture with normal examination needs little, though FBC, ESR/CRP and ANA (\u00b1 ENA) reasonably support the diagnosis and catch early CTD; any secondary red flag or positive autoantibodies warrants these bloods and rheumatology referral. Manage primary Raynaud\u2019s conservatively first \u2014 keep the whole body warm (gloves, hand warmers, layers, avoid sudden cold), stop smoking (including household exposure), limit caffeine and avoid precipitant drugs \u2014 with nifedipine first-line if attacks are frequent/severe, reassuring that primary Raynaud\u2019s does not damage the fingers. Engage the teenager directly about real-life impact (school, PE, self-image) and reassure the anxious parent proportionately. There is no NICE NG12 cancer link and none should be invented.',
    knowledge:{
      guideline:'Raynaud\u2019s phenomenon: primary vs secondary \u00b7 connective tissue disease screen \u00b7 nailfold capillaroscopy \u00b7 nifedipine (no NG12 link)',
      points:[
        { h:'Recognise Raynaud\u2019s', t:'Triphasic colour change (white\u2192blue\u2192red) of digits on cold/stress, with numbness/pain and full recovery between attacks. The label is easy; the primary-vs-secondary distinction is the skill.' },
        { h:'Primary (benign) features', t:'Onset teens/twenties, female, symmetrical, no tissue damage, normal nailfold capillaries, no systemic features, negative autoantibodies/normal inflammatory markers. Does not damage the fingers.' },
        { h:'Secondary red flags', t:'Later onset (>30\u201340), asymmetry, severe attacks, digital ulcers/pits/gangrene, abnormal nailfold capillaries, and CTD features (arthralgia, skin tightening, rash, sicca, dysphagia, mouth ulcers, fatigue) \u2192 suggest systemic sclerosis/SLE/MCTD.' },
        { h:'Proportionate investigation', t:'Primary picture: minimal tests, though FBC/ESR/CRP/ANA (\u00b1 ENA) reasonable; examine nailfold capillaries. Secondary features or positive ANA \u2192 bloods + rheumatology (paediatric/adolescent) referral and follow-up.' },
        { h:'Conservative management', t:'Keep whole body and extremities warm (gloves, hand warmers, layers), avoid sudden cold, stop smoking (incl. household), limit caffeine, avoid precipitant drugs (some decongestants, beta-blockers, stimulants).' },
        { h:'Drug therapy', t:'For frequent/severe attacks affecting life, nifedipine (calcium-channel blocker) is first-line. Reserve for impact, not every case.' },
        { h:'Never do', t:'Never label "poor circulation" and stop; never skip the secondary CTD screen; never miss digital ulcers/asymmetry/abnormal nailfolds; never talk over the teenager; never invent an NG12 cancer pathway where none applies.' },
        { h:'Safety-net & follow-up', t:'Review if fingertip ulcers/sores, asymmetry, or new joint/skin/systemic features appear; arrange any bloods/referral; give practical school/PE advice; engage the young person directly and reassure the parent proportionately.' }
      ]
    }
  };

  /* ============ 176. F2F — Non-healing scaly lump on the ear: BCC/SCC and the sun-damage story (NG12 skin 2WW) ============ */
  const c176 = {
    id:'ear-scaly-lump-scc', title:'"It\u2019s just a scab that won\u2019t heal \u2014 I keep knocking it. It\u2019ll sort itself out, won\u2019t it?"', type:'video', duration:12,
    meta:{ age:73, sex:'M', setting:'Video consultation \u2014 a long-standing non-healing lesion on the ear.', system:'Dermatology \u2014 keratinocyte skin cancer (SCC/BCC) & the NG12 skin pathway' },
    brief:'Mr Stanley Frost, 73, retired greenkeeper, lifelong outdoor worker. A scaly, crusted lump on the upper rim (helix) of his right ear for ~4 months; it bleeds when knocked, scabs, partly heals and breaks down again \u2014 it has never fully healed. It is enlarging, slightly tender, with surrounding sun-damaged skin (actinic keratoses, solar elastosis). He has a fair complexion and decades of sun exposure, and previously had a "spot" frozen off his bald scalp. He attends mainly about something else and mentions the ear in passing, assuming it is just a knock that won\u2019t heal. The examinable task is to recognise a NON-HEALING, enlarging, bleeding lesion on a sun-exposed site as a likely keratinocyte skin cancer \u2014 squamous cell carcinoma (SCC) given the rapid growth, tenderness, crusting and breakdown, with basal cell carcinoma (BCC) in the differential \u2014 take the sun-damage/occupational history, examine the lesion and regional (pre/post-auricular, cervical) nodes, and refer on the NICE NG12 skin-cancer pathway (urgent 2WW for suspected SCC; routine vs urgent for BCC), while not being deflected by the "it\u2019s just a scab" minimisation.',
    script:{
      opening:'"I\u2019m really here about my knee, doc, but the wife told me to show you this thing on my ear while I\u2019m in. It\u2019s just a scab that won\u2019t heal \u2014 I keep catching it with my glasses and knocking it, so it never gets the chance. It\u2019ll sort itself out eventually, won\u2019t it? Don\u2019t make a fuss over it."',
      facts:[
        { topic:'The cardinal red flag: it does not heal', text:'A lesion that does NOT HEAL over weeks to months \u2014 enlarging, crusting, bleeding, breaking down and re-scabbing \u2014 on a sun-exposed site in an older, sun-damaged person is a keratinocyte skin cancer until proven otherwise. "I keep knocking it, so it won\u2019t heal" is the classic explanation that masks a malignant lesion. Normal skin and benign knocks heal; a persistently non-healing lesion does not.' },
        { topic:'SCC vs BCC \u2014 the differential', text:'SQUAMOUS CELL CARCINOMA (SCC): a rapidly growing, often tender, scaly/crusted/keratotic nodule or non-healing ulcer on sun-exposed skin (ear, face, scalp, lips, hands), which can metastasise (especially ear/lip lesions) \u2014 hence urgency and node examination. BASAL CELL CARCINOMA (BCC): slower, a pearly papule with telangiectasia, rolled edge, may ulcerate centrally ("rodent ulcer"), rarely metastasises. His rapid growth, tenderness, crusting and breakdown favour SCC. Also keep keratoacanthoma and (amelanotic) melanoma in mind.' },
        { topic:'The sun-damage / occupational story', text:'Take the risk history: a lifetime of OUTDOOR work (greenkeeper), fair skin, cumulative UV, prior skin cancers/"frozen-off" lesions, and surrounding actinic damage (actinic keratoses, solar elastosis) all raise pre-test probability. This context, plus the lesion behaviour, drives the decision to refer urgently rather than watch.' },
        { topic:'The NG12 skin thresholds', text:'NICE NG12: for suspected SQUAMOUS CELL CARCINOMA, refer on a SUSPECTED-CANCER pathway (2-week-wait). For suspected MELANOMA, refer 2WW (using the weighted 7-point checklist/dermoscopy). For BASAL CELL CARCINOMA, consider ROUTINE referral; consider an urgent (2WW) referral only where there is particular concern (e.g. high-risk site/size or where delay could significantly affect outcome). Given the features favour SCC, he needs an URGENT (2WW) referral. Examine and document the lesion (site, size, morphology) and the draining nodes (pre-/post-auricular, parotid, cervical).' },
        { topic:'Don\u2019t be deflected by the "just a scab"', text:'COMMUNICATION \u2014 he has come about his knee and is minimising the ear as a knock. The skill is to take the incidental mention seriously, gently correct the "it\u2019ll heal itself" belief, examine it properly, and convey honestly that a non-healing lesion needs specialist assessment \u2014 without alarming him so much he disengages or so little he ignores it. Acknowledge the knee too.' },
        { topic:'What he needs', text:'Officially: deal with the knee; the ear is "just a scab". What he needs: recognition that a non-healing, enlarging, bleeding lesion on a sun-exposed ear in a sun-damaged man is a likely keratinocyte cancer (favouring SCC), the sun/occupational history taken, examination of the lesion and regional nodes, an urgent NG12 2WW skin-cancer referral, sun-protection/AK advice, and the minimisation handled \u2014 not "leave it to heal".' },
      ],
      ice:{
        ideas:'It\u2019s "just a scab that won\u2019t heal" because he keeps knocking it; it will sort itself out.',
        concerns:'Mainly his knee; doesn\u2019t want a "fuss" about the ear; likely some quiet awareness it isn\u2019t healing (the wife sent him).',
        expectations:'To be reassured the ear is nothing and to focus on the knee. What he needs: recognition of a likely SCC, sun/occupational history, lesion + node exam, and an urgent NG12 2WW skin referral.'
      },
      cues:['A non-healing, enlarging, crusting, bleeding lesion on a sun-exposed ear for 4 months \u2014 keratinocyte skin cancer until proven otherwise; "I keep knocking it" masks it.','Rapid growth + tenderness + crusting/breakdown \u2014 favours SCC (can metastasise, esp. ear) over BCC; examine regional nodes.','Lifelong outdoor worker, fair skin, prior "frozen-off" lesion, surrounding actinic damage \u2014 high pre-test probability; refer urgently, don\u2019t watch.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises a NON-HEALING, enlarging, crusting/bleeding lesion on a sun-exposed site in an older sun-damaged person as a likely keratinocyte skin cancer \u2014 not accepting the "just a scab I keep knocking" explanation' },
      { dom:'tasks', text:'Differentiates the likely SCC (rapid growth, tender, scaly/crusted, non-healing ulcer/nodule \u2014 can metastasise) from BCC (pearly, telangiectasia, rolled edge, slow), and keeps keratoacanthoma/amelanotic melanoma in mind' },
      { dom:'tasks', text:'Takes the SUN-DAMAGE/OCCUPATIONAL history (outdoor work, fair skin, cumulative UV, prior skin cancers, surrounding actinic keratoses/solar elastosis) recognising it raises pre-test probability' },
      { dom:'tasks', text:'EXAMINES and documents the lesion (site, size, morphology) AND the draining regional nodes (pre-/post-auricular, parotid, cervical) given metastatic potential of ear SCC' },
      { dom:'tasks', text:'Applies NG12: URGENT suspected-cancer (2WW) referral for suspected SCC (and would use 2WW for melanoma); knows BCC is usually routine, urgent only with particular concern \u2014 and refers this lesion urgently' },
      { dom:'rto',   text:'Takes the incidental "just a scab" mention seriously, gently corrects the "it\u2019ll heal itself" belief, and is honest about needing specialist assessment without alarming him into disengagement \u2014 while acknowledging the knee he came for' },
      { dom:'rto',   text:'Explains the referral and reasoning clearly and checks understanding, balancing honesty with reassurance (many are treatable, especially caught early)' },
      { dom:'gs',    text:'Safety-nets and follows up: makes the 2WW referral promptly, gives sun-protection and actinic-keratosis advice, advises what change warrants sooner review (rapid growth, bleeding, new lesions/nodes), addresses the knee, confirms attendance, and reviews the outcome \u2014 urgent referral, not "leave it to heal"' },
    ],
    worked:[
      { lbl:'Take the "by the way" seriously', txt:'"I\u2019m glad your wife sent you in with it \u2014 we\u2019ll definitely sort your knee, but let me look at that ear properly first, because something that won\u2019t heal for months is worth taking seriously, not brushing off."' },
      { lbl:'Gently challenge the belief', txt:'"I know it feels like just a scab you keep knocking \u2014 but here\u2019s the thing: ordinary skin heals even if you catch it now and then. A spot that keeps breaking down and growing over months is behaving differently, and that\u2019s what I want a specialist to check."' },
      { lbl:'Take the sun history + examine', txt:'"You were a greenkeeper \u2014 years outdoors, fair skin, and you\u2019ve had a spot frozen off before. That all matters. Let me examine the lesion closely and feel the glands around your ear and neck. \u2026 There\u2019s sun damage around it too."' },
      { lbl:'Name the plan honestly', txt:'"I want to be straight with you. This has the features of a skin cancer \u2014 most likely the type called a squamous cell, which we don\u2019t leave to heal. I\u2019m referring you urgently to the skin specialists, to be seen within two weeks. The good news is these are very treatable, especially caught now."' },
      { lbl:'Sun advice + the knee', txt:'"Going forward, hat and high-factor sun cream on your ears, scalp and face \u2014 the damage is cumulative. Now \u2014 let\u2019s also properly sort that knee you came in about; I haven\u2019t forgotten it."' },
      { lbl:'Safety-net + follow-up', txt:'"If it grows quickly, bleeds a lot, or you notice new lumps near it before the appointment, contact us sooner. I\u2019ll get the referral done today and we\u2019ll go through whatever they find together. You did the right thing showing me."' },
    ],
    learning:'A lesion that does NOT HEAL over weeks to months \u2014 enlarging, crusting, bleeding and repeatedly breaking down \u2014 on a sun-exposed site in an older, sun-damaged person is a keratinocyte skin cancer until proven otherwise, and "I keep knocking it, so it won\u2019t heal" is the classic explanation that masks malignancy: normal skin and benign knocks heal, a persistently non-healing lesion does not. Differentiate SQUAMOUS CELL CARCINOMA (rapidly growing, often tender, scaly/crusted/keratotic nodule or non-healing ulcer on ear/face/scalp/lip/hands, with metastatic potential \u2014 especially ear and lip) from BASAL CELL CARCINOMA (slow, pearly, telangiectatic, rolled edge, central ulceration, rarely metastasises), keeping keratoacanthoma and amelanotic melanoma in mind; rapid growth, tenderness and breakdown favour SCC. Take the sun-damage/occupational history (outdoor work, fair skin, cumulative UV, prior skin cancers, surrounding actinic keratoses/solar elastosis), which raises pre-test probability, and examine and document the lesion AND the draining regional nodes (pre-/post-auricular, parotid, cervical) given the metastatic risk of ear SCC. NICE NG12: refer suspected SCC (and suspected melanoma) on an urgent suspected-cancer 2-week-wait pathway; BCC is usually a routine referral, urgent only with particular concern \u2014 so this SCC-favouring lesion is referred urgently. Do not be deflected by the incidental "just a scab" framing in a patient who came about something else: take the mention seriously, gently correct the "it\u2019ll heal itself" belief, refer urgently, give sun-protection/actinic-keratosis advice, address the original complaint too, and safety-net \u2014 never "leave it to heal".',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer \u2014 skin (SCC/BCC/melanoma) \u00b7 keratinocyte cancer recognition \u00b7 sun-damage/AK',
      points:[
        { h:'Non-healing = red flag', t:'A lesion not healing over weeks\u2013months, enlarging, crusting, bleeding and breaking down on sun-exposed skin in an older/sun-damaged person is keratinocyte skin cancer until proven otherwise. Benign knocks heal; persistent non-healing does not.' },
        { h:'SCC features', t:'Rapidly growing, often tender, scaly/crusted/keratotic nodule or non-healing ulcer on ear/face/scalp/lip/hands; can metastasise (ear and lip higher risk) \u2014 examine regional nodes and refer urgently.' },
        { h:'BCC features', t:'Slow-growing pearly papule with telangiectasia and a rolled edge, may ulcerate centrally (rodent ulcer); rarely metastasises. Usually routine referral.' },
        { h:'NG12 skin thresholds', t:'Suspected SCC \u2192 urgent 2WW referral. Suspected melanoma \u2192 2WW (weighted 7-point checklist/dermoscopy). BCC \u2192 consider routine referral; urgent only with particular concern (high-risk site/size or where delay affects outcome).' },
        { h:'Risk/sun-damage history', t:'Outdoor occupation, fair skin, cumulative UV, prior skin cancers and surrounding actinic keratoses/solar elastosis raise pre-test probability and support urgent referral.' },
        { h:'Examine nodes', t:'For suspected SCC (especially ear/lip), examine and document the lesion and draining regional nodes (pre-/post-auricular, parotid, cervical) because of metastatic potential.' },
        { h:'Never do', t:'Never accept "just a scab I keep knocking" for a months-long non-healing lesion; never watch-and-wait a likely SCC; never skip the node exam; never let an incidental mention be dismissed; never miss the sun-damage context.' },
        { h:'Safety-net & follow-up', t:'Urgent 2WW skin referral; sun-protection and actinic-keratosis advice; advise sooner review for rapid growth/bleeding/new nodes; address the original complaint; confirm attendance and review the outcome.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c173, c174, c175, c176);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'male-pattern-hair-loss': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Jordan Pryce', age: '31 years \u00b7 male',
        pmh: ['2-year bitemporal recession + vertex thinning; strong family history (father/grandfather early balding)', 'Spent heavily on caffeine shampoos, biotin, supplements, derma roller, online "growth" kit \u2014 no benefit', 'Otherwise well; mood affected'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Just tell me straight what actually works and what\u2019s a con \u2014 it\u2019s really getting to me."',
        reason: 'Video consultation \u2014 worried about thinning hair.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Diagnose confidently', d:'Pattern + family history = androgenetic alopecia; no tests needed when typical.' },
        { t:'2\u20134',  h:'Exclude mimics', d:'Diffuse shedding? Patches? Scalp redness/scaling? Ferritin/TFTs if diffuse \u2014 else minimal work-up.' },
        { t:'4\u20137',  h:'Honest evidence', d:'Minoxidil + finasteride (effect, 3\u20136 mo, maintain-only, side-effects); marketing = shampoos/biotin/rollers.' },
        { t:'7\u20139',  h:'Explore the impact', d:'Identity/confidence/mood; screen low mood/body-image; validate, don\u2019t trivialise.' },
        { t:'9\u201312', h:'Support the choice', d:'Treat/cosmetic/accept all valid; NHS = cosmetic/private; review trial; safety-net mood.' }
      ],
      wordPics: {
        fail: 'Either dismisses ("it\u2019s only hair, nothing to do") or recommends shampoos/biotin; ignores the emotional impact; oversells a "cure".',
        pass: 'Diagnoses androgenetic alopecia, gives honest minoxidil/finasteride vs marketing summary, and acknowledges the impact.',
        exc:  'Diagnoses confidently, briefly excludes mimics, gives an honest evidence summary (minoxidil/finasteride with realistic limits and NHS/private reality) versus marketing, explores and validates the emotional impact, sets realistic expectations, and supports an informed autonomous choice with mood safety-netting.'
      },
      avoid: [
        { dont:"\"It's only hair \u2014 there's really nothing to be done, try not to worry about it.\"", instead:'"This is clearly getting to you, and that matters. There are two treatments with real evidence, and I\u2019ll be honest about what they can and can\u2019t do."', why:'Dismissing the distress and the evidence-based options fails the patient on both the clinical and emotional fronts.' },
        { dont:'"Try a good biotin supplement and a caffeine shampoo \u2014 they help a lot of men."', instead:'"Honestly, those have little evidence unless you\u2019re deficient. Minoxidil and finasteride are the ones that actually work."', why:'Recommending unevidenced products wastes money and misleads \u2014 the opposite of the honesty he asked for.' },
        { dont:'"Finasteride will sort it out completely \u2014 you\u2019ll get your hair back."', instead:'"It can slow loss and partly regrow over months, only while you keep taking it, and a minority get sexual side-effects \u2014 let\u2019s be realistic."', why:'Overselling a cure sets up disappointment and omits material side-effects/limitations.' }
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
        { t:'0\u20132',  h:'Recognise + validate', d:'Keloid (grows beyond wound, darker skin, chest/ear); take itch + cosmetic/emotional impact seriously.' },
        { t:'2\u20135',  h:'Honesty about excision', d:'Simple excision often recurs/worsens keloid \u2014 explains last time; address "just cut it off" directly.' },
        { t:'5\u20138',  h:'Realistic options', d:'Intralesional steroid \u00b1 cryo, silicone, pressure earrings, combination/specialist surgery + adjuvant; control not cure.' },
        { t:'8\u201310', h:'Prevention, no blame', d:'Avoid extra piercings/elective procedures on prone sites; treat new lesions early; silicone/pressure after wounds.' },
        { t:'10\u201312',h:'Refer + expectations', d:'Dermatology \u00b1 plastics; honest re wedding timeframe; interim itch relief; safety-net.' }
      ],
      wordPics: {
        fail: 'Agrees to/arranges simple excision as a "cure"; over-promises clean removal before the wedding; minimises the cosmetic/emotional impact.',
        pass: 'Recognises keloid, explains why excision alone recurs/worsens, offers control-focused options and refers with realistic expectations.',
        exc:  'Recognises keloid vs hypertrophic, is honest that excision alone fails/worsens it, offers control-focused options (intralesional steroid/silicone/pressure/combination), gives non-blaming prevention advice, refers (dermatology \u00b1 plastics), and handles the distress with cultural sensitivity and realistic, hopeful expectations.'
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
        { t:'2\u20135',  h:'Primary vs secondary', d:'Screen ulcers/pits, asymmetry, arthralgia, rash, sicca, dysphagia, mouth ulcers, fatigue; exam + nailfolds.' },
        { t:'5\u20137',  h:'Proportionate tests', d:'Primary picture: FBC/ESR/ANA reasonable; secondary features/+ANA \u2192 rheumatology referral.' },
        { t:'7\u201310', h:'Conservative mgmt', d:'Keep whole body warm, gloves/hand warmers, avoid sudden cold, no smoking/vaping, limit caffeine; nifedipine if severe.' },
        { t:'10\u201312',h:'Engage Ruby + safety-net', d:'School/PE advice; return for ulcers/asymmetry/new systemic features; no cancer pathway to invent.' }
      ],
      wordPics: {
        fail: 'Labels "poor circulation" and stops; never screens for connective tissue disease; talks only to the mother; over- or under-investigates.',
        pass: 'Recognises Raynaud\u2019s, screens primary vs secondary, advises conservative management and refers if secondary features.',
        exc:  'Recognises Raynaud\u2019s, performs the primary-vs-secondary screen (red flags + nailfolds), orders proportionate bloods, advises conservative management (\u00b1 nifedipine if severe), engages Ruby directly about school/PE, reassures the mother proportionately, and safety-nets for secondary features.'
      },
      avoid: [
        { dont:'"It\u2019s just poor circulation, she\u2019ll grow out of it \u2014 nothing to worry about."', instead:'"It\u2019s Raynaud\u2019s, usually the harmless type, but I want to check there\u2019s no underlying cause \u2014 any finger ulcers, joint pains, rashes or dry eyes/mouth?"', why:'Labelling and stopping skips the essential primary-vs-secondary connective tissue disease screen.' },
        { dont:'(To mother only) "Has she had any other symptoms?"', instead:'(To Ruby) "Ruby, do you ever get sores on your fingertips, or joint pains? How\u2019s it affecting school?"', why:'Talking over a 15-year-old ignores her autonomy and the real-life impact she can best describe.' },
        { dont:'"Let\u2019s start her on nifedipine straight away to be safe."', instead:'"Conservative measures \u2014 staying warm, gloves, no smoking \u2014 come first; we\u2019d only add a tablet if attacks are frequent and really affecting her."', why:'Medicating mild primary Raynaud\u2019s first-line is disproportionate; conservative measures lead.' }
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
        { t:'4\u20136',  h:'Sun history + exam', d:'Outdoor work, fair skin, prior lesion, actinic damage; examine lesion + pre/post-auricular + cervical nodes.' },
        { t:'6\u20139',  h:'NG12 urgent referral', d:'Features favour SCC \u2192 urgent 2WW skin-cancer referral (BCC routine; melanoma 2WW). Treatable, esp. early.' },
        { t:'9\u201312', h:'Sun advice + knee + safety-net', d:'Hat/SPF, AK advice; address the knee; sooner review if rapid growth/bleeding/new nodes; follow up.' }
      ],
      wordPics: {
        fail: 'Accepts "just a scab I keep knocking" and advises it\u2019ll heal; focuses only on the knee; no node exam; no referral \u2014 misses an SCC.',
        pass: 'Recognises a likely skin cancer, takes the sun history, examines nodes, and refers urgently on the NG12 2WW.',
        exc:  'Takes the incidental lesion seriously, recognises a non-healing growing lesion as likely SCC, takes the sun/occupational history, examines lesion and regional nodes, refers urgently on the NG12 2WW, gives sun-protection/AK advice, addresses the knee, and safety-nets \u2014 honest without alarming into disengagement.'
      },
      avoid: [
        { dont:'"If you keep knocking it, that\u2019s why it won\u2019t heal \u2014 leave it alone and it\u2019ll sort itself out."', instead:'"Ordinary skin heals even if you catch it; something growing and not healing for months behaves differently and needs checking urgently."', why:'Accepting the "I keep knocking it" explanation for a months-long non-healing lesion misses a likely SCC.' },
        { dont:'(Focusing only on the presenting complaint) "Let\u2019s deal with your knee \u2014 the ear\u2019s probably nothing."', instead:'"We\u2019ll sort the knee, but this ear lesion needs an urgent skin-cancer referral first \u2014 it\u2019s the more important of the two today."', why:'Letting the incidental framing downgrade a red-flag lesion delays cancer diagnosis.' },
        { dont:'(No node exam) referring without examining the neck.', instead:'"Let me feel the glands around your ear and neck \u2014 ear skin cancers can occasionally spread, so this guides how urgently we act."', why:'Omitting regional node examination misses metastatic spread of an ear SCC.' }
      ]
    }

  });

})();
