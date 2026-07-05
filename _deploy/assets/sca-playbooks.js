/* ============================================================
   Reasoning GP — Difficult-consultation playbooks
   Original, opinionated playbooks for consultation TYPES (vs
   clinical topics). Each: when it appears, the trap, opening
   lines, do / avoid, worked phrases, the one thing to remember.
   ============================================================ */

window.SCA_PLAYBOOKS = [
  {
    id:'angry', ic:'🌋', cat:'Difficult dynamics', t:'The angry patient',
    when:'Missed diagnosis, a complaint about a colleague, the third receptionist battle this week, a late visit. In the SCA the anger is usually JUSTIFIED — the system genuinely failed them.',
    trap:'Defending the practice, the colleague, or yourself before the anger has been heard. Defence reads as denial and refuels the fire. The other trap: absorbing abuse without boundary.',
    open:[
      '"I can hear how angry you are — and before anything else, I want to properly understand what happened."',
      '"You\u2019ve been let down. Walk me through it from the start, and I\u2019ll listen to all of it."'
    ],
    do:[
      'Let the first wave land in full — uninterrupted. Anger that is heard usually halves within two minutes.',
      'Name the emotion and its legitimacy: "anyone in your position would be furious."',
      'Apologise for the experience without admitting facts not yet established: "I\u2019m sorry this happened to you" is always safe and always right.',
      'Separate the threads out loud: the clinical problem that still needs solving today, and the complaint, which deserves its own proper route (practice manager, PALS).',
      'End with something concrete happening TODAY — anger needs evidence of motion.'
    ],
    avoid:[
      '"I understand how you feel" — they will tell you that you don\u2019t, and they\u2019ll be right.',
      'Explaining the system\u2019s pressures ("we\u2019re very short-staffed") — it converts their grievance into your excuse.',
      'Blaming the colleague to win favour — unprofessional, and examiners notice probity.',
      'Matching the energy: speeding up, talking over, raising volume.'
    ],
    remember:'Anger is almost always pain or fear wearing armour. Find the fear underneath ("what worries you most about what happened?") and the consultation changes state.'
  },
  {
    id:'bad-news', ic:'🕯️', cat:'Tough conversations', t:'Breaking bad news',
    when:'A 2WW referral conversation, a new diabetes or dementia diagnosis, a scan result that changes everything. In the SCA you usually break the POSSIBILITY of bad news — "this needs urgent tests" — more often than a confirmed diagnosis.',
    trap:'The drip-feed of euphemism: "a shadow", "some changes", "just to be safe" — the patient leaves not knowing, which is crueller than knowing. Equal trap: the data dump that buries the news in management detail.',
    open:[
      '"The results are back, and I\u2019m afraid they\u2019re not what we hoped. Would you like someone with you while we talk, or shall I go on?"',
      '"There\u2019s something important in these results. I\u2019m going to be straightforward with you, and then we\u2019ll take it at your pace."'
    ],
    do:[
      'Warning shot, then the news, then SILENCE. Count five in your head. The silence is the treatment.',
      'Use the real word once, gently — "cancer", "dementia" — euphemisms breed 3am terror.',
      'Chunk and check: one piece of information, then "what\u2019s going through your mind?"',
      'Ask what they want to know — people differ enormously, and asking is itself care.',
      'Close with the named next step, in writing, plus who to call with the 2am questions.'
    ],
    avoid:[
      '"Don\u2019t worry / try to stay positive" — instructs them to perform feelings for your comfort.',
      'Statistics in the first five minutes — nobody can hear numbers through alarm.',
      'Filling their silence with more information. The pause is theirs.',
      '"I know how you feel."'
    ],
    remember:'They will forget nearly everything you say after the news lands — but remember exactly HOW it felt forever. Optimise the feeling, write down the facts.'
  },
  {
    id:'colleague', ic:'🩺', cat:'Professional dilemmas', t:'The colleague who books in as a patient',
    when:'A practice nurse with back pain "just needing a quick sick note", a fellow GP wanting "a quiet word about some tablets", a trainee with low mood who fears the deanery finding out. A favourite SCA station because it tests boundaries and probity at once.',
    trap:'Treating them as a colleague instead of a patient: shorthand histories, corridor standards, prescribing without examining, colluding with secrecy. The whole station IS the boundary.',
    open:[
      '"Before we start — in this room you\u2019re my patient, not my colleague, and you get the same thoroughness as anyone else. Same confidentiality, too."',
      '"I\u2019m glad you booked in properly. Tell me what\u2019s going on — from the beginning, not the corridor version."'
    ],
    do:[
      'Do the FULL assessment you\u2019d do for a stranger — that is the respect they\u2019re owed.',
      'Address the secrecy directly and kindly: confidentiality is theirs; but explore WHY disclosure feels dangerous.',
      'Know the hard lines: performance affected by health → they need their own GP, occupational health, sometimes the GMC duty applies. Say them plainly.',
      'Screen properly for the things colleagues hide: mood, alcohol, self-prescribing, substance access.',
      'Make a real follow-up plan — colleagues are the patients most likely to vanish.'
    ],
    avoid:[
      '"You know all this already, so I\u2019ll skip the basics" — they need the basics most.',
      'Prescribing favours, sick-note favours, or off-the-record anything.',
      'Promising secrecy you may not be able to keep — be honest about the limits up front if patient-safety issues emerge.',
      'Letting their medical knowledge run the consultation.'
    ],
    remember:'The kindest sentence in the station: "You\u2019re allowed to be ill." Health professionals consistently under-report, under-attend and over-cope. Treat the person, not the badge.'
  },
  {
    id:'demand-abx', ic:'💊', cat:'Difficult dynamics', t:'The demand: antibiotics, opioids, benzos',
    when:'Antibiotics for a viral illness, "the only thing that works" codeine refill, diazepam for flying or for "stress". The SCA version usually adds pressure: a deadline, a flight tomorrow, a previous doctor who "always gave it".',
    trap:'Both poles fail. Capitulation fails clinical management; flat refusal fails relating. The mark lives in the negotiated middle — and the trap inside the trap is making it a battle of wills instead of a shared problem.',
    open:[
      '"Let me make sure I understand what you\u2019re dealing with first — then I\u2019ll be honest about what will and won\u2019t actually help."',
      '"You\u2019ve had this before and X worked — tell me what \u2018worked\u2019 looked like, so I know what we\u2019re aiming for."'
    ],
    do:[
      'Take the symptom seriously before touching the request — examine, ask impact. Refusal lands differently after thoroughness.',
      'Find the need behind the request: sleep, work, fear, dependence. The drug is their solution to something — solve the something.',
      'Be the patient\u2019s ally against the problem: "I won\u2019t give you something that harms you; here\u2019s what I WILL do" — then make the WILL substantial.',
      'For dependence-forming drugs: name the dependence risk honestly, offer the structured route (reduction plan, review dates, one prescriber rule).',
      'Safety-net the refusal: what should bring them back, when reassessment happens.'
    ],
    avoid:[
      '"Antibiotics don\u2019t work for viruses" as the opener — true, useless, and heard as dismissal.',
      'Blaming guidelines or the practice ("I\u2019m not allowed") — outsources your judgement and invites shopping.',
      'The lecture on resistance/addiction delivered to someone in distress.',
      'A refusal with nothing in its place — always replace, never just remove.'
    ],
    remember:'"No" is not a management plan. Every refusal must be accompanied by something genuinely useful — a plan, a timeline, a route back — or it\u2019s just a closed door with a leaflet.'
  },
  {
    id:'third-party', ic:'📞', cat:'Professional dilemmas', t:'The third-party call',
    when:'A husband worried about his wife, a daughter ringing about Dad\u2019s memory, an employer "just checking" on a sick note, a school asking about a pupil. The caller is genuinely worried and wants information or action you mostly cannot give.',
    trap:'The cold recitation of confidentiality that ends the call with nothing — technically correct, relationally a fail. The opposite trap: confirming details, agreeing diagnoses, or prescribing on hearsay.',
    open:[
      '"I\u2019m glad you rang. I can listen to everything you want to tell me — what I can\u2019t do is share anything about [her] care. Let\u2019s work with that."',
      '"Nothing stops me hearing your worries, and nothing stops us finding a way to get [him] seen. Start from the beginning."'
    ],
    do:[
      'LISTEN fully — information flowing IN breaches nothing, and what they tell you may matter clinically. Document it.',
      'State the boundary once, warmly, in plain English — then move immediately to what CAN happen.',
      'Build the route in: the open conversation the caller can have, the appointment they can encourage, your willingness to see the person.',
      'Screen for the exceptions that change everything: risk to self, risk to others, safeguarding, capacity — these override, and you should ask about them deliberately.',
      'Care for the caller too — carers\u2019 strain is a presentation in its own right.'
    ],
    avoid:[
      'Confirming OR denying anything about the patient — even "she\u2019s registered here" can breach.',
      '"Due to GDPR/data protection I cannot discuss…" — bureaucratic armour; say it like a human.',
      'Prescribing or diagnosing for the absent patient.',
      'Forgetting to ask the safety questions because the boundary conversation consumed the call.'
    ],
    remember:'Confidentiality limits what flows OUT, never what flows IN. The pass is making the "can\u2019t" short and the "can" generous.'
  },
  {
    id:'self-discharge', ic:'🚪', cat:'Tough conversations', t:'The patient who refuses your advice',
    when:'Declining the 2WW referral, refusing statins after a TIA, won\u2019t take the antidepressant, discharging against advice, declining admission for the chest pain. The SCA loves this because it tests whether you respect autonomy or just say you do.',
    trap:'Two failures: bulldozing (repeat the advice louder until time runs out) and abandoning (fine, your choice, sign here). Both miss the actual task — understanding the refusal.',
    open:[
      '"You\u2019ve heard my advice and it\u2019s not landing — that usually means I\u2019ve missed something that matters to you. What is it?"',
      '"Before anything else: what would saying yes cost you? There\u2019s usually a reason this big."'
    ],
    do:[
      'Explore the refusal as data: fear of the test result, a relative\u2019s bad experience, work they can\u2019t miss, beliefs about the drug. Most refusals are specific and addressable.',
      'Check capacity quietly through conversation (understands, retains, weighs, communicates) — and remember a capacitous patient may make an unwise choice.',
      'Make the risk concrete and personal, not statistical: "the thing I\u2019m frightened of for YOU is…" — once, clearly, without theatre.',
      'Negotiate the largest acceptable step: the blood test if not the referral, a week\u2019s trial, a phone follow-up. Keep a foothold.',
      'Leave the door wide open and SAY SO: changing your mind is allowed, today\u2019s no is not forever, here\u2019s exactly how to come back. Document the discussion.'
    ],
    avoid:[
      'Repeating the recommendation in escalating volumes.',
      '"It\u2019s your funeral" energy — punishing the choice with coldness.',
      'Burying the risk message to preserve rapport — they must hear it once, plainly.',
      'Forgetting safety-netting precisely when it matters most.'
    ],
    remember:'A respected "no" today is frequently a "yes" in two weeks. A bulldozed patient never comes back to tell you they\u2019ve changed their mind.'
  },
  {
    id:'note-request', ic:'📄', cat:'Professional dilemmas', t:'The dubious request: notes, letters, forms',
    when:'A sick note for a dispute with an employer, "just a letter saying the flat is making my asthma worse", backdating a med3, a fitness-to-fly letter for someone you\u2019ve not examined, the gym cancellation letter. Small paper, big probity.',
    trap:'It feels trivially kind to just sign — and that instinct is the test. Your signature is a clinical attestation; writing what you have not assessed or do not believe is the probity fail the station exists to detect.',
    open:[
      '"Let\u2019s look at what you need this letter to do — and then I\u2019ll tell you honestly what I can put my name to."',
      '"I can only write what I can clinically stand behind — so let\u2019s start with a proper assessment, and see what that supports."'
    ],
    do:[
      'Assess first, paperwork second — convert the form-request into a real consultation.',
      'Be precise about what you CAN write: what you observed, what the patient reports (attributed as report), what the records support.',
      'Explain the constraint as protection: "a letter I can\u2019t defend is worthless to you the moment anyone questions it."',
      'Know the rules you\u2019re inside: med3 can be backdated based on assessment, fit notes are about function not diagnosis, some letters are simply not GP work (housing surveys, most legal opinions) — redirect appropriately.',
      'Offer the legitimate version of what they need — often a factual extract or an honest fit note solves the real problem.'
    ],
    avoid:[
      'Signing to end the consultation faster.',
      'Writing the patient\u2019s words as your clinical opinion.',
      'Moralising about the request — decline the letter, not the person.',
      'Vague refusal without explaining what you COULD provide.'
    ],
    remember:'You can almost always write SOMETHING true and useful. The skill is finding the document you can defend — not choosing between rubber stamp and refusal.'
  },
  {
    id:'da-disclosure', ic:'🕊️', cat:'Tough conversations', t:'The hidden disclosure: abuse, violence, coercion',
    when:'The "tension headaches" with an over-attentive partner in the waiting room, recurrent UTIs that don\u2019t add up, the third "fall" this year, low mood with hypervigilance. The disclosure usually arrives obliquely, once, in the last three minutes — IF you make the room safe.',
    trap:'Missing the one quiet offer ("things at home are… difficult") because the clock is running. Or hearing it and panicking into immediate solutions — police, leave him, refuge tonight — which recreates the control they live under.',
    open:[
      '(Partner asks to come in) "Practice policy is that I see everyone alone first — I\u2019ll bring you in after." (Then, alone:) "How are things at home — really?"',
      '"You said things are difficult at home. I\u2019m listening, there\u2019s no rush, and nothing you say leaves this room without your agreement — unless a child is at risk, and I\u2019d tell you first."'
    ],
    do:[
      'Believe first, assess second. "Thank you for telling me. This is not your fault." — both sentences, out loud.',
      'Ask the direct questions gently: afraid at home? ever hurt physically? are the children seeing it? — and the highest-risk markers: strangulation, escalation, pregnancy, threats to kill.',
      'Safety TODAY, not the whole solution: is it safe to go home tonight? Make the next contact concrete and routine-looking.',
      'Know your levers: domestic abuse advisor/IDVA referral, National DA Helpline 0808 2000 247, safeguarding lead, and that children witnessing = safeguarding referral, not optional.',
      'Document verbatim in a coded/secure way, never on anything the partner could see (no SMS, no visit summaries home).'
    ],
    avoid:[
      '"Why don\u2019t you just leave?" — leaving is the highest-risk moment, and the question blames.',
      'Pushing disclosure they\u2019re not ready for — plant the flag ("we ask everyone; you can always tell me") and let it grow.',
      'Confronting or contacting the partner.',
      'Promising absolute secrecy before knowing if children are involved.'
    ],
    remember:'You are rarely the rescue. You are the safe adult they tested the water with. If they leave feeling believed and knowing one phone number, the consultation succeeded.'
  },
  {
    id:'freq-attender', ic:'🔁', cat:'Difficult dynamics', t:'The frequent attender / persistent symptoms',
    when:'The fourteenth appointment this year, normal tests every time, a new symptom each visit — or the same one, unresolved by reassurance. Often trailing a thick history of "nothing found".',
    trap:'The accumulated negative tests have convinced everyone but the patient. The trap is communicating "there\u2019s nothing wrong" (heard as: you\u2019re lying or mad) — or capitulating into the next unnecessary scan to buy peace.',
    open:[
      '"You\u2019ve been here a lot this year, and you\u2019re still suffering — so whatever we\u2019ve been doing isn\u2019t working. Let\u2019s step back and look at the whole picture together."',
      '"The tests keep coming back normal AND your symptoms are completely real. Both of those are true — let me explain how."'
    ],
    do:[
      'Review the whole record before the consultation and SAY you have — being known is half the treatment.',
      'Validate the symptoms as real while reframing the explanation: real pain, amplified signal, nervous-system volume knob — pick an honest metaphor and commit.',
      'Ask the question nobody has: "what do you fear this is?" and "what was happening in your life when this started?"',
      'Change the contract: regular SCHEDULED reviews with one named GP (you), decoupled from new symptoms — attendance no longer requires illness.',
      'Set the investigation boundary kindly but clearly: new tests for new objective findings, not for recurrence of the known pattern.'
    ],
    avoid:[
      '"It\u2019s all stress / it\u2019s anxiety" delivered as a dismissal rather than an explanation.',
      'One more scan "for reassurance" — reassurance by imaging decays in weeks and teaches escalation.',
      'Visible exasperation; they detect it instantly and attend more.',
      'A different GP every visit — discontinuity feeds the cycle.'
    ],
    remember:'The appointment IS the medicine. Schedule it like one — regular, named, expected — and watch the emergency attendances fall.'
  },
  {
    id:'interpreter', ic:'🌐', cat:'Core skills', t:'The language-barrier consultation',
    when:'Telephone interpreter on the line, a family member volunteering to translate, limited English with high-stakes content (consent, bad news, medication changes). The SCA tests whether the PATIENT, not the translation, stays at the centre.',
    trap:'Talking to the interpreter ("can you ask her if…"), letting a relative filter — especially a child, especially when the content might involve the relative — and halving the medicine to fit the doubled time.',
    open:[
      '(To the patient, looking at the patient:) "I\u2019m going to speak to you directly, and [the interpreter] will help us. Everything stays confidential — including from family, if you wish."',
      '(Family offers to translate:) "Thank you — for medical conversations we use a professional interpreter, so that you can just be her daughter today."'
    ],
    do:[
      'Speak TO the patient, first person, eye contact — "where is your pain?" never "ask her where".',
      'Short sentences, one idea each, pause for the interpretation. Plan half the content in the same minutes — choose what matters.',
      'Check understanding by teach-back through the interpreter — comprehension illusions double through translation.',
      'Book the professional interpreter for follow-up AT booking; note the language and preference on the record.',
      'Watch the patient\u2019s face during the interpretation — distress shows before words arrive.'
    ],
    avoid:[
      'Children as interpreters — near-absolute no; intimate, frightening content through a child is harm.',
      'Family interpreting anything involving abuse, mental health, or the family itself.',
      'Raising your volume; English louder is not English clearer.',
      'Idioms, double negatives, "a little bit concerning" — say the plain thing.'
    ],
    remember:'Halve the agenda, never the safety-netting. If only three things survive translation, make them: what it is, what to do, when to come back.'
  }
];
