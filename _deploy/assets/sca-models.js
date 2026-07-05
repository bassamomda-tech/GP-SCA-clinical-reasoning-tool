/* ============================================================
   Reasoning GP — The Hot Seat: PRE-WRITTEN expert model consultations
   A COMPLETE, gold-standard ~12-minute run of each station, written the
   way an RCGP examiner would expect it performed at clear/excellent-pass
   standard. Ready instantly (no AI generation).

   Each turn: { who:'dr'|'pt', text, dom?, why?, phase?, clock? }
   - dom ('tasks'|'rto'|'gs') marks a DOCTOR line that earns marks; it is
     highlighted and tagged with a one-line "why this scores".
   - phase/clock render a section divider so the run reads as a structured
     12-minute consultation that covers ALL three marking domains.
   Educational; original content modelled on current UK guidance.
   ============================================================ */

window.SCA_MODELS = {

  /* ============================================================
     1. Hypertension — Marcus Whitfield, 32 (video)
     ============================================================ */
  'htn-young-bp': [
    { phase:'Opening & agenda', clock:'0–1 min', who:'dr', text:'Hello Marcus, I’m Dr Lee — thanks for making time. The nurse has shared your readings with me, but I’d much rather start with you. What went through your mind when she said your blood pressure was up?', dom:'rto', why:'Opens with the patient’s perspective, not the numbers' },
    { who:'pt', text:'Honestly? I think it’s a fluke. I’d rushed in, had a coffee. I feel completely fine. I just really don’t want to end up on tablets for life like my dad was.' },
    { who:'dr', text:'That’s really helpful — and I promise we’ll come back to your dad, because it clearly matters. Just so I use our time well: I’d like to understand you and your health, talk through what the readings mean, and agree a plan together. Does that sound okay?', dom:'gs', why:'Sets a clear agenda and structures the consultation' },
    { who:'pt', text:'Yeah, that’s fine.' },

    { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'Tell me a bit about a normal week — work, exercise, the day-to-day.', dom:'rto', why:'Open question to gather context before narrowing' },
    { who:'pt', text:'I’m a software engineer — long hours, tight deadlines. Football once a week. Lots of takeaways because I’m shattered, and a couple of energy drinks to get through the afternoon.' },
    { who:'dr', text:'And what about alcohol, and do you smoke at all?' },
    { who:'pt', text:'Six pints or so at the weekend. Never smoked.' },
    { who:'dr', text:'How’s your sleep — any snoring, or waking up unrefreshed?', dom:'tasks', why:'Targeted question that opens up secondary causes' },
    { who:'pt', text:'Funny you ask — I snore so badly my partner’s moved to the spare room. And I nod off at my desk most afternoons.' },
    { who:'dr', text:'That’s genuinely useful — heavy snoring with daytime sleepiness can point to a sleep condition that pushes blood pressure up, so I’d like to screen for that separately rather than brush past it.', dom:'tasks', why:'Picks up and acts on the OSA cue (snoring + sleepiness)' },
    { who:'dr', text:'Any headaches, vision changes, chest pain or breathlessness?' },
    { who:'pt', text:'No, none of that. Just tired, but I blamed the baby.' },

    { phase:'Ideas, concerns & expectations', clock:'4–6 min', who:'dr', text:'You mentioned your dad — would you tell me what happened to him?', dom:'rto', why:'Returns to the dominant emotional cue and explores it' },
    { who:'pt', text:'He had a stroke at 51. Never the same after — died when I was in my twenties. I’ve got a six-month-old now, and I keep thinking I don’t want her watching me go the same way.' },
    { who:'dr', text:'Thank you for telling me that — that’s a heavy thing to carry, and it makes complete sense this frightens you. Can I ask what you were hoping we’d do today?', dom:'rto', why:'Validates the fear and elicits expectations' },
    { who:'pt', text:'I suppose… tell me it’s nothing. But also, if it’s real, I want to deal with it properly. For her.' },

    { phase:'Explanation', clock:'6–8 min', who:'dr', text:'Let me be straight, then. The most important thing first: we never diagnose high blood pressure from one or two clinic readings — running for the bus genuinely affects them. So I’d like to lend you a monitor for home readings over a week, or arrange a 24-hour monitor. That gives us the truth rather than a one-off.', dom:'tasks', why:'Confirms with ABPM/HBPM rather than treating a single reading' },
    { who:'pt', text:'Oh — so it might not even be high?' },
    { who:'dr', text:'It might be lower than today suggests, yes. Alongside that I’d like baseline tests — a blood test for your kidneys, sugar and cholesterol, a urine test, and a heart tracing. And I’ll work out your personal cardiovascular risk as an actual number, so we’re dealing with facts, not fear.', dom:'tasks', why:'Risk-stratifies — U&E, ACR, ECG, QRISK3' },
    { who:'pt', text:'That makes sense. I’d rather know.' },
    { who:'dr', text:'And the medication worry — can I reassure you on that? For someone your age and of African-Caribbean background, if we ever did need a tablet, the modern first choice is a different type from the one your dad would have had, with a very different side-effect picture. We would not be repeating his story.', dom:'tasks', why:'Correct first-line (CCB) for phenotype and reframes the fear' },
    { who:'pt', text:'That’s reassuring, actually. I’d built it up in my head.' },

    { phase:'Shared management', clock:'8–11 min', who:'dr', text:'Here’s what I’m suggesting, and tell me what fits your life. First, the home readings and baseline tests. Second — you don’t have to overhaul everything today. If we picked one change that would genuinely stick, what would it be?', dom:'rto', why:'Shared decision-making; negotiates one achievable goal' },
    { who:'pt', text:'Probably the energy drinks. Two a day is a lot. I could get to one.' },
    { who:'dr', text:'Brilliant — let’s start with one a day. I’ll also send you proper guidance on how to take the home readings, because technique matters. If the average comes back high, the evidence is clear that treating it — lifestyle first, a tablet if needed — substantially cuts that stroke risk you’re worried about.', dom:'gs', why:'Tailors the plan to the patient and links it to his concern' },
    { who:'pt', text:'Okay. That feels doable.' },
    { who:'dr', text:'And separately I’ll arrange screening for the snoring — if it is sleep apnoea, treating it helps both the blood pressure and the exhaustion.', dom:'tasks', why:'Follows through on the OSA finding with a concrete action' },

    { phase:'Safety-net & close', clock:'11–12 min', who:'dr', text:'Before you go — I don’t expect any of this, but you should know: a sudden severe headache, vision change, weakness down one side or chest pain is a 999 call. Anything else that worries you, ring us. I’d like to see you back within four weeks with your home readings — does that work?', dom:'gs', why:'Plain-language 999 safety-net and a defined follow-up' },
    { who:'pt', text:'Yes. Thank you, doctor — I feel a lot better than when I logged on.' },
    { who:'dr', text:'You did the right thing taking it seriously. Just to check I’ve got it right: home readings, baseline bloods and tracing, sleep screening, one energy drink a day, and back in four weeks. Anything I’ve missed that you wanted to cover?', dom:'rto', why:'Summarises, checks understanding and shares the floor' },
    { who:'pt', text:'No, that’s everything. Cheers.' }
  ],

  /* ============================================================
     2. RIF pain — Layla Ahmed, 28 (telephone, emergency)
     ============================================================ */
  'rif-pain-young-female': [
    { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Layla, I’m the duty GP. I can hear you’re uncomfortable — I want the story in your own words first. What’s the pain been doing since you noticed it this morning?', dom:'rto', why:'Open question, builds rapport with a worried caller' },
    { who:'pt', text:'I woke up with this awful pain low down on the right. It’s been getting worse all day. I’ve never had anything like it.' },

    { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'Can you describe it — constant or in waves, and does anything make it worse?' },
    { who:'pt', text:'Constant, cramping. About a six, but eight if I move. Sharp twinge if I cough.' },
    { who:'dr', text:'Any nausea or vomiting, and any change to your waterworks or bowels?' },
    { who:'pt', text:'A bit sick, not actually sick. Nothing with bladder or bowels. I did notice some light brown spotting this afternoon, though.' },
    { who:'dr', text:'Thank you, that’s important. Can I ask about your periods — when was your last one?', dom:'tasks', why:'Moves to pregnancy risk early in a woman of reproductive age' },
    { who:'pt', text:'That’s the thing — about six weeks ago. I’m usually bang on 28 days. I haven’t tested.' },
    { who:'dr', text:'And are you using any contraception at the moment?' },
    { who:'pt', text:'No — we came off the pill four months ago, we’ve been trying for a baby.' },
    { who:'dr', text:'Have you felt lightheaded or dizzy at all, or had any pain at the tip of your shoulder?', dom:'tasks', why:'Screens specifically for ectopic red flags' },
    { who:'pt', text:'Now you say it — I felt faint standing up earlier. And there’s a dull ache in my left shoulder. I thought I’d slept on it.' },
    { who:'dr', text:'Have you ever had an ectopic pregnancy, a pelvic infection, or surgery on your tubes or ovaries?', dom:'tasks', why:'Establishes ectopic risk factors' },
    { who:'pt', text:'I had chlamydia years ago, and an operation for an ovarian cyst at 23.' },

    { phase:'Ideas & concerns', clock:'4–6 min', who:'dr', text:'Before I tell you what I’m thinking — what’s gone through your own mind about what this might be?', dom:'rto', why:'Elicits ideas and concerns' },
    { who:'pt', text:'I’m terrified I’m losing a baby. Or that something’s really wrong.' },
    { who:'dr', text:'I can hear how frightening this is, and I’m going to be honest and careful with you because that’s the safest thing.', dom:'rto', why:'Acknowledges the emotional weight honestly' },

    { phase:'Working diagnosis & explanation', clock:'6–8 min', who:'dr', text:'The combination of a late period, this pain, the spotting, feeling faint and the shoulder ache means I have to take seriously the possibility of a pregnancy that has settled outside the womb — an ectopic. That needs checking today, not tomorrow.', dom:'tasks', why:'Reaches the working diagnosis; does not falsely reassure' },
    { who:'pt', text:'Oh god. So it could be an ectopic?' },
    { who:'dr', text:'It’s on my list and I can’t rule it out over the phone — that’s exactly why I want you seen properly. Whatever this turns out to be, ringing now was absolutely the right thing to do.', dom:'rto', why:'Honest about uncertainty; affirms the patient’s action' },

    { phase:'Shared management', clock:'8–11 min', who:'dr', text:'Here’s my plan. I’m going to arrange for you to be seen today at the Early Pregnancy Unit — they’ll do a scan and a blood test. If there’s any delay getting there, or you feel worse, it’s A&E instead. Does that sound manageable?', dom:'tasks', why:'Same-day EPAU/A&E referral with a clear route' },
    { who:'pt', text:'Yes. My husband’s at work but I’ll call him.' },
    { who:'dr', text:'Good. Do a home pregnancy test if you have one handy, but please don’t wait for it before you set off — the assessment matters more than the test.', dom:'tasks', why:'Does not delay definitive assessment for a home test' },
    { who:'pt', text:'Okay. Should I take any painkillers?' },
    { who:'dr', text:'Paracetamol is fine, but nothing that would mask things, and don’t eat or drink much in case they need to act quickly. I’ll phone the unit now so they’re expecting you.', dom:'gs', why:'Sensible interim advice; prepares for possible intervention' },

    { phase:'Safety-net & close', clock:'11–12 min', who:'dr', text:'Very important safety-net: if you collapse, the pain becomes severe, or you bleed heavily, call 999 and say you may have an ectopic pregnancy — don’t wait. Can you tell me back what you’re going to do now?', dom:'gs', why:'Explicit emergency safety-net and checks understanding' },
    { who:'pt', text:'Call my husband, head to the Early Pregnancy Unit, and 999 if I collapse or it gets much worse.' },
    { who:'dr', text:'Exactly right. I’m sorry you’re going through this — you’ve done everything correctly, and they’ll look after you. I’ll make that call now.', dom:'rto', why:'Closes with empathy and reassurance' }
  ],

  /* ============================================================
     3. Knee pain — Donald Harris, 65 (face-to-face)
     ============================================================ */
  'knee-pain-walker': [
    { phase:'Opening', clock:'0–1 min', who:'dr', text:'Morning Donald, come in — have a seat. What’s brought you along today?', dom:'rto', why:'Warm opening, open question' },
    { who:'pt', text:'It’s my right knee, doc. Been aching for months. I’m a keen hill walker and it’s really starting to get in the way.' },
    { who:'dr', text:'That sounds frustrating, especially with the walking. Tell me more about the pain — when it’s worst and how it behaves.', dom:'rto', why:'Acknowledges impact, invites the story' },

    { phase:'Data gathering', clock:'1–4 min', who:'pt', text:'Worse after a long walk, and going downhill. Stiff for about ten minutes when I get up, then it eases.' },
    { who:'dr', text:'Any swelling, locking, or does it ever give way under you?', dom:'tasks', why:'Targeted questions to separate OA from mechanical/inflammatory causes' },
    { who:'pt', text:'A bit puffy sometimes after a big walk. No real locking or giving way.' },
    { who:'dr', text:'Any pain in the hip or the back, and is the other knee okay?' },
    { who:'pt', text:'Hip’s fine, back’s fine. Left knee twinges occasionally but nothing like this.' },
    { who:'dr', text:'Has it been hot, red or suddenly swollen, and have you felt at all unwell or feverish with it?', dom:'tasks', why:'Screens for septic/inflammatory red flags' },
    { who:'pt', text:'No, nothing like that. Just the wear-and-tear ache.' },
    { who:'dr', text:'And in terms of your general health — any other conditions, and what medication are you on?' },
    { who:'pt', text:'Just cholesterol tablets. Atorvastatin. Otherwise fit as a fiddle, that’s why this is bugging me.' },

    { phase:'Ideas, concerns & expectations', clock:'4–6 min', who:'dr', text:'Before we go further — what do you think is going on in there, and is there anything in particular you’re worried about?', dom:'rto', why:'Elicits ideas and concerns' },
    { who:'pt', text:'I reckon it’s bone on bone. My mate had that and needed a full knee replacement — I’m dreading being told I need one, and being off my feet for months.' },
    { who:'dr', text:'Thank you — that helps me a lot. And what were you hoping we could do today?', dom:'rto', why:'Draws out the expectation' },
    { who:'pt', text:'Honestly, I half expected you’d send me for a scan to see how bad it is.' },

    { phase:'Examination & explanation', clock:'6–8 min', who:'dr', text:'Let me examine the knee — I’ll look at it, feel for warmth and swelling, and check how it moves and bears weight. (Examines.) Good news: it’s not hot or hugely swollen, the movement’s reasonable, and it’s stable.', dom:'tasks', why:'Focused examination and interprets the findings' },
    { who:'pt', text:'So what is it then?' },
    { who:'dr', text:'From the pattern — your age, activity-related pain, brief morning stiffness, and the exam — this is osteoarthritis. And here’s the key thing: when it’s this typical, we diagnose it clinically. An X-ray rarely changes what we do, and the picture on the scan often doesn’t match the pain anyway, so I wouldn’t routinely send you.', dom:'tasks', why:'Reaches the diagnosis and correctly avoids unnecessary imaging' },
    { who:'pt', text:'Oh — I assumed a scan was the whole point.' },
    { who:'dr', text:'It’s a really common assumption. Let me reassure you on the big fear too: “bone on bone” doesn’t automatically mean a replacement. Most people manage well for years without surgery — and staying active actually protects the joint rather than wearing it out.', dom:'rto', why:'Directly addresses the “bone-on-bone/replacement” concern' },

    { phase:'Shared management', clock:'8–11 min', who:'dr', text:'The treatment with the best evidence isn’t a tablet — it’s exercise to strengthen the muscles around the knee, plus, if you’re open to it, a little weight loss to offload it. I can refer you to a physiotherapist to get you a tailored programme. How does that land?', dom:'tasks', why:'Offers core evidence-based management (exercise + weight)' },
    { who:'pt', text:'I can do exercise — I just don’t want to make it worse.' },
    { who:'dr', text:'You won’t — soreness that settles is fine and expected. For the pain, I’d start with a topical anti-inflammatory gel rather than tablets, because it’s effective for knees and much safer on the stomach and kidneys. If you need something stronger for a flare, a short course of an anti-inflammatory with a stomach-protecting tablet — though we’d be a bit cautious given your age. I’d steer away from strong painkillers like codeine.', dom:'tasks', why:'Stepwise analgesia tailored safely to comorbidity' },
    { who:'pt', text:'That all sounds sensible.' },
    { who:'dr', text:'And to be clear about surgery: we’d consider a referral for a surgical opinion only if your quality of life is really suffering despite all this — not on the basis of a scan. So the path is in your hands.', dom:'gs', why:'Sets correct, patient-centred referral threshold' },

    { phase:'Safety-net & close', clock:'11–12 min', who:'dr', text:'Safety-net: if the knee ever becomes hot, very swollen and painful, especially with feeling unwell, that needs urgent review — that’s not ordinary arthritis. Otherwise let’s review in six weeks to see how the exercises and gel are going. Can you tell me back the plan as you understand it?', dom:'gs', why:'Red-flag safety-net, defined follow-up, checks understanding' },
    { who:'pt', text:'Physio and exercises, lose a bit of weight, gel for the pain, stronger stuff only for a flare, and back in six weeks. And no, I don’t need a replacement just yet.' },
    { who:'dr', text:'Perfect summary — and you’ve clearly taken the reassuring part on board, which I’m really pleased about.', dom:'rto', why:'Confirms understanding and reinforces reassurance' }
  ],

  /* ============================================================
     4. Home visit — Edith Saunders, 84 (confusion / ?delirium)
     ============================================================ */
  'home-visit-confusion': [
    { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Edith, I’m Dr Singh — lovely to meet you. (To daughter) And you must be June. Thank you both for calling. June, would you tell me what’s been worrying you?', dom:'rto', why:'Engages both patient and carer, open question' },
    { who:'pt', text:'(June) She’s just not herself, doctor. Muddled, forgetting things, not eating. Over the last fortnight. She’s never been this bad.' },
    { who:'dr', text:'That must be frightening to watch. Edith, may I ask you a few questions directly too — is that alright?', dom:'rto', why:'Includes the patient, not only the carer' },
    { who:'pt', text:'(Edith) If you like, dear. Though I don’t know what all the fuss is about.' },

    { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'June, was this change gradual over months, or did it come on over days?', dom:'tasks', why:'Onset/course — the key to separating delirium from dementia' },
    { who:'pt', text:'(June) Quite quick — over a couple of weeks. Some days she’s clearer than others. Mornings are worse.' },
    { who:'dr', text:'That fluctuation is really important. Any cough, urine symptoms, fever, or has she had a fall?' },
    { who:'pt', text:'(June) No cough. She did have a fall last week, no injury. I don’t know about her waterworks.' },
    { who:'dr', text:'And has anything changed with her tablets recently — anything new started?', dom:'tasks', why:'Hunts for a precipitant; medication review' },
    { who:'pt', text:'(June) The only new thing is those co-codamol the other doctor gave her for her knee, about four weeks ago.' },
    { who:'dr', text:'Thank you — that could be very relevant. How have her bowels been, and is she drinking enough?', dom:'tasks', why:'Screens constipation/dehydration — common, reversible causes' },
    { who:'pt', text:'(June) Now you mention it, she’s been constipated and barely drinking.' },

    { phase:'Examination & assessment', clock:'4–7 min', who:'dr', text:'Edith, I’d like to do a quick check — your temperature, pulse, oxygen levels and blood pressure, listen to your chest, feel your tummy, and ask you four short questions. Is that okay?', dom:'tasks', why:'Structured assessment incl. obs and a delirium screen (4AT)' },
    { who:'pt', text:'(Edith) Go on then.' },
    { who:'dr', text:'(Examines) Her observations are stable, chest is clear, but her tummy’s a little full lower down and she’s dry. On the four questions she’s more muddled than June tells me is normal for her.', dom:'tasks', why:'Interprets findings; identifies likely precipitants' },
    { who:'dr', text:'I’d also like to send some bloods and a urine sample — to check for infection, kidney function, salts, calcium, sugar and thyroid — so we don’t miss a treatable cause.', dom:'tasks', why:'Appropriate investigations for delirium work-up' },

    { phase:'Ideas, concerns & explanation', clock:'7–9 min', who:'dr', text:'June, before I explain — what had you been fearing this was?', dom:'rto', why:'Elicits the carer’s ideas and concerns' },
    { who:'pt', text:'(June) That her dementia’s suddenly got much worse and she can’t stay at home.' },
    { who:'dr', text:'I understand why — but I think this is something different and more hopeful. A sudden, fluctuating change like this is usually a delirium: the brain reacting to something physical. Here, the likely culprits are the new co-codamol, constipation and not drinking enough — and importantly, those are treatable.', dom:'tasks', why:'Reaches working diagnosis (delirium) and explains it plainly' },
    { who:'pt', text:'(June) Oh — so she might come back to herself?' },
    { who:'dr', text:'Very often, yes, once we fix the cause. It’s not the same as her dementia simply stepping down.', dom:'rto', why:'Addresses the carer’s specific fear directly' },

    { phase:'Shared management', clock:'9–11 min', who:'dr', text:'So here’s the plan. I’ll stop the co-codamol and switch to regular paracetamol for her knee. We’ll treat the constipation with a laxative, and really focus on fluids. I’ll chase the urine and bloods today. Does that feel manageable between us?', dom:'tasks', why:'Treats the precipitants; safe, practical plan' },
    { who:'pt', text:'(June) Yes, I can keep her drinking and sort the laxative.' },
    { who:'dr', text:'And June — you’re carrying a lot. You’re entitled to a carer’s assessment for support and respite, and I’d like to arrange that. Caring for someone with delirium is exhausting.', dom:'gs', why:'Recognises carer strain; signposts statutory support' },
    { who:'pt', text:'(June) That would honestly make a difference.' },
    { who:'dr', text:'On capacity — Edith can’t fully weigh this up right now, so I’m making these decisions in her best interests, but I’ll keep involving her as she improves.', dom:'gs', why:'Addresses Mental Capacity Act / best interests appropriately' },

    { phase:'Safety-net & close', clock:'11–12 min', who:'dr', text:'Safety-net: if she becomes drowsy and hard to rouse, develops a fever, stops drinking altogether, or suddenly worsens, ring us — or 999 if you can’t wake her. I’ll call you this afternoon with the urine result and visit again if needed. What will you do if she becomes very drowsy?', dom:'gs', why:'Clear escalation safety-net and checks understanding' },
    { who:'pt', text:'(June) Call you, or 999 if I can’t wake her. Thank you, doctor — that’s a huge relief.' }
  ],

  /* ============================================================
     5. Acne — Sophie Edwards, 16 (video, mother present)
     ============================================================ */
  'acne-teen': [
    { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hi Sophie, hi Karen — thanks for joining on video. Sophie, I’d really like to hear from you first: what’s been going on, and how’s it affecting you?', dom:'rto', why:'Addresses the young person directly; open question' },
    { who:'pt', text:'(Sophie) It’s my skin. It’s been getting worse for over a year. I’ve tried face washes and creams from the chemist, nothing works. I hate how I look.' },
    { who:'dr', text:'I’m really glad you told me that last part — it matters as much as the spots. Karen, would it be alright if I spent a little time talking just with Sophie at some point? Sometimes it helps.', dom:'gs', why:'Creates space to see the young person alone (Gillick/confidentiality)' },
    { who:'pt', text:'(Karen) Of course. I just want her sorted — my sister swears by those strong tablets.' },

    { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'Sophie, whereabouts is the acne — face, chest, back — and are any of the spots leaving marks or scars?', dom:'tasks', why:'Assesses distribution and scarring to grade severity' },
    { who:'pt', text:'(Sophie) Face mostly, some on my back. A few have left little scars, which really upsets me.' },
    { who:'dr', text:'Have you tried anything from the GP before, and are your periods regular — any extra hair growth or weight change?', dom:'tasks', why:'Prior treatment and a brief PCOS screen' },
    { who:'pt', text:'(Sophie) Nothing from the doctor before. Periods are all over the place, actually.' },
    { who:'dr', text:'Thanks — that’s useful and we’ll keep an eye on it. How’s your mood been with all this? Sometimes skin like this really gets people down.', dom:'rto', why:'Screens mood — picks up the psychological impact' },
    { who:'pt', text:'(Sophie) Honestly… not great. I’ve stopped going out. I don’t want people looking at me.' },
    { who:'dr', text:'(Gently, with Karen briefly stepped away) Sophie, when you feel that low — have you ever had thoughts of harming yourself?', dom:'tasks', why:'Safe, direct risk assessment of low mood' },
    { who:'pt', text:'(Sophie) No, nothing like that. I just feel rubbish about myself.' },

    { phase:'Ideas, concerns & expectations', clock:'4–6 min', who:'dr', text:'What’s worried you most about your skin, and what were you hoping for today?', dom:'rto', why:'Elicits ideas, concerns and expectations' },
    { who:'pt', text:'(Sophie) That the scars will be permanent. And I guess I hoped for the strong tablets Mum mentioned.' },

    { phase:'Explanation', clock:'6–8 min', who:'dr', text:'Let me explain where we are. From what you describe — spots on the face and back with some early scarring — this is moderate acne, and the scarring tells me we shouldn’t be timid. The good news: this is very treatable, and treating it properly is exactly how we prevent more scars.', dom:'tasks', why:'Grades severity and explains it in plain language' },
    { who:'pt', text:'(Karen) So can she have the strong tablets?' },
    { who:'dr', text:'The very strong tablet your sister means is isotretinoin — it’s a specialist medication with important safety steps, so it’s started by dermatology, not by me. But there’s a lot I can start today that works well, and we don’t have to jump straight there.', dom:'tasks', why:'Manages the expectation; explains the isotretinoin route honestly' },

    { phase:'Shared management', clock:'8–11 min', who:'dr', text:'What I’d recommend is a combined treatment: a cream that contains a retinoid plus benzoyl peroxide, together with a course of an antibiotic tablet for about twelve weeks. We deliberately combine them — using an antibiotic on its own can breed resistance, so we don’t do that. How does that sound to you, Sophie?', dom:'tasks', why:'Correct first-line combination; avoids antibiotic monotherapy' },
    { who:'pt', text:'(Sophie) Okay. Will it sting? I’ve had creams that burned.' },
    { who:'dr', text:'It can be drying at first, so we start every other night and build up, with a simple moisturiser — I’ll show you. Give it a good eight to twelve weeks before judging it; skin is slow. And given your irregular periods, the contraceptive pill is another option that can really help acne, if you’d ever want to discuss it.', dom:'tasks', why:'Practical adherence advice; offers COC appropriately' },
    { who:'pt', text:'(Sophie) That’s helpful. I’ll try the creams and tablets first.' },
    { who:'dr', text:'And on how you’ve been feeling — that matters to me. There are some good resources for young people, like Kooth, that you can use any time, and my door’s open if your mood dips further. You’re not making a fuss.', dom:'rto', why:'Addresses the psychosocial impact within the plan' },

    { phase:'Safety-net & close', clock:'11–12 min', who:'dr', text:'I’ll review you at twelve weeks to see how it’s working and decide whether dermatology is the next step — especially to protect against scarring. If your mood ever gets much worse, or you have any thoughts of self-harm, please reach out sooner. Can you tell me the plan back?', dom:'gs', why:'Defined review, scarring/mood safety-net, checks understanding' },
    { who:'pt', text:'(Sophie) Retinoid-and-benzoyl cream plus antibiotic tablets for twelve weeks, build the cream up slowly, and come back in twelve weeks. And I can use Kooth if I’m down.' },
    { who:'dr', text:'Perfect. And honestly, Sophie — you’ve done the hard bit by coming. We’ll get on top of this together.', dom:'rto', why:'Empowering, supportive close' }
  ],

  /* ============================================================
     6. Third-party perimenopause call — Andrew about Helen, 52
     ============================================================ */
  'third-party-meno': [
    { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, you’re through to Dr Okafor. I understand you’re calling about your wife, Helen — tell me what’s prompted the call today.', dom:'rto', why:'Open, non-judgmental start to a difficult third-party call' },
    { who:'pt', text:'(Andrew) She’s completely changed, doctor. Snappy, tearful, not sleeping, and we had a row so bad it frightened our youngest. I think it’s her hormones — the menopause. I want her put on HRT.' },
    { who:'dr', text:'That sounds really hard for the whole family, and I can hear how much you care about her. Before anything else, can I check — does Helen know you’re calling me today?', dom:'gs', why:'Establishes consent at the outset — the central ethical issue' },
    { who:'pt', text:'(Andrew) No. She’d probably be cross. But somebody has to do something.' },

    { phase:'Exploring the concern', clock:'1–4 min', who:'dr', text:'I completely understand the instinct to act. Tell me more about what you’ve noticed and over what sort of timescale.', dom:'rto', why:'Explores the husband’s account and builds the picture' },
    { who:'pt', text:'(Andrew) Six months or so. Hot flushes at night, low mood, no patience. The woman I married has vanished.' },
    { who:'dr', text:'Thank you. And the row that frightened your child — can I ask, was anyone hurt, or did it ever feel frightening for you or the children in terms of safety?', dom:'tasks', why:'Sensitively screens for domestic abuse and child welfare' },
    { who:'pt', text:'(Andrew) No, nothing like that. Just shouting. It shook the little one, that’s all. We’re not… it’s not violent.' },
    { who:'dr', text:'I appreciate you answering that — I have to ask, because part of my job is making sure everyone in the home is safe. It sounds like the main thing is how much you both want to feel like yourselves again.', dom:'rto', why:'Explains the rationale for a sensitive question; reflects' },

    { phase:'The confidentiality boundary', clock:'4–7 min', who:'dr', text:'Now I need to be honest with you about what I can and can’t do, and I’ll explain why. Helen is my patient and an adult who can make her own decisions, so I’m not able to diagnose her, prescribe for her, or share anything about her care without her consent. That’s not me being unhelpful — it’s the duty of confidentiality that protects her, and that would protect you too.', dom:'gs', why:'Applies confidentiality correctly and explains it warmly' },
    { who:'pt', text:'(Andrew) So I’ve wasted my time?' },
    { who:'dr', text:'Not at all — and I’m really glad you rang, because there’s a lot we can do. I can absolutely listen to your concerns, and I can give you general information that isn’t about Helen specifically. What I can’t do is act on her behalf behind her back.', dom:'rto', why:'Reframes the boundary positively; keeps him engaged' },
    { who:'pt', text:'(Andrew) Alright. That’s fair, I suppose.' },

    { phase:'General information & the plan', clock:'7–10 min', who:'dr', text:'Generally speaking: what you’re describing — flushes, mood changes, poor sleep in a woman in her early fifties — is very commonly the perimenopause, and it’s very treatable. In someone over 45 we usually diagnose it from the symptoms without needing a blood test, and HRT is an effective first-line option, with other approaches too. So there’s genuine hope here.', dom:'tasks', why:'Accurate, general clinical knowledge without breaching confidentiality' },
    { who:'pt', text:'(Andrew) That’s reassuring. So how do I get her that?' },
    { who:'dr', text:'The single most useful thing you can do is encourage Helen to book her own appointment — even a telephone one. If she’d find it easier, she’s welcome to bring you in with her, and then we can talk openly together with her consent. Could you have a gentle, supportive conversation with her — not “the doctor says you need HRT”, but “I’ve been worried, I miss us, would you see someone”?', dom:'gs', why:'Gets the patient into the room — the key constructive step' },
    { who:'pt', text:'(Andrew) I can do that. Put like that, she might actually agree.' },
    { who:'dr', text:'I think she might. I’ll also point you to some excellent resources you can share with her or read yourself — the NHS menopause pages, Women’s Health Concern, and the Balance app. They explain the options really clearly.', dom:'rto', why:'Gives information he can share; tangible support' },

    { phase:'Safety-net & close', clock:'10–12 min', who:'dr', text:'One important thing: if you’re ever genuinely worried that Helen might harm herself, that’s different — encourage her to contact us urgently, call 111, or Samaritans on 116 123, and 999 if she’s in immediate danger. Does that all make sense?', dom:'gs', why:'Safety-net for risk despite the confidentiality limits' },
    { who:'pt', text:'(Andrew) It does. Thank you — I came in wanting a prescription and I’m leaving with something more useful.' },
    { who:'dr', text:'You’ve done a caring thing by ringing. Have that gentle conversation, share those resources, and we’ll be glad to see Helen whenever she’s ready — with you alongside her if that helps.', dom:'rto', why:'Supportive, hopeful close that respects autonomy' }
  ],

  /* ============================================================
     7. Persistent cough — Raymond Powell, 56 (video, ?2-week-wait)
     ============================================================ */
  'cough-smoker-2ww': [
    { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Raymond, Dr Patel here — thanks for the video. What’s been going on?', dom:'rto', why:'Open question, relaxed opening' },
    { who:'pt', text:'This cough won’t shift, doc. Three months now. I just need a course of antibiotics to clear it, really.' },
    { who:'dr', text:'I hear you want this dealt with properly — let me ask a few things so we get it right rather than just guessing. Is that okay?', dom:'gs', why:'Sets agenda; gently reframes the antibiotic request' },
    { who:'pt', text:'Yeah, go on.' },

    { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'Tell me about the cough — dry or with phlegm, and has anything come up that worried you, like blood?', dom:'tasks', why:'Open then targeted; screens for haemoptysis' },
    { who:'pt', text:'Bit of phlegm. And… there was a streak of blood once last week. Probably from coughing so hard, though.' },
    { who:'dr', text:'Thank you for telling me — that’s exactly the sort of thing I need to know. Have you lost any weight without trying, or noticed your appetite dropping?', dom:'tasks', why:'Screens systemic red flags (weight loss, appetite)' },
    { who:'pt', text:'Trousers are a bit loose, now you mention it. Half a stone maybe.' },
    { who:'dr', text:'Any change to your voice, breathlessness, or chest pain?' },
    { who:'pt', text:'Voice has been a bit hoarse. I put that down to the cough.' },
    { who:'dr', text:'And smoking — how much, and for how long?', dom:'tasks', why:'Quantifies the key risk factor' },
    { who:'pt', text:'Twenty a day since I was about twenty. I know, I know.' },

    { phase:'Ideas & concerns', clock:'4–6 min', who:'dr', text:'No lecture from me. Can I ask — what’s gone through your own mind about what might be causing this?', dom:'rto', why:'Elicits ideas and concerns' },
    { who:'pt', text:'(quietly) My dad had lung cancer. I’ve been trying not to think about it. That’s probably why I just wanted antibiotics — easier.' },
    { who:'dr', text:'That makes complete sense, and I’m really glad you’ve told me what you’re frightened of — it helps me look after you properly.', dom:'rto', why:'Acknowledges the hidden fear; builds trust' },

    { phase:'Explanation', clock:'6–8 min', who:'dr', text:'I’m going to be straight with you, because you’d want that. A cough lasting this long with a streak of blood, some weight loss and a hoarse voice, in someone who’s smoked — that’s a combination I can’t safely treat as a simple chest infection. Antibiotics wouldn’t be the right or safe answer here.', dom:'tasks', why:'Honest explanation; resists inappropriate antibiotics' },
    { who:'pt', text:'So what happens now?' },
    { who:'dr', text:'I want an urgent chest X-ray, arranged within two weeks under our fast-track pathway, specifically to look for anything serious — including cancer. I’d rather be upfront with you than dress it up.', dom:'tasks', why:'Acts on NG12 — urgent CXR / 2-week-wait pathway' },

    { phase:'Shared management', clock:'8–11 min', who:'dr', text:'Most of these turn out to be something treatable, and if it is something more serious, finding it early is exactly what gives us the best chance. The hoarse voice I also want looked at — if it doesn’t settle, there’s a separate fast-track for that. How are you feeling hearing all this?', dom:'rto', why:'Balances honesty with realistic reassurance; checks emotion' },
    { who:'pt', text:'Scared, if I’m honest. But I’d rather know.' },
    { who:'dr', text:'That’s a brave and sensible way to look at it. While we’re here — and only when you’re ready — I can really help you stop smoking, with medication and support that genuinely works. No pressure today, but the offer’s firmly on the table.', dom:'tasks', why:'Offers evidence-based smoking cessation' },
    { who:'pt', text:'Maybe once I know what I’m dealing with. Ask me again.' },
    { who:'dr', text:'I will. I’ll arrange the X-ray today and book you a follow-up with me to go through the result in person — I won’t leave you waiting alone with it.', dom:'gs', why:'Clear follow-up; continuity for results' },

    { phase:'Safety-net & close', clock:'11–12 min', who:'dr', text:'Safety-net: if you cough up a lot of blood, or become very breathless or develop chest pain, that’s a 999 or A&E situation — don’t sit on it. Otherwise the X-ray within two weeks and then back to me. Can you tell me back what we’ve agreed?', dom:'gs', why:'Emergency safety-net and checks understanding' },
    { who:'pt', text:'Urgent X-ray in two weeks, see you for the result, A&E if I cough up a lot of blood or can’t breathe. And you’ll nag me about the smoking.' },
    { who:'dr', text:'That’s it exactly — and I’ll nag gently. You did the right thing coming today, Raymond.', dom:'rto', why:'Affirming, supportive close' }
  ],

  /* ============================================================
     8. Type 2 diabetes / Ramadan — Imran Shah, 48 (face-to-face)
     ============================================================ */
  'insulin-ramadan': [
    { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Imran, come in. The diabetes nurse asked you to see me about your control — but first, how are things from your point of view?', dom:'rto', why:'Open question; doesn’t lead with the numbers' },
    { who:'pt', text:'Fine, mostly. Though the nurse mentioned my sugars are too high and I might need insulin. I really don’t want that — feels like I’ve failed. And Ramadan’s coming up; I want to fast with my family.' },
    { who:'dr', text:'Thank you for being so open — there’s a lot in there, and both of those things matter. Shall we cover your control, the question of fasting, and how you’re feeling about treatment? I want us to leave with a plan that fits your life.', dom:'gs', why:'Acknowledges agenda items and structures the consultation' },
    { who:'pt', text:'Yes, please.' },

    { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'Tell me about a typical day with your diabetes — your tablets, meals, and whether you ever get hypos.', dom:'tasks', why:'Open review of regimen and hypo risk' },
    { who:'pt', text:'Metformin twice a day and gliclazide twice a day. I drive a taxi, so meals are all over the place. I’ve had a couple of shaky, sweaty moments mid-shift.' },
    { who:'dr', text:'Those shaky episodes sound like hypos — important, especially with driving, and we’ll come to that. Any problems with your eyes, numbness in your feet, or chest symptoms?', dom:'tasks', why:'Brief complications screen' },
    { who:'pt', text:'Eyes were fine at the last screen. Feet okay. No chest trouble.' },
    { who:'dr', text:'And when did you last have your bloods, kidney function and weight checked?' },
    { who:'pt', text:'Bloods recently — that’s what flagged it. Not had a proper review for about a year and a half, though.' },

    { phase:'Ideas, concerns & expectations', clock:'4–6 min', who:'dr', text:'You said insulin feels like failing. Can you tell me more about that — and what worries you most about fasting?', dom:'rto', why:'Explores the ideas/concerns behind the resistance' },
    { who:'pt', text:'My father went onto insulin and went downhill fast. I associate it with the end. And I’m scared a hypo while fasting — or while driving — could be dangerous.' },
    { who:'dr', text:'Those are completely understandable fears, and they’re both things we can address head-on. Let me reassure you on insulin first, then we’ll make fasting as safe as possible.', dom:'rto', why:'Validates fears and signposts how they’ll be addressed' },

    { phase:'Explanation', clock:'6–8 min', who:'dr', text:'Your latest HbA1c is 84, where we’d ideally be nearer 53 — so we do need to do more, you’re right. But insulin is not the only next step, and it’s certainly not a sign of failure; diabetes is a progressive condition, not a personal failing.', dom:'tasks', why:'Reviews the result honestly; reframes insulin' },
    { who:'pt', text:'So there are other options?' },
    { who:'dr', text:'There are, and they’re actually better suited to you. There’s a group of newer medicines — one type as a tablet, one as a weekly injection — that lower sugars, protect the heart and kidneys, and often help with weight, with a low risk of hypos. For you, those would be my preference over reflexly starting insulin.', dom:'tasks', why:'Offers organ-protective SGLT2/GLP-1 before insulin' },

    { phase:'Shared management & fasting', clock:'8–11 min', who:'dr', text:'On Ramadan — fasting with diabetes can be done safely with planning, and faith permits breaking the fast if your health is at risk, so you’re not being asked to choose. The riskiest tablet you’re on for fasting is the gliclazide, because it can cause hypos. I’d suggest we reduce or change that, add one of the newer agents, and do a proper pre-Ramadan review. How does that sit with you?', dom:'tasks', why:'Tailors a safe Ramadan plan; addresses hypo risk' },
    { who:'pt', text:'That sounds much better than what I was dreading.' },
    { who:'dr', text:'I’d also strongly recommend a short structured education session on fasting safely — when to test, what numbers mean you must break the fast, and sick-day rules. And we’ll get your eye and foot checks back up to date.', dom:'gs', why:'Comprehensive, organised plan; closes the review gaps' },
    { who:'pt', text:'I’d find that genuinely useful.' },
    { who:'dr', text:'One duty I must mention because you drive for a living: on these medicines, the DVLA rules matter — check your glucose before driving and every two hours, keep fast-acting sugar in the cab, and never drive if you’re below 5. If we ever did use insulin, you’d need to notify the DVLA. Is that clear?', dom:'tasks', why:'Addresses DVLA / occupational duties — medico-legal' },
    { who:'pt', text:'Yes — I didn’t realise about the two-hourly checks. That’s important.' },

    { phase:'Safety-net & close', clock:'11–12 min', who:'dr', text:'Safety-net: if you have a severe hypo you can’t treat yourself, repeated vomiting, or you feel very unwell while fasting, break the fast and seek help — 999 if you can’t correct a hypo. Let’s book the pre-Ramadan review and the education session. Could you tell me the plan back so I know it’s clear?', dom:'gs', why:'Explicit safety-net and checks understanding' },
    { who:'pt', text:'Add a newer medicine, cut down the gliclazide, pre-Ramadan review and an education session, test before and during driving, and break the fast if I’m unwell. And insulin isn’t my only option.' },
    { who:'dr', text:'Exactly — and you’ve clearly taken on board that this isn’t failure. We’ll do this together.', dom:'rto', why:'Confirms understanding and reinforces the reframe' }
  ],

  /* ============================================================
     9. Abnormal LFTs / alcohol — Charles Bennett, 42 (results review)
     ============================================================ */
  'lft-alcohol': [
    { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Charles, thanks for coming in to go through your blood results. Before I do — how have you been feeling in yourself lately?', dom:'rto', why:'Opens with the person, not the printout' },
    { who:'pt', text:'Tired, mostly. That’s why I came in for the bloods. Work’s been brutal — I got passed over for partnership. What did they show?' },
    { who:'dr', text:'I’ll go through them properly with you. Can I first ask a bit about how things are day to day, so the results make sense in context?', dom:'gs', why:'Sets up the consultation; gathers context first' },
    { who:'pt', text:'Sure.' },

    { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'How have you been sleeping and eating, and how are you unwinding with all the work stress?', dom:'rto', why:'Open exploration of lifestyle and coping' },
    { who:'pt', text:'Sleep’s rubbish. I’ll be honest — I’ve been having a few more drinks in the evening to switch off. Helps me wind down.' },
    { who:'dr', text:'Thank you for being honest — that’s really helpful, not something to feel judged about. Can we put a number on it? On a typical week, what are you drinking?', dom:'tasks', why:'Quantifies alcohol non-judgmentally' },
    { who:'pt', text:'Most nights a few glasses of wine, more at weekends. Maybe a bottle a night recently, if I’m honest.' },
    { who:'dr', text:'That’s useful to know. Have you ever felt you should cut down, or felt annoyed when people comment? And do you ever need a drink in the morning to steady yourself?', dom:'tasks', why:'Screens dependence (CAGE-style) including morning drinking' },
    { who:'pt', text:'I’ve thought about cutting down. Not morning drinking — though last week I tried a few days off and felt jittery and sweaty.' },
    { who:'dr', text:'That jittery, sweaty feeling when you stopped is really important, and I’ll explain why shortly.', dom:'tasks', why:'Flags withdrawal — central to safe management' },

    { phase:'Ideas & concerns', clock:'4–6 min', who:'dr', text:'Before I show you the numbers — what had you wondered the tiredness might be due to?', dom:'rto', why:'Elicits ideas and concerns' },
    { who:'pt', text:'I assumed stress, or being run down. Are you going to tell me I’ve damaged my liver?' },
    { who:'dr', text:'Let’s look together, honestly, and then make a plan — and I want to be clear this is fixable, not a telling-off.', dom:'rto', why:'Sets a non-judgmental, hopeful frame' },

    { phase:'Explanation', clock:'6–8 min', who:'dr', text:'Your liver tests are abnormal in a pattern that, with what you’ve told me, points to alcohol as the main driver — and the higher reading on one of the markers fits with that too. The encouraging part: the liver has a real capacity to recover if we act now.', dom:'tasks', why:'Interprets the LFT pattern and explains it plainly' },
    { who:'pt', text:'So it’s reversible?' },
    { who:'dr', text:'At this stage, very likely yes. But here’s the crucial safety point: because your body has got used to that amount, stopping suddenly and completely on your own can actually be dangerous — it can cause fits. So we reduce in a planned, supported way rather than going cold turkey.', dom:'tasks', why:'Recognises withdrawal risk; does not advise abrupt cessation' },

    { phase:'Shared management', clock:'8–11 min', who:'dr', text:'Here’s what I’d suggest. First, some further blood tests — to check for other causes and to assess any scarring on the liver. Second, support to cut down safely: I can refer you to our local alcohol service, and there’s Drinkline you can call anytime. For some people a medication helps maintain that, started with specialist input. What feels realistic for you?', dom:'tasks', why:'Investigations + structured, evidence-based support' },
    { who:'pt', text:'I think I need the help, actually. I’d been telling myself it was just stress.' },
    { who:'dr', text:'That’s a big and honest step, and it’s the one that changes the outcome. We can also look at the sleep and the work stress directly — because that’s the engine behind the drinking, and treating one without the other rarely sticks.', dom:'rto', why:'Uses the psychosocial context within the plan' },
    { who:'pt', text:'I’d appreciate that. The partnership thing knocked me sideways.' },
    { who:'dr', text:'I can hear it did. We’ll tackle this as a whole, not just the liver numbers — you’re a person under pressure, not a set of results.', dom:'gs', why:'Holistic, patient-centred framing' },

    { phase:'Safety-net & close', clock:'11–12 min', who:'dr', text:'One safety point to hold onto: if you cut down too fast and get shaking, sweating, confusion, or any seizure, that’s an emergency — 999. That’s exactly why we do this with support. Let’s arrange the repeat bloods and the alcohol service referral, and see you in two weeks. Can you tell me the plan back?', dom:'gs', why:'Explicit withdrawal safety-net and checks understanding' },
    { who:'pt', text:'Reduce gradually with support — not stop dead — repeat bloods, alcohol service, look at the sleep and stress, and 999 if I get shakes or confusion. Back in two weeks.' },
    { who:'dr', text:'That’s exactly it, Charles. Coming in and being this honest is the hardest part, and you’ve done it.', dom:'rto', why:'Affirming, motivating close' }
  ],

  /* ============================================================
     10. Paediatric sleep — Aaron Patel, 4 (video, mother Naomi)
     ============================================================ */
  'sleep-paeds': [
    { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Naomi, thanks for the video call. I can see Aaron’s busy in the background — tell me what’s been happening with his sleep.', dom:'rto', why:'Warm opening; open question to the parent' },
    { who:'pt', text:'(Naomi) He wakes four or five times a night, every night. I’m on my knees, doctor. I just need something to help him sleep — this is the worst it’s ever been.' },
    { who:'dr', text:'That sounds utterly exhausting, and you’ve clearly been coping with a huge amount. Let me understand his sleep, check he’s otherwise well, and then we’ll sort out a plan together — including support for you. Okay?', dom:'gs', why:'Validates the parent, sets a structured agenda' },
    { who:'pt', text:'(Naomi) Thank you. Yes.' },

    { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'Talk me through a typical bedtime — the routine, where he falls asleep, and what happens when he wakes.', dom:'tasks', why:'Open then targeted; maps the sleep associations' },
    { who:'pt', text:'(Naomi) I lie with him until he drops off, usually with the telly on. When he wakes he calls for me and I lie with him again or he ends up in our bed.' },
    { who:'dr', text:'That’s really helpful. Does he snore heavily, ever seem to stop breathing, or is he excessively sleepy in the day?', dom:'tasks', why:'Screens for organic causes (OSA red flags)' },
    { who:'pt', text:'(Naomi) No snoring, no. In the day he’s a livewire — full of energy, eating well, growing fine.' },
    { who:'dr', text:'And at nursery — any concerns about his development, behaviour or settling there?' },
    { who:'pt', text:'(Naomi) None at all. They say he’s sociable and bright. It’s just the nights.' },

    { phase:'The real patient — parental wellbeing', clock:'4–6 min', who:'dr', text:'Can I ask how you are in yourself, Naomi? Months of broken sleep takes a real toll.', dom:'rto', why:'Opens the door to maternal wellbeing — the hidden agenda' },
    { who:'pt', text:'(Naomi, tearful) Honestly… I’m not coping. I’m tearful all the time, snapping at everyone. Some days I wonder what the point is.' },
    { who:'dr', text:'Thank you for trusting me with that — it took courage, and it matters as much to me as Aaron’s sleep. When you say you wonder what the point is, have you had any thoughts of harming yourself or that life isn’t worth living?', dom:'tasks', why:'Sensitive, direct maternal mood and risk assessment' },
    { who:'pt', text:'(Naomi) Not of hurting myself, no. I just feel hopeless and so tired.' },
    { who:'dr', text:'I’m really glad you’re safe, and I want to make sure you get support in your own right, not just Aaron.', dom:'rto', why:'Recognises the mother as a patient too' },

    { phase:'Explanation', clock:'6–8 min', who:'dr', text:'Here’s the reassuring part about Aaron: a thriving, sociable little boy with no daytime sleepiness and no snoring almost always has a behavioural sleep pattern, not a medical sleep disorder. What’s happening is he’s learned to fall asleep with you and the telly there, so when he naturally stirs in the night, he needs those same conditions back to resettle.', dom:'tasks', why:'Reaches a working analysis and explains it clearly' },
    { who:'pt', text:'(Naomi) So there’s nothing physically wrong with him?' },
    { who:'dr', text:'Nothing I can find that points that way — which is genuinely good news. And it means the fix is about gently changing those sleep associations, which really does work.', dom:'rto', why:'Addresses the parent’s underlying fear directly' },

    { phase:'Shared management', clock:'8–11 min', who:'dr', text:'On medication — I know you hoped for something to help him sleep, and I understand why. But sleep medicines like melatonin aren’t recommended for an otherwise well young child like Aaron; they’re reserved for specific specialist situations, and they don’t fix the pattern. The behavioural approach is what actually changes things.', dom:'tasks', why:'Manages the medication expectation; melatonin not routine' },
    { who:'pt', text:'(Naomi) Okay. So what do I actually do?' },
    { who:'dr', text:'A consistent wind-down routine, then putting him down sleepy but awake without the telly, and when he wakes, gradually reducing how much you do — sometimes called gradual retreat. I’ll send you the details, and the Health Visitor and The Sleep Charity are brilliant practical support. But none of that works if you’re running on empty — so I want to look after you too.', dom:'tasks', why:'Concrete behavioural plan plus mobilising support' },
    { who:'pt', text:'(Naomi) I’d really like that.' },
    { who:'dr', text:'I’d like to book you your own appointment this week to talk properly about your mood — there’s effective help, whether that’s talking therapy or other support, and you don’t have to white-knuckle through this.', dom:'gs', why:'Arranges follow-up for the mother in her own right' },

    { phase:'Safety-net & close', clock:'11–12 min', who:'dr', text:'Please hold onto this: if your mood dips further, or you ever have thoughts of harming yourself or Aaron, contact us urgently, call 111, or Samaritans on 116 123 — and 999 in an emergency. For Aaron, if he ever does start snoring badly or seems unwell, let me know. Can you tell me back what we’ve agreed?', dom:'gs', why:'Safety-net for both child and mother; checks understanding' },
    { who:'pt', text:'(Naomi) Bedtime routine and gradual retreat for Aaron, contact the Health Visitor and Sleep Charity, and my own appointment this week for my mood — with numbers to call if I feel worse.' },
    { who:'dr', text:'Perfect. You came worried about Aaron and you’ve let me help you too — that was the bravest and most important part of today.', dom:'rto', why:'Empowering, compassionate close' }
  ]

};
