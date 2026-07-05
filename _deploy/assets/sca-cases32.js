/* ============================================================
   Reasoning GP — Case Library batch 32: "Abdominal & the cancers that hide"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 2WW stated explicitly where it maps (ovarian -> CA-125/USS;
   pancreatic -> painless jaundice/weight loss CT). Coeliac serology.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases31.js.
   ============================================================ */

(function(){

  /* ============ 121. VIDEO — Coeliac disease behind "tired all the time / IBS" ============ */
  const c121 = {
    id:'coeliac-disease', title:'"I\u2019ve had IBS for years \u2014 I just need stronger tablets"', type:'video', duration:12,
    meta:{ age:32, sex:'F', setting:'Video consultation \u2014 long-labelled "IBS" + fatigue.', system:'GI / Coeliac disease' },
    brief:'Miss Erin Doyle, 32, teacher. Years of "IBS" (bloating, loose stools, cramps) and chronic fatigue she blames on work. Recent bloods (for tiredness) show IRON-DEFICIENCY ANAEMIA; if asked: occasional mouth ulcers, and her sister has type 1 diabetes; she has lost a little weight she puts down to "being busy". She wants stronger antispasmodics/anti-diarrhoeals and "something for the tiredness". Coeliac serology not yet done. No PR bleeding. Meds: OTC loperamide.',
    script:{
      opening:'"Thanks. So I\u2019ve had IBS for years \u2014 dodgy stomach, bloating, running to the loo \u2014 I\u2019ve kind of made my peace with it. But I\u2019m SO tired lately, wiped out, and my last blood test apparently showed I\u2019m a bit anaemic. Could you just give me some stronger tablets for the tummy and maybe iron for the tiredness? I haven\u2019t got time to be ill, honestly."',
      facts:[
        { topic:'Why it may not be IBS', text:'If explored: a long "IBS" label PLUS iron-deficiency anaemia, fatigue, mouth ulcers, a little weight loss, and a first-degree relative with type 1 diabetes (an associated autoimmune condition) \u2014 this cluster points to COELIAC DISEASE being missed under the IBS label. IBS should not cause iron-deficiency anaemia; that is a flag to look further.' },
        { topic:'The test, done right',  text:'Coeliac serology (tTG-IgA with total IgA) must be done WHILE STILL EATING GLUTEN (a gluten-containing diet for ~6 weeks before testing) \u2014 a crucial, commonly-missed point; if she cuts gluten first, the test is unreliable. A positive serology leads to gastroenterology referral for confirmatory duodenal biopsy. Also investigate the iron-deficiency anaemia properly.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 beneath "just give me stronger tablets" is exhaustion that\u2019s affecting her work and her sense of herself, and a quiet fear that "something is really wrong with me" that she\u2019s been suppressing for years by normalising the symptoms. She\u2019s also a self-sacrificing "no time to be ill" type. There may be relief available: a NAMED, treatable diagnosis (rather than lifelong vague "IBS") and the prospect that going gluten-free could transform how she feels.' },
        { topic:'Why it matters',      text:'Untreated coeliac risks ongoing anaemia, osteoporosis, subfertility/pregnancy complications and (rarely) malignancy \u2014 so making the diagnosis is worth it, not just symptom-patching. The reframe from "manage my IBS" to "let\u2019s find out if this is actually coeliac" is the consultation.' },
        { topic:'What she needs',      text:'Officially: stronger anti-diarrhoeals + iron. What she needs: recognition that iron-deficiency anaemia + chronic GI symptoms shouldn\u2019t just be called IBS, coeliac serology done correctly (keep eating gluten), proper investigation of the anaemia, and the fatigue/"something\u2019s wrong" fear addressed \u2014 with the hope of a treatable diagnosis.' },
      ],
      ice:{
        ideas:'It\u2019s just her long-standing IBS plus work tiredness; stronger tummy tablets and iron will do.',
        concerns:'HIDDEN AGENDA \u2014 exhaustion affecting her work and identity, and a suppressed fear that "something is really wrong" she\u2019s normalised for years; a self-sacrificing "no time to be ill" pattern.',
        expectations:'Stronger anti-diarrhoeals and iron tablets. What she actually needs: recognition this may be coeliac, serology done correctly (still eating gluten), proper anaemia work-up, and the fatigue/fear addressed \u2014 with the hope of a treatable, named diagnosis.'
      },
      cues:['Long "IBS" + iron-deficiency anaemia + fatigue + mouth ulcers + autoimmune family history \u2014 think coeliac, not just IBS.','"Just give me iron and stronger tablets" \u2014 symptom-patching a label that may be wrong; reframe to finding the cause.','Don\u2019t advise cutting gluten before testing \u2014 the serology needs her still eating gluten.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that IRON-DEFICIENCY ANAEMIA with chronic GI symptoms should NOT simply be labelled "IBS" \u2014 it is a flag to investigate \u2014 and that the cluster (anaemia, fatigue, mouth ulcers, weight loss, autoimmune family history) points to possible COELIAC DISEASE' },
      { dom:'tasks', text:'Arranges COELIAC SEROLOGY correctly: tTG-IgA with total IgA, and crucially advises her to KEEP EATING GLUTEN (gluten-containing diet for ~6 weeks) before/at testing \u2014 not to cut gluten first, which would make the test unreliable' },
      { dom:'tasks', text:'Investigates the IRON-DEFICIENCY ANAEMIA properly (ferritin/iron studies, diet, menstrual losses) rather than just prescribing iron blindly, and recognises coeliac as a cause; plans gastroenterology referral for duodenal biopsy if serology is positive' },
      { dom:'tasks', text:'Knows the implications and associations: untreated coeliac risks anaemia, osteoporosis, subfertility and (rarely) malignancy; associated with type 1 diabetes, autoimmune thyroid disease, dermatitis herpetiformis \u2014 so making the diagnosis matters' },
      { dom:'tasks', text:'Reframes from symptom-patching to diagnosis: explains that "IBS" may be the wrong label, that this is testable, and that a positive result means a treatable condition where a gluten-free diet often transforms symptoms \u2014 rather than just stronger tablets' },
      { dom:'rto',   text:'Hears the exhaustion and the suppressed "something\u2019s wrong" fear behind the brisk request, and the self-sacrificing pattern; validates it and offers the hope of a treatable, named diagnosis' },
      { dom:'rto',   text:'Avoids dismissiveness (just relabelling/iron) and engages her in finding the cause, checking understanding of the keep-eating-gluten instruction' },
      { dom:'gs',    text:'Safety-nets and follows up: the serology and anaemia work-up plan with the gluten instruction, gastroenterology referral pathway if positive, dietitian involvement for confirmed coeliac, and a follow-up to go through results \u2014 finding the diagnosis, not patching the symptoms' },
    ],
    worked:[
      { lbl:'Question the label',   txt:'"Can I gently challenge something? You\u2019ve carried an \u2018IBS\u2019 label for years \u2014 but IBS shouldn\u2019t make you anaemic, and now your bloods show you are. That\u2019s an important clue, because it tells me there might be a specific, FINDABLE reason for both the tummy symptoms AND the exhaustion, rather than just \u2018your IBS\u2019. I don\u2019t want to keep patching it; I\u2019d like to actually work it out."' },
      { lbl:'Name the suspicion',   txt:'"Putting it together \u2014 the long tummy troubles, the anaemia, the tiredness, the mouth ulcers, and your sister\u2019s type 1 diabetes \u2014 makes me think of a condition called coeliac disease, where the gut reacts to gluten. It\u2019s common, often missed for years under an IBS label, and crucially it\u2019s very treatable once we know."' },
      { lbl:'The crucial instruction', txt:'"There\u2019s one really important thing: the blood test for it only works if you\u2019re STILL eating gluten. So please do NOT cut out bread and pasta before the test \u2014 keep eating normally, including gluten, right up to and after the blood test, or we\u2019ll get a false result and have to start again. That catches a lot of people out."' },
      { lbl:'Sort the anaemia too', txt:'"I also want to look into the anaemia properly rather than just throw iron at it \u2014 check your iron stores and why it\u2019s happening, because coeliac is one reason the body doesn\u2019t absorb iron well. If the coeliac test is positive, you\u2019d see a gut specialist for a confirming test, and a dietitian to help with the diet."' },
      { lbl:'Offer the hope',       txt:'"I know you came for stronger tablets and \u2018no time to be ill\u2019 \u2014 but I think you\u2019ve been quietly worried something\u2019s really wrong, and soldiering on. Here\u2019s the hopeful bit: if this IS coeliac, it\u2019s not something sinister, it\u2019s treatable, and a lot of people feel like a completely different person once they\u2019re off gluten. That could be your energy back."' },
      { lbl:'Plan + safety-net',    txt:'"So: keep eating gluten, I\u2019ll arrange the coeliac blood test and sort the anaemia work-up, and we\u2019ll go from there \u2014 specialist and dietitian if it\u2019s positive. If you get any new alarming symptoms \u2014 blood in your stools, ongoing weight loss, severe pain \u2014 tell me sooner. Let\u2019s find the actual answer rather than manage a label that might be wrong."' },
    ],
    learning:'A long-standing "IBS" label PLUS iron-deficiency anaemia is a red flag, not a refill request \u2014 IBS does not cause iron-deficiency anaemia, and the cluster here (anaemia, fatigue, mouth ulcers, weight loss, a first-degree relative with type 1 diabetes) points to COELIAC DISEASE being missed for years. The examinable clinical point is testing it RIGHT: coeliac serology (tTG-IgA with total IgA) is only reliable while the patient is still eating gluten, so advise her to KEEP eating gluten (~6 weeks) and NOT to cut it before testing; a positive result leads to gastroenterology referral for confirmatory duodenal biopsy, and the iron-deficiency anaemia must be investigated properly rather than blindly treated with iron. Making the diagnosis matters (untreated coeliac risks anaemia, osteoporosis, subfertility and rarely malignancy). The hidden agenda is exhaustion and a suppressed "something\u2019s really wrong" fear behind a self-sacrificing "no time to be ill" request; reframe from symptom-patching to finding the cause, and offer the genuine hope of a treatable, named diagnosis where a gluten-free diet often transforms symptoms.',
    knowledge:{
      guideline:'NICE NG20 coeliac disease · NICE iron-deficiency anaemia / GI investigation · CKS IBS (diagnosis of exclusion)',
      points:[
        { h:'IBS is a diagnosis of exclusion', t:'"IBS" requires the ABSENCE of red flags and abnormal investigations. Iron-deficiency anaemia, weight loss, PR bleeding, nocturnal symptoms, onset >50, or a family history of bowel/ovarian cancer are NOT IBS and mandate investigation. Re-examine long-standing IBS labels when a flag appears.' },
        { h:'Suspect coeliac broadly', t:'Test for coeliac in: persistent GI symptoms (often mislabelled IBS), iron/folate/B12 deficiency or unexplained anaemia, fatigue, weight loss, mouth ulcers, dermatitis herpetiformis, type 1 diabetes, autoimmune thyroid disease, and first-degree relatives of coeliac patients. It is common and frequently diagnosed late.' },
        { h:'Test correctly \u2014 keep eating gluten', t:'First-line serology: tTG-IgA WITH total IgA (to detect IgA deficiency; use IgG-based tests if IgA-deficient). The patient MUST be on a gluten-containing diet (gluten in more than one meal a day for at least 6 weeks) before testing \u2014 advise NOT to exclude gluten beforehand, or results are unreliable.' },
        { h:'Confirm and refer', t:'Positive/raised serology \u2192 refer to gastroenterology for confirmatory duodenal biopsy (still on gluten). Do not diagnose coeliac on serology alone in adults. Involve a dietitian for a confirmed diagnosis.' },
        { h:'Investigate the anaemia', t:'Confirm iron deficiency (ferritin/iron studies), seek the cause (coeliac, menstrual loss, GI loss \u2014 consider GI investigation/FIT per age and features), and treat \u2014 don\u2019t prescribe iron blindly without seeking why.' },
        { h:'Why diagnosis matters', t:'Untreated coeliac causes ongoing malabsorption/anaemia, osteoporosis, subfertility and pregnancy complications, and rarely enteropathy-associated lymphoma. A gluten-free diet usually resolves symptoms and risks \u2014 so the named diagnosis is worth pursuing, not patching.' },
        { h:'Never do', t:'Never accept iron-deficiency anaemia as "just IBS"; never advise cutting gluten before serology; never diagnose coeliac on serology alone (adults) without biopsy referral; never prescribe iron without investigating the cause; never dismiss the underlying fatigue and fear.' },
        { h:'Safety-net & follow-up', t:'Coeliac serology (on gluten) + anaemia work-up; gastroenterology referral and dietitian if positive; GI red flags (PR bleeding, weight loss, severe pain) \u2192 sooner review; follow-up to go through results and treat the cause.' }
      ]
    }
  };

  /* ============ 122. VIDEO — Persistent bloating: suspected ovarian cancer (NG12 CA-125) ============ */
  const c122 = {
    id:'ovarian-bloating', title:'"I\u2019m just bloated all the time \u2014 must be my age or IBS"', type:'video', duration:12,
    meta:{ age:54, sex:'F', setting:'Video consultation \u2014 persistent bloating + early satiety.', system:'Gynae-oncology / Suspected ovarian cancer' },
    brief:'Mrs Sandra Whitlock, 54, post-menopausal. ~8 weeks of PERSISTENT abdominal bloating/distension, feeling full quickly (early satiety), mild pelvic/abdominal discomfort, and needing to pass urine more often. She blames "getting older / a touch of IBS" and wants "something for the bloating". New IBS-type symptoms over 50 are themselves a flag. No PR bleeding. Family: an aunt had "ovarian trouble". Not on HRT. Wants a quick fix, downplays it.',
    script:{
      opening:'"Hi doctor. It\u2019s a bit embarrassing \u2014 I\u2019m just so bloated all the time, my tummy feels swollen and I get full after a few mouthfuls. I\u2019m sure it\u2019s just my age, or maybe IBS \u2014 my friend has that. Could you give me something for the bloating, maybe those peppermint capsules? I almost didn\u2019t bother coming, it feels silly making a fuss over a bit of bloating."',
      facts:[
        { topic:'Why this is a red flag', text:'PERSISTENT (not fluctuating) bloating/distension, early satiety, pelvic/abdominal pain and urinary urgency/frequency \u2014 especially occurring frequently (>12/month) and in a woman over 50 \u2014 are the classic symptom cluster of OVARIAN CANCER, which notoriously masquerades as "IBS" or "getting older". Importantly, NEW IBS-type symptoms arising for the first time over age 50 should prompt ovarian (and bowel) cancer consideration, NOT an IBS label.' },
        { topic:'The NG12 pathway',    text:'NG12: in a woman (especially \u226550) with persistent/frequent symptoms of bloating, early satiety, pelvic/abdominal pain or urinary urgency/frequency, carry out tests \u2014 measure serum CA-125; if raised (\u226535 IU/mL), arrange an ultrasound of the abdomen and pelvis; and refer urgently (2WW) if ascites and/or a pelvic/abdominal mass is found (not due to fibroids). Examine the abdomen/pelvis for a mass/ascites.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 the "it\u2019s silly, just my age" minimisation masks a quiet, frightening suspicion: her aunt had "ovarian trouble" and Sandra has half-wondered if this is the same, but is terrified to voice it and so dresses it up as trivial bloating. She\u2019s also embarrassed and reluctant to "waste the doctor\u2019s time". Surfacing the fear and validating that she was RIGHT to come is central.' },
        { topic:'The trap',            text:'The classic, dangerous error is to accept the "IBS/age" framing and prescribe peppermint/antispasmodics for what is persistent, new, over-50 bloating \u2014 the very presentation NG12 exists to catch. New IBS-type symptoms over 50 are investigated, not labelled.' },
        { topic:'What she needs',      text:'Officially: peppermint capsules for "bloating". What she needs: recognition of the ovarian-cancer symptom cluster, examination, the NG12 work-up (CA-125 \u00b1 ultrasound, 2WW if mass/ascites), the IBS-over-50 caution, and her unspoken fear validated \u2014 not symptom-patching.' },
      ],
      ice:{
        ideas:'It\u2019s just her age or IBS; peppermint/antispasmodics will sort the bloating.',
        concerns:'HIDDEN AGENDA \u2014 her aunt had "ovarian trouble" and she half-suspects this is the same, but is terrified to say it and dresses it up as trivial; embarrassed about "wasting time".',
        expectations:'Something for the bloating and to be sent away. What she actually needs: recognition of the ovarian-cancer symptom cluster, examination, the NG12 CA-125/ultrasound pathway, and her unspoken fear validated.'
      },
      cues:['Persistent bloating + early satiety + pelvic pain + urinary frequency in a woman over 50 \u2014 the ovarian-cancer cluster, not IBS.','NEW IBS-type symptoms first appearing over 50 \u2014 investigate (CA-125/ovarian + bowel), don\u2019t label IBS.','"It\u2019s silly, just my age" + an aunt with "ovarian trouble" \u2014 minimisation masking a real, unspoken fear.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the OVARIAN-CANCER symptom cluster \u2014 PERSISTENT bloating/distension, early satiety, pelvic/abdominal pain, urinary urgency/frequency, especially frequent and in a woman \u226550 \u2014 and does NOT accept the "IBS/getting older" framing or prescribe peppermint for it' },
      { dom:'tasks', text:'Knows that NEW IBS-type symptoms presenting for the FIRST time over age 50 warrant investigation (ovarian and bowel cancer consideration), not an IBS label' },
      { dom:'tasks', text:'Carries out the NG12 pathway: examines the abdomen/pelvis for a mass or ascites, measures serum CA-125, and arranges abdominal/pelvic ULTRASOUND if CA-125 is raised (\u226535 IU/mL) \u2014 with URGENT (2WW) referral if ascites and/or a pelvic/abdominal mass is found; tagged NICE NG12' },
      { dom:'tasks', text:'Weights the risk/associations appropriately (post-menopausal, age, family history of ovarian/breast cancer) and considers the bowel-cancer differential too \u2014 without delaying the ovarian work-up' },
      { dom:'tasks', text:'Balances honesty and reassurance: explains the tests are to be thorough and that most such symptoms aren\u2019t cancer, while taking the cluster seriously \u2014 avoiding both false reassurance and catastrophising' },
      { dom:'rto',   text:'Surfaces the unspoken fear (the aunt\u2019s "ovarian trouble") gently, validates that she was RIGHT to come (not "making a fuss"), and does not collude with the "it\u2019s silly/just my age" minimisation' },
      { dom:'rto',   text:'Handles embarrassment and the "wasting your time" worry with warmth so she engages with the work-up rather than disengaging' },
      { dom:'gs',    text:'Safety-nets and follows up: the CA-125/ultrasound plan and 2WW criteria, what symptoms warrant sooner review, the timeframe and what to expect, and a follow-up to go through results \u2014 ensuring the work-up happens' },
    ],
    worked:[
      { lbl:'Refuse the “silly” framing', txt:'"First, please don\u2019t apologise \u2014 you were absolutely right to come, and this is not silly at all. Persistent bloating, feeling full quickly, and needing the loo more often, going on for two months in a woman your age \u2014 that\u2019s exactly the kind of thing I want to see, not brush off. So let\u2019s take it seriously together."' },
      { lbl:'Why not just IBS',     txt:'"I know IBS gets blamed for bloating \u2014 but here\u2019s an important thing: brand-new tummy symptoms that start for the first time after 50 we don\u2019t just call IBS, because occasionally they\u2019re a sign of something in the ovaries or bowel we\u2019d want to catch early. That\u2019s not me saying it IS that \u2014 it\u2019s me saying we check properly rather than assume."' },
      { lbl:'The plan / NG12',      txt:'"So here\u2019s what I\u2019d do: examine your tummy today, and arrange a blood test called CA-125 plus, if that\u2019s raised, an ultrasound scan of your tummy and pelvis. There\u2019s clear national guidance for exactly these symptoms, and it\u2019s about being thorough. If anything turned up, you\u2019d be seen urgently \u2014 but most of the time these tests are reassuring."' },
      { lbl:'Surface the real fear', txt:'"Can I gently ask \u2014 you mentioned your aunt had ovarian trouble. Has it crossed your mind that this might be something like that? \u2026 Thank you for telling me. That fear makes complete sense, and it\u2019s exactly why getting it checked is the right thing \u2014 so you\u2019re not lying awake wondering. Naming it isn\u2019t making a fuss; it\u2019s being sensible."' },
      { lbl:'Balance it',           txt:'"Two honest things at once: the great majority of women with these symptoms do NOT have anything sinister, and the tests are mostly to put your mind at rest. And, because the symptoms fit a pattern we take seriously, we do them promptly rather than wait and see. Both true."' },
      { lbl:'Safety-net',           txt:'"I\u2019ll examine you, sort the CA-125 and the scan if needed, and we\u2019ll go through the results together. If meanwhile the bloating gets worse, you can\u2019t eat, you lose weight, or get any bleeding, tell me sooner. You came in worried you were wasting my time \u2014 the opposite is true; you\u2019ve done exactly the right thing."' },
    ],
    learning:'Persistent (not fluctuating) bloating/distension, early satiety, pelvic/abdominal pain and urinary urgency/frequency \u2014 especially frequent and in a woman \u226550 \u2014 is the classic symptom cluster of OVARIAN CANCER, which notoriously hides as "IBS" or "getting older". A key NG12 caution: NEW IBS-type symptoms presenting for the first time over age 50 should be investigated (ovarian AND bowel cancer), not labelled IBS. The pathway is to examine for a mass/ascites, measure serum CA-125, arrange abdominal/pelvic ultrasound if CA-125 is raised (\u226535 IU/mL), and refer urgently (2WW) if ascites and/or a pelvic/abdominal mass is found \u2014 the very presentation NG12 exists to catch, so prescribing peppermint for it is the dangerous error. The examinable hidden agenda is minimisation ("it\u2019s silly, just my age") masking a real, unspoken fear (an aunt\u2019s "ovarian trouble"); surface and validate it, affirm she was right to come rather than "making a fuss", balance honesty with reassurance (most such symptoms aren\u2019t cancer; we test to be thorough), and ensure the work-up happens.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (ovarian) · NICE CG122 ovarian cancer · CKS ovarian cancer',
      points:[
        { h:'Recognise the cluster', t:'Ovarian cancer commonly presents with persistent: abdominal distension/bloating, early satiety/loss of appetite, pelvic or abdominal pain, and increased urinary urgency/frequency \u2014 occurring frequently (>12 times/month) and persistently. Also fatigue, change in bowel habit, weight loss. It frequently masquerades as IBS or "ageing".' },
        { h:'New IBS over 50 = investigate', t:'IBS rarely presents for the first time in women aged \u226550. NEW IBS-type symptoms over 50 should prompt investigation for ovarian and bowel cancer rather than an IBS diagnosis. Re-evaluate any recent "IBS" label in this group.' },
        { h:'NG12 ovarian pathway', t:'Carry out tests in primary care for the symptom cluster: measure serum CA-125. If CA-125 \u226535 IU/mL, arrange an abdominal and pelvic ULTRASOUND. Refer urgently (2WW) if ultrasound suggests ovarian cancer, or if ascites and/or a pelvic or abdominal mass (not obviously fibroids) is found on examination/imaging. Examine for a mass and ascites.' },
        { h:'CA-125 caveats', t:'CA-125 can be raised by benign conditions (endometriosis, fibroids, menstruation, PID, ascites of other cause) and can be normal in some ovarian cancers (especially early/mucinous). Interpret with symptoms and ultrasound; persistent symptoms with a normal CA-125 still warrant ongoing assessment/safety-netting.' },
        { h:'Risk factors', t:'Increasing age/post-menopause, family history of ovarian/breast cancer (BRCA), nulliparity, endometriosis. Their presence raises concern but their absence does not exclude \u2014 the symptom pattern drives the work-up.' },
        { h:'Communication', t:'Counter "it\u2019s silly/just my age" minimisation; affirm the patient was right to present; surface and validate the unspoken cancer fear; balance honest reassurance (most are not cancer) with prompt, thorough investigation. Avoid both false reassurance and catastrophising.' },
        { h:'Never do', t:'Never label persistent new over-50 bloating as IBS or treat it with peppermint without investigation; never skip examination/CA-125; never miss the 2WW trigger (mass/ascites); never collude with minimisation; never give false reassurance from a single normal CA-125 if symptoms persist.' },
        { h:'Safety-net & follow-up', t:'CA-125 \u00b1 ultrasound with 2WW criteria; abdominal/pelvic examination; worsening symptoms/weight loss/inability to eat/bleeding \u2192 sooner review; persistent symptoms despite normal tests \u2192 reassess; follow-up to review results.' }
      ]
    }
  };

  /* ============ 123. VIDEO — Painless jaundice: suspected pancreatic cancer (NG12) ============ */
  const c123 = {
    id:'painless-jaundice', title:'"My wife says I\u2019ve gone yellow \u2014 but I feel okay-ish"', type:'video', duration:12,
    meta:{ age:68, sex:'M', setting:'Video consultation \u2014 painless jaundice + weight loss.', system:'GI / Suspected pancreatic/biliary cancer' },
    brief:'Mr Roy Pemberton, 68. His wife noticed his eyes/skin have gone YELLOW over ~2 weeks; he also reports dark urine, pale stools, itching, and \u2014 if asked \u2014 has lost ~6 kg without trying and his appetite is poor. Crucially the jaundice is PAINLESS. He minimises ("I feel okay-ish, probably my liver from the odd drink"). Ex-smoker. No fever/rigors. This is painless jaundice with weight loss in an older adult \u2014 a pancreatic/biliary 2WW pattern. Wants reassurance it\u2019s "just my liver".',
    script:{
      opening:'"Afternoon. The wife\u2019s been on at me \u2014 she reckons I\u2019ve gone a bit yellow, eyes and that. I feel okay-ish, honestly, maybe a bit tired and off my food. I\u2019ve enjoyed a drink over the years so I\u2019m guessing it\u2019s my liver giving me a warning, and I\u2019ll cut back. Can you just reassure me it\u2019ll sort itself out? I don\u2019t really want a load of hospital tests if it\u2019s just the booze."',
      facts:[
        { topic:'Why this is sinister', text:'PAINLESS jaundice (yellow sclera/skin, dark urine, pale stools, itch from bile salts) with UNINTENTIONAL WEIGHT LOSS and anorexia in an older adult is a red-flag pattern for PANCREATIC (head of pancreas) or biliary/peri-ampullary cancer obstructing the bile duct \u2014 classically painless, unlike a gallstone (which usually causes pain/Courvoisier\u2019s law thinking). This is NOT "just the booze" until proven otherwise.' },
        { topic:'The NG12 pathway',    text:'NG12: refer people aged 40+ with jaundice using a suspected-cancer pathway; arrange URGENT direct-access CT (or ultrasound if CT unavailable) for suspected pancreatic cancer in those 60+ with weight loss AND any of diarrhoea/back pain/abdominal pain/nausea/vomiting/constipation/new-onset diabetes. Painless jaundice + weight loss in a 68-year-old needs urgent imaging and 2WW referral, plus urgent LFTs/bloods.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 the "it\u2019s just my liver from the drink, I\u2019ll cut back" is partly genuine belief and partly AVOIDANCE rooted in fear and guilt: he\u2019s frightened it\u2019s serious, blames himself (the drinking), and would rather attribute it to something he can "fix" by cutting down than face hospital tests. His wife\u2019s concern is the reliable signal. There may also be a stoical "don\u2019t want to be a burden" thread. Surfacing the fear and not colluding with the alcohol self-blame is key.' },
        { topic:'The alcohol red herring', text:'Alcohol can cause liver disease \u2014 but painless obstructive jaundice (pale stools, dark urine) with weight loss points to bile-duct obstruction, not simply alcoholic hepatitis; accepting the "just the booze" explanation and advising "cut down and review" would be the dangerous miss.' },
        { topic:'What he needs',       text:'Officially: reassurance it\u2019s his liver and will settle. What he needs: recognition that painless jaundice + weight loss in an older adult is a 2WW red flag, urgent imaging (CT) and LFTs/bloods, urgent suspected-cancer referral, and his fear/alcohol-guilt handled so he accepts the work-up \u2014 not "cut down and see".' },
      ],
      ice:{
        ideas:'It\u2019s his liver from years of drinking; cutting back and waiting will sort it.',
        concerns:'HIDDEN AGENDA \u2014 frightened it\u2019s serious and blames himself (the drinking), so he\u2019d rather attribute it to something he can "fix" than face hospital tests; stoical "don\u2019t want to be a burden"; his wife\u2019s concern is the real signal.',
        expectations:'Reassurance it\u2019s his liver and will settle with cutting down. What he actually needs: recognition of the painless-jaundice red flag, urgent CT + bloods + 2WW referral, and his fear/alcohol-guilt addressed.'
      },
      cues:['PAINLESS jaundice + dark urine + pale stools + unintentional weight loss in a 68-year-old \u2014 pancreatic/biliary 2WW, not "just the booze".','"It\u2019s my liver from the drink, I\u2019ll cut back" \u2014 alcohol self-blame as avoidance; don\u2019t collude.','Wife noticed the yellow / he "feels okay-ish" \u2014 collateral concern is the reliable signal; minimisation underneath.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises PAINLESS JAUNDICE with unintentional WEIGHT LOSS and anorexia in an older adult as a red-flag pattern for PANCREATIC/biliary cancer (bile-duct obstruction) \u2014 and does NOT accept the "just my liver from the drink, cut down and review" explanation' },
      { dom:'tasks', text:'Acts on the NG12 pathway: arranges URGENT direct-access CT (or ultrasound if CT unavailable) and urgent LFTs/bloods, and refers on a suspected-cancer (2WW) pathway \u2014 recognising jaundice in a 40+/60+ adult with weight loss triggers urgent imaging/referral; tagged NICE NG12' },
      { dom:'tasks', text:'Confirms the obstructive picture and screens associated features: dark urine, pale stools, pruritus (bile salts), weight loss, anorexia, new diabetes, back/abdominal pain \u2014 and distinguishes painless obstructive jaundice from simple alcoholic liver disease' },
      { dom:'tasks', text:'Excludes acute deterioration/cholangitis (fever, rigors, severe pain, confusion \u2014 Charcot\u2019s triad) which would need EMERGENCY admission rather than the routine 2WW route \u2014 and safety-nets for it' },
      { dom:'tasks', text:'Addresses alcohol proportionately and honestly: takes a drinking history and gives advice, but does NOT reduce the diagnosis to "the booze" or let it delay the cancer work-up' },
      { dom:'rto',   text:'Heeds the wife\u2019s collateral concern as the reliable signal, surfaces the fear and alcohol-guilt-driven avoidance, and does not collude with the self-blame or the minimisation' },
      { dom:'rto',   text:'Balances honesty with compassion so a frightened, stoical man accepts urgent assessment; avoids both bluntness and false reassurance' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent CT/bloods and 2WW referral with timeframe, cholangitis red flags \u2192 emergency, what to expect, and a follow-up to go through results \u2014 ensuring the work-up happens rather than "cut down and see"' },
    ],
    worked:[
      { lbl:'Heed the wife, refuse the reframe', txt:'"I\u2019m really glad your wife pushed you to come \u2014 she\u2019s spotted something important. Going yellow, with dark urine and pale stools and losing weight, isn\u2019t something I can put down to a few drinks and tell you to cut back. That pattern can mean a blockage in the tube that drains the liver, and we need to find out why \u2014 properly and promptly."' },
      { lbl:'Name it honestly',     txt:'"I\u2019m going to be straight with you, because you\u2019d want that: in someone your age, yellowing with weight loss and no pain needs urgent tests to rule out something serious in the pancreas or bile ducts. It might not be \u2014 but it\u2019s not something we \u2018wait and see\u2019 on. I\u2019d rather check quickly and reassure you than miss the chance to act."' },
      { lbl:'The plan / 2WW',       txt:'"So here\u2019s what I\u2019m arranging: urgent blood tests today, and an urgent scan \u2014 a CT \u2014 and a referral to the specialists to be seen within two weeks. There\u2019s clear national guidance for exactly this. It\u2019s the fastest way to get you answers."' },
      { lbl:'The alcohol, fairly',  txt:'"On the drinking \u2014 yes, we\u2019ll talk about it and I\u2019ll help you cut down, that\u2019s good for you whatever. But I don\u2019t want you blaming yourself and assuming it\u2019s \u2018just the booze\u2019, because that could mean missing something we can act on. This isn\u2019t about fault; it\u2019s about finding the cause."' },
      { lbl:'Safety-net (cholangitis)', txt:'"One important thing while we sort the tests: if you suddenly get a fever or shivering attacks, bad tummy pain, or feel confused \u2014 that\u2019s an emergency, go straight to hospital or call 999, because a blocked, infected bile duct needs treating fast. Otherwise, I\u2019ll get the urgent scan and referral moving today."' },
      { lbl:'Hold him',             txt:'"I know hospital tests are the last thing you wanted, and I can see you\u2019d rather not be a fuss \u2014 but you\u2019re not. Getting this looked at quickly is the sensible, brave thing, and your wife will be glad you did. I\u2019ll chase your results and we\u2019ll go through everything together. You\u2019re not facing this on your own."' },
    ],
    learning:'PAINLESS jaundice (yellow sclera/skin, dark urine, pale stools, pruritus) with unintentional WEIGHT LOSS and anorexia in an older adult is a red-flag pattern for PANCREATIC (head of pancreas) or biliary/peri-ampullary cancer obstructing the bile duct \u2014 classically painless \u2014 and must NOT be accepted as "just the booze, cut down and review". NG12: refer adults 40+ with jaundice on a suspected-cancer pathway, and arrange urgent direct-access CT (or ultrasound if CT unavailable) for suspected pancreatic cancer in those 60+ with weight loss and associated features, plus urgent LFTs/bloods. Exclude acute cholangitis (Charcot\u2019s triad \u2014 fever/rigors, pain, jaundice \u00b1 confusion) which needs emergency admission, and safety-net for it. The examinable hidden agenda is alcohol-guilt-driven avoidance: he blames the drinking and would rather attribute it to something he can "fix" than face hospital tests, while his wife\u2019s collateral concern is the reliable signal. Heed her, surface and address the fear and self-blame without colluding, handle alcohol proportionately without reducing the diagnosis to it or delaying the work-up, and ensure urgent imaging/referral happens.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (pancreatic/hepatobiliary) · CKS jaundice · cholangitis (emergency)',
      points:[
        { h:'Painless obstructive jaundice = red flag', t:'Painless jaundice with dark urine, pale stools and pruritus indicates obstructive (post-hepatic) jaundice; with weight loss/anorexia in an older adult it strongly suggests pancreatic head or biliary/peri-ampullary malignancy (Courvoisier: a palpable, non-tender gallbladder with jaundice is unlikely to be stones). Do not attribute to alcohol by default.' },
        { h:'NG12 pathways', t:'Refer adults aged 40+ with jaundice using a suspected-cancer pathway. Offer URGENT direct-access CT (or urgent ultrasound if CT not available) to assess for pancreatic cancer in people aged 60+ with weight loss PLUS any of: diarrhoea, back pain, abdominal pain, nausea, vomiting, constipation or new-onset diabetes. Arrange urgent LFTs/bloods alongside.' },
        { h:'Characterise the jaundice', t:'Distinguish pre-hepatic (haemolysis), hepatic (alcohol/viral/drug hepatitis \u2014 often with deranged transaminases, risk factors) and post-hepatic/obstructive (raised ALP/bilirubin, pale stools/dark urine). The obstructive pattern with weight loss drives urgent imaging.' },
        { h:'Exclude cholangitis (emergency)', t:'Ascending cholangitis (Charcot\u2019s triad: fever/rigors, RUQ pain, jaundice; Reynolds\u2019 pentad adds hypotension and confusion) is a medical emergency needing admission, not a 2WW. Screen for and safety-net these features.' },
        { h:'Alcohol \u2014 proportionate, not the whole story', t:'Take an alcohol history and advise reduction, but do not reduce painless obstructive jaundice with weight loss to "alcoholic liver disease" \u2014 that misframing and "cut down and review" is the dangerous miss. Address self-blame without colluding.' },
        { h:'Heed collateral history', t:'A partner noticing the jaundice while the patient minimises ("I feel okay-ish") is a reliable signal. Surface the fear and avoidance, validate that presenting was right, and ensure the urgent work-up proceeds.' },
        { h:'Never do', t:'Never attribute painless jaundice + weight loss to alcohol and advise "cut down and review"; never delay urgent CT/2WW referral; never miss cholangitis red flags; never collude with alcohol self-blame/minimisation; never let stoicism defer assessment.' },
        { h:'Safety-net & follow-up', t:'Urgent CT (or ultrasound) + LFTs/bloods + 2WW referral with timeframe; cholangitis features (fever/rigors, severe pain, confusion) \u2192 999/emergency; alcohol advice; follow-up to review results.' }
      ]
    }
  };

  /* ============ 124. TELEPHONE — Right-upper-quadrant pain: biliary colic vs the emergencies ============ */
  const c124 = {
    id:'biliary-colic', title:'"Bad indigestion after my takeaway \u2014 just need strong antacids"', type:'telephone', duration:12,
    meta:{ age:41, sex:'F', setting:'Telephone \u2014 recurrent RUQ pain after fatty food.', system:'GI / Gallstone disease' },
    brief:'Mrs Aisha Khan, 41. Rings about recurrent severe RUQ/epigastric pain coming on ~1 hour after fatty/large meals (takeaways), lasting 1\u20133 hours, sometimes radiating to the right shoulder blade, with nausea \u2014 then settling. She calls it "really bad indigestion" and wants strong antacids. Several episodes over weeks. CRUCIAL today: this episode has lasted >6 hours, she has a fever and feels generally unwell \u2014 suggesting it\u2019s no longer simple biliary colic. Overweight, ?family history gallstones. Wants a phone remedy.',
    script:{
      opening:'"Hi \u2014 I keep getting this horrible indigestion, usually after a takeaway, up under my right ribs, comes on after eating and it\u2019s really intense for a couple of hours then goes. I\u2019ve had it a few times. Could you just recommend some strong antacids or acid tablets over the phone? Though I\u2019ll be honest, this time it\u2019s been going since this morning and I feel a bit feverish and rough with it. But it\u2019s just indigestion, right?"',
      facts:[
        { topic:'The biliary-colic pattern', text:'If explored: severe RUQ/epigastric pain coming on after FATTY/large meals, lasting 1\u20133 hours then settling, radiating to the right scapula/shoulder, with nausea, recurrent over weeks \u2014 the classic picture of BILIARY COLIC from gallstones (not "indigestion"). Risk factors: female, forties, overweight (and family history) \u2014 the classic profile.' },
        { topic:'The RED FLAG today',   text:'CRITICAL \u2014 today\u2019s episode is DIFFERENT: pain persisting >6 hours, FEVER, and feeling systemically unwell. That suggests acute CHOLECYSTITIS (inflamed/infected gallbladder) \u2014 or, with jaundice, ascending cholangitis \u2014 which is no longer simple colic and needs urgent assessment/admission, not phone antacids. Persistent pain + fever changes everything.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the "just indigestion, give me antacids over the phone" is driven by a wish to avoid going in (childcare \u2014 she has young kids and no easy cover, and a partner away), plus she\u2019s been normalising the recurrent attacks for weeks and minimising the fever because acknowledging it means disrupting everything. The push for a remote remedy and the buried fever are the traps. Solve the practical barrier so she accepts assessment.' },
        { topic:'The differential',     text:'Don\u2019t over-anchor on "indigestion": RUQ pain has a serious differential (cholecystitis, cholangitis, also consider cardiac/atypical, peptic ulcer, pancreatitis if epigastric/radiating to back). Today\u2019s fever + persistence mandates in-person assessment, not reassurance.' },
        { topic:'What she needs',       text:'Officially: strong antacids by phone. What she needs: recognition that recurrent post-fatty-meal RUQ pain is biliary colic (gallstones) needing proper assessment/USS and outpatient surgical referral \u2014 AND that TODAY\u2019s persistent pain + fever is a possible acute cholecystitis/cholangitis needing urgent same-day assessment/admission, with the childcare barrier solved.' },
      ],
      ice:{
        ideas:'It\u2019s just bad indigestion after rich food; strong antacids over the phone will fix it.',
        concerns:'HIDDEN AGENDA \u2014 wants to avoid going in (young kids, no childcare cover, partner away) and has been normalising the attacks and minimising today\u2019s fever because being assessed means disrupting everything.',
        expectations:'A phone recommendation for strong antacids. What she actually needs: recognition of biliary colic/gallstones AND that today\u2019s persistent pain + fever is possible acute cholecystitis needing urgent assessment \u2014 with the childcare barrier solved.'
      },
      cues:['Severe RUQ pain after fatty meals, 1\u20133h, radiating to the shoulder blade, recurrent \u2014 biliary colic (gallstones), not "indigestion".','TODAY: pain >6h + fever + feeling unwell \u2014 possible acute cholecystitis/cholangitis; urgent, not phone antacids.','"Just give me antacids, I can\u2019t come in" \u2014 avoidance driven by childcare; solve the barrier, don\u2019t collude.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the BILIARY-COLIC pattern (severe RUQ/epigastric pain after fatty/large meals, lasting hours then settling, radiating to the right scapula, recurrent, classic risk profile) as GALLSTONE disease \u2014 not "indigestion" to be treated with phone antacids' },
      { dom:'tasks', text:'Identifies TODAY\u2019s RED FLAGS \u2014 pain persisting >6 hours, FEVER, systemically unwell \u2014 as suggesting acute CHOLECYSTITIS (and screens for cholangitis: jaundice/rigors/confusion) \u2014 i.e. no longer simple colic, needing URGENT same-day assessment/admission, NOT reassurance or antacids' },
      { dom:'tasks', text:'Arranges appropriate care for TODAY: urgent in-person assessment (examination for RUQ tenderness/Murphy\u2019s sign, fever, jaundice) and likely admission/acute surgical referral for suspected cholecystitis/cholangitis \u2014 rather than a remote remedy' },
      { dom:'tasks', text:'Plans the BILIARY-COLIC work-up for the recurrent attacks (once acute issue managed): liver function tests and ULTRASOUND for gallstones, lifestyle/dietary advice, and outpatient surgical referral for cholecystectomy as appropriate' },
      { dom:'tasks', text:'Keeps the differential open (cardiac/atypical, peptic ulcer, pancreatitis) and does not over-anchor on "indigestion", recognising the fever/persistence mandates assessment' },
      { dom:'rto',   text:'Hears the avoidance and surfaces the childcare barrier, problem-solving it as part of the plan rather than colluding with "just antacids"; takes the buried fever seriously without panic' },
      { dom:'rto',   text:'Conveys why today is different clearly and kindly so she accepts urgent assessment despite wanting to avoid it' },
      { dom:'gs',    text:'Safety-nets and acts: urgent same-day assessment today with the childcare solved; cholangitis/sepsis red flags (high fever/rigors, jaundice, confusion, severe worsening) \u2192 999/A&E; the ongoing gallstone work-up; confirms she will be seen and follows up' },
    ],
    worked:[
      { lbl:'Reframe “indigestion”', txt:'"What you\u2019re describing \u2014 intense pain under the right ribs an hour or so after fatty food, lasting a couple of hours, spreading to your shoulder blade, happening again and again \u2014 that\u2019s not really indigestion. That\u2019s the classic picture of gallstones, and it needs proper looking at rather than antacids over the phone."' },
      { lbl:'Catch today\u2019s red flag', txt:'"But there\u2019s something more urgent today \u2014 you said this one\u2019s been going since this morning AND you feel feverish and rough. That\u2019s different from your usual attacks: when gallstone pain doesn\u2019t settle and you get a fever, it can mean the gallbladder\u2019s become inflamed or infected, which we treat urgently, today \u2014 not with antacids."' },
      { lbl:'The plan for today',   txt:'"So I don\u2019t want to leave this on the phone. You need to be seen and examined today \u2014 a fever with this pain means we check for infection and likely get you assessed in hospital. I\u2019d rather act now than have it worsen overnight."' },
      { lbl:'Solve the barrier',    txt:'"I suspect part of why you wanted a quick phone fix is the kids and getting cover \u2014 am I right? \u2026 Let\u2019s sort that together, because it\u2019s part of the medical plan. Is there anyone who can come, even for a couple of hours? If it\u2019s genuinely impossible, tell me and we\u2019ll work out the safest way to get you seen."' },
      { lbl:'Sepsis safety-net',    txt:'"Important: if you get shaking chills/rigors, go yellow in the eyes or skin, become confused, or the pain gets much worse \u2014 that\u2019s a 999/A&E emergency, don\u2019t wait, because an infected blocked system needs treating fast. Keep it in mind while we organise today."' },
      { lbl:'The longer plan',      txt:'"Once today\u2019s sorted, we\u2019ll get an ultrasound to confirm the gallstones and your liver tests, and talk about having the gallbladder removed, which is the usual fix so these attacks stop. But first \u2014 let\u2019s get you assessed today. You rang for antacids; what you actually need is to be seen, and I\u2019m going to make sure that happens safely."' },
    ],
    learning:'Severe RUQ/epigastric pain coming on after fatty/large meals, lasting 1\u20133 hours then settling, radiating to the right scapula, recurrent, in the classic risk profile (female, forties, overweight, family history) is BILIARY COLIC from gallstones \u2014 not "indigestion" for phone antacids \u2014 and warrants LFTs, ultrasound and outpatient surgical referral. The examinable pivot is recognising when it is NO LONGER simple colic: today\u2019s episode persisting >6 hours WITH FEVER and systemic upset suggests acute CHOLECYSTITIS (screen also for cholangitis \u2014 jaundice, rigors, confusion), needing urgent same-day assessment/admission, not reassurance. Keep the differential open (cardiac/atypical, peptic ulcer, pancreatitis). The hidden agenda is avoidance driven by a childcare barrier and minimisation of the fever; surface and problem-solve the barrier as part of the plan rather than colluding with "just antacids", convey clearly why today is different, arrange urgent assessment with a sepsis/cholangitis safety-net (999/A&E for rigors, jaundice, confusion, severe worsening), and plan the ongoing gallstone work-up once the acute issue is managed.',
    knowledge:{
      guideline:'NICE CG188 gallstone disease · CKS cholecystitis/biliary colic · sepsis (NG51)',
      points:[
        { h:'Recognise biliary colic', t:'Episodic severe RUQ/epigastric pain, often after fatty/large meals, building over ~1 hour, lasting up to a few hours then resolving, may radiate to the right shoulder/scapula, with nausea \u2014 recurrent. Classic risk: female, forties, overweight, fertile, family history. It is gallstone disease, not "indigestion".' },
        { h:'Spot the complications', t:'Acute CHOLECYSTITIS: persistent (>~6 h) RUQ pain WITH fever/systemic upset, RUQ tenderness/Murphy\u2019s sign \u2014 needs urgent assessment/admission. Ascending CHOLANGITIS: fever/rigors + RUQ pain + jaundice (\u00b1 hypotension/confusion) \u2014 a medical emergency. Also consider gallstone pancreatitis (epigastric pain radiating to back, vomiting). Persistent pain + fever means it is no longer simple colic.' },
        { h:'Don\u2019t over-anchor on "indigestion"', t:'RUQ/epigastric pain has a serious differential \u2014 cardiac/atypical ischaemia, peptic ulcer, pancreatitis, hepatitis \u2014 besides gallstones. Fever and persistence mandate in-person assessment, not remote antacid advice.' },
        { h:'Investigate gallstones', t:'For suspected gallstone disease: LFTs and abdominal ULTRASOUND (first-line for gallstones). Refer for consideration of laparoscopic cholecystectomy for symptomatic gallstones; manage acute complications urgently in secondary care.' },
        { h:'Solve access barriers', t:'Avoidance of assessment is often driven by practical barriers (childcare, work, transport). Treat these as part of the clinical task \u2014 problem-solve cover and route to assessment \u2014 rather than colluding with a request for remote treatment when red flags are present.' },
        { h:'Sepsis awareness', t:'Fever with biliary obstruction/infection can progress to sepsis. Safety-net explicitly: rigors, jaundice, confusion, severe worsening, or signs of sepsis \u2192 999/A&E. Have a low threshold for urgent assessment.' },
        { h:'Never do', t:'Never treat persistent RUQ pain + fever as "indigestion" with phone antacids; never miss cholecystitis/cholangitis red flags; never over-anchor on indigestion and skip the differential; never collude with avoidance when red flags are present; never delay urgent assessment for a childcare barrier without solving it.' },
        { h:'Safety-net & follow-up', t:'Urgent same-day assessment for suspected cholecystitis/cholangitis (with the practical barrier solved); sepsis/cholangitis red flags \u2192 999/A&E; LFTs + ultrasound and surgical referral for the gallstone disease; confirm attendance and follow up.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c121, c122, c123, c124);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'coeliac-disease': {
      ceg: ['Investigations & results', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Erin Doyle', age: '32 years · female',
        pmh: ['Years of "IBS" (bloating, loose stools, cramps) + chronic fatigue', 'Recent IRON-DEFICIENCY ANAEMIA; occasional mouth ulcers; slight weight loss', 'Sister has type 1 diabetes'],
        meds: ['OTC loperamide'],
        allergy: 'NKDA',
        recent: 'Wants stronger anti-diarrhoeals + iron; "no time to be ill".',
        reason: 'Video consultation — long "IBS" + fatigue.'
      },
      timeMap: [
        { t:'0–2',  h:'Question the label',  d:'IBS shouldn\u2019t make you anaemic — the anaemia is a clue to find the cause, not patch it.' },
        { t:'2–4',  h:'Name the suspicion',  d:'Long IBS + anaemia + fatigue + mouth ulcers + autoimmune family history → think coeliac.' },
        { t:'4–6',  h:'The crucial instruction', d:'tTG-IgA + total IgA — but ONLY reliable while still eating gluten. Do NOT cut gluten before the test.' },
        { t:'6–9',  h:'Sort the anaemia + refer', d:'Iron studies + cause; gastro referral for biopsy if serology positive; dietitian.' },
        { t:'9–12', h:'Offer hope + safety-net', d:'A treatable, named diagnosis — gluten-free often transforms energy. GI red flags → sooner; follow up results.' }
      ],
      wordPics: {
        fail: 'Relabels it "IBS" and hands over stronger anti-diarrhoeals + iron; never connects the anaemia to coeliac; or tests coeliac after telling her to cut gluten (false result); misses a treatable diagnosis.',
        pass: 'Recognises anaemia + GI symptoms isn\u2019t just IBS, arranges coeliac serology correctly (keep eating gluten) and an anaemia work-up, and refers if positive.',
        exc:  'Challenges the IBS label using the anaemia clue; names the coeliac suspicion from the full cluster; gives the crucial keep-eating-gluten instruction; investigates the anaemia\u2019s cause and plans biopsy referral; and reframes from symptom-patching to a treatable diagnosis, addressing the exhaustion and suppressed fear.'
      },
      avoid: [
        { dont:'"Sounds like your IBS playing up — I\u2019ll give you stronger tablets and some iron."', instead:'"IBS shouldn\u2019t make you anaemic — that\u2019s a clue. Let\u2019s test for coeliac and find why you\u2019re anaemic, rather than just patch it."', why:'Relabelling anaemia + GI symptoms as IBS misses coeliac and other findable causes.' },
        { dont:'"Try cutting out gluten and see if it helps, then we\u2019ll test."', instead:'"Please keep eating gluten until after the blood test — cutting it first makes the coeliac test unreliable."', why:'Excluding gluten before serology causes false-negative results and a missed diagnosis.' },
        { dont:'"The iron will sort the tiredness, don\u2019t worry about the cause."', instead:'"I want to know WHY you\u2019re anaemic — coeliac stops you absorbing iron — so we treat the cause, not just top up the iron."', why:'Treating iron-deficiency anaemia blindly without seeking the cause misses serious underlying disease.' }
      ]
    },

    'ovarian-bloating': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Sandra Whitlock', age: '54 years · female',
        pmh: ['~8 weeks PERSISTENT bloating/distension + early satiety + pelvic discomfort + urinary frequency', 'Post-menopausal; aunt had "ovarian trouble"', 'Not on HRT'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Blames "age/IBS"; wants peppermint capsules; "almost didn\u2019t bother coming".',
        reason: 'Video consultation — persistent bloating.'
      },
      timeMap: [
        { t:'0–2',  h:'Refuse "silly"',     d:'She was RIGHT to come. Persistent bloating + early satiety + urinary frequency over 50 is exactly what we want to see, not brush off.' },
        { t:'2–4',  h:'Why not just IBS',    d:'New tummy symptoms first appearing over 50 aren\u2019t just IBS — ovarian/bowel cancer must be considered.' },
        { t:'4–6',  h:'NG12 pathway',        d:'Examine for mass/ascites; CA-125; ultrasound if raised; urgent 2WW if mass/ascites. Tag NICE NG12.' },
        { t:'6–9',  h:'Surface the fear',    d:'The aunt\u2019s "ovarian trouble". Validate the unspoken cancer fear; checking is sensible, not a fuss.' },
        { t:'9–12', h:'Balance + safety-net', d:'Most aren\u2019t cancer; we test to be thorough. Worsening/weight loss/bleeding → sooner; review results.' }
      ],
      wordPics: {
        fail: 'Accepts "age/IBS" and prescribes peppermint for persistent new over-50 bloating; never examines or sends CA-125; misses the ovarian-cancer cluster and NG12; leaves the aunt-driven fear unaddressed.',
        pass: 'Recognises the cluster, examines and sends CA-125 ± ultrasound per NG12, and validates the fear with a safety-net.',
        exc:  'Refuses the "silly/just my age" framing and affirms she was right to come; applies the over-50 IBS caution; runs the NG12 CA-125/ultrasound pathway with the 2WW triggers; surfaces and validates the aunt-driven cancer fear; and balances honest reassurance with prompt, thorough investigation.'
      },
      avoid: [
        { dont:'"Bloating at your age is usually just IBS — try peppermint capsules."', instead:'"New tummy symptoms first starting over 50 we don\u2019t just call IBS — persistent bloating like this needs a blood test (CA-125) and an exam, to be safe."', why:'Labelling persistent new over-50 bloating as IBS and prescribing peppermint is the classic missed ovarian cancer.' },
        { dont:'"I\u2019m sure it\u2019s nothing, but come back if it doesn\u2019t settle."', instead:'"Most of the time it\u2019s not sinister — but because the pattern fits something we take seriously, I\u2019ll examine you and arrange the CA-125 and a scan now, not wait."', why:'Vague "come back if it persists" delays the NG12 work-up the symptoms warrant.' },
        { dont:'"There\u2019s no need to worry about your aunt\u2019s ovarian problem."', instead:'"You mentioned your aunt — has it crossed your mind this might be similar? That fear is understandable, and it\u2019s exactly why checking properly is the right thing."', why:'Dismissing the aunt-driven fear misses the agenda and the chance to validate that presenting was right.' }
      ]
    },

    'painless-jaundice': {
      ceg: ['Long-term conditions & cancer', 'Urgent & unscheduled care'],
      stem: {
        name: 'Roy Pemberton', age: '68 years · male',
        pmh: ['PAINLESS jaundice ~2 weeks (wife noticed); dark urine, pale stools, itch', 'Unintentional ~6 kg weight loss, poor appetite', 'Ex-smoker; enjoys a drink'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Minimises ("feel okay-ish, probably my liver from the drink"); wants reassurance, no hospital tests.',
        reason: 'Video consultation — painless jaundice + weight loss.'
      },
      timeMap: [
        { t:'0–2',  h:'Heed wife, refuse reframe', d:'Yellow + dark urine + pale stools + weight loss isn\u2019t "a few drinks" — it can be a blocked bile duct; find out why, promptly.' },
        { t:'2–4',  h:'Name it honestly',    d:'Painless jaundice + weight loss in an older adult needs urgent tests to rule out pancreatic/biliary cancer. Not "wait and see".' },
        { t:'4–6',  h:'NG12 plan',           d:'Urgent LFTs/bloods + urgent CT + 2WW referral. Tag NICE NG12 (jaundice 40+; pancreatic 60+ with weight loss).' },
        { t:'6–8',  h:'Alcohol, fairly',     d:'Discuss/help with drinking — but don\u2019t blame himself or assume "just the booze" and miss something actionable.' },
        { t:'8–12', h:'Cholangitis net + hold him', d:'Fever/rigors, severe pain, confusion → 999/A&E. Not a fuss; sensible and brave. Chase results, go through together.' }
      ],
      wordPics: {
        fail: 'Accepts "it\u2019s my liver from the drink", advises cutting down and reviewing; misses painless jaundice + weight loss as a 2WW red flag; no urgent CT/bloods; ignores the wife\u2019s concern and the cholangitis risk.',
        pass: 'Recognises the red-flag pattern, arranges urgent CT/bloods + 2WW referral, addresses alcohol proportionately, and safety-nets cholangitis.',
        exc:  'Heeds the wife and refuses the alcohol reframe; names the pancreatic/biliary concern honestly; runs the NG12 urgent CT/bloods/2WW pathway; handles alcohol without colluding with self-blame or delaying the work-up; and gives a cholangitis emergency safety-net while supporting a frightened, stoical man.'
      },
      avoid: [
        { dont:'"It\u2019s probably your liver from the drinking — cut down and we\u2019ll review in a few weeks."', instead:'"Yellowing with dark urine, pale stools and weight loss isn\u2019t \u2018just the booze\u2019 — it can mean a blockage we must check urgently with a scan and bloods, not wait."', why:'Attributing painless jaundice + weight loss to alcohol and reviewing later is the classic missed pancreatic/biliary cancer.' },
        { dont:'"You feel okay-ish, so it can probably wait a bit."', instead:'"Your wife spotting the yellow is the important signal — in someone your age with weight loss, this needs urgent tests now, even though you feel okay-ish."', why:'Letting the patient\u2019s minimisation override collateral concern delays an urgent work-up.' },
        { dont:'"This is what years of drinking does — you\u2019ll have to live with the consequences."', instead:'"This isn\u2019t about blame — we\u2019ll help with the drinking, but right now I want to find the cause, because assuming it\u2019s the booze could miss something we can act on."', why:'Shaming/blaming reinforces avoidance and risks missing a treatable, time-critical diagnosis.' }
      ]
    },

    'biliary-colic': {
      ceg: ['Urgent & unscheduled care', 'New & undifferentiated presentations'],
      stem: {
        name: 'Aisha Khan', age: '41 years · female',
        pmh: ['Recurrent severe RUQ/epigastric pain ~1h after fatty meals, 1\u20133h, radiates to right scapula, nausea', 'Overweight; ?family history gallstones', '⚠ TODAY: pain >6h + fever + feels unwell'],
        meds: ['OTC antacids'],
        allergy: 'NKDA',
        recent: 'Calls it "bad indigestion", wants strong antacids by phone; young kids, no easy childcare (partner away).',
        reason: 'Telephone — recurrent RUQ pain after fatty food.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe "indigestion"', d:'Post-fatty-meal RUQ pain radiating to the shoulder blade, recurrent = biliary colic (gallstones), not indigestion for phone antacids.' },
        { t:'2–4',  h:'Catch today\u2019s red flag', d:'Pain >6h + fever + unwell = possible acute cholecystitis (screen cholangitis). No longer simple colic — urgent today.' },
        { t:'4–6',  h:'Plan for today',      d:'Urgent in-person assessment/admission for suspected cholecystitis — examination, Murphy\u2019s, fever, jaundice. Not antacids.' },
        { t:'6–9',  h:'Solve the barrier',   d:'Childcare/partner-away avoidance — problem-solve cover as part of the plan; take the fever seriously.' },
        { t:'9–12', h:'Sepsis net + longer plan', d:'Rigors/jaundice/confusion/worsening → 999/A&E. Later: LFTs + USS + surgical referral. Confirm she\u2019s seen.' }
      ],
      wordPics: {
        fail: 'Recommends strong antacids over the phone for "indigestion"; misses that recurrent post-fatty-meal RUQ pain is gallstones; ignores today\u2019s fever + persistence (possible cholecystitis/cholangitis); colludes with avoidance.',
        pass: 'Recognises biliary colic and that today\u2019s fever + persistent pain needs urgent assessment, arranges it, and safety-nets sepsis.',
        exc:  'Reframes "indigestion" as gallstone biliary colic; catches today\u2019s red flags as possible acute cholecystitis/cholangitis needing urgent same-day assessment; problem-solves the childcare barrier rather than colluding; gives a clear sepsis/cholangitis safety-net; and plans the ongoing gallstone work-up (LFTs/USS/surgery).'
      },
      avoid: [
        { dont:'"Sounds like bad indigestion from rich food — try some strong antacids."', instead:'"Severe pain under the right ribs after fatty meals, spreading to your shoulder blade, is the classic picture of gallstones — not indigestion — and today it needs more than antacids."', why:'Treating recurrent biliary colic as indigestion with phone antacids misses gallstone disease and its complications.' },
        { dont:'"It\u2019ll probably settle like the other times — take the antacids and rest."', instead:'"This time it\u2019s lasted hours and you\u2019ve got a fever — that suggests the gallbladder\u2019s inflamed or infected, which we treat urgently today, not at home."', why:'Persistent pain + fever is possible acute cholecystitis/cholangitis; "it\u2019ll settle" risks a dangerous miss.' },
        { dont:'"I know the kids make it hard, so let\u2019s just try medication at home for now."', instead:'"Getting cover for the kids is part of the plan — let\u2019s sort that so you can be seen today, because a fever with this pain isn\u2019t safe to manage on the phone."', why:'Colluding with the childcare barrier when red flags are present delays urgent, potentially life-saving assessment.' }
      ]
    }
  });

})();
