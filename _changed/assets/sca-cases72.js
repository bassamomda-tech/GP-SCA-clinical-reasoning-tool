/* ============================================================
   Reasoning GP — Case Library batch 72 (final new-themes batch):
   "The last gaps" (NEW themes, verified absent)
   Primary focal hyperhidrosis; chronic spontaneous urticaria
   (\u00b1 angioedema); recurrent epistaxis (incl. anticoagulated);
   frozen shoulder (adhesive capsulitis). No NG12 cancer pathway
   applies. Load AFTER sca-cases71.js.
   ============================================================ */
(function(){

  /* ===== 260. Primary focal hyperhidrosis ===== */
  const c260 = {
    id:'hyperhidrosis-primary', title:'"My hands and armpits drip with sweat even when I\u2019m not hot \u2014 it\u2019s ruining my work and my confidence"', type:'video', duration:12,
    meta:{ age:25, sex:'M', setting:'Face-to-face \u2014 excessive localised sweating.', system:'Dermatology \u2014 primary focal hyperhidrosis: recognition, stepwise treatment & impact' },
    brief:'Mr Theo Marsh, 25, has excessive SWEATING of the PALMS, SOLES and AXILLAE since his teens \u2014 symmetrical, occurring even when not hot, stopping during sleep, with a major impact on work (soaking documents/handshakes), social life and confidence. Recognise PRIMARY FOCAL HYPERHIDROSIS \u2014 excessive localised sweating (palms/soles/axillae/face), typically bilateral/symmetrical, onset in childhood/adolescence, NOT during sleep, often with a family history \u2014 and distinguish it from SECONDARY (generalised) hyperhidrosis, which has red flags warranting a work-up (generalised/asymmetric sweating, NIGHT sweats, weight loss, onset later in life, systemic symptoms \u2014 consider hyperthyroidism, infection/TB, malignancy/lymphoma, menopause, diabetes/hypoglycaemia, anxiety, drugs); MANAGE stepwise \u2014 strong topical ALUMINIUM CHLORIDE antiperspirant first-line, then options (iontophoresis for hands/feet, topical anticholinergics, oral anticholinergics, botulinum toxin for axillae, referral for severe/refractory \u2014 and in selected cases surgery), with practical advice; and crucially ACKNOWLEDGE the major PSYCHOSOCIAL impact and that it is a treatable medical condition, not a hygiene failing. The skill is recognising primary focal hyperhidrosis, excluding secondary red flags, stepwise treatment, and addressing the impact. No NG12 cancer link.',
    script:{
      opening:'"This is embarrassing, doctor, but my hands and armpits just drip with sweat \u2014 even when I\u2019m cool and calm. My palms are so wet I ruin paperwork and dread shaking hands, and my shirts are soaked. It\u2019s been like this since school. It\u2019s really knocking my confidence at work. Is there anything that helps?"',
      facts:[
        { topic:'Recognise primary focal hyperhidrosis', text:'PRIMARY FOCAL HYPERHIDROSIS: excessive LOCALISED sweating of the PALMS, SOLES, AXILLAE and/or face, typically BILATERAL and SYMMETRICAL, with onset in childhood/adolescence, occurring even when not hot but characteristically STOPPING during SLEEP, often with a family history and triggered/worsened by stress. His symmetrical palm/axilla sweating from his teens, absent in sleep, fits.' },
        { topic:'Distinguish secondary hyperhidrosis \u2014 red flags', text:'IMPORTANT \u2014 distinguish from SECONDARY (often generalised) hyperhidrosis, which warrants a work-up. Red flags: GENERALISED or ASYMMETRIC sweating, NIGHT sweats, weight loss, LATER-life onset, or systemic symptoms \u2014 consider HYPERTHYROIDISM, infection (incl. TB), MALIGNANCY/lymphoma, menopause, diabetes/hypoglycaemia, anxiety, phaeochromocytoma, and drugs. Primary focal hyperhidrosis (focal, symmetrical, sleep-sparing, young onset) is reassuringly benign; the secondary pattern needs investigation.' },
        { topic:'Stepwise treatment', text:'MANAGE stepwise: first-line is a strong topical ALUMINIUM CHLORIDE antiperspirant (applied at night). Next options: IONTOPHORESIS (especially palms/soles), topical anticholinergics (e.g. glycopyrronium), oral anticholinergics (e.g. oxybutynin/propantheline \u2014 weigh side-effects), and BOTULINUM TOXIN injections (effective for axillary hyperhidrosis). Practical advice: absorbent clothing, fabrics, sweat shields.' },
        { topic:'Referral & severe options', text:'Refer to DERMATOLOGY for severe/refractory cases or for treatments like botulinum toxin/iontophoresis where not available, and consider specialist surgical options (e.g. endoscopic thoracic sympathectomy) in carefully selected severe cases (counselling re compensatory sweating). Treat any identified secondary cause.' },
        { topic:'Acknowledge the impact', text:'CORE \u2014 ACKNOWLEDGE the major PSYCHOSOCIAL impact (confidence, work, social life, relationships, anxiety) and validate that this is a recognised, TREATABLE medical condition \u2014 NOT a hygiene failing or "just being sweaty". This validation matters as much as the prescription.' },
        { topic:'Hidden agenda', text:'He is embarrassed and his confidence is suffering. Recognise primary focal hyperhidrosis, exclude secondary red flags, start stepwise treatment (aluminium chloride \u2192 iontophoresis/anticholinergics/botulinum toxin), refer if severe, and address the psychosocial impact \u2014 not dismiss it as trivial.' },
      ],
      ice:{ ideas:'He\u2019s "just a sweaty person"; embarrassed; unsure anything helps.', concerns:'Impact on work/handshakes/confidence/social life; embarrassment.', expectations:'Something that helps. What he needs: recognition of primary focal hyperhidrosis, exclusion of secondary red flags, stepwise treatment, referral if severe, and validation of the impact.' },
      cues:['Symmetrical palm/sole/axilla sweating from adolescence, even when cool, absent in sleep, family history \u2014 primary focal hyperhidrosis.','Red flags for SECONDARY: generalised/asymmetric, night sweats, weight loss, later onset, systemic symptoms (thyroid/infection/malignancy/phaeo) \u2014 investigate.','Stepwise: aluminium chloride \u2192 iontophoresis/topical-oral anticholinergics \u2192 botulinum toxin; refer if severe; address psychosocial impact.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises PRIMARY FOCAL HYPERHIDROSIS \u2014 localised, bilateral/symmetrical palm/sole/axilla/face sweating, young onset, even when not hot but sleep-sparing, often familial' },
      { dom:'tasks', text:'Distinguishes SECONDARY hyperhidrosis and its RED FLAGS (generalised/asymmetric, night sweats, weight loss, later onset, systemic symptoms \u2014 thyroid, infection/TB, malignancy/lymphoma, menopause, diabetes, phaeo, drugs) warranting a work-up' },
      { dom:'tasks', text:'Manages STEPWISE \u2014 first-line topical aluminium chloride, then iontophoresis (palms/soles), topical/oral anticholinergics, and botulinum toxin (axillae) \u2014 with practical advice' },
      { dom:'tasks', text:'Refers to dermatology for severe/refractory cases or specialist treatments (and considers surgery in selected severe cases), and treats any identified secondary cause' },
      { dom:'rto',   text:'ACKNOWLEDGES the major psychosocial impact and validates it as a recognised, treatable condition (not a hygiene failing), addressing his embarrassment' },
      { dom:'rto',   text:'Explains the stepwise options and realistic expectations, checking understanding' },
      { dom:'rto', text:'Explores the impact on his work, relationships and confidence and what a good outcome would look like for him, and tailors the stepwise plan to his priorities' },
      { dom:'gs',    text:'Safety-nets and follows up: review of treatment response and escalation, investigation if any secondary red flags, referral if severe, and impact support \u2014 recognising primary focal hyperhidrosis and treating it, not dismissing it' },
    ],
    worked:[
      { lbl:'Validate + name it', txt:'"First, this is a genuine medical condition called hyperhidrosis \u2014 not you being unhygienic or \u2018just sweaty\u2019, and it\u2019s treatable. The pattern you describe \u2014 hands and armpits since school, even when you\u2019re cool, but fine when you\u2019re asleep \u2014 is the common, harmless type."' },
      { lbl:'Quick red-flag check', txt:'"Just to be thorough \u2014 is the sweating all over your body or just these areas? Any night sweats, weight loss, or feeling generally unwell? \u2026 No, it\u2019s focal and you\u2019re otherwise well, which is reassuring."' },
      { lbl:'Start treatment', txt:'"We treat it in steps. First-line is a strong aluminium-chloride antiperspirant applied at night \u2014 it can be very effective. I\u2019ll start you on that."' },
      { lbl:'Next options', txt:'"If that\u2019s not enough, there are good options: a treatment called iontophoresis for the hands, creams or tablets that reduce sweating, and Botox injections, which work really well for the armpits. So there\u2019s a clear path even if step one isn\u2019t enough."' },
      { lbl:'Acknowledge impact', txt:'"I can hear how much this affects your confidence and work \u2014 that\u2019s completely understandable, and it\u2019s exactly why it\u2019s worth treating properly rather than putting up with."' },
      { lbl:'Refer + safety-net', txt:'"If it stays severe despite these, I\u2019ll refer you to dermatology for the injections or other options. Come back if it\u2019s not improving, or if you ever develop sweating all over, night sweats or weight loss \u2014 that I\u2019d want to look into differently."' },
    ],
    learning:'PRIMARY FOCAL HYPERHIDROSIS is excessive LOCALISED sweating of the PALMS, SOLES, AXILLAE and/or face, typically BILATERAL and SYMMETRICAL, with onset in childhood/adolescence, occurring even when the person is not hot but characteristically STOPPING during SLEEP, often with a family history and worsened by stress \u2014 a benign, recognised condition. Distinguish it from SECONDARY (often generalised) hyperhidrosis, whose red flags warrant a work-up: generalised or asymmetric sweating, NIGHT sweats, weight loss, later-life onset, or systemic symptoms \u2014 prompting consideration of hyperthyroidism, infection (including TB), malignancy/lymphoma, menopause, diabetes/hypoglycaemia, anxiety, phaeochromocytoma and drugs. Manage primary focal hyperhidrosis STEPWISE: first-line a strong topical ALUMINIUM CHLORIDE antiperspirant (applied at night), then iontophoresis (especially palms/soles), topical anticholinergics (glycopyrronium), oral anticholinergics (oxybutynin/propantheline \u2014 weighing side-effects), and BOTULINUM TOXIN injections (effective for axillary hyperhidrosis), with practical advice (absorbent clothing, sweat shields). Refer to dermatology for severe/refractory cases or specialist treatments, and consider surgery (endoscopic thoracic sympathectomy) in carefully selected severe cases with counselling about compensatory sweating; treat any identified secondary cause. Crucially, acknowledge the major psychosocial impact (confidence, work, social life, relationships, anxiety) and validate that this is a treatable medical condition, not a hygiene failing. The skill is recognising primary focal hyperhidrosis, excluding secondary red flags, stepwise treatment, referral if severe, and addressing the impact. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Hyperhidrosis \u00b7 primary focal vs secondary (red flags) \u00b7 stepwise treatment (aluminium chloride \u2192 iontophoresis/anticholinergics \u2192 botulinum toxin) \u00b7 psychosocial impact',
      points:[
        { h:'Primary focal', t:'Localised, bilateral/symmetrical palm/sole/axilla/face sweating, young onset, even when not hot but sleep-sparing, often familial. Benign.' },
        { h:'Secondary red flags', t:'Generalised/asymmetric sweating, night sweats, weight loss, later onset, systemic symptoms \u2192 work-up (thyroid, infection/TB, malignancy/lymphoma, menopause, diabetes, phaeo, drugs).' },
        { h:'Stepwise treatment', t:'First-line topical aluminium chloride (night); then iontophoresis (palms/soles), topical/oral anticholinergics, botulinum toxin (axillae). Practical clothing advice.' },
        { h:'Refer/severe options', t:'Dermatology for severe/refractory or specialist treatments; selected surgery (endoscopic thoracic sympathectomy) with compensatory-sweating counselling.' },
        { h:'Acknowledge impact', t:'Major psychosocial impact (confidence/work/social/relationships). Validate it as a treatable medical condition, not a hygiene failing.' },
        { h:'Treat secondary cause', t:'If a secondary cause is found, treat it (e.g. hyperthyroidism).' },
        { h:'Never do', t:'Never dismiss as trivial/hygiene; never miss secondary red flags (night sweats/weight loss/generalised); never skip the stepwise options or the impact.' },
        { h:'Safety-net & follow-up', t:'Review response and escalate; investigate if secondary red flags; refer if severe; impact support.' }
      ]
    }
  };

  /* ===== 261. Chronic spontaneous urticaria / angioedema ===== */
  const c261 = {
    id:'chronic-urticaria', title:'"I keep getting these itchy raised welts all over that come and go within hours \u2014 it\u2019s been months and I can\u2019t find a trigger"', type:'video', duration:12,
    meta:{ age:34, sex:'F', setting:'Face-to-face \u2014 recurrent itchy weals.', system:'Dermatology / Allergy \u2014 chronic spontaneous urticaria: management & the angioedema/anaphylaxis caveat' },
    brief:'Mrs Sofia Larkin, 34, has had recurrent itchy raised WEALS (hives) most days for over 6 weeks, each individual weal coming and going within 24 hours (leaving no mark), sometimes with lip/eyelid swelling (ANGIOEDEMA), with no consistent trigger identified, otherwise well. Recognise CHRONIC SPONTANEOUS URTICARIA (urticaria most days for >6 weeks, often idiopathic/autoimmune, frequently NO identifiable allergen) \u2014 and that individual weals lasting <24h and resolving without bruising is typical (weals lasting >24h or leaving bruising suggest urticarial vasculitis \u2014 refer); reassure it is usually NOT a dangerous allergy and that extensive allergy testing is usually unrewarding in chronic spontaneous urticaria; MANAGE stepwise \u2014 regular (not just PRN) non-sedating ANTIHISTAMINES, up-titrated to higher-than-standard doses if needed (per guidelines), with add-on/specialist options (e.g. omalizumab) for refractory cases via dermatology/immunology; advise on trigger avoidance where relevant (NSAIDs, opiates, heat, pressure, stress can aggravate) and a symptom/severity tool; and crucially counsel the ANGIOEDEMA/ANAPHYLAXIS safety-net \u2014 seek emergency help for tongue/throat swelling or breathing difficulty. The skill is recognising chronic urticaria, reassuring + regular up-titrated antihistamines, not over-investigating for allergy, referring if refractory/vasculitis, and the angioedema red-flag advice. No NG12 cancer link.',
    script:{
      opening:'"For a couple of months now I keep breaking out in these itchy raised welts all over \u2014 they come up, last a few hours, then vanish and pop up somewhere else. Sometimes my lips or eyelids puff up. I\u2019ve tried changing everything \u2014 food, washing powder \u2014 but I can\u2019t find a trigger. The itch is driving me mad. What\u2019s causing it?"',
      facts:[
        { topic:'Recognise chronic spontaneous urticaria', text:'CHRONIC SPONTANEOUS URTICARIA: recurrent itchy WEALS (hives) occurring most days for MORE THAN 6 WEEKS, with each individual weal coming and going within 24 HOURS and leaving NO mark, often with ANGIOEDEMA (lip/eyelid/soft-tissue swelling), and frequently NO identifiable trigger (often idiopathic/autoimmune). Her months-long, transient, trigger-less weals \u00b1 angioedema fit.' },
        { topic:'When to think urticarial vasculitis', text:'Note: if individual weals last LONGER than 24 hours, are painful/burning rather than itchy, or leave BRUISING/pigmentation, consider URTICARIAL VASCULITIS (refer dermatology for assessment/biopsy). Typical chronic spontaneous urticaria weals are transient and resolve without marks.' },
        { topic:'Reassure \u2014 not a dangerous allergy; avoid over-testing', text:'KEY \u2014 reassure that chronic spontaneous urticaria is usually NOT a dangerous food allergy and that extensive ALLERGY testing is generally UNREWARDING (it is not allergic in most cases). Avoid sending the patient on fruitless elimination diets/allergy tests. Identify aggravating (not causative) factors where relevant: NSAIDs/aspirin, opiates, heat, pressure, alcohol, stress, infection.' },
        { topic:'Stepwise antihistamine management', text:'MANAGE stepwise: REGULAR (not just PRN) non-sedating ANTIHISTAMINES are first-line; if not controlled, UP-TITRATE to higher-than-standard doses (per guidelines, up to fourfold). For refractory cases, refer to dermatology/immunology for add-on options (e.g. leukotriene antagonist, omalizumab, ciclosporin). A short oral steroid course may be used for severe flares (not long-term).' },
        { topic:'Angioedema/anaphylaxis safety-net', text:'CRITICAL safety-net \u2014 although chronic urticaria/angioedema is usually not anaphylactic, counsel to seek EMERGENCY help (999) for TONGUE/THROAT swelling, difficulty breathing or swallowing, which could indicate airway-threatening angioedema/anaphylaxis. Also consider ACE-inhibitor-induced angioedema (stop the ACE inhibitor) and, in recurrent isolated angioedema without weals, C1-esterase inhibitor deficiency (hereditary angioedema).' },
        { topic:'Hidden agenda', text:'She is frustrated, itchy and hunting for a trigger. Recognise chronic spontaneous urticaria, reassure it is usually not a dangerous allergy and stop the fruitless trigger-hunt, start regular up-titrated antihistamines, refer if refractory/vasculitis, and give the angioedema red-flag advice.' },
      ],
      ice:{ ideas:'There must be an allergen/trigger she needs to find and avoid.', concerns:'The relentless itch and the swellings; not finding a cause; whether it\u2019s a dangerous allergy.', expectations:'To identify the trigger/cure it. What she needs: recognition of chronic spontaneous urticaria, reassurance (usually not a dangerous allergy, testing unrewarding), regular up-titrated antihistamines, referral if refractory, and angioedema safety-netting.' },
      cues:['Itchy weals most days >6 weeks, each lasting <24h leaving no mark, \u00b1 angioedema, no consistent trigger \u2014 chronic spontaneous urticaria (often idiopathic/autoimmune).','Usually NOT a dangerous allergy; extensive allergy testing unrewarding \u2014 stop the trigger-hunt; weals >24h/bruising \u2192 think urticarial vasculitis (refer).','Regular up-titrated non-sedating antihistamines first-line; refer if refractory (omalizumab); angioedema/airway red flags \u2192 999.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises CHRONIC SPONTANEOUS URTICARIA \u2014 itchy weals most days >6 weeks, each weal resolving within 24h without a mark, \u00b1 angioedema, often with no identifiable trigger' },
      { dom:'tasks', text:'Recognises when to consider URTICARIAL VASCULITIS (weals lasting >24h, painful/burning, leaving bruising) and refers for assessment' },
      { dom:'tasks', text:'Reassures it is usually NOT a dangerous allergy and that extensive allergy testing is unrewarding \u2014 avoiding fruitless elimination diets \u2014 while noting aggravating factors (NSAIDs, opiates, heat, pressure, stress)' },
      { dom:'tasks', text:'Manages STEPWISE with REGULAR (not PRN) non-sedating antihistamines, UP-TITRATED to higher doses if needed, and refers to dermatology/immunology for refractory cases (e.g. omalizumab)' },
      { dom:'tasks', text:'Gives the ANGIOEDEMA/ANAPHYLAXIS safety-net (999 for tongue/throat swelling or breathing/swallowing difficulty) and considers ACE-inhibitor angioedema and hereditary angioedema where relevant' },
      { dom:'rto',   text:'Addresses the frustration and the trigger-hunt, reassures appropriately, and checks understanding of the regular-antihistamine plan' },
      { dom:'rto',   text:'Explains why allergy testing is usually unhelpful without being dismissive of her concern' },
      { dom:'gs',    text:'Safety-nets and follows up: angioedema/airway red flags, review and up-titration/referral if not controlled, vasculitis features warranting referral, and reassurance \u2014 regular up-titrated antihistamines, not over-investigation' },
    ],
    worked:[
      { lbl:'Name + reassure', txt:'"What you\u2019ve got is chronic urticaria \u2014 hives that come and go, each spot lasting under a day and leaving no mark, often with a bit of lip or eye swelling. The frustrating truth is that in most people there\u2019s no specific allergy or food behind it \u2014 the body just produces them, often for months, then it settles."' },
      { lbl:'Stop the trigger-hunt', txt:'"So you can stop driving yourself mad searching for a trigger \u2014 and allergy testing usually isn\u2019t helpful here, because it\u2019s generally not an allergy. Things like anti-inflammatory painkillers, heat, pressure and stress can flare it, but they\u2019re not the cause."' },
      { lbl:'Treat properly', txt:'"The key is taking a non-drowsy antihistamine REGULARLY, every day \u2014 not just when you break out. And if the standard dose isn\u2019t enough, we can safely increase it well above the usual dose, which often does the trick."' },
      { lbl:'Escalation', txt:'"If that still doesn\u2019t control it, I\u2019ll refer you to the skin or allergy specialists \u2014 there are excellent further treatments, including an injection called omalizumab, for stubborn cases."' },
      { lbl:'Angioedema safety-net', txt:'"One important safety point: the swelling is usually harmless, BUT if your TONGUE or THROAT swells, or you struggle to breathe or swallow, call 999 immediately \u2014 that\u2019s an emergency."' },
      { lbl:'Safety-net', txt:'"Come back if the regular antihistamine isn\u2019t controlling it so we can increase it or refer, or if any spot lasts more than a day, becomes painful or bruises \u2014 that I\u2019d want to look at differently."' },
    ],
    learning:'CHRONIC SPONTANEOUS URTICARIA is recurrent itchy WEALS (hives) occurring most days for MORE THAN 6 WEEKS, with each individual weal coming and going within 24 hours and leaving NO mark, often with ANGIOEDEMA (lip/eyelid/soft-tissue swelling) and frequently NO identifiable trigger (often idiopathic/autoimmune). If individual weals last LONGER than 24 hours, are painful/burning, or leave bruising/pigmentation, consider URTICARIAL VASCULITIS (refer dermatology for assessment/biopsy). Reassure that chronic spontaneous urticaria is usually NOT a dangerous food allergy and that extensive allergy testing is generally unrewarding \u2014 avoid fruitless elimination diets/allergy tests \u2014 while identifying aggravating (not causative) factors where relevant (NSAIDs/aspirin, opiates, heat, pressure, alcohol, stress, infection). Manage STEPWISE: regular (not just PRN) non-sedating ANTIHISTAMINES are first-line, up-titrated to higher-than-standard doses (per guidelines, up to fourfold) if not controlled; for refractory cases, refer to dermatology/immunology for add-on options (leukotriene antagonist, omalizumab, ciclosporin), with short oral steroid courses only for severe flares (not long-term). Crucially counsel the angioedema/anaphylaxis safety-net \u2014 seek emergency help (999) for tongue/throat swelling or difficulty breathing/swallowing \u2014 and consider ACE-inhibitor-induced angioedema (stop the ACE inhibitor) and hereditary angioedema (C1-esterase inhibitor deficiency) in recurrent isolated angioedema without weals. The skill is recognising chronic urticaria, reassuring and stopping the trigger-hunt, starting regular up-titrated antihistamines, referring if refractory/vasculitis, and giving the angioedema red-flag advice. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Chronic spontaneous urticaria \u00b7 regular up-titrated non-sedating antihistamines \u00b7 avoid unrewarding allergy testing \u00b7 omalizumab if refractory \u00b7 angioedema/anaphylaxis safety-net',
      points:[
        { h:'Recognise', t:'Itchy weals most days >6 weeks, each resolving within 24h without a mark, \u00b1 angioedema, often no identifiable trigger (idiopathic/autoimmune).' },
        { h:'Urticarial vasculitis', t:'Weals lasting >24h, painful/burning, or leaving bruising \u2192 consider urticarial vasculitis (refer dermatology/biopsy).' },
        { h:'Not a dangerous allergy', t:'Usually not allergic; extensive allergy testing unrewarding \u2014 avoid elimination diets. Aggravators (NSAIDs, opiates, heat, pressure, stress) are not the cause.' },
        { h:'Stepwise antihistamines', t:'Regular (not PRN) non-sedating antihistamine first-line; up-titrate to higher doses if uncontrolled; short oral steroid only for severe flares.' },
        { h:'Refractory', t:'Refer dermatology/immunology for add-ons (leukotriene antagonist, omalizumab, ciclosporin) in refractory cases.' },
        { h:'Angioedema safety-net', t:'999 for tongue/throat swelling or breathing/swallowing difficulty. Consider ACE-inhibitor angioedema (stop ACEi) and hereditary angioedema (recurrent angioedema without weals).' },
        { h:'Never do', t:'Never send on fruitless allergy testing/elimination diets; never rely on PRN-only antihistamines; never miss urticarial vasculitis or airway-threatening angioedema.' },
        { h:'Safety-net & follow-up', t:'Angioedema/airway red flags (999); review and up-titrate/refer if uncontrolled; vasculitis features \u2192 refer; reassurance.' }
      ]
    }
  };

  /* ===== 262. Recurrent epistaxis ===== */
  const c262 = {
    id:'recurrent-epistaxis', title:'"I keep getting nosebleeds \u2014 the latest one wouldn\u2019t stop for ages, and I\u2019m on blood thinners"', type:'video', duration:12,
    meta:{ age:68, sex:'M', setting:'Face-to-face \u2014 recurrent/troublesome nosebleeds.', system:'ENT \u2014 epistaxis: first-aid, anticoagulation & when to worry' },
    brief:'Mr Walter Penn, 68 (on a DOAC/warfarin, hypertensive), has recurrent ANTERIOR nosebleeds, the latest needing prolonged pressure to stop. Cover EPISTAXIS management: teach correct FIRST-AID (sit forward, pinch the SOFT part of the nose for 10\u201315 minutes continuously, lean forward, ice/cold, avoid lying back/sniffing), recognise most are ANTERIOR (Little\u2019s area) and benign \u2014 precipitated by nose-picking/dryness/trauma, but consider ANTICOAGULATION/antiplatelets, HYPERTENSION, and review the anticoagulant indication/control (INR if on warfarin); know when to ESCALATE/admit (bleeding not controlled by first-aid, heavy/posterior bleeding \u2014 blood pouring down the throat, haemodynamic compromise, anticoagulated with uncontrolled bleeding); in primary care, options include topical antiseptic cream (e.g. Naseptin) and nasal CAUTERY for an anterior bleeding point, with ENT referral for recurrent/refractory bleeds (cautery/packing); and consider RED FLAGS for sinister causes \u2014 unilateral persistent bleeding/obstruction, a nasal mass (sinonasal tumour \u2014 ENT), or features of a bleeding disorder/HHT. Address prevention (humidification, avoid picking, treat dryness) and anticoagulation review. The skill is first-aid + anticoagulation/BP review + escalation criteria + red-flag awareness. No NG12 unless unilateral/mass features (then ENT).',
    script:{
      opening:'"I keep getting nosebleeds, doctor \u2014 several over the past few weeks. The last one was a real worry, it wouldn\u2019t stop for a good twenty minutes and there was a fair bit of blood. I\u2019m on blood thinners for my heart, and I take tablets for blood pressure. Should I be concerned?"',
      facts:[
        { topic:'Teach correct first-aid', text:'Teach correct EPISTAXIS FIRST-AID: sit UP and lean FORWARD (not back), pinch the SOFT part of the nose (not the bony bridge) firmly and CONTINUOUSLY for 10\u201315 minutes without releasing to check, breathe through the mouth, spit out blood (don\u2019t swallow), and apply ice/cold to the bridge/neck. Avoid lying back, sniffing or blowing the nose afterwards. Many patients release too early or pinch the wrong place.' },
        { topic:'Most are anterior & benign \u2014 but review meds/BP', text:'Most nosebleeds are ANTERIOR (Little\u2019s area) and benign, precipitated by nose-picking, dryness, trauma or URTIs. But in this patient, REVIEW the ANTICOAGULATION (DOAC/warfarin) and antiplatelets \u2014 check the indication, control (INR if on warfarin), and whether bleeding is disproportionate \u2014 and the HYPERTENSION (treat if poorly controlled). Anticoagulant-related recurrent epistaxis warrants review of the balance of risks.' },
        { topic:'When to escalate/admit', text:'ESCALATE/admit for: bleeding NOT controlled by adequate first-aid, HEAVY or POSTERIOR bleeding (blood pouring down the throat, bleeding from both nostrils, not seeing an anterior source), haemodynamic compromise (dizziness, tachycardia, hypotension), or significant bleeding in an anticoagulated patient. Posterior/uncontrolled bleeds need ENT/emergency care (packing, etc.).' },
        { topic:'Primary-care treatment & ENT referral', text:'For an anterior bleeding point, primary-care options include topical antiseptic cream (e.g. Naseptin/chlorhexidine-neomycin) to reduce crusting/recurrence and nasal CAUTERY (silver nitrate) of a visible anterior vessel. Refer to ENT for RECURRENT/refractory epistaxis (cautery/packing/further assessment).' },
        { topic:'Red flags for sinister causes', text:'Consider RED FLAGS: persistent UNILATERAL nasal bleeding/obstruction or a nasal MASS (possible SINONASAL TUMOUR \u2014 ENT referral), and features of a BLEEDING DISORDER or hereditary haemorrhagic telangiectasia (HHT \u2014 recurrent epistaxis, telangiectasia, family history). These warrant appropriate referral/investigation rather than being treated as simple recurrent nosebleeds.' },
        { topic:'Prevention + the agenda', text:'Advise PREVENTION: nasal humidification/saline/emollient for dryness, avoid nose-picking and forceful blowing, and treat the underlying tendency. He wants to know if he should worry; recognise anticoagulant-related anterior epistaxis, teach first-aid, review anticoagulation/BP, set escalation criteria, treat/refer for recurrence, and keep red flags in mind. No NG12 unless unilateral/mass features.' },
      ],
      ice:{ ideas:'Worried the recurrent/heavy nosebleeds (on blood thinners) signal something serious.', concerns:'The bleeding not stopping; being on blood thinners; whether something is wrong.', expectations:'Reassurance/management. What he needs: correct first-aid, anticoagulation/BP review, escalation criteria, treatment/referral for recurrence, and red-flag awareness.' },
      cues:['Recurrent anterior nosebleeds on anticoagulation + hypertension \u2014 teach correct first-aid (pinch soft part, lean forward, 10\u201315 min continuously).','Review anticoagulant indication/control (INR if warfarin) + BP; escalate for uncontrolled/posterior/heavy bleeding or haemodynamic compromise.','Red flags: persistent UNILATERAL bleeding/obstruction or nasal mass (sinonasal tumour \u2192 ENT); bleeding disorder/HHT; cautery/Naseptin + ENT for recurrent.']
    },
    checkpoints:[
      { dom:'tasks', text:'Teaches correct EPISTAXIS FIRST-AID \u2014 sit forward, pinch the SOFT part of the nose continuously for 10\u201315 minutes, lean forward/spit out blood, ice, avoid lying back/sniffing' },
      { dom:'tasks', text:'Recognises most bleeds are anterior/benign but REVIEWS the ANTICOAGULATION (indication, control \u2014 INR if warfarin, balance of risks) and antiplatelets, and the HYPERTENSION' },
      { dom:'tasks', text:'Knows the ESCALATION/admission criteria \u2014 bleeding not controlled by first-aid, heavy/posterior bleeding, haemodynamic compromise, significant bleeding while anticoagulated' },
      { dom:'tasks', text:'Knows primary-care treatment (topical antiseptic cream, nasal cautery of an anterior point) and ENT referral for recurrent/refractory epistaxis' },
      { dom:'tasks', text:'Considers RED FLAGS \u2014 persistent unilateral bleeding/obstruction or a nasal mass (sinonasal tumour \u2192 ENT), and bleeding disorder/HHT \u2014 referring appropriately' },
      { dom:'rto',   text:'Addresses his worry about the bleeding and the blood thinners, reassures proportionately, and checks understanding of first-aid' },
      { dom:'tasks', text:'Advises PREVENTION (humidification/saline/emollient, avoid picking/forceful blowing) and arranges anticoagulation/BP review' },
      { dom:'gs',    text:'Safety-nets and follows up: when to seek urgent/emergency care (uncontrolled/heavy/posterior bleeding, feeling faint), ENT referral for recurrence, red-flag awareness (unilateral/mass), and anticoagulation/BP review \u2014 first-aid + medication review + escalation criteria' },
    ],
    worked:[
      { lbl:'Reassure + teach first-aid', txt:'"Most nosebleeds come from the front of the nose and are not dangerous, even on blood thinners \u2014 but you need the right first-aid, which a lot of people get wrong. Sit up, lean FORWARD, and pinch the SOFT part of your nose firmly for a full 10\u201315 minutes WITHOUT letting go to check. Spit out any blood, don\u2019t tip your head back."' },
      { lbl:'Review the blood thinners + BP', txt:'"Being on blood thinners makes bleeds last longer, so let\u2019s review them \u2014 the reason you\u2019re on it and, if it\u2019s warfarin, check your INR isn\u2019t too high. And let\u2019s make sure your blood pressure is well controlled, as that can contribute."' },
      { lbl:'When to get urgent help', txt:'"Get urgent help \u2014 999 or A&E \u2014 if a bleed won\u2019t stop after 15\u201320 minutes of proper pressure, if blood is pouring down the back of your throat, or if you feel faint or dizzy. Those need hospital, sometimes packing."' },
      { lbl:'Treat the recurrence', txt:'"For the recurrent bleeds, I can look in your nose and, if there\u2019s an obvious vessel at the front, cauterise it, and a cream can reduce crusting and re-bleeding. If they keep happening, I\u2019ll refer you to ENT."' },
      { lbl:'Red-flag check', txt:'"Just to be safe \u2014 are the bleeds always the same nostril, with a blocked feeling on that side? \u2026 No, both sides. Good \u2014 persistent one-sided bleeding or blockage is the thing I\u2019d want ENT to check."' },
      { lbl:'Prevention + safety-net', txt:'"To prevent them: a saline spray or a dab of emollient inside the nose for dryness, and avoid picking or hard blowing. Come back if they keep recurring, become one-sided, or you ever can\u2019t stop one \u2014 and we\u2019ll review your blood thinners together."' },
    ],
    learning:'EPISTAXIS management starts with correct FIRST-AID: sit up and lean FORWARD (not back), pinch the SOFT part of the nose (not the bony bridge) firmly and continuously for 10\u201315 minutes without releasing to check, breathe through the mouth and spit out blood (don\u2019t swallow), and apply ice/cold \u2014 avoiding lying back, sniffing or blowing afterwards. Most nosebleeds are ANTERIOR (Little\u2019s area) and benign (nose-picking, dryness, trauma, URTIs), but in an anticoagulated/antiplatelet patient REVIEW the anticoagulation (indication, control \u2014 INR if on warfarin, balance of risks) and the HYPERTENSION (treat if poorly controlled). Know the ESCALATION/admission criteria: bleeding not controlled by adequate first-aid, heavy or POSTERIOR bleeding (blood pouring down the throat, no visible anterior source), haemodynamic compromise (dizziness, tachycardia, hypotension), or significant bleeding while anticoagulated \u2014 posterior/uncontrolled bleeds need ENT/emergency care (packing). In primary care, treat an anterior bleeding point with topical antiseptic cream (e.g. Naseptin) and/or nasal CAUTERY (silver nitrate) of a visible vessel, and refer to ENT for recurrent/refractory epistaxis. Keep RED FLAGS in mind: persistent UNILATERAL nasal bleeding/obstruction or a nasal MASS (possible sinonasal tumour \u2192 ENT), and features of a bleeding disorder or hereditary haemorrhagic telangiectasia (recurrent epistaxis, telangiectasia, family history). Advise prevention (nasal humidification/saline/emollient, avoid picking/forceful blowing) and arrange anticoagulation/BP review. The skill is correct first-aid + anticoagulation/BP review + escalation criteria + red-flag awareness. No NICE NG12 cancer pathway applies unless unilateral/mass features suggest a sinonasal tumour.',
    knowledge:{
      guideline:'Epistaxis \u00b7 correct first-aid \u00b7 anticoagulation/BP review \u00b7 escalation (posterior/uncontrolled) \u00b7 cautery/Naseptin + ENT \u00b7 unilateral-mass red flag',
      points:[
        { h:'First-aid', t:'Sit forward, pinch the soft part of the nose continuously 10\u201315 min, lean forward, spit out blood, ice, avoid lying back/sniffing/blowing.' },
        { h:'Review meds & BP', t:'Most anterior bleeds are benign; in anticoagulated patients review indication/control (INR if warfarin) and antiplatelets, and treat poorly controlled hypertension.' },
        { h:'Escalate/admit', t:'Bleeding not controlled by first-aid, heavy/posterior bleeding (down the throat), haemodynamic compromise, or significant bleeding while anticoagulated \u2192 ENT/emergency (packing).' },
        { h:'Primary-care treatment', t:'Topical antiseptic cream (Naseptin) and nasal cautery (silver nitrate) of an anterior vessel; ENT referral for recurrent/refractory epistaxis.' },
        { h:'Red flags', t:'Persistent unilateral bleeding/obstruction or nasal mass (sinonasal tumour \u2192 ENT); bleeding disorder/HHT (telangiectasia, family history).' },
        { h:'Prevention', t:'Nasal humidification/saline/emollient for dryness, avoid picking and forceful blowing; treat the underlying tendency.' },
        { h:'Never do', t:'Never teach head-back/bony-bridge pinching; never ignore anticoagulation/BP; never miss posterior/uncontrolled bleeding or a unilateral nasal mass.' },
        { h:'Safety-net & follow-up', t:'Urgent/emergency care for uncontrolled/heavy/posterior bleeding or feeling faint; ENT referral for recurrence/unilateral features; anticoagulation/BP review.' }
      ]
    }
  };

  /* ===== 263. Frozen shoulder (adhesive capsulitis) ===== */
  const c263 = {
    id:'frozen-shoulder', title:'"My shoulder\u2019s become stiff and painful \u2014 I can\u2019t reach behind my back or do my bra up, and it\u2019s getting worse"', type:'video', duration:12,
    meta:{ age:54, sex:'F', setting:'Face-to-face \u2014 a painful, stiff shoulder.', system:'MSK \u2014 frozen shoulder (adhesive capsulitis): recognition, phases & management' },
    brief:'Mrs Denise Falk, 54 (diabetic), has months of progressive shoulder PAIN and STIFFNESS with marked loss of movement \u2014 especially EXTERNAL ROTATION and reaching behind her back/overhead \u2014 affecting both active AND passive movement, with night pain. Recognise FROZEN SHOULDER (ADHESIVE CAPSULITIS) \u2014 painful global restriction of both active and passive glenohumeral movement (especially external rotation), in phases (painful/freezing \u2192 stiff/frozen \u2192 thawing), commoner in middle age and associated with DIABETES (and thyroid disease); distinguish from rotator cuff problems (weakness, active>passive restriction), OA, and referred pain; recognise it is usually self-limiting but can take 1\u20133 years; MANAGE \u2014 analgesia/NSAIDs, maintain movement with PHYSIOTHERAPY/exercises, intra-articular CORTICOSTEROID INJECTION (helpful especially in the painful phase), reassurance about the natural history, and optimise DIABETES (glycaemic control affects outcome); refer to physiotherapy/orthopaedics for refractory cases (hydrodilatation, manipulation, capsular release). Set realistic expectations about the prolonged course. The skill is recognising the active+passive global restriction (esp. external rotation), the diabetes link, and phase-appropriate management with realistic timelines. No NG12 cancer link.',
    script:{
      opening:'"My right shoulder\u2019s been getting stiffer and more painful over the last few months. I can\u2019t reach behind my back to do my bra up or get my arm into a coat, and it aches badly at night so I can\u2019t sleep on it. I didn\u2019t injure it \u2014 it just came on. I\u2019m diabetic, if that matters. Will it get better?"',
      facts:[
        { topic:'Recognise frozen shoulder', text:'FROZEN SHOULDER (ADHESIVE CAPSULITIS): progressive shoulder PAIN with global STIFFNESS and loss of movement affecting BOTH ACTIVE AND PASSIVE range \u2014 especially EXTERNAL ROTATION and reaching behind the back/overhead \u2014 often with night pain, typically coming on without injury in middle age. The active AND passive restriction (especially external rotation) is the key examination finding distinguishing it.' },
        { topic:'Phases & diabetes link', text:'It progresses in PHASES: a painful/"freezing" phase, a stiff/"frozen" phase (less pain, marked stiffness), and a "thawing" phase of gradual recovery \u2014 the whole course often lasting 1\u20133 YEARS. It is associated with DIABETES (commoner, more severe, more bilateral) and thyroid disease \u2014 her diabetes is relevant, and optimising glycaemic control helps.' },
        { topic:'Distinguish the differential', text:'Distinguish from ROTATOR CUFF pathology (weakness, painful arc, active restriction with relatively preserved PASSIVE movement), glenohumeral OSTEOARTHRITIS (older, crepitus, X-ray changes), and referred pain (neck/cardiac). Frozen shoulder restricts BOTH active and passive movement globally \u2014 the cuff typically restricts active more than passive.' },
        { topic:'Management', text:'MANAGE: ANALGESIA/NSAIDs for pain, maintain movement with PHYSIOTHERAPY and exercises (gentle stretching to preserve/restore range), and an intra-articular CORTICOSTEROID INJECTION (particularly helpful in the painful/early phase) \u2014 with reassurance about the natural history. Optimise DIABETES control (affects outcome). Most recover, though it takes time.' },
        { topic:'Refer & realistic expectations', text:'Refer to physiotherapy and, for refractory cases, orthopaedics for options such as hydrodilatation, manipulation under anaesthesia or arthroscopic capsular release. Set REALISTIC expectations \u2014 frozen shoulder is largely self-limiting but recovery is SLOW (often 1\u20133 years); this honesty manages frustration.' },
        { topic:'Hidden agenda', text:'She wants to know if it will get better and to regain function. Recognise frozen shoulder from the active+passive global restriction (esp. external rotation), note the diabetes link/optimise control, give phase-appropriate management (analgesia, physio, steroid injection), refer if refractory, and set realistic timelines \u2014 not dismiss it as simple "wear and tear".' },
      ],
      ice:{ ideas:'Something\u2019s wrong with the shoulder, came on without injury; will it recover?', concerns:'Pain (esp. at night), loss of function (dressing, reaching), and how long it\u2019ll last.', expectations:'A diagnosis and treatment/timeline. What she needs: recognition of frozen shoulder, the diabetes link, phase-appropriate management (analgesia/physio/steroid injection), realistic timeline, and referral if refractory.' },
      cues:['Progressive shoulder pain + global stiffness restricting BOTH active and passive movement (esp. external rotation), no injury, night pain \u2014 frozen shoulder.','Phases (freezing \u2192 frozen \u2192 thawing), course often 1\u20133 years; associated with DIABETES/thyroid \u2014 optimise glycaemic control.','Manage with analgesia + physiotherapy + intra-articular steroid injection (painful phase); refer if refractory; set realistic (slow) timeline.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises FROZEN SHOULDER (adhesive capsulitis) \u2014 painful global restriction of BOTH active and passive glenohumeral movement, especially external rotation, with night pain, coming on without injury' },
      { dom:'tasks', text:'Knows the PHASES (freezing \u2192 frozen \u2192 thawing) and the often 1\u20133-year course, and the DIABETES (and thyroid) association \u2014 noting her diabetes and that glycaemic control affects outcome' },
      { dom:'tasks', text:'Distinguishes it from rotator cuff pathology (active>passive restriction, weakness), glenohumeral OA, and referred pain \u2014 using the active AND passive global restriction' },
      { dom:'tasks', text:'Manages with analgesia/NSAIDs, PHYSIOTHERAPY/exercises to maintain movement, and an intra-articular CORTICOSTEROID INJECTION (helpful in the painful phase), and optimises diabetes' },
      { dom:'tasks', text:'Refers to physiotherapy and, for refractory cases, orthopaedics (hydrodilatation/manipulation/capsular release)' },
      { dom:'rto',   text:'Sets REALISTIC expectations about the slow (1\u20133-year) but largely self-limiting course, managing frustration honestly, and addresses the functional/sleep impact' },
      { dom:'rto',   text:'Explains the diagnosis and phase-appropriate plan clearly and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: physiotherapy/injection and review, orthopaedic referral if refractory, diabetes optimisation, and realistic timeline \u2014 recognising the active+passive restriction and managing by phase, not dismissing as wear and tear' },
    ],
    worked:[
      { lbl:'Name it', txt:'"This is a frozen shoulder \u2014 the lining of the joint becomes inflamed and tight, making it painful and very stiff, especially turning your arm out and reaching behind you. The clue is that the movement is limited whether you move it OR I move it for you, which separates it from other shoulder problems."' },
      { lbl:'Explain the diabetes link + phases', txt:'"It\u2019s commoner in people with diabetes, so that\u2019s relevant \u2014 and keeping your sugars well controlled actually helps it. It goes through phases: a painful stage, then a stiff stage, then a gradual thawing as it recovers."' },
      { lbl:'Honest timeline', txt:'"I\u2019ll be honest about the timescale \u2014 it does get better, but it\u2019s slow, often over one to three years. Knowing that helps avoid frustration; you\u2019re not doing anything wrong if it\u2019s gradual."' },
      { lbl:'Treatment', txt:'"For now, painkillers/anti-inflammatories, and physiotherapy with gentle stretches to keep as much movement as possible. In the painful phase, a steroid injection into the joint can really help \u2014 we can arrange that."' },
      { lbl:'Refer if needed', txt:'"If it stays very stiff and isn\u2019t improving, the orthopaedic team have options like stretching the joint under pressure or a small procedure to release it. Most people don\u2019t need that."' },
      { lbl:'Safety-net', txt:'"Let\u2019s get physio going, consider the injection, and tighten up your diabetes control. Come back if the pain is unmanageable or it\u2019s not improving, and we\u2019ll step up. It will get there."' },
    ],
    learning:'FROZEN SHOULDER (ADHESIVE CAPSULITIS) is progressive shoulder PAIN with global STIFFNESS and loss of movement affecting BOTH ACTIVE AND PASSIVE range \u2014 especially EXTERNAL ROTATION and reaching behind the back/overhead \u2014 often with night pain, typically arising without injury in middle age; the active AND passive global restriction (especially external rotation) is the key examination finding. It progresses in PHASES \u2014 a painful/"freezing" phase, a stiff/"frozen" phase, and a "thawing" phase of gradual recovery \u2014 with the whole course often lasting 1\u20133 years, and is associated with DIABETES (commoner, more severe, more bilateral) and thyroid disease, with glycaemic control affecting outcome. Distinguish it from rotator cuff pathology (weakness, painful arc, active restriction with relatively preserved passive movement), glenohumeral osteoarthritis (older, crepitus, X-ray changes) and referred pain \u2014 frozen shoulder restricts both active and passive movement globally, whereas the cuff typically restricts active more than passive. Manage with analgesia/NSAIDs, maintain movement with physiotherapy and gentle stretching exercises, and an intra-articular corticosteroid injection (particularly helpful in the painful/early phase), with reassurance about the natural history and optimisation of diabetes control. Refer to physiotherapy and, for refractory cases, orthopaedics for hydrodilatation, manipulation under anaesthesia or arthroscopic capsular release. Set realistic expectations \u2014 frozen shoulder is largely self-limiting but recovery is slow (often 1\u20133 years) \u2014 which manages frustration. The skill is recognising the active+passive global restriction (especially external rotation), the diabetes link, and phase-appropriate management with realistic timelines. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Frozen shoulder (adhesive capsulitis) \u00b7 active+passive global restriction (esp. external rotation) \u00b7 phases & diabetes link \u00b7 physio + steroid injection \u00b7 realistic timeline',
      points:[
        { h:'Recognise', t:'Painful global restriction of both active and passive glenohumeral movement, especially external rotation, with night pain, coming on without injury in middle age.' },
        { h:'Phases & associations', t:'Freezing \u2192 frozen \u2192 thawing; course often 1\u20133 years. Associated with diabetes (commoner/more severe/bilateral) and thyroid disease; glycaemic control affects outcome.' },
        { h:'Differential', t:'Rotator cuff (active>passive restriction, weakness, painful arc), glenohumeral OA (crepitus/X-ray), referred pain. Frozen shoulder restricts active AND passive globally.' },
        { h:'Management', t:'Analgesia/NSAIDs, physiotherapy/exercises to maintain movement, intra-articular corticosteroid injection (helpful in painful phase), optimise diabetes.' },
        { h:'Refer', t:'Physiotherapy; orthopaedics for refractory cases (hydrodilatation, manipulation under anaesthesia, arthroscopic capsular release).' },
        { h:'Realistic expectations', t:'Largely self-limiting but slow (often 1\u20133 years); honest timeline manages frustration.' },
        { h:'Never do', t:'Never dismiss as simple wear and tear; never miss the active+passive global restriction or the diabetes link; never set unrealistic quick-recovery expectations.' },
        { h:'Safety-net & follow-up', t:'Physiotherapy/injection and review; orthopaedic referral if refractory; diabetes optimisation; realistic timeline and reassurance.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c260, c261, c262, c263);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'hyperhidrosis-primary': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Theo Marsh', age: '25 years \u00b7 male',
        pmh: ['Excessive symmetrical sweating of palms/soles/axillae since adolescence', 'Even when cool; stops during sleep; family history', 'Major impact on work/confidence'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My hands and armpits drip with sweat even when I\u2019m not hot \u2014 it\u2019s ruining my work and confidence."',
        reason: 'Face-to-face \u2014 excessive localised sweating.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Recognise + validate', d:'Symmetrical focal sweating from adolescence, sleep-sparing = primary focal hyperhidrosis; a real, treatable condition.' },
        { t:'2\u2010-4',  h:'Secondary red flags', d:'Generalised/asymmetric, night sweats, weight loss, later onset \u2192 thyroid/infection/malignancy/phaeo \u2014 investigate.' },
        { t:'4\u2010-7',  h:'Stepwise treatment', d:'Aluminium chloride \u2192 iontophoresis / topical-oral anticholinergics \u2192 botulinum toxin.' },
        { t:'7\u2010-9',  h:'Refer + impact', d:'Dermatology if severe/refractory; acknowledge psychosocial impact.' },
        { t:'9\u2010-12', h:'Safety-net', d:'Review response/escalate; investigate if secondary red flags appear.' }
      ],
      wordPics: {
        fail: 'Dismisses it as trivial/hygiene; offers no stepwise treatment; misses secondary red flags or ignores the psychosocial impact.',
        pass: 'Recognises primary focal hyperhidrosis, excludes secondary red flags, and starts stepwise treatment with impact acknowledgement.',
        exc:  'Recognises primary focal hyperhidrosis, excludes secondary red flags, manages stepwise (aluminium chloride \u2192 iontophoresis/anticholinergics \u2192 botulinum toxin), refers if severe, and validates the major psychosocial impact.'
      },
      avoid: [
        { dont:'"Everyone sweats \u2014 try a stronger deodorant and don\u2019t worry about it."', instead:'"This is hyperhidrosis, a treatable condition \u2014 we start with a strong aluminium-chloride antiperspirant and have several further options."', why:'Dismissing it as trivial ignores a treatable condition with major psychosocial impact.' },
        { dont:'(Missing secondary) not asking about generalised/night sweats.', instead:'"Is it all over your body, with night sweats or weight loss? Those would make me investigate further."', why:'Secondary hyperhidrosis red flags warrant a work-up.' },
        { dont:'(No escalation path) leaving him with only step one.', instead:'"If the antiperspirant isn\u2019t enough, there\u2019s iontophoresis, tablets and Botox injections."', why:'A clear stepwise path is needed for an impairing condition.' }
      ]
    },

    'chronic-urticaria': {
      ceg: ['New & undifferentiated presentations', 'Prescribing & pharmacology'],
      stem: {
        name: 'Sofia Larkin', age: '34 years \u00b7 female',
        pmh: ['Itchy weals most days >6 weeks; each weal <24h, leaves no mark; \u00b1 lip/eyelid angioedema', 'No consistent trigger; otherwise well', 'Hunting for an allergen'],
        meds: ['Cetirizine PRN'],
        allergy: 'NKDA',
        recent: '"Itchy raised welts that come and go within hours \u2014 months now, and I can\u2019t find a trigger."',
        reason: 'Face-to-face \u2014 recurrent itchy weals.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Recognise', d:'Weals most days >6 weeks, each <24h no mark, \u00b1 angioedema, no trigger = chronic spontaneous urticaria.' },
        { t:'2\u2010-4',  h:'Reassure + stop trigger-hunt', d:'Usually not a dangerous allergy; allergy testing unrewarding; aggravators (NSAIDs/heat/stress) \u2260 cause.' },
        { t:'4\u2010-6',  h:'Vasculitis check', d:'Weals >24h/painful/bruising \u2192 urticarial vasculitis (refer).' },
        { t:'6\u2010-9',  h:'Stepwise antihistamines', d:'Regular (not PRN) non-sedating antihistamine, up-titrate; refer if refractory (omalizumab).' },
        { t:'9\u2010-12', h:'Angioedema safety-net', d:'999 for tongue/throat swelling or breathing difficulty; consider ACEi/hereditary angioedema.' }
      ],
      wordPics: {
        fail: 'Sends on extensive allergy testing/elimination diets; relies on PRN antihistamines; misses urticarial vasculitis or omits angioedema red flags.',
        pass: 'Recognises chronic urticaria, reassures and starts regular up-titrated antihistamines with angioedema safety-net.',
        exc:  'Recognises chronic spontaneous urticaria, reassures (not a dangerous allergy; testing unrewarding), starts regular up-titrated antihistamines, refers if refractory (omalizumab) or vasculitis features, and gives the angioedema/airway safety-net.'
      },
      avoid: [
        { dont:'"Let\u2019s do allergy testing and an elimination diet to find the trigger."', instead:'"In chronic urticaria there\u2019s usually no allergy to find \u2014 testing is mostly unhelpful; the key is regular antihistamines."', why:'Extensive allergy testing/elimination diets are usually unrewarding in chronic spontaneous urticaria.' },
        { dont:'(PRN only) "Take an antihistamine when you break out."', instead:'"Take a non-drowsy antihistamine every day, and we can increase the dose if needed."', why:'Regular (not PRN) up-titrated antihistamines are first-line.' },
        { dont:'(No angioedema advice) ending without safety-netting.', instead:'"If your tongue or throat swells or you can\u2019t breathe, call 999."', why:'Airway-threatening angioedema needs explicit emergency safety-netting.' }
      ]
    },

    'recurrent-epistaxis': {
      ceg: ['Urgent & unscheduled care', 'Prescribing & pharmacology'],
      stem: {
        name: 'Walter Penn', age: '68 years \u00b7 male',
        pmh: ['Recurrent anterior nosebleeds; latest needed prolonged pressure', 'On a DOAC/warfarin (cardiac); hypertensive', 'Bleeds from both nostrils (not unilateral)'],
        meds: ['Apixaban/warfarin', 'Amlodipine'],
        allergy: 'NKDA',
        recent: '"I keep getting nosebleeds \u2014 the latest wouldn\u2019t stop for ages, and I\u2019m on blood thinners."',
        reason: 'Face-to-face \u2014 recurrent/troublesome nosebleeds.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Teach first-aid', d:'Sit forward, pinch the SOFT part 10\u201315 min continuously, lean forward, ice, don\u2019t tip back.' },
        { t:'2\u2010-4',  h:'Review meds + BP', d:'Anticoagulant indication/control (INR if warfarin); treat poorly controlled hypertension.' },
        { t:'4\u2010-6',  h:'Escalation criteria', d:'Uncontrolled/heavy/posterior bleeding or haemodynamic compromise \u2192 ENT/emergency (packing).' },
        { t:'6\u2010-9',  h:'Treat + refer', d:'Naseptin/cautery of anterior point; ENT for recurrent/refractory.' },
        { t:'9\u2010-12', h:'Red flags + prevent', d:'Unilateral bleeding/obstruction/mass (sinonasal tumour \u2192 ENT); HHT; humidification/avoid picking.' }
      ],
      wordPics: {
        fail: 'Teaches head-back/bridge-pinch first-aid; ignores anticoagulation/BP; misses escalation criteria or a unilateral nasal mass.',
        pass: 'Teaches correct first-aid, reviews anticoagulation/BP, sets escalation criteria, and treats/refers for recurrence.',
        exc:  'Teaches correct first-aid, reviews anticoagulation (INR/indication) and BP, sets escalation/admission criteria, offers cautery/Naseptin with ENT referral for recurrence, and keeps unilateral-mass/bleeding-disorder red flags in mind.'
      },
      avoid: [
        { dont:'"Tip your head back and pinch the top of your nose."', instead:'"Lean FORWARD and pinch the SOFT part of the nose firmly for 10\u201315 minutes without letting go."', why:'Head-back/bridge-pinch is wrong first-aid and ineffective.' },
        { dont:'(Ignoring anticoagulation) not reviewing the blood thinner/BP.', instead:'"Let\u2019s review your blood thinner and check your blood pressure \u2014 both affect bleeding."', why:'Anticoagulation control and hypertension are key contributors.' },
        { dont:'(Missing unilateral mass) treating all recurrent bleeds the same.', instead:'"Persistent one-sided bleeding or blockage I\u2019d refer to ENT to exclude a growth."', why:'Unilateral persistent bleeding/obstruction can signal a sinonasal tumour.' }
      ]
    },

    'frozen-shoulder': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Denise Falk', age: '54 years \u00b7 female',
        pmh: ['Months of progressive shoulder pain + global stiffness; \u2193 active AND passive movement (esp. external rotation)', 'Night pain; no injury; reaching behind back/overhead limited', 'Type 2 diabetes'],
        meds: ['Metformin'],
        allergy: 'NKDA',
        recent: '"My shoulder\u2019s stiff and painful \u2014 I can\u2019t reach behind my back, and it\u2019s getting worse."',
        reason: 'Face-to-face \u2014 a painful, stiff shoulder.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Recognise', d:'Global restriction of active AND passive movement (esp. external rotation) + night pain, no injury = frozen shoulder.' },
        { t:'2\u2010-4',  h:'Phases + diabetes', d:'Freezing \u2192 frozen \u2192 thawing, often 1\u20103 years; diabetes association \u2014 optimise control.' },
        { t:'4\u2010-6',  h:'Differential', d:'Rotator cuff (active>passive, weakness), OA, referred pain \u2014 vs global active+passive restriction.' },
        { t:'6\u2010-9',  h:'Manage', d:'Analgesia/NSAIDs + physiotherapy + intra-articular steroid injection (painful phase); optimise diabetes.' },
        { t:'9\u2010-12', h:'Refer + expectations', d:'Physio; orthopaedics if refractory (hydrodilatation/manipulation/release); realistic slow timeline.' }
      ],
      wordPics: {
        fail: 'Dismisses as wear and tear or mislabels as rotator cuff; no injection/physio; sets unrealistic quick-recovery expectations; ignores diabetes.',
        pass: 'Recognises frozen shoulder, notes the diabetes link, and manages with physio/steroid injection and realistic timelines.',
        exc:  'Recognises frozen shoulder (active+passive global restriction, esp. external rotation), explains phases and the diabetes link (optimise control), manages with analgesia/physio/intra-articular steroid injection, refers if refractory, and sets a realistic 1\u20133-year timeline.'
      },
      avoid: [
        { dont:'"It\u2019s just wear and tear \u2014 some painkillers and it\u2019ll settle soon."', instead:'"This is a frozen shoulder \u2014 the joint capsule tightens; it gets better but slowly, over one to three years, and physio and a steroid injection help."', why:'Dismissing it and implying quick recovery misleads; frozen shoulder is a distinct, slow condition.' },
        { dont:'(Mislabelling) treating it as a rotator cuff tear.', instead:'"Your movement is limited whether you move it or I move it \u2014 that points to a frozen shoulder, not a cuff problem."', why:'The active+passive global restriction distinguishes frozen shoulder from rotator cuff pathology.' },
        { dont:'(Ignoring diabetes) not mentioning glycaemic control.', instead:'"Frozen shoulder is commoner in diabetes, and keeping your sugars controlled helps it."', why:'The diabetes link affects severity and outcome and should be optimised.' }
      ]
    }

  });

})();
