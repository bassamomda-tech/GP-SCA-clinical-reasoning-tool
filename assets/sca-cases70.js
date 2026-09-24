/* ============================================================
   Reasoning GP — Case Library batch 70:
   "GI & paediatrics" (NEW themes, verified absent)
   Anal fissure (painful bright bleeding + tear \u2014 treat constipation,
   GTN/diltiazem); cannabis hyperemesis syndrome (cyclical vomiting +
   hot-bath relief \u2014 the cannabis link); infantile colic (excessive
   crying, well baby \u2014 reassurance + red-flag exclusion); precocious
   puberty (early pubertal signs \u2014 assess and refer). No NG12 cancer
   pathway applies. Load AFTER sca-cases69.js.
   ============================================================ */
(function(){

  /* ===== 252. Anal fissure ===== */
  const c252 = {
    id:'anal-fissure', title:'"It\u2019s like passing glass \u2014 sharp pain when I go, then it throbs for ages, and there\u2019s bright blood on the paper"', type:'video', duration:12,
    meta:{ age:35, sex:'F', setting:'Face-to-face \u2014 painful rectal bleeding on defecation.', system:'Lower GI \u2014 anal fissure: recognition, constipation management & healing agents' },
    brief:'Mrs Hana Reyes, 35 (recent constipation, postnatal), has SEVERE SHARP PAIN on defecation \u2014 "like passing glass" \u2014 with a lingering throb/spasm afterwards and BRIGHT RED blood on the paper/surface of the stool, from a posterior midline ANAL FISSURE. Recognise ANAL FISSURE (the classic painful defecation + bright bleeding + a tear, often posterior midline, precipitated by hard stool/constipation, or postpartum), distinguish it from haemorrhoids (usually painless bleeding), and \u2014 importantly \u2014 note that ATYPICAL fissures (lateral, multiple, non-healing) or associated features warrant thinking about IBD/Crohn\u2019s, infection, or malignancy; MANAGE \u2014 the cornerstone is treating CONSTIPATION/optimising stool (fibre, fluids, laxatives/stool softeners), with analgesia, topical anaesthetic/sitz baths, and for persistent fissures a topical GTN or DILTIAZEM (calcium-channel blocker) to relax the sphincter and promote healing; refer to colorectal for chronic/non-healing fissures (botulinum toxin/lateral sphincterotomy) or if red flags/atypical. Reassure most heal with stool softening. No NG12 unless atypical features suggest other pathology.',
    script:{
      opening:'"This is horrible, doctor \u2014 when I open my bowels it\u2019s an agonising sharp pain, like passing glass or razor blades, and then it throbs for ages afterwards. There\u2019s bright red blood on the paper. I\u2019ve been constipated since the baby. I\u2019m almost scared to go now."',
      facts:[
        { topic:'Recognise anal fissure', text:'ANAL FISSURE: SEVERE SHARP PAIN on defecation (often described as passing glass/razor blades) with a lingering throb/sphincter spasm afterwards, and BRIGHT RED blood on the paper or surface of the stool; usually a tear in the POSTERIOR MIDLINE, precipitated by hard stool/CONSTIPATION, or POSTPARTUM. The painful defecation + bright bleeding + fear of going is classic. Examine gently (often too painful for full PR \u2014 inspection may show the fissure/sentinel tag).' },
        { topic:'Distinguish from haemorrhoids', text:'Distinguish from HAEMORRHOIDS (usually PAINLESS bright bleeding, prolapse/itch \u2014 less of the severe defecation pain). The severe pain pattern points to a fissure.' },
        { topic:'Atypical fissures \u2014 think other pathology', text:'IMPORTANT \u2014 ATYPICAL fissures (LATERAL position, multiple, non-healing, or with other features) should prompt consideration of underlying disease: INFLAMMATORY BOWEL DISEASE/Crohn\u2019s (perianal disease), infection (e.g. STIs, TB), and (rarely) malignancy \u2014 so screen for GI/systemic symptoms and consider referral/further assessment for atypical or non-healing fissures.' },
        { topic:'Manage constipation \u2014 the cornerstone', text:'CORNERSTONE \u2014 treat CONSTIPATION/optimise stool: increase FIBRE and FLUIDS, add LAXATIVES/stool softeners to keep stool soft and avoid straining (breaking the pain\u2013constipation\u2013spasm cycle), plus analgesia, a topical local anaesthetic, and SITZ baths for symptom relief. Most acute fissures heal with stool softening.' },
        { topic:'Healing agents & referral', text:'For persistent (chronic) fissures, prescribe a topical agent to relax the internal sphincter and improve blood flow/healing \u2014 GTN (glyceryl trinitrate) ointment or topical DILTIAZEM (calcium-channel blocker; counsel re headache with GTN). Refer to COLORECTAL surgery for chronic/non-healing fissures (botulinum toxin injection, lateral sphincterotomy) or if red flags/atypical features.' },
        { topic:'Hidden agenda', text:'She is in significant pain and frightened to defecate, perpetuating constipation. Recognise the fissure, treat the constipation (the key), give symptom relief and a healing agent if persistent, reassure most heal, and keep atypical/non-healing features in mind for referral.' },
      ],
      ice:{ ideas:'Painful bleeding from going to the toilet; worried about the blood; scared to defecate.', concerns:'The severe pain; the bright blood; fear of going making constipation worse.', expectations:'Relief and an explanation. What she needs: recognition of anal fissure, constipation management (the cornerstone), symptom relief + healing agent if persistent, reassurance, and atypical/red-flag awareness.' },
      cues:['Severe sharp "passing glass" pain on defecation + bright red blood + posterior tear, with constipation/postpartum \u2014 anal fissure.','Cornerstone is treating CONSTIPATION (fibre/fluids/laxatives) to break the pain-spasm cycle; topical GTN/diltiazem for persistent fissures.','Atypical (lateral/multiple/non-healing) fissures \u2192 think IBD/Crohn\u2019s/infection \u2014 screen and refer; colorectal for chronic fissures.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises ANAL FISSURE \u2014 severe sharp pain on defecation with lingering spasm, bright red bleeding, and a posterior-midline tear, precipitated by constipation/postpartum \u2014 examining gently' },
      { dom:'tasks', text:'Distinguishes it from haemorrhoids (usually painless bleeding) using the severe-pain pattern' },
      { dom:'tasks', text:'Recognises that ATYPICAL fissures (lateral, multiple, non-healing) warrant thinking about IBD/Crohn\u2019s, infection or malignancy \u2014 screening GI/systemic symptoms and considering referral' },
      { dom:'tasks', text:'Makes treating CONSTIPATION/optimising stool the cornerstone (fibre, fluids, laxatives/softeners) to break the pain\u2013spasm cycle, with analgesia, topical anaesthetic and sitz baths' },
      { dom:'tasks', text:'Prescribes a topical healing agent (GTN or diltiazem) for persistent fissures and refers to colorectal for chronic/non-healing fissures or red flags/atypical features' },
      { dom:'rto',   text:'Reassures that most fissures heal with stool softening, addresses the fear of defecation, and checks understanding' },
      { dom:'rto',   text:'Explains the diagnosis and management sensitively and counsels GTN headache if used' },
      { dom:'gs',    text:'Safety-nets and follows up: review if not healing, escalate (GTN/diltiazem \u2192 colorectal), and reconsider/refer for atypical/non-healing fissures or red flags \u2014 constipation management as the cornerstone' },
    ],
    worked:[
      { lbl:'Name it + reassure', txt:'"That \u2018passing glass\u2019 pain with bright blood is a classic anal fissure \u2014 a small tear, usually from constipation and straining, very common after having a baby. The bright blood on the paper fits, and the good news is most heal well."' },
      { lbl:'The key \u2014 soften the stool', txt:'"The single most important treatment is keeping your stool soft so it stops re-tearing and you\u2019re not straining \u2014 plenty of fluids and fibre, and a stool softener/laxative. That breaks the cycle of pain making you avoid going."' },
      { lbl:'Symptom relief', txt:'"For the pain, a local anaesthetic gel and warm sitz baths help relax the area and ease the spasm. Try not to dread going \u2014 softer stools make it much more bearable."' },
      { lbl:'Healing agent', txt:'"If it doesn\u2019t heal over a few weeks, there\u2019s an ointment \u2014 GTN or diltiazem \u2014 that relaxes the muscle and boosts blood flow to help it heal. GTN can cause a headache, so I\u2019d mention that."' },
      { lbl:'When to refer', txt:'"If it stays stubborn, I\u2019d refer to the bowel surgeons, who have other options. And if a fissure is in an unusual position, there are several, or it won\u2019t heal, I\u2019d look into other causes."' },
      { lbl:'Safety-net', txt:'"Come back if it\u2019s not settling with stool softening, the bleeding changes (darker, mixed in the stool, or a lot), or you get other bowel symptoms or weight loss \u2014 then I\u2019d want to investigate further."' },
    ],
    learning:'ANAL FISSURE presents with SEVERE SHARP PAIN on defecation (classically "passing glass/razor blades") with a lingering throb/sphincter spasm afterwards and BRIGHT RED blood on the paper or stool surface, usually from a tear in the POSTERIOR MIDLINE precipitated by hard stool/CONSTIPATION or occurring POSTPARTUM \u2014 with the painful defecation and fear of going being characteristic; examine gently (full PR is often too painful, but inspection may reveal the fissure/sentinel tag). Distinguish it from HAEMORRHOIDS, which usually cause painless bright bleeding. Importantly, ATYPICAL fissures (lateral position, multiple, non-healing, or with other features) should prompt consideration of underlying disease \u2014 inflammatory bowel disease/Crohn\u2019s (perianal disease), infection (STIs, TB) and rarely malignancy \u2014 so screen GI/systemic symptoms and consider referral/further assessment for atypical or non-healing fissures. The cornerstone of management is treating CONSTIPATION/optimising stool: increase fibre and fluids and add laxatives/stool softeners to keep stool soft and avoid straining (breaking the pain\u2013constipation\u2013spasm cycle), with analgesia, topical local anaesthetic and sitz baths for relief \u2014 most acute fissures heal with stool softening. For persistent (chronic) fissures, prescribe a topical agent to relax the internal sphincter and improve healing \u2014 GTN ointment (counsel re headache) or topical diltiazem \u2014 and refer to colorectal surgery for chronic/non-healing fissures (botulinum toxin, lateral sphincterotomy) or red flags/atypical features. Reassure that most heal, address the fear of defecation, and safety-net. No NICE NG12 cancer pathway applies unless atypical features suggest other pathology.',
    knowledge:{
      guideline:'Anal fissure \u00b7 constipation management cornerstone \u00b7 topical GTN/diltiazem \u00b7 colorectal referral \u00b7 atypical-fissure red flags',
      points:[
        { h:'Recognise', t:'Severe sharp pain on defecation + lingering spasm + bright red blood + posterior-midline tear; precipitated by constipation/postpartum. Examine gently.' },
        { h:'Vs haemorrhoids', t:'Haemorrhoids usually cause painless bright bleeding; the severe defecation pain points to a fissure.' },
        { h:'Atypical = think other pathology', t:'Lateral/multiple/non-healing fissures \u2192 consider IBD/Crohn\u2019s, infection (STIs/TB), rarely malignancy; screen symptoms and refer.' },
        { h:'Constipation cornerstone', t:'Fibre, fluids, laxatives/stool softeners to keep stool soft and avoid straining (breaks the pain-spasm cycle); analgesia, topical anaesthetic, sitz baths.' },
        { h:'Healing agents', t:'Persistent fissures: topical GTN (counsel headache) or diltiazem to relax the sphincter and promote healing.' },
        { h:'Refer', t:'Colorectal for chronic/non-healing fissures (botulinum toxin, lateral sphincterotomy) or red flags/atypical features.' },
        { h:'Never do', t:'Never neglect constipation management; never mislabel as haemorrhoids; never ignore atypical/non-healing fissures or changing bleeding.' },
        { h:'Safety-net & follow-up', t:'Review if not healing; escalate (GTN/diltiazem \u2192 colorectal); investigate for changing bleeding, other bowel symptoms or weight loss.' }
      ]
    }
  };

  /* ===== 253. Cannabis hyperemesis syndrome ===== */
  const c253 = {
    id:'cannabis-hyperemesis', title:'"I keep getting these awful vomiting attacks \u2014 the only thing that helps is standing in a really hot shower for hours"', type:'video', duration:12,
    meta:{ age:24, sex:'M', setting:'Face-to-face \u2014 recurrent cyclical vomiting.', system:'GI / Toxicology \u2014 cannabis hyperemesis syndrome: the diagnostic clues' },
    brief:'Mr Reece Calland, 24, has recurrent episodes of severe NAUSEA and VOMITING with abdominal pain, lasting a day or two, recurring over months, with multiple normal prior work-ups/A&E visits; the striking clue is that the symptoms are RELIEVED by HOT SHOWERS/BATHS (compulsive hot bathing), and he is a regular/heavy CANNABIS user. Recognise CANNABIS HYPEREMESIS SYNDROME (CHS) \u2014 cyclical vomiting in a chronic cannabis user, classically relieved by hot bathing \u2014 which is frequently MISSED because the cannabis link is not asked about; take a non-judgemental SUBSTANCE history, exclude other causes of cyclical/recurrent vomiting (and red flags \u2014 GI obstruction, raised ICP, metabolic, pregnancy in women, etc.), and \u2014 critically \u2014 explain that the ONLY definitive treatment is CANNABIS CESSATION (symptoms resolve with abstinence and recur with use), with supportive care in acute episodes (fluids/antiemetics \u2014 standard antiemetics often poorly effective; topical capsaicin and certain agents used in acute settings), and harm-reduction/cessation support. The skill is recognising the pattern (cyclical vomiting + hot-bath relief + cannabis), asking about cannabis non-judgementally, and the cessation message. No NG12 cancer link.',
    script:{
      opening:'"I keep getting these horrendous attacks of being sick \u2014 vomiting for a day or two with bad stomach pain \u2014 every few weeks. I\u2019ve been to A&E loads, had scans and bloods, all normal. The weird thing is the ONLY thing that helps is standing in a really hot shower for ages \u2014 I almost live in there during an attack. What\u2019s wrong with me?"',
      facts:[
        { topic:'Recognise the CHS pattern', text:'CANNABIS HYPEREMESIS SYNDROME (CHS): recurrent/CYCLICAL episodes of severe NAUSEA, VOMITING and abdominal pain in a chronic/heavy CANNABIS user, classically RELIEVED by HOT SHOWERS/BATHS (compulsive hot bathing), often with multiple normal prior investigations/A&E attendances. The hot-bathing relief is a highly characteristic clue.' },
        { topic:'Ask about cannabis \u2014 non-judgementally', text:'KEY \u2014 CHS is frequently MISSED because clinicians do not ask about cannabis. Take a non-judgemental SUBSTANCE history (frequency/duration/amount of cannabis), normalising the question. Without asking, the diagnosis is repeatedly missed despite extensive work-ups.' },
        { topic:'Exclude other causes & red flags', text:'Exclude other causes of cyclical/recurrent vomiting and red flags: GI causes (obstruction, peptic disease, gallstones, pancreatitis), raised intracranial pressure (headache, neurology), metabolic/endocrine (DKA, Addisonian, hypercalcaemia), cyclical vomiting syndrome, and PREGNANCY in women. Reassuringly normal previous investigations and the hot-bath/cannabis pattern support CHS, but red flags must be screened.' },
        { topic:'The cessation message \u2014 definitive treatment', text:'CRITICAL \u2014 the ONLY definitive treatment is CANNABIS CESSATION: symptoms RESOLVE with abstinence and RECUR with continued use. Explain this clearly and supportively \u2014 it is the central, often-resisted message. Standard antiemetics are frequently poorly effective in CHS; acute supportive care includes IV fluids and certain agents (topical capsaicin to the abdomen, and some specific antiemetics) used in acute/hospital settings.' },
        { topic:'Support cessation', text:'Provide harm-reduction and CESSATION SUPPORT (motivational approach, drug services/referral) for what may be a difficult behaviour change, acknowledging cannabis dependence is real. Frame cessation as the cure rather than moralising.' },
        { topic:'Hidden agenda', text:'He is distressed by unexplained recurrent vomiting and may not have connected it to cannabis (or fears judgement). Recognise CHS from the hot-bath clue, ask about cannabis non-judgementally, exclude red flags, and deliver the cessation message supportively with cessation support \u2014 not another scan.' },
      ],
      ice:{ ideas:'Something serious is being missed (multiple normal tests); hasn\u2019t connected it to cannabis.', concerns:'The recurrent debilitating vomiting; not having an explanation; possibly fear of judgement about cannabis.', expectations:'A diagnosis/cure. What he needs: recognition of CHS (hot-bath/cannabis pattern), non-judgemental cannabis history, red-flag exclusion, the cannabis-cessation message, and cessation support.' },
      cues:['Cyclical vomiting + abdominal pain, multiple normal work-ups, RELIEVED BY HOT SHOWERS/BATHS, in a regular cannabis user \u2014 cannabis hyperemesis syndrome.','Frequently missed because cannabis isn\u2019t asked about \u2014 take a non-judgemental substance history; exclude red flags/pregnancy.','The only definitive treatment is CANNABIS CESSATION (resolves with abstinence, recurs with use); standard antiemetics often ineffective; offer cessation support.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises CANNABIS HYPEREMESIS SYNDROME \u2014 cyclical vomiting/abdominal pain in a chronic cannabis user, classically relieved by HOT bathing, with multiple normal prior investigations' },
      { dom:'tasks', text:'Takes a NON-JUDGEMENTAL substance/cannabis history (frequency/duration/amount), recognising CHS is frequently missed because cannabis is not asked about' },
      { dom:'tasks', text:'Excludes other causes of cyclical vomiting and red flags (GI obstruction/pancreatitis, raised ICP, metabolic/endocrine \u2014 DKA/Addisonian, pregnancy in women)' },
      { dom:'tasks', text:'Delivers the CESSATION message \u2014 the only definitive treatment is cannabis cessation (resolves with abstinence, recurs with use) \u2014 clearly and supportively' },
      { dom:'tasks', text:'Knows standard antiemetics are often poorly effective and that acute supportive care (IV fluids, topical capsaicin, certain agents) is used acutely, and offers cessation/harm-reduction support (drug services)' },
      { dom:'rto',   text:'Asks about cannabis without judgement, addresses the patient\u2019s distress and the "nothing\u2019s been found" frustration, and frames cessation as the cure rather than moralising' },
      { dom:'rto',   text:'Explains the diagnosis and the cannabis link clearly, checking understanding and engaging the patient in cessation' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags warranting reassessment, cessation support/referral, acute-episode advice, and review \u2014 recognition of CHS + the cessation message, not another scan' },
    ],
    worked:[
      { lbl:'Recognise the clue', txt:'"You\u2019ve given me a really important clue \u2014 the only thing that helps is a hot shower. That, with repeated vomiting attacks and normal scans, points strongly to a condition called cannabis hyperemesis syndrome. Can I ask \u2014 do you use cannabis, and how often?"' },
      { lbl:'Non-judgemental history', txt:'"No judgement at all \u2014 I ask because it\u2019s directly relevant. Regular cannabis use can, paradoxically, cause exactly these cyclical vomiting attacks, and the hot-bath relief is almost a signature of it. It\u2019s often missed because no one asks."' },
      { lbl:'Exclude the serious', txt:'"Your previous tests being normal is reassuring, and I\u2019ll just check there\u2019s nothing else \u2014 any severe headaches, weight loss, or other symptoms? \u2026 No. Good."' },
      { lbl:'The honest cure', txt:'"Here\u2019s the key, and it\u2019s the hard part: the only thing that truly stops this is coming off cannabis. The symptoms settle with abstinence and come back if you use again. The usual anti-sickness tablets often don\u2019t work well for it."' },
      { lbl:'Support', txt:'"I know that\u2019s a big ask, and I\u2019m not here to lecture you \u2014 I\u2019m here to help. I can refer you to a service that supports cutting down or stopping, and we\u2019ll manage the attacks in the meantime."' },
      { lbl:'Safety-net', txt:'"During an attack, keep hydrated and seek help if you can\u2019t keep fluids down or get very unwell. And if anything new develops \u2014 severe headache, weight loss, blood \u2014 come back. But stopping cannabis is genuinely the cure here."' },
    ],
    learning:'CANNABIS HYPEREMESIS SYNDROME (CHS) is recurrent/CYCLICAL severe nausea, vomiting and abdominal pain in a chronic/heavy CANNABIS user, classically RELIEVED by HOT SHOWERS/BATHS (compulsive hot bathing), often after multiple normal prior investigations and A&E attendances \u2014 the hot-bathing relief being a highly characteristic clue. CHS is frequently MISSED because clinicians do not ask about cannabis, so take a non-judgemental substance history (frequency, duration, amount), normalising the question \u2014 without it the diagnosis is repeatedly missed despite extensive work-ups. Exclude other causes of cyclical/recurrent vomiting and red flags: GI causes (obstruction, peptic disease, gallstones, pancreatitis), raised intracranial pressure, metabolic/endocrine causes (DKA, Addisonian crisis, hypercalcaemia), cyclical vomiting syndrome, and pregnancy in women \u2014 reassuringly normal previous investigations plus the hot-bath/cannabis pattern support CHS, but red flags must be screened. The critical message is that the ONLY definitive treatment is CANNABIS CESSATION: symptoms resolve with abstinence and recur with continued use, so explain this clearly and supportively as the central, often-resisted point; standard antiemetics are frequently poorly effective, and acute supportive care includes IV fluids and certain agents (topical capsaicin to the abdomen and some specific antiemetics) used in acute/hospital settings. Provide harm-reduction and cessation support (motivational approach, drug services/referral) for a difficult behaviour change, framing cessation as the cure rather than moralising. The skill is recognising the pattern (cyclical vomiting + hot-bath relief + cannabis), asking about cannabis non-judgementally, excluding red flags, and delivering the cessation message with support. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Cannabis hyperemesis syndrome \u00b7 cyclical vomiting + hot-bathing relief + cannabis \u00b7 cessation as definitive treatment \u00b7 non-judgemental substance history',
      points:[
        { h:'Recognise CHS', t:'Cyclical severe vomiting/abdominal pain in a chronic cannabis user, relieved by hot showers/baths, with multiple normal prior investigations. Hot-bathing relief is the signature clue.' },
        { h:'Ask about cannabis', t:'CHS is frequently missed because cannabis is not asked about. Take a non-judgemental substance history (frequency/duration/amount).' },
        { h:'Exclude red flags', t:'GI obstruction/pancreatitis/peptic/gallstones, raised ICP, metabolic/endocrine (DKA, Addisonian, hypercalcaemia), cyclical vomiting syndrome, pregnancy in women.' },
        { h:'Cessation is the cure', t:'The only definitive treatment is cannabis cessation \u2014 resolves with abstinence, recurs with use. Deliver clearly and supportively.' },
        { h:'Acute care', t:'Standard antiemetics often poorly effective; acute supportive care (IV fluids, topical capsaicin, certain agents) used acutely/in hospital.' },
        { h:'Support cessation', t:'Harm-reduction/cessation support (motivational approach, drug services/referral); frame cessation as the cure, not moralising.' },
        { h:'Never do', t:'Never repeatedly re-investigate without asking about cannabis; never miss red flags/pregnancy; never moralise rather than support cessation.' },
        { h:'Safety-net & follow-up', t:'Red flags warranting reassessment; cessation support/referral; acute-episode advice (hydration, seek help if not keeping fluids down); review.' }
      ]
    }
  };

  /* ===== 254. Infantile colic ===== */
  const c254 = {
    id:'infantile-colic', title:'"My baby screams inconsolably for hours every evening, pulling his legs up \u2014 I\u2019m exhausted and worried something\u2019s wrong"', type:'video', duration:12,
    meta:{ age:0, sex:'M', setting:'Face-to-face \u2014 excessive infant crying, parent present.', system:'Paediatrics \u2014 infantile colic: reassurance, red-flag exclusion & supporting the parent' },
    brief:'A mother brings 6-week-old Noah with episodes of inconsolable CRYING, often in the EVENINGS, drawing his legs up, several hours a day on most days for the past few weeks; he is otherwise THRIVING (feeding, gaining weight, normal nappies, no fever), and she is exhausted and anxious. Recognise INFANTILE COLIC \u2014 excessive, paroxysmal crying in an otherwise WELL, THRIVING infant (often the "rule of 3s": >3 hours/day, >3 days/week, for >3 weeks), typically resolving by ~3\u20134 months \u2014 a clinical diagnosis of EXCLUSION; the key task is to EXCLUDE red flags/other causes (poor feeding/weight, fever, vomiting/bile, blood in stool, lethargy, a tense fontanelle, hernia/testicular torsion, hair-tourniquet, cow\u2019s-milk protein allergy, GORD, infection) by history/examination, then REASSURE (benign, self-limiting), give practical SOOTHING/feeding advice, and \u2014 critically \u2014 SUPPORT the exhausted, anxious PARENT (acknowledge the toll, screen parental coping/mood, safety-net, and advise NEVER to shake the baby). Avoid unnecessary medications/formula changes unless a specific cause (e.g. CMPA) is suspected. The skill is red-flag exclusion + reassurance + parental support. No NG12 cancer link.',
    script:{
      opening:'"I\u2019m at my wits\u2019 end, doctor. Noah screams inconsolably for hours, mostly in the evenings, going red and pulling his legs up, and nothing settles him. He\u2019s six weeks old. He feeds and is gaining weight, but I\u2019m exhausted and terrified there\u2019s something seriously wrong with him."',
      facts:[
        { topic:'Recognise infantile colic', text:'INFANTILE COLIC is excessive, paroxysmal, often EVENING crying in an otherwise WELL, THRIVING infant \u2014 frequently described by the "rule of 3s" (>3 hours/day, >3 days/week, for >3 weeks) \u2014 with drawing up of the legs, typically beginning in the early weeks and resolving by ~3\u20134 months. It is a clinical diagnosis of EXCLUSION in a baby who is otherwise healthy.' },
        { topic:'Exclude red flags \u2014 the key task', text:'CRITICAL \u2014 before diagnosing colic, EXCLUDE red flags/other causes by history and EXAMINATION: poor FEEDING or faltering WEIGHT, FEVER/sepsis signs, VOMITING (especially BILE-stained \u2014 obstruction), BLOOD in stool, LETHARGY/floppiness, a bulging/tense FONTANELLE, an incarcerated HERNIA or testicular TORSION, a HAIR-TOURNIQUET (finger/toe/penis), corneal foreign body/scratch, cow\u2019s-milk protein allergy (CMPA \u2014 other atopy/GI/skin features) and GORD. A thriving, well, examined baby with no red flags supports colic.' },
        { topic:'Reassure \u2014 benign and self-limiting', text:'Once red flags are excluded, REASSURE: colic is BENIGN and SELF-LIMITING, usually settling by 3\u20134 months, and is NOT caused by the parent doing anything wrong. This reassurance is central and directly addresses the fear that "something is seriously wrong".' },
        { topic:'Practical soothing/feeding advice', text:'Give practical advice: soothing techniques (holding/rocking, white noise, movement, winding, a calm environment), responsive feeding and winding, and reassurance that crying is common. Evidence for specific treatments (simethicone, lactase drops, probiotics, formula/dietary changes) is limited \u2014 avoid routine medications or formula changes unless a specific cause (e.g. CMPA) is suspected and then trial appropriately.' },
        { topic:'Support the parent \u2014 the real consultation', text:'CORE \u2014 SUPPORT the exhausted, anxious PARENT: acknowledge the enormous toll of inconsolable crying, validate her distress, screen parental COPING and mood (postnatal depression/anxiety), mobilise support (partner/family/health visitor), and \u2014 importantly \u2014 give SAFETY advice that it is okay to place the baby safely down and take a break if overwhelmed, and to NEVER SHAKE the baby. Parental wellbeing and infant safety are key.' },
        { topic:'Hidden agenda', text:'She fears something serious and is exhausted/possibly struggling. Recognise colic, EXCLUDE red flags by examination, reassure strongly, give practical advice, and \u2014 the real task \u2014 support her wellbeing, screen mood, safety-net (red flags + never-shake), and arrange follow-up.' },
      ],
      ice:{ ideas:'Something is seriously wrong with the baby; the crying is abnormal.', concerns:'The inconsolable crying; her own exhaustion and ability to cope; fear of missing something serious.', expectations:'Reassurance/help. What she needs: red-flag exclusion by examination, reassurance (benign, self-limiting), practical soothing advice, and \u2014 crucially \u2014 support for her wellbeing/coping and safety advice.' },
      cues:['Inconsolable evening crying + legs drawn up in a THRIVING, well 6-week-old (rule of 3s), resolving by ~3\u20134 months \u2014 infantile colic (diagnosis of exclusion).','EXCLUDE red flags: poor feeding/weight, fever, bile vomiting, blood in stool, lethargy, tense fontanelle, hernia/torsion, hair-tourniquet, CMPA/GORD.','Reassure (benign, self-limiting) + practical soothing; SUPPORT the exhausted parent, screen mood, safety-net + never shake the baby.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises INFANTILE COLIC \u2014 excessive paroxysmal (often evening) crying in an otherwise well, thriving infant (rule of 3s), resolving by ~3\u20134 months \u2014 as a diagnosis of exclusion' },
      { dom:'tasks', text:'EXCLUDES red flags/other causes by history and EXAMINATION \u2014 poor feeding/faltering weight, fever, bile vomiting, blood in stool, lethargy, tense fontanelle, hernia/torsion, hair-tourniquet, CMPA, GORD' },
      { dom:'tasks', text:'REASSURES that colic is benign and self-limiting and not the parent\u2019s fault, once red flags are excluded' },
      { dom:'tasks', text:'Gives practical SOOTHING/feeding advice and avoids routine medications/formula changes unless a specific cause (e.g. CMPA) is suspected (limited evidence for simethicone/probiotics etc.)' },
      { dom:'tasks', text:'SUPPORTS the exhausted PARENT \u2014 validates the toll, screens parental coping/mood (postnatal depression), mobilises support, and gives safety advice (it\u2019s okay to put the baby down safely and take a break; NEVER shake the baby)' },
      { dom:'rto',   text:'Acknowledges the enormous strain and the fear that something is wrong, validates her distress, and reassures without dismissing' },
      { dom:'rto',   text:'Explains the diagnosis and plan clearly, checks understanding, and engages support around her' },
      { dom:'gs',    text:'Safety-nets and follows up: red flags warranting urgent review (fever, poor feeding/weight, bile vomiting, blood in stool, lethargy), parental-wellbeing follow-up/health visitor, never-shake advice, and review \u2014 red-flag exclusion + reassurance + parental support' },
    ],
    worked:[
      { lbl:'Examine + take it seriously', txt:'"You\u2019re absolutely right to bring him \u2014 let me examine Noah thoroughly first to make sure there\u2019s nothing being missed. \u2026 He\u2019s feeding, gaining weight, his tummy\u2019s soft, no hernia, fontanelle\u2019s fine, and I\u2019ve checked his fingers, toes and nappy area. He\u2019s a well, thriving baby."' },
      { lbl:'Reassure + name it', txt:'"What you\u2019re describing \u2014 inconsolable evening crying, legs drawn up, in a healthy baby this age \u2014 is colic. It\u2019s extremely common, it\u2019s not dangerous, and crucially it\u2019s nothing you\u2019re doing wrong. It typically settles by three to four months."' },
      { lbl:'Practical advice', txt:'"Some things can help in the moment \u2014 holding and gentle rocking, white noise, movement, winding, a calm dim room. I\u2019d be cautious about over-the-counter remedies or changing formula, as the evidence is limited unless there\u2019s a specific cause like a milk allergy, which I don\u2019t think fits here."' },
      { lbl:'Support the parent', txt:'"Now \u2014 how are YOU doing? This is genuinely exhausting and can wear anyone down. Are you getting any rest or help? How\u2019s your mood?" (Listens, screens for PND.)' },
      { lbl:'Safety advice', txt:'"One really important thing: if he\u2019s crying and you feel overwhelmed, it\u2019s completely okay to put him down somewhere safe like his cot, step away for a few minutes to breathe, and come back. And never, ever shake him \u2014 even gentle shaking can harm a baby."' },
      { lbl:'Safety-net + follow-up', txt:'"Come back urgently if he develops a fever, feeds poorly, vomits green, has blood in his nappy, or becomes floppy or unusually sleepy. And let\u2019s get the health visitor involved to support you \u2014 I\u2019d like to check on you both again."' },
    ],
    learning:'INFANTILE COLIC is excessive, paroxysmal, often EVENING crying in an otherwise WELL, THRIVING infant \u2014 frequently described by the "rule of 3s" (>3 hours/day, >3 days/week, for >3 weeks) \u2014 with drawing up of the legs, typically beginning in the early weeks and resolving by ~3\u20134 months; it is a clinical diagnosis of EXCLUSION in an otherwise healthy baby. The key task is to EXCLUDE red flags/other causes by history and examination: poor feeding or faltering weight, fever/sepsis, vomiting (especially bile-stained \u2014 obstruction), blood in stool, lethargy/floppiness, a bulging/tense fontanelle, an incarcerated hernia or testicular torsion, a hair-tourniquet (finger/toe/penis), corneal foreign body, cow\u2019s-milk protein allergy and GORD \u2014 a thriving, well, examined baby with no red flags supports colic. Once red flags are excluded, REASSURE that colic is benign and self-limiting, usually settling by 3\u20134 months and not the parent\u2019s fault, which directly addresses the fear that "something is seriously wrong". Give practical soothing/feeding advice (holding/rocking, white noise, movement, winding, a calm environment), while noting that evidence for specific treatments (simethicone, lactase drops, probiotics, formula/dietary changes) is limited \u2014 avoid routine medications or formula changes unless a specific cause (e.g. CMPA) is suspected and then trial appropriately. Crucially, SUPPORT the exhausted, anxious PARENT: acknowledge the enormous toll, validate distress, screen parental coping and mood (postnatal depression/anxiety), mobilise support (partner/family/health visitor), and give safety advice that it is okay to place the baby safely down and take a break if overwhelmed and to NEVER shake the baby. The skill is red-flag exclusion + reassurance + parental support, with safety-netting and follow-up. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Infantile colic \u00b7 diagnosis of exclusion (rule of 3s) \u00b7 red-flag exclusion \u00b7 reassurance + parental support \u00b7 never-shake safety advice',
      points:[
        { h:'Recognise colic', t:'Excessive paroxysmal (often evening) crying, legs drawn up, in a well, thriving infant (rule of 3s: >3h/day, >3 days/week, >3 weeks), resolving by ~3\u20134 months. Diagnosis of exclusion.' },
        { h:'Exclude red flags', t:'Poor feeding/faltering weight, fever, bile vomiting (obstruction), blood in stool, lethargy/floppiness, tense fontanelle, hernia/torsion, hair-tourniquet, corneal FB, CMPA, GORD \u2014 history + examination.' },
        { h:'Reassure', t:'Benign, self-limiting, settles by 3\u20134 months, not the parent\u2019s fault. Central to addressing "something is seriously wrong".' },
        { h:'Practical advice', t:'Soothing (holding/rocking, white noise, movement, winding, calm environment), responsive feeding. Limited evidence for simethicone/probiotics/formula changes \u2014 avoid routine use unless CMPA suspected.' },
        { h:'Support the parent', t:'Validate the toll; screen parental coping/mood (postnatal depression); mobilise support (partner/family/health visitor).' },
        { h:'Safety advice', t:'It\u2019s okay to put the baby down safely and take a break if overwhelmed; NEVER shake the baby. Infant safety and parental wellbeing are key.' },
        { h:'Never do', t:'Never diagnose colic without excluding red flags/examining; never dismiss parental distress; never routinely change formula/medicate without indication; never omit never-shake advice.' },
        { h:'Safety-net & follow-up', t:'Urgent review for fever, poor feeding/weight, bile vomiting, blood in stool, lethargy; parental-wellbeing follow-up/health visitor; review both baby and parent.' }
      ]
    }
  };

  /* ===== 255. Precocious puberty ===== */
  const c255 = {
    id:'precocious-puberty', title:'"My 6-year-old has started developing breasts and some pubic hair \u2014 isn\u2019t she far too young?"', type:'video', duration:12,
    meta:{ age:6, sex:'F', setting:'Face-to-face \u2014 early pubertal development, parent present.', system:'Paediatric endocrinology \u2014 precocious puberty: recognition, assessment & referral' },
    brief:'A mother brings 6-year-old Maya with early BREAST development and some pubic hair over recent months, plus a growth spurt. Recognise PRECOCIOUS PUBERTY \u2014 the onset of secondary sexual characteristics before age ~8 in GIRLS (and ~9 in BOYS) \u2014 and that it needs ASSESSMENT and paediatric ENDOCRINOLOGY referral; understand the broad framework: CENTRAL (gonadotrophin-dependent, "true") precocious puberty (early activation of the HPG axis \u2014 commoner in girls and often idiopathic, but must exclude CNS pathology e.g. tumour, especially in boys/atypical) versus PERIPHERAL (gonadotrophin-independent \u2014 ovarian/adrenal/testicular sources, congenital adrenal hyperplasia, McCune-Albright, exogenous hormones), and benign normal variants (premature thelarche \u2014 isolated breast development; premature adrenarche \u2014 isolated pubic/axillary hair/odour) that may not be true precocious puberty; take a history and examine (growth/height velocity, Tanner staging, signs of a cause), recognise the IMPORTANCE of evaluation (psychosocial impact, the impact on final height from early bone maturation, and not missing a serious underlying cause such as a CNS or hormone-secreting tumour), and REFER to paediatric endocrinology for assessment (bone age, hormone testing, imaging) and treatment where indicated (e.g. GnRH analogues for central PP). The skill is recognising premature pubertal signs, distinguishing concerning from benign-variant features, supporting the parent, and referring appropriately. No NG12 unless an underlying tumour is found.',
    script:{
      opening:'"Doctor, I\u2019m worried about Maya \u2014 she\u2019s only six but over the last few months she\u2019s started developing little breasts and I\u2019ve noticed some pubic hair, and she seems to have shot up in height. Isn\u2019t she far too young for all this? Is something wrong?"',
      facts:[
        { topic:'Recognise precocious puberty', text:'PRECOCIOUS PUBERTY is the onset of secondary sexual characteristics before about age 8 in GIRLS and 9 in BOYS. Maya\u2019s breast development, pubic hair and growth spurt at 6 meet this threshold and warrant ASSESSMENT and paediatric ENDOCRINOLOGY referral. Take a history (timing/progression, growth, family history, any CNS symptoms \u2014 headache/visual changes, possible exogenous hormone exposure) and examine (height/growth velocity, Tanner staging).' },
        { topic:'Central vs peripheral', text:'Understand the framework: CENTRAL (gonadotrophin-dependent, "true") precocious puberty \u2014 early activation of the hypothalamic-pituitary-gonadal axis, commoner in GIRLS and often IDIOPATHIC, but CNS pathology (e.g. tumour, hydrocephalus) must be excluded, especially in BOYS or with atypical/neurological features; versus PERIPHERAL (gonadotrophin-independent) \u2014 from ovarian/adrenal/testicular sources, congenital adrenal hyperplasia, McCune-Albright syndrome, or exogenous hormones.' },
        { topic:'Benign normal variants', text:'Recognise benign NORMAL VARIANTS that are not true precocious puberty: premature THELARCHE (isolated breast development, no other pubertal signs/growth acceleration) and premature ADRENARCHE (isolated pubic/axillary hair, body odour, from early adrenal androgens). These are usually benign but still warrant assessment to distinguish them from progressive precocious puberty.' },
        { topic:'Why it matters', text:'Evaluation matters because of: the PSYCHOSOCIAL impact on a young child (and family), the effect on FINAL ADULT HEIGHT (early bone maturation/premature epiphyseal fusion can reduce final height), and the need NOT to miss a serious underlying CAUSE (CNS or hormone-secreting tumour, CAH). This is why referral and proper assessment are important rather than watchful reassurance alone.' },
        { topic:'Refer to paediatric endocrinology', text:'REFER to PAEDIATRIC ENDOCRINOLOGY for assessment \u2014 typically BONE AGE (X-ray), hormone testing (LH/FSH, oestradiol/testosterone, GnRH stimulation), and imaging (brain MRI for central PP, pelvic/adrenal imaging as indicated) \u2014 and treatment where indicated (e.g. GnRH analogues to halt central precocious puberty and preserve height/allow age-appropriate development). Primary care\u2019s role is recognition, initial assessment and referral.' },
        { topic:'Hidden agenda', text:'The mother is worried her child is developing far too young and fears something is wrong. Recognise precocious puberty, take a history/examine, distinguish concerning from benign-variant features, explain why assessment matters (height, psychosocial, excluding a cause), refer to paediatric endocrinology, and support the parent and child.' },
      ],
      ice:{ ideas:'The child is developing far too young; worried something is wrong.', concerns:'The early development; what is causing it; effects on her daughter (and whether it\u2019s serious).', expectations:'An explanation and help. What is needed: recognition of precocious puberty, history/examination, distinguishing benign variants, explanation of why assessment matters, and paediatric endocrinology referral.' },
      cues:['Secondary sexual characteristics before ~8 (girls)/~9 (boys) \u2014 here breast development + pubic hair + growth spurt at 6 \u2014 precocious puberty; assess + refer.','Central (HPG activation, often idiopathic in girls but exclude CNS cause) vs peripheral (ovarian/adrenal/CAH/McCune-Albright/exogenous); benign variants (premature thelarche/adrenarche).','Matters for final height, psychosocial impact, and not missing a tumour/CAH \u2192 refer paediatric endocrinology (bone age, hormones, imaging).']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises PRECOCIOUS PUBERTY \u2014 secondary sexual characteristics before ~8 in girls (~9 in boys) \u2014 and that it warrants assessment and paediatric endocrinology referral' },
      { dom:'tasks', text:'Takes a history and examines (growth/height velocity, Tanner staging, CNS symptoms, possible exogenous hormone exposure, family history)' },
      { dom:'tasks', text:'Understands the CENTRAL (gonadotrophin-dependent, often idiopathic in girls but exclude CNS pathology) vs PERIPHERAL (ovarian/adrenal/CAH/McCune-Albright/exogenous) framework' },
      { dom:'tasks', text:'Recognises benign NORMAL VARIANTS (premature thelarche, premature adrenarche) and that they still warrant assessment to distinguish from progressive precocious puberty' },
      { dom:'tasks', text:'Explains WHY assessment matters (final-height impact from early bone maturation, psychosocial impact, not missing a CNS/hormone-secreting tumour or CAH) and REFERS to paediatric endocrinology (bone age, hormones, imaging; GnRH analogue treatment where indicated)' },
      { dom:'rto',   text:'Addresses the parent\u2019s worry and supports the child, explaining the diagnosis and plan sensitively and age-appropriately' },
      { dom:'rto',   text:'Checks understanding and reassures appropriately while conveying the need for proper assessment' },
      { dom:'gs',    text:'Safety-nets and follows up: paediatric endocrinology referral and what assessment involves, red flags (CNS symptoms), support for parent/child, and review \u2014 recognition + appropriate referral, not watchful reassurance alone' },
    ],
    worked:[
      { lbl:'Validate + recognise', txt:'"You\u2019re right to bring her \u2014 developing breasts and pubic hair at six is earlier than expected, and it\u2019s called precocious puberty. It needs proper assessment, so I\u2019m glad you came."' },
      { lbl:'Assess', txt:'"Let me take some history and examine Maya \u2014 her growth and height, the stage of development, and check for anything else like headaches or vision changes. Has she had access to any hormone creams or medicines? And how\u2019s her height compared to before?"' },
      { lbl:'Explain the framework', txt:'"There are a few possibilities \u2014 sometimes the body\u2019s puberty switch turns on early (often no serious cause in girls, but we check), and sometimes a hormone source elsewhere is responsible. There are also milder patterns, like isolated breast development, which can be harmless \u2014 but we assess to be sure."' },
      { lbl:'Why it matters', txt:'"It\u2019s worth taking seriously for a few reasons: early puberty can affect her final adult height because the bones mature faster, it can be a lot for a young child emotionally, and rarely there\u2019s an underlying cause we\u2019d want to find and treat."' },
      { lbl:'Refer', txt:'"I\u2019m referring her to the children\u2019s hormone specialists. They\u2019ll do a bone-age X-ray, some blood tests, and scans if needed, and there are treatments \u2014 like a medicine that pauses puberty \u2014 if that\u2019s the right thing."' },
      { lbl:'Support + safety-net', txt:'"I know this is worrying \u2014 most causes are manageable. Come back sooner if she develops headaches, vision problems or anything that concerns you. We\u2019ll support you both through the assessment."' },
    ],
    learning:'PRECOCIOUS PUBERTY is the onset of secondary sexual characteristics before about age 8 in GIRLS and 9 in BOYS, and warrants assessment and paediatric ENDOCRINOLOGY referral. Take a history (timing/progression, growth, family history, CNS symptoms such as headache/visual change, possible exogenous hormone exposure) and examine (height/growth velocity, Tanner staging, signs of a cause). Understand the framework: CENTRAL (gonadotrophin-dependent, "true") precocious puberty results from early activation of the hypothalamic-pituitary-gonadal axis \u2014 commoner in girls and often idiopathic, but CNS pathology (tumour, hydrocephalus) must be excluded, especially in boys or with atypical/neurological features \u2014 versus PERIPHERAL (gonadotrophin-independent) precocious puberty from ovarian/adrenal/testicular sources, congenital adrenal hyperplasia, McCune-Albright syndrome, or exogenous hormones. Recognise benign NORMAL VARIANTS \u2014 premature thelarche (isolated breast development) and premature adrenarche (isolated pubic/axillary hair, body odour) \u2014 which are usually benign but still warrant assessment to distinguish from progressive precocious puberty. Evaluation matters because of the psychosocial impact on a young child and family, the effect on final adult height (early bone maturation/premature epiphyseal fusion can reduce final height), and the need not to miss a serious underlying cause (CNS or hormone-secreting tumour, CAH). Refer to paediatric endocrinology for assessment \u2014 bone age, hormone testing (LH/FSH, oestradiol/testosterone, GnRH stimulation), and imaging (brain MRI for central PP, pelvic/adrenal imaging as indicated) \u2014 and treatment where indicated (e.g. GnRH analogues to halt central precocious puberty and preserve height/allow age-appropriate development); primary care\u2019s role is recognition, initial assessment and referral. Support the worried parent and the child throughout. No NICE NG12 cancer pathway applies unless an underlying tumour is found.',
    knowledge:{
      guideline:'Precocious puberty \u00b7 thresholds (girls <8, boys <9) \u00b7 central vs peripheral \u00b7 benign variants \u00b7 paediatric endocrinology referral (bone age/hormones/MRI)',
      points:[
        { h:'Recognise', t:'Secondary sexual characteristics before ~8 (girls)/~9 (boys). Assess (history, growth/height velocity, Tanner staging, CNS symptoms, exogenous hormones) and refer paediatric endocrinology.' },
        { h:'Central vs peripheral', t:'Central (gonadotrophin-dependent, HPG activation; often idiopathic in girls, exclude CNS pathology esp. boys/atypical) vs peripheral (ovarian/adrenal/testicular, CAH, McCune-Albright, exogenous).' },
        { h:'Benign variants', t:'Premature thelarche (isolated breast development) and premature adrenarche (isolated pubic/axillary hair/odour) \u2014 usually benign but assess to distinguish from progressive PP.' },
        { h:'Why it matters', t:'Final-height impact (early bone maturation/epiphyseal fusion), psychosocial impact, and not missing a CNS/hormone-secreting tumour or CAH.' },
        { h:'Refer & investigate', t:'Paediatric endocrinology: bone age (X-ray), hormones (LH/FSH, oestradiol/testosterone, GnRH stimulation), imaging (brain MRI for central PP; pelvic/adrenal as indicated).' },
        { h:'Treatment', t:'GnRH analogues for central precocious puberty (halt progression, preserve height, allow age-appropriate development); treat peripheral causes specifically.' },
        { h:'Never do', t:'Never dismiss early pubertal signs as nothing; never miss a CNS cause (esp. boys/atypical) or CAH; never overlook the final-height/psychosocial implications.' },
        { h:'Safety-net & follow-up', t:'Paediatric endocrinology referral and assessment; red flags (CNS symptoms); support parent/child; review.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c252, c253, c254, c255);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'anal-fissure': {
      ceg: ['New & undifferentiated presentations', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Hana Reyes', age: '35 years \u00b7 female',
        pmh: ['Severe sharp "passing glass" pain on defecation + lingering spasm; bright red blood on paper', 'Recent constipation; postpartum; posterior-midline fissure', 'Fearful of defecation'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Like passing glass when I go, then it throbs for ages, and there\u2019s bright blood on the paper."',
        reason: 'Face-to-face \u2014 painful rectal bleeding on defecation.'
      },
      timeMap: [
        { t:'0\u20102',  h:'Recognise', d:'Severe sharp defecation pain + bright blood + posterior tear, constipation/postpartum = anal fissure.' },
        { t:'2\u2010-4',  h:'Differential', d:'Vs haemorrhoids (painless); atypical (lateral/multiple/non-healing) \u2192 IBD/infection/malignancy.' },
        { t:'4\u2010-7',  h:'Constipation cornerstone', d:'Fibre/fluids/laxatives/softeners + analgesia + topical anaesthetic + sitz baths.' },
        { t:'7\u2010-9',  h:'Healing agent', d:'Persistent fissures: topical GTN (headache) or diltiazem.' },
        { t:'9\u2010-12', h:'Refer + safety-net', d:'Colorectal for chronic/non-healing or red flags; return for changing bleeding/other symptoms.' }
      ],
      wordPics: {
        fail: 'Treats as haemorrhoids or just gives cream; neglects constipation management; misses atypical/non-healing fissure red flags.',
        pass: 'Recognises fissure, makes constipation management the cornerstone, and uses GTN/diltiazem if persistent.',
        exc:  'Recognises anal fissure, distinguishes haemorrhoids, makes constipation management the cornerstone with symptom relief, prescribes GTN/diltiazem for persistent fissures, refers colorectal for chronic/non-healing, and keeps atypical-fissure red flags in mind.'
      },
      avoid: [
        { dont:'"It\u2019s probably piles \u2014 here\u2019s some cream."', instead:'"This severe \u2018passing glass\u2019 pain is an anal fissure \u2014 the key is keeping the stool soft so it heals."', why:'Mislabelling as haemorrhoids and skipping constipation management prevents healing.' },
        { dont:'(No stool softening) only giving a healing ointment.', instead:'"Soft stools are the foundation \u2014 fluids, fibre and a softener \u2014 with the ointment if it doesn\u2019t settle."', why:'Constipation management is the cornerstone; healing agents are adjuncts.' },
        { dont:'(Ignoring atypical) treating a lateral/non-healing fissure as routine.', instead:'"An unusual position or one that won\u2019t heal makes me look for other causes like Crohn\u2019s."', why:'Atypical/non-healing fissures can signal IBD/infection/malignancy.' }
      ]
    },

    'cannabis-hyperemesis': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Reece Calland', age: '24 years \u00b7 male',
        pmh: ['Recurrent cyclical vomiting + abdominal pain; multiple normal A&E work-ups', '\u26a0 Relieved by hot showers/baths (compulsive hot bathing)', 'Regular/heavy cannabis user'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Awful vomiting attacks \u2014 the only thing that helps is standing in a really hot shower for hours."',
        reason: 'Face-to-face \u2014 recurrent cyclical vomiting.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Recognise the clue', d:'Cyclical vomiting + hot-bath relief + cannabis use = cannabis hyperemesis syndrome.' },
        { t:'2\u2010-4',  h:'Ask about cannabis', d:'Non-judgemental substance history \u2014 often missed because it isn\u2019t asked.' },
        { t:'4\u2010-6',  h:'Exclude red flags', d:'GI obstruction/pancreatitis, raised ICP, metabolic (DKA/Addisonian), pregnancy in women.' },
        { t:'6\u2010-9',  h:'Cessation message', d:'Only definitive treatment is cannabis cessation; standard antiemetics often ineffective.' },
        { t:'9\u2010-12', h:'Support + safety-net', d:'Cessation/harm-reduction referral; acute hydration; return for new red flags.' }
      ],
      wordPics: {
        fail: 'Re-investigates repeatedly without asking about cannabis; misses the hot-bath clue; no cessation message.',
        pass: 'Recognises CHS from the hot-bath/cannabis pattern, excludes red flags, and gives the cessation message with support.',
        exc:  'Recognises CHS (cyclical vomiting + hot-bath relief + cannabis), takes a non-judgemental substance history, excludes red flags, delivers the cannabis-cessation message supportively, and offers cessation/harm-reduction support.'
      },
      avoid: [
        { dont:'(Re-scanning) "Let\u2019s do more tests to find the cause."', instead:'"Your normal tests plus the hot-bath relief point to cannabis hyperemesis \u2014 can I ask about your cannabis use?"', why:'Repeated re-investigation without asking about cannabis misses the diagnosis.' },
        { dont:'(Judgemental) "You need to stop smoking weed, simple as that."', instead:'"The cure is stopping cannabis \u2014 I know that\u2019s hard, and I can refer you for support."', why:'Moralising alienates; supportive cessation framing engages the patient.' },
        { dont:'(Just antiemetics) relying on standard antiemetics.', instead:'"Usual anti-sickness tablets often don\u2019t work for this \u2014 stopping cannabis is what resolves it."', why:'Standard antiemetics are often ineffective in CHS; cessation is definitive.' }
      ]
    },

    'infantile-colic': {
      ceg: ['Children & young people', 'Mental health & addiction'],
      stem: {
        name: 'Noah (mother present)', age: '6 weeks \u00b7 male',
        pmh: ['Inconsolable evening crying, legs drawn up, several hours/day for weeks (rule of 3s)', 'Thriving \u2014 feeding, gaining weight, normal nappies, no fever', 'Mother exhausted and anxious'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My baby screams inconsolably for hours every evening \u2014 I\u2019m exhausted and worried something\u2019s wrong."',
        reason: 'Face-to-face \u2014 excessive infant crying.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Examine + take seriously', d:'Examine thoroughly; thriving, well baby supports colic (diagnosis of exclusion).' },
        { t:'2\u2010-4',  h:'Exclude red flags', d:'Poor feeding/weight, fever, bile vomiting, blood in stool, lethargy, fontanelle, hernia/torsion, hair-tourniquet, CMPA.' },
        { t:'4\u2010-6',  h:'Reassure', d:'Benign, self-limiting, settles by 3\u20104 months, not the parent\u2019s fault.' },
        { t:'6\u2010-8',  h:'Practical advice', d:'Soothing (rocking/white noise/movement/winding); avoid routine meds/formula changes unless CMPA.' },
        { t:'8\u2010-12', h:'Support parent + safety', d:'Screen mood/coping; mobilise support; okay to put baby down safely; NEVER shake; red-flag safety-net.' }
      ],
      wordPics: {
        fail: 'Diagnoses colic without examining/excluding red flags, or dismisses parental distress; changes formula/medicates without indication; omits never-shake advice.',
        pass: 'Examines and excludes red flags, reassures about colic, gives soothing advice and supports the parent.',
        exc:  'Examines and excludes red flags, recognises colic in a thriving baby, reassures strongly, gives practical soothing advice (avoiding unnecessary meds/formula changes), and centrally supports the exhausted parent \u2014 screening mood, mobilising support, and giving never-shake safety advice.'
      },
      avoid: [
        { dont:'(No exam) "It\u2019s just colic, they grow out of it."', instead:'"Let me examine him fully first to be sure nothing\u2019s being missed \u2014 then I can reassure you properly."', why:'Colic is a diagnosis of exclusion; red flags must be examined for.' },
        { dont:'(Ignoring the parent) ending after reassuring about the baby.', instead:'"How are YOU coping? This is exhausting \u2014 let\u2019s get you support, and your mood matters too."', why:'Parental wellbeing/mood is central; missing it neglects the real consultation.' },
        { dont:'(No safety advice) omitting never-shake guidance.', instead:'"If you feel overwhelmed, it\u2019s okay to put him down safely and take a break \u2014 and never shake him."', why:'Never-shake safety advice is essential when crying overwhelms exhausted parents.' }
      ]
    },

    'precocious-puberty': {
      ceg: ['Children & young people', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Maya (mother present)', age: '6 years \u00b7 female',
        pmh: ['Early breast development + some pubic hair over recent months; growth spurt', 'No headaches/visual symptoms reported; no exogenous hormone exposure known', 'Otherwise well'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"My 6-year-old has started developing breasts and pubic hair \u2014 isn\u2019t she far too young?"',
        reason: 'Face-to-face \u2014 early pubertal development.'
      },
      timeMap: [
        { t:'0\u2010-2',  h:'Recognise', d:'Secondary sexual characteristics <8 (girls) = precocious puberty; assess + refer.' },
        { t:'2\u2010-4',  h:'History + exam', d:'Growth/height velocity, Tanner staging, CNS symptoms, exogenous hormones, family history.' },
        { t:'4\u2010-6',  h:'Central vs peripheral', d:'Central (HPG; idiopathic in girls but exclude CNS) vs peripheral (ovarian/adrenal/CAH/McCune-Albright/exogenous); benign variants.' },
        { t:'6\u2010-8',  h:'Why it matters', d:'Final height (early bone maturation), psychosocial impact, not missing a tumour/CAH.' },
        { t:'8\u2010-12', h:'Refer + support', d:'Paediatric endocrinology (bone age, hormones, MRI); GnRH analogue if indicated; support parent/child.' }
      ],
      wordPics: {
        fail: 'Dismisses early development as nothing, or fails to assess/refer; overlooks the final-height/CNS-cause implications.',
        pass: 'Recognises precocious puberty, assesses, and refers to paediatric endocrinology with explanation.',
        exc:  'Recognises precocious puberty (signs before 8 in girls), takes a history/examines (growth, Tanner, CNS), explains central vs peripheral and benign variants, conveys why assessment matters (height, psychosocial, excluding a cause), and refers to paediatric endocrinology with parental support.'
      },
      avoid: [
        { dont:'"Some children just develop early \u2014 nothing to worry about."', instead:'"Development this young is precocious puberty and needs proper assessment \u2014 I\u2019ll refer her to the children\u2019s hormone specialists."', why:'Dismissing it misses the final-height implications and a possible underlying cause.' },
        { dont:'(No assessment) referring without history/examination.', instead:'"Let me check her growth, the stage of development, and for any headaches or vision changes first."', why:'History/examination (growth velocity, Tanner, CNS symptoms) guides urgency and the differential.' },
        { dont:'(No explanation) referring without explaining why it matters.', instead:'"It matters for her final height, emotionally, and to make sure there\u2019s no underlying cause \u2014 that\u2019s why we assess."', why:'Parents need to understand the rationale to engage with assessment.' }
      ]
    }

  });

})();
