/* ================================================================
   Reasoning GP — SCA Practice case library

   ORIGINAL cases inspired by common UK SCA themes — not copied from
   any published case bank.  Each case is built around the RCGP SCA
   marking framework (Tasks / Relating to Others / Global Skills).

   Each case schema:
     id        slug
     title     short display title
     type      'video' | 'telephone' | 'f2f' | 'home' | 'data'
     duration  minutes (default 12)
     meta      {age, sex, setting, system}
     brief     doctor's brief — what shows before the consultation
     script    role-play script:
                 opening    first thing patient says
                 facts      [{topic, text}]   gradual reveal (release when asked)
                 ice        {ideas, concerns, expectations}
                 cues       [string]   cues that should prompt deeper exploration
                 data       optional: data interpretation packet (LFTs, ECG, etc.)
     checkpoints  8 RCGP behaviours, each tied to a domain
     worked     'gold-standard' phrases to model
     learning   one-paragraph teaching point
   ================================================================ */

window.SCA_CASES = [

  /* ============= 1. VIDEO — Hypertension in young Black man ============= */
  {
    id:'htn-young-bp', title:'New diagnosis of hypertension', type:'video', duration:12,
    meta:{ age:32, sex:'M', setting:'Routine well-man check, clinic BP 162/96 mmHg today.', system:'Cardiovascular' },
    brief:'Mr Marcus Whitfield, 32, attends following a routine well-man review last week where his clinic BP was 162/96. Repeat in the surgery this morning is 158/94. He has no past medical history. He works as a software engineer, plays football weekly, and is of African-Caribbean heritage. His father had a stroke at 51. He is married with a 6-month-old baby. He has come because the practice nurse asked him to.',
    script:{
      opening:'"Honestly, I feel fine. The nurse said my blood pressure was up but I think it\'s probably because I was rushing to get here. I don\'t want to be on tablets for the rest of my life like my dad was."',
      facts:[
        { topic:'Lifestyle',         text:'Eats takeaway 3-4 nights/week — long working hours. Two cans of energy drink a day. Six pints of beer at the weekend. No smoking.' },
        { topic:'Family history',    text:'Father had a haemorrhagic stroke at 51, partially recovered, died of pneumonia at 60. Mother has T2DM. Two uncles on dad\'s side have hypertension.' },
        { topic:'Symptoms',          text:'No headache, vision changes, chest pain or breathlessness. Occasional fatigue but he attributes that to the baby.' },
        { topic:'Sleep',             text:'Snores heavily — partner has moved into the spare room. Often wakes unrefreshed. Falls asleep at his desk in afternoons.' },
        { topic:'Work / stress',     text:'New role with very tight delivery deadlines. Feels he can\'t take time off. Worries about losing the job and providing for the baby.' },
        { topic:'Past attempts',     text:'Tried a fitness app three months ago — gave up after two weeks.' },
      ],
      ice:{
        ideas:'He thinks it\'s "white-coat effect" because he was running for the appointment.',
        concerns:'Terrified of ending up like his father — disabled by a stroke before his child grows up. Convinced tablets will mean side effects and weakness.',
        expectations:'Wants to be told it\'s a mistake and to be discharged. If pressed, willing to consider another way.'
      },
      cues:['Mentions his father in passing — wants the GP to ask more.','Glances away when mentioning the energy drinks.','Repeats "I just don\'t want to live in fear" if rushed.']
    },
    checkpoints:[
      { dom:'tasks', text:'Confirms diagnosis with ABPM or HBPM rather than treating on a single clinic reading' },
      { dom:'tasks', text:'Risk-stratifies — orders U&Es, eGFR, ACR, lipids, HbA1c, ECG, QRISK3' },
      { dom:'tasks', text:'Screens for OSA given snoring + daytime sleepiness' },
      { dom:'tasks', text:'Plans culturally-appropriate first-line drug (CCB, not ACEi as first-line in Afro-Caribbean with no DM)' },
      { dom:'rto',   text:'Acknowledges father\'s stroke and explicit fear before any clinical agenda' },
      { dom:'rto',   text:'Shares QRISK as an actual percentage rather than a vague "low risk"' },
      { dom:'rto',   text:'Negotiates lifestyle target with one specific, achievable goal (e.g. cap energy drinks at 1/day)' },
      { dom:'gs',    text:'Safety-nets 999 symptoms in plain language and books a follow-up within 4 weeks' },
    ],
    worked:[
      { lbl:'Open question',          txt:'"Marcus, before we talk about the numbers — tell me what was going through your mind when the nurse said your blood pressure was up?"' },
      { lbl:'Acknowledge fear',       txt:'"You\'ve seen what untreated high blood pressure can do to a family. That\'s the most important thing to deal with first, even before the plan."' },
      { lbl:'Reframe medication',     txt:'"For someone of your background and age, the modern first-choice is a different drug from the one your dad will have been on — and the side-effect picture is very different too."' },
      { lbl:'Negotiation',            txt:'"You don\'t have to fix everything today. If we picked one change that would actually stick — what would it be?"' },
      { lbl:'Check understanding',    txt:'"Before we finish — when your partner asks tonight what the doctor said, what will you tell her?"' },
      { lbl:'Safety-net',             txt:'"Sudden severe headache, vision change, weakness on one side, or chest pain — that\'s a 999 call. Anything else, you ring us."' },
    ],
    learning:'In men <55 of African or African-Caribbean heritage with hypertension and no diabetes, NICE first-line is CCB (not ACEi). The "open question first, then ICE, then plan" structure is more important than the drug name in this station — the family history of stroke is the dominant cue and must be answered before anything clinical.'
  },

  /* ============= 2. TELEPHONE — RIF pain in young woman ============= */
  {
    id:'rif-pain-young-female', title:'Right iliac fossa pain', type:'telephone', duration:12,
    meta:{ age:28, sex:'F', setting:'Telephone triage — patient called surgery 30 minutes ago.', system:'Surgical / Gynae' },
    brief:'Layla Ahmed, 28, calls the surgery with right-sided lower abdominal pain since this morning. Receptionist has triaged to a telephone consultation with the duty GP. No previous notes of significance. LMP 6 weeks ago. Married, no children, works as a pharmacist.',
    script:{
      opening:'"Doctor, I\'ve had this awful pain in the lower right side of my tummy since I woke up. I\'ve never had anything like this before. I don\'t know what to do."',
      facts:[
        { topic:'Pain detail',     text:'Constant cramping, gradually worsening over 8 hours. 6/10 at rest, 8/10 if she moves. No radiation. Sharp twinge if she coughs.' },
        { topic:'Other symptoms',  text:'Nausea, no vomiting. Light brown spotting on the toilet paper this afternoon — first time she\'s noticed. No urinary symptoms, no bowel symptoms.' },
        { topic:'Periods',         text:'Periods usually regular every 28 days; last period was approximately 6 weeks ago. She thinks she might be late, hasn\'t tested.' },
        { topic:'Contraception',   text:'Came off the COCP 4 months ago because she and her husband had started trying for a baby.' },
        { topic:'PMH',             text:'Chlamydia treated aged 19. One episode of laparoscopic surgery for an ovarian cyst at 23.' },
        { topic:'Red flags if probed', text:'Reports lightheadedness if she stands up too quickly. Some left shoulder-tip ache she dismissed as sleeping awkwardly.' },
      ],
      ice:{
        ideas:'Thinks it might be appendicitis like her cousin had.',
        concerns:'Frightened — she\'s been trying to get pregnant and is worried she might lose a baby she didn\'t know she had.',
        expectations:'Wants the GP to tell her whether to go to A&E or wait it out.'
      },
      cues:['Mentions "we\'ve been trying" — invitation to discuss pregnancy.','Goes quiet when asked about shoulder pain.','Says "I really thought we\'d be lucky this month".']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises ectopic pregnancy as the leading differential and asks about LMP, contraception, and intercourse' },
      { dom:'tasks', text:'Elicits red flags: shoulder-tip pain, lightheadedness, bleeding' },
      { dom:'tasks', text:'Arranges same-day Early Pregnancy Unit (EPAU) or A&E review — does NOT plan a routine GP review' },
      { dom:'tasks', text:'Advises urine pregnancy test before leaving home, but does not delay transfer waiting for the result' },
      { dom:'rto',   text:'Acknowledges the emotional weight ("you\'ve been trying for a baby")' },
      { dom:'rto',   text:'Uses plain language about ectopic pregnancy — explains why this is urgent without frightening' },
      { dom:'gs',    text:'Safety-nets clearly: 999 if collapse / severe sudden worsening / heavy bleeding' },
      { dom:'gs',    text:'Confirms transport and whether husband / family are available' },
    ],
    worked:[
      { lbl:'Open question',       txt:'"Layla, I want to hear the story in your own words first — what\'s the pain been doing since you noticed it this morning?"' },
      { lbl:'Pivot to pregnancy',  txt:'"You mentioned your period is late — and you\'ve been trying. That makes me want to think carefully about pregnancy as part of this picture."' },
      { lbl:'Naming the worry',    txt:'"One of the things we always have to rule out with this kind of pain is a pregnancy that\'s settled outside the womb — that\'s called an ectopic — and that\'s why I want you seen today, not tomorrow."' },
      { lbl:'Acknowledging emotion', txt:'"I can hear how much this matters. Whatever this turns out to be, you\'re doing the right thing by ringing now."' },
      { lbl:'Safety-net',          txt:'"If you feel suddenly faint, the pain gets dramatically worse, or you start bleeding heavily — that\'s a 999 call, not a wait."' },
    ],
    learning:'Any woman of reproductive age with abdominal pain has an ectopic until proven otherwise — LMP, contraception, sexual activity. Shoulder-tip pain and orthostatic symptoms shift the probability sharply. EPAU is the destination, not a routine GP review. The emotional layer here — "we\'ve been trying" — is the marking difference between Clear and Excellent.'
  },

  /* ============= 3. VIDEO — Knee pain in older walker ============= */
  {
    id:'knee-pain-walker', title:'Sore knee in keen hill walker', type:'video', duration:12,
    meta:{ age:65, sex:'M', setting:'Video consultation, requested by patient.', system:'MSK' },
    brief:'Mr Donald Harris, 65, retired teacher and keen long-distance hill walker, attends with right knee pain. He has scheduled a 200-mile Coast-to-Coast walk in 8 weeks\' time. PMH: BMI 31. Statin for hyperlipidaemia. No prior knee problems.',
    script:{
      opening:'"Doctor, I\'ve got a problem with my right knee and I have to be honest with you — I don\'t want to be told to stop. I\'ve got Wainwright\'s Coast-to-Coast booked in two months."',
      facts:[
        { topic:'Pain',          text:'Aching medial knee pain, worse going downhill and on stairs. Six weeks. No swelling, no locking, no giving way. Stiff for ~15 mins in the morning.' },
        { topic:'Function',      text:'Can walk 6 miles before the pain becomes limiting. Used to do 15 without issue.' },
        { topic:'PMH',           text:'Mild osteoarthritis confirmed in his left knee 4 years ago, settled with physiotherapy.' },
        { topic:'Tried so far',  text:'Paracetamol — minimal effect. Ibuprofen gel — some help. Stopped using his walking poles a year ago because "he didn\'t need them".' },
        { topic:'Life context',  text:'This walk is in memory of his late wife, who he had planned to do it with. He has trained for nine months. He is doing it alone.' },
        { topic:'Concerns if probed', text:'If GP listens, he opens up about loneliness since wife\'s death and how this walk is what is keeping him going.' },
      ],
      ice:{
        ideas:'Thinks it\'s "wear and tear" but expects an injection that will fix it.',
        concerns:'Genuinely afraid of being told to cancel. Wants to honour his wife.',
        expectations:'A steroid injection or strong painkillers to get him through the walk.'
      },
      cues:['Photo of late wife — he holds it up to the camera.','Says "Margaret would have hated me to give up".','Looks visibly distressed if you suggest cancelling.']
    },
    checkpoints:[
      { dom:'tasks', text:'Asks for the knee examination findings (effusion, ROM, joint-line tenderness, McMurray, ligaments) — provided on request, as in the exam' },
      { dom:'tasks', text:'Recognises probable medial-compartment OA — does not arrange MRI or X-ray reflexively' },
      { dom:'tasks', text:'Offers structured non-operative plan: weight, quads strengthening, topical NSAID, paracetamol, poles, downhill technique' },
      { dom:'tasks', text:'Discusses oral NSAID risk in older patient on statin, offers PPI cover if needed' },
      { dom:'rto',   text:'Acknowledges the meaning of the walk — Margaret, grief, what completing it would mean' },
      { dom:'rto',   text:'Negotiates: doesn\'t order him to cancel; offers a graded plan with check-in at 4 weeks' },
      { dom:'gs',    text:'Safety-nets red flags: sudden swelling, locking, giving way, systemic symptoms' },
      { dom:'gs',    text:'Considers signposting bereavement support (Cruse) tactfully' },
    ],
    worked:[
      { lbl:'Open question',      txt:'"Donald — before we talk about the knee, tell me about the walk. Why this one, why now?"' },
      { lbl:'Acknowledging grief', txt:'"I can hear that this is for Margaret as much as it is for you. Let\'s see what we can do to get you on that path."' },
      { lbl:'Honest framing',     txt:'"This looks like wear-and-tear in the inner side of the knee. That doesn\'t mean you can\'t walk — but it does mean we need to load the knee differently."' },
      { lbl:'Shared decision',    txt:'"I don\'t want to tell you to cancel. I want us to write a four-week plan and see what the knee does. If it gets worse, we re-talk. Deal?"' },
      { lbl:'Bereavement signpost', txt:'"There\'s a charity called Cruse that helps with the kind of long road you\'re on — would you like me to send the link?"' },
    ],
    learning:'OA in primary care is non-operative and patient-centred. The marking gap is rarely the medicine — it\'s noticing the bereavement subtext, naming what the walk means, and negotiating rather than dictating. Imaging adds nothing when the diagnosis is clear and surgery is not the answer.'
  },

  /* ============= 4. VIDEO — Confused grandmother, daughter connecting from the flat ============= */
  {
    id:'home-visit-confusion', title:'Confused grandmother — video from her home', type:'video', duration:12,
    meta:{ age:84, sex:'F', setting:'Video consultation — daughter connects the call from her mother\'s flat; both on screen.', system:'Older adult / safeguarding' },
    brief:'Mrs Edith Saunders, 84, lives in a ground-floor flat. PMH: hypertension, osteoarthritis, mild memory impairment last documented 18 months ago. Daughter (June, primary carer) requested an urgent consultation because mother has been "confused, more forgetful, and not eating" for two weeks. June connects a video call from the flat, sitting beside Edith.',
    script:{
      opening:'(June starts the call, Edith beside her.) "Thank goodness I got through, doctor. Mum\'s been getting worse for two weeks — she\'s leaving the cooker on, she didn\'t recognise me on Sunday, and she\'s only picking at her food. I don\'t know what to do anymore." Then Edith says, vaguely: "I\'m fine, I just had a bit of a funny turn."',
      facts:[
        { topic:'Recent change',  text:'Two-week trajectory of worsening confusion. Day-to-day fluctuating — better in the morning, worse evenings.' },
        { topic:'Urinary',        text:'Smelly urine for the past week, daughter has noticed. Edith brushes it off.' },
        { topic:'Medication',     text:'Started co-codamol 30/500 four weeks ago after a knee flare — prescribed by another GP.' },
        { topic:'Drinking / eating', text:'Not drinking fluids — daughter says she gets one cup of tea down her in a day.' },
        { topic:'Safeguarding',   text:'If GP gently probes June: she is the only carer, has not had a respite break in 8 months, is using her own pension to top up mother\'s food shop, and broke down in tears in the corridor last week.' },
        { topic:'Falls',          text:'One unwitnessed fall last Tuesday — no injury. Daughter found Edith on the floor of the bathroom.' },
      ],
      ice:{
        ideas:'June thinks "it\'s dementia getting worse". Edith says "I\'m fine".',
        concerns:'June is terrified mother will die at home alone before help arrives. She has not slept properly in a fortnight.',
        expectations:'June wants something doing today — admission, district nurse, anything.'
      },
      cues:['June\'s hands shake as she steadies the phone.','June mentions "a strong smell" when helping Edith to the toilet.','The kettle behind them has visible burn marks.']
    },
    checkpoints:[
      { dom:'tasks', text:'Considers delirium first (UTI / opiate toxicity / dehydration / electrolytes) — not dementia by default' },
      { dom:'tasks', text:'Gathers what a video allows — observes Edith, cognitive screen (4AT/AMTS questions over video), asks June for the home BP/temperature readings — and arranges same-day in-person review for examination + urinalysis' },
      { dom:'tasks', text:'Sends urine MSU; arranges bloods (U&Es, FBC, CRP, glucose, calcium, B12/folate, TSH)' },
      { dom:'tasks', text:'Reviews co-codamol — stops or reduces; considers laxative cover' },
      { dom:'rto',   text:'Acknowledges June\'s exhaustion and asks how SHE is, not only about mother' },
      { dom:'rto',   text:'Speaks directly to Edith (not over her), assesses capacity for the decisions at hand' },
      { dom:'gs',    text:'Considers carer support — respite, social services referral, GP carer review for June' },
      { dom:'gs',    text:'Safety-nets: when to call 999 (drowsy, fitting, sudden deterioration) vs surgery (worsening confusion, falls)' },
    ],
    worked:[
      { lbl:'To June, opening',    txt:'"June — before I talk to your mum, tell me what\'s happened in the last fortnight, in your own words?"' },
      { lbl:'To Edith, directly',  txt:'"Edith — I\'m Dr Patel, can you see me alright? Your daughter\'s been worried about you. Tell me how you\'ve been."' },
      { lbl:'Framing delirium',    txt:'"The very rapid change over two weeks tells me this might not be the dementia getting worse — it can be something else on top, often something we can treat."' },
      { lbl:'For the carer',       txt:'"June — I want to ask about you, not just your mum. When did you last have a night off?"' },
      { lbl:'Safety-net',          txt:'"If she becomes drowsy, has a fit, or her breathing changes — that\'s 999. If she gets more confused or has another fall — ring us."' },
    ],
    learning:'A fortnight of new confusion in an older adult is delirium until proven otherwise — the screen is UTI, drugs (opiates), dehydration, infection, electrolytes. The hidden examiner agenda here is the carer: spotting June\'s burden and offering her something IS the consultation\'s Relating-to-Others mark.'
  },

  /* ============= 5. VIDEO — Acne in teenager ============= */
  {
    id:'acne-teen', title:'Acne in a 16-year-old', type:'video', duration:12,
    meta:{ age:16, sex:'F', setting:'Video appointment, mother is also on the screen.', system:'Dermatology / adolescent' },
    brief:'Sophie Edwards, 16. Mother (Karen) has booked the appointment. Sophie has had acne for 18 months — increasing in severity. She is currently sitting beside her mother, head slightly down. No PMH. Doing GCSEs this summer.',
    script:{
      opening:'(Karen, talking first:) "Hi doctor, I\'ve booked Sophie in because her acne has got really bad and she\'s not coping. The over-the-counter stuff isn\'t working. We need something strong." (Sophie says nothing.)',
      facts:[
        { topic:'Lesions',      text:'Inflammatory papules and pustules across forehead, cheeks, jawline. A few cystic lesions on chin. Mild scarring forming.' },
        { topic:'Tried so far', text:'Benzoyl peroxide 5% — caused stinging, gave up. Tea-tree oil. Various Reddit-recommended cleansers.' },
        { topic:'Psychological', text:'If the GP can talk to Sophie alone (or asks Sophie directly), she discloses: stopped going to PE. Stopped sleepovers. Has missed school assemblies because of "headaches". Cries before video calls with friends. No active suicidal thoughts but feels hopeless.' },
        { topic:'Periods',       text:'Regular. No PCOS features. Not sexually active.' },
        { topic:'Family',        text:'Mother had bad acne until early 20s, treated with isotretinoin. Sophie knows this.' },
      ],
      ice:{
        ideas:'Sophie thinks it\'s never going to go away. Karen thinks they need "the same tablet I had".',
        concerns:'Sophie — being judged, falling out with friends. Karen — Sophie\'s mental health.',
        expectations:'Karen wants isotretinoin. Sophie just wants someone to listen.'
      },
      cues:['Sophie\'s body language closes off when mum speaks.','Sophie touches her chin repeatedly.','Karen interrupts when Sophie tries to answer.']
    },
    checkpoints:[
      { dom:'tasks', text:'Grades the acne (mild/moderate/severe; comedonal vs inflammatory vs nodulocystic)' },
      { dom:'tasks', text:'Starts a structured first-line: topical adapalene + benzoyl peroxide combination, or fixed-combo treatment' },
      { dom:'tasks', text:'Recognises when oral antibiotic (lymecycline) is appropriate; understands when to refer for isotretinoin' },
      { dom:'tasks', text:'Screens for psychological impact — explicitly, not as a tick-box' },
      { dom:'rto',   text:'Creates space for Sophie to speak — asks Karen if it\'s OK to hear from Sophie directly first' },
      { dom:'rto',   text:'Manages the mother\'s expectation about isotretinoin without dismissing it' },
      { dom:'gs',    text:'Considers safeguarding the consultation: offers a private follow-up Sophie can attend alone' },
      { dom:'gs',    text:'Safety-nets — mental health worsening, suicidal ideation; signposts (Mind, Kooth, Papyrus HOPELINEUK)' },
    ],
    worked:[
      { lbl:'Inviting Sophie',     txt:'"Karen, thank you for booking this. Sophie — would it be OK if I heard from you first, in your own words?"' },
      { lbl:'Naming the impact',   txt:'"Acne isn\'t just on the skin — it shapes how you walk into a room. Tell me what it\'s been like for you at school."' },
      { lbl:'Reframing isotretinoin', txt:'"Isotretinoin is brilliant when it\'s the right answer, but it lives with the specialists. Let\'s use the first three months really well — that often changes the conversation."' },
      { lbl:'Private follow-up',   txt:'"I\'d love to see you again, Sophie, in four weeks — and you\'re welcome to come on your own if that\'s easier."' },
      { lbl:'Mental-health safety-net', txt:'"If you feel hopeless or you start having thoughts of hurting yourself — Papyrus HOPELINEUK is open every day; the number is 0800 068 41 41. And I want you to come and find me."' },
    ],
    learning:'Adolescent acne is almost always also a psychological consultation. The marking failure is letting a parent dominate the airtime and leaving without hearing from the patient themselves. Topical adapalene/BPO is the first-line structure NICE recommends; oral antibiotics are time-limited adjuncts; isotretinoin is consultant-prescribed.'
  },

  /* ============= 6. TELEPHONE — Husband ringing about wife's mood ============= */
  {
    id:'third-party-meno', title:'Husband worried about wife\'s mood (perimenopause)', type:'telephone', duration:12,
    meta:{ age:52, sex:'F (caller is husband)', setting:'Telephone call from husband.', system:'Women\'s health / ethics' },
    brief:'Mr Andrew Carter rings the surgery about his wife, Mrs Helen Carter (52). He says she has "completely changed in six months" — irritable, exhausted, snapping at the children. Helen has not booked an appointment herself. There is no consent on file for you to discuss her care with Andrew.',
    script:{
      opening:'"Doctor, thank you for calling back. I\'m at my wit\'s end. My wife Helen is — she\'s just not herself. She\'s biting our daughter\'s head off, she\'s not sleeping, she sat at the kitchen table last night and cried for an hour. Can you put her on HRT or something? I think it\'s the menopause."',
      facts:[
        { topic:'Background',     text:'Married 22 years. Two daughters (16, 12). Helen works as a teaching assistant.' },
        { topic:'Symptoms (as Andrew describes)', text:'Mood swings, night sweats, exhaustion, low libido (Andrew is uncomfortable mentioning this). Periods irregular last 8 months.' },
        { topic:'Andrew\'s frustration', text:'Has tried to talk to Helen but she shuts him down. He feels he\'s "doing the right thing" by ringing.' },
        { topic:'Hidden cue if probed', text:'Andrew mentions in passing that Helen "doesn\'t want me near her" — there\'s a hint of marital distress and possible undisclosed pressure. If gently asked about safety, Andrew says she\'s safe but admits they had a row last week that scared their younger daughter.' },
        { topic:'Helen\'s view',  text:'Andrew has not asked Helen whether she wants him to ring. He assumed she\'d be grateful.' },
      ],
      ice:{
        ideas:'Andrew thinks "menopause" — wants a prescription started for Helen.',
        concerns:'He\'s frightened of losing the marriage and frightened the children are seeing too much.',
        expectations:'A prescription. A quick fix.'
      },
      cues:['Pause when he says "she doesn\'t want me near her".','Voice cracks when mentioning his daughter.','Tries to skip ahead to "so can you start her on something".']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises this is a third-party call — cannot prescribe or share Helen\'s information without her consent' },
      { dom:'tasks', text:'Listens to the concern fully without breaching confidentiality boundaries' },
      { dom:'tasks', text:'Plan: invites Helen to make her own appointment; offers general information about perimenopause for Andrew\'s reading' },
      { dom:'tasks', text:'Screens (sensitively) for any safeguarding concern — domestic conflict, child witnessing' },
      { dom:'rto',   text:'Acknowledges Andrew\'s distress without dismissing him' },
      { dom:'rto',   text:'Explains the confidentiality principle in plain English — without sounding bureaucratic' },
      { dom:'gs',    text:'Offers a named slot for Helen and information she can use (NHS perimenopause page, Women\'s Health Concern)' },
      { dom:'gs',    text:'Safety-nets — if Helen\'s mood worsens, if she expresses self-harm, what to do' },
    ],
    worked:[
      { lbl:'Acknowledge',         txt:'"Andrew — thank you for ringing. I can hear how worried you are and how much you love her. Before I say anything, I have to be straight with you about what I can and can\'t do on a call about someone else."' },
      { lbl:'Confidentiality',     txt:'"Helen hasn\'t asked me to talk about her medical care, and I can\'t prescribe for her without seeing her. What I can do is listen, and we can think about how to get her into the room."' },
      { lbl:'Reframe ownership',   txt:'"The single most useful thing you could do is tell Helen you\'re worried and ask if she\'d let you book an appointment for her — not in secret."' },
      { lbl:'Information offer',   txt:'"I\'ll send you a couple of links — NHS Menopause and Women\'s Health Concern — so the conversation has somewhere to start."' },
      { lbl:'Safeguarding',        txt:'"If she ever says she wants to hurt herself, or you\'re worried about either of you that night — Samaritans 116 123, and our duty doctor is here 8 to 6."' },
    ],
    learning:'Third-party calls are common and high-yield SCA. The marking is in (1) holding the confidentiality line without being cold; (2) hearing the husband\'s fear rather than dispatching him with a script; (3) leaving with a named next step (Helen\'s own appointment) and resources both partners can use.'
  },

  /* ============= 7. VIDEO — Persistent cough in smoker, weight loss ============= */
  {
    id:'cough-smoker-2ww', title:'Persistent cough in a smoker', type:'video', duration:12,
    meta:{ age:56, sex:'M', setting:'Booked video appointment. Patient self-referred.', system:'Respiratory / cancer' },
    brief:'Mr Raymond Powell, 56, builder, smokes 20/day for 35 years. Attends with a "chesty cough" of three months. PMH: hypertension, well-controlled on ramipril. No previous chest imaging on record.',
    script:{
      opening:'"Cheers, doctor. Listen — I\'ve had this cough hanging on for ages and I just want some antibiotics so I can get back on site."',
      facts:[
        { topic:'Cough',         text:'Dry-ish, occasionally productive of clear sputum. Three months. Worse at night. Has changed in character — deeper, harsher.' },
        { topic:'Other symptoms', text:'Voice "gone gravelly" for six weeks — he\'s been blaming the dust. Lost about a stone he can\'t account for. Tired more than usual.' },
        { topic:'Smoking',       text:'20/day for 35 years. Has tried to quit twice. Last quit attempt: three years ago, lasted four months.' },
        { topic:'Cues if probed', text:'Says (almost casually) that he coughed up "a streak of blood" last week. Tried not to think about it.' },
        { topic:'Family / social', text:'Wife had breast cancer 10 years ago, in remission. Two grown children. He is fearful but covers it with humour.' },
      ],
      ice:{
        ideas:'Thinks it\'s the dust on site or "just a long cold".',
        concerns:'(Hidden) Lung cancer. He hasn\'t said the word out loud.',
        expectations:'Antibiotics, then back to work tomorrow.'
      },
      cues:['Brushes past the blood quickly when he mentions it.','Asks "It\'s not anything sinister, is it?"','Tone changes when he talks about his wife.']
    },
    checkpoints:[
      { dom:'tasks', text:'Elicits the red flags: ≥3 weeks cough, haemoptysis, hoarse voice, weight loss, smoker' },
      { dom:'tasks', text:'Arranges urgent (2-week-wait) chest X-ray as per NICE NG12 suspected cancer pathway' },
      { dom:'tasks', text:'Does NOT prescribe antibiotics reflexively' },
      { dom:'tasks', text:'Offers smoking-cessation support proactively even now' },
      { dom:'rto',   text:'Picks up the throwaway about blood and slows down to address it' },
      { dom:'rto',   text:'Uses honest, lay-language framing of the 2WW — "an urgent X-ray to rule out anything sinister"' },
      { dom:'gs',    text:'Safety-nets: massive haemoptysis, breathlessness at rest, chest pain → A&E' },
      { dom:'gs',    text:'Books explicit follow-up to discuss results — does not leave outcome to a letter' },
    ],
    worked:[
      { lbl:'Open question',       txt:'"Raymond — three months is a long time for a cough. Walk me through how it\'s changed from when it first started."' },
      { lbl:'Pivot on the blood',  txt:'"I want to come back to something you said quickly — a streak of blood last week. Tell me a bit more about that."' },
      { lbl:'Honesty about 2WW',   txt:'"With your history of smoking and these features, I want to be straight: I\'m going to arrange an urgent X-ray to rule out anything sinister. Most people on this pathway get the all-clear, but it would be wrong of me not to do it properly."' },
      { lbl:'Smoking',             txt:'"You\'ve quit before for four months — that means you can. When you\'re ready, the stop-smoking team has more in the locker now than they did three years ago."' },
      { lbl:'Safety-net',          txt:'"If you cough up more than a streak of blood, get suddenly breathless, or develop chest pain — A&E, not the surgery."' },
    ],
    learning:'The marking trapdoor here is the patient asking for antibiotics — accepting the framing makes you miss the 2WW. The single highest-yield behaviour is slowing down on the throwaway phrase ("a streak of blood") and naming the worry explicitly. NICE NG12: ≥40 y/o smoker with unexplained cough → urgent CXR.'
  },

  /* ============= 8. VIDEO — T2DM insulin uptitration with Ramadan ============= */
  {
    id:'insulin-ramadan', title:'Insulin in poorly-controlled T2DM, Ramadan approaching', type:'video', duration:12,
    meta:{ age:48, sex:'M', setting:'Video diabetes review — booked by the practice nurse.', system:'Endocrine / cultural' },
    brief:'Mr Imran Shah, 48, T2DM diagnosed 7 years ago. HbA1c 84 mmol/mol (target 53). BMI 36. On metformin 1g BD + gliclazide 80mg BD. Practising Muslim — Ramadan begins in 5 weeks. Works as a taxi driver. No retinopathy at last screen.',
    script:{
      opening:'"Salaam doctor. The diabetic nurse rang me and said my sugars are bad and I need a stronger treatment. But Ramadan\'s in five weeks. I\'m not stopping fasting, doctor."',
      facts:[
        { topic:'Diabetes story', text:'Has not seen a GP for diabetes in 18 months. Skips clinic appointments because of taxi work and shift patterns. Self-monitoring last 2 weeks: fastings 11-14 mmol/L.' },
        { topic:'Lifestyle',      text:'Eats one large meal at night after his shift, often takeaway. Sedentary. Has lost weight in the past with intermittent fasting.' },
        { topic:'Faith / Ramadan', text:'Has fasted every year since he became a Muslim 12 years ago. His extended family will be observing. He fasts even on the long summer days. He feels stronger spiritually when fasting.' },
        { topic:'Family',         text:'Father had T2DM, died of MI aged 60. Brother has had a stent. He is scared but does not say it directly.' },
        { topic:'Concerns about insulin', text:'Believes "insulin is the last stop before death". A cousin started insulin and died within two years. Equates it with end-stage disease.' },
      ],
      ice:{
        ideas:'Insulin = final stage. Ramadan = non-negotiable.',
        concerns:'Death like his father. Letting his community see him "break" fasting.',
        expectations:'Wants to keep tablets, fast normally, and be told he\'s "OK".'
      },
      cues:['Pauses when his father is mentioned.','Looks at his hands when "insulin" is said.','Brightens when GP shows knowledge of Ramadan rulings.']
    },
    checkpoints:[
      { dom:'tasks', text:'Reviews the picture — HbA1c 84 is far off target, complications screen, current therapy maxed' },
      { dom:'tasks', text:'Considers SGLT2 inhibitor + GLP-1 RA (cardio-renal protection, weight, fasting safety) before insulin' },
      { dom:'tasks', text:'If insulin is needed: explains it is treatment, not failure; uses Diabetes UK / IDF Ramadan guidance for dose adjustment' },
      { dom:'tasks', text:'Reviews DVLA implications for taxi driver on hypoglycaemic agents (gliclazide, insulin)' },
      { dom:'rto',   text:'Honours the religious context — does not insist on breaking fast as a default position' },
      { dom:'rto',   text:'Reframes insulin: not a failure, not a death sentence — uses the cousin\'s story respectfully' },
      { dom:'gs',    text:'Safety-nets hypos during Ramadan — sugar to hand, what to do, when to break fast (Islamic rulings permit it for safety)' },
      { dom:'gs',    text:'Arranges short-interval review with the diabetes nurse before Ramadan starts' },
    ],
    worked:[
      { lbl:'Opening',          txt:'"Imran — before anything else, tell me how diabetes has been for you over the last year, in your own words."' },
      { lbl:'Naming the fear',  txt:'"You mentioned your cousin. That\'s a heavy thing to carry into this room. Can I tell you what I understand about insulin now, in 2026, that wasn\'t true ten years ago?"' },
      { lbl:'Faith and safety',  txt:'"Islamic law explicitly allows the sick to delay or break a fast. Many scholars treat that as a duty, not a failure. We can plan together so that whichever way we go, your health and your faith are both honoured."' },
      { lbl:'Alternatives first', txt:'"Before we discuss insulin, I want to offer you a different option called an SGLT2 inhibitor and a once-weekly injection — these often improve sugars, take weight off, and protect the heart and kidneys."' },
      { lbl:'Safety-net',        txt:'"If your sugar goes low during a fast — sweating, shaking, confused — you break the fast and take sugar. That\'s not a sin; that\'s the rule that protects the rule."' },
    ],
    learning:'The marking gap on this kind of station is cultural humility paired with clinical correctness. Tasks: SGLT2 + GLP-1 before insulin where possible, DVLA disclosure, Ramadan-adjusted dose. Relating-to-others: honouring the patient\'s faith without colluding with unsafe practice. Diabetes UK and IFA Ramadan guidance are the reference points.'
  },

  /* ============= 9. VIDEO — Abnormal LFTs in 42-year-old solicitor ============= */
  {
    id:'lft-alcohol', title:'Abnormal LFTs — alcohol concern', type:'video', duration:12,
    meta:{ age:42, sex:'M', setting:'Video consultation booked to discuss recent blood results.', system:'GI / alcohol' },
    brief:'Mr Charles Bennett, 42, solicitor, joins a video consultation after blood tests requested 2 weeks ago when he mentioned feeling tired. PMH: nothing of note. No regular medications.',
    script:{
      opening:'"Hello doctor — the receptionist said the bloods needed a chat. Look, I\'ve got a court appearance at 2 so if we can keep it brief that\'d be great."',
      facts:[
        { topic:'Alcohol',        text:'Drinks "socially" — Monday-Friday: a couple of glasses of wine with dinner. Weekend: a bottle of wine each evening. Roughly 35-40 units/week on careful tally — he initially says "I don\'t know, maybe 14?"' },
        { topic:'Symptoms',       text:'Fatigue. Loose bowels in the mornings. Mild RUQ ache he ignores. Sleep is poor — he wakes at 4am.' },
        { topic:'Job / context',  text:'High-pressure firm. Long hours. Just been passed over for partner. He says with a forced smile "it\'s fine, I needed the time off"; clearly it isn\'t fine.' },
        { topic:'Family',         text:'Wife has mentioned the drinking once or twice. He says she\'s being "uptight".' },
        { topic:'Hidden cue',     text:'If gently asked: he had a one-week period last month when he didn\'t drink and felt jittery and sweated through his shirts. He attributed it to "stress".' },
      ],
      data:{
        kind:'LFTs',
        values:[
          ['ALT', '108 U/L', '<41'],
          ['AST', '79 U/L', '<40'],
          ['GGT', '215 U/L', '<60'],
          ['ALP', '88 U/L', '30-130'],
          ['Bilirubin', '14 µmol/L', '<22'],
          ['Albumin', '38 g/L', '35-50'],
          ['MCV', '102 fL', '80-100'],
          ['Platelets', '180 ×10⁹/L', '150-400'],
        ]
      },
      ice:{
        ideas:'Probably the takeaways. Or stress. Definitely nothing to do with the wine.',
        concerns:'Beneath the bluster — afraid of being told he can\'t drink, afraid of losing control.',
        expectations:'A repeat blood test in three months. Out the door.'
      },
      cues:['Checks his watch when alcohol is mentioned.','Defensive — "I\'m not an alcoholic, doctor."','Goes quiet when the partnership is mentioned.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the LFT pattern: AST:ALT ratio + GGT raised + macrocytosis = alcohol-related liver injury' },
      { dom:'tasks', text:'Calculates actual units (35-40/week — well above 14 unit limit) and explains the calculation' },
      { dom:'tasks', text:'Requests viral hepatitis screen, autoimmune screen, ferritin, fibroscan/non-invasive liver fibrosis (ELF / FIB-4)' },
      { dom:'tasks', text:'Screens for dependence — AUDIT-C, withdrawal features, morning drinking' },
      { dom:'rto',   text:'Avoids judgemental framing — does not label him an "alcoholic"' },
      { dom:'rto',   text:'Picks up the partnership grief and the jitteriness on the dry week' },
      { dom:'gs',    text:'Signposts: local alcohol service (or Drinkaware / Drinkline 0300 123 1110); discusses brief intervention' },
      { dom:'gs',    text:'Safety-nets: do NOT stop drinking abruptly without medical support if withdrawal features present (risk of DTs); plans follow-up' },
    ],
    worked:[
      { lbl:'Setting tone',      txt:'"Charles — these results have a story in them and I want us to look at them together rather than me lecturing at you. Five minutes, then a plan."' },
      { lbl:'Naming the pattern', txt:'"The way these particular liver enzymes have moved together — and the slightly larger red cells here — that pattern is very specific. The most common cause of this picture is alcohol. I\'m not saying that to label you. I\'m saying it because the next step depends on whether we treat it as that or something else."' },
      { lbl:'Withdrawal safety',  txt:'"You mentioned a dry week last month felt jittery. Stopping suddenly when the body is used to alcohol can be dangerous — it\'s worth coming to me before you cut down sharply, so we can do it safely."' },
      { lbl:'Acknowledging context', txt:'"Getting passed over hurts more than people see. The drinking and the disappointment aren\'t separate."' },
      { lbl:'Plan',              txt:'"I\'d like to repeat your liver tests in six weeks, add a couple of others today, and offer you a half-hour with our alcohol nurse — entirely your choice. What feels do-able?"' },
    ],
    learning:'The data-interpretation stations have the same RCGP framework as any other. The marking gap is rarely the lab interpretation — it\'s being honest about the cause without lecturing, knowing the withdrawal danger of abrupt cessation, and using AUDIT-C or 4Cs to screen formally. AST:ALT >1 + GGT raised + macrocytosis is a fingerprint pattern.'
  },

  /* ============= 10. VIDEO — Sleep problems in 4-year-old ============= */
  {
    id:'sleep-paeds', title:'Sleep problems in a 4-year-old', type:'video', duration:12,
    meta:{ age:4, sex:'M (mother is caller)', setting:'Booked video appointment with mother.', system:'Paediatrics / family' },
    brief:'Mrs Naomi Patel video-calls about her son Aaron, 4. She is calling from the kitchen — Aaron is at nursery. She looks exhausted. No PMH for Aaron. She had postnatal depression after Aaron\'s birth, treated and resolved.',
    script:{
      opening:'"Hi doctor. I don\'t know what to do anymore. Aaron just won\'t sleep. He\'s up four, five times a night. I\'ve not slept properly in months. Please tell me there\'s something we can give him."',
      facts:[
        { topic:'Sleep pattern',  text:'Bed at 7pm. Falls asleep in his own bed only if Mum lies with him. Wakes 11pm-ish — comes into parents\' bed. Then wakes again 2am, 4am. Sleeps in until 6.30am.' },
        { topic:'What\'s tried',  text:'A new bedtime routine "for two days then she gave up". Melatonin gummies bought on holiday in the US. A weighted blanket. None worked.' },
        { topic:'Daytime',        text:'Aaron is fine at nursery — bright, sociable. No behavioural concerns flagged.' },
        { topic:'Family',         text:'Father (Suresh) works nights three days a week. Naomi is on her own three evenings per week. She mentions, hesitantly, that the marriage is strained and that they "barely see each other".' },
        { topic:'Naomi\'s mental health', text:'If GP screens: Naomi cries during the consultation. Scores 13 on PHQ-9 in her head when GP suggests it. Last time she felt this low was after Aaron was born.' },
        { topic:'Red-flag screen', text:'No snoring, no apnoeas. No fever, no weight loss. Normal growth. No new behavioural change at nursery.' },
      ],
      ice:{
        ideas:'"There must be something medically wrong" or "he\'s just a bad sleeper".',
        concerns:'(Hidden) That she can\'t do this anymore. That she\'s a bad mother. That her marriage is failing.',
        expectations:'A prescription for Aaron — anything.'
      },
      cues:['Crying when she says "I just want my evenings back".','Mentions Suresh\'s shifts twice.','Asks "Am I doing this wrong?" twice.']
    },
    checkpoints:[
      { dom:'tasks', text:'Takes a structured paediatric sleep history — pattern, environment, routine, comorbidities, red flags' },
      { dom:'tasks', text:'Recognises this as behavioural sleep difficulty (limit-setting / sleep-onset association) rather than a medical sleep disorder' },
      { dom:'tasks', text:'Does NOT prescribe melatonin reflexively (off-licence in this age group without specialist input)' },
      { dom:'tasks', text:'Offers structured behavioural strategy — graduated extinction or "chair method"; consistent bedtime routine; one room only' },
      { dom:'rto',   text:'Notices Naomi is exhausted and asks how SHE is — not just Aaron' },
      { dom:'rto',   text:'Screens for postnatal depression / current depression sensitively (PHQ-9 / specifically asks about recurrence)' },
      { dom:'gs',    text:'Signposts: Health Visiting team, ICON (parental coping), local Sleep Charity resources' },
      { dom:'gs',    text:'Safety-nets — worsening mood, thoughts of harm, escalation route; offers follow-up for Naomi as a patient' },
    ],
    worked:[
      { lbl:'Open Q',            txt:'"Naomi — before we talk about Aaron, how are YOU doing? You look exhausted."' },
      { lbl:'Reframing',          txt:'"Aaron is doing what 4-year-olds do — he\'s found a way to spend time with you in the middle of the night, and he\'s clever, so he keeps doing it. That\'s solvable, but it takes consistency and probably one rough fortnight."' },
      { lbl:'Mental health pivot', txt:'"You mentioned the marriage feels strained, you cried just now, and you said this is the worst you\'ve felt since Aaron was born — can I ask a few questions to see how you\'re really doing in yourself?"' },
      { lbl:'Negotiation',        txt:'"I\'m not going to prescribe a sleep medicine for Aaron today — at his age the research is shaky and the issue is behavioural. But I am going to ask you to book yourself an appointment for next week, just for you."' },
      { lbl:'Safety-net',         txt:'"If you ever feel you can\'t cope, or you have thoughts of hurting yourself — ring 111 option 2, or come to me, or Samaritans 116 123. Please don\'t wait for our next appointment."' },
    ],
    learning:'The marking pivot here is realising the patient in the room is the mother, not the child. Behavioural paediatric sleep difficulty does not respond to medication; it responds to consistency. Spotting recurrent depression in an exhausted parent — and offering them their own appointment — is the difference between Clear Pass and Excellent.'
  },

];
