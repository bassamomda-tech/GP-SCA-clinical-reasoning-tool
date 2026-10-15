/* ============================================================
   Reasoning GP — Case Library batch 79 (SCA revision notes):
   Picky eating (toddler); halitosis; latex allergy; restless legs
   in pregnancy. No NG12 cancer pathway applies. After 78.
   ============================================================ */
(function(){

  /* ===== 285. Picky eating ===== */
  const c285 = {
    id: 'picky-eating',
    title: '"My 3-year-old will only eat a handful of foods and refuses everything else \u2014 mealtimes are a battle and I\u2019m worried she\u2019s not getting enough"',
    type: 'video',
    duration: 12,
    meta: {
      age: 3,
      sex: 'F',
      setting: 'Video consultation \u2014 a worried parent about a fussy toddler, child thriving (health visitor measurements recorded)',
      system: 'Paediatrics \u2014 picky/fussy eating: reassurance, red-flag exclusion & feeding advice',
      checked: 'October 2026'
    },
    brief: 'A mother (her name and the family surname are not recorded in the case) brings 3-year-old Mabel, a "picky eater" who refuses most foods and eats a narrow range, with mealtime battles; the child is otherwise WELL and THRIVING (normal growth/energy/development). The task is to manage PICKY/FUSSY EATING (very common, usually a normal phase in toddlers/pre-schoolers): take a full day\u2019s food and drink history and \u2014 importantly \u2014 confirm the child is GROWING/THRIVING (weigh, measure and plot on the UK-WHO chart; NICE NG75 defines faltering weight by centile falls \u2014 1 or more centile spaces if birthweight was below the 9th centile, 2 or more if between the 9th and 91st, 3 or more if above the 91st \u2014 or a weight below the 2nd centile) and EXCLUDE red flags/organic causes (faltering growth/weight loss, very restricted intake with deficiency, dysphagia/choking/vomiting, GI symptoms, developmental or social communication concerns/autism (ask about talking, play and nursery; NICE CG128), food allergy (NICE CG116)/coeliac (NICE NG20), signs of a feeding disorder like ARFID (DSM-5-TR, international)); REASSURE that picky eating is common and usually self-limiting and that growth is the key reassurance; give practical FEEDING/behaviour advice (regular family mealtimes, role-modelling, repeated low-pressure exposure to new foods \u2014 it can take many tries, avoid pressure/force/bribery/battles, manage portion expectations, limit grazing/milk/juice between meals, keep mealtimes positive and short); address the PARENTAL ANXIETY and the battles; and safety-net/refer (dietitian/health visitor/paediatrics) if faltering growth, very restricted range with nutritional concern, or red flags. Recommend the standard daily vitamin drops containing vitamins A, C and D that UK advice gives all children aged 6 months to 5 years (unless drinking a lot of formula; free Healthy Start vitamins for eligible families) \u2014 advice for every child, not a treatment. The skill is red-flag/growth exclusion, reassurance, practical feeding advice, and parental support \u2014 not unnecessary investigation or special supplements. Recorded findings available to the candidate (no in-person examination in this remote consultation): Health visitor, last week: weight 14.2 kg (50th centile), height 96 cm (50th\u201375th centile), both tracking the same centiles since birth on the UK-WHO chart; development appropriate for age.',
    script: {
      opening: '"Mabel\u2019s such a fussy eater \u2014 she\u2019ll only eat a few things like plain pasta and crackers, and refuses anything new, especially vegetables. Mealtimes are a complete battle, I end up making separate meals. She seems happy and full of energy, but I\u2019m worried she\u2019s not getting what she needs. What can I do?"',
      facts: [
        {
          topic: 'Who is calling',
          text: 'Mother, Kerry, on video; Mabel (3) is playing in the background, chatting to her teddy.'
        },
        {
          topic: 'What she eats (if asked for a typical day)',
          text: 'Plain pasta, crackers, bread, yoghurt, cheese, the odd banana and chicken nuggets. About 600 ml of cow\u2019s milk a day plus "a couple of beakers" of juice; snacks on crisps when she won\u2019t eat her tea. Refuses vegetables and anything new.'
        },
        {
          topic: 'Growth',
          text: 'If asked: health visitor weighed and measured her at the children\u2019s centre last week \u2014 "she said she\u2019s on the same lines she\u2019s always been on, about the middle". Red book shows weight and height tracking the 50th centile.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'No vomiting, no choking or gagging on lumps, no diarrhoea or tummy pain, bowels normal. No rashes or reactions to foods. Lots of energy. Talking in sentences, plays with other children at nursery, no concerns raised about development or behaviour. No unusual sensory issues beyond "she hates sauce touching her pasta".'
        },
        {
          topic: 'Background',
          text: 'Born at term, healthy. No medicines; not on vitamin drops. No allergies. Up to date with jabs. Attends nursery 3 days a week, where she "eats a bit better".'
        },
        {
          topic: 'Family',
          text: 'Lives with Kerry and partner, Dean; baby brother (7 months). Kerry\u2019s mother-in-law says Mabel "will end up ill" \u2014 adds to the pressure. Kerry was "a fussy eater" too.'
        },
        {
          topic: 'How to play it',
          text: 'Tired, anxious, wants to do the right thing. Admit "I\u2019ve been pushing the vegetables hard" and offering pudding as a reward. Surprised and relieved when told she\u2019s growing well: "Really? With what she eats?" Expect a blood test or supplements.'
        }
      ],
      ice: {
        ideas: '"She must be missing vitamins, or something might be wrong with her."',
        concerns: 'HIDDEN AGENDA \u2014 "I dread teatime. I feel like I\u2019m failing her." Criticism from her mother-in-law is fuelling the worry.',
        expectations: '"A blood test, or some supplements."'
      },
      cues: [
        '"She seems happy and full of energy" \u2014 a thriving child; check growth.',
        '"I end up making separate meals" \u2014 mealtime pattern to change gently.',
        '"I feel like I\u2019m failing her" \u2014 parental anxiety to address.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Confirms the child is GROWING/THRIVING (weighs, measures and plots growth against NICE NG75 thresholds, checks energy/development/wellbeing) as the key reassurance'
      },
      {
        dom: 'dg',
        text: 'Recognises picky/fussy eating as a common, usually normal developmental phase (food neophobia) and reassures accordingly'
      },
      {
        dom: 'dg',
        text: 'EXCLUDES red flags/organic causes (faltering growth/weight loss, very restricted intake/deficiency, dysphagia/vomiting, GI/allergy/coeliac, developmental or social communication concerns/autism \u2014 asking about talking, play and nursery \u2014 ARFID)'
      },
      {
        dom: 'cm',
        text: 'Gives PRACTICAL feeding/behaviour advice \u2014 family mealtimes/role-modelling, repeated low-pressure exposure, avoiding force/bribery/battles, realistic portions, limiting grazing/milk/juice, keeping mealtimes positive'
      },
      {
        dom: 'cm',
        text: 'Addresses parental anxiety, avoids unnecessary investigations/special supplements when thriving while recommending the standard daily vitamin A, C and D drops for under-5s, and refers (dietitian/health visitor/paediatrics) only for faltering growth/very restricted intake/red flags'
      },
      {
        dom: 'ro',
        text: 'Reassures and supports the anxious parent (it\u2019s common, not poor parenting), and checks understanding of the feeding advice'
      },
      {
        dom: 'ro',
        text: 'Explores the mealtime battles and the worry about nutrition, and agrees a practical, low-pressure feeding plan the parent feels able to follow'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: return if faltering growth/weight loss, very restricted range with nutritional concern, or red flags; growth monitoring and review \u2014 reassurance + practical advice, not unnecessary tests'
      }
    ],
    worked: [
      {
        lbl: 'Lead with growth',
        txt: '"The most reassuring thing first \u2014 let me plot Mabel\u2019s growth. \u2026 She\u2019s tracking nicely, she\u2019s active and developing well. That tells me she IS getting what she needs, even though it doesn\u2019t feel like it at mealtimes."'
      },
      {
        lbl: 'Normalise',
        txt: '"Picky eating at this age is incredibly common \u2014 toddlers are naturally wary of new foods. It\u2019s a phase most grow out of, and it\u2019s absolutely not a reflection of your cooking or parenting."'
      },
      {
        lbl: 'Quick red-flag check',
        txt: '"Just to be safe \u2014 any weight loss, choking or vomiting, tummy symptoms or reactions to foods? How is she getting on with talking, playing and mixing with other children at nursery? \u2026 All fine. Good \u2014 that\u2019s reassuring."'
      },
      {
        lbl: 'Practical advice',
        txt: '"A few things really help: eat together so she sees you enjoying foods; keep offering new foods without any pressure \u2014 it can take ten or more tries before a child accepts something; and avoid forcing, bribing or battling, as that backfires. Limit snacks, milk and juice between meals so she\u2019s hungry at mealtimes, and keep them short and relaxed."'
      },
      {
        lbl: 'Reassure on supplements',
        txt: '"Because she\u2019s thriving, she doesn\u2019t need tests or special supplements \u2014 but all children under five are advised to have daily vitamin drops with vitamins A, C and D, free if you qualify for Healthy Start; that\u2019s standard for every child, not because anything is wrong. Try to step back from the battle; the pressure often makes fussiness worse."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if she starts losing weight or dropping off her growth, if her range narrows to almost nothing, or you\u2019re worried about her development \u2014 then we\u2019d look further or involve a dietitian. Otherwise, this should settle with time."'
      }
    ],
    learning: 'PICKY/FUSSY EATING is very common and usually a normal developmental phase in toddlers/pre-schoolers (food neophobia), typically self-limiting, and the most important step is to confirm the child is GROWING and THRIVING \u2014 weighing, measuring and plotting growth on the UK-WHO chart (NICE NG75 faltering-weight thresholds) and checking weight/height tracking, energy, development and general wellbeing \u2014 because growth, not the food diary, is the key reassurance. Reassure the parent it is common, not harmful when the child is thriving, and not a reflection of poor parenting. EXCLUDE red flags/organic causes: faltering growth/weight loss, a very restricted intake risking deficiency, dysphagia/choking/recurrent vomiting, GI symptoms/coeliac, food allergy, developmental or social communication concerns/autism (sensory food selectivity; NICE CG128), or features of a feeding disorder (ARFID \u2014 extreme restriction/distress; DSM-5-TR, international) \u2014 which would change management and prompt assessment/referral. Give practical feeding/behaviour advice: regular family mealtimes and role-modelling; repeated LOW-PRESSURE exposure to new foods (it can take 10+ tries \u2014 keep offering without forcing); avoid pressure, force-feeding, bribery and battles (which worsen refusal); realistic toddler portions; limit grazing, excess milk and juice between meals; keep mealtimes positive, short and distraction-free; and involve the child. Address the parental anxiety and mealtime battles \u2014 a major part of the consultation \u2014 avoid unnecessary investigations and supplements when the child is thriving (but recommend the daily vitamin A, C and D drops UK advice gives all children aged 6 months to 5 years; Healthy Start for eligible families), and refer to a dietitian/health visitor/paediatrics only for faltering growth, very restricted intake with nutritional concern, or red flags. The skill is growth/red-flag exclusion, reassurance, practical feeding advice and parental support \u2014 not unnecessary testing.',
    knowledge: {
      guideline: 'NICE NG75 Faltering growth (2017) \u00b7 NICE CG128 Autism in under 19s (2011, updated 2017) \u00b7 NICE CG116 Food allergy in under 19s (2011) \u00b7 NICE NG20 Coeliac disease (2015) \u00b7 DHSC Healthy Start and NHS vitamin advice for children 6 months to 5 years \u00b7 DSM-5-TR ARFID (international) \u00b7 picky/fussy eating: confirm thriving (growth) \u00b7 exclude red flags \u00b7 low-pressure feeding advice \u00b7 parental support',
      points: [
        {
          h: 'Confirm thriving',
          t: 'Weigh, measure, plot growth (UK-WHO chart; NICE NG75 centile-fall thresholds, weight below 2nd centile); check energy, development. Growth is the key reassurance, not the food diary.'
        },
        {
          h: 'Common/normal',
          t: 'Picky eating is a common, usually normal developmental phase (food neophobia), typically self-limiting; not poor parenting.'
        },
        {
          h: 'Exclude red flags',
          t: 'Faltering growth/weight loss, very restricted intake/deficiency, dysphagia/vomiting, GI/allergy (CG116)/coeliac (NG20), developmental or social communication concerns/autism (CG128), ARFID.'
        },
        {
          h: 'Practical advice',
          t: 'Family mealtimes/role-modelling; repeated low-pressure exposure (10+ tries); no force/bribery/battles; realistic portions; limit grazing/milk/juice; positive short mealtimes.'
        },
        {
          h: 'Avoid over-medicalising',
          t: 'No routine tests/special supplements when thriving; standard daily vitamin A, C and D drops for all 6 months\u20135 years (Healthy Start). Refer (dietitian/HV/paeds) only for faltering growth/very restricted intake/red flags.'
        },
        { h: 'Support the parent', t: 'Address anxiety and mealtime battles; reassure; step back from pressure.' },
        {
          h: 'Never do',
          t: 'Never over-investigate/supplement a thriving picky eater; never advise force-feeding/bribery; never miss faltering growth/ARFID/developmental concerns.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Return for weight loss/faltering growth, very restricted range, or developmental concern; growth monitoring; review.'
        }
      ]
    }
  };

  /* ===== 286. Halitosis ===== */
  const c286 = {
    id: 'halitosis',
    title: '"I\u2019ve got persistent bad breath that\u2019s embarrassing me \u2014 mouthwash doesn\u2019t fix it. What\u2019s causing it?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 38,
      sex: 'M',
      setting: 'Video consultation \u2014 persistent halitosis',
      system: 'ENT / Dental / GI \u2014 halitosis: the oral-first approach & systemic causes',
      checked: 'October 2026'
    },
    brief: 'Mr Sanjay Mehta, 38, has persistent HALITOSIS (bad breath) affecting his confidence, not fixed by mouthwash. The task is the structured approach to halitosis: recognise that the VAST MAJORITY of true halitosis is ORAL in origin (poor oral hygiene, tongue coating, gingivitis/periodontal disease, dental caries/abscess, dry mouth) \u2014 so the first step is looking at the mouth, tongue and tonsils on video (with a torch) and asking about neck lumps, with a face-to-face examination if anything is unclear, and advising a DENTAL check-up (patients book NHS dental care directly \u2014 GPs do not refer routinely; NHS 111 can help find a dentist); take a history (true vs perceived/halitophobia, timing, related symptoms), and consider NON-ORAL causes where appropriate: ENT (chronic sinusitis/post-nasal drip, tonsil stones/tonsillitis), GI (GORD \u2014 a recognised cause, though "stomach causes" are over-attributed, and he has no reflux symptoms; NICE CG184), respiratory infections/bronchiectasis, systemic/metabolic (diabetic ketoacidosis \u2014 ketotic breath, hepatic/renal failure \u2014 distinctive odours, which are red flags), drugs, smoking and diet; MANAGE with oral hygiene optimisation (twice-daily brushing with fluoride toothpaste, spit don\u2019t rinse, interdental cleaning, TONGUE cleaning, hydration, stopping smoking/diet \u2014 OHID Delivering better oral health, 2021), a self-booked dental check for gum disease and decay (chlorhexidine mouthwash can help gum inflammation short term but stains teeth and alters taste, BNF), and treat any identified cause (e.g. GORD, sinusitis); and address the psychological/social impact and reassure (recognise halitophobia where breath is objectively normal). The skill is the oral-first structured approach, dental referral, considering systemic red flags, and treating the cause. NICE NG12 head and neck: unexplained mouth ulceration lasting more than 3 weeks, or a persistent unexplained neck lump, needs a suspected cancer pathway referral for oral cancer \u2014 so look for ulcers and feel the neck. Recorded findings available to the candidate (no in-person examination in this remote consultation): On video (with a phone torch): thick white-yellow coating on the back of the tongue; gums look red at the margins; no visible ulcers or patches; tonsils small; he can feel no neck lumps.',
    script: {
      opening: '"This is embarrassing \u2014 I\u2019ve had bad breath for ages and it\u2019s knocking my confidence at work. Mints and mouthwash only mask it for a bit. I keep wondering if something\u2019s wrong with my stomach. What\u2019s actually causing it and how do I sort it?"',
      facts: [
        {
          topic: 'The breath',
          text: 'About a year. "I can taste it, and I think people step back when I talk." His wife has mentioned it in the mornings. Worse in the morning and after coffee. Checks his breath many times a day.'
        },
        {
          topic: 'Mouth',
          text: 'Brushes once a day, sometimes twice; never cleans his tongue or between his teeth. Gums bleed when brushing. Hasn\u2019t seen a dentist for about 4 years. If asked to look in his mouth on camera: tongue has a thick white-yellow coating at the back. No ulcers, no lumps he has noticed.'
        },
        {
          topic: 'Other questions (all negative)',
          text: 'No blocked nose or post-nasal drip, no sore throat, no tonsil stones he knows of. No heartburn or acid, no swallowing problems, no weight loss. Not thirsty, not passing more urine. No dry mouth. Feels well.'
        },
        {
          topic: 'Lifestyle and medicines',
          text: 'Smokes 5 a day "socially". Drinks 4 coffees a day, a few beers at the weekend. Low-carb diet for the last 6 months to lose weight (only if asked about diet). No regular medicines. No allergies.'
        },
        {
          topic: 'Work and social',
          text: 'Sales manager \u2014 lots of face-to-face meetings. Married with one child. Avoids talking to people close up; it is "getting me down a bit". No low mood beyond that.'
        },
        {
          topic: 'How to play it',
          text: 'Embarrassed, a bit anxious. Convinced it\u2019s your stomach: "So it\u2019s not my stomach?" Accept the explanation if it makes sense. Agree to book a dentist this week. Ask about stopping the constant checking and worrying.'
        }
      ],
      ice: {
        ideas: '"I thought it must be my stomach and maybe I need a test \u2014 a camera test or something for H. pylori."',
        concerns: '"I avoid talking to people close up. It\u2019s getting me down." Worried it is affecting his chances of promotion.',
        expectations: '"A test to find the cause, and a treatment that actually works."'
      },
      cues: [
        '"Is something wrong with my stomach?" \u2014 he expects a GI cause; explain that most bad breath starts in the mouth.',
        '"It\u2019s been a while since the dentist" (if asked) \u2014 dental review needed.',
        '"I\u2019m always checking" \u2014 possible anxiety about his breath to explore.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises that most halitosis is ORAL in origin (oral hygiene, tongue coating, gum disease, caries, dry mouth) and takes an ORAL-FIRST approach (looking at the mouth, tongue and tonsils on video and asking about neck lumps) with a DENTAL check he books himself'
      },
      {
        dom: 'dg',
        text: 'Takes a history distinguishing TRUE from PERCEIVED halitosis (halitophobia) and covering oral care, ENT/GI symptoms, smoking, diet, dry mouth, drugs'
      },
      {
        dom: 'dg',
        text: 'Considers NON-ORAL causes where appropriate (ENT \u2014 sinusitis/post-nasal drip, tonsil stones; GI \u2014 GORD; smoking/diet/drugs)'
      },
      {
        dom: 'dg',
        text: 'Recognises SYSTEMIC red-flag causes with distinctive odours (DKA \u2014 ketotic, hepatic \u2014 fetor hepaticus, renal \u2014 uraemic) needing assessment, and NICE NG12 oral cancer features (ulcer over 3 weeks, persistent neck lump)'
      },
      {
        dom: 'cm',
        text: 'Manages with oral-hygiene optimisation (brushing, interdental and TONGUE cleaning, hydration, smoking/diet \u2014 OHID 2021), a self-booked dental check (chlorhexidine only short term: staining), and treatment of any identified ENT/GI cause'
      },
      {
        dom: 'ro',
        text: 'Addresses the embarrassment/confidence impact, reassures, and recognises/manages halitophobia where breath is objectively normal'
      },
      {
        dom: 'ro',
        text: 'Explores the impact on his confidence and relationships and any health anxiety behind the visit, and agrees the oral-first plan and dental review with him'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: dental check, treat the cause, mouth ulcer over 3 weeks/neck lump/dysphagia, systemic red flags warranting assessment, and review \u2014 oral-first structured approach, not chasing a "stomach" cause'
      }
    ],
    worked: [
      {
        lbl: 'Reframe',
        txt: '"It\u2019s a really common thing to feel embarrassed about, and here\u2019s the useful bit: most bad breath \u2014 the large majority of cases \u2014 actually comes from the mouth, not the stomach. Mouthwash just masks it, which is why it keeps coming back."'
      },
      {
        lbl: 'Oral assessment',
        txt: '"Let me look in your mouth \u2014 the gums, teeth and especially the coating on the back of the tongue, which is a big source. How\u2019s your oral hygiene and when did you last see a dentist?"'
      },
      {
        lbl: 'Hygiene advice',
        txt: '"The mainstays are brushing twice a day, cleaning between the teeth, and \u2014 importantly \u2014 cleaning your tongue with a scraper, plus staying well hydrated and easing off smoking and strong-smelling foods. And a proper dental check, because gum disease and decay are common causes \u2014 you can book directly with a dentist, or NHS 111 can help you find one."'
      },
      {
        lbl: 'Other causes',
        txt: '"If your mouth\u2019s healthy, I\u2019d look at other causes \u2014 sinus problems or post-nasal drip, tonsil \u2018stones\u2019, or reflux from the stomach, which can contribute. We\u2019d treat whichever fits."'
      },
      {
        lbl: 'Red flags',
        txt: '"Rarely, certain medical conditions cause distinctive breath odours \u2014 I\u2019ll just check you don\u2019t have symptoms of things like diabetes, such as thirst or weight loss. But that\u2019s uncommon. I\u2019ll also check for mouth ulcers and feel your neck."'
      },
      {
        lbl: 'Reassure + safety-net',
        txt: '"Start with the oral hygiene and a dental visit \u2014 that fixes most cases. If your breath is actually fine and the worry persists, we can help with that too. Come back if it doesn\u2019t improve and we\u2019ll look further \u2014 and sooner if you get a mouth ulcer that doesn\u2019t heal within three weeks, a lump in your neck, or trouble swallowing."'
      }
    ],
    learning: 'Persistent HALITOSIS is approached oral-first, because the vast majority of true halitosis (most cases in published series) is ORAL in origin \u2014 poor oral hygiene, TONGUE coating, gingivitis/periodontal disease, dental caries/abscess and dry mouth \u2014 so the first step is an oral assessment and a DENTAL check-up that he books directly (GPs do not refer routinely), and patients (and clinicians) often over-attribute it to "the stomach" while mouthwash only masks it. Take a history distinguishing TRUE halitosis (confirmable, others notice) from PERCEIVED halitosis (HALITOPHOBIA \u2014 conviction of bad breath that is objectively normal, sometimes with anxiety/OCD features), covering oral care, ENT/GI symptoms, smoking, diet, dry mouth and medications. Where oral assessment is normal, consider non-oral causes: ENT (chronic sinusitis/post-nasal drip, tonsil stones/tonsilloliths, tonsillitis), GI (GORD \u2014 a recognised but over-attributed cause), respiratory infections, and drugs/smoking/diet. Recognise systemic/metabolic causes that are RED FLAGS with distinctive odours \u2014 diabetic ketoacidosis (ketotic/"pear-drop"), hepatic failure (fetor hepaticus) and renal failure (uraemic) \u2014 pointing to serious disease needing assessment. Manage by optimising oral hygiene (twice-daily brushing, interdental and tongue cleaning, hydration, reducing smoking/odorous foods), treating gum disease/caries via a self-booked dentist (the cornerstone; OHID Delivering better oral health 2021; chlorhexidine short term only, as it stains teeth), and treating any ENT/GI cause found; address the psychological/social impact and reassure, recognising and managing halitophobia (objectively normal breath \u2192 reassurance/psychological support) appropriately. NICE NG12: unexplained mouth ulceration for more than 3 weeks or a persistent unexplained neck lump needs a suspected cancer pathway referral for oral cancer, so ask about and look for these (face to face if not clearly seen on video).',
    knowledge: {
      guideline: 'OHID Delivering better oral health (version 4, 2021) \u00b7 NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) head and neck \u00b7 NICE CG184 GORD and dyspepsia (2014, updated 2019) \u00b7 BNF chlorhexidine \u00b7 halitosis: oral-first approach (hygiene/tongue/gum disease) + self-booked dental care \u00b7 non-oral causes (ENT/GORD) \u00b7 systemic red-flag odours \u00b7 halitophobia',
      points: [
        {
          h: 'Mostly oral',
          t: 'Most true halitosis is oral (hygiene, tongue coating, gum disease, caries, dry mouth). Oral-first approach + dental check (patient books directly). Mouthwash masks only.'
        },
        {
          h: 'True vs perceived',
          t: 'Distinguish true halitosis from halitophobia (objectively normal breath, conviction \u00b1 anxiety/OCD).'
        },
        {
          h: 'Non-oral causes',
          t: 'ENT (sinusitis/post-nasal drip, tonsil stones), GORD (over-attributed), respiratory infections, smoking/diet/drugs.'
        },
        {
          h: 'Systemic red flags',
          t: 'Distinctive odours \u2014 ketotic (DKA), fetor hepaticus (liver failure), uraemic (renal failure) \u2014 serious; assess. NICE NG12: mouth ulcer over 3 weeks or persistent neck lump \u2192 suspected cancer pathway.'
        },
        {
          h: 'Manage',
          t: 'Oral hygiene (brushing, interdental, tongue cleaning, hydration, smoking/diet), treat gum disease/caries via self-booked dentist (chlorhexidine short term: stains teeth); treat ENT/GI cause.'
        },
        {
          h: 'Address impact',
          t: 'Embarrassment/confidence; reassure; recognise/manage halitophobia (reassurance/psychological support).'
        },
        {
          h: 'Never do',
          t: 'Never chase a "stomach" cause first; never rely on mouthwash; never miss systemic red-flag odours; never overlook tongue cleaning/dental review.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Dental check; treat the cause; systemic red flags \u2192 assess; ulcer over 3 weeks/neck lump \u2192 NICE NG12 referral; review in 6\u20138 weeks.'
        }
      ]
    }
  };

  /* ===== 287. Latex allergy ===== */
  const c287 = {
    id: 'latex-allergy',
    title: '"Every time I use condoms or rubber gloves I get itching, redness and swelling \u2014 could I be allergic to latex?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 30,
      sex: 'F',
      setting: 'Video consultation \u2014 reactions to latex products',
      system: 'Allergy \u2014 latex allergy: recognition, avoidance, cross-reactivity & anaphylaxis risk',
      checked: 'October 2026'
    },
    brief: 'Ms Hannah Boyd, 30, gets local itching/redness/SWELLING (and possibly more generalised reactions) with LATEX exposure \u2014 condoms, rubber gloves, balloons \u2014 suggesting LATEX ALLERGY. The task: recognise latex allergy (immediate IgE-mediated type I \u2014 urticaria/angioedema, and potentially ANAPHYLAXIS, on latex contact; vs delayed type IV contact dermatitis from rubber chemicals), take a history (which products, immediacy/severity, systemic features around the lip-tingling episode \u2014 its circumstances are not recorded, so ask \u2014 occupational exposure \u2014 her job is not recorded, so ask about gloves at work: healthcare/cleaning/catering \u2014 atopy), recognise risk groups (healthcare workers, spina bifida/multiple surgeries, atopic) and the LATEX-FRUIT (food) CROSS-REACTIVITY syndrome (banana, avocado, kiwi, chestnut \u2014 ask/advise); arrange confirmation/referral to ALLERGY/immunology where indicated (specific IgE/skin testing); MANAGE with strict AVOIDANCE (latex-free alternatives \u2014 polyurethane/polyisoprene condoms, nitrile gloves in preference to vinyl), record the allergy (NICE CG183), advise informing every healthcare team, dentist and the cervical screening sample-taker before procedures, and employers (who must assess and control exposure under COSHH 2002, HSE guidance \u2014 usually switching to non-latex gloves), a medical alert bracelet and \u2014 critically \u2014 an emergency plan (999 for throat swelling, breathing difficulty or faintness); adrenaline auto-injectors are for people at risk of anaphylaxis, decided with the allergy service, and if prescribed she carries two in-date devices (MHRA Drug Safety Update June 2023); anyone treated for anaphylaxis is referred to a specialist allergy service (NICE NG258, 2026; Resuscitation Council UK 2021); and address CONTRACEPTION (non-latex condoms, which may slip or break slightly more often \u2014 explain correct use, lubricant and emergency contraception \u2014 or methods that do not rely on latex, with condoms still advised for STI protection; FSRH barrier methods guideline). The skill is recognising latex allergy, avoidance/cross-reactivity advice, anaphylaxis-risk assessment/plan, allergy referral, and practical alternatives.',
    script: {
      opening: '"For a while now, whenever I use condoms or wear rubber washing-up gloves, I get itchy, red and a bit swollen where they touch. Once my lips tingled too. Could I be allergic to latex? And what do I do about contraception?"',
      facts: [
        {
          topic: 'The reactions',
          text: 'About 6 months. Within minutes of contact with latex condoms or washing-up gloves: itchy, raised, red and swollen skin where they touch. Settles within an hour or two after removal. Once, blowing up balloons for her niece\u2019s party, her lips tingled and felt a bit puffy \u2014 settled by itself.'
        },
        {
          topic: 'Severity questions (all negative)',
          text: 'Never throat tightness, wheeze, breathlessness, faintness or widespread hives. Never needed hospital or adrenaline.'
        },
        {
          topic: 'Foods (if asked)',
          text: 'Mouth goes itchy with kiwi fruit; hasn\u2019t eaten avocado much. Bananas fine. No other food allergies known.'
        },
        {
          topic: 'Risk factors',
          text: 'Hay fever and mild eczema as a child. Works as a dental nurse \u2014 the practice uses nitrile gloves, so no problem at work. Never had operations. No spina bifida.'
        },
        {
          topic: 'Contraception and sexual health',
          text: 'Uses condoms with her partner of a year; nothing else. Not keen on hormones \u2014 "the pill made me moody years ago". Not pregnant; last period 10 days ago. Due a cervical screening test next month (only if asked).'
        },
        { topic: 'Health', text: 'No regular medicines. No known drug allergies. Non-smoker.' },
        {
          topic: 'How to play it',
          text: 'Practical, a bit anxious about the lip tingling. Ask "Could it become dangerous?" and "Do I need one of those adrenaline pens?" Interested in latex-free condoms, but wants time to think about other contraception.'
        }
      ],
      ice: {
        ideas: '"I read about latex allergy online \u2014 I think that\u2019s what it is."',
        concerns: '"The lip thing scared me. Could it get worse?" And "I don\u2019t want to get pregnant."',
        expectations: '"To know for sure, and to sort out contraception."'
      },
      cues: [
        '"Once my lips tingled" \u2014 assess anaphylaxis risk.',
        '"My mouth itches with kiwi" (if foods are asked) \u2014 latex-fruit cross-reactivity.',
        '"What do I do about contraception?" \u2014 latex-free options and choices.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises LATEX ALLERGY \u2014 immediate (IgE/type I) reactions (itching, urticaria, angioedema, potential anaphylaxis) on latex contact \u2014 and distinguishes delayed (type IV) contact dermatitis'
      },
      {
        dom: 'dg',
        text: 'Takes a history (including systemic features around the lip episode) and identifies RISK GROUPS (healthcare workers, spina bifida/multiple surgeries, atopy) and occupational exposure (asks about her job and gloves at work)'
      },
      { dom: 'dg', text: 'Asks about/advises on LATEX-FRUIT cross-reactivity (banana, avocado, kiwi, chestnut)' },
      {
        dom: 'cm',
        text: 'Arranges confirmation/REFERRAL to allergy/immunology where indicated (specific IgE/skin testing) and ASSESSES ANAPHYLAXIS risk \u2014 providing an emergency plan, with an adrenaline auto-injector (two devices, MHRA June 2023) considered with the allergy service if systemic-reaction risk (NICE NG258)'
      },
      {
        dom: 'cm',
        text: 'Advises strict AVOIDANCE with latex-free alternatives (polyurethane/polyisoprene condoms, nitrile gloves), informing healthcare/dentists/cervical screening sample-taker/employers (COSHH), MedicAlert, and sorts NON-LATEX contraception with slippage and emergency contraception advice; documents the allergy'
      },
      {
        dom: 'ro',
        text: 'Explains the diagnosis and plan, addresses the contraception concern directly, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Checks her understanding of the diagnosis and the importance of avoidance, and agrees a practical plan for alternatives at home, at work and in healthcare settings that fits her life'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: anaphylaxis-risk plan/auto-injector if relevant, allergy referral, avoidance and alternatives, informing providers before procedures, and review \u2014 recognition + avoidance + safety planning'
      }
    ],
    worked: [
      {
        lbl: 'Confirm the likely diagnosis',
        txt: '"Yes \u2014 immediate itching, redness and swelling whenever latex touches your skin, with your lips tingling once, strongly suggests a latex allergy. That\u2019s different from a slow rash to rubber chemicals; yours is the immediate type."'
      },
      {
        lbl: 'History/risk',
        txt: '"What\u2019s your job \u2014 do you work with gloves, like in healthcare, cleaning or catering? If so, your employer has to reduce your exposure, usually by switching to non-latex gloves. And do you react to certain fruits \u2014 banana, avocado, kiwi or chestnut? They cross-react with latex, so it\u2019s worth knowing."'
      },
      {
        lbl: 'Safety assessment',
        txt: '"The most important thing is safety. Because latex allergy can occasionally cause a severe whole-body reaction, I want to know if you\u2019ve ever had breathing or throat symptoms. If there\u2019s any risk, we\u2019d make an emergency plan, and the allergy specialist would decide about adrenaline pens \u2014 if prescribed, you\u2019d carry two at all times \u2014 and you must tell any dentist, hospital or nurse, including for cervical screening, before procedures so they use latex-free."'
      },
      {
        lbl: 'Avoidance + alternatives',
        txt: '"The key is avoiding latex \u2014 use nitrile gloves instead of rubber ones, avoid balloons, and for condoms there are excellent latex-free ones made of polyurethane or polyisoprene."'
      },
      {
        lbl: 'Contraception',
        txt: '"For contraception, you can use non-latex condoms \u2014 they can slip or break a little more often, so use plenty of lubricant and know how to get emergency contraception \u2014 or we could consider a method that doesn\u2019t involve latex at all \u2014 the pill, an implant or coil \u2014 if you\u2019d prefer not to rely on condoms. Condoms still protect against infections."'
      },
      {
        lbl: 'Refer + document',
        txt: '"I\u2019ll refer you to the allergy clinic to confirm it with testing, record the allergy clearly in your notes, and suggest a medical-alert bracelet. If you ever get swelling of your tongue or throat, difficulty breathing, a hoarse voice or feel faint after latex, call 999 straight away \u2014 that\u2019s urgent."'
      }
    ],
    learning: 'LATEX ALLERGY causes immediate (IgE-mediated, type I) reactions on latex contact \u2014 itching, redness, urticaria, angioedema (swelling) and potentially ANAPHYLAXIS \u2014 from condoms, rubber gloves, balloons and similar, and must be distinguished from a delayed (type IV) contact dermatitis to rubber-accelerator chemicals (eczematous, 24\u201348h). Take a history (which products, immediacy/severity, systemic features, occupational exposure \u2014 ask her job \u2014 atopy) and recognise RISK GROUPS: healthcare workers, people with spina bifida or multiple surgeries (repeated latex exposure), and atopic individuals. Ask about and advise on the LATEX-FRUIT cross-reactivity syndrome \u2014 banana, avocado, kiwi, chestnut and others \u2014 which can cause allergic reactions. Arrange confirmation/referral to allergy/immunology where indicated (specific IgE/skin-prick testing), and critically ASSESS ANAPHYLAXIS risk: where there is a history of or risk of systemic reactions, provide an emergency action plan, with an adrenaline auto-injector decided with the allergy service (two in-date devices if prescribed, MHRA Drug Safety Update June 2023; specialist allergy referral after any anaphylaxis, NICE NG258 2026), and ensure the patient informs healthcare providers/dentists before procedures so a latex-free environment is used. Manage with strict AVOIDANCE and latex-free alternatives (polyurethane/polyisoprene condoms, nitrile gloves), advise informing employers (who must control exposure under COSHH 2002), dentists and healthcare providers and a MedicAlert, and for CONTRACEPTION offer non-latex condoms (explaining slightly higher slippage/breakage and emergency contraception) or an alternative method so the patient is not reliant on latex (FSRH) \u2014 documenting the allergy clearly (NICE CG183) and telling the cervical screening sample-taker. The skill is recognising latex allergy, avoidance/cross-reactivity advice, anaphylaxis-risk assessment/planning, allergy referral and practical alternatives.',
    knowledge: {
      guideline: 'NICE NG258 Anaphylaxis: assessment and referral after emergency treatment (2026) \u00b7 Resuscitation Council UK anaphylaxis (2021) \u00b7 MHRA Drug Safety Update June 2023 adrenaline auto-injectors \u00b7 NICE CG183 Drug allergy (2014) \u00b7 FSRH barrier methods guideline (2012) \u00b7 HSE latex guidance and COSHH 2002 \u00b7 latex allergy: type I vs type IV \u00b7 risk groups & latex-fruit cross-reactivity \u00b7 avoidance \u00b7 anaphylaxis plan \u00b7 allergy referral',
      points: [
        {
          h: 'Recognise',
          t: 'Immediate (IgE/type I) reactions \u2014 itching, urticaria, angioedema, potential anaphylaxis \u2014 on latex contact (condoms/gloves/balloons). Distinguish delayed type IV contact dermatitis.'
        },
        { h: 'Risk groups', t: 'Healthcare workers, spina bifida/multiple surgeries, atopy; occupational exposure.' },
        { h: 'Latex-fruit cross-reactivity', t: 'Banana, avocado, kiwi, chestnut (and others) \u2014 ask/advise.' },
        {
          h: 'Confirm/refer & anaphylaxis',
          t: 'Allergy/immunology referral (specific IgE/skin testing) where indicated; assess anaphylaxis risk \u2014 emergency plan + auto-injector decided with allergy service (two if prescribed, MHRA 2023; NICE NG258); inform providers/dentists/cervical screening before procedures.'
        },
        {
          h: 'Avoidance/alternatives',
          t: 'Latex-free: polyurethane/polyisoprene condoms, nitrile gloves; inform employers (COSHH)/dentists/healthcare; MedicAlert; document (NICE CG183).'
        },
        {
          h: 'Contraception',
          t: 'Non-latex condoms (slightly more slippage \u2014 emergency contraception advice) or alternative method (pill/implant/coil) so not reliant on latex; condoms for STI protection (FSRH).'
        },
        {
          h: 'Never do',
          t: 'Never miss anaphylaxis risk; never overlook cross-reactive foods; never fail to advise informing healthcare/dentists; never leave the patient reliant on latex contraception.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Anaphylaxis plan/auto-injector if relevant; allergy referral; avoidance/alternatives; 999 for throat/breathing symptoms or faintness; review.'
        }
      ]
    }
  };

  /* ===== 288. Restless legs in pregnancy ===== */
  const c288 = {
    id: 'restless-legs-pregnancy',
    title: '"I\u2019m 30 weeks pregnant and every evening my legs feel crawly and I have to move them \u2014 it\u2019s ruining my sleep"',
    type: 'video',
    duration: 12,
    meta: {
      age: 31,
      sex: 'F',
      setting: 'Video consultation \u2014 an unpleasant urge to move the legs in pregnancy (midwife findings recorded)',
      system: 'Neurology / Obstetrics \u2014 restless legs syndrome in pregnancy: iron, conservative care & safe options',
      checked: 'October 2026'
    },
    brief: 'Mrs Nadia Qureshi, 31, 30 weeks pregnant, has the classic features of RESTLESS LEGS SYNDROME (RLS): an unpleasant URGE to move the legs with a crawling/uncomfortable sensation, WORSE at REST/in the EVENING/night, RELIEVED by MOVEMENT, disturbing sleep. RLS is common and often first occurs/worsens in PREGNANCY (usually resolving after delivery). The task: recognise RLS clinically (the four core URGE features, IRLSSG criteria, international) and exclude mimics \u2014 cramps, oedema, positional discomfort and, above all, a unilateral swollen, painful or red calf suggesting DVT (pregnancy is prothrombotic: same-day assessment); and \u2014 importantly \u2014 check for and treat the common secondary cause IRON DEFICIENCY (check FERRITIN, FBC and FOLATE; the IRLSSG pregnancy guideline, international, advises oral iron when ferritin is below 75 \u00b5g/L in RLS \u2014 a higher threshold than for anaemia (BSH 2020: iron deficiency in pregnancy is ferritin below 30 \u00b5g/L); replace iron and folate, doses per BNF), screen other contributors (consider thyroid/renal, certain drugs \u2014 SEDATING ANTIHISTAMINES often used for sleep or nausea, including over-the-counter sleep aids, dopamine-antagonist antiemetics, some antidepressants \u2014 caffeine, alcohol, nicotine) and ask about mood (perinatal mental health, NICE NG201); MANAGE conservatively first (sleep hygiene, gentle exercise/stretching/walking, leg massage/warmth, reduce caffeine/evening triggers, treat iron deficiency) given pregnancy (the usual RLS drugs \u2014 dopamine agonists AND alpha-2-delta ligands such as gabapentin/pregabalin \u2014 are AVOIDED in pregnancy, per the owner\u2019s Medwise-reviewed restless legs protocol and AASM 2024, international); reassure that pregnancy-related RLS usually RESOLVES after delivery; and seek obstetric advice for severe/refractory cases rather than prescribing standard RLS drugs unsafely; persistent symptoms after birth need reassessment. The skill is recognising RLS, checking/treating iron deficiency, conservative pregnancy-safe management, reassurance about post-delivery resolution, and caution with medication. Recorded findings available to the candidate (no in-person examination in this remote consultation): Community midwife, yesterday (30-week check): BP 118/72, urine dip negative, symphysis\u2013fundal height 30 cm, fetal heart 140; mild symmetrical ankle oedema; calves soft and non-tender. Booking bloods at 10 weeks: Hb 112 g/L; ferritin not measured.',
    script: {
      opening: '"I\u2019m 30 weeks pregnant and most evenings my legs feel really crawly and restless \u2014 I get this horrible urge to move them, and it\u2019s worst when I\u2019m sitting or lying down trying to sleep. Walking around helps for a bit. I\u2019m exhausted because it\u2019s wrecking my sleep. What can I do, and is it safe for the baby?"',
      facts: [
        {
          topic: 'The legs',
          text: 'About 5 weeks, getting worse. Both legs, deep in the calves. "Not painful exactly, just unbearable if I keep still." Starts around 8pm and when she lies down; walking or stretching helps for a while. Takes an hour or two to fall asleep; wakes with it at night.'
        },
        {
          topic: 'DVT and other questions (all negative)',
          text: 'Both legs the same. Ankles "a bit puffy by the evening, both the same". No calf pain, redness or one-sided swelling. No breathlessness or chest pain. No cramps that stop her in her tracks. No numbness or weakness. No back pain.'
        },
        {
          topic: 'Midwife check',
          text: 'If asked: saw the midwife yesterday for her 30-week check \u2014 "blood pressure and urine fine, baby growing well, she looked at my legs and said the swelling was normal and both calves were fine". Had bloods at booking; "I don\u2019t remember anyone mentioning iron."'
        },
        {
          topic: 'Pregnancy and medicines',
          text: 'Second pregnancy; first baby (Zara, 2) born normally. Uncomplicated so far. Takes a pregnancy multivitamin "most days". Thought about buying a sleep aid from the chemist (an antihistamine). No allergies.'
        },
        {
          topic: 'Lifestyle',
          text: 'Two coffees a day and tea in the evening. Non-smoker, no alcohol. Works part-time as a pharmacy dispenser. Vegetarian (only if diet is asked). Husband, Imran, supportive.'
        },
        {
          topic: 'Mood (if asked)',
          text: '"I\u2019m tired and a bit teary, but I\u2019m not depressed. I\u2019m just worn out." No thoughts of self-harm.'
        },
        {
          topic: 'How to play it',
          text: 'Tired, warm, a little anxious about the baby. You thought the baby might be pressing on something, or you might be lacking something. Ask "Can\u2019t I have a tablet for the legs themselves?" Accept a plan that includes a blood test and a next step.'
        }
      ],
      ice: {
        ideas: '"Maybe the baby\u2019s pressing on something, or I\u2019m lacking something."',
        concerns: '"I\u2019m worried it means something is wrong with the baby." Worried she won\u2019t cope with a toddler and a newborn on no sleep.',
        expectations: '"Something to help me sleep \u2014 maybe something from the chemist \u2014 as long as it\u2019s safe for the baby."'
      },
      cues: [
        '"Is it safe for the baby?" \u2014 reassurance and pregnancy-safe options.',
        '"I was going to get something from the chemist to sleep" \u2014 sedating antihistamines can make RLS worse.',
        '"I\u2019m vegetarian" (if diet is asked) \u2014 iron deficiency risk; check ferritin.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises RESTLESS LEGS SYNDROME from the four core features (urge to move with unpleasant sensation, worse at rest, relieved by movement, worse in the evening/night) and that it commonly occurs/worsens in pregnancy, excluding mimics \u2014 especially a unilateral swollen painful calf (DVT, same-day assessment)'
      },
      {
        dom: 'cm',
        text: 'TESTS FOR and treats IRON DEFICIENCY (ferritin, FBC and folate; oral iron when ferritin is below 75 \u00b5g/L, IRLSSG, international) \u2014 a key treatable contributor, especially in pregnancy \u2014 with iron and folate replacement'
      },
      {
        dom: 'dg',
        text: 'Screens other contributors (thyroid/renal function; medications \u2014 sedating antihistamines including OTC sleep aids, antiemetics, some antidepressants; caffeine) and addresses modifiable ones, asking about mood'
      },
      {
        dom: 'cm',
        text: 'Manages CONSERVATIVELY and pregnancy-safely (sleep hygiene, gentle exercise/stretching/walking, massage/warmth, reduce caffeine/evening triggers, treat iron) \u2014 avoiding dopamine agonists and alpha-2-delta ligands in pregnancy'
      },
      {
        dom: 'cm',
        text: 'Reassures that pregnancy-related RLS usually resolves after delivery and seeks OBSTETRIC specialist advice (the obstetric team) for severe/refractory symptoms rather than prescribing standard RLS drugs unsafely'
      },
      {
        dom: 'ro',
        text: 'Addresses the exhaustion and the safety-for-the-baby concern, reassures, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Negotiates a pregnancy-safe self-management plan with her, explaining why standard RLS drugs are avoided, so she understands the approach rather than feeling left untreated'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: ferritin/iron treatment and review in about four weeks, same-day assessment for a swollen painful leg, chest pain or breathlessness, mood, conservative measures, specialist advice if severe, and reassurance about post-delivery resolution \u2014 iron + conservative care, not unsafe medication'
      }
    ],
    worked: [
      {
        lbl: 'Name it + reassure',
        txt: '"This is restless legs syndrome \u2014 that urge to move with the crawly feeling, worse when resting and in the evenings, eased by moving. It\u2019s very common in pregnancy, it\u2019s not harmful to the baby, and the good news is it usually settles after you\u2019ve had the baby."'
      },
      {
        lbl: 'Check iron',
        txt: '"One really important and treatable cause is low iron, which is common in pregnancy \u2014 so I\u2019ll check your ferritin, blood count and folate. If your iron stores are low, or even at the lower end of normal, an iron tablet \u2014 safe in pregnancy \u2014 often improves the restless legs quite a lot."'
      },
      {
        lbl: 'Screen contributors',
        txt: '"I\u2019ll also check your thyroid and review any medications, since some can worsen it \u2014 please avoid sleep remedies from the chemist, as many are antihistamines that make restless legs worse. And cutting back on caffeine, especially later in the day, helps. Have you noticed one leg swollen, red or painful? How is your mood?"'
      },
      {
        lbl: 'Conservative measures',
        txt: '"For now, the safest and effective things are gentle exercise and stretching, a walk or leg massage in the evening, warmth, good sleep routines, and reducing caffeine. In pregnancy we avoid the usual restless-legs tablets \u2014 both types \u2014 so these come first."'
      },
      {
        lbl: 'Severe/refractory',
        txt: '"If it\u2019s severe and not settling with iron and these measures, I\u2019ll ask the obstetric team for advice on what\u2019s safe in pregnancy rather than reaching for the standard medications."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Let\u2019s sort the iron and try these measures, and review how you\u2019re sleeping. If one leg becomes swollen, red or painful, or you get chest pain or breathlessness, that needs same-day assessment. Tell me or your midwife if your mood drops \u2014 and remember, it typically eases off once baby arrives."'
      }
    ],
    learning: 'RESTLESS LEGS SYNDROME (RLS) is recognised by four core features: an URGE to move the legs (often with an unpleasant crawling/uncomfortable sensation), worse at REST, relieved by MOVEMENT, and worse in the EVENING/at night. It commonly first occurs or worsens in PREGNANCY (up to about 1 in 5, especially the third trimester) and usually resolves after delivery. Exclude mimics, especially a unilateral swollen painful calf (DVT \u2014 same-day assessment in a prothrombotic pregnancy). The key, easily-missed step is to check for and treat IRON DEFICIENCY, a common treatable secondary cause/contributor particularly relevant in pregnancy \u2014 check ferritin, FBC and folate, as low or even low-normal iron stores contribute (IRLSSG, international: oral iron when ferritin is below 75 \u00b5g/L; BSH 2020 for pregnancy thresholds) and iron and folate replacement often improves RLS. Screen other contributors (thyroid and renal function; medications that can worsen RLS \u2014 sedating antihistamines including over-the-counter sleep aids, some antidepressants such as SSRIs/mirtazapine, dopamine-antagonist antiemetics; caffeine) and ask about perinatal mood (NICE NG201) and address modifiable ones. Manage conservatively first \u2014 especially important in pregnancy \u2014 with sleep hygiene, gentle exercise/stretching/walking, leg massage, warmth/heat, reducing caffeine and evening triggers, and treating iron deficiency, because the usual RLS medications \u2014 dopamine agonists and alpha-2-delta ligands \u2014 are avoided in pregnancy (owner\u2019s Medwise-reviewed protocol; AASM 2024, international) and should not be reached for. Reassure that pregnancy-related RLS is common and usually resolves after delivery and that conservative measures plus iron are the mainstay, and for severe/refractory symptoms seek advice from the obstetric team on safe specialist options rather than prescribing standard RLS drugs unsafely. The skill is recognising RLS, checking/treating iron deficiency, conservative pregnancy-safe management, reassurance about post-delivery resolution, and caution with medication.',
    knowledge: {
      guideline: 'IRLSSG consensus guideline on RLS in pregnancy and lactation (Picchietti, Sleep Med Rev 2015, international) \u00b7 IRLSSG diagnostic criteria (international) \u00b7 BSH iron deficiency in pregnancy (2020) \u00b7 BNF oral iron and folic acid \u00b7 NICE NG201 Antenatal care (2021) \u00b7 AASM RLS guideline 2024 (international) \u00b7 owner\u2019s Medwise-reviewed restless legs protocol \u00b7 RLS in pregnancy: four core features \u00b7 iron (ferritin <75) \u00b7 conservative care \u00b7 avoid standard RLS drugs \u00b7 NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026)',
      points: [
        {
          h: 'Recognise RLS',
          t: 'Urge to move legs (unpleasant sensation), worse at rest, relieved by movement, worse in the evening/night. Common in pregnancy (up to 1 in 5, third trimester), usually resolves after delivery. Exclude DVT (unilateral swollen painful calf).'
        },
        {
          h: 'Iron deficiency',
          t: 'Key treatable contributor, esp. in pregnancy \u2014 check ferritin, FBC and folate; oral iron if ferritin below 75 \u00b5g/L (IRLSSG); iron and folate replacement often improves RLS.'
        },
        {
          h: 'Other contributors',
          t: 'Thyroid/renal function; drugs (sedating antihistamines incl. OTC sleep aids, antiemetics, some antidepressants), caffeine \u2014 address modifiable ones; ask about mood.'
        },
        {
          h: 'Conservative care',
          t: 'Sleep hygiene, gentle exercise/stretching/walking, massage/warmth, reduce caffeine/evening triggers, treat iron. First-line, especially in pregnancy.'
        },
        {
          h: 'Medication caution',
          t: 'Dopamine agonists and alpha-2-delta ligands are avoided in pregnancy \u2014 don\u2019t prescribe them; obstetric advice for severe/refractory symptoms.'
        },
        {
          h: 'Reassure',
          t: 'Pregnancy-related RLS is common, not harmful to the baby, and usually resolves after delivery.'
        },
        {
          h: 'Never do',
          t: 'Never miss/omit checking iron (ferritin); never prescribe standard RLS drugs unsafely in pregnancy; never dismiss the sleep impact; never overlook drug contributors.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Ferritin/iron treatment and review (about 4 weeks); DVT/PE advice (same-day); mood; conservative measures; obstetric advice if severe; reassurance about post-delivery resolution.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c285, c286, c287, c288);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'picky-eating': {
      ceg: ['Children & young people', 'Mental health & addiction'],
      stem: {
        name: 'Mabel (mother present)',
        age: '3 years \u00b7 female',
        pmh: [
          'Picky/fussy eating \u2014 narrow range, refuses new foods; mealtime battles (mother\u2019s name not recorded)',
          'Otherwise well & THRIVING (normal growth/energy/development)',
          'Parent anxious re nutrition'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"She\u2019ll only eat a handful of foods \u2014 mealtimes are a battle and I\u2019m worried she\u2019s not getting enough." Health visitor, last week: weight 14.2 kg (50th centile), height 96 cm (50th\u201375th centile), both tracking the same centiles since birth on the UK-WHO chart; development appropriate for age.',
        reason: 'Video consultation \u2014 fussy toddler, child thriving.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Confirm thriving',
          d: 'Weigh, measure, plot growth (NICE NG75); energy/development \u2014 growth is the key reassurance.'
        },
        { t: '2\u20104', h: 'Normalise', d: 'Picky eating common/normal phase; not poor parenting.' },
        {
          t: '4\u20106',
          h: 'Exclude red flags',
          d: 'Faltering growth/weight loss, very restricted intake, dysphagia/vomiting, developmental/autism, allergy/coeliac, ARFID.'
        },
        {
          t: '6\u20109',
          h: 'Practical advice',
          d: 'Family mealtimes/role-modelling, repeated low-pressure exposure (10+ tries), no force/bribery, limit grazing/milk/juice.'
        },
        {
          t: '9\u201012',
          h: 'Support + safety-net',
          d: 'No tests/special supplements when thriving (standard vitamin A, C, D drops); address anxiety; return for faltering growth/red flags.'
        }
      ],
      wordPics: {
        fail: 'Over-investigates/supplements a thriving child; advises force-feeding/bribery; misses faltering growth/ARFID/developmental concerns.',
        pass: 'Confirms thriving, excludes red flags, and gives practical low-pressure feeding advice with reassurance.',
        exc: 'Confirms thriving (growth), normalises picky eating, excludes red flags, gives practical low-pressure feeding advice, addresses parental anxiety, and avoids unnecessary tests \u2014 referring only for red flags.'
      },
      avoid: [
        {
          dont: '"Let\u2019s do some blood tests and start a supplement to be safe."',
          instead: '"She\u2019s growing well, so she doesn\u2019t need tests or special supplements \u2014 just the standard vitamin drops every under-5 is advised to have \u2014 let\u2019s focus on relaxed mealtimes."',
          why: 'Over-investigating a thriving picky eater is unnecessary and unhelpful.'
        },
        {
          dont: '"You\u2019ll have to make her eat it \u2014 don\u2019t let her win."',
          instead: '"Avoid force or battles \u2014 keep offering without pressure; it can take many tries."',
          why: 'Pressure/force-feeding worsens food refusal.'
        },
        {
          dont: '(No growth check) reassuring without plotting growth.',
          instead: '"Let me plot her growth \u2014 that\u2019s the real reassurance."',
          why: 'Growth is the key reassurance and excludes faltering growth.'
        }
      ]
    },
    halitosis: {
      ceg: ['New & undifferentiated presentations', 'Mental health & addiction'],
      stem: {
        name: 'Sanjay Mehta',
        age: '38 years \u00b7 male',
        pmh: [
          'Persistent halitosis, not fixed by mouthwash; confidence affected',
          'Thinks it\u2019s his "stomach"',
          'Oral hygiene/dental check (self-booked) to assess'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Persistent bad breath that\u2019s embarrassing me \u2014 mouthwash doesn\u2019t fix it. What\u2019s causing it?" On video (with a phone torch): thick white-yellow coating on the back of the tongue; gums look red at the margins; no visible ulcers or patches; tonsils small; he can feel no neck lumps.',
        reason: 'Video consultation \u2014 persistent halitosis.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Reframe (oral-first)',
          d: 'Most true halitosis is oral, not "the stomach"; mouthwash only masks it for a while.'
        },
        {
          t: '2\u20105',
          h: 'Oral assessment',
          d: 'Tongue coating, gum disease, caries, dry mouth; ulcers/neck lump; oral hygiene; self-booked dental check.'
        },
        {
          t: '5\u20107',
          h: 'Non-oral causes',
          d: 'ENT (sinusitis/post-nasal drip, tonsil stones), GORD, smoking/diet/drugs.'
        },
        {
          t: '7\u20109',
          h: 'Systemic red flags',
          d: 'Ketotic (DKA), fetor hepaticus, uraemic \u2014 serious; assess.'
        },
        {
          t: '9\u201012',
          h: 'Manage + halitophobia',
          d: 'Oral hygiene/tongue cleaning + dental check (booked by him); treat cause; recognise halitophobia.'
        }
      ],
      wordPics: {
        fail: 'Chases a "stomach" cause first / prescribes a PPI; ignores tongue cleaning/dental review; misses systemic red flags or halitophobia.',
        pass: 'Takes an oral-first approach with a self-booked dental check and considers non-oral/systemic causes.',
        exc: 'Recognises most halitosis is oral, assesses oral hygiene/tongue/gum disease with a self-booked dental check, considers ENT/GORD, systemic red-flag causes and oral cancer features (NICE NG12), manages the cause, and recognises halitophobia.'
      },
      avoid: [
        {
          dont: '"It\u2019s probably your stomach \u2014 try a reflux tablet."',
          instead: '"Most bad breath comes from the mouth \u2014 let\u2019s sort oral hygiene and a dental check (you can book directly) first."',
          why: 'Stomach causes are over-attributed; oral causes dominate.'
        },
        {
          dont: '(No tongue/dental) recommending mouthwash only.',
          instead: '"Tongue cleaning and a dental review tackle the actual source; mouthwash just masks it."',
          why: 'Tongue coating/gum disease and a dental check are central.'
        },
        {
          dont: '(Missing red flags) ignoring distinctive odours.',
          instead: '"I\u2019ll check you don\u2019t have symptoms of diabetes or other conditions that cause distinctive breath."',
          why: 'Systemic odours (DKA/hepatic/renal) are red flags.'
        }
      ]
    },
    'latex-allergy': {
      ceg: ['Gender, reproductive & sexual health', 'Urgent & unscheduled care'],
      stem: {
        name: 'Hannah Boyd',
        age: '30 years \u00b7 female',
        pmh: [
          'Immediate itching/redness/swelling with latex (condoms, rubber gloves); once lip tingling',
          '?occupational exposure (job not recorded); ?latex-fruit cross-reactivity',
          'Needs non-latex contraception'
        ],
        meds: ['Condoms (latex)'],
        allergy: '?Latex',
        recent: '"Itching, redness and swelling with condoms or rubber gloves \u2014 could I be allergic to latex?"',
        reason: 'Video consultation \u2014 reactions to latex products.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise',
          d: 'Immediate itching/swelling on latex contact = type I latex allergy (vs delayed contact dermatitis).'
        },
        {
          t: '2\u20104',
          h: 'History/risk/cross-react',
          d: 'Products/severity/occupation/atopy; risk groups; latex-fruit (banana/avocado/kiwi/chestnut).'
        },
        {
          t: '4\u20106',
          h: 'Anaphylaxis risk',
          d: 'Any systemic/throat/breathing symptoms \u2192 emergency plan + auto-injector via allergy service (two, MHRA 2023); inform dentists/healthcare/cervical screening.'
        },
        {
          t: '6\u20109',
          h: 'Avoidance/alternatives',
          d: 'Latex-free condoms (polyurethane), nitrile gloves; COSHH at work; MedicAlert; document; allergy referral.'
        },
        {
          t: '9\u201012',
          h: 'Contraception + safety-net',
          d: 'Non-latex condoms (slippage, emergency contraception) or alternative method; 999 for breathing/throat symptoms.'
        }
      ],
      wordPics: {
        fail: 'Recognises allergy but ignores anaphylaxis risk/cross-reactivity; leaves her reliant on latex contraception; no allergy referral/documentation.',
        pass: 'Recognises latex allergy, advises avoidance/alternatives, and arranges contraception + referral.',
        exc: 'Recognises type I latex allergy, takes a history/risk/cross-reactivity assessment, assesses anaphylaxis risk (plan/auto-injector), advises avoidance/latex-free alternatives, sorts non-latex contraception, refers to allergy, and documents.'
      },
      avoid: [
        {
          dont: '(Ignoring anaphylaxis) treating it as a minor rash.',
          instead: '"Latex allergy can rarely cause severe reactions \u2014 any throat/breathing symptoms? We\u2019d make a plan and tell dentists/hospitals."',
          why: 'Anaphylaxis risk and informing providers are critical.'
        },
        {
          dont: '(No alternative) leaving her on latex condoms.',
          instead: '"Use non-latex (polyurethane) condoms, or a method that avoids latex altogether."',
          why: 'She must not be reliant on the allergen for contraception.'
        },
        {
          dont: '(No cross-reactivity advice) omitting the latex-fruit link.',
          instead: '"Do you react to banana, avocado, kiwi or chestnut? They cross-react with latex."',
          why: 'Latex-fruit cross-reactivity is important to counsel.'
        }
      ]
    },
    'restless-legs-pregnancy': {
      ceg: ['Gender, reproductive & sexual health', 'New & undifferentiated presentations'],
      stem: {
        name: 'Nadia Qureshi',
        age: '31 years \u00b7 female',
        pmh: [
          '30 weeks pregnant; urge to move legs + crawling sensation, worse at rest/evening, relieved by movement',
          'Sleep disturbed/exhausted; worried re baby',
          'Check ferritin, FBC, folate; exclude DVT'
        ],
        meds: ['Pregnancy multivitamin'],
        allergy: 'NKDA',
        recent: '"30 weeks pregnant and every evening my legs feel crawly and I have to move them \u2014 it\u2019s ruining my sleep." Community midwife, yesterday (30-week check): BP 118/72, urine dip negative, symphysis\u2013fundal height 30 cm, fetal heart 140; mild symmetrical ankle oedema; calves soft and non-tender. Booking bloods at 10 weeks: Hb 112 g/L; ferritin not measured.',
        reason: 'Video consultation \u2014 restless legs in pregnancy.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise + reassure',
          d: 'Four core features = RLS; common in pregnancy; not harmful; usually resolves after delivery.'
        },
        {
          t: '2\u20104',
          h: 'Check iron',
          d: 'Ferritin, FBC, folate \u2014 key treatable contributor in pregnancy; replace iron if ferritin below 75 \u00b5g/L.'
        },
        {
          t: '4\u20106',
          h: 'Other contributors',
          d: 'Thyroid/renal; drugs (sedating antihistamines, antiemetics, some antidepressants); caffeine; mood.'
        },
        {
          t: '6\u20109',
          h: 'Conservative care',
          d: 'Sleep hygiene, exercise/stretching/walking, massage/warmth, reduce caffeine/evening triggers, treat iron.'
        },
        {
          t: '9\u201012',
          h: 'Caution + safety-net',
          d: 'Avoid dopamine agonists and alpha-2-delta ligands in pregnancy; obstetric advice if severe; DVT safety-net; review.'
        }
      ],
      wordPics: {
        fail: 'Misses/omits checking iron (ferritin); prescribes a standard dopaminergic RLS drug unsafely in pregnancy; dismisses the sleep impact.',
        pass: 'Recognises RLS, checks/treats iron, and manages conservatively with reassurance.',
        exc: 'Recognises RLS, checks and treats iron deficiency (ferritin), screens contributors/drugs, manages conservatively and pregnancy-safely, reassures about post-delivery resolution, and seeks specialist advice if severe.'
      },
      avoid: [
        {
          dont: '(Missing iron) treating without checking ferritin.',
          instead: '"Low iron is a key, treatable cause in pregnancy \u2014 I\u2019ll check your ferritin and top up if low."',
          why: 'Iron deficiency is a major, easily-missed treatable contributor.'
        },
        {
          dont: '(Unsafe drug) "I\u2019ll start you on the usual restless-legs medication."',
          instead: '"We avoid those tablets in pregnancy \u2014 conservative measures and iron come first; I\u2019ll get advice from the obstetric team if it\u2019s severe."',
          why: 'Dopamine agonists and alpha-2-delta ligands are avoided in pregnancy.'
        },
        {
          dont: '(Dismissing) "It\u2019s just a pregnancy thing, put up with it."',
          instead: '"It\u2019s common and usually settles after delivery \u2014 but your sleep matters, so let\u2019s treat the iron and use these measures."',
          why: 'Dismissing the significant sleep impact is unhelpful.'
        }
      ]
    }
  });

})();
