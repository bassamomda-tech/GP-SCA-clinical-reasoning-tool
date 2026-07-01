/* ============================================================
   Reasoning GP — Case Library batch 22: "Gut symptoms & the 2WW thresholds"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 2WW pathways stated explicitly where they map
   (rectal bleeding 50+ / FIT; dysphagia -> urgent OGD any age;
   change in bowel habit; dyspepsia + alarm features -> OGD).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases21.js.
   ============================================================ */

(function(){

  /* ============ 81. VIDEO — Rectal bleeding in a 52-year-old (NG12 / FIT) ============ */
  const c81 = {
    id:'rectal-bleeding-2ww', title:'"It\u2019s just my piles playing up again"', type:'video', duration:12,
    meta:{ age:52, sex:'M', setting:'Video consultation — rectal bleeding he wants treated as haemorrhoids.', system:'GI / Lower-GI 2WW' },
    brief:'Mr Gary Underwood, 52, lorry driver. Books for "haemorrhoid cream". On the call: rectal bleeding for ~8 weeks, dark/mixed with the stool at times (not just bright on the paper), looser stools and going more often, and ~half a stone of unintended weight loss he attributes to "being busy". Known small external piles years ago. Father died of bowel cancer at 60. BMI 28. PMH: nil. Meds: none. Keen to avoid examination.',
    script:{
      opening:'"Cheers for seeing me on video — saves the awkwardness. Look, my piles are back, I\u2019ve been bleeding when I go, so I just need some of that cream and a prescription for it really. Last time it sorted itself. I don\u2019t want a load of fuss or examinations if I can help it — can you just send something to the chemist so I can get back on the road?"',
      facts:[
        { topic:'The bleeding',        text:'If properly explored: bleeding ~8 weeks, sometimes DARKER and MIXED IN with the stool (not just bright-red on the paper as with piles), occurring most times he opens his bowels. He glosses this as "the piles".' },
        { topic:'The other red flags',  text:'On direct questioning: looser stools and going more frequently for ~2 months (change in bowel habit), and unintentional weight loss of ~½ stone he\u2019s put down to "being busy / not eating much on the road". Possibly more tired than usual. These transform the picture.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — the "just piles" is fear-driven denial: his father died of bowel cancer at 60, he watched it, and he is privately terrified the same is happening to him. Booking a VIDEO appointment and pushing for cream is a way to avoid the examination and the answer he dreads. He half-knows the bleeding isn\u2019t like last time.' },
        { topic:'The avoidance',        text:'If reached gently: he\u2019s noticed the change for weeks but kept rebooking "cream" rather than face it; can\u2019t afford time off (self-employed, sole earner); and is frightened of leaving his kids without a dad like his father left him.' },
        { topic:'What he wants',        text:'Officially: cream and to be left alone. What he needs: recognition that rectal bleeding with change in bowel habit and weight loss at 52 is a 2WW colorectal pathway (FIT + examination), delivered so he accepts it despite his fear, with the bereavement-driven terror met honestly.' },
      ],
      ice:{
        ideas:'It\u2019s just his old haemorrhoids flaring; cream will fix it like before.',
        concerns:'HIDDEN AGENDA — his father died of bowel cancer at 60; he is terrified the same is happening and is using "piles/cream" and a video booking to avoid examination and the answer he dreads.',
        expectations:'A prescription for haemorrhoid cream and no examination. What he actually needs: FIT, examination, and an urgent (2WW) colorectal referral with the bereavement fear addressed.'
      },
      cues:['"Just send the cream, no examination" — minimising and avoidance of a red-flag symptom; the fear is underneath.','Blood mixed IN with stool + change in bowel habit + weight loss — not a piles story; the 2WW picture.','Father died of bowel cancer — the dread driving the denial; surface it gently.']
    },
    checkpoints:[
      { dom:'tasks', text:'Does NOT accept the "just piles" self-diagnosis or prescribe cream blindly: recognises that bleeding mixed with stool, a change in bowel habit and unintentional weight loss are RED FLAGS that override a haemorrhoid label, especially at 52' },
      { dom:'tasks', text:'Acts on the NG12 / FIT pathway: offers quantitative faecal immunochemical testing (FIT) and refers on a suspected-cancer (2-week-wait) colorectal pathway if FIT is positive (≥10 µg Hb/g) — and recognises that with this symptom cluster and family history, urgent referral/FIT is indicated; restates the threshold, tagged NICE NG12' },
      { dom:'tasks', text:'Insists on appropriate EXAMINATION (abdominal exam and digital rectal examination, inspection for an obvious anal cause) rather than skipping it because he booked video — explaining why, and handling his reluctance with dignity' },
      { dom:'tasks', text:'Checks for anaemia and weights the FAMILY HISTORY: bloods (FBC for iron-deficiency anaemia), and recognises a first-degree relative with bowel cancer raises concern and may have screening/surveillance implications' },
      { dom:'tasks', text:'Recognises what would escalate further (significant anaemia, abdominal/rectal mass, obstructive symptoms) and does not let "piles" defer the assessment; does not falsely reassure even if external piles are present (they can coexist with cancer)' },
      { dom:'rto',   text:'Hears the denial as fear and surfaces the father\u2019s bowel cancer gently; does not collude with "it\u2019s just piles" nor frighten him into disengagement; balances honesty with the fact most rectal bleeding is benign' },
      { dom:'rto',   text:'Accommodates the examination reluctance (chaperone, control, explanation) and the practical barriers (self-employed, time off), so he accepts the pathway' },
      { dom:'gs',    text:'Safety-nets and follows up: explains FIT and the 2WW timeframe and what to expect (colonoscopy), what to do if heavier bleeding/obstruction, ensures he attends, documents, and arranges to follow up the result — does not leave a frightened man with a tube of cream' },
    ],
    worked:[
      { lbl:'Refuse the cream-only fix', txt:'"I\u2019m glad you came — and I want to be straight rather than just send cream, because that would let you down. What you\u2019re describing isn\u2019t quite a simple piles story: blood mixed in with the motion, your bowels looser and more often, and some weight dropping off. Those together always need checking properly, whatever the cause turns out to be."' },
      { lbl:'Name the pathway',       txt:'"Here\u2019s the plan. There\u2019s a simple stool test called FIT that looks for hidden blood, and given your symptoms and that your dad had bowel cancer, the right thing is an urgent referral to the bowel specialists — seen within two weeks — usually for a camera test. National guidance is clear on this. It is NOT me saying it\u2019s cancer; it\u2019s me making sure, fast."' },
      { lbl:'Insist, kindly, on exam', txt:'"I do need to examine your tummy and back passage in person too — I know that\u2019s the bit you hoped to dodge, and I\u2019ll make it quick, with a chaperone, and stop the moment you say. Even if you DO have piles, piles can sit alongside something else, so finding them wouldn\u2019t let me stop looking."' },
      { lbl:'Surface the real fear',  txt:'"Can I gently say — you mentioned your dad. Losing him to bowel cancer at sixty, and now bleeding yourself, I\u2019d be amazed if that thought hadn\u2019t been keeping you up. Is that part of why \u2018piles and cream\u2019 felt easier than coming in? \u2026 Thank you for telling me. That fear is exactly why we look properly now, so you\u2019re not carrying it in the dark."' },
      { lbl:'Balance the odds',     txt:'"Two honest things at once: most rectal bleeding turns out to be something benign, and I\u2019m not predicting the worst. And — because of your symptoms and your dad — we don\u2019t guess, we check. Both are true. Getting the all-clear quickly is worth far more than a tube of cream."' },
      { lbl:'Practical + safety-net', txt:'"I know time off the road is money, so I\u2019ll help make this work — the FIT today, bloods, and the referral. If you get heavy bleeding, severe tummy pain, or can\u2019t pass anything, that\u2019s urgent, go to A&E. I\u2019ll chase your results and we\u2019ll go through them together. You came for cream; what I\u2019m doing is making sure your kids keep their dad. That\u2019s the deal."' },
    ],
    learning:'Rectal bleeding that is mixed with stool, accompanied by a change in bowel habit (looser, more frequent) and unintentional weight loss at age 52 is a lower-GI 2WW picture — NOT a haemorrhoid story to be treated blindly with cream. The NG12/FIT pathway applies: offer quantitative FIT and refer on a suspected-cancer (2-week-wait) colorectal pathway if FIT is positive (≥10 µg Hb/g); with this symptom cluster and a first-degree relative with bowel cancer, urgent assessment is indicated. Examination (abdominal + DRE, anal inspection) and an FBC for iron-deficiency anaemia are essential — and must not be skipped because the patient booked a video; visible piles can coexist with cancer and never excuse stopping the work-up. The examinable hidden agenda is bereavement-driven denial: his father died of bowel cancer, and "piles/cream/video" is avoidance of the examination and answer he dreads. Surface the fear gently, balance honesty with the fact most bleeding is benign, accommodate the examination reluctance and his practical barriers, and complete the FIT/2WW pathway with follow-up.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (May 2025) — colorectal · NICE DG56 / FIT in symptomatic patients · CKS rectal bleeding',
      points:[
        { h:'NG12 + FIT — colorectal', t:'Offer quantitative faecal immunochemical testing (FIT) to assess for colorectal cancer in symptomatic adults (e.g. change in bowel habit, rectal bleeding, abdominal pain, weight loss, iron-deficiency anaemia). Refer on a suspected-cancer (2-week-wait) pathway if FIT ≥10 µg Hb/g. Refer regardless of FIT if there is a rectal/abdominal mass, or with strong clinical concern.' },
        { h:'Don\u2019t let "piles" close the case', t:'A haemorrhoid history and even visible external piles do NOT explain blood mixed within stool, altered bowel habit or weight loss, and can coexist with malignancy. Bright-red blood only on the paper with a clear anal cause is lower risk — but the broader symptom cluster mandates assessment.' },
        { h:'Examine and check bloods', t:'Abdominal examination, digital rectal examination and anal inspection are part of assessment; a remote booking does not remove the need. Check FBC for iron-deficiency anaemia (itself a 2WW/FIT trigger). Iron-deficiency anaemia in a man or postmenopausal woman warrants colorectal (and upper-GI) investigation.' },
        { h:'Weight the family history', t:'A first-degree relative with colorectal cancer raises risk and may carry screening/surveillance implications (and consider Lynch syndrome features — young-onset, multiple Lynch cancers). It reinforces, but its absence does not remove, the need to investigate symptoms.' },
        { h:'Balance honesty and reassurance', t:'Most rectal bleeding is benign, but urgent referral exists to exclude cancer quickly. State both truthfully; address the patient\u2019s unspoken cancer fear (here, a bereavement) directly rather than colluding with denial.' },
        { h:'Never do', t:'Never prescribe haemorrhoid cream for a red-flag bleeding pattern without assessment; never skip examination because of a video booking; never let visible piles stop the work-up; never delay FIT/2WW; never collude with fear-driven minimisation.' },
        { h:'Safety-net & follow-up', t:'Offer FIT + bloods and make the 2WW referral; explain colonoscopy and timeframe; advise on heavy bleeding/obstruction → A&E; address practical barriers; confirm attendance; track and discuss the result together.' }
      ]
    }
  };

  /* ============ 82. VIDEO — Dysphagia + weight loss (NG12 urgent OGD) ============ */
  const c82 = {
    id:'dysphagia-2ww', title:'"Food just sticks — I\u2019ve started cutting it up small"', type:'video', duration:12,
    meta:{ age:66, sex:'M', setting:'Video consultation — difficulty swallowing for weeks.', system:'GI / Upper-GI 2WW' },
    brief:'Mr Brian Halloran, 66, retired publican. For ~6 weeks, food "sticks" going down, progressively worse — now struggling with bread and meat, has started cutting food small and eating slowly. ~7 kg unintentional weight loss. Long reflux history, takes over-the-counter antacids. Ex-smoker (30 pack-years), drinks ~30 units/week. Attributes it to "getting older" and "my reflux". Wants stronger indigestion tablets. PMH: reflux. Meds: OTC antacids.',
    script:{
      opening:'"Morning, doctor. So my swallowing\u2019s been a bit off — food seems to stick when it goes down, especially bread and a bit of steak. I\u2019ve started cutting things up small and taking my time. It\u2019s probably just my reflux acting up, or getting old, isn\u2019t it? I just wondered if you could give me something stronger than the antacids from the chemist. I\u2019ve lost a bit of weight too but I could do with losing it anyway, ha."',
      facts:[
        { topic:'The dysphagia',        text:'If explored: PROGRESSIVE difficulty swallowing solids over ~6 weeks — started with bread/meat, food physically "sticks", now adapting how he eats (cutting small, eating slowly). Progressive dysphagia to solids is a red flag for oesophageal pathology/cancer until proven otherwise.' },
        { topic:'The supporting flags',  text:'On questioning: ~7 kg unintentional weight loss (he jokes it off), long reflux history, 30 pack-year smoking, ~30 units alcohol/week — all risk factors for oesophageal cancer. Possibly more tired; if asked, occasional discomfort behind the sternum on swallowing.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — the jokey minimising masks real fear and a specific dread: a friend recently died of "throat cancer" that "started with food sticking", and Brian is privately terrified it\u2019s the same, so he\u2019s reframing it as harmless ageing/reflux and asking for tablets to avoid the truth. The humour ("could do with losing it") is a shield.' },
        { topic:'The lifestyle/identity', text:'If reached: ex-publican, drinking and smoking history he feels guilty about; widower who now eats alone and has "let himself go"; frightened both of cancer and of being told his lifestyle caused it.' },
        { topic:'What he wants',        text:'Officially: stronger antacids. What he needs: recognition that progressive dysphagia with weight loss is an urgent OGD / 2WW upper-GI pathway (regardless of age), delivered so he accepts it despite his fear, without a shaming lifestyle lecture.' },
      ],
      ice:{
        ideas:'It\u2019s just his reflux or getting older; stronger antacids will sort it.',
        concerns:'HIDDEN AGENDA — a friend recently died of "throat cancer" that started with food sticking; he\u2019s terrified it\u2019s the same and is reframing it as harmless to avoid the truth, with guilt about his smoking/drinking.',
        expectations:'Stronger indigestion tablets. What he actually needs: urgent direct-access endoscopy (OGD) on a 2WW upper-GI pathway, with his fear addressed and no shaming.'
      },
      cues:['"Food sticks, I\u2019ve started cutting it up small" — progressive dysphagia to solids; a red flag, not reflux.','"Lost weight but could do with it, ha" — unintentional weight loss joked away; the shield over real fear.','Reflux + smoking + alcohol history — oesophageal-cancer risk factors stacking up.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises PROGRESSIVE DYSPHAGIA TO SOLIDS as a red flag for oesophageal/upper-GI cancer until proven otherwise, and does NOT accept the "reflux/getting older" reframe or simply escalate antacids' },
      { dom:'tasks', text:'States the NG12 pathway clearly: dysphagia at ANY age warrants urgent direct-access upper-GI endoscopy (OGD) on a suspected-cancer (2-week-wait) pathway; restates the threshold, tagged NICE NG12 — and does not require him to "fail" a PPI trial first given dysphagia' },
      { dom:'tasks', text:'Weights the supporting features and risk factors: unintentional weight loss (a 2WW criterion in itself with upper-abdominal/reflux symptoms ≥55), long-standing reflux (Barrett\u2019s risk), smoking and alcohol — building the case for urgency' },
      { dom:'tasks', text:'Takes a focused history to characterise the dysphagia (solids vs liquids, progressive vs intermittent, level, odynophagia, regurgitation) and checks for anaemia (FBC) and an epigastric/abdominal mass, without delaying the 2WW referral' },
      { dom:'tasks', text:'Knows what would escalate to emergency (complete obstruction/inability to swallow saliva, food bolus, significant bleeding/haematemesis, severe dehydration) and safety-nets for it' },
      { dom:'rto',   text:'Hears the humour as a shield and surfaces the friend\u2019s death gently; does not collude with "just reflux" nor frighten him off; balances honesty with the fact a cause will be found and acted on' },
      { dom:'rto',   text:'Addresses smoking/alcohol and any guilt WITHOUT a shaming lecture — supportive, blame-light, and focused on getting him assessed' },
      { dom:'gs',    text:'Safety-nets and follows up: explains the urgent OGD and 2WW timeframe and what to expect, what to do if he cannot swallow at all / vomits blood, ensures he attends, documents, and arranges to follow up the result' },
    ],
    worked:[
      { lbl:'Refuse the reframe',     txt:'"I\u2019m glad you mentioned the swallowing, because I can\u2019t just give you stronger antacids for that — and I\u2019ll tell you why honestly. Food physically sticking, getting steadily worse so you\u2019re cutting it small, plus weight coming off — that\u2019s not simple reflux or just age. That combination we always check urgently."' },
      { lbl:'Name the pathway',       txt:'"The right thing here is a camera test of your gullet and stomach — an endoscopy — and because of the swallowing and weight loss, you qualify for the urgent two-week pathway, seen quickly. That\u2019s the national rule for swallowing trouble at any age. It\u2019s how we find the cause and sort it, not me saying the worst."' },
      { lbl:'Surface the real fear',txt:'"Can I gently ask — has anything in particular been worrying you about this? \u2026 Your friend, with the throat cancer that started the same way. I\u2019m so sorry. That makes total sense of why \u2018reflux and tablets\u2019 felt easier to say. But it\u2019s exactly why we look now — so you know, rather than dread."' },
      { lbl:'No shaming',           txt:'"You mentioned the pub years, the smoking and a drink — I\u2019m not here to give you a hard time about any of that. It\u2019s relevant, yes, but my job today is getting you seen, not lecturing you. We can talk about cutting down later, gently, when you\u2019re ready."' },
      { lbl:'Balance + check',      txt:'"Most causes of this can be treated — sometimes it\u2019s a narrowing from years of acid, sometimes inflammation — and yes, sometimes something we\u2019d want to catch early, which is the point of going fast. I\u2019ll also do a blood count today. Let\u2019s get the camera test arranged."' },
      { lbl:'Safety-net',           txt:'"If you reach the point where you can\u2019t swallow even your spit, food gets completely stuck, or you vomit blood — that\u2019s A&E straight away, don\u2019t wait for the appointment. Keep to softer foods and small amounts meanwhile. I\u2019ll chase the endoscopy and we\u2019ll go through whatever it shows together. You came for tablets; what you\u2019re getting is a proper answer, quickly."' },
    ],
    learning:'Progressive dysphagia to solids is a red flag for oesophageal/upper-GI malignancy until proven otherwise — and the NG12 rule is unambiguous: dysphagia at ANY age warrants urgent direct-access upper-GI endoscopy on a suspected-cancer (2-week-wait) pathway, with no requirement to trial a PPI first. Do not accept a "reflux/getting older" reframe or simply escalate antacids. Supporting features sharpen the urgency: unintentional weight loss, long-standing reflux (Barrett\u2019s risk), smoking and alcohol. Characterise the dysphagia (solids vs liquids, progressive vs intermittent, odynophagia, regurgitation), check an FBC, and know the emergency escalations (complete obstruction, food bolus, haematemesis). The examinable hidden agenda is fear masked by humour — a friend who died of "throat cancer" that "started with food sticking" — plus guilt about a smoking/drinking history. Surface the fear gently, address lifestyle without shaming, balance honesty with the fact a cause will be found and treated, and complete the urgent OGD/2WW pathway with a clear safety-net.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (May 2025) — oesophageal/stomach · CKS dysphagia · BSG upper-GI guidance',
      points:[
        { h:'NG12 — dysphagia = urgent OGD', t:'Offer urgent direct-access upper-GI endoscopy (within 2 weeks) to assess for oesophageal/stomach cancer in people with DYSPHAGIA, at any age. Also offer urgent OGD to those aged ≥55 with weight loss AND upper-abdominal pain / reflux / dyspepsia. Dysphagia does not require a prior PPI trial.' },
        { h:'Characterise the dysphagia', t:'Progressive dysphagia to solids (then liquids) suggests a mechanical/obstructing lesion (tumour, stricture); intermittent dysphagia to solids and liquids suggests a motility disorder. Ask about level, odynophagia, regurgitation, and duration. Progressive solid-food dysphagia with weight loss is high concern.' },
        { h:'Weight loss & risk factors', t:'Unintentional weight loss is itself an NG12 trigger in combination with GI symptoms and raises concern. Risk factors for oesophageal cancer: chronic reflux/Barrett\u2019s, smoking, alcohol, obesity, age. Their presence reinforces urgency.' },
        { h:'Examine and check bloods', t:'Assess nutrition/hydration, examine the abdomen and for lymphadenopathy/epigastric mass, and check FBC for iron-deficiency anaemia. Do not delay the 2WW referral for investigations.' },
        { h:'Emergency escalation', t:'Inability to swallow saliva / complete obstruction, impacted food bolus, haematemesis/melaena, or significant dehydration require emergency assessment, not the routine 2WW.' },
        { h:'Communicate without shaming', t:'Patients minimise dysphagia as reflux/ageing, often masking cancer fear (e.g. a bereavement) and guilt about smoking/alcohol. Surface the fear, avoid lifestyle lectures that cause disengagement, and frame urgent endoscopy as finding and treating the cause.' },
        { h:'Never do', t:'Never treat new progressive dysphagia as reflux with stronger antacids; never require a PPI trial before referring dysphagia; never miss weight loss as a red flag; never deliver a shaming lifestyle lecture instead of arranging assessment.' },
        { h:'Safety-net & follow-up', t:'Urgent OGD/2WW referral; FBC; softer diet meanwhile; emergency advice (can\u2019t swallow saliva, food bolus, haematemesis → A&E); confirm attendance; follow up the result together.' }
      ]
    }
  };

  /* ============ 83. TELEPHONE — Change in bowel habit vs "IBS" (FIT) ============ */
  const c83 = {
    id:'bowel-habit-fit', title:'"It\u2019s just IBS, I get it when I\u2019m stressed"', type:'telephone', duration:12,
    meta:{ age:59, sex:'F', setting:'Telephone — change in bowel habit she\u2019s self-labelled as IBS.', system:'GI / Lower-GI 2WW vs IBS' },
    brief:'Mrs Diane Foster, 59, teacher. Rings for "something for my IBS". On the call: bowels changed ~10 weeks ago — looser and more frequent, some urgency, occasional bright-red blood on the paper, and "a bit" of weight loss. Self-diagnosed IBS from the internet, attributes it to a stressful Ofsted term. No prior bowel problems; this is NEW. No FIT done. Family history: none she knows. BMI 26. PMH: nil. Meds: none.',
    script:{
      opening:'"Hello — I\u2019m after some advice or tablets for IBS really. My stomach and bowels have been all over the place the last couple of months, looser, going more often, a bit of urgency. We\u2019ve had a brutal Ofsted term so I\u2019m sure it\u2019s just stress and IBS — that\u2019s what it sounds like online. There\u2019s been a little bit of blood now and then but I think that\u2019s probably just from going so much. Can you sort me out something to settle it?"',
      facts:[
        { topic:'Why it\u2019s NOT just IBS', text:'If explored: this is a NEW change in bowel habit at 59 (first-onset, not lifelong), persistent ~10 weeks, with rectal bleeding and some weight loss. New-onset altered bowel habit over 50 with bleeding/weight loss is a colorectal red flag — IBS is a diagnosis of exclusion and is rarely a NEW diagnosis at her age without investigation.' },
        { topic:'The features she glosses', text:'On questioning: bright-red blood "now and then" she blames on frequency; unintended weight loss (~few kg) she attributes to stress/skipping meals; tiredness. No nocturnal symptoms volunteered but worth asking; no prior IBS history at all.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — the "it\u2019s just IBS/stress" is partly self-soothing denial: a close colleague was recently diagnosed with bowel cancer at a similar age, and Diane is frightened it could be her, so she\u2019s reached for the least scary label. She also can\u2019t face taking time off mid-term and is minimising to avoid investigation.' },
        { topic:'The reassurance trap',  text:'She wants the GP to confirm "IBS" and prescribe an antispasmodic. Accepting that label and treating without FIT/assessment would be the classic error — anchoring on a benign self-diagnosis.' },
        { topic:'What she wants',       text:'Officially: tablets to settle "IBS". What she needs: recognition that a new change in bowel habit with bleeding and weight loss at 59 needs FIT and likely a 2WW colorectal referral — not an IBS label — with her fear and her term-time pressures handled.' },
      ],
      ice:{
        ideas:'It\u2019s IBS brought on by a stressful term; an antispasmodic or diet advice will settle it.',
        concerns:'HIDDEN AGENDA — a colleague her age was recently diagnosed with bowel cancer; she\u2019s frightened it could be her and has reached for "IBS/stress" as the least scary label, while dreading time off mid-term.',
        expectations:'Confirmation of IBS and tablets. What she actually needs: FIT and a likely 2WW colorectal referral, with the cancer fear and practical barriers addressed.'
      },
      cues:['"It\u2019s just IBS, I get it when stressed" — but this is NEW at 59, not lifelong; IBS is a diagnosis of exclusion.','Bright-red blood + weight loss blamed on frequency/stress — red flags being explained away.','A colleague recently diagnosed with bowel cancer — the fear behind the safe self-label.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises this is a NEW change in bowel habit at 59 with rectal bleeding and weight loss — NOT a safe IBS picture — and knows IBS is a diagnosis of exclusion that should not be newly applied at this age without investigation' },
      { dom:'tasks', text:'Acts on the NG12 / FIT pathway: offers quantitative FIT and refers on a suspected-cancer (2-week-wait) colorectal pathway if FIT ≥10 µg Hb/g; recognises the symptom cluster (altered habit + bleeding + weight loss over 50) warrants urgent assessment; restates the threshold, tagged NICE NG12' },
      { dom:'tasks', text:'Takes the appropriate baseline: bloods (FBC for iron-deficiency anaemia, ferritin), examination (abdominal + DRE), coeliac screen as relevant — without delaying FIT/referral; does NOT simply prescribe an antispasmodic and call it IBS' },
      { dom:'tasks', text:'Distinguishes red-flag features from genuine IBS criteria (IBS: chronic, often lifelong, abdominal pain related to defaecation, bloating, NO bleeding/weight loss/nocturnal symptoms/anaemia) and explains why hers doesn\u2019t fit the safe pattern' },
      { dom:'tasks', text:'Recognises escalating features (significant anaemia, mass, obstruction) and that even if some IBS-type symptoms exist, the red flags must be excluded first' },
      { dom:'rto',   text:'Hears the self-soothing denial and surfaces the colleague\u2019s diagnosis gently; does not collude with the convenient "IBS/stress" label nor catastrophise; balances honesty with the fact most such symptoms are benign' },
      { dom:'rto',   text:'Addresses the practical barrier (can\u2019t face time off mid-term) and the fear, bringing her to accept assessment rather than dismissing her self-diagnosis abruptly' },
      { dom:'gs',    text:'Safety-nets and follows up: explains FIT and the 2WW timeframe and what to expect (colonoscopy), advises on heavier bleeding/obstruction, ensures she engages, documents, and arranges to follow up the result' },
    ],
    worked:[
      { lbl:'Gently decline the label', txt:'"I can hear how much sense \u2018stress and IBS\u2019 makes after the term you\u2019ve had — but I can\u2019t safely call this IBS, and I want to be honest about why. IBS is usually something people have had on and off for years, and it doesn\u2019t cause bleeding or weight loss. Yours is new, you\u2019re 59, there\u2019s blood and some weight\u2019s come off. That combination I have to check properly."' },
      { lbl:'Name the pathway',       txt:'"There\u2019s a simple stool test called FIT that looks for hidden blood, and depending on it — and honestly, given your symptoms — the right step is an urgent referral to the bowel team, seen within two weeks, usually for a camera test. That\u2019s the national guidance. It isn\u2019t me saying it\u2019s cancer; it\u2019s making sure quickly that it isn\u2019t."' },
      { lbl:'Surface the real fear',txt:'"Can I ask gently — has anyone close to you had bowel trouble recently? \u2026 Your colleague, the same age. That\u2019s frightening, and I think part of you reached for \u2018IBS\u2019 because it\u2019s the version you could cope with. That\u2019s completely human — and it\u2019s exactly why we get a proper answer now, so the fear isn\u2019t running the show."' },
      { lbl:'Don\u2019t catastrophise', txt:'"To balance it: most people with these symptoms turn out fine, and there\u2019s every chance this is something benign. But \u2018probably fine\u2019 isn\u2019t the same as \u2018checked\u2019, and at your age with bleeding we check. Both things are true."' },
      { lbl:'The term-time barrier', txt:'"I know taking time off mid-term feels impossible — but a camera test is usually a single morning, and your health has to come before the timetable. Let\u2019s work the appointments around you where we can. This isn\u2019t self-indulgent; it\u2019s necessary."' },
      { lbl:'Safety-net',           txt:'"I\u2019ll arrange the FIT and a blood count today, and get the referral moving. If you get heavier bleeding, bad tummy pain, or can\u2019t open your bowels at all, that\u2019s urgent — A&E. I\u2019ll follow your results and we\u2019ll talk again. You rang for IBS tablets; what I\u2019m giving you is the safer thing — making sure we\u2019re not missing anything."' },
    ],
    learning:'A NEW change in bowel habit at 59 with rectal bleeding and weight loss is a colorectal red-flag cluster, not IBS — and IBS is a diagnosis of exclusion that should never be newly applied at this age without investigation. The NG12/FIT pathway applies: offer quantitative FIT and refer on a suspected-cancer (2-week-wait) colorectal pathway if FIT ≥10 µg Hb/g, with baseline bloods (FBC/ferritin) and examination, and without simply prescribing an antispasmodic. Distinguish genuine IBS (chronic/lifelong, pain related to defaecation, bloating, NO bleeding/weight loss/nocturnal symptoms/anaemia) from this picture. The examinable hidden agenda is self-soothing denial — a colleague her age recently diagnosed with bowel cancer drove her to the least frightening label — plus a practical dread of taking time off mid-term. Surface the fear gently, decline the convenient label without catastrophising or dismissing her, address the practical barrier, and complete FIT/2WW with follow-up. The skill is refusing the anchored self-diagnosis while keeping her on side.',
    knowledge:{
      guideline:'NICE NG12 colorectal · NICE DG56 / FIT in symptomatic patients · NICE CG61 IBS · CKS change in bowel habit',
      points:[
        { h:'IBS is a diagnosis of exclusion', t:'IBS is typically chronic/relapsing with abdominal pain related to defaecation, altered stool form/frequency and bloating, WITHOUT alarm features. A NEW change in bowel habit over ~50, or any rectal bleeding, weight loss, nocturnal symptoms, anaemia or family history, points away from IBS and mandates investigation first.' },
        { h:'NG12 + FIT', t:'Offer quantitative FIT in symptomatic adults (change in bowel habit, bleeding, weight loss, abdominal pain, iron-deficiency anaemia); refer on a 2-week-wait colorectal pathway if FIT ≥10 µg Hb/g, or regardless of FIT if a mass is present or concern is high. New altered bowel habit with bleeding/weight loss over 50 is a classic referral cluster.' },
        { h:'Baseline work-up', t:'FBC and ferritin (iron-deficiency anaemia), examination including DRE, and coeliac serology where diarrhoea predominates — alongside (not instead of) FIT/referral. Do not anchor on a benign label and prescribe symptomatically without excluding red flags.' },
        { h:'Recognise the anchoring trap', t:'Patients (and clinicians) can anchor on a reassuring self-diagnosis ("IBS/stress"), especially when fear drives it. Treat the convenient label sceptically when the features don\u2019t fit; refusing to confirm it kindly is part of the job.' },
        { h:'Address fear and barriers', t:'A relevant bereavement/peer diagnosis often sits behind a minimising label. Surface it; balance honest reassurance (most are benign) with the need to check; and problem-solve practical barriers (work, time off) so assessment happens.' },
        { h:'Never do', t:'Never newly label IBS over 50 with red flags; never prescribe an antispasmodic instead of investigating bleeding/weight loss; never skip FIT/bloods/examination; never collude with a fear-driven self-diagnosis; never catastrophise or dismiss abruptly.' },
        { h:'Safety-net & follow-up', t:'FIT + bloods and 2WW referral as indicated; explain colonoscopy/timeframe; advise on heavy bleeding/obstruction → A&E; address work barriers; confirm engagement; follow up the result.' }
      ]
    }
  };

  /* ============ 84. TELEPHONE — Dyspepsia with alarm features ============ */
  const c84 = {
    id:'dyspepsia-alarm', title:'"My indigestion\u2019s just worse than usual"', type:'telephone', duration:12,
    meta:{ age:58, sex:'M', setting:'Telephone — long-standing dyspepsia, now changed.', system:'GI / Dyspepsia & alarm features' },
    brief:'Mr Paul Mercer, 58, warehouse supervisor. Rings for a repeat of his omeprazole — "indigestion\u2019s worse than usual". On the call: epigastric pain for years, but the last ~6 weeks different and persistent despite PPI, with ~5 kg weight loss, early satiety ("full after a few mouthfuls"), and on direct questioning his stools have been BLACK once or twice. Takes ibuprofen most days for back pain (not on record). H. pylori never tested. Smoker. PMH: back pain. Meds: omeprazole, OTC ibuprofen.',
    script:{
      opening:'"Hiya, I just need my omeprazole bumping up really — my indigestion\u2019s been worse than usual the last few weeks and the normal dose isn\u2019t cutting it. I\u2019ve had a dodgy stomach for years so it\u2019s nothing new, just a bad patch. Can you put a stronger script through? I haven\u2019t got time to come in, we\u2019re short-staffed at the warehouse."',
      facts:[
        { topic:'The alarm features',   text:'If explored: dyspepsia that has CHANGED and become persistent over ~6 weeks DESPITE a PPI; ~5 kg unintentional weight loss; EARLY SATIETY (full after a few mouthfuls); and — on direct asking — BLACK, tarry stools once or twice (possible melaena/GI bleeding). These alarm features point to urgent endoscopy, not a dose increase.' },
        { topic:'The NSAID clue',        text:'He takes ibuprofen most days for back pain, NOT on his record — a major risk for peptic ulcer/GI bleeding, compounding the picture. He hasn\u2019t connected it. H. pylori never tested.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — he is minimising to avoid coming in because of WORK (short-staffed, fears being seen as unreliable, possibly job insecurity), and there\u2019s a quieter fear: his weight loss and the black stools have frightened him, but admitting it might mean tests, time off, and bad news he can\u2019t afford. The "just bump the dose" is avoidance.' },
        { topic:'The melaena significance', text:'Black tarry stools suggest upper-GI bleeding — potentially from an ulcer (NSAID-driven) or a tumour — and is a red flag that, with weight loss and treatment-resistant dyspepsia, needs urgent assessment, not a remote prescription.' },
        { topic:'What he wants',        text:'Officially: a stronger PPI prescription over the phone, no visit. What he needs: recognition of alarm features (weight loss, early satiety, melaena, PPI-refractory) requiring urgent endoscopy (2WW), stopping the NSAID, and assessment of possible GI bleeding — with the work barrier addressed.' },
      ],
      ice:{
        ideas:'It\u2019s just a bad patch of his long-standing indigestion; a stronger PPI over the phone will fix it.',
        concerns:'HIDDEN AGENDA — minimising to avoid coming in because of work pressure/job insecurity, plus a quieter fear that the weight loss and black stools mean something serious he can\u2019t afford to face.',
        expectations:'A stronger omeprazole prescription, no appointment. What he actually needs: urgent endoscopy for alarm features, stopping the NSAID, and assessment for GI bleeding.'
      },
      cues:['Dyspepsia CHANGED + persistent despite PPI + weight loss + early satiety — alarm features, not a dose issue.','Black tarry stools on direct questioning — possible melaena/GI bleed; ask specifically, he won\u2019t volunteer it.','Daily ibuprofen not on the record — the hidden ulcer risk; and "no time, short-staffed" — the work-driven avoidance.']
    },
    checkpoints:[
      { dom:'tasks', text:'Identifies the ALARM FEATURES in dyspepsia — unintentional weight loss, early satiety, persistent/treatment-resistant symptoms despite PPI, and possible MELAENA (black tarry stools) — and does NOT simply increase the PPI over the phone' },
      { dom:'tasks', text:'Asks specifically about GI bleeding (melaena, haematemesis) — recognising the patient won\u2019t volunteer it — and recognises black tarry stools as a red flag suggesting upper-GI bleeding needing urgent assessment' },
      { dom:'tasks', text:'Acts on the NG12 pathway: urgent direct-access upper-GI endoscopy (2-week-wait) for dyspepsia with weight loss / alarm features (and consider same-day assessment if active/ongoing GI bleeding); restates the threshold, tagged NICE NG12 — and does not just "test and treat" when alarm features are present' },
      { dom:'tasks', text:'Identifies and STOPS the hidden NSAID driver: daily ibuprofen (not on record) markedly raises peptic-ulcer/bleeding risk; advises stopping it, addresses the back pain differently, and checks H. pylori status as part of work-up' },
      { dom:'tasks', text:'Assesses acuity: if there are signs of significant/active bleeding (ongoing melaena, dizziness, haematemesis, haemodynamic symptoms) escalates to same-day/emergency assessment rather than a routine 2WW' },
      { dom:'rto',   text:'Hears the work-driven avoidance and the quieter fear; does not take the "just bump the dose" request at face value; brings him to accept assessment by naming the seriousness without panic' },
      { dom:'rto',   text:'Problem-solves the work barrier (a morning for endoscopy, fit note if needed) and addresses the fear honestly, so he engages rather than deflects' },
      { dom:'gs',    text:'Safety-nets clearly: red flags for urgent/emergency care (more black stools, vomiting blood, dizziness/collapse → A&E/999), stops the NSAID, arranges urgent OGD + H. pylori testing and bloods (FBC for anaemia), documents, and follows up' },
    ],
    worked:[
      { lbl:'Don\u2019t just up the dose', txt:'"I hear you want this done quickly over the phone — but I can\u2019t just increase the omeprazole, and I need to be straight about why. Indigestion that\u2019s changed, isn\u2019t responding to the tablets, with weight dropping off and feeling full quickly — that\u2019s a different situation from a bad patch, and a higher dose could mask something we need to see."' },
      { lbl:'Ask the key question', txt:'"One important thing I have to ask directly: have your stools been black and tarry, or sticky, at all? \u2026 Once or twice. Okay — thank you, that\u2019s really important. Black stools can mean a little bleeding higher up in the stomach or gullet, and combined with the weight loss, that\u2019s something we look at urgently, not over the phone."' },
      { lbl:'Find the NSAID',       txt:'"Are you taking anything for your back? \u2026 Ibuprofen most days. That\u2019s a key piece — anti-inflammatories like that are a common cause of stomach ulcers and bleeding, and it\u2019s not on your records. I\u2019d like you to stop it from today, and we\u2019ll sort your back a safer way."' },
      { lbl:'Name the pathway',     txt:'"So the plan is a camera test of your stomach and gullet, on the urgent two-week pathway, because of the weight loss and the changed symptoms. We\u2019ll also test for a stomach bug called H. pylori and check your blood count. If you have any more black stools, vomit blood, or feel dizzy or faint, that becomes A&E today, not a wait."' },
      { lbl:'The work barrier',     txt:'"I know the warehouse is short-staffed and that\u2019s real pressure — but this won\u2019t wait, and a camera test is usually just one morning. I\u2019ll give you a note if you need it. Your health has to come first here; being off sick beats being seriously unwell."' },
      { lbl:'Safety-net',           txt:'"To be clear on the danger signs: more black or tarry stools, vomiting blood or what looks like coffee grounds, feeling lightheaded, a racing heart — any of those, call 999 or go to A&E. Stop the ibuprofen, keep taking the omeprazole as before. I\u2019ll arrange the endoscopy urgently and follow your results. You rang for a stronger tablet; what you need is a proper look, and I\u2019m going to make that happen safely."' },
    ],
    learning:'Long-standing dyspepsia that has CHANGED and become persistent despite a PPI, with unintentional weight loss, early satiety and — critically, on direct questioning — melaena (black tarry stools), is a cluster of ALARM features that mandates urgent endoscopy, not a phone PPI dose increase. NG12: offer urgent direct-access upper-GI endoscopy (2-week-wait) for dyspepsia with weight loss/alarm features, and escalate to same-day/emergency assessment if there is active GI bleeding. "Test and treat" (H. pylori) and PPI optimisation are for uncomplicated dyspepsia WITHOUT alarm features — not here. Two things are easily missed: melaena (the patient won\u2019t volunteer it — ask specifically), and a hidden NSAID driver (daily ibuprofen not on the record, a major peptic-ulcer/bleeding risk) which must be stopped, alongside H. pylori testing and an FBC. The examinable hidden agenda is work-driven avoidance (short-staffed, job insecurity) plus a quieter fear of bad news he can\u2019t afford; name the seriousness without panic, problem-solve the work barrier, stop the NSAID, and safety-net the GI-bleed red flags clearly.',
    knowledge:{
      guideline:'NICE NG12 oesophageal/stomach · NICE CG184 dyspepsia & GORD · CKS dyspepsia · NSAID/PUD safety',
      points:[
        { h:'Alarm features change everything', t:'Dyspepsia ALARM features (ALARMS): Anaemia, Loss of weight (unintentional), Anorexia/early satiety, Recent onset/progressive or treatment-resistant symptoms, Melaena/haematemesis, Swallowing difficulty (dysphagia). Any of these → urgent direct-access OGD (2-week-wait); they override routine "test and treat".' },
        { h:'Ask specifically about bleeding', t:'Patients rarely volunteer melaena. Ask directly about black, tarry, sticky stools and vomiting blood/coffee-grounds. Melaena suggests upper-GI bleeding (ulcer, malignancy) — with weight loss/PPI-refractory symptoms it warrants urgent assessment; active/ongoing bleeding or haemodynamic compromise is an emergency (same-day/999).' },
        { h:'Uncomplicated dyspepsia pathway (for contrast)', t:'WITHOUT alarm features: lifestyle advice, review meds, full-dose PPI for 4\u20138 weeks AND/OR H. pylori "test and treat" (stool antigen/breath test; retest of cure as needed). This pathway does NOT apply once alarm features are present.' },
        { h:'Find and stop the NSAID', t:'Regular NSAID use (often unrecorded, e.g. OTC ibuprofen for back pain) is a leading cause of peptic ulcer and GI bleeding. Identify it, stop it, manage the underlying pain differently (paracetamol/topical/physio), and consider gastroprotection where NSAIDs are unavoidable. Test for H. pylori.' },
        { h:'Investigate', t:'FBC for iron-deficiency anaemia, H. pylori testing, and urgent OGD per NG12. Don\u2019t mask alarm-feature dyspepsia with an escalated PPI, which can delay diagnosis.' },
        { h:'Address avoidance & fear', t:'Work pressure/job insecurity and fear of bad news drive remote "just up the dose" requests. Name the seriousness calmly, problem-solve time off (endoscopy is usually a single morning; offer a fit note), and safety-net the bleeding red flags.' },
        { h:'Never do', t:'Never escalate a PPI over the phone for alarm-feature dyspepsia; never omit the direct melaena/haematemesis question; never miss a hidden NSAID; never apply "test and treat" when alarm features are present; never let work pressure defer urgent assessment of possible GI bleeding.' },
        { h:'Safety-net & follow-up', t:'Urgent OGD/2WW; stop NSAID; H. pylori test + FBC; GI-bleed red flags (more melaena, haematemesis, dizziness → A&E/999); fit note if needed; confirm attendance; follow up results.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c81, c82, c83, c84);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'rectal-bleeding-2ww': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Gary Underwood', age: '52 years · male',
        pmh: ['Small external piles years ago', 'Father died of bowel cancer at 60', 'BMI 28; lorry driver (self-employed)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Rectal bleeding ~8 weeks (dark/mixed with stool), looser/more frequent stools, ~½ stone unintended weight loss. Wants haemorrhoid cream; avoiding examination.',
        reason: 'Video consultation — wants cream for "piles".'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse cream-only',   d:'Blood mixed in stool + altered habit + weight loss isn\u2019t a piles story. Don\u2019t prescribe cream blindly.' },
        { t:'2–4',  h:'Name FIT / NG12 2WW', d:'Offer FIT; refer 2WW colorectal if ≥10 µg Hb/g (and given the cluster + family history). Restate, tag NICE NG12.' },
        { t:'4–6',  h:'Insist on examination', d:'Abdominal + DRE + anal inspection, in person — piles can coexist with cancer. Chaperone, control, dignity.' },
        { t:'6–9',  h:'Surface the fear',     d:'Father\u2019s bowel cancer at 60 driving the denial. Balance honesty (most bleeding benign) with "we check, not guess".' },
        { t:'9–12', h:'Practical + safety-net', d:'FBC; help with time off; heavy bleeding/obstruction → A&E; track the result together.' }
      ],
      wordPics: {
        fail: 'Prescribes haemorrhoid cream over video for a red-flag bleeding pattern, skips examination and FIT, accepts "just piles"; never surfaces the father\u2019s bowel cancer — a potentially fatal miss dressed as convenience.',
        pass: 'Recognises the red-flag cluster, offers FIT and a 2WW referral, insists on examination and FBC, and safety-nets.',
        exc:  'Refuses the cream-only fix and the piles self-diagnosis; states FIT + NG12 2WW precisely and weights the family history; insists on examination with dignity despite the video booking; surfaces the bereavement-driven fear and balances honest reassurance with the need to check; and completes FIT/2WW with practical support and follow-up.'
      },
      avoid: [
        { dont:'"Sounds like your piles again — I\u2019ll send some cream to the chemist."', instead:'"Blood mixed in the motion, looser bowels and weight loss isn\u2019t a simple piles story — that needs a stool test and likely an urgent referral, not just cream."', why:'Treating a red-flag bleeding cluster as piles risks missing colorectal cancer.' },
        { dont:'"Since you\u2019re on video and it\u2019s probably piles, we can skip the examination."', instead:'"I do need to examine you in person — piles can sit alongside something else, so finding them wouldn\u2019t let me stop looking. Chaperone, quick, and you\u2019re in control."', why:'A video booking and a likely benign cause don\u2019t justify skipping examination.' },
        { dont:'"Try not to read too much into your dad\u2019s illness — it\u2019s probably unrelated."', instead:'"Losing your dad to bowel cancer and now bleeding yourself — of course that\u2019s on your mind. That\u2019s exactly why we check properly now."', why:'Dismissing the bereavement fear misses the driver of his denial and the chance to bring him on side.' }
      ]
    },

    'dysphagia-2ww': {
      ceg: ['Long-term conditions & cancer', 'Older adults'],
      stem: {
        name: 'Brian Halloran', age: '66 years · male',
        pmh: ['Long reflux history (OTC antacids)', 'Ex-smoker 30 pack-years; ~30 units alcohol/week', 'Widower; eats alone'],
        meds: ['OTC antacids'],
        allergy: 'NKDA',
        recent: '⚠ Progressive dysphagia to solids ~6 weeks (cutting food small, eating slowly); ~7 kg unintended weight loss. Wants stronger antacids.',
        reason: 'Video consultation — food "sticks" when swallowing.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse the reframe',  d:'Progressive solid-food dysphagia + weight loss isn\u2019t reflux/ageing. Don\u2019t escalate antacids.' },
        { t:'2–4',  h:'Name NG12 OGD',        d:'Dysphagia at ANY age → urgent direct-access OGD on 2WW. No PPI trial first. Restate, tag NICE NG12.' },
        { t:'4–6',  h:'Characterise + risk',  d:'Solids progressive; weight loss; reflux/Barrett\u2019s, smoking, alcohol. FBC. Don\u2019t delay the referral.' },
        { t:'6–9',  h:'Fear, no shame',       d:'Friend\u2019s "throat cancer" that started the same way; guilt about lifestyle. Surface gently; assess, don\u2019t lecture.' },
        { t:'9–12', h:'Safety-net',           d:'Can\u2019t swallow saliva / food bolus / haematemesis → A&E; softer diet meanwhile; follow up the result.' }
      ],
      wordPics: {
        fail: 'Escalates antacids for new progressive dysphagia, accepts "reflux/getting older", requires a PPI trial first; misses the weight loss and risk factors; delivers a shaming smoking/alcohol lecture instead of arranging urgent OGD.',
        pass: 'Recognises dysphagia as an urgent-OGD red flag, refers on 2WW without a PPI trial, checks FBC, and safety-nets.',
        exc:  'Refuses the reflux/ageing reframe; states the NG12 any-age dysphagia → urgent OGD rule precisely; characterises the dysphagia and weights weight loss + risk factors; surfaces the friend\u2019s-death fear and addresses lifestyle without shaming; and completes the 2WW with a clear emergency safety-net.'
      },
      avoid: [
        { dont:'"It\u2019s probably your reflux — let\u2019s try a stronger antacid and see."', instead:'"Food sticking and getting worse, with weight loss, isn\u2019t simple reflux — swallowing trouble at any age needs an urgent camera test, not stronger tablets."', why:'Escalating antacids for progressive dysphagia delays diagnosis of a possible oesophageal cancer.' },
        { dont:'"Let\u2019s do a month of omeprazole first and review if it doesn\u2019t help."', instead:'"With dysphagia we don\u2019t wait on a tablet trial — you go straight onto the urgent two-week endoscopy pathway."', why:'A PPI trial before referral is wrong when dysphagia is present; NG12 says refer urgently.' },
        { dont:'"Well, the smoking and drinking won\u2019t have helped, will they."', instead:'"The pub years are relevant, but I\u2019m not here to lecture you — my job today is getting you seen quickly. We can talk gently about cutting down later."', why:'A shaming lifestyle comment causes disengagement at exactly the moment urgent assessment is needed.' }
      ]
    },

    'bowel-habit-fit': {
      ceg: ['Long-term conditions & cancer', 'New & undifferentiated presentations'],
      stem: {
        name: 'Diane Foster', age: '59 years · female',
        pmh: ['NEW change in bowel habit ~10 weeks (looser, more frequent, urgency)', 'Occasional bright-red blood; ~few kg weight loss', 'No prior bowel problems; self-labelled "IBS" from the internet'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Attributes it to a stressful Ofsted term. A colleague her age recently diagnosed with bowel cancer. Wants IBS tablets.',
        reason: 'Telephone — wants something for "IBS".'
      },
      timeMap: [
        { t:'0–2',  h:'Decline the label',   d:'New at 59, with bleeding + weight loss = not IBS (a diagnosis of exclusion). Say why, kindly.' },
        { t:'2–4',  h:'FIT / NG12 2WW',       d:'Offer FIT; 2WW colorectal if ≥10 µg Hb/g (and given the cluster). Restate, tag NICE NG12.' },
        { t:'4–6',  h:'Baseline + IBS contrast', d:'FBC/ferritin, exam ± coeliac; explain genuine IBS has no bleeding/weight loss/anaemia.' },
        { t:'6–9',  h:'Surface the fear',     d:'Colleague\u2019s diagnosis drove the safe label. Balance reassurance (most benign) with "we check".' },
        { t:'9–12', h:'Barrier + safety-net', d:'Work the appointments around term; heavy bleeding/obstruction → A&E; follow up the result.' }
      ],
      wordPics: {
        fail: 'Confirms "IBS/stress", prescribes an antispasmodic, no FIT/exam/bloods; anchors on the benign self-diagnosis at 59 with bleeding and weight loss; never surfaces the colleague-driven fear.',
        pass: 'Recognises the red-flag cluster, declines the IBS label, offers FIT + 2WW, checks bloods, and safety-nets.',
        exc:  'Kindly refuses the anchored IBS self-diagnosis and explains why it doesn\u2019t fit; states FIT + NG12 2WW; takes the baseline and contrasts genuine IBS; surfaces the colleague-driven fear without catastrophising or dismissing; problem-solves the term-time barrier; and completes FIT/2WW with follow-up.'
      },
      avoid: [
        { dont:'"Sounds like IBS from the stress — try an antispasmodic and a low-FODMAP diet."', instead:'"I can\u2019t safely call this IBS — it\u2019s new, you\u2019re 59, there\u2019s blood and weight loss. That needs a stool test and likely an urgent bowel referral first."', why:'Newly labelling IBS over 50 with bleeding/weight loss misses colorectal cancer.' },
        { dont:'"The blood\u2019s probably just from going so often, nothing to worry about."', instead:'"Any rectal bleeding with a new change in habit and weight loss has to be checked — we don\u2019t assume it\u2019s the frequency."', why:'Explaining away bleeding as a benign mechanism is exactly the anchoring error to avoid.' },
        { dont:'"You really can\u2019t put this off — you must take time off for tests." (dismissive of barrier)', instead:'"I know mid-term feels impossible — a camera test is usually one morning and we\u2019ll work around you. Your health comes before the timetable."', why:'Ignoring the genuine work barrier risks her not engaging; solving it is part of safe care.' }
      ]
    },

    'dyspepsia-alarm': {
      ceg: ['Urgent & unscheduled care', 'Prescribing & pharmacology'],
      stem: {
        name: 'Paul Mercer', age: '58 years · male',
        pmh: ['Years of dyspepsia; last ~6 weeks changed & PPI-refractory', '~5 kg weight loss; early satiety; black tarry stools once/twice (on direct asking)', 'Daily OTC ibuprofen for back pain (NOT on record); smoker; H. pylori never tested'],
        meds: ['Omeprazole', 'OTC ibuprofen'],
        allergy: 'NKDA',
        recent: '⚠ Wants a stronger PPI over the phone; "no time, short-staffed at the warehouse".',
        reason: 'Telephone — wants omeprazole dose increased.'
      },
      timeMap: [
        { t:'0–2',  h:'Don\u2019t up the dose',  d:'Changed, PPI-refractory dyspepsia + weight loss + early satiety = alarm features. A higher dose could mask it.' },
        { t:'2–4',  h:'Ask about melaena',    d:'Directly: black tarry stools? haematemesis? He won\u2019t volunteer it. Melaena = possible upper-GI bleed.' },
        { t:'4–6',  h:'Find + stop NSAID',    d:'Daily ibuprofen (off-record) — major ulcer/bleed risk. Stop it; manage back pain safely; test H. pylori.' },
        { t:'6–9',  h:'NG12 urgent OGD',      d:'Urgent OGD on 2WW for alarm-feature dyspepsia; same-day/999 if active bleeding. FBC. Restate, tag NICE NG12.' },
        { t:'9–12', h:'Barrier + safety-net', d:'Endoscopy is one morning; fit note; more melaena/haematemesis/dizziness → A&E/999; follow up.' }
      ],
      wordPics: {
        fail: 'Increases the PPI over the phone; never asks about black stools; misses the hidden daily NSAID and the melaena; applies "test and treat" despite alarm features — masking a possible bleeding ulcer or cancer.',
        pass: 'Recognises the alarm features, asks about melaena, stops the NSAID, arranges urgent OGD + H. pylori + FBC, and safety-nets.',
        exc:  'Refuses the phone dose-increase and names the alarm-feature cluster; asks specifically about melaena and acts on it; uncovers and stops the off-record daily ibuprofen; arranges urgent OGD on 2WW (or same-day if active bleeding) with H. pylori + FBC; problem-solves the work barrier; and safety-nets the GI-bleed red flags clearly.'
      },
      avoid: [
        { dont:'"No problem, I\u2019ll put a stronger omeprazole through for you."', instead:'"I can\u2019t just increase it — indigestion that\u2019s changed, isn\u2019t responding, with weight loss, needs a camera test, and a higher dose could hide what\u2019s going on."', why:'Escalating a PPI over the phone for alarm-feature dyspepsia delays diagnosis of ulcer or cancer.' },
        { dont:'"As long as there\u2019s no bleeding, we can manage this with tablets."', instead:'"Let me ask directly — have your stools been black or tarry at all? \u2026 They have. That can mean bleeding higher up and changes everything; this needs urgent assessment."', why:'Without specifically asking about melaena, a significant upper-GI bleed is missed.' },
        { dont:'"Keep taking the ibuprofen for your back, and we\u2019ll sort the stomach separately."', instead:'"Stop the ibuprofen from today — it\u2019s a common cause of stomach ulcers and bleeding, and it isn\u2019t even on your records. We\u2019ll manage your back a safer way."', why:'Continuing a daily NSAID in someone with possible GI bleeding is dangerous and a key reversible driver.' }
      ]
    }
  });

})();
