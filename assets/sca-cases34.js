/* ============================================================
   Reasoning GP — Case Library batch 34: "Identity, culture & access"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Health-equity domains: interpreters, trans bridging, asylum/destitution,
   learning disability & diagnostic overshadowing.
   NG12 not forced. Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases33.js.
   ============================================================ */

(function(){

  /* ============ 129. TELEPHONE — The interpreter consultation (family used as interpreter) ============ */
  const c129 = {
    id:'interpreter-consultation', title:'"My son will translate \u2014 he\u2019s right here, just ask him"', type:'telephone', duration:12,
    meta:{ age:58, sex:'F', setting:'Telephone \u2014 limited-English patient with her son interpreting.', system:'Access / Professional interpreting & safeguarding', checked:'October 2026' },
    brief:'Mrs Fatima Khedira, 58, limited English, rings about ongoing symptoms; her 16-year-old SON is on the line "to translate". Booked re abdominal pain and low mood. As it unfolds: there are hints of a sensitive issue (possible domestic/relationship distress and unexplained bruising) that the patient is unlikely to disclose through her child. The son is keen to speak FOR her. The right approach is to use a PROFESSIONAL interpreter, not the family member, and to create a safe space for the patient.',
    script:{
      "opening": "(You play the son, Yusuf, 16.) \"Hello, I'm ringing for my mum, she doesn't speak much English so I'll translate for you. She's got tummy pain and she's been a bit down. Just tell me what you need to know and I'll ask her. It's easier this way, we do it all the time — she's right here next to me.\"",
      "facts": [
        {
          "topic": "Yusuf",
          "text": "16, in Year 11, missing a lesson to do this call. Polite, helpful, a bit impatient. You translate everything for your mum — at the bank, the school, the council."
        },
        {
          "topic": "What Yusuf says about the tummy pain (if asked)",
          "text": "\"She says it hurts here (upper tummy) for a few weeks, especially after eating. No sick, no blood.\" Yusuf does not know much more and guesses: \"Maybe it's stress.\""
        },
        {
          "topic": "What Yusuf says about her mood",
          "text": "\"She's been quiet, crying sometimes. Dad says she's just homesick.\" Yusuf changes the subject if pushed."
        },
        {
          "topic": "If the doctor asks about bruising or home through Yusuf",
          "text": "Yusuf hesitates, then: \"She bruises easily. She's fine.\" Fatima, in the background, says something quickly and then goes quiet."
        },
        {
          "topic": "If the doctor suggests a professional interpreter",
          "text": "Yusuf, a bit put out: \"Honestly, I can do it, it's fine.\" If thanked warmly and told it is the practice's normal way of making sure his mum gets the best care, he accepts: \"Okay, fair enough — when?\" Fatima (via Yusuf) agrees, and if asked whether she would be happy to speak to the doctor on her own with an interpreter, says yes quietly."
        },
        {
          "topic": "Fatima — if a professional interpreter is used and she is alone",
          "text": "Fatima, 58, speaks Arabic. Burning upper tummy pain after food for six weeks, ibuprofen most days for headaches, no weight loss, no vomiting, no black stools. Low mood for months, poor sleep, no thoughts of harming herself. If asked gently whether anyone hurts her: she cries and says her husband grabs her and pushed her against a wall last month; the bruises on her arms are from that. She is afraid for herself, not for the children. She does not want police \"today\" but wants to know what help exists."
        },
        {
          "topic": "Fatima's background",
          "text": "Moved to the UK three years ago. No regular medicines except ibuprofen from the shop. No allergies. Does not drink or smoke."
        },
        {
          "topic": "How to play it",
          "text": "Play Yusuf as a kind, capable teenager who is used to being the family interpreter. Do NOT let him reveal the abuse — he either does not know or will not say. Only Fatima, alone with a professional interpreter, discloses. If the doctor tries to explore abuse through Yusuf, he becomes uncomfortable and says \"She's fine, honestly\", and Fatima says nothing more."
        }
      ],
      "ice": {
        "ideas": "Yusuf: \"It's probably stress or her stomach.\"",
        "concerns": "Fatima (only when alone with a professional interpreter): fear of her husband and of what will happen if she speaks up.",
        "expectations": "Yusuf: \"Just tell me and I'll pass it on.\" Fatima wants to be able to speak freely and know what help exists."
      },
      "cues": [
        "\"We do it all the time — it's easier this way.\" — Yusuf, in the opening.",
        "\"She bruises easily.\" — Yusuf, if asked about bruises.",
        "Fatima (via Yusuf) is silent and then asks him to stop translating — Yusuf says \"She says it's nothing\" — play this if sensitive questions are asked through him."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises that using a FAMILY MEMBER \u2014 especially a CHILD \u2014 as interpreter is inappropriate/unsafe (inaccurate translation, breaches confidentiality/autonomy, inappropriate burden on the child, blocks sensitive disclosure) and declines to proceed that way, arranging a PROFESSIONAL interpreter (telephone/video service) instead' },
      { dom:'ro', text:'Tactfully and respectfully redirects without offending: thanks the son, explains it is practice policy / best for his mum to have a professional interpreter, and avoids implying mistrust of him' },
      { dom:'ro', text:'Creates a way to speak with the PATIENT DIRECTLY and confidentially \u2014 with the professional interpreter and, importantly, the opportunity to speak with her ALONE for part of the consultation \u2014 to enable free disclosure' },
      { dom:'cm', text:'Is alert to the SAFEGUARDING/DOMESTIC-ABUSE possibility (low mood, unexplained bruising) and recognises that getting the patient alone with a professional interpreter is essential and itself a safeguarding step \u2014 never exploring abuse through a family member' },
      { dom:'cm', text:'Plans the clinical assessment (abdominal pain, low mood) to happen properly via the interpreter once arranged, and has domestic-abuse/support pathways and risk assessment ready if disclosure occurs' },
      { dom:'ro',   text:'Handles the situation with cultural sensitivity and warmth \u2014 respecting the family and the son\u2019s good intentions while protecting the patient\u2019s autonomy, dignity and voice' },
      { dom:'ro',   text:'Centres the PATIENT as the person being treated, ensuring her wishes/consent (e.g. whether she is happy to be seen alone) are sought via the professional interpreter, not assumed' },
      { dom:'cm',    text:'Safety-nets and follows up: arranges the professional-interpreter appointment and a confidential review (seeing her alone), the clinical work-up, safeguarding/domestic-abuse support if needed, and documentation \u2014 ensuring she can be heard safely' },
    ],
    worked:[
      { lbl:'Thank, then redirect', txt:'"Thank you so much for helping your mum \u2014 that\u2019s really kind, and I can tell you look after her. Here\u2019s the thing though: for medical conversations we have a rule that we use a professional, trained interpreter rather than family, even brilliant ones like you. It\u2019s partly so nothing gets lost, and partly so your mum can speak completely freely about anything \u2014 some things people don\u2019t like to say in front of their children. It\u2019s nothing to do with not trusting you."' },
      { lbl:'Make it about her',    txt:'"So what I\u2019d like to do is book a proper appointment with an interpreter on the line, and have a bit of the conversation just with your mum, so she gets the privacy any patient would. Could you let her know I\u2019m looking forward to speaking with her properly, with the interpreter, and that she\u2019s in good hands?"' },
      { lbl:'Protect the space',    txt:'"It\u2019s really important to me that your mum can tell me anything that\u2019s worrying her \u2014 about her health, her mood, her home life \u2014 in her own words and in confidence. The interpreter makes that possible. That\u2019s the safest, kindest way to look after her."' },
      { lbl:'Hold the boundary kindly', txt:'"I know it feels easier to just do it now through you, and I don\u2019t want to make life harder \u2014 but this genuinely matters for getting her care right, so I\u2019m going to arrange the interpreter rather than carry on this way today. I hope that\u2019s okay."' },
      { lbl:'Set up the safe review', txt:'"I\u2019ll get an appointment booked with the interpreter very soon for her tummy pain and how she\u2019s been feeling. When we speak, I\u2019ll make sure there\u2019s time for her on her own. Is there a number where I can reach HER, or a good time?"' },
      { lbl:'Safety-net',           txt:'"If your mum\u2019s pain gets much worse, or she\u2019s vomiting or unwell, she should be seen urgently \u2014 you can call us or 999 and we\u2019ll get an interpreter involved even then. Thank you again for caring for her so well. Let\u2019s make sure she gets the chance to be heard properly."' },
    ],
    learning:'Using a family member \u2014 especially a CHILD \u2014 as interpreter is poor and unsafe practice: it risks inaccurate/edited translation, breaches the patient\u2019s confidentiality and autonomy, burdens the child, and \u2014 critically \u2014 blocks disclosure of sensitive or safeguarding issues. The correct approach is a PROFESSIONAL interpreter (telephone/video service), tactfully declining family/child interpreting WITHOUT offending or implying mistrust, and creating a way to speak with the PATIENT directly and confidentially \u2014 including seeing her ALONE for part of the consultation. The examinable hidden agenda is exactly why this matters here: hints of domestic abuse/relationship distress (low mood, unexplained bruising) that the patient will not disclose through her son, whose eagerness to speak for her (well-meaning or controlling) silences her. Getting her alone with a professional interpreter is itself a safeguarding action; never explore abuse via a family member. Handle it with cultural sensitivity and warmth, centre and respect the patient\u2019s autonomy and dignity, plan the clinical assessment via the interpreter, and have domestic-abuse/support pathways ready.',
    knowledge:{
      guideline:'NHS England Guidance for commissioners: interpreting and translation services in primary care (2018) · GMC Decision making and consent (2020) and Good Medical Practice (2024) — communication · domestic-abuse safeguarding: NICE PH50 Domestic violence and abuse (2014) and NICE QS116 (2016); Domestic Abuse Act 2021',
      points:[
        { h:'Use professional interpreters', t:'Patients with limited English have a right to a professional, trained interpreter (telephone, video or in-person). Professional interpreting ensures accuracy, impartiality and confidentiality. Family/friends \u2014 and especially children \u2014 should NOT be used as interpreters except in immediate emergencies where no alternative exists (NHS England guidance, 2018).' },
        { h:'Why not family/children', t:'Family interpreters risk inaccurate or selectively-edited translation, breach the patient\u2019s confidentiality and autonomy, may impose their own views, and place inappropriate emotional burden on a child. Crucially, the patient cannot disclose sensitive issues (abuse, mental health, sexual health) through a relative.' },
        { h:'Decline tactfully', t:'Thank the family member, explain it is policy and best for the patient (accuracy and the freedom to speak privately), and avoid implying mistrust. Arrange a professional interpreter and reschedule if needed rather than proceeding unsafely.' },
        { h:'Create a confidential space', t:'Speak with the patient directly via the interpreter, and ensure part of the consultation is with the patient ALONE \u2014 essential for autonomy and for any safeguarding disclosure. Seek the patient\u2019s own consent/wishes (e.g. to be seen alone) rather than assuming.' },
        { h:'Safeguarding lens', t:'Unexplained injury, low mood, controlling behaviour by an accompanying relative, or reluctance to be alone raise domestic-abuse/safeguarding concerns. Getting the patient alone with a professional interpreter is itself a safeguarding step. Never explore suspected abuse through a family member; have domestic-abuse risk assessment and support pathways (e.g. IDVA/MARAC, specialist services) ready (NICE PH50, 2014; NICE QS116: ask about abuse only when the person is alone and it is safe). If abuse is disclosed, consider the 16-year-old son as a victim in his own right (Domestic Abuse Act 2021) and follow child safeguarding procedures.' },
        { h:'Respect culture and dignity', t:'Handle with cultural sensitivity and warmth, respecting the family\u2019s good intentions while centring the patient as the person being treated, protecting her voice, autonomy and dignity throughout.' },
        { h:'Never do', t:'Never use a child (or, routinely, any family member) as interpreter; never proceed with a sensitive consultation through a relative; never explore suspected abuse via the family member; never assume the patient\u2019s wishes without asking her directly; never let convenience override safety and confidentiality.' },
        { h:'Safety-net & follow-up', t:'Book a professional-interpreter appointment with time for the patient alone; clinical work-up via the interpreter; domestic-abuse/safeguarding support and risk assessment if disclosed; urgent route (with interpreter) for clinical deterioration; documentation.' }
      ]
    }
  };

  /* ============ 130. TELEPHONE — Trans patient new to the practice: bridging prescription ============ */
  const c130 = {
    id:'trans-bridging', title:'"My hormones run out next week and the clinic discharged me \u2014 please don\u2019t let me crash"', type:'telephone', duration:12,
    meta:{ age:26, sex:'F (trans woman)', setting:'Telephone \u2014 trans woman new to the practice, hormones about to run out.', system:'Identity & access / Trans bridging prescription', checked:'October 2026' },
    brief:'Ms Robyn Achebe, 26, transfeminine, recently moved area and registered. She has been on oestradiol (and an anti-androgen) for 3 years, initially started and monitored by a private gender specialist service, latterly self-funded — that private clinic has now discharged her because she can no longer pay, so she is under no specialist; she has NOT yet been seen by an NHS gender identity clinic (GIC), and her NHS GIC referral has a years-long wait. Her hormones run out in a week. She is anxious, has heard GPs "won\u2019t touch it", and \u2014 if explored \u2014 there is significant distress and a hint of suicidal thoughts at the prospect of stopping/detransitioning. She wants a bridging prescription and to be treated with respect.',
    script:{
      "opening": "\"Hi. I've just registered with you after moving, and I'm honestly really anxious about this call. I'm a trans woman, I've been on hormones for three years, but my supply's about to run out and the gender clinic waiting list is years long. I've had GPs basically refuse to help before, like it's not their problem. I just… I can't go back to how I felt before I started. Please — can you help me not crash?\"",
      "facts": [
        {
          "topic": "Your treatment",
          "text": "If asked: oestradiol gel, two pumps a day, and cyproterone 12.5 mg a day, started three years ago by a private gender clinic. You last had blood tests six months ago and \"they were fine\". You have about a week left."
        },
        {
          "topic": "Why it stopped",
          "text": "You lost your job when you moved and can no longer afford the private clinic, which discharged you. You were referred to an NHS gender identity clinic two years ago — still waiting, letter on your phone."
        },
        {
          "topic": "Health (if asked)",
          "text": "No clots, no migraine with aura, no liver problems, non-smoker, BMI normal. Blood pressure normal last time. No allergies. No other medicines."
        },
        {
          "topic": "Unregulated hormones — only if asked",
          "text": "\"I've looked at buying online. People do it. I don't want to, but I will if I have to.\""
        },
        {
          "topic": "Mood — only if asked directly",
          "text": "Before hormones you were very depressed and took an overdose at 21. Since starting hormones: \"I feel like me.\" Now, with them running out: low, sleeping badly, and \"I've had the thought that I'd rather not be here than go back to that.\" No plan, no stockpiled tablets, no recent self-harm. Your best friend lives nearby and you would tell her."
        },
        {
          "topic": "Social",
          "text": "26, works in a café, lives in a flat share. Name on your record is Robyn; you use she/her."
        },
        {
          "topic": "How to play it",
          "text": "Nervous, braced for rejection. If the doctor uses your name and pronouns naturally and is warm, you relax. If they say \"this isn't something GPs do\" and stop, become quietly hopeless: \"So I'm on my own, then.\" If they are honest that they need to get specialist advice and promise to try to find a safe way to bridge, ask about your suicidal thoughts properly and agree a plan for this week, you are hugely relieved."
        }
      ],
      "ice": {
        "ideas": "\"If my hormones stop, I'll crash back to how I was.\"",
        "concerns": "Being refused again; and (only if asked) thoughts that you would rather not be here.",
        "expectations": "\"Can you help me not run out?\" You understand the doctor may need to get advice first, as long as they genuinely try."
      },
      "cues": [
        "\"I've had GPs refuse to help before.\" — say in the opening.",
        "\"I can't go back to how I felt before.\" — say in the opening.",
        "\"People buy them online, you know.\" — say if the doctor hesitates about prescribing."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Treats the patient with RESPECT and affirmation from the outset (correct name and pronouns, no othering/curiosity), recognising the fear of rejection \u2014 and does NOT refuse to engage on "not my area of expertise" grounds while leaving her without treatment' },
      { dom:'dg', text:'Assesses MENTAL-HEALTH RISK explicitly: the distress and the hint of suicidal thoughts at the prospect of stopping hormones \u2014 ideation, plan, intent, protective factors \u2014 recognising this as a safety issue, not merely administrative' },
      { dom:'cm', text:'Understands and considers a BRIDGING PRESCRIPTION as harm reduction: continuing her established hormone regimen to prevent abrupt cessation (and unregulated self-medication) while awaiting specialist review — an option the GMC says a GP may consider (not an obligation) when the patient is self-medicating or highly likely to and it reduces the risk of self-harm, with gender-specialist advice and the lowest acceptable dose — while being honest about the RCGP’s (2024) more cautious position — rather than leaving a gap without discussion' },
      { dom:'cm', text:'Arranges it SAFELY: baseline checks/monitoring as appropriate, seeks advice from a gender specialist/endocrinologist (shared care where possible), and ensures the GIC referral is in place and chases the wait \u2014 not bridging in a vacuum' },
      { dom:'cm', text:'Addresses the risk of UNREGULATED self-sourced hormones (unsafe/unmonitored) as a key reason bridging is harm-reductive, and provides safety/monitoring advice' },
      { dom:'ro',   text:'Meets her with warmth and dignity FIRST, validating the exhaustion of having to justify herself and the previous poor experiences, so she feels safe rather than judged' },
      { dom:'ro',   text:'Responds to the suicidal ideation with compassion and a safety plan, treating her whole wellbeing \u2014 not just the prescription' },
      { dom:'cm',    text:'Safety-nets and follows up: the bridging prescription and monitoring plan, specialist advice/shared care, GIC referral chased, crisis routes if suicidal thoughts escalate (urgent/111/crisis team/A&E), trans-inclusive support resources, and a follow-up \u2014 ensuring she is safe and supported, not left to crash' },
    ],
    worked:[
      { lbl:'Affirm and reassure first', txt:'"Robyn, first \u2014 thank you for trusting me with this, and I\u2019m sorry you\u2019ve been let down before; that shouldn\u2019t have happened. I want to help, and I\u2019m not going to leave you to run out. Let\u2019s sort this together. Have I got your name right, and can I check the pronouns you\u2019d like me to use?"' },
      { lbl:'Check safety',         txt:'"Can I ask something important, gently \u2014 you said you can\u2019t go back to how you felt before. When you think about the hormones stopping, do you ever have thoughts of not wanting to be here, or of harming yourself? \u2026 Thank you for being honest. That matters to me as much as the prescription, and I\u2019ll make sure you\u2019re supported, not just medicated."' },
      { lbl:'The bridging plan',    txt:'"Here\u2019s what I can do: the doctors’ regulator, the GMC, says a GP may consider what’s called a bridging prescription — continuing your established hormones — for someone in your situation, so you don’t suddenly stop and aren’t forced to buy them unregulated online, which is genuinely unsafe. It isn’t automatic: I need advice from a gender specialist first, and I’d use the lowest dose that works for you. I\u2019m treating this as keeping you safe while the specialist service catches up."' },
      { lbl:'Do it properly',       txt:'"I\u2019ll do it safely \u2014 a few baseline blood tests and blood-pressure check, and I\u2019ll get advice from a gender specialist or hormone doctor so I\u2019m prescribing the right doses for you, ideally as shared care. I\u2019ll also check your gender-clinic referral is active and chase where I can, because that wait is far too long."' },
      { lbl:'Name the harm reduction', txt:'"I want to be honest about why I\u2019m doing this: leaving you without your hormones risks your mental health and pushes people towards buying them from unsafe sources. Bridging you is the safer, kinder option, and it\u2019s the right thing to do while you wait."' },
      { lbl:'Safety-net + support', txt:'"So: I’ll get a gender specialist’s advice straight away so I can arrange the bridging prescription safely, do the baseline checks, and chase your referral. If those darker thoughts get stronger before I see you, here are the crisis numbers and that\u2019s a 999/A&E matter if you ever feel unsafe. I\u2019ll point you to some good trans-inclusive support too. You came in braced to fight for basic care \u2014 you don\u2019t have to fight me. I\u2019ve got you."' },
    ],
    learning:"A trans patient established on hormones whose supply is running out, facing a years-long gender-clinic wait, is a situation in which a BRIDGING prescription should be actively considered as harm reduction — not a reflex refusal. GMC guidance says a GP may consider — it is not an obligation — a bridging prescription to continue established hormones where the patient is self-medicating with unregulated hormones or highly likely to, to reduce the risk of self-harm or suicide, with gender-specialist advice and the lowest acceptable dose (the RCGP’s 2024 position statement is more cautious and does not see initiating hormones as a core GP role without additional expertise); it aims to prevent the harms of abrupt cessation and of patients resorting to unregulated self-sourced hormones, ideally with gender-specialist/endocrinology advice and shared care, plus baseline monitoring, while the specialist referral is in place and chased. Crucially, abrupt cessation risks a mental-health crisis: the hint of suicidal ideation at the prospect of stopping/detransitioning must be assessed and safety-planned — this is a safety issue, not an administrative one. The examinable hidden agenda is fear of rejection and the exhaustion of having to justify herself after previous poor experiences; meet her with respect and affirmation FIRST (correct name/pronouns, no othering), assess and support her whole wellbeing, do not refuse on \"not my expertise\" grounds while leaving her without treatment, and safety-net with crisis routes and trans-inclusive support. Abruptly stopping established hormones causes significant distress, may precipitate or worsen mental-health crisis (including suicidality), and frequently drives patients to UNREGULATED self-sourced hormones (unsafe, unmonitored). The hint of suicidal thoughts must be assessed — this is a safety issue, not just an administrative one.",
    knowledge:{
      guideline:'GMC ethical hub: How our professional standards can be applied in trans healthcare (bridging prescriptions — a GP may consider, not obliged) · RCGP position statement: the role of the GP in transgender care (2024; more cautious) · NICE NG225 Self-harm (2022) · Equality Act 2010 · gender dysphoria / NHS gender identity clinic pathways',
      points:[
        { h:'Bridging prescriptions', t:'GMC guidance: a GP may consider (it is not obliged to issue) a "bridging" prescription where the patient is already self-medicating with unregulated hormones, or is highly likely to, and the prescription is intended to reduce the risk of self-harm or suicide — as harm reduction while awaiting specialist care, after seeking advice from a gender specialist and at the lowest acceptable dose. The RCGP position statement (2024) is more cautious: GPs without additional expertise are not expected to initiate hormones, many will not feel competent to bridge, and long-term prescribing without specialist support over multi-year waits carries risks. For a patient already established on treatment, bridging is an option to weigh with specialist advice — not an automatic entitlement. Refusing even to engage, explain or seek advice, and leaving a gap, is the harmful option.' },
        { h:'Risks of stopping / self-sourcing', t:'Abruptly stopping established hormones causes significant distress and can precipitate a mental-health crisis (including suicidality). Many patients then obtain unregulated hormones online (unknown dose/quality, unmonitored). Bridging reduces both harms.' },
        { h:'Assess mental-health risk', t:'Distress and suicidal ideation are common around loss of treatment/identity. Assess ideation, plan, intent and protective factors explicitly (NICE NG225: do not use risk tools or scales to predict suicide); provide a safety plan and crisis routes. Treat this as a safety issue, not paperwork.' },
        { h:'Prescribe safely', t:'Continue the established regimen; do baseline monitoring (e.g. BP, bloods as appropriate), seek gender-specialist/endocrinology advice, and aim for shared care. Ensure the GIC referral is in place and chase the waiting time. Bridge within a safe, advised framework rather than in isolation. Oestrogen raises VTE risk; transdermal routes carry less risk than oral (BNF).' },
        { h:'Respect and affirmation', t:'Use the patient\u2019s correct name and pronouns; avoid othering, intrusive curiosity or making them justify their identity. Many trans patients have experienced rejection and discrimination in healthcare \u2014 a respectful, affirming approach is both ethical and clinically important for engagement.' },
        { h:'Don\u2019t hide behind "not my expertise"', t:'Lack of specialist expertise does not justify refusing to engage, to seek specialist advice about harm-reduction bridging, or to give basic respectful care. Be open about what you can and cannot do (the GMC permits bridging in defined circumstances; the RCGP 2024 is more cautious), seek advice and act; do not simply leave the patient without a plan.' },
        { h:'Never do', t:'Never refuse to engage and leave an established patient to abruptly stop hormones; never misgender or other the patient; never treat it as purely administrative and miss the suicide risk; never ignore the unregulated-self-medication harm; never bridge without seeking specialist advice/monitoring where possible.' },
        { h:'Safety-net & follow-up', t:'Bridging prescription with baseline monitoring; gender-specialist advice/shared care; GIC referral confirmed and chased; crisis routes if suicidal thoughts escalate (111/crisis team/A&E/999); trans-inclusive support; respectful, continuing follow-up.' }
      ]
    }
  };

  /* ============ 131. VIDEO — Asylum seeker / destitution: the symptom and the social emergency ============ */
  const c131 = {
    id:'asylum-destitution', title:'"Just some sleeping tablets, please \u2014 I don\u2019t want to be a burden"', type:'video', duration:12,
    meta:{ age:34, sex:'M', setting:'Video consultation \u2014 asylum seeker requesting sleeping tablets.', system:'Health inequality / Asylum, trauma & destitution', checked:'October 2026' },
    brief:'Mr Tesfaye Bekele, 34, an asylum seeker, registered recently. Requests "sleeping tablets" for insomnia. As it unfolds (if a safe space is made): nightmares, flashbacks and hypervigilance (likely PTSD from torture/trauma in his country and the journey), plus he is effectively DESTITUTE \u2014 not eating regularly, unsure of his entitlements, isolated, and ashamed to ask for help ("I don\u2019t want to be a burden"). He may not know he is entitled to NHS GP care free of charge. The insomnia is the tip of a trauma-and-destitution iceberg.',
    script:{
      "opening": "(Quiet, polite, eyes often down.) \"Thank you for seeing me, doctor. I am sorry to trouble you. I only need some tablets to help me sleep — I do not sleep well, that is all. I do not want to be a problem or take up your time. I am not sure I am even allowed to be here, to see a doctor — please tell me if I should not be. Just something for the sleep, and I will go.\"",
      "facts": [
        {
          "topic": "Sleep (if asked)",
          "text": "For many months you fall asleep late and wake at 2 or 3am, often shouting or sweating. You sleep perhaps three hours."
        },
        {
          "topic": "Nightmares and memories — only if asked gently, and only after you feel safe",
          "text": "\"I see the same things at night. From the prison at home. And the boat.\" In the day, sudden pictures come into your head, especially at loud noises or when you see police uniforms. You sit with your back to the wall. You avoid talking about what happened — \"please, I do not want to say the details\"."
        },
        {
          "topic": "Mood (if asked)",
          "text": "Low, tired, \"my heart is heavy\". You still pray and phone your sister. If asked directly about suicide: \"Sometimes I think it would be easier not to wake up, but I would not do anything — my faith, and my sister.\" No plan, no self-harm."
        },
        {
          "topic": "Food and money — only if asked about how you are managing day to day",
          "text": "You moved out of the hotel accommodation two months ago after your asylum claim was refused and you are appealing. Now you sleep on a friend's floor. \"I eat once a day, sometimes less. A church gives bread on Tuesdays.\" No money. You have not asked anyone for help."
        },
        {
          "topic": "Body (if asked)",
          "text": "Scars on your back and feet — \"from the prison\". Old pain in the feet when walking far. No current injury, no cough, no fever, no weight loss you have noticed beyond being thinner from not eating."
        },
        {
          "topic": "Medical history",
          "text": "No medicines, no allergies. No known illnesses. Do not drink alcohol, do not smoke, no drugs."
        },
        {
          "topic": "Language",
          "text": "Your first language is Amharic; you speak reasonable English but sometimes need words explained. Accept an interpreter if offered: \"Yes, that would be better, thank you.\""
        },
        {
          "topic": "How to play it",
          "text": "Very polite, apologetic, minimising. You expect to be sent away. If the doctor reassures you that you are entitled to see a GP and are welcome, visibly relax a little. Only talk about the past if you feel safe and are not pushed; if pushed for details, go quiet. Respond to warmth and practical help (food, advice, someone to talk to) with real gratitude."
        }
      ],
      "ice": {
        "ideas": "\"I just need something to help me sleep.\"",
        "concerns": "That you are not allowed to see a doctor, that you will be a burden or reported. Underneath: the memories, and having no food or money.",
        "expectations": "\"Some tablets for sleep, and I will go.\" You will accept other help if you feel you are not causing trouble."
      },
      "cues": [
        "\"I am not sure I am even allowed to be here.\" — say in the opening.",
        "\"I see the same things at night.\" — say if asked what keeps you awake.",
        "\"I eat when I can.\" — say if asked how you are managing."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Looks BEYOND the sleeping-tablet request: recognises likely PTSD (nightmares, flashbacks, hypervigilance, avoidance) and low mood from trauma/torture, and does NOT simply prescribe sedatives/benzodiazepines \u2014 which are inappropriate and not the answer' },
      { dom:'ro', text:'Reassures him of his ENTITLEMENT: everyone can register with a GP and receive primary care free of charge regardless of immigration status \u2014 he is allowed to be here, must not be turned away/charged, and was right to come (countering the fear that deters care)' },
      { dom:'dg', text:'Recognises and acts on the DESTITUTION/social emergency: not eating, isolation, unclear entitlements \u2014 signposting to asylum-support services, food/charitable support, and immigration/legal advice as core parts of the consultation' },
      { dom:'dg', text:'Takes a TRAUMA-INFORMED approach: unhurried, safe, gently exploring the trauma/mood WITHOUT forcing disclosure; offers appropriate management \u2014 sleep hygiene/non-drug measures, and referral to trauma/PTSD services (and specialist torture-survivor services, e.g. Freedom from Torture/Helen Bamber-type services)' },
      { dom:'dg', text:'Screens mental-health RISK (PTSD-associated depression/suicidality) sensitively and ensures appropriate support/safety-netting' },
      { dom:'ro',   text:'Treats him with DIGNITY and warmth, counters the "I\u2019m a burden"/"not allowed" shame, builds trust, and creates a safe space so he can disclose at his own pace' },
      { dom:'ro',   text:'Avoids re-traumatising or interrogating; follows his lead, validating his experience and his right to care' },
      { dom:'cm',    text:'Safety-nets and follows up: trauma/torture-survivor and mental-health referral, urgent destitution support (asylum support, food, legal advice), sleep advice, crisis routes if risk, an interpreter if needed, and a follow-up appointment to build the relationship \u2014 treating the whole person, not the symptom' },
    ],
    worked:[
      { lbl:'Reassure his right to be here', txt:'"First, let me put your mind at rest about something really important: you are absolutely allowed to be here and to see me. Everyone can register with a GP and get this care free, whatever their immigration situation. You are not a burden, you are not taking up time you shouldn\u2019t \u2014 you did exactly the right thing coming, and I\u2019m glad you did."' },
      { lbl:'Look past the tablet', txt:'"I can give you advice on sleep \u2014 but sleeping tablets, especially the strong ones, often aren\u2019t the answer and can cause their own problems. Can I gently ask what\u2019s keeping you awake? \u2026 Bad dreams, and feeling on edge. Thank you for telling me. Those can come from very difficult things people have lived through, and there\u2019s real help for that \u2014 better help than a tablet."' },
      { lbl:'Trauma-informed, gentle', txt:'"You don\u2019t have to tell me anything you\u2019re not ready to \u2014 we can go at your pace, today and over time. What you\u2019re describing sounds like the way the mind reacts to trauma, and it\u2019s treatable. I can refer you to people who specialise in helping those who\u2019ve been through what you have."' },
      { lbl:'The social emergency', txt:'"Can I also ask \u2014 are you managing for food, somewhere to stay, the basics? \u2026 I\u2019m really glad you told me. That matters as much as your health, and there\u2019s help I can point you to today \u2014 support services for people seeking asylum, food support, and advice about your situation. You shouldn\u2019t be going hungry, and you don\u2019t have to sort this alone."' },
      { lbl:'Check safety',         txt:'"When the nights are at their worst, do you ever feel life isn\u2019t worth living, or think of harming yourself? \u2026 Thank you for trusting me. I\u2019ll make sure you have support and numbers to call, and we\u2019ll keep a close eye on how you\u2019re doing."' },
      { lbl:'Plan + follow-up',     txt:'"So: some practical help for sleep tonight, a referral to the trauma specialists, and I\u2019ll connect you with support for food and your asylum situation today. I\u2019d like to see you again soon \u2014 with an interpreter if that\u2019s easier \u2014 just to see how you are. You came asking for a small thing and apologising for being here. I want you to leave knowing you\u2019re welcome, you matter, and you\u2019re not on your own."' },
    ],
    learning:'A request for "sleeping tablets" from an asylum seeker is often a presenting ticket over a trauma-and-destitution iceberg. Look beyond it: likely PTSD (nightmares, flashbacks, hypervigilance, avoidance) and low mood from torture/persecution and the journey \u2014 which needs a trauma-informed approach and referral (including specialist torture-survivor services), NOT sedatives/benzodiazepines. Two equity points are core: reassure his ENTITLEMENT (everyone can register with a GP and receive primary care free of charge regardless of immigration status \u2014 he must not be turned away or charged, and was right to come), countering the fear that deters vulnerable people from care; and recognise the DESTITUTION as a social emergency (not eating, isolation, unclear entitlements) needing urgent signposting to asylum-support, food and legal advice. The examinable hidden agenda is profound, not-yet-voiced trauma plus shame, fear of authority, and destitution he is too proud to disclose ("I don\u2019t want to be a burden"); create safety and dignity, open the door gently without forcing disclosure, screen mental-health risk, and follow up to build trust \u2014 treating the whole person, not the symptom.',
    knowledge:{
      guideline:'NICE NG116 Post-traumatic stress disorder (2018) · NICE NG225 Self-harm (2022) · NICE TA77 Hypnotics for insomnia (2004) · BNF (benzodiazepines, short courses only) · NHS England Patient registration standard operating principles for primary medical care (entitlement to GP care regardless of immigration status) · NHS (Charges to Overseas Visitors) Regulations 2015 · Immigration and Asylum Act 1999 (sections 95 and 98 asylum support) · NHS England Guidance for commissioners: interpreting and translation services in primary care (2018)',
      points:[
        { h:'Everyone is entitled to GP care', t:'Anyone can register with a GP and receive primary care free of charge, regardless of immigration status \u2014 no proof of address, ID or immigration status is required to register (NHS England patient registration standard operating principles). Asylum seekers and undocumented migrants must not be turned away or charged for GP services. Reassure patients who fear ineligibility, as this fear is a major barrier to care.' },
        { h:'Look past the presenting ticket', t:'Requests like "sleeping tablets" frequently mask trauma and unmet social need. Explore gently. Sedatives/benzodiazepines are inappropriate for trauma-related insomnia and risk dependence (NICE TA77 limits Z-drugs to severe insomnia for the shortest time; the BNF restricts benzodiazepines to short courses; NICE NG116 advises against drug treatment, including benzodiazepines, to prevent PTSD) — offer trauma-informed assessment and management instead.' },
        { h:'Recognise PTSD', t:'PTSD: re-experiencing (flashbacks, nightmares), avoidance, hyperarousal/hypervigilance, negative mood/cognitions, after traumatic events (torture, persecution, dangerous journeys). Manage per NICE NG116 (2018) — trauma-focused psychological therapy (trauma-focused CBT for adults; EMDR for PTSD after non-combat trauma), with venlafaxine or an SSRI such as sertraline if he prefers medication; refer to specialist trauma/torture-survivor services (e.g. Freedom from Torture, Helen Bamber Foundation). Screen for comorbid depression and suicidality.' },
        { h:'Destitution is a social emergency', t:'Asylum seekers may be destitute \u2014 unable to meet basic needs (food, shelter). Signpost to asylum-support (Home Office section 98 emergency and section 95 ongoing support under the Immigration and Asylum Act 1999, applied for through the Migrant Help advice line; local authority, British Red Cross, refugee charities), food banks, and immigration/legal advice. People on asylum support can get an HC2 certificate for free prescriptions. Addressing the social need is part of the medical care.' },
        { h:'Trauma-informed practice', t:'Be unhurried, safe and non-judgemental; do not force disclosure or interrogate (risking re-traumatisation); follow the patient\u2019s lead and go at their pace over multiple visits. Use professional interpreters where needed rather than friends or family (NHS England interpreting guidance for primary care, 2018). Ask directly about suicidal thoughts and plans; NICE NG225 advises against risk scales to decide care. Counter shame and the "burden" narrative with dignity and welcome.' },
        { h:'Build trust over time', t:'Vulnerable, traumatised patients disclose gradually. A respectful first contact that affirms entitlement and worth, addresses the immediate need, and arranges follow-up builds the trust that enables fuller care.' },
        { h:'Never do', t:'Never imply ineligibility or turn the patient away/charge them; never just prescribe sleeping tablets/benzodiazepines for trauma insomnia; never force trauma disclosure or interrogate; never ignore destitution as "not medical"; never miss the mental-health risk; never leave them without follow-up and support.' },
        { h:'Safety-net & follow-up', t:'Trauma/torture-survivor and mental-health referral; urgent destitution support (asylum support, food, legal advice); sleep advice (non-drug); crisis routes if risk; interpreter for future visits; a follow-up appointment to build the relationship and treat the whole person.' }
      ]
    }
  };

  /* ============ 132. VIDEO — Learning disability annual health check: diagnostic overshadowing ============ */
  const c132 = {
    id:'learning-disability-check', title:'"He\u2019s just being difficult \u2014 it\u2019s his autism, he doesn\u2019t need examining"', type:'video', duration:12,
    meta:{ age:24, sex:'M', setting:'Video consultation \u2014 carer of a young man with learning disability + autism.', system:'Health inequality / Learning disability & diagnostic overshadowing', checked:'October 2026' },
    brief:'Caller: a support worker (with the patient, Daniel, 24, who has a moderate learning disability and autism, present and distressed) about Daniel "being difficult, hitting himself, off his food, not sleeping" for a week. The worker attributes it to "his autism/behaviour". On exploration: this is a CHANGE from baseline, he\u2019s holding his jaw/face, off food, and there may be an untreated physical cause (dental abscess, pain, constipation, infection). This is diagnostic overshadowing \u2014 a physical illness being missed as "behaviour". Reasonable adjustments needed.',
    script:{
      "opening": "(You play Kirsty, Daniel's support worker; Daniel can be heard moaning in the background.) \"Hiya, it's about Daniel, he's 24, he's got a learning disability and he's autistic. He's been really difficult this past week — hitting himself, won't eat properly, up all night, more agitated than usual. We think it's just his autism playing up, a behaviour thing. We don't really need to examine him or anything, he hates that — maybe just something to calm him down?\"",
      "facts": [
        {
          "topic": "Daniel's normal self (if asked)",
          "text": "Uses a few words and Makaton signs, loves trains and his tablet, usually calm and smiley, eats well (likes soft foods and crisps), sleeps 10pm–7am. Lives in a supported living house with 24-hour staff."
        },
        {
          "topic": "What has changed (if asked)",
          "text": "For seven days: hitting the right side of his face and jaw with his hand, pushing food away — he will only take yoghurt and drinks through a straw — up most of the night, crying. \"He's never done the face-hitting before.\""
        },
        {
          "topic": "On video (if asked to show him)",
          "text": "Daniel holds the right side of his jaw and rocks. If asked to look closely: his right cheek looks a bit puffy compared with the left. You cannot see inside his mouth."
        },
        {
          "topic": "Other questions (if asked)",
          "text": "Temperature: \"He felt warm last night; we didn't check.\" Bowels opened yesterday, normal. Passing urine normally. No cough, no vomiting, no rash, no ear-pulling. No falls or injuries that you know of."
        },
        {
          "topic": "Dental (if asked)",
          "text": "\"He hasn't seen a dentist in years — he won't let anyone near his mouth. Teeth brushing is a battle.\""
        },
        {
          "topic": "Medicines and health",
          "text": "No regular medicines. No allergies. Has a hospital passport. Has not had an annual health check for two years."
        },
        {
          "topic": "Staff situation (if asked)",
          "text": "Two staff off sick; you have done three night shifts in a row. You are tired and the house manager suggested \"asking the GP for something\"."
        },
        {
          "topic": "How to play it",
          "text": "Kind but tired and a bit stuck in \"it's his behaviour\". If the doctor suggests he might be in pain, think about it and agree: \"Actually... he does keep going for that side of his face.\" Be helpful once the doctor explains, and share what calms Daniel (quiet room, his tablet, his favourite worker Joe). Raise the practical problem that he will not tolerate examination — respond well to suggestions of adjustments."
        }
      ],
      "ice": {
        "ideas": "\"It's just his autism playing up — a behaviour thing.\"",
        "concerns": "Daniel hurting himself, and the staff struggling to cope.",
        "expectations": "\"Something to calm him down.\" You will support an assessment if it is planned around Daniel's needs."
      },
      "cues": [
        "\"He's never done the face-hitting before.\" — say when describing the change.",
        "\"He keeps going for the right side of his face.\" — say if asked where he hits himself.",
        "\"He won't let anyone near his mouth.\" — say if teeth or examination come up."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises DIAGNOSTIC OVERSHADOWING: a CHANGE in behaviour (self-injury, off food, not sleeping, agitation) in a person with learning disability/autism who cannot easily report symptoms is likely a sign of untreated PHYSICAL ILLNESS or PAIN \u2014 NOT "just their autism/behaviour" \u2014 and does NOT simply sedate' },
      { dom:'dg', text:'Actively seeks a PHYSICAL CAUSE: notes the jaw-holding/off-food and considers dental abscess/pain, ear/throat, constipation, urinary infection, etc., and plans to assess/examine for it (and treat the cause) rather than attributing it to behaviour' },
      { dom:'dg', text:'Makes REASONABLE ADJUSTMENTS (Equality Act): extra time/longer appointment, calm quiet approach, involving someone who knows his baseline and communication/pain cues, gentle/desensitised examination, hospital passport/communication tools, and pain-assessment tools for non-verbal patients \u2014 treating "he hates being examined" as a reason to ADJUST, not skip' },
      { dom:'cm', text:'Involves those who know his NORMAL communication and pain behaviours, and uses collateral history to interpret the change \u2014 recognising the change-from-baseline as the key signal' },
      { dom:'cm', text:'Situates it in the health-INEQUALITY context: this group has poorer access and avoidable premature mortality; ensures the annual health check and ongoing equitable care, and advocates for Daniel' },
      { dom:'ro',   text:'Gently CHALLENGES the overshadowing and advocates for Daniel, supporting the (well-meaning, possibly fatigued) worker without colluding with "just calm him down"' },
      { dom:'ro',   text:'Centres Daniel as the patient \u2014 his dignity, distress and right to have his pain taken seriously \u2014 and communicates in a way that includes him as far as possible' },
      { dom:'cm',    text:'Safety-nets and follows up: the physical-cause assessment (urgent dental/pain review as indicated), treating the cause, reasonable adjustments documented, baseline-knowledgeable carers involved, the annual health check, and review \u2014 not sedation of unexplained distress' },
    ],
    worked:[
      { lbl:'Reframe the behaviour', txt:'"Thank you for ringing about Daniel. Can I offer a different way of looking at this? When someone who finds it hard to tell us they\u2019re in pain suddenly changes \u2014 hitting himself, off his food, not sleeping \u2014 that\u2019s very often his way of saying something HURTS, not just \u2018his autism\u2019. New behaviour like this, I always treat as a possible sign of physical illness until we\u2019ve checked. It\u2019s too easy, and sadly too common, to put it down to the disability and miss something treatable."' },
      { lbl:'Find the cause',       txt:'"You said he\u2019s holding his jaw and won\u2019t eat \u2014 that makes me think of his teeth or mouth, maybe an abscess, which is really painful. Or it could be his ears, his tummy (constipation\u2019s common), or a water infection. So rather than calm him down, I want to find what\u2019s hurting and treat THAT \u2014 which is what will actually settle him."' },
      { lbl:'Adjust, don\u2019t skip',  txt:'"I know he hates being examined \u2014 so let\u2019s do it his way. We\u2019ll take extra time, keep it calm and quiet, have you or whoever knows him best there, go gently, and use his hospital passport if he has one. \u2018He hates it\u2019 is a reason for us to adapt, not to skip checking him \u2014 he deserves the same thorough look anyone else would get."' },
      { lbl:'Use what you know',    txt:'"You know his normal better than anyone \u2014 what\u2019s different this week, how he usually shows pain, what\u2019s changed with his eating and sleep. That\u2019s gold for me. Let\u2019s use it to work out what\u2019s wrong."' },
      { lbl:'Advocate + the bigger picture', txt:'"People with a learning disability too often have pain and illness missed because it\u2019s blamed on their condition, and they come to harm because of it. I don\u2019t want that for Daniel. So we check him properly, and I\u2019ll make sure he\u2019s had his annual health check and is getting everything he\u2019s entitled to."' },
      { lbl:'Plan + safety-net',    txt:'"So: let\u2019s get him assessed today with those adjustments \u2014 likely a dental review urgently if it\u2019s his mouth \u2014 and treat whatever\u2019s causing the pain. If he becomes very unwell, feverish, won\u2019t drink, or the distress escalates, contact us/again same-day. We\u2019re not going to sedate Daniel for something that\u2019s hurting him \u2014 we\u2019re going to find it and fix it."' },
    ],
    learning:'A CHANGE in behaviour (self-injury, off food, not sleeping, agitation) in a person with learning disability/autism who cannot easily report symptoms is very often a sign of untreated PHYSICAL ILLNESS or PAIN \u2014 not "just their autism/behaviour". Attributing it to the disability and missing the physical cause is DIAGNOSTIC OVERSHADOWING, a major cause of avoidable harm and premature death in this group, so new behaviour change must trigger a search for a physical cause/pain (here, jaw-holding and off-food suggest a dental abscess; also consider ear/throat, constipation, urinary infection) and treatment of the cause rather than sedation. People with learning disability/autism are entitled to REASONABLE ADJUSTMENTS (Equality Act 2010) — extra time, a calm approach, involving those who know their baseline and pain cues, gentle/desensitised examination, hospital passports and non-verbal pain-assessment tools \u2014 so "he hates being examined" is a reason to ADJUST, not to skip assessment. The examinable hidden agenda is the well-meaning-but-harmful overshadowing assumption (and possible carer fatigue); gently challenge it and advocate for Daniel, centre him as the patient, situate it in the health-inequality context (poorer access/outcomes, the annual health check), and find-and-fix the cause.',
    knowledge:{
      guideline:'Equality Act 2010 (reasonable adjustments) · Mental Capacity Act 2005 · NICE NG11 Challenging behaviour and learning disabilities (2015) · NICE NG54 Mental health problems in people with learning disabilities (2016) · NHS England STOMP programme · LeDeR programme (health inequalities in learning disability) · Accessible Information Standard · learning disability annual health checks (from age 14)',
      points:[
        { h:'Diagnostic overshadowing', t:'Attributing new symptoms or behaviour change in a person with learning disability/autism to their disability (rather than investigating a physical/mental-health cause) is "diagnostic overshadowing" \u2014 a leading contributor to avoidable harm and premature death (LeDeR findings). A change from baseline behaviour should be treated as a possible sign of illness or pain until proven otherwise.' },
        { h:'Behaviour change = look for a cause', t:'Self-injury, agitation, reduced food/fluid intake, sleep disturbance and distress are common ways people who cannot easily verbalise communicate PAIN or illness. Seek physical causes: dental (very common — abscess/toothache), ear/throat infection, constipation, urinary infection, reflux, injury, etc. NICE NG11 (2015): when behaviour that challenges develops or changes, assess for physical health problems including pain, dental problems, constipation, infection and sensory problems. Treat the cause rather than sedating the distress; NICE NG11 reserves antipsychotics for when other interventions have not helped or risk is severe, with close review, and the NHS England STOMP programme aims to stop inappropriate psychotropic prescribing.' },
        { h:'Reasonable adjustments (a legal duty)', t:'Under the Equality Act 2010, services must make reasonable adjustments (and the Accessible Information Standard requires communication needs to be recorded and met): longer/quieter appointments, extra time, calm environment, involving carers who know the person, desensitised/gentle examination, hospital/health passports, easy-read information, and pain-assessment tools for non-verbal patients (e.g. DisDAT). "They hate being examined" is a reason to adapt, not to omit assessment.' },
        { h:'Use those who know baseline', t:'Carers/family who know the person\u2019s normal communication and pain behaviours are essential collateral historians. The change from THEIR baseline is the key diagnostic signal \u2014 actively elicit and use it.' },
        { h:'Health inequalities & annual checks', t:'People with learning disabilities have markedly poorer health access and outcomes and die younger of often-preventable causes. Annual health checks (offered from age 14 to people on the GP learning disability register, with a health action plan), proactive screening, and advocacy are core. Ensure the patient receives equitable assessment and the checks/care they are entitled to.' },
        { h:'Advocate, support the carer', t:'The overshadowing assumption is often well-meaning (and reflects carer fatigue/under-resourcing). Gently challenge it and advocate for the patient without alienating the carer — enlist them in finding the cause. Consent: under the Mental Capacity Act 2005 assume Daniel has capacity, support him to decide and assess capacity decision-specifically; a support worker cannot consent for him, and if he lacks capacity act in his best interests, consulting those who know him and choosing the least restrictive option.' },
        { h:'Never do', t:'Never attribute new behaviour change to "their autism/behaviour" without seeking a physical cause; never sedate unexplained distress instead of assessing; never skip examination because it\u2019s difficult \u2014 adjust instead; never ignore the carer\u2019s baseline knowledge; never overlook the annual health check / equity duties.' },
        { h:'Safety-net & follow-up', t:'Assess for the physical cause with reasonable adjustments (urgent dental/pain review as indicated) and treat it; document adjustments; involve baseline-knowledgeable carers; ensure the annual health check; review; same-day escalation if systemically unwell or distress escalates.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c129, c130, c131, c132);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'interpreter-consultation': {
      ceg: ['Health disadvantage & vulnerabilities', 'Ethnicity, culture & diversity'],
      stem: {
        name: 'Fatima Khedira (son interpreting)', age: '58 years · female',
        pmh: ['Limited English; 16-year-old son "translating"', 'Abdominal pain + low mood', '⚠ Hints of unexplained bruising / possible domestic distress'],
        meds: ['—'],
        allergy: '—',
        recent: 'Son keen to speak for her; "she\u2019s right here, just ask him".',
        reason: 'Telephone — limited-English patient with son interpreting.'
      },
      timeMap: [
        { t:'0–2',  h:'Thank, then redirect', d:'Thank the son warmly; explain policy is a professional interpreter — for accuracy AND so his mum can speak freely. No mistrust implied.' },
        { t:'2–4',  h:'Make it about her',    d:'Book a proper appointment with a professional interpreter and time with the patient ALONE.' },
        { t:'4–7',  h:'Protect the space',    d:'Why it matters: she must be able to disclose anything (health, mood, home life) in confidence — the interpreter enables that.' },
        { t:'7–9',  h:'Safeguarding lens',    d:'Bruising + low mood = possible domestic abuse she can\u2019t disclose through her son; getting her alone is itself a safeguarding step.' },
        { t:'9–12', h:'Set up safe review + net', d:'Book interpreter appointment, a number to reach HER, clinical work-up, DA pathways ready; urgent route (with interpreter) if she deteriorates.' }
      ],
      wordPics: {
        fail: 'Proceeds with the 16-year-old son interpreting; takes the history through him; never creates a confidential space, so possible domestic abuse and her real concerns stay hidden; burdens the child.',
        pass: 'Declines family/child interpreting, arranges a professional interpreter, and plans to see the patient, alert to safeguarding.',
        exc:  'Tactfully declines child interpreting without offending; arranges a professional interpreter and time with the patient ALONE; explains why (accuracy + confidentiality); reads the bruising/low-mood as a possible domestic-abuse signal requiring a confidential space; and centres the patient\u2019s autonomy/dignity with DA pathways ready.'
      },
      avoid: [
        { dont:'"That\u2019s fine, you translate for your mum and we\u2019ll crack on."', instead:'"Thank you for helping — but our policy is a professional interpreter, partly so nothing\u2019s lost and partly so your mum can speak completely freely. I\u2019ll book that."', why:'Using a child as interpreter risks inaccuracy, breaches her confidentiality, and blocks disclosure of sensitive issues like abuse.' },
        { dont:'"Ask your mum if anyone has hurt her."', instead:'"I\u2019d like to speak with your mum directly with an interpreter, and have some of it just with her — for the privacy any patient should have."', why:'Exploring possible abuse THROUGH a family member is unsafe and can place the patient at greater risk.' },
        { dont:'"It\u2019s easier this way, let\u2019s just get it done now."', instead:'"I know it feels easier now, but getting her care right matters more — let\u2019s arrange the interpreter and a proper appointment."', why:'Letting convenience override confidentiality and safety is exactly the trap this station tests.' }
      ]
    },

    'trans-bridging': {
      ceg: ['Health disadvantage & vulnerabilities', 'Prescribing & pharmacology'],
      stem: {
        name: 'Robyn Achebe', age: '26 years · transfeminine',
        pmh: ['On oestradiol + anti-androgen 3 years (specialist then private, now lapsed)', 'NHS GIC referral with years-long wait; hormones run out in a week', '⚠ Distress + hint of suicidal thoughts at the prospect of stopping'],
        meds: ['Oestradiol', 'Anti-androgen (supply lapsing)'],
        allergy: 'NKDA',
        recent: 'New registration; fears GPs "won\u2019t touch it"; wants a bridging prescription + respect.',
        reason: 'Telephone — trans woman, hormones about to run out.'
      },
      timeMap: [
        { t:'0–2',  h:'Affirm first',        d:'Correct name/pronouns; sorry she\u2019s been let down; "I won\u2019t leave you to run out." Respect before anything.' },
        { t:'2–4',  h:'Check safety',         d:'"I can\u2019t go back to how I felt before" — assess suicidal ideation/plan/intent/protective. A safety issue, not paperwork.' },
        { t:'4–6',  h:'The bridging plan',    d:'GMC: a GP may consider a bridging prescription (not obliged) continuing established hormones, with gender-specialist advice and the lowest acceptable dose — harm reduction vs abrupt stop / unregulated online sourcing; RCGP 2024 more cautious.' },
        { t:'6–8',  h:'Do it properly',       d:'Baseline checks, gender-specialist/endo advice, shared care; confirm + chase the GIC referral.' },
        { t:'8–12', h:'Harm reduction + net', d:'Name why (mental health + unsafe self-sourcing). Crisis routes if ideation escalates; trans-inclusive support; respectful follow-up.' }
      ],
      wordPics: {
        fail: 'Refuses on "not my expertise"/"the clinic\u2019s job" grounds and leaves her to run out; misgenders or others her; treats it as administrative and misses the suicide risk and the unregulated-self-sourcing harm.',
        pass: 'Treats her respectfully, assesses risk, offers a bridging prescription with specialist advice/monitoring, chases the GIC referral, and safety-nets.',
        exc:  'Leads with respect and affirmation and reassures her she won\u2019t be abandoned; assesses the suicidal ideation as a safety issue; provides a harm-reduction bridging prescription with baseline monitoring, gender-specialist advice and shared care; chases the GIC referral; names the harm-reduction rationale; and safety-nets with crisis routes and trans-inclusive support.'
      },
      avoid: [
        { dont:'"I\u2019m not a specialist in this, so it\u2019s really the gender clinic\u2019s job — you\u2019ll have to wait."', instead:'"GMC guidance lets me consider a bridging prescription to keep you safe while you wait — with a gender specialist’s advice, I’d aim to continue your hormones, get specialist advice, and chase your referral. I\u2019m not leaving you to run out."', why:'Refusing on expertise grounds and leaving a gap risks a mental-health crisis and unsafe self-sourcing — the harm bridging exists to prevent.' },
        { dont:'"Let\u2019s just get the prescription sorted and you\u2019re done." (ignoring the distress)', instead:'"You said you can\u2019t go back to how you felt before — can I check, have you had thoughts of harming yourself? That matters to me as much as the prescription."', why:'Treating it as purely administrative misses the suicide risk that abrupt loss of treatment can carry.' },
        { dont:'"Are you sure about all this? Have you really thought it through?"', instead:'"You\u2019ve been on these three years and they help you — my job is to keep that going safely, not to question you."', why:'Making the patient justify her identity is othering, undermines trust, and is not the GP\u2019s role here.' }
      ]
    },

    'asylum-destitution': {
      ceg: ['Health disadvantage & vulnerabilities', 'Mental health & addiction'],
      stem: {
        name: 'Tesfaye Bekele', age: '34 years · male',
        pmh: ['Asylum seeker; insomnia (presenting request: sleeping tablets)', 'Nightmares/flashbacks/hypervigilance — likely PTSD (torture/journey)', '⚠ Effectively destitute — not eating regularly, isolated; unsure of entitlements'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I don\u2019t want to be a burden"; unsure he\u2019s "allowed" to see a doctor.',
        reason: 'Video consultation — asylum seeker requesting sleeping tablets.'
      },
      timeMap: [
        { t:'0–2',  h:'Affirm his right',    d:'Everyone can register and get free GP care regardless of status — he\u2019s allowed, not a burden, and was right to come.' },
        { t:'2–5',  h:'Look past the tablet', d:'Not benzodiazepines. Gently ask what keeps him awake — nightmares, on edge → likely trauma. Better help than a tablet.' },
        { t:'5–7',  h:'Trauma-informed',     d:'No forced disclosure; go at his pace over time. Refer to trauma/torture-survivor services; treatable.' },
        { t:'7–9',  h:'Social emergency',     d:'Food, shelter, basics? Signpost asylum support, food, legal advice — addressing destitution is part of the care.' },
        { t:'9–12', h:'Safety + follow-up',   d:'Screen suicidality; crisis numbers; interpreter for future visits; follow-up to build trust. Whole person, not the symptom.' }
      ],
      wordPics: {
        fail: 'Just prescribes sleeping tablets/benzodiazepines; implies he may not be entitled or rushes him out; never opens the trauma or addresses the destitution; misses the PTSD and the social emergency.',
        pass: 'Looks past the request to likely PTSD, reassures entitlement, signposts asylum/food/legal support, avoids benzodiazepines, and refers for trauma.',
        exc:  'Affirms his entitlement and worth and counters the "burden" narrative; takes a trauma-informed approach that gently opens the PTSD without forcing it; treats destitution as a social emergency with concrete signposting; screens mental-health risk; and follows up with an interpreter to build trust — treating the whole person.'
      },
      avoid: [
        { dont:'"Here are some sleeping tablets — that should help you drop off."', instead:'"Sleeping tablets often aren\u2019t the answer and can cause problems. Can I gently ask what\u2019s keeping you awake? \u2026 Those bad dreams can come from trauma, and there\u2019s real help for that."', why:'Prescribing sedatives/benzodiazepines for trauma insomnia misses PTSD and risks dependence.' },
        { dont:'"I\u2019m not sure you\u2019re eligible to be seen here \u2014 you may need to check."', instead:'"You are absolutely entitled to register and be seen, free, whatever your immigration status. You did the right thing coming."', why:'Implying ineligibility is wrong and entrenches the fear that keeps vulnerable people from care.' },
        { dont:'"Your housing and food situation isn\u2019t really a medical matter, I\u2019m afraid."', instead:'"Whether you\u2019re managing for food and shelter matters as much as your health — let me point you to support today."', why:'Dismissing destitution as "not medical" abandons a social emergency that is central to his wellbeing.' }
      ]
    },

    'learning-disability-check': {
      ceg: ['Health disadvantage & vulnerabilities', 'Professional & ethical dilemmas'],
      stem: {
        name: 'Daniel (support worker calling)', age: '24 years · male',
        pmh: ['Moderate learning disability + autism', '1 week: NEW self-injury, off food, not sleeping, agitation (change from baseline)', '⚠ Holding his jaw/face — possible dental abscess/pain'],
        meds: ['Usual meds'],
        allergy: 'NKDA',
        recent: 'Worker attributes it to "his autism/behaviour"; "he hates being examined, just calm him down".',
        reason: 'Video consultation — carer of a young man with LD + autism.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe the behaviour', d:'New behaviour change in someone who can\u2019t report symptoms is often PAIN, not "his autism". Don\u2019t sedate — look for a cause.' },
        { t:'2–4',  h:'Find the cause',       d:'Jaw-holding + off food → ?dental abscess; also ear/throat, constipation, urinary. Assess for the physical cause.' },
        { t:'4–7',  h:'Adjust, don\u2019t skip', d:'Reasonable adjustments: extra time, calm, the person who knows him, gentle/desensitised exam, hospital passport. "He hates it" = adapt, not omit.' },
        { t:'7–9',  h:'Use baseline + advocate', d:'The carer\u2019s knowledge of his normal/pain cues is gold. Name diagnostic overshadowing and the inequality; ensure his annual health check.' },
        { t:'9–12', h:'Plan + safety-net',    d:'Assess today (urgent dental if mouth); treat the cause not sedate; same-day if unwell/won\u2019t drink/escalating.' }
      ],
      wordPics: {
        fail: 'Accepts "it\u2019s just his autism" and prescribes something to calm him; never looks for a physical cause; skips examination because "he hates it"; a painful dental abscess (or other illness) is missed — classic diagnostic overshadowing.',
        pass: 'Recognises behaviour change as a possible physical cause, plans assessment with reasonable adjustments, and treats the cause rather than sedating.',
        exc:  'Names and challenges diagnostic overshadowing; actively seeks the physical cause (likely dental/pain); insists on assessment WITH reasonable adjustments rather than skipping it; uses the carer\u2019s baseline knowledge; advocates for Daniel within the health-inequality context (annual health check); and treats the cause rather than the distress.'
      },
      avoid: [
        { dont:'"It\u2019s probably just his autism — I\u2019ll prescribe something to calm him down."', instead:'"A sudden change like this is often his way of saying something hurts. Let\u2019s find the physical cause — his jaw and not eating make me think of his teeth — and treat that, not sedate him."', why:'Attributing new behaviour change to autism and sedating it is diagnostic overshadowing that misses treatable, painful illness.' },
        { dont:'"He hates being examined, so we\u2019ll skip that and just manage the behaviour."', instead:'"\u2018He hates it\u2019 means we adapt — extra time, calm, you there, gentle and his way — not that we skip checking him. He deserves the same thorough look as anyone."', why:'Skipping assessment because it\u2019s difficult denies a reasonable adjustment and risks missing the cause.' },
        { dont:'"You know him best, so just keep an eye and call if he gets worse."', instead:'"You knowing him best is exactly why I want your help finding what\u2019s wrong today — let\u2019s assess him now with adjustments rather than wait."', why:'Deferring assessment leaves a likely painful physical illness untreated in someone who can\u2019t advocate for himself.' }
      ]
    }
  });

})();
