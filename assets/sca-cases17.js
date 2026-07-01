/* ============================================================
   Reasoning GP — Case Library batch 17: "Men's health below the belt"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 2WW stated explicitly where it maps (testicular lump).
   Torsion = surgical emergency. Pushes into SCA_CASES + SCA_EXTRAS.
   Load AFTER sca-cases16.js.
   ============================================================ */

(function(){

  /* ============ 61. VIDEO — Testicular lump (NG12 2WW) ============ */
  const c61 = {
    id:'testicular-lump', title:'"It\u2019s probably nothing, my girlfriend made me come"', type:'video', duration:12,
    meta:{ age:28, sex:'M', setting:'Video consultation — a lump he found on one testicle.', system:'Urology / Testicular cancer' },
    brief:'Mr Jordan Eze, 28, personal trainer. Noticed a firm painless lump on the right testicle ~3 weeks ago, found in the shower; thinks it may be slightly bigger. No pain, no urinary symptoms, no trauma. Came only because his girlfriend insisted. Minimises throughout. Slightly heavy/dragging sensation that side. PMH: undescended testis as a baby (orchidopexy). Meds: none. No fever.',
    script:{
      opening:'"Hi — so, this is a bit awkward on a video call. My girlfriend basically forced me to book this. I found a little lump on one of my, you know, testicles a few weeks ago. It doesn\u2019t hurt or anything, so I\u2019m sure it\u2019s nothing — probably just a cyst or I\u2019ve tweaked something at the gym. I just want you to tell me it\u2019s fine so she stops nagging. It IS fine, right?"',
      facts:[
        { topic:'The lump',            text:'If asked properly: firm, hard, PAINLESS lump arising FROM the body of the right testis (not separate/above it), noticed 3 weeks ago, possibly enlarging, with a dull dragging/heaviness that side. Painless + hard + part of the testis = the classic concerning picture for testicular cancer.' },
        { topic:'The risk factor',      text:'If history taken: had an undescended testis as a baby, surgically corrected (orchidopexy) — a known risk factor for testicular cancer. He doesn\u2019t know this is relevant.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — the bravado is fear: he has actually googled it, seen the word "cancer", and is privately terrified — both of dying and, very specifically, of losing a testicle and what it means for his masculinity, his fertility, and his relationship. He\u2019s pushing for "it\u2019s fine" because he can\u2019t bear it not to be. The "girlfriend made me" framing is cover.' },
        { topic:'The masculinity/fertility fear', text:'If reached gently: worried that if something IS wrong, surgery means he\u2019s "half a man", can\u2019t have kids, won\u2019t be desirable. These unspoken fears, if unaddressed, can make young men delay or disengage.' },
        { topic:'What he wants',        text:'Officially: quick reassurance to placate his girlfriend. What he needs: examination and an urgent (2-week-wait) pathway with direct-access scrotal ultrasound, delivered so he accepts it despite his fear, with the masculinity/fertility worries met honestly (treatment is highly effective; sperm storage exists).' },
      ],
      ice:{
        ideas:'It\u2019s probably a harmless cyst or a gym strain; it doesn\u2019t hurt so it can\u2019t be serious.',
        concerns:'HIDDEN AGENDA — he\u2019s googled it, seen "cancer", and is terrified; specifically frightened of losing a testicle, his fertility and his masculinity, so he minimises to make it not be real.',
        expectations:'Quick reassurance that it\u2019s fine. What he actually needs: examination, urgent NG12 2WW referral with scrotal ultrasound, and his masculinity/fertility fears addressed honestly.'
      },
      cues:['"It doesn\u2019t hurt so it\u2019s nothing" — painlessness is exactly what makes a hard testicular lump concerning, not reassuring.','"Tell me it\u2019s fine so she stops nagging" — bravado covering real fear; the girlfriend\u2019s insistence is the reliable signal.','Hesitation about the future/fertility if treatment is mentioned — the masculinity fear waiting to be named.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises a hard, PAINLESS lump arising from the testis as concerning for testicular cancer and does NOT accept "it doesn\u2019t hurt so it\u2019s nothing" — painlessness is typical of malignancy, not reassuring' },
      { dom:'tasks', text:'States the NG12 pathway: a non-painful enlargement or change in shape/texture of the testis (or a suspicious lump) warrants direct-access scrotal ultrasound and urgent referral; consider the suspected-cancer (2-week-wait) pathway — restated as the action, tagged NICE NG12' },
      { dom:'tasks', text:'Takes the relevant history and examines: distinguishes a lump within the testis from epididymal/extra-testicular causes (cyst, hydrocele, epididymo-orchitis), elicits the undescended-testis/orchidopexy risk factor, and arranges in-person examination (does not rely on a video impression)' },
      { dom:'tasks', text:'Addresses the masculinity/fertility fears honestly: testicular cancer is one of the most treatable cancers with excellent cure rates; if surgery is needed it is usually removal of one testis with the other preserving function/fertility; SPERM STORAGE can be offered before treatment; a prosthesis is available — directly countering the "half a man" fear' },
      { dom:'tasks', text:'Considers the differential without false reassurance: yes it could be a benign cyst/epididymal lump, but the only safe way to know is examination + ultrasound on the urgent pathway, not phone reassurance' },
      { dom:'rto',   text:'Hears the bravado as fear and the girlfriend\u2019s insistence as the real reason; gently surfaces the googling and the specific worries rather than taking "it\u2019s fine, right?" at face value' },
      { dom:'rto',   text:'Validates how hard this is for a young man to raise, normalises it, and meets the fertility/masculinity fears with warmth and accurate information so he accepts the pathway' },
      { dom:'gs',    text:'Safety-nets and follows up: arranges examination + urgent ultrasound/referral, explains timescales and what to expect, advises to return sooner if pain/swelling/systemic change, ensures he will attend (engages the girlfriend/support with consent), documents, and tracks the result' },
    ],
    worked:[
      { lbl:'Reframe painlessness',  txt:'"I\u2019m really glad you came, even if it took some persuading — and I want to be straight with you, because that respects you more than empty reassurance: the fact it DOESN\u2019T hurt is actually the reason I take a hard lump on the testicle seriously. The harmless ones often ache or come and go; a firm, painless lump that\u2019s part of the testicle is the kind we always check properly."' },
      { lbl:'Name the pathway',      txt:'"So here\u2019s what needs to happen. I need to examine you in person, and then arrange an urgent ultrasound scan of the testicle and a referral to the specialists — usually seen within two weeks. There\u2019s national guidance for exactly this. It isn\u2019t me saying it\u2019s cancer; it\u2019s me making sure that if there\u2019s anything to find, we find it fast."' },
      { lbl:'The risk factor',       txt:'"One thing from your history matters: you had an undescended testicle as a baby that was fixed with surgery. That slightly raises the chance of problems in that testicle later, which is another reason I want this looked at properly rather than over a video call."' },
      { lbl:'Meet the real fear',    txt:'"Can I gently say — I suspect you\u2019ve already looked this up and scared yourself, and that the \u2018girlfriend made me\u2019 is partly cover for being worried. That\u2019s completely human. And I\u2019d guess part of the fear is what it might mean for you as a man — fertility, surgery, all of that. Let\u2019s put those on the table, because the news there is genuinely good."' },
      { lbl:'The good news',         txt:'"If this did turn out to be cancer — and we don\u2019t know that — testicular cancer is one of the most curable cancers there is, with very high success rates. If a testicle needs removing, the other one almost always keeps your hormones and fertility normal, and we can store sperm beforehand as a safety net, and even fit a natural-looking prosthesis. You would not be \u2018half a man\u2019. Far from it."' },
      { lbl:'Safety-net + attend',   txt:'"Let\u2019s get you booked for the examination and the scan. If meanwhile it becomes painful, swells, or you feel unwell, come back sooner. Bring your girlfriend if it helps — she clearly\u2019s got your back. I\u2019ll make sure the referral goes today and I\u2019ll follow up the result with you. You wanted me to say it\u2019s fine; what I\u2019m doing instead is making sure you actually find out, quickly, and that whatever it is, you\u2019re not facing it alone."' },
    ],
    learning:'A firm, PAINLESS lump arising from the body of the testis is testicular cancer until proven otherwise — and painlessness is the concerning feature, not a reassuring one. The NG12-relevant action is examination plus direct-access scrotal ultrasound and urgent referral (consider the suspected-cancer 2-week-wait pathway), never phone reassurance; an undescended-testis/orchidopexy history is a genuine risk factor. The examinable hidden agenda is that the young man\u2019s bravado ("my girlfriend made me", "it\u2019s fine, right?") masks real fear — he has googled it, seen "cancer", and is specifically terrified of losing a testicle, his fertility, and his masculinity. The skill is to refuse the dismissal without crushing him, surface the fear and the girlfriend\u2019s reliable insistence, examine and refer on the urgent pathway, and meet the masculinity/fertility fears with accurate good news (testicular cancer is highly curable; the remaining testis preserves function; sperm storage and prosthesis exist) so he engages rather than delays.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (testicular) · CKS scrotal lumps · EAU testicular cancer',
      points:[
        { h:'NG12 — testicular pathway', t:'In a man with a non-painful enlargement or change in shape or texture of the testis, consider testicular cancer and offer direct-access ultrasound; refer using a suspected-cancer pathway where the picture is suspicious. A hard, painless, intratesticular lump is the classic presentation.' },
        { h:'Painless = more concerning', t:'Malignant testicular lumps are typically painless, firm, and arise from the testis itself. Pain more often accompanies benign/inflammatory causes (epididymo-orchitis) or torsion. Do not be reassured by absence of pain.' },
        { h:'Examine and differentiate', t:'Distinguish intratesticular (concerning) from extratesticular lumps: epididymal cyst, hydrocele (transilluminates), varicocele ("bag of worms"), epididymo-orchitis (tender, systemic). Examination is essential — a video impression is insufficient; arrange in-person assessment.' },
        { h:'Risk factors', t:'Cryptorchidism/undescended testis (even after orchidopexy), previous testicular cancer, family history, infertility, and certain intersex conditions. Their presence strengthens suspicion; absence does not exclude.' },
        { h:'Address fertility & masculinity honestly', t:'Testicular cancer has among the highest cure rates of any cancer. Orchidectomy of one testis usually preserves hormonal function and fertility via the contralateral testis; offer sperm cryopreservation before treatment, and a testicular prosthesis. Counselling these proactively reduces the fear that drives young men to delay.' },
        { h:'Never do', t:'Never reassure a hard painless testicular lump over the phone/video; never treat painlessness as reassuring; never skip examination; never ignore the cryptorchidism risk factor; never leave the masculinity/fertility fear unspoken.' },
        { h:'Safety-net & follow-up', t:'Examination + urgent scrotal ultrasound/referral; explain timescales and process; return sooner if pain/swelling/systemic features; engage the patient\u2019s support with consent; document and track the result.' }
      ]
    }
  };

  /* ============ 62. TELEPHONE — Acute scrotal pain: torsion ============ */
  const c62 = {
    id:'testicular-torsion', title:'"It came on suddenly playing football"', type:'telephone', duration:12,
    meta:{ age:15, sex:'M', setting:'Telephone — sudden severe testicular pain (mother calling, son present).', system:'Urology / Testicular torsion (emergency)' },
    brief:'Caller: mother of Kai Robson, 15, who developed sudden severe left testicular pain ~90 minutes ago during football, with nausea and one episode of vomiting. The teenager is mortified and minimising in the background. Mother thinks it might be a "pulled muscle" or "just a knock". No fever. The boy is reluctant to be examined or go to hospital out of embarrassment. No prior episodes (or possibly brief self-resolving ones before).',
    script:{
      opening:'(Mother, son audible and embarrassed nearby.) "Sorry to bother you — it\u2019s probably nothing, but Kai\u2019s got a really bad pain, um, in his groin area, came on suddenly during football about an hour and a half ago. He\u2019s been sick once. He\u2019s a bit\u2026 he doesn\u2019t want to talk about it, you know what teenage boys are like. I gave him some ibuprofen. Is it just a pulled muscle, do you think? He really doesn\u2019t want to make a fuss or go to hospital."',
      facts:[
        { topic:'The pain',            text:'If clarified (gently, including speaking with Kai): SUDDEN onset severe pain in the LEFT testicle/scrotum ~90 min ago during exertion, with nausea and one vomit. The testis may be high-riding, swollen, exquisitely tender. Sudden severe testicular pain + nausea/vomiting in a teenager = testicular torsion until proven otherwise.' },
        { topic:'The time pressure',    text:'CRITICAL — torsion is a time-dependent surgical emergency; testicular salvage falls sharply after ~6 hours of ischaemia. This is ~90 minutes in. Every minute of delay (false reassurance, "see how it goes") risks losing the testis.' },
        { topic:'The hidden barrier',   text:'HIDDEN AGENDA / obstacle — the teenager\u2019s EMBARRASSMENT and the mother\u2019s minimising ("pulled muscle", "doesn\u2019t want a fuss") are the dangerous barriers. The shame is causing under-reporting and reluctance to be examined or go in. The consultation must overcome this fast and sensitively.' },
        { topic:'The misleading reassurance', text:'No trauma history of note (a "knock" can be coincidental), no fever (argues against infection), ibuprofen given (may blunt but won\u2019t fix). Don\u2019t be lulled by "it was during football" into a musculoskeletal label.' },
        { topic:'What they want',       text:'Officially (mother): to be told it\u2019s a pulled muscle and avoid hospital/embarrassment. What is needed: immediate emergency assessment (999/ED, urology) for suspected torsion, with the embarrassment handled so they GO without delay.' },
      ],
      ice:{
        ideas:'Probably a pulled muscle or a knock from football; ibuprofen and rest should do.',
        concerns:'HIDDEN AGENDA — the teenager\u2019s acute embarrassment and the mother\u2019s wish not to "make a fuss", driving minimisation and reluctance to be examined or go to hospital.',
        expectations:'Reassurance it\u2019s musculoskeletal and to stay home. What is actually needed: immediate emergency assessment for testicular torsion before the testis is lost.'
      },
      cues:['Sudden severe testicular pain + vomiting in a teenager — torsion until proven otherwise; this is time-critical.','"Probably a pulled muscle / doesn\u2019t want a fuss" — minimisation and embarrassment are the dangerous barriers, not the diagnosis.','"It came on during football" — exertion is a torsion trigger; do not be misdirected to a muscular cause.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises SUDDEN severe testicular pain with nausea/vomiting in an adolescent as TESTICULAR TORSION until proven otherwise — a surgical emergency — and does NOT accept the "pulled muscle/knock" framing' },
      { dom:'tasks', text:'Acts on the TIME-CRITICAL nature: arranges IMMEDIATE emergency assessment (999/ED with urgent urology / emergency surgery) NOW, recognising testicular salvage depends on operating within hours (~6h window) — no "watch and wait", no routine appointment, no waiting for ibuprofen to work' },
      { dom:'tasks', text:'Gathers only the essential discriminating history quickly (sudden onset, severity, vomiting, time of onset) without delaying referral; knows the differential (epididymo-orchitis — more gradual, fever, urinary symptoms; torsion of appendix testis) but that torsion must be excluded surgically, not clinically assumed away' },
      { dom:'tasks', text:'Does not rely on phone reassurance or a GP examination that would delay transfer: the safe action is emergency referral; explains a scan must NOT delay surgery if torsion is suspected' },
      { dom:'rto',   text:'Overcomes the teenager\u2019s embarrassment and the mother\u2019s minimising sensitively and quickly: speaks to Kai directly with respect, normalises it, and conveys urgency without panic so they accept going in immediately' },
      { dom:'rto',   text:'Communicates appropriately for a 15-year-old: involves him in the conversation, respects his dignity, and works with the parent, balancing confidentiality with the need for urgent parental/emergency action' },
      { dom:'rto', text:'Explains in plain, calm language WHY this needs immediate assessment and what will happen next, naming the time-critical window without inducing panic, and checking the family understand and agree to go now' },
      { dom:'gs',    text:'Safety-nets unambiguously: go to ED now / call 999, do NOT eat or drink (may need theatre), what to expect, and that delay risks losing the testicle; confirms they are going, documents, and the practical route (who takes him, transport)' },
    ],
    worked:[
      { lbl:'Name the urgency',      txt:'"Thank you for ringing — and I\u2019m going to be very direct because it matters: a sudden, severe pain in the testicle that\u2019s made him sick, coming on like that, is something we treat as an emergency until proven otherwise. It can be a twisting of the testicle that cuts off its blood supply, and that\u2019s time-critical. This is not a pulled muscle until a surgeon has ruled it out."' },
      { lbl:'Talk to Kai directly',  txt:'"Kai, I know this is the last thing you want to talk about, and there\u2019s zero embarrassment here — I\u2019m a doctor, I have these conversations all the time, and you\u2019ve done nothing wrong. What you\u2019re feeling is your body telling us something needs sorting quickly. You being brave enough to let us help in the next hour really matters."' },
      { lbl:'The clock',             txt:'"Here\u2019s why I won\u2019t say \u2018see how it goes\u2019: if it is a twist, the testicle can only survive a few hours without its blood supply, and you\u2019re already about ninety minutes in. Every bit of waiting lowers the chance of saving it. So we don\u2019t wait for the ibuprofen, and we don\u2019t book something for later."' },
      { lbl:'The plan, now',         txt:'"I need you to take Kai to the emergency department right now — if you can drive him straight there, do; if anything makes that hard, call 999. Tell them it\u2019s sudden severe testicular pain with vomiting and you\u2019re worried about torsion; that phrase gets him seen fast. And don\u2019t let him eat or drink anything, in case he needs an operation."' },
      { lbl:'Pre-empt the dodge',    txt:'"I know the instinct is to not make a fuss — but this is exactly the situation where making a fuss is the right call, and no one will think you overreacted. If it turns out to be something less serious, brilliant, no harm done. If it\u2019s the twist, you\u2019ll have saved it by going now."' },
      { lbl:'Confirm + safety-net',  txt:'"Can you tell me you\u2019re heading off now and how you\u2019re getting there? \u2026 Good. If the pain suddenly eases that doesn\u2019t mean it\u2019s fixed — still go, because a twist can untwist and re-twist. I\u2019m documenting this as a suspected torsion. Go now — I\u2019d rather you were sitting in A&E in twenty minutes than anywhere else."' },
    ],
    learning:'Sudden, severe testicular pain with nausea/vomiting in an adolescent is testicular torsion until proven otherwise — a time-critical surgical emergency where salvage falls sharply after roughly six hours of ischaemia. The only safe action is IMMEDIATE emergency assessment (999/ED, urgent urology/surgery); there is no role for "watch and wait", a routine appointment, waiting for analgesia, or a scan that delays surgery. The classic trap is the "pulled muscle/knock from football" label — exertion is a torsion trigger, and absence of fever argues against infection. The examinable hidden agenda is the dangerous barrier of the teenager\u2019s embarrassment and the parent\u2019s minimising; the skill is to overcome these fast and sensitively — speak to the young person directly with dignity, normalise it, convey urgency without panic, and get them moving now, nil by mouth, with a clear safety-net (pain easing does not mean resolved; intermittent torsion re-twists).',
    knowledge:{
      guideline:'CKS scrotal pain · BAUS/EAU testicular torsion · paediatric surgical emergency pathways',
      points:[
        { h:'Torsion until proven otherwise', t:'Sudden-onset severe unilateral testicular/scrotal pain, often with nausea/vomiting, in a child/adolescent or young man is testicular torsion until excluded. Signs may include a high-riding, horizontally-lying, swollen, exquisitely tender testis and absent cremasteric reflex — but examination does not safely exclude it.' },
        { h:'Time-critical salvage', t:'Torsion is a surgical emergency. Testicular viability declines markedly after ~6 hours of ischaemia. Immediate referral for emergency scrotal exploration is the action — do NOT delay for imaging, analgesia trials, or routine pathways. If torsion is suspected, surgery should not wait for ultrasound.' },
        { h:'Don\u2019t be misled by the differential', t:'Epididymo-orchitis is usually more gradual with fever and urinary symptoms; torsion of a testicular appendage causes localised pain (blue-dot sign). Exertion/minor trauma can trigger or coincide with torsion — do not accept a musculoskeletal label. When in doubt, explore.' },
        { h:'Overcome embarrassment fast', t:'Adolescent shame and parental minimisation cause dangerous delay. Speak to the young person directly, normalise the problem, preserve dignity, and convey urgency calmly. Involve the parent for immediate action while respecting the teenager.' },
        { h:'Practical emergency instructions', t:'Go to ED now / call 999; nil by mouth (possible theatre); state "sudden severe testicular pain, query torsion" to expedite; confirm transport and that they are going. Easing pain does not exclude torsion (intermittent torsion-detorsion).' },
        { h:'Never do', t:'Never label sudden severe testicular pain as a pulled muscle without surgical exclusion; never "watch and wait" or book routine; never let imaging or analgesia delay referral; never let embarrassment stall emergency care; never reassure on pain easing.' },
        { h:'Safety-net & follow-up', t:'Immediate ED/999, nil by mouth, clear escalation phrasing; confirm they are en route and how; document as suspected torsion; advise that pain easing still requires assessment.' }
      ]
    }
  };

  /* ============ 63. VIDEO — PSA result and the screening conversation ============ */
  const c63 = {
    id:'psa-result-conversation', title:'"Just give me the test so I know I\u2019m clear"', type:'video', duration:12,
    meta:{ age:55, sex:'M', setting:'Video consultation — requesting/discussing a PSA test.', system:'Urology / PSA & informed choice' },
    brief:'Mr Trevor Hammond, 55, no urinary symptoms, requesting a PSA test "for peace of mind" after a colleague was diagnosed with prostate cancer. Asymptomatic. No family history initially volunteered. The number, if done, would need interpreting with the over-diagnosis/false-positive caveats. He believes PSA is a simple "all-clear" test. Black ethnicity (higher baseline risk). PMH: nil. Meds: none.',
    script:{
      opening:'"Hi doc — quick one, I just want to book the prostate blood test, the PSA. A mate at work just got diagnosed with prostate cancer, completely out of the blue, and it\u2019s shaken me up. So I figured I\u2019d get the test, it comes back normal, and I can stop worrying. That\u2019s how it works, right? Normal result means I\u2019m in the clear?"',
      facts:[
        { topic:'The belief',          text:'He believes PSA is a binary "all-clear" test — normal = no cancer, raised = cancer. In reality PSA is non-specific: it can be raised by BPH, infection, recent ejaculation/exercise/catheter; it misses some cancers (false negatives) and finds indolent ones that may never harm him (over-diagnosis), leading to biopsy harms and over-treatment.' },
        { topic:'The risk factors',     text:'If asked: Black ethnicity (roughly double the risk, earlier) — genuinely relevant and shifts the balance toward testing/discussion. If asked about family: an uncle had prostate cancer "late in life". No lower-urinary-tract symptoms.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — beneath the breezy request is real anxiety triggered by his friend, and a deeper, unspoken fear: he is far more frightened of the consequences he\u2019s heard about (biopsy, impotence, incontinence from treatment) than he lets on, and is hoping a quick normal test lets him avoid all of that. He needs the informed-choice conversation, not a reflex blood form OR a refusal.' },
        { topic:'The real question',    text:'If reached: what he actually wants is to not die like nothing was done, AND to not be harmed by tests/treatment he didn\u2019t understand. He needs the pros and cons to make HIS choice, with his ethnicity weighted in.' },
        { topic:'What he wants',        text:'Officially: a PSA test as an all-clear. What he needs: a balanced informed-choice discussion (PSA is his right to request after counselling; it is not a simple all-clear), his elevated risk acknowledged, and support to make an informed decision rather than a reflex test or a paternalistic no.' },
      ],
      ice:{
        ideas:'PSA is a simple all-clear test — a normal result means he definitely doesn\u2019t have prostate cancer.',
        concerns:'HIDDEN AGENDA — anxiety triggered by a colleague\u2019s diagnosis, plus an unspoken fear of the downstream harms (biopsy, impotence, incontinence) he\u2019s hoping a quick normal test lets him sidestep.',
        expectations:'To be given the test as reassurance. What he needs: a balanced informed-choice conversation, his higher (Black-ethnicity) risk acknowledged, and a decision that is genuinely his.'
      },
      cues:['"Normal means I\u2019m in the clear, right?" — the misconception to correct; PSA is not a binary all-clear.','Triggered by a colleague\u2019s diagnosis — anxiety, not a considered screening decision; address the fear.','If risk factors emerge (Black ethnicity, family history) — these genuinely shift the conversation and must be weighted.']
    },
    checkpoints:[
      { dom:'tasks', text:'Corrects the core misconception with balance: PSA is NOT a simple all-clear — it is non-specific (raised by BPH, infection, ejaculation, exercise), misses some cancers (false negatives), and detects indolent cancers (over-diagnosis) that can lead to biopsy harms and over-treatment' },
      { dom:'tasks', text:'Delivers a genuine INFORMED-CHOICE discussion: the benefits (may detect significant cancer earlier) and harms (false positives, biopsy complications, over-diagnosis/over-treatment, anxiety) — supporting his right to choose rather than reflexively testing or refusing' },
      { dom:'tasks', text:'Elicits and WEIGHTS his risk factors: Black ethnicity (higher and earlier risk) and family history genuinely shift the balance toward offering testing/lower threshold for discussion — and he is in the eligible age group to request PSA after counselling' },
      { dom:'tasks', text:'Explains what happens around a test properly: avoid ejaculation/vigorous exercise/recent UTI before testing; that a raised result leads to repeat/▲MRI/possible biopsy; and that asymptomatic men can request PSA in primary care after an informed discussion (per the national informed-choice programme)' },
      { dom:'tasks', text:'Screens briefly for symptoms and red flags (LUTS, haematuria, bone pain, weight loss) that would change the pathway from screening to a symptomatic/NG12 referral — and acts accordingly if present' },
      { dom:'rto',   text:'Hears the anxiety and the unspoken fear of treatment harms beneath the request; addresses the colleague\u2019s diagnosis and the fear directly rather than processing a blood form' },
      { dom:'rto',   text:'Respects autonomy: supports him to make HIS decision (test or not) with the facts, rather than imposing a view; checks understanding and what matters to him' },
      { dom:'gs',    text:'Safety-nets and follows up: if he tests, how and when results are discussed and the plan for a raised value; if he defers, what symptoms should prompt return; documents the informed-choice discussion and arranges appropriate follow-up' },
    ],
    worked:[
      { lbl:'Honour the trigger',    txt:'"I\u2019m really sorry about your colleague — that kind of news lands hard, and wanting to do something sensible in response is completely understandable. Let\u2019s make sure what we do is genuinely useful to you. Can I be straight about what the PSA test actually is, because it\u2019s a bit different from how most people picture it?"' },
      { lbl:'Correct the belief',    txt:'"It\u2019s not a simple \u2018all-clear\u2019 test, much as I wish it were. The PSA can be up for harmless reasons — an enlarged prostate, a recent infection, even cycling or sex beforehand. And it cuts both ways: it can be normal when there IS a cancer, and it can flag slow-growing cancers that would never have troubled you — which then leads to biopsies and treatments that carry their own risks. So a normal result wouldn\u2019t quite mean \u2018in the clear\u2019."' },
      { lbl:'Weight his risk',       txt:'"That said, two things genuinely matter for you specifically. You\u2019re of Black ethnicity, which carries a higher and earlier risk of prostate cancer, and you mentioned an uncle. Those tip the balance towards it being reasonable to test — you\u2019re absolutely entitled to the PSA after a chat like this. I\u2019m not talking you out of it; I\u2019m making sure it\u2019s your informed choice."' },
      { lbl:'Surface the real fear', txt:'"Can I gently ask — part of what I hear is hoping a quick normal test means you avoid all the scary stuff you\u2019ve heard about, the biopsies, the effects on waterworks and sex life. Is that fair? \u2026 That\u2019s a very honest worry, and worth talking through, because understanding the path AFTER a raised result is part of deciding whether to test."' },
      { lbl:'Support the choice',    txt:'"So here are your options, and either is reasonable. We do the PSA now, knowing how to interpret it and what a raised number would mean next — repeat test, maybe an MRI before any biopsy. Or you take a week to weigh it up with what we\u2019ve discussed. Given your background, if you want the test, I\u2019m happy to do it. What feels right to you?"' },
      { lbl:'Practicalities + net',  txt:'"If we test: no sex or hard exercise for 48 hours first, and tell me if you\u2019ve had any waterworks trouble, blood in the urine, or bone pain — those change things. We\u2019ll go through the result together, and I won\u2019t leave you to interpret a number alone. If you defer, come back any time, and definitely if any of those symptoms appear. Either way, you\u2019re making the decision with the full picture now — that\u2019s the point."' },
    ],
    learning:'A PSA request is an informed-choice consultation, not a reflex blood form or a paternalistic refusal. The core task is correcting the "all-clear" misconception with balance: PSA is non-specific (raised by BPH, infection, ejaculation, exercise), yields false negatives, and over-diagnoses indolent cancers, leading to biopsy harms and over-treatment — so a normal result is not "in the clear". The genuine informed-choice discussion lays out benefits and harms and supports the man\u2019s right to decide; asymptomatic eligible men can request PSA after counselling. Risk factors must be weighted honestly — Black ethnicity (higher, earlier risk) and family history shift the balance toward testing. The examinable hidden agenda is anxiety triggered by a colleague\u2019s diagnosis plus an unspoken fear of downstream treatment harms he hopes a quick normal test will let him avoid; surface and address it. Screen briefly for symptoms/red flags that would convert this to a symptomatic/NG12 pathway, give pre-test practicalities, and safety-net the result and follow-up.',
    knowledge:{
      guideline:'UK NSC / NHS Prostate Cancer Risk Management Programme (informed choice) · NICE NG12 (symptomatic) · CKS PSA',
      points:[
        { h:'PSA is not an all-clear', t:'PSA is non-specific: elevated by benign prostatic hyperplasia, prostatitis/UTI, recent ejaculation, vigorous exercise, catheterisation, and DRE. It misses some significant cancers (false negatives) and detects indolent cancers (over-diagnosis). A "normal" PSA does not exclude cancer; a raised PSA does not confirm it.' },
        { h:'Informed choice, not screening', t:'There is no national population prostate-screening programme. Under the Prostate Cancer Risk Management Programme, asymptomatic men (typically 50+) may REQUEST a PSA after a balanced discussion of benefits and harms. Support autonomy — neither reflex-test nor refuse.' },
        { h:'Weight individual risk', t:'Black ethnicity confers roughly double the lifetime risk and earlier onset; family history (first-degree relative, BRCA) also raises risk. These legitimately lower the threshold for testing and should be discussed explicitly — guidance encourages proactive discussion with higher-risk men, including from age 45 in some.' },
        { h:'Explain the downstream path', t:'A raised PSA leads to repeat testing and increasingly multiparametric MRI before biopsy, reducing unnecessary biopsies. Treatments (surgery/radiotherapy) carry risks of erectile dysfunction and incontinence; active surveillance is an option for low-risk disease. Understanding this pathway is part of the decision to test.' },
        { h:'Separate symptomatic from screening', t:'LUTS, haematuria, bone pain, weight loss, or abnormal DRE move the patient from informed-choice screening into a symptomatic/NG12 suspected-cancer pathway. Always screen briefly for these.' },
        { h:'Pre-test practicalities', t:'Advise no ejaculation or vigorous exercise for ~48 hours and no test during/shortly after UTI, to avoid spurious elevation. Plan how and when results and any raised value will be managed.' },
        { h:'Never do', t:'Never present PSA as a simple all-clear; never reflex-test without informed discussion; never refuse an eligible man\u2019s informed request; never ignore higher-risk ethnicity/family history; never miss red-flag symptoms that need the NG12 pathway.' }
      ]
    }
  };

  /* ============ 64. VIDEO — Erectile dysfunction as a cardiovascular sentinel ============ */
  const c64 = {
    id:'ed-cardiovascular', title:'"I just need the blue pills, doc"', type:'video', duration:12,
    meta:{ age:49, sex:'M', setting:'Video consultation — requesting medication for erectile dysfunction.', system:'Men\u2019s health / ED as CV sentinel' },
    brief:'Mr Marcus Bell, 49, lorry driver. Requests sildenafil for erectile dysfunction that has developed gradually over the past year. Overweight, smoker 15/day, family history of early heart disease (father MI at 52). Not had bloods/BP in years. Embarrassed, wants a quick prescription. Gradual-onset ED with preserved morning erections occasionally. PMH: none recorded. Meds: none. Snores heavily (per partner).',
    script:{
      opening:'"Right, this is mortifying so I\u2019ll keep it short — things aren\u2019t working downstairs like they used to, in the bedroom. It\u2019s been creeping up over the last year. I just want a prescription for those blue tablets, Viagra, sildenafil, whatever — sort the problem and I\u2019ll be out of your hair. I don\u2019t need a big song and dance about it, just the pills if that\u2019s alright."',
      facts:[
        { topic:'The ED pattern',       text:'If explored: gradual-onset, progressive erectile dysfunction over ~12 months, mostly physical pattern (occasional weaker morning erections), no sudden loss, libido largely intact. Gradual, organic-pattern ED in a middle-aged man with vascular risk factors is a recognised early-warning sign of cardiovascular disease (and sometimes diabetes).' },
        { topic:'The CV risk cluster',   text:'Smoker (15/day), overweight, father had an MI at 52, no BP or bloods for years, heavy snoring (possible OSA). ED here is potentially the "canary in the coal mine" for undiagnosed hypertension, hyperlipidaemia, diabetes, and elevated cardiovascular risk — the penile arteries are small and show disease early.' },
        { topic:'The hidden agenda',     text:'HIDDEN AGENDA — beneath the "just the pills" is significant relationship strain and shame: his wife has interpreted the ED as him "going off her" or having an affair, there\u2019s tension at home, and his self-esteem and mood are suffering. He wants the pills to fix the marriage quietly without anyone knowing how much it\u2019s hurting. There may be low mood to screen.' },
        { topic:'The opportunity',       text:'If reached: he hasn\u2019t seen a doctor in years; this is a rare engagement opportunity with a middle-aged man, and the ED is the door to addressing serious modifiable cardiovascular risk — but only if handled without making him feel ambushed when he came for a quick fix.' },
        { topic:'What he wants',         text:'Officially: a sildenafil prescription, fast and private. What he needs: the prescription IS reasonable, but coupled with recognising ED as a cardiovascular warning — BP, bloods (glucose/lipids), CV risk assessment, smoking/weight, OSA screen — and addressing the relationship strain and mood, all without shaming him.' },
      ],
      ice:{
        ideas:'ED is a standalone plumbing problem that a tablet will simply fix.',
        concerns:'HIDDEN AGENDA — relationship strain and shame (his wife thinks he\u2019s gone off her / is having an affair), damaged self-esteem and possible low mood; he wants to fix it quietly with pills.',
        expectations:'A quick, private sildenafil prescription. What he needs: the prescription PLUS recognition of ED as a cardiovascular warning sign (BP, bloods, CV risk, smoking/weight, OSA) and support for the relationship/mood strain.'
      },
      cues:['"Just the pills, no song and dance" — embarrassment; don\u2019t let it stop you using ED as a cardiovascular red flag.','Gradual organic-pattern ED + smoker + family MI at 52 + no checks for years — the CV sentinel opportunity.','Hints of tension at home / "out of your hair" — the relationship strain and shame waiting to be explored.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises gradual-onset ED in a middle-aged man with vascular risk factors as a CARDIOVASCULAR SENTINEL — an early-warning sign of endothelial/vascular disease (and possible diabetes) — not just a plumbing problem for a pill' },
      { dom:'tasks', text:'Uses the opportunity to assess cardiovascular and metabolic risk: BP, fasting glucose/HbA1c, lipids, QRISK, smoking and weight — and screens for the modifiable cluster he hasn\u2019t had checked in years' },
      { dom:'tasks', text:'Still treats the ED appropriately: sildenafil/PDE5 inhibitor is reasonable first-line (with safety checks — no nitrates, cardiovascular fitness for sexual activity) AND addresses reversible contributors (smoking, alcohol, weight, medication, testosterone if indicated)' },
      { dom:'tasks', text:'Screens for related conditions: heavy snoring → obstructive sleep apnoea; low testosterone symptoms; depression; and asks about the gradual vs sudden pattern to distinguish organic from psychogenic' },
      { dom:'tasks', text:'Addresses the relationship strain and mood (the hidden agenda): explores the impact on his marriage and self-esteem, corrects the "gone off her/affair" misreading with his consent to involve his partner, and screens mood/risk if low' },
      { dom:'rto',   text:'Handles the embarrassment with warmth and normalisation so he stays engaged, and does NOT let "just the pills" shut down the cardiovascular and relationship conversation — frames the wider checks as caring, not a lecture' },
      { dom:'rto',   text:'Surfaces the relationship/self-esteem distress sensitively, validating how much it\u2019s affecting him beneath the bravado' },
      { dom:'gs',    text:'Safety-nets and follows up: PDE5 safety advice, arranges the CV/metabolic work-up and review, smoking-cessation and weight support, OSA referral if indicated, partner/relationship support, and a plan that treats the symptom AND the warning it carries' },
    ],
    worked:[
      { lbl:'Disarm the shame',      txt:'"First — there\u2019s nothing mortifying here, this is one of the commonest things I see in men your age, and you coming in is sensible, not embarrassing. And yes, I can absolutely sort you a prescription. But give me two minutes, because this symptom is more useful than you think, and I\u2019d be doing you a disservice to just hand over the pills."' },
      { lbl:'The canary',            txt:'"Here\u2019s the thing most men don\u2019t know: the arteries that supply an erection are tiny, so they show the early effects of furring-up before the bigger arteries to the heart do. That means gradual problems like yours can be an early warning sign for heart and circulation risk — and with your dad\u2019s heart attack at 52 and the smoking, that\u2019s a warning I really want to act on FOR you, not scare you with."' },
      { lbl:'Turn it into a win',    txt:'"You haven\u2019t had your blood pressure or bloods done in years, and honestly, getting men through the door is the hard part — so while you\u2019re here, let\u2019s use it. Blood pressure, a couple of blood tests for sugar and cholesterol, a quick heart-risk score. Sort those and we don\u2019t just fix tonight, we protect the next twenty years. The pills AND the MOT."' },
      { lbl:'The snoring clue',      txt:'"One more — your partner mentioned heavy snoring? That can point to a sleep condition that also affects energy, blood pressure and, yes, this. Worth checking. Lots of these threads connect."' },
      { lbl:'Open the real story',   txt:'"Can I gently ask how this has been at home? \u2026 Ah. So she\u2019s wondered if you\u2019ve gone off her, maybe worse. That\u2019s so common and so painful, and it\u2019s the opposite of the truth — this is physical, not about how you feel about her. With your okay, sometimes it helps to explain that to her together, so she\u2019s not carrying a story that isn\u2019t true. How have YOU been in yourself with all this?"' },
      { lbl:'Plan + safety-net',     txt:'"So: I\u2019ll start you on sildenafil — take it on an empty-ish stomach, an hour before, and one absolute rule, never with heart \u2018nitrate\u2019 tablets. We\u2019ll book your blood pressure and bloods, and I\u2019d love to help you cut down the cigarettes, which helps the bedroom AND the heart. If you ever get chest pain or breathlessness with exertion or sex, that\u2019s urgent. Come back and we\u2019ll go through your results — and we can loop your wife in if you\u2019d like. You came for pills; you\u2019re leaving with those AND a proper look after you."' },
    ],
    learning:'Erectile dysfunction in a middle-aged man is not just a plumbing problem to be met with a prescription — gradual-onset, organic-pattern ED is a recognised cardiovascular sentinel, because the small penile arteries reveal endothelial/vascular disease (and sometimes diabetes) before the larger coronary vessels. The skill is to honour the request (a PDE5 inhibitor is reasonable, with safety checks — no nitrates, fitness for sexual activity) while using a rare engagement opportunity with a man who hasn\u2019t been seen in years to assess and modify cardiovascular/metabolic risk (BP, glucose/HbA1c, lipids, QRISK, smoking, weight), and to screen related conditions (OSA from snoring, low testosterone, depression). The examinable hidden agenda is the relationship strain and shame — his wife reads the ED as rejection or an affair, his self-esteem and mood are suffering — which must be surfaced sensitively, the misreading corrected (with consent to involve the partner), and mood screened. Handle the embarrassment so "just the pills" doesn\u2019t shut down the conversation: the symptom AND the warning it carries both get addressed.',
    knowledge:{
      guideline:'NICE CKS erectile dysfunction · NICE CG181 CVD risk · BSSM ED guidance · NICE NG23/OSA',
      points:[
        { h:'ED as a cardiovascular warning', t:'Gradual-onset organic ED is an independent marker of cardiovascular risk and often precedes coronary events by years (small-vessel theory). In a man with risk factors, treat ED as an opportunity to assess and reduce CV risk, not merely a symptom to medicate.' },
        { h:'Work-up', t:'Assess BP, HbA1c/fasting glucose, lipids and QRISK; review smoking, alcohol, weight, exercise and medications; examine as indicated; check morning testosterone (with LH/FSH/prolactin if low) if reduced libido/other features. Distinguish gradual organic ED from sudden/situational psychogenic ED (preserved morning/nocturnal erections suggest psychogenic).' },
        { h:'Treat the ED', t:'PDE5 inhibitor (sildenafil etc.) first-line for most. Safety: contraindicated with nitrates/nicorandil; assess cardiovascular fitness for sexual activity; caution in significant cardiac disease. Address reversible factors (smoking cessation, weight loss, alcohol, offending drugs) which improve both ED and CV risk.' },
        { h:'Screen related conditions', t:'Heavy snoring/daytime somnolence → obstructive sleep apnoea (linked to ED, hypertension, CV risk). Consider hypogonadism and depression. These commonly coexist and change management.' },
        { h:'The relationship & mood agenda', t:'ED frequently causes, and is worsened by, relationship strain, shame, low self-esteem and depression; partners may misinterpret it as rejection or infidelity. Explore impact, correct misattributions (with consent involve the partner), and screen mood and risk. Psychological/relationship support is part of treatment.' },
        { h:'Engagement opportunity', t:'Middle-aged men consult infrequently; an ED presentation is a valuable chance to address smoking, weight, BP and CV risk. Frame the wider assessment as care, not a lecture, so embarrassment doesn\u2019t curtail it.' },
        { h:'Never do', t:'Never treat ED as just a prescription in a man with CV risk factors; never miss the cardiovascular/metabolic work-up; never prescribe PDE5 with nitrates; never ignore OSA, mood or the relationship strain; never let embarrassment end the consultation early.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c61, c62, c63, c64);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'testicular-lump': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Jordan Eze', age: '28 years · male',
        pmh: ['Undescended testis as infant — orchidopexy (risk factor)', 'Firm painless right testicular lump ~3 weeks, possibly enlarging', 'Dull dragging sensation that side; no pain/urinary symptoms'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Found lump in the shower. Came only because his girlfriend insisted; minimising.',
        reason: 'Video consultation — testicular lump.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe painlessness', d:'"It doesn\u2019t hurt so it\u2019s nothing." A hard painless intratesticular lump is concerning precisely because it\u2019s painless — don\u2019t reassure it away.' },
        { t:'2–4',  h:'Name the NG12 path',   d:'Examination + direct-access scrotal ultrasound + urgent (2WW) referral. Restate as the action, tagged NICE NG12.' },
        { t:'4–6',  h:'History + risk',        d:'Intratesticular vs epididymal; the orchidopexy/undescended-testis risk factor; arrange in-person exam, not a video impression.' },
        { t:'6–9',  h:'Meet the real fear',    d:'Bravado masks googling + masculinity/fertility terror. Surface it; deliver the good news — highly curable, remaining testis preserves function, sperm storage + prosthesis exist.' },
        { t:'9–12', h:'Refer + attend',        d:'Exam + urgent USS/referral today; return sooner if pain/swelling/systemic; engage the girlfriend with consent; track the result.' }
      ],
      wordPics: {
        fail: 'Accepts "it doesn\u2019t hurt so it\u2019s a cyst", reassures over video and skips examination; misses the NG12 testicular pathway and the orchidopexy risk factor; never surfaces the fear, so a young man with a possible curable cancer is reassured into delay.',
        pass: 'Recognises the lump as concerning, arranges examination + urgent ultrasound/referral, and notes the risk factor; mentions fertility.',
        exc:  'Refuses the painless-equals-benign trap and reads the girlfriend\u2019s insistence as the real signal; states the NG12 2WW + ultrasound precisely; examines in person and weights the orchidopexy history; surfaces the masculinity/fertility fear and answers it with accurate good news (high cure, preserved function, sperm storage, prosthesis); and secures attendance with follow-up.'
      },
      avoid: [
        { dont:'"If it doesn\u2019t hurt it\u2019s almost certainly just a harmless cyst."', instead:'"A firm, painless lump that\u2019s part of the testicle is exactly the kind we check urgently — painless is the concerning sort. I need to examine you and arrange an urgent scan."', why:'Treating painlessness as reassuring misses the classic presentation of testicular cancer.' },
        { dont:'"You booked a video, so I\u2019ll take your word it\u2019s small and we\u2019ll watch it."', instead:'"I do need to examine you in person and get a scrotal ultrasound on the urgent pathway — a lump like this can\u2019t be assessed down a camera."', why:'A video impression cannot characterise an intratesticular lump; watchful waiting risks a curable cancer.' },
        { dont:'"Try not to worry about fertility, let\u2019s just get the scan done."', instead:'"Let\u2019s put the fertility and masculinity worry on the table — the news is good: it\u2019s highly curable, the other testicle keeps things working, and we can store sperm and fit a prosthesis if ever needed."', why:'Brushing past the unspoken masculinity/fertility fear is what makes young men disengage and delay.' }
      ]
    },

    'testicular-torsion': {
      ceg: ['Urgent & unscheduled care', 'Children & young people'],
      stem: {
        name: 'Kai Robson', age: '15 years · male',
        pmh: ['Previously well', 'Sudden severe LEFT testicular pain ~90 min ago during football', 'One episode of vomiting; no fever'],
        meds: ['Ibuprofen given by mother'],
        allergy: 'NKDA',
        recent: '⚠ Mother calling; teenager embarrassed and minimising. Mother suspects "a pulled muscle".',
        reason: 'Telephone — sudden severe testicular pain.'
      },
      timeMap: [
        { t:'0–2',  h:'Name the emergency',  d:'Sudden severe testicular pain + vomiting in a teen = torsion until proven otherwise. Not a pulled muscle until a surgeon excludes it.' },
        { t:'2–4',  h:'Talk to Kai',          d:'Speak to the boy directly, normalise, remove shame fast. Embarrassment is the dangerous barrier.' },
        { t:'4–6',  h:'The clock',            d:'Salvage falls after ~6h; already 90 min in. No watch-and-wait, no waiting for ibuprofen, no routine appointment, no scan that delays surgery.' },
        { t:'6–9',  h:'Act now',              d:'ED now / 999; nil by mouth; say "sudden severe testicular pain, query torsion" to expedite. Confirm transport.' },
        { t:'9–12', h:'Pre-empt + safety-net',d:'No fuss is the WRONG instinct here. Pain easing ≠ resolved (intermittent torsion). Document as suspected torsion; confirm they\u2019re going now.' }
      ],
      wordPics: {
        fail: 'Accepts "pulled muscle from football", advises ibuprofen and rest or a routine appointment; lets the teenager\u2019s embarrassment and the parent\u2019s minimising stall action — and a salvageable testis is lost to delay.',
        pass: 'Recognises torsion, arranges immediate emergency assessment, nil by mouth, and conveys urgency.',
        exc:  'Names the time-critical emergency and refuses the musculoskeletal label; speaks to the young person directly to dismantle the embarrassment fast; conveys the salvage clock without panic; gives precise emergency instructions (999/ED now, nil by mouth, the expediting phrase, transport); and pre-empts the "no fuss" dodge with a clear safety-net that pain easing still needs assessment.'
      },
      avoid: [
        { dont:'"It came on during football, so it\u2019s probably a pulled muscle — rest and ibuprofen."', instead:'"Sudden severe testicular pain with vomiting is treated as a twisted testicle until a surgeon rules it out — that\u2019s an emergency now, not rest and ibuprofen."', why:'A musculoskeletal label on torsion costs the testis; exertion is a torsion trigger, not reassurance.' },
        { dont:'"Let\u2019s give it a couple of hours and see if it settles."', instead:'"We can\u2019t wait — the testicle only survives a few hours without its blood supply and he\u2019s already 90 minutes in. Go to A&E right now or call 999."', why:'Watch-and-wait in suspected torsion squanders the narrow salvage window.' },
        { dont:'"I understand he\u2019s embarrassed — maybe he\u2019d rather be seen tomorrow."', instead:'"Kai, there\u2019s no embarrassment here and this is exactly when making a fuss is right — we need you seen in the next hour, nil by mouth in case you need an operation."', why:'Allowing adolescent shame to defer care is the classic, dangerous delay in torsion.' }
      ]
    },

    'psa-result-conversation': {
      ceg: ['Investigations & results', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Trevor Hammond', age: '55 years · male',
        pmh: ['Asymptomatic — no LUTS', 'Black ethnicity (higher, earlier prostate-cancer risk)', 'Uncle had prostate cancer'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Requesting PSA "for peace of mind" after a colleague\u2019s prostate-cancer diagnosis. Believes a normal PSA = all-clear.',
        reason: 'Video consultation — wants a PSA test.'
      },
      timeMap: [
        { t:'0–2',  h:'Honour the trigger',  d:'Colleague\u2019s diagnosis. Wanting to act is reasonable — make sure what we do is genuinely useful. Ask to explain what PSA really is.' },
        { t:'2–5',  h:'Correct the belief',   d:'Not an all-clear: false positives (BPH, infection, ejaculation, exercise), false negatives, over-diagnosis of indolent cancer → biopsy/treatment harms.' },
        { t:'5–7',  h:'Weight his risk',      d:'Black ethnicity (higher, earlier) + family history genuinely shift toward testing. He\u2019s entitled to PSA after counselling — informed choice, not refusal.' },
        { t:'7–10', h:'Surface the real fear',d:'Unspoken dread of biopsy/impotence/incontinence he hopes a quick normal test avoids. Name it; explain the post-raised-result path (repeat, MRI before biopsy).' },
        { t:'10–12',h:'Support the choice + net',d:'Test now (with interpretation plan) or take time — either reasonable. Pre-test rules (no sex/exercise 48h); screen LUTS/haematuria/bone pain → NG12 if present; follow up the result together.' }
      ],
      wordPics: {
        fail: 'Either reflexively prints a blood form as an "all-clear", or paternalistically refuses; doesn\u2019t correct the misconception, ignores the Black-ethnicity risk weighting, and never surfaces the fear of treatment harms — so the man can\u2019t make an informed choice.',
        pass: 'Corrects the all-clear misconception, gives a balanced benefits/harms discussion, weights his risk factors, screens symptoms, and supports his decision.',
        exc:  'Honours the trigger and delivers a genuine informed-choice conversation; corrects the binary misconception with balance; weights Black ethnicity and family history honestly toward testing; surfaces the unspoken fear of downstream harms and explains the MRI-before-biopsy pathway; screens red flags for an NG12 switch; and supports an autonomous decision with pre-test practicalities and result follow-up.'
      },
      avoid: [
        { dont:'"Sure, I\u2019ll order the PSA — if it\u2019s normal you can stop worrying."', instead:'"It\u2019s not quite an all-clear — it can be raised for harmless reasons and normal when there\u2019s a cancer. Let\u2019s do it as an informed choice so the result actually means something to you."', why:'Framing PSA as a binary all-clear sets up false reassurance or false alarm.' },
        { dont:'"Honestly, PSA causes more harm than good — I wouldn\u2019t bother at your age."', instead:'"There are real harms to weigh, but you\u2019re of Black ethnicity with a family history, which tips the balance — you\u2019re entitled to the test after we\u2019ve talked it through. It\u2019s your choice."', why:'A blanket refusal ignores his elevated risk and his right to an informed PSA.' },
        { dont:'"Let\u2019s not get into all the what-ifs — do you want the test or not?"', instead:'"Part of deciding is understanding what happens if it\u2019s raised — repeat test, usually an MRI before any biopsy — and I sense the biopsy/treatment side is part of what worries you. Let\u2019s talk about that."', why:'Skipping the downstream pathway and the hidden fear prevents a genuinely informed decision.' }
      ]
    },

    'ed-cardiovascular': {
      ceg: ['Long-term conditions & cancer', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Marcus Bell', age: '49 years · male',
        pmh: ['Gradual-onset ED over ~12 months', 'Smoker 15/day, overweight; father MI at 52', 'No BP/bloods for years; heavy snorer (partner reports)'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Embarrassed; requests sildenafil and "no song and dance". Tension at home.',
        reason: 'Video consultation — wants ED medication.'
      },
      timeMap: [
        { t:'0–2',  h:'Disarm the shame',    d:'Common, sensible to come; yes he can have a prescription. But ask two minutes — this symptom is more useful than he thinks.' },
        { t:'2–5',  h:'The canary',          d:'Gradual organic ED + smoking + father\u2019s MI at 52 = cardiovascular warning. Small penile arteries show disease first. Act FOR him, not to scare.' },
        { t:'5–7',  h:'Turn it into an MOT', d:'Years since any check — use the visit: BP, glucose/HbA1c, lipids, QRISK, smoking/weight. Snoring → OSA screen. Pills AND the MOT.' },
        { t:'7–9',  h:'Open the real story', d:'Relationship strain — wife reads it as rejection/affair. Correct the misattribution; with consent involve her. Screen his mood.' },
        { t:'9–12', h:'Treat + safety-net',   d:'Sildenafil with safety rules (never with nitrates; CV fitness for sex); smoking cessation; CV work-up + review; chest pain/breathlessness on exertion → urgent.' }
      ],
      wordPics: {
        fail: 'Hands over sildenafil and ends the consult; misses ED as a cardiovascular sentinel in a high-risk man, does no BP/bloods/CV risk, ignores the snoring (OSA) and the relationship strain and mood — a major missed-prevention opportunity.',
        pass: 'Prescribes a PDE5 inhibitor with safety checks AND recognises ED as a CV warning, arranging BP/bloods/CV risk and addressing smoking; touches on the relationship impact.',
        exc:  'Disarms the embarrassment so the conversation stays open; frames gradual ED as a cardiovascular canary and converts a rare male engagement into a full CV/metabolic MOT (BP, glucose, lipids, QRISK, smoking/weight, OSA screen); surfaces and reframes the relationship strain (it\u2019s physical, not rejection) with consent to involve the partner and a mood screen; and treats the ED safely — pills AND prevention.'
      },
      avoid: [
        { dont:'"No problem, here\u2019s a prescription for sildenafil — all sorted."', instead:'"You can have the prescription — but give me two minutes, because gradual ED like yours, with your dad\u2019s heart attack and the smoking, can be an early warning for your heart. Let\u2019s use this visit properly."', why:'A pill-only response misses ED as a cardiovascular sentinel and a rare prevention opportunity.' },
        { dont:'"The snoring\u2019s not really relevant to this — let\u2019s focus on the ED."', instead:'"Heavy snoring can point to a sleep condition that affects blood pressure, energy and erections too — worth checking, as these threads connect."', why:'Dismissing the OSA clue overlooks a linked, treatable contributor to ED and CV risk.' },
        { dont:'"Try not to worry what your wife thinks — the tablets should fix things."', instead:'"Can I ask how it\u2019s been at home? If she\u2019s wondered whether you\u2019ve gone off her, that\u2019s common and untrue — it\u2019s physical. With your okay, explaining that together can really help."', why:'Ignoring the relationship strain and misattribution leaves the most distressing part of the problem untouched.' }
      ]
    }
  });

})();
