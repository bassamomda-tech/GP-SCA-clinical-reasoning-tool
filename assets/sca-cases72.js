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
    id: 'hyperhidrosis-primary',
    title: '"My hands and armpits drip with sweat even when I\u2019m not hot \u2014 it\u2019s ruining my work and my confidence"',
    type: 'video',
    duration: 12,
    meta: {
      age: 25,
      sex: 'M',
      setting: 'Video consultation, with the examination (hands, lymph nodes, thyroid, pulse) arranged face to face if any secondary features \u2014 excessive localised sweating.',
      system: 'Dermatology \u2014 primary focal hyperhidrosis: recognition, stepwise treatment & impact',
      checked: 'October 2026'
    },
    brief: 'Mr Theo Marsh, 25, has excessive SWEATING of the PALMS, SOLES and AXILLAE since his teens \u2014 symmetrical, occurring even when not hot, stopping during sleep, with a major impact on work (soaking documents/handshakes), social life and confidence. Recognise PRIMARY FOCAL HYPERHIDROSIS \u2014 excessive localised sweating (palms/soles/axillae/face), typically bilateral/symmetrical, onset in childhood/adolescence, NOT during sleep, often with a family history \u2014 and distinguish it from SECONDARY (generalised) hyperhidrosis, which has red flags warranting a work-up (generalised/asymmetric sweating, NIGHT sweats, weight loss, onset later in life, systemic symptoms \u2014 consider hyperthyroidism, infection/TB, malignancy/lymphoma, menopause, diabetes/hypoglycaemia, anxiety, drugs); score severity with the Hyperhidrosis Disease Severity Scale (HDSS, International Hyperhidrosis Society, international: 1\u20134, with 3 or 4 = severe); MANAGE stepwise \u2014 topical ALUMINIUM CHLORIDE hexahydrate 20% first-line (BNF), applied to completely DRY skin at bedtime and WASHED OFF in the morning, nightly at first then less often, avoiding shaving just before use \u2014 then options (tap-water iontophoresis for hands/feet; oral antimuscarinics such as propantheline, dose per BNF, with dry mouth, blurred vision and constipation limiting use \u2014 oxybutynin is an OFF-LABEL use; topical glycopyrronium only via specialist or local formulary arrangements; botulinum toxin A for severe axillary disease, specialist use; referral for severe/refractory \u2014 and endoscopic thoracic sympathectomy for severe upper-limb disease after other treatments, NICE HTG339 (formerly IPG487), with compensatory sweating usual and possibly severe), with practical advice; and crucially ACKNOWLEDGE the major PSYCHOSOCIAL impact and that it is a treatable medical condition, not a hygiene failing. The skill is recognising primary focal hyperhidrosis, excluding secondary red flags (examining face to face if any are present), stepwise treatment, and addressing the impact.',
    script: {
      opening: '"This is embarrassing, doctor, but my hands and armpits just drip with sweat \u2014 even when I\u2019m cool and calm. My palms are so wet I ruin paperwork and dread shaking hands, and my shirts are soaked. It\u2019s been like this since school. It\u2019s really knocking my confidence at work. Is there anything that helps?"',
      facts: [
        {
          topic: 'The sweating',
          text: 'Since about age 13. Palms, soles and armpits, both sides equally. Happens even when cool and relaxed, worse when nervous or warm. Never at night \u2014 "it\u2019s fine when I\u2019m asleep". Changes shirts at lunchtime. Will hold his palm to the camera: visibly wet.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No night sweats, no fevers, no weight loss, no lumps. No palpitations, headaches or tremor. Not all over the body. No new medicines. Not diabetic. No change in pattern recently.'
        },
        {
          topic: 'Severity (if asked to rate)',
          text: 'If asked how much it interferes, on a scale where 1 is never noticeable and 4 is intolerable and always interferes: "Three, I\u2019d say \u2014 barely tolerable, often interferes."'
        },
        {
          topic: 'What he has tried',
          text: 'Ordinary antiperspirants only. Never tried aluminium chloride. Carries tissues and wipes his hands on his trousers.'
        },
        {
          topic: 'Health',
          text: 'Well. No regular medicines. No glaucoma, no bladder problems. No allergies. Not sure about family \u2014 "Mum\u2019s hands were always clammy, now I think about it".'
        },
        {
          topic: 'Work and social',
          text: 'Works as an estate agent \u2014 shaking hands and signing contracts all day. Has turned down a promotion that involves presentations. Avoids holding hands with his new girlfriend. Anxious sometimes, "fed up", not depressed. Non-smoker, drinks 10 units a week.'
        },
        {
          topic: 'How to play it',
          text: 'Embarrassed, apologetic for "wasting your time with sweat". Relax if the doctor takes it seriously. Ask: "Does it work on hands?" and "And my armpits if the cream doesn\u2019t work?". Happy to start with a cream.'
        }
      ],
      ice: {
        ideas: '"I thought I\u2019m just a sweaty person and nothing could be done."',
        concerns: 'HIDDEN AGENDA \u2014 confidence: he turned down a promotion and is worried his girlfriend will be put off.',
        expectations: '"Something that helps \u2014 I\u2019d heard about injections."'
      },
      cues: [
        '"It\u2019s really knocking my confidence" \u2014 explore the impact on work and relationships.',
        '"It\u2019s fine when I\u2019m asleep" \u2014 supports primary focal hyperhidrosis.',
        '"I thought nothing could be done" \u2014 he needs to know there is a stepwise plan.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises PRIMARY FOCAL HYPERHIDROSIS \u2014 localised, bilateral/symmetrical palm/sole/axilla/face sweating, young onset, even when not hot but sleep-sparing, often familial'
      },
      {
        dom: 'dg',
        text: 'Distinguishes SECONDARY hyperhidrosis and its RED FLAGS (generalised/asymmetric, night sweats, weight loss, later onset, systemic symptoms \u2014 thyroid, infection/TB, malignancy/lymphoma, menopause, diabetes, phaeo, drugs) warranting a work-up'
      },
      {
        dom: 'cm',
        text: 'Manages STEPWISE \u2014 first-line topical aluminium chloride with the correct technique (dry skin at bedtime, washed off in the morning), then iontophoresis (palms/soles), oral anticholinergics (oxybutynin off-label; topical glycopyrronium specialist/local formulary only), and botulinum toxin (axillae) \u2014 with practical advice and an HDSS severity score'
      },
      {
        dom: 'cm',
        text: 'Refers to dermatology for severe/refractory cases or specialist treatments (and considers surgery in selected severe cases), and treats any identified secondary cause'
      },
      {
        dom: 'ro',
        text: 'ACKNOWLEDGES the major psychosocial impact and validates it as a recognised, treatable condition (not a hygiene failing), addressing his embarrassment'
      },
      { dom: 'ro', text: 'Explains the stepwise options and realistic expectations, checking understanding' },
      {
        dom: 'ro',
        text: 'Explores the impact on his work, relationships and confidence and what a good outcome would look like for him, and tailors the stepwise plan to his priorities'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: review of treatment response and escalation, investigation if any secondary red flags, referral if severe, and impact support \u2014 recognising primary focal hyperhidrosis and treating it, not dismissing it'
      }
    ],
    worked: [
      {
        lbl: 'Validate + name it',
        txt: '"First, this is a genuine medical condition called hyperhidrosis \u2014 not you being unhygienic or \u2018just sweaty\u2019, and it\u2019s treatable. The pattern you describe \u2014 hands and armpits since school, even when you\u2019re cool, but fine when you\u2019re asleep \u2014 is the common, harmless type."'
      },
      {
        lbl: 'Quick red-flag check',
        txt: '"Just to be thorough \u2014 is the sweating all over your body or just these areas? Any night sweats, weight loss, or feeling generally unwell? \u2026 No, it\u2019s focal and you\u2019re otherwise well, which is reassuring."'
      },
      {
        lbl: 'Start treatment',
        txt: '"We treat it in steps. First-line is a strong aluminium-chloride antiperspirant \u2014 it can be very effective. Put it on completely dry skin at bedtime and wash it off in the morning, every night at first and then less often as it works; don\u2019t shave just before. I\u2019ll start you on that."'
      },
      {
        lbl: 'Next options',
        txt: '"If that\u2019s not enough, there are good options: a treatment called iontophoresis for the hands, tablets that reduce sweating (one of them, oxybutynin, isn\u2019t licensed for this, so we\u2019d discuss that), creams through the specialists, and Botox injections, which work really well for the armpits. So there\u2019s a clear path even if step one isn\u2019t enough."'
      },
      {
        lbl: 'Acknowledge impact',
        txt: '"I can hear how much this affects your confidence and work \u2014 that\u2019s completely understandable, and it\u2019s exactly why it\u2019s worth treating properly rather than putting up with."'
      },
      {
        lbl: 'Refer + safety-net',
        txt: '"If it stays severe despite these, I\u2019ll refer you to dermatology for the injections or other options. Come back if it\u2019s not improving, or if you ever develop sweating all over, night sweats or weight loss \u2014 that I\u2019d want to look into differently."'
      }
    ],
    learning: 'PRIMARY FOCAL HYPERHIDROSIS is excessive LOCALISED sweating of the PALMS, SOLES, AXILLAE and/or face, typically BILATERAL and SYMMETRICAL, with onset in childhood/adolescence, occurring even when the person is not hot but characteristically STOPPING during SLEEP, often with a family history and worsened by stress \u2014 a benign, recognised condition. Distinguish it from SECONDARY (often generalised) hyperhidrosis, whose red flags warrant a work-up: generalised or asymmetric sweating, NIGHT sweats, weight loss, later-life onset, or systemic symptoms \u2014 prompting consideration of hyperthyroidism, infection (including TB), malignancy/lymphoma, menopause, diabetes/hypoglycaemia, anxiety, phaeochromocytoma and drugs. Manage primary focal hyperhidrosis STEPWISE: first-line topical ALUMINIUM CHLORIDE hexahydrate 20% (BNF), applied to completely dry skin at bedtime and washed off in the morning, then iontophoresis (especially palms/soles), topical anticholinergics (glycopyrronium \u2014 specialist or local formulary use only), oral anticholinergics (propantheline, dose per BNF; oxybutynin off-label \u2014 weighing side-effects), and BOTULINUM TOXIN A injections (effective for severe axillary hyperhidrosis; specialist), with practical advice (absorbent clothing, sweat shields) and severity scored with the HDSS (International Hyperhidrosis Society, international; 3 or 4 = severe). Refer to dermatology for severe/refractory cases or specialist treatments, and consider surgery (endoscopic thoracic sympathectomy, NICE HTG339, formerly IPG487) in carefully selected severe upper-limb cases after other treatments, with counselling that compensatory sweating is usual and can be severe; treat any identified secondary cause. Crucially, acknowledge the major psychosocial impact (confidence, work, social life, relationships, anxiety) and validate that this is a treatable medical condition, not a hygiene failing. The skill is recognising primary focal hyperhidrosis, excluding secondary red flags, stepwise treatment, referral if severe, and addressing the impact.',
    knowledge: {
      guideline: 'Hyperhidrosis \u00b7 primary focal vs secondary (red flags) \u00b7 stepwise treatment (aluminium chloride \u2192 iontophoresis/anticholinergics \u2192 botulinum toxin) \u00b7 psychosocial impact \u00b7 [1] BNF aluminium chloride hexahydrate \u00b7 [2] BNF botulinum toxin type A (severe axillary hyperhidrosis, specialist use) \u00b7 [3] BNF propantheline bromide and other antimuscarinics \u00b7 [4] NICE HTG339 (formerly IPG487) Endoscopic thoracic sympathectomy for primary hyperhidrosis of the upper limb (2014) \u00b7 [5] International Hyperhidrosis Society: Hyperhidrosis Disease Severity Scale (international)',
      points: [
        {
          h: 'Primary focal',
          t: 'Localised, bilateral/symmetrical palm/sole/axilla/face sweating, young onset, even when not hot but sleep-sparing, often familial. Benign.'
        },
        {
          h: 'Secondary red flags',
          t: 'Generalised/asymmetric sweating, night sweats, weight loss, later onset, systemic symptoms \u2192 work-up (thyroid, infection/TB, malignancy/lymphoma, menopause, diabetes, phaeo, drugs).'
        },
        {
          h: 'Stepwise treatment',
          t: 'First-line topical aluminium chloride 20% on dry skin at bedtime, washed off in the morning [1]; then iontophoresis (palms/soles), oral antimuscarinics (propantheline [3]; oxybutynin off-label), topical glycopyrronium (specialist/local formulary only), botulinum toxin (axillae, specialist [2]). HDSS 3\u20134 = severe [5]. Practical clothing advice.'
        },
        {
          h: 'Refer/severe options',
          t: 'Dermatology for severe/refractory or specialist treatments; selected surgery (endoscopic thoracic sympathectomy, NICE HTG339 [4]) with counselling that compensatory sweating is usual and can be severe.'
        },
        {
          h: 'Acknowledge impact',
          t: 'Major psychosocial impact (confidence/work/social/relationships). Validate it as a treatable medical condition, not a hygiene failing.'
        },
        { h: 'Treat secondary cause', t: 'If a secondary cause is found, treat it (e.g. hyperthyroidism).' },
        {
          h: 'Never do',
          t: 'Never dismiss as trivial/hygiene; never miss secondary red flags (night sweats/weight loss/generalised); never skip the stepwise options or the impact.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Review response and escalate; investigate if secondary red flags; refer if severe; impact support.'
        }
      ]
    }
  };

  /* ===== 261. Chronic spontaneous urticaria / angioedema ===== */
  const c261 = {
    id: 'chronic-urticaria',
    title: '"I keep getting these itchy raised welts all over that come and go within hours \u2014 it\u2019s been months and I can\u2019t find a trigger"',
    type: 'video',
    duration: 12,
    meta: {
      age: 34,
      sex: 'F',
      setting: 'Video consultation, with the skin examined face to face if the weals cannot be seen clearly on camera or photographs \u2014 recurrent itchy weals.',
      system: 'Dermatology / Allergy \u2014 chronic spontaneous urticaria: management & the angioedema/anaphylaxis caveat',
      checked: 'October 2026'
    },
    brief: 'Mrs Sofia Larkin, 34, has had recurrent itchy raised WEALS (hives) most days for over 6 weeks, each individual weal coming and going within 24 hours (leaving no mark), sometimes with lip/eyelid swelling (ANGIOEDEMA), with no consistent trigger identified, otherwise well. Recognise CHRONIC SPONTANEOUS URTICARIA (urticaria most days for >6 weeks, often idiopathic/autoimmune, frequently NO identifiable allergen) \u2014 and that individual weals lasting <24h and resolving without bruising is typical (weals lasting >24h or leaving bruising suggest urticarial vasculitis \u2014 refer); reassure it is usually NOT a dangerous allergy and that extensive allergy testing is usually unrewarding in chronic spontaneous urticaria; limit tests to FBC and CRP or ESR (BSACI 2015), with others only as the history suggests; MANAGE stepwise \u2014 regular (not just PRN) non-sedating ANTIHISTAMINES, up-titrated after 2\u20134 weeks to up to four times the standard dose if needed (international EAACI/GA\u00b2LEN/EuroGuiDerm/APAAACI guideline 2026; above the licensed dose this is OFF-LABEL, so explain it, BNF), asking about PREGNANCY and breastfeeding first (BSACI: lowest dose of loratadine or chlorphenamine in pregnancy, cetirizine second-line), with add-on/specialist options for refractory cases via dermatology/immunology \u2014 omalizumab is the preferred add-on, recommended by NICE TA339 for severe disease (UAS7 of 28 or more) despite antihistamine-based treatment, in specialist care, with ciclosporin a later specialist option; if up-dosed antihistamine fails, consider adding montelukast (BAD 2021 UK guideline) while referring, because NICE TA339 requires an inadequate response to H1 antihistamines AND a leukotriene receptor antagonist before omalizumab (the current international EAACI algorithm omits montelukast, and MHRA Drug Safety Update April 2024 warns of neuropsychiatric reactions); advise on trigger avoidance where relevant (NSAIDs, opiates, heat, pressure, stress can aggravate) and a symptom/severity tool; and crucially counsel the ANGIOEDEMA/ANAPHYLAXIS safety-net \u2014 seek emergency help for tongue/throat swelling or breathing difficulty. The skill is recognising chronic urticaria, reassuring + regular up-titrated antihistamines, not over-investigating for allergy, referring if refractory/vasculitis, and the angioedema red-flag advice.',
    script: {
      opening: '"For a couple of months now I keep breaking out in these itchy raised welts all over \u2014 they come up, last a few hours, then vanish and pop up somewhere else. Sometimes my lips or eyelids puff up. I\u2019ve tried changing everything \u2014 food, washing powder \u2014 but I can\u2019t find a trigger. The itch is driving me mad. What\u2019s causing it?"',
      facts: [
        {
          topic: 'The welts',
          text: 'About 10 weeks. Itchy raised pale-pink welts, anywhere on the body, most days. Each one lasts a few hours, then goes with no mark. Has photos on her phone she can show. Not painful, no burning, no bruising afterwards.'
        },
        {
          topic: 'Swelling',
          text: 'Lips or eyelids swell about once a fortnight; goes down within a day. Never her tongue or throat; never difficulty breathing or swallowing; never fainted.'
        },
        {
          topic: 'Triggers tried',
          text: 'Cut out dairy, gluten and shellfish; changed washing powder and shower gel. No difference. Hot showers and tight waistbands make it worse. No new pets.'
        },
        {
          topic: 'Other questions (if asked)',
          text: 'No fever, joint pains, weight loss or tiredness. No recent infections. Feels well apart from the itch. Not pregnant, not breastfeeding. No thyroid problems known.'
        },
        {
          topic: 'Medicines',
          text: 'Takes cetirizine 10 mg "only when it\u2019s bad". Takes ibuprofen for period pains \u2014 about 5 days a month (only if asked about painkillers). No ACE inhibitors. No allergies known.'
        },
        {
          topic: 'Impact and social',
          text: 'Itch worst at night \u2014 sleeping badly. Works as a hotel receptionist; embarrassed when welts appear on her neck. Married, no children.'
        },
        {
          topic: 'How to play it',
          text: 'Frustrated and tired; keen to find "the allergy". Ask: "So what am I allergic to?" Relieved to hear she can stop cutting foods out. Ask if the swelling is dangerous. Admit you only take the antihistamine when it\u2019s bad.'
        }
      ],
      ice: {
        ideas: '"It must be an allergy to something \u2014 I just need to find it."',
        concerns: 'HIDDEN AGENDA \u2014 "I\u2019m scared it\u2019s a dangerous allergy and one day my throat will close up."',
        expectations: '"Allergy tests to find the trigger."'
      },
      cues: [
        '"I can\u2019t find a trigger" \u2014 explain spontaneous urticaria and avoid over-testing.',
        '"Sometimes my lips or eyelids puff up" \u2014 angioedema to safety-net.',
        '"I only take the antihistamine when it\u2019s bad" \u2014 treatment to optimise.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises CHRONIC SPONTANEOUS URTICARIA \u2014 itchy weals most days >6 weeks, each weal resolving within 24h without a mark, \u00b1 angioedema, often with no identifiable trigger'
      },
      {
        dom: 'dg',
        text: 'Recognises when to consider URTICARIAL VASCULITIS (weals lasting >24h, painful/burning, leaving bruising) and refers for assessment'
      },
      {
        dom: 'ro',
        text: 'Reassures it is usually NOT a dangerous allergy and that extensive allergy testing is unrewarding \u2014 avoiding fruitless elimination diets \u2014 while noting aggravating factors (NSAIDs, opiates, heat, pressure, stress)'
      },
      {
        dom: 'cm',
        text: 'Manages STEPWISE with REGULAR (not PRN) non-sedating antihistamines, UP-TITRATED to higher doses if needed, after checking pregnancy and explaining that fourfold dosing is off-label, limits tests to FBC and CRP/ESR, and refers to dermatology/immunology for refractory cases (e.g. omalizumab, NICE TA339)'
      },
      {
        dom: 'cm',
        text: 'Gives the ANGIOEDEMA/ANAPHYLAXIS safety-net (999 for tongue/throat swelling or breathing/swallowing difficulty) and considers ACE-inhibitor angioedema and hereditary angioedema where relevant'
      },
      {
        dom: 'ro',
        text: 'Addresses the frustration and the trigger-hunt, reassures appropriately, and checks understanding of the regular-antihistamine plan'
      },
      {
        dom: 'ro',
        text: 'Explains why allergy testing is usually unhelpful without being dismissive of her concern'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: angioedema/airway red flags, review and up-titration/referral if not controlled, vasculitis features warranting referral, and reassurance \u2014 regular up-titrated antihistamines, not over-investigation'
      }
    ],
    worked: [
      {
        lbl: 'Name + reassure',
        txt: '"What you\u2019ve got is chronic urticaria \u2014 hives that come and go, each spot lasting under a day and leaving no mark, often with a bit of lip or eye swelling. The frustrating truth is that in most people there\u2019s no specific allergy or food behind it \u2014 the body just produces them, often for months, then it settles."'
      },
      {
        lbl: 'Stop the trigger-hunt',
        txt: '"So you can stop driving yourself mad searching for a trigger \u2014 and allergy testing usually isn\u2019t helpful here, because it\u2019s generally not an allergy. Things like anti-inflammatory painkillers, heat, pressure and stress can flare it, but they\u2019re not the cause."'
      },
      {
        lbl: 'Treat properly',
        txt: '"The key is taking a non-drowsy antihistamine REGULARLY, every day \u2014 not just when you break out. And if the standard dose isn\u2019t enough after 2 to 4 weeks, we can increase it up to four times the usual dose, which often does the trick. That\u2019s above the licensed dose, which is standard practice for this, and before we do I need to ask \u2014 any chance you could be pregnant, or are you breastfeeding? I\u2019ll also check a simple blood count and inflammation marker."'
      },
      {
        lbl: 'Escalation',
        txt: '"If that still doesn\u2019t control it, I\u2019ll refer you to the skin or allergy specialists \u2014 there are excellent further treatments, including an injection called omalizumab, for stubborn cases."'
      },
      {
        lbl: 'Angioedema safety-net',
        txt: '"One important safety point: the swelling is usually harmless, BUT if your TONGUE or THROAT swells, or you struggle to breathe or swallow, call 999 immediately \u2014 that\u2019s an emergency."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if the regular antihistamine isn\u2019t controlling it so we can increase it or refer, or if any spot lasts more than a day, becomes painful or bruises \u2014 that I\u2019d want to look at differently."'
      }
    ],
    learning: 'CHRONIC SPONTANEOUS URTICARIA is recurrent itchy WEALS (hives) occurring most days for MORE THAN 6 WEEKS, with each individual weal coming and going within 24 hours and leaving NO mark, often with ANGIOEDEMA (lip/eyelid/soft-tissue swelling) and frequently NO identifiable trigger (often idiopathic/autoimmune). If individual weals last LONGER than 24 hours, are painful/burning, or leave bruising/pigmentation, consider URTICARIAL VASCULITIS (refer dermatology for assessment/biopsy). Reassure that chronic spontaneous urticaria is usually NOT a dangerous food allergy and that extensive allergy testing is generally unrewarding \u2014 avoid fruitless elimination diets/allergy tests \u2014 while identifying aggravating (not causative) factors where relevant (NSAIDs/aspirin, opiates, heat, pressure, alcohol, stress, infection). Manage STEPWISE: regular (not just PRN) non-sedating ANTIHISTAMINES are first-line (BSACI 2015), up-titrated after 2\u20134 weeks to up to four times the standard dose if not controlled (international EAACI/GA\u00b2LEN/EuroGuiDerm/APAAACI guideline 2026; off-label above the licensed dose, so explain it; ask about pregnancy and breastfeeding first); limit tests to FBC and CRP or ESR; for refractory cases, refer to dermatology/immunology for add-on options (omalizumab preferred \u2014 NICE TA339 for severe disease with UAS7 of 28 or more despite antihistamine-based treatment \u2014 then ciclosporin; consider a montelukast add-on first if up-dosed antihistamine fails \u2014 BAD 2021, and a leukotriene receptor antagonist trial is required before omalizumab under TA339 \u2014 with an MHRA April 2024 neuropsychiatric warning), with short oral steroid courses only for severe flares (not long-term). Crucially counsel the angioedema/anaphylaxis safety-net \u2014 seek emergency help (999) for tongue/throat swelling or difficulty breathing/swallowing \u2014 and consider ACE-inhibitor-induced angioedema (stop the ACE inhibitor) and hereditary angioedema (C1-esterase inhibitor deficiency) in recurrent isolated angioedema without weals. The skill is recognising chronic urticaria, reassuring and stopping the trigger-hunt, starting regular up-titrated antihistamines, referring if refractory/vasculitis, and giving the angioedema red-flag advice.',
    knowledge: {
      guideline: 'Chronic spontaneous urticaria \u00b7 regular up-titrated non-sedating antihistamines \u00b7 avoid unrewarding allergy testing \u00b7 omalizumab if refractory \u00b7 angioedema/anaphylaxis safety-net \u00b7 [1] BSACI guideline for the management of chronic urticaria and angioedema (Powell et al., Clin Exp Allergy 2015) \u00b7 [2] EAACI/GA\u00b2LEN/EuroGuiDerm/APAAACI urticaria guideline (2026 update, Allergy; international) \u00b7 [3] NICE TA339 (2015) Omalizumab for previously treated chronic spontaneous urticaria \u00b7 [4] BNF antihistamines \u00b7 [5] MHRA Drug Safety Update (April 2024): montelukast neuropsychiatric reactions \u00b7 [6] BAD guidelines for the management of people with chronic urticaria 2021 (Sabroe et al., Br J Dermatol 2022)',
      points: [
        {
          h: 'Recognise',
          t: 'Itchy weals most days >6 weeks, each resolving within 24h without a mark, \u00b1 angioedema, often no identifiable trigger (idiopathic/autoimmune).'
        },
        {
          h: 'Urticarial vasculitis',
          t: 'Weals lasting >24h, painful/burning, or leaving bruising \u2192 consider urticarial vasculitis (refer dermatology/biopsy).'
        },
        {
          h: 'Not a dangerous allergy',
          t: 'Usually not allergic; extensive allergy testing unrewarding \u2014 avoid elimination diets [1]. Limited tests: FBC and CRP or ESR [1,2]. Aggravators (NSAIDs, opiates, heat, pressure, stress) are not the cause.'
        },
        {
          h: 'Stepwise antihistamines',
          t: 'Regular (not PRN) non-sedating antihistamine first-line; up-titrate after 2\u20134 weeks to up to four times the standard dose if uncontrolled [2] (off-label \u2014 explain [4]; check pregnancy/breastfeeding first [1]); short oral steroid only for severe flares.'
        },
        {
          h: 'Refractory',
          t: 'Refer dermatology/immunology in refractory cases: omalizumab preferred add-on (NICE TA339 [3]: UAS7 28 or more despite H1 antihistamines and a leukotriene receptor antagonist), then ciclosporin [2]. Consider a montelukast add-on if up-dosed antihistamine fails [6] (omitted from the international algorithm [2]) \u2014 MHRA neuropsychiatric warning [5].'
        },
        {
          h: 'Angioedema safety-net',
          t: '999 for tongue/throat swelling or breathing/swallowing difficulty. Consider ACE-inhibitor angioedema (stop ACEi) and hereditary angioedema (recurrent angioedema without weals).'
        },
        {
          h: 'Never do',
          t: 'Never send on fruitless allergy testing/elimination diets; never rely on PRN-only antihistamines; never miss urticarial vasculitis or airway-threatening angioedema.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Angioedema/airway red flags (999); review and up-titrate/refer if uncontrolled; vasculitis features \u2192 refer; reassurance.'
        }
      ]
    }
  };

  /* ===== 262. Recurrent epistaxis ===== */
  const c262 = {
    id: 'recurrent-epistaxis',
    title: '"I keep getting nosebleeds \u2014 the latest one wouldn\u2019t stop for ages, and I\u2019m on blood thinners"',
    type: 'video',
    duration: 12,
    meta: {
      age: 68,
      sex: 'M',
      setting: 'Video consultation (not bleeding now), with pulse, BP and anterior rhinoscopy arranged face to face \u2014 recurrent/troublesome nosebleeds.',
      system: 'ENT \u2014 epistaxis: first-aid, anticoagulation & when to worry',
      checked: 'October 2026'
    },
    brief: 'Mr Walter Penn, 68 (on apixaban, a DOAC, for atrial fibrillation; hypertensive), has recurrent ANTERIOR nosebleeds, the latest needing prolonged pressure to stop. Cover EPISTAXIS management: teach correct FIRST-AID (sit forward, pinch the SOFT part of the nose for 10\u201315 minutes continuously, lean forward, a cold pack on the bridge of the nose may help, avoid lying back/sniffing), recognise most are ANTERIOR (Little\u2019s area) and benign \u2014 precipitated by nose-picking/dryness/trauma, but consider ANTICOAGULATION/antiplatelets, HYPERTENSION, and review the anticoagulant \u2014 which drug it is (check the repeat list), the indication and whether still needed, dose against weight and renal function for a DOAC, interacting drugs (antiplatelets, NSAIDs), INR if on warfarin (BNF) \u2014 WITHOUT stopping it on impulse (any pause is a shared decision with the prescriber, weighed against stroke or clot risk), and measure BP and optimise control per NICE NG136; know when to ESCALATE (same-day emergency care/A&E if bleeding continues despite 10\u201315 minutes of correct pressure repeated once, i.e. two rounds, or is heavy/posterior \u2014 blood pouring down the throat, both nostrils, no anterior source \u2014 and 999 if unwell or shocked: pallor, sweating, faintness, fast pulse; a low threshold when anticoagulated); in primary care, options include chlorhexidine with neomycin nasal cream (e.g. Naseptin; dose per BNF) and, if a bleeding point is visible anteriorly and the clinician is trained, silver nitrate CAUTERY to one side of the septum, with pulse, BP and anterior rhinoscopy done face to face, with ENT referral for recurrent/refractory bleeds (cautery/packing); and consider RED FLAGS for sinister causes \u2014 unilateral persistent bleeding/obstruction, a nasal mass (sinonasal tumour \u2014 ENT), or features of a bleeding disorder (FBC and clotting)/HHT (Cura\u00e7ao criteria; second international HHT guidelines 2020, international). Address prevention (humidification, avoid picking, treat dryness) and anticoagulation review. The skill is first-aid + anticoagulation/BP review + escalation criteria + red-flag awareness.',
    script: {
      opening: '"I keep getting nosebleeds, doctor \u2014 several over the past few weeks. The last one was a real worry, it wouldn\u2019t stop for a good twenty minutes and there was a fair bit of blood. I\u2019m on a blood thinner, apixaban, for my irregular heartbeat \u2014 atrial fibrillation \u2014 and I take tablets for blood pressure. Should I be concerned?"',
      facts: [
        {
          topic: 'The nosebleeds',
          text: 'Five in the past 4 weeks, both sides at different times. Most stopped within 5\u201310 minutes. The last one, 3 days ago, took about 20 minutes and soaked a tea towel. Some ran down his throat. Not bleeding now; feels fine.'
        },
        {
          topic: 'What he did',
          text: 'Tipped his head back and held the bony top of his nose, letting go every minute or so "to see if it had stopped".'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No blocked nose on one side, no blood-stained discharge, no facial pain or swelling, no loose teeth, no lumps in the neck. No bruising elsewhere, no blood in urine or stools, no gum bleeding. No family history of bleeding problems or nosebleeds.'
        },
        {
          topic: 'Medicines',
          text: 'Apixaban 5 mg twice daily (for 2 years); amlodipine 10 mg. No aspirin or anti-inflammatories. No allergies. Kidneys "checked last year, fine I think".'
        },
        {
          topic: 'Blood pressure',
          text: 'Has a home monitor: "usually about 150 over 90 \u2014 the nurse wanted it lower". Took it this morning: 156/92, pulse irregular about 80.'
        },
        {
          topic: 'Other',
          text: 'Central heating on a lot, nose feels dry and crusty. Picks at crusts. Weight about 85 kg; no recent weight change.'
        },
        {
          topic: 'Social',
          text: 'Retired postman. Lives with his wife, Joan. Drives. Drinks 2 pints at the weekend. Ex-smoker.'
        },
        {
          topic: 'How to play it',
          text: 'Calm but quietly anxious. You haven\u2019t stopped the apixaban and want to know if you should. If asked to show how you stop a nosebleed, demonstrate the wrong way (head back, pinching the bony bridge). Then copy the correct way when taught: "Like this? Lean forward, pinch here, don\u2019t let go."'
        }
      ],
      ice: {
        ideas: '"Maybe it\u2019s the blood thinner. Or something wrong inside."',
        concerns: '"With the thinners, I worry one day it won\u2019t stop." His brother-in-law had "a growth in the nose" (only if worries are explored).',
        expectations: '"To know whether I should worry, whether to stop the thinner, and how to stop them."'
      },
      cues: [
        '"I held the top of my nose and kept letting go" \u2014 first aid to correct.',
        '"Should I stop the blood thinner?" \u2014 needs review, not stopping on impulse.',
        '"The nurse wanted it lower" (if blood pressure is asked) \u2014 uncontrolled hypertension to address.'
      ]
    },
    checkpoints: [
      {
        dom: 'cm',
        text: 'Teaches correct EPISTAXIS FIRST-AID \u2014 sit forward, pinch the SOFT part of the nose continuously for 10\u201315 minutes, lean forward/spit out blood, a cold pack on the bridge, avoid lying back/sniffing'
      },
      {
        dom: 'cm',
        text: 'Recognises most bleeds are anterior/benign but REVIEWS the ANTICOAGULATION (which drug, indication, dose/renal function for a DOAC, control \u2014 INR if warfarin, balance of risks, without stopping it on impulse) and antiplatelets/NSAIDs, and the HYPERTENSION (NICE NG136)'
      },
      {
        dom: 'cm',
        text: 'Knows the ESCALATION/admission criteria \u2014 bleeding not controlled by two rounds of 10\u201315 minutes\u2019 correct pressure, heavy/posterior bleeding, haemodynamic compromise, significant bleeding while anticoagulated'
      },
      {
        dom: 'cm',
        text: 'Knows primary-care treatment (topical antiseptic cream, nasal cautery of a visible anterior point by a trained clinician after face-to-face rhinoscopy) and ENT referral for recurrent/refractory epistaxis'
      },
      {
        dom: 'dg',
        text: 'Considers RED FLAGS \u2014 persistent unilateral bleeding/obstruction or a nasal mass (sinonasal tumour \u2192 ENT), and bleeding disorder/HHT \u2014 referring appropriately'
      },
      {
        dom: 'ro',
        text: 'Addresses his worry about the bleeding and the blood thinners, reassures proportionately, and checks understanding of first-aid'
      },
      {
        dom: 'cm',
        text: 'Advises PREVENTION (humidification/saline/emollient, avoid picking/forceful blowing) and arranges anticoagulation/BP review'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: when to seek urgent/emergency care (uncontrolled/heavy/posterior bleeding, feeling faint), ENT referral for recurrence, red-flag awareness (unilateral/mass), and anticoagulation/BP review \u2014 first-aid + medication review + escalation criteria'
      }
    ],
    worked: [
      {
        lbl: 'Reassure + teach first-aid',
        txt: '"Most nosebleeds come from the front of the nose and are not dangerous, even on blood thinners \u2014 but you need the right first-aid, which a lot of people get wrong. Sit up, lean FORWARD, and pinch the SOFT part of your nose firmly for a full 10\u201315 minutes WITHOUT letting go to check. Spit out any blood, don\u2019t tip your head back. A cold pack on the bridge of your nose may help."'
      },
      {
        lbl: 'Review the blood thinners + BP',
        txt: '"Being on blood thinners makes bleeds last longer, so let\u2019s review them \u2014 you take apixaban for your atrial fibrillation, so I\u2019ll check the reason still stands, that the dose is right for your age, weight and kidney tests, and any other tablets that thin the blood; apixaban doesn\u2019t need INR checks the way warfarin does. Please keep taking it meanwhile \u2014 any change I\u2019d discuss with your heart team. And let\u2019s make sure your blood pressure is well controlled, as that can contribute."'
      },
      {
        lbl: 'When to get urgent help',
        txt: '"Go to A&E \u2014 or call 999 if you feel unwell \u2014 if a bleed won\u2019t stop after two rounds of 10\u201315 minutes of proper pressure, if blood is pouring down the back of your throat, or if you feel faint or dizzy. Those need hospital, sometimes packing."'
      },
      {
        lbl: 'Treat the recurrence',
        txt: '"For the recurrent bleeds, I\u2019d like to see you in person to check your pulse and blood pressure and look in your nose and, if there\u2019s an obvious vessel at the front, cauterise it, and a cream can reduce crusting and re-bleeding. If they keep happening, I\u2019ll refer you to ENT."'
      },
      {
        lbl: 'Red-flag check',
        txt: '"Just to be safe \u2014 are the bleeds always the same nostril, with a blocked feeling on that side? \u2026 No, both sides. Good \u2014 persistent one-sided bleeding or blockage is the thing I\u2019d want ENT to check."'
      },
      {
        lbl: 'Prevention + safety-net',
        txt: '"To prevent them: a saline spray or a dab of emollient inside the nose for dryness, and avoid picking or hard blowing. Come back if they keep recurring, become one-sided, or you ever can\u2019t stop one \u2014 and we\u2019ll review your blood thinners together."'
      }
    ],
    learning: 'EPISTAXIS management starts with correct FIRST-AID: sit up and lean FORWARD (not back), pinch the SOFT part of the nose (not the bony bridge) firmly and continuously for 10\u201315 minutes without releasing to check, breathe through the mouth and spit out blood (don\u2019t swallow), and a cold pack on the bridge of the nose may help \u2014 avoiding lying back, sniffing or blowing afterwards. Most nosebleeds are ANTERIOR (Little\u2019s area) and benign (nose-picking, dryness, trauma, URTIs), but in an anticoagulated/antiplatelet patient REVIEW the anticoagulation (which drug, indication, DOAC dose against weight and renal function, interacting drugs, control \u2014 INR if on warfarin, balance of risks; BNF), without stopping it on impulse (a shared decision with the prescriber), and the HYPERTENSION (optimise per NICE NG136). Know the ESCALATION/admission criteria: bleeding not controlled by 10\u201315 minutes of correct pressure repeated once, heavy or POSTERIOR bleeding (blood pouring down the throat, no visible anterior source), haemodynamic compromise (dizziness, tachycardia, hypotension), or significant bleeding while anticoagulated \u2014 posterior/uncontrolled bleeds need ENT/emergency care (packing). In primary care, examine face to face (pulse, BP, anterior rhinoscopy) and treat an anterior bleeding point with topical antiseptic cream (e.g. Naseptin, dose per BNF) and/or, by a trained clinician, nasal CAUTERY (silver nitrate) of a visible vessel, and refer to ENT for recurrent/refractory epistaxis. Keep RED FLAGS in mind: persistent UNILATERAL nasal bleeding/obstruction or a nasal MASS (possible sinonasal tumour \u2192 ENT), and features of a bleeding disorder (FBC and clotting) or hereditary haemorrhagic telangiectasia (recurrent epistaxis, telangiectasia, family history; Cura\u00e7ao criteria, international HHT guidelines 2020). Advise prevention (nasal humidification/saline/emollient, avoid picking/forceful blowing) and arrange anticoagulation/BP review. The skill is correct first-aid + anticoagulation/BP review + escalation criteria + red-flag awareness.',
    knowledge: {
      guideline: 'Epistaxis \u00b7 correct first-aid \u00b7 anticoagulation/BP review \u00b7 escalation (posterior/uncontrolled) \u00b7 cautery/Naseptin + ENT \u00b7 unilateral-mass red flag \u00b7 [1] BNF anticoagulants (warfarin INR monitoring; DOACs) and chlorhexidine with neomycin nasal cream \u00b7 [2] NICE NG136 Hypertension in adults \u00b7 [3] Cura\u00e7ao criteria for hereditary haemorrhagic telangiectasia (Shovlin et al., 2000, international) \u00b7 [4] Second international HHT guidelines (Faughnan et al., Ann Intern Med 2020, international)',
      points: [
        {
          h: 'First-aid',
          t: 'Sit forward, pinch the soft part of the nose continuously 10\u201315 min, lean forward, spit out blood, cold pack on the bridge, avoid lying back/sniffing/blowing.'
        },
        {
          h: 'Review meds & BP',
          t: 'Most anterior bleeds are benign; in anticoagulated patients review which drug, indication, dose/renal function, control (INR if warfarin) and antiplatelets/NSAIDs [1] \u2014 don\u2019t stop it on impulse \u2014 and optimise hypertension (NICE NG136 [2]).'
        },
        {
          h: 'Escalate/admit',
          t: 'Bleeding not controlled by two rounds of 10\u201315 minutes\u2019 correct pressure, heavy/posterior bleeding (down the throat), haemodynamic compromise, or significant bleeding while anticoagulated \u2192 ENT/emergency (packing).'
        },
        {
          h: 'Primary-care treatment',
          t: 'Topical antiseptic cream (Naseptin, dose per BNF [1]) and, by a trained clinician, nasal cautery (silver nitrate) of a visible anterior vessel; ENT referral for recurrent/refractory epistaxis.'
        },
        {
          h: 'Red flags',
          t: 'Persistent unilateral bleeding/obstruction or nasal mass (sinonasal tumour \u2192 urgent ENT); bleeding disorder (FBC, clotting)/HHT (telangiectasia, family history [3,4]).'
        },
        {
          h: 'Prevention',
          t: 'Nasal humidification/saline/emollient for dryness, avoid picking and forceful blowing; treat the underlying tendency.'
        },
        {
          h: 'Never do',
          t: 'Never teach head-back/bony-bridge pinching; never ignore anticoagulation/BP; never miss posterior/uncontrolled bleeding or a unilateral nasal mass.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Urgent/emergency care for uncontrolled/heavy/posterior bleeding or feeling faint; ENT referral for recurrence/unilateral features; anticoagulation/BP review.'
        }
      ]
    }
  };

  /* ===== 263. Frozen shoulder (adhesive capsulitis) ===== */
  const c263 = {
    "id": "frozen-shoulder",
    "title": "“I need an injection in this shoulder before I lose my business — and I don’t want any blood tests”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 54,
      "sex": "F",
      "setting": "Video consultation — a painful, stiff shoulder for four months; face-to-face examination can be arranged.",
      "system": "Musculoskeletal / Endocrine — frozen shoulder: injection request, work as a self-employed hairdresser, and an avoided diabetes test",
      "checked": "October 2026"
    },
    "brief": "Lorraine Hart, 54, self-employed hairdresser with her own small salon, has four months of left shoulder pain, worse at night, and increasing stiffness: she cannot reach behind her back, fasten her bra or lift her arm to blow-dry. No injury. On video she can barely raise or rotate the arm outwards. She wants a steroid injection “like my client had” and asks about paying for an MRI. She has cut her hours, is losing clients and cannot afford to stop. Her record shows an HbA1c of 46 mmol/mol (non-diabetic hyperglycaemia) three years ago with a recall she never attended, and two letters inviting her for blood tests. If asked about general health she admits being thirsty, weeing at night and tired for months. Her hidden concern, only if explored: her mother had type 2 diabetes and lost a leg; Lorraine has avoided blood tests because she is frightened of being told she has diabetes, and the word makes her think of amputation. The task: make a clinical diagnosis of frozen shoulder (global restriction, especially external rotation) and screen for red flags; explain the phases and that most recover; discuss options honestly (analgesia, physiotherapy, an intra-articular steroid injection that can help pain in the early phase, and why MRI is not usually needed); explain the link between frozen shoulder and diabetes and the effect of a steroid injection on blood glucose; explore and address her fear so that she agrees to an HbA1c; and support work with practical adjustments and a fit note if needed.",
    "script": {
      "opening": "“I need a steroid injection in this shoulder. My client had one and it was like magic. I can’t lift my arm to blow-dry and I’m losing clients. And before you ask, I don’t want any blood tests.”",
      "facts": [
        {
          "topic": "The shoulder",
          "text": "Left shoulder. Started as an ache four months ago, then increasingly painful, worse at night, can’t lie on it. Over the last six weeks it has become stiff: cannot reach behind her back, fasten her bra, or lift her arm above shoulder height. No fall or injury. Right-handed."
        },
        {
          "topic": "Red flags (if asked)",
          "text": "No weight loss she has noticed, no cough, no fever, no hot red joint, no arm weakness or numbness, no chest pain or breathlessness on exertion, no history of cancer. Neck is fine."
        },
        {
          "topic": "Work and money",
          "text": "Owns a two-chair salon; one junior. Cut her hours by half. Lost three regular clients. Rent and a loan for the salon. “If I stop, I lose the business.”"
        },
        {
          "topic": "What she has tried",
          "text": "Ibuprofen and paracetamol on and off, helps a bit. Hot water bottle. Has not seen a physiotherapist. Was going to pay for an MRI."
        },
        {
          "topic": "General health (only if asked)",
          "text": "Thirsty for months, up twice a night to wee, tired, “but I’m 54 and I work all day”. Overweight. No blurred vision, no foot problems. Smokes 5 a day."
        },
        {
          "topic": "The fear (only if gently explored)",
          "text": "Her mother had type 2 diabetes and had a leg amputated at 68. Lorraine knows the earlier blood test was “borderline” and has ignored the letters: “If I don’t know, I don’t have to deal with it.”"
        },
        {
          "topic": "How to play it",
          "text": "Brisk and businesslike, pushes for the injection. Bristles at blood tests. Softens if the doctor asks what worries her about them and links the test to the shoulder. Agrees to an HbA1c if she understands how it helps and that diabetes found early is very different from her mother’s experience."
        }
      ],
      "ice": {
        "ideas": "“It’s worn out from 30 years of hairdressing. An injection will fix it.”",
        "concerns": "HIDDEN AGENDA: fear of diabetes because of her mother’s amputation, which is why she has avoided blood tests; also losing the business.",
        "expectations": "“An injection now, maybe an MRI, and no blood tests.”"
      },
      "cues": [
        "“I don’t want any blood tests” before anyone has suggested one — something lies behind it.",
        "Unanswered recall letters and a borderline HbA1c in the record.",
        "Thirst and nocturia mentioned as “just being 54”.",
        "“I’m losing clients” — work and money are central."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Takes a focused history and remote examination showing painful global restriction of active movement, particularly external rotation, consistent with frozen shoulder; arranges face-to-face examination to confirm passive restriction if needed"
      },
      {
        "dom": "dg",
        "text": "Screens for red flags: trauma, fever or hot joint, weight loss or history of cancer, neurological symptoms, referred pain (neck, cardiac, Pancoast)"
      },
      {
        "dom": "dg",
        "text": "Explores the refusal of blood tests and uncovers the fear of diabetes linked to her mother’s amputation; asks about osmotic symptoms"
      },
      {
        "dom": "cm",
        "text": "Explains the association between frozen shoulder and diabetes, and that a steroid injection can raise blood glucose for some days, as reasons to check HbA1c now"
      },
      {
        "dom": "cm",
        "text": "Discusses options honestly: analgesia, physiotherapy and home exercises, and an intra-articular corticosteroid injection, which can reduce pain in the early painful phase; explains that MRI is not usually needed for a clinical diagnosis"
      },
      {
        "dom": "cm",
        "text": "Explains the natural history (painful, stiff and recovery phases over months to a few years) and when referral is considered (persistent severe symptoms despite treatment)"
      },
      {
        "dom": "cm",
        "text": "Supports work: practical adjustments, pacing, a fit note with “may be fit for work” and suggested adaptations if useful, and signposting for self-employed support"
      },
      {
        "dom": "ro",
        "text": "Respects her autonomy, links the plan to her goal of keeping the business, and safety-nets (red flags, osmotic symptoms worsening, no improvement)"
      }
    ],
    "worked": [
      {
        "lbl": "Explore the refusal",
        "txt": "“You said you don’t want blood tests before I’d mentioned any. Can I ask what makes you feel that way?”"
      },
      {
        "lbl": "Name the fear gently",
        "txt": "“That must have been awful to see with your mum. It makes complete sense that you’d rather not know. Can I tell you how different it is when diabetes is found early?”"
      },
      {
        "lbl": "Link test and shoulder",
        "txt": "“Frozen shoulder is more common in people with diabetes or borderline sugars, and a steroid injection can push sugar up for a few days. So checking your sugar helps me do the injection safely.”"
      },
      {
        "lbl": "The injection honestly",
        "txt": "“An injection into the joint can ease the pain in this early stage, which may let you work and do your exercises. It doesn’t cure the stiffness on its own, so physio exercises matter too.”"
      },
      {
        "lbl": "MRI",
        "txt": "“The diagnosis is made from how the shoulder moves. A scan rarely changes the treatment, so I wouldn’t spend your money on one.”"
      },
      {
        "lbl": "Work",
        "txt": "“Let’s think about the salon. Could your junior do the blow-drying for now? I can give you a fit note suggesting adapted duties if it helps with anything.”"
      }
    ],
    "learning": "Frozen shoulder (adhesive capsulitis) causes shoulder pain, often worse at night, followed by progressive stiffness with marked loss of both active and passive movement, typically affecting external rotation most. It is commonest between 40 and 60 and is more common in people with diabetes, so NICE CKS suggests checking for diabetes. It is a clinical diagnosis; imaging is not usually needed unless red flags or diagnostic doubt (an X-ray can exclude glenohumeral arthritis if movement is restricted after trauma or in older people). The condition usually passes through painful, stiff and recovery phases and most people improve, though it can take one to three years and some stiffness may remain. Management: analgesia, information, home exercises and physiotherapy, and an intra-articular corticosteroid injection, which can reduce pain and improve function in the early painful phase. In the UK FROST trial, early structured physiotherapy with a steroid injection was a reasonable first-line option, and surgical options offered no clear advantage for most people. Steroid injections can raise blood glucose for several days, which matters in diabetes. Refer if symptoms remain severe despite treatment. The consultation skill here is the hidden agenda: a refusal of blood tests before any are offered is a cue. Exploring it reveals fear rooted in a parent’s amputation; acknowledging that fear, explaining how different early diagnosis is, and linking the test to her own goals (a safe injection, keeping her business) makes it possible to agree an HbA1c. Supporting a self-employed patient’s work is part of good care.",
    "knowledge": {
      "guideline": "[1] NICE CKS Shoulder pain: frozen shoulder (check current version) · [2] UK FROST trial (Rangan et al, Lancet 2020) · [3] NICE NG28 Type 2 diabetes in adults: management (2015, updated 2022) and NICE PH38 Type 2 diabetes: prevention in people at high risk (2012, updated 2017) · [4] DWP Getting the most out of the fit note: guidance for healthcare professionals · [5] Product SPCs for intra-articular corticosteroids",
      "summary": "Classic frozen shoulder in a 54-year-old self-employed hairdresser who wants an injection and refuses blood tests. Behind the refusal is fear of diabetes after her mother’s amputation, with a previous borderline HbA1c and current osmotic symptoms. Diagnose clinically, discuss injection, physiotherapy and analgesia honestly, explain why HbA1c matters for the shoulder and the injection, address the fear, and support her work.",
      "points": [
        {
          "h": "Diagnosis",
          "t": "Shoulder pain then stiffness with loss of active and passive movement, especially external rotation. Clinical diagnosis; imaging not routinely needed [1]."
        },
        {
          "h": "Red flags",
          "t": "Trauma (fracture, dislocation), fever or hot joint (septic arthritis), weight loss or cancer history (metastasis, Pancoast tumour), neurological deficit, referred cardiac or neck pain."
        },
        {
          "h": "Diabetes link",
          "t": "Frozen shoulder is more common in diabetes; CKS suggests checking for it. Ask about thirst, nocturia, tiredness and previous results [1,3]."
        },
        {
          "h": "Natural history",
          "t": "Painful phase, stiff phase and recovery phase over months to a few years. Most people improve; some stiffness may persist."
        },
        {
          "h": "Treatment",
          "t": "Analgesia, home exercises and physiotherapy. An intra-articular corticosteroid injection can help pain and function in the early phase. FROST: early physiotherapy plus injection is a reasonable first-line option; surgery offered no clear advantage for most [1,2]."
        },
        {
          "h": "Steroid injections and glucose",
          "t": "Corticosteroid injections can raise blood glucose for several days; check HbA1c and advise people with diabetes to monitor (check the SPC) [5]."
        },
        {
          "h": "Referral",
          "t": "Consider referral if pain and stiffness remain severe despite treatment, or if the diagnosis is uncertain."
        },
        {
          "h": "Work",
          "t": "Discuss adaptations. A fit note can say “may be fit for work” with suggested adjustments, which can help self-employed people plan [4]."
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c260, c261, c262, c263);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'hyperhidrosis-primary': {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Theo Marsh',
        age: '25 years \u00b7 male',
        pmh: [
          'Excessive symmetrical sweating of palms/soles/axillae since adolescence',
          'Even when cool; stops during sleep; family history',
          'Major impact on work/confidence'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My hands and armpits drip with sweat even when I\u2019m not hot \u2014 it\u2019s ruining my work and confidence."',
        reason: 'Video consultation (examination face to face if secondary features) \u2014 excessive localised sweating.'
      },
      timeMap: [
        {
          t: '0\u2010-2',
          h: 'Recognise + validate',
          d: 'Symmetrical focal sweating from adolescence, sleep-sparing = primary focal hyperhidrosis; a real, treatable condition.'
        },
        {
          t: '2\u2010-4',
          h: 'Secondary red flags',
          d: 'Generalised/asymmetric, night sweats, weight loss, later onset \u2192 thyroid/infection/malignancy/phaeo \u2014 investigate, examining face to face.'
        },
        {
          t: '4\u2010-7',
          h: 'Stepwise treatment',
          d: 'Aluminium chloride (dry skin at bedtime, washed off in the morning) \u2192 iontophoresis / oral antimuscarinics (oxybutynin off-label) \u2192 botulinum toxin; HDSS score.'
        },
        {
          t: '7\u2010-9',
          h: 'Refer + impact',
          d: 'Dermatology if severe/refractory; acknowledge psychosocial impact.'
        },
        {
          t: '9\u2010-12',
          h: 'Safety-net',
          d: 'Review response/escalate; investigate if secondary red flags appear.'
        }
      ],
      wordPics: {
        fail: 'Dismisses it as trivial/hygiene; offers no stepwise treatment; misses secondary red flags or ignores the psychosocial impact.',
        pass: 'Recognises primary focal hyperhidrosis, excludes secondary red flags, and starts stepwise treatment with impact acknowledgement.',
        exc: 'Recognises primary focal hyperhidrosis, excludes secondary red flags, manages stepwise (aluminium chloride \u2192 iontophoresis/anticholinergics \u2192 botulinum toxin), refers if severe, and validates the major psychosocial impact.'
      },
      avoid: [
        {
          dont: '"Everyone sweats \u2014 try a stronger deodorant and don\u2019t worry about it."',
          instead: '"This is hyperhidrosis, a treatable condition \u2014 we start with a strong aluminium-chloride antiperspirant and have several further options."',
          why: 'Dismissing it as trivial ignores a treatable condition with major psychosocial impact.'
        },
        {
          dont: '(Missing secondary) not asking about generalised/night sweats.',
          instead: '"Is it all over your body, with night sweats or weight loss? Those would make me investigate further."',
          why: 'Secondary hyperhidrosis red flags warrant a work-up.'
        },
        {
          dont: '(No escalation path) leaving him with only step one.',
          instead: '"If the antiperspirant isn\u2019t enough, there\u2019s iontophoresis, tablets and Botox injections."',
          why: 'A clear stepwise path is needed for an impairing condition.'
        }
      ]
    },
    'chronic-urticaria': {
      ceg: ['New & undifferentiated presentations', 'Prescribing & pharmacology'],
      stem: {
        name: 'Sofia Larkin',
        age: '34 years \u00b7 female',
        pmh: [
          'Itchy weals most days >6 weeks; each weal <24h, leaves no mark; \u00b1 lip/eyelid angioedema',
          'No consistent trigger; otherwise well',
          'Hunting for an allergen'
        ],
        meds: ['Cetirizine PRN'],
        allergy: 'NKDA',
        recent: '"Itchy raised welts that come and go within hours \u2014 months now, and I can\u2019t find a trigger."',
        reason: 'Video consultation (face-to-face skin check if images unclear) \u2014 recurrent itchy weals.'
      },
      timeMap: [
        {
          t: '0\u2010-2',
          h: 'Recognise',
          d: 'Weals most days >6 weeks, each <24h no mark, \u00b1 angioedema, no trigger = chronic spontaneous urticaria.'
        },
        {
          t: '2\u2010-4',
          h: 'Reassure + stop trigger-hunt',
          d: 'Usually not a dangerous allergy; allergy testing unrewarding; aggravators (NSAIDs/heat/stress) \u2260 cause.'
        },
        {
          t: '4\u2010-6',
          h: 'Vasculitis check',
          d: 'Weals >24h/painful/bruising \u2192 urticarial vasculitis (refer).'
        },
        {
          t: '6\u2010-9',
          h: 'Stepwise antihistamines',
          d: 'Regular (not PRN) non-sedating antihistamine, up-titrate to fourfold (off-label; check pregnancy); FBC and CRP/ESR; refer if refractory (omalizumab, NICE TA339).'
        },
        {
          t: '9\u2010-12',
          h: 'Angioedema safety-net',
          d: '999 for tongue/throat swelling or breathing difficulty; consider ACEi/hereditary angioedema.'
        }
      ],
      wordPics: {
        fail: 'Sends on extensive allergy testing/elimination diets; relies on PRN antihistamines; misses urticarial vasculitis or omits angioedema red flags.',
        pass: 'Recognises chronic urticaria, reassures and starts regular up-titrated antihistamines with angioedema safety-net.',
        exc: 'Recognises chronic spontaneous urticaria, reassures (not a dangerous allergy; testing unrewarding), starts regular up-titrated antihistamines, refers if refractory (omalizumab) or vasculitis features, and gives the angioedema/airway safety-net.'
      },
      avoid: [
        {
          dont: '"Let\u2019s do allergy testing and an elimination diet to find the trigger."',
          instead: '"In chronic urticaria there\u2019s usually no allergy to find \u2014 testing is mostly unhelpful; the key is regular antihistamines."',
          why: 'Extensive allergy testing/elimination diets are usually unrewarding in chronic spontaneous urticaria.'
        },
        {
          dont: '(PRN only) "Take an antihistamine when you break out."',
          instead: '"Take a non-drowsy antihistamine every day, and we can increase the dose if needed."',
          why: 'Regular (not PRN) up-titrated antihistamines are first-line.'
        },
        {
          dont: '(No angioedema advice) ending without safety-netting.',
          instead: '"If your tongue or throat swells or you can\u2019t breathe, call 999."',
          why: 'Airway-threatening angioedema needs explicit emergency safety-netting.'
        }
      ]
    },
    'recurrent-epistaxis': {
      ceg: ['Urgent & unscheduled care', 'Prescribing & pharmacology'],
      stem: {
        name: 'Walter Penn',
        age: '68 years \u00b7 male',
        pmh: [
          'Recurrent anterior nosebleeds; latest needed prolonged pressure',
          'On apixaban (DOAC) for atrial fibrillation; hypertensive',
          'Bleeds from both nostrils (not unilateral)'
        ],
        meds: ['Apixaban (for atrial fibrillation)', 'Amlodipine'],
        allergy: 'NKDA',
        recent: '"I keep getting nosebleeds \u2014 the latest wouldn\u2019t stop for ages, and I\u2019m on blood thinners."',
        reason: 'Video consultation (pulse, BP and nose examined face to face) \u2014 recurrent/troublesome nosebleeds.'
      },
      timeMap: [
        {
          t: '0\u2010-2',
          h: 'Teach first-aid',
          d: 'Sit forward, pinch the SOFT part 10\u201315 min continuously, lean forward, cold pack on the bridge, don\u2019t tip back.'
        },
        {
          t: '2\u2010-4',
          h: 'Review meds + BP',
          d: 'Anticoagulant: which drug, indication, dose/renal function, INR if warfarin \u2014 don\u2019t stop on impulse; BP per NICE NG136.'
        },
        {
          t: '4\u2010-6',
          h: 'Escalation criteria',
          d: 'Not stopped after two rounds of correct pressure, heavy/posterior bleeding or haemodynamic compromise \u2192 A&E/emergency (packing); 999 if unwell.'
        },
        {
          t: '6\u2010-9',
          h: 'Treat + refer',
          d: 'Naseptin/cautery of anterior point; ENT for recurrent/refractory.'
        },
        {
          t: '9\u2010-12',
          h: 'Red flags + prevent',
          d: 'Unilateral bleeding/obstruction/mass (sinonasal tumour \u2192 ENT); HHT; humidification/avoid picking.'
        }
      ],
      wordPics: {
        fail: 'Teaches head-back/bridge-pinch first-aid; ignores anticoagulation/BP; misses escalation criteria or a unilateral nasal mass.',
        pass: 'Teaches correct first-aid, reviews anticoagulation/BP, sets escalation criteria, and treats/refers for recurrence.',
        exc: 'Teaches correct first-aid, reviews anticoagulation (INR/indication) and BP, sets escalation/admission criteria, offers cautery/Naseptin with ENT referral for recurrence, and keeps unilateral-mass/bleeding-disorder red flags in mind.'
      },
      avoid: [
        {
          dont: '"Tip your head back and pinch the top of your nose."',
          instead: '"Lean FORWARD and pinch the SOFT part of the nose firmly for 10\u201315 minutes without letting go."',
          why: 'Head-back/bridge-pinch is wrong first-aid and ineffective.'
        },
        {
          dont: '(Ignoring anticoagulation) not reviewing the blood thinner/BP.',
          instead: '"Let\u2019s review your blood thinner and check your blood pressure \u2014 both affect bleeding."',
          why: 'Anticoagulation control and hypertension are key contributors.'
        },
        {
          dont: '(Missing unilateral mass) treating all recurrent bleeds the same.',
          instead: '"Persistent one-sided bleeding or blockage I\u2019d refer to ENT to exclude a growth."',
          why: 'Unilateral persistent bleeding/obstruction can signal a sinonasal tumour.'
        }
      ]
    },
    'frozen-shoulder': {
      "ceg": [
        "New & undifferentiated presentations",
        "Long-term conditions & cancer"
      ],
      "stem": {
        "name": "Lorraine Hart",
        "age": "54 years · female",
        "pmh": [
          "Non-diabetic hyperglycaemia (HbA1c 46 mmol/mol three years ago)",
          "Overweight"
        ],
        "meds": [
          "None on repeat"
        ],
        "allergy": "None recorded",
        "recent": "Two recall letters for a repeat HbA1c not answered. Booked online: “left shoulder pain, want injection”.",
        "reason": "“My shoulder, I need an injection.”"
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Hear the injection request and the pre-emptive “no blood tests”. Flag it."
        },
        {
          "t": "1–5",
          "h": "Shoulder",
          "d": "History, red flags, remote range of movement; plan face-to-face check."
        },
        {
          "t": "5–7",
          "h": "The refusal",
          "d": "Explore: mother’s amputation; osmotic symptoms; link diabetes to frozen shoulder and to the injection."
        },
        {
          "t": "7–11",
          "h": "Plan",
          "d": "HbA1c, injection if safe, physio, analgesia; no MRI; natural history; work adjustments and fit note."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; safety-net for sugars and shoulder red flags."
        }
      ],
      "wordPics": {
        "fail": "Books the injection without thinking about diabetes, or insists on blood tests without exploring why she refuses; orders an MRI; ignores the business.",
        "pass": "Diagnoses frozen shoulder, offers injection and physiotherapy, and explains why an HbA1c is needed.",
        "exc": "All of the above, plus: treats the refusal as a cue and uncovers the fear about her mother; responds with empathy and hope; links the test to her own goals; explains the natural history honestly; declines MRI with reasons; practical work adjustments; clear safety-net."
      },
      "avoid": [
        {
          "dont": "“You need a blood test, it’s not optional.”",
          "instead": "“Can I ask what makes you not want a blood test?”",
          "why": "Pressure without understanding the fear entrenches avoidance."
        },
        {
          "dont": "“An injection will sort it.”",
          "instead": "“It can ease the pain at this stage; exercises help the stiffness.”",
          "why": "Overselling leads to disappointment and non-adherence to physiotherapy."
        },
        {
          "dont": "“Let’s get an MRI to be sure.”",
          "instead": "“The diagnosis is clinical and a scan rarely changes treatment.”",
          "why": "Unnecessary imaging costs her money and delays treatment."
        }
      ]
    }
  });

})();
