/* ============================================================
   Reasoning GP — Case Library batch 19: "The struggling teenager"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Ethics under warmth: Fraser/Gillick, confidentiality vs safeguarding,
   medical risk in eating disorders, EIP urgency, third-party calls.
   No NG12 cancer link applies to these presentations (correctly omitted).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases18.js.
   ============================================================ */

(function(){

  /* ============ 69. VIDEO — Low mood & self-harm in a 15-year-old ============ */
  const c69 = {
    id:'teen-selfharm', title:'"I\u2019m fine, my mum\u2019s just overreacting"', type:'video', duration:12,
    meta:{ age:15, sex:'F', setting:'Video consultation — teenager seen alone after mother\u2019s concern.', system:'Adolescent MH / Self-harm & risk' },
    brief:'Maya, 15, brought in by her mother who is worried she\u2019s "withdrawn and not eating with us". Mother asked to wait outside; Maya is seen alone (good practice). Guarded, monosyllabic at first, long sleeves on a warm day. School performance dropped. If trust builds: cutting her forearms for months, low mood, poor sleep, and fleeting thoughts that "everyone would be better off without me". No current plan/intent volunteered initially. Phone use late at night.',
    script:{
      opening:'(Arms folded, sleeves pulled down.) "Look, I don\u2019t even know why I\u2019m here. My mum\u2019s just being dramatic because I\u2019ve been in my room a lot. I\u2019m FINE. Can you just tell her I\u2019m fine so she gets off my back? I really don\u2019t want to talk about feelings or whatever this is supposed to be."',
      facts:[
        { topic:'The disclosure (if trusted)', text:'If confidentiality is explained and trust built: she has been cutting her forearms for ~4 months (the long sleeves), feels persistently low and empty, isn\u2019t sleeping, has stopped seeing friends, grades have dropped. The self-harm "is the only thing that helps when it builds up."' },
        { topic:'The risk (must be asked)', text:'On sensitive direct asking: passive thoughts that "everyone would be better off without me" and occasional "what\u2019s the point" \u2014 but, if explored carefully, no current active plan, intent or means, and some protective factors (a younger sister she loves, a best friend, likes art). Risk must be ASKED about explicitly, not assumed absent.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the guardedness is fear of two things: (1) that everything will be told to her parents, and (2) the actual trigger she hasn\u2019t named \u2014 she is being bullied online and is questioning her sexuality, terrified of both being "outed" to her family and of their reaction. The "tell my mum I\u2019m fine" is a test of whether she can trust you with confidentiality.' },
        { topic:'The confidentiality crux', text:'She will only open up if confidentiality is explained honestly at the start \u2014 including its limits (that if she were at serious risk you might need to involve others, done WITH her wherever possible). Getting this framing right is the hinge of the whole consultation.' },
        { topic:'What she wants',       text:'Officially: to be signed off as fine. Actually: to be heard without it all being reported home, to have the self-harm understood not punished, and \u2014 if she feels safe \u2014 to finally tell someone about the bullying and the fear about her sexuality.' },
      ],
      ice:{
        ideas:'There\u2019s nothing wrong; her mum is overreacting to her wanting space.',
        concerns:'HIDDEN AGENDA \u2014 terror that everything will be told to her parents, and an unnamed trigger (online bullying + questioning her sexuality, fear of being outed); the self-harm is her coping mechanism, not an attention bid.',
        expectations:'To be told she\u2019s fine so her mum backs off. What she actually needs: a confidential, non-judgemental space, an explicit risk assessment, and support that she controls as much as possible.'
      },
      cues:['"Tell my mum I\u2019m fine" \u2014 a test of whether confidentiality is real before she\u2019ll disclose anything.','Long sleeves on a warm day, withdrawn, grades dropped \u2014 the self-harm and low mood she\u2019s hiding.','Flat affect / a flicker when friends or "stuff at school" is mentioned \u2014 the bullying and sexuality trigger waiting for a safe door.']
    },
    checkpoints:[
      { dom:'tasks', text:'Establishes CONFIDENTIALITY explicitly and early, including its limits in age-appropriate language ("what you tell me stays between us, unless I\u2019m seriously worried about your safety \u2014 and even then I\u2019d try to do it WITH you") \u2014 the prerequisite for any disclosure' },
      { dom:'tasks', text:'Conducts a proper RISK ASSESSMENT sensitively and explicitly: asks directly about self-harm, frequency/method, and suicidal thoughts, plan, intent and means \u2014 and about protective factors \u2014 rather than assuming or avoiding the question' },
      { dom:'tasks', text:'Assesses FRASER/GILLICK competence and the wider HEEADSSS-type psychosocial picture (home, education, eating, activities, drugs, sexuality, safety/abuse, online) \u2014 surfacing the bullying and sexuality trigger through a safe, non-judgemental approach' },
      { dom:'tasks', text:'Responds to the self-harm without shaming: explores its function (emotional regulation), does not react with alarm or punishment, and frames help around understanding and safer coping rather than simply "stopping it"' },
      { dom:'tasks', text:'Makes a safe, proportionate management plan: safety-planning, appropriate CAMHS/early-help referral, school/online-bullying support, sources of help (e.g. crisis lines), follow-up; and judges the safeguarding/parental-involvement question by RISK and competence, negotiating disclosure WITH her wherever safe' },
      { dom:'rto',   text:'Builds rapport with a guarded adolescent: unhurried, non-judgemental, takes her seriously, sees her alone, and does NOT collude with "just tell my mum I\u2019m fine" nor breach trust unnecessarily' },
      { dom:'rto',   text:'Handles the sexuality/bullying disclosure with warmth and zero editorialising; respects her autonomy over who knows what, while being honest about any genuine safety limits' },
      { dom:'gs',    text:'Safety-nets robustly and documents: crisis routes if thoughts worsen or a plan emerges (urgent help/111/A&E), a clear follow-up appointment, what would change the confidentiality position, and coordinated support \u2014 balancing autonomy with safety' },
    ],
    worked:[
      { lbl:'Set up confidentiality', txt:'"Before anything \u2014 the most important thing for you to know is how this works. What you tell me is private; I\u2019m not going to march out and report it all to your mum. The only time I\u2019d ever need to share something is if I was seriously worried you weren\u2019t safe, and even then I\u2019d talk to you first and we\u2019d work out together what happens. So this room is yours. Does that change anything about what you\u2019d feel okay telling me?"' },
      { lbl:'Earn the door',         txt:'"I\u2019m not going to make you talk about feelings if you don\u2019t want to. But I\u2019ll be honest \u2014 mums don\u2019t usually worry this much over nothing, and you\u2019ve got your sleeves down on a warm day. I\u2019m not here to tell you off about anything. If something\u2019s been building up, I\u2019d really like to understand it, at your pace."' },
      { lbl:'Ask the hard question', txt:'"Can I ask you something directly, because I ask everyone and it matters? When things feel that heavy \u2014 have you ever hurt yourself on purpose? \u2026 Thank you for trusting me with that. And sometimes when people feel this low, thoughts come that they\u2019d be better off not here, or that others would be better off without them. Have you had thoughts like that? \u2026 Have you ever thought about how, or made any plans?"' },
      { lbl:'Understand, don\u2019t punish', txt:'"The cutting \u2014 I\u2019m not shocked and I\u2019m not cross. For a lot of people it\u2019s the thing that lets the pressure out when everything\u2019s too much. That makes complete sense. My job isn\u2019t to snatch that away and leave you with nothing; it\u2019s to help with what\u2019s underneath, so you don\u2019t need it as much."' },
      { lbl:'Open the real door',  txt:'"Can I gently ask what\u2019s been building the pressure? School, home, friends, online? \u2026 (receiving it) The messages, and feeling scared about who you might be \u2014 that is so much to carry on your own, and none of it is anything to be ashamed of. Thank you for telling me. Who knows about this is completely your call, and I\u2019ll follow your lead."' },
      { lbl:'Safe plan + autonomy', txt:'"Here\u2019s what I\u2019d suggest, and you\u2019re part of every bit of it: some proper support from a young people\u2019s mental health team, help to deal with the bullying, and a plan for the moments it feels unbearable \u2014 someone to text or call. I do think your mum loving you and knowing you\u2019re struggling could help, but we decide together what she\u2019s told and how. If those darker thoughts ever turn into a plan, this is who you contact, day or night. And I want to see you again soon \u2014 you\u2019re not dealing with this alone now."' },
    ],
    learning:'A guarded "tell my mum I\u2019m fine" teenager seen alone is a confidentiality-and-risk consultation. The hinge is establishing confidentiality and its limits explicitly and early, in age-appropriate language \u2014 only then will disclosure follow. Conduct an explicit, sensitive risk assessment (ask directly about self-harm method/frequency and about suicidal thoughts, plan, intent, means, and protective factors \u2014 asking does not plant ideas), assess Fraser/Gillick competence, and screen the psychosocial picture (HEEADSSS) to surface the real triggers \u2014 here online bullying and questioning her sexuality, with terror of being outed. Respond to self-harm by exploring its function (emotion regulation) without shame or alarm, not by simply demanding it stop. Make a proportionate plan (safety-planning, CAMHS/early help, school/bullying support, crisis routes, follow-up), and judge parental involvement by risk and competence \u2014 negotiating any disclosure WITH her wherever safe. The marks are won by ethics held under genuine warmth.',
    knowledge:{
      guideline:'NICE NG225 self-harm · GMC 0\u201318 confidentiality · Fraser/Gillick competence · NICE depression in CYP · safeguarding',
      points:[
        { h:'Confidentiality first \u2014 with limits', t:'Offer confidentiality and explain its limits at the outset (information shared only if there is serious risk to the young person or others, ideally with their agreement and involvement). This is the precondition for honest disclosure. See the young person alone for part of the consultation.' },
        { h:'Explicit risk assessment', t:'Ask directly and unapologetically about self-harm (method, frequency, escalation) and suicidality (thoughts, plan, intent, means, preparatory acts), plus protective factors. Asking does NOT increase risk. Distinguish self-harm as emotion-regulation from suicidal intent, while recognising self-harm raises future suicide risk.' },
        { h:'Competence & psychosocial screen', t:'Assess Gillick competence/Fraser principles for decisions and confidentiality. Use a HEEADSSS-type framework (Home, Education/employment, Eating, Activities, Drugs/alcohol, Sexuality, Suicide/self-harm/mood, Safety/abuse, plus online life) to surface triggers \u2014 bullying, abuse, identity, exploitation.' },
        { h:'Respond to self-harm without shame', t:'Explore its function and triggers; avoid alarm, judgement or punitive "just stop" responses (which increase concealment). Co-produce safer coping strategies and a safety plan; treat underlying low mood/depression appropriately (CYP depression pathway, psychological therapies first-line).' },
        { h:'Safeguarding & parental involvement', t:'Judge disclosure to parents/others by risk and competence, not reflexively. A competent young person\u2019s confidentiality is respected unless serious risk requires action \u2014 then involve them in how it\u2019s done. Online bullying/exploitation and identity-based abuse are safeguarding considerations; act proportionately.' },
        { h:'Manage & refer', t:'Safety-plan; refer to CAMHS/early help per risk; engage school and anti-bullying support; signpost youth crisis lines and self-help; arrange clear follow-up. Escalate urgently (crisis team/A&E) if active plan/intent or escalating risk.' },
        { h:'Never do', t:'Never collude with "tell my mum I\u2019m fine" without assessment; never skip explicit suicide-risk questioning; never shame or punish self-harm; never breach a competent teenager\u2019s confidentiality without a risk justification and, where possible, their involvement; never editorialise about sexuality.' },
        { h:'Safety-net & follow-up', t:'Crisis routes (111/urgent CAMHS/A&E) if thoughts worsen or a plan emerges; safety plan; CAMHS/early-help and school/bullying support; defined follow-up; documented confidentiality discussion and risk assessment.' }
      ]
    }
  };

  /* ============ 70. VIDEO — Eating disorder behind "tired and dizzy" ============ */
  const c70 = {
    id:'teen-eating-disorder', title:'"I keep feeling faint, I think I\u2019m just run down"', type:'video', duration:12,
    meta:{ age:16, sex:'F', setting:'Video consultation — teenager presenting with dizziness/fatigue.', system:'Adolescent MH / Eating disorder & medical risk' },
    brief:'Ivy, 16, A-level student, attends about feeling dizzy on standing, tired, cold, and "fainting a bit" at school. On video she looks thin, pale, in baggy layers. If explored: marked food restriction, calorie counting, hours of daily exercise, intense fear of weight gain, distorted body image; recent rapid weight loss; periods stopped 4 months ago. She frames it all as "being healthy" and "stress". High-achieving, perfectionist. Minimises throughout.',
    script:{
      opening:'"Thanks for seeing me. It\u2019s honestly probably nothing \u2014 I\u2019ve just been getting really dizzy when I stand up, and a bit faint at school, and I\u2019m tired all the time. I think I\u2019m just run down with exams and maybe a bit anaemic? Could I just get some iron tablets or a blood test? I\u2019ve actually been really good with eating healthily and exercising, so I don\u2019t get why I feel so rubbish."',
      facts:[
        { topic:'The medical picture',  text:'If assessed: dizziness/syncope on standing (postural drop), cold intolerance, fatigue, amenorrhoea 4 months, rapid significant weight loss, low BMI. On examination/observation markers of risk: bradycardia, postural hypotension, cold peripheries, possibly lanugo. These are MEDICAL instability markers \u2014 an eating disorder can be physically dangerous, not just psychological.' },
        { topic:'The eating-disorder core', text:'If gently explored: severe dietary restriction, calorie/macros obsession, compulsive exercise (hours daily, distress if prevented), intense fear of weight gain, body-image distortion (feels "huge" despite being underweight). She reframes all of it as "clean eating" and discipline. Likely anorexia nervosa.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 she did NOT come to talk about eating; she came for a fix for the dizziness (iron/bloods) precisely so she can keep functioning and keep restricting. Underneath is terror of losing control and of being "made to gain weight", plus the eating disorder serving as control amid overwhelming academic and family perfectionism pressure. She will minimise hard and may become defensive if confronted bluntly.' },
        { topic:'The control & pressure', text:'If reached: huge pressure to achieve (parental expectations, top set), the restriction is the one thing she feels in control of; deep shame; possibly low mood. The "I\u2019m just being healthy" is both genuine distortion and a shield.' },
        { topic:'What she wants',       text:'Officially: iron tablets / a blood test to fix the dizziness. What she needs: recognition of an eating disorder with potentially dangerous medical instability, a non-judgemental opening of the subject, assessment of medical risk (MEED), and urgent appropriate referral \u2014 engaged gently so she doesn\u2019t flee.' },
      ],
      ice:{
        ideas:'She\u2019s just run down / anaemic from exams and needs iron or a blood test; her eating is "healthy".',
        concerns:'HIDDEN AGENDA \u2014 terror of losing control and of being "made to gain weight"; the restriction is her coping/control amid perfectionist pressure; she wants the dizziness fixed so she can keep going, not the eating addressed.',
        expectations:'Iron tablets or a blood test. What she actually needs: recognition of an eating disorder and its medical danger, a gentle opening of the subject, medical-risk assessment, and urgent referral.'
      },
      cues:['"I\u2019ve been really good with eating healthily and exercising" + faint/dizzy + thin in layers \u2014 the eating disorder reframed as discipline.','Dizziness on standing, cold, periods stopped, rapid weight loss \u2014 medical instability, not simple anaemia.','Defensiveness or a flicker if eating/weight is mentioned \u2014 the fear of losing control; approach gently, not bluntly.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises the picture as a probable EATING DISORDER (restriction, compulsive exercise, fear of weight gain, body-image distortion, amenorrhoea, rapid weight loss) rather than accepting "run down/anaemic" and simply ordering iron \u2014 and does not collude with the "healthy eating" framing' },
      { dom:'tasks', text:'Assesses MEDICAL RISK/instability (MEED thinking): postural pulse and BP (postural drop, bradycardia), BMI and rate of weight loss, hydration, ability to rise (sit-up\u2013squat\u2013stand), temperature \u2014 and recognises these can indicate a medical emergency, not just a mental-health issue' },
      { dom:'tasks', text:'Opens the eating subject GENTLY and non-judgementally (e.g. "lots of people under big pressure find their relationship with food changes \u2014 can I ask how you\u2019ve been feeling about eating and your body?") so she does not become defensive and disengage' },
      { dom:'tasks', text:'Arranges appropriate investigation and URGENT referral: bloods including U&E/phosphate/glucose/FBC and ECG (electrolyte and cardiac risk; refeeding awareness), and urgent referral to a community eating-disorder service (CEDS) per MEED \u2014 with same-day/emergency escalation if medically unstable' },
      { dom:'tasks', text:'Explores the psychological and contextual drivers (perfectionism, academic/family pressure, control, low mood, shame) and screens mood/self-harm risk, without making the first consultation a confrontation' },
      { dom:'rto',   text:'Builds trust with a minimising, frightened young person: validates the distress under the control, avoids weight/food battles or alarm that would push her away, and conveys care rather than judgement' },
      { dom:'rto',   text:'Handles confidentiality and family involvement appropriately for her age and risk \u2014 explaining that her safety means some sharing, done with her, while respecting her as far as possible' },
      { dom:'gs',    text:'Safety-nets and coordinates: explains why this is being taken seriously medically, arranges urgent CEDS referral and monitoring, gives red flags (collapse, chest pain, palpitations \u2192 urgent), involves family/school appropriately, and books close follow-up' },
    ],
    worked:[
      { lbl:'Take the symptom seriously', txt:'"I\u2019m really glad you came about the dizziness, because it IS your body telling us something important \u2014 and I want to take it properly seriously rather than just hand you iron tablets. Let me check a few things, like your pulse and blood pressure lying and standing, because those tell me a lot about what\u2019s going on."' },
      { lbl:'Name the risk gently', txt:'"Here\u2019s what I\u2019m seeing: your heart\u2019s running slow, your blood pressure drops when you stand, you\u2019re cold, and your periods have stopped. Together those tell me your body isn\u2019t getting enough fuel, and that can become genuinely dangerous \u2014 not in a telling-off way, in a \u2018your body is struggling and I want to protect you\u2019 way."' },
      { lbl:'Open the door, softly',  txt:'"Can I ask you something gently? A lot of people \u2014 especially bright, driven people under huge pressure \u2014 find that eating and exercise become one of the few things they can control, and it can tip into restricting more than the body can cope with. Does any of that feel familiar? There\u2019s zero judgement here."' },
      { lbl:'Validate the control', txt:'"If I\u2019ve understood right, with all the exam and achievement pressure, controlling food and exercise is the one area that feels like yours. That makes complete sense, and it\u2019s not vanity or attention \u2014 it\u2019s a way of coping with something overwhelming. The problem is it\u2019s started to put your body in real danger, and that\u2019s what we have to look after."' },
      { lbl:'Why urgent, honestly', txt:'"So I\u2019m not going to just do a blood test and send you off. I do want bloods and a heart tracing today, because the salts in your blood and your heart need checking. And I want to refer you urgently to a team who specialise in exactly this \u2014 not because you\u2019re in trouble, but because you deserve proper support and because your body needs it. This is treatable, and people do recover."' },
      { lbl:'Family + safety-net',  txt:'"Because you\u2019re 16 and because your safety matters, the people who care about you will need to be part of this \u2014 but we\u2019ll talk about how that\u2019s done together, and I\u2019ll keep you involved. If you feel faint and actually pass out, get chest pain or your heart racing, that\u2019s urgent help straight away. I\u2019m going to see you again very soon. You came in feeling rubbish and hoping for a quick fix \u2014 what you\u2019re getting is people who are going to help you properly."' },
    ],
    learning:'Dizziness, faints, fatigue, cold intolerance and amenorrhoea in a thin, high-achieving teenager presenting for "iron tablets" is an eating disorder until proven otherwise \u2014 and the dizziness is the door, not the diagnosis. The critical clinical task is recognising that eating disorders carry potentially dangerous MEDICAL instability: assess postural pulse/BP (bradycardia, postural drop), BMI and rate of loss, ability to rise, temperature (MEED risk framework), and arrange bloods (U&E, phosphate, glucose, FBC) and an ECG with refeeding awareness, escalating urgently if unstable. The examinable hidden agenda is that she came to fix the dizziness so she can keep restricting; underneath is terror of losing control and being "made to gain weight", with the disorder serving as control amid perfectionist pressure. Open the subject gently (never bluntly or with food/weight battles), validate the distress and control without colluding with "healthy eating", refer urgently to the community eating-disorder service, handle family involvement by age and risk, and safety-net. Confrontation makes her flee; warmth with honesty keeps her.',
    knowledge:{
      guideline:'NICE NG69 eating disorders · RCPsych MEED (Medical Emergencies in Eating Disorders) · NICE refeeding · GMC 0\u201318',
      points:[
        { h:'Eating disorders are medically dangerous', t:'Anorexia nervosa has the highest mortality of any psychiatric disorder, from medical complications and suicide. A presentation of dizziness/syncope, fatigue, cold intolerance and amenorrhoea in an underweight young person should trigger eating-disorder assessment, not a reflex iron prescription.' },
        { h:'Assess medical risk (MEED)', t:'Use MEED risk parameters: very low/low BMI, rapid weight loss, bradycardia, postural drop in BP/rise in pulse, hypothermia, inability to rise from squatting without using arms (sit-up\u2013squat\u2013stand), and bloods (low potassium/phosphate/glucose, deranged U&E). High-risk features = medical emergency requiring urgent/possibly inpatient care.' },
        { h:'Investigate appropriately', t:'FBC, U&E, phosphate, magnesium, calcium, glucose, LFTs, and ECG (bradycardia, prolonged QTc, arrhythmia risk). Be alert to refeeding syndrome risk when nutrition is reintroduced. Don\u2019t falsely reassure on "normal" early bloods \u2014 cardiovascular instability can precede biochemical change.' },
        { h:'Open the subject without confrontation', t:'Minimisation and "healthy eating" reframing are core features. Approach gently and non-judgementally; explore the relationship with food, exercise, body image and control. Blunt confrontation or food/weight arguments increase defensiveness and disengagement.' },
        { h:'Refer urgently', t:'Refer to a community eating-disorder service (CEDS) urgently; escalate to emergency/medical admission if medically unstable per MEED. Early treatment improves prognosis. Family-based treatment is first-line for many adolescents.' },
        { h:'Context, mood & confidentiality', t:'Explore perfectionism, academic/family pressure, control, low mood, self-harm and shame. For a 16-year-old, balance confidentiality with safety: serious medical/psychiatric risk justifies appropriate family involvement, done with the young person where possible.' },
        { h:'Never do', t:'Never accept "run down/anaemic" and just give iron; never miss medical instability; never collude with the "clean eating" narrative; never confront bluntly and lose engagement; never delay urgent referral when risk features are present.' },
        { h:'Safety-net & follow-up', t:'Bloods + ECG; urgent CEDS referral; emergency escalation if unstable; red flags (collapse, chest pain, palpitations) \u2192 urgent care; appropriate family/school involvement; close follow-up and monitoring.' }
      ]
    }
  };

  /* ============ 71. TELEPHONE — First-episode psychosis ============ */
  const c71 = {
    id:'teen-first-psychosis', title:'"They\u2019re watching him through the telly, he says"', type:'telephone', duration:12,
    meta:{ age:17, sex:'M', setting:'Telephone — mother describing her son\u2019s frightening change.', system:'Adolescent MH / First-episode psychosis' },
    brief:'Caller: mother of Daniel, 17, over recent weeks increasingly withdrawn, not sleeping, talking about being "watched" and hearing voices; stopped college; convinced the TV is "sending him messages". Today he barricaded his door. He is in the house but won\u2019t come to the phone. Heavy cannabis use over the last year. No violence; not currently expressing intent to harm self/others, but mother frightened and exhausted. No prior MH contact.',
    script:{
      opening:'(Mother, frightened, lowered voice.) "Doctor, I don\u2019t know what\u2019s happening to my son. Over the last few weeks he\u2019s changed completely \u2014 he won\u2019t sleep, he\u2019s stopped going to college, and now he\u2019s saying people are watching him through the television, that it\u2019s sending him messages. He\u2019s put furniture against his door. He won\u2019t talk to me properly. Is he on drugs? Is he having a breakdown? I\u2019m scared and I don\u2019t know who to call."',
      facts:[
        { topic:'The psychosis picture', text:'If explored: weeks of progressive change \u2014 social withdrawal, insomnia, auditory hallucinations (voices), persecutory delusions (being watched/monitored), ideas of reference (TV sending messages), functional decline (left college), self-protective behaviour (barricading). This is a probable FIRST EPISODE OF PSYCHOSIS \u2014 a serious, treatable condition where early intervention matters.' },
        { topic:'The risk assessment',   text:'Must be assessed via the mother (and ideally the young person if reachable): any thoughts/acts of self-harm or suicide, any aggression or threat to others, command hallucinations telling him to act, ability to keep safe, insight, and whether he is eating/drinking. Currently no expressed intent or violence, but distress and barricading raise concern.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the mother carries guilt and a specific fear she hasn\u2019t voiced: his father had "a breakdown" (possible family history of psychosis/schizophrenia) and she is terrified Daniel "has the same thing" and "will be locked away forever". She also feels she caused it by "not noticing the cannabis sooner". These fears shape her questions and need addressing.' },
        { topic:'The cannabis & stigma', text:'Heavy cannabis use is relevant (a risk factor/precipitant), but framing this as "just drugs / his fault" would be wrong and stigmatising; psychosis needs assessment regardless. The family history (if elicited) is sensitive.' },
        { topic:'What she wants',       text:'Officially: to know if it\u2019s drugs or a breakdown and who to call. What is needed: recognition of probable first-episode psychosis, an urgent same-day mental-health assessment (early intervention/crisis pathway), a safety/risk assessment, and compassionate handling of her guilt and the "locked away forever" fear.' },
      ],
      ice:{
        ideas:'Either he\u2019s on drugs or he\u2019s "having a breakdown"; she doesn\u2019t know who to call.',
        concerns:'HIDDEN AGENDA \u2014 guilt that she "caused it" by missing the cannabis, and unspoken terror that he has inherited his father\u2019s "breakdown" (possible family psychosis) and will be "locked away forever".',
        expectations:'To be told what it is and who to call. What is actually needed: recognition of probable first-episode psychosis, urgent mental-health assessment, a risk/safety plan, and her guilt and fears addressed.'
      },
      cues:['Weeks of withdrawal + voices + "watched through the TV" + barricading in a 17-year-old \u2014 probable first-episode psychosis; urgent, not routine.','"Is it the drugs? Is it my fault?" \u2014 guilt and the inheritance fear (father\u2019s "breakdown") to surface and address.','Heavy cannabis + family history \u2014 relevant but must not become a blaming "it\u2019s just drugs" narrative.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises probable FIRST-EPISODE PSYCHOSIS from the collateral history (hallucinations, persecutory/referential delusions, functional decline, withdrawal, insomnia over weeks) and treats it as a serious, treatable condition needing urgent specialist assessment \u2014 not "just drugs" or "a phase"' },
      { dom:'tasks', text:'Conducts a RISK ASSESSMENT through the mother (and the young person if reachable): self-harm/suicide, harm to others, command hallucinations, ability to stay safe, insight, eating/drinking/sleeping, and the immediate safety of the household' },
      { dom:'tasks', text:'Arranges URGENT same-day mental-health assessment via the appropriate pathway: Early Intervention in Psychosis (EIP) service / CAMHS / crisis team, recognising EIP\u2019s remit and that early treatment improves outcomes; involves the GP/duty doctor and, if immediate danger, emergency services' },
      { dom:'tasks', text:'Handles the cannabis appropriately: notes it as a relevant precipitant/risk factor and part of the picture, without reducing the presentation to "drug-induced/his fault"; psychosis is assessed and treated regardless of cause' },
      { dom:'tasks', text:'Plans engagement of a young person who won\u2019t come to the phone: how assessment can happen (home-based/crisis assessment), the mother\u2019s role, de-escalation/safety at home, and what to do if he deteriorates or there is immediate risk (999/police if danger)' },
      { dom:'rto',   text:'Responds to the mother\u2019s fear and exhaustion with compassion; surfaces and addresses the guilt ("not my fault") and the "locked away forever" fear with honest, hopeful information about treatment and recovery' },
      { dom:'rto',   text:'Avoids stigmatising language; frames psychosis as an illness that is treatable and where early help leads to better outcomes, supporting both mother and son' },
      { dom:'gs',    text:'Safety-nets and coordinates clearly: the urgent assessment route and timeframe, crisis numbers, when to call 999/police (immediate danger to self/others), support for the mother/family, and documented follow-up \u2014 a concrete plan, not just information' },
    ],
    worked:[
      { lbl:'Name it calmly',      txt:'"Thank you for ringing \u2014 this sounds frightening and you\u2019ve done exactly the right thing. From what you\u2019re describing, Daniel may be experiencing something we call psychosis \u2014 where the mind loses touch with what\u2019s real, with hearing voices and feeling watched. I know that word is scary, but I want you to hear this clearly: it is a recognised illness, it is treatable, and getting help early genuinely makes a difference."' },
      { lbl:'Assess safety',       txt:'"Let me ask some important things to keep him safe. Has he said or done anything to hurt himself, or talked about not wanting to be here? Is there any risk he might hurt someone, or do the voices tell him to do things? Is he eating and drinking? \u2026 And right now, behind that door, do you feel safe in the house?"' },
      { lbl:'Lift the guilt',      txt:'"Can I stop you on one thing \u2014 you asked if it\u2019s your fault for not spotting the cannabis sooner. It is NOT your fault. Cannabis can play a part, yes, but this is an illness, not a parenting failure or a punishment. You noticing now and ringing is exactly what he needs."' },
      { lbl:'Meet the deeper fear',txt:'"And I sense there might be a bigger fear \u2014 is there any history of something like this in the family? \u2026 His dad. I understand why you\u2019re terrified he\u2019ll be \u2018locked away forever\u2019. Let me be honest and hopeful: most young people with this are treated in the community, with support, and many recover well, especially when it\u2019s caught early like this. This is not a life sentence."' },
      { lbl:'The urgent plan',     txt:'"So here\u2019s what happens now: I\u2019m going to arrange an urgent mental-health assessment today \u2014 there are specialist teams for exactly this in young people, and they can often come to you rather than you having to get him out. I\u2019ll speak to our duty doctor and the crisis team. He may not want to engage, and that\u2019s okay \u2014 they\u2019re used to that."' },
      { lbl:'Safety-net',          txt:'"While we set that up: keep things calm, don\u2019t argue with the beliefs but don\u2019t pretend to share them \u2014 just stay gentle and present. If at any point he tries to harm himself or anyone else, or you feel in danger, call 999 and say it\u2019s a mental-health emergency. I\u2019ll ring you back to confirm the assessment and I\u2019ll make sure you\u2019re supported too \u2014 you can\u2019t pour from an empty cup. You are not on your own with this."' },
    ],
    learning:'Weeks of progressive withdrawal, insomnia, auditory hallucinations, persecutory and referential delusions (the TV "watching/sending messages"), functional decline and self-protective behaviour in a teenager is probable first-episode psychosis \u2014 a serious but treatable condition where early intervention improves outcomes, and must not be dismissed as "just drugs" or "a phase". The tasks: recognise it, assess risk through the collateral history (self-harm/suicide, harm to others, command hallucinations, ability to stay safe, household safety), and arrange URGENT same-day assessment via the Early Intervention in Psychosis/crisis pathway, with home-based assessment for a young person who won\u2019t engage and 999/police if there is immediate danger. Cannabis is a relevant precipitant but not a blame narrative. The examinable hidden agenda is the mother\u2019s guilt ("I caused it by missing the cannabis") and her unspoken terror that he has inherited his father\u2019s illness and will be "locked away forever" \u2014 address both with compassion and honest, hopeful information about community treatment and recovery, and support the family. A concrete, coordinated safety plan, not just information, wins the station.',
    knowledge:{
      guideline:'NICE NG87/CG155 psychosis & schizophrenia in CYP · Early Intervention in Psychosis (EIP) · crisis pathways · GMC 0\u201318',
      points:[
        { h:'Recognise first-episode psychosis', t:'Hallucinations (often auditory), delusions (persecutory, referential \u2014 e.g. TV "sending messages"), thought disorder, social withdrawal, functional decline and sleep disturbance over weeks suggest psychosis. A prodrome of subtle change is common. It is serious but treatable; do not normalise or dismiss.' },
        { h:'Assess risk', t:'Evaluate suicide/self-harm, risk to others, command hallucinations, insight, self-care (eating/drinking/sleep), and immediate environmental safety. Use collateral history when the young person is unreachable. Distress and barricading indicate fear, not necessarily violence \u2014 assess rather than assume.' },
        { h:'Urgent specialist pathway (EIP)', t:'Refer urgently to Early Intervention in Psychosis (services typically cover ~14\u201365) or CAMHS/crisis team for same-day assessment. Early treatment (reduced duration of untreated psychosis) improves prognosis. Home-based/crisis assessment helps when the person won\u2019t attend. Emergency services (999/police, possibly Mental Health Act assessment) if immediate danger.' },
        { h:'Cannabis \u2014 relevant, not blame', t:'Heavy cannabis (especially high-potency) is a recognised risk factor/precipitant for psychosis, but the presentation requires assessment and treatment regardless of cause. Avoid reducing it to "drug-induced/his fault"; address substance use as part of care, not as an accusation.' },
        { h:'Support the family & address guilt', t:'Parents commonly feel guilt and fear (inheritance, "locked away forever", stigma). Provide honest, hopeful information: most are treated in the community, and recovery is common, especially with early help. Surface and address the unspoken family-history fear with compassion. Support carer wellbeing.' },
        { h:'Engagement & de-escalation', t:'Advise staying calm, not colluding with nor directly challenging delusions, maintaining gentle presence, and keeping the environment safe while assessment is arranged. Plan how the young person will be assessed if refusing.' },
        { h:'Never do', t:'Never dismiss as "just drugs" or "a phase"; never delay urgent assessment; never use stigmatising language; never blame the parent; never ignore risk or the family\u2019s fears; never leave the mother without a concrete plan and crisis routes.' },
        { h:'Safety-net & follow-up', t:'Urgent EIP/crisis assessment today with timeframe; crisis numbers; 999/police if immediate danger; home-assessment plan; family support; documented risk assessment and follow-up.' }
      ]
    }
  };

  /* ============ 72. TELEPHONE — Third-party call: cannabis in the bedroom ============ */
  const c72 = {
    id:'teen-thirdparty-cannabis', title:'"I found cannabis in my son\u2019s room \u2014 fix him"', type:'telephone', duration:12,
    meta:{ age:42, sex:'F', setting:'Telephone — mother of a 16-year-old who is not present.', system:'Ethics / Third-party call & confidentiality' },
    brief:'Caller: mother of Jacob, 16, who is NOT present and does not know she is calling. She found cannabis in his room, is angry and frightened, and wants the GP to "do something" \u2014 drug-test him, "scare him straight", or tell her everything in his records. Jacob is a registered patient. The mother is escalating; underneath, she\u2019s frightened and recently divorced. No information that Jacob is at immediate risk, but worth assessing.',
    script:{
      opening:"(Angry, upset.) \"I found a bag of cannabis in Jacob's room this morning and I am beside myself. I want you to get him in and drug-test him, and frankly I want to know what he's been telling you in his appointments because I'm his mother and I have a right to know. Can you call him in and put the fear of God into him? I don't know what else to do \u2014 you have to fix this.\"",
      facts:[
        { topic:'The consent/confidentiality issue', text:'Jacob is 16 and not present, does not know she has called, and (likely) competent. The GP CANNOT assess or "treat" an absent young person on a parent\u2019s demand, cannot disclose his confidential records to his mother without his consent (absent an overriding safeguarding/risk justification), and cannot drug-test him without his consent. The core skill is handling this boundary firmly and kindly.' },
        { topic:'What can be done',      text:'The GP CAN: listen to and support the mother, give general (non-patient-specific) information about cannabis and adolescents, explore whether there are any RISK/safeguarding concerns about Jacob, encourage and facilitate Jacob to come in himself (confidentially), and signpost family/parenting and young-people\u2019s drug services (e.g. FRANK/local YP substance service).' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the demand to "fix him" masks the mother\u2019s fear and her own crisis: a recent acrimonious divorce, feeling she\u2019s "losing control" of Jacob and failing as a parent, possibly her own low mood/isolation. The cannabis has become the lightning rod for a much bigger distress. Addressing HER (the actual caller) is much of the consultation.' },
        { topic:'Risk screen',           text:'Worth gently exploring for genuine red flags about Jacob (escalating use, other drugs, mental-health change, exploitation/county-lines indicators, risk to self) \u2014 which would change the safeguarding calculus \u2014 while being clear you can\u2019t act on the boy as an absent patient on demand.' },
        { topic:'What she wants',       text:'Officially: drug-test him, access his records, "scare him straight". What is needed: a kind but firm explanation of confidentiality and consent limits, support for HER distress, a genuine risk/safeguarding screen, practical routes to help Jacob engage, and signposting \u2014 not a breach of the boy\u2019s rights.' },
      ],
      ice:{
        ideas:'As his mother she has the right to his records, to have him drug-tested and "fixed" by the GP on demand.',
        concerns:'HIDDEN AGENDA \u2014 a recent divorce and a sense of losing control and failing as a parent; the cannabis is the lightning rod for much bigger fear and distress; possibly her own low mood/isolation.',
        expectations:'For the GP to test, disclose records, and scare him straight. What is actually needed: confidentiality/consent boundaries held kindly, support for her, a risk screen, and practical routes for Jacob to engage.'
      },
      cues:['"I have a right to know what he tells you / drug-test him" \u2014 the consent and confidentiality boundary to hold, kindly but firmly.','"I don\u2019t know what else to do / you have to fix this" \u2014 desperation; the real distress is hers.','Mentions of the divorce / losing control \u2014 the bigger crisis the cannabis has become a lightning rod for.']
    },
    checkpoints:[
      { dom:'tasks', text:'Holds the CONFIDENTIALITY and CONSENT boundary correctly and kindly: cannot disclose a competent 16-year-old\u2019s records to a parent, cannot assess/treat or drug-test an absent young person on demand, and cannot act without his consent \u2014 explaining the reasons (his rights, and that confidentiality is what keeps young people coming for help)' },
      { dom:'tasks', text:'Conducts a proportionate RISK/SAFEGUARDING screen via the mother: nature/escalation of use, other substances, mental-health change, school, signs of exploitation/county lines, risk to self/others \u2014 and recognises what WOULD justify safeguarding action (a genuine override) versus what does not' },
      { dom:'tasks', text:'Offers what CAN be done: general information about cannabis and adolescents, encouraging and facilitating Jacob to attend himself (confidentially), and signposting to young-people\u2019s substance services and parenting/family support \u2014 turning a refused demand into constructive help' },
      { dom:'tasks', text:'Addresses the mother\u2019s OWN needs (the hidden agenda): explores the divorce, her sense of failing/losing control, and her mood/coping \u2014 recognising the caller is the person in front of you and may need support in her own right' },
      { dom:'tasks', text:'Avoids being drawn into harmful actions: declines to "scare him straight", covert drug-testing, or records disclosure, while not being cold or dismissive \u2014 maintaining the therapeutic relationship with the family' },
      { dom:'rto',   text:'De-escalates an angry, frightened parent with empathy: validates her fear and love for her son before explaining the limits, so the boundary lands as care, not obstruction' },
      { dom:'rto',   text:'Keeps the door open for Jacob: frames the practice as a safe, confidential place he can come, and enlists the mother as an ally in getting him there rather than an adversary' },
      { dom:'gs',    text:'Safety-nets and follows up: how Jacob can access help, young-people\u2019s drug and family-support services, what to do if genuine risk emerges (and when the practice would act), support/follow-up for the mother, and clear documentation of the third-party contact' },
    ],
    worked:[
      { lbl:'Validate before boundary', txt:'"I can hear how frightened and upset you are, and that comes from loving him \u2014 finding that in his room must have been a horrible shock. I really want to help you and Jacob. Let me be honest with you about what I can and can\u2019t do, and then let\u2019s find what actually works."' },
      { lbl:'The boundary, kindly', txt:'"Here\u2019s the difficult bit. Jacob\u2019s 16, and the law treats him as able to make his own health decisions, which means I can\u2019t share what\u2019s in his records, can\u2019t call him in and drug-test him without his agreement, and can\u2019t treat him when he\u2019s not here and doesn\u2019t know we\u2019re speaking. I know that\u2019s not what you hoped to hear. The reason matters though: that confidentiality is exactly what makes teenagers willing to come to us for help at all."' },
      { lbl:'Screen for real risk', txt:'"Let me ask some things, because if Jacob were genuinely at risk that would change what I can do. Is this the first you\u2019ve seen, or is it escalating? Any other drugs, any older people leading him, money or phones you can\u2019t account for, big changes in his mood or sleep? \u2026 That helps me understand how worried to be."' },
      { lbl:'Turn it constructive', txt:'"Here\u2019s what I CAN do, and it\u2019s genuinely useful. I can tell you about cannabis and young people so you\u2019re informed. I can make it really easy for Jacob to come and talk to us himself, confidentially \u2014 often that lands far better than being marched in. And there are brilliant young-people\u2019s drug services and parenting supports I\u2019ll point you to. Scaring him straight tends to backfire; a calm, open door tends to work."' },
      { lbl:'Reach the real distress', txt:'"Can I gently ask how YOU are in all this? You mentioned the divorce \u2014 it sounds like a lot has landed on you at once, and it\u2019s easy to feel you\u2019re losing your grip or somehow failing him. You\u2019re not. The fact you rang says the opposite. Are you getting any support yourself?"' },
      { lbl:'Plan + safety-net',    txt:'"So: I\u2019ll text you the young-people\u2019s drug service and a parenting line, and how Jacob can book his own confidential appointment. Try, if you can, to talk to him calmly rather than as a confrontation \u2014 \u2018I\u2019m worried, I\u2019m here\u2019 opens more doors than a row. If you ever see signs he\u2019s in real danger \u2014 other drugs, threats, someone exploiting him, harm to himself \u2014 ring us and we WILL act. And I\u2019d like to check in on how you\u2019re doing too. You\u2019re not failing him; you\u2019re fighting for him."' },
    ],
    learning:'A parent ringing about an absent, competent 16-year-old is fundamentally a confidentiality-and-consent station. You cannot disclose a competent young person\u2019s records, assess/treat or drug-test him on a parent\u2019s demand, or act without his consent \u2014 and the reason matters: confidentiality is what keeps young people engaging with services. The skill is to hold that boundary kindly, after validating the parent\u2019s fear and love, so it lands as care rather than obstruction. Then do what you CAN: a proportionate risk/safeguarding screen (escalation, other drugs, mental-health change, exploitation/county-lines, risk to self) that would change the calculus only if genuine risk emerges; general information; facilitating Jacob to attend confidentially himself; and signposting young-people\u2019s drug and parenting/family services. The examinable hidden agenda is that "fix my son" masks the mother\u2019s own crisis \u2014 a recent divorce, a sense of failing and losing control, possibly her own low mood \u2014 and the caller in front of you needs support in her own right. Decline harmful demands (covert testing, "scare him straight", records disclosure) without coldness, keep the door open for Jacob, and safety-net both of them.',
    knowledge:{
      guideline:'GMC 0\u201318 & confidentiality · Gillick/Fraser · NICE substance misuse in young people · safeguarding thresholds',
      points:[
        { h:'Confidentiality of a competent young person', t:'A competent 16-year-old has the same confidentiality rights as an adult. You cannot disclose their records to a parent, nor assess/treat/test them on a third party\u2019s demand, without consent \u2014 unless there is an overriding safeguarding/serious-risk justification (and then share proportionately, ideally with the young person\u2019s knowledge).' },
        { h:'You cannot consult on an absent patient by proxy', t:'You cannot diagnose, manage or drug-test someone who is not present, has not consented, and does not know contact has been made. Covert testing or "calling him in to scare him" would be unethical and counterproductive.' },
        { h:'Proportionate risk/safeguarding screen', t:'Use the call to assess genuine risk: escalating/poly-substance use, mental-health deterioration, school disengagement, signs of child criminal exploitation/county lines, risk to self or others. Real risk may justify safeguarding action; isolated experimental use generally does not override confidentiality.' },
        { h:'What you CAN offer', t:'General (non-patient-specific) information about cannabis and adolescents; encouraging and facilitating the young person to attend confidentially; signposting to young-people\u2019s substance-misuse services and resources (e.g. FRANK) and to parenting/family support. Convert a refused demand into constructive routes.' },
        { h:'The caller is a patient too', t:'Demands to "fix" a child often mask the parent\u2019s own distress \u2014 here a recent divorce, fear of failing/losing control, possible low mood. Address the caller\u2019s wellbeing, support and coping in their own right.' },
        { h:'De-escalate and keep doors open', t:'Validate the parent\u2019s fear and love before explaining limits, so the boundary feels like care. Advise calm, open communication with the teen over confrontation (which backfires), and position the practice as a safe, confidential place the young person can come.' },
        { h:'Never do', t:'Never disclose a competent young person\u2019s records on demand; never agree to covert testing or "scaring him straight"; never treat/assess an absent non-consenting patient; never dismiss the parent coldly; never ignore genuine safeguarding risk; never forget the caller\u2019s own needs.' },
        { h:'Safety-net & follow-up', t:'Routes for the young person to access confidential help; young-people\u2019s drug and parenting services; clear statement of when the practice WOULD act on risk; support and follow-up for the parent; documentation of the third-party contact.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c69, c70, c71, c72);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'teen-selfharm': {
      ceg: ['Children & young people', 'Mental health & addiction'],
      stem: {
        name: 'Maya', age: '15 years · female',
        pmh: ['Brought by worried mother; seen alone', 'Withdrawn, grades dropped, long sleeves on a warm day', 'If trusted: cutting forearms ~4 months, low mood, poor sleep'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Mother concerned she\u2019s "withdrawn and not eating with us". Maya guarded, wants to be told she\u2019s "fine".',
        reason: 'Video consultation — teenager seen alone after mother\u2019s concern.'
      },
      timeMap: [
        { t:'0–2',  h:'Confidentiality first', d:'Explain confidentiality AND its limits in plain language up front \u2014 the precondition for any disclosure. See her alone.' },
        { t:'2–5',  h:'Earn the door',          d:'Unhurried, non-judgemental; don\u2019t collude with "tell mum I\u2019m fine". Notice the sleeves gently. Build trust before facts.' },
        { t:'5–8',  h:'Risk assessment',        d:'Ask directly: self-harm method/frequency; suicidal thoughts, plan, intent, means; protective factors. Asking doesn\u2019t plant ideas.' },
        { t:'8–10', h:'Open the real door',      d:'HEEADSSS; surface the online bullying + sexuality fear with zero editorialising. Self-harm understood as coping, not punished.' },
        { t:'10–12',h:'Safe plan + autonomy',    d:'Safety plan, CAMHS/early help, school/bullying support, crisis routes; parental involvement judged by risk + competence, negotiated WITH her; follow-up.' }
      ],
      wordPics: {
        fail: 'Colludes with "tell my mum I\u2019m fine" or, worse, breaches her trust by reporting everything to the parent without justification; never explicitly assesses suicide risk; reacts to the self-harm with alarm/punishment; misses the bullying and sexuality trigger \u2014 and loses her.',
        pass: 'Sets up confidentiality, sees her alone, assesses self-harm and suicide risk explicitly, responds without shame, and makes a CAMHS/safety plan.',
        exc:  'Frames confidentiality and its limits so disclosure becomes possible; assesses risk directly and sensitively with protective factors; surfaces the bullying and sexuality trigger with warmth and no editorialising; treats self-harm as coping to understand not punish; and builds a safe, autonomy-respecting plan, negotiating parental involvement WITH her by risk and competence.'
      },
      avoid: [
        { dont:'"Don\u2019t worry, I won\u2019t tell your mum anything at all."', instead:'"What you tell me is private \u2014 the only time I\u2019d share is if I were seriously worried about your safety, and even then I\u2019d do it with you. That way you know exactly where you stand."', why:'Promising absolute secrecy is false and unsafe; an honest confidentiality-with-limits frame is what enables safe disclosure.' },
        { dont:'"You mustn\u2019t cut yourself \u2014 promise me you\u2019ll stop." (alarm/punishment)', instead:'"I\u2019m not shocked or cross. For a lot of people it\u2019s how the pressure gets out. Let\u2019s understand what\u2019s underneath so you need it less."', why:'Shaming or demanding cessation drives concealment; exploring function and offering safer coping is effective and humane.' },
        { dont:'"I\u2019ll have a quick word with your mum to put her mind at rest."', instead:'"Who knows what, and how, is your call wherever it\u2019s safe \u2014 let\u2019s decide together what (if anything) your mum is told."', why:'Breaching a competent teenager\u2019s confidentiality without a risk justification destroys trust and future engagement.' }
      ]
    },

    'teen-eating-disorder': {
      ceg: ['Children & young people', 'Urgent & unscheduled care'],
      stem: {
        name: 'Ivy', age: '16 years · female',
        pmh: ['Dizziness/syncope on standing, fatigue, cold; A-level student', 'Marked restriction, compulsive exercise, fear of weight gain, body-image distortion', 'Rapid weight loss; periods stopped 4 months ago; low BMI'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Presents for "iron tablets / a blood test"; frames it as "eating healthily" + exam stress. Thin, in baggy layers.',
        reason: 'Video consultation — dizziness/fatigue.'
      },
      timeMap: [
        { t:'0–2',  h:'Take the symptom seriously', d:'The dizziness IS the body warning. Don\u2019t just hand over iron \u2014 check postural pulse/BP, BMI, temperature.' },
        { t:'2–4',  h:'Name medical risk',     d:'Bradycardia, postural drop, cold, amenorrhoea = under-fuelled body, potentially dangerous. MEED thinking, not "anaemia".' },
        { t:'4–7',  h:'Open the door gently',   d:'Non-judgemental opening about food/exercise/control under pressure. Validate the control without colluding with "clean eating".' },
        { t:'7–9',  h:'Investigate + refer urgent', d:'Bloods (U&E, phosphate, glucose, FBC) + ECG, refeeding awareness; urgent CEDS referral; emergency escalation if unstable.' },
        { t:'9–12', h:'Family + safety-net',     d:'Family involvement by age/risk, done with her; red flags (collapse, chest pain, palpitations) \u2192 urgent; close follow-up. Recovery is possible.' }
      ],
      wordPics: {
        fail: 'Accepts "run down/anaemic", orders iron and a routine blood test, misses the eating disorder and its medical instability; or confronts bluntly about weight/food and she disengages; no MEED assessment, no urgent referral.',
        pass: 'Recognises the eating disorder, assesses postural obs and BMI, opens the subject gently, orders bloods/ECG and refers to CEDS, and safety-nets.',
        exc:  'Treats the dizziness as a red flag and assesses medical instability (postural obs, bradycardia, MEED), opens the eating subject with warmth that avoids defensiveness, validates the control/perfectionism without colluding, arranges bloods + ECG with refeeding awareness and urgent CEDS referral, handles family involvement by age/risk, and safety-nets \u2014 keeping her engaged rather than fleeing.'
      },
      avoid: [
        { dont:"\"Sounds like you're a bit anaemic from exams \u2014 I'll do bloods and start some iron.\"", instead:'"The dizziness is your body telling us it isn\u2019t getting enough fuel \u2014 let me check your pulse and blood pressure lying and standing, because that matters more than iron here."', why:'A reflex "anaemia + iron" misses a potentially dangerous eating disorder and its cardiovascular instability.' },
        { dont:'"You\u2019re very underweight \u2014 you need to start eating properly and gain weight." (blunt)', instead:'"A lot of bright, driven people find food and exercise become the thing they can control under pressure \u2014 does any of that feel familiar? No judgement at all."', why:'Blunt confrontation about weight/eating increases defensiveness and makes her disengage.' },
        { dont:'"Your blood test was normal, so your heart\u2019s probably fine."', instead:'"Even with okay early bloods, your slow pulse and the drop when you stand worry me \u2014 the heart can be at risk before the blood tests change. That\u2019s why I\u2019m referring you urgently."', why:'False reassurance from early-normal bloods misses the cardiovascular danger of eating disorders.' }
      ]
    },

    'teen-first-psychosis': {
      ceg: ['Mental health & addiction', 'Urgent & unscheduled care'],
      stem: {
        name: 'Daniel (mother calling)', age: '17 years · male',
        pmh: ['Weeks of withdrawal, insomnia, hearing voices, feeling "watched"', 'Stopped college; barricaded his door; convinced TV "sends messages"', 'Heavy cannabis use over the past year; no prior MH contact'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Mother frightened; Daniel in the house but won\u2019t come to the phone. No expressed intent to harm self/others currently.',
        reason: 'Telephone — mother describing her son\u2019s frightening change.'
      },
      timeMap: [
        { t:'0–2',  h:'Name it calmly',      d:'Probable first-episode psychosis. Scary word, but recognised, treatable, and early help makes a real difference. Validate her courage in calling.' },
        { t:'2–5',  h:'Assess risk',          d:'Self-harm/suicide, harm to others, command hallucinations, self-care, household safety \u2014 via the mother (and Daniel if reachable).' },
        { t:'5–7',  h:'Lift guilt + the deeper fear', d:'Not her fault re cannabis; surface the father\u2019s "breakdown" / "locked away forever" fear and counter it honestly \u2014 community treatment, recovery common.' },
        { t:'7–10', h:'Urgent EIP pathway',    d:'Same-day mental-health assessment via EIP/crisis team; home-based assessment for a young person who won\u2019t engage; duty doctor; 999/police if immediate danger.' },
        { t:'10–12',h:'De-escalation + safety-net', d:'Stay calm, don\u2019t collude with or challenge beliefs; crisis numbers; 999 if danger; support the mother; ring back to confirm assessment.' }
      ],
      wordPics: {
        fail: 'Dismisses it as "just the cannabis" or "a phase", offers a routine referral or "bring him in next week"; no risk assessment; leaves the mother\u2019s guilt and "locked away forever" terror unaddressed and without a concrete plan.',
        pass: 'Recognises probable first-episode psychosis, assesses risk via the mother, arranges urgent EIP/crisis assessment, frames cannabis non-judgementally, and safety-nets.',
        exc:  'Names probable psychosis calmly as treatable; assesses risk and household safety thoroughly; lifts the maternal guilt and surfaces and counters the inheritance/"locked away" fear with honest hope; arranges urgent EIP/crisis assessment with a home-based plan for a non-engaging young person; advises de-escalation; and supports the exhausted mother with a concrete, coordinated safety-net.'
      },
      avoid: [
        { dont:'"It\u2019s probably just the cannabis \u2014 he\u2019ll come down in a few days."', instead:'"Cannabis can play a part, but what you\u2019re describing looks like psychosis, which needs urgent assessment regardless of the cause \u2014 and it\u2019s treatable, especially caught early."', why:'Reducing first-episode psychosis to "just drugs" delays urgent, outcome-changing treatment.' },
        { dont:'"Try to get him to come in for a routine appointment next week."', instead:'"This needs a same-day mental-health assessment \u2014 there are teams who can often come to you rather than you having to get him out. I\u2019ll arrange it now."', why:'A routine appointment for acute psychosis misses the urgency; EIP/crisis pathways exist for exactly this.' },
        { dont:'"Has he definitely got schizophrenia? Is it from his dad?" (bluntly)', instead:'"I sense you\u2019re frightened he\u2019s inherited his dad\u2019s illness and will be \u2018locked away\u2019. Most young people are treated in the community and many recover well \u2014 this isn\u2019t a life sentence."', why:'Blunt diagnostic labelling and ignoring the inheritance fear amplify stigma and distress instead of giving honest hope.' }
      ]
    },

    'teen-thirdparty-cannabis': {
      ceg: ['Professional & ethical dilemmas', 'Children & young people'],
      stem: {
        name: 'Jacob\u2019s mother (Jacob absent)', age: 'Jacob 16 · male (not present)',
        pmh: ['Mother found cannabis in Jacob\u2019s room; he doesn\u2019t know she\u2019s calling', 'Jacob a registered, likely competent patient', 'Mother recently divorced; angry and frightened'],
        meds: ['—'],
        allergy: '—',
        recent: 'Demands the GP drug-test Jacob, disclose his records, and "scare him straight".',
        reason: 'Telephone — third-party call about an absent 16-year-old.'
      },
      timeMap: [
        { t:'0–2',  h:'Validate first',      d:'Hear her fear and love before any boundary. Finding it was a shock; you want to help her and Jacob.' },
        { t:'2–5',  h:'The boundary, kindly', d:'Can\u2019t disclose a competent 16-year-old\u2019s records, drug-test or treat him absent and without consent. Explain WHY \u2014 confidentiality is what keeps teens engaging.' },
        { t:'5–7',  h:'Risk/safeguarding screen', d:'Escalation, other drugs, mood change, exploitation/county lines, risk to self. Genuine risk would change the calculus; experimentation generally doesn\u2019t override confidentiality.' },
        { t:'7–9',  h:'Turn it constructive', d:'General info; make it easy for Jacob to attend confidentially; signpost YP drug + parenting services. "Scare straight" backfires; open door works.' },
        { t:'9–12', h:'Reach her distress + net', d:'The divorce, feeling she\u2019s failing/losing control, her own mood. Support her in her own right; calm-not-confrontation with Jacob; when the practice WOULD act on risk; follow-up.' }
      ],
      wordPics: {
        fail: 'Either caves \u2014 agrees to disclose records / drug-test / "scare him straight" \u2014 breaching the competent young person\u2019s rights; or holds the line coldly and dismissively; never screens for genuine risk; never addresses the mother\u2019s own crisis.',
        pass: 'Holds the confidentiality/consent boundary kindly, screens for safeguarding risk, signposts YP and parenting services, and offers routes for Jacob to engage.',
        exc:  'Validates the parent\u2019s fear before explaining the limits so the boundary lands as care; declines harmful demands without coldness; conducts a proportionate risk/safeguarding screen; converts the refused demand into constructive help (confidential routes for Jacob, YP drug + parenting services); surfaces and supports the mother\u2019s own divorce-driven distress; and safety-nets when the practice WOULD act.'
      },
      avoid: [
        { dont:'"Of course \u2014 as his mum you\u2019re entitled to see his records, and I\u2019ll get him tested."', instead:'"I can\u2019t share a 16-year-old\u2019s records or test him without his consent \u2014 and the reason matters: that confidentiality is what makes teenagers willing to come for help. Let me tell you what I CAN do."', why:'Disclosing a competent young person\u2019s records or testing him on demand breaches his rights and the law.' },
        { dont:'"Bring him in and I\u2019ll put the fear of God into him for you."', instead:'"Scaring him tends to backfire \u2014 a calm, open door works far better. I can make it easy for him to come and talk confidentially, and point you both to specialist support."', why:'"Scaring straight" and coercion are ineffective and damage the therapeutic relationship and engagement.' },
        { dont:'"There\u2019s nothing I can do if he won\u2019t come in himself." (cold dismissal)', instead:'"There\u2019s actually a lot we can do \u2014 information for you, easy confidential access for Jacob, drug and parenting services \u2014 and can I ask how YOU are doing with all this, especially since the divorce?"', why:'A cold dead-end abandons a frightened parent and misses both constructive routes and her own need for support.' }
      ]
    }
  });

})();
